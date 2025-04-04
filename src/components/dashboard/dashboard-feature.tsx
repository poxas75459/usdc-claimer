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
    "3eeX5PNaV3Nt6JmmZjHEVKGKPkam2c4wV3uG5zTDPshLBoz2fvtBuEXNjzJvyAc3Bym6xRNZNZWqwubJtTHR73wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SmwdfNGkt7sfjnj8PNSHnhUH4itJvyKbpknDmhoUeyan9YjnGd8x5LYVdTcFj9hjUYppeddQhjftW3rTJkDHxE",
  "key1": "2263RVsqepoNVowtYnuQRRpbpUp1fwFn2bG7G9f93sAus1JE7QnKMS2FvTurnzgXatxGZN1JGkzAuWKAWmq7pxeR",
  "key2": "2aAp18SCtHaBvz9vawpsDzoyZYayqCHTdqzdRT5X1F7kRt9gtscJUxTTpLtem1yS7NVUCW1SBuiPvQaxSdWVLaXn",
  "key3": "37NkszdfkZmqvoykcm2xLFYJrAx3hNikY5XJyQSq2fK6Q7mGJZc8gkkrVAqouqUUbh24D4pMBnRoRey1xs7vMnPd",
  "key4": "DoR9HcsKvGp2teFczW7VxNzisEK96ZZJKxn9yMJY1D9wDWFGkau1o9mZBPTa97BgbiP21kXpe3fEuwadP7REuP1",
  "key5": "HRk21NZR2h1fDLYzPQF5qdrSoP1ZhMcxEcFQ4mxixitvc8rroLaWm1h7DEX5GbVAo8gvW8vt9onEKy6FYbKEhBG",
  "key6": "2yeCW3Hq9JQrGFtnb3CZ7ZLnVkthgBjX44aWapBgNtGsdW3iXRQLko2oCdqLmjTQDJetGy7GKpaDZXq1EbQ5yRwd",
  "key7": "5nw9qrZCvufocpQbfLgUU1YsGHsm79ocdCD8iz5nbPqWmqD66AKRq8AfXNBJvd76RVSabnrmBi6enE3eXRePi595",
  "key8": "4cD2p1noBGTYtLdBgBEpipwdtDXouQ9hVKdzAw2XxHDpDCo8XybSTXedMVAZBj4eSQDar4duxiueKzJqo3yHS3BE",
  "key9": "4Nky4wCBLQG7iuLKutBaZVRXvEvMkbkBzQUNH6sAtE3uQr6vq8vA5B26KcZmmLygPaBeitprbrbyLKG5vmK8mggX",
  "key10": "3bjVq6ZpkwwQjaoVgSgJxHC6D2Tsgt7qCbvDBQ5gCSf7KVFDig1UcKM1PoNX2rxAoJ6irMJmuAJ8fMAXwYxoixFk",
  "key11": "4tGnPSSg2e7YyKuQYn6Wvnukv7mBC2dGw4g7GpVDbjmWiCLQCauksGUNWHo3sEJ1iVSJHNiHhgUtU6kqs4e9dkUq",
  "key12": "4DKV11KL7jpoTgd5W4KNwnM5CSG9mUP71s5zsS2RP92U4NLRA6i5ZDYghS4ZqYtBqNQEip9SbbQ7vYuALGteqwXw",
  "key13": "kCyKJhgAiLVm3A7w5cB7qq265MmspAaZ7eFQXhRdUPYSd1XA57wNid3YgQZtHg25kjwN7qLMiP2CJEy31XxMk6Z",
  "key14": "5KrfpBADi7mYMkHDudHby2n4JYWbnkb3DgEFgGfwPWfqK2cTp2QdHw1DvzPnnoQWpPh8nn32AjDhaKhEiLRDuPW9",
  "key15": "4xZNSsgmSvvBvq2gEUkmYM8kYfx4WbwebpFZ813M1zRMRiQpGJiB5edPEaR8nKj1petMTYftCdYWe4uFjwgtaePg",
  "key16": "4gm3Gbs2BpUTcmRmc4kZFHfgKg4E8dK6qV7ky8o6US5uUM3Fw9UMJ8oMR55Zfy57GLnVeVVtgLjuj1kESyAjfDzu",
  "key17": "5LE2tcWbkUf2DD9TtyzYwBm7xF2e4PL8n7HQnr94EKUXmtGdqnCHHeYJYnApP2e62rqFB2gAAvuAP8eMmv86iE2k",
  "key18": "3SmPDydNbBobPwss6o2bDS2wTyMZDL7YkZEmKGGLpbQfrV2c9K1kS19eax1ajfx1CK2UnR63yt6GjVgpT3Dkmp1W",
  "key19": "2RTmKcLWcWge7Q3ym3RTBAQLrXW8orpqUvNzGiWpKgJQuWc752cN9gWBWQtZnHXgNFqhQLXCf62rRni9QG9EBjMc",
  "key20": "RgC5cCKSZgPSAP2AUH425wu33EJvED6AAqwAuwx5r4AbgtNSzvhX6Y7p42NyJg6143PnJU4CaNBionWeDiP94ub",
  "key21": "2vtzwPeU8xBofvjRFxL6zQZNUGeJHXusBsHDkECwTREwmb4YJdGYoPMUBskHqWVNGzcDMATXgxUrYCYAGGssdQwQ",
  "key22": "XiWALC7eYFVfQ5C3STHqLfp1MtejGwwUr2cuJBpLMG63EwwpQ8t4fTm4DzvJPaq8o2CnG8iSao98PPvBwG1qqcJ",
  "key23": "4diWa4TyK2FC61hb1PNxTX6nj38BRoJt6xZrc3Rt8qSMyYoHZqJQ2ZW7uEgJGKvu7f4pt9BcAzJeQSsYUqaAuRpX",
  "key24": "AqG8nyKbcLdY284AcWh1dahtG6T3j5TtHfAW8cebCSBEEdgV5Zc4Tfj242vLMJyLgg6qsecZZqUDdNYjkLQCx7y",
  "key25": "2pJNnwmvDvRqZnKWDdHRwHWq4KvyyYv7nQQod6AqRxTk39NvpAZDqJivnfSctMJLDK2KjrYqgiC18RmNB6GKPFhn",
  "key26": "2UyGMdygEX4eUZVvPJ9DL8JgQV5x79ZSS2GaBWyXxbDz3v62wLB3eZEUDt5sj6xxDQxHvdLv165cUFw9mRauY57i",
  "key27": "2N3A9Hdj1qvQzosuYM3CvfK5cQput1DXtZbZbH9ZFa4qivqFKb3DmWELUdnkbAKPLa5XXhu25ZjgGKZ5Lco8sT88",
  "key28": "3oNEmTRMvPkmVD8G7KJXHnxdvN7H1fs33bFAQRSzLRxinX1ikdDvB2ADSu8EzAVTHbFitqeKh5cZUBuyWKwXXh9w",
  "key29": "rTcRC1RbtPENVHgHQgTikFuSsLztAPckEEV6AURxHZYvpEodGFFQoHJJpmtXE3d2eF59Wu28T2K1oq8u7MrRAWm",
  "key30": "56d4vmaVSSNF5ApfxciEHUBgvrAjJfsybLiYTiuUMSMzvXtKEgmEefMeokbHLjZ3uoygCevnqafVSqHTE1HxkUK8",
  "key31": "53RrHdv6Aj4W4eCv9H3xHruNmsNTThbE9jCYa6jhjuwnDNCQsd1pKnAY6wnNikhnoa5uvRq8juUgPfxXUvQRQE3e",
  "key32": "35f7o1pb7qRVYmu67WgnJRhLizJgmfiZ39gB6uPYVESZiQme8qauriGMtDHaoCiVw81xh1cMAQxA4HcMnScU7xqc",
  "key33": "24gq77QrZFawuhT5Jgq3WvaZ2Vf2Gz5HVdAH4N1JTikR7p5UvzwcyB2hv6kZBNfxkgnriUBvuJ439tZ3iGb5pq9P",
  "key34": "HexfrkxMdEsxVNDDXETqXdB25t4y8mgtz6S2hrQ737HWYpKYSx2ATnypToXN1QrN12tUPn62sfveNLBWRRorKfB",
  "key35": "3DZ3dkLPKDHBRgFBfXxSQY99eBiWfkTCyMUCmrh1mJ17aWuqcECeFcWgrjUM9Tm1gr4iMgykNaNp6redPcjK68kU",
  "key36": "644pBhvXY5QZuzVXbgZsKQ6HG2oyndvVNHH9w2oP5eQ3wqMDbdk9ma9Fizt6EgcYSe2GZ6gYbP4tS2jRHbDbTxyN",
  "key37": "5pnskkKwhFTd3kynzghdWPwTNB2u3rFS5YrYEccrgX7n4nReMSAFZyyakJqjxHSNAgmiV5fmKJ2Jy4MLYEG8FdVb",
  "key38": "3zXcaC9sQwVg72u6RvaeGFQUF1Up6wbVi4hEMkVDuMthUHaEDmj7WWYQjW6X3K5LZULUzWrTof3jALMyDSF7DNJo"
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
