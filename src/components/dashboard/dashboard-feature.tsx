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
    "47bocZTEq52G86dN7L2xzVK44aEgwn2tVgzHp8Q4YJV4UhrEaa5Ko5TujybtgU1rQUiPDn3wDfz65eP6Wf2qnm3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJzr6eHJk4nT2TLbYqTqF9kmr7zsBSdUySmmzzJtobzpaHEpQYJ5hEFaTnE8t7CqhtVKT18mQGHTmQAPJX6hstt",
  "key1": "5bHcW9NHwGEctR3DhtBRkRZwVGmKVHx1djTDEQ51qXePzjZFoByr56fcorasN2yesYZSVviF8sQ86Scva8sSnMzd",
  "key2": "4YN3pJGhQeJMuq3jLbrMKKyXwe5wM8GzWUHwTjYtdVPQVU1VdkLA5wGopGzmGmpDiLpjMpnQnKA5cwMbVEYqwfFu",
  "key3": "4LZkky8c9RhB6WVa9v8UkCEBg3dMjNZ6SM3GzABYgswZpn8e3s1bZc7fkVuLVVNXkiacRRbYu5TvCYu97WcsxwDy",
  "key4": "4pYoGtyWy5ddHjybEMTrvUegHGyNH8raxjfkgcixZkxCBeWGxUEab5kLDaKcMeVG3Ve9BBwqJ2NUpbJ7Vjudj5Y8",
  "key5": "oaZkHnmzojTey3PE877ijAH32WU5yCif32LWiW53A4auqaxEYcJCzRMZbfNAj7w2mfsCzyeNPZTpvpEMEKkBraY",
  "key6": "2gb7PL9eWGAFXwJBy8fbNWASZ1kj7c7BPdFqYLEUCZSyjbZyavdWsgcBcc59hevrZEWzBiGbpeM1q9rn16vZSMHd",
  "key7": "2De94cGtqConrNgYufRFNuEkz3YdW6MZa7s65NtbKjQ4XD6vPXtnxECTd4UEm4ipmVJTZqf3pxK5S6upLxPfzTUD",
  "key8": "55q7oKpkGRgq1MxXVmQRKeFqKowt33xBNz4Bh4hUtgEymo8qL5ui1wAxcqZQb9pXsmFgUCYcyqvG2ZYBEaTzNu9C",
  "key9": "2odgE4kuMgFA1yMkb1LdwF61BgejFNfMmrDeLP6TtUch4jsFYp4drauqitGZb83CJoUkqs5bHMBNpFRjuUGZXGXs",
  "key10": "47X6QKfDcyTSywjh82KL9LfZNme7EFKwE1KqwthEy6bCpH9GSgH3G3eCmWGm3zsDicQ94aPosv2uFaJbFtbBqyhx",
  "key11": "5w1uEzwNRHitsR7CDCZRcTcYPtCQ12BLqnr7rKcQRi6En5RAUe45z4GtoP967QB8dDEqP8CArycnpBP8eZ2joKQ2",
  "key12": "2T9QfzTH3dJhw1cGxV4SF5FDkYwX6h3eD8Q27iR6683yp5pwmXihM2iY6s3o5QLXy5qzCEgUfMB1KxixF9XGKb4E",
  "key13": "4LcQsuuKs7VVP3TJYv2es3jF7GZpzxuBD6Ds8EYHwPXUoVSVcbPkHzbf2s5Ez1bfJaQCAg89DMVLZaL7r5XHgx91",
  "key14": "5MN7obV6cgXLF1wyRPDzUbC99Zu4S4tr2xpesftSiX7rSVpep3ThivotDKZWeNTvoSvmbiVNTHLoiP5Zo6kDuAzM",
  "key15": "TWkakXt91kVF3ELPKWzLaAGzGX1MUj7HQoQb3Jb4YwvQ9uSWkdvwngtgbguMMonEfpudZ4ShhaKpi7GLrv1uuDY",
  "key16": "3iEm9iLvwruc1DiQenPvRYd9Z3mQkC77zXjmBibHmGJ9Vpk7rsumWFGQVh4YAg2o7q9WVSMeyVVmTzJ7nGt23Yxc",
  "key17": "3rMiXJCxMAvWiAD883i6huaW4NHutjkE26u2ZEQnHCo4KMWjLeRhZchmZg82cPV5XZGKseXfgMFt8SJPVTe6EDoE",
  "key18": "2oRP1mTCQy7U7P4DsBPtF7TVGViLCLV39F3MD445gdyHKM2pCKWuui8vYgvZ1Qo1Mf5yNJWCi1Sja5B4reX4jT78",
  "key19": "i7gJBV6tnVkiwSqVyvYtvUHX74a2nnfqL35DA2aHTwKQowPDfmoeQXgBJSFgeGLyN8vePtK2VSnHuzVgyJMtm2K",
  "key20": "AyVDGsWjYRtt76LjH5qWe8B1itm42aV77vcqDV3FkWcQ4j7YtJmiwMd742jKEUP8eLkiecJximPv8wGsSdD962J",
  "key21": "4bw2xcVzj2kTpPM1VnnB6mnQfzBgveG5HE9ctW3stFHMma3bnuTEiPMqaSG1bdAnsnqXD3P77LWeRfmKsbksTdky",
  "key22": "3KCv5X7nXUhmvufSSuBocqzcXSK1tJYnxkseMhUjBoiNomx4pNvf6EThVLfXixbCdqQCgmFvYpAimgqAcxfuckhQ",
  "key23": "5tUEr2CUzvaaktQf4uNcqpPVj5oTNPMst1jyApAGxXsXesMDtrv81Hp9FEux8EagWzLED6LSXxkQA2NVwzNkU3VW",
  "key24": "2iqyEGVNXpif9kpU7Eoum5cdKQxiuF4cStcqDCf4YcP1GZeumC3azm5DSbyqLvJ3g73924SFpnzXP7m2AinvSxuC",
  "key25": "2BT7zAxwEnmDLBLjz7rosuEiXTUuUrQkEhYpnRWcbEX2qKckJ2aQTXHxBVcftC5Hcig9yHGsnSZYpxtajHYgF6ga",
  "key26": "2Qnsq4igGpp7Jt4xremyRvrVJ9hSBuDEhMM2mNtFWFqhSmvQEezJB6rA4eCUo4r4qpsVAHgRW797P7G6w9fahW3a",
  "key27": "2NiSRfsjavGEHYj7mBiL81je1xzFeBDqw2sMd8rjLDpSpm7pXRA4cTx1FpHX5vvoTWyJTp8aNga6hZ9F9S8VL9D5",
  "key28": "3BNFoTwYSjqu1E5Axwrhmyrxchztsb94ftmVabNutxu84UXTyZJbnTHJ96cGfGbrHp61fjTtEAG9RSLRtYpobMY3",
  "key29": "2B4767irkPGhcsRoTaohgZKfAR2PADnW6jjavx7W6UgFG8biSq4f675jK1kaeqEM8NjKSBU4fmMjhz3DbunETCLE",
  "key30": "5XmzuSBBUDbM8noCfM3j47AspnRgzVjEnfG8CEBJYfEnVCyvrFHduTR7B4dkHuaf1twPh5ukfjAqBv3CTNHPffSy",
  "key31": "28hxUPWG19KRGYe3wP5Y73Bgn2WtStG1dhngMSJsT52zR9pJhg9iPVavEhCLkRsx7QFcqx4F7qYrdypTFDuhAvDG",
  "key32": "JfY2WSMLGZ4PdqKKhj2RagqrFSJHkYujKh4vHG9VdVM23eHjZaExKccqUZcWrpUtvAGyRNwES5D9BS8KTmUZQcz",
  "key33": "3r46Ff3T51yb1DTJZ5uoBLsUSK3ofAneHr1MZjd2mffjjXwJ8i2fwDbsPpt9Jz4v8DTzkC5WiDDBfi6XKPLXacem",
  "key34": "5mM6sXkX6uXmXnV9kNTJY32R78nmeKH5XAZMJdgYFrCqCscYSsdhXt9PCx2qxhZywKdm34uZDupCvXufNhqUoGNK",
  "key35": "4roWgXow2cQSau2GERFdbmYW5YBJFYJ85jwxvSghp9fAbR2V9jN5fJz3u4U9cGHCmVZztLa4RwJ1pWwRrUmrGCbf",
  "key36": "67DogcFNkTcZyEMyfpMEYGcj2MSjqwjZgaNy3dk47F4komhQcgPs82dKp6CSRo2NuSpN3wPhPYyhxMjjMbbrzdE2",
  "key37": "4ebdE23qunMXZ1tcx5JSdeaj6UrQ1R47ezvXNJde8siiw1UqYX9KJ9csJHXuhfmicyoPYJq2K8Rf8yz5FRCKsfXo",
  "key38": "63Li5Uy47erENhscShPbiXzJYpzpeskYRJL3XwMuosY6wmwHkHba6QZPvuUzpN35UJnNSgXFzFJwK3Ws9mfFfhmq",
  "key39": "4PN9vSjHvzXayhFCP9837mRdWJ277c89F6ieXF2mJggyDpZAM2uGvHXUC2We4viDkUURHLMBSkSxrsPAXiCQMK3G",
  "key40": "5X7Jwt4HktJpFv5vpHbMvknbWNvaYupnMknTtc6zaBUicqmTk2tUV5fwnYcjoydEQZfSxkBFLcCC24BUZHXbtDQj",
  "key41": "yq9p98gdybUs5nKWU2RTGSqqdDisTbNm3vaVFa9fjQcxdDhA9urSN1QQHnj4FyeNNMv8j79qV5VtTLKqzoe14ha",
  "key42": "4jpa5W7jKsMki7YF4vcDTQ9U3LM5mUoeg9qVRmMaqCknEPfWnPrvTEofL4pZoJMGh2x82TBxonnQrihWwY7X759c",
  "key43": "2VCfkD7gKqmcS9Z6mSVdqs5qMxvU2S8r9PNgPGyicTkHxuzFxLwmnZbZazK8W4JEAFcmwtHcM1hMUuxi3dkRnk6s",
  "key44": "5u7vv6L4pTFXV4nRS1AxMgvajY6Q1DcXBQU8DZabwqNR5WBaqoyfmrEhdx7x7Sx5wkgK1qdCp8uru5RxH7dukZgC",
  "key45": "5A4aNvmQ1UPPTZPWz1R52RQwZew4ksGA2R3Ti49hR5uQU7zzmnwkhu1BqcUDmUHTcH2AdYPp65U3gDpmPDC5uFPw",
  "key46": "d4VnAp3EfhFFv9aizv3uuUmZM8RuxThsamaRkNdXuXa77X6Gxuw5RCJc6uH2EnrdeRxAKxrAzhmK2RcZQCgofi7",
  "key47": "2B88tfY6GXNryYHsdfPNviqkPpUwDhZXt1isgsVJrbiGTUutNCoy28asvcmiep1M7SYgout1JzzesDLfWKa2YgXm",
  "key48": "KEibgAPYpaWbLZo3DRsBvxY4noZLZMrKzdBgtDY247Gn2VAoh1wLEr6J7Lxmn2WT3R4jxdxeGeJFxSvcqR8KQRa",
  "key49": "2XSAJ955vGKuevaiWntjzNgeS5o1p4W3LEkKJ7SgjGDc4n7RsnqJAfE5htSDQ8iMGEMag4paigwqHVLaHxi34XJi"
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
