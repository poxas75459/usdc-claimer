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
    "RqUZHfFMb3QvYbbi5EcF2Vr6eqgptjbvWzvgH5QEhmik2fw2r1jjTH8moi5ZQjtbjauE9W4ifERD4exQRvefY2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NybQYo1c8og4eGX8TEAan2FxUhikNvarmMBdj42utRGPzsZ2U3ZeCoreJtDYuwmGPezV4YL79CgGcaVbwyLSQUp",
  "key1": "2938cggZZcqNpVnojqzJhKkhsw7EaqMyPj16vTMZq9f35UQimVkEQ34UPet9dyMrLjNrbhTc4DifA1x3okevCX6Z",
  "key2": "64eYrxK98ZWcQRRntVb2G756XMk6T1xKQpW7jWF8tF1TnCcuE6a3bpJVbhc2xwZiBavvqFQYmZtEZKdLLURqoc2z",
  "key3": "4yqEvFKQY8cnbVKGr3pXWyh3r25oZWKLsd9X6F6p5M8Qk4bvMyNEdJswmbfuyJLTQgiYhyU2FFrLS2s1kMcku7xK",
  "key4": "7UYXoYtAj9cV3tGtkgrLigTR5ZFyrACAdKQYzoZ89Ka8HdoN7x7HfePx97ApJzq5iJ9dqWRBgJ7W9LwBcm1Dohu",
  "key5": "3CJ6ADBofjfAhLYgRwy5BYyhwRf2GvUy7XHHcY5dDmvUamJLzWiCb5zT3YSB8B1tp6jDKWSHrK2okD6nWmkPu9gA",
  "key6": "2GXBdG4VnL3Cqan6GgxAf5ui9GVWF3DNWNYfVdfqFLWGC7CDRCpY5YAifBwKdhffomCUVj7knWqQgLmE7QD3LViM",
  "key7": "5oUWvzHpAD1XFko5izFnkKKeRrSHgfEfVcrkNYHxq56ioAHLAajwvSRbnRfRRbd4SeEdx2oMzv5UuJchxcvj8MHK",
  "key8": "5YnCvRTxViasid5X7jz98kaupU8bv6UJZq6Gdf25fapsCSpxmrSPzzyNgwz5UgcH1YyLT12TknimKGkF4ibGy8Pw",
  "key9": "3YCmjnsmRNqyNSassr48eakkrr3FxKvyokui5ScTBiq62f49M4ihXK3BByUWtrmkoj5Pizcvro68487irxsJvvtR",
  "key10": "R3TL55bafNcBRb5nenD9KD6Z3ZJqHyLvPRoco4J4Nzs2USykBBwHDV6h9saqBCGabXHDgg1qXxAdJYxdMnTfPeV",
  "key11": "4Su3ZGoHYA7V6KhMenvNCmyx6QZKsGnQwfFuGhfuEgDScBtAgWdLXHXg7yLphgLcnJvC8ibTjxgJJWKMx6JSrtLV",
  "key12": "5P7njRqnYH1eBuas1qAobXE1yUp4GX3CWqSZSW2kD33Cj2YT8Q4tGqb5qkjJBjamd3V7YAcW78jcTr3syxHqi2TP",
  "key13": "3nSBS6Tr3Yau58mR3Csp14Yv6QE9q2pEfYFMwWUsZDax79A6L97q42yrrMs2FbZVv7tgfJoKvYhDMy4xs5jJg9ox",
  "key14": "KHJVGS64ahRYB3RS3W8Lt8DfnpSpSrvcEpkYNUhXa9XfpVX2YtcbcW2YSmx85hPoAjbt7ByGVCKMbJYaJCPa3Ty",
  "key15": "wwzmtNsVVPnfUKoY7hSoWmN1CybWXnh5K2rPDvWjQSNPyWRvXhQSPggAixPmUCsVN4MTJ4aScbQY3ggD8K94KmY",
  "key16": "5akR1X2vbvWheW9NVETTsdwu4zvpr6AYsB8znsf3aKEjnETx5SMgQ45ynEsn2eiyYUFYVQ62GHALAF8i8GYHau2r",
  "key17": "5makgx3q5pCeza8vY4ptDzsdrza6vsJQ2DWw24NTNjTauERsGixq58NWuZyFpbckiu6eBgH7To2koJv7DxoY3vni",
  "key18": "23D3qtphyVBvibncSzE1WJfKgyJ43nwtTmgHrRurZXiGAp9XJQmFYRSrLVMiAPBzkVa3abnTF4aGTVKj8K1ruhPB",
  "key19": "4Qedu9dCjBzKUbxHHo8mnkFJKZpKFtRPhrSAGez6MJLqfZsU5KyX5WKAWhvyotEKFHdRKa7ZmP5Mui1mTkobytaS",
  "key20": "5uCjjzb2pJigKydehDKbvJDT73UjyFuxCReRJ9Hu8kmdQTybBLpKb4NVo1ANkp1Mpk5oZHYyvaaCRXrLWRyZ9ssn",
  "key21": "2wRWgFzDifLQa2cWHDpTKf8Sgc3R6nEvp8tWpkGXz51EFgznKAeKiWbwX1JQZTT9mtwLyo2BWzsLZzWDhUB9i4M",
  "key22": "5gSe6GDLRe6mVKdNVNBsizSg6Tf2XrRE6pZfLZVpgRGW9QjXouKX5cyRVFkMvxVwsMRs8oKxnG1CwVVaNQTP4oAv",
  "key23": "2HndaPA7hGAaMfadNWbnyMQ6Vy78EEiPUoJkdmbeo7dfjayx9xaftgZuhYUbscFa3pRAKu1umX5o2FrX4CnxAV9m",
  "key24": "4oMqSJ1EXAYbESrX78tBUegBmrsCpsHwUWJS9LDmo2We29BvZtV6tpTLnCqgTnhzt1cEsMhFNYSgyaTXA55oKqug",
  "key25": "5rESpxf4voEzk2otLteWjyp5RwkutXFs2vhLqhjnpfjzcDDXxwqUA974CSdsZfkwdfeGar5YWzRtuKcY5zAV9ZFy",
  "key26": "ZpELbiMzwf9V27B8MYPhNBXD5BVJUDAtkeDNKN6HjPENVc3BPzxDBC4zTq2YBMziqdpxbwsp7s69PCoMDSQ1qRq",
  "key27": "592Ghuij66MCA3wPp3GyZYVPfkVu6EHc3gRgF3puq9rjA1S7o9v4JFFidrfsaTZB2wHW1zge6mfc76746yX7GG5q",
  "key28": "2DVKmnJTDdZ5rtBUq4TzWroqyReeV36Kj1aVzKaHhrdNETnDiGNVvhbKDCfwDFXUruiAy3qWRm5kiWPmCoZYQJx1",
  "key29": "3aGi7u84132VosbVF6NWKLzvWYvm1zUadL6UmmXtW4UPJf62tfWQx6tZw48Awmq9AY3eQjW31rtkUsxa4J1j3wGn",
  "key30": "2YBbrxiGW3zQHZo3M6CX5EHdYUNWqohGrZT3B7CSxwXYKXNeS7MCmYR1EwDkgGEQn8EWRDGwbTYxZPn4yfCu6cVe",
  "key31": "4uhaDz8CozBQefcTQdeL4HCPcfHv9uRjgmjwdiwAou9XXjTmCPHmB5Ru1eCsygrNVaF5JZ2ZveyY9om7N7dezHuu",
  "key32": "CMj9kcrpqyAzoWTjbzwrm8NWMEP1HRDpDNZsHbXES5jZq22SLLXiShnxTqR3mnqF2Ue8gAwzdhNynpNZRqZ5WH8",
  "key33": "5dwHwfSLmDjrssEJFEEkn1GoWmWo3eNufECJJWEs5ZB5WXUhBkSKYqm7XirCDYT9XguffdAXTNCWKt7FZBuaHLdX",
  "key34": "2ArMYaRipTg8ouWtEA8fFNHLEMM9iiYhW8ABoxtHFNhyy98G4pC9t2acLJ9R95k6gNR2QMw42oyidk9fd7uYuLzZ",
  "key35": "5kEE1MP1GivoBEhiu84Zoo2JGevwMJN2fRQZgD32orD7jkhRCkbqYq6uwvMJUP6aPpvruyQW3DXskRnLLTCZpWxK",
  "key36": "5C9jNRNuFo2vj7BeA2BfqxYCr1PZYcg3ALH2jY9aByxJkwmcqWyqbEj5ppV8wjs8sygTwL2xu7VUkufKi4HDwxUb"
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
