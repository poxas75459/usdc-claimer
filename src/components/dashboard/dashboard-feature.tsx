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
    "5j4XT3nPqefHVd5BTVoEeLnXWC7qBB1iwpEoZ7Bcwim3SMcnZBagsHNjTmp2fACa1TSUheTcpFkAqyeZLsEcDx8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZ3BwXtG8VKidFi8pQxNqG7rZ5vfW2bXeCtVvD1e9TewFv43GNQCm3dpMCbKW3thW8bnGiKaJ9BdXHGop9JGTXK",
  "key1": "4KL43mQLkui3nD3gFDUb7Ufd73FjfnPQL3UpCpNJoZUJcUxwyQuLVpncheRKPx8o6msP5BSpTUjT6ue6cNfv8MLd",
  "key2": "2T3uZm6K9wDivroiW2yEy9wTm8Q5tFhmHfHWvSd8k4f8HUTaPmL9iXKTqbHxS6Uz95XkcCNRQLhKQD4TurzfpaL7",
  "key3": "5Me2nCMN7sicKcZBW2PUYTt8aDkRzna9mK6d7NNbecqR8ZJVSsiLqsNfJphPp6tP5Amkt3qE3cJ7vir1QQ2u7mna",
  "key4": "2gP4hsXTLHicVztiUPgmgVj9xGtpXh1dGvvUyt7ggerY2n4ASWDCS6WZDGEcFcxEC4kCjRpbd1HWMKtyD41mFEC1",
  "key5": "5Z7QV6GWMMc1ikB3qz9R81jjD4cABQ1ougoZJ5fs8vrxXvTMMHVQHNpzjybMRT15Md1WiDSfYmNR6frv5fvcKqqX",
  "key6": "5FJ7p1JSABtxyt4HGnBwT2Gtvn5b2sazF5dY2XitvXmpXkxG9hWy69BoM1rEf2QJgNbQTSfh98K2wMo8kWzztXYg",
  "key7": "2GymuojJRWmBAL77mCnHEC3riCvw6EtrBfPQFAvVky8T38U2Van1KrHQmFjfWVfWUqKqzKUFcH73Ewmyhos5KQod",
  "key8": "28dvrJhRF17MtyMQggJUuFpW5wW2uWJUPgFqvZEsPMmMDv3uJo7bL9BCZngsS1Y3m8VyxJYWZJYLgs5LdyMGNVHX",
  "key9": "4V93dGS9t9tjy7ZUoMN8kk15De2UXdpsNdHck99ZQN2iqeVG9ETMZCE6qNLenjMwyZ9pGFiXHkWk8ycwgxSuVZef",
  "key10": "2TECYmJWNSBY9BBEfKQorEnixnxd4dsAXuK7oEcVT3Wgvh7dq7FGZb9P6FchV6xK8SzXWb3oBQxybVgxRvXR6hJj",
  "key11": "5nywX4FTbmxYULwjZ8tHP6BLTVuW4pxf4uMnzyifJcf4ik7Wt2P5cUJkGmvLRQUjFXJwcqR4KL3yZ1ei9R75fYaf",
  "key12": "2nvi2tk4iGES8XN47z6vaztkbrxEnJ6NwBQoVUKihWrYKCSzwVq1DVgCmD4fMtQu2usryz1x7PGqqbkgsvSirwTS",
  "key13": "4LSHA11jbzGzWXRt7QHVtRxLmCpaW2zEZ6aC2Dsi4APtMKdZzQ3j368Pc6eiJbBed8dNn5yBPBsTVVFDZRvgndx1",
  "key14": "45rq3wdUk1RLUsywoyNEjBvtSBJ4HsaypBp6Zph12CZNzf7s29nJKtBvgiAf9yxKkQ2zqqf2xVvYvMJexoVKCYLy",
  "key15": "4sNTRUhdth8JxSGMRMfb9s8mBCBVsSt7Sf4LcAaanwrLTTGMwCjfEqLwaVJ3k4aZHoStwWsR61hwBzN3KcsM3nEg",
  "key16": "2AKkJgB6VoLAe5kec45TPnCuh6a5ay2RdN25FhRJuho32tGpg3CWDZsLXZz9DKNF8WMW9xegEMXxBPu9pdjWLTPB",
  "key17": "5wkuktCaBy8bxP6eZBZ7s2uWaYAVqfGDKXKdZjSWVMe21Vx3mhaRVjEVVNkTcUj8SnnyAW7RvxLADGseuxTXSJzu",
  "key18": "4msjR96CzrAuYUWmjMt4WGwMYSK3EL8XYtHEFnpft47ZtEAwEAxGtDiF8o3J7jWrnyUMRUaN2vuuxBXVtXwmvHi8",
  "key19": "4vqwhkQqA6XG4Xg4qdqUyaLLYViakg1sWdzTp86NrgPTEhY8LC6335VpguCfcYmzX6HNeHnJmBP4R7yZ97hQZUop",
  "key20": "415Mv4N24iokondntA2LVcFTbbHtqBwjoXE76sTiBKuco2hHTs37Recq8bz1W4mHcnW5noL8XVB3hL5QXuMzBzHq",
  "key21": "3VZkFq3UbuWZM5qHzoDcsr2jVtU7TExaveBpNePc9Hdc5fvtUHbQRjW4uEDXqF3mBYqDsV11JfF1ouTMEjnnFz5q",
  "key22": "x3nQgsjjPJN2RXthvNJq9bvYKDSh4b6ZPRDVZ3KLqq7uazFUZZzorxGs8muVesacykCVvLQvjjyRGpxmFtD1trn",
  "key23": "XK9GDVXkqJAVDgqZ9aPQepPX8KRpozqv2nSz1eRHB4aw4qhLZ4oGsHGhxXu84qucvniKUdquyw5s8UN8DyJ7epd",
  "key24": "fC1E98LbZS6WR1kqvZm5HsJysppqsHhbuhNFovoNZwdwhnQefeJpijvfYpY2devYKbe6kzrTsAybTseAWJFLbmV",
  "key25": "uEkyLJdQj2GgPk6D5ttLc3yX6WF9fwWkZHW4pao1Ky8YXAhRwmp7UGaUzj7KCqK33Wpw6gThjsbKWwiWuCmfAXS",
  "key26": "5iT87KAmo4Mxp6xZ5stsCfJeesQaN7UBMcwrEfPrdf48sVhcTXYEemArRAXfBKWczmxVLYYnAxEfUZKShbM9t92B"
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
