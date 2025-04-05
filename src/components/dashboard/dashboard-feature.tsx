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
    "HAAUkTWzYBDUcFHpoTBPwGqPKJu4qWQsfb3Ni3qjJB9KXQse1zsiRR7z7Y8oDqXwXHjxerpA4tP2QPh786wLppK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCWNK8QAC9qgAUFimdttdNH1urnGUHjDD4vMqXoyLKH348X1ckF81Qtb51pacQcNwFN2afKFngZ5r2sarTn9yED",
  "key1": "3i4DW8Td7pj4iFCZ6PcTzi2gM1MS2fXCezqhEMVK6JFZxhHhGrvgTw5ugQr3MTtAMsbY3GuMkpRrDeNL6kEKRRfP",
  "key2": "RC76agBZzAgLRNMGUTYduBRYFQsbV8n6BprhyWasqRMMkWFQhzgx9BQ9HSqotwJRgS6ymfk3QFUwuZG7bkmhxZR",
  "key3": "4ovxbrXm8E7F7YwYTPGd8hzLonCfg7NLu4JcP7y4d4y6Q6x4trxqPV9L4h7tp93XhB8VibXocAy1GLhWgV7jNcEN",
  "key4": "5GWfqkcbkNbsKTUra41FpXsFMG3LhVEDVPbMvxbBz6SRuoudSqDELCoRqDgWTXR9hHoDwFqHHHRm1nJqBbsatc5W",
  "key5": "GqRpzNsTon3BaGvXKFk3Sq3YH23YeyS8DrsPUFz5dZr5MumfgQzEmtH6KWAxNirntZAKHRF5VS8ebCdkJzQcifN",
  "key6": "4HuXzE6MC9KC7c3hRTMKGvsp7xiNuDjq68dafeRFkcqoGeh46bKz9QjjdQ7uZudm25cc496DG4qi4ZfLiWSJRcJ6",
  "key7": "4nsSz4t5VnQMQvo85XJh7KHRNPhQjocHhScUYVcgCf7Bd2mBDaDbnm2vxtqAkG2hhxXWi7CUapkPkGfCg8LKZNKj",
  "key8": "63ZeCYvkhMmkJmQbRoueed5Jy4xduL92NkiWFc1Uf19LqGFcJDu8gaYaXTtP8mW681in63ZPd3Y6oZzPw3niTZBn",
  "key9": "3KLG7DyqqDfqXqNbbG4oKeDT2zj8oCCYJCokmdJZVgdhL2yVjcphp7nCBNoP6cgd8EwBeamMZ4ZRpW6rT1eMqnbR",
  "key10": "4RmiJeRxmUMFpVGk2RwDXJMtYWx7rh4Q64egDRCtipfbifT837sWjcQ7aNuUtkHsdoYyPHvweEw1zsWWVhgmATKz",
  "key11": "4TmwiG56rMhX8iRZb4VZfZJJywoToFxc3YpUHpkzMykRwvcfmSK7tCkJuCnfUCGifaWgoGbkyTeRdFqJFfZhfQmF",
  "key12": "PPcU9G8DCHgSYhsgqDy6cN1s1mifb5qiZdHriK53js6K4zDqYKaXSdXujZwUQfULcZaa7u4cLfFJ9xVZvfqtLrk",
  "key13": "45LHmu6qVJEw8uSoS1vLJGVTNj7YZbFfQG6w1VuRmE6tXDqeqdcgU5jaGVAT5uDYV5Li3mzPYnSiW2mo4kpy2ctc",
  "key14": "3f3iTbu3VkUUkiqT3jnFoqwyqTBxj9zf2N4gQ8nBLzeopwtS8V8EzbnUFPFVJT3T3uCGyQ1jWG1fyvNxf916JdTb",
  "key15": "3XQtwwUF44WfQm2s9R2ZcmsC5wedr2o1hkgJ73xSd9XbPn3PC8wRKLQ1mM28fbJE4ortVNLNffD1kjMxNAK8SupZ",
  "key16": "3JHAbFzC9mrPwHBhywUME4tZuWCYqD3vawtyCQ1LJz81vVe4hWEafPycDR9oauHcoBF2UhK3F5iHuuqWzJGJ3b1J",
  "key17": "2CcQbPkUB6SKHeiJAHogW4g1GGsi5wWTsi9ckXiKsvEZ4uhorzY5msfPUhN2cQpsF2Aku2cDjcCQwFG5WKYWuMBq",
  "key18": "24cne4eoXPFQdzy9szD3tQ9WpRR4nigcrDbC8kNtRsFoGqBZbAvzaATamifpNA5XCPLmPWRAaFbje7BSzngoPcn8",
  "key19": "3tYPbd6ZoEF3a5Vpv7fDGaH2wY8qDKs3GZE6XQEFVnxA4K2mAAEW6ShcxX2j4L7yaVAfKqjNnPjQgGjwADiZTzPF",
  "key20": "aW5BybaqnhfP4RA52PXopYZCUD6tiWjzVGRRJdNPtEiQbJuMjac25cSzjduE2YuFwzRQxoVk1hKr1JrpeEYgm3c",
  "key21": "2ETBBy4jo4xdggPEqDaigrTTqHginT2P6TZBCMoaRJUtkdg6q7fpZjyhsMsVj3cySWrwcTpjcLSZz7guPJ7h274L",
  "key22": "5jdPphjYjyv1iQH14dJVUXsZDyS7f8mu1seQLdoC6dBJGkXQBSd2xyQeZgZHXA6aCYMteitWSH2ooDaR34i3yity",
  "key23": "oMRQDofbFwvv74nraQ5ErQD2RK2r9Dg9zeGDXWqeKfP6EUvAzBqtzWj1udtHcQ4nTVhWDoK7GtsaHsxpMi84fgX",
  "key24": "5TCpMMtMN7NxicjBp5XgkeFLR8vDhUd2gmFJwyAYA7Wi9WncreuRtEqNz29krVpnnZdWZTZhJtzkDL3iXUtKsCLp",
  "key25": "4zykWLw2soVYiXSKm8Kx94DqvVVrs4gtaroxjN6yFQP8eWWKMVHGrLeCsPbnGDaiVzMAMopSYz1AHeX9FPt8RGbU"
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
