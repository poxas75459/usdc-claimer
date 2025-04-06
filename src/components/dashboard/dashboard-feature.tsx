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
    "4Htnq9Cvgj5L1YYPzzaAmmiLweHx5C3dGJkouTQN6bCjge3Yko4w8F83r13LnKhdZpP3xxvfnAA6FBm92DmXo4tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCzyqB48Yqn44LNcra9CNAePrbtg2mnkkF3bEC9YZvqmhZHCb7xTxUyCLetT3fRxgteEHBJ2r3Lbs3Xm8Y2nqjZ",
  "key1": "26p7ivt1NdiqB658XkH1EZ69KrLasess1Swsv17zfATyHgywvCjkzUSapPCvVm3TMBUK9VFR5cBKmW3AWGwQM9nc",
  "key2": "4g739ScxKjhVSMsunoFMHjr7MDA1URZAVCJT4uGmBxUPahYGePdZQDijUXA3TGW3SeJUXpCr2qyutS2CUiCziyQf",
  "key3": "1CTb5U2u8rWonPAxYKDh4ZoaU5CeGymXQeZsxKSjCZHCG3BsaGtr5zPesZ2GXD6xW78GyZDYEh3e7AddWw4fy1j",
  "key4": "26TyZs4gRQxqjKrVcz438N3gxmca8SqaJb1jYVeKhtaqEcFPc3Y6fCKpetcj43eaQofAdt6bQjMgzskoAs4rmWqL",
  "key5": "2M4BbEUb63jhqm1LioQfuqc62reEYXm96zj8noozXESaEMHGRuLsWiM8UvhesxEXQfhgNtucy2xvorrZszfHGUqt",
  "key6": "3WWgZx4ckN67YEKPSPAZrZAacyDYtwhYHubUfRxP9vgwCzj1RjbQL6JqPUduev4QQYctkRzTbnbBSgpZr4nwLHpW",
  "key7": "3dJbu4PoJp7mcpRxsajyitM3bHuYdMfs4i8DZH3Ca7CGhihzm62Qe8kjEQxuETCTGni41crNdPaeRS34hWSSKShb",
  "key8": "4xjHt6N9DdoEzxb1tcPFmxtEYsxVEf6XDuHGBHLjF6A9KnsjTBAVNEDBmVodWdndkQRZmz6VDyqZQxJUW3axqWuR",
  "key9": "36L1oNMYLS8MDmjjeo1xY8Ce7QPEEhBKrLgdwMA8XrJ45WnLWk93P2XpbqA5uTZy5YxJ7WMBUycdhPzP8GCkjW8q",
  "key10": "2pwPijJcW5bE7G4tYQGu4QxDtXMWTUTB8PFxCT5bxMnM9FBYqyQnSmR4CLqKz3hSShoGjnEL2Nz6RzBmxgaTFAUs",
  "key11": "34qSRdgDms5x1P366KUzMYGNP8MYM37TA2qDyWzh31Gr1a1smu89pyx2R8H93zuRN9ztez4RzSi2gNQfMGak6umy",
  "key12": "5hCa5mapMr36MSNxBEpbTcAhPaYVDFQaHzoruN9AFjzgUGmPVck7hcXXpLphoEeT5MMsH2PMQMiM96jcZFQbLph6",
  "key13": "48Lcp45ron7QAKkVNAHxua8jZPCLFdYsifpWRmzfzXVhXek8QM17Qt2PwAq8FqraDn25RaJe1y4BtdKk2m8UsEaQ",
  "key14": "HF9pHAKvq1yzC1W5uaqVYWaeNmzKXuNojgocafSRGb1Z3VicAgRWWcfXVCMHCKQoXLXe7BPgHXpHDhTw2GRUFqw",
  "key15": "3WFfdWm4xN2PCeqWi9iHVJvnJhSggr1ck2TKTVcrXXTdoHT5LfvboT6MMkHmnRKui1bTAkwSiDHsTU8wh8eyzK9h",
  "key16": "53nLr4BQ5BtsLMtVaJ6LsWQVZAHNkeZUptgxs4YCMgBVabx1CaE3g6qxU4gqZXpmRNLUCrWL6HfyUEn7Zfa6MBLq",
  "key17": "t9ndfSnQESFrfKca8VzcQE5wicPaBTeZYmVCbZmsDaAW6APzzJjXoYrxyqkqrSUpoHTyNQeKBhd5ojNJvVp7uMe",
  "key18": "3v3NHqkd7qATSxuM4Qtbgdt4Un6uJsbGwM8GYQrEbpYV5ou2ruH5KpWL1LD3h7GEEmcvCsXfUS6AHkq26ALb7hSv",
  "key19": "54KRHU6F1CtRLGwnk1NtHcMDnrgPo44NGGMTe7XTNnvZCLNVt2PMztmLkmBbkvBk6U5DRCp66nvJLe4GVtimStLM",
  "key20": "23dG2aRZtvQzgmnucGUyWsXxDQD1s6FyEkvowHt64cj1cLgt2FZo58hdLoy4DBYoT4H2NhSLB2tirWjYR5yehEbF",
  "key21": "3n3VnMQrnjd1xRchEykDEK9rhJQNBbdfBGnFTXxeGeVJD4en7F7YX2nbKG4bMddZt2pduvTF4CWhdjiJ39Phu6LN",
  "key22": "4DRyzoo23VTRgyovCA9XM63Go6E9m5Ebb48gjTEAF8SSmCviLK4TrK8aast1pcnj9tra99vzBLV7KybPXqip4cwF",
  "key23": "4f7DN9xi3yJDHvAYnkJvR7oxhEntJ4gGCDSQArCpCen1cjhEJZ4nksMpAA7tJYKkJyvJcnfdejeUJ8wv3y5EATC3",
  "key24": "4mmeRLrwpTHxddoKXTHvxyj4rU58oM6HnKAdHZ6wCebiEpTmJuTyFyjC6ZNTyDzwaiRVBn91w6ERjCYZsKSao2yG"
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
