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
    "41nBmDdxzfndiaDdutor8YG9RFASEHC9pnwiLLMTfKp58hLhXYA1KTwL6tvLktaXjpN4dKFFhZzsSDL4yvYFXQgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DaFUqTEUAsAwFtjGqQGVyNfFTiUGQtSKABbrHcGfFp27ibc4Cx8QXMKFCw3dU3dPj26wB7Rox895wj3yDSkDmRL",
  "key1": "4v1uinY59TEezK7qqXtVwRC1ch16VJ14uWhNPq2pfKrDQzeN2AUWDbgSXjkizMiNkvUcsY6wCpqE4AoexGKT3u3S",
  "key2": "PrrEgh7HMmYGJBUbZahEEAvwADX2WL88LiUB6GRionHobrP2QtrfndV3NPRzhrVrBMY5S6SoXercxipHpHZqbxT",
  "key3": "624M3w878daa6B4x2wQm5bQXHvqziN5jkafZwmy3YQbuA71bnWJkv98u2sGgVpBQ6RnkbJvNryxxmZvC8sHsGCmW",
  "key4": "47Zxd8KaFufryaryoPx64yfyDGk4UqPdCxkyTEnSLmCPrtHqfqcRAZ41w3rVozpcCuG65vWjpt4mfAvmSD4PWV2K",
  "key5": "4wp19WaM15AN9RJydKDNQaSnc59tK7rwzCqFCaFyQHvf5n8H3LiNrpaosUwtAmaiDjVyB4PNyNqRsJ4Wpcnup3NU",
  "key6": "4LrfYMUAskzE94QwcwYyBsXvuXBgKED3ckLPax8Nh4gL4UMRiBbpeqmvfPpunTVijENLdscBMx7hwo4jbjsxigZf",
  "key7": "Ridq1FqJqXYLudgkz1iKv1yavCNo3dE4wm4c3Lg8UjhEiPy53Mui91Qd9Pv8oq1wV5CHe1ZoQDXaoFYaHaxjNQE",
  "key8": "35bP88S5cn5wzJCjuZSU1ZYh3i6dy5V6R61YSCeZFQwSTBun8Ue3xBtgDHsLXtpJf77nJjEekDTWgx2wPKP1uYWH",
  "key9": "3XanD1WHiQScBqbKWDPgkkBjTmXSEyHFdaDgxSGMMH29ngaK9j1mvF66gchMgK6NfbXdeiK8CxzerLKVcnRnQ3N2",
  "key10": "A4r53cmC3Drsbmk7cf17KGV7g5oojjp81kzdtyjprY37SRkwZaT4C6DPKpcvHDtXpZcsoNRkwar6G1aa9nN7kGi",
  "key11": "4A9QnonBFCbXgmkqjBEfUZ1qAmBXC6QsBNQSdoCcYfsDZczWV8zW6v6r5VSWrBWDHMXAsek4cmgQ6S3yBAagyECT",
  "key12": "53sk4GQ1MdSagkr1c3CL38M2nCNeCLxm5LHeWC6H3MyMXNUVPgcYVredS9F5ZKxdxsAUrwzrJwfFHQxA5ZcsaEBP",
  "key13": "3DJmTJWm98z5Fmfqo37mzDXULA2ZGLCKJDr4bafo5o2n37WZH7pAZWGparS3JvvaB8CtAPq9HBkNKU1ztVFiQCnD",
  "key14": "42zLzDrgxAPBFw6qSrxYFQLmNjWSPXH6GJvVU1ayMpn5K2Q3K5AYefMxCKoFfrYeiFkZod6RSRVJqtDJK5eGNTdQ",
  "key15": "66sAthKsBnYudmYkrPoSzykFLr1QeMod32XuycLGc4H11DAzSuJQ5aC1FJHZTiwky5P7gFFB6Avnfd3V4KAEuY4y",
  "key16": "3hT4ihu6orLa3ZZjmjb4bjRYo14tBn8cjp9mZVahbhUStfiHYq4wg4ziavVJTEKpaFgGWdRbKhW1Hf74sYqZoBBf",
  "key17": "3JFHWrib2pkQFmvtdM8NSGUq1qocCEU2pCX8ptxtwwq8Zg9SHUrjBHNAgGtZkmW9aRFVXQgK88CPkfFRbWipDTC3",
  "key18": "5YzxoGCbeH7hRsR3Ssen3LHK2nfvPhHKKEuyQmva9fecqHoMzvhb32PyxZCjJFfVfN1sh5r7mdAyaZrGxigycBMr",
  "key19": "KR2rENfwdCAUr9RKY44jjNtDQcrFnswTiURsBdW5oZKEmi6n6mgnysi1MejipXrNhZ5D3CDixVxdx7rcbwQzriJ",
  "key20": "4KdQ2XvLtrb3KYiouGNo8s6XmxioPk1j2kEFckCTBnJMdB99HaaaUtPrAvyERySysnSqwZXrAfR5uX8Feqb22zpi",
  "key21": "4pi7R2u9DTVzxpvz8FsjpWVmKSQgq1ojyFnfnfBDrJW83Fva5nN6Abgq8iXhC7dbgUSUkyfCkNTZovg1ZXGKmepP",
  "key22": "yo8LewZrWVeuZgNh3MQ6Ka5Dqjw1ktQT9Epm2j9vBd6tQV4GVZybNxUbxfc4wwmFZP1zRdB4AUqDTC6YQWRcJy1",
  "key23": "26WhTVK4NBGQPHV9cxrH8pEj54z1hbuDPBDwNyPiU4buaynCfkzun3suKNMC73dkT3N9qG8ybHfDS23NHrz6Z5gM",
  "key24": "ofEFyN2ud8SjQ5s6QAj4SU9FRDFVXXcbUhjQEkuhNtWqwumaGnAzD7yTZ93THtcnC4oWUFymxfifAC2YQnqscE1",
  "key25": "5AxTXAs9AMtb4egUHmen7AXBCZY7oEYAposzMjdHZy2tnaS9cJwsk47b2Sz7Zxrc1Lect4XBx1L3MpKc38RH6YX7",
  "key26": "5Nq3zfwLAFhHNEwee7TwEzuC5T8w4y8PenSmqGJfLAcVQRC4RDYwvbf3hU4nKuCEbymp1JVnwjLxW1nK2GrmnE41",
  "key27": "zWWf39jb37WNqUo7o2WVLNzuFphi8U5pvWepzFWXaMVvWMJrbwyqk1Rrqz7xG3e2uLLN7vDN4FxrNdgfw7QQVnF",
  "key28": "4EBW1enYqEQmnt6WV5Ypv75itTQLwaytZvmj1chdzfbp1MqyZZQKzPnDBeBfyz6gNCSfie6CPPsXTGMjpRqhqVym",
  "key29": "3rQKJjQL9Bk6meowX8tgNyttBha73kgv3cbvKrjWaCQmSPtu9EiDm83K3MwmaL8JUaj6Xfq2ebVaz73UHGPT82FX",
  "key30": "4F5Sz1eVgvDMH2Vr61YC2K3RtMcaP1SmGCr9L3EiGhdPXVgSWG9uwYJPo7USmWudadWJDnpEf5Tpfmf3XNGWuDAm",
  "key31": "4bLphxCRGgzozDgMFoyg35A1pRfJqVZFjg7aNTh212dBGHtfy9WPTaPmzxnyEz77aYa2ZaC3enVkAVQ58uoPcQRx"
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
