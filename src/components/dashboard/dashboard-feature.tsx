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
    "5HTJzMQbcHFoEFpwok7W1Qbb2cuwUJHsZfqS2Ek7PdqTQd5sTristefJeGJR4NUirJraMbE3csHcnm28D237HizW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oWh1wfv6tjjnMVcRPyiKckhkbT5mNi8ZiS8TbVkTKMJjZ5nhEhDm598F9QGz2fTuPmfJuBDr2M3nMJ7wYKgLcML",
  "key1": "5UTSMsCji2RbCfviBq26VrdpMFucgBtvGWNDfD33CtKmBJYFMCBcR8pPKgnJ9W4enTEzQPZzPV3fNfMD3QViabCf",
  "key2": "4LTU8Xv2Hgs6T1eGqTxb5mzPN5xBudcGzdC5xZ1mnfvSyDs39AqS37qHy3qKduFU1whaB1gn8kA45kNB5s8zNqzV",
  "key3": "364UowaBKUpzJTaCP2Kt8XMCZ7SskhxqejwEFZcy5gjZ8uA3CtX5WvLuQyWEn5tM7wtcmJDYGBBKDbaEHkQaQwBu",
  "key4": "4d1jmyaXCzfbqdprpkrsKH9HhdQPb7o4J5HEW8nnyb4tywRcomzwfiufEGR3pSMpitPVBU4s7gSmCFmR1EPHHWwG",
  "key5": "4vqa2JuSQjLSxADbESki9sKnkVGwfzWtzQLvnnyyrQDCGiCmg2t1hF76QPsunaiJez93wfYEjqNyHpD84XZnwzP3",
  "key6": "3sBhmzwMUaM1JLTrZP6N2thsvHjaJBcTwjVix6i982DtUVtxVu8ngF23QkwgFyfR7TdDj6RKoqdLPvaMEomDWLuc",
  "key7": "4Bt3W8zJKLwVuXoePP9XoNwHdXLDmtpmZc96KN1UE9r6F1nvf6S7dChbs8Bpd8egkRDMsGAABb1uUKxd5m2TmTNH",
  "key8": "5Z1BTfQUQ1WhuieZnvK1bNzWZ1zvuFrXkFY89B6YDCWj6ehg1wRy9a2MUVXVPhcL26n6o16uZ5hmcRDtWAwKZikj",
  "key9": "3r1BW9kh8zFDonKq1u2qxQphChmQivLDt2mNqcfidhFV8tSFTLeafNa2qtUYmXGrMHcAe4zv6C62ZhA6BVpcbrEQ",
  "key10": "3H6oCXk5iavZCQdbauRzbPsdWAMBtfP729cZMLysqJ8EMaRFJsqWyXQi5ngNHLGkJS1iKAeZJ2Z8srZ7eruQasM6",
  "key11": "mpSMH1gJhSrxjh1SAmohWck4unyAENAZvpeAGE6ETZwddexACmVAn9TZRZP9Lr1dJrLgcsDKdyu6Y8FF5cH2pCv",
  "key12": "5Py666wekbPfXsm299cbKBXVkqWiw42AM9F21DWRc2ACjiVg84Z9Teha16yCxF6W93KYjXbz3QJVrpWY6Y2efRN8",
  "key13": "3PJWFEEk6L2U6Spf9S65fsW3De3z5sZTmWXwb5xo5EtoYvSvbPm4QXhx5pd7MFz3bnsDkCAcp3StYZpHm5qL14X7",
  "key14": "3HcDCUYyuVQXwHYxjwxDjqHFnHLaWza8knCVXvW5iAv2o3TtrkrUkzApNHP9GRe3Jfhd9VAWWvec6taxrtUWaUoR",
  "key15": "27WnSztjisAev1K1h21KZpLtejAPrCsD3ZaxfbkzVRCkGzYSPdmseMLxgePoBBjwi3J9zLA1kasTftWj1Nmx3enW",
  "key16": "314oN5xqGQfyhPeTV9FRoW1sPHN1AKV7WhA5V676xCvHZTeHaxiMmP7VEwGJrU6s1JqrGZCWr9itpSWL8yZpAbhB",
  "key17": "5yuGzYHFtnvZjqVhccJVHXcLNMz8rmyg6RNbYwGqeqRwppWNoktRKDkA4YkrxUiCaUKmVDVVvkNc24Tm41i2Wejr",
  "key18": "f1twMFn2RcpyzTbA4sKtuidHdW3VdpGwH51dYFw5VCvCRw8HtHUAb2smuU1c3nkgSfUfEsFCeRBo98H8nrWhB5D",
  "key19": "2s8iA6FCySP69Gy4SmTEyy5XuPPSBaDuvzekVTkqRhEtW54z7Em7bspzvbAApptXmzwsZGoUqyDEfvofficma2nX",
  "key20": "3rBHgRKCijJd5zFA8zNXsdGL4V7iAp6CzLF5pDwL8i7WsVMz9NkzbhJHy6F3iQwJiTJ1W3NZwePnKWCfsqSh16PQ",
  "key21": "vnZBeTXXg5r2kt9rPAMne6EYU4pMuD1StZ1ZwgRwnmFdujQkEov8nENCF9QLxphpTALkX2rPjzgrUCETs6P2Mp4",
  "key22": "2SczpUk3EWuKQhMDEjVsPnRCL6motB6ddDY8UMzRoStFc4mqJei8XHzVqMrpnpbs6dmsNQNU6bfpyNXjrjSSpzpT",
  "key23": "4NzKkTaDH6Xcjin9nCwLTNJKV9zfCGi22kmAw4h4f1LzqAZGyMkVXzCEpYNsWzCpoTzbZWjWmyZjcibAShGVnkG6",
  "key24": "1XQ7G4kADLxoCx3DDHm3HWS7ZPjzXkG9YBBXSZ1nx1opwmCbHBPGh7TMq2nSqTps5uVc1toWj1RBjkFW5NMerH6",
  "key25": "4nwZFjZFzQ9e6erpmPFv6rtF44im23F5NY1pyuybMpsJinBHwQ7yh36oNrdN8kbjsWM76rJJu7W53Gc5m7FJBKHu",
  "key26": "2KHUKGFWa1aqR5sZH6uDsB8GARWRDxMssf8dzwV2gNTh9uLjNybxGEVgWscRaA7Tif72sMxPPZRptB8GkdKsh7vK",
  "key27": "5neg5KFb5i9AEhYHYr9SUQFTZtVXhSaYmrMwkcyGZDjMjuy89X9LXqLqa48RWtRQB7PGiKb93ycss1gzHudYWcC9",
  "key28": "5e45YA4vaMv5p3Qq9NfVofg7XhAtcgTeuf8bDHDCBqG4F6kNwn4bL5rwx6uNAh2twdRigoA5M2mu5uWquvNhRUzM",
  "key29": "2dEZtfjefv9dbrU2VxBLKXhJCSGfuRnP6jkFpFdLJKYf3nQXa7NbhqRLspojLbYzbLLd7b6PmusXbmmWD4WZbHSX",
  "key30": "37CqeuU1VpTmaYQFhjwaNKcKZ8b9cgG15r88fLZkgyZxzir7ud8wkJmHmJoXGCRgXEZgGHX9sGoPHX9RxvoLME3K",
  "key31": "5uqARorfEwXcpoTS7Jz4VRH2VtL7i2h6LNFPt7yG9tVKzQzxrcVfBudqp1CnDLKdLQpoN5fV1gbjvRMnEUTGmkh9",
  "key32": "2mErfp1y1ZkDLDSGyrEQmD6GxCpYQ9JENVDmhG7QGM4tTBphe6Tmp1eiDuQDxLLhAJq8Y2syTgdi2xykjZjduL2s",
  "key33": "iVkuACdwqvMXMMrqty9TZaMC5anD2X5vrS7A8onJWN4xkC8YMBXwgWXFkWPv3b2Ay3Vg7QjXdw8TFug7MJM2Ldk",
  "key34": "33ttkmegNz9vBSt7sbcJ55qkcioLUxpvcyoxa4SyEY5wpN3xsrGzsMLrUh2qCqQyEi9z1TjSx41hSVXLRJP7YKrJ",
  "key35": "5BBrbE2J1WUmxsVyXC6CBZsFXEaVP7gHq15gAfCtFmoBdTBdtNGzXYqHRwAqSz99Py2wo2KewtznZ5gzCG9nFChP"
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
