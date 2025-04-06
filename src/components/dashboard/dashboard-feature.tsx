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
    "2MZggypxRzXnf5SpQLML3KF4qwYJ248zSQkXjp9EpwNrNjBe3CtrFsGdYvNVN98hw2GNjKj4HD62s5k3GmWHoQVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w72qGuntaJjBuSG2DiLdg5NfhicGwNZc83WNuK69NfUDUcwj8crQwp8YLhVURURTF9upL5uHNHpyyUexjnvCR3m",
  "key1": "5s4LA5cnvGWSSwRGL9AK3jATVdmiGLXzwfaP73bBtkd5jNrRFAGG2VrWGpTgK6Dk5EmnJUUfzP6EKLpvytFf4fH3",
  "key2": "3fSdP1y1MD9mGidZVb23UwZWhN8dUNQuQvFLS9u76N1pECsjDcEdNKZT3NzrQ1f8qTpQpwFp34wNTewdsVT8bA88",
  "key3": "DKD9oWamQp4XSQShJnbHG2gZrAbwzrLFo6ZqLkVJdA3WHiDchxQpfF5huSbPZmHe1zdGcKoyk15UxyeouMC5o1t",
  "key4": "3j5SeyYfDF5gfrUotrPoy65yGNGQdf26K67wywJNjb9dmiQzLMUJ1bXVFAqVVUte12aL6Yt3jGJcVyWEwcE2JMpB",
  "key5": "3s2UM4TRPLDQ1xqQaTnpktgfCU4LKC37VPL3Ft4HgXW39sYidfnTQnGTcK2VbHgSRzYhWWT4QiDPrP55XPzTuoz4",
  "key6": "3tdrkHTfJEqoAji9cz8CG7z7ybGqnz48DFzBJRgiyg4R6RXFqxLsT1qHbXL83tDK5ogTKZ5TmN1LJjtudjsB5UbP",
  "key7": "2hZt4inwiE1GGt1qUJTzHMwzdfRybkas4z4bTa4eenYBNuAEmyK5v8aWvgf9izm2kDsoxJBGhhEEZfeizRyzugQX",
  "key8": "31HfdMbwPyqvtwaULhff1ixmFAkKW7Q4yezg9nAoneUvoH1UpgXMpbrqkdj9LKUasD5BDNKMSfxqh9maV921o9Fk",
  "key9": "XNnoU1XTJXxvz6bbQnKpMN6yd7qceVQpSotT8Kxr1Ch1fMa42yksUThG38S5iDsBobDJUKAFN7fVYojepPKtdUm",
  "key10": "2KJmQDCHrpXFUFr7WLhZD9cNJTAp3agAtwxK9xM9oe54KXWr9Fn2jkzjSuicAwfqxUoEDXa22Gs3uJR9miargZYi",
  "key11": "7UGD8k1sYLi8VTt68RJ4ToAeaubC4jGFXP59YFnp5zoQqVa9FzWw7m3tLXVHqWVQZwRcZrkPyYik5xfXQ7XCgTT",
  "key12": "3rGcH4amkLpe2xBqpwGTVWUaGXDpbZLLfFrS4hLMAkMv5GG68sj3ve9LYTe2L96ymagscCfZe9gLRWNvqsLcrM7v",
  "key13": "2G4jdtZkkNeoVg8qbjb8wGZR6bFmXYz97bwuNi4SLM76mrUkfm4dB55cQjj5k6kStkys5ywW8d6TCy7QYGQAaG9K",
  "key14": "5pKbPiN8aswP3WfkumBcE1fZdSiLG6wpZDdosnbubZAcFK68ViBqLqe7e4i7s339ni4y8VvRATh2yEtER6MDmgKw",
  "key15": "4GUAQ278WZHfR9bdVjYpCwN4sV2j7yKhZ1VdZDLhXNfUR68ZQXyvAvm6MN6fHi6qD625LNdNe6MzttkouAQ12sCU",
  "key16": "67L7sDbkNQaycGKdFtnD6jkXx1AzCztSA3dxFn6h9zVL6NA8Y6jdMUUbD4fbdnLBsbRS8FKz6duqNovgvxzjG1Ui",
  "key17": "3NKvYuqdTRYtPt9TGcTAxxzRPeCpHkVKw5Q11M5C1aWQ6WGVBzD3Aq6MJotd9KLBdnEoh3kzvCNhv4Fpxr2pwJD6",
  "key18": "5VjeQHTZ423fsyxpDVzhxtMjKFpatnCmRUWr8gYtuJAtkj8Sj3it5TLboqLfqCkhFu1VdrQFFctNWeGr3GRZWXn4",
  "key19": "bxa7eT2SkZDvrUcFXnoj9sigX9Bhtjv7kHingwYpY3WdvoWLKTW2raCGZpv1KVFxqnPKAGtPLK7bLw7uoWoMY5y",
  "key20": "TdqxLF6DsHNzE3rxvWLcHeeSrEcDCG6MpXF2TkYCqgWiXe6GvBvJbHGdkoaJkvejiw43uxa9ir995KK6M6tU1oK",
  "key21": "283aRL4N3zsKznSvNXvsnATnCZqfRC3fcri4MJP6WyEvkT8ViF9H3mRTj2uLrWW9xD32DrFduZ3Boe4RBkG6otZS",
  "key22": "Y4zd26oGS1YvRM6BjZcYsSGP1Pjs7cEZZCbe1CAMCd4QsqAmfuL88t2Zj5fE8T8K9CmJT7MA8vG23QQHvS73844",
  "key23": "qNZffbYkMv9WeLz9xL3MSaw7MgB2MvajfwABiuKDKmSt7fsMVGKuNMhEWuke9drsDZJvnfiNkecKGSW1P59Pwcv",
  "key24": "38m3AtoBdZnmajuW7fmeV5bVcXnMRwbivNAjARAvg4yoFZVLgvvM3c13dR17KP3RjMuqr2aH1MrKdkP6v3RHB5Mq",
  "key25": "29ZA7QndrjLBsLzQqodm6iYSgDa4hAqNnBUMn8pRHjByFc8Pf1NpWDFDZMm5RReYCHNEY35jodeQsJHieXsHyUcg",
  "key26": "QEYjPtBp3ujuxXJKfSUWMdbT7LyZzwCMHi3pYN167wXbJEEaPTH81Ps5sri5yutKzawouAU3ZhbuhVGyPs1sBpY",
  "key27": "2Ni24LCYmjF6GHzpzH2t8YENhAfyMCuxqg3EXLsJdRWFDGpJ9jDEuF4aoKRq2vZyLXXEWorKoaBh1moP7r3ep3s9",
  "key28": "3sLCks8ZV5N7jYKZKGFMuBAJF6HJtKzs9MFG4RDEzAuSu8uigjSmBPVzz4YXeXq3tatuWh923YgTG5qWeUJhYtF9",
  "key29": "7m8DmSRUjxW9VNYudpmuzZ5BgnCnz2FXT4z5VC9pgtz6nyPoLVhgAwzUH3dGBsfnY2Cop3NQnCYcvR4E1PhEPEm",
  "key30": "4mffFL3K2gBUedr1BTNwi9G3NmdqoUN8qmVszfMddC5heXXoGguvqZiTMPmEasXKJ5bt9A2JL7mhwamebVWW6Nhz",
  "key31": "4NqDurn8Qwvrqd7kVvucmZeEZ9uu9Zp4W7UPLTszqJp36odvNGmeMs2bSutUYjXXqVaUBpnms1rpLYFFNJc2pMjK",
  "key32": "R8haN3PveXT4dJVvoz3kk6Amjg6F7N8LdNArqeoUBxcWSbDiqjMhhgmgzMCUYisdLPQtPV6wpYsXyGPGbt6ntmp"
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
