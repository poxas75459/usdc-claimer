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
    "3bAJmDdKbe2yANpaLbYWDDdqiQiY9EVknqFEjU5X68ZZG115rko1nWDZoMMwsUMc9P31JL8iQphYBFKK87X5Fmjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcY21az1PxBMpiKNc41rD8YtQSFAvgwBC8MaGbHm3L8sCCwFcie9ztEiGdRGuTeTXAr27CAmi3fNzwwkAbqpRfn",
  "key1": "32nhsivemWGWA6JNvEcCB64eDxw8FouayV3UVpxpn25JexHE5E73jT4j6Xiv9dV7LBxYgXCeazbpg4nqgfY92jbM",
  "key2": "x83q2kDfCcnRDkkEStf9BXM2v2W93xZf8xdKQahirq7u5ftdjwwkuSWzYY5fn8SJWNYR23qNCBAqxtVmh3iMqfs",
  "key3": "3awUhCsLybWaGCMQKPS79i2RdW7AvwFKFfU8VBpSommPQpduh5LrMoaDhiS2YbkSoYSgHGk3Ux4wGBgyWxhwWfZW",
  "key4": "4NTG47Mc7J79aggKu86LaCD8h7wpDKYBxEkfzfKLbXx2NsyKSZVc7rpVexUzWNma8eeh9ALa9gMNbFnQVQhhXBNp",
  "key5": "4zjeSp26qUh9YLwJrYd3BMpi7EKWjwcfu7Cw51D3ap5sjxHZoekeHTdJvxXMpMdvuemiXJj1ehzvA1eJ6QxaVTwd",
  "key6": "3jXXPs4FPBaMjxk4BxmL9wLy5aFZkdBNgPogcSPHA9p66kYb9XaJYUs2zEkC222MNtjQB714Z6kuqSJzZQJRi4tu",
  "key7": "ozo4SKQ49UGaJPkd4zR6vjsJCs2BwQP2MWXjd3mE6Vzqvknr5EYaFcMq1xSGEovg3msBcwVakoTdenYJ6EjGt6c",
  "key8": "2QMYqWqU7ouygQ1cKATH4UH4GqhSG4jNPuu2M6Z5TAXCVnAKFjFDMtaix22fGzRzuequYBzneireJk8Nf8w3uoXu",
  "key9": "2sxFoEfYhCwUCQdjaALqQNQR9HW34bNLFZmcx1KNac589gAVC7Qk4ntkGejPX3eChhpSopQ8LECPgPr4kAx6QKCS",
  "key10": "4dVNXf1uUiztbegwsqKzdhaLASW4N2yV4EpBjDWQiiJDhWjkwF2CHxmSsbeP5mNNYgRS5yEVib7QQA2DGDhzVak4",
  "key11": "4f4VTbWUxQDGihSt4sDpFaAVvYfvUoHKobZCZC3ppwThr3dt73FhBrUSHHbzFvYQJNK51jxQ6sKSDqnKVoGtL3ii",
  "key12": "2peMSgauteG6kFpT4ELHSbi7qPagskaFynuAGWWcghzu5KUXb7S2FjcX3U3jwB7bV4Xba8YnXM4DGGdJnYyoGm7g",
  "key13": "LkpZnjqWCMaDvGcAgQPjW9QkE9jqcMjYca5Mzk6u2q5vdBGf5NYxt316YRAfzaDAXkkSGXo4fSkBV61o3nUJDhc",
  "key14": "5Kmv6DwbwTEkTfjk5c1iAtVNzzYX1waxKrt3LDARb2kfXscJCMb3WhwtD3LJPnEccCyn5JGWjpez6XRjNz84Rzk2",
  "key15": "5Htk4Aet7tRYBx8rvCCQFaNifwhPZyeDJEp2WDpUNjmZkGBuqWLHqdynvq9Grb4AE7Awc3pZCAtmd3BumvpQAviv",
  "key16": "4e5LUBhFdTGdzsfyzH8FPVoF4eeAgnD8VcrbC7duLCv3E8PzZST7S5kRp1dni8aXXV7dTub6bKVigFnYW5AS65HV",
  "key17": "5NfougE8KrXua9G56VoaEHCjKo4txyiEEtnSzmxugjrWCF2sU3nTu3RRUd8bYs2oQyUn3UjNE7R8cyhksu7dEmSA",
  "key18": "2asu5M12HrSTN3y31qJVxvjd1zC46spXaP4WVViQzieZ236usZ6sRFQP1vWnMFTJf2xXKzBHJiXroSxomPdYQTFE",
  "key19": "3BSSYbwZcp2FNAKHppKmfjMzfas6nphrQnZWVJPUEh4187dLzjeeYpWn1prsx32XtcsrbScQxW2Z7rYBXhzMbv5x",
  "key20": "4TzJRbmxV9QXkA9fFFVWEBML6fKJGEoRpsatZwbPpdNn61zcGuDd3PdTBNoeHzQ7ubnmn4iNtmogAJXjgaoPdjoH",
  "key21": "31KgUyK93TwJUDHcEBuACX1wjH4yL7abjgmjK7iWu8J3eZJcVgwm3pdZQyxdanoeoeZBnAyxR1tgVGwdLocBHSkF",
  "key22": "2H9L8GfZ67d3UKPPT5d1FcrMSXE9QBsTUL9k3cLK5Qv31dzTcf5VcjC9KhrMzKWpKg4G3xjMuuHqQWb17Yjnz9G3",
  "key23": "Lt13Grh93aFHuLvYDqpZiGBmF7pr8qvLfuMkyJBTs9vq9mMuf8DfX3wQt4KRjKHvtL3Ztr3BZRAN9k33muxUYcs",
  "key24": "TEZLG2y7R7Qe2yJGEtpHjdQ2nPrXVNjPvRt1wXUP7XPu3Z5m3Eei34pP1TFCZEU4517WTjPcrsuh9dg5EvSG5bL",
  "key25": "56qGBZ1VCAYh5k8kGezVAPvz69nFBEu11X25HYjUkCxzNrPd6yG1meymRh8nadTcyEGzMD8y123Y3vdQxYxKP6Hx",
  "key26": "2KFRtx31RkF7gd6tCwsQkWoUvdpmFhLdtBfYqdNvsxKfsD3PZDyr6XnZ6NBfHkdKT5RmF5UUnDjK5rak6FX1VFF",
  "key27": "E9BBjhkotaF6iyZ4zsrjWjRKKQCKyx4aR4KLYNgaDnF3E2qURtVfJGnwka1kYXDUbhQn5jt11P9kGyVWVi7XuLo",
  "key28": "4aLqB8CYC6BoBsvKLsowyCFYLjLH6u2UWzN5g9WBjU2Ffs7ivPiQmJGLWn1CiigDFDGmbVWkoauDdwA4Y5BJhDT9"
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
