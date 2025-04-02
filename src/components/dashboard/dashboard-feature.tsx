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
    "28zJ4NstoKFiBHDSLNh99n9EtJAQ8QeqnyiGBdTZXaBi1bvaXzWTP1uZ8p17UtsDCVLCwrs3ZfE9nnTjU5mxaZdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sW8MKaE7qp9RQoCaJCg9DrB2owYb7U7d1VtuLdX8MkVFeewRwHFjmqCRasFrQrovv6q41GUPtyYZAYig4BXpjbX",
  "key1": "59PXtZq8voj88wPAiQMqhU9D2kZMAS24p1So5oYDBoqZnTciBEZLrYKzEB5Q4dDtjQ4aQfDHv3vve74Ur9k2GrnD",
  "key2": "5dGof4ima1toBks2z2ZbwL54yDxmpJ7iEwACyL7He5kcFsLWqjFuzPEozZxUqWSJ9Bd4tegbXcB6ThBXVh8SdYa3",
  "key3": "2MnNmLRgSZZvmAYHKhAtLhEL2mX7TJNsuA9ud78qS4TP5AnLqPp8wZQqnUnM8V1f6Gyzr8DeeGszddUy36iegCoH",
  "key4": "2k5oBL6vYVRaC1Js7WqZa85gapH69xFdCs7TFH5N34nScwBFeCqEQyqVikvTHmSSPAjGoTz5DX6tf9fTA59Q4a65",
  "key5": "5qr6M5Z7q5RsUtt7pbWViBU7Ruwhge15xTJ8L2FfTXazGVZNTAnW77n4F7UK7Dk8opsbjACgKx1Bccos8Tn7ttjQ",
  "key6": "38xX4LreaWyRi8NdEVT2bgHCn564smCyQ9CtgPEgbSWPCeVTwHegMomj6SmFWD9nP1iq47Bw3CDKfXPS8YtiuvRb",
  "key7": "4MTkorKNUjiApkWFS2Z19wRdvk1UATwPQYGhTeBkxdE8VcdRyxzWL4m4AJFuKjWggfAvjaDcaH4AeWDxrbsEFGaS",
  "key8": "2PFZSFcCWSWq7MiMMA2iyzC59UKh5d4DoJ5NEvpK5HKESyYDW9GLcWX2e3cqUZvbDdg4tJokA6bJRjrBoV1vuzx2",
  "key9": "5eWbUPoPk1nThy494ydAWcjxRg1miD9fdVb1jhSTPP4KpooSEvyizvuVoRknXX6HjXfYTQjXcxexkXRGzRnipNeK",
  "key10": "2Lm3y5PmhkAvq7rcTyuGt97oBWwBwQZ7N6ixpBfZPoiSQLoCgvQNwCe1VMeA8XtxuyuTWn9idLHUXCVcfVrxzY3z",
  "key11": "4yxbn2nHZLxvMGZDouSGvabhmRCjhg94VAe66VBvYxH9YdkJfgGsLRaVDyKG977k6TerxPUa2BHQg3WeDHcQVr1E",
  "key12": "3zgP9286aLWxjtok8dpdpK54i7gGHVTYGoWr1yGiRP6fipRvXbaAiD9cNS4Tgwr7FKCtU7476pJZ4ffLBs7FTyYh",
  "key13": "28otYqNUTuLb4q5z12M5ZGoitoTPFG9TW3tuzKkMbyfwhunQeWJqRaESSacGMN3PaqWVS34Kb2gXbmJU4WZsD2XM",
  "key14": "2rkGbD2uoLrQCdAMeLhJSrL2FGKmnCTC5eYHhjzWqGRCb8EfFi44Jn9RWdtbQd4HRG74o58UEv8TeMuDRV32fAFa",
  "key15": "2EpTeuRDTgYWu6VyxaikErqKuGTxwGkBRJS4rfMTjiviEY2GFVEHiYgBgJU4y53ng9HMG9gfdPHF1M9ecWGnZYiK",
  "key16": "2H26NsgMQQbJM5PbuYtxqsPzD4VmTQHbVSbb1hrK2UmkqovaavEN3G97NbHYe1xmsjkiXRQq5FpZ2zrV9xRJQL9w",
  "key17": "4bTV4rti4QKyyVbcDWmJ4QZBE2EZDyreU4hWjv51aJaCPvfqHMEwmZDT7QvLoaqCGJVtJv88st1J6gtQyUyyPH8Y",
  "key18": "4qmrKYNRusvdUcaxZtMGw2VRK5jbe7ET6kSFWh1TXMMXZi5h2rkqExyFqJHcn3Xv8uMZjCEtoXtf2dUX6ZWxY8Lz",
  "key19": "49cpicjFHJ3GCY6fqTVb6NhaKeUs22u1VikfrEE9W431Scq3u7Eez8BXDy6EVSQXP8nvVUKErWWS7GGFUhLQt7aG",
  "key20": "4m6RrugVvXp2driMKLJckACankqPLRKbPNKbWFjDc3fxh2eTuaXL1ZtCvj6gadcUy3NPhkGgzSMa93Eggk7AfT1b",
  "key21": "5zhYZJWejp4QBvj17a6Ny1VMVwdTYjg3Vf6gcDe3FWcMb7XD5SDbCvkMoFXYomq8ve2Tv9342LrJoZU91DMnK18Z",
  "key22": "4ierHfxQBNaXipy9AHnF5BRsBrKWwiqoqnwqg5gv541uTr7KRZGkTbcfzVRY3eyfXJpvTJMDx2RRpBdeWWwu3mBX",
  "key23": "2SWDjjhwdyFDKXn1F2hPyWJZrvhgSU5qs6nPiKWkmzLs7hEzu45PE51nhzjbynCzoZsm5Tmc8JZHcZsLgJn8oG6o",
  "key24": "5spFQL46U6xMdpsA3pzJXbTbRZCvwQ5vKmfGYpCky3eZJeC1ndGZxirN6G3raDJ16zoSphxWUsp2Goj3vgfqUJnp",
  "key25": "wDQcobzQxikMSQyk3R3BSJCimjEuVet48f3K2NoWYHEMefqu6eQy4Z4QHUMTzSri1WGc2GA6ZMGdgwF1tm2t4XM",
  "key26": "3fgVPouJJqK7McZfXzhDaNNBqCKfSKkQzgQxzY8ooDtPMACQsjYSoryzGdiTo9NsXAMHyeo6YyNzzzErZxzQ9GBP",
  "key27": "4wZtSURQ7Ebzeedh7R6AZzuZLrADyGgoNcwm5m41pmJGmp4LprEUyZi7rNZve4bRViki539WuiktGTYFTqGiKxEA"
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
