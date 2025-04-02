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
    "61XJd6mVRN82PiPCgqb4sJ5rnPLRmMyev1TdGgEhPbAuc5Fjx6e8Wr3Vx1ZxMww8ehJdQs93pjDyMZ4dDXUybUKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uv73EyfnZczygUcEBKgQ7NEX7QW9yV8iH7AwVsWk65EZgTYf8fQQnp6GubLXcLceTpz1kg6kFhgDMzx2XU5GbGw",
  "key1": "2phHmrZgWSK6pFLEF9S6i9PigJtXaiChoz6v4pCCG6DfuJejLhYYSYN2WG1GYiLH123ZmTuenDDqcetV8FsrjT3D",
  "key2": "3cSVkKpCBH1iaajY8EmBQemyyzx7JSagTo67BKBHGAa326UiqLkeE7KiG9Q3hKBKBfsDsjKLvibLHQctdwgp6nCa",
  "key3": "2DVUB3WLSmEHA6fmcwqeBxwzfmsfLrcDeCnxTLhLj5is5F2XMGbNUh1JJMcFZn1bF4dqcDEmDsA2ayrts7K657mW",
  "key4": "4uUzY8K1nUUVnpG1nRFeTfWzMRuoF37Y51YiqdWMzbz7TTY8SUWRrbQ3nDxVFYAhZCkMzSzjimGawgFQJMKaX729",
  "key5": "2fwKeZx8XDZT4uwZuieCjp4Kt9BDwSu4ZAFeF9KjaEKEiMHwNTfnXuhsHDJEPfYVp4XZRRMpfAWRR5RtbD3H2cGC",
  "key6": "2po47jVa1LjynuKxaGCHthfXikbBs3wTbwNsY7XxNY5xPAFETokakMFCm3pT4yR2RG8XqkR8FW1Ffx24DB87Yxtb",
  "key7": "4utWnCZdBSUjfrv8TGPY2WAXEVKg428R9enfbmwUBFoN5HANhgTCPF1oY4QEgmTTpR1MDi6SdM7pxKUGoXaZreAe",
  "key8": "4U8NR4GiDQTPBvBS7wWtq8yGBLzBv1K9CciofV8hdVQCiQpYPX5kwWBJhVPi21gtuxQQoJkh4HmVyg72rrYnSAvo",
  "key9": "4asUzTcxFHrmdhm982TC16HCeBvfxaEADFrSEWxwBRFKsR6sQGY5AH8kM9u6eWc8FwgaiPczuHwyZvXNUEFaLgth",
  "key10": "5UYgRMNt7b2vErjAgaLb9ByPQJGVuGbcwYyXp7fa7gn6Fc7xpfBVnP1ss7uhtM115dgMJQ5LtnF8arg64oUJUZKa",
  "key11": "TtDi6KyKWKTkqMomt9quGKTFyiKHW6uB6yjn7txpv37HDzxxgskNfqPF7BMNyUB2odV6uxiXwtE8vafTwfQys9w",
  "key12": "2uzhGNLYe1vo6sRnZ8X7ZKKqcUYWgbfST6CY3aYfJ6oBWaKjUGsiWxiQdLY4ZzQSs1RYRLx4CbSWSPNyXQLCU2SB",
  "key13": "5qDyroStNQXuAd2pcTA2HYvY3T42NAkxo376vK3sh3WV87oMVBF65G26K5k8y6M85JsqCTb4os675xhWqS2nRemx",
  "key14": "42iRWxSvH1PNfKARoHVYNhMZNhFxqou2t2hpijriMXP6vkjZgVRbTqJd8bih5Q33FXaQdwQt8vZb1NYZgDpBVvDQ",
  "key15": "ib1eGftHGcjApQmqMoqvGvgEyVTsUPyiiR8syPfk698qVmadeFGw8gWn9PZ4Zw7aQWsEozv4qfPygXkoi2Ju43a",
  "key16": "DrA3harcWwQh7B8reA5gHY27KhsPvuxUv5UFfF74cSZSm6XTQKES3BdxhJkFkZ7PTPYyYL93uJEnCbdkutK9vqB",
  "key17": "5ud6mqbkxNHRbbUCww2uM6PX6sFxmJFPvDvu1zQFJ81oKP6yLdkSGM96UDoD48H4LizeegQpkDo7PEPLPfvrT8k9",
  "key18": "3iZtAYdBAqzDWbM3KKQVe2wueV5L4ri6Rbc4kLjG17pHCHUteujVEurA94Fyprd2DjQUeHWRXPU2Kq2WB3yKcyZm",
  "key19": "3ZbX1CeWdPB2hE7oo65wExZWf4tFXkAPX4nQN36PSmScVjAdsgczDnq2AHfdQemgBmLbBRYcuUk61aBXTeeABKWW",
  "key20": "Hhd74zrEA84FwMLmMwniFPjwLjz8VmwdM6HYWapqMxiq4nfTqZ7Hc7zvYMEH8Bd9dwUXm5QwXCNDvtHU3uRdqUr",
  "key21": "5nNqVWy7r6EDMCssHst9x1CzYw5yossBXFCnVrSuMpdV3F4ntQU6rRLgXX8rtZLowdqW4EcwpJYG9Y2xRZ5NxEwH",
  "key22": "czWhJBwjgZNjJNxpcPo4bVai5DtAvtqyzDrVT3cfDzFDUdfzcw9gPD4ygjSbS9ZUKXPT2q5DzijvD5HHnr2pQto",
  "key23": "5dHbumQpJG3HEgxdb8RrFQzvTUPHfHf1ZSLnpjpmT3szZuoaoueStwTCPMLYV4mXGKKruvhYMb5DecRD8degtf4G",
  "key24": "3UzGxdpxiYbqANh9CiAXTNrb3yqGW9ZQEtbWCSRTymhbh9u6bvzpDeckabpSfFyj4cA9KrBtiucQxsUDUyP7CMcU",
  "key25": "5ZyxY4xTrqGF2E9A7sADDkCeg7QiXWxFa5zmeMyQM4fx7KS8g18Yxr6ZzSLbjGo7fhEcgc4qfbsiHfqY4dkRkp3Q",
  "key26": "3CVBBsyMum6ssdJeLm2inRJEF7zYqi1qbfu7CDWk3FrKhbrJggk86geVyZvz8jkFHmWHduvaQBMUWei67zLGaXh5",
  "key27": "4jRaqU1sXwYhtdCafgqEPdJNT1NDHzVQvJNgCvRyksbXXWrZqzYUD7XzAXVQvTAQXBmbkQu2Q3EMubaw2YnMD9nE",
  "key28": "43BaK9LEZK5sj3F9KyYLjWiDRCnCBcv11BJLhoQ6XJiTzx8uqvmwFTin9eB5QYUTs2PoKbTDPhvGGUoBCZMAKucZ",
  "key29": "62SMa4jNHeMAXShAfQmCqg4iMRqx4VvsB3MZQWtKUAB3wbbMuwWVuJYAKgY3oLxYH6FYLJVyVAQm1n91SZo4hEyt",
  "key30": "5B8CxneXawC5MmrvdxRL6R16zodo9bcFfmfnrrpVJM6g6TTwS3jUfJfgPDenDh8C7PNuoy6dGGMDGGutwc4JwBRv",
  "key31": "4dkgmcBLLcNahMQZ5KK5HJM3cMa884y9yueh7xbqPFAXEnyYpjrQ44BLg7fwSG94WCJEJVBAR5y6uvnmQkC4RhhJ"
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
