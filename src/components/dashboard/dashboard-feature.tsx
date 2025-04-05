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
    "3fyxDpugynp67CDqFFB7tmngdBdMGMXKKAUGgtFYJUpDXSBebkUQFwDxbSeibwFpifp5zk1a7zwBqtuuMmYCk4Nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WU3jRFqrwsr2JsKDt9Y65FPAVRvvWvnRy3RwTD4Vt6Q7E57Qph6nukUL2f2DqNj5EVSRpYY3bSXWHPtpe2R3uKk",
  "key1": "2ZUxGwYnaUWxo9nFj72dCi9DKYfibctXKwbjdSiWiMH99m4FTmyXeV58ZJaFcZHGXwps3FPrGNU7oKEJSZpiEqBw",
  "key2": "5meyV4dLAgBsfXH9Cn813cFRMCYK2LGwhZaGEukmxAJpWx7J1k7aTQJ4ySRezZq7mhXSAqdj5oNxNmK3CYJniAVr",
  "key3": "39whc2imK1bEMbNy2DH5YbSniL6kioK5dzvA9K3u4R8Qg7p4NvuN3DGGk7GH6sdCcDK9EHgtYE8LfFZDL9s898Vc",
  "key4": "4Rrbfbguf3zZgzUxrmw7zeTgggey82vDPJ2oryAbrzJgiZs4cvV94PLFsaDw2kpGBF3EvKmRc2UAcSSqETmiU8a4",
  "key5": "iJZ1DGhuKexrW7zyE4aVEsbybqg7GR1UGQLBketkQ1hQqMtwEWs7jCzyvPAeAh2vpmJWFWYetT3577XLhBXQwAy",
  "key6": "ZvvpngkZWBK66bDYBq4thRZZMK7nN5SSyZP6stXgmw78pr1gZ7JjxHiD8ft7rSdwWC54xaQ8u5j9qHGYjpGZJym",
  "key7": "3E38An8n457n7JFo94wgU5T4T3s5WDP1kMLG7gkRyMTypWjMho1aPhL3s21YwFSt3P3NN7GAiGoCXAsT926GB79Y",
  "key8": "2KNyQiewAaJQTFTh9eTD66kZoqKDyqMKZ6hgYbbAEopEf12RhpEhiHegTZiZwE3FG3u48LQ7EEzNk91P7qjk9DLi",
  "key9": "2RNNYGQbkcKESUWTahuZi3jzzNY2MN3xipRjYV5RxWFrjgPcfgvjbSitxev21t5wHM2F4AAUvToLBWd8c6QuidHW",
  "key10": "dEt7QMGVWSPFsaZKmAoNZc2XD1AMTCvHeCAEUo7EGdcu5AiwRnpqCxW8nX8DB73cVNr8tJBzYaStyhz7NhcqFj6",
  "key11": "3jq6ae2A66gbztp8YWh9VJDNMd8yWthQeh3QMLJsGXjdY5YEVhmJfoD66oAv22NcuKZK3DwCXd5JnMCbm9qKYoi1",
  "key12": "3TYEKREihmHhyiEi4FqRgU4Byr8mEaVnNTZrD9ydCqYNmQAsYsTeqbnhSa759cMB3kQpGLGXU2un5cY6GKWLxvrb",
  "key13": "43hgaHbTiehPSTBpJz5ob9yL2RtFizEin6gbMzMBySWFC4417rfQwaPUL24KMgw2mhtPqe3RairZYV4yuubFnNoM",
  "key14": "5MMDBvtjQ7d9ibDyyWRicZ9WQNMkmAL5TH4Fq6WAnfmbDDVH4MKBnjmiQYT63GJDhiePDcub6vLK6J8Xdv4BhCPk",
  "key15": "3tUozURjxSJDptyjYPod3DG3BUpXrrukAE2qC5kn7V9qsUw3VhUu3UYPG2vTavxEVCBwMXzLRPzFJwwC8E4amsJU",
  "key16": "6XA41RY6FFhtkr41oeqV1T8pQsvYSgpuj4LhWjKXFdS31fSM4MLGAn7PJZfsExGJUQitSkwQ1azZ6i4opcBLjog",
  "key17": "3vivyg7PYKWvubNXqYiYKR4veSJua6dmTexMQxyULLBvKhGx7GeRNwPrF5doUUm4Pk7xB1wnd4SYWGbGxcn4QiPb",
  "key18": "652rjManeg2UWqdLEVTME2zRPyZqwBj3hSALa4xjf3H85Fd8WSmHq1DenV8EECWvJqThwjXLDfJuHpUitabL5DpJ",
  "key19": "4JiBwy7wQSBQEhcQfYDfxDKxFoQgrgve1h2nQMtokhrB6ZYsdHrjppMdbeph7ETJBVEsJdwVEnvczqVCL5dNESQR",
  "key20": "23C7EK8SzbK3iK6wKUFmNnhXwMdT85QsrHibdc3NDLU5cqZkgzw64qWUxHNLmjj9yjVAwuAGcsh8eDeDxx3CwYBc",
  "key21": "67Bc8fF9oUWcGEezYiGUUVXXg9zE5mHsDU7Jg7LcD9jZqGyjqpgbnEhi1DBDF7tjfxcu8nrXVnndHCVJWALVHgD5",
  "key22": "V7C82gwmMnEHdgPxmDuZ5KADxrrK5KggW11PibUYTnbGqYbMhXC3hW92dkzcKWDPU4J28RKnajcziqMudNALZzR",
  "key23": "4UttvrLT7WPMbfjRJy18dkRfK7dcigQUmJPeaXfAgA1J3U5qwwcsrxW2spMiQV3SZ2r1duV53rpnqPi5BywYYCXL",
  "key24": "2foX6Ti64djC6UVrpW4jU8HYqT6ERATCX4UWo4PLW37Gopz1S2dSjVxyRBjpUdFJFFqorTmBPeVTtaZyehoxjL6j",
  "key25": "2TtXwJbKajbjyMBbXHC9f6Sd2zci7n43JnGbnN3XNVUXAVJKCLai6Ys4JWGaV4xi49xKRGhGfGmkmTSU29XJVT6f",
  "key26": "2m5XCZQuwEzJ4R5bWMqPXVihtb3Re4QfyREm9ThGphZHb1rNbYPo8p4iv1i2R8wmQ4aiRF38oTjZ28XGfC5Gpp1u",
  "key27": "3E814GyjaKwJ37RrZ1Z6qTbu7QhqHUN83LudNmxVGV8swj9qQzHhEynUuu2iCD3atDcyYMVisDQrcZCu5WwpbyXC",
  "key28": "5MqKoQWHPFrkFvtXy3HJyY43iJZ1m3KFQAudXSwfNkTjNd5PwXUh3znMhqyJsQRifoDRDgXZiGmd8BZi8oAWrfxf",
  "key29": "4pK1vFmMX9J72Qu1DnyJ4aTYPSkddgwnvmMeYCScCsLmJC7VvfPnisd6GaMiHGY1aJuzkV2UB6dd3YAhw7Sj3ScB",
  "key30": "2YixvSJWeW9QjwE932zg6xH11bGAySLBDCfubkfHeUYHN5dFnk2FLXUzcTNxR1r8HU5ASySJPbCv7DW7PRefsaMr",
  "key31": "JGAjTzTjgNM8jaroDbvkYcEV3quAeNzmJgpoyozMkEtqajgB9ZERxGraBnjnBhyBh1FVceVfg4LFc31TQ9wbSWU",
  "key32": "8Dq8RH7o2qbr9pFb1P5ixLjBBwpZAijFEDmGUtP5bf4iAB2kaAaorHfTqCmCBh47FyLLtVppMm8BseEKhvTkJsh",
  "key33": "inp8YVTtpMicmGwRWc5DqocNFnS6pBQwofdS6bYdd7KnRozDfxPUPoYcJ54HJLPTzs3bzbaxEDsghJ7jNeFDkuh",
  "key34": "2TCYE3uBLjoZugbjMbcCVKfe9fK2Ngr7ENeiBR9f8b1yTnRUJ669escrvtUNjgqNS7oaiMPPb1dzYAhiqhTdwb1m",
  "key35": "2XPBMfEUAfz8D7jfHR6rQmujcRAMHRWyz99LCzrC7bnVyarHoUPFHnMfagdCfb9uxLMQmGGHe79Ckpfks2EbaCsX",
  "key36": "2pH5NTSs9WLk7Cfe3uoX5gDkurtYMaEYfJ3aRwScYUMk45of9WroPY1CLSfrxCbTfsQXtfqhBwADwAjB17HJE1mv",
  "key37": "5B7SWpCzv4GTjMdj4R2FQ33JbEz1VSiXsHRoeDiMqWQQAV1ZnVEEqG5mFQKj9XGEfY2sYtfSJiLq1iXFNLtjHx9U",
  "key38": "4FcX5wZ6uUZgMj4frfzm79oLbzmUv6in4db3iSjdb2GzKkPWfxqCX9hZgH7S3iBMZnA1nP2eYewKp4W5VRmjpmjA",
  "key39": "59im1E6xUSdmL2jx5g8KsAN6FoQ7xRLcSj535eR3Pz9bvyUBRArNKd5gYKEnSxPM2E4LcKydrYqz77ULF9zLAP5u",
  "key40": "5Pt9ifqHPzYcgaXreS3G9vJsca2tbepcr45QPj8E9gXRHSoTrVERvqSknsmSQyVzmFkdyifa2RkZi2MecaF8k5JA",
  "key41": "2CJeq6crQHskfnpAcRDVwvEBGCCSN1MsxtWvRhzGfDVGp9yTg5jtMGFvPPoP7CfLvDRA4sEY5MAHDXv29LrZFDfd",
  "key42": "62NUumqnVT2g3DTqoa2nTmf71zCeJr17JD9PuvkCVUv4YdpPtVrCmdSeHPLocorTvSEtncgrV2p6N7hoeFcVeQLe",
  "key43": "4LDZZPm1FicfVWEM1rdiNzSshJ5a38yNnC6rUyjeAh9nGnFGmXE7SzwVZe7bvWTK4yAKHKRqg5wEaPfAqYKbJs3Z",
  "key44": "3MLeqkiAHPPzQi1fJDXTxYT49Asyg3nStWAPok5TLFJpGnUn1LHZ4ETsYeeGYo2EV2Y2TXW3XVfb45FFgVNdJs4L",
  "key45": "4JJBK6hBJxHZNZuxuk2ZnhDVbC9kLfrU6VhdxK3BZj67gTSJwe5aEX7Q6pqpVMhEnis3qo67AzvjgDsNVha3kkhn",
  "key46": "5oKFxYyWfNotj5BEeRAavWktgM9vAeNdJuoLytRxDVwurifEwpZo9oayzbVC95xL9ArXYpgi44mdpBSPunKsBGSh"
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
