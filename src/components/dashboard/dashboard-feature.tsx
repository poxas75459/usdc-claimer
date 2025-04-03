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
    "2cf2EgaerD5hhvUazrYSuhfFCy4EugrVtcHfiB6pevFvPFw9tZkZt4gZHRGULz1sovtsAjh5TLjuoWQqGw3af6WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JJWuVsR8eWLfqW8gyBTWuj98RrxDn42L2t3u6uwE586Lurh6Np9B6wtqxXubQs9223zmhk15VsJ6NXreJgf8tcY",
  "key1": "52kobi5ePyfAYfKjs8biCFBtUpAngx38uoasxrgRu5F7kijR4DhY1uSnS4pGFvxBdwgumF7ciZTsy9D99zV7idQb",
  "key2": "qgovPHp7kkewqnfPTcByaWoxTxDHUqsMtj3vrgnNbfoXxSgVhN2DFy63Cv2xp64PQCDHJCcZjMGCsiGhdgMWmLN",
  "key3": "4uJ7pVjNoijkHYfpdAVWzVYLFYYJirnPgBbW3smpmYpR4LjvwSpcdzn3wvEUtT5jWiAv3U2qPi8PwHqsKhKzYR49",
  "key4": "54gDsuSFwbT6dc7vAi3bjdFgxT59zFCJGAFy8DtiTezqZULyRXBiB3abKykxtJWMmAtymhXn1E1qC6naQpGRd33j",
  "key5": "4AGgneZeVydXxZp6XvGaxNQWh6cXCVaNKPAH7Qzv5nbFf6LpxTJzsJ1D3vVunwbrp4bzqP3sgHBwhTzcJL9NhSSx",
  "key6": "B3xgUwAvq8tkASJXtRRnGsPCtcWiRp3s8qYcEjhnFwdzEQzHbrnhK2upscXHG48ktLVAsQWZRTHDLaWujhpJnUf",
  "key7": "NELTUqWtoSk9tEwGuqdsJjg2DSFA2aU1Cj1azXuGUGa737gSSSFrhyKRfDxTscQKfr62auRciyaUGeMBEnAdZuS",
  "key8": "gQ1qEp4DSNrBWi2PA73Wudgvju8qrUuxmMeZMaFVnv2Wvmv3FAf85TJeq8n8wkSV3KDNKfMcw2gsFii11scxXsu",
  "key9": "4xBcRxcJMFgpDrEKgCnPHRtig2RhhXpAr2SBn1eUrRKnuZAViXB7SRnmtEVksMm4TQ3394qiXMpgV6fGG2sLS2tQ",
  "key10": "3tE8NwNKpNLUiZwW7dVGDB9jVxN8SBnHx7m2SjWoHYbJ8QRoZcYcr3t8BmYZfqYoaXW4ZmfqwhLTXR7S3YXUUHV8",
  "key11": "2pDArbPPKff1HiF7VoKA2oCYE8yK9cHk7ynw93j8uF1o8vxyYypTunPqbejqYGFbEQF6CYCD1neSUGN4gx2yJP6x",
  "key12": "MTSiCRSG22rnCzZYWVZBdwnYn39qe5nHR3oFquuoUUGAz3KZMAyxxvZjypfw1VTK2LBah8zttVdcBr4cRZseF99",
  "key13": "4LfG5U4MXv9dRMFeKxhQUmtUa55JHFuCVtY6xCkEPCKsEx8eL4YHp4jzgQX9YQTryjMTERjmCMuBRordLXAVHaZq",
  "key14": "2afxzhLiJSiamQ5ARQLyKXsffMqTPBiasNLnP6yMHccmPqKZVNFWdZW8wnUcqq3UfdsECzc5s6MW7sz8AYWrpWWg",
  "key15": "MJqRJbez43qQY4R2R4jQwSTiSY2fEGPsLoTec421UBB4Tmps84zAhgGDtC7sptwvkEruuApKgcUbRzmJ5K5RcRq",
  "key16": "4fNwD9t8SummevLeEg716DQf6jApxToYcmSTYYUnL4GkCbJAgy4T29meDoKQkRBm9X7MWoAKjFdYHtMdz7KNYNT",
  "key17": "5nR8tdGaDr3LzKvev7fzzqSpfb7ZRJ6HiHejTaJgU3w3ZDoQDtgb9mvKBBjnsXxAfaWR24hTP6W5d5VHDoyDAnuf",
  "key18": "3XZHEabfn17nu5zS4Fvq43iygSHjG1LWJLQ1uT9qptmeoxpFjQmjdbJnTYGS8DnDEXxyo47rkBvX5gzsoyFWUhPZ",
  "key19": "SQDne9DMxE5GFKTeKALLzKrQKFdAiKwWdum7nyVkjbZGGsKd5Mc1KTaUDECbeoUY34WtHmQGNAE95R9us93NdSJ",
  "key20": "RUKNnyaSeKCwNZ6LBBYHksV1BE1PRi9w4ZJVwJEQQA4pffJ24RekSwTCvBrLsJ2gYyX9dQGAz9JVhwaTFuu6k89",
  "key21": "63pGj98h7xi2aML2r6BqHrRCNW6AksXcpjPFfy3dCSvyDBHfF4PiP4SsgSWdEgefBrcA7jCY6dakPRPuA4JxCDKh",
  "key22": "TXLnzgvYwExSQfuUzqXPQU4Myt4aKbRaKeLCchrvu6Cx7gT1uZBy8romkm6N8VmDR4LuX7UVX1ib4iNS4CaV6L8",
  "key23": "2TgcSnPL1TGyfNtzyA62J8bivkq8oC19DYU9dKeeYAEi3ki1hBVy4yC8uA3zN8vU53GrumHKXzyxtKPAyWUnBwYV",
  "key24": "4TTGHNUfTYWKV3W5RpywrtFkSp8UMtDi5ebXbzqAnUykbprYtTAJkXkuFZUbHH5qvy3adpzn2EMsRyAwGGd2mdwS",
  "key25": "TMnR1QhmZyu74DEm1GWN7C8HFfs3PQpZacJyRxHGVEUQbW9PiF4bQuy56gSxc93AHv7iVHH7apPU61Ark85SKEw",
  "key26": "hyctEhtayz8H8FvBKp63cAgAw4mjh4k74j6bYvcjPC3DQvUsArBRoHw1oMfyZBfsLC4B31agrYWbnnA4TDfCAqp",
  "key27": "4y95WsCd8Vd4GjAbKm4Eg8AxqHdVCZmB5TiVvfEXjN16LMm78mTRgmM1uprtb9NkaZ6nEeaXRHEecjQtxDytGWMj",
  "key28": "23Fvy9gB5XbzzhrSpdpLbeq6EXjJbYipWSGMe5mEHTdmbwWhQ9Qd5qHMiXVV8Sqs9rEugj5d8jBo6EYB7EhPGPkX",
  "key29": "4Er97ETmrDJ1oV7VEbooXRRW6nLz9zyURH4v3kNeEW9vqR6tFUQwAh15Vs4yEeoYpTxBjRdyWPrzU7fsLKCs9PVf",
  "key30": "3pcywKMFjDLexRTx6WQ31m6jbB5gXvBzfvp2fFsxsiw8jPPSxNSrJJbj5mARXv2nMSD5S9nRk26sRASccAC3KceF",
  "key31": "3YrhhqYFgXSs8UcAyJH6vU18U9pPvjKUXDPT5vx9SLaY6eHd8kBjjXTHHF4QRD9BDcGVQQTD53VXZAwvEpaujMWF",
  "key32": "5br2d4ssuXZ89hSHuUkAcBe8BCusJReRWYb2U3ykiH5mtegVx6HY7GGKaVEFXF22LyA4efwXiBFJP72sTjj57jkP",
  "key33": "45z9Ry4H7XSVnEER69o7c1tfYKArL8KxmJ2yzeG8nK5N6gygvoDKf8Wpk8sWwUM2STzBamPiUEw19CmymjUMhqRt",
  "key34": "GC7PRiNa6J3VrDKGrLTKFNZ2jqN9KkuKHL3brSL9CF6N1XQZWuTwW8Np2Ugx8RCc496VTuLZLwQwLxfFDADyJ7Q",
  "key35": "3hvotr3EASNYMfvH1mpGaCA9KN2zQkMZt8Ez6U78jaebGpmjHvucu2bJiPUsbNGcu4nWmHVW9pjPjRSwkfM4wJon",
  "key36": "4tgyCf9Am1KCfroyuwp1u7wF6LHYzdgPYLazzYA8o3zRDjZYfJaNcL9w3sSofbcgJ6BUt13wSRX9cnPom9FM63EU",
  "key37": "35ZZ7q3t83mt6Xec7wytHcsXyehMyY24XevhQBarqXeGBq3uNvP1MjmyLwtuTRhnbcMNWeaKW83JUkniWi8QM2ny",
  "key38": "3fJAJNKpsQo81hPYWm7VL63Tsx5v3Tq87KnedhY2vSUwbpF7mcoLsjjPszafbjPApM7xAw8AbVMyxQNkeAcSrwv3",
  "key39": "5o2KkQvZ3srqNJdbWEviMCJpQRfCYxk8Y7kKeoJKme1ZGX4keyq6AA8kkcYce6gwD3pEWkBCWn4xC1ktxSTYDdSe",
  "key40": "NRB7cX3R3y7nQvBiRQHfvAgnV9VVRpJoF3b9AZvuV7GkYV4GoaPSwSU9Ycha5scd62YjpPaPBozqpHh4Xk7quUT",
  "key41": "55jCHznc3SKTkYNGnNWujr5tMg8cw6LJegtv5LSLhWdez4A8dtuYQ66RfiNLMyMd7YXELNApz5QvrgwKojR7DBky",
  "key42": "2sjXeeqwQdAE8LD4cfQRUtqxpt82Rc4VQeqZcXbfdyVGv6TyFG3KwH6bw6gmMgkAVP7n2s1VqAnh1NTEvQeGuTqE",
  "key43": "CFViqU79TqtZ18UP9jPDLoV9phCrQ8DGWpy1s6uLUM9yiESW3nWX6nP2Z4ziArc4pv26XwSi73FV62UZb8hNPnT",
  "key44": "2RuURbjxGJD3SCn1BWRLV48sa6NWsT8uaqwYwWpTsB5cQy41bro4mcvUQLvhpEwbtU75R6PYrTQdp9r7wpC4DfSA",
  "key45": "2SMhPfEYTwZLwrS4yGHYVpeGo2B55tgbbXvdWHQkKND4w8CUncqT8QRK8DJ6BYVbtfVgXhcFRcnsLfGvwvkTNDkz"
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
