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
    "hTDZjzyUdyKiEDXC4EvimPxiwqvfKV7ZhwRpTPeHQ1DfDjZuDSHTm1kM3CNpcpyPTnewzTin2ZHsFdkjDYLCQhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJ8v9m1ppFfg1uPNGDaJWMQd3MTpbYtHt1v3abXKVudJ9sS5USMuK2rjknX2e8c2mc41qzcHix1dEL34rz6Qhhu",
  "key1": "3xChdsXx6oMh3F65VFDsFazvgo1Rv4D4i75mNaP7qR6nZxiWKbow7Doa8nXKhWgdJsBx8dga3JT79qZRnkPoGSw2",
  "key2": "5jzYr4C6cyHw15tq4K5ynRM6BMUQxWD9EarEWCPazHAfRZtoUb7NXQFXWgGSufAmvr2MyzkdE4d79tsAsSHh5Et5",
  "key3": "W3pv2bVu4Pix4aLrWaB5Q3QtiTsRe8Ry5xZNvjcZBE3iy5nFBSV8tR2beSPack6gzudZtzgU68zdftL69b8DYKj",
  "key4": "3YnSUX2MMQjN1E3zzkS6PdxScdeotXnLZY4AuNbfbtYQ9WKrso9TJ3MqjmempWtKfUDvstdr4CDgXLLp9gMXKHGP",
  "key5": "7NtCHhBNBSxKZbefQnoFB5AiTxFv2ALT1fBUs54bFkTDMRAADkwuuY8wAqKRGPJQPY745TFPQPPUYHHA1XyB49L",
  "key6": "4Lo36XsHy1fUGfBHLyH7FVmXh1ZdQT6xqTpq36z1WmcY1MJVZWq2Khfa5zroZVHyAdqxnbG6hHcp1KsswDqGsCkJ",
  "key7": "29hGPFGnGcZ9y5B2GqDjbvwmvD8NPsbeDk5KLD8CzRumZbw7y9WviHunNESHT52P7dTsTjvyjj1iaqspR4r9S5hq",
  "key8": "4o8aH784M3snBzVuq21Cmit88K2q3dzrnZ9CMXk8jJVAYVjQkHifeko5ewSHrXuFAKgDZUfEJYUzZBLtUu9Z75Eo",
  "key9": "2BQ1YmreJTnZ7bbqSxnm5bXQQCRDm65iFj9w61eQ3w4BxqjRTTBsCpUXtqW6ipoVmrxC5LjP3qXxwFp8FntKBzs6",
  "key10": "5CXQmSD9jQY1ebRx5odDz2CKr6Xi5voFwTCqePDvDoxWwgS54Cb3MNW4xwWFUWkP8zucVJxLSudpQbGKd5mqNdKf",
  "key11": "tuddzAB4tERQxNKVPYiroZrxXji8iMkkRmH1Doe76y8oyZD15JiaMUnA9qEANd5eDHSPKrYWEwbtCvhPRtCN81x",
  "key12": "5XRdE1FnxhpUDPdEEi6FuuZqr146KNhf5gYABEGtH2xgmfLH7YiGgUFmXK34sXKSUBdSNAhrz4QW8TX66LtcAtzR",
  "key13": "yuYZDZzdLD59vRWyPYvC7BNrb8di4CMG1KgVUKUXzYJk9bC6AqwWgsTcQzbHCwcw7NTZuX8NeCCpLy8PhwURy4M",
  "key14": "4auZTdQpdRahA3FEUAvwu47ubcPUaVZ6EAd9JViapkKFF1JarKVVdqapAHpkzKPdDP7ZCX5MesiWsnNoVHsJHXxP",
  "key15": "21A2TMG3sjxcWhVR4YgDQVNphgDwFDR3frTazuwFJoBU2bmWFtSwqP5ajR3adFtxtveGn8crCx25SGUHGnmdpb8f",
  "key16": "3EqTxCcwnWYx93XrWBHSmxdoqVA8wJGcqAnCAn7XxysxLeFPCAcRtuJ9KZq1K88xbW1QqXfLbLfpAYWzGxyzhAhC",
  "key17": "4pUkzMteVVBKuhNgp8HDbxCy3i9rgo5fBHN5FEH2re4p7W9iTYhH33oz9dbDpgqBYnomUXKZGbD2tnpcjNyiHDer",
  "key18": "Cn6DkEa6wJiq7xA6zq2vPsHG97hdRCcGVpkrYSdueUyrwLLmhXZpoGXp1zuAdACEAu3976zY5Jzu4pCUBadXLLB",
  "key19": "5Q4x4yVCU8tpiv8An3HMRJ4JEofVPua6f3eQe3dRepbMpQT7r28SQGyCDAueaz8ZvVQHYnF3fc3rEXK6y4XYany8",
  "key20": "3nDdmNb6q6R4foGtXUgfnctkAm45tjoFyDSDCBrhjLpdiQZBkVsuMSP9syeZwBcaZ11CBneoiRRdPtyvRCbk2Ytr",
  "key21": "25XyxZzjUEpbzqMjKbAbWWDkijTkYNNGEyAE2CMeDxzfPtLcDZqP9HwUSkKpLsFK77Q8Lrm3XDPxEywymw1WVU5M",
  "key22": "67RxtF5iQkUEGpQGpGk9k75PqoVMKRcaZeBrkpypPPwPkfcM8JJdjxzVYYDBacd5827w5dzUrHmrGUwT2VUirMij",
  "key23": "4xwyneFrJmfYuCV4Juidv7VeURU55agfrSeqiBMh6ZnKPiGtefDRdEJY2stpZrmoFH6avGVHhvQUG12sUVwZ8wie",
  "key24": "56S79dJG9H3fNv2MYZ4ssDpqRXZrTgVgDEEz5MjB9u7yuRzq4UCe8HF32gF9G3gGPBk3ZT5wn3Xg7zcSsVhuSUUu",
  "key25": "gQ5jVLahv2hVJqdRVZd4GpdNAGRBY8cUdTTrwLVCPsHCRGoGi99B3JcqMKhN2CLWCGGVx5XyxGngBA2mpaPAifT",
  "key26": "2cYeTF3twxbTh2F4UEFS9RPmRKCdPcH9vd7PTeRxf2jLw1fMSZDHXEir3oyKoLVnYiub8dsHvxBrqCzzN7sc8Mjq",
  "key27": "YSheDGe6G8i5rPDq6RjLVBZrMp8WnNcoqCstMgCHn4FwrdwfRdimuxEV3RNmNyD4byV31nycXq4fynmz1s87vLh",
  "key28": "2RGW91Uxb72R1csgbHzzLqEELRqUSj1MZRHdig5hAyoXWFJa28a7NrbGu6v1zPghThhKCv5ibfrRsB9XLoCnCy5q",
  "key29": "j9d5yV6GNyPe4mnTc6pv9JEekVjJqqUefida91HpXiC21Dp7w8Psw4Mjnh5g5LKfzvbSzowcz8muu6yGyXBkJmV",
  "key30": "51PzAHDNPX73DhxYDwdScvt7dg8f5hzTkBAX3c5EPd9vWthU82oRDFMU9pxKJCAoaoyQ1dZkiQQM41btPRkswXCi",
  "key31": "3ZjukJJZm2w3fRVP7WzfXZHSuKHHUi5Kbu7C3dVeUkzbzyMW9JLPUcWmjposscUEN3oDvqeDeLyraVX95DRvRyWS",
  "key32": "2mddqqJYNrFUQ1tVMSYJgiYyCWbBRd1ASjdtVSLi9N7CwhLXP3NUZLQFhwF7vDtM7tDjEvWEAoZjFCqxx3tpSurT",
  "key33": "5xLuEq83sndfvAbKaF6k7PRyZ8CFjLceUeSDVCegR3hiDePZXB7jGTtpkYzw69eL4bBVFTySHfUdMbZiwdnPHjW3",
  "key34": "3DgusbKtR7vtM9Er5tMrbVwbD3S5BvaJb9ddgP4ShUNKTxWg16AD6DXtU57KNqWduv2RxL3KXFQikThFnnMZkEG2",
  "key35": "3CShrNRV6pWB6v9aZ1E3oByNPTe8AQNDCrko6iRYnTfke92T2mKM7RTEeR1EkQYFi6dozqsyT3DrAJKrrqLi1D7V"
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
