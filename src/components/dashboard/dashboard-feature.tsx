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
    "3NQam5h7iVqHtistTPN63qJoNgvgLhcN5s6rbuaWtdjuZZwDmb9uUAbH9nJsiNR1QVNHmngaaYAzggQDSLS8fbut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCh4kbWnyTBA9DjPiiexTmi9X7yjk5YkXjKLrh9WsbF1ogZPBCDz2SwBdBnGcSs4Xp6jE56VjyxuUzxNNyZarBi",
  "key1": "4czfFMP8t6Gcs87TLTDeXat9ptP1x1C1jUSo5uYre5FQBy1ThBn8McHFRa2HoMxeYn4DtsVZ56cmNzKKS6L9fXaZ",
  "key2": "2uRq5YeNWx75w7UjYj8xaSD3jin54ccRb9hvcn9U62ibPzMjAdcwrkFnHqyfwDfeNNKJmChfG98FW4C6coJXNVvo",
  "key3": "5qmkrPh25RjN18bvytcnXAW1zJdFGdo3ErosVoE9547bpYZy7UWJrijV5BfugfGx33yVYfAr8sajHuxMnkhqdrtg",
  "key4": "Q6nfP13gXD8WZXxwXRnHSBxDcv3op1Z6xjf2ugQ5fSsCuWSY4XpDjE4dMey1FgkwzmSUYD1ofNH11vYEVbyLvR1",
  "key5": "5KJ4u4W9GuxL8rxZ7hNNxiSpRpu5h2Ugz1ABsnTNHa6bPhwLpVNXY8bmoCPhuzwgsiGMifRbJsiPq66a6YDnnQXk",
  "key6": "2eWKkzh39oGrxCGsFjnrWGYZJ9vmoQAgikgcVWGERkKN6EnDYYhhwemb9895KGKkoAXBJa4JnhHazTpFzWPBdRQJ",
  "key7": "2jHxCCBsMgSrMbR5GCz2NTwVuzoqzscXDdownrGHXKyZ4USosjD6J2WzE3jUYySpFAUbvxFvz4ntaVvcrQiWwCH3",
  "key8": "3qN3w9vrJr5t5jWKmVZEPon8sbEc2GsMsGrMrxEj5kiXf9k4gni7kT8onxnrBijowPNXHKRbPy8fBNdzP3G8YAmq",
  "key9": "5Yy7nNAvpdb3PPpLyyqBzw9ad7gZxL7zaxPe1pgDfhCoMQiKozMejwhJp4FY5kfGXa7K4nvw7pL99am6Wms8ZSPW",
  "key10": "4fy1S1SwWD9NMj4Nt4EPtLUpzVH325cumnh4bSkwP2cb7omik77KEY6AqD8UDNr9Se7ydxtKwN3UsCvAnQ4kmNce",
  "key11": "4J8BJTR4LXDUg6NyoQETGaphNmXa3g7GWoHpTDnSZzNVCCZTWvc2YtVEStws4yuemBJhpEPmjMJdPf59s5mVgumg",
  "key12": "4U87LWyGW1K28pXKTRJijKsveMjTdj99bzzpoeEQy5oaGD3bs358VSwb5k2BCJuVexaBY9GbmAQMNNXRzyg2hasc",
  "key13": "RsUeFKNP4Jq4bzQi1XKzEoAyZ7B2ZRxzDajdew674GWij2Dn33FW1d6CHAThppkqnGaobJTzmhqppqWDLcAPdAM",
  "key14": "3DdnkBL3qnsQkLns5EXmkeKmZbTvTRfqQV1C6AvJ3mf6g9iq9rcNpG8p2RtVYYB7taebfiNMLsTBi3SWpZWTwzF7",
  "key15": "d5hgj8FtW1jJKme7kA1Az8cgEuscCDVkf8WBMc2G1uZgsGGxKGJjFnXnqFbi91af2TPG9R6qw28AtRXHWZeqNt3",
  "key16": "4utyY4j8fXPoAZdeRTG17pnXhdf1EVVSuKmoVbGLdMdBi5bZJjNfr4gaaAQV3FJTb8egt6gQqRCVczeMXU4bhHnR",
  "key17": "2CNQgHYf2X77Q63muqJbBNQNAAF87rwgGVfi9Wyr7qgCCMMifMexxRDwMmnJPpfKjsWhqRjb4kNTG8R3X28FEKc4",
  "key18": "4FYJjS14mBDGjfFSbF5MPG3fRCsjf8pbJCwJKW8ViMjFCPq8TRjeX5by3aRddteXbyud4wStfFMgQd5UDNYMRJ1X",
  "key19": "3VZtUyPp71ta3uGKkNscA8FjFj3nGozTCqGDVYsdtipDumsUbE92c3vKvYHyTBtNeoX3Xfqyv7SyafSffMfU7C9e",
  "key20": "39zm7mhtdiJ53tGmDqBbHCupYt7wqSstu33iSsinsX475weXZyF5JhRK5zXw3x5799MiV6E2EdvEJVk4nv4EKYQw",
  "key21": "4LP5JjFSTCpH5VanfQPZaWdwm1xWuMQB9wsD1CkLK2wfDARa8bBSr7g8bTkXRPwusRqtBgxcqJMwY2EjrQgYrBE1",
  "key22": "2JyCz2JD55SysMzQ8cL5d4wCtQDi1SrCEtodb2pHL4cn4oueU5tZXZxSCEGxWqxizrkxiwYUkQSMzqyaGjtEPh2v",
  "key23": "3qYMY5ZnJ8KojRSMhNHNeznPwoWmy8wkJYzYCT8yKcwzyEVcFMGsFaC1zr1YuBgqUh6eSkzUbHe4uz5XPjhLw3g3",
  "key24": "4tLNvjr8myeZiMCAqTBWS2XZmq35UDu2DqWVe3R24UMjYAuFiM45P2B8uB5uNnijRS7uEmhysvamcTUXpq6nM8Lj",
  "key25": "WTRXLT4pahRHQj8tQzAs4tSTmitxGihQSnHErGLAQY5qEcmiqq4ZSFXkXKZktG77GreRtpFpSPGoSfxWh5ET8An",
  "key26": "5WS8D7YtFh8KqtL1W4xrNmEd5Y7VX5scKBfHYaGwiBe49m99Tjivhehy5ZRZSWzNU6wofxu2ZtP4pDgzc8Y8QxPJ",
  "key27": "22mkTGA1DNgcNKk5VETCwWvQAfyc9d2r9Dxwwn9exaDB61c8BnmDonCXLcWUYxHkBKiQWkZR7NxcGkrV3t8RktQX",
  "key28": "4G8PNmnVeC2mekf9X8rzLNQprjfHWcHVx1Z3bv4ycfE3op95zLJsy2UH92hrBWMwUJrEmyMSgJN13tEJgqu2GH7G",
  "key29": "3YxsyLjaD8HEqtk5J3kpumBnpEyzijGGyLq4qHrmEXXLK51nT5p6zy4ziAnK9tKrHF8K65QjbsuTsZe5AX55PJF7",
  "key30": "ttNFEtoAnHtiHziCfPo31cmo9dmxarcxpZHxVehTFyy2eQDQvtyREpcbmEv5AZQ8FvHJPsVzaW4jQdwBw3cY8w2",
  "key31": "5d16m2hfpJQdYD4osrokgQ2v8JjqhUPmbocH1Fggf9raGtDDTqmxSJ4VyLyB6kwGcJv1Ln8AfsYQY5T2L14x1CzS",
  "key32": "2SUgqDsELj18yS7oDRZrAbE5iUax8GLEDV2MaMN4HduF8fnei7ZoHWQFFHho4KUnjxjDkkU1tKn497hrjbmLXLio",
  "key33": "Tek1kQeXajJJ9c3zMdowySKsdB5nJCVQ9a9h55FojzBpuXbu9f9vppWPHdUAdDeahJAAJ2CzsAMptyAViVksQeH",
  "key34": "36sCcyCqXjmmXrUmPvABPH1wnk4dGkwA6UUcn7dHRHfgcWnTBfh1DqdMXEeaEW4pfA7HyG8go81DFN4tZzadyfgm",
  "key35": "PzBC5r5J5Bgk4u8H2LTvPr9KfL3CFRTVNbQvB931tDak8fGm5aJQtBDyeYCajXc3VyyUGifCYRSwXWTrybPhVdb",
  "key36": "46x37gChd5n9GcRs3CQnHonqZRv3Y2qbrBL1AJQtNqv2qetfV3WhawE3tBFxqKGxkYzYx1TGEuGyXWvkU6Hi5vjY",
  "key37": "4wiDguvKaYr5bSpnvVccSjz9yNbNYXtuf8xdQWuznGLDTmekBYE5mMN59xfTJ5NP6AVRg8aZx9CbUQDbqNrGyB9w",
  "key38": "3CPr3Yjpj73WQtiXGCRXoqV4CwqNC3CKPujB5GPzKTeNLVPNsnhv3khTxT7Ti8iweLhqs7ggNtYr6Hg7FGuxZXV6",
  "key39": "55sKWnGBujhGBNeqEWSxZr12JK2AX5S2ypXZK8fCfcieoT6QqwYu6WQqp9KnbKFwP9E44namGnH3bPtGLBtbB2a6",
  "key40": "4sqFsR3L2JmfAogmeYKx2RQ7f8G2A7B6TV3Yt8cc1e7UL4PtDSW4w6As9gFEXN6thzdR96TtFRzFGsYDcLfPdoFD",
  "key41": "3NgbQFuX18V8BG7fhoEpHWo9M8hhYpkfzaHUQ9oqqxhZv8DQvbaiXRe4UZ3JNCNZv6T1FKQgkQvtBgL8U1i86Qdb",
  "key42": "5pTbgUYMZ76bTYvW5gyX16MkDNHryzpqS5uWYYHPdoKsRUsrLx3hyhf9Cj3mJSnd195dZ4qEanADaV8nSY5hCvJ9",
  "key43": "wRfk3yxJH8gMLmkJSFiDudiUM3Tdh363o7wFMWXHe9CYLWokjYtJMFrCEU9jr3CaEEsjyJpFdFKXALifyTG7AME",
  "key44": "3HGFU2sQGRpihJakc4PR2Bc6czX9dYPJPJQX139u8DigMxxM8xCPcXoXqb5ySWH5CiPa6mCEcFrauNKqPBMaiY3p",
  "key45": "2W1JxhjKAUry2tqSKro9VwsKc4PaQdbwyYd3APYTWwgaWm7Hxpq3oKhGzqpg3kJvLZETasEqWGrBoDM2tw9ByXHx",
  "key46": "mGWZ1DVbmAxd9QFCXi4Jy25GvLfCz8wR2mb85XwGfG1RvfJYhHsvannn3meKmRQp7ZDmo6Rq7WJQ2frjC3zTESU",
  "key47": "CKV4PqnhBzf5uGmZwu8jHyQsiec3FPo2k7RvChRKUVagTsMPfkRwCYPVyCsNot8QU2QfjkB5z4hhrLxGz1ArZvb",
  "key48": "4hu41YghHTvYi13qXJeYGsepZuzCZaTzFz2vWTU89aZDTu9qEshvrmxBUdb8ekhqWF19wZkXKqSrTdMyKWYaD3mh"
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
