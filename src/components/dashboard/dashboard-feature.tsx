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
    "3Dszz8n4FTdKoesPpQJZenovzbFYQkJhUZ8vBUyra42eodhTJEvUyfBagh7P2NsPu7JJGU8ygbfRfBWhk7PRageY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MzeLE2rZrmR5oKEVkBwiwVJCx73ChKyUh7LeTPP6gBwkb2jvv9RJBi7TqKVtS3aqsHiH4awXc7THazazoDSaK",
  "key1": "3dLzkACPXEtwxz4EDF3x2jG6yqYv5yRHqHMU7MViFzQSeojhf2k4T8jAcfbtoWUf3pNU7wg2FL7D5MC2jdtgFh1L",
  "key2": "3jxaPB4x91h6quD97W4zSG6iJrpKdL6Eji6qgALTCAfSpCqpmh1zckmA8ZPLfEg5ioaCLHwhEaVoBzitdEZdZb6t",
  "key3": "4fjSxLrqjggs9Ziod8uZAJxPkzg2mnz2DussgZRqvJti4b87hcyh8QojkpRaTQpE8EW5JAy8iViPeNJuCwLNF5Ab",
  "key4": "8Xo2VM64JCgpR2ViiM6zMieRvu5bUZBxyaZEP33ZaX1y57nvMHaNs3Lq2CJeWjKwt7zFUzoCLLDf4MskY5Qv8CP",
  "key5": "41xMkbVCbHsNfxJat4uUR6ZRoFdWVKmNgSbDY4NzC5MBYRSpDRieyekYMQryfVrWqa1DVZn6LmQPkJXfcKnZhbAs",
  "key6": "5MZVejjfbPqw4p3EkGTWe7WWnt6QRHse5duMB5a91HtWGeLWdJRpknqfUm8pvQqPpy5bz9iLXfYfq82cpLvx9PEs",
  "key7": "5PKGmiKUAN9Sf3smbbgWdASQaW6iuamUsgAfSkdQbKbohCREUe5Hzq5JiSmYDhDrCUM5aS6KcB9d5z2yaqg2g1BU",
  "key8": "3V2jbisYMviHQkSR1Ao9gZhBYvxXGbv45M4L4WHNhvtZWZ8Ru6ULyL78Qi1H5uY91C63wJ5PMHq2xLcQVcTucqog",
  "key9": "5ykDzwnX55jwN9m7NXJoa7yMzmT72RjJrgw3dJgLnw3PK38Uq5jjQttokkCyHi6ePrMFLBq3Xso1oSKgNW3LXQmq",
  "key10": "3hPwyZp6DvELvaVdWqpXJrPf2sgn5mUkUs8KENg9C5iKhJdgNZENPsMC1DG2CPwjqagwQMgg4zezGb4GVHmoN14j",
  "key11": "5crBTdzi1dYBsfRVr85fCbxJXPEN6EBP1m8TwFVb7ececFnjERCMYbJweAbYejShHzcX4axYDHaKuqPm8jbuyb8K",
  "key12": "4epWReafLstdD71n5WpusgK13bY7KY81VZRBzGkhJng17hu28eVDotRVjrLQRNETn2kbwLFAJrXC87BSspVxcMAj",
  "key13": "3XqtSdcbbUKmvxw6x3Mzrs62zU9vxVikSstAanBfog6H9JbsPxowjkebWwNruGknpa7W4TLefoi8wxmamxF171SF",
  "key14": "znuFwvEnrkD5cTwYQvkkj6hz1GxBwLWvDFdThvJwJWFYaANank8ycqfagYnC43pB7hzfZeb6Wtzb5RUiVHfrGiU",
  "key15": "5g4umNXwGPN7ybUUwRbxNtRvYDAJfS56UrWePXyHkHEfnzbB9N6HaFE67Y1eREuXtXefCBD5SpZuXK8byy8yCBYz",
  "key16": "WShkEf1R9G2v8Nd4Lqd21s4B2PbkUaq7XAUsgDenbQEJwjxrwy4PMz5N7L4KrzgvjmTZwYDERsukV6sRakxx6s9",
  "key17": "2LjsQTYcWNruJnQZTpTMLn9Nxe58R5mVuAZQk9w3NvQn3vXatpsEYmgNSi1Q7wSeAH7X5dT28mPKzxQTyyBi5Vuc",
  "key18": "4jsWvGrxt1V499LbXNwecQntKMgj6tPwyFHebTg4S1hWLpoyVXJVENqwz8r5afmT7hd8EwCHZBfQUP4298PbPUsF",
  "key19": "Ur2ZgRyXruzzku6gShZ7uWX4YRxT4sQh9ckm6ZEtoVrV7MMixWQb3PW1aoARNgcnnXkYNdHZfhyTkPutvnX2WSt",
  "key20": "5uZZvKjDrf6nMc3NgQizG5gvKLQdxRq3S5ZHQnGgqp2USwnQuKt8bJ8LYHFfPK9YLC98YgcBhPimephaii196HLE",
  "key21": "4668EbTt7jLTQSnCFF1y9DAYbzfRU6RGSxM3sNvLxAAUjoDyHBNkpW64sGrknQdSajvb5hj57VBsNzx8vrZfLvMQ",
  "key22": "4x3r6eVJ48QjbaLRtQfJTxMLVaiENvfns2uRypnX7t55XrQoeLSrAgRijakmRrRnSfBHaX9g2zWtzKQTFbq8WiRB",
  "key23": "22Wz1LVdipgHm51qTL5E82ZAicHagoftrdWy3ik8JcydeCjqB6AsH4kwvTct6eoRyrvBb2pAdLcPpphvaAj9Wsyv",
  "key24": "484jB1dGWnh18mG3VPj6BJ3pUAs9v6TztacyqLCXJKsvxopK952pw6qP55byKurrD6oGbX8AYDdyKN4i5EY8seJL",
  "key25": "YPv6yV5vKf7sjf2Dy6WHnBoC2EspqtzWwAFduw4aLkKPSS63coFnDcDnny46zfNjDSy3Wv4WLoFTUNk5yTmFHx7",
  "key26": "2HHSb73b1qw9owHoGKWFdQu23THUccDF74zNykJ2VqzUfbidXZLQAJf1PQ9XG4ABLooecuq6pBa4ZwA7fWyyuU3J",
  "key27": "5evqiGunPZtn6yQScwS1XRK2frQxNCg3w8crSF2DNjreJq2orii19szkmKi66bfX15MjMEXbmiXdCgj4qTFVFNEq",
  "key28": "ZbuvTLKcGqBuxNKSWv6t3SRYiakAXSSc7B1EiPCav6rM8pDqFUt4CXU4eHykc3jHQ2xzbBCu9gaes6uAAMJyQHx",
  "key29": "xC3KvWtK2bZvDhHBEVFQ2Af97ttkwhRTp3PB9nMusfAkhjUcThr29kjSq2HfyLTyMfAFsE8TAx5iiVgee8tzcix",
  "key30": "66245gJZsoVqLJj6isqGt4ddmqXCeN6zqn13WkZMJrP7VMVAWSgZ3cfw9TzpWBCj1jgKkPTuAY4EfuFddgCR8Adh",
  "key31": "3veXUPNsQkeBvCBi1SD7D4CJbYyH4EKC4RUbjPtRGSA9VLFLR3aAkGD8Q5bt26m4Ec359cMomVXusGcsocLtwdbN",
  "key32": "4a6EcMjC8u343VcTFCaTNweQv1TucJWtrEPdvfviaZdoiyP1XJiuMmB8yciz1ZMXMRFy9ugMRui93fj1PgJmsBwk",
  "key33": "4NW4YVnh5du88EBwLYv8YrUBa9w6kHQugemqe3e3ZAQjHQGMjCAuNxVyEs6NYYoygzzrBPEggHtBLKghdzVVJLBU",
  "key34": "3Wp51PALXNm4CmKSWzCArzUR8Cd5imVNgferNjMrSKwwT6zRWRGvNPpeCTzMN47b6BcDq9EPXBkZRV22LKZ6LnML",
  "key35": "5h5vAMYdaNPEPtw7ip5GcET65Jta6Vz146RyX3tihU7dNURvQdQET6zGKBSGekuRgZ6sDD8ZkVCoRZ4fzKJAxpma",
  "key36": "61uhrT7v1hfBoQtrJYt6FGsfLUHRESVQdDEDqr2kPqqKhAaccWVuiW8qvhcAmXuBPdGafyUHpexDJweaNQc9199M"
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
