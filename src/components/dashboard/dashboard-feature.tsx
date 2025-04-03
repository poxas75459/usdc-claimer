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
    "3Lhjor9M5RtygxtAUqA9U4cvsnPr7bSBfsYVuA2TpYq5KfKW23U3rnkV8xoaECuY59FRVni4Cv8QtK5QihMvXFH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KDzxZPiTxuwAVG7yGXutkQgvezKoHg7cvtYnUfWUfrQV9xxr7g8kv57Z6jMAcrZz5rCJXpWfzdMZfnk2vvtXn7W",
  "key1": "2qotLqBP6T2U1t76hRj4WFdF96pqNWuryeUzA4TY9UKgR8VBSKrJGhaxCY3PWhBHZmfaFrqsS8YNzsCe62bgyHYe",
  "key2": "62GbdZgPJDgeB9hV5qZYJhitiiq3st68M8cBuiF2FnUzpsMJeFKvyiWDHajatcNqP7YtRimfyEesEHDHBFbv99Av",
  "key3": "21n3M9AuLTWSGnfaqEMSwg2JGN8bemZdLucqVsU1Bzk3F1CKjAED7Jfo592ZHG9xEFeJg4iheNWBxNeXn1qgMjWL",
  "key4": "4upwdRpUnbU8Lrm9MGFcE1Mv65HWK16eEj8PCpbZsYjP6yfktLJP8sy9tpBq7W3wwXZ2EsQNfuwRmp2GD6QgHzjR",
  "key5": "G9sznhA1wxbiTpzQYUxxMGaEMENrDhdV3dpLToJB29HKfZ6uLrcCKcUitw1odabvPPpa2jj7e9r7DEw9hrDT9ZL",
  "key6": "oPwvt6Jkddfqw2Q8b1jmpCtAxqcxr4LRqMXziTcd1K99tXFuMgfBeKXjiVcdHoVXjoxEF5C43M3M1hxVc9iktkm",
  "key7": "62Gj7juLuuWo7bmzZ7wdhFcXniFr5NYP61dmPN88CgAFdVdfPzKvUKgEu2xgLqn5Y2rzwsSCbQwLh5G4Tg5yo1Tp",
  "key8": "4k9Xobqd1gu8MhpmyhD7jxfGg4qBqvDsikAbemS2hohgb1LvZYQ22C9mBgmZmkeCb6emdQ3F8WXUw1WPdmHXp8Zp",
  "key9": "3AqBskH3n1Bos6AmAt3d2gGbEBZcEhHm2ivKV38BzbksRLLzDpAnBVf4z12v1zNDUyWPRPW6aWntDr9t3KQFGTvP",
  "key10": "2ELtJHPoDJHcDribBJGpXcBCD7FFmtkXYnNWMQcjqRJoQoH3Wg37rrhC37CUvEGw5c8CQtdnzyf3J2NeY1g4TxVb",
  "key11": "2vv97urzYFcMPzUaK35nDFujF9eVs2xV3FGEAqkJxTfdLvapYvcqvhH6TustWSmyM6f4Mvt1aL5UncQnYi8psnVq",
  "key12": "XMdrBkdMn3kR146h8jvGsnGiicrRReRdsAX1pkDghs5GGgNTC7b7G3FzAJedmGP1Lmfn36Y2GAXMJejEN9aWgZD",
  "key13": "2XDwDAFjgK3emkCZc3i3uUp5sHAKS5jJmo3oUagSxJwRfQo1RaS5BK89a9qNmwrPunn3nY8Pvu47KEsM4vueka4A",
  "key14": "3rFStbAky2VrpSqq6Ch8zUM574Aj6TCSijGyas9fp9mFBRWyMoZ7WYAckF3em6L51Pg5gWt6w2VkgVLLFkJDFdGK",
  "key15": "29YEcrzoxZgzZ6DTqEmhgdgRSq2sBjgpGazu5keMq9uHBiYPNdHtgeb2EACsjjhzWZeX8GB8U1z2fLpRG6AcT2GX",
  "key16": "k9oUrRRyjMKkokCs5Sg8CPUgW3oyVVGaPU2CycBuczeSa68cE1mKCZdA8WAGgW6CsEUXiq4j6NUFhS2oF7FuU9Y",
  "key17": "345381BdvAShfZqiQX7UPtiXxCnegDYYew8QQdCEXpGdwEu25CjNxkfXv3BsEsAuD1ob2qsp5fjnKjgCQSFyN7of",
  "key18": "xAZ3ebcKU7xGyLoqiBEDCFnmb2KEf1Q6ZgnC9z8jXHLGH7sv7xozZABU6ZaL1a56Cc4xEdaEkwz99YFa5fHp3GJ",
  "key19": "5VQZhwYDCtTBR3LvwBK86vRBVSGqA14uUGmhEFKABsaTN8eHkohCoJWu5ATKougqHodFwmsKqwo5USxM6g9SFtjX",
  "key20": "2XM6qsDziLoxCg9bxjTDUo4w9Li6CCqLhtmmc77ZwC6VQTDwKxGYP6QcjLEAhg6HBVmiU9pVNMUa5QRRyEiV5rom",
  "key21": "3EXuGRutuG4UbyR9jxvE42UUEaW2JUDGsUdi9DJmNBCrjPCHK8vKSVLSwRP56AUHHseWPR3b3ridwqr1j8fG1uhv",
  "key22": "4NxWcSUTrXA9okaAD17c7gfWdEuuos8q6pdME2h1fsJ5ABAgem6oCzvk41c1cUkJ8bMt1ZutkUt5YGQCY6eUJbf",
  "key23": "3UtgXQL8BxNpdmjJpXMowGJFVjGyLQ2dfHviJKmWPohA6isJZrv9tw1iJDERvtbhXzbYwvE75u66b6ufeT7Py2mD",
  "key24": "3cs9UpojCKswG1guD5Yu86miQrPGkpUp33Ca69XuMzVdpwb5ojZem6hnz6hy1BgDcCwB5Xt95La8AvB5Fuw8P6tc",
  "key25": "387yPVd6vmxr73hqh5X3wmEKagRiVzDFe4tfHUbUixwqunHXjiWmbkJwm1zSYC6gtVbEQeFRhpqPXwxhrtnoURgy",
  "key26": "YmuoVSKyMBDLPoFyAcBgQCgsw84eiwhpqpihxsqnk2nSJRC94E7kz48mjQUXeKh1Bc6jieojgvioUWrUkJsubtm"
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
