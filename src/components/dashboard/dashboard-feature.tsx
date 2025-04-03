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
    "4n7kNyQ73355NWHhiUFX1w8TXtsb47iNs5USBqdAkzN2VnH65RcQ9wW4LwrsePwkDJe1RNzZzwhrVcmifUCcaGSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UdCkVn6MddTpXCGxHPJL85pbwQQEcFLB9Dqan26P61VEhASuzsB8eZFqsZkKAG9MfcB9kx84bLXFk6P37Z1AyM5",
  "key1": "5S9VsjVtBvPcuHaCEzq2bqroctsGGLwD8dqTojrB1sn2pW3NYsYHzFrXA1LpwZ2XgYab4AHDmbThiSxhanUPvc6N",
  "key2": "hV7AqaZcxtrgW9ETXGFZxitjZMpT2aXhrSQ66wER4p3m5vMbByWph1ARCQUFfsS8cqG4FjLR45Xgfhjm4CTdjPQ",
  "key3": "5ZHExNEDbbmcRKUFddvWQGDpBCqn3AE2hqQrT712ekY16BjncWAZ5kQcy2JS3iPPPVYJ3dzgzu4sacwCKZh6E3zo",
  "key4": "5tHCwU3KyQgj5yrtMLhEysoq3XZyMa2BV8RVpEqb1h2hc6vR4jrLsNytA85KT2P13ZMqNV7Kj9DzqgcDnR6dkUh4",
  "key5": "26DBR7rhgygakYxehSGu8U5qCJMxPXUf8ngy2KXtPeti93Qr7b74dVGTATb2S1TNYyynBtMhKNJfTFf7AuqfqNQK",
  "key6": "2KUomyQH9MMnj6YnXsSjnnzV2PVBm7szaZWNdkyPdmmp6nhBzWEC97FHeSTUhcT5jngyvqXZbCnWcAv548zYkwoY",
  "key7": "4JdM6HRJn5kMRaGwgj8pHpwK6agACWUMAZ2Vj5zthDWxW2FCWNtegjTkJxvd5mspqQ7tQjZrxv6394LKQ2XSS3kZ",
  "key8": "5hewN5BjGYJbFw8ozqp7UzwU6bitgMMoGdSRdy2R4j73j47CbUjcxUqCCfrP7WfL48wE97yfvXUXU4nbvTCWemo",
  "key9": "32Loewx3h928JAcQc1LMfanZo4KUoDx2PqGMYo7Y8UdTfk8bpbGPjdU5UwpoQRYMva6KXWYdXR73HAxXYLheG2jh",
  "key10": "46oNjjS5WEGogUdQAXoAoqCmaoTBC1vwrHxR77WwcwEEWeakuFPxztcTfUBfpDKTgBtXHivz17MJ9CwtHtp9WsuZ",
  "key11": "5yCExgrP58DePcg2r9XyvTfR9yxcFJSfk3Rtv7th7Qpa5D53Xom1zPE3N19ZDAmZi3ZauRhtHm54n2xGEMctp7M4",
  "key12": "4JpqKeuvi5qujAghRR1d11k8kNnygz3gKEHMszzREyCciHLxGuWEXzgpFAcZRUsucneL2tVnHnv3DobfQSykz5C2",
  "key13": "MBus98BpoVjqDC2qeZPSahDYX8xJH2GjpVNsvknSJd4WassxUkHsj9kax4bqsCVuZNdnNQYBXLg3i9ByrL7sP14",
  "key14": "61qoGhrpzpTLcZgf3bPeK1EYcV6jSGXF7Y3B74dz4wMLz3L3XYj2jdDp1BLqNB8ubKHK8cNU9JWDPzzJpRgCo8CY",
  "key15": "HkXQCeiui4KCCsyTBbPmwFPnVSZe2m2nNasf4XmirLj93PF9KM63xdfreFn6Vq8PZdbEqZNeUtCfnWCZ8fHvWvt",
  "key16": "3Fnci6FQQM5YaxzeJgLW7eLPDu7rgSRFpcY13GgKEJWfdyyxGNyRJLyEn4rMDSWUTMcU969P3WuTvdZSydgLsGyr",
  "key17": "4qRPCT5jysnX25j84ARM6dyyCuKDCi4eEvvm3pMH7pEMUHSBtGrajAGRypqi9yYCjM32wysjoJa4bGDz3F4TVkss",
  "key18": "2LknAQH7gUkvZ8DxynUre8B3ZfjmPmK4wR5uxrUHNnGj7CbLtdY6FAkPmpm6x9gHC69QBY9Y9qGxkd8TsQ9Sqfr5",
  "key19": "38iLTMTn9zoLeagZALoYoy5bQgKCDATo2XUgJw35DpC7iZ2YuEtcx5DY5G7DqKWUkWquJJK5qhmyHa3xyRHNWoqK",
  "key20": "2jUTr99is5EZ2mi9ZqP3YXBAyMMspNUHnuA9tfEDeJQUFzuCvFVwFWZUiv5JRU7UGsx8rbs4hKk1omHgccBfciEf",
  "key21": "2YfUH3fLqSu2AE6XTWCihuWe1S62xFBbcgWG42DGmoZexCioLafuXsrHibe5heDgxuvrFotGaUsjndwMws8AmVmn",
  "key22": "3KdMvDzeFtJoiixu81KDeZ1Gqauc1AEoUH4idR7uZm17Qcp45Uv8CEA7epV3t9Ct9agbZZcUKEknTCZY4KVJwpYf",
  "key23": "4FFNaxcMx5vRdsTd18Jt5e6QxivrBwjfyVPmqDtFPAgytCrqtHGVs4gXCGZ2tmBmYGDTaaCkg7DBBSxrijBNxGes",
  "key24": "33dDj55y2Vc4KtUyVkrqbvHCn5mvY3JNKSMMoyotH6dbC6kgaVP9k7X7CBu1SLY9k15jSjMVMH6yL2SrEKhK4X9i",
  "key25": "5rtYtRsi99YcVkvkJxh9AT7bvHPtr89RnsXk1NNAYJkgT4nHaaX31HD7mQSX7GV7akwGm5nACoM5u2dpdMJmJ3tB",
  "key26": "2LBWnWQ3DQ9Z6QUrScshNYConLfQq45WiXMvmBG61fzvV6Lwy9jZrYSEXtMUPsGBmVXe5TqLhCJJ6YCQWZUic839",
  "key27": "4xyqDzsXqvm2sEBKw6Fakb1uij1CvbbkZaSGV3ft8dzzSrRFprYG1EaNiXV1xF5NhU3BzLbuUsx1J17SSdMnVoEL",
  "key28": "334B6Y63fkLm4tnhc82u8EnGsBjtPHxUPjFjqUDDrkk1WUEjtnKvPxRMDB9y2HDKZjj2fe9mLQhVJ6WKDhYMLYji",
  "key29": "3YofUzecVd4FRUQs1Wa6iG8jM2V6uH79oZV5D1bbabAeHCtYi3wNDZ3qDpW64MmdLEZzbgzhmmKvpqHQaB77LUgD",
  "key30": "3HJ8J4eEb1EqpfVDbPvVEkRWdT6tsrU1oE3UR92qMyRRtApGfTam6ck6enL5UtfrdEA7tQfRCRvFPyAv5MBdMPvF",
  "key31": "tSeD3wDd5nBENLQj6UWFe92y9YQaXXWFgmfeAhdzx3gUPKPvv3Z4ThMKp6TvquhXwkdRkHv7xwjPFveAnQZuYRp"
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
