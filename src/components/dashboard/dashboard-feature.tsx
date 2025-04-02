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
    "2Bn911NbY8vbHbJWeJzyoFEUigHxHXyLaLAAm3ysVGPuh7jFFsZ2nTEqQdeBNmCbuZszbKGTdqNniA3pRo7rFeHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wsK7z589qSkgADqixQHPowqGeTjFDkn65SS1uRcMV3yQBfP6BFFZQb5dQ41DyWg4KhEeZwogcrUm7RyiPNQTVvd",
  "key1": "4opEqecdK23rtqkDP2WJ8SQUZ7swD59AaVyMbJ9zTmPVy7Ur81xULgyUKr7ygocPrxYmYwdM1tRpJjFWEnRttVGT",
  "key2": "2rgHMGPY9ujT4J76AsutRMPe9DccZJF49u9hGVKskHBmE28qEoGrJokwP7mYe9Du15kPG6upFnM1FPvuW4XavFMC",
  "key3": "2AUjEBeYtkgEkdyxCqQ1RHsMsy5693B3iiz31Lkdyg1C9c7gsj2ZJSHandsVmrowuA7sPzEWRVuXyotB8DP3bc5C",
  "key4": "4VULM2VX7zfLGacmWbXNfZACCdB3J1zTjbhubc3ywPH82jLNALXy7MXxyS6kLAP3nZ1E7W8y2jvBsR1b7qfSKBgT",
  "key5": "22utQFzmee81VJHyDTPMn87WXYCW84wfae2sfKfipD8fh7pQVLCRtb2vEhX6LidUQHDqyqiPyHti1cgUJ9hBPmo8",
  "key6": "63s2w43MKRFTcr2VyNvMznxMWGqF7pxRj9dGUN3or48P2Xk86LrWF1mehVgcCrQsKgigHhbgX1Bhi53dGEAywqpK",
  "key7": "61GrXB1zgXYYM3pg5fZWeCX6fttMo2AnheiZWZSyy3v8v9XNjwfBhg7TMdJPn5bNGKs5Uo3u8as735Go9zG2TaeE",
  "key8": "4UAyLCsw13edNkR3VpMZEXnsGRMJT7sfpfJ5xEZtPfT2CUZY7kq2zyVKHRgSqYfEtSSVqKpyL7tcNQDLJZezNSG3",
  "key9": "3AHsXCfrGpdmHJEigHcTEXHkdBN6toLEpNAY2d494XA7Gn32jRaopXxaBPgKJyQLPRxR6U9Jc4BAQcYL6zkyWNr4",
  "key10": "2ZYCpCCpsgtUdau7EcaBWu2X3E4Ncom7Qxh7vJtygKACxNNd9AAonxK6o89bhW36aer1R1Ucc3bgaqNZqwdgHFHy",
  "key11": "22r9UCa9ZkQ4W88ya1okoFbD1neNQ7yxmygeta2qMPwLP89GEArUUD2pKmCwFdGGoXJVKxPfVkbtGk8z5msEtYba",
  "key12": "4uGRHo4AhCm6yw1p3iyamiPTzGcWv3nw6XnPrJmBY8sZ3Kxi2Mub81NL1XzLVcYN9jWXLMEXduwBWS9zuRLHJJhT",
  "key13": "eP5SxjTYGpPuZ2MnjDQwA1SEmxWHkKMPbZVoNTnbqfqfDEXRfqQjHtM8b2JcdKbeLV34aMaiPnvg7Hpd5a1LiYZ",
  "key14": "5AQZF5r3QCNn51X9Qz488BuRzTxRytN7PZehtuuDEUT5hCek9sG5zegHpfjeNUQWFqoDAfiHHxSwL7XLuZYM67dN",
  "key15": "XBuxyCLMsraq5keQU4hEJUwkwynyGRVWjCYeBbnsKCGB7xu48p5e4fi7Y1CNqEmwqXayuY5qwbmxCWAmTNrWSTt",
  "key16": "sekzAbDzm1ByxuJ77vwL5BnpBkzvaVGJCmnQUyHosQ96gXV6jiQjXmAg5FSRFpcvhMjVf62D8Lmiq3T1wKJYDQA",
  "key17": "2R2FvMPzV2V8d8LKaGuadXhC68oa1zEjKk8yqqLNBizS3H6DgLr9YGX7TCxUoZRjg3bGt6rhcPPvgJLzyeWmDn7v",
  "key18": "5UdJo8o6Q1womWPSonZEkhnmTXd6MKhQR3JhY9NFziBidboFV2KGfn8cGVFZ9tAAW76wvwxRJ9fQ7yaDkwbGz32s",
  "key19": "yiosSGjrSGTBQpMKv2V7BkZi1KQEPLdYNVqTcXx8LDkYWH1cWWaipzTLdiicytCd5jAofgo3u4Z9VXjB5QASBGm",
  "key20": "ch7SkovWNpPFs3gf7TK9WiU1wsZxgy8qrDNePdeSSbcqdJf49xQJQD6qhjScZtLrVYA7G1Z4dEZuPt2ea2NYh3E",
  "key21": "5icuS9FWKmEpAWL6knzHsZ7hh5GrTqL8UrwmT1JT7sti6A3mCUrqeX4y3fiVyppdJurfSezYr8D2sobdVzXt6CBu",
  "key22": "5Lu7VXN2aznAz8C4YUHyCTTmKxvNNoQfq5dPwVMjvdfgQGWVv2oroFVWS6yZ1Vwh8HBbYLyjcJur1m9NuoJi2bBW",
  "key23": "25eogj8CeoMQm1HDGxMKkj3VHC1nKaFGTy9911nHv9SnDqHso6C4HNcv26e9QdztPnj4bMA6Dmn7Gsp73WEukV4C",
  "key24": "F4gj5yMUd67DmBUHjUmsodwxmBmhGYsaYMNnX2mHbPEQJe1G71fTp2mRgZ4fGt1enj9PYVdFtz7xMTr9Bp9cuu3",
  "key25": "3iH2X7KT3cZNhkmc63tb9faP2Xs6CZGHFPJGr4XDVDBGUiRvoGhaa1S2FeojShK8UgJs2FsHZTweg7PqbJPmQZ6p",
  "key26": "55J6Z95EobzmU1PTWUoLym3ZTGX6YQbuJx3fNPf8JBaiw7rLhDk8eh2td6QhKz96rdScNbkqrG5ESF5SGRSo5ywe",
  "key27": "5kf5csckjCJeWD98Y2hCXg4dqypbJLmWZ8fP9QE1kbdKY246qzsWSBK31esQ3jVWdrhcHWxtVwHixvKLGBZjvU23",
  "key28": "4LhGe8QfqTEtzvggxioSEbTXeyS9bMLYvtkn3Gr7E7nxAoUwmn27uh8ausQR8NfUMcoM5VJoLKhWAn1X28cbrJf",
  "key29": "3gqjPtfe8CjMk155zk6Spw29gCaaERmoXPhfuTQJjWVawBgUdEyR7FPvpF4v2v5pfo9YbHXAsBLH8K8xuD4nP5z3"
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
