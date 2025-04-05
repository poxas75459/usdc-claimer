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
    "vsb1e2AxDLuWgd2z1S2dfiZwLgXGxJ7qFu8CsoxYBpSgMtvesq38VhJpqSS92vTP8BUXj1dwyG14S6e4QHi9cBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LgLPHUHLBd1eBTrKPh2KJW9YSSkbsJagGmQmKnR3SzSw35VGSQVx6CY6istGdPvV4hC2bdmVCrJjVJQBYj9UD5u",
  "key1": "5apuTqbKKV2De4BE9sYzQNmRKEHEPKCi81CruMNNZVevQZAevnwcvyzU7VKiZ8bCTnZTTNMudK5BzqGKpvW4ECZ9",
  "key2": "2umtTxDETKNMFw432FwMTqsLGfgfC8Yhz5YPHUDm1qQTHr33QnPxutDPcuH3fxnvaSUqmXRDcf2xtNekPi5ffvU",
  "key3": "5B1X1MXYrdgWsEFFRP9Y97prN2EEtiUtQPreWRxD2492RKJEoFcLN5vwZUPW7Z5Wbon4rwHSrHucPAbVRU3tBRLQ",
  "key4": "6675XgkDuMWwQ2YUP3Y4YRyiKyqFrFyFgVBC7vT3K2XgBbh7PMpFyMkFWSCKmzJfZbFV5EsX1suBe3gRgxYvSk8V",
  "key5": "2dVR61XVVj9VCiG1zEq4H9jCBE8gXumXVuHX9aZN59VxKR18zMRd4vKDHTrPbfa298CrBjHDPXo3fqb2LGWjYWzg",
  "key6": "23dDmGbnumRa6Rx2AkFtaLjxCM8C8qSeJ8N7LBDQaH7rcJRrjeLBQ3bTcr9bDW2ggJPuJYhSQNdfopSuUg87rcPt",
  "key7": "3YAyKUqj5UEUyJkZwRc8cdFApz3uKDB24PcycVnf8xjwznMhQ2UsdUtEgDNc2wwYCwBybAuq1cYbYt433zb7JRPX",
  "key8": "RHDAZa5SQbiVhC9zLBctgzkSS4AX2VpCJ3qJjDnvYiQGvcLxYqc5YD5uWP3XTHcxSdofzWuTG9CsaaxpusKkcLP",
  "key9": "4pZJA2P1BtQxrsbo8dsSPxMTnMrEsX2TwFn8pabpmD2wPoEarzv8mrGwsyhfzZcVjCQgyCD3JxLfp62sNTReJE5w",
  "key10": "3KRPmhGFvV5c49HWMTwY3ayAuA9Tugzx5MwJJsG5AB7PdxVyMjdW35RgiLmsrCWGYcyejj5GPb8SE3fwdDZxsUcw",
  "key11": "39L3m9BBboD6sg8xJ48RH1rkwxWPXAXKmvo4xgwmkkCzaqCWZJVH8ANtfzhVew5X5s1N5YXfvhQmq5M6KS58rR7S",
  "key12": "KLmjqSF3BJ4DV6z116WRJ5cRXW4Bq1v6tbfGD83ySzqXZRwJDnDneVdU1qs8HWc6QRbToD4wi1BzNP2PxXp8zp9",
  "key13": "tffPHyHSenByHfjT1JZNRxWmiMp7zhCJEEKCPChKCnZuKx7Gz952ZXx7nAujv9Hech29aVkM3LFt36oNTiZgtr4",
  "key14": "52p7gnbcFRiQZF7eEaj6pXBdJZ9iEE2gq9NTXzP9Y7xEfpJNizYx6xUwZuQXRD4d1xet5ThdNYPa9xQhdYqybg97",
  "key15": "2owxDVKGPaKXGSTvwiTmeAYqFF5y7xSzGBUKWKDLmNStj2fjJXCEG6QHvBf3hrjRkGEMYXABegF5XwMmGKwqNqUe",
  "key16": "aGybWLkQJF3wGfwNcJYbnHKdzgnVHWkBEX1ex47Qri55c1jMipNBftpoqyRMgE21xu7B8jxVodCcJS8TnajHsVN",
  "key17": "65amBvt4bRK7zxUCvYp9SfD4qX5XvrSa5JRJW2hAkkrhZucwcdcUsVnNhjsDEBadTqViKS12xVqpSvtCjdjkcMxD",
  "key18": "63kS4qNWLr9TAgyQHgc5XXiMMo1yAVtpJaVPV7caiMmApFnuipSvW6fPo3VAFQMZQWy1gi6KgHd8y5KN7Uk24Y4m",
  "key19": "5CHNxePJKE9EooXTFdhw4sK3StHKTVz23UxkzTCrjoPFLHUs15tTwqUAtQTe8F85SQAY4tm9UzeG96pRnEhEgHhG",
  "key20": "2bC7P3pyLZJP9fiteT4dUzy1n2RRkP5UbxBet3RjQBb1ykzdbWjeUV2XV3jnyCWqgy3omVmQqM17Y3AEuQVn9eLt",
  "key21": "45ajqxxi81Gw45Bv5Vp6692hqMcJPhYfYWkKhDBkDdon4rK6p1kJd7DJHJxfwmDgVTeAzRUFEKmwoevMjH8Dt78",
  "key22": "wJcUgDwt7aFExHYT5kfvTpht8QaS58Cwokx7n9PUATRBQhNY2XNUyPeH7fCDuxoeyJqMFoh73oY1LBtct9jBNcm",
  "key23": "4fFLdXumtszPmWQ5enQkFkDcTAn95xVkzUZuNZPvRCTSCof8WM8cfcS7KHkkMvzbWkQZieQVRstCByHAkbP5B1LU",
  "key24": "5qsPtenQJjAt18Uuk2pUrCjxefACZrqPxveb8KRhgN4uzsACNyTtpR4rjqbnC6vZ7ZS8SFiC1q11LGSoaPDWciKF",
  "key25": "4sWEpn3XDddKMqYHkzHQirzNs6KVv9AbzftuWvL8iLM7StusLpsiaS5sM3wL3YiTp4ExVi5xyvQzuaR3QMSeCHYE",
  "key26": "5b7Q6Z2PSP8PPZUAmfHvE4BzddcPy8Y8JmqDvt8aAaM1c3rquyiKxQgLdFzpvVjoB2DPZwpWuYLvHqqbWZHGDmZg",
  "key27": "53mM9v3f6ui4F8by9Fk7T3tT1EWJuxwkvkH9uApi2ey7tXD1N4ozboJc3GMndC9FvwKuuoqSD8mVdmpFJbD6T66d",
  "key28": "2TJodDsqVYGcZPD8MrnprkZ5u9NveTooqeiWXZ5SLpAJFF32pzfyMi6vxebWTvDiWjpaLMW8Vka41FXGbJzGPc8e",
  "key29": "5BarXgm5n54BGnrJqaibTjdVSkT8KFaU5A59zj8P3q2KmKc5GJbcP9QscxvpgoZAF98JizqM4ViGpEKDAvEqrZWN",
  "key30": "uheq63kXDdm1RP8j5kg1Pc8fuRXBZ1ZacMGJWVoebUQxYZHzertatDxkf5v54J98qveRxYVCpVAmxYQ8iNxH3ET",
  "key31": "WbECLN5usRCrUmoi2aDhBLAmt7xqZXzj9pqPtD921PCjDqMDDrTH2ouEUuD9FPtSupTZsE9AG7iK7xcLtw3WGw3",
  "key32": "5FJbo753Wj9pqGjXXVeC11dutUZX1957m9dcjExqSaHozxfb8NiDXfhgyxNusNCrt1eBAr5BPCWmMct44Q8ECG8e",
  "key33": "56ChtcUVhJy5nciFLUwDXSLnceoGZPT9nysLpnLFhtb8BsvMTbouQ8FSPiLDCEDE4iWLJKbvAox8yNHtHUjkHnD",
  "key34": "bG8WMJGq27qbCBJdMsh9UuEX4ujsAjjPRLd2Nr4Ad3ZnuzUxMFSuNYX2KoVrv8iuBzzAUWfY8AvPruyU94kgCbg",
  "key35": "s2sJasv67tNqDaAz2F7KFFb2boywzKEctcn9ZzGutC548WMwewDhxijTaVaqanQ6RNPs6WpEioszWRGG7MuoSBA",
  "key36": "wWPuZdzjyy59SfLM3eh5cF2Uzxpxgj1wDxKWnoJrARmGgsAxZA9JE7y5ADTpyxSiwd8VN1UZnoyUuj5TPmvz1om",
  "key37": "4D8T6USESt9nwXLc1UG86HXBWF4T3FgU2HGthbdqsBA1ufL2RrQtxzJx7S7ejd2ffoHKGKFJtv6td9jjZW7DoYQY",
  "key38": "2gNvMUp1jy62vdWGrTGVZv8MPAhykQxES1GkAABVcgLh89tT23AogZSJ57QBLkSTCW4GjUmgsyEtTSBvz4ZB9dBi",
  "key39": "622DwQ2uX9z6857Eub7UCr7bUfLUL8QqzgXV4Zf86f7f1EQ142mjDhj416wFDVPCEEpXn5gDncHiorHHugrKUo5r",
  "key40": "5dzFc2Z4UTw17aRQbDcHnUAkGXwfx4tMSRE34xihf9hv9ev9ZfFyMbpXKAKiQiuspvjhJmRcoQE9ZewPgo4gcrLf",
  "key41": "66DnzKitFC44QYNSNJQg7uR3V5pfK6kbfz4YPzdfw1qoWHo2vd2GEdR1oPbFoF366X76SSCGNbfwe4BeHMhR2kgE",
  "key42": "V4Rhdg2YtsW3iAPHfsT8tHvp4xyis5CKVNGirQunFroe26vhdJiHsnLmwUQ9KRTXntuz94JeWM2CnqHDm7gxPYX",
  "key43": "2aR4zLbAk7xyEV9iEVn4pin3Z4JW6odLMjGAC8QbSntqhMKHadZR2zgvrWPortjiZu23M9T8kqyhDGE4p69wASgZ",
  "key44": "aiJVMv7tEoxAQ3weqdwmyTLJdMAbdxtmMCFDnkMHmv2nnMdY51otSHqgfQdTcM8AL23Q7USto16MAdb2oADKq6g",
  "key45": "7J9ZiaY7ctNnhioz1TPuge5FJRVyYXGGm8RGkUYbM3oyjL91AGiT6VERvpRdLpDpmLHdMBsBFH9RAkEkSZ6fUm1",
  "key46": "4BHhRtqFVchMDEZGdRvynevAmsiRYBZ2JbazTENbjo7eUptwknXechTmXFwjtbycfsEMbkUpXztuNAemwxDNi1L"
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
