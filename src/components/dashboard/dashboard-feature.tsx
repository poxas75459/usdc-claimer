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
    "3iuxx4AiDUaUzpAyYuQamK6655VM39chq9nrmAwadnL4RVbTvied7sXNgXh84vJjeB6oA6FLbo8YkYcmE7fKYxmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d5cjrAHKArZ8vKY2bpJoYEfaSqx6sKbFr7QpGnJTJ5dB4jEyAEcayDGEEmq3J4RXsMTQNa7Q1saxVaHWKYBuBPf",
  "key1": "3FyFDwoEcT2QBtsDt9H2MjqZ5BUX4yKzd6vLdtFNZ8qXEaXTrJ2f2rtK8tDgqum3GJ9b8vcqYuHEv4F9aMy273MD",
  "key2": "2HhtyGwS6qWjgjsGUouRjrJoGfvKBypTck6nGP95xGaGJcnYoarWoF5vMjTviYxef9d7sTQnq6Rj1PS3K42JY64",
  "key3": "5LSK3qtvh13CHmnsadiJAFeKiwcJwoStuburUoH1uhagtqboigPe3GZdtGRLvyBxhaFX1dZajBJaFHofNoTQRVaS",
  "key4": "pkFXwAcJeRLkdVmogPyeySVzgkP1cTyayonokNwPQZXLMrL2gLS5M9phZzWc5t85WiGo4GPfXyexntzzowqdsmf",
  "key5": "2t11pwE1cA1MwtTxyY2iLQwPZ6kEokZMuirjWjSbTvRCu94aCJ2txNihUAZX6arZ9MyjJA7nqfxCHjv95q5CWjUU",
  "key6": "5BCfYtKGh4ZxRxgHNxh5jVCeibzbgw8GFGQrU5WG59TCbkfd1sHa9GcTbV1oJLtMD3sp7tjpo4fqruf7eh8L5jSk",
  "key7": "2ohDix7B4UwUrG4BFHTVyN4FPRYXVyvDVHBAKphMHz58KG7x6gVH7ievVpXFw7wbrgZidNYPjQ4LcGqTNKrGa7uS",
  "key8": "KMCDnDEyhJWE92oGgWN8C8bttHCPwYbEoV4R9MWip45EP1NJBvCKDhH3rvbUgmvuSs7vDTSRDEeJ85LUF6zwsTL",
  "key9": "4vnJ4wtYo9L7i3whAY9ARiWxSKWzf3QQxzNiXk1q134cbVhKms7RGePy2BJgpAjCfgT3qZ49argxjRZuGqds2jSn",
  "key10": "47XZn6S7b5pUhDzEZsMSvG6xeM3SCEchvMXVYuy18t1ancbXPAyjEURuarmaBWwxtgXLVKVWqWCLKyRQCWu97tmP",
  "key11": "48emabbUgxq3w4prp4EogyibwhK4ZHtitjc2Zd14dXvTJ9Nzt8UUG5ivUpe4Z6KkkgZQGCc168cqWoo72gezbwHQ",
  "key12": "487ceiB6gqvzjaBLBJ9ak5nnwAnGcfZ8J6S61Dwwv7GZgSdT1eYfrgW5cYVmFCM8QeinT5wFaxvmaM8x2MMyD4yk",
  "key13": "3i78DjaQbj4sDtQsAWQo3oQ1p5csjPCAXBvBZB4DmkcRRxpEzeW2F11mL5mxK6DvbHZTpVucw9f8SxXamaHFgR9T",
  "key14": "YK8HpytpKKUVAmskYRD99xwNfhozc8A3R5wWojQTw9KDgrH9DoF2Z8akXM9fscXW1HHodk6qh98jHLd69iCSDTo",
  "key15": "9LyyaUQRkKEA33yxCS2zDwW8VhsP6PfWmB2MYBySr8boPPRbPeqM2PXV5gv3N3yrtgiwR9TvttndHFQ6XmHX9Uv",
  "key16": "23bEGFim3pvSLzjFMb4iCkuD5hfWyuhfQAj3JXtT6R53sC8j1HDcXA4QYyn1M6wmiw61f4ftojfZrvozgb7Qwe6T",
  "key17": "5UKc9degXZeqeeuWhJGG8MuLJSFdtSsutKwrQXMAXjgvyJ71FKqNugfjyzP8vduVZCGi6mi7JmhixxcMNXFwTjt2",
  "key18": "3LcuNWNjFEokSA4QDHQfhy1RhVBNHLGBiAfLSdSdLRE8KeaXwSq1meNNYxqRMvs1uHQsUnuA7ZwFRLiUa9AES6nV",
  "key19": "qungn2DZbv4ZvCEJ89tsEpdu8yUcvuxioLuCSmPhUK5FT4x3nnfecQDpzqZbGSdEcMe67jcY2pS1JTEfd837Tmf",
  "key20": "4xFNnUHauCaHd9kGgSMk7VoBifXEbfWUaNdZfVyuzeU9aiwH2G6q1Ku2HbK4RcU2f29V1fYPNppcYWd4Vi3WBNa5",
  "key21": "4M89zCjsgSpySbq1rCNythHqBgr6VdnMLSxMf513h6rRK9hrxy3J1dfKdk7BfXkSEdkqQu8v8Kr9SZCUMqZD4VQ9",
  "key22": "33UDbFjN5nqRfZu4Kjzubv2DGf4LYaKcbFQdGWurMkpcqDPBtFq4b1PecPF735maD5dRWFYfAkMGdNpZi9GH1zEz",
  "key23": "fiMwp3YDsFUyhEqUWCkizpEgT3PyZ3bFxNkgSqksBcTViYMw2MpEEgfXkqHVxtxFe1pVwwueMtThXLhfFCty44e",
  "key24": "5CKZ5Ko8L8xQdtA2z7aGzLvgShavxz1jZjphYv78LM7xf8Etg2G5Jd4fzLLAvQVZWq6MuSqmJe93ZNBMeAanm1z5",
  "key25": "2wEiAGPVqWc2kead4dtpZQ66b9UL4PewWBbsHpCd4qvkJytyuw5RSX8ZF3Ng7zbbZvdQwG6ki4FMR3oUC51AZdid",
  "key26": "349vA1u4eBNAZTXTvsh4EhzhRaZwLZxZutwwCsmdwnD5UZV3N4N1dpr7wFG5V7z7WiVH5p7cjSRRLfFHk2vvttmp",
  "key27": "4DrRyX94jA8AJAZNrcT2cfFCLWFq7iTrFsFwEAqVA4onihT1RmW2KBD1CaQ4HqViFuRfewUViBq5YqDAPBrHhH5V",
  "key28": "5YVW2sovTDnxTeAyNX6duA2WGupdD5z5TRPaxhw76fCVkVkrXoYP5boZpJdJNoRJFEB69EQxWRtX5Em3cabSsyGD",
  "key29": "39xcZSU47nEqkKWQYkyYGsBx1BSRtM3hH9FB3tQD8TpTxxMHG7vcGyeHDUjGXM8Dryp9Hyg5tvTScDAJABSQVVFc",
  "key30": "3d5YPUXWgZt8QRD21WHGGHtRw3ZvzuRTke7xSKeVgcQsFTgXCTXNNJnEtkrQkM3LWMWHfK9L4VfEhWu2fC8dFoGf",
  "key31": "3J2U9a6DCjDJwRPBxnbC8McyZ4AUBqg7JD8nCYBgGWtAanmzWNePdnVtF3WKVaca7Qg9Rz7jmHzaXVa11bdzHF6n",
  "key32": "LGBWehKttDfxuo9Xm8HHv9MqfhnVfH1UgLoUyH5LCm7Mihpw67AZirHLHWNRoNXmNM711ouHzBRvKG3SZ2w4k6A",
  "key33": "5cz7UmeXNvSvxtXG5yqYwatSMSS2vbQjqEuh2SHrv9jrnQL8M1Y5GiRDsR8JsF9m7pzfVZyubtpR9QnJDT9q2qev",
  "key34": "2p66N99HrPDNfGFJfVUJuKWawBdHEdbHjYNtaokX3JXH9t2TxHCfEPPLrmJ5Vew6hEB5BfirdAu1rXd3FvZd6Zbd",
  "key35": "2AjL6J9vsbeipjnUG8euiWToMy1G2mKX7QcrowFiUpryCfMV6Zzmf1ihVhZc5tDYoUWYm4dZsrWDpMhYmz7o6e83",
  "key36": "252D15Dg6kekfaRyuiSsimoufzLvyc3Ry555h96peTp4vs5u7yFz23vsR7veVHEDMy2nFrbkX42Dif8oaqBdMTs3",
  "key37": "548J1PERQm4buEvDoT5Ehy5Egnt57FxypcpEoBrArj6rJJkgs56FE8gzrDVSfepvSwUHxMYEZrRHzEG9uARrxYay"
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
