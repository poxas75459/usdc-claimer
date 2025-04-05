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
    "5LcEWbfNxSXyjAcSUtXq12Crq58VP9D6QuXJGzrxhXVdHcU2bYHhukkM3GngBDNBAeacu5nP8KCs7UHJfNJCYmfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VuEFPeBS3jvgWMExSE6UF1mYJMvCZnMs6BiEMnpKcewQnQYCHLQeML9856YJbhVb4Reg4v9TMEkfhqhUrTs7phQ",
  "key1": "2yWTg5G4c1qaXRggv5EEj9nB8A2pVrW2u6ZTm2ADUfoRdu14hiXqfWX3YVNnPiydTqqYotwFqbu52reMTfhr4chz",
  "key2": "2NicAC2JwRdNAUYFBdmTSgiiHDMxRAa8ersNAkokbzqp6VgwF1xpVLr3e1pjwj9jdtbgwkNpuqYPwNM14eiPGF5d",
  "key3": "vhhfVQTzP1pnsDuvuLyxN6R7eDUHavm5cDwoWYf4MeKBTo3w9Vs6sccATwTUz3ToTem3sf5wrpTqH2P2f6a9Gkn",
  "key4": "4z76EPeUmxuxZz3omn5tCckAjB1nNYnGoDvbFL2wVopggQCs1HPnBs9Y755cChDX2Hw2EQ76xy4kYWSU8zJjcfRZ",
  "key5": "o8JtZnfKRNaG4sh1861aJWkSnxJK6GtxHeWP7x6G8wBxUWj3w4PyrbCRpY7jqrnekxRYTkPHYM9rrD3iAfKDmAP",
  "key6": "51FSd81rG3neumEF4uqwgNDB1vDe24ssF2vkQjmZwTgh2CQ649LJmjTmgmgtVhuYdnLV5EcEBTyPKroYZqf3xMh5",
  "key7": "3rDw7Xrg8QZf2oWnudCwyrqJ3TacWTvbNioCmiXjZjDE2NxwnidvDMfoSbgDreEg1XhhYENDdVuCkDwZJvArzjNy",
  "key8": "hBh7ojFDxi17gVDVvDzD6JwMHSYgnVG11kHuq4JG4JLK84hXo6ogyNqKsNPDKWhJuyLuEQDs2oKJfViAqcUfRmy",
  "key9": "4xCZHmn2g4trWmzqos38TpsicJ3tyYbcQbyqCRMyu5qbGvWpQevcrQHxwJy1Ss3j6kZxSryRAMqkY2zNPgjk8j5p",
  "key10": "4VgSoL52W3erEbm1nfCdirZt9vkPrczcLintxbLnf5d1KiTDhmj6RNVqrjtE28LVS8a2tCv6LVZcuVLC8bSU6EP2",
  "key11": "LHfUEsU532WsqG5tVTwELhSZgv4XipHP9VrkJf3cGyqftQ7PSvbJu7j6VkzTmZ5JFJeNoxnNiPpSkZmn5BgyL1b",
  "key12": "2CPnP19Y7DvMCiM5oB5dhugjPUE9TNT5XMBHqYECz3YsxVPH1pDetavwX9e5dWQzFA8xtwErnRLZmDCS746otKyV",
  "key13": "2pQN67Gwd75QXRUqJXWpusK6GSbSUEs7LapGjRje5DkiWUNqNR5sFGSa7RVPRWqjww2bE24magY4QvaWGUovxfFp",
  "key14": "62cKdNQJxV1YRVqGmaU6DkqjUffL7mPJsur3PPPjyFvf45fVeuugYZbKPrtyDwhF4vHUaHrNQdXX9i1DVaa3H85N",
  "key15": "MKZL2KE9GvPbEQ8wCP5hWJUwH6dWMyL2LihWR6LNYQkoxkUAc48UEgxZ9GfRY5r94JJgQMp2AEvPyVpBoowGB3M",
  "key16": "5wQJvwLQE9sZBa6eGf57LsvSAT7e5A9SyaEtJL4V1JDkJb4diYUr2bb2Xjv9HLzTYa8ERAAwD2DZTp4mq7Lp1fMt",
  "key17": "4d8EX4BuKZos6FYijBx7yjYjdwwLkPKi4xqPeCG3C2Tv6UQPijeP6asxWBQ6NYremBLr4MsNy1fGnqMdTZSPxGSQ",
  "key18": "3QLq4imyvXHpYV81P7mZuMVjzzDQ2vSxWDuVfaNFRjeMXqK9SyJtndNonyqHPneu7GRfm4tkWCPQrfhwieKrBcuu",
  "key19": "3yYqS4ZuSAuSQyssdKCvvYKp1ug8Pb9To4fxPHEzCbqaxzRQ4UovFuN98oK1i7VNxxEwvtWLzjFiPvg2AZ9jbPzQ",
  "key20": "Fbs5c12AkHzHvyArkwBRfwYnJVQQgThfzjLQPwJzeMHoqwzKdAAZTu7VjwTNMWKU5jESTmJ1t3oCB4PVqmUavgm",
  "key21": "3YWSRa9MyjBNt1jqVt37WETm3xxpsf6VihohizD9otwkMj7Jq6jnHmNHSa4Q8u8V92amKfvSZSEveMoq2CvdAztm",
  "key22": "m3iYgHvjBrAHRvELSQQainas27Lxcz3EQXgQWvg7YoniSC3ZHbAwZ1dMWZD2wPrfygbzAWUk6zwMReCPcYEhyMh",
  "key23": "5KuAq5Muv1r3zKWaDJtWxeCvvMxuH1qfFAy2zQGEj8n4RjxcmnQezTXfcR8qCrw1JH5yewcq2pYFLs8cL3nv5b1",
  "key24": "2PahR7LZHvESPErvbJPf9g2RFYoqzLf3kbkzECXH617SQLNLszxQP7pQUsZoebpytkXgr54EJ93hKUi6kavsEFum",
  "key25": "2F289Ji2bgzQfywTPrqHVQJ2Bn7xQvdqik2DVonN1Bq93Am8RZC7UShdaVmAiCJsN6AkSQCxAYc7m2M5ca9NZpKy",
  "key26": "3KEh4MYQjv2CopiUMdRFGoCNZUSu4eEaEr9YS8RSxuiQShecdBrdmULKAXXFeKXc1h7bQBkxFZNfheMc7nxEWS2U",
  "key27": "2adiGmM1arvdtxsM2hmCxutDwe1L4Ev32ezvEoYRHcXYV5fED2y5rSazTRFFGnj4imFmcihWwig9uRHbQ3FiVu4M",
  "key28": "BwSVyJ9cVEw6gPbPotoUv8mBpYa5MFTRrTxePm3A3DnXw478Ni6neBx3sWJSichnY2K1Z1EPjqRouw9YDgyNEUJ",
  "key29": "3byihYCtAvSaJBsSbxeTS8T2iQFu9sMF7FJg9mzhmrkZaPT1QUd1cLTJooa1pB1syFZdM6hzemt2eBAwVipF94Rs",
  "key30": "2EvkaF985mzzTWmW2ETUU6EJ6ZMrYXrRnyZDPHo7KpMghQ8T7kw9kKpxzq8zg7CAUqDtfbSztdfmqf4dNe8ES2Zm",
  "key31": "4MzQT5KApyaVcwsZKCuiDiv13dXHnkdZFK4k7ViwAZ1XSkcYdL7Xk1QPft2JXDryPLBFUt2XNeov7gSu7QE7qxMH"
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
