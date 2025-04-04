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
    "4XAsgHm22jEHhmwJPXGGZ15XKUZpqimDgoxY1zW4uJRTCx9HCufaSkZCeLcGd2GMFfousReikqinap3f82W2Mgdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xQUAfToQKBP5UrjHLQMkptQqwjnx3kQYYWjQ9tvyNhQUfkT6BAP3FiSRWeXAYvxzhqC1nnkFDZLX1zUVcNDTac",
  "key1": "4qrcVnih6UR96atuQLT59R1bdZQCDJzDRZwxMubP3Diacye9WpKFxARPrYHNnxzLLBfHMsCFzkGq1JcLavPHuveJ",
  "key2": "xUJqo7ukAJPArnLTCHa2t1uJKfvugUoKorSGBJYtNnL94JQiKeUTZx6tnWi1BQEuyAk9xutJXnZx2yF6XUNme7w",
  "key3": "4sWkCbKZnyepMieHQVjXZ9Cgh3jhe4EYbDjg1CYdoYwJ3XJMMXDG277mGBAxiQbLnYQzf1CRKj3KD4mZUtbWNTqS",
  "key4": "ZKQNQVvbKf3YhbRAeiw3yj9ZwPevNWxNyrNP58i25so3NXrGPvLNXrc9UERAizpj6QmvVjtA4A8m2t9N59WcCud",
  "key5": "5kJyrJ6TTd9Tta3w6bawpFx9WnRAaAvQzJydQniLm7231BqLcMvtqAGG1rv7SZW9k4a2CRhfEaDXqQDhCpWbuRgU",
  "key6": "4RU7jEt4VHD6oQRkPYeptwknuctd9iTnDKQ49mtGmBTGg59c6SRnyUPigDQZZv7ggWXMi7Jj5PizGM3gwhV74zf",
  "key7": "374gsE7NZvF737ReNFSTabSXPwuqTSyu2Mj1MWKznufjP1XmYjAfJevTZTBVy3VuuAtuQRNtgNMWJefdmVU1Su1S",
  "key8": "3x3g4D3xdCrv3uGB92PfJTiD3PVXBXb8vFHFk8gyfMLDHvUviEwhYKmKtuveEsrXz2hRKzMKpfeJEmEwHhaGK8JS",
  "key9": "jW6XSYzJhZP2Qx6s4nLFkUGEWaumismgVYDkCdkyMvM5kynf1vDxj3G7GkcSL1kMRE5YTdQ7GnkneNPT1ko97vo",
  "key10": "bBdL7uCbLioMa3mtbhsdt9ejKCJCK69j8M9bsHofRWZy2anpQoqTYfimjZpik8kRp9rENNKXpaWuhDUtNhsygMx",
  "key11": "5FMYny38atMCweGcV3g4MSqPRTX6p8GiFy1B2SqdPTYSHxXDHk25w31e47xSbnbUT7NKhfd8ZcUVP5LvMpeZbX3G",
  "key12": "iHBRCZwVL3ZJrNYmSXvVCczE2RexgGkSmLRvZ7PPMiAte88CtRvz4TGae2gfxHBqy6YHXC9PNpq4x8bfPFkF86J",
  "key13": "2H2FGCcJbVzaMPe16piP7pLXGsw3WE9MgGXrikWcaCGwZjUGmDRyrBwkwztNqRbyCuCCerggTnoXZcfqres9pPqt",
  "key14": "2c4BeBCnonzvCKgzwXnW8p4msMFkTMc6uhrGWCqNaKxMMfhN48Vju1xMsHNHmtoxxbLJWxMtSK1rw6v8BU36sNKt",
  "key15": "2PLdecLfv4hvnLTxqTMuhFQB3fwuUaQzM2oPe3X45y1U7N36bnseeuByjwRcbqJjkVWAUcqeBpMviRumJ7nspZ3F",
  "key16": "45HsCRgRsvGaX641YoeFEWgvpV6dygCvavypE3d7bre5Qgetq3V4eHLV2ejw1RYUkxpUxzaMrLhkTfPPxASX6W3D",
  "key17": "pV7ykGtJoG3wDhg4DbpxdJuLi5YUjnqtM3vQmCW4dXXF6xC5NWse36RnTUTcAoUKuoQYk2g59exTrQ1kohujLMm",
  "key18": "3dfTaa48bufoqw3pnPWjEta72P3J1LphZicbu8Ru4h8RxvWKejMP2oqqBRjwkFLTXWDtPcpbuKzZKsrcSmf81mQJ",
  "key19": "3ii6zfGSye35JHc9kYLjS4vC65Kc8BjzHHT3QtarJzos97FgNXmdTfTvoQp7rTmT1RcFKaaZRKgnC78m97DnjLLm",
  "key20": "2NLPKmrAczz7mACRMdYWV3Tu8ZXHv4ekymEx89XLkJ3FhmiAdBGmLzzZJmoZEoeVuDXpWyvUXUZJaQiJ6boYX9di",
  "key21": "596UXcwqRP8dBhYSeAXbqPMTxL3HdrhhvobupJGWQjzQPDzeAqKLc3M19k1g5BzvhPTV7haFrq6dPn2sSqWaMBWB",
  "key22": "4F8ZnYMeeVTjgouYUrafjMc7yhUneR8Nvj7sA5gtVnntWZ3s82HrVhUTfyid3T9A7WP83xdbwu1ExxyRprYf2GXd",
  "key23": "291hEeR6X43nb24T2iHUWHu2sxNcUYFLod8EvXjyEFLbZNkVAkxGyqky5qGAJ8ftFbXA9HiXZXHHYsRQ9Qu5DiHC",
  "key24": "41wyexeq7DRKrgN1Bmt52VnGkUSgzVGNjDyDPjf4Xm3emXjntPm4sSsGw3uaUnooDTeMKg7oMZiaSm76b4q4gxim",
  "key25": "2aY9PwZzfBqc16hMoCCn4Njbek79dXTXLAPJcKXPFnD3nb6w91axJ29uksWxWdH6qUSHpDRLqU3i2CLCL2K2v7vH",
  "key26": "23AFC5XBLUKyQS3wc6rdBZRyBmtBxczmhqtKbGMy25awfSQZMpYJYUT1WMHZW6CqqkpjhDeRsjvmYoFbqetV9zCg",
  "key27": "5C6LMaVT8JK8TJdGKQdBUhUwgSuFKxp7MtzfAMJZ3MQQ8oXV3TdzajesZJkfSB7kJ4yTx332Tp6iuuzNhjSXvNsL",
  "key28": "5jG26wDf68yg47C69W8YDaaTUceeNpeEBS3yKVbwfyYevm72Cp8NZd3NJQNBK1DbH1CNtLdLsobtaf8ukxTRs113",
  "key29": "6CeHbni3Fwdezf7t5SqQCk3Ma4uKrXpAXase6kRuBHmZ6WFH2VFhb9TVsUAoV3XnXVmJ8SLMFTiRe1jHFL9HzXL",
  "key30": "4FFKvr73N9Rq6Mfk5469XpBcGEUtxMwxhwu8xNwo16CXDSVm5mRG4EjjqiVdcNs1D9kTqKgpngbabEF9VqsNPMDg",
  "key31": "2ZdbuSu2nW2pGYLDsLbi3aVPoj4ijGgM1mQBEb5ArSPZ6GCuRPZKBX2ziDYKU18NWnghA5mzj8B2GbgUWzqrgnLD",
  "key32": "3enKaMMPxpnCYrkZkG7EUQEZYPEesvRxSNpaZp6YjmBC5HbutzZNcpmRDeJJuoPgLVwpRGuvEw9bFCZ75sXSBwVh",
  "key33": "5s4rw1oTY8tSuh3RaDennjSJzpWpDw85LjMyPpLLCfCjQ4T1RqgUzgvo5kW9wQYLvJiaWbbSqm4N54yhjSgV9Wab",
  "key34": "363bkBpvPuA1FD1FFSUGjPEXXcseGsMNP3akqRQMGzVWKUWJsZbXNJFbEjGLSJ3MBnu9Vx3XhLQgUkBKWeGXUw5H",
  "key35": "XgqtBhwtKyy1h33QdzCvDBAwrhJEaQtEJ6cV6i13oFzyGuopR69qiXLBDqm39RPm4h7CiaTjH5L4Ex4QrxX5e6L",
  "key36": "vDkqeVsC8V811gwC3xtUKxKbJu2Kkv6UuNywWZ4yRKQEu8okfgr4ATLeE9Qsy13WgRcaLL1vjx8TsvVEv8H9nSc",
  "key37": "5oH6yAF7EDMgmGu2r3w4ZAKcVpDUFHnQaYyARwRcoXZJYWSHLcNSQX9NZFW2JJXris1GgYjiMeKCemEQBZvPVGFe",
  "key38": "5hbuSjLfnDv3YCmbfCKNEcab3xLeuEnXGjG2YmaAVd9bMtqngkvfkejRx2tuLW1xVSSJWRNfHMotmKusHFqEcWLK",
  "key39": "43d9JSjUd1uc7JmShgRgA3VDZ5j4gTn7bEzjgme3JHZSUpHTy2osuMmTUrrVPePtjfR7vbR9NCauDypdJA2TU424",
  "key40": "2uHsogHwbAt5BkZuwwDgA4ntgUucsQFyKtDwrZ2R66HELLw2dDL4nFNekZ57Tz2tjSw52EqSx6TKex2VJvBuDxuR",
  "key41": "3LPfvSXcqXoQHKUEzLnhuJF4dq87bALDGiieDvZ2gEgYgoji7JahDUe7wrCp2fJ2ZzhL2GJifcFPxTdcK6cHQz8E",
  "key42": "2fEto2RMdhp5eM5C3TUm9EatAXogRuggeCgbUrwqjSo8H6WNHzMpwCoGosoKVD3Z33mBVY6cemu3i8JT1m85KPce"
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
