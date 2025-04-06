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
    "5ef1kFKYNtiXKSsLtYnwoDsEMsbmiiTdNhyKPxLQGxB392WrFiufZE4MeDQqjfS5j7aVKo4zZr2oeifG62pmQwuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZ85zKSfeA1HmcS2DAR2FfoNBJ7PP9bXS9eR1RJJYhJcMsXEPCNDqvpTurV7tieh7tJnFSHEApL5oFxh6k2c33U",
  "key1": "BXSSHkVUFdgiQQRd3NNkuf4JPw9KfPWuc68hjHnYkAbghmU7RJVf89rtmGaPwjnhNeC4tvTUDe65KsFNxJUPYQa",
  "key2": "2koGoAZ8Ati96M39XT3RRaEwRntrixMSJhPDTiM7oq2J1dMqEbVsGs4jjwDuCza9eRoRhw8MhDHCc8DS4XHR8fed",
  "key3": "3pRTpTLyFFYvfzLTNmqZ86tgygx7SUfScbudnndAknwpHmQoyCB6YRGia3RB6LbuT3XiUzeF8JCHxZVaNtW8V8Ys",
  "key4": "3BJgaDrQJNEnuf36VtnDr3PLogX4jaMUiA4g2oT8mXPYFzp3Kv2XhdWTcxjUJPoham6P1sFPdvpG13kMhKYEy11j",
  "key5": "M3bVLkBQG9RR1b2EPQsvBiZCcHy2JPumj1Zf8iEaSg6XHmCcbfxsZNN4kdfZWwr8SJ1KC6tbWTzqVK8zqvbomfM",
  "key6": "4NQMwRxPGgMjM9TQVSa1LEHMqJrYrWD2zAZZrsovNV1EZFJwQ5J2AU9cVr9LNE3y9sfzHuNPocC6zhmbDdVrFd3B",
  "key7": "5ujThWUUw3NWPXGqWFktw4onVKyszgZbsbAELWw9mkWSgYSohRK9EgSRsFDjcRQ7qUvw8odCfcpyHt5bZPKNUdHS",
  "key8": "64ZXz1p56sjGysXxoA8mf6JXmLgKy9AW1w5NQZ2i7z3dbSHoL8aqNoS4Qpq5abcVG9ab9Pe5kiSg3h9zzNAPtGtj",
  "key9": "2LsHUwmHyZJrwrZoZLxsqT4xqmCpXHr7JKYcTW7ppdNeVnRiczguFzJ5YENNepfpJ3FD2Sr8iFzvZVoaS6Jh1YeQ",
  "key10": "4pND4yqg4uAm6FQvx1sc95MFQYpd5pwZLp7hNrMsYk85zXyGEKsNRJkZakXGjAb7j4fNiaCh5GuStZosuyFXRwyB",
  "key11": "5o7QC5zMiKQHWUXySjpHZEx1RDLXE5e35by8owiyT6USVGhktraBn8KfA7KghyBuq9R6N7kRdDCYYhhvEC4TdbHC",
  "key12": "dL9E1WRTjw53keNRyisRazRpCKDpfa8CJFXsqhyiUbuVeny439i6ZbMhQRCoEwvUesLwwKSzmNuDL2mCW7KFC9T",
  "key13": "14QhGQnbg8JBzML1nM2Vk7peYtTtxXJUNL99qJF9RoEkPwNV4daRWVgauAbR9muLRUouQnzujQoEQJ5DTerwVsh",
  "key14": "4HXRg52HUjWxy4oC1ruePDzVeSC1sKEm9Uu2fBRNciFgzYmgysuNNhHkLURWnWBVVvc91LTxAFQMGF3qsvJuWxxb",
  "key15": "4sqLpRPFHYqKnQqtNKEegAB4uMdR14DLNVMay8iLAmMRiDjgtsVKENKSSDcsqD93N4Nrca26yDUU8snWGxdQPZef",
  "key16": "5nDS3hcg9i2zYv9v9CRUevfrydnYehhW2x7CLKAFMCeYYn2LYdSCJCgFyYxj5gTL52AQUbF97xiZffKvvZHifoE8",
  "key17": "2HcyGzKEKVyQQzgaqRBMUKLg5wnxeNQ8L7CQsGr9EpEGTRtY2e4YBdbEeSdTe2wqkTXzwspzj5wxrqRMbHvwAS1X",
  "key18": "221wWrWUS1nm4wXr4uBFh2VDha4NjddQ8RfyrEwAQUo5XDdgNmy5GfnEp1CDTu7Qe4A75jzXcundbQQ25vsKRsvf",
  "key19": "2K9C7RkMLAiA5ysf9HBpPra3qbqRAKfxkJNvviZdKCAtb3Xn939REA1qqrz47czFeb8NNsD5VeoEsvJyoH9MRYzg",
  "key20": "4K4dhjJ8vaiQejNgAvUACYH3scie34brE7Tz18KKtCwhn7EGwHhomBV5fF1BoiBwTBMyJ6t6xmXs5L6GVAnTZiQ7",
  "key21": "4qd8LH9Scq9rLyJ94EAcqP8yCZukrotafMhSd4Gj9nykHRcJTkdPmqugfN5rNQR73BYwa1QnEDZBPisT7gm3GbjP",
  "key22": "2ZMVFxujZokkbPgdawAy3KKogwqYtabQ1vDeYtJjiaVGzT36ZX17vmVw5ak4FVCFDRRgH5u4hmtXDhFzkReBQUrv",
  "key23": "33DYYziCW8vqVa2G6EqrYfmALMN2Uw1gJjFjBeTisZQ2MCSu6vBV8qm1yeeM7oPpNBkDu1ajMdGd3XroaggpxYzx",
  "key24": "3o9eaAD5G2Ffgh43y4XswAfgCcQN7VW547MTL6giz1mXcTALYE3Nv3Si6k54UiUrVKyAEpm8R69fPbEgChdaaQJz",
  "key25": "4tdA3qvW65NYhejXTNJcAMnsq4Rc5xjEoFoAfxMZgtkCdPHWvH7SjX4Fj8gbcke45ThHKVQAVFxdSep8kNJh3Ptz",
  "key26": "5Qz1PRPnWzAf7C2cij4Rf1kD9ye6CX6fcbnfo7w5jwbBHZdAXa77f9qMgXLkbepAXPR2F3Lq47mFBvvoXGDnDNvX"
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
