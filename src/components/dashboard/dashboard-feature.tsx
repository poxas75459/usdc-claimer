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
    "2seUVaX1Zmkvzzid7m2nfH432UvUBKW38QBuG6QoDUw3225bFK65ZnPaq7jmWJfokuxghMg8EwHMqWQV18a8YUjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKf2c4KmyougxUFMfkRVgRcxnGerAbmcKBPcFEWfA3HnzVBG1Fsu2aPnqggfbMEP4F3eULBweBwsUAVYY8Gm3t5",
  "key1": "4AChFViJzrUWmq1SDaxVe9kUPr4hN65HeYYrtKDUzZTN4hpsvSknnGpsi8cQ9k32YEJHt237qCnxSSfQ88JdU8Z9",
  "key2": "4d9WPrRAioGKChFbL8tBrhWWwmdAnRcXBdzUHexwWHPVgQoXuGGnr3gDakwBDMidz5KmtqDfoeqHnqKGFV29nqfq",
  "key3": "4Cucz7f6KZ88Bi1ERqLtQpbwrhFRJGLvh6D1ZSzQ2bBsiBys2X6uKVX8MbmJW7oKx4RF57bopYbY2cKey3MwsSSS",
  "key4": "4GkEULBxLUNcGoabnSEZfHeTzjzf93Q5yHTBFhuwjto4NCP7pwio2irnNYQwAUPFNhPWUv2B68v5b45Jp6jqDjSn",
  "key5": "5MhfiPLbfqTjUXTdtTGnBekPBPU5L5JnFnkvV5JWCnjJVoeRGPjHW7NNsk3BaomZMHwQpajA3543837SYwdetKNp",
  "key6": "4gBbcYhtHJnqNhHUJj2jD3y8zCMfRXnrVYkDzkATFL2FCJtGMueKBKV2Af1NKLsc8iLwFUJjw1miCmJbTiCmnxyw",
  "key7": "2qpE29yvZtmGhW8cRkTkmUFVzkRHMyvVR9kdw6VPpR5vMudVvaGGQHnfFnT1qMyrpm4wqT7Ya8GuZhRCdXLxetfb",
  "key8": "55yVSnr1h7iV1kdXR8az7vvYcdstwM9DnD9R8PY4mrhppEbee9hPKBT1cat9NxqguQHDJM3mJdcjyjbY5V8bmsXv",
  "key9": "2v5ZHRUukEcZUekNXCuFcaEg6J6RYMhdJy5AJowijrN6Fsi423AmrQkAbF73cswkhFY7rJkEECzWv8sk3gW4D1Tk",
  "key10": "4ZVYfLpEqBwkjTYGPmvBZE3TL3CfsyPW3nc1GaJtbiPBmajGQ7bcb39wLFhSfZ8r1eVNgKms6RtKRWjzagr33N94",
  "key11": "Ypear1pQa4DcWdebDjbmicBxWWp4a9e3cnAeCrYgPQYpVTUTe2pJuT4CkygCdbkVdfRYiHSw1dr5A3njoaAYbSy",
  "key12": "25wsZCrRCkTMbeeBpb5e5vVM8F8ueovKM6Ddadw5y7FpUwBVbHr4TvVrEUyiR1XYe2vH45oHofjP1gK4eFVXFpbr",
  "key13": "4UqiCdd58vDPgRHYZPDBY7PQNRLX1ZfXmBnjZCpNeRP4XkDhLkqTS7SptnRdQHVxsnc71QFDFYMrUAU752JoJDcu",
  "key14": "3CacsoYzVxZgW1wieoY4ein2iopqGsRxg3gFHW6EnzPNwUp8kV3WTToHBA94oTCRFfQ2jFxtKx7cYnjc8af1uadK",
  "key15": "3zXf4Ko7pcfnJsiXvqzGQ778xEmW2URBriQ8xTNFk52Hv4SWurSMQ4V3YaYTZcd8wrraKjexctFTDAUDSMpLC52f",
  "key16": "4oe1a6fSo5dBNJGqnvjUtdwfMfeTuRSZGcoc44KCYMY4DdBsNh1bwKTjnop5jqs5Ni71h2EhfaPr6GiuSrfKDdzr",
  "key17": "N9jXPN3WJCFjhju5Qq7fLEDfQT5fFxp5eKwwV1NHi4J5j5RB5eKEQhejMr2cngXTxknHXLXJ7f4R26zcXHh4Df7",
  "key18": "5Wg7agBde1DJL6c5pM6uMNM7MoHxS8L5ACzvmoAtzs9hUki4iCEmBR7S1TX3MwEprGFJ9PKp9HRtehnXm325jSVz",
  "key19": "4FGs9T8GEnfR63GyzTHFGBGekMmAN24sTrHG3EvLsGpuFBKDjidARQ4fJUGR7rNHy8PXXFu1TtVZ1dgyNXJNsot4",
  "key20": "3QP6Tkn3AFUjfQcGRx8AAUffcfWhkK8P8ogcDfD5dAkutb8g7qmnhRU9nQi6g1zyLLmZXR6HJL3VBTfoQu7yJ25F",
  "key21": "zgCrzEUELZMKgisTxXNhGFxvcYvkHfWXApikCjQwM9xgT2ypw6gDH9saEmHVSnS3Vaa7ySkHGs5tpaJn1RHfX83",
  "key22": "2edqnsNNkQYGbLLAzijtEkM7ApSm9wH1pyFNxVgU8bym7mMSbxrdppcnV7fVVuaiakyWZURadmn1SSxFFYQJPnSX",
  "key23": "5rtQ92LgXCihbr8FsLTuM839duRNihDqFurp5bBMc6MxdxxbDsyJxFhoESaGZBTvGBkG7YLX3iSWRi3sQdUQedWX",
  "key24": "3FoJcJ1pxZkg4Huti9gbbkXmZu7V2VXNFxL7TFrZC9bfjJAn2aAYENGUaKGwWAjHPFim2gvh74q8nbnypzuww6zD",
  "key25": "62MJygsWmhxkz4qWq5CgBqFjtY6wRButApi7g3WhL2NrtKGMqfFYHCnSYh6iXnn4w8Pv44Ci4e7WMHsPiyKHKAi4",
  "key26": "5rd5fu9FUQXevFiiCToJZtwaqc7Vv8jLxfNqikrRDkzR2dRwoxmZzdf6y3gsANGk1kTfktK32BVpvNWg4wFV1QcD",
  "key27": "GhPnicHTASMZDCK1kFkQyKEU9jBqhSqAxFrKw8txE9s99P7sh7XJX4PiAZ6QPCwp9ZHiLaqpXyWj58jWjD5FyL9",
  "key28": "4k2jiquWfNg6ApsrQXcyrHT9etR3fYKWtjjMbp7TDRzvfc1jLavJnVnaEDyts28aV7baTETJMJN3HNjTiqdotDVZ",
  "key29": "4DGKkDW8dWo89WPHPrpon7DM3sXWDbY456ivyBAnz1h2bGwUgZ9rRXGjHQEJ6BHsE9wDcTrwenXkRsStj4pCDC7W",
  "key30": "4fbqAmkPjVT6XwdzhkH3J9eZn44m3UAs7436JLHZ3jyLnv1HhLHqc1fciyyfipRdT3J4bSLSR1o824AZV6gqeiG7"
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