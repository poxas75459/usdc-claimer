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
    "3VMNF3HSYSxHcY79JLDysZPpj4NXQqW1soVN7TRuzCY1DNRVX5qZ8gi8Rcp6Nqg9sLGmZF9zKp35htma3MtzyxSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KwCBxU1gvCzHhHsAJMabw5cNeVpkxGk9W8pxM598q9cRNBX8VNvNS7pjCFwbEehBXQpcNbL4XN7yR7T6YVB5zaJ",
  "key1": "319bthw437mN3dyCQFP4J23Zr7pt3wGFDBgCjvnDvjZUK7mMhwmTPghwwikEz3oHfZeaSZGUzfVTvqbz5xU2x9Mm",
  "key2": "5ANQcaMimjGXHRZc2jhjUUmVa1LY3VAHRzbKDQgiWFctrGSZLkuqXzGNm2HfryTojV2TaZ4wdFDgByR9A11Ug8oY",
  "key3": "3bTMvtAJJaBJ7pAkL8x3ZWbWaPsHviXJApWo5eyMY4EKwndXJrM9Yey71p7vtbvNEiWVHGxFJGvj8DUepqSkxBcN",
  "key4": "3PeBBAACPngASLEJ6rBX7H9SieK6JyyFbRccurtcLiqdRtNLAsQFCGCUb31K2eqN52GVPUBjzbfPZ2w4zZEtnnYj",
  "key5": "5v59jQMbTSoqfBPZwCixFTDtN7Lf3iTQxuZnkTBGsyMGEYhXUgjToGMhjJa8WwGpPLia4SnQ5Zf926ZsEYCrAf3m",
  "key6": "jvrWeFYzsgHxroG71UFWTmwLF7aWviiNwLRfYgVL3cxUvLe7g4gsw3dSRa8KCSyXYozwMBg82B9M6H2zPJgR6BN",
  "key7": "7F8xXoYucqbntR8McuqX8veLipfUWr1Rq8zgSUPp9r37DfSuZBxr62U44UosLsN9KtMqZr6VDaZRbXQNnAqh4o6",
  "key8": "4npuxUtnQsGjwDy7WMWJpf9EpDWY1hLPne2abq4n3KUidzXxdcjwYatKd4fQZve7uE1HyXiyruaCoEQaFagLCEiA",
  "key9": "5fSpJU2i6zPo6MLP1kAX4NMhV4URy5DuVZhXiEkQZuyqz5BLtTDNDrHTLE8vuPgVTJyFMCAryMUKFb6bhvdgvMAV",
  "key10": "3WszKcfUZDDgZ5h1CyfgoF8FC6THm6DG7m2YMVqwvLstk9wQc3Ar5a3zmDWuy39egw6jaaX2kknDvL1byGu5d5Av",
  "key11": "4mHiSkbtfgXVRN4vcKN3SLqfjGG1t1VEXymvoK2zm6iCWA2sKsEmBJ6kYkmGGo52yPmqtZffANK2XCWLD6gr32pA",
  "key12": "5v4522xp9TMQexF9LmcPZqUi1KVwx5yHsJvq8DW588KyGkF2W7UuZQYGDd7opPhe1wQpbX8z1uKn6RoEmvqjpdQj",
  "key13": "3uqjjubpkYyTm44J6PayPuvanKcaKg9sBRNDHTWhzFuzbU1RjL6zoJtZxSyKfm1nLNYmSEVTafy4RfADUv6EWLPF",
  "key14": "5XPczXqznFhfpGVucrk4ta7kPBbvHN2uJaPoA3xwkYZUrJdz9qdcsAcR6yyzXsCm5y4yS4TrsU237xfyFc2sNUKq",
  "key15": "2aA9xL4hr7QrUvPG6bkTkqQnFPw3DYBe2jBLP6CreyF2XEc6DsrvrgJ8tWaERBMegGLiRYn4aKcAbwjHfXGz3Gb5",
  "key16": "66ct1sPnhDDbgTPSpmddEdHAZurMj4SWpiDvirBM6kow6taXr6YneCfMLRj5sRBPte25akbdqB7iWVpoAzovBofS",
  "key17": "4bUjax3vAGizmndKmZPk56mtU8dMtinkivmohpvSHCXWX3k6ngAsLUpemfA3M3hm8iDWd4AJeGAwR44yvZZK6isV",
  "key18": "5b98PmE3cherNCQ5pHUKjn6PYcq7jikC3s75juUtiGHrV2eyF9jTtYF1krSWCU5Un3SABTnHqkjq3E52hR75oarz",
  "key19": "bzDFv9TzLmdz6YJ8ajm6ukecaMWDB7pwSKXeN41EyLDuVMWYjyjxgs3X54Zz7sReBMzUuKkj3ht33DMchGANhKe",
  "key20": "2dPqYPMhtU9YqNQtJ2sgFJz6NUR2K6iL8UfJ2tCskNsE6LGxcqsJQQBeUp8FVA1arLUXjo3Squ8rS2zcVQVgdZW1",
  "key21": "4g79w4FXm8VroZaV1ArxXVUnRT4SkmamCQgSu2MfFJfoYR1CT6XbcHaSBTqrQd2tDajQkmvfhNTbMHRUzeJ21Ver",
  "key22": "tFkd8zaNxe5bkbaa7D9BzocFWikwNoXGKEGpbseCs7Y9JXgs2heH8QaKTfjvnYS3Yk2qnrSbUpynHDzw3cznjYF",
  "key23": "51kob3X2bFXyv4iGiJfpAWCzBRHJtxqAstgrWLq7fj7ucDhqvmcMqRHqKyjd9N5kXvKwTEks7HJWtQ148qxr8cuC",
  "key24": "2js5p1cCM8DujNgDdgdgvJKu1pE8s9c9HJN2Nd4BKi5ipxTynQsyuGHVWEypd6khDs1jydpmi9zjfZWxHaKqZCEJ",
  "key25": "2u2fzPRR3FZUjCrYYfEfrpuXyobDFtLJXzP2ioWvhiEXoA7dgZwSwFXmtRtJKdb4cuc7xvdqoPzmKv34mFT9gKhL",
  "key26": "3TsEwb48e2vvEWkQAoce1tUbuDSCV5XAz9NMGC3G55ks4YBEZzmShoswMTRDKyDPnzR8jvqYw77sgdN5zhkrVRDi",
  "key27": "3ZRLZhvon7XZCHgupoJCJLtGo6FQ2eVakgp6tyce1mt2uuyWYUMYGRrM4zsvw3gYkXSGBxXvEwMwFnvMFGYmUVy8",
  "key28": "2k9EaQsEDV5scvq3s74aecEUMwLbHrehyvy6L5F8S5bKbRcBdFNiRUfiyPcgk5A5nfa8z1YmS9grqagGJoaLzQcb",
  "key29": "4Wyszptj92b7WJa7btshGQsqNeT8PbuzCWtjLLtXRDeNs31fYAxKaVZnNjDCeY5RHaLR6WYct8ZAshDbejk6RjE4",
  "key30": "t3qYtCGuhaTnqCpVULsjiaTQvbQpH5iYgUEPCxWxwmA3xmypQYsuPGRxKjk3A6RYGEHocKaVP7scwq2g875ysSK",
  "key31": "45yD5SKc9sCrPUpgARC3xaYWL7nfPijYPGJJbosHcV5yJWXJsZGjLpLubR8kCAEM9gjpGxkVuRhVBFGbRnwwVpk7",
  "key32": "2tSm3J8d5TTXm1cvichGKNvHdocPwJy4ZNXGrC4ztWMqnJi8cW7LA6eiFfCvWHpPXnY5i9mop3UMmg3mGKVMPRc5",
  "key33": "51gBzFRojRb2aQSfUBpiqmhae5JBodu95TA3vffWHmA7NyurieyyANvnowWEz7pt1j94MDu43xWXxPA2YTrWFWh7",
  "key34": "NCL3EBRCk9BEL5pxqYGo8FgRDrcMUAizE6Hvk9xa8TQYAtagMjUDWXUY45tA86qX66XzWtNwRmGjYEbjGy7dSzK",
  "key35": "44hAQ15uou52ft5d62mb99QfU1iaeyNT6u7P2CU2bEpQ6Xcn91eABeuzxECpvJCEbiGQCsxRPbA9CcugCY2ZcSUA",
  "key36": "2FqBek4UwLaMEqifpNavuJE4bGnYXX55Rffp963rYc2dWcsRkQPKJDqxfMDVWu9D1P99VBxB8fWRr1VrG4RgNCqs",
  "key37": "3o5rfmBs5V7pzptmDmd6TEbQX1Go9oopUT7LYp5AYwM5wDpUKAmw3KqhUTgVpWNL55r5esToPxoz8ScbSXABn55r",
  "key38": "4JAxEbZCWhHKofeNb8A6R1Sur73mSSbZkDDu8KPEUuSax3eCrHUw3ZvP5DNbU8uVTS8qKMa47ieWGGV1itpPdvhk",
  "key39": "3f5gCFB1WFj1frn9fjgYWptd4KZBn4sVeEjXbxi62AvcV43wgthTSsMAbuPPRzLD62Qya2dgwn7531Kpmq4P6sqM",
  "key40": "3dxGbvaWtMdWsAoqQcwoQ83asfepWVkNQfzXdkUVPTFRh61AxWEPLtzgBseYDdTFyjZyVRqU6wXTqwce779PYXDf",
  "key41": "5PTa4UzG64b4oQgB83jddS1pDJTLZXKQoNDRF8KXJED8XSQw98QmGUkLSZVjvDgnaQEfp9NJVcPCny7HF4JscVmV",
  "key42": "4N7LYCefHLsj8KQKcabz9U4YWv9Bz2Gi9LHy8foEbCjk8pGb1uNYq54BYUQEUjcaER1Jmjq1RFNftnVh7zaFERUy",
  "key43": "34UWumTuuxiyadeYGoBW6HmYaTEKTfKLN6BxdMxvFise6iKdkoZ1CT7tygPbJVbbNy759P62CFo6zmohBtFny9Si",
  "key44": "2XzYKgPcyewHa7Z6xKd8ChFWGJ172o67yj7TrtHgoyjmA7pc1JSR7bJ7dQrbXyAq7gxpHDVdzzszrzn3Behzp1ti",
  "key45": "4nKRw2HjQ49JTQVKTv7boSz1oj9t8ynFgxRexCfcd2mzcPzYbKAcHsGwcZVkmDihLgCKLzM3HQt62XRMtP8NUdzz",
  "key46": "2cN2RLDomvLMSAJ6EV17a7KmPyf3aEVXgakBfPjZfLbiohn39ESGaLwCVee5iycFxbnc4VvhcnqqYrGj7WRZyiHF",
  "key47": "4SFJKeVSqsjvDzwEhWTfFM1SGSyP6YGUT1iB9rCppEHXPx8QiTX1R43U4BXBEuazFu2GqymzPtWhKkTsqebFRvD5"
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
