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
    "5bp6AdM49u9apKq8FJ3VgmYMM9WtEfrLWQ8Wb1KXuyGF3njgnt3ct4fhrQRsQNu5t5cJQXEi3Ts5YgFkRCoTUy4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dtMerSYpbNayJVYmPWPQ7V3vrtYC77HysQqQYxi5G8d6KyxfWMxzj5NrjPEmhvi9SAfhETvx42MPzbQ8PifF9c",
  "key1": "5PPu7p6TWZfBJhaEYSXE3e9J1LupxfBQFA9cWBHMQWcEszCmD4zjV9HUBpgG4c4LMbTVGkUAosFz39HkBo38WTkE",
  "key2": "8LxA18zRkeVk6xAGqSPfYcKaKgJHaGjtDUAvZHwcrNS1s1eYafybUYmJMQvdcmHsTMcqHqgCPmgprTyBGdSfNnP",
  "key3": "2h55hA9dspkAk1pKZXUsa7W7zyjdwiumZtnGwEzed4kJMpLd2RDyQwUkN5oQ6v12yJPrf4tt5yF29Nm2NbbC38ND",
  "key4": "29Ey2V4Ac88c3QKZFSrQegPKqg7o8YrSQqfynjC6TQToH1GJnkHMUtGD84SgEBFgVDXT9YchG3XXf5DA1AdpfxPQ",
  "key5": "mNiaimyDZB4ZmZLbGbTP6SCtUuqneDTTgys7imbq4BLSRH3NiGMgJJZWEBo8YRh2yZUvwxeYtcovC92ycoBqtcr",
  "key6": "3vfRvZeovgsU8FEGVuhxFt4DXkUSgozEj4LqzVJgyF53i152oHKxeXBtvZhckGU1BHihh23NtnvsBZKWFunYSrgS",
  "key7": "3Cz9Ng6P8aESHamkCfECnZuWtqq9EYXtxtCwvZEHBJjsaaaPFXBrUeFibuWS22fhr923k3vFTnpzDpRgt3Pymm94",
  "key8": "4iKS4h9HpnSoesxBxYD9LGJ3R8Cn6DVb6rDdfhrh3H8imGdqzxyxQYWig9gFLGijvJMahKBvr86A2FRT5HfW5z3R",
  "key9": "537LnpoiSC549t8UYHBZCz46f55MLE14uzprGxZQC79HsxibNEHjh4nBZNV9zRhQmA8VmPNHmkJTRidPdpkXxjjb",
  "key10": "56FsWe32bR4tKuaRESrmmZQBF5w4XtDnz8skFcdhCjuDgYJixivanRxS4Cnabc4n71qCEQ1LVhX5C1A9FJAb5cSV",
  "key11": "4LaRQaMcFubwuakMFB7hpttUj5PybpKKTj7jxpYG2PWa1QFq7RNCp2T9szhMCqU9VNuhqytcqeNyVufBLi4UEc5k",
  "key12": "58Mg4rWTnqDbkBngCezjAZZVwAXZTwHfgCusYsfk81eMNcV5D6FMfzoA8xhy2XTYagdianUXDUF6vm6qoXQwrisY",
  "key13": "2xHX4f2U4ymb5QA3c7XZLgenTNaguxp4HfTbNhTsHPp7ociwMowCKKUex7EhnDjtDZxihKMpFruc1qbuqpJ33FVH",
  "key14": "3cjCkVA7irVUrf34Lwb1PfUzDr8NAFDwArfLZ5cdTxgDqVE8rEYDV1ViPjJBC1psNtNij9ySovDKeks2r8q6zvra",
  "key15": "E9tAjcDDQy2XNidESVZQtVSNHS7yLNnrL2paGa997Z7Xvcx3WpbBmaNaYCWiXQ6DKdfaL9MdbsRLY17L4A2WaKv",
  "key16": "4v3DftUaehNc3Rf8riJhKFEq1dabGx8CHfML5moqzRUeu6EKrTrUSS6a5P4P8s5KAb9w27PPNrSz7wUNytZTgXYf",
  "key17": "4n5Pk59NJYdEU2B13m7VSs5bEmdoBFJcQ1DrDawPZrzsk8AKnuTEVdKLwRcCHBpekphgkSJGaZw99Y4Ao99tgLPB",
  "key18": "1ftzLoCKEoXCpZn3MVV36HyR9DjCzCzH5nQqkfzurRQP8V7oNL4rBHaa6sz3wu5f8qJhWbNpbWdqsfomJAxzRGf",
  "key19": "4C3dk12AffQLj5iiHq2TZXQYagTZxb8VMxAJhQSpVLdn1FPubnwczXvCKcpdmNptRioLotAnRx1T1xhfpSKwC6vS",
  "key20": "2enyyi2a3UwQLr49cK9rBmVneTebtJxde9X9YHd2aGDgeXB8vnWpSDL7AjR2t2LGgG4tqUpL4g3SFJNuYvMHmzZJ",
  "key21": "5k2xrRUogABQAACFfLzRUAu6zLV6W4iX46UQiWgJDmjyiFHB9STmYj9pbhSoqYDJq64HHvwZTp2xAC27LLkyNjqC",
  "key22": "2pvomA86jnDoSARkLz13S7w3ndyBu94LCSaudnyCFZ8DqAGHwnr88X37hzpdHiA8HX86qMLt3ydSSQcSGXDk6P41",
  "key23": "5h2kbCGBQJ6Bzjo3BhaBnayiNRpDMaSJ1pZ97PT6XLB47dvQ5Tr7dHj4spmB9oqE65EGzBtFqA6bBxR9QMFB5Sx4",
  "key24": "4uWXY3d2rXQVFshMMcAZtarZiDLMidQsCoFKcPiSNGKGJDWku5KHdwW9R7bdPvLjqCKPTi5nhh2GyK212i4w8j8V",
  "key25": "hoHVp67CJdr2xk3SBdUER5LiNwV7UQAMVZBPwptFf5pzu7mNZpwv27CjNsg3oQ3Vig9kQWbWuUj5jJeThZjLFoP",
  "key26": "3LXEy1d94k8ZApxrCh4TgtpFK1nsqYRxTtqYRmECt7YXQp7aRiZhf1jE3EER7nQDsdByWh3HHs4LV8sXXkYsxw1A",
  "key27": "3iTvndM12EYn1nwtKrznWgtctPkqPRSp9XhPWdgfAxw9xU8Y2bQHJ94LFZPUbimCah4gSnnqkPZTt7kfTcAYKVUA",
  "key28": "3PbQTxYSQZ69vFGQV2M34zxRH9wNVDM8QZdDqGgCg6BMB25gQHi2vSUYuEUWmsiwEpBCrxpwxu7u76vVftPgN7pN"
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
