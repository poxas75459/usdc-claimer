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
    "4ujrC6nAyLsLSqt52RcDTkXbFSmxtwc6Lhbk3S2UwwJsuRgQwCxGaPHjdscsDkHmNJyB3Ft9WvcP7mZ3EfRmdVof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NhvctMGPv7a5dzH8aePyvkP9nckoYuu5ApYGu5GGURWa2aotG7crgq8Hi8r6J34FxDa7ddSkVmWFgtb7taj4WUj",
  "key1": "2T87C8nV2ddfZdTvc8wp6evFMq2wVNABjDnH4592WDVeNfytu6bEaRNFQaN7twxp25ixed7M1u6KAKE7Eu4ej974",
  "key2": "RRdDsvKNhXEf4npWt7iaWeyLqRvEdyTiNtnPNJwQLLeS8qGFoHDBUwkCc5SdAmDZfQVLKVF8YJ95Pv1AXdbYT6c",
  "key3": "5nsGth9feKFYx3PPoXKUrHAdYEmjHWXBLgaXKaH9LDd4HzbERcmR6aAG6pNXpNnXG7hrWKiaahnLwwoeJ1kJaVG4",
  "key4": "fbCZX4NRLW9rqoyio3zBdZvW6vxLWP8sTX1RL9GaJBZnDKr3J9ZNrE9ez6ePweY1Tr3o9H3pkAEfC4pARDhUSSE",
  "key5": "5UYoGy9iSH9BMyCq1dJVGub2WRXzMZvGFCcr3Pde2KZN9bf39F86WSqAhqGjKp3qsCwgrhH5ELCNcsrZSRt2VJoc",
  "key6": "5iTGNMSnniesAHUjtKRNiWra45hpqEU9TfwYTRnTdp9qNYFxKfqUDkZcvZkDn2ZGHZ1ucX9pVHB8z7aJy1ccDAPn",
  "key7": "ogv4hifpjQi1eWDj7nXxQvD1aQnKBpKRCxkhcTMe7UkByTiX8HAjczK8NHJ9vBgxBvveWJgd14joFkKDQESx6uv",
  "key8": "5y3p2fEKPG9XEMgmqF1mT5osdybJ1p4bDrqQbHCNMAbZbn8pCeJn4F33E4bDmz9zpaBgVxSpAcSppU1bbYgJqt1W",
  "key9": "5JwAgRQicGf6WL9wiMGfsp9C5WtYEG1oV9jrjjXRtA6opeMPhq3WzzFFHVyvMgwASxFDseum7XtwW38F1c1mwDPT",
  "key10": "2AFSSrjMfFoSkKp6G13xpNy77F2wr4mtfoaL2djUzQovBWc2Xo2zqGZGsRqivt5aESBR3noWDtXv1zi5QVCksLqA",
  "key11": "5BY193DtyUu7Xs6B4gT8krR8GKWtrph9oFBWnNKD9ZiDRLNdvPgknFvY14FiFqL5rXBhmTfV6MMT8aPvMHZ7q5uG",
  "key12": "gZiw15g9RF8DWSxCqWyCwNuNBq1Rv2yyAx2EiBwQYbNE2p9LGeXeRaFMctSDN2tT46dDDUwy293CQkKYNkKwBdL",
  "key13": "5M7kRSxSCkwyxz2P47HFKZNQkkHBxUwZ5N8rWSeDQoSVxMm28RYTDtqFLNKtrzVBUS7Rdf3Vzcva4FtrUKG285ag",
  "key14": "3eAP2dpjeRcB5gq9W9tgUGYHRqidmcBjodNevvz3QhF7byjR7ZYEs5u121J7CH5TcAXgxg5mRsoCCcTuBJB1aVw2",
  "key15": "3Yv6dHQUpfx4J5AHHEe3FpbY5ytLQYU1VUsbHPrKBVTcrqbsBjge28MyKg9b2VWPhR398a93A277Anhkb51RULbU",
  "key16": "47kYYWMsRjF2GNVFpTiWUaZVCFEEYUPTPaqknY5Vq4oRaKsnvU4GJwHeyc17Borh53VT3Uxf7UVpSvWSMtMGNiVU",
  "key17": "Z3XDtDwiawui4AJV61Qa9FGzhYfPyhYTvEjK7c7fj6eHc1gSTYGA6rACY2htSTd4mcD18FfTUKQpYuvv59txb8G",
  "key18": "PaC4TWgCDQ2nDMXeB9bSa84NsRij458vXubdtUjdt5ndt3Mv5bz14DS3YviS4Pwx9WtkkJedvm5LbzYy2T1AtaJ",
  "key19": "43GMmhWym5SVTkXFMytTTC6doPphx77z7DmaoEtmxSnPQB28JG1Xs4gB7BPpjeitr7LjDZQ9GFsi93GisnvvFgrR",
  "key20": "9Z3nz6sGX2Cx6vYhbu1BegnbWH1YKe2wkLmGN6jq9tBXCRh89Mw9RBrYnQutFQJrk1VqiV3kYhMZ9ZYciUbcsi6",
  "key21": "3azmyp26gWbMibwLh2zNMhsdcEWRphtq9Hj5GuRD8RUe5Treh4qDekify2CG5qNkSM71PU391unpQiLdtNQFwpgo",
  "key22": "Riza8kHUicmQRLRhaCNrVJLLj2HmX8C3s9fZVhxfu9M1MNgTrpbjKhvf5BSdrJL9kx1C26qWwhSpEBKgBY6H8vw",
  "key23": "3t1GhRZqw5FcTn5yZ1vaRea4niJEzNYBM64W4RAzN2k3Yo9rhQKjMQiJZP314N3aJWg5PNSRtFyj7zzvw24iukfg",
  "key24": "4Trb5r16hK93HP6pUKwnujMnaF8tzkDseiF8nEdN6sHTAaXi8uV7NWxqguDC3H3VBGWP1cPYMTxSkMbrR5asKtou",
  "key25": "b7JqJEMESJHSAz2hhcfpCFF1MT8hN42yDoNNF9pgRaUWQmkD1kEANEG47EFKFjXC6m9ueXLvgYLqd42jx5ZP5Vc",
  "key26": "2TCUnEghzvVEZ4SsDbs9PdZgJd1DPSYYxXiPcbkbEqhBoc7kCExDiE2kUHUN5LQBjydHLXGG1wnMYU33k58Kiip7",
  "key27": "32MoQCEeEKvdu4SRvfSpPjN8pnWiwxEy7pt33fFDXzXB3mak23aCvdkeFm2HkY4xTZLFufuNxYSXx3scyi8G3pbr",
  "key28": "2cbvWGAAJh1FUEoJiGZ8iCUdiquukbq1KBDx388VDGRkiMrUGZRJADZSkRyuwYfFaKDbUS3T7i5WBAREaPHD2MZy",
  "key29": "2RDqkjMAGpSb7cfwUmq47R1YpstJUENqEcg12KDyEZsufcCGGY5pDrymzWQBCgPNK5ABcCTD1a9oKffC8LRSRWY3",
  "key30": "48khxCBvz2V7yuxRrTk3dDXQ5Sw6VXKZZWxx6ASh7YjshUJYpdAfRvHEZZn9xB1CiJ8naezduW2cvHB4brLfkd99",
  "key31": "cTrVcq4aLaXqc94zWQ97YKYxxkSS2fBinAZyA8ymNM913jbzycKtbh8L2McSHisDXC4oh8yjMShqyH31wKkvCC7",
  "key32": "5UzovPMJ8x492Hf6yK9RKUov3oGrobHBuwhHWtY1asbQvhA5z9WGDtigZx1VGyiLS77UbNQbZxKVn2uye1ud7tVb",
  "key33": "N12mjGer6SUNAQgiZycfdSh5wWgGAt8j6QZ9aZCKEQBnrEJfSyfrzGmz2fKpG79VMj4FwRbfWbtZAgV2dvj5kMh",
  "key34": "2M8mHc7ro8XuGuasMTG8gi3Gm839wq79kHMVHaUcaRJkveBpsMmGZ6u25QucDwYLXcPoNJSKfzcBTuVNxkYWcoK8",
  "key35": "5cKLGYiub9pW8yS1cMmWtGMDBqJbCptaakaEY5oxm1mswJig5p8H4V9qhxHQPv3RQrKqtk3N1BgMeaSSahmoCSjk",
  "key36": "3WxYK7jTUhv1qUWFmjFrCgBRtjmTXG6wpnJFW8i6nEXqkMo1Dmhi2zajC8dgZdqnQ8v8mVGyFtpMVq8qLXR4yy9B",
  "key37": "43FJFjRrFTiL4Pbx8LGeiJhNjdTNC5yHuo97iJHXabfpqTrLD6mDbkuy7CqU8iFuVe83QdwadDAKfVLomwUTGfbh",
  "key38": "5AwTSh5hWwsDev27VGThiZdrFsYgj3JHCYxPWfS1o4DGVhApPkU5aK2Fn1cdtU6aH2kEbLbfspYwAJYFD7ZNpnHn",
  "key39": "r8kAMxNriVFaLWSfVbRM4hH9TBEGjmdhX59kq47q1D4aUjueQJoTP7tDzyCCbEwqa4hHwtT9ydJWzs84R5Puev3",
  "key40": "4h6Skth4Hh2ZB2bv8n2PmvAWCENUSdcFSRuKBtfdWu4cq7pvUVHbJUwrT4rmSJvtHkoTE52N2Zxuq4ymX88b9aJ",
  "key41": "3Y11DyRUCBo3eDf6PGiS4h4QbHMREajc7ZAvqtuCAFaPgT4fAWR263DmssQSPHbUeRceWb5Xb778PRKssbgK6s1",
  "key42": "4QeUDHqacG81scAcTz9uVD1fRR33jExrm7UbGQmkJxbzhqt5ppvGvGYoYatfxWHaSrvkT9h19K6jg5hAmxf2CwSg",
  "key43": "2BBRhHoveEy5ogbzJxagGvACFbcc2r1Wc7RcunG81atzKNP29RuvHeWFGdftXqkhbLnwH1qNaesFydAQS577Ti6U",
  "key44": "KuuGjSxTJWJomQS1wXxQycPHsAPzdTCw7NJ35h6XyQbx6ediQw8FV5QLMdjjjDjcYpZ1fFiQ7UnFEsob4MDdd4u",
  "key45": "5V4xPKuXYRioUMnD82Rn4mn6R5pmTnfC5PnNwNJxEi5m4PSA5Tz7N66VLtWsCUoxaA3XzMQ6vV31xEL6YsbbGHXk",
  "key46": "jF4vnsVou6PDnkQbJkgsgeJ5UfzfmseDE4tkX1gunC6c1MiqGRx9XGUZbzEgL3xAyoyXvKqtzSxJFJYfqN6y1pz",
  "key47": "26qGzmeaKJhSawp97662Exd51VuGmdHF4wCoPBcpvRj15JGbxgsyh67QuSauhDnsr7V14rTGfxhL91RwDjgiWfhw",
  "key48": "5TbXtfzRkVjoJHxRQMZp25GgrP33upRecSeYiF5kxxdbnXn5KX9BwGbxgiiLvF7DUKwhTChDdg3T69KKiBQs2vJp",
  "key49": "4mmBXz6YNcV8hwpDkGYCCNyufygydrbBikBio1WbpnLD3xzCVCeiegMRtKnKjG4SsdpdBNHiJhArhVD3ySkwnzDi"
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
