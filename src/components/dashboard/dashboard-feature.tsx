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
    "2BRSdbYiNTareeGv9yiYcYGXEu4LsNqhH642YPkKSGz5MSZbhe9qaNAXhi7qMMoD5237SUiWzvpEYntaSgeJJhdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXbfKEZjvTrtdHWRFJQyk83urfPadvPWjQMho3MpbvMwitnKmUNHEHpWHL4DoGTEoL44nkEFzF3i4hxgP36zVC9",
  "key1": "3yUUWYZNnq59FKooGHFEt4oGGxERAr3sufxZeCDjXbyVaCVB7AmwJYj7m4jM6KdB6vHYpnJY3vw2wBcWFkK4c6E8",
  "key2": "4t2hfKKNs4AUQwgYjVLBWh85PPUzLTBXEAPqR8BwAfc9eLNVcR6GtykRnDcbELkGUmHzudgqTjfQ4wGiPzzfbKRh",
  "key3": "5QRuiDxr52i3DUuxbtCmXCZzgRBUDF6r6Y8pT85PumaVNMWdeY43o2HK1BhKbSBt5ciR61umY432f3oj5opmWvTF",
  "key4": "3iRC6Qm2QbpkwtsSKy9LmTdSv9svExcVn9sA787WRb3ym83CN6iJxZK9AvZTMAoE5XrzseNE4FbLXhAktrc3FYej",
  "key5": "5Wpzvts5YHDtDDu2WYyMzurPspV2khL8S6Z9VYiogvF56niWAyXBHJcTjfRj5sVvytpFM2pVQD8UVUFafRQtPCqF",
  "key6": "5WRLvVXAZamWKhiZ4FvvnwKRTso7G6vxSroSx1RWdTc7sEWcSvtkhDBX75cgh5nLDmX6xJJhzvBpZneMreXVDNPJ",
  "key7": "3iB5k4d5wpL6UFCBHL7We7qcK3po482TJvBEXFA7kH2fPB5rRPtn646aTmLVrRDRYSikhTCK5WdLSCjuQXo68F3L",
  "key8": "3Z2dyqoKRGrawxa5bjiL8DTxnkKC9Jvry5eEcoCRxK5Koj9K91WYYdms4CWXoUzHzjQ2f4dQmrYjKGE6XwsS9MoF",
  "key9": "3soencNrkb8SKvpwqfghTuwokPsBVGAf9btPAEbpYKhawEZQRHYysc55VEN4wrajr8niCt54PQE1uzFes6GCXECP",
  "key10": "2iWWbBLsWdnpEtyWyrjKYbtidcQvnhN1uqKqpwsbMnjLi2jC3msvwJcMUtfsKUFxPGzuviczAzHRa9EYLJjD9cop",
  "key11": "3UDqJxdzD6XVY7hrn18JYu9RRKUXzz8gcaCoi8A5AT5VYJNSDCtkPVT5eTou9CHGi4Shkccrp36kDZCVE9MBg8hH",
  "key12": "39433V8q49HHmsSkMkCWVa1TTYGCfjAmKgHWCdriVqNK2FLriJF71n1FwAjcg3sx4zGxmdWzn5posHiZTH73k3g8",
  "key13": "1MnEsEZPYWkXpZtyfwu1wUE6jePZqzDut2PWuGaq52oPcRSH5AWfF5fpde5KhaiTZaNYng6UJx8bBd49xfzMUys",
  "key14": "3PX7MZmVJMB21ZWUrSMz9YvzAcQbaRcbBGVssDtLBqiwymqm5iWUJ8nH3Roy8hQSo3DRiYYHj3mJJGq451aQkwJn",
  "key15": "4pb6yiZJJSJ2foy6Z2F9vTNAz75Aard7sTDxVUB53wmHhTSe3f2Jr9FfeRm8tr4bqJUeHdaNSQeh2x5LJRJVnkAc",
  "key16": "2gdVRzRDu13DuK27Mfpv7Kvba5KKdyV97KgPr5zqDJuHQArjNTwQ98qvXiq71ACYH44YJmDFD28yKGV32wRgvV2h",
  "key17": "2R1rQc3u88sbmC9zmfeoYoBg1KwLDpNdBRCHF7psM9dUFzLQgW5CLBgRYa9euBbJvhkXJ1RGvonPHK3HQKgksYng",
  "key18": "4MTjEV18obCm8j7F4kascFS2FhfJ64EambBGCUKpM1aSpP53w8v1k12xeThXy6mAKWxWiUEAwiQJRpmJWd51Rnju",
  "key19": "3yaBsQdCt5H75TXsJuHV6QrKjmTLhU8Ybm7ySHSzNd45QYguFMNqhEEQC6mEjNwBg8mUF116YV1SvjzF7vucL5bg",
  "key20": "5UA13r6gDBYjfFVo5x38sfwS87aL8GYg3MPYdR5GGVHZB3xnbN7ygC9iX71PRBMpy15Fv3AmEkFAwZBPEac2nPYZ",
  "key21": "nXjLppWJ2smisfRfhbnn9Zc4q4DVXbpkVQkZ6jT38ngEWfxET3U9UVgaJasbt7RbtPy8QBXt9JgngKL8xAA3HbV",
  "key22": "5VbDo7S5q4cV312sQ3k9RYtav1V1QC5tUoh1BKMQDNurdSr4r2p9k9weNJxSppSaQPt5ycboaZGMMvB5FhG2BEZx",
  "key23": "458vULLuEB2eCAQed7rgvi8oxtrEu2dAgbWvzwq3RXFaxh3HeJxZnmXnbLSGJkwG79fabcPLwC1XNFJVcgGdR8aA",
  "key24": "gAo1v23xuEssYuvMQe1bMoBnrMkBSJpHdQEXtGzXENyPZ9Lc3eMLiGAFDf8bbbZmm5gB4DzB52956ZTpuLePpo8",
  "key25": "5KJbS2wh98w2pfWteVFH1Eato8MpJ5DNsAMme3JuUL1k898yxnPWQwDfNJcNK6ZYzuw5CaMPiWh4rX4AMvby2JU1",
  "key26": "A1ZGPvv94i6xZWF2QJJA1qQx19weEXWXXHGGGTQvMiLBHL647zFYp3iycqbaTRv55vdBrYstLq2NhNjeU6JgHGb",
  "key27": "fCvdY7Ng6fxkBxNpFpQ1gT6GT2qVyYHi5rWmuCBBHKUgmqs8bvgpBzETtKVJtB5vXWgE9wVeiL2YzcypZBohjj7",
  "key28": "4GVzotvmGaXk9GY2KLYafM1mfiQfbKThBcSuRkHkWj4wSAyNwuTYBs8VoRSNfViUKMo3iugUsKrbFsTCR7azcCRZ",
  "key29": "GKtUbaWgak6XMRdWmLmtWQxoF4QGDKgYVCMhW8GM2h4mz8WpbVFpTybtLAkJNMdhArwMJVaKvfF8ipi3YchKjv6",
  "key30": "2rLAFxPS3dAYeJJLwYx2NFDf1GTbGWAiyDM2jirH1G5PSDnivhCbJyup5TQSGKMtFxCGUAD4uE1jiTJiuDFPHaHF",
  "key31": "2SQE18uZi3Th8iRDDAmwPgebxKsGWNy5YPCcuJJL8RWjt5PBKLsK3g4FUBBSgLa6nEd8H5hFLVub21m6MRaYKchy",
  "key32": "4vjC1qhZWPF2fRyjYQtVLXmeKnfsTH4PMuf4TUB51Mu9K5vDaHpSnzkQsuqXomtFR4qEhM8gnWPDTH5Cbq98DKuH",
  "key33": "2Sn8Uzf6xqd7Xa2NhMYjmzau1ssSorzBsKhy7AqHwZhyxjhx5fG3gtBDHSKhQKGwWmpBTjksRw4XYjGb7JmEhQSz",
  "key34": "4fvwkYumCuZKJJN76CFqCuquPQm5FzTsVAKB7gC7ZQQJSUe3ZXgQL9SKm4xf2oXFJSVe2v9hogTFoPjnp5mszoSr",
  "key35": "4VxCynQ4Nr3xZnrWDf89HocdDoXxxp8oQi9TScJzpYi5oELELMNthb2koqR4VvhfT8GoChREXakm6BSvSdQmunGq",
  "key36": "2V5MgxB6rU2XM9bvVbg3PCsFErbXHMUgrhnk1fTgj81SGEm5wMXxLUorqSU1Bo4vdmAutSv6AWRZvNhUb9dNBR3P",
  "key37": "46zN78on4pujGEmsLj75Bc3gi1cGKPaoFCQwGUSe3MCVZKtt7fv3VtTG827kzZCphnY3VcaJz3ejydy5iwhb5Uhs",
  "key38": "3UJS4eWb6sz8CHZcQkEkgesBQdTjt9Cy1X9gpm6e1oeMdWCTUSKLSeMePvgVzX1ugsVcT2rwo9WCktGsjYYznVzr",
  "key39": "SVDUH73ybkks56mWHi9WW6tmLKtoFed8cyM1pksxfBFsJ4TY5f3rbzCBaLFceyvJcq1Qu25iqiMaGn6N4K8tViy",
  "key40": "3mBvfx38gP3rM89FFiikkwvtgP2gRaSni8GtFWxbZ2KLeWpDoU3zFj3MGXosbM7h9Ffik9MPTvnnrZipH7DurEho",
  "key41": "2N2yCPPjKjvDt84CuyhNWy6zLdGNxNytkxawDTMqPsZRtY2bpcdF5WEuqqTPKN5Bjx8oo3TnJeaeV7e2SBHUcdzZ",
  "key42": "3QWePBnoqTHLmrh3HEyqMnQhnA9Vwg9BHtdVKPPH4s5FxtWNXdaFrJfDRWhABWjHjYcxQBMaD9KLdEDbPBwRFY8m",
  "key43": "44wscZdEjubtfiZrrb2YFn5MxZx6Pu8VaPZW6acs6uX4dCwE3NFvjjXBf7TrBksVmxch6RuEctZt37nzhNXsvurB",
  "key44": "R3AvVpVxD2N1BJ2s7uPYxpHZd37LESsihxyNPimoikrwRr1L4rVHfJs1wBR1odX6KbUnqj7ESmBRYd1ukw7JdmK"
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
