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
    "57jrgLC7XrUEt4W57oyA9UnVoNNf3fS2gctJwrFXr89oDvtmsyxxvxpNhBqcVqqEVgWEBpNGc5HMFz2CAo3VVS3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnnUrjyFW5gsUDmdCngUKBX9V4XbeFrLsBcu41xpaqSJ7DmTTEFugGU8SwQwb3noDkVhGwxo7j6RJqQwqEkkQ9i",
  "key1": "4i49eRKqNuF4JUXFdgmsktBr3g8hpkQFP8iZjNUjqyEUpE8Z9jzFn82UWTyEFCfmLNET2Cm4WhnpEmB8NyrnJnuB",
  "key2": "3jB3Ssr7aSykpX4VDTtC6yA6qEGtDCYzmLQ2bBwZynFpnkq1wVkuJM3481XKvVJog15pUJFYPWJayg4wsxjTjpTW",
  "key3": "3ojmTpY7Akey6nNqhXCTtBK5pGKVF8djcdHJCawhHieqRwJBziyeQQ5KY6UadMr72BfVa5Fdce986pdCphnECrw2",
  "key4": "5QzMiMmox8qfXZR7ksUBiSypCza8xUVqySohwGapv326iPv7voWsM37xhTtYWUe2HVUW2gYMugVgYGwMaS81WsPw",
  "key5": "5koX4oaNWSZTyNC9bfbB3dKhwEgbZsujqsSFbWAtn1a4aTy76VanUGJyuCiG7JCUdn1v1veCWUGgEvSbRP9zEU8R",
  "key6": "4Z2Ajp1aDXBTX9ausEHTYVcqQm9BygsLKxvecJY4XVVnTtJujMpV62bz3mDUYDnBaNEZTBbET6J9rZarf8nyXTvr",
  "key7": "61uZRS6EfrzWNLeikRCKScxuzwnGZ87KAQZenKw9Wg4VpeCGYjzv9nXL4gn5W6wyLkrRnNkY5mdnLLGSEJzyzbUh",
  "key8": "35PKQfBdF8rwiixKLX4Sjyr5is5BcX676PwUqS8H9Xoh9T4o5WZg5xQbwstV947HpaHwSrqG9YpTBcHYPUUKBP6H",
  "key9": "XML5tvdKqJ5jTd8oDb2TK6NCKL792FmT29yq51tnaL5tLuv2Zekg4gvWbMAZDEmAgWJez4WUCQWv6dcyCdsnip6",
  "key10": "3VVxBJPiCk1zqgEqgcu2pLh1tp4xzrPNHNgYw2qmHaAiC3FAkpaqo1LU6fYRbAtMudMkrE7PKRjBtCSgARnWfkZF",
  "key11": "SvDQMvXPd3tqDP8fzaBhuBG1d6kp88NBAwVaJVmrjUzxeCENF8WJkmMwx3SB7oE8hTkWRZ5EqNn6m7v8dJ73dYA",
  "key12": "K9GoSGtCjiabvQm2D2fEGkVuMC5u2VfLv4oEEeuqYE6KguHE3DqV7TfrExkShtBvCB1Pz33ygTxm3qYDhWTHAcu",
  "key13": "5Duq5EHrh2dQWngaK9pxe6SZBzMdKtukxbHEChaLeQVYaGQBo3F42tNGaGFz4Vi6H6yVNN6WyEe148SJHsqdbpfr",
  "key14": "2nLTN8Zq1j9AAzaMgU4ijeWinLD6ToxJkAfB97ruUcQdveoaAiibEmQLHi73F1EPZFE2ENfLqVJjYDr1YPTdXG4r",
  "key15": "4dVcZCco2kteM1So76tifeK7eZe6Z7vQESpTj6umdS4HDDiKPWGDA8WroNpkDeZoPgdo83x1KJmgd9x21zwuatTK",
  "key16": "xvhjx6VWA7B7uoPvccFDjD9Q6RCtfHk5DSEggtFpr8KTjkJDWQCVYvRNV4xFWhNUWqTFNHrtd5kFXabFmZsK6RG",
  "key17": "nVVSKTnpRsfsx5rYFQwxSaKbZQaciNpTSESSZWBiUtyfLjZZeSUZTMMkbRBfpFady8PFnhTjkwqSfRVTGR4G2xj",
  "key18": "3bKEV94LHdyKMQAg592iCG4SK3C6pDF6Vq3fUePRR8KvK15rz4GwNMQieimPnjmFTGetBMRFU5LRfoW7EUipvn8N",
  "key19": "fUFyAYTLx1tQ3KQoTvthqu8wkD6jxAnxPeg9wmwBSuvF7mnkPTLE888sMuT4uUmUMPYVP6h2uA7BHFcUHLpP6gx",
  "key20": "9de5xFfCff9ftgscSiCd1P9SMN9pzbJybegRDnxMhjDV9HZJ59MW7GQBKDRk1GqPkAe8nPESLCFfUpuDRCKsQEN",
  "key21": "3m7XsEv7dsFVARPgoNMPMDiGvsWoVLJ63uHpV6LVmh9JmYrEk3Q3C9CPGtmX8Y3peu1yZpDWan8UMG42T6FFbM7k",
  "key22": "5oxyaAw8Bm4eTLzHDQxvdFv9SyPQ2HWdYxNeEx8takgcvtu8avvR3kX3fyL4Vk6nSHDc89XakMXmmt9vHKhZSADN",
  "key23": "4Gxp616noCDNuuEoDfJP4yc1R4KiNeGYYatpH1u62J6si8oAiXPSFgVJ4ZaBV5ECzx1qTmy1DFGeerXPVytsJyfx",
  "key24": "464iBrCsk6m4ZWMij5Nc4WfG2VEnJdF5um24e9Ap6LLFwpBc9gabJYzDsW3GZz9sSPJcpr3h5rCrTsMLSwJ4fwRw",
  "key25": "5wUmhTDsueduuDo6nrqznR3nkkLxAp5Eaj8cVPAAtJnXUc4CApuP4VQ32bsYgk5dsTFdx3hPURdoWksyMy7Qq6t5",
  "key26": "4gT1iNN8nCmCPmq91Q6G3hxSAfD5wCzJ8tpEdN7CXfYCMBMsdDXNUuToeXikBfBcPt2g2NoFp2WgKxp3FMKfiW3v",
  "key27": "34svYc7BcaccCRaeyuwvxzTMTUb313Lj1mGqK57spNK6PeQQjeP18BgwqZe4CeXqzQh5XXSGwP5hw96ogYDeJ1eJ",
  "key28": "2sCr9pug1P3ovj3LGbVz9YpPdEgqm2dafX5NPMZ92K3m7yjQa8zyMabBqG7ScV8soXmwtZjeNi3FkLngAg1b45ZE",
  "key29": "2bG2ToHnDAcmjG6cY3T9Sq2wHBghQzPDUWYSduPxQ4s99mCPEizHiK64FTd4f2Am3Bhv8oduugeu6JoW2D99fHJR",
  "key30": "54tMsrw9GWAkBhPqSCsBsME5wyKkFub57qJsYCLtd3GGEjpgmxGbDHkcZPqbEmX1LuaSo6tdqw51embMTfmGj8vx",
  "key31": "4qjUxXZfemPXJiMjR61e7WeiugzaTtUHr4uFSk3rjch1oCKhPPZv6iPNKgteH9ZjD6deDRDqFrLoGAm7NtSVQAw3",
  "key32": "5DsZzUMQhZmHHSG1nmkN5Ccb5gjhAUnRms8j78ZaeMvZXLD48SSinhcj26ByXXqeMCTNnyfgWhaSWFxrtJoWBvbo",
  "key33": "5cuYu5bRAmUSS6FfttCBncJfEVHeh8uNPLoAoxfiEY1u5pBMJmmnoQmxbhw7G3WsKNfKTWpHFJDzKBGHywL5tnvr",
  "key34": "3irHXnKm6kCf2a7tv9UaQzvKvQukvkQUAmDY5UHC81obuZUHnNKRcwSZQ6S4YGrvxHs9BgH7yUyThvjHg4w7mk5n",
  "key35": "2w5ZZSBaX7quTpWpcyvSgrhGjtQNKG7SRt4PBkacqF68XSNGhSZXfFrRPzVWHKZY5XR7mmnGtqyaJWWbJ4DjJbTt",
  "key36": "42EJ6h71MVeewRHbaYQ9ztrbBRptWpgLX8exJw6Rdwb4wFdUirjHLqCwiwHCmQWSrXpq3zA19CFFRAVrggU6zEsA",
  "key37": "7Rwz3Pi4TwJz284JiMPU6sAJtLSbmNGk1oZwhffJUah28kYs751wkd8XM8cwwMnJFc6NLA4qHZTFGZwiRxJxVhR",
  "key38": "51iwDeJJjvw8qPcBFqKdnTdfCubwFv6YvamfckQsX64NqftR6xdcD5prZ6NnDt6RtfRSnTKUveAm55NQTvvTxM7e",
  "key39": "3dNvXdqSKT4KmLsWybqhTTzXjaiZfXuLGquu19EoT1czBUVM7w7vUahNDPuXF3hZxY7SiANWhdLQ15rUYHZLXrr7",
  "key40": "ZFZDmp3caCiaxgGYjNtbTxpqdTdLHzZf5z5qX71ZGXxevkviQt9DWTTrGAWxfMvKRWekBnbmNKdPHeTYNc6J1Rf",
  "key41": "5RQyCxGxZKetL82NP6TWzyayUxbqPmf1sns6gPCUDcijByee3KMsvB1ZRaxDez8VBTstsRS7zRYUzoTgJJ6y4tfn",
  "key42": "64b9aNNnTPH4JFmoYyLzFT8Ysy5vKFiFxCVVVpy2dEXHw8zxEpFXRJyBsU73ArDYWyMwk9aWpTYuYpnVpfDW7yCG",
  "key43": "65Ap6RZsjMaLPkZaembJ9UKjt3MZif9EibNUgnUJuFDzAcwStJ2EtDwYwXVonezdB3TbrWNrtEUBwtxa9HuKZgUu",
  "key44": "5TPkQLbVMDjNazR4238xfW3HfAGa1Q4VSNqCFtnbKCRJ7G8ZhMzJvur7ZehjChKrxYVFu4fQfQV5CD1J4PCzWt4R",
  "key45": "4pen8My2oJ5ofLAfzYFHdwHXKkLWRyA6Mo6qyEzUsMftWrGkH7t94BV7PYvpup7BXh3TBWbRDXuYootVdJnQfvrK",
  "key46": "3xad91KYxF6qhKh6TbDAR5CNp6cBn8yiQ3tP6uFSg82RwoCUrfcuEVWDiKXezoR6qNvBgHdrXjyn4ufjv7GTKvTy",
  "key47": "3haFYU4rbFXCKVWJXSVkBNCyjVfzmCcwybPZVwshAE7f5xiXxokZcwvGirYWg1YNAVbdto7kVWEjexFMQ9txuYBB"
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
