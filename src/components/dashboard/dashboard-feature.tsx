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
    "F2o3fh78MPM1FVBzGXhXmG6eyUajMF74d6L8ScpQdLoLNSV7kv6CX5kXXFUEAHvD5BF9LTmWBnSsdkqhQqShFVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MpikgRkLGZZpZD4Sro27GCufTWgym4HnkZkGUA8Pk9ToqF958SSQ5ee2af2uJ3XoMsnnCFHcRjEEMPpUhQGSKM",
  "key1": "2FeXVhAtrL7azXMBtqHRz5GRo6NEewPcdLrD4bwzQVaWx2SrL1eZBAwZxAGMLWC53viN5Zd9MZmB99j7Z8gSJt9p",
  "key2": "A2o3F6pz2YicJWagoHaKVuBMbQPpMFxk7XZkFDri9yDtY64ENdAy5JLwTQ4Co8aQxJanAYBPWFqGKfkxUn4eBy1",
  "key3": "xQR1YpJABpTUkcS6GFZn45fdLx1RmGNx38FHbrjZx9moLC4wUTWFPzqteYYwjfiG9ee6xxUyPgZfvPedn6a6ZMC",
  "key4": "5h7YNYgCqrY7x7A7id7vAfydddezkqwdgJu15SuexXuTTBHCz8Ckm4S8gvQjZ5RLC1NUHMy3c1UYZydqq7c8TKvd",
  "key5": "29qe7ygHcG8dSs4e6gE86yZaPwY42j6v8n7nYw8x94NxC3YrYMnvstjjfYybFx9MMEm9BChiFkjXhKzpnvay2UTo",
  "key6": "5h7PpbTjWvTdEkLDSA5VT2Pr4Ebkgfb11CekKHctFLKwpVD5mjj2VkML78CY7RjZQmovMC3XVkTxSmKPDscgBq5X",
  "key7": "2nDVJNqh2hzWmenvo7HnWKbiGGq2UiBybBCrnnEf6wkjgHBL4edFxpFzL8bmiiXWS3yfyFKgwrT7MejqVG5cvZkm",
  "key8": "5PqQ3mAikQiLJmmeMuVLKHUf3Tj5m4f7TT13vNz4myNGApiZ2AeQ6e7pZWyLse4kZTLVeZ4PFGBqg1C8b9BApBDo",
  "key9": "UhMAFsU5VKreGPc6dLJ6NQtHdzdDWTxpRKhKoVApKKHxJptGwKqqf1CWyViVGtRzspPo1XQwy7tdcTGqJt1L8RM",
  "key10": "2nwtJmrDtocEUiX8wgnuyHkTpn4pXJqEi3Rp3T7CY9nkGqb6iDzkDFdhwYvGVEuhmv5CDqWHQT1feMKxEM2ecAwE",
  "key11": "5wCGiXnbH1L7V5zddVyzmGqWg9f2Zkue2qsrPEGWUC2oXFo56SNRp9a1DaEwy6zNPYTgT79Re4WtpmGhL5aAYTag",
  "key12": "4eLLGLWbiS5kM15q5QszstiyoGD9dG8Z9YBzXCFDtJgm8D1iekVPaWTE5JEjH6vt51MC9fxJkNGheTvPNrkYaspA",
  "key13": "5SUTWNVg9pWCk3KrHnhiTXvvkqvFFPd83EigbbiHMCoPpxiJTVG5mBzpQCyNr9ikxiKEpgr7H8XqGd5fUdQEiep",
  "key14": "266Z3TirU7HALBVMvf5K93SFoNAP9KFCWudXruJ6zNp1VHk2xhHBnr1pYDMJxVnTTFK3bocSgsGBXoGJsnN2TkwE",
  "key15": "5nRnw77c9bwbNGpKw1i7gDWtXK3Asxk7Jcy5UU9dmtcZjrp9RhmagvvgCwDZMpUyDSp5HrM73vLPDiXkn7rBkSvY",
  "key16": "44Dq9c3smWiK1Bu5cFfSX2XJJ9YMZPcPxnZG1RmwRnMNEy4ztto9wzkNFh3yqk5JJV8cgPEQPTdB2owpyZJs7Wk8",
  "key17": "4Km64Jp9d3gNUJ6sx8gxs993o8ny785Q3guyDM6S5sPKkLiWjqA8FwfC1pcgB9bKYVpjp7i6WoYgKeaUCtEZbpGa",
  "key18": "JEZJRWLRNJkWz5c6SDm7gPkgXqKGAAKEvxLri5rDNy1AosRqtjvKqWRVXgb9pGFQWAfVG7yR9G9jhUvfSZ3nKyz",
  "key19": "2e8zQXqvaRradmpZC3Hn9ZomnxZSxfdb1MzoNwLFPMeHEWPev3AZA4o7FZNQejJxRiNxAXCfGF4NdQD8ABEd3iBe",
  "key20": "627iGcaLAHrnsjnA1BJ4hBE354prsAWMTeodt4Fy2i32BtspW4J8ucMnMj7ed5RV21JZD84ACpUent1z3NuGyN7C",
  "key21": "5byVw5zZXozgF5wv9q5CWNK684B1cExMcg55TfWrp86qLGXM3Z9qf7WQGpFbJo6zqPcnkuJX8YFZh8pjd89xChB5",
  "key22": "468isxeKTuXbGbteDDh4pGv6qDS8PTFFqeNJdR7zAwcd4917dWWKkgUqFwtns6jYhDCG2fzzX3gF72vwWpAiEPhH",
  "key23": "K4UhjwjxBG5ComLy8ga4ZGzLPkQt6M1iWfmExp8uoUzwZvroqo1G9TYamKLxe3Gp2GweFfgKA7yX7T2gnRob6iJ",
  "key24": "XrRy21324TqwobuLJayAUnp6bgcY8WgowBhzQuCdG7awpsTQ3SoJVzXnbarKQ7wjU15qmWs25wib993RjFHmrym",
  "key25": "JDrPUjc7rPidh2qLRbtGeCMUJqi9aejwm7AdTrwdMCNLefnsRQztPeQafkfTfDV4LknYe8YNEfpFZy5pDMnZjED",
  "key26": "2xeBCP8kbBMVRsByurnRfbS6EYXaL8yKfZWXw4w3xxPZ5FcxmDRBX66NbwQWgFR6AAUFg7ktKFy8VXxajD9R1dCn",
  "key27": "2MpgmwQg3qKaVx5PcZCcQXweqXM1LXpZAEbdTCgWQrBh6ChmWKLdYMY754UhRbnZRVe27Jopd1JgwBBtzbp7FFtt",
  "key28": "54ZZ7GMYnjvzwaMFBe99ETUsvEsRYyiC4DmNzRL8WkSSfEZc5Z8rUHHt3kMb8CirF5mSETmTARFEPvct4AFzeWz2",
  "key29": "gJko6azGDcZy7tXByPedeDBDhtHa48K1mCmcf7xqdTK8FV6uF6AJDmuVNv7jNvJidaCkeiJAnG1WhsZmeBB3239",
  "key30": "BVXa2RUfHyCSv3Mew18Z2j44cCq3uykZvuSsKnDoLbTP2nhqy5omQTANFHSExes8SJty6Lo9wJC6aRimvBTMPLv",
  "key31": "jzPF82h6bF1kakHc8dUBrsVjTLWgNsstdc23QiRTbXnJ5V8ttSYNzXCM1n4aDzjpof7XXhR73AEzX6XGsLtPL3F",
  "key32": "62scaFxP3uYvFnG7rvpU8N24MpGyQCiJk91dE4TUrena5XFNcPxE5JVDrFMZ6dHNs6okAPvhFuJyNhczratAcpmS",
  "key33": "5GihWXG5vWhzmiP3f9Cp6eXehicnyBjA5BjyMAG1E14Egc9sgRHQKBcmDQm5BPUBe4YWfkqndYc1DfR9H2hikJyM",
  "key34": "3djmjd3L5GFx1kkQqRaAGT5kdwAEx4inU1JPEDhX1j1t3RXo8QdVoR5Fb3u1hKjFZ9XLR9kBNUYfwZgq3xQCEx3t",
  "key35": "TavrocrLBj6pSrS2u5P2GsG7uS8JJeN46Di7fpRGRTVYn6BbPk8SYECXsjgKWBbHmC8UpQ78KtUvTsmbggR8tpm",
  "key36": "hPfVZBgNqMkKLnvK6DdF4qXtcZ5hgbtj1Jse5cd5S1hecuTBuH9cGKTsqjSdxwyEkWRaYKeSHwnJ2RFM8D5eXJH",
  "key37": "37rAFVN9JxQVcNZ1rZqRFduZnHK5dfWMWGVrv7mH73qHCCNJvevNjXsCsj7j5XAT9ffBGusUL2tDeBP1fQSr1keH",
  "key38": "4ts7HXccK4ZF9CPQ4GLKcR9vmnx5g9nCyN8NfTVfEjXJktA7EgF3rJkYDVGorFFKocT6MfBniKQKcPMAGQzW17UH",
  "key39": "3TrJwtCLZRAK2T3Nrx5kwMPQXwaDHpMWXdJg94m3gSHvKNJDqS6WU11smJ74zNRsdR2Vh3CoDzgYociGGeFB6rJD",
  "key40": "fkV4S1DgiJe6XL9AvcMemMiAdrhzPZ26Nvv8Ht3Qq6CwKHVvRQQNXfCAVLLjLjai1fzjpC6D9G9WAkjAm2RvUxf"
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
