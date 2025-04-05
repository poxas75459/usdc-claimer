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
    "5fFDoRzXRjGx1cUAodL3ywHumbB5f8rerK8EdDi53oM4fEA3caTuDtynoxGagGcNZDtc5rdWsyEiKVMQGLGukr9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXpwzxnicXbmgFSCgJgCVNqLwJHLmvWJegSBc7PrptxYAqE8wRhn2z7pe7KxdWwa2NsF4crqfdLJ8Y22xikQ7LT",
  "key1": "59TjUifhk6aUhtMG2HCsdABpzTCjRaTVb1kL1vj8TKwnren8pffDW9MFXzLJkYgXXjps6nAVbVVDoYGHTqUr2HmP",
  "key2": "TyQzhWnpkJh7tZ5mkTAU1CpeVjE5qQmoCZ9rB2bhdz1VBWK8K2cfE9CQ9VAtDX9d8bA3weUZY8hHtrGMzRuzYwW",
  "key3": "4tAjWBtjTE1tX7WerDrYCjxbxnz4p76HY7QaeBkUxtaHjttNrNfQQfyoKvz4dXRomvqj9jRm3WYUxCPZf78bSJBj",
  "key4": "2ssAxqbhEPMjWaEvRR7VgoaPMQLJqVa3wKvqdkDg1mWkJxz2L335Xv4KYXWukLfXufigczHBDC59UhTie1eSrwaa",
  "key5": "2c6j1YKmndhLC7x8N5hSTaeXG9GAJhr3x8gLhPSHVUamiC5DnJYXZ2edwMGbTi32qq6283ywxUbN63vT7Lqd9aB7",
  "key6": "hPoDB7cYgcEFHu1LkLijSyY94Gvw5EWEZ9D6vx4M36DmhLASUu3fiozftVXoWR3koEQXk8UeXdx5SNPoc1tGha8",
  "key7": "3eR9EvQvWJX57gUPstqmzeQCptLtJYP1m5YL5NcwZDPLRV8jeLAVLaUg2mA9PjbhD13o8AQck5ALCDf7p85rKpXq",
  "key8": "4SXL5hKF4MgteQ1ASKAPvBy7YZhwYMvLzV3XUrCGQaQSoUYyabc1C5f3rrDJNFPWPuYnc4TNmdG79wwhbQRyGsqn",
  "key9": "51VTDFzYwAEgos1wdRpmh6pbE7Xi8LL6MFQiAA2HRMGRNePgn8cryiqhoWYtjLuuGGHPmu1jDbpoZVGy1ndJs9ZB",
  "key10": "3M2P4MzdsfWBvjPXNwMVsFaGfDNWLWZky9jQcVYSQ3GCLykUKM5cojj7bSEunchhPbFjMDBt9vGCGNNKKbABZ2WQ",
  "key11": "4CZ4Gqm4QxaQzZxobHcfhhoYdhjmJgzkBiv8vrmRwSLsFRrFFFUFDidMR8uD5Eg7qVrPKLJsbM49Qdw9iQhiztWj",
  "key12": "66XZpetyRAdGLPsgwiWc8e1YUcTHRaqkKdyoCUq9cPg1TAfNyrEnxXuf16TLMEsKzFA6wekanXWBUGbz33U4GQx4",
  "key13": "5XZmPMPY9L9bp3uuAk18KHWxUmpvwxiypaeUpAfwZvUQ3w9WgUj71VMg9Pix1GcyExHSrYLPfoowHwmz4vLxLB8q",
  "key14": "5Wnz7Sd6ZyTth5cMZuKNtvRLUYnnxVZqQz6qbW8p8NbbLhtyUZZ995KYtNQtK4KigaybtQcs1upH3BT9SCV5kW63",
  "key15": "2P1JHTM15NATuXxkcwG88Fs2iaEBvkmDYxYYAqNW3Ct9MGQ9kiMHy62a1axiaQoCrq6CDbPoxXBvK5cBdDf74PaD",
  "key16": "2w4acHXM7nBDGHbq6aw5xbis2Q4SiqDAUYAP7NkDC9sdhMUXyKqD34jXhez8Ucsjbk5sPxFWne3ZNzU3QXhw7r1b",
  "key17": "5djN3UWBPyQfXB2VfJkrJf9uE2dzsMu5DN9nW8cHU9HDeobyySJJV5upEGj6ShDsA87o7Dg8L4FHzX5ZZLgmiQGr",
  "key18": "4JWbSzjBHMqK1pwnzRdrATHM6JDyiPe2RgDQJMrHnh3AFp6DsVreqT4bfizJHmRxxPRgnbVyS92Cdmj1PaSpKMdg",
  "key19": "3FeS7sRMbJ4gCu63u6LdYVbguppngkqA5DfZYDQ8fxBhMg837UxhXvU5Pg8VsAgUJhVSFPm5qrAYGwamzLbZqjNb",
  "key20": "3gY24MQbVwcYRVBWNnrER5c9Vba5HegAJG6xfh1p6HgRWom48gksuq73AKSLFfiAcrR1k45CDVt2fEASLfWD3hGg",
  "key21": "5wwUyEapkkficZ5aDQ1PeickU4J4T8ueNfbjyULcYXhg2LACach8a5Q7R2rbVYck3pLUEpDYnmPmPy4LAie3SoGJ",
  "key22": "2LoW9dPqADaJDinrxKa5XZ8Ju43d69X9zYtJhrCfu1YHtCJjnxeZ3E4EESgMUrRoicSDRSDdXo6oae8dRb5Wvjbe",
  "key23": "3QJnjzdT2fEQWTZry9kSyKovrjNNW5rsYDYZfafSMpfq5KzVyk12iKc54rvn1a1Vyid4b8pQ7qm5FgyUj232nEMN",
  "key24": "NDo2WSWrq1iWm9Vcqa2Y6fQL6qrU3ZVpFML7jftHRkUbPRgo2BsmjMEngZ6otVN5JsiW7iqqrzCCyKtsYkT5LgV",
  "key25": "3UocpxydMjqnxWDUCmxRP1hUcNTLfz6CgjcrYBKYyriLRyaFUCgAe4mpPPzV1DKQCy9FQ2Nziamitp5W6BF7Bzg4",
  "key26": "5GiubUnrN2FDQcN1Trj6EuXgyDtVtTrLqSaStFsiEshmzAAm8BRhTUFsbJPYfGLaP6tkpAQSLfpqziGP5Q727pdW",
  "key27": "4Smi6SfUQAu9Yiidks5mT1cH5S415pzutQYynSiksgFemS7Y4Hfasa45yikBfsdDHTXRST9h7DebcyLhmnCyhPSf",
  "key28": "5dWbLTLkDYk7QhhD4kmintg7XwwRJRnVo2KsEGT64Q19mxdmNUYxg5oozNATz6415E27MoF5WBegmhx5YvS9voKn",
  "key29": "3n5ik6wKkWv9n6pHtWyPxnf3oDJAajudEHVxMKGdgJ8JrJwzGcijwzPjNfMcvAjjVMH6Gvzgg4uaW3xkKmZdUrSJ",
  "key30": "4bUvmiicKG6tGG4hDRsf7rt1rrc1CULGbmKUmnMrxKiWbBgbQKnrEpzGPnketWkUJbDcRAGAPQSy2XiWP8ADGtRM",
  "key31": "5dJ4BBPT9GYbWP5qvfuq6gGR5UCooeFWurXC1jheLwW3nPgNKzGV2ucQQNMx7QdhNUE1vyXZ2sAUycVXhBYmCnfi",
  "key32": "5ymPi8D32C9BkFm8zpYq1DfuKLkApRPzYhWHu1xcA5aa3vybeyE9Tjmtc8VhsYvfQbw7CySo2hSUnhkc5oEJKL3r",
  "key33": "5uvM27PBwNBTK9fczJkvzA4Psr5KpGXQJYvUWkHwenHG9JkdyYVQNyVMg3q5niHywMYtS5vQ4U5idvREQnb8Hsps",
  "key34": "bS1ECMtwdvi4ifWcKmf9jsjCdUC1VW38LR2Cgp6yFEpSBoE9TuQYnevLAKrtLJ7sBZo1qfYBH7bypYb8AE6cxBf",
  "key35": "48zSUcK78LgrxiFUKzVksLdvEK6K5U6HDjDUWMYucuqPn2kkp9KBDJADvGKmgKEcSivXdAvRiWsxm7WWScueWaRi",
  "key36": "5ijqax13dnjSsYggdzkpVSL6PC7Kdp1uGtZoL9wbnnSwsiJpgKq6svnUDjE1P8h8zNoRs9uk2DnUFNV4z5mRfAJv",
  "key37": "2XwrBQW2rhMfmFP4Auh7a172Yzjv39nprapiE93X9vJ4NPifVbvk4U9DfiSFGfXYDBseuWuSKTg6znrRWH41K1Gi",
  "key38": "62hMWW8RtQqfGUFUcnPCoSqFyXCiAm62wBunyTCTp43vzE8RGrDYFSGNdPAK979Kb2QqEcSfiDg4NKaPcebhpZBx",
  "key39": "3VjmrZ3FL1KGTjb6RTGyBLh958ngSV3qiTLRRGQojv5eo94HZNjqLQdLhRmFyQ8FSpy66xdyVL7pryeUWqGzHQLR",
  "key40": "4pBRx3veenjcZTmUcEPtJpHGPTM77ptdtf38hv5ZrLyKztzTcf5UeAcAv74FAs3z6jtYMFeQQveSbf1F747yk5jQ",
  "key41": "55gcY8eofaWvj8eLnAAVdTaTKbomN6gwKKrpRWQit5kvWqGmXsach95vG8x5VJMfTkhf4NCuhQRhSKgBFdFKNxLD",
  "key42": "5HWvXGZruP1VYv9z2aMu2sRknvQFpSXPTcyaxE8UYhi6oV4HAjkHqse4oL33TRozufqNyPiACaKMEXFpBNXGWhkr",
  "key43": "PsqMwAUqWW1pDnsANzQ9CCaC6tUpaFp7tHTTycbYRLHnahv89NTxowBGMk3V24MU5LTo8Frcj1iVKyLUuqTkz5j",
  "key44": "4EKuR1mVSowhtHYnHBXb5HauKQpxn7i4KxvpZBeERQSNLR8orSRhP6EKQgsxfShCnwf6aka9WWwetmb4tLMr6ozF",
  "key45": "34qbcNJ8Hru6hoLQ1dWGQfeu8CUvHdQGHdRqd3ux4ZvqAfTrRqKr6uD9ZWmFqCQvs1JutZmbYQhQzteauMUSVP2Y",
  "key46": "2JHUSLS2qzKnzZF5ix3yGP4c1XBcbUvUAna5opqEMSWp5WKGo9Ln2afFqG9NqS6WXkT969fppY8h2YeBcJMehi7M"
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
