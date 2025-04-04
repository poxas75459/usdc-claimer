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
    "HdNXxUNL98qPtnqBmwnG9jh52Yqf3mY2it7SVB39tr7Dg6KzartfhU8SmzGgwemiBcBFJ8oXruTi1vAYUr6Bv1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ctcwpYT9DMMwNXMwG2iMKy1YsM1sPBV6pVN4xCQcJAE17uBgBrBA9tvhfxbmgdoxt3J1BWxVfkJN98A2zJDyzm",
  "key1": "3rqiaqC5Sg3vBHs7o4GsYmQ44AqD1U4uPSHCU5i7qU1emBZMHZiB3bjJFQWCdDxrrytpji3TshCPmXDWDmwfhjQi",
  "key2": "AKnvp78qh4BGy4udXGCd5ArjHhYCz13kvH3NrPqcTqegAkTBx4kBbh9v378aMZ13x3SPpNnswf51DHkg1wLAnWE",
  "key3": "55ZqxRqmFuZfbCwjzpQR5AEweTn2GGsGvU1sZMAdC1YcCotvKsHKDgHGuizuNcwSxWo5YL3w8n1rQ69QrKJynLNR",
  "key4": "vAzT6eVNpqHSHR3oFey3g9qoEXYZmPb481gE6u4NgU9sD1tan5RKDvgoaVWkrCJb9emvLMQ6SkEaoEba9qaDy4M",
  "key5": "365kTXGZqLjs3eiJfxsn57ANZkPz5gLFHy2ogBvUzuPDzpSdceDfJwFkuAxJzwdiMpuswaBZSo4fdH5pDZJRP38G",
  "key6": "5P4tVih9ksHywqq5HzeMC8Z8ySYAQwKqeLGqmPaBYzEZseA5KvGemUKbLyf38PLHMKjXstepP8ihzx7QW5oiM2Ps",
  "key7": "4uMfj3muYswKY7GDjbqKkDcKCLP9HEaZrB4T78wU893599unHeAr6WkhPKdBWn3sDj42yyVLieLMn6mTUKF9ULvd",
  "key8": "4bMBHq8yWxFtV16MvxnG4SVQYJi2i3ELnq59v8sag55PYGn2Ss5k7GxLPJfSnLLWLTSLpX4S2ETaEw7fWNufKesu",
  "key9": "SF1Zgov9ue9pf69fYPdtcXHPKxzBMQeoCgPAGNMk2FQsSy2VF7TTSvkP7DPuK32kcaMwB7JfYpBH84Tn3TUU1YZ",
  "key10": "5jVqtRE7pJytwfyL3sTwsjARVdWxdQngL57tWX9a9t1neqmmeEHk2wXTzSf4EYEeoQPhUBy5o7cPJ1RUnYHpYaGc",
  "key11": "2BKSLLsxscVUWNugUksrPCDnW8ZBjuDZrsftUxhHLxdpQuybMBku7jL6EzSdSduSx4DJyz9LmjfxUcbz93LriucQ",
  "key12": "3WwbMdBivHNdZDupiAMDDL8iPn2cmXgQADSu8FbDANw2zwY7JcqezuQQBTpMYbYF5F86Z72YN3WKTjh47brrs6r4",
  "key13": "4uJ9ZZwK3fGLCx5v7y5jCnBdGZta4HbxWUyr5RH6Nfg91SFGUMNeJLDFwWN6ykLki9vNPgQb3EdmRtts9XcWfNsR",
  "key14": "3VCD6uGG4yCdT6aBUw7qHwoxorNU2GTWoxLNMq516f8GJuCDB8oL9pXWQyWmRXoX4A6Jzqh6YTpTfYowkdzhycGF",
  "key15": "3h3UzcENArMW4GxZqCTH4XCTtw2YWe76Rrs43MpUqVvw1csJSjbFhoXAr678wzv9XopsjL3QGoCCvtQ6HmzxgUtX",
  "key16": "4ZMyf1LgiDeHs68cSxqYiGvky1brCS7UwCo5XYMjpzXGLDs3sxf2pP9vYN5zzitqdho8bxShD9f5ao2GUx4zBSL8",
  "key17": "3jKS4hPbgTYxDH1DcmXiZEnh9An9zVbbTGyieFbTXhTw2bzt4C66iw1bbp9Gx66XKBU8uA3m9mgUJTSxWNDK3abc",
  "key18": "3hoFPp7GCZgArAoMX5hvPqyyNQXsronABAnXHmCP6fD2HZwDibLP6yUhV5xVz4HPBoU4Ly6tWEgmPxfTdWb5qLYS",
  "key19": "Vtj7qmbbbZjYBUYRfE7LJNi5w2HZXzwJ1UgCEDEaK3t5WC39M7pzYMHYEqyQSugbm47WZ5CpadEb59Mf3L95VrE",
  "key20": "4gmzg29YndHAVTSt7wPrYdiaPpcYXYNtS6wyEfunzZVYYTqVNVqzvqqngF9hWoGEHMeGA38iHRd5RBCNNGPDsYod",
  "key21": "5iCQG2BrXyLjwnsWPrFFxGudDWy2Mn4SiRjRpe6zeSdYnwgPpvsHnqTZ42VSiNv3UpXrw7DFVTTtLwFmvbWVEGJU",
  "key22": "3NgyoH9g9nDnQuG5yyasXJMrEsfmxTwAMVJGjYwmByXWgTmqaCuZbFMK7svkug4J7pFpR9yD8Upoa5mbWQMHKy9s",
  "key23": "58f7WpsqffXAPhaRBAyLNi7iLFWEbfAVFs6QoLsvvk5bfCSqUrbBj6toU3Et44eKyxqqdhC9ajNKVHDsVrAktPDw",
  "key24": "UzdZPayD8txuhpkVLpyNgz7Yk6bf1Zw4yrS575HRiFXnA2LTdy4capTp7wBLhGCaoyLWQous9DsHQg68CsDgKDC",
  "key25": "3doVqFvpRyC65dyERzZakJpokiAnG3tXK7vTwzzJEuNXxnXwwWRgBxp1uQfegsamDVaiZTPCPH52Gi7ibQgHm2w2",
  "key26": "2MfVbJcobAgPjPi1LiQh25LA3dZ2VJtMVMpu8URW4bH5WLCrY6aKE7PLzoEhUcXzmXPsRRu2PK3TJcHb81Weui5h",
  "key27": "T1TSGdPDMf7j7WscS3h79MD4eRjucbPW64679pY7Bb9MiMGUF3NVqCkh5KSzgW8XQ4YfDNYzkhzx16HpESMHikm",
  "key28": "4HgKcPKs6rsxD5iwxU62ntMf5G5dMtkZmsbhwHjj4bJ3M2hRX2hmFiw9hqnW9fApvwfvUDaWmvcc5CemRRJzWVwz",
  "key29": "54rjvaUK1EEGt4wP3xAbztZe3uZss2zUhHMXNmEc6ZHEaALxn7A7jHBwzagWCmanNdYbiiDKtyd4h6RiLMtsDitU",
  "key30": "4Sf8UL9yzBthjvdgWq68foqWzZvJv6SVAdH4ygaDpNw6T9KT5HfgYRNyhcSd5GNPiaf93d3u6Zrgy1msMfgtuX7Z",
  "key31": "2HgBdv929tqfZUwvuLy2wc73zg7Vu9vKaiKwxjaQjVQaKV5DLh3m4fNypZJxK2fVHrY32nj8EjJTLQS6x7yqePx9",
  "key32": "3JoBGdpC6Jb5UJfuc2wcyKfozsJ8uqBYeF44bAbViBoTKkcSZWFxH9HYRpYhwt6JS6WB5E3YmzgwggajfaHWCm2g",
  "key33": "3hxRZPhQThyxhsZQgC73GYnGWhGMLSgrFnK7QKPf5kVXidmuzMwPone3Gbe7TkopAJyDEk1EVokfFc25fj9YSHBt",
  "key34": "2aTbeZSNv7ZQ4Qxw3J7s1FUrciDXoRReCc2ZiiEDQRLob8YhPA2ptoNroBHgMo1SJWrkUY7hXsMGNhRXx6nnYunq",
  "key35": "5zMMmEsbNPpazUqFphYGQGiVeJTLRKwyhgZQMqGMyyxhFtjYUBMawwwwiw8hfu79bik24ZxjY1ieGiqnYEho1AWt",
  "key36": "FiCAhjTmPXtJMQ4zLjrRENvTYo12EXxZVE5h5sEbNrA6qdewRV3mBNZa2YrweM3odmgNKzg3dKRG8SJg1WpNWT2",
  "key37": "4uoi5eQpNWT3gbD5qnxYW8J59pxWimBZaz3bpK34V7aePXe8P8viaNWRgPWEhx8kjSfHvg1nHsSQCFtrB9iinhor",
  "key38": "LDMg33iENbMtAcc3dhcdB4ciWKtECoM5BfQQ3gawspJVnpy6aJ4eUgLLXLjhVhtJfngxBGEo8bDNLpv8mpXrJD8",
  "key39": "1jJUMdXm22YNHXEAPX7YYMVi9xgcqpDSGqA7Smkh5QHFsY4MsW8XZTMKmXKavCa32DVyvmQeSXvL5TxydAntbCr",
  "key40": "5TviYZoVCME9nXLjLLhQVfcaeKh7y5azAMvgBXekQcPm9o9hHvavKhyV2n1jDK2EvZNVqULniSUYeQFzPhRKq5C2",
  "key41": "4oj1nzxNKfgWWsZe7ndkQMpjjY2GD6CSae3idDAvwuNoH84h9BEP8mjVay7VXYVmXUKEA5UJm5X6zE1vCr8nZufi",
  "key42": "5AdDEACH2vMU1HBuy2GUGHcBnKYCYeZWBogwqrAG43Zudi4R7wguQQAXufdnnNdVFtaMotXz4S8QJkZtEdrusiCR",
  "key43": "3nbWBQTejT3ADgqFNe34EfcXtAj2YeANqFkjBdsqMufykVdWNZXPM1Ynr2z2HNyEJa6yuq3unqPR4sTdFD8UTGng",
  "key44": "xHvAmnpnNhxqgTaGhmvYPVFSsEBpqPSgy4sz3KDVz24s9bwGZiK7GhcceDfmFWmd2JjpQyM3gvhaquLjQEGue1c",
  "key45": "5V9fwX3MsrQ8ygProHEfhMWN1RudZ44gZbWwWx2cpWvQvUWtU8GqhKbA6gmBgudoKGjDF3FU3UPfRscQRiWVELL7",
  "key46": "5NFQ3tP6pFqciXed4BdVdrJni5kSMo89L8kqC2DRrMAM88bLpgx1KeZsbn1pkyecfsWDC4D4dEDnDKGCzuPcyiAu",
  "key47": "crN7K3qzkbbAJmZEAWJ1iNARaGGtWAtZnwqWyXcsZMUz68QpQwPx4UzJtGvE3yYMFH9BrK42jqbALoYfEg4qB7e"
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
