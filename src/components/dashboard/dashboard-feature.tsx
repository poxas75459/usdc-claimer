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
    "4JAKfoHyyo3sbfXQkMbV8M8du5cqtiwithyLZUCKQwwjFSvNrksEwfsFUpmsLzk8AoVm68kYJ2XnRirpxW99giiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCRyqPPH95GeG5KbmxsAzFkmW1i27cmiE4uJY6tUEeeY4dJzS8FQo98FPxS3Gre6ZNU6LAyVZXtQ5TVJA5Tz2iw",
  "key1": "3qDmDSFoFWZiE6Nm4JPmHMDexypmYEtsFnL9dJMR77WuTuyrEncjeeu1fFP7Yw34dgexEKUxJavpZ9zK3R8XKKjU",
  "key2": "2a8fvb8U3D5zGy4i7N3efKz1huGdMiNvBKULCv8F11DSX7M9FtUCNzoQ4Zxpm8We3BoJSutXJCNkPZxH9QpCEdnx",
  "key3": "3FNYPmcBcfDr2GaUBEkgj1JACN5k5a3kEwcz7LM6oLSNjyXaDtpiREM98CxcZJkJ7H5jmWeEji1vrUrUHuP5omsy",
  "key4": "3tK6NPwu5LRXjv64ASK5hQf8DmDg3g8tEKjFmKiAnkw7gRGy7jUw2r4b3hRcbPtJfYsiPtUAiSxcGLdfCWNQguSr",
  "key5": "66qUc1ERBEd9ZeGJz8qrwcSb13DeYNEEy4wLXw9fz1Q2majvkkuc6Ea9u2bWn5mexrWmBLL4jjmWVR68ttPv6DhH",
  "key6": "5u7Kd6PBBtVe5MRq5LrA3ZDJ16tCmfqadRVRKpr6SNt3zZLAVi5acZCtwNthHYTX34F95rGvs8cu8AeYXXiPdbrg",
  "key7": "21nXa8mA5FJZCRHQPaDupz7GhwNSoSTjkLobHCBHvWvP9H3PZDTascKZoHeRtZgu5yXN5beJwiz4u8Jbac5QW2vR",
  "key8": "kpuU5MudjfrX5hwNAdGMgJ97jiH41MnNNXMdrbPGudfgwAhqw9T7b4WRAg3UY7DtQwjs8NaMm47qQ1PiaddhNZZ",
  "key9": "2GQDFAWycdchpBHqKh6EChTeRC14PrhS8WjkqwxmV8W1zJNUkofZYMuKW6UpGE3zBugv4T22nwRyjoytzSgtH7B1",
  "key10": "5Zbu4ze4VEHpW2NHcJvYnqhnz1D3C9As5HAJbDQVSSdcDh1NptZbeWnbjgC34fmadYBC72Y3chT3GzA6xhRxotY4",
  "key11": "2tnZcSmecH6uX66cpNZ4Hna2PKWvoU1kV3C7WKFN36f2DxZ5HaDZWJRVcdF1KZHHvgVEY5sQPqPrETx4DjvH9jAM",
  "key12": "2AdDaaAu5gTYvszRZiAzQPg7YrWb12bk8F6rpCuZ8Eroasu2vX9wamXrRX5D1Hi7SibW9CAXuEX9teFSWTYfPtcJ",
  "key13": "3sXCVhURxZgyMHs8mSGK1yE8PcX9GFPg3KCuxuBooWoADhnQTuWDVAqveFyaSoLzW5n93i5qLE284HLJxhjjjotj",
  "key14": "4kPc2guJiCx737pck5fbtLrQzPARSh5UwfTJJWzMnUhALjPvcYVgJYXcGUc51o5XyBRsWgFsKjokfLd9TWDpmj7f",
  "key15": "2BRr3pfpkqbzv5J2tArqYx2HfPf361VUhxprGaZtVx5sDmNvE5BjYTRUjsinhkwH2npEfVHfcxrjGcYTfFwP18gC",
  "key16": "3NJK7YMJnx6L3efzJXjWszkZegw1hAcLr4VrBF1tFRgogYgWHP5WHarY3Dwnv6E7o24wHn7LtKrowmnsc8HvAkRp",
  "key17": "CCCh8Gdr8FVpuiLYQyjCuyfZiPeB1LhQYuoguZPCnwBeuVt92FE2kmyuG365CAW5m5PN6HTn3CDV91ZB4cLcHwv",
  "key18": "2t6Y13X88cuRYbnAc1ZgkDngtnieoyK3fXUxH6jvcMAa6VQeFKaTPKuoG4NfXpesA3s26gRe2VyMDeeU6EnomigV",
  "key19": "EcKPPbvBP1DZuyggN6ThsLLCh9UmcBCZ5hCE6Tij1XUnYE63YpGtFJrb4So7f84ri2oCG1fe5GX5ezRMkBfqM35",
  "key20": "jEU1wwVdB5mZLasEKR3oUihfpFobE4eqhMy5HuWUNPFqtALesosBYMhh6c7rwDcnhCyt2ZFKgXJcApBLxePmNeM",
  "key21": "5p7GfmUV3kJ9QFGwr7VPodkFiCFWQ9i9aiFt5maW4gRrwCwLohj84EXTAeFDxk61acBMnB4i1nLS74pzGfLA6tQ5",
  "key22": "26EMv4kHUWfbtuBmZg7dRBBr6cQnLmwJM3ASkret3LWAX5XKb36uEyT4YZUgUg5wDUz9kAs4h3eK23frdJtstgBT",
  "key23": "2gD48NEMzcjHSfdBEWpQ4vjmKxtNS5LshD1xa7Cc9LUuSumM6BMpEKZAtTJRwHNtqoSmKapkFZQNH8F8PAHLVH2M",
  "key24": "4QswfW1piUbLdtZLA3riBGXLuGGnhLQoZQkqBssMpFjQmF2EuSdqfDq5TzsPUMDRDj29xRzXwXHEqd6iE5sacpNc",
  "key25": "39Z2ABqCNgkhyjqXX3HewXBPH6JzDCLe23sS5ZdgZJNyURb4odVYYZh1pwndqFPuRFLBdDrFFyFo6jRD4PmG3o3Q",
  "key26": "4RmrFc3XhjQsd3KoXsDwh9DTckwtwa9gk8mC8mFzrzN7UPQb8SswhTKVBn7N7Uf6vXjNVzfgbB5mux3WgnDBxFUF",
  "key27": "zVi8TRv7zXVy8jufEeQdGRzBMLUtLiMJqAtcTdWuTn6LrAPxWtgAWGX1RWp2kyANbtf6Tq2tKq2DkwjjrEXDrZc",
  "key28": "3VyVgdVDYCYvWJ3XA263hQ2hnXPGkiGNWxREsLTj8c6Vyjs7PWuVJoybgNdcB7pKXWuhG71cVNFZDaxc2t39kcBM"
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
