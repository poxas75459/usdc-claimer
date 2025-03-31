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
    "4sjWggmqpBzL7wVY6MnaCPMjPUBPKJ9X4XHcT1dDFC86BonD7wQKtzspN8A27SdaJQDBTCMaGJBj8yCFtSD2cd4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPrphnFJMGwG5cs8hy3fFD87FKqcA7ieSfTprtYPxjQjrBg2csmyLuv4km3WFpUFm3HhkBcdkLb6MS7FkkZTkeE",
  "key1": "2zGLFFUMApcC7niEw3PSCkDXdEwf9vKrQhSkQ554QHNBonDAN5mECoVbL9jEbaCgdfUos7KjCG4yBaZQSinesQP2",
  "key2": "21jKbhCqY2VAnvpYM8PFTsbMzjYgATq97z48xxUyKfzmWsPCuL2DhkhpX2jqHa1Mpa7JLtxoYb61fcunrmq7P1c1",
  "key3": "42Ginwkq6okUtZfV4LSe8R5gPDtD2qkMC4Pm24oBZMN4esmJyLyaXBxWbvYCBCbdBiAcUGCaqN1XhhPkPc93tk91",
  "key4": "5wRgfaNAqKdxFx5H4X83JLqk3vpAM8AkWbtupR4Jb2aLJY7vYT9rVmHkNHYbVH5Y23SFYpuh4U6GUZyCYJDq4Ww4",
  "key5": "2oiGAkgtxqB9zCoCEcgntwnsAoteaJRmAeMfkW8rzBU8vGUX1WQR34EsXjix4ZNaiLXFDiEXnFTtdUbwTdrHAf4A",
  "key6": "2E5GhctiY7mw3BWbRax947dqDEsC5E4ygsBCbRUg1tujKS7rMUcGhw6xUSCmY993CwGP1zj199Ehv7WwSpxcbTDv",
  "key7": "9K7w7SP8b9XbygckqJGHZBdDJEdUGjtnTn92GxoTHg2amQpA4p2su8JcqJ9Bmj6ZfMtnSoTV4RBrmVnLnu4Agqv",
  "key8": "5KgRrj3TC4V1Rh12ZPNhnsPg39kg8uGCXMxqVSxCqKXUz3h2zeiMCfsaZj1ddzdZ2f6rorsFQ8fsrrKka6PyswvQ",
  "key9": "4tp1TxbtMiDsnr9CLj1VB4P6dnraguXxfHa9YLWPcigT51KAgFAr8NByHnWvzsTDUvM5sgg4yXnbvBBbtzz1j93x",
  "key10": "3s4p9BMBMqtJHQvxSPngTVCP2G8x8yN6DCK6RyxFtS6vum3p4KbvZkUpXP95mY5qTuKYsm8W3hkwHwDX1tnMiT2w",
  "key11": "dAttpeyFN3wmWm1AuKLjfoKvAKcEZ2HGB8rJfy5JAB97LjDdNJu3fwrP4asYj5e5gCRsqMTztw7tQ9j9pu6QYbs",
  "key12": "2m6w11CGX1ckQMrQr4M3fbwRWV3L3j2gQg2EP4WxkUE4hsNQtAEW7srpn5djFYgg9upo52iAUk6WuisrLNfuCuwj",
  "key13": "2HmaMPWoJTiJgVGvGTM4YqBmwXJqzBonaTLpGXiKt8ygh3DSKBkjLHXLrCJcwQTvQCwDyVfF3DJqvMBuRS8L3vRN",
  "key14": "4AiED6ZWkzxiKzvrbT5PEpf47Rpbjajkpfgr2oM1TS7rvsSbVPLPefyGjVH6k995EisUpEPZEaSXVtBFHDqXgyDc",
  "key15": "1KuHb1RCHMMEEJ4wi6uGHokxHnNLHpNNtMS6EEyYduixrYHALWfpLZEAfRinHWvx1qcwuoaGZCPnkAj1E9dTGgr",
  "key16": "E8jkW6JNbKvgj78QtN8W5SZGAdtJEiHmj2gqM5iokpJG2JcMTRVGVd4V59J62FAYBNagt39incDQs2hVPFvUx5n",
  "key17": "34WGQHC5XLQiDwxZH55ahgVFUxDqT8gG5ki5tWmn3gyHdb32Dkfbm7G1nG5dvteG6BSavA5ZqSRRh4kF4uhcH1Zx",
  "key18": "2yh7HY3ayMMD63fbYDd7ZDMGzsngQ9bBBBg48RpZj8fmQtKmWgFmuxnsJKWCizmRaZW9DCH7sGztQiq63mBotMe",
  "key19": "a8yA3wdq8t1wUiy1fLEHYEy5hy1gXSGDXkf9j25xbqNgxQnQcZsMwYmauJsTLP8eUbLKmjgTkbEsmMhPBJX7aTQ",
  "key20": "2iUJgkD74exUs4JhY6NJ9LsWxfsUBxH8SYH98c7hzWzjUUBuCSrLVwToe2ok9NKvZYmG8SmC1ScwZRaN5GeZLzbb",
  "key21": "3crHE7xSmZqy73iM9b9cAD36b4ftXyuiacJMTJWafghsJpp46ErhJsAbE8bEiavKMTpAWoy4ssbhKBeywbxMgDMs",
  "key22": "64Ph5uQjpX2gHjnq2h7MSrHrV39UjJvV973dVFiJovJgNCJisV6BD91dA5XGK79t7KeCzXtR8ufscKVHScP39WmG",
  "key23": "2cFpxfbVf84ALhkDnu9SL7eTJQsLEwWw7ABsGeWwMD31ma9WJQnghTj78Pjk39aFbTd1eBpwxQQHxwqznwGprUM4",
  "key24": "21bbe1C3gXVnn16wSjP4qHy5ZCTctvZGVK5c3jcxEKtVmaZ8Q6rzi8sUoDWgXxb28rq9eyXSZpPM4s8iE2uAW1CJ",
  "key25": "4cuzR7KJwb7H7AWEkj67GL6EWvg8JFJd2E1pgsGGs2byiZYrH4Yta2C2MZ9uLQZBawzeXwHLNQ3XX5o9chFE3hby",
  "key26": "3Ta4vAxHKNFiXJPkRjLfHH88sdS4ZYQ3m4HQEKkV6CzEfYqUXYNCLA2g9EGoJ1iTCsyvvDRV6tHVyGEVXCiYWDRi",
  "key27": "2ZV437WwzjHPCzCN3c3Gj5s9obnzw7f1FRfZwiWLbFrpJNeC7zwVGf9nCxK9nz2DpeJ1rDYitKDoLkuL8rDhdVZ7",
  "key28": "2QPTW26jKkTtaaukGJaAGRQ9R2MEcN2xhq4F4gucecpZEDp68TA3pGWwSPqodZBdjwVpPygB5W2LXPzTzPLXbq4K"
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