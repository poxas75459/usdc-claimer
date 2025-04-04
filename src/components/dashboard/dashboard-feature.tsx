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
    "3tne51DJE1oAFnFB8HAwSMncXHcrx8b5ARdKFdWgS5ugNXEzZE3yQFqFRxKVWmmHaE3yXiA6f4hscZiZZzePz1Kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVCnh1UEJoNBoXvtV2BaPAnar3PfARsiRjcQA642Uf3MHhPj1drA9LEZiGTSDti77aR7tV4pbyDgS1LwZL9rk4D",
  "key1": "3TF7fxrHBK4zcjtMHVdJ7ByAjA4m2Sn5Uwe9fsgRTs1hi9bPp8CG65UGRe3SkShubzkDKRWqg4UApLz6hftybp4j",
  "key2": "5ZKtMrGpZ8yArDcstaRcotgm4gCq6owapHgwDyrSMinWEBKkHW8RN9TmzLGwCgD9VNXgbJcuJbYoX4GJVuVXP4D3",
  "key3": "4LyiUSGygS6URJQWn9GGDwTLWfB1gSccZP2JCV3rpLy1QiMqrwcraT4WU5D5FfnawM1dXRigDW7VBLgGZTKoFyoa",
  "key4": "5SUjHuf7ZBsdfT8SMn1cRGvo5DZxAcGFYBcxAus6GfSHWuxY2vsx4J2SdyLcrE1BiB1Pckf7uFbAYEccZT8PTBkS",
  "key5": "2miFcRGEZzbCMcFUSL99M5RK1dzFnZ8YzD4SpN8UWHvfozX8wrtde1ZKMaX1NsV5mXPyzZRZXm8ND764bKkY3Syp",
  "key6": "kiSmPrHhyY9XsfmqXJxBDXYcfENq9uCXUPidT7YQ5irBZGJhdeKhcHwbwFCGFbTo4zbYTW48jeZUQGQ3R27Jwnw",
  "key7": "2j2zg1sSFe8yspK7FTtChCFZSE8dRXMcKh5DcpF7AwsQHubj4cEaomLGGhs4694CxHRByk6RDh7DFGxXJsKBKEQj",
  "key8": "4uRwmXmadsDyeNCAJAp3H6FaGHhVgKcaXGtXNmvFX2kjcV93BB1JzE98NDwKN8fZBazxWmYeoHXdCxDdLbb3dftc",
  "key9": "3ZcwjtbB3roAFFmfRKazc9wvDLdQnp3w53BxHjCB1Bt9pBFkobn2fFHp5edutPm5fvZYDdtkCdmNPXAdxeNuVQjT",
  "key10": "4HrHkhYMh33uro628vEphJnWNWnJYfvYvyHDjvS9Lv3RTDkmDhGM4p3my17zpYsdbsCV5PH8dNqdMK84vT8JP34W",
  "key11": "4N6RxT9YxBjaH9zqCoknTytvY2cL6azDJt9m4ZFZ1H5BfwUK7YzoBUAbjNkvTCitBGoNybFshdVzA6ZCPmuZUBJV",
  "key12": "34T7FHY2Gv6jktQRWfrX7nvgieX49WkgSDS4WvGNYpzuBwTiJ19hHYtGi8QSCpbRkjjAf1kn38oqo1NBbTX35Pew",
  "key13": "47gDyTbQfFzfZuytANrMrnHVCknyBsmhayuBS8TNuod4DyKxGyyvb98ugTqNBDPmsUemQ1dc88MNnv6SxPETx8tq",
  "key14": "36eyG13bqC6jVdY5zNtYZQ32MHW9FC5JDZngbKr1G1r96Z2fumNDgiFdvGbkNBKFZn7vAALCMfGGLDC8NNuCe4G",
  "key15": "UzK7gTKSu1ptKbXCNLGpTufy9Aee6bdGseMQsHqmjbJJZoJS2x6HigNr3suSCFyr44sKY3nMFnKt8t23A4QdUb5",
  "key16": "63QvXc1tr8U6XcbEkCVFmTZq1jQoZEMXTwxwLsn7xaZtnHvUKWfmupYGiDWGgMa258CzLSA9D7eHbwymxk8eypmL",
  "key17": "32gyqHJeT3dXaJC5VA5rTaoPDxwUFqrgsBGvL9bEkAiRkfQMrvTco1MjbypysRDEdpv8cnhzSub4Ee5GThg6yzK3",
  "key18": "5nTEzZjkChhiKAU3GHgHoRU96YvbCQYU8TSWREX27WZ87Rv1YtHcieEDEiR9vcu8rS7K1EowigsGEWYqkdAL7MYs",
  "key19": "4sSeHWdPHafxojVFKDWiwSYi7cXKjzpkYyNrZGGLVswbr4qNmteRykBj4ohZvW68jk6aF4DRZbNcBX7bJwoU98Qn",
  "key20": "3D55UcoyFeB3HnraN2rrQjuXenVjT7ZBmZTLk2aLrFH12J4Zw7U6BbDYtYwxho4K2LaG7TeDthA4VBT8TgVp8y1N",
  "key21": "22ZyFNSJ2tiiFvEsszGYaSqivuz1DbaZ7EQV4waiTKm5TpyWzFzZktfrgYTLyDan4FQQBJgKAbW19ikbYkrea5gg",
  "key22": "3jchRhWSWgKqRFt4uKzZTQmpCEKGDVQvLyvzaoUwQfKTY1KzuK1TkiskAA13TZUMv7rvAKoJdXH7zEmScftHutm8",
  "key23": "4vbC58nsrybduaQcbWfdGuYck9yMCkYAxi3WtdsjN49eGaQ1p43Hbjd6Hx3xdjRHV2WTH433Amu9eVEiqfZyKRdV",
  "key24": "biCi6hvp16HpjVbK4cd1pWFpmdbXGkxfq9ZGnY3twr2eWmQzRhKxCDJ1Hz8snCeTpw8DkL9Y8ZzRJVhqYG4SwL1",
  "key25": "2AL8dLHveEMWocqSsHFnKG7My5QCogcLWap8ZFkkexgJyocXcyKZHQbWaCHZEqDLRsFVDKszDvDZcnaT7kdYLZrV",
  "key26": "22ts3G8UZARRA5Af2JDqGXWErPiqc5Q16oWA1ehnacCcP61TcNVwMMoRnLMLEetcZ7T7BoTVKBciHDpw4yDfgyMa",
  "key27": "5o5zS1D3LiDDGuTTFz6pQzhVnYMU19dbzoidX8HME4iW18iNLtKBn6js3fNgWUS9MEAsik2axjjC4pxrKXXTn6Rs"
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
