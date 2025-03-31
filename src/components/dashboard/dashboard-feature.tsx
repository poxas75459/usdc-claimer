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
    "2JGLExxpMFiBG6R1hZFQ2pmNhWTgeHnkhtmxPZa8FpiY5NEeC61jwnATNaQUgWSQeB7spScjNaK1HcyAKzX6zUUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whAgEZnmgw7Cvc7KpAp7dMnauMEhVYTJRwECxhBpWW7U1FXYhDgnZaMgFP6tfL3GetKp4Ayn3Z72ZcSDBU6JcAw",
  "key1": "imfJuXY8KvG9Mj6wEap2vKFrBfP6nQzZVDeDyCFUGPammyJNuUqg76v3DiPMqY2TizLpYhmKYCdmfUexjxGWwb3",
  "key2": "2HFcXPFXzfQetCNsEHXMrmepc5MBmL8QUpjnSWLUy3a2UksWP2B3HMnrJoBS5fNYTKBCZYHCnUWSU2sSkwMjV8Kh",
  "key3": "optAsQTFCyVk9g1DLLwpLWpaCFttFY5xUCisSGwWL9LMspgdqyevL23rbowsxa1ozaBHSwS7LNneQvvJUCZJkLe",
  "key4": "2tZ6siBuPTHEr13ivZa1fxjvhxjW8ndGQKuUiZmFGwFgWV5Lah4WaYrNR8mhKLb2p6Pnf38V6sFsmBtx9yxxFGbS",
  "key5": "2iHJ8qew4e56UWUtGw2zaX8P3kT6KHLbte2kvCY4rvPTrjrGykxya8mwNZcTHj7BrPTy6Dc7AqbeibCCZs3rg1C8",
  "key6": "2DfNqDWYfGGewNPxTnMVWXqBsWmeoYXf68ZFbiWtcNDYEYppx3WKuQtf1jJCN6pDdBPHyQgy3PbM63B67qCm3F1U",
  "key7": "2z1SBkgtWfn1GC53TDbrN1CGiUJTo64SmHmxJxvFc6VtD7uVFTCWyHPH71cdi8vbxE4uzQSn5RskRQLtn22NPV7U",
  "key8": "2198EFXmJNqLqoN1zim3P6C4or5t1ofZjt3bNC8mFFtoS8wNFBHNzVJM1CUUm4CAMA1XqF5JiDTZykX98nPi9yPY",
  "key9": "2LxEumuJviX257pT5g82keJ8SGe2k6KEziMqz1XjZ4c7mQrbXmedLFMFED81E4ajna6W8dnybsRVJCmFeBKmLWRP",
  "key10": "j29kwwUE9X72akErYLK2PW9TggDCazHsTmNyFZT5EA42DCeYJLUNCDnvagakJkps3WtYi86zruMv81wC1H71t7i",
  "key11": "5D1X3H5nUVGSVUSmuXt7vH1e3xLycV7X1TDRfTH1zeqw1ReDUHACtJVCiFPih6harYbvrGDpMZRcKszLHe7otBWs",
  "key12": "5CmdXmkrAZsxRmWAzW3zHrwGDFCN1yboEjzLgc5tCfojdvjk4NfiaDKXDJPAg9z7xJNyn2EVHrrr3e9sRpTjyoQH",
  "key13": "3xzMqZPVLpAbV7SRJGnSbK4HX2NqfsX4vVdJGfsHPYu3d2JUQBacCntPA9BvVwYuWkTES4gU151HbGLPpdTQuBSv",
  "key14": "2ZbWA7rGJmXPH9vnWGAo4GTcLcmR9eknqZxm9Zm3iqwZRd1U1wuyrpyEtyBaW4UC79n7ctnWBbXoYFLViJVfiTb7",
  "key15": "25cDRcnb4BXpLrWvsyd1PERFGbqiBknQHgDFUf5E1K3uvHZJwR48xMW4Vb5gUBxLbN5bSJmLV5rQFoo6Dv3KHobR",
  "key16": "3LcJjs2NphEhWPtJqBJVQ8oemD4ghgyqUuS4MRkQCoq1j8QWQmd46okZurNSX2WoaSa9ViXfqDRJ8ez8fWAP8zES",
  "key17": "2mL1HeW977DSdE3KUhiytZbEpzVTFiGP9xrsobR4B39jJGU5rpR1UaNBSZ2c4yc1JhUJsbWTj9mTM9ZP26HHk4AJ",
  "key18": "5aTWBqVPWecagBeWiDPtvmfyhRpZWHjhFWr1hgnk6rkL1mqT7BGR3gZK7ahpaEFvCE12tuo8NxW49Xw8rs2RHZzS",
  "key19": "3UASkY1fjAt3t8GE75dEGA12mxU7njMNWEc5ajfrPHygEBat47KV8J8Xhiu6d1J7wVkeAufBkak51BLTMuHcbr49",
  "key20": "4yXN13AcTfaS5VWyTsyXfyPHJ5H8RXmR1Syd4nZBF1DrLowqdJd4yx8vH8Gy3vwJ3DayeaNpiy7LxVEXbaowuYya",
  "key21": "5Xx8GkEHC7cb7ijbPRe4qLPoCuuwFByrXpznYqAksaztsxsFk9g4anPLKtZLvsoaNTcYeLXa5NVTP15UdwUMvFsm",
  "key22": "3RWpof9Njn3hAHR3uEVRurCnfxJP5sur7anHZhKbEbrSTDfRTtBvzw935z47KQKmNgY6oNPVcsRP2kZCKoEPihCf",
  "key23": "2JiEm1iZVzqWrFA1CgrGucDMi9nWd2ACSJbGr2SBxZoUPkWHRtRKZVD4rV4mZ77ooexhhvoJmS35ipYHhJc1qThm",
  "key24": "2dfPTEHNM3HHC4PwCg3vzgabT8cY8w2aXFnLjRFQjUtNpy68K82nfoMWyQPPAu13JvKkqfmEd6XG3KKULCi6rbZ",
  "key25": "49qjSTyj7MCBMkr3gK76EhJ5FU9rstaU2eyJybnv3v3mmHKuFtnM1AkA1nP5oYFvqUgqDCV258vc1mQnmBeLsme9",
  "key26": "2Qxj5cxfV9oZy6fDVG3K2NX5jV7BPfrbwxjn386LvM79k7wBt3XLnZQc14nraRfkxUctMvjuXpnbHVX5yxz5ggtZ",
  "key27": "5Pzm7rR5swHnJxpk9fqPVKNQb4mCk6MWCRuka5g9XBKQ19Hcx7mJbFAMWmpwSLH4tk8nLwyXkiw2crQ1p5eXDMic",
  "key28": "4b8ZT7pcdrGjEKTv2Yj8TyuUVkMR5cKLR3tfq7cprhDNDVA6WPkn3xeDtKZKzMUu3ZMXhnpNcnGzixx6fmNnYa63",
  "key29": "2ooA3oKa8pSubu4dFzQSdLGqkMg81j2HsSMXzsSPrwZX3a11qC6VfC9fJ9qw8tQ2c2q4uuACFuop33rvyxBhPush",
  "key30": "7Ah18P5Tn4HsNvYPS2tv2g6vn5YAc8i2Ls1DF4Wpd8Hy2XjYNM6MdEYSLgvHLtehQq6pJb1kKYGYzjeESw46ZMG",
  "key31": "2GiLSSaYrZm9sjh7EtzQgQkZVic52ZrwbcipT6QNuqFD35MqoAzkk2dycsPzm1McRwt4T6ze1G7TkGeG6MPV7WP4",
  "key32": "D5YSCwB1n9Nn5DC944jekWHgbzAukChhJPvE1aG7BDQuryYEB6LeDRwWLvfB5PbruNyoAovHjbjuAedXdrMgy5Q",
  "key33": "jX8sZUBA1x7XeMGxkyoeCTbhARENspoR8hESJL1ydZk64bKANNLD1SAr647FEFafG383hniTecwXwcDByFqufot",
  "key34": "2hrrZqeSBYuAMUcuym5N3uSf4XPcPZX4ddRdeD2DSMpn4hV4rFY31waBYyKpVX142M9thbPZ7KpFV38v8YmMNG32",
  "key35": "39vorx1opJBqauvM9n3oq26WP253VEoygp8EjZ8JGwwhCN9gnHSB4wko8dxDfnK8azScSqrfWGiKMcb6syiJPS71",
  "key36": "2F9gck5m7CHLcN1LE8kuSxqZQLXY4S8hguYrnSrFrAwudmSXTFqqzRbUK8Ea1hHWFVizjX84M367dQjduFBvPsjW",
  "key37": "5tDHjUR53K5qAxnuB1Qj3nnxwUmnU3QFRzzWCb1nN3qw3Vs42dLbPtpQCzFCQ1xUfKb1fUim9CwzhtpL75dYAo6z",
  "key38": "5PABYino3V1bcWKqsGSxxNrpa1PiXwZma3rxioL4LK9Laxq9fDw6ZaQc4cB5CrntbER8pxtfJZT75gBJKu5Mfadg",
  "key39": "4WT2yCyH3ZccatHrNqLXSKeCa2fMUo5mFb1ZHMW5cofs87dXg4XR7ZCg9Wh3vqpg8YNMfaxNywA7rUfZDTPzAAwZ",
  "key40": "3SjhDVPb4mP784owTnRtrrYPrs98P5H6uyvjy9KboiFuXjq3yeq24XzPHJs69GaabM8uiHWZPNUfrg329tZy1q5T",
  "key41": "63bPifduU2oouTs3KLBMzTed7GeUyoF2zwEpBdU5i4mb9nheWrjuCKt8cJAeMFvQPhppFYcn2KAaktqs6sMkmQf",
  "key42": "geD3bYSZZbTFoHTFqK4xKjHDmV4BxTfhK8yNLSmr1jtfUHSrLPtfLYZAbBVmoQsCtDuXWAgtjDEadZd6hokwrCK",
  "key43": "282acUHmfDjfoEL2fNps1jpZwQz7TWXC5cYsoz9dujuTTUotHWmet9rfFs1acfKD8dWA4ShuVD8DqTGL2u89kU3s",
  "key44": "2wooRQRgz3it4TjWGfpPKiqiaU3AXQ4C6s8at9UpSgNQSr7af3nWtEQNT2QRnDNSvjQUX4RSmLfMdWLHeox6Cada",
  "key45": "5Ts9h7dT2RRwdCrd77n89P69L7M89wdthTaduqTWVrSHAwtXBqRpTaQz5LvK7nj6xax99xbWfd9j4xU3UhTT8jwo",
  "key46": "4Px5ajRNKzVwBBKh4MeVwgRE57ovFUmPXmRgEXCD2LdfnuMLNnyR8ku681V9XWURoHTDowxC64f6FryHEuwCBYvg",
  "key47": "4x35LK5RTcLLdFaJCzZoWnupdDafej4GRVqQAPgA2MUPyCdzFtM12kVxRHN9UveKuvk8EFycpBTaWSgT86WdVBcQ",
  "key48": "YzSvCVVvn7Qg4pTh1QfFpUNz1Ct6ArKoqUVN43E4nGrmGjgzaXKucgUEcPgXbriqVnhM61aHr1enmRJfadMhAVc",
  "key49": "2JWsDt9zAWrJkRbJs6FdUH1jXLjm2ezjgF8SDFgktcURV1PgxiZW1JNyZxW61yyMmqyYPnzNqXjQGZUx5Hnim4Ed"
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
