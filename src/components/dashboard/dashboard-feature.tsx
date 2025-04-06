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
    "MG6x2HmsJG1RxfA7viQ6a8837QLZbRjfQmBZQSZwJxkV77gW2kVd1Nm5p9gcVM9kJQUEEYtD8dcZbbcGstoVhpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65EwkknzaF25RfxZH5jM1hqGafYqrUBu6fp1C1KNtmin623DPGTXeBvpRyzDxXQPqjcXi6jBZg2w9ZP6dWvE6AyW",
  "key1": "3SPTSU2AeMJ53uw33jZAwTxxLty3bd6PnU6ZgNcRzhN3FgMq1jGiRzSmoLyicZMaRfSrc9LCEsG9QJB47gtj2y3N",
  "key2": "5W6PQ9k8GvqJFehEJVaHxaAvr3rWZLH2u5DXHqNR9gwCq16Qe5aBkedZKrca4SiMCY4J7XFWRQEYhBhKDj4kG7Mi",
  "key3": "5qAbiR6FCdc2ZF1czouZFyqituAkFp5mKYr6i8bkaqXNRNU6nFZZeue7Fv3hu55otAPTg7yTkxNm5XcMSr2tUpgg",
  "key4": "5oLJgRaNKGLm9JSMP3GF9B6G53HX8gqvTcymAKF4J6bLFF6arCoE9g9WARB2Y6ovfPqFGEEgRazcXnooD4UXYMkL",
  "key5": "k7bGYGPKVQv4HVrUSUVGU4hiiEiLQZVEAbKCu2gb5NjTi3WwKcmmJMcFEehvyKYeFjjFZ4qQbT3eHnQauGAHHr8",
  "key6": "5pXLyHEyarxCTMU1aBpX9wef71Rzxbk6ujid8hcDEmdvX5QNf91AMyvwA9qeViwYMqdiUxMEKZGLd4eL3y7Em5bQ",
  "key7": "5jvjkFVniLm7W5o2GsPqNo67Zvh7515NnWnreioMpcKTn5DutuCn2eRrcc1t4SosCWWJEXYEUV84WY76yx9RkqJY",
  "key8": "4KNung4yiTPcCaPu1SQzCCMpCgfuJxKmzNK7EJ8nyrAm2nZDn74Xki6bEmn4X79g9qSitwncZr8qYFQ89jXdaftx",
  "key9": "3S1DrfFZsCKMyht8jSFzhQJv5jxdsWvT3sMACjwmuDRwTRbay7UB2eFN1YopVH7Rx3UHYAgYr9DFQLU6MDRDX5b2",
  "key10": "4hFV9yLQXnAe2z8v4f4wMrFanPStwY6kDnvAkt1sPJLVa3hpBxBSHbeQwzx4K4qkwQqG8DyQsy5egL323wKZg2Lm",
  "key11": "3u4tGR8zEiHczbKK2LYmTH7cv1RGhfNNgWsiExiD6jJiXziiyXr1JK159S6yVraDk8VYTfe3KbKA1anfDZti9SGd",
  "key12": "3H6RcKFdww58hSQdYpeuat4mGurwkrzUXQ8bxnpKS2JaYmXVjy9L5SW2ioEPvNrfzo4sVMU9o2QgB2NpWZ7Jc8Tb",
  "key13": "5q7ZT3bZQdN4BRCxhoQ8h4pySg8eBYZHqmB4XtMu7H7PKaC9QL9EaMAo5rdhXR3MRnZFMwMwLf7BGEVgJGJcY8xr",
  "key14": "GSNSwHGaFnkh9q4H3KtkHo5NTqwGbb3PVNGnZm2yBfem45kUNBsfHuzm3agkCD4mLGiJ1ksjYTt1tMFSqrVZxdT",
  "key15": "3AH9C1wpbzZ9C7JwYnHoo2ye9usKLKT51M2RozLCj2AR8iFbYazaLVv66B5fGFBPowdCem7WPJnWQpDRzzNh91Jb",
  "key16": "preCZA1ufwbF8K1gDcnuUmbCLSdKkV2Zd6GCyUUT3ez3u6LdUqqhVjiVeN6cQj2TYNYYL64dZfgFZdu9EaFYp8j",
  "key17": "5PHyJsB7x7958JaXdqjRMhqDwmht76jVqGtwLJMiZY36LGxHaN1MUv8dpymRd2SEZggjKkgLdW4xTNipaYMaww1w",
  "key18": "3otWw12m4HLFSC52Egto3qt3i9vr61VbLRj4E7Xeg6NTwgqhbHKpsYAQtcaeDisbioQ3oCSd74YNQsZBF7M69EYm",
  "key19": "4vF7gzxozyS51nKvc2foo6wKXTFgGSxv2gidHfeS5Bjh3kvNrDrG6LGR5HCAd9kRrkythoS6xX1zhZo3KShyQ727",
  "key20": "2qjUjFTRoGPeARvBShLKRdwuhAjgkYSJJku2sURQaPfncbn3ThNkswKmPEd9ttft8rCLSswFUQ5rhdGWYeh8HBVt",
  "key21": "Qys32PBtHYVVCnc1ztwe5TzsZ3UHU1YMsk1rdck8ceoM5rynqmfmHmoX7YpKDMon3NEUd4ADg1BMbHvhSi9C6Ad",
  "key22": "2sABjVxMjKQPWScuMAitWobGFe2uvfAfZ6ZEu5hfoSK7coM8hpyDZu1Cg6RY1X9ooba6Khj46eqVUnRheubfrmaE",
  "key23": "4LjnFym1s1aYZMEPujPY2KJu12tqbam9HnSZEDDQbrxGL5umpJJqx6nZfuNeq72eLqL28aA8wMmPcUbMbrQ4K3TH",
  "key24": "3m6KrXKnPkV4wcUb5jCcuXVm6DoxtL9Q9UkdYMTcEbQkJFugeJ89HcvM8cH6pSH3PeJsLgJBZzpyStFb3zxHx6TD",
  "key25": "49chjbj51FDHbGvaAMtUxZZYghfFJn5V9fVhHhi42pgZ74nwVFeakqo7rirunptuyFibTiZAfcMrNzriSPsRW7hp",
  "key26": "4siSNczeYZ5z6cHU8fFo1fxXV1DbdnUpmq5ExUCEqpXAuLJPYBG5HUdGXtSwUpw8DoFqfQfAQwYqsMsbxZJqRmzk",
  "key27": "2QRQiR7TiPWCkByHKYvsQSU3PGRCQheCjT1BMJLgg9NJ1woSXkd88HxFpb91KpnnKXt6ZMBgXoJoJiYU5dcPuB3",
  "key28": "2qBnbSCd6KGS8Px7qMcaJoYgZkzaHftPoPbqxaqFStWpUnFSFVQ55sRssA9FWUfxZ3yQ8XVc2xBKZdyNbzxtooaQ",
  "key29": "354X2NE7grodrYvwgm1skaPfETp5RuJC61ULRd3143s7aTBU2sV8CUfMrF45eoL3c1iszkKphcBJD2ZnifahmpjW",
  "key30": "4o7tnqBfzCfraL44MvS3htjFkZ2iQW9aF534NK3dy7ZgVg8o1LytyaHtiniXK1UiMGt6d6f8G77na8f1HKUgU2eW",
  "key31": "5aXqqa66g5bQ16cHkNRxMeVDjteFwycgEadZUoSmUhCDfhciGGkoxAMizjgWc42pDEN9t93MCzLzTjrbxPfZ9tiy",
  "key32": "4YahAdLn5Fd47wWRUAiNGCpeZmu18jG1YWxodA8Se8nXFzPcX8fUNhTQJU53e1Ee929ZLW3b4DaAyunKSU67VqDL",
  "key33": "5QLRbNMZXFXd7mKLfbDQL3AjRDMevmRQjo4K9sKwEjRwzSpSZ4TxRLnUgsqG5Azmct1QXYr7rWXmaR9ufDBZC4bC",
  "key34": "2S3Dz4R27Tw3VKiPyrNArep82NBkk14EVE1dYvo7rGWnhGSxhJDWJeDpu6KzBYtJ4fQ9XKVSvQV2xm85EzHcJcsm",
  "key35": "5iDzJmMqLgLNVZCsQkwEaig5GZj9caUMPEZ1zM9h87UQqbw8FLrb5H82Lme1sTMyVSu64EfTgxomYQBAf71GaXCa",
  "key36": "5DWP8nDxth7n2aw46C1edMSTMpJiBfBpyoRS4ag9LrFxc8VUMh8XScs919fJyDz5WZrg9xMFthZTeqNzuk4gtJHv",
  "key37": "5fmehtyJV8ATxsg99KmtjizjoP7je3G4eVXsqUnQ1nWHfcHpYcGgdXwHy7jQxvU3qQNiBxSXBJ2r8uTb3GfEiKgS",
  "key38": "4TVzSC2kkpvGurUiMTo79zpJXxWSKzcVokH45As2FLqBxMWv9iQ7bjHjkLxo2UYVE9qHHoDF8h8EbVxBRd9oysVG",
  "key39": "467LEQzqP8PdYpxmkkPV4MVTwpDC8NK2xuauAu1djWwQpgNNwgBQFnJdnnAqoFzsAo1LuUMSTgqdtXvZn8Sx3dnN"
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
