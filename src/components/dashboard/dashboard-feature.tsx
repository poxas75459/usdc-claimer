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
    "5wiyqpryR7mrEAv6vdQj2mNQ9wkhDvmm8TEZigGy1ZScok5Qp5HATZXGUqQKjCTTzeZBZbFyNFT1bP9zSy8CrsJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zd5DQD2tccNW6ddK729jEH9YsGb7YwvpWCUu7ZfQ6obBDATHxWnrFbJd1WyKpH8yWVhURNChmrv6C9CvZbW3GPR",
  "key1": "47zSSaY5sVGsYvJHoEBugczbSRTAYTyqSgk8L29FBQv3PhnNmr1R1Ujn9FrqHRacTJ1Z3SWhibLt3n1L8A8xwuy4",
  "key2": "9KPkukjmuNrLjp36rE9SifULCjYexjm7Yd78gen988FuJ9ktAx6YsC8hp9KbAeKTsWJfh7GTHtw6dNbSruis5ks",
  "key3": "5u5g6hxuZZnePa21JeTNvby8WRUr66PxW2kUNLTknFeMc6N2Qord8iWYnYo9Tx8ro1qTXVJq6a1cN7XYrWDWHQF3",
  "key4": "55Hq25TK6SUnLCM9qHUgtNJNuRnA3TaXdMh1orMKpKRNcdWCs27mrk2QKNfzVYUacvGxrTazoUr1iHU3SL6vq8uf",
  "key5": "3mGLG7hsopX7WJJ4pR698gw5KXSZ2m7UZRc4jVbbAvKoKr8vFH7d51fDbQRAVn1ZpfnHyAoR5viZqvTfc7wuKtT9",
  "key6": "oxJ7tdECRKkZAZyDrCgUiKJxoe7WaBxDKw3K4nm6BPXRxiLxxPM38oNQJTzeaQgVsN1PEURG8zn21LPA6fyorJZ",
  "key7": "4jHxvQLcUUCpvzf4rnhMaUEGRPB1NSiiPR8moavc6hnSpFDaMRGDbRfu9Wch57zEnEtiqY8zeV2yvkpgTmMarrkc",
  "key8": "5pSRo4KDkQZk2SqgtMWb34D9HKyCQS7rhKoHxK3Nb89ErUPaWvLRWnLtxMub2M5yBujZKpagcffV4nUb37BLDv49",
  "key9": "2rwVrFXdDDNVz1xwkZFSPbYu64S7cR5DmqePAK6nZDCDMjgq6pUQg2KacnvJs73j3w7cGJytWFtuzmo88g5fPi5s",
  "key10": "DC977aqgsP5zWksQJM2jRdfj2mztx6Lxpa6vbwn4jjXJNrV5cpPishvkDhuNuYgA6s2cXwhnktuAokvPkEY9iHn",
  "key11": "4s3gBsACyYByAygMb3PBVAPSHpFry7aoR8J2C6nQYWBbEhGNj6VwLkBYsojRz2FgjBUm3ED4vgn5d4G8dkqXVsVG",
  "key12": "3SiF3GA6qispnP8phAt1YUM8bfjVUZvg15Lt9JPtsg8nV2vjDoN7y5MvpUh4wFDTyf6sW837vWEkoDyoiuWziGCE",
  "key13": "uRcgEnkq4t4Jq3hwmziuK4m6TyJVyhpWSuUGvwUCgi826zyoXisRxsRrJekUfTcP5eYwwnB9Jjc97VAfkRkvyLL",
  "key14": "oZWX6a7sLMiFzuye3wfo2XsgRbfGLLS2Na7SocRPk5AfswdBSAz2Tey8o1b9mkET27geydwnFjsduhZLiMeZ7XX",
  "key15": "2js2UfdanDug99hHTYejCEzLLgvJ2Nt8j9aVrDSnJssd1kh2KZ2TePQf4jwNgurjTuCBPfKpncEd1nCPFwFz79zY",
  "key16": "4rM21WXeyWYU9XGv4VCfUEQo1RgwY2WUPtXLCB6eVqyYPFp3UyeNpoSSDrW7tYzX9RwyjNTC6WjgRac85Whm7zkp",
  "key17": "35K1MG5q78FChZ2P67SkpoZMQMERqZ2eH6UhfhFgCqeeQ4hCgw3gfBiP9s3fjwn3WTtFU1m6EKH4Yi3HXPw8ZHm2",
  "key18": "c23sgBSgcgGVMG8z2ZJD3M3h4v39nZqQQyGUUhHqZ2Tad7eRQjwL9dNZuKBigNLxaRbPFcvL8auCRGKygSLyz73",
  "key19": "2EUG4m9jVxuzPet5tmPfxRtjHi9S2QqEbRoL2rRXRGwieN4e3TB3y1nDAHexEGezyB49XcsvvRkjc3412W5WTwbp",
  "key20": "61R4XwsNd55n9uc7gNBgpYAfKMGT4xt79YfkViAF5dt8pNAgT9A52Daywmx3YcM7EiJbq45YCJVT6rTb4jqo4Pmv",
  "key21": "2ZpxQpPwLu9mqKtR3dhDn9sL5Se6ksKKcux7watUqzM3sXdgZs9tnCbttNVTxbdtNFe2pGE9KKmf9uUatKzi3p6w",
  "key22": "DkL5okYmHSG48UhsrCtdCoCJ8s5W7oaG9fVW8M9id7qWs87Uq5KLRuAuwFmcbuB2pgn8qKpKxFjXbe3H4nZHnpR",
  "key23": "3yLwxCSotTEGr8p8ozMNF9Xkp6nFsiR3MYQeQyCr4U6EnEFekRdotKvHJyYrV8vxq78ark2Mk8Gu7cLUANSS1RoX",
  "key24": "5eKn64TwcTa3aWoJ29vPTazDFXpcZHzC28uqyZKQBR2FF3BPd2sMbschCzjJUmuTZBNbapY6hLqZ3ANGob6cJFuw",
  "key25": "24X7pVpYdKsNs7pjnFq1DnuPuSK6w6dWikfVQmoTLDLRn8evKtk8edrt624SUYtrcL52y4GzwAuDLtGBGWs9sGhc",
  "key26": "pKQk6d42GU8uCcmSCgppVvDknTxF9nSY1bXc9g1Ndn28CuFEYZ7Xv8hVtCmxycPbwUC8uT3LciYTi8kgooGbULn",
  "key27": "3Js7rKFaSNNZHWZ5XpjYUw7dzt3gpdVNp3R9PwhrzUisW2VcxGq1qWG1ozHs9djuQxkLNb2zq27AHG6qf3dcmDrn",
  "key28": "3m8qHRWLnPF9XQ99pYPbikvmsq9c4kjL9xM1rq2DBXAVMzMxoKzQsWryU2EebGqRF2RVLFYg589ECyouaPmPQyq8",
  "key29": "4MQ1nSMgq6UZdXCEXY6tauDNhWNM7iqtdPqqsLvnyMnqkMhtWjdqQYuYsdLSc5TLDAqBfid6eCUvH6sERX9VzCz",
  "key30": "3h6nZLA7oQt2VmJBjhRwqPTaiF4HxjaiUHSdxU1g9dmRfyhyYtt4XfsdNiBHtSRVjQ5f75sFbniAfSGmPzaZ2d28",
  "key31": "CMw4za2R4Z3tgc7eutdFfMa83atPhp1E1JStygemh64sBA8aXFkAbs7yde8jd24tLMpADmvqGcMAzXuTZueN6SN",
  "key32": "2SnzMdeYvboBt7heccYVDeCnUQHUUqghVZLPLJS7LNATRLRmzwcgXqStbcb3vweZVCrk26K9mSibmTEHM9xK9mWm",
  "key33": "51aizPtEsCax6dercuPfDRZYH8vSLLv1BGU68t1xqHmZLDRbjRDfJA81NMdnLNAtPt2UxhuKWgTESjtorbfDZMJ2",
  "key34": "3VUFcX7fsavMPHcvtViq7mK4sDUfvCgTDQtAT17VUH4f8FRKTDCiCn7yCBS1zDZEFyzfdUM2meZp8RVeYFHUdzxU",
  "key35": "XH1A7jBSB8vCpkZcMyDVU1oEnjV9e1WoSW8YQV8bUytN9jyjx54rqwxnE86xueYU1XhoQT6xcs3uas7uzJu8XWm",
  "key36": "35ddSFdRe3LWX9uuTLmzHxJthHUnwwvzzG4RmUic1BRpCc33BHbok8jEHSBFGaiw3e7N6ehjeydkmYSm1CBX2ynk",
  "key37": "ZgJgqHfHnbTDKpoevt46LvXdeD5tQzM3QX9VjjVsg7E33sAvBz6QAGWGGYHXt5Hqx9S1F8DDSTFnU7anwXCB4Ru",
  "key38": "3WZCURCcpN5MYAF74X2GksV9MRkYUMKWBKiupCKSuFZ6iSrsYukciHfaekoBfmaKZhfQ9jkGSUqtdxrEEgGHnaFv",
  "key39": "5vFDWjktceVvXPcvRZPwAfJiJPVtfaZV2rbRAjj8wHtwz8BFaDNgb719PscMxCNuoFdb8DknjfeLFbpUGaE4HyX8",
  "key40": "3VD7pfQcW3YfMX8DBr9VRd3G9qyBhtLmgp7Je5BxoHbc5KWBdeT8wrGCSnkqRyjFgncMUZtNNPEh7gjdYhYXhuhG",
  "key41": "3ZnkrcZmQAYCZdbU3aYZtrXPeKHnPqeUX6aKqk9WAsGFR6TuHJqx4RG6V38XAB1RKpokVYSw8uXu2FHTPBja9uDf",
  "key42": "4JFJ4LV3iRXvYMMJXfMpR2Hu1zqqtQuTSf2YkxiP2gYVN8Kdk1fiPPbkuGCfnfWhjn9mYPKzYTHAnyo2RBpkc6yK",
  "key43": "5PbiNGcurZwbeU2asjmRB5nLU3Ya8yDu5W7HJ1RhVCdv1sh326owwNn581pFwLwVCcnF6ou2Tq4R3ZdHCtFnZ6yH",
  "key44": "63LNBrdsLQHTX4j1gWGco5DyeC2z2m94zW3KnVBvudoyT7owXLsuB19qn7dhRxyAo3PKtdowwb9qrCv12mDnGHoY",
  "key45": "4x4jcxEaKe8B3Nmq4HMuG7PWoQQmvWfDwJPKAyGTU22PXaApXSf49V5vY9WwqHKhaZf1nYnybULZinWBqtAZdwKp",
  "key46": "4D5E2pVZAvP1szzaPRnsc1jQJUfPp2fYU3V3WfET9Y1UwbidsJGxJoyTxahJQZXenUvewT1kiy8LEU27pmfDvV3s",
  "key47": "3cRNZP5MMVZrvT9oVWpS8tkzK8kPUtgBi7j6nYbfhJ9DvUvtP4oZeoZacdcuJXKioLYeN5mCPhuGPC79gkVM9oLh",
  "key48": "2HHhTxzqoCsHWQ7JHUPwXBrHNAuhskDYDB4iB3FiFDbxk6LqsusamcVR6FcUJHvWrMbgbRT5MYysJpm8v5bkhWun",
  "key49": "5DU26ep7wrpyUe3UeqK8BLSrZQ9o3VRjwk4SnUbrUGvERLAQG79xKa9antkg3dVRHZFP438E9mzgAjTk9UVvq7hv"
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
