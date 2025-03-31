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
    "3F5Go5wFPji9RUpP6QvNL9Ad11nExegfdJRFLqMyhX87DakcqV3PegX9muSoKoRLL9B4Jmr34QFCLR9ccVfSTtmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkiJPNrdQAvwYZyWpPaKQVho5j71wUBvBPeuYAgQccr4NBrnRnmj1MnNhvfn76FsVeaxBi3dDGPxKjm9mME5FWc",
  "key1": "4FWAu5LuGqZZ6ZZtprt9QwTdAdvTfGJLfprxZxh6wX72bApjB6NDsM9dWHDrRZU9r6wDggyNtURNJxj6p7GFKNi7",
  "key2": "2bw9PiTcWEwo7j6sejNttqptsW2bCGSDr1p9dxd4KqsEYGpFGwZ5gqhXYmxPGFFpsig4F3vy5kNZAUDMwKdEMxhp",
  "key3": "3P7KVbUZ2NywbRx8qVEPrYyfqPCBVDD3hn6CzvgfNyGWWZCiu85kteJhcAhzF7z2QTjAUgHT5ZKktCur5Lki2JV8",
  "key4": "vXUDL1gbUPQ9nkXetuxBbhoKp7irUwjCqf3VChttf2mFcpUmyMHzPvEJtmPa313Gu8VaGxa66PUhso3Gsy7UwVV",
  "key5": "548fzWm49kEL4KQ8cmEWrCNzKPhd1oP3PAAHMvS16hHz7HJaZLF2eWZyDccmsC9umRuTG9p3XE1Y1Q1N4iZK7yG8",
  "key6": "3pfFTVxumvSzajLe4QdqDwPpsMZJS7kpD5MiPDic7eJP3hdvT8Sxguk1KFs2MYLSJQDNixbFkKEFGYdn6wkqqWUD",
  "key7": "2LWC6iwAiFPnbS8ep8AZLYsn4VZB2U5tyftuFJ7G6Hd3StVGAMgir3FF9DMdzHdEgRvr8faZy2fsBY4txTHaaALX",
  "key8": "2Qh9TYpvM5ec95D5ms78pS9hWo4pdMPSs1HCrapfSTkMYmUN816V9co4MQRRDwHYXr2NvigvQ522bDZ44ad35ejU",
  "key9": "2gjykZnmUzsSC7fuzWGxzmeud7gEcjF11JDFH7zrkUsceGAKxJtKcT5QQ6bfV5nvBMBHqYvFTmVSuKwXLrBhwdwN",
  "key10": "4SDfkg1pKGNMgxUG2bBd7vfiFAmMsE7YpXDEpJQygmDtVW8k8qbrXJ2GqgWSTZApZhjvHyop7muPCCYg6ahimPnd",
  "key11": "Qb8LqvvZVwTJnmaoU81szbZZuGady91AukUcGXhskyW7rnYes3Qc6eUGuUEo7ReFKugJVbdBo26xBfJoQEkdkPx",
  "key12": "97f5xSa7yC3PEEzog4ohB82VK4CYFf6hH8Dy7M9ZwtkfEAR2q6p5RTc1Lz9dHr6gtSpk6iNW7H45EcZqdfvxo4d",
  "key13": "zaWg3ZUXUXVAxYhDcQfK4AwDJYgfCCStzY5hye21nMVTiGzyw4pcUyshGRNaBtPVJXecv4k4tY8bKYmeme66JLT",
  "key14": "5LzraubN385UNXpWpYSJecozaPXZeHEWGxpEZag3rAE6j4NLbXu1dpxvQvQ47E6mPeGCCRPY4nzpZR7xbcWJ2e6L",
  "key15": "3BLUHButynGsrvgJhkTdu3hHsybPqLj7nbocPrYNaRu71C4WyGZFvE2nRYN6dZx84T2HbpNrU1ucHvmrC5NatLF4",
  "key16": "3YSA7HLrvp8z85vmJfFrNmfsdHrvZgKqkbWGyZqGDNwcvwzHVYTiM48V7hXSwSAMe8XATCuCh46WZyu35AHqmQg",
  "key17": "3bnEJ9A6uJnBe3VrAkkMURDwWKFmMMgoPEy2SyChmmhaH8eoHKSQijxokVrCu7VKwaqm1568SSwi66JHJkKp6HfL",
  "key18": "J7V1rSYhwEux6iWGpUyMBfvdnrtSTitzoKJ5TWnzLq3cnLWWPnouiWmBfQivA2oPqGaajN1YJLjhfvFnPhG9d6P",
  "key19": "3vb8d8bSUSiUPuBREjDmwuyzm9bWg2WABeEMH5QWbjj1ixz183L5wP6UCvHg3TbDspdxE7PLqBLzxSkkMDzMyZNT",
  "key20": "4uPnyLQHwyKwY7r8Zt6d9Qip3BenaF7VmfL8fpAikr2A2hXJeLwUzRJyeih3HTkZ9fQuCv84oYoYTpxBCY3RAgCZ",
  "key21": "Bb2FPXLno7ypQ73BP2wsL4Z7TopjZn4vVbzKBRcFXBHXD9PUvc6oFxSfXx8ssY7Qio8Jamdk2j75PAD9VnbE8e9",
  "key22": "3MjEnxXYtdVFJ6d4G9mThULWExyrUdR5FNjAoo7UT1iRE8yWZkG1HBZznn1h6VHL7MTHiB3cNkoHsoBL3TZkFj4a",
  "key23": "3VAqeWHgqR6FaMDeuaKBZKkaog4LkZoZZg4nYpkojyPsrDYRZbtLLW6iRuWT7Ua5nBMpjAvmka56sngzrxifpzTz",
  "key24": "Nwhb8jny5TncWBRAB16fsxzbT9vk6uE9HovHzuL2YTMRZBU9nr3jTEuZpbgBRCTgxYBS9W54qGVhiG8WRg9tPU1",
  "key25": "5BwuLqnoYU7zeJe8NZbvpGJQ98XR7VvKzrQeGLUuwzyGPd78eYnZRMM2meU1LVUX6rixHEUJ2dRS8W5ZU1SK4sbM",
  "key26": "Js7f4bExRhrzJFEVDUKYPRruhYfpRSLt4cqgaxmjbUfVfQxP5xe3iTJVogykS8W8arkaChkkNgdN51GpBYg7SVN",
  "key27": "4VV6muDMBZcC8Wy4nq4JPgpnP1NJs5WbzqbMKCet9kDJvQXrev9iYLJJ8nV2s4GgAtphaJxiEtoQssmeuGT9Wsbt",
  "key28": "2Y3dvehxBaJ4EupKb7tkEndNvf1zbpT4WdTQ9k7LxiDTa3n5Rr22KgLtML9tcFe2NaDUihGFhCwcYLtdqPbNKxG7",
  "key29": "4tZAGqbQK9rdbVUGqsgodvEfE935tSGZWVbED9hnbJwG2Vf8aPzsmSyHSFnRVeBfz89sk6i9iyV66zkUGLxmUcNN",
  "key30": "4WTUwP3ucGcEkDvhtfb8PZGoKGHsCchGR191E34Gzn9rLYTuykHiurtdgqV7Kmj8V3tFtExmfFktFYquy2PgN66f",
  "key31": "4GcP3LEhFnqazcXWC4cA2XreNyPnwLTdmqMM6rPCBhG27HkeytvLeBYhFkjtZUtKu6ksAPXmtRGaPZN13uFfejpV",
  "key32": "5pspxFqfmb9VyHYtnS6n2SS8sRGkmM2j9WdMt82kcUMwiJ1LUzLNgbMpM1vYi7DCX84eohUDYpqQzAFHRNZjr95V",
  "key33": "41PVBDj7ErrKPijPR42aqUi4hJiP1XvKUFBp3Y99DALRwjYMJERBCZEzK5iET5JZ2Rpe2AWECaJEHdkVWgADysMb",
  "key34": "3WBBJ6NtRhgSiegADL4pVqcf2Rf4r4rz5T5vvFWjeFgWJYRtguim454sKnLrWJGQwZq4NZtUXjiz22Ls2z31BUrs",
  "key35": "39HLxhaQpDMBTA2ym41MfCGR7QCvSTTGwTV6YARrFmJia5eAQmWFzoEfTBeqtYZJiF7k3VwpxtrFWqT2Mn2uibxK",
  "key36": "3eDaiRH5GWJZyDa7nEpyhGraZqNCPrFiQMj83JknBarahY4DxNTUVVMdh1rXvweidaR5EqhDcT5rUs3e51sZoHHK",
  "key37": "2DCnSUCWypRxX6JoyB4Wzt19eTQS1VzmmRt1GsqAMne8b7KFQdAUj1SntAE6WmpuVRLcsUgXvmKq2EL83tKKQLhB"
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