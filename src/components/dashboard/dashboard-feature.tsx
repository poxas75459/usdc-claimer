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
    "4fD9zRkLcWzfbRMRhrQcB3662sWcod4gjGyvHiekfaroQNH9VAovnkfpqrJ6Rviy5NmJ6HEe3dJLxKzrB3EqHqL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6wVqsZTuk7nTqvNTRfVHKaxnTAu4JYdB65bYabumCzWrGxNEdj1ugF8gDAdJibLSA3gNTrSjtDmPWwYpPiUKqM",
  "key1": "2PfdjLVdTexsprp57nfeqyg74GSiBRQmPuaTnL8Q4hjsDwgjuK7K2EE1HwALEaMm6358tvCtVvoi6G3uswz7LGoY",
  "key2": "4eBTYfemTHA77BySFX2YfXgtQjTrDLTMJP1rQVQsHuME4NAk1JgN2oc7DXLuZMapHz8Zs5u6BJr7tUozai1JqL2n",
  "key3": "2xJu3bksS3KMmhwGDNvMhRjJxxMqew1x4rZ5ccEEaxrub7D5Qdg3MXLtyAjBkbDeokPjavE3LPSohAHsQn6L2mDU",
  "key4": "2ysry1J1K46caoQJi7z2q1DnKVpoLJngRo6ZJpP8CxkUbTxCZxufspGj8hr6qAC31ub61o3EpwzdMvPkLxHvZb7m",
  "key5": "YmBNFXvzBjQC27WAdNn1LF76gAEdEqHfpyhzP1FRuDn5WU3vggwu5uTuqhGmukKmkFtBzR5eaa8ggtGNWCpWFs5",
  "key6": "5fhZKqVhSU7P4CSBvSBr583n4nJzQKt7FevmVKgnHNJbLShKiBPhWXLhPYq7P4Ar5TWJhoWSxqqbF2DwtCCdXbJJ",
  "key7": "5wVFh7WGDSPyCgW9gGwS5434TFbNtiLqwAyRkj9iwYbeMcwyFcdKMSyideouexAqMRoBTVHdWoDwsmyPgdqdpKif",
  "key8": "3FiUvp4jnfFRCRctsjkBaenZXdgZLRZVXZsFxpb6jtubPdBrM6mxiHg8Qhkxivcq92gZU3DkdGzBQyYZVWytRbva",
  "key9": "3rEc37q59Nduhc9o9TQ5UsK3GA9u2UGYimxKeS2MGJqAmZ3BBgodoviVvLWV3mY2JjYDFCtjkzLgG65F5juipuKS",
  "key10": "4UuLAMdZQEEJ2gqTJQkCbbAKG6WmGSCcvpEB21axqo46zKcDRud7wKQbxn9GZq3p8bz1MbKjQVspz3h3rMyk89K5",
  "key11": "2BZRnXobmsSzSxyzbj4HX2rPgiQpVF7BiHmatFBCpJ9mw7pQjapY8d1x2g4Mon9JdoSTyRcE5ZHxx4CF1nZHdWpg",
  "key12": "2jfxtKcG4j1M1oJ7TmH93LeesxxsXMku3TWzjqD1Ag3Uv3Wvi4LAXw9BLWHPE7EoziuwFL6jJRheVen8VZwfWeCo",
  "key13": "4TTAQmiMxPWgeyAWNLa1Q6Gyun9kHa3b264gBhdDT7SV9eh68HZPMdxr3c4h318RNEEQNKncRtZfoi6R6F3uAnB",
  "key14": "3WjpS2Eww8cy7smuAfEesvr3h6XaMCJUFikb54Z6CemgnrarMx98aaCYeouWefcagDN4CnqR9XDEnzVPKdYDbkcE",
  "key15": "e2qmmhjHQMGSQVi6E9aDsi3eyuXWxMJZAWyPpPqwijGpZvwjzftXso7A2r4PStQm4VHMiqDjPq2QVKjNKu7zZqa",
  "key16": "3cQRCpSPW5RRoXp2SSa8uAAHsy3GqdE1jpkTqsappfj1rCKM9Wq1L1fZP6FLC1QUfsAQaSs2ytJkmRxJdDrKSdfY",
  "key17": "3w3keSVNGxdrMZDWfED3QHoffJsb1HHtn833jjtiipTtt5ConmNfUUCP2ZmJNheKaxdj3jdKBJz3f4k9DrMEMPxf",
  "key18": "2wLSMK8uFo4HQ278bYdjXmPPApQ4i7pcDygVse6gUZ5M7R4QGTeowHfyrCJo76HakXRGmHHi8xuxyus2vJ87dqB8",
  "key19": "41SQZuCPmXZ2c1SAj9Dbk55qcj8JpWcgviDRmifeocfVgQMk6FWYChfw5mKtfxtymE8XUgQdbEgJTV1fteCjpN7P",
  "key20": "3VzsqqoD27TMHeTDKDRrDNmjGyV25Fz75kxDH6eEWFvyvCaZ3G2rRXVXVgmHBDaEFBAWEcq4wJEpWewXVbqXH35Z",
  "key21": "5CrgT8ggT8KSE3JF4oB1u7qqEggBwQYDFd6HFk5XjnoEkpA2ucQnvC65ExvXif6e77a6zPt7nZCD7orQKCpJEFDj",
  "key22": "5HrNcGrxB6qeNtZDGU8mGBJG9kKvDW1FZyKsTdxKXQG9kNHbJf43wS3GUVSVvdKzh8ZRTGnh8GAEE9a5DFMtP2bd",
  "key23": "67WqqHAnyz1962bq1MgvxuXhtgocR5xvzABX9Nuux8sZN3Dozmhv3jjEfr2uMbaJhXXajMz4UaCJxfwdJ5yzkRpw",
  "key24": "4KWskQqSAxpSCet4GUGeuP8DaVv8oLJ7ymLaKcbnTg7pAGbbpcu3vtM8artjpWzt59RjbKZPGw5vHZaAawqqEVjW",
  "key25": "Ma9zbEchEjdEnVxCW1kDxth638qQQeSKDjXwJFo8MLJye5mrm9MQ1ma7PoBuCiE42NJ5nPSSZLiykb8WsuqyBwW",
  "key26": "3KZdoC8DKAgQkfG6Ez2ikk5hke7egipT5sWp3YMeWxRHzFWRHQ1u9ZqGAjFyzLgCuEHTFj6Ph1qUVBUqv1xvnEti",
  "key27": "59toxwBbpNRbYxMeeVCG7ykL5HQFeAH6qno7VvnsSrHhy5eGETvET6SsiABXWzYvy5NYLT7n3umk6BMhWmoDcb3p",
  "key28": "2jNdyH6XZPMym9bcU74ep1LUPQ1tkWWe1iXWpn1DaPSUhA1L3tjzhj1ViBk8zf18KXodAQhYScemHihWRjWVSVut",
  "key29": "2gGjUnuYVDrYJyxtcqWH5AqHTZg78Yjk9i5Nc8Nd9zmug67FzZPqjfsFTGrjgpjbRTrb99HVRuapW89qwF7jZqHj",
  "key30": "6tGukRMshjxRatERakZn7uVj6aJqtGvfvHnQwVKtxkKx6CCGWxUkvDHp1RHF844AiTAisap9RM5Hf9rx44Y9DpL",
  "key31": "4w3HNpfmEvtJQhh2DnbvW7FNRgPzQi4r7ra1AjMs1TNdwGWPECfmgnYajJs1aTKecUgFg4ACBtxRTVyW14w18LGM",
  "key32": "3GnZrncUhRt8tQuv8ZBAos7vtnHNrsFFxHZT8uoax1Bq7SVxm5rv8fF734CpMDCFXqnhqcfoUS2Lr35zRw7xLDRM",
  "key33": "9fDX3UKwYdMJ94G8z4oGwpbft9u1F7Hy1KsXY7jeJACoSnvyb58huHwETRngF5nRLYQUWokXYuzd4tSXZcHQKqb",
  "key34": "ubSijY7bsTThyfDWJE3uBg34k49N9MPtiJVrPhvN5BShRLhBGZXn8csgsZyLNzWUsKaxqsz5c8ZeqExQbZqkQkB",
  "key35": "62dXHTsXW562htKp47KcQusW5TeZhpUG3QvH45fHN8CV1Gt7upTBaRfSYQQHgEHQzpUTPE1RPGLQDytUDnRoWuY3",
  "key36": "3Qscex6n4wx9K1F6mgsbrahNdeJqr5nv4acxFEoiMCczehps6ovKkQmnKk1xYaMj8VJkLA5H6QgyT2Qs1kQuS7Qm"
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
