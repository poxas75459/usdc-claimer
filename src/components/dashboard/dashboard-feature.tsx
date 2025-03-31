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
    "5HB7XkmBfTLuvnG36Hvn9Z6mkZ2DoeBfZhdY6yx5RbZjCfTLPNQ7WV2oumN9sZA91wCpyQwZip3jrNXykQ1y73A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WUJr52r54uA9nXbBZHhb5hPFqBViuTsRV3XtbK4CojqPVERQN91ZVX6Yh1kvygnJJ46o1J38bDkC9LEoXt8w5Xc",
  "key1": "38q3w6c8JqYKaw1mCP9s4GEq9kSTEVq3SBAqixCTmL5KwYcBYecjoqJrbPwo46Zw7gJp5Z3cyj6otDGRT3XE7A3W",
  "key2": "2JMbgxJhN2gmdBgwhqi5QoqakYHRy8Y7KjaLhYNTn2XvVE4ZtBSxsGzbcfzhZ58Jt6DnCLacHZ1osoKLkf6dwG3V",
  "key3": "4Ng6ey7X3jMtcLzmMctA3BJfwPQuB1xWkkWqgCT3TjtGN8bvCTF93bPmPqq1ggGBMESf6A3Rg5ofX4ygKN4k87qE",
  "key4": "5u1WQzVaSthuU3nYeCkLNctsiCZfuwHdSx1b6LZacrAhM6vzHpjCi2d1dXqMTdKTGGDrjtmoNUE4ton1rfjWjRPq",
  "key5": "5UKXsarQaBsYwv3hV4D5ytng1qMeVHWwRB8d6GvpJAVSyEuyD5t7tnsQP7bpnxNxQa7KUbkCp47NFMsfwzGecBwx",
  "key6": "4VvZFVUKY6Z7fPDqQwaWUp7QLE5QamGEdoTLpJUuBpTFCJiirx1BTVZGUMwyAcVzfvznhadc4nHnD9xf2ZTxwRvm",
  "key7": "4LdA6hRZqQvKRxGQURoUxhR7Jdz5LbWAUEaFc2ACB1xpLrJwfMuReRVkPpV4E6mxr8i2oFdCbB99vsCjmQpcunaW",
  "key8": "5qm7W2fxyBsDhXWydA7xXNEMcbuwQWRnHqAgbhK7EjwR37jpgKQjhop6tsFnTf15GP5Wdi79ahLr7gGWQZpVAhZS",
  "key9": "4c4rUgbCaTqym7yCJGPsZCoiEKcdc1h6yMtftJYEacTeCpey222ktcbjYyQnQ8UqfgWEfsfHpQi2uWuzsLNgLK6z",
  "key10": "5hqAtBzXm8aqhNmcvkaHfW2Y5QqJPvvSXF3TALTjdckwDY8kvPV1ZgMuvtSqnG116xken77t35B8hGfC1u8hAK8X",
  "key11": "4Xh1jXWJHSdj8K7ZFyHvzBqGTju5zV1Jk7HNfXfLit4JTzXC39g5Pg6hWhRSDKxj6BfZgnM8qgDn7UNKSY3P3BS8",
  "key12": "aXpcKtjtbdSpbb4GBvAFStEPt99mZznsb4bLuThgzfajvnAdmceUcRGEpMdt2PuHc4xgVspqsCKetkBxwi8ammy",
  "key13": "5u1xDPU3LNBfpuca5A2sT7BG8SeB8ERAZKzwYoqszbWhcsZhiscQSZi9mEfh9cVHfSn85j8PiW2vQ3supSQUjCJa",
  "key14": "3a7B52xQAPJxmLbwtxbX2R23Pne2h6J2HXDPZrG5CHTPVT225hKPyNa9WTpEgz1hxnaY3THd2JV9Dd7W6yyVS3Yy",
  "key15": "4dpYuXeUrmgoH7zJes35QMGFSatXjPnUpP83A1wESC3W7R6TDDwiLAXmgi8U1k7SsH1cJtu6hGq2AZKXmRMdBsXy",
  "key16": "3kMfx7tXrunmicSNT3xxwCyh9N6yXiyNdXjRNwJY7MYUpsef53mY7NXiSfjcrLM2syErPzs7nCXWBRfGTqQADE6q",
  "key17": "52fi5jYoRhjfdFdUi67H5eSLsSXC4mPCYaYwdfiRE14GaHeQxbQ8dz1wogJyi66HA1g9ExtskNbsXZv8ZRwSRmMB",
  "key18": "5cbUAexfDTcW5d2E89vnnuAjuMUFNVGBE7cqExyv3eBB2RGxoppqaxguTZmjTTbZHza8pFdAwk3REMJ6uBkePNsj",
  "key19": "27ekHXtgrwRx1BTxaAe78xUUvtoMZinNBiRLhup3gHdWdM29TEanRT7KAtdkHi3cQrUMyPzgU8K9MG3i74BzJY8x",
  "key20": "4hZTf44mJp7dViLynbGskoYNsiEFmwqJtSEwXgYwc3KUV9RKdkLmZk8kymbxfswUvjs9kxsaFjhpfDCZVoeF9vzo",
  "key21": "53v7Fbbr2LVEifGMVKEVktCzgryytvVSns6sABPE34LcYRvndxi9VsRfDzv3SaF17h4bapVrxV5PDJARSR2sJrBH",
  "key22": "3HAS7xx9LuFnXmh8QvvS2GddGTLFaem178UJ16jmFVcw9xgeJpzDxiT39iCRPv1GSFPHqeM9m4FZ6Q7psTrAVLcW",
  "key23": "5oPrYtxmSZQGKqeaMoc8DozTmxfVG85RJ1US1MR9nD7ipAMRUMAyA6ajhwouByfUBKZkHfKw2Eh36C97EvtsWHt6",
  "key24": "48vdmA5C7iznF5XJnwkFPvCSGPvEiHR68UwXXRmDpqyiASLypjQBn7C3mFxvooSahQ13MPGtPKfE7ddkQFPuBaqW",
  "key25": "5dTWZXCV3uRwjAugy6em6kBLxgLnxE9QuSqZ62FZLymRmQSXHHTdHMhUt9aYvQuEUJ9CZdHNSJFaYS6zpqoVKA7a",
  "key26": "3Jb5drhnfyHSFoHZs5p1ieeVAj2tK5uBHNHq9AW9yf2hHFSzahz8VTYVWbWBtbNXQgFNSuhasyCEe4rMZi8YDtVu",
  "key27": "ykX74AtFAvfciVKodSChJPkx7gc9YqRk7y8UNwA9NCeozjMYYqBiPqSKd3ixwuZXdSRhiPf5csvTaYs7oYNyBys",
  "key28": "5eENpNWvMFLAmrVwifPrZBys2s8TVvNTS4hVyzKeCHXnmK2ALQG27vXULSPgp7WjR1tYCLVg62CqUUV8KZU2KEEc",
  "key29": "5k9ZUhoszo7Q19XkqkwtvJh8pB3paudUn5F3TRDxuMNb2GPSRiwWjQEiVm19ZS1D43YMzz8roc13bQUXbfH5TW9X",
  "key30": "4eqjvZTzWYs2NpqJZnFZpLg9fbyrKqVAphqEXzRTCQxLybmkBTQCZC6tm3UnR1fwdGDcFDbfgdnR85PMHmiAjpSc",
  "key31": "xoRLKUCwEqv7AYGnBTtyrFDfmdDiuDBJPcXQJGHywPFBJAe7KhRbwq5fX3ZBHwkpsLZs1a5rEQb43Xo4KwdpD6R",
  "key32": "2yVzkN8t73jrmxx2bjuey3VCY3DASkG74x5ytYt5DQKhsDyCwggdTh5CEYM4PmmNvJ7jbdKxjPqi1umzC7fiB6DD",
  "key33": "62DecGnCLrVCQTLdGJKniBpasvV4MeVmzuy6EpE159pXVb741D2hxDuCKvwtGsFH5GDBLsGYh6Lrawr6nN3HK1HJ",
  "key34": "GeDnUkKWrdodTSFWFWsRU7jgmsqiYZwMMyKUqdrzfaY6Xkyoc1GgWSnZHin71VZsJiHLXq1QDTAAXsKvmvcoZ1c",
  "key35": "2cqC4AgW3MdGsXPsiUPyQsPRdMpyB2YfXgNUF9xgwuLbUFUNsR7RyYqS31ZJgTLgtGSEUpehqXF2B9pwwTFn725E",
  "key36": "1286GQunFE3Yncm3N2HSFNLrqNLVjJfpBVaombfW7aPztgbawvGh2v4ZHEprejnNr67aQUSuKwxne4vQA23v8ZBj",
  "key37": "YMytC1zrmnWPYwUvu4h5rUQs2oV9gw2FWP9JqMDPYEMhfVeY1PMvRXQHsEDryixXV2aQWUEiBEpdVSLQxLpX5ed",
  "key38": "3TZyMvd3aeeDprce1Re4kiGwgSS4MirGZrtHPhZyHA3Lid1rv6xFcFKA3VUgFoRD9WpJLS6aqYGUp8yq8hFN3xhc",
  "key39": "3uKmSNEBG2N6hLdewA8YLBRN1q6JGiikD3sxcKSToVV9bFfNbbP6f6RpD3W9mLa6iEvArPZMLQ1mNmhzhbDB5w49",
  "key40": "nHy6Gkv3EDA66HbMJKRCAzAKANLgJy1gZR4Ta3oewXvJcF5rmJWUeACLgrH1VeSSMoeDjbyvksCc5vLJy7jhfbh",
  "key41": "Xbs5g5UXwDtbs8no6eMunS4BDFG1ELH6pnphwA9kurucCs1Njde1oW5QcYWQBvj81rFL77pdMciXBNAhxvgBe2m",
  "key42": "ScJYqLMuj6EhFB1aqgxejmLptfb7oaWcaUrkyGC9PZ5Wm3CbJZ76DAchpVamh585WskQYbcW4yS6DHcyuFJ8y9E",
  "key43": "5tFS2DVkfQb6UJ4bAmo1dQMr7s5h9oNc7MTYwHKmqLwhQqbL3NdY3w3febxLcfKa61DdkDdjg2H3eLtyGkYyjWrR",
  "key44": "3dmPpW2aeXR9AYHwRxV1a6NnGi8Kobj3wUUpLAKjgpXYNNJDLS9DzekHZcYFWeBZCDz3GDGMgqkr6trxGK6qT7Ja"
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