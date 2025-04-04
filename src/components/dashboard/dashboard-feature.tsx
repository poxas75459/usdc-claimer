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
    "scFvfXVJgW5VK5dxr9CFBjo7GSyyeXy6uXuSqzoz85hV3WFbvBSr9KbASQeEHeU8MtpCyMoS5qMpR1mnU4G4X82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "adQ7J78ZtXkKs1J9zPzC2xinCTZJs1fF6HCCJwBs7DXQVbZHSEWBB1TowZ4oxyYPAMpyXJGVExKiLNFXRbQPw4n",
  "key1": "4ET8zZ2S1YviUj9Swfc68Rcx1sqDk6yEpVk3igiAYq9G4Zdvmgv8auqpQTsuYugyJY1fLsGrvhugcuAnx4wJFf8V",
  "key2": "4XsYUaX8yxDFB3x2nzcWF91atXkcv1S9YKXRHHqqqFHKwFizjM3ierNQt3iYBPo9BDNVmBbfSwp6vJ7MaCeYmywq",
  "key3": "359uwJq7WGFMKfxGPEKtcycBjCqreKJTmWpg7hFVYAPJV9DiqBz9xMr6Huo7uEPLgx4XzZLawQa5zropDdGFGAdA",
  "key4": "3QZakcXrkP2n4PFwTpUPm9CB6FGxTHfgADwVzf7K6KoWEhxreg1tWZcbhW1RpPS8UeekTRt9Dxh1rbNSUSsGoAsf",
  "key5": "2Beq5oavzTpQeZQNASY4Uubku66DhgMvTUaMuyxAcrsULjh9dNFAPJNpSp2WQfkBUyi6nyifjC2UwB1e2ihtNy9c",
  "key6": "2FSV3VJLuNB3qdoa5a4RRgF687BgSKpJZF9wFva95TKgagqf1HdRcXuZQeZqQJ9qiwcJQia2EmYtPEQDaP5MK9Q8",
  "key7": "hfKHnfe1gt77oNCGC8P6iaByCenDKHer6mfDuEZovgjhY4KWQVa2b7p3P2WDD3wXabznwBsRU22CGMjxSbWjPiF",
  "key8": "32Q6kM1ftAKRZzJPfpZ5jniptGCvwBHCr38LWmLYBjgBmsfwK7YSuMQvEukPJKKeEP7EhypseQrinJfCiBNth2Yp",
  "key9": "gdy9wWjQ1LBoY5bL9grLBcmhoYjSHAekZh2GvdUQtzE1hEHk29bXXVHfYg7Dq6JDFRHQen2ikAzijk6Bkgvt84U",
  "key10": "4v9JKnnMXCoSFktZRgr3SQSeRbUb7PhqzUXF8xwyC3NHsYfDL8C7VYHNNPHJuwN1YGqZ4AV86SbBgyFndQESUCEo",
  "key11": "4q4ighB3js3boZGAmw1X7dPH6WTPb4waRf1vbMdTKJR1YQNahHRmq72Ud2g9TQNBc8ehR8Lm8uUdbEMApvavb2NG",
  "key12": "3FyZztpuiwH2Rb3zh6CVmxiMQm6SeAQF1ZG3aQgsoCfXyVGoYnVHf9o6Gm9sRjHjkxG9kmUx36TZaJGs5Axt6Tuc",
  "key13": "5xyYXcmWAGPwvqruxXZVpsgLHWqguf9Sugb7RsyF4AZQQnDfBMqYx6Tas3d2o8fBwDSQXNafvrN1xLdR2ZJPsE8Z",
  "key14": "2A1z31usw67SkiqPcZKLiwxxuqisHvxhegJQ6fJHhS1SZ3kSvrVbXEGqTcaDdma4HvhFwVSHcnts1S36EiUDQ3Ck",
  "key15": "4jiJHCsgVJ5WzeXjaYHx3ZRXnfJcBY6L7bQbvFUyq4gSkb8D8vA5XYsBMPLbrAKKkVkXAUKSxHLLyWi6QrMq78tm",
  "key16": "29TqTMqFvKT29e2j8hknvcJiDP7XR64VetQxNP2Uh3mBwk3eoDRLvrQ2YYJAyQRtjDpcaYPxwj6nPbJ3F5WVLJYp",
  "key17": "gd7634amk7anLc5fVhsqjxo8TG9oKjSuGFwU7u8xZgUTXrT4Ekj5pbAJ43uARiwcaFtyL5oa5afgaBQ4L8iTJFP",
  "key18": "2XXoC5KHTsYZ4uka4H57QzNaCXE2ehq2nSwKUZTkrfka5bpw2NcJcPHoCV8B9amf2CUYAwndEwzQn3rHG5qvjJnD",
  "key19": "5VMBAnbgifvMBtCLAAUJuUZDVWNbYpfgnwaoSQcrALpzoNXi7RFEQHnqKFWBwmp1oGwQvo2HMBMdnFP5zHYACpXr",
  "key20": "4BE4RYX2ZjbZ8LbQ8Sd6Ur5GhdG3X26dt5D3UvmQaSe9H53Wfc34vvM1yvRPyvKnFZ2p54nNfoBUzLkwuA9yEMSw",
  "key21": "4BM7imLAcpk3w7yjbgaNHquRFN3nLWYqEtxwsvTgcVE9YzSt2bfu3M3Hmw2CZ8aujUX2YzBJTknjsRtoX2XSac5Y",
  "key22": "2XUrAZukmqTwMmWCcjF9xvm2T5y1FzhvpoyeJ7Y3tHZ827vo2Xedn53YtF2KpqtwPMPLqeLhKqePURuXmb2LhzRP",
  "key23": "2fm2UbYD5xAiX24pqZGQEndwd4FpBRJGbuXfHnxc6C3ta6Afw6Ypa6HMKbScKM8qydFGVbVh5foft8pBNvZUm5FY",
  "key24": "45quC5z7WSv4473kZanLWc5PXwFBst5f2MpCU6NkD4g7ABZoXtdmcC6ZxfDi4v2fgPbSSkcjUwHkabg6bBmJuEhR",
  "key25": "32SFxtwCiUCG1YgRuF3xeGshxb94NvyqzJanXtey1wgxvBe6dkV8Hte7vyR6N5PG8f9iyZ1KT6Lgfr18KZQKbH2L"
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
