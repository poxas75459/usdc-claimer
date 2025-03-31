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
    "3R4WBdD1E8HVogxRexwUC3DRJ7xc3Gt31DFKrFLbG9bacBBbooNSh3LyDbkJmMRArbt9DGLAPs3wFrdMjvguSXqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hiprXD17Q1ePwgkkczC66T9m4HiEiqkF2FVNmXYVrK8RnGV24u55TLoQfW549vb2A5e7R66Tun7t6hZyeTSbrJQ",
  "key1": "czJRGBcaBgAN3yHvJzP5Bjjjmxuv7hVTkNhRGaKf76AtQdE8MLAZdQfLwaUdGqi7Ag7EQ4azU2VsxeauMPDE7LQ",
  "key2": "53A72JukDT36xqyr7um2tBCMMsfUueRneATiiAFnG2C9m9hLvau24TEHCpXoNEdMzMBSYUcKyp76DGJfu1JPYntU",
  "key3": "R8rQR4dfszVddsD6kPywDBUzRGazuJiwEZmUeryCgsFUBiR8tfFtKwEAiT3V1i1tNudEB5BFgGrLmiytfLrrmTe",
  "key4": "4M4vu46rtZYc5PS8KcBgTz2uttgH5e5WvfoA5ALZThtzciXYUwgNKhJZLesNHDrFGTULkr4wSMpU1nc3ZJNDJ1zf",
  "key5": "29y9k8wPjV6C7Ju5uwPrZ5P56ya2p5i8GPV5F7TqcRAtBUrAzkmy2mX2KHiiXUzKrW7texmqEjXPpRRXaimuiBjr",
  "key6": "Kd2DnfjqhgeNqcaTRpgRaC3KsmriCXDY9AG8wTKeXmQiMWK8KBmNAYZNSyBQd9Q8SUKdqjbsXWxPHaM6qDCNKjj",
  "key7": "2XLjBSvu3M7usJHHu7yduBkQBMUW6xeDdHsu4ZABjbtc8kUVxGG5SvsEzub2AezU63cwRm3LkQ8Vtaba4S1Ymywe",
  "key8": "CataXGBR4BB4cvW9GRnq26cavraCQZJLUoLQqtbDewwAb6rHHNJQsHKYHdUiZixYwEJCiBnxsLwmRArXgKV8z5v",
  "key9": "czeFDAS2XftQNLgEiEDozQmb5Fwk8vv7mRHFaqS5es5bCgLEoCyXDnCKZ8329rnwZ7JMUWhnbwF1cyETerY5FhR",
  "key10": "5zPoMJKfuRKtQupNKocjz1SXuZaBbk6AAxJ1tr5WPn12JkFoAuszoZDvmp9wdHd7DXG7YnbfKRDLErrRmWPDxQPh",
  "key11": "4SmZesH1FnsFF8BAGrSiDbg29TdbgLQHuUEuBuivwXC2eN3eMNhnUBNh9nty92Zc72u72a1pAPaCWRWQULQJaVWi",
  "key12": "5sTT6n8xdToJTCthHfRrWQWcKWffsHqD7s4EeyXY38QJzmxdxHGBePGvhUqpztVaQow5Ndb2pVqaYtVCveLW2m2n",
  "key13": "5NNM7D3zEs52mmL2q5otBUvppgPZnJMUSGUXTS33TiaCDkRzJJsUZRKTUpk4bMmZzxz3zP1gmWVHzYWudRzPpWY9",
  "key14": "5RXrubXLueT4gDAfq2BTfNxLvSCjNSsLCMoVUGV4jah1RkFnncY5tfr4zB78tQURYxpJqujQaT491ikqRyDW4dxc",
  "key15": "cKLrXcUPabwdxvx23XhRm3DJvqzQpX5q9YQpyihW2XKRMM4WPcW9XoerCSc31dPmJLqdSebwYqD2RMo6V22vpvz",
  "key16": "635tTNTvnAQTySJ856YdggopvpPpKJYQFFqqD5Qt2TJU1ASW2Sq2qVmzqmnHidPvu4cmu4Rwe7gathVuto3roWm9",
  "key17": "3uefoLFZMttZBw2Qay3STf7syhwe1qza6gsR9FojJ9b377j1eGoZ1gHjSCrRb2icwFxoaVZ9yn2FQo64WyDHFSJu",
  "key18": "4LP2SRpsY2AQXGkv8qAryjUnhRkMYCo4XtZbUzwdX2Jj45bQoDGnPPiTRxLYEcAayrkSZbRsJNGqZKfJuirUFVC3",
  "key19": "4kxutLKzBxNMu7nBemStdtQiF79UyQjtDTSwMQe71zPgk3nuSK9vvQaX6kEgR8htZtxqBGaGWSRe2ZejWEaDrVzj",
  "key20": "5Mt4WeQGVA28mZRjBK9Vd72CvcA1VZuY2gsmw7vDHj6mcWBXtYQpZ1RuUP7b3V55W2f9CtqoazoBPZWjjJ13yGdL",
  "key21": "2PwP5JGcBrDRReLqH97d8JkhxzRDH73MBKGB4AqER3qanD2tRwUhPxErJnefemgf8rACSR3qeAuEeRLz43aXARbz",
  "key22": "4M5MkFp9aRAzZ15cWzKUpfQqLykQDKHCq3NUSs8zA3iFH6A9mFuUkVNUvwf6dpLYRLXVYJQCwtcVMiEYkHvh3E1e",
  "key23": "5JUSKsB3ZPsrgfTEzUbT41mvDiteCseAXJWfcHAFpq1NsF6TjcshKQy8mpivS4PhYxTC77LpsFwPB3kpLyTbJ4dC",
  "key24": "5s6wE2TzodSJhBVg2toqprzuwTfNvLEt2YUJqqe4CVoF14c8djUBUXZM2TS5jF7WLLWnLo8usiHcmAnk6Z4sJBck",
  "key25": "R2EWqsUbHRw7JReYwCTygDNZxJiX1fAjqWxqp2tmi7SQwyozmGC6Fy3aKNzekdY5BkWsVk6i1yGRzUH5JSPmXEv"
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