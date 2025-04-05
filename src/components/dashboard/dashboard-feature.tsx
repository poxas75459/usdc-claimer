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
    "26M4vhBFFaoVQt7JYLMpDsk9MibYMYKik6Wu2YNWR1XZYeXEm7iUUSf6V7baKjQXWbuPutuXHEdEwDFRUJcjZZru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNooJ93KBQ8bT9SMc55ePbRPuWoJ1vMTrvwktpME1tQqHUFkTUyELHK9gwGPK6CXdFUnntWuxAi9QqNNw7Ciy7S",
  "key1": "n4so9Mzfh8R4q5NdUgBn8YzqshaD6ouwBA7LFAiF8YKTkhf3H6PkSEoFR8wEFQX1Bmra5S9FvgDEESsPKAeV8S2",
  "key2": "2dd6ieTGuEEoL4gBxTgcJjDZgBiN3XJ61UqqWPx9ur1dwxoiqMBedMfGbEm4zjKnyC5huYfvqWNQbkJiqpqUDmXP",
  "key3": "2krty6vJBtT6oV4n2CdXAxMaAZNwSwNNjUJt9N448pJbMDqmbGtaGCJtR7mR4AjCUw1Ws3hRTEQtxaymUwUoqBrb",
  "key4": "53vxfumjqSJ3HSxEgZKL5tNQVo8PWRdT5T1Zys6VK2R3AQNYnwpQPiVCKx2W62YcWrsoAMh4MugHSttyuNnZNEoB",
  "key5": "noTmajBkvk6nZudmXTPwSofcZbVfQToGDxBud6ycsMAx3YGUFLwjE47r9provG9hearWXxDfDk5T2u5vw4FRK3r",
  "key6": "2R4VbmskJZEKRErAsMKBafg6puEiBk1BvSB8KWfB1A9EW2uWWXGJmJJtMsRvqFMLNiCZyUvFcTZL7ZP2vtGL6z6c",
  "key7": "2ydAgFMZYdSpkJRFiRKqu7iqgYBbAFnyTjD6aUVWzDEC5zG6oZLroZhgN4E67wskcrQLZfT3v6b54d4eFZDrpPaB",
  "key8": "5LTTHGGFKPKkHGoCGJmZ9sTvcnonUMjeNtzAJgPpRuocShLj3DmYpDKgPBF25MZPavyjXeMd4CJ33Bx5b5sruuJ8",
  "key9": "62Bh65mxdkk7TuDozys8TxosfN3QDJ75fyBQU7QGEWHnTiqbhtK6KTHttpzoziSVha9rAipxLUztdGhYH6He2xVS",
  "key10": "28FkKBBB94WCnYhGGTLsWLBSga3hVruLY8WMd3JwCvuGRTQjydpqvrNnH8LPmLRYhkv6QsJqtyCJRTGAkQKzxv85",
  "key11": "GNCsxHbNkjBYtnN7iBXc2wANi9xft1m2D3NYSnHV3Bi2yskfQ7joQwYpYCQrWLUk9e9WZbfL1xB38ykBchK1xAQ",
  "key12": "5SZDJsRQCQCUSNaURth17cHsby2Jg7beapHCZoTj2FUha4QzntP77GP7eWk8mdjQ6yBKJcXhbM9SMjZyQM2MPDaz",
  "key13": "rVmbaiNMWPbArZHesMJ1AvLaMcaAPYx7ejewKArBE5auB3x7SAmrGHGRHtFHDLe8q7mrT2x8g6R2BUEaDPpgmEa",
  "key14": "2eLTGxRLNYFmqykyjmzxGVFrm2hLJrXBD4jqs3Gs1ZL5Yux43SYYKCx5Qtqkm53HCc52CoDsD2drAgcPmxcibYW",
  "key15": "34jqb7GdEX3G86SujTwf9aAirPKjr2BbMMMu8SPKmkAEGNmk89gvVQFG3acafyCiAqxpkYjy7xqUoJvkamDGapLX",
  "key16": "2qZroEsdWstexwneG3CEAgJWTmR6mT5VhBaKt4DqXGPyHBnJeAw9vzxchEtymPsPCn2FbmE3u3x1ispm4EKCCLdf",
  "key17": "HjsrXEvz26dcsSz3qrX1F1x7o3AiR5GYdZGT2CZrbD7TJL7AXe8M2QKNLptPeqJJtzGQPUNvQ3o3zJydwPLBUYt",
  "key18": "3QtNFfdELyvqZQgjhbTF1wc1MPad8Di5Q3w3WkfUnSLsQujdzY6UiuM6Tzbf5UAW4TCjCFYdXaJZSWSAijxgL5Ha",
  "key19": "nKLoCkebRdU6xA3rZwWxmCf9keDzTAtyNdK8gPbPAo2Loho97ytdDr2nT8CSaSMALho99SVXDtweumUUbuYXGsP",
  "key20": "3zaw8fY59YULm1xh8LMasVU3jYJutgj1hAYUhxH7DCe6JVa8gLHJNRFAAfZCX1TohCCsjRm194hNMmmxx3vwwcXA",
  "key21": "4wby6tScmnm2WYMo1S87WLr2wHX9RMay1PgSMR2JHscPhqVfZgj1K3J5AupoViPQXDdCYeRZrxAqZJaJWon5eFX5",
  "key22": "3DGw4iYER74gfgcHRy2zupAn636Gcz9nRMhh3xYYG8q1WWR2zFebAUkHX7iYRXCb854TMBPpf9R7Bfgvm6Vn8fhr",
  "key23": "MnaskYVLKxcgVFdFwWFikmT5JmN5Vx3GQ6akYoXWcNXfRZK4sMtRGpbxs5pEGTos3T8BApaijNcEhmhz75Jf1SP",
  "key24": "zgvgvB5okRwrQgupGBwiNRSJiqx5vcPuPrRePVSxapiCw9cvLy77wqGfYPEFne4A7wj6CNxdVm1TRytdYZDL2Xx",
  "key25": "5gYi8NwLNBDHoxvs8GgNTWnjZujtb6H5Kee1HiK9BCDuypZxorWjJiPHD7WZgeU6rMU89H2NUrkLRVXY1bDDVL2L",
  "key26": "5k1Qogft38eFreGu1jfyXqC555w4CiXDVwHLhT2EVbCiCeU6NtC3UyUUSpMaiiS6drDR9nQoeNUDHnYxk7SR9Nge",
  "key27": "5tY81FCKrGiy7fDfzqaxchn37J85X43ZMLAyKyZCEVTLUkBrNXYjF6pc6kUpJw8r9x5YQmCMqHXDYHrRZcWPrEyX",
  "key28": "3WV3eb6ovWA1yYAVDzvwPnfSgLKzb3LBetb5GyNjmmRp9yDAkEMK2LWtn5hyJxwJqUfh3Yo5XFrb6coCSFJEEqSC",
  "key29": "sAciJHUWW3vRT7EJ2BueGm3Cxbg2369CmMDkgpP6ywLgsYU8BwJAGT9nxePxhjL6ipm471HVRihTi1ktfzKK24P",
  "key30": "SyiwdjaGSNFh1VYxxKSBm9isnkjiyrPf6CZEmDpq8qycTUKWBBQXvtRRWH2h5Liwb4YEmgtT41pfknTa2ZR5XuM",
  "key31": "2VQEpzPdS2KjWVsNoWbuvZJAyV8y2EfRpND3awe7LWSMkzdzWbLgXb81jfkJwWT8vtcvjpdzuNd7u95KnvrWVms",
  "key32": "5oLnQmu46gmu5kydH7RfuEYWfMmHXUGEZU6uUjdw41oZxCbe8T3PKqdtZS7cTRNweUiw6hpW8YhJGHttWVbWXRdP",
  "key33": "5LBfXotKEvFBEKqzfhPbH8pFkES89DUYUc37xqbgkgoYNPEjzWD8pzA1URUR8zervCqJ5mF73EhD91oCfTUcC8jy",
  "key34": "63oXzFP5Vb6WShCd9JgiV25T4y5Rr9Pm9V5V9qVsJpdhvFq2jQJXS2PBiUriMcJRUzL2F8Fhzua9L5DXgHBQpwpG",
  "key35": "CQxKqaN7B4uRmR45BdhKBHXpVN6NoanhBn22ouXwg1HyfF4PHMUUnyDiJEpvpvFEbJHmJgp7MjjdbKBAMsqyNuT",
  "key36": "5JUSyGGvpQpifYDvZxwkK19kzBEeaGJrbwtGiTRzESJhp8f9cPGRDEhg9oh7ebZ5YN9PaGnsZgrJwHzHbNbkG2VH",
  "key37": "4p5wVVaYim62H5dcxPooPXaymLoN5MkuRtTBkFGrcNMXhg6DWS7qb971HdMTCpwnvvpS3WTiTPT6b4jHvfC8cQPL",
  "key38": "ZYZ2AoMkzTh5LgQJ9X2fkCEfje8SKgF2a2fuD45KTW8DGmwvWaKeWupHEWFEgrHsZyTaA3kgsrUxWzaRgXutxQB",
  "key39": "2En3DSjhvVsKB3a2eKYpMM47LbFHFZX9LTNEzEXKjELTWZiCHp1nejZ5EPnaEJnBQWxerXM21GkdwuyPsKEJSBaF",
  "key40": "3DzSqUQUZ7mRPncHeUxxUzSzZqfdfLrPATCshn9YFd17jL1uoaL9hNsxL5qKJQmpDBPfpYxCRCqWhKtGYPocWdVu",
  "key41": "PhvUeShd6frcqjknTix4EJevJtkXpMG4vxbLHDeRScFrvGr8jZuZEm1aeS7Uncrf38Pa4AWKKMmnhvNC7qMrWq3",
  "key42": "2o1D6JHwFqTYEme4rAtZu1bX83NTGUg73um8GAYcBJNakzstN6kBji3n217KbCveWz19ENsoEyZfAVqD3sWLe3DW",
  "key43": "2Myk7HvsKkQTLJAkVvKvPZTQEZaKowxaWoLq38Q4PTPD2ZZoFRHgK3KSc7vMuxdwGSHrNrJe3yX3DFniywr7UKdz",
  "key44": "5mvMENUKM3WiBUK3pJoBnio2GXjM6Lo5bBxoTcw7UGmB6vuPy9Gg5XxnUXAEcynDm1NBGXP2wiVcsXS7XABwgrvr",
  "key45": "4gYPkkauEWKVhsPu3uihNKGSTAfQ9dcVywfaByptutsLFa1L2SngvzJCz5tSEwyUKDjMQXxNhcxf3MygCxty2Ndx",
  "key46": "5zzSoZ75hw4Kv5ETSeix5DCyhqSBhHoFi2VKz2E9TYrapu5xewjNCNnaa5K7Woiypc4onyQvEBHPtDWXkWvhxA8C",
  "key47": "23dNnC8EM19UxKZzGvcBPH1m3qh4V3AAKfw5oyCH9VxoApf7bmYmUv5beySppjWVrpRgPyx4q6DmcWk6BvVJk7Bc"
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
