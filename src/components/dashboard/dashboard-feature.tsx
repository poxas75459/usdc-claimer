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
    "33QNLcvR4KvEHtH399ukQbFVPqnkPW1KxKcn9hLMPU83yYBZ3joMPGa8Cq1Qtg6nFrSYrLEq7zsUtNZem1GC7KEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jv6KHYR6h7s24FCx1NjR3Aq78HKD7uYANwQAqmawUxjpty9k1BQhNdRMNEWhqR9sEUPgaYDFovN3L1CWunEPdH3",
  "key1": "4k8FWfEZu7btAoBfXzrgiHMAjszcJ2YwthAHqePuZgWWLhWSqTanWzQRktMQvRFMrYdsz9wywBQTo1979tt6BDrA",
  "key2": "4sRxE7Yg1bZpFVf15pJB5o4kSZfs1HBjZdo8W8UAdfCz2v19xsWNb5wcXSUcC7xNqKGDvzGuuoUuZux8AVLjfizr",
  "key3": "5E8AnCQEJxjvtaeLBgnQYUWiG95r5fVKAG1HXhk5SAKGa693zWd64CBzfVG7ctqiGAgcNfMtyGB7KTmYr8GgPfY",
  "key4": "XevGsSDQKtw54u61NsQXGMEPYahMmaj7LwGc4iWbRAcn8tL67Bkec5gKfZfAsvrr56CmNuqr75zgvjFzLkA3A64",
  "key5": "2CSZzptM4qrSzHCXwyLR68pH1XPEeoqabtYiavkUVicrxBqfRubnHVKYLuYiSfjsiS1Tvy6mhwD4waWccFQCY4qW",
  "key6": "XLMZ1YjoJGLjX4ww8hTVjrez7vPak5WWJ5LQ5Kys6qUx8d1HAWNX9GkAnDjLMGA3piF8owBrbwUnLWkoE7RXCRS",
  "key7": "4MxByonn9uGzFzHJFNW7woRxfw5v9NWX7yVHM5BLScEyfx5E9zDpcf3GkpBFKN1jcCqSTxWpr7CjUWJkqbmRoNh4",
  "key8": "4rpkUGfPHLBVQBN2GhkguN7mMMMsFyxskFikXrpsaPYdc8b5bQECFERU5p8B5bgrnUPkZ4x2STW2qFMh1DG8YrqV",
  "key9": "LpMC9Tag28Sk7ogJDKHfEeVG9F6cGoJqk8du3rwKNi4yk4q2hJkj848y2NhDqK22xoKfMeUSD5LtQCoivzzAaa2",
  "key10": "2cGTpqpsTDtG7wE1tNdDEDHMkXZC9HieQorA3zgemMiu7X7tJCCuqt6RztFZMx8pjUeuSfQiqLgrzfPgCrRqo56W",
  "key11": "3J9MUVW8CJdiP4DQC8fYewszuXkGrTWKH5Q5vcHG7Sg9Q8g2wcoiiA31nXrP8qJ5WFYiYXPHgFQF3k374Gk9b4YK",
  "key12": "5jnfJ3MDE3S9yipka31BaLaAVhxvMbTt2j7sghhKhVVmhnUZzU4jQGoGa6nAS9DqAGXfsgJYPT9ZHfFLd6L4DFHD",
  "key13": "2rEQhNnf31NHwtwjWJwFA7NmRHvMJ5177MeWDsY24Vdv1EbfDUYrpMQWSVDJVpLsfBMHb5QfhPuJAjGWrZ3j5Ckk",
  "key14": "RtRTtuQKvEVcu66WEGNt8VctWhPQemZG4YK3zbsdpc9hnARGU3EYpDgubfTR5Y8Sh6Ud3bJCmf53bLuxei6acBQ",
  "key15": "4pz4RzSkZ7VnPW9ySU1HoviQ6yGjKrE3F2SisujxdQN5TXNfHPhpyiKVHc3MTNtKmVuw8F8tvBaALszEp6FZuoQC",
  "key16": "5Xeaf88f3u1EEKT6xSjk1SWzUVuGxeRjrk5pYsn2DvZm5ThJvMZ2KJzAMiU5RKRxm91ZtNYgBwbytZs7N6StZ2Dh",
  "key17": "5js62beUbYdKkztErc97fgo7SWYiGAxZGmpyHpMsm3FfSwRcfSseT1ta5KC9azWccaMZxAuP1SJTknQDeV2Goz2t",
  "key18": "4AqnRhpMU94KKLgoX2bf2mA4PZ9xPrDSbWEvs2eyQvfPaiB5DcYEZASFbGj53AiC1fWfnFZKvBoKNtxeioyMts75",
  "key19": "4HTXXFSCZ4hDB7XuCgPY1Up1eTPQQCXvkmUv74FbMajTBp8D2KVa9XFF9RJeuuzQns42hRuZpWixpUxqTPpukEhH",
  "key20": "5tmqGoCj1RwajXWWk5ZAwz86jvtVVTJNCr3fDEwZBHDwyt6MWeUQvWBiJAYtsJDbnv6pUYNFe49UULZidBU4FBnP",
  "key21": "57CSXX7FWP9tqqBWXy5GRtPWL7c9fuFRifD8SSXMu186d8eL633zny3U1cjTxKB5tjWUHokaMa7ax9KrHNicdqD1",
  "key22": "NswDcFm8n3T7A1Xr7fbGgpcoBhCZPi25L3zyBC6amtEFonM8L7koe4WHCojCdvh4ZhQ2YZkGuRSMCVemp2jiPvz",
  "key23": "5XHy5H6fb7xstynF1cFPb4XWNgtP25Ce4vawWD3iG1U4iydZcdZWW6wgLz8RGAC5rS2ugPDQeZMGVLe29WYWLycc",
  "key24": "261HzPKPGN2x7mPKrvdm9d33YjTxqWMiKqyd9gkcavGdovvHr6YYJiC8r2V98PJvXnXAh77rSWr6PRVEDQS3PH3j",
  "key25": "66Ey8KP25tSGr4wstkeT29M7u5qjWaKMUoUtcqoMsuh9osvtyNKZzijp4G1WCdzdE87DEN4WaHbYwCcSMknWFUVX"
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
