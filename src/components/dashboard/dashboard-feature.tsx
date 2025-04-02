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
    "3T9pwu6v6b5wvL9WhaKgVMahyE95KLh6w9KtsKwX1hP13r3MQ8TLqrNpB3PGahn7XpWZtFGrKj7hf1FbX7gWCmkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pr39qwvfeeT3PwxGSkz37AdzAZzfiBuhASoF5HtZnPYENygkerrjTGXd4GcmPvRJ9hQfPbpd3Xczh53vJK3bFXA",
  "key1": "2iqkYXa4UW3dJJHWPfknwKQvtMGJjVXFstX9QKGXuagbPEudN7Hc2tXqvtWCiy62qExViEqh3suJK5USCburhnAz",
  "key2": "5RkXzpWE8gWuSnFxJ5uDCEb8iYVoZ8RTRiR36zZRKZLkGVYGb6euq2NyPa2H3SrPRmRpAcHhSbV5PGT6uqFDW2YQ",
  "key3": "4mcrABPEV7QatSMSS8KBwnzqKSDTEuAPHME2zpC9nPuZSLfCbFPN5sgqoiQxXssonbhXCvk7iqMuAFH69BQ8wxoZ",
  "key4": "BFne6urT1uBAG5TSpGds6Chz1sGeenJwbEHUtk2KqMGjh9QSu3ctS1yS8jeMGKSNZJWY9RaXtdJWL5b8eDwqnsY",
  "key5": "3NDTNA9JdoFbr5coAgdqZbAi6kM9vqeLrDgmvXZhWb3G5zybAWeTgJ9vZzVwbWovf7UNd79ZjqGAiwvdkRvFiQda",
  "key6": "2AronbJnFVCd2t7Qm5KDdLowyyH7AKF3qEHuzRgLuCn3RfqbQPF4pTHs9ykBMGVLuxL1f9UyeZYWqpyFSZZDL7Uw",
  "key7": "325eKNFLobM7DFUzw2jNehTZSTLRPB2Cs4xcav11aDcgBGw4UBvRu6ABt7aQizmdTZS8EnftenmQvmYi16hHXcj2",
  "key8": "5fkVrENTsV6XMTEhDeJZ137FgB9d833oibqNrnpp6zGXKSFybC4zzeabyEuUiHEXpADYt8CXG3hPLvxaMNQtSWKT",
  "key9": "2p88QW59thitArTW1VEH2iPKqJC5SBN95c5Y2X5XjtPfQZY11TX5m5526RAUwQQt9RaqwEMLq45pLc3faZ7cY8w6",
  "key10": "5WBJGdzP3aNu8AEjbLbARr4HGHgLJMoAmszL8efVKmbHdVUsP7XGZfZvKrqwTo4cQ5Dy17Kk7wTTXtukdRvQK9DP",
  "key11": "tDVbqqiSqrw9MwEJAe3QnRGCyggJu4utPwFHxxBoJBXY5iM6YQdhwQ1JnfDQ6WJHATFZLG5WtRKpnHQEQ1yjMkh",
  "key12": "4WLKbnanVKhdzQywciUaB7TVJXK83vZMPEnfa1FbVgEjX4bgnvtdL4vWKrwyom1TJCB46wJxCCrqdFtuCPnyKU2w",
  "key13": "36uBaQsuX4Wh2Cqypw6dKA61Abr7mdRQZVaC5Vpb5Dp2rn3jzoVw9UiseD8AUnhCZo3hLMGs1Zd3HPKxMn6j72sG",
  "key14": "2ScWSrBxGw68JR4Jg9Lcw9RfKysiDcLY3P5vS2QZ32LJPPiz4G3SdMXjQXyLJftDgSf4uK8oKPyY5tzk8poihZu4",
  "key15": "yzY9zgPXiMT1UmLv7e4vqxmHWrC3HBN3uwmuusT64K9Sh1qKZw1nuRyf8iLiwz7tLSsgfEkZNSCebvsHi8LxEvC",
  "key16": "5osKXTZ4n6CWEgwtHDv3i4J22xTCMjeHZi11LDQ51p5PZdiBdpEGDGdxcjCfngcHZT4uBn9UQEzAga1v4Fa4ig4R",
  "key17": "5Hv89CpW1w6WVu66GscNna4i9ZbTrzkzaZ6uREMnkcNe2HHbw1eqLoTwYQUVVjBmUgr8mZc9RrS9StaZajcA184s",
  "key18": "4GjLi6NADbUDSGL6GqXxUvJzSYrvGiWDr6Nd4AWDibrD8jWdvXRm5YKVDCh5cyZG8bkhaZ2kNVDfCv7yP1xiHwL9",
  "key19": "4vc45QB6zjnFYu3vEZaiKsYEPuvYfqQaU4DPKLSd631pxoRCAyUY2QGcB7GjqNCJKyuTYTLN7YxhHf9nJ6ejbo5S",
  "key20": "22KnrvU6oCaKzVR7qrCFu8y7ogKgFTYkkNP3RXYABXJ3pzcbFhaJrC2HiYXZ47pgwgZKR6ChWUVmk2k85fmmmqaL",
  "key21": "3He9aePq3sDDnZfFB2JUj2j6Zrtit2C6xzjfSVVy3iMxgJUUnMUmdPaLHPxhbdYxaZEPpnuJcd7b4xD8hKueCTfS",
  "key22": "5Rc49Z2LxpgwNmNAnD9DHUA7eo61vVm8E88g6LmcA1yLNUszFxu3AaPrE3wUxk3rtC5k5B9rn4hPgm1bim57DXd7",
  "key23": "2WwZF8bQPLZFtztEH7XJMv3ck1nd9oB36ApUT7FWwfDeYk53JwDkAq9EJ98j4LYGUguoE6QZBXGM5Bi3e3aciNXD",
  "key24": "2RsKequ7XwGxKuHUN1JZ7zyGMeKA5DAQ69ZMCuh54PfF3ZjQxSJPwU2PrWQbsf2tkDeo1sSeicu6oSWVTCJyYAd4",
  "key25": "5a2tRbmJbmvpAdX5ZAntoNr8uzTzxToU1zvM7saUBjRTJre2mnzgXtBrCFDvHAyvsXuKa1yADm1XJpok9J38XBYb",
  "key26": "3He1KmaXnPWXjPLNLpL5cgC5bmZCcNPP1YFPBeCbNbcEfYK2T2JCXxTyCqFeYuhqMKyLJYrsDvMVJeU6sxBaUo9f",
  "key27": "5FsAhDufwg9zaGu8LWQjaTSFxt7AqMLok4hDhK9UqBhkJo6aUR2iZy59SKkqm4C9toQJyMrtct7rjceDN7EPdqaS",
  "key28": "53JbjNx4c1rpStxhani91vsokXNgrGcCSsVmCRMb3QmgPF63445rSg5DJwNq4TXXPVs7v9aQeBDRiZzuQLVacrLC",
  "key29": "4EyvVxcvLzQvvSQDxUaFphD2MAvEpgofXhNZd5MLqejJxUHaSeJ3ZgpBqZhyTWCNyyCnHznHfxfuLR48SZAXP3vv",
  "key30": "34UvSJ8DceguHyraUS3Dnh3fT6nkPxS1gQwj2vmtAoJX4yqXBJA7EKaeys1ukWcdAbDKSPhPtFZ8oYnyz5FRh32n",
  "key31": "4oRFBDMNfdoR9hNEeZMoKbKiviUpUWgCmzSVRHLDg9QRcJsRXqzDNKe4bdc6cCRe4EuYPk5a3cnptQ1H6HWMTakg",
  "key32": "7TWQbF2ExEhEUWyJnHcfQV5EUTEbXUhWCzLhmzWwWtWYkaA34Bv7u3w11RDVGqodVnj5qmYhLYVqrH5w6NV1ToL",
  "key33": "DkrR7PYXz5xb4ETj9AHsqnDWtJLPUwgfXgMDdoVEhRiq455Eff3nJoSF1Jjx1VMA8iCh6MNqpVQ5YCQgUC24yXw",
  "key34": "3UDU74wxqRMyKskUvGbLGZnGgK9gMDhggXReR38soPCpvQa2QMzR3d1SzUKWA3Vw9PSYSwgecxhCFGjN1PQfPjjk",
  "key35": "5ESy9jYN3RUsfyNEgG7xjnvgDVgV84ct8EgC8rS6MER1nkRALN1GfKEoZh6a2jAvoApQbUu9eFQQsSf6rgMSytRb",
  "key36": "2dkBDXotxXxKuzLKXZV8Ph7EAxAR4mHJcx5XwykV9S1WyPMAZhcqAUkiQjLeEjLhW6UB8sncCpVQ8dViRcty56A4",
  "key37": "4LxL68CZyKe2iTZbD43xfAyManXKNrkfXcui8rMnL1TXGSiompYYkUWqwhRrsViSWhFJp41HNSxer2b8NKeuXzjJ"
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
