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
    "4djYs1fZxFT811vMFobZzGHqctBiyjY4ViBC3SP5TtXa25sNP5R6JMEg8eMZQb2NqiZGXbp2UAz2ahoE9voCRqEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QncTgYtkA5sfQj98pLkf4g3uPunFUVD9GjggEtSa6yeHAgWQKpbEC3rafSUnUT6mAiYxMudMAn14kZ5Ub8XpEvg",
  "key1": "2jsbAq1AGuZ1bYS3rFgS81L4yp4tBVKKC2PV77vHnnFjTa8T7Ntpj31BezB8JQVqo6yoRVS49HmPzmTxXm9xzDxe",
  "key2": "65E2HAV2vdrS4YKnV3HhLNGRsAkjgsaTeBsqxBuB5wDkHXPKwAm2SrqZzGJRFHo1AbnXQfxB4uHJk6qAbih9yrXu",
  "key3": "4ucYfk87Y8ubM6VjeJSfFrHxtEhz4txuwgscdhvM1WPxbuqp584hCmRGxj1V2kC8eWSu5SVYXy8cwgcDYjn6AxDP",
  "key4": "5DMwFGArpgv5m7WswzvcoSr6y5gEwdVt3ukVu8k7X1P8ontVAxBXamqb8w1F2c2Cww3wycuCGJPT8hddR3qUE4sb",
  "key5": "3vy7Sk7JrLQfeqRHRc45Rm8tDdJn6fsUPYje6U9fDwySPJougC2xi6ujuckRAbk92ro68o1o2Z1jTS5jQzd2GyZv",
  "key6": "5fjHc2mvmv6GkKKhipG1sizL9ydh4ycG4DB16E8GP9rShkkg7Xt4EWXpAJoB784LJALqgJUSBbk1aTEzeAo5fH1m",
  "key7": "mATVHJvyndSkMSEs5GF6GeveiamYfgQVP3UtAF3QctASrB45gYAzqMBW3ye4WC8TX477yBo6fneXexpN1Bz5jLy",
  "key8": "APYnrUhWMksSurMGKnJCok1WrFC89u8cHuYzbgR7YSmiQcVRn9DRmTZbv1c2mwTwo5vkTrcmLiqEJwW2wbx7aBX",
  "key9": "M77jWpTQdTXg42s4W4YQbnaZuuaX1C3YUMCF4oHczBxp39rVgW91czU2Jv2uKhEbCEjyVobN4znyBp11bmPNAC3",
  "key10": "4faVZiNakGKT82aMYvba85wwc9gt71qfeMn7YTt7qJ34noEvpRD9F1aGNh5SiMW5rWgJUSTNfdGVPdAFn7pz37tp",
  "key11": "4KKaRMT11a5ruYU18fbVdagQktaTumxy2Av8Lyb5F1Gx2apPAFDTYMeW1sRYiN3UAe54RrYYaFog8ZNCkQ8ZbXXT",
  "key12": "4WqZsZbfdH5MmboQvv6b5nmWm8dj12tC3tvaZd5gDMuNSBs3NX1rRJn28wkn6fpprHbjSpspq3A2mjXUfkQkN5d7",
  "key13": "5rkWRw2jDtykggqvzCbfPWY2yYLc6DKZ6uSqYd1fAN5Zi3zt4Bjpu2vQmD4qnjFM9sm9QfHjMyiZfdEvcwtHT9Zr",
  "key14": "vSQxuUyfrPUc6wHWj3r5eH1vVJK1eoivstfciqjKEYfZmu44pqfdcMfxaz3zL6x1WS6gqZRLaCqMHjHXh58zXef",
  "key15": "DeueTf1FstGZ5168HFuk1CTQsMgZNHQVoXbKBnh8sgWKSGRgoyzBpDeJMN5meWNJoBitBEd3zQKy6qkZNw5NEzP",
  "key16": "2BcVqxKCboZwBRNV2jwGmFx231GZZ1zowgGFLUszohREWthkD1w45zRnh7Bebw6jvQRc3GgFo1kVdw1sHM6mPcYF",
  "key17": "29tZhXFkBukKpnprbaGYjc7mpAJA4FnjaFoHhrSvqpGFprFdqoTrM6vy66CW824eTsJcVrNVEphV85i72peFZNN5",
  "key18": "2UyBXnt3U1mFtrfFuK7R8NNUmJN5TZgCUJxCy1qRpQSBRkJPgBhevN7q7f6YJD3ZZ3UyvHjKbecHPgzWFVJQfcPJ",
  "key19": "2gLEFZCRE3EM11B1Ftonk8uggGQRVQ63NvdCJSdUqyS1xS4M1ASnfUkApCP5Mf8bitijmiNZdv8LUgZqzmjEH1FS",
  "key20": "2eZMmP571MamsoHJefzTjvFexQekSReQSL5L2z2fCHi2k8yRkjHnrWuv1rad6gsrySrhTvAgrRo7SSyodTR7rynn",
  "key21": "EC4Ni3TXuam4JprczinKAWXkm3wEAfobVdXkMGqvzRSenurrpUumoiMbS83CcrdwVHceMzxpHyJ8WDRieLcJ6dT",
  "key22": "4BBvmkcrMK41YAZcyStS3s4gWWoGNbmh2hU2FLXjbqYgjNy8Bc5qZbhCXNbqwaAavLNmqYMY158MCmwtY361pDQw",
  "key23": "2Q794FMerMgNVhtFn4AoyTa7c5wgGBJRQaGaiQ1YKLs7Lcu7RbejeshtErpCxyPvuKB2LaW33jXQvHopUhtBkQsr",
  "key24": "8y6sLpADQcQUeocwDwWBfoPNjkHEC45JVVuXQTsKBZBho7HPrSiHn8xPA7KpswYcyKKPgkKB29UScYhRq9BSAAv",
  "key25": "aKJx5C5HKrhuCu118kw4CSkqmWRpZ6ZJXY4va7NZW7jsZctSm3VJoHcFYrPGFX922P3586iuLEUG98GN8pA5TGu",
  "key26": "2dYXPkDxwDHSYZB93VNHpJktkWjKWascxW1qDJLgfWGf6vBiWSNLPNndsYYG43WGBsd472LY6c9VqMUTWsuSmkUJ",
  "key27": "3rvfyZKNLLVqUkYkPHsdcVgumJWvtrd3L3hcGaeHCNECSsbFYVjq5d8eWUgDPCgprGYLLXBZiorpyHyT6RHULJnV",
  "key28": "2EPmdnvToWgd2LptV7NqaA3UnnpJQTvQePDVpdqRRaPSTvyYkqMXftWWkRgjUBvSBy1K9JEZkMn8AHyaAueuFMaK",
  "key29": "BFRB5n8fT7eKF7yLQCTDTzFGv98Nn3YEPKaDV7JXRJAMzREk9ohtjVay7qbKbev5kQfhdu2f2j8ME2HQvPSbLE5",
  "key30": "59bVqn3tWCNrRvvFuDpKkXAc3JQBaFqDwGsNeNP9ACPCB8W3evSxp2szytrwdTGZJP1ZpgnxQpfBXT6pNFBMjBJ2",
  "key31": "2bZV27tVihp9ogHVgoiR3UwRx6DuLzzVuKYteQRRs8QY7NXzPsVz8NbSo1f4WgFtMD7vG6F28eaom9EQijWNUe8P",
  "key32": "4jnHtxY61GjRyGMAKnyQbULSrsBY2oEbdJ2zZU68ec1PBLcbGQr68UYD4sSzZoLoHJctNvyZCpPi4NJtDcN4yrkn",
  "key33": "3ssxWe9QTi9Ym3XyMkuRFF42gKYgdo5WoN6B3WTPr9pa83RiFpXDByUQttCnJ5WHa8F5GDagc5PWes1H1MRRuYuJ"
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
