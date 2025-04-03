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
    "2fMoJoQsK7XnZgrwWJhDW3VpGzpB4PXtWSLhhYDd7mEDz1yzt2Qrp8Eptf5QQNCTYF2b64wjdmcqgzXtWDvJX8aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHPM7BbHCb251FfRWGvoyVnqcmhRAkPzxqhgu3cgENVLVgwoakKn9ZuHqEBuU9cNeebRrX3yabezrboLqwbb5YL",
  "key1": "3yfjcSfPDn8cShxVttLkhP5hqMVu62tH89G2rqoDAx4nGH7XwoEJzE3upUsp1y7D1aMVWYQvJNM8EGiMp9He74RC",
  "key2": "5r9cHSyeZEhCh2E4q6nj1nmhwScdxQAbdrehkUp45bbkVRZmS7Gg19cW8NThWFLpjRVzZ6qJxUQbhiypLZjHohDN",
  "key3": "97XfZdqsNdXYYx8z95VNxbfHsoz5qZdz9Cuuje6euQyv4iAtjosvvmYfaJAs32F5FPb7DQR7PUJbmWRcZgzDDUk",
  "key4": "66V9FPHK7juPUkBwRVCJKnzxcgzSwmtkbzFZsoYX5afzZepv9EYrZwZLdCE4RGEipJjHon9XMeUaeYaKSHhMpv1R",
  "key5": "5m4H6b64E7EqjAyRyRBRigkjQxWoY6ZhjotqCQuJzxk7yDEZteGGw5MZNN3Boc9wLT4vqrPJhYeVdcW8Dp2swbvc",
  "key6": "3fcvT5xYt12C5HD3eBr2xoUj9fi6qXrU9DPz8Wjp1GWMDzByp86biE2gwRshMfKjiAhAf7TFogbHo1fnf6tYrHXz",
  "key7": "23DBjndjKGbLytHbiErYXQ3QhRuUTfMm73NXvffZoozZXQ1aYaBDmqcCdXm6Y52VJmHvjHUd49FxgtYAYa2HC8ye",
  "key8": "244f1mjifZs1pzK4Kpw9DPmY92qP3ZkVf1UMAZ2omKaraF4VnLoD9nydc2ZuizTvKCBrEexGPL7cieuFvQfwLmqD",
  "key9": "5q71fzSeedg4hofeE2cfJwe7za8EYbEw8msBCLi97qG9UXREHeDMB63tkkjpbjouFm5gCaaDSoFLQ7UWDo3Lc5f9",
  "key10": "Xm4TzMTv9rjmrhidGNVKvvnPJpwT8gdeToNYJKa3Vjx3PhFE8LUvt9Ws5q1CvN14Z9TWYFTp2XcQvb1MpL698Mb",
  "key11": "2mqo5hWH7CQ5VQKf5jRxUNrMafiiKuNoL8YuZac9UQzVYpabvY7ULVNDQSh4GjK6kgqwj8QpDDVTq5rYYLHuAB4S",
  "key12": "2o6gy69TZaDYi5FQsvSm5kCCHfkNBV2dZn6DXCJGoxw8oKVaRg62X5UVskobpbMYtX6EazRykAE6rqXpWrxhFQYT",
  "key13": "4rgqTeeuWuyZwmADYsFWng5jxY1FX83kR8tRwyho42rVZ96Gxk6D2yaUwZM564STtfT49AQU1BH1XpLCPwKjRf8L",
  "key14": "3Uve1FCSPP9w5otC2AV7FCbhCrs3TPCLeH2fSSYEHZ6a68dZz4B7pBm7uwttVGq7V1b9Lry4bSJAG2LPH91A7h6g",
  "key15": "5oFRv7VhVzJbCHcrFbZRpSksdGcWNruUJUMEteF9XuphvEM8fjniqGo7uHqLyJ2qEovqi6nLD2k62fSK1dhwskTo",
  "key16": "5rBAN8dcVqcA8fWcFZ1wdyMwFckCSmEXrKHVEA5iwzQF8iz6o6EM2awNCuTYw1bNSPi7tgA6k13iJbWBUzf8yNdo",
  "key17": "5iipL3wAXeJk47ABArGuJHisNEhrQMbNJKFZguE9mrz54eqCHn4RtjEXrV2agPDs9hJHRwbzKacEyrdUT6UU7cCd",
  "key18": "3Ujufh717UWwoq4kGJdj6VcJKVkCTZuMskgBuQs9rC479WQBnGxjV3XB9WpY9VtXoUKaVJSHv7gH58D71M7xiMJ1",
  "key19": "2QEZtKY43gSHxKf8kqWYm3V9ntAZyAkpQLVrgyYSKxytCJwLEtUMFuNGyBPcgBZYLyY2Qr1BFE9toL9A7Ce14vv2",
  "key20": "4Fe34enwFi326M94Qg1qhh1NBm4dRwZuLtyRfGxZuDuaSuJuW9GhACRdRZG3FJN4SaxpLCMDPXPDAoftohwnEZWw",
  "key21": "2fxjqdZa1jPNe1e6HpJrAP834bC7Dz9Bt6cDfnb879WV2qaoai8dNkNbr31voWyfiF9U4awqSFh97gg7WJetgTdC",
  "key22": "21WjmXPMXAPTkjeAqwUJwHHiRHSkFdYHFA9f7cKT5toNQixHq4G1Nity4THAf93ojeQk9iw5AaWfkNHnhxMxLMtf",
  "key23": "3jHTHuimEM2pYueRFEXdKFtfQDjmRQoE5N4zD7cpKhwEqNLid6f1ustbXnmL5zFjwzQM8W8NYxuLLkKewqc7vobB",
  "key24": "49hewa4Ac877NPF7LQsLCRA1WzXDkS8YSZeeS9wZU4nyMzZUAwjKqiRKVUHjKvBCv3SCPKzaJWHG1o1eT2h4kqZ3",
  "key25": "fXeSxJnvYK6RAHMgRLfHD4yQnsXQp4PSjpdMnkLpGP4tTzwSNy8792rdUCc9VMkyRe2fFaSTVoWuMQRT2aiCH4s",
  "key26": "2uquLXPbnL621c4MkZ6tSNPEDwqDdv2Rr4qXbvmhuc6UMo8auaS2zHYUfMaUgyZKmhgqhVZ9afkyA8mkGRPv2No6",
  "key27": "ANK4ptVghcMRqJo2nKGceEbXhzBraBcLtUyQbXQaMSia3v7WTx6HMhqT84DzdivGvCqAPyxQUh3FbuR75PT9MAJ",
  "key28": "3eaKpks4MZeJikyG5qeKJ1mM3A1TwPQPzaPy4FW7e32dm7D85psF63STqngJpJzhtedig8E7uoQq2BvtKrH8JF4X",
  "key29": "sSePojvoGpvoTpCCtQef468R12PjNtWTMk2ET5gpvsDkyRCPkBvNyhXm7cb7SbwboicNhWB9ajoo2Buk6K7cL5P",
  "key30": "36qPqgrkWAQbRHyGYaTMAxySRbh1AFWqRb3Dydez4NLNUBYFY4BFbFkq84P1MS2m6YBLKVkRiG3qCQWaYfrtREVR",
  "key31": "5kSodg1uCamm4Spb67TgRXvQ2hGSqG1hWd9nLBDVrK1Gw2dtXfni665tP42ee6QY7isvTdqN1EkpNujEMhLEFvUm",
  "key32": "5Hgs7sQibR7ZWxE2nttT2mSVXrcADk2aECUSQvxHsw37DrRuUM1gcqDBLY2QCc4msdkkdk1Nm6obd3bpcn8eENMs",
  "key33": "38FprhEXf2zY6pMqXkYP1J8jrd6wgj73oLgdSvFAE7kVrq7WeGjqLYdJw9YntFyRzeRmjH6wKiAQYnz9Z4peRiEs",
  "key34": "26rHnfsed58sCNCT616HBoDPYat4aAJMVs9RPaGpJWAAKBhiPCbV1WHJF7PiCTKNNhTgrj6fEd2wYnkL7wMBPiXV",
  "key35": "rBW2K5rHHyau6V7EjMZAnTLN9aF218tVEazWhAn3rTuF1fXvTFFAgVazxWKD8Lg7rikdCDztxb3B52QcdJ4waUf",
  "key36": "3WRPY57tZv1isSvFXJs7pUceT6o6QHcgLJuNLb36EQG7iBdMwqLGcve4hn6TsLErc2FBPWF2FJEcseiuWP7Hvsu2",
  "key37": "3fEtyDYQbnLaZCzCMLwycefMAkgkD8scfKR74V3caKnArtdyUvBGvQEYMwXaxbt49Tf6niJTdsecXpYYJdjYEs9v",
  "key38": "2H7aonZBzBD5xhbDmA8Nf9z4odyMY6ZTnkLPjk9PxwxRZJAYKW9TEC23oyPEBaUJNkKM7q4nTtmLRFB8MPefGn71",
  "key39": "5YSa9hK8VcLSrSdWm13LNGNRHoha8kqn2rT5ugCAgobexBazM5DGp1ueiP63VSpkGvfcGLsRzjm7iY2fYZeDYWK1",
  "key40": "4zaT5VhChvb9dML3uAi37RjoKwjWD9fpqHhKrLPczs5UcBTGnUJp21E17dYn7FL7XxPtJystuAM6UM1crMKxb9hz",
  "key41": "56g4t7Q4QHJ5ujGRpy7PHgLmPLScpd9bfGSNNck1qeXrZ5jycr91yQGTTawHj1XUPc4h8eEmHjZ1CFK1NoWNZFjV",
  "key42": "4pXygVo7ihJds5pPAPFho5imY57VaoWsfvhbr8r5h7hZyjf6zZEXVSoZ3qXDaZCzCft7GU7L4ZkbAMahbC1WFJib",
  "key43": "2FY6LWACuH1WKzFYqydXkBXQpydXeMxbihWUbqA78HN4F1ZcbWbui1DvK5UBf2JwdVpDtrwaVYM6uhQUxXhVj5Nq",
  "key44": "2HMQB54HWmTbpd2W4hf167Bw5WMjRmDNyax6D6QQrVCwNKwmMnTbMV4Nqx9t9CX2AAg6S3SgXRwosEtuatGLHMHT",
  "key45": "4wNVmAqUAaeFFkAG8MY19G4HcwkETUX1VEpbzfZm5A5scq63LWncrbz1gFYDMEXLTSXYaFLWpsmR81xXPK2dw44y",
  "key46": "FcKLmLta2oqKMVVU8hs42e8BC18qd69yKUcGpKbsYajYmnRpbrCizqbovPn5irkX5QxgJBk3ZHGCXuHK4h4rnGt",
  "key47": "5hsGU7TWeP4ddu2gRbeN9aEvqkCyAkYTvEm1N6agK3jcQYaHYNKqZm4P73pz6orbKJW8EigXXDWU7DPqj3QgV1EU",
  "key48": "8LkCqbiULW6rZRBwpKZNuB6Edm6HxAD3oyrhfiwFbNi5XCGLnWJRtptkBvXGabkhsFPNAENh9yDe2Lt9TJuhqYq"
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
