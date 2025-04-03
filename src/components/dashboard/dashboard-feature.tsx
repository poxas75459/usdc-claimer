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
    "22XaktHLVu7QW5HqmgS3L7cj6rFKDHjTostMQnmBNXD14r2p98YQMPSGGqDM4S5oJuaDnpeemNt25BCd8L74rCrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9GpZsrQhqvmbb1eq15ikarKBx8NufH13FiJFNFW56C8Jgdis132XKP4fupUdTJyBvSfwnMi3TMQXHJaufNZHhy",
  "key1": "4Go8P42vM3xCQGR3hd9zWaTcUasECjNYAgR6P12naoH2VyGbcYcAcPrLxFKLbs6oGKA879u5ygc7oEtqXyJjCq4Q",
  "key2": "4bKL4vnwDzZ6QuSCqXcvchRiPDSHCajmWQfu8V8agP49AA9mHvtCeXG29NDD2R7tcgCGwnzxkK6J7an9pn3dAF1V",
  "key3": "Lsnvp4Rpg8FpM4CytaLeth4THU1d61dDNZfrMNxSeXVK9dNE9mWMnz4NXp9LuVPGCYj1eGbam5Z33X6qn9iPzAj",
  "key4": "BfgGgPVUAzV7N9xYufjSkbAzytZFgkXkkNrS7xkK2hGkVXZkc99fxzztxiSFWDfdXJSs8toTMnxqehHG6N336RC",
  "key5": "47AghthTuZi8maRnvWm2VNLf1YACsxmvYTP8J59v53BMHGn6WDsusQMScdxrpnaJuj3UCuW3WpTEzy7DBNBd9L7x",
  "key6": "5VyW3rsa3p7X2gQpjK5bzbp3WET6d3u3gLXooy5ioKaeEhGqfLRVsTRPEyEYMXaQVhTVu1T5hoYrsVeoGcbUTFwe",
  "key7": "3jxFMVHtZC41DqNsiVzpuTAZV4kJKogGANdmiv17LPrG7JgJzsDFu74MYiiCZjogqq1vq1xE5NpafXciZnVi7vYx",
  "key8": "2CMkoWQAXV1nn7SZzGm2JUQqjHy9oStqfe8WD26hV9woH9jU9siUB4M1DzE36oWnXxkAokiYwFr1mzwdxS4nEYee",
  "key9": "2QrBPeLtx1Qdg8FPBRRGdmzkHv4VdKqTNXbsVaNtt4auiCVhQLW4vy1ZJ64Hh7hGVC2JsJQdqMUfxWoBV6TU4MFn",
  "key10": "458bu2t3rvLUpTYhWgypCwqbjBVEigxmoDqvf8Kk27v7XgFoWR5cyV9f9Z9hcCxTT5hSbLxhsb8kmrQERXtWCzL3",
  "key11": "4GTW16VmTsP9TkAM3qr9y9WQVicVb1WSsE4FSaGEqfDMLHur4U4Rf16rLrNRhMKfixqs6aPcFNDoxLFQZMe6VzvT",
  "key12": "3coWpgQa3fw6sjEo6ozKrHvVCxL5VjyD7tLasgJ2dEk2cKsjRHhbVyh55M78tYvGQuQ9MDdJxuFrfKHZis6uCfGj",
  "key13": "3AveMW1zjENFWmXVxvPr2z76HTTWB8qVVgEUBYkocbkTn1vdDbevwYu2q6yPrjkNrgH9Q5niRbiFpcNouEw1aQvC",
  "key14": "5ZkMK9mqZPWgUyRue64ii1wVWHkFq9S72s6n5rMuhJK4rEXVK7yMNjUyPhBZtfEFjb2EWU1YXPn5Kis7bf1sLKq4",
  "key15": "4AbQy8Z4YfXfRGL4jVsmjBYFsKtR5dPvHYKmA8m1yrbuKAMCtzDn7VG1qqVWA1XUFUoKJpys5Sz6jdLbsVVsMzMK",
  "key16": "DZsMbWiCYXMgmj8w2me3CR6L16ce69MMo3hvwpmkBjpuFc5smtM6cKQ2Ps6manXr39K1LnUxMQ79qAEZRMVCJGQ",
  "key17": "2hnp2vJdg6vAE9hejrgvQbRMviCntqV7NXEWyU1EV9GimhhSxnKQEu3gTfK8fRYNABdrjwvDGtBHTiiaHmgm2Frb",
  "key18": "3sNVoHqFEk5w7hpVLgmbeZPvW7GvV7RmRaZKoxgEWZPz5YzXQbEwso1K5jrPgyKKyjMdbUA6y52Ypz8NczVjaH3V",
  "key19": "2KgMWscsWev1tymBpnTJYCx9X11Netmyh3tr7jieet87oHSYU7ZL2Qju8AtCgBJNq54NTmMaHivL2FnMjuxdemkC",
  "key20": "2zHQt4238t7GLr5CfJG14QqvwQmQ9Pz6CK8XDDjkBvMsNKCph5ZpoiVHJXMxRNQYRru6iPu9M8yayR656pTnvgfY",
  "key21": "xvayoDDsfNkbL148wvuDEkSzMaGdQr6YehKZe1Q5mgQUPkDwQVtmZ45KywcbdxqQEVXg75tnNpd9kHzXSsf4WYT",
  "key22": "4k3QjtS5t4U47oDHbryTo8iag7QvM5BSV2FitVyNZHxbBZpH9PMY4VGFrQ8HLUWvvz2bWDCoRtdMNQvEc589GMgZ",
  "key23": "5oCyJCa1n8DTzkiFMWBTbzCLihSyDARdGiYX7S8CimqWXCpo76AvBpEV7HzuJUoMik45Yv9HPBCoVw8PGnDBViNK",
  "key24": "2KnGRKCF2Wn31yDQE16vHRiRPbZM7H9bbBrwz6jDaFUVjyB4Raqm5bfEf9ah5fy7tQ52CxoZWV1SUwriCXxuKsdG",
  "key25": "4qUrj5SbvAzcofp8VnMDYxWJPoKSiikS5ogVnDJamSxuW2QZQ6RwVWd4DACVhTf78AnyQGWWVhoWAx1pBxGxggLs",
  "key26": "67rnk3Y8wMQT5KBGWFvEhrUfL8h7HCvccqrnQXyf3jxKnVsbnNo93ZJst1fwWRbmGBVWEtubtiUBKo6EbbwMc9ru",
  "key27": "8EbjULV2WRAnHHtcdYBYrDz2bJmveXPa3weH2KTRBR6r5Xayv461WLDyEPYm98UAan14oEd8RXRRArBAPAYGDJ1",
  "key28": "VnZFSzwcngGtSB3DP7jKMtKb9JLXGczQqvsm2nqX7Ndx93hjCbubjKCLVhK3n6KRMFUVnMWJTWG5YwDKqE7yo3f",
  "key29": "q3S4aPW1DZysiaFkVxKg6tNdA7PAaf8DGEbidzyrDHCMFZ9UpDReKPoPt2nx6257LCtj5Y9ZxCsYGYaNks3grPw",
  "key30": "d4f7kafaqFstvcyu4Jx75NdXg7NWBFfjBTKwHn4CXpXy7RDLtgiU4crND13rsqc79dU7U54fKnqz84MF8AWAkey",
  "key31": "57vdofeVioQNFSCSRD3MjtTm17JuCDur4sDV6hMGFz5obcEsSzvj3c5Us3NgVHbxnMCTCevdSu87pCcWSsyqZMrS",
  "key32": "35A398BVQ5V7J6GjVsCMtpJhchFrT2sB5evxvX3GH4mZ6iEP737zPi3pTb4QsgjzysAAwkZ6uag9seZcZR3a71Lp"
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
