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
    "3RcHDz4hx3Gn14nGxdjRCFLqdSujsgCUHLYL14WEuYyCSLfosMoJeXXSRhjarxE9eqJoHcwjM9p961UmbNDYktuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ui5qM598JAjFAqesqRaobFGMvBszdvYEY4QX5c4hjP3aNAqHsffR12rQnJh7rbZWcww2Vb16pjNx4sbNMCeL1Aw",
  "key1": "4QUR63RL8mBGkSoTxbz54vjthJnt2mZKMXwLJNNMaMbkGXyAN7MCC4kSHjLp5CqvwFRaeJ6WLQgs6dYtWLfb2X2W",
  "key2": "3k7aLAw3aEMeADybMh3mxLyTiT997HykFpKdDtz4PAPv973AFv5pWV3tPkkLnJrGnet9oh6cxyCUDExETbfRZ1gQ",
  "key3": "FkFfdrnpB4E8DCbw5n3fkYmnjP24cLP5QdXLwnqNv8VstjRUAE8QiNQw8nwSACknKgpQvKWjKgjBh5VEM2fXHyz",
  "key4": "2SjTtQugw7Ubyys8N88MF1NXYmKAoN2vwe9utxcBRuHKkfLSiKUgs4me2HxNQQ3mEJTLrPYVeU1WidDW6ZYUD6yS",
  "key5": "5osUYngCsnSof4riRLVTC6ADtssGMuzjvcG1HFz82ExcssXvngWHDZaHdvp1bCkZsb6ByEvUJuhMxscyQWqh7jpB",
  "key6": "2h36RH6xdxFJpYgqyNLGUkC7VBMDmWJhfw9M2A2NhwxTwkxSsjXLyQS1Yxdfx9E5rquqKSNH3nXkBeDw2DNG5WAz",
  "key7": "4h2me2yppVE2BBpoDTfaenDDxLq9xiXzrHHQgiH2fo85TjXRMiwyK6kYAJ6xMGnuNYRR5NXhNwVK1x8bdQ6BZ7hZ",
  "key8": "52X188VJUcEAZfpZpaMPojzFHiZvuLxz5qXVVBVXQpYYSZZ8YxnsdNojmHeCueSMjZb17mLwLwupU2df1bvzvKnW",
  "key9": "42PghHXDro9jgMAA2uxbCFrAUh53Moh2hQ4QQUXuwSqdH7W9o7ESQ8Xpgspg667maLuSiE1byefAoFAaLgc5mF2e",
  "key10": "4Z8wcXWs1HR9ThqqSDNEgxkDRPaYgTAjgv29pdG3uhdreKAemsU1TLHLoPW1LUc9JBbYtfbTigMP5AHCWb6U6B6R",
  "key11": "2ohRs3FJk11th1Ph2tnfZNam4zANWPqQHszVV7NRFayZhHjiXdMwsF6mhFtzwDt6736omEKWeeHBtQTVHyJy1xs2",
  "key12": "3yU5Sp93GoEJRgMT1vf8pFBykhzfguBidvaEThD976HzJgHYbF9LRwMNypahJTUAbi3EynoDEF2Mdh8CKtrQfFAf",
  "key13": "4AHdE2LjqryYMprmnCmQJ9oThLPpp2LwSUhCv4ognnZE1mNHSpSZx9dPGDNawjtybY3cBf35D8ttQ4sPoVTLGNTC",
  "key14": "3fKtASpU7FpCmJ5axMaFCg1CcfabGGMra7cPCohbR74vhJSPrKTrcdrqnGc4hjKpLfnLJn4fL1Ajs7Rs3r6LZSh9",
  "key15": "27TjwycYf2re3fJRxfcRqUSRx4hdNSowt7Qw7JyUW6WWqSvM9R5QLjjFkxT5uoYXsYJpzqeRcWaoJ9FrG7Q5dbhM",
  "key16": "4MG9dsFkBAFKmz7xnoi7Lrt2g9bV7zDn2z7txJKzxvrt9ffR6AaYtJpfSUuEdjTPAYhiFQowSchrSyWHkLETFapV",
  "key17": "5gG3Snm1UgxrJjLZzxA4UpUZkxkfGaCwuuQZFJgZ6UKusp5PvpWwXMC1omo8J6JSNpco3S9woPkGVuQAK9kJokmN",
  "key18": "4aNAu7CzHQt7NiP18c5yUeoDf5LYgTdKyRbFc2VJw4mR6CzdAAzfqURMHkfYZNeRLskhk6o2TjZX9N1DGwxCiVq5",
  "key19": "5DDPwNtQEFAh1EbLahBUm3mUQoyDrRCuqBwKg9zDd4CRo5ZjjkXsqyjc5VxUxQGCRENt3gKD4FWmb8EDcDpY9XNA",
  "key20": "zj2WwcvziRf5pHJueSG8ysfS1ALCXFmeURXeb92aJNpPtXRBjyCrqij1t6Uok5f3FWmvAWBjUbDhc84FTAoHBpH",
  "key21": "3wgPjXxpXxZ1uqmhtKp6HMz6iz1FwQD8NHwtNLqyjgzhRgsD476A1QbUH5JisQmGxt9Q8Np6aPoGTxAr7GweijsF",
  "key22": "HjKKSW4kyMhdZxUrjTACscosP4PMiWdTFqxoFc91QhSvqmQUoM9yKnmqnk6CWPBKH7F9FqcgsCfKG8bKjTLWW4D",
  "key23": "2nXP6VgRKM88zxEK9U2GSKc7mbjpHtBGJq8a2JfgD7JwLFceUTDN9VPk2w5ajMYKCcsRCAoUCQhY5uKHD8cGdi8F",
  "key24": "4mmEYApEnF1MJtK3StKHy2KviwqL9Q6Lycp21P6q41W4Qyi9ahWbvuFHB3vvb89Fcc2vr5DEEhXPydXoSGinmUd9"
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
