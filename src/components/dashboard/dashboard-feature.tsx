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
    "2Fam5jpLfxGq1b548dCDFcaWxmMwYRSWhob5fKPCpKKA93o95nDuLor7Q3rpF5j6DLocMvXK9L5yHn4Vkx7soWDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjj8uwZFe496F91mY6RaQT412M8g5JxXbe4w51e74EmD6FsBEchvTwx8bh5myRQz1WSYgJc86Se9pcNBqcvPFtb",
  "key1": "2ERZ4Uqr6gYU5dGN6T4Hc8KvMWSZuePh6X79rrjVrMnXtykqjgktmXewVaojMa9cNcB1T1duA772K7VhDbXQuaqF",
  "key2": "3ZVs2GdjS3QwjjvhdqWSqRk8ZaU9GzyttzV1vvDhQbGaQvuTjGfZFqyRxV9sGdxHLMSaEV98CbPhApQwU5eYuxFo",
  "key3": "3cUjA5A4WwwT9a6svqKEdUgsGAx9Vjf4gjKcHFYhUhyLHB8uB7iKsf41GyQejtRNUKxH97QLqsznx8ZT48bpXkYi",
  "key4": "3SkAXi9pVYTnVu5MtDRbm4divZQL4FgmTQchH27nFEdp9Z4ftkYcxuAR7UTqEdSzZ45PSmFiX7sGVCazUf8SJo7B",
  "key5": "3bJB4smGGZ5RMPkwcmMaPqFd7NHUYty44iye2ku4M16srkk6vttgVfGoT6pyLvqCW4DBAVccQ1rtdKwSLvCawQXr",
  "key6": "vbSBA6xQS6PCqyqUePh47LmRsuBpYehtZ2snDMu93zgPM2D8UzqKKKfmnc3z8ZMtSSaFcCYGtschrvBVhrP1B4C",
  "key7": "26PHa4qUxXHfvLAnJaZ9CtXyHRkFDzQ3yfPAnVpq5pemy77bdZMQU1bsEDWDazdkAZiCEFaTvJpKUokABiQAycX2",
  "key8": "2DUhVyV61bHTez5wLYNL26gcc51zvNUER8NLPTmCJaCqctkEsTRuVWWMpHVpGjpUngejBxj2WBdf3z4n1LDVJNAb",
  "key9": "5wknqNrHr37Bx2o1VqUjLh1rqDh6Zd6LHd8PHqac25YFyZq2cmNtAWJU8HveaJRH7zKDauwANFPdBcbsz7iH2W96",
  "key10": "2KCN3cW9JHQS2LtKiT8A7Z1nNkgYBpTTfEvB2FBU6E3XwPg24MqeVLMFe8LLazXKu3YGuLhXNgLFz2Xbn16oD4XH",
  "key11": "3sNQQ1XHguKVAH1PcxXLFu2sfcqmUGViZBdJXKLRuW7YYAdt4RRHaCpkbtJG8XWb8VhdCfpuBAa4BVBUpS6n3pkq",
  "key12": "4VAcQJGo6Uprv4eZBdiBGVF8NaujqSxkBiV7toukRuGPcVy4U7cnCNZ9pbYenJ31hpLMusB4K1x44pxhhQb2mEkR",
  "key13": "WBJKjUPPLuLkJWoryxyyZ5xHiMp3Dat5sCkaNp1hxEHqA87ebfhqUpwW1vYj4JC85kHqVaE4McYL4y5NdNAiZ2U",
  "key14": "39MSswWmqLcpKzRBXvvoTnhHdSzumToRdeAjW57s59sAChSTAubUJEq9VjNN2d26xYCpzQ69Drqnws3EqwB4tGn9",
  "key15": "3ps8pmgV2jK5TTm8rqRNDCoj6qoHNZWBUy53FAr1dwS5Q7dpj6t6RS7cJko5Jwzt9Gb7NbKiSHSPZftj1YgkvKAA",
  "key16": "2DMmzxnr7arL99kLjfJKtGG6KuJnRPAYz8eBEhbkhmvuxXYbMNKDqfnLySUucBUEXqHyUHvLfQzr4wW4EnzvcJwD",
  "key17": "2osFYi1NniRNyy2MWvkZGqmS4d75aRpepJytfZSYMxyyKxgg4B91Nt3wRepSkR2K8kfiRe1g2y6Y1qSiTkdJJBa1",
  "key18": "3jAz2CFcyPzL7Wo32Sbe282mTY5CJixULbA3KcjbQLJuifA89KXNx8qsq1oFbsQQnxxzaPcQPmKDg2FS5YD7Nn3X",
  "key19": "2MbARMUKN9egST8B6xRHMa11yDL6HVyFBPaBGPCc1WUQFnhfKYheRGgk1vhT4zWLRWVxssHDF4FDrTQ6dxZUFUh8",
  "key20": "4nMW6UzrrMxshP8fnPru1hFaqzSosU6jGTqjmjHFvaaPWDr5XPX75xwiMMYiZAkPLTvvqHemCTyzz5N2ohbdAm3z",
  "key21": "4zCeC1bymc8qrgyjqTHqcnuUngRoQGD9z3RGsekiifmEGgB3rhVZpQ6USL7xKLWg5mGSfAryePAmEZzjKQyCugb3",
  "key22": "3prRAaUAzJ7wvPVxdyHK9y2wgyAJrKyqP1r7gQJkFjkqsMZuxqZELSGCRhV8X1j9rYkSj7Tu7bbkF3tZPHwVSdR5",
  "key23": "h1Ew8UqWTur3ywXiPwoGNwWKLPHFsVYgSsSb7o3muFa2goNX6bXcaKVczjL9gk4KJq8TJDFKGoqrWRahqkjbrBs",
  "key24": "HGWJDH2WrLheNTX5nyAUK7NYwYC67CndVrHb9rsfbSG8w2e6MugdKmNxiH1kXCRy892faDmLHYk8XEc3ZDmbyFV",
  "key25": "sQSjKeNewzAmqJuqo24iVjm4exXGh3rrq9ATQC5ZFRyK8jiU7aa7FcvHpzF1t83WoUPj4JpoCxMsMs9T9Q3tixn",
  "key26": "3fGjwLqf9m1GGcyeNFtb9i9sevcftxkVoqgQAtvMLyeM6mvLU6eTrA76iaAk2dr65xfHZj3B99M1Ct2u8pbnj94p",
  "key27": "5SF7sXGihpQNQiSMoN6zpY4C35KaH7TLTKkZU7WReR5AS4Wp2Y1FbeFzui8x18nEKJ1BMEVMFPK6wwAyUonyaMDT",
  "key28": "4UDxMc6SfRVnUCtwt5v6vJwrCYAMNBB5aFgAFMaHhaveXpUe73dWZAEkF1hqDG1FZ1JbdLLquEB1uvL8RNLyQBN8",
  "key29": "3wrLDRFzrRjfeTpn4bhQh1CwzymTYfUdGUCgoXSKnfaNAwD9hPGyLk9Mat2dYWaTQgiLfe7CmSXjpFZYGdmqzy98",
  "key30": "m6ieUXwu3KZ2FdzndGsWASdZudUfTxCJy9LDgAyocSJqBuXeu1Cn1RBo5ecmcTjRhpHEZBWd7Jh1yDLT7xdau1q"
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
