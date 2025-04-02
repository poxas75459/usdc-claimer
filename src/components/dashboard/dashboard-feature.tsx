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
    "557WizuRoW2gP6jShm5YJwHKKng5WMGDKFzZdqSJBPYMbxkR2iqtJwDYu34a4CJhwYu8URn29LSZ5r2Rda4p6coo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCorQcjDAonh5v5j46ivBAg5zAUPQYiSHAe41pphCZg6Sd3zUL43Z7mbzbe4ocmsmsMXb6zx8sD1Py9Wvw5wHXs",
  "key1": "3HJrD4aXZ4K171wu583zAc84CgWJ2Kbp5HZoZCu5Mja9wZFURKWvKUkT5dgtvtJjKKNDn2351YJEEWEH8JmVVyET",
  "key2": "48FtFFEUBDhn4srhn9rEjWHc261DRYcDEvYcsKqKrSMyV6trx9Xsmpy3D12h6rKjjVnRbtqDVokZa2exhWjNV6fb",
  "key3": "3a72QbW2UC3hkHwQFPJAW6ZkzHkLiRbYCL8je8raDFbz9hhy7rdoo83KSVzJQzSXQMBwUAgaQJEUZBUQnhNRMCX9",
  "key4": "48EBSozoeV83oHMWgezxU3p2x3RiA8C52Yh7QuWJzfZBF2cuehyE2SZYZPVrNDCBZbTJXP8HpZeR8oVY6355Hd3d",
  "key5": "3W75Rv3XpyZ92S3hzUJ2DeC2jtaurzTK1pXCoW8dfzYt31rL13iBG6GjezKGPY9EWzQLXzk69o22N47SFJy1CZ4H",
  "key6": "P865YFz9RRrmjVEWAHpwXyA8FZ29ufKjyPHD4fKvF9GwrBxr2NxeMPbdm8BjmGJjZdR3pw89q86wPmb1gJ2M245",
  "key7": "2tBov3eUTVBcDE9X3yQhdTSyxbHurPoWuiKWRmLLBFhjtiFGrcFBPujAbWG7mHpYbQjrLPTtVetRy25vEioqjewW",
  "key8": "R8VvxBZUGYkkAhqr9hg4cz5jRuYfToWt7LsK3Gd9eXPQqbJtN2mrm4v5ccttSbvjAxEXqmQa6YG2bPZ1dj4LBYE",
  "key9": "4nJJNbefpbJrT25zPK3RpMLHbvjpbEb9jp4ds4FPPLFwaKxyWFPea2SSkcNpzfC9iQy9gBHKcFvfgoKFvvbgKB7y",
  "key10": "2o5JPwY6YdKdjTX8HZpLXGYxnDGNtbAX1iXw1rsb56TQ1vcdLDiYfuZgAQPtr9N5zY44ALAWNq9fP491wZSgcpTz",
  "key11": "2oYdoH44oX32N7Ks7qofaW5Lvtx7YyHecsJXn5ioo4JcG5Em886B4BRL1Ym3Z2yQXqLSSDtNyEVjWuNvC3UpBhfN",
  "key12": "5gamggBS7BD9UdtJjqqiVrGur9ud6M1sGy6ufqSSDezjykcwzbbhqKuyma8B5goi5mk6cJjkCbuUNK19CfqwTLpe",
  "key13": "69fgfW3kPUhfDffpu4rxLfRd4pzCveqSyFmQGhn2jWjTkXBcbTR6eRhmJKiZB3tP3vWvGhy7oPV6aiP12y7BgvD",
  "key14": "5oyHNbbCfkC18hwUEFkQDdyACcRRDBDpM8CU3T9hciPJqcwfTbB5WH8n9HU2aJDqR4fsFhtqhZqRYrMtkJoRmRRj",
  "key15": "5ZKpZE5diwy1N2j5w62Cd3a4hJpk5g1bhzbUd5GS3mtP4npRa7cmnMR2zoVaoA7VSC4vfY4wyG8en5CXJbPym8J5",
  "key16": "NweiCReJ5PCaK6PKPDgQCWDkVSFHNKYE36sQPJmDmLXUq5n7ecFhK71zFrWUKM8Qh7CDWpDcGZnfYN9ZTdXDFdM",
  "key17": "62VTmJT5jnt3cSJFbdTUinNLuyHsD2Rga4NYE2bMZuBC2sXFPDK4A2W1UHWyeXzEnk8HBFDthx3hZSkyuuQ2rps3",
  "key18": "4HBcPfH2VwYPqqyf44Ahv5Gmw5cEaqGE6ta8RHmDNyodcydvp4529xfN2uwtZ4ZM8AWJnWuT781joLmkHsHWRuzz",
  "key19": "3WGwZASQfWLmyCzpkXAzyxBTsW5Su42hJRLnhYfiEsEci8YsAjTKf6g98adEN9TGfqLq8bic8Q2qFCtw4VL76crX",
  "key20": "4Griy4EkN3rgKTyhGU9UXnGg4ih1dfBek2QJuhU6yTpCXC4sTMdvUyXkDA4gQnv29Gyk2j3TBjYdbMkPZVPWTYce",
  "key21": "3T1P95mbUD4oC2adJUgjfGcyZxnR3WmUPncHbCxv8bQDZxPLW363eZhnv7mAYSRYdGbxP6JjDTa4X43JNgsvXkmi",
  "key22": "3Fx3j6CwniBRpfvmZ5dMiVVYKcHUFrkugWX7HDDhHrGyHbUkKPNMFsDWVk6hjYK2wFHHszaD5HfZcsysG9RyxGQ1",
  "key23": "2T7KaL5hxxRyS6tFynU9zsuvfDBts2yRrnRxePvkdyTArpcX2agwaWdcHLi9ohEG6GuRyYLuvUKwAND3dgQmvRuH",
  "key24": "4TwfDmXKkyD9Hn49KJLmPo92LH4DMpWkx58Seoknhjc4Bkpf8vA72k1CMgkyiThWgjqYxyusxzGT4UVYVhdXe9Qc",
  "key25": "UbqxFWfCJ85LFnbxaVmao4TEaC4FzoJDobrUq6p48oejM2eWuQYvsSnqczCzWkKDHTBZEcyuBuNvNfwpuQwAyKh"
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
