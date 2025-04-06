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
    "4ptsfbLrFFgEs6EwEaPm3PFy8yiUyurywEJtCxbG6ZfjM2Kc9esBpXkojsVNrvVd96KTkksvSG41Ue75TnmV2cqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JdyA4xcr1SJCfdkgSnK7ymXaa4QhPsyhFJN4Y2GncLqdZpjQMLK77UPehQNWQXgiEyNG8W67YvJg9qoQr1Qx5u5",
  "key1": "4RfPuFpZ4fqo5xtD99iKzAZmvrFFA4MN28qtzySvbHAaZY3pgHEw67u3jXyfs2BjbP4DnMVrMA4uV2296mAXNi5a",
  "key2": "4FGWemcGgKxmf4iymuzALZUnKaWtw5ZY7rfz8UJUiBnj8VB4nP1TmAdQb3MwTdvEby9A1EJhBo8x3ger4miWsEsN",
  "key3": "3E8vj6P2wd2zrqHkLLyUqRt6vZ4CtxonekaqSJXDjruLmGmNjh9g1Roj8VsaqxfCuspemV5N9SppGtnnTZG2vBjb",
  "key4": "4EXf7XDZB9qiLZdrNQnbkPEzk4UuYHYEf2XdH27y4xuBwsdZefk4ayHxqNQQkzLNhrCVeAPGL81BCpP3iZCDde8u",
  "key5": "2SizL4UKXQwsfiVs4cWbQrkjiZT7bRsfWrVGhj8K7toyDfwfRwjXpzjUDswAKVAxUhrVDHLNgv7vgMrsbGwCnxK9",
  "key6": "36b9FXAhAz3AiXdGswnCjunZJVZ75SD7BqYfETj9Stec9dLzEQKTvRyL7LtGkApkJ48Tm5VHJ4Dn2KyRPBDL1ntb",
  "key7": "37RJzGTzhqz1LjimN92A65tW4LPNGwz1xtCLGTBnFu6JZHWJjyFcsmBcRo3P9nwArFUHSDpXgKPcQZmaNoYt8fMA",
  "key8": "5X4BdH9Ry2wzPC9pS2u14rNRqWEAx7WeqoDpWRwSQTCtgcTvJY9GBVaeSD7JWeYhxWikmzKFiNveCHc4LbVtkwbS",
  "key9": "KsWSkseNQDyaQMViRRvL88gGdFcoTqDbYYsKJUArMdpMi96hJbSMjUx7F5MB1FJUxLQ7ULHvmXTLCT53HWjKmU6",
  "key10": "5C4RnXrQkPkmYfJ8GNZgvyEwEhScspLXTcNhwZ8kNW3jgq9r3gFtXiM4SsUyLGtBkVoaMVjpx1pzpooXn1VfKmRn",
  "key11": "3H9XKjqtatb81MDNxJX7aY86fgKPN8nbPBjoadLdiNd4fuc5suM8m862hpviqHcpakaXJeDGUa69FJca5ZGmLhB2",
  "key12": "5iDaFgB4yZMSLKG6mRZCPFMqwo1YFsnUwcffjBnBWsfr7pnNH7u7R18WXpizHdBNFnQbtoDio9LQSFgR4jHh7ipe",
  "key13": "vRwaNeCu5gW9TLgRLpSuC9aVccahCCZBSP1kzXPqiZxPcvG2Qboc3cbVvn7ZjB6CQhyBRSL7yGZKmE8kUcQnxcJ",
  "key14": "CbdtLGjroGiymdTrCiMybfHPtK4HmpmpGAd8ugFHZXdRmk6Qb6gw96fLkuoVR26GcpVgn8T7J8o6KTksWwe6HeD",
  "key15": "4Jqa529qpQ4XRyMzBQW5TWCbwn3Jrdxfv1ftiCzxqGKXT5NvXjjsHpSK3suZZZuDK5BQ75SMwCKFTJB4rL3pgP9v",
  "key16": "3HtGaePMLCmmVnhtmZ2K864c3zLaV69Dd25LmJF4EffymtAFUTDdV9gk9b99oK3hMdH4kBGHVpUfezawcKw199nV",
  "key17": "4iAszuQvP65ZLJ1xfcC6tbJ6AZy1kroxQ3ZQw7GMskMUCkTS9xa1QdjKhUxEwuCdoQvBKqrBN3g3XxCGJnJfFLWF",
  "key18": "QNVXxXcatbvc7nDUDsbkFzPRy5YtC8urSkJmTmQmYAECPJVcpngq9k6ZCRepx96hNe4sfCJypTQs5sUTPdE9GAk",
  "key19": "5HKBg68mNnZGk5FrcnfSdhByQS2uY5L2ypVPmnrHt2yFf7jBhgrNHVwkhtJGEDod5nqJn7gENxNG65Gcre4B1We1",
  "key20": "4UM5deGuxufkMXktuRAqHcZDYM6bL5ifVG3GbHYX3TcViqHu8oVBGRPqAfpfs9VpQjJ7cuPgpbtiseiDXA4u8TDG",
  "key21": "4BYX4KwV56APr4FTVJJZboXPzYR4PyjWTTooYzdHrfp9N7XrTxLDyxTiD6WE8VuEjWXWN21mqJSPQghx6VMc1pqV",
  "key22": "4WrSxbc38e1tvknj62WW5qUHyZmZvLqjNa6kAXBSxFQXb1uatMsxBePiak6abwttgqNvh8n9vuxYJDcD68pW3RsE",
  "key23": "2AWJL833oLMkRf1i5UXvfZwHXs2ixwok8qEtMEXg9c5rR9T7quswstN4Q9zLFgqSzJrKcL9V4rkbYp2ic4Ujwncj",
  "key24": "2ondfZ3PC9fudJwzjb7keyhyqdz4vQ7jzahUaDeJ42ZoQ76H1Ky6kDzdjeWuw519Wq9btYqQNdyzAmH3kW6Ti7g2",
  "key25": "41J1FY69MeptAMpGWUBEKC3qDwUXPVKzB3UCUz4axLALWJaeEJxBywD79ddLuPPi7mv9Kdvb1vDaASDjNdyKd9KR",
  "key26": "5RvzmFrWW9Nci3ntZ99ixQzJeSTjth5LhLtfesvH1Z55K4A3XYGdjq86k3h215ncLsYAQicY8qZQVmB5NeBqrXq",
  "key27": "5MUuWUDZxP7PsLUziq8nowA2Y2jbCjS5GAwcXtgvPgTXXdDLzVm7xUfL28sr3dkgxsBZ8h7FJYTvAwr2LQaznj5c",
  "key28": "3Vk6pRoaE2Aj5vEiBhYFbcn8yZ16eaydGayWMUPF7TyTFDvZBhwfVk7u3YE3FzA1zYcqcrMs4cKBsvknpR2Z9HEq",
  "key29": "5aVan4rtqLzUNz9myJ17RTLi3Bmn1vuGnjM4ZiU5BAcfYpnDKEyNMoHYhZNr2LHEx9CZzMAg254LtfsCBqMyTm4g",
  "key30": "4ipcPwR6KsdiLDkDcSMqwBRkQ7gfkfTKXSNpDPNrjwsfF6D3wrGZLAUBmVSqLkWafNFgdzRPTb32aJtTkU6e2UxP",
  "key31": "4KBeMbBRRZNiPyg9p1VeuKZ1WmiJL883MhHKzEikEUYYHqPcUps3U6opehFpEeCRYKXLgLgHD1DtAasxvKyvWhuN",
  "key32": "4X3ckV2tduuWV5BLe54imnCDehmh5QRpayZziRuTDZ2EBiUuQH1J1SmGTwXgAZ4EusbziuoGFX6wBEArdunqhSmr",
  "key33": "44NMn9mnrDr5LkLvDDJRE4Gj944vfyJ8sdeJySJwf6VeFNpH68zumydifWTecMQ9CejNw2fTKdkVsHCYAsyJDYYJ",
  "key34": "2Z3AjVJE2ggHTohQHBxzpxPFLaMTr7g772L72Kff8qTF5gC5TCebT9NStsA3Du2s3odKaWYrp2iec5wsA1Geb53H"
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
