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
    "4B2kVPGyFWfci9P7sAftruKQyDbR3pfqQK2t2nxK9o8KgmwCjDGraAqGX6bQMBMQyL5yyvr1i6K37saaDAqxZ2uJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wp5nEJqoyqjnmdfcHmhZWofrk5GGg42L1CBkFdU5Wmw4vbxaa8QaLZKo4423PoHg2dbmfFZn4KkDdR3sqKNeys8",
  "key1": "3jR9qowaGEUD9w5VArUiFmXbUpNP1jswLQHNeJ26YGXndTd2HhnmVFyaNHRjG6XwPQjDswWc6bfk6kpyz9WuAYZJ",
  "key2": "sHt7kS2jrxaPcDLTBk8xSdK3AUhLZ9AztFgimP5yHpfTYRyHbYbey9L2cg7hFsuGh18e5VkcujWY8EcBJgfLaSV",
  "key3": "oXmowgBDY3n8MSfaCyrFe1YF9UXCEgXpNizBUo9b9unqdgQwZuWiWaxg7PZ72moKqMW5BgFsiJKP7ZbowPqg67d",
  "key4": "2FhuBioupQfXE7JkXezk1QS894WuP4jV3S1zJbb8riAVJvub1o3fzJXCdYB6RMx6JvvRkHXZzj4beeajJLr4w2Vs",
  "key5": "4dFei35k41jbQhH7ByMzLV32HEJJukkRmLtp15zSxmioHUdrcwfj1VkbGsvd9L63rDu2VdBcm6fGgRvt2ceBFsyh",
  "key6": "5FMaipmTKTzzApvMPSkmcnN9SuxSq1FQKmwjFqAR1ZzPuzVUr7LiqigDcMec9wQpSopjabLvwnnakYYgRqoDTxAN",
  "key7": "2B4qZXpihbuZJ4qgFsw5TWbUPMHuKUufx9mV8mQbAnvqzp3r959u9uNy2RxAoBQ944qKLY2EF5HQSizUVxhCB9o3",
  "key8": "5bk1qpoffNXT9EiFHhjZoBJT7aPQb48wPWSu8U8Q2nUWqff451pHgznY6FfYY39G1rGiz3DSk31jWdPDkCLZiuVs",
  "key9": "2jYYpeWHkD7wNqoFHQsZ3Hk8dEALKorwCWA2Md9zt5tyTTvVrvxT4yjHvuaj37gtYvHmy6kSG3N7ATxpBK1DkCUm",
  "key10": "ZTnqtJW98eJdkjbNpDgBP1HURPsgdXFRe5ARR2AnpSRJs6BPRbh3QoLo6n3ZKvMsNHtGMxMEnUqQzj23wneX4Xt",
  "key11": "2svuk2vs5rExky37RSQfrnj5CAWaxn4M55wuY7jMQ7XmUohWE7DzEA3zAs5HSc3MCwExnyRHUBcsSj3y3BPiHcA1",
  "key12": "uLy2n8An7ysFhhokK12RXbDAYkz438FGi8X2rWiStfQwQLEFbMGqaxBLbNjcW1CGZuMP4Baie2W5SpCXoSNuXx1",
  "key13": "vBkyFfWYzPo9BSRa2ZCmsQt64GzDTWR9sa4gHpCDvCDVhHN5r6kj7uTbxjLG9RdSVwEvdL5FCQpqjuefEp2p1MM",
  "key14": "4xeQVrCYoHvuc7nZA4SYD1pAYZLibvuVLa6PE1Erwwi2yPzuX4hpSjqGE5JpjypmtDG1XBbRb8urfNKGiYSQm36S",
  "key15": "fpQ891Uwg1xGrMX2hgucLrC4paN9bHfGSpSxyF37tagZUnv4kxJ6u9E2ZcSEEXBFDXfHH1HdThB4K87xQPJQH4o",
  "key16": "4y4eFPcTVrqBykDTTYYwURvGxzVv7TxYV66nE5BdbEn3gs5qLy3Pre6cY37TQVEXE58zWBknWa2f5QsMWkETUmq",
  "key17": "5Xj4cq8nNpk3dgPkBqFkuELseEtU1PtzmzEqPq8mKitUR3mvUxP4fAZ6PLr4YVDLk7U3m3n3GNwHcRQTQyQoYWY6",
  "key18": "7a5iNSRz994jikovje3fuM18wUJcXur6Qp4BvVYMKAeYfHYr1u7y2FZfrFgnMGDtKsRNwcmw3ot9KEFWhwpvM2c",
  "key19": "4Ysy6xch6H1sc2pdgNcnyLDJXe2gKLk9yHxLGjvKfiixSjLDUpQ548HUVpurSh9JRYwnMJ6atpJpiZjEyfR24VpK",
  "key20": "2UanuMNHPdvQNr49qC6HGx8boXX5CL1wP7wgS3iZ1j4tzMyxidGHXksVe3RkK1YjBQJGR1YGb5h6QqLMSDVMhgZL",
  "key21": "3nbHQ5zkSCHVkRGA4FXPCWK5cBPwNWcAk116t5av5V1SwE6MNQcEDqZKr7sqGicjpdLuw4s4HojFr7CsCG49Xk7J",
  "key22": "5aT9ES2oYi1Asp7nmvCdzvBq35w7QeDFZEkzbgpKrnSDh19QGgjYQhS8CAbMzN5Jm9KZ2oAvDzP1t2XS3XTMvk5i",
  "key23": "3dj3Wzjymxp3NeyM6fkCMbbTWz8oDrYz7zvrW5AmfMsQD4R8qZg4VdxG2Y2jNMZnvRpUGLs4tpbenJfW1P8EpXa7",
  "key24": "2PfxfFNAo5nXYjfsMhXQgXLiRLM6EHqbna4JMCYXjqP9ruDSQcfQ3dQX1BWYMDBnRg5FTsqHscpCciNTRLy3Mhy2",
  "key25": "3vEgn5unM2A6XKJqb6B9dXNbYDArD1rocQBmE5T1zGf2z5YzMN62atgtaPXYaqvHHFNBB6hBNKr6GQjqzzM977x6",
  "key26": "5XHSeC36mn7xUypAtqTbUfDkKSKd1kGvd7ymhV1eDpeUkqeD1nVTjzWJ248u2as5nJGxzxL6jeQxas1TGqfxXXUQ",
  "key27": "2crmU7S4oURdzK287iKy2V1udx4uSFqp95EFBMVo2gcpLCuQUseQgonqmCm8FoqXgWdN5qUHUXgN32hr8nc4hsHq",
  "key28": "3fRX5kWYRPf4j8sFQaU4EQdEuesqQa4xiotGzZXBvk8Y7svjJurxBS4mKw4HxK8vGGYenUGtbMgWo6sbS6iyvKF8",
  "key29": "2BmrbPyhDaSVHgNdzwk6wRh6TstZhdhCVXfxdjKn7QLZjPCJMG2bNPbX2aCemXBHcaZDBPanvtHk2pZuzY4Yxg2K",
  "key30": "2JNesuRfC1zHmqof6M1XyaCtymyKrq5RQR9D9ideMeAuKscR1Vp14HY8THQLCETAmF5zbDGMpGryW7UsAkDJRQAF",
  "key31": "5DqJVMDLgabtqaFPuJ6rHrZFzPfFR2JdheorcgRKzdiyowLMwWwwCehBa5zKRx6UJFXNyTdurezGvZZ5X9J7Ahw3",
  "key32": "3es5MtR6RFZEqey5FX9UoeoXtR9FhJsdrQjaHmntsCEkWaY8RF6rWVSVvstnVTQN3ixSpoz7gTh1BptRnifyPydq",
  "key33": "C6jhG8TrXQfojwfNKSAx1UqwPGCzyDxwac7NFbu7jNcrzNyd4wcACReKBCJ1ZT31DSERQHGE1ifPkUYGjRdJBPF",
  "key34": "61L6AKq1T6u428JzQ27DokfQcSoDyFtGsLig8wuBgkbq2u5PnVqGEJUyc418hM8bf8ijRmsjzn23k6wzK6LoTtyW",
  "key35": "4PGpoxD3LPH5aWLBiEtsw8zY5J9SAZVE9B5NNXdzQjUUtvoseSuDmJ6mFKZsmNNnbNena4fovTcpFZpGfE3nrEQb",
  "key36": "3V7w7xFD4RJYSB31wWdjDvzD3TzbbRb1UCgyZqFDeRCzA8fbaFJL17Mtizd9iuEBihsMLC6ZK8ASRKRxb22bSMLb",
  "key37": "3gVoHaWrfFa5hep8JVZ72AjpBm9xwUvtzLgGdbhNUGoYrzyM9j9zVkyP9egLiz11wKdSM6JRS9kcXJfSqCkerVzR",
  "key38": "41ruXNJQfnXhNFEX2enpXQcG6VEdoNbY75zcVukQnAskAPowTvQ9dkZtBJ9y9c9eyV2vgyozU9CLJfBHmvBZSkpy",
  "key39": "6BWvVa1mXXNSeHgFzp14d5fGy52fQ5dT1NpSH2QdkhC43CKbh5gEmesAGMJxfcwxPpPuUdATravz55J9rU2QZKj",
  "key40": "4KH5WqsRkAXxuNeNvivQnA78x63Ytft2tpnLsrdUFYQH5RU2w5usasHoW2WcSPZS8qFGbULJ1yPqwTGa13oNf7VH",
  "key41": "5YvdDByPE7fAWFwD2uUTTxg8FMUWW54J7LpeEvwzAznGihihHZhu4jHweYie7kh8h3xkH4dab9XaqbqcuWBH1uVm",
  "key42": "gLtKF9YHp7oJsSoqQsXkzvvZG7hXdrXjQSMgCD6Evu995CmADMoCgRFuFMrVqoUz6im82onJVL55A1UwGACb6K2",
  "key43": "4uK7QySCVBgGm1ducTspopMGnFFSSCPNpr4QYJnQEH6TnznrdedpgagXADSxE29xhJK3wK2uPJTREmLjxtNtRa9a",
  "key44": "5PcMRCx1DYYHCPZs8n9fXmzXHSXT7HQX7EEL1T9LS3JeUBqxHhn3NMr42p4pJVqh5fgZYjtT4c6pZPNBoyvwXFaD",
  "key45": "2CpanYRJ5SHh9qwXpz9dR1Aj3FKixRKjbjWqhA58PTmwmGyjyU7qp5j3sFeb4B1fk5YrcvDeUPb8R61v1szWpmmA",
  "key46": "5xqr9gtQ2xK3aosPUarD4Crc6SkvCkX6TyEzFbbqhn3kBfvq5uZ1cAL9z8K2FA6G8bP5QjhS29VejSmJE2CRkHzC",
  "key47": "3qrQfqfHcw2CyEKtM2oyCFQmb9exrsdDUE3LZ4T5Takw1MjFicHvFpajZsqsCQ8VJbwdszcJoNSRSnMEDt5ea6dz",
  "key48": "5T14MpQfSWVZe3782U5WSadWVwDBaFeitMDRFYWYLAE2G19mZK827P7vaNXcGJqvRSYFUoFGnYNy8QPmJfYJJ3pQ"
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
