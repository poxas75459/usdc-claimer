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
    "2XSnWcUVtSpJV58msxj1qVotexZ6bzPKkW3r9Xxwjwc17Qyt7U4it5WZryLTNaqACf6ghHuRmjzNwdnFEDdp5XwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iF8CpJpG8ehf5qEM2AL2B4v5kJgZb7dB8CW1aqQcj9xczBrLfrCfYjDdtsnSeERyo4NUspKhdBEUqAVA9PkEpqz",
  "key1": "5DK318dfBNauF5PBxu7ug1pbw1Ety74qCmZFxE8TjF655Wv4csqEovv6yP89Gh335UdxN2wePdcVHX45ZbSy6MgG",
  "key2": "2TAbyrBv9r8hvhvbtYAyiq6zr3qeX6xZ9jTMHU6qbNRW1Rzryipr8csgDu4Af9838is892XzQ829RY67VDzHanwB",
  "key3": "3d2BxTDCziQxxiRVUgPrknjMH8mEgGF6niSzKcLBmntXi4HHHCVHpBUuwBafX9njvpd5QkByaQphE8Jxk3x1hnMM",
  "key4": "2xJutDcS2kq5qri4jE1ax94bVRZo2wyhUAAkaP68gA2jR8MwPwYXgSBpgbubUpW31PE3PUV4c4BvfkH3ZYsjCKcN",
  "key5": "4yiRKm7BLfBDRCke7dREKM1eVKwLcPW4Pxk1FDa1918cdspG1Lwwd66L2R3zaa6V54nNCWKLChEcF41vAEQt8pP1",
  "key6": "5BdW45iT1Ma61ctobKj8YCte8jhUvFoSpmatNrKDCfDMiYwn3NbzmgwQ9fnprbLCPPTfu64p69DoRqtbXAwGzo6Z",
  "key7": "5t4isJUpRYsgc92QKjmaRubRKFD88AULs2UTeCx4DyzEZeH2nxWFnMxxFBKRbBnLEezNf2kuq3vfEDZGs74RxXA4",
  "key8": "66vwLHZrLhE7pnW1YuJEe6byuEXFjWXiBxLXcNz66zo27fraSBV6X3AAfzvmczB7QGwTGJCwwSjCFdUYvHPZUbx5",
  "key9": "2D55imei9pvaPShTcczggBsXJZGuxoX5w7ymPhNBesNtnZRh7KWK5pi3jzmJjKyMABJYBTsJ3zAToduobLRr28f4",
  "key10": "5BV2EJPYXFmKuRJhULtbccaeX9ikLYLvieaVMC9qDn5FHpzMbnzwjhuUaGZhL3j5kCD3nVQpEfZo6H557NPxbJev",
  "key11": "3zpxxmfWkkebHQgVwshdHSkfojuYa84d9iKAdoMnjiKKZ1VbLMnmC89Rvewdzy6X17dWoz5YMm536rpp2asebcAY",
  "key12": "7TjByPK6UYb1HYYQF8iS4L4XxBGhKUVaPMqQ263syhQKhLpx1Uy9qciyaqugcXjKBkhkJuWjAkV19uoHprNLHZD",
  "key13": "3QUqLYXxm8ZFHmUcpwgGDrfD8D6gjAf5kupQWBjVenKQfAcY8ZbibgVWFX9oTKJo3teyobVUtDowYMd2Ma5UeyxU",
  "key14": "3Z85xyXMKxndbJqwAdhv8ZLifLMX77427LhpSaPULbb6az4nzzmy3bAr47Ybdw5TLiE6NMifwTbngJXxgsAuxYQ4",
  "key15": "611XCh4Mx6RT7BbFdFqZ2RnYFX4m51FgmoH7xMAHFqjQ77dGiiiibgLnsiAf9kn3rsHJqdEro8v2DYD1HmYrvuCc",
  "key16": "2DKo8oh9UxS2FMxntN1X6rEs5S8i3L3a3vHYpkrXxUC8n84vs9zssouXxQHib14Yt72Jc4uyQdRJhSBSyzGBTxte",
  "key17": "5j3EfiZtyL5MBi6UWPj2XwUStPfBEnAMaD9D1FZCKRyx3Y4NJFPCDK3ksAiDjHU2mzunkigrANhJydGWvg8oNU5p",
  "key18": "27ffySUs237HftfKFmGWxmircJf1yLiR45on4kgAXhFiL95uYFDrVthWPzw6ZZaXbKVi5DkTiLEzmvSkLSkBSC15",
  "key19": "4Xx5LfcYbSQWGj9VfK6M8cTMLAtEHfHAnDZczuLWs8K5Yo5BSbS5VnUQ2J68rv914c6dLyNzWFiXphEo6FAXiWZJ",
  "key20": "KwMbbD1yJ1RKYSz9q4G1MbntkiLTZR969otxrLYHbGrCqQ52DcwUDi6tw8XuBUiyXePrRvjabyT1KdNTT4tEBqK",
  "key21": "5t2qyQ7bgTyqVfT3ufvbcCgKjeT8gxAUxnE48JuhCXyXvMhhjj24APsW68vs49c3hfa5ECUmXdheaBAZUWe9gEP2",
  "key22": "2AfBkcMkebEgiohsBQtVYwFUZDTk77pXAoPZGbn2kBgHXWsY8A1LxixEeTPRwaWs2SJiQKDBN8WoWXBfjSVP6sAE",
  "key23": "3mbho1Ffk5gMrYNX7WaCqQiuWaaS3KdGXzKPiPDhTkPsRhHR88r9DL98w1VXGLxKhLZzZbBc6stPnkqFjA73S59m",
  "key24": "BtsYjHLPSwAtLu1eBQcbzVEv9rnQvvQFrhx9gvmhjfXbcC2xSf1NJ7eaabRX8yWJf9ezQnRbeKgzXrg2nME3XrV",
  "key25": "4scsKJ7LoACSkcj2HPjs8ygb4Nvx2ZHQepTSDwxza61RnzdDBqu8Q9UWpnJxrmwL1jHWjYkYSnFNE93t2sMmsq5Q",
  "key26": "HdNQSUpNsAqqb2Fq72zmMLJJw5xwxhxHwDP4svGVoUhTqoCaeXxLQ7bTPxzpde9HB9doCW9GE5uPTUau8xzq6K4",
  "key27": "4Qmr3gT3LuqBJbN21d1R1HGvGUaxz6T7edqdEF9TdZbisFsnxstaJyTSJrHVByoqvwyjWVpjmvcWPT8FUwTCEWmE",
  "key28": "4YbS7UESRhvsWw7kp4M11kuRuPrXjEGmjFR6JbLTuPW1Dv12HXBFzgjxQBT79xYiF2JnuQF8PhpvRu5V7DXdnzzW",
  "key29": "2SgPF2utKMxueAdE1oamTs4aNf6cL8ACJ3aqxmVZWmSEof4Qs8Z6LoP169HFHbm2Tzh7MAMZDhwPbfjKFZH44TKB",
  "key30": "5WwAx9dmA9VJQP91RaA1TFKX9ZKsofa7m838eWEqR6FEZ8p7CMbkYcf1pr19bGZKbfFtcVYE65wQcUk11mtdQXXM",
  "key31": "3kzwyVaadFMQXM8AdfrBoSUE1j7frv26Gi3dfad6LHFsyWCzbJuWULBWc65XhpJW6vUmDGdzXqfuK93PmWkSNxAz",
  "key32": "5NzAdfNAXFzXHuM4oCGRMWaxkgfaPvtEjkuEaqFGV2QV9xpXG1Gsw5bE19hm4tbLzk3N65zs461s1WJoBgUWsVj4",
  "key33": "mEBYRfN7b1X1gDTXvD6f5BgTNVSse2hkEDgd8A6zVc2vnzqAFaL8FkVD6BtRhzWnbjN8KKCMMkZjtrsXPpNEVLQ",
  "key34": "HmNQimGGoDoxZ1GWEqPCyeohDVB9PwTfPNDKnhmeECpyYYz4CYjSwpvsnrHsXwKfL1VCA48Lo7oNnRrdiFQ9H4u",
  "key35": "2P3h5HwwfiVAPfoH9RYj3Q4gNFsjdPTUEuWodTFDsDMQjjpyPHKo6H1DTtUSiDLRYqWQ8akGZaoF3XWt4wsFGDmA",
  "key36": "5jy6U8vHJR5MZsptxvxx1JgaQiLV6aJGHRMaCcZuBkkSYenr8pKZugM4nMb5xHqwvG1SJSCmEiVXWFXvs4WvGwmv",
  "key37": "4yoXCgYYNF272c14Zj9smQox7jciTjgzL6EhJ22Kmzkn8HJHhoeuVZ2E6DciKMMY8Dc8N21rJmexoeqtYX6AhrSh",
  "key38": "Ugv9kRd2Mn2SHDRTpcbkuhsYmmysDWTCmdt3huuupXMGd4VoFJd6WS6C2JzRduuqy1bWdNSUyLHPYCT2SrJmBjG",
  "key39": "4ryZ2UhT5nhmu92vRVAEaCnJXWnFVnbBrWpnvtmW3LyvAAEf6DyCzc7wn8wgbQo8B9tEnKGqhNAS9RCdGH11zzQT"
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
