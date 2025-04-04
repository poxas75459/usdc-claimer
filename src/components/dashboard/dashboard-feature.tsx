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
    "R4i63YNx6TTNfczz8ymGAA6QiXozWkaWcpwkB2LkYHARDWqYVkrANoWz6uGag8Pz8qXFXnw43Gd99BBiAFBxCgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43eyd2fZhXWa1r8XDhDFcaTdPTkKM27tyyos33FhwNHYjrRjNNxTJ8uNqyRXRz3VEi1mBrZFcowkN3gG9XhAUgqb",
  "key1": "4dzqCnZZbfqvHzKcqaSguq4HXViNGe3Kn8VjF8c2CHcnt9V8MfGLZ7jEc7YpPcBhVMDw2aqXJ1JCmMcdX1y1GC8t",
  "key2": "51acGZFkXGBLmWagRcrSVyAUV1AoZ3EHetfRxXSL9oCqqaFSX5ydEHE9sBo5JuAKJzzo339uTRnRJt9VkSZSQoEY",
  "key3": "2DUPosRsuxZsYanfQFbB9bgH5C8jBdLjYsN5oeKBnbKhMsrZkBRP2FM9A6DzRdzwBmkrUW5EHJvmH1Rdrvr2oKU7",
  "key4": "5Qy6NeJhVcP6JXk4fdfpac8annHhR8nYxiZFPNf1d9VXBZiCpR522MXXyDgaC5m7XgZjRewPszPYyGfPxwMJX7Aj",
  "key5": "4hs1J8MnydFYhuyRu6xSurj6zmWbRmxa4ochtbPX4cveLRMbce7bpF92eL1Mp3ds7PbBZ4jph1wcMxjrv5DS56qv",
  "key6": "2SkouGWAmeQRzXdD9eSB8g53QYYCUsQo6c6mkbrrieqRxdR2pE2KVDdAmbTrjwCTmQZDrvJ1RzqeuUzyJBLZ1eUD",
  "key7": "23z2uVexTwpcMfniGDknoWmNMPyi9E3TCjom22bU5vKjRG78Z1Ea83GkwC5YcVESxK2NHmRJT2s5NzbZfQqNgVtk",
  "key8": "36kgeEVNwB7qeLGfcJ8UbhfUSf3gxf464RzbQzAAcu3n51MGQFAy8vWdoH7VjXrwGRRocDV55doqS9RWv694G3n",
  "key9": "4Wsht6Cs3Tn8eato35QgJCsLyZd28jrVGPy19rU4ZcG4w1i1cF9XoG9zrWo834Cyq3St8anr57qkpioRzgdxJ2bH",
  "key10": "2kf8BJYYjPdbYnvMPKZetV9smWMbJS1wCGV6XyFSATx8NgX5ep2TTM6uk9NexTmkVfFiyLG9WkJXy3VEf6Kd3bUW",
  "key11": "oetkPNLZeUnkrU43YkE4etE4pcKsUveDEbjVy2fNW4C95oj1hrXBWiEuEWwnSHxHkNSGyuhvdbR1HXsKnSNxGtg",
  "key12": "2G6ENMVJFwbqbPBPsr6wEFpYphfvYoSbKP9bGi95gXKeEBd6TsPN6DVCfT3n7rvvsYGnZG7gr4jwXqcvHMKv5qh4",
  "key13": "4wc8KLQbeD8ZRPpmGMkYFWL5PEhEoxtMAHNBig1MGiPQZxUiLovLbTunQ6AcMDNzg6tnfyhCAdSyNM7TMt5S4nHU",
  "key14": "5b638juQptNibNZjxEnvxrDp3wZyZ62o4B7fNEhACK6uVoaECFLfCPWmp8SCmc7djwA3eYmsgcqvY1VFjbjjK3eg",
  "key15": "2L1dekmSQqzU5XVQKxsZt8zSCsu1d7qaDfB2dsfyv44BEsEU89af2qcGJBZk232YHL5sghEEXFug93GNQPmFSBbE",
  "key16": "2EBjhGWzyxtpKcQPSHzjmdgvaRYYvNGsbAcFz2tBmtx1BC98dPxN1GnEiN2MftkGuTo3rL1HobQbJ51fnfZ34ChE",
  "key17": "4yzYByA5RVpvnWvrA56jBNArMSqPY6wh3EypSnkH643z8sNbpbdpRroBv3ihVYepUr9vfQ3FCRs47RRnfZffm8Wu",
  "key18": "5zHSmbMVR4vmXCqJJh9zfsowtjEuWiaVpVLdR22dpwmjdWdBUR3U2URrhdtcfear1QpMGKwdfJui5PTCBHfzVT26",
  "key19": "4eNhR1cBtFRSQmmn1vYoPtCGRjmeWaXpDoTd7dhnW1PV74AxHsoVLVe1iDPY4iMp4uZTiSo1qWVmWxB7MyCWe4yu",
  "key20": "3nr5SyvREHjeTtHVbL53Z4FwcaqDMEKjGA9FrnZBESX7QpF2VwkdXMuRQMTqEwCjNUtN9dAbjPRmauB9e3nCvPUq",
  "key21": "4FBp8eGjvaFfAZjRg4AkjjjwQUtVPw2MFa18kd2WCLMo5HnxvqmdGpKYND8FtSzgLogTtsrdCvAzuXGgGiqJXwAy",
  "key22": "45pPTTyWhzisrYZyvoETNWKCWt5SpRn6E4Rtz2FBvWbL81kgHCKJ6q1Yqse4qhJx7z44p3e3synSWpfc9gaxWjVo",
  "key23": "2cixkPPujBxK75CbRkxZT8RgwUFSCwRsk7i2qidQ4KJSny9JRuJqrFuUzcjWYivz44pZ2XxeQtSAW1wt2PuP7Zm7",
  "key24": "2fFrNZyM6avubYy8NsJzsebYG7TnnD2FEc3kkooZUMVeAeJYtCZuBMN6NRKUTzEdzDS6iENt9kE7rUidhqgmrPyj",
  "key25": "5LzQkgykqshKiBTMb2DJyw27fgMpenJjfXH3zDYPLiKcBUquuSc5MwGpEo3a7nRedCR3FECRVyPBqDTBfwq8UP6e",
  "key26": "4QJUgRvVLpS1VAgcC4oVFYcMX8qmjTnDmoDT4eWXw85hJRjVRaWLQ6Vv6EgsHxUv6ERDtU57GDw1FtiGZF3kThFW",
  "key27": "2okkHzqfaWMLD1Qs1AHAvjJpzAKBB8VN5W6tFNUa4dujtKZFNzNF2FRyUvC4Xg5CfX6vNHBzxcSgMAPpSNt6XWdC",
  "key28": "3q5vrwPXU4u4MSjM6CEt5XRTFhoSvyhkUB9RB1r932XpukH86a8qt1FbpSeQzkuvsgcLi9KiTwFynwgZsTUsMn9o",
  "key29": "3Wrd5XUontyGrg2dyTAWL11KNK6TDrQnzXgL6NbAd12F8pEdzWJgG9Q497wGpBWPekTuH9bL9Gnki1R5mbXfT9dn",
  "key30": "4CaBbXMGgTzWs97ffiWHtRE9WwcqJ8Kn5C9Y2u6o4ETiAZmNBELW6J5rK7AjFekvPEY8YVyjgMM6WTGVP4hNCgmY",
  "key31": "2ix41X5xg9y9xvoX3DeQVKUxPJLWoig5Z4jpLa4JXRwSaymPapitszSSgawyr15td6w82y6aWN7Mcp4JnaZpGfSB",
  "key32": "3JnkSzfGRnMrEAZ7pji3AeHUjgrwundw8P8cDTaa5PCvCMQ4gKALoJyTsVrv9aUQC3wieGnK44PvJde1EdUcG4PJ",
  "key33": "3KqFQKdyfeHLSDRpzngZHNuTewYPnsjuN1Tqdn7cUDFVqk5SAhtr6cmmzmbb3Rqu2vb8p1CxVnJkmnhAAQi9keTG",
  "key34": "634iNb4wxNWmraUrdThBaW3Qx5nESs2sEU15AAhcS7MPmgXe52SQbLmYkuHiZnM87QV88knVmne3GR5RdnLL1H42",
  "key35": "2mdejPZWh4A7BvqDrvCWfnu1fc8ZAn98AfhfyERiGH8N7hhRGsu1QxhEyHs8cSVws1mmW7jgMkfQkYb1qTeyss19",
  "key36": "5DvyWeCZPaUpXWW2tqJ45fKZbzyz1cZJMiyLNpetgKadf3sHFfD8H4TfCHA4uHEpjVi1st99WeRSi6yd9tGtxoa4",
  "key37": "2DXRtGdwnwPnyL31rsQXXnMYwqctb7N3puGdZjfHojxJHKDF38iKgkRhwmnFhNs5fCtbeoSPD7SsNhjDfmMRe4Xy",
  "key38": "5b4vx8nBMQ4DrH8y2WoXZfEgsW5j4ahiQJQFdqLBNuYgHd9LQbfjfQe1k7Z7GPpkCAWc6nTmsJwmEq1TmCP83rh1",
  "key39": "Lc7BhSti9pJ5a9414bL7hNGCq99wXDvjTh6RTU18rght5tEPsXKpe49C2t9BNZyrJN7myYvvM7xr7DdGVJhmBRn",
  "key40": "3ivhdrNZhQLFFbXtqzebGF2sxDuAxUKuqYvCj2vYvf5NMbV7EK2ZYEqnECFSTQg9uMpX83tG9QGG3pog3mL6TzPf",
  "key41": "KvgUKZnGWg146j7cAjwn5ZfQXQXHHd9HsYCHrkxPgSdGZnXyT2qLYbPeybNXqd8mJQVM1KVcxbC3yggAeLkSWFa",
  "key42": "3jdvRir88oo4REFojZ1ivNVyQmuQ2ydqG2NbWjcUcYZAvBAzVPGNFxUURe6rmRFD7pYecR6yg65cXtfjUgFYh8y4",
  "key43": "2PABSMhaHCeGYruEkfEYujt5xkog5ao8MNUipVEksFo5sKbsnMsEpR5JBq5QiL6R6y42tXNqPDWhSEyC5KQLZfNP",
  "key44": "wno45DXvhmfVfpZsAYpUExYKByHM5LLvf5wYsty2T3d5d4TZK6P4bkNpLSahZkzHZusyXj26JHXwEp6JNR5Etca"
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
