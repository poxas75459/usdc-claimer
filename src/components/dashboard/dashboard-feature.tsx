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
    "2pXfRGDP7G91jToSh6V9hobZcKJscMQURtvmyZUhMnHnvcLHdw381QB1soa3dgpmm2gheWfEyR4vXzy83Gztbr5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zzQpTv74mkYS2hEptDgyj8KTNvtdfNfyKmV5VWt8YhugpBL6sbH3QLgZxsojSQpVKk9jEB7ebz2jCNhAWhW3VjQ",
  "key1": "4J5QhdHqgdrWb4yGzFAq7a8u9bFuyR9qH6ek9FnSUSbprby6aSAMdGtMztrWt7h11Ar6iJ3fbiNhQkudELLSeCSp",
  "key2": "NgnWb25wKFr7Z1DnJxPxeAjr4poJNzsNaK9v4R6YqkXfY6NvSJeiGV5ZMVrGoNuPDiyEcTiWzKemK41hVKmkmKK",
  "key3": "45UDKivvXUVfCN42stEonKFk6s21TPNX3yk7kaL3LfxWgudogkdcmAd8R9TBbr1dZXbSmmB3fve1BsCYdatKCq7N",
  "key4": "4crxB96gVoarrQrxKuHCfaDvsw7CZrbyCrHyW7xvXsrzh3QyBbt75ZPSpEMKnaYStxGEjvakXooimejDyv6yi1fs",
  "key5": "3MtYuDSZPzZTQPyp3eB4koC34qtEs7Xaq5JfTMuTCw2m1bHcn6G6zPxB83i5jSshtGYFyu12vugszN8M2MEnTxrc",
  "key6": "63YmQGmW75upyEbF3mn4ik8jxJZbMAQiLDepTumirRKNL4egdvpDUL2UvGkESodX6fNL5Z88GUJGcHhykVVyt15U",
  "key7": "MGaPsmD7XxF2bRAghJwM7isErYGsqUHdxGeohUuz62u68RsFivtGbj6KxdhSXUX6AMeoetnphPjPMDdcE47Mdbg",
  "key8": "49kxcNtYRbqL9N6L2XJvABpapYvVeJPFSpsxktj8r3hWr3rUW75j7fBfcjueVvQXVdGPFgrQKssJfS8GM6cgv6Uc",
  "key9": "MGuJomPUP5yiNDwcbUWNAzmeeYjGTqFEjgtGW3wgbHm3EhGGc24XxZTR474zjpqGZi5hBAomtFH5ATugHPHzYGh",
  "key10": "3GhiBfcGyF1GMMCJk8qY2DHbTGDLQRrxh4nVApYA1YQQB3ZrEhQbj1KQid4FZoUC1z7KhdPeF3rQAEQJHQ61VNzj",
  "key11": "3xmaMtJxSPu7w2wSEscnwxXfxQcprd1iTHMgD7MJtstouNgTwLUkXjxcuaa7Jb5WxKXNDdyd4Zwni1fE9ZYsdwDM",
  "key12": "47jKk1HzmqPdT5giBZ4C16xsi5Tbs6sXG5ArCTW9SjTMcdtWPG3D6KZM9N26JvvHSJJUS7ajkzXabrZa4GpwNRim",
  "key13": "2HPUszrjBiT1ySCjaJHoUW3vjDLEHxKm8Tyq65SYVxcEhudmtZcKAJgdn6hqMVXuLFa7dyc5MSwpsfkoddTTrsUB",
  "key14": "4ZyzkDMqFfr1ycqMVDPjJFV57wVeUtLTobY8vdzMp9RqKk3ABps1JxuhFzgqZ3JL4VTFuu2VhpyyR6M3nLoR9X6n",
  "key15": "qRgbJex2siqeDXpj4utuCbpm8AejYdfwpYeFEEsEqjy1xXxoXAeYqeA9AdnvjrFVLQUjYvThdQN6gfsVccvTy9z",
  "key16": "t12LupmRc5kgz7aKsDNcxBHWinoRvQv3U45utFTfU5rwbUyMptAfdQCotcSY85m9zsZhhs3JQiL7QtAkptXAENv",
  "key17": "3GXUhnAfYmx7tA83Vkuvc3RXfPT3njz5BHpwUcDHLkUUYV8FxaTn32WtEEjT1t2H3ivQLNSQP7CXdmbD2NAhQ6Tg",
  "key18": "ChD1HTCAi5FeuFiDexLX8Gbw196ySt1dddZVySHjL5XkTPMikTYWgZ9L3JHWrY4JYGE1NNffJ36F71JLz3yRyuK",
  "key19": "5doJ5YpN9WKmvVbmjUcw5Z9TSScNqeZPfM3HLUfL9sQcwBWHYKhCMmcE9uZ9p26oJLa1QPdsdPxjABQkchPnpcNg",
  "key20": "2GVD1DACDPcoFZEoQoVLgpFq3sMXXvSebN87r1PFycsEJVSjw74UibjkLL6w5ufrYTWwfV5Vr7QQs8TfSTWj95wY",
  "key21": "9o5aCDVYF5WBp2fLnYQNyvTrQQRRYXiw5BxfVg7AUTrno51FFQuA4Sk98oN3xb5hpRr6RGEVbuPyUoLAyZbRvew",
  "key22": "u2srHwqkX55kjwEr1DQMgJp9MKeJxMBbZJU9R1P3nxNY4kQ1gvrPwE2cswyZZSVtcvBGeZny3eFmaBKWULck4So",
  "key23": "4CV6DRci5q6zNKt7Y29yRRVkXJJpCgH4nUys7TfahD1GTfDMnKKB9jDPrs1PDcj7yBqtzRrwcfiq6H5hheboCq76",
  "key24": "xHq3LbcL8f2vHXGV5QYZmDJ5LvVQx1Hx5N38AH4VnyJyefw7QayhcqDT5AYjJ4N16KtBed9zPMRKx7MkT341RLR",
  "key25": "4b9fp45FPbewwAh1dKMWc2J92qamw9QRnDcZj2LgE5PbvwzbTRiP7CHHjiBTTrGByAWufMPrbGqTbQBLm8XEL8gX",
  "key26": "2o5M2odjw7CyeRzM5CwragRKcXEw55RUMNj3ztcRYHvy4jm1LH4sCJibkXtHQnAEsCC4Qq7NssJ7415DDFe1pf7M",
  "key27": "3kG5Ka4okF6HimMAhhxvVfLmwupkTuE917ypqrWAj4TFrh9stzwhLKSf44kKWRa9ZaELd3Q5QJwRvBQtNa8sFX1Q",
  "key28": "1fueC9Lxxq24Qu1d3ST14NJf9yhhstvzbjkwoNStBvAEatkcFycvAwkpB7JkqhGESQ9hJ6vkToprHqBHkkGsh8",
  "key29": "3zDNx3XixmBv1yt6yVL9DXA9qLJFf5Yw92xWvuJAuafGvh48JWVExFoTsJe6EFXaHGDQxp2Hq8NNR6bYXCcwPVpd",
  "key30": "PWCKLwhitJ3GBgefRWdpnfc5bDTB2eZv8oZku9aEVPvfE9JBKY3EE1pcC1YHAwBmQAniXri9ybmLGAM7ASSpsrF",
  "key31": "3NtQK8MSGipkPNzE5JkW1MotCDVKK8G56evY7pvJAN9i5VKuHAns3xDX3MwAZvF5rZs8LGZz3RXLLymhie8zfA3t",
  "key32": "4vptN96JBZicWSGQwBgqDk3UnFNVUtw7ZWvP97C1z7vLu53d2bYqPXBAp4p1GfNbeRCVpQ9bLLafcmXhLtXesFjD",
  "key33": "5c97u3FyStGR3RsoWkNiiENVjWMyjwhrTNennvBjVeJbb2S9kVwhhaNtwnvTAgpsxMyss7NGFqAiqwDVffvo722L",
  "key34": "4tpo5xXEsNPKMr6TEmV1BtgBDKeCdWUCQiyF4o5KgwJChGcNG5E5Q8KCPStagYa3mWq9BqFLcERZJSGkkC3f2W91"
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
