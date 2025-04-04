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
    "KVE3TSaQKKCjmNM78zrmWec2gHgbUctcd8Gj4Gyvx4BNxzHmqTn26nTRE8BfcLgo3twoea4tiVrJ2NBxseoWSBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ak9UATBKpP2unSWeVyHdwwmfv4f6LDspwEvCSNL1wQ6andwEc4HDsZtfxtykVDaUNZ1XnWzdEo3g3L37SKvzZeo",
  "key1": "5NqG1ZkNrDAra9VZVnC11ZDnBqKz6GHVxg62vBj55X96YHmY74xAnfCsCwCNEqZ6hPnecj88uRKzgLFEqxfkCohX",
  "key2": "3PS8PoJnjocHpbWtmkEJyMWm2nsxAEkYNfAECujkmBcdyMMwPUeFkyefmK8dhGn9Ze7xJorCm22hDLY2vxP9a7i",
  "key3": "5xKfMyZFWg3pR57zZ45P9eji1K8ZFXvkadCaD9d3ZEooEPuU1KEtLB317Ymr7zJYRK4wiRCWzjWoJDxc2viJQckZ",
  "key4": "2qAf7BFagTKHaFcvJN7S3pUxMcL5L3pf35WminsBr3jerbGfdAGDkqPj54gjXQrEjx2GHnbLxYKremzUwc2mNYcn",
  "key5": "2dtrTwCizF9zQ2kixzTf3eCxbsNmQdAPpBs7X9sGCdKjiTVrdW65KUTpJDDNJsd43rTJG7S8vUMzNjoZoxQiQLSq",
  "key6": "Frms1g1GgnxmuH46YUs8rSAfar1Rp7dTiJHJV9cBfPYGttJwhLhSGaiuipdXuKYgao38DngzxzLVseZYeN77B4Y",
  "key7": "4cdSR6Ce2tSVRWy2X7EdKWWTmvwQERA2awzG5MVTy2gtrXpXYEFQBYU3nHNEZJHktsWdtd18AoWUST1rWXwNuroU",
  "key8": "4qZChZH8AgtwFXmTzCe2RvgL2YFCEDLWm4xkHtDVWhv5D91xSUL5frcjqoHcEgW2sfkSS2PVD5xHX2WLYHnQAcbN",
  "key9": "2tqx6GNN73LMwW4Je4jwYLw7CrLn31V9kyAC2pus7aNLiD5C7jYUS5PrPbRzX7pUFj7PRpBvjKqLdooDafpFNzdf",
  "key10": "58GKhVS1xmsHnkD9otY2AzEeEXqyHwErhp9g7i2p7tShMFXE7hStgN7w1NvLznT9aSk6hPKnZnJzMUYGqPNjZY34",
  "key11": "2c1ognB71ny1ZJvnMB6yjQCZ9hG5VsWk4XDExKKGY6p5nuvrw7j1iKuCY2cpr1ky9VABHvc7dhT1zHEMgyW8XCnQ",
  "key12": "CuS4yBaquEWgJVAGtn4m1dhn8jFeMEk213ApS7H8xjNcn6rT84bzXXWucxiD2TfV1HNbo47aBvA1X6pQC7r9hPZ",
  "key13": "2nmg4U7rz25X7yKAKemtmw6mzLjWUvnoPMG7XYi3XYaUYBvUY6LjVxRPfbuAcjcewADHGdKLbkGRSmGgbMrUCmYq",
  "key14": "2CnPe8Ek5hLpY8GiEpLoMuPm1u3xZRSuthjdbYJiFEWYpPh8TLHnb5hheqwyCKpdDLYmF6enBYAt689s564j6iZY",
  "key15": "U5X2Q4w8LUvESDeCA8gLvEVgrUCPmr3Xd4xwtYeTVXk6SWhbhwJGc5SF677gYa9QqrqAKohchfdgBNqWf3xE9NQ",
  "key16": "3HP6QfXAkv5FBf5pG2tqc4yYmeUpuxx2AVGcQxNPbjnjAhuHAuMFB8eZDhsEeCPSwNmngMRbqszE7jiqDXjMT1UH",
  "key17": "2VKequsoVvstB4ayK7nTS6CsavBAwvHxNvpnDq81T5doCo7bfajiyzeNBkfQhCS2N3sCxYB5znkUUqYaTajGRtyc",
  "key18": "2UTYiU4i4zQgTwmJAUsHdpyWPwCpvUDHPhHhDmxS2Hk98sdoG2Y744sDMsAEg4r1QCnpAkbXbUdxiSLv2RG9ptQ3",
  "key19": "Mrab8YPeupQmKVCHCFehCJHkD4mp4RibHM7XrDRmDiZfvZrpmkoKkNpJYWK67HczVuYH2ozG8kYU9NGnocUNzvB",
  "key20": "4VEdJ3zKR7GzSaHaZ1dWpjn85mUwYcWtBn2D9QCE1yuDMvY2CBfWFwsLPwz2YEiNaG5B9LZLmm8a76WT2ZG9sqj3",
  "key21": "3ji8midcZH7pzRH1MhvCtSwLkVUkbHeAk7owT2DDryPvMsrD4GXWETHDtmyqLDqE3NQ48MXr5vXdrhQHMbw7rC1M",
  "key22": "5icMoVuJai26pJM9AnnLMbe6uHnrMsFFA5QujyRzMAai7rBi6FiA7ACLtnWwnaawZBcweq1ocGi7FdFruT3ZYWWE",
  "key23": "MZVXKKLwDT4fz8gozu6DynwqBEH1fyTrTs4rhydbQQMN4P7izBD5dyUF6EPiQvWYRZBXgYYf7p4sJjJu6JXUkCa",
  "key24": "3wmHKk7j3GGgRVH9w2BvuodGupfKBxaBbSWA8oYBqdscJ8nP7PMmte1bHMbPqbcJvVGG1LGGUarrnoZ4LC1LooGF",
  "key25": "64X7NQEQ6SQ34e7DEsUy3361LchC2ePBWcTdk9ociwYbQk9H2SoF3kxwyG7Nn46569AiJ1fwqqEW5fzxZNSX6yAt",
  "key26": "3EmdzUbzgwzMB29MeDYW3DhRuoFDd72qV8XzS1M3AzWhyjJJhSYwnZutzKKv9HB7rqUPUSiBnXVbp6vUBJDeTc8X"
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
