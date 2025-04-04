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
    "qFjaggAi4vZdcY2uVozgZvXBSHThBmcUeFvTAbYTchYvM9gYaVi7dSUUZ8NcbidixJiUCQV6PRjyeZdpr9enhYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcwuqFTT4phsuf74RJjjmm2B93a9eJQUMk4w3EY7XQfP7fVPHvtcAEU3LuUBivRdhW9shVxPsNN2jTxbcnrt9oW",
  "key1": "5aVWU9wpGfWVdeYwQwba3oqtKvwhxqmbuqAJCSAyT9i8pXZQSEBKDxMkxfSmdo36to1WdXoeN57tQfqaChubL5Ej",
  "key2": "5pnDdJUBuqME845VjsruZNAtbM6dxqVkTRXbxFP1R5YqDfzg7rdYGwJBNuAct6F2Npks5Njo4tH4GMLKJ463kXVY",
  "key3": "4KUdSq6XQXLRJA6nLQdv39Hb4taz6t3A2fZT2rjsaNNnV5FAfbECstzud1TVAog3Y1pyHKgt6gjNVP4fTgUQiTJA",
  "key4": "3XTJ2ECy4egH3RYczAanog5gUzcjkMv9sQQFHgqTgeZ1kUo5uh92Uh4RYeV5Sn2PQ1uzZf9Af8PrayvUF57MmqnV",
  "key5": "6ipzppP28WGyminzNcZbvV2EedfpGi1K6aE67rbGmVKM11bLD7ne4EdXnuDzCRCdtS7AC1xcAxHnx8B5WVBMTgu",
  "key6": "7qrihNFKnR81wnZqVhgLL8vKzCJyna4G9jwW8domnq8zkMWeeK2Ruk1p6dbiwAusRj4bkuKyQE8dCT1BK5wHvUz",
  "key7": "51AKWDCFv564PT9gLhNQDbTibaZSYJqebjLEBqhx4AmGFdq56AC9g2TGRoChhFvGGvpFQuge1KFpWxNXxgdDWAzt",
  "key8": "3L35gbnkHW94tNJZDa4q6q1VY4rU8WDZYXXJymQs1bDADwVd1cbYGvbpUrEwcdb8jC2USNXiJgEJCStoJfG826Hj",
  "key9": "23Bt6BU848csSt7irYMkgjJxSL6ftWtqQvfeG43W7X4HuQuhKbTp8Ai8PZf2hgq3FvouUesqgSd4RgmbZ5UAH3Gh",
  "key10": "54NPU9i1dnqwpfbn7gYiGuPmX8g43ELkaVjpK8gbxtgVSyarR3pDjZCdbyv5zyhrAsLv51BwkMam9aSCP6JiH6pQ",
  "key11": "5jez92FywAxq2Wy725eBkpGTbf69E9in7c1bVhWNXG5mwLXA7w8r9gQgSxfbWMDhrVUydzAEeis43jkn6NLPAWsb",
  "key12": "3Bq2mMRBL1BcNQEd5WfU1g897UTaPKh7tBWNTX6id3FAy25n3cNnUb6apgGKsceoUPkTrEWYuBxBvaoq6sqKwU3Y",
  "key13": "2Fbjy1J8UmoQntyzXSWW9pRp5khtL8qDhc2ZJ5eFCqnMK8AZ8vogdMxLyV6Ei5iJnD4bWhddbQdH92XVVyJwXCqu",
  "key14": "3hs1Vn1Vxf77Q9suLHxiXrM16sLBc6hhkms1f7fhrmzCEPGcNzd7GmWbKCHGxWQjj1nJZGTnVJhRuft2md7Q1gov",
  "key15": "5QE73TeqnP7eegxW3AAyDm8xjPieWqWjNGpiVLFoHAGKpjVrjMxiZAf6dLhuoiQJvNyWuu9jx1ZWynXdeQQ5jghV",
  "key16": "N1c8PuB8DERFk5nHkeqPPTA4B7iAnhiUa5eGoeoGqgHMjnbKN1Jmz3FMBMGYFAZtqcqZtXWCcaUDvzQqVpL9pUm",
  "key17": "61gy5UwcKodk6Km7mnSexYexjDPHUTtHnMzyThJqdhedbJL7dKHG5XBSCgdT34rmxUX2vChQzGXfmeH1KmrTQUVQ",
  "key18": "5HV3JewoQvt2LPSU3LPbsojbrL5vyjiE6uJhxXviZCdRA5iKJxbVG6GasfF71jK3FtScd2JKVV53ZzXu2yR78zw",
  "key19": "2kqLgoxm9bcF5LrDytdxgxQpeZh4mxfZbtYq8hDogLyh7K7uE9BHcFEtbYtKqknkpkq5a7PnwnP6TZo9NTvhQvLo",
  "key20": "2J6ycRhVKkDAoFdNxfu34SCaNg5iTb7p6HSwSwYgbpmYeo7Afed97J65LTfLVGDTrAv9Lan4GDWNk2fewvmLE5mh",
  "key21": "4qpU7LiJut38zuh6cEhTwyDavLcYCPuJG9dxpkK8Wm8tKC5ackjZK6E6tMRVDQsx3XruL9wGkWLHNDJWccZa17sQ",
  "key22": "2irxGPFBMDxEphF34tEH5UASBbGtx5PVMLoSa4ofJDcUAj4na4mkAukP6X86J6rbvBMbnbDKtvJoywHzPcRznsgR",
  "key23": "5ifgywC1xv6VChpxEF7gnwdvBwu93HDoFUHQTSXgxsZWmW8bvRZ1KbpawQnRX4nUqVsAQJgyNEFum4ijmumXENfd",
  "key24": "P6PJ132ZAkTcjdCBU4xq54Xw7yFMPStf6RdRwjTgT7mTn917GCJUAq7bgSBtj1bPgnHGFJvx1u6htMGaHYrZE2V",
  "key25": "5kZd5numdJCrAUoc3FckoNmnPUcwzTXarQ4TzH8Bu8RmhefCbqesC2g2ms1sstErJqVWDAy3NeEdAcAynDQGuwdb",
  "key26": "4GkyvJUaCdNCwQrXawShkvrdZViAqyyXrj2Cey44fTSkuDv9vApK1ctft8TapQnbeJNz2H62rW3hpvL5teBtpu4j",
  "key27": "3GzrFSXLzLALDYKFRdviVXxerLFmtnrFAU2MBFP2R3sAot5AiT551YuUR5yhX227Y9kDo1f94rcbHSeXVJHB3R2h",
  "key28": "FYQWYfDyAUnbvZL54PVe95mfhKEwvKLgLpNDNY7Y9kQH1KUwBoVyZnqE9Pswk6C5Nz3gYN5B1Eza4ofuLv68pnC",
  "key29": "2gF6YWh5wfMHNxxe166aSSTwF3Vg3SVutxzhnVjq4SBDWBGHTMNPHykSxEe6RgRzS5BmHkxnsRBkuUfc2yj9Wdds",
  "key30": "4RXom15FJSQvgkRp2ByVKpB8L5Wyh4yxpPQgZoQiufCQJjaxA8uHmt2rXzuMvyZNTo4hz2GM7nP88o8uMKhBZCRx",
  "key31": "3vHnemV8CW6mjE8Tr2jYHsddkQNVQiWNE5KcZB111USScyFNBuZ75cjjeUxVGfq7juSUvwMTgF8UDARmSzBcyf24",
  "key32": "2HnY6fBEjwnYuAGT2tTvEPV6me9JYQE5VL4ziYTrWiM7zyYb3BfL4ax3dWSQnc7RzZf3Yxeu13njLJxzs5s2b92G",
  "key33": "61MriEPh24Hckm1xtpEi8T8VikCqc1gxfkVEuQAZcar9va2t7cTFAVbGiSx8BxRStkKHzNMt4YnWMm78fW9bFws4",
  "key34": "3zktcxxDSo8jKijUjV496FyPBiE5zoKXGhAG3kXZNjoEMuZjNcZ5v2VAhcgcY3jxjiNnLPRG1dCEmKQcE8AERpfv",
  "key35": "4mjPd7WDJZufxxmxAmsCe7owhC2AXwnZfmSWVuoc1uz4dTpvvu6mFRaFbxiKduH4WzygB8paNVETag4SpKRdosPy"
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
