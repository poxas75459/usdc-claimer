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
    "3tZ2u21Z1sxPaafRF7bFgCxd47H71rGqdwQ6gJGE8jgRzdcrQWGYLhBTm5TqwU4spwuyXzGR67sYMN7pi2RAzWkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWByMYTWWPF7MprW7JqgJqL8bES4UhKBeUU6NyfiHwgbJteUSyrp6aXY5cXaRxGa2oqqXttvAZUMfu3JwM7NFLV",
  "key1": "28XdotK4aCHvmYHAVSMBKf6HCFpuTLbDkizaqQTktuScaPcHGH5LELYQj4y1GSG9vbCoWTbSV6TeptFqvgNJa3wu",
  "key2": "422hC4r2aGZUv4Pmn4fEjsKnXyBpydfRAS4wHb8BymEd4FYmcEuSRypQkJd7KjKoz7G1gEtyFAEKzVwf5ai35FAB",
  "key3": "3Ezh9gBzQTeHvvuVWSPBRfSooMTkk1CTRS3Z2WTov3KwExwDAxZ4bnRbHjMgvKcpJcFq4F2Dy2dFY8f7HDuHvaBt",
  "key4": "2dSWK3bw9cq3NK1iJW79cRqXV3nz6Wng6vhTZHVVQ9gQWFBtx9YjVpPusQhHwA9gCC4v5qbsuUuWdWmKnDLMHQeT",
  "key5": "4CRC4RcSNaGUwVHjnbC3HT4Lk9WiABokZtH5ETGiB3k2oULzJY4eK5gDsK3WBYw1A7czfoEEC7WRGYsDSZAAQFT7",
  "key6": "5MR3EV6SCh6ocesjfo6AbtcVNEtmvtaXdtX7MiDgKicyBva1ZSS3PKgZV4an7gfHNsjHeYyj7CmbVvWLgPwwWMkd",
  "key7": "54hV5wRWvqZ5cURepAgr8mQGAB7X1B49c9T46XF9CDnPRnU3hbJTh4Ciismt29BXceXFRu2LmiGd3frC2uH3YRGt",
  "key8": "4q3Q37bk6CSEAwzpaBxfMGLYCh7WgEpkdWT2bsYFhqGbNBn6d5E6uUiCLrUokYhBevr6nvXEyaQNiNZBUS4Njw3v",
  "key9": "24LjacDLXxq5QRJMYMCWv5DQssevJWSk4U8deufb5nyAi4aPAJMqs1ooubU7ioFveB3Qo6noAAJtU7CeuPzQyAp7",
  "key10": "58B25PB2GryybH3TzaZdFcyKR8kTFo8KTqEDdpuDJnFFMr5WcJM8mqiZe4sDgSMSxKdBoxpK4d5Hi2FncPnQBU3f",
  "key11": "3is9YrdMHYsoK6yXwyZTYVHEicZUfcmtWTPbMNshkcLZNqyGHKG1bRQ1iMMgVTtnbR6eJnYh6XwPAiJ1FwP6sxGb",
  "key12": "3jzGpzt75ZkeFisKRun7uq44CGgahXLc8yzfKWFCh1eAwMSHeot6EEw6iYjGuNWH2MHaF6pXXwcyP5gkSMsLT7Yx",
  "key13": "34gshPWr39e8VruhLZHWLa8ZgFCQd2xLvfC3MXCPUc2152JiSAMoUEa4ppr5Gko4kGqet3tmqpCzJ2quwh5VKBXd",
  "key14": "4m3v4wjRWP5hD9fG1b15iXfFnMVAjhyc5seWRxXaME1oc88f7eKFdTVuYwZJJRPqgrjRd18Sp49nUfgRXdPH6E5t",
  "key15": "31eU5wMqZeB5yvVc2WWYf5X6FbJfmdTmktA7ieVSyJGwp58ax6dixNN6xEgigM4AyvV4vVmGQ1U5HvtTqt6KyPvR",
  "key16": "x3pEJTgz43suxrjqQ7RuW8ThZVXoveKCNHsPJsYvv4qgrFmDz62GSgymHNPtcJhnbEPhkECGVtfC6VjUe5R8khY",
  "key17": "3DpxwkXiyjWzigmTm4zaNqSq3dxZM9kr4xnDH9cGYM8amc6yxVcyn9mn5EyMsTQQEHSeApNEAjMyu2DreWX9ieaf",
  "key18": "4bdut8KGeLq6sr5JUyYFpHJD1Tm8s7XJQjMk3Cpbd2knxBuKJdPLVAkRSfQGcbKzp1HAhcDcdsp8hsoKxGTVyVPn",
  "key19": "4nB3ujsvHjERRx1x1YbR1V2GGDNEx6NmVnr4NXzYrENEGsEreSU47Ap2Ue1ofcUyNPsQ38GTFv3dKjcB41FAQqiL",
  "key20": "3ffJsXzag6LBfedvVp17dYY7gGoPpKi7K1Vq1ibpxd35DAkwfFxrqcG7t4VrgXo5vXkz96AdnMqc7SsAun6kS3FR",
  "key21": "2bF4mJz7D3g1BV2vtK8tHkBZsigwg5gcv265UVFb1CL5sgPa7tMhQjbZggdpyLfHgy9mbaidqyigZRFzdrtARp8g",
  "key22": "4PD9CGBLTKVajzpJvzvdHFv1Q2121HrtUunDYnYu1Bo6Q2hSCSP3iVQguvDBg7u6Q68t6kj1aYtZsfEcMt2miXKX",
  "key23": "3XC8yGX2MQtD3PZLPTsCjv867dDAbPiq8tFyh1eDYWJakejbE6o2znHLNHmxZ6sddga2AVf24m8ST7upozFNMARk",
  "key24": "4skaXX74k2XyND7p31SAz4nmRicpijxcTNUAtZVeT6yrhM42Q9gnaYfHDshJEHdcHLNiATpZydzeqiVyz8SymnCp",
  "key25": "5S49kMYN3opeCc8QeesMoRF9KRENuaYrZX6a337eaVhy6JbSwGggJ6HdqVnzvK8SzE4e4ffXZYh8npkypnrzxd3E",
  "key26": "5itd1zyEk6iwV931VcuHgsU5z3iMJNkvpj1ioXEQv2maYoLMofwwKnE8bzkmzbjGJfUmxGVLi1MroKCDomV9Su4i",
  "key27": "5hBnStn2VaTdgUudxs7aSdQhhP1EcRoNgKQXnz1NjLqymR9i96PJhcbJGwV11AUvHRUAYH6aKgiFDVjdf7tig1PZ",
  "key28": "2dBLLJtXppvKbmm1NMRimjZAPA8qyrMtnNR3aF3Ci3nfD3eD2wTABKR15yvfrMr8fNdP4iWT374doPMQZ79p1tF8",
  "key29": "4F9wz4ZUMxdCnQaerDJ2VAeWSs4iH8ZsZFZQ5FPDZSxfzjCtLMAce4ukXK1eTcDoATGLJWMoS94aVU2Lky1KoeAU",
  "key30": "5STbn5AkhdvxYwGY2obCzPy3GHM4aQ3Kgp5Vt9aJUDvCF5RW2c6SirBgiHnfxectYD9dYV1LhroZ3GAgSf5CpwoB",
  "key31": "5mm7a14u72aqcfXEvCgYLPXh6dPQ2Ns5ftqyHKh3QX75gbB7Ksazgyd8NMvPHhcYPQYUtV12Co5PnaSWUtq8zqp7",
  "key32": "3BVgfQcQpiaZbutSRtFnUpVuDg2c78cjBEicZxLvuXEaUqiJRaVjeNP39ux7PS6FvkfAV4nSQu1G6AZV7Wdk3eo7",
  "key33": "3181uVgn4rVKXSCuk1ZcD7SG8uYuNuKzjdCVNcp1jPEgr7XNdKygmvxbAVGz6zTEy54siRp4HJF548Lbash1kFjx",
  "key34": "2FCr3P7VwErPZNzZZtdSzTYGQjehU1Joq7NcRJjFCW2DH7c4YHkU4DGkve3Txv4YfxanxZJ5Mq7gPyRvsydDmCn9",
  "key35": "5qHSaw9413D3gjGCghDEdprVdwXmZdv26NfDXnbY2bn1syLC14snkMYoZpM9w7eq45eJxpFtQ3pCVaWGxtqoU9r4",
  "key36": "sU8NwFJJTm428TiCYCYZfWAmCXZGWknmCu9x2dahAL9YL6ypXApkyAwUktoqfboKnSoCaifXEoch1kDtiRaNKK7",
  "key37": "iJzvZRMWeAHNTCdR9wsnj8kEAVM2B6A1TZQX9R8uyRDT19VKzoGqAdsnCA8ZAqcLFZV97hFyvSxxzoBDeyvVFt1",
  "key38": "2vzXSqUFzS4ArnRA3P7YSdcAwbeF8zb5RdwKoRNocnmstL8gHhgfUVG4ANuFvuMVXVoEBSrgoq2ghVZjmKxHAZB2",
  "key39": "5Xu5Z49PDBrh7yUJKTfSLDpapdxtiSzev1GLYCp52g71d7T4dMc7ZbtLHvCvoySjGg2BU4BCPxV1du9H2BAdxHHM",
  "key40": "4WZkcAry5U4jVApbvfS27Yv29Xu3qY7wSCdcu8YrxGaJYbtKG2ugeBPFcUnYxtcGHb95GiyUGKyPrzPeusdYrhBE",
  "key41": "2oQDkuYpGntJppYuALBPGfEJjvJggPVNhGymjCGwPGKr3uS7kj7nAdUjs3RiNAURBo5rV2hBD7FsW1MiJKNVPG1m"
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
