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
    "4omyQyWQrqp1zi7aZkUSc4oC9aV34F7Y7cnPwv2pCqCvKvWurDFmysZXDNhYGzvfYgnASt1NEciJQsqCrjAzhPAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LP9qdaxEradnnXFGxryWeuRBBQEGFGm6rHVH5kJGSTwsYG9mgVUnxAZudgtB9DDpEQFosgmtsDBHTYkMnH1dB8z",
  "key1": "4r5G6UWwzEu8pCVyUzgyc8aaWeVvPJpuZ24zE18LfK68d6D4thJpPEJgxCZnMAFMjrCSM9cC1ryLyuwM1sBcpSGj",
  "key2": "2Nq9jc2g6psasassLUwuEJpJGgiQPN9vk5vVZbohjjRgC2VqfuYQYvbrpf3YNqaVeVPH8Qgem4iRBP8xpmwiP9J5",
  "key3": "48F5x1Y5icn79WSnJvPPYBzpMHfm3ifWfKPbfSMhGcm1vWRyVhFCzvL1YrrpGGhSNqukhkHxXnGWmeMCGPvBjJj4",
  "key4": "35LynzGu3vi5hgdnMVnfEzCdXdfXDqAv5S1or1QAvomkDgiJecHcWHHygkamNdGqF9SYyMeNuLiuSPXW1Xrju8fb",
  "key5": "3EwDJxGWZoPN4MvaFQDacfoS79AgLJHVVyo42YnSsqhgMXKudTtPsnCaGtTykN6qmg9ELZLtKMkF62jkSvC6zRR7",
  "key6": "4TzmRSiPULuC6WDwRKaLfxCvZ4XpgZzUa9JpAzHMfxhBMunVYbYNy4rUrASYD9R9n3ikvymwmPjCABZ2ETPXUt6A",
  "key7": "34DhJ9z9L91hpagTA2etGMSxVQ1i4EsYsg5XGaJNAnHri276hRoawBi4BXnH23my2rBYWaj5szqXCUxG5DA1Fsq9",
  "key8": "39H5zLsXBQCEgttDMouBbHKcP6ZBAyFagk3qUbTroMUk65vTLcGkfjwSSjGqfwpV6ep4wMNZJvNNu96djVqpzqEJ",
  "key9": "3GcZj1YDZ1QoVU2Mtj8nuUTQdMmGUqbzcnDXcGfhnMtWSV266fBug8u3jnd7r1s9zqHWqtQtGPHNE7zVUMUdFQte",
  "key10": "XUj4EMnKhyvTkFSVgPNCuBT2YFbwtgQu1Caq2r5w8SLY7b6aPavj2CEYhZiGmhp7tE2t6Qm74YJHJkaipEyBy2N",
  "key11": "Xr6pfXPFQEJyeG6eo6hMFc2oy6oVTqQrpNujJbpMrWN7sdWQhZVm3FGm1uvmPTTA3DacdXHPMSvjxLRtkjiYVbf",
  "key12": "3hUM3X93NQiqC7rdfBz6ywDW9G4jNkih2g84KBnUSjCh7eFXVeBzp74LcKB4jEMye1cM3o9ud55XU7prXyAZZzcx",
  "key13": "3Sq5QE1nuYd6GJdsRX75vKud3eXGQam6mj5q5P6GBeCLsGczYrbKYkXRefviHSepdr3qtxK8MJSgDSNZVPMCN5Ha",
  "key14": "3a1hKLgPFeSsqDchS3CumUKvM17zJD3EDHyGrHCeMb7gYgAWhDSf9vQGTzbA1oivPu1Esvnr9efMW4RyXixfBzZR",
  "key15": "5ZDWznsm6Dv48JPXmkinh3uPBsGmLXwfs2W1QDiwotVe9NSTiTpFdTmmGP8Wy2S4RkAazSJfkq57zefaEyVSigBj",
  "key16": "5KdbAFHZrdqBzeEWCvCKo7N2UjAbC9VUW2mcMEs5qdbxM3XeqrVvPK4H9VZnoV75zk7emfT8vxPVV5nfoviWPuoD",
  "key17": "3EbA8runGe2jWiDRyfyv6zURDthgwaKj4ctcoHmVDYvDC6pZcMRWhNyc2FrqsNzMUeL9U6TPvtpUZraNiFWaT2tW",
  "key18": "2VEaVd3RogWEvreL64RUhzSTcWsBtHi1M6vQEV9w9ZMd3nS6uAKs2wEJLbffSeN1Vr6bzozRiko7LvTd8wgK1gmH",
  "key19": "5jaBptgvpdpQkRUBstyAEeCj1r3xr4o9DvUZKGr5zA4r3VyivkAHnzL5Ahi11jnDyvW9F6fXtonSQeuPhkZfwvDN",
  "key20": "26nZmUNdNkuX1yPFytvFF93ndGj5LvLmy5zd3Z9DxUUKm26jeyRFW6mZng2aS23j7jNkqBnMLmzqyGwSYngCxLBy",
  "key21": "44zx7rHsVPKTL11fDJV8YhGGDJ6nyxWEVFMedF1CSCqpU1EDMxnB2uWdnejdseQjJnHyVrjHJ9sw1Jetcg7Hn1C3",
  "key22": "43k8yipPpsdq8c5hbkutbM5GMyy3aRxrDoQcSKK6pNArUENJEnNNXymGE7haZMdma1swx9MsUkfYgHBXpLK9aFVJ",
  "key23": "3inC9MVCVsnKXsmJGp9ekAbs6KitRg8ZE4h7PjcRdWoTWnv2GAUAsxVZKiA2W45WYM3JKTA1juk2FFbV142jswiu",
  "key24": "vBfbRRbuot1yfexq82HKxYzVmjoytYWUTJBwbvGQNpZ7Ex3oKggKbx6aoDLH5GjLeNb765LtZ34Mc4cVmWuGftn",
  "key25": "5mPDirHCWbuEEeo7ECC4dZbCgNxXTbNoph69tq1ESoVp1PFBLmnQsf1QdmjFyn4XMKqQBcyFoXWwsARtFc5Uefwa"
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
