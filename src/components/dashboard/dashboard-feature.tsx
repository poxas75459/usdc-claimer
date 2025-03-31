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
    "SrwK43Mzv7KQWSACHvZ6BnzDZtHRjs1BDFiSMRLLBNpZDrCR1o3ZN9tyjgv5EVrag2C38DTduzGLYtBqPeg4xXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmWJQj2RD9qKbQMU6hHFBSbCsyyWypQx8x3qiWCEodMEppt63Ds9N8PTMQSJsEqCtxxtF3fuTgcdF3fAu1V75G1",
  "key1": "2f9cBaA3Xfa9cafvbrkvfEyrRu19BwAxxNEreSPHv8xGzhWDs3uyxW198huF9N5Z7trk5so4uF6o2UnmxScz6WEV",
  "key2": "LNDTMyJFaEHdmRuepUFLs7goYWBgCPrVuuw4JiQqSiTw7hPbRWDwBjHF9kUPFmYggqBvfpLt4hMqY1xEuXKzX4e",
  "key3": "3L8zqZczihNB7yjMrR5MJQYoafStr2o7uMmpKQRgkWVZZ86rdn7XavZCpuDTHJvvxZ5wN63rP4Yj4x6gz6YxzXUK",
  "key4": "5M95ndA3NDP7Wtdy5gxKTwwaEDZgnXioZdyJbPBrgNzjFrwZoZExQVVkewjEf6tR42vyFJqLzx8rtzz7b2C46N6p",
  "key5": "5ay87utBDDHbvaRWaVtkvgdRGfTdFHhqWSRKC91zrW1opZ3euX4r1URUNhZS7jNShvxTiYxtd6A5fb5REnyBzTyB",
  "key6": "5X6c9NthAtEy7q5zjouN7qCk3492CyLqZMCsfxvv6j5LP8akcrcY6AqnnfuBUGaaqdV3tVwvnrGPBureDeZWNMnT",
  "key7": "33rFHrahX1kiQvxqXMZBnMCugcw5zWrfYZvkFBJopRMEfm2CDvSvnXiEYp9mkK75Uhihdj2Bo3twcQ2cQGedjxyC",
  "key8": "23mCotATkUpcZhHw6Bh8psZxQmxXKAZYEaXhzT6HrwFng1ssEUSAdVc6WkkgDZowB1NjZ8qbpaxQbabPCHEErv9W",
  "key9": "41zuVPsoWR83FLALwrZwY2gxiDx127NaXtGskfRErH9wLdHnKhW44u1HBoqcNMkvV45ehc3hzeY9fNRycPo5ME5f",
  "key10": "L3LMuqKpoGCtDbxV4oDeVJRFYjYcc58yS4vNnqHmdMopoBmqBFHXt1bhfVFH9C5CkqYi3ZjRhKjS7oGe8RzY3An",
  "key11": "2ZSZBs1GsJpqkGxAr5SHNzX3vPB7mR2yKNFMFNQFuC7B9jpSCBgZZn7ruWoVALDfyxFtNveEsUf5vB8Z7PEiioQA",
  "key12": "s2vb6rhtzGLpECw2DGgq5dgKL3EAbkjLzYeRr7c28Ufc6GhPY6fKZJeswANvMqAGmtChPskDxsBPKopjmN1MYc1",
  "key13": "5LxEJcquTiUyFHYfMerjeKFHTePdvv4RZKQmzVx5b1VgV2UEcEvm7AU4KN2mJs6AjaYffrrm259LhtZ4p4TrhL8B",
  "key14": "65FjCqoj1ZxEq6kqT4FHbQ32vAjevovymr3x74XuRvA1dJdv19bbNNDVYENyVjr5d8Q83zYrNwJ1bRKmtxUB3V8R",
  "key15": "4QL7kSyzpXWjfZr6f7xnZYiG2XiDy5R4CD2pqDAnWszwpM9g69BphbgnkW2Lc5rgi3RBtPXUfu7onZcBeMKeVc61",
  "key16": "2oLZDLqbDBDCE9bnNBW2AAqsfetnPjTSFL2mdwxiuD6stbmKDdnUE1q9Uan7k4tcvv8DaKnAW7Dbu1AZkqV8cqYH",
  "key17": "3VMzMRUaxVVwmRrbzdWF2adbu4T4ZJkgeevCV69ngz7Co45RmuTs1erp1xWw4n2epgyvw7JMn3vnQwLrxzHnAgw2",
  "key18": "5YgiUYcMSn1dxbYa2kDGSz8xqZ5p6WG6kR3m4scqR5UUWWJdgTwD8ZrftrNsNi51uoQNQ6Y4faPKNoQCArpGaBpG",
  "key19": "4RYwZV66siWYA9kDBfnStFiqeV3WuPBQy8bKasq5DKoNVRbu9SS83kBrHxmKP47AXZUQYgpAimrDpkdXCmg4ZBDd",
  "key20": "3Gy7kBJJekBaQXqXXo4BTH2fb2M4tB6xM1Y7YC5FDthpd1MQ7sWs75jimCcF1QkJWszK4MunXuefLHxG1zVhiToZ",
  "key21": "2WUaxGzBEonhArSKQAzBLmHaFQVDKVWrunKjupzt2mH3Kzed2qUVR1FbjSMeeuvJpWLK6eX1H1DjvaSx8hJapeqv",
  "key22": "8LJVoqonyKAm1tpeBcPUMq6WKjrDMHPgT18u5de963opKW2gNYQHfWo3rZDemyn1RD28g51UcWLNoncL6AGLpNX",
  "key23": "2HLDZvgHVC2inDQ2M5FeUtRzEPhcZgaZ8MkjGBEqa5K43YC5PAW536H5AoNkHLP66bJHFdwSTPA7GRFWmwhLMpZc",
  "key24": "2cBpDmvCMeTZzhHqcLtLr1z85nvQNvyz4Yj2y6hTAkYECY4QQfqQBTGNXtGtXPpSamVaVD72faVJP21eotVSyFju",
  "key25": "fWEDMNpoRMrgFJdQ3HbcCY9Z1BdwRNYQN4hXXkWyQkpwHYzhMRdhG47prC5hmz4hxnGnb5VtUkYznywFXp8WKPM",
  "key26": "Uop9mrFVsKz3LEquiMcFpwvWpBG8faaCuZKDgDVZFyiUv1Ceitu5WVAUHZzcpY7LrwbjFgmVz44Cpkmo6C27Kn3",
  "key27": "3efcU3iGx8ZfH5KQw987uj9uHS7ovEkkM5U6Cqcxd4981YfzE1tYGdc2EExo67DVh5hbknxwQpnLneRDBSPT4HPK",
  "key28": "5ze91XF78TeHUnsJP5C3netDE9hdKnUnuWDUxwBa29ZH6tPDTtCGTbaWeBp5AWyrvVSNTqtDGum87M8DnKKuQa3M",
  "key29": "b38vzYVPayUzF7PjrB2NF8g5Z3BPBkPsuWu8GTEZ78AG6XCJgHQzX1tsPbLPhHwsxAjJAXqsM1qbwbujpdtTEPC",
  "key30": "3iNNrDcp8HPhmLAnHkG6kAJY3oJfa39KFmTsmhK4LQ2qt6bxhb6BMneNsTdcBXmKbC9m9Foko2gQadWKZUnFgTgz",
  "key31": "3CYLvsaEPcmXLAYrN3vj9JghtfHADh1modKTm4mN56YZEUQwnHz5zW41CU2mGgkMM7sVcerQcsY8MqS1eNWPdx91",
  "key32": "3uyttJdXNYT64rqgdvLWBM9SxYwk4EHdjCpLgQGBKmz25nCpAr5e8ctWZ2CinWKy5N9iwSbpgmEHAD4bPcaSLknD",
  "key33": "NatEatDuTn7nyKk9JszVZDQ358TC18YjSVrHUbqbWbk5rcvivrPfDmsgsyzUxoNsV7G3QPduMgxsSzqQvL5KXy8",
  "key34": "67TcYTEkPm3tEzxKcVrMz83hnLmyeyudAhwcRAQ8u3cvJZevpp1qe82UUFS1FNViSGa2H93x8AVmAdqunp8WdE1m",
  "key35": "5eucTVVLfgErEc6Yn6byiZxD7zZY5p4p1EKiHvSRHwdLn4Br4SazZwMyoPKNqayzXaF8e38W6JTTaUiUECzeGrio",
  "key36": "Dw9wNXpfV9yke2qHusfN8RN27TGsaeQJifuEEeuTZ2f3ZDbhB85HJ5MjCQrCmKUnU21rLAHMpDZ9fy6WF6vhuEa",
  "key37": "4hkRcKEYa1H78kAif99zHEqssNQWQTzbSPVm2JMXec6xVn5uTi3VpnxQ8jGTndo4p8FXe2x48tdKx5RfSbwVF4Jf",
  "key38": "gzjXbxgLTwi4W8JWMdvsrAjDmaxW73J1HJL2vBU3wuWxQJ3EgXVeWGYBzoPtMNTE4VCuoKjqy64zHM5YarNxXA1",
  "key39": "5rJowahPfY5gUVAkih6FaJPQLmcktxhe68XKp2ft545gsYwNBmqXCD8HwnUVGaND1uSBk1nsZZQa5xNbMpYPsCu2",
  "key40": "23qCu9o2YzNEWRvXSBuhPSjsngSeet6AVvzuF8Zss812qkBtbi5Bd67CLFbPru3PmEKm6aZP2HBA6EAchp68iBcR",
  "key41": "65ALYaEc7Xhfg6ZZMAG6Pgk4Py2JKD9YkK7t9WjNQ1YiyhXFaunyWKVCXmfQBMYCz7GQhzH7ZS8es7fgyUk5up94",
  "key42": "4ZnoDEbhSzQyqpYzMpyctWdqp8NQdz6ZRFNYgmuEZmZq2a8UPDvBswRqaEpVyRUVShiyWy9PGBbiGmTVgs6AmrJ4",
  "key43": "2RJ7qMck4njwT3CzsT6v7j6pdunFKYYcLnfKYxX8rqfKsdafPDaxNjADjUGnGMQtcGfXmvvDhBoazzzGd76qN7Zk"
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
