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
    "21PsiGuqCJXbvh34P7vkGJMuLJdepT72EDB6WG18w5crk4QjXu1yTXqsn3nPtAzvYrXY7VL5RXt3TqJDRJnxjAY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Usyh6ETnQWXzJL5qNMvcuuBYLowRDqzz5smoigjNvB6AGAphAhMSMQ6iVTWnNLk3fQP5AmuVXuJeLRupQLGSxNu",
  "key1": "2k1Lu7zVCae8DHPNJ3zLRJwL6zVXdBedNEPK3fbEPPx4JgG3H9cccuS5GgsJj8PvsT26uCTYoPmKPeQa7A2ByVPR",
  "key2": "2TRijsk9fZSrBYowUNADpuheaP6HqY8qEd64oZ4HnVdaqwSWtZLmvhLx6cFNjcJ86YtPW4Z1qR7PZuXsyUNY8fas",
  "key3": "3cv92ipDWFXWaZKfNHsfDCnN63TqBbzoVbMr9ZshY3KCSfQ3kkTFYu3ZzvoguQn6L21GTD3uCCb8HwG4C5TzcZEr",
  "key4": "4SHSGo8MTAx1QHRikbuQgpvjsTHpWQ73858sQ7JMDN1mCmo1upiiTjSfLagJZU7p6VNQWQXQVKPSwf3b3qp7iJn9",
  "key5": "sQSZDSV1a2jrEXNcQWJwmbBy7x5hWVzYhdEnijpiLxkRzpJiYkjdk99tyNLSWv2Z92htJMJ4USkQwwiCDiE2oZS",
  "key6": "4Sq1LQLLEFXyeVHaykcLq6DMX9pswmfr9962kPwP3SkqZdurZDSBucmvZUeTXuMVD6zWopgamnuWVHnsiiiPAR2N",
  "key7": "cwuLU7sZwm2VpqwmfzHsXzD4MaWN58ULUhFxfP25qcefZManZSATWnenCFJJe8zPgUSqpKqDgEzCcu9vfKvvCZp",
  "key8": "5gdX1VSs8S23SpVxK11efiykGAS5hdtDYenMWPFrzzZTSWexEooanSSq4TBYgSmh47WNSdSUfrCykLU43qBmuooP",
  "key9": "nbEygGKq9Pdm2E84ujBr9XCpuzJbLvmSMtVKfa8kstyHsj1UrqAMPtgSo1FHJkYidoA5g9VYmEnBCMm44DSjsPq",
  "key10": "5bPek66uwJrgzuAeAVS4h5oa4AxcTgdo7XD9R9AakQPcAW4D8fzgRYSUjyTWzTvSRYRBkjcvdwMAbfwvN34Fi8BX",
  "key11": "3ggrRbArjj39tXmjDtS4U651x3JD5NusQaiThPu1Jv6XYR2iJ1hXyUV7ZfQwUAQ5bs9TSnBdAVSLoCTig1558gbW",
  "key12": "4Yvg6g5kZScU3b644FBtSLqMzCoUTxWDvtswEmicAkv4CJfWmcXsQthbYjV3WYuRRz9cePTqBqYRdFPccaTjzp8s",
  "key13": "2Kdve6iE9jBRWnP7L5tj6nAjYRf6TQexdfQ1jMtoS29if7YoBXMBwemHmXcGEPoH3gsSSvhMJmV52PWUKu2yhUx3",
  "key14": "5WrQk4JsW6CJnVFWRj2cBZhDbrJ5V1FaQerm77MYYDdy5NfW1PQFpELq4cgUNxedHcFQzBaHYSPZm7MrBiBZFjtm",
  "key15": "5uWgs3deQcnAeYr4eb8rPmhXWUp7BqLM64WwPa66PZGaxFQXiubhPRfKJ4HHjyUcnq65dNhkjyJ5tSmoqSp4ihQ8",
  "key16": "gBqajHZQWSRBXD9cHrC9hsbPosYc2Hyuw86rpnFMUEmb8rKiTZghLfEaHNi9a4Coi16SKQNRxEN1Uk7RjprEQ6x",
  "key17": "4MvbhQB3fmNqzyBJyS3THBPQsJwbWcZfA4KejruKdhEZZGrg2z6QQGCwtDKz8QD4DyKTXTfSg2JtjkoRt61DiWP1",
  "key18": "4gvf3m1rNQzYJP8APnPF8trYjHtRCKBY4jt7LhxGroDvpFutbvRu4Ph9azn9ZCQr3Jo5SmA87zYQwWuGdX4KumRY",
  "key19": "SURpFRvP9frGXXy56gknBGbRJJB5a4rwdkbtc7kQfM9fV92KBhREhbbMevTsuXBuPzxkKXpGkmwhhPnJAoSiNSr",
  "key20": "2apQSx1sdUUdiHBaVSMFSajSsjDv4UCeYE3VU6W6zxB8xQfwh9Qd6bnztY9fJHC2SsoR74WLKXBndsZbiG3D24jf",
  "key21": "42G1tAmXNE1Lkbg6hGCsPZ6SmywUWHtStYkwVLbfAeVkE7THVsAgcmPh3t31Ucf9CPYuWfaoFzVTSJkyHBqQi2Xy",
  "key22": "2g3udyepvCMe9jyXyEv95Epic9TnoR7NtPdyhFXuBE9WvHtVLrsvxty9Zrkb2KQCrXcYSrBfeL3xiXb2Kd2DNMGg",
  "key23": "22EcPWTuUot7cbWrijKNKZBKmpp2o2B6DpHXtRFz5cnKDSNUJLBYKhz7yf9FxY4QY5rhjmRMQCF2aqkMr4R6hgvp",
  "key24": "3hRiA8eKsRjgGf9JBETdYFdVMCQWyJ5Ph9BKpKRd3oSFNRce1K5V1TBiPSUrhDvaWVqv7ud4v88yvNBKfZpmyEEG",
  "key25": "3ffcEcVEuBsxzQ7jy2edLyWD9ZqK8zFSJ3tzM8cXKvw56j39yN3Xz3sQhx8Ja7DfTnJqKZhCdWoX3n1P6PxuThXo",
  "key26": "JYXwSS7W84SebQjYwHpVcXcnV6at3RSvUL99udyF4ShFbRSNwwnFUVbsqQkzqsRrWD6aAFqwST33NnP2ogyEbdE",
  "key27": "5zFnDNu4sHsmpbGt9btu8xcwBvK8QXMcx6XFCHyXJtCsPKDwmY3L6D2ZwrCTAL5N3288Pz1ioCxNoz8M8QS46YCz",
  "key28": "2dZCF7SAvKXPHkBAarTNTZSbj4JKbgSinDPsB2u2a7YYsKtdTBuWnn2NyFMSZqiLEQ2hSk8a1ZcxXfoLcVew7GJs",
  "key29": "ULBuLrDHEaDdk35PLzRJtknBTvDUZaJopSaDSoB6xqmEkDLA8Ee3duAv2GamzoCm9TLcC8L4hw5ymXVpiM1BvYp",
  "key30": "YJBYhNh4278fiyS3XqohPsk6rGKg2EqLCaFzoQyTamBFuD7KeMHpW4UH9NQdXhGrMn5BgVaHVri7LA29j6EAKQr"
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
