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
    "22fpfen8PEN9dG5zZL9J9Uc3uXec9gSHYkV2htYwggHqzyUFxqXNRdxngsxM41eVMK9Kg9xeo3NLu9UDMYnvZuwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BwPXEUeiGoSSKGtank4qjmEk8HJhktUiaV37w3bx5zdX6GEhWgBntmDMAqgS58hJamfo1LdzrqcqM2sMeHhKoMw",
  "key1": "53jUZBhHzJysGewFt5G2UmepDSh4LcxyuxqqBsE9hkPX6PNTygiQM2f1g2ijW89CwDC2Fb67oTy16uK1GnYAMwPj",
  "key2": "gs6vaDa57rDi9T6vbPTjapxFr4fH9mvpr9c9kVUrFByXQaGWwGJnFa6b2ySojxeohJf8rZrtPBKiQPqSE52yE6z",
  "key3": "3vA8R1yg8mbEDqK3KWFy8hPJ7X1vDbvgcJKi9JcvN8xYvVFTzHVexSZXW32CeeoVYPHvkkVGBMgnfKCkQZ9kfwJE",
  "key4": "4mjKUBdaWy4iYNEhSV6mhNRyEFU9vXxH3dme3X3j73XCGeJ7vFMpdQUXwbgNK34iHEhSbYMgEMQDgqb6Hpeas61t",
  "key5": "NAVvbzk1x6MYE5334wgGNUuDRQ7HfwiSVDs6howFj7PYQDFKHjofFt663Wu4eH8FTkKede6UnDds8Jn5BWWvbLc",
  "key6": "3sfvLEeb4gGwW1kkrdA4Qu2bCowwMymcCXmtJqQWq42NCk488v4vcbdocD58UCNbBs1Ne6bHfuqjaEwdwCnHzKzo",
  "key7": "Z4jTcb2kEwX6Zu4XjBX1FAJDZXkGghie6tWTGMDEXL14GcF7xoFoWZ3XeaXLGeKngTD7Jgnf4DSjmzC845MkjPK",
  "key8": "jbtosq5WwEhBWfnhJehQCxD5KyCFDuRe4mN6nFwBnWDoU99MBxdkcpvBCxmyyMMPFhzgzv7JGwZ99aMa2oXvPfg",
  "key9": "2f2sFNKbc7hUUTP2vRWNKTh4iX3izi2wspmHFDDjazQ3L6LVDpEs56tmscmNxqDun2f8vh2pGfkMLyD5saayJ9sR",
  "key10": "3LTv5Km1A8TMU9jPBqi3dbBWQQUG844bEUPjt2Aox8SmQ5crxf3E4wo3uG73j2bo7Xk1mMVGZv3zrhoPtTwmmKPA",
  "key11": "2AjoE676x9dAsqqHjbCz429A2x9wKhNXR8dsCkZUYNm5UoL9yDXS2s5itUVw8wJ5BXYc9M6fhfQwnFKnFvjyoRaQ",
  "key12": "3KdDgeup6PNsfbhj6Kvi2PwA7C9BJoFqutqc6iSmBPLXHMyDPMSBUiHchJ6WdWKbMtWTiFhx5xWfDC84D9ko7iDj",
  "key13": "2AdzVZXGQVVmJDvM662LrKBAA9QbQv7nhySWDCWYbDBS4F1bPEfYieGr5CxD6oBPVHmqHeg6YxRjcaQNcwULRspf",
  "key14": "4uwFg2icqXReXuYAwakSiQw5Y4twSw3GYp4VLeTCXyVbkvffhhiMefAWW5tkhqLnncWQwUirPo54GoBJnzWpeqEC",
  "key15": "fvdWG8kUmzncFKYYvHgwP4uqvBRmLcoR397LV1yNURCbyjgZu6cLCaTzb3zMz4UZL9RfVd9UKJM2VDx6GGhZTwA",
  "key16": "HoEGvCifY4raBAeSkzjPzrwNvTLZXDf7QcNiq5JPBwqUkpQov9ejug5HpwiksewAfiK32BDhmetmnFh9xjJm6no",
  "key17": "58DgApDJSMQvctiibmttGtQGRhT7TZw6KkTpW6G378bj7PJbj9bS7DdbtLSSESW78w4zQvoUvm2DyfZ1qhKXxP5F",
  "key18": "z7UcyG6Nq9MHxR8H5c4MdLXzjE4dUyz3FzGWRKLvwPs6WVYVHdaSVsvThwz3ijmPQpZtsJ4aksgqkgfAM4z6kSM",
  "key19": "4phrbGPWenVh3JoaveMrUBzSofGST29g1uPFeMgTTGwhLsLQbkPvynBut5noAfL449coKVcYJ22jVCoCEvChL4RD",
  "key20": "QPDcipDfvg8hQ1Ek2sDFBRDMnAQqggwzCgZKZT8S4bHuZkq9jeitHNowMbu7iJT7dhYNaCuvVBKEK51fLaFEJcr",
  "key21": "3SooqAWMmNHwCRaGrvESqkLheugBU7iX8xh97mQh4SHLBWUh3jLKwg6BmBkuq2qVL795uakw4g7Bpn8pvmDUVLY6",
  "key22": "5eD5jWSoz4HxAc3wAnFxcnAs9rN1S5cz9Uu3YweDNYiEBp6jhyHQw5ZeGNwxkNSbgH6g96qoxccj5T5iZSsDHUvP",
  "key23": "24HkfNU9rPfYE6FPrmP3dnvcJbpNnyYvMG5LyXij2sf9jZNp6akTgJNChimAwgiAVpjQYS9huUTfauZBMspN67YJ",
  "key24": "3ifMgUx7qdAB2Nqwr1tP9bzAeCATc6ihixZGXT4MkawNdNwaiGFMtqMmrYWFWZp4Wdgh1uFP2dUseUrkDCNxy5g5",
  "key25": "3nBHNeWkT1YRBRjj6sYfBuwFvqnRgfgUGJNaZYe4whaExdmLrvKN9rkRkwQsUwZdf3yeXgGJCQXY6qzQWb4d9gYL",
  "key26": "5CcghdRsQVFVwVTcBpSQwKNgq14sKCekkqRcTPWQAwpF49UaeuUyapqwLLBSGNzFdWWPkszfp8oMsQmqFq5FmPBQ"
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
