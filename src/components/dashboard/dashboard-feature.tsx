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
    "4VwvdPNsi1DtyKGv5hTSXCuDyprJZ6qj5NNfhaBKkXM8LnnCr84WmNf1MvZbwFowpQfEQ2UWgzuVPdERau3FeQDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbJ7fRXdLhQ7esAui33BzyNGHCN4tg9kSu74Qp1FB8ka64BXCEsBX29GqetzdNhnJLNHYipRf1ubz9McFB7PoPC",
  "key1": "65tC6TuuaEVsJEdJkHJKiNYoqGKQAy6ACXShY83P2mkxrEjYqCyqefTbDok4HK9oYMSEFf3LFbDPnwrFfBNTNsT4",
  "key2": "25QqS4ZbjrzxmWATrT2mk5expDdqoSEeMmFVfek9fz6PvTQUt6RuR6JwgopP5xC89BAKLLNeE53GTKdzWw8TZah6",
  "key3": "5fRxQLQFg5zsDPJK9knyxNBr1L9W5sY2hsi8RRWPNxbuP7bnDFirTLQwwjzbfCsgadbxqx9RMzsoWT6YDCahd55r",
  "key4": "4WXieNVm8sNjtfSpT5ZgrHW6GeJwinhtvmFgi1YcRkULamTepHFgeXzu1xSzTJ2Cyx2fBPAnSseKMxeanRL9hAvz",
  "key5": "4nARBbdswBFhv6MVMmPtVG3hNV8QNeLHS6nPrWKfvFghMvbuTTnFq1y5fyR37ud4uJpjBtpHkLexQErpGpUDg3Ac",
  "key6": "3FxgHKomCyTg7zdfKH4bBqbDdQiKGqC497veK5mziEKNNKLdSDNrgCHqMYrgbKEgq9UaYq9VGjmNeHdME7LV3hgp",
  "key7": "44dGF9WqsTt28Cdjf5zLHQpnsvtH7oRxCLVaUSmwB512EZXpZt91by5Sqhgf7sSeZTiQmww2zqDqiFxhC3DiW4tr",
  "key8": "5Vwy8M8nQLfabpzwcfHEwQ2iGyyBQFxGcncWXKTgvnGC2WrXYR74KtP4WpK4opnYMzKWEuCdW23hkUiL5xMKcks4",
  "key9": "3LznHP7rMYRq1VTfAvcompDQs15xDAP488rMMVTeQ87HtxcS7xVBi89rkBV64xcwm5XsFAySTQ8FCkQKdEM3VjZK",
  "key10": "4Z6wJrDPSFMt2uWPkksAKnRbusySE2DHcsuPZSBQpqRotRZyJg4vxCCXNxfjGDMPoqxCPd8dEguKnq32yEoev3Da",
  "key11": "s8g5FxQaL8w5vZXm5NvP89xQ4rEJz6cVdTsrKGxXcDza1fyR5nG8idmEvy3NrtijwABjkaVk7keZ9waKCKLQ8wL",
  "key12": "FEYZmc7pMwNVyg8hxqbAjinv2Gf3LcJ1yqA26yC9i6jhvNwJh6hxxu6bgAehA3opZudcNzLL93uXB7AQZQWKbrN",
  "key13": "53pufSbRkzwmYLuTrhTmYdv3zyrCjpRUP5UNC82wEY7j37SXfbGiTZj7uszT76keRSqrLXSiossudGjDrCEAgt71",
  "key14": "5G7cR9YYj7VnvHz555gqj4GPXJUrNfbGLbergcuBmb2cn5Fxhk2UboKXWCTA61Wa1so2zWe4hkA2ZhetQcpZnoPA",
  "key15": "2ev15b3rq7dURXM4WtMSvQR8uzYwXNWDCHr7aRjm272yuPEcd51uga5AHPqQaSZAodaLuWD4m3JorbdDMNkLYvPq",
  "key16": "3A7Gxy6YfF4BfR5ytZirXJ6uiwLSV94Cc8iZh4GXQzW19FnZrVP83oKHactW7Q2gPxcEEj2oyn58MoNVVdA8oArc",
  "key17": "58B4GTf2XN7EzcRTjfyRVAzFiUhVFL8CbFYCns3GkwVMccUpy3DxSq7FQH7k1i5qSk4eqxjZUru4DyQqArRMRhHa",
  "key18": "24vtiAXisDAFaFirMa3VXFvMq2DVgpGuMDzPCAMJDTm4L1VBJsde5u8GJAf1jeTwpiFDeaAMYkbkcVX57A8UN5i2",
  "key19": "i6YEBEHP1xiHkBeCu8Ns5nNGuahfSK5HbEeFeiFhE8dPwNhZgTy3gVhQ8p2zBKn7eWjTZbVmQ42JLdHzssnQVPW",
  "key20": "4WSCVEW3zC16HrRnJN4HiKupncjhxmkRGq9CHoUf1bZhzepgeJ5JRHFqssVu2ySEg1ykmZe6aT7Spm9ZoV6F59Ue",
  "key21": "UDrqMkdvHiXq21ivZaufNerGBDduDueGcrtqf411T1Pgxj8oLwU5pdHCz8aAqc9zdvdmhZnw8ZZjcswVZ4CTp2S",
  "key22": "2jnd9EkGoPJC74JJ27KMn6xy9j2sBJFbgCPHbrhAKEnsXyNWNzvkj6QuYi6MRuryPU2GD8fSWA9jhy3WxSTKCsQy",
  "key23": "yD5S56PzkKCCBkAHN46RywAwPiKemMJPGMTc3HtboH44WJRXHs7anmmN8PqKxiPN1TswxzcZrT6QpxMvV6GEXQM",
  "key24": "Jv4tzHwEU17ZWAe2Ys7Qvkofhj163sh97TqwSS2KWgbcJHw6X5TUpMGwiG3tUpCPdrH1vKMtd1RQzYR4o2RigCE",
  "key25": "5Za7xwJoBan2mCSGd9vKfzZCoUxH8zW1zmFa8mFS8dGMsuX4MUKigTLRDxfDpqVY6JCU1ZFjwKEbSP1Z9VoeGk2z",
  "key26": "5ZshAVz5rWxWsgSMXt7zZjCpF24YxnyNma6rUtYvBZCMEtXfut1Pc6tPr67yPVrFnSELF9edLE5uEzUXAZLUnV8w",
  "key27": "5UxynRbEWDnRYKUcL8zH5w8pWARhGvQ46L7dLbj1WZgZyeYEGcYrKpscikHCxhiXYrwcb8sQNd15j8JFEGvcd5ha",
  "key28": "5iPLajsUsgxKov8hepkmGYCvaFwtPhRWHFjRs8HuDCV3QbwogsWcxxiujm24CsunTPcVo9SKYRgYEBR8dRv6y7kz",
  "key29": "hshwAJd78yqjapC182AscadRSn12KZfFUBnxtqPeYHq2mScv5hy3opxZSd1iGFgV9ZwDPwGDFjmPa46VkmhT17h",
  "key30": "4AcSAJ98VL1TWGmtw2A3yx9mjK2vW7zVjR3BPzzqoftbo9wVHPTcdYc5BMyxRZnMTzNQgPfvnEcCkbcSRiuhUtGt"
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
