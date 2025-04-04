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
    "mmMqnwckPGZx7ktyHndgq91cZnAxKstMHV4PABrjUhG6jgdbrMzeuiGFwhD5kueBLhgXsZ8o36drW5FFXhgW1yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gn5J27n7rc84FdNpHha4eMDFF8Zscj8Xysm5mFdoYsh2xhFs69ps1vC1gXv5So35zQGxKGzBAdVTDP5HPsWBh9B",
  "key1": "5b4rLFvCbc69UGndMundUS3NKUN5MzkvbknxwT3T7N9jqNGVqziayDnCzkZh7FSpxgfLEXgPY7Xah4N7p2m9Maxt",
  "key2": "42unHxMsjwV6uLnFtC1FA2GzTCu6vLRksFXQZQUFBboQ1uGDpoSKRsML2DtribtW34P6BWxvjjuLaDB5vcoRvb6R",
  "key3": "5tK4cHNQmMvd7XSrJ9jQtT8S2Aye4LdoyWG1BmgH7cATRrXNzz4vhQmjELeMtanhMo1KStLHrNKt3jguFiZJyDE9",
  "key4": "R5VFP7TWH62C9PXRt4GN1B3uk7e3Z9Z8TVsUSitpjwsN6JyCVVbXaYsfmJtvDfTHgCW3L9VVmCDjv5CqXB5SWVD",
  "key5": "4CzenKhoDrX35GD217h8qdbTyVCeQ17RHKBCDaFVhNJt2JV1kAegWjgoxaZotXwtY7wwZwzxaPZciHSjY9gsTPXn",
  "key6": "4F2AqLtEHPh7np7Yh3Ed8XnddHNzp7ZtHtqQYeyccXu5pFocuBoz2xryjwge7CWXsmAvxCQckkL2UjAPqwTYmGdc",
  "key7": "5FiSTUMUq3eKWEechp3zUnwGyBiQpuiNRmP2aC5U29LBfLhi53p4WSe6rnp2wWXLXFYpGy8Q9JuFzEqGvGQGUsjV",
  "key8": "PFesao7cd7CGwT6nqrkZCvnGiZw4EU9Kh5z4DGrBMeLR6EM82ZwXFpdpknEiC8NNJec8i1c5LpWyQevUGLbybDe",
  "key9": "2toVSxP3Bdjc6NbP17pV7Lyhet3U2Kz3TpHfKE1reoBHSkLsC62TnZvwYngyavyXS7fg1FaqpouspcJhUcmoEyVu",
  "key10": "4oJ5SicFWH5E2RZzy66Tmqn5vrqL3gtopvXUQrF7iDS6hmPuhAhJJn5nj2wKRU7YmiN7DS6aexDh7PQfoRnPvyhd",
  "key11": "2WgejvbJ6j37FJwRVFdD5hCNoXgon3saxUgwBLjSVbS1m6ePYxuG878qKPv7ZoqvdhWfUrmWnDsKYTBEqRoKJ454",
  "key12": "3Q6M6vpk81ZkxKMbe5HRs2sA6deqNuwyi5BsgKNeEsU4JJgke9JKaxK9fjyahGpGeAfk93MnwCzsgHH7cZ9HkFQ",
  "key13": "3qsTZqgLNdiT8pwBYDpD1o4sk7s5u7GnHZAnxcLw5xcE9URTjuX5vweTWvbVJQ54fHbdj2tCPUhmeEqZ4T7aptbT",
  "key14": "3LuH6HeVJhJGJu4DbTnspR5bn8cjEFKJ1kDn5CKmv1vUVd7eqM8kGonAGEwDjagECxrEE72UfQPr1VQ6E2wyeGPg",
  "key15": "64AUq8N1f1MG7XThbgxmgLjHTJyR8N4bg1hLUgGbTzu4rBbZ8cTwg56uTLEy9yzNFYP6AyY5FiYVPPcwv5zyw2ty",
  "key16": "my3PuGHrAAEpDqPRMSmwk1MhzmDPmLWF3HVsyQfbMv2YDfZF8otzCMQWwTTFTHxbkSe56xjXYjhoYdpYyPwcnRP",
  "key17": "4VZ56F1MNbpmR7xLAtYdCQKgjNoXaBitobz2fDorWNR8fdmf4JMJ5jtokPakCXdUH8eyCurWUvsNwmKt9AmeUedr",
  "key18": "4Yhk9U5EZ7KFggUUSBGcHgubxJgaNaDSb7CPHfaVMw4JfiiNsqbTyW176YEYWkrxQ87vgxqebtrooKzgKDxjkowB",
  "key19": "2tWNByBoAMd2yxkh6Ro7wBoyQpQNLwqxqLHozv3AuAFwzQ4Twsi8XCQt7MBrBtZC23EqRn5JRkSy8VazzRUGMTx8",
  "key20": "PpYqAaZqaWbtmhTLcLrRWQgX6HxLF16YbSrwzt4sTCkAcLm5rJBb9HxYGSUSSg9M9ZQfjZH8poscBy9FZPGq6bi",
  "key21": "tmNTesjg2DdhHe8ioHjmebPVqsbkNPyJi58SHai7Z7P8Gm5R7vkVBW7hnMMGQfPYdLqm9g5gXNgzjgm7HK9HEWG",
  "key22": "K7Ko9CSkynkNZwgqGSDo2YuZVze8iMbjtX9FHAn5E7dfbMq3mtyhF9GWJ1915yEPUCtfajruatv76fcmwzXZ4Vw",
  "key23": "5rs1Xag1tA4tjfD7TWpdDhgznNSMXxY85e3W8ciUEm1YaYU6B2dXhsFN7f3Nwsuehzr4U2KHS2mtxJdmX7bS2rS2",
  "key24": "56f4LbV3D9uE5Abu1kzg1XEMuT5ALBLMSJFWse2YG7SQ3PFEAhJA6XXteY6SgXTbVF1HzF3xhAX4YBdYiGvpmeQB",
  "key25": "4upgj1bfSpNa8xf8Fe4rJ5AWz6NvR3anjobddg88cMda9fnZCG4m3rpWpWDJEMB53DhEzKgnj47WeEsxjVDqA5zP",
  "key26": "2fEhKg4iqQGMmdm8sxLAp3bmgAJEXrrLZEL5BQAtxKbkpyjNQDZwsZbWBd6dKsoPPT8jiuiDGqiVMLawcrdny8Db",
  "key27": "34F7zhSjJHFLXWsKtDQebnSr6Ywoov32zjCKU8N3F3GP6a56245eACaArWZuW9kEpYs8ZyhDcTR2Q5fWNeDd9uw7",
  "key28": "5XRwHnzs79dmtYyTjWZcs7WcJEtMRgtQmzjhEZ7JmsoLx6dJJ7qoKwDfAwu8yZgrGdsqvjeLEKJoqwp1hAMfZZXN",
  "key29": "4Guoq7ztKsEGJ1hkFWK5YKozrBS6pn3aTZb3aKE4BwMkQJv8TNPapKhzk8xFT4c7NbKRCBtsHznAhaDe7f7WcnTR",
  "key30": "4HrCcyAt4jedAw3wfsiFHYwjrdooDs54MyDWoKqNFU2VrqbmacCtm7jSZPqzVF185LHRyCoVvEPiMfsowYBPysiL",
  "key31": "4J8Zrq6c3ZRgAdf8zfvndk7cfT3CeaH9VCCob37D6vXBRkJNGYx1fB9kCzHyWFCG4SKLs7WRa8uomKegbJ9Z4xwa",
  "key32": "5dtr758U4Lqd6FpcjPNsBxqjLMTLPStiBqaqNRKxhCveLrBiwmtg4445RoMn8pP7sVVVZNYmEaHZqpGVXiKJCdB6",
  "key33": "b6uNWjsW8CkXDJeJ7N8RhqdPqdoMBQ5Tng6Z74BkJGZJryAEknukRJoxxiXqayhL4DXCYoQm2WDEzraHzPuQGKR",
  "key34": "5tFFMcxAvKowDzXafJBZGyWX391JZaWkr7aWTobupsEA1ZCYxTiJuJNSS9NV27W1F5jZH7yeBhquUVHJ1Q55evHC",
  "key35": "2YjcQ5QSUDw8UA7LRHxSEeugjCEbDNuTykCZBjkEMRRuagfwd1UxhTnkZgnsXKwtfNZVNMXoD9PuSNduZaUnUvJg",
  "key36": "3VYaHsTBR8HvLdiyr6hJm7FazUqGNyVkCHnxpoNKzZw7xLnAvYbjtqZe2Y4TYDYWm4u9vatZok3pCZZCfQxuwpb5"
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
