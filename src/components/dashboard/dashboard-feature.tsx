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
    "4wbxX2mxZExV9817TdcvHiNNzqeTyHKm1dEwHbq6sLTyR5vA9wyqeA3tdMdHGitC54vantBx4u2z7R78RYf7kQQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8mvMhYuY1SJ7Sfs2PYGbB3iHP6VYePzBLisqbUuNNChk9JFz4kkHM47w3hbg19x9ZL9K2VikeqVFBnToAmfk3U",
  "key1": "5MTuUbyx2eFBHFSEbPioAs7K4zZ4GEjFtPRoVjmNcuus3n6ErkcBKxxzwD2AZFUFpQXTunkKsTziSYSTB1ZcppVA",
  "key2": "4VZ3Gj7r5BSmrS22KN6rUL1cFvqLkDQ7DyJugh38y1ZdvaHS8CrGRPEJPLJdHSGN5h4ojsCG4jFE1LawcY186fo3",
  "key3": "2ohMzs8qgfyBs6sJkzJjpPmQhaQG3kecnjZSn22FvBTx8Ws3Kw4idhYnpK8m6oTXbA7xHxccvHvqninvkawVF7em",
  "key4": "42Dy15HG15gLEVTFgsTDN3TNicdkvbGm3TmiSifXtTVjRrQ172fDRwrM94YLEF9BevczdPVovu1uTV2tyb3ghkn7",
  "key5": "44VtorDhf4vqhmrpjx87i4MJEa8kaHTAcSJSB1GKoZEpoA92W4DPfFy835e8CGzada8SEhRXZ2fh2NQUAWcpfmXx",
  "key6": "2ozUWgVFrfE8mh9XQa6ASRwhdK6DMKUaiKknkRWNTn4xdLaoQ2rZPBCTG7ihJzzfDBJrfgzhfLaT5Dc7DwA61pZj",
  "key7": "5ZurrkVtKbgAcBnFU2GKdXyEfYVX8uTxAHNdAU3591B3gU16D7a7tU64M5dJTQ2aGoaNhicygeP8aA8mWrXQsMoR",
  "key8": "2QbLbagLZpfEoFtnuGdknnRkV813auhyFemX9HJ3juthMhqqXnVa8d736zJhVpmjfYKgPpR18jzsv4SLMzWyghLh",
  "key9": "jsGRsPTwUoSUr1TtnQu71uHPNoYPnBL5YnM998DmgFnkPzLznRHA1KbbWN1ubWNZiBYukReyAu3ioZjaZaJ3Z3r",
  "key10": "5EZspsEjry3cAn6J2yRt8F3mVX78ryDKS6nkqmksxi7m6kuq5sfqfWdP8tw1ss548BxGDYvqWc9URmND4v9imx3E",
  "key11": "4GqB8VwdUFNJwMYdNJTCayFKyTuUZhF2ENxQZYmsNbK6UYFspK3AFVJDnBThzryMYyNGFWhGSQg3M87vJDnL4gVV",
  "key12": "2BdFeu9Ms4i87xZpn7DhW4cFe7dGCRvC64svw8sc676rrdxj8px6uRGuLrYpz4614XDVRMY6GSXgLsBo4mJM6xm9",
  "key13": "4mTmBpz99LEPehQukbzCERtr9xeWo3t8zf7giRsKe7Yn6wsaD9Zccv6uxWV6pJmUnYJ3ik3YvpYih7AAXF7jKb7u",
  "key14": "LpUgiAwL7CmwLBHutBBr7J47Knyrkp9hf2Y4pP4jXaEoJJf8YRMbpEq8mPhY8iCjdcP6gA8J1LAYVa1Hd3K4cuu",
  "key15": "4CpLpRr4p6ZDskjvnrxQwq43t93bxKb7xejt2KLkzcsn8abokec9v6ZGF7iPTbLuhecj5zhxSMxb4YNLsQDMPji8",
  "key16": "2rCKN2kXNFyiVwfZAHVZivyixPhohNRV7fo9qqiopDHhcrA1p2qTFvskHo8bcaWakem6Gy6jyN9bKZQE5jvfpM5r",
  "key17": "56LPRugUE7nvb2HNHfanxUSjFvPAkj9hbCRpUUkck2FTpMx71B5NgzH9jiRbbGrXNogbJN2EGD4ojMFQGWAJ1bMX",
  "key18": "2Wkci4o6YAjzJy6giVXm6VjiritowTTjgBFE1dE5jREX9UTyBX5KV1gj9RQBBAnZsskNeyVQgv2yjBAUUfrmfRPj",
  "key19": "9gpcKPa9mzKSsqDpMY179bE7t2or4koG3ggmS9RuhdTGe366iuuQxciAYJt4THVGEXTYJRGny3xp1xP5LiyUXkc",
  "key20": "51wXomA37vSAdrLiZQH6E7gp5banMPbpUgdPHUnfChcoXb3DNLwL6sHqd2oiVpjVzH11QwVdG6kBZKD3rd13mmc",
  "key21": "EQ18TTT5prnEVch3CAj5gS9mcsLtSU8wCbSxmCZaz3JtYrRTbLPRHcbhJiAwD11r4vKhjKtmobR4N8qPFpbFaqF",
  "key22": "3GL7uXqnaZkrKAHaLrLPWK1UcDUJ7JtsQ3zqP5x4uQEpftMSnrDAnMnTkBidXs7YYhrE2t6xZEv7xd4ZsNT2bCCh",
  "key23": "44Fs2xzyVUHwddT3pQ8edDUXnFYzEccwgVGbioFNnNwNePRqzJxnFQ3Kr9URezjXQ8hm8WF7oQbqiLT77sJvFh1K",
  "key24": "22EkWHnporsCP6xcCdhG1bDN7idUJqQgvX9ZdCMJpc19H2LWLjEkKu8E9XAeqTy8ZaTZbypAo9yRvD33Hcm3RhcM",
  "key25": "3DXcEgkyNFR9CBFTKpn5MohWqy1suSsLtr82w3VaeCWfjQwTgyXL71ztYHZAciAzPkA6xFhLiftNivnZTwup9yQk",
  "key26": "4Kg8wiMS9AP2s7RByG5qS7z3mrJ8enbCW4LmhPuCHLdUdGKd7BHi5Q9e2vVrzs3P9rww1rohvVNxef5uQuzcPqq6",
  "key27": "4VVtVLmvd6dx3rHovHjF8mZxp2KuCgr7vPjguqgmhMq6EfYeVz5qpfNsQVprmrSP3LS9g1un99j1nCsGNZUGG9DT",
  "key28": "5AhE6ZyWZ7qLJyfhUyWUcez9dd417VTsjzkH2xMdEsbYLFSgdPsHJeVaFk4iY8Z2GgbefwmiYYmdDaYhxwTJbn2X",
  "key29": "vaZRY451TKWhzqA3mdZCvZPPQ9r7UojxTWvagxvd6oj6b4wp8rTVkqqVFf19zWCiSA3DWAJuLM8cAkvrVsRCS1n",
  "key30": "3ap5SGnYCtD2oeD6QjJEX75ksHUi11dNuBni59EJX63THNW94Cr4hc8WPA8vXR6FwFPQrUKgK936Z3QPSrWGnbMj",
  "key31": "4cEM227MHuKaZFZGPBg7tbe8JyBJF1NBpS9wzHnPgnKmA2udVSFEgLmxHXwa8r5BjsufuZWB25RnnU7A8qjk2RvL",
  "key32": "36CFx9VCEUGiZHoSiTDHsGj1Crz1V79VY4ZCnsJt9WtKSjkCcReHrLLBUgxCZSAQb1kk36dSnGpZf91h97PBJNhk",
  "key33": "4ueLBtyMEdhUE47GwVSmsT9ZdJGYmFXokc195gwwYtyrbsWYjw4En3YfcHWrNTp8PHqqdTz2BPWHaj4edbcRbYRK",
  "key34": "3vB8phYZ2BVz9JXCHZm4PXTfqsN6fHNq49fVs5ZtmsHFuNwx3aEHQUEHBmik1SSTXPJwyxLJLrL8sHp8iPLA987S",
  "key35": "62JqnwdErumas5svUGQ4XLXKBFJfG8odCp4tswuYuX1GUJ95LcsNSHLr2PbgbSwB1DDb4SS8K66sMu4XNHJXVjqP",
  "key36": "51i2RdfbNcL6iBKZRsgTDtzmLEvfgdLTwAh3EoWF1TfwMibBjmyHE5m8BkjykrKKHQ9sZKGVkBp77hsy7edqA2MH",
  "key37": "Hr8gDF8RWuQBwdRmmJpbfYjWE7A5f5gFmrbKZwqYpB473sjNo59DSjfF9He9eXHHQuiBTdFHMgxBf6Vni8zfHu2",
  "key38": "RhXRtbQa8TsqK7GNkkLfKbXE8yJbs5EW9B3fDthRmwyJh5TxrcV11kAZhY4PhwUTqcvXnKt918ZnSfvVmtg9nEE",
  "key39": "tzs9osMMYJBB78gpG53pGFrUW5SN6XEcVvVcgFKbtpGCpjKte3YvwwigAwP5PwdAW8yyomMwL3CsnxahCzyRiPH",
  "key40": "4fndS5sEy1hgWjAXxHbkRtEVb6RnKvvLAbZx9qvyDmfNzHhWcXsp6B7j5QPRZweLsRuHeRaZuvTRwRLkuGRU2Ebf",
  "key41": "4k1YPm2WUKiY8uBhEgMpPYcH9hxyU2fR1rmWSWWzrPMB7fBDbweyatcW5CSJ3RUf4BWyvn8KTyMYmX4Xpx6ny8ER",
  "key42": "ysWZ8pCNhaXVGrVVD4nHtsnE5QT9qpzud4Bn3JYE9Gz5RifmLS7wtu4a6W8AHnAGp7xTYq6HGGu97tG8RNL2HUd",
  "key43": "FoyhKqGBpP33T7to9QKfJ6wPMQPtKjbT45raKCFEhWFmyP8JNTZe7eG3d51eYfQvCVxBxVkBrQZPtP5tmNc7jni",
  "key44": "2BUzh8RXZtknDSAgXgAt1teNhWLGf66YrZ3f4pbZGNWf97DhvRmcWprVyuzjYrsNMhEBEZY614LE8xGRaWacCGtg",
  "key45": "2ig5GDVVtFyq4wMgCKkS8ZuwqTVtQ13BTavmZUKYRq3DuwhjNcK8EVWLFAb8DXYMSctWZYUY5oEgvavBv28YNCa",
  "key46": "2bXzuKSwXpCzXYym3FQBsARa3BTykkhrpMfPyoYcPgdfig97p8K5Adn1sjd24cJSU3kMN4mSDTjJqYh9iyFdngcY",
  "key47": "2fnfBGsz5SkifXJTUAe318Pa7K259o8vjat8RDKQuWezTXu8dvnumhbEQMTGEXq1HaiXgjiLnv9qsiBvPfbZkmD1"
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
