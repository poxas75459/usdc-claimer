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
    "4cu9RbkKjgdLLaEKgwGnbpcf95i2nrezNeMgpsLbTY355ZcACrupY8KkXiVsCRUyuuuMttE4C5JZGLAMPeibb3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GSnxArpnC1gomZqpbPX8Fth8F72PrH4wT1NNK3meKa8yqrs7HUXLDgrY6m2f3GtkcmQDCpopJazPBRv6aB7kTfC",
  "key1": "25ri83AzMyQTyAyD57UdbLZWFMgGoqhTAT4F7r68U2fG2pYH4qpRvQZKcNVBCPt9tZoLjNN1GyomBfbAr9dmBngR",
  "key2": "uLdShn9h15BJVzT66JvhYDsmZLBUWWdpSgYySiRBD9UHGmsc58gryUdhBn55Le96SM8MwyHqZVzTvuGpiT5CrW2",
  "key3": "5py3A5E6SZqSYNxrvWMgnFKptuV3JT2od7yWbvdnDEJKFz1CqPU4B5dcHcmkvgQP48FLHzDHA63BagCQ1hGcYSsC",
  "key4": "5buwzGvFg8bzb4rRYpkKFhqoYUixqtweDLiQTDGt9WgLfhKhoQkyRrqgNeKK65EA67exuAnA7vq6SpEwZjUb4YbS",
  "key5": "2YFvKoqxKkeCniowZtDZGR5w5t6Qwx5Ni6XR61CkGrAGM5twufiJQDoqNmJVBpMCPkFoGiZrNvMtiuFH2ujNWB8b",
  "key6": "uSyEZw4iuiJ9ocyuJUmJoNdNNoXLVYDwCEgCRfey1gCTYEtxAAziipKGknaz1MKNjLDtmdncMh7hAvwewy7QVnp",
  "key7": "2j4m4rFviDxynZKKegUhprGPJPzGPLEMvMnEL7FzKPHqiXGqLKSsPzu6QL6bq1KbSBNtGmxjx2m4Fovg5GvZ7jcC",
  "key8": "3rjQ2syqCmCYYxknxYzCrB9yM4HD6RFuoG4cwoqMbmWAjqYQEMP8DehWBFXRW6BXm8zFCCmDHVRoLW2huDJTJGnn",
  "key9": "3CcQjxVhPwd5Z5NM9KimCjE8bHuLsfdSFoje5W9imRPQk7hD6g3dSvS4pdadn1WqDD6PNczUQaGt61ZKhg39w2LX",
  "key10": "58Lbu8MM2LAWurtjdCriyqMEbJbzfAcwStoGGuJ6J2m2Ec5JXkEkQi4Dnxt8Qe39LBfd8WbcrSvaJ7SqUbeMNSjN",
  "key11": "5m2sTfewdxFL2cwdeAso5ix88bPBpuTcCzsjDVrAKWTMNL6yGh4d4GrPHVdYYSYnnFcqnqUDk9agzGPFDj7yAfGm",
  "key12": "5PQdjByfPdwERBG7r41rK5wzQnw3LSkNR13v7p7GAUDJpzfUZkffBVFvG4K5bEHht9NHM2amopAYAf5DpiGeBnSr",
  "key13": "wyHwkuAkjUhcajMrFmPYuEA6Tfb5NwXt11qoNW9eCiFnz1nfPjPqHfWCU5PcYRmv6hLXB8R3hbK71B9utVwD1rf",
  "key14": "21ZKyXm8ZLvoUFkJwnXrBtfjNwLBmMUAos4zAjohyqYWtfvRPHfX8tFMXSVFuf6p1u9GhaycbScBbovK4LB3LHTE",
  "key15": "4gULXvdHjx7rjVnJnfLGsSacMZhyPt7qygtJpkF63tLMrP1qRT3M68pDQrhhJMLtFcrj6bLfHxqUaJiELfvNXpcf",
  "key16": "5sJCGbhvxD7pRRs6h1ewi61kpLoz36rbF8EzG3qUF7GDdhfnr3kw1jGYQVsfL7vEttBPdoVs7PcLQPGSEoGg21nS",
  "key17": "55rQk4ByvV3x8oxW1wRZpCULekcLobc2MHDBiW3zu8Xv7eFDzyr4LoLDKb6H7z27G7osmWS5Jp6WPXQMEmDKqSRC",
  "key18": "nM6NLJusz5XwsC6PaE3GPaNAhWjfQj6FebsebsKUBAWw29wvo6QTpXoa4BaCAMcCQj49QLFTpXxADy5kLJHjYVv",
  "key19": "42tkfLQsZFhEZnbTKSu8uMyneAE9werLwnXpExKkETDpB1Tps4Qkzg7BAWeqBHkMWaf99xPQ5ijgDtjYVPQLcyg1",
  "key20": "2fa9JrN16gb35yzhaGqn1zM8zG4Emt6vNgQdGjrw7HCeiQbKj56sdcrArpLDZcV9i8sGJEQYUHUyFz5HK9vF6Uk4",
  "key21": "5d523iHPEQMVNPad9zJd3qr3tgoTSzoJmPQKt5M98hnDFcwKsrBm2UDzL21wf9R7CypFEiyXR61dADwcVArA4abs",
  "key22": "37X4cxLVyBw5a2zZ4g5CJas8QpUBuxDeNtRFdzz4t1ixsqESxYS17Kp7ZCbrFWQVsQFMCCZSXFy8ov3K4JJcvybE",
  "key23": "4EvBxBoAscdQZUFnXu3ykbMLTjP6jA2Nz3QJaYqfZhqGU1H9eP3mBo4rx94SFtDtFVf5UA3Y8uCDQCaAJHR6v76C",
  "key24": "4KyMBteYQy87NopAL3GYUjDW8RoEeVjW21NzHbKELQCM1jtHZ2vd6fpYkzpJbPQRZ2BW3R6D26ynY5TbHkfhxRHU",
  "key25": "4sjh3q1h6Hcww9DEQVmPuLuyHAxp5VZnb23WDzkJ9bBvwXYVc2ngD6KgTqeM7Zsi8RHqHxeJ2LksVvuYJ1K59wj3",
  "key26": "yLpK7g7VrJgaW89Ku1fmxhXAwDCBmikr3yCN69rKAroWSPrxm8ykAYy5mjZixDdBFyi7PzBsmBWZkZEEpEMpfms",
  "key27": "hPPqUsQNXam3wczMiqxWdzjCc2CA4eYLscMYHKUmMFKyvwjenLdjxjZs5em3zCJsacaMaqeVug91Zkac6pueLou",
  "key28": "2b2eBKnChqnEc24VQHkjoDe8FyqmfHhXpbArScHgBCrtVQqGptgke5GpfSqSqP46zvyfkt1WpJ1pdCUvZiCynodC",
  "key29": "25wvbacTjz765Wq7TzUuVDYkNHu9ayNFuU2zGEAkcvLwGpDtimartRaTopQGBM9dwom8BVsEJaPm7hVPAms69Rmx",
  "key30": "kuBNCPCTZe9BtqQWtTVfZrZXMSqbLk5TNmmQvLbk3KHsYCvKFimR5UtT12ZDq6xsbXU3u5XDmvqPADtCXNYap1c",
  "key31": "WvXSUQ5w7nvdxxGiGAXgQWsvmv8JQk1jQ8pK6QXyD1VxQL96t7xf2kh2YYwapAEb6YVg26VcMTssChgBZ1a8KKp",
  "key32": "4poeztJUawDSgzQuiHC7hssdMkYKgbLgVZY6KnYT43ibgq2SLkGn5GpcQarDnvFUeYVN8XdQXsXbJDcxFmRrQZB9",
  "key33": "3w5aFfJXtt7CzHY2DU4ZutK1KjGG5ngwnoGFgT2qKqjNJ2zZVX7pb1t4Tm1ZRst4PBFnT99Ris1AoG12qvJHacpF",
  "key34": "67ExbhjHgcaVkZL7LaxiYUrPB2YDRg6rZFoxmRLz9rAaLw3SDyVnxjz6gmDR2Ky1NNFfWe6YdCmQnKRHjJ59roxF",
  "key35": "enPV3gmSSGbYJ1ssZoMFSaq2SrWPFRdGVVw6sFVCcJQUcBpDyPmkF3hrbWTJDgF1KNs9q432LkVud9fo4rjLjvk",
  "key36": "KNHRPMLriQ2FvgcfWjmUNHxKGLVVzaaezmZFvb61To2oktK3W9vKYZeQVKi7TvanbeFka5vRfeTGSeogygzcR41",
  "key37": "5bdCuhKUJkwx8Tu4pzSuyGaisjQDShUovWdBUrKAsKwiR1fFZbDDnueHpsJWZGjdCvVmHuh9jg2hfiZCcQCby9Lz",
  "key38": "33g1doEdXz8UQqxQSPRXkp6B1j57fnK5kD6roC4G5D9yf1S4XwKGYH31RuGxoPGEHU2LysFphfyy5y6mMBQi1KVd",
  "key39": "2aeMPE9qD4ejy5EGPUT3AHmWePYqyQeisj6YGsWh4kVfEUqYXSXTYUsKAEWj6u9guWVhhpMDweQabaPBrCEwGnw",
  "key40": "4kPDP7W4DnHb8hpZqMs6HofwnDA2tASL94QePqJZ7WTYEaUWNez2RKXZc15y711qLyT58oLq7sgozcobQTYyEjwq",
  "key41": "3qpTudzhnMs8o6bto6XdoRpkQs7YtWqdn8u4wWecxfjUVyvwB7j4Z6CLnJyia4xfV7TGQjbtJp685bEp54CxW8hy",
  "key42": "5MiiGrz7hFz1Uygxg11qD8GZCdeDvBdMy2NBgQtT9dBraedxKgGtt56AyTkSmGPeBNNDD23TmsrP9L7t2Wagm9V3",
  "key43": "qwFroz9YeJ7bot5iUvBoVsMZgDHnaqy9CWjZgce88vzas26rkK1SfjaVtnaFCBB9ddcPh86B85jwiPA3rues5Rp"
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
