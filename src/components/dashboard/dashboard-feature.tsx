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
    "2xEEWCSgf9PaKndaKXT12Xy8ee5rVeNgeYX2vcpzPPXoi7Ebm1eKFB7mwfEu1iECRL8F7ibGbaGCBZyHWYxUzFN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FzfaZJ3Jw5k7ajvHfnwsFATiXeb7j1SDADSuyqsJ7kYABeqrva4Y4E9utKSCd1rLHrCge5c7RuvDH5Drr24ELZv",
  "key1": "3uQ3MazCnedZfgYwB8W2T5dDzWtCoLVW3CfoLCq6RHg6RJrQUW1pTkVt6tnmE7SCmMcmrpkr4cQC11xs29AeHra5",
  "key2": "43JXkNKa522jvqkbKQHVpyasH4kfLJu1eg2fGP4H2SVSYrku7up97ouwkXvTm6gCJVYCn77chwHHoHKcrcbLUw7x",
  "key3": "2CgsjohtshJ5jaxhzpEciNyAjwCo5AkfQQHLVKcuf8F698GP2BYyJknHK1BVCLFuu6y5RVjGWpEncyU7xyHnvCcA",
  "key4": "2Yi2oUBA3SDvfjGqcmphWuwof5weKy3CJkhGNPuxPz85dWWiYhfYQSp3GRATSvyyfaGnHRb1qPkXTx7vwtRov7UX",
  "key5": "5acTFsEZPPSAB4sKnTKNKUgTzzoBtmxD7HBjmmhe3rs9ennKPiwseD7M1cs8DhruCT3LLZYYZb6eVQDWNC9xFwFa",
  "key6": "NbC2zzqbE1yZWv1bh1DrGEBv9AbGaVhCPHhrnzmmF9izysN9WreKpuygu4AvoLmi1dDZTwUEXycz5QvVBBoXfn1",
  "key7": "NGAC9tkaHJ2yuaZrW3HvTaqaMoJun4pnarwuca2t1Nu4onFJjJSX6iRY9jKfCe5L7GM8kkvnHv5ehVsVjVFaR8i",
  "key8": "5kuNg2AuCUa6TgWnB6mBo7qUs2nzHMnKaKbmAoBR9KiD3TjJgVxfgo4wgBw5Z4Zrk5cxY4FPRR4HXZPFPu55mDSh",
  "key9": "2MyeCKDmpH3SEw9raHxGzsHHWuojHekoyQnk41vCee3NR9AV2ExrsJoznaiQVDLZWKDD7jpBkQepSQbWSAfM7H33",
  "key10": "2csfjaNCaTufH5wBQVVb5Xm9weNTBdWcdBw9ZTAJSFSz2knJ5aThiBdBmP4vAKRWw2BhHN1YiJsYJKNAVdxmvrPV",
  "key11": "34CgmCuetB7yxMNENGZTQRoxNgcgi5AzhKRFh5eJfuAiZBH2qXsxKgswahThKqHZjjxmuMd1D43bgpwzL4F3cgVM",
  "key12": "7CkCCGUqye5jRigBHxRDsgyuMQQj51riyjoexuiB3FdeEmfvACFHFrY1ba7AwibhSMjUjBivs951p1ctk6B2qDx",
  "key13": "3rLGbp3Ria8Z8Pd9BK6a3vvptvTrnT8i5X1B98fVTuqYXLtUQsCP6sRScWTu9U46oX1aUdpjtpn7xFz6AxZcS1Qm",
  "key14": "tY2U6bzt38tKorpSEpYeg6QcTmWZoR2x8qdQTEK61YNMGaFFT9HWW4d8zBbhCQ7SfC7gVJ2hULQ4KPKXj3g5rjU",
  "key15": "7ZfxwgFpdZR6ahkKwRt7ytcWm49Hg2C3Ag7V99PyWo6RoLRXMKHbtHyePUqY28e3uhJTrxGwiz2hxAE1EYFLP4A",
  "key16": "5jERCUMnaJumWGsAY5nLdUNweSsmZ5WSSKQXCSfoMpiZKXHKL2c2ZLvKMYCu3bTq94uya1o6iVFNoPyizMuJ1WnL",
  "key17": "u1NWmfpxsGzf6PR8iPHNxPvjjDeKdp1rZYVA1T4u3cYU2t7vieVXFJbcECTwUwo1PmmgULvREYHh2kHh3kheEnQ",
  "key18": "26qGPNo2FzgHGR24fiL37Bd4DLAVgvoEFjfwGrD9KcZn5sAxANk1mC8jgRAgmoxmoKRH1w53ovWV4doCSjo8omrB",
  "key19": "NYL1AhSrD7LBfBxan29TmcshFpYccaxFbVPSX3BrsoifKVYM5Y7LWkodKwVFk9iN5cXWu2Zgi7VRhk7yDGLYWK9",
  "key20": "2tDwv2fYmjZzWpSNBPuqbhrhj5FVDT2kJz98cuLNDRLAHo3LVc65romVwNRJotogps5XQsPkrgBUvFecLiqHabW",
  "key21": "4FBYfEBvHWFLh9KStoR7RSbZYPU8EQNg7odNyVPqH1FiwTbZ4dqzjw4SekngPWDmogEzX762YnMScSXX8SsoRQTh",
  "key22": "5Ey1pFVkiLLUy8jBK8LcKtg1wG94WWekgzmarFH65kw1w57GQSf5nmwQhu7JZgEPXRy3dt6syjepL3iXA2kCL5gp",
  "key23": "2FRBEsr9oSDjzjZsXo5VfakJqarapDcWAiACYvYddhVQqAh6FZMKwsBP3NRgNPLN1hijWVMrqeM81RjbbhRNMDNc",
  "key24": "trd1Xh4dRJMj5ETCttJduvYLs5ipb6Mv8FDXwvHnALuadt6wyuFCwxMTUaW71SzapBpemAr7hPcYdRAST9i8k1P",
  "key25": "4ehLkiYHcLTCvqqHb8EWS3YVxSJ3GPfR3szgG9xBMKt3F2Kk5r9ijzen1WGNuwnngpNdgsYW1pEjLVNJGFvpY77",
  "key26": "4H2y8o7YCChjrs9hJpgmp6dNSHGtvwzXpDeEd6HjaADuWQZxRVyjyLjh7UN4SBwimWJyd93uNjFnFww3YftA5cSc",
  "key27": "2n1XbnaWwXZCQSaQnVCEq2ynj8EBBhFzkXATAZ44rDRxPqGrw6d1WEYkEBx6pDvq5XbKaLjrqqbgjDZnK8j9EUrY",
  "key28": "vD6KbQX38ee3moyJvygFejK3ReBwz9KiELxs2Aq1wuvo8tubF6JGFrDcfeBXKzMJ8dQHAhzuZyUhwg5iza1jJjn",
  "key29": "5fgfnjhyHx2ik87BDgBBHmD6YG5ihVTUJdkvar1HG2aS4fonrA26sEco3zsUnZErGZjCaJCUvauc1ytw5ofSqNK1",
  "key30": "67BBK5ardMCfpuyWaiUCYWeHidhH8y1AbdGkTtgyVG2f7cdf5DUVtJeACRSqk7d1V7XCuwYMCXcNXp9xUnh9HVGy",
  "key31": "39FrxXp5G6QtZCNNeodZPZ23BaJSvqkbkhTYGFk1dKzRUZpNqwpAA9qCLkZY8YhBh1BdtY18qfNFkVzv9mEYanuQ",
  "key32": "4gjY6G765riUs4fykoFNygg7u2pSL1EpoqenP32DXqxHpJ4DwPcUnUb8rjjqesYSMqi7hoNJm9ZPFGeeN1tAmmGK",
  "key33": "PQhaa67tvrqMf8Mmo8cWsA7dr3E7rQhqPZoKQ5dzCjUNg67mdKrUpXNLwJ7FCvMEkbZQgd5D9bUa1qTpZBAu9zy",
  "key34": "2vEJBuzxeQbAaKAY6oA4moprZAokKdEfdUdRqA5TUTzT5t26Ae4ehm68cVKAKEKMXvEvxG4EPCipWiGqJL71afCd",
  "key35": "4YiB6otz49k48ag8m4ZfH5TuMQLdgevssXpU4ooRJ9MrVraQ1uC1rcSQNAEU9WRyxZQZ4q7yEzX41Fpx6sGkPpZ3",
  "key36": "ro843pBqKesoSVBhpDFVwV5k7tucGtuQ6rSF3vQhNVWwHU3LYVdtCF47d7HNDNWMyBtVA8v2PM1eiJhx7KAS7qm",
  "key37": "4qEy6SEaHqTVaEDiygWRGkgM5bC3Y4Z1GzBf59xuxi9paUBf3uvycizZcTm1Nhkx7qqJcy2ohGWepdqMSKLPhNwQ"
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
