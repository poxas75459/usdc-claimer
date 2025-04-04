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
    "2AxLzW6puXcMsKx6mkfSGPVdwoFyW9bvfLgeBkyHLNXTKksBmizqsPvWyQWTsQdTwrvgxdNf4vzj3eQ3fy7Louva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9et27CdroZspq5nvvhXmeB18GLWTtrqZs7KdWtz4im37nFwGkExqTZ7bDPRSGhkiZ7CB8HypFWPLtAbSjbs2n7",
  "key1": "4Mj9bzeeAZEFAQFCyBZmKwgn3kgNeeQc21wz1iFiJxFMyKssQQsVWkPT7XrmRnvea3PS3FJSkCW3picCwUdP8WoX",
  "key2": "dkG2VhwQyXMekcPTJqS1hBeG73nG39CZWPhcR98gLyMbM7bQ9mJk1FDkGnA1txC7FdfNc1BJT5VQRhdAperZ4yh",
  "key3": "66zHojRPay1KPLg9Ai7hvTY8dHpNxFmBSdPJpFd5uTEpwpoMdXQgkS9K6a9sGyPYPmJ9xcGcUZvcGJBCvveJfLob",
  "key4": "2StKR9QJTLjQ2rAPm4kX6xsuGuND3p6EDtqAcCAGCukWVxhAvynrNYtv6ikoXD15bd9Efr88JEenmtBfGhKZaHPd",
  "key5": "4wHLYYZfKHz9Bn5cLxaXqiLFXdNZkLQz1hMwizPq2MdfPNMqz5fsLBgrEYHZ6ajz73CTiQz3BNn9dPBrpwkVsKia",
  "key6": "4353jdSLL6ny7BDzTA8L9VWZTtZRk4T7MsQZqM7ec8BTZFnJSUtSazRZ7jLBLDZjr42ywmDYehLbyzdYtYaAVYZU",
  "key7": "TxAHoJvevWkqJVD4eeLjKrXup1ji3dEuKEKkRP1ChXnomnMoo8fLLcStu1Qmpnh6bxXY6yYBzxDvMo698g8Vfve",
  "key8": "5rg37XAYb6PUp8zsp9dnDuEwDma8Vy7BaN14JiGrqiXrgqZjJCi5x4Ry1LtjTXCdukUe46rZHWPAjpeKLwmF5TkC",
  "key9": "3ajHLNkvFAk1TDSauaVhYpEDP7ekQu3c7a1KRz9WVU2agwbJ623ZBedKYxLR5WnAN6Zm6gfwpRf8sGxzw9ZZToi1",
  "key10": "3cZ6TsVw9zqXHvByBVRbxtUv165fAUvBp8C7vHXcjNad93Ft9t2MwE1bu3jh3MexXsNoc2HgbbrcbcdJYASpEmxh",
  "key11": "34qmC9oNSTtFX2PGzimR7HDFHWpEE3hytTCzpXFMEhs6e1yuQR1GDmEG84riVRXFQjCsFJMoqM2MzMUxAcrwRANi",
  "key12": "4MfuNGrG1ga8xxo6y8YeazmCU9oEHn3fWP7sJmikfx99RTegURH9bzUZCUMrakWqtNsYZHh6FoXJ8ScwQtkbHfBF",
  "key13": "XQQaNRtbXPmEVvhe9TQ1jjmoRStck6rb21ioNUx12mPeLQPVugidwgptbKQieCGv1tLvr9mvxPWPKai93NbG5ic",
  "key14": "4QXEVxkNvReVjkqyxgVN3re9dNZ4aAjG2Y1W7SeuKJSkwQotXbD2vBwcW3cVeU5pf7j3D8w3KyiU5Q3rv1cvVRro",
  "key15": "5jBDZ5BgRRBNAcQpMDZeNVWATCiFJtSH1xpEXkQ82cxvt4UPGooefqMbTqLWggutW54TUYnZtY1bP1uwcveNPJfu",
  "key16": "2zwEKEZQVFqAHxpHw3m4ATT6fsPJJEMMNFQwLUXjnmHM42fcB3ewyBxjCdfEiYH69sLAanBddhbWoojXregEWQsh",
  "key17": "4HJmrAhMdCXoDRXrJNadt9am2FiYcX5ohNjbWX6rn3KQ9zt8eqN3vcsSaUKsmHBMSGcdYDd2zQJy1mzopxhbY7bw",
  "key18": "4muc5qyhNXSG2zTxZ4DUZVBpRqPVgRbagyRm6kXctckzjvARStuA7U4Kf62wZ9zytwoymNepnSbj4HLHTj3qYH9q",
  "key19": "49941eu54wAqjcB5pXeoVvDViEye8djZUm8Eq5nPwyFzkQG7WoqNz8DMVfyj5q8shNWFKACEVr5thQAXhNHFW5yV",
  "key20": "cibounmL4Vzxba5NiM1inNZs4uaLqmFbpF8ECqvbQeTGMJYhG1njfuGM8VqpDjGcYNrxTGVeJ9GZBrTo26grPSY",
  "key21": "2C3e1b9S1SYAasprqRHqA3DrjSzsChYZrn1svQ6bsKxxDw62W8BunwzSebkzi1TVFnA2bh2uebKJyZmjG2J3xRe3",
  "key22": "2wpCyv23aVrdJTwh4KruLwQVqRvjK1NeHJn8UkoPDHAxGxqWU65fWzErUKGz5Ea8HKZbcfxBwn9NMFnvRRAH4wCV",
  "key23": "5joZr3vmC5UuDqxeQk8ShUDS3rzSxNCFN3rDfD7CNLvkFWgEZ3xEMrgquknB7Gbnrwy6SV2CrjZSoCRUcC4NmZHy",
  "key24": "3W4ttSoMibTgN6nkhqtcMs56MEPcsVfvuHwYHuAPu8QTUrZtrew5bt3DxbER5iJPPMXPp6bBqzcrQTNXbGxoVcLP",
  "key25": "5g1vnPJRs2ekoyjdmCN1KMv6WgH6E4Ci9Ed17hgHmVtszZRsnLYF2tN2Eb9P4Xv5ZdxCvTTUBR3FFQ7mSyKDmeCS",
  "key26": "4Nb3F3aDTdMuY9SSAffpdfmC7FbVtJ68DV4xorPiWqfVGRyMVqjMGLtpNGq2Gf82jyYVdsAp7h4oepZLagUdfs1F",
  "key27": "pZ2h8wefBW95B6e9tdPZ175dS5pZacHemcpiNnk1rnVW6rLFfvfjBbYo1osC2XzTYKuMFYgyMim4xCHxLr2uTFg",
  "key28": "59Am5Fnqgxvi6M35Ufs781H69ccYLBWgu59mBnEWHS9J1pnSo7odgfargwKWWKeXqpknvhrb5KwEtKg5TvadRjVi",
  "key29": "4B29PUyNYAESE7PWfSiF85mVmnF9P388z9JXLKZuzSdW6wj8RJVBAhfUnjmbLVtp2h8rtaVJwg6tNUHrjzdB4vZ5"
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
