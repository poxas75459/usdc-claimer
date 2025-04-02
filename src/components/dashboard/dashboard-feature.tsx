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
    "WG4oocEHteZjbfVJkJcqrCvY42wA5hLuBdbJvAhLzFHN1eEA9cFgnTbvSSy5SgCTPE7dsoiBGhaKNSdRdQpkBXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMiZABW9DUDbnBt1xFeVKgNmVF9CTGbyoiowMmnBKHdATTz4ENXtDBx3prgKZeY49PderSxtaVqi8mE9BZSuuVi",
  "key1": "4GMAGieMYs19XT6cuTDWCnVHAEjR8mJUqXqrr5DwGEMj7fc4ciVBJRXoQz5VredMAajEwhEwS86RDgtqpaxGQrPz",
  "key2": "3qTyYjwacVAPchbWkWwLwCedrzKYKL3jaFsVDT474sChGEFuHWFNBmkat1TFbScSfxKt4mrcFdqphEUcvgpA76bc",
  "key3": "3VwckqUcdAAfWMyzNnkgithNmd5YBrh7RJrjpLuetYTp5uDLVfhMc4Bhw8N5zmyo3ZtJfAzDXWGjYNhm284hgyHp",
  "key4": "2KgWi1X4An3UQFQqiqCf86BTPgW3RqkRBn1VmYFcbhD6pahHFtoQdrbCtqWjaNZ3rd8bURWe25dDNKAzaevZAReK",
  "key5": "2fxfyUq8wZm3rLFvWT3CAb3AxC3s7Pw9s9PJkMHNsckDZP2yBcvMD2f3RJR6yogmMNabugPvaeHDevSCP1LtXTa3",
  "key6": "3L23J8L49YZT568XA8wLM6cf9ULXBtzAkqyMKeLzteJnjtR886xj9vLpZBdZPsT8vyfD2j4vruroJ3VGnFsHFyaC",
  "key7": "3cMFT8Pv5BXK9TRnL43zFSBzgq7zJpqSnNMZWXJq3FsEjo8bJuBQQkQi3E2sDV172e3o6W6pfngcg4rpWE5JMWyQ",
  "key8": "4TSpPpgvpA3ihLgbPkWggBay5p5oMBrVAJRF6Hdc1qB4ssEN2PNDVfcFsT9qoVNHWuLKokDymQNzdb8f5LFLGzBY",
  "key9": "4W9zS7CB4EhYCnBdKefa4jNDJWJmSKtaU4dqLoKTipsUyMvB7SCJFJZqjBGsMRpo5meJGWmKuTbwUggSast38KeZ",
  "key10": "2DaXmqY4dU4kZru3dZ4i75xuTgRpukVNj7ZLJPSctT1j3ZXr9eVBVGSgyJKGj1FfVs6Cs7NwiCsyxfjN45gbbprE",
  "key11": "4V6EhgzfvmPjqdNx21VmZPKEQDYNumM8e6h66TR1W9Zpx7y3bUh731RAxuQktzFtEGHnqQn4WY7fTuwTkE7JKvqu",
  "key12": "w3nxDYUxDm5oK23TepoKDPrWMB9QK5niL6MeEAS1JZFSvqUqmK7uPpMXT3XJx5vVsysPQX4wEKDMznbygYzod9P",
  "key13": "5PNAPMEToWyXzMjnytkLYNPkJjG2K5gBSUZmHc6FpRepF5ZB89b7Brsge5iBZqhyHisvZ2BcSRmqmoeU6X3TLU3Q",
  "key14": "3STzoKdCe19xyDhJ5k5reiuPpHcg7WB5vffUYdAjPdZwE4ojUYupyuYKrWoe5e5SxMpKzbrwr55SJz5yY489xngA",
  "key15": "5bwA5B9ewDNAgpFpjLvPNjHpG7XtuAhVSoZqpsiSwMgwYX3mq4owpjRFQwRUChxX711HxNFNt8D4mdVsKXSUWobX",
  "key16": "4p449HTGXcEoVJ6MYitnScHXtthqsPdDnWruQP3EGmzmkKo8GH1qM66ki1AkvHTci5DZrsVVvXWTdxRwNse4TLJF",
  "key17": "2Y1PJ1wLBwbxKdGdFFFY6Xydmn7zp3dShSKCGXgnUt8wRVK37QBKD2eHyDB2tY9cne8gajzTsnVfsiVwmZSPwJq4",
  "key18": "32K7QtCLQZjoicMDqGSddx5mFwbHetYGNEuquS3tcboJtAntfXTpFXKXH59Zbd2v7h8nrBddBmrLC9KW3pfo72Ww",
  "key19": "52ZLkbKf4GnWZ8q7rr1o7cVenDZ3Zx1gptht4A35242eiPPwxc552386paeVEsfaFiSzgyEnY8sQpPgdEkRgrFFw",
  "key20": "4tWpf2tqr7tH8m6EZCeTLbN4pjaJKPz82sAiGQpnVJjgygXRJiUmWphNt82f5swFhFfsL5UKq6ssXdURLt26f27A",
  "key21": "54C8QuuFNebPc9xduMHFjDAb1U8h1YNRouE2HjzK9w1Nue5UY2LKm7TZXqEFXRZgtQPhn8rvbTYQ7ckeAahXQZDw",
  "key22": "NyhnjFD4NWSsbGuURLn7W24vswqBSXabmaVR3fL99sNH8Pb45X4GFpc7p6UmakW5SafTqFrTUnNgWjNmabip6hK",
  "key23": "4RjgX5cq8rfMy2DDaTuUw2uTUH5rwx2e4N5U7chuUNLnRFPvArwkxbrBzNRsQvWpnPsbdjGwY3KTFibt6wFFZE1",
  "key24": "hyZWTs9zoKHv8nrTzupgEAhJRUpd8Who9otRwZeTbt9QJB7CT8AyUeK9zWjBHkDf2NARREWwhq4jZRUddZvEnPv",
  "key25": "5Wsko5nFJjG6rtgykCSHS91AGRbu1nx957dS2vojtTWY8RqmPhnpAAVXKWKiovTKXDt2gGR3YX4iSiNLYMFZKY82",
  "key26": "33tkZ9dQ5CsYynTP4GZFUfxqHj56a4fK6aYvm5EBHu1tq2iewVy7onujwevbA7fnXgp7ZhSXJo1sBdKQLtfvazEo",
  "key27": "3kFZ48Z8tYMW9kU391ZhU9ZCoEstZfHXZTQw7kU5vsC4ibucwLRRxJJsATpL5rTZpDv58LymxatfxrcTbv6H9rQa",
  "key28": "3ZWc51H1NCkPWbzCbrjGtkz2ganYTVm1Cf3gMBs58FeGYfFHeoa9eP968AXea5dLrmy8Myt5Ef9h7nqDk1VdUVQa",
  "key29": "hcNtS5jnvNcejSvMEQxhyRn4CYrRG8WDpMwZEcnSzP46cnZAc5Go4C4g6WGFYdh8AZxfG3yJVh1kL6xCmev72ek",
  "key30": "4qzJ1pjG3qGZX6Zvc2E9YKv45bgjyDH4dGpY4LSXdnfUNDAAMiCGFy5W4Z4NifSqHamL3ugRCKpcsCTPvAwUE3bu",
  "key31": "5YLeHXYnCMZQD8sqhkCPTk1NfpUaA4mjoPLKhK6NaTscqpvzmJ3sd12PUYchkPZcc61oWG8m37U1iVpX76DizA7q",
  "key32": "2Pz1ebhtr8gBx2xLn4QLfnJvBMQF23uw2Jgd1b5c7EansAW4e32NWT1ouptE1Yh9Y2quYeWo53BBdMnF1U3dep4h",
  "key33": "29622z6FosHeeFotABLQ5mQnG5Xr7SgHpfMSZPTq8gfEzMUhURGrWU44tcb86vgYFAaB5hhiuLqTyudADzN6GGaH",
  "key34": "YpymK8pk7gzSf5EQ6aoet2ifPbrSuFs8ebPHhv1XGwcg7nW4dSC3sMyknM4gStT8mqoWYdFvCVcNGJPP2jEVTfR",
  "key35": "2gC1WnWtDMZH4tV24ifwQ9VNppwn6SbbrHhfN9PKKk1ZTv9371Zr5LuiiTZZQX8v1Xr7BYcrqtayv4tZKFdAtwxN",
  "key36": "AACWR9SsCfyCrAWsnS3b3CYMQFCju8ShSvb8W2CLsMcePQ97CXZTsp33ASCxQEPEFVVC2KY3U1R1NWRaH5JwoLz",
  "key37": "4J3ii8u3CMBv1ZZt4uHWBDYPbg7Fb8jvWQUN9YSL2E2JgraxYcpw7t7pMrwSuPTHDzYnCk1SZSt1cSmiF5oFY8cd",
  "key38": "NNog9mrXStnhATpuHV5xCKHKgDe2devWA1msFdtSTKBtYobtFHR8kFJPkphMkuRiKEakaQf3VndVWGZivqB5bQN",
  "key39": "4VCa3Q9hYQiYNigMKKtM7vw9tNYDxAew9PbNTWvwG93JsB7rCaLXnutrvQLzxDEyvk74CTVHTcTLDxcRhe3LAAps",
  "key40": "2Bkt4UxmBdhc6SaPS1irnPFSQYtnwH3p66Boy9wkbYz2Ai2fUCDjiNj9LRfgSGGbiMS8YAPDDLcADh8F7h1KB9pm",
  "key41": "3SC18kuCXzREMzUqgDgdNHqsqNBMPbvS5k7vQ6JeXYkcRCm2sDK2sTsxGzRNjPRJw6FJu17EUHabbZa5rNpGQVpW",
  "key42": "2PsX8prpMxKDDFxWKMMVFSVLrwxtmCXoQ8PkcrZDYn8t58ThGkvwE8bsDpxfWtJrNVajBuk3gjrEBnq2BiqHof1i",
  "key43": "623HkDwBkbz5xf3fxXC9moZ3K5ZTYqdKbHjwLpX5PBuCc6khKZ8FnVxRmcBeEYvqcvRJBiPsQThRD9JDh9QpndHZ",
  "key44": "NWcW1FDNbvSSRjY7Xued6W2YKvQwE5zgYpdsDbpRtuUHDLE9dTHUnrcKHkfAiBMLkk7EU8gbx74XatFHzhN78LY",
  "key45": "4z4op7ywxPid2J3XY3v2fYcHRri1sefj31Yu9rFesjCJCeZ5YP361tcAy8SrLmpfjmT4C1ZY6GZuiebh4vthYXTN"
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
