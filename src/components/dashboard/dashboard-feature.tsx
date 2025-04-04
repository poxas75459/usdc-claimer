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
    "UYmPNGgzpfwT13bHnUpVQvuaswoCQY6BHtUZTQkxR2EqsBEtehjhPY6X2Q9Hc6nAYLCjw6MeRRBYi5EH3yd1smr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eiEU2k1tKJkPvbjDchykBRq7CqonC5oZD3Ay2i2oxz3MhwyBZkFCa6VHy3WQMTkY2unoWWCMpidmNFe2rxFMnkL",
  "key1": "5PiucJG6uNe99FV8v6zFZMuHXCvyD7Z2Q6TMekCS37wJG8bAgkdYaRRL5hixuJvmkSLkyxwQ9FPn4wbiNnX7hmUo",
  "key2": "egtmtYLgkDs3VYw5Qz4S2CQHBqCyymeUNdYpyQWeuQZFTnAe2DeGhHPfb1fNWib4eNxGrMemttgf94p4BE7hrBL",
  "key3": "3XpkELGDxdGiRPKrc3RN3Q5G3NK6n6BtnhjdbkVJAkJqEsNK3kgsFMhKW2gfBmrnGGUKvF1BqVzNXqqkRAuQrchY",
  "key4": "2vozPy2XGfQuPyhxbZN4cn46z7bkftbagv8w9WCSmSeT7fPR5KgBZBHM3mfKwx3hHNjvWgDWMcGnqCHFiqcUkL9",
  "key5": "3JBnaXKJW9KZCcFJpsePLZKrqabpzFM8rouxXaFBQff9ZRFZiwmEL8Pc7qto6wRSjbx2K6XvjrPnfpoa4dz2RGy3",
  "key6": "2foMsSnJBSxo27Jct7vutfmCAmpSBbRdhRkK8rjAT5RpmxtvkFq1wfYSNPBNijfRfAaN4X9PDfFvvnwfC7g5GVdV",
  "key7": "5vFod7NZ2NmbiuaqtCMrNCDmQKpcpqdA9ZG69voh3EyT9jAbC2bA3do9hVmx67Ss9WUWEEJZmtAazXows6N7YRWF",
  "key8": "3d1WHDNrxHL1fkJZXPk2hKgJU9DmaoDenSFxF8CvkR8XAZ8RaggLoddwf63e9o9sp3J51WBpJZR3LxNdTbyPfWKA",
  "key9": "3hCacAeFnhSYKADoGwXUWgWNBtLbU1EHQB1aU64ovrFuGF8veA6ehrVuLqcDuvvMAwADBPLukpoouiqWQRdH4NjM",
  "key10": "3Xd5VbJ9PPU1vHPJyyGWTNXsCW2dQGFNSpoEpF1gqYcX8tFFdDns1C5dEQ97c6nM8D6yPm6mfb6P2y2BHudT6Jv9",
  "key11": "tc5HVAAXvB92TLdF1XW3WdL58Wn2GCVqpTmH2nHX7QTwVNEdkD3gz2BR5iPCB9Usf4hXkaBJ3cXApsDVdL5sEzE",
  "key12": "4vAaMmZVnC5ja5sETe4g3Jikvh5TeZ1d5syL5ww8FpQVfy6RT29VxvcwPrQtWrTqfR4nvcdLUB577BpkDEpe8Qx1",
  "key13": "5N4U32T2Jy1Qzh6fBvhKwAi18kagb6u911UmbgBuHbFq9BScZnNdfA2qYuPFn94ZSMt7qQgSYhe7DSVBBx86YvUB",
  "key14": "3eRPZxdLxqb5EAG71VZZZqtt4NaBbz1N1v99Lv98yteh5en6Y6WCDsEPhHii1dvX7oJDipUmEgfuBxZDQLdAhvsU",
  "key15": "GPFE9KNuQCF9sEhRJ9tqAxXf41RJa3Wfad5u7WkXg66aDVBUBQACoPHQCkvRW4ADLwXWrmWya6KVbN8y9VGQY12",
  "key16": "5uFCmCsK1NcTjMzo55uxnntdNRpWrQnxmuQTysJyANEo8prNjccGjwEsqJZtJLMhjGBYnjDvu9Uc41zayEXpugNq",
  "key17": "EbF98JrAZrjHmw43oSmcYiYE3ivHWKRP8k7gWT1GWucStf7rxKvi9AcWzkE8GRC9riLcCSb6YZNEvJGaykdJ1DW",
  "key18": "5fEKkGrqGV15Ry3Adx6PAKUKgwikurVjMpbxkwYhMdTfMrfEePatoCzPL823XkR4rPfk6q8BHnspkvEc6pMcBAoU",
  "key19": "3yCzxhkYEZM7yMCNiPe7cXfUscXZhwznuSX91HgrsdTTBReoJeYDApFmYgVGsQ5LCJappLT7ZTeW9BfqZgjGqXmq",
  "key20": "3Mgr4JuXc1uXwoJNteKFooMN1bXwokBAw4NHdh6PNntkdocjRYSjWfwA3AUuq7kVip2GpSDSa1U5ZFRopkYgNQuS",
  "key21": "4PnqXo3MtpLANMmcsFkcjnd22NdLbDByeQs2pceN8LM64UWyWc3YJd7jpSZFExVeMHe8zEytdnMNjcvDAaEwo4a8",
  "key22": "3EC2DsyjnFf34J1CcV1tpM5h4bbyBZC48RAMjKPsRXLhh1Zi7e4dypweDDbFZwmdfJTf7Kqh98m3UJ3ymPkHibnV",
  "key23": "ByGFWm44cXhDShYvDJdJxPeVz55WwXDPe7GQXKw9GWAHiqp7DdB47kF9vpWDSKjiyzwJBowSfwiy6qyftRFYoDS",
  "key24": "2CppSd989NvZ64ptj59e83z67doPDtJVbmzgwypLt4SjbWrKGfJenFP74WbRr2KwALwgnu7uC9fZVMub7HsMZzNS",
  "key25": "3FkXayZh2YA24tq9fymMRJQWbyTA7HugVCYetw7ALLcrCGY7t53smsenuUSsrZghWMGQv7DX1NuMZgKRKKFRBa2m",
  "key26": "22hpWdNws3RF2DueUiRqkKzTaivvSjmGAudmWAXd2qY2ZQm7gQCv6ooyDnFaoZkei57KPDNSWmMy4UqyLExcfoPm",
  "key27": "4pjJjge6X4Y1EKw8SMMntELfc4w6ACcQQtbDGAUEkYPs3sjgum9NQ5Ldr9P1m6QULV3N3vcxApUPW1PyknAMENFL",
  "key28": "4AEJc76RT69mBmd8vY8K4zwnKGURzvKKvf4aKDuDEvmBLsHykzRX6TMb79Y7vA66ygPSvdZHArAurmr76119eono",
  "key29": "4jynZrmu28nbyBsy9DDoJdFyTETuLXgE6GV9zt7Qcq9Jv8g4vXjxuQBUWZEw5UXBrmL3xffmPSGKVdbMQ9C6Yu2",
  "key30": "3N2puF5CMPSmLEsivYEANaWoGophTz7xyxxJfpPCU7hETygK4h1df95cku4mDKNiCZWR3aNosuGFDNdXdRwdwM7V",
  "key31": "2BcK4qQvEaZwBsm29fmNZkTnSDyPZGjmPQVKTBVns2aNJ4Rsu6v378LdzPGVsqkR9weuSrpTQmc4FqfVaAZaF96E",
  "key32": "4za49uEn921dEwLcciYfhn2jJTSUFWAEGaLpE3fYfPmREcLxSEirTNSmpZ8uPBkEz4YjzQdisQ4XuGkBZA4WE5kz",
  "key33": "3s2R6hpNtkBoMyF4enX7dHjBfdMQNXmfNpK4kyBECEhJf5rTRf5jTCrvzDSo7AYrjZ1ten6vC7L6NtVQkRycQVLL",
  "key34": "598za5rF81Qfz7nnLgPEQqSA9VPAiK6BRgN6WwHMs3BYc8SpZAac8M2TtMF6sdRgxyGti1wqZnxNJLGXnF5hSdgN",
  "key35": "4s5oLxmZNfoQTeYNGLsxqzDkdsq8dqrPsm5vgPmLJTjYcettATRSvkN4wYwfqniqAJHu5XcQmDexXrqGkugzgxHN",
  "key36": "5pUBeZgu5qZ9QeEECrVKKBS6Com1YckDtWDrok9wf43U1fYKfgGkLxuxNgrbRLrF2F2qcKfFyFp2FQiKJb3Je2sW",
  "key37": "48uEuGehUviBWg311rfe28bAFoAdnMrRvWhff8SF7FDH8Wh5CJ4Do12HYLyY6Kmwmyfni7d4R8TV2pnu7mynQBN4",
  "key38": "UR74KNCxycLNxRm6V6nsUc2wDgENYjN8KehL3h7d4ZSbjZrPcTHD91EdUrjkTVqKWdEbkY3G6npM9ScnzhgBdfG",
  "key39": "4x7HjJhc7CLw4d35dCF1KCF5D8HG97tMBUW2XGc56PRRJQeKocR16c1cjsyJpEELvZD7aWwF4AW7vVBw7GVKms84"
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
