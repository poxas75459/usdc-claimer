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
    "UJXFGCxZ5EBxnQSJLnCBipY4x7rDx3otaDNmv1pxVV16hpkEXHTtBs8EDSJ1bFuvqj29ouqV5q8zvxizJeQkgzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SoNei3AFCSyJgK6CDgE4bdwCkc8vZDHHAyqG6GrfMRvFPCv87BStzaFMuYwdpfxZSdvCzsLD1gW23pvTuPmhfP",
  "key1": "3VUzECsywVfe9R8L6REmGu84hxftVZkU6oDjoZ2DYV8WuQFRG5GJjKhLM5UXUxbSciV93am8u9Xhm4UrdCqMDHNp",
  "key2": "43BX8hDUh9JBumsruzeNH1hjM8PRxNTVAdKVrxEwFDGq9zYBDhvpPoU75TC3DYhYBtjxkGtomFhMjUJySDhU9h6a",
  "key3": "67HnHmKYBS6WbEooiZHomhz76jiwknSz4FDeEJK39TTjoxHpkTmxDsw3Gm2KqKcRfg6TKHiyQaYi8CtNkdQPrk1d",
  "key4": "2DRSUY65CJiS8eNPTJ9fhcNU2a5py4sXDo3EmCMde8b4m8LN2RwKmkaUafoaB2e5zvkg6ohRAw4XokzRUigVxutH",
  "key5": "3M6PrKcQpkgDBCHBVfUZ5zLMDgCW3neJvv4uj5yAGskdtHnV2tCQgzLci8qGXju8Zs6d6Z4vzCJs7h33giHhXYbW",
  "key6": "3pA7wY3sY1rG51yXcQJ9zvpYr8KsKVey3y7T834G9ZALzjiWZeVPx9PW6QAHRTkpBmRVy2ko7CS6t68EyzLw4567",
  "key7": "5hZvFDwQRNVDtJe7WrtmdJKHMb7mkracB1UUS2KQuKEBJEtu1StnjQuWk1BMoE1RbwpAY5HyRK4R4QKkwM65Nkey",
  "key8": "4KZXzs9NgqVJqypBR87YVNzy8o598VNWQetWMsjMYAPmBaSd6uk9SKd8WfPjyVg3j6b37peCmkWT7ccMx9ptBBuy",
  "key9": "3BLvMFNmocNvGUFDnL6otV4wJ6QvipDcXT9XdH2SM4riaYqCJVy9SMan9X9NJGwz4NLgGjxVAqBkkAacZveeaXxB",
  "key10": "1z327EaScDqevf1rjymbgjoKRiihZSFL6mDwVz19LPXdBDuVNkHyFDzLqvhMxd8UQ1duDrc1mpVYMACStJupSyA",
  "key11": "4CimkbR4ozkRDhLzckRRHnMRL3jMAVBAM6mrX3wD43s7J4fMRgJfJB44fp39CuZN62Tu8V5pMZVDKDz9Jf76Zje7",
  "key12": "3k8HKRexSuG2rNfyqGV37K5nqfPj1AJxWMNUyg2xzCc2jfPZYNPFbGP4dg8gHZ1bETXLzSF1C14jwz4WLAhKQPpk",
  "key13": "5kwZxBDZRjaM24kpR1ZDhZ6irf3ozpbC3Qn1XmHD4Xie3eBKKvbZzcZXrCcSv7QWnMLRtTTtafub8YRewhw4hfQJ",
  "key14": "5ZrCSjZqrxvyYF58NvVhcyDQmv6gWRKXjDkoBEgECcsQfEfTS1DfNeH8jSzTMUp4ysS9HJcNsP3DSXQMF1DK7Tiy",
  "key15": "SQZPsh8i5yTKdgMTL9TTDetGvFTpXpzj8KbTFtPsBUf3zCoT8qw9o2NvUMnbd2ETruycpvS7wCW6hFWiA8LcAmb",
  "key16": "2iAobaF6FyxhiJgLEoQcNpyyQK1ixiwFgsTD1wPdLvfRGhvBTpgdSfz3X2wA2YKVdxsHQGZFm4jcUYSiV1Tbp6yT",
  "key17": "2LAFCCY5GrhQJfoijfyj8W4wxuAHC4acFyYcWutZmEweXW8xk9TZcKzKDZoQWZirmYZB53vUM4LY8FTL55DnigRS",
  "key18": "5qhWfGunr1FByehaNZA4q6kwekKT2kTcbofuQZZc9koWco39T1XwM5kSCFzUpSWiTVvPXMpH6StBjb4AmPLH8oqA",
  "key19": "45tWzupL9ineQaw6BwpW4rxoEkhmCAj82NCwQW4ow1t4GNQPYLBLE4yZDyg5fJikxFLbXzK3b1iE6HgmtoPCvTzx",
  "key20": "4vQEvNTBnZjj2qoofanqcWKFcdtKJvHSmju173AZi6uCq9nWPLHK8tJFoudPPDsqqB8GTPSqtY9brdMQKJ8kHFk",
  "key21": "3F9YNBzCw5rbhZKL29B875Kox2V3qPqxsUna7DpPCTpXZSsXVvb7jERWLLsSJHijUATvM3XZveHxS8zC9oY5gY3u",
  "key22": "5Ppqy2z2kPWs4KaRAeysFh3aLNamreuAn26LQMoRwtsBgTMZRGtApkR41ZcNj7UCrS99SxpKKGvmPr8qLfDpVXPX",
  "key23": "59ZzaZXD5petsonypKmxWFcQ2RwRCsy1kXqa7DydLFcbNXWSG9hZunMq7aVXeWPrehiCnmMQkAvWXAv6BBFcEZ8A",
  "key24": "4B1uwnYb4AjGS65GqV9P2UYUHJkQxn1Lhf4UoT3km2HVaY1xanvoVMrWLG3RJBLrkZujZd6mUAecHN8jhjy2Ew9t",
  "key25": "2RkU5tY5SpVKnhpFRq6vVHgZ1yPawDs8UsGVop879xvDks4oNoTw9xGxwCTA5U7kQMKd44PxFYCFLbQtZ7CdguJ5",
  "key26": "qvj4K7ay8kLcNDNTo9zX973NeNJH2WoB2DSo6QQRitKk7Ue777xYFPYADa9uzqvCAs55bogr91kFFQ5LJYeWsn4",
  "key27": "5av8qDZtunQcnXe8rh1f6opJ5uNBi6nFMYQymxZdrXkgkgT8uSJsdnXVtxVT1eRUyBUBCT8HpNih8Y4gBptT2sof",
  "key28": "2vq9dxnFacXhtXnBXHYXCd1D7PD778kVHsX79UDT6GVfTbTjm6Tzyd1rJyKkADfWppWd3GDDEmDsSDMgEcZihVBK",
  "key29": "dg6anGA4686wwCadXfAsmZbumj2DUjdmAXwjEboUYztab8sgepHXm3hux83N5B2pnXQyHx983fxRiAhLWPQ73Nx",
  "key30": "3tPn4FiW3yno3d8um6da8xDVxRFhmsrweU9m14jZZKnH7Cd5Khya6xAnr1AavcRj9EXHvYYcQxtrnBmf8gwfmHhG"
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
