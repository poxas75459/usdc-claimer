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
    "5dQraxf9jVtTLa6B2QFU1Jvsv85gGXDsEnxnDpE4iHR9GAwgvYuJ86cPDrqL5jX6eoGv7pqTpaX1Wk7tBjP1QXVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n43CkneFG8WSvekRzKsD5VYN32yyxeSbBYaeG5XHoADXiiQ9Jz8KNByXFwhwZzwjd5MiB4BN4kxsFmmuupvR1tn",
  "key1": "5B7rWpYXeEXEnpp1ZQ5XdNnPAuLzdnJxBT7aGHS8s75D3aeG5ETUWMWqap97Np4Q1zkXD1rYVqANTZmNQE31a5w7",
  "key2": "2TBDgXYfwftd5Gbcxn99rba9kD7EvthDmnMzdG6CPvLjCMaWLekeBa2cLAQXUaibaD1CXeiM6AhnfLPP1hnqRbv7",
  "key3": "B253nZf1qth4JLGrtR3Ne1ViVxdDpXcuXK5pZDAHxe1Y8i9uPiG3f1KuxQxnJNtBNEmo2L9jG2rENNFkwFRhd5j",
  "key4": "bLa98nnwq4nhwRKG51Md9sRmWiuYNUt524AV1xafGqnAfMyBQv6fsk2ZpDaJk4urrgy7KiaZAY3g9WZppkCqb4W",
  "key5": "55ZmzmPz2gPUEj1AQ8hfQhmgpc9XG2cW2EPciMiHbbiWPgr45An3PZgjASsbRYsfDgHVGHwWLxU4PHRaJw6xjGQX",
  "key6": "4eiThU2NmG35adWw6FnrcByNAF64U1jAT4oQgNfdind1ZKYKkBzd3ReUQej331GmbyUsgygbxQCF9sMHsMA9Xx7A",
  "key7": "2xAgm3rBNQQEhX6eNj5ADNtng1zgrZHUUDfQAWSCGS4hyUMfMBPcaX6J3KxdnqxaLrj2XA8V27dUf2UqdEo9EWMk",
  "key8": "6zuM3E8z4Q3BFNGNnTWwf9jeLBcNwDYqLZLAQuez3D2vq8GbSMMjS4wapWdZeRaV9RR2LZuF9nXrxK9qobpNsTz",
  "key9": "43DV1JeSBdYkfZuCDbUsoGJrjM8YDh3aYsREjV3NVCnkpCX99HZSryjiHNwwfeahrpFATkMt8xJpwBmsgoPHrT8T",
  "key10": "nfF94MydUEELfbZSjtR2DiSQHwwf7QrTpMuoGEqYKZCghSkkzLAt2KtozG5oED8RsBBFRcEwr94zZ5Xjc3q6Y47",
  "key11": "5RjWBnadTNJWAd73v4KamhcPFp8Wmoyg4muzGx2GzBmpFs3ySZf8CN5cR3iAGHp8tuY32rA6jVqua5MJsuezgj7E",
  "key12": "58AjAhQkNuedj5mNC4RwvoS99w26oop7Ym1pKsJsrgBZzCNXM1W6qkNs84BBNqgMS9ffCQRFNaJqVqo8yRnZarU1",
  "key13": "mk72Jzij2AcFXZVHEXUZpemqShUjBZ6QkPfm9VQJjTagMfUFDs5Yyjviyrr2aHD9qT3rp39C49j732stJx7Zm5D",
  "key14": "22U3UNTNc5eLVvL7hvASbx5mVrntygQ4iXywfyPXrKqtEX1za5FWfcUnMsMJ56iM2aGJS6eurDDefFJxK5YPGVbW",
  "key15": "3srY64jsDQMUbg2ExzjvRqZTRxeanvucRjPGtYRxDQWiXEfDgLDra5xJRmg6uhX8JWbbaEqTYSqi9c1hqvJSRR1Z",
  "key16": "y4LwypPABJKjeeWHXxxzhYCGUYNJvgZizyW73vYJYU8VpqAAsmrRZ2tmQE8TXQyJd1uDLjseHtk6JKpXJ2bQKav",
  "key17": "Po4o7ww1eUEM2YYTEGuPrgwpTmqyovVyCCJ1C23ZSJvLS4Mweg1c8sHa1ynjNyTN2cRftZYCcaDWCUFJbKVdAxN",
  "key18": "ALhTDs2LUGq4VEfoSaYzthm1ftzmAosSjLDLVZMkWyx31q8gBBxUFiuZRKBLNGMEcFaKYHv8sMebT1Q8qZisNLH",
  "key19": "5wyvL8xVBEyKD9tugBw2Rbqodc9aoZGg88rrAS3SLmwF5xkmK1And1iHYuAX6ytPTNt2BPHT8RA38uov1HrvRgcG",
  "key20": "4kr1GudiQFvJ76VATfUPAtMZ5ucA1osSnYBhVHkQWotq2wU6vFGyCoc7RGGziDDH9JG6rBXk9gXtMsBLvKzEESrx",
  "key21": "3sWXRjLbzVtKioZgVNEsjwD58xCCcV3g492HiyqfDihRiag1XDMNnhPageGAdYguYth6BLjxbDRPp6t7XYEP4fDA",
  "key22": "2pz3a2cSrVuQfFoZ2K48FevFJY7dVReFD2QAxSH5LoyrF6jZxfnitjBVueMVUvTkMyV2t4KKxEU9LetnWkMPQWP4",
  "key23": "2QY4Kj6QUUXdnQwRaKH4ErjVJLTajWp3aYGQtMbUjSaJJkw2zmA6cUDTt4Xg7bzUunqic9FmvpCPEJwSKe55g942",
  "key24": "5ao1cNs3TBmK4NWWy93Mwac2HaAKHERPXkXUejuCe4njdoW5VEGK3n6xdFAwVVuAhHnNg4QEDNWu6W5X4phQiw6g",
  "key25": "2oNZTEi4N7wDZihtNV1jRWcGAwe7sJ17ViFMgN9KucB1MPVZjRMLvv71RXmW1d5TpwdXNEPiQYLdQ3pzrZocS3wV",
  "key26": "9ChJXBFhcGjzX71jcSas6CjiitasH4X23ndQjyhGfNxpfPYuBiP1d2S2h4UFsUXpVqar3RZa5Xafjz1eUKaYFNm",
  "key27": "MNz1MR7AvjCL2BqgbFABHZT1Ege4CLsFRZ5bNMDVgNNAkdSRzGKsHkvwSaRAQDJHa7xT93N71ofYUyk9EfFk71m",
  "key28": "55fepH78huYA5Km7Wfz882SB7U7nuMsgqyk1UH4BzwRvAoZkeDa9xzJz734LdmtmwxCb5Htj3kRzWnqGGDGtT783",
  "key29": "234gumUCyQnUH9ARHHrzUp9LNB79mGcW9x1qqmpAA2iP7bZhHM4Bf5qWmMDHDcjSh3a1uwpqK2haY5B4mvrj7PZd",
  "key30": "5ST5hpaVnfJu7N7gDCioWzDQcca2NHVp1sSQYDssa33qZxmnKedMFbBHBwSJnP7U61iFybGg5m4V8Qjk1xFsPnbQ",
  "key31": "4b7thzoTKEWdnd1TYpuqLdCcfGVNQd6xFwZsug2DPzs9R4WfF4874DaZJ3Zh7oLG5p29U5Wo4gENm1jHV93jNLhG",
  "key32": "2hbKjZz2iz4wCaSsRbT9sNAzjqLebaVSbSmQtiSja6yGRdaVkNhhf6m4Vo3v9YRatGZiJX8ZB7fAh5E3EEmzHuuK",
  "key33": "2Hcvsn6ddcfMQ3EMB3qfjtthEnxNxtGTp9Yh25Qkm7PdU3puE7VUVne9GiST1i6edHj7SCPXQrgd2gfrEKHHQgp6",
  "key34": "5W4yF5y5eY5JHBuGwQ1oPdQK5aCEjTNPHMu47fEaL5qo5REpcWLVia5o44YB7HQVGCoDPTbVaPvUWA9MkKRsL1Zq",
  "key35": "51WfPWJpozYpqEv3TToqmudEv8fpsyZKirSPA4whhKVUPyGGQWiP8ynaUpjfLfQYt1AGszvW2biKpCbMaNqwMqbL"
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
