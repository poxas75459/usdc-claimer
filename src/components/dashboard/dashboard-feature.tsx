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
    "5sELUmBjwc1KKHapDt2wkE8JS6NdhPxT3X4Myufubar3m3u1AvpbyKUhQnhziNAqYse8H6YSTQEFi68yEQ2LEmLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SUekxReKdNianrjys2giMns33EtQQycoJ7wnMKg29dTmf12Knj4t2vW5sLVJjJSfUMzxJA2FY47KoAseJ1vbQu1",
  "key1": "Ge1xForeQWzGErnabQgvMYZYnAe6Z43cEnBBnk4zTwn5XEe1EXd5oNVE8uBsZb7dgFfwAsRh6NDoebQp73GPZSf",
  "key2": "6UEMCjdJgezevAz77G4piQLLJ7BFzLeGqjKnXxNgk35UL1JSgmAmu3rfRor94DJAsMsaemBskU4LWD8t2BtdoZ8",
  "key3": "3nfC31KvdMM3c52fAoaHwyXCHWgBMQm7JDm96k9tnbjHYH8Sexs53kqNakRaaJYpcfEAQrbsDgjbYxnJ6MrfEhNB",
  "key4": "4ViPAhz4N4uQj4cn9gXFGeNQuKmKbfuZ5s59ARc9jP88ajrzwPj9S2LYuJZ43d2dHEVex7jK2agNTrfUEBbX7mtU",
  "key5": "3U4qRSgdbM8SUeMGDmKQV9X4TcqXBzkHvp9EEvzCWQM7Lo4DTMazpxcRs8odjUUaGn372btt6V1u2imzsAGKM1LX",
  "key6": "2tnTWUds2MMXHQb1PjyYfzakyHQjW3LzGBES2xDM3MM1XzEekwtTefb7SxKS4Dpq8JrMP6y9Y1ZdeawFDuKzDBag",
  "key7": "3wZacuefQ1ynTrWADw5vAjcDLXaiFVq7QCBjjKUJNFMs4pVC1H1nmKtwNN3aeWA4GsjAPpBhVwy3FcWPKJotTWNU",
  "key8": "4JBWCYm3bbiSZx8jE4roTaxR3R6RdReLGVNvVMQiyQSQws8yfgv3XFi9oeu32Cnuap12hKpEcCQ4RNGa5ThH5pFP",
  "key9": "58ejMgYoSs4hLZaTvac78ur9AK5F6j6S7A382FKoGcbsq4NKPggkNUbVWh6ZwUkwctUSUyEvUG7qHumkm3kesrZr",
  "key10": "5DiAkyRsh3jjY5yEKjQGcJc5ghddxqGyHekSTcq895u58oASPvfBkFx6t9B65X9XNGU6qxHdde1tD3ZvLkP4aoah",
  "key11": "5N2Es1yrk5dFtr8W4B7RA7NHLJvU6KzUNSWi595ZyoChSjSm7LxLSxuRDfsbdVtTH9YtsyyaVpd5tQHVYCxeJyjt",
  "key12": "d1bXpv1E7vJ2hoYSPEXohxAK6ZEpD7shEtJhyrVJomnCuqec5HmBAGFzjCxmjyqZcJH1H89b4n2iTBF61DMoyVo",
  "key13": "37s9Rc4MpacYT2EwEC7j4tJK8NQS9tpzGdMWJ7HM1z8hGuC3yxbkshM66SUmdvTd6KEwx4w1N6P7S4pPsiMbeMzr",
  "key14": "1v8LmuhoUkCYFztV2NA5iY4tH9XF6Jig9MNAwi9AFDEaH6aGUU9EvFnKFHsUfhqZMauhvoi4GKStEvK8zSEeaQ2",
  "key15": "3mP2W1DARvM1NbLECxpbBTQirEu4edmtMjKVRiD8pWwHWZCSKQgjtdte1eRGFKSCVoGdJ6rLHVYmKx1Bx4tzpuR",
  "key16": "2H5CVk4Pa4RKLPQZaTnbMrAZCnnKbZpg8Rtkj2JpnYrTjpcaY4SWHSZv69GkiDMgQrHyYomV6CeYbXRyn1XcAd37",
  "key17": "4WHbvZJFs9xHz69E8gD6zy4dkXitVHmpP3NcwTdKsrypzA86praYvekuXtDSVnU3TfYBBmteiXsKopZVzUqpzjpV",
  "key18": "2MAatge6pFVcbQfkZmDDYng3d2eGhr8a5cXHrGFDd93hp216hntceLpSewWQ6cGnY6X6dPc3APAoqumCw2EBbszm",
  "key19": "4yzNRa4tFsokAQF1NyHeVSiU7MTNTpchovSa4mqaqirxEt41uEMNK3vS6uZQk56nM7G1QohymweBddWz2Qitviay",
  "key20": "4AsBHZ3Ut3PfMm6KmkYSQ5gPYq8b2d116svBCAYQFYxfBKP5BNwFeaMABQcSdxAjgZ5P5nhvd6tX5En59qG5KhM5",
  "key21": "5X5RUaaPyxLoEpF6puBYXzmRj4qBeTCRFRvJMK8RfuDivjDZRD7A4ii5uX6jA4ETp4KYdJbQhuJrfX3EWg1vHmFh",
  "key22": "4PQdPgfhoCsZa27FReUR95FTZ9vEqeKEL3HABMwCLSmuqCnLthSqgtRDEbbqAUABtQyjti1bWGcVtsjMoqyowEuz",
  "key23": "2QLGAP35adA1KKRZ4UmNVdoAs3A6gqYDDuEXihR6pq2gTL8mhkignzHppN9Kz1byUSbTPsNSVkHjyKV4fZU6wipu",
  "key24": "uzQuYbtd7UM7ms8jaJ2naxpoTP2DPTemeFUBJUesvtvYotEbKgusmhqJkjkZgZu4fcuRbhWaY9mUEi37xWkQW8d",
  "key25": "3FPCpzk8YGaBbXAqZeV6pRGVsdFgqtLMtYv1uprL4gnLRt9sVdqCunYPRKPYDBs36sPbzvrMKiT3nVRjh6EP8JML",
  "key26": "2WEcMrq9rCzd2y777vjxhPkVkw1ePstm6MTSbbhwtfBti63N4rfpgiA8RJyopbS3Lntu85iq5xbNC1XwC8tVgfMg",
  "key27": "5qk1buUrGCpS9TFxeTrz42cufBubTozKZZ5mKE8j5vkWxnP6oMprbaK6WBEzCKzwQa5Gdk9yuz4Y28sfppfQFDkx",
  "key28": "2nqgVGta1X8nLrMEBgECtgtYpm4MWYDzUFxefcqALwW3bcX6HwuK7Vqw2TwkYDiRQuqm6r4xohax7oZ8cycYpSDJ",
  "key29": "32ugSXytEi3sDy1Wp4RJD5SgkHCUcqiJ5wZ5S59YV7BR8eeL7hgRYsBSGUiS97pGzq9zQNbUeXkEyXueU95BSf2L",
  "key30": "2AbUCNTxbWzHqN7BGzJ5zJr1ZVtY28Y9mQSNdibRasGUXZ3Psf4aSZbBxK5jkCks6ygh4fHyZKtAHBUzY3Q6ACUi",
  "key31": "4M4duLYxKSSjSPBSP3wGUMh9uHe7UZ2464ukEEvsr9AKaw34cfrFJQ6g4tHrSMTCyfhtU1ApkwvCRJ5LgGFTRr4t",
  "key32": "2Dx1NEGLHKUVe6NE2Htri7DTMCkW9gSo8TyP8RyWqjowaueM5vXYmaHaEYE6ELFS32ruK3f7srYcitrTFfB5jbKC",
  "key33": "3YmynrS2cz23oALaVA5WceZtMQbnwUVs5xjVoGSVhmpSusVNEboyBJmKPJJa7emQiMcKyM9pJJzp6zydV2sewPk4",
  "key34": "4Jpfu8i2Z6G1x7DCUyW3U7dVTch89A7bfKCBKhxCJYLQYnaxERiBfsvTKJXbwb2FuFEfT5x6ENB8ArjhWs9bQDCy",
  "key35": "Ufj3m5kvkxVQsPJfHXoizxtkX1xagpzw3Q1PVip1A42affaDH4c5fiEw6Lan2V3wbfxVruFUxz3KT8GtkssbGrj",
  "key36": "5JJ6yzPEs6fmEpZRLgv1Sima4eg6MAZq7pKiNAYHWaNgDQpvwCwrhQztTXLoWBGEmFgatE1GNALrzNr85bMLCsJt",
  "key37": "3LbtjEJV7Wtg6in1TGwZGyZLbxikLg1ZtefcEQ6MEFaqVBb84ffdXFpR2c2NoN5eMvyfFqddLSYUPM2ZzG2vGrHV",
  "key38": "5EtzmUnpGvfVUAvameAWXQk6PzxHvcHk7JwmN57ByQjrhHBVogJgcL5w84dx6qzgs8zSVmR2sjicmW9GZB7Qj4tq",
  "key39": "52kj5kSbQyGm7kbNBRW7EBWCWKpbigfcJogdDpWXtNQ5xWr6d6ajcUinHAWxfBhQDfb3R3kL7df1iNoyzBb3crYw",
  "key40": "FyewS9j4p4McVSaEn9qdZBbRpeiccc7m1HCkkMbaLaax6VwuWUW5VJPEWTyo5Pi2WEapJn7JpLAqFYEUa67Yqzm",
  "key41": "2Y65JgCyQEpPtWmzjhpMwLPLEvQuyhhG8Wjnao4BWodrTF6GnHu2tG7xvPJkpVqdPPcV9J3vxqmpTjatzyL2fWNZ",
  "key42": "24Eb3u5ztDdtKmjKyhuETrMadq7JCCMut4ymQDGoWeAaCJ1Fix66pnpcUGU6MnGNWgZ9JXhgHKPd3F6ryeje8d9T",
  "key43": "5TYRfgDq2iBwYkboeZ96oh6CQoehFnSUD3iigYTuETaJKsUEg5xhfWzjhEBnxEuNVUAuQrvDRhFF9GkydiQrcjzj",
  "key44": "HaxvumwMxm6NMG1Cr7xjy5BVpGnnQ5NjquhSWp5u8xhXGRQaKMLcNrNfGQZYwU9D7Fmg6exig6opPGZvrRpXce7",
  "key45": "36Lsnw1YJ2V95vRQwAsodw6hg1qjNN8ds4Zjp6TNTewP7bkQNMqX4jDXK6CZtH1hRbeFrw9yFK27BjzVUPC1Gtyn"
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
