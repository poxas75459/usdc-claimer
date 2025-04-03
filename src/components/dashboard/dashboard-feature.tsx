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
    "36TjirzbcAXow2rPbT963oogWrt7NcTDSiYpDC4xSyrgu2uv6BS7f7yUvvpEAnNY4hXaX4ufU47UBannH8jgX1pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcfgWZeWHJVYGSg3761hUhPYBRegpk6wdFvgSrKABPCWRHa5H3desMc6Gb1o2wkVpDhQgfeCoXznBYxSBvhGyqd",
  "key1": "2Nz17fHZ9yVWxRc253uAwV8Fw11phDSTo348E5zEck5SfnE1FZLVNC86AKJK1oSz12RaSf84nCaT1Hg1Lm8anL5b",
  "key2": "BDf84mpcDxTqBMKHTVds9teLJW8Fz2Qwiqw1xUZdXso7rMf96LNm1ykRunrqvLYQkbZBT1u1B7aWhREUA9t5YWi",
  "key3": "3MM5crVnfn3eEW3FT75fKpi79ikmRQ2hUyv6ixSbNyvg7Hrcc5dquQy3W9nphVLeckkKs7vPE8JsZs3Uk1ZyURLA",
  "key4": "561dCn1cDFUpxHdFSk2Szc9EakVqV51oQFVt93bqqtj11ANxaPbEsg6WA7WctAeU58dQVKeG9J1p2v4u9qxLXKkf",
  "key5": "3iV7iFJghUKZcawfGrKF5Hqk5J93JgnvqPasCRzvPhLR4eiueve2ZQC3J6Tdg5JsmYmeM7SamnG6kagGXatk2LBk",
  "key6": "4gVXrSLnooXt9xh3tGqfjde4vUgEfRTuM2ZsvpjX9od9n8KiUCAijgpnZ7mWdgGMHzoJpN3Kkt9v7i9wewahwFRa",
  "key7": "2eAweu5r5JCQp2cD2kFn25TmfzdbYzrFPrR8aWdgapBuw6puKSHksc46MbVRAqx62owusAUbdAbvgkpFDdcxxaoV",
  "key8": "BDk5Lk9SVe2LoPZBQQf4c9W1aEGVbKufVjAsK3Rtj3xk6Y4HGx4mVhtSccnnsewVU9Lgi9ZmCMLx7G5JdCpKsa7",
  "key9": "2QKxGEUTo8fMv7xaN5r63ScN3P6DQuLAPUrqUW2B5CXBcvBSwC3Vjs2AXSJHPzerhjtAwA5dbRZCWEDTF6xawjtj",
  "key10": "64xWesBidUHs5PZd7cgHvpwj15TCs3ZFKPFZpHmnvBBP8TXs4sDvvmdSEPoNqtBXXhvzhShpPpgGotdKxw4mSeNA",
  "key11": "6wjtjkPgp4qCSoFVAKvNCZtuvtTqW5DFxktsEYeyLzJPyk7wkJ1HEYr1qocVLvYtKrwmqW3Szi6SATHihPBWAp2",
  "key12": "2Ga5ijs7vmWCGbKj6osaCyCv8ZdBkqfNPLRA7QthSqCAuAmn2dPMWtwCHgwoZAYYGUJHKu3HtDQTNi8ex8dfgZ85",
  "key13": "2tKwdURW1C1BTfZohCkovoEW1zcv5w16Af7Q6FcrYmNLXWRWMy6RHoRZmnXj6fRNVh7WPQtC8JQ32bpabLFVV5Gr",
  "key14": "qvgu7UQWss2ucLQ9KsRUP7KA2Ptw9h9zDS6RMygy4TRHkZfHH2xNuAehpupBPCZnb44QgUy3nSHQQfjNgFf6Hyx",
  "key15": "5pJUgxA5A2KW5br9JLdPj84GhECrDzra8sUXBk3Kmvj9HcRnGVuhMkRE78dEqvyk8SjiNvuLq7S1U5HZEASUVfAw",
  "key16": "3kBYrid142bGHyKgE2ExTs855e2fK5jZh7hJpdgYN826wuibeq3jCuskYF15tMRgk8SwkFXN2RoT2LzsqhE7SA5o",
  "key17": "28FpLTPhLfbftqV3whLKhYCRizftcTerMWHWcQ24doxhLg44dcZEUH6DAd5sexQgNgcoDxNjkjnHEWqQVNWdAS6m",
  "key18": "CmdpbKNePiUuHnjjGVgQZa8oJ8BpjYpmeRdg3jweoPSFVtsgy9eroSH7C9rj6tqWhJkj5xnKqJdLTYWdQcooxVp",
  "key19": "5hgdHypeYdcwL4NtrNAYfMNzygudHnUEosZMtjG7V5F7oewNC8HPuviJwEsZf4jw6EFMEtVYFVsSsxr27bHjxNvf",
  "key20": "3sMm1WCmCSaN7yhEyMtb4XjsEfJU7vpABJpmmcGHYR24osMkQzvcDG435514c6qGaL47USkKLbxwCzTWqHMXfW3q",
  "key21": "DH3oh3XoxpCLGD6irAbdsX9Mv5LuLMKDVY1ttwhS1XBiurvoqRKxCaMHcAu6mwUnwBak99fz4R5no9x3p7YpT2y",
  "key22": "4dRC2s3PEpWoqLH834EwzA9wTVFq5ZKGjmxSYApQidMZXfiaPKGhUGgrKGhL1395VbWo8USc16xjZPxSURduWGkQ",
  "key23": "3JaLXwqPG8Quz2zpuvY31X3V6TwffhxzqKSkM3PNZ2tF2Mtzct8qYVWctqbTpApHCBch9UcBpGyZt221dXzgUyTy",
  "key24": "63LR4QZctsngefHJMQnHot4RHhDvbRAkbus4QKbUKGWCXnXNqvgxg2ofznnsBHkrdSbiPMEwdCEV37Cs7QJowpH4",
  "key25": "4fkqreiujBskvqpr6NK9VCAhRxRPF5chM6A412QHax4Tn1kqSTMUfMs91jdSED5BtGqb4CoNmvQagffbxnok48vD"
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
