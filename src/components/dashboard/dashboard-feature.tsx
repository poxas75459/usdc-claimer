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
    "2r9F8AsUBszZfnAKctAr5kvo8R1pqN9thQn2y5ZfpBYg2FHnJ54E4AwZPuGUnqxuMbai79ZhHbDYhpYxQZkMbFBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xbgg4rWFTqhaPVkNEcPm9UW2gyo9Gf87foRrTZnYfhb35gEkcxtMpvwMKqB6s9qZwFCtiqjvao1GLALPFyB6rvi",
  "key1": "3tJ9FFFMppXNWXrwtPd5PDzEnvADtU1cZEy6TmnjbmCbPH2o8J4hFQyu4yJiyt5aZ2WPC53yFYFV3GuAXPbuRTxK",
  "key2": "35Razn8v8LvU1gjueThsUrZuPaK9EcAJs7wacaUj44cXoGftNhcC88TSSQJUEKad7A94eKegvHXbk9P2mEL8SHX2",
  "key3": "34espV6VhckMTqMHgBXJQhXorxDied9zJHDUbadfTCu8p8pMJwFGB9vpwKkQNQkHZGnY3GfcuGVofXTaRxeo9Xwp",
  "key4": "4DmmTZFAQoEYVMghmw3QGfnuVRceVRoYtEcVuHQyDG29qD5Y4yRUJhmaEhuffWSRwuPDZctir4fHjevY6R9kBhBw",
  "key5": "57y5rAtVoVWKazbMAFjqXFLtf5kBUXVZqAjNMc5y67EUezxmP1QMm3Yjp4vJJwRgatDmowEth3VHBg3oYAJCUsPP",
  "key6": "3pphbi8XmvKgNJSsW11QxJ6qr9fDE5juYFo4Voj13jiW3rmHU3pPtE14CzhjyiyUL2NDVpNuKFuvj3xTbdVo2y8Y",
  "key7": "55fd1V6RpJzxMLaBijZ33BwLJmNUhjvRkvcoq9Gyx1KbAnwQ37rKu1QaW9DyR8m6zmxByNHVS2BDMNAR4cRUCTEo",
  "key8": "4WViYZJZnt5UW21qRQvQ9FGZkATV6scwJoCRRdax717iMczknaE8FWbsSmFdepSVpwGRkFzJprZbUGM9NcA96bin",
  "key9": "5W2K1Emyn1kyvbHZK5ekBzoqmgGXPBb8L6pNwQWJMMk5Pj83K22GRabUAfRG9uaBUtigre2qkLD9wWauqjpEBzqo",
  "key10": "vrYDfDh561DGH341MDgLBysdFWKbVRoz1a6K6bEdvCeFqmTMssgANnZJSsGFZQApwaeANZXkUFbuTXhtEavH1Lh",
  "key11": "78SydNCgpGEP2nawTqnzLWLQAAMQAbqCtsbGWbon2bLdMYSuLdibsE7KB6zkAbzM3q7Q2o7iyLbJTxztgLmbArR",
  "key12": "4MZiiY6r4c3bjeafHr16qpiG89Xoi3HTVaipa2B74jVVcULFx2we31TfyARKSEbZgmB7it181ja2AJ7vknuBUZwF",
  "key13": "4YAaWNKbZQCvVcG52oPhT85Kk7e7APRJRwoDhDfTBz8TT47auLvG67kHcthKEWq64vzRQgywPP3eW1MyiKBiNfpp",
  "key14": "s8HKp9opGSVbVELyPCXbVMaRDHobj55vk3pP83wqCpQg2FiCuGBSFPPhYcKVrxd8DcWqcyWnfM5Tgi3vYyosLYL",
  "key15": "yMucsTzNrvVHgyd8LJKd4PLYNLkQja2gCaE5WtcpSTH71tJaDaiSfvGhvaPbEWJxBG8kfmPMrvxZYpB3ZNnxcQx",
  "key16": "3AQxJw2m6DHqzL5eKUWiTREukzowyk9mWmMPxq6t2n4oFfnK4pE3U49yVsaU14ArMVwwHuwbJWbhoSP6PLQ8GHNw",
  "key17": "5aDL83fvnLJiMmWSsbYBfXoeDTQwwrr6uv9GHXZkqt5KCoNXDkMbWR7RacuYiKubQhLV635AYsA3ATcE4A4jm5Tr",
  "key18": "4bLE5dx2WPqi6choxtsmTK32fwo8uDFAxoAuetJ9SaLFDijmVGJbvjVHkPN4koVBcvoUsbRxADS2wRK3V7V1bViM",
  "key19": "2R2R41zMdanr6pjtVRFjXXJug5zpDePoheCPKByewNoTLpeQaSi4YS9vHvTdLuTe1Tr8mi9M1XizVSUkiNRnUw7N",
  "key20": "3zgkqm6QCWVmRE27wPCzN6LbuNHX1krhtCMVcE9TTDmSSp1WeGuVobQhps8NXMPbFr2ZoGJ292vto5ABNfxWeahH",
  "key21": "2iYKbXTCvQf2fY31ZtG39BGKjWkrxnQR5UZrMvQcKzFVHaaL7mGpL4VzsLtd66Gxa4DitiKSomSzPHURWeyXkxj7",
  "key22": "2hS1hesjXNw2GHHDkKwJhfzU1tUUGbXivYeJqunKqxupaP4nPEUT4bobkT3jxhZUFQBzeJiFmL3fMh3ucy9277jC",
  "key23": "Dx4hpq4dtda97kfq9U3JFHPYy5vuvkVUxH6dfVPmZYoLoYZ6Mc82Cx2HCMNfaHJZEfYZmGH93rWC3e18C3aJhv9",
  "key24": "27nnJ8Zu9WPkMdEjpFPJiDXdoGmBqvr2nyuusTk7QsUcx6W3WZh32wNBdpRd6gCxbuiQjwFmpanJEv46dAr3eAGU",
  "key25": "5KLGF2wGqTz4V1N1a6QLxGAKwBrezt4s52zyoJdg8hKQ8TEExsokgeiGcNEq3SjNrCfRNmHkpPTXhCEfonJaNNFD",
  "key26": "67Uas8UF5syVyguioh1xoPEYEVZZLsQJx54QdBCxGZa8MA7Rhwahcq5axnG6Cp3rr9MgnXbPfAqkKCYCK9aw7wEE",
  "key27": "5tL4GyLLEyVwY6uiLA5snGu7RH9uZuQTbsEketndgW2qY8JUrTd1ABhMS6Zc8EP7y5UbDnPkqxYYgnEZzjZWjobY",
  "key28": "R25TTEVhvys7qDsb3Fqia5UKH5MvpBmPseCqfoewWmbFdS5Gz2g1ecNVd5e8YZWYqCNEiNDZYQJpR3eD69AHA9G",
  "key29": "226tXjaUDypqsqSpP494WWhomi62WTUNLx3wQqrcK7bFTuP6tbmPJgnVyPqqvnh8FgGY1ZH5Ub461TfxADpASwuc",
  "key30": "4cit4vWvm1KuNiqENtpUdckNr8MuAt12NomrMxGxevyprHatVaVkxdksGrGJyif53chDs9KkKP1whYxm85gkP8if",
  "key31": "4pEMH4G564qVVSoQwN1PQ5XJKajjXWHjaxTYzhzuySkxkgEiPQAz4VnQs7t3f2gqEAZHyeSmvYUKKexfqopv3mXK",
  "key32": "3YiHAP8ep1wj8A9rF4R2W1yBTcM2zGPDGpMAiLcTJiq9JJAg8AMkry1fr6nQQ8GcFh9vkj6Ljo4bJ1N5mJncihjj",
  "key33": "5LKSKQ6x3BSxehAkQA6YzqLsFVMpMQ9SZ8VqbjbLkzoFQrD8erUHV11YwSHUckBrxPBPwE35voW32F5PARaxYyXq",
  "key34": "2cBcKLauuW7BNvCU9whfuL3pcwBDxmqga4CwsjMM1txBYHUhTuYwSA1vcMdsDLVm6oQYVQoJiY9cNHP7kvH89zbN",
  "key35": "47H37z9oAmAJAdBYErD8kgkpiEq6UyAg2Kkxh9s5uWYbgbd1nANVjCWELYNZoXxzMh3BpYMmbaDV7MgpwtfepRLq",
  "key36": "g7HqT2s4oQ9Qq7Prfc12GNdgp7Y36m2dcgTdD5dNbQahbP4BsKrfNVsYu2KHKdZjmY4frDqsTiquydAmnzMzcSM",
  "key37": "2bzKhCHDgG6n2jodpNnfCSpjEZZXNtXKkqy1roRT1r3eMAfX89qH4qysPxKkLKmrvm8gP5gwYX5v6wdVyZJekGwn",
  "key38": "hFqYme4Egpb4zk5swQtCYJmVQAq8uETC3Tiyqj5eGbu5dmehJtEbU2tPwC4NP6k9HEaKcG2XuzSq6NUfwoRaMLJ",
  "key39": "2ET3hhJ3GmctxsKPTziK3XTPMfSqutc24d151vxwAmP2wY3p6AzHDbE1kM6gr2x1z9dgweZ2GanLj5NtqhAtu1u6",
  "key40": "2PZpfCkJxHMTpQGAgdTT4Uza7132EoUbC5dfzF5JQdxMgF4MjNtSDB5vdp7xpQJcgw1o1fTtUzW3861UTXSrY9mV",
  "key41": "2kb73ogXwhz8bkJNZWUhggEktRfswZW443FFdQM9EUm6e9rU8LGdKPDBY5iYJUpTZPM4iPRumAYarKcGqzjyE12T",
  "key42": "bYP9mkaCWWFk2mfUD2mM4DjzE9NoJ1smbzWsoWYCVv5fKLXGPzpGnERLUZBdXMniorF7NzsS4y5HGiRG26zj6cp",
  "key43": "4iRxzZxMdz1MRRzpcnbZC1gG8CccW9EuotSgG2zi5AKG9Qidg8G2fhggwguJ3ngsJV39gpPrwrPJSLnstqHvBjut",
  "key44": "3MY4TDTkZoioMLDCEjBgyiMh2rDRfyfxj5FUSYUG6r2Q7G1D9Keih8xtoPaT9dT8wZ6z52gQHa74pkTb6scJ25Zi",
  "key45": "DPYxkHUcY5QoaSDcWSRRKf6mx5APk3bUBr9WWCzHHdVJs4HygjBaXknqeLsYYZdPmeKUzDr2vE1F1JpM9WmvwT1",
  "key46": "52Sm2fZ8iToCgcfEuiAuHuUh5rtr7A26yBGRupcJJox5tfPSoDgN3JWZ2Q9pKcbzuG58LbJkriKBgFBTL39Q4GWx"
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
