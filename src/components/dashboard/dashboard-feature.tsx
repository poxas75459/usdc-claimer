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
    "3vUc1SfPABdv65tagHmgm6YifDXfbCnUSoWwjdjSMbVzdRPwJCdQWt6ftXjaJSvCEfLgBZvbiSapqN8VCciBaoZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9yHGHhSRUrybNDvGYUw9uXXH6P11FZncDUfox9B9tqQKURWHmF99z4BJFo3Vod7hgcLrka3dR89XKvDerGWFnX",
  "key1": "49Et5LGWqBzEs2kDV9n6MzQgF6qXoop3MXzPs9VvhWJbp8UZmzyrdxqRxw3DwASY98WFkBrQ9cwMLKKKYZGUAsE",
  "key2": "4eFX4C7uZtcKqCmdfqW7S2QcW7mAvaSqxkR5KdKQq2FrkF34bN2B8k6QQBNV1b5Jtd1QcktcuhzB4CCAZitV6zrh",
  "key3": "5J3oeDpLYZ65tqnTdzDfMWNmkscvgkETMbia9K2M7zFqBRrtWDch951GzX9stznChZ8fsZASGuLvDZojk79xCpKr",
  "key4": "5GqNjfwQUeD9nx9Rf8YP1jUyTexNjnGJTCsv1J7VQfMBvxhvWJJcVxjRUAXPW5cgV3zk6E7zHxYo7yvHU2HS2Sjc",
  "key5": "DboQZphfWhvcVykjwoWgpDeWM5fAKerjRymH3wkzCJW1v23RBYNbSZYCsMM2mruYxaPjTcAwvvwbnBtPhzcv6PQ",
  "key6": "2rpWARMUN9AFnsKmSQmhYHVgEHRAMUuEhikZ2XexcMFmhDnyfaBQHPkvfGn4PTTaizB6Y1ShjvfRgsYQ1DbVvtsS",
  "key7": "3P6Jj1zQWFC1CPssWYdK571dGQ5vp2JPbaN94fALHzhdE8NhwQMGDA3tBQuWhwr4EuYJBy3dmMj2hZN5FXhqaPMs",
  "key8": "21YA9aJPU9xkshmqPiiW8LbdsZM6WQtsfqC5CnhwChuFCLmhn61ZxqMNqvPyEKrPKqr1Vry12Rd4ysw5Q4gVgfag",
  "key9": "4Vsy8nKd2LAXZmRhWscw9fgdm7GWqwDhNhiPs2owNXM46ouoQgppiWgGk1ig8rBwKRsd3XXQ5ZBDoByzcbh4kMuF",
  "key10": "3FhdbUu4H1gEDcgDUpeqPrHkL6AAveyc71igPzQZFMgcNXDTevQCANN9pRErgrRagxwmoTA7C2FVJJQRRBaSXguL",
  "key11": "5nyyisddoHnWR5oTZVtXHvhyJyEJpppqA4eLAJXskriHoRumtsek3fAFbGou1JsUi6onDs9pAuMK9XK2Me7mJFTV",
  "key12": "51rrpxiaAAvtxy3M6QLpmb2qzMbYDnEh7XuR3P9kUt2Q27Qoa9JN8TFbvTQ5eFkjYg8H3pdmdBP79vKm3WkwZRpH",
  "key13": "5icKuz9pc5M46uYrB1qs1WiwG5KBwcsQy5eyBD4pT2q8ZxyRGHUxFaiPbJDXKWCoaxqFe7i3DGHRhgvHEAyCSMot",
  "key14": "4rGs7LnP9Qy4kASJGe7aeW2g6RB7AyC5nBXx2bfK64dSfojNtdAg2So4zxLf142qiMfsrejn82XTNeQseEUmCYQy",
  "key15": "TUciHWG9g9r5PEwCgdQxFGMYXRDqbmSfCRAmo4i3yZkZ1cYSUXYvKdiE79UEYQ7Gb9E2p5KLD5BQt3nN4SRRpT7",
  "key16": "4wBoHL1LqfZcs6wWR7xhzbCHddDEaJovwLtuQuZQzyWPRcstJaY4YR1uEGnsS8YpJCzWRzdmxg2cQnRugFrA5YTE",
  "key17": "3TT6NdjPKuvmosQy1usGv9MxQTkfk93vTgkjCHfXxQCL64WpPhuXgoht5oh6nPudp8j2gKzMwAgjc2RzuNDq3dCa",
  "key18": "21nZ3hbxTA1e49qSmgqqaTRF7VWbnguzDMEKhDDgLwkjKVjLjdgWuAQWx4spyydvLrC5XeuHoHkvPWtKZp4qW9We",
  "key19": "2pyqZ5ckgwRzmFWfW5VJMiBLyR3kV1xWiX6U3oxrxsfV9CkMFET841fxGK6pMaaSDadBEr3j6rqsfuSnYKAtjcRh",
  "key20": "2PozbzZv6hchLZ7xc39ChUvWRzZRGvnfArCTJbaxXWzKh6L3DRGB5RqUUdCz2ju9Ds6LMFjfS6Z6PoisanG7Hn3E",
  "key21": "2huDa7krAMeFwjfaaLXZKsyHS2nzkHPo3pnFW3w2uZmczKtEJLDGrWbqRE6YmQLwan2gryesTRL3yDVnHEwG6PSp",
  "key22": "4NCETL5pd431c8Bp3NhM2dpTL8wVRohGtXBV2AfFsi53eqGBLD46QuNmysABoS36dqGVDejVsqfU3GsmhPbmKUbe",
  "key23": "qjsR1GTBLKH2Q2LAa6JuMbB3hzp9qzFEkYGx8nyEvbhm5EhjYtymQYhjcJiaSMsAQWnSmURXwCCwCtkxacxyzX4",
  "key24": "2Wtb19J9mG3ZcpwjWaj6RzE7wi52QKXvQG2NM45Zrfknf2cLG9VDxuyK7BWKgrdYPVCJGQE6BD2pmq9H57fESYHr",
  "key25": "2chf7RCCtBnvgk3ST4g3LmUZCHzMZxzYPULWzXLKxHC5QSxKVoPAc3P9awp4NsVWPsDfDBKFA4h7Y3S4CWeH14st",
  "key26": "5k6HVkFvuK2cVcNGoM6h9hDYKb13FFMHKM8KmAMLxpwi3xqT2Z8NoGfCLcLa2L2VWUpDKXhxK7cqDNkX9ioStm73",
  "key27": "4cjqmzrEXVEeEshyZZ1n1pCDvS61JaXkyxWnoQwei89hV2n7bnenjLM8G3CAUWqeu7cWK7x8S3BbrczMy844swV6",
  "key28": "RwZjzT1kDJgNtm28f9FdQoahLqK8kGTpEekNrxxEZi24NJPhcTGypYBpGc6LPSKDbK2B9Caio5JqmTfj5FYt5mx",
  "key29": "f1iFDaANNSGuv44phi1a3qp2cLTRrw5JcvGcR7mYCyZ3w7cyZciuGHpvi8hwQSdLzuRDgPWbMraZ7b25jpuM6up",
  "key30": "8xp7cx9DNxQY98Xy2cVfTicD9aQ8SoB76L5e1BYGDxbd1rBdd1pLWpHMMy5tx2WeZBZTPym7jxeVjYnfj4yQA3o",
  "key31": "suxWtDs8LEYWfAWVgXutC1HzsNzcd2tpEm3aexSnBzYgsZTvDte1W9vMdfYRCmn3jtA329CRDUWzb1KHonHeyNE"
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
