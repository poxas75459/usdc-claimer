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
    "5e8KQFhAUid3ZxmaueMcFEDsoWEKBcjQNVh1dafaeh4m6BE2zxfHzMqcBXW5kg6Lu8b1HRBYxAR8o8XoepVgpYzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrTtFbHeYJtJiqbFkzpQZKViyLy2vgZCMqDB8BXH6Ad4eYUyZA62t3JyLSLpwrcMe91m65TtcQ4FjfMJEELUbwJ",
  "key1": "XGKACTeyjX9hKPvEaEmq6HVW2H3CpFXHPUSQVqp4HNxmxLxCqvhfH8YtfwoPbfPKhtXKabMDYwraxjVFUZG9LSW",
  "key2": "4A31LeQf74pXMXC1rY3RsvSrRh22cdeeYoK8dmckt5FcWBex4JZCwhfF4HAKTnwVFM3FUrgjz7t4ep1QxrC5jNyB",
  "key3": "44UEzCsJvuwchFtr9U7m3wyETVka7w59oBUcBfWgE79e36w7eLigK9C74nzT9Ezdyc2z7TY2kNRbPj4LMGziauSn",
  "key4": "5xsZysKncRzW3nZJPpMT4E5j9xaQXa2BiYiAspC9YSRvaJiNULzr7TMEuGzQetJQo2WH6taep6VhSZPuCWGZLR74",
  "key5": "32x9XqScvQFGRaF2c4k7uvByY7JF5DNvcioAJ3nw5DFoX575MR4mDdnv6X5C3F2awNbbxLRGVNSeEWHhcGt1RpAH",
  "key6": "DY1dbTxMeVLzuAsW3mTD9JM9jtkZcsdLZR1Sqp85mt4gUxxHxWdydf2e19dzzwAPgpqfuB6rpaSnmiSG1Mnbipn",
  "key7": "66LULh6Pb2MyxpwaVh9vfPy85AwsZzzciMaWr7ngpbSDSnDPxQ3oHA7dewNFa5VqodZ9dxQjvZQxf5PKY4HwC9Sg",
  "key8": "TLohZgBZspfQkNmYWmSB8mBrLqecST43YGV3knpdbUVb9raRyEokNRumiSHXTJ7Y2LMGigeGAvLFHGN3j5NbG7W",
  "key9": "22c5w4UNHnkMMmUV6jkvTS4m4b8yED5nWqsWgWRSiWTjwthkDV4p2W694yWqURYnzxSyoJ7Lsr5vz8gBT9jqJ2GN",
  "key10": "jU5XkJfB8gRnWE433ue7y2LuqzAhtLLf535ozA6ohPZbKMYy7BuadwtQSnDd72fx79F1faTVamczKjh2u7md1Be",
  "key11": "4CWbRbR4UgDtdxyZKkkasviTb3QdZS2XrC6BSuXkvZLZ4r1yTN2h1BE5X6d3hQwcHuyNhBhcdyXS17W4reoXSmxw",
  "key12": "38RDoYhmtq69XJikzKT4dbvMo2AeVzEAuXG34EvH2Rxcj8yDvENQ67f83bYz7GL3g7mZMJQPXoatuQ7msMVHcgaV",
  "key13": "EpaWBEmdwfjvC3N2RwDCCHBS1NGZPeWLYCJiUcncEetccsm89G7vpkC9iZbS76udE8d8apiu6JKgbr5CKJTkAAM",
  "key14": "21gdzYyTzSve9dJ41wprJjabXS3oTMafKU29EkvLJC3TXuHnTAsK95i3AkHux4wQr8bdbju9KHiP34U8c66pUUsN",
  "key15": "4xCbvtvDBD6e7TXVzqDL8yP3utu7fs4ZfXZnEHk8sYQzJ2GmQ87NDzH69Tph1Jy2NwLHuzzBNXcSjEQoLU7BsiEq",
  "key16": "2gu2DamAr4DNumJrqZV5y8Gi8DgCqTPA48CJpd7fAXDmzT8aFUM57CMRnqDoXUhumWJWtaqz8uemd1kirxjqpiyM",
  "key17": "4dvuVVj5V7NrGzc1suGwq2CEXhia1srSbUJvMZYoXeZ1tcNsVWMSuPRg87pRqMqLGBDoHtSAhC1caDNv2Dwud9wF",
  "key18": "ACX9GKb9YJoEJXstzmtqGJHh5JXP7Hft2dvVDrQ1PYQjNQngTvxMUvxJ9fGB4WhysdkZthf1HsNMA6WoweMxDSq",
  "key19": "51zYtH1EuL3DHXSFWcrmBLL3iQXQMj8EGvCHNx1G5LfmrDSBXYKKT758GiYzJpZeHk6zcSDSePHX3aeG74sVuQys",
  "key20": "QYfvHiFHDNVdxsBYMKgETALmHjsMdFhXQWwsuu2kRmuFZ7AQchq2h5rHCyYkzqWpWLAzjK1p6vFvKAcdPP1163y",
  "key21": "5ZkMDx3UBBREW8F8KPu7s8t1wsedZi9eQXpPaoXNgSi6jNCdXaSCJY6RafCv3rrEW1JDTrBYRQ8tm97taABffcYQ",
  "key22": "5X49DjuFWoFF3UcMVbkGrXBiSmj5Vq7R3VwWiLCeUoiRTkC6jEZ1Y14gBtZytfDYfmzPq7E4MitPWY1HyKGiKVU2",
  "key23": "5da8RtyGj28VBydwS68RsaT75jgDG7cgM4z4TnmXkvrmgKLH2THUXNzzoAEHq2r68zwUiMhbPwhaHUtSVGWaXVDn",
  "key24": "5Za8Sz2tRWDcKPfpEhbAZhbBtsLD3VXuhGkcgSGyyyaeSxX495X5iVXUdmBvqA7KhvhF7iYxP2y2HS7AuCKB593w",
  "key25": "4xwLRUeC3H98xXpy9jqCP7Q7x99nbCFG8sK4oAT9tnCsJrpA9Y8j1bs3gWucmYTgybkXJxnRvAdL1fcF1FVQrZF3",
  "key26": "2DdrqDsXroiYU5UrHtFiBCrCssqKWt8cNx1o6VjFAm77mvgXdwPxEFjub8nFJx1v66EJaa9wr6wvTyXt6ELPjkEj",
  "key27": "4xZey25vsixsCLYb9cRoSo1xRYV87uyCx6jaisVteddyYkT2MVr6MafWQATtN5FcVDxmtXWnWF8DvGa75SQZJume",
  "key28": "4sb7KBjQ5GwWXvyckGHrLEf7jxjSeQR3DWBHGyT3XEBmLeeW83o9nToJyvB7NjBf324jPQHF3tgs6CaJTzcxeyAb"
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
