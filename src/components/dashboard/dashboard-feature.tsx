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
    "3eebTeFR3NdY6x3XHaeZLEgCtxxQtmSc1GU6f3eEeghRGZCqdQj3xzFAKW5We7aY9thjXze6H2Q9suHNgLSWZLb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnNP3q1ctqfKePwuZCEfDvNNE3C9Nc9zEQeG51JnZVLWFcG5eZbP6ShbKsiBiuWnqKDHREnwS6jEFqiEtF73Qb1",
  "key1": "5YJPTkJogMmwhjSFz4CjuRCo6NKkHJ9vwfGK4ZjKad1NUS5jjUVqQ7teJVQD3otWSMSeFjWAtM6htppWuudAYMtN",
  "key2": "33Wwbvt1QdsuPYwakwFLZmKRsfwit4jakNERnGLnhbV2zphCPaWNEeN1rtm2XxnfkH1J2Jr6qVxQSWJ35xHxcjg4",
  "key3": "47RFjn7wjCMyCYtzrQ9x8kaexyDugSYJtiJT3zQGR4jh5NtqMaCRdU4AUBseA9uB2NdNejVQCx9RapCLzjibZdFp",
  "key4": "29neEVa5czxLJ8AuyCbJeuutAEj7tpKecR6DGra4FX9tesMkVeoy2fAhocAxnyaZkf92JU2nKMMq3DWrbRm6Xqsd",
  "key5": "2tguQK9NkPDY6C49noHH2BasnWFqMUctASWuUbQntnvkwyPZYAvXQePCw6VSBkWxnWDR6S5KtFdVx5BSCvNZv59J",
  "key6": "5HULxuJvCoS7nVutxwvQct4boivevMsJ6nHNJTA7TWkxNMMRL8XAHhetk6P1PEM1Yc3A7zNZqamphNhsq3TaSMz",
  "key7": "iN6hr99RivfjEdc2xKvTi75pJNbdQHXXuLn3uUZhDDhFDbMkcoKR2yAKHjbpiAQkfbpJ43bWhy4h2VVDZ5Fxzum",
  "key8": "4FvzJp18tnhbYnoLty4M9EBe8bxu9LtBkHQfRfBW6EaiEWXV7svDoxjNY6oS822XuXS32gAGVVjvGz4FdxwNTZJG",
  "key9": "2q6YveoH6Jes4K4iyTTzJfaWUSjNykK8Hnh9NfJ6NHuPPKnQUGNRRyVCHHXcG8uFKKR2TuX2P5AWWkLb1oLWEKEL",
  "key10": "4AHw9nM7bkDBrfzAfph1sJLijSyDAQANHWhHSRjKMsCvRiLj9XknWDda2p8RNknsBHgzW46xYHqGnE6dx5SSn4hb",
  "key11": "4gnN2q1Gu5PA22WRJ33eJ2r7fWDtVneae8koYX2j27mPBbLcskfraKb5hriboacn5HDVrvPXHyeEcfVinkuVbw5j",
  "key12": "5Ag7hdQa37k1KXJERPSFabhL8GFW91b4HV2H92aNXTNo3jjogDWwmLiDnKcGJdUPzSU6bQQ2SK5QFPda7K82sdJF",
  "key13": "2pfGpSy95sJAtitFVXkL5XH3m2EsdBZo3GRTj91w4cXZhGt1GTRQVvK36hEvLhiqAjqdcCHxdj64q2fidzT7cXjp",
  "key14": "4tusC9M5p3SFWrXq91Uw4bZXX24RDsUfosVEfjHP6sZ8E4qVP3UoVk1SdWmE5Nps9FZX9U5xq2SCF7nFnTiWtQp",
  "key15": "3aeZ3mjyudjYcCcKLFQpd1MfkWP41mukAZJZYCPcCMMewHjb63RpvB1717KyEQbmYf2WZA4mHCWhjApQsMxtgxHN",
  "key16": "5SDqpXeT71VgwJv8CbCF78XxUyQAgvB6wTsN3VVebarJySoY4g1SqkbiknGwgUULrXgjxqzD4iStm8MNjrESU7xV",
  "key17": "31nJkwSFeTYWQax6m1j7NieRA6z1qdpbH8hVZUVduEQ9HLBdJteZ1C3We2aE3C8sdrAFTF5uYNgT6oiWSNXb6Fud",
  "key18": "2zfGN4WEbfokp9xFTHLkwWW1oLsUiAi5shiJLpfVT1KbkAr9bML1mwrQ88kiYsfCARFy7rh69BPzMmFHSAjPkibM",
  "key19": "48g6YX9vveFFMMb5WSFshQL3EdpDep27cbwrRCZZwxTmaioeNrYw5NTdt1bkA2Yv7yCvKb8AFhEAB7p3ChhxEWY3",
  "key20": "3fHDVeNGiydvoiiMuf7pA84JTKu1rVW7soucLC3JrthdwooaziQXG5pDirZE8LDwE8ejtzumU2zcCtoDPFvhnKph",
  "key21": "o2yqDbTs76qcZg1jLUfGqijsMiER2jmqUMzAGZ3fz4eAe2c6qez1EFYRCW4Mo9isJpiCnsrQKexXPd1VfQGwqsX",
  "key22": "2UCUZTyzUdN1AZbSegk3TrLwo794nBok3jdTUiLYi4FMWJWrBKNxLrQ8TyJPcHLfYqJAMZieMKJ5Ad5BsjxgrScp",
  "key23": "mCGx2HNUVKrDwerZBDHqGbAavFm4dQXZ7AqboxygfS7eeqFHhJis2KSpWXKHPwqFPxrGW1WnA44YJ2Np5k3gUqm",
  "key24": "3BKMroLHtpBisF59YD2A8rRej7Q4k1FqFjPS1B3GDQdzKAuSf4wtqiG7Cg99ApkYDjneDZHRhdWJEFKbh3eRtZsF",
  "key25": "4z5nkUkUyDS7MmxtvUfttP4KeCbRbWNtpP6GN6h9S2V1EfZfXkQkxgZ9sWUraCfQaCZJCyTvfXzeULQDJCa2YPHr",
  "key26": "42ZkjmW8TBStUSQfgtLuxE54Kb8T6uUQubZXuqQSNTRMGHp6PMCoCcevFTWugYPxgCUL4cPkERhbXUEeHtg91F1P",
  "key27": "4g3XAzLCLrmGmyrCHRGyB6mRfj9n4iJydJPfJ3bzDSzqJnb72VTZjxAsT2whsmtP5QA3he8KhkCMAT3yCuAZoZXF",
  "key28": "5V3WafjDCmJZSJTweQ1rg3HZsxpN3arkVpeshnXgx2n93cEkWgeY33waUBEDKZQ3rRdMxaCQSkYzavDPn6tbmZ5P",
  "key29": "rQRtUF6sTcHvcrJ1RfzSfFTnNkHvKE7a5zTBvHNiVd42EYB1Y2jpT5pA87uRmyeJ48xGYsKoATaworX14HrVkJa",
  "key30": "gXsLZA1h36YgPC8fWEtJ5peS34eo3rwU2QP1uaX33tcJ99k5iqhQKVG1boKf2W4zFc8nF6PUHVPVrEkhgTfGUZm",
  "key31": "aRj7Ax5aj4sUaiFaESBVLTgJji1FGMoRMb8Ph3vaHDVRBx7zJ1ynN9Ejoq7k7WD74n7kcx4JwBBSA4fW8xzhGQ2",
  "key32": "36qHGHJpUVS2q3tMvfsooLPeKQRadG7UTZwfWr2dbNByeervqAH16W5KdvnwA4PFG2Hye5PXJ3kH1VPenFMZHV9d",
  "key33": "3a8zg2pztQzoL73twVcwwgeLvreiu4soonMC9MhGBJBo3AsFPqVsVVzuNLxWbva3kw3TEddGYBDf44FTMaZccpRx",
  "key34": "2F7ZPjWDSuePDQbagbaQfDdjWsatMqQAQAPQJmfDH5bLZ5EvbuNifaXiKuGwEXyAFVjpMEaqdFUgtB9Z8DekSCGX"
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
