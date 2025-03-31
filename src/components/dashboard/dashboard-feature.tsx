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
    "2QdFxM9iHvUG8Xm6acX3y3fopow9gRD6Te2UBd6k9ZuqVGvi7efj7fEY3Fd7BYW4LpuEuaexaLoZyLKjmEsZ8k1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xtazkTdEfk3GYVBBcQWJRPhjDXWUtZMKchUUvHaKnya4NHYMrUELve4jB7uksNxXRTAbpynFVwsTwK2gvQnqsg",
  "key1": "66cUFLjodik688UembcCc7nEfMJBkcRRCBGQkJFfperCrAccAVD1R2YmHYTbe85da2oFcRgdiJa86QAno3vEabkc",
  "key2": "4Ga9aABq2BsJzdTmEUDzKQfPs7LZa771LSBa4w37sbAtCvwT6ALKYywHeMihyV2P58QikkHtJGDozSzLbG6YVgVj",
  "key3": "2Tg5Eu5xrxq4qRgCSvd4JZCEy9vP1nJGqZAdn2915rHqAEP2ZUDBAfJixYN6aTzbGRurKj3KtwhGkd3L8p6RpSt6",
  "key4": "5CUUQzBQaR2ZCrjygeoxQnYjZvnV4xiL1wBqZTpzqoYS7qHsFq7mrcZ4FjnRzvbFA2m7yByxEWRMzHPQHSM4RV6",
  "key5": "4sUQbd2xMMsPX4RxMHKZVuMZvTZKvgFDuCHvgngTy6ycZzLPw5TCpyJCmRKrcETPCYQMwJHubmLTekna7zWpc5nt",
  "key6": "3Ed9Xs2gdX8cK2qsNANRFMXpAvBosN6fFMQsdRMi8amNJudQjdP1UF693ahffgWpj1wMoxa9JQiQAWPRbTCSsL3u",
  "key7": "2nmw4uYmZfq5JdP9QDQBFsigLGift7xtm1HaV5sFXFCbyK4stM4rG9qXhijdkTGtfpA8x69z6Lw1kGQ5AwxBBS4d",
  "key8": "45RVb7ytiUdczvStJzQQEMifzkxCaWeruj8eipKVWu5wZDJMZ4Au67mScSgcrRKJpCqUkteB8oz5LLa3vPgAE9QC",
  "key9": "25sQWBfGG4pmg86b64LED1L2VXJgqknmyfMvCedsXenua5gU6c4KFBjipNydpeMVRkbPRxsy5TQqpQ6U7Yjb8tSW",
  "key10": "uZ94VBb3E5YKp2qaghAxk9p8kxaRhDFVZ4v5BbjenTP3u1g8RsnnxHZLnAmyYT4SJLehtCw7Po8GonKg7maCJGi",
  "key11": "4Dp9FiP4ye9wqP6nnhfzPZvAo8VpRnAjiafMGzNxiTjQW2MzyyvRuUtJWxcopsVaXbti2u78QmZMZccSCoxtB8XF",
  "key12": "4HiqyfUryzCz7grcFtzYTyLCwYBMKWrAtctTvEQefqrs47tAQwNAuXpGuTsz41nJPWWh441ZRj3ZAJy91WJoVxvK",
  "key13": "2GzBPLQGgHNb5NL9GUN5Xe72eUxFWfjss9pPjG6g1XKQDBSTyBoU3xs1frMpZcwYa4XvFMBYhfptEKNmqZcQiYJJ",
  "key14": "2wm9ppnvoniZ1UjezSKvQ7KzVomVyxKE3R24eQ5Gd5nWeSH47twCzp6r6HvLgran7hhejTvErXaXj7neAyi1mHds",
  "key15": "5AQqAUpsVyspZBvhKMcdXLVFLaoii9CVGdTNGovsmsRxg6VbnxvwUo1PE6gpMNqfpt5DcMGXnrHsGbrHxxU9WXRw",
  "key16": "3sHXc1DwvNuo1rtycbP989bqBueJRfSuJ76BLq4KtWqiWsKiX3WLxtA4Ani9epF78rbGsko3MmzFWtQvMKZJFbZL",
  "key17": "hbTshzuZrb5m96qUQkGrT9iRLB6VNeNQYskvdzQmh4ZqecRA1Y6zzEU8WT95TMPBnV17zduviBc25A6AY7MZPkq",
  "key18": "4qTYrEkUrMjKwPZVHGX8tZP2m37uD2BpfHwDFyX73GaDjWBdrmmcWz2K9mkBpLVJ8jgiFDTXuu8XhQUS9oYc5KAH",
  "key19": "3nN88CAa6zYFGrrkDbiKVSfdBB5jZXUCjDfj8agntmMM37Xj4qCSA7g61zDKX3AbVX5fjexoYewiyCR79omTKmzs",
  "key20": "418DCTbzyb5Z9Ka3Cy5kZdwcqj88gWnEaUZNa8yVbxqQLM6eWvF3rmnaGhRpm1p3xcuA5EMpgmzPcLAVX1pZJdPD",
  "key21": "NoqBMpVhWdbaDf6114pLw2jmN9BuqVZcWcR6bRRXee5PGW1eSvjsMQrmrwRZGX4bc3AWjDytxoraevcYfUrx4JP",
  "key22": "2mEqu3R7L2heEc68pjrJLPRE8jikbNeQ8ibSuteqa9rxy5khu58JwBGaF4QHRQeaddtX3XBShKbijXzCNnFcQkyy",
  "key23": "3nzj2WWKm62vo37CGUnd6QJjzxMyZxnnYq6FHmZrATvFJgWLfEYhAu7VPrphqL71VffRGN1rXRkGEfiUYY3Ktp35",
  "key24": "3mbv82SDwujpCcMdCKa9iCuCNWXzZ2kFPruT7rSt3GYuC8tJjCWPT9EjKJyLfSL85DrmTepW6YU2g6UdE151Dbe1",
  "key25": "2GQJeBSSEcp6YyGAGyRnPN5YbE9kgEJY2eDNscLBav2KbZQr5WucKA73Jaq48joYSj9uZjoVcun5CmCES2J4swTZ",
  "key26": "FxhmpyV6tiuBMu82mtaf3HfUGd2nskgsFndwnTKPubQcLbyixFf1CQCVFebfGQRNyhV9v3AkJtvZi2K2FANzute",
  "key27": "5EHJb3PadmuSAZiDubG5vxSQBd25Z2ZWbxzNihDNkeeXgw96zBGQP7gVH5c3dknw4En9gF7UffWaWeKq3HeZ1BWt",
  "key28": "4kKjyGu8z2jzBHZ97HWNGuxJckrQamFCGz4LY7dMJP6772H2PKfPmQ1V45wFLfcMyrTK7wa6HRzDRScJ3XGXj8bR",
  "key29": "v7oEGnKPxWtuWeivbDcEMSFbJMfXAKxmH5m5854D3w8f4yzc7Y9726C8BggBTj41W7kPU5BchKuGAcbTQPfUiPN",
  "key30": "4gZm2obvK4SMYhdiZ8teii9YiLyd53dQcvzZ1U7zNM82ybGtLniNw6G5Tv2H3fQ8pKgcSr1Dbjd5fdRX5zKjHeh8",
  "key31": "5yZNVUa3WaB2Fxh3ZRbsUjP7yXeq7jwRGHD9pfT57vU1brvQgu5K2no72evr1AJL8G8Cv1BiEZdouYiYUgY8hJE9",
  "key32": "5sL7ZJktgm98nbCu8z4ZjGyzjhzNuZn4gvXtdbRJbWCsatHRuRstrwRupS9QPbcvb8p1ErweiVGYtSqpnK5BaapY",
  "key33": "3ZkmALUCug5EcmfexcfDm1MzCgY66hqiWNhUvUGmjdQ5enQQpSeemqbdcMJESQ3PshtqXaPYGsSkqp2SnV329qM8",
  "key34": "nuDwGZTDaMwFbZg7arqC5bn3ar96JjbswerHfZAKNN2dcMbuwd2P2kwFvWiJcz6CWcKck2PymYoCKC1dVp5LPbY",
  "key35": "BnZN7iytdf3Wihj6NquGTFisod5FwCEs9wJkHFHJkpazL8e2o5be7tYa4NxEmnkARSaxtnQpXtZH5BbmnBvWrJp",
  "key36": "4ydrP1L3m3iPwZRjunLw2ck6GhSYszukuUCDkTPM5fZuUJ6wUTktt4A3hSbZNXK2XDzZYG9EagPrHVhe4NKkmxZo"
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