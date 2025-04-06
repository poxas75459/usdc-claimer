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
    "45H3S1i71rDcmRs2daRPk95tHbZeQb9BNsqrrPspY4RygJDw5JKqEAU1DXhmtLkqeJrwfS5updmN7SiAuetMKNBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euHQj3Ni2kc63ggs8MLuCKj2M9HFsdxRd1YnabLpjmjV3RZ8zpVMMNYDs15H4rPGhtt9nGwBrcYgo9J5RLEtLVw",
  "key1": "RQb9msFXWHGe6HjdDDuDSNWPbxDAnj7simKSD3z5A2vg5w1FryNc2MYByRoMzQA5sB9aqaBUbEovjeUbtYVd4bE",
  "key2": "3Y19bijusDk53kRWDgKEww64YfrumFepgMCgFuuwF3qd2i5Mt7SQ5izpAkEKqWyKboinzTJWaZWRcWpa3LReGmyu",
  "key3": "5hhW9u9DffGodGtDLTsxosKfwexgAYumjESu4wKYEwwdeuRnnxzCtCqZUgau6nti9hhgPfNn9nhhWSDZ2N9kB8vP",
  "key4": "3e4ArJti6GX6arCAKrbXRjqVoYBGnGzNn5CEhFQPyCMF9NbtZSUFKRCwaVNJrGaavWf5rYXDQePzchMrXDfE6VpJ",
  "key5": "3wi6PEvaSn9biNuaA51Y3mXTWXFHdXTjUs2iECMttSpaACMdWBwc1eGQsndvambKdHyFr59d8jZsqxVJVkCBD6S5",
  "key6": "3YfYo6StchqwCPnYMSo6ut1uz2oTFGjQgWkxk8kCgb5w1QbHQnBHeTjvdWrgjod4GHkrj5vkGtmjus2yqf5VNtTr",
  "key7": "2ef4k9hDU1M7bZ8tpSY2XMLPXYBvzknUr88z4Hckwn5hrc1kAxHNVstQPXgKwosodeKV3iujU3UPLzjzzSvRhXVu",
  "key8": "4uYFrSs3KFP8VwY15VkSZiMbpzHdkHSUEPsjzE8mR91YiUxteuz1PHEaoPumWYoKSB2vPVUUyFnQkqoVqz9poQAi",
  "key9": "4A4vKinE1f3BvZarZ9MQREuCzyFojVsMfSSPG9tqu1HshAhHDYJm56MTpZbegTMKDd1hDZwgsPCbgYfEFq6XnKNP",
  "key10": "5XSWxMQj8ceks2APnp6KoxgEs2tquWKrXU3XzWa68WUWh9UMGNSdDi9GghDiuYh6VhsvYvpL9gxW8sLu9ktuforT",
  "key11": "5oBykDTm5EskjroKLd7BhN6KYDtqoY1aDs34KhMMKJnBY8qy5vBABSUhsZ6FtBGULweVHStyiiKoh7GJepeMqZ7B",
  "key12": "2XVHESyYqBfKDSLNvU76mqTSdRER5a9HsAJ5z1m9JoiJNVx9FrUPSTwPRRSMeM7GqherxQDcdRjEyk249SGTdyvT",
  "key13": "h1yeqbZKHmPzg9sWjSaQxJj993thN6oA1ekDSLXcynjhaX8dA2oxf2kXjTTkRp24hM6NDs5sx15kxKZu4pDzBR5",
  "key14": "4GqD4xQuTqbB1aDCEjPT3nfod25dZzr3VmXiz3jexuG7yAXCEDtT5nUJhwDkjod4VTAfsLLFVLd45DgMwqC9oYrU",
  "key15": "4ywuHy65PoY93u15U3wqPyiFDWk8pqpJWqJc2fc4K6hmCwEYLXhXFMq4W4Ktod8qYagMNvYBpU65j2hNpFyDPo9Z",
  "key16": "4TTqR1hZ2yMR3hgQazpH8aDiFJkiBqMfFk2GZHbHyqDLgaypEM7V9nQsomvSU8FYvfevrh3HjfKNRXisyxxLDmKp",
  "key17": "4yUAUbGeXCAfH7auGyB8TZ45NKXoFKmNV6CXjEAg9kLoE76WcKkSFu4j6UEJj3zZUMHvd4XWkZ8EQLmxjrHVBhWb",
  "key18": "4aSiNBX8jw4eGWCmRuUPH65gRsMi4gXAAjXURMSSBgQhzCEC3gxjyXCqmnyh8C94cz9ax1EVrmKsnDCZ6VY5vgTD",
  "key19": "5cQE5pEpBC7RrT4q2eVVM3aGoTLG9CesRbG2vgsE9NbiBAoyW1HVzZcmFpNnw6LyNysE7QkKWJJb1vb9rx7fhSgi",
  "key20": "55Mgn9h6gLXPuwbBGdqGVnD6eiPvsDnjqhN3kU3KMJKERyeKvhiowEFKH4YAAFtcij8efF4b5Sq8vagmePLRmuLs",
  "key21": "52E6Arp97F9fJZ2oSipsW54V59W6ZoAztii62dVLm5baEm5UKHmTSBfziJU67m4GM3mEzpbw5Lq3upt9irLxqQsr",
  "key22": "5FdNXT6zNj63ssbU4EKn8xB6WB5sBw2KzoJc4ELb3LHkDCn4bVPoBve9HqxVCWGHsyCoJQLiHyKhSyLjEWrkxwH",
  "key23": "2b5FTxDGo7KabfBYpdD6eoMfqCDbseZf4Lf93MP9vW1uJkDrZo7SyyrahEncEfA9iPX61puyqRWso13aKXLJ9Nfb",
  "key24": "5UzdyP2UYjQHZTtb9SgpAcWx6ADqbuB6spnQKiLKWRBM4c5vMTpEiUf2AudvG3MbwbrvpFtoFs8UiMBxTaQDo9Np",
  "key25": "5t3KemTktyCUoJX5Q12ftRZbui6mbeGfepEV5ewu4zbf6cUoNPWwXiMQpw41hzqXr6JtWt7SDZgXw3XcyH3SAbn6",
  "key26": "5hQgabRDaxbhMcJohwByHyaf2YTJyGhAG6vzV5fnaJNCMTU9gs14WXvv2HSGLmCZHWSgFJNe4uyZkPTm8cKtqAj7"
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
