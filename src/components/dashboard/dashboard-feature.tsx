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
    "2aWbUFYvwekSEfKA8yxWGz6zvuWLntbzhdpXuFkdLqXoFLvqsaH7CEkyjZxw8A3h1qkd9pAzLkBhgXVtFYYwND1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CGditPnDuyR1q71itFAbTRr89hVhH8Q2kUt1K9i7Mncv8KuWq32QGbQrKhxURHZk1fpbiHUdbdq2YpNs1rjXDsn",
  "key1": "212rtWjgcNXp5kczxVZu9avrQaosgjg959JdH7cgEPURSTqbbJNPpbZjPGKxJCkAzPDY74rFfWafaGSuo7EECHaD",
  "key2": "5JqdkzgYybzBLkaVoRLSaqsxNGdqYRVEvnMHAK6s71Fq9sWsy2947byzmRBbfjTfvm6eRVGtMQ99nCuU5AVpqhst",
  "key3": "3vhfgbMwkwBUdeMUqVbuZLQbnXkhnDkDBy7KXmuRwrzQYHpgumybbtyvh98cvibx4jNtisetdeFotC1FkFux8UVJ",
  "key4": "q9rr4H9DuMGM4dEUa9DuQpvRtPqL6L2bib7n8YB2NNTBTgUwNryReWm2EqBR43WHboUepor3h3g8gTYjSYc9NpP",
  "key5": "3dgFix8ThTYBhnWbetjVPgJ39aXcmNnSnmuEL3LtffkGbMZgqxVD9aGsCovdV1WVTLsGzeGR6hKGqnBV1epcH9Xz",
  "key6": "5qVFnQQAgtXJrd88hgjbKHMsTXdYQXUctj56KtfHetmTXFrk6DDuhRaWCMVBzwYS7RHfgRJsXU39BVeTvoBEEbQH",
  "key7": "67erdkusJqvkvKEjhoUQzM9DBhGwJ3zVx5HmQzhZS9S2hTrppe9fwvhSdZkhfGNZwsGwuqDDN9f7FZKFtfik8GS4",
  "key8": "2f1T4xDXTX7YvpiMfB5ZCVG5uGXHKqvdo7GEasuKbuNoVeA4QUcWZFE9zNHhGC3DbPwB6VW2gP38ptzyzNwBxFnt",
  "key9": "2WpVidcRGfJEKLf7ndJVhwGjjMWTMFSm7UMe4HPVfJnqsGjZdEFL68E2fxFR4uK27YhiyNJu7HCfBJQnrRzYsK2j",
  "key10": "4RqpD2jQSYSVAe3vF7V9hESWJ7khRGKaVj8joX4Wk47S6MQWwTFervfhXHbJ7AknaipcAmD7VZW6ry3Q6QxAyQLE",
  "key11": "XFcKGQP4czwjeXx1wWBtPKbkPz8gb26Y5ojbNS2o4xWQSaGYzgUW46kBnXNqtonLq3jgiX7UxNkjZ9d85jRFCRC",
  "key12": "pGfuiSWugsLCnD1rwsq5E9vM22Dw718S9YDpyAeGi4xKG1B7qsVQXDb1F91BFbS9W7ABRyRXKtPW3yUodZJxz9J",
  "key13": "35v8Q4BK5VF5HuNsefJei1WxTVRzYY7wUBF3PDzBXa3oqrUw5uyUmuDQL1ACgQtFjvy5h8NPXjtwJMjYtCVycrm8",
  "key14": "4Ex74uo9tJBG7Qn6b1LnXFs2GNM2kDNuHoFPnQbtvCBwRyhFaqMLfjFBDkDk25hS2Mbasdb2j3eS1ZQwg3KvdWAs",
  "key15": "cB72kfyw6MewjAjaKQDe12LKVkAG8XVnLFmo1Xvqkb5ZvpwADc3tSsPurS3s1WCfJsuJWJUwdH1KCxPcy2SK5n3",
  "key16": "5ezzjPWBJ4r2FFFLxZLpKDrW1YbfybVUyWc3eafTefPSgH2iVPntsq7P4PSoVSQaasRzN7UJsraCjUhQuibPanfC",
  "key17": "2xRzCHMDy8AFzt3uYRKxRjAUrSub66Vh9yFPxvBKqAAyP7wKbZpKtn47QzrnsjX2ij75vjH56kMWz9PdNnuj795Z",
  "key18": "3ZmosPMMS87rGfb1TrKhDHgnqZ7Ltp4LbdfNt12d8nRvytJp2sUomPndZxCG59vpZbeWjYwaUwWmK9ep1MMQNwaM",
  "key19": "2AeazKb7iFbaWhxgPSt5JqWTVjUwdu6zBazQrtmY5dUuEwwrEoU3GsHTGCyfmss9amcUaF682ifu39cGFSNCzky7",
  "key20": "WGKo7NCZEyGRpW2yNRJRqxEcojTEHrUPtsyTPq2YT5Mye2Hvsyg2kseMSgBbCXqzbq4ibN223CRJzZeSauNgH5L",
  "key21": "5hHVbVK4waJ4JCAz5KVqP6hv3TKy95Tpz2dpjV3f4NYkLfpYxHja8Ff9Paee1WjzQs7gdHot7qpiTPfPcENud7dF",
  "key22": "2gpACivWJr88mDc8shuHc8AENL8GRYBNSsdnZTKzxwxZZfPQ9JHZnfrhcuvGS8pdKc7nKPzog2t6gU7Y6E3Tq7KP",
  "key23": "2wq9A2KdQF5Y997w9nquYtA6RMNt7DYL5yE1pDMtBzCaoEXiiZoNQrK1rnb24oe1iF1FBY7VVr9rPNMboXpdge3s",
  "key24": "5pwQE5V98sfrhq8jLAzx6G1wqC6bYN2JWwoACU8ciSs7e5PxqNUg6YiWaaFuqb53kHHA64D2uu3V8vdvUCyC4Zsn",
  "key25": "5swNt5esBQsLr4dtuLFUM6hGNygF4F1KWzrKVKXDy1BbUANe2ehjAZ3qYb18zHofWHmnqUrwQ8UuPsVvdRiLhc92",
  "key26": "28Pmmq5ur1Nzg3PpLMM4iYs1F8CHSWhXvgCe8Ht3SpgSVJZo875Gw8VT2VpPjzto4C1VzQN2cFLmaucQkR7FR4Cz"
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
