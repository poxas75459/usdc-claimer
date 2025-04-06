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
    "3X8dS6DhGJ9TREzydy9fRN9PKEXwbgRSsyM2gcapKcrk239WxGDMfgzDVw7PXz2MKi9xZNhwCkFrTsDEn7T3EEuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DJQqjXS1rhd5dP2bQoPyZbaKppXmc9Qmzez1LJTwV2Lkwx61UYJHvCSiZvoYMgMDvMXug8nfUAoWvcDTYmL3n86",
  "key1": "5fYmCYyrcCfWUkDgTBsjXqnBj42CZ2UsLgFzZVfrmzbgpKfaDBds4BABSRNiQnurPLQedGcVf79kyEnrxC9cry9y",
  "key2": "4Rs22u6PxDzdmpTTNkuY37RendzYvCsbRHNxnSgr3Q78XJvpXQrB9TLopuxz9dHn98zNLaG9DDbTNQK1T6Ky4Sfn",
  "key3": "4PNH8BiJepgVB2supN9oM7zxzJqw4FCMgpWQsRQu7VSGmdkAVnLpG1gsUoTyxodjeSwHGkW9yJVvs6wWe2ctfcQf",
  "key4": "3GvbRSKbjxbfqm28JfBogEXaHvJ6GzdBjtM7PzEAHTrQTCvRQedXtffDNmp9JiFLYjTtjGfUCkgNPbzQSZ6kAYen",
  "key5": "z8qqz66RotCZHWTGCGoH5SCPX19PqZ1dzJaCyWkvpwprnvRUKV6RPmASazrHqPvXcYEPmHxLcbnfLDNJFHgs6KA",
  "key6": "2RcLjpiyPEpWAX5vuExJBX5DcnDZ8yr7ngdqDVH6F9tXVFm5ztQHP7fTGqjZwAAUjwbKkXG5SnBHPJ7W7sVm49fq",
  "key7": "VhTwtikz85XCJvDARDMWRQA1FTezb5CnYL9fEyKZXwJwvkyTmTsUfaWDcVvcPKVdTQTxdw1nHahpQnkKuVC2ixQ",
  "key8": "27KqohtqRD3vGM5kTWEqjbCCJ13y8WFPGStyZfJiczFuanSeqYRusHR8VkHFCw9GHtdGkRA6GeSCCfi9fFjgpoAS",
  "key9": "5xGbiGqDeXcDMbwAT5fHU1EKJ5oc8iQPqkX1aedudKqtqRCR8QeqouxLNNmFw8xhp2Ja7Ctr8KCQwTZJwmPu8dyo",
  "key10": "3hojacg4Wm8kxJYoCRqhwCaqEBJ1DRRnRrzy1HdoSULLWEypEUkWCDUVX8cWs5Ud5rR6whXjnnCSbNyzTfAwupqs",
  "key11": "2mZkdwHRLM7GvAyK7yjKbTBSzzUfY4KokYqw18RxSzjicAh7B7Zpj5q2Adpz6s24TFi7JKkWb5ECsuZ2QqMn6rWh",
  "key12": "SGRBy1wTfiw2abntwUNJ7FCAVigJAmL2h7dVBbLVkhbpWj5fEgr362fAT3PPPUatYkdD9XKBvq4RpjPfmfcf2ax",
  "key13": "4zqSx1ao7EV4GwXAkhaFKeTDEPSc6NmjFC1EkGR8WUmZxBnBfwwm4nYmgsimjVW27UfMAGV5NXoX5ewoDzeepQSW",
  "key14": "5Uc8vamGsj4yNuohzWVsUAZBV8TEgxeLQZ6xxiNnbtXKxosAap4CTv3NAf2XkDc8Pz74T9xAQBrxXzVuQCjDFNSe",
  "key15": "QcxBHBE4j6RYDUTKYJbry2LbUPxssjvqQJGXDsTXGnzEZkrmvw8rApN5pXyBpkUroMBZAe89GFFzguCbhezNTen",
  "key16": "5o96o2peL4deY31drZhM6cjDMm83MhX6RRNqYR8BZfUZiyM1LJFc523LaN6wACGCVh2hbp6tDPz67JHWkQZ1YR2v",
  "key17": "5rDWf7zVAaeYBKo1qVVoLveuAGM4KT73K6jXPHEWKTaKof6xgAjErJ3PbYgQsKUGQopDLnZ2RkYbKaV9SD5msG2G",
  "key18": "4eJ8yCcMz1NJd4QSWswUZwGB2TnJw2KDh9GuFAhsgD66KeKLTeHmTXZCAwdB3xJyCXypxG9a3kbeLcNpCNdbr5ca",
  "key19": "4MXcEhj2PpsBRDGAtpsHWpp5Ebogf5jGnBZqtCYuMSVQALeeSxPXXie91qhGgr9VCBWPVVsnTpkNkNEVr5yDUk7M",
  "key20": "5v3VjAWPXHRS2udU5mWGpaTdNW4ttWzDW8gLB4jVLmn4VJrWRFzEZgq7aZ2vYLZQpMKvfvh13Yt7ttyX6jDMGmK2",
  "key21": "3f8xv1UEDUM429kMxAWpzUbi7n9h8kk2p8WC9kuRf4buknmS61PfnuBqNkQFqrRf81R6z3TCKq9v65WwzuUNwJUy",
  "key22": "3KdQQURXzgNfH3fT8vw1aU2T3EwzMCSB4fDFVSgK4LjVdTQARsoGpTbCmSwu6JBfy5Mw7kSjgkVCCennpdmv5KHA",
  "key23": "KAHdk8BVBWxyWX1cR9PqbmvzraP5VSuXPxhL5gvfpGLszMYjP3YBMMnvicscQg2Sd3N9QW2X5K4iEh88987BJhf",
  "key24": "bbgtWYqBUnLsje8useGr5TMGJsMGEMSKmuZPnrFZwdWh2gBnGu665g99uQ1FwHfxTu54xnKenbKoRGp7A3xcZxU",
  "key25": "31XWhUdfDYroim4PbpQjWUkjJoHwWoR3D3zr6otafu9TzybdpVLT4fzFFJoW73f2vZoNWB21Qnn5kK6QF4LTRj81",
  "key26": "5dmCe3nKJ5mbBU8zHVmre53gn2JnQfgNvzUbLgGubqyctmWevkHwB5vzhj9uoLunywgMFAXDXGqn9jgMU3CCXJxj",
  "key27": "3VUtFzbKzGEpaJPadH4q1rDTH1o1UPZGr27gQHxAzv3YmbpG9GjzjYQifyA6ttNkeg15JeBMjeMRLs7NjgoukCLq",
  "key28": "EnPDzVqYXfkJD1sFmGDeYyKZqAsyHXi2BfgCFZ79JcmuLhDuR84xsDaxc1wRsiV6y9YNRZubFFC4ypfZx9o5WED",
  "key29": "5BRCJEZCbTTiNHp9akod3FSD7P5gSKCrt3tBJiEy4vAhfFUHwG5tWVK9zpuz2CTGYGVyG7BasWj3LgPYJHfX12uZ",
  "key30": "3zxYaSqi4fTbWZEMZc9htHzD9ERfo7JTR1YVyfWiyEobaQYNs3a1MZ2QFHuqPKzGCChmgCJ3Z4dkPvTWQjCcFN7T",
  "key31": "5k7iUxQZKSemn2jxm8YGeiHCyYoYRANHskkZSoEXqzcoSm4njvXxdngmozzn1qYSo42SfhwyfPefDomqERJcHqFw",
  "key32": "22zySd1EVQ31UcL5mMeFA7ECPRoK1KKWZLvzfTZypKEg1aSLs9Bs3myyEisFgX5a8HqzmPttFr9fRxE6ggFNAaL8",
  "key33": "3Xx9arqE5Sa8Pide2jWKDN4AMQqFuwFTzhyhLr9Zs2yLBQsrWNzmynVgF1Q3QUE3Q7U7nW7Wyv8hmkbVCCaKBBmX"
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
