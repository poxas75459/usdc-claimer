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
    "5SfEw1Yfp16nBpjB46cdUqnEZArkBs91hicu8Bz78bWfuEco2fVJyQXiiWYN1VaEqXeFnNs5HVn5RVCHSZufwQ97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2W97chbr3mkScUFvzsPbGZS9UC8gdNdNUqJqitxkvHPs7ZD382t41t61cxCBh3TAC9Md7UnTmvzwaB5j6mXh6q",
  "key1": "5LBP7pGUi2j6diRdjv4c3VJj8xJVXbeAndKhMWkv17nyhiVnJ3Hjv5k8NuWrtfPvWrxaz9UYACdxWcjvwEa8j1a3",
  "key2": "4HX4war96Sh4ZU2Rkb9CdgheVRbxRRnMWwheyxSVyUNRGhhhcjo2CrHnbRWMRMoDtx16Je1GYZCfDhXpbbpMtnis",
  "key3": "uJaj3isPKbc6GHLh4aKeaP6DjFiSiHee6AwnMVSDtNimugyQc4QkKvks4TgRFByqZKQrfZxfiWq8C1TEDpKWjEs",
  "key4": "59kq45ov3qKEQHxvahZAop4oRj6J3e7f4nhNLdchjSQim7Qpe6TUQMDtMqn797JKbyjvHP9CDMepiYzMD3DXrfow",
  "key5": "49XVmjJ3j71JiyENm5Pp3b545YGrUkHDSKufpz8Vd4FXTBMBHh6bYxnDy8vfxDh21w1H2uxUCJrXHLLSTA2vZN2r",
  "key6": "3KasNPbgFWdnKzakLfpiqrbqRLyC4wdDz2jFDjSvegNYSAE7bWyuYDPye6qsWbDtRNpAgcCG82TKX2G9GjLkWoZp",
  "key7": "2W6fQx3rPAr63Y4YLNBgPnQZDe1YN8eEV5RxshRuknexz6fLTHr2Bbt7Td9GPrSYzDXsGPBHSQwPKFfhVRArNwcr",
  "key8": "3GuHCgww8soiuWBHDkTw5zt9uHS3Hg64udznK5Xt1Tbcf6mtzcqDt5edwjKDDpzQww6oQWw5AEGvWaYMCGv9MgDE",
  "key9": "jrYfHPidUeKEJ6tbrvLt2A5sRmvmoJfXHU4Ti1QvowxZ8g8dmPgvSQAaHQjiJ8nNBdZxY8SeUFVU629J6LSvJfi",
  "key10": "bNZiMfvB9U7Cheu25Rc5eXePzDsYhxj6MjQJ5HXUfjFLc8h6J3Rg9cZEMtXxvsjBrEoGRik2qGAmY3H1yFnbsqb",
  "key11": "VVvsbWaURpxqe31dqpfy88ru6Qo4EkSHXyFzzUos7AyWAjoDXwAgcDsSwC1aEi5yG8wgTfPA1iQFtXtdwB31upS",
  "key12": "4hEhiXBjrb77o4hHQ7RymJpRhrxomeyt3m8j9wUHr3nX8NRfeZnnH3H9oAhZS8375QxHNjdoTC2QYSZ2FuHvByq5",
  "key13": "3ywcZWhy8SHEnxV7BB9x6De9hP4EX84coVEk6q61bLVDN42Udg961s9YnfpSuSKP695RKrjAL1KMs6L18bpiFhHm",
  "key14": "2U3UmyQYTzEzqsgzRg2tw6RHbCthWvPadnTZjKD92aXyyG6ZiVuCsxKdm9p4PmUTMCdso8nhYx6TxX3BFmR6K4ES",
  "key15": "5khBNqkM9teaikqE1oBu1Uhjue9oYF25JfYzBac7kDcELkTqTmnvcMoS2mDicerAkbbA8ztAifvno5oRzaVxXBY5",
  "key16": "2TEfbn7Wjdg94nYrT5PYbDEcNvtaDDaJknYeER4mfFScWeDumgD89NT4cZvzcPXKLSVKZFxmxy1y1M4FX5LRbtH2",
  "key17": "BoTcvq1x6WNYb9Nk93Y5GwMMZBAetGxBthZpZQoxC7bYFggRHbV7uQ1JN8BcKwyquiR9rsN2BrcL9B2FBE7J7gN",
  "key18": "5DxBFGNJJDJwRuNtamXZ61t9S5RJdLovMdPCSzPtmdyzhqMtkMuNF9RkswNTaGXPXZGBgYxNZqUacaVxoL3QXZm9",
  "key19": "4ZoU1Yu2o9wxFxjHF7sMveyV4vrFQyeyCiBoTyKU8d8BKLJbxSEaXxz9vpWoo7v3CLeoUsuYQZ3cpbjfqaRvVM9Q",
  "key20": "61UFEGntShwr1Q3DU5K8aziQLoL3MKcH4zJxVCe1k1EgAER4BdWkaDdQ6GrkvVkRhzVz2UqVqjQswtej7j5ascob",
  "key21": "3kdfN2HWHjyRuFgebDC8L9kow8pV4QrPpWUJsPLKzhsUYRiM8bAZdnCPadDtRE61amdm5VuujKCcCQCDJGuTd2mz",
  "key22": "Jnk49wrwPjjpn2zM9Rrwwvw3sk8NjugEbybyLosVSsgyFjcZ34AxzJLpv2YJ7eiMHLKbSVCrKnNc8DR1DVxhbpZ",
  "key23": "3tBz26Mu7ovtYhpECKhRPrpdpkN5N9BQZSDvcZgEAYpM5bPcPMDUv4CZM1inb1pK4taEUhbT6HzFK27UCJ2TH2Qe",
  "key24": "4KwW7U5pn1ySkoh96tR7Rw6wK6RF8NA3WXrvPNidtprTYwg8inHkm6yHJbWFFM2uy3awqdoUAkhR71oWkyNWUTBR",
  "key25": "2wMAsJeaDfSdUxVeUSu8hTwhUhDSmVwspwiAVUDQZZ5PVn1wV3WJYhJwKUjDMnSjLJabZREuuXqm1iYsrBAGvM3Z",
  "key26": "2syKNbSJS24WGzH43yikgVu9p1utamZiDW4LjKqb5ixnJnBNr7517UptjZTqPoStqxRtrXmskWyuJ2zoJxqLN5TJ",
  "key27": "2gBN3kiRkJKmJscjk2RR7oZxnG4VJM8ipE3Ca2KATiZphYGB6AK6Kbna9YMT6cNJX9k3UgCgP4sb8vtxQcXP6k83",
  "key28": "2nTnWsCM8Sn9gqi1F6osct1Kf5CukBdn6q2fPty4XaJLa7ynSZhNxKNSRx276JMN6sNfffNYmgwhB1gbHpH48oMG",
  "key29": "4J144veNCZviBGxR6sEQ6yMw5gXQJmXmT6fThF81Vr4LB3Hf1MmoWWZ7nmLc2MD1qrNNDu5NzWYUhbPVQPz7eEwj",
  "key30": "2nc6CFdXuTEAoMq466YeKbbYU4Roiwu4W9z5eM9hTTgET4LqN3gGLj4Tu25toQehXtQHWDi5twDMhsnbyftph3wZ",
  "key31": "2bSwK4v3LT4e4pGP8xwXnU3xzmBUH77ZXGWoU7ppmNCRTKDhM482P6qHAiXkS72nqmUghhVevLn7v18CpPBiTcdU",
  "key32": "5SbSM2T8QLRmMfKHnDEPMvpixXVcjsqJ1NEQhfrjFkPFUo7LZ4qxN5J9fK9XHcd96zxqiHvovxcUxB9bBk72Jbrg",
  "key33": "3zNUamjMbUcbEVWPy5EW2C6gzfYt4w72R59fwLnxtDFjGu1SHGR21Dn4nnaF8rntj7hXjLQ4vVgzSQB4e2BxDGef",
  "key34": "4S7akJAWw2Y888q2yZydE1CNhyF3fv4DWSMALijeGtVvE5hgA2ZrnsuoqoEZvuAW9H49Krus4MWFPfAsg54WqZRL",
  "key35": "5HKJr95WTMbea3dzuBsftsgC7HZKFwhntRJ8Lx5AmoTvgSMG85BbSVNyiEJq4urL5yyVe7TjP2KG8VdjKt1ddfY3",
  "key36": "5hrDVwntXb99mv62pC5vxELcxxQ9dGSdtXTjMqHvUDiJFXfudnnRe14jgqAkLi2DsRSbj7LRfjyHUPf5Kt2h5YQf",
  "key37": "4nj5hp5s9dPfT8BFVizAzJyojG3ndkWEZGztZ2WGUwg8P1NGYxvv2RU3KyrFB5wkNLPL5BCMgRj5u8LTZgoYNUHp",
  "key38": "38QHw1T2srmDhvS8bSSaKLpTVdGKHfEjrYsekZjAYzKBsfp4nZ15CzxeHSgTwM2seKyoJXTYgZQnrVhaowpkAtQH",
  "key39": "gM2oNNLfjJC33mhzV9bJHWhjiE8LxVKpohB5Ce2XJJts57yUbf6Uv1Et4PDjHRcZrzk9SjAdf38pjhWFuy39EJS",
  "key40": "5BPojrnHHuHbN9ayFPcL9gmdtJm5SQCenPu48kenxxr8TK4GWAFHWBFMjhYKJgHGnFqBrwqLGfvmyXKbcbJfmHrT",
  "key41": "2YVA8gKE5xgvyfxvp5wU4nxeZueAj59Ag67yoYiLvKUANMoPKNF1nnaukLaWQkTw9BXHg9naMEMJy1S3G9gAFDNA",
  "key42": "5pajWvadLayrrwQXYqSFi5QyYsogfBkSBTYuCBE1BtPPiRxsd3tVzHWDXvctf8VDwpno1yAYcJFgrwXij6842b7n",
  "key43": "hwauHVq7FkjowEBdBrbFYZwqLg3Q8jHjfKF7smq8PPzBmZQbhkWbTafxkJHxq9SqdtfnuqpKyD9hGeTeBVpFc3b",
  "key44": "61YxXn2yK8fEbnpyp5jGrJFq44kSAMi1584pp2sQLjRex7V5zBmLvf3MVZqRY1VUicGwf6ZkqzaVwht1As8igaY6",
  "key45": "3wmzfqDEkuoebUfw3NZ19eKHgTgXQn26MDZ7L88oGz2erjewvxLwc2VQvZa1Lr2YUc8RkNKKNRFn2qDcZq78iLc",
  "key46": "2sw7iRNLR8rTnaf8JS77J3qqS4sfyhve82u2KaeasR5g6hHmdhovUqaAx6SVzx4wHnLyEce7WT6MpUETdciGAg4L"
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
