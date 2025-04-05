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
    "6djiRQWDjpVYGgpzyGPorKE1KrG7JS3Vz9k4FoTYFePgRhpPmTHu18fx3jPHubub6wvqG6HenfdLiRgiQRpKTAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PP6mE2PjaAiwFfEMQWebTvoHj9i96jJPgLR9nnHLVJ8Uh5CJCwsDdKEobT35xNjTHYc3zYUcH3JmB53haB3j4YU",
  "key1": "2HMoiVADXA1QRJubZ2PkCjAkUSG8oUYTq9wi9UbstkYy2TA8PyLFgWAJ4ercfJoLZ7Go8yVtGdbA7fKFvxPj9oNA",
  "key2": "uEkBkKi4dksTTRa8ZHCd3GWubZRMpNszAmgGo3vEgr49zner4UAeg12QNhScL31UHHiJg3vHfCGpcFXxEr6azke",
  "key3": "2AitJxDLqJDWzdFnqYh7eBLkGWys7gMSSyEHV1R8mqRLifGFfTKPCBYctusViyREd7X5LrN9rgrdoaAuj6zxLMmL",
  "key4": "25SRMM6nHQYx3CTc39aCpqiou7vTwcFSFKbYVxKR2UdxD2auSknfQ6sHVKyxkk9jNoAJP6nPGtsricD4jGQbRqRF",
  "key5": "4Pexd3ZXRHWVhFLQAWWBg5TDQ7GUxFJKhq19cNPCggbn4WSkH6hWK3vEehPxxCVrhhmUHvpD27NaW7dT3m8AWFDW",
  "key6": "4qEBaLJFPvRPvLpmQmfnrwFb2iSaw5MwnPLfPU18rSHffRXXDkAeeiQA5kL6QyMauCJgdMJviEmKA1FLvL1Apv6z",
  "key7": "48N4uVWJeFGDr5N7mJaQwTUUyPkfAuiy4HcyQnMD1vaCwFq54ZAE8U2QaYi3DTzZGansbN9c69XUcHDoi66GkEkZ",
  "key8": "2PMTXqwJJwJVoTVphjzdPpHsbthCvh2TT54jRq82RpUFxbGpmyrak2uxWMhMXDgBBUrwP1wWuuAcK3J3edj4Arey",
  "key9": "394AfeT9DDQ8WQr5U261JCWCWaxW3ywRiRD4bjuGF5H1JgXuqPcAoUb7ccfv97V2sTzntHQCaL6WmK1AWnPLTyzV",
  "key10": "5CQ3fucNoRsBHESBisLTBJgVkep3zxoohFcBP2sJ9PVh58ujThwdh3Z3d7BTztn1RXTnXSio2RSqUGNt7NeRS6v",
  "key11": "5skgc5mMeZYt3AfRUGsTX2bMmHReMvtuon78MpvQUMgZcTtMMCQ1KThcH6DGDWVx1d5mWHBuf9wGBckdHjo9qxcT",
  "key12": "2A1DgFK8cxzyKDuKBaXs7REtR9UBnjnd47D1zBfUxMkJQyyGGAmbxscaq4n5Q3KeuxvyEDs1DuLxDaQxppy9sTiQ",
  "key13": "2RcWjr2zB7GqAvznD7yCGjAh8MRgDctEeAAxWsPMePycZc8urj4rzZsVzNEk5LQZRf7ySPTyTWEvf2ZSrP59E11F",
  "key14": "4uqUsuToK4QCcZjNwcPEf3JTjkKP5UybQrNXdZi18cU6qNePzfx1Fse5cU6S1enbVBGaB3QePTEyMxWXPU5fm9J6",
  "key15": "H67qCBYD5NSSk1MH3wQcKW4JSBSX4k7kWWTf5YgMrsPKxEjUBHQzBzPipKp3rW71BjgCekK4gjDTrKTiAw8CbPz",
  "key16": "4iz2NRW6bSThiGbhRYRdokK3hF6SvitHzq2QbjRNRJMMB8kHJRn3KZf3ZNZUrJ9hCWyv4v6Bzqk5LP98xu7QPF61",
  "key17": "oBowJKxXEN4T3Rx142yAKupK9oPsdGCbWG4ZArsbvT8U3KamQtDEM5CZA9nQx58oGFuhnyWjwtfg1E3NVfLBSkv",
  "key18": "5UqocCTAgK2343CJKRfVfwbEn77mYFLZNoUUJr2qWFrqnidFRrrCyc5ScvspwSM1BU7CKMzdnXmQAd45QYfe6tev",
  "key19": "3kqn45jPMt2B92EMHnyPGA7StNnMBDBHQRAitEerK6bLEwT7wmy71LG11QKCSdpXru3SaqdY9u51vASnWMqDSqrF",
  "key20": "3iuAxRPXQsxUit6jtGkYiN6k9cTnN2ccoZdRBXdLzNMXVgv2thyrYUNEXLuhVNYprycqHViHPQH6LkVjoTmCqtv7",
  "key21": "v46d6UB1PydQbtB28CrRkmXfnqhcQrBm3Vec1hmXwLT2Ah18so2G8Yfj7na4cKCkxByq6be6wEjP5GFmVHWrGFR",
  "key22": "2mwtUS2bvbpSBYgxXXVPHVjMJRTiKpLx29Q1fYm6BVbXUDyyjyxwBczzJZGm3mECo9cK94WSVmUCHha86Bn6bvtu",
  "key23": "3NTugfgRfpAxZnf8taeD3pbSSkkpLNmiM9B9AY7JdESNMcz4dit2nmqDNPXJQjwrmE74Gu45VGoNTBrkZ3XWNb8n",
  "key24": "qEVHdikGaQrtrUGS2vrmcjvTWeMgNpMZnEidLPAKgi99HceqCTR9hvMhyN2YY1NZprDWbBQB8P8eSfKEKWzxnK9",
  "key25": "341snPthCGNjGeQkTj81wQmx9zU7W2598chQ4NgoHAMAqoDQSHFknUEAoHwQN8YBdcBPQymimiqyxc1rwonv6pqR",
  "key26": "qSzXt6KRrmdNma2pi1rGysiAkooj9ZUffVjbtUhAQDTUEesTTsFE9PVmZ2t94wncm2P6XrzU4osNuiX8vHxt2oV",
  "key27": "3jJzkK5FcNzmU5NCeFhik9pWGiHxjrxRWXK2gk4wYfULMp4yt9G3NbCKBHTEGvgyVhmyXo7Jwy3pCByyvKXUwTZ9",
  "key28": "4zWnc4SUKGk1nUqoXem8gupfk7mdQUW3vHEaxJBg7HnjHgUuWqSHuQyyLUs5Z2vzVWR6w6do1EAjuguTNH9kjHc1",
  "key29": "4Yc1nNnh4qFiDGkejn1gXYwG5SWGwwhbp7etvdN9mtHLjsoRajQpd2mNsToNGz3LEYgZ4gYqbnwz8EsdXxMbUQn",
  "key30": "2T2ZavS9dU4w4QVN3RpgW3sXBXgGqUC1MieTW8HiQo38FgCbEfSu68YrsP9Bz7Cp2G7esx9LgpvzPDVk6dnJhGHh",
  "key31": "7mD3nXZDTUfuB23x8sCkxrRTm3PZJ2kVzRBX9tjFU5E9h1ENNEypcLBxBqzvPNnZdti7JgyMyJZ4JQHijpa6smh",
  "key32": "447tvRtRCrPyqznHTcyUsDFX9zTwZV7eM8DNzo3H7dDex3JswQvamD2XrjJmAcUaC6WPdK8wkHNaRdUruM84xvQ",
  "key33": "4A6XGvQEn6axv5SEx3kYNtLybjMRJy5TmgANckBxBYojCCnnQMmcn2hbEmmF58AsRXYszjrWzrL9oo5HPP2cma27",
  "key34": "4akjpkT3dTjYFj8fgMczX5vWQ6eTsiLfjgndanSrtFpwnjS9jgXCDmBPqUTQGjivwK431qbmSFHgsiDBNNYtKZG7",
  "key35": "2d28jxpY9RGhv4dsCyYbK6KTpQ2CxUP2Z8c3fyE8dyoCdVu4KJ1GbLHhVT9cHPdNfYkNDkemwVbVNySyN9unyuSx"
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
