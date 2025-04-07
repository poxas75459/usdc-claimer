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
    "5FNo4sbc9YpX2isvQjV4hZrtX5eR5NdHnHz1o6jKg9Qn4vEsdTS4TK3Rz2N2Kcd4DPML8czaxrEH3YcJCXnvahtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZrZvC32Aheu9Qh3cUTtmFHQU4c6uaeGw7WNMvGrcaWQvZxpL3zPF5awpLf2ULMYfopTL4VX8yUvgoMPZNCnQzVt",
  "key1": "5hQdb5bCH3wXLUyHDmQsh3ZZnku8r6njcFb4er1tfK2EfR3QshsrcQtfr2wcr8JnUAysS2vzZCa2yFe3tCpMhLyH",
  "key2": "5vDcXJAMULfrodAEW7GQhmeFpvtwrkPBHK6pzWa4SV85mMu5Y1QC6Y2rTDaFU9LrLMiiUdpGHF34K3VQTeCeJAsB",
  "key3": "WCP5UcX5z9YXeTN3q4YHpGS1hUbkmnEzGGdChmQr9nxQaTPftkizZFeAUgFvEqznkzmwGsgEUzxkuEbj9PWrp4w",
  "key4": "2Q9m4rHgYzbPCQJeBjhz43mZq8WeTELmifcGuBTRqB9dppkiEEyr5gBQc5LWDYGS2H21XRceQQn1PMfFr5QubzTr",
  "key5": "5MnaYZoPTyRLdfjYGsAHfwQUUxtJHhhRfMcKYEzEhPtJPPhWN3zFYtc5pSxbBFt3WccizcBqymE3MWXAGD3osTtK",
  "key6": "2PqtWpZmjhcGeGFmp72BfDoNVaEUBnqYgDEyGXqe8AeSKyjCUN4MhQNoS3iH11YmnBYawGVbiFy4YxDeYQFXYXgX",
  "key7": "2XYBWxNHTXSELyEF8rGdpFLMyh8fys8bNLmTkitazPtQeJCs77D98JZyRJoNVG9WZc9M6okXFVxG9hmoW81bHi6K",
  "key8": "2JU4pwx7nEhYS27G2FxR4DhfaqQtZdtF52ok4B8ywTMNQv5Pd9Le5jYyorVvkn8mymkTQNjDcwFX5vyPLP2oQdEo",
  "key9": "LnNWrmyBiFCfSTXn3jr1BZGmWkfkJYZQvkBeM18KPo2AFymQ2qUeMJ81BifNQ6B4YnKmpXjNdEbwudgNkWQ5dLZ",
  "key10": "K6wFBzRQ14jNxpZNKTJ2WiCuSfMGm9CApG6m3RgyhQqLobZs2Rjqr74CNmCYDfVBQb7W4bAgkivAyEV9TEq8NhQ",
  "key11": "65TcsTrBKkhoSpGnYTtmxKQJ3KR5Qho5YgCr8nqrK78nPVtdv2m3erEkwLjzSysMaiFTe3h2serfQidG3EnvomKW",
  "key12": "9tZa8a3WEBMdLJaXSKgZbE1MceeqLz62KyRUFLFboupoes5SYjKrq5eifvT5Z8NFndWyaJvfapggDhHy3DbPzZ9",
  "key13": "Dg2F5HAPMsyr4QLs6iETnyGyiXf2yL1UXxA62DQq4ymaSeqnhL3D59V6UZkrF2JRqmvEXtLX6Hmhq7gCTd8nqNu",
  "key14": "34Qaewxej9Ge6cmJNBDWtCdPzxyRJvBZVWmKXidbvqw5k1GiJNV3U3b5jhfYroYEWanHNWdThSKLJ6scHktwsTzy",
  "key15": "5gMxRx8aX6quRSJw9YGAX8DSVcagzi9kjJYZHJbRfH7MiX6vATDQdXqv6R2QrHvZb3ZmeNiCKzHsUh7uadhGS19w",
  "key16": "58zb12Ha2xBsATeQotEBEQ4GwXCZk9NZ52ArgBKkgtxFpZSNPB4GUYHvfgQReCjrjk9uoL12bgPaWjm9CSoiyeXe",
  "key17": "3KzFdvGXdjVtTWrfv4PqEenMwNfpofHGzWHtFzk8tWdYWdhXJJ4NoEmAKwWnot471g3Zb4NoQnbGhBayHoGErQbX",
  "key18": "3tK8jCyBWZV4569Wpq6CB6GKRLfLkD2SPJ7LBFAJPuxPsdo3iAusZLA53KHfsDKaoQ7RtTB4Vey8EoNyaBHBnoiR",
  "key19": "3x9Vk4TFPjHgQE8giX5xb8M5rBqtN74K2ytvGgMum9SDeJBuYE6tm32T9sEcikYkGs48xnLt1kBdqb8SvAtYjeyu",
  "key20": "3igLynm5Z19awYuheqvSpaYBCMgZKFKetMN8kuR19yoMcecvewtZVNbTjuuxYakk735KFdGrhSxAm4uvuf5hpuRQ",
  "key21": "5m6442VKmh1fZg5WaRn6WByCz8e1FRqbevQjpa7Mqw1MLFV4LJX7dtqgNutVVaDFSiXphWPYWivBXoD4gf4aTDXX",
  "key22": "5VJPBhX2uP57jTp9NKBPSVbRHYmvmeSjemwuUANrW4VDu4S7h1xbwCg7fgHNLYwWn6RVpY8gbmBD6qNsKdnMYpXS",
  "key23": "YEpQFmWGeWqBnjquwGb6FT9jvA3ZM7HzqNLAejrY4zgTPcvFfToVVfkzVN8DoFxFo6QeMh22445DWTEdbztSeB8",
  "key24": "z77i8C8GTMqKp3tdWcBQBcniU28yNwc3it3if3SFHwGDC1GSqonhC7oQkxGtr2enqauYVdbh4cgXBAtWir8vVLg",
  "key25": "3UMBTgCPMNf3U1BkYcJWp1nApYYoYoRguDrTSuJ4RD6smXdRscYu7gWfe9QjCEm61FpwXrhpvasqPyGDLWtXigjv",
  "key26": "4mB4GNZNgWBHNQW3qG2wqMgQy5NT54Mw6ffDLs9zKWniy1D7QywLFKPZdV6eGSze7RFVhBL5fJtDYQXMLKDpfwMH",
  "key27": "44BX24YVqbjpaiZAd63NoVxru9N228TQ253VTRrRrgwurwHCCTySTnEy48e2wh2nqzwoRBX89aMjnGQPmFRsxvmz",
  "key28": "3LStasierTo52r1k3so4n44E71LfRrGhm71hght1qY4fe5X546tXsy1BozYzbDRb8ttJqfEP98J72h6bQpPXWeqw",
  "key29": "FNZVqPdYQWneeZAJFAgFz23kmzSgnXvvWFXkEG9fYfDnXmept5qp1qPaKNLPbh8g88iYUiDm77sMMQvzbEJnik7",
  "key30": "nqMnBRUQyKJCcG1APZNvhL8Ks5ZQv7MxTteMC9devj1tveKdzmBuRkKF1Z1CZbyX5qPjTTPV3a6LdwJNCCZjrz7",
  "key31": "5sTRXyUCrGKZf8r5DBX6aBecuAxjewTxrRHqJPSgjKdSEpDwRQs34fgY9KeKTqEgLEG2nYADgZPrb9kHDDSTf7ZQ",
  "key32": "3L79uijVwcMsipKb9TKoDpWFM7b4tVuho4XmUnCsf69wx5vHfhq36br6BcaeP9u7oPCBKssr5hnHJyCAaunUMYSa",
  "key33": "54xVhTRnArqT5rzdT8SKmMqZYXtGtikFixniQAixkr71nSuYsbm4QqGrUbCvU1h4v5uf7mQQfQx7TN7zZhyYLre",
  "key34": "5DXFedJx3Vu6N4KUWzALSqzJsQkcwycf8mgUAFGV6BrhVuEdqRpdkdKkMaGTGnM3YWnPhxew64BQJSonH5XYVLk5",
  "key35": "24ovN1nkrR8cUR8yohJqVTnBVL9Sty2mserqFPwLFA2CZDEQFTBMSabfpKEUrXAZrfrfaRmNgWhgqPnaUU4fJbej",
  "key36": "GjhpvUWnkzGn3M5HWSyictJfg9sqjS4XNCKTb2ei3W4yQur2GiKeSMAvuhejREPiEyD8tPWNouj5ohbGpDhuFE7",
  "key37": "3CHg16MHRHncxhV49v22qbprag2UZqrbVofGmELU4aLmenWhWQxLyW35PunyBzk2cVCT7q5JZnaFjaTFjnUmKH2w",
  "key38": "3HqkFzuuxdEqembtfoHnUCQP7WNHbyV3HETn85qyX3WvrH5EowfrpeZtiM4a3yiqKGDcCqaAUZboaEomx5Cx78ju",
  "key39": "4ErdpRAKFNHx4T2X7v74txN41fz9YiofaR3BP3RMRSmpeRqo7uS97Cabn3XTRqg9ZR1VqMAPtMTCxhAUKtvqtFwC",
  "key40": "5gV3f8ybBp2DcCRdR87AbCdp6iQ2uuq571e3qaz3bHy8nNXee4zpWWh9s4epsvgZeomgknxubneCN98TF26cHvZy",
  "key41": "4F7cWrrowetebTXH6h6vqQbj8fTRnNcikSAuVKHrP57fbEPYB3rtN1nynnewisqFQM2hidwvKPNDfWMc3aRw4iw6",
  "key42": "5ZXSDxamTnneEX14yNa1z8LZBBhJUoCfVVYyNwUiPh5wZ7QBaFro3n9LP3Upnq5BEmnoMXma7RHcC1Ehco6TkLKc",
  "key43": "4hdemrRMjx5ze5XYegxfpCuF2nawpkdEG8oXwBgekPKC2tP9wMyK2gHxLZ5ErqxXzrZaS8VsFxdMGFw8KsYoCNay"
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
