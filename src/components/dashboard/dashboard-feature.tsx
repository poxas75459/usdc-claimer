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
    "2q4QSBocY6rFTqBKKjMAunDiybnXXJkBVhP6DwS6xNAuvJEbYPxf64pUNNE1ZJcmsT3NbTTRagMG92noe22RMGiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ScqJLJHhyzAniuuP4rHxi8rnho5Sw73gxjP3Lep78ZgUWSXC9X9DriBSkbbXydXG2K3LNt1Kpb2p7Lm9V8X8X7Y",
  "key1": "2SB2Uoz4s3m48QHJWeWstkCqCfSKszSrGWFDoEd6AmWppH6wJdQv3PcvpZMAaeNpNrnxWdwEgfR4o6Lj3PfjwJbM",
  "key2": "4pPc3WUHuppf49MTfMTBgSMjNYKGVa2G1HcXmJ6SPXUZ5DVgJCUpEYgzkN7oK2u7L5GRpRWwrNCgy2QewBSbE9xU",
  "key3": "4m4ZDSAdpKZFskWMB6nxR7HHJmpacDRuPNcgECPAsZWF2RZ2oHcqX8cNh7WGm2d4Qpty4Q3n54rC6HhsUCEwCujh",
  "key4": "4yENzc1JQ7igmPnriasVhzs4smFpT9fe4MyhbqmJg9fHfGBW9B37y7EzSK4mY5vHQP5JYuTZNe7TWkfpW7pTj4wU",
  "key5": "NZU8uf4wFsD4kKxNcSwrg6mKSEHBC2fZ2aEMFs7xK4PT3EpigisQY9ZcCAWKMXEPSTj8SisLRapcg16cuGSPyGG",
  "key6": "2czk7W1hsfkM7XXna8bsRTDJZM73RbGJhiSENuxzuRgyLUxyFCtEcYZoFyMkY5dvUCLMEdfyAGXb2Xysf39fmCKc",
  "key7": "2W8ZHH9cLyU1Hwsn2TiWJQDLLsdhNcZ2an4LfqSzMWj6icaxYhDCcGbcYSY77H7sMRKZRwc8imGHUSqwqsrjUHUb",
  "key8": "369K3oiDnTLmCygMPVTPmVXaR2cNeJtKjfBMRzu3ApKXecAdNt1SQxeFmCoTjdcjYuCc4rS5iMWEZow45vAvML9W",
  "key9": "2YSXUkQKr8pMnVfeeLNhimanSzBoDgSwEfdMLArqPrE1gAT3akMeo67AwuowCgequ1XwYNC6bGGrEkufPHQqKHfF",
  "key10": "2uYPjFECSdzibJfAygTqFeNfadzNimgwjSFDGVs2ifS7KDNeQPc6JNDSFD3j2ufU1TyJQU56kHYyoR6MQPfM6obr",
  "key11": "4otnNSfgSrw5tEvcPfYkiQYDdNTVvs2Y72A8bN3qUhJDkxmxSTsPnuLGZ8iaJ1ocDVUzK64yP4BGkN7gvmVVHWFv",
  "key12": "3dZBLdeAZ4rgUSoEu1b39dkuQcNJ7iuthoQVTLP52f2v5VUSbJQiGS11o2fvzJ5w9FthkrqzR7KLrvBbanrDyLL3",
  "key13": "5UgS2wfgdyFyktF5VV1F8jSAG9uxMVwvz4xdLeHrwoFr8kojd7M74Gazu3nu3i9eTnxh9iwfxNKyPmHtNWiupGTZ",
  "key14": "3Woh4Fgj2FH7XHwmBPumZSsG8oHq7XJuYYxFjcnTAxUDi5snv2WVD1aDMxG7oWCxuQ2n3wR6hNLejFhg9AJeNuPp",
  "key15": "3wv1G5W5dBUrA1kNWEm5432HV39m2XFF1CJpEmJbh1qe9SkPPAxni5CEWYsZJYtKFWaTvATHThg61YTXJR7mJ8Rg",
  "key16": "5KRN4bT5dHHJ43yRy3axRRfNikrabcknCPrtGdtbKJCJzmWP3gCeWFLP3sNPFw72h4AQKhX5hv8H4yEs34jVnndA",
  "key17": "32rfoPRNQaFRec4zc41tYE2oyRtV1PD1dNoyU243aFUhEKCkonSGCF4hvUspdE4NgpuXGGJVd2885Datc9nWMXLs",
  "key18": "3QuMuLotCdLmHXtBv9StX8oqiS1uL8R3MuQ3jKT8uGS3RbJrTQg45T3dtzNyYpwyfHYJhSgaQa3HmKjP4qUnA7zo",
  "key19": "2V7bV5BGrJJ2wDL65i6AN5NsKsAh3azrcov5H2xC4FcsuBtVZzoGpkPDmobqJxB8wMgV49VqUhJTV7EAvMHZ4HpW",
  "key20": "41RQRKapKg3p4okH44trHniEoEmUDYVVmPb2L2iuXBmnbZovRbWHojmsTzLKrfwEy92GYZ2KiGK8dbfkuEf9KMBG",
  "key21": "5uyDY7VbkWN52orArD63Ug7gTyr2nN3Xo8EjQNhW96r3PbXViqZkx5b2fDmmdn9DtUptCe81kMonRbsDs3kw88xp",
  "key22": "2BahPC8An6j3Ed3Q2wpYefM59DrE4EYhwaNeuZgwX6bNKyqx3GXb7hJrJFgJu7ucKX9i2swC986MNZmPUZjsmqYw",
  "key23": "2Q7jEXNYs3A65DuLKdMhD3NjvbuzDcuumyrofJCViLvJyMH8m1pHvjbuC7eVpRS2hXd7DFeKnw6X2xdSP2j49yLQ",
  "key24": "4oEejbaSeqDJwYrAECniryRqSpSgjBgzjRZJG41k9joQ8LNR9mfqmtpxcZNDkxv7Fs2dJWsKu5bF6BL1XLqA99sq",
  "key25": "3TJfVcL9YcU3N1vY6kZp5QJLUDSBTHVfRfHFQzEYoj6AMqTDezGDLVTMMYQAKyxC2WdPrM9RtFsHQtqgLyRrQ7Dy",
  "key26": "518fz4dZNKcU23GkqQgqsKZbdYqVW9KpcPEAdw7nnVKysGnvMkvLfsdNSQ7sNRfKGmNi3Ge7PyWh63P8AAtyBDfW",
  "key27": "3Y6broR28VxHaLMBLD7Ryxx2bXmikZhzokQv3jgmk6KADQ9KWxysRFh8kjPh7f7dFAqKDTRY6qsKB4uirwvHXwQw",
  "key28": "5chcp1hBN6MRHHHwHxJerkiPV7Mb5X4j7bcmtsbwR8Nnh6ruCdJE33Z8we27impxHgzdfsiPe58ogdasrHKsGmuE",
  "key29": "2UiwmPNTFeTD2JHDVsZQa623FsvVesjTA6673FBhQAu49ET4QQxQAxdqm178aw6A9bmG7bsc1GM6xe4eoHwsUfg6",
  "key30": "4uBTuCwcPEUsFTcpELHczTeSvM2wbtV4om56mFWB3fHNLHC3EmfJZEb2VgnngqxskyEc8xDK4zPDmJ7Q4u7DcJYP",
  "key31": "52mFr7rbbSp2Jgoc4SB9kqw5GvwiuEjqVXtggp1epmAh5nUdfiFDLXgnS9DJh4tUR22NRQ5tDg32UgtqrqvpuumA",
  "key32": "5pbt2miFKyjAxBrrTa8nT9L1obUSrd8pYosQTPpzXjUxhMaATviLmadtXTEocFgiGWRg3HWwGxcRWzisWtU8pfH3"
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
