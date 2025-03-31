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
    "25u8EtkDBj9z8VfaWcgcNGDZtHQjGva37Jv33cVrX3s5zpwTQCdtwFbjUb6m4rywLc9EUBzp15ZYyLadMow2LhdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3szTrsMjUSYnFLQVFuJn1yxFkFeK7gnpPa5hez1987yw7KFxwQNevESp3nLp5EqWVuMeMvdRcTxY3YgsM6Nsys5P",
  "key1": "3DDNhyVvJm6N6e2NA7StxXvtdLHYGFcCq2H5L5311GHJ7HeuLrJroNcifCQf3k2xAUkao9Jy4NjVYdVfj1fL45Rh",
  "key2": "3FMjXjTwvZ1Kmq83T3kjPTg1vYkPAk7wiZb7ApaTk6RZzHKYQj9ydPA4MJjcUvcfxt2QKdphzrNSYg439d2owfx1",
  "key3": "2gXszwEEi57VA3EU3MabVr87NQnavMwV4eyjGMx9okr92Pfdk5NxyEho5c6tWjhAaZdJe7xkKaziftMFAng5CvaE",
  "key4": "5H93kwpbyaL8sjVsYyrQn37FXFTaSeBYDaxfG25bZ7hRbkK9H2EwdyscfKe9YvMqWmJhsbpnum397pvcSQdB9dVy",
  "key5": "3RGwtEqfVwVMpZQ1Qy2PyfKQJWafLwUCoXuPkh2ZN33UaTWQoFcwXjJ8mwwYepprEnXaX9osArSzvUmGVuBwfRUj",
  "key6": "4Hmmo1j4Naa6iqjF8gqb98a4FDPcjM1MNs5B2WkVDC7UDAmDLZWrk2pgcSmw6i1HxvYSAmrAxLYydCPigQ1GbHdh",
  "key7": "2CcZJC8uxk94KoFkbzqzMx6fnoFmJPbdNWtzA5419EW3Uct6ucJzM6tWsvsSWCPDTqt96VXDeHcxCWXMJ83JqEim",
  "key8": "5cMs7d4mMwfE3HbPszKDwobPwcaruw9c4RktFebBE2hdKRgz9w9tKSgma88V8N9FoyPpygtdC8aEHcbVoV1foq9p",
  "key9": "2TgpwFcpCZeA8u7xhwwLdfxcHg5hJVswrVCBVrEqXsQyUJAvk1zidBZnTH5CzKrTrPfRTP7N8uPFBdVrpe18dvzc",
  "key10": "7j2md9db7jjjqc7kkzUMHdqvtqscA2jAKyTBvmG4rjoja6nHLhQpQgfDbhigsVSKwqXWZRSKU6UCoHCCoaBN3D9",
  "key11": "2dbUqJKgLeTPHUJ6RKEZ4CEhoqNbJGYG93TR1G9vgNpYvfotfxsk11oxNYsUFGUR98Ywc2rdAvuPdMVFLgy6nDba",
  "key12": "4GNcQeZsS1ezwCo2CHLXMcNP7caHg5yf2QhjKyZEd1FBYeFVxZYWM85eR12o9twzQHgsy7LFnqCLnQnKJjMWzaf9",
  "key13": "q21rBRhqbVsRbyfZdvPCJ67qZmf1KV63PeebT2FeEUjHesf9NV84Qqc1fJqCtAkVgFR8rXkgYxTaQTChyUumWRX",
  "key14": "5Q2bZPgio4rRmDfd9Q3SFVnZwKSfkhSkAEJrA88hBTY5RxoHBxQvtzfx2LixKwXFJBo57xSUfcKBdBr4VqKTRWh6",
  "key15": "5pFx68dvEnCpfWDfNAwkytAJ4txzfUCk5EbCcYQZbTskpuMrjD4FL3UK7123AGeBxQsX5zcfPCi1M3z2DpzwZXx5",
  "key16": "4CetyxnJDB13WmtNA55aAMsbfoyhNiNSnogj9uJ3qZfoXjuU8saKNASNCsrpv1QBgWy2K6Gm6JR1eZZBZgFRu3sz",
  "key17": "5JxDYCVmme837NxognjL5zwQcWKjR9uviuMhMhcZtvs7TYZVyghkoD2dQ8YmqA7NAzYPzvj4b6HgJ5h2tZkobGgx",
  "key18": "3jUAzbstZBkyMpXaJB3dYAMfZrubspPELzM4S5XbnRoVhaj2GzkkHJEVfqywHUnTqHWRABvEtDFG5riLWB6ZJ7hE",
  "key19": "2F6YaKkZGavmA6vzYbP2j5Ug8XAfbFBXSbssh3gNpFVtEF9KAGNz9eQ9P7Rjp1VMb5SQqGaJfkednwpezUr1EF6D",
  "key20": "5HWGpYwQ8uCRuGubjwRnhb3ycwz9MQqDFL68SnwLeBWa3xVikDSQe8ZCuQzLE4q61aCCJx9cW56oxh8tiXnFxrtY",
  "key21": "3CbDVzZC4PQWKKNg9dU2ZuYAFBAZZwrUiAVkxwZpRxrk9C94oxvyhbxNA4hY8U1kN6jtKT2iVbqzkBzFqzsmr8Kp",
  "key22": "2J8mGGP3z35nLUYtrT9MyXqCNStVTsSAML9kaBPnKoXasYoKXkwSteXvV4UaEMH2xqnKsaM6by7xNXQ9TvyqXSX1",
  "key23": "EuA1HtJ5phQe8d16Cd5p5ek2Q58vdqXHxrzhzQLGc4QiMLmbfEuoJEQQGoY9o6KpXxaVjGnz6gzm9d1x3rQzZ83",
  "key24": "4kgdTzvSugBSHoc2xLKscbiqZRT76CAXBPtdfgvVKthjGZenYG1j9o2dFjkBN7pUGyJ3xRr24Gc8rmCDmDRqNfEk",
  "key25": "5hz5Co1QaFWUGCdJ4gpsjAkcJEShj9JU1Bot2QHmfZ3XNqY6jpfiTQE2XV3M2PBg1onC7C8EAP5KbH4rfviTDY4G",
  "key26": "2pLZLFNsm5YL9WNEXbSHkfH299NWq6YHv6JtmJwye5g8qXvYXBD7M1GU7NQuGJ4ygP8wxMQXUDEYEmbJAGRVJCzg",
  "key27": "3xoY8i9t4AwSsvAgM2hDnSDNdnjbUifz7nkeUH6pmVcf5QF21capti6iJHbuGoxtzQYhQqxXUfoufDgdaLt95Zpy",
  "key28": "b5QWSfYvzmG8taG42drhSUwmADFVqdyNcxP94TUKWn59tKNY8qaraSJh7XpFrCFZ4YcY4dw5eieX2DJYZkxBwuu",
  "key29": "2VoASz1dGfnaQKBWbYuJREVVLRT8dQgJwXbMRuDE5h9nwQVq1fo9GiLzgv9iXD2fmZvnRQS4A1qLRoHbXZKwphcv",
  "key30": "5iwwyJW9KAhrJkcK2yt2EUdHAB562DV1EGCwHCA4bvYikquPKFgUh4kC6KXbdLyvfjKgmGAFL51wrdscGr1dNchF"
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
