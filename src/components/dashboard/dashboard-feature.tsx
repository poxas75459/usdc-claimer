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
    "3k6wcTGdi33jwrqZgPqH35xV9LghXm617wZ2TPwMn8ddVM8L1LCY4QKbjj4U6ucx4JpFJw456UY8EVMEpM8o2mMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Ws42so4JKsBFtM3fCipEXGKEqzpTRwwdzS6V6NYEupMkKpgPTFLDvKmwN1ZMmh7FiDEFutvNDqfmK7vZb2embx",
  "key1": "hapM3uYXKuxQy9cEJV7N899QQMBDahtieYNduanNi9445eTPKPDoAuSQSa934KHed8tcFnymF48ZdJqev6JPPqG",
  "key2": "5naZFTCQjrpCp6d4CGjRxmE4ZbVwSPbuM6okiiWqPtrQFna4o2FxC4AmVWiVgPix3ULUqZMYv9GQeQtE2NZ9wxSq",
  "key3": "2A5K1Ln59PqPHYh4FvhwcgCmjHUGD16ZJDctAd155z3FvKYwhgrMhNWbaL2V8wrYaiagvPQej6BtCzwyqWy527Lt",
  "key4": "4TPbtSPoemXCW2V8HDb2k7i5jnmV1TB7oFHsP3e3LK6jzEdbFdx5QdJxzrAu258kckuyV1VHGuur11Zfi4UusAjD",
  "key5": "3acMLjsVvDpTkDs35dC47AUKMrG9iziDzraa9vNS66ZFdU9PaHN4R4r38w1gvEvXgLdFwjdCuaPDvNciTRDJbrKx",
  "key6": "4wd14o88n5n9ofqWkoSKWVQiibHzcHts2E3Rc7RszWdFSzDzVY7jEhJTQNQc2qdQABqJVxtCSeRe8qKBMQQxVnDG",
  "key7": "3CFdUeiG3TvdRvuoU3jGRfakHAXALe9ZC3BveCepCLHxuaT2xWRw5ASuBMm7BCDQtFEJsoP3oHLSmxNcUggpLHAz",
  "key8": "4Jg9teVUnwUtJjSog2LexiKCQaCnnuKRuAzdHiQ5o4riUyvSR6R4SWN1QaSVPUVXBYHbpcdyucYiATipKdzZDoWN",
  "key9": "2qUjZEgWDXEVAVrfjHKsubKuQ72Be5jGTaoDm1HycMftnWCmqTf1f37DyhfjSMiManKL2MxovSos8adaYktBkUh8",
  "key10": "4giQNh9esZuLiBoe3w4NywrhjPFo3SntmYJumNxnJH6DSD12FAXRKh44FVRA3VbZJ3wGGU2D5o3xBTfVcX3VzCHj",
  "key11": "57vLmbCZPMETePDUmLBfdRxCS7tsFssjfN8v7zHFYseM8QeZKTb7akMZHwUXEJRB8pCXXawGuXTdLc4imgWtKhd6",
  "key12": "4io9suxueRyGeqi2ypLcVXH5Ws9MdejtKjYDg38xgNcj7YVzHUXEqeUgYZn6yzSKEB8d4QBKReLezHUjNRnJgnmD",
  "key13": "23oss3tHkhia35fwqhHaAfi9R1qNVKa28Cx4c3V57VHE4pdJKUR5qWmqmK3K2kKZd9fCt6mhPU2Tt396X3rqWrkf",
  "key14": "5wgenSWmnTicRC98ssjbr2dzXXgZQoobk81b2KrgHZ2wQ9Dqp1FCV2TijAMiNiW1SY4o6sZDrf8JFZewJTcb49kR",
  "key15": "3jaRRWchPbLXogdwBtDYJ6ngBpvhtpsK12xwK9AQCQJpTK2b7dFhVu4f2Qur9X3691mH5gvz4sqgKwAmM7BRRBXp",
  "key16": "DaEYWiC3Zmt8mcUNy73UKSbioRhh9CuayAX3Yz2Rur2rZ9XdceEaUeN2DuAbRQAqmVc4BCyyzdwv7ppQyHHvs6q",
  "key17": "4AurWy4cSVKqBCvrfdc6hqKBZyAEd8LwFtWKSHgikYDjw1hfaFd95wQjWd1wcNshPCvvUxCesu4xQN88JQGhrhTF",
  "key18": "3cYrYjEFuranKednx5J2bGHQzSipv7eZ8fpXhqMwYg7ojEqsAojjUJUR1f8r49Ga86NNMFTvEAzUMa5Pxb3pEbUm",
  "key19": "2wKJMqV9TSGQG7MPi5R49jYFF3DgpeBwrFhMcYx3sfjymbz9qToJjUgB9QH2F8Hpjq7j69vmHtKW7MQLYBmUA4s",
  "key20": "4MTzDGBvnabDJ57ya7whiattSZVcvf4hkTJuEUynwf2S2TZA2VRsLF87krRg8SjVidti33ZgMzxTAjrMTjuRdrjz",
  "key21": "2hmyd6LkhJftyutyzHHDLmvZSxGCj1DtrqcBMUD4uDeXpsHezpnaxu6sbkNYeFf299adeT22eQtS2TebHtAyQR8f",
  "key22": "5mWHPbEsxJkjVGbumgmCyX1RQFK6yxes2sr8nPTX5GFjZY8D2wDzKy9Qdxpc6b7yHFMMKKxBU2TTGwSHNag8B4Qt",
  "key23": "4rAPEJxvf3gjkFbCqQ5msCMGsKFrvKY4meicohQqf5nGgTTccR4ZVUQF7pC1Bpenrp5N43jUnBJgQichXx5rab5E",
  "key24": "5HYiHipJoGKH6wDhjB1Tq9ZWr52vKJ2vk8dnhLUSRZyd75UcBthQM5aF8hVhKTUzW3ZzuAKDxzhZaAMmC36F7t7V",
  "key25": "mMy2h2FVgQWAfKE4KMWU4o9CC7A4nKUpM2nAT8et1aHUKPvDpCwYnFwogjqztN9td3S3fgQdTaBcyLHyYPgiqSV",
  "key26": "3gzHjaEBQEfYgVe7TRFqX1eQHxMTMM716Th7gcjyGTKqcWaVfFE3wU6CUZFSZGyMYatjMEx1DrKbjpufQCL7Ldh2",
  "key27": "45cb1YzCf86i8nd7x4phniY61bRzRwV6DKDERt6uQ77ZkXVe34JfikKH7vVj9SapDTeM3B3DoaNHYFS91VsNWsJC",
  "key28": "ebJ3tCxRxFQ8MDz7V8Daom2PEx8RXYwHUUya6P2GEXRYMDMyAWHbT2NCGkxtJF82amaypsYVNKxj8hGAqmvccFG",
  "key29": "44znKj6LMAAAPHhK6rqXYvvtGFEPjuBqEkYGL7MSFmy6AxT5u7Wq193ZXjFsPBCRLs5ixuhAhmzZYprSCkJNxsWH",
  "key30": "2KpwYc455rEzCgJwTxZFLRsf7H3fiYyhDU29mYupRtuyddmed4hEv2JXm4YZGC5TQGRiKpTMN3mtXvzi29cQY8tX",
  "key31": "4ahy7cEBTiefWFnWV4381gJf5jTKZk9qRRqNmPPqRdReyiYRPD8wAhisiGQR9ZQQWCKhFy2YYTH8hxSVbEfGDna6",
  "key32": "3Mp6dFs6Qvsru4g1uwMzHjjhK12YCZs1MqTMyYTwVL8n5kRbmx8eDBbvQ9gaLVfiMbgUCPDb57cY2ZKhweHfjN6N",
  "key33": "44QbzGPrcFWDaDehUwYr9QbGTAAjVm8imKBDT8ABGHWjBuz1kLJFQjnnuaM5FVG3vPgFYEGYTVZLyadbTa6jX5Uf",
  "key34": "2Yy3zTyeKZZhmEfRgruhk3vzg1u4eyyqdM2DGS7vzycuTzBmwQZGS3m7YBsGYk5mxrfGfd7ouRwqgL4evYsknXnq",
  "key35": "48CfnyBQPYT89jhpuTGJsBjUpti7LxTpyShMqhH5jpmFQvta5y258x6cdKpQyDGBMAbA3UPXZz4882XRtR32SyZq",
  "key36": "3vEuD67mTyTEM7YMyopSwGCkfn1kJtMa3DCFVaobBEogCZKPFWBDTbLp9z3hSQ1fPo3Q4J1t9CU9yGzgG3ei2Z2",
  "key37": "5ZJ6dkbis1oMBkfF3xQUDD3F6TxLRkjnnB2wme4sgxizerCnzeDEPM1JPBMNGDSgFQzQ2mQps5BMisttyc2o7ZPt",
  "key38": "5ZakQjUvrYngjepyWw7vEVhUFDteFXpsnKbwmW32M3cerKGPfEGtgc9A1cbwHmbcnM8NGrhPymBVjK5wdzJG4tsx",
  "key39": "4ygyVHD9Rn4qGTTKuMiNGdtdoNgabj43CQb5GMq5cEm7UUYEyLoQxH2KGYn5h6HbePPAFeiizgpojhgp6vWAyyc5",
  "key40": "2cPt5mBcRKQZxEzp8KGpjTgJ4Hwa8fuaYq2JXUC6mcD7o2dB1Ta1eXFxfcof8x1fSCwp9P6i6dxKc5Y69H3yn3rx",
  "key41": "4oETmyXkmPBxdygAJJYHpFjobpjBb1ck5Wqki2ci24ZpNjVjR2k5BDLizuJZu5yTy72EqG9W13djCgcBg1dVWGf8",
  "key42": "5wxUeYaKNMKpruzmW1szTBF62j1x1EXxrHNekxVJQZ2gA7WL1s3RKjk1ggrryx4Eh7Zucw3ijZVrN1jnheZe7WY8"
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