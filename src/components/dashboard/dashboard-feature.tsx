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
    "4bfCWgmANNHUQTbXwxjGjF5epWhbdUNBjKDAs9VFt5LorcYPy5EgVcKgPX3BB8ZcRroTchiFGPvuPzKinUJ1wEAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P4WR2daKjkAgsMsKb6xStPL8S4JDwioJkDFCG6JSikCGx4gTxvFQnAFjBkuiN3cSKz8qVWbpzmFf3TawQwZoCci",
  "key1": "BzHJVhy52M6auxwTWpqRMC741MEiBvrxD7Cpw5wKDvVUVaCjNV73WURRNHb4cLTgBnpbtZHJMQ8jHMG17QL9zKX",
  "key2": "2Sqt3TVoXimU7FwvQNMLEuMoCkCfcRi8UzLigfCtsoVfVfZgEPNurEgr4bZ3KDJMCKiZm22UnCL9tvszEoP7seRQ",
  "key3": "3EQ7evkZQDq7SdXTm744Pkc8XeLgpfQvbJCjQUg2qo6pYkhqqM12stBUWCuLmEph47nSycTHqnXZH6Y81HWS1mCT",
  "key4": "e56qkcojhv1hgVd8sTEqLvKdTvVGLJoi2BU85wX99qexBXEYKQEydq1anNtqSbAeAhz2J9qkMTGEtXukJXJEG2o",
  "key5": "3BbVVyoZ4SeEqw5iua3gD19MJtxV3XCrtX9TMBtpCeURv3nKJcvZEi51z4AhcBy3gn2qadyWVzxKCVHFe7Z7aesh",
  "key6": "2Vfw9tSyDx1W6Wxa7CBUyDQp9H32QRr4b2AFtBJsjk6TAebHoATzBcR8J7W8FNyvyfthFfgE12HGskdFKefa6oag",
  "key7": "4tXokPQRmgVf3DJgNKuUTvymEJGTzjnrF8GyUEXhi58UjW6JEbQb92t82pzPzWDAEErV9A8gHbaqC1xULRrsprB1",
  "key8": "3UDGKno5CJhhgpAeoThXBiyg8opxmGNKAemZDKEQbmLKeP4rTmNiTZ8y3GPpsHTUEWUiBckEGfpY2kBLajBHJ5po",
  "key9": "4X11WwDaPPiLfNojebGh9xXtaJydLo935XvDrr6fZLkWxpq53taKJYn5mJLiQFhNQ1StkFVY4a6DX2bjLzpWZKXb",
  "key10": "24Lx4XqrbH49zbN9JER5EKWuoyTg4un7nRuQf4gCMRFPQ6zVvvJjzMXBBhMzSufW4UYsTJya4QiCmBcRp34vF3Qy",
  "key11": "4u3ct27rnCNAdLz4zWkPbTvismTMEhZJ257YkAgLmHtaGzVtVLbHeRjaud6KobJJsXfuzKPga8iSMQNLqqKc6ahR",
  "key12": "2qCeriYejFSxuMi56p13UCNj8X76tfW3cfXcNnhnRoG8mkWEJyVNCf45QvXuZBJE6NTGyE1Ma1ZPtRFGu9kArjNQ",
  "key13": "5YU1PLzanfAoGfoJKSPoxwxT2DfeRZTVqu9UBgWQo1ZsadnipSAaJEf1yNto1tzgGtDXKnsGE3FULFcKxnFpGs5m",
  "key14": "2XjyJxnrvnFVnmjaWkBeEZQbHZWNZmqLap8iUWqNiF5XTSW7hL7EqjH9HBF6oPrLN883Epk899couLTbmNF5NJ3o",
  "key15": "5Dqh2NuZ7QCAJLVFQTfE5ZS4ZG5UpYbrL7YRmoTe5h9ABUE1cWkt2yXayptcp4kZTNFjaTUwS9QwSbpDQmnKpjL4",
  "key16": "b4hRtUkZY6q2ZfpMse8ypXMf6qSTUBCkhsqQXV31o7y7dHiMmqhq7kHnUshcUzCpDq8HHJ8hT4tnF2HyGT9SHb5",
  "key17": "2Vk7w2qqPTGzQYy6ctCDS7x5x6w4VU3Ckzt3mfg5fb69YzJiHqj9aen1h846FNicP5N8WzFET1EqGYmoYsUmEpdh",
  "key18": "248ZUC6FDmhoHWdUqJPmauontnUv9iRczqnaUyRtgGhfwRcjcaPM8QNpTRdi8jBkjHHQ6DPUVfmAXDVUe47zYNET",
  "key19": "5et3KSWLNQb93NsQ9QS6EEZ8Dpgf9zaieYNZUtiSC3gV7XQKiFMvcAS4eraCpWYidhTCjVkSTZc9MwHUZXEUceae",
  "key20": "5eSNnzX1u6karfBKJrNJWX5DZp8ayVXLzPwz6YDLChm8BhXUc8RmrernrvYEyZQj9NkV7aSo7FYaABbvHAPtLJkt",
  "key21": "4qAepxrqh7z5DMrFVeetGttUUwwzFgny5mwf1eBu8ZuU5zPZyWZTiUpqcRedbL1VzD1RGAvDembm2sGkmGT4Sb8n",
  "key22": "3GoTdDWpMFKdngHsp81UU2V88iSRQRzbRRQ5o6XLmdEWLmkn3sXk3emR7m8yKWoD8uidUZcaPWfsrW3kPY93AQqN",
  "key23": "3ZysPdRdF1QyZPzvq1aWLB8LuZZvrukocCT4oYWvb3vJ6yHAYSiiQD3hPoKev8wBRfBYm3e5Rz7W7mnt6FPNkseF",
  "key24": "3HCjLLmTdgLZwTEuf2EeSXqMazMEHGp2QBne4wxgDWHfJZv4hxQiR2iS2p6bwPajDXTSCVhb79bLhx6PexAbREWR"
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
