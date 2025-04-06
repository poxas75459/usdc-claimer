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
    "7AGix7nRJdCQZvZ8bwKDBJEWGvb11HwCe7vJc2js5QmQ7C3RhFpi2aa3dZu5gTZ8Ri5KJbppK9XqvJF2Pobd2Z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cTGkhWp3ynwxBLJ4wZHAXhBAdy9tUTNeybXRpkKqpAad5sDsYvJibuJPHqSMGzZNSQ9Cz6T7qs65vuR1gd5W4sE",
  "key1": "5ApccMFw11EXeSxTHkeh4ZXRgMi1KkTcLpqvQFFc5EE4GiYEzcijpC8dEKCjvNav6K2TFgoskdF2W97azGNAoGoj",
  "key2": "3Rx6EKKSgW2ky7WW8K7MiTbDzFVVtKVTVzSatKSdPWB6g4PBvQnRN9wuVUgwC2KjkLVQEbyVvJZBLvWhkcNQCnVa",
  "key3": "briW8vyYdqvXonbe9L4SCRj4SvdX6G9eiGRTe2QmqCqDS6DecfsuTP1V3XNax6ATQZbrjSEuFtzxCW7oZcKAsc4",
  "key4": "3UmWdduvtTdEYP6yyaw5FZhXrvTroUPhhy2W9PMehNo67SGkhnpjKKW1uYbV4MqvWKH6Prd7Chz2DAcU39PCfyXQ",
  "key5": "5roWTmCt9RYhHgw2511MhN8oVuhkW2imCo5mYZhSzzqMajHSwyhcVVGAdST4Kxg9HBeLJnfCZgSboWiJP122fsTS",
  "key6": "35Ha7MccjFBSDicBpkeacHPtMuewRTc8gKmjL8EbTRFCKqkKtSZuZdxHR5qiMGEd42uQ1NDg5TdV4oPf7X6LJW98",
  "key7": "3YQrpaXid8kSKSReUB7j1ra8yRrrRMFFqE712cUMErvvshwdX938KXxSe57zHPPXTUtBiA5g1gdFLZrH3Lv9zLZU",
  "key8": "2pdQ29ZWNWucfUBbTv3mc6FvqRZPPmMnzmD3PjPBJoJbZCpgUfk3ifSnfHwjbdZUUUNzHgzwVKZP4eov6u3ANWXp",
  "key9": "2LbSMxBC7RTYYdqmS94RhLn8r2kNvfzGvmsmTmBSWLG3gXNkAhmWTq2iS2hrg6rMkJB7aKdXajgu6UPqh29wPNdb",
  "key10": "5jZmVtpco67UDfmgtCNBTkvFVD8y9jsmwhyiQAVHdMAstJksTwxgAWzHxNFn3asxZFjWsy4QcP7YiLRN8X6nFvrj",
  "key11": "4VLkm6vgWSi2ifc3qA6Wuud7B9iwwu8ognDwYiCoNzawewtcvFsNmMCH4NT4ewjekfanqBjNYS8ZQFrUN82Eco6K",
  "key12": "4RKUxabtki6BHZHVLXZXaCdXL72f8KpHbYzdNVv1kwyMPEvtrVV1F4PyBqfr7Q7ByBNZgihyac8cJxB6XCCU1m2D",
  "key13": "EPVMPBMrLhoYeykyn89YsAu8HLprB7vjQfJ9MyKonhmMxnVMXcVHozs88c7APYipUqK4AnrUvLnzsKVWwvu9jAt",
  "key14": "aB2ASz6tf4Lbp8sAs16QK4uxxhGBJTajpQzZF2UMqP9yMrKEmaZGCCjomBT21r8jNEyRcQDjgWsZRmQi3XoYEan",
  "key15": "4pFGrKWkvAJasiWsnZPH3BxsFxbBn2nPJV1dQ3v7P872fbAANdmLXcLow9nNcBLWqchBggQ3xGboxdJLtAN4By4F",
  "key16": "4xfysqf1onhvKH1Mze5o6uuZW5JUDUgj8tsuWDktvWMQnojdQdfkfR4KJyxSRndCbbhnYfQaCJ1TQU6aVyb7DfvX",
  "key17": "3gDv6voUiJLKcbtP6ofoEf7aAnQ5wCQZbMC1VQjyeomxzvGjCMegUogVaqkeqnf88cn1Kb38Ab8s849Dzq8fjeuy",
  "key18": "2o5EToKDusouX7V7k9amt8mt2JnJTQfdqo2mrFt92NB7draDTYhjC3QrLM8z5FEYSxQU3nuhKtasePJGmDLcJaDP",
  "key19": "2pmE8EqzW4gQAk9hfX2t25QyXvi3UmM6h238WUNdRYjVX6xBLgUHr8Aqhy7daBgLJ1NzPtBxRUE4K5Y17AksFsKc",
  "key20": "3YiFn7nETAi1cHhsiGcVBgLgb4k2CstbVTeTAMePfcsvKYrAa1dZeHam7vhEvgU7baqpVXnQaGY85JJji5tmbk5o",
  "key21": "3ekBiLeGQX58azqhGQBS1FxNnigpFi6G8x1QFL54J6Q9DWhSL1HvdvxRATB7n2fz4shzX5zXbDne9Q4xu175KZeQ",
  "key22": "4wXEutVCrzLWxNfDKy5fsGYPThrr7xBvPMwzun6LU2UtHFPZFqoLHWjqkzigyPqbKARyEwfRdbYtMNZ3mVxfkXxz",
  "key23": "2ZLDbhSG2JA96NtJjuaRMDapZMYZK28qbZ6nFZ51bR9HMT1PSuLRetTiuVf6wmnR4BBHCXLXBgrgnLVMhz2YHtD8",
  "key24": "8dA8eQEvBYzymuv3AR5YNBg6A1W3o8dSok63oRNtSY4tfpnGu2D3vuyv9UdEKi3xjTPBQNAgKXZRzXkpYFLpE2K"
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
