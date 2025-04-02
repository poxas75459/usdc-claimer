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
    "2cHV9u7LsCJ6saU3nuwyeP59LxvcyazPfBWavJDoE4wtnwXzQLXYmyxsYfZWX47bDnDjgZ1WuVeKvs3YrXWHWXC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222jDka3YLwKrY9q8nvxVAuBEfhshSgRct4LqhwDkDgDHVanyrvqz9pgLBQpvvcpeKX9U4NYhj276KhizmuNsbwq",
  "key1": "5s1wFbCbDf7Lu1WvHSTpv5h6Pw43MDBmnuNmTDccbS3NQRbQNjRpQHD2P2uzjdDoPRgDBugQ7jkbfhPDGj9vn8Mc",
  "key2": "4uWRs18yCYk5pMx22QBStATwqHVJ3aHQ28Mnc7JJjakaKRXBHzXwVBRDUW2nNDCghZruDyM4dWfC8XQsQinBrC1V",
  "key3": "2ZsoXCnfKJoGtLFiAgdpm6mBhYgSxSyZrFXaLTpDR5rAeapMAAZ3xvNsHduBkeJ84xTmzFNaPjVoYNL8V7Dw871s",
  "key4": "2k8hUDy3e6kDnUjNws1ZqM6TrudoAx5vn2R6Dqv5ef4tJakXdvn4bjKB1pjprhn8FwwMXkM1B6JCeKGP22Z2Lx6u",
  "key5": "ptyhcNg2xWvFQCGnM9rx5Mk5WngJ8qNWv67Bu3v3P3CFgpvtM3pdmt7vUGJpZBiCrW5hR8Qgz3sVNqYCTQscwsy",
  "key6": "2cPEmFVZguCcXFy1gafW6WdsD3faLns8djbe96mtypP6ABkHLCCVHm98omGEi3qsx9g78ghaLTzsDaCsX3VcJsuX",
  "key7": "2t1JoYHyxRj8Bvr1dPTHU3D85x2MjJ53MPBeDwnAph39d214nAu1jVYPaSgujjJJDPrsG2EKQG1sBvzugKjFdceK",
  "key8": "3fMWeSCmUKzayhyx4BDTGoCyNdjpNiWkrFV3vYx4HyCtWNPyLZuhuhmx4neqRapSejCoYdkXbFU9prhZp3F7dcWE",
  "key9": "52wqfVBU8Tbrd6qYgN2qbgYwLwWYhrMrL7KMPpM4Dijz5YfpkyK4NvDMdFKiHxvPtu6Db9Ng2Rqn2ggED8LpaKVF",
  "key10": "5eiT7HxYYFYb7y5urzLPN5bxoxLMyh6GbNmarr66smn4gbYZnV4ctp9Eon6nkzrfS97YCq9ANXm5CyifbUswJVF7",
  "key11": "bYqDZ5Z8HNbe1uR8efwDn6G5yPss9HW4rQyRvJtC1XwC67JRwpgt1VAutFHLTME3ypN8D59mwWdwU5yaWnamiAS",
  "key12": "5QvdnLPNE2hvCrSHhVVC5Jnr5kJSgUffZYetk5AHhPECw273BF3WSnEfZHHuHFA2CQQL1A5zsUeAmAFqPnZgruUM",
  "key13": "4oVHoeHBQ2NFz9Ejmy2aTEojza4Exk5rDHkhxbUDek4tJPQ8YBsGdJMHHVgPMEtJYhv2gwiqUv3iJZaL3hp6rJqH",
  "key14": "rXtYBKwtmnT6ztqi8cvQX1RPyGWGc4rdoPCQgCXArr2SZZBcWN11a8kNBxZUdAP75Lp29jD2XukYdotLbeZrkT6",
  "key15": "Peh89Q5kkLFAfhgXmRPuXbTTxKBnsZ3NAq56PXzq3SYX2fvQj2XKE55GZLTWCcwXikTSRh5bWD1QV7nJpbTqEMh",
  "key16": "aNvSBEijq3rEqPLAvgEP1mxbfzKmPbVmDgCkUjaDdAT7ebEUkbUGyidVuzm3ALxkBnMwsLV7F1b7h5rzUrihTxo",
  "key17": "3wVp7GssotmCF8TUgCGT8AoGRAgDLARe3UR2npnDyPEv4LuFEQVHYSUNrgVJniDeMwbkjUqhvHBj3HXo5nzMqbyh",
  "key18": "2jMU54fJBPJGUAJJoaVtxdNuJGNZqNdahKPtCoiAho4tCCLt7VHAzMPba1mpzXoWDB7iTJgGYpUSRPFsf6VjzHjx",
  "key19": "iAJkLfwKD7LHFDYoyuY4beHUTTWW2zaRNQBdHBYJ8ppmLuntt3bSACNQR15GYY6UnNLgcGySQBbHiZSqJXuHFJw",
  "key20": "tCoD8NuHuXhvmvd6qrUZFpsRRT37Uem2Hf8vDE1nk5EAxPwuSsWjmdZnrrnToKQLFqvT5trpAQnRnMZopkgztni",
  "key21": "2M3an1QsCuscfdURqVgKr7nsnubxUsUYyG8bozDAeS9jDLe9XWhUkSRRoJzKKZ6dcRQWaVX3VawFrjPNpHijXpwj",
  "key22": "646pUko5W5bNMdW4bvc5xsnqecKmFgRkyE8Vupo65QvaKYG3TascZ7wDUUdhXeZWjRiYyuzbTA3vD89jZRd7hSjv",
  "key23": "2Ne3cxjA5TcaCCu9QnP4NkT66pUd7kfqCSJvgiJEfjoouQhD4JaTNA8xs6PE6tp3N86tGcoE9zKC2v2Xz4r9z5B2",
  "key24": "5abEcBrzCYbj1jgnvm7kPENg1DpRNhdhBk8Q9m8ytdz7yr1wyvJGFb1LP9gebGrRFwtnyrE9NBvA2Jbxi9AJwRTd",
  "key25": "5DNnJeHguu4ugaKsjHEaTNxw5GQdhuCsmSaRZ7vwmaFvQJSwfvSWzCvWK5mVVKfz19K8rvXdeTYNoMs4Ey4xW6Xe",
  "key26": "41juu1YzAhYDb9Ao4TpGWu72NmLeQu3XPrLcjKNCZWDUUYU6U2tkjqcwAkvQqhC8rvb7GkEH45L3YacT9jh8VVqD"
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
