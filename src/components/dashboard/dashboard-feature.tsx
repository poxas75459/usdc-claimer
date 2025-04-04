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
    "7UjEYf5rBz6bnzc2V9mA5L4f3RFss44c4zWKFqyLbQ2CNWZyA4i2sjnbNuSWxPDy873TGG5aKQKKqu9UiPsRZP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWQd6V9Kq4F5cQGxDWCELr9UM2HF8GKk1u4d1aKvWgYJwHqvpD9YftvobiHM4oifwWh2U8szuuNXJhJjHy6aL2w",
  "key1": "3n7QhupeCsqEAcxGVN4RcwvDg9n8K7L9odxm1itcypKN1cvn8utLWMwKFmM389agrYraC793MtvxLgjcSV2JBUB",
  "key2": "dBkuBWWxxERKFs9zdWiZQhFVGcgC8kN9zRqiFj2hY8vUVnGqeiJzAFfZgYNwa42pJfwsFiprsUY4fbuJVodvwtN",
  "key3": "Uh5rNDqY7HjY8fqvPDB2VhSJH6fUJg2mJyKkx7iq4z4givNfVJGzKmEJAsxNLae9bBB2KJGptRMS7GAu2K53G6K",
  "key4": "4M7VgJrYJfUxVRELnr91daRgdPxMq9YaFzMNkT42KhCrJocvUFvBguf7XmrPLSdWZtNhZQVQ8hxxX29FMpk5yuPw",
  "key5": "3k3cB68bhRH69fFXMGp2E7WkNaABushUMzPSFj1srj1xurXBzzdsUo8RLL7vo9qzw2xovgqSwTdbS1iTX4eQYgsp",
  "key6": "2WJoNUVBLWFCBB1RcUtoS1jUU83CCGQVby2smg8cWf23iLmkYJqXcvuhP7Fr22WfzgtezXR9b7JjVAb46egFVURx",
  "key7": "yde9GuF8c979zfG2DMZvCw6eMsUqXg3PozvmfY5tQhFoA6m1EmKagBPsQFPM42GJ9HY7ZZ2GknDcZkNNsmiewpc",
  "key8": "5FfawAQFi9tR7BWuPDjwMRnUETSFc9PdMLKxLWCAyy6BYasaXjW64QSMih7EAaAHiRAaBF2qr27dNoN2yXa4p528",
  "key9": "2GswL5vsTkeAi3eBtLC8ey9pdVYvntDmQRUVAryXYzKE4kE5HoV3h1Lb2y68KRPUQP1E5ewg8hiumG43u4WXcq3h",
  "key10": "4DUPrYqowetDLdbMmYrUVTJ3DxhHM2iNWZ8zzU1g2jwN26U4hv13dWnqj2HSZ17SAS8JNWnf9q8FMGwhDRG21d73",
  "key11": "4J7Gh9cpBDbnDnuBVa5wUqFtzFaQ3XERZSSoHzK6oXxC2uUpTC9ChmHBDeQzmWK7PqbiRcx381WXFVbfkeg7MkEE",
  "key12": "4xawxkUAdp4P7vceRtEUmLGTxskcWZFnWQEiq7poWynpYFJnaqGSabo1XquEgTu9tm4Mi1HMFJuAfjU2P8abjZxr",
  "key13": "4hr2c9yKKu8b43J1jrzwRB9VaoEgzEFpwyNT345URjPY7bFr5w9krD3JAf8uDvz8SGi3VVZGUczwR5Eh6qJsjZ5s",
  "key14": "5eVd1HiV93Wcc8wK9ZEzZrBEiyMFhJTJuiPnaQgGX8kP1t8JgzPgL79x1BiSmKo5yf3w4d6yRzTyfsjCvFRCqFZe",
  "key15": "5aL4cm2XAipRWVsooGGegLene4zAK8qEGzt8YYkEjgXNzjU7ABJXN7SbZ4wu8A6tzoFBhMaA95U53SnoVsebFjBh",
  "key16": "2N8heNs3qjpBADDmUNPfYjt6F6dLpxh4sehEjDBUFKD78Y3jdW7kvfYfShUfarGhs5xhwz2Phpyz5vFuPrW8THXb",
  "key17": "5RwkmmjiD7zArKPxi7PkzXQJKFG7uZ5m9ooadNybXKW69HTHU9Uof2bTP8WQbf4ovhz3XejeFXHsAqsrPDDBHaop",
  "key18": "L36XMRNB4fwGWBCpKJX2QdhUmDYmrhjiCY3QWvSXLCykncY12Ms5Qxm4xLdMhT7na3adGLXjQKQYAjqMrjtF9nD",
  "key19": "4bRRwyyyagB8m9YcAYyzcqKCkQQdaRUoLxFT8vmDZvqg664kD8KJvrCDjWbcbiLQZhuyNyb1L9cJvhFVbFf4Ppvi",
  "key20": "2TTsMerue16ZxTZAtJrL23zXEMCVZRvGMPuhxMcLpwoypZghi621pvMQbo9ugfaUzkAZBzs8KaK69vQimN5MYGW8",
  "key21": "4pDi46gaoMChoxTdrgwQqgWjbRas41oqBh2qLz6HDKs2idp9FiQHLaqa2fpoj7guR4uTnXiusxzbiwBdbdo9QN2A",
  "key22": "2FZEmf3seRqMrRwDSFgpizH9kP1waCSQSPu8X9M7Sb21jZghvmS5tQZqpyAdkPqQXTrSqP7Y7n2YUHo12DnPCEqA",
  "key23": "2piYanUYkJXipGGbqLok7eDLtfkcGpwGrysfmsv1zvYN56oXafsu8FuserASmYbpp9Vx46jq47SRzrA9ntfyzVxJ",
  "key24": "5AKg12BQSouFVwseAXoh3yn9MvVfWAjGh1Fw6jiFL6uQzCfmP36FvEHZaaVymDXyoHPe1SQFmBbCD84d9xYFAQKa",
  "key25": "386RYDodtpnEBdJdERzQJpgAvHGYfTLAw59iAWSdJp15otuiHXkZ2hyDm7iF3WRR1yg1Dc8E5HX3T2r1JvfsEJBK",
  "key26": "4LMzCcW9S67iTJoBzBsnrLFVtFAEnUnbN5tJyNPcPcjMjSqBqv4Mz1oenDakVaExRr7mfWupuNLv5exrUE1G8r7L",
  "key27": "KafQo2AFS21dcyHDkYGE9vEAVvwNn2WWDytwL3UzuJW1XLpijUJFpQ8VKeinUt1x3bcVon2n2LXyEJhbbNeubWb",
  "key28": "TepWqNpn4deGZbofuBkE4VcpRNxN19fcB7mPwnCgAbQ7p4sTGA1UG2HSjWww2fVHFYBQgW9MtnNgaqMPX3RdHWh",
  "key29": "e55HGU44ZjG5AuyJpVKq7cqqzLuZS8CrmK7gGzrjvEN6RjjbHnHKBgyofcf5pwmUv5zGiWv837az8j9VE1sWLFW",
  "key30": "3CrWazXkftAMfNnwUm7RQYfWCbFgRwCZzyAVuE6cMd85eXdVXBBpfsH43xBVJi1QgXvDds6TUZWkj3pVt7NPURon",
  "key31": "33sYoBGkMXX7eNKrHJPoPLHMVu2Uu6xk6LL5wyoMcak4QCVw1EFrbyt598sKog2wX914FUPQaDnjdHo1edCjP2oT",
  "key32": "5xc9nvyVawHRDmeRoUqQAKux9QDiAJFQC8zkLrtwWaAi1pwbTzaLrb4Reyx55PEwfj1x8Hpx777tDdxLRiibgZE5",
  "key33": "gKQ6tFLtk5hdt4rjYGLsvHqFPxTPsyM3vVoHsdurcNGiEAs1BZ56BjiH7GumUoZQRDAEQfUE69tx1EawMauiXhQ"
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
