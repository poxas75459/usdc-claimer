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
    "4yZ32L8gBSJVRpCEbe3FP5uyVwut7bc41WyGHW4E4NG6vdJJbGk9btpfRdEAK75dwUhjFbnXoQEQDDmWinpMxhgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egg3z2XLRmZ9HfEEaH5TyMmkQp4WWrUgaiepJGpBGbT1Sh8kXHwbvJeL3TQgpuEGXxxG6yxTQo8GRtYTqgpzv2U",
  "key1": "2bzMeKSPNUMu3mWmWAH8pcp6f4rb4NnjQMWEYQhsiXPSJYYVX56GBoQtF3p9fTWC7Dtw2xLoPWzffNmAQiUEoXTC",
  "key2": "5jxYyvm16oVHQ9cTGSbEW56Fr3xh6jfrkvzcLg2gJuzgZiE3tTRqoy1SiL2d2KtJ8wQgJb1RRwa7XkrCAQwrmPTz",
  "key3": "3pCu2UdQ5irP1MH7LhLMHfnt6M5SgF1jv4sUQLgD6NjfkWABoeSbt8Vn3vqL9AezFZxGM2qGaWvoJAV5uwhWmL7d",
  "key4": "41QNyzHsbjm7xebeSMTyYZKfdJeEn25osHdKTy5syKNotFySdyCsNBbdxx9CfbW9oYAYuiRBo62q4C1DP1RSsGF3",
  "key5": "4U2NY7ojd2vXHwjm9tPuh423Q4arAzSTNxXZZzjp1ZJrKVzCDJ4NfDRVN7XmHjKERHvjucNoB147kVnnezHeYXJf",
  "key6": "5gEJpLrAceeU3CK2DfEC2T23nTAWUAUTjaye5TtfRhBASzE5NcqGnuB74UJfWF6i1vD5tbCDeBJxf7Yw4RBWkzuZ",
  "key7": "5oPBFHmqY5Dtfmxb5WGpGM9zkXAjLQYgxnYQ1UjzXSb4jju8d9oL98Jm8aTz7qVnTSKoZyRgt7wdtSTUUb8YrCcP",
  "key8": "dqk3ifu4ag6tooWz6rvPPfeJJQbQViEpQXPehxaLisXn1qeaFh3K6j67HhPpQMcChhpmHa6vTVnyEFR9sh2FPmN",
  "key9": "5p68fgHyXdsqLxFaeFYZJF1KCWN3A9BHJNbxvdVKhrnsMMa4nQeeDBQ6fwWfUtZ8NLehGMRhLyRnqRLWqzDcdR9s",
  "key10": "5kRLZZFxzrbBewbkrSrPmuknm4TwSEvuZYWBwjtMH7yh4praMHrvEpL3GAc73ohrkQcPrPF1AvRQqMoHWYqEKSY6",
  "key11": "219ttfhFfZswC3dt7411q9oJisBAQ8FgvtNWRTvpPkjKdR4HUfRw6433VE5mnrakcaRhyqcpCpLqpPyM5bqV79i9",
  "key12": "2MHxDzJYqyR2ygjWQXmicxmEJUcUvrHAEfomVMDHrQv3Pa95MZeT1d7L7AUNLzNGjQYrf4cBYQb329mFQPgtDUd3",
  "key13": "zYHEhqm6GAJ4RW5dH2978pr9PYbmDL3B4zJ8n67dhuTSFn34dczXwbfshv9JgtEVhLMr4suCeXi2u6TXCcg9ccT",
  "key14": "4J6WYqS9scVu6eGdTH5tgmrcobbZS1FLPg2nwp9wASPUgVGrvnHtBRGvwzD1nPGzxf9W3N197BZsCaUbsdzT1Ux8",
  "key15": "3qs3Q8mSswBYNj8y8LPQe2gf5gHZUBc1pnLtvCiscW8HgznbsraugLHVPFvZeCZXka4bBwKWJfCCn3iQxnyT7xF3",
  "key16": "2cmbvseXSYUmJ4QWpdogJED3tF3ZhpQf7w2TbEXU6RVU4y3sPHjDCKWzhzxFdBapp2XwKRJoo5h9M5j8XCSYpdHt",
  "key17": "2UzHpm78VzpABfo71vACY6dYGJd3WYA1jcVXru6WCrY4n9JfDVtbMYMu7b9asM43zyrLGtASEgwDk6LssFTTGZVk",
  "key18": "24YaAq6trYF9KragbVtz9jgc1KBx6ag66hsfWcUL7thPLyteo9XiEWoCHdoh8PZCK8SUgTvt5ZLtN4ax5QLZkExi",
  "key19": "3GFVgLjzXRFzTnA57JmxCcybQBf1Mkdn6xwwW7zaYmprvbqo2vjceksnWrEKyXPnzEQh3wzu4kxsYNse4u8Zkj3h",
  "key20": "2akfys1C6dqAjR21robhkmcs2xreXf62m4E6Vx6uUE6aa6k8kgHbVy8JarrDF2KyUmGwbUguwSa6wAKvWQPLR9bh",
  "key21": "32vp9tVq3Dr3FRKcjTvRZ49XwTEnR5ScJLcHnRRWmAaCHSVvrq8DQieiJS5xw8cwjNFLssNsxkhRr5LSYTnA3hmd",
  "key22": "3uVxHtdWj3TCx7xw2WtVKak6Qhds51MJvMnWXCQKWXSy7Bq4MCkkAMDAaUidYu2EYgc4rfpCyMxG577hshd1ZggW",
  "key23": "5ihghBhU3MPf9jzc76ap9MMpeDYYsDo3DYebzBw5o3BCyGGRqWaTKxeEenSEq9tMLZvgLyKpKvdqBMfafVqpzThW",
  "key24": "2QE7Wrt3hSywbjmBfr33nuT7FjoCXSNmeNK5mmaagTajRmPq9uC15a9vA5CBqe6LtCkdagm6g1p7xUz9v953gtKF",
  "key25": "2bqwSDywCeAHpmmB6s1rvmgePiF1U1wvvh8Uq1K39QdzDdhZUJxTUQL1FtMEAxWxAd4LA6iCjuLsRqq7DcyBJH8p",
  "key26": "2Xm7D6w5veaYSnRCnfsH7i4MkEtSq7awQj99SrXGPVypxe54trjyZSWfbVRR9t9PJfyyPFhvKvXAUXek5VrzhmnV",
  "key27": "4P3hScBKfTKKvWhCzUwuV5niPvfiUCnXCZZUDkUgM35zLpzLYPsAQdgkQBL2b6tMfCq3uNMgXruiN4DuBKnpLEdP",
  "key28": "wc1E5ghofqmpLeZCf6vxaBcNQ43tfEHyNFMMTs9yh9ZwLhh4Pzv6RGgTKHNBc8n57dTNcnaDbdzmUgvzeWYqKRb",
  "key29": "LkME2EmumQmA3VAXdNu5SHy9ZeDeyxbtUHReisMjL5efAVrVsHHsKeEwNXqCPUyKMsRzDcQ4GQ3EUMPEQ8r4vHm",
  "key30": "49dFFCUvMpzQqTZovQvGQUFcP3inowiBMvNppvD8kxkatoXgKFomT5jtLcwg2CBMJCit9tVSRYAzJ2vAM5Shf1Xa",
  "key31": "3F5KWk9XdVtfaPLAPbsfHT3JVR19riXVq3HbtLCPWU3ostoyWEn1y3ahaxmEjbukyu1fJnkGrivikL93gssxXUB3",
  "key32": "cLwkjWujVdGu2Hv2wMShmnsATyptHiBumnNDN6MgLH1qxi7dYTW1YMrhCcmDU33MTapJPFFvGtyxNVqduTap6ns",
  "key33": "5wLNxztm73oF52WaCQCRfwz6ujxXWBDWpNkN1JSM1xLbnqsdGWhXMYtBr1kQW6mJHm5Bc8tXsXayDEdNwJYhUoCD",
  "key34": "5P1wjCoAnPuJhWgHGz4ahx4xoJ5ZaQMUdxSk5ZrjazZtgX3gGdRn5MJ4eYW8VE8LwqdW6HXSeAhABoj4JB8o36Bx",
  "key35": "4vW2Ee1W6kaPJ8h9CR54d1Aeum1EvgBQa87zqyFRwGTx4YbUz8jXGAsSRCebEcgTDtde3cyGNteYkeapb3TuxfSB",
  "key36": "27KxTm8idtdc6NUPoCYHfeMT88gKmbivuahavXBqifTa2DDhPvEDvaRF95WfUmPJ4PCoXvCCiFyxcZzFpRetvEzc"
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
