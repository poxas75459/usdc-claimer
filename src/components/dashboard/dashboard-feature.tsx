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
    "3Xqz1MpggCtjzCu7SKiYZzn2Z9BP2wWti2h5wmu6LriKUE1cFSrEsFUwgTQR57nAKU3XtH4vicDCRzwXQvicWXf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBDv7pd9E8Ct6MSiy1Cq5ASPLVrxxRrmSPz8PsFEpasjCTQHpQsPdynwvuwq46FSxGZoDvdtfymDkU4eCcH2fSS",
  "key1": "5e2wZ4vA8PRgEyp2Sf4kP6fsNZieagxVU6P2yKceZB5oJXRdpTe16txH6QnKTp27G3gGSeQ2f1G7u189xESZkRFx",
  "key2": "7RzexjEpPn9e9V3GmRMk2ioaCFz6hpXan6xjwrEABEt6u5BWLB1RzsobPPHUz69aAkdy2gcHakrmztwCTcDQfzq",
  "key3": "k7apGTPk8TasCwKv5834QG5ngRE4CpC6iDkBbiVKoqzX95GVXuzLJ5ucw1CLJbNmcdxyjRtcLJdhotZUH9whPSj",
  "key4": "u7vyU6c5xqavcecyvP4ML1Q5cwAdtQgveEspYNRvC7GHhW45fBx6GzbpSoda7siR8kdnGEonc8pBwrEZ964r5i2",
  "key5": "5ZCgAenN7LTX3AD5Y962fkLWxwUF7C7e1BYS8supLYgM8vntJYf7zeUs8pDMrasg8mAHxa2C8KN3C62GSfqicE36",
  "key6": "2PFbE46b8UvAkKe5KAcszk5FNmEH9SpDH2qrnCAbLgeeBdzFvkebC78oNHQXyGsVLr1D3dNDwH2L6YS7eZc25htC",
  "key7": "3VxF6g7uLJGpzGpBVSBpZUF16BHsqP3gxE8XtfmKQPU2gnfaVjpSs9cYUppxr3M6fLWBTBatcXPoEzPv6C7xvkN1",
  "key8": "33T3sfXrDBiuf7CcZ5bmpg9xnPP75XyHsAqLDSETBUBtNn3W9kv4Ngqz7jm4vg6DTVyykJkDHpaY1N2a6BRbk78K",
  "key9": "5evNr8MZwk5wbG6wUHZtbh3KPPMfoQFE6pgrywdHKEGdwZL5r2Hz4hjLhHGtCbjejYymZx5uCb2FcYyyh7x7AJED",
  "key10": "4gzTts5ch6pymMYwa7ma8ciG3qLBw5GQe6c2Lb8Hjhk8Djj2mPdj87UMpVX6iEJ4baE7Z7oiXPqzwfeR1qrZa3NX",
  "key11": "J7Gr39b7qK2aRZZYVZRkhBTQC9G9zbYFCAGDvvmMuXzByeQiT9EChGjdTqFxUaQR4fQ3HWxtUmATeAMLh7SG4iK",
  "key12": "2kuLvqLPzdQbiknC1KKMznNn2vdftgX2JvrKW7THb4yejhwVLrxMZTSHrmy7JafCU7VRftwDhJaGszfGgwtxNmBA",
  "key13": "3Eht9PcXchsU9Vhbx812hSRXCCk35EMCi5Jg6ece6cWTputgK636eTF5RXiz9bpriqQnURPeAKSad6GrdVbDkatE",
  "key14": "2HBBoe9FJyHPAG2izpMwn6ETpsfA1ykRRmtBzGZKzETA9jhR48UyjbmsAtA7iv2cHNrvhfEpY8SexBQMogk65nU1",
  "key15": "4CFk5voqsUu9fFyesXUw31xC7Pze2w5A5iwAoRadykAc9xCcWsgrYQXSyZS2ajGkoe8oLDWnqJv7PmAC4VtvCfPE",
  "key16": "5wP7qL1G8Dpgttsx2rPL5uvwtE7y5FMUkV6ELWZkFG1fRYBVmgANZt2GwdhZjSNfFcyRcdJgU8PvtXFRRY3WDa4q",
  "key17": "2PH25pd8f2w9WCXaF2RVZdZ3ApGTaktjg7n71gRoR9SjcqaGsaiSowpWMciHhMqRrC7yt2occx7WGAHx1vURHLiY",
  "key18": "2dZZDATXNRki9gvNFW1mEbhw5L29q2ZrbU13uY3kRZkE59NKwVwDi3YvNWJHsVWGEd9CM5U9Wu2eZhcBCJ2ABuXo",
  "key19": "359QbFtgHWDeox4pMZBCkXqFFyDqFTTHK732dbNvxaRZDcPNL2aywT1JZmPL2x4QXsJYYxMNh4v3iUCaNDVjbsZ1",
  "key20": "484tJfpZo82QLanGGmxtmD5v4QKKX4VGLYJ3ZFkhkGiK76ivDLaCeNhMVhJL3upyULz3S5PxxPjta1YL1tDebTAi",
  "key21": "jA1xxeshhuWPdSacwaL5h9TAmujFjgWrK6jF4NBMeR2sWUJ1B44gw47DkB5dnggqVdgbewLjsZeHAgNrY8wKS3i",
  "key22": "75eJBtdHmNiwadvjhLzy9t11hbf1XeXT3vPBqsLcRZ4trC79gX8qooWxrEcHQ4kcRkSC6HvXJC3V7WB62RmLPBP",
  "key23": "oCXm96Vmof7WAzASDMqh8fWVxghJtXMFD2sdF5qzKffDfWPHjbv3qaMYoT2NRXB4axZCkPndjqV6CZ5uxnHH4eJ",
  "key24": "2JGzcGc2Xe6TmsAvA4zUJGgcF26Ji7eo7dyZdCT8cTwLQSdgyfnt3uro5V4hDMVRU75hboNT5NyFiditYUke7oTm",
  "key25": "5rfPxSpcKp6ogwZpKEwHyVMKSEEdu49D1YGaBqNaosCiAffQxHFgkSXAFwdgnA9WxZLxnhhWPZE4P8KAKbC7kpwM",
  "key26": "3iaQXdvT3nYsENa7mcuvGmKd6nZ7gUdPjP7BN4Usy5uSEHU2HxBKKjHSBLvghBjihNhrxRs9j8KcePdP49b9De9t",
  "key27": "4wVUuKagbk71YsQwemqkVgmdWNU4RanqJRh2StyjaAXM4ExNhBsznaE6MM6tkJVKV7pC5rwwXc6waDaEGTb3cPo2",
  "key28": "2BGFmAX9tbWXWnWRGyHAsrtQNmY6SpsaHW7p6Qt9fZFXVytKX5gmLVR9NbyDtK8Rzm28ZxyyU6iatZs2FiGqAf5b",
  "key29": "4yP4qAxLR9ZPprJJVqgdPqTThiLLMRJ2ctBCCeg6zMRv5vugU6RRj76SYvZ7sGXmiLvubvFfEgXQmBkFuR37t7yJ",
  "key30": "5nkEMkNHGV4nU2GJnphuENUhhEZDVEJ7rPcyna7BzHPasMwQEYuZLtgRrjQaAaki7fdRj6K9h4Hz4S5GcEPJbZZQ",
  "key31": "5djDRHFEdo62U6yuKcKyRtTouF8DjAWVsGKgQZVKQs7JM1bGNF69wJpcYFsih4Ughd4nYaw4ebMqeXNCYBnHweWE",
  "key32": "4CjE7ehWqM8JJHwKNCuAvMRisNEEPe8SvqWQP1nhAbm2deXDrrPpGYoZ4k9CyhDLz9Z6rCY9HQrtfbB8XGPc4mu5",
  "key33": "5V99NVWsspvomVtTdFxaTSwQNSEhJJPt2ifwRAVPryer3bjQNMSduE5XtdtBk83enPN3avAEj3XphBnWRMwckR9f",
  "key34": "2xPYqtgAiHR5EwEgGLeSMq7D7Qz3U9fU9msHP7Ejfrpi8Yf9wwdFqH4ZDfCS4WY4aXPNpEtMYcf8R21Bmz3HHpEN",
  "key35": "49VHEWp8RpKj7KxDr9xncTFSGbcqQsFewPjukC96KstDcWnv8ES3ZtUwqJnRmpevBo3iQWhapyFLW3L8LxYHnd5g",
  "key36": "37jmjkxCouse7TtS1vVy4m18Zqduh2KV5FLfHkbj2iHdFVhcZK4fKLLr1Ffz2gJk8Gp8tCvvbPQxQLkwkpmMSxTC",
  "key37": "4dbN5Lbdy2HXUaUcgSxcdV5g5Ri1EqJHMDsn2BdEGhc8yjaD29CoGWpmr8Y54Wpsk3wHRntBSmZy8FmzyZrsMB5z"
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
