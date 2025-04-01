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
    "3sXGKUNEJivoQLEuWqS1Bku1bHvTyfXQmPE6ZnNXSPVoViFL34C62DeLRyDQscT3QcY2fV96G2PBjWFrvS7ip93b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjHxKw7tDzPsepMTJuGXvpFMyMSZpK4f63kXc6c1WVR6AVpAUZXLMoQWUNk3T5GJZZ5PaXTbgqYRPUYJRXN9mFo",
  "key1": "fRdVHaXxevyjxLL8ohywL4CrEKXubUSgTXwTqeDKB4bmWSL2PjuimGy8ZN9iKgstcBqGYLJXV7muTfEXbNz8G5j",
  "key2": "48LGccVTkfrgr6w1s5yK9QoMd45fRDXt9uAJiuZtF4b4tX6D6ivDeXeQNXd34XdgrP96LZShbrKG2PVLyA6hFgYq",
  "key3": "5X9tYAoGXmJG6aVcoiL45ojrnxrfsNe6qvccKcUBLaANKjhg82PkAjCRDMGsa3jTgjWtR1CeHQ6uh4TuTGyqWypy",
  "key4": "2SnLLC2hRUewhEVT2BmBnodSkdH4mHXK7s8gDid3FxmGNHxEizhZRxkh935CT1Ro4QtEHu3fr15yiuDTYVx86ZML",
  "key5": "2diTzEnstTCUYH2GpsEbuWyJmEqw1eZYj3XsC8LHbg5cn3834Th1bRbxtX3V4eSt3o1vVcy4XuBtjjVqc1uhNzH8",
  "key6": "3kpDYhAVpWQWiYXpJ9PKhh9wF24cfSRCdp6geGrm2a7PVAVSrEkhp89TsytjhC6hZeEtKunU3EDV62LvZqF5XP6d",
  "key7": "4ZAN63nARUeMk1BLsLAqnrUckAmXH4AXLGJZqmnEbeHRLStriC1ukPhScNDyGrYXY8fgQGR4Pw6LUYeqBmVpmaXi",
  "key8": "2yCHXT9pc3XewkfQjo6qDcys65PpdjxyoABVe6vAEe3PPRiHxh3Sg2dAQQaL3uxYBkbce5MNBe6iQu6nooa7Pu6N",
  "key9": "yCAc4ZhaVRggsgkrjGGynV7EoQXzBeh97ijtvBjocwu3mYGMJGvxKcHfxQXCXbbRx53HyX7Mh1q2qAPiWP2v98D",
  "key10": "5bksJDEKYCMBhY9dtBZ1AmNqvvovqgeooYPY5m8Vgu1oCbdjjCJNoarxqJZYzh4Y7AEVFTkc71oN4FgyaviTRoc5",
  "key11": "dMAehAqUdPvCbm8jJP5mvfTdSHRfGjsJWMn8H8SjLwvCL4JqTGg7wBoK5iMUsDZC9vFUbzBJZhr8yqsEfm3koCt",
  "key12": "61r2BwcoNc497WXzYdbhoJsMQD3xeVuDHp8g7voyuown3u6o2BSSGT2ezrqKyQhciqkuR8RJ7X8KYUrLUKptov5L",
  "key13": "fdwG6Qvux7387b7fc1bTZFKJba7FnREW6BdJ672geEFR7XGrWscwQ6c8sBTzEEK9RQPVRdfUsV8vKppaGzpAKGu",
  "key14": "4oksaoiMBUtZzY1iNbroDdszxsMxPuLSeXYXG7zmnPtdYhM7B6dPLDxhhb6KsZh1XYHd7brhouvcw8csE4VKbFNP",
  "key15": "4HXQfuUzZ2viiWaKYH5KBt5DQ9VUyPH7GthpRakP7io16V7aj8twsFCTRWLRtgcBYJbQM9okbQCSCSp9a1f69A54",
  "key16": "3dVUqhSdk6EhidWuLQvF1zCpr2riHCvHfAeZEeg4hHF5eUgJmqtCdBXaFpn5gvDnED3xPqrkTxKYB2F5rSHKE2nV",
  "key17": "2vmeRYinfkxSBRkhjesg8HnA1NCFLSb4kh25a19SoF7gpRTtbRMGdm2eeEUCFmfRYRNLV9ExuX7W79D9BnLKMpWX",
  "key18": "3kHFXj16Z6pu6VNjTqMDZvGb2CPiw7zTjVR25R4Rws4DdxUoRot6wSqAtpWVVs24KKBkUM5NL8LGYNcDDLqKQoGa",
  "key19": "RvAEbjvcq78SZKAq4WkGgBpgDCZtoqXQRtfT4uW2BsyTioENZYkK3mXvrQzZb8aFRgU9BnRUSjKVG7mjo31WU1A",
  "key20": "cmvifi6uV5FqWb5UzFc7CPT3Tao3BgwgjdDoLTV82pduj79ZyVKCwjHPxEJN9bZMfwt5f5shpNm9XgWF5hFU6qP",
  "key21": "64VxGszZ3jrxn8dJm8NJcAuHgk2XHUEjfn9hPuLqCm5YRbQwWeYzUCf8BiXU7KwDAzYXMDzfzQxhgYxwbjJoN3si",
  "key22": "3E7wh1xweaDn6K5CNKAQzoEZ3h3nDuBfkAaLp8qEERd3oqQQxQ1XtfTvkJM8vnND4eeaPuBAyvxzkWJ2ktgdw9s",
  "key23": "62eYuK51EpsbW5RtTKjF2Qe6JFdT1zNkCpYf1pwPgrqVvLp27QFbTkQZ56kJ3kwxQnrQh6FgpUjWnxox56E3WCyE",
  "key24": "5Umk1Y6uht6VX4v53w5PrZuw99HZFppnHMcijhbRyf62hT1dnv53hPzFd1FMMvMdRrdv2v9U6E4ji2Vwxb5J5gRC",
  "key25": "5F9XWFejEwftaPCBhsadxPeWRb5cA39Qmu1RYxuZEkte4zfXbZq7ErgF7GDSLHy4QLkUpWiVfHLSbiJwFQ3nZ9Tx"
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
