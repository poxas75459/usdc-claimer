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
    "2X7Cueyau1gR6vzu52QZoakrpbmie87Wd3qKue1FkY9eTN8uzNNkA3mwcN6Xgj6CGvHaRa2i9amgYYksHJRCNSho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odMcWMgWUkCGtLXGGs1H135jHh5eMdKcaJbKXu5ZZK8HqPJLdPFqubcZStAxprbGngPCNWELBUPmPsjcKBgC7rQ",
  "key1": "qeiH7UP5rkStJSWAunRG5jCT1HW2nfYrA9k5goBVexi26Av5X3BRJQso73qZaFFFdX5wmukHYjhSGA4Rh4tgoWE",
  "key2": "5GiVeFquRCa9E9qW3N1dG2HU5Sd2bcgruEeNbJ5adkCGGeN2ry5M5nNmUPmPm968LzeUt1NJgFct6Lxc1Bwtx3aN",
  "key3": "291ocP2RwbWrRUnaPFG6HRp54VWZ5JCdKxHzu1UyTu6Q9Xmk2UT5hC6vvUP69Qk2EWTYDyAXV65TrCLnxKKSJYiE",
  "key4": "2chizg1BBENU39kHErvG8atswyEee9VqcAtBbdW2ZNPDdCXZobvgMNUyN1mEuruGCiiUDMQfstGVMDfJMdVHLaUQ",
  "key5": "5g2AxZFCKAQsrBx2DgLFaa6mqFhWnCrTtRL6WRkD91c3u9zktWhZCHMpVJ1QhFKsoBF3cvtRNZBbYDr7iyAUrqCF",
  "key6": "RU9WiFnduakKdxHmCQrPxRmQCHQd1E1BBbikwQH7qctBgyrGZVPmgoWgdL67cUf2jBN4Jhbt3nDT9qVnJYmg5d9",
  "key7": "5i94PjJVDqyCNe3ZopQy3VZyCRS4TRXwtkYa8VH5YFbykiLc2nkgthXzunh7MgBECXESrs1a8ciCxCMVdJGNxtnn",
  "key8": "5VhUjPMqyXpMEWcqBgn3XBpvQMZjd726r7HN61fnEzQwaRThS3c2sePeC9krCYLZjRUoJTnE84J3S1C34HtUkGrT",
  "key9": "jsbbKbjMnTZmpLbXJeHxtCd46abzenfwUduQUajkoGDNY7T41LVFBRNVcDSq1ozwnGqfwFNKy5TkzFTNHZYJT7b",
  "key10": "4Q7Cu1mn9b1sZU4HNaQp37TtyZpcH4pswpbWSoMvPizEw1zy41rEjbRkotoGJYf6wU7bEZVuHoqBEDHWkrQbiv3Z",
  "key11": "4u9NZTFKAFmhCDaRysTs2kk9bAzwyAFkGTVkS9xoj2DZdgVSaHHh7JnFbbVNpp6NLp1A5SfFsokqngds35FwXfJe",
  "key12": "2ciyV8EbPcsFvCvRLJ6P9rUJtspg7RsEUXD3TK8yi5SP9Lm4my1uMjvaJrnWpRbPKq7bZyThitijEVCsKfFoYktk",
  "key13": "1jSCbny3mctCDRHXz4QKtV5DxZQLahX17bMLGPxHfesHQ1pyyuu3rB7PAmgtU7napFLHXPZkVVeZwvxQgnYyn3z",
  "key14": "4EZVaEFL679d6ZhcY8V6N4WAq5yjJGo3wmjY4gXeQkpzLFNCB63Dso79WphuQeMNhvU31s3f31NMGz3tXurgm6iQ",
  "key15": "5rLTjeEk999X18sSP13EVuPnsuFebjd5xEBTk3p6aKxa8zPbiizfEdG6moe5MKR5UUC6d8jqjFY4f3tJuo4Jgyq3",
  "key16": "363p14FBYVJd8sMFBj7nX24CAE27bPbWdXG1SwtydEMzVV6gTjT9MbCQ27N2DCkSF4CErfRrSQ6MLJQANo94YYWy",
  "key17": "3rDAhgia3zH9cApjvA2s2qyJvLwxiQUw9g4E38dgpireyP4abRMzP4CrURLWu3fX9yCQUp6FwKDzguudMhEkmw2d",
  "key18": "zaU2UkKmbVNhiPWx4875ajfE1TP546Hu5GYaidiZ99ebyk9AaNrYHc2emqvx7kGPG7CMFroSirGsh44hLbM6p9x",
  "key19": "4DGv1GxXFWswDuXJqsAmyPYZBLxFybmRiBYkZLJKu4BwvVWEavrPWHijnDzAoGjGRNufxpU8ztTFiXZNMiqxRah5",
  "key20": "DEvobZkhXnrhiUqJs4QMUS1Dddg2PpRU1jVimjuH2E9mCCtY3BDUJvgys9BHV8x2CzmQprqkE2ksK234kMkENjV",
  "key21": "3M8VAJCVavLYyYs38qpR32XU8DxM4xHX6YKsovU25DHDR9eBRG6BbcaExWaoYFq257NMvH1M2GchUCVYbii5QFe5",
  "key22": "5UguRDvugY8WT3j3AzgGkqo4A1sSLgLurred3Qxrm1JLvcCp2rVHuuQJW4DumxEbBWzSvQ2V26qfMT4REYsUr5co",
  "key23": "3BcobMdowT1Hm1d6bnuaDoi1wVRESx9rdrEyx98RYLm5BLKdCj35KDXHXPbqT1ExsU5axrE5YtPPcRdkP25f8eQ5",
  "key24": "64x6XSxH2PejvcTJXj86mZrPsDoz88NJpwNJDcRfEbjyGp4sep4DE1f3qETvsD8iZiDcUWLBJSzXjAGmGQWrbD1D",
  "key25": "2EVHPrfeYijVbfmWXyeHtRRXdUrZAoVqJWXedPBeirwrBYjseon1Tty3DvXUKuuuRyznq1nzsCGHAcrwnwZ6LwA1",
  "key26": "4pNKWYNVrrexiPeSu3XS9eXgtNi5a4NHGbyDKeAQE38Gvi2zxZb2KY7GH7CnagdYCjNgE7Zuk5XVCfwT4LdnKkAH",
  "key27": "vUP3xkXf8gNvkgWcVXsHctzXw6ajRZtV2rofkfd5oWF73FDXSuPdDYo8Jd19szvcMPtZcqebjCMrtBP2vtNAYZF",
  "key28": "2aPbrn9NNCEftMFsUS4Hzmsccy8cXMG4edEU5LoffGzJtXmazPeoWFShNsrGdksHBPo93GiRbDAJRxp61tBKgfdB"
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
