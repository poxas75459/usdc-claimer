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
    "cQ3mARaCyniHaHVCroHFfguBgCVxfwcZwr4HDxBARyan6JkZ9zkQaJx5dnSrPE1KRknqAqN3QM8fmEYrihjaqRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HA3k8z2Ds5tAnRanp7ThJoMYNcMQEJo2h62HibRnCweJqP6xfUUTXDnyGQQnG1jJPEsDDVcogn51N48n3dz5taN",
  "key1": "8hHcvswBJPjiymFMXrMx1SBGoHGKcrVYoidyTjUQkQusxyEDzkowpDyRzwUw95NXPe8aDugjortZZvRDpxXMpvE",
  "key2": "dAbjgLPqzVn2HBzSYdVkWHBncCWk5Up92uaJVVKZe4FZzeDGzs7KBTqq2Gnv4VhPGGPPKmLpFvJu2UdGyNwYGn5",
  "key3": "4vLe9ehGQvLjACxQmfopyw3NUHudzmtmot8XsLob6AYL2YKZu5SKUcevAHXuEqkSNADwh98pidktVFKF8cNS8ExR",
  "key4": "5ofezEhvkVEDAWTNE6mvxzcQxYm58HAWNWedFVt9fH7tRcZTDpwXea5i48R9jHNnLuZiW38dLx2Gt57nd8K1mdfN",
  "key5": "2Kjeq4em7wHThohmcw4arigyb8kezQTa3UWhYj3PDjs3vDxDgzsw4WpyUWfyfxrdGaaMSvGToywRQPHFKjmsdwh",
  "key6": "2LysGwrKcTiffjDnBfCV2HevJyhoPnWhaNRUvHv68KoFKZtWbqX1i7cagxyJkeD71c7PijmFhgE5ycvigzqLn49x",
  "key7": "41i53Y1C58h34abCPVMbSuj7xf3CY6A9Xm3ofEyKTvaogL1yVciGxJmvTiyWCrMtLkm2KRuNHUwszFUgLFQbe6wW",
  "key8": "26rMmqMCUL4SLKFmaTnReXaedrzfnbH9QPJAHHa5kaLsYw7h6Xcb49nCWXPcQpZHPTnAKj4qNyqyiW1ix36mETdx",
  "key9": "3BSJkGtkZpws4o6WtQas5So7rPY27QcHtkWJFBqQDbdEXafvoVS2SManTEGLksrwQGApHJUhNj7sXM6ZZPuVamNX",
  "key10": "3w8PsYFCHgKGH76mk5XrWVAJxoLT9C95bBsgADSvcnBkmKPqNaGxwAPqdbqriEjbm69Q9gDRBKZePX41qiHx7iTV",
  "key11": "46ZfRvG3dWynN4kQDdgbuJbFJhYqxyBN7GEQALdRK539K81PXw3EVt4kga58tjx1s6xpUTHxfc6sVRAHNM8gDQsS",
  "key12": "5Ynyn5xfDdSUbhx8NqJPQ6g74678qossFagFXzBTKjJDWteLu9b6FsqeqfBKYBXiyGc5YoDdTpCZ7iWHM8eAJuTK",
  "key13": "FNyK8xa3Abqr5yjb8aPHVuQ92YrNS5WAQqkFXLcz5htBcLAU7RvjWfgVAFqLtRU9zr9UwpJ1AATd2cnbMCpdYFD",
  "key14": "22sLt9vsSEnFkKY3pgKCtjUViEXpnhekkP4mKPHEibDbzKRqU1UqHkTVhRKMe7CHtzDUZZAqPgtUUnwnyR11nXe3",
  "key15": "4cfC2RMEo3Ne1SgbWkL4gfdsFPyggcD2awEUw4jMn12CvoB53eimsoA93ERCBhsJn76LmwWvXBxKuDYz7fduNE1c",
  "key16": "2RrkXq7vLJkP7dB8z4tw1K9zhnYymaUqEUhmXH3WoVWZjDCx6vVPvuzrj8FjG8TDYFYuwARUfKV1bn6scYgcbjAj",
  "key17": "2cDVo6CCA9ox9DzU1zLND4CHSa2UvFxQ3rnwU8DFbLmTVTLWePjeKQbMBDaUg1GtTv7YeXeurHKvaXfYpGzZsaih",
  "key18": "4TR63a7UNXZMoTQQsyjkbd2yj7oqMHEZJgEa2DbwQXo6wTSsAPpseQ8T9ZnyBTDzCrwusKMWNDrnnfFeDvVorEmC",
  "key19": "5ie74H3E4nXjCA3H91Se4VNBKjAQ9BoRWrqYkgwbL6UXLN1nZq2WKtE5VtQYL9fys9JQx23FFkYjP32WShiVUBNR",
  "key20": "5LVy9Gb5JSaTpCxib3C28P2T4RxNT6FJGD7ymE9QKGheemC98QWbiz1echTehmsRiHjCrCjf5nZ2ta1qCrAo1EiQ",
  "key21": "3LTM24aPsKHD5AnyU2zXgqQWNdafyfka9uEavqo9jzCUomZJLepoBXSXTqrkoxHXoictTWW3stVHTveBHZr1Zd9V",
  "key22": "QPoXaV1RjnrmUZXmhmBtFjDcMv9tji7rUPcctkjk44yNdQAMRGY7v4KjXwZHX7ZhTeYBjA3odGpAtsjMKc2wsRu",
  "key23": "63MHvmJVSxShNBKaAf28nNVEFS1uHeR4XhZq6MKxyPUPqa3e2RXUVW37bwECJxSNnJnqAZyk67eRkqx6eZPYbnnf",
  "key24": "3jU7K6MiJXtXVnpuRB52HgE2xriGpZJcAk94upfAvBqE3ymkxJS7Xz8jF5nMwFvvHbtsCCcd3LkTwDpFcnvjp8rD",
  "key25": "Gs8HG2xcUwFCWRt35Xu82aZg4vppFgcjP9NqYdLHvphQdsfnvMmMhSFBhBFuhAM6cpwhGcqa1migT4msdVLiRv6",
  "key26": "4ZU1L5czhf7PNSGb2x5Stxp2Dvdpubi3ELQ8XxqiSzq66Pn4XajEUreyHvtRrzhzQ1VkaELZWzMJksKU8D5x2S1d",
  "key27": "5eqaH1uRHaHmxCDHNDmkQNzs86qAmAD2213waaWpdmfX8CTZgnLDuHoPnX9ZjiFVDEWrFsHXdoG46etnNwTkwrxp",
  "key28": "3NWsbQUFWxi3772TH1Bz5KAaNgtxg7ADYdVVSWjKuBY3qzVz5JS9tfAoUPbsVZbdmTac1Bczn926WjCUDUDSUAio",
  "key29": "v2cJietX3BxykWN8fgTJ7G1m4u28qeaF1efi3ukUrGL29LiyvAwkt5UBzDTYQgbVsSYS6PhA4yWr6uzHWnraJzx",
  "key30": "5dcwzQB1FrT6EVZEvZLRjBBfjeoBjiW1LY9qaJWBM14bukAwiggjwHCt1dQS9H8uJVpyZFWou51gGk2YQZ4HrEh1",
  "key31": "2dASWXbXGUfDME1YxVZLZewZSU6ZszbWNM4gkTEwbMeqDBuPHvSUCFtLEZYjemoAYdAMFqnNbfk9fFpabzhFViGa",
  "key32": "5WKvifFkZaacinbVfo2RSBL6hjq3c4WS7eUi9o87NfutpF52RWuqCK3ZE6kGkM9ZsEbDnw4wAPbxKpfeMVsV4Ecb",
  "key33": "42VfktDy4KFAJw2KNMZ5qeDMCgHLNpZiUbuBtFDWLgdYcbqwY7fVwGAsNZCpZcKKf98aMHDbNSyLpjE6WLkzUe7f",
  "key34": "4NwKQ2QJFu2HXPeraz6617wmaEDCmhuJpZf6B1WEryjLE11Fmvsn5hpbWhqU5kuv98B69aPvQHs6d6Wc7e5B5K17",
  "key35": "mHeCmuNqnvtP6hiaByJzug9J3P6JDGskLwBRyJgymFEaQVQ44MGJzxr9r6CiMsRdrEsZVX8nsADA999XhioUGZs",
  "key36": "4snWsxPbPUNDrka1ahzS4PNJoCy1eB7sSKjW7i42ifbiMLnrmcv3DopQNkBsShZhHkxCu3BAhBTvkmVDTUypuEBM",
  "key37": "3ge4QmNJcHqk4tVdECa6zHeX9Vb8Pvird5a6S1LHjfTcMNbAm293aXqnRk5J1i4MjFEznnfRKNnnPv4Yhfq7NqHu",
  "key38": "5AiTbhwnecuYVAbDRG5GqsigkGBEWZjbGAWnj5BGqTHXhRgPn4FVSxW9RoG8H9w49D8qyjh7utgtyPdjMXa7K7yn"
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
