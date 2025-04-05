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
    "Nzn4RRmv3cX7BExSv1RJvvYD2MicnAzHM37KcY9c5uAxJzhyyBF6xvdZf5wqe8jMUPXitGtdzijVkjhEYqRthWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmJTYNNCeobCgrJaz1KvSyzCFmpEc4Y3xdtX61r1yx1Gvc1tyKM68cRvy8FqFgG45Ka5GYbeniiv5tHixg5ePHD",
  "key1": "4QqQB8jEdygDwq9NGtHEbSXiEsF2fadjVbCgdnvVU6xBXaGp9LjbAB5SnZ6jGp652SDJ9WsK5STU7iXH7ng2KC2g",
  "key2": "4hZJYzK3mnzGE4sWzfC3LYziihdRbqZgN54eAJk7mng4oxvuZrzJeVWWdHHztvGJ1egGV5EZKjvsK1JwkB1d3uaZ",
  "key3": "65ysmUPRYnWdE1fN6QNafLQiwkHwxRATc84UQ2jbmF3YmJEVQfcVJcaAqHMSQ757cPDVAwx7iEQXuH6NeYctxYGH",
  "key4": "2AhoawTecN8UAzAY4qCN6n4HMvSBUfCd4rMrHpAC1rPptXNeuPeRevBp1UwkoocwzzAXUH1u8iRjSEeUd9HVdWDc",
  "key5": "3kpj9edWDERb1yZPR9xEq1ht7E6LNGwtsUprxYd6rFVC3gSVW6u5gxTxUjVK8LSxEKSF9JZKP6WFQNETBhEhDMEq",
  "key6": "3yd8Wes8qrY9dzzqtGHyyZUuRmTKibcJyzuyRe2ymhuDcFPK3MDqe6f4h2ddZ7j3TYAV2i9CxzMrUPCjEp7yfYRy",
  "key7": "2pYR8TbkuAFmUJLzwwyd17LsFaD3pLXrgv5U3H4Yr2m95YbxRkkvNuB3vtdf2dSBS2tfinfrtzwdDi4hic5CzQcL",
  "key8": "2tjefZkELEvgpPw6GcHmprLmR6f81epjhMyjs2Sg5kg2zfM2fdxSBF3v8VKrWYNiVVxByY2k7RXMSJ63ER9GyhsN",
  "key9": "HPgQVtnZLBqT4WssLxzd1HKxLLXBMhtz5G7Wa2WgxGRFfNKSft63LPqAMxaT9qBqFviBp115kvLkjHXyM6usojg",
  "key10": "5rzbchoJSJ9iagTiC7qp929xRsEczwnU1sPKA7coif6tkuUXSgwscTNHqBmNhNCqrVupAzwjcs5fSmneSeJymbnL",
  "key11": "2ZLFdaouMvNyXzhnHxWDxchEwnKPccmsxHLWMd2RXUC9w3oaxGVXLVHN9rvKhZid6KumPYV1eYfEp1CbzoXzWGXU",
  "key12": "4Kah5pNHpnkysJHs4XNKZUnUGKxEbroTktGJ2vh5YyGEKVon95UjMTxXrRsUih35Fc37vb4u6VaM3vK3LwDVgAoB",
  "key13": "4UwURj8t8BQciK7BWdTCMt4xHa3MR7NYTLAcbrUAqGTP2Hw9A1F2iA23isdmVDyUSdN4w62dC32toibx2htE6whH",
  "key14": "3FNph7bKFq4BuhHQi6eZ4khDuckiXWhHYbaGXM4x6ThyNgerpWVQ86oGsVthyFRpiQjCJwpqiw4VvdZMe1JeGfbX",
  "key15": "52zkRcTzi3CoGcaCpLFDfLz4zmchpzuUG5TidBnbnF1vH1HChqp4HVNSGd1Gv9vqg3Ud85TQ2CZ7fqEokdjt37G",
  "key16": "wcB2afARcxJbPNAzdFhUSDqC8HvFCqYntxSrEQQ1eqT1nW6cubnEEXLHjy6jQNGsWY1o3oQkt9rV4Y1JcpjtEoU",
  "key17": "2KLdYiqecgbgR86FtxkbED3r3hGDsMuvAd9kWn9Jg4skKg3aZmBf5ByAGgvYQ42zxuNsjBrcDDbHXfgXZoiuYu48",
  "key18": "3tRZPtkwYEobqLQjfsj6sanr69o1jiy4BjUN5dAJSChsTLUP5B6NvkevRqgDjg1EWm3H655DniqFrzLBbtsCVkmE",
  "key19": "rd3csv1HXrwcB1XAXiqv4sb3yuGzX5KnUQzFLnthBZFnx1hqJ4mQkvUAJhuePGsZi1tmTF5yfPobokaRsufatob",
  "key20": "2wPm7jwbbmjynNiVPnBjYzjCF6VAJ2paY8GDqUyrq6sZ84uwDuLqEHMUVE6p4YcYUCD8fjPA6J57dA86kJboA8aK",
  "key21": "2188KZZQyX11f1r7BLHm9CkU5Vx63MM4j175e1Kvomdh3LQjJDx3uVdH9YJvbGgiDuLpej5gvSYeaYXGgDAMSBB1",
  "key22": "2HyUR9FicbRAeeJA9goCe3TYVPBXK5HjGdksmsUAVawBd78sCAS5RBLypm8yyacAWFa5Bjy8ziGVgkR35L82zvzn",
  "key23": "4oCqRXpFpeoB4i5Du9b8XNgSn4E3Li9BCepmF7bGtznU7fhs5DjBLBYZ4Sq99RFUiVJuexbLeKbMUyLbjXGrE5g2",
  "key24": "4mX48w28SEwubYRHVHybQq487cM5rhyuSgcEJizY4kMxVxJzUYCpd3LNBJXjCwYvnU7JkheBFmqGc2MzwR26iRxZ"
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
