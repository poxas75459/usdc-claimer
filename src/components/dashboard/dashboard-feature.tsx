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
    "PvEyzjtMcRegszN4C24jmtkvLJyPsddSRRWVjst5xszdUr8QzFu7dQx1RV4hD8MbhGsaafzxfsPN1GorsReViwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gLLN1KH7mANfK8pBFWcQZWJk8aTpwoDD2WVXtysN2sCh12GikeDYNEbZB7WUpyWHX8deNWxwoWWxrJvMxMMVrne",
  "key1": "2kF2C6vyjkohQq2wxXPJpFkskVv9tdWuPTM5iuNbB8NEJkCrMmC1AVxcpSVHPaosAvBXEwLuiPPEFv1Deo52YB73",
  "key2": "28DXA8zcfXU5dDARsq6nXgSpP7oWJJ5FUn9eb1XFMNY4Nbz8DYnKR7i57nn5fVgVvkE9QMqDser41Pa6XWqy82e3",
  "key3": "3LZKNAkoMFD9ayPqioowV7CJuP2h6kuWmc2F5C1FVxJpdkq3zmJpA13B9J14S7ZZoyE4pcwLtvXUMkqrxhAUcA5u",
  "key4": "3WPE6HVVTJAgmfMiKinLUJjpFMPYJsBqEgoQeUveaKKFgb6fdLBvq9PwwEXYTCbprd3RNzbbktmLhqrVFpZE7EFQ",
  "key5": "2oHjWFJQGZ9AwTsDKSECQvxk1VdZgDex9A7QtxxDJ4yUgLxqLXeVNim5QeFZz5vPhXwfVBPj7tANFz4C43j4DmS5",
  "key6": "6tsoXtswEZN1wxiD8khh2jbB2Y33Mosa3woKkhy8YnkAFbTfho4GNUmnMBcnoSFeUUwusjBf3v9SuBHCzrqJEhj",
  "key7": "61HvYgBqcDwogoHBVdjv2N9PqCo2dFiy8B1GAarH7L7Rfkxkho9PUKrrkZ6Ayxbqg9kMtHXr9cg6wU8Y6erNp3Va",
  "key8": "5Be9K4UxNR3upXokEwGw9GtB29nCZ3tbsP9hSLEQ68pxZT2fpeMxqmAiFgDYqw1UxatNrWuGSeTtDUPzpvSs7UGg",
  "key9": "oAPua6c39YG79cSVZvcL2g9NLNX3dg7iUwjPgCFSoZxUorhhQ5FEGLz1ER8PnPv6xd6PazREaNswpu5rGCJwXDs",
  "key10": "2RJBJXLp5eM82LAkHYe98XEmbnLAmy6E5SDu5ecd2fWgbaZywoJETyfyvccWX48pPFy4XfMQVYsQWD1hn7zBuf4Q",
  "key11": "59LNt2d4mymH4DAJTg1CoNgChdajhih1TixAggCXCMogqy5akZLf3a7UukGDFJBRqsT9cqxMErDcdGA9Fp8Vtdfd",
  "key12": "2YNtKmB1Y7KfQX8kW2Gx5gKRfDCSbPi8vJjVEY9Mou2CHNv1aSY3jnKCF8c3mjo3oLHzYjMa2zztHspzT81hwaLY",
  "key13": "4SrVuF96eVSoETsnoC79216zFsG17tJjjsKmS5BK2iHWw32GUurK2LHJJJSP1Rg6fGifu6fTcD9kRCRjxmqKDf9X",
  "key14": "5KP622oiot1dtQrHKoth2dff6PxyJvmxF6hSgaegAhQwGckzEeS24eBwjJmkmpsfmzSYMx9XEaYSK5xm79EB2BeV",
  "key15": "3mvine8LSHseTq3owq5i4phiXLsPX7jFRyz6vHaHV9bcUH9TgsTx6p9t6fr4LSMDjNDQXqCsYd7QhyZXi1eEnn9v",
  "key16": "3ZAZrYnxxZZ4Zt9rJA9r5cfAvst4Hf1zTBrZxREBcdHRzkKeDWDqyXtNmMSAXJwAjqx2VDU1iuFHS5yheMSUBys6",
  "key17": "45r99tMKpPx2tq2AWk9t4zmxFxP9sXa8fbrbdxSA46jftgkUT5zTq3G7UjQCnLFUt2G3DsmS8GkUaFUsy2ZxPRYy",
  "key18": "4D3SDwoYGQwUyQHcx8dQXMETzigu26PYyE9rDNAgyKb2hC43JQxohDs7QJiq6PP5qB5buRC87Ns6mgEv4o6h1qm1",
  "key19": "2D1KFpNLs3awRoENqC7SScboux9K2zM3XS7kWfRHJEkQnvFzgBmTEN1BSL647JFb33HhrvDyQt14Q4AhcvCvRRRk",
  "key20": "2k1rxNXnSpyktPBJBfi8qQdqvk8MEGr8x7wNgZZEMmKKPf1h4pc5bakqktRRhXBDYQu9LXcUCQETEDfbxZRbahth",
  "key21": "5nnqmXvcercTB7JykkLtRFmLbX5WdaXXDGNejDrs7ykbFsiZDZsqQibGAxW5jYFn6ddQ7eKJJSMU6QW1u5bkrsTD",
  "key22": "3h6gWYaSDt6f2nCdWbLcgG7gXuPkxKaT7dJUCTJTHfz2YoBko3mPH4EmcnyEDMvg4RX5E1X9YwAbzFfPkNf8P7CZ",
  "key23": "4EkHeFA1jtETDFCCr8V9E4mYM5q6NseTsBUnjVDkycY4Ari8gE6gY8iuLKG2ZBZtbQVgmdS5jS6gwJsPQuH7dqEg",
  "key24": "2M6wLEh9A9ZkZwe8ui3KnRhrCJvrQNRsTJmg81gXBpCVdTQPn2rNSusJK6NR8DVCnXrmsuQjw4qEeyEXFZwJCs7u"
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
