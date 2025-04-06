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
    "kUGBpNgyX9gxUZgfVmUPMgGXJ95nQHGUswCWPktDT9fMbYVB3Mt8Dt4LWLU5RA4hn2jCb8TGgUTKCgbKo1oEAiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VeLFQD7SYimBrRXZWeke2YmsBKtw5mkHoyR6ZGEQGjGDuRjKtts6mKAY5MwBVCau7cc3Jva8VMWxQypfyzNtZZ2",
  "key1": "4tySCx4Mb6zc4Gp7dqZi2o1MQkwa2iqjYdUNxFMZCLQ4dma2jafsbYM6o82xMZjbaQnrpzvdweZ1Ay1fESnP9soR",
  "key2": "5xMmLUtV1cQNvJezyKinYcqVHc17uzXn95fLvRgQBAAuocfJsWxySCD8p6aVnn17kJCzTVYfksX18bkaQYVqov2L",
  "key3": "2ca5KApGnGK3Yg7Zea3PXRC5PaKt6QC5MdbvtBbWqXEACHaGy7AYkYpa4m5w6YxtEfQdZX7EQH3GDUd8hmz8K75M",
  "key4": "2VNL4wnfnuSGx9KqjQpj53naVtPEY5tGxd8i6r96j5zr9WoEQ1yVksSepsRgAffVcabJEVd2igQQheGVuLq32SWm",
  "key5": "3SXZw9ZQuvjpw3nvZ17qau87gQA4vMB5iq3UqRcda2JRgzck6yFXny9mNAmCMErPmiaFQQeTJSP1eCCers32t6SM",
  "key6": "4TXLQ6LQh2FS9gbfo99waspQXoyotC2oFqNDTvBhXhEYDdZzreQs3ZrTkJZ7jwviX1c9WC3zJiAGS7pv9PEM6p2j",
  "key7": "jzps4EYkWSEPbwh2fUsJRVtBnDV8QW3hCBPsQFEWsu9UWoeLDn8TM1c6T8erUHcRF1UiKFF8tqt7Muq9heHj1ky",
  "key8": "EXEe33DkeKjTN8HAdNWsaJKaZ4FvcZ3mJ8gEWYXUu7d7zK8bPtK4vorEPjenJprkL7YN2WFQFCqrdb8npAu6tvp",
  "key9": "5GGtDstpmy6zbzsB9D2dp423g1ZHejd4FZkAxqvQsCidAxkJjxAZGW2mRwRFeMaaoqgGLuBeLqXuZWNva8HHPcj4",
  "key10": "kANnNcapcUbE8NgjxhMQJHKBCx2m9BmkUQbfJ5KsfEfPmhQs22xNzBS8TVkekm2Dqdyrfr7gcuawM79C9r6zzWM",
  "key11": "2xZwTDrsg5G6ZHvHoVSm2QTm28wVMNKWv3YbexaZzyYFKcxN7XMs5iULRbsAFG9CMJDVQLRRo5V9cGq9bf3UYEmd",
  "key12": "4Sm2cuiXF9m4wju2C5AmnDCXTAaWeW9r2MsGEUwKfZhUFuTd4w9z4JUEuMc6LMv9mYJk6jNgkFXorSMskPyXSdWz",
  "key13": "5s5pKu86aSBExF8USEUvPE2K8NrkTsmoydraSqvrDcTS8JGURqecF8baYG4b3oNgv3cZhAZkbCf1Gb8LK3RNZ5tv",
  "key14": "4Fgk32swNxyKmmU5JzqfPEWg9f2up5Vp1Vc6DiAuGz85qB5YW8yTovaHnPpSAXBsvnsvDWVdPP5G2g6uRkNBusLU",
  "key15": "5L9HfjznxjBf8kzdEJxfPQFbcVhPKwRSss8mQvSCLENW2NM279J7eaGNAC8jmkhUWoz4PRiYpKHg97dMxKLQcXXe",
  "key16": "5twU5AqHZ6YvBU3qnhnaCEDaFkxG9eTEpPQtLaKLU2r6ZZnE9FWTkebA2zDKGBsTCo5EkBvMU43cTZ4RfcezHrke",
  "key17": "4J13i6vbPLSpTg1niNdCbCdDv93WncPEpC5SuykdBNRzrQdyGkJcz1kdhZChteLCe5YwuaTLQHsn8i6nPU79GoES",
  "key18": "3rBo6WgGgt3ViXesvEv8ZdjYjSooz2FFfhTrXANSAAYzmSxCuwgccTakGyv7N4beQHxNp6bcTWeqg8KPNpFTv3mW",
  "key19": "3bcFM3D8B3EbJ8NCYhZFJesJwd26A1MyBfQPXRAgBRJix4JzndPY2dbFaMVMvNi1drbHqHRDQV3H4UqDM4Vxu2Ww",
  "key20": "f5gf2Lfea3w6Y2B6B395CuvyA6CjKpufAN9wCdBLHf5iYQJb77fHi8HvhQ8MBywfEK8LaUvXsuRJwiodhHq5XcJ",
  "key21": "2k3VknRskV5diHALC4f8F936Rzgqbpuan4VrVotHuymPpz7HwjwatVysksUD2nR9QK5B9q6Mcbkwr2P7ydsrEBTm",
  "key22": "2oZb5mrxvy5sc3As7pUivMMAd9K9zAmuVQWMonnynAFMudFyNXTV4ppbdV8TWFhZ7H4cDcyWCuWd5GkL6vPEFKYb",
  "key23": "2GqhyY9xsQcbZWvR2ekvUAkoNqGVCKPwB62d7ydX36iAtwDpZdcEDGKn2TvwYoo3sEfHNsFia27JxHVWXU671VwZ",
  "key24": "1Fe1gbvi81kqbo5aPL7bmdYisnTiwM9pXhawpFNzkxYVnjATeERfLNaUKDmZ3oXxSoexTGmxrymGLwzYHyg8P3A",
  "key25": "4NWxN4yiVYVjjYWZ34uidKWJQ8BEKNEGEhmPvGW2efAvRhocfKCGC9mmV27n9B9ZUQ6NNPXG8PUgQKV8bpWbEY9g",
  "key26": "4TjmKLx54twxSbxKzT1f3yeDkSnk5AfLdwc1QhnBxGwvJR8AS3n3gfD9UAFiBHK67vDZ7hUHdHV1yrd4jWmL1ryU",
  "key27": "2wzwDWgL353AnJRxqnec7hEWyMu6MxR6udhRSAxDCyzi9G4LdE97gnDYmdm4s5fWjpaJeFTkwKA2rDca889yheC9",
  "key28": "4kzjDCeGrV6GKziCep4HkLyzBLG1vSntrg6tQ9yUBnPe8kkrzPTcKv9uUx6m6aLbCyhsTxnDAU9TGxmYH1wdZzcY",
  "key29": "26NpHDYgBKWLS9mdquJ49TcS9eJ9wsKRJAc8rXvgxrPUfMhk1LWdUeEHHKEnZXC4qixBzof4CE5E7Si59F6UgQzs",
  "key30": "3q3tGBaTPyp8XG7KErgazBNz51ygj2AcwCymcTwGcSHadCyEakSV4YCdbAojdpQhrEM7wW367W1f6bCm4ELVwyCV",
  "key31": "3QFfqWVQGq6wHKkkyvAKsWpPtJsiswxzkYAJbW2D9MGkuzrtGMcnhQsKaT4h5dGAkDrngMxhYbkGk3wMNcSMgDzq",
  "key32": "37RVUKBWV7BiPkvVrpC7Mrf4Ed4tKzPKFm5pmAkY51C4nuGDpDJsVGCb2e1Nk6UcD4Xh78BocKkWWpM8o4gDNFdQ",
  "key33": "31rgKtKNqhMwt3oh8kDXK64HD5nUzdknW2HBFuc3CzXRuphiumtf5wVcBziFDDL2aD3sFhfq1AwBxxxn7hQqiMC4",
  "key34": "4fXcgpZCYjZEeU7tSw1T5oa6D3noUJJiTqvPM4thn2NSYLcicBYop8HZsSy9Vbfikh4QocDakqJsoVjrjT9Ge79n",
  "key35": "58PkQTC2fixAMhDk59vfbuu4eLUSZVnhBWKy8SWX4n5oiM3ohc7gTpFvAd2RqFdjXjJjmEanFqEvS85kR6BifdsT"
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
