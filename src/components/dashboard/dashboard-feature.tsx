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
    "45EFvuWnZTuvHy6KEXGheeZBvmtuGsJDMbGtb736D8SZwyf7TneAAP8XrxrE85KehNRrKhZZShFNbT6h7bZ5AHHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mWNuE5c4vMChjX2cQecTiPm1hzna37CncXbxkoxY1qM8DEWu9T496K8a8as4bSavzRprAVe2yFthXnHeZPDfrjP",
  "key1": "4fPg6fi5dKGifZpxkWvR2pY48h15XZTdEe2QYDhthYWS8cmV4AV6SLo18zpkMLBV4SzFZarW62ZpE7ZcDq87G7oq",
  "key2": "Uz1QZDdbUuVY6P21HJnyA3Favq6hZtrHE42SQni5tRY5RBy7XCRLsiuzNRGAKMjJbzSnW9CfpuZoEsii9AbtHah",
  "key3": "5pyuenh6f2T25honVTszHMagvmrrX57QH96p1v9JBBvMjuCZHhLbkghYYADuTPPuBsxHQgKMM64o3sNeAYu5QChe",
  "key4": "4ckxeKgDwZrkpM1C5q6YwFsSrD9MxChjF5cdiFgDm8jYLQay7RidcHR13VddvGiGNnzBsNbbFmbijGCQ1edF7zoc",
  "key5": "BZLSmKn51Yo7F7p4fe6KzG62hNeG7LyAvpVQJ7PPDRupzCUTdXacEazSb1Q4WDrk87aRpY8ajkxtGHxjPC25TLo",
  "key6": "csregvHRdoLnrdAPvkuKNfbk8aziCfn8crwjVSaFaDp12fhukbzHbkUADmY7gCmvNMxFftKe3zR3CEAkKJ9KMCh",
  "key7": "3bFKkxgDqdfFBjUZsn5XwqT2ev3spWe1tA9ZbqvTwgipwJJ1rSoddXL782GW4i9SEsvzCBGC398HGfzQ83jGRqcM",
  "key8": "5ibrKF1QYKH4F1fDH6Bjxfeo8ArdaPnaNyrTzehocdi4pQLqa4fxcwQhNDVbM365qs4BDb4brTue97uLz6WhkQbP",
  "key9": "2vyVBrs4pBrngzg9u89kLuCw5cXDdreUUsaZRT5ipQNH9V89Dm9zC5w2KiYtfH2jrh7tKTa73PLoSqBXs2xs4Fh1",
  "key10": "2vAjixB8QoApVENVK3Q3pXvSecRTiqMUCqE9T2A4d6VVj6JG7fAE7ArPzx2w3ddqv3df2m76JqzkFeodotFvGaDD",
  "key11": "6EZWhzkBnkq7CLbhF7eh2tSNjLeM37XhKjdmzyEpnywiCFrYNvX24AqGKBrb4d7scqLH4okc15t6GYCaSu3H1j6",
  "key12": "4nX8o36RWW3a11GGvQ8Cbqe2TsJ2KcDPLkAmcwnfvio1hn4bovFZdpRQEEUuoKNXYu7qv8tWzYKmqSmXeSnrsyHX",
  "key13": "4umRHCHR75oYzADa1kP42QCDMJwUrf69LDQXJAiRXzwpK2gEmry4vqUiU4wC4xaSZo5vZ6zZ67kKXbDwvzpJSPi3",
  "key14": "PaX5RZwYmD1yd4KfmhcyAFbGLk8jk1qriNuU1xNnDyLYDKPuiGJwf3UVKFP28h2BfCxpX2iPDdyrH12sN7Dyi71",
  "key15": "3iUxcNdiaR2Ki4DaXVEYEKWMUonGii9CUQASz93mnGy9Y5G9BVTUnKXkV3sYJ6WLR8MPrJdsvJaqVDmrHetEe7nT",
  "key16": "4YbymHJgtwZayiPnUf9VfWjHJTDvDyD8uaUjaSWj4BfnJMXbGAiwFhqrkKQZejcYPqztXRtTXwNpts38ayvDBatG",
  "key17": "26HojXdKvhMVqgB9Cye6zkUnX5cFn4NbBnhCzWmFVJL5SgWWcxBGCaAGqJTNn4efLkZmGmH8mzuCiyQMCuffFpMF",
  "key18": "21iWmXEiHvqukMZ32UeyehDam3KgWDY6gTxvPw6pcudFVk7dT9Fdyu5iSK45TGohXEvX2bpWgp2JyH9TH12wZNzZ",
  "key19": "2ZGF88863MkWiqxdf3BnhFLFEvWLYKtNsm88FTBmtN6U5Sr143tSLP3Jrdej433YMp4NtWU8e7UHb4WuBzP9YzyG",
  "key20": "wM5CibFnu7jxfP5mUEjqbqkdm6Ycpsj7y3u1rh3E4tKRWNrtmaTz8niipYBhNPTSGwPcfp49UPzkC3QMfb93w2U",
  "key21": "42SHbr2Uman8WBhCd6GgCC6h8gb9psVfr5TQfp4HM3o2hzNBAuEjU2VFjiAJk5DXo7TjzhUKPZbh7NtRxjkuAS1i",
  "key22": "AKvHjZS15s21Pp5VEwjyg21rt3BCa9f9nB8chWzMUa2tjVYzrmV3DEMnahXfcoqDvQdLz6vqkFWnEVuu3ifRsSY",
  "key23": "4uwLLJBDjnACPfe6SsJB6YbpbDYS1FRbSYW5r56gJ4qM1bwW3Pe5G5KkPgQHBbXCyzUcx6UYHMEjPgd27ATTyAAB",
  "key24": "4PdhWZAKjrEiAQ5q5yuB7YKkkt5a1jXrF1fQs98o6DUCYTgD5Pj6Kxqx8kQhqS8Ck9NPURfemTVbwQCrWgDjTusk",
  "key25": "2ZCWtpsHqMeFAJTpRkaHrK9MAaNzCXfRFqLCsRWamvdjbM6TKS4ym7VCDowRGS3gzAWQXdqVWQtZnjF1tWLp7Q4G",
  "key26": "NWi2dgDDKFKZiWsngNeczYKRX2NyRjaReX3LjBdRKwgjyTtuzCDhJsZVBpqEXbng4cs5H5Y4KMo5wWFHVZ1P7ZF",
  "key27": "2himdbMkgVP5DAuzKBvs934DxU36cSdk9apG5Q8pGVScbgQm9rp7RzfpYTtTrvjsbYKjcJRaBcsYg9BouR4UZrPe",
  "key28": "Vw4i2p78cZXrsvJWGJBroYEML2MaFBdQkx4UeFKFMXJd3g4Fdc6YumwQkVkboSxLG9L4i1TdXTzArEb653DEd18",
  "key29": "czCQJBFwhVXGwJEXM8Duen7qBkvuN8rFhYbyq682cd5WrA6rdMLHbgxKXPL4TDSyvBtCPPPtZWVrtcQdoZbHztY",
  "key30": "5H9feewEh2KKoSu2ZbBP4T8gQ6dEv3guFp6JTi8uJMjpYpKq63EeCtwyB7atxG3jXgK7UfiXfrpGomGmZCAaGXfa",
  "key31": "SzftR39kFMo3SJmrjW2BrmhUsqrNSSfuZr8w4YMsW8eZYyqqcu52LNtF3fGtETc9Tov36HMjgXVU8XhViXG2cEK",
  "key32": "2w3G55JYJPP1MTYXvy9wdHSEYQh2JAuh5qKRhMLgkG4mUJZCEJdALokxgFXrEV7kF3FAvVKjTzp2ZuFUfiNz4Lbu",
  "key33": "3h8z1sXERdtXs5BUd6SLi7AHV2NPiuzDRrFH3mAMfXhjbg35LMuvTUqPbAq8YuMCDL1BBrCupzGJjBgkkUtS59m",
  "key34": "3mFWRzC8DRiehhx8BAjjVoGtQvyEqUJB7md81JTh9xXSqqJwtBxmw6jFcLEE6W6FyXZhCeFm6RiD66XpwDds2726",
  "key35": "4MYn6XkAQDDc1LdxC4SfYTmA3WFXsKcH6WZnvnge4FXi1pPip8ZDYcMCPapEwvcicxAYhfHtXAcRiyabfck4vV2u",
  "key36": "2xY9bjbW7iNUpmpRso83WZxMdL63mL5KeXsmBZfkcSVted4uqFzaU5re69DayWiXAbpRj6X6x4o4YryAg3tioMsM"
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