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
    "4TyyrWT9W3qz3Rc7kVj5oBy7X7KcetB226fGQJkFoC2BfChbTtXioeUoX1C3jAnJWZqdKPdQ2B7wJxTenKYJVCVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HcxvJfqKofsmD8QRf3rw7JEVxDYUU2rJmPP9jJAAHdmtaakc92atpEtMmUMLJXkpiKNG7yV7bXKYFtJ4MSSvR8",
  "key1": "3Y93Tw7Ryf8KPCYz43JAAYd4X1dVFDUT5LfRYp9VUp5ziQyTE9Fpa5m9FhCvECdNBMuFieYXrnxKR9J4yf4DFfJu",
  "key2": "557tJ4K4hnLxkcS4Cd8PuXL6ebciH5AzsPABXnaZvF34syLhufLrSqvJg3AQUVhPYo3Ak8dybeLtA6JVSM4Machk",
  "key3": "2uJBDSjSL3XyWx7hDS68uv4K7p1GmByMqDGmjzwgqPLnRvLhWJCwK1q9yFxBpYfen5BpQ52shb59PYEFQkJF23m5",
  "key4": "1AjxUWgVKGdNpaZNhxFTAwCA8L4SJCEA3SEV3goRSgKoCDdWfdASM3PoZi9z4PV9U3VfLVwdKE1RzXaCzTUQMn2",
  "key5": "LhTB1QKZ4jTqhH99Fwhgq1AXXbfSXFQMEmCLEFiHycgLzq1Hh9iM63YhsSwyWHvPsD3ZCxhfkB2uCXvv2RBMgjo",
  "key6": "23RYdcQ8rUgMoGkgfw8asSyuHSCTLajXgcZ16w7n3cc3Rv7f5BDB4tNqB5mqWTdJ14uKrTtvUZqKbUpY5ujCnuZA",
  "key7": "3GQ5pp99UWh1HnzG1BVXq6fHnfU3cHhGHXW5cnxeyvazKGjUy6UraUTBaRqTtPCtf119PK7FdZvUfhsjL7dDbJVo",
  "key8": "3ce1ncfE4yVUHeHNthez4VbzDR8iH4gkhXRtjg1NUb7bJ2vLpPJo6bj3zG9NJvbyumT7sgTzvj8bEPMLqhTskLAJ",
  "key9": "654UeA4KgdascMg8f1FaWMVAFyJrKTr2WmjEzpcphPsx7uoZ7nyCxhKXLXSQVTrw2p3vioohuMxD35oJtxdViDWX",
  "key10": "4X1Tuxh6Dg6GYANnvck1LwpryJtmjB3Suj7P2pR92vH1vTHAoivW7NGvLZEGAQuUUFyZtGEXffdQ7oFBq41QYyLq",
  "key11": "5MtMuQoT33ukMiJaAaKSKbvGtrPdY5dsTH5mitFwSXQpaDmTgeNKtZLCaCxPKfgqjmq8xcfQaoDYg6iXyDVgj4jw",
  "key12": "DSi2K9gpuCnLGdXAcBsyULfHnnXf1WRLMJbQK9huVJnpADXXiuf8AYYERPXsfM89F2gdNi3KvrmBB6sN5TdHrWE",
  "key13": "3bfRjv2v6P8rbLjtyyATbmt5HEasjSnu7G829FtZ6MaWZHbnsVqKcQx5JHuYM52UoPLLKn47garJPDgjMTHXo2X9",
  "key14": "4z1waKDZASXApjnhURHNZj3RvMuUe9TXvTLDZxGjdXRDCzjPygbPpcgEzGjbhHF9gCGQENBEP8sFtE77ABZzsarg",
  "key15": "3RXfff7U3qLMbk3iSP6aSxP6pMKJMG8gthix2REJTMLynYuTvc5AAWbwqb5MKwVQjBVj2h1QBAX7ZqwuM51Sikz2",
  "key16": "2H7HPKAmi8Tx5cB6JyYFJpBBrzNTfSRjraMVmoKRVRyTFt2vfj4mKRvobTMmXs4Th4oVzDerCE9nVCtaeo6b1ZKE",
  "key17": "25a8BHc8ZkqCyD6URwHo89dnrrTAVtj57bc9TypUXDuAZ1GnWDmtVU6gTw8rTzZcKFgoT5ppkQjEUkfxBow1NhXT",
  "key18": "5NCPCeX87AWNGS6sxxVgm6BBWNfWD2MaE2t39Lqzzfm9SHwwS25NgyXenJWNdAgdPSXboTLupqKCtxNeMBHFUnpx",
  "key19": "4f8GEYt9BGkqnBSKkoYAPT9tSV3v43vJeYSqxCXMidrg3L3nqB4qLxVyrcyAQEKxAY2yQBBdjHRun9CxpAn5d1wm",
  "key20": "5ieBo5pZXR52NsEMSdFBAV8UK8i3KbYQK7cAooFLdQqYLuigVcpqMrMZmScUDp5kHcxUijNLu7bCdKEHJ5cbGatV",
  "key21": "4Gc6frtRoV6k6uL5oGcgsKe8grUSwUR2a6EfwPkvHfN5n6Y8wCbXjtr38DNRWvLviuDfkxoCT2z9KZansPobLvZc",
  "key22": "5GZNsJnzF92hhVG2SuxGQ3Vdk7Cd73qguCx3YPXfgadLHneEK2Jbz7QcAC689qNmm95HmJ4LQpryxAGcPjt2qR1w",
  "key23": "4mzLUNy6Lx7UsKb4r4TQNByasaNaGgBv7W8g1Qga5kEkpr366mwWQCxrmWFjjKGWLVLVxK1638srMuS4ajSJaBq3",
  "key24": "4tnkgjGWBW2Dsocp5WCHNDVEZdGiNKyk4CFuzetUD4S3sgys6eAXmxvffUNPhTzUNHQ8GKfMdyxW727SWjSzaLNh",
  "key25": "3DcUDaSvkvczGekHCgKYjVUvGEwzYKQhye2LSR8vtM1iFQri3xCAm1tTBxMyQMqusiXp8xjLs1tzQfrpzgQJWubL",
  "key26": "2zVzVf5BB2dAxnSvLLibUvyGoCENAbpiRRzb7i5kTfm8N5AL8FwxffWHLpVyxTBusVkjdav564iDzrX1XeMXcafn",
  "key27": "5g3DbjQpjCb4g1Q3yE6zAYpQuBKo78AkpdD1rRm7UaAy1hUeki7hNj4L5YvxyQwF7RKrG7UFUPgnx4TPVE7HNYUk"
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
