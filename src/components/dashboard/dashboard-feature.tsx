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
    "2niPyZqUcwqTQXBvD1MS1L4j4J67A87pVcVcrVV1PjF9hPyzjvjH5CDm4MV9jbhoa1Y2b4eQVXPFHoxvJ69eCFHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sndDzxci1XtcUe6qZBfKcvGETBe3DhebstiKsKzoM3e9R7jDM4BxU28uVxSUeBWRdY8BTpr4Vh1wvtQoQKXPuRU",
  "key1": "gxezcwM37r9zHHr4uZWkvDjzxpHRmpXqJHS8Wc8EkDrBxB6NDuKeffN8vewwysL4xgqzrwPptaRj4NAuxCs55Nk",
  "key2": "5nEi7Wf3FNmwt6oCSb2V8j275fwAY2MJScRegxpjypx6WwJPvLfdn2fDKtrJP8pnzuSedVGvsZRVEEhdXwQJyWst",
  "key3": "4Hdf5bRGtTLXWM1zmAf6DKGpkYdXY3h99XXFuqcZ8A1oLe2YqfWpC9uiRuvrX9JQFEaJxMcF6iLoLg91wVkDoZ7A",
  "key4": "5HGQqTz8z6cyfUQSFLYBbxmirp9yaCbBE8QF4sNysYpqUpwXvW6Gq3cLTjhc4Lpf9r73gEawAEnfim8kkjitxwVa",
  "key5": "2CdPk6Rcu8yEmX5FRHvZnHkWMFhmQ9ELaqg79xvP5AJgvEAdMCAg68ffi2z6vZKMMPUrmdxNoNSr75KvDdwkZDHV",
  "key6": "3wYFMwcgr41PwkVTAfoTjvvECeR5xjRGpFpmTTz5UwoDGCC2KfkGBZ4oFgRL7DvC51ftwsziB3tuNUBFvtCKhakD",
  "key7": "64ZDkRcxJQwfi7nwXXuMqsWTvFZMVfHnQ8qkrPNv9iJHigdRNDyEH4gCidsjj1aBRMHecvyvkaRLeFXSKtbUiF1k",
  "key8": "2xvuEBnNiRrS38tFmP4w6gnkTYwuejZKmkqrY8Zu7TJKYtSBRtKubJ959wuPYQNd49BvJVT9kUtaMq2HwteU7KYm",
  "key9": "Yhp5fFEmuymPVYBcGk9Kp26E3hXaqRGWwxzzVZcU8k5GkeRJfNQZcufa1z4N2GYjByhNHyFPKD8pXBiuHVbjjef",
  "key10": "4n6uSwNSLREvgoeXDj1ZnKWzZH6of2T3vxG2Xi1zsV16PM9NRnwYTd4wBSAbdkQZKoNuTBk2pudcJb76JSdVwBvc",
  "key11": "3UcQbFrycveXF7kAExGks9SFzmguLFeRA2FdSRuGpyMD54rK3HyS1Qj3ibFc9vKACFWH8aWkLa1t2uHvV3DLqFzi",
  "key12": "3MvdQUhRmMQJkRWEZNzVkRA5e5gnNvzpftfiVGdLBVgGJ3996ajjaJAzG1eHks6hTgWzsdqaD3m2hybbz32o7jSj",
  "key13": "4JdL8uToSr5J42CskxNh1p4qAp91VG2YcNtk5ZkY32hzi46joBa5d3hmqUWe8eCEdV68ciebkBVXgovb1CbWstGp",
  "key14": "5eTnoDBm3uSGkWgPKm2V4B2sdoF7R1eWsed7bWq1u1J2eqVP2TzonzEDrJTA5N3r7wznJ9SVgiSxZtTKECc9EQ3b",
  "key15": "5NyH6dsk2JoMERWadgQminZUuJLFGn8JzR9FyHgDPh3Mu4zDmcNoGALH229dYkUPAtXz21szCsWDH7q8D6LT1xpD",
  "key16": "2ZhMV5XqA7vnX8MAPfu1XxDptXBW2qFZoGcZLub6phQcs2kJZDbCg7DPLAt4hpn13b9S6JSpJiEKqzgnk4NNArco",
  "key17": "msskpVH8JSdCuBLtsWuLAZ6jufZcz9pajqg863PZpYYE2sDsGgCGa96Qbu7R2hLEvshdqni7W8DQExq9z7PjK87",
  "key18": "5dcaXRV3ZkErPNUULfPw9xsCCcDC1UbKrc7WQXdwirEGufpg8AA5LuFMRA5oc9DdbfcaNChdbrbJ9RScnkT81bXm",
  "key19": "3exPEhEG7QnjsBT3qhCjyssH4z8KWv5FFncUDxJZmXPVrFwJDyAZdoneFJ25rH7F9E4rj16nmZwVKGM73K3ioR5N",
  "key20": "UkDSiJ9Aowbdj6Aqaa1j6qWLagA9uggkfmEpp3ULK5H31kp2ECcMTReUcsNAr9g7b6X5ZTh2hx5FNQJ5cU1toBh",
  "key21": "5pzCwNG6GViuDNakwH7De8SR6CMa3ZkwoJ95pyQtPfBXiH3MeVPqu84jT7qyn7K6GMpGuMkS1KgXPVe8px356uK3",
  "key22": "3WgSFiFeD7vf4XTwGCXqR8vrkbsMzqdQtwPJPcpkjW3MyDeimivBHF4oov1WogshrbHTFeZQnQovk6oRrDJvEA3w",
  "key23": "2GNFBapSNovh2jD3o2ZSfxt1zvLgfv19mgvxJxK4sYkRdGmW4Lsr3gCzsr844kLa8LkEaT5C1VryHHmJXN8u3YkQ",
  "key24": "2FJEbtJP4KT2JaoLoSbpJc7GprfMoyTdkjFdKTo4QdM2xVrwwpXRFeHMs9oCJiVU7k3wLfNdVrwgYNJ9dYkzNa7b",
  "key25": "5Kk3MwTGxkZFcUb2oSVgYYHSGP9aH8ceeyUcQoQRQSRhqipsYiVGJbAkB6mcFtx467L6rCEyR1UgqKKfYGpZ38D8",
  "key26": "4KgmGKtfqj8yW18NAci9y8RXstCBDtTfnkiKxGPM6oKHNzfJg4d4j6K3kmTCtAc3hwD98fdCgyCgaWN18om6AhNd",
  "key27": "z9c1a7PZ2xuMRFpX4M4VQZhKw4J8GG4G5z6HZ8UGEYwcDW2fTkLE8BLVAkkiWZLVNePp3nw2LwreLg8XhHkzpuL",
  "key28": "4voXXtWyx7beofBQFYkunTuDoPBcsSE4iWowWE9ST1BuqVsnuvAT3bb18F4Vy1LGaQZpSqoH4RfKPcL3FGwM5jZb"
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
