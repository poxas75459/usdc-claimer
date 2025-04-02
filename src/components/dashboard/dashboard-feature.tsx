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
    "3LVfBj7aXzGNxCQJZtLt2FMrqVtVnGBFPeQ1E2H7rXVycVvyTpgUVqUuHGHdNtf5V38edTAeow9LN1CwWwCHQhpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AwNWDrSxqjgu1W72pax1opvqQ2GvyJ8AfSEaEYyQyZL1bvVL1WgaMRMPAJhdizkLfm6xsrbDGkFpPJ5HkntdGN",
  "key1": "4SobKdPPZKetfGmAXVHWrSZyeF12HTpwNYxZyCnKusKitfBYeBNwuoBYGWk3if5aKzTRaXRVjb7kTLWSicw9RPqq",
  "key2": "4stXDTMC68Fd26wKEFqFjsP4msocan2tpGXWhJBEpdDxQsuJNx6aNPkF2SNodCaoFrBRXFkH8jYKdMyzcZm5j1Qu",
  "key3": "5afrQVGPL3GR2zZSJsZXWFcjn2UXefJsEbygN2gThKQJNE9qNjuU1sxcpUoEqptHuGBNrmWSLibQ7dnQPag6XrEQ",
  "key4": "4J1PnfNsfecGYs2x577CSgmti2c49P3ZdVk7ee7D6YPriTTKc2TwQri2q6SjoDWYT4TLy74xhLodveHrC6JnoSfz",
  "key5": "3G2b6XMZqLbQmnVHuZsVwBqpWcPSLrKCkHmRWNC1KgzBBzkWQbUJriVSB2YLnXzweLRUgwC4Bq6mkzcLJAVPUNRV",
  "key6": "4UDV9GpG1qsybEkD3V2UXe9eQFKmHrtPhwEjCgvQaiEzs7gpFpWKqnqu4h1YyeaDJQQnPvJqs8wsWCYvqH7G3ygK",
  "key7": "31b43QNkjez3o1TqNcNGddoZxhZAWdKj2f4UexuQWo2k3fRGdFizSxuJkMaAN2259869iNJfnWARkUBGTUCb5GM1",
  "key8": "BaLQSbQVSosUDNo8gwdvRSryi8xKbhs4PGPPQ1BeXYMPQD7JLvN7PeacE5Qh4hth22WXbkx3g7LJGvaa3dv7jGN",
  "key9": "22HNuPCgwQzu2k8aSdAF3gmEPrHuVQxbnmofjMjHSrdGSFBPSPsv1zJMACujhkeujVF685ZN6Li3aywperTkL3nj",
  "key10": "3NQSinRuQdrd9bYVrs8rVxTf7C4uYURKebGmHXntr8yZhmoVfV1jVVWhs8oYaoSJTifYh83BhfujDwr1DJm2rf7G",
  "key11": "2jkDAfgZ6nHZ7aaQdtNm5kUw45NG5xqUhViT5QxZm1QqyZXSzaspzVpLh5FgUGkd5pksf4EQv22Qy2mKvcNVVTYe",
  "key12": "AUHnfzy9UsBDob7SLRaNBb25bzGGJJpKrP7np6TqdyrXXuU47TwVTs1Qojj79dPf8ywrMiyYgTAycbzeviNnMgD",
  "key13": "2C5ydtbY8JHQSZbHyUt5GGEjuxtuFKnUbjDef1Nwu8q6ZHuKM868shpZAtTiCUCmHXmmoJGu4FKXnEPvTqkXWD5S",
  "key14": "rfJUMk6Gp1RAKAnW1pnByXf73QczRTReYGRpY8Ef1VMLwzJx7qwk3dgj4rFXxvdTFZAew9H3MnhfXuBPFUwWxop",
  "key15": "3r3c2saaab4NK9v8J1xDm8STBArEvt6yPjSsL3CUpPkMQnMJsEFcMnAfDDwxRngtMJaAAP5hKKD9esfkY33TESrS",
  "key16": "5m5P8iqN6NqrLYrn95ZBMwibG4NcG8jGiUwEY2QeEF4yB7bcXrNXCtAEqZgQEtnhekJZ3crZm3XAi34R7ykuJeWq",
  "key17": "5LLtAk4yfEWKREjQJ2YYwT67LEE4M9P589pTy7WzHpahraPT5fdR3daJC3hFHpEZikX3JwhL4UUUXvbLEBZ5p1fw",
  "key18": "4YM17HrCCZh2Yj1uihSsC7tqek1kHJVPnq31pfKzT3L3HycFpxQYmgFjGsBxr86vZ6AYr19b899AnNqViB3x64mu",
  "key19": "zQoE8V8LEzWENDovdhw4TKfixUj2u3oMG1ob72zYMHYZ63jReSmTfa1j5YotY7Fe6VyUNrkgtRWa1F6shV9Y5aK",
  "key20": "3UBNKp3UUJE9aU7WxZfaPyMJxZYv9FMpQc4MenHWtfo1cZJMLCVrE27z2VLvmnh7BgK5YwPGae6HhSe8t2xdaUnA",
  "key21": "5FekjCj8YftjL34NzkTViw3UGYn4zGxKfoDsK9sx3vpv4ntXVTpG4EHfJX1NuWaZvDZum3mGeLYFFg5p6PQgk8H3",
  "key22": "2QHr9iKaNPyHcQcML5TsMzpWH45m4vzWqvxh6ABZ1ehg4i7VVbsPgQHfrHUn8wW2unVov3VP2JMdoPLV6wrnJRc6",
  "key23": "4igYnggsPyusWBm1ZyjypEr2tpRkGiuEEBaTUamWzzHUQgsMwwfSk2XsNk43SRRN1yPAger359TR6TVdN3sswauw",
  "key24": "z88cxYmCXPeHyMDTSzmiSKSb4ziEzChnhAXDCDV87U9idetrfFRA8v2gKZsvHvSfV1JercQimcU4js7i5F6Yg9J",
  "key25": "4e2NySBoVYLHnoP8eZBtuhaS7GPHZbVE9ddY3BBeCwug3TwQXQyZjyphSQ4rQbSExyZPB9pCuATm3wiqXeNzDp2i",
  "key26": "5i8AvykRDgD2vyNNpJVCchPdheWYbrcKV31iPbvuSHss3FwaDvYd69KB48YfxLX6NfyTEBocqughGKZtTubyt9Lb",
  "key27": "4J76RZoR8aXE4G69y5FyP7AtAp7j3GX6m6CZDfN8juUmdjg9jPabt8baZwhXBTbPByzZY6KiDE3fnngti6J8GMWb",
  "key28": "y7FeYF5y3VBnDBnp2RNW8Eod31upULpJcPo7KikyPxGF8ubavr4oET16VFGr7AGWXr5vu2WtRhesoqkCUpVA43q",
  "key29": "3pquQGjq18CMim8XPLm8ag3sPjqyLQMARZe5t7op1M9Pbnj5mxUftzNyr7Ak8NfVwbpF9aua5LQ3CNgVnBjrjNGZ",
  "key30": "SWtWspEdyqU8BoZeo7GLKGnC8W5TJWT97uW1jPWEGt4CFDTmA7SoKfjPyhp8XoDuo5yF7548PoEB9x1YNYaUvkH",
  "key31": "4E9R3M3cixKbY8A3Za5SQzedEB3z736EeBqg3bP2fw2bmhLZKdz3DBrdA4Kb6sCzPSUUm2Dz4SqhFtBZK9fXUgZF",
  "key32": "3AxDoJ3SWX5njzPtC5mKDBeFHFHapjSY8BoGuwyqtSEEuiaVn6R2bHdPCajkYJpGKB7EHKv7d6svrCxPsiooFRgd",
  "key33": "WRuBLwbszbKWMKVhMbqasFMjK6zMm347DtQbj1xdZ1PV83nBYwEKEVRnYZuMtFUJuCrncu8MKz5yqKFQcJdrTWo",
  "key34": "2Eda6ApFfWzWcbgce4eymibDFaPpWuk2JFB6SH8NFLV8ZmPprCgLx4acFGPquFHvYfeJXBg9XdrXKPwarBKTNkGu",
  "key35": "64oHhs5EmoQsfQ6SYEnF5g5rCfR17dffR7fZZNRQmPMbYt5Et3kz76ACaFzvW2vTrYUFP559xBt93FRsDAKQZ8LK",
  "key36": "38UzJg2G1TUADZBVF54ApK1GQ9cY26kzik8t4PxePX8KRD6qjjFbAZWatiPvsSyENsfEQPWTmP9ueoNjLBnueGum",
  "key37": "55jwybzCN7wct2tMe5eAmX2LNjoD34swdL9Fw5LxA1mt2FTtZBG8KURpsWUAaP2QoSQEeHXiPCUMH3SjV2Xk1sjX",
  "key38": "5nr37WawqWV4Xkqk2YWBWQUfarmjvu8ptf6V6H44QJZdEpc5goaPVjTJK1yqjWsgQVJXiLhSiHe7puNgett4tXP6",
  "key39": "LJ83DjWtovgZZFN2NsNHdHSFKiw2z3pJTEodejPH2modWPQypcYaiaQbhdeimoRe2SsBErZdHXm6MpxgyxT5K6W",
  "key40": "5XwjHA7Kx62ftu31oNxgyF1WbQYf2nbDTqtH21gAjXs4BuRCeQAjFUDBZmVYpKmDPNNW2WeYaX3suXZzzNkkzt1R"
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
