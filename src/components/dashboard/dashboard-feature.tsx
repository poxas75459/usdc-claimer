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
    "5GVYxeqkJVCppAAAbAr3NYtExWVd2tgyYacrULKC376q9V436knZUxCRNFx7YqbnGzGzxwnTRQnm4ehx5pnSigWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LoQn2bkDwCWUyz6mTfkMD3v9NMtNP5Kbrk3AD6cMVNSBewho7aPkXXRS8uFTrst5jAUxidqRdT2Mx2wLFp1tUCL",
  "key1": "3YgU9s7N3i6YLdwMQJCDS5fjdUhMfuAt9HLYjiuVGkBPYSoijUpUvtyvaPUsMvYgctFtJx3jdtDakTeAeC2kTfKK",
  "key2": "2Kasn53Z374LmPh6dngNARcgp9wS8qpnth4HxgAJ1ELRQwCoWbPNTNYE5o6tZQmaob7kWjabdcY3TXTTwUeedY6U",
  "key3": "2rSaek4EFG45Y3c9RdgtcJbjq1RcyrHQFUFy9BwADZ9PSDCtBmbphukCjj8CdsBmNbjuBfkTrVjxJnGh64ieuWNu",
  "key4": "ZQY9DhHrCZNDmZXLeUNhGzzLSF6iuFNd5q8wocpbhgX84uZCBSF4n3anTgbNXaSg3mZGpwredeRdJosckpm6hQY",
  "key5": "5SUSW8ipHbXpL3iq1ev8hEQvBvMoZq2Pwa66G9ong1wJV2ac7ADKJWSfAQGXazUMRedUoNCmVMwTMrV78HatRWPz",
  "key6": "2FoKa32jWC6PxeHSNanWXpNPSXdPgPK1AZtka9yaH1PpuhWMdX37Tp1S9X5BLXu9KrGT3dNzdmsb4hacBZGadbFZ",
  "key7": "FGZuLx4AUn11DpfzQ2ywwRKEiGSvcF6GQqWSCyAc54aTVYCvH7zUPWA5aQvWMUdpRY4K1y6oYATbxS6CsLmGNKQ",
  "key8": "5J9CVQ2L2PpWv85UETjYq7kFjKBaMsLYoKzvQxZURnwASPZhXT8nXB4CwFzuwQ71RdCyLSEYL6jsbsAkow56bKmJ",
  "key9": "4kZTKWXpbTGakzjWYeAi6ZxcybX552EvVV73MPU66YtEYBBSVoHvyXysRXJXdpUVWQHciPjvcpJzFcWqmyLmYxca",
  "key10": "6RDV2iBKAWzNqJss5QPVthRgB7EN2YDEG2BsZQkd97M44WiyEz7nmPkE485PaTi4G3T5dbXug6MRHKgStDyp3Hf",
  "key11": "3a3ScoRELB9AxnYqEry2MtwTnnaXu2RhyTzWLrAzyHGsbToS6MiNWbi6brnhJNkMzRZ28zVJfzZiuMMEJR5nVpC2",
  "key12": "5CaLjs7NXzCUx3xZs6hqBdUzAgxn2GNHee4wY8AHWq3oBTcD11uufhHAPLtUwtATTpKvmnJvyy86P9pdjATdiZBb",
  "key13": "4H7L1T4rpf3JKD48eUvQ3aqmWDsXigca5R1976jkTujndD5Prx1oWyQw73zvTahX3tLeWAUx9WjQRHAZodedLbRE",
  "key14": "DPxWzjcYFthZxg99WrRmAHRneqQHjT5rMvzC9viHtwoMd6LWZR7AtKA7iCqnjuBU4ZqaYsQJ4ayxasLJYdBSvNs",
  "key15": "LMLd2nrbbDqjRcBggRfXqYuH6cXBh3BcbcxURx7pBoxMhTthXoh3A4GRUn8uPbCZXSfi74nNEJxr8oGbZ67vFEZ",
  "key16": "3ofiBemFPfh9Ce5VHL9ep4wWdteayFZ2UfjkcsobXkZvyoKg8UqEkzu9LUAS6aP8h7CivGQaRVWeWLas4MpB2oiF",
  "key17": "5CeX7qJDjE8G2epUCNaDguBt4ZW9hJaFibDG793eK3z2mPJEjYcHM5XhuK8paKk3Cha4jfTLMw4RbgcNNh5rr3q4",
  "key18": "2RYotrDAuDMPa6uSEt1AG1xmzQhV9QMd3RE5HFacao1PQGMHFwW6oUaYLHjZCvpthTLwG84Lk15t7ZvMPatzqv4n",
  "key19": "Fp4xQUSuz6DKkQNDyYj32BvweFxAzbqpGkBTEC1f96nkabQktf4wLegJCZP4jZbCMWJaqvamVomPz6J4itcamxi",
  "key20": "J3c5CAzu3mAh1n6oXrqPTc5Kgba83raAGBdWe9YdZKKuTw2cHazwBVqfnjYN4mJS5NdTRanYuucuavYoeXsXuyW",
  "key21": "5GiqTXbqR17XS8VZhukrk4JzvqrKTAV4jw7R4ykhNznSrEgupU7VpMtYam7pDzdfjVgc4CjH7fbro8HuAT5u1TS9",
  "key22": "4W8dhQDj2Smkpr91bLAxujovKHwDP4yZLpKVsJEQgDtVbFFJa2FiUaT2rkamx6Kqt1fh5aJ65NtCk7MADcmZnfYd",
  "key23": "2WQE71gWtCBiT49ZnCQuKV3Soiq1SA7AXmEenv869XHvhenJuopava5eg66m1wAhjDcYBj78r2krDFnQDWjzfnhu",
  "key24": "28FWeyRChoomraa1xZ1SbuuciXYVKtFQcWLGfFpz7u8oZqisNSqwgPa26r1f4833gGmBFLKntoBo1K8HFVbf1TxM",
  "key25": "58YX6i1DxzvRZWnQfhQFni4N15ZAyYpqZpHJ8GkZjgF41xzUDq2P9jTqoDiWp6RepByJEYojFohrVCJt2y1KCzwd"
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
