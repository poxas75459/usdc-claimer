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
    "2ZrJ34rS9AMkQiVV3RY112jTjTikjVabnnhj8VXXy5hirCbXYMr4kpXpCgL9BTp7onZnA39mbz43zcaiAxUKaayC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYdiMoA3xx476P2bE1AN4tce6VyzxYy8h1MSszmxrEYnxHy2iGuJmDcvTzzXe5UfSqHWdQV2pjMYJMkNLDBPsBi",
  "key1": "3pdhSA5NQQs18ppaJAVRWCfqGdScGFCRCgUDP8E6EZb7w5V29nX9dFzNBatjje7Q4ob7AvQF88TYW4kmQrtsxJWt",
  "key2": "4PYUeXZhM5YqXe4CAi8htpeRYiq2hzM7rpDR22iiAN8V1PYVCQd3DmsiSsTjSyMf6MX2z55LfWG2cQxCXUXG7y1k",
  "key3": "2Pu4Hb5rybmAhGzdZu646ApYdC2vLH8YXnjKESfSPNF1V9NuzVSLKPYEpjitn2wgsuXtxFz5UU6kQ9HHokBVoXG",
  "key4": "5iNKNASPvyXHmX4S5PcDTGp1G3RUVAWmYfh7FrdKvhDnPbgNRHCK4XQd5VXEsmzQ95TZ8kV5dCeDEZjKK8T5eetK",
  "key5": "4JsnNK8fy2GrFysZGVMBwWsy3wUAzLUKWcWMVvsJiAnbZdtwVCs3GjDhYYa5Zxmj6i5C4qxwB8bzrMZ2DjwH7mn6",
  "key6": "2b6PwKM3gZ7RcS1dJB54AsbEZooqGD3J5Laduv2kziE94s9AvxQYPiQkFcq8mnY6Q6LPeKEzzy4asFUxhBxYVQqb",
  "key7": "3nX6ymou1ru8LRe2p3vMcf41fPh8uxdLSDR6vdwiwXrPgtfJL8FB9VxLw8HdcMUjNWg2jYtSrWdHZWdbxMnEMqRp",
  "key8": "2qm1nJqa83gy6sadJEzN1Svv5wn98BfwgwaoX1uHvbtXbGBPA4HZ5UTdMJedDooAscGR4Jqw7JNSzqppU9LKSCz2",
  "key9": "3K1x3cXorMCNkoi5wArjoSL87KA57MGWh1LbEArvQcGUX2Wx1vhJ2JwNMH671PnecjXKgqmk6oGckDmK5pw5RrLz",
  "key10": "5J4D1MAeQwjEEBhdM3qCGBHag1ctWddXx1qiKP9qcpLEPqnmwdcJjPaSuJmGbWVuRYCosB9sEs62MsSGqgUdVPBE",
  "key11": "3to3k1bXvHuXUUCRRWM1Nqor6LMGx8aT94bNNhopkCNAn5G3rtRosLEnb1cczNE1dcnefBy8SPDqVfScc6mMudat",
  "key12": "3RGnEtw36CPmbcPjLQoHL7ixyXVRaKFK6pGuChgwFjLutERiBRZmJ3jFVcBfUQKkuYZfbphYkTGF4naCrzNdnfQn",
  "key13": "2PqV11cYSKRD6Fy1BCS7SKzResuqArJUjQWsfwTFJ8eirMaWHPyz7FB89yUULjDuBUuWuxSWCXAtRBeR5wvvzLHr",
  "key14": "2kWBbRSRcRwDk2AQE13zShyQNPZgrEeyuWqHqZLBvo3zMmC3EqV6GSM678hVSB2SfCBW1XrkGdx4BESBEvA1VUkD",
  "key15": "36HepQi4h2cDBV1K8UM9EzK4dDzXAPGtcAC9TTn5LBHmfayR9Bod1muPqeVz1jnjyf2F2Rxa6xYVfWJpURF7JDyP",
  "key16": "5xr7yzEj5QsvWqd4Fs5NGMs43vdupXSFzN3Rwrw2p24AHpj6SVYHADXU42odQ9JXKXX79fkBLta9tVDFH2CgJZ8U",
  "key17": "3Xyn9z7ShRkSpyTQMdtjV4yDru5F2QGAiL9QJNUDsfaDJmJ891aa82RkKFP4WQsiXgHu9WJ1NuEU1Fj64j5wF7t1",
  "key18": "4Ws6tVuuWgEzqtFmHKHJY2s8FvtnxgLJGV2ZM66F97eVYdJGeQTmxjdNGaAwG92hV9Q49ASP96THyr1c8XEodJqh",
  "key19": "5WyDZdRx73xr2yoYaZSUrMh7wwKBucz89MUpg5drY5RzERv7oqrGaF45yH2hrxM7pUTmXLVrTQudrYYqfa2uySmf",
  "key20": "3jYpRjJfaxX4eW5N78cVdzivXjd7az6nkz7gyhc2tHshHeyiBe2xd2egdPAfBb9wgo2rrUSBjD44zE1DeDRfdcFH",
  "key21": "5GAMvfUxi9u3ipSPZiBbZBYwDcx3kqR8aMYicviDhEXmuZ3TGJKYcFjvFVCNsc1Kc1j6ZhAG1L3L4wpxjM7QdSKJ",
  "key22": "5R71YZMK7ZdtzvrCTNTb51Es3XqnKWy6WjfeX5PwZUPDSzQa1DBJMhMP3hDTuGUQKj7VQeg4S52qGADnRS8ryzud",
  "key23": "2uohLNfvXK3X9pko2pfxpZmoCHMzBd6Bxr1QZXVPutyhhrZphXhBPxjcZJbE5jkJ59eYqTX174ex1YF35BcSD3uo",
  "key24": "3rqdKcEuXxemVnmEojBeu4zrD4Hjpqzrn9tBJYZkt4h7SaXUmwEYEQKjJsaocHodGQHCWQjrjM2KG2oxbWqPs237",
  "key25": "QFz5w58qX5Fze1ttUvWQAYCTTyMTkEyWXNnGdJyJ3KcoPNte5pPEySBfU3hMiJBDtUtmMQiFaKaeUBy4zbJc4om",
  "key26": "3ykeobkMgrPLdpD2um9qEYEi3hbMimY7pYygo3pFTZT9G6YwbCxY7pfZZeiHvYJp76BbRWcRGYDzL8MMVQRT7V8n",
  "key27": "5UJfEe7vQCPrm4mchPBWyZXaL5q6n75vC7UvFtjpbQksp1V8tewAHLGW7v8gVfkoPYaG6nLVEPVudATbksEr1Mnr",
  "key28": "eMQL3PMt9vQHATRgBefeH7rEaANsrNdRUhLV2gKu4DF5XJM8xp8448Csrxhmb83u8wR8hqMYFMxHg4VW32ZMXhc",
  "key29": "mXWPqc7xKAYybUqAoJVpc1XrtMJLy7f9smcJBy4YspXUEuNHPTGzJ1E9eJYQzdmndKmPL3FhuVJfyns6mKqdCNs",
  "key30": "KEnGoyAGtPCadtwbgYWygLqWCuRwSRZJ7qu9NApikQ7acFDiMQ4mfe8JhvjQXY82rXKvhYazWed6bF3s8wtVRaV",
  "key31": "vx89EsFTAfXA6QAjm8MtHNPUqnGMy7Ds8P3ZUZUKsvJnFbPm6xxiVF23DucXDkE4bsBcbwenLG96FNt8oRjVnE8",
  "key32": "2uDWPd43iKeeUtqabXvpNbynSq8m8Hf7Xs42cT8sY87R7E2uPUk6oDikqjHnhdpL6zY9LyWxjC5j8A8enunwt6Hq",
  "key33": "5f8AE32JwR7iVh2bAZSoUC4cXLsUTDUyeLnJ36tejV7iwMaA1pU6bRs4sN5WCSMjrZNx725FKUwDXB9G4yYuJ3TA",
  "key34": "2zb7FegmTrwd7A4tZa62rhV4VahHznqXe2aZYYn6iBrft8sTa4kHCD6SVt9XGsRyiEwuk7ETnDDz98bZvhDNwVoB",
  "key35": "5CZkTthsuQq67QLShpH4Nb9Ri7EGDcvzm2AjtgFqDyLiVSNDoMwc5JDcvBEkMg9LJnrwfChuDUuJW2pcts8Ajic1",
  "key36": "2yaQPKzvyGcUom78xs1zgvSmfJdxvKU9BL1KskA7bkteLxv6nH7XraUXn6NX4AA24qeraPCC6rpA8p7PdgHk67Dh",
  "key37": "3E6U22JaPkFLCLrnASJz5hVNxoPWjqe2YmA2vwsPJWPcYpAjvrhX6W7AcHAuGbVqv5fb8TKm2nUw4CChkh7meLmZ",
  "key38": "2XsxfLVCDsQ2QZRqUS726d5VtBhcri3sCXYQECYVgRVzEzssQNhqVtdSmNPDEKJFKhJNVzwnB86R1bbSTwy6ZHKk",
  "key39": "5ArreJG9SxP2Y8hedjTf4G9PTB9WFa9gLMBWhf3BMbNU8XroBipmdbmE6tcKFwuMuCh22E15ME9vUTyEJYkyavDf",
  "key40": "4rqoD5fFmwwL8vbnnzhD5mvUnVbwa5dZoxPpccmBpcNtsBY3YNuKGoeeYGwZghxMuoA3DfPadf8uuCW5uswmEoUo",
  "key41": "3yXHcVz8LA1AF5uKSFJv8JVpeAHAP1aPF4Gz6Zn7ranZHMLgn2CokrdWpAJXHMTFzjfWbwiFduitFas5SeiPTZQJ",
  "key42": "61rNEmsxqykXEo86kVmDAGjdZTHBGJFPNR2NVFQeYrm1ouQ5qzSUfa4DtViPdHHCx71PBte7kGGnZGU4ccr91PM9",
  "key43": "2LceJyYwkveBcd6pSC94rKZMovTmHrj445Zfz3zbCHActntaP3LMaYB7e4CeBXrx1D4VwDHsthxsUhSk9eYWHnv6"
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
