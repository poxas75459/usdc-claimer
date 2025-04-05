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
    "2zh8UMs8UpkHsHpwdwbLkajVYtywbjPKVJMaL7Lo2NpHMm3w6xqE2QGFTr6hv2VWrA1e4JCz67LsQQrTKU9CP3qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YoTjA9EXH5yrzA3MmF7QrAUCrF71qciZXc7kFoui9evb2DdQBnWzzFsRhWECsFx8XYNP6nnej4pmka2LehRCeX5",
  "key1": "3rawr8CmkPXqqkJFT9PHYQuH7RgkD4F1ppHRRDfZwjTajP1zEoyMx9kx4UmTBoKMxff9bKDF9asyVTavyYaHoaJu",
  "key2": "4P221QNitPFc6KyXzCtRGad1T11tRUL1KCUEV4iJABHPHPZ52CZqKYNoiBaMRnzdhxmzGxHUm5fiGsm3uzQqdXbt",
  "key3": "4qrBqKJSWtLQTzBijNxWvYxCvrgPgApgqHipbQ2JqoJbijXAn9PSxNi9NhCimdZ8rP79aqiwcDmuptyKeygo3AUT",
  "key4": "3J9my6KUjs3jA5M9njfg3Q72phCteJbfeLvbbt9w6AwF8jkzGtoKxsVYfkW9aYG43XUqXgZc6ZoVgA7W3EUb8sk4",
  "key5": "4Zmg6NRhz41BVK78VFTJ9YQ1GrsRNGF6kkKw5XJ9Bw7R7hJPUdat6stsPJ9TQZVMuCrqMESfiNTpimgTKHVUFcKS",
  "key6": "4Yc8ccai4d1od8yFtzAvZLmYbKQBfvZsZrwbVUR5S6se5cSGdNSHv9yX8BwMzKahWwgTpg3pQX4tVUDi5v9gWR3K",
  "key7": "4TPnjpwZ3ieoA8XjwJujCn3tvMHkqGvBMXNqRrZdEgpSENis6BNjEcRGF7FzxD9Nghe9T7m1BHjYKGv2HBLscEav",
  "key8": "3B1b7HKXDFAd3Tkj7zUxBDQkxioLDyqLJqLvNCdAgDccFpeRDgE9bP2N7VVLbVdBBjiFwhQhYSewgXTi4KTmuqa9",
  "key9": "662CACfRVexFaqGKLUJ3Q4R7QxWveoUr2C9m3PzKeGjkiUhJ8AGrhHtR5zK2nj1fZcWpzfkbVnM3jMFsXWQT5ajP",
  "key10": "3jLT5WFsxvVKx7izbRzBGv4XdT4WsT2iP3V4Mt2tsaJGUGHqhfzwLJ1gUFs15T2YCw25NqeCNpv9X6sDLp52hT8s",
  "key11": "mj1RgxhLGaeiPMzBWVxsgTC56DSseiotkuhuQ9A1SvUGHHpFNZyozYqdnhVPjB5adimYkXvcmLaKtLhibaCAsGW",
  "key12": "3u1DA8T4MjRbewPndqVcGUXuUrsyh7Z5utgjAuzW5tapfN2TVgpAY2ndQPCvwRimTJsT9EC4xwGSgcYy2xejnGpQ",
  "key13": "546appZNEbHC2M8GU28iSFLaxwnQrB4ZP4FUiQSrSgAJDwR4PW9qpeCoiTJydjSsBZBJYY778kG8xhUTRZQ5bpbu",
  "key14": "5jq91YgzCGsPSaXPSLQemSULC5YkYdfwdanqQnL1MrEnwaqfNX1oks8uUBGGhhfgFZGfaAfshLfv8v1Vo2EAza2r",
  "key15": "41WGyRePtVVkos35WAZfSXqpLbmtJwwnf6oJKS54MGgogY6auPgmLKWLBnaWpKYSYFCtcXrsQ85hVCatdaZDYCQN",
  "key16": "33upejuwKp2NS4p3dRZqTheSnGpJLDNw5XrSjhFpucvxpmNEnbDiEgWsddAVfQYsvwFZCvrs23oMinWPnueS5CYz",
  "key17": "4Dx7sDhzH9B9j6TJzZiC13KfA1ZoFEiZFrGdFLnjz3nMj87emmrQy1xXUtXxjU1v32oQQYHzjUGEdJyPSTkVBRvP",
  "key18": "ug1V7CmAjms7rxuT7XLeg18LMsCeYBXS3u2RTLBLLRACyBBoWeRqu3ShE7hTJW8NvJENA4eMQZbrCsTCPvpnK1s",
  "key19": "5TqSwobNuY8M3D2jqgeUDrsgPTgDVTjy4cXW2Bv8GFRdVr3sZfDxsbYxqVbXr8xvryYGgvnR8E8LKP3GNMtvFatK",
  "key20": "MwmwFz8LmjN7YK74jsn82ktfkhhX8GLcCpKD5GxnjzZL3KZnmaZL52chKQK6DcWrHa9J5yR6uvEVEgaJpcM1Etm",
  "key21": "39rRXVgEhQre3AfqjWTS2y2tLVCHVaMdehAKgY28HZ9Yz5DvK3QnMVUkLfc9PhaYkFYMXpEJJNKe8qB8Cc7BehgF",
  "key22": "4hY9bMxCCJJLGN9Mas9ZjJrRBzeUBg7EoLbhMoUpKewatkqmFBi34p1UF13Z7CVmLLynQMMqdZHKUWFf8R3VsktR",
  "key23": "5ThCYm66uphjjQ55mGxupGPtyYayFxcHqXtVQbdExGr4jtUrse3tdHbeZfJgdmSUEDpjHJbVHrNhFWQaedLp5CnQ",
  "key24": "5s7NJmtP4fydBJSZ1u2FXMuAkwgqHMPTRqMDwYTsZesyRcFS1JL6GGtotXRmLscH1uxXBkn6REQ88jbFZxNYVJuW",
  "key25": "3DA1fuGacKLRa2GufXQNanJLMUoGscPbQhksWQXXh6bzCwbVsaHubiN544if4QHKy64GD8qXSgwnH17QdA6QBbCP",
  "key26": "3gVgzmiJggYHEYPVNS1Tcpzx65oAGVJNmp7di5FFd4x6TpDEGXJ8hmSteQusA7kNQtXAuVnUEuN6zJ716jL11bkM"
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
