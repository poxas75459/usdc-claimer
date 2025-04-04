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
    "2GV1H9t7KWPVbkf7SFpgetKYSTSfVVkLEvXZDnVYEnsnXt9BSdVHNdenmA73JMz5A6MdyGwcPHck2BKAj4aLUSXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21yLYwqBRVMsH9sDqkGostEuZeXMKcy4ZTRNL5sGRxfT2HvQqEVZmvvgxK17LVTUGvK7hwn7Ce7oRBtTP5UWNGdU",
  "key1": "2Bg69wWtgsBvonC4kAXJn6oyHs3rznrQEJBtdH7V1ePn2Z6f3NU6DPDuXwo3yMEKi46PkdR2STtyaiUFeunwvEXv",
  "key2": "4f6BpJmcqrSFTjjTNMHvXKrVHqfy7DNG4QbADMhNrs1pjuei3z1iwmXSW4QUQc269ixxyi7pUWgiyR5gdCv7UGjw",
  "key3": "FBvfy5oqB8mzoAzzCg5xL7S2QDqWDRUMAmYg6zowFnz4G9wiDPa4DC5CKAyMXPVSeqiqMK223Khc8P46y1c8mCj",
  "key4": "PirHRXnUQnFnbgTJ23rFekmfuBB1467gyeLoqP2aNtBY6yif8dowNP3A6jfdAJPAwxrGvWT4vLRKRenJ97t5vYg",
  "key5": "5AWqmo4PESKCLMjMsnHMssfQNw5WTqBGstmdUraZn8HwiwbCTfGvJVKQ8Zn1FqxmifedRZVA72kXpuaeA66mhLDY",
  "key6": "2CDy2ZgXUzX2Jj56MaczkK7i7RH8WKnDMRrPkok3LgGy2Wwq6ZXd2YcRK1DRtMJf8Hm9uNMZLNgvbh2mVThdMCYL",
  "key7": "3C1tRTWbye76u2rj9p3NRLLDXbp7kJLqKuxTxDZkWBcEoPs6ZbnXBKUoFZuhyYwX5ojqxGuwomAQ9Ly5xEoAmtcQ",
  "key8": "5ihAfCd5QJDFDS3UA4wo4xXUDq2eSdstxcMLtRbKtbJuDToEhALvWsYtkyU2iRcT6usnzsr6PrPmpf3mX8zDUMif",
  "key9": "4aquRbFrMJNNzDBknyJr5mRArjxKB4RhfyePsh58nq2YYpKV2TqRNPVMpfupmceiBALDPx2TVmNb2WNddgNkybpi",
  "key10": "252PbQkNBUnuFkgQKt1hLLbNYBJckH6fWbBmvZ4hzBCxraqfoYbzFRGaxp5TPhiEBxz9pPX96mayaMZoB5wqZhN9",
  "key11": "6773AkpVcUijWLJfyjdcNe6C5X2i1ysEStV5jjYRNajdjmVebvs11as81qt639B2WbNFaewKFx9xsHrUhyzGKLwt",
  "key12": "23iA5FxLrLq7VS8xMsHRfv1hBh9n8bAFumbGWak3MNV4NcPBmRBEpqZapDr6pCse18RY4NN9SFTfrQpgVsyCYZzw",
  "key13": "zm2sYaCXR5U8BfTskRJJ1YwtoNnQhRssibbpZsGVcS6G474kLbZ6fB2v5M6k89x3m8am9oq8hbRQxqpxnnCguh5",
  "key14": "4djG1DwAbt3xhTQmduuymfhLUdQiLBQUuuNdr9VBzeoNnUKLgPRbhpghQtFwnDE1Vr5W1nUc8igmWTC2g8wugYV9",
  "key15": "3cckyjaCKV74HTpSWH9W5NYhQ3xTH9HbGaW5paQoLbPnDqWEJUheeY4M955nnrTFL2uQnoZLBvnhGZZcNZJ96b23",
  "key16": "2QoqL5YVsaJGqnjwTCD41EToUM4K14o7BaLbzxgbF4ug1u9B7cMQ8QVEd2FgKyuLvPViQPuqAYFd8AtR3jQLHR3q",
  "key17": "3EF5DMzCv6oSFAWawEt7WK2Shoy6DKNnh9tKTkvmxmxUNQikwoXkXXrUR52XxZbBAEFRrd3T73ZSweRceHB4xuoa",
  "key18": "5RtELZv1uQQPxBTLCjkrDf1jPEfL8xVVm4YdnZrEGiqpwUX2CN2N5pHRoiRzUFo6ZsJVbVjtWr9GuweywhQ1XcaY",
  "key19": "4XyFw2d1Mv2pRewfMK3Ybipw7ZeCrN3epWS4ipB4cFnohd47VqzDQHfRqfi7eP7zwoW8Z8SKU71AMvDmQY5eiMe4",
  "key20": "2KYhLvNho8M4Rjrkktfs1PSJX77ZU8EvgnV1qJTHBbkiRMTn6ByvnL4W9pmFabX2negCSjJNTet7rJeSekdPXHTF",
  "key21": "5pyCouPeWypsgJNWm8THceKDFWvmAos3ksL9W3veVGSd9kV5GGiMMDSNfGmty8FFzZZJBfeKjzU9UxKktDftu6iV",
  "key22": "4EF7wpXPu2XnxogWNYic67KFRXcXH9oahhP2Kkz1g7nPFmmMRhgHiMcQBQSRSpaFkVGFw7H74HkaHfks5yYiLeUF",
  "key23": "3qETDpfY97NhTvUENf9m1175vpT2JXQmdGWmTSyqAu3zdb45wDjBMAdsj1Y6XZyohBHEGshfhZpy9nq39ZHTAEB2",
  "key24": "5V7qTsS7Nx7zfX8J4y5a9oSbLnVma9PnUgxUcWqvcBo1xwt8hVpTbKmG5eJqgfoPEqC4NsDyF2724PFCg7z5D7hC",
  "key25": "2ZT2kGm8M7ne3T2yeo26RiFVPYqdEpS9qzD3n63rZLNxK3YiRv6zBsGiJjNVEF2JaWFtSGWL5aTj4m5P4NLU83v3",
  "key26": "2WpmMUZQTVB4DTVxZKybUVNkfjcoWNCqpvb3tKnp4R1xpn7wPf2fAjgm7H6SPJKNhJaKRAoP1RXaCm1VsePn7MDq",
  "key27": "TtQnHiZX57fuHakWjn3Evj25YiUH7ZGd2CWqHnJdQx8VBQiBsHRqgPaBQDbdLqkWx6PYEn4AKBfu7HqXvQtCTkD"
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
