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
    "5C3EZ5yYBjQVqXHKsY8Mi76cmRtyo4xbuUFHBeyZh9p11Q1673NFpmD191WvjuagbkwVo2SZ1VLi91j2GamH6d68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YMfUh6SGPzW8HrQYn9vpJjcnYpHcFDLKYh1G3nyPaJRABiR45J5T8WQD82rKQryDtJDY1NLhFLYPaHMksfcPpdC",
  "key1": "mi9AfrYrn1aaDub9d4eBpgesG8rJLwh4hvQnCn8kjFqgwzTNRFfDNdTYzfpGb4EYjTLdMEpG1upjzvvAvsyJFXd",
  "key2": "64V6Vn2J12Dv33rvXCyvj98aGRns33HFq3fkRs7UdLFSAKFvzt5fduqJNALAh6souaonaha84LiCUUckqyNEeSGa",
  "key3": "4swaVwq9FaUMb2ATobJvNomJ3NeV3DwHjryZZ77N2L3BpfUUt2eETYX8Ls6PU6crPnjFv48Lm8vZLPfoUUmJHEYk",
  "key4": "4FuLG8v28BQAPwCXpccaRS7sC1PvJvfboE3dHNZas37Xj4ffx32NG1cGWLNYeMfN4HKWf2YnLeztr6Y6oCvxGJPg",
  "key5": "2rVCjw4gZE3MBX8C2BHyyGuyMPBHNHtujFZ8HcXvRHtuQ1rJDCeTJvH2Lj44bFGbq5daiQJa7tRsJEbRkWb46U3c",
  "key6": "3skJ4rjmc8Y6GisDyApvTBeaToogS4V5pwVeB4E2KoMJnEP6PhJgbgt39mJdXjSp2vuvBryApD3ropF2eDg7cmo8",
  "key7": "5CbEzkXvhjksWbxi6m6h9o6Y3aHY2MrB58ApMa6KuojRUZbybv1zbUCzi7zyJ1F3yWhSW3AZqu5xKYVXYKY48ycW",
  "key8": "2MEX7KypC7ewyNhHkhLECzLk4AvXUpqh1nE7zMc7dxrfidB5mNkmCEKDy5QRVH6pvbWuSahANNjW3xRAxMhugdbj",
  "key9": "zrPaSE2PkjZ5PUTjj9ukwHWckbZ4srMKLjxk18pybncrggehkkb4tZVqrFvfK7LvhrkBDBbvb8mvKnqjkrUroZ8",
  "key10": "3Pe3c1vvmQeQp1jxQZBMdpxFu18fULrmGCFypEZ5fjC7TPm4ZQuKGwvnX8DAm6TDXeumDDfRsQfBsVsFdWT6XAXF",
  "key11": "3p4HuG1jAFGByPgmtcXczD1Tcwtsu5jRPuhe8y7CN3xdQPDLYRjVm33mKQDjsEtE1fPHhuLnmQFbvabP8Q9UB73D",
  "key12": "3FStJACXGbRq32qiku1cRj3Vr6JAxSAqeTBeQJvKjNqNkQyp8gNcwW1gRJt8sxVrjCzjEhjNy1xwsqpoZ3GVNYki",
  "key13": "2BCdW8ZK3YQiCEjg9FtqYxgSuKHeajywiCU24XBsqbC9JJSpmLm3LqqXiWEfJccu5n9QzUeq2gDrYBUbWx4QgEJi",
  "key14": "d2RyD8FE2t4VBvKzZ122SLcbQGLhsQdVH8AL6H8DiCM94Ud1duXfDEkSEsAtvfd8U4vdKSjUYmajRZzuiQ4gpM8",
  "key15": "2kgWF8BgHRC3FHwfcP8qsa555bh8EzK7Mkn44F8QjGVjNMpJYhMhKNGBgp1PpLYdnFFHiANAKCuDtYRV8YpE5vCo",
  "key16": "2uCz2fZKzJRg1t1mtb6dJJZEKjQESMV48yarvJNcbu6Ghor7REzaStRqbuqAa5qdgwMg2vHC11DipHNoNpM8s1wq",
  "key17": "4pg4Qvp4CJmaMksGjKwsn1yiBkreEt7667VjJVJUgo4xmnrD8fzscAPyBYzLgAVpPVVBZqmpafLDVMxuCdtoNmqn",
  "key18": "5TPRCyw1i8MLrHNhJ9BNQ1wMC5SYGwtd8LbQVpALUuzSsnuPFP2ZPYY68omFAPGrpH6CkKP3AcszdWMLuQvks3Yy",
  "key19": "3yQyP1zvLNy5nP6RoPntaxPtYFV7xpAYXKkU2bwjZYkAXofH9b9gtv98WbHuDQXsvUFi8gLDPrPrxXMYHD9G9h4n",
  "key20": "59zmHE3FXChNpDvJnPt2BHaF3spcrNQtApexW5ABUtTfcdnmTsKAgyedKUS3ZE6dJdRjXbARKzFoVEUwYMGft8LJ",
  "key21": "5KZ6ApDoqbR7qHmrdwwtAXnEzbf69R3F92BKue3EDtUfiPg958mxvXwF9SkfDy8GJF67gsJfbGmUNX8LAKb5jKbQ",
  "key22": "3ejHYJdTPe1qutYKiCSNtVV94ZokwafRfvnNNm3ewpZoGmCbHpvyibsAT7pjX8JCCNeUaCmMvdVBfDUkkrpouHnc",
  "key23": "uNo7Q8U11pRSjgPJYoQXPn1mKkWvXRQE9we6kkW1JN8iYtgUuoqASTwRfdMeviNxQTmDkDDBUDUXn7qre2zKFCf",
  "key24": "29Z32DYvRLW9CpyokhFRbR5jufnfWAYMbZ5TyCAF3zExr3xi3WkNwN5A4bnbAav8tMaNrT2ijGvZn3wFzL5EA8Mm"
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
