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
    "46Gxv9NuxkYfLX6DmtXB6zBDdGetHDeGDZmwkb3gtCPhL55NaptJRfht7naKk5kotgQrwisRExyc6jNcRNAETnyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ryJGkef1EeXYTznbmU6kUoUeKUKVfjc1ko6XUiu3cLv8hrpo86arAJ2hjd1Tr6SDQz9t3RiBxwRvDQVusckMvpe",
  "key1": "4Zu3twg99jc26GfLck8ioPL7Crjstrw9HwCYFrFtH4Wiqh2b7KXTKdrpDDxMcT2i8Dwohr3v32MqWTD9AMe536uN",
  "key2": "3jx3wBVnfNufwc7HSdtgE8Ss9J2pz7E4Y8dHfMk6ESEGEL7PTK149mwbBjud5pbidZ22wqGxqmKWpNZuiNjTMXHb",
  "key3": "T2DxtMSe25wwvCDtuKrHmQjUhqEn5Defis1sunnPvNsA9PUNzxAXGjRcSYnBZnfxeJdJzNxGuMBsEwRLMNizfwF",
  "key4": "2zVU12Vp2cKUvqnKTmQbo1NhM6y68kACpNTU2UbyR4VUyE6Pv6iiYy21XMzZgHBaX6rSAJXnT6wzRVRgrp3xzSWY",
  "key5": "4tWfJayD5vgd9u6aLcXaXy3eumktePnXGKjfMayVwv96oeaA2uSjNp2mMLagFVPxZwMJLeGW4MAcEk3LQrcf9rDK",
  "key6": "26jAndQ3NeXVWT6QwVPzQjJwmSKNFSQqi411qP8Dh3vovcc77RYpCL6dwX3a8HLbvmoqM36iez6qEGBF2g4mraU1",
  "key7": "4x2T1Ts9p5MmDvcLhgJGmPgyVnqhYZwXJdfepD9ew7A2fstMpWrmvuFJG6HQ4ozqGG3eWPZYoHnUFfB6nD4CyEg5",
  "key8": "4g9iZ6KCnxdrueKqtR8Lrxymu6W5BWwoS49vfzARBrkeVFkNmfK8oYsadJMYtkX4Jpk5CACmhqwtpZefim6aPPzJ",
  "key9": "2hC4AeMTrMTqbkCT2NKMBNPncaLArBoCruTW8eWdsT4F6Pjr3nUAVaFQXyuKDcBGK24MWiCwravg6h46fjzDRjcR",
  "key10": "WHXAfhNxytMLn6VgLRN4B7Zma1GmNHrNJ9um93TAPYA48WRXhYDnbq1bCGdvUefdkpP4yg5bAVZ3LrzPRqn1AP1",
  "key11": "2c11SSWFpNSLpo4fsPba3hKBTu1AexokThapB33dz1Tjobjx5NNPeWFvWvozRAcqiBXC6bEF6cMBbdTsGrRLbRiz",
  "key12": "2b5HKw29qTpzNitTJKvp7CsVZt4k1cAjVrRfJqcs2p5m2DXYFmuU9da8y3FYcp8bBC8A3CdcvMjzkZV45VrZoQYf",
  "key13": "2DiwKrqbciDLseDPVvz5t3CTtXG6yP61EqCfhRVqJFY4GTKoY5NAav9zs5aTwK4LAetfcKddAxdSt5adigEdGUAG",
  "key14": "ttVzu4pPKuZkxZnRdEXBqrBX9dJCN2uWty2UXTfPitRP51HR69wMmW4Jid8PCvWTLNFmkVcHofkznWQWHwG2Fvg",
  "key15": "5NyRWSgiKxfTXr1mx9YJvqmvPRenysCwjVMbLxFHdcvEoy5LNSohCQh2BpFEW3fBzjnDiHbJGdN2TQeqHhVtF3dL",
  "key16": "2QudFJqfH69hDD8FLw8jbFySsjb7Lz2ybjmJZX9wGtMoP3GTDwXkzK29HXJKnM2jR8pyMjmmsGaS8DW8oZF9E3fC",
  "key17": "NAKiRRd4xGai24uiHKMPFSyDQSe1SJkcgj2xWe8356tW3LtbtDzKEKoSeUv29xp5uQMpjNJohSVmrgdqEh3MPqv",
  "key18": "4AMTo3fJrjSVpDUSkTK913uop2k2j2AD5uvFiEsYBg7sqY8urCPwDGYXyRyXc9zLdT4kQVQNgymF5EaErJSQFN46",
  "key19": "4Y5oAAxZ4zEmKwLTMsk8nmM9e61o2UvdeVgENkCzuioQCdqS73A2aZyzz9AVt3L3YZ6yhpo6hBrvqTDUQBDHqHKA",
  "key20": "5cRDoR6X1AgX2hvkSsP9v3aFqd8qYhMEkBUwQ5mWKFSgXsTjurfVfMwzwYVbzSeqkC6Xqa8FmzSuSNFTwYVKmzFw",
  "key21": "4SvVS3ASszqdRLhLPjUH4intnzSE3PwZVT3dQuie2eJoKw57WxEeqsLm7JwHQ2ppTNwfu6JEhw2pGajqvojcGhkq",
  "key22": "h6mmUuDmavEf6XXhQQc3S3q47aFxQMCKrNAv69mVmYvBAs8zvBzmosbKNpcWffCwbxrvG7JfLjJSrcRgaE3cjwC",
  "key23": "pHF4yNzcrT7mhvTJ96Mjv3YWk55QrzdCN6bkyoYXyH2EHVDP2WPbzMnmccmHpzwWDQbqBczZksdEY8iCauPeHUk",
  "key24": "64ZAhMcy17y18XJjA6gaULmpA5f45PEGVGSiDhWBXMNuv3ukdEKFLavZV1Hagh9kdTgFGU376xoGrjw3SfEzuCPx",
  "key25": "5GSnQVnqbc9ruKMYoRHaRgNeDGz58mE6hzxuhnhU7pd5NW2tRECHRYzLDBLSPSHDX9183xwG6Rd5D9eGDBEPUxSr",
  "key26": "2m5ULGguqZkhiyF3pjVfHXuwCirj2tCdihRHYu2hDs2FTD7vimsFKfE8TK1eLjTq9d1BgPt2p6MM1vigN57SxK3o",
  "key27": "2uGZGdCvaftRY3YNNnVn48b3uQjPvAxiuLKBijydCr1fVfJR1FpQKhhWWqY3d4r2kc4JXWftXKpFfQjLLLrd7WT2",
  "key28": "7hjhosovZd8BCMFHiZ4FsfKjYkpN6TnRcPSy9m11HykyG1Rd9FKpdQ5C4r8oYaz4rMVZ3rcbgBL4A3QFtJnRMoz",
  "key29": "5t61zzWaVW44ZdeuY1hRxsfnQZfsetW8g7duNsYfpxtEsKeSVNRyJjMKepiowCNpk9PfUVcjLVj2yNcyVcMgdoCo",
  "key30": "BfTSwY4JFRKWFg9VBY8TPZw3XYmtEtrDQWtaUyXXtg8oxwK73RYKmiyTQs98ZMyUZEAVx1T1VCtGDFv4ad67JdN",
  "key31": "2MZQFr5Cg5iz3CNnepzg9JgPdEi8eV8Rvvqg7X9PY4aqfCEv7LBxEEU119ZK2emJWC46ZBNr59KkYauXTpzVD2rv",
  "key32": "3vF9qFeZ6K9BZmG5Jgm41w4x2NkyiwDHAuVdtwSEPwcvzGy137GWEBKUqeU8MgDgNRxZivBagjuZ2TmiADF1LZ9v",
  "key33": "ai9UcMEcdj47wv1LgKDzmMkwNeHygkBQivyu2nJz3qcsRCc8MMh1KrXVGd77ftRgLVVvANEUkndeyVriqmSDRrv",
  "key34": "3YXS3oAwfnniCHMY6CrK2ZQTcLjLTwVQ2zUbLevfwWTtK7GCRrerfPyroFozXT3zYkZiGFEZg3haWtWBUmuq8rzw",
  "key35": "dquWP1jENe9rBY6vsqix2kmK66mV1kYHdWXiWjdUcGbpesLpgyrxTxp7UXJ3Y1PuFoWmXc6qgfvjMNmGD1DNq5w",
  "key36": "2sTUBF9G8Qb1gbqtT4SVMX5ft2P85zDCvKHB5YbKBZpWbr1aV8sxvat4FdKKURjuAKAMZjyxta57vBF17zJnkhDg",
  "key37": "4bxpkZ6aa11UKnJmDuvtPkDqaqnGYQAYFBuoMaptaEDWnyvcg4L1XxRA4vk5UmPzdHzeYdtVZYAe6mpVGBfND6AL",
  "key38": "4DqZWWRqncBasoUeNWNNja8iNGtDM9tC6LfjoCwqEmPsL7GhhdR8kpXUToxDyQkxsTVsovPDvbvdCvFQcuqN4t5A",
  "key39": "2Zm7mCNSToTS4qnfHQcEDoHtkLMtxuzG4yXyexLSwV7a91ksBp3MYW4FNQrDhKZ3U2F9Ph6F5S1Pj8jGwJX4gNsy",
  "key40": "4rf6vJd2pyEhzTBWZTNLgRLetwdynkgLMPAWA9bzFwGhya6HTWjwwoUzYY7TCV3TtwVHCiBBLUhJtWy67XQg9deb",
  "key41": "4xkLzKvh34vDVK2h3bfWHZCscXdNTnhzQqGaEa3FisixhaxrH1GUTsnqnD3BKuC6sQiPXQKdnnG5Y39qFrhh8NNA",
  "key42": "2czo9YNhHzYUsHc2eWTfJC7DPjzA4x5Cwo9Rt8BNW8AjP9Ys5LagTpwWTM5EneXnkwqMpn2FNqVn1EKBVP99YJjx",
  "key43": "3hBZ3sCgS1zVSaRPM3rjDXNp8MPxbt33LjYWe5Cgup8K3hDqwS88Q3RfEoQELiCHFJfuPssz5wo1AmJYtnF21YLr"
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
