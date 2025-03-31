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
    "42QENbMz9WCGfd8NksajKXTKuj5tVrt5fQsLSGwLoSrU83Tj5onTkW3GoifdZF2MKtYGjmdaEjQRUZivhhhQToqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4huvjbJKkRY6LFotZB1jccdso5UGmKHm3GUo57DMi829Pii489dajQ9zPppNLxY3c6aJs7NT5Zdw9tJA8Fqn5bxL",
  "key1": "5qSje8gT6LHpmXY7t8vPY3p1rE3dWtF6Hxta3C2WJWqfLfv4avTk3k32ADvLMgajKqeanBLQNqWfhMaJzbxi1bFp",
  "key2": "5RsJyEZtenGtEj7rEmcy2DV5KJ77GF2nvwzxSsFLHHHj75NkdHbjvpX1wCBiSSAQFbDbKmqmPjSovXDds3fzCVSr",
  "key3": "3Tvfk2oTLNUyTcLZHkPCr774nXCwY7bzJvCy65xhKu8PzDmhZD7FrbgnEsxnxaPxVD9ehHwKeTxUdnCuQpvgbqaH",
  "key4": "4kVExjjAyzQEbG4vHoz5NvAwSXnZSX9Q3ty6omJRjKN3Y4dxRCGZQ19kPx3n8bVDxBF89HJ169CrDVWsxbuES7jC",
  "key5": "unScmfBEmBkZVeBsqDQ4v19jbYeFfgL9CGteYn9AEEBPRRL3Xaqby4N8x3Cgqwc6qVJihYrd68X1cfr1kEX6oBN",
  "key6": "1aNo7SQpVeMKhCuHZvjqet2iD7sYLEiRoHfDN1ecYz1f6WtZdhF6Ff87ThUmjNvMCLqQHMvcojPWnbTkeAFFvDJ",
  "key7": "4fzbWMQQqq3KKDLEkpER7whi5smWhsx8D9NyBQMFXBqLT6YiivHSAbgxg2hBG7dR4WyneVc8VpDrWLkPwJ4DSru",
  "key8": "3PyLjkAxgktxNu3fvNEDuEQNXwqT7WzFqXZHiV2BQZxzmZpyG1g2sszKewVfAJsGTrR9XrUsSWnueNSRYfdg5zoy",
  "key9": "2BADPbNFxXUxn9fMYiKf9BQSBKbeNuFP2nhjenL5Fj9PQxJdfeYtiKrfZe2SLveGiPZXVka1XYuNknGxN5i155kQ",
  "key10": "5xKtwpht7gWrNati4wPjpJBPX258oJFW6W9HvnFtAV3Y699RJPvoGowvBVh5yS9W6x1p2mfBd7zthwHR2ZWpw6nf",
  "key11": "4A1MN11SZgX3ZWdzoteTunY9FSYTfkxyMzAkTrjcfWmYbwtajMzhxNBwUM8LFRaJVbAzWgUKN5fzgFq46BZVEfZU",
  "key12": "4QXmafp8mCVYN1UGiAdkU4mMig4K98KQkF7bMEphBk1JWrkRFgNCu5LMot4cAFVCjUBw632fQj9XjhJNk9YSRLU5",
  "key13": "2hSxBPjSUDfzcnCx6XbrQzgdaPN6YQaxPHLQAShFwEmY9QBZkMNbu1zhHBaBvPYzJtsXLbF8mndgCaEmjJohDRGa",
  "key14": "2orFL5aRDQPRVvaweS3yfDQ7S3jgtvHotvj47xGX8AX1cxE6cCQjRkCjeWa4yHUd2utkWK7cXuDDwZXEvee1cx4u",
  "key15": "4NqJKisuouvaQx1fdUemxbwTbRMsrEb6aGsiJPBJtxzTBRQPLUo5cMjGggt7mzSD2QU6GMPUAMGMmWQ6fLbeRpUZ",
  "key16": "4ESWfMbB83oR29m7NwZhxE67q4vvCyX3swifwFSz7qrW83kEHYvZswLPz5HSkwNVDW5HvmA4mqY5LPoQpSyWofNo",
  "key17": "5dp9Bed7JUFns8QpQtXZWwanbhauMSMabtnXjDSNemW39vEUMYNpTVUsqr2q64RwFgTqjjSorqKFUrNxMJ7YtSQm",
  "key18": "5UNEQoTMYZJscFVeURrv2ic4SqMv4CenqU7jKJuJCGc5YqkU91ac4j62gNbPtv3Ep5oDjU4JjEdbptiBmZkfJPdg",
  "key19": "3N7bapP4HsMk85vP4G3z3eVS8hkGDsoBCvoA8Qbnw5TNNngndZ5vF9ZAbugzxCtybut6GRK9iZpmHSpKH2UG1u3C",
  "key20": "jw7MAqRj9cWnh7tj1Zz1JURkdn9xdnRX7opCgAoN9rRB1tcXxPYiiL4HmE3MJYW8DApCCtKiiDNYMD45WMFr4X8",
  "key21": "ztL34riA7zyFfRNATtzuQL4ko5e6yNubV5foX6Lnu2Sc7MF8mgFM6fFqRuBUmvCzajWgBZ8DTbA3drbpKrNcb7n",
  "key22": "3Em57XFA4VMLzJgB92jUFAwLUouYfJsrxDKS2p3LAePH13dF1u28Kkn2gD2RU3YRpL4HgVHhUHXiALne7q7oHCZG",
  "key23": "dttGJSWkhWrwyB947EjwsvfzJ6sSYvp7xKYUzxSj3MqP8VcP2wHdudfmsD3V4XGX669MdmefYbR2mPnBXeJs3KY",
  "key24": "45anMqq5oPFW8bcSP4FfcEh3ifBQhAZP69wT556Mud6BSjg7xwgw84vccunAmkspiGTvvnV2HBDpZuEFRsx81KAm",
  "key25": "5hoZAbT72cRe9sAar34EQB8FVUi1CoW2JabGfNHbtZEgNQuPD4fz833UmiRKs4AR4ijuGaVxpp3vnG2NnTh2sGf2",
  "key26": "57Jd4gcBytjfkRQmkGurQFppuJZJarTV6ELqnEFGZeTAUn5JCrRDKtNNmcUZLuc31j8btrwMpZoaiLzjgE9EAoDM",
  "key27": "3nHEU23wbv1GRsiKFdLHJnSACKm4U6Tje8jwhoVWWSfuSrrvemXCb9hQENMN8J3sPKtRqrWzWu6dkUDEKNTsT6hB",
  "key28": "2eCAC4WG8o3B5ZZmCkp9qjRMt5oy31aRvcSQ8wprhZFKP6WtTbjBg63FCeBGFdbjfe43LJiXYo33CzTbsbJbMCqq",
  "key29": "2UnauHo2KmoWWKKFvVzF9vtZ7ad7y55NZjhNzwZGjF93r8HF4tM7XC15dHQAPi7gRqb1nupug9ufLsUu6F8NdvdZ",
  "key30": "4QMHRqWLJhVQ3L8dRfci6RfS6trrLPLZFZ9Ws8GMjVaxEax4jz7hHvmka8wW1ntK2A7zF1YP2V4ftdxcYjLssMJa",
  "key31": "38EhEKhnC49HBmQhvHooECv4JcQcapNNMQVzWYLgtjChr7fwn3dYhB568M8Q9aexRAGv4Ej2km6p4uVPSwivGqKq",
  "key32": "5tEK8Jqdr3GSZvPVrMg6kW6mwW3F2mC5J4JKaF48D6MWeHxnU8BDG9aqQunAsArow836ryM5V7o23FWqNeUpsuSD",
  "key33": "3tYVA5E8HSaGv7AYcboyYdz3hDwxiEWtzyWfxCu915Cnp1LQqUAKvHS87AFYkUxmrbd9a1hJSKhwqMEwCN4rMcHD",
  "key34": "53TYpeFH1NfaTdNq1GVH97q9Hb68XNZXJVvM4QAXWsDKPtsFMwSbnCzsT3Xxrgk9rgBqjt9diQfqme9UHgZ4vvXq",
  "key35": "31iAojhR66W87zioGQQfPpref4rEVd2zxG9yYG2m8yFQTWeg7KggdGcfQjEEoiBcZdiMt5XUQ9vHVyt6ZbZiqEcS",
  "key36": "5DsS2xepuJYNPxDMWZrD6w2cHDC5aVVLKHoNdLvctxM6BFwWLpMJwfQYi2ckWZCYFSnv9vfHMMEBpfwuYWp3aqdr",
  "key37": "rRnmdXupDNWJs7qaUrhUY7FRr3CYbTmLd1o5DuRW5s5eJcuKeqjuPxGpqfwQxBXJy9NsToLjwdGGJGyMm5bzDKu",
  "key38": "tPAjYSN7siWXfAesT4JDtFoHsjT5ABq6Q2daCMKaVdmJ2AjG8DsrP26No7UFNrCSPZ6SvwwfoLrzhWuXPoPy3Km",
  "key39": "3EwPEbTFf66RTcfGymUqGfxTtpZjGTU7mh8LehHfQgDK2citKJzvby7ZN4YEyeHnGYhoyuMb7memhQNtT1Tuwdsx",
  "key40": "JKyPTcS6YfmZFHUcsVnKGXJ8YPLoaA5HvJqV6q2nJMoB5xbkGfM9jzHhhc19QZCHEDeiHDFkHm9oGHWGU8DzqEM",
  "key41": "4YdTcyz1i4FAkxQcUuWRSbRtT55LDbdFjYH5jxexNqWW9RnA1hoMhLZeSByA5eXgqeQtPDaGy3KxGxtdpAoqXvHM"
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
