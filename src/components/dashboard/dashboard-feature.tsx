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
    "4WJXAACaMryMuwEzo7AQtUttVFusNVaW4NENjvC59bn4gjHRAKnLafn96hi3XboCwNPHA6TDXHAp92DJFG6McTxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8SoeTS4CBADTJ38brc5sAADMKDcfo3uaZaCJcA1VMoSBmhMdwMtY3gfoeykJPKTYmxRx1W82qUyaBsuKEExSfx",
  "key1": "5nkadhcHDCxMQFLzx85B57Q72YFffoxaL9b7tiFivs4EhejBSkXDuN32QNhiYaZFSLgCSPMZB3DMfu7fwhXzaidr",
  "key2": "2AJhM5jmiJfjSLn3khuib1yn8HrHwvzM2nLzh1pQgQqS4VmGdy3kypaA1Gozo3icbTUHQp6h5fNmNr9cpi1WZmMZ",
  "key3": "pKcWcfWHqcwARGX6xCVKVrnsR3QDnuqg9t4enjqJAs8uKwACxRGKBxqjEAtkh7ZNrVx23g4TGb7w4HoBqBRSiLV",
  "key4": "3cfzZXmJgui3CdmiFSfaFiRtmqY72JJGKHPDJqoSHqgrjcYZ6WN2qSj7dN7Jo6aN8TYqZASK71Bvef7as9EGEJkN",
  "key5": "2neKCHoa9V9y2rMJsP4Pw5NA6UJSTqPxHJfPTqKaSCLTW1k9TPVTzpiXJNN3oWNtfW9whxfk45MrUzQF8pkheXR3",
  "key6": "3vsATw7hfwPoN1NudQVgzxfKp72xRXpFwVxBKZDbW6vxsJSGFgmfKrkU8crL8r9TWA8Q3mjBq5kbeqHsbjGVfdnR",
  "key7": "2dNb3oN9fhQp7K4HER6ZCznBstukzsQTEMr58uTcRhTTcjVyNaRmb3ZNrkj46TeddrcpgcX7CSPEEtVeHtj8GJj",
  "key8": "3HeAJazMtBEM7E5VPgpQPFP9WQ2SuuCU9mJowPpf1j5AeKHhu6DuThZcsGWwdRxcHQEUwwZNCYYVf7jahkBF9phB",
  "key9": "yYLs67VcpfCJKUHjkDyfbzHSJLvdHBNYS7fxnXhSyb9iFB4jCRUdj4arm7xSKu5DnQCwbeAPa38nSUudntmLY9z",
  "key10": "5PwcH7HLAjP72G3vxeQ44tqzP4iTyg42dRQpg16SRoXPMyGoAa7cRiuiscTNGJvoo9gvEHjGcxMJYrn4MQmLbfzz",
  "key11": "5br8rHtpHZNpKsmJH7vFBhFvJXhF2RYiwx69Kq1BcwjNMVZX82zHqzb8KTn5fVBBnSsvYxub3xZLcvBptsDk6EPb",
  "key12": "LakxekhoATTj8jdN1C5fAyFneUUgpn3S1svAgkfTkAjt1uL5GLcnrKi1TtNMbXScbzBUpCDtvLMy2hsgScd8c2E",
  "key13": "3vbUQFN25F36728Uwz9KcFZAmU4858kidrjGqid7vt71cjARt3UmUkHcWGKiJfm9KKciCucVmTiMgBkFMYVhvVfr",
  "key14": "2gBemZiW13rEnSKaJzTg5HnydDwb1yUBKjYHkUCntJ7XPiE8A59gDmRzRjGnjJuRfJG1FdYgzratGvrr3BeqjUni",
  "key15": "4JS6Kk4qr2DLvAJpHkYBCxmQ4Tw2c15ajpgyrStCmY22Nyhxr2oWGg2qqbSdpTk9oEKaQuAqb2iHAy7X1jrBraKG",
  "key16": "3tBHQbha8A23V7eEp7X8KvaeiKdTZ6tAvDkZkFVHjp8fdrPkbzouZZWb2KvrYGr7NmsCwqCarusU9PP7LRFMUcMV",
  "key17": "xhBEKtkELDdTPitGJahJXWUGffw3RfCFMzrkrY2meAEudn2C4RFYim6tL2HAGdtx6WT3VZmySvyeBetL9AiatoZ",
  "key18": "4Y7nEzSQaCXN469ELEzbZxym2yQveaU3TR8a9T6YHE72j4M69CMpC2QB2dNUikHdmUu6m6sxBVoFAPNRJtZkFDJr",
  "key19": "3XU597NSnSXTQdj6kNjvy1ANjyDCCbfYbK3YK3Z58jqzeBYi6HW4RNYEmqeqUqtxZLDcKmtsvcivEPhpcDKanoFS",
  "key20": "2eJ8PgeFm35DsTfPEgDSQgzjxssTtzVQBMFbTW18UyiGFQfvFE21hUcfne8AZFrjD84P7435KhLMsXMYK3TgP2wc",
  "key21": "2u8RV3VW6mSkc3gzK9XsqnFW8yDotDRwm88D4wQD6mvTREjHC4nfDzqQSBPzai7p59xYfXvisi5iuWoTd8DrDruD",
  "key22": "5NYj6TB5eyYWhgfw2GJQkShS4aWmu9yri5z9Ai6oFg8oQa1gNgChdUANLbHtC3RX2s39gpRrZi11sx71tQuXiT4a",
  "key23": "2dL3y6GBTmfENy2pMj6aMstEeCgyYa6cKJ4hFBoUatHXGT7irYu7WJ3VFTMsHAAsbHKkCTofcwFAmXKLima2FxEh",
  "key24": "4b5PfmWEjfx8BHPHNJQkrkWA9oo8Vp8CWqigvNpPABZRhpH2vVkfwKbyMcUCWhvejatjymnLxV3cpkW7ZUk7mayA",
  "key25": "4gG1L3p717imfxHXPx8Ep2kiugCkuTQ2TZH9LuyrcdTAqETKr7ZZtTAmAYepprzQwErgiapzJzNNMNdBS75jWhSf",
  "key26": "4BKCFp4iX9huB1M83inugbktRg6NampYGGXJvDA7JN7FJjCUZa9r3RHZiu5Aqu1f4r7agR92g4j6ypNz9QVVsj3f",
  "key27": "2XXh6xFW3y3Wf6tnEGq296cCXtHPQVUsEbHDkj6TLvsy3DfXxPS8svaUHpDyhuqC5n24ctftxkm1fnwaEyDzdw8w",
  "key28": "5tDJ2aaZ7ab6rgc8gUGwFDKn6pXfNEo43SwXorpSnbWHngRoBsC8BnhhwmfDxCveC6iBrdw57z6ZFL3mkoeP3ew5",
  "key29": "4w5cT2JRQdRzgjBwPcm23aLSDWtA6B7upzaM6iJdA5jVd7AagxLjezP6LFRqTfxbe5tEKQfTXsUpkz2eCgpNvkah",
  "key30": "2b9LJBK6ooe9nwJNYcYp4t8ZTWqhVje9NVK74dMWkHkj5Fj545xxRx3wTXiJLEnSZeLaTrYwrTzkiEBRNn6tLsrZ",
  "key31": "4fh4mztRjD2pUaGoX6MqFkuD9axbSJudGGAY8F64DkgnHE81z2X3JQ5nGhCApMDfxfcWkeEbpPyXoA4S7Qang299",
  "key32": "56Vv76bKgBxfWBMhXFH41DLfSDhGKpEPTeDDzmQ72bK2ebmkutSiBj45riYTmL9RfQXWgBxc4j3F6Z8bVZvQosZJ",
  "key33": "5XgauhK6sHVjJ92NztCqs5RGztoyvNfAbTS2WnQXA6f33k8Lwu1uhR6kSwZqgnypoxxG4HZsEaxMHv8QUYm8xrmD",
  "key34": "4W7W2sF74pbQHktPsAs4b3jKmxcFzUBBJupdXruAG2zak86YMDEqgMHqBnY4EqtX5aiUReoKjpe8haw2zSUxmFBU",
  "key35": "2MGAomurvRn8Yf6ezfFKVSzPasuFsxPkJcKsbarseNKZHhhMYwgL7kV1DY5wbERsLqr5EFBssYD2mjZyyjhmaKMb",
  "key36": "35HdHeRyP2h8o2HykLXjZhjmevQXneafDEN8uqv4WDfhgBGr8hutKjDkchGoS84hvwTbxrr8mrpme9D44wVHxbQW",
  "key37": "2DANBsEs6utxFwHZ1eBGSqdpDp9YZm2nN9eUmPWgSXtRVpTGHgQvxMevCt3d2gCz9bmFsD7DrAnAuL3fLTkANEhg",
  "key38": "AfqavbxFDnFkNurAcuqEi1ag5fqKnKVwb2nNewW9EVfe4g9EGrb9Tgnv4cj64fdQACMz2VdDcrLAstRw5qk1khi"
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
