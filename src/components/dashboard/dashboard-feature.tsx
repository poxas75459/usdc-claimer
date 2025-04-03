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
    "aYBtnEBdi5SajnvPuD2CV9z1wXvcpPnyuzgsCYpV8R738cMAsMXprkXVzEbdLrJKu63cWdCSutRgEzHSTkWJwwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cc3vzHAwWh7FxgAux55V1RDQHzKXNnHGk8fVGX5joYUqLjFKW522o6Pc1rgNkWPDKDsJ9fyojzYSXJ3bJfaBduF",
  "key1": "7tSPAJA8mmhpkhudjWW5GNizv8se5swSc91GZmWL45Eweedyr7LVzxx7G1k86nv4KggQdgd97ujnw5yUgoaszLA",
  "key2": "242EZZHR44HkEB1Y5kmiYUyKB56xHX1CKZF65bLSTdUGaPt1b1ZrJsBkodfETQXGhonQpPAqdBxEkMtzAHYTqP5k",
  "key3": "5D2dKP4Ny8CZ9EaY3rw8E2GPZ5XYFgVrce6N7mic45KCvz8GXfpMwZHRiz6muBYcGrizRHM3NgxJjxGbxbN83CC3",
  "key4": "CGY8dPCvc5ZYPB3hTTpRjvFqqYkK5k1LCSVEj1eYUfNdTidRqLVsYW3MY9o6ZykPqcvUxHBXGAAeghh5pzBH7L7",
  "key5": "31YyWnx6WvnYtrnDSwpj5MtCHCLVbykUsNMN3jkG4sdBxvroKdKpSe9bPYJxqyS9QKFcuiPfbiFNnCJyMhe5BjQZ",
  "key6": "4qbmgcc4UG1vDF2Hmxpx7X6wJcfdM17PntVwNycfyEa7Ji6ds9uxKSHTjb5tmf6U7pTp8V3zSM6SC6RXhQE6jpfr",
  "key7": "5N8gEVrHJTe73YMvKo9cANusXnbNeJ6zWDkBsm8xti4ENhtauykgSpduvN9MRjVnVNbRTGQGT6vHfx4D7s9Hm6UP",
  "key8": "2HdgMEpPXrWZ9D8Q2hzWxXFrzBFmmyNwYs1ERv2RQwD3WDr6TAM2MqKMyEP8hnGcLREu3WJrMKPRFZWrh7mMWzGY",
  "key9": "3iXV6PBvGrvo8QKpqWebgNZQ7Cjn7frBBrUvNfHbzytvGsuVYo62PWVCVxFyDKEas3JJL2erGZiDph4XRSruFd4M",
  "key10": "2ztzHNChwt3owAoLMYhxmiU8matqj8yGZCtavzHXWGfXkQGyz9BtBCpmZPLFLoJ79vTdRNWiUC9iGvGXKoZMVXuf",
  "key11": "3HUUGJkZGFVR6xZzRRxad652yd4Eq9bTx34LiWbwHshmcBuqmr6nJ8pRZuYnNvkMcq18CtEimsx1HGy1upDDU12N",
  "key12": "62qEis66p18XSYs8yXuSprwZRCSs8njjLZmfp6XaM1KLBTu6j5JfPC1riRXAEpsXt5XQSGbwR2tSikAxqXhAX6WH",
  "key13": "3SDsRSGrN5ds8EWf8qTTjVYQhSPviEnx7b2NJmhLpW7GkxerKUDMRXbcpTxDUGYQksyuw86EoWxGuGne12CPGM5f",
  "key14": "61giJH4LVopNF8Z5p2JsiLF5LMMtvZkb57UobWcaqPHNoNN1oAxLNLsugnUx1JSXjrnf8v22eKw3w1fmmZkwwwko",
  "key15": "2D6689caojM6keWw1Kr8QcKkk4zHqQ5Z5yBGbgN6YUDpnVmn1CoeNyAfSE6wFLU7uqLwd6DUXdYZ5DdqVQcv9Jua",
  "key16": "3YoyCibumwAzssrrohXpG6SGAckf6AGKpUWvuyVeSsTHnU3W6ka3jSdnoaFWoEkH7u8kwCuWFu84693iVZyqwDDU",
  "key17": "5L92FgjdRmj2eEc5ZUDiHVZYGErcUiRUXYWnsypg3L2qLRdMBuac8PBPfiHAJWVMoPUwfr6eucPXfgNjsBjmwkRq",
  "key18": "2zEyWBrJtX8fdtiT31FWJYceDXFomeEfgmc8iASUPEBYLqyai55EP9y9q85HwVjuVKfEVo9R2iDCz6s1bfkTBvuo",
  "key19": "3Gq329wC4WTScnRVap3to4KbpLiDwu2qgo6dW9Qf9RYJe8hT2NJTf6Zjswgc858mzUskt6qC7aWNAdShdYfpUnGZ",
  "key20": "3dQn5evpp9Xu4ToCehKz79kHUkdXzRMr5yDbAjHhY4mhSufwLvByvYyw4zSPJL2DjJaYsnJtQDMZrCb4yVHV1cac",
  "key21": "3aYgU4zPpawPEaQGQEoj4xaTpg7BU7qGVCjwTkSsFEX7T3qSNi6wcTbWDtBCyDHftAARLp32wJZRbN7sNSeQoZup",
  "key22": "4JViSH36AUg1iW6S2fSb47np7y7bCh9LBfLUf3SbMasvMpwiDzWxDvxSiXejtY16fWVM3tJF4LGS7q1ApCqLyhvt",
  "key23": "3TUjTcL1XV4w5eDms8yS4Pf7MW3N3SmbmrDkcKRps8rz2RyBMyGWKZY5zoQQtHHmvgLjKLfwrhV4bBm8CCLEsoT4",
  "key24": "2mdaWA55Evr9moLsBNaeCaddbRrq7GL2aEgV667BkNgq9LUvb37GqJzf3TPJa6S7hWvCKKbESgATEfwKpV8CJvHV",
  "key25": "2P3to9pYF8hKhLxup7RzNSyy2EQ9Mcrgha5Bqyr8K7p8wPMSCdk2afb2SDT2vPQiHGNjQsX52Qjbvn7nT5NH7CYn",
  "key26": "66br8uepYYMTrPy11JwPPJkcsbLqKUyqfxzivFvL578WhECp4HBnnVNPqZ9i32UVQB8BhKNG9ngW9DzH7n22jiTh",
  "key27": "5axmcVcWd1TXseZ6tdaac6tWRaWcSSNxvpBvDuGuc1vmR4PaE4e3DgyjpAT1bgkbP9tGtb81MesZHtEUxPwVX933",
  "key28": "1SSttDunUvU7YW8VzZXX65baGAeDtLwFTiCpeXAmKnPmoz4etQsSAbN5v9iERZmHGX7DUbM6msbitKvqeWY5oZb",
  "key29": "Qo9pNFBuxqS1Sgbx8etyKhfJtofqsUK6HPFBndwySimXe8uL479sR9B9J9UXiXyPLm25WmB126h5GNcEQBWnPu6",
  "key30": "4ZnpT7nPJ9ng76wu31NHNzhb6tCFFnyPPWapVN1gSMezwJ5z4Nictvt74RizXYMJp4pq5y4V5SzUcX5EMyPVmbet",
  "key31": "3HnPZ9c95yaDUUAuNwqqvRQajfJuqTuckVgmULCZNXHctrtucyqcfHtkidJ5ayDdYm3TtGVorRTMWyswgc6FQECn",
  "key32": "2mFmFhRdANQqJVhv5dCBFbBedRSVfsDP8BPBccvNnPjcso7FBGd7Uzds9zBVqBGuFrZQgDDXDP9H6BkyNqebwxN4",
  "key33": "2sMV9Q4g9xg313nz3cDaR12TDxkt5UNUWJNBFC8ibfQDc1s2vDdrqWu3afzDGVgzQJRgSwjoVHNs2BkaaAoqKXTb",
  "key34": "5h9xpZtwuKM4W11uRb4mQ41bN4ApP5EpLqqFBB7tXdeUmp1SZ2wQ9AFQvGjkY11J6Vs68X3kYNaCwERtc3ZkHDBf",
  "key35": "KDW7zRsz1kEJhrWux9Ren93cqtvGWNdLQLT4TAJjN5PRMbGTNQu3MKWtNojbCdD9hqMj9PAFfmmkBzzTZzj6Btq",
  "key36": "5FUJKveSoaGdXHBqRuz1tDCpwtZdc9RXxBCEeRsyrf8ZP3bhLGjQKWD7Pd7JiFSQ2KQLzxYgtsL8HgmPXvMt5ocJ",
  "key37": "3Nt1eAepEBkJT2GaUMEX4USiK9Soq137Pwi8XfPVPuhagvycggEcjVeyi9yrW7uMocJGiCE4su9e2ojPtgJZQL7r",
  "key38": "4VbSdVSxqcM2RGnNv2Vc7DuqNYXyKUYZMNsdKoPeG7b1y28Mz69K37XwW5k8S3nYmVNt3ksqyx3UEMuJ9Mj6TCVD",
  "key39": "5xp7my7a1feaNkiitDeNiMwScyE53ACkVceBecpGJuvYKqKWwCNLuapwfANqcM9kot6M7pBJtdw7m2yhJNLuDNsF",
  "key40": "QYApw5oE8k8T2uShFyQtRNa1reUd1nHZx5niGnSCSg1xKrs6DVgoDtuPNKhHQpFdhopFjhtDG2nHU6JUQRXqawV"
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
