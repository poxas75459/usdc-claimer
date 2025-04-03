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
    "2hzSjs1W12bS3HoiD813ZKnG4KuK21qCGPafBeDKu91RToks3ty5ZAb9b5txYQCfvKC1j1hKZJf7ytrynwtsNwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5AE8NtRjfbQ4yXn3zqy5Vky6DXTCo9s99bmxr73yLVZo66QACgnxZFZ4Hpy9YDYqefdCXHuEg5pngat25MHYtZ",
  "key1": "3fTZhTYKMMYdWRb78gnq6xRGsdsAqD8fAiDtKYzeKc6EogL8ESDCN6rGHCHR1oJXyuRRgpS7sFQz86QFHP8zutck",
  "key2": "48HK5bhmxX96fhC4CTomvoYihfnE9g6CVJEwpm9JD5JZKoGa12vMLxB7KDsjQLLQMeRtBdt5jh4HjmhfZx6uBJGi",
  "key3": "2GJBnyKtVWvmnLpJ5cgW8r3a5TXS6AFYYqg15zS8KamBtpqZ1PwdqC5tyZD2mfiiZkPRLkyZou88PL5KMNY1KDgr",
  "key4": "3EEodF1eZQnU7wECFFSYWaoPy8u6KBhtkNubYhXPXXmSk8pztgEkzVpRNmf4EMATyQCsBLQ5mXPypp9WQFgVu4rW",
  "key5": "2XGakKjMhPiWDzeBSJ5bHAZ4x6yukRzeD9MUwTr64aBBEEjFG64cg8fHbs5TpYg4MVCdvJypDVRJqfwMWro5T8Ze",
  "key6": "5wQAdWtaW1GrnzeVFjgp3cACDZ29ZFvsMn9n8W8qNtx3USxQb19azLYuffa679m3mK5YqDF6KwDiT6goKDJbPUsC",
  "key7": "37sZmEY47XrLQfAno6nN3AHceWccqcLkovkdXqeqZX9jYDuh3iHsd4tS6boeusprsNoFthLwWovXNMUNoh7i5Ed9",
  "key8": "3gn6b5y5BFTUVBWJg4q2uBZXb2zBkdZ61ruxQZT9MRxj5rep5qARNnjFx1iNHdeFzMpbhPPDMGmBzQXgDCo5i7y2",
  "key9": "2dfhccVjyxsG8uZt4KBq9q8cKrfVPbkXdvoxBv8hXQ5K2iUwuJ2DudzBx3uDKzexf5b3NjUjzpGkZkUTBvBN28MG",
  "key10": "2FMWkiDp4BsYGJCSs7yT1tgb4yVeGDWxvgGgQxcYGt8d84shX2fmETzahJBDdDVur9mKzTECmDoqLGF4wZZNHpwd",
  "key11": "3UsPi3nDUGmSSPDLSLHJ35ecLaeTsFRJkXhHmu7SydHTUGStfoD8JkXSqboRo3jhbuyEZT39soDpXXZ4buapy6f6",
  "key12": "3Zb9YFpBw2EVmZaxQvYEh4EgrUHg2mjTp6FB3oP4AiekWXovMnpMA4DrsvtMVKS4qhfhBpxkj6dyTZfyvyCQeBHB",
  "key13": "9S3RTDRGmoKBtkuaGQKLmPoKBwcn5AEYTX3JxQvXyEtL2uqSYycTh4fiAszSA1Mxo6e3oYWXTcDF6uR1cCXNjka",
  "key14": "qDxmvgg6ESM1wQSKgg8VStdfX7BXknJs84i8XjkMRUEEx1bSSQVNoLM8V2eNj8DHM4a8qhQRnuTBPKiPHyMYVP6",
  "key15": "2KfmA73scAWtswZKfcSvY7JDJ7MS6MAc7eCw9orgBnRQHzGKRSVsgHgQTHmDam4dbHhupc4NdT6EfjxUVn6JqDoc",
  "key16": "23s1XKZXdBBKzULprDa53yf6vd7j9ANLrj69NQPNctyNPumT1R21uY1JPbkz3kvSLzRBpJU6fAnteRKCaXGpEZHW",
  "key17": "3F96gMcsapycnw3hY8z6DZNv2tZLsVBjKGPC5cdCJ7MkAEiR5PbYXGcYwnfF8XuAacYYS7jgyDLexGU8KKZvyy5M",
  "key18": "3B2EjhWdde7LmMbKhKgJ15Vg9JFopW9PmyQjUUAcYHxqxodTqMVZGWhAx5m1nS4LBco7ovyJyKjg6F4mqbjmgaRY",
  "key19": "59Lq7E6da7fPNNi6rFXNcrr6yyz6p2cNjjMwAZVsh7XFf3RycqzT54uv6ue3ta5tucqGcdcMgewbcBmdR5J2LYSB",
  "key20": "5QjFTaAkow7G77M7DdJemAtMC5soJ3hNfZSMvRkr6CnCdCXhyDSDWfUYubMdFnN1ze1qbeEywLbG4o2ZCWFGKSxz",
  "key21": "4LVpoBnb4w7kpb5hVDsHeMHy5MUphbr7FtuHHeos1A6MuoMbKpoBcwKJpwxCExjMK92TqTqLh1AJhG7Tfze8jYyQ",
  "key22": "4fmUBU1cfZrBH1dbubpdnsT6zS2Njredg7zrX2SeCh7QgwouXkSaYVsCB16iRijfS93mdHbMZRs8ZgE3msMBSBUn",
  "key23": "9JkVMrwwZrNvJA7QHrVXWMkixmAZCPXshCxzsCUQRSKMwQep1tQ4DFHzbA7oMy1BPBg93A9267q3NwGqurZjrXx",
  "key24": "2JS8cUo8A4yYypYj4TN5QkR4zZeSY41Sw2VgZ12R2wp4tYg4exA3Uu6odyTfTFjgGMdeujFiNGhpVewCufBKoS7D",
  "key25": "4w7V6G6YWRGJUq8NUMebRw3fyHPAVQQv5qZ6EWanCobZoAYvuFhpR18d8T2tW7ZiXdYeD96vkMbJmejnKgoJjSG5",
  "key26": "Lo9cJKSXLtEDLpCZLmrs7HqouHpTE4fxZDKCm7ymxrKR53L6ufNrwQeeFDLykKpYVkVGWk6pgNq1vwTAUQ1jyPN",
  "key27": "9eJ4Q1qwi8WKR8r5cxDCZSKhHJbU2iTTbX8LcR6nE1eoZtbW8ams1sxzqF7RGmhkrURtYDV42X3MrheGBRKv7LN",
  "key28": "3ZQwPhupaSm7em1X86x8hDNsYt1xdp6uynY1nNnHHPbabiXAF8ssaB3mimUA9xcUXGGxj8sYjjTW7CHBDNjn4wCx",
  "key29": "5XUcFrdi7NDdRSuoHkhqtZd1duNq72yzWXEDhdxbBiNneepjbZ9t1ZRfhLCBXMzucSmUgVhzx92dU3zv2JLzUvpd",
  "key30": "4yncvEigeq82dyqngFT9G454FPZ6hYKTGVTbJw6Mx2zaVy9pX7gaUmWbfF3MiGMq734GJ35ZMAFaETGFjfccVXDC",
  "key31": "2h6U5d74Y8873JA4XcgqNoAJz8Loc4mEsVMa6Y45ZdE3wQb3bBeYqPVwbaKxTTZEFTK23xpnxjLmvZ7FkcN3ms1C",
  "key32": "4qUg6qYZZcves3Tb4gobHLMi57UWY6VPzdphzGBxzivtf5bdm849EsPsGgZwXDhAsTiywZiNpJ6NRPzpeuEVfZwW"
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
