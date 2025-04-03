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
    "5LoNJp53LQXWAcBx8gpSLkS13KgHREhqNXhrG13chiyD4b1uXNk2zhZTsyUbdJVuUzQo6KAX1nXMsRHYf8bDqRL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jt7uptFjStoQ4NQS5Rr12qB81tM5ZhvrLpRF2nhpHNumS6RscSGRRvYytdLDwhc9yY3m6fqFn9VKNkLHkDp1FSW",
  "key1": "ygjhFdC3Ez1NC65RfqMDRe176S9GJXwyhr7aF9Tivyb1hMFAoaakFe9bhNkSqwKBMmn1Pc4r4WE3rf8khFXpfng",
  "key2": "3yWJTzfgPQxE59V7RXXXxiZkdZHEGpSqJLzZYMwuFtwhuzgthFDDczwQDXV4VU3gmBPPAnXJqwSghwNCkp4spzkE",
  "key3": "5gQ8XW7M9wZ9xCr3RoYbKrVfNeLkfK7u47syFtzCfN4gLNqVLT9daNQhTV2CeoQWDAtxsUybiBcVYZUxGpuGkiPE",
  "key4": "qdXkWpjxo6WBYzyE9ELpPeoH9XzwL9YSvFd1iw7o4fhEoYruvHnJScfuyHjHFbFe5x2sNJQzk7LLWLJjEHTpfdR",
  "key5": "39zdRDViVaxYksRjYiyfip9bG11VvE5xN2A9Qa8bFCvNYpiUupWXGE3vbAeP2Ro9XgkHjqgGFMvkgvU6xLxHFtBd",
  "key6": "2X2crH3qsnVxtE86twAdHhCansv7bk4owiHQofSmj7oombKf2jQW2N8hmqDfGrL9D2wcQDUwdHmFRGRYw1pPfTb2",
  "key7": "4FPgG6DwPCL7N4iHetpNrr9NJ8mQvsYXY8Zk8FPv27arHauYhqtW5LwF5PtVKaefwa7iegn32LqrF5ntnBqBkMuw",
  "key8": "2U7Jr8fc5TqPFKHJR7fCUXrHyAtjq5A5TGXhQwi9Nq6tA5JD4wYNXnNu721QbqNYu387gx5z5Waw12us6goGW4TJ",
  "key9": "35qRr3jSAoAAQzqRo53jyPJYc3r6A9RcsHxWogHFZkFatQAWTg1soQPcL3E9EkY7vmVhbNtXbuCfMDfYk7Ej1S2k",
  "key10": "2nNDE6YGmcXxLK2q1b5C6LMWvsncW5aegBAny2UNT3pYDFKEZHmr8oqztnWkcxFf5n9Wm4h1jkyEdeWaxHCFQuFj",
  "key11": "4PKu5DqviWf4j2cMNs5Jij6vbtXbEtVayJ17Nuo6Q5B4mQEz2nh2b1XoyLoU67kU8ZdW5PNRjJiGA3zYPHeRkbGd",
  "key12": "3DumWMsQcoCpNuZdGd1gMkMUWfAdubuAz5ANFqh1s6Gq9MXgXn6sA6WUQyjBkWuFDKEoYZwCRg1GBcb77YwW1tkc",
  "key13": "3652WXtUAhe9EQbJwgQpaFGYdMfjCEJKwV1rSKeRA44mTwHa8c4pEqg5zMHrPZ4EhMn6pB3ivyyA5fHHbiVkMWQs",
  "key14": "5njKjqQkdmamhpWPruGDcstJkUSzGqL1z2sqBijgjcbnecDWovwb8VEtsHesjhMhLCjzrd2URVE3d1ZrDHUYjw5H",
  "key15": "3Ce6GXU2GHGLp6W1VYY6Pvjqgrcy7nszsMVuPWoQquHNeLG1U99Y5dt42XBW3HdGr2isFnXvUPoZM7GRp3fX4HF1",
  "key16": "2bogj8d4xFzwqpEGouUqEcz6XZEFLCsabKDA7EtDvjBXF3v8QPczWyCz9ZPhi5ATJzPJAEN3kBTzhNr969AfmHgz",
  "key17": "Cz2BGfkXwzjrfth7UQnv5vNreRgrxrmXckXfLu2mMEF1GSPx98zJkk8doyjqHRqF8pA8yL5nNwvYb8JERxSbuE1",
  "key18": "3ZPu4VFy3LNm7tS3e5bU8y2dR1vN6tFg3cFxAm5nwQPbXLSaefCEvrPjke2tNhdd6Yu9myaecde417WcmLwuegnm",
  "key19": "4LAfjqNSAnHMxH2npQR6tjoyHzqMYjmXLdrfmjpVVJVLHQfv7Na8z2NnZea25YPGTxjAKbYEAqKxZ3wSLgKDxkpe",
  "key20": "kzv2sHY5AzuZ42sTFtkbD2GNjGEiJ2HNcKWSzuCECi84n6xGQSgcqTnwLrRFf4XrDeCGmB1FptoJBbrWDxPBSNT",
  "key21": "434iNDZCFjd5svUDn4t9WutPM4fTnHnn7cybr7zWkX1FQHBF9VYDQtTzcQPbt1BfPJNguw8W7v3xnxmWavuEEs95",
  "key22": "5D3rKSWdBZTAHudDGxmVFMfHMrXuyjCWLz7TqG32mjswAkvT9wJdV7VborGBMzvnSpsf6q9waVLLYs1y5Xc6MNWT",
  "key23": "2NwKcRkLgoDeUQzTT3KxSHh7VWVcgN19q3vJdi6jYHGnaK3CHS8XANw8aQ5uT4EuLCjwL2thf8tT1K7KGb6iFuqD",
  "key24": "474c5ZCVvFkkGdvDTZoX8omoXWZDvzzedEVVhikNhmsBXfPw2xA7igPcfe4W5gpCMYwubzYPJXRaEyTRELGutBJZ",
  "key25": "2mN5LuxcdKm1oqypVgHcj1kN3bTytRy7mwAw6rkSPEfPU9jtqrMWnYL1jeSS7KXA5Uvp5SivEsKV2Ps8GQ6wh6J1"
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
