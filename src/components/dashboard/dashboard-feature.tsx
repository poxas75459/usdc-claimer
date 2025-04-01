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
    "5vuMnuGkHE9NLnQBz9vnE3yBJ7QYFqUesESM6qGyvuzGdYZkhNhp268CLyF61Js5PUGR17xxMz8bDKxFLmBV37Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cjqq5SvzcuFtXNd6eYcN3KuBJWEejYYLPgqnJtDJk9sucmcj2rvCYB5tArLi6XtF9nKhuYKDkgyYPLeunVoyGJg",
  "key1": "2NhQpRW74TCeWda92XRQkhRxNoWbqgmNgDTS58FparpBpQASVLRm7Lj7jGbSgf6yqqwBTycQwHQR2S6NyBT3Y8oz",
  "key2": "5yo1nZtZifTSf7bpfkWJAGt4mY58pMJ2fbFqcMQU4QRcSFA71kuoKxJkUwvdKBgN5542T2YYB9DFrfv2B7inLCRH",
  "key3": "2m8MkbqenkC6wWfMjApf6Tn6umnb3jA9Ti9AR3zfkgJ2s4HZem7XFV6CgVd8VRVjRr7g2q4GfV5MXvpjweZcWD2G",
  "key4": "9vugfaHSyihETbjhJwwapRUQZHfVbHRvNjiLDdFfhteSBe3UfankaNzu5ApJxSQvcThRhc3TLjLgQZCDGoPUHAY",
  "key5": "5qeFvFnDHjS7Aq4k1oZXkyy2Fpsnycb616cNSbH3PDEYWaWvhghPLqzgxtcWYD1tiDbb5JAWLGA4JNxFRwjoonZr",
  "key6": "5KieXfUYEs5bjPrM1oUvW4hvzba8r2xa5ANidGDwAMFDiF2Fzy29oAZe5kj4Fn2jhdWL52oVsaEw5Gqn6m5Prt6a",
  "key7": "2s2dQZqyX52GjTnCp3nT3y9WFjwqeeY5HXtxsPXhw3xVD8vWmE8WNXRYmyUR1a33b7B1fL762QcfPndJtRfZjtBU",
  "key8": "4iJm3ei9T5eC8z7TxPSQJ2K76zrUhDtNpCid7HvAMtYcEFCJThTdSbaA6Z1iXu4NV8SNaTXJo5VKgybkfCHdXTNn",
  "key9": "3DpNfVgFFCbQUmVBzRJfiRF79kvcQxsjUW9JVWUhj9oBSw37Ah7dxY9tigSvz6ixYiYbtdLAgXnMtEPWfGeX4ucQ",
  "key10": "3hPduss4m2pjEho56WkcuVdR35rgQbJc4jbP9UQ2tqgq5WvhLxhHksHZsn9zKuYUzkMgeVXwBNWTWrbxNQMjySvJ",
  "key11": "5cXJAWKPjs4Ni7EYbdUu6ZF6rp5ug1i7rdTSQp7hRgNTLj42AyVjaqXBdHdNgMFhsfmJ8drsxtbcg13Pk7Pf29rd",
  "key12": "gnP2ydGVAJ8TfT8Gotx8gB3ZUXjv1dFzbWv8aXavc5iu7UjvWFypyTu8NZ9DFqkxXN5BdFxVG2T5hn1GQ3ZjfN6",
  "key13": "2D38gApLhyv4QmaFe9m43FXYkLbKCccaXtPiBWmAi2ZdKNoawHx7MhPzkJwk3wEy9cexmsFNcRKgwQRguruJhby7",
  "key14": "52vf2WCi8QchpRrxuLLARN1iTAyYLDrhf7NVzk4ZdhLBJegYDNqVQ2rmy2Nm7Ssppups1sJuJCyBpRyLKorsXLsm",
  "key15": "4nTfnQ9L4sXA1fPLMnwjPksBGrxJLRSJ4N3miRmWP8Xa22PuVS7JPiwxdmCz8c7xZ2YvHaJHSzS7keJrrhpRLBGQ",
  "key16": "2Dtvr7h1uaR55k7ug5oibcugrALNQfy1r6S92FE3wxzUjp8uAaZQSp3jU4rdB6YJ2Tv7mggMfJUfueaeU4N1TRxs",
  "key17": "2boJMs2zx2aL46zo4BNUaBFFCFTWteCi9VGYWutP7JPMXbAqZMzoM81i7kBBvZfXk43vdoXpJiuBZazzziVpBQaZ",
  "key18": "2nvd9qqUkUondSK6QEWCbjZpKun8h8eZLNAgkMSgYJ8yZvNottWWTMCqhypKDzcAcB57YXe5so1yPKddHuy9gTDm",
  "key19": "DXMj6Q3NffVBHDCGpE43h8ee3kw5vLdo2HrePiuuYt6QBEema9yEnEbvqCfnifJnJyM5rbidD7yjCZp8e8WTLie",
  "key20": "VAHseRbHPL6r4eS8Tjs9t1UtdZtAA5RgeLF3LtJKmJzhBckiQExqHdMm4JLnPNdSMU6UereQ8JmxTzQveTeUhsp",
  "key21": "EnJ9CyqBYJTgfyPpGEWjR88yLLudyUuEA4WCW5CfrCujUw6Bfpxb1moasSTyBLq6v8efjKM7EFTXw39vKeLjKAz",
  "key22": "4RubJV5on47S8DrjY4VMZ3vHniZPapdTAyh1THQmDv8oysPEJQcYndmq7MBRcBbhHKmM2g9kpiA7j6WZD63vVHkP",
  "key23": "5hFdvtvLKqgWynks9KckCAWhpZ6fzhMZz1pTmNDoSDvLQDinyZ52bK6co3wvYAT64EVCErUx9Z7hZwvDCqbrS3WG",
  "key24": "2YUJS16TCFvgPppDghsgb6fbC26Hdk9WNkKArSwexXPRxLYaNvFWFuWEg9EsoBRuqVtSPjDDxkuiFZQ7C6ta8F4J",
  "key25": "386WbMcXpTP46vWZMgXYnJhAktLLnRKyxKPLih399PXHLjMHVTL8s5y2VYZ6QtUifEadzPTrJYCEGY5PcePrrazK"
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
