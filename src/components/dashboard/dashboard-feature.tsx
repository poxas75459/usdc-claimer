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
    "5C3gX7Q17hge8hehz4y9FATfYuuhy2fXKcNP2zvDdCojeg1sP2hAhq2J492d9puDWEXn75Rbj2DC6bj5h982d2Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdrcV2xczJmQC4Whha8hC8cXUKBX1yZXWvRMg3sbLpkaJTuKPQuzyQU1mWK71VpqHTSUSDBp4mqibjmyaD2YYxa",
  "key1": "5VPKTQsnPzXcfhdwx4jTDkMKc2VB9922DMjMbRXjGE9XQ9m8ZZPbuoASYBoksAXjW6Nds45WMoomJfiuNmvfiJ7j",
  "key2": "5zpvkvhmp9Au6t6D6L6JZpyWjVDCEYYjGASUixQRX8ycsU1zYy1BPKmYCVasDoKNLohRb6MpCHGJSWdBc79qP9Cm",
  "key3": "82X8XbT8KMkUfXYKRaKLGA4mSmGB1yemrFsZgQqzAoQ6diYaJZXnTbNBn3WiTHJAgzJH1tQQayRBAEssuvop7qt",
  "key4": "5x5HvUk3JbKBR4pBB9GGWRxeYtUBgNYvWG1Z4yZqDvn6nYpR1ADTsrFkV1pzoGsZFufW9HVAGzv3X8JT1YRLoyWy",
  "key5": "3y4XdsYCfdZY6czpiDSmzc37EfRsNH1L8Lws2baiJM2KmpFawxqekLrLavVApWS7B3q1uHpkqAFujuFGwCWroAUk",
  "key6": "4hdMPnePw85DWLMhAncFCWquYjErk2JAcVARbFaB6fbWZmMNhxdFoVBtYdrHzRRPdVqtsdfzAA4zkTVwTHMfoQhw",
  "key7": "3oo2v4BBT6N8wkKbA3UpkCz7WK5mgHykGjxGcDKtnwswsdWEVhPkTNWzi6GG3JXaXjHCkD5mXuQf62E8Qdsi2AhJ",
  "key8": "2XaucYhtMmuHxp4k2QycwBKjDX6n4ejLhLoH2iwcEyJnCUsBKLXqtdaJqg8n6P33woEaMHCsdtqxQhai51z2fV1B",
  "key9": "7TiLwZDsa9rHJh6EdhbR2m6zW1G98FzZfnLFKemg1eX8cHscoSKgSERrrTifh6CHWfUYU9HMjzMjxEa8i9TaWbu",
  "key10": "2XfuXHDyXSupdPDson5JUcvK9NaNcRhQMKbbFFFTaE23o7JuvH5rydsMSyN1YLX2e3THhHjcGAR8AriAm7anjhnL",
  "key11": "2RuntdU4FS5dVeYvCdqDkzJQ1ankLBQjD4mDaggUcH5VNLo555frC8bSCYP8d8ttDMjKY1phpemfd55WwE6QMw1p",
  "key12": "p3ZqA5dr5tP1iCWgZebjHg7TDJ5ZyvDuMhQEHhV2Dtmmt6j6pixXq47U3ny4kBcdpym4FvTuMJcM8r4yauAiKqG",
  "key13": "2LUHTjTf3NPoMLfx4zAqceyUe1Z79XeNH6ELZhzfk2Nwzh4SKXKaRdaqimMZXjDg9yfxN4qSfNuMvpYg84op7rBN",
  "key14": "5Fq52wHU35SoUncZS9JZpwXD65ERSryh1zzu4GU5yu9WX4E1UDzL5sYWZZqvM2QQ9vyEAucDWo6SbwtAtUE3sTdw",
  "key15": "UP8jRmzLg2tAsjCSQcHzoEsgrz2Ey2WFNx83esvhLcV4SwfAaQvbcNsS6qEuhRd9mwHYvg8oFyvS5RKoxXUL5Jh",
  "key16": "5C8EPHPCk74UdLhFUxs6EsRReaiExxMBcHSEvQ3ZQRhY5RaQco8EXqDPVb4x8XzMn97m7iKpthwWnF8b4Fb7fk6E",
  "key17": "2mwvytPStD2hk7tJMYSPSMBUpksFjv9oyU7DYC7w41KMa9idHLuYp7QQLKjEJfyQtKxuhBLck2FRLvB5NC8zwWwC",
  "key18": "3VqbccBMUbqTVusA4abUFLax2FKvCfdTtDagXEPYfP9zRBbEqad7uTuRqZQAFWj1yhLmXTaMWJGA8fm44CQawibx",
  "key19": "4Yz5thFKu89EcdBFqNx2oFRABTXQLgVny7c9Vzmk7dDqAr2kKvyTVHmKzDh8FvQmT35nxRp3fwxfBV2u1YW4bTGU",
  "key20": "5Caofzzw5scaqtoQcvYDbekW3DwfPgJkp6zErkgCC3gNAzz28RXfyzVsYpfZkm8uZkDHXxx9RnprXe13CadRmxr5",
  "key21": "4KwsAcpV1xvH7svYhJSWSYa2XQi1EH3TCS4aPk26dkwgnjriDiR37RvywcBA4XvrmHGRFNMPdL9dhTz69W5PX94k",
  "key22": "ws6DqwNp6StgGLFvFMWQSY1nFkFnf53skMcMgcwkhAFM98GSxSNeJ42AeSvR1k1nju1WjZqvoz6W8jDpZP1t8pn",
  "key23": "4N4RPyh9aJg3iZxWBPZXWob9viwFr9TP2tnpPw86JNqC1YSMriDbMhiqv6uP52rgniNYAND1UEgeKDfw24yyeaBg",
  "key24": "3hbvDNZTSowLWVZpunzUGHcdcbZXnvbDuwCJn1vY2wiiiJzPYrfTxWWtfMXVuz9xV4TKr4kE14VG6rrmWr56rHio",
  "key25": "4xDbDmWfKgsVhbv7NdJ85Tx3CngA5SVo6AutBuWD76kkGJmpxRSf7pcLAJhpMJcyKkNEDN732VRN8GVZAsbgmU5i",
  "key26": "5n2tvwFaQaJu9cg6W7uYuE8XYgFs7zoYxqrenouaM9Q8VktShvjPZoNVTTWbrdZLF1krwTX6LcycernigaGm5ZW9",
  "key27": "5B1hsVE8BBxRk5mk1kCxwf1iNNnbe4mCFZHu4E6nszER7kXSFVuQHKobzmSUVr3C4YeX6nExUUVHGoe5eSGETkhh",
  "key28": "286ZvQgheE7Ky8rbktkSUgVt1jMrXPWZX2QvSkrRcKWrKa7nCDmtwRnnv58jE5jZCKVAyiBiMyiy1J876Yb8TryL",
  "key29": "4UdbWZXc9ejUriG82zq7uJAt2E4xyjGbS96uZfYwC84MLAwJM9cH9EXQhiBzyACFeTMowFgiAoZ26hAbJp9PjysL",
  "key30": "4N3gVXb5u4EU6GZkYKVCaWn6LaZqBVCjD97YsaMEhNVkjBMj8PC9wiqusgxTfqmeqCDhzvAbzS6XMhLDna94r8Ma",
  "key31": "5QWcJBJTbg6vrEy6SpaWSCwGumMStKcmE7PJM5yyUFtrmY8h6PiRUAoPsD23u1QBc2gu8LGev6sYKuwE5TmAaSmY",
  "key32": "3bPU3DjxFLU7pMqWhvG2ot4vHnBSQV1YLL48LKyzsCSHAB6uwFM7ZLFUq2U6vieAKX7BkJXzfTag2FgF978MgTJm",
  "key33": "4HjUqFqoLh8kjh7ogis54P9ngkpuNKdQohaTVMjQiGGYn154QVq2JDZNTQkLdDDVSthboYwegBLYSHEbg1EzSpPq",
  "key34": "2TSdNYdeTPkAqKwjdSFtPGX3rjdzyEmyAmXcvZbE8HPCbdt1MvZ8mcncBFnixU5kFfoJ48YMeXDGeupKQWa74sac",
  "key35": "JeqGdHzpzDwbSDdhRH1wb119yuygGjXALy4cWJojrfQ4Wm5yeWR3aD5dGtNTNVKfZGu7rbE6MFRBKoW82d9XFFq",
  "key36": "FV2ZRxHUpa2FLpKUSN5r4Yceur8gj4MwYB2m2owDvHKH2CyUnXqT4WPmSTJEQWfyXADEvxM48TrEsfrwrgxoCXn",
  "key37": "39TcdaaHE3SXL5VExpogqe1Py3f8LQHGCjRvFwyJeyPQ92KYDv3Cp7NHfk8Yq8vXJBeNFtaD1KcLHgjRofyEKChz",
  "key38": "41YmfP7NPtZiY7aWax7egHtv9MTmS2CHQVeBXDjkD9LNRmLPH1JNDGXhMUqPdVsWRamfkwx2UzEUX7mijHPwcC8P"
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
