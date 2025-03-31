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
    "4QBeGK1dU9xiLvCoWz8aunoEi17bkPZmCCRnf4b4zueztfetStYcotLzFkCwEW8Ghbp6nNbxiigcWPefjFgMj7kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mi75SVYpgt1GUSB4MauPBX6DEVgZEVCiQXJfVZtbUANW2DKaoT8r4HkzXezTmbBBLx1g4bfukFigsB71ZRd2tUA",
  "key1": "qKzc7aDzJfsfwYTkVjRxPhzsGsxJzBGhPV613Npousvgi9Hg2PZoEGHgiLuyR2ZgJ6rQ7sP1D91mPgKWFHLF752",
  "key2": "2iJCHivnReTGt6BreDb2nKP1Qz4cExVAVhx34kXvSXY3dY2eotmeZguEhCQdR2xXrzYG3kQ9APK27bkmdS51jpnh",
  "key3": "5KUTBXymvHiyh591DfqSo1oaDLy5J4cz6s74qH6axXKtsUEtVF7mtKnEr3M81CddD5VWyEba64JyvuLr7T5eUnR6",
  "key4": "2vRmwX4xtjq5VTqrN9h2JtkzrPBiC8Y6d131gP21nuKV6vyKLeNRD8KHWnusWoCvutFiWvgaHTcGkjAnmKxCHKki",
  "key5": "eC97rWDUYMAAvPSvwNAdpNFXASKDDrLr9QHR25Q4pZYKh4DpfbEbuQ3uCwVjgy5XKJ9irJcHfpfQy3xG2pYyKw8",
  "key6": "2pJHiMRNkuzMinA9sRGp9SMWyMexHYvVL2wKoLBV1r2eC5iePYM3cUYaGtPxHortb5u6xwFiR8BZmSnSt7cAA7Rb",
  "key7": "49AVm3DXpLPt55HSVWvnSYHdMzcq9PLhpuksdtMLape4eo988sbz8dNGEXzYbwCvcL7kt6H4WSpHJ8ZuzePfe7zW",
  "key8": "SdiNshSaKMpLKWMx67x4KCMg5zfBgdM4WLiNsm9cdstG16i9sLj6j7Rew8xJC9pVnP9VrePfCfZmgj4x92t4Q9k",
  "key9": "iWc1NvX4qybS3erpY1K2L4Cr5KeDK1HGrgysHPPydMexWX9mKX7bVDr5v7SLsngjQCUuHiyzvfuWz59A1euu7dN",
  "key10": "55RfXPrnhMTWJrjixCxK5YDnWPZ6aQzagLoYmmMJtpaHU8xxXCZMhXFeRQX7JwRMwcdS2YgWiZ6AzCMJT99dT4hu",
  "key11": "baAFdFPnPYoGti3FJA4J5VBFNKhhiAtZR56WTFFQam7aaqFuv97ZPeq9oQV6muUKf1AdaC65wdp69Ez5HQD6zKZ",
  "key12": "2hTgSR3bb9QQTAeQL2NqMjDXuBvAxkKeJWAS3ZgErtXbkaMfnJZMHbySjH7kjYLEUYiiuSKNaGHvwDFBj8USzTZ1",
  "key13": "RyeKJgoqkDVFrJpL691PyMbMwK6MYLFYp1DtA4TbUahhs5AsMQcGWYFVvtoeGhtVDES8PABAPq6JhKEm29a3MM8",
  "key14": "2WrhSr3jFjtxsgj7arLnhPHnqpyEjJAFDGddJeCQMBz5AdKi6xPjZiMU3GrZ2YjAJ3VVBegDUStnwb6i67uiFkrX",
  "key15": "udzrr8zZGz83owTtxp2Dht9SXnd5DJEWswRGPTNFk41AdDxeytrZ2YLN8n8uKuEcEjL4JdbnFGan3VWqgKMN6j4",
  "key16": "5az65FUkfsD6MxCdETqa3To7aSkYLAxUzZbWiymB3eCG8m2yPFEXdxsPpsF1eYhBtFsNtiCaxBehswD5QyoLLgdp",
  "key17": "3oCBE2SfAj5dgyRvfE6D4P1n5We47wZqx21QaFhYVqL7nxDFhecqGR1eDGVxaeqEDr7bxZep2ffSKXxxYAS3ZY4f",
  "key18": "3NYjbdqq6BBSw5xr4ke6nq3THEmRZoL7bxygyRYCQJvRL11zcaACuSE8TfWgixUARk3wkyyC2sFMANBnuxKZNrNe",
  "key19": "2YshAXvcLp8CQSLnoXGsRMm5skjWqC5gbxoDbXirAvGeZ5shcpL94qXeRxEcfYRhcWa8VfZ5eBrZowWiAiKtaL4B",
  "key20": "39Jqif3bCyGnRWas83SKj91qfsGgJVbiDjtLPhDtUHkeARw9dbjoqRPkKXvt87ioyYWrDMZVJQztGm1A5kL3FjVS",
  "key21": "3JusjAMB1TcP8bHLnfkgdfC96icHGCJX8LW89ZGHjrws1mzMdPEeyR4Z6616eujkFoUhNJey2DpbjdCTxKYoVf8x",
  "key22": "2yPfDbQXrFvZrtbWGzuHoZNqGCc5tDfivVjinurknf7Bi95DbZLBvTzpyCAuoLAZWy7MGPUAKpToMvWnHaffE792",
  "key23": "zEAYKsTxPvx8pFePaY7jVqCDf2GbPkGHcPU8DYbDNm4gw9fp8uK7FRbuXhbpcRGHqNaQnmp1U4Puo9deA6ZemH4",
  "key24": "4QgHeXiyGfbEb8uSANJFfMR7TqRg4dVbVY8oAqc1TML7TFscxuSD1iX9HYabNsq3W2DXhD1kBGMcRXvBGFhqzTKh",
  "key25": "UER7RUzDP7udmbomdKQVoGdYF72cKYyf66qJhmtLLADqHxfQLd8NEgtPVBtuhex9kcvVXnLeDRYNgZxLnWpCfNK",
  "key26": "TGGBwhrYTBR8RY8x6cvzH9mHXoWHUcageqXRPVfBdubNFRYdF2JZBxHgem8c71TmK4FXueXKqeRqAHGxKbomYho",
  "key27": "oxwyXPd9rMZKC1EsGmszwHPCt6y19nrtvKnTRCurkgnk34452aLEQBE1cxzagr3RPU8YYaDQZHqaySLqvDUtzwV",
  "key28": "4ih4fS8Y6nLjM3DQWJy73T4tDFECHq8563WzrKheacpQAtsnL51ohijddGHJFFS1wcdvgt31sCcjQ9wKQbVCMB55",
  "key29": "5rrby6XYSFC8pQiKe1WT211iyMjkNhLDwrnUYBJyTJgdYbWpbbPMJ2qsePvgwTEzz6fpgfZi16ZS9NEeCiNcZAuy",
  "key30": "5Y4ZqyTL1eS2KQFKUyehniNgXFmjLLQT9HpjhBMKJfmDmNsEX1ZknhrhYNauTvWWfpVV2eBynskt76SvDDNeBabB",
  "key31": "42DHaVmwHx8d2LrtNZRQhAu85HhMYJzvPGwUjojHF5uUQ6hgK4mxacz2Bo2ZGJYr8sZ2d4kySGvTGBTsbmD1mY5W",
  "key32": "Tr3GLTJERY4hA5JWzrHb5iGx3wxfYUiCnH8WzeeQ9i9une1uVrtRMorHzQ3c9nuVgj3TNPsirJBj33fezoY75iQ",
  "key33": "ycnr6xJNXqsTbaNTUWyM12JrLkJeXjpaMxhaLyRszk8U7sXJNTatH3rJS3FKBhJK8TtUwWmxzeNPupD26ydJV5M",
  "key34": "4whzn3mzgs9u8VzKW2DoRK4xc6V4VnFcfeKubXaot9BuJ3vhy21R69WCV7SUuxRPE4ekNhF4rWpxgGWzs8uq2zFS",
  "key35": "2ckJvFMmX2qisFActxDuVSq5GZY5rKEQ2v9UcFmd5P4jA4rMxRqs98NPuk3Hgpnm9sBFQNx8peDfZu2xRDhxreAn",
  "key36": "3NBdgF3h83cKqjrvSKbxEGf1c3xGLgAWHjdzz1gNVtQpDnmwDV6Y77vRM1jGRAv7Q6UkV8wEzvHn6f9euKTbutGi",
  "key37": "3Dz6H8RKo9iVgeFyKHZ4XWkX29eUTGZNpcx6gjEe63mH3zQ9Zti26cTRRTUPXQJUNZ7gr1kKno1KdiVM6uJoBPkt",
  "key38": "3dDmnQ5S358hfMivQSm4c9oWaB1TymFWmpx5HoZyYQCVnJPefUyR9X1m39YgGP8th3V3Z5JgtheHHYvvTGoTEvcf",
  "key39": "C3AKMquH7h2gfnAp8KSFyAi4NkK6p25dnTDD1B1oVNN6jLqFa1Zqc7DHzrMWuKtQiA9rQMdzZChq4Ypse4zRPLP",
  "key40": "3zRF1e3U3TJkZjMWmBNtEhGcYGBeTZtbqJkSxC25D19qVGCyhXGfu3EzmUYE8xuFTEf9DhnjkfdxRWpuDrboozmL",
  "key41": "4pHRkhgY5xnqZgkbdHp47ME7wewWc3RHDS9tgjEqcNpNNQfmuQN1MVrzhQaM4swqv9m5tvqZaxt3RrJWoLoqZJSt",
  "key42": "2UrdNBGifR4XCdYZcMxruASNeaiVDqRQkd2Dqw1c2FbvFTDhKsNH17enbm9nQNhvKCKLW68NX9H2eBWYKZKpn6ev",
  "key43": "5hV8RnkFcF2pTtwjthjPE5w1SWgBUDN1XTW7zpYsu5KCriRdsDAYvzm6jS2BHTtcNHeFW7iTom75yN74qUCEbY8",
  "key44": "2kUy8LaKhxFGKPmPCh3oU7uuohPGqp5BaBoEJKBRxBHTnadE9XVRCeeiStAjeBceSmLQeUWP66DoiS3M4tqYwFwh",
  "key45": "5uxJJr9WmqhAfDB1khAZkdeN1EfQGyeb1mBnZXrxQN4gAaSYdrXSDBeYDAkWUA7CPmkybGgYp5w4CkefAH5Pz2pn",
  "key46": "27NqabbG9TBVJ2mG7Vfv8ZmZKYf2h4nrBMHxTHdexyZgCKxhEHKhBFpeMSqgqZMzKMqj6xnhnYVG4noj55NyNFRN",
  "key47": "48VdxPfrYsHAsc8qCAWKxiybsUDNjjug8ZwpzU5k7Dvy6vZxKhT4Bodc56FVEQ1y9GADQ32zwhZABKi71TYSo6Ed"
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
