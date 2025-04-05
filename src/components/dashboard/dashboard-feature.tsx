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
    "yuEAFJSNPJpnevZcSc9oFt94oM23i3sJnQZqJVz9ogHx28bqmygtSGHay2SxcrbXfBuCSy8e2Mg7FhZE1tcdNxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wASyyhR5c9WGFYvQPk3g7g5N9CFTLxREJ248DEbwvHnX4oW3x7LPTyxWbwBt63KB7xcprnFDsuf3bPhyiXCVc5",
  "key1": "4trU2qApNJC268jfnNP6gButvaSu8mWerJs2WJDp5q8HEbqYvdvA9p7nT4AFdGaP1CkHmU2z6vci7v88tUyhpxuG",
  "key2": "5JvzavRkFcE5u2z5M4wGV7hLeJ6wwTLuc49BAfpEkUfU76dQ2MsxTtCXWXL9P2Fxy2Aa92AmrJpYwGTQFBYxawKa",
  "key3": "4HQHDBkFPf5s5h6UyoTdsSnomAfEaTCuqnjTrufE72xRSNibHFMTAFUVoL8JmqRBEYw1Vbz5Kk3jmsQgG3sC52eg",
  "key4": "4WkoPKb3H8agSa31fED67GqmAhUbPVTTHyc4bwDawnYfVxFQFoJLpSa3sP88V8RidvjQsjUqbB3VbcLUQazjz1Rg",
  "key5": "2PTRXEHoMNrmQm2UWtxci799wzF3WJRF5P6agCvZyYmuMN7qBEkCBNNXBeqRQtxrxCBhgWYLR7WuSexRu1ywQCjo",
  "key6": "5yA9mkKS5s9doapfy3tH876JpZZYjWSiyEZNF1LgAa4BLk5YFrVpLnx9okzmy3zA4Mq5j8mJ1gvCGZ1aWXPTfqMz",
  "key7": "4hBnp9JRAD6hpFcs8RfK8gHJoumLBzY9pKkzRwDyF945CWamtUmBFF4MdquVYTNHPxT5Ve8FkTRTE4dS722HYYKt",
  "key8": "3RQdd4mCUekN7Tvnr6ho1yT9oQ8nNMxfpJzhWS8p1AZYyCsRkVhjh1EVouPpAvDXAs8tUrWxJsw5acA6R8ZfmDZ5",
  "key9": "5PP2UFkSXNwdCjXwPP1xsjabz7nF4KcQNHedo26LN8affw6bdvtiGoD3ck1CLzdKaenyDJ3YeAcVLzkiAdzmcJ5d",
  "key10": "22Pzz7pizr3rsjoWybZwAi2A6BNCypqddMMicwXV9PCExHyvuiKdBAXPPsZP3HhxuDn1aUfPo3SvCFi3SB46mThe",
  "key11": "4zT7W4GYJLjppSJaZs8CKtovgGPXJfsffk8DmxNvM3xY3iK2jjKeuBXnzkZcqxbmtqFUsqAi43sViPHxeBfP2vGi",
  "key12": "3qWeyGMEdJZBfvPGHrokfKWT7c5ernb5GRGNET8U1byKK43jD5MwqUGf9WTcGEt41d1KWnRiqJF4zXVd8TiMy9iD",
  "key13": "3e5k6dsxMTL6wu2fwK7bRyEcWBXCLbzpE4QQYFGPNbV1frRSQ1vQg9VsAJfhfB8n81zWaAyZg6uaE4NAgktpB8iP",
  "key14": "3tK3yX7cm8oakV7FoYxL5CbRoqFerAPGCaAZ1uexGqazgrjB6Q1MUwfsNRpbpvBLz3kompAof82i1yMDDFLWpXfh",
  "key15": "4tZLnu7Xh8tFdifNroqkYYL49zcThY2VwNeGi6A1rc4JkgteqiBh5V97fWLdhLXLhtN17vHtJDxBvjV6VSpEY9hg",
  "key16": "2vmemHP37u9pos7xs6gEuhz7RUdzug87K3sNfNozxbNPKgQrAG2pescHLtZPdWZabCKYXKkRb4jSsDGS38JqxEdR",
  "key17": "2aB4zzqYWTBgu4rAxE3h6GnWrouJWTmU4PJoAEGLcNqr4Kdh5Zqj3ZGR6LJZSYDgWKaKPJtUiNxfgES8hLeyBLR1",
  "key18": "4yKZR3XgH9gvdb89su1CCpSnQzec9BbVqQjhX9tfW14wkQ7vywrESHYndZt2tDSTEfABFz8N8gBzsLTSBZpS1Ab8",
  "key19": "4D6PTuxTBHyw3W4UhPeESpHzn9Mc8nW8hQjDQcvcaUu2fCAX57a5844VrNzAF2r5y84QRrWQsHQYcnrVgSWGtHFo",
  "key20": "2CSFYHZ6nePcb6fXyp99fTvTYhtusqFXKpEJ7hgsyanB5L7yF1bNzExLBrVq4ERPFjHT7nG6ZfugfHSyStRZTJpU",
  "key21": "2A1gh4GqJtjypeafWZwWiCSmH4QUxhLB5zMtqD1CcvyLhzQshPL7uuugPv2sxARxr79LFnHt1jddbRZvJv5SYheo",
  "key22": "oDck9ZHSp5bvYCtDxfjmVqs6d7YjRwoW8xwN3kMA9RzgPRg3WucvTwTYWxSmuXkm1zPnW2npScyQLBhUctYMAXR",
  "key23": "4GwUKSxatFPXF4eZWQeoPpSizuUwedNed5fXV9FXCQHVrgHDCgvEyBEF8KpwGmJmAw9haV75vskb618LnKrkAhF6",
  "key24": "3wSvL2NEvSzFW7DciSCcATgkuSFyHMgrHHv9Y4aUnLVXnUrQRYFBzd3WPZMiCyHGGakHoh5h3nPL1BSH2YkDgCRn"
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
