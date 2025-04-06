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
    "gYLvH52X5qphrceTqDAq5N5gb3YeZaycEGkdPEwVSjVt7prt82bPZsMrq4uLkSM3nzFDk1cZDkwtvnsCF4d4VWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tszygxHijzpi3X2mcHoUcP8gjTotbrMqFmGszuyiABMWKxxAhmpzkabbuUVAV8Nm8Fgr28HYVGtvhJB6bK2RvWY",
  "key1": "sodugB928R91z9TLAFLXuFtjbXHmEJ7tLeQhAMYNC1Yj7tPS6xzpkBKFgBNNi56121VbMmEwTQWUc7QdHoE2QQB",
  "key2": "5LesxzB77ijSPMtBP4wSaqhvknzEr8qfcXf85gN4KRpuBgpj1pTYqBNbsCa3BS6YZ42UeFeU2ZyfRjoRE8SA23Sp",
  "key3": "5z6g47QLVPuJP32UVqGoXrNsoe3TY595uKHkigqSxqddG3gampMrKmijf9pBzXFJLUnEZZpYvDmvtz43At6NhR6t",
  "key4": "3oysakwZ2fNSWwPUfG5ytaYDKjdHWX4aPQbcHAZionDbn7jm98qdzQiLVrBzrQC5u3RhR4oYLRtb2tnntRXmNzaK",
  "key5": "3qNzD2U5YWuKGVAg1ti4sUgZkaV6qRdd5jTqJtSZx1WjJ2kqWPnE1ztUnMa95NU9fLdgXRPSikDLvRMcgnB7Lgpa",
  "key6": "3x59bcauuL6Z9dW1hfA6bYDYm2HybC8C2oJm19w9oY5QtT2pFwso2HfUZr4NHy82R9sVuAkoBw9C44CcMe7HZHBJ",
  "key7": "UL8ffCL7dGoWjobLFWDZiWacd9EoQcjCy4BnHJooyTmVWs56N2EoRcips3EdV86MKs2q56q5Zuau4czYgHMANqV",
  "key8": "32b8xtKNKM8x6eUSGWQ77VfGCYaEV4f9EhMoXRUhb5L6g5c5r61y5hUWnhVASYBFLJzvpk3TSd6JuVULvQ3pnz9t",
  "key9": "5Da7yYK9hLDHkuWmhXp2H5U6jABJyegrJxM6XuPTjjnnb1jYDjmwXrJsKhjLezuoiQog5q2aS1LztY1WVcYve37L",
  "key10": "64gwXLS8Ubat5JzETChAC1X5A79ubny7mXgrbEzLbbpoQwtYibBJigjPABfaq2pTq71C9GGx9HrTrQjdKtcN41rf",
  "key11": "2q6jJumsJeV8frbjVGt2YB9HVWagn9zVQqXTPnHcURzr4JQbhsGGQWrN9ADgTPo2hAuJauvtW92nEVYXih2KWS6t",
  "key12": "5EjJTi12eQCUYXNvkPbN4tJ4ip4LZdWLkWsTswT87wTbuZnvx46DQHTeMtDgnhjCkaiC2UrxGiVpbToMbnJVLkxS",
  "key13": "3d8uie9dMJ4hSCQmREwrxeC6s3aQ8pxoqzZUPpt7sE6ywiXDRhhoE9BWT1fxtiFmRCyd4LtG3B3BdDbhFK7egaw3",
  "key14": "2uHD2rGbxi8GV1McMv91cRCcR2LhGfhCWR1HoKMiERnrGbP6QPWbbCTWCUdTWehJW49avKRTxk3LBAyDnVD6PU5i",
  "key15": "4PqmLGSW1qztVLSJN9NthF8gjnyz5dSpngAhtayXrKZSFFNSEBCfxizc2JXKGhVni5gsPeLCfvdFB3rHr8GzhsFz",
  "key16": "519vVugUm6cmDSFCnXncXZJpznDFsucYb194115L8UrqMVPYadxGXuVCgfxMo54UtmipaSFVrVP5nRiy18p5i8it",
  "key17": "3fGpL6ka9LRsfNpm5WLJmuDc2AcbCpodm7RWEjhdLwM6jvk3zxMR2q1aS2DqeKtg7v7cBKD12ZoSnSdhaeutc942",
  "key18": "3aaJcaf4bvtApBgHhB1AjJ3dSBjUv8eK65zP7E5ANN9qVKpuRdg8BHMY2whCpucGFRcNVY96MVoJ6Zixp8nbxnfo",
  "key19": "5ZaWqABDGVibjjoQ8bLFB21qewe69x7JiHoddkKqMXzzpoHDh2SRuLMhH13T2oiN1CiZBxBe3xoyhnqPj7W7omCk",
  "key20": "k8XRZwCZZSyB7HnVAa5FRRZ4m1t1QqoENt64mDta5pd41LneShqwsgwCd2kWf3GqNqimnYdqPU7rBf9h4xRb9jV",
  "key21": "4RkP2GGvdmAzS3rsr6Qiie8uBz5MDuZyhfFkiGfUnszXXjeFoCAukPd652cpqXZaWUkndiMBdfjf9QwBvn1Pzh1b",
  "key22": "33VxtxV981KBSRMKsWxuHNAjo1ZGnq6ZcUdeuw8ED7jMThA8bBVjTaeB8WsPVPegBuEHuDbJTWwMj2PmTaLeiWHh",
  "key23": "A8VCJq7LTmMFbXyq9BQMYvE1he8D8F9oNVNSJ4P6C2c9uJZr179psiXM1xgY485myAXwzkXysDqd7gBWN48Dz4b",
  "key24": "5PPMLVJkzLaa48fpFdzrxv6sB8RpK4cxQ3d7kCbzhB6sCC5nBWsw9wiN2dhtjhdSHGvji4HmgQieBP9vNs7MBHGj",
  "key25": "S3vGaYLXDUpd7vNPnAVziKzXFjAnkD3BdawtpWdwgv8Gywh3hXPFhTVfEpHYWPNiuLSDxmuujoFbdweiVo5vLyv",
  "key26": "1VDA1VoPsJAD1GC2RisT6hN8JkTZquZTJYhkbFrvLXjAY2Gk6dLL6SuRHx2Y54WiTVjnWLDtiGPfWjxog4tGj2H",
  "key27": "CYhmZko9hGTHyqr8FNJq9SdZCJw1fiJZr3giQNodh653Fd6rVW9k5uLp77Hod7nLiE5MSVJqR4WpjkmcUQcGWPA",
  "key28": "4KtbQDNsrCvJ7B2YZoAVCokRZ1A7tHjY6o6kjZiLDKNpwkFtYKRCmjfS82pr5PGq35AgXnfvJPXfnqsKUaC2vb2o",
  "key29": "2GMHEPoMv2UyTiU8bGgsQarRD2EogZp3F1xQZcABrkSxdAWqRSUdiDXo71J3SukrLTR8LeyYjs3fk4xZxkbuUuGy",
  "key30": "3UJMNHT5mUdGSetxY3TBGUW2xa63aPUcNT7vNkDsxZQuTpjnNUQAmHm9wxMeR4B7aLUUDJnL9Wa8zTVqH1odhxy",
  "key31": "3L8yh2YCY66tDKFkfgZkZVZYAfCecUKxwEm32qRSme9pXAxgfEEL7PDc8dkhsmRRS77oCBrUuZqjnoo9pMTE63aZ",
  "key32": "2ArPQTpiCcMP5qrqqWENHkEChVgEzFsWdNzePf4ejhfZvkNKwu1jaCuf7SQ4o8aYLQY2o3X1ZdJYXzy9QzwGuoSW"
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
