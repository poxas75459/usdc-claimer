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
    "3ahtrUrQUoxCenFP7yBKVgB61hoVhmdnY31o73YzXfmf6KmXshs9dDDqHgnignE2ZQwLs7drocexyAZtzvUEFH7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Sb4HD3EbarwdoMchJrUhJFXhZBv4DciFQ7uoFW2XU7BYPLLLWAR8T5GG6h6CsYYBjd4xCatGndxEF96xA3tJTS",
  "key1": "3i6MFrqh87hdenrhVWFoFsfRtZoTfhkGf4x8CSYARTGJ5WGRvFcdDwYHxQCWhgZ3uzNis7YnbQgr3D3rMCnagFbJ",
  "key2": "5PYChT1d4BsaWz2ptTSjH36Ym6fUz1LoApogND9UByfJXTbXaxzpP1TQLpvTCc2pxdigv6xwj4hzVYYfbCHhQD6K",
  "key3": "5JM95kLpNYwrjPMxsWs1PZ4weuF8RqgVKXn231LrK3fggiSaZ3Q8bU2NVWYSJez2YNSYszw1cBaNLRQ8arouq1jw",
  "key4": "6eChhb6TUcV2Pfuhr2W67fHj1yn5undVMP4DB7EyMUnGgt9dqqJUYgFb2ZVhvn2Dog96f1dwdowqzpsLzXtrpig",
  "key5": "4fkUq84opj6o6CS15h72jsgBZeiizJJ3gJxfBewXGFXi1R9SsQ6ekGYt3ouqzrHd8dZPGftVdkPaRmfBj4y5KkUt",
  "key6": "33SnuQvS3yQE2uvkvRa8a7hssTVVWvF3zdQMfYc2Khkuj2nvnDUK7412D6geUgVxxDnPDehD7mz91VW5t1xLnweW",
  "key7": "4RsY9cjxnYMPRknqArV1jAwmfaZjNqQ9XHnrUv6yJN7yBeZwoXriuJTuSw1KrhPth5tJvnhYiQW7W7eJHvRwZGFn",
  "key8": "doNPBGzXMcrFC3qjJLK2HJPQ93PkQM4GMMTYrBiEvUHDK4t1wV73iM63RPCQRWcSFCvtnR7iKQhRnKRU9WchDpL",
  "key9": "2crYjF7rZ3tTVEEpdV6w9Ty9grveNSY2HTXprSyA2oYYg8bAff7GdvCK8m8fw4qBz5CUJRFkFQFY99rtwLNsvfwe",
  "key10": "2eeY7iuxCMhMXcbaCKKh3jSpcB4QvWUBzFcD2Zz6V68hHCir1Rza2wtc4vy5yBrpQWGJhaXJv1TN5vybZZpnUQVa",
  "key11": "2eTfaNS7hnmeTVFtEz5mzDmrSBsa4Bwcuh2535JbiqnrFUUrN38Dn6BCDB6jS3buPPbszsL91d44CqTQ6R7DGKCc",
  "key12": "3aZxLPtqikoEbMnFgMJ1vhuhiFYcimVq4wU7aHMMxLNoinHmwBC5e8Yo4WKySgTM5MXQmRcFSFXJqEjJruVRiUHp",
  "key13": "43AjpBv2Z8kPMNGu7KtBRLjgE8ZHV9tHNW6MwpMq4uxk5YHruZ2THRkTvmRBnRrBs6D66b9dkAjjAF5qCBAkT9u3",
  "key14": "2ddG4A9ryeqLh4LjLhGZJWcgETAgnYsb7mio8gCoZVFu8VZEUP9AW1U9T1xJsV3FFuTHLDrRqhASNU2W5MPtebjX",
  "key15": "4K4QRzREnVnmEks3rSRPp75njFFQ7j19wKcnhBvY8enfZEVdwSHCKJJhye22hBrWFmNdcfsk7Jndd4f7B5TbDRwD",
  "key16": "36bRj9YUrffsaa8e3oJLfnP3gC4i9nWdrRXd9pe6DFDwDLbx6CD7vQPtNucU8zgkDfwizWy1NWxGqtGjNRjjSRFX",
  "key17": "4dWe8YYAp28HaRMQf7GNhpakLYXQqmpCB7eqkLr4dNgbY3uGZaGdxmdypPjh9bAdVs6JtqnufKKTPjhshL6etWvJ",
  "key18": "fZ5KmbBvRSgLZZ2yGngMRVvNGp1GNZZdE6Qk95gfNXJCARhXPQsvpsyxsFc9rk1etgVJXYL44Ah6jBfnDeyGurA",
  "key19": "5kioYgT26yYQeQRH9bzay2q5ofayjwhHnu4ytXNW6SMknKqPNAThUdDU35UWre4gMYp7iFDW7YuSgp3oNZSB3svQ",
  "key20": "4EA4UdYUexNiuS5EnDeeU2BNNB8ip1WfhBguVykvZgTvgzeUuzaaXFkWWMf9BrnMswYADQexxCqH2R4NCrbwvXr4",
  "key21": "6MgC9EuU37CVEujvAPQ95tZjq9MZP4Ms1FqhUkGKPojtPhThumj6T6G6qTrFApxWobtLR7RDdDQtY3cukA4Zoyj",
  "key22": "dhsr7t9RF3LHCT5AKbvAXwqvyyCGsVikwhs89s9z3uzgqMC237Lt8r4iEo6Mjhqv2Qp1vU3C2tMheJq8yLBD9Um",
  "key23": "2bCLuXWTvStTg1AS2HSFPnehNsF68EmMyLpsXucZcf13MMuJSQS1x77ugPtqFBaufJY3CUJfsWT1FiLevyy8Gybe",
  "key24": "5yogBFcWLGYJi7kmqvYK7jE6sE1QkaFaKFSD8q4c3EAnJddjBMEYJNfanVDWkQBJ65TsyzQe6R2oJadRHR8sznjb",
  "key25": "2pNBKEWZSk3Wn8jzSwgvrxEnuhHxVTsTkZbgDirmU2pc5VtSo8YML1HUNaKGLmUjoK87fK2MYSH26QPXSvMuqDg1",
  "key26": "2GW2q52UcE9DBAetkvYH34kPyKG9Sr6JhQvUDHrTf2wnX4xNNvEUhpTknR4PNJFa7UVHPcvLkUjLtwa5EsotAF2H",
  "key27": "2PK5UG8MPHSPvrMGLugLeiV9ZZWuxmEQ4XoizEusgPQgWdwsKpNnpCydQJbD4ALkme4D1ac4imrLpv1hFgHPKrGe",
  "key28": "5CdjK6BvknL2dN243YFDMJARxh21sjLEeQrFWfmVw6tSHCm4rondoBdwHuuP4xZ1Q3QAsjxQ2WzGu66gera5fPTg",
  "key29": "3nevfJdZwQArTU6b1Gno5ueT4t6PFvYgaFUUdSuDaH4cTzQPbTEFiXbpni8ijUnK7zecRcWtwWzQzg1xEAyic9m4",
  "key30": "4Le8Bo4rYmtimPBRnsNq5ByjbbvPUq8zmHooNK3G8yumnj9BWxiAnhXJNEWTJN2BFrwiyhHpqQzZ8DNxpxFabsoD",
  "key31": "2SxubGk1qtU1DmgJSnCgFrLegQQ34FcraM6VuoZcRzMKFuLfMgHKwoHSR2jYNqLwgzKXuA9MtKMwsw7zWZ8uSo5p",
  "key32": "4qzSUZQhFxLhnHLAc8vRPVi5Z5Fxovas3xnkRT7pwBNGTBazzD3jbA6b48JQ9KJ5dvSNQSEC7kR8r6oHv4dxrJK2",
  "key33": "5bQ6j7XiYWYyY1X4Qjt8mjnxHGMFELj448XGEjvb977DumPKQ7ZZJ5WLdHxaDSUyc6J68N7cFzJH6jMf39pMxCTs",
  "key34": "18C4pzncGf8zpr9t1Xn5sTTEFX7CjdDfc88nCDRYqnQa53WFsQvE1nZVDwmysC7uWgBF2YzWoaEtvuBGeQsL8RE",
  "key35": "2dM4s1GyoXrXRBX86LtNDqZ2otdxaLQE29RBUeUqUpC6HEY8MR7Ev3Ao4RFrPdjhYsnvtniXo4NkYfqUsRLmt5r5",
  "key36": "aRtdKxgHNcYYHUeqvbNEcRs6qVK6LoWXiv16aJuNov7L8mykBoMEU3qGo7zhdfdp1Sse6fCgyZY9YC7H8sDSAfm"
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
