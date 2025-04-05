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
    "4imkXN9c2dX4badUmJfQPCw2Spet5VMhin2cnDwBAhfFJfEGUi1j7scmGVasydvkbeRVzGuZFmnpoGZFVBWmrYdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhzMVJFsEHXE7J9H3rdZkBYN1dVvQorj11tmLVe74yWhzrGDoqg97nf1Cyx7eJ4qyVca9paQh23hhGTqkJ9wFMv",
  "key1": "3K4tNstYdnxk2WzH4mivNjfqc2a9EueR6ZebzfHU9s11qrCBnsBjbySAsWAZxeRt55v7BreCVFxXWgw5WFv2oxfy",
  "key2": "3G4YpxBGktU6PatGf5XvHDPB6qUDsMph25LjsWcpBcFZkQxFYBYYr6T7EnVHVxPwBbRsoc6vK7r4wVuHgqseMsSG",
  "key3": "4j1RQWxaApNpJLsfJ8XP5LZZsqNa3SWjAVzToLS588wGhwsbtCkpHPfm7KBHGZgmS1LRtvVHDVHsqVTEYQjw4k3Z",
  "key4": "5bto3Saey1asXPodPAiz1o3YpZDSNp9YvaBWXrEeqbJRgouK79vZrf5Bo8cugiBQXue4Bjja2DqjABJ5uhwj8M8q",
  "key5": "54TTRKjVMnR6EpLPw5khNAHbSQiCwKvGrPUanM1oZKRWZxLRzerXKjhGLfhpy47VVSBhK4ddwvQjdsfpWwfUNVaM",
  "key6": "4sUx7ci8B6TYtpFxeMfyy4iCc31wD4SBpT3TYwtEFnR73mHaFvLjZsyG7YFU16bnFED9c9VPSSEHabzL93E7VuvT",
  "key7": "2VjX2LQAQ4WBVVPFR8DXXSf5sx7PzeFnjfLudjmEK8mG4ntA4AFRjoxmryev9XUPomZGkgnbd3boDQc3exKXPKhG",
  "key8": "2Et3VgEt2fGweKnxWpocAMQKLWihjVsShhRrg57A65UvBon3ZGeFXf5yargG7Xd4PnHFbG6QN4wGWQiHvEmEKiiH",
  "key9": "UMudc2aqjsmqFYmEb273w29TxqJjQtbMzWMq2bZZM1Di3dtJ6vk2ubqKm4fguJkz7j6cn6Bfjc91PK8j8CYK7RE",
  "key10": "5gLWacLsuBhB8XVyzHgLaAZt8JsBTJxQYbDTxjR7bcGe41zbKvgnAYZiwpg58TCgjXaQX1MZ3MxPAij8S7Z8D3Ex",
  "key11": "4oGtM9PCksAHWdEFvx39xtTktHv7RQ6nq9kphmXLGHDHQiN4cWt9iiqXamMd2YZaiUrELP1ikqgRkyBdvFZcL5ps",
  "key12": "5bkHr7NVvvBfTsGRZPSRe9a8h98cfLEomTpKK9hmUFJyjwQWo8wdT7aPL4fPoMHcwxrrcYXfSYZxz4RAvpzQquRc",
  "key13": "62RyjWv132VLi1ANQcR5oTwGqLGNtesEdAakyYjtDRR4FutgvwKXGkAT9paBygjwRrLxcNVYRxdJHerfR876Hqc1",
  "key14": "4PVgDh7VfjmkjAYaN2y4xaWbiFJx3bNnbgyicyd4TMX4Qohtfwcx1nBDUKHWiwmGTZQPFGyqvWuddPX5z2KYrYLQ",
  "key15": "2U4M2PirF6s9owoFNrxSLMzLRz4UaofBE9gYVsXv7ov9z6WZL62kiyRvNMexTiMVVonE4tRWJJpzqSFUxwLFzWdb",
  "key16": "2jJkH1HW6t1FFP9wRpQdaci9s3VRK1sqfEDGqR4qD3TA5R7PtkzQocysMsE9ZCTZBmKKfV9N4utyDZjdK9pejT87",
  "key17": "p1S9hQKq2rdqP43Zma7PfFWjtffam7K4iSP1Ut16ix1XFpwqjfxeYHDYeBJoEZ6A82J8BSb8PZLfRx2VCCga3D5",
  "key18": "41ZpKCuG6t17YbVF6q5cmHZZ7UqvktgUALGgR39fYwRSV3ZJiSUPTA2CmuyEPKZkKj2s9j4o4o7tjAJ3hSUT9zX2",
  "key19": "4rW98okWZhjCeAmnjGKqHEXHyfwhXQy3bpV69o2HhYtRVBGTdhLn9so5EeCYhXv2xK9nP89RUsehdbL1fK81QNKq",
  "key20": "3bNySdNC7BFGPJjTDmbVHB4gr3fcohHJvg4HJp2Gx5SdacjVqUM1UvJqDZB5htFciXqcxX7CBx5BtTY3QyYxgjWN",
  "key21": "63aDnQqqeCSjLcXkpAHSkFTxie3siVxNc3jCXbuqWixfgcp2x5PqoKHSPvMjk9xaCpJZZhmp2J4VsSyQatyPHwvv",
  "key22": "4Bw8Tn8keJxL5AdhizA5vB7iKwrbLA7CWBPH2JRih5JTHhjGiT817YxrCfSTu7cdFhonJVtzUgqrwxj3GCXD66Cs",
  "key23": "mw2LoDvLt5PhZnx3GwhxyvJJsPwXTjq2TmoMpyPe1rARyz9RZv4itHmwB46iRafHNecowMxkQbz9ZH2uiAsDPJK",
  "key24": "5HSEeLGDRAyZe6fmcnZhg7L5YFXJcW92L9H7Dd1ZLHxEGgzqD4ftv9auFPmkWL1RGn5hT8hoZoHF7z4Pb46DJqhT",
  "key25": "55LBzrXzbjcf3mv8cqzfbyFvuC9kvzL3Vi55Bz2eGKgr3PAAxyt9FakefqtnAxYPgHkWjBJWN6BdpcR6BMrURrM6",
  "key26": "5ritAx4sQU4BWuUPqXm2a32dkajXBE7HojaSJZ6k3YuMkFf1sD2vdGcYvGsTFgNLT3qECdpTSeQvxtENDAC38KpA",
  "key27": "3B4r9adX5BDG9CxVoP1p3aaukA1ynt464KzaEufRALSSjZS8sSnfJv4zSiPafvdYgFzhjgjdNWaxVCQ2vmCFB45C",
  "key28": "3wxPVheqmRYytmYqHByhtSyMu8LT5bsP38qr4qu9DSTxdbVSWrrixyjAxG7qcyucTBH8wsKYmMtsgSXSLpvHCbtS",
  "key29": "2ZQGqGVv3rr9TtvMhMWQLUEkmLVmnDwNB44tkeT1yJncJiLJoedi8GgF8tPvsNfQTPbvEciK9k9DRsSjcPG1EUuC",
  "key30": "3TFbayJmG6Xdbuifi2j8qrkSDWXEJofAYur1nZ6VoPJbeqSkc8YB6XP1otJoCxrQf33CDtUwm9p6ahQXaDaAjddH",
  "key31": "5EU37TBEhQ2Vvq7qiD3nAswMMpF7buJ92uog8gXxLsT24HdCPBJunfYLK14J35YGEEeHG7AvaQaDqy1US968Db1J",
  "key32": "4FYHgQMhATg1JTPiteLWrMtcZ7vvSKQj6bkgh2TkyiRYHQudexPj67yyz4Kd4EfESgPDxAr6LCD4UiSHS4sKeGpe",
  "key33": "3A5nWLajGTnqqR6uc37WZxzSFaebY3bYk3RaPpWGnoELJP7B3LgT7ysR8oymmXs76jszHUt2cEUvL5P9hrfB9YVt",
  "key34": "4EeZC1P1bk6jK7zYMvZjGghEqZpsPKVqo8exPpbMFtgb9aq6fiw2K2EKsb8JRghCAsiB7hTDwZaKzUQFt8DDYtVF",
  "key35": "3U2VQZ68LQNMcchturBQxeGKrjU4UgpoEP3pmYmqNza85cHU1GFcLXyWbruBfyqBSPQDiEd3J8CHkfEZnbfc49Kb",
  "key36": "sg5bDuw8Sv1NuMifafo9DhTgLiev2rkjhagx9tCvCiDQ4AEGqs7NBAjr81zLYw4Pk4hQCDfRcC4upmmJgdGgBY1",
  "key37": "39qxK54fmH1ZgGhN1AR45oB5vEQ62HfaA6Xhgm4GfTaNeYBGvuVw29WgXx2cmdnv58SKzihinZ4iuMZ4EB7rt3D3",
  "key38": "5sG7StnDE945fE6qpMkohNfP4psWzsXbX6ctg7snAaUpmAPRppV8Lx8cRb62tfddGcNtf8zYQkG1e5ySq8zMZUpg",
  "key39": "2JWPcC3EmLNGQWpg1YBtxT2m12JD5gBLcr64hCdZ3rhXBVKR8SCUrKbMu73hW8vuW2bMAEKyKVoazmjSsYAoUkMN",
  "key40": "4wpsNZoAumBwQmnymRSoeFur1693Z5iGcP9Dehbu6EGC64bYsSRCda5nZSc2NniEhadSWC49gCzWBBtM9ndw9zQn",
  "key41": "4ZsTkiC5YVvxZajLb5GkSJSWa12Si8qRs9K9v4yxpPtKQLwLYqQoVEcFDWEYpiLumkWDRfDWqLVyQ32SUX1YMu1Q",
  "key42": "2hTUaZtjYSUgR8ThDSEMQ8CkpQ4ecBW6vxivQVWYWpY3YfeWYSWr9D8ToMqkYJE7Q6YVtb37yAg8sBimmRhsAHH3",
  "key43": "2fJAbT1GsvXR2HNXiJ3C1sNfMYGvgtW2xvXu7vuMonmtYZdgYiXh788Rat5UNwGFxZdiYaUJqWv4DiM9rV9UwWfw",
  "key44": "3hFXpcDbfm8mfUE8gNerthV51BRsnmTnUU1Rc2ap2c3uKFq7pXSdodva6jexyDLhd3p1hjHKAfn6VxsMeMNEQPdE",
  "key45": "4UJgDbethTnDAzQg1wT4uNAWuCskwX5Vd9GVitKnBocS9xDPEgTpgbQgZofNT47xctWR5GJMn1Fwwv9WjXo7Avtz",
  "key46": "d3c2B4xoapa9TwruZ1yJ82G9mmaTmyNRDPR8n5g4FSWVAph8LjJUKUwUwHDGWA1RsXup1huziymWGcR7A1r6ucp"
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
