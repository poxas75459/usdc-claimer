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
    "2ZU4KYz89D4RcLMYv3ePg3zBoaPHQB47kFDVzzzg9ve3Tw1aK4eQwkUvd4G4ARfyDtRLg2AnudC3QdpFfTS4Sx1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmUet5rjPViXocyHPGZJTGYRqKKg1pTBRdbcyjK1KuUVeidYNzoZpx7LLHWRoqLvio1WCehiJJDdAc9HjXcXsYL",
  "key1": "4GnXQFVS2Up2ZcV4KXRjSQTGkpZNcgesQXXouqnWBoH2iBnAuyEe6KrDqyAPx1WnR7CSsZUsSAqGTpYAkvRFdPBt",
  "key2": "3cFTrmSuW7VjjbGBzBFpUrjkb9Fw7QRyQkrDodQpuUqvR12PdV88MpBJ5RGPLCHiSAfhVBo2GuZUhyj9JtyvhVT1",
  "key3": "3ocmtTBcDWQaMJgXdC1VCcZHEc2eoiMuwpApUr5g1xAdgtfssZpbHDJ2WuNhJs6rFWZoGpZojgwvQZKT6V8hhzzn",
  "key4": "2w2qENiGg7VGVZYBQCo6YWnfqNA3opUTRwE6RRtA1BJL6Hi77WDovAPDGGACioFFVMxWQ9ZrrM5JC7pLNcyXxnbq",
  "key5": "3e4A3PPt1zWtTmBayV3n3MRxggFCj8CETm8SQgXYwM5pUZiYfNx6QajF498ct1uu3bD3u2T9ojKPCUtUp75BQhhP",
  "key6": "4JbWpg9RxS7ewyWztkCJQft3WsFWijq6Mcs2ztY7BrBVnmRuKySZDtwQFHM9woGY4tUMgyo9wbbGMqP2sVRAJBH9",
  "key7": "4oFKFCnrrxPvgyME8uPCqKunNcUjPpEkhgj2SrEb5f75ho9aXBWrxG5zUhsu8Gh7B2cSRVnFVTEXqmSpMdHBszb2",
  "key8": "5YAbD4hbyszmfTPgJB646WpNEr8Dr2vRyTdeUWuvi3HVJAHm2cCp5yK4VL9Dj8xXXTqwjAbYja6cwAggz6vXYqLL",
  "key9": "59MKm1E1UnX6wRaENQQATTQ35NJyyH67Der37og8tiz6yJCg9JZmHCynNgKpRwtiUYtGDo2cR2agNY2tJV7vaNWK",
  "key10": "jsYD4hfVEWhaT2jZfHx6stgEpUVJXhhj5SpmnBY4eCBBqpbhShJ53Kk1TMYZgsTrDUKDC6zxvWKqvF7cRH4Vbfs",
  "key11": "4Ct3m6HGrfvLx9W6KUFfcXZMY5BZ3yRH7zTrCq5o3gs47yFhucxxajMfRzWJDZE8kEs21knV6Z8yTK3aQmyFxmGe",
  "key12": "233QSBmDsvun4QbRohxiy843nfH111pHLZbf9o6kexRV8eXdfdZdqe6h4sf9coVmSDWfmaNMFFKb5miZmm7yFzQs",
  "key13": "5n2FqDwgVso8cbDmCnUTCqwCqUtwYE6LRwZuLSjPEZvzEDh7qoxDa48JJSrVZVpx58tcMELP8vbro5qRf5tgox11",
  "key14": "558C2sQSd2mVVDTKax7UKycXa8XnPjf6ZNcMUhLFEskP9FFYgFdrEXPwjp8xLLpDcsaNHXCdhef8wwhMQDW3hDEK",
  "key15": "4Q2uBzBCf4cT4FSG7TePoTjWfd339mqyTY5CY6oJYeq7ZBiVaoDwvu6di2kxL9ABk6oB5Uc45iwpFV98afbrKzbF",
  "key16": "3es8wUYH7nYFnwf4zX6ftbKJMKmx24uTafFCLuwe8iAvj1gPEqE1BXWRCSPceVs6oaejpc59AKsDRQovbaAdqMHw",
  "key17": "4LK7e54GmsCcwAeVPSeuM4SXRY1n4mzquDRvQ7uVP1GvzA5zL5WT9fZL4uhsZj98W96BSxPb6ZMaJinamY3Fyhm2",
  "key18": "5sVgZqENnA18nMJdsp1UMFiEZt9Nbq1ymtw8aQoQhuPLShTpqEKvFnE7iL9nPVCgZvZs9j8vUZ81VCV4JDJvqKxn",
  "key19": "3SN68ZTA6PGWJspe6m48mJK3yHR7vpUCYALc5Mng4bCCRGCjLH73Ax1sy4wgdCkXUFTxLSJfWFN3ANwQS6HZmhEm",
  "key20": "55oZi6u13Z4bGnogTYsYpgukpAEKPuc1j6RF1nzXgP9peKveNm1KSmMcZbPoxWCKxanqJmsCa3322Ksa5FgKRxZM",
  "key21": "bgpu3MJD9dPZNo8y6Qg7Nzcra2AXQdymJKi9E9ycNoc5uUkp7kFAP7g2AASZfhkHBAecQdLzpLwqdVnFezTFroV",
  "key22": "5MYeC3SwwRt8hNDLFVqVLykEQ8k2jh6hpcBT6ALY1LtnuhxbFvpJv56Awb4vXHPkgZoPPUM4VH9yoPruwnGWex2t",
  "key23": "2p47dA4F8rJmtZGCQ1rgpt4MHo2DQtF93Sfa4HoXmpSQUJ4KmNQgdeaZEHFKzbfjhn7YzVkgLuAkZFT9kxWq57Lk",
  "key24": "4N5YqK9BedwrnCQVAv5YxuSbWn62zb3CdQcdUxzZdygRsUVz43pkYxLUSv1yFq4MbeoRoCipckTjXiBKT9ibR5nr",
  "key25": "2dZbxsWJ9kgbsLkuaXUhteS4uydw1YK7YbyZkzj3ggWpQsn1gRwvWF2jU5nEizUWFpR1gx2DCg5NSn4Rea1yJgKx",
  "key26": "5RdGza1ijSPVBoX7KzD5UroaUTf8LSwoYQTGyT5xGJ6HAwxHP7rBBD3X8BeSb2HgG1WAtcounCUZuWVCQm5LJzqy",
  "key27": "2pTLX79S1tAtQdRFfKVhH9PZaHqJwEMC7xcVg39Pxrq5A9ohKzB8GZBAWgtCWzgqV6oSh8rhRRTAETDRpBbWTBf",
  "key28": "UCNCDoNcrTezWg8ZjTkkPxKgP9Tb9BWDe9QzEoPaubpq5Afkc3Haa5MatFzJd7EnaJoYoYjBgj44R2FcC6j8gKo"
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
