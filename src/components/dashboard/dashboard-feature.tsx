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
    "5Sw5GUuezGCNjexNyUt6vtrYo5AegkB76pb87qFbzC5awyB9Crpap1nnTW1uTpU99pZ4LgXKbNDMg9coHRLfCRjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E2CsgQvBQdNqUCwXgQr2XarkRarkWeypb7amidkGXjpGVxNQmBLhfQuoCMFXwNbURSdikEjAMKKrpuBMdtpj32d",
  "key1": "3Xov9A6u45E9mrUKtRVaK2gW7X7W24ZQX6RFcqhPVH6eGWXQB1887QXodtvCzjTyY8zZBNEJmaHY9kQ1wtYVteDW",
  "key2": "eBrCxniKR1mADHN9E8SR2Pd7aSDjZLguujPdmRsuwVEftZvaouFpLcLkhN1k1RYpGy9bsWzHhbRM2mVAr5po7fz",
  "key3": "3K4mLBLmrdnX5B299ZNLxfGGV66jtcgbLLP5zEZwHKgCXtcx83LQPN6SZHvfSwMs44yeHdSzXEYDNdhXcpjLDH4e",
  "key4": "XWDiBDC9XmZD6361dUhVGkmp3X8ohH3mT5XF2K3iJ2f91awYuCLWTwePh6VNDbLccmwvFQdHhWsFpgP6ZJao1jW",
  "key5": "2m2ADxSzJcvNUAHae5aShkV3Sj9DT8oH7BqpUSHB6AujtEXx5DsUAjg5Gab4hzyVfgnZTkwXNfRNNutUEGBTXCBz",
  "key6": "5gr4wJ5zsBsPnfomtNTyqXDdVudHPoBK9h6FP8uP2dUhByuaS9kfQCXmSFPWf5hmbPkFc4r4VXwbT3r9BokVonNs",
  "key7": "3vSuz8ds2UFTv84PmQa6YN6QPKBXyCqYoXmCQ23vfv4pWTmkuTiL8Jj9mqNCiATouJ4JbivqVqbmEFwWXDe8xLh1",
  "key8": "2ze8jFe3ieEH7PQbNbXCkuHV7JmCENXnmThVW7abkRC8vi2ko6KX1LF7cCFQQH21dTFA9Xc1GvobFSurXbu1ohDH",
  "key9": "2Eg6mxKLbisVYxxdJEnRiZxivGom8HqukErpFoh4XAQsDmhUuemoKAWa3nP7KGrkaEtNmF8wbV9S61ZhwQoXEKap",
  "key10": "3QqpvDkzSayNQ7cRo935eHh7GiNxbVrxbAwD5k2dTDnBgDpSmgSnpHG5eYE6jSb3u4DJyDofGxMhDjEJFDBftRjS",
  "key11": "4LUxKXTVuBzshfTfADXHXWNvJcseQ9MQzmE5Xq1uiGvQVfgmALCBjTQ46LdTfiRggxbBb9kVWRJAACyyQKYBmXLE",
  "key12": "jQHd7xHBfYfbmymnjj1anpKmsnpUMMvGEM33QpoRXtXd2LH7i5AGYn65pUTz8poFXhjswubVFwz67vKe8EX8yzs",
  "key13": "5oWZhpvYVJRbXzGN2mNNH7pQ3pPAMbUeRMfTozAWWdavFy4559TWJjQq8mgD7EfGrHtPq8o8Euw4kTCsrfyK5CJa",
  "key14": "4eYU9aotxVZDHMGapaj7Pb9wy63oPWMdu95RGttcpD7Nzncu8yCUpE1fbg177hST9vrZVhXpNdq8qU2W8rA5tSp",
  "key15": "2Knroej1YcQbNMheYz49X5kfBpddGivTQJ9edDUGEiU2wkrXre6F5e86kPTwGxGF1o788ST7bjcbAwVh3sGKdYAF",
  "key16": "3rCRH1fe7cKxmk1PCp4jiBXECaGPyLa1nCfBLgKEiFTzghWkQzMzW3gVzpG9eBVT5peKXv1vSQCSWw5ec9MtKDpA",
  "key17": "2ACzPUZUnyKCUbhQPF3EqC14Z8Frrb8Sj5USegCa4KhaWXVc4mpgiR7z3FDfhD8AM6D2YpXf3pjqsvbHTxoWuXFJ",
  "key18": "5A4XMdiDWSq3YyJ6j3tV7pvU1F8PbDaBbz9q2aU1BSN6ao7dCJcWEfEJcvh7SpuNqhWmGxvxnhHW8q3gB8tPPGSZ",
  "key19": "3xdottuTg86f7S1jX72BV16Pb15BLfqMPMqsxECND4RKetjbZ2WZaWBdujHq4J8EQUG9orHJMG9dUcRNQUf7orqD",
  "key20": "32ZaA3amnjabryw28PYP3nGenZXhZA7ELGMAEjRJ1HFGLu9y9jyrM9uwPXc9bxmf3uKJEjoJY5pNzq3eeVqt4a89",
  "key21": "5FKECw573WPMWSv7cmfemCPV9NoDzerxMvJVV3VjA8mvzQwDkh9PGVCr8E5v3SBHsCP2MAGBKLwzgBivJQ3cmvdP",
  "key22": "3LNarY5V35HVujWSyHvrms1WAtGkt7W6tBADSFp6MnmB4djJWPfU8pbpWAaiXeQGLcZTynkRsJUSv8rXX8KD7Wp1",
  "key23": "5BRdgRSbuMbtgj8RyyRv6S2V2xySuCHDEpw8BpzNvpWfdyPnPzYW1umxDevy4y9saBZF12QR22DgJkfowCPDzyuA",
  "key24": "5bjmTt6XvsgJx1kww8myyjYssZpKg1RSUe5kDYuU5CXjAXZkWMrJYkhpMEHP7SVr33CFz2fxpuAt6AuUsggVGQYA",
  "key25": "4m4eHVhf3EvNx616Zo7UWjvP2senKaVnVK4JiFD8Rno1GAzwnQmDWDF287fVagaSF3633p3EcWTHmoFLWpksaJHa",
  "key26": "3aWsa9e7PK3Cmz7QhQfhN2YTBXKNeAjLP3VUUYAD44TuG2XEjGgGoLGAvv2JDaSXnVXeYhwzMVJpENLUVwPGbtvb",
  "key27": "5gkMdXCk3AsNmcALaqc7zG7ZDSUf1urTxgqhg3sh7uLq9abrsgsuokqz8Gp6AmjeyQ1Gn7oLhr44nncprR7PsZMg",
  "key28": "5tz17VLkusDzvLfmimpv9UaSfsYUgBvJEGN1NQb5do71DrNrhpzrkN48bWHQe4nDgxuvML1uxTvYrXoq9CVEgqiT",
  "key29": "GjLgQhASDbJaxQ48G1496Ve8e3sEBRsQsNyUwtDj1H1CmCnPeUbWPQPq6f9Uc8NreqkJjChtHJVAqS7aiViR3VJ",
  "key30": "TRG6y1ytx4hKHAvzUoXDyK7wP6QBL5j59rXFcnRtU8vqE4Bx7MsZaeo3jxqN4xWtWzMfz79xedn7EbrdiejBfSC",
  "key31": "5Ewoj8SLYSuQnW9Nk4PSADVfGk15u82rCFaU2AcuuXPq2EC2NNwiNsvVUCkwJFx9w9f7GDZ5cdpdLMWmkge5TBio",
  "key32": "4vFqfhLRU3RZG1azVkJGjMxxFgdnris9vUBX7DLLCTu7so1rkjiJK5QsoiEoJPCayhGh6vWgSMkN7GKEvShGQwGW",
  "key33": "41VGSwivxsaLKjV8JuDbB4khUrAEArZE61Go9EE6dmg3tBiuxcNjwaD12YoSdMkgzKWAi8uBpTnNoo47GR9L2bFr",
  "key34": "3pVtH8Vuhm8rNbMV3hB8ZFvoppkDc2beqwWS1v4exkkMpFDNySo6p9AbU1szr4RReWSiAgxAgZ3LyeVfTbUVtFsN",
  "key35": "4Yqs3d5Eurce9MQGUPmFzyyfsrhxMKaF2LtZWCnGyuiyS5YzpBaf1S1fGhRH28CtJQMAxAdTX26kEaov8YiN6HJE",
  "key36": "3Dt1ggFPjE2vSDkDBTQ9gMcHBB92W7PEYKqgCqfPLNWdwRCPo4H4d2PaNZkvebpdAx6vBcB7DHTNHxrnS4XRh9fN",
  "key37": "26bNGb4W3ptXP6wQ4tA7HnPiQZeoFNXsmtmwgs3gqbGfEc6ZZDCkDknGUGRp4d6fWfuDHGZQLLb62w8hjSYJTRVq",
  "key38": "33HKUafUhXeQruSUDX9GYzWbsJ4Rgv7wcoDQwwoWGGKPfXuBpGU2iyRWZ8VkG3VMg5Kubtm16iyYscqFcGXVAZzy",
  "key39": "B6cseuVsVQjVkoW9gH2KdhJ7yNmUwL8jP9DyopugTBw5NiywMJK6FHDnhdn9vUyHPV3CiHPsJdMwqZQffHNcssP",
  "key40": "42Meq5mGbJk7BKo4Wu42dAqhLGQtCmKmuSQtP9YJkQEtDbbBiH5UYumHgMHsoYxfGdie4Zr6MFQe62hBjnVM8iGg",
  "key41": "4hAm7epMTddNcxVQr5CQd4zY4YDvy7P1JSfRkNmV1YFZjcWdgBGtHAdyzLoBzKpx61AaQMLTmB4fcA8bpTKTm5aj"
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
