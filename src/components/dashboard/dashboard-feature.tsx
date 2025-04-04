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
    "5H2cms3orkmfCrAW9Ky5YmLj9fWrPfPCzz6pFHQfLy1Krr5ooRYdNSb9TYaqChAic8YZtfkJrajsnV81fgk9USZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d2U1QiQnxzaUciKqN5pKvsyMWnaaoMZHGeK6Zd9iYgMzb7NM1kbbdy8LV72yLgZE9YqvUT5pXGAPaCiUBaKMNSo",
  "key1": "2xSkrwB2hZJ6fBWHqSs2Wr51iWX81nBijgGELfaSH9BDKHSATbRpL8CdkovoABuwXntPWEvaEjxxmmSPuKazeFpg",
  "key2": "2kzJk23E2CEAEMwBYQ2uy1ZEv28DtKXP9SbZ3rCjWu45ftePRMQk9fi4LbGcx19QHC3QRT2L7KwWp5uBppd8HvCh",
  "key3": "5mKaFezMB5hmLARHHGao83ibTN86r8fHy2ZwEDwcZV48Jj28sdvYJHEPBayK3zmvFgeb4X4kV1dzwJSQAS9G85HY",
  "key4": "2XK7QiKW68aE4jQSPfi5QCYsdTRXqUdV5XLeDGhuGD4MigLj7xdquhNGhDUz3zhkpL49C5rwrTMnFAbde4B2vUfb",
  "key5": "4qr8CEG9BDi393w1Gzxzh2rqVBBqgcQ6WGbdRtKDkinMJPfZT5MqUrwXs8YG8XqhYxeUTjBA9WoLDutLJF9JEnpz",
  "key6": "4rt6CCmm6qugwjF4LCm64siQTEN9wh3Hfsbe7YJRVeVRF3vU85fqP1jXBRNRFbT3eRvC43MdBYzHhJDhQZQP1EBq",
  "key7": "5EPaYbfoChKut3zz1pzxsfU9cBpsL2mfcFAhfWWfaSwg56EaGc5ivNxozpA6zaqYeKqpvcD65ZVri4gRgBCiHQvf",
  "key8": "3iz3HbYRsifgCTRJsyjUUABZPmdzpqsZrn5LUYu7VTcpm5rqNCJpSvg44Sbc8jKtAGhoJyY55w6cHQrLkdXq4Es3",
  "key9": "5J55re94DBk2eK8DHuQBaqdNpRSFUZPG56B78xPfpRkM46ACH8Rchi1g6qTCTH94EBLboxZgmdytKYzjKEh42kME",
  "key10": "4pUcUkfdcqKHGEmp1bGtcFebgTwyXcPuoAUTwmHUZhwJeP3pG6kUdTNjLYLdi3JMhJXEMiMckx6euN4Z6SDiECEG",
  "key11": "4ML8N7vjR71athrCNKwhE4tFfEFzrN5J8m4eGMdAoQVvVnUtLZbEcLjWwCuDqrFsmWgv6dgr7DrRZRFpuy6Ttrv2",
  "key12": "416HqWo3iC1pFdHqcifa9ahtiVrispfgMEyZ4a5CMKCp25AB2obzfTZrUALnt4gXvtYXKAKNtaSpqDP8A9TdLGkW",
  "key13": "4zgctosKcDskEdA32Zng48GRwfCm7a9jrjCfM5zvURQGqsrYyqDSKjdN8fuvAKgimkNbCgGKNYcBaCCrwnMsewmH",
  "key14": "2AjyRWKrFxrUNHZ3bCAx1QMDzH218nd6SsEFbcbjvqT2PqxutdwGWD6zttiJ8RhkCQaxFgkmypJMnhG1T4vs4VUy",
  "key15": "9AZGDu5znwETJzkvoBsxxePmTT5P9tQvDTwBLmVXxdXTG1YZRr1nsq42rNdEjmMcR8R4Uga5S51i9uCssYBNkfR",
  "key16": "mEdE1c4B3VoHXDYtQn336KtXKZaajuSFWDyuoHwH43V91NgjccLVhGYTUxspM5wo8VNdwYRmg9EWAt8sNfdbGS4",
  "key17": "4A8zggUFH53FDn8ThsW18JTaLeNSCGRnuqfqFzf4xCoX55pgtmWZ1v9JaTcKm4QhBmQzzHi8YnobTkaLUv9i3www",
  "key18": "5iv1nRfaLh3LfKXiLWUA4iDGGZ8Ftc6m1iriD98ufZz3Qt86y7SqpsCMy53Awynb6DJh7418i8LgUe2m3oZ2SYj4",
  "key19": "2YQpB7ZU5RmyN1iKFZAMbrBc5iQHpKVE4mSUhYQEgw3qKDxfj1mQJpE9er2TAV6P6cZusQbkbU1HbVZWMJ59RLFp",
  "key20": "3QcdGZB9Ci1ivygPfNtMW7ooYkkDmCmXsP26g1BUJ4dV6p7wARsT9r9w48c77zmY56177vGA8vMu9teGELvJj1zP",
  "key21": "4K2RPV6qRBL4Jk4yakdvFKfDGufhivjJuqfTnuPvagYd5B9xigChngskNViWdeXsdfyqbh7GTRiNmV7pgc2oNQyE",
  "key22": "4S2rw4PvSFEJxAQ88X9aYpj8aN4EdMh1tYUwfR8yaUvJVEFd3Qzf6Ab1LeTpaPNz9rEpGCEyEEdny94iFGLG34Eq",
  "key23": "5nvBac9UWvYd9FYRG5Tg6zWv692Kwe4EUKWhfyG5ZRnUaCboxwpo7jprp5v77HoUDuy4ZzmYrm1EEm66diJ9Bk8R",
  "key24": "5irzYBuH6xsZ44qDMLRVqozuqXJPrzmF4czSJ3HBkLAsuy9RLW3Dnz7Mj9vAdocKqAH1nQUatkDvPWorCnSkuFPX",
  "key25": "33oeV54njVk7pxmZLXcHqXkQojVe7kRLdKBwZCsn86SHKzbXdmEGTn793LftUqi8CkQkfvfc6g1HWxtLcvMti4Jt",
  "key26": "3xKLniupEhffX21E1C659spEkvmDKEdZYDiFKa2nziaT4EDkRW3Vo4oqmdrum51w41VnsC56GgjB37xrVEkExG4v",
  "key27": "2hZsMaxGSFrex9t3ZNRToDoNM5bnXqGjodbPfxM9CKFiUW8iKZkBQHufmH1ZpqEHvs9fzSi8sgKcLwjkHZACRAmU",
  "key28": "2RD64NBQfRv6uH2ANF6FoVgGtUVaN9ZEGDZ1o7i7uW6JaEeK3SGp9gustkKokDj84gdeE9DrT8pWd7TYLmd5HPui",
  "key29": "4qxofoJM4vzMNph3NnTpR96gcU2CuuReLyF6C3Zwdgp9yZU6TqqRefrcUqcZKkMAekidSedGzk2SgF45eARSTwa2",
  "key30": "4u4uTAUmmyFPr8v4jc58gmsadXG9PXrj9H5VSHt9AGuNpn9YyRHWE58tEywa7TnVd9AdEXTGygmwGYBm9jHQo3ao",
  "key31": "33VaQVTtgBJde8goJT6Q2EJJAvV2Rk2h68iZ4eefd8LiFyftTinpsugLzK7LPXRzhnkiZbjF1zkYR4yFtuWbmLbL",
  "key32": "4Z7XiJRZjgH5pH38qGxiBDdrHJtp3QJ6DW7TxG4KWcLNHbxAMACwyyVEkc9cUnPLzyCfS9xGa8GYS9W3VrPaicqd",
  "key33": "3ZJPuAJxthPoa8y6spfuxPUKbk9CQyf8YNNjK1Xnu1W2SqU72L8RxT8iNpqeBVm3vexzMvDT7Vtv72SP11vQBAwr",
  "key34": "5vd2YRbaCdtQem8D95iy3PFZKH13bYDDch6uGCQTwVKD2Qvb4pSvYhRXNaqfkA2ERZKxfB6gVVraLLM8sKizdCnv",
  "key35": "2yJkynVsmuQam3DvpevMfY5qD72SFxG1UF4fr9i58a8WYmEVy9J5VPtwqeWmiJo5vzg4rhy7NJiabF9Yz4PLCjXG",
  "key36": "2WiZv7wfytg5iJ11hEQqFbKTB9SfFfS1KVPJ3WAocGigvNM6wUWVjA8s6HryS8uHaMkQxQNCLnYgjRhSGzoh5xg7",
  "key37": "4b8mK5WohxC5v1EiAzGVXofqX4QNBjzpfeTmrr2WbQnjcoj4qhF1N6NVgCzvVtNrUZYbL1XWtWhhLt29FvVfGrUv",
  "key38": "63oXJwT8UJZUXTedwuzSpDk5JWTQ1wsRQLLskoe8Bmcfrga4THwwqitHXtFpVLC4c8pEEtS3m5q8X7Zt8ARKUfWw",
  "key39": "5B58qxm1k1wPEpALgTuH6kYsRxt8Zq8GDTBKbPgouM4VLuZaYqvyccfAiMDmHbmo1y85g6wGGH3TZx2BRa4PAsdS",
  "key40": "2skS5f5p43UP6BzJ3a6tWW8LLhm7fQFhnKoXrHKrW2NoThsau5vxXJv8VdPvtjqffHgSVWRCz5MC1jrsBpm7cQaz",
  "key41": "vKYCTzGHDmdTRfvXs8k3LcRhWEtUygSczSNiiBaHpwxZL6ndQAQS6up2h62cqrJZP1XDPpHbbtKZFMB1k4g4GtD",
  "key42": "X8JWRMAkVoRtigdPh9AGz2KUqrhk2EeYcwCZQwYJq4pimAsZFHYtps4uPZpEGE6mc99fr1Ra9zZ1BxpugGiECPE",
  "key43": "1ZV4CPixJfa3wcXw1aXq3SHmHCkYsusaPvo5SVSiKnfDCJmCVL8jB69ZneJ2rxP8NSf1diYq1EUDvJ1Es4avKrr",
  "key44": "3Fjaf9VypbavDSi39nJhP3579mXL4Y1JVs8Q3zMrWUXwXHhT3eFGCBNgJYXDoTLujyodKC5GLuJYzgt1dWzcyzoy",
  "key45": "5XWP7E1Br1fjxwpDCM7wNmLrun4MFTtDa2K114GeLGLeuk6k8NEMN48ResLXBZkFFfLNP7R29xxkTSNFu3mWnkWS",
  "key46": "2Cz1b2ZzjYVbm2ShiJvPMHYR5WqoQNyyHXmRv9PSsFTCneHgHFTe5gt21dzp6X3dducbWHGPzSLWDXorCvAWpPrp",
  "key47": "4St8Xv8ZvHrPdec6GbvuK4YNWqDvTt3XrYxNMerD36WviUdU22oofEjCAqSckmqtct6RoA32WnLBPxGzZYCa6EAf",
  "key48": "5BTGmbSffBE8ffZz5DyXP8t5S5S2LFjJ5L9YT3FfJRFnBd4gv8Y9N1Qzm8x4LEqV9TVvXXLP1WaMpV9DDHz7TRYT"
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
