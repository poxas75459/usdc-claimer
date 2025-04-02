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
    "4tVHSndSYHK5EPoU7gKJcXYr4GVxTNgJGEbpB6Wk9Lsaivo4ii74VWT7ZCf3pE8KLnCnzN1RmzNkjhaoyVKqNTrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ioDXr3uFr3VsSdHL2TbG61NTSUG1vZJGtmXUNzhFvPHox9kJJYUqqfAeU6EGN4kBBDBbX9V2tWfVJUKRJHYWH6h",
  "key1": "T4Y2NrPa76Uig5vjKfsj5CycRzuGLow1LGxufuymRwVQkMpSptbUjv23wzaGBEUcgUKreJD74CGKH1X3NTiZCyf",
  "key2": "wTsUyWLkFsesD6Mn4TdStVbvhKkEWoCM6E8dwNT7bV9wvZ7Hvq5cnJyMBp9i65DEQAWtTxUzmTP5rXyFwwGr46g",
  "key3": "3F21wJq6NmKqLZosW2VkZEVFory958MxKmB4qzThx43PhNerYr7aqU6esQQ4oEfTyDsUfTjD7qRuTbcPdHaZJSF5",
  "key4": "2TB5Uks3uFLne6yahDjGoobj2wmKwV3bzgSRAgEJREgeGCnpwvYKiWKjhj7CQkwF265hvXJUc5CXkzopV8V8UwSy",
  "key5": "2MHqA6kN2BjaK2iGwxasFopbs9xvXmPLnPjH1859xbfgXud3LJVQbqSuy7qtpuXgo3RLwkXXKou4mXB5r4qs9U1t",
  "key6": "me9VinNBhXwR7bSHMQphqbhw7w5a8cpvbBtytnjoWihPCUqgzHjh4ciPLpk6d9x78V9C4bS34fW9UWwEigtdcaG",
  "key7": "67m5GTFNmX6d5WNhZq6Yu1oRG8uyDEukX83aVA3DP4PjZH4sVfiXvacm7EcVjj2qFawHxk8aqRpxEUhPPsFayZCT",
  "key8": "YJieLVtS8kjXnWjmp1dzZCGYXqTpACStQ2rvTzaY8NsfvzUCzezTZrXvkyNXJ25zCmCXC7subd5CQZnrpaYs3VV",
  "key9": "61jp3FwLrcCL1bk2PthcgQjjCDvWvN59pb8VRtQh7LFypcXzHCFKYpTRaP5iTg8rJnx69zFFTWA4UpBaSxdnqSwC",
  "key10": "56GRXequEpshoRg7jhktVi2PrDp7oJmrzymb3CEULa4tidXaKQU7hoTiXi7dujpZo85zTPVGKsTgtLp97nuY5Z9K",
  "key11": "2zumNUE2kjQXpueiPdhEdjEKfCeeYar4LpsagMmvBNDqibXUH5deqMvRpmvLXidyZnzG9SQAfmiLtN977GKwi5S1",
  "key12": "4e2GjZUxG5QHyFXcVb9RdqC7ryj7zxQ3fmsC2BCU2ongpZqBwzoRvNVF8Tbv6av9f1Atm53ygFQgVe7RMLS6xoKh",
  "key13": "5Z7bTYovtCnYRDyqhfEouQWpvhQeUBX9hEf4VEvkPdnwp3t13SdAaEHmQx2QGWyb3FwHo1k5DnrXZFyCZ5oX23PL",
  "key14": "3sFQ7jXvdAWxBPPF1vZbURmacT6GZCYMeXCydMiPCnZCbQBoRqnVXWQF6J1eysgyie8v11pojJhjNsgFfZaZYrvz",
  "key15": "Q44CFNJQizVtGPH7PbRfefUQUQNrsBFpGR6AQde3DsZfsHM3cPBDviehbKPVFkjeZ75eBS9HCv57vAJChXxDEkq",
  "key16": "2rySnQ85zqgsPYy4EA86Avf8zeUCPWbpPiwJpGGaN2ototTkZ9B6yKvfEX23jB2S4yFdHuTvu4J56jRzSUqELVeU",
  "key17": "2wR1EuBH3mbD6jiDL74kVbhqLf28cJAsLmsuvmWgGBH6oBj8pndoyYVBihVvGeEtsyrSfF47qnKhC3L8X7RbgrrY",
  "key18": "5ib5x49CwKaziKFEFKXssbmoHXDEvCHcTx6umFsUanMoNAz91gB7hL9RmmEN87NUjNes1fxwESoneYasQJwiYzcv",
  "key19": "5hekYj9ZQu6HdZ9WiBFaZCiANvkuxUAVsoRfwdAiaxazqhQqK19BxjhXNNnuux7cSScH6w9fkcQ629KXt8Gd9buE",
  "key20": "3yFYHfyyCCnfGdJxMoS3yV5gggNJu4ziqxFSbvxc1zfS7Ypt9atYyAs9nqZaVEwVNRnGmxH2KogFCPTkvxQpSfCL",
  "key21": "4ffv5bC2WkA73bRB6CkVXwPc9b8zsuH3WAKkM1ghcJVXZCfyFfd9eRut6oBiS8ddnZhmnxLr1ENwfk8aAWfYA193",
  "key22": "4SQZvLDasN8y8ZQkNbjTf5P8w4XENBCqKkkHdTjt23hvzdagW2g2eQKrVxtpFAMKt92B77LQzfCA7U1NzBUKNFvQ",
  "key23": "3MBPLFhPQ6ygJ5q6csuLYZgUzszzjbyu5hP9Y5YaJqB4idyTzNP6LPoG4HNBFKJgTYUG7pn79LVJXt9xd4QjPA2F",
  "key24": "3ZrnFZG5Thocsr5JQrVHcfKSycuTNcHGucWHAyWpb8dR51BsvKosu6L1bDKFRx29CVbEPdepwEfmJrpaFB31JirA",
  "key25": "34afwJe7CG6RX6xGq5ExMcKq4mQ1urDNSPERGeD8kY9myx8oBW9SDfAtrpU2RUYzNrJmhX6vM7FwjWUvRFTS9F2p",
  "key26": "4Rg9UoBtKFPwnFLTCqdAC1hygoKcYYGbveW7ACLUcQ7qm89GAKNbPLzxQtaubyTqaGYYqFQv3aJm9DqBy1uFLpRR",
  "key27": "3Atn6w4SNq3C2ogJ5XtgouYpfXTNdyKNhf9gQ1x673MjP2Uq8DxAXP4RDUaB6ZHHVAkL6TctKt3st1b8d4vV7sjc",
  "key28": "3ZkhW4xenmgmXNmpQRLWg5h4oG511VVuQ2BCAW5Eye4XxY62x6huZ2kBLzyXdDGS7hUJ4QTLaQLNpRfo2R6qtBvg",
  "key29": "48KR82iJQhkenyhugkDbpVFddpDimMF8xwi7cwCQmeBRQes4vseo4MtPkPB16dfvNKUKEudaDx9i7BtRACsSBgVT"
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
