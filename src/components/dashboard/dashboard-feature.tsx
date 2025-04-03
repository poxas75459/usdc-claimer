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
    "3nF2XQu9rqKWcApTRYKXYxYmBEsV2fxhPTQPtdtLbHAcrC61HY79SvR5EsaySbqJD13tenTX9nmyC6beAAH21fKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGVwV5i8YLhkdar4FEyKKkJcZBsYUcwEi1BRCEY9z8SG8y7bBmmfh4P4ggDN2HQ1dz4wBGxH2rx6y5v5L4xx25r",
  "key1": "37agqxagH9VKTs6oFEdTuriDG8aX18Ag56QC5HeeBnd4VfoeeVuPcnKjcmgB9n7KFVT2gApYoqeyXznUcGRpu98A",
  "key2": "45x6FfwZo7LjjrTMLHt8vnyQBPjcFGCkiDzgR2jj3PYeJp7gNWXohveEVTLpAeUN4j7YxmRFDsSsXWJiJvKzHNqB",
  "key3": "2RHUUMBkn8FmCFNwHFRfU67CQyf3qYandb9MdiyG76RgRoMSTNB9uBuHF1EPV12vLZeDmWhx8cnxfYkhwhHGRFiF",
  "key4": "3qtkYWrJtrV2sA8m4Tovw3Z2NrkNdDVeABFbvUeBS8w1i1j3YZe7FjiUitmS3ayU6ctGoyR9wmZLxyaJZtc5yZvq",
  "key5": "VwjxsQH6sTarJiwBF8i2tv1Hqcpze4MBhWfRdzo7gu5Ziom6GCwSoo7w6uR2XLxRrc7bRiSKNUqhESayVA7A6N2",
  "key6": "3uAxn6utnSnQGDcg7banPA1VAW9hcEChWhTnC4BDiQv2gxmu7puYFEUHuCAdXpfHsDUgiGCkzcrAbHhFAtJqBSwA",
  "key7": "h1Qma8qFvcjUv5m12djw9N3AVjQG9ZLxkG8Xy9dQDmPpKUxj1MCPNYSZgfqcjFy5S9TLwfVHcZkZsUcDcVkrGA9",
  "key8": "5NNphztuvE1eht5j1UbaeYbqz56qc43yaPBuifJqmgc73SvAAxRz9ZGKuLw4YiRpXk2ZFgAEGAT1byFjB3KVqm91",
  "key9": "3CGPi3123eEraXEw32jT2tAqtXZEhRVpGAu4QSx8eQBShL5SCFGMzj7r75v7Wdoak9DSSWHyFARdhz9MfyR3AZtj",
  "key10": "fyoTpnKnjG7wY4EmgXf1cVnLez9N78DYiWuak8idDKoVDrkTkDPSCikbLM2qH7TskFRrQYoGQt9zH6c9vxcm9Pd",
  "key11": "ZshryEGji2Z8YTza4ZZvhdAwACNsjdco21bHRtqgW6F9gzgr9cdTkS6VRGYBujb1TR9eFAshkdGmNjmFz99o3kg",
  "key12": "5DabTVg6EvwUrNQke96s6SWLX6u6gTCJgDv1c4XghERTa9U2YZuyNcPhyQbTXgJrNNtxh9NNungVz35L22AwA1TU",
  "key13": "3eHCxreGmVFto2FC7qAJXathP7dp8MnSK4wugsKCAeFgWVRb4Rau1vxQmYALoEvJbrvWGHjKWNQunN9bod9Ka5TD",
  "key14": "2R66fnsrKoiqjREdVRmPyWxKbs1sudFGsQnenwAQeNAFNuL1S7ErGuA3PiAK7dg6tweyVegdYdMuXyjd1Y2uWj1v",
  "key15": "Y255TX5N3zPJfHT8FLwcZbEgSZCEUW7cSii5q257TKVJcKYwS93PmYbAQxRxjVAHqAYvFu919hP83vFi33gtSPi",
  "key16": "4WxJ7VnDbrZc6NsuEDzGRoTESt2FFVMspHx6P8CsxGYLrRo59eiSZsiw66wZE7KCCfkAnLPMermFugnk19SQHEhv",
  "key17": "2gLvYM2rQT89Acvm23JQ34KkwxFvVvqqomert6z4wvp2hQNK7yoVMibdMrApiTPsTJvFuhaUBziCpDL5wVycwhu4",
  "key18": "3oVb9KyFyfjTN92NVHMet4pyrqb2yCKEAG6vYvW2eq7PPEsGW4G46HmqubpCrYWWQ9xNak3JCk6RPRvEf7ZFAoBn",
  "key19": "5sLTgHECZ9zwQTNEg8wN3Ey7rKRha9gsY2ZCxddsdCiiq2s7YX7j1FPj1A1D53vVYRjXz6o4eyNHsbzXYJocZBFV",
  "key20": "3xRbgayzkxkGgNjuBPurdKAGnptsYm2rqiRM7c2bYAUcuMAXaqr6DmwGtgKyoWbQ2tKzaBB58S1GPGz3wGQXwbPQ",
  "key21": "47CYBzo7vW1yHhKbnTfFhSuy41mbMsmZEVCU83efQjPPEfXuVNqMhKHs8ecH8D1iEiBSA2QW9vjxy4N9CuVXD8vc",
  "key22": "23NrcedG4xk3GN8gK5bMEUYHdMUDmGsj7gqS7aJmBuk5VWaSQ9EBetBxUTS4XphoWnrheyKSpRAVRR9znL7r3iB8",
  "key23": "9sffbo3rCgAQMKawgE6H1RVdZygwfkCTaaNxiQnvtDbugS8mvBU73cbJpCotjE3PAUU7QkVLt9FvqKhatVFduck",
  "key24": "2LR1B2du6zZPHLHbkGtiFe5CiVMVcM8KxUQrKeysv31d4UpBV67AASJ5i8EFNdXPXk6EwLiu6xoksCMiZAzSHeCX",
  "key25": "3ieJKbVKKNoJFtohb4fYLhxAkttEnm3SKsMtMPT78jyjscKA9uGwrbodob71ELi4F6ygpitjjJJWxeqy5eVrqyBj",
  "key26": "5H2VHNohDsJ22KSKemPSDUiNHPmWg3EEtqLt1FSkwYX4iqUGmhKrq8M4oZBCqp45guRe9UPFfD6naxfiFv9RWoHJ",
  "key27": "4D9bJvZ5nFjN9g1iE941r6KXoqeSsdLdfyiraWtRcxFueJMBFTmgo8A2hTwS3JVuwDmLQBvaPGmUMkqUgmsus6UW",
  "key28": "26FQKmMD4yKygpE2YGU5du4xB3NWWjVKxuoDLs1weQmMbjzMAQeLEVkX3aFJrV1ioC7zWbbdkoawMXmDirgHmHav",
  "key29": "3NaKdQt36gPGJtug31xsUrhGReqXJeqCaSyBJFEm3vNcPo5GSQWrDY9JMwh2XRHNTmbtHt9RGpyHQ5EfhGGZYQm1",
  "key30": "2W3Fr76Xzpz9yXcMJk3Ko7UUCqfhC5pPExBvXjvn3PozwmfKpZLYj5HsTv461USP6mNyso8YuQJWBbgXjfqMCTdU",
  "key31": "4JWH78MfhZ7feQmEBiJesWUweSNohEx1qJJ5FrkUCsu45gr9WGwxtEcg5KZMhHNJ1qTMawnb7eLjThqnGpW17btg",
  "key32": "49dsVguZP9ciU8URDiRNuD3WUAuq7JiQFzoHpzPTxpwZcxuvUqg4BDji1S3EzYcLA6ZPz6nkcywUBcZFAK59BuPB",
  "key33": "mqSfdPXJ93bV68G8JYmAL4jktDVVE9Dpo3EsBQYUpmhiWTmsxbRevFJh3PeAtK861WL1KbYRMfZv9EAHbDrs8uC",
  "key34": "4G2UBfFTtsG8EfN28op4PXbU4iguVHT4BWsWaKspCoCFvRYi7DmjMmA9vUSA1m1CEZRCqF9qQukAeXRojgyfk8Ag",
  "key35": "4ZvZRcrCt37G2wxyUJZELEZSX27oKdZxtK6PQZn3VYX9ZYbS3GJ4QmM8LqkE9Wknut6wPJL3E34MEbQ1kHoYACxE",
  "key36": "4kiuvPkptLAwEdAoxdNzDLkgZzrmypbUyVXLHfF2zBB6r33uRZfim9e4CmigiXdrZqQZfpcThrqdaF5NKKss3csB",
  "key37": "FDH9ymfkPiAGKRgrZ78rFyD9jyAVvoagkRWj2gUmcJKz2djaXLpWpHitjH5J1BRFAZqaim8NqQJ7xEnM1GSXx1e",
  "key38": "UH2eeTBQsgUeUKfWzodN2suyg846kKHqt8LpxUVAEPdmc18KMZBStiCDyFfMWKjP8zwG3AtRZs7Xh8t2asY4aMD",
  "key39": "4Cin1Aciu5x5baNAPn18uZCtJZjJFLQ56WXLpzVnJHZE1QV3262KnbyXFKgUFSN9yR79y32eWqhQDZJQviPhD5qE",
  "key40": "4D8713fpCFsbqfXTifup6VXHTKUFo9C7WQMXCTViaCpMoL9vAS47bRkSVDfbtgH5kvLdpRvDCJ5BUNEXCaxGgkiH",
  "key41": "27AHVGeqvyS4UApQKoqP4YCUPdZJnSXDi1piTGTAYME7MuAwTu3uaLH34RsQHqH7rMJhF38FwbAYADQ2ATUfGwys",
  "key42": "5RKQxG31M5pfE8ibiuc9PErAfBax7RXofhjN4Qczx1b7J21g9f3Hr3gr1ZfY3rT8Ct7T2JpX1wzWktKTawtouoEL"
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
