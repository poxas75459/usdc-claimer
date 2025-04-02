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
    "464mLSkxqzamyCX7sc6K8JWfyvnU5NNSMpPvdz9zaomRvB1Qxkcm5bnNpYwD9Pd6sD4fHzDRnCWtcFnFxs8sJTAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LwmkdDC64Bzkf1wMJYStZxSZvBRYx2ktQA42dpGjUdxH2sVekVijZET1pJh9WapyD8cVuhm5CDBz5ftfijATfzf",
  "key1": "36QVgDp67cA4ZztZyWTKve8Ej1Ma1RRqo9J7d2F1wWJHfrhergBC3qGJfVAmsKqbpm2yZDhxK99vJ67JCMN1E6Y5",
  "key2": "GLDNKovCVH4qsLJKhqwhUubEPTDPkATERinhnzzDYWKuc1TLHaDK33vN11B4UpprdL9f6ihDBmYFtqjtuDZ56Yp",
  "key3": "pMD3NfJyMuiQ81XDGEZQ3gE5KYRzVZQMUx8vwwykQYokRC7CHEan3LMRuubkw4VT7VGUn3NLBBTyzQaoNMFXjcx",
  "key4": "Qi9gANqpnksLdrFasmUFzipLzeojihXubZcZG71XayLkZoWLWZWbHMwPEcgavdeLqo1s88mQXvDXAsSZTS7gAKn",
  "key5": "Hdnz6DjiZJEEX9JD8TUBYHULhLjEH9qZrXv6fXcvALqovc8EZCHstwK6nPLbiQtsDthRwwvkk9gtJKVtEjDkWWU",
  "key6": "5hinrnSLTrGyPi47g8LsU7uVwfezjtPMzELzTHJuRmbwUNLk5qD1jsgFKUFJyx8Trd1oU3nk7i875DQ9JhACEJVY",
  "key7": "5yLu9WoosekgLwTTRf7ouKRtimx2BbyBz2kEPS6PubMCszpxHKUFES9Ctxk8GVfPmnb9KYwLrq8eUABTBHD8bei4",
  "key8": "3PausxXDxWfzCDeCvpVZgx9rDcoBdJxLHZrPrStUmHYxXuxCHnugz3AEDEXnJk2jSKxnVZz7nJkY7xSyv21bimVU",
  "key9": "2YzucQeQH3NpFDiiwNiVjwsciytjPaHiuVb3qzD9nv46QFCn54M4TG7K1vT78UAGPLcaE9j3qUPQYYYJeq97ZSuz",
  "key10": "2KMQZnj8eTKLvUFiEwmoZTwJXwLutfBkVLkZdScq2rLBFTj62mAbXKeBuG3yWyjjpkxDicvKpbj8s8bXms9dquDV",
  "key11": "3P8ePtqmyr813bFc4or9gmUVnnAWSuEgpJWS45B7i1wwW29wbxiGAFsnPow4qVZiw6YgvYZ5t9AssXhuL3JG3AEW",
  "key12": "2QfQxzyVzWMZHtG7QYpv9AkBpvtdahLm4d3ZZUTjgyDqfDBdzHMaJajPs8mxsxrwZmuE6oVPLQo1E3BioN2yr3TS",
  "key13": "4uy7JSW9qLQ3C6122R6Ra931knyLU4nKMAcgMCt85faEM7D2Xskqbx64UTAtVwEiensADJRGQUHpanuejJuUsX9V",
  "key14": "gmAEGWcF7RBJCPTEVve3ZfWpG6upRifD7w8SeJDTrLjWrn5M6Hsysf3r71ZVt9L2dMFhHUAuJLN5gCtrjEA8rik",
  "key15": "3qhvGChjtBLafJMK9q6TXjg1dk7zN6B3oTUmABVhMa9uEUF1U5oohj26unEPTWc6ALMc7sBKEcqDp5usSW2PYQKJ",
  "key16": "2pJ96UJDut1vWx5mUNHCJ87WdJjrLNUWF9cPQigFehg1ZoLKNxyzThkM6TLW2Vac1koaEjAVCFM9bU3bR4yQySiF",
  "key17": "38MWYmHrE9tCFmU8hp7u5BaGWSkcxBTnVbajVWj6BSTRA2B6dAzrxFP7WGxDQB7Dwu7Luv5N48KTd8ykRk86sAgw",
  "key18": "4VH4jr1KdZbYogHqgYf8QedivnfxoT4ZMGckxtKYgeBzVzg5xhCHCNe4Z4fGdynzTVUkKYhcZcsKP7QSQT4USXS4",
  "key19": "5YNkiP4JP7xqSorbeZNBVkBf6nNk2KPE1fYDv9wJDKfmvFGaCrz4N6fTTXM1LqmXPNnaf2w16vth3dECyYAPESA7",
  "key20": "2TYp2tG24SZMhhobNszkcZoutwWd17WW4zrPDsM3xdpcm685ZtmAqdykhM8EgU437xxgXeEoyEg6Gt3JtMywwTXt",
  "key21": "3hfantmRmLkp6ceAv6apq5sqQrfwcF1TUMsG6wsTe7YbwLMsyGqD655mdkNiWoab4E3TujMMG7R3QAnWU29MmVNR",
  "key22": "4rFdwvHM4GvPB9NvsMzwd9DqEnfxqKuh9wy5fUXMmygLtjusqj8VVwy1iH2PdzaS7efHuGWmsJBxVBo8kpyTASdt",
  "key23": "3u9YQZ2dBvRJAz7vMc36vDc2zZAhrcehBVoyH161ToAw4JjX2bp6YFsSepexypiTxye1pTwf4xArVwSnyD7mBi5B",
  "key24": "4U1DtAqzcFxVR6GjZyuLJDwfrH9AyTFzpejiGQcjDjpd3zFwySpQBcc6NNpChjfkn1v2cQkvcxsCHu647Yj8VsPx",
  "key25": "3ZBh3B4SoXoCjkB2zKA4Y7upxE6aEs5AhVitm8HCHSJEvqzbiWbdTyDnCv96mkjJWTxzUrzL92a1AcW2esPKVj6D",
  "key26": "48mEjNsmPKSwpM7Kgvc1Np2o6mdpNX2oF7PmWowJDBuoXzMAVC6zCeS7mTMXDgAt38583mW4ko2VW6Jkgv4dwPQy",
  "key27": "2zJ7UPvA7TKv33uXNfZ9Yej7iv8jirT6ZiAwgLDgttCTejfCYEzP28MtRCwfeF9CgkpmhihZizm6WaUvY4PfeLMH",
  "key28": "3a78NVsq6uVQfAhgE1oeTwzzgBZTdDMk5fSSNRrxGoRoALqDxA6hM6TcgYvZCHmABxxWv2sMRB854vz8zxMWKGPR",
  "key29": "2R8YKqeCxX9dV4yWjSmEdtSa2Sdx6PeCS5LhTNMgNiecGvdF7J2RPVJJKHwjpsZZaTk7akaen1wk8fkGq19mMW92",
  "key30": "3MUDqGx7TnDjEg91jR8WaH83nmZyGnG8rfMvnf59BGLrtNPnJhR79X22kkxdvjjRDekkdhEYpqHSF8jbUSJisSQC",
  "key31": "34Jsa23zQxmKYFvBZJwbTjDTY7GmvvU6y3zUKPxdnqpQJeqeo4ZTVwMwap4rZPGJSzsW1hwMEcQiwQaW1jYzCYxN",
  "key32": "5dSn4uUdaR3JcFRG5VNRbn2qz3h3k48mZH4iKoVp7NFDNczgAVLofL53apqG3DDk167rYkrYrXXTbvyHDe5G7Nk4",
  "key33": "66ThjrXzfwPKgqtbC35pzxHCtCoEYNYzGJE24N1p2t2pSzG2bUuhqEY8u15nQr2yo31obDRx5CfQZCnd9qreW2Fb"
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
