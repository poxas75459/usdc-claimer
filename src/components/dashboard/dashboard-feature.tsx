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
    "ykoBmjF8VuQ4QnNi1uzd1WNw9mq9VEaegMfEqanUh3JCuCUP4tWhmSzxP24H6ZF6ceMi9oDfxmty7Gd22LUeK5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tXJKw2xciJEgQnTSzkXuTVkRsddTTz1ys9vmbyg9TY4Dz3Q3bmY9pRXNQ9LgJ1vuFCe3CvTsgMQiMLZebGg7cVw",
  "key1": "4pRvbe3Go3FjUzmJrDW3rb45qR69wtCwwye6N8bp9xeYBrFPm5J7EixgMif9RhYZzU2yTehjwfjeRnne8cWzq1E4",
  "key2": "5Kap4wsfNysEjvgAieTUd62BexW1at3eUmYPks96sBKWTxDvfJq6ARbxjcDm8PkGc5Mk91ZE6HVYcu748WNPrY2F",
  "key3": "3dXucP72poXBucs4wvHkCLjvmZ2tVzuWNRFzAeT6sC2G8UrZwvgAAgevwkmnDRcfh9rCV4FgMJSTFtS8u8if94C2",
  "key4": "4rcaY7SJxec6Me2pvre1uwFxSiCEJZQnqUaS4rPrGe7gaU5wFdNRN6E652DTnCP52XHcGCkZJNos7uc5vvpVi3cP",
  "key5": "2J9PH4iD4kVVL2cDN4xTeuBpRmz7srqmqXRqmTkHdMonKF1V9JuBiv8Tq9SkFiRjKjJKSxGdM29mjwK38GKiv3P7",
  "key6": "LFCjBQLcmu46zAVYxEnJ3AVMcYpwc1U6q9y69ZjARwQXm4cNB5AosXnU58uoYVvub8NpSsy32oP9mUacx3PsacE",
  "key7": "5qQ9R8FPJKVPifZSRsPLYt6ttpo8Fw5BGpiDXLCfzLJV5wpWd8yAVAC9omjFeDTmENyeGDtpY35pa9otDzg8Dei2",
  "key8": "3ctWAqygGq1gjzzRwnDrsEW5tJyKWgnNdrTKKjYJytUJvciBqSgucc26eZtLTdVJd2mSHre9qvAtx5QKq1tmnuHz",
  "key9": "8fnANPzborqUQrv4Tpn7CFwtUgBQRigwoAxpS4zXXAdfE7H8YESikj62C2T2tiD8HDeEYTvfirMumt3oyADawhU",
  "key10": "4HMziDLLdFowtKH8UXeuSgdAsWqshaFQLrBa34FNXhKw5ZmkxDo5MrEQpfbBrKC6waYNQVZUhda2NV5UQEkH5UNX",
  "key11": "42iFXQCAbBVmwatQFPGb1hJVdheLVQ4FWwML4aAPechZwMZ37YpvbxFV2W9NDfkGP6WAYKoNB7negYW3fgNpkRAa",
  "key12": "3Fm62dvcgMV67ZusSf87JgQvj3pYL8AXXmEprYsQBfnPtiL3q8Coa9hJagBzuCfYuEESLF6kbGRF1yDaWyCeuCed",
  "key13": "663whfVGYyG2AcBesG5AdDjCvESQDD7ASgA1vScU76WFWnbhmzqGKCES57hpjoeJR4g9pYNUKqbfRWdkFUtxsSfa",
  "key14": "cULKweLVWm1xu18iC7hp1vN3XypxVeThJUJjS1u9zvufAhLXsJSDYv9SgFZX5tPUxmorguqXdGJnVV2rGnwiABu",
  "key15": "w6DbAJ2sh8okn5ksgptstUBM8Z8jNt7FZXwcEuyDMKLzU3CsdDLTunqH3irZfmYuYCSbfxvW9gzee5UcrNDmMDU",
  "key16": "5auNjPVS8eJRDrRnBb7LAFCkUHgKCSpQQXRoWT9TdXUiVRMBuuiRv1D53GXHSHn52qauHwz5tWMaA5V8dAm3cCnu",
  "key17": "2JvVgWBCRqHMYuGPNCDxbtGhSiGqHfmCpHHqvrzWURcsHVYNZJxHDEoMuyJ45ZQgqQxMEc9pXE1PggQgvaZrMgwd",
  "key18": "3FBJQsXaRv7iw6z8UUTzVaV3baTNdGuQh9uEzQMwSPAVUdQNFCWQUWpNisEnPBoUe7MsCzQ2vMSXP9ox1RkUM2oT",
  "key19": "2b2LQF7xp5e2HT4rjgj3JVpKfk61N9UFxrJGS1sg5p4EFvtyzJZMFr4bK1wQHZeFbxjJtW4hPy6j4HLZcy4dTNMf",
  "key20": "5ERHCjzxvA7dPKXjHVoYBFo9nDknSVtez3akCDQxZnvq8mHR5NiPX7mzoxekXsAd5pLPZqK9Gc92WSPSEPjpqbMQ",
  "key21": "5bhQH9HNZJ9NjrVs4k2LVj2AJtPyE1tpZEw23GDcnfn7B8cCwtkoWa5XGA4Z1wUaR1nuPVVGGhJJydWrwHyy7d37",
  "key22": "63k34767x2ern1MudrB1FvnErt2hEsGENCi5LHwhPptYBw2gcJiaEMmLPM5YSyBAFSkY47vf3sE8Kw9C4X6a1m6d",
  "key23": "2DjsZ1QvezqyBaLZyaL21cQSYVFLuVSRMWurWHJmrfUNqvp8QqCccj18wyQGPXTsf5ByeecfJsfDzdpEQM9bpLpS",
  "key24": "32PVLGMjgJd2yMSqPUf2AWoqvVwxhwyodKSvS3cda3AkYbTVUtAPS8n9S2mJu9wLZF2UDK5LCESFF8BfYY3Xk1XU",
  "key25": "4FYNphsGb2HcR4x6fEx5ZvmjTVo63XD5XTbVSHRzNfUVcqBuJhrHcT85nUy1Bo6eAtjev1tcnCYMNnoiTR6N5fEj",
  "key26": "3pxugFwNpQKPX9h3ege7EFGBripLfVNcqSZvdS2v4M6nQ9RBpxkMf4WDwFpe4EjhMN4mNRUTwkDZPcnKd6Lf6LG4",
  "key27": "eN267SKM3oYxMVCkX5uTkda5R5hnGVN1ayWijUzhbWNHAprCHs8M59NduewriJjKJiCePn29qm1ZL5XaSbFzjEP",
  "key28": "3sgH7cTxt2fKHhikLjW7Hm38heEocCgh4wx9gQ1RoShwKviepUPHNBYFCTkdV63PajP5sBXAwV3y4jFx2GMCCuwv",
  "key29": "58aCHwndfjUZnvoHVX4rg7z3v2d8ihuuhZM7HJnbY18wzFMBHEpgm9QmuYnrZ29a6P1qTitDfwXjvvtN5THYgmGc",
  "key30": "4NpcbE9ErAQ26PrNet7b2jroDmjw95kKBNgZnUHPacHGsNSZGXHre2oHUSDE3WZui1T7PWgvTXtPVBNEhrndC5JT",
  "key31": "pBP7YBBmDNJUT8ZTpQ9N91dk656pktkhQp3w16ncjxDxvxRN7Hcfse1J5uUMnqwUj3Bdxytk1bqe9SV9TUi3AQN",
  "key32": "x7rSpbKagb5ooAcrpdinddkzU1TmZUEsePubCn4LXHHJ5NVcUcyPkuwMgAeZmhWZUyTu5PrBWmkr2xPrKyRFcPy",
  "key33": "4rAm2VKK6x8DGcprURJM9xA3vvvubY8CMzKGmD4B5AefwoyHjQaREDfrY6Zpy75sNvrzXvRXSLtfcjkLH4TpDia1",
  "key34": "5iwBGYBJzNpFufGnvducT6eDCJjwWMbbqfiMw9P7jietr1ZDMCLEAyjBgdrhXyzGCTsUV3uufSLsVHtdksP7di57",
  "key35": "3h15Bs8A9HTYGy3dT9bNvhnemx5d1e4zyHkz1LXLiEj9AnNdXFU6LhtocLKN11SmsKb43nuxMX6Wp3CkMDf73abY",
  "key36": "3vybBW4hP6ickthV2eeGQosRMTS61NvvwWiPRrkHCq2K8B3JmrdEHED5oR58MfsQYT2oNZsosXTF4u2euYFvFna7",
  "key37": "3kg9oRmf1NaNWjJdDsBQHe84Ym8AkFoATdrXecg8qXzuqGY3J8z7bE9TMdCQKWDu7h1VZ6jJMHxc6m85zbkfDtQr",
  "key38": "4BXXA6CSXpeFFQDXWeggFqahvfvhPMNcfbXrYveieCxds5zyAUDC3rQ7RJTdSEAgJfsshbrS6ni9Aib6irUCPNBH",
  "key39": "4hVYrpTTVrnZMCNYNTDWJZYk58bdkrkMe2jN5uE4R1j7mo7Pn9SddZWKzwQWjg3FDBsVEgsm4U8MZBhmtk5Zb9sR",
  "key40": "3Cr3tWKfsG8DJnYVvAaTuvGCHTJ6CMyBuWmz9YXMhNcCeNsUUXjz7vNf4CjxcHbNXL5uJWA2aDW5yxeXVowMgkZe",
  "key41": "tHZCJH6qYUUysJBXMeYS62jahhWrj8dWqAsGTa4dBfJ2mynYhk64N84wcGW2Jj7SsKeL54ywy2D9N8n8bCER3VY",
  "key42": "5sYB3eP4Cudn29Da9tJWjpd7EhtUof6FQ6owxmd9XfoXiRghr7JKLxb4eoSPXftB4GL8xBi3VUuUPpeWbD2ALkH7"
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
