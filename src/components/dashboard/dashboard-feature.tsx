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
    "4dPA99Yp3F8Zq6hhopwcS98UBbhBQwMhMc8jcz7aDCA7bvWTVxhZ7S5Axr5cAxyp4f3h3PnJgKehsiBkXpFXjHaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrV2K2kBTs9WEDEqXx7ZLCzBUqzEPffvWFHBxbUzf6DYEUdSngdeMQgtv5huNnn8pAqgKjT1wRzR94myBtYB24w",
  "key1": "2Q4GF9wmMNXhuLy2HDPcYaGDxo2TDZ1WyjsRYgiTab4DrF4GR2YWtBkFtvK7cPEhud2pCFfk4gEzv9mBokNbfvB5",
  "key2": "4ZK5y3i4nzNebx7wMbCwunRFAwpj1ZYgxbsGpef9DeHXoEG6QupP5RY8wKCosHuDhM5MuMK6HZPokjbmCuNX7PSR",
  "key3": "3gUWcLJ4PxFtEt9cKSKhGTAdKiGNvLRcZTdqN2XxhSgXQmvUgtUHG7Yucpq7wtzjryinci8qGXDeBj9RnKYYjVd1",
  "key4": "kubETW8oXnrmrBtgpBSdWdi6v8cL7XL51ihsfjxYsyCb7jC25xA8wtfmjKYsoHCvwgHqrc7jsddKpZzNprRqbK8",
  "key5": "5fCdvv7V6U9ZYMZ7uxXMD44PDwEDkSx7amd1fRo46fmoDcAtc3dHB4MFK4epsTfWF4V2ZxrHmiv5e93Soqd964dN",
  "key6": "Huseo8Kw5H27xxZmuJLPmmeVr8tT9iDaHaY4qSGtSXfEvfYFDndtWAKcQZkaYK6aBUaD2dP8ioUPCXgW3a27U2d",
  "key7": "rjr37Aoor6FM2RoFT5CG4nSoLayiMeXEJMnMprbToKqMi4PCiJ7WVzYZAxyeDPqPbEoj1NpFBSbC8KoexqDZpv5",
  "key8": "z1VVNKE2Qadkr4mFSWChttDGiFgv1QBCb1vZgXrLmQJLDRixMtHxjRER8R8vdsmU53yhBmaXuUkARYnYqQboM3f",
  "key9": "3mwE4sEe91zEy5SEAmAsQKNepdezNWWhQPuL43AcQ7zFY99wVfb64bRsvxY25eQVibjcLTYJ5WJisAZD7NDBiTBp",
  "key10": "2RMtqzGSGZq1QvV22gF8QRAV5PHbJeWqBapAdQhBQZZiQZY5rbTaFzqSPV1Zoh37mxeKWBoZU2a1Q8J4qz7KZjVK",
  "key11": "5roFpBcnmBZZnirivfoUk7LBeZ6yu1SbnofKLAk4BZN1jsqFWchP18smskPxoKdzQBwZS3sgLefdmXoooFuTNkNo",
  "key12": "4Q5zYq2T9VvvQvwfmZYWbDagXkBUkUtVScSbXieneuA1nbFrCFNcDntEc13kGuWFNoAAuP94vLbBxPs3Mr3Mcaqf",
  "key13": "5PfmwX5Zdc9fSAardFM65WBgv6ShiaayNBiQAZpxt5oYDX3t3ojECNTLYpaxafJugLUF6iz49TDfMj2bCWMF9kn3",
  "key14": "3k4nQKCwtn59pcoph8Et3AkhTK7t6dJbc9us9nNaG4EDVSxVQPUsBz64F5VkfeEk1ts9yLK51HrAj8Ypt2jWnhRV",
  "key15": "2jBpB5Qj8uUERPPVz4LpBQA7vgCkUJMP179CsbifmDcNGGWuxZp1og9uXBbQEWdQqYbmuFMJiC9ygM8ysdN1h15v",
  "key16": "2cNAtZDJrybx2YSFjhS1rNM62bnN54fknspTnAeYZrsnbio95f89Vzpf57mNqKLtoyJD8R3eBXmUkw1k7SREevbC",
  "key17": "3gr9jqf6LEq1PJ9mmhdnTTBQTcrrv7cmCgqyHcM9Rh9iWJq3wHBTp7uKGpfLTaJ3CCVTfjJXMWuAnjHKyTx4DkyL",
  "key18": "32SJt3YTifBZjtwiJEzAezmyTCzmK8Y4vW5R2k5YykHjD5dE54H6cnPHsMrKCKFuET2BZbmuan7cUsZ9bdEeKttP",
  "key19": "4o1jN3SrwTtz5m6tRUrABZsboFxAdWLHbrwpenpJuJREkBwXhJKt1AAufrLS4jN7in8JJQywyixzY7Vmpi4pcK41",
  "key20": "4CEHf8eMYunw64drcBn5dTpd6MWKyuaswsGbJRs6hBytEyBsA2enojYW9DoJfGSKv33mXC9NFgFfJBvwrxeAs4bX",
  "key21": "4bLnYb3swmmhm5RXswNQpMXEkEFitLnwgZ558xN82Au2twJKxKeq6iSnKgAa5SBQ6Zfx48KKGVAhPRtGvQztjiam",
  "key22": "3iLZ8qZE3BLb4cDaKKozN4aGnBXyEqL352BvCsYZWgW5vJoF4PrV1R7xCwVrChbGtwkYdMQG8kyRc5znWwcvT7tL",
  "key23": "5Vm11ngXksDRds7wFVR8oR9G2tWTm1UDatFpaRLcFfigPVctj7ZodoEwYGsJobjyuYBv8UL62UAJ82LQsu3xZ4wt",
  "key24": "5hRMZWmGdC5r1Jx11HFuRuXZ4boPwohieNA2ikQ7VNFWwLUJBmDDDPD3Gyz5otERE1rvzBa2xqZm6cimErbrjN9K",
  "key25": "4nBE9FpbqtqV2cxDoiuQn85YrkiBQYxU8RU2KzNpaHohcWJJ5TsscmfcfBDpdN6UuQkibFBGXSFw6EUhvUoHoFJ9",
  "key26": "2gRvzxLjayCuc81scVfP5nnjBrTFxFQmrhjFyzAtaXAhKhw3zNygNXvum7Z7Lz8NGuJAmoNxEuAw9fqYjXHay7iN",
  "key27": "5izG1jYGHk4zSUYnb9hwSHKmL8AMYbn7Kk3jbL9cVVUsUpacXPh4wxqLewRLxf2r9zfR22xFp7EfQMM7pemTNrFf",
  "key28": "4CCpJaTbf4VEkLuSA3bp89dfgMWNcX4dGnmvQP6QDsTDvVxkx7nJ7AGA3e8EuqVDLJbo1VDrw9vRDDdjbkkUPASz"
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
