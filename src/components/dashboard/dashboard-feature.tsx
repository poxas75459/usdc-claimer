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
    "2yphVa5k3zDYdQVGJvGQLXfyHczu58NorPNA2F3KtEUkT1A5T8W4KQtd1cApJM6JfHKYsTyCL5ujgh3jcMX4E6kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wt75zf4JWtD4XpDCguX1W9wb6jHgtiMtAzCUUW7NmgU2sPbW2M45w1oa4EBw9GMcqbRFa4NmbDUvMhFGNgus7CB",
  "key1": "36iKj7u4CT1RfHZVZRLTJHe3tjFwV8374TJSKMTi9p6sUhKvEjxe5HfuKfhouGdzzz15cxCEuYBj44Jo6avLQ8KZ",
  "key2": "3YiceCQH18WfGpP4bZuzz4QnoQBJ78jFcNtn83cR4mjB7bpZiNngVwTx1EhaLdryLtEquxgJuwWcpi97gmLvpxQo",
  "key3": "4UPnmdQUXex1F86ugJ2YbbDQKB8ha2bZHXGsPATVHc6jGQ8PuUbD2xAt1Bf8EPVib8HMX6RJF6Jn9ubJLmSnB9Ww",
  "key4": "3L5rvQAocxzgcVA8xpUCwYHtiEU2KMHj8KurEwxyKX1rjAXhtV2LpYRnwWBvLw8bDzbBggP6v5gVfv9WbrxtFUL3",
  "key5": "5nJb4pdv7s7NwuLU6KQQXoevmB6AnHFHBUMiSAiknVWiJvyaRbch43AH6hk1jvYPA8y7BFqtGRiZ3PeuFJPkzgSw",
  "key6": "3tCN8Bnnt5nHJMNfCfrq4vrBYHuSvsLHpAVSsiN7HJrXgYzwqf6AJ2uGjefKLyEe27KrPv9GXyiNYG99ydXfWnCG",
  "key7": "jSXRzGLWw424VQY5SRPaYGBtS4H9dTMdJmjjtVNstfmd1XnMpnoCozuVsiFAaJgCjyRVu7RaxMfwWQcjdftqaCU",
  "key8": "5VmmWruEunS1KMnFzkhQ6SDG2XhWSmx7AXev9LNawh9y9gXz9cEJQRa5C5zZbxCoKtHRvfWetpKoFMjB18csfLZS",
  "key9": "3vPZF3ppdAdJgCRokNcoVp4vpP2ph1pD9j3Tm5fE4RZeVt7rLn5zANHtx7mFCuRxW3ucetFQKZAuiRBWBDk2x6Jc",
  "key10": "4q2joeRbU5kjL2tDxVAsE1uxhE1D6JbENSFKEptLEMi31UdKmKirG1wmtyL6nP8Sn7hpJK3LRmPoXTGA5kFTY8yE",
  "key11": "5GhZZgdidGfahNj377UawN4f9JafoVZKMcctrTB5pNSzGvs3D7NP4BXbvr4FeQYt7rXcARnFDABDcUGAdAMGQPzD",
  "key12": "4UTrEN8PWv2xTCz62crShEeo39ZpGCAkYitHSw8evhK7fVh4obSkvSxwr95Dsumff7WAAo7i1qYb2V6w8GN4o9Rt",
  "key13": "286U98dXGvLDvi5d5PDPTuer2UkyPY5PwGSySQV5wZLftVeQaPxepkxZwcyDccRF6QTEVn2wKUQoo49huJcm1F4Z",
  "key14": "5EMfrxCkjE6nAgSKuW9Ja6VzcairYGA2bSyFfKvavW5msaoiGE7Y1mjb3SFXGf9Kv9eFXEzJrGUsJfxpRHuZPwy9",
  "key15": "4WmjFHz3cM6wfkcUq2ULPBvWCANwKh2L7yLDMqAzxxY4gfgyyFzw9Zo6yRdFn75FwziJbd7QeE28dSzQRj8emxr2",
  "key16": "wGG7ZpGSqztaGp5hD9XgMdTJUwk48zv16gZJeCwUhFY5gc4mHWtvQQFMbk2zkjqR7ULTz39jk4CXkySRcBLhUbJ",
  "key17": "3x8CFxNw1gkfoB87e9GgMPfQrA2m26CDdFBri2511sGi6YPyaKgqZ2dLnL3dMdtcmrz2rDUosRjByhwD75ceeBgd",
  "key18": "i1GE8Uon71gVAbYzot1PjHiPYu9cixdb9EwywkvbZpdZEKhyPRmHkAM9sGNwcFmeWXSGJxb9HJnC3VnqLdWpRLB",
  "key19": "3B5CEWcqZ1XkPnrd9puaQ9QpSTnLWkkgyHFEgftD25UpQZ9LJryB9FFDwnHxCsKVAEv1BoBcF6BPuZCTtRFhPNAP",
  "key20": "4V1aZm5K6JXLwJnQZbEJZTfPVhuSkgQgSsNz6q57UjNxCrnoyui74frNuKxd7j2ZWsXibJeJDE4Er6c6GbJ8Gmpk",
  "key21": "3eXAV3CdkHoEvmZHvMcFjE1siCypMYZhkw7qiHPnt36jFNvEV4SvcUk8BMTUo7eLqpk4Aa9wo9Gs7h1d7oGGZQST",
  "key22": "FQg8d4DNibyt3eVMb8KxAmXajPqieBk2kJWQMpEbDWb61gbVqMKJUuoSyX9Qpfe6Nz68nWRFqabdhSVNniGDdrg",
  "key23": "4bBUjUPo1nDU7opD8RS1d4XmXVc1vBtbhibUpYj3SAZWeTXgTG7tv8Yt3pSmRCjWyGvpaeeSuatPH268jxQNAKoF",
  "key24": "4jrkFXpax5DAVx82ntQPRKiC6RsfeySTodbZ5tqdC6XgMUjaVyRaHL3ApQzX11GB3vf9esfpS2RUrtQS8cmkxhTd",
  "key25": "2u3NwAsn4bFNS14ooQGpd4xqq2YjccFrGP8tiwQALWPYX3SWdB4BZb72fdWo78yJfc1DnSgCGoxjjmniYepcocG2",
  "key26": "3GE7GBB3bwdcKagzAnjr4pmt4sbrog43mi8aK6gathDkMoBCWiXzAsBpo6yxAicDTCH7rAE4s9kDWkdT8SG1avKm",
  "key27": "3Co7ekyPzRAkuPdKSo6Ztwo1Gxx3yNd7KzrsXBJMHhsnFRHJqdk7mNUm38dizULYMbJ4kRcozzeQAGjcHizFsw6v",
  "key28": "44wmJbF32woGPfDwLW3QBPkcMMdf8fVWSFJLnjL8kAbtinoRawoXeMouCtUmmGke8872kKXunne4nNiKR8QUdw4H",
  "key29": "2TvvFsJPxmJEp9u3Zw8MDhAuMsWUHHbTabqHgQB5sWq6fGEc4qWp3UPYhqTjthJAgoYspjAyjoWjPvWAUYVRN8Hw",
  "key30": "5DHyXke4GkhdqoVnFGkFVdor2gtFavKa1s5SEsUYARDU8DU9gGTUQix1kvnrQZPhmUYNQTeyi2vcp7JEpAEKrgLx",
  "key31": "26XbTn3yu92WSCFeaH6LXeoaE3sFAVYVukGPZN3RqMPVvQ3Ww1dYE8yDSrVEjC54LoN3k7yLFMNhYCtsQoGLWiMF"
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
