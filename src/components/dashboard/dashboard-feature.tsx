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
    "25ArCBbMxswQnyt2Cnj8GYwj4zyBokYXCv5R4bzu5Mc48Mi6y9A1q3SVT12PL3HxtcgRPrkLWX59uPzefmNTgB6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQunn2zKuuSY2J3qYr7GJFBRHDihbcpVLnZZtUpHPjLumuJNq7c4PwmqaByDNXRXv8qps5V7DT3SwyVMe2ov1ao",
  "key1": "3JWEivSGCpdQxDR2JKcvSBV3agNLiCDej7iGNSbcYKmYgxYmYVJB1yQo84JiaVNt6RLr1PTctSzTc8FUwYVutu9h",
  "key2": "3wfVjfcsxGHSWM8BgNxTT6iKb3MC3B5UuNG43ZKSWktSNfQtxRfJFJNSYPMW7VpFaMHajfSQaiamVbJTUVVfu1R2",
  "key3": "oHqmuJQyfcsx6Lhx2VEqViaQjGy63PVaq5KY57UUt1hsmbupUJyprLqRs7zPsb78L3QYY3fPoYnfB3tdPEGYR4d",
  "key4": "5sG7QD5ZHWH97QoZz8pejE3qLUhrvWkM4SVYh9oj9RAnbnWFijcSBJYZ3YYKyutfydqno7gEd1UnSFb49EiTnW4T",
  "key5": "2JmkMSiKqU9XMyiZpYKPYV9EwcWxrxFAghKHHq8wjxVobYvLEqi1xGfBCsE9YqJAZtENyBaQbuvnro9Fk8WeHXRA",
  "key6": "2jMmbUKrB2pPAnH15yuN1BdbjkEfoeyCjJrwDeWLie4rHKDmAXox4QriUk8Wnbeq91n65HVGrgpdJeKfBhAqQKZF",
  "key7": "5qUD6DRZJjkcBzVdtoQ4JmSsDUnrrEFyWpPvBv7yp9bueJ75cNiFPVMnx9yY7HvdYYdX8sb3WKwnpc35DVTL6jvz",
  "key8": "2ATQGzAshohdj6htTCxgD8wPofDBpjfWxkfnuwBbgnQu8Z8oH5woEv81omzCFdx5T4hbJHMXwSvBTXUsNhcr7Gda",
  "key9": "oeLokGp8fGPdrCUSgj4iZnQfwoDq2JsyhWCdAdqQ1y75d7i9GAoDTzp7SP3BLwqH4z47g7zZHYG814MBeFz3Fzg",
  "key10": "5JEskvnekbQg49A9NWMX6Jj6C7chE16diR5pCyHyJ3cbRdm3eaLH6Ugkobi3cuaxJF95bCFM5gYPHbcXARRd3VaW",
  "key11": "5iG6g8RetLM4vafi7a4R5jevNNnJy9s231YpYjm272xd3PFcW2WWQwd2ujMXbMWVpLnJEHCeNQa5DiQqB2HYPrT4",
  "key12": "2dqKuVEA3yWp59SBwoiwEXrLskun9TUTKgBxQrzinCgrB6eNvLnyQoSp2eNVrDMggRFnXGKsjcufaA1Mnu7q7udT",
  "key13": "KE6vPHXjUvMatRwRkJ4bVSpEV38gtUr1QgoR4ixP7ysif1ukMzfcDKPLFEkQu2dYsuFojWDJspMpU728VxaVmuZ",
  "key14": "27njXgo3AdmyoFq4zqcsRVxXew9MC4juC9qER3GS6J9c6A7knY8ZX3w4RNK7mRZREba3FVmUbV9GnkiUs6P7G6VX",
  "key15": "4gykM9FgpNeZ32HS91NGsMQwDbDzDdAy58ncFw4mb59VxYHSg1o3MhgNzosEW6dYLBKySFqWQyCyCnuHSZTZLerh",
  "key16": "5edNYZcsNgz4HESFtTvsHcNFRbMBCLFHJxr2VooT7iWwrGSLJX6bdNmM5XwTBMaFWKJgt9deHDkmv5B9JmbWHDt7",
  "key17": "3BTtRMb4JuN4Ze3xJZZjjXw9EwtUFa9KPDh8Ex8SMoMuNDu4vcxK4AXsqTCgspDLf1iNJQFdRJEr3GfsPy9WYMVp",
  "key18": "3kdhdjq4TicFucr6yDUeedZVeWGqarjzNsjWW51P1M6QvgFwMqNr1bR1sYsU4KoZGeX3s7v9MHxSVWMnqwEAYvWJ",
  "key19": "4y6qD3oTyMW6gEBgySPTsUTQZ6CD8xvfoZgchX7QT3zX9QaByHP6PyJtGyC5p9KdJ1d4TsrtHWzr9Kgd1zvbrCBG",
  "key20": "PuVDV8cBk5hV4kB9GYekujHLhchds1byLAXvCBf1R6niWV6W1bhUeTBjZehvMfJD6zhXTfbi2cfguPnkkbdcq7E",
  "key21": "2DWedP9tJADwcHc41u84ZrSiLrVUGvrCEH1NYkvBY9HAucy53UhFdtM5opHGFxvDX929sVZepNSn4jro8BefZL4k",
  "key22": "3D4mcau3rxd9R5BvhHYYeXwGzpBCoNFk3PXrD5tmXUrvc5vhcG4dVrKoKv2SJyLnkzUVyGFG8iqh44UWEX9wwKrY",
  "key23": "3WWvgAqUPUaF4UqmABtAFyiX7zJ84HTBJpq16sj4tWK9kCswTqVrcmVKt2QcKV7VAWsJiVNy7yZy91zb8unkfcKG",
  "key24": "3Qg89Z8Dfk2chzm7Q3qqUpCDaNvaV4YUgBch3Hsy6FjfDbnrRbBdmXbuGNehHa7fYF3YyWBSKD2qrNcTMF4rANew",
  "key25": "2f7Ru51x4AbRHuAVJYAiA9Zeg4Uuw4sqZmLNjGpxnWwQsFscEzR24ugrLCsSvXZ3iFXQ2r4KFWCDJsYRcfVySpZW",
  "key26": "wfCQumtQkhZ77WCsn7pQdpXawv7jzXeso4VwMGTMx9Saoii2K2rpBf5DY9cdT4PLCRdJ3LHVFfSy2oyiy7WGPe2",
  "key27": "3SqgGM4zRcbpCtsHjdbnmz4Di9GihH2Qwh6qwH6GyV3o7zb1kvQK5n8JCkqgorAxMGKHu2P6Q3corL9c5VsXAVTL",
  "key28": "KRfmaARCmkuaigyAcPQmQLsGwyYPKMdzPrWWKHUypvh76MXGsq5nsC1T1ZZHLZExERXUvH21tKvvj3ZvgfQPKQA",
  "key29": "124CGWBANupN8VqXQeQp4LvyrgtCxgbAnFKY7qkv4MUwm76sz81LMdyWLKBjx55XvSmhp6gYyCu7eMvz12WbW2aL",
  "key30": "JFEVnc6gQhCjyc5741qMRUXM1bMfBi1zeTy1yPpvJwczCqLx5utVPjqU1dBBKB7se838Zsp1j88xCSV2tV5p7e5"
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
