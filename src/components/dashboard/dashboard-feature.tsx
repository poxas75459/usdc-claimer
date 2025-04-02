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
    "QwLw7JvPzP3LCVgY4QWvCnCBjztejTfQ7H4iCUSJoFVFFSabRPqu5cJxCCYsUXo9gWwubEpXoyFkdSYMgGT1WRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YM3xpiGbSoBPNwe8sbj6jLZZCQWbmWX6ULnu1cUqRiEKwGuBkkyB6TQvEAPEkT1MHwVsGVhPK8YfEqRYML1Wt6v",
  "key1": "3QCeTYodMbAzCQidxeNPRqir2YaMjVuwN24PsLu2o1qi9i2GbUAWwcxT4tK9yEvDLww7Q1d2GxuPrGEM2n1CBNGe",
  "key2": "2NuL7svqv7JSk8mrfLQy8njBK2MuXpGq6ttUZERb4x9g3RRUKk9veX1zbrRYEY8EKZ7fhB2hzN6iyCb3LmcgyAfU",
  "key3": "39Q8Gwri2UqPPTsk8UpsqhgBTbmAanByVgvPzEJ7hoF5C6FRA3Ko6Y54LSBmEwPRyABmcp2r9VjNbWqYsyG3ikEY",
  "key4": "5Ps5wsNqYEX5WnrwZQnYdVAeDE8KHvTT7xkj1euxohSmaS4t9u4DpeHJtdBas3AkBG1RuquXGPPSF8dZN8wiGytc",
  "key5": "67jcNPJ3AxSnnyi9srqtHte4gtDMsg2NsKSMdipi8XBUfQ9eSRw63GRp6JdUiPbznos2fkRqjx9ZbqTWv8vU1B6F",
  "key6": "2PWLMQthxN8JYPYKufHGZRDJQXdaovP3EhH2AVsWYVeW8yzEju3rCsKudHgH84LDFbULYUrs6p5T8avjy4frPsB9",
  "key7": "4Gm7zotNqqc8WhMWx4SQkADRFNj6qrZdAXcHAesY8RyjpCVq7wSZaMVL1zXJ2QfnW9XEqpZgdJVo7rfnnvxL5DAS",
  "key8": "2VL4TumcTGAZXp3pkA59hgFLRuyq7fU4LYYjXo73tFdXPAL2vTYrYPr7prBmQRKEpCFgULKwZpKRDbMdmXJ9uPqP",
  "key9": "37qUfagfFxhuVUqvx19nBwnSEHuAvuBrTqZ9HUzjkuDrMuXxNyob6gQoTBHrfa4NfZLegFCHKjbrhoALnuPg5jjK",
  "key10": "5ZpGnGX4yF1pBFR5yCHWdK467WQgyFC9oMh5hnPUQgHsTJ167WEr4q9kE7cHYtMnsJNXfdiLWSMhBQix2yCoakUY",
  "key11": "5AtKzTbJQsNGwtXRsUvYt9YyKoEtd8JhTGJnzrYYvx7y1n471d3t941ZjxBqSkdJfKm3PA3SYPNCLFrXvgMoqhWv",
  "key12": "3rCor3Chq4fHWnjBWEgiMwR3V9TBvXU4B5PvS6iRGPZPM1Sr2hAR97bH1dxNgVPTBfG2fY8hdoYDj2HAzEV9GFDe",
  "key13": "mKv6pZZbxRiWYEgNJXnUjtKFajsBbgqjTuj16WTJvdD5Y4BwvUKDJvXgwyo6x1JqGKVxRQatFCkqYos77VEpeuP",
  "key14": "64x3B4eEPnqzZsNariq39kCDJxfEMiG5aGDWgmzvMt71btQtbBVeyffcdwuLEcqkPk8mM4VJpRM5iN3QxhGSq1DA",
  "key15": "5cHFooU85CJ7DbMUZb6uKd3R4sLocks3meqHbZoXLPiQHXpMLr5C7yP1B4Bu8AYr7gV91zo9N6fz9DAdgLtBx2y5",
  "key16": "4B7SLukRs56Gb8ukAz3G2kfcxVhZ2R42JrY4R9mgSNSzbZpZo6EHj5peEKdtz99vmJZSfs9FSDEChahnnXHkC4pu",
  "key17": "3iXNecRLcbmY3cT7vjAuBm6Bm918aEWihVHy3hdRtEisiNc9J4YSY2xFLtawrZE9TXD6NcaPyR5X38hWm1koYYMx",
  "key18": "65pTiLF55Ee5XTWYzqFfxxKdsPfNC95DCkoAQbKLMzGWjnDxtRDyNJBcQiC8wZMfRCk6cBmWQ1WfioHEUrXQYvEi",
  "key19": "3mHako4dyVYeiTqKCTKysgSZSM9AommoC4hy9N8aVwCXBLhR1emHG4Two2tFutcTpTgkSKeHrYD4S3kCQUXtSo7c",
  "key20": "49pd4LZmkqrF7Z675SZx1LY4p4DLqCJHhMWn1eCm9HwWgraSE3j4haRKKevWpcb5QB4ZdhAjt7k5Bn7WPpvjECfa",
  "key21": "2u2iiSEUoJDrM9A28j5zQPcXjrLeQTLRGUFV8NsyjjDrXHHbHox4iBav1JtjFVw4JF7ZVLP9LpZ7mrwwLzc9TNrn",
  "key22": "bNouTpAXukgVscM2DKtxzJjJUzLqUZHbemayH8kiMSLpXG3Hog3SVU6aih3465aTEkN4yvqSjNUkpD8ArtgAxyd",
  "key23": "9XwtXpq1sxzBzgkFsC26a9UckzihS7Wt484dkDr4JorCLLko3A6ptpNN7U35mZcQ6XKhs1GujdFRfS5ZZn2riQs",
  "key24": "Esi1uzwSPx7XuQmTt75DDDEdrusXKLgpf6YsZJCdD98SdUx6GawCPrRc7GUw4diXh4HXmgE24XhpwC5HVNxbcAj",
  "key25": "666yKtuiseJE9eiacg7Zj58czbSe5qU79w816KFA3yJZcZ19NCYFo73tMYKgzscvPuEDFEui2uCYrshJzdBTKhPZ",
  "key26": "HoB8RAAWBQY5jW66z2K8JR2p9QbDKSUMCTZdwYBrTFr2htFkH32RccPxgGknNgPy8AYBdyBB9GhWhDRNACCEfRa"
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
