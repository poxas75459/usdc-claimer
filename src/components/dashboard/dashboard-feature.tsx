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
    "2yQ6BNq6sdP6JfECaX9J84QzFwyHSdbzA66tq5k53ZYVVgRCsxFHC337BmSwiy3uazXF7o1x7GUaw7gc8s7zRaWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bb8B1Hx3VMMajrUZjVqvGtZfXnFbz6KktyduG14V5V8bXxUQyLHTE2iKdc5WiaXivtSJwKWbRQ1oC2khhpKjXf1",
  "key1": "4ia2HBiF5P79VMEkXXtuffNahPuWwHLXKSXARd1tdjyjn3s727Pz5rEcNdHgsVkBjJTSKh6TfyH3xsPU14UbZnJW",
  "key2": "3RqvMrzbx7Dpgg7qgBYWR5YYqjHzSq9c5CzFSSiEggitF2L84GqmC5dehq6kUho2t775iBrANwCEZxwBDUXKFDrs",
  "key3": "4aBvAPr1mtAXwM9ByiDPiZVhwmaneVXeWKj9z9KyihoXEgCHFCjAPKAhcFsx94gsvG4X64q4k9uHFKQ3ZhfN5E4",
  "key4": "SWZnta4MnpJfNzQ2j1xBVMmK2oTGncC7iA9AbG2r5knYjEwNVjAnzKY3FVxSNN8haSezGvf12LhYMQj3PQxhwpx",
  "key5": "3rHF52q27AiJ69KyoPi9FDGCk5tSatETKe3yLzeK8QEKQDJiXKYnXAthd9Z1SisxKABrkrGy7rBtpMzPSXM8WW7Y",
  "key6": "56ko2PW5jSkvy9Wby8DkBJoBn6w7bNbMT5kCBdzJnvLMp4RBo2eYKWSDqKMYDGCxtMrDbFXbNaNT5ZzfsKm1q2QK",
  "key7": "2t32WXRKeL7nKooumR3dTFxEiYcddJwRNB1mRwEUPA5Nn9kgoJvyvi7rvnPJjcKxnxY9NjQiEvzpDueJV2AR9MYJ",
  "key8": "wkU1h8Ga2AkNAmaGfsz2pCXAnkaCvYYXMYQ69iq3TqNTHThwXzkUy7sF1smZ4zmkoStfwW3Cg8MBV5eK29srzUR",
  "key9": "qNMtShqFCKk1ZNBsArvDKoBBLWKd6bmXH3QwmbBGSXL2hoQekzogcaSioyHs7vSe9cmfoTHrKPkZ1dcDAc3TdMQ",
  "key10": "5C2rYcbJ3a6qd7oQkgxnaJA4AqZZQaM6Q44ewuGTmfJMNU3xfUsSk5baDSqCsWkWNsJ9s62EDGADq6AvPEEP9ESV",
  "key11": "47xzmbXg6VxfoMMzhBVX4BxQqyK8faebGqzkt9JmEJWjudGSxvHqoh9gEkBto3PiH9uvJTthKrDVpc1Kp89e9JF5",
  "key12": "5Xs1q4RLHZoiL5TY6yW1XaRcyw8PHed3kcMUzjcnTFhubT8de4vkxAA4UPkARk7Tdhz2mao7wZHymZo5dz7jzJ7f",
  "key13": "3uVeT5NE2rv2c8KWRXswgZDe8RjZ8UKSuvBjZ8KX76Du9UscnSz9Gug5rRyUeM2xcbjCRzUu1yruVqCU8tFG6u6C",
  "key14": "4Re4tKVNEFrPRmE1mhiSgxF3XjzwmzShiSwnVVdsHks4YMwCbD59FC6oTYkzjLJ5GiGJtVnZDxwopc41pQG8FiBz",
  "key15": "2mykrb1piesXY8ALd9n7x46V9ZJxZAiF6nFbr7jSD3VV4atF2dy4rP5YJmFzdVDM99eoDhKS2XzChiDNXywBJY3h",
  "key16": "4keWgRN6y612pUbFAFtW3HVBV3uRwF18VWH9u5iphp43h6RMH2p6z8vTpbxP3hTZpyUefSWbRnVScrSZTBvHB1Ac",
  "key17": "3Lc66P5F8VszqJon91LGbRUFJnfDFYjTer3it5rDJ55vq7DTsTLP1LqNyRFP9xivB7s17erHLdqK5UXHWs5WTRGn",
  "key18": "5Qhe1gZtVxk3Qw1riaL7NpBwDfD3duMUxUivSSfgRqT4VHXvL7T93ngRNmUQDJMgm7MxvuZt9wfya13Cg9BcAAez",
  "key19": "3u3W4jBXkAubHcJtSxwvrc1TjnSYfJKysAL6Lr8iToQpm2yktByRbL8x2ENXsWcvJzr8voTC3SnLybj2FFvDxXtZ",
  "key20": "47SPDZZQ6nyiek8HEcJbjZxPTg1fDWb7qma4KYFL8zPVcjfB3cJNDu4S2WodiRqSdyxidTmz39w1EMtn4rGMKfLF",
  "key21": "5XnLPGsqoHGaU5he87Utf86H2J7zLZWPHkUT7GwEk4YNWzcXsJLnqWTQWQRDohWFKnkQ2oysCekPbNvb8sMDppTG",
  "key22": "26vFvwhw7yHwdJi8Uxjz9XBDdLWVVsv49EVWNUzzZYpmTvzS5vmWjJsGZopKLw3HFsdzHWRL6rTznoBCk6khNRQv",
  "key23": "4NXN9YvUtHwFUrkFvjUiitkis5ZM4u2wjWq4umYYX2oGcZt3bRQ5qEAZt3Hrm6FT5H74W2ZhSwBAn5KhZupKwf63",
  "key24": "2nJZLGP8hCc8spAc8QuDq5v7cq8rFjbqXj76JzD7zmJni7zAXK2Tm7Ptb9nuGJup5tGVLVr2RWZVzrDWcgF5xpjj",
  "key25": "8osovTkZDL1EUqmurvZ4X17Ne7AoxnWhdCWTT4HZEJgpyyi2ewZE2ne23suR9YdGTiLxZzApogpm81rEn8wnRku",
  "key26": "4TFFw5xmjmib4twkG41GSfXzPmUgnBDh1xEcK17QM75tbVEBBS7Jvzr86RwkTrEgEzzGbgnKsbTjsw3oGLZVbaGG",
  "key27": "4V8WpxUxGXXnhMnRKZ6egJTa7qvNrmUdJBCgswfKFDNQ2ZcYrNcB4sn6DWfqr2EUUywGmFqqeGSQoqyRHp3RS79D",
  "key28": "545Jg9XZghB1jUvfXgsqBn7zQxmJeVimfrRL1GiyqbmYQQdk2j8UfNSDMvNxSU5iDM3afLvWP2D6VKEnkgs5YF2e",
  "key29": "2vzLF8sooeBX4st66DNkEtpM3UzAQHBVKfxrYfjaRQCV8999RQLDFv69JbnRv63E9fK9Kf1RXxEtPHqUvky1vtCM",
  "key30": "5MjAZaqUfozug8yBqj4ccdU2HRQ1Aw8oKbDuwPKU7MEFN2iQk3PHJQLQFeu4xJPHiV9pz3UmHzUhHwL4AbKM9Y2p",
  "key31": "57XkvpGyomfYEviYHnBMXR7BGX7Gs5Ydcb5G9CZim24oziKrtu1vipxhP9yRxhc2wsRAmrmq4gYY4KQXXgN7bKeE",
  "key32": "mJn9V7BLC8pexskyFxfePL47dhUjEFyzTL4bjE4TDMTdSw7KpP8GWQEdiGxohrFFVddZeJPqkMzztk7E1Kp8n2v"
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
