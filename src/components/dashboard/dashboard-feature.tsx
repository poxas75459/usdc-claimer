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
    "2mVrFLXZZVXZQMpo6jfZWTswRLZq898Z9EHbLHyDy3aEA9Eatj7YwoMT1RTsyNsWttWGaPQAt9Av1XjPw72EFKZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNAZb3Qh41zbRCMuQtR2VvudvYKD9qAj85BaZpezgLaY6v1LKSawUXpk8YE8tTZSKreWEr7WQEANTKjxaaUZEjS",
  "key1": "4TWUT7Wj4QbJPLVjGQSvwyDoEEzaxNC5LkVKN11TxGxn2uX6SrmD6Y1xXveRbba51J888rVhfmXjyHEv3yR2opK7",
  "key2": "3yHAEupPJu9DdqumwcDZdZZoVTyZGHrgPY3Gfu7LkM8k6L7hqoohwpPBh411uM1djZnTEAHF1q8smpG1Tcs9pPKi",
  "key3": "4EYr629NuWgttjYHGmKVJajVX21RjyaT3mzpG3A1kLKZD3bfFbZsPMrNKvKJJJ7diKeQn6cSceE3H2vBGxTVfjus",
  "key4": "5aeD3Nwv6KH31wVc3WSNdYg2wetPEzzvPK2KxfUULLGDCTyFJP1Qq8YYphKCrFyiiiGuSYxoVqeitypaBLW6XAST",
  "key5": "4ADg15Js9vCiRpZeo3a45D4jB8obNYs5f56taJRTZRmMfM94znmPb3UTWSPnbG6msGSwPMZvyuFpUfoK4vdBRREp",
  "key6": "gi53u6YxbqJeCRWGCWyskVUV2QdzDpmpE6CfTJLaUpKySsdkskTS1sS6tcRQrt9dwvVT5ZzVR571vsmgZQMSuDH",
  "key7": "3FR5r7qt2NrHHRpEvDSy3i4P7Fcnoc7VpfUxtV9Cjq9jjmQJ3p2p3SUDU5fS4FuLrredjVboKa7zCtdWRE9voMWo",
  "key8": "24H5Ybqy1ZNTSYUMeqmy17m1YE6sCdcPqJ95bDNN3nQvLjVDowJuYjmQZMi9kushojLmjsFfX6j7m9BtFWMa2ghB",
  "key9": "35myQShZ1oVoenMcQgmRV647878MKzK3oUtAQZMxT3Vj4qP5qoa9qEtYUZ2csUGsAa7JQANrM4bmh2NYY5u3QK8D",
  "key10": "y5CFfUmnwgP646rP71PWGdQkM9pHeB1bTRB59rhKqEYcbrHQvHDkSygRn5f2QLzKjWT9bgBxkZFW4sxpNzcdYa3",
  "key11": "NNJ6muPd3gP4shMBi2Q8HXhdoDJfgUvQLaYWBzjrUtmD23zoQQV3Y3EgiFzfinXWEigks7z79h5oUeBdtdKykRK",
  "key12": "KpuNQgnmxW1ZFvr1YvM9JPnt5JAhRyKarWEhAyUjfHo32zLL4NKtTWxRap781T8XxToP66XKmoZ2tBzQbBjKi8G",
  "key13": "5CjRuhYJ6raar6qXiwyjaHCNmJmGYz8mxwVjcCpu1Lp7jHAU8y188osMffyCQGQ9VhX5CztZSFCeyD8bN2Kmdo8g",
  "key14": "3KtUExjbfXNn8gV9zRKLGwiH33i6GAMArRrj32wo1GGzTi5Tkwbd7tSLsGVGoxKM8K4aH1Zizkj8sXaNU7nh4GNt",
  "key15": "4za1F3n5LPAMPCyk73n5pC4qeovEaWNaHcdaExt7B4MSFWURWpf1wZcDZACHVM4ogGyeExuEdVYNYWZG4sxqTmAE",
  "key16": "4txxaqr6htuBPFxh7V3bV42EfoQPTfB51sFXB2CBQA2Epp6CKgkJ6MAssXPPj3GpHCWBDoAayVNuDX1yUw3gbVDB",
  "key17": "3hKSTFCSXZeQDCQ6tQnkTLfKkrZxVKkWbamB16LPnrAeAL2wwX2FvDa25KgAV4htc9PitLepJ8TmmbZv6qgYECRZ",
  "key18": "5zwa1xKepF3nkq9TQD4FfB4QxxhBBdraTNu8Zop6m7uKVAxzGMdZMJMuYcCyLaUYfbMQ6DH1LXGm1iHENLCgQooJ",
  "key19": "5g6s8tcdvoKw1FbJLFAb863EJAYs1vo8tUFH2vUcMmE3VKr36YSueD9A6mWnd5jjsMfXrb3pSpQK7EYuskmKvYSK",
  "key20": "5GAUWwsqeaSRVcjFyLHkd7Ur4zMsfJP1UALSP13BNmfGgE6FYQjwbAoam1koKKLERKQx2ER4dFm61dnCvXpqgKY3",
  "key21": "5u5BVrFW1yuPhsLjRFZLeoYA9HCbNwRxFPkVDEopeeJdc7H4mWJwiZU15q14nGLwQEVktPpEkbGPUiXGnm9MoDsU",
  "key22": "oSKruTQ7gS2nHU4mmwUFc9faUNB2APWQe894NagmSZBv46L9yfr4yX4uaNt1fWx15VRTCJ8YiA9r5Ya1PFdgsHN",
  "key23": "5MT79hgtirFf2X3NsaNPy4EgSzwVZutXo5uKrnFuQTmN5pUVoFs5gZZnonDUPcEuKvssND19yc7uSVjEB5iEaBX7",
  "key24": "25PMiLAGDFS7yoaCBBXuqt6qw89MwuFV9eYHUk7Dpe7sfrq3hUhcgLCH5bHgBRSQtkRsT5FkazgyMW6fxXrEfW4F",
  "key25": "47rrAuUgcopjbc4jrq1cGY4mNrsHKh5FohFme9duexSeR5fMeLpwUeDF65kQTs4XcLwbQka3rfwzpvzMtJ13arvY",
  "key26": "52Ue6tL82Z3riWtkM7XqNZYMBKXhshXuHsDVi6xiEn3dKUzyrPircc3fcnxs2qjP8jL39G8jZhCQ1S9MTm9o9CVt",
  "key27": "3LL6K14xzz1Dk9KLwp5eA1y9jERrr5znJpyrSxHvgehgXzbjQaVBvKC4SjmfjcUMZzhYwi4NtNwyrzbEo9pQ28uj",
  "key28": "2jKe9cTB2249spJbRm7BRseigZ518bBwdQzeutwrgyWzfZxwykbAfXXf5xK4cGmGqcqFksZRnkotrkFr9xtU5nAm",
  "key29": "3JtcB3WWjdR2gkesa8UdcxRpJYiZ3gKAm1BvxPMfJanNNJ7Krw6NwTuqBsSXteZ6waz2uSPdLgHsxGDP6rfkyrgR",
  "key30": "N4gA4htGg7JGjh2mBV8XMAkjJz1AynvM7CXRRLjRn3WrpMcCNg6ZNXGggekr15PK2gr4VvBaRjhuyKMXmwhmkwS",
  "key31": "ds8A6CtpVZFDBnSUcqAuP6xCY2QUKvwdaoAJBjtSs4r3hpsHVY3K1EpM7ghngz2UPjQdaV41oWAhyj75QjKYARS",
  "key32": "JJ4aP4huXT8ZPreP5akREf3hTW9ZHjqPGsWsQcBC4XWdPiZA5MYwexUA8x6gQx1Whej84MGXfNU7FG5N5Go8ezR",
  "key33": "ydMFzs9LBTnCiujPEj2Qngys8CgCccmUW7JTwKmmEQPBxUFDtY811N278BMe4Qch898b4iBP7V1AQqdcEtKhrYF",
  "key34": "4SFEHwGNxPnpzm3X7GPxc3CzPrU83qg3TJSEgak7XBdCsHV7ZEgpcrzCvatoicFq5i4RomamDdL1yjSSUiS2BZxF",
  "key35": "2njdn3QvLATJ8CDaPmBEfqP7n9Go3LP2x2XC9a8BnUs7Yy3coKFa7ciCMuqbexSgCK62SqZYB17G1DvifMeHKhQn",
  "key36": "3NxccVXHWBmvkxLxqeZKL5XcASrRi2UXv1Eu8MpGrZFXoUGRuvN9sSY1uodbCbTbXovYfdnYmiUaZ4feVoKUppc1",
  "key37": "2ZdPioCmGbGETa4zoBykG324pzUvKx6f9KoQomBVzHuSMGgfUYxvvBw3Yf8c157TmrTbMmdMbapAA9RidKGSAi1z",
  "key38": "mXvKti38mPMEYCw4EJh1jYBnkJsQHR53btCo95ckeQvZ9RBodRbDwsHbzBJ23GStZsBESAM5oQAPU1eDFVj3Hcq",
  "key39": "53ttn6tQjHtt7ZFLZnPz8fuFCHUkg7LPaf7jE2zfjpfEMa1Vji5ZrVQTukV6qA9vNdinVsEyqGch3J2tijBas4KN",
  "key40": "5hW64d45wiabtQeMLAvQLb4LVGakSzxCMNThKxsP7mFhJ7J9vpoypHxWG3nh6t8Hty8wwAZxSxDqtLmgjosaMQV",
  "key41": "2foddnWKHpYykntCGRo89WC6FBERpHsMCabVyqbcBkGeuKZ5Zwa1iA2hhAbeZwNWMffQST97pzYzmbhsAvrnJMqt",
  "key42": "2oHNuxT7JG57kM9SCzWhUESLFExWdeSVjduYhHhLCxmGTf78zpLaGiyrbsf6Cd8zmgzdWtVBHWkhPaCuJDyzbcff",
  "key43": "5HtUcJV9gsP6YjsnFjrorcvknKXmHChFSJrHHrBqsDkeBtiafuPXSiWuJfccicpaMSSbMf4E7i7Cm8okp7Bwz8uG",
  "key44": "3zr5kaJ2yr3xytEZscARYjDeHyfACeHt7WcMrBc3mGZj1tUPwLU2zwvMTTc29WqFWskERHEjYuA5H6hFWsdEQUk8",
  "key45": "26wDSVCWstbwqJ3QGNoDLENnXns5zn9eKAPSJgp5zdsSSk41hyge1P2QVzzDSn35uTDHX1wvdsB6cHCrE1rwB7FD",
  "key46": "52LWm1b3RdTQFt2N9gkNkSGmjZwDEXTTE6XHnMdeByDZJpzaWnjS5bEXV7mH49wrx8MpKAakN6hczVPgwQy2WenF",
  "key47": "RBqwsu72w66WAaGf21bsuz3gqiiMDMgjrLBmpm9Gq5mCPgcui9VAoe1kokfFPkLopNkFzqCbUhq9aDkVnhWw1Jf"
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
