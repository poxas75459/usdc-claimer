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
    "2xPjFHfUdAPcHqCLeuAw1y4eMpEJUnN9knTv5PA3KEnNiHCXCiJJRVGkKzL8CviTaonCB5ziHZU2Xu1vFLNFWiHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntNLErfNiV63godFeXgVvGpcz1KYW4DxnRwma8fNxHfb5jX4HKW62oehDrZVznDz35oLFzPSJZDfHr3mktASdDu",
  "key1": "4me9LMRwbAZUw9f6v2fZhQMBzUQJBWKsQ5AwEeRLMNxcGQtE7XfGHXQ1S4WK8MtcPBZnMf2ikE45fgmCNRz1dwWv",
  "key2": "4uTQCxej9TdhSCZMdmFeqD3Zz8AttBc1X7zLK9S1p2uH6r3bCYTpjU5yWbYporfu5t76H9v1oCpnokiRPc4MNw2J",
  "key3": "2zV8iVPTdf1bkDzt3sbHafjd6eCvYg6LRoMmNsjBJCvY9oLsCvPd7CWrhbGXiT3BFo7bGRTD4h3LxRDjM2V992fb",
  "key4": "4K32LEiu3nJRXXQ3uQusaUWAUa22xohdi8TNZ4dKkkskQF4AcXbYEH2imDaRv4rkjfcyEAP31sykFZuVBB7G4VBg",
  "key5": "3Xj5192G463rsMqLWKQ1hhfANosx9UAbT8VCW1WGpBgSyqmd2KRpR9tHK9adPzcioNKUkqUVYqdF58u37ke13tUg",
  "key6": "4Fp3N4TUBkxgWRouvZgtDxTyoo1q6Np4jss4inpH6kKZantxDvFffd8mYdZ2dw7LeNsuWoz4SBrfzm9ormNJWQMh",
  "key7": "nXeYGY2jCoDz3xyxu5zF1tT5iHzw4UL3SNVcGMmGFSSBqLPWMH5Jz4GfQcKzYQGdLBx1dALiBQQ5n6pVHU9bjEb",
  "key8": "Po7brZjCXaeFVdpENLCytwCMqBWRWQxnwU9ZbhVmS5FXtwoTUM1TmBJXup6S1GHeSAGpMfMrYRrkXxFXLvKmuTR",
  "key9": "Ao5b3mVpuviQMjWRy7nou7bKu1mYCiJumRZyAEctbfxRBXNfCzAUmoDkJaLjHdMvt73Rrmac4AGfTXrMFGAGkMu",
  "key10": "46SxVzCNZ9HvBphQ6SHhtp2KdHayercQaXLT2xGYUjmpYoUTtR3X5DVW3T93MaNcD6KG6d7Df6E2ZPjk7BtDFinF",
  "key11": "34P2UpytNMNzVzon2M8YfrCmRKPCT9AwHqUaqaXwotUMUHVZhNrAw24GrEPnvWdjsW7uw7ZzLRWu5dZ1oQi2Ky5s",
  "key12": "3Vjjs4aayeqvyeFUEcuwcZaogAgpitygcV3WCZnk38E3PNRwinDrjLbbLbpyh2VDNuhpSEerfhPvxNwipMrko9en",
  "key13": "121ebheJYumqC7MTDahZ7Jsr9xH2Ur45LbgEBra4vYqtFuXdE7f2PqK3yVaT87k2WeFxygUxnH4U61a5JfF2QzQk",
  "key14": "5KnrQyEX1RpmCBBaX86HPcWNDndVmsAkWCLbU9D53Egm7PACzxRtcdnd2jHMcSgvsooRDXmFWa9xEQfm4aJkuafW",
  "key15": "4Gndd5vs5wijg41gWLvbzgiceA9CacsLBqjVvBeHPEvvqUiKFRQQPHG67mXe2FJQr49MKFGM7L7qUdcdfWmzSwbC",
  "key16": "3g5nJ5csuib64Mxm9x698Tm4axiixBBkFAjewnk6p5woAT12mH8dcA6hTZCZQetEp1i5jipf1781aue9B9gKUBYY",
  "key17": "44DmU7oZqAGVAQU4Lmvt92T7BaCaRhXw3Qwrocn5CFRXJbwpF2NKFaaYNA5DLsZ7bQYAa9YoxBygCkUd4eVgfkt",
  "key18": "3SPcpY5PfMDm9uie6CA7ph6V29gmSt12oDbowwgN5opknbYbsTSF44XwFP7U6ZWPPW9NvRVvhEYrUH4YjVLW1WQW",
  "key19": "4zBZ5sdtBGVUxP6xYaYucmo2nrZcboSFHhqYaaYJtAVLNvRZLyUcfjVdLTdxJhk5TTeLzguC3ynNXQaspcWCJsaA",
  "key20": "3tD3MMRkh3oQXbHTcAzD1X9wXUt3BCQ86K8K7Ebr4nxpp6EgmKxDe3JYKNxmdQa4csXKRpVw51Z1PNp5TN4w5CHU",
  "key21": "KEmAY5WnTMAJoVgHphBii5Wff6vGttfN4jB8jTrj8H8yujSjJ5QN2HufMwqpJoLwHcSqYMVZD5K9ZsNSrG1V3gr",
  "key22": "4ogUHEp7pkWZNz2iY8HvdkKgsBFFgSbB4tNQo7aYFinVoJ2RFBPGaRYXx4dBKndtrg7itgYAkZjgNZ279mb8DUEh",
  "key23": "ospRWZyAR5rNF6ExfgKwMMHtSwpXUQqf1zmxMTn2Eom3Lzes9rSDJtfuYnt38Jza6eMcrhxpLfh9hAeEbJjY28R",
  "key24": "2BdCk7wvdA2HUQcbcmGJkf4wfcprunsZXDdCqmDYxwMoySeeTZcSjaoGkbdUkJgGudJjBc6wFZDRtzd8gbUqvsPH",
  "key25": "4khGU1yNWM6DpJPcxPBvVMB6dtTAqQz9oG9ZeWAHU3L6EkhnfB25QM6UnJTbR3GxLKJ3akatKnDhAuFg6G9th8VA",
  "key26": "2WpLMrPtaEQBDV7fF6DxnrmCQXPau9Av4tRU26mh68sywqAdoUT8jtLxoL2CJQuMqy3ASSPMDWvQm4Czm5WuXaBC",
  "key27": "5EBPoN97HCKYn49wVyy6mjoHGHjezskMgxpQNrB2bEVmPiRUvkvVpc8W5mBkbmxc9GgJUj17cqSVkLDG974YwfyQ",
  "key28": "5SqbkQR3mBMiE64VqCw5xUBdAaZjXdvGFmaZkszKAMaUkgsiK1VQ3Zkgn79qhMompSJ65mB1A9bqPgHK32QGj2MD"
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
