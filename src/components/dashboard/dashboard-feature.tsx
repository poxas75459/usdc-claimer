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
    "37xSUodtW1dJTCPwLkuNku2nmyoMtcJmNLyNCre7RozW64QZUJGSr14ChgXyKL9jQ3BHW5Js8pfBwYTudxNDA7oH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twn3WgZWti2A71D3CTA8KvNxTw2eQkzqYuMFaK8DgBhnDBDMqusgSrsvjMhubaMEUZ9XprWitsswtTrKRV22ZB5",
  "key1": "3gBZEi1jCfEsKgNBgh6cseEgzuWC65cUW32YVt6pbDsxbgjHZTDN39ZWjfc6hYsshaXh8yXxYXyjV45pAVLTrJQ7",
  "key2": "3U8Xfs46RLjoDaJqpw1KPDRyhrnwohM27YuPxzoxg9im3W4sgQhz5mZTgZxAxtJbgY5SEbpYpzNP9EFMk7NNtpsL",
  "key3": "2hhZHKfVBFYwYMjQKk127kDgZKmAz7dd7JApo6NTeuk6AuzPBpm2TkrPiGziJEDTJyEfMsrbaGwChydju7cnrSkg",
  "key4": "5DATZLvdGSND8REVYJjb1thqhvmZDYh6Uju1FQ13Cu43ZuRUgdWxycDqHX3ZGyVaUoPwUMWEfxpU6WRNe8HDAqvj",
  "key5": "5uLjE6VYJ1DwDFtRttviXdriRR5iPXYyqkEavxfT4H5ijVqYWqz2ra1ANZysyYu41i7Nuu1UWeav6SvGUo62UZgd",
  "key6": "5tqVWNrihmUT9dWnY24oiSF6FSTGtqvRT5Uz3WJScb8iiqNHgDSHVFy7upQnSLdvrbpPeLVPEFcEHrrRrw7UdFDu",
  "key7": "5NnsuX9YvL2jy1wZLEK2QpUwert8KrmcdQSXiiEgCEz5QZPdQpxXWNmPBJuKyVN5L1DVKyKNzR6j7zHgbwRkNSXV",
  "key8": "98jAdBUYRG1fctFk2ZBWbLikyDfdsNyJMixcTxL8AbTN3pGZLhcTb389msyiMwCms2TuNHm3Nd6QTdNCVCAfHBJ",
  "key9": "APJGdeD64yAQQpiNsJRdCZpnzXwxM5gcwUCdQpHEgTbH4RqdAznCZdaARFB9WuMdjctK8QWuM6JgqEa8LWnBTDw",
  "key10": "2n8xczQuc1ACcUyVzYstgRTKzircfM64yaHEinQJhQ4rKTXsh5uwrRNgSNxzQXYKRf87DnzXEoKYFyopL8s2cUf9",
  "key11": "3KUMtvWuzqyRbHpyroE5NGXbHMRgUEUcJHeEq5s8K1yqRouREp8Rw6rGKpimPWYk2FhrVKq3m6Z27sLESepAsDFM",
  "key12": "4gayBocHrgdUxHtJeLxCBSCMa1wSnBtMPJ6SsR1jtkGTk4tH4ZTeQ21RjjGoioQ8faB6FFvJRpewgCBothiAFoNf",
  "key13": "2BHrwXykLVvKPJkUbxNv1H1fS1cYPeEfAMLHQNPjuBrg2ya7VspNmqZbTVz12iaCvwg4LMMKV3VcBrCaHxK6KG4Y",
  "key14": "33hH8rHjQrud7ZU3HAFucBm5PHyenjEMoyCpNxJUwpKAASb4QXGXzdGm6cLPPMVrXnRvtc47NWhUaHxDAekKGiY1",
  "key15": "5qooXGroz8FQRaV3XBrMctsAfRSv6AuVkujcXZKT6kujZ6Jg5uUFe1gKgTQ55c2cZJeRi2Ni9q36r2EmWr2vQ8mQ",
  "key16": "3eRzwrF8uyag5HsGzLNbRoJcVHF1RxgXcZnjrCaErqi4CF9ChBZj7iHninrkdEgH4A4iPKDqxL7JFWp9rukXw1py",
  "key17": "HBxmTgyTotantyM1nZZ5ypP8JdGCsqACdpumSEN5pMV2qH7s4KkmtTNQ8peUK59Rf3AKVjMnSasH8FikgeQFvSa",
  "key18": "4XLWYrTYta6gkAaDT9p18ihgmeVz7qJ9HKMhV3XMnLK1TEyAdrwbGdHqNvv9N4Em9ScDTYc6s1Xi7Z77wLmjGi8b",
  "key19": "4XefgkMbX5mnUMUzF8Fwtogxgmef77pzVFFJ4X3hLweX8WJ2p6iCvUtf3JABMVEdHTFUFnRzU9EBZfdHpB53xknw",
  "key20": "aqyF7KZ6PyEeVH9drHQ1ftNvN242pWHQBAwZGKctkrDL8oD7dr6mhuBashiQCKyAwhdPM7MTo988TWSCBZbm9Lz",
  "key21": "56YBBkxgXNNzBmvz1Yg6Sranx3VPPdn5fqcfEspqQEnrVoy8tpATwYLtWFKDZSi1QozYYpPPchTuPST1HdeubQ16",
  "key22": "4PRiYdtQEvFDxE5cpCiXeDHJeWL6gB5PkoMZTxUXKR9xCKfsXwsUwuaJNFTrU9x747u6VJLGwK51LFz94bVFNUce",
  "key23": "5Y4YadVec3aEjG58seTFbDzFF8dJHw6ej9xCbMFqjFihuVVeYgGcBbNBM8oLYTmc5T84q1JUkyj447umUoi6E3Q8",
  "key24": "4Bropi8shz29dGYibeFrEixzdgo1dUEwGt27bxbz41y7bXbjBgwJ9faA3DHAaUnRYZA5FqtSHm9Bm4gvfLnWSNgv",
  "key25": "5ALme42yzp8ZsQWW3P4d5h6LuzKSPsfQaEYvWSuHptqNYGpSrzD9Pr3P7vNLivitJFvt56f3z2EPiS3HsZd2cTYM",
  "key26": "5hpKfJqmbNzFVByyrSJna7jK8asvF6JeS4cAgb2uz1VrF7ruHJAPvHGRtGVzdfvtoeyfQAQo9t7LKanCEy9N2xGV",
  "key27": "28ZXJbxjbsZjwKGvySrGqXjKt9xVrD3rP1juNPGwV6Y3EnVcEdfP5kpNLhfqEmcmbUvxM5dchrhS5T1vv1aVWrra",
  "key28": "2trCqQpNpvEiThJnBvboHusiGcCLHNDnaq3vyAxD6UXhxnamUMEYiB4JTNDbJVbgF9gah2W9eEULHaVz7qjwaivm",
  "key29": "4LRaWdcBys3XqnSdx3ccaPTrD4t4JnExFxkq2bZVaU6AvhL8XiS37xEUUbFEeJftx9vtadkZkF1Yc51sTTeEBgRU",
  "key30": "S2srn4SWiTLrG5FRWP2XG5fX5kmtjMDVUZigGPdFsh2eJsg2yUTBENuyrRxQVT8SaVfX12E1LDpPoUURs2pchBH",
  "key31": "4C1foC3XA2BAKjtwsYQLWaPt8W3wXzDnaZ3XG17QSoUkNLTVPEwcDo9uSNFfvux2WkSUUa5tAvaPxdcvxkindJLy",
  "key32": "48Mw25tB1SniUE6TtxPx6mopc776y8wKqRPrhEa3NqJuiBCkCUbr9FRKP49Lj8RCGdbiDoGnPdgzkjTacehrViDW",
  "key33": "4qe4D82x1LHQtSpiXiVuf8rXuEVBmLjoy3zEpdeQg9PJekr4ksDWyg6Z1vZeJ14pfutcTZPh5fHDmGQmYEnsuo2F",
  "key34": "jsTByemp3t997YHD6t15KHHjaHjqYenGUTdj5wKgHmikqbqdytcY1v2dD8CXmWNEi8YoVqkhfkkWeL21AAbqc9A",
  "key35": "5xRCDs8NyuUnQDhMpgqJhDxhCmCZXB8HnFmwtDQghAqGphfnqf69WeeJtcneeMJiByUBz1rvFTRn7P9S6JhQ4nxM",
  "key36": "5dwizfrrZeEJ6bwd4B7vMAoQ5sETiJpQvqFrNpZebUDamzL9S9zCki2TDYXycwUgtYGwfY8RoXECuRgmfLwpoR8z",
  "key37": "2Ria8JBocTWchRSwtwHmJuERxsypjMGQzDeyzoJz15WJGNpUEjcKKvadQtA1itS3c5PospY6nLWRcxhHs5e2A4Mv",
  "key38": "5V8w18zVtH7TMK9fieKdC6Ki2m7FnuwGrCTKTQ9G1n9St1dY4wChKFX44ee1FgfEV9rURhzg2NEZK9MHYtEoeymW",
  "key39": "k78Uf7QLT9MusWLffxx28fdd61gvNqjeLSkV6mwYMadqvdixHo1oyi7Yhnch7CsqE7VNyeQ6AdCK9FN8Azvia13",
  "key40": "52cPdm6Mq2BFnuinFR4TYH1WtVmj47SZ7XoxHsh33Eu9DDyFqV55rhthQZ6A5AjRmDi9bur4HmCLAAaRavWzRtT5",
  "key41": "4bsuxD5toESQYeNWNTfSHUv1FHvpP8oiCtq8JnqcbAqduGN3eW8FdNRZXyED839W8r7nFgXprcCX8Q2Gy5XJNkac",
  "key42": "5YJCneuwU33zqdsXebMed72x1f5iRj5ZMexbQCVm8ERG8FJR2YMnDwY8UzWDXNRmYEJELwpWvA4w4k1J488Xqfk",
  "key43": "iNvpnfbQcnduzf92StAM8Rg6rP7qCBmCdVp8rxFduVPSB6sJwarEMBhPZWSpk3REA32UGp44PUMG5v1RRcSigvi",
  "key44": "2xERRYqZr1UkjXTar8tG4YBV4aw7xoZ4EBmKL2px8vTJgb9rSDhgSsxUFvixjWUykTcN1HyKSm5PrsEgwuEBmb5G",
  "key45": "4QzjybbCpNq9svPrBBcHdP98sANchdhRxHurX8sdRzq6Jv6AkgwDGCdc44F9BEyCkMaQLbTSC4EV2DJvgm7qE2c9",
  "key46": "3jgV8vwsWiEVZg9JATLVNc2jBwGQPozfciX9hMt3zxTP7hWLAYgjMiSSDqLbArYP7FWcBMQL7wMqqbCiD9qfqmum",
  "key47": "3NH2JVDoHUCqarXYkvrnneyin6tnS6gY2LJ5Q7emmMmtnyAfcewhwAyi5ho1NDhXfLvwL2SoJABeo9xHXiHPX8zJ",
  "key48": "2qV63dS2DhvhsgkrCXB28Wud5cNAHPxYBMZHS726dQf1xiTzhtbn1B68DwyjizCFu3XQH7E1uRqmR32sVp7f4Fst"
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
