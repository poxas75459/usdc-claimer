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
    "oUSE4UKbXecZ9TSm61yR3NhnqHXnNgt8xkkJdveeGtCYNeENAadBw3GqkgBuWby61vJByVFVvme2wegfnFui5nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Toe7c17uBAXn8SN56GJGdJSC7HgSVZmJ9iD4TikPqS4E1npNSPLX5T9RuxQHDmNTU83GZNZVSwc14XiQ8JN2SDc",
  "key1": "UkYVREfoqCxsDNSxsTchpQApwsG3YnrdDVidyDVaqo5PpFAtoGxeNapgLerFCFv1AeH91m5wZzVovnoauG4BNJf",
  "key2": "CDSDX2k7moAmZVQgE1H1g6VFskVXnkuyNi5TpMW5Sb8JG6QZhz6gS7xHrMvWyrcgeoNBX62parcSMwW9pFyh9Dh",
  "key3": "4sb1o2WK7wHQf1sZL8atYy2wr9Ve392JeiP7mWy2vWSeqZGUNafe2BL35B7A2BiyFVc9ipFmVMZUo3jg89DqJwRf",
  "key4": "1hWUsyEBKNijt94YJwxKHpqwX6i6ir6nw8VPyXWkp6UJ6gNfLQDprtdwQsosC9ZnMLP1fvHBzpYv7NNa6pFUVup",
  "key5": "fCkF6bpAWQwyNiz7Qx9GqYfKyE9eGCxsWpav3RX6qvnBAonKrwwj3ri8bbo94SRDKfqCbzno6KnqvbF6vPECQBh",
  "key6": "277fyMBFvZ6aEUXJQUtrjTsnQFNHjYtqcG6dmWZHQL1bb8KqLbjsVGLCXWWb7eXdyPZCywjDhQVNFn2KLYX7DhZm",
  "key7": "4BoEgrxsdVYe1zckqLHw3EmFwaQZyjQAiFMZwMnTESAWSfxVhMgn7DpZ424piT4Q7UEskXohxVHuYo8r4R1yyvGP",
  "key8": "2PdaDFDFvQmSUCxsMK3v9pMbbjh1iuXYsPdaFc7jkBYPxCupWHAKoA4PBouPwhNhkeWvsSRp8etaRiXVYBQaUFdT",
  "key9": "64Lb1bSASvT7VmDWc8s8SHFipLPJ1iSbagt6dFgu5zDyJagiMc5dKTQsJJoigf9DzuJFutbTuGf5CKrrswigSGjp",
  "key10": "65sBozuFWZmM8pQ27evMSHPFk4BxUCxyxnYvyxqdjbNuk6tyVgteZtY7688HBmwjtmV8GURK5r6S1oCr1qVdxFJy",
  "key11": "3r4QsGWn85b2FAuBQVXmZbpWTSFCRFmqsLHxFfwXDokB2rQWori4R8YKpJptSYH9DYjeHrHQ4XVvqcRYJW7F6EY",
  "key12": "31krfnBwAAQDoJzyB1EoNH8zKTJRBvCFa1GsDizukn1kr8Qjq2qkmgoUoy6kmxboQsLj1i5NiE7PAy8yMVUpM42J",
  "key13": "9BoahZMGmZh7g7hhNtDRjvuU1HBd3yxFATfQaU2ohWNNSYUoxKXg1u7XxbZz5DXpXvSTWKsj2UVwq9yMtEMaC2r",
  "key14": "32Eh18Sf6A4R2ouvLvAjyYF34wXmTYeAz2pCuUAKMwnv8NgKYsM6a9MBTQYtgcyACUoAEXUxcpvYvGjKWftyrwzK",
  "key15": "2NQ3dHCuZRQrFW92ezxsdQw9XiojghhDzP1ZrYZF8s9xH5EC6gSbqZ4aKuPjoAMMiH45hWea2uzXqqKV1jga3tZW",
  "key16": "rHB7tm94bSACozDsUZVDnJbnqJHqXAemFVacWz8qz7KT7TJh2qLSufq4grFVBf1hhRTjJ4gY1fLBXSLkofQ7bvC",
  "key17": "4pJQLLgVh8scAWoirhCMWikP1ksf9rV8dGhdx8n33iP7acJ2vg6sN8vaRbHsmJT7j6EVcN4eUiNghMREBu5Xrpqp",
  "key18": "26NmXGsjiqNPgGrcyBVgSRPC69L5PDqt7VhPj6PjQJK65Afh6t1EaGh2KTSBD2g6gg28ihGVne3JJ8nPipJdBaiH",
  "key19": "2ddrjZBwPHHDFRHXdnFxhJzY7X9B6e7kxCX6nffCqFbLR2MqAmh4wQ5TSqHCJWY3CbNKcRqe4eW4c8QRuGLNuGs1",
  "key20": "2DLt38BNieJ36RBkzF1JE1KGYbnD65jr8fJssonLG33MESVQL4Pkh3YVmD3E8WreD241v1URv19KSzJxzBry2Tiv",
  "key21": "41SN4CtQjEGEtdxdZ79SfHC1dPtj3w8A7wqXhUoNnZJLbvV6ovyfxQTZQd189UGfyMr9Qps9HMUx4qCcnNo3Pxba",
  "key22": "4AEQnyFC3gE5pNxTHWgn4eQYdzqe9jSov6LFfJn7XFTstTVNa8QHMY6xANQA1GkP2vucMwkKbLLunGGwJez9CJrZ",
  "key23": "3tRpYVe4czZfrpKBGTdXyqUgTJjTWgZYQFneUBDLSSnuGbbUuXNeZsWzWaj6eiRxzsErAdzWQgCg2stZKZxqy9s7",
  "key24": "2Lw6z6ZSFEedE5vcVDZ4jiMMPtu98GZstKEERQSW1tozs6dGUYRY2cPoPPMBCm1Vwesf9Xt9Fd47UFFa7Q5swhgA",
  "key25": "4Ckr11H7StKCd9VsaCgTe2vxSsBH1wwU1TvwQ572iXQx2LEfs2cvrBT5fr3W51hTU6Dnhx6rG8cGEBiwEETp5vt4"
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
