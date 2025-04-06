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
    "2d6KHDLeuCiJsmQiN96ZutxQPLQpnZ3JZ3j54xbmESCQxmrMJxU7BiRRSdXLzvMKfi74CE9u4mgZxoUh9gqM4TtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2geFfxqvJvz77bhWaKxZwZ8vCCYmHfZUseLbdnXiNu6zhcpFdjJs2t7QZxMz92nnjkbhusJ1NMPnKPvTsQSry8r8",
  "key1": "56ubWSqySM6PVRefz1Sz6vAdE7qxka6Sh4p6VLDAT6DdGPGUfsaGf8FyAjSVfjLqso6aQ8uJhf8UVNnfSZBXawdj",
  "key2": "5keqnz6yMzpBksjwUAndazma82cqs1wpffrBVrJJdJPgC3Jp4tVsg3bxaPQez2ErWZjm6H2qE3qwp8NNpKupjuSW",
  "key3": "5qcrHRcxQnJMG4QGv7joXRz3u2AZBWa5GCMXkofft3dcqgkwh7MSXr5Jkxppcmx4uS3Zc2tecW7YsbpV9x4FsU7L",
  "key4": "4p14tw2johERet6rteZ21jp4GEHWm1FzMwEXtoqhVeHMjjUFDkkYZz24wVUo22cPPfkcP6P73mzPjoo7L3kRtrs5",
  "key5": "3ky83XLTCs5Yg7N2MPDee3QL1rVoJk2FbFZurau3wCeKDQh2Wyym33vTdGz627gjsz3XGTjdZYQBP2X9uHuDdFEx",
  "key6": "38D6Md4h2o8Jms35VAtszEFB8fU1sNGjPSrVv6ZnJwNh8KjSkMuXE9inJuAaVqKy2jmL3uHXyhSMnSkAYitbS83Z",
  "key7": "5j3YBJKUB3Dizrx8cx7yAMuf2SDMQNEKVq3XoZZrRbedHwR1wpBCm61auC7pHdANCLNTF6T7Yh84KWbgRCHtyV6e",
  "key8": "3tLgDenAifHHiRE5J6VMPWyAxyGoxsAM5UsUu8FjX7DV4chaEYmR6YyVm6YHy4xAhXMXSqQx2cNUqu4uSghSbQeK",
  "key9": "4FQ6DpMwGnVuwsDJZMR77Fy6Az6ndmpQGgVoFWUbUx8BxEAKooBEwzHKYUewPNx1pzWuoN3m5hkBXXVfLteQSV2k",
  "key10": "5uDZrgFkwLmnJXyDZGMKo6PRDaUzkLiBxNji5EdrLh7qQU319a77fyCXqCQSBQeJX7w33wknKCrL3XksAcc2fhFj",
  "key11": "2njVzNomNfyPyfyDLQixWjRR8hd2JFbTZuV1ADqnC5ZQzveXVZCKbYyj6dYaATSK3SYURwY32Yg2DMMyEs7zxoBj",
  "key12": "3x3CaYyxpDs1bi84CPPH11YrveNktdHbYftFyHMZsWyqiDTSM1MUMXGTDaGH2WW9URG3SkGCrsMRs3HcZs6HnjMH",
  "key13": "5W4TLF4DnsiezAMb2gkXLghrD5L7trJgJXWNUcs2VBmpPTyriWdkerR8K5FDXAhg5k15wq4YvjnssHQEn1yfBdDc",
  "key14": "2zBafVpgpS4zcf7M51MdebqwahNM8b7bV5CkqNgjMWPAeM2rbo8Mq4A2cUEvewnuc8SNdNLoV5fNysf2CutZM2vd",
  "key15": "4AnyLj7ppjmgACkWgP8v6sWQ75fFH2nB6U4tvCAUJ64sxwJ12S6xcvLEWrEng3qRQEtJvtpodG7hBvfkcBF1ukNK",
  "key16": "48CqPT9gLYK6xh3ddK5Yjxy2yscMzvLM4tvHi6KrnpEdLKTdudGVcHt1oUTo93qCqH8mGANZ6mHMs9b79h6yerUi",
  "key17": "5zk1LX6caH9mbqP8kFg3X32E2wBa6FpiXm7UygwhMU9MPt3pu1aJNyRRCKehr3NjpJ8n5wjxPVtdMgMf3icW9reM",
  "key18": "54nkcLUe54gyrnTnogZYGWzfqzgbcyBDeSZjkoPyjXBqyP4EFahhSShtLzQLU4tUa2RhjBvDbuizP3f187Hjy7bg",
  "key19": "3mUFeUeqxLcCBA1RmTZMGN8eFMwivo3vrKaDPUj6g11Psv4GmSkRKVTpt29bzdUTd6Pq5RFGR3hSWyqEyj65YjUD",
  "key20": "4pau8BRoSdjP45ivxEXCPFxQyvrPbpSEHoA3CkVzo23nc4s3V82bjapVXrJdizpez5aYkcjy2NjYDYnH4KGrYxii",
  "key21": "ivpaYRmXWt9yxT4DNnaDsbboZGD8UnHRxogiKzztYgLLg48VsYXpFi5icg96KdQdoXzUx3nVZ4Y96213p7cG7Zb",
  "key22": "2kpwx6uNf6nQN7EpTAZ3z2ay4zPYBW5U7V5mbotC3yoYk21cjQeAYiJaR99amY6Qo1M61QagaarmxcCi8ny5Y5Ni",
  "key23": "itJDuicuDQUXUhT1koiWZeN3Q6kthxmydiWHAwU5jJkPN6CWxZsybdjrcw4a43ujwdjiz3S6pxVJjsVLVVXmhLS",
  "key24": "3rKirACWLEqpB35JDVZL5hxTj5VPZi48nrfMUPgh5vsUFDJ969Z6EMhJjxka3CXXFao3ja2uKxTT3XutARQD2J9Y",
  "key25": "nTE9vcPXVqJy3eXcPiRyCq7MyVgkAQTRG1Jpf8hUdFc7vi1UXsfuyPrBAPLBj3Rg2nz4h3nS44ALAM9ZF5Kz19A",
  "key26": "5MniiMqxQEMPn2mU6k6Xzjz7LLFth6KLwBstTVxxa8GCUfMarD2fucDKZSFVJNfLessYCZac8k4jRtRjZneeh5DJ",
  "key27": "2YPcB5LT8aakFb8si4JsjFsvhzfauTn57bDUmxGabQNV9ywyXRs3t79yPA9fpuyeZ9u9jvwzf9sxhP1JR3W2xxST",
  "key28": "4unc3WmSYNndRqKZZXQFRjohVG2e5KdTMRpoi86NTB1vbTCGBz1ngN4MKvT58oPR1Qc7F4H4SpbHmS3q8Ff5QWii",
  "key29": "4ifSDhTQeSg68PpuP11W1QCnGxT3hQ8JmGeGs49vcvsZgwmyMqPg4UHiqGFGu5ZibhJNxHhHec2wAjqkjqbo3aRw",
  "key30": "339QPBVFBbFLTesmMZHeVUXzX8neRuGfaXmhf3rKXahzZSi2RuYQ4pZY2Fr79MvDz2EapQaYqhrCLoU6gniNzr9X",
  "key31": "3jgF2gFK7B5MVBHpcbep7k17jxzgDj1gKXLwSKy6rZ4y5wnLeCptCw74FSgSHFtcKtCSuHz9m7XPucyXyaEcGvn4",
  "key32": "56Z3waSLHWtKCZjaFnwPCYXP8YFfd3pHd46DuYbCzoqrAzQvZu6uvAnTCYS489arpkn8WF3MKtv3LdZbxKoXvs5Z",
  "key33": "55hEdjrDmcbYq5jsPp9tJRxo9yc3R1DBejNktKrQJcwuwmcxFXW1zBydNE7jsSiAB4YCjZzzWwPxznueTmEyLGNt",
  "key34": "2NKnEU1W7QgbyVosun4mB6VKomxJpjTVaqACH7XtUALsV8ib2YuqZwFR1JH4kvsRdKCtxCFNPwtNYWFBvyTXgZE6",
  "key35": "4EnEqnH2SEDzBaz8CA6EXTjdHgAxW8A9JHdZP9gZU2LdiSZT4VH9sce2aWB3EkRB1QJrYAy2tY7cuhsoyZrogVPM",
  "key36": "3XCuUCpLvx6G8xTrpcrtXLPNMPAymz5bGtJZkHeVfx5o82j1YiXrFBABsG7rBntaSunPhAjuaR7WCHZhZ3cZyEMP",
  "key37": "2DrNF7P9zaxcSzEgMJ5ouozZZVpLNqFAZYVky23PNCm7GZ9W1M3hFejT6K8HdLP9DojCVXzEUpBV5zE6tkXHsct1",
  "key38": "WHdZppWenMMeuedWaPo2eJXpwqLqzMAwgi9SrNoVpVqGLdTMZijSdVBp3xXesCE6VJWZ7eFvsfwMC312HRE7uGs",
  "key39": "2EN2GKr7vQeHe8ebVi2tNGexu4EcVCeL6BCcNaaRuDgEYMRy3D4JasZZg85omrM3vKm4r8JEq5Nkz2drvhGDyQAH",
  "key40": "5nucYr8jyT2jfCLMVaJsSibfoVaxYW1MQJSECyo4Gm2bkkCC9zSPv1zQ1hKcQoGJ5PBStZqXn6eTN3VuHw8rtFkT",
  "key41": "2vaN1D1JX1h2VQd4tHT2EVPBexxyfQeTBx7knMYBR7hoGRGixiKakQziM3uJEpTQytJurhnhaiRSdsHpiYK1hska"
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
