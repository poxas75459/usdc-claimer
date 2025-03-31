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
    "2F7QG4TkqqjGjVeiAteDiJS8CboiYE6PF9CJDvdpijHqorER9BYBY4TfLpdYAHU5KAW2H7TjUE7EfSgdPZMR2wek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aorxAkKTRa9UQTurusbqF6gRZbxB2ciUn2aU8QqDurVT9RGVH1d8yMr9TFYLkShmrsKjhTmCKd3mGZZRPAxWkXV",
  "key1": "4tGBcLkejTMHA487mWdmoTR8vKASqnmcGPz4kZ9RdaxvhBzW9RyjFgHNwWwQwp9WxHPae3vPvwFBZDd1gvTasPme",
  "key2": "2XYuzhhs1kkxMEw86mAbBT8y3aQKEzrW4qpsM8ok5tyiV9SMsk98xZWaKnQKmKqZdUoKqpXMEgn5wZts8j8em317",
  "key3": "2wznfGA1QVYXqCycWDSkUkZcxdPm6dx3WghG5uV98RfvT6sfyd2PFkGgPDFypnP2Y6y2K4ke6YF8ifbE2e1TAyYQ",
  "key4": "5fGdrrJPwcrgtv2WACBrv3Bk7hengG3qP4w6xz6SbywE4ixy6cP4XMA296FVBxzjhnq5ETiXrR8nPSiEf5Qf9QZa",
  "key5": "4y5pQn9EWJkVmjddP2yyt8TQCX8wS5r8Z3YBwvSN7MqUDcAmJVphDbuDPopZ8GkqrWh6QQi22bNvBMoUVZYu6rn4",
  "key6": "2UQuemSi1Fzyt9kTs4T9Tio7G8XSozHEy2toasikokGvcf1E1Y4gpVwQpmrJ9URNAmGPd4bFwSWUnyd6jnrKgtYW",
  "key7": "pFvvkrMKhtM9s1sMerytXL4Feu7KuXUuWpqnnyoCSfqtbWPp29PwvU2eKC5ucnVQEPSywsrYiUt35S9Hk7AUPtZ",
  "key8": "5gpdWQSocYTqRFRFKkSki56uCVnt7SfwWkb3xw4FhNBvti7srQEXBcZX9GLAbAYHtvMoKWAKDe8SLtskpHphDZvZ",
  "key9": "2e7VAjiZHuXcVjbHTZ3ZMeGmRP26LEcdm7s62EZRkBA74UaMWQsA5VSJzAXiyFNVKshWzDtMxTACsVjS1mCNSjtu",
  "key10": "3v673QZAcMvq2eu6zJsGfDkVjb9hzJUyiEMgTawDjTsSEepCvkZFECgXXZqgvL9VntLZK2Dkh5p1bRBT29JBH2u2",
  "key11": "3pSAU9vEZU2VY7qGjDc8nGjqQ8vqSpDoHJur6MQBBYaueAW3BEz55N6r9tKDXPQfqbqdADSfbUCBGseAZoLfqQVS",
  "key12": "38yV1pDeK8whek4GL84YcPcntm1GEfVq3dYS1V6cEfzEKCtNBmEBCRiFWsTVhsNCzUSA49rnVz62PaPBAtJwqAxb",
  "key13": "L4qiuaQAuvLACFsaHPZXvKKzzNQKgZ6ZwAcDVLcgqaK7iTtuXRLa66oxK1t3kJNkDSvt3p2mQbSnBe2rQD73mUc",
  "key14": "dgqGqsCf6ESFJSxDGAqA4aiDxKFZo8by3oracRXcjHs9GFxoNRdiWWE5MfANenjtctvgse34L8Wqh1sPmjt3Krd",
  "key15": "3Swy3u7ay98HCthmo9RicKZwxHdq8bpg3LBXpWzGZhGMchHBFCyhmqWLXuQLXmbUSKeA8vjMjf9XGPWucfaCyoJv",
  "key16": "3rBZ2cJAzDHt5tL7Bk2MQdAy1SGY55FgzZbrQiFusRHTMMGxk8PjgSc7YoX9LT6p9WzqyuK8afP3hajttQeU1QEf",
  "key17": "5CvyB9wz3h3EKvfLxNBPK9ii5hmFQsjGzd9WfP9cL4ELQoMpdij6t7ENYWwtGzQBf96gvNp7k5ztZLVA7iHpMpUA",
  "key18": "2mkUPt31gV6qNVGEBmWnqK2SrGVyiCsHN4H9FZPEPaBg6SzqCuv5rogs9ADApPCMeQPRpNr1eDTZhc6jJwdPsWsy",
  "key19": "5pqQKJ8omuJZsS8n6gJkyMJmDHxqnehznqbcq9QKobsSZf93fWcer7LQFGpZkTbGCjYj5cQ9hc1HeZ3Dy7GzaR3K",
  "key20": "21atS7aYEUEGVdofrZ1myWrDg5ocJYG3bBZNZ97GVhvXZgRv3ffQc9pNDuQPhuNZj7kuQmywjgkPBYpMNWkXZoYe",
  "key21": "5oKSW7YhvtPUjbDxcb8rqaDLxuQchRLjkyveRqbTgkpyBKFRTPYyKg4XBfFLFFj6hST72oNDKT7ZJcDvqBU1PP7W",
  "key22": "25gvPKxZ5YePsKMcxNuqPyQjcRAndSZPtdQBT4aq3QPs3pP8U8eN8u3a5WKErXQM56SwG26C7bqMhAjrU1T54AZ6",
  "key23": "mkDK8e6SZ528mDg3zok6GxWeaqRxrS3p33DWw9KmZdARZyXrr3ZTZt6fSyKq4FUkmSkTsHxy7V2cS9pdX6wnVep",
  "key24": "1FdbgY6JdWdqUE32DHsfEzGX3k8KgYEaYxHSQ78T659RuyhWDGzjhDMKPbs2hWzr5iyu899JqX69kJEdpfyjiLk",
  "key25": "4kQHG8nyb4iNks3mUNhcT4rt65WjG4dapburQWopbkNzRrWzKi7Swws33ZxEHoojnC8A38jGvHCaAcTwsYqwApUG",
  "key26": "2WEb8mUHW8oPVFzJcg2XtTYbtXo25As8iyBxvAnNaphFoKj2zY1rHqjUXt2gK4ZciEhu6EXqdddXr21bcmKfAa2r",
  "key27": "5ZBhU7i42jN1DxMgTfH4HVkNb8eyiMM8S3oURnfDVxYC1Q68L1XgfZZobgCecJodbbvNNLrxYQnL3LiYGGhdtZ4m",
  "key28": "2yaMfc7hJhyhgRWWwyY9GiEa1qXE5mgaPdDpmAxNwQRANcMXDJcJw1Q9TPd91wyGA3yZWV9YU8ddGi7MCGPrqpES",
  "key29": "4gJGNmxpKwbr733HiHojbueP8nvWeZ3Uj7oapXQim17Kgrgfj1UKh2P7z5pnRAj4rFARNTgZdeecRMB6X7xgd3vQ"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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