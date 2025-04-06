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
    "4QCGeBczfepVFsBfQLZm6NWGQJ2Q72gFPXZBhoUU6u9NS9sB7A4oeHC9tucNtRSQVSdGmHM2mNuEgX7baetJqNuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kYdBZkVPtuawD9sWjsc7a3rbx7qd2AYhJCiJzJ4wce6J11f53r3vS1tJQswtuiEVPfn39TymPgF8BMBvR8eMjZL",
  "key1": "3aLDWc46XWdABLwtWJ8djSshiyVN7WzD3Gxq1kVoXy24d5ZVii9uxQCQSHUeMTksuUXUg2Rie9hXqAJU4XVL6nxZ",
  "key2": "2wEJhNwsVcDACfCnMXHUFkfGv1KkjowL2dsRRMokKia8s9TLbMdL9a2qyVLCG8i8CrwbexMD3p7tJA7nueoR87mC",
  "key3": "4dtLjEUhKVjPv4P2s25MBgbzn3N99iGYq3d1s2QXFTDU3mY4jmRo633N81AnNMS7G4V8y4PNc5jnkCXqs66p4p4b",
  "key4": "pZ3cXeNHsCpGFkhkJdn3pBKYUgfBYzKKjJDfwJ4Psv3EWFCTqHm8R3z8MpBhZtecLwBb8BcqvYzPjQr7UnikDNo",
  "key5": "3F6vFGof6BNFAmhRFSUbzhUsXQWrdgwmNyVGTxCvpTbNkWt6P277X4Gz7sXxri8PRqRojwh5yCGEpVeZ3f57dpZG",
  "key6": "sesmLa5Cie2PTLCuno5sjEqTskY7n8gFWw4Gcw5iY1kmRffQXHLnFXQCEXew3NpDrgTsfMcEfHcfc4v7DvaeKrZ",
  "key7": "GUUXNQdgMJrf3xCsNGAGoXrEqfKdTwR82fnrafXhHoqj7poKCDEGUbhu7hrALXb9maWW3GcJeW6Rs5J3TbUwob3",
  "key8": "2LrHTkbTojWEsh1N6qEtKgtpEozUVm8kUxqFcbSAF4PW2nRjeDgyop3jBGAHFK1zwWjEMDg2MC5oTP19CNqok1uA",
  "key9": "3TSxA5b6maQ79F16tYcwo5yphKFa7FMCDEMp5iPzzDnb6cBRsdWdzinF3YANTMWQ7rQLrZpq9PgJGA2ZSEukYe43",
  "key10": "4Re7uRGhENqPFPJcRMUKNq3NRLRfJkWZexjBpehVyrMdaBKNqfP8zYSx7nZFiz9DWFAxwH2C7Gx1qFV7bVdXrK4s",
  "key11": "4zzZN5NZFF9yLSsAkivEDiMkYZo4DHhfDKMoHMYoLQJG3uMmwwzo1GkcfUczAEieGW5sYqyjPHLJTqZYF9ps5ejv",
  "key12": "46ts5NNLmL9nfDQR3PnVU1eP8MRhsNDjfguc6Y3E5jEGepxLztH4UVZdfnfYYXGzQRWHoDoFGiKJnWEZB2ecj2bV",
  "key13": "KZz6KrwfwNXa4DuQ9Em3wm2we4rNxeNvGiQy4aVaEEp3atxTjbRtsEnPERUWFKUT5LsXg2izjTXkP4jrYeDe1cP",
  "key14": "2WRUGw1qzF7dUcTCnDsgwGS9nd9aNZXk5j4GyisFVadWbBdDq4FQrKdRN8AD4UF1XRC4gHmLR3nJ235vPnaC5vFA",
  "key15": "5najbXx6ZTWh461kSd1vPGoA1bfmb73E7TWWHM8yECX7yNsS84NDvQfE9giB67aRRNx9HspoXf2eh6aVfH4RVvUM",
  "key16": "294SyeTGVgehc95kzSVipSEH5ZpQZCQVZPM6rZpeMoy2JPt3c4TYUND7JLiFopH4nDsCHBjYZLNM9wQunf5EB6XB",
  "key17": "mVWsZGGm3QwJTSCYiEF1XyepWBLbWG3NB99X6Kcdbx8g7v4k8FupNCCELi4ZgrSeqPuXxmXEZpdzMbNoNCAYC2k",
  "key18": "2iQ3s9k7GWR6nGnDV9NdkNseXJ7eWiZbj9UwiqhzYYcQLvgWu8rfXZ4rHSmKoBcqPJCadjA5rPbZJyw8ZfEZs7j8",
  "key19": "5wgzfhZqdTdF9St6mfdA8YLcDNf1xZWgRdXxQUALveHcNtFPRq8v6J7WUNyW969irBndopEX85DghHdc6CF2jGrT",
  "key20": "wmCiJ3zKgRzbCK5fLyS9CMhSTrGzwXBWHixGbBi3AQbzBg3DKE4joqYXQdZMqRmvtj3jCetVUG5FRAbvpXuMEPu",
  "key21": "LELtVD7DeYC3oKwo8qNJMzgkqqDn1dqEE3tHK1n8xRQGvKzzcdGGYZVtaFoJvEnXQoHwbJw82FDvxdtvKAj2ffU",
  "key22": "ugYKBxxtUaziXhvjwgXuwe46wGADV4M6EL3bXhhuekw3T2g4GzdE5vSahRcHSpGEUmkHHwzT6GiFQDQCACD6rVQ",
  "key23": "RQMcLzVFMdWCNAVWdTjN3RQV6BQDQSevkYntPMpoGYHCiCr69H5XXmPbTDy4VSVDoE3Zmrwd4rhn71UgBZ2djvG",
  "key24": "5Vib7CMBrRbcB7SqMDnUtd5u3ToH8HewPxMfJ5HsJmmkVRxFThJbhBXkhtfx3FeQZvonMhvC9MphJ2jXojkp3MAt",
  "key25": "5CpRrpaSBySbtQNHYVzwMEGHfJ2Wk6BpmaCXEW1Ea7tipGEPyFD6mgTpRi2QfoYdDtyQw38G1Q8aenV6t1fy2uSt",
  "key26": "2HbRezDZA2ULnhFDQjZUDtixh73eL5s1xiGmXdQHMM3rMGPTTETcpH3RJ3mnanRx8xjtipL2zeeHL8MHdo4wBGf2",
  "key27": "hMdaroB4PTBuaAwjgXRipqntG9awHBoDjB4LiYg124DtU8u3A8bqdU1N5pmLuBX31sQjdKfHLiqb8nnjRoCPCyb",
  "key28": "3QwaJVVPos5rrUyKdGYjcf7MAJ1ekcccS8yhK2Yk1wzoSEiLcW9jpYvoW6rek7A3jnDFMBNmvbjSvDrTZYirhBjr",
  "key29": "huehM75utAVaHcHnQEsmyiYUcn49u4NKt8L6Lg4zqVoGNsL9pKFcqiZ674ohAuaw6UfLao84hCqdpe6qRa9Ajsq",
  "key30": "3LxXT7boZ8Rxcc1QEyhprTiet9nmRKydDvZ6fDVs2v7GQ4CK6HXgWGmbG5wPRTshg3BJxTnkoxFZkKCMNAjx3zUb",
  "key31": "36ReACp9osJHpNjf8vJfjxSeQCCipUsDRALU9wAFSYfocqSn5Gr32ui7XxELBxE7Rbw9WGg5J9HoKPNnEidA2Gya",
  "key32": "44Jk7sFncfrxWtaUtGtvgxTrXic757ZVZuZeaSKQX1BPno7qGSo8KMfntsCPaRaBgTPBq8GpDme6T2qy6JzPpfMA",
  "key33": "5QoHjgoTpbPmewHsG5eU8SkK2xXE2372uifJWiRwgkVo4fsrBwSf6Z4HuPPPM9F8W7ZXmPM7KwpTFgFxHkavTJhw",
  "key34": "52etbMngcMrTybEPpwMnBjpJTANiMryUQjRdBAKWcmSrUCvhnWF6MYsK6mzL6PpgzQdd43zJNiKmrwHp8YooCaPd",
  "key35": "5dq2afxdpFtZ7uBa9qFYXj3e4ZCMwRfMyC6N3BeABgT4iURsWc8arNU7MdZtAN6Lm1jD2jbYyEWZFnRrLrscSRJH",
  "key36": "GWSHGVhXNcMJvNjMSqYek18RRmESnHUM54N8cpC2RRbNzFgu7tCN9V9aNZWFURwcQrwQiNEgHCWiRzd2YeoEUin",
  "key37": "3WGwtF84rTQtH3hVqfUFArg6s7MQqL1H4CNnTZQojQ2tmc4jDkqsntPsfbPrAVhJg7dpD2Zbfp2pGMnshhFcz3TX",
  "key38": "5iauUZsHPaznUSam5QFqKa6yLYjCNAzR6fCSuhiFDuo9Tpemxk5oRLrZpJoBz2cxhFyv7dB9PboJxuNWQFSMt74D",
  "key39": "2t6PRqsbCfSPsUNfYB7Y2jcrGy2Mv7F3bXHy1jmBKci5NfBgvZ61ga5U7hGmGY5BHHebRC91LgAndxaaEifPThbw",
  "key40": "4PA4ksjqXq5zyrXAsxEve9eFE6j7B9WEpjEEryLS41xbRBRyLSBhmDjAJBjhL4ykAq7LgMNnt9e7NEmxBdvPidjx",
  "key41": "3ZfnnFEE7v8K6iuU8NA6sEJvSZqCs6Xq9NA7MY2bUzHABoosXbL4gwWCdEw3yhqJWouvHf6qDGCYd9UhGqg4D15U",
  "key42": "35MuViJ6tjBBsVa9r4yeibqgbrPhpj1KduV8pCtqWpWvFbxNDvxQgDLJe2cyMukgGcJXSKq9Uo8tKucHzMsyQCKn"
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
