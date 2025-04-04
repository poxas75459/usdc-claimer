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
    "2xB9FiNp842yq2BgXDnSWniJg5z7PTtjqmp9ijrfqHMrHYuPzvzmodZvNrb9QjYQ1oLPWf4CCKQyPKLsosDFi4EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCAkE1ppTsTctQKJzVaKdR71uAzSCKDmWYU9PJaaAZ8xGj2Yrz9TJKdR4fYFR4Udb5bn5eoxaqnuQstdBQdo5JH",
  "key1": "2FRbW6tVC5J3CTYDcUTvNMnUJGdbKQmPAitBaq5TFBWR7mCRhsvTycD16vC9ewxcVCYcvXhwjo79wJqNpSKSVUnC",
  "key2": "2ZxH2nESZZ3YjvgWWxGXK6Q8ZNd2j4yDm9Z5fSf9zDnzsRM5jfAAAiXEUg7fHP1YpDiWKiBwRsRPVzC8LQmcgmJT",
  "key3": "5Wp1JSwX9Aukhwo6hxbXoT1pKF21KBFv2A1napaXhnG3RWTNuBRNuqApXuFZopdti1DJT6iXquDUxpmXzo3mdS5C",
  "key4": "2fqrScDFZUqbYmSS2ALgfogAq8RGEi4rq5JffJKxeaoG3JnkiZUoWnftHvzv9f7EwkUSw4fDJ9typzi9uSqKY7HE",
  "key5": "AMKgB8NQEf3sJbnbrrZECKK6ftDtSvSxXmttUo7wXQu64GrMkuYD9isG7Mtu8JBVzNL6UuHVTtoM5ZDPJ1g1yJk",
  "key6": "3JVmYvhDZB1Ki4rjzaQXcvT9s9Aqjt6hvA7JbxaiqJStLFJcefXGDa11kznycaf4uNPhoZGEBVvBy5eNLYZmW47Q",
  "key7": "DzxmxTRG9jMG5SpNnTYsmeaRchxYDFtfGQhN1DbanUNQ4hNrnUZoQnass1ezAaeNUQ8fJTVQgcxPZxFULcRXyyY",
  "key8": "5UQ63D41TGfmxRHSwGNQTeGRDvMsnW9yHd1tPwcRTQYAoFqEhoCiSDZRH3dXdDsfogRygnpHhwECoanpcY5pc83s",
  "key9": "281EFHG5s8mkn8ZE9YThyt33RaevcwbyDnj36E6724ndrFhm7xhwpuKj6D8akrow9Ja1Wt5W1H8KAexCmZ2oZh2A",
  "key10": "4FEY2uoeJkuGNaM1So2QJnWYwiabCHvsPu1jkmXBz5K7gtykgwStXovyniLESEt77tnnyPJWbzG3ynJQsXooSrik",
  "key11": "3QRyLnXQPdMkjaPhuHbN9H5PEko4A7dDEmiwbecKUesHj3JfZyqsY21ZwvY4GMSdkkrSjQ7SwDTruu85tp7rwSoB",
  "key12": "4V8bMMUY81yPaYSwWPRKbXQ6PZcojbXhkjYRCagTZu6NQurPH6Buga4PRWH22kRyYxGD2pk4kW8vrMo56GVHvPBW",
  "key13": "5JruMxHhTw8NTyJLzogSqEpibgJEiAqvxL5FmSQcWzkCRj7fcrscCr9PZNc8hpygS9GcdTJLT9Jdceb6Ys3n4o8J",
  "key14": "5m6W31FZCh4JG2BxUAYxrkU5fPDVMcQXVvL5BS3UZhGU68o8mtQfoqPCXGc9epB3gP5d2BBvdw7wtsPJBozqBhyM",
  "key15": "2VxeZXTSDKPe3i7H2wiqcrvjbyGpmHj1YDvgLkT3APMdvgtKGUCYZ6SbNFCb1vUR9PgXRBCgj7o3C7osWJvMzqwZ",
  "key16": "5rSsMQSz5zhaKA98wAsW9Li5rdy7n3xDBSsztDdRr87CH8RMUxvQQbG6VGHuixrDHCwnCbD2Crw5DTHhvbJsiWFf",
  "key17": "612y3jZn6Btudaxu232aiK8dtjgYoHPkBZX6qNLxyweVqgxcBj1PyndHrADuUDKBTShzohoED2rsEzDf5CgRRbie",
  "key18": "2HPcxoZLRvuFytmWBBE6u6iCFDaMdfkenWa1GWGif3rwJZoHX3sH8qzBboPuyhGuWumh3YfMopahtVS2Us8rhBf3",
  "key19": "2JMyyMzjoyG1dKjTLQAG6VgmWp65rjfUc5wbHhvqCRTaQ1KYXR3Lt1kPiGtSTWgneNj5gDx7Pcm8zHdj685ZzTmL",
  "key20": "61jB9yFRvfqAZ7oF6whh6n73L3LxAbUSxDG1ST9fhAfTP1BY1sgWvTeicemizP24c1Sf6NM1QNPkpq1T1Hb2sn1V",
  "key21": "4AJKDbbpdKi7B5eemAdjZbPWDb1FCbzNQkHCUz7mqbZh8pKKkxF2SU5aGPpuWDhvtHk1fiyYkS57edk9RgK1MWBC",
  "key22": "2hF8SYv9TrSfEkWfLnkWX1Cn4vrTTivngo7kzjecXAMZeeXR3gPBqpSgjEHAjLGQ6t2i1V6J8Yzzon6vkS9bEGNJ",
  "key23": "EVUPQG3emaaoMt38xXfcCbnvo1Co1pRebAQXrfEmgjnmvKdvgg7TCMwVf9vkRkWEsNLfc6y4EHs7BwWwtTQP5C1",
  "key24": "4ABLQfDj6jHD1YknZ7wvfSk79DMm9fqXCoBMXDMXATQZoRtnUtPJU1gKKN4zuwzvFEiZcQ8n3FzF7DZY2AEmRW4Y",
  "key25": "3A8R62VVSP7x9EWgjfnM2HthFy8WMp31MDvTGpu4dTWUqQGaYM5Wata7dtXZQBLyyps5BmBYPhQigwYDRSFeMssd",
  "key26": "3jo5ZxkuHHDewSWwsDiJAAgwwXxTw1ZwpXGVKFmaeEbovexX8uPZ3AEQ3xy1qTuya1f5yDczu3MySBo5SFfni3Jm"
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
