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
    "2hVWNdbkMkhNeJjNTYX4z8wzzaJagf63z7DepPUjFwqc4HqmnAKkjiY8UivNz1smbdwGwuB1NGw1TkF97DQokZk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWXEKP4vDxTy7mC6jUYZkzPDJV1nGoJ9vAc7Ag8m37upEPoxNVvWJZ8eDywzdf9kCQXG7SfFamWEtL5DNuDebM7",
  "key1": "5wyiqSnNjUmVH1k7H2F4YnnpefpoMkS2M3CcosAQaZ7jGmcTCUtPz3WEuKfyoQckNa57ad4ZUWAGCEUK7UPzr1af",
  "key2": "DisvAZhyqehzhxzqq8TGnQL3wtoEFMyoyCHRirpBcNKpPUe6J9Xkw8uXJAtJZck12SrfY3jRp3thvQkTFw9B3Jg",
  "key3": "4dyncz1AC5wzer49rA1jpcTqeLDBiHiXSPJKjqwgebgndWBXfjoP5XxVA1YuwRjnCamxCzEUyRhKP3idFSEjttEU",
  "key4": "5Qwb5HBsiTTwD2SEy3Zv54M6XuzZtPu9NGL97vHf8bcMNHn176pmNQxJjLh3u7YuJk1bN8WuLRN3NKkYhBeoYTZG",
  "key5": "2ZWNKAKuturoK7QHA4XmiYiC1HQtWFo8DeB6Dm9trcLRjzT53XHZEJxqpVBs8ospKpsKJypuNAiHbxKXV9ghUfyc",
  "key6": "5Ttc2QLLtP2AR9szFZT69WFSgERFq5S8XoYLfn4irpKtzGBDKWwQ37DgzTgDWcZcq5CgQ6DnrLPHrDvGMTu9d1P6",
  "key7": "4a5P1j3X3LrAGiRGEpVKuR42kCJFX6n3hFhaSE37ZVRofDhSeRfBP3i7AMQTwn24G1SeFyzSdT48ciWk8hBftXFV",
  "key8": "4R1A5T4hkNwqimfcuM2f8Wuk2zjRw7BX69ior37gXEDsjLHnUq5iwa5nuAv61YqreYS2DDwCygJ8PoQYxXQJoZAR",
  "key9": "zD21S2ePMJJAN4XMWk8AepUa9RxuuUfNRTa6878nKkWtogHdXtvup7qPcAgjvHp8umkZRx883Nzc5yYe46rfguL",
  "key10": "4omjApsCK7FM31T6j7HwjryeLj4mTMdsX89gYC7vnQDQBnmpA5jfh77oziUzA6paQbCTkY9SyFMnDicuEWKVBZpt",
  "key11": "sXZowfxuAQUQS93YGyxZMqQVA1XKENuWq9tG2Hm86j88M5gKPjoBBvgd3oULLDM64ctfrdbWGGaxXCo5UzuCbMP",
  "key12": "2W4VDzAsDTry3duVsy2EKw7wZhAGnH6s72LGmQnCbLUnZX1KKsvydZ6UDpgUP5pbASJuX5n6s3KEL7vHnb1yr6sF",
  "key13": "3ZT5eUWUjMyGiELvAwmtjADnuFqT3twzks9byc2QmAC3wB5nQmderS8W3bbCffJEfQc6J5Yv1Zo2aoydwFBNDub4",
  "key14": "3BUmb4CC68ZVXNPKfQMpUvj6Q3vH8kgQLTcRNaNaXp7azowx5NrHrLX7TUrZUVxBKHNZ9kNMhbnUHDL3pRu1wJcF",
  "key15": "3fFTQkzfkD3kRobmN3fCkFmgudmTWr87UVRC6Wjycv31dhX5B3FrNsWT4YfCSfF7oVMkaPKdPxU8tzJJujLBpFzy",
  "key16": "3bb81uF57RQS9m22UftW2m1UuV937Xa5Pn5M35BmYKVnBFYSvLhrg9QnyHYBmhdfUQDfdXM2pqgWojj2YtH6mvsb",
  "key17": "3fsZrXMcDKKeQQsgZ4AVQBkTKT7752WB3sPuMivBnjf6PU8dqHbLQXQm7QXbdXgVpC77ZbFB1QbYhuNSkteE78L7",
  "key18": "3VoEFCRfEgwDV3KXtfPUVgEawDxmRyKo3r5FGXyHXBfoXnsu81vwbr5tEA6oY6czA5mwAunwcUhd6czv8mJt651a",
  "key19": "5zcrQxikyd6ae5TjYQRkzq7Dwv9iNor5AjWRYBLqGCpTniPVn1mpabTWSkNKL1zG4RVbsEQN51p1mWij6a4PmbVD",
  "key20": "65s3rLH637BJ2SBj79LFsa5S1j6zFf5Vhw4PkGxBiHvYqG5u1BcN6bZHB77m8zcLLjXhCzzn1D7kSztHb1qKrWRv",
  "key21": "5UwQLXcbwYx6R3tgTRe1t4BNoBEyJSyGkfFsd9LZkU9KFLntLBocvhQD9CAMnHqb43PU2suNuPKgq5xxJ42KHRcE",
  "key22": "5uNMbXCwAQ3GYzbXqbes1FTKNszfXsVvH8HvsKrFEbkkdWAqB61Qcy3u6L6R46bV9JwoS8JhMJGeSieZ1NNCqW14",
  "key23": "2iAPterwD9U3LJixvXEnapAn4ubtSrPNC9XcM22TMfXJw7DawpmvpHuaAEBZaJJsKV5wvjKqm6uqvyTpKKtfFoGD",
  "key24": "3nfVMzEumuMzsuH26rC3kJ75CGnBsV8cph88ps3tJPmWhKvGt3d5BBYWCpDMFoE99QUDMxqTUVY8jKYTDW7BhRqC",
  "key25": "4mNTZbAftZ1TPocDxqTbmaHj2oqEkPV7R6QRNxfRxDYnTdpMeTjdsK45kx6Cm8ETtYse8avmsRmBJYr4BFGfTjaL",
  "key26": "4QBXGLyWbphwtxzH3wjjun7S29XAmPatkmQ3F1AkxNT6454hyaLoaK95rUyjq41nqQ6o6YCZf5Patx95qWQJ7Zoj",
  "key27": "63UF35qjSmi7NEN1fz3iA6WNvkJz4htdSWTfVZgznxx5myd6mNqFBPYoQJnr1m1DcwS6MmeV5zwDr9HXiexKiciB",
  "key28": "42dyK5XcoRcR5PEXmudHwAFV1pEjxtTMUNf4tzPocdgxUBgFm9Bs4GnTcfHkyAgABcQX2WrEg2Dmk7u7WohznkX2",
  "key29": "5FBeN2ZaFxGLy3taJDfuakxjo9DiSWSWRKDNY6JqxB8TW6qkU1JYMG15DgAuLWXseUjAXcVSoTLFCmYXMib8DVbG",
  "key30": "4TNqiTaEvjCSBeKn5yVD7nwrVjMVu4MAvMropRgVMFK8WXgPC5AzjPBuTJbG4rKJFWGz5iTL9tmus8Jr8Tjg6mhH",
  "key31": "n4PVmkh9P33YkyCAEpFsWeygkvTDK2w8Hm7YhL3VWGfCqJ8pgg7mQrqeUQGyW9jgVfP2hahgESE6CMErHEZWGKi",
  "key32": "82bUjkQtfTZnKUF1vA13Qhn14MoitaDX9oUApR5pRyt2PqjC1N6LLfRFYFsLULpTrkitSNQ2PoZhGaGCccNwCwb",
  "key33": "4XxAGJkXMsqVH6drcx4mv8E1DERbyLbmnVfofNbQ3aEV3dLNRCy8HPMuXULQmy98gEUhMREXAf2m1xQF14reHwCG",
  "key34": "4CMAniA8SACVud2HScugsAXEnusQMfbpCaQZ9fYFkA7TnWouw9m2pC3Uh5EdwRGfUMwxVoF27CHdUM6wTF2SxF5Q",
  "key35": "281pw95qMyKPEe9fpBQMcNN7zmrtqchYwSLU4s9rH8pDxwnDVgbjALXaZQKWNksTh1jNiYAqMJFymzFBkWoEYbYp"
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
