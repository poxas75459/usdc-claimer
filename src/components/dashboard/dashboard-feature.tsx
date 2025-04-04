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
    "2TEmV38rrJNJcvT3MzNydf5aKpBEnRoAzQUAD6b5uZYkZa4A1czstsvgCvDQpJgUHQtPPRbeYyTAQG476VEZoDoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTTSyNcgd8HQx6aQ2vbJNQSERLCDj4pAvTYpkoZQ3YTbvFaXTgLdqvzrxBxscapbJwpghjd1GZXGMQmw2Kn6d5b",
  "key1": "hdK7xhbKTu7EG2bMbGoKW9QJrDqT5fi6D4Hzz1U3JYKnHM4kqz5fnnxnX83egxeSsYbBpyNo6HPZScdy6q5t6s5",
  "key2": "3HXo9zj93BJcQxsafXzzBCBYKhkUMtEv4XjZPu8VgHBwMxq5ts5fnbcHJHk4ktFHHMSGikpDXqVbPtWtqx8K5jfJ",
  "key3": "nnYpC9pauUobc8gqFMx9ou2LEsZb8dzpNwCBgnbQ9kprE1aSCrPoZEdT84ZFhD6LKiiqXC9jFa5aZ7YVtpkaXGA",
  "key4": "3HudHpu2F9GWNJRrvM2bPcj7sZ8CwvafoaPvrM4Sq1hNe4mndZg4WqaJXMX576RiC4A2KFT1iB3vDnKqyzT7ovKf",
  "key5": "2vxSG8xJn3byq5iCQudACkG1rimLJTDq7WttguxfzZBPEygjpCHoBnM4N6THJVVmTB4cp2s9ZDQYwv2ADANApy9D",
  "key6": "5YEwQBbHUQQZuXkb7B9UBkzXRnxoZXcqoghCkqHfvsb3kjP7ZHktdLMkJsVSoNyqrYySDBtDwjKQzk88sDgwRopG",
  "key7": "2x3GGs4K4pKCv59kUN8kQSeG5aVHTW3C3QKvTp8SUdySf5eksgg8w9sk1cVrZHYyzSaEaFiCR9fwJtvGatmGcpqS",
  "key8": "46UhsMuF441mAJTwe9FF3SKBFdphYMLdHPmde3ynpSyXBEjEJGKNtLAXECt4wMzEJJXy77XVrFhRgsNWH4BbPmoz",
  "key9": "3hRN1uRHJRCSRAWxyrepCEF4pQPE6F4L26Y4PETFyPjp5UrUfiz6EpN8V1VE6Csh1oVkhcAGh3n4YmBy8eBAZEQj",
  "key10": "2YaDRkQEf2iewKDQHykWMf9FPNkMKChMTWi4z63SU29cutc9mco4wbw2RjpJDj51McnkvAyDWnxE1Fx9MUSGuEAT",
  "key11": "4tpkRXrge9nwZFDNrsnaaJjKKRbodiWnxHtQdT6pyWAhkBCfdGtChMypgmAsnyxG8TqbZjZeNneNQHXsZYLjRBvi",
  "key12": "2nDJzJxnex9ydZJkbyM4S5LL3u3zu7DByzo3BFkcFEAsTbf82b444G5XWzf8mpKP43BUVT42ym3c9pyCo9SgM7oR",
  "key13": "5dSq6Ze76x83ErX53k78Uut8iLLf6vn1zGyXS4yeN7KSkk3KxXYLjs9ztykoZ1hF7swqj89typT9FJ2yJi5Rs5KN",
  "key14": "4V8koa89B36GdxCsYUDQYqxXhAmmGfAaNEFZXoYhvzuSZpku7KQtUuFgLEuQCkTxUUaT2Zn3AWCvopp9GPXLsuB4",
  "key15": "2RM6ofYARCtYoETAxG4JxAFbLq2f4iMLypx7CfrRtYmneo4owTbmgnZb1Cjoea9nzpyRLBVH8yC3db1WCVMpMucX",
  "key16": "2iMFtbPoZVwdMbv9eCxM1X8Hiz19ERTQTkdRDZianUiSjUcZnPFW46B9vT4vPBJp5x7bqnhuhBXbKoCahDyPDmNr",
  "key17": "fuEtqhsdJK3dcbA1XQsBtdNYYG2Nubt77oDKG4wbjkaskvJYhkzus37kapQdTyMixE58F5w6GVxagzRKW2Ljy7C",
  "key18": "2xZSwSoNzd9u2zUu2QaAEbC8LhcRDQzC16VEnphE2GU3nU8htoQHQc4X3xXMq3reCpvSzpo89Z3sm6Aj1rTd3afQ",
  "key19": "5JGsFhdQAYHYVdBnj1pkCufbUC6AgUMickb3DJiM72z7BmaxL6VsmJXUGFEzVVehAgQg35kwDkQuQpW4ExsZP7x2",
  "key20": "5z6d3JuDG44fAA7YmLg7HuutFD7gcXwr9Vf7Qss2CXfmJi5xMN9ov4q9L3d2VMNEGg1UQcoF5V2yGnbYd5Z2YrXZ",
  "key21": "3zFD2bYa4Uvgiz4Cw6pM3gvcsdBfzuxpNomGRW9Jp4MN9BjaUHMHq1Kz6pjTdoEkNysAEntWPrHaQbDFuGXXcccd",
  "key22": "5uL8AtkeWcwMcZRWqyNeeVP22svYArR4TMuH23K7t1kmoerqY9dmb2sVHgwza5BLnfAELj3fghnGJwSQnhPLEBX2",
  "key23": "392ceCZeDe3QWmvZFkKpGLdRoynnz1pJVucCzgRYYxxbG9QvJr3ZEAgU5bHibmKPTaPxoJVZFP3n6pCKCH4vLS8x",
  "key24": "4UoPm4wzBDEdSVyxrqVkMZHQYSYC7aAsrnukVgxb29Uq6cRKuQpFtQXVZCEF5EoWGHJ2hFadzjjrPmNieyVxvdEj",
  "key25": "XsUyG7sj92RnkfzkaH2BBXogWdTvEUijj6QLfPh9Q4zyyEpGNUsXmEqX7M23K9izuH2pF3DXHaoqb8UhWUQ9zqS",
  "key26": "2Ki8S1v6KV5tzCp3r3kqWUt7vX9ztsN1pKmyRQWM2izJnZEbKbBrmk6x2EtWTfsPn7haqSdGp6mgbxbTZdfpdhrV",
  "key27": "2pFVmESWWQfgMWqPSLVmfR9KTy4iBibbNYWqHsuV6j9AWa4He16vEsiAd2BbKcWgUfRimvJYGuyudKA9nfijhMeb",
  "key28": "5yi8TenkRoEWMZvLrmhjgMVpLjiTSDzd5NEQmwCTeBch3ze7U9mNPRUhfoiycp7LtPwjCv1vn5KwEj71w4YxuQf7",
  "key29": "4mYZnh8eh2bk39TWQLRZzxoKJoYwKQoaeMNGez3FHJLMohvFAoBffkhSdmYcADDr7sFJJEbPWinSAehsJZFDcjRo",
  "key30": "4u4og6RN7fuK1pq8g6y8kMD55eeRQHLu7UdsYwsQvNAR4JE8MVW4xi3yEpbypP9dowPhKvuorSC3Zm9CP1dDUZ1W",
  "key31": "3JendFNyium7J6U2mXy5k7mpHfN2WKfr3aqJMCfaCsR9FmPoKk4WEML24GeNAbSP8YRpXe8o9mLUhBAoDQNn5YA1",
  "key32": "QYqs6Ph1ahTdMjndAYBX6igR6bR4UkS47E7bCyBTaKNXoUHWxi5nyHrH2B8fprqn35UG7KVEmYvdhFNkDA8kNa2",
  "key33": "67ELyNP2P3ycsoYMHf17RAoE1beU5s5GLU4wxv2mEQYgY8i12YNktTYK7TY7uwmgrTUCprKdtF4fyoGQzxesppAe",
  "key34": "foLmmqr8bcEa8G7Cq8opgV5zTtMUEBDnxGx9Gc5jJP6XUN3ZZG9PaKcY2ErerRwViAX8hHtBA7f4UxishiKSK93",
  "key35": "364KEU3hyVjN2U7Gr9Jp4GmUndJYfK93oUGjaagx2hjhcuEf1sroCii2re5MvhjAt1zWvPXUMwby2E71LAVEREVE",
  "key36": "5CAK9aR4mTHx3SW5bom1iz88oJD1nu9mLfqhthtcwCipKrRMk9UgwvHWBaD5NZktSJ7JYX4ewoWcWHBYS2DMdZRx",
  "key37": "2As2n22wNQYBmZSngkRus2qZfH7f8i3z1Bgo29prEzBCC5q9vSoUHcZxUp7nsKY6FfE71RK2jGgKjR624QxvPA74",
  "key38": "5fRfRKHzuzYTcPth8DQeaRgaHDXKsoTTtaGCZ7rRQJg81ErpjDDKQNdvBdbn8mJUCtk1si3ApPsvXXZsTk8RFniR",
  "key39": "5A5Trcqq5LAokSjZSyERcmhDyFazfy1cQgZ5bKMPNdHdrU9VcvzR7r3p5atFrsG5RKRN4cYkfz1VXix4NxK3yhbQ",
  "key40": "5ewcKx1LaAu269H7qvzKZuuAv2ojdcWaKSQWFYhsKcUSfFUUhurSG45J29fb8cjH6Cqag95v9FLJeZ6WT7hpXXwz",
  "key41": "4APpYa3Go2igNg8H5oepJMCEqdp1itxhQgjLVqV9x5w9xxxLsJQ1H8PaQ93iRpNUHmUHqi3KH6bkFczLvmMUk5ta",
  "key42": "TxrWXjwf4RJyLbTRxasV8JBHRzR7UR6j3XX25u7whJnF92EcKfLLaCPA744yBJG6fdmbSA5q1qf5iu2XvKYHheQ",
  "key43": "3EG6uV2gQkvQapQuxBat71bwq3gbdqcY1TnZfXgKUMyoPPbxYZEtzA6q2BdiVcmhX77uWLfoMhpo4Q2kvG7C88vP",
  "key44": "8WvUgCvgQ7i8ayZQuyuTwrHuXecUg7yUnb4TDo91R3VqU8Ch7yMvkhFcizCpTxXktvyJxyfVVReEjXDzLcJAvD9",
  "key45": "3NmtbGyXaMskUAvEQC6kLrrDEYVRFxdBStkAetjEdQyta8YbZX2nXX9aADNuvycCBMRGuLGE67ZKvyDewSKn6YvR",
  "key46": "5sWR8VPMg6yForU91GyajKkPPcZDuVB7ozQeUwjCboa1a7GSBtnahiawk9Kb64WKqZHrqoPCiF4S38ZJPUxW5NHX"
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
