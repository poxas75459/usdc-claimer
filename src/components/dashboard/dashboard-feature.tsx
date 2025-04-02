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
    "4i7uUttQZVXgZ3H85bZUg4EusANLE3QaQFFXQ4Bk5yhBQ53ZJDTaTVkoAUNFq5MYmyk4tQM8MdHy3ZBP44Coyfir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UGvxan9dB9iWgrbnEdVvKNmWofKmESJiqMA5eNbY2XhViK5pNod5nc7Qyv4Ejvxpu2Na9Ny9sF5KsEwNBEuzro",
  "key1": "2sPaQ6vvvZUATct9QFj3daC1CZs1nCTmi5Bty98mZn5kUt9v8eYVyxL177EErSi5V7Zqqmc4FJRDeJ3wpb6pxJoD",
  "key2": "uueUsKeGipDVjgLCHmoNsWskXcF6WKuFwxnNiEjf66YVurj7xKco7Wo7PfcRhbTMh9uURjwUFMmn3jJuDnFqZgJ",
  "key3": "5G5iriY8QviV2iYBHz4PEQK8PqKaED89aNk6mnr5YCcYnbFQv5546bRSwhN9ooQCadaccpSmKtm9WFWuDxBxontb",
  "key4": "3vu3znAMFFj4gsLShPZvB95R3gMgGWNQA7kuptD5ygvxRaEiZCge6x1aptY8moX3shJPJqv416hLKo6S2AgKtxg9",
  "key5": "tmqBbVMH4AeFvmjtYCEt8BvjYn9DQ4qTmxgCE1XXX8a6a2nFxCnGadu5X6p3Ka3tPxTq7oLNY7NdhFNeEkqyPft",
  "key6": "3vgTx2BRbG5u9oVT7yyt6D42so4LPPXx1H5khB65cYxk96zDhNiQBKacokch5yXjSbmTHQvhZbEHS54s7W3x2ppc",
  "key7": "46pVbK4tMUngtAaCAUsEGZrfn6xhCXX9uVN6ioosauv8zG1jtxCsBAjG2k5Nz9nxaxLS2M9UWSWT6ZrjEMHZRkkE",
  "key8": "27n4rfZhwqnPQDupU6RXiBWpAkGZK5tcV82heasMNpHT8FtE8Y8NLKW9da9BUX9U1SJVRDoCEySafiYC855SpGFW",
  "key9": "2TpZ8vpN8oVJW7KsUsKWPxawr1CJpcAdNDN2iQPXYLuWGx41tG76xuEkXvEvZ6YKA9kkWqTmeLM2v2WiHuNGMNqt",
  "key10": "59XoJip3uXSDVibUczJktEBqoQsnnE4d2XCQeWydx5MmnpP2dc5ELkJoDVwPbsyxTfaHV9ZMo21wksxgJqnBJKDi",
  "key11": "566rFQzWvoRz6VrgLdcoiaKDVot7ooD3YQGgwaavYEzzxwvwwFQk9RCFJJeqgtobYuVHHoevtyVyTK9B1MqKV5n4",
  "key12": "3bbdfwgqs6jPqLVgY61oFjf7NKUxrEpWsDDmM3PFts4CFcvURZ386CRsgfQChPoNCXfXCFDUBRAp4bbCHiR9Ty9R",
  "key13": "61r18rwAm3J5zEt8AkdonakfHfPVRKAbWSQWNY9xKQz4xfZsR3wKHvHXs4AoMdTvHnrMcTt8YWXhGRwmbwTass9K",
  "key14": "iSLzDdtRFeXJdUsEvx45rYammPoWLcdXuLvgK6iXCWfcBhfWwRRn9jAmUUzgECdKTGPn2VwRYbMbneX3UXFchVt",
  "key15": "2jxxqnEAjZCTyVA1b3XNbYdYh7Gg6ff63McoCdVV7LVRm2dHjZyRv6jrkNjUdzAggoigF5EWhPuJX9aLAv1PP6So",
  "key16": "4e47d4YfK9KVUD9T4i97a9kXHwhjNNa2EJk1QPRKH6149ANMExnmCfswdkooRPfbd3npQvdxMkCZkMnRZdcK2vE",
  "key17": "NYertDBNC6McGcdWuBDGXKGBYMVnP8sjVRbDKNvu6ubhCtKNvCJSEY4psf61GwLSZfMYFB5wqy9ZxkKZDNVMwfo",
  "key18": "2R4DVhd2ojMrExGkJAh7zX1owUMTS1LBPQNr4UGH85gaZembSqvQu2DEJymuTajeaNQtWaHLrZukTMbEUJKouBjp",
  "key19": "52LWxrjRULw3dwdYfWDJkxhfULfJ46eAXUonbNrpSiqCcUzxkomwvj9g4KXTHZao9cCnvSw53LTqWiP4mgQsaBf6",
  "key20": "4QjjYaWMh45KVndK42APGFcrVzy1YwRTPJeWvG6GsFCY2xZa5rkYtKskTpQTMgKh9FUrXs7ymSPGJE2BErTuYo13",
  "key21": "4MYrWyc6ivfD9vjyFd7uyPt9gGnBPCoSaiofeGaq5Gwpm1H5y1Y7jTvS9SpurSbB372Gr9vs4Je1QZECij5pgRJz",
  "key22": "KDENWCZDUATnrHTj9t59cKKnmvHHGEsm9Z14d6StsJoSSQSSLPeSjSd4pxTAXkpNvuh7B6uicMrzDxhFkVdMAc6",
  "key23": "5fwEPFccg7tXT3oEp1K26ztQ9jbmZJVhBD3wDiHCnpS7qBUxXCMohDvLmkWesU3SwfbeUE6wxDLkn41wNWRbse2D",
  "key24": "SVyPeFzamiqEB6C7ztet55zxuBhqr1hPGhcFpdZ6JYzsiokKEwoXQApXQWnMwajqVqAdGwKyaNnEgQHHpwa6Dzs",
  "key25": "V7MG7YGXuQt1dUAmiXxF79GKV7k9czQfw1XqHvxBTrAjhhFMxQTT3vc7vLQt5eBGUUd4BzV6v2vi6aGkZGPVLLP",
  "key26": "3tHY5Eqb8KkcPecVjaSW4iA5WwEke1KyAwxRvajpB73k8m9P4ByiRwhv8AuHZZGxTG5qi85gF9cjKyqW6sdd17tc",
  "key27": "3fWh7iHxbanSUwzZvyXgse1E68KhYBJ2g48E1vPgRhXKoasB6aZcGC6JRQT2YFQTDb4mHEabXrBAYG1mJsLSfZUY",
  "key28": "3R8PEdCTwrumgaGRUk6bqBVAPeSyXivoXa5PfZgrE74i8r7qcAtTA37yKuKJY7qHsmuDWLjQPnmnB4SCnNyvxHQv",
  "key29": "2DEV1ehrbRtpaGhYcpWR8PGtsU93jRGrwEm1aLsvNRiTE97b7JkH62zmNFTMUgBDV6QAPaVd5Gv3ezrLoT3tsx7g",
  "key30": "W6P9R46WJZqNro9EEKVjgn6J5fkDMcnYH6N2UfjmMVH4fuSEr4Lef9sZVd5VZNgkfvpNv7NFceK9KhCGorqLwXw",
  "key31": "3iXzJR6tGaC8vrD53pgrydpKmKFuKngf4yzhb586uSRwx1Yh7CZXLperrXsPZuxtU8kyEN2cX7SsDv5JzqruhZgV",
  "key32": "5HYayhy5h4YMNsEW7DmqCnnE6nrWdwjuG45bG5xDJu7jewsWyM6Fge15ckY37UWpaonNYyLyKCghgPnfsJ3FPsUa",
  "key33": "4VdaFFt7c2gxFrgssoo7Tx3uBGB3RBEsxwFFjaRjyFbu4iVSbyfQpszV5eFEoYtTq324pfCAmbae3w4LMQ3odXPZ",
  "key34": "2En3mtyS3JxmubtVtsffXPbpFkmyDYTPjHHm5q63feAqRXDGzsho7JYpMcLAQqm1DaLhFGhBCEfvjXqAnQhMMbmn",
  "key35": "47hePcEAqVzp7rgwZuAevhcwt2bqjsCRTs4FDuK2vRiFR3qARvosEfkU2dbcMGW9hAd6ztodqKkAA3xFwgp3f8Zf",
  "key36": "4bn6ABqieMqfhKHikwNxtAazbm5KVq7Zz5AAFXwvXZA3ZoSv3Q98sgrWPvztiXPkpZzG7fc225gMd6eQxPfFNRZ6",
  "key37": "2rZQutUShwY7CKj5scU3HpZfdT8xv9mEji5Mm4J9kH5eMvA96fa9K2TH8fnjgtexHR1rby4MEXLR8a1iTH2pq1xk",
  "key38": "wrX2qsUyfZhWcZuv5NG54FKns21CxCDVyB29WRxxrMXkQiuFKwLYQzW9vJG9Wfn11Lz5DjudxWxm61PwbeN563k"
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
