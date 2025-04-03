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
    "QMSbczvX7bgZ6xn3sBRkR9QSWbRSqo5SEL6iLDvA263MjYvaR2ZaWyXSNbPZY1ntkYXW4r1nd6kc2wHkL8T1xwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jgc3gz4SY5HtcogqUArP396LpmmEAoyLSJqyZjvTWzBw1MFN2xdoJkYtiJ3QskFKFAhiuSkfmN75eBseNbWw3Uu",
  "key1": "2uM7upFn9UZZhLvoxshPL3ZEkQs7GfHvBzym2nRSehZK5NuFa8vfTbPP9S5w6qj47AB8if4sJZYRdzGDELauA8YB",
  "key2": "31eamnBS437YXpJj53YAN8UJMPCdWFiHnk4ocjyWrzdQYBCn1WvPH7sTkH1mtvAkXog5HLgqfkrJdjhHiXc3nsGK",
  "key3": "cnsQWuRu12AYXwFrAYrumC1Nm8Z9V1BzDghc8yRVsKgTgrFUVUZTNrCrXUk9QMB4N1gLcjpbJK4iwnB4JA2mVnt",
  "key4": "4kGyAzfwpWcBRab2ouq4m8AP6z7teGrP4ffQV2tVdw3EPSwnBbvGLTUizD4QZ8ModnFEWk7fwEiPq9FC3rvB8VXY",
  "key5": "7mpq5zuGHdp5oHkYoLi9ZHjkdT8d6ojqYxEjaX11PR1NhNwC8M8GC254iKq4jg2KzX5pNuVmrPKBeVPRTqRLFFi",
  "key6": "WD5tXDnvnK7ejc78wJqEt5yL2KSV46sZJiJ3tCB4umpSemLd2csuJGhKEBzDGSn1VVhk6XyTCu3cmiNGsYMhMWi",
  "key7": "4ZXdeffyVrn6CQQjXS1HUf7TaLC3FRXaP3YZ8D4TGDrNMKNALp6r5raL3Ded2qLQ5mQE4yjyf4RdrvgSYsCM3rCM",
  "key8": "2kLwx16ouceyvZJAjkGmx5oAtWemWtVS7toJjBxvrD3BRFbv9H6NLjttcU9rk351FYi2eKk6zotWE7Jwg9U2apsF",
  "key9": "45CFBL3iQV4wdcr2YrmTEHBtRg3shCRX1398oRV9qrgififrzhDMjNe278UoWccQe6AQGUCHJfHeNqeEN93GDPVk",
  "key10": "5kSNu5wHW8DEtAminxzYJoMp76QHD2HjBgCNC2itdvpojqkiqWep3sg3BhSLKvReJejBvusEuw3tE7zdt66mE7DL",
  "key11": "F1JDxhmbt8a4kbNXBFymMZD8cewkW9oVhp6oVhjhy9bxRDmfbxZA1R6SJKsPJwrnz5sZZruarPY24MNutTr9eLy",
  "key12": "2rmZ9t1CjgcNDdiUE82ckn3PPsXieQPPu21WufCMm6NHiyYoHohkB6mfJZi6qnQcPjH8bvdmUjst9dqPE4Pc96SF",
  "key13": "3V6BDEfiCmUDZARuFTMEN9wdBaLE3xC6JdkMHD33qf5cN4HUmqAvsRrwfSzKVJr4BvR4DutRjiybZoXbgzEgd1hP",
  "key14": "4zvMuqeQmXzS7ADUM21YFZWKq24N4zQJY7FV1wiDhXhTj9tLzFXjoBecpCqK3pHTfNhWNTYoqpPsLyqvCk4cCSvQ",
  "key15": "2iPVSHgAfitzov13JLbYbJP9eJTB8QiitYGoMQhshbFVDPETAnW35gCm1L2x6aqFn2tEfExYGi7ZksvXc3bqYm2K",
  "key16": "d4eUN2CBT7mdPuTEsKb6Q8MZENQseEq1FZF9U7nPmAn8Kb2tzB621HUgrr8cZNNUE6NcArSdxeVJmgB3k1QHuyA",
  "key17": "521LRE3F51X4RLAQW4ZUQzdfNLYcEq3M1VPDdGjZ5JNqb88tZPdR56bkCEQZ4FHHbWHNwnK1JyZsF6udj76aNJs1",
  "key18": "43VvYCYNAxfqjp1UycoLiGQh4UZDbLUxNmb2CjuS21y9E1QYBMKhVLR2gT9eFr1GUD8W5v5255oxP97cCmaQyUhS",
  "key19": "2sRcbd2tHHCa9ZCY5XHrLx6NshBxXKTKH9Q9CHvkpyJBTsy8DLBqfujVt646BBfeUxZ3Fd78Fe3XKdkTeBrxvv4f",
  "key20": "5oawpUoVAqjZPkX8JFKn9D5dsy3mcuJuqAEX9VoRxY7cTHaNr8Hb3i2Ebf1V4fjtEkz2qayVRTq6cTYdBcWm1Scf",
  "key21": "4Fr4PLWHZrPWanwoasKVaEsqoF4LyMNvc4ebnY2qoz9sPtYKpafdpeHhnK9jjABUAN8n2oPd7aTFLLY1okWPGfER",
  "key22": "4v4KNYc8NM6XU31pjKn2m7ZZRU1A8UTjMJGmnSX3sDEh2qpXhr727czmkdLanV4ggZCCVJNPAQgMBpwpYcPThGtA",
  "key23": "3FuDxqQt2ywHrWGLJQz2ZvJJLeVtEajzRXWtTbTfZpPgoRUX5BskhJSKLio3jqWRSBSYmaJbixq5jTV6G6GX8NCs",
  "key24": "5DP7K2usN93o3BAyyHPNAtr3BtbXxvdQMdQ2AeBJeiyCn6ZEHLqRXtMWYaMRbm5CTUURrEJzGHijGpX6Zqcnydyu",
  "key25": "4wRx5hYz2gaBeCXsEneCKjXbnHuPEz38EgQtvQuq7BQasuHPEvXsT8wTNKo39TayjgjdjRMq9QEP383AmGaPukh1",
  "key26": "2z9wXrL94BR5DQYZwHSw9TTM37TYiHTgV2kg6xMrGWeofBjEmgPst3SbCxXMAgkashJu73zZrKF5DKJMtW7Cdsrr",
  "key27": "24gfJKZP9AsNLyyzLNYQH1zMWUkNaMGdg5fFTqtEjArGq4iw3Ubtn8VDr1QmboqDDamnf4PAtZznsPop3Bsg6BYA",
  "key28": "ohAY3qKJhCzBCoa8xaZhqN4Lpou79v6aN3NWiemCqg8cw92xCo9sNdkZN6Khn8LYo1TC73KrJ7xYyK6CwSC7ujW",
  "key29": "2Dh7EUxnauHtVw5jb6zbHd8NPvpkkWq4x7utbYwqxyKfPG94T8QVoTBEhc25vsqT2ohdGCVMGvfqtMqPz9LoZzr5",
  "key30": "MrEZsVwgayU2vRNqPX2BAP8EARMscpBP5QhmF84GzG53Sa2K4ohos3cbqTsux46AMrnFuRbx7qkFhhWtMDnuujZ",
  "key31": "K46wSAdga1EivgxQaA2SqrPd98qTpvqfUYwtDF1ywYkoZUVMHzF12fbfsudpLaNMqKkBob9BG6jTYp7Xcjdr1yS",
  "key32": "4wMNHffEsYA1FGGSQP4hv65QUJRKWtRuuWhnPMxczw1pNtNXesGUbvpsxs5Sf2xBBqk52bNCGeH6nfyxdFDTAk7C",
  "key33": "j5qFvnnrKxV59fWv5n96A8Gih7SLVGKmAYwkxRTsX1BkiwdLYGXBYUHUo9rxjDEKh2WkAsWJJiLG9YVaeQUkQx3",
  "key34": "4H3wYmG2yjWZjhwuDBZqJYnFGinkJrDnQhtNgb7shcSV2XxLYcj3zjwpWAFyouLkVoFWf98p4qdeMGcTsMA4vgA2",
  "key35": "5Pm9Ls2jkoJJ9w1UxMBbzzkbggnhGFn65G2xThsDpAUR1eRortU93peKwQTaFh5vj5TonPPujm8B8ntmkdg4M3Kr",
  "key36": "37xhbMYmMcFhvCrdVLkVN9iocJ9B2V4BZXRPeE2jTAjyqntkX5vuitG9LJATpmCZPwL8xKLpBgutPGL7EZCrwEc1"
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
