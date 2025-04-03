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
    "4ru99ig5oShXdMJtoxBM1H2KcZTcTYBdN4PYksHBUA4YuT9BusZKs5eDZaTRF365Tk2sMD8JhpPspZSZrmFL2nbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4fsMCEFruSFPu7hdaPXcyPeodWMKzoLqCQpfdihiH58fcBqiVSmXRGgr2D6PBVyDe92RiYbqbVXXXRZZSPTr3S",
  "key1": "2X2mNzL1qUcF97YhhJTPnD9T4qosNZUUMMnAwk9SZwtXs3gL43LxjskhyJt1LS8xXNULHTRLDKnpoUxyLY9LEZDV",
  "key2": "3qxFm6UwmC8uwtRrWjnnBea2os92v4vbtRFLWToYG7repieNEjpUcK7LA1eZ8MpmB4YPD1PbQ5kZarfWAboHJPK6",
  "key3": "2NZkF5yk53vgAJn1tPsregEiwccNxGoamKBdLW7aXdpU1nZJcMqckT4KAxzq67tBewZPp9SmnEemy1tkbZXSUMVK",
  "key4": "4bdrGGyzJp1naSRSuBkfLWnbcfqx6s1dtV4HwmGWqoRAG682D5gJCqRDG9gZS8KMrMzf2TraefG8yUWc74GKG9kj",
  "key5": "Nwd5Qo5SVK2EcPBzNqav6KtZvrzrgyvEucbfBRpFq3Kx9bxJGvDGn3BQCRazSEEmGMpwxiik9vtaouYioTUHLi1",
  "key6": "2mRaxMaijiqWDthAwELKjZwcdktEiQWHt1EYoYw9JTb7oD8CNJoxHUmD8vydPPPr2TUhMLRLPpKFKuSke4qbc3vY",
  "key7": "4VuaovtXU5MRHcTYwG248ZFBjRwsTpZ1LuwQPe1fLeyd6dMG9yWKb51ewYUBmLz1bBXWizkvpL18mNwNVimG9wV1",
  "key8": "3d6QeysFxAYUxdZQeJQLqBsgUSJBhBcM6WHqdYwjbEjnhC5h6n6s3V9St8kiwn6zmjqd9mfX1YST1JzVWVycZ3CQ",
  "key9": "4T62QDns1EP1FxVwTB4yUPjzTFSRF3zaevyfcAavqVATRMWqtdXYnHyQ4Kkx6EeWgu7KnzpcvpkbqYJho3WfPY4s",
  "key10": "3iaNgDjkzBWmoYWAYkMREdKnyMPYhTe6jpdMYJ7fPjXt6CHPnXquLDVcryhAtMqkcZmeEr7nGWhZE6Sn8ebMjreH",
  "key11": "3FyqmjaWaGGQjetnCmKwJdjoX7dR7Zo455bBnJqw9p3e39ercJrYzzm4jdMtFmTLKCoDrhsq1MDjZatjkXBFHYn6",
  "key12": "49Ad4JjkLt97zUTcC1aAhWdK3S6XcmwadLkrJ42BCFgLUhez9qpLJKFFHkhxVLZ77B5fc9dyP5r4i2EpSqgf1gJP",
  "key13": "qBhGgDzLZhWwGzahv4pR5BCiTU42cNmCDV4u1fFbsjhgVZyxFEPnoJSYAi5tXw2g6zxEZjEUf6g8wrdEXiJ3z14",
  "key14": "DpMoZgXoeo9M5RnFHDgn4FeRYgmCh2VA8xiFXKBRZwKbmiBXc9RJKZDQisWxwn2Tv2hMikwFeaDDsBxp6q6f5fL",
  "key15": "5urY7TcVU2HeGtQcCtwnsKzTJkawPVvNcqeiG37xxAbRhoxJKtoxjdULDyrn3xttGdzvxWXPnFqJw7nZGXRthcGK",
  "key16": "2P8WAv219KNmbFBnTkE8aAakA5Pi1C2XC27fqmb2D9oLwmCELyiAiXrKS1We2QZmoaQ1nLUnawoxxKFqxkYq6G4f",
  "key17": "4u4FR9rtUmJRNCWeD7csMroQ76qqe1JQufcNxch12U4dGRMVXvutsxTb99qbUEomhNwzkJzUHWuJZw8YWk3EBuWw",
  "key18": "3mLtqJHau5gX5STr4vYR7JkLMFXBczspEZi9YQcJ9ELdhehyxa7T13NenZ7HaB7swRcZRS8xzZCdazXanA6XPRDi",
  "key19": "3z35SGcYQtzg2gBRQGjk8qukKM3GH3GM8emkKuRsCNvUi78NDHpeDFUyBhXdVJqBFkjoodj2Aq2Nz1C27vTH15aF",
  "key20": "4D9WDfvUKv3aMe6tUoz9fMw7bRytbQYtks5A79hwWA4qmHWcdexfvwMrX3Yhw8NLAGQUAumLd5AG5esCwhADftMX",
  "key21": "4kxNE8S5RcffVofMCyPTS7hvxAxWgEo3urZsFU6RfDTUjBYkaqm8z9dfoCDrnZukLGA4DDCLnAHNgWSfoGTJWatB",
  "key22": "57nGgw4T4krhbheViM8ZYfjHuNdqLgxajC85wqgZZoeCwURQQLM7dMZKdRnE8Qc8SjkAB8wbTRLkzYjw77uehG7n",
  "key23": "5gXTEDHAYTP4koPX7CJu59hBr55Gv31dby1ezndNJHo6RHqhiDW8xeBRnLYS8GK92Xbe4V6uzRbYHwr83ouM61jQ",
  "key24": "LoeaRKpdLtaM8NT8V52cHyHeUFf9j1spRftLqxNVqZKkGseqRSVWHASn3WeJgcAzW3oSmJ7kYHAAG1VrSTpSQZA",
  "key25": "3ayNKDtdzHcgMXfpYPnZxf7hxHUMoEiqvM8ce71JvXxF9pxEW1tSUr5nqT672jT3qEQAYRDfQ1GW9SbSem1thcHf",
  "key26": "3nD2KZqaL62kYD6VhXFgeQiNNR5DZy4bz9KH2WjUdtS2pGsGJfKTyuNsihdwLYdjF3p87ieRS9suSZgrjoz4BLzk",
  "key27": "3dhAiirqMKeMP9iwdRm16ywe8LvMZKKzcZpzk434zbgjwfnZXGU5XPLbwKojjFAj33yKJeRr3VtymWky6k6dtFCe",
  "key28": "4VLgfY2KTr44ijzv8SMpacTCd7szvbdigQEWrjQvWUJPvAbotAbxMxHaAKqKBMBxvwzvau3KeWDSBSPmqHoEMZbh",
  "key29": "3H5LnM6by3kQH5qSZfzPhXsNMNeEXkuE569XxYcwrM7KkpCRvk4pZnzRv7G4hncVP7BM3yqLfwx5pDWHkhJNsGf1",
  "key30": "2wamVGY52PhdhUykBrvZnd7HkvR7w13LZY54pkekHUqJtxaQLa5YpdRqRwE6U4nuULuGqf4PVkp2DgPjU7CP9WEg"
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
