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
    "2uoCiXQQ9thEReVSdvXKdF2WFXQABgzLjTz9p5X18ds6eHyNP8CDXLRJU47oWa9jRiurRVVnXvFvRq2213MYusXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VB6Kh2A8FXYDsQvGprBzN7CWY4MbhaZKLReTDEysrGKFfcn3Mu7SMC1JPcTPKq74K2tmq3vWarYrS2UaGiyPpwT",
  "key1": "aZGqhFvyDctSBRhgdLtafYegEsseiZR2PSXRbiL2RdcjGcvKFdf6Wj1xbq1N6XkzGFCKhTUy61aYcpm4yBK5Wg7",
  "key2": "26t6X4fLz3fv2FDni6Q4qYGqd5KkkmwhognPzzhp3XzDqm7SMQCMkZ95UJkQkVfx47XwsGhznnXvpD1yBLz4pjbr",
  "key3": "4eygvKQ9yGwC6XgH3sNC1gGLZM6LtUyA9mpoy6GoaKid8MGg3NQm7Fmt6zeugfocMzb8X5WbTGV96PjU1WzbPsAC",
  "key4": "2kYrqZYNU6LSA7buxjuyL5f2ZqwdGMgTk26RQNpuwFmGiMdweNGZ1sENpmqd2W49yH1sAmBiXFKqw965ziYf1sGi",
  "key5": "Jiy7yWHZe2TPCRRrvMVyPjSTAiRYy6SApD1JyZBpa64RY3aYs8Rkbshj2EHEmEPPUsCDD2Vz3gp3r9iKRQMHoii",
  "key6": "3Bt5Cybi4MdnUq7VzFfjyY4tPGj9qsVWx56mi9BBGYjRk3mugKZMKkVfSYyMnMrdb4dwTSNifMj8GkkvWyusAZzk",
  "key7": "7T9WUszasniXG9fA8peq3YZLjSo5Dv7xZkAg7SbDsSsHZpLAxfLGxRDgPs4EN75jLYbc3EjdTe9hXFeZwSB5q3v",
  "key8": "3xM56wveu6pMEKyn3JvDaDBjbm8e1idcytet13ts59AJNPxfg1PqbtF8HkoqCrwwhrp98yEVz11VwS1wRXrgnG48",
  "key9": "5vDd6BQs12fscx4Ti2J93mBcZPX4pyGB9wgYTbVFVaGQMW6RG3eTkoGaqbG3nTUknfqFC3jpCd9v3BVSMfx21EAd",
  "key10": "57rND5zzGpb3sHoqfn6JGhZKq3CzVjnfU4u7kWovAMV6dE7anmUaAyJfYPbEPcn4k3dJR7kQ3caFRumxX3XzuZsW",
  "key11": "3RULdnijMhweKtzhPywyhNxjKjymEP4oVUbx5Aev9NnhCPH7pMzpQGWRX6x2x45vLKSDF36vtGVAUnh3pW3ZYwpr",
  "key12": "5G3qmrUDrjKLmc2jQu8gynnVb1xdB6AzL1FJWu4boco2cVgZJaH9VPaFzybvhezyD3aWJ31BoQDs8xHJu57kjKPq",
  "key13": "Ad3bGjSYnr4GGYuFWgrWvuU7yP1ooh7WKHNZ5AXdFpUvqSSZP8Hv2JEarJpsRomDEzz3ggpsTFZiWwfzpYDMTMQ",
  "key14": "4FYohGNh2QGPsXRArSDq7Z6ofh6PpMY9RPsW2TcwczgLSLkp684gZM9bfLRK4r9SnHkhvff1xcdajm7QafeXQzMs",
  "key15": "VK8XFyuFecY369oLEDooCSvGQosRKSjhejCM8sNWsGwSyvkLz6ke59Cb94BfQfC4fEfZLFfpKTQZt9yqbNkPr3Z",
  "key16": "58MwsGFNzMtfZhLsX1x4bbB3HRDXJ7M34xsoqkcNJN6AobTafX75BPDcdNtZN6xjxugvsYPmFUw8SZZkwGLssi6U",
  "key17": "42bsyRFqTMtBXSMoHmrMcgQJxdZwakaRVeWsGiMaSSMNfoBURQ6Po2oGgudGuEj3LvppBzzEqxk5AtaExhLAWhbH",
  "key18": "5R2AWR6VhunuHaFWSx9duMoavg6mieWD6oqQuftNNZ5qfA4WTQ8jFxgskAcDw12iARMDHfm1mnDtkcEAgmkLSkrN",
  "key19": "293Cq5Gn27pDUe1iRPCKMajtEALq2B14cwSBTouhWrhhGJVzUrH9sBM94Dz6yvwDRSQw6yHvbCsntvZnnHXND1p6",
  "key20": "3TiQGjYzmyhria7cDkhYKvYRpsBNeQAPuzm5k2x9XBUU4drpQjMQN5qNKjnpNnNHiCUsWTQtUuCAHuoH2EYP7rUK",
  "key21": "5ziPCpYaUTWaAgV36d4zYPnmggQKZ68dKHH13j2iNTGHs1GGtayTXxGubVkmcTtimj9PTVMceqT1BM61SKD33FdR",
  "key22": "2CCWk4MMg6NAWfZWRHnea5WGfMirpRXDHf2EbZZFwJBSrzNsqtR2DR8d75t4usrqxdEPwEmt6CbcY4nhiP82GX5z",
  "key23": "2pB73zVmV3uqedguStHS991DHp8Nqayg3qJgcSc73Z65MnAa84tuAT8bnrJzrybAnnyGFATL4gBCheYUF9PYoynS",
  "key24": "4FPM7JauTYSjGY5i4R6XZsrRWBMPRnQjScMFYatpCsLvTT6zDhXmd44AUmsih1iBNaLorwygbRPyqzvzp9djCn1v",
  "key25": "2Y5iC4jhYGR1CU2qNzAAh1RBopDS88gor7vBnYJ8tByi3sTi5HuQaNm8gRidp2rBxUTNYR9oSw61pRxMrrNoec5B",
  "key26": "5QxWd7z5FkExfxSUBzJST1n1oQdwYHboJrJwVrwRsR1HK2zKY8wGvHqL9CfACYM7D9fcrRGHX248MQhCuAQJY8jK",
  "key27": "3f55eL68JQfa4HjSLUJerRi63Wk15KWizsJwYAZYhp6BFpQzDFTWzVbnpFQszfcDCK6h99n8ruU5dxRPAJN5r56m",
  "key28": "PAQ2zDbi9YbPcsGxs1rgZe4MFoighUtUi6nbN6zwSGm75Sh6JWEUZRtQNeKeBSkuVprHm6Esr7AbDFZEywVBzjc",
  "key29": "2jt29V9N6kvsUqsahHEabxzwQc8mqwuJy9NJGHT6MHRtpY5y5Y83JGgmiKtfzuHd8G9FWYD823f5niHGiystQPX8",
  "key30": "5GovE6x1VUDfPC27WZCfS5mBsV47bi3NMttN7ML1jAZU6KA98y87S35zFqeBRdwm7pPeCbPMNn2BWyZHZiUKaHj",
  "key31": "2fQCUY4CGX3uZmHzM4UimcB9rxK7zWLoum69DJcifrTyWwv7KPWerT8Vf6hwmytpSjNu7RUL84MMJEe5WJKotbb2",
  "key32": "3XqzTUybqUzWSrTa7vJPeEXyyfQ8pR4zzdfmeBMRsuC6MPbTX3J36Brxee7h2miyQM2M8VBioTC9DWD48f4gnMPv",
  "key33": "4fB8P93dSEtMt2PRMTTYsAmTqmCkGpnoNEgEgdLr9hh6eQZ2jv4PipoUjmwzQ2qzVBMTH2K9ShhMFx29YbXck5VX",
  "key34": "4bZwDTuSJ772yoXMSS8c3iF6UGXPvRsASMeqCJxDrv7cPmroLqBLrjnabE1LDTT2g7eGn35gA4Qoxu9u7nyhkNtm",
  "key35": "2gCsEM54uz16pLitnbaf9Kau3fEc4MstQAxK5qqmeNHZ2omw2SE7AmrPrae7GSQndMFaFjLHmvC2T3osE6GYsuzs",
  "key36": "2qrsyyfrmTteuYVyx9eN7GqsSuXkAg8vHwhyiicaMEtPob1wgnVP7rtu2Wk1BysN421bv2E7AqbcYcvQN3Z4ccWx",
  "key37": "3iNGbDdDaK4xPMMNZD7X6z5AzzeERxbsKw3R1p9fXq5fg5vgZKgxBGArfipjez4n55bkmRNSGFBmWdGPsN5FJ6Qd",
  "key38": "34yDKG2ixuioGvcddw6z9cb2vaZbzte8paZmCs3LViEKMUcimd6pAun2F9RDfZ4y2JsACFkvXDU8CXT4uL536np2",
  "key39": "2J87PzhNP3mZ79nVJXmyB2DWLyZYdAY9DaWa1Vi15UMHYc49cYKcvFRDez13jsuNv32M9onx7DkZyLffXS4PCmEK"
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
