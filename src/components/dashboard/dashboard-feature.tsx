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
    "4jprFHkB2S3n4P5RpGBr4Fv1VorMofHBC8Uc8dTGZbvPwstA2bcCbyrXtfvmLBnD67GWswJCV2MhAgPQhQvWkJA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pehmv3J3c2MsQkSS8q9C59xEnT3Ak7E1UzJq28QjhjJZaasoDSQ9Tb2mP3o3PTcSDwP1ArR5fWWPxsnNrMYDvJ5",
  "key1": "4idKWAugpJ8noJUW3pFdagHAbkXKaNhEsiC8E2kDVQ71uJNws5sHZrDrZCJiH5g6XsJnyqT4r7Dt3GapxbVf2uC8",
  "key2": "FuDbcu3bbqR1UvaJ4B2KTXeK51X4VK71Q2HtqLak8MEosLp6iNJDpqWkVagZJvwPWE4745hPmgwfDEpGJnNZDVC",
  "key3": "3vFYSNvDhsQwcHE95k7NZCpxAaHzPiFEaTkrJsVHyRfUVuQwCBxT72o6AHSvREnuJBdi7L6RPthuKDDVAhQfF2mZ",
  "key4": "2J25s2RquTa5rVrZotzEG5SyfR5h9UGnwqbJjEgvTi58nXq2nuRwYsbW2ueXQp7fYyDE3o9jn2HaJ7ee5hSQtsJi",
  "key5": "457WShSukSRYCLmAWWSWp1fLiyunC2CUG3v53QdWxbCRMUJmffNXY9fPcRUVbTakiehuuq5ji1dicQop4oJHN6wb",
  "key6": "42Z6VBRuwgmrLKuGGRiaDtbkcSdZE6DNpuY6hoNTMuisocWGnpMJsFcnrwDreR9mUAw1Gcy751jFnqVDX4n9xpkB",
  "key7": "DM5quZLUXEwingX3kGRPy1WuANeEtFa4otQu87YoCDPJVCe2XsJThkZMbL8SrR72Pec7pzjD3FLxxnRT8M1vG4k",
  "key8": "3K9X9x68Luy97g2LLkQRHDX4o2WXADGBmhA9wNGCp3d3ZU122iTWTCLA1iAsYAysRY6EXap6txyRxfbTiH1NReFU",
  "key9": "4gaXnKA1Eq62xEoMZewFS6vU4T7cFmpSpeHJbCBnC8tiMQFeKYNR61DcjLHu3zPWLNZKXHWZshuDfF5oChEkvvPk",
  "key10": "2cb1YQL7c1cwFrGptA2CT7kM6Qu7bgAHRiKFKnLrUPUYzBDtxFWj4kSYcWmaR7n8rW9uVqsjEvgEkpDtdkameFa9",
  "key11": "jTECTp71yTq16N73k7P9DwB3fx7V1aAaYpBdBHKvptb7AdehyEZFD3s5UAExo2qi4w2kA4hMfeAh8od3RxhKPUF",
  "key12": "65RdvZ3Kjfv7ohmTUyfsvsqgQ6HCddWTJGugC76jH4Jx1Bwvq4KAhBLYiZWwXJot7iiu21puxGjXaBzcMZLeu6ja",
  "key13": "NskRnFU4bqmhpvVpo3y4NWnLKHqkauxM9aMX78eRhw7QvhJkhEhdrBo3V7pySEmj11N97r2r7e3JBpYYeejoKKv",
  "key14": "4tsZofuTHAaPhJUt4ZoNEC5o3ndHDhhJkHDst1zCSPLyUdqro13coUHVGMyaaGMPSRvQu6PfTYMuvqPuJQHEiNBk",
  "key15": "5nktfveoY419Ypty6sGKQyBgtatPLomzzfVGFQu2P38TwXj2PEsG25LcxUTdieyGdYimfHq2AunQVLZ1rGM2YLY2",
  "key16": "4BgFrwpL8ZJXqPvuJytS6rMmFYo1H3siH89DUswQNyi6QX6AoNNCdjn24wFC9xeVdX79XArVZWU73FbGRYMwLvsB",
  "key17": "5FB49J7xYc9QjGK8W2CWmAfaiwPF5DtqehwGD9X57y8MWxtgcPQmUvyc5rup9rGmsqwLS4tv6nJ3irFMdTJCwE4z",
  "key18": "4htVwMWEKTBMFAStKvdYYVcxWk1mLXXH2rQhksaixpDbCDnhZVNymsuKiZx7SsQdyKiPrgQELcAQCXMcqktrCek1",
  "key19": "4ymN7JQJRhxPk5Qvf26gcwfD7mdxz1WSvdXK3AGwHeaSg85CSnABh8S1j4dyAgaFDvoeiSEWp96ok1HmWCGm7YGm",
  "key20": "5h9XfA6HG8v9ebvehUL697m7etanmjr4PCCEcfWT5PqPhChqAxTg54MnyAbGQBg4Q9e5v4KUMBNNmA8xbWcK4E7g",
  "key21": "5EJazssQBwKwWknTHocTtEM6F2kbb2BLRDrbLrBUn8EcuQMScbperNDMeZHBcZJNo9x5GGNeDwVKd9BZae8tZnzq",
  "key22": "3PHus9EAa3Zqzktp9VH8pf7VPSrc88WNgMz3HW1HJ9pMm522YZxDxCaeT5qUXNfQ9p9LwpfSao9v7ai3dLcdU9M2",
  "key23": "5gLm2PQmzkX7DhKp9Gmqft7coEVXqRsbgqB1pwZVyQ28jSyBjR71uoo497J5Axcmicfd9yZomG25KAkxeQSxEmhL",
  "key24": "4mKNhZQkUsibrkZjrko4XThqv8BKQQ4wqUHDyuEFoERmjzNKSr1N7mC8WqBo63VGFRjii8c9UeKXmFr7upMJwCD6",
  "key25": "4b5WLtss9Qza1jn4P2PU48HwgZdLd3a8zb9FfGjiPSsi3iREe8tuhFfT1dWcEg8qPbiagww9zpytVyiDV9NnAc4v",
  "key26": "BtA4jpGUBMhpj3BPwH7Vq5yKYQhNFgjpdLBMYFkcHEd1oNadJxckEKnS9ajmGHvbKPDCzAtYVrw5XkYDZPkjCRK",
  "key27": "2fE5NMJBmkSshZCiwyTYeevwZoFzha1keipZgEApRppxg63qoyshQkn46MDK1chNPT5Jgi1SbRa3eZYpbmsVEM5j",
  "key28": "4dwQtxjY19TVRzWE51X6ndPtqsgjEyeWUfHpxxxYHKnJa7kCXMSgB3mhDY6zBoDjkbxeM2chNyy23KoHG5DKSFBx",
  "key29": "65n3uDcxaXB84Bo9iVqDRPYWoJGFojmVcYRCQjVwXyj8bcmwZngamnXr3Hw1wxb7B7fPEdrWfsLCtLr9awo8RjTK",
  "key30": "TQzhHn14E1omhnf4pJ6AeakL6xVBhDwf475ytXhJkzrehAvhprMrCivwMQXnqpZBfs1n9yn927wMRrKxMQHjCbv",
  "key31": "4HLVxqCmRmpYoGFaHN94zTwb5YkY5dR9TmEassiapqtaKhMV3NPT8KZhKRqxhYsjbqt83JNfs9LGtMba4KTWzSWD",
  "key32": "8F1r4J1StY4Ek49t9tNiLWGWEcrB9hgwxXd8X3Dx5WAGeP42a2CzabUqiwyQ2E9ziz11gJDtQE2zALv43jXyen1",
  "key33": "5BLuwDiw46mtcynfz4oQeaWBxJMpo6hVsNByPSz2hqVJSND9asVJszhH69weXn9faMqua7GCQu56tpKck7Wi5tdM",
  "key34": "29hHeu7xpvXTgUkoCUSR4tAdPAQcKcFE3uJHctLc1yoxxB4mctnx5pE8ovCzc5RLYMhG2kxp8ZwP2d4FHBDjcSQx",
  "key35": "2XVXwuRQrvbNQurA4XUTKHgYvvXM4B4dvYwAPeiAqdJTV9TdeFgdhYjFrfwfT1DENrtCzzQYRGvDkDpbn8FZnB7f",
  "key36": "YFrueT5BRQ1KEajTQ4h7wgWcuHqyVw72rzaa6aDgJZboDmux6oiL1qFqAT9WPNkX9bKqWanwpe1uQGAFeomX4rE",
  "key37": "67iBBfa8Wdmk1qB9H6hodSJG9VpeF6jvoGfN2CTvSjo1iQNuWcWMb6qNCHPrYCeNpwVnF8rGVpbQDANXcGmpEP9M",
  "key38": "3XHF6ACdEU1PjX5G93RRtyEVMh8Y1oX7UcoAfLuQT85kuUeFH1jWuCniahvbvzXtnjJnKLPV529iHJH1EVKY8zdZ",
  "key39": "AniL89X3CDMTiF5YDkPfATh9tfeexEhQrvX6R6QSaMgsxBB9ZQk9RHpD65mnjzt9mPYy3qHztgturTNpm41ZScQ",
  "key40": "2KqFAuZZexdatUGfZaPpS4diJkGE4pUoxZo3XkyEpQa7TQMk1RWXSFXjPw49BJ7jXQK27R2y5wHecEpMaP6asbjq",
  "key41": "THqdzriQH3dR4ongRRL6uWHM94eJHVxwWBekCq6vK7tcZcpipM2EZnbf1awCJnErhhPonxkJjPQZushnL5dTztH",
  "key42": "5heKhn8xcjeLaidMi9qgEjWgVRGirRJy9Po9weVrHSCZPcjr8MRWrveBsgUJsVtjMo37WXeruHFRdq6BF9rP4Dt1",
  "key43": "24VmWkzVDz1YmNq1Gqv1b96wpPzTAj7fdzgk5XdKGs5iUuQXMkLxjnbY5YdPnk59j5QwCQEtqQ7wZ4jjD4Ya41XL",
  "key44": "2hLkY5a3fzA2jJgbDqEtozcYW1eg7k3PWDUJ4987PTEKRFxX75KQxNQu1LMfNQDt6jANcgvjqcDrM7NCtM4tbt6M",
  "key45": "4EXRzHuPqE5Lje9m4iJMsNE4shZhPEbjkqqx14QmifsSevBSbpcoyKiPCjgMaFwYsZBaLv9R21arKHYrnparbBhS",
  "key46": "3MYMEcpF61x4QRyce2yvcc8HAMQkQKgMtXnn7bD1wrJWdWs1vGZGAsaPjU7Abch4gmkbomqF7WdgKggFmddhxGy2",
  "key47": "3XbimUM3aLkKHi6xdVgc53N9BCuBeYTZMYdJ152c8J5KcpwqjDzoW8ZunSkb5ScFeTLYcMtaSPRHL1ZaCfyzm1Sw"
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
