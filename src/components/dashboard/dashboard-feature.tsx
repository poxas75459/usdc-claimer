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
    "5FNBaX9fK3UkEiME7SgVkqqfv5gf6H75vZDguQnTaVPAj5MewT5YHWdEvjKeB3g374bm8CnQf5DJicQXGHzNVQUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adcAwWMUbH2qcvYmtQqgKxjyT17egB2Cb5Qoutu6Z8mg5B9sZqi25GEpUGTENEmjgHeLWfskYzb8Fa5GzsvSAV2",
  "key1": "S2iHEkNSsQ7P3XyN5eCDhBMzafRSU4wYbBNSZyPCbuSAnQAWGA9NrGcTKDtuRdXcXmd1x9uL6NoztwbEYvwk4EB",
  "key2": "EGDPqLBxP8KsW8nTtsVFEfmEoLBHHLEX3KaHrsdSkWXkHQb2cqYNM6koUDjcxbSqHATqZpeSggJHW66jamPuChS",
  "key3": "2kRZPdTQhCxPbsLPK5MUWW42s7xQ8csAAYmTdTeehHoaDSzh3AsKNycqnT2NyHUSa2XT8PezEkCkfYYaSWfQtcjf",
  "key4": "5zfdTzUHWwZKoGrWeB2nKKQmAvz5SxVrSEoMTnYYRyLJY7NRtNCVwk84oUnG7X1oBF8KFE8RSJ7ftQLJprsBtXsz",
  "key5": "4rcPyMkmR4v9MxzP7AEihHHwq3HPgwmKECtytfK3VLtKUX2fZak3LBMoiLmN8xLw1zZwKB1yk89HAZtA2g4H5hi9",
  "key6": "1Nmv3kEdNnWcAKDmRFMJC3cKkYBmD6tuNUCCyRdr5Tc3nHf4nX7z43fWwVV75yRL5Yb3rbYzuSLmijh79TiMqs4",
  "key7": "3k2CTybPYdSpRALrPN6p7XehK1VeuyxypDya6gzKBUinG72FmjHujRNoLj2qSLRgZf6CwW2eExTs89uMhYYxGi5b",
  "key8": "3Suub8ZEy17SzR2gwpZZPxySYDXsytUK18LNn4UDJbTfHHUc5jmde48gZCuYVyhgQoU55588WhQWkVY5Ln7tqfat",
  "key9": "42wP8p9btXsdoxPfKiHQ36JfRpX8AxozdpKmep95XeE1eHoULJ3A3teEKYVh9og9XJpPKesnvZBy3nJgqXiLL7K3",
  "key10": "3wvK6wNwzPUgJ2n2nuAZMGZCNZ4kYtbWb5MnSHbQVKFhn3tiibxe6je4Y4UH3bUEjLteGGPZ5LHVu3owDTKWV2io",
  "key11": "2kDXeBfpoKmEnRKENhQHMu4gXeryAYB3R4z9QihGPxwSgsMUYjCfk5LmvP9ouswCNAbH8Qkko619nFYN4qhttnCA",
  "key12": "RxBKGFqzWh4QeP3XqgFQBWrYLRxfF9qGEAs7h8StfcrNcTMrTmucBxMA3AA6PZbDutCC7QsLXqgSQ4xRhV59EWB",
  "key13": "55MoHrW1BP3qdxUF6LFC4n8zNrTDXs853BXuwGNpWap9vKYJj8k1qvnpc5gxDLp7Q7aYDoTuFF2aNxbxJrcTzZ6Y",
  "key14": "43btdyagPLe1aj1NGvVYMbKtPhqmVtQ9dL63Txvy8PRXLq4qSrnWBAPcdAg8DxDBXqCvmkPZFGZnpdJLPLcRMsgx",
  "key15": "4jSEmCB85Mf3Fu65JeUAi4sEVUTHrHxYaqnboN31Vx5aNgiE4pJfoR7QWfRX2YVyRXZmLWw2k8ngKHqwQ9N9eGhU",
  "key16": "5HULNDmSyu8xsyrWjCB5zdqF2kJ77LpcdaTYZBmQHgYjhBUYvRM2hV56oWDZDmTDq7EDs4Yk8DwND8ZbWcB9fME5",
  "key17": "2sUkD21c1sjRRa812FYBD7QTPjfiE6Mfz5At6EnR6kahz1VNsYe8ozweJR9xpjkp1nzmCa1i1Pq6PHcsfsxwoe3m",
  "key18": "62Kez9NxmUQhvmkGmoFJBr2yuYeh9RLmELvf5NuHeMynZw6ppEQVtPPebTavfduAWrzCmir6svcYpskjap6jZeqU",
  "key19": "3XAu5PJV1hbpX41caX6G72q6HYm5op11YP4cKH62NGXTipbXf5tnrDnipY7Acn5i2V2rv6FLGvbemqD477U2xtBK",
  "key20": "2zNgPpMGuWtZrutekphc4Uyg2TuP5w3E8nhKXCjBSJKVqHKXPv3MCQ8ZeMUuJLfHVmeJUrMBFGtux6bHZHLqXzTU",
  "key21": "5iy5RbbDXm7jBV53CHzieENfzfxv8S8tVXdD5PRjymKZcg4NHotg8yW5MqB1LPK5jyXTQLhWx4k25RYmBSebnNVP",
  "key22": "4cZhjNEFpSHqc1xSumwcMaEfjRtFkiRsqge2TH1eFjebZSRuUSyE8oYEGmkgUqFusHXvqGQchPm7S5qRPK8qZ826",
  "key23": "2GKszAQsAAGspBxLojLoRQPMLL7jYDxeYmGdhhZFfm1hpxgWQ7UW1hms33teQzG8puLvreWebeMzHg57Nm9yLyCC",
  "key24": "63cm9uPq7eAum34T8zptk7eP6xVd4qUYsokD6C3HYrhc36WeTgrMuYXAs7rZ3P7Jbm1AYkZAepaXtvGaBRywKLn9",
  "key25": "5P8TcQyUvo4cuix6Y3saPoS5F3CxWdKa9Pfo8tpEh4SxHCczAxFtwFkN9QbciYNf6LN34fMaBnEhpFCeXnyevmKG",
  "key26": "3q9gZXAKAY6rrSGbRmrMAGmCtnLRFxatu4oZqVXaAabPKyHS8DsrEN4Tg6MZ9YABaSrMRiQZ9PEhDi4nEX9QT8Ds",
  "key27": "4BvcAyEUkZLvxj6vAM6sUKsiwU4SZH7LJGu4pmLfEnMyiDHovhsjSsT5kjwgspLPXGMhPSFn6sYx6gUArHeJ6GAV",
  "key28": "2QraMFc8bZsmvYPF2AcFVaBSgFr1J7gQb4FSSfBf6n32eQMoyimwRHrwLSEQd7A85BZaEUNMjh51dRVpXAhJPF6L",
  "key29": "4KU2q1eq3qX3Nq24T9PfFBy9xiuwUQN3pRyfJ2LTns2Sy3FcPujNH446PVyd2ith5zHqhCvrRYAMYvZw54QGWJhX",
  "key30": "2czN28cBpTqJjPPeMdG9EU2i6kPQ8MR2X2Vybt5iLyQaqNG385ruCMXb6gGR2TpkYoP2dDsHG8uYZKZDwFRwDGuu",
  "key31": "2hoxBJygznAjeyfqHVbeZePP5r9NPKt8iTvqUetmHjZUeJpcr2sXys1ouYcLHgS9EaBAQPp249BtUPQFrmr7v6rF",
  "key32": "49cFy9PPyf2s4DRC4wsyYJq6q3zfi8ovTmFxyJqCisaAFHQkYiRrjLX3ttMhH1pTrCnG6v9hyrGd5PQwK6tWuH1C",
  "key33": "DCj5csFbtxb7XnXZU3Rm1wQcoEueRbMesb3CWLiySS2YntEndz9UjKAaXZRCZzYpMXjoSP96t9BJRbFsixFikwk",
  "key34": "2zeLbsr6bmudqJwbnhFuFx9LepVj9aiWafVgihecjvUu87aYAdXAkR2YXfVNC5DM4Anp6mRv3ekGUtzXf7cP3pjt"
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
