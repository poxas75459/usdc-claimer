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
    "3YPPSfr3JfWaZc12qkfF5REpk1MS6hPJP6ewZVy3Qv4gu5ssqqSGqUU7egkiBsecdeEgu25sZYmkYcNxyX3k2KYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DZhHp3Fnn5df75XHkViLMPpcfs2Skw6X2wvjF74FSa3ZF9D1eeHx5bftQQBfCEBVZqbxh7vmLnwjHkh28WPtc8",
  "key1": "5bBqAfGYXAhiRiEhNHFWA6m1sbW3B8AY1Cnnp6pfte8C1zAuQPnEkvfU2dQmG6RoDkqXrMNc1p525P5uPu1MTLLi",
  "key2": "2Lnv3v9JsMVKep5zYuKkCXCjkmiJjXrAzH8YcJHk95UQSFQDQQQu2CWGnfBFczuHdHS6zDdmy3udbDEyJcHGjaVK",
  "key3": "39qKKHUB7te3pQPRUyzxCep5zUqA7qB8ueLxBRpUehpebcR2aWZCMEf7ika4YY6YZsTLGKSpYWMeEkXmHMZhd6ND",
  "key4": "jqmG3XoQzq3ebvPMYqn2P61zYCJ3S1Mv1edt43dr3f9JCVT8bqtsbt4nEyoC5v5sCw8mtZnChFG7crMnxQ4ukYz",
  "key5": "21o1AobouXEixmvshE5Le68Wjn6GKNEU8WL3CJQnEe3BePSpwiBmrqH8XjY59sK6oQ8zK3imW5y9QgxFRXXfiHHp",
  "key6": "4vSce5jn4AezAmR5vF3P8yUVDtjiEVtyUFbCUpj9KCoh9mSCyswjBYDj2TCgad7Z379vQbBsHG37LiVqKF3TsgFH",
  "key7": "3g7bMCMCUJTz9qHwcr9AbGwDCL3udaGij5S7kg5TZLAyH5mSs1AtdNsbbuVu6HDWwicJUoSsWTtycY3MXJwnPwmU",
  "key8": "4qxvYHh9e9tRHh5b5vwoGqN5GK64NfroCXL1AwvffTfZAwdYGmbDJ8R2oag8dibd7w4D972FFXpxnSy8b11FqL55",
  "key9": "K6RxQkPKBmWpbt4Cj52NF4N1Uznq1JZwCKdgXMAeRMtoviidY3aLmRX3mLhePEWnZYzbxe3qGQXCAdrdu91UXNw",
  "key10": "5s3dgbi7ExDuFRRBy4sH2qH37S7aH2RiDuMtf8edGRk7ofR9kTyj3hrNNwJVcJrLV2XJUdZBLVquQa97i1iacE6T",
  "key11": "4C4e6YuSvvFTvXq4zDk18RDQQ4ESUiwAzDagtBbaSrdknREeKK2Q3SCQ5Pq8rdJrXADnDaDk4FnMCoFS1eyvM9HN",
  "key12": "2ZWq4BbyihqLh3XKdTtvzkP8QmLqnBKrpdM2r4xrb6ex2BiCxRPZA2tLnDi2L3tchVEZzSfHvYbBxBjuCQ6Z1rb1",
  "key13": "3V6pFi1ypNsXZEH3SfYuVNKAzZ2Gq9dvDCiF8erYRL9rDU4N98UBu7cirBdXs9FLm5sb7sKPL6BTdqZvtGu6kUcM",
  "key14": "4fwaYSeFVKv2fTTmEscjm5CWkiAF3UbBBTk5HiC6hRBW88MqdPgiAtDaw9CiciSEKthMBwHPBvSXhxCZeA2kM7ub",
  "key15": "3vQrM2YrjicvBnF17yCQK2w6fBhQ5j3nkqYHfMyjCB5saLcS56suE6mKDYgGL98wZpaDizf9qqxXg6y2VtN8arkM",
  "key16": "2tKgRiAmZbYip9duRMkTQYXPswhJrVA3Ra5bVNKqMxmYK4MnKMi2mubB7gWE7Fs4uuFLFRyjqMUD3s2T5Pphack9",
  "key17": "2xZ1kgVHadMATdrq4KAWGJ58FXqx5caTJ6haSDYMGvsJWv71uN49Vmtk1yXBjiJbNGX3RFyRNAQh591v9ZP1rjSd",
  "key18": "3GwUaPEWCLgWvJ4vZ5PKW2RMeKjDgtQhwWG5KfbMELp1HLyyNK9Eycijkt3LkjCP9hcQbgkK5UhCg4PPqGHQ8nBZ",
  "key19": "3cr31dnRbzhj3pdwTvnKjHYmVjMNEvXdW3ZkNnDBD9Eovj5EwsxA6vHcuo8YQ2Z5xFA3ELDoacqXNS3dReTAciE7",
  "key20": "fwcX3cLyvp3MLgYnDKF2XMBbakHujyQNgvXiM18SaBan4qvr4noGYUgXUMoa3YBD47X89LHiMUhgUTG78bdN8Sy",
  "key21": "4S9nzW3CEESaPHL5pLdf8ULUrW4rLzMQT4XcXk4J7HtSuuHu5gdFLeA2kYpGFrFe4TH1caqzaNBVRSH2u37vT2R2",
  "key22": "28x9WXaobFU7moKQM6skxzwCZdEdrrCoE1MkMyy2kRmxMCcRomdrgF2zufyiMdVPc93ide8ULpAuFEqbhy3LRXH3",
  "key23": "Mqt9FFWpdtGhYaEUTdrZZMuxat1kjZ2rJ8t3gKiVVhuwMwW2V2iPoQMhkPrANUTUXWujtSRdfWK5D4V2riyHwrP",
  "key24": "54QVJcjahsSgM68dHrFTrUsLyYQwCWCkCzLeAipuYfhDUSSUqx5nGpiAMd2JdACiQ264girqxkNiZdWAMzDNMk8f",
  "key25": "2TzrsnFUFb1U3aawsySMRC721qBLawf6qR8WKjmMkjX8GPyju8Pcpf5M4VX5UHT4DtBPEtMagQafiC84EhAF6jaR",
  "key26": "5UuVDdRW8VaTHoUm8dMNoFvTRCNfJZXLe2RW2g5zaRqj8MTE1u6H2WC7kyjxsAA6TcU2nFS9uRH6jJZf2Kyyn1qb",
  "key27": "2pgmCkrRiSeKJh5dYELppHmHjzEeT1xSpXQ3sLB5ncaWk8ayaZYotF1heepg52KRMdAd4kzCsEipxbf52XqdJwrL",
  "key28": "2TUX4VvBS2DM9eaQsP9Uthhx7SDULfwbqPaAbFhevbmE8Ljvgq3ZYMR4mHg1PrujXhsCVe3FKnTD5Ah7jyYoRM5a",
  "key29": "63SToFn5Nh5ijhkMHeqC5WoaGu7CtYsMBjFig5MVoxFC89aXBz4ZhhRogJr87zyrSeD9aW7NmwXPhoJVvRVSZf9N",
  "key30": "4yHZVEDM7iPCrwBsuRSPTnbFMN1msUxu1E5YqfVt6RXKueGqdEmMwSt94hRRoJWD6nAstoq3X8NFV4DuG5J6uvR4",
  "key31": "3jeawPGkoytbqxiCXC2cS1pbxvrEaKKN3n6HpxvPC9sPjq1rzKLuhvBRyp51BX3nxo57xAXgSoTwkxVvx9YMTGqp",
  "key32": "5ypznXAFYEBiNCgYNmWtRDCBCMHaKTav8TacEKi2djn6vRPcNoxBoLeTKm4k2egEgCazDqTJnJmLrM6GBeyTXgDY",
  "key33": "3bSMfyHVBzK5p86BPizAe7mWnyxS7ywqjdyBR5LSCshJJ1uBjtMV27gfTW1YLvyHf6p42pyrKghLcJJVUc7Hed1t",
  "key34": "43rgV6fvZnL3Mneq3QWoXTmtvP1watxfLCan1zCJdhMZUfXTZeTqhGL1j2J8cubSFGN2NH34WG5SFUTARth4wtQF",
  "key35": "iMGzPs75Zy8BX9hvszanYPMa9V5MhX1LPEfCqGTepZPBKxbybZGhYH2ciG4cKas2MVTZPcdf3ieaSzCiT4FEYKu",
  "key36": "4dMvu52iiJ1m8rP9cWn9ScC3GeHNEGgunWZR3YV468yEviQ9w8yzYKg7oAjbagkzsC7PdPNMxYpNuDoeanxpkoeu",
  "key37": "5gSuaB5AhsQaD77s5ajKxT9xUkqNf2T7ntq7bMLocifDmwokmXREi3psejyUETaYAK3fyA3cq7q43Ntq1vbEapBc",
  "key38": "4E7mQrkCSQCHdnCKPesyi9Cdwbjy7Zgsz7WXraqkmVQkMjamGL8pUEVaE3TM1Yz29DzxueR8rEPwTZD29LYjmU7G",
  "key39": "2ZyqdDFakFmL4JAtaxEpgVZ8YqVp5ynT3uFdNt12A68gVZnXjDGMdt9bf7FdiPpC4mXLyLixrSjGQkaza4991ic9",
  "key40": "2Aezp2NqCEnsdDeV8M4uhTGsikng4ePLm1Q9ZvKfEjbRYysMWc3yBtZR91tf53qNswUFnpcXBEKkZZvs5pS7HeSv",
  "key41": "4knPHLfT79Dj48thEx5kN81Lum25QVmWS5Wd8oDZ88Kg3HQJRuPAxPvQPQ8q5dYYdes7WxJESDQxpkCR7L6RyQ9e",
  "key42": "uRoTHC372HE3QGhKhEHqYU1dRiHLCgzp6ZVrL2tfnXreweaiWzgy16uoEsSnPaaBiJnkEf76eeEEvQok1Xhj2U3"
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
