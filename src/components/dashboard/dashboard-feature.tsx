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
    "azuTnNpX9GtLgWkgSwuPEedJdCEwyN9p4Kdh28mPDqhqo8s1YUFHwKKb2o3eqTa76tk5Uh93K1DrbnXC5bND2o5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdtkePZtqeStM6MirNyaAmq9fww6ATFMUqbef7gKc7kEPqLzsJS8sA9HBMFsdF88KdAG1UiKsbRGdxvfuv5uGkQ",
  "key1": "4DuhjbSzQNddVLKfGELq59YE4R6jd835zy1NcSJMcvsV3u2K33KuR3ggEoKUaeZSP4yHDfEWHexYJCG7vvwSEc2k",
  "key2": "3VsiFjDBRLn3ddKU5Ri31Rg9PugkcNgK5bdFwJ84MvPAxc6LGyAV7EhoKvQuSHECd9cWXwmUNrNuK83g1vY3xMHU",
  "key3": "D9Qcf8vGhFTPr2SJG5cQq6p5w8nX7eg8BFAaLGYdQTCxjTHyzeg6Moexibh4sL7ZukPyLzzh31tdiv4zC4DZkUq",
  "key4": "3vtKLxsBx7xWCG5naANevGUFHMbZ9Qne5JwTaMwNYNdGYHxG6d7rpYuRzxMtYW1tsdQhnRibe3waEpTfJ1G8trge",
  "key5": "N71gDXr3BuAcUduUE8xA7bva6X4ArgvvmtsBBoX6zqJqPWhADpW81BfUwjozc5CLKk5jv3MdzTgxVLpRM2aGuT8",
  "key6": "4KDaKTApCp9HY3qZvcMBCDB9SCvF88AoBpULL7oqwLnRgTfdNADNZ6gWG827QH8jyAcrLBt2a3APXDYWXLtuBYqk",
  "key7": "2ZHBYNixDPkpU4gcWzpcyJx8Dvs8aiA2kiTs4iJdPc4MuSbaXKjSfPYa8KkVv5LVy8dnUj8pvGoJ6y9eWJ2PGduU",
  "key8": "UH3D4b5UrDEbk8oLTEWoVpapZLDQW1KzXgeyKxQ67vSHHSA4X3bAm1PrVyjWN2brMWXNC9bAjyo4cDhtNerd6Ni",
  "key9": "4Sz3hvA7Cpuz2TPjdo7Dr6zNjim15Uj7Pib5ySqtwJLr6xCYhK5CYtm2R85ZntTdkZDRgBbWanvWmxyHX4MnA5dT",
  "key10": "3fJa2vBsFCf9chFrjbxLRy69fe9g5hNqNGKuoJ3yQLVWjH9dKfEK6gkjrqXqXR3Yr42c9pGRiQmn45Bxsutu6Eb9",
  "key11": "MXLkpjjtr2CPVohTXizUseM7PdRtoT48Q7YHFUdeQvoeMNkTa9zJBFh9wAh8zwaXwdE7EMG1BRL3RsThi446y8m",
  "key12": "37CAbYV4TSAjcCUG64iqALiuKUUHMJoPM6eLE9WbKGku4abcBgd1mJBQRi7FBYK59Z8EQArSsjB9Zxjan4U56vcu",
  "key13": "47QqjSn3FfhdNDG9Yo23DjkwxFbTiPgsNCwjqbKFASnFaEkyvPANagJvicyVoVLpAhyb13cPBL5b4Vick8eDiVfq",
  "key14": "iN6EdKqFEteYbZzE34GBjSqeUWmw9f66eg7wWFfZ2Dci7CdjpNsQdQSG2TedLZ4FvVpfirwh3GR7tstsnDxLk1P",
  "key15": "UGbupbimVQvmspzq18BftMaL1gPLq73fmuYFHZutFp4n7TzZV4ajKjQEA7AbMxrRhxqjCA5GAim8YJVyk4XEirb",
  "key16": "4ZUY5YjBj3X7fk5H3qah81XqGxRi7aoyTBTuwRffSFfgm6E7Z3Z3nCko72vPR2v3WRQTXeX1bzQTyJUQimSWv1ff",
  "key17": "3Eb7SEEpeRJ3Hpm57WV9sWYk6YVHPcX87dGDoXqkeqgHTi8xAK2BfgTjzrqfgwH9WPrxPGeAEeNkPgYRpUcrWQni",
  "key18": "hnXs17tKepFpjoZaCoPdMR9Qbqh6QsiXtn14hYH7sfMT352YakTN3f65S5nBg6XZNFDyvWt5UjuRZSpYdNXe48e",
  "key19": "5dPrumRXSXfnAcPP1Z6c47zrtEFiuQboRdLcRX2XbsGdHJcgxM2bQVNTsrvqJVdBk7i9M1SJBC9HP3oPXNadpeC1",
  "key20": "4Tz1uky3Bwc9rFhXUGhDnRMfSgH75yA7he4FtnnHcJafxh31SsVbiMFuWvn8RGkkZbn2hd8a8BxCfUpQZuvzr1EN",
  "key21": "5oxZcFMBPLEaYAviaQGPjGAkTJ9gFA2LPkfsZkHVZeLhF9g1XwgmrAp5MccE5HL3rpnQoGqfQZAD3g9cAKp76XdL",
  "key22": "5JBmHoWdLMjdJ2HridC2KHhpyn48TrfadAxxAy8TGcghWxYG6rMyrQ7zoAeJF1ytocqei5cv2DsRhEZa2ySg7RFk",
  "key23": "dmALnNWaSyjM21sPqp2cVqKhYiT3YjeaFLnVBeZNVJ2EZoxFxRjqig7o5WBG5up9CV5cDuoJvbbUvnQTZwNzi9s",
  "key24": "4ZuJ9m8d4sSXsqzJUmx6gLDDxHus8TrvMaguEZXdocEswDyDDfrHHUXFREfafHKmNBmcDyywDTiCK1Y1cmKQDH14",
  "key25": "3u574fse9LrBRYj4tM3zYpXh4tLk6K1tPQo95KaQBwbu7YNF9wEYEZCsG5Wpw7hfGR1LqVKQJjmww2DKx6DqYrkf",
  "key26": "2AchNEvYf31LUhXgMo98cWD1b5KimkfymqaRTkAHJ3ZxZcpgPJsx1n5f8JNEjdLV6ht1HGiNyFf6GN9tsbvHhZL7",
  "key27": "5QsZrKRYfWmasyxYz6XCFWnKExc7BWBxMZ9t2aVpY3LPphqutXifVqSadWZjdqMGcpNaCxA8ZDJHstg6KgxQCwkJ",
  "key28": "WjHL2SRrxbMAGePY1vvZJVMNFmSMtJ4afACLGuvjXQJCw1ZzBm2YySMxqkTCrhh16YQ9TuZX2dzGXagrvSAWtg2",
  "key29": "5D5z2spq9cRznzDepttXZiAwHMdEHFyCUFetqe45Xp6HvRBM3peqENLL8GFdbtSt5dEt6dVS4GS3vEuQ3S3nYLQB",
  "key30": "5XqZUQbakiULj3ttkm2dd2f3xqu3w9mFw9JhnRxbaKpP9QBK9HoVAPFncCggeedFGfYWLkuu82ezfDPx9bDT1yia",
  "key31": "65CSbY2dKJYXpz49QoDg5rmohgCgB9jfrqjg7XGePrLZAAf4Zijn5J9J7RQULaL1qSWSypcJKcSrMzqM1bZxzGTS",
  "key32": "ii1cEbPJQ5i2i2upJoGHNRY5GLJBZ7s1PNdx1hAt5vJdCfmqEKC3acC6tZCRNUactmZvgEFyccodrqVMKmsULvo",
  "key33": "RQVQnSzAsjfwtCozEFNZmcCguQwL5rfLZ8tDF1a8McdjnfpLyNHjAmAok6LuYsvovPpH2VmyuurkVMtLZZNREwr",
  "key34": "2YLwMGHFT7n5S8qHidfNNJkYRgsqocx9VYtgiAN49T954JkEsQ3WpqYKFddZ7WipU9GfpiZ7Tgi16D76WmUdwJQj",
  "key35": "2vNVR2j1yM1MWs9zvj2VmEDxkZWHwpNv2cvKzpK3rJM44VMEkbGoey3Ty3yVFLmWYrYo1pKqyDcMJ3PygMn3wnes",
  "key36": "3F7G5m9bRedgBUxYG6LRZSheg1yzYj8q7szMxJQDXVNogLsxZyMT56AeP9FmCaEmhFCYJGHu71KgAXErHghVKiTP",
  "key37": "3PqBipmfnzUS5AjFWEBfW7zX8nDCa59JrsxNfPuLxGsdQ9LWWjYwihFUrRaAkK3MYU1eVYhnw35pn5DhD1kQbhdN",
  "key38": "3F85EzSCLB98pE7xJf7yKuuaMVcPuuGcR4N9syZq7saBKAZAX7nSotJbRdGFKXyF3mXCEdpYy6wXS2Y8y5krByvF",
  "key39": "4qhmnVLuB41emwUbRKUi9jYKTSy3R6iotWEjZuihXaywECDreahx9njzEXM1XGkeS5qUMQM2mN9gj4MEwo5GvJSm",
  "key40": "5h2ri9eWNFjqhbgFHX9REaP74mowKxCr8v2pAQzs8nBfgxrC2sGMpomrGjAtZNG6h7tQykzF1FmSufKRrGNWXxea",
  "key41": "4xqFDPy7eMQnYrLqmZ8w5rXv2Xdhvk9D66vtgUEBWW94E48FNVzknV618QQkV6AqZjmRJtwazdbm4b3NeE9n4Rjr",
  "key42": "64RAntoh5gVGxJmCny9pPHarxoWem9KuDmngGxyFjfWZiBJr4nD1ii6x8ZW59HXdyDriLMBHSp4m6sEwccQWb9b8",
  "key43": "27fhiVvLoTxTMDfTA6DQ27DK4AHbrZBMHcjyZfpN5qEGgDSAsHAABhcUAS9bDaMLUtUBtMyfgmPDbqvm998ZVLb7",
  "key44": "xaRC3LT3y25tBvkn2mQry3NuyM4MFMDSViid1XvRjhULdMKud6Bjd82dTtVN8Zi721wJLWPU9d6d9gBJe47qJnR"
};
// KEYS_END
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
