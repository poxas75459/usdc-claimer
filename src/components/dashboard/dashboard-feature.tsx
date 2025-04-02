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
    "5yxTmyRppEEzVz8Pu2iPKt1coK8nDbxk5erqHZEQMu9k2byf8CB9hAkP1Ex6rDoSBDyga8cBKgTLzgEEjiqHN82z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttq3zZGfot54eSF3UxCBAMc1SECGVhsM7cj4ptYnJqQEHCx9DFKupLUu6HdABhRWHFEHRY7kD5ZvpXMt29mLNVX",
  "key1": "4vGmAXdDu1XhvRQJg4bkYaQhVoLmx7KyJya3KwtS65G6qL3rMm74E86B8b7BqV4QxqefqfvX16BrL6CwVbdy2cVt",
  "key2": "5BvZPPyioHq8eQtKED1ZqZLVsodL2k2hhcbSkHhspo8SrqR5D1t6nFoFTq4npcuQom435fDzW7XA2DRJV5nf5b41",
  "key3": "59ixf4yAwgkkmpgHqzNDfW4vCYNf3w98monFsicMzsMqeCZRBx78zaMKgsXJvDHL7mcxGvHPzhnar6A4B8cWpD7X",
  "key4": "2pYgFE2au58WrGyYeon9625RChBLw2BxLhcAHnektay3CfAvwxx5GyfgZnFDPi3gVt4YUekFmPbh4P73sdSiwXkV",
  "key5": "2Ch4oPq2Ltenj2BEeacxZnBJkwnVj8WLuVYR2hqGgce8Hybz9cgaVGumUZx6ZQ2cwUS9BidGNLwzFpwbpXnVD3MK",
  "key6": "49c9amnEst26f6T6zM21bTRsyt5yqfYr2g9nmguLV7NV4CewQfg1sMTrKiAE12jnWq8Qd2ZFWyD5icsF7fLW2Ata",
  "key7": "2vYqCCiBBrVmT3GqQxmUhLokWNNPeJyH1ocqiAxbgiZ66hDaeo9e8UYzZAE3222ypDXDkzkVZ7P6PuqMwFJysPbE",
  "key8": "5MsSKce5mkty9h1f6HrJhBtoxDTqN6SauSB11giidRE3eVetoqyczj5BjezLVwNn2SNVK9XqhfXyLkNn7AjqiHTp",
  "key9": "hHbV8FbR5wdQabioEUF8XrZtGZcmifQF6VMQbi2s2sNRR83JHPYET2yiUhVHt2DTqbMsHHaqoNMGnuYMzWBMFKU",
  "key10": "5er8mzoYmi4mrLtawgWMZfqDpP7K3zXxm48fmTQzvLHJR1yLRDB3uz5BXhyuhTB4RxayjUKavby4DCjgcW5iV1cS",
  "key11": "4SEh5Gd1LQCw5VD9cCA1YKUP3Uo62mr71LVKVLcvqznJkQjWkuvZb7xjbs1RdqCmhWrgTb5qudTNR36yBFguuZmx",
  "key12": "4SL7ogmuWvjyMZ7XbVXViGSY6DJJBYZGfyQ2JbZdbCGZqUooLjC9d2uVW6BFLriVH9YmuznPUmeZugpmqxbc7vNi",
  "key13": "YfqxqamN44kWc1eSKL7mJVZzgNHrowfkgwwxespTcYjzdMGB498jUhddHJ5UhF481w8g2xeMbDTjfCzFc25vVU7",
  "key14": "2LRirgbwsBcwk7Kppcn1zfTecmzJk9h88mZtnc7QYYN1Seo3uCWPMokLborsqi5JuhWGDcRL4bZwexG7mvV1bZru",
  "key15": "5kxwCDj1GDpRP14RpLhX2ED596EB9BjqYnmN5aqjBL76YE4485qibRsp69PerJvhBJcTZVrZRwS6Yg81DQh7NjH1",
  "key16": "2uKToQNSJVtJFzykyzR1fZM1uogiwjXCL6fC7r4azV2Td3s4TBhq8Lo3fSyvzLcBfJk8vLGZCmzVKy24jJwSSLg1",
  "key17": "4fKjBdXtT1Hx1wjrrtE9v3aHn3xDPBdtkN5gqihuTvd89FFjXHR57RuUcVxcJyPRHMLZUV2VJkQhdbdu7NNXitPN",
  "key18": "4iWozd7egtHVJDzeJb1aosNNA5ivqxh752nEyEm4bfvWqn7EikgfWbDe6qZV8ctHXZQBBcuKfwCp65k8FBE3qQF7",
  "key19": "27vynR6g54pT6hPSDYXHmNp2maMPXnCrfkwcnehs8cyHjDvGb4bCHe8FmQJjxZHLwwf9T3vVe4a4hrmkDXmQavjx",
  "key20": "2FELkiKcgGCQmW9sCUev5vBjCntTNByvbJfj6wYpEKEXFdhJGof2CQNZ7xqxYr9v3tH8EFZejxkqDqvNrCPBWtKp",
  "key21": "2zgs8jYWD1vCbYpBGzCH1SoPyv6tdLUkwbowpdtynSJFFnAHoGvoWRhG3Duix7DMWybf8kz2ZgzrFN1LarHBc1yo",
  "key22": "5ZjcF3MtpE4oo4bRJ7VSdkPbHeeEQ1NEFt74gMd199iN1qcuPy2YQScW4SZnfVUg5e8M1T4PoSApMFcbDLZupUe7",
  "key23": "4fuNLPfeRTEZUahTAiLYvg2j53FBXRLPA5JBMyKKSSgGCRjAyEPhxs7AKABDaMESXbzamWJqbQT4LEjKPk4V9yKe",
  "key24": "3BG2r1pSfPk79PdHDYGoD7i4D8XqpG4G4De8WbJzVCBDVisY3Xii3dJzZpq9Jx6Xmhjj7Ucvucjoo9Dkx3weMqDb"
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
