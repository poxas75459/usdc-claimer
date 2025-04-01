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
    "4UZwovbrbVTbqGHm1ewpodkkyA8YqsX1AAShmQ7GxaUpewUegdcDF4oHvntfY4wYUfEuUWJacys9GMF2b1XtywtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hr3VqK5ootrBobtJQ931ZhFxdopFPiAKD6kYyjctZHESj9wPv1TksmPnQiPJsRtRaVwC96oMeKu9Rjp2xWPzmA",
  "key1": "e3LT38WN2zAFzMd6YyHEqt1RRN62aUjVeVoCdyPoSX22b4qWzd1qtqo1XcP1HFErj8QNL4BZgYyYFQaRdNtbnVp",
  "key2": "22cL5LU6xR9K5hxmFGsRgEPxMXuP4GiZ4dGwvtAWgqnD26fmktrrSLLAYEfbY4qySjyJKZtqbJiGX4gcs3uoNN6d",
  "key3": "5UJWhEZsHAkMRGwqH8sairoj1SoNvfoneTZg7B1tu3mougxVjroZTgPzQj3sZiiTftieSPvgKHyisJSc2fNJ4FNP",
  "key4": "3w4Us7iojdjzS9jyeXj9HM5mq27de2E1vimG8iMsrK97r5QJD4dPih3mofCvdFAzd3d51Xd43AumHe4cHzr8Tucz",
  "key5": "n1uWARuzTp1PhM4gYtjpEPqShJFyK154pW9wDnQzYL9ZDShw25Vx7krUDwCb3Kf8tkdJqZvguPRhbrTcTW2f5Qu",
  "key6": "2DiP7MkccrCPTqsWbHCjL9M79pzyNMf4q4ZBmdSpPs1FCiGTunjQQKK45RM76H7AzhRkrUD5q83JehSVWgiFxdk1",
  "key7": "3MqB3otNP5P8kcDerZnkVUEmgH5YG77sb7Pwry5vasreKZSJZc9ttRkjuCRuP1ZrnkmfceeZH6ELsSdaNJfi7URM",
  "key8": "4dKdWPfksUhb6oRJLkocyrhUdRrYFGPeH5RCsBJMzGareGBhmMrne2j5oohsbWEct3UXVWEttD58oFgx5wdhwzFn",
  "key9": "4h8gJAZikRBK1oQwuhCCAZYuX8GyUqfaTtWhmrf75giV9FBARDX4cYXDJMMt1TpDLxMGdTm9ZD1ik6r2HZDGU9qQ",
  "key10": "4L4N9wGzvv4EfLTtaR3LT26W1xyrXYdmm9EVavB2DzYx9q4xp6v2TJzpSRPMMKbN8UdCXZj8pWn5ZNf24m7S4sTp",
  "key11": "iLzzYQSvLXCSqJ1Sm5Vc4CHvyHEQWBqN1DUKah9aqbnrwURPiLCjg65Y4ymd3p53mdmzBVJcjW3w2TM6MKi1uEJ",
  "key12": "374R88KaSYgpMZHRQX7r1jDxdxFXVTpHdg7hNZ7fR5mC8S1YXYUzJtV2pgSnJKwBTmSkTdVEF6HhiFcAdvupBcer",
  "key13": "5Z3rxXRYorCZhAJjrgnWredUtgNR3C5XHzX3orsdRjpGW1UzJ1tcSmANEH1pNJHEEFqEJQBV8Au67EekFX2NZBR",
  "key14": "2ALnQwtyMpJvpDH47phhqbjMatYpwbi5T8AWc2iGLeWUya4P7qZwF3Ra1wAtMbtXH7YZJCdNuf3oHdc6HB91UJgM",
  "key15": "4ZjZiA1BiK1EcWjqapi7onpw6pnCWs6AoFKWJv8XHHSv6a2U3kiDmHQE6agCzivvNEKM6oEiKC2KQM9QGdiqbMTn",
  "key16": "qPiKhmeWqUgpxZdkd8hquLrUsXQ5tcaV2rt5RCYBJctPEmrfWBnKbAN9pk9C5dKDZmkJMDWUD9bwVytCiD5cXYZ",
  "key17": "5yxdK2abmwHuG8kXgF8D9fWoc6yziPTz1cNFaEhhVDgtc8iDKtzmKp32irSX5H9CBWopzj6b2cFNdCK6SdkXgQxW",
  "key18": "5CWKtaKUWpiDVY2xA7MuK6Z894Qyh6CC8xdDarQCrqoMvCZ8ortuSwFjnMrQyDejjxMHTDsJmfbRrQFu3HtPwKWz",
  "key19": "2kYRfoY2eKR4kg6NUoWYh9xwbw2GCcGwodNktGgxfQuU3STjQHnwfSVhXTETizLUPsfSumfc5uos7whdtL99nobA",
  "key20": "44JriCsgVsengGhueU2DixoWqoC3rPkWwXovFV3SwfJ5ZcrJRMLDUy5qtj4j5mdvJzaLapTj8EvSskpWDbrpzKy3",
  "key21": "5SVUqWgmcfZM1GKc1R2qrHjKrB8oDPffFpLYiJ9x78QxwbsgLoZJmX1NZoF17pS4f39SWK6XK7Ne2n4grjf8h8YF",
  "key22": "4qZdX57iUSLA83LzMnVj9X8XkuwBET18yxLMr6s3e6wrJCR6M48cQqZw9UBx1G6w8yuYnxXYfaHMiFpAGG9hJRCB",
  "key23": "4RCSTdLP9FdrgW3dyuN5PHMqKEUbWSTnLDW7W5qCMyguaW4M97qQFPkH5h8Z8FKGZ1vNswppjzQdxYR9U9A2ywoF",
  "key24": "44T2oMuZtqqUKobTAWjCzhcfXj8YnxYWSN9PrGjwofFaE29NKFzeKdTvE72CHck2djkfZTBnYmQn6DyENRa1GcP",
  "key25": "54Lihdttwu2sU8kBUPjpyCNBZ882fUdyDUeTcqVeBBycmRg1gKx4XkzENVnm8dNNPudLK1FqEmDCwPMpjJ9JZHEr",
  "key26": "4VcSzDmwTqw7S2F7pkEgiD9k1K3P884c3g39bdbgFY7d1DJ3zrNWZdGRnvU4VgxkdLxNVYdtJbAiNR1NWgLf5iJy",
  "key27": "4aHL2bPSyTqYKkazJsaoqTYTq1Jh2V9z9XiwqM9q6ssCQuMebmCC7o1mWFZHQBce2nU8o3LQuTBAK7W5ZoxJ5tpQ",
  "key28": "2ABVDxzC5bT2iQsgcJYCttLMVaQawo5VckFd5QtE5qwHQZmjHwyowEe3jX5sFW3ctm3siqRtChiyJNvCM7nRjhpG",
  "key29": "4FxzAcRyhrWv2dVyCr4iZZegN1JuSMhThX65qtSzNhN9SyScBGL3ELaaoGfAEoZFF22gnnFWYyiWWc6RY3FXnytM",
  "key30": "5aCsaLzPZ2Hu2aGWSz8M1G4H39ynQSB9Rup8FjHftGJ1CKLyMeW55J3vxwaGXEKcc6AcRgw9Zg5i12uUmC3ruhsv",
  "key31": "2edUJ3xe9dooYEPP5mGgMPxEdK6zkxwNiqQMK6UtvHm4UUkmWvQKXMtF32fUafEDqwQGtjGnXLc9FJVySDnrxEr3",
  "key32": "28R42reHsnVC2p25qfsYMWHrYUEwup63CwST1grm911bekD5svf7cR1bJJ5QQCbe41BBkEwHjset4r9mBp9oieC9"
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
