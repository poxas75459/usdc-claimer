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
    "2QQEUbydoFYiqBivQDsojA733vwXV6PRJXwSnnGsQYpQsKuUUf77J3jQnnvGvPTFSZ71uSYVLEbfcAjFaxcArxKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UVgcyxtQvMtcLHvfnvQNGzrd9zoArtNX6igvDNJTFNibts56aZc9ndATZqHaqP8VtSSznckAqar9GdFuQ3yb2XE",
  "key1": "3NcvETBx4z5bxXWDbuEotuKMyoHQmns2FkkXsQ8kFaSNryGGeBimSFhzBU2PcLAiDoEsnVHa3Nk7hgM2UyEtCjoz",
  "key2": "53DDAoMy6CYDvVwRWrn4kPLSqDoT1Jf4TnGVnGenChh1rod8yX72Ft7aNHnUD8c71cVRCiyT1EJEQ93BStupzPWF",
  "key3": "2jftQgJUUrDsKgFd89xEp8vxCtZojbj1TngxRhL5WYk5d2eVPg98vmJBMmRQNySSt8W2prDDETrTqRKSJCFL17Sg",
  "key4": "2uPYcz6DsPV2MutnfpQ6bUecnjYuPnSHrPDeykPAb4wd6usPeQnHpmeAFxe5WQL5ATU77TzNLFEiUnuD5ryzxnyV",
  "key5": "2x3VbJRdVgCcAEEszG7VG8SR2Kma4eHaXwJ6Qxe1bU32KiMA6nkEhFZHXEgoEgbNCKKMhJMpdW1ctvo9pSVxPXdb",
  "key6": "Sa5HSGVMrFp6PjYbeRviEXRRkBabsp7jfsnw2F1y11BqheY9t1CHAwch1HRHTkRgxWHcxAbV14NYZs5pS5LwGF4",
  "key7": "35Pf1TiLXR9srqDas65WMqkmm6u9ytTUvGNj9kD5cq1E7puGe35s8tdkctWhn2uJz38bHQhzsQHk3K9DrnAUoL5a",
  "key8": "4Ao2KGBD4gqqDtK7XBaSzaihoyBGMU6t9Uu7uc8fSiVXUnUtoT16QkV2QuRmcxjrJcoFBaWwWTWGphULsPk3WREB",
  "key9": "2aWTdhfAtZDvDExGugrEu1m42ms66aR8b8U5bCUYC4vYrrs3yoTxbUB17vhBKtG575ihgw9y1LMGdj8LgvMXoNoQ",
  "key10": "55Nfd9iZvi9hNpJHr4UmqtxKccGomfEyqCvTvmWUGrFNjj831wv2GKSWcpFARrnrJu9swdGwpNSHYe6QZSPWRKox",
  "key11": "v3NGkHZYoPQHcLyYhNLnWojAJGhatAntFw96TE7LP666CjuCWv9C2831sF7Z1cRQXKU4gwGZ44TPocHwYHJM6yW",
  "key12": "3x2VpVPTy2NHaSTNMJKBYDoFPLpfYDLPJLHFTS4CAdVGZg2Pmh54KwrJ7CHvvWZ8VH28K6A65KfUodWF7iBFwFFN",
  "key13": "FgButigaGZ9aEkxd2mXZ4cXpWRe3CQ4Brrjm9JJTdbA3W1HzoxeW2vtgfshMxfmi8Fpb4dzpchfXKUkLaNv762u",
  "key14": "3wGVQPJLokY7Vnf7f8RhvoSFvyayP1SVNXLgsU7bxrQArU56ESPuvY1dymnHEZnbcj2ds5wnMyh34i5NQa2c3q3y",
  "key15": "5Mj7UDQQzrEPwXg2vJpqfdJLrJkJMMwQkuYjcb9VAJ7rnSLHiaXXDT9DHqLkPGJ9nfhEdsx4uTGamAyzX2bkM6F1",
  "key16": "4dUcdCDv89qSR4rpBKR6gWeqJXo5tE7D7HUdVuFy3H7anJ9tT7VZBwDJdF6GzrNy1NiJQEKURCoCKrfaAqWbeRdS",
  "key17": "4k5jzvwCBZsvuvxeHpDQSTMReXWgpCsoK5ku3BMpgXJrJ6uBaFsUDb3SPZ52K4t75BY3c8AMyJy14Mot2o4XC8oq",
  "key18": "UP6n4CZG848AmXfu7NqYXz4ANnYcdWfSq1KAkdR2jMUCthCCGnr5ZZB7mWGPAMWudgVfnd2qtJoA9TNcn2Z4uUc",
  "key19": "3e4zqwC3pCTeTYYVVCYqRq81oJ7K7Yym72Qdw3b1dVgLewgopXti5cj4Y3Mxm35wWvHtr6YadtpLV8VatkKA6FGc",
  "key20": "5PJWybSuWKoYP4BPpyyKPVg4uU2RQU7P3oSaFJ4b8pNxWXhWBUpQ7zJhAezN3UsGmjnQQKospzZCvzC5sSBFyYc9",
  "key21": "5YiAw1S4zh8ax7Z7v125EZ9W5oAjg7SSCv9U6Y59HkvtjV46bB5A82r5VRoytgX8FMweYG9TUHbVKG1bVQ6exaZD",
  "key22": "2CuD46R5FFFArGezxZ2eBPftzg7go7nTmhAi7x99infmXTCsZ1rcXeUA2KdfuS3TBEBdz1iVQXC1eHvmMnNJKjtd",
  "key23": "5EJ8QEPmpeRy8yGMMzMeimyiaBYhQT2JbxRBnZ6UMSqn4ecAYLZssF52d5FJhtrooE6YjMKVjEprYuQsUYv3MeWz",
  "key24": "5nntR3bYC6EFMCCqyVCPu2KrkKGmgjwQtMxZ2tTkfoyCUn2egchS3JQuth5Egwjys1HxTrM1wxpRiuEsgV5fPBTA",
  "key25": "ZHbZLcFPCfRb11PwwWarmNRVkJzx1rjrK2AzQ7CxAH32aBz5HpbA5ciTqKRn6qn1n4M1TTrHJp8xHw7KFXjMzhD",
  "key26": "534Waw7AvNB4gFs7VmQp2YXCNBShfZruarYSbfqPWL7PRySJkH61xm61HtTeNLdvHfo4hqJ1h58GyY6wPt2o4M2c",
  "key27": "GmB2cphGi5rBamYAbo7t3U2AamQvwtiCsEaSLPivJGuuLFf9sx6ZamUgHcHmdp3tr2rJ2WNcnTEtNg8MC8RsfXj",
  "key28": "56ucmKExhrmDnySiuLqhZp96zbjUe9ccy6wQJrFoob2U3cLnf51H86Cw8LWkvTmf9nuDgGV5DGtQuBHSzUdMYyp5",
  "key29": "3T1VF5gntwKsEVQvQWQKjNFYZ1ejyaheKwBFXZyY45qHczmcTs6rWNgEYK9XNRiBFwwHTdyMmqKJvQoyjmWocsaQ",
  "key30": "52DQJhf4YrCH2HsSM15kU3VBa4sCB3qYG3mCS1w2bcbLPLds1Y5KioeBMRHN5U1H8ciWMt3TVaQ81R27DUPPE9kH",
  "key31": "4rW8PUZHZHYRnEyuK3rQeFHiPnswZk8ssS31uwXuMGJzxeD258P7UMhXb8Hfkkg72PXDFQdR1xJjVj9VNTBjbqx5",
  "key32": "2ya9WdNUyxKgJtP7czmdQGxjYnLUors8k2RaMDYAaMwrvefNECATymdYArvdHT2gCnrukPewzCHTqTjXvXP6CRRx"
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
