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
    "45j21dFHuj8SN8krBbFhihCLX51Vae7R7H8xR6ddayG2VTtB1MMXm1c7XMVJkTxhZ1NbbVfDNfsRt7EG5xBhS7Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPspydx7oDk5CAmnPerf8zUqQZXF3AQHiycHyTogBsJFk7EpzzSpsuPFD7z6fyJ9RipMAPUUPqu55ypes9jJaT7",
  "key1": "vaNpSmMDXPBhpLStipzWezTZTfR1P1Q18cXpK6UXb77ECFTtkzdW3CNiDWgUrFTMvCTa7qJyA1d5pBYXjye1jjo",
  "key2": "3oyoXjf5hV1Gz4b3ys3fjwwJsMYJBGPeBnBCS5QtzT3zMbgfbX72qqAs8LUAvtmz68ZoiYEwV82MNerFpD9YccM1",
  "key3": "29PopXreJHBEuf4anM57ThZPVettsrrSYx3oPr7pgkXC4QW22hSzZgFawSMW15xgwqc92zAMXmWfTBkZqccRzhMm",
  "key4": "3U8PAbzEMrAfgsVjxSenkDsLMPoztnGfCEFHRkhFoTAcx4CR7MqKxMT9b5vdcUkeJCUG63TGe3kKX8Uu96sEvXu3",
  "key5": "3UpK4igPjgQ3YAVsxQDxXjouFtx6A9i5N694d6a1ckuGDwJP2FJuH2QoArNmrE4e5Xz1M4D1rwXgGjomTzmHmZz8",
  "key6": "3r4mkNJMFx59MheDEpPmujpocjyWD29m8W3GGDFnJeiW8uwKpHYGcLZc9gKZ6FLn5ng52uix5GX2bdAMn65uA4b6",
  "key7": "3CXUCpK3aSreZk9hBoLSiVqBrR4xTUz6wfqk4tFXxLvPej5LUtyJJs4Ad4UiJXQ5V74BCWGV9Jw9NQdpiqfsyAiQ",
  "key8": "263Bm95aR1Uf7hRDZUV4URQ34FnV3uoSUNHrdpuL8yXk16fnd5upBXddApQ2UBPbK9HpGpwtZ7YbkaJmRY7Nkmgt",
  "key9": "64H4VtWYq1N45eBppFSqHAa8KpnwJTDURnfTQmFH1zEPM4WtYmDSjv2fiAdAjRL3Jbqso13PvnMmqQh3hhiZL4aN",
  "key10": "4gkfLqu4JhdpQjZMRkjdBU4bD8ogLxeXkJmSNnbAaRjfaXpyLgGuw6CBm2B9CEtkCUZTcbHxUCZvY5FPVo5TNGZG",
  "key11": "2Qz5n39PL5bEUFUWYePVP13UBbz6oVcKjrYZARYtMGH5qe68FXZb1mAsRUKYMpqruhpMM5hmsarrWEkKxsVWqo4n",
  "key12": "5weoPDXosk4GNU18kBCSKMj5RAzECxgV8QWXjkjBRmgQKB9tmZpuU8b78fUPee6JiPh1UUaE5dF7B5V7nN2gSKe",
  "key13": "f2v3MRRmSYMBPXE6GSYimr4i3hNSqWJ2Q9MWeiNoi1DspkHuev7Pmy8fgui2ryAFrq7uQJSZdSQh57wFdXGpYTo",
  "key14": "2UZBYm4J5XJudgP3eT1KMHC8QzzNWhsUr1szprmnbCME61eRCGvQHSxCvyatj7vurgUG3ojia3gcWEifqVpch3vh",
  "key15": "2HA9qrBsrsGxtwnn24AGsvciARkr3S6srdJZRsmpphVRBixc3deRZuPHqu4HTNpS8ySqpjqEHdW7iwMM2ThKF5VS",
  "key16": "2rM3ACKnHCe1YgfoAXp2j6FynbVrQvmbmn5RgHdFyvYoWkop8wJMmPWXL9QsacVLUVvoj2Y3YDS46R1fYFGCyWJu",
  "key17": "A4jMjHyKEVeyW5TsRHjB2cwLubdoCZKRdjByp6LwWAaADJ82a5LnoAFVrrhYwKZyr6B6DwGaYKWa1V1LPn6GwG5",
  "key18": "4ry23drM4FWrWC7L59K7ZktT5L1wg4ATmNvsyuuwYBKSGfGKWwLPtefUdUQNfuZJMEE4WNShCTWGC7ZVj11MQW9A",
  "key19": "4CAhMwKdep6kUg6xWxvxaJxDTfyDyABZtGHP7eedGPAki4evbEuFKyN2fnntWxYahBiUwDdcxwcDSBNBz8EeUiX3",
  "key20": "uFek9aJJZVBghL2DxyR6hDMGNV5MijAgyTWwHyafKyU5nhqw62jYoGfDnqKmJQfcBsByLEH6ZHHtRa5uNhHq9vz",
  "key21": "3dHA3sYhY13JcjhfvhLQrbF9xYWLNU4dCNmiVWgAK89erg7WRaxDvvremk58z8RPVhSMmpiE1MNrAKkLdWZDN9Wu",
  "key22": "2D3UbouejFzogYisAeS5ehfHTsGaPMW18g4HUKMtfVQGimv8DMGmPzkhfpnrzse2cYGHcCrS1WDb1eCa2rtix1Mz",
  "key23": "ohZA4TifE9ykzf9GWK9naWppfPzDG8MStAWU5ozcG4TVVNhRCvSekpeV1CGBqiU5ZLhmGD5U24khWoRHYDFDAuw",
  "key24": "2Sus8BZTPNNtq8cETuFQ3D3iibHL77muxSsogL4WVJfFQ5gGXxiDVPVrqqwuETewdrc1sodPD8yzFRCuzQ1CDwts",
  "key25": "2oJepPpCFXUeacYsSnrypsbnLZefafsPCrRdWTaQ7U4uKFR9GoqDs52ExLWqbdKVusLBWrjA7JAouzFrU916kdMa",
  "key26": "5yVC8EVtzJGvHUBewuJWpdQhyCrCnXWAUr2Gk5MjZcjwnC35p6ZEg1ffzm93nZ9GEfz2FJ8sBkPktHxRxRrYFzuU",
  "key27": "2ZxePr2UoAx2yCQAeKVRmKL7KCC8wk99e3PKK7hb2V3FXGiuUZ7wwSxNNRjRx5LQbfa2RpkEdoSRFmcur4B4utyN",
  "key28": "3A5TbMBPrC4iMwP2K9Gn9pnEzMsj6EFWDNsVa8nzZnucMrBwbRvttxP7KzW98TMpXKtk8XrrVQYP3Do3pXYGhGTj",
  "key29": "5fzp7vWrKjSb4CjdHBPTq1s6Yuqdo3gu8NhvUscFHSwvmKRCEgeNKy1davBV6vVgG4VU9zhvgMQFkk2wcrGBwxFj",
  "key30": "3AUk6HgZWvmHcCikFpTsuJ61WLVPhhDLmom1vhK1FaUjqa9sn2mPRwtoah9mY3dQAahW5aRHWwtckq6SaPjARpsh",
  "key31": "5GKs9RTxJYujx8z19LrTbaYbLex32nCv8vwS9nbPCBFLLePxVJ6VSejmuQ9C7NeoCccs4meZqkLMVnwVqWKfNdZZ",
  "key32": "532bZTnVu8dFRpULSbt6SnSDKtouxzGGJWL7d1nwrnnfddE5qmDUeEt9u3A6TBERKzsnxxYZu6necSQCytsnhLz9",
  "key33": "4Eq733mBwmXKRPYN3vMfVXGYg8AYrgrCUsFZpzkdKNLXsCVH11VhbzwSxUJRncd3hhMNYU5BVRQHWHALGUT8DnBC",
  "key34": "3yLdxQhNN4PBBdUmbhW8zPg4ou1pXXs11MUDffLW3R7g5jao1nmeBdpJXs9VSJRtiznBg3qx6G9G22HipRcau8sd",
  "key35": "4VYu93kJQedHJxX6o3RpWskTJv4qqNwaMQ6wUBPVmZKbj6nQKq51tjWSDQcUKmxNwYtrgu21iRyGo3Qp5VG65bni",
  "key36": "5NwHVVTVCk2LTWpBpD9cbZt1GxRAPGnP61jQXBhNqngZqEDckZpQPj1AhACe9C6ifxEyaU9uuaEjq8fdkn5UDwpi",
  "key37": "RowgRs297U2YzAwuqYjtNS5DFhB5sPtxdLaHZHQA7WF9UmF6YQHmqgYVh5cdXPuJB4gysTxgiQwKbimeoeKbvGU",
  "key38": "2ZjfhaEV3d5ySyCveg4K5KiJswSqEMdA4dBGC9EfmeBdWLP4SpUXFtZ7NkjeuLypCoUkm2rWxww4hd1ZkbjkGUeu",
  "key39": "599mRKqTJKbBprNEhZ7EcLekTSyRuufgFkA7CH974WFHcHGuLdCmZasjiYCzyJFsDzNBKAdWYemVsHvf1Zi3bP9s",
  "key40": "ZcRH5fPdAFGs5Sbkod4enJVDoXwHpYsgDr963Caq3kuqsEPHbTSYX8B8PTYAV5Me8sNpXCYDYCktdf3Q5GRRz9S",
  "key41": "5jMvcuQwfcJEsZieXee18YnT5tj2WeFQ2CqP1xx84A41hfZqRjmjGoCi1SeCffBoRyowuj4gWH2vTrtp9viVp3ki",
  "key42": "2wxAgDU41VLt75vcbskhHGmDx2FW5dCxcGntVNDwzE7BZCW6tDwDQcXMUMQsyWdXWBvCLuAJTUkJHKipCejio7BB",
  "key43": "5pAqjbLVdiNmnpgSw6bgVFnkoAnj8rrN84EUP9qDr1oDPBi36sziAtEsfqgdHY383moZUfhYK9EUrjanQzR6amBZ",
  "key44": "u6gph8zLStnQuwARuSHum36oXa6nvqgHRQsawpA3vvyCMUd8jSvvuaD7Krht3KYknUYvG5vMjgmQq8LpkT2chc1",
  "key45": "5UJyfxfwTBiBxPFSktEty3kgSqoLDEhCFnSjiXkFQnw1TCy6ypF3njhdZCeR5CMD747CT9S1UZofHpTyyCnFFEgu"
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
