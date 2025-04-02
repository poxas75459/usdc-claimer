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
    "WJUaBuUwKa2EvHju6vACdobEbzBSwQtYHeUa9GTm3scUx2Mzv6Nar8cPh7bjw8V8Xr7LQZAQA2P4npWFva6Xhda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48SRTGPnkE16kfrKnc8bjV6E5fXXKLS9xhyQ15zL1ZjScmXH5CsVKSwp4qNri76qeUPbPCHpMTQ59Psg6fC9Y7gM",
  "key1": "YiR2H3uroSuL9ap3xAQ8pc5nQGdmJ9eBFXLMRSTW1qEiCPA4dDmhkWQr3PQXZyTuXyJedjGiYRSFMzjYbY3MT2J",
  "key2": "4GVnXJhPCUW1Lw5p4S25gM79zvd6GdXNHzSTyjv6XRE5CjPUoLUWCQr6KprhCdZ39kXiZwYqxopsXuYdoaJc4LxM",
  "key3": "2CifuzP3RJ18LwzmEgZS7KT4jYjjLpLkKMugry2ZasdntsavgQFnwgj4bgLbcc477p9siaezATeoSpRRj6YDwfyN",
  "key4": "4z4bEVNkEzmJv6S2d4PjQQQUvJDkZ5FFkxjKJPsZg8n5RSkKA3gwrkaaiZhfgWRYqBNxpDsHHPACADAhXoegkYc7",
  "key5": "57jP7e38Shdihp6J4rihbB1KdewdK6U8FPCTF9RY4uR2LssLhncVXiRnNPUxX5tTC1Y1up1HxVezF7RLBbpL3Pzn",
  "key6": "45kujgNVfCLJm6Tzv27unTNZa2pxo5EdeqnryLSUh5XswuXQ5EqnDTgd5kAUDzEzsH4NoJQPrmePweDiNU5UiNTr",
  "key7": "3MrY35SoHtZNxEd91nnfK5svtKDW3Umt4jjF8SW1cKrZYsZBs5sHoByN3D3PhkUsDcMP3cxqNM6x9AXuefZPhZ2G",
  "key8": "WVNx2i5dPgT2NUF6JfXhkn54gyJ1vJABmguoutPYKtYJrh2WyVGMNAUkYfXkHecb3BBsR2bdyuCuJ9t8WufZfwd",
  "key9": "ad9TKK1nK5Z7H61HsfUte5SEJ2viuY1thRmmzsASb2o7aVAWFosFcXSTe2v3GZFMVndY8mRhUcci3u3Yhj9nSsW",
  "key10": "4JbToc82TKwiaq8Kx9UARKZ4mkdNZWuAFj2ETKYeP5K55d2cAhSz1GZukgsM7fmH7APP59GwZVqMn5s8ZVPWJ6sj",
  "key11": "3JkRDrvTtucyHJDFUhCVfDqgXZhLYm5HCpAYJdj8AXkuCuShEzCJZ24ZM5jXzJ8FNxzgkrmPNL5fp9JVYbsU9KCV",
  "key12": "2cjptM848AnByJJo2HMxryQUXvxn7jCsTnUzYY6mRGHMa973cRMMAgGWraGTd3TNh6MG3U8mEi72jiznxd6bJHpX",
  "key13": "2yerSmGA2BCiAfsYpt5ygvLcHbLMhRqAnokSsxu7iebqkLF8VgHyQexUB4RY3u8rzyqTx4hWDtGrA26FyDbn56e2",
  "key14": "4nY8eJ2iU7uAJBXQsoKSGzWshhvmVa7kJY7dEeaZbr7VB2MpxRUF1feWfJbkmeAGUAV8xN5EtXUcy6f1VmT716Vn",
  "key15": "4ZLJCaTh9CY6t4BJai9esFcYcifZnuWQGATXWTyRiiY3Dceeah1sKEWZ6jkxrfcv4GhbWnMnUMFY3eiV8pqhcsAP",
  "key16": "E1BGF2wnEpWhXrjMc9iFwXbNL5ooYsa4VTUbBBUNRnZ3WFH1BNZyDAywSn2jaSeQcEhdLtLgxtRXeW7toCBXfTf",
  "key17": "3EoEtuVUHoQeRTj3KRaRa92sA4PkejEDt6KcM5K5usuVTnkdB49QUtXB4iuSUwXZUUquNTE9zo9c9BiJHrPLZEXN",
  "key18": "4AFrCjqszAXYfkUwwaErGUCfDVjqCKabVA4RJowX3dLLtGtSZbWZauktUvzwy1jthvwWEir5EohDGCtAQXESu9EM",
  "key19": "bEQ5bJrbPUUjvCJjJk593jPQrf7zEwRTsDRdW45BYiJp8WL6irqXWvR2hCVxr1PfbWFsX7KYRpSRHz1FTk7RvV4",
  "key20": "dtW6xJ3xgY9jzvTu52KHUJeppF8WfLVq4Rni6i94RURwthqYjbGWUdGRhV4sTX8Mqdpb7tS2H6oLj3yivK3rEVQ",
  "key21": "4KfMiycW59oJNEUxENpERNWFJzwrkciKrW21fCbkR5ezjzWFDUsgeMkznFhmu3o4sLZYZn9noUQyXebfijm5K6J3",
  "key22": "LXUydPwT2ucEnGtVaHFPacTAgrQahWLqfb56b1tZZNFudZYdvHHWkghhSMKEb2mBNrFKnHGhp9hukeY9ByaUpqH",
  "key23": "1uodWV68xjNRemyvetopMv1Fpv1kfUvhq8XLeeHux4pT7RVMD83pJg771W7L5D53xDsofMbz4jeHbBd95BiD1mZ",
  "key24": "3Ng6qPvjxiNsYfY9ypocKTj1s5xAQMDWV9vP6hMWUreoqnAznG8fBrBco23mQdZbVxyPEh2cdTvdui5Jjos6UHwu",
  "key25": "4xUAkTVisY6C7Jzy94v2yqF2GeyRxkMHU65XQ6tPz7nqoMreTgxGqvT3T8LozZSXW57jHPN9pxFrTEH8qfNmYLA4",
  "key26": "4PCrAxS8Rpxikj2sz4MRTW51HdBZ5eLcbrm4EJ3tzYmFQdvbSEueqaJwv22PoT4XnTCG3vtS9wPj3vBToW2aL5Li",
  "key27": "5Mi9yKQPUsM3iHi45KPMYp2wPaFtRnPpGWtG7o9fM4kaKjH2Jnr89fTWD4nHx9H46YtUEH33sVce6rUe2evCJZWY",
  "key28": "3XmvY5KzwokpUvFy5zYmGJTXXfGZ4gZXnFPXdd41AgKEMbkVEWYPGk6se9Z8bLvykFR29EH3uX2TLsmCdU9wH4mn",
  "key29": "29SKB9M66EgyZuEcxzFLpo8D3joWdo3LVMPaV21hwU5BfxmaviK8NHanJ3t6P7JRS9gjueF73AWaph6jWxbhvDjn",
  "key30": "y6SZkkJ54k99Tg4rpUEz1dqY9qq6XiV6oi3jkrcYfVUJfgx7inKbkRevsnc4HHE8iupwLJJaAKSWh1XScY5XVtJ"
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
