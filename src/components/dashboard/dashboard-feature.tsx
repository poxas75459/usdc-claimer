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
    "2jZGNct6Az1itfozvWPWskff2MNbVjgbPNkCWvkt3B7MX7fh7igMrRuWznWZHpNNY3Zrwz2DxbX8m8n1AyCP8qEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpgqcjStVXtvxZQc4LUQmUVrcgNU2nU2r8zxYmqJjCheBkUgcyPtVynG56uxP7TFgVv9FFLiZgBpUgKWT1kWz7",
  "key1": "5sgnc2MiogoacYqv2mipHHTPPmLmqZKR3irywm4RKke3UGSos6LEPsHRJ6HZ6Umt3c9WXHjaxNvQcr1XxSL7mC2r",
  "key2": "JUqxUPmnnvdP8WZ5ERTpm9Y51nAE2pGg4LwDERYyckzUdyht3QmfKJda1mQj7cRMoEHbtDihHz2iefVSEB89GJj",
  "key3": "4MuRnpC5nhT1EgQgVYARHhDLGyryg4ho9pXgUWADyEBLymUCkARW5Y9jGWJzpqvMzGg5eYy39FAq5qke8CFQFA1T",
  "key4": "5EAX3h7drhqZ61ER43r9h2xJcw3EJDzRc9zyKiqrEEgQ2wgKHEwcU4yFi4npNzMTjxXjGBcgsKfNmDKeRm3nXbf",
  "key5": "3vr4AVyKaKgWWyuwyueiXbmRidjwBw1pD55XRyXzL7WEbjEAXMC5zXkgKgxHGBMqP5RAvL1ek6Xe4rne4ueZaNu2",
  "key6": "s38WLDSZFDstRecqeCodFeAYJenQieGLaSNFyJT6fKXmeNKXFyRrELhkts3kMz8XVs93RJ6gD5CXVJscgUQfYEn",
  "key7": "5mskzJPpzkrhq337pEPvC72XrFR4K3iq5qb4WsV2GASno4PcZiLmcFj9ndf3YmXbmkdhnhuf7UYi5fdCAWnaqexr",
  "key8": "2CUGVVuqtSaNLrLGTe2qDuvCh5vD6uo9hSutJqjxVufRoY6C5wYH9ZzvvbThCuqoRJNztFPmjpbiAG5SV9KycS1f",
  "key9": "3pQUhSoz6eJiTWgZcx2zgXL3b5GQbycxQPAPguH7kXmMkr3LqdkcGcpwydy7XY1Mk9oyhmh1yqkGQSST9WDzf9uw",
  "key10": "63awFHzaY8ELmQ6sWTtjoNkF8FoULwcgaYtKNonUqHWFuycqoKXHdwFvGuu37kX6Z42xCcUGPSJX3beLxPBq3wF7",
  "key11": "3JJtm5yQRP7EXKTrEYScRDEGTmTg8c1tA6GMv7vMy81iLuGjUfGDnKKCnaXszRZEur2GZS3hF6cMrrHyWqjUSta4",
  "key12": "5JwgR8iFR8XuVxXSiLXu9n4Zsmr1F2qCQcVWV9AWh3piBLD1MR1tDXYAVHvgRMNV3V8PdPNsbhbhYCJuaBsC15YB",
  "key13": "47NrB2fcJM8o7r3x32H1UyZ3HJ5LQfnHbPzT8Yok7KQztHPcGySZQzPyVuBYVxbeACJU3Ts6DVcda9GJMRZHhZeg",
  "key14": "EstRzeQrTVa3hRvFmnxGXdodXHBNedxddKdKVCEjUH3EbKDChymSb9CLWk7iQ4xWFSxDajk52yhPBzmxZBGBT8F",
  "key15": "3bxgnSiTFMFqTAqCc7J2oAyMCLjs9MGt8yt5iQdzPg7QcNghRnfqUZ9GuwC5FPXkH1ii2hiyn2weEKeeXR5azwVh",
  "key16": "T1mz16doFKd77HesrffZXVe8PLcUpL1Bznvve2ogqMrBzEDgMmXBh3iiVtFJSVjGYhbVAzGRt9ohSJwBJfUgApq",
  "key17": "62kEmJDqZMi17N1uyF39Tgg3JjbjbJZy7uBiRzFE7abzwiEb2wN2Mw6ZFKzKCPJDXZHm5qvU5UZoopHdTQcZceL5",
  "key18": "2o7ALyD4M5Z8upQS8M3sS2YXvdsp67orPmWchmK8tByFWtv1DUqHoZXSNN2WX5kWc8q8fc2cyu4KwqcdptXifJK4",
  "key19": "gpRXJQ7zB92QFvY5ytwPyjQP3uaAfhZTJFAu3NAf4zUa628Jnw6bDsv1Ev2sq19oTQ58K558dyUJXQwJX7VLvMG",
  "key20": "3zDnLFsF2kFwz5JkPNJDSxo3EMFWxQoDLDmc8KwkwpV7LaEG8LLturuYh78Y3HkGqNaAd4o8zMNy5Y2ExmQ16pQd",
  "key21": "YdWh7Et3uUL1KU2c24DpYmCQjXmE1M8TKmZcqBM5EAXoh3WHG9gyn6LSBNikMhpLbVtqpNLvVeyA8ag7wFexuQ5",
  "key22": "3gfgKF9wknvPTw6ga9uBMSKWc6NXwcErJJfob89oqzyyHhf7WPzgKDxm37QR7m13HAumDM8mHumopJVv4SeG8ixg",
  "key23": "4B4MS9xpUpaYWB2bVs3EC4WEfNyutUk7xo5pKHyuT9sP4MC99C9Zh6By9Va5zBAd1qzs8hDdMnojgXT5zgkG5GHp",
  "key24": "2wFjSDT7m786556iHgSD6YgAQboMrvDVB47R9732vdNbjxpfg2aSiMtUTFLrgciBTYhM9EZH1AKUWxDMMW43Zo4o",
  "key25": "24wf9m3QVPZge8taNavqjpFaUa7TaReop4mHokQif3cB8CwmFniXf9peS8s4BhBiGVA3X6WxpXHnBXkUgQsre78h",
  "key26": "5vDiTrdAZNVhjYadE6itLGtGKUBNifSUvae32wpFRSK6ugJYXdcaTC5RbCcmmm9ZNhuXFYZvQiXniWMdUz32cUi8",
  "key27": "6fZdtVVyivUaHtqb2QiED3HkGiZHipJ99jKyfibui6YpQFevi9BuqGvsGqFFGs1bzYTHAtdAHGkyp6V8KsVVTK8",
  "key28": "Cy5154in5EbEmqzaHWfvuLA36ZE92qFx9msTYjUP197mR4NStNpdWy6D1cscEDsknJDft8aRmx4XVd6NbJ2jM1R",
  "key29": "XJQoAcmjW9F72xXj19w6HWbg9DBfBTYP4qgQ2z3kH7gHproNXS6JAV5QprLyt52x6appBYyLsDoSeCpNuFQSrAx",
  "key30": "md3n1CGqkKfTbyjvnSWiJuyoYBUjqDux6a53ubZ1gjBqkYJdWdYAUqkstsYEHQTJUVy9GA8YryxHMye8svKEDD1",
  "key31": "4T4yMsPHokrDZN9BNr4FGv34Ty17PRTpB5f58ht3M1ujyB2roXbebc7xZYUsDu1zba2Eb9S69HgW4EXvZEEdutx1",
  "key32": "4fT9DNvZpx8pAMa22i5ZYRK6tZi9EpEFfNm3pbZfTXDD47FrfcrznUkut4pqbx4obxfjbHNr5N4un73ZETqTV7Yi",
  "key33": "6473cDt1TQ1MhCFvkWTYL5L2MXYrLB88qPSvwBmmq7xWD7yZs4DAB8X25MYfE7HnBp7xnHK2ABfQTMAJtirbmZsR",
  "key34": "3PX9komFz43z8wCznrze1LQgY5HmJ8soMk5huTq8zGaaRiE8tkxqNe2MK55h8iwBgBda7CwFu51a2wbTFvNJisTv",
  "key35": "4HVnkqLa5zT913aNvL6ZxmQQrUyKH3z98eeKsuhaK1W1PMbqCU56Pii4YAEmfftwoehmRKEH2XbexzXESyDYFKwX"
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
