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
    "5qkm7vL5Li2F1tFa871vFfu5qHuisCkvpVXbE7qchrAkoQGp17WfvPTs4qyzEL3bNdnRvyGgGULJmg9P2YhMiRdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2GbqHz5msFKQDvmsjMfBSgbcqyMddQtJGtjdHQo9MXF1SEXpvRXM29Z9CKijknm2FrQphbQCifhkTXQDXMKeot",
  "key1": "5NjnJxDWhcCBe4aSxd1UFYYXoKgfs4JgcywuS9ipBUyy1iouvs2erQj3gKzBzRY3XqvXqWgL8CCeVqrG19V184z5",
  "key2": "2JQ95dhjtwQDKZcuyc7NYCFzF8eqdWvJLVr2XoLKUvbVbQZf7HfjKddX6DF7AkgCJZyCcezxb4bgvv3P7vScCUxF",
  "key3": "534oTb2Ektq2kLPdcDwqsAodJThN3n5GNnzFa2wpaBJEai5qJQaPsDR5MbuZwj1Ta4ojodaTfvpknADgvwT6RvnM",
  "key4": "38Ynxojvju1ySeNViGhcAdmYg69yrbVrmqss9nFcdosL8mmSPC5YxDKLat38TsdTKBBsr1BAAmQ9M2DypkbikjwE",
  "key5": "2Gsc5ffyzi9GrHnfKdUHhRBS2coehJMmPddiMdHrztRzGmmvLCFLHUEt9YchexPXFswxVmJ8iJJZVRiHuxMhWwNB",
  "key6": "2GPSmx2JuRW3NPypCtczndSuk8S3B1Ui7XtSi1tPS5sufWPJvt2xR4G9XCpmJPexRALgJQkGX4fPHtGy1nxGeyb1",
  "key7": "PmpLQUhyejt7X4d9vuRMyGh273tgnz3nu6za5N5FfyaodNic3broSSzvXv4efpv6ZyfohQzhbr2pzmayUEKUpP3",
  "key8": "4ET1Z6WYwV8vTTUuQwFSRE8T5REMSRDwNtf4chcD4MDLXizBD2gygLLSzvs5n8gM5t3p1D2uwf2SyUJigVu7JiS3",
  "key9": "3C27eocpBsgkPm4apcKES6Wotwo2GkC9jMTdNmryh95MAyTeX6fhRwx4kvDrtU5tokABucAPexb5VWM7f6D5X7MZ",
  "key10": "afTBp12AV1cmYyXkydHtwRGqC98LVUSipSxUGbNtVL2S17sj6rorEKLdzoPWxfgWRZ5cjNfPCBVApdv5wsT52oY",
  "key11": "3SGJcer8UdxJjockurknuto3Sr582w9nd4q9H98kkmf4PfvBtJfG249EB1y1hikDCXHfC2uYYDvHqZucEWDessPR",
  "key12": "49v5bg3dN43anRjnJQgAVpvG3kkzRoEgvrPXLUQgWuDiXrjvBkizt4gB2wY8KGLHkE6Z3A75CU9cD7PUfT6f2YYr",
  "key13": "5JuUYsGHyrS3LPzdYz8XPiWyhy8ySsVqky1LJVFfXxRA3DrJUD19CDNBMgXBQHCUCBDVLswpq49Xa184incahWFE",
  "key14": "HrkojQiwt2VdYAkVqRRVLzWGoYHRv2iBmcE3SUFa8MvAd5VQs1BZgrFGD58Qvkk8vU8hjWKZMxn8LYHx27MXYPM",
  "key15": "4BeycegdgUM2Xf41VABtkBKQn9G9mcEb3igxH7mrt6X7exYVdkp761j8hk4ctYqfFdhxYt8WF5VKiKeJdMQbw6w5",
  "key16": "2Bky5BEpRiHYFrBV5pbT8R8tucJbEaGVMXCyhtGQeWTyAW9ecFEUijuyrKucsi1imfhT84JtFhvPBQyZM18R29iz",
  "key17": "2rHftmKGqToTvVAdjrjEndhwQsrDnKAvNAbt8wMVva8wL2v5ZyL3z3m7rrsJD46LhGRrHiVoEvwhcFVMtt1VRCn9",
  "key18": "4DweouPKx32RonCMmtM2C8pWLfQKRU4CTPiuVUvuscaEQRox9ou6Zexh97xEmEASCTqMuoFZz6doaMCwyrVCPEQP",
  "key19": "2WZ6ZM7mdXq73FeCXAScc5MaJVshE37Dq2MvRhU6YjuEX3jxgGdiHzT7JUti19qgjBgbSace3kT4b3FRgzEf6qrF",
  "key20": "4Pfu4JoYc8ypF1XjV6EfXoYP2ynNPFCNj3a6dqEzQfZ5Vg5AJXR4tw4zKVSF82izpmFJWRYQF3dk3BEFLehgsbXt",
  "key21": "3b2CjqqL1PJPc8oCwDG3ggV6ZYj4CH5tYmViYHLcksAzuAdytbG8y1PYZBtjpjjF3TGoB5VexQRXZyKe4EyBhPsT",
  "key22": "31wASgrdnf1sWv5NY8yoHJ4gzxa57jAm4mq61mDpQDzR2v99xK7whE4VQoMab8Uh33YzcQ18C7h8AmfQq6pQSMgW",
  "key23": "4G6soQt4juPEJAFc6w72CZWvwDeRbUtpdtafFUo2ZSEhqoeEXAiTBsxV2nEYVW6acRYB4pjWGS9ybyUnGmSM5g1r",
  "key24": "3y75Sratm9sDd98zW97A1ixNaU9St8UEq2VUiEUGSxQm5gvhxk9cMgmtc4q6mnv3KGtK5Mp5tAXP9AwBcSgjsHGL",
  "key25": "2dE2So2Jhbu8HdymzMFtW9uAs9Cv7Cto9uhmJTgn8Nsav9dxM56TJ4NrSD9EmSeNVAwjYsKzViTRLoxVCS6Du3hX",
  "key26": "3fvrgefHZ9TsWodRayiUsuQzxhdaGapKaexLwtccdu1ofCeYZ17XBur8ZLa4BH5xbYbYayj6Lamwc2yiyStgDTZi",
  "key27": "3mxMBiy47hw1GfTYMNF39QTJYJs3GPGosbEpbmJVRFwAA6VZF7sVpWXbPNmfLjECmK3JokuRRTJiJdooiETVGRTD",
  "key28": "2Q13JyYk3tFncJBB8zfvTWwqA8uQeEdg2h4GcQN7cJzBK7NPPPMiCPHBvgcuP3SvoV3yFWub1SBiDSrqbMXiofwj",
  "key29": "3f6WZdgvs1zKvuNcBeajc36AUomcVuZAUJStPxBgcoHu8NvAx4qDqTbHMjWS5GwsVEizH3sbszX4Qpin4LuBpeh",
  "key30": "2ebRDMU2Y2mLrJZbK5axEnjgYDdY2RoXrrn4yAdFQAFGGH9cbQtKnAS8yDm97EMJf6vqssvC25mzYV4vZp2C5yTZ",
  "key31": "SxF18ayTBYMs93gE9mZP7MTAnNsKSzrAdijRqwkKGK15fEQLygfLjZ6FduaecrRJmceShFB5VFrXVgHsBdGDm7A",
  "key32": "3UBb24DGB5WodjxCHDVPVPJ3P39ZvuLYQ7krG7zERjM1nXaBfeQaE6HbbCqNp3x1Gmppu65GDrtwVxbk69vjWsRs",
  "key33": "4tNbqfwhsSv1gM8kTNCpXQdwSe2JPHAZKpWbFQZWX5dseJbnqH4u7XPM2uvnL6FGKso8gf4dmyN5V6gHj8kko5Hj",
  "key34": "5jW2tD2taLdCDjW6yFz59Fu6zgjQk9MCefvJzJE93fZLCwhemiWf8W64wCrANVXioLQpBLhRBXooomkT72RQriDq",
  "key35": "47Sp8mEj5vf52qH7kPPwUdYhK7hqs3u6JmNjhyxcQwSyrFRmrVFVgBmwdQfmERtTZyfLYh7FUnnkmBfr7k7XLEHc",
  "key36": "qea114mkaHdZjTvXTyEk4Jdd1thXe8bN8LTtwizRopMgRBFED3gA1fVbf6iHDHqSyyqa3z9ou2UQBoZMs2LSkUg",
  "key37": "3eAmNxugWyVSpsWCbFL8ULecVWQ2AQteiEnxiJE4mAeypSf5TW1ZnDEo4PZbGb23nTGPGxyVz6r5Sxijgs97NcUd",
  "key38": "34LAKBr7dRng9VWEz5UjpfpVVnTnSoi8SRa8maew92b88WrbwdiAB5eeodpgTnA2RuaBYLyjgciKHzxXERpAYA1x",
  "key39": "2AjkUjVD84pky5Njee6gw3MNDQXYAuJU4hFr9Fj17hayZBXuUghaj9c9v5hyShFbqw1U7TCmhQjkZorsYTD2K6Sb",
  "key40": "44ReBac72b2vNsKB6hpQXdiVTjPaYKYQPQuYiLLFdXKFTKcRhP919LM5NVkXqxkAEto1oGi83uoHeNntnjb3x5Ti",
  "key41": "d4L1Pv9xKFRwtyZJq4tkVhHxdvHL6uMSTP7kZuWyNJduirj5AxjpyfxJJYnDxbve7TrFZiRdggWag9MnHhy6atF",
  "key42": "2c65MAkbGEQhTC55szT5E9kugDoqU8yyLYSABASJF4FdNB2SHmbPWthEerFYsuqTFk7dvcCzJ15VXD4MrT3i3dts",
  "key43": "2yJPHU7YZpkvj6JWzCu9GxHCtmL4uZQmLAsw4dSgoBoT4kpRfvEDng5KFqcH9hhWAF6gGY47B1iQcmDrcAohM5jv",
  "key44": "5izRnSQDNLnuxDyG1mWveJAtJcBv7ihvq7wxhXQnbopUjgJY8PvMyjCb54j2gCEM56PoTr3LhkkHfm2NzqxZxmEg",
  "key45": "2HnrzzbcqMkmAvZNbD6JFmXD5XQVR6DWhMefQGaJXu8nZRj32kuwKWnMgfg9ezFf7TaE5yMc4NeEqN1bkAdimSba",
  "key46": "4yCCnd26ZukQkQKVuqPLKgac35YEXa5yGFkVSr6WfAgppo9JLMudcHeeHEdf8LjxY7NqLs1NbxebGUAKc3dp3byn"
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
