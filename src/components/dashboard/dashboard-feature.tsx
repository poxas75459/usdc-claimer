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
    "283QwpmHEiXKV9KkMHXKEPmu9xp2hpNaFrdhe4rpUyTtQNW4aKFQZehtDu8uNZNWjXQ5N2gzEbw1Ms87bMZtGhwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58GFdK41wtqMXH49jnF4rfvQm7sk3zoohBweYWyVonBuEUiVtYiMy6ubga8BpYf1NKzd4iKPX36Tdz7j8SXnecXH",
  "key1": "5AKUGYGG1iSxvhottrXmNjFKR3hLUFWsscujxRUCFDJpTpLRY5Cf7qRMrBm3StpFe4h4PgEoj6njjLYAKZHkF4L4",
  "key2": "itsn1LF53sSAMTkZg57hPbKH4rWbzWen16nWWSYAPukNcrQWooUehb1wNHseEoCFSMLxfGoKQVsrYLLyYNdYVna",
  "key3": "4CKBNRXxpN4qA6qTjBGkPQuEjcWWo7wyPoKjxRhDXpkggLp9yuuGh1NvRw4HEi1KUG32UB6eh7SnBHW17kNhCcKe",
  "key4": "3QPTkGKizNt644D8S61NX6ZGV4ystSJbtnwuDEc53U6rKSJHHkwQMn4p5aCa3mMhvppFaz2jRjuMd8qvB7YB7jks",
  "key5": "9duErLNr2oK2hEL8Lwcx9NArAJTu81GJoz22mh4gPdfQgfizE8k69Ni1UAB8vHm2WGrgAMN81SQww9Fg5AHGEZ2",
  "key6": "28fFsRAYeYAeEfwTJxUAbguSdfpw3KJxS8B8AsESNauMcaRSzwNLcEky5dsurgdLZxVyx59GXXZLSJEbrHY557U6",
  "key7": "5c5v9mRPGbEonpLK9tKUET4yW7Ce3APScGtqWoMNBXzqBSkJX4nUy32KvejK8rEe4cvG69Gp97TahhoSktpLvsaw",
  "key8": "4ioE7qtNAfWmYT48MtQzada5xQobAoJiX3oz6YDUx95AjN9h9o27qkg9gaaY3u4JCH2prfmpkCTdS7LtCoftoz8A",
  "key9": "5BaRkqXq2UJbzdHqcWGDWYtXp6NYRn7y1y5yXL162o1SkknW2MXxDQPw83cT51upLgQ6imrcRpP6mbMhDQ611Ffu",
  "key10": "3ASp1DDWWAppxJT33dc95tNo9j6PvnboVoo9fxM1ovNHbxyZUHVLV1XBWtPWrQ83sSYpTo9xuaPxVVsm3wP24n2E",
  "key11": "5apDrorcrKtuX87uQ5uCSQ3gG9GL1N36wcPpq9GeyuhnGtfckbQGADu4ZAy6WyqAQhVpQkSv1FNDsHGQogPTLvCj",
  "key12": "4TWBoeJzqDosCoXwYLJxaPKy1Ym3xa7gher4V1GdN3fHu7KMvnk4ccHjCHrqkEG9avv9YpRVxh7ZsRTE7Lkdu2tx",
  "key13": "3bW3PAwkzoipBB4iZzCuVMQvadF4vy4cwfzW1eSnvgNwEuD3XdJqatG7PDd2AtJhHS4WxtBJY4bfSu1RfkEuMvVw",
  "key14": "33KgWKVxRsyEEfzjtymfkDhLemLS1MPXcVUURFjJ5EHnx4YMAjTLusTo28vGj3LiDYMCcbugNcUJ6a57DdNob6PZ",
  "key15": "3MjRTJprAk4gdGBkeu6JFvBtFgGxe3KQyE3icXTQU3b2EF4Fgext1pDq7KYXKbt4q8J4eAC2ACd5Lvgw1XHug9sS",
  "key16": "2hHTwiPTzijTgHydzSx8PaMJFjpfLAVwGYuwc19m3fTKQyNdkE85ZNinXrkdTiwUJcZpcRMuMx6qkx8mSeHiR44m",
  "key17": "3KZgQPDXxgMoFZgeX6e5oAcTKbNvKGEShDpaiUS1og1dweiWjWbMkm4eBFdt2tbpkb9yXHyTjbWKbyfrdv7jjDD8",
  "key18": "oWXbTsuqpjAsx8soWWtgTamvVJjEGeLUhKSarDQNqgdfLrGQNYBHu6oWNdibF1fH5tyvNEp16PrWYtfk39FVsNt",
  "key19": "5n38dhGfVsR4hCsbG9mgytJGgdsGd3kQtu9iUtgSFqBmcvk41CkQh9c6f8xHCR2JrKYAUbJL6rj9BGMUgXV6navV",
  "key20": "8HPvbxRvngVjva1ZKhHPcYAvZiwEo6MuSfTw2qJ4daXbbXzX34zwRpid8eB17nN2K91bP5U4JG8ZU8AkVmS5aC9",
  "key21": "ApXDPC9HxJjqKGz9r9miUAVzRtHUzFjAua8DdQJUh9hbuBjU4FnQRvh5s52iFV3dczZZtnNeyjvHKLD9DLbrhcy",
  "key22": "2EeCDYyFXwQnAgiRbox7gwgcmdS19QziEGGdrV9nEpKK4EhbT9GeQaWEmwSQiS46beiSebvxT6arJLKHmDUYVrqc",
  "key23": "nLnxidm5xS3BWUxSghx4fWGMdPgDoN92feNvZfVDmAi1GqoiUHhomEZvGnBFVW57cDHLtcNm1nBuXMMgX371E4L",
  "key24": "3oHd1geKyPnEDALFf4zcVtMDxbHecrEcpWx9G8tzGXA3pVxuKBbTGcLnJmS284w7rhATWCAon2qQPRLbDCupdJr7",
  "key25": "tsht9PjLBf5hnA2xyTbBM4mGPdWNERQiHf7g1tHR1KYX1j5pFVS9ANGnXCALQYcoLJvBRxoEhWFMNTAzPNzEDwN"
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
