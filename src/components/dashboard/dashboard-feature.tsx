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
    "39PSH49FMmbqA1zYDAEtciPR7EM6YSZoFxKZzZpLnFQdEgE7tnoGkomspGoX8Pge6NtxtSxpeP4rU2bbzj53Nvxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q7S6C6QAikz3Adh5t6t1DP2h5HBr5fsaMyqjPHe6JrG4KJKD6sm6Rj2kKujJH85GrNCsNs7FTjkPGnHfMg1eRZ4",
  "key1": "3m9X2j9FSd6wAM6eyDiS4VJw6AsCftrvgNuQejBLNNoPbqXU3FacncXJSFmFxWnB8BMvjRDC9TT7zCz937jpCfCM",
  "key2": "2tv65xBqkGtvNnY919s8MUf4VNFPCUqrSY3gpvP1vaLwQHP35LL7TtsAfwuRZXJsVbdhfRQ9XiWEAT6kq4PC7gTW",
  "key3": "4thw7FtnyQ7StrhqG2mFFjc5yVPetvn98fgDh2JYYa1CoM9teKdj4xHSRDydG6BUaqxyLhKY39hgBexvyCU5YBr8",
  "key4": "3iFGvSLf6fJAYadM6RdJUiuXZtNb1oVws2VQZmMZ8ZqJPzH1js9HHfhCeV7BrJLhSyLbdwu7RqRNfrqGYErnwt7K",
  "key5": "215siuC3iYu9KVXYowvyfDCVF9nQYsY4VyqYt5VJEdMwNC1RxBi7Jr2MWZH6Fw4BiJvKh5igFPVGHW981pNhFF2y",
  "key6": "5whey8WFkcnjbqyLuTZEyaTa15WbWEX95FXCc8Qem4dnTknRtgca7NPzqbjWv1Hb51UKWNrDMQMDS3ok684dWUNJ",
  "key7": "MMH9JwBwmXY4D3URHkQLYbHkedDBVUCaEpuQqFxNtqMqkYDx1Q9gWH4eKj3k3VhQwQepUA6DQ9hZx468nEZhZCM",
  "key8": "B494mA31Mjs5hsmT68CTLPz5BaqGkStNRaTABfpM4nFmZZo4F6tR9hbDfr1Nv4V6fQkNi69EXRBEpVKd2LbjdiP",
  "key9": "3GxWeWc6E4NSKxW1JxC2GLsaEjP4Cu2TPi3pwmTT3ESmHgJKHA7VrGWVhxw9sdvXu2fk6BQw6eCCs7NZT51VwTB4",
  "key10": "3HXmARPNsynE2sr3LbYAV2n3sS18e5pBHNSFi5aAfsTHmZQphvuBv5sF8rpnznPAqyTQCnEzZsxMprJsdht7LCDp",
  "key11": "46kdJKtsi9A7DdPhvSpav1i7KzvYavLnuzGkgtjSVP5BJ8TrEEBo6zYfg1JC2GwWu4xaPU7FYN8rjJzgnxRvcaMn",
  "key12": "8RdhZzBGNkBHd4QWF6nHTKCkzFMT3xnXHpWwRHMB7NBf2uabPcsRvCUcGeUoB78hoXX1iaJEC64UA8CxUq6utMu",
  "key13": "4p2ukYT4h5PKxoTkzSzAmrJUc1Bh1X5yXNaRFAAq6NkxmfXRb4366KQLQ2TBc3TTf6L7JyDUB8HeJAx1b884jwnu",
  "key14": "3XhknQdEwMgm6JktRiWeeaZT8u5NufFYWshq5dvv3yARisvwuAzN8og4Nnz2p8QkuafoKLSi2oYxaVq1QyoCpWc7",
  "key15": "3Nu6cz8paLhycfcVBnvVNUhaj2orqLT1mjciD5BXoJucZrvnL9fWVL6haK4XxZopobkw5VegPps24fZRbMKhfNwV",
  "key16": "367RGa7Vj3awoaSKJriCXXpggU7gPoUiT3WUwu2fe4H4CCjXfyXXCZNMdWG72LRNATNrnKc1WeUipmgseDR6EbjJ",
  "key17": "5TduBvEq1qskp9ZQvkXFAnrxfXekUnQhUdnnAseJU3vAiH5uo8LfuWeXWPbWSY2pKqfULwfx8xPSbK8A6chtLAxZ",
  "key18": "biYCfQ7a9unugLq8kc3pHtf64REYg5iYTAUGfDwjcCjDXDFdkPif527xpDTohENMEGu3ie5wbfCo2cNFJm5hroQ",
  "key19": "3LZVxXZRtWfz14uj7cixFr8DoL9qRQYzgPuoisfXq1vhDvfSgZxvqAEYcurC5r1QZhrdEThUmioc1t7K49Gs6ME6",
  "key20": "51Tf3sS5WRc2bcj3HYpsPUZUW3Wp2ZQy6uHgM2bfvV2NkDhoNNsL3548wF1iYsUtV4FnykXeMYNoBeUZtNnvE7xH",
  "key21": "4D6QG7rPccaWW7bnAKSe7QXPmPzDvQbkpHm6E9jZQRERkEzPhscc8mY8muUR4NZ2RwnMxmHwER9PqENxQwNyrmCC",
  "key22": "3brEmoH2aYevSbFXzZyGgeR4LUr2mreu17c8G8Aew7wXxz14WAFNheFsKfzCwsqSh6xdzQmKyLGkxCykzhy6zuyn",
  "key23": "2wgNu7PwGbYZjxxQQo2Fn7JpGmpN4YgCoe4HhW65XPcLCisDF2acUda4Mk1YPWZVjAqUWmfZ7RZ1gm6JuFThrWjU",
  "key24": "5APcFrVwqwJFBj2CYtckJaNSAQVb8QNzfaXUiB7Kgd5m3fhB9b7xLhAfbm5EY2AoD614isVo5D3ybV86jv22tcSD",
  "key25": "3opJvGJaEdhDfwcCGPMeDyVPUJitoTMDn6kbBufxQ3bmdShUDUdGxSEzPG9NWhEQ317tQnMdTmv5jTtazAn5iQ16",
  "key26": "3Txifdsnb4LpTyFhf24oCRb6oVTEmFZVeGv9AJfyoi3Hv1KC5YVTEohTYa7hev6Hj3HpsuXpYAD9uD5SVPqzTchM",
  "key27": "3YQoVeGynBCPdHpNEViUUKnXoaZWAwJBtaw28rGkefPUuR58q8GSFA7FT8rhxnjyxUhP7yiHNzNSbCfgTxLhKDqT",
  "key28": "2rPiJGssapa3un5yuXwRNA3jqAe8S66ZW6Y9M5c939UCJeH9rZDDtgaE8ChAML5Ew5HrJi8HCqn88pYtWFpVvQTV",
  "key29": "3Jdyh5BF8vMDAihCgbNh4NibXtpRsrjwMHJcS9bn6h7KsmFeVrPCphHHzTNXPWXWASryay6Y2QESHpKHre7M8BAH",
  "key30": "2tR84KkGTe4edy6Z9fkNLQu4E4ShRfapUb71fbjvUnZHKKkKTe2XjW52aPJ9E758upVTqAPyGzCYHESyD15dZxzi",
  "key31": "66vYeAs6EQYxXGzL4HpzygxSq59QTPJdSGWheixLjgqpgyzU1KvEBBh4cXQaLdKCEbhpQfZRFW99nXU6xbp4EUMx",
  "key32": "2cn1fYPJYSyXtLZsCHdn2KPGg3EZKjPLRpBKeDa5uNZ4DYZsVFMezZB9Ln8pDPksVWuv3qkTK7XjRtRPXp6Y1TtJ",
  "key33": "2BfP6vy63itF9AE6GAPWSN4B3PzXeXQcZWgtVvNdLMWzo9S93jRp4MqiSRZcbHb1yBMKk59Km6iBDBufvRbqroJ7",
  "key34": "64B5HYeTAJoHREvMRjkE1YVt8HWS3GiUuZQgRKtskoEqxAPsHXbxE5k7RBJ1VRBpmKnmAxX7oNt1drUrrPjvKrGu",
  "key35": "5BUrjhSxS8Ert28wfkyZJbBnLcSy324r9TRK3KLk2Xujbxfv91yeDkXpbJNAmtD6CK1HiDjn9LHmpKbQoGBxCJbw",
  "key36": "4uicNM3cTq41u9vebXjf3xmtueqJJ7DkHjvocTC98Dc2pVPy2kYz3pR7ueXiGLJNmQeCvPkJZD3MfSqVxTtkxkTB",
  "key37": "3nGneXXcYTnuJrPwn3223Jd5WASR2uH39G2sZYZSBhTZqvYDJ9zH3zwGeGKpQwGNp48Z76dxvupVRNnUMyDpXKwM"
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
