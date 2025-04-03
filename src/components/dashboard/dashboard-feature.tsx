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
    "FtCCmWEErTD7BkXdEqc7ke49T5tEh3vv4yULainbHATPKtyA1MvGta6nMKxKw3uJM4QaNBGjzgabFJri7EFguJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k3eePTWDhnemf7WFSrGysmzVHshT7bQ1ZaZv9J67HSoeaXVV1HMBPRVsHEL5BrjipTMo3MZCeX4t2RxLyZPwDEF",
  "key1": "3S3sGC5Hap5FnVDJF1Lr4119A9EQA8vWNqTtXPWgKi8YduLejX53trmDX4aEzTawiDh9c2b3Tv2GKo5vdvw6gbfp",
  "key2": "4sK4Gd1VsicnH92bHr2eatvJ4JcdrSLYdgwovEDE9eVZpUGJq4Fm65qAQqeoPwzDEtzm2c8r5dEatekpzhMTxmFq",
  "key3": "2GQSEvYfHT5ZnChaVmiGsUo2K2eJ9tSjGDxLZ1K7pKESJAJk2v4StgCnzbY3QKKo7BLRbdw9dMVdMxBfqNTxUZpR",
  "key4": "6nfso3PHeJiMvxvk1QoNwD8X2XoAcZ1oiJze5YcvrkhVcP75ehdKdAYQ3dfejphuYppA1q4fwYSpgvswN9TWZwK",
  "key5": "5ck2QjkPZMffoL1T2op3U4UcjDc7burRSae73mdrakxWwQpjoVqkP6aMvrhtFAvgjFMsY6KXtJrg21xrdyzRF7EH",
  "key6": "YFdS56oBSszneU5anmK2mFG8roPCqszqUT7yB3B868t4Eh6Q8HkRuVZ9CZg2t3oziSD3hhMiKt2JpUb6j2BzKqm",
  "key7": "4KnTD9dqUtbUQ4LD8jSH1wZo1yuNG1fsiMFKHVsLtRaiPQ5kfqv5cCt6kkhbyn5FcnoQExnJDp5z4DdAM9TAmaiZ",
  "key8": "33pHpWUKZNW5Ki7YzE2EbRhqguNUDmxbczyCFW3GJ5Gggj1rA4PsjDp25TLEPWxVn5oc7UGM9x5hZAqf1nSHQFEL",
  "key9": "4kjQJWWsV3ZEXW9yfhPnny3doXXXVu1woVRYhxYMexwwu8QddkdhUUrdiuf3opaW7mnrGYN5ZNTyd8QqBfjxfJtp",
  "key10": "5zSvCZnV5jdbqbHLAYDENbmbgo132TdE9bBS6WvEzajPSvNuqexkMJ7ekPvcPwnpsVAL1hchYzoJjWYjmMNUSQon",
  "key11": "5TSYwZ63whR7b4XUGkLr6WJfvsDuaWbhb1yLUaWTsYmD2WcBQ3YmZtksbacL3yJTZk3awoXE3PRcRGG9Fsz7t9gz",
  "key12": "2DxccBSUW5YWy7x73MPpxzYccKuFcfpCX65p7c8QmZLTg71S9zEP1VCVakg4kRUpeMSaWkLTmC7LSyyj8hu7f1MP",
  "key13": "ZbBBAPwn4ZfZjSpq5z6RunN9Z5PwxWGGyqgCiWfZ6vLaXUCYKLZtHTBsbUumSxTT943yQqvLPXweKyTEjfde4PR",
  "key14": "5MZ22pw1cC8rDwYdeSHaovU3n6cjMLkBuS5ukGU4NqEaEq6dKcccr1w6tdxiF1f8CbhBXbXfGMW6mTcse8qt5wS9",
  "key15": "4vDJQV6EQ8ttdtHjvDFYCZWQXPkgkYS9uQ7ct8Fni4ZopdZQYJrLpnSR4pag4DpnhMfZMB1SmpbbGExBQMnr9mpx",
  "key16": "3GFMRvXHNJ9RGHsbHm3hnfVHECPcVzE7ubcviUSwSp4Uuan49T6AzPQtvvKuCqGtxFcgvSr7FucAjYss8KD4m7s",
  "key17": "3MUi1Gy98xoGw3GHAA2nLyvdpBfF3dqMbPGuH4mk3Pe6PYVHU4YSD61N2zU1SkubFT5WerwRj4WdBb2iCjTpJ2Ut",
  "key18": "31NASR39disPsXC9ct3AJjjUsV7F9aeXMt1BmZmuejDnnagHnwEVw38HwsaoEorjahJUTtsBWE33fpgaJXnodyMc",
  "key19": "5e9FogLuMTK294t51AiVq9aixSp1o2pBT8i9WnKEEQMJJLCAa53JWF3GPanDrgWKKCsH5diER6WCmLGEcZswScCn",
  "key20": "MPZtFMiAaGTukaGHZQYfZfSwACbfvniEGy1h8oeALafacW9f5xM9XNib94PwgXcKRBHxv74LwSsSgGBFNSRCM6r",
  "key21": "4v5Sq9QcACqzybSPxRtrfSTZHKDqVGmtdkw7YiSKdxSuQBGfQkGj464tdtCE8y8r7TkVseQxrzTr3VXyJ6fmLndt",
  "key22": "55tGfP7cPTUGvifBJ5dJSsMhorPXyPZqJkfDViLi4yzbF1biAjwxgkLUuTmoNLFw2mHd41T8hCyxWtfybYRibyzr",
  "key23": "zM5o8Y9s7eDevmjDdRyaKB1izVKRbYTVS1CRygqTrCW9EwmMFSF2kDzqXwBmts6ut1deW6cqqsAwwSqKWKrBH5S",
  "key24": "4dNNBH4jeYJy3SDarTs2GVpgNkXKqpaPzVf2aKnFaXeSJNYfhF2w9uEAfrzNQ5619jWoxKJZRppfS3tVxHVBG5dK",
  "key25": "2ZULWsZg5wn3vgeCmhcTrLExHfNvbcSewBR8GUQzmVNHVNhqpzBHxodJw5vsn1gKBzjhyTiinQeWzsdicAnMbixb"
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
