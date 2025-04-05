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
    "3fMZw88auBHbTFBxFCkxfDVqYijLhJWNNu3ARDrGZTuRRRLghjagBdduYnvhzmWDfP3LjmuHvdq43DNnNC4n8VKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oVRduPV7caUe7Co1XUs4kBmGxwiR3fPGjUE9GkwqEVjXKhe3yAodUmU1GMev3UrBaiQbCszTRx8zh3meeo162W",
  "key1": "2SkhUMsD8qD14tbGNFJHmo4SFTFGYsArG3bA1awfsamX67GxPTHLeNrewq9o3JdNDRt1iG2UQcRWcck5q96xP57j",
  "key2": "PweDzezsBMDBv1LSkeQZDQnfqTwH32PgBn9fzimZ4KYARx1PEQ2NQAwrM4rWDKZNubrGcdKhUk7Tu1jkBwvAiSw",
  "key3": "38tNDQtEsmUA6Dc2XkXca7NTpqgrsioRX4DazPPrFYEsWEvrRa3AXKHrNKGhYhyMZ7hsuB3zZHKJnihreAYSQfUp",
  "key4": "3oggpePSnu1qzgGEyAHT3CfhA8B3xWjyfj4g2Fof1AJBfqvypmFKvaPw8kLzyY1kuR9uLBfMVcj5x3CQAWuvxix1",
  "key5": "2t23JaeXEcAAw5LpCxNbjru5Yf5wvFeD9WPsTeuyiQnBdK8P2qY7phtiDWMaze1Szp8YoVHJnWb8FfWjcp7MLTWg",
  "key6": "1RwnzBZEy8SuoZwqGKgwEaWMcC5NZq4Hfy8fwFuVCHZ8326Fb7Yid6JhJZa4FAKmf36aTRq1sF8pwoZkWemtdDe",
  "key7": "VB8FiRQtbaMZt4aYZi6PGUwNN6Kadr7cqzGF7KVRm2AJvdLpLcSGZWBCxWw2R6q7J9ajeGYKnp41AbxFpyMSe2C",
  "key8": "5UjcaD7jwHT4efJdjENrHMXt7CMEKD6GE118HFU8b6BdstzyzZ11okHyknUmFxDexgJN2kzK11fQoBTgweHu1nJA",
  "key9": "2LaQaMH7dUR9ViHE1H7zS8YhAZ8bhdW9eMsWEwjCbenpNMCZLPKxjXKQLn8vvqYB73diQtzysyaHRNco3sbeZwWw",
  "key10": "48eq1eUAib5zzzn9Cd5zz81dZ45g583VYjziFtikp8VbxCwtTtrvt8mdqewVv8mzWFpzq6uPC2uYV2KLhcHvu1dZ",
  "key11": "2f9vVazbUGvWCHhkegv98KseuVoLkJ6Gv7fFQHcVPit9rcjhsb2QQRVk6Ar5Du6dATBS1JH6repek8M7qyh5XwhN",
  "key12": "2wqkx3BbQBqCmTiFuQSffkJqcXQjknF4dDgQtFRi7fh14SNHKo7MTuqi4sRsug7bzpy3a3JY57ScZHuWkV48rUjo",
  "key13": "62ET8En4XGGjTFTprcbMWZysiWqpzRSCo7AGEBdHhCxrJGitGakdQKdjj763jEoUraKuN9Cs8rQHPjgyF7o2zJqn",
  "key14": "4pBDj9XPduSZYjdMDQAiJRHAQkjLacKET2KPXfXzZX7TVyvS94L2mjnaE4YqTEyv4ddnJyaDxYKAjiTBJrNSuRJm",
  "key15": "TRiD8kzU32TrGyTRRyt6u3jHxqswdkkrKyvyikPUdkGnsW254U8aaCNRahfaZE6VHTnkn7qjZEtLCbxmV4ZiY9q",
  "key16": "45z8bV3wsMoiQbi4ENFgQe1nYW7dQyFh9ab5VSVe5gaAQqWwvz41GV2mPUSsoydQfYYdtX8RxJ6pTpAd6zBTQxAW",
  "key17": "5zRD1byN79ZCcyovRBt4D7foGbcsjRdNAE4zqxcfGMZBdXvgnLQvEwJpb2FD1QQfgnDhtRApEShLtUHxPaqbpk46",
  "key18": "4ucrzy9mGD9JmBiyRySXm9fjx7Mkyj5mPihTxbtj9SRr6MncvXmfTNWDMnuFCkcnPn424mbsEWrvz1QWf89TyFJY",
  "key19": "4euSEhhkaZ7Vh324ebqFLH7b1fVg2BDBfnpqkUGu1ozue2wjtsp1TpjX2q2FuURWwNP27uQqE5PqDydeJ4skQXxx",
  "key20": "2UJxwoyDRme8TE7AWDonnYEot8Zdd3sTBDjfD8rzwp9qMpxsTLFRFi9xVqFkrvFmnziZPivu95L4udQSij1fptQ",
  "key21": "45fLqp8PM64JKiKewquA7tBSVPEiHzDyKjcSEXPZ8Qe665zVov8hxbs7UDNJT9BAEXdSSx4E8na3jpywu4PfJZGD",
  "key22": "5mkQrU7gjhnVb1vKFud7oXtFPjpHLXsskZdgZfYn6c9aGQbVxMHAf9NUn4KvqqH4cLUUWBaSGEvVH5vfRwFXP5xL",
  "key23": "CRQ49cv4rCgmUR4iGZGbuFn38hJDrkY47rjGGAj86wqA4i6BUMhoorGQsF6w3e9WkvoMjcnCAGxwecgX1BZ31zD",
  "key24": "3wd8Rzt2tSkWY3qFK9tkxNUKgRfrrBS8pT24EmPzHz4GT3ggxX7ZWHwNoFEUJQLJKr95v9E7oBcjYcL24iaENKHY",
  "key25": "mBVbKCVZFrTRCF311xMYohyrAudxoj2v3NZSrpc6p4g4pp6b6jieovo1Z9c7ZDivtVEisbY5dsTrzjAtgMWckcT",
  "key26": "3kWQ4vP7khDW3jkzyJvoKVUe8gSZ3rPYvxX5Gr5hMtSuZZQeZJ8kr4Y997CDo4Bb66XuEX1d2h3yeMWksYy9Gv5B",
  "key27": "92Fh51T75r3e3Jx2oTjg4YoZB2whVJz1esMESXqHgLMayS2HxGNi9UHTbTWy8zhmrYngrNC5tpF8Y5xyko6jzqE"
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
