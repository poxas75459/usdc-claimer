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
    "3fE57fzQHpxqGGBFxVMbTpgbUUhfDHXsVeL2o5ok7pLNe6wpD1XoMGTttj5MYQEYk5j1NvwZDR7E3zHZ3GJWU8Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DQ2MXMTLw5kaB9o6NjbXsJr2qRcCHuEtvh2YTfRA2pQiLJd66zyjvZFuJQ41xSsJnG4pL4GeopEheJ4A3oas2i",
  "key1": "eMpdoHLRmqZYJJwFJAmNNDw6qo6dCyhPoERJTtfLcP1NgZvAqMc2EckZAeP9NnoY2gLqBmJT5u3mi6WHhBre1rt",
  "key2": "4yCs8epBGCrfvtmgmwE4PcXngJsvrorfLKko1is6qWfy1aPEYHwRwsijYeYp2z2WfWfwg6QhHd1Bey5fP6XLQKdt",
  "key3": "4nXLySunqtKkybH1vAC7WG3Vtq4fTQYxgnb9PsspZEnzcnzYTeQRzEDjrhbfdm5inCXgVahFxQLmTcxJvEMcu761",
  "key4": "5odCTjLTzCKfA3nwXLcdi1HLEvzcMfPXh6T7d7KJGwi2YaNZHW2GeyyX9drDSRWwiNLD1iKzmtQeCAtgxZ3BnFNF",
  "key5": "ZmzmG8P7cL9myZCcnhdxtdH5fPru5qfpUH6DV3mcfpHZ4XZdasXiSygAqLsNtaQBf4A2vkKTvdNN51uLoHouxTL",
  "key6": "5xXXLPCnu2ztm8nm3FJRo67Hs6rNRWDCdiYq2ubJFSt5jkjb4NDfbSdTXPU1mGy4iJcUHgFcscWPLgfCYXPDkGHe",
  "key7": "3cxMdcU1aMWwMfeMbx615pWjBG7CTosMijtsZALHQ53i3WyAEcrfiHmh18UUVv21GTQmPVfhkMAzzxiP1zHLtgRo",
  "key8": "snPE9URr4TKvXfma8F4MfbGgUasbSJuqRXJWrpctrBtBj9J8xoydj2ks1frUNM9DDR6kcvhMqGGScG2cLJ4YXR9",
  "key9": "StRF9S4V5wPUSWzvPzb513Y5QU1xTZtySJanvTvr23NQHP7yeEfEiUQWxz6hj9Y1Wz9BCqaoMKTJWnvdu87Y7uL",
  "key10": "3J8HP5fx9pFCRJi2rF3JpeDzHWidYxmBXjYG8PFkmgdWQjUHvo3ETQWmGUiGY3vxK4a53AaPRVgEgtfor6MT5sW5",
  "key11": "4ggKFXNSvtEHrhvoFCGG6phpdm3GuBoqozqgF8mbWmyoBLDWysbfwSUVqDx8DsNftZejLvoPcDxjp3VYtcgJyu56",
  "key12": "3ZqicP8zVYGaV5WKyhbE84xdarm3uTxY9W9qxQS3bahMW8VJsTSE7thvWz6YnNCoFJ1oahq7V5EFV5KsvLgnAg87",
  "key13": "5a6iBTjkNfMiuWskBCtVRjg6DC82MuwapraD7QzdgFjcjZoWAG7QjWK4XM7uNKh7LoeABLYXrDSERps6dJ62jNFG",
  "key14": "2nrFfCr4s8EAbYAHp5u184gF2bQNVRWkmGJ5RpM8sEoHh2NPibW8XWbabKMi2yFSNBDhL3MH6gRYFMv6XrpYQDGt",
  "key15": "2xrPWxBQUYrBDwTWqrymR8sEg2r7hkgP75QFvbbNJSc94ixxCM8tgtj4Vq5VxFDDRMJD5zAdxRbSvcEwdi3Rn63x",
  "key16": "2aPJ3ZMnDjArCDkPMknPhsrZ5r2UQWpNRw1g3FxmSdhb8KH1Y8SkFUqDpCjp6zbLQWYHQonHswwnNojCfPtTWheB",
  "key17": "3drB4iKwfznTiZkxfQsxv7PE22Tn96tLcEwCEyW39rvuyH6W6AYSHby64t5m8NZBRHqZk6B7z3DsgcWh4kp6DnRe",
  "key18": "31Fa57FrVfK7kVHzBZCP9HuY53Tzvbt1UvSXSbLVwThpbMGPsx3xxC5qjq3waeY4bZrShZK626B7J9LjZx1YZgGY",
  "key19": "5VYPsGiK3KbyLsMZNuQE2SZs6o4voTeDYc3JVjDer991ffz5UL6c4U5sgtWdPfiHVpv6MBZR56KGqLAisKkMC9zU",
  "key20": "21bEWiZzKRiaTH1vYGiX5B7DBXEps3h2cWFyv1zvvTDgBR6Bu5GMqdWVw5ibnYpeRNGmh7jospmdC1oRXJHkHZKY",
  "key21": "2HmYqFSNijwjEUnEFofe3d47BcXxj8zuNTh5383JisM2sroyeS7edfTCV2uM4dtavpES5x5vesFXhNmumRZM1NyK",
  "key22": "4rNJGZFfJqJZrJsA3WE1HLVaucJAk642kHRCLuuWapdKp993nfmgjJGBAHjhgQ7oKfuQzCf3SZ3NuVrcwBhkPXno",
  "key23": "2Qe3rn2uzDcYQKJpHGmZxD9jZ2ZEwE3j35PzcUu6MkZwojZVLYuMRW731UkmyG8NeEcKXG2sBVRDKx5B8L4drseH",
  "key24": "5cPevXRG5ACfEaiK6rFjmBkz5gKJeDu5eALmAyso4Kh3dpZyP2SAiQviaNAysaTm1WcL1ZdzYJV5VQnGJQpjEYri",
  "key25": "4dvks4MUyC4amn64Up4iy5YsBbShwJnMHgWc49JCqFV48yr7fXiapwBbnw6P69befXZqmaVYGjj8qjm8zkoQs7mF",
  "key26": "2KXTA1qJRDJGPNgvszcgyS8xTK4bzvD3o19jfYW7XsL9URpbaoDmZiMKvxrq4xmfmu8ismL2FiUQFjg12hDCpBsL",
  "key27": "2qzF4Vz1gVz1MVsTykxniC6tiPqWpAzMg5pBQ9SM6f6uqwZ87efJ3wU9fKdZkvYHrtwph8uzy8fB4H7JXj4QPYUR"
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
