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
    "4N59nPnufFkezcK65PEF7iVk2QfvYmh9bPGAbXjmBxN78RpdyjLBmQEZs8pLjYyKn49KDbDa1M5NirqEgL1jtPJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rayFwUtqL7MrvxQQafoiJ1XTBCsCr6ZgM1XPJgh6k4o7uTgFjx51d1PrNoNpu1gEzBxHgtuT1gfhdtus1kAGdTL",
  "key1": "2BJ2BQM3KVctJfPZkoFznhRw58qev6hxD999rHH6p9EPULGANn7HevGVQu7WT15NbjxfNcpswgBZ5Lnt3uLVEfVm",
  "key2": "2Xzr7WYEGS8UYuq9LjDThLsLtZrbyBYrazjFHNBk8ypSci5rem8MEz94xhGRjGzTkHQ7fYk7ECF7XkLRZy4m6zU4",
  "key3": "3wAGVbfqN2TZcKy86ScizurYxtkVJc9xKzniPyedyhi9WZxAZPUdKayxUdWEU1RxgcuB7UeXRcqXJFgCCWWEp9tE",
  "key4": "fj9xco4r3fwaBcvRXoiHt2vXq6AfDEKNkzA9D46MdJ6ZNFymsMKQW3S9cqKUXm6CASNb1s4p1Y245RXA9gnzAYy",
  "key5": "JCrAcX2NiBVucvLGmmwLpi1FDn1QygUUjnnnyCRHszYFT5xVcBmAa6GcCveUyDd4Pc64yGnaavEgaF5fYwCQmzz",
  "key6": "MdmJGWeJGWHiRYtfVvXbfYkWAuUuEjRBngKD2wEGuSK3oRCwWB3nxkjCCbYu8WDD9YqPcVPnMQHbuwFkCRcRjmj",
  "key7": "5AJdWoTq6EnECJtN8L9cYsjxEoRCm9b7nAD1j962sM7GyyBCVZJXZfqrhMamE2FbDwLb1ZTG1VcEyUaMFRShiEW1",
  "key8": "3NwW7uHcLc2zrnS9xpSzjEw9FxhXJMGADEVPSHB3NFQKXt94GwZFJXCU9SzJrF2t8ebEoeepHmeJf6vn1dCkk4ri",
  "key9": "4vWaE1ZUzD5pHWXZftoZMoNG1zayi1HsKsBrTsAGF9mZ5yjFcczJU7z7uJ4xkvE8T4gC6qTS5TM9bGwApvwAeQv2",
  "key10": "3wnnbB9DDLopboVEtqezd1gKoDSWMpA9bcUutMe9NWyTe3cgBtXPJcNtxL8qtBVDEufuFAcJPF9PEufz2bg8KNzm",
  "key11": "2bc7hVqpqLjHkpFRAnd8DWHfYVj9zKY2Aq8DC8uxkZpmiye8uhQzEtYYDZArybxNXQysjnVXPrp7Z6kihLX9oiqc",
  "key12": "4afwbqFjuAS7NWNwrNyqmHC3fgTqCVdsooxcNVr9tB2GMmHTCuiRTHYbiekTi2NgWhfCNnjfTGkiMnfnVGiwozS9",
  "key13": "4KE2mGNucLkk3kECSQaiMVSQcfDZgfZvXUQ5CKmhJTNRW9cjBBD1y7VWgp6soaB2P6ED4BZ1NEYWtLDpgABaDzdV",
  "key14": "5eVbzK9oXKzFxsVTfF3kvxA4h1PNFAzvnuUkKt6Zbck5Tkin9pmumizkbhievzecHRb8kFYUeKTyzK5VuyUtjeeE",
  "key15": "5hWjDJ2wMnu5vrQMYpZAV9XfrHEvcw1nBSFL5AcvAfTvvYyizB6xC8omcLGuwQjfRfQDFJ2X5z5fNCG4KJD6sxwr",
  "key16": "2H5EoDDcBsojyc8yiP281tfsaUEtXMwwcNpSSe83srz1gbrpUdKEDEPgmQKSGWSQR2kiC1eVvNhzvQfSP6ywn8LG",
  "key17": "5Vm8zsopi2eU3MX3Ys3bKbwbkEAVudY6p4oNNJ6YYZC2zw3Py13CbGcyw25JiRDd4EmByTmL76FciNbhccyvRYtz",
  "key18": "62sb6EvEq4LFo5P4WhYxeRv7tnfzTJW7EmME6wkbvAS7DMVbX6hSYdnn5yqucw5ZaB5y254s8mK9H6phiVAdPyzx",
  "key19": "64VrzcDJLHWhWB6LSDnqr4HfP8CQKk1oN6tZc4DW2qQ7AaHC1ycnZLEn1pvX1f1mCBkxEXy8FtwsRxuKz58eya2o",
  "key20": "3C5JdyuYiGc4AkTXFtLVy5dmEH1P7QvafhvXWP3hZJtH7SzDtchFbV18q1DkitbfToYaA35w57Qk8F3BicuqJAVB",
  "key21": "3eTb2gnaSoRC8sKMLerpyYNACnNoTuj4AjKtVXMs7uH419fq13rKcTfB7amiYnJXJRh89CfLK5Q1EKbQJuBCiGTa",
  "key22": "62axqaY2sdt8tMwT8pRBraXB4yBgDd1QvTbGXA8DPVahuLXtaGER98n714qKXpZXQh7XoH5EieMQsqUpkrwUSS8R",
  "key23": "5eUz4jthF93jMffzq2sFQfQqHNpiFWovxC2wAreWRPJHw9PeTMZtc39QyypsaR2BN6EgQuEAyNr7UupuHHCXbehm",
  "key24": "4jacvYgjJ83Ashg6sph74BijmuVDygiYvQuofswxMx2ZHcLxMLNJdWGSMjDNnygpzFxE8X5wqSWyiiYJyZqqMZko",
  "key25": "3m9jFuNi8tEhoYcZP5WnZTBedsTB3V823zjvkkJCXDyTwr47wPBSQ3SisgmZKN6gyDNrz8abjbgry6BG9BwjsQfm",
  "key26": "4vtm3yWCiD7dKejGa2cSvx61juBDxRnfF6hM7Yu8nutSANdsNcsRjsU4AKLHCPzRdiRaG65Ly5wDFtexzfx8vQY5",
  "key27": "376RxT8qokhf3tmNrbXAze8jWf8ws4VD31gFonyNvRb1djb9bp82icf6Z7uu9WMq3CMjiiFTJXtkL8BuGX41N9d5",
  "key28": "43FHCvaesEekNjAQnzdKFvKKa9KgDTk5pKo6Cp7jQDXGo245iGYuVtG4zbBiSkmTqSwNoffeG8mDHqmPK66kH3Ut",
  "key29": "2uxG28zbzdF1EaVzk3NUhFdBzvsd1EttDEt6K8c4jSrRmVbVr2rfNekrBpKuhCTPcxu5dUxttxjJ3Egv2Bbtbq3k",
  "key30": "fGT8zrcHKbqUrQfwNtr6L4mEwK7RC1bd4emCp2AVpGd6FXhnmTDsgiEtPDjZ4EoTty6ULTDKyiM1FVhtunTqMLw",
  "key31": "LcZ1eRWmWBj4Uen6zTykkMgfA2tEJcCTV3Ym82Ht3pmTuBkhoPecujQ1RiPdaq3fSdDCctZP8TaNrsYPajurmrV",
  "key32": "3VFhNhn8aeCFQwyhVFEUeDaZxp2MrEgeTQnDfrRw9tMk21Sy2zmhTT34wqrRhuhDWxbJAVucJHS4XkMUix7EMP2Q",
  "key33": "4VD5bUDazt8v89b59sutm4KTz5vHr4qMPAEtkSGrwXEErs7SRxhLgxWAeXfSZDVQASB3whBHK2Z3s6M621qvKECH",
  "key34": "4H93KsGLApNf6ncoxTwXcc2FQpo5DzVCW8bjjC46KDLPcrDkk1msbxeFHptmb85rFtvZ2FTUUfdAjfXvm38JAkDF",
  "key35": "3Y3wGTdPPCprEc68ZGsaiKjaT2q1guAga9AEHVmJLAFQLVA3rrgH6CzZNTNoijE8M61hDDkyyA5KubqN4zz73n2v",
  "key36": "2RDvaUrewGiR1Wc6PHtK4U4FXKBtaYsHpcGiDshmVM8j5bQhi8HbnuRVXebejVkSkGYVtUVJEcrQVFJ7SkZk28sR",
  "key37": "5bqeTfGBD1JbeJZutXNFNoWvmwbYDwFugpdisGDv2S1EuauyToT7QX8hBhR89PBsWjspa3z7wCvVb8FXByNFkVcS"
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
