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
    "4fwxHiSMS1ysnZauQbX94mWAMHNSJxFeEuGvjroiPgf1Hrnk5QPjsiSGqL6vmN3PkQrFVHfbeReAf4tx2tDWTWH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XtkYd2Xc8Rf1a9zmgFG28DcsetMQJsWymuJ4FeQtCrWZ2G18ker42ax4mbpd1VaLVAQq2EYKVcRSMij3V59FQJ",
  "key1": "tFrzkHgkKGVDzLNoPRRYkZX1zfG57UAVH6M6qGxMVHtBaepBfRYdmVE9woRsBGufkW3cTecTr6z3c79vjM2ovzD",
  "key2": "4zTKoRZjUZGpW82MDZ9V6GkKuvntTya8Std56rrrPxG4RUUjogHtDMjv2FtjYBD4JMrww2NgeKQUCLWr2bnpk3s8",
  "key3": "5MHVJob5QydBJLjmc6ziQZ1KMMp1KPoP7LHt4Jz4M2D4m62vQ6HaoPiuqtN3mRFEYCqMmFHtAa3j1VTUtHanqSkU",
  "key4": "2RSnKSz4dpvCNXiiqnx3XGLTV9yvUMhuz4eCmbfyqTZnFFQNhnzBjaq4Tavs2GitjAEDyL89caCHHYNEMQUNAAVw",
  "key5": "2c3Ufe9iddskrCBUZd3cuLi7t7149Pcr2marTuCuGgcNfisucL3Vbw8gmCEvXvJp4BsHGfZk7JTG1ynwihwkKkee",
  "key6": "U23gBSgMsLZH1R41ovymN84Xqncd5GVKfuCDEahDdhyvMtBHc6G4X5uCjb3MLqbCxyWj9SQ2nTEpgie6Eqepy9s",
  "key7": "3pb2FUS7ADb6DixDKVzqZoQcwT3vqhgYAsS593kFXqFZ1d9KQna9rfJd95YuvfET2ZzuTXU6dYD48VrvwtFgh8EC",
  "key8": "4zhi8cP7guEiSsTFQikjVoERkZHigJ6RgXsCZ6VB9nKgJkaypaXvseHZsgrotYPRFtKNwXoNtBr8rtb89AVao9Nv",
  "key9": "45sugkqyZdEJG9hpQWrHL5p5FroHEm1yhWgpRBmac9t2SWpzk7ACt7Aohm77zHoTAjSUqQhaszJUktx8U6WLwZNr",
  "key10": "5egpyJrjmzzXkuSzpXEUH65pM5DRjXzZXoYmyDTkxYApLxMHkgr7CpvgcjTqShYan1tMrdzPYjazLGhxtQ3dSzaw",
  "key11": "5ZPfodJkmzVjk9XSVD4w2fNS27gWUdDgUcQNHDCnACsV46Kvhw76XrJYMy22zpeiVW2GKnPntHFYiKB9tRCnXYGL",
  "key12": "26hn7BJ1kZufQqWLN8XvvHaXwkZMR1z4oGdsNyT2JLunnAjcQ5nePpBJE1L2fpPDo9vmZrUooYtfHSYnJaUCaHp5",
  "key13": "2wW2JCsgLVs3dSgmAWQWnzE8CnpTWcHtk8eTAK25kMFKrBbPAAfwn5M5U54r3YdYZyXQRM7KLCoBdyuNpsoUYj2y",
  "key14": "5Scy13kMExhJv4aB1vFmg3yMt3wWQvXTyNwDmNreYLL32Ajm9QZSYD8w26CXBybcngCCkt2Yn2V52Mh5v1EqbRZu",
  "key15": "2D9FBzsfCySoYU3Zxgjy8qCMW2VWyLnMXJfLUJrPfV2zKbivb9wefjLHMYuHnSfPHa97uV45Yuf6NWhgX2VEFBQY",
  "key16": "4gTEnLxFU1vTmNZbmiDApUyA6Yg7GzGRxj5M8PbD1jZR6U7wDCUW1FkQZvAvWrd5nG25mrxxmwZczCQZZaFhsLFM",
  "key17": "3ar5KCDWfUSmhZdGw6941dJjdPXVHUbhYi7txGXtqC2GfRjnZEMweWVWx5eh21iqDcCqjdguCEZ3ehUcrBA9LbMB",
  "key18": "YQdXoRbxYQHjfLf2T54dFSdojdmWpBXmojFmFip8my2PsKWR19Lv1duyqwBEaEqegGajbHXzNGDuTMmvqxjreQ6",
  "key19": "55vXQdb11a6XYBWSKsvgackisPpCA25t2mPZ3Hkiz5vNGUkCzdaWN8AiEV2caWhkv3p2ZnTYtiLLopTVkizefNJC",
  "key20": "zmyF46vqp4uZunRdCesbNGyX9Jh47UdQYydg3TZ59SCkpK4ZRDTzEfv9LGqEraaA2DSuYGr8Ho2htt3ptrqGzmz",
  "key21": "4SzQyTdPQ6NiLD2rWKQ6ETvqWcS4ovVZUoJQbzRfspRpx2yeXmwKVarbfTbNAqwgErfhr1kbfJmDRiyGrkcL8Jfa",
  "key22": "5v22AF7EAH4TieeBQVbmnmZbWojT2HEJJn7yHxHfqNGh5Hbn38JmskALetWKzfddXSGXP2LdGJd6Gca3joRxFT74",
  "key23": "V1AcvGVL3qo4EmzoVmmh6NMb9221VyBsoXhcMDTARZydFYsPyfqm7gnH4vbRecbceMAWCL9bnQK88z7uWZFPH5Q",
  "key24": "49P8Ph6faAze9bDmN4adye6JW1Yp2rCENwJir7yCXwLwcWdDha82BngmymKoox36tBEZ9ffC2UoF8PRGM3f7ToHp",
  "key25": "5Kmc7kTDwvz9ZjbuXC5zXEaZfQYwFGpobSZoqY36vE2KGu3bkyg9Gesaunuduim6aKYaM5HSvqpFtpDn7Zi2wUBB",
  "key26": "3gTx3MMwrykToDxfKK6vMSzz4GavVJ34pjR8TC5DqDeDnzCgtpx9WmyTL6GNq1k2oFE54US1bKwV4T1SdPw43bNs",
  "key27": "yKkRQLPKNFnAL2nK3MCcdGBQcAzm98nioTiAReGNA1asWCTpVHbZ7ysxHWroDsR4KyLDAkjRwzwFnjMDcCNmJ3B",
  "key28": "2odkXUbmaDQusKBpT3U9krHzLkdkGQfAqaXDk9x1YSLLa3cSU9kEU3NhP6xDHY4ZGHPJK4YTGdcJ4SSUC3fbhqJ6",
  "key29": "3PDGXga5niQe4fkKJdzZuraxwRLNzS3pbmwVbDFW5QjgdA1ec6fMiBXv6twztrrXKhx2181UnVNjuCLuGneF9D3w",
  "key30": "4DpzEHe4cyxPJ9ZBwXat5JHzqV2e8DDgCYK44pd6DJ2ZKMGiyFc6jMQeQGeRkhRssrz79VJ1X78Gkz4TXFrHzsnh",
  "key31": "WW5HjKwn1cWyNmqQYrcbEZgTPSZwSDMvpjAkyByqnPfzQYB2jaofUW6HtsruqS4hSXsQTAqAFFCLdQYfuQwuP7e",
  "key32": "2LKtN95s3aVhyGKWVGK84XsYpefCK3UdjGf9EvU79Q1EkZDbSL9ap8o2vZxG6LkSZGbUz3uGDMimXZKptXhrwC64",
  "key33": "3dpVfficdgMDPgPWcScGUwLfX1VeCZVi8yiAYLtJZdMR9gY6FRFEu2QJNWVHADCKXJJ9Pabj3cVf4omhe3VWfxK",
  "key34": "5uSaQvfrUGhheDbQm9UZLdioaMF1MEXdN2stBcaCGFhRrcFiL4VY517V9rM3LxR6y8TSGb3r8TrDyhodqhWihm3t",
  "key35": "PpKooWmgz5wWGMXmMq8yf6xCrtjfq73d2RfEu6HP7Xyu1SSQB9EhRgbQow2fKWDEpPawrTv8hPzEQYqCUbMBL1A",
  "key36": "2Q3jPKdQqCikQBt8Mt1RX6DznRfZ9ayYgR2im7Gyjq9fwb7JPYPjxF9a3abDucxSBR9gXHRMLoMxjcxX32kgNrKD",
  "key37": "25imtSB9VxbEpB5QLYtNvFVYH1UhZuZK9SH7BR8p8MA6AYJw6eu9Bhc3zjvkSoNxeqpyEeXP5arSTqQv5Ky4RNUp",
  "key38": "3LLi8ko1BbBz8EByLnb8r5o6iVgUG78EybfaBzawAWDGFkpQ823XjDxBKHB7JoGD3Wn9PdjpFhY25Wm3BpvhQWn5",
  "key39": "LBBAaSPEnC1eF6yqwtsABZ49qDVaL52BBwNr43TEMkYZcyyR5bFeEuMUoXEV3s75nLurNCLLtCW48VUcKPsDHzJ",
  "key40": "iHSNYrjswZeBoZ5GCEmf5MTXiKyje7m2K8iVQ7Vnm6bhN13pALmG9tivAsFGA3uVhEiJsW88Yj1CnMJJTyDRcHc",
  "key41": "279j5tuqKyJyMLxPakQuRqzY8a3f58DjGSYLe9BM7WiuEVn2pr1MUdpAi9gUJ93PsRjiVkseZK2Rbp3brFumV2NE",
  "key42": "27fwL3ZSDBp4uct1utvve6f4tMhXDm95Wgou1QHwrxjGgFVaaz5CfTWpeozg4yQBoVW6MZZcX9a87WuouomQs2ux",
  "key43": "cKaG37Bh3HQCoXvVnDffb879uY98du3j4ZZiJC4AMPARnRagi8erywzcgMVjSQrqhp3qx4gjE6Aa65bwztdBpFg",
  "key44": "13fkQmeFZW2QG27Rc8kM26dmXyzxsDkRfZQ7KkVL6UAiKsLHcc19gsRY3yWaVi4iZxRZAZhYVZMU95xAuTAdEUC"
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
