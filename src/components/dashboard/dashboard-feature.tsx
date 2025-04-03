/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4TTJbTKMp1DvjwzgUGCMGMxEdXDrzwkfCGKiEX2iPQSNAgguy8zpGauCrvH78SZBgyocC3rvAGF4W3V2d5KAK4VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QPSQCL2bdsJ8yzpSB9JJ2fjhschCAhC3PocBgLrbuRqWmxA7hdMYhitC4JSZbooJBV3XzRMbhhTzcqerBnwyfLj",
  "key1": "f9GvdeqLAzibmPPDHQa1cougHiLjPWHps25Fbx2ZevPB9q8i13T8t5RtMdAMLFua6UNVp36SyJBg1EpZuagwbHw",
  "key2": "4Y3y52LL88ExP22R9RztVBipbAUyFadTGwLAShRnFoqrJiji2cNL6NhnB4gXR7pz2nWLgx3XD4rxFPx8w7ahod12",
  "key3": "5A7JDV5Q7DVEAqNaVAbwh787b834LxfrRPWnKWL3nN5ngt8BfXmg7sdcGDqFfv7qo5DRZBbHYcjJPDiewerUGaKy",
  "key4": "2ATDyrN8QgEGc4j9kcLT83hprDc3aPDULNJkMtQcdPSpXxP7FZNAaQdUWY5wY1mmRzDbncdGvL1LF7TRsuTsFbFa",
  "key5": "mLNeSxPW2qUP3e6pJiqym2aB5Ng61udAVshQScVKZjYbr5jV6yC6qu3L967iCbdKB9F1bg7EmKh7CwU9554vM7v",
  "key6": "4vWM6eV7oDWz2ZrobXcmektRq9HCp4w5h4UUfyJPCYiKputi54CCk2UjCrXGgBUrLUUEr3w1QzWPaFugQ2tJxpMV",
  "key7": "5yq42fo2RPX2g1L7zUhExcdtkiHtHkpzWQUcShMAP1AzdkZKgWcp2oNShsjtbgJDuxj9M584Z7cDGtiKFnFLfpKi",
  "key8": "3PivxR4x5Wg84A69nRj6KywqpkPpBYnL8CoBF9VB9U8tz3hAuHxfe2yqdyDpCMAFBTfLpHpUZ3LSLkypyy8ten3E",
  "key9": "5XyJygwNJwCR4Rfwc7nddQZqP6XwWkY2zVK55wfYeNQg2NDyF3eFpVv7ZcDCeSyPJRUygU5ruEsGy7c8CuFMFEWx",
  "key10": "32aj23Y7VLGTcNwsShgY7KxhjcfyyHSw6VYKmpUJ8aZz18cXud3HTjrbXr8SEpjkhMZtptKwNvsAwpE24QV1v3DP",
  "key11": "62CyQjwSf3Cd7xc15832CmvW2WTL8rouPXdLnfV1RXhih75F5zmUgyBfSJUJJdPdy7w553kYc5UpaqqDKDXV8tr1",
  "key12": "3BPpeNbTADLyKwxwb11E2AMpQFpxw3sjo5G9fNE9JXv7dxknJ6ph8DyBpd3jXrpebCJZxQxcFP4ZYUD9Njw4hLD",
  "key13": "4J6Mqu22cfbPmAkdC9Ji8TYdBKktPgGEExryc58AVY67cHPkWs4xt9PehfZiiaxokEu1222MiHkn7vsk3THJfLBk",
  "key14": "3XAicjSaSSAhBTtCB4szf4hdHySHop8HhNg3ZeH49BpH9jUV6CPc59agUjTqENB2ijg8e3LimqcQMgtYeDcycF6p",
  "key15": "JAMJtRi8LeihhAs4k4J7UcAg7ee9MiMqdwrboLuTeYrvLq1aDSNUTdFvGfv2Hvd95YEkrFfnjKgrs7YQEusGgzL",
  "key16": "5rxxiLMujGtaok368J8BWbnKahqHepvB3kNcZw8TpqaUshQ4mATFPfzxJkb5xeXdAJGf4MHNZW6y1GztDAvZuzeU",
  "key17": "28e5ZMx7JLV5oPsnZejQd3ezHYxVHmqJZGhLuxoJv67TLcrS6nTFT5uKBEpTQrKDBHFnYZJ8trSze1b4Nii7NQyG",
  "key18": "2wyh9yt8Lz17cnNuMURJ9fKfmniiJH3xLYSSMjtuskyWZ5QvHzqkRns9FZmBZ4w7PeQrVF7vySqGQpL9MtWiCgwQ",
  "key19": "65TY2Wb4qDNRr1Um2VQdSDTeGbhFsafa8KZJAwAEZq9K1maNGmwUFha8V6AnfM8VZYURfuCSHouX8SqULyJCunkb",
  "key20": "5WPNE2i8mJ3f9biEL7iAdJCN1VYShcRQ7MGUKzi8i3D98GhRBvpWp6ZTZKjxTp1ZcpKyxgvgP4pd3BUx8vP1GKdC",
  "key21": "qsGoq6TQbCZgNHUNMCQduqm2p97k5xZmbewnfNfE4d4dSW3dapnR9oP7esQ5mCC6WgD6CVGNjDR6EEbQLhbxHY9",
  "key22": "3EsPXPGLnNPUeM8weXpedP9V64mAZg4j8AostmvKLbAH4dfsm5SDbyQAgqRJH7CVi8D1CRaf66k2cJcteQZnF4WK",
  "key23": "ZMmqxo9SUVrLQhoL6VKZYK8MgB6KJbdQq5L3EPrwDLy82wdi1uTE3SYAoEYB9ALgDNehETgHyXKyJdSbScaNcs6",
  "key24": "41oJsUpdr4PFMuuo4UBZpevugrU8MyyAkt9QeMU2QuSk3gRVaKhdiVw3ydqf5JinAoxQWQR1zDndywujXQsUvWpc",
  "key25": "jMcT57N5Zqa3gJuVzqn1E54Hyeid65FSPkFmu6kJUHPFdrgV5hBcMPqajMKKr7M2LZecRFUgDtKwCKs41LSDJ66",
  "key26": "5cTnKwX8g8qX8rsumCsxijSD9JyjArNMGnG78KYX3yET8FXiqwn9JF26KHeJyEAohitkVit3JnLr37WSh1Gfpxmh",
  "key27": "4SVcHidUEibLnWisn4gvr4EACfxtudSt51N7zkVYND8JEPqvsaiMArbQhHBzQM2LrAQdCtbFeEXxdmoxZPpnH3vt",
  "key28": "4z9vacJPCAkzm1p64Po1Z69oaiQGvuL2AbaEnTSmxHz3hDrv3Z6NfZCP78xQvympEHVkzj4uisn4kWq5ePMigT6",
  "key29": "WyHRpUKDA3LLpfvEXupjomWhzYsJ9GCpQVhkwjoQtUoPdX3792D3Nx7k5BnBjuGYDPYv4yQPWaaU8sKqBUbn8Ry",
  "key30": "4Sd9syZGhxLq15aGWu5R3bTvwyYZjx6tZVQm14khvHNks9cVi4LUtWrss94B3D21xG2AhqVT1Ks6dKWw5sQyqjpN",
  "key31": "5GdS9TDo51iEPj6mBDMY2v7dHWJCFVCLXHoHQTnXEDMZPPyyv9YGQySYpt3Y56wexpyAzuwcbo9s97LtZqxjDkMK",
  "key32": "LuzdrBJsqPLW9FpYXx2rGFDborkxNFVikRqjNQq9oBL99Mqjtp9MSWUkm2xGhmDVqYafPm827QZ4MNhCxteu8JF",
  "key33": "2gVgCDeBVgLYDKonJ7ZDuNA82NHwJUfYt719JmmyxDNXSSWKxXcWAjt5ABH8BP1eBnGRVJsdpgnVHoJe9RSJ5ZaT",
  "key34": "21YsPNv39xbNyJV8WiLhu78RWsyvpZmYuZ1VwUdsncanZHaZUJxgJrCZKacudRLntfbVY3btNoyr2SHvPG91WDGV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
