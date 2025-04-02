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
    "2qgW9f8mFnfVE2qRtP5Emu7T313o46QLfq8haoWxarLdfMMz3y6bFiN3epGbJ5fk36ixgVurNxEAGJZsPw1cKh5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iquPoNhjKjz6fXJZrDaxfjg6JCmErdfFPujGJwp43DHKthwV6B4GgeSkESvAbB3cKD86g3xJYUy2CMif9fVSnC6",
  "key1": "5M8Bf3WbA7R1dJTueQhPX1wVVeHg4Nku6SshMiohb1kne1E34Ef5A379hhaezag4R6FNK2oFypxf1cdyzFwYWS59",
  "key2": "4C2a5Wp2sQMRzQhm1xGGabmej84RoSgTHVxmR3CMKnNH9D93UQ75KUnLrnHEe2kh4kT8deBw12wQEfUB59MM7aR8",
  "key3": "HUpUrVjKh6bg8VawwKU5ckSL9BkjD5mTLuKx3CwHy9bL1eKV81iZhAbyHbCWArN5VPkVQP8rxL426uPMdUnrGSM",
  "key4": "2RacZBAZ5tWNTuqFeEFsLj8byDxExFNRRrDx8k8R5tKQrDxUJjYuUc71RTEEb9DsT3qkHgzDFwzP9QiF9mga5E3z",
  "key5": "4F8xwBu5N9hFa9SuRVY6VJAUyijsXz6JPCt47ifKdk5stPC9Dbtyy8a3Mqz5ERiYD8eqRYB1CDg4gLWePdX92MR",
  "key6": "54Uo2RUJPhSoZ9maMBBdMiusdMsEjWroc1aedvA2bWpbKx7FE94ECowi3wnxeULAymvbSMwb7R7mtwZmkJtWtWLB",
  "key7": "zCymEVXw6DrHYe2pssPfVrkKieTZz35PRKNDLvu5jnEJ9f8d1Y2arwUG7nvuUEfBWR8nbo3ccFvSmu1NBv5bFSD",
  "key8": "29ZJnrVXNx4AbrPwkqkAhRDhHYngSxefCTh5G8Xs6aopAB452ipCu6rzb9jF6gXWXKYXU8SyZ4iWwHQMazZnUbZy",
  "key9": "29Y724F49Xa7pRSd2bDxB6BQEE5DEc3sVKqXazV7HaDnNFzp9CbW7WbHJXoBQpUxUmaW3Yn1Uht38dFEic3PQ5St",
  "key10": "4Cy1ENvyFonz8d4W89m8GPT6VtUGJ8gjLbe6D4p7MFzYpRyXgDe2H46s2ufDGZYbu8RYXL6L8EsZsERsRu6CXFhB",
  "key11": "2TT6v54kfLEsCv6B6SFtVDEKqzWQQ6Y8wyeCRK73vvywBEhC3r18jBLm9tpozaBkuM9skxsRWsE4CDtJBzXZRZdp",
  "key12": "4uDTp85Wvt3dkpeDjoYG1KhMe1fmztkmGN5NztZdbSb2KVRGjRvvwovgNzqn6irJtY7z6unNvfet7BB4NMCbuGyG",
  "key13": "5aEQ7ngXczXsXThgEdGby543XGn4Hk1WAZTyG2djn3W22gLCjATDjCcfsiePt61FufyHSwgwp552WGxquSrsptBu",
  "key14": "2gZ8DxcC83XswN8QQC1SErPRSR9EDyqc8fyMwwscCAWkr1qTiCDaiZFc1AHPCqHoR1FirjRT9rsuUaQkiLGfWhpu",
  "key15": "4iRnZtSfdU2eq8qUBrQLKfAGM45hwhJYLg6TzTGo9smfJ824diuJxnNZadKRjX6n82Fkn2MujKBvvVkgtbwQTxwC",
  "key16": "KMHCePBaLVgkBnJipKp7dwFGc3toga1gqpNQxZwAYxCPCMJt42MVjWqYivdWRdkgEHEQausB8N8y8Rmj9amgSch",
  "key17": "2LPxhjV3SYder3rDJZtgSzD9xxh2rFTCmY6NPLRxRdyDBeqWeJW4tBXWjxho8Fc4XEcVqtJHL5zkXhnxRYrHqHwi",
  "key18": "65CQYfGqSpefUHPHUuc1YFatqNPmo7ETa1yNJrkV4724h3Mub3GWaock2tLj8JKm2w59Gcp6WDyf7jpWyPv6azKe",
  "key19": "uWqDNaj1GXK77jNAZwQ3DanJdPd2EHw74bbCvqcXrTjoPg4r2RV2h4Czv7hT5KU7U2SGL9btWWyu98HQCyWgyVS",
  "key20": "26oaB4Johqk9XYoRGRr6iBdTuaK3hvNr3gmc5UCLFUq9n6jcFxbHY8DsvLmPNDfc1ayHG2bT7x4p1atxDbCdbgmZ",
  "key21": "4BJzxaDC67iJx8UxBiTHweYNmaSGvCvbcCkrXzC6KnHcfJFih1xKmJ5CbQnUtuXBnMiEXiJiTijCBxFHRAwsRvEt",
  "key22": "4KSMFyZMsP7GfPtQqfnxD91zjcz6xrVXj6N86W94ZUyqNFYYFKHPma23qdrQ8zwRREaQj2mAYdbgZWV2Yyq45Cqo",
  "key23": "4gfihiUtDhWiJAKcCkv88WXomQaTtdtp9Azzg3sWZLAtPKq8higendznQMTq8yrtaJrjoxY5kRVmJjqKnBgxiLRN",
  "key24": "3YxoCrDhYrHGewcUhJD2kCCC8AU3r8eNMc7fhnq1QzcjhEgnRqMhFiGqEPFXpJ4kpfQijP7VTTontDZLBikedudU",
  "key25": "U8npT6RkbDybJNnCrep3NH3iTuNxwXQYhHZzUgVZj6srDoPym9JFBBFieXsF1kch7S9k67z5m1oskaTRGGYtQQX",
  "key26": "5ePR1e6PTpJPADHDHGKPQ6U2yDGpnhGyR7vQjdt94Q2nqWiswkVuQRvLNs8uaYNgVx1cQpfXWeqBYCfyfvMDV83d",
  "key27": "3YjsiXPj4njZuTFTaJ3dPPv7KbzGAqqjtvfJkBxYW9d2PVrAJe42ebonCMSuVAqgpkbu8PW9gGhPH1B9pUjCDzkZ",
  "key28": "4AxctjhnpwMwRt6E7bss4j4ULwKnvameNxWAnggqKNRDnqegHdjHVuber8P22UTGRNMVzqEepVBYEGzg8HeZVq7h"
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
