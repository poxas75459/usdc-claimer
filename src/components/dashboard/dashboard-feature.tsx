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
    "2Fca6EBTdWQLLsgTx4SFyPS5KveVbeU627BqzwKStPzQy123yxE4LL68byD9Z9BdhgXERgQ5tGLdby3ejmiTGJE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2icZFmePomX9JXxyB4vBV5GG6yuwzg5bttyzxA19jA9L8YYnXoKAqZb5RdoXTaj5U9sw5cPMVG565YeRNt5Uvutt",
  "key1": "WNPD81g8izQzZCAfy81x5QJFSq3Bn3jBvFehMQDXpb1Hu7uGxhSB5nNqU65WPNR5nSre9VRpHP2t5yd6FPwQtkJ",
  "key2": "5NdjyGHRvG3B2Dj5LzD6NnAqMJjtfpVqUw5KaSK4S51rGYyKWM9YGAHWWA1Y2WYoxSCRsyBtyiycpbNrQJCxSVdE",
  "key3": "4iARFFQVyYUxQDFgCwepTP7Yu6AUTyisMY2Wa8sFBrvo7nELQPYSUXeiMQeX6R9UpjYRcwf2orkj5PxPFoEuiSC8",
  "key4": "4HoWTj7HEfxUCkkcVmFjdCFShRd4k59x2sWUTspvzfRJe1B8kQ3WrtboCwmE4T93EqmbYMwi8SWpggZdotNiBQJ3",
  "key5": "4MTn89hBa39W5AC8M7R99FAKP2gmHBwAuWayVrrkAbJUXGjETXKxptKBo9NvpnKeTHpdALUiA6XbPuqyZ9UeFdV4",
  "key6": "EMNpSk17mthXYgmFJEtvzT31KXwTWqHLExYgJC23JDqCCFiT82hCXspFuUCVe3iWNWqkFWwWg8qUt5ySbFXPGhA",
  "key7": "3VVaGWr5EWmE8BrcEeFLR7LqtDWpQqAprwGXj4A9ykEvmJ8ceDzs9vJF1voh5KjGE454oaFDFBxs8eJc3A84pufr",
  "key8": "Y8J9zEPgCbNxs1ZvbKoKAy4BL5v6wX4zqJka8LDu1XhpC6w8oiQqHDBSoBQ3AX2jZ8tAUkj8bFGDK6bgNS5qsSu",
  "key9": "5sngTqXCWcx3WudLEgtRYAYEXQMqdFMvkz7umVArX34BvrbtwPWKGxSQu5ZH6mQAjvyf3vM5U9UuNdUkfGeBkJBQ",
  "key10": "uSdA4FzocBgh8doLC5x46yo3whn4iPj6VMJhARTUrK1RRqq6SUWCsutYCkApggJrjZHPuDCWBBTDBPMLds8ts1j",
  "key11": "3Q7Gmo54ZcQjsLdrNsz6bZJnBXMZaCoay3S28Wt6ZYtHLYhxrKWxCDT2kaKqVnMCzJVrvrNXsR6MyeWRRTXVzaAb",
  "key12": "gvuBsAS8QHjoeSTLLmmirQk3FDTVVs5o7whJU9BLoUtAAK9WhJQwx1igh86Hc3up3JmTH7T9e3yLx1ACstmLCH3",
  "key13": "UALMVqyeZDeCKMi8ENxJ2VcFgdBsfppAFMf2KDPCjC4VzqbjRH2P9pCqBqE45FZ21JmmmDyriqBEQvs4gvzJnm8",
  "key14": "37P1udgQac3AUYZboMrk1X1mNB6DQBzcWK4wyVUkYqXC5UqAVc3XJ1ZVpWuJyuktqKbcM3m2nQfmMWeNz6qrPcGv",
  "key15": "3WcYJRtEx2LA63eRBKaEf4U9dzc5QHSwYSP8QycCj3dxjPJLnxPGQsc1nPUaQhqkXpqovPhJGQUQWETiEzgXoFNb",
  "key16": "5Fa6Q2a7UxJcaGUGvRTR8wDJR1cqHniVLXyr6fhCVzXuo64xnxQxZ591dB1EEBvFcLmgXJ1kKxfViaEUeV8ukdJq",
  "key17": "5AFjwn1ACcWKdmR3PQn1SL2XeS4eNZ9T2CqQyQPrXwkC8eEMNBJRUvaamxJ6vzJxVsgxjvnKpU8H8BCTRcde9LXS",
  "key18": "2n8tX6z6EDLEtsbYkYsmXxaD7hJhNFZcpHEVcbAvYz7zNa13Z3TPD2FHzCArTaKtbXZaPHmaSXCn6TRNEd78mDJ9",
  "key19": "3bkYLxdro6LBuNWvHvH2dea7L4ctPsPmMpxeAcKFHAu4zmFeLCgk8p8scdV766Cix1En2rm9uu8MAhLMLpVjXv8a",
  "key20": "WqrRbMzM2BkvS95VBxt8A7KWk6e5N9axY8Ty6dsKsUcsJXj4vqBzxxEt8piWmekVapNw2jKhQLPFxxwMEkSAiVP",
  "key21": "5ehTcA4n9US8e3bkDgwRsT9Gvyw8xaWohZibEe4cS8cV9EnTVKxjen7m61bNKbjLDoeymRFFTstKGkvgJGmHyL1c",
  "key22": "5JWh2kLVohqW1u4imGKGe8KRoGke3eaKJjTevMf2V9Luqnxs1r2kPYPTciBE9sx9rXv5xjuDSftLWcL1Ga8pgVMA",
  "key23": "voTLvravSv28mAhwaheujeFvXH42T8dr6qJ9Dhba48AP8HvvrTdsk7WK4FebsWjnetYccPtgoNWPCvuQwTESSyH",
  "key24": "5FstoBHpgMUo3feU1c5vhq1BodHTT8M48NyyPfKrVvk95zZn6ciSbEHw3szrBoX2iCXyd6L3cRZS1qYaZkaxDoCU",
  "key25": "2Te42J6BZHfcQHR4vBoc39fBBPWNKhbxRnzVPV7hk4C57UEz43gX1Sw9PL4X6j7rSHKdmWa3zmE7XpkdwwkejaMR",
  "key26": "5d88YpKbHHLiJxnDaDyJg8jBZ4nHZTnSbLkSzfss1PgoEiothKpTJ3sL5M4P3Qme4CgV6YrYLSWJbsypTmMQdieU",
  "key27": "3ySkx2i8rZftreEDtCG1i4HFdNAfT2yCaNvxR9kZVP3vuEDbCfWRr1KDFV4pzmFiUFucdWiq8veCp9GeEvAjLyn5",
  "key28": "5qTd8Zq1bHVc4Fm6K6VjdVe9Bh4LoxwnLUDY73XkBqrc2oM8aX5L1cLYzk2bnykXDJCMhpVrL6hHXNbsNVkez1XA",
  "key29": "M3s3bytfiBf4299ijNvsS4t6RgXodE8mK9x8tbUKnWzbSJMTZdEtpgZ8FeZdWK1BKFW5xTVFWR36CsuCNmt6pUE",
  "key30": "4qde738tMb3APA9SUtqcEXp58AdrURbB261CDUXzQkQ4CUgVJyC9zvnFANq1GMof4jEh3svkxqCiyYxiUsZ6a91v",
  "key31": "4rH4xJzt68gzuG5PnaDU6CfUWvzSap5je87PaEUHBhBCZyXX8BzcWMbDrmKL8Ckjhu8GejN57PzuKuHaNex1z49r",
  "key32": "5FyZ674UHhzZn6eFKhu6CHbXweYxWrExj3d9Q5qFUkN7WzSPpMSKPYfmAUbM1ybaaNcR8XBwDWMUGrePAhYo9o23",
  "key33": "58LKou4cYZWrVYimRbErTMYRSMo4BQPCnXKT7F5znBy6rQPvNJ1ttA7BNW3jLjfhm2ZZBnU1oRWFiAsSYdiPNumW",
  "key34": "23TorezZz6R1xQg7GvMBm6osDW4M7YETR5pH6ehAtPFZicpyz7sZwX7hqDqxtABMaYmkkhDBBtrcfwrLhuexaXTC",
  "key35": "4YEeNapfrxio21jR5aJkRJaBpyyWHqFbt2yx8WLi1XS3pwNLP6XGVM37P4xVtNgucmyCVqv1S4HSsqosppdBAfJq",
  "key36": "5TpmPnD7YVVPSzXYkUywM7vBrbrt8dMMjb62aGrYt4jkZquzkFCCMQMkkRkVq5p1vapLrn7dtaLgobfX4N9hvEAx",
  "key37": "8KEYUPW67MzBx9SFYm2UNMR619h7sCeBdgYMpWCKYPG4LVPahpFmTG5nNkcC42RztpmgQvJmLGnDSNPsCdm2Weq",
  "key38": "4zPidJUNQVCuWpBo29b8uYnxBU5xFwuoFH2F6p4ConATxomGKFd7k3ZYFWNj3XdBvwWnnZejrvtSfRNDLD9cwqux",
  "key39": "4Jqcx67gMWHea4XYQt1WfgSc76b47dyBQCb5VN6AjrRrakybm2RxAmnDp4iPfYocxEc8urmBtqsL2qsJrx1goCLj",
  "key40": "4H3ooGRDBuibKCuprNSHouS7NrrFCkApL3exnT9N6BpWYnA1Jf9bXqbgQ2njRx65CmnR1voyeQPuCSCpmhB8BrBX",
  "key41": "X9VanKvotpMKYgL5XJVXxjdpvMy6M4MczCcG6aipYgvDgmLEBdKyHN65uriRYycYeZvJRHWXUmmQWhiJP8gZhHk",
  "key42": "3k4tvS4RGHoccwrLLEW6kh9uH6kB6Fs8SKPcSUYZR6uj9gUKWDRSYQBSsYYx6AM2fk8pNFbthRDhJjj3s5ibjj2J",
  "key43": "5TMp8r4ZM5KNAqZLwyFp64kTLMZvsZMVbiRFzhGq3f1SKAXFXHEZpjTh2bqJJoQu4meZWPc3RzrqJUemByKRg7kb",
  "key44": "4fwe24sTNSWrbaPYDNKDKbbZUF4HTqG1h3JkMD6cE5ZhiZ3XxkPEd2vETHuZ96wBQw4LrQLG9ntwWfstRwnJuTEq",
  "key45": "2WMcRjvVUVKc9fP1KH2AvWVGGDePF8XWr5W26pAA91C4hEsRTf6ExSZhWPe5hgwwbLA1L18PU3fJaZ3r1bAtDJoL",
  "key46": "2iUPE3S7EDnbAHxxPGfMxz9kskg8B9hfgx5zx2iU499cB5B2V4VcbBMHCMFHpRMUmmGKbMs5nnx6c9TbPxXgeVJG",
  "key47": "52w95jvvoo9reyRHsF1PG9C4Pv5Y53J4Pah7hrM7WJWmHpQ9kkFPdQQZMiEy9YfXYmMi3XuxWuRUZ1ybbXsaZxcp",
  "key48": "3stXx838RwNttcZTkpSqx3Z68B4ZXrYMNPCgdVCXmysthEYpkuAmtFN1yGKDAxH8es8iug1eiWUPaHj49KoaBMWB",
  "key49": "4VphcE6JWFry2aNd1vNXSG71hsL5ViZt1WhdSDwZFVgcpwydFPrZHejs5jzTJLECdNQxQLKnbLgL7tcJVwHJ3KV2"
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
