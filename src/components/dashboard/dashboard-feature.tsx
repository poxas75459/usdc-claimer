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
    "3rjbkYpx2BHFJ8TXEY2N8noAo1KXmd7nwPXBQJBzZRQV5LyN3sNcCUhaFTbkuUJ3WBVYT6ywpDTBJosnQWTFXc9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tK3DppXwkcSZQ92ZzqtbKJDNKaNFxd5svRdXTkntPE6G72UiQxd8Y9wa1KtxyyyQGpZpemz7HPKh6NqQNWaKbVh",
  "key1": "3r3vMGnm3qtbh5vr2rxUtBLTndehqnYky3rPZ7YhXAyjZkmvqGo3jhboLnFo1Wyc8E2sxsfwa96fa2cJYogfAPfE",
  "key2": "65ma8TUr5iaN8dCEhRzWvmFW6yE9HnQ6znV65zW6siGqX4DxCX7ak8zqjzJMMw5RoVqSXS7jYegbkHvaJ3wfSdy6",
  "key3": "2DmP3HtQxoZJNCyq8i2WMVn5qqbNPiweNDdiTiDyuU5af9f8t3M7dLk42RLjq2YD6emvyp7jA9f35LoV7CtSgipg",
  "key4": "VfXZqQccZNVv7184ieGE2vjv2Y6RnVHUzV9tpTBUsV2LyBeKS53LsQ2PSZByCodeQ123TBBFwZrfhm1ZRHPV1rT",
  "key5": "eT6bwhtFGYn5zjqe2MhpmUm1beDmeNbpqaWnPSzHUd118rb3kD92iXqvRQMigyt3CUy8FAJ6NtXA4MFCD5WqKa5",
  "key6": "4WMsTvzvmPeeY78XiL2dVuEzfwLyw3CRqR3zFPcgK2p7hnC3MbXs1zTYQfEASRzfLWYZT5bmDGG8imyTyjAnB4qW",
  "key7": "3ED3yDDVRy8vz3w1FuEsVp3kYXQeFLDbYbrAbabWDPESzfREvpNLX9i8B7bmWCS6p7XnzUAca538vRU6576eyp7C",
  "key8": "3FV9h1J8BWJ64wZouQzaPCdVe5ik2JKQE8wKN7jkgjZZErTRu6VsBdD7wgwrMr8TwNmUeo4S39V2iHn5CvmieAFx",
  "key9": "61hFjP6ctQuyKvBwnQGgMC5bc6RxQRXVqxMqTy13a2ahdWqe2CfDii9fskuXs2dhjfjmC4wjJULiam5AjftKfqZc",
  "key10": "4L6hSxx3f6nssqhjns4pw59uR3HEtpbvBBC3QPYMUApLMYMnwYBMmjJX4oY3KN7ikA8Doy8eMGtAcNFHT3cbCfGf",
  "key11": "2bMKSpaxxxaMGwYUUHLgHs4rsPE3WYAtco7WDVc9brM5M5MesydC3CYNSxB9zRdNqVMDKFoGc4gB6JPgEPFHqoim",
  "key12": "4fvzF8JAopHmjQTA1aoKnJzdx2UsUFy9SkS2yCAUQvunvQybbrLbYYCDBnhdbTMUCqQW7oWv71Mwe7HSYPVG1eJS",
  "key13": "2SkumiZhJyNN2M4BRc3qURHbFZHWPwZ6NZxU19NwmSd2iHQvWtgq4YPcTaCn369YvNwdMVUzBgqbjkBc7JTvA818",
  "key14": "5diQM6TUMfMPtxcrEd1bbFJ6kLQeDVX8WopaGac9jnbFh12Hj2wWpvkB63i3WL6KXPcVsqbiGWnq6YUPB91paL6M",
  "key15": "3UXNa8zCocyDH7AeJgG4pSKRY4V3pXw173VS3MnJeQG7uuS5QT6JQuuow2rdRbeUbdXG4esJF5P5ti1NQrah3GWa",
  "key16": "2PD7TVyGKKT2zYLkFMfd1TLrEbLtsVFquNRGYsprU7XnqtQYJVuaagRfxQeYTGSYTeBhxCWqSuYGN4pRPHu4k6wi",
  "key17": "2eD2Hmci5mvsdLV7BZ91MtTuPTN18EULBXx5M85Vj7eP6SzdjgNK1gWkMLYxpLTTQN3jXjCHTcnDBoLddwRSddTh",
  "key18": "5mqphnQsgfSPEsk7xrcPragzh2ZMz7eMcuvpVizh2XtDoXsRRztyRzPpzajETyGE7TvJesGiPvnpwsuA5iUF4yjv",
  "key19": "4SBpfxep2j9TeFci1w9pCZFdqkEqorZfGbA1RDmSDpLCP7tEr9SYR8s6q5MxqxDoEj8jZqMpdpGKVSxjueB2Nxbk",
  "key20": "4CPx8ofwvwCn6RJQ8vYoNwwGdH38UvaoVwKEUd89A1R5R5Y4utwsGPyNoX57f6q9XJnGu3UidVbvdAvUKsSd9GKM",
  "key21": "3a8GEfarvL6wtp81B792dqaC9ec8ULQxubW9P181juKhwLoTks5gmj4LSMfceg5VXqHLnVV8u2VD2cUZgEQjAcZ",
  "key22": "2wYoyp2wp1TYeR3oD8EJTj5dM7ebUDpuAKNxG8cabnFUH1G6uJQwBerd8ae177Pg98qo4D71KAUD4BCYhqT78fT2",
  "key23": "5QYauG7pjC7q7UxNSWgCpW7BdJrY1hi6cm4PMQyaGrQn8MsVhvsDjWgfjEjzaeSRJk16h3nGZmXRHBW2Y1eR4RkA",
  "key24": "2uSNkoSAvDUi8shoDvqYt5fYri5baSP3XoepUuiK1xiwK5tgnyoXuoRsGcv7dWKoSuASSVaxQ1NynmvEhxXwbbE5",
  "key25": "5Py6anc3k6YkHjX35HYmwzcjLUFpMRCi8U1viHShigiXTB4AydNvfX76siy4kN9oq5X3mzZoTRv6msnRmbBRqrg6",
  "key26": "5NWKEXoiDBTdoHQEwEVUeoNoemyqgCgw79zL2ToVoiMZsGiEo5c68Wfkn3Zk8V2wtQQau3YVJCqJcMffyZkSbKHJ",
  "key27": "2i9A2tfCNb7XydwKm8kxGG4Akj9TeMFzQFQFzdE2E7XwQt8vWwGiUC9rr7xAA76b7CJtcBSdmofvqW6E3dTYggXr",
  "key28": "58T1FAYuZSq3vH1tiAHnBqqMZ1N8L4bw7XHvG52Z7h26KZWGd4TzbF7rK16mHmREsAZDRUDFfQbGdghaGqSE5ctR",
  "key29": "5Kr6vwmEKBrrEsyVYZ318vcNke9YyroVc3BnKzDCDjVaNdpShuqCYFk21U3GU95ii55V9tWfdiJD8bpEcA5KDLeJ",
  "key30": "4o1GyjrihAByp4uM2x5vjqsfbB9pdtte2qZWvvPmRZJpd4rn2n6HTuCTYMHpm9LWbp7nooJh2tM51MX8AesPBsF7",
  "key31": "3MTNsH7H1SwAUWMzhzcY3nbAEmcXzSXhsiBLG6qch45f1x34YUjWz48hovUuh1iQ5LyJDXWpRF9QdmsfWGfRCxdZ",
  "key32": "4X1AHsYK7Twm5XPbdzfxXCbtzstq1aynzYSvoaMdFRN1RxzxAJ5t4rZcFBtNh85kLSH8m8gaouJ5j91js5J4eEEg",
  "key33": "3hsjRSdeZMvWUHkaU9NQ74Bqdgop2ueE32radraYQQ7k7xVLPT5JNWQvsg961z7pRRXrd6tLgbc7okrr9Fjk7PmG",
  "key34": "R5ECfn9Hh4rD282PfdByU9YgWgTQ1wprKXtBYoWAG99SsD2qFPsHWkcvfnXibUqa3VNqNCsqxmXfisraWcrpWYV",
  "key35": "2K6df3T45p5hgMSooTeRdFtDNrYhDVbvKNY2P11sXeL9Ks36D1FALGfZ8jLR8gw5xEPmpCUurSP6pcq9Fcn9dkwA",
  "key36": "2Lr5515xotUY3fhd1tiqUDEqkSoYTWLwZmcbEaEfrmKoxB5BbJTeeCs3GcnqPkJHD5BZUvQ1bNqarHXCpX7spbVW",
  "key37": "4k3n1MkyBhWDwcsZwqrLbbHtxqQecq5pqxEj7kktxXLP5CCyUc6Xk3zBusR68nVEfCX7k1eHXECqAfE26Jj63pLw",
  "key38": "3K7SyaJkg4mR7ZLTZZeQFwMUH2EL5ojMGo14vQkALkPnbxBv5rxgo7j3oRbYo6w6s79F9ZqMdoQaKdJApU9R2NWY",
  "key39": "4QhSCzzCUfhvKHSLvPQ75qYPAifDB1mhu8XyNCAifd8Rxf5QwQ9FbTQk65f7ZJ92EysSsFQXdRugBLLo5u3FonpQ",
  "key40": "3nbkbuNUkzh132rPAQri6kaLB6QT5kzn8NUf6zmphJUi1fcVaWm5ckvpUr9df4JEXsaA71YxhGRqGfCqbT4FNNmj",
  "key41": "616Um63Gn8di9xHmq2j6vRkxF7DQTCNyA9RgigtzGhcbvNRVn6irLh3GL82eNn2thSQZxTFyH11cZekrHJyLr6FC",
  "key42": "65kiVwAkhhYrZRe8JGQT3kzHpnm8Xq5fcvBtb9JEj4s7DByVoHu1jwprwJaurgpBq3TkpHTRyqRgmkQNePzz3iSu",
  "key43": "4wwRtTPHoC1R6xE6AUkAYe2sFJQJG27B2sYDviZy49yM4dRxaqjiSHjtcAya2Qt34ipqMbftQ1zdMVgffX33qxUT",
  "key44": "4kz1GSFGYFCsKAVSnmogqTnGbZH1jyfiqcEjwveZkH2xmfx2RYMLjqDYNM1pkrCt9x7sd8hZpbdroHYPbpeHpmEk"
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
