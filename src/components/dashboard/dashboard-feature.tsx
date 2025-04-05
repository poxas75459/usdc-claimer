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
    "5PBgvXHtsAFmLQTXGnAjMVVdMDArzYAdPX3brSnrsXogLTvCoUcc8ZhZd2wNmUJACGHuhTXo47mtEiDcDWgLP1oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezoNVYR6FuQwpPfPApCU6LMEPXq2HNNLoodHzS36WyULawYw6FurDgW8C5houJ9UX3VNoZu6WHBhkqbqpSGEgvD",
  "key1": "4dd7E4g8YUpjKd76Dsuw8eJQPsJbUasA6QyYve3BgdGuTbLxXvJ8w6csDmwZZykMUgXxJx8cbhYX6CgepAedeyLE",
  "key2": "41MKPbSi23MykLi8m8siPvaFBtNSKcNR7HdfxsJmaJ8qyifjK5VDj41tKmg37j3i6suUwqtzEkAZUMZzjYzDWrnx",
  "key3": "249mHxZg66vKoXiTVbAzBf1JUvesPiM5JGSW8csV6F2cNRJYcVVWo14tCXtey6Hwm81F7aNxHXw1EEGmyXJ1qpQL",
  "key4": "2yDpfEqRJXX2SBSdSEJ4K6Jt2Tf5B972cejGisMgVqN72VehaGyJ5WyfHmtiNFGh6JWNAmPXRVrykDFpdrVyzKCj",
  "key5": "4Caar1NH1CU21GoAVuKuu6AE4WXt8cht6QdvQFZuEYU7dczGZtx4H1zpNHdXhuEBTPFmGcWbrFjdHTxLzrJmdc5",
  "key6": "5FVoxpDiWxqHsBnbkzwMM3yTUmTV9hH389WX9WHXcLZ7u9eXbL5X8SfoaZJYiFQ2MZ9W22w5XGJa8P5si1YkgwVT",
  "key7": "3VM5m72WXxdVPNHofuT5aVEWtnCR7MJdToMqtQ47ZCYS4BVoXkQrUkbTUfgBhU5WteScctmthGaFsL7tb1iGu7ZU",
  "key8": "eMhR579PHByM6NJLCpukuNLagUSjprx1rsxCnzmv2aKZ7CdHohYgQesMLsyUXJEBKDc43g6x6i3kbnhAbqCnYS4",
  "key9": "5A7UaysAsg62xeWUForn7GzbauusHq8ESZUyjB6AbFx8kDE1ZSWg4G3FGNn1i6UFEjJtDX5gGypywjfkpQYfGygu",
  "key10": "4esduxq2PbL714DFxvruSwQqkmsGafjRbxp8XEZoRB6iDwjFLR4rD6nHJGaqfD6R7S25EhCxVy4pzRxJtRFV5TZX",
  "key11": "3JFdSZM4WyjmbpGtRfz8ijqSeDnRHwNbJfTRYBGKwvAZPMj7Nq91xCqgGKcAjx8bQyZ86HXncmyfFk277mkUTjng",
  "key12": "4fmeTrZSG7bixQv2YvMBR8aDkL2EwYCZrrBjXKXjSVaqVS3uNFqbgHfbhgxvcxWsnaXVKUTPYG4aijQuanofgaVt",
  "key13": "2dDVynz6qW9SzfRnZUsDWvyuVPDQUjjkyNTXtoirKtJvSn1fXBd3JWXa2m1rdFz1YiodCxiBHHj96BGN91GuqzTX",
  "key14": "27sAhzEUTqxUnEWnFP4Uo5srArtzhRQkEFHs6ZHT3FPLLcPwSGZ4SzAuUUMNGBQZ4vyZtAjok3svyfaDJNNb3tbQ",
  "key15": "3799c5MTnZDwxDLC21kRXBLhqXbN7z19CieZyzTuHS76DJr6iJHC23ttH4SXdWzHmvFYEhdXdNbBGzbUD1vfAxKV",
  "key16": "27NrwW66upvh7cAkMfjy5KCo8akXX1s35QeeSe7mb5Na8xfxUy82k6JJhwB2qZVz9eiUQ6dfimsiPSSWQYFgStdn",
  "key17": "4XPwDymCojSJTY2BMCSzbqkLiyr4RtaQ7S5mYTnjtLfcDReuTb8wa7MaC7TyxehVpoYNRNZoLet6o36cDgnYRJ6k",
  "key18": "5D2SpEVDBVoQGm3xQWHF7om4RdJ3fTg3FGAbUip6VGQwrJJXyr48ry1Mh77LsWt19GB4XF4eAE6uuYNoZEm8xjxb",
  "key19": "2ZaYfj12vjqzocWy4ezVUbPzYMQUZHJ9qbLEbydohZjeakDq5M92CSWHoru9Xhntaq6mECejSmhhAQFKZbLpDvAc",
  "key20": "4vvdQDhrWQRmSQAKPCRtbk2Sx3bTTikjrwydKqkTxAMnJh17nYKnCvCq1wKukmNj2PLjiojAGr8LiSRduLXWHUPk",
  "key21": "3c3ydzGPHQqq6coNjkPQXY7KNwExzhuuwGxwKfg4c5pWNDJE4Lsu6dLyj1v9Ayk69F2J2m14yWRULZDdMnjrnzDz",
  "key22": "3iAFPAGHHmV65Cd3w9nxdeAjzQjRJHzHbEyQxBCpUVNorSp5fhNBBqcqEJfw5zTwFwok8Y8JCiF35seDDpFnfe3F",
  "key23": "2WvMsVnE3qbJni2ctxPi2M6578FnCeiDf2qKq7RFtyMYa8MWqDDYRkdCg8Ki1cJbzvPaoPejRqxrgMAeWjhLhZLJ",
  "key24": "5ChTDxUKbFS5TkoCFPBtH6vsUgHr9U5vPJYYPrdP7ojae3EmDWgPifXD9gnMyJ5rrjS8aVePGtrNTHMhDtbm6yKK",
  "key25": "3XEiFXQBpfPQ3TeLR9NuVh2Phb3VZKb13gcB8qt1BLrVNnH8z7Lhp4ohSaJWu13W5qbQMU6RRF9wkC8jkhRMNo99",
  "key26": "58CCRwuNYruxDX8XoMLwxP2f9qJux1GLXZY6GW6TUQXyz4QQ33ipWF52W5i6t1pFga4hiinzkA2XQEmhjLiBFsEJ",
  "key27": "4ErrnFBTWbkLZtytz7QMewKQ3dyou4VtHcfByun9Jkf69QECaEnsqBbJdLG4L4rCoWQUHkr6zooUdyxLwsZpi6qq",
  "key28": "5sWjbSdszjsnJuVfzyVCYXvnd7o8AaJWWVdFqduFLyyfLXfaexZfMN7Z5fkuiSpjWRubUsq4reTnz5ycoYsU7KMU",
  "key29": "4s7JVnXRNqZcWmKyn5gYjr84VzncbD9rHzRwEn6wCnPjoESYUaTZuAwC9j4a2rCT6Tty5dFd9kkXrj2scCW9uPNo",
  "key30": "5fxqEEMGgHeKzBpokrw9cidn8zSEuyVDM4g39Py36ztwtJaoan5hfEvCKQfndUU4rokZ862fUiV7Hd61DhWFHbjL",
  "key31": "5yMoNyPX1To7hdDfJJya8YEDBQwXYTLY35zknyefG2Wu5qVUDNLQoEXEVLoYoG4GtEXCiP3U7rGt8ZHi7WeYXops",
  "key32": "2WCASQsFivLaoChVJtBro8LdN4GDRp2AERr6QQh3ikfMks9hLXmB6eekdj3o6hwvavh8fQe2KyGm9JCqCbFsY4qa",
  "key33": "5EegdL1dyy5ht48qSF9MHJW7rjDPTSnksa6ShsjBSUgyVvoZHVfTytyJD744fV9Mghryh8kS9MAaD6DDEmYUuuka",
  "key34": "5E4B7mNoXbXiuLRtLGDzq1HMsx9Zq9xLNw88eM9ZLiev9w68HUc6avFXbD97cUyCB9iv3t2xuupjBTuKnJAHD7BG",
  "key35": "45k75gKqqfruHUpzZJEXdvGwrHxkGPKi3GTyxdgmb4Hk6hasgE2KsgmbQa9KBf4pvcg3sBosyh4U24YHDR9J7xJF",
  "key36": "4yNgksv5UJYm1cWpe4VaU3hABa6jxNMMDVGAgdUZonxyZRQuFUyWD2q2J1yk9Fg4NoMzY4kddtmSB8UEdNRovY44",
  "key37": "3nBXhGhhno49bqtSVJbQK73sc3f5QRBhwpc3E6Srn1EM8a5vke2QSFUnw3so1YPVh7DYyc5R9HqHGysEovLNcyQm",
  "key38": "4fWdaTpEYA1RFH6RHx4NCpMbt4Q1h2J5zZ5xBqGgKqZNCjAHaidb9xuRbQHMihDy2xWEZPa5Re12qSZfq8AFJqcr",
  "key39": "4fwiTMCx79T5UneAK8oquZhoHUa842G5GkE4QQqJQ9ftm2gdKnPPHg4e22MP2hpmMTtAWUcHibFfTcRFZ19MwfEp",
  "key40": "2q4eMfU2R86ox7MU25F6kjmMegsgqPTsFEvXDTY3zPgYd2bxYU4wNPskcjqnwVsNGPKWDgFagNZhXQvPydP2vnah",
  "key41": "28ygstHsrRn1UVPgHVgqkP3S69A7LX3G6iUmezdeZf1JGWArwc37tksz16EPPWNZ4rmwaDPxTYUj4jQtByM4HRhH",
  "key42": "3G4sgVGyMTMW5CYnnAxPbpPzrWFoY4SJbEY1k4oieo8jCbmjYA8zeqY3KHfxwjCM8oJqdPB3ZGGLaYaFV14cHwvh",
  "key43": "3PwRb717KKqWmopJ5Mpd6ecdodRxdRtvzWM3VxHxBymw47rpTDR3Z8zwE636xa481dMBhny8JQ5q6c6wME6oYEwu",
  "key44": "4mFtDGyLUCJk84xZrkB8bJxpTYmo5hGptkhF2as1kVzy4BiPLokrf4EtgLrghWinUVGHSCNYcGbPTYfCyWRRNrvW"
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
