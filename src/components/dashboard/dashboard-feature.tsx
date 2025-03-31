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
    "5TXHNSTmTcv9QZWFJLqVW78k9JQrPsmpeoYiqMGwHCvga7HkmLQw619t6DPQC5Uk9TPxedc8cNEmnq6tNX4hxXzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fRW3XCkuoRhJvVHBrxM9KcPXiSC8RifjcpLtodAQJsX5Q6E5B8X24WfEmGdfqAxGdJgabYEhw7xvFjuyayJ6EyM",
  "key1": "5KbtHRaSRWcxVsku7oQy3kG94Akdyzx2zQ9sCti8HUsTSjQGupWQQxNRdmLKP8n2TnwVNpDR1bUEjr4fMzHKg3J6",
  "key2": "4Q3EiKdES2AED5yGgegXRN2nATcr4ru3UcsbTiGLVpa82ysWek4uwmz4JbRtafaW7J7yiZPrqD1qbqZieo2PBDUT",
  "key3": "5tsJNu39Vp2J7oFkTYfqKnU8ZP4JfU7HDxd8n4iqStvsbogSRVDZXd5UhzgB6HHKjdBcaTRdhMHKXyt3E7GFuFyN",
  "key4": "5SS9NnpDg2V8EgeSw4coo5TVoKc5oUmURqxwhdmJNBZzaALDtwp1b5zCLGmK1ya783JBabnwubn1AfDKGajeYKxg",
  "key5": "3UrH8r15QhddL3UK2JxQtJsUYyHG9kBVm1gg9QsbjiJy2CzfMffoEJwDXjWJLWA5CHuphL9MEbEddvR1LkR4nCsk",
  "key6": "CbpVCgfjmCtkgn758eSjNF5gYorvrvoA1i9aeq6JQswF3azV4BLGgFJYYo1UoQbk3YYLnvwcJLhLFYc4GBcYvTV",
  "key7": "3k8auyr48yXBSRRjU829Z3ZMKBX4bAcpuBRSDMM68DgB8WjbMscZ8T3KYRtGESch2ALjHRHJvnLXmJvkyYuEpQcG",
  "key8": "5nMi87VphQQJj9myE9nvmEN8soBRTCc4chv3XvEm8FmEtHQjE8mFGLSNN6qQZ6SwNPNmWeKSciJbb8kL4PephSq7",
  "key9": "4ebjrpjX7LTA2m1Nn9MaUidA77URMyjEgCdbtTQb3gahzz3GFscsLeEesQsVCqoQXyQUhfGC5irpfs147raQfBLz",
  "key10": "466PAn1vdawY8hHt7AdjW4RtxVGQWNYqzfCYVAX9V4vBR1tauiS91HyD7G2SZn81JPr9JzCkMYYmPgRRhUcWLS1y",
  "key11": "4y6NG982R2ZdPJQFh3vwdDXYBmBKEVMwevGJbdgGyNEa5xfJZczcJoiEc5nrK5iPzKLTJaAYzFWPgt1r9Runxbaz",
  "key12": "VDodFp62sNzFwajNps7s5dWXTcpJxv5fuHrk1vmzaXHEXjRqPPJM9FvxpWUH4Yu9hgHUW7pvBeS3FoHXz69QyLL",
  "key13": "4ngoqv49Biq6zmJW16gXvCW4Be5tGetmyd9KSMYVxy1WjQFxLKeKC2bGFkeiCWkW6m2cprVaAtqJrhiLJ8CLpg1d",
  "key14": "7DaJ8XHUa1xMaBiNcZUkHkxC5hos7Avjms96nmbzAAAhdb8kwkuJHRjETegpPsaMBMnfKJkgNxw9k3LjMBS1c42",
  "key15": "2XQP88pq5hquyEBVEiAsbSpsbcggmevYoQW2pG6Lr2Cxty27ZzvqBEes2dVBbKBYPv9shKBbPTGLvyof58WE59oL",
  "key16": "4TKef7ry6EAQ59mbkn6w95xgwaVt7AGeU853Bp3QhCMdE44YC9oevMG1XjYrp7zxoLLPnMpjixuQKCdqXp4tgbXD",
  "key17": "3sMKsz5to4VLdJiE2z5paey3mwJgcQYTExxCukqHCjecbFMn2pCnF3HYaVa8ZbzjmTwGkuFrP1Q3EQMsCi4AnzHr",
  "key18": "3xSB6CQPhS1GYwmqu9udJPpvXDtEuQsj2RPKU8BtbPf7c7ZdRsMAkeF9zTqEELi4R5VJn2cYacxgrtR8yarAbQPK",
  "key19": "CUHopCHa9L86HXx7xmTpXPWujHdPRYtwHJgRJVBNdDjgW66S6dxGM7AxUr8BTVU3jg6Q8twanpwmFB3AdkUFZYa",
  "key20": "3J4YvPAubDd87rjGFUUspaLhiQSxFzjiJjiZ53r74G3QjFeT6M7YaA68GYJzqg4dhZ22VV29jyfAX5FiVP6AjJH2",
  "key21": "5oxKUCz3VwZQrPokd5CMh6ny97bUjBt4wrkW7iSrRLxQ7FGU5xnvbhB42RyB2S2KPfwJassuKzkKZuczqL7eoFjy",
  "key22": "5uncikw2rFyMSrsyCVtTPCA8CbqeW1pxKWGmTBbhfsKcw3CVdsHPHEnWXXjdvZ1GgZMLbEtHfVCWrAbFjV2r97cG",
  "key23": "ryhH4N1WWg3e7U4CKpSwJUnTFSSnDbjV7yU65HcbCYvG3rJ6cVQKZuoqddNLS734rmmLqhQ8dhHVsAem8UV5QJM",
  "key24": "2MCknPMgHxbUshogUPhpq6BerimVwL41KzgUfCQB3CpTsJ7GmEk37JqdJKuTFJ9EP8Xb2y5w2WMeyHxsG7DHLVD",
  "key25": "2socwVod8fCmUzkuM34sYD8y1JxmJhVJFKuGpyZTXYM8jGhwkfn319U6L4Ga5HehSc59hR5FRHA1LqLoYeB5GpJi",
  "key26": "75E5ZopZ7goXquRu4aHAyqGRf2vNqmcxF6E2u599r2UEcq8X9JayJWvT8nNkTybYodX6mnyRapvSkaiTPdZfcMy",
  "key27": "5E3PCAxvUzSX6AwUJxtRyFR17ybUF6rtNmumqz5W8DtsYtrHY9Nem4Q1jZU4QQ3Jfns8msit23oJRzjfStFjVPjB",
  "key28": "yEVGncxEwDWLug2datpBG9TCzkHiZV2GWPDz87hjXhuH5Nh3uQv86pB8NnTKejXqUSeF4PSqNtWFUJtVgmWAMoP"
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