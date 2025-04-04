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
    "5idKapSs2az1nWcMFXRk2ojHxZZZMq5g9vZnLsHa4v9SKQFdvkhqdziEnuAwSYjbm3rcdUXKRuLneGdRe5GAv8Bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wzNiGLktL7szwWvRuwH1eKZJ9thHMMRKJerHPo1mmEbwnLToepwr5Gbp4VU2oyoD1spTiXZsypSQLDd5VMeHWC",
  "key1": "3qnrpm7GypDwpoFKght9bkX5FbNyp5TRVyctT9Z1sfAWKNisWv29L92BjfJpG1F4Xut3Ws1qhYS5FzdyN1FGoxek",
  "key2": "3uUDEwfxtesZznSgDwzJ2DLBARFkL5BxTYrdQxZDx4opw7tPwGXcMf3RNoK4FpzYGV2KdhbYMBA5wYQmBHQrmazZ",
  "key3": "4nmsRLfM6AboXxJzVBHTYuy4e9A5ZB9jBn1L2e1mpSjtbC655eXC7AFpsW9EsBx45cMEv1uPfxhV6Hxmr26PWBFG",
  "key4": "3494mBDWs2nYAX42sfunh8BSZCimHHFm4vmMer8Y1V2wyuaVhCRt9YrrNVipTGXuijwkvP6jNkJ7C2UnwgQRgFdz",
  "key5": "4qUAVFRAifMAdyGtEYC1hJQaog3snQQkjyXpzKuBewBADt9GHoRnSK7wiAJneexK1hwotDMu9YnpEQSpQoeEs9W4",
  "key6": "3DBy9PvsbUbhWwpHj6k14QASByaVQVCmcRz5GZNrhQ5hqUouy9jWypD7Y8SAGYHVJ5Vx8P3XSoSfP7r3hqntbS8o",
  "key7": "2NZDfHo1R6DMGnN6iheJT3hvRELQX8XmAGew44naYpUWNRjDwumohRXgnhdpA5gtmxMXPKQDuzRdhQJLTczMWkLD",
  "key8": "S2R1ZxZAdpD35cgmZCGxmvHqcTgX7T8gYtpj7BeyfkB4bLbKt2QGjN2u5HiKW5T1TXJg389e27TYw34oB3pUqA8",
  "key9": "3F8Np6Dmz5R4j5EC2yo23i3A32vA5cs2RreYc9L4wUf42cu2XnhebVvBqcySbaBn7D4nZrwK16rPs2k5mNao4c2E",
  "key10": "2qGet5ZzAsinpaKihL4oE1tSSPFGx2C3KwHehG2jF5LiamBAGh7iamEysvibazkesHSFP5aDWnRi3e648Wafh28g",
  "key11": "3j6XmTXW374Dz4MNUuUEux2cGbqRARq4mPNUm9rE5bg3oStYyhYVfZFXd5mYLugk7GZTCe83VdCZozeMJfZMDHXG",
  "key12": "3P3xW8JMy7HCiza41X8XKNFMM4Upi2JKXTX9JBxNWTMWafFbPxjH2edscBLkEVrgf3Ydx3wJiv36Ev7dECvY27oz",
  "key13": "4fNAVXLQJnVcrPyjZ1SGLc4tauoq7u4TSaCUfSWZpoGepJC9cw2DeBQrrTBTPoeiHmt9pcNbVBX6rj2tewSKWvtp",
  "key14": "53aenvLRyHJv9QPA5Q2K5uoCaafu9ZHVToxGKRQMEejYU5BcEnrEcECfuXPweBHiZ8pf93AquH3sDt4kSasPKYsQ",
  "key15": "Rsv9i9wT2ZHRRETzqpSGzvhLnC8LQ4xqmSkva5oHTGAhtfSdERPTDBmp2ztrKuPTKSLKQRkDKbdr9iGCeRqaWuk",
  "key16": "4X94pVrRPBbek1SwwWugWTZiWmQHEPLH33daEE6ckxDyRZ9AoKB6FiRGM4TrEa5Evm7iXyiDeKA6ogYoTHQciAKE",
  "key17": "4gMBvEL5Z5hD3GcbJZwmQXsMBs4pxNH5YUmKz8mbH8KXF5P4pnZvMeYjamhoLZMnTYjpCrTDdtsaAyq1rM8vc2YD",
  "key18": "2NvaZeCwobjXDgdDua9tqj8hoQGyWJvxMT6X3heFv7STQ1861tm6y5CCMNvhR2S3CWvtaX9crtTaqh2ykeBi1iqU",
  "key19": "WPoEFuUm7MecZ9SCJzWQwnyAwYBAjQwpuXi8QfGv9Kip2mpT9PNLk2uqRQ2drRpLoADx896QB5fQ6AwSakteb7c",
  "key20": "4vKusyDVKp9wusRCLXezF2UjJXB96W8haDcDmpB68mDeUp7pD7dbNW1u9bYb7KuEEmfLPfNyLDQ8wHAXVUr6DFNy",
  "key21": "2oemSLjahya8AxCbBLvpWHTQem79g2Yi2weG1qHs9g2GbHMYLmFyoF5DUZvrsEGNEbmgsHxhCKFww76ypPyto2Jv",
  "key22": "hf3UxahasomhhookwvVVjrPc7UCbchgBNFFPWsumbza29PybbqpXHRann6G6C9sEmGWhjfJ9GKCPVb2xTg1DPfX",
  "key23": "YaqtL8ZGxnw7K7mxZdroyYQB3QJQJW7XTUbonVbN1pRYCQeeifGRR5ac7mMKtUeH3qkvS16AYL3NiXP9qJ9WYUo",
  "key24": "5iJG7b9UwQCBZL7dr7cmMPM4LTSS3UhvWGNdLfAPtpLBejh38hscsMwJZzPep2Y518NieHgYKQRmX8auDxJ9iKpv",
  "key25": "4TZAFevmYZwnEAuaqeWoK5JtdPe3qLYs5iiVkuB5JrPxA1t5Jg2thDx6iWTYP5xNGBi2HDfwzG3zfVnpwKgbni8M",
  "key26": "5FoX8xLPWDXVkrKcNC2t34JmLS7wGJxQ7ehpiE1vp5p1oHp29FHEg273oy7DsfXrjSmmKYBZtij9AMDRf36T7N5u",
  "key27": "4VRY3rpyfj3YAH2BAdSv2bqHiDep9hKMerqYptFo31LAQN5fV6U6LHHXjg7tUHwKL6yU3Hcmuun8FkwZ8TP3Bd9T",
  "key28": "hfqQVfjX8F3A2fkt5HY2Vf8oVnczGM4TUsFz5h5shdyvnMGVwkgjmcKrGwjXdY2t4xCM8q4yK3NVJZdHWkGdELN",
  "key29": "4vs7Mz5Nw1ow9m3ELDJ1z3YhWeYfjwAwai3TrCh9XWVRtKEMpyqv8aJnpJJpizmaiudGzL5iZKAZ9DfssDyBQMdM",
  "key30": "5PsbMVGdZgMi1QDpQ3U2jGQk9Hd6qdtZVB43WW3zXePGB1EMrc3CTsBxvJ3XxrCwaP9mkRaMZ1n486YX2yh7vSzY",
  "key31": "4YcGNdwY4e2iErmHaoV2Sr2xR4gA5CqNx4eLDJLwudTyxybBv7bdVVK39xQeP8jgy1FPMgqyJFffk28uJo7UjM2h",
  "key32": "32hFHtRWfCjnb9LJYayG3Pxa3uXf6dbBvmXBsCPsx7DQ8Cae4E44vNQNz5KE8rSF16hKhievtX6R6po9LGNp4WYN",
  "key33": "FMpPqos2hD4hezSdyRzWjKDqkqGNXENyZ9RKMDQCUhvNYyiyvpgd944D2FzLr2FQtBQ2MLkdgb39RpcveM8HdqH",
  "key34": "bmVAYGZ4zpfRyq2LU4MmfrZovbUMrMAYxD4wqFqSdgqjSxgAkMSSUoLhBdTsUuUhjMKEPani6jVUaAxWLSAYPAL",
  "key35": "5uxWU7yD5DR9PSCG2Uhcug6xEp4nDFdL4XDbAGhAeafWP6HPoABntcuHwAhv8WGhNZn4EUiVxM4D5tbV7ieNajWN",
  "key36": "2BG9CA2RvW26pncLFWA9DMa1MLwhAG6KCLJyQYUherfWRFxobqpmyyhr4mjTN4viq7e675nbLssbGXcTVybGchaq",
  "key37": "2pCUK1zGSAihhpPNCuX7jDsZAQek6XcUph8UHHrCtwvVWpsJ76EMF9snT4bRrAGZQKRefJ49Nn63rJb6SkF4n6nJ",
  "key38": "4FX97Qyoh7e3kZyoEDiyr6gvvfdp4ATjF1nGPExbdiRUZbS7aTysF5MHWMZbdpqK174QT27Z1bKkVS8GJrJiMSCj",
  "key39": "4c4Tv6jyY35sSNupUoi5rDaE14C6TqZ6CjPae3AWGtD6PJqAPppq4afDnNLd4HoUqV43C1AFyCKUeww5KUPweVEN",
  "key40": "4jKCo5fTjKu7qbWkDkA7z5gcj2oJGT3mCrpH6FFCHkS5FdrZmaabPphW4jJq2Pq2bF4wF5ZrNPgSRyH75SGTXGuX",
  "key41": "2ufpkwoTSDSfbVKfMLLYn9MgHZwEsTPN5mFr2C7KjASprnZKDBAMZbaC4RN3ejhmoYiRo28v5KJG1TYHFsFVpEcu",
  "key42": "PFzt4mYZAU425Xu62cUnCR1PqF5Dt422YSJptt13iKQoUHDBxtNsmr5rn2dYQ8KxK9nCdRbgwZCf8Gmu6aQieJA",
  "key43": "4jTCTGkwKnFBWMB767ZScUi6e6igT1QP8wWHxraYTwPrUEJLe9PJgzWJtHUzqaq6kWSgaFQmqwWPistkhmkUvYr4",
  "key44": "5ZrQJZM9AQNWbjAu2HQDHkMvQKPjQx2iVEaDiMpTgb3QRegKPNDqrcaFJ2gxRmXqhiUN7nPvuyyVNoeFHkY9juMb"
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
