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
    "5N7SaP7XFZ4ZkHQ22AJVotGiLwfpQBfp43ATWcPyk5yxsKsrvFQDj92ueoXQ7Vp3d7ZU3TqHqdNzQgtoBjEmqspD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMjtCi9nKNnz1YHQ4ZySyn5fQwzTFCoLiCYV3zDZNax1ZY95e8F65dGkM3x5RUFmtgcfx8XgLd4Rgq3KaLdhmKz",
  "key1": "5G7BxE8qhpxDqmJPfws4GDHDdkZvJN9caXewPViVcWxnpBBQ1JJDn4WohH9rVSQb773LrT7MKJiBTUYSYoDyn6oN",
  "key2": "5pEjfMM8VtCMvAgVPusLYxhiNd3V1zDVQzUnyRYLXT8KKGTZvScmqCUCJHutvTfnnWQBSCgox2n2RVmewR5r6sdh",
  "key3": "65jic8ZThmgvUrtM4V36HNzPD2fsYRGkF29J9QwqFkiSm3eMzpi64jBEY15WdrkTkRBZPaoKAJvVZKKynqgJvx2p",
  "key4": "4h5UtQ1gaEX5jx2i1ELDzJ37c3kYLD41Hvc4p22s5T1iYKqs5g74u9XW72MuENsMBmfKQzmZ8CmGDgF9WSZR4krq",
  "key5": "NmQZtZemLwUfCRxsc43cmuVpXEVvFxsLjS1AqFp1mdgTZQQgGwM3EosK8HJDaHTPKHw4w74xCft7CyKBAB28TNN",
  "key6": "qTCSncZrDDpfQrP2MoVN5D1d9w4kqgMn9DDeYaT4sAWrMpjP3K7an87MXkWTfUvS76GyFDoMuCzdbeHKZTFJHKX",
  "key7": "4Dj9jfKNenPbG6QC9zkNJLinVg4B1WWiVh1nditer4X8FvH9rZr1n5kqPEknBqDRYFVp1GfrLAiLfv56K329VdY5",
  "key8": "JMapJ2Lh3468t3yie6EFpNuMBFnehoN2RtYsdR3jycej1NE54kzRPc6dvaS9SWEG1ysffG4at3pc8VHbTDqZa7Z",
  "key9": "ikefbxiF8uyBkdZ8m1vPyDe9MSaXMyXFmNAPqLDqJpmQKEZiW2JGCXnmtJpKYQmydvquKqQAbyJpkEy5ZCwSnAH",
  "key10": "nWy6DXmBxxrohBZDfUyywTpmwTvpg7ykWxs5Evkcf7E6zEvMAsZ6dCXR3ADUfRoBFfqtjiweDsbBgDd5sEyucp7",
  "key11": "4srCBh7eH7VwK7FZwQoGoGoriCPff7YGeM3oQ873Chz4dtYGGmwhFuthqpxWtFKc8qpKSS9e1GwWiYwKJErYfHMw",
  "key12": "5tgpWM4xi2CLM8ffhJNB8SQ7PqNAPMsJYEzjU4RqyUbXGzZGMMkLyS2c2p28YS69yGgYgEjPvovQVgG2BfZE2hcY",
  "key13": "fXFRCkXhazSAMu8e9XtggQrynfLbSxj1BNYuRbq5LXSbKsMibkuuFPxk55o3vHowApLLy3gJCGE5gam8eCp9x78",
  "key14": "32XPmESH9z8cDgpCicCbhL33xEWtd3g6VYpDyJYTeToKy6ZHrhz8jf6gQdWVj1a4tC6CMpC75HrmFvCsfxtPoUSU",
  "key15": "LMQXwKPGe2Dyhxve98DAtvFsuBnyvqoWbPdsUHRNWcTVEYySNt7H7kQ2QHopebecRcQGHfz5hP7uzWApdhs97pk",
  "key16": "xS8FCA6jVh8rswj1MniHRnoZi4h31NuS2sW9YT4SiKW4QxBEd9UvnBVEX5kxmgvTL3pqGF8jVNxaBk6ec8aEGZz",
  "key17": "58ak9oWSYu4uCbP6rRqcu4KDAF6UCtLKtHRAhfQ7CtVdQRZyTEx5Buj6JctyWDYub56ME62u13PdK6UqaexS8Pjt",
  "key18": "311iP9S6aYFmHEtbDvcusfYZdwbrMWTBLEURz9YBXAQigmPYRjP42CQc3kjaTHXbyhKcdSdVTuSAzy8c3i6nGzKp",
  "key19": "2jTX8gYa6SHk6yCtHsjq9FgFWSwoBEMW6r6UKSSPE1KJqph9PsNtpNxrgiecG27KJJC6DN6ZRqFQppBF9txaxrUB",
  "key20": "4DhFum8iZc9x41wo8VC9UEm5DaWfW15LBreHH4i1Eo2BW91STKBgHQmqQZKKWcSs7gpeGdPP4uZ5g8APYX7S3y4q",
  "key21": "3wVEcnPDgqEXivwAH9RkEoP4EMPj6sXSLCTaL18wqqnMjx6uRSZNbTWuM5TKu7vnX9mpzfMsX6wECdo7CRVgrVK",
  "key22": "5fgcm7S6fxDSsBTxeKcEzoQTEDMZkCpmg1yqj5eDcB9xMyv5u9UZEij5P2Djzb14yPCbSpoeRJvUHDZSUxvCTGg2",
  "key23": "4VuExu3ghAgZXhrMjMeNCBhDbRamwSSJohMKUMi5neM3ymJHePAg1Ziqc3oY3ezqJ2ABeyQoRcXdoPU6kFaCVeSm",
  "key24": "2DL5dSQLYkcuTrRstJMTD6xocKeKvj9iSRp4fkyP37oFTHM1SxDmCyp9yijRjMZm116Dzm1GVvGnksqoTr2Phjfh",
  "key25": "49DFNKp18FEik9wp28p2YMRyzRuGEEPUx9feGEnVv54amUfREkP1EHdy7UMeHJLwZqrdcKyFVBE1GAwVzWyhK9Hr",
  "key26": "5UghakaZBR8RbXt6PMH9iG6K282isFB4ADwCxYoaBDTXPrBFdySnoSKociCrx7UUk93DTFrmLTKNm85qa48jdngp",
  "key27": "RR91sv61SLoDTh8mweRtaureLAddFBjr4cYUxJWrLufLkMvJYtf6HQZkAndtp3Cnejcne7QVZKYoaYoRpnGUCKJ",
  "key28": "xhJFW38tafR8pNjQbNPGh8t21tauHGhac2vzgs46gKkVybJTaCyM8KX5ATHPxp4ZuYgk7SErGLatgfdiMkegZ8Q",
  "key29": "hfgzfJXcPgwfLDhYMj9JSUE8g3FJcXqSvWBeWKXsvc64eJDKBfiuZg1ohD6Cf8E9mFwZociEEmNj2v7j6SLyDNy",
  "key30": "9iR4pKTRj2UUfX2ey47SHKUA9meMETfVVEd6cfATSVsgEGdY1RWRK2gqAZt568vWjkiyf8UwavtEjTY7yyj5gQ1",
  "key31": "3tHStEUDB38NEoMiFrrxuBTLxU2PUaszPGvmgCtfsnzEhiktP4JvmPqiG6S7Vac1E8wX4hpRE8nmXuHKtwqJnzQ5",
  "key32": "ugRTG79tdoU16yKsVZ3Q5jLupqVMYPNLt7HymZy9DignuyETjMP1n7cD9CV6CiD4g8UyNrMjqefFxaX5VkZB55R",
  "key33": "4efuhnRvQnjrZWcF7UithZd4pygFANQJkjXSQ6UC3p4w1pnV9EL6MEECndaijKutycEQLXG6nk6WT3ugi5bo7t2H"
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
