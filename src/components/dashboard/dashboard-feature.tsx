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
    "3EJin6YPEdjgXFZzZ1VyifQuKLkZw42LqG9TTTg4vRiFSMvFTSgbtG2SJ9R7UcDYVV4muDb4qqWwCKdvj39G39gS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNnvagVt4jhdFqBYPPiBqegQGFhumJ9FL28ZYGUPJCTXFCb3EiKhFsTbX9iFPo9WhKm1pUBdSQDUpqZD1FzKnMB",
  "key1": "ovqU4AcHY781pzRgTWoarQ4uQVmUiWMEFNG9QnyqB7t7VLoqnqNRs2kbcVriGdWNRpMFrWaPt3reGWhLXtariBJ",
  "key2": "Va3mdkLQGfabZDYVBkbcxKsZteiT5VBi7yyE42Cte8o6K7HF2ysm6sLGBL7sMjC7iCtQQLp9ni886A8eT9PpdNv",
  "key3": "6Xp5e7PW74UD9F5uszTesM2TNxjpkDHvV9KqGY2y8kvAyzmgERd54V8EJ5ugWzqNcNUNz6VAvf1LQsu6n7gwHPZ",
  "key4": "2RRMmYppdk74TGSrM2CoZbTnoZUDFUAVcpBKJuVAnCgFqxXwjCi9tDLpCvEys5ceYW6krTjE9iogNidVAiZK7Syw",
  "key5": "VpYD47V6PEEL8mDWntMqBuJmSuPNK7tDmpJtLaeH3ZoqM1zYn3RBnctWf5HSNnJSkU2U7i2yQg9awBiuH6qiimK",
  "key6": "3c5139sr4YKQC9qPC9LEPLZoPcMxNH4RfuFE2LJqiHSZmqznJ7ahoYzrVB2ymjbyCYAntjdqKNNiqLCLMkE1Ry5u",
  "key7": "52xXGyLQm57qekwoJu6fitfM2iAWFfjdTz9VTiFeyTrWpWepXVqLmBx5vbaGxRPzxRGp53FTBXoyPm1EYibms343",
  "key8": "2dxXTJMNsW4u2ELZRsBk2sJWTBsrEh9Geyk6Qk7VtGdn35ZyrSZNa3QhXpSYguUeaE8JRr8CgUcACQzWzE6E4GLy",
  "key9": "4qtUvv7ZrzH591wD95ReeBArDAA4o2CFUXvsLL6eFgBbFdSDaMnGmMYvy85ZSqBwCnJahV4XMKKMSWN8wbCwRTjH",
  "key10": "3rkqmZQKkdxWPM6JA2YjDip8f4fH5tzUa81uUgkCJkjyMU5i6tcA6DbFKHmbyZ9HVS5P2GxQBBcm5FfbSxTgwjTQ",
  "key11": "36WHSSigcPoYB6uFe4GuHg8ApaDoCoTg2d2QNdjRDaCXioF1G2ADvWNQKCCjJcNYAXSCwg9tfgtEZXtr6Cv44HVa",
  "key12": "2vgVDa3jCGTMPmYUhLzNS7QKPezofAFXxL2BMQ9uH2vLmzqgawbH4Z5WAaogZBLnYSHkEPXBYBCe4nfZgyqhKrfD",
  "key13": "39o8XpqEgSRBmKU8paSCXUyWAm475seFx4Mqj2TzuhxJgnHk6rHxpzuiuASv1qDShbSzGjgBGecHi9XrtYgziQPt",
  "key14": "g1wqcVBxWHPvFBWtuTn9Vwy128w8gB34JxnmW1ye65WTAbcWN6YSJNM65JMyBrmUHhVDaMWDKRbK4WW5DB26FEw",
  "key15": "3rX1MgC1i21mXXfn3rsZTf14ySiTawWpww72bpNa6kQdtWWQbi95izFgNftsVtaHRuhTKcPi7guXdcvfqy5QtyZD",
  "key16": "yWXDA7KeYfpDf8zCuH5brs7fPSx5Xr78cDs1vitZmz4fRMAEiNH6xUFdnhGTqrgMzMmgspKxwjjrtnGLrvewk6L",
  "key17": "oBUNMS6QicFA5yMiZTT3CBbjTaCoF7HuzHtgTiVRhjZ2SuitFqcXwFj7GfF6FTf8sHxJgYwLwxREuSbEEX9rRaU",
  "key18": "aCc3deo6pmrcg2poFAaFHKeKJXkk2Erk4ejRP6Tz2jGErGxCr9CcWstt3xuBxVXFtTTvEnfu4YTLFrWTzmrNF9w",
  "key19": "52dQxrwyX3fR6p1UXznmPiAoSLhWj2DTZAH3ghm8xpZ6GwuR7wQYbh29qCdPPkyajgwh4Wohmh36bZoqxTXLaXMR",
  "key20": "3tpQAopubbafDQJV5q4AJBHAjMY1v55USaD95D1txQ7ievZ8Dz7aRZrzN3bEprnKTQBrdUVFpr8YPRDpABcN7hnC",
  "key21": "63EsqCwjaVfek7SoH93fPVWw7hg91FV25zv3aWLJmrYd3Loxyygrc1WiSbRAnZAwAMNpYCBeq5NLazBqFJG97mD2",
  "key22": "Am66dLHokP5oESAKnMXHB65qvpja1bzW8kMVULFnmhHNfjjuCcV5gwkHXUy32vH244fGyfFeBxbAeJpgykqvD8p",
  "key23": "1268sy5R8vHQMLVVcVFxcwkRnX84P7PwekkhCtFUbG8s8YSJwvbZY1zSwmCwqptGXUf69sKbPAc6CAhwX9X1yNoL",
  "key24": "34f3WbBFQRrjYHGRHFsY6Z6cvuGfffELcw4KFEy5uyigUzumkXA3YtDofi62xPLyjgvDLQ9VXDiT67oVuBSTwD2X",
  "key25": "2WLnFWb9KjuQCt4S9a9HfYXXQK8HHWLJycnPsm91e83x6ajynZSJZDm1a3Qs7ehPgx6uTuUUcz1DHEi13xSrydvP",
  "key26": "4b5CizJvDcocLYefUJww8q8knkFwBVobrmQbSSXQFVn4BtYCYHn5VNf1ugi1noDCbUEq2bqCHgRNaP1vx7nGf81e",
  "key27": "gm1cAPp8iwvW8usSkBAPVLZGrr7bbG9GktswKJwVR1J7vSin4kcpQHdKKwT3iGf8eYjy3rfxKHaKHLkZVmPwF7b",
  "key28": "aMQngE8yDkB5ZXC5Sajyi5XTkgV7KueWRusvM95KPckgyhuqnZc9mrG3KrwGCfkoR8r53ovSRszmp3FNB29iCNV",
  "key29": "QhLJdrH7UgRxD3nhuVMT8PJaRyu4xd2v82HGHuWPu9o8proo5JX19By64WCBynN4uHHViQB3CZMBbiDnBo3hBaP"
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
