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
    "4g8USSuSu3mqR4SZDJwxisBHg5UfquZaqPWjiqLkShNLstqyVRRAbuaPpiddy6W5DnpWA2jq823eACivMZP7YPX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2CHKguy16SqHLHgc2CucD7FPgBpvyBbuEQ33nWv9J45WMJJ3adfcRUQfUTi1n2wAxKaSLZLC9gXCbULfQfzhfp",
  "key1": "Ly827NY281QSSPi5S7gWos5jKQaQM7iZFzR9mTd2QcR1VuDKjyYHkobaZmraHcXiXLrFKiJWY7njSjxWjtmsn15",
  "key2": "5i7sZcem42KpweXGbK6NbXBawxHrVZnLxjj9J4kokKtpA4sMtoXSah8k4W1u1QskPnbmTA4iHALaB6BnXVJiGKLx",
  "key3": "5h1HJNoocjgp71DVV26MWSsM576jTfFfzQXHP6SNVrs57xdzpXrUxwF1ewuUJ6dJ9JAAXjvgsC8UW97AWKo6DreF",
  "key4": "3tgqqKJSoff9kWXUtqFayVKLDFKbG3djqaZFxsYaM1LWjWcAT3dLAMA5ekoMgJffbWQQ5s2JCH7k2gr4q5cZSSod",
  "key5": "5jRby1H19ZtQpgZYWJmAtCNY8KCKZWZY6viUBGibwexqF2VgHn8FaNbgjMtrqApC5mH8gND2xv5KbpyxnswVCfnm",
  "key6": "4U7bDTLSBreFSiD9oGfub47MvKcagMuKxca5s3Bcs3kuxLnCeRzwVEpiFusquQszQN7xd9BqkgXkQid7FRCqYGRK",
  "key7": "SoPML1oASFD7AxGyCpQyLP12QfNVaWVPScxn5z9HcDNvbSZvzexGcXLrGuBoySGrcyvP9L2eVqW3RPy48mFN2tf",
  "key8": "w4mzEKmmG4tgwSGFuwyGB7zpRXASUt4gBKjVTaUfjzyYksxK8MEok948knUcBLorRFQb4o5XGSfT3opFWX7ekcJ",
  "key9": "2XaXpWYkynmDw9PKU85D9DYzvseJhaXsrPdukea6zyzcaUTCJhXWWAXopM6M1qzCAcmqeSWKdNYZWwba2ufQhzmG",
  "key10": "2tG1TWeUi2SJo7tQexBN9Dp8uaEEZ4TGXe1o3xAfxaomhv1tsFJBWx8xAZhHfTxPWfEoQVrYeJcLianxY2CD6RSj",
  "key11": "AHMLnTMyaoVfGPruSyv9NCmhTiijuoYAkr3Q8u1mdBEQMqfYDFSMj7Krh7WNRkWgL2CjU6FcDU5ztZDmQeY8a6x",
  "key12": "mZe9Xdk4BPub1Z3NRFjJVmzyfwuAHK413dKXSTjgsGZiurpg81KQYHFdN6DtFZANKQbf8M2yzAoqLa3oPDwbzm3",
  "key13": "mYUttfZ1fZsdJEyiM4EDyG73PWyUUeWHpF4bKDvUVSK4JFs6g1Ga9hV4X1s1972e9BYs3DvRSkTTjYga6YEXNgH",
  "key14": "4BfdcwKoM49XEqNws69PKGHCLCAwDQn7uN1ft57aV2imbmeaS9CcceUEGkH2pBd4c8ai9jbKp8VwCC74bHy35XEh",
  "key15": "2ZoPxTJh4JKD8Lphew23DsDtSYzt1J3tPMwV7Qn8m72WXGKUrx2wUm2TE2Zfok9ogQjecrs8jnrMLjpjozv5MPfQ",
  "key16": "2UjXHaDRoE2LpUSZ25VNoGUMiHoJCan1tzDqCbUkFTvvte1js8D1R8EpBif77MhcHkvCm9vgvyWLnxhUNVbFEkcW",
  "key17": "34KntyM7kp7QVnmqPuvgM6V6upzavFz9q2GxNKWBVWqqYGvogD2zMqtPop52NQHYGiLYsgtq1ajo8sKd3KjXBqke",
  "key18": "3VjxMZcqSefqtHP8rUtgMwtxUQEVMLs6obp7uxikar4R3A8YSbuoryn6nD5eemwSkTbimNCas1h1n9gLwvcFUhKk",
  "key19": "5TrYZW5JS2RFet43itqGwmsba9kiggdiz3ePfTgQhdJUVSFWG3MHurxsuUbWrfeBEgn565MTkhvk1wpitozAffkt",
  "key20": "3j2oyNi2uEDBDyuYX3NdvGnAiFVGuvDQQjqYpBaydEGMTf5GV3CjHfFGr5BZhWYqL93NVX7Yv9eEqbwaKHL9Qc3M",
  "key21": "2xgX7rGBj7bEcQeq7wHY5xUNGRLrFYJv4bbEuXDBX1cemWkvg7rG5shZkxPxUyCitWyxJGj3ggoGSQpGK8QBtghZ",
  "key22": "3ct9PnMMXXGnWKLwhSsSeHsFQobgJX3JecCsF7yLQdafMcWdjYJZbfgL8UdXXQerXYPvgzsiztMgGaKyw1kPKknq",
  "key23": "5GHnu82DAGGJacdD5MxJY3a9WUvLYa3Wusf6X9PfW5hpKy7Spv1T3ZnpSyiT3uqMfoicf1r5EBPWwyLvqaKKG2hE",
  "key24": "446W1qA1EhCMpoHtdWq62kjc3vxkyqx11pN6PRrTMFCjgearNcFPcKSmonjLCzfhLwZERM3ga5t3aU34fK8WnvPT",
  "key25": "dKrdP6uE9UiA3QC8zcY2L9zCnfPx2RBQGLgvhQKGwrCwUgmPGfDgbHTsjXpdx2X5xtTuaCKvK3yvGSqVZoorhgn",
  "key26": "4ZWwRDQkrh2nXps4mz441fLNCHWtSX3ux2Sk5TxsHy7BVwaqp2A1TYX5u2LgZK7vZhwo7FGbVposjMhqvCo7A2Tk",
  "key27": "5EGjyonURy7ps3tm3CQM4h9TV8KiL39AMCUicLFSvEuTDjQvJz34hGn7kHjpYhN3KxN5dLqTGteKwHMugGv5DFRr",
  "key28": "3fKfMcX7ZEJTadMMm9fJ6A15QVjPV1V6o47QwWFoe5nfuqxjJ9ofE9HEXf5Q37tUW78u88cWWtjiVQfs7PEiPWK8",
  "key29": "24KwTB6Jq1fjbdM1DNBnzG4kZLjX3k17jD7dMaYPEHwT5EemS2syF63mTk5SF6s5Pj31c7dF79frWYJC9F6D3DrA",
  "key30": "GxwKj4cbPV2da5hHkbodDjU4eK9cGrYsKN7ctjMXFBU2fuqetR97Pz3Tet7vMRGKQUFmqH82NUkFQuZZC8ST5pM",
  "key31": "4H2WZrMsnu3TxwkSNfV986sTEE4QNBySr9PsP23Ub32voTDxKVT1uTJP4tLLDQuNwLByuzsHS7MqPSouk2ASvvPu",
  "key32": "DzbqGL8A3AYxUaabTmG7aGvaD7i79o9jta8DeHCmkqerDGcbh5ygknFQD6G5ofQ9aqXoejm16v7CP5EkdGj1ygE",
  "key33": "2GCo4McADTYfobesBNtUxuVSJrYLGwYPofWGQd7w9U8hy3dyR7dR3Cc9Sxjcg3ecfUkvQG1w6r4RLrbGcA6d8CYc",
  "key34": "43gEk78q1QeocSwopN3jYCjyc4BAyWqkmV3qdjLmd1bLpneugXfh3B8Sv1ifJ5cu7SkrmgvudQ1kg9yK6jEgHNrY",
  "key35": "5WpbJc71YgXEz5cNreR7uL7bsdrDHkfHv5gd9EN7L5svdz2QQnD4ZECTjrsQF9NhGhwue1PNsciRTVcDYDYtczRS",
  "key36": "5z2pCcP5PYVzw7M7YW7fRDBWcHA35Vg3KuibBNGCKcrLyrjNtQMxen4gL2op5Mtjk8jGGZzTw156yPazKmKxtdUE",
  "key37": "zx1CtePUQUar1F3jLqXpSLFMUU8UBCGRZUioRfeLajspY8WkUCKBqM7yPdCHDtSXt13V2Ng1xNrn7tjGnvKrBMa"
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
