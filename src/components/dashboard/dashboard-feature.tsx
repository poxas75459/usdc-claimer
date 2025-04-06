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
    "HdVMfRodyqEv5av1picojoNKt3mfhccW2D2G9XsBXawDN5uKM2Y4axVzTFEzPzWtJTod3vYMxxqJewa9Xpbp3RX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSGJdFrqR1YKs9gnpWTk2MpjwrPfx2sffFyN3WS1vcwRZLMKsf7tLytVPbmw9SvA6FyjzRM9yYX8sRXvkJunC3Q",
  "key1": "61nR45zJ1Nn9RB9GF8iX7WNvn6kpfwKW6pnEkgZMhfXBrCXEzJsmb2jCYscsApyrzYFG2sja6bMEGvefmTcrYLt6",
  "key2": "2wdDViKKigxJtDF6r4YrEyf8BJ86MwEW8HiBc2mEAheGG5jTXU85eh3UByHxTsfETZZRx1S6EErpCc1fNNrNN1NQ",
  "key3": "5EH9dvLwnuWthjp2mC7PHymHL5TY9pNF5md3kABd2unaH5oNsFpMrQgcP9rg6axfcrigBMDFpDrxbS2Z4R7vUrjg",
  "key4": "3JuiNHKE3fLb9Wf3r7CyTcj6Bwv78T2vvgv6WZKrzvwzttYDYShPieVEFQb3YQTvq5RDFWYsQLYNyhVe3D5B6tNJ",
  "key5": "3zrXyYRKf8W5b9XUx1mLfNerdsodQxAbGg79Dt6LmsXV379jCBbSQC4uBikb94CtRg8UtKzKF1gUTRbySN6kSinU",
  "key6": "2HYTAi41MXFWQwS9SBkxhc7UUfCN7wzwmacPEJZ3H7M8YsoMmqLNfnzeE9oNCNLH3so3GS1evGk6GWPVPda1is9U",
  "key7": "8h56MWZaLCUYJaFcrb5usCdAhyiUTp9nVNYppzd8jknDstQ2oD6UX6QkrZS6KYuJydyFSKzmpkDigc1qw9kRX52",
  "key8": "YwuHkqSmunDHgfe1GJU1tEyGbQyvrThNizbLhRyHzHDGc2YSa7ZaqpwBsE9G9233Y5chnYz1KjHWY4j7HcEsQKX",
  "key9": "3CJa2tx9qddjThCAWr4v2WLq6oq1pbFEw3Wvo1Gsg9QbvZtKSmZ511qP942q73CHL93pEWfbpy9C3qLuvhQPykFM",
  "key10": "5QDoxqq1d2hx8KjHCq8f4965DMdn3s1wxXnPCDWbhFimX6coTpxzTGEzuQ9xVMYN7PhmW4ooSP5xaT7ttuwjom8R",
  "key11": "5ifBRKjcPTQgim8ytdzonnBoYKgMbxevgvacvJLQs414o4RiTGXEBrCDmEFRiq8Qo31f8AVnJZK8Fj888zNw49t1",
  "key12": "3cyHFKHfRafRv3Pi5GX7aTiqDsJApXkLR5s2MZjGZyYyvh5C1qkwjMwgbdUn62iZyMprgAfRqPa4cAiwQvCgEN8T",
  "key13": "5qyZvR7FZLm2S2sqLsXxpUrSMcscXj7htYpVmea8LHmRsQNqWUevxK2PSBfcrqEhdPK7xpFzsAojYQduGvY13wMu",
  "key14": "5Mj5sSXctREto49mkhYjhBienQ12JfTnQRqJ2ZR5R586N22axoiRSRcxCW3zCNiGP9yzfmbMTc12bgVvBLrgoCGE",
  "key15": "5G1tds8Mpzoj2WdtvjYS8wk7HHdvk6Y18FrkUWyu6XqMcZP5FpgMwkCdPQC7KcQWXTxg2LtNRbtDAfHeCooUdEPu",
  "key16": "5ApQAKA9KQhBDdKWmKRf149YcrmkEUPg5LpMsTanQXhk4WEJAZuz6pxwDN9kmkSU4j3ATvveBFeY7dir8AyrXZBH",
  "key17": "64jxuA2yjGPgWiHhqSE3EZD9u8797Wb2EE1SgfRFBhVdz87nVKhbdKDrteDh8M6cHvZsazY9N26Z1x82PDBJSZxs",
  "key18": "ZExLKrohJ5uxiBcqVgjfe2GGxU4nWySt7dSuFjeDu7LsqM5sr7gxtgpZG88R9jFxDSEUB1dd1q6ydtrEZ423XUh",
  "key19": "2iRmMwuePA5dQNvddfgn8Ne2tbwMbKKCzRhMLKxoTDcDQhhqaAR2qwnmwT1eFqEVApugPTFw7XEWHX2USnPDEkjs",
  "key20": "5f8UZD9crsQw2KYNq8vndEaSrxqQs3ESc3Epa1KJvVcQHddFGMdMCnHCB6k5sN3CdNUqAiknF6nAndRp3A9jKJgg",
  "key21": "2WUK9qvFm8j9EPK1w74dYwmkU65pXfpvwwLXvkswdMspZQgLDaHcRXWuwMYgnqZ4RNNV94NnX6MnrVVcDRJCpvJV",
  "key22": "3woSuk8jSb9NJtWzu6yz9W5irizLe6tT2yhf5NYyZdAR5NB3ZqLwsEVM2WQaYpHwTgJSG4XCTaC89337hwmma8EX",
  "key23": "44QCfb6pJ7KCNmHYyCEhZbYTmH4CedWpiQMdUkVZoqzQDDqNhtfRKjmRqGKShohCgmRGHVx7kJFCKxK2inMFUW2v",
  "key24": "4ozHMwZ2FbKnKXzobyTeHa2ZYhk6C9QLUAuNkES5c5Gs4XFhxZkaDXb2kf591pLQy2GsNkaZYVm3s67BWh2DPTew",
  "key25": "3a37duBgEit2h91jUMAGAmHHMt84bDFacK59zuaEr7RQV8ncftbQmw9stLtJdTgGi3Qx8e8RDNkSK7KKyHo1MMsH",
  "key26": "21e4NND857TxmVD43ZWYFohYvcR1BUxsniA5wEnnvT5SyLatsxTT9QPzVUudMVcgyX9HVxRsUTcmF48fR4m7nCua",
  "key27": "2HC6w64BDujPcMJTmFjRtXgFtmsxkm5A81eMGptviPzY3MyoNvgdyqSUDEkC53djfd1qwS4VCx4yoPMyH5szGHmh",
  "key28": "35ph4jW2gUTKZuJbQ3Gt9sEK4xoupV1s32Y5obXa7mD5Y7qdsXscpaJnuJ2pF9efPiss9DsmP7wsPHguNMdB2pdb"
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
