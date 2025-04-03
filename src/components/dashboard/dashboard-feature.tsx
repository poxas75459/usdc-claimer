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
    "2XPeeiU1thhAuJ9oS7ooi2qY8uEAbjYpmpt5VZMb6UanDPRHGh79zT4n52mmqsbQfRWejvJwCCMGj8WPtAKk8uAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47snQN3kHDTHDn3oU6YGbWtaXM3dmiPDQodkMy9gxXEPxcFHaaCnyUGJxzASzRpFwsy4ymmZ9ESvhkC26MwYsN4N",
  "key1": "2e75N6iiKqEKwu5qoPZ2eLecVFyHJoScDn7wJnDjRXbWWZ7vmRUAfxtEuwffdp5t6JGhAhRwRZR9QT886ebSjYgc",
  "key2": "55R5MBxoWHveMCWfwxXAmVb2bc9ukGXK5nqJPtoFCBiH5HYMxJxTWrUSV9N8cbbDFvWsFYCJAuiK4jqnBpRavVaJ",
  "key3": "2rEqXTxi7A2mKAAPyueDtgSDFWStUjkvhHZBAJgwQhvwn9LCpL6iwFrPscVD3XJPsvNLqWR4gqRY1Q4xW8EPppHL",
  "key4": "5bq5qnn9e6yAj3QH6nBL9RaQuUoSg9tBcNkULcxYgk7dq1WdFMg5AcChU5xK4znwRynbbJjsXmK5vNfzWHY64TmN",
  "key5": "4jhECZcd5x77CT6N3amtDFEfiDoAiYCjeYKfHFdKJ9QPh2f3spENwoc8ePh8nn9LoEDWkDS69JGaGbda7nvWi3XJ",
  "key6": "3AmeCD2idy56xnqCwKXgxW9b2qEiRfdTC2wTxvn9ZzRc9WidMWnkfzbuqava9q18xRgP73sJuhcfGWpqbztC1wxf",
  "key7": "5MJYqs3mUB4MsuBNuqtWQKd5UcBe9zkv9esX1fJAk3KribYWENo1MJoC2o3XDPWt5v9umAX3G3vgyGkYXYzbhqfx",
  "key8": "4whBE5uooHoxZyMF78abrBCeLYCmQS2cAtwxmDcPJ9Q66Yoe3Xc4m8vnKuGyqwzQG9hy6Urs8Tc88hsvQpiVUDgb",
  "key9": "29Lmg6AmT3b3KZ82Jgsnz7PX4ZKGAXQWzrCoJyyDABrA5K47ja2xC7k4NK27XyuXTvmLi1pjqNwUam9aJfHtWZty",
  "key10": "2F6cDcSVndRBRYGQgttRWto2ZmXPxP3QJYudjfjS1e7Ab1udRrwiYUqAYY81KSAZKWJ6ts6MnuCNz6XXo7appBba",
  "key11": "2qrxtJbUbenG2JNgDhuDkxgYjEr1yt7veqKKeQyecfDJn4jsc47vBnbGrd5A14QkQiGkyhacMudWoEnFTyfBUTQm",
  "key12": "ocBB7deyQYdtNcEgFeM6jW5xpk2bJVCoho9KEuaNVRNa2DXD5GweqvxJHcf2MSfnjxD1qv2eCEVdong2FQG6oXZ",
  "key13": "43UfXp5u8eikqBYrRtE2qCoXpg9tn19phMuSBraT6ttqtnpf4TXaKaSon7kpq5oojg6Aqxf9MhVYSumjrU8GjGLP",
  "key14": "2m5EWqeKB3jyeCGeLPgtwin9aN63T7ZZqk8JzVDKPrWhzWaSaTFMxtop9wXN2GCMgjNJawTfHRuxFjqFzEy5pruC",
  "key15": "5uzkoSai3RCV485Ttfdf3ooRtFFMwFpMq43udQ8HkiPwKMu4j8ivQDKp7i9iLu3viGH7gNWgrNKKZ3gY7AAstmfb",
  "key16": "5XHyh5Ch6E58r8KCoPjivpo8fcGdevvHgUXsFp9HejGpgPw4CFotth5DAVP5eW87Jno22g3sFjoDnRuVXxHFz9RZ",
  "key17": "3qxXEXSdA2dkdf4qbhrHEv2i6Z3auAerdCwRz3EZbsGFNFUVBkaaJQ3NQnJa7bEH3bPqZPTDKzjcNi5SEp1ZSAg9",
  "key18": "5Sdu89cwKT2RL1VSo62Ftv5E7eLPUqdcjbrmSvrBs4pcEksD8yLNUXdHSTReE98un2uTRQ9EavJBxkbCtiHB3i7D",
  "key19": "3gzpyiMmzdR5FF7HCG1RtBgL69bhtevGYtut8wB4UwmsXREpT5Bw3SVBsuBoKtmKCEq2H7RdNbzfeFy6sAxRQugL",
  "key20": "vGUSAJ171ppqg19XzHHGCeW5Ec4FbNm7wcLQHbjyrrYqSg2FokQ3t2A6TqmWZeYK78h7nx85HE7yyBc8WJCJ2KC",
  "key21": "5sFHgqc2Ld8igGehcL9JkM28qw1fU975Ad5UwGYkvsto6dY6gF6mMd2QT3DXbxzQUTM42NsRsn4axst3Twqmw6Gn",
  "key22": "4kdqnR8sohd6yVarLTYWmFSGBhzGHdZirb81Reid383bENn8oJp5KF2UmK7jf4Bm7WYgaz2aBJWp6dvEYACKiGMj",
  "key23": "5YsKzuMvgkyCqWootFZpAyW1S8qdeT954RF94dXo6oF6kUbuDhPH2EhsccaRFmPfY1oEmC2q2vcUJy5CNn62c8uX",
  "key24": "5RRbH14yuSaXwuxDDAUoCK5GNHEReqNW6qH4CP1YP9gYADcDPSiTeUP9y2g5YbsVHcgwkJQVK9XYcuk9mumG9RXT",
  "key25": "55uH2Frs3qTDimWWPML9XV2emLW2x65zxSGLLWULHKMJKgzT8xviDwtJBkiDFEuuRK2zhJzEV928QqYYdDahF68B",
  "key26": "2WDjcoSanvk12F2z74MyN3omPkmNSaXB39tgHDb7G2twjhDPc6yW6j6Wkco4H7hdxsR413Y68JpFR9RsPR5YPrGE",
  "key27": "5HgCKqcW36uQmWTmdQVpJehbWMpwCNaMJX3FhUjsAF5nMSHbxDm6VR1s4o9nwTym1pD46LpCjp7fRnBywKyTQVn4",
  "key28": "5P5QLgSpHmELaA6PgGvBbYp4sGYJ1iSE1GdZu1aNoSSxkJMCYaSXWgyLXoB2xcRAaBGzd92y515SM1n9BFsygrsG",
  "key29": "2pLk9MVBNoxR3z6hfXgRP4Syj5nyFLtHtkjafpMV3x6h2wRMFMsMgTNZrRbFGHQDR8txUXWXwCk7snJKrk36CaoB",
  "key30": "4dXBFFnBULGfAUeKnZ2Y14xdkcjj9qdfHkgTwYTh2rdhjr3Qrvc3ZX5ndWBV5D96u2TdfcgvMYtcc6VpeXAy4h8q"
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
