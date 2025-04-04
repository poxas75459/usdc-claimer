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
    "5rmpgemkNeNjVnZGtGWF5GbjCezdS5PzFdhN1Feyfzn5kgzJuvz7VvF5SkfNTn7BgCJkWe9jS5sUkopDRgMPs1uW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQ35wRpxmf7Zh9yzFkNaQoKDmTVLkRyBHG6j5yst4Bx37j4rWhBNsNL5kzyfcLeivR8P2Lo4qhk8xTrD2tvu6os",
  "key1": "eXpAcNWgri6MHBniQVPYzkTaMUHaFZpF5kohZeFcYPvjRAnUAZmW8LxBSfKLA2mxF4Y8Rj4FxCAXKbqCLUu7Qb5",
  "key2": "5KHXP4EPBWJAKi3tjmGXRF4XYZnSBDgbhYFT5yTCivRfKuideP5MDHAvZzVpnQcDngoLKvZTERYcE4WerKVRzW6y",
  "key3": "2AKF9Aw7SnrMRBX4XRJ94J9s9kU4NZisAKi1rUo9pTaMM7yCxsuZaj8iXGB5yHg8qkoBKZidmLFYQpXhMC6GEdAy",
  "key4": "c6w8zfH7xrRxQ2RoQUcNUPoZTGN5UL92m8KVzj4M7kJEXkh9PnHi7vea52EMz2smmLc28NuDnXu5gBxadHezRSJ",
  "key5": "3NC1WsDPvnvMVM8RS2TJxQEjxPp3uoREWRFntTrMGapjscwxyND22Ng2xRJEuWixdJYAaHyNuppHbiMJgmyPzofK",
  "key6": "3sMd46McsgHuwuQTAMaK38wa6Z23nN12du19ibxJwYXa8AGACdPwifaWXBmRkiwEbmdN9o5x2C7sm1eHmVviaX9",
  "key7": "4GRMnCxo7dJnUgqMeVr4zSFer4x97u1QPiSXT2Qd8JAGETGGN3uw4wbmfMvrzGvKP4WsNLXwhfqces4CcbJsCzMp",
  "key8": "4WtC48wMYU9sHbcE5yN6EvRwCYQQ6L4kBhCcDVmpg8g9gufXDVPbqD9KefzZXuHRdMDx8f8PAeEBBM38USPBeXsX",
  "key9": "2qHYY7bcaEJ2ZQ3F7vQhBhGc4zoVPHqKB8EwgnxYb8Knxr6rBuGGKjvP6xXrxykSEx7ju1ZdCACwBm2pYYmm1wZB",
  "key10": "5CvsP9Uhr5rKBRBrjL757LUmYGuAGELGuF3zt7zVHxYYn9tnzZuCu7ucs2CX3LYYF5eZEEzsfHjNejawdPZPp9NS",
  "key11": "5CkyZagybuWidwk4gySrN1gTWbu8jSH5dAMsfnWxbBdjReg3fe7D8z98X1vukVv5rHnSNo8UmknmigvMJkFWMW1Y",
  "key12": "2RiLFpK7VFh5gZDjTiMg28sQKTURkLQhLfn5s2BvdkYAqR9KaDzt73R88hNGhqWp28X9SB2sat1JbMLVxJhtXFFT",
  "key13": "3SL7pmyB9g19XUARuc4Xu7RuUS1w1hpuTgzwDCiJ1LGqX2VtW1n7LsP14gdVTu4WWohjpZN6bCYrYrRK8geaotzt",
  "key14": "bQfcEuXfiyUYiufqKTCrEykHmB5QJhs2e5CvX57MCAXTFfimW6vqxdia6Ui4XzWA17LJcRgWgqanHXnQofMiZG5",
  "key15": "4Te8EnNmEUfmTAJjsymUe1z1xztYQkSAHK79RjLh5j11x6Kc7K1HfqPWHN64e3TsSFmG1w422sYVKAxzc7gePiHe",
  "key16": "4AUM9FBYvxvRAociXDeifshD3wuijMsuWyg4Qa8ChHMWr9qbmUXjr7TsFc6NQHFNXtdGtSimnYbg7H7EW8emnnq7",
  "key17": "3ZbMjrF93AiiQ6pfinDEoo6fWdoq6xLUdK1b8cXK9HMSSfLoGpjtTE9wxpfVgXgafNWkif95gAe3eZHchsXEXjom",
  "key18": "5g7QNnVrkLQgVv8qZwUABTiCzm3inDq51F71vwDeDW9JBDhWRxAWtzUeMBrSRMjP8V8vW8DRLV1tmj2UxcPyngjj",
  "key19": "2tdZaDmV1kQ4pfsGu84UBeGZkENirBi94KcCxPxF28nsiEJaeFi6XWLVxbP37qNYxqmNc9vWuvkLwNyXV1cjmckZ",
  "key20": "2Tm3B5jqWagt4DQUEPHZe1xiSD7ViNBA7roYvGkDbefM7N7MQThcJ5tN4rYDc4ZQstAEZ4BK2RPrT827DcyREAok",
  "key21": "2eFqfzhAVmgabcP5eFxsUviKj3mBJe9W8XyCNs2ajT9yuif8r4b83XQ2L9dSsQztTsVBdXRAiHv51914BRvurARw",
  "key22": "6Uy5VLeaUEfMvVGfJoYR56hwSxdWwyL6CDXodze9zrvk6NebABJoJL85Hx3damU4zLfMddZvXLFTgiJsueS18YZ",
  "key23": "3TJaur8ZLrdipxhGDHGxuGzkrmorxhGXmiKqLpjHshQa7uy6LFTj5YV1TUv9FNyEkMGyrctdd3pPstn99YYzsrNN",
  "key24": "3aGJMUNUPQttVhvu2eSUm9NNLrC7oic7tr2tUcufmMcbzB3fd7BS5xPvrDAGagSwZYjwDvvQGNQFJQ7QnavWo95x",
  "key25": "bw6qNgvnBui2HBTUXFwseYV7XzHWHsxci5abWrexQrk2NC2vtndqRpU3yGpgAosk8n9mEskCUEhuVgfkgKMe6Si",
  "key26": "5Uj2hR8cjYzxYWvUKWFsnsSaeR31EVQM4mXmu2Nd6A2DzuNNFRJ9hsNPRXJ9ziL8rsQjJfYcwoEE7AsuYd1tSEmp",
  "key27": "3mbGF34c9NGbyMyAzAjzeHaWvr33Hy7ZrZPw3Du7VMBf1RVnKdrKdih3zgrd7J24g5GLbWBTQguDUV2RFQFMvJx2",
  "key28": "vXBA6y43GCiPH2GXsjBYkRDGxtcGnVgdoCj5R7BtJRywmxyT279EjGMhxuiYBEAAYeFsRzdC7CZ45KfuSvzUzeT",
  "key29": "KFQZpmTktBSjMK7RF8SMACEHH7dGfvtcrAi7EtCmToEZKnSWHGSm1PrtLR1tHuP1vPi4GKip2T3TC77At48TNmL",
  "key30": "5RXUTh4LQVs9xaRRu8z4nZLNR5EiKsKzJwxp2ffVro8oExBU5UM7EJXy3TyNMBEqHJ2zRzvdrdk2rZVV6xjNLdg4",
  "key31": "4jgDBT1Vpn5yH9CgFrDJKjgkNyLJnyYUJ3SD5pyvLhJkYoCLqiQFEQrbPq4M34Em8Rgx2FizxvfZaYw3CAk1mGcJ",
  "key32": "2Vvi9kenyqV5C37vkehwLXQ4QxDaUvnJxYp47hgRmeKABjDxr1fmTqrW6gvgwfkBCsnqRUqrzKUHGL3BnyzHmVEW"
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
