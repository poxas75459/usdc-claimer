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
    "Gg4yANnVi8zAPhRaXum6pyUeFMMuwM5xqkawxz9ABrUTy9zJDaM23RLdnbNhfTRUsumsSFSMJ1D9C2k13HPS8SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bRpgbzHiCifeE12ic9LfaQgamrhD5rpwbCoYRXdrBYsfqC2ePUT6uGamnAv7BnTHp6vBGhmFpWhCyMNo6ju2N1x",
  "key1": "4xCZRhKNgu19k3CgjzKCGFZbWE7zahyu4U4jt1DqB2hHt5p2aKGRg5xbZBxLniKyLurQvvPNYc9jr8rFc9Rg62BT",
  "key2": "5LxWp4AermfCgZxkLpdpxoTj6PCuFCqgUUjE5kZ6C33pTL8Tt2dyLzpkY3zHase7HSZGKs1u1L7nFXnLjhGfD5HP",
  "key3": "3MzQh1hkk2hxTqDNVctiRm6SvUiXU4Jp7bHWBs9eyXjN9DUy9hWF9Evkww4bGCBK2iGL1VFNUGnAVYtFSAZBcAdG",
  "key4": "2NsX41FSywpCzpetxexrjCjM15dCsBChzzQCeAbpjrzKnGycrF23LWSRJQCFSouUAuuPkNXgUkdmEUphK1CUXsgT",
  "key5": "45mJg9ckCjs8hQDhMTgj17J3TAz6L1UWWKiijqY7daw4Qvsnfc4g3pwKbVhJJyAYSYr3v8N7ZPXtAUQD6JokZtkg",
  "key6": "3CagFu8Ag9HdfHLKqVTLaDLRPC9ab6k8VYd76HChifEsDd8RKFgQzoUJ2gi6hHkj9MatM6n9Qp2gouwExADvsSws",
  "key7": "5hoe5T4NyZjE3Y11UVEVtAnGvZmzywExRkyhwvg6Mg2eCVY4m4HLHCn5nBhnarwNxXz9ToiSSZhw1ADKS7DRaAim",
  "key8": "4eV9nNxbVnYXeEFK8BHKLGMPrPsQUta3bx1VzSK9CfAuEM2wXqoCVf15ggiNwPknD4qpkHRwpWR1dtsojMs95SAq",
  "key9": "61LC1iwWAxAyMaE64amWccoeZABre31jrGaYAovh68nbxL9odx5qSzxCD76Sax6e1M38XTL8cF1o8xz4YBjLL2fP",
  "key10": "3ifXzTnby3BodY4eJ7EgPWgwUfeU2gT8duRSu5pL5v7qGL7geauARgpfrD2zYJNJBU9Wiq1Vc16BUJPxTs1ZDqqZ",
  "key11": "5169PFC7EmDT9SnsPpmfhUqVF7AqiWBzVbZDWe1HEwe7KeahaWvNeCJ8NgzgQNrNmL7kyrZqkGUMikm1gfEucmT3",
  "key12": "659Gsu95cCrHAaXrzegU7Epb97ksBm7upJeeKUCDDXzfuZEbm8CDRaXMKga4czuzBdFScY5fXJ9fyjiYP15qKQte",
  "key13": "4kHidaGGEY2mh3t3kriRm6Kq89jhS5qtgbAGbRtMjtVwuMVbWVPBVPKwHof8hxMhBYY8PW6t77S7jYLWBQ7ERUAE",
  "key14": "qAqVVgsE6WqSw2Wx64aQuXhdQdRtt8SmbzoC9g4WXWDtdMJ8AjUxrFZ46FJJca3FRp181nC9DNerMCNYbDyfBdN",
  "key15": "1bxg5uD4HKkVPchspCpCGUNnemFv8nrJrZbaUwYVdgFLT7SWX5Vr7KFaDCvnK2BQjqEg3pr6CtsPxqu5VVmhNB8",
  "key16": "2HB8SWKHCmKinYiByZN6QKugQF8kuw7vrPXbrFRXAsUFZ5ykGaMNrQATP62XaFvqUzRiEhNGMXK667vf1b9gSLKw",
  "key17": "4LCBk87BdZLKKym5UhrUmEuJ69A8mtxGYDZkruUuR2FuM1f3xLEfjfe2gjU3S6JuZ8YBq3AKdazuTWxvQJTWXU7e",
  "key18": "5uQxycevwX5nqj2MaECHRp1Z8TqrJnkWmCt2rzYS5hXwJ2Zs6j5G7XfgDAVrewYXJHKJaQ5H9MCnfFC2R13tgdhD",
  "key19": "5EwkJLktGXwJzKgdRL1wzq7aU98XxjL9TanbYa77MstsvVw5pRH9BEJhnpHwbKLscB1T3PAsRoPkJ4gUV3n2ckBK",
  "key20": "TyrDefGwARtHnr8tki5n17yCowZ1Q84XW2Gg8jQtVUCryhvwVpzpgaMYHHuiqraKKeXpbG9pYtVqx4R89g2ukmu",
  "key21": "4ueNRqT9ucViEWR2J5ixPzKk53DupSqFjzNvxveN4Mz1JiEsxBramSnxmTKeWC9pu4dSjYJK4Sc5oDdYM1yEbXqk",
  "key22": "4XcMCeaCXuSGxTt3N1sVrvEdJNBkxgvpvAeHwUNXAvTHGK97WdtwDM7KTdkXRkh585JYnCC7ZXqZjSw9bt2Mv7d6",
  "key23": "36wh3VGVMKvYVbuoiBQ5Jqi59topUPscgY4NR7jpcoEnyJYGVv4RehVqENevMsGnfbBTd7w2BwKf1vwEJi7CwgkH",
  "key24": "JErTMfeFVChGUMrGhmfdb2kDJ2hJoKnucCNiTbkSX5JkYPGhHxHD9CJ9DDf26wJ9Ut3S6S47KJwDhWw4C19RQMZ",
  "key25": "2kDCyvBTXTqMgMZUaWuVutrdHfnxQPyyPUutcjUYwQkdCRRG5Nte8CqE2BcdWHfqgY4sjREYh3zQcCJQaSiEYono",
  "key26": "3zHvTaznx67W5aV746Lkwj5AaAaFNdeGKzGibBefLvsGWoF2GBp6dC3mYKwa4ssf2xG2YaWy827mS6c1k5yRwQQc",
  "key27": "3vAMYVR52bT6ydrMgxa4q47RV2hSbHRN1Yt27J6E3WwDGR7wtzxjfZ1SJ5Ur2AscB1aZ5rjP6ikENEhi7Ur9wykc",
  "key28": "2eXruZ96vECXPfJuj4fCn3JDFLsNtVZBaBFRhXpcFhs2kfSHxE4KZM4hww76hpLZTKue2xUBcFvizqKUQUZT3EpX",
  "key29": "4B9TRaubd4dP24mKKZqVYT1FqrgQUmmDbQa4yVajDX5X5yfFaRBz2bzdTu6GxMQjLR8MMgBg8d49WwTmsuFTrtBs",
  "key30": "q6mP5xSPGN3T9mFRp23WpL3qRU457Ks4coSriv5J5TJ4yKwmHS4qwzZpDZCW95RRUTWn1zM7ocJXn6V7EKNQ6v3",
  "key31": "5pLYa9DzZDwcZy1fveJ4vf4WvA5mDyFdg7joneombvthjeNxTEjhgfVg4PbFHYDahkjE5PnHvLKwQsrdcX9kNNF",
  "key32": "26ZJG2FitjhTGqXhV4QNGy5rPqDsnjEqNU9vmbNZPME2wKruApvz4Ax968WA8f52iTvdoMFWsE9Di38GwFB7zJuM",
  "key33": "jfbkimjGiVV8uDHswcdhDvuYofXVEPiJv4Ruo9U7UfTCeK7irwZFxxM74qcXmAWXYd5YiLtbpQdnjYcxhQntMat",
  "key34": "PNoCyA12LBkp74DqPiMneaKvYGHC8WJz1WW8Lok1FtQqAxyf1WEYcMcNYzeb9puj54vfjTvHMFCxd1Z4BRrW12B"
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
