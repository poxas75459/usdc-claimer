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
    "5URfTFiQsE5toNNeUEVV4penZ47Yj76gXLBZuvsjhCxwrTTEBnHaRZ6CgcqTq9XPpTKApoFqagJuV7NFWw1vTw2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8wNi9G9SbMEuGm4z62WRRw2ZSLDcZKUt5s5D7qM5WjgaWDNX7QQR1r9kPkHNQkzcZ1zATANdFCJQgZSWnLMq99",
  "key1": "3AZbJrp52vPMHibdN1ya5GVyN8H6J2Lh3fry3wzdfR1qd4oMtVbYxuxTSNyqNg7THqxgMnp3qAXhNmCitkyERr1y",
  "key2": "3iWcQxHymFjWVTR7ssiiFuJqedK11cSKV8du9V3uVUasFyiNBsbvciuH8nnNx6XVMdoPe49FSKmp9Wh6Bqt2XPuT",
  "key3": "SoFKTua1DyVP5cFxYLdiBBYjatL1Jcva8rCSMXg1UXtPN2awLQYdotgZngUwqk3sqq1d2vqgenZrXJjAFV4bf3k",
  "key4": "5y9ighCdL1bZcxvaCFGDEZ8RnRRAU4XykP7EcPed8uQ3FhtAq9hLhvMyUpTKeDnqS4uTPW3qZiGP5jzSbGEnVTMB",
  "key5": "67m7yostHuNnkvZB57UVySyVGoEzw7k6EvQb4JxdzwUsuMMEZLiEmnaEZ5NzzJKy1oJNiaCwdeqFQ3MVzzmzMd7",
  "key6": "ow6wHhyRVChwNDMpDTapqtV5CUnGS3uSJ6PeQRFadWSsCibSuc8iu377tWBwe17qU5QGiJdN8Qfb29ziE33jGzs",
  "key7": "3oPT3jK7Rt5qiYMqD7AjGDNzMWzagCn3qNstevEkXu3nBhowvYDFPsoYXjGkhwWaWXyW1wkmAKK6zqMoEajxasjB",
  "key8": "3B9mkjLGFXmiBCDwFVProCgK4RGUCVAwRsKYZw7GQVzSGTZAo1qBzxpRYCxAqgQ72WQUB57DQx6RTTSv8uAHqbis",
  "key9": "3VDdEah1deLW8Cj2Gi2YTfbePSRaTzCseaCaiseuBpwMS3aBqxyCjcTygTeXagD94ADDNNGbfcYiQD4xrHczjBcB",
  "key10": "erFhkhG2gCas1jdJ1St3ZD7n4oSmbE372YYMDZ6kgcd7ZxMDWdoYHvVbME6jDWJfcPssvasbfAm4WCB1qe1iR1W",
  "key11": "5iFZuwwJoUQ79w5AuKYk8qWcTtzLPKXweGFU9bPJzRdyjLFVnS5BjTfRvAP3TdVgRmAsv9iQvCzshhVEE8fgobnJ",
  "key12": "4VZGAktrrruucawZSBEW7iXfToqMTVbh4iNgJuoRnmi8HBFFSUTreRi661Cny4QBjrkpRvXVZ4N3kLit1QUggehD",
  "key13": "2CLSzE7qE9ZrNU2AzQvCumWRAKAE97kttu6cjqq1Fifmosjy2n7T2Bh2bbjoSyu57SjovmfimLnjqSNemAmCPYU6",
  "key14": "246bexDhe3eYrcDwgNzB8MwPSDWHu9oVkea9b8D1Um7xZGT2nfTg8r4UYqEjtFQ5EkBSFSzehJGXwgonKqzp1rzW",
  "key15": "5HS7wrQ6GpEpWRYEb3nvtsy341UWgmhGP9ZvvvmzJUydNG5kM6E1UyThAxpucz9PMu7J9V5e8iVfqqu9WZ5dZkZv",
  "key16": "4RtnZnZ1tte7ikkk53ucUGPLZCWUHUH8co5UGjt7B9bCTywz8MJks6oQmXhqrs88Q3BkwrS9VtBCsgNUuKApvJk2",
  "key17": "2NR4n9C3GW6gcMBHXj9QqBTwisa6tnsvmY8FkQFeH4eVH36N9LHjo9LauNmo7sR6Fjg4feQvy7rDBAaiuG75eh5x",
  "key18": "wm3BmgN7iSYmtJJEoBWkeqSZGvyrwb9TtdQBkXHUhmXLLSo5n2AvGs6A3dr2dLbFZbg2mwdkMTuLt3CaPXiAdsT",
  "key19": "5KsfonsTgdfsXJbNiKMV5PaWtt9rsXsDHitbbtoUMGenkpTCRHHfwh3FTFJnpn8VqZfRUPQH3CFotJvLL1gUML2D",
  "key20": "2VJLn5iJoFMZXVu4DHThXCd67d1wEPewz28yc6bqRaAE7CV8t4UMf6Xq6uRhGGmsDeFThRD3bFwQuY993TzAiAYG",
  "key21": "4e5cVhTXYL5WL8nwi8bcqxPe3yUKBneNnJqk9e7HTYCgNpgwBWhLiDmMJnFXndJRJEPiV19oYjgmziYyzAKSk7AU",
  "key22": "2gHaMWLCmiyD7vp6AjfXxpWtFnnRvS1eRbKuSEU3Gy8s1Pwz1CzBdFCfFzN54xWG6jnsDjYghyHmRUBHAD6fBn6T",
  "key23": "3yvgXKvRf37izUtbJPpWBz9qiHsAiC79MwEAhoX3rK3foUiEZJFantB4e7rwGZiwseSPMRksB8RDepicW2dW7edp",
  "key24": "43eXr5pBoPxjqmXgTBncqD31QwSQkg7sSLy8kEfwnkoBYT1xanNLDhKuf87RCSC5bQ46m9XCDB49QmrnMMb8D24t",
  "key25": "4uixxc2yiz71dz6bZipzkGGeRawweRKPuBcmBsqHfLfKUgKrUaStoEDJZo8JtPXqgHcxqhaESaVwXs4rcitihqGZ",
  "key26": "5f13e2dDPhBkVP8Vy273fM5oh6RTPwPtkSmcd4CFSYXDZPFgWnPRXeyS8Kwj3GfiL6MqJZJmEJHFhWZGaRChYPcH",
  "key27": "4FpGeXc1RNvhZPVSECKDzb534oXzsKgrvaLZ5p65C3JcnTqey2UhYoQdfuCEaXzn5pkcPkMnDKAd28ncsnxFi6j5",
  "key28": "4Yee6a6N4CdfGrH3GQuqDFPF8qFEpd6oBZyj1BkFe69Z1kGw3Wu5T9ukDcpLofS57N3CrsBDoC17ev8zJTUHYEYR",
  "key29": "2cdrW89tq8vZZ5uP9V9epYeM9JZGsy4QcRLjqSwhTV9K8Z9AkDMpnTJXJqVAW6LcjbcTuQJchmx4Sero34NL6mBi",
  "key30": "59bRuzEs3vRFc5XYCf3qzPNEKxxNvkd7Jrh4L33noTpoeMdUezt5uBpZRKmgSsPNpyyWTPT7hjGfBSXSwiYfWjsX",
  "key31": "5notWzkwMnCqc1qBC6Tvg8gXXxdYfvfbiC2vSfK4yL5P3RcdLHQVxDG72qjQNv7zzxmMZNdTKQ6KzUowJ9ZGVaod",
  "key32": "5v7TCYV9BGCxC8vRx1QtvBcYYcZuS39VWUjPRS5cPK9QAqpTfB1TNxLonyWzYScA4SvxzyK5hGYxAVcHA99ncg4d",
  "key33": "2UULjH69CzCxq4zJDLCPoEt1nNEJh24NYVBvVhfgv3Swzckka5Uoa75BaqsfjkMri48kcLh2riTxqbyFWjRTj11j",
  "key34": "3Z4ExwgbLAetrggFAJEkvjxzKDRmGK7vX9CJq31euqGa7VCnNRtBQ6ijpouf53WfX4ifAggChK7pn6485YJJr4uZ",
  "key35": "468EBxnhPJgS6ytFWXf5pJvaDhSeKhPdr5FGUMB1jgYSy657B19wJWcutGCXAAxRWDRpBTtnFBwXYJ25FAvDzzji",
  "key36": "4vgff7iSFqv5M54o1TpP8cNUUUaiqvy8x7iYL8X8VnNyu3a47j2Go74U6AFfYnznH192FzpPxSYiXLvSV5vMEZpG",
  "key37": "cv3abikNTCSZCaDjMy4qTEPpfDaw7rdAgMTCjvyCXNghakTdmSHGTJaJBFiVMWW9hcNFWBDJm1bjCxWGknRYgot",
  "key38": "2vf3Rofmys4V6KcthWW8kDyNTCrSFg6kdwaRoBYeziso2cvDzLQJAD7opoFDDZQKa2H3oSvhXeDcZmdu3vhxmCNy"
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
