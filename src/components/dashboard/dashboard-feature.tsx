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
    "5bfcKgjSVbLCvRwE4uEVs8sVGzcS1BKRFzcUbJwAbL4UEJi2xCYC8S4hvP5hhAiU1gi2tAx5rSZ2rA1R4Uz74eUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VCRRRCQUZEb6tp55ny3Y5HcFzjaY8zGyVUpDfmqMJLBDvv7tVTNQHujVgzThJ27kG17khM3PvtoeB66GcHHpCPR",
  "key1": "65CCPDqJz9G4hcCgtqSjNzFJdKsE5cQ6hrjBCRFpFXevnD6khPcW73cV7GdgCh4xCijn48teQWCtwL19KgZ5EohQ",
  "key2": "3Bt6zwsXo8xezk2Tsrizs2S4fL4N7o4xMMbTf3wwtgVA8QtzcpZsHWbbHidTkUvATDUqRPXcE7PhFq38XJNFubKo",
  "key3": "2A5BabexgFCeZpAcZEeFds5vNPwNaDvC6c3nBnZmM1hUPVeLZswFRskEoqDRySNgBF5jGnAesWRKzboU3v4Ye84L",
  "key4": "XjRxGMQ2qmwG5g791EkEcTxLqVvHJH5dseY9PnvetNNr46ejwG8SYqgATwHB4hGMDmHCGX1YvFL4svL7VLSwMk5",
  "key5": "i7VNC5H1RyeJxRZMPz3UxvfJu5JpqW4EeEkvNDYiYHv2rn8WQjgKMytcYhVaCntAwBh9AfpBDn9pnJPUaGweEAB",
  "key6": "5QH5VFxciARCgh31dQU9oJrPT8FcoiV3vgAx2QZug9JryaLtB1NYSJTWiKFcTkxW5uwCZk8GF4oMydvJYXn5CHG6",
  "key7": "2e1vZzmPvq6apko4Bqd1YQXH8ZG9f23ZJL69mLGWY1JuWqT2F3F536oTV96k252aVsHgn9m6raUXnVq8yk4Bp8pp",
  "key8": "5oGdWEE9nkNdvpytWkTDZryhqzjMU9yQ8g76pk1Y7QJJp318GQfwZ571f4H5bZuTZoAqprkB4fCyVBpB4EW3VXnz",
  "key9": "3mk2z8DjQdFiiuVhvfcQ4UA2urahgFfhpALC6JXH7EZCsvr1AuPEviqsNwJKzAhS9jevDkqrE9FtdTyHtjSKYNZQ",
  "key10": "3zS9Uky1ZnMsdAaGpxx2ePg4nR77CS4e4VCSHkZsLnLkkWYk7ZBTP9MV2NrtkatAVfWhz4voTm7z8X1zRkhxFWQU",
  "key11": "2ZyLhrxDuGKfDsKATZUh4HNBdmFhD7KkqSpF4DNZ86RjJJUMFQx6jx4KjNM3bZZJJDpneqPUZA9zyUb9fNSXvKTk",
  "key12": "2x3EJoT3Gwov49xQmAmbzF5jA9epPtMwBY6tSqXVc1SuGmengxPfJ3UxFTGYXgffSdXXDqN8Jy91HnHDg63WVcAL",
  "key13": "2MDrXgWAn8kUzBGmEe595rLo7mSpTmcbDwhvTiNqgchXAK9RGZEmqKCmzax5q4QDNWYVCbQZrwJWckhgH9BEWcCi",
  "key14": "2poRXdA2X3viPF5v9rEKqiRZapUgXVkBA2fEw9DD5EgaFZnjwRq89eYRCaJGfkCpdpbU4WjNxrQSbVoCDiVZQ2EB",
  "key15": "4KVgKC5MQ8DofeFjELjnEkhJtinKgDcrnJbCeKmqFdEk9FYvvWD5iz4U93gD3qGWHngGosjiPMKBoyfNCmbxH3Nd",
  "key16": "8fdG4hRMa9JGxDNLzHMQbMyBVATwnCHK6DHJ6CTdbbig23g4HrFgoUHVPX6dHgW9CkRdL8NCThSMPN1kAKm4nvq",
  "key17": "nhotvoNF6sMxu8qTdH8ab3DU9b9M7vDhhsRmEs4VnJfUCKzKZ7EHiLdDJuqhUKwCkSncqh4uNNJih8wD5hv6SsP",
  "key18": "64g6rs3Z22iVHHoGayk8dprhPaDNx3kfAjCmoASDH7iHRKqgZQsrnGjVfUJqJiT3pC8Ng3LNXU8d9PiAufrQxmcJ",
  "key19": "348dTrNJ5RW98d3PqsGA35NJgZ3NchHQhPVJGzaMV1jpo5zNd6DPNs8UDJrntjLySzTx7JSj7tPAchsHvQjY8a7",
  "key20": "4aWvqepz9jXQwA8opvXwFtyEmkAmKUwhvGo7PwDCwrWKP3BC2rZvkGJS1H4rvt267VsJvQ5zegXEs6ERrLQry4B8",
  "key21": "34JqE6xwnUoShK4v3ZcDxyn319AKPaBsvLgUuY4YU8oK2rbdWTmLwy3i46E5evAh1vkaAs1wJgbAU2AF3De2xu9k",
  "key22": "2wwq5b5YeaWt52LVWFTZ9NAvNjvP6TLfzazFp8BscCMJpMgghK9Fx8PbHo1CfHV4PcqnWKzw1Ms8DoH5ufdWYeoo",
  "key23": "48DQkmL7cQTQXgJXMoWRwptNqKeGzvJdKwXuH9vPUXvRvn9eMPt7gS8dcKxj8djZBVpUR9oHYtSZRBfBS63F3qFk",
  "key24": "jTvG46W5b2kP3632JAs9BeZGCWhV5mDtDHyEx5A5p6KZeBDM77zJvsZoPpj1DDkznqdGQUsvnt3NEnzTBVrDsqS",
  "key25": "4V3hrWLvbeJ4ZRr53vNFECk85kQHHbqoG1GzVMHp7rp5vhxx8Pbnj7LnrJms575rEuhMnz84V4H4MdWUUaKdxg6R"
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
