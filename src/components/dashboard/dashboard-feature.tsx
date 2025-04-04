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
    "5246SaA2cbqUrFnL88TyEuruChtaPiUdHMSZWhYqbZrZaedv2fTHtckFfp2z79fuc1cg1KY41WSNT9KR2zLrf1ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3afjdEQwF2Sa7MXhs8dzDrUpSzHu7WNxWvzgNqGrDHdGKER4doYRR7R92DWZAKNTgwybC29CJ3gQCmb9NVQf4Rxk",
  "key1": "QnuBfLKGAwTWXdGiutWZbNpSNQiYwPCuegXAA8H6S5xW3HR5CvzJEHAdKaEoW3coKWEjiXEuMBtf5MbqvUR4BpL",
  "key2": "jiiVaX6eR9xDTrP3U1z6KPJTpub7xRcrnY8655FrLsZRqWi1wVpFzEYZWX54wGYt2oKee9t9XLo2uQLRrzLeusx",
  "key3": "5o3QHfEaZJNPDBR2rCqhoPvNbLEijyZiEFFfxgUWEUHe1jYVTWkN5vqPTDRz9BqDM1ypbsktjYZQvFAKnakb1eSh",
  "key4": "3TVbbHTzzAW7DtKpaJTaagsc9yrFiae5NeDvLvEZwKRRPXMWP4nwZRDFd93XNotyN7n4ck6eu1MyB5CAFQueik1x",
  "key5": "qfwcW5bTf4toxgDwQrjXqavFRU3qEDzfXWwytJojAVEVYgzoDz4gqZ6cPiyFQ3kh3c5hYwNgp7ybr9Ph4YgGKx1",
  "key6": "3B9GuHnL4WRkdBaWs2dfJEyVhZ7cd5o1S4ZaRYTaC8Zt57VhrazR8aMbUsfDH852vspsnQrCoUdarNwm9yQ5Lwg2",
  "key7": "4sVH75gMkKpVxjCFfXT8BWKxQYeuQvLzhYoJo4Nex8owPfwZqj2RwGj9Zj8gxhC3JbUKHCUDeiKHubCVzbmw9Wdj",
  "key8": "5JY8c7WRf8WET7AUMUDJGov2a3aYstd9HP3i7QEvy2FnHbnf4wTaLvdY6zmdZ4hKbVLaGmLsUj7r6AD2dZu8CgcK",
  "key9": "4dx3ovjG7CmZvR6CXjqNc2FUuN686ZdYibCEAUmbrAa7KH7ZrH1Zh4ra8YaFAofw4RzSLdu5ogGhVcTVQbiVc4BQ",
  "key10": "4jr5fV6zErrC6YMRjYFhfiFnPWtmFakni8ep6u3pUN5nMHkqCV19KAbBMQrTccG4X9c6341SK43TLP6zESv6WK3M",
  "key11": "27jrcPcXGRCSZx882qAbGmsmfo2FieGLEocvHwpiDm9o49Pk3a1QcUZ7uzEYZzJcTum6fDyFcGzejSnSmRmF5z7a",
  "key12": "2tX81dHKfn9JiUkhfPEGJfPoQAWboErwVJeqq3sD2LSQFSY9gwB1KNA26xWNHQeex9XMQrCxNcqfx7ThCBExxxyW",
  "key13": "3r7EbT9Ri8vmat9NCMBaAGuahzUzfk2zVXQZR7AGTv5t7at878RPMVxXekaXKNwsFmp6NZMwEHGDEatL223q5wH9",
  "key14": "5r9HX646uNHfMc1on6EdvggxiekbkYoiQv46kvHSmtmvTASQECtCRh1XWqniCgmTdyL4PBPPia1UNbTQDwpR6aR8",
  "key15": "4dLWBAXjfsYPviqwRAMkWDrPJZ6gD2x5KxhaczKXnR2CC3vpujiXCghG61udVfT4Fx67P9Q6Wb3GejKUAFEXPmzi",
  "key16": "582S6nokGDNyP8vC5QLFrUYdt8wJsL2B3e4bGJSHErRubckb83SHHJJG6v3fuYGPf9kvW6b4rdCYuvaBpkFxQb4e",
  "key17": "3PUXy4Q5cMHp3mfjBrYrPm3dAQh4XC23dJw7y8gG34J7KxViwHWUq8E7j1nA2hgrBWrYby2omt6ajqugswjzkN61",
  "key18": "5v1yo4joHHqpMfo35cm7W3cKzTCfApzPzNV99YwECJdKre6NduAsvpz3aRHKjaKfRtPZsUhssPMHmgi12imqduG8",
  "key19": "2Jx29gb6UNDfYCQjEo82r8YUtBky7dh1V8XFwzjzRrE7stiJ8KpdCVo1Ff7xeHJiu5JiQpYu8UJfrmmD16Ctmfj9",
  "key20": "4xznqa7yaWAFXv8d9arqdpFoKQLPiMfKn9eCVFKVnPxz8ugPMPEtCFygVChUXagv9ynFe5TMiCuBwH69oUDWxgUN",
  "key21": "kb6zuUqZEmfH3x4FGYpS81XXh6x6dnDemXupFcgbPdFszAZ42YHZ1XnPoCvrR9eG8AoCSCwMDspLFwXboYtNfRh",
  "key22": "36sJwDA5SQECRnG6Zsom26rGMz6zT9XnJsagjvCiSRQjQpeehX51MejZc2stktjvSiSzUF1annBnNadGYxZmeGaQ",
  "key23": "2eD2eBPRuYSamZQKGpBhXVujXcn8BSANi7Y3ECfmkiLg2ec9FwKUehNsjBa9MbjsGaFTopX7cgUbmzquVMxFNrhd",
  "key24": "5efwhe2478ApdBpnjEi9zMz2JUAniy3WTZ8n8vB8NSnQMDSaPmrwAmFEaiNftkK23tpj1iEfTKJAYtbokG3meppL",
  "key25": "3aoguvi25QXpU6GTbXpUWc8zUEnptBTNgyeSsgqhKWE32B9CEGBekWKWEoU8donkeHCjMzkrPvtZb2x2xHQwxaua",
  "key26": "5TyKVw4ASWnpnmpfkFXkXVPJpqJ3oNC1TWY3RLmjtBZL5yT45FDPsxbaQJyiTc7LtsyhGknM6EqiwSDNnMtYPD5o",
  "key27": "4XL6w1KZTXtEAWkExxW7JManJmLfjXRmVJXwtLwbQuZMn6rQAZC1NC8eeaFFdzH9wSFFP7RAo5SVyuqF1PFoo3b2",
  "key28": "mBp11Q2Jp2YxBWMWJ4KuiMfw5EDuCfSTf8hvUqmKijMMSAojzpJXzpJ6ukgUtsZh9n7BHKaSAPFVfGHV8NLUf6j",
  "key29": "3eNUX2EoXb1y7uopGEJ3tP3BmxumiGu9mm2uxgkqopAzPPMAxibzEsPe8JpHe9pn6NZxi8kEMw32e3TVqYXV9ZXR",
  "key30": "4YMT5eVw7rRNTC6hnEKf3W92V8cV2hhWYm55Wog9v9xmikSY711QncZGLHCN5MpMQY9zbY6reRjRZbk6xVp9Vd1R",
  "key31": "3oUBXTYpNiQTrss9wwzn4PGwGRxDi61ANPPBenxWMVHwyXRywGspF2s4M6NUVwZbQVVpZW8s7mTt56LSSE2655pe",
  "key32": "y7W5SSuFjvj8ZY3uSiKRt3YZUDFiT9ifBJdS8X1FNCp9NzMJZMEWYqC83giGNcA6r9dHwtHWBbxa3tMsd2h5Y2u",
  "key33": "8XTqRfKfStTkVu4v1EtiiWagJAPtUytXJCpZMMoxY2aMq38SW1qqxbvZzsgLWoKdqnwqxVusoXuNHWeyjmvWREX"
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
