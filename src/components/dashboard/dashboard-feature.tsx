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
    "24FCBT9GehJVscmsmQjoR7xLa582tar51UwrwugM4A7LxD41ecSLH3veiLVD9gXV8QSTMjXGZEZrM2ZAgcxNRt2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrJyRFMymjkJkSN2NTRQXesqT9CvHFnJ23pbLTrh9Nsw1tS9yc4jU2GctGK2yhTPC8ZtHP6Eja7rtExHhFtyNzu",
  "key1": "ruvSL8SesMdpJ3KexAp5YJGG3XnEK46xYRtYfp5NQEjXanAp5WSdQjUrc5fugYDHAvX9XEW8gpUX7bwg57Yt1Br",
  "key2": "oUSjCHmzpxGsaHPnERhP4SRSJo72cQENJnwirZpToX1xnMz9d5GsqvGQxuwQYSsWDtmdXFrQHUGkTauEMc3B6mi",
  "key3": "42FEVt3Zix6PQHFDj8sCaC6fGnSHxUvvSkCRDwS96nMAnUJDKtNAsA3RRzrkr9M1JPXZcE65QLhUX7Et3UupacBC",
  "key4": "3noCwyVXAgTrtQLSEqDMrmmgRCjNVHLDcSMgbqDxvz8dUL4fB7QBsHZqBqtHq5xeAt6URutJWfFno4QYd9PT5g2a",
  "key5": "5q78kQ4Duw1gCyGidAjxV4QRASCU23N6oDJo39rzzyQ2E9S5mfMLz8U31uevBEUqKctqCDX2ktzuDubXStckusaq",
  "key6": "2KjWoNDewMWKuUJkjcQ2kucsF3UGEgfp22Wq1xcqVMo5UkCnroZfr7P5cL7U1WmVLrXZhs7TR137yd1aGsqWbKCM",
  "key7": "4msB3NwAvJzQvMMEDvpL66PEMsvMFw6ihaqHJfmnACNBVQ9LA7QVC2o1mo9K36KqYK66GDAdka6K51SATqjtVCZj",
  "key8": "4w88abMv6t4Ys6Gvc9xW1SxpLtfZLB3M4E9ucaLnvGbmdPkH8iKw7bUJj8FC51z5YXRjzMBnuV5uzLpJHbjRXbtN",
  "key9": "BmebBC7Jr6r99Nkr9DC7LkrbFCCmkq5E3ixTVrFNMEZgqmfQNUVAAdg2BM4FsrpcBMrE97NG3SCp4n7PzZHh1Gv",
  "key10": "2Tu22btvibFFoqkDjbgtBbz5RdZN29pUJ4G5CCbUEyLfSRivsxKJdXXrY45MUBKNGyr9L1Q8RWTy6mq3bAPJovyV",
  "key11": "4gauxKPAJpmonNHaywuDdYgMiVoGj1DQBpb9YhfkJHUCxC83pvwbt1iexDHYo5h4ewHUiGn12BAh5Afy1sGtjApo",
  "key12": "2MozZs5Sp2QHTybDGNCDkVeyFLTUbmUgC1sQUxzffMDgUowNzrwcq3chJ9yTHCFXdBqrtGzQJCdvh8QJPzswkEua",
  "key13": "v6GWqMw5AMSK2TJqrGHLTN1r6MzTDUM94zBXxfvNzFGjz3QihDGMkG4tcFDnn8pCaSSqvCoi83jf9NYa7nR853t",
  "key14": "4uzQ9bsCyJxBWKQAJuERnwKgRG8BDi9sGhyBF98tgJDVnTeTXyQAySXD8K8N966GL6SxDaDMmdg72F9fMqUpVTZ8",
  "key15": "5n8YrBtCvBtX7A8D8u9WePCfspSS5aJhXz867gpHqrToM1nrBK8fgZ1UcxiYwotm79wBvEoYXHoWuRhHwGdk5iMT",
  "key16": "5TMny2fUF56SeU33swvpW1E9xcFf7uT15yzy3ZAH4PqKmY3gaYvhbh5YY3WUgwZouVJcGhvd7mq54D8kXXAmYpRk",
  "key17": "5CBr3PugAQXuzA7wpughXpHFuw7rBrhmHxByCDqVNwjn1EtS8KSYvPALNgHDZrCnx8QRJv9dxdeVWPRAKvw4WZ2J",
  "key18": "oq5LaT7oiPSgc9DogW2t2b38WSkosWH2w4k58JCtV4bYqzB3ik4fsUu83qX2PwYSQpQsck4zX8aYGkZouqcbrKf",
  "key19": "3UT8LZN8Xi4nkDTebmgMHGSQ5wakL8GQeP49EYfRaPuCxaThX1P8fuq3yruVrTa5dWnfL9YGDB29AKvybsxsP1gf",
  "key20": "4BXxHW82c5HTyumhAST4iNpuj6YoFfAXDLXQf7jC8ZWiQwoVFhcFBDyji65mvJi9Nm9G7fDtfr6f683FBt1iWX8v",
  "key21": "5B1XV3b2uwCHVcbDTVgchnqAXNTAv7eCqcnrhezTWMmtwsrPF4NjWyWHsvaLSBMpm2C8iNifkEPidv7hLqyHat2v",
  "key22": "2X7KDCSV4Q78qi1C2AmrwWhdoxRRDoRSfAVjcScfFmqhWArpLZXDNxskr5UcMGGcsgYdnmHZNvhVRsxcZg3oVUww",
  "key23": "4CDgH7juyD5rPLBd83PjJmjfdehDHptSiVhvm8TNhPkqJj8AQecLoo6SrrFkESrHizrXjeAjnU16kcknCm5eEjLD",
  "key24": "2TAyoUcMoy1r5uvFMqG1TNY5fvpdmu5F8NTaNobdDpXxWyvxQ7fniVj2K3vhd9sybcay8XsDqJC5P7DCSb4zYDyR",
  "key25": "5CS87nP9wVvFaFLVLJyUw3jF983aq4pbf3MyrgjDFoG5ZN9jcDcc5JhXUZn415AwxVPYeF14N6zPRgWTfw1GhZPX",
  "key26": "5NPYRtj2zJHyyYRFkL8LQwixLrEsNe39njxyZ1CJS6hHFqVrV8BZBgFrgbTPJRySZxmBHTMzJTvBBBPVskKmtjpY",
  "key27": "4G5GRwHM8fRYddKJsLFypP6TQfrqCtiURpipVwFHVaujYu9WSBQ5S9Ahpod9oLZyVrbjW24KqJhYZ2yqGvho1LG9",
  "key28": "B3dcuJPvwbxwWj4yvAKHviJ1tRswhTFjuHDMbVfRPegvWdDRs5m9qVJ6KUp6kTSQUUurJGmiaqmMQUU1kCCxrsg",
  "key29": "5kNp5bTK428qCPVQQ7KVnxfr1TzvbkbzeajjPj3FLc3YvdNM65P9x1ia2hig3xSeErkYR4CNffUSJyfDyT3YZefk",
  "key30": "4ZuVaP4oGpc1cQ7TvG5tNeyktMet9dXHnjeZJRQJmJLhJ3gfr6qT7wSeJ4HzSyYPNpcm37Jp17oP1Y9i7kiszbWs",
  "key31": "2MXpz1fMMLVxXakoJ1xZAKu7raNzjr4HBdCX6SXpbZ51HKCob8zQnkNbSft5G4j6gyiBrEoL5y9Xp49y5CmKdP9H",
  "key32": "2T6Fr8SbwEKf9QJBYEZHP84gx7DNg4NPwTKXMsmgcDyRhLQ2gpbUCQGRUUqdUtKsReu3UvgedZTFCkNTwchxDGe3",
  "key33": "41fZh2vAgJAYnrhN5SF8vm9rtmDcmGyHqoZZGP2TX4ua9JHmE9mzDxVCjRAUCXpJuwgcpvzo384PwdmFAjX6igZj",
  "key34": "5zvP15MH6Rfa2HQZPBLkgA9aFJfWdPd4YbussNW2KYgqCTAU8uh7veY7wojsPC4psSWanS5jyXjc75dCCXMMD6qV",
  "key35": "4U8qqwhJy1rbSSSaxkuCMiCPXWesuGqEcWP4LgbzgnKDMndie35KgXZop36ZM7Q8FwwbL5juctxxAYy8vYtCXwGB",
  "key36": "2aZonbuMgwYoL8i7A5c6VY4zBDc2LPw52L1B5pokyjmmA2DkFiKvhzCm99tT3kBwhit1EcNU4wJDWMjZuAzaH6NL",
  "key37": "5vmmD7MtteSMBp3MXDm23UQ6E1FjgB9YLrKQxNZZb5RPUg1qeMNTuhpLgkCowAsP6njYm9TtdjsB9EaA4HwfcsXL",
  "key38": "5URrhdZYaETf2QvGYNdB9NHckRghTMWZF81Pgf3zZJ9qdijPvT3MZt3LynM6bavsTtNSANwgQeUuBziMj2UG4iGZ",
  "key39": "3ZPvfxKHNtzevXJ9Af5yLXfMUvEj5ED7KqUveiQv86RTpvS7VJQE396gCpgf6TUenB1rnw6QVEPEM9X4VQxePgKn",
  "key40": "3QhmLm2QzmycDNZofd2Dpn1TRWw2uvYpuPmp5v7ZYf6R4QzYVTrBJWp5a5Yr5aKRMYbjERk2gv9z9SnuSFDkLr8P",
  "key41": "3QAUAog2kpANw1qy66YNKjZH7QFsXKs1x83M1F3X3fao3CynRLn22Jpq8KijD3pyWU2PbGvamvajP4rmyFgx4UTE",
  "key42": "3RVWgB4T4XZnFwpo683drvj9CW5oqizt56K4UksE3GnZHHUW6rCsG22SYxiVnaRejxzF3EuKSnUzMgaEdNXJ5gK2",
  "key43": "4dR7vL9HGf8Aj35EkxS7DJWtiVPusKACgabk5WjR5Dv4U3sdwwtipJ8eofr9Dk6KhrSwjW6MLFAW4yLH4wagmf7w",
  "key44": "3EKqhAMbPe8GshS6BjB3LMA7gQykhWKTBUpivyLfM4jK9T9hEAdAqQDkiLjRYTHwcHphyxFR2u5rcDE5EBsyawnk",
  "key45": "4nk1q4c76xLBN6EVv1NdNWNceibWLjHZF2T2PRAQbQjzCMqXboKL3Cev1qNfSAvdk8mhudUKHTLsZbdP5HDdyyMp",
  "key46": "RUvUSvYLRu7cYMuTir6capknapwLBZLADBikR7YtdtsKskNF6QhEhTi6vD6GxvUmhBMhdeLUxyQN3MBLwhqiTzH",
  "key47": "3xGqCbaCHMcXqyfU8VoX3wyfV4V99q8AHnaPGcH87JEDFAJGKsFfSzVu7ST3QXLZKRybh9zasT6nDoSe4RX525dt"
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
