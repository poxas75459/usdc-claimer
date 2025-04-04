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
    "4WsubxWd2CkCqQ8qQ1pLVsriwvutT2CWDPpsrTTMcJMYUNrrstEJbSZLBAj6zg9hkwHyng6nbAmCcuPGWM42Vgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGpiEWTiUT5t5KBG5CgZTLJkmi8GUhTgRTf7DqJgcm29vymq52Ja9Ps1oBu4U2hdzT9Wj1bMQk88jq66MeTf2Yf",
  "key1": "2kYGvsyPVnFL9RzZWjBL9Xa6RZbUCHALCnqq489CMNGyxUdpQ3bEDx8WoXu6oAL6yWRReJtXhH9S4QvsAi2G7f8d",
  "key2": "5m8rSCL5uvwgDwHxPP5d6SYmnoZ6D5BNTcM79dJTm42uGUrpPf46M4XBWwLvQ3KUpMioYumoKeDMDBE9aboWMLKM",
  "key3": "2L933ZdyGr4jwCUixsiiDQAqEG7PzSdh3WHkmg1J6on4CpAowNs2KPaFRkjzg57DFdxbnGC6BUFUHyXhZM2YY3CT",
  "key4": "3tdKdaVUr7EgjEi9RvtBvdYtre1UiZqUedHw73HkTuXcTNG8P2GzmRFYGHN8Y1cbmMeu4pk8oHn7YLRSUMZyhapE",
  "key5": "3pX7B6cpVwXw4TBeVdjzXE7ZQq7vRTsGcbdCJA43ctZSpei8gHayJiWXhGRzMN3UYh9LFeXSmT3sjVpE4P6DkBGf",
  "key6": "3K2Hq2ZRbSJr4znPJAbWY714GT8CHwMFwVU7ASsccwkEq2DBEiTg57UNsh2Wchq8imz9o5qQNRVMYZE6Eiib61km",
  "key7": "5BPWBWtMrDtSFT8LuaGpzDWhidDe7xgYiaJr5FC4jspQyPbDMghdbkV9BBbwPneZ9h65WWgihM9JByHTAu1pQT2w",
  "key8": "kuUcKL3yjDbNvuQce8P2ubxV8uQb4uiyvZSnFBC3SZ7m6KCjeTMygbP4Tagp9Mz3qrS8GboF51GfAydKhUKtTFf",
  "key9": "3nYB4BMGKe6sHYk1LjKkcKPHhPWQU83JoFPy4qQitF5zYP1XBQemXkvizGFT3wLyN1BbzR1xNZ3Xv9DZcvkXHVkt",
  "key10": "2BjA7NYpBEeBMbWk9zSeyZuh83vkCqh5TUPmwkeoGuQQxukNGL3D8WqwfnMhTdpn2dUPZqBg1ESA7uBXhiruEnsn",
  "key11": "5heAFGcVFKLu4MiLemwNrvpWg1yWUGxgcbMicBmGkzF2uNt82jWoPDfAXivatDJWfxbGX59QNsKJJGWJPRYMAE36",
  "key12": "LiXF1CAujXoyWoFE5AnL1JvYSeNZSVf87wCVvUwFV34MvoboH3uY4KCuwjsPzQZe2sP2LGwTU21E6KWshZMrmNT",
  "key13": "3aPm3o3xBf6QA8GKreSAZX2v9XLnS1JjSjc2nHay96v8GEzicuKrgTepaELJSYBcvZRHuST8tT6wTM7MLaqv7Gv8",
  "key14": "3aHTHN2dw6o7K4zPjRGwyT951viZ38PMhdTP433QzBnoYbqvQ5L6aGZgLUiBKixSVsVb5XZxRpSh83Kx3AWp4WJW",
  "key15": "2HvVp4NdsYvGLxysouShUetXUd9QC6Hgbc297ExPjJuUfoKVbuR9Uem3hfbKEjokSiH347R8F5ckVU8HaJy7Nt7j",
  "key16": "2t1gjZMpgTbQ6af8PJY97w5cvWUHLosTXEGwNbE6h99wgUwwxWu3WWSoxuQqL41rz2igPtmtGkBVpiDJnspqi3D6",
  "key17": "4sYU5yZrYcSbHFv2MZ8DN7rhMhBzADVF1ifD2vPDP5uBezysDCoNhGDE1mWb4vDu77kBckRT4x9koMZDXVsNdCQ6",
  "key18": "GnxENzTHWC7vi4MkcsjfcQHuSvhXLQTkxzKk7u53QewMCk7JPytXFV4FsEjBxGn4PRfcU5Fm55iJDZrbNbpyYLg",
  "key19": "5JCsZfu9QTzXgdX2ZFRupMrgQSd6bQuDWdGBFrksFVhXvkupVsytFDh6qakuMsEEVMHGEdDS5kzWDKuWizuM8USb",
  "key20": "3tysjuj5mVApFSKSUP4tBePiCspWbNC9XzbbFitbwfJdA1SPR46ZwzzC6gJACoak31xLRc4mDSEkwAq6QsNo2Raf",
  "key21": "4a7ZCHJSkfaL6VNvDHyQhBBmgR6sWcHKaTa8EbCadZtz9TY5nRzHo7AmUPZfRbU46VNxsBq8FXRhaFwa9e8TvnkU",
  "key22": "4FwxzoEL7S9XBbzF8LuDscaGeUHZem17hwX3D3gg5LzcDuU6Bfdxh6bQKiNkkwtAFhuxFhu5uhtAFnMzLnc5wKdP",
  "key23": "2xwT29wtuN8rdHB5i6QfwcjHabi9hVj9QtxAmULULg5eUAgGnz3npWRdB6TvWsbzPHGw3gk4zcytHtwoHSfe2Z1m",
  "key24": "2SVaZ6o8SDGFFQKCLWWN8CFueGvRbhG5Sh7MUEQQp3TWKQCfnYiQgvYG6Hujo7f5a8ts2N4AAWGqw7YAiWK2tcja",
  "key25": "29TABWUe7BTNAtWunMbtckogYHxd4yk5jcSMCu1deTJBE9HATwP5RJ5H36xjmKYzomgzLxdemYdbakync48Xs5WZ"
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
