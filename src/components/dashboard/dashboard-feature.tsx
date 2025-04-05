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
    "rKW5aPmZYAGxY5DHvVeNL5XNtDPoeSdtWPVcT9TyoA5Xa8y3avK4ki67UEJsUmA7SBAFdpVWwmdPB7yCA1Dcz6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CF6EuYqmHFh599xXddf8DRza2EfqvX4PvNmEbMP7FzS79yHjxAgAWffU9DXQE9ZgyqtCXJNDqpD7dToWDWgNLWa",
  "key1": "2d8JCFsLUfWpn4Bywq5iAv2rqE9Mf91ys8rhKubHWz9geTWvFYKftwWycVisWC4L2cgXndtFe7cH7qNMxEbVFstg",
  "key2": "kJsvs19siNf4gfa49obXvcUhzQa4qxdzBD587bBnxob9GARVGooTJLByFAMur63CEZSc1e7NEqyGn6WUtAHvrL9",
  "key3": "594FgPAaPWDarJzJaE4csmSwuW3nMBuB64ktPrpoT5xtr1VX4k3h5uJFCVPEQEJzNrV7pD5juoahkphDzteEXd3S",
  "key4": "47JoaD1wwCnRD8jyiFd8mkSqQmwiaLDCEUjNrncfBuGRaSPMuCmK2G2dNVGpKSFrpjwunJYXKqxCxP1SAjVcDwge",
  "key5": "2CU6FDz9zRbEz3rUdbSm28P84n8VP3Jv1SFJL6NLFA1BndFkWCN5pzEF35vVgDqPJZ1dV67jj2JUW5iGuy9sf24g",
  "key6": "5EDfUeRmqwTN4HcQM5KWz8Mb7mAp9fsdkFiWupEPJq2hCFGiiLoZk4E3pcvrUnWMYJKpMwH9zW2nectBEdVaRiof",
  "key7": "65fk9z1bVs17xywBJYqMSPxcPe2cCK5ZHjJ8pHZE1PmAoRD3GDJGzZ5g9VcqaCYEWbfzxEJRdMv7R7dmY2rvk2PV",
  "key8": "5Jv7MSHKtK1R3MKZETWXmUuUDBQeKKWGGWWcAkvakwjCGpyAnS26sP8ZYNWyquDajKpKVMuVxhV4VsXS9fcbwiMe",
  "key9": "vtfdfLh3QTEk6TbNnTYEDdcwtuv6gLna7mvTXCi1c97Gkc276XPpguAB21eBTDmLeeydr5TXVbDFGRuqtya36YJ",
  "key10": "2YRnKAs3rmaEbV5kQshw6WQSf11nuuEnmRY3YwpAG1FT8FYcBrtbv62z8FLeT9guaZUD7uMJ6ujY42Y4nuwufSXV",
  "key11": "4SidF7UAxg3ddFfNZaAwHQFDsRYS5j4Fobsy8dGG1Ht79Pe1YoNcq6ttZRyhsJJkaZJCXYFmahFJbmKdcZDARUAv",
  "key12": "5cfVpJYw7L2Nn2nkJ1usv3BTy6dPyiyfu6RS7trbpLp2xLNhYVvJE3fCzHs51TD7ojvGj4e13K5EWFLaMsJgRPBk",
  "key13": "jGjRUm3YG9wWQuQ36wJ5gKhypEoUoo1dLZX8ZYpD7KmuuY5BNFMVSVx99qLiu6q5e8FAgQM4D86UyGNLD9CgwJQ",
  "key14": "NcHAs9mfYcmitTXtmR6W7n11aZnVpj79pKT64LrFP7SzkoqLKdZpqQKf3tQuyDqhYi8jbKzKgq4uaLhVL38b9dh",
  "key15": "4qJpEYEgPmMezcQ6eMJ5wM7Z8azNdJWFR9Pi14busfZibFEKLHSXCE63WwN3mENLvjzFNvS4FzHnqDYNdJYqbZne",
  "key16": "LvUtErTtH46o4LMQ4EMG7mtLL1fm8xqbHNFsfjajNEiBt55ZwJYrv6R31nUAnwXzuoyNKY5k2QMMoHvU5i98FuP",
  "key17": "5am2k7JAWpfJPvBh3meQpi2Sz71qN7TmrdpxRt55hm9THvre6HYiNMFKkQhMAxs31sxFgBirKiDU4jkZaUxfydQ7",
  "key18": "3kUHhTFFmKJhCqT2mQK95f2hUajrh4apaHhBkPfvYhX7G1wmTR8HWLHdHryanZG6D3RtcXt87HxNW6w7NHLjcYie",
  "key19": "4svE94jVkvTNh8N5aycViJ6FmcdQH5ecAtgQyfSHqtzvajJYJuPYkgR6BHSUd3hxRBCjFtGgr4EC34ACJQLZLS9U",
  "key20": "5e92urVBr4KrGCjAPVh437sNJA68V8BnCCFr87YR8QruSoCCkFKi5RXHx5FQCS4BaoJ868DPFbAPZppWinyqAAUC",
  "key21": "3PD7iCF5gnchGcmgbyFaaV2aKzvU5bLvebDDQvkv3QWF8FZ1D7RgHP9QeSHTtTaQM9ruXu82NsHzodkscjvudS7Q",
  "key22": "32GfZee2yugtVesiX7axbZrkrsz33MfU7wVkqd27SbxkuNQFEsoXBY9wNSVYWPKFNCHzNtJ3sBs3WWHukKsqU6ES",
  "key23": "39xjx8CaAGq2X6aXdofF5gt3LcrkRXG48qeDgtHSWcExGpDzMqVDNvwFSeAgFr4kFbn1GHnjBTgo56cTwdppxxA9",
  "key24": "65WjtiCFYjRdm1YazCVNyVFm1TCJyvuwPgXxcqTRLyn9SB8jNLSWwNm1JDjcsU1pyZ4Ao1Q6GWJsZCmFxD9oG1RY",
  "key25": "4cf1E7UH66dWD6hFEfAtTJtEzukKm542GA91xUYG724DZ2KHCNGpEz2oCt2gLuiEigm5sSMNHC6cLPZu4hH51aKW",
  "key26": "36WHNp58MJLyw6VznpQhgwPi1Dt54dh4g4tNK2WNN6Vd4mGD89eEcvCVgwx5AYXYHhrZqxzT6dRckjpro4xz4Gma",
  "key27": "4GfhM982fomu4R4DUnrSFgfEGH8mnqSPtsrt3fXS6LeXpj2A24fo1miYFcrnnUhF9AJ9PduTmFkxYTDdy9fg5WcB",
  "key28": "2KJ1biqx5xmAEcHnxTmaMEo5zxjX28KFpG2pxzbMuaYVF1Mke49WJ87Pv2s4pe3QWHkb6nFRZR2Ah8J6qG8qJcU",
  "key29": "5udJ3USkJ7mbmkXwU2BtAzWKPWFCwgdQdkCyAdUh1EcMmxiiiuPdBNxoUpmQgGZNjLWJrZZ29EBTwfWz3JPJeoFC",
  "key30": "21FZXDPsLV4eFcVzvpL77sNZemFzEh496dotcZbrdAkC7ujEZhMjiN41eFgsqXc2yUgXWWzbPc9Bbz52YzpoQ3Ct"
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
