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
    "3jh23zzj4SDYP4dzKvp6nvBUdZRFs47mJd7JEuSXCcNfQ5hxoz89pF87eFUsXyFZd4KKphL8L3D54GdwyyLv2Ecp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KaixYo3wgcMUm4WtGDqPaEXJA6Kgf8dVLVnVkk1HHHBqHQddD4k22tDG521acV4a2Qu5y4HtQ8VNJuEymQSSYAf",
  "key1": "5iJht8pMygC98WostndhiyPab7r1Jh7Mpe7Lwt5AUHr2u9oDdz4sn7NNVyNQoY5KBtVUYi1g9i9te5TJVRw5Dapb",
  "key2": "DGFbp4NeQxYLVNBz1SUEoMhiwVHHsqaK8bDxjHYKcrhdggpQqZWAWv2TzeXfe7WbLj1JAm3okT6Mavq8GvmH8L2",
  "key3": "3TCPB4oHqJsxDcsYT7faKNVdx8oQWpXqwUHtWRd3qgPGdPenXhWytu7jgdCMrL2GPhH1VKb5Lt3Z1MgEzEHyCTqH",
  "key4": "4jB2R6BG5sZtqZbP5LZpf1XbymBqhUMRBkEp8HX3AYLVLESBWR296kzaXtdS3GLdiYKmkJdnszVHTmYeSBuuiHXh",
  "key5": "4vQJV4suRYYwCZ1ggsGjRz2kaCfEtyHL8tZi7hXDY266JuLacBzZvzXYFxz36nx4DEfqq72oHi7XsUhQj2dX1qVf",
  "key6": "SD3jQoxYZXdU2t46kAvVZniJCLKufP9aPDSY4HZp9CpazSePBWkZicLXsQci2aPhrNbah68AvjXf78dRX2nT4xU",
  "key7": "2erte99tk5u5AcLt9XbJ67uL5Xg6BvBaDGPkiTdyRwL13QyhtTY6Mypk7aqP3nym5RJ6AsJAdv8tmf7WoQXFkbkC",
  "key8": "22hs8ArLt8W3D5TXRdebTpxG41XFANg8rVMm6WezpEUv1SnTgwuh1wLPjBHYCEaWTNaWhX1QLVWLEf3Naas3sWQm",
  "key9": "54CBvPJ85ouvTPNdjeJMLWEHoUJNyFHPFrAsoAaVtU1AUVRkxyZ26ch7BYpZmgoeemDT3f2GDMDDEsexu4JzmZaR",
  "key10": "2PEeCcSGP8FrHUFYFGHjBMdnSwa2qWBQJPZJhr7sBrSpwMNmKQhNecq2kk9TdJcsGf3MxcGDo48xqwDnpje6bAdb",
  "key11": "55wzKm5tDZmP2izWRn2HBVmuvQNVc7dTm6zSRFBPqQBKuzG8B3HuzDkF9S9ZzH93cqSqkbNeaCZXRdr797FxtVic",
  "key12": "3QoRLVeb2CABewokX3nH1Cj4bkgUZmBtFKh5n4Ru8E53GNYzbRcVWFSdW8RuXfU4jbRhXTT1XSgtVsBDoBq1rNnF",
  "key13": "2GGSjFuvTRRB6uMTxf1FpoqghsTVyV3BbSpiLQviK3TNnQ8rUW1frTJBSGfcNkMS1BLVLhEeB2xFpK9oSk1LoCtz",
  "key14": "tS3dLpoRBsYyHby6Gcyg8rFCtCYsRvoZ4hp4cF5omrDc3P9D1Ly5zbcDsbp9Ygo6jfAhyGCaZ8CFWFGBAauxGE7",
  "key15": "23FPsC7UiuvzKUu3tHQG2jhSyYnRiLRKsuvnxVETdGrKX2KbsXEWgF1oYvYYvEFiqKe1tfvpeWdS4Laqfe2gJAjm",
  "key16": "57kQHB4KZaECE3i97mDZftPM5qVM4dbxtgdGYm5abyNq4aM79nwBVkrDw24dCqBbAB32nY3Mf4c35mTxQ5sGLTdX",
  "key17": "3576cBhqn8yRyfYxDWujVDGm4CX8brUGmi3SPCFdSy3hBEz4UJemtUyG1m6BZC2vYDHMX3MA914MYWV1X3xyNewW",
  "key18": "2xfSt899cNqP1AT69mjQijhuWzpfTVtpgXtoVX4RQ6ZFnZu8SFs4No7Hq8wpXHhCbxCVUtTu3goombv6F6ygEZvz",
  "key19": "4TMPAwWQq6So3ML7RvrX3vZH6hUYp7rYQAPxeg6tQRWEbriQ1JjR6tuy5b4beCQ7BwTTwAYRoKQh22vJHRiDGwnw",
  "key20": "7UsG64HvzUsQNDvaJwFZ5e6P99stLxMZc6QyGPUivKQ5on9RSvAAVxFHrv9NSrEenLCpb9DZp1XerxbEkfycVB4",
  "key21": "3pqk8ePjVdNR79MUsTVg11VboWrjCKToyM14Y7bCtecHZ76hyP1UoWkAAW9UKzCNRNwQD4wuW9ANkyxUs3C9pCGM",
  "key22": "hHgGLXzMAnR95azP6DCoTJb8NFEirR2hEE5mJXkacWjgF3f3UartnKS8wLMA5y8xTx7FzwFtyEzugDi2QD47GVZ",
  "key23": "3HpX9YHWTX6t6mfNJGXRUgNkAuNDJF3SRLMU69qSmBkuib6CSfVKZga2x3jNMPQ5qu6LN1rqBadhqzzBA1vwwQ7S",
  "key24": "4JQyDk9zVk1MuPhbecWgtE8yrMYi7p6D1kGWvZTekQ2PNpGFWJWKNGWee2mDpGuVdQzUsG4Q9Lm1XCw3pzW1QRC7",
  "key25": "5ysWyqA6aMT4gEovefVDdSNA5FBDTCyJ4Hbb6eAXjLfzyVAYh6U2LfHoVy1GSrmAKUo87RUATRMJNKjZoWPPMqwT",
  "key26": "3vsLtV9f5KZqBgjrfVevutgRfbm92bHEyX84drXE1vnyzrckNYByW31jcAh7iAqDESACC1EY3VexunNhpPuAkYYP",
  "key27": "4ZWjp5oan5wdCZKQeRQv7rmVE4ACR2dwCnHrQKvVxbrs9FCw8KWznE5sdrbnHhJZBdQUJcqxKHLmtzF1BmJPT8Zt",
  "key28": "2Ai4QJhcFJtJBwRSQrtr9WY3sQheaLNstNoJYpnimBF1fVWUGn1A1ijiDueU6DAAS5TfFWuhtEvdKVmziAZfYD6w",
  "key29": "HFCPBBaHYcH2gLEzFYms7T1bu5UqpWeapSXUKbwssxR5Np1JLULbyUayynRSTGLUrUuUpMxkqmJEBAam2H4K6Bt",
  "key30": "5cj9BWHTAhsH3P92sY2DqNRN7qcvLMnCdtbs62Ani8tqa4ik9FrbJCfpdUvUqU3asS1nfkwb9YmJbk1imjePEUD9",
  "key31": "2qpB2JpCRYs7ugG4WU2eC9gfuQdhmH6Nj6MoNGUSzYNFhrnuZYfGrd5Zae82j8o3n3a5VEUGi7o4Lpas9HWEiUgE",
  "key32": "5d9862KZHsACiMzgfrkoXC3eD5pLNYpTzuvF2Ky6YJR9P95qi8kZ5eUDhHnsSWbq2PNcPru4opPYmDqqnfCcetX6",
  "key33": "2SqGUrZhN5J3BotTch3redThJDojmzYpk1pFnKY1AcuUsM7CUg6S5KgHC24LUYbvZUqrfvRcJBg9ThuYCMdyAN9v",
  "key34": "4oCjUxq8SsXupfEvzxqEzBPfrNfo9StPS7UGemyQurpxTv6hTyUUXJDzWpHrfwSTRVodgorZ5BASRVZq3szAiPQd",
  "key35": "3ymNpSFB3q9HD9xNxjXHSQ1TjgiwyBB1exmG1Exi5LxNLy7NLpNfYvNdEQh2CwSmi7XkhvUegETvZNWjU6iVnWgU",
  "key36": "4VSkcqZuSBr18ozzVSuPt21DfwP9bUDcLbiopZ6bDCBSsDxUxQG79QE4x6AKTnGkuBPj2uWwf2qC5Ki6LU9g2aCe",
  "key37": "39pEZKTFwDUcY3KWaRDScRYQbtj8XtSXGXVNPE1uStf3goKE3NW63a5F4R4kq191MxsYGrduoy488KoX3tS8KkVW",
  "key38": "5NhmHNLaDcQP3bbuvYLW8dC5SAns6aM9R3V1GWj6Bgsnwe2ePVwPcXi9Vz6WgKaQbkdaPToA9qWqb3Ajje8nfyhr",
  "key39": "so3152m88MYvEoE3H1HBcV2F7NiUtdBcoabEbYjE2MC2UvkGwxvwW7oP7h1y4tZDfSc6aNb4Xgs4PCn6mgLR1wq",
  "key40": "441SwY6aniVAjjVAtsQ23akBGctm6ENmvxma596qpAsr8MzhuY5nRwGhWQh9iUWuqLYqDT4o4DW92hZXHPUYYi94",
  "key41": "xTswK1WWLGipUZhrK26JiJXxMebv9jZkKELJgtWXZi9tcKmhmiG4Mn8WCH2X7pHXV4u7vN9QdbrihKC6oE7u2ke",
  "key42": "2BQKg8dSA7RctdZZNCHFxT6hjGWzn1UortRt1aQJ76W4UMnC5t3v6kExdnnyudcbJUBFW3Yo7Z3r1f3UwxNEgTk8",
  "key43": "3odhRCAUYhdteNcKrHFcBGxXsyNvKdFKS1gEz5R9AFMcQ5NGtgqwU1ksEmsEUZ7dQCTLZiBZ9ucsBFTxxXPRyoCj",
  "key44": "4D6i2v1LPrRy9u6yRsmFYj3mngeBN36gjZYKUC61wdrtwtgPuKd82LVfFiTNttQX9WFr7qY2inx4uovginwJhnya",
  "key45": "4PTzHFCAbidXBRf81ZSCqcsvs6Yrko555B45NL46Abq9eGtZMrxMngumx7aMLg6fhSjyTZG1HH5Tq8GfQFvNBrgN",
  "key46": "4htnQpMvgTjGFZfioxQR1awWJBtCs4WrFd5t4KVtdhStbiPdMHDpPw4U2QRGL11VVaEEiFVFDBDXD7fkET8Whffn"
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
