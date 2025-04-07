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
    "2CAUqbTbV2jBNBtHVo9dSWwpppdT5Z1zZHqdpyVAwH7SbGNtzXzApiMVmRGt68d6YAayXKPPjQd6NtwyeM5ZMKvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "biQBCsRyqRT164d24nSxNbkmRbY33yncXn9FNSepmoHUY2LAfKSzB1UrBjLihfNwqdq14J22gqr8xPLhyAFCcd8",
  "key1": "3aiim3W6EuSgA3xcVXP8BoSPfhKGc9QmoZnwEsw6keE81zfqCBY3Ms1jAtJuQoZzENRsYwon7PKMYZ1A9dGV4mdh",
  "key2": "3BBB7q9HJ1Mf57tbcdqyYQSNcB4ZYkcKpCdvA4NNpVSxDwvSP3Yd6tgK43TbRZ2XJP4efoeqCJQXHax23z1WBbd5",
  "key3": "5TPK9hKDMPkB7myyayBfx9Yn25XB52qq33yAXNYUCdaK1h4qPrcxnQpQeapimqipuyoFdZsqwH8KcHfv1HzSE9MM",
  "key4": "5X6reQ7jgGnBDz3Qg7j8U18DiTFAY8e7qhfKAMXcHEEMSaANJUYnkYNJd3XHBdgMLjgAukviQqBzR5kHFDDW2FL",
  "key5": "45sX4fi6dEYnK2gPpG9LTn4PJMehVLAHn8NcAUFcQNi1r1koj6LfMLGkG6ZnnpKCy3kqt2ixHTV7dcvuhCMqda8B",
  "key6": "5x8gEJa1gSSgvncZ7FEg59KuL3GANMTRkqwPrrWh6YZi7PPcAXvhnoY4GeFKG4RGSZ3pmfYDJHpRmX63hTZXy2rL",
  "key7": "5tyx4JkdzHhEdMo2ofGrEvTpHxzC2mK215jwnvYh2fmq5dDhjG9TNh1xxsf29jGB2UN5Ly4gh9dFH49YPMLwvc8",
  "key8": "5HhXpP2QBpRhpbQoGoFpBj2jvLGHso6SeGA4xUJr28jN3uq5XhgN9W4vN1UgtxTm9QGXsUitZB3q9BpvcACuTqkh",
  "key9": "5z9UNNwRxQRk1W3oEfdEwGBAaeo6c6xoofpMbUBkYaJpSZDWnqCH7mvEBLpq5HooF4L2QV2485CTExQY5fmfszRa",
  "key10": "Bg7EcfGosC5Xi4FGjXLo863wr2qeekxoU9ShTgcpMptJq4BqnkmV4vyNb6LHpeLhgPzEp9cx9rRKiwbjk3K1ikC",
  "key11": "5pKNV2YHML57SrpbWTs4uuY4NGaUMt4PWHN1AKaTUZ3Jpj9whjqRsZNj1WWie3opYRzvjftkvZKHe4MAxX6CbYtU",
  "key12": "gm8iwfHJ81r5jtTZsfApncAbu6hM9QUHS34aDDdKaC6qz6HW4NZ7Ho7n98cjSECqQUwPNa7BAtw7kEtTtP4KMzt",
  "key13": "2xyyoKFzVACiTTPtNxMLL4XCbRuasJqpwNvLQ2T8cCPrtBCAbqsNJUrtJpphiT9FwBXNJiEwapdfCMzRckLLw5Uz",
  "key14": "QzMpCfRscKmYAfgTcVjFeNHqWAr6L5Zb6NoX48pBwTm6vVfHRM5a5SSqpmR7Lpba9h1NYQPAS8nDPvpopacFdWA",
  "key15": "4XVQgtfZicGeDbFSuhsHGYvz7prQd262PdVQxMLZU3oBuEdZtVQgKsRgpgYp3ybJcEwPh8bN7tzVzxZqE4D36ewk",
  "key16": "aj8ArycqTzszdK2UiASzDDWUEpDrEq4e6DmNumiZGGpuwLkm5d6yoTXfxFoZFp1osyTj4enszq39DU1RiS9N5K9",
  "key17": "5j1d8CPkh8eoUTq91svvLFWAGo7JHWF2FNrg9W1XgZfU3nsxkjsV2b4sYWFtbAS3JXP16gGcVFULSDkMui4uDWSi",
  "key18": "2bic28X74L9xQ2S3p9Ze4XibTZgc39cc2xq687knELtyDdsxpmDhAzcw2iswcZkQNXGSgx1nkUy39BLNMbGvmKy8",
  "key19": "3Y32HU1tEH7vRUW3f6cpQi8jirm2UH5EPdPLnPCNMmZfTVoAymDfptw5HLt25dzMNqi8myC2TXQ3NdXQbwbBSrdY",
  "key20": "3iqgxZ75SKi4wWMPoffy8aYHGLz8YR3iGbSTYSM5Vyne6535bV8o89mi4AkewBVJsAia2Lwf4PJ3vDfdJ7rKDqwf",
  "key21": "2AmmY7hMbSiPEkZjpUndeP6g8pg3vom2MFh33yCvRdBCNFSheByfXFAPtLcqe7BCEJJeMXDZiyBygFh3577qXdAk",
  "key22": "3Mg5uF438pyaUtQMfmXSdFnLFGXH2MJv5oPkFqU31655y76UDRiifi2iFhe3UMtQonpZ3mHroRGnzpZ6jrZBd8yN",
  "key23": "46g7CmGCYcnuAyiaQPMCBmA9hCaHXbKJnTpXzHQAu3Nzv5zmb4YL43hcHg8TkJb3x3wL7yEt95B9qT2CKmT9t4Aw",
  "key24": "2oS3xkKQhav5XDWLwLhoBDcAer6vd4HghGWB86nAQ6ayt8TvdMXeMbX8nQEwmWpGaWz9BSKofv9TrG49Q7DASusQ",
  "key25": "53mniCWqGSTpJKZ6RNugAJPoAZELzfLqjzeppTeaJAi6RYp4zpBncsKbB8ktTczeYtRRvYnXQWzeUuE6TjhL7i3b",
  "key26": "h8A7GovCHud5iPBsvmpV2HBXEHkYGLicRPbg2WrhknC9QMcmYvat44vZfBDH9EZEzkauyW4VbSUSvVyibxHnxHf",
  "key27": "355ixt27jwhttQTV3EbgFYJ3zuVYyBXWfeMTm6wDDrGt8yQHkoGa7fhzHrmWdjxDZweWxRfvVTGeG8jvqSnhbBEZ",
  "key28": "3N8QBARAC93Z4rouWyryWM5mAuDahzQu48yJuFvF8d6n7LGDThmt19KhkTnpGsCt1JvbLc7tfg1rZGFQnzeTCjBo",
  "key29": "5EEwPhTrKVUhqbBZ7K41pukvNQ8MCR6UpRVLhMkwYXCRVBXKnaDBdMDUZSC5VDjHF1cZVdnPwEVXbfqt1jZF5NGs",
  "key30": "3fTzdjWc6LVqDjdJ3WmAitN7dTvjk87ZpPByJUcpGxDRQYwHTHtRuKimJDSqh3fpvWbnskXiKp6rSiFiPoZAFgCN",
  "key31": "3qKcjg1oJZTigJFFHc7GzNZifPMEktLKLsMvbgSgqryHCY4NUyFbYq2CT3zNzR7n7urH87Kq2q2nPWcVhCMDZyDR",
  "key32": "3ibGiiqEqzvxpFx4EHjjmqAVBMwTMTvfBDdAprQyjb2hFAMAr8bgRitnkGNeFij1smZcgJFfsfNRFS3eu8GJBrdM",
  "key33": "5PmsExAt6716NGmbxQrsqrAPHXEwknx3MjchA9i8PLKfZybzL2gkpgsT47NXRC9Uow33FyL75Jj42J52SAar1fkK",
  "key34": "KXiWXB6xeBhGKAcK88jWVDGJZmQwzp4mLmsuyoL8EoV5c1t6PgfCXzbaBEUPBxE5RmhUXstii7wqzbH7Mq8Lruj",
  "key35": "5dtUVLF32omdVh8aAe1weFtweD4D3esPEizYtTXJDWmFn12zaY2oRizug4eGKrxoWSQ9EzDXpRZzLk5z1qRLoPMC",
  "key36": "8ChG9ZifVZsVjwGDR9gxJuAC4CTCWLFJVPBGQNJa1uDRi5ceHeJ8XcW1FUmmkm2Vvupc86n7y9vQNA6oQ4WVRMa",
  "key37": "48GHXMg6gs7iLAZJKiTiVL1b4uvES7GWBc1zCWZrqQaGWCKr1feZt7w8anayRMck8JUtZRdLCbWdb1byvpCaGNsG",
  "key38": "3qtDvK6k62H137n4fFkeEZ2mECe5e2NYp7YGYSrgW4VqvZMU68oMpfoJebWedse1xQXNcdrfWTzrg5T9GeCoHdcG",
  "key39": "649SyZd4yvriaxtUEHYV7V9T6Q5ZFQi6oG1mCZn8JpmgqpHSrporDLfmqipwscigvXYYXA1PgUmnTw259CgBJybd"
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
