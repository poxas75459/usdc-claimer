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
    "4oWrb7CH2UF1VcP1A4gYnMADeJSiVsLe4hiNpHzuBbjgRjexBSH2Wm1sBNAebZcFpWYXunwbnbScvmddVtdeTBvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjPjozaXb6AJmmP5W87LRVwM6o3ZmmnQtY3cfcBBzutuV7NisgHASDAUS2iLXDeK3Vu14VgFiWN4xPtzwoyY74x",
  "key1": "3ay4gX2GMUnNLdmhex5Fq4zZ3i7BoTYh2nZwVGPtYXoP3EXBuFghU72Woqm5Twszd4FFqsA1a1vXz4DaxX6vauCu",
  "key2": "knXnRXzG6hUevaw9bCRefPZGLFFAMQB3YXdwdWaKNoAjgSPH1gbPJS4U2EXV2fEwDMmxGPJRch71wcRUxRARgQv",
  "key3": "4wKq3Hc3WbMx8EQR6tVL2VAXfysjEi9uzh95nzh6DHTf9StradPpzdtqZtWbwtzTnx5uJn7ViBgkxXbS73vpcXip",
  "key4": "4DQDM9oDbQUb6GyxmFJNbMAJxj6aWJm16mpFNqNr7TsYqxmCb2YvuEAo9DXJ3EuXhC22KnCWjUpWh6Sj8tMip1tr",
  "key5": "21T2etVXu3q8hfPDevULi1F4LpHQTkd3XFT5v8GfvaYEMZFSo39sqy7Ehz6joXayq56du5PLQjttXQK42KSfwUbj",
  "key6": "3nhnq2SSaMyLXWTQYEipd7DETK8ogPUTjPGASkbF9rHzyaVSP8EbocK5JLsFJVvNFNAhwGWULwMdk9EQysA7Z2di",
  "key7": "552YSshCyuNTStZmrMxSzczGyyo8NECPUMPPZvMVyyjgvD1ifxGoN1yqREgpwjuP52P7vp1YErvu1SXPNwKJmy3Y",
  "key8": "3yUvNLTuEftfH3ZTrHEhUYJMMk3Tzf9QNkGa1pATMY3GkoAdDedPNM7QEYVhtrEnQbd4kVgHPcenWeY43tmzU1vD",
  "key9": "5W2hit1CU9z6RaKNEDxexpxXadG1sjWG5LjLmdCK1TDPRx2AExW2UJ24GahoiLN171chTedRaXvjRzhdip5ewAwi",
  "key10": "3ucePwYKvNXDrmzFNKD9omrLn2nQA7vNNGMHs7CbwpesRHhBki5FKzxnB5RLoxrbxK9cFyH4b2BnHWBcrm1qi2nX",
  "key11": "2vQ956oDpcPvUhGRxusfDkDukS8h6mW1LZRwHKVKvTKzhr2rQYenoTqDEeaQxLYZLYBRCvHVvSrSru59DPnbPzE5",
  "key12": "2tX4uFiK2aLfUXtztMGLGVPnom39r2kN5bTnqUAjBSbVuHtwmJR2PMG8ooUUniW3mc2qssUYguaJbPJopZ5XrSrt",
  "key13": "46qVeKRidjHvZ3AXY5oQKCHRRwiYEadAWPoUgRfsqNNx3nnjuCACD6sFcZvGWMVmjeHj4fAn22BbAGXGcZJNLos6",
  "key14": "3odYc3dAngRyofkLAa3s1FgTQH4oAuynngE2XqortBL6dtHorKndT8ecDfXkrsCpuUthdFReGegRQrsTHbqxT9zm",
  "key15": "U1Bvm3SGqcj3Z7eUvWhpWaR5bpeechwCD1EYdhhtVR6yLuU7ttXf3XqBQ4cLUnncFhBktWNPUyHntjptaFMz3ui",
  "key16": "3DjPyUHJUzAkzww7Mr4jLj3CKKodZpbiMrpRGXnC3hiobwHfqE2m1C8pQbRbcQJieN9GTHcT5jTdYxvGa1wNWE4V",
  "key17": "4iXpo55m2JsCPFrQaR41Apm9CRwm3fvM233RxY8fPGHZrdXMfQFh1m9nkLtugUwRSpCCTy4a7wRZcmW6QFFy4ptS",
  "key18": "4T1VjxJtxNEuBzM99R6Ec49xmF7wMg5it9UDyq7fVzBbBxu3bPVsGerbRZ1MTUjKrBmyQBxXR96v637XSGXbmjxy",
  "key19": "37mTyW9yhEBp616R8o7B6u23d8WmT9nZvMXYn6VgkxpLsWxVSitXm1bMfdzf8jF5Jb4thij8iWRtKn4KxzmcLSci",
  "key20": "3EKyWsxjYEjFYPtTw7iASwJYUEieP9Lw1TEazY8gFz2NQN6j1gwgYQgEnrt2NaCoYQS89o2XosRmmQo2QuTitWZ7",
  "key21": "MKPH7Atf4aQQS18tydZjpPRTZTA6NWUfE6BCvPweQdxW9y2URZLtdLmTivtidQ9at7xFbLjPwPpzHAZrGn41W2S",
  "key22": "iAQL3S1G3bzxx9e6a1tDUh5mZk1RyBQWgKPuaqxJ5HXqDG7mfcVCuhmhTwJX5PH98yYp8mkqf6MysCL47z9Ae3U",
  "key23": "2EfDgvVkwLJRDzSzUi3AK9fJyzsuz6AgwmjXvbBuQaaqij85rjw9XhCTRHBA1iKmVzE8MEwZ3Cej2uXNXYv8fkB6",
  "key24": "3JnXbtP8VCNqj3gLdTjZL2uepEu6wUmtQbhrGVa5U7Fofn67aGjsg9DZdMRj7s2ZM16r3GSsW5XT2JarCWv4jQdS",
  "key25": "4VeYMKEMbWafHoefxUPjV9SMV6bUEQC81Kt6w9vAW1juV4ctG4maN2MBZM9tUKsjMgS96h4aecCdoazoNtnAFHAS",
  "key26": "3H7sst9P6ZBSNExBt7yumcFYkY6MZYozgLPcKxC7jWMxMEmMjHYc2PwzgmpEoLxeBYzoCRU5heyfSoKBSwdwJe9u",
  "key27": "3uTEWPQ1knKc3CMDpPEU1Gr4ayZHVfu9dToPRuic5pTFw3PcEp1sSRgcoNQr8HiTmVRd5hFTfqjw57DazNHhFejB",
  "key28": "2d4s4zHH8vrEGrvWkXQHeAn8sDH99ZTDjJV4P7ppwam5d7K9eMReaUGVq27ie2cD1Cmvd2id4Y8JHnMYqsFg7ZWD",
  "key29": "fHXWm18pB8zeXC3JKLQxcXnxFV2gxvJkC64e1WPAqpzrA2jEYGSq2ZcwmbAapNnCY3uy6W8YpU4PUguCkXuamMo",
  "key30": "3yyTu21tWtfTXXwcz3BdBnpcVL7NVMtde2FotTsPtPfXx1DEw4d2DmMro7Pi2V66yHdQP1GLgSk2pRp5B5LEYbJy",
  "key31": "3orVWpwjjSttqbxA4HwqvpwJsE2BRaF53998RpmnTcfgJ9d9e3VuZA6XtPbVY318QsqBhX4j7mUs9T3XWHptHnos"
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
