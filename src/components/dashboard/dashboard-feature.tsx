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
    "2hGgvdKvYJWDpAPWf4PRJNpeLHQnEQA2GgzRgnEo3cxXvXiyMHYicX6mBDNHAne3EH152qwUes8uudJ9z7YnqaA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ukE3UYAEddtqWrzHLcmRU6p9B2kgoeuJAp4gJufXvpLA1iUyrEWMvty3WsyvxEyrCsxvjmtYJZwW62ik2TFKDHN",
  "key1": "bWaxTRNF3QwqHNoKR2tzGmur87tMqXAvu3JTKzpkVTr9fvGGhQBKAEMh8VgyTGrKR81Zez9nHVrT55uSBqdq1cS",
  "key2": "4HyNa41pu3GMv2g2YJ2qt575LmH4FaMZ271R5fZ5xPufH1JWmykrmJuR1ZF2F4WD9iDfRzBg6YQnJrJJ5XMCMwau",
  "key3": "2NWmB4t34a5EQLfizNsBN7f1TP8MfwNNPzsP87jTTBSQhpUFi6q1ZYmDLqCrQYzhQEj9a8wRChkeg5woC5WFZSqG",
  "key4": "5KBFvgk7nk6P6uGWtH81LDWJ4n6E6qKdCb6bXZXr4YvwXWJkFc1t5MVdgavXgzkHt6wyPmFuB7izxAZ4muFaKPYe",
  "key5": "592MSpwTr62XYAj4soRSw2ZBFhLNK58iAdBEpPdDcsZmGAJyZo1HLmX8cjfQR4hMxCj6tnC63LSPZnRHcQRiVMJf",
  "key6": "4VWzbZ4x1Lh5KHXAqzeT8ysYB6XMifYyAueCMrtHCoV6SKwx2BPAWjbjVS1xn8RvbFoJkGXpGw4aaotC9XZRJ4pY",
  "key7": "53ZGLNJ67wdPddZibADLS9bhPgyzZPZBr4njRLHUgx8m1VqpmKerKadsaHL5nw7yjuErf5HRS5o8gRcM4RtweDcm",
  "key8": "4doNDS1yV8jcD79HXURdHNEacWfnEarQ8d1oKn3L1YYV3eCB3txVNvZxayRwbWkjQvT1uKtLB4XpPcrVjkJ7y1wt",
  "key9": "4LxeXs2vkWfFdgnk1dyyrjDHSGtb8U839q9i7mJnAgSDvFcUWDUVXYz9d25CpfaHBL6v3o1nVvJV4QymR4rSJ4fN",
  "key10": "2u3ZC5Z9iCkjJZX9gFkf9sF4A2Ys6VLCHpy4de9zpdno3AjGFpdEaJYfRfBUpW66gZTe8QtVkqxDJiAoGcRP3a7U",
  "key11": "621JB9yGRghPrrY6qAkgRSYoajWgThQ7NaLteabaRPa2a8DeBhQAn5r4GeTwAawXDwvoUE61Atpn6JSuVEcyqvz6",
  "key12": "3UiiYhUwLNqoAmmxh4vMXRRKmU31gWeWXBw3YrRosQNwwUaXy89CjBatsEuUwucgA8whCdgHrJ6JgHJ2HdHK5iox",
  "key13": "4cpauNdXdeBitwSA1GAwwuWm7a3rGcBxwsf639aYRB9MMwnpkcPtKv1N8Giq8TVtWAkK1BCcLzTXGFZdAjBRN1E9",
  "key14": "52ZN4mrSi1vP5pargFRYhEFmAbkgJHuV71movzdHSacD5eCEs8XtKdq5udqc3soUnXFgAcgv3AHbvvjAgwJh6Rxu",
  "key15": "5knvi3VFntPHx5aUtmAbJYRvtAMB9kkppF7Ds15ph5MM2aRXWmnsUE5tw1ESn394HmXSgHC4ob8WagGPSUawqpTs",
  "key16": "41cVQoNwkXdj6ZQPpSCsQdCyj1XgXEPjMStQWwwFLyqQ3pfHXEbR8dZfSm9BbTu6EPjLgW5gTJkH5HvTd5ZoDuC8",
  "key17": "3P3NLraVR34qMUJ4kGrjQU6K3zrGwHQyuaBtTjfcg31ZGCbVWVvqQ92xcdutJgkCwa3PokTcPV2dCBxd2BuYjEc1",
  "key18": "2RQBCgZ3zZJu2NM3N4dNyPTJzgtCdhR4ayERx9JKVn1DUVLNRd51mdDFc6WWydRKSj1oMxDQqJnyw8mc5MHNXDeB",
  "key19": "2R7dUptKi2USFTKy3CVXzLvfN5S9B6pydjtnEqnBYqX6SDc77MPcAB1rijpxYkFAihXYbwqpaV9iawBdMqz2GdpX",
  "key20": "23zmiaRGdKQ9dfhQ5R3K2t7FrJdr2PbnPc9TYESLBnrzxzFRSosdRKRzPoFhH1ogmzW9Y54y15Lkdc9uut3xpDku",
  "key21": "3e6yF3uzm3mSQLw1i6SCq5khAbpNBsnJNy3rg4tqaqT7NYC4pmgDgUdbEzRENPvLPe68NtnrmnYbsmVX71cDqYat",
  "key22": "4uoQ4fHkVcDMuYYNUBMsPn8Sph9hwQME8sms1Hi1jCx627TrPmgxbnPx6YG2AiFiVjtiMoGuEuYsLT631nq23LsL",
  "key23": "ejETent8roNdxhcJGZhtPFxSsjpiAqG9WQYRyNTNvdbkxP1zgv8ehjNrcE9o1RGKWmWuAVKRGKmZDXPiGM9FM6z",
  "key24": "2SSt9PcZpuAjp9HDQgdCTMQjoVJrD9t8i3CZGWhNbCL7LgN8vxb3AazSHigziTVy8xBLvd9hQ3imWbenTpgo11B5",
  "key25": "ZAm8SmbFscc4U6tdAFUdiR6YQtfwrajGN1h9zHQJULbyujZKzCo31GkbS4skiweqjwAEwyhrAWdbsSKQY3oyMfN",
  "key26": "2vYJexGyJhGKgJdFXUAm6W8GfVHfK5vidnjUhM2Sf2C3nUwe5Uig4XDdn2EjvvTDQb3VqWDAog5aMrWEanGj4xug",
  "key27": "ebHXNxELLLtU3dZ1G4MEgLrgmEAUjJqLfy2PX2MQkqpRF2HvZtHUdpRxzJwkf3fS95wWzwh8E2UNQBugjijQVrP",
  "key28": "2PHXtAQVL18uq5GjvdWJ987oU4KnUvKEsQFJgvEFXm9YruriTDqskezKA1yeQYyorfCThz82gr8KSqdiywJgHL4V",
  "key29": "6HgPusYrMd4b4Wzduq6X7rgnvXmnBK7eNXz5nPPJTZZpMvESWbwpgt9wYkf2yKSX5cYFDYAvp8NPgNMqRDVpA4b",
  "key30": "4nctJC2V4oEWA5xbnQUa1aK9MxLB324VWvZYWD8g2BYykPYm7JSyszUsJugvzzRMocFS93859xRfyaBvPU9dyj8p",
  "key31": "64aaYfymxXWf5ogm5tBp5fffqTb6VnQWc5ZMzHPEDm7Mn81Ehvdfaugt3XA4fzyjd4huamhxamikpJSEicAJMTRT",
  "key32": "2B1LZUUinNeN4rw3NBjFvhfrbpx4gCwu8LmYtNyZsN5h33kRn5QhjkL6uR2DGroY3sqz9uYBMoXuw3gJ61obfvce",
  "key33": "5E1AjGvmqhgvSzrM4ChWENrBBDaLfQfD4W7iG7md2FPUcyNKqiUY3DywDTA54fhcqaM2HZjEvTUbbwqshphUeQwU"
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