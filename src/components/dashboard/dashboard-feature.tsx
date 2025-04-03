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
    "4AwTUxQRP4MyCQX4Pkhqh9xeCtRX8SzWNKhvPdmEZr2TykdgYcJveGy6VxcbfLVTSnyvonRKpsjopbT45sGY9eVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44h5WkSeJJNHvZ9Njx36yXgcaTZM1DaEDFx7P5LkhQAcj57TaYXEVa3wzBantAMQjoDpfARN2rwzr9yTQS4GzpSH",
  "key1": "2ubst2aa6SGdnD4GjnciEpsf6iH3b6X36xBxyETrnNL7CTN1XLSbXA9XevEG5BraMswj6bQSeE1hn8b33ot59A4C",
  "key2": "FW64qYXDZYyVwwqyEBGuC6N3QMV25MdZFQ4EjbNQbJmmY7WTfZebC4wkGpbeTKMu2Zou8WtHvA7gz2GDFdUGTCf",
  "key3": "3a1d2DPmcMLbRStuhmDJh45pcMymqvb9b754CTRS2D99t1DKnqijWN1cAm7CTjT8ArqAgSjTDgy2APiMx4QWLjRP",
  "key4": "2Jss7dEeeStREPZ9AS6MmZbh4C9RvUhVQzNGFkvTvrKzYpdLpiDFqu7BMEJpfLGWmqEktP8CzVMdGAi2WcYjDPa6",
  "key5": "3GyWzNz1bxkshrBsG7UJd1A11kx71CAykZLUAb3eZF1YAgTb5jeGvH3BXYSe9Tok7NKmNaPdAqJ3ojBCKwtBCfBV",
  "key6": "4XBSyQkfuRoZCo6zqEfcenohHgEvUMjfZLuCN4jWKPN4w7Hu1qHecCQSeo1fx99AEixNSBWHoJafFk6bmdSmS5bD",
  "key7": "2DKgZyiqu4fZoLRQz2onmQHZpM11Mve11vmQJUy2L44EcJ1i51FbinueKZxSgupp4wgu8nNNh3VCTLSL12s7yAGN",
  "key8": "3Qjcy1iiY6RUdJ6PstyDn3fjEmxoe4JaRf38GynuMJW28AzTmdT8DWowgV7krFnqCRw63D1KGJY5URWKsD2hpv7h",
  "key9": "3xvTicKQwxfwVYug2NSFzXNzQMM2yAnmFaCYLQHNXcRG4EkPqDTCPTxAq5qzSnKeE2pfQKVqDWW2pc8foUVva5fC",
  "key10": "5ZvLSkg52SPdzPkXMeorUm2ruosd8Q2f5DCWUM8yE1eBS4MZNzd1aMLfuZRnqSZAMtW2mYKMxmG6VmtQcsKMyBiZ",
  "key11": "2WfPTgXtWfsHxNcX7CHu8V28WXeEUk97wDXUU7Qmboj4FsapbZKFaMfYmmBHJMzbMqNTWsoRXafUVKFQnXMR748a",
  "key12": "4kXL8sJF56SZVbqQhWe4MSrUVpkNSZucBS443m6mLtX1R1LXNfsgMwgbFa4V1HisjWz9Z3pn2XEeVTt6A3MWYKQ8",
  "key13": "whu7cQ1LSHZ8GvySQJfRfXhswp8CPNW7u17KLCQCrdRmAAeu6d6VThGRbvA24W7ShWEvnzCS9X8PvefSsCFSnGW",
  "key14": "2vcTmwpjGtXs926tQtUAEotWnNyjtRxihoYP6oyTmtFi2147bfAsmuvD46pNkxAUd1atYL1hp7VkU637YVru8nUK",
  "key15": "51uh7DPkVaHK1pbpWtGWsXLHF5XCakdxCkup2LZBLv37bhwnY8n8JL76S2Q7Hyd1m9Uw7yAgHJ9fkgBGjPmp4kGB",
  "key16": "H5Rk4XA6fC2D8bEhVUBCg7vrbxC7w9NBjoLsu23bNCbscZ27f6Xp6BxjKCEucHU6c7yG5zcmUYPMkvq2vimi38K",
  "key17": "f7BAauCyEHjXXgmbrwpTkUpRctu4GAX5dCngSQpDMVJk3h3YcrG1Am8b8dKzv9TVjPoQrqrzqZwPtWywP6Sv4Qf",
  "key18": "4RYfsbnTgqfkEzLaP6BzusaKXKqCoJ6jwH8yvy3RiEHrBYsrk7JJx522xr4NjwHmcNqt9vRREcjBVwYak165d5TF",
  "key19": "4Fc5KL7JKpxrjV2tuhukMsc2rZjMeHWinUmax8XnojdoL76YLoGi73WtyUWymQRWzscSorDDBFkfnT5NyD3EZCZ2",
  "key20": "3MoUMjLFsmxbd9E4EQ2sZCjnQycpj5gje1RKtXEbeeawfL5n8Ss89CsTHy81Vxya4opEK7PUbs1ezVckGrnGwh5B",
  "key21": "3kXtduFVWRWbhsxsEjwRviXHQSAAoXQgqNaASUGxkFTWzQStxs1YUnqmNEhUJQ6oKEH1WrnTAENWHXSqhjNpk8c2",
  "key22": "4ZmATp2S7h7EcU3wpYe3tuvRzWHbzHzhpCFSYjqpJe4rFT77mukMLp1smSWsU3W2rSRf21ZGjciZhRsKyvYeBtx5",
  "key23": "2U4bt553ihK65HmTnAMe4DShcpC7fqU6vUEDpVMWfeFXmRF7SxeSubrr5vPLw9pSt6T25geWbraDw3rM22eSExbG",
  "key24": "3ePYKPCEPc1YaeJthu43Tu5LHhTmXz919ytu3JrpXBos3kBwiNsircD3Ge97xP98rs6aYZDCCotPfxmS9qeFCUwk",
  "key25": "4DeVtohb4rfJgFuEZCZFGXi8mLiozQALRcXdf8fCKC5P73axV9BUgxi6GTyTZB4G7tMhFfcBjbJ7L9ePW7GSFNmw",
  "key26": "4uGUhgMpYYyeVicMnBArM8nVCXZXLp42ros2oFmMLd3rBE8tzpEHexEoMSMh5ZrM6gGvScqoENva5cjhXtEf5hLG",
  "key27": "zi6unxu3ai1PjqEyt7Xo7ZLfySgwkYq4LA87rQYne8qpkXhdEzHbFoXbcm5ZwQWQvb7DPJpUvYCdYwFTzoXTvYT",
  "key28": "vdeVmSrsTUFU8vSp87iq2Zgg1UjGr57reju7e4e69W692WyqhQ8kCYZmADYB4hoqnLtch8kaQohKyEm3oFCVVB3",
  "key29": "3Qfd14kTs2z49nhwDqpsVnufDCNvGtST7ZMYSY2nqB6gQgaqQyrbVNmQYT3m4dmc1sDqgNjzgyGVrmhHgJo6UPZx",
  "key30": "3nd1Mdq1jbxvYngYMBchpF3omb4q1Ptdw6e8vJR2awgF19dfSf4FqaGkpXSNEqfQJ5FayQJcshaWPZeWmL8o2LPF",
  "key31": "5KNPfWNZLZs72N33nFHvCTtZWTJsZrUQr9sUG5ZX9CcrhEgmW6A8Uqoq2e1RFtpVsSRZoZ3MVkuAgpPfCAnhRYd3",
  "key32": "23CsyYyvBLfvahpuhfLE5SZZEYYQZNyusrkZEHZBWJ9T4X57pYR3aVHKiKyqzKtUGAmXMfwBMCL2MtuTPRfy599c",
  "key33": "3yxLoRZnn3DMHe5LhoKLi6GWWrHrfD46gGdX7vAn3BWWPyDseChFCb99au4coqKU4aS6BNPMsXAneRHZPYcJCbWi",
  "key34": "5CpCieMxmiNHiNv2j4PikoFFvaBvHTHTiZMQEt2rKRXrQXfmp6BGjCj7uJRHQHmMPYMb8Bujhw1HhcxK6Yv14BiD",
  "key35": "5PYb9t6qveJ4i7ay9mKGcBVW9P5r6aNwg9JJPKZCgnpUboknNCSGGKHUQ5LGVtY3yqTEWGZVSg3iQZUWx4mKgdoS",
  "key36": "BMRcZs4uyX9v3TGeJuxAcbk9Q6MpKfJ1U1Y5S6AiB9ktkpEqpoorVepGhC1ADdJz6jnwUdSqwJn66cM5x9kY5rp",
  "key37": "2DuyPdpWYj2TbPh6KuqCuy3Uibi97sBkdFw4tzcK5i9nGxb5QFhnKxNMRTAiXQf4AhK7bdHiT5KGSPD488e5KMsV",
  "key38": "29VWCTqSQ9mFFh5TtMo3ywSupBfMYCaXTqWVZePTx4aSLzMa6wa89pHGxmqi5q2zDAQxL3v5pHnTHAHiBS5npxVh",
  "key39": "3Xyg6sASLBQkPpYQ4bDvEqP3oxgkTXrzYjTgBKXnaPxE7qwBotmFAQCHAhE9WGig74vUhmxtMAceHEerwLEeC5bs",
  "key40": "2oge7us6b9SBJH6ZhCbfLVeAmXgJExsxnzpvTBRMaVoh8b59ppaCzdrWxLFwVnGQ6ohUxXedLrU8Xqn56pFEbYCM",
  "key41": "WbJT2GD7a5nDPry1a3bW39o1o3KYhEeGi7BnFWcZFBPUj2MjnSNKQ5QTeaYdbA3ZV5ktKAyG6gLVzJoqvXboCte",
  "key42": "W9iutLCPvWPzAxDH2xzHnnZ2zKxixpUch9iDrwDFXm8fcSdm9QeYQ5vfRTjzEJ8BNrjs7EW3NM4X3oYF9r7HztN",
  "key43": "QnxogaYojrgx3aeqgW9fed8uJdRtHUk7bxm4kBHCumKG1GVELJeE9wqFNvNtxEP1bc8TquQQmvxMkmLVXZi2XUE",
  "key44": "5KtLk2deS4b7U8C3DzxC4Jx67Gxzakb4Ac58jwRRbSP7uZqj6rKKtvunJoAv4ztSjb2Fvwx5nRn5MB5KukonyVe9",
  "key45": "5NpriM2weY4byDpFrum5bkLnXnXeBRipYMqohGvSGVL8Bab1baTtTHxnZ9xU4DNpPfsQ8vniigyrAJdGGpFerAc7",
  "key46": "tkqhXt1ggoAaD68w1sdfQSCNvpRJjcFmgCfVZYQwg1Vk1ZTcXwsa7bQQnmAfPqrvu9sLqLC5XgGXWYUcm23fi82",
  "key47": "N2H518Ha9Bq67TuLN1ZaP1smuo1ukg7uwBaX3PrTZSGHW4Sm7kX1WPvwYfYPQP912UQ7VjevXm9BYe43oMRRpi4",
  "key48": "2LmzuU7ibbWfJusSCGW3VkEri7Gb8EHMtMWwpZWjxm3KFvRVErZMy44ipTk6LE9nGqV2ZXuCPGFxGsNFHpS3Yy82",
  "key49": "2fqrUvgoHcAa577mNVcbmjTkFyzxY8BecEajck1CwhSt3cKzaqVSr7kwQFtXDPH8f8gxXQr779YryknSP2AwjA7E"
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
