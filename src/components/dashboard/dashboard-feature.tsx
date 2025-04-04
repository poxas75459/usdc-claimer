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
    "2X5bWuvifiSLhHJeJoMGcbSy1xwt1uWfkkzitSgYTA5ddDhSZDo2nPyDtiE9MXvxeuTKJ4WwV9dh8UKXphXgPgbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wzrtgJFANRHyL4STUk1VYXvNB5mhyrpMKvR94RgWtvP5DsGD7je95R2G2QHTX5rfNj1BH3Fa1N626TDXve3FmZ",
  "key1": "5XgUfMm3dDGnBzFxzXEsRN764r94YkceZ2xn8vy94s83sePq7wZBh9QLNREbiwjdFXhy4Z6PVKtd7D1VfgeZMAtk",
  "key2": "6wV2hT77gEnFz8dcpXGQsoCeAYbNUunYPMi1ykdtL6JgJi7TVvonvvTs3EJqiTfBdr5xdcdTfkeeiPeSF79BgA4",
  "key3": "46F2k3SkeRJv9NuqP8tsFZPirkXoEmg3je2yb3uDWXZJUAkNpqsrnx8yUBRrCiff2QAvaDNGqGoFrLVU43sungUJ",
  "key4": "3fwyDAro7coWoyruTFEft5rEuTf9qBctba1oAuu98fvWkMbUCkhRxHJRXZZ95saFrPy1GaLHyyCtrhc7wfZNbf7q",
  "key5": "EAg2GrawwsjaGhzm9QrXCuTjWc7zRovqpfPkX2S4oS2fntEuESE719NnZh6mpE8RDiwwL4RDJU6Sy6s1KZ6PL6J",
  "key6": "31niUWxB7sfLT7Lo1hjNy5NBg436Z5gyC5eymF4LxifTQYFQ5qrvbhyjHzVi1qEEjAMeeFwGh6rkXj21ik6MXevY",
  "key7": "5ML2sCJHBisNtUHbLpiu5uSb6FzpRvyX21pGXJhUss7EWNJoHTMTQeExuTwjUazFDytgBTrhhvSftYX46szqexNu",
  "key8": "4o1N81Exrp3Qr4ZKazsnuVgiy8Kkc2DiZGUXpzg82LiYdbaZkxv8BuqZdKZEw7K8KexknwSJBqGYNZHQJccAg4bG",
  "key9": "3cWQ3LQpBbt76xrCi53nqXGYyXf6e6pNGtV7tekp64fW7uFxPJVhrfTsTSMFRzovAL6tTngLsfSAVki9SQvEQUgw",
  "key10": "3QzikNLHUTccVsyFpkme4DtL3JG7YPPgjy4ES7rBSfyYMLbKE22izRwpfWr3RNirHau3pkMy8aWcYtKdVhV2jbHA",
  "key11": "2vUCT7VG6CVupWQg7ZKyptS2d65AkyPE2X3PVjyp5yxuteXBo1UMwrHz7HbRmME9tiiSCkxvu7sjcXKJZbWQ7jtD",
  "key12": "5HBFs6gq1tWwjHYKocFcMnPSxRK4mApWnXrSmopKmHjPLh3S5CHiuoZT8y5VdKEz7ZrgoXzjgkvWkcm3jm9D8BmL",
  "key13": "4CQAXDEfNXDmzgHUmu6xzhTyuk8UveXCov4HFa8wps1a7fhdPYT87cu8sPAEJvfFwSaXMVtgn1L4sQ3RKfjKTKvb",
  "key14": "45b9Cy8ESR5A671eU2ahwpVdBeJ2Kb2bY1yHJAq5hUNaFSbzLzBrAKigF5SoAD9icANPgHDS6HB9LndAW85w27Vz",
  "key15": "XwJ4d6r28azEPbwhsuG4RjiTyLcyvzGkTQjsuMTUpb5HW6BLRpJQ7HWM4oykWDVqxUJ2m86TqPb4rbd6y8MiS3b",
  "key16": "5jCSojFLqhapoAdyJ5mVZNvsNUDiacxuCcsQ9nzVC469zSEdurbXehmap2EYRkdys2wdkDPdL4t66ZuHLSJVuoJA",
  "key17": "3qkucSTpQYwG4snDhzCctREJpA5MZD7GCrEfJHtj6nSNdLKpAZGjnUrYEpGEyfpZt7dege7D5UzayqfknxR1M6GZ",
  "key18": "2Mm1x3iPb891pSE8bnq2azNK1i3pf6nmFk7PLJBTHDUAYxHEBT7UD3Tii8AaS335uYR9urdo2T2WaaKqifwcRrad",
  "key19": "3m1w3kgd9js5bvQCNxqs4VTZE5qyXgTb7bgVVoym9rhcxvBwWAiHV9eSJ2kp7DfD5wn3SPUDdAsYQgKbm64k5svp",
  "key20": "2TxcS192ShdD7SbriWUTWfK1iRUuhR6GHyvse8UCVoaJGMMoH7QT52TURDShMnBxKjHkHocaHFiF6zQmda3UUKFW",
  "key21": "4WjgctCSoiqDDS4szcj2m5Yi2nDcV1RoReFjpJTrp1sJsbcqVv3w3hrZzmF8BnH3JTjuMPsb5QR3mnwHoL2MaZVw",
  "key22": "51DSbejBxHpuW7oFnxqvF3YFTE2JLU6oXif97gjWieUdwca2stVWa3Jx8ZTx7zbYH7ym3dTigsS3jCdmH7DGueTv",
  "key23": "2NaxEJpciKR3QZDRnq8BQzcNLUZH5Zraur2ERVFPBMdHR6tSqZNuJ5dJuTKL76PeHCNUAacDLZMMf6w92EB4HSe2",
  "key24": "373NwCV4PsB2WBGqYTvn8YYpYewiBvnq7N9Rdg9YuTvLLfwRKJUxxbx2qY3jX8sH8P1ZcPfF8WdHrDscb1Po2iZD",
  "key25": "5yye9oyhv6xGGvk7EpMSr2MadAcbYisu4hoZXJYv4rW6Ljy2n3rAgs2kY73bvUoxcvQfUy6cPEjzUzdikUR288HV",
  "key26": "4X7fUW8b1kxTaLXDTfuwr3T3scmwbh1dwV3Zcy1YvPX8sfnYnF1kDkfBHVbkg6qwXMhWE1ZgNJSRT5gniRfJj1kD",
  "key27": "Ki7kibWDn5eyYMjzKTH6Dw6Xm27LvH965LMAAG3iqxQLzwRW9peTkHnQGYGVYThTvFHDKLGc5zAPhPgudLfS362",
  "key28": "23kXRkzhSoYfX7e8DBKn9tsBYpAPrb3iKWMZ92eMeRHAZM8xq4jFPuACaU6bH7sYcuzsEEbch7bXQGuQtXdhkWnJ",
  "key29": "3uXJn7KX88nDPLmnasSPGpU7EEpAxHvqC4znhyXCu7jBXwyxpmLDbQ3KA4UhoG7peVbU3KHFVkFqNT5DVnxLc1ze",
  "key30": "4YPsVjfTqX6Nn7T1attwZ1YjowACmCoYpd6LHswXQiiusVhU4CWHbmc4m76r2u2s96TzqXFTrK15XRQR5L3NzUyy"
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
