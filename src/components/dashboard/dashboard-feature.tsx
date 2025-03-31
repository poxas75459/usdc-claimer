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
    "3XU5QJfDNxtQfeHpExJ6HPV5Ue33wtmTUWDkVDH9K5zWvgC3Hf3bx3HgTc3shU3HGkmQ62Tbm6F4wmxi1Z7XEzKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vm54MC6gWZoAS9Xx6yXQj4PYR3dReqzLYNHEwZSx9TSraBqyNVe9o1qjbeJhM44LHieLQUtffnuPsduE6JzSoZs",
  "key1": "2BYzLexGbT8NGf2938pghmjXNPvWbi3wog9cXwA7tBHzB1vUdwUXMuasuV5vptc2w8FvprB8A6NUs2GQE9PFWNwF",
  "key2": "21C9rM1BXtWCxEGc6oxZxfuj8mauJCM3D1JPmAfA3ewmtdvQYuCk7diZH8oz5KTWLXSe2ywU7J2g8wisX19ZxVZk",
  "key3": "2qZjYL3jVfwdawSMezK2HUwKnZHNmt2bQHdYxqt2vZFJxjMoNWTzr3a6LdVKs8hxe7WAYjeekNPD2asV5UAeoypo",
  "key4": "56S8ebhzBAFqbRt7XvqZRYexjs2P93njY3YZvFREXPrtKi8FUsu46xWc3At3mCak4Ho2FZXsnEPRwXUQ3A3VoDT7",
  "key5": "2U7vtkqknJZpBxwYPKvWHymNkU7W4A1TgyLqPoDEHDfW966mGdqyERX8d7kuaD9ekjZL6AtTsrkRzD3F8QeCyJAg",
  "key6": "5znffjzCGRSStXu1mwL5fLXTb8HxGrUUjkN2y4Lonh9rR6dhsm3fcdxAhbjmeBma4miuqYWzW6eAzmBmu6pjF8y9",
  "key7": "4rocLgmLebTSi9Y3AGzGPXv5GcUDdoFyabwjyiXqU6t2FZ83wKPzBXmLu5dq3bux8VbZgY5BNKrc1aVvik7XoYfm",
  "key8": "2kCgrxS6xr6bWEceU5iy9HWbAxVfqXWAr6y31uJrPSrG3uoLEjkqThCBe9bPJv3g8jPedjUcmobcssBjbWXNg7dr",
  "key9": "4AAmPMGZ2a2ThXtR83nTeARJdhA5Qoh86M6W9URCADWVAzCf6UFZu6b4xfbcddES3rr4u3fq2xAa5NYAxTNsVoXZ",
  "key10": "22bRv4XTNTHAxkwfpiZLa4XgMhBWTGWfhwVTQj4k4Di6uw5jxXv7wYh6XwWZaTbBYuBH3aGwkugMiFpDDjda1QDM",
  "key11": "AW3EBMgNm8o9f8UhpiwcsJxPP2yj8EiafcLgAYhi6WfBed24iX1ypRQk2LRKa8SUbSzJgFqT4A85N7Nqps1gL3s",
  "key12": "Dsk9gQCGqTUL47pYGDHyGNhR5KpGj1Vh4RPYgPc6W5ohrHBcUmwmXfxEsi5QeUM1ZCQus9b21zo62HjnMDj6C2B",
  "key13": "2XTCCfuetyfuRjUwqPjY4FbKxG3LQYuZboauXbUyBJ7TX323oxWCSCKxYG43nsgsM7aJ4NdkZ8GEVcXq4oCLtCDj",
  "key14": "42od8M1LGtbChKrcQ6VGi1TgKeHpjyhLcvq1BVaSLLZsnQwSK2nMVaC2aX6rGtSMLL5KLcfkRxx7hiiuNZcNrpfF",
  "key15": "PZJA87cz45ExMT8haATwHyAXwH3Mh6N1k8XAPrFHQ6Byf6wP5ZrPXfiwMMUTs2nqd4Evxb7iqcJAgxCeEFBNpe4",
  "key16": "t1JXe3JQ2hukvhHCqcsW2LoBGxLKSme6G7sVeM83eGTsZJyDk8a15W3hV1JTRowy2gugCCKBqGzY4Jo2y6Ppxff",
  "key17": "4n7mPJ3KxdhDaNRBmBQqKY9nShYRB8EbyCxqpYu693JjinPgKgpABvycfCkVCCdn6drp8LHwx5pZKb5LFbx7Jm8R",
  "key18": "cm7sq9WTLf1RzY875sC5gw9mKLVJNgiDw3nkrWbxzE1qPib3ZijpkWd5dn5sFmvaCnjJ7sDxJnBxffeb4hv3Rhz",
  "key19": "4Snqd6Hrw1MASfHYGTo6kqvxJQLZeyFwjKum4bmTarcUqhL3fUqXot4cyVmsP7kLqaTKy7j3KsHuHEnD5cSDyDM4",
  "key20": "Dd7BN3kDwARibxnz2AKD4jSe4c84XHqqFEPw1iHPS9sksqrPXDRn52SZF6siZ2yUAM48ZUJgvw2sZDtiE2FLLvq",
  "key21": "5DN7aecdfCnAAyTrG1LYy5SaXbdQAxCsQZTRaEaQ8oJgTC6eAm1uu6FihG7jCcmUXtkKyXVtX1T724kXrBGXaAPu",
  "key22": "5EniD4rb55XmkFqMvdFnSLGNqcLFsGo2sSDAY7vXmxqfErfQH9Rkr8VbWrULT3XZYiQSeWozAH2BcckhGFD5ASR9",
  "key23": "5ymUsjTLfzFRWiR4FsR754cwMFKFkPhbHGws1jGS92X2T3t2pE4vnzNBs6DD2xypdSwXb4WEVNLpeUh7PW6YWHHu",
  "key24": "644gEjgZbaVHyPTDsrbxVVHF2QH1jXZK3XKqnRWJQG3T1v9SKt8TtEWQ3ZdMyWkF3bNrgcX6Sv7U6LkRyFY2PmTp",
  "key25": "23WH93hYnUPRQsjHeBJF3mvgvLSFUB1DQZMhJL7uYB884qy8n1S3vaZ1G5p6AY2EmswHF8bNj821LEBjZ8B9U6t5",
  "key26": "3ec33pTheo32HYs5rnNwnpYQHWYFFVnz5kgL3EnngNS1qt5ddoxnVMfKFgP42SXYQ5mnUKsAfamBgfT96owV3A6d",
  "key27": "3gm8Mxek4kGgLsJu3b7L7h4ULgTevezxtk5qmBaieg9E9ptfFroaJRhUFwbf6YBKJvk3NLSKs2bjxm5EE8eEzo3a",
  "key28": "3e4YMDFF15LR4hPwRGMibxHMW4ESweeQdAyV4vuDpRbi8hvgnSJyaFuCDAqZvrC4MRGe4CvmHNHJ8Q82H7Nh6qbV",
  "key29": "2E4Pt3PHPmZ7xTSmFWSnXcWucKzuCXFuv2pF84N8wBq9mYF9jtjiBQSCv14HypL8dzfY2neyZthtwdfBPgknVzdA",
  "key30": "3mczA2gF5gf27iFdt8viGsP1wJogz4arUsr3ShGwaTfmmJXPMGH4iDKntVjapzEwTSdSoeJHoyfeSu5yW3m76jL6",
  "key31": "4zYa34pj1AqeKw5Gj4YSDD6gNeHMSYmSJ9f9AkZRjaUQuwMaWScrQ6PXfjZEXRKhs9gZ7zwXWosiVnLYyQDPxJr8",
  "key32": "33jtvjueppGAhvEMfZYyfBN1vVM3qjtkuUHVJp947wh4u86Xy66Pc59xYxHVD5ES7VLge5FRvp6bhiH6PmQ2kpeE",
  "key33": "4Td8atA42bPsttL8nye7j7XW5N7gthvxrkyMQMRnaS7HJrasPFPwG4bg7fmqgwJYn8nMDjBks3WFpK9VGiseKg3T",
  "key34": "2PVzi9RzfxrPCqAcPufdag7adrf9ruh1SKUehFWhXnhtXeYProAR2Tua1im84yAJXb26yrb68uBqhhdLhJr8rocn",
  "key35": "3TrvwmWedThLpEHPrnQkowwhWj8n3u5C1a2raN3Ppj1ZD8ciRyUtsJysCbHiYNtSV4FtcCBcN5YGDYbxZGuX2Xpn",
  "key36": "uq49bPcdJahh7SP52fovghDY5gn1Bs2pnXcXfTjW7efaYfif69YAiTTD1fhrNfGBp9DaR7x4TiaydQhTmRKTK1G",
  "key37": "jsmo3hznPzE1FyN5kTLzDnw2VGyP4TaGTbksyCex3vCAVYjTbkcUYAs3bYCrpYwo4P4VMxSjKUg8RvFrgMozhww",
  "key38": "3FzLjGZvSHk6NRKsNf2dx3CZVk13kgZqSrVyRjEbCUnFo7Pt3GbboabSJxX7XcvZNHr11ECYTRfTkYMjRSLfQcuA",
  "key39": "4G3BXD84DdXthZvDSHSHagSQh3xKRogRN73ChvEarC67Q1w5GPDmaUa4S9QdiMuYnVDb6EvJRQtdv1fu8K6epyzk",
  "key40": "4kLTUbpZjuvsbFNFv19LZib3kA3ML39c449WwDso7iijnZJVFJCQToPGgBqBi3AV43iQzfMRERwY6qG5RhoMNwRT",
  "key41": "dR521x9SoJTGgV4aw6NAv37td8GgfnzRR9dFHUq7UpwRYNvwE3g8sHKtvBLyXAtZGrXqoy1DdV1Ac4yPTFbBH3L"
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
