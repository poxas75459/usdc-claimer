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
    "5GwxyGvUwAXSV5UkxZJ9wR2dmwS7ZGqgMtE3BeeevtKZWSDeZbkcCf7S7fQSm6Vh9Lc2hsUqeEdmBpSPn93tcV1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4umvA3UULUybkDX9EfxXZtx6y5yTXNPvQpafYoBGy4sE5J1dVwuFV8kaknoR5Lpp1s3mLeUUFjbXyGr9HxvFTfit",
  "key1": "4uTvFnGLtZvaUmXj1GrFAW9g1tudoWSC3nqGRDCVDe8fq5c4y3tiKPXEcvibeEpEeenpCEsrns6LW9VkHxA9KDY",
  "key2": "22W64PmV2QGVkbBGnDioqD5G5ZYq94sQ2i4TeCvJRUvNeaBavSyJtXVfjUH9JpKNEnL1iPbdpKguf2o6pZw4rwvY",
  "key3": "K6eK7TpQjEqWH4icuXzbZ1JPPGhh9S4ZbmXtvBQAiv9RSMRfJ7FQUGvX1FK8yhDwutNhyGLk6iQwi1FF93eXgLq",
  "key4": "wHoASBFGoQSS4cQguSVmKAMbvTfkqLfp6aN9G7DRV2f9Pg3Yf7D5PAuj7uenXf8fXjepAMpdbZVLeBRMTfLcACp",
  "key5": "5NMuukbMXyk5p8JCUfZjJE88J2zHGrJFYt9BAcTK64PhUhNKrxeMBJiszi82v7rq1htHxqL4Fk6Adv1GVeGdG81y",
  "key6": "3Vh2GaEhSA3EAr9mMYMNuJ6PNjeEShxv5MC6STThqDhaRnm15Ht3A7mFNBaEhCKE5kHwQBaC4MmvAw8RWB9CxZaj",
  "key7": "5aFCBPbimt4EWKWN73qqaT1vAb9sUACwRQPwWcPvQy6zKh4ESHAsnbhyDQGvoscgKddtsvJJJbqS7yPXm59PMsqU",
  "key8": "3gyhZFfDLJUVc4fAqK2oSZRT6xnKsQ9VrHeCUHd5NL5Lq5MTEXyi7Yv3ZjNj3sjtu8tgu3rqDeyBCTy7oswKts39",
  "key9": "4pVtu38B24wfTJP18FpYexYHz56eoJef1keVrm1gLbF1nREAPHbUfKUM6ASPhuCXc6CPn5kJZma2edAFvDyL6zkA",
  "key10": "5P5p948iHx6HC17LViR4hLXCYztrLcCNJwvG2RZEsKSUEDtd2rTUDLBmy56wdh33J374ErTnzuNEyfnMMsafiP6y",
  "key11": "3jz8rCi72wMuU29qyJdX11LCaVQ9g3K8xpziEdSAdKuJw5ZUpc2zk4wsEVxtrxnaWLGPeg6W8FnVUM3tnmTKQ4kb",
  "key12": "41DLuBCtf4iN2S8ruuCsVQQu4MuU9Zo6me47uo4jNp3LptLSAbojj7vSsqtRnCAWgoVXp9zjFSw1NFDruUFXsMP7",
  "key13": "u5WKEG2dKoAJQ8WEyPkccW2FBFTQ5GAVrnA9KoK8AzEBxTzKZYkFnUgCuySHcYRWXrZmSFEZUZBcNnKvAaZNuNh",
  "key14": "2DA5JeuzpVgS2pfLcZfi4vtq7YwKuakz48jVS1p5f2LsYdxcRBQ1ZXJbD4JHxUpoJeBb8wdVExqR7DU4iJY9z37s",
  "key15": "wwUagMqSTpFGN83jgGM1pkPS8qVV5KZ3ABQxb8mGkzW2d71aoA1ACu6pVsSEYPz7opJsGgdvdhLkJoRBoFm1kxn",
  "key16": "2z2pV2gVH9FXTqLwwHLJ8GsbNp8BNnhMbMkjj64DGAFggyg8ASUN2CXMsncL41PdmergFNyKte1JLFh4vkzqx15u",
  "key17": "2ZZS37iVVm6gvMEtiukzPXqCo3nQY5oXRYppsw3D3kt3wBdZykG9knAvio7o9HvfXENz55YeNh3c6LjVMvQ43K5F",
  "key18": "4jx9o5dcvjCVp322bv6xuK2Ku8zu7M1WTfTCSFdD4jRyhnxwaFPDCb1KYgHXicSqAPxSkGx9rYxhFZThwUGL1Hwf",
  "key19": "5SGcntkea4kqrHVWM3mxTLNNxDve1t16K7D7TfSNTmMvGhD32meorCvwbAHhrHF7a9dZM3vD5ez3iANmjaMUG2oj",
  "key20": "2R6Jq6QFpBFu54SKUsDEfjN6sNpXRobAp2CGiV4QjoSFZoicYfgCQaf8ymEFfquEgp7WDc9YaSFrj3EDwFvBQXq8",
  "key21": "ucEngZUZ5xbP9BfZH7Bnx3AntbudKWxoLFgY1mgaSS1DVp9cbbaKGJ57fEzPq9X6Ed3yPAiD3KZ9oRuTG97ndmj",
  "key22": "3LDKm5nvCQTjfi6osxCizf5gm5VR6r8qxuQmd46duDgNMiQSLuW9RospbUUgx3uFaKWLojKTrHvjKt2sqBM5DZLU",
  "key23": "5eRBkYbnikAeAWiaZSmaGcii7fTVjGCmi9bLH6oTjECQ6g1KY4LRvVs42R7Tn4unoEgKxJTunR9JzeiQ9T7YTcLW",
  "key24": "Zy7mo7CrEuvnx1xiDH5p6nnUnpU6auAAiz8g27J26Lh8wBTcfrXM9ptqyzxto1KSVBhaWDztLFTGVUrcghiPVXy",
  "key25": "3naJaEXvw6evzGKjyvZfCkJZSys9vtBZFkMvx8vHau43rmKNrSakQTAjUjXT2owtd6BwP89vMfN9PYKTvSbJtLd8",
  "key26": "3obTJf9GsXmaKVzYDBSP4D7oyFbyAG1qEbnuEBJsHB6FVCiJjnHJSToyT3RgeX5Tczw4hgtMsSA7uii39nvqQFm1",
  "key27": "3qFhHvK8srLZHA1hmPJkeDd6rM8FbcPCAGazwL6rNMBpTxsXXm22KRH5WuT4Vre5n59bfKSMps5P4M8Pqk9pipPe",
  "key28": "67eMDE1B3dshXLYB3tEA5JxNyUrajQPrbxBXLiCgBQHG5U6zvc7zX7EXQNP1nHoqttBMc3vgEXBxgYoHxqJ6v6ta",
  "key29": "3JVWe9CJbyuR3fa8EgWNdGvQ2jM9vCCnVhtvgG2RENs6KKhxRSX79iJqUbsMJ59FmJe7KS9QM14uyQE7MEdU8DK5",
  "key30": "3ZdFHA2J3E91Jiy5SU6Mmk5dbcr2nqqxPn4ETHcrKCT2YfN3xzSaiMsVw1pUCaf1DwaBCnFchZ2c1AkkZ9uYSxiU",
  "key31": "3hpTEFDUgU4ayjp8ohCvHMigfdQNAeeFkPw7wbT3oh9BK5eS98kMtDYRpkEw1MaZKcdaSee3PWVjTB4VMSeaZDj4",
  "key32": "4o2TbePWVh43kuCCGdAnkFW2QFFimUhph3v7N6oJm1casBr7vvmU8t3G4WbtKmCx5RF3J1fTG3nkABTMcArrNbsm",
  "key33": "4JD7rgPPhPwpMqfYDdv14HFHwQZZ71o8wT7hd8KeoDYe525yahKUmqjxuRJLaRfUnrc4Qgs6TGnqtiVSB2pTgaqy",
  "key34": "525nh1BzoJdFK9MubT6hcoBAUJyyQSTAVLNNo4Hw27tq71LXAEp7Xbb1bzKtcF7PSqPMviDzB7RwPWHDv48kbMsP",
  "key35": "5qwRmWsJCggPbHgm8WZ3Go4WC4Cht8YHi1YbTQCDoBgrDFCMF1LoNDZGDtPnSgkCJCXXYzbDDYiZPiwdvENMN2YF",
  "key36": "3mEaebEyzd5hMFv1CSZamwC9tCde73gDfH1MZrkbXyfnkhfeKCrMnwDxekVt7my2LAqgCZKQoRasNwaZWu9UvqLS",
  "key37": "5gLvvciR9aXFyDewQbadNmLShiGR8dbVmLFNFit1he1iwYxkt5t2Grn8893BuT2zGndfTLW3GSCfNmoLuCgKVbu4",
  "key38": "5taVvRDVF7sgbi6UBWq2nvreqxctRebWSJM2p7RtXJL6UjtCuCpSRnmcQkNXQwjx15fJpoeUJVmigPqopLhRzNyZ",
  "key39": "5SGgE7g1wPA9URz3jLSXxVqKbxCT9FayuKsAHAxx8jUmyKCcUjaEtjorSJtEfeQn8pkmYfSktLoKuYUiPEQcpDED",
  "key40": "4KUpxuKHyoxTu4iTnBxXqsLrwSDUmvPBmohVoh8bB74ki8hDCzcqVdaxcTcN8DePrCpUS1en98tTMfhpYZ6BS5df",
  "key41": "2cLUKXGDiM16XPuaqPrfJSvPwL1Szbn9AbfvQz6TkoE7kxvxZ7XJtV9ivCMzbxCYqqEZ76HZep3XV2E15SuJe2Ai",
  "key42": "2UKYvFC8YJkVUrMUW8epMNziFLGEQAmdv85cUnpikXtzUPR61nQFBnkbPfYDYgkNZg47r4wey4En4dwXcYuR9eYN"
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
