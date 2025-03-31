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
    "3oLWFqDG9W46uWX29oEGyn2QWvbWZ12RJndNBWV5uqBGE9YNsHcV7QWuad5F5ifZkhnifQdnLDwYUvykK8vGZ9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GcVxY9HAu8KXE1h4GFLhWE5JHQw4xHVy3NxqqwbmvP5ZW8f3zHxGnDhRwY2fMBVXShjVDNGYJXFQPG54fA4WoC",
  "key1": "4rfT5LaE4Uwjdok2q7ShWXsvYooyX5hDpHBZxwRepKft6v6rr8QYgDbsvoXNxaEFeHQoQaxkmaE7jjiuCpGx1mQb",
  "key2": "3toeSRmdKHnaSKR5daTVwKBw2Pd591ErSYsVLmikZr5bijMXmbpQuQwm1WzcB2X8nktaRJ9sWXXcDZA9CZLec8NP",
  "key3": "kTNVNk7PUr7aCMrThLcQ3vn7ZUyiTwLnuhR83QUkuwEeh7HzjjXvYbob9AmPsrKztJsFZynUjRy7Q42Wbeq7Z1T",
  "key4": "2mQkS5acaZvD3v8sWoVmGwWUAzR24jSext5242ZG12q7Vn4pjAtVheqATWRoN9zD2efsak7Mn8L2WRW4HpRjTvgH",
  "key5": "4qwzwc3yQLtFEeWuGadGALBGjE8zsUGHmkxXHRG3WpzhhpkzReqtXLBPMb2kiNzVFuP9RrP9pbKUnSWcMyTucbvp",
  "key6": "516UUsahXKpLxiJQcsRx1dH1MUxxoBCaGpLMY2XHdZbCTBfgMDCZSdCt35VGphisn4Tewg6UPHzzQYxT5K5zJB8w",
  "key7": "3C8GErZ5SxZrijrWwqncGQWrwRACQH1gvWNfdyLwvq9cPv5JExgJnhRjMVCG64xkRk4VeWoMuje3TtnSDCD4vM28",
  "key8": "4DFVyuF9JkZ5h8ij6p79BwdfeFdetDNBsAp74vmDFUTGxuNnspFG5qmrnc3fpsGbe9JyotBp5XvzcxThSp7pyjkg",
  "key9": "5qSijDgZbDEmwJ7NARDTW3EGgz2yQMK9KBu7emjVBXWDW3iedHpGoQzDXZzy2LBCrGMMxKf5eLZezvrdknNuGKNK",
  "key10": "3ERAqU8S2py2Ri55PYi4HjGcjbmabspWM185tGvzpFohs5p3jrozubPGoA4qCBTzKXsKgqtsjRKnREYmKzsCshEP",
  "key11": "64dAYhG1CQUc4265hEykVoFytxJrY54NY3djFJ8UKFpka6gsc6CVg3DovR4bim9xYkVemiuNA9zuxJmpMx2bzGTb",
  "key12": "syddCJYFf3ai34arawXd67z826UfK64SDea38igTkqJtq4MoxkcWDLwjovxkPXA3xPZGndTwjmZSwL6XvzfcQDe",
  "key13": "wrT5VMKxjB3zaAvrMZyxAnVtxCmQzseot4TkBJQusb5fgGkTFs8i95BhsxTkFtrPAUyQN43ecEBMDseZFVgdUE8",
  "key14": "3WkSxKpa2uQcf24Ew3vSjRrDsjjwexqSRbZ7gsQuH95tSyDsMHLrNzo4R2GTh739gdKsSGt2VEbEDZT2PeqYDZHJ",
  "key15": "2VSFW3ic9eYMaDGQuDs5qX9cAuLt5t8YS1EwfqgEWhmdoFB33j9DppzVwhbNeKKCfXzo6r3r3bKLpfERMoTPgzBA",
  "key16": "3mfAuFPRtYrrnJvJf1HESCTWNZDbr1C8DZFeVNQg2dnm1ujEDT2Xamp1ZDvLwLAjpaP6s12nPUx73LfhzVERD6jf",
  "key17": "63bsramskQA6v57e7Z3Depw1pdbxpqJA3gGUDE6Hietz3cmuz4EY5aPDr5TKkvKCm2c7paaFv3tRqx48KHLirBoC",
  "key18": "45pzevaFK38GJjcAiq7eKGbgrzd1kF3pZ5VfATefbUTWMpBzQ775vGVbeye7othfCETuWREzQQv6asXNQyrJ7Lh8",
  "key19": "3xhtQt6Vk9WYvue2V31t7TiNaXMU9rF8KU2qBZjXQ3syf9qbGB8EogkhTQ9XJMXLQhSRYaYHN7tnsZMRAS9uVDTN",
  "key20": "3FRacXY8wZVdhiJoz59cuGSbgqReSR7y3kbD1MFkdvFhaaWaLBSq8wiiZCanxTvt88n4jZLLtoTByUVQkZCwVPmr",
  "key21": "2W9jUi3rJPCmt59Asba8YDTmqonJAunW68QYmVzYbr1ypdGrxdoenCDxAr8tErxfEfdBBqCQVJfcPoxV7rzy17aC",
  "key22": "22tPnqccwWCf6w1nkuVvn4bzqfLMBFBoGnJC98rrneEbfvsAixDaaPWYMqHUVvjcj1XLvS3Hkvjdash2CKngVDtH",
  "key23": "2rfkUYnW7gnzaG4XmzSAdbwbdV1xrZCNrozeXzNZwzor4t7QGeXGJsbEi5QKXiZyj6MSmF9bZ1gp6FBNcQoEnBRW",
  "key24": "2SSN95z19gJ3yug5KSjw5vWtCNS5rJXh7DMN65tHD2tjDGQYH5w3KQH7CCf8TQ5t3FxZaMqqpvduC5PqNxwmhuf5",
  "key25": "4FPhish9bAc2bAAjfVm3gaYo4nHAGYZon8nokrs6BxaxLLsR9oYTLShEokchGh1qZtReMQCUsdxWtVkgEDr5wvqk",
  "key26": "j2Q1KmL9YNawkZM6TDRpDdYLYNJiRJdxAn2J9dwNsmyEtYWj1jqJmPXaHTDoPs3SXvLfiSF3zaDdnM5yroJRGe7",
  "key27": "3896xQExThaqRLBEhurTvMXjcnYZrfEVHJNJWW7bFfXvD9hdZCi1MUxJR67wboeAdTK7b1TitdoBa38eKhW6HoDG",
  "key28": "2BgCdjZoiA3gzN7PW6dkhUry6P4cF5yVUC1Y2YKTirUAUh9jtMZRiReqV4GwAbzJZAe5VcJhDYmuwLqat3RgfobW",
  "key29": "4PA9dGBbzF2vRRmgC2JeW4MPwVT3x4y6jZ3STb3LSqAu5tynvmQw6d911dWTZuWoQQHqb9eFU1RGiaPTacbFPZ4K",
  "key30": "3ZVQBQGWYXvRy9ycwR8WoiXDXyVAy2XkGvTUv8Ug9BEe39yx8gQNtSUskLXjgcU3QtdeddLyxjia3rqCSoWFgRJS"
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
