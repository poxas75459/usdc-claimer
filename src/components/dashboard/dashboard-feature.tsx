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
    "4uWV6GfCPbGDMP69FgXCzFJ5jBhxwX6f9NorymEuUicUVRoPSZugAyo5F5AngmAwQrWBUoQgUdtmVsDb4mFbyG5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUCSwYFfAT6SmYxgPRq3Dp9TsUPkmvUwcEzpX6GmtDiDjku8yuzyRrKfKk71fCCm58AUbzv6Htd3VRop7mqeZEx",
  "key1": "MDQQpi5nDTXkuiQR4w7p9iZmMPwt9qsR66jzH7nPhyN9VV3FuAjLS1Er6ZWf3WsZhKHKRPcwuY6DZnKc4ZogL8x",
  "key2": "4XDt7gKcELXKWne4Nn5p8nTkTJTWQP6XpK5qe8fXYjAqzBewMRjqjmznmeJWGZjWPe26opF8Co7UiW17qWPCfupe",
  "key3": "5HoxPXEDzTwtnF5rVbYLYPgXD6DDRo1BTQowt1PMezSFErddq685Gor3wt8Ci2hhZLZutiPNqAEMfZbFJDN58bqF",
  "key4": "35AXRK9CMzJx4WJP3zydWTMDYTzuSUHCaE87tDMkWvdPG1psktihf2zCpe9mxm9bHSJzyYpwKbkFwPaL2VSG6Xsm",
  "key5": "5eTKYhB9sEhAFNqzoqwhGW6S3e9pDVTzkhCxfr5uGjcav8G1MnSRDohwpJJgem3uCsiHqA6LiFtvSDA4m6RtugaG",
  "key6": "8q8x5Vqat5V42KPppXTfjc9SGyBcprXogkrzNGE4P2JJV299sLKt2sKf3UaceRpi9czftPrjhYtTJ2c1x5VTe2h",
  "key7": "ehd3Y2cr7zvquJQbGBxsW8F8ufT1qfAJqrB6FE6BU1DBvfFGreFexdW2kiZiC1xSBWvdfVF7wPKALq9LLwhPSHf",
  "key8": "3aVPPkEVtxphSgxWMR3o1z7sFGN2ibAViigcLhvYUaaNoZrT5H3rnDrEEZkvjqPH9MJtQWa9tzp6PDoykc1xDgnW",
  "key9": "5rLGyRKmuEDn7MU3UxwFnBXGzJsRkjMKmTPvkgP5uscGoZPC4GgR5uNkXngDJwTPM2PnJ1DA9kDGJjBFzy5AWfjr",
  "key10": "2d7RXbebV9xsa4PP9C9rJ6A6PrWKxFcgG8TzFiwmfcNJqtf4ii3SVuCCLxu6zmW5iWfbsKzQZFdpZHAmtiuJBkAw",
  "key11": "5drVASMbDweyyuru1qUuAFb7ZbXpA4HuFGu5149yFSmoJc6ejFhswMeuvVTyvJZUMZHGrQqcPU3LZveSNeHCASoQ",
  "key12": "4YJzofD7PWX4VWPdWUhoZNkB5PmfZ787MoySXQt6p7hF8okthu8vyRHY26ndn3PK94UxxB7Xp14hPB2S2tzLS1Ac",
  "key13": "xEQfWbMpTugrdECvrpA9uGLDjzNgv6HfoniGnTD1tFwdfrgLTFbJSQsX977PtWH9dsiY5Ku94MmpHsoK1nzXC97",
  "key14": "4QriM4kKb5ShYFL3G7ApM1UyXmacSvQSyen5wPjYSisx7D45rF6JP5SJzGakh433UNhqW1cbkSG2fo13DWbZKA29",
  "key15": "5fxvH7MCfxVdZpLHfJ6vG6o1X2B9adyHNzjsi3dKuMvyJqu4swB67BqLPErhSJWc4qkVgD4NCWjzD7jiTvdTE1xV",
  "key16": "51wQLSpT4SWyPMX86s75GHrmgmhqffnzRoJhuyVsYES8HnMLvBt6sXC7uEKraMYijKKcRz2oTNuBAzMWDfCjxJTY",
  "key17": "3tKL5reNtFwoaHgAeD382V7PBXt9ccVzf8sL1g7dWDR7eveEGVdHtfBGBSRYFMH8njUuHcWNxbwSHyEbBttiCQR2",
  "key18": "3mv5EC78APar4CrBK3hZ5gPKDjtap4yMiVGwmMcX2e74S9mpTS2RC9SVdrTfiD5bQCbju6pnx2aEkEMYowgfYegU",
  "key19": "5dS7zkaVyi6PyULiwmJTARK3hBFUjUzyaoy1ZWM3gNYya4LVy5AVJur3TrWXh5Kz2qkMfMQoU9n9nb9Cyf5b4Qjc",
  "key20": "s9D4eGqM5rKvTG3MYNWoemodAdv2rEd8f49Y5oniaaTnQPEQtrKjzSLsGBrUf8zGZFhdGt8449uXqwQ4UUFPjhC",
  "key21": "3tfQSUEBUjmoBoRyHij2XFo8Pp5KmQCpCZHWh3B1HNJWrnTS5zEQvB2n5kTp5r6b3yXTWiUiRBhPXgveFTPWWrcx",
  "key22": "4rAsDR33TeYDTPHWzvPM5YwMFG6G1u6GN2XpDgBxvD9S8PQfTCj3kDxtati3hfXswCoNjjSj8WVs397v5iPhPqHn",
  "key23": "Ct6pUe6PeKPkcsxDfpKM7TEByYaS8w9SYjVucAY17GhmkQPXPriAscALsWGvozrMch2KVBUAuVDawz4WM3wY96A",
  "key24": "4vNjiwcCCM3gg1kDbpgoGw9QufYbQ22xTe57aVZZWs6SvrBBaZrp3nSR83a7v4G7Mqj2pSf5VsUmcyL2skZJGEMj",
  "key25": "3Unc8hDuVY1uqx2naspoTirmATLjDCsbyqTFrcWtM3L5DwD8SMnWN4QXGoA3AhrMCcm6SNxfoe7Bc3XaettcWE4Q",
  "key26": "4YwLacT2o2ckMe59WGNkVjwUNDmkNC95WWzsXapZGSZzNYwuDhPQyxm8QsdTSQsLVjXnP9kT6fDtG1roPWPpDwub",
  "key27": "5cFEgPSVKEpDQEJk4yqhQnv1hMiNzw7HjoES9yfxWzv7i2ZdfhaXBhgHvWoGnn39s4gNbDKpuvea2TFsz5X1FnQ9",
  "key28": "4UJsD3wHeMbwMFxnkxuxnUAMuoeGLPnfPBKqYFK4zeroGW4A5ZtaRqv92qVXyr3NfBtFU71Psekp3qDJyPv3CXCa",
  "key29": "EEaYPBPZoDAoPLhsSftEAYoHTiCoPRBRD7tKKSdGT3ogh9fwY4NpQht8vkmyDjgkeYCCgovC17yEgVzALUCpC1N",
  "key30": "23cTiCeT5exTitNvEctpgFxVtG3NnzUxSbuQmLZYaoGrxrvzj8kMKvhDKY6TxAA9qpgS6s3nE9mLiMpPjUUDJxGx",
  "key31": "22r7fCeLSfXfCzYVRcFgPJEAjJLtL8X5VB3vYVRu52YHg8tMefXyhDHqaKzG6XtAzAhprMeGts82J6JjNAaGGyeq",
  "key32": "2BNUi8vBbsGkvJsKnR2XEFRyZscQgWStqdoEM7KHjxVZW924gSqZtRMrZRq9FmfHx3YPHZ5X7frsigtpJF8C28my",
  "key33": "4NFWarquKshE2oGa2RRVsSa4BBYHVB1SSjbradmyK7JfKYmKv5zR9sQENh82gFMaAPnntiatmHLqgorEZ3uxX1B",
  "key34": "5XuCpyB3KCL8nYWgHBQMyrqvBRsYwrmcN96VMwZSQE6UQ3x6QayxjwKQJV3uENuv56yHtRy8rjbqagVpTo85JQbf",
  "key35": "612fJqnexxD87x4tBYS6QDCk8QR7pD8oXCwBqFxFW9JbUJDq96CLSLK1pVVFBJppdT61GxAXCsu1r5ZmQvTUuXPD",
  "key36": "2HtCQTjX8UomX88KoRboip5DZ4bVVJ9qtoFWU8WxXaPrrm3qoByesTyLnBquJAHhcGYHDxXqcJzhyLAZtazEWUBu",
  "key37": "2pwPeJLUJf5rs865ZHb88YBe1rfggBUm93ZgtzZJKG6kFvpMQpSK8VmMKcHEgwVFzcTBpKF1dryRKkMSGKWe4NhV",
  "key38": "289zqsZbRLh3YRf6xePgBSZe8frvZhYUtB8CDPrSGHp7EDSmMx1WLRvHsxzDQNP5b9Wry5VsSHyg1yfVLe75fTMs",
  "key39": "3qdvaJjyTkfmgh7v1GPrLBXNSCTz9jcmEppj8qoBAe6Z9Doe772rmCxSkdkaSk6JhE2P8utfTuBQ64uHBR57DA6Q",
  "key40": "4z3nUHoLudNXRCqwGbTbD25xgqkad6VSBHN2Hw7qaQ7vZ96Dm5rdoK6n6MHFfX1Pb8XcYSd3kG5TMV3wsM2f9zZu",
  "key41": "4KM3TebXNsZJ2qreQZS2oBKa2xWGwfkz1Z96aWftH2BV4euwSmAVwbRKb9kYsmTWWriYX9pDBXuREndhu9soNded"
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