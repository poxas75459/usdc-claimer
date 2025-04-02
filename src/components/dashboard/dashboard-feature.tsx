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
    "225q8VTkkuDQnUD8uzVqHZgW3rQSg4ZA2i9fWCqzb6UKFjEXGzgmtkXtZXbnYZDoW6gbmy8KkkkJTHZP9t8MUFjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QWqxwwypjY9QyZhoCv8rXQYcp8UEBuZH1KLiL53spKQ5He7XtJs4JNoQ2TsTLFN9qsrB4RU6qtJCDUGQqk1RHJ",
  "key1": "3NWGF1WgUbtqp4jJY6Vq8R2FPuWcPRxkrcyy9QhGgpCyxfTmHuyTnzwqEXgaJapmPFKVX1kzpj7y3XG46UhsnZb9",
  "key2": "gxWtcZghvM9GUGc6zVs91QQ3gvyXW1oHtANkAZtcx85GfwymJP53ix5oo55NtB7jg6DyVyNibPkPyQV1aMCuSKf",
  "key3": "3mY9kt8opJ89J6g3jzyNMgbjnsZkxo2u1GZJHCunwXgeKXhBrN2DFDEXcUNf1vG8sDisrWviWH9YGnVSytLSZfji",
  "key4": "45j9UXeKz6PBRW9RWSvsQE6pvYzgPNGtLUsMGsDDUV2J9A94uJUzQ4Z3XMdCrxgYveKXh2k8H4ktkWAKMBCJN55a",
  "key5": "pDKbwrdmL9iGHJi9GgWSGDZhbwVgxBQnQPKjpX3VdwMKU4WUSgHNviu1t1tevJMET2eVHPuZFRqg1Yv3bSZVvqa",
  "key6": "26T5xwgLy5Ua1BTVERy88gqzMK83dP1rcFqqinnjPdgiwzJWoYdC6JBxJeKXmFmwU4AaVQviqc3ZzgybAe7evV8n",
  "key7": "2GetCxbsoUociLeNgdoYPNAzPpR66tJ9vWXBtDbfFnHAVjjxpWMav54yginwXLULeR3g82z6bpJVobFeBbAqZKCt",
  "key8": "Vw87peJvFjSyvS9oUGmX9W76Y7tEq17N6ebKrm2GC2AFcG9eq9AHW3wZKwneXkDqiNXKsgGyNj1zV5Zmpnm3Gic",
  "key9": "3TAX3s16m48UYHmqo8YXq2BMpj2vvQDJjQH3QWQRAmxGNeEJR6Qzwuq88AakzJfWnbpDJxmcJiK9PzW9JbbLnnS2",
  "key10": "346nSqgp1XmrKqjdELCgV8o5szXFPjkrhxio5d9MoqpZMvZdFn7S29rVZGrdTz5zhygrqPbBj4KBZvBbmbKsJQBG",
  "key11": "3AoXdngXXpcnGqQ2cy563nBmVYAzRxXzBDHXAa1JzjweHX6V66MLdbHSf9mGm2NMUpKUd7wLg7kVUhtwEpun3ckZ",
  "key12": "2YdwiDSoZYjTbMt68xiVD8Jzbs4XMpK8p3dv3PMYrXKJFULnCXgWh6YRuQQniEsfUuevxMdaoN1nDJjzN3duT9sF",
  "key13": "Tgw3J6HRLvRovbSZv6EUkREPJUmU324zYMWrWBHmjk6JnxypJKQCEeRxYGHo5B1B4u2kfdsc4s3AxxjCBvsuAPh",
  "key14": "afp7Ri8ZoB3UBK4QAKUDJGMdBWjcF1E8KcmYU8BJZUNUw5QTU7E5JMmhhT3yrnGULQJs42awFAWisDRXnyMb694",
  "key15": "3nLaAMzh9JoYhaqWfL6LDMHZo1V79mRd5JkUpaf7zaFaJQuDQRm2KaE6NvnAU6zq3xdJWKms4upHMJYT4RraZk2a",
  "key16": "4SaNXkzUKvjEGdtfFz7ivA5AYkKbcsQyLRpMU6eJYMqaJ6M1gtDE2Ld6eBSrqcnVeiiQapchZsHpRWhn1ECZrwGh",
  "key17": "2dmgn2hjUnuxDcBYenDYJtnc3C8SuKWc35XEJqQQtqYafKNXgd9ntpnCUdisNCQXDrYgvqKfo43QHbUCvpS3ctey",
  "key18": "5sFJbr7wGjzzyr9jmyGSSLXR95FnoAqUtR9iKm5y5PpDSvxSQCBi8uc8QDPh2KHTtHiK4EhReVKt1comQaSDRLoS",
  "key19": "5i7DFPpQmfrBW26SsE6LPHoVLYiGNKS1FosZg3upW9zxyRWkCEW1z1TrQVRHQGjqA8CykT92UKcHEa1YxPuwWu2w",
  "key20": "349gAyUGCKYeTg9C4GbZwPpQ1bbtzgxaX1mNg1R8aaCztnmnaUzxHNcuSWYNQDg5GF94vYw7jttXyKJi4Pjrhs1w",
  "key21": "3JbdGV3HE2hCn9dd7j7ZoPhZwScRvoWpx53xjJksfa9iyRiWb5fUZyM6QR45DUqqkecncF7AhuVEqY76CGr9KNy7",
  "key22": "594UoKuuw88WtQUGrFS8Sz2daRyTxkrdbvrSjthSUK1ts7FTaGK5AXpG5YkLqNrEhPgVZxmCzRhUysZCkYVZy1Uc",
  "key23": "52tHycbrkdErYj21ge1SzNRiryY9v66szy9U39hp8TuMgZoADEu3eRxt1BT3vQ8gSyujGHVAxGgZDLwTBGyt7grc",
  "key24": "3QHdUHJTk8qcUBsMh9ABCM7DTjq2L8mzzBRpbjJwQkirT25btj3RyE4msTHxf7efpPkYTHA62MeV1GGri4Jvfv53",
  "key25": "4cGyzqWYmk2nvSk2Ltcm1cZ8QZGXESBQJTyf8MvNQXs7a5PW8bjNit5zxcDfgPpM7oUN8zS5pJYFDEt6N5wdGJVh",
  "key26": "64NnikXgsbgxAoW4kiTXPkBdyLvoCp6KdCFcx2hQx2VVazyc4xqCRqHiQ2iHcaHXbsvVWXTURnzdyWp5darAu2W2",
  "key27": "4xVGEPw7bUFsE3CRf2RAArNHVGt9PfdKYL6qAp3axnfSbTrttmn5kdp51uNjD7vMXQEjbSNbSZJC79AMkz3WgXMN",
  "key28": "4fgytJ5N575avHXYD4vA448qh8qiWjAgQDS9C2rVLy17EszwYxMUfPScMxQxqDoqC3bYEiXTv8pcTnN2hN83p438",
  "key29": "3Zmm9Wekqq3QovKdfbB1yGGtQtfETjH8wMPi4MTy5vTpSKUFAq1kQ1bpv8gUJ3erhEbGrK2uqU88aWrUfzmGtUdJ"
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
