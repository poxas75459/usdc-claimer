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
    "33fUx1euWitVJGrd41ZxFGVuS7EJYYiwmNbDD1HqzprMdpWpjf6Ay28prBJZataxnM4k2PMJvCFP8uPYpW6FXc4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZzmCUJiL431EgdDvq3eNn5z6N9G73oSSLzYkvGgoTXZ4aoNQoqYWAEuY7HfEfrWjdjvFpu6EmK6JFrtpsSKqsDf",
  "key1": "3g9ZtDCweN2LiV4TLDsZKE35mHGjWrQu4Cc9wk1y3x3zarQR5cec1uUqoSiPQLXnVGSnHPB7n6VBtavbuLyngjHJ",
  "key2": "66n8YC9TDLZoXY8cBMEpguK9iyEMZLmAeuNPw8FKkZZgT55vpXiGrYaktQ4zwPKKpD6HZ48uD1xd6GhhiMnMGLpZ",
  "key3": "2apMyzC9Hm6QmZipEYqfCtP3RcpnpToGRoc2jJTGPHdBtHou8LaPbMihNHWbtMoUsHyqxFc52ypsxfCLvCnEirnC",
  "key4": "3BjvPzhu4PFvcckWYGzoZMvwtozWdUrUHo7NvWsaGhRE6mepP1k9HAxToxHqcoVnZFi33VGBwzZh1f41QnJBhsnK",
  "key5": "2fCzghP5BX6uXKUL6BGyEot86U6Xcxs18e1u3z5Mxf8xz3wHgn5GGkdMzQUzNMz298UapYkEYoXU4ezMppbR2aG9",
  "key6": "4XnoXxE4RTiaGwzomsCi5r7W4ZVVpzWjUdwzzhc9ansaosXsampALTDxw8bRS5VM6AUtYXrYURhMS4tNETgE6kgu",
  "key7": "5ipNoE21AsvPz4oEZ797eveLeEQ6aNMEHYkgqt41tEnfmg6BgDwyYKR6oQ7uKX7gSBtvnZaGGkXmhyrWRFQRqwgX",
  "key8": "5UEzP1bKK5fRtXjNLXq4G93pN5RZVDdWxAFomBFs44HWPu91dpf92egn4Ks5KPjPeNNNNLwibHYt8V6FVzVDiHjQ",
  "key9": "4UoDTNtN6tMkuS5FQgxGZcztFLvcFFKdqvQ5JWoTPBxFtDjzHL6qBX47JcAB15Lx915AoAM36MJ8aBJc3VS1Mx7d",
  "key10": "5An3PbyYr5pdB2fXnX9fJmNBwrXESt4zZPvRvaF7uSrrZXVkW1RSjdwrZUnwdCYEATRVATNHyHrrYCbihyjQZKuE",
  "key11": "449EqCidoxvoUyW3CeGVit83AGaBBcSa8E6esFb5DkguNANEFAfMbYx2UnHFSjJHtpmQAEmDUpbbgAJ17UdzQxLj",
  "key12": "5wtdxQMQ3xxfAFMhcSM8mNrK6REAiyx41kd3qDdbyL7RYfJSPhURAHmRsGz67qongEQX6w8ccAdqDEpkEoCPsBnm",
  "key13": "owo81PJe69HiQu11vSKC7CHCdCYsfkDzWYY5thkgBFg85GWth6NMFCGrkubUFun4LvcHP45DBdLSeCjMkiPR2Nj",
  "key14": "2EHzQAGhNAm9DjJBSB9mZTRWe44LxctyqVHgMF324nzRgTzuc3dUyoBro62qWK4BRsYGxMQbEcuYtGGJDD6WXtA4",
  "key15": "66PfCYLtX5CRGxYoRbadbWjVrY8S5NBqhFwuM9iAb9XKodo18f8NEv9Y8Hy1qMJsdnQR6w7mARuJcMCTZ17aXGY5",
  "key16": "5UdcYzScVrWZgVUiaxHwmzsSg42Hcs8QmVtRzehUVDbXimJcBFsD2CR4atoojadVoqNsHhEFrG5PuF43C3rGicoj",
  "key17": "5iPDUrxQ6VF8rvZexYFpb8nAjSE3fuVxrBM7tbErtw7k4ac7yC1ZcGBdGGtLRGFn9etespr9RKQmgi6iQNxpT3M2",
  "key18": "2iuMFSW4bzcT3XAucyEf1E4L7e8RdWfuF2k3AFZhTZABZVcxVbXN4BPoFTUn3yqCmDo3Yh8sXQ1hm5LD7oRVps8n",
  "key19": "wt5tfVjyZabr8V7bsNt5sVR9Ev6deVxEhD7XWjTV3BfFikjzVnfHCQ9DiqkNVGJrhmYBCLAmFuacoa7KkCdnfKd",
  "key20": "2krpK2JLSsqhg8fPtxc5JLhhHCGt2UFQAuaonaWvW7dLBmqWwXXpbs2WiXes2ktiEDXx44UoG19w9tUQvTxRXULd",
  "key21": "XQ5pZvpBipbvMDse55S5F3svxfv9Ae5o6tbTdfrN7eCMwUFgKwDsTUqh6gurdKQ5nAb5Dv416okVEHWuTaNeQbt",
  "key22": "2pHjgtiwzjckP4Yzx2LQpkLzvr21dQAnsMV6CNCkeSoaaKhW31y9BQp5iegzN5LMW6VuJqSzPKFu9o18NkX4268P",
  "key23": "51NUjATEc44F7zeioXGpdcoLjQQ579E1h2MZ85crETWbP5oQM1hz1B9qbeSoCJMSCs1kV1Py2CfnDda1VS4uW3Ey",
  "key24": "2Uaz18rTM8ivhL7V2kXi1aJr7i7k6PNHKWZsn5uB2JPzm4f5SB6WRUZB9owcfMhecRwQitbQNTN7R75JF1LeRHNA",
  "key25": "4sTXHbKLUAruhZXPmETTnwTxzYZQwsDcc1JroC51EmPBvqCMNhHzQigQCyRXqp6uEZwxzEkrtzp9K3bqwR5nyYFh",
  "key26": "4Ccn8Ky4ByWtU5bcwAreYBgT898JMNb9bMfKP75mxdPcvWAiuSTdhRyyNr3DPSwmNzUHCqovBjmNuLGweh9P4MKW"
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
