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
    "35NJG3xAdtzZY4ZmdrvHY97HwZQPThGkMYsb3LFpTe5GUDADPALt2RZv2r55izKiPLgqZ9u4WKSR5QDix9oGGd4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64MxqSWus2YoGCEMStvXy3a6p16KGqZSJSYa1m3nT3YJnaaFwpjfd7i2rEznkvyaZNYJsgjLpN2TeZSv8yLwzRgH",
  "key1": "2x5x8VJJKsANMhg8ZQpZKxodGQHRYAd7Jnah5GKYwb6Rb6jh9tgNdJZ3cYJRpaqosMrPv98YzzP8szaXfFHHFp8c",
  "key2": "raNdGMEtGK7kpzRBma9FrnibCqDZy3i7o4bfyg4mpD5Ycu3WrU8nLg8pj9aMZKAuk7NUmMogse2sBvcPHMoMQpp",
  "key3": "cX7CeM71PJuQ81XaPS71rBmvL92tATHagRBnnnMQx8tsuk2e8Ws87LVCrx1a1oy1ZbFQrcocehdq5r9CNk4nboJ",
  "key4": "opvuBttZFVK7weTDj4FViiQPpHXq1vNBWUwtZMz4Q4ji7f1bCVmxvo4ZVUfpL2X8CJjbgUg9E5XKDoxyRreJZo9",
  "key5": "5FdaYss1UXAXwxTm8TxouqkA1KHX9fdWGVvuGU5X2MBKooTDCV9CKjEunUGA9HFZpDA3yojD7DqFQWcmYGG3LeMD",
  "key6": "4628JAZbCkTEYBPMZXHmZr3TTm3d46fSzx6vRQabo3VxdS16Thkgw5UkAA3DqyTBPy7NGKGqvWpkRygUUyGExKp3",
  "key7": "53zW8LwJs9ZrYvUj3FPqaHwG6RUN5cGywoC7r8EZXQ6b5MrA5BwZyApWJnmiPA7oSmnGGcpVRwrdS8YeeWvbVkgJ",
  "key8": "3HZtRMUnzhFDYxGN2kL6YBKc4RLMCt7VX4tPNL6SLMH4B2Hx2goxJEJVWoLhP5RDJBriJSzjTLrcuTZh6eBj3dgd",
  "key9": "5onSuT3LLsVow5Cph7jJNKt4esH2X8EPfUkazQ9uBsDNMYBq9YHAfmRc5zQC13MRcu69vCwGMZAMhNydQdTbxKk7",
  "key10": "Mrd2Y8nPb381HBLPKdBzXHcuLwTPj22uGUtmABhmVHEVkW1hHbCQwHsqpEGMHWxbr2eHxjRsDNDsMF7o1MaEmnX",
  "key11": "26Z6o9N3YrQB35huQGZAzTtLu4VSm82bzzLjL2An7MmpmwyaxUoLer3PCnMEWLjXLAWCZc2x1GrDYVvDRyrQrSAg",
  "key12": "EsRFLkUJKgRQ8U2F1gSStvqePknpwt7Br7H2seYepec233g31j4SyLBn2rsMtcZ7bDAzHDtXdgWy5BqXyq2GQU4",
  "key13": "GdMVKWjgSNZgQzv67sV5nxVbFYoPgCLZqv6geJotWx1XdX3LksC8TcwmD7FP1krzXg8nf7swgrD92bv21knh1Cz",
  "key14": "5pcphE7cyELuPyzfXnhqaLSYmMW22wNUzFmNuknLjCMC4quU1JYvrr4EamEQeHjRGBRRxYVQ8JEHPdZGnzF3b7h1",
  "key15": "2Ppwg4yT9aJPAvP3ZKKBUJPSBMKoV2znxqF3L4qmKEQ4kHePqhJzCfxqDbzUQv1Sut5YaamMx4XdukCsyiQWQ9w2",
  "key16": "3yrZFyUGMqk8k9VwNvAizwQ3pWDWHJKMUR5bec89z1sSd39BdFNP7NaRHeJxAu1jbyS3UiR7i4117yqcyi56tX92",
  "key17": "5AN2Lp1mST4x493RCXRVdTxVpMPjeBM6gQiKZdZoRsURCbgs2xwMvVTCE8hu8mwstW6QkWdnyy2HU6oH2YF5yoK5",
  "key18": "28dZXZnK6xuzvSNWnte1Edm8kGEU9cEnsKSJrA42NFQSNWci6TcYvVcg15sRuNjbvrj9v8air4d7DtNGEuGUkfuY",
  "key19": "5zjQv3DbwT12n7VrLxtocuD7RAjcb42zHFrraL5GyTYNzfGJ59W8ECiWwBgiAE7nrUedhrULHPDr4gjwji4kgSwK",
  "key20": "33EGFGZTgXjueC3azAnyFqGKoQYiTScufjH6Rcv2vhp3kK58KRomz7QVpitvEKGCDVVnEyKfm5SGh3NxapKB7j3m",
  "key21": "4Gw2iDQfLJ6ziERBhkaqw5wbRPzhJSF2yjM9dQSCYzwFTZuCeU13k6VA2KJ4dG3Aqx3om7KFVpmdFsPFiNvbmvCA",
  "key22": "V6Td9qbNwpB8RgQN9hKzLJVLap4JW1a9jB9ryXeWDrNFaSWxJXytoko6i238mjyzk19sc6UrqwTqvMdvZL6kqDM",
  "key23": "5oRUQQD5NvSHqkfqUXsL7tRbSsAzc97MW31NbE9n6D3jxmDKZfmbcXi15XGCBzdnSk3pWzmVRB5JHPk3zz5u4RhV",
  "key24": "2AU8kMwcqkSqJWADy3eGtDfjDBDpBdTBQXmvbPoXxBH5A5hRWPhoXgP9YsaKKf5dh9NepNMGUihQp4GsPbFqAN12",
  "key25": "3guiGebAw9K3TVuRiYQXdJq6zntM7Z6dbgDKuU9hJtxgda8CuFmPanmARF2DzWo6XsKVhAK3RqDwBiH3ofBDQu2d",
  "key26": "NQ4GpRt7W8og4n9bzxW8UHxKd4xAHJw1EBfFoTAGEDnQMe5Sc7qCJ1otzcEdJsyo7RyRjVFwrci1pVM4vNpb53u",
  "key27": "5TvYBvGi6KyHRa2E98FChMF9FfjH3JNWU3Jcp6N676Zt5YQ7aQPfPPHdFtRJ1KVDKBQD8MaYBm2kCShJmxKhopz3",
  "key28": "5aBktDG4wQh1moU5UXb1nGgQiLGquPgsP4QGMaMiJXRpopMmcPsTU42v6gMAoXs1iequRVFBvgyCe3DsvrsRxTUP",
  "key29": "4yxNKqPiMbT3P1LiwH11gZh7z4ZEqTYszKvYeo7A9EFER4CgyzWmzwyxHaM3CDgVmBqGydZi4opyJnSNrUCEhw3i",
  "key30": "4WL1wbU5ZTZ5G65dYbdrNShawuoehztRUCvnWqxtg7MQxqU8DzZ6Gym6EbvJMDsbWviV9ErnBMqh2SPs4VvuBCUd",
  "key31": "5LNtG4g6MR8oxb6aAVSFYFKKx6XYvBtu4v1iFxwVC54H6cXvCkJAxE61yYN2UJ63Ka33ScXR4SRuKY16yc37TS4B",
  "key32": "c6ZzDMjBznHdoCYr6P5ums7FQFQbxCiQJKRdBw3fgXojyvv6CikgSSh1oidTBfx2TeTL6Y1AuAep6gNfUbKKY8t",
  "key33": "5fQ8t2LbZe7iWcVm6DhEuiwc5uHQDMgjDBzWMZpm8X88BTcmi9dd7W8pDpNGzsCFafxtdLxjFyky87WjiSqXgytK",
  "key34": "5CQCS1MZgqwmoGHoTFqjvzMobTC1kCTrDRGwyH5MZufnai6Bwko1S4TuWbCm37aeHPJWLMRXuvhfv2yGrnpMoGxh",
  "key35": "3q1imJd4rnHtWxUyM2aJZvVCMTvE9Wvj3DrUx3K1tcjhzfDWjFRBfBEKQDwpvd5i1Zs2cm8vxbSbKY4Fdi54aoxt",
  "key36": "59Eahbn5KPAm4ZUjMCB5Nh5sNpK9PUEvQ3DMrDSFuvkRPGMFvhDauVtNwNbffGLRN414jZ56NzPt6uXBSqsH6eFv",
  "key37": "4VnAKvkyXBAXyXRpQo67q4a555tr7yHKoDrvYw74PBnhMK2vnDHa8Bhy8L4U3pHo7aGb8iE7LZiCUTZMdFYGCmTh",
  "key38": "421x7L45AvdKmugyQngvYtx6ZtnakzFYFgFnNG2wfcDdbgQiZ5tPBU5xZFrdASR3hPVKVLGtsfDLezrwFpsxicYk",
  "key39": "6GwvQ9ZMnVCHv1K6fbFwUxAFcHQojc2ap25TbF1zCwMhriS3Sw9ovssKWmPVzn3ScLKCNS99VQ14q1Xxa4XKvVX",
  "key40": "5urMHKnzZzmjm9LgjoDgHgRmVDUYdwuMHM6Xv1txznj1dttj2JmiSbwcXvQ2VrGALZBWEKrdUknzfc8itx3weJzD",
  "key41": "4fZ9D8ZG7wg8QzdCfcMLsGZjBvus4priSDjjWzYfUazFzCxdeVq1MNxasLrNKXj4iGvFcmXKrFtkgiP8mXNzZzQZ",
  "key42": "QfcBC8JghvhMWQmdQkGdBQE73dqhvL7p49JP8DjpnK19fTRb5oBvNRMuKREygGoUzKf99aaJfzdsCySZi8GNLPa",
  "key43": "65eA5SjQv9QQ8PTobSovBMVofykT4aJpRgaFyWEqhdfDeMSADkouxxT2JcNK6G9SvTynQJooC1sUArCxjtRgc3WB",
  "key44": "2XCZU9fzJNqSbUttgK1u4jZgLwGNk79DHPrCTxUJ8M2yPzLcVwxtJvnubb8xraMN6NM6pRJEksTM5c8jnRuxjmiV",
  "key45": "5tV4NNVGMP5eUpuPtQSM4nAAGUcghdt6jp3QFMVc2TPhknvF7czStCt54YiV8JwFBTEN9q6WMhXDUUtErUoEVx9h",
  "key46": "4XS478ZCnpiR17SPC3rjN9dS2gq7VGGqwT7k8Ec2rtCugHitKfyE3e9YoZrtzFKhSDhC2CFTA9iniEYNanJHGX9r",
  "key47": "yPo2ZgVb3BFPGXY561DwxqqUdej8eVZzRUiU6T4i7dQbbKpqpmaeWrWJk5xfzMbrT8WSZ3TtQAWyUrnnNHmMMB5",
  "key48": "3PwvthqwVMtqCPbkWJccnwxL2e37tzFfpE5uY6rVsZCYmmy6dmJU4VRXMrkFiqzmeSZZ44A8GiDW38cPwh5uTCzy",
  "key49": "4rT3kD55q1NdyHGTG2Lvzg1THpkvojd7ugn6BpTDPxDEuxuR4zu9yANPbEYQKnHKrkZwNbHQgdTaowBndZwZFANr"
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
