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
    "25BMsjELhbCYmTDfY9hSV1xxWL5QLdq1b9JLjDCpphkEnJL5YrD54enh7HL6Z9CtgNo838qf8U3ULwS46duAUHEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "en5ErCVrXAeqyyreqToRNRXMJPAFJPXXMQ5RpE7K2m62Zp8sQZBSNvNYbFCD1iwKLWdVu3Qd3dZnC5Dvc1vEjos",
  "key1": "3RUo9wKPCmYTh6WP5VqcdWE69DJw8yVubCH6y4v3Vm3kzoHYc2d3nMpNG83Pa2dskzvGEnLkUa3zcyofTzyG6WCc",
  "key2": "4dzUMm9LwDBGLiQuT1WzLn3meCW4aRFHxi6TsxRvGXzf3MHKQ6sYEMy7RoSZqXp4sMtSbtwu87sJMhE92J16EBon",
  "key3": "5WvPWowbsPorAHUVmb8NAwjavtzE8jegKoXfGN9ssedwqH7LDuPGVm3p5qUm5Xhuo3MGWeF1XZFxsyjQfYzM1cp5",
  "key4": "3sQWfCUddCZfL3DV9AprUbRoADXfVusEkTGfeqm1foWx8LVSzWzMCAjz6mYDGXqM4bYm4QqK7KktdGSTxwryymbF",
  "key5": "4f7FEH7rrC6UCopqJuZpMjtcnW2ogPcNgF4QBFKLtSgSDn7P3LPvJSCerxznuRiUDAXsNTT924GXJGkbNvA94B6G",
  "key6": "66owDp3Ep8kANkrJXmxdphuucbEzjhnpWPDCnjKBLPf21bKW1hmLXZQ4NgwZNfxVXrWPtW2awoZ6jFeXmFL5Zh2d",
  "key7": "2kFwftCyBXjjvHbxgVpvDATqhq6pYsCw1NK2jyne6vswTfUbFstBymGjZWs5dzpMH67358mSxnVMDDhqe6muQTZY",
  "key8": "4mjteaE2gLbhMt9XoZm8cLg3CAf4hynKz5cmBkPcEUAQLqPFuDjkmiYPtWZpmVBx19dL1B5PMHNaCZctufx1eVox",
  "key9": "3kbunfBrHvnLfKSYkuwvyxEZdyHYNTLiDhs4kPwGURvdNv65TMyeG9r6M4qC4pbiqE987t8XACNnKfkZtEzrvp7w",
  "key10": "49fR7iMSo7QwBpeFv3qe8qsgRUFemeZZwzLmAbAobDynKdvj1ZKjJSLHTgSbNDAAZHcRmUvPeyCzMuT9QQoFdyKk",
  "key11": "2M5jHvtpdjq94ENxzTuEYG7ge12Dvhk5Yanf37jsMmydjTcGuvsVFMKRQ3Zrf1dvCLdMgAVR2XkSepKEeWDYimw2",
  "key12": "5gUFhTnktHvbDxU972NKEk1teiyRv8x1HXJM71peTrEHa3AvWrLtKdmy7dbkZPzxNzb1fBsbqFhFJ67RuK7bPDQ3",
  "key13": "2HysXumuhWYjXhaXV2Ne1guYrycbGgRvgAeEe1gibxXnuUAvN3jx8iks4rwmvLGBUViqSp7iCzeRcBE8wuFYbLDB",
  "key14": "3Dbsqh3uMr8U4x7Xob7gsHdrTjPYYsHzRweoSAJrvYzVGCbk7wUWugbVy7BG6gGZ9UtXaoWio5T4tgqFbBSN2gDX",
  "key15": "4CvGRSassReyg2AWgpUi8bBUegabGbSTStwo7wCB8P3hnfY34svfDda5WgRU9bAgry82YmqSpV4Fi7SBgenan8Dn",
  "key16": "2d2HaFY5CasUiWYYUv8AsLhhR7cqBB8mPAkPm7LUZ2NmLMMkAKYswyC3RZV5AQDKG5PQHCx8uttJLcr7hXdJwhjv",
  "key17": "2dWXiu8w3vnQGp48Pt5bqNE1EczpPFsSTrZAD2sHxVdkiHVtEHLFefKrWuNr85Mq8e9ee4ubQM1poozJsLkG6tjw",
  "key18": "3uHv644JEhV7jGPT3XMzTwkr9nmwEBFRrmM5rnMPQyGxBroH2mj8yq4LoPybAmGLBbT23PcTjiRWdWrkoZhwzcig",
  "key19": "5ngqR2qod4ZzPHF7fnK1zagnv2JR5mJ8oPrs3TEYFAofbrZoPosFH9WhvvRfrka1xBvXwMQqi7EvGJwe8zkhxRGQ",
  "key20": "4tM4og5gmfoxadTukXrQRvih7aa6M272fHUBcRomXGTxgE5gmZ3ZjeoNEGyzzwiWGDtHZUFgwNRdSUKUcAbHaVpG",
  "key21": "5R43ihGZ9KYvK8Ci1diYHVEA9FUudLg5qz1zb9sVANiK1xPZGchPr3J7QaySpa7CHCFSX8xQfUPTPqG66aAXe13S",
  "key22": "3hEQcEyztqAfUeQqYU8zHgCVbZLCsDnsyScvUd64qsTVY11DiGaSSCiS55Q1arcixCzeja5PMhAUbmny7iqP7KFK",
  "key23": "3ZkS96jArRzuBi6N7wNJUXxUYkeG6mxxayqmBdx7iey4SoQGQCZcbpozcChU13KvRaQfFUAP5jdTChv6Mgk74ajJ",
  "key24": "3gAJyjx3TNjuaNvfNQi2MDi1nrL93gDVSfatUBdhJ1KBerwLRYiXrBWtCwVgWpHCgAYd97KZHLQE7M4iG9Yos81k",
  "key25": "29y3afZYaU11yCuimr57K4g4PJreypwD3HUcNnjVJkQEwmUYhEpABMzveGxYx8EHaNEcHeyHjqB4Jos6QvSwkUMq",
  "key26": "5MYD92DEHhRjsMViHrVBk4WCTttFcwC7AjETgixTfpUeUuhzeFfWx1ErWdg8qpUy7NX49ZfAEHHArAxndm64SQz6",
  "key27": "46ZSZhPGxCTMttsJeotyj4fELhnS1J6mpyp3LjVogu3Xvzs6GdgUJ9JtTjMYGZdsF2eySPG5fTVTf2yFuHQv31DA",
  "key28": "4YCKmasBTBW4a7YgY8bHPSeWyAr6mt4inA3GComiQzFk9d7bFmXPHDCvYqUJXn13a1iy7HGoE8e8YWYuGUaYe8uj",
  "key29": "5fMSuV1VPJ5bQ1EyPT1GqnyUAXGuoGFrNEuk8ikY2XsWdYJEY7BaAa7YxkNN3WZE8aMxCNJaMtNpdLacqNa2mrsa",
  "key30": "5Lr3Y7j5Rde3TZCX6v4NYdXFqUbpdi6YD2wZ6oV9KAPfinG6APiSkbCikiYG98nToYtM2vTTWyFNYwDNUjQNN6rW",
  "key31": "3hjXYVqJsu34R39P8hd3Ez54Dv4YJ25emy2ZNxKqzAs4cE5TKmRm5xrcdeM6RPuYqdcVzQ1vw2ZEBWFYDNEwz2NV",
  "key32": "4LvooHYjnvJbXi3ruvAALCtsVGZYkCaYVWEPj8V9p1bJhVPdhbRV1Dc73GucK6BYiEp9btZ4JWVn6nqudCkhBUWF",
  "key33": "4PGioCCGbZDHQQiYuspmYvr1iKJN6Yw1cJbV7Hq35aFy1Mpc6R5gA8jGqNn9izoBmvMdqxH35gPFgZGm9hEQZGEB",
  "key34": "3oC3YbDJhHMUgtnCvbuymJ3Hp1kkWy4VGJFbWih7q6QDfJMH6L9aQq1TWwmptyLStNGjbZccNPV21Locn4UdpVvq",
  "key35": "4CwsuySmugAK8G6Ek2cPw448kWiYdYLrm1R4iGsb89xYhFedvSn4Y3CCkMXB4WmukohP8CyEpnWcRarx5khzj3fS",
  "key36": "35S3NeVuMpcwVpjriH1iXbPLnTiJTcDjcWe6LTXzZfXCUJzXEZjEUM9VvkADbaSXaqUjw7EqWSxW9c4VQKUG6cFJ",
  "key37": "4vBpbgHmMQAMGD8hjZdUk8oWrAstyR77JEmJe2njzdG3tsKYmRMVEkQqpSvhLFX2Q9bQQ9Bvw9iTW6EXvikk3TDq",
  "key38": "5WGcPPsj36Ng1WtQmjDZ3QZvPfRzTHjdjUERpZ9nN8qhqYdqTPDvqVVSB46xVPh2Xs9VwWU28K9TodsNjjSbfRC",
  "key39": "rWyDkx7Lv7xsnauAPMKMVoV9TGzwo3AqjVMDF615rFeo91XAvTDB3SzYvsDTiMnv4o1ro84Gjf5P887TZdXCJqM",
  "key40": "3ALbGqTv1LXp7KHKCUPbNDBxw7Q7kc6G2bZBGTdrE2fKtxjPS4Magj79Eqf8bPe3P7ybFjTdzuyRkpx6cmPCQy3p",
  "key41": "4TgXHXX2TCYP5QU134ibZudA3KPPodZejbnNCSu8h6iuLFzgKGANNPhZLUC9JuypdMcp8gETraucbYSi7NC1Pxv9",
  "key42": "AhAxpa1B82kBxVxSyc2nnyZFiDapLJoqPN2dTxLmZKucGj7jptZc25LztSLA29L5Je5uUfCa7cBfNaSXr3TRJq5",
  "key43": "2RvLfPqqFEmSX5uCrq5r9FhkmcDBSKwygVguauoD3XGbgWZ2qEmKP4tVQE6Vze3vQhdN6QPPnDpkZnhR8jxi5BCF",
  "key44": "2CW8PtA4oj5hKToiu8nSBNwYnErQccY864Tjm69zGUhfqD2ocwRDSpkt2UpuZWSfaFn6StFyKA2ZGFG6ym4K9g7Z",
  "key45": "2jP4KgyJRxFHwyrxKAGuyBrtdwErNGQVodfn1xqFA2aowj6Y9MJHyzK8uMsxgPj6odux2QtVvGvjeNqXo1g5Xgaf",
  "key46": "5V8bgph4PMJmogQ4kvhHKBF62Y1W7aw4TLZtVoNgh9tSPfCFHFnJjQ7rgC291LdP1eC6rXeCYnuyEUy4r3Cey6t1",
  "key47": "3G72aT55hHyYif2ZQ4Yh91RjfAp8iCHXrANaq6MCCsBBaYis77qcquHjYedrjS5oteNJAd7ZMhecRMVMFhWvHtT8"
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
