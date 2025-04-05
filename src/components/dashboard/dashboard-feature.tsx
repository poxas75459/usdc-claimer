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
    "396iWaqgNjVrqzytUYw2jT6t7oxyWnF2ZYcLT3nNv4XfCkDfR34UwkxhdNiE6m8Sm7VzV1fTFgeNpTTszpADWcaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nidjzwdq4RJ91Wn6hT8MN4XcXj2gDNwVijGoJUxiGmpNFdPxDmi75pcNEVVz7udLiQjnPyvyn4UcrZZ5orJTejp",
  "key1": "5fPyH81gEbtAyD3nAbyUhRKrcKr4xCjNARCJE1EYU3UeW3FchGKuKUz86tMW2jeUfF5eFTpkHzC2Xn1khQVVSSpZ",
  "key2": "4P8JN4VJzCdXV7yQoo6w481v3MhvMG5vxPdyXStcwqa37UhP7dCeufhzvgonrnAv8aZ1cAyMiNHGtAUXrsTPh66n",
  "key3": "29g8pZyj8LZjCdyUZYwuvTetvR3V4rzSLmnQMNzUjFL7B3GBgUNZQtW92jRnG4d2mVUYn7afJUA883WLs9Z58JBZ",
  "key4": "3xwZRbBNUHqbi24hhSo1Gi64pmfsnMqeX39vGvAEraFmYTJznZ6xxPcFHCLMMjicpCg8pAw7xGXrYUXrwiPkDSmd",
  "key5": "4JVTCkLJ9TPh2dmpdabHd4MoanJtj8QSEekR4kF7Mmtuaw62RR1oim34bbVCEGKcn5r2XoRZv14snREMK2w135iJ",
  "key6": "4hreJ4mKFdNJg1MD7CvBQnKjD7mshtmHHZM8t8qQA3X3mpja9qbgdGHAkg3YGBoky5GPN6As59zq96CtgnYADohc",
  "key7": "5gpsGHnyq1gHMJeDNbLLdKaY56HgMMt7EW95qCVJWXchMhMQXN3NbwdSoHdtBj2qoAgAnpccczLxYEUbR1B1iKCt",
  "key8": "4oGpz8W1w27UopWuQLuzJjCE4XfCvEYbDd5CVot4VgGxza1YgTpVNtguH5o5GDyWtLT2mAz7ioQ3ipK6KTZSDyG2",
  "key9": "5fcVTr41QDtDaZCCVQ8zbYmQkYy6Dco7uYVeEtiqfdR9iYJA39KAuZsQMgt5wpEtYGv4PUdZf7FgcSpuD24dtnQ1",
  "key10": "4J2DYeqJnWfwx3TSh8S9T6Jbfro5quQ5xmb3BeTtNMZ5ib8W8v5Z7x6fnm5KgYXNS6gZgTY5Vh7wMoEfbNWv6B3n",
  "key11": "2ZJuFixrBLUNeZtydnmmaS2riFcXgBW4s5D9eGq6BFY7CL31iqJUndrXoKG2cBNQj31kxs6dchQegi8newfwjBmh",
  "key12": "4CUkSiGnVE9dtFHGkdKUJXUuLJvXSdz2j1ZY2fjQX4Xtt5uYN6QxDvsKKiAZPwkpdYq8pFgyHPgkQnw7Ny1sQJ8k",
  "key13": "nYHgB5P4ZDJdSnEspwoYL5tA88Y1ex4JKMFuWCAntojwMUCaURunZ3ZjfQtGd6ZRnS7WwSnp1hNVUhVVaAKD6Zv",
  "key14": "4838PdurxiY5hy4JYH9yafbSft5uYEm6ZZ6aQYrH5f4H9Yg4h5ZQZU292skUA78BVwLdtUQsyauw3JFbMRaemEKU",
  "key15": "5QwpaA6kDgDocmuGM25zkRH3kdvqPgrwnXqTRuoUw7ogBeexwqwSNkoYrSXezXhH5e61pPKELP3KEajJd9ZLhfXh",
  "key16": "2fpDuQ7f3qycdc2XtmQxnNczq1mYNzNidb2J42Eipy7ssC4BhmECrG2iBjnEd1V9fMgNY3gonXxLZfUx3jWwfgwP",
  "key17": "4PzfLVJymoTD7273HBNr8RD5LTZFeB1J9LNBmYbuRZAyhSSi2BUKHr7c77NNvWr9GGTY4iCwy2BqRmb5FSBdZjTN",
  "key18": "4MoGaLJYBbEWRm3HUKbWdU8UtxQm5HqN23sTVxFfvUk7K7BW349tXrHw94T1P8d8Vkmo3VQvKBqNM66EQBd3ZTaq",
  "key19": "2RKZ6AJ55YWcS7oGkcSyWYqUzpSqcdVhpRX6bd8Cqqy8j55irTCEcS3ufBN3bJ2mVnSJqwS9HcSTZ7rhAzYNLfq4",
  "key20": "3qjKAGhLuykN6CyebmVtRoUQT1e4anVwm3tXqZuSQ5f9v5B3ZPo8cjHG865XCk94hSjGFaLs6pGKgyu6tgPzpDZ3",
  "key21": "5t2BpNzJvuQD414V8LFauHKKYHsVK66fqAqb67Hu3LhFndqPYjTNFbsJwAyuXXpXAqcNcN4MK5QZzkXmrvQkFquR",
  "key22": "DCctDqHBHMeF39g3XGxRDqJShbmEPLdqHjgbCB7R9AedpFrmhN9cqjXFfxoo5LCMH5ARtr1ugETerx2t5VZ6rjo",
  "key23": "iRQXN8gNfZ4QAwRDPqKtW9LR1F8ig8FtgZ1rzw28eTDU2aDLvR8QMyMksikZBNFzeWhFjRo3KMWu5LZLTiijCXA",
  "key24": "5kHyoQv18XgRVzkxWBaCPs7c7pNQZzma4mMwu4SNna2daGrjGUQABKhvyJFEQxKpZcSmJNwagtHYrPtk7mVpYdqN",
  "key25": "2fzrnaGxqvwUavtjiG8NuqxNCCE5xuG8ktbbea1Ea74jbSMaV2wgkLF6DAdiXYGDmGtteMsigWEb4L8JVyPpneES",
  "key26": "1zJBWmWibNxPGVCRR4nBr1QPVBkkA3DZgoQ9fskYsw96REmjg7vh7qJaVvzuBL3v2wCxP8YXjCdoo4HkYLtwmN4",
  "key27": "BPu42Hwhfwx11mGWj4JJUjXb9WGmQdZpTZTjVzv8PJZTe7E5mPCuMv5Cv2HeWyAjhAdvipx4w2zjR3DRD3gWep4",
  "key28": "qZQW9BjPEwG6xbH85RpaiUPsf8oSxcsgvyRrtFr7snizTGqqA3Udur1SPo6MsmegJ7QpzCLdS7FBEoeTXrsDJWR",
  "key29": "RqzgdgQhzwD98GkhnvdviY7RNgAHhBRRJZhYSs8B5AsgzQC4LgXEq7sjLMwQK7hTjreNozxJbpzHkoGC39CxxYM"
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
