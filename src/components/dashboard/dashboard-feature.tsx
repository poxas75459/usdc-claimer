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
    "285qVqEEy5nvnLYXM7WpZQAFj5ZtDRM2LqcZeSHtWQwouJndX476u5eMcRD2p9YSNXoRwtYQLzWBzkj6WK8htaXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhFy7SESEZEtddK3NVzLD96TwNsufS43MqJwmJR5xnsJ3VHVAVYMD3UL9UnG3w6nhjGz8JkAo7wrSERUnBUgaej",
  "key1": "3A9UqAo1R9EMwVyv6jn3GbPpykoM9F6ZyaD31EYGWE7D3XTUcMbQG4EaFHiPUmUDcsAL7jUhhvVfyweRcZn7NdCS",
  "key2": "2LiT6vGeXyEXJhMEZGLAMNa34sSqLWNxXXY9UqseDZHHodRqAzkK2CjRhJgBxgQZ5p3GE6v9ybUYAKBF1YydnRis",
  "key3": "2zmgdPw2nsqVzxFXbaxbynuMYoPG8WbfhFgiPWWiKJRk5QrBZeCQ1RaXxf76x12rpYFk9wxXGTzfSpdt6E6X2TXm",
  "key4": "5rKUYzEd2iVGiLPec5NgcfhTsYnU7WDcAcgCLVb5TRkd77wCJJeneGzFpyk52MjBxSsbTorZ4jJA23bcSKriCBcS",
  "key5": "3Pr1px2MBQja8BN7Zu3bG2Te1LsSccHxyLw8NcLf3kBkGznrQ4F8oHRswXrFW5vmAQhqPovw7p33Vj3vH3N98XTE",
  "key6": "zve82Ar59uY9DrJczStxPZ1ommpYHn3x5jHhYXqTvg5FFA5CPqVCH16r5m9b6VVmWmxKd2JhbpgiwW8m6ycATVm",
  "key7": "27eHFEGdLAMK7ZkTpZSVbfCY4B9aEU9QS8yYDkjAnd2c5fhRm1MZX3WM1gbq2D7PdnVE4iAanCMPGuArjjRe91N8",
  "key8": "4C2Ftuipg9H2dXJbbGeNEiVUjhbBhqfGzW6JXprq8pKmBaPa1b4iotWLR5ktM8u3UFeLn9bpxFCXUYNULGGZm7nN",
  "key9": "5y1sv7Ve2WSs4oecTCp38ikwKKErz2ZTN5sWUfLXDu68La6y8TKNyVi3AgcLsDLjn1gtsFs7pP9RnaQCzRpKpCyS",
  "key10": "2TmnXYn4uXLGecXXdJcmjk6s2vHDndBbQAMgU6G1SmPt7gkEZHtxHefgdzxq89BnPxqAH9ZwrCzj9L4ipD8sfZ55",
  "key11": "45WbfhT97pfqV9hjbWUsnKes4voXYSPgiCH8PoUvMiLEVvAn3B76mF1RaqyduWbcQjtm1CjmRp6vhbzURyGkHcyR",
  "key12": "55FnDTdMgccEFF7er4wqUgpG99mzATHCzdod8rJ8ys4Tk53asqjwu6dWDmU6TKG4141zmyozJCBfmqybck7fwag6",
  "key13": "47az7wkXBnuMw4V6Q6WMc94bAM2EtPUnJpkEZgQiWJLzACmiADjZwGtKEkiENLDhrkZHczxKx1GMid4mVLNv1eWK",
  "key14": "5uP3Vr58RUFsLDQXNrA3piRTsbe1J7Ht6Uy18pPzWCdrTszkVg5x1MFUHpmNnWmpnpfpgotTbvL249YWKb7bQWJB",
  "key15": "5yDX6fGRWRPSGYkndg5WXJUpa4iq7nT8s6TW4RXZShzMTVst1AxezY9up4dHxoQ1kP2u2gQZuP1VSjWK3quAbtpU",
  "key16": "2D2MDCjXWqR4DV6s2pevnwrPWV5TKAdPzXpa1Yyh8ciPnZhHttS1jeEdc4R11Fx6bVXubVsmzMFKe1oPWUfiYDjx",
  "key17": "3t4h9cYAA14wgbp6AvySLt75eC7LzgTQ7z5jqFbeNgoFUNxaweaUvpehBwChgtYMX8SLB7XccJmLxxwBUxyb9gUR",
  "key18": "3geBSpm5ESFu8QscjNC5wDLTmNSswZg5eNJ76GYhk6ZPRek1VMdm7Tj2DuATpcM3iNmTgT4nPrEhheyx67MvzFct",
  "key19": "5PhLhqX28mNQZupWCnES5NaeoU1R6tcWVErxbHxkok1APohmnQCweCx31ULkf4pKke9QWrQbFC1Ks1R2xo5pADb",
  "key20": "3Pyp56zFVRqz5WjJ8EwCm41mgTpXCaeGmkYLphcUGmBMgifM7nLKd25Rr2BTHnGknm7ukiPRtkQWLx9ETztwEQHN",
  "key21": "HKxuNi3NpspngRQG8kvSkNibbvCg9dLo5dXoLPvPYBnroAKkuZ4sHjKj5Qk8X6fCxJ8cfAN3y3YipF7jiNjKN65",
  "key22": "2ZfPEt752Nw1yh1zGgaVXiYTvHQF392XCGrArTRJUYoGTDfS8PYAzG1LkduKpNgp6fb9JN3djuq64QQGQNmLhCwk",
  "key23": "3rced1iFmgNVVryGsuUdXYs9DGiJwNXyCTPJJYvZ4L7xqWKZ4HebkvHG3ikcAxseWprr6UNiTnN2G2eyRuRMNLdS",
  "key24": "5yQq5n6x43txqUC7ZD437rTARkyNWk6pvwwPDpA86JZL81q7mRjZmmAFcSsLxzHhHaGTekWnkqjmMdCeg3dQs5mn",
  "key25": "5aBbXLCTQAzsa5K59J1CJgrPJEBAAkJNv1wZP33iCESLnp9maqFWuv4Rcxj1jY5cTAuC8QSpS1qnz9a7VC8GF6wp",
  "key26": "5HEauhTxa3G9QSDJdfL54QiXmSpy4hA4yU2a2dhPRTZz5Cmx4czTX3bmUjuiLFxZ8Q9iy5rk7vYgTJYpcRVwuAaX",
  "key27": "52js3z1ZBHoBPTbM4pA2AUmZgGcKiLn45MgxxJwQjB81rWtRCdNyCtjZdKSJ9AHncQSLMo8uAHrwtY6Bg43vxRzY",
  "key28": "SEF2s9CRrAs66QGLW26T5Gn2pZrNb7tNohHsoNi23nDfwbbzeDxBxUYwDZkvaKfNpvMtG5JkZ3nwspQUzdtxPWU",
  "key29": "3w3xupiQxR8BCBtdmF49vgBvUeKo72FWdM2LK74BXY5jVBWroxK1mGX6D4m36Ck527jqvcShwmeGytdP5KN5xc6e",
  "key30": "2oQWuPnGoEv7ACaTT1M4FztyV16U2Ykmn7MMiHYQKQMh3yH3R5TAQdZZKXT9aTqcusidmuaHEwGpZyj1Theec5xE",
  "key31": "3Jw9PQv6RayrABnXKdJfHCiaGESAm1EUNvP1gv9rCDEzQhVu6tGPYz6Nfz5Juisu55hrvKYzRPkzPmhyETQmZhxo",
  "key32": "s7xBUPN6a45qd3TkuzGK9qPAs1AgLymMp5xpGjFkz2e4teiQPp5J2iMq18f1VjUZJeG3ZLqgn3XU8ZvcTLv5TYL",
  "key33": "5axf7RDkqwmJg9RE43UcmrV6bWv6MNmW6w1Knc7LdEHxj3gFRVSWHdJvd28n1fkEuiXpFJ7g5YVfoYkoi1NSFvLU",
  "key34": "5uTYzcs2jWHFRhzuCjPnrcn45kWHuZc9NWwfG5TWpKpKocRZUjAv71FhxZqxEXRFu9mq26hkd2A1se1Dv7hrCnmR",
  "key35": "52zL7GNfGEEvWnPmvCKYBmxTLY55mUBH55kdAxQvKGHNG44EhQtZc8Qys9nHRrppj41hgr8PhUXhq3QimFftXtEJ",
  "key36": "3gn1e7NNVVtbyXoL58W6xys8bTSDx1CeqL5vTdW1WXfPrsP5Dqca5rhBUnMma1u7qMKdG4Z8osHWp35zM9MW5wgN",
  "key37": "4pnZqjAJFvWVRP6c4g2mQzm2Egc7TbWkcDsKhM3A8WazwBDaGmLVGirHnLv5V2ZVM8yuSzKmtegBXLQiGdMzdxB4",
  "key38": "3Vp9Dzut5ZoL2YwFdHAadx5HPVLjdvxUS9TmX1GtEh5ZH8zFsS1WuNe2tBrznL5dthL7o3JCx4eHWyqAyEmNak4n",
  "key39": "2WWfYzoTPqS6enfFppUYt7qs93PHNdneUo242rRyVF3cUTj39z32LHbz93uCxznS1KQ2n3RA2rmCdQApBb7b2duR",
  "key40": "4dia5556nqoJj18tz4jY4pb1MtWJ3KScaUzYTPdfxixqw4WSq1Lob74JRMMWVdL76LYU5hU14VdHWKxkstdVJR9b",
  "key41": "5oWQxtCDUadqMrN4o5q2jYG3Sbvt4HuAzvSh9fauMKR7HZE8r6mLB6AZ6WYHBnzNuLMJm9vvPNMwr96btFMjaKtZ",
  "key42": "4TCi85esX6Y9zHCw8cWo39in6ow4oThBrja7DgXZa6TbyobUmBBvwwaM8Fus31Jh84fRiiRRuWgD45kABfgKLLXa",
  "key43": "PLDc6fqrtSKqBm7Zq3ws2SoYS6Zyi5BfHwjLbz5XDrWLZsjoYAKBtZN8jk3ZCCdHNZHb9WV299VokGVQhtgWsPt",
  "key44": "4oZyhg3pncSb5DDigiQqbgdMUfYRhv67QPaAVzqH9nC2zKjff2VcscGYpUMaXgur7jiWBGBXCyTnrkfL1ryGs4xS",
  "key45": "3tqeNyimfpVxuuQWwzfXzJPvte4irmeD62Roh8nCch179KX6BhzY5qJLbs3K8pa1N4hbXqNrwcFkJAvNsHAvF48e",
  "key46": "5iRH5HxxQAxA1hSA348Ar6LwY3Me6SzdR2SGq5g828vE36dBCeq92oUNBAv12yfbJ4BBRTtuzAAxVA28Px9kuqTA",
  "key47": "3kXesiEi96zz3M9RhXsiSd99864sha4zVmzKJmEfHSkdZMpxeSCZZyEqczFHF8neQTeKDiAQhy1XzuAMoBjvMFgS",
  "key48": "cKDGZ21fPE87ddtB2erF5H8TatHFw1k1MU36oQh8z37H8R7NHTX5DHd4AvMoiWVfstaNKp4Y2PqgwtGbnjsKtL7",
  "key49": "4ofZc1689fsXCB7bCFYdb3GzBeiK2DF1KomL79owgdbqfxCNh8JJcVqpuP7Zqns9Vn1GCMVeszPwohLMJyFTiirg"
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
