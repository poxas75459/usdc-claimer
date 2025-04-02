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
    "3Jz5QthTxo892uoWL2PrxzbW3pTviMt4x7bdvseCFw6ShLB8nZk5kYYV8QnBo3tyoTcBaUEsPXdyGJST67VRz9kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KV8Q7TTM9LPMvZWYTp8ip7nibYT8fbiAPzCMqQeCJ4gmoss67jSAGzGFPBivVgCxQmQkWbUYFDxTqfbHY4QNrSK",
  "key1": "KaaPJeMsebwJ69ByyZ11mMxejDQEGcTFvoRTAbd8DWSJMd4AohBrRrQVynFcSoYn1MG24TrQKLd2V8LMDfUz96A",
  "key2": "ydwXThjAwpmBgH9cq9XVM1mkG6BpbSFj3KyqCLwBrrbZPwmKcDXVk2A8cRCMkMFKxUabmCR7f4hNg9pGSWSYWcH",
  "key3": "5T6VTUvFGeUJusGe59oo5G4zR7Y1CREcZEKiJ1VRZp8cuzAfsKhx2ZoMtx9jzV726u9ekf264zXQmatNqosSuPYd",
  "key4": "2jbqh9AyuRxBLcwrpkhteBRk1dMi4q5Xy5hHZXhRw4i4dGP2DPcP4vZfWuqXbghUUbxhoAvFB1eEjK4QXy1stBSG",
  "key5": "3CKF4ctViokbw2R96WzUrBCoNHn7tAzwhBtGAMMdzJzF7zEQyDKVE2uY31SFkVn7t9yh6qY13KqJgkPGqgrhMpCU",
  "key6": "Pn6ugUTLb17egqKnmRRZYG8yvJ6ZELiziMoVXfmBGs3Ykj8DwPohDKGZBzqcGZjpktp7BtBWs5ZVuQXJcrndUVX",
  "key7": "4H2Gewci8rTndubfBU3DeR7YyhojTNXRHf47qihBcbBqx4sBgeAiDmogwA5jMS6QSicJCrfrbHPRsqNKsz3mc5aU",
  "key8": "2XM23wtvYs9JpsmL1GATkaNkMuGuzRiDATWTGMvfdbcFdRykhaGdvNG3n2Hy8EcksVXioJWHT5mXnNkJZProNHmg",
  "key9": "3ZCH9EAUfAd9hH5jPVeoR7je315TGuQ3gKNAiuKfj6xvoGvgGjHidaRJXGpEmjnbhJQ1sEt3ZaEpk8FdcwQcs174",
  "key10": "5nRUwwwMyGXhtDieEzpjvT6iGkYsvzqQUAMfFWTsEbCMEEM69RrG3UjR4yxEu9x1T2AThSBsw1rLqwRpyMVdgms5",
  "key11": "62tDPbgSKXNhPM4HhZX9TaVx13tSbDF3XgM1ddQkFxcvFC5KqWQD3Vb9Dpe4TPd1WBJEHhf52ovR3TamKSnnabWa",
  "key12": "2qpj6V4Br99ixDHTPYuaNzSyUuHouKtm6xVKr4KnEk3BgGTUeWCFzs5a75CnF4ffSkDfj8dkqVYkGbqypEJLvaBN",
  "key13": "4wnncGKUgwskE7xJCumVH2U8aFiYtqKQ74BRi4Q25iUmePHcd7s3rHM5SwJoDEyHRxs15uXMctGCudJL9cpCjYVk",
  "key14": "2DsvZr37bvu9bRLmpE95kfEgrEkkLgJALYFKGyCJ9KFUqBcCmyerY3KAm8PXzQHWHfxmkruBXWiRsWARXrGGxXjc",
  "key15": "3ns8w8eiJLHCWBy5PVaHm7Hz8j5YRea2bAbwjDxBF6JNuEMeJdpUgsRYpg9gZmrf4LainM13TMYDqbPt6MATZPpq",
  "key16": "67CLvbW5xdngvznM1gw6vJ9CmwWqfNBrBNxEhTE4pGwjCDP8KJSV1BEekwBQam6GbzmsaooksRoC1ApVBRRL87Qh",
  "key17": "cYBABJeMBEPWE8fcjuZLupbroX4M4ksSMdX42BvBDKVc4Xgq66qdXxsWj9HsSEDvSexk5KDmpLfuBU79HAzqxz2",
  "key18": "3jZsnBqx1EfSHVdN9MUdrgTADvgBbSdVt7oJnsDMrZVM1pMuERhJuD7TZMUpxaLp929YvjddnUHwfH7Adh8Ycyvf",
  "key19": "3zBjZ24syd43aupRsURonURn8HdJtTBkxJSbuJX8FgRiji1T2VQX8uqwFRAZyU73gcn3jBmTCXQxHk3o2xdFTRwL",
  "key20": "5QXZAAEmFD32dN1feYpCZ3zvoqSA9jDSAb3gU7UrXWJR8fQGRPrqr2TgahcWfbW3VFnzRwTxPzjshgbthJRuWLap",
  "key21": "2Rct7ucHV8ceS5XCtMuZjxNHLp3HiEZVbDBL3oKLxiDxvfBegcgrBtSpPQYvMiu74t9Htu3FFCTzaHwVsvrkd8Wc",
  "key22": "2y1rPjQFYSCa4GzZ3isoqLSYXYUqjRcdJU5hPg6VufmDJ53NfevDPK7auCixNvojhPpcByGTwWEedSiPAJydqPde",
  "key23": "2MSvs9uuF5rp7TpB3tN5srd2Q8aygmrSWUXi2gNKWGmzAJzABAHLHRrgtCpmRZg5dnrVyZuiAk5Y3nH8C5k5JULZ",
  "key24": "2MvyPS37xKqBHZzvUj21FekZusmgWwt3FyyVfSn4RWQHdCcPsBCrFc2vxuzFWpoZj8KC8BCwzg43N9CASwEUMfxX",
  "key25": "4fszA8w395wcD2xpSEJwxJZaR98XNhQiKqXV7vmYWmQeZxhRPtRqmWaXMLBTESaaoL9w1qqkpnzxiKYQ6rdeWPLP",
  "key26": "vJWJAwtvNAqXLEMRBrAhQvVcnWam5BNkrznuXsh37aHGjar68e1TVtmiJBJK21aD9P7iNDhvuopS7VZGg5AUdfq",
  "key27": "2UcFromWddHj6GvwUzFjEpeWVyeP5q394hDL53v4sgZRb6QkDkAoniDc9Rwewm7yFpvVbzJkfTsG3Sjy3Xp4NWM1",
  "key28": "fePYS7zeJXgedYXvphV3vNqbuu4RgKpYF8YLYnU7CADByD2C29YAVcHVpgtnUcRgGVqLVXKHf1gaePa98mgMWaa",
  "key29": "5oZ9wGFMBhqnb8gktQCEWea39XNXJLUExd7PNvtVR7G3sKB1qM4s53oxdELJEGuc3PpLH4YQ6xCi3GonMimwkqBp",
  "key30": "2aX5yLjvKznsVb9FAn3B8VxkWa1mNDRwyzbhcTFBgfRp3akYV9gxLDNxRoAzzWHKjsQ6uQ58MA4fMWEJP88VRqup",
  "key31": "5StmvAFnvGi4pCqAsfstVj5D68JM7Rb8HDp3WtYxZtdJRwAHctEDuVWYazPspWaSqnWdoRkaETqKBYQFdFfNW5bL",
  "key32": "2z6FXHS3dX1vgSX2oLKt1YdoY1d176k58pG7xHSYqSZgNoFMyaPstsXtsMsk2aokKpxgaPJ5kU55oRZVB62kg87R",
  "key33": "5a6CpE79fkcVtDtnvjE4F9jTj9ofwEFzRJ1q12cFfFojtaWZtvHhRiGvGj4WFwXfCrnXYZc1AUw19pQm21HD5Ecw",
  "key34": "3EF1DVMUvnJ99Vnn7nDRBx8WFq2vBQ1rPjsQdTmgArBXdMqWXoPV9KvHc9YwjWpsbCARxzBBKPSZQvrvznFmtJtd",
  "key35": "2hY2kpfeR5CFndMMPP5WBeU4UcdhYEbaYtaKENwTBemjJsGYifPuTRa631JEBaD5Ex9VCYtP4vVNLGepjMK8kRrC",
  "key36": "37tf3bvoKegtvmDk9hSphwGEM5iaGX5hbQxgkeRLy84JMm7G2e5A1PRvpbgejAu5us1QpyQwPYRpnp5Jn5PHgSRM",
  "key37": "4hUjYi4WwuRx36ZyskjPzi55pa1syJLTBgEmKKitofuFxsHNup2y7YuS3jJ3pNKUAucyM9xwZxepNHPTwuF76MD7",
  "key38": "31MKJMxL59YdiyiyGDDjTf5ZehqpSUqFC1QcUBqtNZAH5aDj2cWNgeU1R8PVurte5vUQnYv3PJTCwr8SeGYtheLF",
  "key39": "26wTc3yJJcEDQkeRuvr88nVz9wNzCzA9N1RXStub9V6y43s9QHhYhEEH1vMDUXzjCoxXqW1d2HHpWpeLJsVS78iE",
  "key40": "SocZRZ2b1K5XUCLcZCLkdzJtUd6nueu1fbyKunq14NNXmeb4HUnMLcLoaxENtdW4tVWXdysx4xp9ThkhNbr9Nxp",
  "key41": "4SUPRJr6VovPJRpnHJJ4vVm3TNYhidRrknVWTkRQRCKPW94PeHoioQTy76h4kLqERzwYTTHVM9c8USspvCTcVeST",
  "key42": "QqZma9U81EJWdrzaSu7szeQFwApx7Fi3VCj8RLAPEC6ex6PtALqSy3CDsqDAYCBsCNNxPLh7TwFkSpFxDp52CZk"
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
