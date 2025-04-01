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
    "2XNMyotPNWhYiLgsZYwdFfesLwHJajL9RyuEzLYWefB6accM8wS9q7vFxds2dJqs3Dwfu6ZnFhMkAT5uWGN4Vyx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LuBEbn1ieEmFWVKq3KfzBzfLne6VcAfddPsEVfY5DPyeLJJe36Lnp8BRfY9q6v4nxQWVSDiPHpPfZzTgjpT4wwC",
  "key1": "38xb78sSYm5TXn7q6D2y5RS3zWFJzHEyb1uYytA7zFK39hXzVozzDb4RjANKjMokHoYxLARfT6UAuQpcut62TvW9",
  "key2": "3qQgqsGcpyAZE2yZVFPetVw4jy74pEzepXBtwcaRCm7U6ixLsfTjbeXHdCzqYNvqfhdbWAabAjA1uxiaqF9bYuXz",
  "key3": "38DhTnCh6h6LnNLFawnnc17VdUWjJfKaMP1eErGoAQhnmn26fRLwZnU3sMqTuoYx1yQEPwzW3PP9z8a5ZgwXst3u",
  "key4": "33dBAAtZYgoVtsAkfhStXrxwtWDWLx9UKMC65hq9ZesAmAjYHFDmdMaff1kcERbMtNd1zRdsVSzjL7v28XZJQTWL",
  "key5": "3mCsyRjuTTbP56Z9v9s2ccNhGhsCqoWVh8MFJQacuFJPMo7Mk8LcUNRej1FbKyotY7VZvhBWiAXtrFT2e3hVQz6V",
  "key6": "5bUsaC3GtdEZcDS6HhTq4KLDzerViJszQZaP4aHCde6d1rEwG246Pr64n8MD53YtgJVr2ifywjhjmVsXz8jX6aFy",
  "key7": "4rQJsTR2WEKZ7c5jyFnEQ5pRz4v3Z5SeddReHGDhygwmnU9mzxHApZJVdkRZ5uwHpHAy7tvUv4cASYL2LTHUE4bv",
  "key8": "3UWbZbJdpsUbwe4MvRKSwmXFaQoX8pWiWDC4KszbEaK7LNMqwY76GvWcuJMw1fRn3nMr55FcmLvy1CTeQJWRhDBD",
  "key9": "4wXo4v4btnZG8rVXusbCjmnLGNKJkCZwSRykLB8wZLLmA6XjSvvaykQEitCymEc2B3EfvhUEYcqv8NiU85S9RpZb",
  "key10": "2FLUvzQjAzhdttABYfZTqMZYBbiPkf6QD2KnznTCyJQpLJCZbg5uFJMz2E6geSTbJFgba9DXq7ej1GmbHbeTKGv6",
  "key11": "5xY4Fqk9L75jneSjGWojNFSbBU8EUHzs54V2r9i2bpg3KBUQexE99RDfWb1SkCwTXLtiXXpkBbV4GkxCGuUBkvyz",
  "key12": "5J9kmpTqbNWzYKEsaW14Po8MbqQyCzPjfyW179hSXyYTt3h6q6g69tFBQ5U3q2NKQXhxNzeKQC3DHUTX4rPPUgsM",
  "key13": "4TqbU4UmxJ15X4dMKu7QTpLCSP1W78nN8VK2fCboCzbyHAodHtedeakEWfn7cZWJUk7wwi8hnjGm8mXJgxHUr1sX",
  "key14": "uDyxznMZrE5hDT9RSpyXv9AKRVTRD34Wj4iYyRRoZVQdkwxRBmndHLYUUQ9zKVN7MFcbzPY5aEnEXwmnzeZ3n8j",
  "key15": "3Dwvi89eZg1UTrxtEocdw5Ka1ZA1Dt4aBZK77oTz5QZsc68kth3Vb3c6KqHegR5pQtYv3QNHNWVRWsSbTcB6WVzQ",
  "key16": "5yG9soHduhUUCKMbtm8w87NYAbSEGdfcoP8TA248NCjjCCXHDW6KMNyboziLw2p2XeyHakSMuLZRxytx7tneWAny",
  "key17": "3daQT8EXPvwgq2EzLvQX6U8aj1gHMk3aEYkPAT8ALL286PtxHcSfvLNfsoiHvTeHkTzGnKSxsqJF5yTNyysmDLbG",
  "key18": "2DDFH8qfBzaq43DaiYFZLt7WNXQnoJvQJnQuDDMMJCUvhwom3te4TXEACdH2VQxSSGctPqj4ze7Dd6kLkWodZfhS",
  "key19": "65jrEBJYeDSSXNyJ3ennRc5pKiVxyS1W7Wx2nFpe62Ws7kcqZeNS8DBGCuPg4mdLC2BrtrsFDqUc5ZRdXsnzExTo",
  "key20": "2yqQW1jxeGAvk5geWG9T62cbmuDA8dHZc7F3eG8wZSCL4QwBvsxyeM4YcRfSkXRP1X27nMZye81CATAwtCcWFFfi",
  "key21": "3Jb3hyuitcM7QHSko5yXYNhbsmjwQJSx9B3vuqrdo4osdKbq37EiuH3zwTaf8pTXa1TJr5WpdY3QK8oMxMDms4Te",
  "key22": "2f7aRfZvGSDzxmAHoBpjrUZXojR8Fug2G5y6ZqCsLHn4KVThBwSo72kdsvAyAca3oFAU7Q4kn965X1q6tPZQKbaa",
  "key23": "ewKvqNxwJpRxHRWAuBVDN8tZkP2hxobDmJPdpUk35Zwo3UQXMuv1naFvtzFRmyAN118zduzFkWK7k9gQQCbffkn",
  "key24": "5a43F84HTPkJ1oMFKAK1sBs2AUXQYrJMp34KJpAAGLhV82CXNuSTTmjTzhnJ7aA8CWY2nVSLXZJuLTgsz3qojhDb",
  "key25": "5GCRBMfv2rC7B3nCJaKJBWn6MfQ3aXe38tpnFehKRxfz9G8mye7vFHAjzz5NUUXKZSMx3SS7e74UBLHLVvs2nF7E",
  "key26": "3EzpfD9TAQZ7phekYbTZoZ5gVaJAfwnf7pcrpB4SidT1H25aW8JT5sXtcgM5J869HPLwsko3D6RBocWmmk3JEQW4",
  "key27": "3bpEHpdnaZPzpTh8Lax8SNJZoQGPAHDgafMTqqyhRKV1RQKzMWZLEPdbcdsAJrgs9SxuxjmvTEuMLPsZaCqf8XTF",
  "key28": "3sCZtjWCnGhx4n4mwoJvbswjUtbDR9qhKZ1TXUhJiNLZzLrD3ssfAQXbha5TF6xerT3iPhgY8KgpTknPQLkNAdtj"
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
