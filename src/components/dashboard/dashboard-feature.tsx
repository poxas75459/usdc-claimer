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
    "2YYdCgWYWxnAQSBW7VwdgR3X8sBJrkTnuZU182TyRBGjLEpmBtwaupYNc5VjscpYQvDSdxxCjkgfMqwopKdvVX5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NPzT7hK9NWVsKXck4dirW3scLKZdB5Xy2rHRAMmXukLcUkLGmPo6uxNvgSFr7VN3QmmmzTs6WCT8Xp2a1cA2jZn",
  "key1": "mQuNYufXG4Xp7XPYy8yAkrorTRLHrGsjcQ4esV7LSVsMDAn9xayf5SDs5GyrwqJHwfZm9uBBMQ1sg7L8KDJGHjE",
  "key2": "YSLGoWYue4ugpa61MGQm5fx5sEigVbAL4f7cWDFfeStywjRHZGfHu6yh1FJQNEBi86PsPE3JfVQ7z1Xgy3X9Ncb",
  "key3": "63ZJ2ZSiChyW2gj5zKHfuHGAj5q6mdCqUZZdbjDZvJULzQigakcb3vw5TEyWguktZ9Ef74fazBDpNhG3vosq5Miz",
  "key4": "3bX7X4VdBH3NsYjyG4hzVYjnYLiJ6AF2thMPa3vkdzBniH3rDqxgLXKQNk9ZKqGmGT6eXw6ZfP9F2hTLWW8Zi8cC",
  "key5": "4G3NFRpHQxfFDaH6fvGv48oKndLqFTgkwBnUS1GV8henJdT6GxAzsS2Rj1vqaa7Nqos2BipWhc7GLCMgKLvVyY2p",
  "key6": "5P11GyS2xow7JHL5my4TEWTEnjzNf6xcbnaXxpTH1P46YzDiqFJzconnyK99BaEsff8QggY9q1MNsiBF8kQcr6j3",
  "key7": "2CnasBBwxeTCThtWa4wXcQwSLi2khDVxGE9KXtpUjG1U2F9T2kyHAAFQuJfPecLF4Nns5Auq64K2f3MRrSorrp5i",
  "key8": "5rJytfJ1NiomC3LN7VNmF9kqcKvGGE56UASwQWA64MDbmcGrZFdHQTmVqWaLtZzkjLXZSBz8qRcs2osACsYnUiZq",
  "key9": "WzqztGBTLpQieJxFsb5sFhGSR5SpCm1DS97di62msgQSWAJVFRcCinAe2SohQKkK3HrruwxUJJhmC2Ztbg9qXcS",
  "key10": "2AB7pYsCv5tBHBnugYmM1iirt2fKNV5TysLNeWL559acmAQpYJBaDDvyAMrD69d6VeY9XCHL5CFt74QmsCrm2AAw",
  "key11": "2s4R4fMSK3QSTMKMnbv5PgBjRsGJPYuCSFNq6CYG8sS1CgQXBzPeJGKEcMv4NyWMx7EjpCSF8L7GrJ8vzhcQzJQw",
  "key12": "5vGzr2N7rPCkL8LTW7nwBsE1yGa9S5V5UqucYz5USFtxKZt25jKke7vRgKYEiVzyj32pdq3cccqgvN3mU8pNhtWp",
  "key13": "Ys6qRtXTJtB9Mf8UNiTN2WXYJPjRcVKoj8WhRzTMEDckB37rRPZHcqvtW1JX2P6KfN9vcYrLaYgQnFLC4aVLK16",
  "key14": "3DGfssRLFG9wHqH8aKXNnVk8KgiDDj7rMfyhpUZCuPkHgqoxAfF5osTe23uW6fPMr1D1Gu6aq3nRzGvUgiNvuZVW",
  "key15": "4hhmwniQRgRpVDpQGrZ5Hy4qaSz5u2pDt4DZFPuXMPnwg5i2kDfKAvfhhgSk4LGY1z5Umg5NGTxYzdvtxGtnnJkK",
  "key16": "3KYBPG4WsjanQczA7tdSWYM7Rp9YaYvB98VjpfXp7TGQoGFeQTfiLWN3wuECZJkyx3YzKfg8g8qzbpcXMvCv5gBA",
  "key17": "5tqoL8XeQ4ZusB6SacW38WQwrWEeYNeNznhuyb76167wDqooXvnmmXP9nZ2CXHH6eJ86msGpqRH6QgBtuQMf19dk",
  "key18": "4BHdT2wvswWdLC5dncsRxQcaV1mZEdANsCbHRn1znLw8PK8Rne7XwZJY7opnH37JXCPXtBGvxSMFJ4NZcosujzGE",
  "key19": "UUAvh3VQqa3akuAjduq3P1gGVpnsbembxHhoBYLPQ9W2tBfzQ8PmmvY8wPdkZzbAitQWiyinZVz6RjLCdqkdud8",
  "key20": "KPF9FBd4aVhweEH4KuVC2zKJw2QfBdZ5RTp525b9uriYrpCsre1Ru2Ey7Lxag5ZdCWFSGAndquUHv4F2CYsFr4w",
  "key21": "3K8LkyBRj4rgpR4oHpXRgov31H1Jm1AjJLyDLVPYdFR65nEhCjvArms3g1nwZJaH968qGXZ6W1WkYrJYCgoyPzA1",
  "key22": "54RNgQeEZ2oZVnL3oq22iES5eNC1znQQDLb4HjshkCKbFJnu7X4JynGtvKjc3i7UAkPL7SdCzCQqrZEx8F2KkE4W",
  "key23": "41ULYZdPfB7QqGTik1JMu6GJR733XLDoQm42qnap9N5pgtaqudxyJPf9STebqfJaQQ3cEzNS7XZvx5jdmeZryEoM",
  "key24": "28tX7RF2ag8XDVBMrKTKZFqZKSSGN96B8Z9TnDh4nBPTCG73DjuyRXhEZndUNFuLYeMek6htYjFpTMhFaper1dQf",
  "key25": "VCtcgGJvh1a3kzA55VXw7SjHiA5GnW8dBvCBz1yoXVJWHF8yk6H7uEydCN3tw4LtBBw28UyWJ7h8aegfqMU6ho1",
  "key26": "2WhRYZqp8mKJjqGGm9P42b6CN4rP65QyuJ6dYXQzfG6fTwDK5Btg7yD23fZs8qQbqmpw4jZpaAwXX6YEAoKBPhVq",
  "key27": "2GW1f2o396j1oByEZDan4AEc6iixyWwMpUgWYYVXMxMLQiVPPBAphAEXMLk2oD1XNgyBHbLDrRivZFDqYuC5gnpr",
  "key28": "4JP34jwMwbwGebhqMVh6wMzcDZeGpn1hxkZNepLH3qbURqvTtymMxbQ2deQpx5feMLExW1Qed63KJyEbdzJfrqat",
  "key29": "h28ue5w6sGezw4MzLqgh7KATEqatFLn7TfQNWhJdk1jbVHsZ869hiCuJ7DwYBhLTfYcdYCfsq9J3YZkdhYTSamF"
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
