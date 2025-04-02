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
    "3ysvAyiiCErWjmEwD3V8vsmG1WBTHUZJrKkHtx7f8SptLKZrNgJCzqVAAdQFk4UbkNFkjJJ1Dt452kVQhnxnxjqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUAPkAiEPiqFm7PJbzdve3zzk8DtmAL7ygFsXGVT9soeuxuEQb9p9GUgXiJfYM21gFL8WyFra6iGpfztC5WrxBP",
  "key1": "4Wb7L3mbUw3dWuABLBoJAdj5fgNMpzd5fe4v1rxyhsUunsmduZSk6Dg2fbgdFnWM5fLRz7XyT1TNF4m4TDtEaQQU",
  "key2": "4ESDSFXZRmLix8m8qUPQHyXxc4oknHUNzUkeUdrfduvRi7p7fW6Q1s7FPfzBEr1Q7xY3ibM54b2B7FeTUukPuBN",
  "key3": "Mx21coGyTmuAVtdbwDiC2xZ1xunQXWdZV4Uq5LyupXPNWHjnxFABkqVqvm1BX9YufbV18Ym3kZbHBcujZTc2zwp",
  "key4": "5PQFTdvfJCYiyoHMksrFKfJ9gNmKem7gvUKzeK3j21EQsFG2dtvyjhP7mNhVSqrKm2qEXexc8u9Rs3PUqnPXYZZ6",
  "key5": "PW3hGY7XUhd3aD2uanuMFZg4d7pwFkchRV38WGKNdaxnuvLPfQza1Ao5565nsRHUPyuXGTg8QmAvMwn2sYUHDwL",
  "key6": "3R9gVxQVo22oLnzMK7gbjNfLQzd8gqRizS9pWac8ybx3vfNjMcbeR1arnW4ucCkBfyR2CbyBHvkUKbc6B2tcMCKe",
  "key7": "5VmqfpBsu9BTk7Lm5JdXn1PvTLmdZBQrDMzsbiUAqDXemQxHG7NgWPfza3X5mkoe68cNUVH5cPup3CGFGpJVbLye",
  "key8": "4cLgyxudAc4FNZPpom1FPoaBKHgWjkvAuxRrnWm7PxuhHFuYKDRi9TCHgm68qaiGTmU1Jujjei1mN9dUTK3Sc38q",
  "key9": "2gEmEQap14JPeGrzvH1w7zu6ruAbTDo6g7P6SrJMBx7JUdU4xMxFKYcRTWabFDDcMZQH3b3vXUPgmYRNTfexEZNC",
  "key10": "95xGtaNxXZ4nbhkF5G5pHrpTk25Kk6Ds6Y83mX9xNVr61E2HoxvTZttuygrgja9WacHe5HEthkuQcuEQTcU7Cg6",
  "key11": "2e5gToRTZRkeLPwGoyRtPrFYyk8gzfsFWbHG5SyV2Bm1sXLhvmS4yNxKUkExjy36qJvmb8sDfT7oi734SznfKURn",
  "key12": "2zgFBD3v3imdVwrbWnq9LKLFvCKUsoPPurtBuXkZddyMxW2bP24KVG6GmefnzPJ7bShgBfTh3r553gbL7z7L9Bar",
  "key13": "22jR1hiF8x2Lk1zQrKoDVcyRnEvg2nqrdKpf95y1Mx8oH7XhX5DN5bguTJwswEVnzBkiiiHdXScyjKqCEwT8DDjM",
  "key14": "2xsygSmxzmEN8ANESMTBp38fvHny5PhgtW28FMpW5XLH7CiEDcoZa53B9AySZr9PbRJUXH1dpUtGgWG13idSkgFp",
  "key15": "3Uh8p6KVUGYR73MBgXs3avM5maLRk2cXTT5YfnCSTnKAQGCkapiVcUmKdBnUqyZU21r9QEJ4c5iyRVHDMogFywhp",
  "key16": "2HDcJsQB5VszV9ZyaAAPiUFJvYsRKPbyJ7en6SWzPjti7wox6J2EB3BA3h3zZrvweYKQrPSVQptNW2JaMTDNmvEp",
  "key17": "fENADSrRVUEYBXqTbQBS4LSZfFAUC9CoQ9SZB1mpaThZBmybFty2Dv7an56Uxbe9aXVLoM3WUqCj79FGJr2YNze",
  "key18": "2RS6E1UTXvrEVm3PJZWnT5pcubgqwox9skMs66tANC1wAYhkcDzrrYWNUi3VvaLfP8CTChjLoVsPLbXcmK6nKZPH",
  "key19": "3NcVuznU21BxznSFEecngngrMW3atHf24r5xrd4HxEF21rGeaM5ZkNBY5EhXiKWu5VcHgJN4Wgmdt1s7GD9HEPUs",
  "key20": "3kepd1VTAXP21rp8gKygmx9niQmBZdW9BCSBobwLV35UvdtPLYoHKPwyD8c2Cy56jpyT7Ha6PHKUtR7vByyJnz8V",
  "key21": "2h996pMg6wYBRkWVCDCPexKWneEAiJ29EREYALR1WYQ8PCcHkByr7VPgXCkQPsk3Pv17TtMEnpSfeDKzBmnsiDkb",
  "key22": "cPyBMVRSFqN7U6YHEC5my9vBP9JYSMwGVmh2EVkms8hzXctGk4Hnry9SJV5nsNvruTeitHNc1F72EQqUAE8P9My",
  "key23": "2qvrQphajgRJBvsY7i3euUAbzzjA4RtVL3v36r3MgqNba9pA9icDQPi4nLt9wVbiqhMHWzDARmNZcjs6TcarGGaP",
  "key24": "3eMmySG9qRCgk6bPyNjNhZXjHq8naeZ5c4tSAf5mH9tVjqwYNAGwECkt655am25WBQ3PVg8uPew4SDmWzXrC95ch",
  "key25": "5AbWR66etZZWqxzDyUVGJDx3Mu78hSLezXnfdU3YggyPiwT68mE6iDy84xiYitmjq8CggUwZS4KoqckWyCrW6m7n",
  "key26": "4gocdVGymiDJbpYS8jGki7Fe8S8eMgZUJRGfasMqMkmdTNf4GoZ5CQU7X2rd1bUSSeCxYHpqEwE2yNpVTeCA8jZc",
  "key27": "3Kxz7u23ZzB5B2ims2rS8Xmd9abyp3ScWUR1CU8LFGDCduuUAN4nuTYRLZTK8ge8jpXQoKV93houSFBfL9hnUFL",
  "key28": "2eVvSzJyyLwASBX3VAhXuLdViMcbvEgd5SrM3X49NnMRzfJzUfrLaTLGZ7ApaC72aAe3Lv46vdrHDLDq2XK8BYg",
  "key29": "vTA84SSacG2vxwVPYQUcVP1hVXyFFt2q5xhuH6AXakqy3iwxhDwyzYKUt17zad81Jgs1WVYzPJNcBiam6LxGjGX",
  "key30": "25168QS2R87nE8xGE8PxpZ9jmhspmSKPzvAn8n6CQCCzfJi2kxcctvtEJGQXNDKDx6BHkyNt7wjNoUAujt7nLa25",
  "key31": "BPgYubRZ8WWviEsSoWjUC4HDGff7Hga9dL5wMLbpYHMzEPgkjpUP8cNd1oXASmMhHnMaWMpFXq3f4CGYfM4cMLV",
  "key32": "2S7mscknY9tQa1B37BNDuG3QgFoPxDy11g5XLv3nEJoS4sF9KNU3bJcWd2ZwpGDvrLrmur7dHTnbUfkxPNgzuvxT",
  "key33": "5uxgmSWacgZevHNiMm5QWY8qm2SwZtPCQMbnwy2tsYYHvmttc9eHWF1MZCpwV9xQDUSqi4VGGDanQg2SAHsw2Fy9",
  "key34": "YLaqjh1m7vSdyAqdjqifoRbth3Sg6pp1vCqFGnLuna6YpW8sdP3W9JVUyYzFtLCg9cMkqSYKJ18rR5qP4n7TCUt",
  "key35": "5HN66VxamoyTyNbPJmpbxgP4Ec4Kc9cfAvyPxPkqphQgpNpcfNEvc3ZVmQ7T8SD2Qm4kFnHifksHnLQiHtoabon2",
  "key36": "xrV5WCw5dgcu228pcRZoUot6yQk7x1kWdJ8GamD8Ur3THjC7RfaFA5dpoCYnVnxc9i5ywg488dNmExjrneVgkKa",
  "key37": "5Hoz89ysuDgLVgQ44DoKmy8C93bmew6wKvg3PUPcKxuLsLxHBKz99y7YonK3iSHYjMwMGkosjraavPLQZvv5r8Qk"
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
