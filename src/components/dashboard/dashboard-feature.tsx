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
    "2Dr3Z4cmYDYbFHq4sKdCoBpe5ywJWj8Z8JUKrCwMuycKTsTDVmChVsraSo4ruWmQKQWXmkR6Ddkw6LFa3Ajfo8s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fvvo6TgMspNNUboGHVDkqWULZxAkSKAHc8AcdBS9uHoKSjuaNnHXffFUzwECvJrSnxd74MGuiDajBYFBxmBTJPC",
  "key1": "37dcVjxQbfofrG77N8vdrH4VDJ8bWrNYVhBjrw5i7Q2Bk3v6U9actyXKUwdAEqquiV3h335VG9W1DUZgQVfWXjYD",
  "key2": "oZzb76Vbp99TUWnfitEAb8zhpbN9WJd7JW34wkJFzhvSvdUPgnwBT5BkUbBQJKiPUtH5FoEd4NwngejHUDNisX2",
  "key3": "4GRA4aSMSWrccdj2c946Bg5V9Fwv9ZFJQQ2wcPwWb1XBA11Ks8C19Fwaw9WG6RoLYahaUYNxDVkwaYsFzKZ1ur7r",
  "key4": "2vwYskKDxFT2dqKEpkxrUA4yXwSkzj4RJYhYx1AiYAY8D5yuidVf8HVDyW2L4qpxpLfcmer1Vr1xkCD73aNwrPpB",
  "key5": "3JoM5XKfeVBn76GbFAAZCoimzPcgzJqQRXsqjuwpjrMhxf7YmoZkmhVq7yUATBsP46aiB7F2nCi9R4FAsh2FFFhP",
  "key6": "rjhbGPHDGPNXpipthNuxgC6neTrVj8Mtd5piheydiTe1kf5ATd2qknV2AjFqNFVRTi2hF8sVQfChV5ELkCbKmvC",
  "key7": "5aptU8wabgXAcLtmQauJ5kXCDSwG1GzprRG2fpnxAhJgEAfMFEz5Wd15PrLezqWLmgwowRv2tpc66a78eNVPFh5Z",
  "key8": "4ghdm7u6sqiNMfaXUpGzQucBBD9Wjtptu3MjSo9DVTGhumX7bkof3kfc3SrwwRwUGEbX8D7YPHUupEQQyxfsp7kk",
  "key9": "3Nqju6xja64N2evUxeqEkpaMMDRX8Eo2uzmyM54yUxn4L6hGijsQicfXRHctpWh7mJpnnCBLwHNNJQZUmvatRdcw",
  "key10": "DyuEswhPUQ34EEZ4c84rWrc5p7hT7SaZCwGi2xnnUkgv4jwNL7nZcMQXrLaJKRihv2uyDjdNMqHCthWvRiN7Qbv",
  "key11": "4j3D3rM3TjF3Eggy1fJRx4wABoQC7sQK3q2zTUZ6YvWxT6niD7LjbXipCabr4bnWZVd6KKabquyGv5SvuJnR9Syy",
  "key12": "GoaydvzLBeb9LVb6Mi2ks59oS68J5gbD4Df6xLnkZ7D9UCBRppQUQZrnJCqfLyAua6gFS7cX2S1ZKnq9XeuS6Uo",
  "key13": "4xM9SqhcHTykCtDKDqKz1q5sr1qS7t22PKxD7658rfgXbEDzXPqbQbLqifozNCMr4gLwdQHcrCXu2rwmw4kL7Bzk",
  "key14": "4C2Txfvx3jV2VknzSAJVvmDXzXJgAc4cW3JcNumvUvE7s3hS1jnYevkxfWdtaf9mZLb4vw2uEbeMshF3oLVWoqYX",
  "key15": "vq1EgJbuAHRb8qfxTRJ8dP662y262bDNiAzmkLBcw45FgLPHavumcro93GwnKeyxkowe8UwMio6mFMEo8qgAund",
  "key16": "3dna7jQexSWjmxEyothehAm1m2oYFoC39m5BeNpNTHsnrBq3d8Bhw3cLb7jqZntXeAe5MjaELBoeDyRQ2XiC1LLi",
  "key17": "AVNVnxWyUiQRuV5Ea9hXyjguEiRgrnqtS1koZePCCtFzX2cCEEfJEN4zPZbzQVuUTfqphtpam269CMvTpe9pJoW",
  "key18": "57C1jvwHBZx5sBEPWJ5BH2Sx1dJCfHZuLjPU5mFKPGBkYbsBLCtj9a9L4MBvZGAVFQugQ8d8rY4fLmcnJhzYRXpo",
  "key19": "4wxKo2FsBcDWtcoc87MMtf4C1arBkXPBfwpn16xNRjUa2q4BGTsPEwTLXL7eRtjKdNHUvNoCEdFURMFwD9NWU5bj",
  "key20": "PYAPKoLgn1n9xPxiTPZN55kXo5QjdrbHGXXTcHkWe1Ji2xjqXxzuCatHN8maHDFRz9XKwUJWaba6Zhka83oU1WE",
  "key21": "5ZxwrFS444f2Sr4rKZPYxjUvZi1fyVMx1Ma4y7RGa2Z1NcdDcRiGsNViMf3wTtAzBg6EVP32vvUQDi1HsVCSkJTN",
  "key22": "4sv7HLvdTPkbffztUUvJznQjcKBFoc5XAdteLhFVd6LtGgYMJjQLqFQ2e5RmKKcvLyj6TWyD7mDb5MEL7mk7XKh6",
  "key23": "3FVWZVF9nBDK8vfr7oaPm6wF7ZSbZvQLkTMrVfjRqgAqTrvY7X4SAZxeTonLGQUoUuUKhffLFVf7H6E4TLhV8DD6",
  "key24": "2QVbTMn5z4zx3GEFnqbd1aNj3t1Af27LenFTBg6prEBGfiqQc3geJoZif2diTxQhhScSJ7LZZvGRZXEyzDiHCz4Y",
  "key25": "5CgRg2GkMv4xGbLJTQyYqXePmY7BKRVTPddoQnAMogvZB1qQHnDVEQ3mWyqxFwL2m6wXp4Ls31dRRmcmHj9eN4J8",
  "key26": "5VXhwU2aPmjz7AYTQwBwF39BGXnNVuZDDW3nVuR1kG6ZSX4Z7bbL3zbVZmhKmHKSfyvQBc2ZpAfAQUasHRHkKXN8",
  "key27": "61sxjbTweY3V6g3P5SPtPndkaQmsHvvkqgKqYfvNwEA52kfdvzks1rgGYzwnRpkaibqPypnCZL2XToDprV14yXKe",
  "key28": "59pCz5ucJV247zTUYdYfF6AhA6bTforFYUX22yurYaybps532tDfj7mFyBkLEJyYdvYvK2CpuHSeoJY29pgqVsVz",
  "key29": "2adTpea1x38BFhGNosk1pVtUqobbJgXV6Ciy2foWKTMH5DEYiLNetSbGDi9v8xYPX7vnzqzH9jC5VaThj1hKtTrs",
  "key30": "EWUfNX54fASK2bnQYNyJbd9ahNAQ77EuY8TwpF5iAumtommfbGcVHfA2eUYHAguZvvYbDhyNxs6J5XP3SxfEDCm",
  "key31": "2S5ubma9XZtCq4vz7hLX6kUd7yW5i3exoZ2pXafVaax7tKB1ZqKXFbgur1UCCeeYzmdW6rHFFLTTALGfzXKKCt2t",
  "key32": "4J8MtExiuuMwtVmYFQNWbw6Rm8CqVscAanspcjNFcqD7fna5b1Xah4GXj5TBQf88MpZ5GMCE26XFzFX7ugzxt7R4",
  "key33": "4RsWXw6eq2ZdskBkjMsj5phNqDVNhM9p3QANtLG96vdTe38eVViWUEmTwNPByhd396xXchb3NuZQkP4GqGgAxrg9",
  "key34": "4RDVqxjqAGoVEzDUKvDngz3bxKiMsmhAjCL8Hxko6wVHzL2Ah9EsYfK8yoNLzKqKrqvE1y5EbsDY9GndaBLzqxdK",
  "key35": "5HSoggc2Yfzfea4KgAjMoQsLCQ9A8cg2SkNTEhj8v4MRST7VRuMSGHViEup7thdpS5ZWiCRoFnE1F7kL11KgKoji",
  "key36": "3QBK4Vujb4pmLk9Ehc2rJBbYRXdmT49D4hoMeqx8yyiEnbJtEUeqQMrpA8UdVBzTzpPCZW6aL4mKUTWMbHJdsUb5",
  "key37": "5jZ3vK1CVji6oCoMvDgs5cdMnk1HLSZcqkkLUhsAxaox4CmPfGx9g6897R1HEXKBSopaePmnW7SvMaEya1F6AK6C",
  "key38": "2qTDCeqT9dKZbWovWrsFGCwckR7rooNNejMxFxkzovZfAFXZZt9Xtw2927UGddPHMrP4PVdKnpQVcFdqbSbpuodc",
  "key39": "5nveTdxRyYXxvm2CoT2wxS6MFyfjJ3wL79CZaG5EvPXGozHvSQXAtJArz6g13xtc63EcLxzSVn6k8XkHCPAHbX4J",
  "key40": "3cgs9yqsP65Bq7BcZ9gTRzXjBVfxNKPCiriW4Eb73jjXQL2n2u1jK1bYH1kiQPrZvhvDDq8FTZKAHLtCJR8zcgjM",
  "key41": "34r1LowGRqKNEoNqeutqwoqpbNmhKXDS5ybELDxP8ruBeYu1kNSU8V8wC4BhtS1vKJEVpmmTC1RRuMdxZJvTiv8L",
  "key42": "5osUMEcsfyHW6vh3vxjxWUUGaDeDyuTaTUSDroQ5usoTzEFv88UQ6ggYU3JrKrBmatVYyUofWKuXH2UEcznJmhjG",
  "key43": "4TyZcM7ukq21gHpzgxqco61TPSjiRy8hHiLBFcCuD1G53jQEsB9fxd64dHtw9xGX9Q81DwDM6MohF84P4ipEtQy8",
  "key44": "5NAS7FidxXKErmMDZ3yerbesd5yD4hFB29qYW1HkmeGjAVka5fTCvVGZ9YfmVo4F7ajBb81mgnazL934LAxFoepe"
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
