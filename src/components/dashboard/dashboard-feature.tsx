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
    "6LXvTwbq2CBQciD3jh2CFFYcxi4MbcAfJ4xDhzYe75hygBh3NdzgNZpJNfaDA58cvWSarvgRzbq5T5c4xJ3rwxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnSqEic4NcWnfMV9dHHn5XLoRwT2N9Sii6775M4BmVRPos2zRDr4prKH69WpLjrCwNqHwb9eAgY6JmC9SDn2DeN",
  "key1": "mHVCfRcHgrTxjyhqgnsLbcb9bo6Si4QbRWuMUGReL6aZR13LBXMj5si1CfoGrc6vVQk1RGdGYrghRUSMnKBs8Ht",
  "key2": "2TAwMRarmcW4WBkF3QSsUBc3YeFZAxZxqFL4qANWkgkgTSnMfn8EFf6MbvRKryP8PApEhtJJJDCPXBGQUtXS8RU8",
  "key3": "3UbwLky7UiBHGf1tGjK9JHg9fKBAc5CzYKciG4axYL8cTiVWx6BXckhR4j56P85hdqFMegzSjhSL2K29TJLRnAp9",
  "key4": "2eicworTgPAPuRLyWbLSpQCbn5ryim18HcXbLDqbR8YmTRYdG46mAG2tR9KPsx96FgCkL8Gjbq5JiLMx8Ry8m9zd",
  "key5": "5fyDevYLxaVGMVNz6XTHxiNLxHLeF7BwxmQ7HyJoB86BL7Q8sJ6P1NvZK9Rp3UA6iDbuZCYHgSxUQEQn2NtYHvvL",
  "key6": "3x4BADfQAqiVt2BLJ2rLhgsgFGjQU14o9iR1MrjhCi6AtfyyLE1Pw9xsYJUmnHR8WVg6DFPHFrGcnWCfkoeEYyiN",
  "key7": "2cKbRJbv4oopieyZoj3wfg6oZbCxfcnfuW6D9ftAALZLvuYx79XdvmPQneWLsZyaD9YB9PPv1rjFhdBdksK4c46M",
  "key8": "2JDGoaNaWntfbSx1Vg3gWVknk1K8Vaikd66CbadFk1SXoJmToRvKjuYcNTVdrrC1PkvRzZZEiCwgdYQWZeNzLyZG",
  "key9": "h5Bsyq4b1kAvCv28MR1N33PLjtm3kWcGuQirRNFuuX6NRd3qN2gZhNPSmAehitZG8bcWytsTqSttxXpGahp9bVo",
  "key10": "LrXZcTH2EYdq4WWrqzBTKEp8hjZWj8QVfwS5frJkJa5nmsJRdGAjNPwiNh23mcRqcW8QRDMPQMoWjTosPJTEQT2",
  "key11": "4nrui78hw6dSDZzJYoAgAxnMeUmiBqf3fCmfU2XqeapddUUrp1ZNWL977RSrJtL2gHfG1FTRgNqoc1fRYdgpFD3E",
  "key12": "5B9sYmaBYJPTgQ4z7WxXsb8CgzCLrRCaFwdQ2Qf8E3fJLErPFbFBvLfH7yS2yPCqCEjBi7LNo4uUo1gwKMU15v4f",
  "key13": "635QASLSQ38hTMcbd8ieJZZnY4Kr2yUiYTsBo2AoGDfEJUk1fQSoecsyApWy87316RWCVNKynuDNcjsJD3H9n2zR",
  "key14": "3F2gbbXSmoA83n2nvkpc27WtHmJgBgv9TnTkRHuRodJ3S592bYTQwDsWYK3uNQpzpmSCMFFroFdL5DeJ5ugXH63F",
  "key15": "zzbbZcM12zDp5rUGEzBhi5ygnz8yHojBHAZWDh5ThnFosR2a7k4N39afvwKhd8JLLcqgmHCSgTZ2r4fQgZxtyvB",
  "key16": "4vozT6gpcRWpNFQ9dczrbzoaTDm17gepLPjpvehEvJUWqAwxrSrRmUTqXQ9bAKPYUgcKGw8LvKkQRY2vwe2FmX2U",
  "key17": "4YEN9K4EXKbzr2rpZ2dc1sXy4iqZ43foneYue8yNCVMy6QqXWf2NPvwcpfYGQbQwC9LqxHXrq3z55gy3kXzZ3KCH",
  "key18": "4WGdLyipLSdxLqcyGwEG68Zf1xFyLXPUSh4zvjhcjRVvk19VJbjFmvM6iZzR5KXzm8rPD35gwrdDKepRj8isUEpG",
  "key19": "46Rv15An5aDzgnCCvLvGmZp4hF2HLA2T5jfMjq4D3Cq8rtGsy7egSXnuixcAda7yDNbLr3uhckNpgMXKB3pKBdXh",
  "key20": "5hJv83aGynU6FqmVsCQFMeov3YCnKpXRMceNYx7Rd8Ssc4UH5PTJRFbgwthR5SfnFUb2xc7hbVsMunxgwjS8MG77",
  "key21": "5MZgwJhK7k9LgEgiTiAPztvbii5cdsUKr2YzS7m4ZK1wQ8BDtj9kS7r46nPnLqTjfNbGKqyXzzuVjMm98w5RYimZ",
  "key22": "5h2iRoi44sJpRcngnjxMZuGPKRbMb8ZxRe1bHC6ThRJHkTpfv5QBsW8RFnftWAMtnQFpXSLraPMhTP1QiXz2KXfM",
  "key23": "2EZL7g9H2cXKZGnuBjyWLZHPdVmRLooyN2rjR5BuL2N5jBEjE823sPwBovn4BgdGCznw7o7PL2tpmBbf3pNeqMVk",
  "key24": "o9c6zHKS9EmgWZPAFCVzz1tWQiwRRCJGGygfycvTvxETokmhXPpSxzNXsRmQpJYKm74HPQSE2iPNZqBrqZys26L",
  "key25": "52TyCCv4m5KtaqpmM32pb2Ghegp7SaPwhDdx4cRpYySC3nnYfQrcc6s1mW2TvLEKKpJfK5Q98h5KtPEHufHCZ1Eo",
  "key26": "5eEpasHtWdh2yJHKXhHgDS3GLj76bRBAaFBe4bszRYZW2deG1xJZ18jrs6ZnpjF4DRKdfbuEWugvJ5tkR6eco8U4",
  "key27": "2BaB6SdkLkwCwgk6pzHZZnyx2L5njVLLGY1UKvgDmRrpbWWeQnk7NV72XXHfR8Rt8o8sBmPhzadfMXjrLY9goKQ",
  "key28": "qC9pusVfHE2xf8KEvb9Pnh5yTkaTHD9ftEfckp9w7khvMbwGKRBKW5jUjFzyNbqA4XbWjqsoSgHHcJdHG89pMFb",
  "key29": "2Rhtsrs2Q5DyNFcEwLmj49KE34DjAcaaa9sAfvCHTZH62fzp64jhTm8M8d29DXEMWLGaVJytQB9zaMWnZnsb9Ufo",
  "key30": "2sDwzUsJRZuuseBfASZVt3GDwrNNS9tyUxsT4HwFdTRKVKKuNLssRkoiyfA1FPbddTDCxH1sraGk5bp3y9yHUafV",
  "key31": "2q3pfxezrsn4APa5XMgmRoBc2Y6dkUNwQDCs3xCqwV2TdUYMhoekUjDaxr6pM4oCAYPL69AP5sNqqiQ3jJ1cgMED",
  "key32": "Nh2JSbBjwQQsTypyvVietJyhnpHJfCB2x1W2WkjyGLf39GNWaeoUgJASq7fB29DeSt1Dbmg4gDCUgmVtxWKnVFQ",
  "key33": "5A161Fisd23XDR7enNmBXeptu3nmxKuudSBgCkKK3Tmrxm3VeHRvDqpddvXSH49uR1JYvSe89S3VaMm6FHt6Hnd8",
  "key34": "5WVpdrzM7JWyDdWbbw3LvFFQWAyZuTvJk4JoK4iRubnSwFDJMt5LEdPAyApxMBq1HL5bjJQ15WtRxv8tBBrnbhXo",
  "key35": "2hKhrRJesDHwLan6MqaCw2tYxcmB3d4DgDEVyaYeUtPtgnQcrxoPyfnfww1Psnuxkjjh4KRFpHnLSkHPzu3owTqF",
  "key36": "5j11F772sbitUo8pYpoj2rBzJm6GHwq15gUMk5YgfT4yPUW6UtPrjeqvvFkBB7C5GARraqnzk6CJUDH3uuyP2YXy",
  "key37": "3ddN6jC6TVu4BtM6d46YTiFtX9ZP7SxSNHSGQbJyS7Y63Du1MXtHBwjXqZEX41MosdNnnB6SkcQW5AynMvgp6v9g",
  "key38": "5n7U6Xs3e2R5XcAzYs39hVb7zb3eqYNK831bgZmBaExbKaDc6zSpmu6nLV9Pjd93xsFCGGSMRzTEoapAZMU1XBKe",
  "key39": "4twURipnvR6VPCTa8ZbTYs2SXEgNnMJbj5ML9HT5Fwi3LPKXTkGYeQZEWKBPJbkWtM7B8ZN19VFcoQJ9NLouNtG9",
  "key40": "2NaqxWxYumBJqkNsNXiV2DJqcBDD9MmVMDMktL9sjUfDM8tRRCXv4u7Dbi2Vejc4rsJqBBmuQKeDDLxuSQ1GxnNh",
  "key41": "4MtQFv6LdVgdBxBUyijDCn2v3VtyUaZ6UuH95HcjYY29qGXQ8qHx1n4qPJmx9947Zz3qCFzbK8gM7tDKGo2r1tAG",
  "key42": "2q23RiJgye5F77kfazN9LUb61hK6VHbh7JdgLgqRRT9nwhNznaDPBCEbvAxU4gohzwrMHnkBuqDZAYG7GDQy2jZV",
  "key43": "2u9CozzDn14FTp4BZZsVZMe7ng9Sb3us9zkCKE4d7r5CVR3waJVqXNtxDZ1xUhfHBWkdMhB4nFWriLNv1Q5wKtMr"
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
