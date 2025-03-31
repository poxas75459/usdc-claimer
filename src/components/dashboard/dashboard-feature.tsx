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
    "4cvZsvdWrdpkEx6zAacX2rPY8cEneoAAu372p57N4jiPzRxyAAYAmp5rDoEwxGuTNWxDmynhnr2hXQ4kb2gtC54r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDPSytr8nw1JezfUyG8yRzPB2Ez1STpWm1ziERfLmmqoktejQWMt7tvteHTXuDQcLVMVizrhvLZv3MNQbByZoQk",
  "key1": "4XrZrj2owkuAGT3RUhWQ1dPaYCzV6iTA87HDTBxC2dg2LHX7pt5A6Wz4xhnAerVoFVjNw4q1EHW2EhXoJ4R8LCfv",
  "key2": "47WNoVVkK6EjrMqovNQKiL8UReWyvw5dubxcmDXe763JKhxp5Lx8aRrPM7oFLiyUpa7yz9KRR155HHTACqeCraEm",
  "key3": "4FdSnxrXgo7R7b8Cjj7cf87omKnaCnPcLAR9fDHSpgFfrkjBLCtBWWBFYewAG4XweiejX5eU4qWCECRppmyhN1wA",
  "key4": "61RiZDDzHqUre664jVyY8pyr6VSxCNCVMhdvy4GZJ4MyN4ipYaQqWMeJQqaryt6cQvQrcBLxpmkgSLAiZrACK6fW",
  "key5": "4E6egoV3iU2u7XDuwTucuchyDQb7mm4JhQ6UL9VWqGw32V122yVS4b7WvGdttdFRppST26pdQTprpnQEfpX21YMz",
  "key6": "MS5tiSQbKHEwquUfnJUE8P9juDy5Nc4roQoN1BQPyxyBLg7BXahm5vUAprdRpuwFhEzrqyam7bynzvy2qwbqDe3",
  "key7": "HYrae75xfdY1vpixt6BXfLZLSXMDKUAjGPbTEAxXK9vGP1HkxEkWRx7c8JkBS741xNkyorNLouH7eTRcrPmJKq2",
  "key8": "4XoHEupoxW8ms9wF5kUytbsrePdoAFxafsxDWeR8hr5MsQizzgRcS6easc3Vc35m2vC85m9oNmknmxJi8kmsyAbw",
  "key9": "4Tb5nadt9J5CjzvfSGtWD2HRJCjqVywyDkak7MWyvcxEABVrEZ9KpJ45xDKNsqrmWMptPTuZhqgPkZf4Bd8rqXFr",
  "key10": "4PZLjidLnEhZZ8HDL7DNFAB4hN6GjL69b26ft4k36YBTMn1Xe81VK9Rcku6ZhJGxfHegAXtLn89bcXESna3BVT8q",
  "key11": "QuoM3fhnSz6w4sFK6dajqniqsGLo1EmzfSeHATsX5ngWTJkMDfoD2v5NzdYcZyAgamDH67oiDXNufhreHYc25gu",
  "key12": "3jzT6yBQPHJZxyfNGpsCLAbEUUHJLa4Y8P21kDByo3dsGoPzgdSozj7cJn9zGJXpj8FS8F5oPsqErGZjGGb6BuVv",
  "key13": "5TFKzrzWbXDha5xtwFDbWyrapSTkbuvRDuVHaEucMqK5RFWspp5VUAqFwZRxM3Rq4Fb8Ph7gFS1rcMFUvtWA54UH",
  "key14": "5QbURZ3pmDFuaCrnTSDUh8EQj1n2bCqXfiPuqQQbWwaohpgdckQWZ5GPve3wrW2U3bf8rLv8JeAEjNcKmrVmSKXZ",
  "key15": "3GqkyFPzvbYyE4VwcWXmLRPKgXifURaGfRMkD7jDdmb7jWANb8mrCiavD1whXEvYPYZDU3KhBVJEK8LmU8aNg2VE",
  "key16": "48WmwZUt2KCpD74bTiAzC7Q2qjxcDXqakVfzBSu5G8TzyGQv157LZHjRNtL7DgafuyuCVB577NoeKddGNy6TqV79",
  "key17": "5jWVkBv4q2bR1c9JMMLDfeuGeo6PLGKWrYG4srNCY9drN8shYPQTKHNCu2g2k9eSTpB7dKBtr8ZPNQLsgut7E9nR",
  "key18": "3cgYjLJBBZNUnnL8ZHZ8JvgVttwcFbZwWUPA1QZeTym2zvmqaZL7mkbYGc6g1NtUYRhbCfMgu2A21MAgUjuZrtGY",
  "key19": "4mbzn76P9quFPe4d6UyAPBCinmRvaRwgd68BeHTxaYTm4rBUTd5TPRyEEENLb2goH4oeE5nnz51y7idzRhpDHBS7",
  "key20": "Y1gcJNvu7tm4kdJ9TcS42mYmaWBMxjom41syVuUaKq9rj8zzXJWdr72b7Uv9vbvGC9DFze3wbbaypBdmENW3FTs",
  "key21": "3TX3N6jNbUoYkM9p2A4RgLKh3L3bVRmvbyRMwG3oC8WdgW3xCLhjcufkW3Zj2k9f9SkrxM12riZmKYmk8eafUFES",
  "key22": "hkkCr3KgLNqLautDHkrSyuXBnr9jq5hC8QufAn9yeLhXL5yHYoTyEakeiaoRstJtYQ7koP1QVKJWwPpAMgirSHh",
  "key23": "5aqXuBaRd9TisFK9BfF5yrk5x86vYdXda7S7LeKWZNZmtjtdHt54afarm3Evaocs8x4LPb1qanXXh2aLeqehKYhe",
  "key24": "4QMHPYh7Prq6nXtSaHL2B9fdLGTjARNszAV89BoZAWrTMFu7zBD2KRrqjUKcWJCuGXk74udjbEXyaJufSUSYBXxh",
  "key25": "5GGyeDe6fbd38hW4hSGwXkvL9fg3j8qeSuS5jtGcdPsdPC6JSjRTydeAxNsjoMpAFbKVBujXH1fqgwsWwurdVdzf",
  "key26": "5ZZeCtA64LmXd2Vi5P9iZ6yHUcuznw9Sq9nCfbxRMimaoxULqyg9Hwxd8PWtRFkXWFrXoR6p2UsyBD5mnUFdYswU",
  "key27": "4BZhQmCd6WqDA6hyJSgQ3DRAMwCVkZUgwbxzfaXngDVT1fnfaSDzMzm2hBp3LGWitjjKUAFqN9z2y3tFx7NqWBSg",
  "key28": "2qpfT3hr3TnJ45j1KhqQ6gZ3xW3jemTPokocTCViyJv3MN8L7AeE8wfCfwjjDYGTnpUeb7TLynGtgDhbqQArbK77",
  "key29": "2D8vtdhFP3gSzS477nHFwE9P7hNBPejNN8DuX3qnxZr17GPdeeMVaakk9fN1uesfHu1PsP6tZnpNRTkmwnN9nPzY",
  "key30": "3MBiAq3iET8AKxHJuYJ5spzMfMNiW9Z4TXjtXSrXXV8F9b92saS1Q3yuuHK8MPgqESGLkZz8gZ15jLHwV96Fiyui",
  "key31": "3JeiJexxVnGSXPjDJkj1koDvPMHDzkXivpXw6JpNvUyexMLZK6doRsuxUFcqxZouSCQVTWStLTJKftxuNcpqg52J",
  "key32": "3q7DEZfGKCTGU83MWbQZJJVcFKHNVaQxBrB2E5FRJEVVThyoM5GXsgnNzevYuLAVq7nxchVBdxMNRkXpRynmKs9a",
  "key33": "2t4P5PbABS8aqHuP9DK2TRRpcYnJUqNpmSMJD1aFfJXXGfptNaEkQVEtHVmsmrU3iyHhTNuBrgmYvtH57dWQmZQi",
  "key34": "5kCctLi3TsDE2rsH2DmSNdvwpeDSZockD2QYVbzzMtXvFjiPDtqZu4Q7C7uLcw6XvJeVzUqzexG5FqzvzFugVTj8",
  "key35": "4bjLDkA7c2nSMEUBP4CVVumeaZJQZizXgVokvB1tE7o8kWW4Ajc2dcDmLZQ5eMZeW8MYiDh49S5c6m21iAcv4JSH",
  "key36": "3gm44Dw43q2ncpQNtpJi8Fon1Vg3QSjzveNoLrrhv1m63L2uFWEY1j8RUb3ASphUuciikwQVhd5B5SDfAUSmKk4P"
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
