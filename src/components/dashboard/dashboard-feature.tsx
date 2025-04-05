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
    "2ugTjVtb35yb8UQ9qBywSFfwyXQGaMMVTNLHLFqp83M8fTuJqLTUqEoHDdvTfJvSxargrB65iWf3CbZbDPCHhDLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GarRYMvWx92yidCAZTmPveNwuNFV8KSAgVj7KcYh5PjQ6CtS6sk9JVXrsxyyuYd8Det6mPzAaMADfHoL92D5Qsu",
  "key1": "4WRKxhNJpB6qgcBX4Edsz8xLGMPC2ofEmMNafkQvP7h1cxwgVnVLZSUY7cGTRD9JTUAho2SF2g7hfPj5qh7sxBrt",
  "key2": "61e8Ncvk3BAnLWtF9o1DhVhhZi8eEFzPFKuDnXMtFNQeViEbZtCUpa9QKLutkCFDhQRsP8FX8XMuJbtdfY5WYM9a",
  "key3": "2W4PtCPPkzEJ9VT4TBtxTPK3qWBM7vYZZyw94g9kZznDmDppyBxkHmr57sC8Qce3Fh5UqEBqLDER58pCmeQAueb9",
  "key4": "3UTHJYmV6xfbPEGz3cixAprRksQunTgA9K2MB2zWgrFJ5WEjXXDN2tjUnK5AqwHpg94UguQPUFBsNSUg5PFNjV28",
  "key5": "4bZf6qT48AN1Dda1WyytYVtS56VB34KwLzY3MNQnFg5WxDpYakZLr5isq96cTmWLd4sra4LBrKN9rCkSWn6HHpzo",
  "key6": "3QSmDivoHrPxqnzohz5hAyvVpojsyHLbt2z7fABSQiJhFH1CGp8q9TWDJWkd8SofsY8XQ93aRJNEua2iozZBYVaj",
  "key7": "33qJXMtQzxTVJQZypdVmaXKo7gkVnsyRA5DFccBTehHHnS2gVyq78wDZkUjJ8i7172RJeh6hNJAGA5JukbFgZUJe",
  "key8": "3NaykVLb6cb1BCAWv5AuDNceTKApA6WwJHS6Ao25S1Zsc8ZWUvYCtofxMhPBcJXAMhgntWfvPbLt2iCxvfnjZgAA",
  "key9": "2knHwcam1wPmJsbAWuqXuFghp2HPrQpoHy4BDmW3twRH1PKH4kZ4TRaWf87DiqHiMQ7YKSN5wwdGUaaBnF7oQxjU",
  "key10": "Z9n2FCY3g6NYjwUPxGyvHHMTNKAUokiZ8qmuYxGaatCauTp8A3VCNcE1q4UNRGzbFXw8aKkmRa43QWJo1P23H7Q",
  "key11": "3poxXkjEniBYrhbjrByk479acMDk8WSDoiijwrHBSvATFYT9RC39LRdt3CYKmBkjvrFahGhtAT83xZUgk3vd9jER",
  "key12": "5nSt6nHgHBbVk78wfhuZQAW812kqDMCuuR7aq394kdHAR7gKdLRrzwjUExbStD9DVagWFjPrXKyQbgeXq7M4imBE",
  "key13": "4bh1C1ioBbgXePnJtMrFAfy3HRTQsqfn46qBmL9pAGdsSXTN6YBqFP8PJ25KgmS1UNbq41Zg7nRYhhMi5QhgnWcN",
  "key14": "3didoH3dXnvcoFgreLhCJhxY9LFKKbCog6vEMzvGAaikeoAtxUgzqAdgQaNhvcdAJkqbmyVAg3XZkozjCGdajdU7",
  "key15": "HDmC5wjLYa8XeFYQSYENTMqWkhDMWRzMc15hac2yfokWsehsHP1i6dyBb44qq15HuWppSQMdZ1HeFrEPLwZWLDQ",
  "key16": "pcFN4kUbfU1X9gbwvbfqtqmtEDZTbAwyiVmuhBYuuwsfmB9UrVfZLzH3snzmcTN45vBFKXxSENcdsLXk7xV2N6n",
  "key17": "5tLuSoqk33Psm3QanFK9PvZaVb6Z3ozhQtxQ9tpj7vZ1QpMfLkWcTamdfnmTrqtVrHmqHVfMajvtm3CDKy2sMaAk",
  "key18": "34ftpp2BcUNzhNQqaFuPus2wwUbu9hJxEgm8aQTQF35wLnyXRFHdyRAeye8SeGpG1JL8Mk9D7KnxXKCa7rzDxDfq",
  "key19": "4BcijVaMpScCgKzdAb9QKkipWum98eXRgdYQ5AtbSh27F2JCD4CQu7tFD6cq7jR6wEatQz6wPiwx11TuNKZJ3Sup",
  "key20": "5eE3cyz5W1FBQuESDrzmK3eiScnTLaXPhWYqoWwrzXrRjxdQTrZgnyKZwBZpoqimTJgRxfsFTjkRTzFecHXBtNUi",
  "key21": "4h1zbPtY8NDEgTBvD89DpAcx2bwbpZVmBDWJK5P4tepu12dgVoNtCS75SnqMj3SmHakVaNC5Ex5teQHrNhqRJeGN",
  "key22": "3t3m5t53aH92usc7koBnRuZqvrkaUkEhgVt4z2Ysu9XixFWwwLJh8bV1UVuN9afSbWDfxThvQ5Rg1cAa6GSDAqM4",
  "key23": "3KWF7FbXGe8eh9pVxhUjtrt66cAkMyckEsjycbouxWuz16SjM9VfTVFRu7FxgofbVjJ3rokwx8zU9CXJTw3aqd4R",
  "key24": "5JzQehKRmCxCkVyNrz2NBUBLo1vgGaUaoVsa7MvEAm1bcW5TtBo4Ro1ADRSh5ku4xGXnYrorPj9GQixEqmA5kWJX",
  "key25": "3bu8MpdnLP6jx3k6VMSgvz7SAmQYtb9FKbiFfW7PPYMQqpswkJSMZzdbfnyZNDhmzKi7WJ6yHZ6dEoWQCWi3tVz2",
  "key26": "Ld2rC8AJ4UmBJyanaphjWbiXyywdmpnqQFfQ9ys6e1hSgdxsPxPZCyTz2woCtc8FhcgSN87H7E6x1fBgfGvTcGL",
  "key27": "2E9TShu1FwEsthpvWfimy4vGTLYKQpNDToJEySpZ5x6Wq4xqEWBLWwpabnJe2hkNs2nFojdetms22CMxfRM9sALP",
  "key28": "5zqf2wgQsNaoTzpvgdyBuPEGanzDmaKbxdho7QZm9KBUvK5YLBKH1tFvM6faQAapUm3Fgndj8FPtEP51HyzFTfou",
  "key29": "5utuugqsLNdySFoi46bRqkcw9GZ7wGZMAYMoC82FKLDyidmHAKgjDw9AQdux6TRrCzgdn3h59oTa3KTfa3Q8D5sr",
  "key30": "5Y6kK93THyLBSPeoPDr6vM6dVNwsYFLdRRaenFdBPz6GSWE8Mj862a64CXWKnNP7h1yeq6LKPQ2H9D83AbbFHkrN",
  "key31": "osoJDejqW1p6KsU2kkknBojmtXYDNHowzRsURPTUe2wDXDVebUvdBsPwUvRxio7b2eWgBsVvQ7h56C2JQgZzjTK",
  "key32": "2k6jBcPnttVsXfiBgEo77UTdPzj1qCrJ4svwRGhszHArJwhUXd5yBsSZEQoycj7SVPQ2jnP6WSACqEj72VxkMByi",
  "key33": "XLmwAJD4YaBdEdmTvZ2dbBtb2ATuy4MgMX2Q55RPsNAtWpiGJHcTHV6ESiQHTGwq4UtvTG8opeyyJ3cgBnxHmdY",
  "key34": "5QfF3xrEDxH8pbZP1UckqjourdgpnRnmKNfHdDkUSR7wD7yvgBr4TBJXBEjDtZJdgNKHoaQf5CANWGRN7oeLNabf"
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
