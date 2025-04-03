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
    "4HBP4VoCV5Zca9pN2sM9Jj1MGbxtn3hPUVk4tGaE8cDhgTGKrAHZBmomxbWC57Jnz2ABhpebRcfgYnaaEPjxXMFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45d3FJ6v2NimXHYHRwWgLHweZJeu5zBHACbjAnk8UkeZfkmQGvxNZV92nX9q4djB9hn3KPMHRAU6mVjADPvTPdJH",
  "key1": "5r4ALDSsi2LU2Mn3PN9dhAFVWu5ZTaeCffC7vxP5cYQkZwfzze6Sxgr9oYbwFHtYTTBXHYcFiZBhi9JhPPFoCLZv",
  "key2": "2BQQrGX8GXSreFaSUFfniXRCfx1HVNE7AXZYRFjGBYgS7UVtuszxtkUVNzcmGwWaq6VYzcyEWRWydi8CjCZPxv7m",
  "key3": "5gfwQp9JbBwEfPvoU7TdPnYbwL4KbVNsb9mWUjSqWMJyx4dJ22fjSuUGL8uw4cahV3PaqfpYMuKDoMTLHkFAV3c1",
  "key4": "kxnjmibhhtKM5VsUcq7xdVARr5pFtSpe22Mw5XkYbcN6afozh1zE9bcmgrQnvdNjE1YPATK7hgSLfwuHwsXmbmp",
  "key5": "5hoLEWfurZ1ws7iWT5ZbA2Ws3vh3quArNfygXzEUUUacdF5pWpeQunXXM7jdVGaS3WCeTEzhiyeWTZJhxxWK6xHb",
  "key6": "3oQWer9iHPJpMyZfqjH9am7rDgsBWYTvkk4vJsrXncxgcGgnxTiZ67Myov8iw5G53h2unVJKg4eiivaivp92Tw8Q",
  "key7": "442GPtFYDK22QfTeJJddeJ1efwJGyF1DyA51WrXLVp7RoLHGu9wYjF4mBqxHStGsj8Tgq3M4h4YrpgxiLUsCFS8a",
  "key8": "3z7XfxzrGdubMzZyUmxT3JNf2nP56mo7EcSBpZkJJJKP25Q71nypu2UYQZ73qtJxEzqneHTtD3xM7hbgExUzcBij",
  "key9": "4evJ3ynqhEtZ7SggVWedkjyfHQ4eRz9ZaRgG8GKy8GbwYwKJrTXuzjRFASfVs1ihuvDY3DSk6cSzWkqPxcMbQ2hh",
  "key10": "36KeCwAzDhdJNq254ew57cmouM5AuKqDRhipTV8dRjWKTPoMXetn4VADaBAq2vRTm7s91KdC51XmgSFxuHsCLpC3",
  "key11": "3iTpZPUmTaRQmmamd4FY2mrXex1hF3maCHyQuShJBHnhsCFHDHv7Rto6UFMb5QiRvuzW89uNJEUcHjnP4GVk2SLr",
  "key12": "3MbrkhbeMe1qWSuiXWENxvYd4SgjmnmLyZKvHizuE6y5utArdzaSXFfHtV73rtfh9m7D6QyhDNyQdLak9vZ4jtcz",
  "key13": "2i4dHB7Y3xtQSgqRU7mE1khhArEC1JAu5EarXtELZadcZAfojjTWvGTcnuB3rohaJx8Qd68c4n1J1gHDgTLH4DMQ",
  "key14": "i68fw4z5XCLr49zbYu4jAXCjbzsUCwJXYm16QcCs5k5HmzKWRUf9FqMSNpWiFepMuNDB9BVyWHNXgdNVBPwqdS7",
  "key15": "3hg4jVqAzq4eZ8MbYayGvYNokhMyGCB2CiFASkgy4Hgfs8Y9H6PnXH8WziHdFUKJNnoHthx2vGrzff7EoHdGkBmg",
  "key16": "4FPAimU8ibTr4rBAP2RVL8M3FRo5tADdCr7nj8mrhwPFW3BCC5pMpUXRe88XtV7M9dwPan3SS9DK3soD2YS66ucL",
  "key17": "5sm1Tz6M1WBqgeJ9i1m7eEWyPZFvC94Eek5WYDmMNx1A1jq3ZLV2DMLEPjfAsqsTPCjvNT8tooJbR3YyasnhMJ9S",
  "key18": "2Zq9qhtgSeXty3YrRLoxE4Ky5PLPWYWRVESuBXGy3hYtfdwNfdUUsrkzK7LRKFxeiXgy2wUAHYaiHQkzN43TmPzk",
  "key19": "GMwpC6vkJ4cDqcpkNWADgKQtpb2H3R8aEupRCp1WEARHa6iiUqANEdest9nnyzPTxcMV6dcRs8VGPh15oc4L98U",
  "key20": "BxEECUMSswU2YJGnpfi7e7rk8tPwzJpfCSgDoAdQzjnPGr3gCEisbsJ7ykDhZAv2AgXCDx4ooejXADuw1KrzEMB",
  "key21": "Gro9gQmbr6o3NPUnYPddEd6XRPzzJy4LteBGxs624aZahg3NBd7TE9VvTxKNh5vVm8MVAkpJyHKcwbT9LjSGidu",
  "key22": "3pAvo14heLVDKPN4YPqqae1mXvZQNhTpkQnDSXKRNQ6LERHDA7E6zfCnyaXTD7q1qgWPLsAr549n4DR5scM3GREU",
  "key23": "A5JDxBeResL2mCJozRVFFuDcbaPbnMGEcn6Ed5BxXhHMjteNijziRtzDv5bjPEzmVT1js5TSDChM4kQx8upCCcS",
  "key24": "63YJXUECQhedsaX4BkAHwiobexQSnxWYB4CGzXvLJhhF2qxwmX5y63pv3KbM6JTe7GCEuYGwhmzNdfHxkp82RddT",
  "key25": "23QNzeMRJSbHjzm8YKsNCQEUEyx1ghKCR11HVZRALkRPq362XCZRvdBJ2RLZzUuybnug9JBFDwk1z8vSP5jDUwgF",
  "key26": "2jRwg34QURmhiSJGNKmNcvA1SKkXfqHqFN3aaqG9hgYVZ9a1ue4voFNKVu7QNKgu9fFCFM7ywEfQaSmSKTyqHWrd",
  "key27": "4cagqAzBL4hwS4oXgTKXAwT81bTFZPYbbYFdXyaayspW9wnkVz3Kovg9SNS1bwQtcYxj13uNN9AHa6F4LPMAiuHi",
  "key28": "v7kYuyDVcpUGAG5iKKYmzDhftAtSfXNk24jP9awUiyLawbKKWhv62TyyaHpQUijhaMkUXV3gvSUPsEwsqQHTSWD"
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
