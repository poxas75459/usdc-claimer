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
    "RRqqAppxJMAgD1G3jck8Rvn2LzBJ8GLSagmEK6FutW7DA7r1BqSKFTY2TqKXNSTfHv2vkuEiu4s8AehkcMyXDcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T1kj89ezSghz8CodZBQGb6NoSJUtZ9edvRxsjChRHaoNTdkKaZReTM8DptZWRzaK8hBJHftUD76bP5s7MiDL5Fs",
  "key1": "4B85WeAT9GrffyiBA3ngb55EhvuhXPd5GwXH7EejKH7fVzd8g5FZVSYYhpxZkAgSftCvCEGkMtdZVs6o82cDvdRh",
  "key2": "4QhidEeCPo2FQyX6CeWwkgbS1nEUM5rYy8Uwvy1XpTeXGhHeRDfcJsvHRDq8pAkpLwzV3bCJidrAzHjMv2xEqT2K",
  "key3": "2dstnsE6reRrUdBjQBB42Jxo2q1mYnosNVAc6ChdNgzzqZQXnRgpoP14yV8sSkePNS2Jq677Eu1miqafMXR9u73y",
  "key4": "5geFz6HTNfY3ChWdZtVmuQpkXSmSTfdR8Eyh3KWiZpeKtUE37tJXw2fvAAZX1LUZCTy95ZZGg6wo7jaKGw7QBnh3",
  "key5": "2FqivSomPaw9zmwCcAcxmq67Koq7tkwEo5B8kx9xuHqHZzk1cnwpV13pVtqRVFqy556pLPqWCu4N9DjY8QEd5k6n",
  "key6": "37PhKTrST18JjHpUHEq4rtMg4U9YY4XkbwehHCVFV1rPpEuwJ1Z2o3hLiMZ6AYhvrwubUsjdnTbY4xaMVL8VKQoW",
  "key7": "5tgfcbVZK5fXmzny7GcgjjiaFCdnMPMYTQUAgnnALH1Eib4zJ3okLvTauKFmA61WxuW7T5pHSNiSC9Nw5Xx6jhDS",
  "key8": "3vUYB7Ch2LxYMnyhLf1d98ZGkPqCfmncBDFRkst5TUxq4KjKxWemYKUwndRt1dmEF1i8SmGN1kpsVTAqo5rJLpbK",
  "key9": "5NDSTgJTTymjWtTVD8vS7Y5kgvbkrm8oq7NL9KNgGz5zKFRgAttNz1DLRFzQwuQiYUoicnV7L1fd27gqnzNKowy7",
  "key10": "2WbMrGTw5J8cjCGFYyQLjKiMCwfZuUaC3F3JFYqnPD6QXsJF83LRxCFjy1v46kZgHfyCTFXa3BwcLrCqcqEFCj88",
  "key11": "357NZJhmHGs2XxYiNTAmkYAY3yG1efiZBnCtyc61E1uhiMice7vYFhQksAA8cypKCC1mvGKSDCJ6jTJ35wSFQcru",
  "key12": "5wiJWaFPfwDq9xAWZs81vBY5aWfWhBGfAVSuix6znTdG3EXnjRh634WSDr49zA1CFB1oVMXmEU3zoV4ZqPMW7ggy",
  "key13": "3rAyCdw6NgM6orZ36nDe7hFTu6264xrvPKiZPDVUEa2yb8FGdYUbaezdRJEX6Zr2ZaYmJ3ga2ZANYEQrtuQunzR8",
  "key14": "4YwUqTUtNg454psUpCk4azgsYjZ1Fsad6UnFo5EsYyrRrHYeZdB8xa3h8nMw2XhFa85fg9Lqx8uHb6fyJCibtAZu",
  "key15": "oyydKedsaXPm5M6V1jkeVFPGmRv9MJ8Nr8VENguoebiFhZiaEPQSdnevDkbwpKdjoegmMDEYrjP1SWpvWKXW2mP",
  "key16": "4xxfTMgYzFuuJ9XuFhM77zWdSRSfoBkgmUiC3KWiihzUwjMoBmgaL2CFqu1BajDsE6dVzQLpQZ65cGCCKR4MraUK",
  "key17": "Q1jGsPmwfY1QCD8wFdmUxydznZadhvefjchrhSuMmA3GFVaVymHkprRybJ8Bte8asB5V8afPwWeDGSeAZcwB3n1",
  "key18": "wFHhLkLUqcWz4zbihMVstfDEBDabQMGwLhroyHPQ2TQHbJR6DKRgj2DmRdTioKubvJfcYMwxQ5nSPH9ucZK7VDW",
  "key19": "4Vkct1UUo6qVvQDL5ATfpoPauuNTQwZxGp1TZgxaHVmbVQchikQVCZYF4WBb2XDayUUS4auq21sehsAb2E9AeFth",
  "key20": "AEb2iGzFfYuFUkBypuKS4pEcNQ38SvvPh8mrcVgmThG6MUvp4P6ayjbkXavseuNbVeUSt7byTzvod1z9kE2hkEG",
  "key21": "5uPT7FL21yGW1iCquUNRKPjfzYBUWNpLo5No2aVZjD7wKiR7qik8T8sYo6VGhs3oYspY3AF2ishfTw4NpVmvc7GE",
  "key22": "2s75yUiuXpJdvJMuQ78RfFvWhMjzX3Aixx3Yya1rYzYCrVY1raBhJaXYRW6qoWxUUfkZGithAzVn3qejzB45KXQA",
  "key23": "2ZyMbABCat4P8RXVeCWMq6wwx9TowUz99sZtnb2FY9ENZtWfoqdyBjYLTgNEhnkqaTv3FpHWyUBDmniMpfqMGfZB",
  "key24": "21PygmYqwZsHe75eCH13my9YuSooZidgLuW2V3tNz7eShcDtWBVnppyFSP6kxP5V7YjWt8nh1n5gkZgcKkvGkZ9C",
  "key25": "4eoxYLhjdGu7CAzdgYPfRNvKXYqX5e4J6NE1DNzTWXMjhjF2NUbw9JtpNjmgo1mzEmK8m9CDZTrkH7JuVeoFxEtE",
  "key26": "63UWfQvK4v4XVMHjhzz1ACSRkQ6XnWvcio87MYqqspz8bKhQPUqhcmh33cuECHC7gsPtiELJpgSgEFBgjY5f5dkm",
  "key27": "4Ph2amLn5VLc7hC8cw2U8QXy2PgLGt338n1UChz9FT5wf1foQRwnnK9Mwk3zATxF2t4UaqZfPSyf1WGjNPKu6oNj",
  "key28": "2hPoWahBghkVNYPZGAYpivYP5ztXF6TqBHnQ5ZhBzZtBxgtetWnodq3AGBxosrVQ4G7WzouAK5sNhz6C4euYuF2z",
  "key29": "2PcogNXueHHXcy8Rq7Qy6Yz1ZbuGW9H3L8N8kG41bk6zLaikLgrnk3o77c9Mu7Jy1vMZwdp7673j1xkTeHSVcbnH",
  "key30": "5FWZF9vpHPWDk35K7ERaGgcGn93wTuw23HgKh5DmqDE5ibZRAc6GAV4zwqyJiAioxAbLA2FkSfSPbHxKgLkSo4oQ",
  "key31": "48VDNbtMS22YQvBeEkphX1R58RZ7mpaNNr8YavvcL1Dm3nGnh9cRvU74oxRi3u1TtyxJvxM3rbGpncGV8zzfBvf1",
  "key32": "3A5nuTuHfy5C88DcpF4d56G1fdJe9AoPy72m9EnAExJG66MtbfMfZjTt64opJVa1KBgnVbzvifcEhzYnjTXHHqP4",
  "key33": "4BQD382p3wCSaxDEzqQS47uEpL4jPAdoaBxGyhsFFzTsBBxb8h8tN6Uxzft31fE1oAWE2mhqLMtvw9qLkNTRgxZj",
  "key34": "38YG32TVMaBHGoqdAEwjCHnZ7X4D4jwb9hpXFXtkj6gXxHC49gM8UyninqFvm2Gkn7dry5nT6z7jXs1QvPrSq8A3",
  "key35": "2NGQgKMtsr8UquWxwPvPtwRyCKntkaQvTSWr5y3wcSTkkFFMkErUJjaXzMf8oSvfomLQXnhURYfgtwQdeM8jkP4v",
  "key36": "3dyuW4VZTNJKShLvJoWi9hSEEato6R8H2GLxew1PEdoGQ4K7iDnQfBt6JbiCNgk6nfWpcnFWfSJp9EvVieSYYcPh",
  "key37": "55vXzrqzhoEhzjFi2wy99aAVTSNi2YLK1ddVVB6GpGYxcSWvUUYkLB7wdigtZn4fKzwKA6hNSfzppFBc6dWhHQk8"
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
