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
    "4msTjgMDMzAVUZFbrMjGRorb7Mt65Bv9QX4F1BkNN1LiSzcKG6dbJeoEBRddfDcdiPnRzRxsgdUMuuP2i7CtkPy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QM8nYX51ug11J8o8xYvyirhjYasQXn4mVLPXf8WdEgLS9NRLLk8o5DQEE1yq1wwjpvmawiTUpoqBbbZGZzG1PZ",
  "key1": "2si1HZ41uPyc8ZMSi29TCxWHo7fdUCuc4pKJTkR4tvhqgXqz6DoLQrqnssQvDAJJXVA2M1Eryw6L6jvSyFKvbBD4",
  "key2": "2gEDKwFUKQTPSiV75u6GiGD2obFj3EbUbCrgUvTEGJ8ncSKHtVeyHwYgt4jeU6qHSBHK9X6E9iyKNiCwNyxWZzS9",
  "key3": "3apmyZoQfYTfDowN6wup9N1oCUrkVosw9YNXgiuSRJ1vpnFUeLcC9b2ib69xxpchDbdH6wUjrz1U3pYxjZtxN8Tu",
  "key4": "B9FtRUsTiL3p1qyecJ4CB9bHz6W5W9HhFhBNGyBKptMATzZ5xBKpJVuZAkwUasCWuPzzTVQZ5yp8L4YQrX99HNH",
  "key5": "2V2eBDH5ZzPRtTPVYz5d3w9HM4mHqQXYEeFKLgBN8BYnwP2LPZwmSSj5gHhBM6dzKzYAdsD7AbUNP7DHDTTxwAiT",
  "key6": "2eSEotRpSDT9jfbd6FyiVmRGxjga8huLZpYXjxqx3uk4SQSjCV3LWW6bmn6hKyUS99pKkA2GY8VTEKJ31tmvJQ6X",
  "key7": "D6pVvJ2wGb1csvzKhMLzWn18xaWSSfSWbZnDDnFB87LMcWi9SR7cJ2C1wXAHiMTJXcZ6B4BWLFtxf1VoSwHvQU4",
  "key8": "5biP7sBR7he2kC4yeZsc4ZySNAzrAR13ipC3B2bF68hn5WZAvfwwVRY11rL4ytWAP4KvjJwNah3ogQCAUtwZmPys",
  "key9": "2jQ5bZBUtaGzLEQuZ61ig5mv2vm1BySa2Z8ojS3DEU6Tr8kBLeWviN1cxN7UJpDCVGu41xPHYndv2kJQR6YLshqQ",
  "key10": "4QAcHnvCgELEozCwGFPfPmfXup6NgvNE3cJvg6Eky1TvJKXuD1o6f6Le6CSY4ZUk6cPBdHCHJ8JMJYdYEhUjVec",
  "key11": "i4Vnho2c5CRLAghZ463wbLJPxBriuWQG9Gr36fDqHnnyU1LXsT5zxtcQVCdrLVvHxLNYVrvj1joGmZh9NPSLZTP",
  "key12": "53sxXpojFNm4T2NU1vP3ZXzgkEenS712W9wNcRS5KeokGPtmfMvixNK1SnQC3iwiB14pSDPhmXSp6Q3fUWywq6wu",
  "key13": "3EkTDd2xFo2eNde33SRDeC3g32GGxeaJM8tXvqWpme32y1toLJqS2WmwVmY1o8wvjADvKsJcxwyuh2bVuNM2tcVE",
  "key14": "3rxyVuoPHHTspu2ddXwAkkkPMPQh3AkFaH7yU7EwgSy6fdYaAPR28Ysdt55tWLgtSvaFKJZFedi6QRhg3FvcoZWz",
  "key15": "5EDPC7U6whpngBMay5jmcUALWnwK4EUS5moCDQSQF8WCRQFKSdmbqkMjhV3gRKFinZgDaTQop3jJ4eVVyXP8RFp4",
  "key16": "3xD2c5GdyUtfQc5g7AHAL6z5NS7MPTyy9422yPrpn62P1bWgDeB2EvkMX1Q1i2KrSWW4HWVMvwUpo6tJimdV6QBu",
  "key17": "5eXyNDz4UrZecAtQBJFnwV3PgRgyv7VGTW6PuX3gspACMHhj2PeXuZoLVm4jXaTB5KcGsdb6Yyxb1wQXEWjJmzo2",
  "key18": "576Do9kZkybzx75fUWUyHU9ELwin5eZFxZ2KDwreTqXRVs4cXmWWtZAV141MSJV3iMQA3ktdnk2spm2gzGafi2bN",
  "key19": "5HrxyW6CAhuXmD2ACpHRABfxLwFP2JoLJXh8iYXBKc3secjHfpVEikJniMsEXmLe8h46ZToJDtvEmUx56PBqDL7B",
  "key20": "3Wop2QvryDVtPNtKTd2C4Pua5FXUBo1pSW5Ch1BwKzVHfLaFcxAjmDzk9xJf3WysrgjbtoT5VLcYibyqDZ5sQZ6D",
  "key21": "39ppm3xpAbWvpgswQmdMcT5JpJpoz19mnMcEZenNRXCugD1PnXK2xZp4PbxidXapgsVFPza3uTmdsmVBRPAnZXo1",
  "key22": "5o216WYfTb4BVNaC2FiPvnzfiy8ARkW96ASnNPCioc7sUWLJqSVrb3j8hxpW4t6PLXXBBLuCayJGfhWVDWfpJ9Rm",
  "key23": "5tAqTuC8Ku9cQ27yCj54mzUoXjpkLeRooo2fuyTvmB9NGebS2Y4yXLUESQnq1ectD1AMKVoS11EbSLRVTYgQYzhR",
  "key24": "4J8Cah1cJ3dAmGM4UNweHYuFYVpyS4LuLiUZR6LHDzcQfLXB1BNpiwPa28J59a7otcAY5NJGsprGPzDV3DDiUg8o"
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
