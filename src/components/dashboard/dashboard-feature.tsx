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
    "32XyGmAnsASqDKxejFB5JHGuXbd3dJ4TnHE6gQgS5Gft8gwvzjHJQriNyyP9VCuHo8GctRXyeazC63jT84GGKdh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UiMZ4qyCcHoGsUnhTypwNyVnyZUr3dNiHzdgCYg7T4DTgxbybPGV974e6J8MYwzzsPtLBHtLffxcN94Mj36mgUL",
  "key1": "3PATXtsetgaAowHZke4tJLSGLh1SusodTBwEALnhwnc29oQfb9dHWkwsmfUo1mYDcaX6h11gDYBbHBXERRtKTWs3",
  "key2": "5ErQeLRECtgvjDSkKoR925kis1gADT1tZmg3zt3Ns1iJXvBVmsUk9J1BUeHyXYYAztbANugErrdqMYm9opv2VbKE",
  "key3": "4ef741nuWWBVe5hsmzLriHJgCqrnUb8QpPTARTspzRyLAwCfHtgsjvivouYbicpavq8Vk2ca3sECkfL3eXoFPw6P",
  "key4": "hYjRt7zzzwf3erg5EdggfYgdhVdVJ4EBLrAtGJxz7GM9j7TGjHp6PpLroD8RjQ3gcGg6vZxgNXzHiNP3cYxovfa",
  "key5": "2KwqLBNvpAJAjumY1XrJU1KMmQSJ35TKdWiv9jA2CF4c7xLGUgEVHH5BvYoagJ5RY7bk2QqXHGHcHwzLCU6Ds65q",
  "key6": "5amqFzaysRryFKCak7Pz5DnuDdg29fndL9CFY7S6drjV1oghjUEGwKb1bW79po8skuddLDcZ1fqVqqn8CwzvDCVX",
  "key7": "2daL8DQBsSSSWwyyxL1qfgEXia4CiunYG5noKJyCade7jK9QVSh8bbHLUxhbjdQhHdH7m1CjiCWNPPy3JKDvcKBm",
  "key8": "5ArQH3nQGuwYmpykgXquqvKZ6PYFu1UpGkaNGeAbxScA8N4GP2FYd2uvbX5zMUQsUyZpi6xeDCDGj9vFycu63V84",
  "key9": "5yMd19fMaUQrR1aE9GURoei9XtWn1pHiMhts6wN9C2TgTK6nbuvPwmwbayoSR26bmhDQMz53Zb12mys98MhXXUJ6",
  "key10": "4fRz8HXqZBmr3KPD7tjWcG3Y7bHc6K9phsJfZBANXBxGFywHdqoRAG8cKjRVQQJXiP6W3LNSaKKC12B74A23TJbi",
  "key11": "2Jma2U1CzEDSoPVvwi89DRW5vLKcJQykmV9rBBkUARg7od78hCjaDd9GNhtXnpKGbk7xvbX6L76XLKzoRyQ4tYoZ",
  "key12": "5cUHWQzhqaCWfdnrd1vBBv3FDvSvSzyF7sUCiGNH1iUFBmEdXivgiU9H2EcXXswmUxThmq82NepkV6YrWwnyqdHa",
  "key13": "59KS8LvqLc7w2SS5GuXeZGjfCj77u35yNsA2YDVq8YdvqC6YiHSAHR6gWsry4nNC9mJZiM3hwjQ3jdvJuRVgFfJ1",
  "key14": "3CdMVBK8U8se8rGFkuSM2yArWKnjMrHJkKW3dkP4YPdaPkRjh1xPCfjARxTJEbAubkBFrRmhwUXTgx1pYMoJVRoX",
  "key15": "C3mYNZxRToLnfkNhMgjDj5N16z8iMfsJ7s4znnQiHdfN4iWesdiqmtUbNh2JMCuDKTMqdaryn2RNNzzWC4Yay7G",
  "key16": "2cxHinahxvmFfTDGBY5ZDXRwff1srdgtxRDWra1hjHe1QWXxZvb5CLvdrHWcTiY5pLYuHckkHD87rPDDfagWLnM8",
  "key17": "1sJbrRwfk1rzGNnguwd7HoTzMP2pZDsFPFEYWDhjQPitNzTfabh3UqD8iFWpwK43LGBQHW4NPAHzNi8jhdaGr4r",
  "key18": "3Viixw3kcSwK7R5xFBTsNGJbMAjjqUmB6BUDA3WyKwzRrnsy1VrADTqBucJbDrddpH75jbAP925M4RcaeCajBou4",
  "key19": "2SBHorbYBSgR2RFLEuGfZH4GTvTNHFLgxSuLoMGQtG5B42TiJuActyKpQbfa9bkvhhC24TADZMsSNmSi82hqkUzX",
  "key20": "5e47Z6AYkSd4PiXuMyCkuAzYqg75Afd9QZwNkpyrdXeZHo2TyLJNjsxD3WA8RQCZrwcsepjdYHdNZduRW848sgyv",
  "key21": "3KdWtHkgcYBCHWpNqjrKcXpotcDsXCYh9kD7cW3rQGGB8mM5g7oVjXKEhyshc4vYvvAxiZ4piHgNzEAECynDg3WK",
  "key22": "3NYYoa7M9bLVe4FR4Fd3eXEMN9JNTe6qcyb4YRZaVoXR6ruiNjSzPsGdEgSkbcjiNLPb1zvYhAFRKycVEN7PscN9",
  "key23": "3Qm4ELeU6MMp4GVtVKcgkVZfKg6EWM7FNbYBXPW6wouRm9LEmqMkN237EGuWovojJzVWnk69QrM5EvSwxFYGtAPA",
  "key24": "2RCHFApErDZKc9kYerJctNSBRKA8h5knTjHh3xWzboCiGRfZGVq7Z3YsuHd6MExUck5SxAFgU72AAFkDr53WJ3up",
  "key25": "tHqL39aC3N4LtxePPiYZfSCcKbUcNKJ6A9uF9oMYFZ2cLS1hVJaChqMcUC1nd1a9h8vnWzPWz3a1CxMA1yUYsjD",
  "key26": "2P27Kh5r8Msjbvq8wSc2RR4fcKPEVv3wYnSBLCjvZKPbuYiKoVfxQJXy6sJKRWBCKzNaA95C4KRDqq28dDK7LVpA",
  "key27": "3fCjV4z1dZTd9QXN7sEYRGsWw6gex29fEJr54KMZnpv3ZZNDrL26X4XxHBqk7RZ4447CsLcwjWjPuHpe83Q94Zhq",
  "key28": "Xvf3J7SCRnatqqDsycuck3QwfKUTVpsn2kiufYfsKSmTTDh5rMRiEw9WfYBW3JnZiWBcdBUadXDse8avXCiHmcU",
  "key29": "JbzwrRAvNrZSMyVNJVuMMX6HLfihiFvRvfyyqL9dky21n4d2NauaoXmAtfeZwqVpyqgo9MJMyapCyBaA4q2QAzc",
  "key30": "2nnrXjNA7NWYn6jQH2dLW95KiznCV9tNq9Lwasp4xD5MUpf9t5TbdXTSSXSuZEHDq1LF63bSuHcujdYYtFUu3opG",
  "key31": "663vM1NJgwwFyt3xYNAwUcQwKrdMBdWG3n4kLvVN366RmMbqHSwM4EFT89vF8FtxiS5U1x3Shok34aLKmxxhC6Kx",
  "key32": "2uivDgWBRYTuHDsercvvxsYxnk3Co51ghqF7eLGYSwGMPT3EGDMuKNAvSGNodVARSNHUYqvtfkKhsQZw7CispoN",
  "key33": "uiM6Gbvgd7Z5usoYbyBMLKXmU8hncPAcTk2aNYP3AnQJuDJ5m9kGx1zpr1LmoxokG33aa662YK9Ua6rzwnmHJ2c",
  "key34": "2ZZPAwfjhtL6GwZAN4Zohh62pTDRmZ1RMEoRcb9hZxj8dqrqnfBSHTp2E7mqx5p7682cJXMVFa35ZbL1WtrwnMYF"
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
