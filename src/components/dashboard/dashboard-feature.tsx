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
    "65vuUrrszDzishA4vKaRFriUpJNimRsWFPdTgTQRaySPcSauszjst92pxs86Nx2rQXEGWHE8S68aueG8zxkru1CU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rxugFwx4R6A8SWAgP92aLyG8Aojn3tZWYw8ZTvB3CoafJgPh6Yxc6ABHZmcCPgc9P1F7HeJH6y2tnsZ8DnRy6LS",
  "key1": "3sdpz5boQfu6tGQHq3QeNFPsu4YmRAnHUNbkZyEKznRBk9Kp5KEJ2m49oS2aWcYH9yzYyypUhw3m6wyfAf2EHVTr",
  "key2": "3PRKNcJcU2cjZyFhUbM7KG3sDg7gYxA7ScmHnRbgwAy8TREgd7C6ny8jy7YsioWcC923UdNkcFLMcUSAUn9NoAT",
  "key3": "4JVyxZ7qtyKdgCRLXJFvCGYQdH8iSFrGvxJZkLoqYr48wQGbS74Tv5wnX9nS4Mdpg9VeVL9mAVzg5jPXMKZfdNXK",
  "key4": "qSKZYWTJsiJGgH7XvZnQa5mubKjVLFEWvu5PTJ8KV9cEgURSXcRrhixtnrFjYUfYZpcWQkNVSuyRE4KCXcRmYbM",
  "key5": "5NLo57sNC1Yeq8zdBGLrfMibxYPQwU9Bwy8woz6fLWr48DNBtko1Ps2E7yrPQc2YKxr8XpXMhfb61yqBhgAhRUZs",
  "key6": "3ye3xSCN1dAG7omxfm167vmxY5sDmvXYpH2k3vLJQpnLeZFLBYC7kNBAUCuqkb6hWimN2QweE7JU1HixUkxYNyP8",
  "key7": "2e3o3g9vdzzpNrnNqmuPHgLJ2Z578uFWU4tTq7tvFHf3qxtzJWhfyPXUZEjd5i5mp4nTTsVQRQbu3y82qRLGVQ6x",
  "key8": "2XzAQDpr31BDjEUYnY4Zg4nPgMmH6Tg1dakE19Y1iXymiHK7PqPbh4jMVFgnHcx81mMoe937ku7uaXTLF8m87eP6",
  "key9": "4nU3HVxf9nfuT93kdYzUFnX5qH5HpjZbQEmMZHofeMc3cmTYLkzMwwpHjdtuRPtVyz3LDa6Am8rZk4yRTv4kp58L",
  "key10": "33LirmoqQMTGkDonGYqkpczHKwQ8dyNifFpYAZgCLME6PxjpKYL9RFGgTggaF2v6bGbwpK7rXYiykCwqYWfuwzFQ",
  "key11": "2Y8wTVNu4H8yyD9DQ34tPuReDG2msoTVahKTeg455JirVLDDB2bSScHYr9doS4Q5yVtbDshwwMdUMF6aJYZ1RBS7",
  "key12": "4kWVynvd9P2jWJ67YcPrA9k8j2S6MZKm8wY2C98xtgVyYS2t8U2qX35hDARNsawB7RnHePqYzjoBHV4HHeAHJYQt",
  "key13": "KNF2DGPiWS1NmKNqK1hfBQ1Lho7eoujPJiVyiy43XsspVMNq8uD3dtJH6STqw4tktcdyoyZub5QcLhafawMgMKV",
  "key14": "rdBiupswZ9fXBZPcB1uL9shUcPFWKBhE4LNqJfYT5XX27pGftZRa19kwYKA496yUHG6boJA8sfg7BkHB59zVF48",
  "key15": "3j75FLAFJG5nS28reWXv4Qx6TY9Q6CGDphZGfZ9RStaLdddpF8dC38vHwCj3BFg9nxDMjjVnncCDyDbWRdU46Ff",
  "key16": "m6koDWUw3GMdRHRYbWPXhQ6Hrx8QaVS9hHHVx5rcKMCSaAj5LTK4RmvFDcXEJxNvFzJ9a559MgYVK5sDmTQ5VWT",
  "key17": "3BBVS2K7HpkJ18yx3VSx9Ajt3zKUTNyiaX8vpizobYfjoWhE34KkVMuwkxhCJjSxsbhMpvNy9rcQJ3FtWarCQhmB",
  "key18": "4XQKQ7UQDenLU1iYn5DMRRd9aWZHhuVidTo1ou4i3PvDFGfvFUhp11r44PnYGfCtUKwyJPmE3RvQUwMjmWNosgk1",
  "key19": "tPuEYzUk1yrrrRGumnUaz2Y9pDZsobTVDo8xQSJt3wVcKeCXKiMvvx7mAih7y3cuwGSZaQwn77S4m6SuA25qJcE",
  "key20": "4ZfAsoiXvPg7CXXW6cRYoW2PgN9uNCKQoG6es5V2AfdAhziqfwaZvSqfgS2Pxgr6NScmSEXM1ZKTDhx1M9C8RC2x",
  "key21": "2YbstVeRVECqZvFzGBdmBrokkucq6MnacYcBZ8bZWyeL5omFNg4Sb4jmoRvFdyKC934VHnAMcPzo3kNGNGBYDkvz",
  "key22": "4tJ1RPAU671qeUrjA24fRFeuMyfChtFdSSexYZg5jQ28LDLrkuuG7CpzJHhJEeXyPFws3fnSvRbJvCrywRYR3WeQ",
  "key23": "2U2jLgkwTVaVGMocwWDugJEXUw3zmtWJH98XEbgs8r6DworZZca68TcTSrEidij2KyKwzCqWPbzQdZRUTUKzpMfr",
  "key24": "bSMfUow1r3ayEpxvki4ygcDxWSUs8c4gNm56ph8wbegXKZ1H1rzfYqC6m5oQqeh3fmb8xissjk8B7yvX2yPLd4z",
  "key25": "2gKW9RYNgw7TPNWJczb488JkoNX3CDqkZyxCrPdPH3TB2wspcUUh2H5x6LqzrYRMmCFqxrzGZiCV8TM3rRSPnkqh",
  "key26": "5jq94yDAvF8QrWmd6BbW7tAWkNcJTRgRxDZg5RNWiFubyVVA5mrmhv5ERy3yWgojnqWNDjtyAJoYGj9mCwezWP83",
  "key27": "Uy3qkaPg7PV8yTmn5TtwmMoPoc4Lcs7yAoPmETfFfah6pMahv24dubnTNiD3nFq97mjTMrottzDP5e4r8qSLM43",
  "key28": "2yokxVrRfjsozNwvDGJJohXiCuKDiPRvtzBoryL5PZx1KEZQ1QTAqQY2cQMUkv9wrGFERwWFPLvfn3SNMxsZjXMN",
  "key29": "4XH5vZy3iJ6CvXbLXLa3CfxcPfFMdLAeMdA7jQF53pkgi6KYVvS9Z7BvwCBPTF9vNtRftb6XLVQJ4QPNQZcLV2L3",
  "key30": "5LgsmF9xs9zSc2yS38gbqTPEf5KPAYRiR6pTGhoFLWwedVk8FjGy6pu3NYToiQXVr3n3jqagtU2i8k8tJtRVnmvP",
  "key31": "2Yu24FUkBLzbCiP1LqyESh1ktjT8m1hTkguaYBu9PQQmX5BK79tYgQxZcexEb8qmLyvszv6KkBQY2zbwbUGMzD4u",
  "key32": "5NU2bfDtJXzMcwGHUvCZeXatvY9UG8zCHxa8AYYkpxedYsdm4g9c6TvQFvUg37z6HTeJYfyyL84TYDnoGfXVKaxb",
  "key33": "4mbMoUuA2gMoRmkFXWi11Y1nT2WQo53fJuUc4NA5Kq9PWpS6k3QJyd89TzwjnEAZ38Hv6rHx6yiow73P4FKKAhTD",
  "key34": "5isgnWXe8QCxtp42xiKfw7bg6mRLrBnKpbYTougKFydo7kcbXJfgYe1qR4xwqV8CXNwYn9SxeB9H4NQ6iFnckANk",
  "key35": "5g6jozf7GvcHaSt42D5TeZsx3NJHseFWBVtrXXxRbxiFQpzQJRtYUmpckzTh9pEdUFXskMqrdKUBx32sZUAAwcfQ",
  "key36": "3bQGnc5kYUysssCaCoXd84iJ3KSwzvRszAXvPbJWMzRNthhEVzvbbZx3DaYMSqrUMkfszHeWEpXx8AXXEETDsvUz",
  "key37": "5vYmVbe7ukh5HJc6JzysYHJ5jYWWXkpRfPL4CKix4EdE4g9WSKLBGgBtXMDM7AQz9YZiwGWBDVuwqSbsZDMV1CE5",
  "key38": "37C8pffGwmHcJpPD4CWLNw4ZrCXNmb71zj4tTvuZ29x99hf3koGekDSD8tDRQGRAhHrxk9hcidkicBdA86xkDrpy",
  "key39": "5cMY44bkSW9aNFW9mb8KBMSJevWbyHBwkRKBpLBBuSMkQDpzGVo3eHXDzye1W3dTipWXnRFvAeN35BXYmEHSfGx",
  "key40": "3n9h5RKHZ8mCi8ddUKvNUk7N5R5Y4BszdQP3jf6CMgqWj34dt4zvjDBFrw4UG3T2XjUJwZNysFM2ka6qDmBY8CQb",
  "key41": "2L6pZVR444FpZTYeNwYUZW6rDUCsGzkw1HBpK2tSgjBzX9dNLukM56FXj4Fb23fTGd14TwKnQHUnFjMzSMib3SPZ",
  "key42": "eXSk3b2X1QCxa5pG7kBuWytixhQJq2Sb7oRiMHGUnBqZqySR7ekdkZwv1LXpAbqfPzoC7v35KjrX3XhuHDhjUMf",
  "key43": "5Wq3X72L22JRb9W1DWtsSTLZDKUGY9bdboQ8eT2a82KZWJmiRRMtrB5eNr74PScTyK4KGEzGb1nED8y2sxjQoTJQ",
  "key44": "Rws1edriLQ6DtBZqs53zn717WhaCyGRQDHG7UHgXVeZgbYoq58nr4C54NUptFz26nade4Z1ZHSWcC1amNcoQt5t",
  "key45": "5pjG61KGB3dk3YT6dVxvTzEgomjYMC9QHNa5yd6BFQYEHcJDNfYFiSkXwMmU6uJXf5ga6ht8DoFLtEuEf2FqvjDn",
  "key46": "2V13DsZ5jfa52qJogY6g16XRBpn2JbUUnZ2NDqjFceHyV5pfKJnr6j5dyGrmHMFEM44cmjjrKG7Fm9uH3a5eTGcN"
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
