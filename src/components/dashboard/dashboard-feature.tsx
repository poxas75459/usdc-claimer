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
    "qD6CaSzUfy7iGxNoRsQBGvrErRCZXMYtbZKASxsunaTXKK1FBei8V7seF6pVcr4RyXQDaAKoim8Z2KTYv6M9orq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLtBoV1PGbGXNkLTGgUm2XKESCqYKAW31HHmyL3ry7ro7uPNmm21C9ZwKEdqsRx5PtGEYi7dwBpxCjrSxJhAmS7",
  "key1": "sgppdyaJpVKZi4eBRuxJPvPaBi95ZxGvAdvyCWx6NTyujZJPwL21gAEJ9EBcBmJGcesYwX9zM65z95NLNNLpGTw",
  "key2": "5MKxEyQaVE1sumMXafYHAUpX1mJGmiPeGt7qygsCxhRKNvBT6Z36ELhEWvgqR3a968NqCLxJCVtRVNMgdCkEqx3A",
  "key3": "2U9xRMEacktdJXrZ7TkYUnpc9vPRYTsoKXxt1LUrB5zn67xqu6SnXEnJsF66cK7fwEZFpPSP7wqAbe6NagbSTntF",
  "key4": "5kjck16n3zcTBY52ws35gkHyBRixM318BC1SvER1iuvnLMMLuRjFQR4Ascfce4vQ9MQU76ZUQymPhqWSftWJx7ou",
  "key5": "5263uTo9T2s8RivxtkntbQHZr2ETXNrQ3MtyzoWbAAH4WGy465icxkBNgCondhdzBhBWphUZ97dkHCj5fnqnfdew",
  "key6": "5pwQYGXzUyAGdQiAeNVY6hAhiVWWGcEsqwSGmZnkynw5SQTBrBgFjEo1expRipi9vLS9TMagEEGmvNgsQNiQBsqJ",
  "key7": "5FhfTm8vGtYihR9ctmsA9oiJ3ixzq89229bCLs3ZHYDghogxhAQFYzJ2FBqupSMZExyFSfNG5SecSrA3q11nbu2J",
  "key8": "tUEoxPGFx2DVoCkj5EdisFVtkE2XkmnfoSEobbgJoPotTjZcfju4Z1DT68F2CSjGVaDD9Rjv9AJU9FwVrZmQCkh",
  "key9": "V4jkRC6MFcUn6LrmdxNnLe3MJZZxEAokGMXVUC83LMCxCXfk3urgxsfj7Mnjh3EVhcJYMZqGt4nbD5F35xDX6zQ",
  "key10": "ycaftoctw8D8nNQhcapGihnY9Tsru8T9LQFvhBV8eMKnSpHWuXoe4VT5xtjYn4haewVSccCUyJnxoNsgjxdaSdo",
  "key11": "24nvjFG3wYMzrxrbsR95gKramr5m5Dt7e7PGNcCtyz4JBSVTfrLseHmTmCnPNjWS3d6bXeX5YXNm3F5QgkW9atVo",
  "key12": "yDjzbCU9Fxixqe3LTMeeqKwCphWUe1NYKZ8EqMzofQqrYHDcrEKc1PJRHmkbr3Dp93auStEHg7qq6ZYVrKb5eeP",
  "key13": "5RSQYevdvw4mDFP6DdgNorV5xHwMWpdL6oMjLzTvRx9m36Mj4wMGWFos2zgXwN6udLhqbuFJNi4SYPEdmdZTHUra",
  "key14": "4m2tYdpi8JAdVBQ4M4q3CX2WitrUS3qiaoqcbFxtbNwFhqzqa8gUcT4F8wuDT8ziEBW5PPrVVaX1rfezqchKNeJo",
  "key15": "4nyJiGeR93seDHSnoDDYv3r3rCn6LPmNEKR5uv55CESXvAEMdzuZdcUxJ9q6M2PQ9vN69yUrinzaeVy86otN7CnX",
  "key16": "5aMiYs8e3nQt6nmWz74oz5sJR8xA8cBiNeiZkwuEtfXijabASAk8PyB1MBWq9XRtTHHMRN6QDrHRx3rZRpb15VH9",
  "key17": "33Uubp1ZS1NHUAZk2VUGW4Rqav9zS8aQgBeE1QVpQZRS8SzG6GdVSvp3ktZFpDLWbrALnY8i2LXu9DuspXcvWaPC",
  "key18": "2Npowu3ryC1f5pRAEX18Aa3ojV7Le8pA8BJ9z66ujJmXPWXJNH2dPeAT2636mCeEwkKpmsLhwP71YH7ecD6VZDQU",
  "key19": "3Bs57g67h7grQoyPxKiTn2nbPbTtSHkLoXADfCfjMkT6LVzfqxEScq7XxokFGA42U1c5SUQUWGE4BnEDEzSrYNPt",
  "key20": "2iFkQZs7heLh72X94HU1nTovZ7CnPNnVq7RjnAQjiZ1fRpjun2FjmDVczJYMpzrp6Sde5FZrZLsfGVpwA8ikTPJE",
  "key21": "4P9GmTzkifEQ9M6RxsNjKjumga2JYkhq3bVfpmU5bVpABxozp4DNjUJfi3Fd2g5sLN9r2aE9WCzdSq3dkpj32mv4",
  "key22": "NKUNmLE7EUQDG9vik8MwhCX9nSyuh7LWEazZKRcEFtpT8J1RfgdZdf6mcupzX4ENEARbv4QLnRuKhXujqMgguBk",
  "key23": "21qKXdzxVoyf1bEamFJWrSjxdUuhzeCeWdYtNMYzEhG2DBFxTzZfjM5r1xkoWKjFz5SQawydhMZH6PjxWwh7igTr",
  "key24": "AbHQNadNGasNJTePCMo9BhiiwypmKvdoWMj6oZR11eg3E1YtstVVfcuY7Nc2QLxsEiPVVFAqeV3hAFcxGDDy9k1",
  "key25": "5mqGJVCWje6ajWvW49uPLw8RaYCUrwEMZzP4A7tVaqqmhs4DaXbVvmmvMv6JBB6qQmjBR6XUmefLRfWS9PSXx5An",
  "key26": "3jeC2ZadsAAhWHAnZAArz9Hqy5ZUp8K21yRdQSrR1UJhg4KH2sDau93D6G2ALhBfcz1xn2dsAw4JwystHjjqiLHj",
  "key27": "3BU9wgzpT7QvNaeGsGRbp61GR4KMYmBYQptB572uhZfoEprDj7bUMBd4FecGyHNAVJwDwitKu16Jh9XeJ8fJYMoY",
  "key28": "3Ck9W81FWdfBPvhq9Mj3ARLBELj89wPZPJYqJRS8AjZYNeVyvfsTSCwjBoaUwfG3dBNXgBctv3e4zVPjDvv8yGMf",
  "key29": "m76cTj5EbJEy5N7HfjyyHieXc9RxTjHnbFnA5gMCeJfQnLT4kCy3yAFMSNA8Lo8mmJtRmfqpgNcg5YxWZ5AV3MA",
  "key30": "5rTc6cPdNSr29L1WgPK3tzfJvJBmBSrgqh2gp3w1PtXuLZbUyqjAiyZZ5EH4SoEyEFa6Tmvc9xNSnMxha7fXru36",
  "key31": "EVfZzynypRVyNCPizZCFVxQCdmaD6jTzgaFMrxSvCvqHHg5YaKa8BhXN1XcYntLLQNtyzMh4DftTi6sFTA5X679",
  "key32": "5iZVNFn59DwLKCFsgDmcu6co1jbnXZYPS8TdDKo18anwZ8FXTANRgWgrKu2NUSvvioahE9852z5sYgz8GA74P2ss",
  "key33": "3Q1dDf8TDn6h42QfJLiYSgiSNgebiQ9i1c9LJbcuJ5w16g1NaPJZbXYCn9giJHskcVSbWrQ5Z9GuERdhwdwByjW4"
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
