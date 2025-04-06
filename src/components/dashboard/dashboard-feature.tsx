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
    "2dpnUFa9uPe34aS5zRzAxjaKdduCgENu32iD1T6yKCozJ2fR5CdhTX1mXX1qSNvVqX4hLuGKdAn8rQWKrG1w4RU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jb1KqFDyv6Mcm8od3ePY4MK8qs94xzmvoPBPHFcC89PqTnNogj7KXYgTfaNzFWgSqNjVD4erR41u6njeLCc1hPf",
  "key1": "4bmJejMGGKxcJ5KAFdTEYHpEEzAkVJ8LQLaZLMMqgLy9igdgshiPT4coz7TEz2czsF26onjv4WKurYPwxzBZXx6V",
  "key2": "23Xf1yHnvYveJrrB2npYQ5wtrtkYkUBXvZmPWfKZCe2b2ckdAv5mievrgRej3SJtKTdqTiQor6JSo95EWfwZhHb4",
  "key3": "3zPByMDcF1KNzb5bzi9kEBrW8UJW6gmfKjtLaLnQRy2oKdtTV43u8yNeY8KTqrN1QvwHpQik3siGsJqf5yYNktkP",
  "key4": "2gKm3Hxyh8N7LELRGyi2rCEgQnTiBXjHSFqMaqR9Uf67c4TmFo9VqNnh6oo5yKw2LkFv19BK1ryoYWqZKBb7DAdd",
  "key5": "55opG46VRdqz26xUwZWYh5WL7N6PgmGKNaYxgDfGGMFrKhH9VUmaiGUNhLuWoNbm93BxKYYc8AYq8cxMMw3FE98c",
  "key6": "3pXUcU2uPSoVH6kqA9KXyL23qXhK41H8s3avCHnz7Z3xbzd2cYarpAtyEw6zmtEyLzmn35gURygm4hdAzB54xYMY",
  "key7": "4fzkf8DacLMVw9Ys2QY8mjF8iDvgDsewQKFgHe5mpgbES1o5yBYcKvG2VmLkZH97anxzRj9v1wwFJbgLxEVNkXit",
  "key8": "FnZcCTTSi9oMbQs5R81RSdQkbBuY1Yj7id3yDvxkYajxxFrSKmVocHfGby2stErutWHfjcaXU6bpigvWbkpGoRW",
  "key9": "tUm2swWnZyh2KsQ7wZbvsxpiKHE896VDD5ijyJFTmxTAtHwNVvxcWvWuM1GFGT9JZZwAeD2AQoV2eoug7euzy4r",
  "key10": "5rTFarrYbRRGPrzxZ65hxxXDMHLktSnqD47Nn5uydpwiE7TmVJ5ESX3LZfkbczwkkgRW1RLW1wN35Qbo7VCwUp54",
  "key11": "2ZXtB8CVqQBPTQNgRgznFyRK8hANGptjoQnTbdp5UfqzDjBPba2F2YT1hTKARWiZP5fKewVMk5Jc3ap6YtWc2Q6w",
  "key12": "42useTXzD6EhSqUSQoBvfSuNeeV8pS6wEPj198BfAsaSrKy5rqq6p7U5GQv8uDbgwkoehV1JgzXXppXa8X4tbt8j",
  "key13": "5LzsTLbLzx6p1wnuiiq19A6ged3Mn7uJvLNNPNiC8THkFYM4hCTapLohPkeAZ7pE8ELX5eJypHXWDGVg4bXTcZMs",
  "key14": "31NUTapkLYVE8Vj1heL5sN4xoYBgBWy5amxmRhLXouD1sjeMJ6ccPcuRKDjaQoM2afUAX9rh9i2XeUCMoqvdE8Ld",
  "key15": "EmRTmGfbpAmKm6RZYFRPWhMYJAw3V838UGXSnykeH5vviV635w1FPkxuuNUSRg6X2jce1xKfm9kmS9xFTHWD6WA",
  "key16": "29nz4fQdZE4eG633V3wC7eiZSVk4FHEAZgZBvMSL68BJBPv2EMhkYu13hsX66Rrb5MyxDFAbgJ1cmsNiq39yHAbU",
  "key17": "2bnb7J4kRcfA4UdUDA59v7WXJK3xyX95pCGYdVCCEHfTYri5SJiBT2zyg8L54trBteHjMjackCwpBzBeoVZbDEcK",
  "key18": "2AiXTwTemeRPchA73x5of85wRDx5PKBMKv2ZH749NyDSkBfh7YJfZJK9cWX76WpY3AZSF292axQE6hMaU8RZgyfW",
  "key19": "3Xhi9tZSVzEi5mgzyg8eq6Hxd47nGzeYzV4swAiHhGY7oEMgFQxioeWobzWRXiMYfoZFvjMSaNjBEEE7byc1PBvX",
  "key20": "5vXCERou5K25Syxw4MGJJjgSQcuHDLWjWDACQWFGuUztJXt7RtYGyxbzBa2juZttX8bvYcyv2VwJyYCxiYMJ1QUH",
  "key21": "5Bv15N6VqhzmWyLBHApQiYwQ7BmY6DVDzJ8RAjGmgK74wvsufoLzUXTJCimDLbKx9NxyG2pnr4BNHYY3UoUWh98B",
  "key22": "5Xqof2WFMY9GjNwGoRjNxmKKU2NrfZrQcvYtcopbiTk9fR4UXbxmpmeYSEdjQYPjVjbDEnoC7KxB2PpJe7NJWmzo",
  "key23": "xhBWvc41wLn3Qo2gFNVWwxPWGAKgKjE623zGX3k6xiN5kmXYNa4JNf4tjF7BHNgLjrEyhap5kRMRL9tRQy3CYxu",
  "key24": "26dSbh92f2Aqag99TJmA1ZFUXGKBBs145JCMJiJqJwC5cb34hdkb4pwQbhhG1V941ZyDWZoeZVfz68gZVnS6D2Gh",
  "key25": "3GbAA7QLaMMVvo9J9ey6HZtLuemXw2QWfm334XT6i1pLEmj3p4jj99tzMAJhjuLGfvRzjdhA9KB3APV7W5hxn4sU",
  "key26": "3w2AekU3UpiQZULbVVH2oNbd1sQCKiJ9NHCEiaXv831CEhgdDwmdc9fscvDttRCkWGADZAiVZYxjLL2u4Ph3PSFF"
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
