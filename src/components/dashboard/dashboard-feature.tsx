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
    "r54RUdaWZDn5gBnxFKKuXJaQdDvJ3RHkh2N5vW4QwZ39hjcgjW5yNXcyKt5S47BTiEyTGq5WS3CN5xic2r6Vryg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTT2eTAJBccJ7poCXeK6phGnpfEGMYyKdAZzbaRqBU7N63bjTJ8ehhNoqEAQDJG4hXh4cRjv5BXPd7dATde3CVA",
  "key1": "2YAQz2fcGNipuU7oddwdWebQDXwGDsHPcb5yuBPMm9fE2JJkFPKrpQyfkjrQLVmNKFoBsGNGKgpC2tszTyS1fbxX",
  "key2": "4CYh41yGBPzandcB2h6SU4QaH3XjjErWHyvcapBGLyUmNfKi5pjuyK7GZjf4EZ5Vf8cPZPtrkf3H4BwE6bSDqBK9",
  "key3": "DC1HaRrAkLgipspoYoSMzZP2jB5CCCpdER54299PgwbTUr8TCEW5oZ1caR2YxcJnsAhzT7qczGRYN57kouEaZyV",
  "key4": "2LrUNmD38QkPsA5zizyPw2fSv1btFdDC9uwKp3tFgo1hJKyg65ehHzkujMsA4if2XcwhGFGxhJgT8RcAU6Vbuyv6",
  "key5": "5UJdswXk88vkg6fQMkAetF7Mf94GdECpVAsqNhbmrYXLu1SVapmJJ9pWHCjga15vpwC6RsgpcYq6yUeX9gLzvKji",
  "key6": "3FooegaHTsWnWd7Y8eNDch8od9eProoBVJNaqs3XRvuKjXX37MVGeaz8Fok1Z8HCN6BDvtbiUddmjnF17oSYJxBN",
  "key7": "2ByXZBdFnuHfqcjjA5YnJfv6mhbSC6H128hDnaXjiE5Mx6WmnCXUFMGrdSMfQaZfeZU3cpgSjLyuoRa4UEir8EzL",
  "key8": "2vEocb1UM55PGx4bsU9uYwXPv6XZLNa12zepmGT3prZ5ZsL5QvYv7jzHWiTW2VU3Y3pr9v6moPbdLw1Zg7sfHVDR",
  "key9": "4PHckneDXDt1PSC1kFv9uzBFTkPN5m8gpD6BECTZrXpkLaF5N8bGcVEyTWQu2n3Yby7iABaM9tGN3eunpMj53PaA",
  "key10": "4W6zRZi9vXpQNDo37bczhVpvHJRfmP9ah88NiS4SzaeABEzZChqmk55ETwT6BtHP25HqUMT1wNcj5dRcRKUn5v54",
  "key11": "2TdEVkK4ysrtit8fhCUwqUA61ZQcHbVK2ct3NrZUr3afCno84V7FZKnPZybxco3E732qSeNgPSiov1jMmn8guDiv",
  "key12": "3yLJy1BnZDNp787M18y9airBXAe6Y7qHDBMnTJXE7YyQ3Dhkk4LMc69XueDFDbZSi87oAuRYcukXKj5sh6KWgZGe",
  "key13": "3t1fragVaUvwLUkUNxstX7zYi9hmBniKMfjTwfHTUb2ZHzkhP46Kwoatssp8gzk6Ce1k51mfD3vh9EASkT6TezhT",
  "key14": "AUwkJzAgy6D7p2JktGgDkNL7VbGGN5b6ioVHAVmSkM8MHsQJre8t28cma5UHLhjd4FiRFki6aHNwkpqrsMsJGqN",
  "key15": "5SN9WtmU4jubhhR1JuaCWAZqoFsTzmAfP384g2NjfG65adcnz1jbMuj7NDQPhX7L3hK83Hud8sVZw786L25HsbV9",
  "key16": "661z2ScDpeUPf8Vih7oz5fMPsxKW9djVejdb2AAQqCDoeuG7dLJRdeGjf2Lkn8xy5DiyFShYjd361uC5aPa6GiRT",
  "key17": "2DjcAGT28JdDy7EBuuk5SrvGnqWyKbqAiy5udrEEE5kZBHNx6qNniaYzUXgLz6kyc6nBNShd68yDJyXCTLSHMadn",
  "key18": "3VcX2HByXUbJosYVfqFmSYHp2PiuLcWUjjSZ5GzpsUhUY2ns1PqYq5VY3nLugEsWw5VqLCnttTNnkHXa1ePdKhBm",
  "key19": "3XdtG3kfqnZEJvVYBHAgEq8KtiQwtFWEnsSAmnNQ1Bb7Tub8aPFqVkxmwoZ6c1qxNeHQbinv8pgVYR7bMdjLynBD",
  "key20": "4Xgs3xm98wub67J9nBUzSRim6CmLFVuMGmcNFXzGdvNwtPJeH3vnrei2RaZ2HG5wKoeZbD9CWvrBGHPxjWLffnYc",
  "key21": "3Re3cvVeAHyhdxz7P7ciEcz5ezoTfdW3Za8CTHjgqLW1CeoLwoGNj3AmJYK611SB5hcRvh6RsLys4ZZqos1WNGzb",
  "key22": "66qD6UZKKnX3vFxMe72BBGbGsbxkUFqGsKwTdcUQC8dwgR3KC11Du1jhRVpNtShRcCzYXjMug5cLBYjvWJKvnTSR",
  "key23": "66nZDVwRPkuHUYEwF9zumpGMofL9QZrK29oFYRo1NFz42mB7AtjwLbhWaQRVKF5yxZHUZ7CqscPa48attm8bL5Hr",
  "key24": "2SnWHjRarC4efG1PdgXGLhiyaLVBAx9pbS9hRQZP2yeQsEq1DfyrTFafZmsi57Gp6EdzxCR73ib5inLBSRHvNeog",
  "key25": "35kUcJDB97VxjXsboFJissaTSt2zzdmJ7xfT68wprqE8KzD6vVWK9mSL7g5TkPoszUM8VdwQBbBHebpDMUua2hGg",
  "key26": "59az1CSW2BrxvEvSY7CKeFsGaX1Qc1SfFHg3bvZBRya1kSpAPyAS3RrxJ2miPpmgv9zz3aFWQM9NAAokyDWdfFrc",
  "key27": "f7FymaEjrZb4cBCGA9iNc1yvCjd5rsd72vXkQs9rPQvpcfUV8DNrWA4jFix2CHjuqp4Cr2iDuXceE6uT7sgw77D",
  "key28": "q3urgMRyu4v6odaMWzbo2LapweziFNRp36VB4aSjS3Y2uPdVqHsWckXvFixdwgpvia5pgHAzUgXfpFUKj7vMFZZ",
  "key29": "37mYm8x9TRSks3Jg9gyLiexG24MpkfzBMe8vMqB4i6edgsCmkbKCzWt9WyNYrr3UrG2UnqxYiC2m91E29B2xzQFg",
  "key30": "3hYKNcF44SRRhBPVWYSFdryYzXBWeSjPGGqnv4HZqoHtJ3MyGBHZDJ2J8AV2ZVMTug2eJN28peF9Nhm4aQbSbyz5",
  "key31": "4E9ULiQ9LRhsq5NKVfJ7CxPHB9z96MSMwFZAYKFrwatVUSXMfKi3NnhPdtYwt2jpmft7qhwADKfA358CxYLag1Er",
  "key32": "4tN4zLRykXz5rtfwMuJiYdvZE98mat84xQjqpTuWUHnw9jHHw8iKW2wp9M9FJWqnHcR3jBai3k4GPf21oXi758Sg",
  "key33": "5U65g871581KCXud8iSFLoTTB293isNZH6jN2ofZivohUcr39HB8pSqsBNuZyVPFG6KkJqYMG1zxiyXtwbhhhTC9",
  "key34": "3pZjXW28fZjqPi2xJuR2asws1e8rCkHEQgtKQsowY6NbRXZjYyu5H8ddPQFTCtBEioKdWZMjSWLPhdHZhWZn4wEF",
  "key35": "2Ks1wNAx2u9e9C7gZheCighfdQsHB94HxLyUmzqQQmLhrVr4WeUuP5mbbd7b7PrNAZMLHNL4S6WjWbLF1v4XMtFj",
  "key36": "3ik5vtQoidaSs6hhvMpnAqZhjXBj32wehUAiX3frDL1HbjgWnct49pVniAmHhjo1wUEisaMD2yrTPgu5pNy4YDAU",
  "key37": "SmEEARJNTPt2qUdAQTdCGr6r4VWQzqrRMwCoT25ZuFrv2x9BqNRBPyZfRTPoQ7A4GwTxLfoUJZpgGrndSoCo6oC",
  "key38": "Uu71V7hrW8K8eDWXxHUwjJ6xn4EVVqYVxqsigwDyvzNaigaeHMUL9QUT3aCnF1cS5Q6FzHS4PJ1CHbcLdKRaqX9",
  "key39": "62M7qXzCttvhMoK5f7BA7NKtEKPfrZzvRY9hFeDpxUhCHkXhwz4Ec7xANkB4gdiQHMbszCbwMVpivFzgYmAfK7CX"
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
