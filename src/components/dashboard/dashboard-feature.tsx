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
    "3UWMcw1pm1EnEwVFqmALbwXDidAHo6UwdfuvzwAA8T7zPBNpzboQKPTQBP5pDhuHD6pxFv7zrBZn5bqE7qrNfPCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ji8xipbvAZG6p2WpiEfQYmrgAhWrUkYnrZmgUAUM2XPfQsaQvHSu2CqTrBDUNW13h36KAaJ1LK2vnKZLH519X9M",
  "key1": "5hLWqU2z19AyJwbNZ9qLCmxvTAWCAaxo4nyJD54PsFPtATiFfSdb2Vth86QfRwFj7RVJsSVsAoAYb7r5fiKmfJPo",
  "key2": "39ZZ9my4wmUf77BZuKPXwVh2AndZNhGPvQVycKDCzJtf5rcoyge1R8KiqrjDqzQfZZjpeJ4fSFRFapoX4AYDBW43",
  "key3": "2i7MnArUCDvt6LK75yUBiGud2qP4cwoR29NxvJH3FwpBtKiwuoJjTfu7ZyYrYT9pXm8Gsz4Fsf4i76Ff9SEq9m4z",
  "key4": "2SFCR5P3x2zfQEUAx2xUNYeiZdL45eXYPSUf4gDFXCVRrJ8Ebmygn37zyXqGBPyvNphhJUmWZdsPDj2TQMifV6CF",
  "key5": "2rcpBUaeBAgeBG84C2msBG5dppjoqMvpXTcqPdt1t9JPzWfimKWeQGgVwNC5fjsXmexhzQRJMtgpegzWENiJgFn",
  "key6": "39QAF2sot6vn8pTkibDRHS1Me2gJk9KGCAVDRwZgjRibnhUve3Hnokgfimq1jqoiUTvzq1UCqF7vpNhCgw3ii1Bc",
  "key7": "3dNXgHvkg6y8EAFDJ9G7UNx7dwTAzke1FjMPD9j3t9EF9h4fNfdd7nkLbvqMLWJG9y7yVEkA3tTVPezcRCd7H5sS",
  "key8": "4iZAyUvsfrSMPmMjetySCbbt4io6ptaoVnF7reiyNindo6y1QyApUrMSKMVxwtWpTZ9krVmggwF8DvpohdwKPnE5",
  "key9": "BAPfG3Yy1cu3YJxkVKVXMJ5WKAyp6z4tfnqkkwA7UqsDJeKtKhT2xFcB8nWF48nUQQrCJZs3C7FwJ8DRyTG555Z",
  "key10": "2BwmcKVhwbaj4hKrFBrejxbGfbtNbchYBSy9bcju4DxzXs2gHvZDGN3s3A3eKTSswAXg4wqcFtrWXLV8D7aGUZbk",
  "key11": "29PXK7LYG4G5zc4p5uAyGRmE6vv7BK8kg3dgBrbBYM5aZRjcAABdiRemPYZjWre913i4rNhrBqKV1AWow8oAEPCj",
  "key12": "3xx4fvunzQ878cBn17UG5DT56kHusBGvznmPDa9W3TwDKHNAYfD9W3fCBE55KXQo1w71BMy8GAqzzEPj1ohUi7js",
  "key13": "2ucKqe9t2SWLWUL5u6TrCZdwmf5M1rRmLCbytaNsSWMZpNBhoHhcptSwNoooPDwe9LN6nGVHSqrpbLWKgpjthbxt",
  "key14": "21YWpVnKZX2ooBUfv7NcBPuQtiU5gTT3YVDswCps3SnKSr9Gxb1EbFoYgj24PnqBKjBeco7Mo6MwrMPs7ZVKTHeE",
  "key15": "44MPHQfUrWME4KEM1gVmGgV2nUjZ4SvkXqedR1MHxqct3k7784nT2NQzZNSPpbPb2qD48Ld9LuEGUVSGF7CCkTmM",
  "key16": "4z8LpG8mDjnhAg98tAczik2ExoeifUjZWAMBrZfnT4XNzLmCxwJzEacFQRMTDFvtNxsWTghFXrrRuxkSJYFrWuNw",
  "key17": "5542pGyiEtYAw3jmw9W5RchZhUsuh9R5RmeNR3tQ73cPYmezBQMkeu4eyioZjqFa7NairTTtXFy6u6pLgjMcZ2YD",
  "key18": "2UXUQPbvCbsXMstYgp2FByN57unoBi5vNSWUTgFowfJsfpbZhUkmaVBTpbc4MNVwVBAMQyyZWeSJVuQRRD4ugGhN",
  "key19": "5hsos2PpyoaemWdxjeDiePYcJkBRVH7pvKAZ17KmDNWm329f1dCC2iB5RJ7dGK5MxXt6FDsG3wC8S6Jt2BDU1sAf",
  "key20": "53nyzV14F452MprTwhCkRzfgPJJkveiaYrSedcfgXqpGZhsrT8YAk9rDzsSgNewxxTLHhTWcubuBbVvV8k7eTQqL",
  "key21": "E1CdhBRZVr71kukuc2NtvpqY5SMXForz7NmjeT7yAmpxDMiW4MEzyZ58MtvK65Csoh2HerehMkLnHmYMNM9SgVJ",
  "key22": "qCmMX8Bn9oh2nbZQDKXzR96ZWgt2tpKX3mffB8Utgvsp24mEnTz3JynJaVehDj1pBZywkKzdgzGcgsnMDu48Xi2",
  "key23": "28kjshawJZcS3Z91SwTsqncXaz71f1pETWgigYGCtgEE1dXWLAkhM98Zz6DWqS3WqfoftmWGTMAgVm8GVW3nQKCU",
  "key24": "29C6cjLLwBUr7tuYdkizabimg5zW53xnTxNhaU1849mgJmyQd7BzPVuWU22rNZ9crkz8e4ZoTgSJb3QpMbdw7LzU",
  "key25": "2U5gJhNwRmVDdGNGPafAYGZVsbqF3JrShPzx4Qev25UA8tcpqSHNPgco8cPYaETK3aYu9QUyhFs8Hsx2hMpuvakg"
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
