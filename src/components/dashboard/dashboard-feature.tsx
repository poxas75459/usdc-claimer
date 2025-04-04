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
    "49SowR3Y5Vk5ULMCHpm1ehR4czVCueVg8nmDddqCw5m4YwpSzT6EjAyMWFKcH4nqRDwAhBgi2hSMYYYXZhXEPEZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HvT2Et5n7GjUSMCp1RALPF5hXexTw1moopg1RjdXyV16Z8nAqmTPzTLFpmxH8GBY9YFLuKoVmHTqpTpV3UZmYUc",
  "key1": "4Dw993ujofPCdZjKxMrHTsj7J36DMFAqkFsyNc1rKdK2Z9SvcthL6da8mnjZBLeXaxzHnGh57rEPxBjvSWNFzxAM",
  "key2": "3XkHtyTtshJc24aoSLXb3ZZSCu7MbvyBQVVDxgLXDCxdr4cuutAtJrQJJYVg8RasKXEcCnT9WBHE1Kn2DiZZpqod",
  "key3": "5LkWkYoptQFF45nVii3t8P5RH824NCLv7ZpNgiJsjrHBmRvycwpogPnSwEkD6haBSJhsy7aCqWmrRzDJUHmSdYdP",
  "key4": "4nwm3d3y2iy2W181VdXdhDvqFdwBgQm2Kk59CFnMgvywuue6FQ5zL2nTpH8GPKLUmq2qHaMvrdMVBjeYVNsZgAPV",
  "key5": "2KiHA3uvAhp6yvm4wYnpjzHsFgGfSS27Y5TZTuN7a3tjLVnskws9EUYqxdjDEi6jLVtj3oQTZskzpLuSxMy7Ta3n",
  "key6": "41gmPyioroP87oUXgyNkzAbgLfEE9HHg5EMeknXLx1BjHQ2AWXzqzMFKss5PKEpsqjz5SoZWG64KNi5ffv89gZJ8",
  "key7": "4W4sG12t14fdAnvqQh1wJsZ1Ke27sf23q8jx1kFTo2AZmqYKDM8VcqfNd1KPC9X19E6gWNFyhJvz2mDa1k468o3J",
  "key8": "2PMGKu1yW2A5jsEGhppS7kQZrgp5mk2fjf8akeBArMKo97utV1VRPzBWc5wGEyZKcZzwm792ffEasaEWJhSrxQbA",
  "key9": "248DmQnTwzRF5AKvdiyyMwoeo1mnpVz1gcLxMyaz6cbC3ceK7JTpc7nNFCL6gh6bVGhu1bSUr77m3D7TuJBb373o",
  "key10": "25VsoV66JWDUMMESD44Ju7NP85uaYDNc4CCVABXYUL6khDDCaQtVaPzu8nTPiMp2PbFUXUHQonFsYVP9oiqZ8WyY",
  "key11": "2JkwQd7KK7bjDVLrdSuk3U5C2ExR31NLrKrzTbBiCza7BbX1YDn2E71vaD9DgxLwDiEeGUJdBDGWgDvcYFdVdwmZ",
  "key12": "4msQ9Vkm65jhDcFPhysoYJZ8eSkiwwyq6iR2zb7ntbgDCpKN1SjjkyahnGBN2PGAGaU3dyGFi51JqjKBjbZ4rymp",
  "key13": "2k4tjQjSW1AaoYtwzy41MUcoDDpoan5GJP1ET69FXW3TrvWv2KuBWWTEGCG1vGiieH7d85nCMKBvGB1WykUHG3xX",
  "key14": "5T2fZRcdRBRFozt9wTHxxH4gccpiK7PvwBvtwJaQLENBU81gUQSUSNd6vDpfg3NALtiPYpz4SwVWGLCPw9dwTnVL",
  "key15": "3k8gcJEeu6ErjAfnn3zGj4mMqE48P4ZbazLh6JQM2DX3uL7MsMhEdnKai3Jd2f1Eh1cGzvBKYaMHiAMS8qHDdcom",
  "key16": "5jmV1hBNQaMWgWcWb7tifX64x256VziPqjMnx9AbZoXQEFpcrJE8mpKRmNgWysgTcBiXVETBbohh19A36uEzfRtV",
  "key17": "27MPp3BZkuGTaXCzERiLwguU3QhAe52oT5nMfZZCNiJkpi8nJtfvPVJBhXQNh4nuyDGFRkZwXKEP1aRrggH673ev",
  "key18": "4xGmEcxc2a2mr7mWr8tzHrZQyLYabT6UJZyKzJiV2eNRvsAfhVSzfyjGR6MZHjGNJCvxeM53USUwFoeXtr6Dm7ou",
  "key19": "2qXrundRAeU5JtuRMSfTsQeAcQFL5stqabPfBMDYQuJPe9ibz8nVzkX5cHCaLMhQpYESFfPoQe2LJQEPD74pj5Yk",
  "key20": "3yfsWRtKFMFs1F3Y7ibn9gJBb8FZNxzAfC3fctFTw3TXJkGEJcdo7FmSKkB5omXZcgsve3dKh5FVSBXin5GDMtT5",
  "key21": "5VMWSUXmUWddNYi5PfZFfvLbGhjS7yVnmAcyvfk94iKdQE75ncNJxHthNnufT6ytiX9hArjjSZ4rQmU6Zm1v8qWR",
  "key22": "62xmJGcYNoPoZrP2k2NfmHQeMeSCb7gDvQtLYXWN9MB2hjvp6qK1psDLL1ur6zV3UyycZNp9Ab8BHTkvx3DgKoHU",
  "key23": "4xck26qYF5fhgVLafDpCo5jS6VVomTHJ48nu7oGyhsXCb8cDLFTEqbV1MhGUeE9vVqBaoPpQskp3Q29Aq5sjWP6H",
  "key24": "4DhvCTvvaGYu7gW6ivNdgPoNYA5DKHpzSMDrJNMVzfqDA8cnaDFHjqhYzVL68B6y69E55BnAb9Vvzh76bS7rjUEk",
  "key25": "2o5dgB63AhGbaatUsN2ZnsYgv54D71sRNSWNFzeCHfo5UrMYsrc6YwwfFJ6Vfjdwe81GrHhZ6QPLBN34iypMkiFi",
  "key26": "2HaKkhJ2RiXmgUe9x6GbkHqQiwhaXMJHQ75MDzS1KGcfGoLZH5rSUR5Gh1ViC7bYNqjB7XDjnmrQpdQ3h9Z6GCjf",
  "key27": "4jR9PVpzQpBAmQp2JF68GRKJNnMr1h7L2qPqN3oZUnX9Qa1jYhMTY53EDBRkN7xtqJChhuQbAXBbRAVfaqDKYFSY"
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
