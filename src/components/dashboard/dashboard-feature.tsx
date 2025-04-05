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
    "61nDMJNi1YqkR2cC5XzoNeajib5TpBPxoXhRozsDhcSq256HSTL9K75RtxKA9dJ3WQQuhFwvnTD6TxPypLiRLgGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dv28iVEj5ZCS9hsQACWbvgXNWAru3DS3GesztvNrFpfbvnKiyV7xSHaxfnHhTtcnBUJKuXhQkETPpj3vkf2jAGQ",
  "key1": "4Uf9iTCeCWyGrTRCoU3qiSQLgiFvNeaeM4A4EfJqt9uSMefgwHyaEyB3ao6tKmHojUuGNL8hW8Y3oyqsWiM777TU",
  "key2": "31N5FXb1tbdiykXvTSv9a8eserGmKiuQcYPzbrURYKrigC6GkhMFfSXXb5Fad2g7W5Qqd1zRKbrFMtNhvtpLH4xt",
  "key3": "2Rod8WewM9MF4shV14xGpD7qcmD3Zp61oaVvjTbBVqAECk52y7BJf3iDU2xZ48CgqyNAJnWZNWGu3LWxYF6HmFhx",
  "key4": "5EruTSxyAXTbsFJScjWmAjkgogzBWK2v9weEyS9u7MpH6bBoABggVokQVZjaFYiYz4GZbecigmD9We4GoZxxo64c",
  "key5": "4tZFhT3SvYuqmU3F4FdbkNuHnWaSVZ9Z1KbGp4Jj9go8dJggwTnCeWpeLzKqG9E5H8aPFSp5hTga9Bts9rvVvKsz",
  "key6": "2jFiDvWxMNNj2fn6eMzPjGX57R3aL9dhzEToUYLx7TSE5q8EEj7Pszv1AXnP7srR53bAo8aDbnE69nDYxMveiYap",
  "key7": "4S2CyZmDAzcaKBBjqH8oLecuj4GGjvoDmL98GxyA21KA7sUCmTy3DMjmZ7jYMynbR5mc4JZ7XwfgGz2QWnyH7hkL",
  "key8": "3ZQmv2GsPLLUdhN3Md6aoKwttfguxT82M92RQeTYcbcPbDFeaxb8LMMg3YFbVC6XS9r6v9dTvAQeaaZcGkzmkQvU",
  "key9": "3fw8EMhso8s4oXugXhcSn1JdRjQRjkhgNC12ssbnD4LwYYE5x1cyDxR8b2YR3amZ1USPVTD7mxJN7JcTSJr53vUK",
  "key10": "4faMDiVFBczv67yrRvCDpeafmAM2iLWnmiXpxGY6zSdoy2B8ZjY45SkGCUtDwGJX4Kupy7dpQDy4VQWweJxVMqku",
  "key11": "5bJhw3YjPjNwaTcBQBvoTcEV37LAR6x292KLqeEk54usYNnY8PdMimmT2UBP52qvQ2TfyvJRvUNSfzKBAnid5iSM",
  "key12": "5ktfeV26Mh31j4U94x24XXAkSNHdzpGWnwpcfE7HQgbh2aSn8xT4JuYBCtH4d7QihdZd4CJifitrs347V7mC28bu",
  "key13": "6rjfE2MPSsSrZiQhaxbtyrMu9s1kc8EhNQMb1aZrwvk7dqrfXg1c1J3SfESN3gaouagyASagtgqprLvg2afiy45",
  "key14": "2AQmAc69hvMgWqUsAbixC99WSxMF1TN5dbeb3x6eDfGVfDdQBrMEKPFB6bMZkkFXQ9Pk8iNDociNBuSbNq1aUMEJ",
  "key15": "3AyDNofHd4ZLpPZ9SF2NMVicWyb8jYHhfUrsoeqbPb4sWawDb6rG67gbpjKkpUi2gwYTgEsUrSbJwqQ2wdjSfm4s",
  "key16": "4ZgKq19Q3w6ZbAKkKUw7kDWFo5pbKEVjF1RHnz8XUay5QTCg7ujSt2ygJUSUV51GkKd7AJYZ19LQAC3eD8VHeMu9",
  "key17": "25AZDWM4kYshXjYLga5c42RsMJ9EQdPcLRdqs3dYByGZhohah9xMJ1LECmNv54HjDcFtQvKeanTpufFmWmGVpnwc",
  "key18": "3zrCtJLpbQfPGFVMRme8rCgwU8pGvqxspGey23ahQibYhzWak6iy2CPKRo68LG5oM1g9hPNcgKLnNMEQmdeiMBJL",
  "key19": "3QsmYQTNTV59yb9jpc3noq79JnKBY7zAndZ4Vngq2YwYjUBz6vUUTEGGy5CRnyWPw975erLC3riyHiELteYHVycz",
  "key20": "veUtJHUW3qgX5oZuiPKc3sx6MkZkKyMUUimduBHpfynj3ZSsjUso6cX7fZ87nFUiXTREUftWUEzW5V4sJKL8S1Q",
  "key21": "nnhmspDfZpm2y8KyCvjhtBvXMbQPrcJNgEXZmaec1AXV9Br9j8zv9AZa4cRq5WdxevzX7SvA6xrJ2qQs7gDgD6r",
  "key22": "4CZPixTxq2Y12rv5Ac9QSoFQQ9oF9uFcAc57mEioK6Ad6YUz4QPrz3Qoq89DtMM761xtBUemJks68nbrNV4ejioi",
  "key23": "51bVX8fzY9QDZhP8uQwHNVDwRF1cmexPbeXzbY8YLnY1PoXhxpmW4UrnQpvsn4hUdWaXkQjA1GYXexkXApGdXeVD",
  "key24": "61aukhVTAC1LLMQy8bjUMrp9dtVqpeuerb5h9cUA2jwycYGoUE5ZET7Ag4kTS6CqxVvWFiGY5NKkx8GwDsCQ8Pz6",
  "key25": "3RpB1zfLBpyx7eBjai8fn3NDZpTbzEUEhz97zxAq3fBrbp5o8VGu6q4v86UYCW5LZDdCaMx1rSBrngBrxzmECypK"
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
