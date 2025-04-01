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
    "36BgetYazXvkyo6oKZ8yA3ia1fPk3XVsNTYrw58F5xBYVRiU58rXpy9LWaW5XDSoBZPDRZvvSaP2hNztvo3N4vtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45HMzJruVg7C2H6qrndq2aBtD38rX3M9xjyyS16fYaCcXSxzQLY8py54wtH9KNe7d96YYmTMtVcEby5rzKa7gc5x",
  "key1": "5PDehTK8tbdXJdhdMALStoZkTuZGzH1vMYN8L1JdnjLxznjjS9TjP8BQqRih5fLjadoiuXMVGznBwaiADWbzkBC5",
  "key2": "5bZMWCduTrThFgbE19rw7GR2wC373bZX3P1rC5EbuiYxBnDD3YiKuoErp7UHnay9VuzboXFsc7JDLJNopy8EFGkK",
  "key3": "2a1weZrkQznhWXaoqet31QA9F75zhLVjjQ9sK3PBF2Sx3VxDZjPHsaBb1b9U92MwoxJPZUuJzANZC3RHcXyo2aFj",
  "key4": "4RVjPZsjUWi3pgEsr3hdfpYsqe2wHDsAfrkmkfVfJRiQQoW9V8FEy8hegX8yc6fJGFHVihiz5Z9RUzNC5bkrpq19",
  "key5": "Z1FtWwsarUv158VD5Km7ihed5ryUMFZHUEjaoNRvYFRBuoUZpnHzuPoyoC1UVgFUG5DUxfhvVrNVvwLcSHQqkvF",
  "key6": "3Btrm7w2fRFYCvqi8A2o7Ay3MUq8VXKPkop2RHdTTQbCviELpgK6jsACgVAaq8pcqi9oAtCBvZFKYTmeJzW4h8bh",
  "key7": "4Knb64c9ASk4bHtJ6RRwbBG3fXvqehozv7FN2FGPnGMuurekDmH3Vvd3Xg2wvhYu6nsJNwCvR3LfF3UaaVMru7ib",
  "key8": "4jbUpfC942MKj9H2myzmgxuyqUjhdnzJQTvzPZMN4oy1qcTnFcnwNKBgou7dhWUFexiTLhTkHqKPZLyS82JvX29v",
  "key9": "4jEbes91DnLcAxFkAwSw8szWj74zbM8CAsJ4DwNy3EkuQTE5zcEmCEvoptoWXPmMYFEHivdByKf2PSdtWi5wb65o",
  "key10": "5WYpRJkbUY32aLEsG6RtPzBvHeDaK77zqYrRPvZoELZp8nu1bytfwT83xtUjhZ5riiR5w7W2kSvDQd7kSkyCMKFj",
  "key11": "5g4TFc6GqTqyiP3YnvJXeYBiAobdCKzE136xaX3KVpHxZaVcDFr4Ah4fmBbUyrfdajR63fmJeB7vuiEvMVXh1M6y",
  "key12": "Nu9dQdtgi8ECn9aiCYUzruhyLnkZCTsBXobLHdpqPhdDg12PjVTFDXmAbHwCbanLU3oRc1LavqcLnbsAYyitLsT",
  "key13": "2uMtHoYFCcALa2CsgGejvDYN3NP1ohRSuSPZYhkU5mPg94R6oRbSP8HY5K2ddS2ospr5MTEAzkf5szySQdBtqZjs",
  "key14": "yRdjriSEcJxtKNHVhdQxZmjzJPSzUhri5xkk1CZ4xGt52Kh5vd1imL5pesPBSUGmMNzR3oYV6mmN5vZ2NJHcjAX",
  "key15": "Am9XmdBCwXY5yoHuvuyQeohkW5rLf9zz3SxHzUZZQT1hD6yRrPZCDApJkuMKBYtehTQmAKpaSzQVpL7MHm6HWe6",
  "key16": "2dU2uQcqmdfpxVnFYY6g8A8hLKY99uWFwkgeH91xJbQA3K93MbUm1bcMESoHz4Y6uXVQn1BoT1NYGaCqiHsUsGzc",
  "key17": "5dCqrJhCVXBHbvjtqdUG8n5u84MLboG6eg1ScW1rE8Gq425rQtC8Aw7Updr4X3tFjoz1sDZMXGUmwu1XZY2zENaF",
  "key18": "2TtzdfJtTeRtFToqLrdBnat6vJRQ4Enza2tdPiHSHsmMo1KvBqFEzfVQasdZMqoJbryxEXdBjzMppd3BeuCAzcTQ",
  "key19": "A1rJ5zYCexTugEijqpCxbZHTEmJxYgj23RMjwmCbvPnkZixaJRUHeRTHUPM7KQgmYhWtt7Qezc2pPzxyZ1AY7hW",
  "key20": "TRZtu26T7fdRYxyihZcB9jiBvfqnxyd7SqAsKAB9fo6pKeRK35vRpmVxtDFSJ9eZXDjqzWRq2owxtpjwB4pVDmh",
  "key21": "23zxDxLd2ekaKgDfmNZw2pLroJ7SekYHSvFDCX7MRcMbLMG6m6HV9m6g3ZebHZmk4Eu7VvPb7SribvTfdNVicQVC",
  "key22": "2Jn2edEYnzduVgZsBBNqsXYan1GHqsvp2qc6iGpcWsenhDrjCHwBDRTv72MwcLoYzRuPFaKeJGzTAdePbtz9uPoL",
  "key23": "V9F2fzQX64A5eA1s39Dk7kaXXYMYQHc7KLWf8LBxjaSQzjSwqsks5pztSWVmSTbFdGbrgyHam9HUfLogJ41DyK9",
  "key24": "xJP4nMnZPkvFPrRv7b7gthweLvNKrFk5RH37bPc4qJF3F2xgmj9HY13vu4v2GWcBLPK1X64mfmAUeRFDGrtYL2K",
  "key25": "3WGyNqrBacUWNpGByMsJuopauKeqaLUP6W7mUyuLqWUJbQ1wwiy7P1EPa5D266wvyjWhmGeyNqZCPbX6zJbhe4h9",
  "key26": "2LcJFmVFPtceYG4XkGNgwh9nnHijaW4tEqod6xopSJgdVB248f7KEzbtXenugDgvVgKtkHY1tnMRCZgaVPcEw2VD",
  "key27": "3jgsbdwBPCobBugg44Sy26pDpXgNwX1RM2d1hdhf5DVYL3oiHx67LAGpsbkwucmi8Hi4Fb3ShEjoYrF5d33PJREy",
  "key28": "2JNqvXG47o45wzH2pr2rCK8MDXeByyg3dKABjdHr3TuehKZgCBeCT3EkA852oMBc9Vhyn72Po5ZNssnGSy1Pcpcg",
  "key29": "2CbiPAbSnDggPusgMAzFKEGpBVVWrYXasKbJa1FjRSd81SEzgaV7DZwcdaxnuKRufSQDEe1uqjQDAqjzx9oZhgaA",
  "key30": "25G2u5s9D1Ym4hw9sYpc66rHerjAoTe45GhyrayW1jTMGghB6uQ3RX6iBzUXDKDt4QrUzuWGdJ4Z1fYnWLZMv3H2",
  "key31": "cX8VpcfJVmiHt53XsHTXuo3Qet96bj1K6BgwohHvCJT6UUeKW5UYhTGY4cqoFWxGzUEaX2hYmN1emD8f9dBaRQd",
  "key32": "3Cw1WjwidWfZADtBNnohw1M3RtFYyk56z4YKDT2SU6vsDb3gbq3VCRwuJQ1rZfADGf35dePHrc6ezCay6MSnoS8Q",
  "key33": "3qigUBw3A9r6iEUD29HDT4g2EWVkQjddDBfCpLvquzjBTywtCjeTtpZtoBCFYqcxneMY3FGr9n4qCg6MJuUZzkGk",
  "key34": "2Zvv456PQMFZNznxRPvvTF6sAYSAUybrHakoDBtQK5uG43tz8JQ8D2EhqawQqaHfidnEaQ3giGs3bksrh1gsj3P3",
  "key35": "4odQp3nQdzEt8VzSkobzA5vHkX5nmP7NXxwuzY1xe3MRpEZcqY7mrxG78M46sMWrhUvUcHESh28sxnzr772hy2PD",
  "key36": "2kTFU3Kif2Yz78VHZPNeQHPz9HiB81rQWTGPYmZLUo5wwc225DNr96ShzmmVrFEbqNnFJCQrqdTVLFhdcTqcxwjH"
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
