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
    "t9KcDiUB4kf7FAvDBNA5Pmgippqe7mXu25UEF3aFBT4hp45xY3u4mXvUtGjWLfczEV54GdVNAkucJBQ5AwqNcqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZmRhNudD5343V2wZCPgsA28RVEukxs7dhnvEN2JMJYFZihRwxv8VaBco1tAtoMzptFcxtx6B75FZ7bD23vN9iV",
  "key1": "zLN6pE8YPQtxmNQM2aSdNphGTeAUAkc3BKXPTs8NkE2oePT77j8jQHkKvQaubwCfexpQouJ4GQvLGFQqZTNLV8R",
  "key2": "2SEHwmWcPj7zga1b4yMSKtcgrBpuy2MVzpfWpvzaTQSJRYWR9Eteu6ziUCbaM1nmkNEkVXSQSJCEN3LQStmUgBh4",
  "key3": "4Hftcr6jCmpWAH2PSpJ1qMSa5T4ZwRiovL12UyXsPhepfaK9sgq5ttqzoyo3Sdn9oBVWW3z9snV8CTM9mJiUfxXy",
  "key4": "5QWXnubfmRsWNiZtuXsq6z2gkWkCbLYgSUPHbB9KJjcmJwAWu9mrS6jrHiEAKG29yJ63nGLLsWLeBULFGK3HAk7e",
  "key5": "32VjqzEpecjs9EcXYUoKueuV9RBehWyzFGREwuMFeU2X3MsUHyZCfjSoEPWhWBn5G75idJBVeLHrnpcTQ1Qmb63V",
  "key6": "f4RKNh3oNVWh7oZC1QXxD2AnRArQjHA2urbPWPphacWd69jkQe2YUCkDC9vkaP8Gst49GLe3KmVcHAc7mEvocdb",
  "key7": "541Mqgj9z1b5PTFsCCWd7aX4z9Xnh2vgfaEA3igBzYdL94DWpzQQdgeRzF9xLz4fQahF89GoNCnJLkpFGhup27bL",
  "key8": "5q5q6FGrYbfcKsnYVpyWfH9uQFXo85PnjPbEthA5Nf8oLJNiZ3bzAZfFP7mzY6ENMKRejLaXjSH6MdsjdhDwd4kU",
  "key9": "xVx46b2fdQACqc3f575CZN3TiLgdC4aeajf9wKAp5wRr3NRpjLYA9Pm8PsGDvmWv9sf7cXNAz56nmXvRxvzSbVk",
  "key10": "5c5vQJQV5HgQMqvK4wPyQUx12y4NRgQGx3z9iRtyKg5Wx9du8iA3bAGySHN3rN8qWMVHx9NhEnV8JcqM5fjY3YeB",
  "key11": "57HGhLjs3o85Ps1NEb4ryJL7eFnogEEMQz6BfUMsRGTpCywtZQBFjRkBGnyEJt4yTL5YGYLLqyAoRdduwC8r8ZhC",
  "key12": "2FuZAKh2EeqX7zQzKMiYFJKZTCXbyTdM2RNenjgyh9VreFoYMxM6rcoewvuGmviLoqzxh4cvbeyrARPwHFiYCGrJ",
  "key13": "4BbnpdfG6QkMJt5PkhYkRn2qf65WKhGADEG5X1RhgVkmtTTTRjqm8Br9PCiRsVCsV6rHEC1UEhiDW64yQyUyLTCi",
  "key14": "3L6L4R2sn9BWiyQ5KpwQLbqhAf58dvBJwGHF9Asf5sZ7FzkxVa1DUYaaBqTXXHthoxua9y6e5Wmw11vAzhbbevcc",
  "key15": "5kTV578VBFvfKZB9nUpHJ1HKt7Sy48wi3BL948WQKj8ZukWRqrm4k13rw2zNjGzM9YgXuZKhbxbbKJEBTFBjtVKj",
  "key16": "47z4LuFHkunmqFtWy3byHJQZx1gGenGJwVyc3u9UCsAXGkKDZPmrnyLnDTaRk9Sc519eB3Ce7MNC4TD13H8qA3MP",
  "key17": "5zpJR14envsEzfv2dv1Bms7EpHsunzzk51JmyGDjMcGyCaHt2jNSkWewqMffhsbzX1LXtoR1KwjaEQuD5sNQ46Jf",
  "key18": "5DzbqCzTVH1oM6oUBNegZh4EHZha7GG6Bs8MurUSgfhp823hoTybXEJXgVtZLbKyR8TGNXY8B8WeWyqDjmDtH7M4",
  "key19": "36aLUH94B2sRtC6WTVpRPJGw8pQiund6e1oPYRtxhpNr7rFAzLntsD1SYH2B9ecpmaw8pwy9trR5hBosy5XsMM5t",
  "key20": "qvEvaUdVDrDLwN747TSM5xkTygEujexsXKwmi3bKYHDVfC5GWXXxxDEQYN3dzYYvnzrEeh75LS79iUuxpXGWYiT",
  "key21": "2ndLr5qRCF1ujv1TzKjgNwyCviWmHWExCK4g9kSSFsX5SdokCW7KMDw77DzMDgdeD8icvQCDaseaR45vHDdT4qst",
  "key22": "4RSnVHqheqvSdfKZW8GA8v1NbEHRNWB1xS5FMUuRgs6gTi4ZX75iMcykuD5Ed9sS4pcvKGmx3F7JCEWMqKR9N7bA",
  "key23": "uA2cq7mR29zT6yfWFDFDGupks1q2yB1ybMDkMVhsRVLo4AFx1R2NzNwAVmQfMqEcTH2kGxsJFcbUuroYGsLUMC5",
  "key24": "2Mt7teGtcvpmEBX3hU8fjeC9jnKK6dNyrzjwNdC9iQrN11Fc2euhcCpPN1HcZSveVd11jihvSwGyV6egN1ra8RX8",
  "key25": "3nhRz7zfyGnsnawUAMz5yaVj4y5RPSjqnT3DENCyii3eXythSR4SsCHpWnn9FcnQRtxNYU1B16JHHVFavpdMf6r5",
  "key26": "3vCErdo9wYrBY7GaMA8GezNeinQJ6EaumKmrQDxsACvBFijBY2Xm8hjqSnYHNvZcREE7Djjwd7DsDwXz1Te4HXcb",
  "key27": "4rPbU97LG6SGyJ6v7HJSdFt38BuXTKJTjdmZXasDKatBfV1Wang12kHfYvmGtvxyRQmWCFQptJiyRs1ekng84keZ",
  "key28": "5itmHFqriL6dBCyt176teV3NchLRQnKBMHvKggYdiXQ8QDFHHeVUQ2pRhyGv5bkjmbQ6FJVy2ySvGUXwecp5SRtk",
  "key29": "4qcdiT6MK1BKR8QqouFmvwWoPFsR5irCchE47yqsCTJRQTTXWaukxtRaP5EFP8gWoEQ8mb672sGj8oYnhQdXGfJi",
  "key30": "4hA8d8XGhTzjY1sHGHybjDXLSoXYxuRzmEufahFR9jRgR95RX1Bm2MtHm9v9waBidvX9NRhxiS85fgJ87PSS32pr",
  "key31": "3z5GYUsfNnMrEH9jCXSgpHGru2m2uxgT51rFZvuBfcMeMFjHRZaG3cE9rGjSApkmcKHgAZLmQwzRzdYT9sfDuwAt",
  "key32": "3cVBWdujg5x52Q3YSLkmQYPcZAeWXnezwhgx1r1eJfHE6L48NCH526XxkxM5xotkdQuwMubfLGgP4ycv2SqETknM",
  "key33": "5ZjMfofQL8KDguevdVNEUYJp5jMdxzTTLYi6X9aPRsgLpbQ8V14oK4DB3uj9MgJPT2uJ3LGbA5KaixXUw4e9o2VV",
  "key34": "3GzY7STcC7VUwHUZmHFnBUdrhzxM3sC174g8qqCogVW5cJx3oEV9a2v2QuvxwBm7KSza5rDynb6g3aa3gmwPURKN",
  "key35": "4xQa9tK2Q3BXcDhUBSr5JWBxYvDKizRvZZgah1MqiSYgy6Ek2ZCAVx1xjp6yczruMha3iKkekoazjbJvET23R2K1",
  "key36": "4zDQr1q4gMH4j8owVNgF6FDqk8uioY12iLnC7nNNAwDL5ZbHqn3mb9YV79ePVTC5ywUyfrCx72YjuKvmWuj2ctt6",
  "key37": "5PmTGnFzPe7ewBsUHkLxGFfLdyxjSEtYsRJqkSAqUaYUaikBP7BrCY8MhfSyjkAoVYuJDCFUo63v4LboDMh3muL4",
  "key38": "5SgKFdfHLTiD47Y6K6sfQ7P2dF7i58BDvQPH2jpybPkyc4VGMPd2rk7LEXpYPB55phgqhTh9hpMxydgVi2TJBufW",
  "key39": "2CdKj844wVNXPRifa1ADaqrSirNadpaDzri91zbEDQzrS47kY4KQDUgRieg96P3DvGR3jUGKPJp4N9siruCJMJz",
  "key40": "4ZuuJ77tE3rUSKcEmEQ8PwRDo2w54tPbpyVqgzujGsbSMDzZbXoUPwT2Ad45BwQKU9Xpe6UG9F9ND5jk2k7JSYKt"
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
