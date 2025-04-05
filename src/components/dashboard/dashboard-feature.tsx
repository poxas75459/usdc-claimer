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
    "21YJjiJtpKGQC3CkA6s6Qgr94SmjigYvLELCbGaHPpKNhnD4VosEV7jRkCS81V5nVgi9tumF8S2gWTTXRbKrRdBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gB9Pz9KpNukMFnvmh2uRzQ1we55EMYH2crQgnr1Wyy3fzst2p9SJU5FUo8eecBZxfQ6dbY9NUhG8hVUdkTdovtA",
  "key1": "37jNfAy3Z8NnYtcg4nrHpGo4XtSJxw1kwRPTKajbbT9j8rTC16h9dHt8uVYSCWSzqTDGoa3KsdawgzhTwnEBYbki",
  "key2": "2V5Sq2FoGdWNzVMwqGHktavFk2nnhS3gv3asf4oHYKJp6nGUuBmeM1Ck3zACUCGDum15wMv8CLYmY7opskNjSUTF",
  "key3": "5LyJoNFN4mf9zZhisBCQdRAda6zb5h9z9mBGoSwZPUKmf52pNUby2jb2F7ZbBmUvKzNieMCswjZBPMsNHdkJSXWp",
  "key4": "26vYhXyFCDNp6jSc4AMAVdWLFrZjr42EKSShGcGfyRFVxZzKGQsMeDtXsf2xz6Lvm11aei7GrNMRmqTt6AVF7oiG",
  "key5": "3Gue53isP7advtywuwPqxdGgvXJp4ckHzALyKHQojrUPRqfjzRbwBVf2FcXZ8iaNpLc9xHitWVq7GGt1i21VdqsJ",
  "key6": "65c2VPQqLjFQXwdZjDMbGrfykcDMFhZ4GhbiYmCuUYBH7uunouMspNk6L5uhEsucKwzw1SP17QKWhinRgfXQEkCM",
  "key7": "52C1ZzwtoH9Ws6SvJqZ5mMCWTAfXkxaBUxDLhYiVD9kffuKeyZAjAWVuxh19eofwnaJEmKGXF6RU6AiSXCfY2Axr",
  "key8": "3teCWEuKRk8FH26GY5qEtZnRbYyzbXXHNWfeif87mNdZdgFJ9cMh8UveZhtidaSXe6d76Lyb616JspSF2AWuehDt",
  "key9": "JahiskXt24kDvaMzjiQyWarzmcfhi6eAguER7guH8zyeitcoL7mSmGTHq3iFgquVZYwVDth56h1E3rXpHreP8KL",
  "key10": "4hWkHJDkkX5bYqWxAAeqeizuxmxSwXT3te8NJtVSMvttMTcSVtRT5zb3Bfm8gR33nTNbhCew9UZgWeUiWJQFVUU",
  "key11": "4GX6X3wYjLJhnhMq1YvYZMsE6DG3yFJAM4RhTqGp5dMHNFjyLmeZyBoWfyuVnSSVR6p312XaTLsuRqbhUxtZwm5v",
  "key12": "28ujbRXRVMgirE2dZUL9L2zCDT1nA9nRAHJp8pkKaoLUoDdXBQ6qpZ1WcVvS9g3xCwQdW2BbMW59SauZawHA7m6P",
  "key13": "4xHhYGeBH68PFFNtwAYx1VxKC4RMSYwdCr1U6PifLVto7Ku4vThZrAqbDDLhEXPhRK74LdRmv7ycvFL4v1MuiPXA",
  "key14": "4FYkWUzi3kFucnwvAgi5t3Y1RvYhh5FxgD3a5Eigqdgi5cHZypFsYQWP5GzaSbs5kwRqGUa4XGwJjF2qDWsPgpxv",
  "key15": "2RRtPnJrTgmEUbbjHvaUcGG9KrzD3jmVP7xc32kUf9oB3NHHSt8v3gsV5SZXEVBVDhhu7xa8XNQK9gBaCRoRwikW",
  "key16": "4ZwmL18K6MQFLy4zbkjxZY2fwCg67UEvP5aoqTZnyJ9tqWgWfMm57kmozrHQoXSm3pNzkcvjLP92Nh6kZjnmd3Rj",
  "key17": "4rAwLwMSEwHbkmw5naPhxBWHNBVsYzCqYwrSMfCyhCJ6GNkGFYqkK5ksSp4WAr6frHHAXh67S2sm8Bt6LqmLJnkr",
  "key18": "5b3bknyoiB46egi6cFHqPZ74r233bsPyVhiR9SvSGz5Yfirxu4bY9pSrqPTjH1pmvGSS3XsrDKfckzdkWp62kCJF",
  "key19": "xmTbEbECvqgGm1jYGgcfinnWn3svQm6jPau4GucT6zrHqrQSe5dzfoy4sLBzDTZuVb36hR6AVjGysofnthUs9eJ",
  "key20": "3JgPGz65yDVRie1HGcaVErfkBHdq2cJ3BubY6HN4jw4EKD2CUTpSFded9PuaHUS92sPMF2pd6ePfi2a2uwQyktY5",
  "key21": "61svCsmos6jUkdeNXbSGtQgjUmwXUZNG3pL6WTj289SAh1tdNP2hZH49bfo24D3M9bhf6QrQUprt4KYdbWsnGciJ",
  "key22": "3cmZdGqXQmAjXBGPNvJt5ULRvmSpTdydTnVqPheqzqJGRXyuAx1qnrqTvoyY4uCGeHdEEPgJcv5iZNzSTGvuidME",
  "key23": "4kFTvjT9ucJuDxD5N4nRSim8bi8wdYaktsMogbEqnGjyXnG93zoD3BnPctW2MgrRzWaQqGakk6MSekgbcqSRPGVG",
  "key24": "5sXexUhp7QvuUz1TvHFY6Uq9XWq4HKTk3FoXncLfDs4kT6yTCpgtkuHUpLbMfq838FAAaMPhxA3XQa1ecmNStzC6",
  "key25": "2BT9xVEWGZUpsrARUffnhNskf5A1ULSpMTcbT1z7ackPadxd5fjsREr9tmdz3Jiu9ypkYuLWYWEmky3tUytgxToV",
  "key26": "bYzmTe2jnwqyQu9r42L37pZUTD9sPgPR8qr79A6P5zR2fyNdA2B5n1Ex3vWeVvQnTXXju2BwmvZ9P635CcMABgg",
  "key27": "5wtjhRi7pANRdWT68ctzVpUjRvRkDs1pwHhxAaPprQmhnj362gW9xCU4pCLq54dwAtN2rwtF4E1UL2JiDBFSpzt5",
  "key28": "4tsuPjiW6iuKy4tq5eeRyvAuksWUNHn3o9uyibdd7oS5aT2bBM8NfZBgLfuqJDcwtceaReXedEFeyP2dxe81dcyk",
  "key29": "4ZWG5aG7VmKAVBMRuX1JtTxjCApAqUuEtW9mpgsJEdmb6SH99gWkU4AusPU3iVLf49gkxNibtSRheV1PnYPR288a",
  "key30": "4aJkkh1Zt623MX3fvksppWkXADpQSp8Bx3PJC9ALp8KEdCiNfkcqVhwP8jGruoZdx3AqV4ghDbguJ4pD3tE3bLME",
  "key31": "3t1QW7kik67zXGuCnpN11XsfKXPuP39HK8AEFuGEGjgUWcu4WfzBXtHbNK2xsw19Khwta7a6YVWhq73fVB7tcYTb",
  "key32": "5rjq5F676HJBtuHxYrD3SZM4T3DdfQexknEiyyMuBauC3pLvLSHVXSEbr85TTx5JJfc6JKaq9YB3zRXcNgAVvbpW",
  "key33": "5amqhSzWcCxe512Z9vu6aEST2Uyv5XwQvdQi2adiJjdBgrXYE7ThrBrFo74U9iXv8Ab3YA35jHwP1qoknXexGfeb"
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
