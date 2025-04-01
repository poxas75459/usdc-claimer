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
    "3gXhPgMQqGJwfynJXAVXUdqD5B8uUxoMXdbbnwqeJ4NJtRCBJsZQW9AMsEQzB2MSEf2cnRspFN4uRRB4XVnatzQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfVHQUreC8XUpGG7qYLvyS1YseWErwKWiGfzgLheRrtEnVveFTU9QifXpKMjp5Gw8NJ2qJ7UbYjR97zWma381pk",
  "key1": "2FuyfGV9GKZKfZ5wKyqVgaFKApe5NqPzdWr5UwyMxoXUEN9KRFYXR6ExQvmDVqDKrARLZCKyeb6BhxvidFpzTHJ2",
  "key2": "2DTmcSkKk62oPRW2yAjbRoqJUUcc996JDnfYStkNsyVwsgQ7SfRNmvwHqwMEP83TwTyejrtqMgcBEHoX6cZfRuc1",
  "key3": "3Qrjmnpr3Xwqysm8xSWZLoH8riDVzTX8eQFUHsc1UVwFqrmNEcVpXuA2YBukAoNAurYdfPW3srDsyDea9xXg5Eba",
  "key4": "46T2LDp3NGpxMQevUJeywjPn1MgvAAASNSDd9Vq9eyLkyySqQuKBrJyDs1guZAsrcJZsejg8DXdWxpJURAB6sHX7",
  "key5": "2N1qXuVVMJcT8JSh3oXomPFqefmcPzpNj5msjQcz82nwMSmaTFuyHvQDmfxvziZxGpDwgwkswvbj7gXEH3XoGKwD",
  "key6": "3unV6oGXgpDyKWDX66MYK7thkNsEahGwEiHysHziwHjAnHHJ1Qhom9FXnpSc7tD34oENEhRomxCqG4CTCjATsfNy",
  "key7": "53pQN7Lt5up1no41PyeG3u1zHfYSjKz98SsiWtpVEwPF2iZp59zMBrxipVM964BNoyKxjEQyt7SwsVVepBfspEP9",
  "key8": "3rgL5BjvnZyPRX7S9dcqMoQyUz7K3qg9pt2cc6RLxXQSE1ebrx31k1xRCkjSv17bWVzQa1zzA3HbdkeHKmvbsheU",
  "key9": "3QFAFeDnUFqcfnaadS7cA4wLaLTggWyuPAVJsTJ2ftq78HVfmpQdBdpnQiRz57kcozgzdLPUVWSDFHvHWV4k3sC5",
  "key10": "4RexVUR6HDEGbJJcUaGiisMX8ZZvnNjofxzKGPjTWZHAw5Pm1PsEoKQfaYbrt13rj6eAmQ3LeLcsymq7ZJRmJh73",
  "key11": "5qGqaqxFVccbFXj4CppeyzmQvBdXNT4uRZtvkG6RYyrzLsbRr4Amz3jSYJvsxseWxxvbGkmUQ5b1S8N1mLokZNu3",
  "key12": "4ukzYYDBUxWEU7Gvd64eRLFvx6fx16wzroTr5CMduiJYkWJuv4ZB6pwxXs6TfChDHG7DTSFvZtssjJREQLo2DDbA",
  "key13": "5X4ZZApAmNcRAfmdGMPRRAeVUWybpaex4mxaXsUskzvF1UyjS4zHeQMRUTTGADzhxKMMpjFvTxE4KgJcYbBvPDPH",
  "key14": "5gMNyxECNPq5454Mp3mrNXPpkFoaC9sTZBWqSs6kTcHtAd6VyHUG1S7eAvS7poBN5MwUA2JrBBnMaZ3RpwoDDJFA",
  "key15": "2bxw7t9A4qi1RtoUHhGaQjEwbduKR1WgMCqnR5jJEwPwhMesYNymm1D7N5eMRGpSiH2Db8LooNPX5ENGEVJaFvXc",
  "key16": "Q6TbFaDBcFYN9ejLaUjrACqvSH5PyN8AG52frFaUWGqD3TycABSgpgfEyiwzUHvdo4ppX2G9rz19GmMz6VCEEqp",
  "key17": "2GWbs68BrUp6VaNXi1JdnYdGB4xmNmGnnnaM2yPYBSz5HZWaJJsiH45WVho6B2mqpZoJrnQZrAb1EpT4bEmHRtZL",
  "key18": "4BD3j3JuEws444dXdXvhit5HjN8jBLwksQuEWd6sSQMM6YShtHmCLZVpMt8ZYbnoR2FzpYuqB9pK8KmyzWG65nFe",
  "key19": "4SCyRXWAMsFJtjEQXk55vZg2JVeH92JZLUV5brL5M3JRvADcfdVNNtyQn9PthWc465pSmXEhTdnWuRsaC7oAhFZv",
  "key20": "2B6xEaU68YjL9nRoShE9UA56MbzyFFzbrCW6ijgm35M22ySLGbhu5XcJPBAwXMgiNdHg4121TXsnhrU8BCgoHzRt",
  "key21": "5Ci11QyXS2DxyHNXwPPdbJynsMeyzrbt2h7Za6uxm36pMD8gr1rukPQ6KVrzZCEawRj5cxbBRVzdxydYiKTgtY4J",
  "key22": "dMrR1CP8sopfWtKaBLK4CGBo5x37DzBZLkUwXEXnLcYVFQQ81v8qBPnyQhYtX5WFQL8NE6bAo2hhGsUzJyUWAJJ",
  "key23": "5BTCC4wGFiPWBjgUEJd48jNSTZQzRKswmMTku8RHHvBtHWx2eiWJZSuQDCiaDQhQM5HGxjugLBGJKXErrREQ8jE9",
  "key24": "kMWpNFcfAdWW4mTXUrrEYZyxLy1G5aPgjzTfUZhLiXuJSanb9dUBvdk79D9uURXqcEgcsQgK8E6cuyM5AQDd1Xy",
  "key25": "4f9myrc5mWxudbMssgAxunx1Pumw8YQNxVoErYu82nwUSD1TyfrNvKdwvKUnRKRFeJZreVxQinE5CsGq645ng8UN",
  "key26": "3KodXvD1Ftbet567zz4xB4GmZ4E6JZk1uEWbXoqUQeFyinoqjQDaRX5EWYB8aYzcGuiqTtQVxPYa5rf8oeYNjk66",
  "key27": "5SfffbWpULzNDtpos6423e6ZBPE9P1xX8FKoW4Vsi2DhmSiyX9XoDcJQFnLaz4JB9bEpUGXiv6eCauC3bmee3q1L",
  "key28": "4G17xYJsvEQZhozEtdANUFYztU3vXGvFkijDGTqWvBgh2PgijPxppy2cEvSNMwvqjGoEqTj1MaiFb18p22yXbwmb",
  "key29": "ZsAbzwVspGmNWtWU2FBBs535Pn6JHVG4VJ6GCBee3adnCvAPggBsU6wdsFiEY4TLhPeRY1845JweLTfANDWMKnE",
  "key30": "5gEGUrbKn8htiQhBBTQTuhGpmDysJGwiGsdUxwp6zgmXALFXzsyLB6DDpuhBwPSe8zSpfZrTSVNVzFk96k52YzYo",
  "key31": "23vGV6NWSL71fWZDCj9eGuPkwEBFiFSxrYWWyyEB8Nok1dzzQEsC6JyGmh5HzeSk6cm4wDUzL79pcsJE3vXxW2Vn",
  "key32": "4y6TTp4xdWCEDpURBEP4zvY1by6N6gEgo43kooAiKzfwNMeZALdVER8kVMo7jDsXq6MB6ba95jHBoAhJrV6PMa5",
  "key33": "2LyN57PZvYCfp5b9EByagBfDEbGLEU99Z7wczsRZvYip4NRapJpkgPBYYfyjSSwFsdPYXivYTt2uEaqWwnDGytUT",
  "key34": "zW3KqwMjby7sYR59Ep7nSpraQACL19xjUfXWrKmzc7x8uop2H6PxFFFgibDZGs2ButBSpPjmonQUjx6Y6TBuJeL",
  "key35": "3BWqo5NfdFYpWCjQN9J33v1qYgoCAr4zbjTezX6oT2f7T5Zy6DBjpbCfkRbunZoQo2if9drADf7JfZzFTubSEek9",
  "key36": "3uRNX6v1TRMi7LAgPwXPtAEuFaZhjVNmxtirxrugpuQSesfFDczu14ecqxvPFkfaSq2yqPE3xsfi842fqCdTKRUs",
  "key37": "2zrLxczsV8xstRTqZnYuyBxYHXMhwsK6Vqy3nGdwQSveXCkZazp2XEkcyVm9qH7Z9PndYYg1F29TgVEHnmjUfg1w",
  "key38": "C2iRizwiRbvSV6kmZLQG9Uxs2hFqKp6q46WepSt6NDByQwAxtPVziP5ysapyDxtEUAtzw7WXnv3F4GTZFtoacPR",
  "key39": "xcFPYvuwR68tFsrZQ3zXNN2kMKDE6EPgy95GYX2w83VPRP14aBCyVuB5ikW2sRrbbj8H1ATCR8zRhuSyPnMKmMo",
  "key40": "52dj73RSTePUXoWUuBjb2xNvukGLJhEQtqwsmgEvhLA8jDEYKhtwKzTJCh566L5wxHHtNQxEy2acUp8w1HxQpHnH"
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
