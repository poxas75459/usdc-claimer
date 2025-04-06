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
    "389xKTxQj2gA9C5T5PZ6qTAL5tcdyxW6mGqfxVcyo3fu4FLNoxw1PEF2vqY1zd7hJRWTbdT7PkGAPR8K7qL2D8Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPtHaqcYtmQDx5oXJ3VCWR2w5HuWVzUbsjdtEGyrykmRRaq5LPDyzoh3vn7d3ZQC7Cn9nVnxarypmfVY87DzvCd",
  "key1": "2zXBppcW9Tmvkd1BWM6L1YBhkVzZGEcmtBCP7y8Az6CCrLKYedC7ucg5jVn13fh2esSCoYG2C1J93o5QG7V7oPPL",
  "key2": "wyzuezhuF5Yn8KkSgM6a3UxxytJWSzyJX7mgVWsGJfmoxtV9xdcZZahDmY6MDNymEvoLNTjVzDuJuDUX2ekD4dn",
  "key3": "2KZDDev5njdiSFirFe36Wyd3HijtRRJ4mETXzSYhCsq5Tbb8gU4py3meGqLS4MWHBh2mACucp6E9idduvGv7Gthg",
  "key4": "3GSc6C7DT18CaawCJiaW2NwvQo75Nw88CHUgRUxqFCGN765ntfxyD9ZghdPjafyhxgkeBEUuyNyMuhz43vhK4gz7",
  "key5": "3v1TeWHWaJT7XmbetWdKJfA6wLENTVzNRwDfKLrcK6z9D78XX39qffW6742vrVs7hQcgWWzcbRoKLmR4hZ6tkgoj",
  "key6": "kjvzwZWuq8F1LSmLLcqpuoq3WoPhvkBmHkBxqXyP7iEzMcLdoTiMq85DKibvKvBNvt5doYmV2gcGMUiiTKru5iR",
  "key7": "5wmut16XBbxpNbWTeRW9SWsJbvYqc94B6unYaAfcvta8CyZUzUNdCor1Nb6h9cy7MJ74Lutxn2xhC81PDrDZhMCo",
  "key8": "34T3tH91FiscfApDo1NJ8fPDdedUpG4JebggDKySpEKR5NVYzXCN6HJhZxo5cRM6i5NuB3t8jKYbDesHUTkvmQnH",
  "key9": "571VWydDeYi5hYprR8mUZfmquBNr6qfGpGUA6ZkU471pkbKgC6aqEbytzyEhq7kLzP4CHPHZqvjuHe1iybBzdbZJ",
  "key10": "3tbjV7gnntHHh75wf4JbVwyRCv6box5Zw2kCg5ZWBE38NKvxrqUU3jdX65ezY5DR9KEcSqQE4rzhunNCKnMK4bco",
  "key11": "56oBcoPfA23T9HjBtDxT6LQibekyofQFfw7kVT82upcweYB7cWDtEojDE7sQYm2u89a67VNrAXqs2U7ikHfvWU3u",
  "key12": "5RVeUeDD7iVGUBzwGsdz13q36oHhGBGqtya4AxpdRUsp71oQQjaNox84JEhc88LRDqR6p72BcPJgCWYGi5E47JtV",
  "key13": "eYoUqWM3frmZMFicrSf5kcGZo7aWChtvVLEtLs3geZjFK6FqjVnHp32gPH76VELjBbV4FGL7XKgdmwmD3bmjdiH",
  "key14": "4GKSwZscxuN7HKiZeEo3K6LBuh5ppo4bxEYxXHdDeVeUMmu3r1i1kqyjfjkFJHzXjXTydKknW3Zit8JRuLb4e9DU",
  "key15": "5Uf1hFQwCpfjCEX6hbUvjXDFSPitzUcLgE4FyZmqQJpw7GwhzEPFtCkAduVHfbVHj9o6GvvpjJBRSbDHTLKNvSFf",
  "key16": "4Rwqg7bpW8u5qsRNFvFiqisadfyfvLAYtXgibvb2vVq6KcDm2cFyfVksxfLupgWhHt15KGrwrT3v2pTw7HkuMDkE",
  "key17": "5eFZCW57TfGdk2XaR8xFxpr5mZozuf86AYXDGXg2BeszQFMhksinSc6oCHgkPP4a2hzm6oAv6vJcPWLcieSSUMrT",
  "key18": "4UFnBDioi6FngvGGG88VVLFBhsWrxkuMC343tpBxB13Emw1VFrgdpEkyDS8mhKYcxNn9hyMj6XUEBmcakPP9B5Lv",
  "key19": "3YxgsBfxLMxKKLmuDBwAcFzWdWNhb8C6fZiFdBHnCoZZoa9jLhfELjGjmESTTbchE65aEqUfg8Eh7zYsakFD67aM",
  "key20": "4T8VqFC95cKziLt83SihTzGHyvRqqtJnfEhenZv3Za2AfCqvyQyTLtHHbo4vZkSHYeU9p4gvpHFUGqcsJVcUXgCM",
  "key21": "3pxK1n24U7biJF5W6YF738jYijVryUJzrP9eTBDB5NHsVz6uDB9BzZSvLPYtqTGeEYe46puqxwMWxRxpZsDKHaLQ",
  "key22": "R2zzq3QxhkaXCMzLdcKXzHPfwcvhc4dGAzirMyFkdUNhF6RHNpUtpsdbWgaxuB6Mb4xqtFniSsYWPZ8qQadZd5g",
  "key23": "5kEQkwTYf4RPrh8XpeVWTUa9UHEyLra8WNDKoSXriMenGFWVuDHkRueaAuxAZYU2BYjwWn73o2YySvVpbUJxjBG3",
  "key24": "3YkU5iydzzJVx6tAefZwsJ4Lk9f9xis52tBwHZqCH3Zrghk3DCLRBpse5JxWqi5yYz5sFTf1ZQVgtLLKekodKw5m",
  "key25": "fFyvMg7DcxxpTcU8WQpzhAbyjo7NXC2DsfCvwDEFEzqrCD7mow3Ghj1gyFbZzNNHae1X4CKFGQCofDX3yGQNbWC",
  "key26": "3QpL7LmygvmD2pvCzmuF5FRK2iMmXuZgP9Rc3MUSTRrv926VB6g7gVzMBZDhp841n57AwPNsGqhtSdT5BVqLgRzy",
  "key27": "3nP56PMXhc53ZJg2sqoU8rTatNBgUGrHC7yw6j6vBAd5mm773uaWvC5CgjqfxTBCJ8qdonYvuCAYCwe3VqLJfnjo",
  "key28": "nuMhEpYudacAQbcha1ppF2SBcXh19ZELcNiru6yzhPG7XBHAtt3DHPPyqV2GcBMZ9T1c3uDfJnFvoLSnfkZfvWh",
  "key29": "53z1JyMXhipKergvxVda7X33WaJ74Bybz3Agbqx4M9ARcnfpYG8rzZnY5qHirBsamXELQxXTk1iiGeMzR3f7MZCH",
  "key30": "2GPwzHpBv7uHUMdPXr7qpGuezDdwhfPmLrJnsWte1GYVgppcfzqath56pAA9RqbKELU9hhdb9wTxefArEKJ5hRKT",
  "key31": "3s5CozsPSfB44egqip62gFTgdiJZ2fb7GN3NNZ6SxuHeHkSojvK7Ey6bnqgpG3gtvLvQu6Zn1WvVpRZZReDXsCD6",
  "key32": "4tNnYXneL647Q1Qt5ioqsKETB9RLgpemdMDrfGRw9AJGvYZNzrvt6FuEyHvxnWYcL8NviT6AHCRX1qmMXkDMdSLy",
  "key33": "5YPGYqFdobypJC5N4q7G9Qtbe9Fni2ieNibrfsErektAAtsQkLzC5PCjSNCLLHgsASmUjboLZ6FMj2Pm63csKDxD",
  "key34": "3XyzAW71L2eL7extnc1eFQt21uBByfNUK2Hy1TNa9g4MkkjryWtDMywWkBkTpdrHt4a8uX4hXazdy86mtoTVBbKt",
  "key35": "5mHAAkTH6V6ZAGsNRPv3tCAgriN4Hugi6uSzryyHAPmxMm6hWmM6UHGGFdgMYLfpH6hxNbtFDynuaPNB3wwfGsL5",
  "key36": "29RvTrWEwigyJ8NeP3LmHPbHQShQivonDjfpDdKZNY9XEChE5ojuT5Bhxsw2SCMCbMSdsHyHNGZzj8XY1JCbv6uH",
  "key37": "yNTTMuXmYUYf9qTnEFNtrALJFy3jYwHf58drtPQUEARP4yBYjz2tctbeJoCYfAwodv7n45dhRu5bcRfDjSxhf77",
  "key38": "HoYLH5xhPYDFWisawemCms8eneFFGpkBBkdyrwpnNkwBWNsDrxDwkdacBCGamS6eZt2V3XHdCZ4SzyATUnwxSDS",
  "key39": "5EbkWKroFXNqRU4Q8KmfWPDq6E6c726R7pkFR6bJRU5nn9qPEQpNoM8zWpz8BQkfHYrvo6zJ5X26YGqvRjVfVuRB",
  "key40": "35TJhcWns92yo24Yv39TaVRtHVwbQr76HQVs2yMUMRM75BqyGsZ9kPmpdinokUBcH985kmSWGbHJNEpyhEhKC8y2",
  "key41": "4Z8DoGxc16QTdEfd2JAGNsADPCLofRvyR3GRPLP4yrBxUM9aGhW4gZqEsxSK1BN6Qe45uTcqPbrSf1LZHynRot6P"
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
