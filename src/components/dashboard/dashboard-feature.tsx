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
    "42tEqRjfqu41EwuobDCa49S8FjPENqHCcW1ds1R1n8RiiMUkyRzz4n6fr7awNuraZ7TP3L7LWZNPZCvM4yjq7wUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xkp42mtAb4b8jTHXGr6CxEnAzdc7BT9DR9FTrvUSDgV1jnTmaimTQFWzzF1JCFt9LgTrBtWb1kYRQrbPLak1Qhy",
  "key1": "5LHCZRknc41X3CgQKqyFDvPdybnJZSCxJQXZKgKznAcqnqrAb4yD1RrC189TkPfEZyCQeziRgzxAkT4BVH2G7skB",
  "key2": "7hXA9x14b7wHXTJ7hDq6iYfUD3RTQYSjS35iHWVoLSth6VMUiYBzBVUg5uxgvYKBXoGKY8y7Q1pvugjgs9UiD7u",
  "key3": "5Vas3GXVTz66RqJZ6Gd1bKWXAWLSnR4Kbwa6eDXUYSgHiQrAg2njMsyuovBtzShd8YccRtGYX4iCKXDHY8et8fJ2",
  "key4": "2DAGfXEydnmxou9yzKZdKEMqrGFxqJyo3MQNy9VaiFG6WeQi31RHU5J2D2npL24TpbwyJkVu1wDMUitHxbz3zAre",
  "key5": "4Grd8CPGpV7LuPW6mudWSw5MpTESSYRCh4JnQ5ixCKfdXfqkqHQZX13a4BYzmqs2Zs21YEmkz2gaZgGGMUBMJv4u",
  "key6": "5fJLbHw78mjvEMKBGYkrQbdYqQ5jNKiMPgK8PjWtvvdafQowdcLFMEwbZUtfCRwKg6iQwSgsMHpaVXEVLbNLk6yQ",
  "key7": "5gjuYpsZxJ1YJUYwTLMrCcs9Fg38YJw6SBkozMGK8Gpbnqqn9q5YUH7LBkC3pPmbaUAhfxvC9HDGwYzcSQRQ7qdb",
  "key8": "2kqQHuTQDW1iwmwYU1uAUJdZJL6i737fqpWWq6525UWDQrs78pxddxdGxfyX6aZRc1ujhdMXZqWheLJj3MY2BGCd",
  "key9": "2U5aUUQAim4fqLAzKQnKXbt6sxnnjV9AyjEU4cSxKDtGUqoTQGUVXUGfzLCizrz1kb1ZAvoc2KDeTRoR5CHotFyM",
  "key10": "5ugRCRDwX9CbiSDsqSpiaJZ18CCQvwQ4CraQWD4NLdExMbfA8WWJnReQZCG5iCpKdnf6ncErMPeSqbiY7PDfxUeV",
  "key11": "63TrqCmXqyhMGuyjJePK7yYyUeMvBnkqmEYdgWbYD7KwWGUgtsmP16u7bVSPZw9wFXKaV4mhyYX6W36SXNnmpQzv",
  "key12": "5x7kaLZeEnVwazfgJPYtccXKyxVKHrKo4GNdQDdxwcFdLdmf4X1bdxu3sRTMbHCMqH1qJmVHgyFFcQUJ1wywei3s",
  "key13": "4pf3siViEJVnAVbWwyVeSuk7nvLN5cC3MAiYtEqX2rnbNGHcN1Yc7kWQoS1SjDXHgySZWbm9z1p88dTNv2hGEpWm",
  "key14": "2fJzTXJshN2kYsoV81HmZ537e6yfVZzKXiMZqp5v6LYv2DhMzAURqRt9wLddHePXfjREmA4VkYsY3PaMAV5gpVjC",
  "key15": "2tmBjZbddwF37AbK56JSLak4R3BqUc9Lnfj2eFazHBka9YVaQBH8aDaGmeBtFxfWr9UmYdFB9qPph9ULGVLQJZsq",
  "key16": "5xi18gjQc65GX6rKEsBr4NWDgr3Zc2sxnaay3BNTw6ZpxK1AbUWNoPzSMJ8ZFtUpjM7kofmcbxSA3zbrXETVPyh6",
  "key17": "4RBrzQnAuNZq9K5ZedxGtUNh7VE2v5KzfgVEG2uS5RDLkDF3iLEnbnass5GwkeSAf2TiwiVPwBxWhSVzBauch8Ym",
  "key18": "4XhCeuHvipU6aERQpMdswg7TUZuSA6YuX4PeqcQ7tUX1z92qjb5sp2bvKtpTFgaRLJkzJA3zRdaQ4TzTQEphNmpQ",
  "key19": "7CAMz8mdNb4VxSKCyezJ98MDVTEwddo8fhga7wAnYWNCBHD9qcBSfEHe7CTnupzN49s2TR3rMnd9uJjWRwYoq15",
  "key20": "qKvuqTQwxGZYnY4WfV3U4CaNRT5NDCoDaD8rujb6faawCLHGHRaW8TeNUa2SKK8F4F8k4MDMWpiCjzZuSnUEomV",
  "key21": "3wN7p3wV5ceTDsdo5qcK62L46x2AN5FSPc5556choTTC7qfww2MVxSPswNdCcfAYtrV2HQ3dS2Zh1zWjvdLyLdMa",
  "key22": "bsZ4U51NqmroJE4LJgKgpXB9ZgQUK1wPhAW3dmwmMu2uUWnus2EAr3rhxWhWZeTzDmcUJudcZ6B3cDL63LoZBsp",
  "key23": "5FjcgDExmHJ2ZhucuWTrcP2Gnar7MzcvEPrTg2KHhrNPcfWaRvXF2UpvWFua3T2odMLkviudd2myEMgFeaPop5HK",
  "key24": "49hVjzJQWfmaau9ziPS2Tq23JfzXcUitqbb32FXFBwpxJ6LAX1b2RZa3Hgs4ac8a5A1mVCbA76yiKLxxbp8fDj1Z",
  "key25": "3syXsWJvq5WXjnkN7PE77DMRxRUcGsMgvyDMiYNm2J99UyGgmTRS4VXmw3EhMM4Y9XQyVU3rkfJkvffB9dywk95h",
  "key26": "LNJTLoWoDhNFVxag2hcLc9NQR4DJz3QfZsB6WyaVckY4zhrpGSz7rab2TcMVoUAmUwt5djteQrVW1soz1B2SBEQ",
  "key27": "3RrcRtzfsFQ2UszebsvLzSDke94y5emk6uwUty7SC1zkC4aDU144yJMonHbH1fU1zDPRKuhUdhBNJSu95hYrDXSX",
  "key28": "4EYJTuwvtknbCZQKSuiP9YxmSTq9ko9VHNTrMSocApyz6XVTTjufbWQXUKQE3QHDxA2LrLGxG1XY83QoU1Y7hdG",
  "key29": "3Z1e2LjqAYsTyuezePqFxivScBZDWhzuRb2SzqpsK5kz7oQdXN7Qm2mYfGoeXreZ6poToAbzkCJzPL37TFsE2aDB",
  "key30": "4uVYwUXJtHnGZDyHYciSB2tuM9L793BMZT8e6maNTniEayqz2bRjsYsn3LRdS65QGhqTSDvzmx4rp8bxgGHbC54E",
  "key31": "3bB85SxssFeH6eyG3HKNpfSRkywwdqn7YSRsbPyqnHM3amjqxHR2aW3SBjKEfrK6iZNXkyX62ynptvRQu1jr7TJ1",
  "key32": "3S154waGFchXp59i2NgryNPQeJJNhbXRgJrD4r6BvPnTn1zq4koVk7g7ggFideMfmKYYWvLtNW2veXj6vxutbCo3",
  "key33": "2Bmmu6zPxKhaFyVVkNZVoeBWrY2tgXe2zpea9SfmMnZ6CwLpdfzENUi5V9X6n91M8Qo2mnQUyAxamxEpiEYiNYy9",
  "key34": "4meSdY5TveCGB1eedn8xtKRdRNCBjeSMGFRvSzYSWnQPa2e4Q7E1kNSp3qZCpGKJZhvTDeyM2ALnW9TSqdTX7sK8",
  "key35": "2giozyxLRYp3KwubtXJWKxq6B6VLLKoJf9ZiSduwmgT4aaVtYKwhWiLyxrc2xLUojskmFenRWQnqstFN91QSzSmM"
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
