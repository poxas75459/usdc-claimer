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
    "4KwFNsoHV53fKxh14FLWczKDsF39q8QNA62qKRkt32ycmKUK6zSHbW8Aozm3RvGGhQj3iTfi9MRRDEd73repf2sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QeSMYXCtH4JmAGwU5tHaQvwHRaC9R9bKXcWUk7616AP4LDE7vLNhpxJWiL8vmjLba54NsqcJSGRQzjXKXVRQoyX",
  "key1": "2Acp1mvYKQME6dFJwmpgFNMazz1tiDdYtc3MfNrftQV6gxJx176LMPF5n6yakhgCVciUur2Z4jG3XQNyVV6YwFcQ",
  "key2": "3sKTaXjZVonqUC6uZAZ6Y29aUzJ9Crxe3U7gg6MuaUW5BUMkQAeic8CWvMNUDCab3kqME3K1uprDin6zQp1rtMBr",
  "key3": "4v7D8tiSFxg1ViTghZwxarf87YUijga44LaK48CBgtRXgSoLXbhsHy8ZZqbyADesQqvFnP4bfqV6RvQZ3Kh6VJXf",
  "key4": "2cgUNppvzs3ANGdp6fBwEDzdJmmPkM7gBKWUJcCkJNCh7cQGbR6G4BYi5yHebgf4JjBV8fsCPqbrBsKcJ9tbwjop",
  "key5": "RZpu29UY8E6PupvonMmGPUVYETHCtHBvX7HTa2CMSBFifNSjeqhMyM9xS3vMP2ZpH6BSEj2Dtfe86jAytkDPMet",
  "key6": "3smqRexnWocT3z1GhvdHmKoFHJUXs3mqQCMPhC8oJMEQnjWtjSXZ9qXxZsH2QTd4gs1wfzASy8hFAdWHQZN2vDUx",
  "key7": "5aqYyU9rLcp4LRLNeWWxBDPbyJXpNEv5ZBaz46GAf7HQ2XdRZoHk21GsisE7YRtx6EZY4fumdojjkEeHgwtbviVa",
  "key8": "5zy7RUQMG1iHhj556N7ShVpYp9Uv9e9aQEdufyw3hPawuGSUC2hyhyk3EeGXsM8aEWNJq2vnmRuEJREqN5CYUz2S",
  "key9": "5VBZPgdaEM8VKJCMcREDQu76cdyJtKEyEV3zH8nbpA9mjW19iPi5pnjXuQ6DMvUaeP7ZHMXG7ftZbHQ5baNQ1UE8",
  "key10": "2EdqoUCYQHok5Phyo51rvKuEGcSW6kKSpiAPawLDaZcBqdL45DNc5MXwynunpyMakDZWpQY9P8bXGD9jANTHvfzd",
  "key11": "Ka33G8mYTSnYQRER376onWfFkF5DLHLWW2R2hpBSecCGTK38gqggPvCY17TKfKbEWoLWYgEaPw8vH55xuURFzYA",
  "key12": "51ZC2ENw4rBzo28YuEZrbrrdpaK3umYzrKb7CuJ16SpUGZEcYTZDKrE8FwC7HAmTfkF7kWKAS4z7zHKYvrn9noxg",
  "key13": "35KyXiuVvhRD7SZf59ejDi7rbqkzwS4FxPn9up7bSJc8JDtH2in22pRwcF23f2e4VKRZV9JppejGZH43rFi56nBe",
  "key14": "3rri1vjuFzZbto2QLM2oBrxHqLK6QPRsKJhL4YAygSwCqBJ3zxyoudx2GqwHDgV5cNjVrHDBAAdvFV7eaLnyCw6t",
  "key15": "3KoJogRhUL4U8V1Y7z8xk8KvJ9bGMVxPwMNKKv1nGSoN4SmwyE8LdhnaLH5WtNnqFLjFMnsJqSG1BNr1MvoTouLR",
  "key16": "5TLxjTiG3yGVbA75rzEsw83NjwR6a2DGUctdAkYSDsW3KPwpvxxNSoyvU6umLQWhJbVWHsxx2jApPXGjWxVMTTcB",
  "key17": "4QAUtsi3mBZfAmbEynpzfDdRNawNGeDxKzFxg8gQ95Lo5dcvtECeYbPx6HoDAXmzy2PFYAd3BnTFApKxpzWiD5Pb",
  "key18": "5W5hHZobots1i7vpkL7cbL3zpuJGF6rA6akywtjwb1QHy8n5w5cEthe2AGEphYA6q6ovUKxZG2amCvsHjoGoN7Fa",
  "key19": "224W1a5R82dATTv8dhrU4y221bPJL2EGzdZHrhDHr8D7U1FjK7GKU4gHczSaQXMPqhEqoeN3tpynmjsNKZy6Khmp",
  "key20": "2mhSa8XVXLQJEMdjau7AzA5AUrzWNpiLWoVqSMcoxAmnaCwXZUqiBadGrosaw3PdbZzUpB1GtP7RqPJAHc4YCT63",
  "key21": "PZKK1XYypCcSkSn2wX1NXPMuiduSH5tDRmgQ1bqkoZmA5oS8sVgtCRKqk9ADEELAvUC8YMnEL9qgWJbU5PJGzaG",
  "key22": "5FDoXVe78uZ4kfEHx9MLgvEAPpQcwPgP7GVypfxfaq2wcbfbxSsHDjN3nE9T7R7HTUQCRgWf33awpD4rNB3zrrPr",
  "key23": "5JEadNcWXPxp4fkUbn9K5cDRq6bMyYNPrG3dfLeznXsrtqqQuLmmNWTyVpnNUYNjfvXtvkiLGEhq8XE2fZa4DFya",
  "key24": "bKPVkX8z4vWgQvWBWPhb63KBUka7X2veuSMQPeCasnvuMsBpFjc59BsMq9XeZvWnn42K3N9NJa3Y7PxKTf5MunB",
  "key25": "4QJv1piP83bQG2e663XnQnGMrdbLWe1fbLpF1aVRL1AofqKN5DqRDiaNp4nMHEiXZ12hWMcEQpWkud6kkFuji1SW",
  "key26": "66pJ3MG7AnnKFodwCTdgsfjbvS76vGoeZG3bY757oVX75vvvnBsPr42kRF9jpNXmMBzmiDbSBEaPxocgCFPwtG67",
  "key27": "GViDsLNmQFiYEwTn6x6E4kTb2czFiTdLkRwMFU43Mz7Q7LgPyKsXMaamN1JktRvj8nN28RPGQ8osf1pDeDimKMY",
  "key28": "2FcDDemWLWvC2dK5C5UpqEyuXjrRPhWyW91K7eVJwMWqcCTVSYx7D86pjN3jkfyGSN7svWG76unfFP1GxXwQh1DK"
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
