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
    "2FpfbKD1SCHgaaR2pWnEdnGduP9a44EEhHxKmKwVmzbGofi3Rg57Z24FSeJaRJ4jGPNPEhwyCNmjA7RYJQEKkY1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBWE8U4JY7PuiicjVEJu3MJ3CA7wYMJYu479ziNv8AMqW7QiUk1i6ia78DrGG9DceCTckP6ZhRW2jqjWxvEeEse",
  "key1": "3TtCnrR1gPrHTRfpvgckCEycWZmZtDa2x7CmtmePD6ZrjvEoNQPGuo15sh6aFBipM1NTnsksBmhhRWxb8udsYuyf",
  "key2": "2MyC4Jpd2xiWszXdQgHrpfRc7qXvJWqyjGtfCD1avNmPJM9Rj4YEtWTyZxEo2jV9f2adqSydggGW3Bw8fdq8kicu",
  "key3": "741xVpbnYB9pjswWcQRmpxdHK2wqwRboJScHUHkVXkwLsfbUD4RABK7TQynH7TJGcccf4KfvUw2tf6iDEVdNaB2",
  "key4": "3gWd19mWC35JuQA3De86Jd8zg7TiUD4TZrchg1kmxkYbSTtSoRSkKfkxJYpdfrJz3qCN4rR1cPqy4vqwbASeuPPk",
  "key5": "3UKrHejE1zpY74Ku3YJkFPkjV4EoGyRac2ujY6CLrJ2iqr9q7RbC7RMsCRnfLSz4jWku3FAVzVWqkjZbHgyZTEKT",
  "key6": "mf2JXEADZfMxqcuiFZRm3WXVmpD4rocmirapziHLrAyhD32ynk9XP3hAqvZ6FebFEN5tKbPjPkgxjTJCjg2g823",
  "key7": "3rF9JRLnfrP7AQQjFHh94edUWrAA4bfwddJyUcp4VQK2Zt7xKSRfvFA312zhr2murD5w6U1vg9S8UWafy3LJe9Ze",
  "key8": "3nb2oa44ZvYmKUJhDjosQSD4Z4EiBHKLBoNoDXcSDxmnTTvD5Yf9yVckqD7a9LdmEAYRg5pjM8VWA2xLKa2tfHnS",
  "key9": "2BUEZobcwaMvGitCkFRSTTDvtikR1pjgkbMeUJHGJuRynaPAbZsFqtVcjrrTV36DjYpWAfdiTNBsjPhfpn9BBHx6",
  "key10": "4vFYqQpjjUjjcCU6onMH7vdGNirZunBkEzVsxvCRB6q2WZB1ekarXjZACLcSXreUHw4dvZPgrXTLmgAYSHBNqEup",
  "key11": "2x19Zvq48aZum27Hse3HbzxDK4gPymmWCCokPCpSoTgwxmor4GxLCN2Yse5nEu7YBJUxxMtPjQbNapPFw825uJ3B",
  "key12": "4L24cjX5CuH9Rmu1yYL2kyGBtnHyHT7stK8jQ5Bmg8ctGRSJY1EJEToEU6dk9dF5FRDkvvTnn7RxSnw5dFaNfn9c",
  "key13": "5DttQsqDxSA8H3QGSxCeRxBxTKHSmFvFkhrULJuDozAeXDJkbda2srJBbuZbRo9uPY47NAnUuvrUWJ2b6Rgr48fq",
  "key14": "2A4ZmzYdBViRBodQCWqsCwzixj9xDQRJSGSdTX5J1JdnptiYBDLUNsKtNusyUpfXbmKwgjG8Nzr44VgwvJytPurg",
  "key15": "3tv6LKs2sXuskS2QYEnq13v1PcB1HKgBYzKj2euL7LVtaPb1wMrQXyE4WBqgQfpFP9q2EuQo88pqh8eMPJJbSN44",
  "key16": "2MHY8gk5ThN7K8MFa5TRUnU2CF7wFeCkoXwg4qWfK1gfB5NEcpmUXAer6y2EzC14KXuECnPyv5rwSvauuMof9Q4t",
  "key17": "3ds1yYLmqE6nYjUb1sTRcqF4tSSatZcUTsBAzx5kkBYfcWBXsqTSsqcmBYLLkdtATdXsPwdFmX8FSDGP3n9u5EAb",
  "key18": "48QCEKdM1g17BcgWz2b4cALWxPGN9Ticzjcsyz9yCo7jSpu9i96Eay4MZMLTCH3WYuV9oBcAf9hphb6UjmqrSa7U",
  "key19": "2AXjbbisZZc2U4jtNXYynovZLY7FuDRtTowuckjdzLxf52LHEviVhkaEi2NjL4NMTaDSXFv6ruZJMtuAKnEbME9u",
  "key20": "ipmrQohkBp1PDcZaQry3w28sEJCk4VDVnAYsKfJodpqhGvFAs3gmkN8zCKxBnCJRtKX7mUx6eMP3XqEKv48xg9Z",
  "key21": "5LQAPXHQoYzuJ3khjjMx1uYJnMqDEcem3ho2yhZB7mLieCR7YDXwajYFjZu4guSnHJjnYmGHhPiWbMKYeLDThcU2",
  "key22": "3RyPiR8shP1LatY3joDNboeacwZVWonSTBs8fkcbAgDX1w1zgHCmFcMBmAbpn7yKDNXwhSaurDDqQZKTM7fJUCGt",
  "key23": "2W3KUviGsJJXfjzW3UM2Um4DrUnwt3MqiBhuaPa4f6o3kQd4U9potuJE79DAtm5xiFHAq79DN92u9ZUKU5WHXgcp",
  "key24": "4YdHCKD24SAyhMN6pj8mBwvRrsTnv628V3iUiT3TvYAKKnbzM4YzGkq3QD2aXUwcqyL4Cw7Wmvg2saDUbgAqFGbv",
  "key25": "5KdneRFaYks5fBYXrc8g7iTEY4whJarCnEDfayE27gxHDtUVGAizHLtkbmVBKVrjHSLSZ3kBM6jDwq3LstrpXZqG",
  "key26": "5AFYuWRakcWhh72wD7Hh8AiiUFYWAZqYdPBhy867h7dtbpDj6axQqTY4RgzDfVWyXP3LzPK4AvQRpVmw955aizqa",
  "key27": "2K4Jiu75iPkvkvv4kHiaJR1QUGGsXS6igVyzPZ1MevXhoYge9YgDQQ4MJgSGNi6GAVQMAnEorrNFDDVJX9gc8PuD",
  "key28": "2jSTEZRzJv4XAStDRSEGxiZBDq83SsGzNnW7eod4jaEnonj6bFDXPV8KJ59qU6DfTwffG53djqxhJriRpG2qJnZu",
  "key29": "3Ug8CANoZ2HK2geUv4WLytW5QBMB5oC6sLe43N39LM9EJBcVk8QVCYjtiw1bNxJANx32Koh6G79DAMiYhBK5mKnB",
  "key30": "5v5qiNtvP16gyN7RTbUfdhN4k3E6EcGDKKm8kbubz9B2iWxySAqXXqDyBEaebuUy1YyK2rJikCtLiAkc9G6S3HCd"
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
