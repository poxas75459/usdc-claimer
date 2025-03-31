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
    "2KcGd87y8WkUXYpKCRTvaD2ijbVGdDqnsrDg5CGVD431NChKKmj2dh4AKbgTinhazFQLbo2tzXypZw7gnFiA5eMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ssDHKcCdVRzWiCxVFbURt9f93hKoe1W2FKAyHz3mofZk8oaZXvL45CeSooQG3iVRU75QixZ9sRxpFe2dRU4SfFe",
  "key1": "3YT62xTrxh9FDquC1y3QfTTQ4Rtu2D9eHQJ1TjsgCfRgEug4AxeMKWTDBzjNmf2yLKQiLs3NFV1mSLdTG53AEnxd",
  "key2": "428Zn3g9Whq7FvXepGUJEapa1ecc1S1zrWggHXZecbDBM6FaBJxjRS3mqsE9YKYoMGh2N9Pxtn2C4txNbajJWLRy",
  "key3": "3saBPiENXvymNLpD3aeeDqzeF6ygqDpVaJEXeZEkcPsNqSBY5RKFnLJsKCXfpA8qWPSBDVAZf4MNM25o9JkQnX4Y",
  "key4": "48iCf6miv9MtrvvMgvGQR7KRDUmNnUSNy7mtsgfZJw17hmEh64JTtm2Zs2SSVXDyFAUdyrrsXeoFsCyaSDAaRCPt",
  "key5": "2wBQ5s2ggeuBMKQevZMYdBBf2WJBVehoNfmaypxsEbWpCe5qhAHqPHsoqpp8oW47ZLPKmMJJmgTzCeUdn2im6FzL",
  "key6": "3v4CrVWtxmbLYt52Xss9TZxX2zLDRX4W1tgbFgDKHmhfGUUdZPubDpv6Fztsrg2YF4J9DKWEJHM2Ys5ycCmMKRnM",
  "key7": "27aMMMTyPybdjMYriS1UhvJzk9NNWf7U3mL6Am6LULktXnTu6cGhsr8AALE9ADpYBVSHqutEYBKQ9GnhQtRPcToG",
  "key8": "4P61wFsQDCghLWwoZigb9P9FuM9deWatG6F5eRA4AqAp81XPmBTsjzYfqyy5bLTztfHi3FABoZnAMC9Ky8GrQtdR",
  "key9": "Xjd6EJCqUvwr8u5bnKfnRe24PJRm7cRn1prvdkGc6MwQntpULoHsNmCixvQ5Xdj69Lkac8SvAw6BshPT21jCq7i",
  "key10": "4B63RFsoLwhPBe372LBZDGYZoh2KvTwEt2CRN49UtowuMvvdLsCFnBHCV34VRZRurgisTJZadE28ykqi4Sv7gVSx",
  "key11": "27sfhuvPfB8cAHJZ2Y1rVQTpSr4s7jayjMu8Mni3neVNBov9AyUcq3N94G2yB8zjAVTsKx2nQUU7r2uf8KimS8z2",
  "key12": "2TGdgiTK9ybEHpmiuwphHWXwvoi5ES5BVhWsHFH8uGAma6B5he5qik99keFUggVtV7xEnb8nh7odrBeFKwcx5QPq",
  "key13": "bPYUP1Ci7tGTKLyr7TZVuuWq98e5CGVk89Btv58hDqdsYWdpHzt2Nis1BGUDJC4h9AY9kYwraj39jgMENoJh9qN",
  "key14": "5f74d3LfNPnoXZPYfmYAWA25UQ6EibW5QLWeU6cqhbKTX5KEQ4qU7Gz7brYPtRakTQSnh3sfnEg9vZcUqSEJQKb5",
  "key15": "PLLtEsSobj4RXvrGomMPqMveEQMVbASRCkA5MaywdJBvmqUYfmxS9KcrVgpDyiQt4JDmUMbyNFPnaWSLdvLEgNd",
  "key16": "36iA6yxMMPG1e4MgVemLaQL5KtG6mefHkmBP85wGR2P7m8emvUbBhzMZb8arr7NzbQyu2bqhsmPWR5jL5UFG1sX6",
  "key17": "6TTou9xpPs6vSuqZA9XfZpNPwmScrEUaPQpE7a5Eb2kpwckf5ffPegukfFFHztVVpCPmwetEwpqPmMdbwoASQKj",
  "key18": "5b5PT56rCs8agxnyUYaSpCEbGYQxzVf8HFaGuDHzhZcYNRtofYhqePjAu6w7ji32u2BCogoRm4STzYkfUUJzeCgE",
  "key19": "4X5i5qwbuaau4Dk1nmdRGvc8JfXYZyCaxx9YbNLrYuayMRj69bGUd1K7F4qB6pcq1rxMU51weVdxwwTx5kcUbEpd",
  "key20": "25xBtfCvbp8RYejwfDcmDH2jjAc4mhCreEbnva2ihzgb3UtAqUDAVUr6up9aN9mx55Fk33yZbfzQ5kfc3Z2dqDA4",
  "key21": "2wWqaj3S5fdfWoXNayY226aPmnfWxo9SWZYWW5eDtnjkm9KMLBrjhSENKzuLiefVX8JDoCXnckXXBK69YwmVCr4Y",
  "key22": "3QwsEhZDwRuMtPVZB6y38v5vyudsgYhsMY5jeDpcEQZGFQSTPB8296Ac4x9EXspXkM8CdNcYSoVqfqPBj6tS9dBb",
  "key23": "koqrSSmVe6S51ugkL7SCVdoC5BrFsxdi5Wdg8jXi9bpnJQbqq5x2XwiHd5prdYg6xVFkBmPWsbACXxFH8zzR2E6",
  "key24": "iKRu9nkCdwXKQ9JpQpVHfmX864ovP9i1eVPNXUjCRWU1HZnmtGdimdemsRWjtgGV77ewbtAaXSEbaDorn5AnxTi",
  "key25": "36WANM83A1C87p7vJDpQSuWkG7nt2fiErMSW85nEU4cj4dXcDjVLBYBVbJDKDDwesJESUksiW1wRMorAqXW3yQeo",
  "key26": "5F21xwNYZWLmedaxgx8zg1CRovgMxDVigPKRqzTUsEiEsHNRe5n8iyjahaxqLg5o3JCjS3aQ6L1miVRvYXbcYRLR",
  "key27": "5o5Le3QwKhU1Ac1hezBnFJ7zWLVRxpBneeKXtMhzFTJ98GwsKeDvNtJrum3pBEh7k59frqg9PJTfabYSumKTKEiL",
  "key28": "22D53pHdHbzYefn85z91JjKzn6yJgWXL7djJh8qWXhuJETrPSWFQRqbhqcDjMU6F1rbmzeVq6TPA3Qtzv6auRvY8",
  "key29": "98bxRPbvMKCmWXJ5AaBS54Jn7tBajhdormjMBxGSqJCJMAU3GvoTWWHcYUsySW5X1w9TWAx2L36vGVfLFx2ZrR8",
  "key30": "3tWDd6YdFH9F1NepNEsNGdE1HRGdZH4p6pKzw5RbA9jCw1seXyWxWb2ZU1odFRmik3RbFFtiWrhjT7NUDqQQ5c6C",
  "key31": "33P1GvsY8Q3AGAHZX1CLvvjjGxP6qU9r1NVJgRy3woiiDdWn9zzKx7RHqL53pYS4ZwTaiFatQvXsQ8vftNndAJTK",
  "key32": "33UkYFMK7kXra4Fwspgq24kQ44hQ9eX2SYe4MDYZMYEkEhwWyHCTTBxmu4sQZAkSSTcgJTgnRTxRnwPZAecMs6EF",
  "key33": "dfH1n2ggAdTSbUAfPhnT3FbMEGBNSJqb8C5pRf8SGNSh9jYZcDZNuB6BoSfNCymLRVcpYNFhNgPd2qerGFGZWVg",
  "key34": "3CmpYfgykBy3caEy7HSgLiefs6MRSrPhUGiNCfxH7dNi9Gj79kd1UCSKFeP4M2UT8seTrG2dLLpaeFJUYrpdSoQ3",
  "key35": "5Ae81WFS5tTej83q83VLJQt9ib5KoucNrZhCQMQpULtpH3wDzUUtXhmcB56biLYDok9nNN1SkQY5jEKvnH9mcbdU",
  "key36": "28iKE6tzWr4akKK9oMk3xm14Tan7RbYkhUFmxh3Cd45ycknQnDtJLS6C8zs5SzmsBwb6RvS4sJUwZc96qm4Tx2Jp",
  "key37": "2CN8ttTno9wyDkTAJptLbPFoXzggKi9J8td1jAiUc9xaqWmXh9oZcgbSn32t5BNyi2TcXuSDnFCH1VtdAAyfernE",
  "key38": "3pKC9ta8CcSgyikM8XUnJbGTTzwJLzNhYacikea5Q9c6uHHsatecAPJSKDJWKftXB7FQp2PfSMFBYSc8MnZC2o2n",
  "key39": "2y4ZcKXYLehbShRaVEGYS8UmvKtLEz94iAmMxgYQfpurMjPbxjzt9bxDVELmP4VD5TZtfzV1fKdJpaUG8ZQjVkuq"
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