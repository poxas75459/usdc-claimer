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
    "4xszgweYzuo9EBK74oifcgoY5SRdU3U9kRBM27Gzw6xvQJMyRD4tUq32m35A4prsuRhKyGyi91UNdgfmTJqf1Pvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pVEhDtNhcvATMcHLuvebZVrbTtprffmfy2iP5wvLwDwBWr5WxqZQiKDMMoQ44sdKNb7X1wcJXPyPRKpPZtw8f5K",
  "key1": "ALwW1cQn5GEghJAvZe6sKPc367Ffb4X8sSjPz2xxd8t2AC4RYdWKzn839xZfmv5GG6D1xJykherKcmDJYo4EKhp",
  "key2": "3rMWiwo48a4eYmG6BxEjuEWXCKKdqDqntGsHrKt42MVzeDRzhgYLrXYcfBRy15Lvxb5UeyremJQsNuPAjqgmAkE1",
  "key3": "49yTsrF9dcCkkyNuaJ4Pyyc8q93HGQY7DC1o5ArSaUJfZQih8QRzytkppqkYAHhbm27TGc2gxeNZBPVtVEpcDttL",
  "key4": "2RTuC7qrJip4P76fZsjvuef2HZi4QgEvyCMovzvcZrMvafYkKohTmVTNc7HStKp6K6kyc6AQxWbptHu6MEaS5v5e",
  "key5": "2N8t44wEbPZhiusmHmsLrxML2hr3jJVL45ifrSeqb4JKARqRhnCf5W8eVoYJ8ysBod5ZhWQvnYPJxUzEjZGDshUy",
  "key6": "4DJfP59tZJDsQv28nCwJNoSVg9JTXs6h9kQtYKRFRBVSjq3QE5yo99z64J4EVUL8f7ZhwccKFkctUNvVyr7YzAeX",
  "key7": "HL2w9NzHfcnDfGsFy9FVZpLyGsEgKtKzrX2qWn1Qc8BqS77QPyvffjWiX2pGDQsh1up6bf3saAG84rGsDVzRpnj",
  "key8": "XCKCDmdp3cQwNYYyvTRKzXswbM2g4X7xpAsdn8qzq94PSnjJiVB9o88LTEXBN9GvpjQMnADzKouFXprHM45pcHY",
  "key9": "3ed9idtvajzsNwWQ9as3oB2oJA97z3414wrnZQHfcRtbGi3md3z6JAfJNib1ZSjhAzpXJk9MP83DcQAEC6iwohhR",
  "key10": "66UEQRmtNcyhyTep8H7DZUvU7GLxmVxSas8j9HwPuvVKaQPGSdGgrmBCqXKYzRNSjoq2ohJFG9v1gkc1tTp4tVRA",
  "key11": "3PJYLjnmRvYy2dVrAzQtfstRaaUS6YDjWYQWiKeDD9os4N3vGCw2G7Z9Fm4G5vk3UvetUmMEj2s3DMQoAYLv8v3L",
  "key12": "5hG3ZeEvn3Czqd3Q3iwEvWoDypXnAmHW3sW9bHpLiZtBKkS4Gun7bqaxPPma1G36fuiWSE2VGMZsoS7rf2gBMKJQ",
  "key13": "pxxsjsiyht8QBkURqSGZsCrhcU484538mWnXB6cW4P3fy7yeXFGMfZrK3oTKENnRUUEXVAupn71ie5BCq4SJG1e",
  "key14": "ZU4P5VsEJbmghYSvDd6mX6fE3eLLnmgZV3DfoWSCjKAKEuUBt9oYDnXSZWMG4KFRdW2cJDWqHPjTdRBCkZxdgYQ",
  "key15": "5gXJ2SixDCqpfxMRbdMA43SL6JCTausUR1YZo5FSWC1tdk2ahRBkaFU7vx5bTuy65YMHvW81rBGHijpVQpPBH8BD",
  "key16": "5thdG2moMXJTkdvTGY3tnsp1ZNvjGL1saUKwxNabmJ8LQcwK2ZRvsDPGhhqKtCBJjgPGY5mtiNnmU12Cc4Jq2F9Q",
  "key17": "4PcBznzs27CJrKFzm4LVZdm22pEAskCYL4AjyXQhNuM2RTH1yoZoPUwnvMBCC4YMsZX1g1pNFvoYz8ruzctGJeGq",
  "key18": "4PLVDj7KMAdsq8ToCcTEDoobGzjdCwFnGPbgs8ryGrgbmDXVNYB5MU4wkdEKRNARjeGZk5qpdvpLmwadHKXLS2aw",
  "key19": "3dKQUWQiv7UN57H3t6SVtNf28NYGsV4s4AN8bzT1n3MbdFjH7hLLqYufp8QNGVC4g4VJ42hsXcnjRpG3NLxhEai4",
  "key20": "4LH2stpyWyV5BeCJvbYinAyaYVs8cb1uNyWxVaRKdWZoqBoKBQpsQLkbunZNT1GubiBNryCtJceHQ3AmecSj2hsn",
  "key21": "2oRks4QwdBxbAgoSZkQ9bawoNFjnzF27t31Ay2qcG8hsdGpgdvtdKVSkhURFRVkKBrexrYekg1GiaXuPGuRqSC6p",
  "key22": "2BELvdwMA4xMA4pj6QhTtHYPiNCpgYP3dEpRLkFGC1TaAc9KERLCuW6qishCRLn3Z6zQWahxR4gwAau3JSPNkGyV",
  "key23": "2nHTc1aW8E77bSkETUeX3Khk1Kf3mDvgAkk9J8bxXUMNgJFLMiiFxjSS3p2xD2PKrafH7gCCjgbSKvY2FJHSUg8s",
  "key24": "2raPS92HiJZT61WJwFSuTGGWzu9pRpC8taf7CZ8RG2RzrS5s8XmRwdXWsVCDiG2USLPMZ8atrqH2FBYjLtuFniQz",
  "key25": "5CRv5tej5Vz4WiFYzyTFwvo1vmTccNyPikbJ2Ag9RDhwjNTT6dbpdHvnyE6hDZWQWuqDMQ9Ewo4mWem56JhzVaNN",
  "key26": "2gXJud7dhbSRnxRJDynCpLKGwkpFXg7c3FY7a7XcH9jo89P3UMum3vuGeSaTobmnsrqHDRKNXegkLTGhL6PgwXJt",
  "key27": "2eZQd3cRJkC3cEuEgjLucZTcKxCviAZCHGqqvJaMB34pXd61KuP9PfxCRGJ7ntwSybPX6fKN2YDbULhA2i6oiSFu",
  "key28": "VAqFrE6Go3kyRD7yGCnmZ2tZpNCZwUMdnqh3obzsR6ScdsF1A9SUVUFjS56ZXCKwsk8a5gVKB75fhnbci6PGTEa"
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
