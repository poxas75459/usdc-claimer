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
    "25Zz4VcYLEFUN6LM7d7sv5vJ7ERsMEcsmmJU4pWysrxDkD6tvf182z1cXVpJhQVa2qdzBRKhKWJ9Ttdjay6VYckt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "423NQtCqdqR9dVagxHShLdS23gdq3pGZ65KzE94PQ5HEJkEXZJYMZ8wUFCrwFvpFsuEdj6khqkN2kqn2SmnECxxY",
  "key1": "4aU9jx7aPxgdKFHHkBjAU5VsxycDRowdKmHgyhYybWc6dxJJzxMZJrUzE7ueKVD25CisZvmDA8hWqNDfsCq87pNT",
  "key2": "4v9KXfmw83KkBaz4v8sRWXbBFTZdavU8F1w59BQNp6ZweHDP7UwJeRbqcCWSqkHbnzLoHkoQrAThykaxDtm6TaDK",
  "key3": "47vjJ2E95cUtRMzd4q9KbYKgUKapHCx55Z5LU6chaFGEsdSyPppt7zAuy23omER1JXFD6xBqoJfP3joPr4476S2Y",
  "key4": "3duiCTbtbqj8e47fewUr6E4sdfE8fGwpRxgyCAUmW7zyh3FHRtt3MuEMnztTU2NsQtb3GroD1PWmrAzAuXxX6ChL",
  "key5": "4a8UVkRerD94ymZFE5hqfjCxTjCds1rq9S1c6sJ8vJhCw7kbTSqFEUu9AGEfTK72iqSxQqeY9ivu3abkoazP1qmr",
  "key6": "2nuaRC3r8uqLqcjwaBZ9BZdZEk6n3GUghT4DEiU1mPtcgwtbBeAsckWQ4y3Qx2QyfNT5njSLBX6rUYVnJ52ni8ti",
  "key7": "58cY3CmAzeZ88MvF1A86GzRqctgycbGeucE1L5tK57e2VUEeGWnw8veRxD3qEpBoqf9j1gjLC4NYD4NFEoYrqTN2",
  "key8": "26t6gFEZPFWYZxpuaRbCwpHTKWXWHUMFHJZvy9TtMhYYod6pyzU84duUxqJ9ga5Fco5o8TbLeTqzDMKtc4oGpQmD",
  "key9": "4LDFS9CMbr24x1MfHKHeu1fjcsFpSLFncbWPcSueykdH12UCWnQEapirgM8MgobMr7ovTbVig61ki1d3WbJfW3no",
  "key10": "3GWmx69QGzTK2Lpg7u9Ru1MXpVttxqP2ZxxgT8wHnEjLi838Z5hQbjtmdLnWQCQhgpL7cyWEhdtWvh12NbAsztts",
  "key11": "34rYbpzTp5HJPNuiRyo7zSqQWK1uZEDk8ZRvg2hdTDRZeALU4D7tXYYJaToS9E4emEuYfsm6Hu1sAWo6yyBo4Tut",
  "key12": "574SzSwx99jEpsmpgt1jxgsKY9zwbseSRXkyicZhfXLbNsoaSoqRWFeGzf8PakNUDsJxfUxhZ3t17BB4P9QZfGMz",
  "key13": "24ycWxMNNm1eV4nyDYS4SVPj61hMYs23qougrPFtLzjxo5jwJ8stWWsexabCWszRJ2yN1WWLv7RoHUEqYw2RsrpQ",
  "key14": "3JH7VRTCwoANrrZu5Za3NRBCRi7QQLyyTWd4xW8ui9PsDrUaNu9YJQtGYWgcEuK4uLpu7q1vajgbnP3Xt3ikcBn4",
  "key15": "3pAc1SQAPV5caZrjBffEpLYehmAbjGxwjFo1vebmKqkxXq5rMraAYtEyjFXcm6cX32EU94oETL9rVgTtsH2JS2RW",
  "key16": "2eTJnM7Rfb3LGVDeLkXDMthFy7vwGM3DpyAkPP2AGEY7iXcRLAJTzcLnVuR9TycbRqgQTnvXJBHyuxxtGuLbV3iJ",
  "key17": "2MZEadBfrbigHXWMaZZ8eLeqkPYLQmfKUtqut41Qgjw2rzKkmd22ZZUUwsAjgNHF47nBP8d7qQ1Gbjn3W7HxReMV",
  "key18": "34MZ2c23GWqBYh6HDneP9nmuDBonoqgkvMJGhgoShNVcSwNhjr4oBxorMPkTXXbKMHGmMKdAW8ZrFNhS4upU9Gwt",
  "key19": "3rhys5Gss5UFkcZ5tM5gzaz8QVQ2YcH2s3Y5SDpjYtZsh28beR2TBmP47zJ871YUxEbfWHg44fru2adWPJz9dNk8",
  "key20": "288W2n44tunbUu6ZBpvHAuiKQ988fzZcK7M7ve3tuBnQZUNJmnGmKCw4b2mKXs2WXvMMhFbFvKAQfi8if24zAhH3",
  "key21": "3RQ3yGUKnRVW8nyou3Sry3Ev7Ypt33wiwAqaB1gH4WSn8brFVdsp7mGoNqvadLeRNnuAh4Zka1XUao5amAGutW7r",
  "key22": "3UQLgchXTd9WeJ3JkDYFhRSHvj4Bon9WvJUSem4XueFSpbGhdZVdizEtk8wo5psAsJXgXEwGa31GuwmVyhHcMZ9v",
  "key23": "5Wts3VaU8rokaWU1cgdXg3mmKsFkjUrn58fbArA6ZjJxehEJimpB1LSKssBYUZJz8VfHoX2mbSyvgp7i4p3LYf6M",
  "key24": "2K1DaXrdTy6Za73fKvdmTPH2m7D7gKoUjsSoyRQVc2NR2Sj6T7C36ejejW9Zn1GMUMEYsu5fEpDtFBJZg5hqqK4J",
  "key25": "2jyu7hncti6QW5aoeaw3mA7Rrr67BXc5fWY9ydNdRG6Hz8QSgd3JZHGrMwAr5wzepJapt2DFY5xNDL67nUdd8avB",
  "key26": "QCJiFPBoZwKU1eKui7QYDLHHGgWbwfvQEM5pxkEsF63c8jgcp6WEYBHpQwXHShpn42Su9HJTzooe1eDKsiM6AVK"
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
