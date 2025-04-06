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
    "EZe9duvM61YjWZ2GAsrwcpumECfUVW3GFocZrqB5cikfwz5WuS4jMhLbZr4VvW5hBd3YquGCiAPBvnB6FJekh7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zE6SKdyGZsNiAXFoPxrbGy42MvjmvbZkK7Kr3evP86Pw9zAqW3ruEbZ2w6cC7xz4x7wCXvGfUsZn1hoU4PYNM9B",
  "key1": "2dafwALP3hPoUcvLXKdhJNwzfmqQjbtbMbawCpQusGTwUTFrH1YNsb1VzeKDpcjWVRiPnddH5AekGst41ibVc8B2",
  "key2": "2EHAiFze2PDaRzdMZ1MTjV6NcEKLSRKU94Rvqr4YJM1UZgSHnMc7xkzuuLJyS1oAsabiu7LE99zaAZ7WVkXuimu1",
  "key3": "a1DvXER4pGZ2rS4889EoUxU6YagGQpNpYiiSs8YomxZv2qAMjMBbHrf9WndieXXZmyyE5rQjy8J2na5B9qUTCdx",
  "key4": "24Zy1KHCVB1wCrBZBuiEcwxeEu9imEnXaSK6Nbiy7h5F9neRM48LgiUqoq6rUSbtBcHkMW1mbi3hsANZWUVMPBZ8",
  "key5": "5iyxreFW1mpfEJZsx9bLNKtrjXGEzUGFrWQUyeiXMdfMasMNXi7pfvGTh1ubPvPf7b8PSH4AwrrNFKgmCYk4VDq5",
  "key6": "2hmFfXnxGTdVuu4qpaGqtZ2qrcmoeUmhU8jCMu3P1zHH8cbxMwouJbWgxzFjeJ57Wi79Rgt1gPN9esDiXzRTzn7x",
  "key7": "387AYFS4mqyPmbuUCCuwwZ9Li3jd5Kx1uZALtJAzSX78bfZPXj27uvt7nSgBduyE8xoUoBbFniXmeZBGfT7ziRxw",
  "key8": "519wEjFKmbGKLBUAFK9vEs3VXiw3ATFz2evV5znexU3hgrEEiJRcrdkx7994wF9Jzxp3r8KyQDrrS8hY8C5DqVgH",
  "key9": "hm1GEZAyiRuU8SFLTwVajf6JCqRCokENMzxC3YT3SnV77sh3iReN2DdQ4AfEJMYCBJ3dDn1BHwGEFe3PUJepvB3",
  "key10": "4ZczfcN8Y1JSRXn7NJ5exok4SN2cMEuyyKBZAJrMGFFX6XvGGoHkE1DudFLDmMQX9Qbo7PjnhBnm83Q4L27GTYqU",
  "key11": "39nPKsmzHX2cAKqAiJb3nUUykMVXK6FjpQQhgAjHxZVmGqL6XvywPYhFTQgge8eRn3Qv28furJ6GyGdjdCuphf2v",
  "key12": "5P6zJjHmQqEovV3aft3f9LWKJLvb888bucoET8vCxmZo6zPLUp8LUKfXfcCwHXijr4CjLTiCxVYvH5Whh9Y18VZV",
  "key13": "3CW3chh3NaMbxfv8CAbUon7NwBUo7dgCteVhqsrvEhMnAJqhrszs78DAm5WYLMRYVaXD5unHPvjB9K1CCSYnyDS7",
  "key14": "4RfjB35KAEa1D4X1PdaFxaGx7E4Cr3bxaQr9RSQ7q82FHdPG6rZPjh8nPShVqoecpp8i13BMsBp5z3qYxvdtY6UD",
  "key15": "5zv6FTZtL9ARvxZd9VKLPKqedW2RaT6jcw4sZDsvv3CLX69ZxYQtj4e7mWr3VccDBURaiLmw6V5pCXx528PA2vBs",
  "key16": "5ARt4PDH8gvzFCrmeEAEcZ74Yecd3f7Lsv1pHjo7e6C4gzgcDbeunHog7t1wxE7Jtm3YLqbtMB2vLP3aedCLg78A",
  "key17": "3o1zfg6U38onszg9vY1uMwDecZPMaSJjiwpU3dJXJ2nwVukWKR5WM9d4pW7fygTeFMM7aJJS3oFFCFhVtvahvPLe",
  "key18": "5bsoycWB85rrqYQ6oEvsVknjB8Ft8cDjjFXoQxEWNMC2TfDKUPodhGmJAwWtHBqM4DBNJ97B6crsJweMnatoivyW",
  "key19": "24ER7byYfLtqhDN9RXniLyXnpRKUUcZqHrTbyg4KLwvpDP5KHYfxk89PA34FXMxRTiZpunMXm4uLzpaJ8U6jQheD",
  "key20": "3UYwwPWc6x4uR1iyjqdjKzK7MDgSormqDoVfT1SwgLBNCJ7gvFUoUWF66Cdt3ZvmUjKeWfNkFi4meZUQsAYzJUi7",
  "key21": "551ZUXUviirTMAPpkSwy7Sd1tbFbCdBYUgqNmMxQDfZM3H6bMerpuErygsv3rm72ax5PuCmA8jmgqfsxzX6C5EM7",
  "key22": "2gQRks5mArLtEh4WyNyaQmzWgNFogdFP9u86ZerScExNg8Wt7pPVYY6HaNNGa5SepaxwGmNX1quBoswnS2NiWgfu",
  "key23": "5AH2rfteLdh8cin4QALtAwkyNAhFXBXjZZ3L9tzvNoHgcE3FggJGLMiC6MeWmrbJ5i7GZnB8QhGuE2jkwetevRxA",
  "key24": "e9HjHZPwwimKmEedPaGTt2JesZFk9hUvS8ShQ5nEyR1CXJBnsoh3ArDDbjrh8Z8gPLyCggtimrs1TWCoiSpB4Em",
  "key25": "58TKv1r4SS8QUhgeCXXNch8XRMhLPzvRbkTMKofhenfNrNdvisJb6dearfGj2TeuCYsfw6GEp4T4C9sxZyPya2Hn",
  "key26": "22PwHf4xZd7hmDGoScYn6db7sRf2u7idYtgmhrBdriQmFxvZbGhnaDYF4ogR2Jn9zUCS9b2YwfBJA2F1PH49abzN",
  "key27": "S51q6zDSd12eaMXXxarJvjBLTEQETbw91GZ9YPnfqUTw3xNqvndJattQqC3aBjq1KuC7L39RqK6EzoH1EufYEaD",
  "key28": "447aevzkYMnNKGB6rx4FCBYzqZio7umHj7bTesnzXCiDwPpxxtneqG8ZosM3au9mWaVvHYmeuDqq7mFm6imhW4xW",
  "key29": "4oHdyeMN5zF3NAfYRQCnjmp2epsybCggGHcZzhXLXpoxhvRiUfcoocLNfx4LxiKuADWrCjyAKggQziiAJ7eMVQM1",
  "key30": "63tTDkTiCrmJ3fDpYcqkGKvT96GXMPRUjzDQ3cNttSSxFc4mDSoXnwj42LFxY8rixebxTcqmzFwxifNonMaVoAnP",
  "key31": "2iKsMijVw4kbPPA8YjhgFRhNPvFqzS24xLfUREnDQdxA41sbXxW9k3BRFhZqbtTwqa5wmBGUoKDGorroXM9t6i2b"
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
