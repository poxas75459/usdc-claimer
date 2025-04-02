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
    "W4R9h7xFqCkpRPMvsxpvatkepXXyJ4vVGmMJzX4hyS9BRxvm6RoaajixcuWP7zkjSbbJoEehybgvxqvnh2tCuzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DChTZw2kq8jZXJJf6zSw6nvReMRmXy7kv9ccxJ8Rnhtgu6i6mTUUAJzNxeBs42chqv4u545GUvznuN6wgeNuogN",
  "key1": "4fBRaiwhXayENLTTjWHgAaJ6JXmscC6pmM6pAP3DYj1gW2PGfSnJkirBVK8Khpummma3hqMmfXuJ6fTizYuo9cmd",
  "key2": "5yFoGyY4zhXqbRCxMFH9CRhksJYdVLMDQ16MPcvK254iB1Ja8nCWLoYHJVSoYhcPWKiSgJpgiw5Tj1ZBPZ7cg8NS",
  "key3": "2g9EXUpRs7g87TBLDoBEsPZMCszm3HJ3Bw9RqZRENpLDBadcppSacWo25zcNQWNg4kR96odsPPXnSARMTwzgNujs",
  "key4": "5hNLrUD2FkwL8doRDS5duNMSB7TW7wQn1RuvLQMEX6fDZ3oP2pfmzPfrxVNuyPoF7QcPw49SH7182Q7NgC6YHL8z",
  "key5": "5QtfLzwKyWzd2sv2SL7uBV5CWgbRcZGxPDupNKGvuqCYkw6c3wRCXaN7dZsCzyC5iH4GNaNMyN1veRUgZJR61Kud",
  "key6": "5Hp1rMRbwrSyQVywZzPDmkEYDAWiocB7qsu1w37w1omA69VwxtysMe52CY8TFW3s1v31hmEGTxY8BAsvmNijSBpJ",
  "key7": "3vWrMgo2d779ZNbERNVDnggGbsgmrKfFM2vuzzUSnvPP393ZcTGBYJSC5goMjW53syPGUpBRg2ProNkspB1vfPrE",
  "key8": "dbdfj2vhQH5t3F2AEmtR6ftgWBwXdLN7RAJGm5Bv8uxwzs66tdkfvsntzuFK7UqQvu8XvbP6tLeuQ7Dtv18gef8",
  "key9": "5z6AFmruz44beqcEf7kuTt6dZnGZo5TqMmY4K9K7scYprM7vYXjhSuYkj2SxGFcSxaYwzv5FZv1FyURckebhRBTg",
  "key10": "3vXp2LwoaxzXitJDxff4BENCaXxhr26XSNZ9tmA1DQbvhvotuwDvYkR98TCUjQXAoDHDPRBMmcBnj5fcr3Ezbpy5",
  "key11": "3iUM4D7x1ehsApNQhcoPi5dqBqwN33FSAHY38XZVTdCpn8oQ1ebsbgJUBVGhN1wsswcHQP3cN5YxGUcubgvABkyK",
  "key12": "5Qzuds8PKPGFWDpeHs9ZWtSZ6kwWv69tGMWshP1k9efPrGD8tjYxurew5wQKnANpBHoLfqA1LtvnnbqsJ6FAVWyr",
  "key13": "6mZtESJwfJb8F3dv88bL2cdfmri621R2nta8Aueg26z2obG6WyrY9qX2oEmoDjX5tJsL8vFhQTefv3Ja34Sf6NG",
  "key14": "36aoALJBU4BeS5rDUKBW5XeeDhpmoNvm3hRGUBqVgwRPstkLC23b1sxYDNU8T3yFGA6XjY2he2rAem6FSbN6Wji6",
  "key15": "5MmGqUHCJRtP7664zVLFdk13GJKYKKacRyK6J6U1iKVCanj1q5iiTA8S9dvJP7rvo4Gq3tKuBd1w6YwnCiaPn12M",
  "key16": "28vP51jmDPBHtJh4UEjEmMnmVEByYdo59kSz7E6KRxfE3AWAi881qbEsQhBcBffGfqFivRANizpvZV78CaA5Dup4",
  "key17": "46QuDbSB9rmBdp1VJihCm124pggXuwkSkDYmbJqDzSwnvx1t1txtD9kGe2EspWxGTeyDazGRbJuNK9K7AsnktGxn",
  "key18": "4BdqVXr51abS3Vh6pZdatY5JQLwuYgMzod3uaHck8f73pTi57QgNKvQ5TdiPhYD6KHMKF1aWFSdyRpKpDQvykSPA",
  "key19": "4miKui4KSiKEFjN2eVBsmuZZNgQNbRjmoWNKf9NngpAqSiYM2vbd5GaY9LSKpNPvDCZ7ZBwVdbn2MkkB4QELBZjh",
  "key20": "vLC72bPaZjK4GgZfdyrCdaqKhhmGEGFm92PPfLivrZkf8Hm8TzSHPU1vmwK5N9PWdYKZixdsjJaze7bywiSjbU1",
  "key21": "DAN5kwYWm9mTaRpCVixoopETji6ghvDy3Yg8Be5oWLTHsUWsu8o14iCGwVUAoYjShgmVAvLGDRPoZBg1PSoyy2G",
  "key22": "72QjRDdiENZRW9BzdCnDo8fKiL7dynEyHy9RFJRuuoBbKQAJMmqaLxyRq7NeRSoBbufP6cNRcB2pPhARahnJhZS",
  "key23": "54Wj5cLAhpmCcowstc1QmqHv9KdPRt22PkaLGp4BSwqG2DmDsh5diCDgQGQL4XrD5uTmSa82bN1xHzcK1afEQS69",
  "key24": "5pdLisfkKEBtHru9ES1JfekknnY95CCpkTabqySRkB8kJQZGooQ1dEewJ2kKc819x8Cgb5H4RNe4vTQT44z16ZeF",
  "key25": "8Cmwb3ueQuti6VnBQpTc9d3fposf2YBxy9ZfQwKFiT88ZRij3zcNr5PeQzXuXcFTuGNQcnHCSnQZdUYpZPx3swN",
  "key26": "3YYHbFo2CtdGBty14NtBEsTxgLTEwEfvK8mRSwu8C4YXWocDowGvACVLYyxhHJEFEyCRzPLd5wR4VHrx22BqrxrW",
  "key27": "haHshqZTvJ29MWbiYuV46obqk8N5vQVjxMxS75rWpLa1jPHNA5kbVnFeZbMTqgMxQ6eWrg6XVtRNNVyvD8WPVkJ",
  "key28": "43GiAcg1WbzsCE2qw7CYdkAenBynE9by2NEtRN4yZHhQ3UMCq7JxMa9PRxBXyt1ovoavVKYuXyY666HgDZb3AkWC",
  "key29": "3JZreuseUnxHsqYeJLik39zDrmawmxtAqAwRyMYutdot28zBM5PSvWgT4ssVB8jE2KEGEqdibNj58uH3JUqkEMpP",
  "key30": "ERyUKTnV68zHyoYYFnSPsxsFMYtCEiaS6hocjJA3v14xdCAudzPkvYpswi8scRRUTKAkesYczufYKk6kwf1ALkL",
  "key31": "4WYHL5d69zKPEXFxKDWETusvX7978HbWtYweiqd2snoyCQWkcFmJtN1mPXnFJHAiDarEfN5tg9wwLzMWempg4yuh",
  "key32": "4DJqSYGjgTvwL3fSxv1iQYNPpgCJB2U9nHHUohDKsHK33mEFHrPYYQowPShvLjHU3CfejiRg84dJvDFSSb4DXjy1",
  "key33": "2pdL3ADfBs37WFTZYmiHwFwBjRR4v1d1qHKtGxBbPWtBiLgPZdt2GeC4xyeSew1iVgkV4uydwUsViF6yZRT8HDba"
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
