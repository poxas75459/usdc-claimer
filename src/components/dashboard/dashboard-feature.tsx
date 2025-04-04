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
    "4uyA9sG3Ac2JE8ByKdmvjsrFdtF8e4hDr5fu5AWhP42jpxQQgDytjhFeGoAYWNY2QguA2LXuUmrgby1P65yvDfG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Lrvn944NsCssbkQfjuUWxkFcVPGv2hbyus9K9SBUCYa3ugKQN7hyRtRYe92h2zh7UdFJNZay1v7b7xgio1LRYE",
  "key1": "4A398KTRgrBHay5jScErMJe6Jxv8uagnzg69oxUa2RCSoLKQQNYv5kmX1roW4oRhA5FLUVKXPLZeBhFc1vZivYoU",
  "key2": "22RRr8Ny7s2XC7DLVjquhHSqpf5LPSG7qL3xdpCpR95TG5KK9CZgzoMRpbrKwtq4adDtZtKzaAo3bLN8DnvnS8dm",
  "key3": "52nqyoVfUBiqm1gHJPCAAPSd4sQL67ZakWmbGtMkBPLPTayUofoSZZ3jzjFP6c6bm9dVzsEosUaqs7RGhSgP41xc",
  "key4": "4zVe9SrHMhPqZzAAP5pGfbDicoWggx3pVLEtMk7FK7HqQTawLpEqskwT7cr1PYgDAjyKeSUWkJVKZV2HmAraHXd8",
  "key5": "PiVnPh4H5GCEnic7ZDYsussQK1UpYT5CJgAnhD9Q8wC4tUtHHRWbfw6FjqKmsGMam5XquSKzq4SNZfVp78UAqdX",
  "key6": "4NkRWVBRX8vR1d1mdFgfecZM7QqoiegTq8YG37gERbjKPS6BsGYNBSXNAvP3Tfz6UXDEhPos9NBYntGQHdzh1pWF",
  "key7": "NZpUiRLaacuEjrGTD7QVMtKWcHy2WjhTFSJosxGaFbtGBUyEqffXHD4gPEE4yGoGRwXB7Qr6RDZ3vJkqAG5uKwb",
  "key8": "5uNBDH3F2Db1aqBgNmWhwnK9GuUEwBfnEMCzbN6NhfPo4CFeF1mNfy4BECebogHT18qw9nxBdYKk8dqUMVLBWBwp",
  "key9": "3mRkyKErzXEbPmP7v6pWSgWfXAQo8gdKg2dt2cRfTQqagZpFDLwQQ7kXsyD8gEGRvELKq5ynSZqwCRgp9Zj7EKCe",
  "key10": "tp4mhr3aK6m3Z83w1Wg8ZfQD4YuvUGWBht8QASbcccFz1hauuDe6mRBpM5ygayA8tAmQPKXUQmJT8yHWF5ya9e7",
  "key11": "2pUrKMwgW152iLJqAm95aD8GbhiB9FhJWVTjVEqxh8foTPdfKHBQAsMAR14NcuxnL3C2QoVDkHFQVMob7KCrJ2Zi",
  "key12": "5AE9cQn6ojBXMcRSBXfraS3ibbmZh3uuu8rPvJVjRoeWc2QgE9rvH2szAziSV8JV2wMYbUkVqjeAhDY6agK9J7WA",
  "key13": "uLCYy76oSx54yKPkatdoTHeP6vU6KmYnQHAa64bumnnG3aDLABjuyjMhTtmCSLjeamkBm2FaE8H8G4b3Ku7wpwJ",
  "key14": "3J6zUiMBe7vSVwLuLjU2dNt4CLdcEnQTLDuQFYKcTMnxk6naC3M6PVYYq3bdXSqYc65WiiiUUbRLgd8JLfpkAcKE",
  "key15": "3wFuVfHxyCiaWLg7dbfsYLsQJ8jT3ApQDT4SQarfPHAF8NCeK7w8Ek4ifJTTFAVwwGFkZnL1bxUNVztbJh6er2Bm",
  "key16": "4eAUDFUScq9EcoP64Jq9VPMkkL7RPXsMmGu5ksja8MFTXJiotABUwzToMDVVWU1hais5JLEDMELqohPjwgtGWWWy",
  "key17": "3Ti9jBqgdMBeccKnz3LroRkcqM5A4hsoTJp6A2D2TAuy1d9fu49nE3Vf47ZHr8XYphzkbQg6j3DyeedRRcyT8Ew5",
  "key18": "56MWpeAvjfQUPHgRYx7ZEDZopWaTnF9vkBrUsRcJRU116rnwDG9sp9Ug94LHuY95kEYb5cwZa6iyzdVpkWRBX13Y",
  "key19": "4EWBzr7TL9tH6XkruEKoKAyvF4GrgahSMfUEv9UiS8mdaF5Rw9jUoPknf8zLXEteCjusk3U1tecTeLYXKogHAAVR",
  "key20": "4MFvjb8Lsyg1NHMNgDW7EpxUFPoBYCnNexs4DvvykSP5uB8ENmoPvt66LCCPgLpDUNqyScSQraqY9KWUzaMUeti3",
  "key21": "2UbCoREVVNmHtHvx3j5rDpggFu2c9TjgNsuSU1Smd7yHWsjqbouc25GpqAGrYm3wDffDmGpShykvamnsnsVYr3Gk",
  "key22": "3fxWQC42PXn9rxaHtmAg6GSz4MYfPSwQZwdxeyqNbzLitiff4oTX9CW2vtFjxvCnJRxFrcyrQzNquSgYcw7SaSaH",
  "key23": "TJcU8a2q6aKMKULAERTB9KoCNKVefYo9NqEjY14nFpNuUVchK9VisJ35cbNGaPgoxJ1szPV6xYDAbRD2QTQmNQD",
  "key24": "2z9N1fSjscW9L9rNa3Mo9j4MbrJ3B61nvA9jMAzn76tYR9iYz1GWdHfe5X4bM9974xN2LoaKZV2A8Ek8kRcwz7i1",
  "key25": "z7Tdy4DfFzZELsQTXTMc8gvNZ15p4YiDTMgTcs5MRT6PP8KsEA513YeL64VQSraMLzKjUWY2i6hjJfkTAHTapRA",
  "key26": "VsoEmjzYLB7R21EKUSxDw9NSwFjQa6cEAotTwz7Be7sDEud9u3npiyUyhdmDBkqi3DjGhUD75czfVcTkuW5stkS",
  "key27": "FABk8B7moF76Wxz2hs3GnQZGgfqBLxwxDy1dEVJ8tFb54g5H37c8Rz6A2MF1Ka3fuGXfVAePL8CzPAgdqBhQkbZ",
  "key28": "3PntCDBPH5yEfjNE2MUdJXd1iRc6ZdboTfsZYbFDV8t84BpgsVEXr7udndY9ZNp17eQPnYb3a2NhSSgFnUc9QuWE",
  "key29": "pYZzojeDjB7q7HZLcTjpmXa7VRQPMJKe8DYVPAioH69qY28EwjoYgp9Wyb3bVneWhD1EoLHYjyyRVKxjTjEtwoJ",
  "key30": "YkBAJYhuCE21zwKagUrwc347sgGrxQoEDoSJJ5AKHv7sTvWCm7BtRVXf2YQeQYbsRawqik14zRrXibqpzqRKbpv",
  "key31": "3qA7TggjegtcbGAvU8d7jq5KPZFoaiDKktPentzucndHG12rE1UfoMVm2uumENG3R4xxy6nBTVnftWYSrCdCC6Fm",
  "key32": "Fx5NKisAHRfJDMLd65VUP5oKNm5GANB2nJwVtEXkXmG6Co9ujan2eS32btqrfwBHCtRXTU4eNAJgu6NwgD5N3KY",
  "key33": "3XqjqRNa4Jmmo5UqRpJiJJm2jxfdQ34qEPzyXqsANE7jpsyUuDLGC2f3Trs8AuTP4Fb7v82jtd2mcE8Li2n2UoLN",
  "key34": "7nhcSjkEtFsYRw8NQ6AXzXo9mQRRea79sEgEw2b5ZU4Bsqk2mVUgarT1PfbD1FucjC4dSWmkMKt9BSg3B9U8ERo",
  "key35": "5uATCfVLcYwufbi8NBJbvFareaoG7qKYdnNyy4299yktsmpdGLmB2cBTV72ZfWsapMY9AF2PiA231rchp8LmGFtZ",
  "key36": "4pgca1KG1exHqjvS85LNdPJn491pboeDUGFhZDc775NXrUdAQGDxctv2sXLPhmRPHFjZCrJ9vaTqn3NgtUzg14QE",
  "key37": "4EBvXRCFSQhwMUEzDPmE3R8xxQZDowk4VoxYAXbpY9sA1wTi14oBvdupTHXuQDkCk62EQokLPaCnpsa4A5DvnSv4",
  "key38": "3xEkxMJbAAvgepeVa3dNiLqYwrZrvTPigeEPVKA5Y6B8ZMmNyXfLdzp1PrJNjEuPF4SkF5w2sHZmb4yieKd6EFxU"
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
