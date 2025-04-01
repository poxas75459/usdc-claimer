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
    "4hdXLhF42cQer3o4qWk4fiAUfLwF7Ah26D2186gSiak1rfXdVkg6jhTjZSJZ6BChPY79P9BhPd2bCAfwogEFFKnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X8zBTgYmT4bha8ddNEwXDGFhpGcfpBtarQ6Z47RYXY6gXxkdh4Ctv9SMGqUbmzK9RBomQUy9ufunEe81nXv9KFP",
  "key1": "2eEov2gVjKnhkXD2W7bHqzZ2eCCeVAG1hzqqcC7T6UEEknqvLs72pxBDNRisoAY3wfm75VeJYkNyqWfbYSd4bVVo",
  "key2": "2KApSn2rBy8GfRcQhq1GZvHXiPqqh4nXFLYt1cwSK2apWqdHTVs2uYUBgRE2y6NtJb9n5ZxQeUinKVKZGLj9LjWj",
  "key3": "5ePHd2Qk423mPiQYQDixw3Pfh7ks3qJmBYbSGi5s2aVLw58LcTLX29GwxkDWisjeT1oTNQC7uN7yggFsuzvQECn",
  "key4": "2tafWZFjSry5FFjSnw2g2xwVQjeuRKfR3cnZzYp24WEfKiebc1JyfztPZWKgw9Bt4bCHbQ1kMd1Nzhaai5uvH6gs",
  "key5": "4iW37h2v1zP2sTv3Naddi8C9FBRjmnJDddttSYRQWND1HzgTHNTXTXUAtPZm54zxWCaQ7JXaMN9G2HE1GP2jhYUx",
  "key6": "uFB98sRQH3C57Ax2q13frHxa3mrwuu2wTJ8BRMYTGVZLQ1xyhYC75P23TByUWkgxRgKTW81tDTD5WZS9PmPf1Pv",
  "key7": "4Nuz6FaPUZFYNUQqAKPJ5oWUBnJm76iKtVAQB6HYuV43bxf8vPXx6uPQUeJ8ctLxu1QXSTcFHb4mx1gSC49U1fKd",
  "key8": "NGpqryRWaKmL6mhQyKNYda5XqKft87jJkXePc1qWG8t5jCtzu6iYiezVeMdFeP4Z7ySM1H3V5VbDAeUC3Pj9wrn",
  "key9": "7awypXF5ffmZe4Rm9pL5ftbei5kdPf5P6uX1VUAv4wYTfHJPL4c7BwQN472K7dWM1wDj7YUCRXVBrxNAo4XdKHh",
  "key10": "28Vzz4aDvXAj2ci21AXbLFLFDRkpfYDsEwhar6eCaJVfPzVA3B5L3PNG3ZGZkEv7kw5h5u5uk2ro69yHNA3adMbW",
  "key11": "zpPMkBMQHXpu8UwQUhR6YkHPL75saGNtuAzkQGiyxVcQHP7xq2wVw3s63yoKe1u12ugfjbwjQsCnNgHcxSFP61R",
  "key12": "5UTuyArSC2AwCKqjuSn5o4uwg1xN1aDvsjFY3AHRg7E86RnvBpweNaW2Dydj2Au6ACqTCiw5UfS9vzkSD4MMtt2y",
  "key13": "ropKTV3et5deaq6fVUP8pErv3THP167Fi4fhAHi57zMaMg2kr4N1BNeq8FsFy3BmR6iqESECrkV7CUNunqBDiPs",
  "key14": "3PwURugD2tt31Lta2FSTqVGMXprsp211U3t7yWtTB61KeL3phAqaePZKk7ZVtwjHfkdLduY1YgHMEaYqoszDG5iH",
  "key15": "ZC5RLT9DHBf91zBSBXERYDhMFFJ9ivc7uz53zd2J4VS11Bj2nepeE8aBq8Mhnef466Cz1aGANaFxMFYGhaSFjhs",
  "key16": "5dHPGJr3fvnz9BjDJYs4GMqKyFJZUfMc9cmd2wzzAwXsGnfamnda6a4KQhMiAFbpQfkAnW3kvb5suKa4Segxd25Y",
  "key17": "5vEWzGJx9eSa8qCt3UuYFkEYDzdcpqPyxcL8SgX8U5kdcMEoJT6DvvVB56W5JeoKr7jWjX1h5hBGNb1FXgkTJrBe",
  "key18": "48tprDerMJFaQr77m3r1nuE5XG6sTYy8sPUEcoguigcWoLfyzeUBcePDkAJHqpyD8ZEhzMCFMvHkrcocc8dDmmYn",
  "key19": "4HAAzUB95PvsRXyzX8igwVonLhyiA6arMcW3C4WaP9nwsmaRTsyVLrZcmz6jCCUwwbs4MTB5aCJ5EJ7cr4JT6do1",
  "key20": "38HXejJC3zzVBGF8f9PS7t7JVTQbYfJwg7rHRuaWjmxNvKxRZSc7uPrw7YfNv1ZZCGzZkoQVMA1aV2GESVmZbTcs",
  "key21": "325Dhb1SZbgNwaNwbAu7Lyc1CK2qpzK3y3v8FFxwKLTXEtnRagfjuPT7XsFNsEuhQ6KtPR3Jhs4Qf9XWWYFpEjeJ",
  "key22": "2qz6npgSS2koRvoohwveG9gMxBjZ1RBJx8yqgwM3MtMwetWxKoM7rKWZWSJJPNGRgoDjhJiQsGquBYmJprzSoUBW",
  "key23": "3nZk5bH5MdZag39tFqTK5iXHjU1PidkcAiPDsw6C7iCGEbXxyDZ4UbMFyVtsNDjiDBYbz2DEQ2epVrSb5SerdB2Z",
  "key24": "1AWU5KAyoeuAPXqYiT3CrfRnTzK6nxx6yj3mCc7S6ZCnHWZhpC2Q8jRYXfsC2euzERt4W9mdHd2VVFiogjmqFYR",
  "key25": "4mQ8q6vkT43NNxGv6yKnbXz3Pbvuo73aJw577nhvJmBXD1nPnmH493cshkkvd5xFQeTsc1TKop5PkBTuGv3dQp7z",
  "key26": "31Z3Av8DDwxeYbzMpb11LgqnsNZFWj7wxGQbSZVgRaq8oXdHdEmyNfsHUHd3VPwDq1fqwuXtTQ2bwPpMg3yAjjMn",
  "key27": "NcSR2XyLNbsQYpSdThaQgsFcMUG4mTQsfgFSXBWQ8He7AxxnTwjck5M3AhQi19nLmkdcBKeURGmXPxzEv3aGJ31"
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
