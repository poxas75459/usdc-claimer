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
    "5FgAoXz9P8Kxo8vi8UBLSNqbp6Wqy4oHsmboe6LudhNmR3YCarb1aBSfY4DG698S3eKeAahLkPEjLwSif3F2qqp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49w2ToqHzPpwpwxm6pZQ82XkQW9S9cEG7kZ1yHcXHHMaT5yf5jxbk7KR3Dvg7AisGzWpKjaxfVKCJtZhnLCae35X",
  "key1": "iy6yJe5fey22yWPcLxDvuPaz7e6ZiuZZQPjqKyVhkPncdni7ESnTDBDWFjVVkqpv85ATH1UYFzBqavx9ZtHNUvt",
  "key2": "PowcEBJr3JWgNYs3EzTNHDmfuuk59xMD3KXf8MTc4mK8h6wCz1JnjBPdvyCuYhDPVLuG5zmDCeGb69mUTBkwiGM",
  "key3": "5MUhbyheKar3suDTAW2HPLsS8spt7MuAhaSb8ooLAG223MxspRCffWbnbaSHjDDbF4o9dXZ3qM5XpvBDRdZdQoxF",
  "key4": "5Qq98HFt4sVDRu5X9278LR9YgPPFfTihH2KPN2JS8u6We5bbLf5YvDUw6SV7ZCknaDxufHQKqBkh8UGvUirZ1eRV",
  "key5": "27GufFyawsiDXLw5w4eoWLNWghVSQw7XMUwWUzTkqR3A73s2Yx6aWD2N1mT8Y36qEojXmYZ2tLWSvnNCX8vMmb1Q",
  "key6": "2xUnYZwsgSVjgFPVSEPJRcDN8Qg6b3PfDa7WvFVmG1ADFy1DnhNjSeUr7u3tTkujeHSQy7MsakJKmAntR5DkjUUV",
  "key7": "4hkwjxPXUVPms7a8h81cEP5DmfLC8DWvvydn9K4zTp4j1coVv748fFW9mWmEhrFGXKxs35SHD9qq2cASWQ2aqVcr",
  "key8": "Zo96ECFFLRBdKHBFCuWewzwmsdSB3PZSq36Z5ReAE1fZpEpxHELijADqPykCxvKXRp56daGb4eZCd7r1rboJZEb",
  "key9": "4WJzZ2uezqHS6LS8XTZ1pFwJaUgevm4MdHbzJXv7kyZqYXd252Tzt9RYSciWCCsV66Xcv8JcBHn8cskQsxx5KpW1",
  "key10": "2cNfBJUdshbyrSJUVUsn8jw1v5GRzvqJNUoYpXB4HH7ZXZ1cwQPyTLDAz9QAkwJA7f8CyxDaiVX9PX4T3QhYiuZq",
  "key11": "4fS1f5neJ7N7969YnLyCu6aQz1at7v7VYTpmnbADRkhkpRMKbSz4nUKet7tFDFv1788dL7RnccMYHV8KgnF6zFg4",
  "key12": "3QbQdhFAsseCHpueJrQ6fydPkJTgiWvaPDzYhknuW3WnxzsDisNAtRAwfrHcTMWjjXq9SdVAB9goH9yaab8tyx1q",
  "key13": "5sx9yHZLNC4T3QvBfZPhRoeACKo1CXd2ZswHJzUJYMez7gvf2Q6gFVuVmvFMz7RaXVsaFYkmdL5Lay5wF9R9CBd9",
  "key14": "G21caacd3Dqy873pwxPj7YCrbM2c1P5PjrpPpkFrBjPjc734S5TKfdUXenk9FHcFL7vXtN7zeJBKGqxqQYKRtg1",
  "key15": "3rdFEgMk7JVn4Lj3pi4zM7wdk33M4iuoxuQxZ4mJ6jkRMz29jncLx4ghmVoUx95tTy6bA7P6XSQ51X67mZqeVXLH",
  "key16": "5dNgvV54S1CQ1g57w7BLtxLWbG7kPh1AJZApP7wSLFUJ82zYxZz7JRWNQPKZYazfiDFCsCXnATPjBbnmcihvoMxL",
  "key17": "GuemibKHmfSbvyD7wjAYGgnRGAL4XFiLcbFexQewSUV73tomt652nHYmvr2vVkTCuhgserHqBkb62CcCngMdhTs",
  "key18": "3GozdGhnMQKUrF8Y5N7yPQ7qs174uSzWLJaHC1wpH2wGGC443qHhQbJXu6reSmKsuZgWDJFfcrSk6g8f3fTsLyJd",
  "key19": "3T3ukHGFWsNziLmzksAQVRLieBrF1amvcEZ53HFZM3mKctJJ3aH8UMf64qZLj6BWz9YaqaRHnraFYPtoDF3HtRCJ",
  "key20": "3gmSUXiq5FJk9vtFgD87vbimDNd1G6A48NcxhrshRtkT5DhQhWvAGkcbaTodrFr6LBxLspTAqTfTt8ACWA9PXomZ",
  "key21": "EWVPA2pCAnAHLwHGyUq3fAnypZjKNTmBAhPu12fViHtMuDiDVBgA5LSejKesHBurheo6ycNmnEjsWkLWT9sH1ao",
  "key22": "3P91XvtjU8X5kEMJJKcTHLKUNjXrgBzuebnre4SQMWFrXXeNAyUwVxVMwqhdX8cmU68NSs2o8f157ebDMJQ1y9m2",
  "key23": "2h97X3zsdcVpdDmQ2QP7ZnNE1BQu1fEW9mGqjmhXUpwicjkh4zCaYuogbmBxGQGL2u1FxA8PufefU1D7VAAq1Mup",
  "key24": "272HUnceMoFBJdjUMYEWMrUbfhp2u5qHa6FLSdxVzEUdsVSVsBTDcTAhtuq4ErsmUUh32mKoRj8zMd5uWBQrgyVC",
  "key25": "EyQKz9gQHoQhuNQ9FT8SxH4b2MHDYSFHhZcZVS9cX4uTmxjv8RkRPUpabA3U2vZs8RtenJiyLgxonNcFeKxiugj",
  "key26": "xJM1JV2XHBDaQpnZAahYCXpx6q932cby2XJAaQfAqrFbiBW8ctP5LbdWFN3XPoCnQEMJ8jtsD3D9Nk94kszzMgr",
  "key27": "3H4XDnLdnyu97fttgXio4KPQDxNTwkrghED9VDQ7kANfjPkq6uVqRgpHo6AcYrLvPCc9nr27wuAN2Xbxj4igrs9f",
  "key28": "5W1xevr3rrk2LB3CSoxDob6BnWe7ysSKHwx3o73UaGa5RPZT8kLfF2WXumj27XYiQSr4TyHekiUvQfD1cc5KYThE",
  "key29": "atLHDeWZjEdU79ymr6ZwFPADTQv4R63doXCkVjZorBM6F3n6sD3NAqJ8H389vdswhXtgyNZ8fQaq5GhURjiuTA6",
  "key30": "2LMGshYzQSVkCF8kbhnvyP6vhKNWbJ2UKUmsXZcVUZrcuqW1vtsDMsFEKz9JYv3JxnF7hiHRKM268AaykHKXuJF",
  "key31": "4zKB4Ex1KTkRNhqTLp7WVngMJwDnPEvND8gyCbt8tEU2p4uQHDh69HehAR6pifxrRXCjB5qsvn3JtU8hWLgKpEB6",
  "key32": "2YzHKKLCHuGo3TWeYDzUyKiy6XyWV4ajZnzVxtDWLr8c5kSsLzW4AkR8dHBVuuTVjcL8rApcLMBU18hBGp2qC2hJ",
  "key33": "42r4f3FjymCHsM1iEG7nCz9jz1UYrEnFY6FSYHvhdLndmLwCFJBHPskXrAUrhDat23qgAgzq1G32sbmC5mRs1vio",
  "key34": "5yD3twKXG1zzpSCPm2q68zMBK2w3TXa35d6jBEGyAeUPfsW6T7bvcFLhwmV9mL6Y22GRnCjzkbu3xsXDk88HkGhL",
  "key35": "2zSAC2yq3hRvZfR6Mmx8JMC6QsfVwpFPZ2MvTwnYkBF3bWZTBmkVriA1DctS5BXmyzLGuGGg7vwry1aggkEWqC3r",
  "key36": "2MXMsXkQimc7UEogBm6fCG9Wgw6bvQuuDJZmFdYNqze6kJxr8wupN9xhu2WekgFQkyThUDivT3taskd1apmrnmoU",
  "key37": "4TUaCBPKUQuyuVrTJs4zBc3CTmZJPy2t5qdaMXcE24yV1JuB6jp9nJBNBQedWmmrj5b9UNAXozzzSgB3eKmMtMSe",
  "key38": "2fBurT5ZyGvUsg54rKqQjggUX9x5bZgnqNAL7EazwhhXTcZmPABCh9aSTDvPVujuDydnKUvfhcHvcWz5acbKyjF4",
  "key39": "5dXCaWmSYX7CA8SVThuhYgZe2tS9f8Yhpv8RVMK8hHBz8r3Gw877A7vVf1MfZWmjssKQsX83QfYENjVppatGm9PD",
  "key40": "3ZvbY7Edz7c7893cvNiiLpGXyFfAMFTKAfhseu2pZCFDPieLHfKEzEsu1SbiUaxZMJHnuPiwQNb4uR4ydpT9yqTx",
  "key41": "5b24UwYgNnv2J5KnGiwtC2m9dfNdsiADseNE6c3bcadkpJgek19FkBajXMeKTAvLMP5pyAXyzxJK11nHP7xqUBkG",
  "key42": "2Lz7wfiLNW6iVKfiaDVNArUEPYQF4pAjX5BMAj6PKbYorkJgGLEPmQn87ZBrUyN9oNezHoTjQ7THAXPf9WuySrjv",
  "key43": "4Q978qpDwBHUHEjT3g4gE79ZQAkcTC7tVgxK5St1eKmciJ1SmA9ZeFPBz8CRephpCp2mTDM16HyRHEGQWgaDwEJh",
  "key44": "3DNGwV1dv85ubQWAxTE3ZCigkouQ973ixNp85RxiZrktMLW1cMFdzkoYaMkVa7rY8Z748NZUfU6e8ZmSF23wkPZm",
  "key45": "XznvceuFboRNPqXEAxZTxYMpB32jvkb3f9HM2DWqLUL2tAG3HvQ7bKJMeA39NynbDjfjwj43i2pmuumJFjzquYE",
  "key46": "3j2pve4yrree1myB1KahaBKE9hvD8YVi5LWhgGvT6gdzZu2PrL9cwT8FcCKdp3hnre1GN5SV3pasPrYwYSvtdBLR"
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
