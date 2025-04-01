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
    "3JH6hgTkp5fcg5XF2pwg3pSXSDxh2i2frHDFiX1NvAgu5RnGd1zyJMmkgdNEeQgHTUzxE3kQrjrEJJAqgMj57ZvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cXDb5TyQSNDQdgsgWyyxuobn9omU7fu7WLvBtryg7aPwDHtUSF52qSHW9L4UPPnb7xKk7RAR8xHSAToSLv1D2eV",
  "key1": "2zwhNESvG59e2LbVseivzxZQ67x8U1fZmCoUT4rVEL8uaYDJEy7tVk6KuoRBmQ19Ytnnj18vA3PJzEdDH9HjKs3s",
  "key2": "Wyy3iQgQyJKy88Abx4PSPpjZTfz1MpTXy4aBnFn4KxZaeaswNhPLzpeEebxev2Cf1DH81p4nXUbqrQeNoqXb7Ue",
  "key3": "CK7Wo2A56QdzbFJ1PC7292t8Y1YVi9QVHZxvrRBkjRqbjgwAuYG2RTfP1RJnWPuZwFNkXyDVh96VYEMf8Ja9s5X",
  "key4": "36XZWRt87WKrKb3gNAE2hmuNL6yHa184Uzd3WL2y26vuhfKnFLqCUcK95PmK3EfUqHQfUt8tjBB6vX8K6tX6dpNw",
  "key5": "3KGrH2KyLsHNVJE1tW32F8LUgH629yoSo8B1gtajVbnQUCwTzmnu84HbWxrLrehEQh73pfSb3smuw7uzchnd4Kho",
  "key6": "3TgmjBfg4HuNUb9pax3yH38FiWvGJupaEea3wMWQeCE1wjXb3LvF1nPfdQGACDPFuPTGV84QpxERYgehA7GWSMLH",
  "key7": "NWeFRMzRxwLHMeZajLdQaXY25hyYjYMXmtyXpwuRDaaJWdEdAmvf4QNZL87CkhiJw1g3C3567esH51Ez5Uc7RKa",
  "key8": "2QpCbr18vK2CNrdQeWhiD4T2UqycndAPjnZq1qyfTzQDzy5gJ21kCx5a1mQD73yxSBmPhVESkmpy5s9CabpUDuDF",
  "key9": "5d597dgCJFvVE3L7WhD67PXZFnvUZwA9fnwF9TXAhF9U7iQXky7Savw3RRshu5jNVC3dfAEUMm9GdAxzwsD6R5N6",
  "key10": "5DXJwm5WtFLctKUc3C8c7AZ7iHMmP7E6ZANawKZ8jnM2G2nXJQYVgqMJKkxBCWMkeUx9dw1r8g2eLTJrTgvcKorz",
  "key11": "5F2KyT7X4Z7kkMfGKtshxmSH7oKjPrnpcpHg1jiXyLpwYhdXQdsn5YqzuQZSH8e7E15ZFnKtc16tevcZRzrwhmH",
  "key12": "614n7NvReTZEs9XSEy9EWiGEy5Eo56YZeJhJUWjVy7iGNCxJeByr43HpbbzPuTBwqQZDixMNhz3qwRwTmPukfMpV",
  "key13": "47easYhdiCrZLdneSxWXDgqizDESYg5PFp8tiY97YC7Y6SEupDJo37cNKASaxvBcnk7zAMvbsZnHkXTR4bRptLQP",
  "key14": "3MR4TTqprNbd1MDLbysCVCyKNHz4czydPWzU77372x7pAyiqLCv5nsYm7ffQuU59R93jFG7ZbekVcoi1xinrcVM3",
  "key15": "3ZUSYew6TKtBpvXu7Bynpme9zMaoQAsGbXfAPk9foiBRQdeYCTCJKFeoz1WLagKnA4JpJcZckzpNdZWFVCRgu6Nu",
  "key16": "2J3Po1SpRmf1TwJxYnrrqGqkqEtAnUFezJsDQZvDs4VF524Cx7SRomihaZFCxYB96UPD4x5gWxkL34VUt2zPdYAf",
  "key17": "5S8f8miN8HkwMg5SvNdK1AxQMEtQw61znhuG23W3x2X6xkiydnbJ11K6WHhHsVeQ5EWNb4zjGfWtMiYJb9T65Y2J",
  "key18": "2WxrQCDvCc7zrjQtBAPmn3Cg4F8Zrwz3ch8PeVSy2gHsZiaax5KkDLm8XYiuJFA2uX2wS1Rg4DwL3CGADq3kTaXs",
  "key19": "3XNtq4vEDif52pvbXyRMYh2N3gsgfoRGpCeskeGAJrPtZ8F9ANsvUJTMixsyjLjf98LCrdHmFtqsHZGuUp53jmzQ",
  "key20": "5ao6VEgV3kLWYGm2hh4dsSZBiM1TeRxBCXLbJ6mBkUJdccYJ7YPVE737EiZysohpmDA8LQ1LTpuT3abgtvqJskSR",
  "key21": "2qHnYTR8CkQPE8E6dVwxBfBh1u9bJiRSDtVjbry7PwqYDVYsi62N4yEEUnnmStrzYLyWzTtbzourwSGzYWS3H7as",
  "key22": "5z8wYwr7myHpVJnMdM4r39yB76pYNsXZcMQ4vnMS2foUZWZnCenTFFugkMXgkxbHbhQxf1C7gJcEEJWKQsaFUZdB",
  "key23": "2J7B42NkLTprt2eKwiSau8s4UCwQoQkSJD9hxuoeHWXnk3NG8y71dTtazyLZDXFTDBtSLXfitzUst5Q7A1TZcv2G",
  "key24": "4SzgvmQVVe4MnvVsnUv1VVYiVwP5EaAGrcofYhFLCoT5jmjW1oiP4jpz37U23TmLaLbjWNXX9zfGQNnXvLXsYcXf",
  "key25": "3JH3K9Watvv4KPPP3bZfaCi4MmqAimKi4pjeYVCJ6WyYx1ZDjmPF3M7qpkytde4WS89UUtWCapVYwyJbD1deGbs3",
  "key26": "3uQN4i6A3ZLLMopGj1RMFtVSVFbZUQr2AH2mVUxMjP18Lx5VsPW9ZX2eBFRPgbg9zuzD9HyRNPcWUGFFRVRoQtev",
  "key27": "3ujw62ig2DqyCyqD99eqg1MEdrpVcSdp7fFduUqcW7A58N9usb8EmHdbb1ZcVwgVzj8HDYnNdpfLdoFjZS9WMdt2",
  "key28": "3WEkoQvNS4cx8NtSJZmer3t8TZqRWdJHQMRXvP1HAtWp32VyLEXV4rTT8Mu8FN2wNo2GhaxsBPt55wvWthAbjEkG",
  "key29": "2mMUfpvwALf213phW5aochXmXW3swAZehFztUDQD2HTfQBHC9UK7j3L7VxwyVYcDKhamufMhvpwp65aocPspeBLk",
  "key30": "62EvvJumrnnkx8WwjGDMEZHq5FwzCVmF762Z1bRzTtNkjyHgHX4dke1fMT4rzG1yPoPUdhqbGaaPocBpVpf2Jq4Z",
  "key31": "4G9XVpdf8qP47evRWjSXezHSZaREdebzMTFqHMXcuRpZ9n3CyJgkgaL8qDQ8F7f4H8bccvJkWivoiVUGE47kVeLA",
  "key32": "4hE37KHSJZN7AGDk7xMQApmXWyxKm2mZtormDmk3RneVKjgTAxu1CNtJ15hQVPGmDCrxYrTvLeRtEsXLYpphjK1Z",
  "key33": "3Lb7i1ec7YFSSqts36eUWo6ap2Yc4JcmWBLPa7f7nmG31XvGTZwseKWsQ5jW5Pqr1J1woUkAwwp3pCq3BES261ZM",
  "key34": "45mLkpRaJmvf5MkGs54TS759bcVKXm18k6YqBPiewu5eVpucxw7QfLG8NYxVZfQkBZWRNoAffdMiGpbmVKt5RJyR",
  "key35": "2gD7zPegtMJh4s4S8AqhxiWQ5ekHBSh6eEP6EHq9DhLQAHV4GUuKMpSoLXco41UqPMUAuBQhFHZYzp8P9csrPKcj",
  "key36": "2aLgLUH7NvEDcWiw8ANZKocoFQ1aFWaFsqvyJ4daGGYp3hu7M693vwBGyGWjKFrdCyhQJgo6tKrRiN7DxKrBxetm",
  "key37": "38QHvHUXuSC9FA3FztAZA2FK3ta87jXMLLeLXwipLdf9usJKnRHqmf4fUdDh67YQBmdSudpmte3S8LwDkZPH8oa5"
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
