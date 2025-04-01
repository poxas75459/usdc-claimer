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
    "YwLTd5UzCcNBao4XEt4QjziSAncrGNdeK8AnuS53EM1Swtz4WCDwVk8EzedtGYebqRhMRV7atwMhsAiBoFke3mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gy7n17qbudo8vSNaYE6nT13ZgiXVQ5ab5M6DA8VZ8ji6M9HXyeDZsyQFRnJFgWgSini8Y3ChdAXTG5j8mmhuX1d",
  "key1": "CetAjfdeikZnNZP75mdUQvCa4HuNwxTtmUQ4H7DYFqtU4Qf2A9eg4f94Dde9suHXD1jn51UQsAk2GNkQ5YYYEaM",
  "key2": "3HUYhwhUZkPZmjLBa1ZirVZxVnZYELWAbytRcjn5WaRrEMDqMu2fu1iZjQmC6wviTkfCow8ctDy2VXXMcftHkTZ5",
  "key3": "2ZRfVpTueEyHNYVsg1N63pqFZsC2xVY2LjNVQdbrsXAwvcPrwUHFBhkBCJrYHNEohvDLZeFUj4WsyYKwk1tqXPJE",
  "key4": "oxs7DAcqFkECB88bXHHfrvrMGxwPaqNDHnbEbSTDpqgrEV99K1FJooayhP24zJe4E91YyXSZTgRGQWN4Y7VC7y4",
  "key5": "2Rz1xYKCqGDAWhCPfdSm3EmRjT8nG3DTd5zygjiA6sv1wy5h7R2BUzd5AebyPv4bte9XRt9tQL3boyfUj85o3g7i",
  "key6": "3keX5aZS4tBbkvPoMaPCFMbHxfNhBy86GMwvHDRs25hXcyDu5KaozDdo9y2fci7EWSuMMc99dQKwLguJjNwAqRSK",
  "key7": "5tcZwjDQtGpWFsqUmXdRGwQSbT5x5irqasSA8MPhbYUgJDbeRsy7MibjG5FEpM2zAd96foWFhByRXdFCsdnB5LtL",
  "key8": "3neoZhQVknarnL5DeNhGfq82dwHmXpnrYozGywjcL1ijddXfm8DUn3k1My9ht8umpemkUshhqsXCvXsZ8DQHfjAF",
  "key9": "5iFvuSoBM55ghf5YadP63cjPw1qo1ePAP3ed1Xa35HdcWxPYbzqcjihmUFaYpPtaesNBe8R9ThKUrKAatkgnEBQJ",
  "key10": "4i648mJ2xrNESxcuBogzj2QwUbi2gXacU9HsbJBJb2aWQLUGTYBmJNA9RmFvtdQPwG1dLqLdEaq1dS7XAULwFAw5",
  "key11": "7wcA3a2Fx1ouuqg8G3pQLBU7QHrfqfB6kt7BXFtqD1Gj4zzE96kpDUjHxszMTviiLK9DA9JEUK5hB7g8cTLKR6X",
  "key12": "23Ucpz4wxs9atYTNuLRoGYwPtgtKp7rKZ2pHcqtJrkFJhW3JWWx4FkzwigrgFMsY5UC3Sz3P2NU9GrjCdKG7YXar",
  "key13": "48WZK5JEhUChKhg2PxUxmqsKYyd2y6LsWT2FkfYARBuJ7VGtBz8un3g5MrDjbGU1Hc3zxHV949GGKuPCq9koWgcj",
  "key14": "3DPWNs7MwEycUvcS4M8VwQfNfi67aRMhfSMJte57sCHvj3rq7u7DijMcKJMJ5pJXwxQw3tfaoo2187GnfbstRgkW",
  "key15": "5MUDjtT2UYhrtuhwhP1kHZMDmUih3Dvm8gTo5FMAucgFrorw2gphZzdqyE2q7EQkwmLkwBM1H3TRWSdhJqFmtB6x",
  "key16": "4ae2q6bJXPqHVZYVqG13ZBCqhUmnGx9dDA6GsZhGZPaABNdPfPnvgDUP3gvw1PxyevR3LJXzYZdPqbfXEo4KrVB3",
  "key17": "36sbEEtHWDf3anjcEGT2e4nvUTy7Hn56SMNGnvcWJAb6eck2fUp6FYfbMdQVYC9YCEWZM6CqPLCNSgnf7ztuxHW4",
  "key18": "3FixCSN8dim2VzwwjL6jqUTu4T9CZgKJ36nLu3HfLAy8PmRgwdjnoJM6j7Bn7w7Wq6TLhKSYLAHjVzwGyvGTjY7Z",
  "key19": "2jKs1p5MTKzPKzFNvt1MkRBSwx1ga2kBzfKdEkMqA2n678x2y5JGAeg3oKAXStDMpwjJA1x7r77eztepGhHDxYmS",
  "key20": "4bdZAiw5hMZg5QgKoTnKsP25YoteFoXW1fRA8k8fNW6bUvfGjghvtscUYpGRLtsNXAXrCpCLzAXSdfKwG28B9VBB",
  "key21": "sY5vMejRrZ1D5hbpi2sH4PHBi6k4UNcj3T2kmrVmCwFaFnkLG23ghXYsncHsWHumN4VNv8PmygRpXY5oWS61GsL",
  "key22": "HCoPqjCcEkXp87VY4QMxDup5Ya2zG87wQEih9tDokFHm2dRhzGN4XBiW6AwoTCL1aNdS8kR9sQ4drEfF4YLtFS6",
  "key23": "2hvDrxATdVRnkxoVANZCeAgAwhwor6enqXcSaa7YQfXkfSbuNefC2mLxEuHWWqKmzPe3LdhHCK3GS2vv7Sftd8K2",
  "key24": "3JYg5p7fL643x2N8Z5re3msmwSsGoRMPo2MZXyHrUKZ6eMBKz6ksLtBRTbCCECbTxVquqtsv4r27VYNbpysN5JJy",
  "key25": "44Zi8WDHsmV7U3Qcpykm5iwXxVsBboa8M4rYgSqxjZ6VLgeiytFMUfEjDcjTj7hmLGJ16oTHBi1A4Ze7wvVPCCBj",
  "key26": "65KStX8pyFA7EYm9DNgjC6kTRfiocPphahyQFFpkxdSZMCfFyX8w5rUoD6bEeqJrjbjHeLQqXCvw2eXg5ZiVjDY1",
  "key27": "pKMrppp5RHUhcAaX9N7UrztDeqsqoAkyAotmXa9EPL7q3A3pdDHUSVa3FngWxbd8T1mx2DuXubU28kqhAezxwCH",
  "key28": "YoJwGcgcPavZutsXUTq8nPFXPeHrkWcMWRn1H5EXqGbcv6hNzWbDi6jTB6H6ACnv3XBT5xUhd7utoePGrWL2Vi3",
  "key29": "3gRAaNPz8QPyiL8Bw6GnZ85HhqYJQ7YELSuJUeMj8pvPy7bK1REqR4aey3KbjGjGruC4VwRmVAJiHusYkXpp1k6f"
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
