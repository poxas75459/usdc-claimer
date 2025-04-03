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
    "J7DYrNMuQMByCWcLVJmnzwVAm2Lb19xUyPrFri23DGPy7WY17RKc2spMC7YwBQeapZP7zJjDZa1a6Wpzj37Czkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jkbkEhMjWZzZg9LQg7Rw4wDT9k3Z8TFymJvuZqAi6jsUzQ9fkFUwPQrLn3JALzGWsj76vJQiSoBzjBNzXFxvRSD",
  "key1": "52i84BHWw2KPRYoNMwML4aTUJ9LAXAC9nBzYKnXsoWWphCXNQAtisv8gynTPeHkEWmvFcv3UeABeLmcuw7yTePsf",
  "key2": "washR65YRbvRDSsd53c48oyfHADyCGxZbuVwr7uwjdxTWK6fihvESxokf5v2yH2fZpKBeERC9RPW8FjuFbgnNTE",
  "key3": "gDS86nygQfHt4Jof2WvFRDs9JucKSdpujBpTAzoi2vKNeobnvUnPTwEupkR5Th52ob7TrpPac2tDbwuHThKZfeg",
  "key4": "9XqRQdLoLbijgRoyhwFWvuxC5rjhTwEt8GXgwVUnkgC3ABSyMdBknDS52RpruLRSfQgMiDNL2FHwZ1hsAaZcZWT",
  "key5": "2bVmkqAKRAbGXWHQ8AXELuLDLuUDTR57mVakg2KJ8vEjFJ9AwgzRoGE3jbVYughm6wCgKHhSM8NWFPoR2mh2jt9E",
  "key6": "xJnCqhbPfPGRpuWSdkgrCQVW9981heQiHYxFiR3LTFSeapoaqcneoNhk1DDyMFmFD4iuz5cW2PSS1XNw3bGhnuQ",
  "key7": "2W8p6rQRhUqfL3zLGysEP9FgrvfS9GFdR31hYWoLJy1xajhnyeboh8usRDyEKu48Qs8rW16uoGMjiLMbz4WrvkNo",
  "key8": "4WFmoxfkHAsabeXNMvU2tsFxZFRY4kjuz7YfKuTDJ8dG3qsXVKD4MkLCj1psTg3Kscu62jwHmUqk8BgyZsCJZ9zG",
  "key9": "5iYPSFbswrZiLYwwkYf8mWjT1a1wxxXXBXVD77Kf4qZdQejGQrjkonoaypd8ZKUfKid2gSxDn2pTo6DH9YpXyr3J",
  "key10": "5sRgZL1EGofwLAY8A8fh6dkm6VNRjCQesua4FZaoRWtpGswoXLVvZdbcYno4VjjmnPL9VR6Bouw6RM1x8PkbQihm",
  "key11": "51N7GkMvrF4Z8LWEBDJYxqs2QvynLZeh9DAgzF4iD8JHKEUhyh36cMWuM9JmvPxRXBTEtmXGkR9Gcb7x8N84xTWU",
  "key12": "3NFF66uZrnNf5VosKJ21VPrEYif4g1gbsEwyvnw4VAJ7AakGkJFm85fewpYcv92WEbLUoKKYxEF1G4YkTpXskaWm",
  "key13": "5wyzQrdWq36XA7ARCtytiZnDHbR3spQVjKMC2KEt36wcrpGMvr9b6HuG8Q3PbzSCC94zFNVNUknDB9Y3iWtgP75J",
  "key14": "4V5tceVDoNf7rn8Hqa721ufxvNKS55wN4PuzPBKHe9sk9PsLeByknasWPHjLipWViD727rEJMtp85uCXbohgJKvm",
  "key15": "5AYf98sqLHEnnZEYf2aWxRuFC6tHzSToj2mwQhnAXpMih2Um3x66zv49xpy3dKAk5YeYbtMdTo19oGicKhxFuQJ3",
  "key16": "5pEKucwxiKXpx2VNiK6mK4cLQLpZ5XJiCDAGURNWGAxAmfdFnBXFz7kAEgynPrcHUbFxaJ5dNRcn1KVefLxd4xhb",
  "key17": "2VkkDuLYr6gVBP7XEUtxfv2Ycx4YA8Waug9XnvkeCPxNsw6yTopUTt55zcjtjfF7SZWGVaCYsN9Drncsh6FEncsf",
  "key18": "65wuHRrU1Xt5L8Pt3iiZ6yCtFyRHYwygDeYbmwAqv19rQ1bX1TRSrctP8n6wsqj9CpasL5MW99jPRyAVRuQxatB1",
  "key19": "Bk9pRLfXE5fNDuujkKMr6xVWs6y2cDMbsGWB147KbVxcZSy6YTooHxuvNyaNffUAipZ13rwNXPPn9YvQau5CJ6M",
  "key20": "4uaZf3AiHQhaU7y5iNG62u4vDKuod8iugMJAVdHharrXN5D8PudbLTALfYi4hsMkYztUvKahbQADsPQz957ppuZa",
  "key21": "52ttwJdCgZ5FtQMuSS2TYh1zf5MmToesXTMEkQwiGwC3VkemCgDVpW58MRVCqCk5knhPT6m6kahRv1wsUDD8hTmK",
  "key22": "4QK11adTPGKqnA82V21e9ZgzT7AY9QUabshUePggQ3Ef2kVYkLHDUeyjQttyEyFNKmLSbikCfp2Kazup38yCH6cr",
  "key23": "oUJfRwbQ425UT3ptnA7mDQ6dSAZ39XF7ih41sXEjEwQ6KAPmNhsdfzPHjxKVrk6UZ6XrADo6M1zGeqK1bqNPFgj",
  "key24": "2a8G4GedK2cubyMNTVMPTAJKqHQt53LD95jNC5xhrLyBnpjYKqAqFC2jGEyXg3QqwU7XiRJz6dgJUXRXkHP8V9sm"
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
