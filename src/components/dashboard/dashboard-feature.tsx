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
    "4xFfYdLSVKc8p1UaPHoRuhhXsAyE9WhXWokXn41Do5VyCMtZBPnC2u2wtUrtks3Yo43ZFa1gEjYpRBhHaceVTH5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MgsBf6VJJZ3cv8hbdVPA7Zr2fdrAaHm2iPQFDWP8Tadq4s2g8h8nFJtmUduLvu4hRKcUmUxAgnm5tjQ5biLGTWp",
  "key1": "29695M5LiJ9a2jAH2sXWNFEBEJmvk4A9LHx3zqiXbQa1KVPg6xtHwSdLFS49Dxd4i8KpDpWq4PtgAbzCBoaUVsYn",
  "key2": "32QcUkzjz42fHxFECZUXsjFU4EnbmfiWvjyWQHWoA63ujJ3AaUsdSDeScdBLAQCixEkqzVxQoPiQzV68jno46sjE",
  "key3": "5T7rLPcuFgZPuf2TTxrB3g4wcDxFcHqFUsDDk6iFmM5HHZqXFjNVWv4Y41fYj8pZmjZcQgxu7h96XbuxJLGq26kh",
  "key4": "3mhS9buQV3EWkrfNZxvSoEXchdPRAyFmQxEFciCmzTH8No1LZiz8VBH98Wd9xoWN9tWCLohBZeUNPRUuYHpgc1gp",
  "key5": "4foGNSJLZjxPLqUroHdSDeWfstAgMGFBZyFnM4afjDFighgaNtt6mspmmwEBt8siyAVHwFWNtDXyX5MAJiD26p9i",
  "key6": "5cohJtUBMTZg584Z8ru1PQYedwbnbQfyCV4DAXheiUenHR9u274KV3isqPaiSvodZZEMq7YKoiE58NkCUcAjdqws",
  "key7": "CWKgLrbVyTDAJZSyQDwiDd7wGDkn6doMaC4McQxN1cFnNnAvqQT2H5wWtFQ7QqnAndypXMdgVrxFBT5YZD99vQL",
  "key8": "YJrQyeuqSMW1CrTKsRCU47tb679k7dGAXoFPfEkRnm7Y4XLW1qjkPeyks6tgV95wUGSHQtnfdxPseDa3WhSAouR",
  "key9": "JGM1vV1MemtdpEBohLSoZogk5Q7mydBYCX2wbcoovBEkB3qLy69FjFhSu1kpoNuxqnckXF4v53Z3nACpVhWzEjy",
  "key10": "5w9Du9NoGVxEANrSCP5snTaymFmgLL8fvCa9Z39uKMwZk8UNuy98E2anzRcYmwxcbn8CCtnm5tQ9n2E5YB6DWAsL",
  "key11": "2ZZ4GHBia2wfpHPyWLYbeq1prAhsMDfdbNtghrZDrz145mVDcgNNPxzrCYBqE2LTNDJxStQzWggyfhsoygXNXgDM",
  "key12": "4Dzn3guBe8cT2Wi53MbT1WhhDahpuooq8Gs4euoWitEvYWgsP7Snba5QCkhicAQKRyyDDEv6Na4uvN1kMeXBsh6R",
  "key13": "3KzzDdebfkiL8MGao6YupQUmEq5xg8ZeS8D83v693zAFJkXqjax9v8oDc1ydZvLaXRBHsWurTDnBjsKUT1BcwhA2",
  "key14": "p1qYN5hgP5ydmsH9KzvRTdPJY7KHEVgjGoAhhGhvpVHUgwAV3gRBRUc8YrXheVW3jhWTrWF2tvP8xStnX4Vh688",
  "key15": "2wihgs75HmGy5cJ7HwSx6u9q9EP2ADChya8tJNaMmY5pgwQwuzJNYjqtBFDEz9NZH6etphon9pLoanjKTp3StfiZ",
  "key16": "5PoPduD9WA9rrGX7qLmPqRD1LxJ5teQJCXAbpvwNYebcHpxS1x8jcdZ3FJB8f1scMw6pvY6nuMfwA5p3AdKbFrqJ",
  "key17": "47Su7552it1yDUwQcLcuXxTVUKrq7Hdxq3KAjRXqDfnKWrmo6LoFFUWSdoWjZc5rRhbfarfPqGgoTDLcarbDeejw",
  "key18": "2cg1GbL6jkbLt5EJFdHnAeVDZBd2dAUQXHoos1ZAdPnaLrYdbUA3sN9B5DfWJkrmTapdLBXefWecTT4czyuxN2GK",
  "key19": "4VGrXeZCBFw7BwMPenTzExYbjTqmN44c2xGZZEHcWu5K7kFQN6TzWQreihCwep7f5VmUmBjsw1G3W9REixcZbVY4",
  "key20": "67p7UHMAmoNXRiYg75Q38s1gNgGryQPScDrcSLhJnFiZASMKK2RD1qnDcKWrNeRPtrp1zwvPz1zBXq4nvY4Udh25",
  "key21": "4t8PXrnAVEky51GMJntSYtKo8122b4QKsy6J18uGGw2m72AybDi2xyQ3rzTZ8aAFjWxVbjJrcXaKyS6dwoGWgaJa",
  "key22": "2fF4CyFpLqUzMurLfFBiKouTUktW27Q13aCqh73RQ9k812y5uxpJu2gHgnKi7WEATHhTeNGvZ8wEwW1KVVEoWhNa",
  "key23": "61fTYnhA3TybdVPCyDf2ki69uqCh1fdd3unJfgb9XZzVFyFxEdYNcnjNMQvMRtXAgziWcEhUF2z5h77nkPfqq5pH",
  "key24": "3ppz4wzSEfQFuYTwJ2gWUrKYH8h6csPzLhUs6vmdTepPdiUnW7VPanY5RNTCkyf442N3MMnJ2g2wtYC18YaSMicV",
  "key25": "5DCQBMx8Has5SoD9qEnRK6PtjSCodrvPvxnBSoUgUyDqybTzE427UAijQzMbVYx2c11RATgXdDh3sKhxpZCodnc5",
  "key26": "4agqKCq6Ty4fmWKXrzvxSVhvQDsPqPC74KSgmaU7ue8TKZCeeeh5HErgD48YGGwHUmsWp18sS5MdNhyDP6ULYZ1B",
  "key27": "24NYLoNzxaUBKCiow6ZsQaemuTxVuwAYN167GUothFFRav3eoKTkA3Z8zVSkdq4gZE6rSKfw5eYAqcMtJuKuURhb",
  "key28": "T7FvSukQefpY4fUAVWPDusPocKJ9vqk1E2XpGmDha1N8toQcbamtos1WV7yPiDPwVJHRpfuUvAXcg6mC3gNGdKw",
  "key29": "2rjDXp82fh2b7yGHtQmGREF2ZdLRbANpWxaSk7Ut2oE1HCRn9RpAhWaTYbF8qXQGru6K7bhyXYhpHFgCfTb5HeeK",
  "key30": "55PF9kBovo3bFbk3kLvKTVMiwadjkeeP8K54ySfoz9nYAMomGJPdy2hn3fJ4g96U1VTm3hqLtyavPRVbiKwuNF12",
  "key31": "4N21G944KfyVSFiaAP2xNTHUyJ22edt8grtDx77ekYsYHyecvMzqghG24pXwRPF9ZZ3wefZ7Lt9KueXqQwfbrZiR",
  "key32": "43Q2EoP4knX2bDvjXAyda14y4fbePoan7HAJ3jujgTp281SLQMofDx8wwSZzjguUKfSMa9BefBZJPuPXSiPYvXfC",
  "key33": "5u2NJk9erbvwrLi7kfpxsedsD2jcaD3WK2RRrxQspGxi6kLi6gEd8vfTvmjr8sCzDy4g6sQs4bpVDjDZwQx4Dqq"
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
