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
    "34NHBteTDmtgk94tQeWTXyi9bzWmQ6XwxEjmLrheweKzVqJ9MTpfzSxvdURhqrUFpsCcWVD2hGjrTnJjmamvK6FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sJZ4EGukhmcR2ZjbMCsHuokwtWSpR4C6f41sju3rASK4kfg9WBhhY6NcX93YJrrMT3w2ack5FeHEB4bZM3iZt6G",
  "key1": "G4wrzaPFrpNtqrzrAr1rc25VKFnV6Nq4DfwJawbZb8yQvh8SaUtE5hyGgYRyGVkXFCg7t8QvJLBbYAknW9HpZH6",
  "key2": "4J3PDdenFvhygGPdhK1vnpF33d2iKPfEqTFFnR5Jz4gUazzFo2ZXnyCa4EXGZZqcnLQTDpd7QRuwNWDqUpSBprq9",
  "key3": "2LisRKvr9vMbtc5TPDC1PkZZ5Xm7xpeE5N8avNDhm3LKnsZo3ukqVpZY5JsCGL5HgWvmmdxzQx7NgRqu8avAmEHv",
  "key4": "4fE3rWpjyi2am64c1VHsTPg1DLnQh2ZJwz6Cn24UFPrCeEzPD8zkqYpPtwyKSDFqUyQEt87ZPqJ77nz9B6ThWSck",
  "key5": "48FtbzeJkSMeQweFtUaUAUDR1q2MnCb8MTpLuGh3x5k5RUDysjHaDzekbfUbXxwNbmNAzhN27tmcxHApjA33oz6h",
  "key6": "2PwUHiy6jWts9vrN4HaypZM2k3epaBWsGY5x39zoM77tku2UbVPuQH5sATRQFYRoQaaQLiuCFzXvgmqWvmmu6mrt",
  "key7": "278w6K9QsRKJBADis63LQHh1vHZFe7nSJ7dKQFQe4jAyUhemf9zPZaWcFc3jf3tMTwnLaspVZLLXnfbizaapT5y7",
  "key8": "2M4cBJzsAPKA5je5NwWC6N56drqvocQEejF3kAPxmWuShB6U4ygdshwbAgnFzUdcZgkjYBwTeA2pNcp3ZirqoRk7",
  "key9": "5Dyke7tjSKMfmYU8Fy6BhxxxoV5PcrpUq92vduUzqYnK4PDBpy4DrRzD5FcXJFDGi2VQsashfpHs5oJUoFkbiztC",
  "key10": "3MwS46qAaiubqTjZLp88h3yvqxrisSKMUov3oc4Dx6xTQNhD3KhZnGqpWopnKBuNtpUwDtXhP67ApJTY32bCSJTm",
  "key11": "4X7stC7BibXoAswqbt5MFMGDgZ83o8imC4ZqJZRRyx4xoBzjagCrVmXhqWDzTRNA8nUGW9gR9FKJySVo69CdjkyY",
  "key12": "3tjPpMXcynCfiifn36bXw1RVmEmbZqtJnUAscQEXLotF7swYNLUD9hXiNuDcecLXX394uVTfgKnSUUCuXP7cehkg",
  "key13": "3LDPAyNRNjngRPVqDiSwKbHFJL1C8zzxmKMMpwmr9zYk3CbRtSsPjamwcXrjUYLxrMJhmq32ZPDKgkDgGtyiKasn",
  "key14": "5J98EVHbTkLHhtEHhStcbVofTvHow8NGPy5VzfE45btKc7ZZZuskXioNTxcia7SWjvjszQ5GvuEGep35zNj5AEBo",
  "key15": "31sTGMjTETrkzUvmTKre2Y7tJoFnt8bCEH1vUcPCQPgovevu8qjq5Go1zWd2AFL7BcYkLwLzZ2uapF4cWTkZJbEj",
  "key16": "2FcaZ1tax54g2ZEeeUsLUZVUUYdHPNSrrxjdRyvssyPm2ix3nvEQo2ZPXW1AuitzjcDQCg9Jzn3snRwrgFsip6B1",
  "key17": "3oLjecKqw6jF1WJ7oqHG3g7hMymHHjuMoXcnWASDAECKUnWEF8CKAfhHuKNq1dnAG1vZp3L7bQjagsFsM2Nb26jJ",
  "key18": "Toz1br2UPEWEG3xqStnvrBwrsi3WJq3yMYw6X3mqSXwBiBcBhUd3LQRQspuwEq8QKXARSDzMfniXv3Y2xyB32K1",
  "key19": "5sgfm4LGpmHdsK5t7Z5QY7Ck8Qm1UybD9YuinwJp5ZtN4SxsJ7ZcTskABo7ftqccxQSkfpXzebdu9TAUYgMmj5dm",
  "key20": "651rLdz5vTSWp4kgHnzjPxwTKVZvjqUarZNxxukCxmwUfmN8oHu6ynsUp5C9fscxZ2SV2QFmr9VSJt6k6Ars8JA1",
  "key21": "XbTa8Tp2gYD7bweU5kgcoc1oVFHg7CzAY6FMweUrNqnKwjT44xWqQKwEucpmMANTKsxx9SpzZJ5tm1BbuLaGwzM",
  "key22": "EpJiJwLVBKoJaxsDTXmwo7TtjQjScsCUktcH47mVVorjApkr8mYgJ8ZdZLWonXbQMfJUXuSfMTmn5jpKdeqd7qp",
  "key23": "5uznPipqSL85ioBNSHSNBKMZEtTidTByaJLumbK1y2V3kiiCBkUswcmSxpAcjL2dMCFtnEWopZNBNQ987M3jfpPK",
  "key24": "46DsuCYUatkUx39dvvURvNXDHr4EY51b3vZrTpXLYAjVC8iG4ZBWRvbeAniWSWKbDLYJkeRsSCn5o2nV1S7CGAH5",
  "key25": "2Ds92Z5xkTeopKk2CHjwHrbCHqZMbN1zamJTZxABipbGkUHGRU14VuvpEemzachWj4xKD6D4jDkeummKAwxAW6Qh",
  "key26": "5FP6pq9Rbo49F96L8c1yka3Z7naJmifVfqfJiD3eSM7pQkL3SFPDBhhACZC13ysGkHYZfwEoQurmqPUMm5FyRay8",
  "key27": "DtFGXcjwkCgcQq6T2deE9bLZMUP9jTAb5D4h2mkNGRgHvXqRxohZhM1FAQucpCrevnnS8tJSV9t5YhzhpDqsjig",
  "key28": "JJsZWuVx5b1pR8thpLcVuTuHLdWtmY1gSYmaMHWUCybspLXENrcFvGxKPBL2pDA2W33Kp6EmA1YmJ1N7YecJgbp",
  "key29": "2YriUeew7VJQbBxFJKyfY3o1oZS8RC1mXfmPhaGGadbjngjKKEA6iEgV5vdWjhRpRexyaHp7BfJVFT2U7pFKp4e4",
  "key30": "4ETg9XjQK5wFwqenWFhrMy24abiiBm3EvMb6LhvurEDxMx8stDAhMPjaTJUBi2yHcMZvWmdswYRQAyGSVamhFSRg",
  "key31": "2AYXHGbBuDG8DnCt3vnbx8kqbUYnwq73Xjph1vef8uCJbNwPJRdjqH8NvCmaUi2dxEQzG2aucQZbwKsSCwWzDLvz",
  "key32": "TMC9iWmryyo5j45uGNXmK5t18J7caL1FSYLHPFZaTddGtX68ckELKTQP3mMkzayHB4Ew1UNNMRdXsv2Ejsr28hk",
  "key33": "3uD7A1EPpURsyusxiop8YQaqk2SEQHqz3bgFTUWRXVfZ8FiPUoeA5LVpAPyxujZW1xXWoufyq8MzKAXNujbSFiYt",
  "key34": "4dVeSxA5nSR8Ke6J1dqfjoN6mfG8cXnxqVF9NA3ogWhS3rtbm8VmH8pd9BNJW8dZy35yjRjp8BDhf5ihw8YLpLCn",
  "key35": "TaXtpzUf8PBpMtwif3muKxRGVb2ScomhoPXd6fX8XGSvZrgHqDVvwoxcZf7GiYYS5zc4meNq9HbNZ3Rx2U671CB",
  "key36": "5GfUNp8xkmEx6cFfLvXbCMoK18CVU3xHu6TxfjjxoP9G3BNjoQBipeS5uxqcCma5v1ufcsMKXdtsA8sDUtXMoX5W",
  "key37": "2xxd3P2LXKduVgTGhRgBkweQyYrLammvgfo3CD3gWaZ96BuFnHYCAxF7x3jvXLEwEewmoXyHpBagGBTDKq41NbrG",
  "key38": "62c8WVknr8TBNvEvSKm39gD2rdaeXk2xFMe4w8v9KwVyCsyjvYSgZmS2nJtidUfCxbnAWtp6XrVSE9bVwyzV2tJm",
  "key39": "2amVjheQoGrW1QxVsRNhiMoDi8raMQJbyXa3aMuBdHuBghPaDtb9sQTjdYsd82ArqXx3czX4kDpYRJj3GwDibCMK",
  "key40": "5ip9GTCPQ1i7fLMziB77R9SdowW771ESXVQe8DByMBfqippv6DHvVn72jZN57Br4mZVbTosjTHdi2NZ4KWeiZBRz",
  "key41": "7rsv8Dhm2cYRpq14ZsceAweprQjLE1xRFKAyJ94cN4ZfHVLHvpKoNU7UpSdsfj7zYm8SPQkJYeBRKi6x6rtvGuP",
  "key42": "5y5wjzZg754nwXsZ9QnqR3X8Dtz73RZsdtRpXAxhRAg4BRh3qtBQ23mXg4PzMLprrB269NitMzxmwqANXi13JhGo",
  "key43": "2QJuziHYmuPMRTnGTa8yon2Cz9rfsGnnNQ1Rb31UDkYUYhPrWsNaRxNqkQEWy6i4qv15Laq6XPvrgAqYZZujHfzv",
  "key44": "8im9erAL7kxyHVsiKzx1aWktHmBNvea4WzPXggBZzscX2Eo1KgB7VbusNVLp99JR3Nq7YHT7dWzZDj8TVGgYcem",
  "key45": "3fGDr7ZwuKD9XUpK4mL6ru2XNxXxeuCyc3EFK2Qmv2zekiUY6WTRoKCVhbNk7iCJDUkRhTVNmaQC7E6YybiXDHU",
  "key46": "5ZHciky2V9y42c9haso1QeG2Y1ZdY3U4huWHc75PphKuEws1a73wi9AQgibrfEG5K7QZKjM9SYp3CzSPm4is3Bcc",
  "key47": "3jvcAQJ7WvAFUsPfntxPcLodWoYjbcHdaxbFRTFBjdUecXYRpihF7vh4fAMjhFLZNHY4YXXR6TctgMmV9WKjSdnt",
  "key48": "5zahKtQ1RRVcuJaE4WSXsPp4kovdYK33FMQ2xWYB4isVQ9EZxiezMkowXnXPq33yhnkhfGwtaAtNaiEGLLkoGNQs",
  "key49": "28Xm58zZHMsnkWqJCeLMYZUpV14uzKDXUDJ3ffpu48Bje7oPSkdduRFtvxnxayHdRmHeAsioJKp3eWEihLj2hQkV"
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
