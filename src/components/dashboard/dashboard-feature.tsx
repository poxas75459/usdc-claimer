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
    "2fkS5jUs2YWh2J87TwDNB4NDY9k3m2FMKCFdJ7PEpVaXXk7hLrgkmUVhK4TofVTSYVuyBXNMHjEGGgjhjkFLwV31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G6hgA6GQwQsjbHTCwymaR5gBQEeZVJbryxunxm1gWjnCWpcReLCxmMCkg2x3ToWBdjFL7GpGbpYHFRwc6Jn4X3a",
  "key1": "3YVQVWtd8LRyRN3JoumyA3gTroeg6zGwwV7ztVdGXrVk5gqRBRWQGCKRgAywLTvg8JJzAPxbpxR4k31rDonJyFG",
  "key2": "3KoNcmaUdAeuGWD9s1PhTao4zAriAe4nuUju2V3vsYPq5putx1TvoA4uEsvTxzxwerLgmCMTNvAjaj1emXEo95YS",
  "key3": "4R1fS1eWNVpoi9QCNtFtCN1GZvnjAgzHJhqh1VXxzy1CXZm612spB2YhCAyTW8LQvYU5gSqmvw837wEoCwjiU8aA",
  "key4": "4QdDLLQVPVHVXSc65MfRSxwEhBVoZKZGecFKkURrmgme2S9eDPuSf15i6PL79Jrz1CDt6rsQ8HpwgdDXsszet58J",
  "key5": "3whuuiY1G4JDj6sNeq5Nf5nYSDcRd8BVLzVidT95YvHhhPatTHu2L5Cq2utbDzNJcGK2czVvEL2YcfwFgKKzpmhX",
  "key6": "46ZhoGSxT1vnwAZ2tmaKKDc3FRuKbirtDtqVLdo7nVraJFkwpdKKCsz6DZRv6wxc7HBX9grWw4UQSAwSJTpiAhiD",
  "key7": "to3bbds1gao4YQSvcWM53kX7s9EsUqDyYRGqZGKvuzpMjAmdvqBybMDZD5x8oA7PJFnaRhpZMatPG6iVcC17bN3",
  "key8": "4xfr1GBBp2m6ZWnkqCLeqx6iNFEuqbhiAbGNFZusvyvDgWvnmxHPqzCz7yV58d5DCW1BzreVbwrQUYYUhtZs9tCT",
  "key9": "48Wq9CPCCdF3j5DmsCxA74QD8EeHytbK5kgWXy77hGKSogZuTaGU4BL92bxBbdWRSQJCZygmn2VgCuUaEUDwGdVW",
  "key10": "5bKu9vMyksBqfd5z24K3wcoFmZTxpzDKNFKGeXJ1Sp13GeFtDeidWfd2PKHFs2YCrNsgsoCygNGxFExk9GcWhJdZ",
  "key11": "4SZSrpsrLumfTfa8tLFH4MCuAhRLMVfPc8ARcn63Yr8wSxbSiGULxLWmHqZswBJPxDyvatMkxURRyymKk8uXDHd8",
  "key12": "2KKoN3byaj5Zs1MGHEKwGxVkxWxfykS7bwJDv4NGYh3EbjpvCP9yTxPxvrPHk9vaXZnEpSL8rMpFqkG2TbENT83w",
  "key13": "125PHiu8tt9aWDhBNK5wi8ngS1Cb33J3auo1eMSBegBx1pLcjbQiXd7ykZngHx77V6KUkurxq7djWGMoyZBDV7qE",
  "key14": "CJzwTfLrYfxKoWTTVrxjsniFB17g3xf6uhnomgg8VmmLEtDgt3ghGF6x5LTTJffZVyAo1jtSpFkDiXm2kB2p8Ji",
  "key15": "2bDs2nD4Fnmf4HDdpms7uVtvu67AFenF5Hriv3cd3ATiy2QBbSUF7ebxDf7WYiF1YEGa87bbpp23KpQNu5QVjAub",
  "key16": "3vYm3rk7MCt2kg7gZfEJ3NFSd8yDGW6KTNNAJver739h69VrDraNSbAEZvV55sSCsPiqJPD5zzgynfjkn3jTpbKn",
  "key17": "5p81sKd78S6CSKnCVJ6TXKs6Pwv8ne4rNDwBNGr5vcmgqbiA2XRmgzWAFhWVhCyV3nnPqYnuUpEr74neJAkDzBEV",
  "key18": "5qftKeSEMAicA4DtumRvJs1781gBAk5a7nbUYfUqLTqXXRopqbR5mCCEQgpHKL6rhW615YifT7h2CejEhEE8y8kd",
  "key19": "45rCAvUZurbAPy9i3anAoEyhPCJvT8tLX2fw67wYqVJ4Es46ZqXDbNHhMEovAUiDZhTnWw8jU8uSQrZNjSNvvpH4",
  "key20": "4R4vVZ4oMZFdfTMjDXQiZLLbt1Hk6cx9PcjgzCwmgDY9ZyMVHgidEL2qZJuXxwsEmaSn555ZXJTQusDxWQssHECs",
  "key21": "26uGrgfqCy2TS917mWsHCEqdJSmoiCecbbJiABgRxDMKrUsavznV5tQskRMxZCYSKSqGEaXJCXZo5u9qh4Z22Wj9",
  "key22": "4MxWubmGnuhW7NQXpqXi6MUaSy6KjHeJYAjpCxVMkfKC2HF1ggPREYvwenw899HYuBLwdxjK4Sozxg9dDEK4PbxM",
  "key23": "58WiMGNVn8G1LXkr7zJsw5MVje6z6fnUvFUAL39yzA6xkVTxUFhPnyosUSDqmEAzDX5HsDuFUsxv1ze89FGR9cuK",
  "key24": "4RqBNmgZUXzwqpnj14n7ZvvWifKL7P2D8vrZVzj8SVvUk3MBFy2L3oJtbE8no9ri8gQqLYEvdzgUMfcSxG5Nm7Mr",
  "key25": "5e27pyBx7XtTVfX5ryM9hRRqyP6TaQCJqiSci2ytQdr3Nzua9j8Egyfad3bssSYZ5Du3vF6ae7BghVN97iTm4KpT",
  "key26": "XjAKdYSPiqbvEmmZB2uhmkiwPgRXvQcsoCHLfG46b7UAW1XspEedeuyff6YvmDgaDVMKndSCjNduBwdQRAhq1pz",
  "key27": "38o3ZNzfBmAe2dY8osRGzo2PgxzArdknwKQb2wyKSNR7SLQ8hC2PSs58VbHxPqikznB3jpHWhth1dHjRDP75CPxw",
  "key28": "2uBBKwEFFuM1s45KD1GZSB3P72PduyHJDAZoBNar7NotaJ4pwpZwXbnZgpUZ8YU6e1Qa5eVx8iyL7EExYHXE1iSN",
  "key29": "4xVjH2utTcAGNvRQCDS3PJz3Jj7t5gS7km7MwTb5WpiWwgwQSbNDNiRtuX21yD78GPkWBLtvMJ2hmE9wGxHgVmEN",
  "key30": "B2B2E1rdj4ycpfmQ9iZxN2PCPtjQRLiFwU6dGqv9BHLULDkbM7bSztr6N93Q425bdeGSjn2rWPwYS9QtcBKuavL",
  "key31": "5FnujkMxnXCEZ2xum6NMHwTd21kcTmPHWcmqnvCZjt69nj3aTxjCoWrYDM6nxBz6zudrmJJErR74VdcGKq8zLCt",
  "key32": "58fbC2cgqACCKHs8YswJfnWSbfNhh3tyqYBsFhAj9nwpbGaNghMgicP2fynbHLJNTY8yaA7bM7nb7zg697RZxeq8",
  "key33": "ECceigTwU6o3Y4HwYPFpJLkC5AjWqBrAtcFAtCDeCSrS3AQf23znGnsBnLgbmdPCKvrpqNoCQHfAUVxhSZi9pk1",
  "key34": "33o8gYBGvBjNcBFpVYQUGm65xtCFT5FSgGFZE7iX5JRrdQPiKR7HLchGkkT7eNLN7R11jQXX2BsruTKqDFXoW6f9",
  "key35": "38DcENuLmh4Xmb7ZvFCdv8CnivA5jCGKNWgY94bLg8ChBXvjpNTEQttTMT78Y3T5SpMm3Xg3PdrjD9pc8G3JG8zX",
  "key36": "2NzTyienU6w2CC2YtCrjzXYeSLMSjeuWXdWpSQaL8q3knR4UuVQntpssSbLqQU1S8QQzh8opgNbgJYFq73NEfG7t",
  "key37": "B4QGKGQjL8CLpzob3fQ9TGVhiVE2NnHZffkqEXDfwJ7aJQNPgA9QhxKdnV3CeFWfaZibnkvjUP73KjM95519eUX",
  "key38": "2U7fCCTYSQpnhYwaDuDBR2UfC2PpDjkApJkwjEQeBvoyv8Fx883unGxCCB11v1EkkZDkY5xUGbs8xyvKEk8czcvD",
  "key39": "hKsR95LvBb2EtFNrTDcxVNmBxffBzZYcdY3TEkRBBEg5wWDVQMdvsKz2QjgTGQE56GQ49tfVdB2KCtnVf2vqE8N",
  "key40": "md536FVwmcM9cEtNGLevJ8ataWgEa2WeF6tcyDec6wPePysGhdUmnd5ZC3vpaDyem7AcH7PCUgo4Wc1MKb2S6xn",
  "key41": "2AaZARNz9gopaT8q18YHt6DE5anKDsP1yFppdKYLNNYWVJRNXTvBY4govMchm9N8VkGt4syEWVSUYqfvHSAjV1gS",
  "key42": "3MvNbihi7TJgNqFnewaEe6ijZedhT966y7L1usa13cEgUhy3uzV5wmrUQeh1i7BugdMChwGhMRmCQe56GL9yM23Y",
  "key43": "3rjbmYWoWernEjaXgHaKdkWqg1gTpiQvjVDv6vexefRSU54G8rJifEWxpfWTSY8kBdCBEd83vouVnhnT6YYM7ptK",
  "key44": "4sWNhEjiGbNX64LfkQWjXZRFkaVhWWXujFESufUprg9joW2ZPWiaLTAyvk6dwFeM3YpEagHY8xjPE69osNFR8FcH",
  "key45": "67TsZqF4tPMr7yextmLKELB9ZguozNaNYLK1cubyF8V7CTx39LXsuCMZ4KhDFzezHdoV5nf21zV9b8TNThW2fZub",
  "key46": "3TfXPFwsWzDpR1rKrFYc4U25XeCzXSCVJHwC4dyNgmiKCxvqc9stubRDaWKXNcL4XCTzkZgSyvvmX6yNhdzMh7Hu"
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
