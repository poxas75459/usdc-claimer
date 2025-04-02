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
    "xy7SsakpUAix19uo8ufEFEcupfuroKHruxVSboHMNUyt6FBpJDs1WnZN7kzy7oycUWLUtpCzTPJxxLjRdUiKskQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tJ7yR7P2nA6VN8sQdxXVSLp4mQ81Zmomc5yqnQ5amnJapBaX3TQ6zUfNq5VFXPe63KZ2ucu6hPbrwpmKV1xNoSz",
  "key1": "5FWvNTfbzTo6w1gdeYoQu6bBowkUt94zKqtANPcjnt6sJsAbKXEwKD7ZENcomd6tDhK9KX6FrWCu2q8egxhUSMDt",
  "key2": "64X3ZdBPGEuWefuR2yQexyMVSGqNco8HPKHZWg6MJRDmCdpQzXRtQDM1Q4CSxKyCTxz7Rti2rkXzJe6vkJy5jVsm",
  "key3": "2W5iF7aqWRAaojfpHWbhVFkBhvN25tTmpDxNXaV23ZqF8tPGpCUL6MQyu1LWXatH1pXG1y3kvUMELtx3U4EKoSVc",
  "key4": "21QmM2bTKdimqHDU3GKPJLRMMaB7bhc2RBskW7kN2ezsVjDtL6DdGxmkznbZCWoqb5anjsgCKfjMqivkj8TiMVhM",
  "key5": "3PBkhwiitEuqAiCB7JmrU3uY5WbWyb1EBcK2MR3TksehyXELhNjUD6wYcRrLUBfKwVqa64zijEhqo3KLFmZvBMX7",
  "key6": "2Dbajq4hwTr7XPCNX9V4yNiKJZQrFmxBERk3hUTguGpi1zchXoJ3V3GSww8tGqbj3ee6H6pBh8F36VqiTw44MSdd",
  "key7": "kXHGgb7XtgihntXMdX41CxWUzjwUYTouKF5ksXzGBDmZCahgKGUAgp6WrmZWZW81a8Xuvb9Do2AXGWt1YqedcHJ",
  "key8": "NxXM4CfndyXjSn3acdXKAEDsycg7cQGJdGzUMUwEZZypRmfThR2g96jNwXHwNmuXBRkHyT3XnL35jFeufXbCC37",
  "key9": "2MJQB3Jx9qVKWfzpU5CMCiJPwECA8tCbsAaFqjVZaqphiitnVc6cu1h4WJse5NzSR26hoCVz6aah2tyoEysxTgxA",
  "key10": "4pDAAjAqZDBNoNTU1NaivXQDYC9GjyhDitq9Bam9KykpZePB2dAcMvtJyPdgMUwqwNyqYK4YorTiN4L8adsnmgW5",
  "key11": "3JLnusMDNakzWtTmngdxMhV6J6yP4QePfTojdzC5QtbbmLvEDBopepMVaZDBGbUi41AvN6dawsf13tYkhjK7R951",
  "key12": "4GCkoQKjw1S7CzjuLSU65iyNvuLykFLWiUtkV46emC95khUqghxLgry54keWv6v9zathqxDwruyrepbzfgdwsBaS",
  "key13": "3nL9fZTBUmBx1Lf3Nmnz6EiLhBTRbjWvwG7W1S6yGWKKS9c6k51MKCeAZuvhhU3FTN8z3EYVnLRJJXUZWnFQEpVV",
  "key14": "5drnwgWsLk4Vr5NoChKkf2PNaFxAaDpYkyAMqGUBe7P1vH34ZYswdpm2C5mQVmNmkn4nGeeBC1LQqkctccGcJLan",
  "key15": "3TcXa7JK1j2jrTKTeAM844i6DaVnYyERoadKjmwxp47vre2jSmsGxrYNFUBFz1Pphhey5ZPReoKqpf9wA31YiGqt",
  "key16": "9u8uEo87SCVyNJCMjHJYL44SqxQCoBM5ZqS6rpamzv19Ht3heN6pm2zheHGBGvtwzKPdwGvQuqh41Q2KtzTYHmg",
  "key17": "Vcj4YARw52xMh7LVxpZubnrj6BM1ZwtvRyEBYQJjbqyeWxT4CH8qoHGPoYi6u6NtJpF3pSdV4aMqeMubG3uwQjo",
  "key18": "4LpJX7i4Xi18NZ4NBRCRHffGDt1ZFq1ViRQxHPtmVdY537V3NTMwgg1hicf7bYivweZFycVQkyDR2WjvEcBE1HaL",
  "key19": "4aTqny2QuzraRrR4BPNUPSCce53iEsVWc4AwszXkywfdFMR7HtFFFz9f7AV8tQK2U3m6X8HH2BE9tmuLNZC1u97u",
  "key20": "32QT1H3oAzJZbwis1Eat97mNKmJREpBCfdjUXQH2mGVYqQYdw9rfhc8XdTAQsqSc8iKE1tSoGhiXMLRyub7jLsrj",
  "key21": "4zy75KRqjLpQdRXinQtMtHXrwJi3vjCvCTiXUPFZbfqmPyeCKHL1C77GgCQrCwcZRBgFNg1zFMLm7fMCxLT3JjJj",
  "key22": "3AomQ2cAKVTttEh3gcQT1ucrTQwYt259jjQtNMi75uVttJnb2vv3LLsrr4fKAyEKUPfNhyjsu19i2S5s7jxNnVC",
  "key23": "z27YN3cevGbb3Ep8a4XKAoAUGhK6yqCXUzEf3kxXisgMDoyzYrMXbmF7J1DAgFGDVW6oMKTiDGvgnc77FtuZZoq",
  "key24": "37KhjcWxqaFFHLMCDzyZijx9x5Bdn1yeh3VCrJNRGNNosFGGbU4rfp1pKgwfKfcJct1XiKwgVEM1ajBdCPRitCEW",
  "key25": "2FTt2KkFLXcibvy4g43xvxZdMqTES7sVRVyrPrCrz5CNTHhM6MpC39sWXP3tMScdMvGByAgbEby1LyAWiSd4ozAa",
  "key26": "nRh51t3myzSzVfirdsiPc2uzyFm5zySboCWf8WC7k7tq3HcNHKpH86Q4QYfXRuVBx32b1W1PVXKNiLMHHd3ejaJ",
  "key27": "3s6t3fmJEr9SPnLUHCC1coJJoUXtsBLbYFLbawPHuKaj4rqRn4RvYrrCezoFRDzUB3jvEcEbbmATRAn5ybMdp1hE",
  "key28": "2YU9zgGARfu9H2TN7feGyP1rP6yT2MWaCoZdqQwXH6Zt8pV2FrqAi2p8JbbvubKRah5k1RguddaWi4AbyVKydqW6",
  "key29": "45o9T8eKzioNHmrAYqpZUZ5vhLsK1A2GYzv6orZJKEA41nd9icqV5Gnp8BcHnirn5Pb6iEGaDYKRKprQkWUxqESX",
  "key30": "57x6s5B8hqEksZyuEs29b1LrW3sCs72JV5fqp4GjXKckgzARcHmd34yFMAYs7BVyFap6ebXGZMLAbaA5c13FN1G5",
  "key31": "sURqFCjt7AiHfjF3CSmbXpXwpwWaVV6jicMVzFY3agMCBvoePb9XS5ZVnEGgF7MUVEcb1V1rXbeQbTAPGC1Bhxe",
  "key32": "cruzbJZcjU6Fx23XPNwUJ7ZBnS8pFuc8TvUCKhAY2h9wynab2p5JfaicABWhDUywkv6F2uFJBZLVJsJcmJeuydm",
  "key33": "32gUeqGwoC4m93D5cbKxtgugZEEdU8SK8VbpznyrYimYMCwvkFcGAU8U1YhniPfCkC5AZ6xCr5BG75J1n3QBUqTs",
  "key34": "5Lqc1EDEt1cEhRL913RBJcN6p6H1CK4uKJCBCDjJDzAeBfMHiWw655v1m49W1w4iU2Jqn6Q9i286jtJcwDUK6x4s",
  "key35": "2AgeAExyJii5j7SZiVZPafuyHT6uRpq7MW2kjMYrf9ZsdficE1XiZVZAszzNGuPvs6yu6bH1xB5tTkL4b2tmuQAL",
  "key36": "3gtZ7ubPd4sXWTSw8bp9gmugRmuELgM89pgaGmrcetiim44Fo7ivzSjbS2ubrRY1M8SVPuTYqznQjK11faYYdxmg",
  "key37": "61dqD5HUDysFGGogkECw9pvJhn51nDaY9oJJgyzrn3KJxa4dKvyX49yEDPU669XMNwUu79P4rj7tmSXWmcib7P9y",
  "key38": "4U9RbN8TW6ZK1BqmyermLbqmV9MnGJkpJBx1znp17GiwSSBep3ePafWTqruXtdSAj6pnXNx5yDTAo2V1ykoeTDSM",
  "key39": "5AFpwMTk5fPRa3VEPWhkLanoKG2eMBqazKEwkEusnzavgEuB7rnTbWd7CdD7YsE7va4NfEF4zWRLjmEA4TE33YdY",
  "key40": "4QqpbG3GwU3cpb3nwpMFbntDa1LSca9nQHeMt2uYjQJmhiwbYGYYHwPFK14MMXGJSmuEuBpLQoc1d4fBZW5TTgRt",
  "key41": "3UVDvNuToc6ixoSNKCvUZhncKSVB9KGNk9tmtUknY97FQ1AvyVqFqms8F979rnXJxy1gGS8cFWaPAmdNGTV5kVit",
  "key42": "5ETkethfPf1BNwGHuv8V2QptDajAiEuBSCw7Q4rLKGBKDJyec5BsPmgByztyuWRwxdwj1u2AsZrFMh2E3tqWSM11",
  "key43": "5WAA6ESRRrW4TprfeEyYjbX2NAJQJs52FqFNhu51jWpeGHHBPAc6usE4XQaCqqrV7EQCWTYere9RDt6BLaL3LvVv"
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
