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
    "pbMroh7AqryaXJSFcVU6LLrhpu5UEKEia8eWfZgHbRwav8zGyXs3yUmbMkGsfKyJUfiMNoaQGRmQjnEWyKBNtkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kxk5rai7b8nAuzqgHPueP5etQ8V2TP9waahKPVZwspTKTjJaLMZivKu6zLdxCD2j1xVqcSWJK5nrFTPwUHtGtoP",
  "key1": "3X1ofM3FtDJtF3tz5Szy9SywoEctzjHHzwXYh2jDuutJSECMUmWyUq5KcAxXvcS1tNMHTQ1t7i8HXGHTWr7V8YDj",
  "key2": "4NK9Z6Rpt6Hr6TZLmMUYpF6L3GHR32T35RCzeTjYp6TcTfbg5GDvuLaEwQ5KXz1zyvM36fzJfhkD9FZDJqwospjM",
  "key3": "2CE1g3sFQtoxU7r4jsnE6Ju4yzc38bcRbDo1FryAdEMHmgtsVyxiugCeRCry5efD6P6AhpWrpGde77prvgQDbrGh",
  "key4": "3fWSwAgWKnJjcM89ETj2KijSkj49yLcJtmTr5hEPABhbRnhM2RqjWXymDgqN4rGh4gBqcujVFsKAiha77i4kmHEV",
  "key5": "4J3vVywSVSNym2cJ1BPLFL71yByZwj1PYr1eJY56XCjMbvS1RmzFiahycxGHVMArGLw6NSqYjiCDri3sBJ6M5h8A",
  "key6": "zZjLgAazpCe7NzvVcAQMeW3QafMsZ4RLTRTbyJ5k8D8Lm2R5ctRcPknZx6QxhWaiXmKE4TriejzjG2WFYW5BHPZ",
  "key7": "4VV5GSGzpigt8SHrgZJDbFqLJyZa2VomBhYwffpADB9LEVUtVWLRxoeqtnMALVAzUtjAfb4g6ZB39mBL3FEvQCLP",
  "key8": "2mTd5FTss4j293kGpXQJEd2BAKx8nkCvne2B7pn6smyHBnzHseKPnhRUxGovskw2deLSpVj821Ri18tLb5YpSJyy",
  "key9": "2QNMz8QEG8tZuhraHKzgAdjwSUbThVspATGnwXR9J68qTknqphoAhWSXrTbH3egE6ARUitpmRhSacUEsgjwvcRoF",
  "key10": "4SyN7uCoMVr18vXt24v7HsS4AFDhayJTBHWR3VwPb2PR4SaLyLmgMTxMfd967iLPntgLNFFi1mG81vd6RpJDPSTM",
  "key11": "jZXrv3Xvm6Zoyp8P5ayFeBBkDHdQZj8ehrEwgVRN8GGXxaDhCWvA8CmFVGgwMyHYruYZjBQf6uUMbsQa1iQkify",
  "key12": "3Cw38VxnbABoRCZaxAbjQULaQ7pv4WZGCGwGB1QvUqc1MtFVdwPVoUGjocgAGh2TZA4PgWjsD1r5cNSCiEwhUu6d",
  "key13": "2vyv8hrv5W6ND2oGinptZQuTmBxsb2AptGLDNuixhXUHPcD3QhP5wM7Z6sYiZY2XNGtJDQiDFNpAWv3mgWXG4RXi",
  "key14": "4xBsFMq3LDUC8D3RQgtRc5f287i94XYDYRB5Ry9PCfp1YAzaLnpXQwZA7WtqrZ9ngwihLo9RaZBvhM8K1ZoGdRhn",
  "key15": "4k4TQcpUjhkyUGW5yVqBKsUapv7iWmBq92GwfDBwgLEWHUhHuJFUTLaZ4reMtZ6pBRA5sQtkEydmFM2NdmVwjFWp",
  "key16": "zMo2c483uupzizpUkwKnv1851UwS6zd3oVeEnJM49eq6wCcbsuTypcSwJX5x7JcKKFZGe6Eh95CESyUpWDACi3J",
  "key17": "2ZpbUDdsjv8rwPNaZZySEwxfuy7kEhGPJZsSaGETzHpDG9M6pNnAJEotdYKE9bTrAXMvB28mqgCuj8DyhGiaLYK3",
  "key18": "4QyPyX5FL16vGSn6Z2YmZXMV8SBjCURrij27Hw2tqdUTH7qYiJskLL65TAExc1uaoY1pY36JiWaTAZqh3WcYP3sT",
  "key19": "46NuQqr5jLRWNkZGPbdqo2PvJ2xhVwugcFNrkjpAfxKFVFjGmwy1UCaTFZ9UQCB4BbgK2JoD1yT9mTSGMQFfkB37",
  "key20": "24Gz7v2rDEdjEaGceNqk4UeyGifwxK24SbHtjJTEjGzn9YjFnL8No3Z1BFeVuTbSn3dg2A2WEKKwz4MktTNFqFP4",
  "key21": "56eWk3GZuig6EK3TgAMF1nCNJKwcFhxhJZFnNE2srbJNGRdrSGTDaq1sKg3pwYLJhSJehfPYZvEJBw62CLWz65cn",
  "key22": "w1UP54P1Zgq4xgwijPD58AdhkyCExXzMeSReYSu5tYiZuma9Lafwc51gtrQQZVsGWiLZSPtbgp9PEawDjKQDsUF",
  "key23": "4UhB8grwQKwLUMnbEz92bMk8NGfmz19dv7Uk7obwKjLfXWRGx4ibY9ktBBPRonHBCW5MD6hrT5BafhRw3wJxquGb",
  "key24": "31khMyCDXJhfvgyJFh4UQvrPUzYUtFXC8AiXJ9cVTP83P7yh5shb6HH1SjFkiUr57efHrTUWekPStGQarNqmJE2Y",
  "key25": "42ZekhDNMppWvtPm79jFqzp227NiwsPWfLmejKoXR3SvpJSbYSLhmxregzFD1haRmoodLzQBvnKd56AKuP4Bhr9",
  "key26": "4JY43rkgAe5srfR9FiZv46LmMVDNH5wrAkZ871zQoVb6QdBntwbXq8PBs8amv7YPGK3Vo6D9JiA28mPCmkoDZCwg",
  "key27": "2Ef8VCG5PbsPK5VNZw8puwuLVtVAtNf8U88yvWxDmCr5znjqX8Bi4DPLiUtnvKsqzJmmnmiDug4YtQBeuZeWhEpC",
  "key28": "4kfJmoJxskQgYnzoM2955uAXyeAMRS2JArnRoDXXUPbpnsueAx8QzpkABaXHeyKj4XHQbF3ZGGdCbkk3umCGaRoU",
  "key29": "25UU6SsnaFTryCRLKucnRa8qfs5NVH3ZcLYQbKQ2UFJ1aKacTbQWAUDNgdib2EWvpNZQhZtuQSvf1N1WxzbZMYWG",
  "key30": "3SiXFUWVP4XE7WgpYN8oG9kj5PpD4wkP4Puc29Jo4mJx4iZWP7QEyU54Q1ryVPTwKx3BMvgsgg6kCHBs49iXGvEq",
  "key31": "UvDFkxnU4YWpcWdM75LPSp3UVpzua9NuoaeDotxyJdRQR3Zti2XHcXyfudn5zzRc6GLFNK8szwmG2Xv7vauSfgr",
  "key32": "5VR8K7VxHe4W7Ujr9PwdkRBuCNVjd39F1fxwJkE8Rvn23MJR5p4NxcixMVmL3NnuicjXq5KXdhsWokNC2mrwk9um",
  "key33": "5Gdg3AM5HqrDgj9pSHqv2q7mghEE3q7sf3gBADYvEbYfnswGM3vS7CNLHoRwRVXp3Vf1M8vYuzpd3QvnPNh6ekWM",
  "key34": "2Np2AxwJgLCBs2zmZ99GCy8f6tvnCvrciJPSEDtjuewaSznFDLLbDh7RVoHLfkwFSLAWPCZwMf3K8jTZGRttbRqS"
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
