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
    "3NxB1sbL8SSxTCEFi11TEurETTMnAUCLv5k1meLFaPh9cg6NXu8D2g5vUvYTie7hTxu1STwHPY3XMXWGNLFiFJxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pv9i75z4CgN1uaae7sbcCDzcmHPxazmPwYFtWM87kPWWFCkuukFYmZC1ivXnYbd8LgCdLryTZPJkKa1ba4wNyJr",
  "key1": "4tFqGfQ2yF5uGB5csJaV2Me1z5uqyrFf96H7XCjmmW9Zq2vpiMMxH9AytZKnrAJSULNAUr51FggnwCwg5FgXHd2U",
  "key2": "dTjjfXjX44DqbQmRKPbxMQe7NiWD8GzbpmsP5gEWmR5wJp7A3p8opuLhFX7FEjZC7KUydmTAANYL8QMR5axe6Df",
  "key3": "2hLqH7D29cNxhK8GgjY3rEgN48gbwCTdjbsnzfWikhDx9chd9NYpJAirShniE1qXw2uPazzYfiwFuoBw6QqPbhJ9",
  "key4": "3zAJviLeYmwfYQNRxfzkFN3aCmBKKHVBFKCMMt6FrdPD9xFQgfYM6ENRzyEQYshjoSBkKUtJxfthRufpfdd3K1RC",
  "key5": "MViWkKzH53vYhUbv229mvCm9CS88TnSsnLnBJmzsUNDBrZu4rExpdFFvX5EBiaFpxnwuENdekkaE6xQbZhEdaM5",
  "key6": "7oYysn4qnc7G6jWdiYsXg9rsVyDRzzn5kZueAV6GbcBGSdgu9AYTEAvziACCb3LHVXgLYyrKFms1bMf5HHbhwYJ",
  "key7": "2v1JJmckGrLQsKPH1TsjiPomfuWprhkztvGVLBz238JJ5tLqtnch9Xj4iyTybiDinswaWN5rMn9FwZyZCBBCrNkE",
  "key8": "2brNhHjdZgN8wboESNRNPBrzBQkPU5zqrLjYekV5MJi7N1aaoJ4uPsnRNrRdNGZqSDAiUKxRhUoAvyfQSGVU2gYU",
  "key9": "3Pv5RK9jaPoEknj2BRHRTP619EBFZ1uMo1meHTWx4KBqwEyXLbqcoyAB6HZmfUbWcFdu81xjJ6SW7ZEuspHzanFv",
  "key10": "5gc1Dy5YFt9EHf4DmrK3o1sESZg1hnG7QRHX1FBz3yaiCjSPRrhJ4sf6hgqnihrrtA1oPM6U3adBWHBdSnPn1t1e",
  "key11": "xHUdWiAys15iRdTUFeN4rXWo6innMCGq9XBxjG3JCN31FFY496Xuk79Pvj9Za4dCNrtgYh6RB8DWzX7sz2kkiW7",
  "key12": "oKSA8YUhmwqXXpzaTwzXKQ3wZhWTKVmM7ZBWGkqZCD5w3wyYBxFgk7F1gwVrkMM4SsXxjXGGLhDYnmrg8hH2Nz8",
  "key13": "347DVQYSuQhTGTzdYAFHuV3sJFwfbjgrEHNJtH1eW6qaJAju2MFpevRZ1VgmtGzLQhDLrPwuA57oZPH2Nk6kmahy",
  "key14": "3jqBNkcgZGgWGfFDaxE3kfoNfSvFLjB5PmCNXFrFJpQv2mubHxMyThDC98ctsbG5AGyzCZeGkFBXNbkAJN1SSwh4",
  "key15": "23N3MF4T8RMoaoVncuPkEJT1Xmtbh9n74qFYSd6raYq48kS7Yvz3fHXZKTdvPbHnz5ZYH3NjvdUUQjfuiSdaTJVJ",
  "key16": "4nuqx5o1zYmqTZQTtpnkU267Nm28SPrtTDJZ2T6dGGSnmeLAdYoBdqtP9p2LvcsRwjRBvU4NAoNkeuiKZC1YXRTD",
  "key17": "2rjDV6ijEVEXVbju69E5TDCnCP9PF1GLHUzZwWqNYJKXgfBfRB1jh4CTQk2hZco4CnaGEy2KaiQYZR6VVhBXvsKV",
  "key18": "5v58W1dmdQXoMmvK8G5k7RhJrHcvqJttUfeBHYnTCWR7MxnDMbQFUht1tFtTTuxY3GSJcWpPqcSWaEnY3YB66nRL",
  "key19": "5xhhe5o3zyN8H5aNMmFdGxTQawQcTNFVEnWWFtG8JXpVu1WLr5wrqWbu6sSo7GaQ5Cu8JGJD4b1WG5rgyDxgaLrW",
  "key20": "4vgZz5u4D8fW8kZ5kNbVEXs9ArPmN95s2DDQ7QeiAWyjtoxaHRb51W4wFvfnDK784tJvxkw4sF6ggdv2dJcERKTU",
  "key21": "57xgaKXuzFomCQpK656GwUmkQdLTJpiEimwnDoVMMTaUirqn5GMzk2KWzQM9u9cHm9uUuKJHiiW1RNw8b4r3jYrm",
  "key22": "3NY2i8iVkqA5CEKin6kfsa4cxrq2A1AZ4HYiXJHJCPjyRC8x77gTAEe6vHsDRKhw2Rv7maSStakYoEnhdLfPVjFJ",
  "key23": "Ghxk5sVhXNqMWVLxVpoNTjmv4VdrAGePGmQqMfix2ATwHPtd7bJFfeMAhGQC7kYZxoaCQuabvNcYd6vjLHSr5Uj",
  "key24": "2AYVriFeMbULkdsnWfjJcSQomhZHPsFZ56sEYPDr3RU7YQThGKddqtCqxJpYpgRbdMCb3kAdoSQGKcZvG5G2PqoU",
  "key25": "68Paxa1b6PXz1KASaho4fUdUnTw47BTkEyEkRyR2RZCf4RBuT6aWzzDGJ9ZwcoXXbhprhhZCncsTYYcnbXpidim",
  "key26": "47VccnpQgTtk2uWU7eRjDDddvXN2EDGnzPMJQh99Uwja7tY3rbfNij9yabc9iE8FLrsmQwHSvVAJqHE1re3JxT2a",
  "key27": "5iwKH3VDvfLCvnkuMeaZAECHYAi6nbrBFy5EGbpQPcDcdo2vmjiBKssg49fa8GhGHSn7m1oQMqgqVMEZfCNaQEb4",
  "key28": "BL73hzapz1Rg2XJhHQ3bF8k8DenHtDiySh5vsk5x2vkvnjfN5SCcaTW7eEeN3T3Kf4yfyZX1eFngRnfpBPvu92K",
  "key29": "2r4x9gPc2NR8xhCVy9RkfV8yvmCNDXF8hmuZyoubMfRxc57aLntyZT2d9KSUNmKLjyxi6RCtauZjEd4944BUhMsS",
  "key30": "3ayw6kKhjd22ML2i5h9Ajbi6grN4EybbnNiTYwQCft49fPQbHKJLZwqPc7HYTZ1aaRQXrQwVU5NbfMV41a7BuCUA",
  "key31": "Hhie6pmDyyJE6anrmgwb4ggGtywACLNtWS34tmSSPi2hvAwUeoGRHhCGAG7EHrABkpSfP7gtM6bhW14us82Moty",
  "key32": "3CcKUNxPtpT99ictmFM1HrDtvtbChPSK6SYLFuN38qBk5QDk1V21vKPZ8xgMoev5KLNnV9FToKk87AVHaLQyE4MC",
  "key33": "4AqU392ruLEcaEAZuRPTnd1Q3MkciCuHRjnZrL7Qz12VXBzsjXFWReeSWNQWE2chthKT3GSPRto4ucynUzjzkTXD",
  "key34": "4rtBYHdWCK5nnhgiXAMPjtnLEQBZoKn3g52iUGFs9sXBukUTwQRs2eQoTeo7TB1jzkRZGqMoqv2CzVCtspLbzX6y",
  "key35": "fiEtr4wbEhNykYskkxvjyjbg92EVfCpsWFnC9iePNj3tvZZ8sYXW1YNXeTCtFtGLANw9WUbcZVKfCtpDjjpiZss",
  "key36": "21Zsvqu9UfDxAQAyLhTVB8xLkG6dtRT8tFdQuw1drrpbKV9kXuUjHdFfJGBuuScY2spGpUxJQqSANkhEhZx21Cuk",
  "key37": "32EXjwh11k22xwzYkmH8gGZqL1rZ9BJx7DejoypkYSnCueEbJ5YTnfq9MvmqpoKara2RMC59W4nsEF23b1SZBS2E",
  "key38": "4qK7nsxpjGVkZ3QJ8Gsd1qYK1vG4N9UaQyAXxH1UhBVaQqi9bweKPjj6NTcAXarf8z3uA7DAd1i8Df9YerrYSr9r",
  "key39": "2YwhjzXW6TPZgJeqgcRhrbqDh2bpvdCMGnhdLEaKvda6prtD4ZRyiydYXiNJHteU2xwL4hWmsXRTYsBufJNBHZmz",
  "key40": "4A2jBYAvodrtKVUZvBDWp88onA94yiMmVbSPsLRWVoWCRfCvmnHsggR5E7oEwb6FZWhPCHEBiRMQAyJzR4UfMvnk"
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
