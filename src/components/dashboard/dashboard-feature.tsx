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
    "rUsp5hT8z3vhCeHZcVAyjjMXtfg74spCkM1EzRPNMfo439bPxcimjfE1kP7WiunjCJ4rr4TQ9EjjzGQpDmdxYby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phmzM4oVMbaHDJNS8Sn9qAiR9obSdWuMcTVktN1wuySQNXtkjsmLE3ig6cQWgjFYFFWyMGoHXkb9EM3YTj1Aimq",
  "key1": "28kPW6eTZAh6RhR1AcLrYEnBJdnT8NckesjKDqQKyHBdZyEBZLfUjFiWsP3oVgUcsT2jP1PkhqgVFfUdtZayKFRi",
  "key2": "2qmrqqQ8BfpPMbi7MznKSJuVTq54Nep4SWZWGtUAxfk3xAvAxWtDHgAiwpcyqynUHXwUCLxDk1A3UwuFRdKgVrZq",
  "key3": "2vCpEeWmSfKiS1q6vhwc2nDLZcdKSHXQVM9hka9BSMcYkAPgxt1TjVMXzcjUwcq6tZ7dK33YfxQztZYeW2DC4nar",
  "key4": "62MZaLid4qBLbSPrjKVsXYcQEx9KXzKU7x68tZs7LhRQGWW7q1Crn63Kn8u7HF1cT8q7mJuLnL1Z88ik7vA9XJto",
  "key5": "5qJ4VErkVQqPbFV7qY5TwV44yzAUonVVCewFXPL2HaSNHpTRSWyM67kRr9Fie2UBaXsJb7wYPGwad8iCGK6TLuU8",
  "key6": "SPYVker1guLrVZnbsAsD5tJ8kR1JGCSZR3Xe94cg2oeYnGcugRRbSFhn1dmpLxY2yQKLRvbvZeoza1DA4oUMpKR",
  "key7": "WeMLvrYj6ESvcELttNZYfv13NYXuRaVAXFgELQAbQKmLYgWK61jqe4VeDhPFbQFPB4vVh683Jo5VL6NFwdsYFCJ",
  "key8": "66iRqaaHZPyi2Acg2aCXLyU8jxTjU16mUhQmXZKRhprCrkqAz9gDmstchs73qftJtgxVeE8YJRaohh4UYUaCpzEd",
  "key9": "fcyDsCYnKero4dEKcJGC9cVx1JDtJAGjsSL8DeDg15rBBG7wouKHmaJmnosnrXqquNuDjxF9cYdTXbG8ySfSTKq",
  "key10": "29uSEbPkjcLh5eJ3JBY1bKq14E5mzYSXmgMLzn6yiN9MYZm9tyVqyXCiJbW7ZYyru9tf5LctkwPAyNosz4K6BEDj",
  "key11": "eQ1xuaRRmXG7BTqpQV1yxj6VrVz4FGJhY9H2Nzjkp46AcVUFDUJx5bZKQyq2phiLD9wUkPdhoS87hjwR5nGJBgb",
  "key12": "5GFezuVnuUsPNWdyQszEF2ESD5ebwEcZCro4wwMDwhwFhRqGBn3WmKrNtxCLzkvgUnZV9kPxrzHohd2s2g86jXai",
  "key13": "3yMkFrqFSZXns3fA7ASmHZLNqCYmdWHe69EDn77FRRP4M9pro6tdEgVhYYHtowjoBoyZKnpFbamLN97x7juwPZF8",
  "key14": "48ZTe5vhbbUDkodnksBKH1Ec86A5rxGqTNdsbwsp58S95bawkLp3jsFTGGLv1zhvK8S7HEDgYnfrrjDHWHanx7hu",
  "key15": "2FEAArvnFMJdTpFHpXuByCdndVEtjyomcBK17qPWXgxPmw5uGddzc7eNieEbASyb4ka22rWCQVHtpuBubKkuQS9F",
  "key16": "2KFamsjSVP2YqHYqvVEfRBFcYsUHf9YeBzxCEC85bpn61zZKc8TXAwvGy8QsgXcuFCLe9gcnDNofBRyKDs8sb2iB",
  "key17": "2tTPvLZkXkwdziJiMMbbPz5B4yHmzWEkr7vv4LVVVnHjXDMANBEeWsSHTW1tpPsd4X1MmwsuFDyQRXBvrNzCqsKb",
  "key18": "3qDHVHpJsZCnwPUTS897pzKiEKNVEmENj3JYfzJEoTozMgixLCgEgoCxj5mcBLtYf9dsemi9nYXrw3AUGqfD5MNd",
  "key19": "2f936KLwnHF4pSCYrtUPZgQEB15bWCL68Fz41EJ2sHYLZHR2H8KCmtuWMfJ6ZeCFwrrBEm7GSTEuBaLtBz3vZUBD",
  "key20": "2d34w6cCsAttHp73oKaoaw2uj6fYVuVFQSLZZw3JM4ZGvjQKVV8yNEGe1TfUtXhBc4L1ztynEoWCHacc3Px9Pmnt",
  "key21": "4TsjRE8i1gSxmAHj52nWZ3vncEJ5X1A9h68APLYBwHNrJxqPtsXcD3zVCEUc9Vpi4AoQzTAisH77BwXpwXHptnQF",
  "key22": "9vTAD91ZY4tPobXDm8pbHetRWVhcacxAay48EwgRS4Y7a45qUJF5wiFvxEts7QXE4YumyZ9Vjb4vXWELCHwocE7",
  "key23": "3Z7cWFGiQ2rNeRXKZJFq6mt41AUkcgpLurwDP9GUYNVZ9Bj62PzgS2ZqZLjbfMsTEGwENmeVTxSEy8mvsF5X4pp6",
  "key24": "3Ai6GMrSUj7VapeKN6RgmR3YeLHKJDpXiHsgTAQoVUXQd9G4JWCpubk6sFyk6pbkDTcZj26fsxH6EUnCh2awJCkY",
  "key25": "4Ca89Z5fAtgaLD2WfkVxbyfngdVGxh8qA4FmTRnSsSn3jzhT1Ei3NtAg9EQzMiufcXwik78NdK1y6SXftYXR2ZnA",
  "key26": "3s3ftz1UdhJwW88HMnp9VF72RMq2jT5iePnWMKEXqbXv63Upv3tC1V8d5UCGBEHdTbnjAmkhdjZ8bD6dvewUfjA6",
  "key27": "2aZ1VzHbh4vXmTgxYrehu6X4fLpfGvNqEXdSZyiKNR6sGktCcMu266BTJe9zjPNnn7gP2BnVy4erDRNcAq28fFbE",
  "key28": "3M2VRVrBaLDu1JQ4VM6PsXoZSfHUfUbMusEGmLZ3nKQXZxHUfKQhgt3xVerRokxfKUguFURRBa9GCne6mc4DcNKC",
  "key29": "4pyR1yKkX4p62zmSs3D5cJgkc9yvYPzyuYivHonR3yd6iymwHj4gsVRvfJot2iYeE3A5Cuhshdwoyj9V1XQKksFT",
  "key30": "62xVbLueVWKwHhbjLjRZrCmehaCE5pKNcKT8D86RVmp6Cz7aNKkmC2kTyEyBHcPNnHkQChpVu8b6SJGz1pejjRdY",
  "key31": "46a1Vmq8mZxDrN2QfyiS5L7osPTSBS4mRryZdjaaHkd1DuRY3VPx9gGeB8JfjibQ8t5tZ3NksnGScWMjGRLV5Dot",
  "key32": "33SD3BME8GnJvWT4wHHr6JniSJAXa8YSuKWD2n1u5MyZsL7WqPH3sGa99v43SxGgZnF1YFgTqbtWbgp4f26vaW1w",
  "key33": "8RFQeBAbi967zUUeuGpE3KgCwNbocvZUMNRFx5JPqMHW3q6GJeKzgo7bfSVZqUp47PsdwqWK1fxxbztXLqaktp2"
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
