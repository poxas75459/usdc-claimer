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
    "5hEyyaJ9sPMKmFiSUBLN4m1P79Nr63pCdtWoX6V49pWZJuR5enddfMeUmkWBgZhXBvA9BA11MpZgwm3mZiHVMt7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyxbPfXHZFjXMZg2V3gQ1wvFB97etjbKMEXVtVhjMYQvgvMUvMshvrkWJgsVBiFTs4JFHcq1spESd7Wvny8Q6Hx",
  "key1": "4Xg8BhyBf3A2BtPzoRupskUNsyj9fTUjEzRTbV5qEQsFJqupsDbvmwzxZyr131E4ghsagPMxAzgkXMQLEpoxU7zh",
  "key2": "4AYKMQnjgDMnMe9VaFJ7WXsaqsrWrCL8JacZ1FjV4g1ED3sMZxM645RMjDTUrSMFWKfwwrVciXTLj36C32gGXt5C",
  "key3": "45YJ4VgCKe5WKbiAjVMrtLzZSt84MHGE512ujvbErnmGpWzHveekdDeLCCQK75rzXZR2sHYJNGs9P6hHwaRVMrJ8",
  "key4": "28xrq1wrBHjTcxmEcKpZ1gcd13Nou4NkP6KUzKYZqNY5WCyv3ucD7HE83GUkdxxTcEcm1PWreMCZcsQcF6vKnbQE",
  "key5": "5Q86NF1dY2Zmb9nDqXSsy3SfFWH1NisWqVaJXm7dUZHxYShXTMtjy4VhA4tEbXnuNBcH9dDTE83eGkHTLFUM2mg5",
  "key6": "4UvJn77M8UcmQ2PN4CFixA2AvbDZ43EEtQqPTR4EMBL3XAt3YUGkD6G72GZagoCreMWVVGGMnkrtKjX7kFc5L6XD",
  "key7": "2ki3N6QvXMvsqnp8XhCnhEAKj5w2iJ4Cmy7UT2RsA6s5sGocJz6rTfAAJxa72bLteqiofSfoTK3cxetRwhAUqEAm",
  "key8": "2tF8cjoXvoqCE99bmuiTNBEkDFqkAiyziGNCPThF4wsN6vX1cAC97TtGoMWzSgDNG24iKSJ9ictiy55zwVKFBXHH",
  "key9": "422mA22k5GbJcFzjog8hJ731EUvm922bfgKYj9ZUGXgTn6JoUCogZ1VKafZFiiJNBUiBnTa4JVxJKou3e1XGGYFS",
  "key10": "tShSGYncv5rqyk8WNWSCjfpBLYMgNAZQAcCuRZYWaN9RCje6ARnJ7zqDpiyE592LZg8ifdETCBoZDmMDVwrLrQq",
  "key11": "225tpgA2ovr9rsvUi3RfgDLCXdQcYDRuxdxtUu5RS7nW6HHy7u11tQhzzwystcKSkRsfC8nTzN71sfjiRQJdy69B",
  "key12": "2d63GtLuFHQm4F6skayXZuBRGDb6jFFQWBHqZeMMBnLr6n83KauacZWRHnV86PvAvdBWy2xMFY9NED8M5ACBWJqw",
  "key13": "5gc1g4n6aDSpLvZq2U1QTsTDmAHCbSM32cdXH2E8E463oLN4EymjzLpJXQp4cfYpcEHQQW8ZoRhidrhjndVvum3E",
  "key14": "4BxECC8irB5Zq35gpjYV6cfLH8pTGE6RAon5ZZBmD7uz9QLz5GcBtEMuzBPTVsb8Loxv4eR9NSGzMKcje2Ji34r4",
  "key15": "5CjC2bXLpzhBWiFKnkE5FC2ScrmEk7NTASVvuXhzKqqvcNWSfNRCEixcn7PsE6BSuCQP4vycphG8q4KpEU82aPQ1",
  "key16": "3SzERBfVEGhYqqsdEBtKWiRvsGvRQ2xLSTvukkYHQ9kznAZPE1UaD4ykDsnEri8ugC91KwZjSAxsWUVjnWmKjFwS",
  "key17": "4FQFzkbKqMw1UPDNX5DoeeQLKoVotHSYx5Qk18xmeQwmP5cKYbdSw44sbhhGHmHqoAoFheXdKubQ2KhpfvETx7Cn",
  "key18": "8SrKVMeMnaeZwZGKvayNXXcsEW3Rv81fB9jMDF5Axid4zTCcpCjs8XJYiSadnUBhph9e3P9Sk5XAKmsy51r9ANH",
  "key19": "3FffKaCbpuHonpfJSJ4qRH5ub3DzNppEiz1aLLtePtUBnnF9yetLjgBQiJXE2UtZKxAeR1do4wpyzHKC4UzH2CY9",
  "key20": "55dHaWPBvb59Caj6WzyEFNUEcWhsjdbvQH21apq6pNXqNSjAMbcLwrKEo8PqwUgupb7KKaxhiRQegLm7Y757ddww",
  "key21": "2XTVJ6w5WY6L9aHH7WZUFhkChMome6NDVe7NbvsaAtUmpvCX8xRzNuhXLAXG7iNTaLefoFfPf2keuBLXqg6ezdV1",
  "key22": "3LunToBbMtQnSmeheLKTu9BLweHKhqJMuHFCMtMTfna2z7d9Hcur4axkHEkiwzdhUaxHgquh462jdSxZak59R48h",
  "key23": "4fFanmZEzBBtM3SfH4tiMr3WdasvTTP2TVMzMrZHqnyZ6LuqcHKeokAL6KbkTKwAwvjtNddoJtp2QoqcCf3np9pj",
  "key24": "ow6cp5rtC6QUoPk6iqh3mn4fW9ZkmtKUD8SoGJ2EntvSNZP9WaWvBeYL7nXFp6Hn8gYDJ2YecEPL17LbDV3vh1j",
  "key25": "5WqGZQBoPapD6Kr1rNeC58KqBQdqdhbzKHJJCzHMZp6Ld5pLyj4cb5gSsYaGDcAPPLbHpVd1RGA9ZjmSHJoddc3M",
  "key26": "3P9irzyHCYxZAU5HXJJ5mvfwJzWCRemDZWkSCwCD7kLY5vQM5neuQqQnn7bkAtqnnTFcTo3tDpXCVQUYjmAwzCew",
  "key27": "2Uterxg4HHsxh1i6wqRUGQQouLYJnVdzBV4My7hCHb6DoGBX9AsEFXxvZ9A8wMRcEK9UV6CkMs3qjfHfWQy2jJhS",
  "key28": "y6PQfWWiNACBCfZETDuLAyDEmXaHksyUiH1cfmNr5Ez6LXjUFC6Cvwjuz46Sd4iaEVAFZkFFr3knQyKxgCW1V3F",
  "key29": "RdWMJxA6ahj1mgK8ppve7sGgyYq567MzXt8tegLjAuxRSJBE1HNXyABfAM1ABf8WKXQQFxGpS6i6xFZuNRfVTKU",
  "key30": "4XR7cTWqCPEGPojE5cdxFBW7LqeP1QTCjdmtPhE3xHVf7KDYcfoJvvSM3Uzq8TUtUs3rdi6KmPxP9t9EzfxgowCT",
  "key31": "3KH91QAnHhyhYTzBy5bEVtq1UDXwsWtEq8Rq8PoMaajU6uiCN2NTQkPNmP2cszzJeyTiHPQvWzqo2tPtoxUXCcE6",
  "key32": "FuX6ycqwTqPG2VL2MXmGmXznieAuBTXUUoPpHTNrXbdAmAP5M6jE3sb8tiPsw9mr8uSW6VnGFnbaexQurAFZxb2",
  "key33": "5AQL8NcoKL4vjTWFkdNTVSvePi49bqFUVPoEvsYFWmD8jiLoac7f14Z9cP1hZKusHSHrnkSjE6GNnWrfsFYxyAaM",
  "key34": "2ejZMDiri9PRU3yscUVRmgELueNsQ4uNee3GtMrjYM71cyjsaExLtxxRdfUZY5dLqR4W2btNUTPcHrQT9nkTiGAo",
  "key35": "52e6hHja7huDycGmR8WfHBQyb3k8fPvw1FYPi3oC1e3P6nyoSMnRte7dcuZSy4QfRUhAjXTLprd53GBGQ4PLCqK1",
  "key36": "3HGrpxmfG5miVi9YxPXKLu1zeNWGjbWJupTxQyCQJTd7BJLnFTjJTidQyfhY4p1UkQfKRHh7q4tnjVQ4A3LYgE4n",
  "key37": "3Rg86cL4oanc1T6eiEwKqtGnbqvVrotNgNGDkGHHvECigpYXgEK7VyWmuHChwCqqcg6Jqg9yaVU38Nset7qk7VUt",
  "key38": "5Fia5J53ZuMcsjwd3BvRSgLnVZswmbjwnp5oFZz2WF2Vg5mfjqVGry91mGa6253BqFQKuPUNj18RVFRZbykKmdJR",
  "key39": "4885fNLpF73aY9iyF647TEiNWDZTAtiGD7nZcn41y1yLVq4TzGSnnjUXxpk6wp3QxL5M8v2wfFyDwkhNev1Whfvv",
  "key40": "4H9EMFc8D9sMrBtR8NEHKrvUki7bkUPBn1doXTgBcZe89EK7M5HAMLptLAu2sBJPf35DMoWiJaCjzC71x8s1XnVq",
  "key41": "3acAvHM8rSTxLnhB15qmjwfSn5LbnXkX6c2AaQbCBCCiS9XzcejR1rbNLcHwLXiTH3F7rr8yRX26To2V2Thzgmts",
  "key42": "4uwppV9V2mKsxqjVnbP8pCy9PEjLbUkyWFF2WcjA5u7TUC6NFHRcLGrzTAv5mP171dk5HtJfbweSVJ8Qb1SPGPj2"
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
