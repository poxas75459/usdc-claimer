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
    "4AtDqsQUEQknCR8jfdf21VxxipcP2iYUTjr2Bh1yddmR9k627AWiZMAZ3JGLQVaGfPDLuinkR3qhWo133nKx891e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCsP1Cnk9LgtYCpcfUa1aDRQ8QhcKraHfe2SxgcxDBXcuvYQdqrHDXPDJkAQTxH3ERNpCPLnBh2QhFRk7JJ8M2e",
  "key1": "28c9m5kZJcwjoBiRfSzxVwbm4D1aTUdxM6NmgoYG6FhHT5VHcUsEUag8AiKgSFfXVwY3yoi1dMo6TYNSM3xvMTBV",
  "key2": "2zMjSFcK4tiBm7h4WZEuDaiHSjTPh1uBaEfhKBgyuvp5fY1sUSBGGU9Ufr2x7hHnc7kg7udn4VnyiZoCP5bxg9Gd",
  "key3": "325ZkNVNjbWZLN7KhMoxJpXw37cciH9QX2c4AgnhnEDsALdToKmYPvRgmJKeXCTW3CQQPTNaGPZ8r8qne53uN5Ps",
  "key4": "PewoiaAr5reW7YCRTMWHaDGXzBLHutPsHQKcFeQh4j9ECCYHmGa5rrzVkiuuivr7pJ4JNsDAAaiKF6fUH3uG5bQ",
  "key5": "2DYqb7fMs13TG2tHKUDGuNtV9XQ8R85JMcU9cUCZGp1kpJQR45nvFACPjiY6MpJTEgSBcrUxuFTdQF1BPZnT7XRY",
  "key6": "5vHf9axHAUHFGcLeLVRhARphUB8AWMgn8eXYyWjSZwzb3DhXaziDej4gf6XZegfisD1BMbEJi2oGeUDKmo7th8n2",
  "key7": "3vDK1pS5e3csDaXdnWHwaFxodNboJcGs72TwPyExRZdAcESKqZXLkQbs2pijLLdzkgbZMa9N8ad2trzPRM15Pg8x",
  "key8": "3PeyXKKG7X3BbwM9ezaw3yJHMvwtr6v6JyAG3QnNu6jZQninK5BNbnNE2f5Gjw7WJ6insgwE8bD8HHmWvBpKTsqa",
  "key9": "39TbtX4Jzca3teb8uUqbuRhQ9G6ZMkB9DPVjD6JTSjUz2cpMCNFgD16iMTQrk6iAoq3T4ghPMAuxkRtUBzUrTso5",
  "key10": "29iVqUMkEWRbQJvnfMr3GJ6pqBsDmqHxTLxLsuegRfeo9BcGoU9nMKHMG2stfFhQStcTAufjymm8oD2Grv6CpErn",
  "key11": "5hnqgiUmsDb5tsEUMiAL1vkhN76w66REpCVDrsa1dbkQ77wU2SSnZBBtkFAHEay4gGVcwCtcSuafruPRsqVsAA2g",
  "key12": "2Y1nmjkyhBkgiuuNVy49Unhdksn6vRWUcuTbVRXGr1nGNYxLGT2vDBRu1RouccX72ve27aP31ELU7nEhTFQQT7ZL",
  "key13": "2j8rsf9QX63HJ1BtmL8dFShJmYyDStwSRfNbXPvdDt4dtCeexzyhWuuGGj6WgzrQi2EXm1hWfi5db7Tmuo7Q78KM",
  "key14": "5wF3wsPBJE5UxqxiTj8HQomKcE78ELtQzPVDmURMGmizm6HZYHkMf7kroGennvMp9xSD2pZBMpjHjpraDvCm8AAK",
  "key15": "A6bH75tJsExN88TtmgXKCKnGz2wWGb17NfbvhWqnMHcRoa1DyBBZ6116umn136ekBgvvbRfxf7ptrNRFsLRx1d2",
  "key16": "3f5czySiydZLbgfY5ZfMPJPjdqhCfBHDiZsoVCXcMwdcGEgoX1mAGiWXsaaCQq1W8r14x8JviqBQe8qHDWAdxqxd",
  "key17": "5s9WVng1ktHCB5Vzbi7nUhvEXHgFJner3rszcWwBBLdeswEZVaYae2hu9zGLHVNi1bsLTyHMoTPiSaRfiN7dcAWX",
  "key18": "rQuon85bae2AEB3iCSRYnUntHXS2ntCtACChcjP7FQ8qkdQviejbG8vStxPCxnKitTr5k5VUrgj6fmQWG8FkQvf",
  "key19": "UFzuzM6tmTMS1PscCqDfDxTnUV6jmgPs9kMBdmvNZB2GbUuiBFHkb8CVrxhWzQKKnrxeHUtNCbTiocP42iT3kCE",
  "key20": "2UQy4auZoTGD6HPCBjhRuYbn6YbRgHNgi95zvZNXax3pY27YNtjWk9BJQ6ZqDNK4MXfoGNy1jtesMFcoqe4fYZxD",
  "key21": "2iGhBNiRSHTfSCDEG1Gg2FbgMjQiXkqnZYQcBnSey2MtVMWwEnfUvBbsGaiDar4B6dEKhYbZVAGQ96mpQpmRinXy",
  "key22": "5GLyy18VqteMg31HoQFjXoeMSPZFun2nPyCvjYTmhvst9dyYdiK3KCyEeXGXS3gXVtft433dbj5LJvfsTAee9w6T",
  "key23": "5v95o2FWduVWGHgv33dZkHZsCUsNt4UZd7U3c2Kb6XcsDfBFZTu8sA3SnH5ADus7ufBKzvhsNos6gd3xnGSLSQEX",
  "key24": "641SHiudY1pBZ715KznShd6GNQZ2pjbKTHcZhkcbdoP28ZS9yR3gJu3ibou8z5CVr9G3RjibT1b44xVDAZpGyZQ4",
  "key25": "5nJyZaotACehnMc9xsCCUy7sbZJ925ajpVtvBZCdnhwpXyzt3yoowjV8ExNsetGpceeKQE1Rb5TSC4EHG1E6Dh1z",
  "key26": "5h7FXdPnK3cBU8Z1jULndrAYaJbBwVfaZcS2DWLcQQJk3fYq6ygy4iL3WWQydyDHYthQhdSgutAEA5bkXAHpBnku",
  "key27": "5tLofupNka56SND3iJsn9bz1QuBsrb55BvKjiztfvStxZ4sEA9ttmLAtADSJwPQSxkAwaBUXHcVRRu1CyyBVcCN5",
  "key28": "44eGxhjHcdYyJnLU5LjVBbs3XDgQtSdjMTjDrEdsuVbbjctybSdp7nzG6W3pNqeRXcijaZjw32msBpUnAEDrovkH",
  "key29": "4a1KBd6w8eHpkhyqmJpyBK3KyeCDZiWoTEtsMgXPRidmBciFro19EMGMpEJbUMLXaMv1fT5Dr7CUC357DMSSxZuB"
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
