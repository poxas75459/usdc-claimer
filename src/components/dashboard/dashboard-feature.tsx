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
    "5fwc1A363pbPMn4QAGS6PrLRRiTE9YxRZt8UyMnSWdQJck2gVpbWBCDwMKQh1fv7nLwFKWHMS8uCXdMzbdDcwSTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PkMSmT9rdu6JBdKFcJtN6ufcb9bioV4RuYmLcYvHrDhpDgo3tts5o9166gkCqwLgNAUt2sMnfNVvh2mwn14UVhG",
  "key1": "3NsVAgfCPr2gatECzQDrRh71NzPN1CYUR5nqvFHGsMSaH63uzBDsMkXWHE73csNaCSQ4jnnDEBc6GEg4hofU5K26",
  "key2": "5QYQ8QAFLtgfCeX8XAMwicad7GESzpSChYYHRnBTTLHb5qBnijRxhuk3YFsuxtxnLSFkceirxL6K3BUP8QyZhpzh",
  "key3": "2kAWJFLH1LQB4KV8MdwiW4HDs1vBsRKD1Zafs225krdd1Ah1rCxLvVCpLAdSLgvCSjL9huSNAQUi5iX6Xvv6pZk4",
  "key4": "2RsFg2E95dPNYAq8EoYgRHEcpaGLerZMiz83Dv5zyvBvdXmJ7SKfKEdDfHKybnS26LhPLH68tbvj7ANq9avsyyaQ",
  "key5": "2n5SSCg9B4E5MoM9uzDic3GhRdbSx41NUYW2uNQHCerbBXM5v83tmMyv4ha21RdTWebbjEJNPg1WWXxrLJ9422Ht",
  "key6": "3yavt9JHx5Ww8DiJbcgwRahCXiJUnN1CQki5bUEBALdXiicFGiARem3ETG4bCxZgFTDZcjnXyS2xEhaLkxsSnnut",
  "key7": "G2j4jgHYwVegcwi5t9FnbnvYZmtPq38Wx4XPKPRBnVnQLs6rivrnK1qoHbmQz1G44Edb4PxkdEpfRtBidXXxqaD",
  "key8": "32UZ65WE4q9hsC5DheP3ysdfeEDmAABygREaV73NE4Bp9UHMFBmgUU1gCzFzVMS8gz5SLgg3UkkWWspaHMemvJEK",
  "key9": "29EXce14z1xFivxPEWBuJW2tCyz5NasGzeaNDHCFgNsUY4uoaqEdV5UKuRCiowvwiZf4EsrNcLWizihj5YvuvunF",
  "key10": "58gxQUDQ7J4e2hf9ZTsW7Vxb3te55YdtSEhxXAxvkyCmW22AP2kf9JikhecdS4yW7KFAazAwEdsAc8PRqMM5iiwt",
  "key11": "3cQiNf3vB4NH2HtrXJYBNSysJxDFG92DHuXwzfkjRcSQcUamKxU2nTtfbUSxkAhNQmfZGykPp935dgtxjQLFTVXD",
  "key12": "Zc9pBaHBHfr35Mhs8qfzWz42kjYrR8JuoPFTZVRZccAVMPxLgwP9VYwGGM32XZKq4oLo6LgSBMT3nXQWyHumVR6",
  "key13": "2HrsMKkmrhtPEvMcAG4ftqVVRRpuj2risByCc8RYBLX2WHMtH8we1UfVbXNjUHZMdYBq2pfvdYRA6skiQEa151GS",
  "key14": "2YAnswGvMunPMM7G4ih5HQw6o6TWQ9kyVuiHxVgoB5NMjgPmTRsMLZ8SHEy5ZRUfWTVr64YYh54LPQEnNnAZSr3s",
  "key15": "2iRFyThKAWthWQUFS4fQCJ4uJLzbsd1vUHHKTHHRcNCWm1fyith6Qq1BZrRsM8GbtEp3Eq7851mk4C8UczLs2erV",
  "key16": "WFisJKuP6svNemdMV8L8EyoNSDK5xwmZA6w1YWoun6nVMnSqZgG8AaLCfxndwxjAKbUUnCtWiQwWfrVkp7zPfUK",
  "key17": "3SSJok8uunpSgGQ7pNyg5VyJZ7XiXzmTwzbhwPyN2JKVwqkfL5BCkxtphhgkus6HXwf33TnXiBuip1YDq5BygAva",
  "key18": "sD6tujphfN3cpem8wo5QLvEGiBmNAxBmVfkkZuHn929oPUdnu1XPAa7q5vjCvtRjXghCLkx1bL5pLJasEpKVLoy",
  "key19": "36gHkVpvG3gfPrJRZWMAwdzB4gyEA4P9Mnw4wNE2huuNctMxqNqFcefKXrPkAkrPnPUt5KcHCkG3D4vnD3biCXLP",
  "key20": "2AxRVvsc44xbJ4DzGxtVs2QhkDoAHX9hJKqqriTnZ5uiNMKnW6mWV4DTjDzjWvJXUd6TjTqP3273PPzEkEfbE7cT",
  "key21": "zD22jTBugzKRNFCA1EjDAbmDh2EEWKky4cERWPwveCuiZYngZvNRWaXgKwCVUcVxiCb1imWYyTmoXfbhRhMZtbU",
  "key22": "5uxHmprDMrmXBpHLv7Mz5hCbxd4rMGNaLWQJPcBgWHM6PCXDrAGAg4wc4dMxD6sRZFZS1rDwAEygfXWr4yQ2cHUp",
  "key23": "2uWrJKWunqHH79KtnoWgJYdnmu8AfPbMMEu7DtyL6uw4Ro7qrie2zBkTCsXtinntX3ngNrWYUoAHU4n6SgQSVg8a",
  "key24": "1pXZvGZtarJtfN8abxNVF5Brww15Q9q92ckKWe4pPtkeBv4RLHVfMMZqMxroXPGg7x1YUVXAYhWD6AuC4kgXV4p"
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
