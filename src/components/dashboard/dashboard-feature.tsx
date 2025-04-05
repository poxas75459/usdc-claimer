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
    "pJt4Zqu4gKaRRuLjUTYtsHAyAD4zzNHPLsHLytx6ZoPEuWQU8NFb2XHfcYgooTYZnS6tU62RZ5te9aginhe39sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pv1uPWFp1CVypNcTWaQ9KVXZt1HLAsCRbHwHecj6r72kowbx1WrvPfcDR3dxQ3CfPNoWYdK4kS8Xyc2GPfcRhPb",
  "key1": "3sqE4eCNh4oJHUuisX3hP1AKnaJFVeveyfkBYBBSi61F8da1QNwWwEAvhE9Mr43JBer2WrcbGdg5VEs7K7HAfoNC",
  "key2": "B3pVr82RN5goNyoFqDdWjgABALyoadqHbuJKP4w9CTj918w1SGMTXSgBAiw5Rj6LDWTxiYpm7KYVmSyWsK33Xf2",
  "key3": "475s7XBf2Fd3QtxsRW7jbPJLwkoGoeaowDH3MNkobERuCDjWp1BsvQjzBRrHedYTBiiKeuE6AGztQNAAsZJPhdYM",
  "key4": "2LDrguXmeyd1B9jaW25tNpVZVusLZiugH7zJUNhQkukk3quDcPwHKC4QGMjMkitAr8Hhn3YuUwARTYc8exisNEwD",
  "key5": "61JuBmZTHSZNiyUY6E1QknYtBWvhUPpCYfqGNGAE5KhCrQmEGUcc5i5As8viU62UVtXGZJesU2eirjqSKNE3T4ni",
  "key6": "5DbkgPgJHaYTTzfFV4ckj3LyGXgWb95avzaijFGEhConFYjRhugjVSsP6XKUgtApXMPHZmg2iCtZ9J7ekK59fMBu",
  "key7": "TxxniiHfc118iVxNfeM8KMQRKw432v1LpmDckpbdgbbAeKg5Vfh2HFRFhZt4SnaVWhYYYD814hMs1RQBsdy5V8U",
  "key8": "3aEMxzGakaENtd3zRTXau1CaFzp2yXTZshpctt5HNiGcThvNKL3Mj9DvheF4n4aWZ2Yi5ANNKcCfJsU6GN85DDoN",
  "key9": "5DLBwrtQtXLmSbvDLZzUsKPUkk1GvgFDK2oqh5HrBHczGkv1757qLCfayQfXga1wDMwqmyXgFp5bvV479SxHUgp7",
  "key10": "AjZyKAYqyZyZsXkG3vmFgNr29kMt5vFMbKGMZZthuu96bJsdN7NaitiaAM6j3mVaWphmFBEbFzjTF66VQLK1ANg",
  "key11": "3GQyHUvLA41XbvwVHE7Z5sfJ4cvhVDhtAHpkfMEnAiUSLfMhJojB4KtWkQLvqc6JghPog1uEz2giG5a2XrSSY4Vs",
  "key12": "2NNH736bck86nGQz5LU51GMzexBpbbq9KbxPzEtQQFuQEZqSkTi8T1r1wudLMQcBWiwsyDLAFtyVs3GAL7eYLGWd",
  "key13": "46SwYPAzepCZ24mBW7WhktFfE63C83QUrUGTQxvCuvGbnAwf7VKo3vKQGRJJRLrxwJGQT5MEkftTn2oQvPpfjKaG",
  "key14": "47v28rgUyxT5jhPYgDfP7SGBuaSdnviZRAN5xskodG99podYaWSr8rbD5paSBkH6PwszpD9FGjf8j8R1TW3FEv49",
  "key15": "63gEuJJSW98RbD5XmhBCTocLjkZfbQnnM4chmRxEFAn19cXsg6mMG1LZcxiCegdWY8j2iViCPoZCLnRnwwVGzzyx",
  "key16": "m1C6vsgC213HhG7ECBnmeCsWvYSDKUkMLadfKM453rTQBY54spdXW3D2DeXMwov6xGH1tatUV6RGpgLu28g8yxW",
  "key17": "46y9D27cyfwVnRLg4RKn1YHCUZbMWqsNGMbrRotAEhbi6f2g8JyaUvBfXbuVMigGNQgg654x1CgZyqV8crokNoPq",
  "key18": "57PG46JVANMzVsnBTW1LjKdCXC4aHTFA2VuucpZd3iZi2krDhi9unEYL1bC8v77xzTeuZMpqMzm8iMzrn4YetyVC",
  "key19": "2bkdMA9rDBEBYZ7EWUL6F2G3TLnabrneBUaYAhRD3HV6Z2Aiit6ZCB8sA2DdJLmJWoRTVmp4Rn8y7bBo2z8xgF9D",
  "key20": "2MY48GH5D7Hbsvqxv9iYJru4sZGdwWVja6Tb9V4xcVtyizwDGs3uKT5Byp638Sfmv3LfNj9j9mwb4Wqi5pBHrJpd",
  "key21": "FFqCx5QTuJqkfb23iziL1JHXjWhvgc7SwqLaMi46X6HBsdf9s13sZJ2H4TQjbRPqwvmfpfUU3dbxKAE3nqxybrv",
  "key22": "5X5c7GUt2NFMLgSRTma1os5sPgbmZooti4PwtEr2xBHogYaM4nJSUWMX4jtkNKGmX3sQQzCST1b697Yd7W9wN4Dh",
  "key23": "5ovDHt8ChGSmuPcPhXzw1Dx8oPEaYH4CigAm9pGL9BrPVxemaBkp1N55pmo6XrCo2fGvg1Xba2Lxnf7vsmvzKdiJ",
  "key24": "4quU5cJ7VapqUaGKAb7RjnShCeWBTeCQqfbGZDsNX3TT8HpfrGJUijAoaiKDYB56Pp3nWxjjYUAao6AgbpuU8Cei",
  "key25": "UhewSpGckfJDfyBSwYZDg4sgTSp3W86v8V3Xmmx2EvixXwvDT5riQRKcACAwJPs6G1LjyJH6tRmk22WTJeCg7ed",
  "key26": "3hZwMZUWFCs47wBe8RZkM2KxLpKfMj81SkZBAiyMGpYGFbFkBwyYNqE4cH2K8vJW1xRt7mJ73SpdL6bqhxhTdaB9",
  "key27": "LwZimMhmGwMh7Q7DsihqqxqnSJ6mLi1vgFbcZmowa74iWBcKVitXk2yWRioHoNndt5EsqXdHiwwWpu5brFY14JR",
  "key28": "3V1Q6FySkQtUfDzkpR5nBNXCFr1BVPku15XRLYJDXwe3jYWTvXVapGz553uYD8KUTLWj3xQb9M8rYDemFHrtyrZ1",
  "key29": "5SDazRvjFU1JjgfCsDNgDpXAGxboiDPVjTVmjpv4VMVpFqqobJQwpYnAhvRR9b37cdjzicETCgDeFi6ANnJnwAXx",
  "key30": "S8HjTsPa9rPchDfkwzzJEzdLC2nJEf5XYs3RFvYCUor4j2J1dgMK2NaKd6YBoGPjpyquxs3fg6VUxXdg7rSc4vf"
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
