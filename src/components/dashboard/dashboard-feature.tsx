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
    "mGVWEW5yUYAtTFkAPVw4HXDGKX9SxUn5qhZchKm1iQnoL99sq5b4CQCXxspa7pYmedkytp4aLjD8upxh851av8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPXn7esvJeLfqVGbtVSXR9ywrkKUQG2WCBDVvZgwubPjbPtp1VSi7UExHZnhNRFjvJ6UQyaDjM6kWFri9vtCmTP",
  "key1": "57jexmMBhvqpDXxTeeWvgsqUArcqakvPZyUTSYdGz4Lccdk577JqxazJAoWb9bUdGU7p9k7vjtdeWxpa2YuJGkDP",
  "key2": "5gUtyV86WNxtYEnXMXgimqEapW5ugxoGSWouk5XdYRm1nnMPVUUiL5guXdiUcCsRy7ZH1skZetpJmPnAKbvemGK8",
  "key3": "5e4NiddKWsw4S6X2R6FBvTaVydTcM3EPck22756eC1tmK164QE3TWNJPcknHM3cqTVhdsNyctKfw9p94AdDFdioy",
  "key4": "EsVS7xpd2DRoFeS22WCZXBJE2bq1qQLWSBqR7HYXQHwowtpgH4LvkfxikV4UiAs5EZDFi6PqU8LYog94NZwKJr2",
  "key5": "KiLMX3mZJCmUnZJwq4BnL2kMCzZwsFSPxqAJQKRULz3wJYvmvtiaupisM2hTiZGn67AoGD49s1cFXuJXCHnD9MC",
  "key6": "fwt5XQoFwiiiziipFoVRt62AWnYZZeHRMooid7toaR61qJ1iAee3dnqWkY2FWvCGwsuYVTWbsGh9a9FR1K9N5ju",
  "key7": "2TU6h78s7qWFvraR2dur5jVWRyU1tn14td5Yw783vDPtHhYjmcRGNhTm7rrwUcXBKijDCQBNAXs3owxHTrNcZav2",
  "key8": "vcDMftY5WK62cVE9Ueqo3zxU4gc6F5CdQnNV3QhrpHFWDarJQqSGNeFtaSDFGz4Hbe7SznzmNiim8nSgFfeTKHW",
  "key9": "4GUxT2AJpyxWMcRgi4KLACRDVwZj5gLeXBWSiegg5SCmDVD7uWesiiW72d7rS1BgkiXYnVc7P31pX43v9hCd6AKv",
  "key10": "2DFTCpeA7nowCnoc6EhoAS3YJ1uNAswK4bFxLQQjZgbD98E3eXcgrV6PzGriPByAATAKEnh48k7rmra6yNBGRtaV",
  "key11": "FeamNTUXeag7gohNGezn6Xnb4aaWwTafraw1M7VRKELwVpTvbudtD45YHLc5QU7FV8C8H5FqHbW1CKsgZzeARUL",
  "key12": "3qsxCmBUMMuArTJ24tcDdzrJ9DSLAkT4qRhXbR7KRRvZJgTVtXHP95WZwJKMgSr8ei6d3hzix1N9cWFGRStChftG",
  "key13": "45qycpt6QYaKSNZhB9Q4UiQGaoie1WbcCvSv9LztdinqvRQU9jgddb3F4bP33gmKPNfeNSu8hq3QuvkevpVndvC",
  "key14": "2sfPydEZXhccHrZ6LFGRK8tS1RTBmFDj9eP1bBKYzCfKfDZBLpaiUBsxcintg8Kzg98QXcvuPUKC7RaTbXiX2Mcu",
  "key15": "54vQn11vgBqkzHyipMQNLyWe2AN5Lu13LmApiHdf49pVzU8zAqx26kQES9qwh5Leqsa1TQ4Nvir1tYqMDb6ksBtJ",
  "key16": "29nVkJRYaGdhzn2PtzUoHuWXJoU51hAVWd96Jk8J45LJWm5oSD3FA6ShkyS3KsVLftj7bsrRR5Yoy3bWLKekUkA6",
  "key17": "5aT4SgyWUoqMFyXM2WRyXMPNPTM5txp92FJkXsfEJjZwxjt28c1Y6M4BWsAqPQwSFed4n4csGJ7WMki3Cwf1LGAb",
  "key18": "5QZTBJe564EWzz89yEXkkHcUZLyp9xG1QBFxCrF51qm4ZAJUhk3E5tKvt93XNBkQAS1vyDJi7Bfi2WEm9BbeEBAU",
  "key19": "W1SPDmtyjwK6EorNpAVss82KV9zJnrTT6gzbowHb171rVSFrBtuQS1R4qJBDvhE8tSVNpT14JdHBQGsdDqGURYg",
  "key20": "4ZaoKQFkhR6UKCynLnUWdri9kgRmL25p3UvPJznNS1torbRTb6CnfdDGtf1gMdiA8Q2RDmSqLX4hpHmuFfUyvCmL",
  "key21": "HkfHd4rFQR1hSn1mwdfRALA9ZtPLbe2QFaFDS9tM28vxT9ThZPX4VTdx32t16UMDPmz9NmYmZLzP1mnUgkKoFVc",
  "key22": "2cdHcnpKZRX5S8M2mEAUqorqsNEPZJEuVMQRs1LWjojcrE4Wu4JkWvBe6ZuTtyiEndiQwkCVXpdase2SWwpWaVa7",
  "key23": "5QQKxEeRirMm8iYAMhiAtyft5k1xP6MNDik6NJjtq2r94MwoDf1tLh7jRcBV7a4Gvu5rDzdSftFGdoapB4FCn3HN",
  "key24": "4ZAX6FL2Rtbxs2PwSyTNfDEPcXYCYmAynvLMt5V7M1xtPxTqSYvKQmxwZMLEFLezNazKgWRBTzPCCUaNGo75M9R9",
  "key25": "2E5uGnXouUJjMUgydxACTtaLdDK2dkFVDueyU48pQWEHweEVzzQFNWdcExYnKbnXktniFKuprpbrJWrkdXZt4r8X",
  "key26": "5AbL6Kaq3fUkWaEuAmmX9LtVtheVkXK9Kf5V47FnBaN8PUXC5kEm57osRLYVDrDakx6t2YYKMuj8tzTDosEiCD4T",
  "key27": "3ZrWCdsi5AJ9QnuPYbBhSPnft2fScuUnz9EpuWwMRqg84XiwbjVFxdwuMQ7L59MS1uCQf7hNHyFqga5DcwdbcWqj",
  "key28": "Fhfqc2j3iQDQnQPvAXuRCMRLQD1tXCvTwwyzbeWheeZZqJEk6WMwPcH6QMkfYBaCVFAYEfjnQd5AqumGjrx47xG",
  "key29": "5bwzbTszwcSH7QiL6i8q2F1opAuKQGS7QfuxkvwXSc83Z53fgb2wSQpB9ub8ybVnh6UGBnDH19Rb5fcyVbQ1tSTx",
  "key30": "5AC5Xk8EExJAMJbsexZ6mDDRMuB4qxvQjGH7j8Vrzz7P333d52ArS6cowpwavz3qPn9rozH5Tq9yxquSgBgxaetV",
  "key31": "52cQJew2RDVYB7ruoCoF2aYvxMeFd8U4NAeGLtE4gjyzictuWSoCKP8ywtXbGGFvBQFMepyCh2icsHiirPsZd67n",
  "key32": "55csVv5Aj1uZy57zvX6NHgWBin6t7AnHVZab8cwoMSuHR2F1Z96ECL95ttnDSqYZg1C4BRRsCVcbiQDMfjXhFSBQ"
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
