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
    "6aZTWx9m5ZLfhHT5TMYm2g3zJ5nsyPwMQ8FNN6Ss4LbtnyDDX8UEziJt5TQM7kgmvV11LDJ8GvaVTdtpFK6ZHMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVJRvoSQUGCTy49dfwVKRaUy5tQZgAamo3E2deCT7yY51xvTSyBmcRxYM54RBrt3whvxJmyFnpvHgTCZQHcYTjB",
  "key1": "59fLWgXFXcyEQtwyP4zwoHBxD3djzs1amHxaReJjt11xhXg4U5HuEjjRruqH4gdVDG4gKGUjZSEFxntMq7c4b79E",
  "key2": "x15EYRQnnrEgKTFVLtEnAutMejcafQKbJYyCiFkAhASP9giVLmTtukSNi98AN1oBqqhdAjdtgn45XwJNPoF6AmE",
  "key3": "4fWtAJBV9fj6UyNKZ37Kt1fmcT2AnhbUrYGBBbj9RT2jcY5ftUJUGVzwYPopTfKq3eLu1wYnF4udTvcmsWNDHoNA",
  "key4": "4gW7ganbUg4JqCWjphXBG3tiyETgiLHqoYgpaUwiYj3h2uHWMhx4WZjCvuEYseScTDZWaemrEp5pWbpmRxpCJXTA",
  "key5": "3z9QCTPntfXsBAD1v7HH8rGf9LHWaJ8CwrjjjadBoFUhPnS565UdEeZMhKHn3Qo8tnDtwk1S7RDutamwMWmTEHF1",
  "key6": "3icS93M4DwLsDLXQrUnL8PP7J3v6XM3SiNdjfYtnWunZgbgjEbPLkcNx4rDimeTb8QnqsoYNHo3BV27rR8nFHZRn",
  "key7": "JKtQjuDzeZYSnRSG4EGMSChA8LCJ5crYgJJ432XqiobDgsTRZyMd5fsAyBVutQVb1ZobiDaNobRs5ueYHyy1ET5",
  "key8": "LkD1jp2rG4k9n18kwPR7Y8YKSPMoyD4ZUmaH22JvctySjfbaMJkPEdzimPCzBtcfPyKo7wQ5kBj59Zf4JeQKPY4",
  "key9": "2CZxfFKqB2jRppNyNmysWwHRwpqSwKaP1mACDrm6uE4wvG4VN6JJexEPqJpYSJbTzHikT1FfBBcYysDzWKSJFJyU",
  "key10": "Yx5UZShBg6Ki5b3dVNaGQwN1ESTaf13B8uydnEPzsr8CKTKbm8m1uUPnjbtbqTCD4pXtSRdTqmYM5pkEC6h5R2a",
  "key11": "4DCX1GhEdPVsP18vxKe1jk4B9D1mo6MhB6i3QDKqQj8RwxqtU8gAPiCKT7Rf4NTDsCn1cA5CynvnQVuVT97tB2tt",
  "key12": "38QwQvTEPZYRff2jaasLEn6TxNk8oTokRrjsW1NVmx4mX3RyqncbdmptDfdQgrrq6Ttfbx2PsoDEuquyb9DaSXYS",
  "key13": "woVU3uBVyEhYYZsmEUaJ9xGuwxpY3WDGQfGF1JyVk4fbYbAsLYMZUUz6ZribXWT8nDYYbvU1Jj59fZ7sM8SfWmM",
  "key14": "4B5TR3pVCQJF3EFBZHgnbRiqAjcf1FiuDsp9HR7diqZGSfChJpFEjC8BsHtPnaggdsZwBTeDKroLKH4oWiFfxF9R",
  "key15": "64vmzaqYtnvw6PbDLgiYGPeRjsRm6spYQiNRXo6ATarZKbedjqzUxvYgfFhdnuQ45gnszYLkuyxKqNiMoAYyZfjT",
  "key16": "22DRkvqhDgW6XWdZ7w8WAauspY99PAsKpD4cmg2sacUZXcQaS82jXLG7MRa7vZAgcH4aCatR2j7LVvvJ5NrevgaT",
  "key17": "5WW6Kceeqe2mYxJrU5xo5AZcc3z9Ut54vnpo2t5paNeLzLpp8AFFf9VpoEwd2WQCCBwKVpf9GyBLWe5eAqhtu1AW",
  "key18": "3PcRB1JfW9WUYQ6XFSN2xYCEVAo6gFgqfCwMusAaNkKsvDSMzUpxDQz1itnrkGtbEwuvTYumTUu6zwpWEeCpM48b",
  "key19": "2562KcqY8T6QmCeAdCNREuZ2renVsPmwhKWXj2NYrDczTSatQpPoezMkxkVtGrmvkwDCfRwSeuFe8EYGAPfVQsGN",
  "key20": "3bT59BxfMHWrjcRqKuQrgarUqtwSdpVRHgjJxRPvMemZ1M4T81b1WFcjG93PgSnsP25412yzYtQH9qXNhzWDMaNt",
  "key21": "yoB4t7nMEHRq87j4oK8qaBvQ1QMdYjTXUCXAJ3E6TLsHPnijFWjGJmNu6eBhacPorkRUCcGw4pFsHY5Bmx2Kkcu",
  "key22": "5gFhhfaMPuuiB1U8ZwFYjBZ4DexdC5VzEnc4BV7jBKVc8jq9wuELUqg2UEXzeu9FaCiqNPz7Cw4Bw9hY4BqSbvtx",
  "key23": "kLxL4DRhhktqbieRCY2BVUSmGhj68KSXNNMuTPSgZtN4qPTCrL4VN2kSMtzDikko3YnSxAWA61amTe27imM5nbY",
  "key24": "5whYm6w7sREwu2thhPxBHxSgaVa9WzvsFPXjgJCoyY9UXTejP4Vs1ZMTVQSePGVntJaNuQMcoC589nV9HL7wN7sT",
  "key25": "54m1PjwvjhYMw9haF53Fb9xczNprqnHMeMFegPEdC3rHAKhZ2NCUYnpKggkGdXDb62UP1Ncr78PX3pRcHMVYK1g3",
  "key26": "2J7aBjem3XRfpdbzxdzrvJ3ZuBUAikBE92CditCx9bXxu9FezrS3iFhptTPpkSkf82PreqGZRJkmZ2VVTsmMHwQN",
  "key27": "5SFGQZGYmTgij4zuUiEo1mcKPSRgPvWYpLDo5WaD5LQeg88fW6Hg3kGCTp6zPk9jXdc2TMq631tXxxKkRE7RvGzJ",
  "key28": "4WhKiyNQnekupDayXXr4KTjSN22GRe4B9a8xsEkHpz15gQVD9GuUDggTjaTazHrd5Rb1iCujpgVmJbaEZLh3bVDk",
  "key29": "2BFudbD98zniRUQZkdTtPB8RfWwyzDcmNkspAWqPmLvqUjFtQiDXhp6V5VKXfnwrUddunZNnav6GMFUbtTnuxhtt",
  "key30": "2Xtwf1VP8bhPXP1QrvgeowfKYnqjo37QkFqvg17dLK6sYRTEonrNTFzEBP2zy7wGApeC1hb3fvGqdWFYkpfSZiyG",
  "key31": "4vjggixcnGybajLgJDsrsNtzF8E5kpLyvAz54gjebF5avXVGZvndJZCpdmLYJKcA3QPUKUxopv4E9yfSyC1SGBfg",
  "key32": "42kP8YYUgWRQn6M6YscPmAmCVPXeyVCr4kmxMpc8EQmPsrUwdMG9a5CmZNcQ21PLUxBjbcuERw5JoxrxQd94LNZD",
  "key33": "4p9CgQH6D47i7iHrmnhRQckrQCr7GxrhNTcfLtnkTa3PnnK73seHENz2yEvkTDQiNunwZ9m6tbtMHcLzay1Zbcwd",
  "key34": "3PhURFs6HotgPRRdWDeQ87nYMqC4SYvRQJ79r81ouziQHQ5SoVgD58GNhJnVCSdkTRE1DscTxdn7ysXJ5aARP5YP"
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
