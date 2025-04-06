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
    "2VUujCt2obxktwme6itueNXPEqvuA3GdVS8TPeD7BRPyfDnadxXhWzgYAVmMutyDB6YgbRDeYM6R93DCfB7vTej8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yRWRhRvEFwqen4frXq9k7SGzW5xtHYEgpaLs6x5pF8u8dAsfr6FJvCTx1U7LZwfmgrrCAeUfZEy6g2j5c3M6eDR",
  "key1": "2x1jjgMZx71JkdxWce4RcKvVVRwWfAWa45TUogsMFhfReCDwcyXUopBq23dw6Jd9pcBrGeE2ojHwaoV7zNXgiirW",
  "key2": "23XKTtnmJyNvLxnzJLsHxo4vT3Jx5pjJSQ8gH6VpbW455Lrhof9WpyWrtxjciFiQnxjn4YsekB72cdNp43sKEZfe",
  "key3": "5t9e3cgzfgXSGKJnYyQGP7ogQb3TwejN5kZdNRr9gPaEveVuzLHxZXgtwhCY4DzQ9K2giAJosKe16bnKFsf6cCi8",
  "key4": "4BHotZHfW2Nt7fX99BmscrMF35VJxC8CwtzeXSpYmZMVT8D8x22dR4r7KVtsTSES7nSAZgwPKnPxuasEdwqdogQB",
  "key5": "45R5QJjvPEZCd8bchUJuaaC82D4nEzQE9enJkktTDn43gSJjDNuU1CYRooWo7Zzp5UhfY7d8sRMTGD8L4fFMREUC",
  "key6": "38anqTuVxg68AuzQHnoczHEjyTGDVYdMAR69dwPiUjBMFJUFUiYL467j6VBGStDG7omLK7svXaMJH5s8qsZda3Pb",
  "key7": "3L4AbQLuJGsr6zfdHHdj4JG1y6XjTkxACSMbH8KZNhuB5E1Q4PB2bUxLqfpUzX8EYGFKsf5kxrutnapMM1QToPtC",
  "key8": "4Qp8Jc368jroC1gTKGwGDcdWdFGuhWVHzbFYvPzqrUgqZg8Ks3CFEnBXq1yopsPUstvSyakzZmhPepAZQDeHJ7Qe",
  "key9": "3FN3e8LTF9ZY2jkHDEB6d5Lt7eng5bVtPdH8Mngu3xcntAc9Xtp52dDfnQ3hDjkSFNvSt6H7odYQHtVp32vFM9mC",
  "key10": "66gzr83WpzUpsx6hQyGBmLXRPAX2VbUycC3tqTSpJQ3fYz9ewiRyS7GtNBCu1pcmAAEnaNjizsZwJuoDSpsRNWSV",
  "key11": "5wFTsTRd6vSJ8KQqmZTPmDZyxkZM4ByiKBYAEXNKqPETdPpX84waN1YhgYLY9NkMoCkTztbgjtrByPG9P6dtc9g7",
  "key12": "5673QFQVPfUXu8KhC2zA3MP2gCUWsg6tFdM8xgEdJqZoET6jNSdqAeHwKGR3HUKsEX8vEmvqGo6EwA7eWLVTcJSe",
  "key13": "4PwUxSuKCTFvS1YKrzat4egxabRte6ZYQikJHd2fk7b23UCdZXvNkVZiFYAXfKKa7veGiBVvkPznTERx1m9Mw8kH",
  "key14": "52bxUuCJeaLiYCcyyRgkMzYYhXDYSztuNQLLM2dghdEnYXUcmtQb1CnfMBjauw3FLV2YXpbFRzHitTRz57r2cqrY",
  "key15": "5cEPLQraMTRJJ8XLrmkR8o8c7w4ozZDV13hjzMmX5kr7nQHp7n58Mc932mzrpNhtGf1afrwNXfCUw72tH5hUSxZk",
  "key16": "cT766jQs8hd8Q1RzdvwrMbywid4Bh1iic9TvzH9GpVNesEktAHbjdkJNUr4burgvG3zyXTZQHSrHw59a8dsiiuW",
  "key17": "4EJLEUW9i3WKKC1qtyYDF5jEJNats2CLkgPNshgvfgE2xbeHy84PxkyeX5grpM4QqEwqLn6avwz1kKMzuPCT57SY",
  "key18": "2QsforwwdUSwtX1QRn23GtFsakyTmCjYCZz8LPrqbyYSnTgXUtq8adoyo2CEZFfSW8KNaJgkFUTsV2xg1TsHiDgD",
  "key19": "2cfZRctnxhwaJhY8b82JoJtX5F3nn9AvusYqTA9oyuMWu9ajmqHAQXNhLhn8DutSv6kzoQe7DfayZCqgemVU1HR",
  "key20": "3vT9bSs7TMJvsLtwsSof1TfhKAJncguyBPN3bwtyHKCtkcGcjqfL8kFAuVFP2nnMyAHFUy8mL66sDa6gqJTq2sW",
  "key21": "H6CAfY79kYRzk5XQzLWKELAEe731JXrvj4s4U7jBeFsGxWHMXswUu6YNhfBB4V7sNzdbuqyfyhHLiFYpwuMTdUe",
  "key22": "4sr1ufFwpVNKn6wcEsedjRzbfDHfMhAZqwRdxWLbWkLT87Fpd9t7SCiHi8HAtuNWvYooBuD89ai67QptfmfeRhhW",
  "key23": "4frYxAwmTJqXwVAzjHiG8ojy3xY8sGfisYsudumWepD4dCreCi1TZDFRP9gbPoG57wYe1mJq6TWEHceuCwvV9RMZ",
  "key24": "34wsuAMKFhNxcD8G3zP9HnWNTrZf9B3DaDXw9dHDnKu59ThXa9MKr78QERxPhCmCtLAjggCZWRySLmt2gyWPVaBe",
  "key25": "qfjZkLwxXNij3tYs7ejT8mZbXuHWFbjrtCgY7TfzTwo2qRb3AKDGc6nLtWfMh99nXgEkf2Q1Xtc7x1UnyvRqDxN",
  "key26": "3uPGnUqWij38ZirWaBo9qFfogiwZuByia7FYaEeb87pFoSJb5oFmHqUZe6DeXpQXyHypZy9xoue6RRYBaCAKJ5Lc",
  "key27": "2mnH4H2Fxu7n87QwwLSioiV4hWR7khgFQ4iwjbAFF9rvggrMgE8qsn1wehNuwqX7WVi3m1UJZJuwu8k9uPeU2cWu",
  "key28": "53pkujv5Gz6qSmfTgY8LKVKotMs3oenVfZZCiv1DgJLkhhKYSXYTnicdHQDY1WcZTqWTzVhnNaxN2MpjxZ3Ud5zU",
  "key29": "TSsUYvK8aDtLCEiLETbpDhj76T14vABz3XsTe72YduKL6L3wVDkR87NbccBpn4CRYSfM3mEqxT4fyyzQXYCFPap",
  "key30": "ia3kG9yDiYKNFk4UQTt1EFGF3NLqMRVouBXgSMdkG3DjJhQP8qUpauKcvDGgKqKWXAkcCjYpz1v4FWx6LGYHvJC",
  "key31": "4x8XkSdqP7y1p5hCuHKYa9hB1fYcqW8NXLyXtA7NUsdPeKaQKBtz3C5sPYq28VM1UfjSEFXV5Re5Ej24cyhofcRY",
  "key32": "37f8yMegkY93vQXFqY3ZstWTtTAebVoApBitnNGL9Rq9etHCkRUuy4yTEgpRhMu9jVMfz9ypEn1vTtNtGGBZstnv",
  "key33": "ELEzMHVqZAuKDJ5wiuHpQxR3aCrXZwcVdAmcD1PARS3kHFieVaFZAuuyqvSspmHEEpBYbU4wtQFkG7FSNSpAqGw",
  "key34": "4pyF8gP82Uhwa7KvcGwa14etXohrSbegW1NKHt1htk3JR3267rPYo3kpNDxzpjTkD4X4x5xH7zLE9ZCjZwj8iNkZ"
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
