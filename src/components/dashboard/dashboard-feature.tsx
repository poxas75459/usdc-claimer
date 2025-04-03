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
    "5jS31Ky9WsSkVcLqPnK9uthWAaNiM77Y7rutBrPRuBoEdbxrXZwbnt5EuzBpVgvSadzWDyw5tx3w8nAMFUUqPBaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmKfrYqUga6ezqgr1ZNxwgyFAb9HzazNPbhHNFoFmzfusw8DNTaUkf6RtDUQVPHWuu1iL5aaEDdpFRLBtcpPUQC",
  "key1": "45yTCayZtTa7JX9Zs9f8vZgrs8uvNFE9fQRyzRirz78ELNTG5qB1ddocubvCRdiELtU2mbWPoNo4KoxJxxazaBM6",
  "key2": "3KUhUbUPsjJJjtrWQ48UbGFszHT3sYnMNUfcxuPQMpnDXkk2KitqMVpgdLbHWMndWxuuaxEgEsDtCZHGDpTPDSfK",
  "key3": "3rcxMohGmgL69yJuopVbHGWzsc2izVFNVfF8KJHFhB1UFi9mi6m1jkgS79i852exPXD9c2JzTr786Kv9jxgiY8Qy",
  "key4": "3Mnhs7FiDLHuR71N16iDzjjpS8ywHTxoGbvDVGuhEqiwWNvzphcBkiuBW3x5wzPtx7HGnQoSAJo1NJVYKxzav9ip",
  "key5": "V1xxjTDgN2jme8Vb7dgnUDpJG9uHYPZ2XLWgo4zpQDPhAft3DjGSevB5TKzNVK2ydxSJKpTceXm4cTqUMWzjy2s",
  "key6": "3m4cWgiTj2gVzuji7qi2b6jTEem8B7CZrPs2A3x9gmWW3S6RLYM445R1enmFTmk4CtnyhAVdXoa154btcNnA6jDu",
  "key7": "3L1ccnmk7ZvAj2ehDvpkb7LWZvroXYUZPceTCcdgaFet87B1fYTLiui8DJb2itdF1UamyTm36DCBznAc7CJHRZ6Q",
  "key8": "29VrP92R8udjHSCxrXNwrYXmxV1dcc2Ur9d7JDf9yU1AbcKAKaX98jzxGHQh23QtwNThBhFzYKmD5k1unaheRquF",
  "key9": "4PhSMmxzkLFLL4MkC7P3MvzUjAfxFqLCUKq4fWrd8Qa1UtXLRHteGn5k7tN8ZmCBBeAQSYrGZNngJoHxSDZcvGc",
  "key10": "2e1fDwQ5QsWUu4nV31657n6wKHSJ9Zc5ufoV2y4Mj578pNR759fuYLzNU1ozn4zUfVCatnZPd18P13FnddFqxmoy",
  "key11": "2xWofS5bh68HDjfSvWWHMf1W7L7qfwDTpmFJCTfVKU6ZniZjkShv95VBf1jcDXQ3PuWnw897KvwopBwYEHnDEtGy",
  "key12": "Brp5Ubb8HGtE1SkGP11x91GayShUoEY4v4foNXRHeXTPggyskgnyvgDjr36X2QSS1A1L34av56qaXmXmSFLb5o3",
  "key13": "8rRQEJGdtuowrraTs6zZV7z6JLDfzPK37m6CGAhdRJsbEh4vRRa9Ax9SByePEkhdgPN9huWj2cZw6iQpqdMBJ2u",
  "key14": "2aD8h91Qw1TP71uepqWFh2ZwoHpfNq6PLi5zSogmMaSDfBHebmaMxh3Rsu75Pn74WTi4WDNeCw9RKDCKJR3HYjPP",
  "key15": "3EsaaafprxmFaYhR5aVDSr7MsbPEw23JVoPAQzi6crezmHK9CfptggGeMEBD3vx8Jvs62XXbxvRA7VRzhD4H5iZk",
  "key16": "3SZjmBEegjYVY7Q8h9qXB69ESQC3cUCMo8GCyKDxnWwpYMUbEeXkrR5LijKS2BC2z6Un8zpoKBBYX4owTBF9NbCk",
  "key17": "4YRSzH2GmQFERSnUaKPzb1a6Ca1Q7Q8U6mYghf8jp9whq2AtPZEX6d13oxxumf1Xhn9okcGxNiHVf12zxDNbSGdV",
  "key18": "5HzuNGZSuftAtSpcCMFTreATR5hJHrEzaD1QhiQogUyCZiKJQ2wPHJasuoYUN2X1qPjYc8rusNixYaWu9nPRHV1E",
  "key19": "3Lo9Wh86CpCH5KgpKApP92bnSxda9xvWWX8R1yZ6i7WL6p7CAEkG5i58ggyjzfKaQvG4upALJSAkfLR2obsxq1zf",
  "key20": "3N1LZUzyRp2XqtGeqRaT3u5Gi74GL3CWoQ5e9xPvFb2zxcCDynq9x8rixAnxPCyQUTMRv2vEa4XtncQAhfjCYzCc",
  "key21": "2sbMF37pnvbP74cD6rChpNEHBgJ2ka5njZAk3ZFAfjBtHPA6mHirrW74NSnCEE6Tp6vWRmWaT9EviBeLg2ESPP2A",
  "key22": "3bDXTbTx6nF9w3pLExQjdsMTVw1nZtQUAKoreRWD6DyPxKiQtdvt87By9UeNphG6dC8TtezSALMGZdLbapL1NC4K",
  "key23": "394cpgABbCusYjL3ihuyPFG3KDozsoGmztGak8asqboZEaJi7zb7X7gu64AEjCNikXaHu7ZoD7Qb2Nf1rTGoig98",
  "key24": "2ZHpSiP2bMozaCKKN6GgVQhqHtBGm2ro9ed172L4RtATB5cCA8B9w9mxciXD6rnubZncKWPUkB1MaknQYMzi5dEn",
  "key25": "4n8412sY7UhjFpRtEqwEtVnnjekL7buurXVFJ2k5hM5WzmGmYWxKC5dFKeLMmXnPmdybkFhUff21bUNZDuAbBd2E",
  "key26": "4QzNg4YvVQMkeeRX87RNaCvF85gGEdgrgPWgDwKtVevqB8KssPLKrpHoZ76WXQNQK5BHNyTP2dAZMyJiJBdb2GuT",
  "key27": "ERnYyvdG2ai9q3AFxYiu7pqWnqNcXRw2MMxuYH7iHZRNfypQHxUUL5k4GVJPwHL1Pf1oXpqHzz3Ho6vyEdH1tjX",
  "key28": "4uqjoskXM1yfyYUxSMnuFbxrnV5KaURsLjtodYCY5HZntpmeKHBi6s62H8hPetrq59Mmra1yB8xGJ4SRBvfpgPSg",
  "key29": "ygmLsaZpFBBZywyfUBbJPJtq8a6ywcRKUXcE7fT7GTaUPsogLpmFKpJKKgeyyTpyVRHe5aeMKzRn2cg4UCV3sxM",
  "key30": "2piKQwFxV4uaNdEexHTKnUc86TeWfqGVZ3fYATFY7tSdk5BEXMDeniC21tSvJdPHFq9iM8bPxsvRo3eg3av5Yd6S",
  "key31": "3ENmHUsWdQtNU668ARTUUnsengigo1A5KBpfsr1nvgZiJcVZc5wvRtfZKpG5FtbtUBEkdXzsaLiFn33ki5BcYymM",
  "key32": "4jtUH5FVJtCCRRSNfiQ3V6gF14dSow3hjq889ocfVKQ83ahZ1gzvTrzhY3rZckFAPvcyfbKyyJe5LtCdCzGPcERx",
  "key33": "6BcgXowtLFuvXJVmQawy2FtC1a1Bto5e3TwwnX6QWF8i4heRcgSncjqzAaNe4JN36HpgJtnWYJft1VsU9mHtkLA",
  "key34": "2MXXHcNMfqnPFsZvgVgpQZCrGD6suPTChpaQ6VpWaBvxP7ZrHf4P6T9kf7umHsAt9hMVTE4iXu8g7FLjQSp1yjvi",
  "key35": "5xRVn97A84HeiTt7ZxGami4emTfjS7do1MPzreLbt1ocSisUYWRiiLpYiuyh2AXsgkSZCvLKXRX3XgZq6Zr5miSc",
  "key36": "52kd1Cpt9ids541DX4sGT4HwH6hdVL88mkWiJPUgTnH8QYCupvJTkcr81oiucbbvJKzkBBAspJUEy4g9arTAXTaH",
  "key37": "zhyUUN71bZ12EEMW4u9upJdub5SDuAjDcWXxv4Y9AL9RtDaUn8T5XrBQdKSPuuWFrBLcb1kmfjkTg6jwL1PCqAB",
  "key38": "4WRAvNvUZoVFGriXf6hhJkM6TWg6GZtRezEFxxdgQzZumQkZxF7W122Pt6ExSikJq4Ve6J64piPTSX6TGcycL5uM",
  "key39": "u5wJVEHyGfcTBNUpBoLTFMbaqCetEqcp5XupHKg7pX6FVcqLSL41T8qXTTzV9FS6jxHMAvfwyWqvRqyAGt7oQ6u",
  "key40": "5iS4LHgruTrsPGYjBxGrW52tRqUqwmNqz5qBTszrmdPc8kXYCYG7Jhq62NVwJRDNrsXKLnfYRuTpoNAkJ47GN4x6",
  "key41": "4rpHCV7y5BK6SJ16qjx4VUkb8T2mr2vYzExQTHfqqkX6bidefwS5pF5Fr3Kaix1VfbSWVdwGmSoV7fNtAwDpBW8w"
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
