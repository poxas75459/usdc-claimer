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
    "4V1TrQVMHrDFZfzDcALkDtCjxh23TEmcEkQxVzTMj6zSAQXjKAtLpN19juej1UfhWQHjxiVT89WztCJDghHACPjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C6Ns33PhrqvskNwbC5AQkjtRux4ef4dGp4Gpqiq8LAHFgBZcuMYTLfYmQE3gMXJBAa8wD75mNLLhDqJY3AXMLL4",
  "key1": "FURbbFN4SzPxTYMyf7tcw3UuhbUG7UJxDQFthQgsM1N9EcKr5bX6nzjZfSDiZD4oudhD71RoLTBR2X3m3n4QmGe",
  "key2": "2qsoUpxGYhwTTwbt7JG8r4Q7SfnbvhNi8cKVFxnjwrvpWG2XhZq2JwbPPWRJnJ8SYqfzQJYty7WTkDEeqVPogmU4",
  "key3": "23stFoCuCJQDoDfA6bK8pvyCzweRy1QLq8qRhBc7TGg7rjcpxvLc5RtQkJBV7qjc5CD9eXMFYZKnNa5E5bZHLoQ9",
  "key4": "aJiyhjYaaB1t9nbMRCVSMWup2a8ioj1xEfN29k2JG6AsffkKFZoNhXRGAXbfNJizhAbBLqBqfHSvDRerps3Bg7F",
  "key5": "4RHRr3nPcwBYQgS2Z3PSTTDxpEPirfPjA5Qkfk8HLYdGUPT9mFieveJ2HPSSwzxSPXYA4bMRwuSdnKxBL6SLaxCi",
  "key6": "479fyzeoW7iDZ2iEWRTQTJ46eABeHAqUCWCVrtJ5XJSrGVpRTCZ5itrRoV2racCC7Xiq3ag8bBGPUJwoWhxo3dFX",
  "key7": "3fsfhZpw7tewcK94Ht2PvW8KQfmcfvE74N2YrxxBr2WxRkXNbPfcK3vnXg4upEpK2DAKKHWcNkNp2Xxhacvt4nMn",
  "key8": "2VMWnDxcemHCQNB8Ktp1et9WrjeB24D2oEa5HUBbMqVRTVFCsN6E7RFfdZ5dH67UoZuw3i3aZkYA4zRht2w8BQni",
  "key9": "5hGZzjTbVYPVH1fynaRrSu34tp2cBxuUjQgihPMJT7cVQL8KN7UeBFdv2sFbYEC9VmCaaieBVxa1CvGAeYHoBj7T",
  "key10": "3LSmYeBJAbVHhmJJyXBnMsh4VYvi4KPMECYBSFbPcD5eAoAj4Gr93iStGCFG5NcoczMpJWDac2QshdNPBnZL43Jp",
  "key11": "AjtcKnDKCNnSoTcPSUVd6cB4YHFQEVX6vidd6XSL6KF6uPcCjBUnqY464J41kK5CCoYeLYTe2DR8L8epDSBbuFh",
  "key12": "37fKh8c96fQTB6PSB87wWMuzfvf7BdJMWV7GwiTvbR4bDuWHnRNLVaseqMF3b1wtykawYXf9ngDwXPo2TCZ82TCc",
  "key13": "9scnGPV4VgAQk166FkDE6jGvAAvcSNjNP1wRUQ5QnHcc1R8Z5JPNHsiKKH92JxdSyxxuyTKRksc3gKjeawN7AbY",
  "key14": "4g5N96W5brFfzAMi3j2VZhnRLwnfS4Teky7Gzm9skayHFGYri4gBV5vJR2r26FKirhjwnsxwuqnCphNXFHnD1aEG",
  "key15": "63EJUSFqfYjmQnzAuPaXddXqoACP2H4HCsqRuaU4E7zRkehzz2ERDSSQPkz3SbZgEE9HAoiKBxk4fhNP93DJSAS4",
  "key16": "5gXkYnQ1Zg1ktCR5tEFCcXdhQcAM4WXzXkuy2MhwUX25qg6N5UJawmVfdMFxDLYcfyqT1ibwVvtJGv4dWA5Hgikj",
  "key17": "SUEY6hFKzqyCdfYe4WYvYSi1VzRPQbMTX9o6SFZ6iPdp1FG2AF4k8cyvx9FRWPx5Uh9yVxbsY2Q8Fp3GTYQb6eV",
  "key18": "3yYeSPmEZMqWcrNk9eNn9QzVP2nhc3GBpa2dT8oK2D1GnbxvP5Qvzhnso1gvUcr12saMuGGqBcBcxsgwWCQQgXDU",
  "key19": "i5ryemggGGih6BGsVmyqzDGtZYgWKp6o23y12mxbzCA2aBVYVeg7E1W3LBJWzPHPUDytf2kuNik72H45LwALc3e",
  "key20": "5KFsk587zb5Su9z56rdh7w8ywnafyN2iqDu979whGw9ifvHrQgAdbm742i9hSQ4nuKYbgCJzQwgTriXtQWhr8X4Q",
  "key21": "5NaLGZ3Tm829HRuU65wz8DuWo3PsPoy4ZZxQ6PXodP9dQFTDj3evqdMZddsuXRQVdT57J3PFvvknRPREbfosHqQc",
  "key22": "bb5rCeCrYpR4TY5UWBR2QsCbPSAEiVkQxEkfCFPiyZsMcxUAzogpjAHPGiqkURYirh9ajZMVf1bzSNypdz2XXtk",
  "key23": "5vubopL4jAj2meRLrT3o4K2NzUa2Zk68m5YTRyZ611TE3jk2SXDr133jVsmFckmLToBS8anJyLFQNL6gtdGYLS1B",
  "key24": "2jMTLJ5hPvwCShx6R52x1im6HmStKGdkj26mxFtW7eBwbTNB4c3cvEsepyENxQo4qaEF5JWMPZt48rFpLv7Hh217",
  "key25": "46FJSZSSKoPYg4652DSkeM65PKKaoQAQnGq4P8J9EzELDsSLc49otuWfXnmo5ff1CYhb1sk1NvwaUZNv4p7fWmnM",
  "key26": "2NwSGrRpomv47R83fsYbsRAspw3Rzup7CMS2Z3oEg1qpTW4ruWgV82sSRkPKbUw4iNNkGJ2a4Kdg5zVrpMmNUgBP",
  "key27": "XgMtC25cdEZuPrCFdspjQBLuCNiJgvdRCJf6w7Jwg6futDT7e7C4m6MCZGA3YnCvD7ASWp6bVE5VLyscdEzFJQc",
  "key28": "2Cw8jz88JJMigKhhW1biZxUWjgE3ZmHWnFn16iY8hMya9w8qAvEdeRBkfW5nHy3eJ5XXxaH4g9gKjSqKpzkEUbba",
  "key29": "3ssmDWmCYCfnt3KaJisDuwuEsjV1MKAUxMd1NCuL6wZ26veJa2WFAoRvcY6ovFGTU9b9qP8j53ygMqJV44v66eUj",
  "key30": "CCW9Mq4bX2YXi9PLE14ftmsYTYQbGgGcDuNp9gf28QcC7uGfXQnHSWf891KrEB8ukkBxNwnAj2GamoGH4UJZMHT"
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
