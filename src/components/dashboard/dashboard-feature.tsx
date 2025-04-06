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
    "4C78jf2V61ATETyGMuGFPZcU9mRLqVGt2GSMJQhNjsJDT4qGu7EVdMpLJrVHH79hWHcoY4J1xCxWK5w7o9ycVkng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xpGrpoTT5dA4TsTAm3HLg8SFLDi3yJ7CWjivFrfpEFdakJ614ctWC5VRiWUZDnAM64EozErFAgrfRrvjDZT9c6",
  "key1": "4ioV7kvmDvpWcbcoD5qRCTXcWL71g2RwXF5nW4vkKxNvG47QqQCtf42w6GA4xtYYrDPrACq4A2rfzNfrQHSvcubX",
  "key2": "2DYphBFAroLgqpZu3MyZoQ6zTS987jzG5uFCdo85oPP95fRB8nuAdZrxfVstmamXRj47aoZQ2mSf3VbkrxYGjF3X",
  "key3": "ptDLkXuWHPAKhVsypKZpic55zGY6M5wmwVERCgBakBWh1fEXEsKWvKsCdUZyxLUPhA2LvnocMvVqdvLsvZFeXxU",
  "key4": "2aVXz8rSSGJKeHk5bDGg7tPFj5oazPYeBY6NrVXZt5zwze7jq5iQX9D2XcoLmFcvGvkxFZtpYDTpUccRiyXFm8ge",
  "key5": "48bX1TdffRNbfjDrtioT6aM5JpDEmAobQVNJStpeJ8TZbGLWpW15WTj2jPacrBD6gZJ1Lu4356nCJ5Mn3wSc8G61",
  "key6": "66CbWN1fsdwtSYcxDPpb2PDE69Fc1BSZf1CSirtxoQeYdnByP86VMYMd6xkK1qa9wbim3g9awj4Zd8UTuzZyN4QT",
  "key7": "4YymXw9nakBpjxzgsw5gMBTnAc6NSHAXHMCGDKf8exQ8JctwBVvJbEVp3g1DT69eJxsjq4uKEWGEShit1woiqthH",
  "key8": "55jfoYEvNXciayPdmV3adEDLcx7jtkMsSj4s1Gciioy8JxHQ7TU1zLTrVtTa4qnun3zfWhj7P9sRuxNUU5YLqxcP",
  "key9": "44K5AL3hNNBcfixpEAwR4cwzrxBRgiCP7u8YmaNjTonTxqanmNgHEd4ryKmk2h2oc8hQo8VwPV3CgHc8jL1BSyT",
  "key10": "yNzEhvuYD9T1syybS6eUtmWahLxh1Ng4KvZ4apQZZMWdAPeKMBfeeqfrXacx1k8r9ytKhwEHZJYe7JXnoE7mPDt",
  "key11": "21c4gQzDwni4xbDbQ1TdECAtDPn9ivdEfZ3vreEtm2mUduXKESvbJkqHR7VhiEv7GQC2EwL5ov7BJuZ2SSjg8g2M",
  "key12": "3yPd9DWBSqCtGZZ25XczFPaRhNR8b5iEq4b4MCVZknxr8D5Ba8yiFtMEFy8CrQka38NagazTubRCPdmmV4sfduE",
  "key13": "kNQJwBEpVTAHwwbgTP9qHRh3rasVPHkCbr2emQNFq2JQL5B6YqQ7zqgzVebZxQeiHNnvxeEFqJFZ8VetDAxKDtU",
  "key14": "2DbXuoBvWV66nqEHfJsSVHikVXz5xGD38YCiP1GFYWA2r4yiV1CuLwtWDQtAd9v9ajH3q9KFYf69nhpdKXdZsiKN",
  "key15": "T31WGzgUsA3c2xErpn1DdFzwRktwy6gSM8hpPYYgfdLUa95ovw9KSWNYPWPHoPb8WDxQKXX1VyurZsTm98BaxBg",
  "key16": "4hbHZF593kbEwoXCAZjMm9yuYjgsCB43wg7Kf7j536g9PzyQyo7x2DWnKLBZjrWo3vdYsk9x4pF1pd3KDpPyoJcH",
  "key17": "3VUoBR5g6Vx7w4M6PoYLJFxBxxqWuuChW6zzcMF8mbh4nzf3BNbH1QYccUbSC5dsh9jRbCFeB5tBWfLGDaxHUZmH",
  "key18": "5aMSTktimGSytvGuvBa2GRwWNgShikiBeFqRifVh3h8FmEjCtY7iwWHhSZNzGiN2mvaFgxa9o95z5hTmANKm6mZD",
  "key19": "5yrYgXkhVa4yZXF4rtNcWHKUD1AF3uRexixbTXV4HPEoKfmJ2DtGEjfi3SAJG9QDvnJxjoUAHc4TsevM9eGAvupU",
  "key20": "5oGXaA2V7PWDTSFhK4hC3wAFd8vSRrVAaMbRZM2V7UanGTKquomspBRkqjoJB7scM4FddqfwTs46xhBWmYqCxfVP",
  "key21": "4mFc877n7vTWkxMDBSXiHKeypG5ZuDNn96drF9HVSGQPv8t3ZDkPjGtspMp63n4iZpjpFrjMy4CRfC7EkePTi3cG",
  "key22": "mVCbFS5f6d7N6DuWsb9J5cBrwrZsdwZfuZYVbpqc6X1wQK3WwgkeoxMhWYwbFk2UuLTK8hq5CvcEhFQMjgeQTMz",
  "key23": "4HavDXDnwQs8zkbPcSvJwmfz4LGrzCRwG1PJXoXwhznP97nYhbM7G6dvhTL19wuMUArLtNucWc1hDNPLyZ2Nwux8",
  "key24": "34RVJDuBuyqdWDTcqHY9mtKfnTkVCpGkvxhYgFYYdMkH5zXnRmZzStdUfxZHA7DpghXcahD84tgqRBLbfG3XVGJW"
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
