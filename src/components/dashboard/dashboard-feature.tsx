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
    "4B3kHPMicnjQKThtNRmrqmrXEKFPS5rLa6G9vLEe9hFPhGoMzK42y1Xyv9eU4HfUdNLSwB7kaz6VhUVvebX4LWz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjLV5NFfzhqkTX8QLu1zMe1hsDT9zYgNYENmXLrvWsDPTsiFnN7Fbg49mEZY4ujX7L3Pwr4urb87B6K6jCk4uuJ",
  "key1": "2Ja8rR9k35sGti5Qwv6d16jkco6rNx64hdMA8JUFBsumNxKYhAG6tinpCBQA9eWQTQqYfc3dXSLrEkS5kEShuTPy",
  "key2": "52vSMEaRf8rQBmEpYsRTpwwHFhPRDEL4h8w7CrWPytvfNBkAVtjHvmhyMPEzDEKtBS1Qr4SguyLQ21WdNjzWkBrQ",
  "key3": "4dYJpcpRwJ6RNhJM7yLrHHtZpmcT46UM9xE7ivyPMrWp6ugaAKT9J4zjiXHQd89djkiasqyYoctwrBJtjQ3xZ9iS",
  "key4": "53XcNZqKXPRMN5tXo6PvfaBrB7TbvaNk3iFnUmqNXWTMmZ1vNCF9m9Uz2AUfNQ8Wdj9FAXoxS35BNaraLsfBijA2",
  "key5": "5Hncuy5aZDq1ZhBFCWkazNc17WZc3H3D7LJiW66d3uQgAQXFKjJzw82hCrHgpg2hc4QsZPc6LviC6eRi7KfCwRwu",
  "key6": "2kNgsAFKpmNgpLvZCHzHsAc6C2oP3GbtsgoqTFwwTyoZeerun233Ry6gysHzmfZAE2rbkw1FmYtEPQUsFxeA575u",
  "key7": "e7B3BJgumqVg3ubgp7wgeJa9n4PofcEpzN1PiiPeA631QCLWdG9tCRUD63uuESo9EzE596UaE2W8CGYbD27L9Gu",
  "key8": "5bjFT9EQN3vfNP3VX1cAJoC5ASckJRXBec74hqjfckkZGjxG4rZRTAAQUhEAVmMHQ338Mf1UmmJ2jZ7kX1jMmswV",
  "key9": "2FqwpdWMsbs7cgAFmwz7xcuK3Jyrd9H7J2ibqec1E7axGV1jajAhZDCVtuqVSFnzK9Wydm5NFvT6UzjVVeZt6sF8",
  "key10": "4X2mUwW1FL1c4WG23tJDzqvdTNAhpxiGayZ5n5tTMHu1Pn3KtMLgbQ3uFoNseaNduQFYUfn84DYEFdDzH2wLDXKC",
  "key11": "DaymF6dYb32qLRCtqs34S4s1nd8EWvowgm8ZkdPpvyx7crN6cyrMdc93DKg9G27wa7idxG4V9E1sLi2BFC2gJ7b",
  "key12": "3bGWQmckjkVuUKJj35FLH51BqUZUZPD6nKSUx4eHufaEZre7CiFrP5Gm2JaoynXsE6smGLN25iefHuwGAtKuve3j",
  "key13": "4MYHbaUe7ajArPH5D5ZBQYGDn2DJGcVYXo2qw4ePNLA8XSX4vW6uEaBhm37eaxeuEMyBMcLfoMWXAi4jYGhdMi1T",
  "key14": "5GAxnMFaPFTmeziMaNwfR46zR3Hg322brmiUifKU5RoacdLSNFyxL727dzsN2TVXgBf1nVskJg6rcvfRb5TqkDcQ",
  "key15": "37HRTDCe51ZUt2rihHKj2Dvdo3ZQAcrSzdtg1ovJSFG2LWJfV2jBwM5Hck62GLhjjLByaS4UM1QLqYLViUXBZtAm",
  "key16": "3VCAidh4XLW37NCVDfua9fTHNhX2zW5Vo9VKXcD6WKmCEpHeyNa9LxgmYTj4JLrwgT5XKabgSk7Y4QCiWZunCawK",
  "key17": "5esSsUYVW793UrTm52rP4Bo7dKrVEYUXzf1PeqNT9o4zfSzE47HC5HeQEg8nqfM34diNEZfpwV24hcZSFuFRyHCq",
  "key18": "Anq4T4BZ9wNEuRCkMLy8rxqTPLNo7qo9MvRLfuwbDheiqzgtiDHEFoLvhKUFXgjuc9xnPzkf5jUhjTkcyPkuKvN",
  "key19": "5bDJutgmv1yKAS3SweFq5pvpJox5RTGsr2xBvFPfWJ9Q9GtE8MNbnczZ19UnQAjkDf6k4z2tozpRy3pJ5RDccF19",
  "key20": "58gphGHpxYwGzXGTuFe2dAktR1wP4j2tXhp7cghk1ygaAzvZYEEmYrX4ormmqyvoTwfGRGTjB1Ata5nHHkVSJjhq",
  "key21": "2Nimh2uNHCc9GvGkhLtTMssU6FZD2EJjh7wmGMKXULYoSCAtpPb4hBYL1XzmivrNWaQzL5vpkGVjBuycKXaEVo7G",
  "key22": "2YSHuBqyHR1RZ7qADuce7MmjoQwXPbNs8dEduAR51c6PUVSPpCjp37bxz18koNr9QspD7hN3eYgXsM2VQGiFc11p",
  "key23": "4x8ACFcjJDrU5FB8ng6ceJXgpL19VRqovfGZjig9je4Ve1Y7UHsPoQfC7dQq2KMD6WvKwzZC9M3fMqRQMtjFme4h",
  "key24": "3vsydPnXhazpEpJANDH7TbjXLSJ6Ycnk3ZMzGT1FgGjc81amktX2aUKKNtsMxTH18sSb6sj6WKx5gpodfW5J7Ey2",
  "key25": "2KyBwPAXznLeQE6U3ip1zpK1wTwZ2oz9t5TKs1yQEiHf7qXH9PG6ADfP2EUTkx2C9dKikzFjh5q4KFmfHWFiZcGc",
  "key26": "4RJuNznNRm4u56Ag4sJGm6fdfsX4aSQwqDmaefSacAAZ2AjxtNv53KbAbnWL5X2LmDa9pcbFpW6iToU8GLx6X1Ts",
  "key27": "PRVdhGBDFaZqeAjJA9XjgmLVpZB4UZMocn9gBk5qVrEjdTcaRYZKKUy6gMNKUZzEJF813nJoGhbX938bvg4TMT4",
  "key28": "4oCMb9QmMKTmMig4PW4NJHhEvgpEuWqEJyM4wU21iMm2ikJLxe82rsqJbY4epedYvsDnQZBRpVLmDwk4V5bhZoaS",
  "key29": "2TZbtSjpnP2EVNcsWVj3N5rHeKkk9GUBkB5QoLgpjuoq8UZxWYUUKtXD1QKHvbLE3NkSRv4cPdeiGPnWdzovrfFA"
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
