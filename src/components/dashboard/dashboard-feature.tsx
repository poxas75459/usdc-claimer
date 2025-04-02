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
    "5ScB9tCxdUWVw4zxBJeXM74ZPZ6Ex4JeGkDsE2EdUgna9g3uMesxYPJDBhv74CcrtQfGG2JWBwkqNdNkKQQazimZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xin94QeGbiWxo29NdCNtNbns1kYNus7ETyxUJRR1MPA2X5prnUWdgVRY49Ld4Vd1RRiFKFyGrY6o8nwmHJ63uEs",
  "key1": "3qB4KXUvXTN44U2QQgjc1J5gA1cMCkBiEozrf58preFGes8MAUfDvVr3Y7ce21UyHAm1SrubNUy2S1DouFNWTF3Z",
  "key2": "2xoDydzPZ8FoKDe4ACjpa9D1oWqRFsZNf8TCbVBEKEmygd2AJ5mqhtZW5yjTVZF5JbRjxADLqfXAeFyhvkwXXybU",
  "key3": "5FmtZ9298ReNPTYsjCciCwzgLxKNwKhQVd4a7ymujAg4YDPzYk6P5NUheuYuo3NBDPAvwGLenAHEYgjXrLRz4gRt",
  "key4": "5s7tkAGjb9gRHyAtQCfEQFRPifiFU2fK4p6iV1st3nr7u2ZvZpCr1xMXNUuny9RBp7YiwUYMWHxQpbpBTKbx4nHP",
  "key5": "3Cbe8uxy7g3yoWHgGmv5nib4uYRS93n7gzjCEidsPWDGaV11HuczsXfGkYjbqTfNrDecaL4wtjcCsccLQayEtyaG",
  "key6": "59KWn6hoQGPhL2h3nvCRUXYfGfpR1ENbq1MrdgsrASfkCG5pz9zfU9rSmR85gjSTkiFPmtMyM4jiGEwmxJq5snuf",
  "key7": "2QmbD6e9GtqfVjjWxPupfggQpspcHLDnJzndXQpC4qa5d2ME65j4yxMyGT2tH6dW69sR8WkBWVBCyXZMxToHiu67",
  "key8": "3MsiyuSmQGdJv8SQ1sAP4dsCHLw1FTNopVq9cutuxB6BZ7xcKVCQRaNA1HD5K72FKHsW4ZAJDJcG5sJMUfwv9cqf",
  "key9": "4rNQmbsYckkczon5MKHhqeqRAHekdpBuHmrv9Y44oDVwvckVWaGy6HDkt5kVcUoeUoVm8JcGjj4L1kPEnPQFmSmJ",
  "key10": "4C1dynpUWq4dQEHZHBB4EPz96VywxFoxJsy3J6QQB6JJsjumDZCbZqKQqHBxLysZ89W4gMF5E4eorGDn8enCHeMP",
  "key11": "2yjdThGwqtzQ3zhiKovR847iud7zWyja5jHPPAn32crHdA9vkeF96e5KV5EksMZ2P58JaQ8KcHJitJ5e8DqBcrje",
  "key12": "3gk51XXv3yN7BJeqUhMYrWtLhtj8jeXJ4KiQ8vwKT1xg1nR9v7RGGbc1jDrd8h2TtWoLwgaCZ8cuCXyiv8fqooy",
  "key13": "49qEF2xGyyQ1noLgMdMv59jkdvUXbpvxCMCssNRHyvdy3ko1f5qAkHEovDiu9ttAdY28E342Qi8mPoUff6ew4Skt",
  "key14": "4ryksJJATNdcnDtQXwD3ncKEzKA1X72ZuwCKumi8QRCPri9quEYcsGKmN8RaErECiUtf4rMhUcMqzEJJVyqHUGSS",
  "key15": "4R48UoQgPcutCqMvnKdDzC8XAqKuRCPAkjqeTx45ScBGQZt17kuwXrzpkFUfFivELifUABGpicooKNJXGHbmKsFd",
  "key16": "2TmWqUFVmEit3Br842EQPnbkgjPV16rWw8zhw4MimVYnypYJsc2yHWu6Wu2egUcJePRkGvzPz6d6xgBjNNZqoEge",
  "key17": "375UJthUFrn5R8WhrMyrU9uL3kYfJwKS4MAZirJ4N1MpWJCmkbxVQAUVL6ASK2V4XoRtGY6X6Uxknc1abx6FWpRY",
  "key18": "5PAanrWSq3MU9gLhHuRNfefrEmF8yRpXed5Nxk3qKv92TN9F1jWqkTfCVm8dMCJjrUXfDntQKUQw329HGeEWhv29",
  "key19": "KNJU8pSp9PhHpsHmU9L1PnqRsm9TKwnqEUTT9hFJBeyrb4a83ss8rNP9qzmNKTRBBTHsNrscoxLAKRbvHCAyipn",
  "key20": "3fuhFiSsZ7N58Ytfbw1wR23w8kL3kSkMtpctJ8krFLxj2BeMdC37MrrdjMd31wL1qb7RYG5ZLUJYJz1WZyNVKWLM",
  "key21": "49WL2XjsUPZ53GewnEtPMkURLXntYNaENhww5fqrEJ1n2mC172a9s5P6zAPrW2tqVSRVekLzd6w1eMGzxKi6tFZ1",
  "key22": "4A1DpDLV8ta768gM9DKNZCw4sbpjA6M99zf1BJUKaY9Y7PAmfrE3gkMyUmaJctkYqkmU6HVWRzA1K3AkJWeEkhB4",
  "key23": "2C43pVFS2Y5gbj8r5zP8g9hFBaNChiGVB37JfF4njs69Fqobift3BKvAXxWxehvmDSL6jxtcFwimkcCs5dhJxwfg",
  "key24": "4VhKfw7QvVKm15apCiACmYdyb1o8bGVMU5NZBMYEvMpUnSAuiaWZ3zQoxCNQQQAHTGYTGe6Uuefq7bnp91J1sg3Y",
  "key25": "4yCgy6pc13b7dMG9dnoSxALtJWxacFWyYbk9eJFjKQ5YUAfD5ApKf75M4LNBX89dUHJnNMrnDEKZ5xPhf1LZWzUy",
  "key26": "2iJSFK6jVpYqwEWMjkcZfrRurpgsXydW5HNxpjeoDRmGi5RC8oLp9i6CTpBp9rQUNWVuPmwGesJtkfyREF9BC1zB",
  "key27": "6cDGKBWE5uS1wsi8yxyJkt52juxRSZSUv1R8jW5eoikEVhiCQJipJcBbsJmMmPz4s5GJdRNPc2aExr3JwkPiZiP",
  "key28": "M3tXQ9QN7yV7ZVJ5QKcsT6ZKEBC6hMJmBTHnx6AokKu2qTMUGFLtb63sYkic8yBPcgoVs5EmmXWVZQP8u6prgsT",
  "key29": "2WLomVs5X8LFnUH6sNbsW6iyrY2h4bhHECZCVCN4owXz6fJNanmxKnMMLKMkYsfVPKACo3n4JWboVL8EDXtEGWPc",
  "key30": "2Yw93S8H7n5Bzs8Wc4eHraeisTNT767S2MR4TZGii7hpss83WhSarEXoQBMsdJ4TggzXR1fYYmTNYRYq7xHEfdC3",
  "key31": "4HQ9CF8wTBAxn2trugNTB1jPUf6L4kJZtAuVzM7pCg9o2axj5q4VJ9aVjRPkCCAb9j6nujopUXnHvvCNGWZewKa5",
  "key32": "2wqyMqb4skGyze7msVQCW2MhGkTT75x6CjbzT5ib17hjgzhuyd8avQ12FuiF6MHEYhZAiRe2rKooy7eDqtvVBqvV",
  "key33": "27mYvDMbNhfxs36F66jHiBx7FoNpyrWGoAKG1aZTsxYk6VkypAMfxa7gUiidfx6RP1p6eNnNPVk2HWHxnDJZdftG",
  "key34": "4vZxK7AQmuFHM3Hw1s5M52jdRn8Tjj5eofg52EgZs8CTQQnq1yQZfsFxaQGhx5VBSMCGBEtkNLxGmuiSHaXsKorC",
  "key35": "2FdQqxDCvoPtqdnAvQni1YTwmZn53L7eYU4iwrVL5XJDKiwSeGqKF8Dm7bPxPETV4dFLR8x1zQcdfNevUNtDNkhm",
  "key36": "5SCFKMgXeWuLjPveN4fSN6CwrVyqvcn4cR5uXgRrxL3JahL5ouiwo2ALFnBsTVU4EzYq7JSH7b15B99X8F9RTPc3"
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
