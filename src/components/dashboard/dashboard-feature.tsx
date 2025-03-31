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
    "3Xj1p365RXL9a13ND1RGZU8u82d4SEKnbsN2xEsb5z9qex2a2Fh5edwK3kQaacAehqkENbV7P4BTLb3T9LJjhtze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpwyvt4wZSsUh4JKvhqEiueRg1FDZMV1mZ8qYmjD3Qnfpq7DrM13jpCdniu7JHz1MXu2fmpR2rn9jmkxX9Tk2vs",
  "key1": "3nT3w93MTV55wBn9nczGqXy1FPxaBJdncwek3cMHxDKvuVbXfY6EGcbMK1rHdzAF19L59z4QbFPWRtvcBxui5ovK",
  "key2": "3eaV6FCKZ1LyYC6oCQFe2Yh8gCANzvxTxQucctkEvQF7RB7Bktj6To4tsUzGKp3osXTvLe9XK9BfYCmgtvPRU89q",
  "key3": "2Lzm1TjSqidvvFHd1jkkzeEkxLWqqLLpe9uKJXX392HHFG4PFZJGa8s6jR3qZqqU8ns1X4RENa949hMFto5Egfqd",
  "key4": "2PbfeXFBiL1xjAH7wyqrYjF6M56GrjdojbANt3hrERwRp34MX9SVD37eMn5H3u3MkgyjVaVvQSRAwwawb1YqBhqm",
  "key5": "EPUk67eKJshT2NFwXXBH35MyaTGkRJ8avEDF3ou3sBYrJzFu8Ty6SGJXyJ7A9Mc5C3fwGreZCMyeVnPWu2cCZ4c",
  "key6": "SGSpMuSCgyhC7TFmEgbwKcRteGrzpA778xKPL6zn2MGBJeQeEXnNjQ9JSbqAezxx1YmAR55KoQzAmkejeVvfSxC",
  "key7": "rvXQWsW65MRcnYdP4c5GhFTnpvFkaAVbAMWVC7bkQwD9N79BUXQ2QevuedfGWHLwZSpfc5Pc6SH1vxiqETEy2HA",
  "key8": "5DJwx1RghHiPBbEQ7gQfWFLYPpLBRwmQmGV8PAKfqF26nxUHVPb8dGqFsKZmvEjzZZzCiZtzaQnwU6uunTctvmFL",
  "key9": "6wHDH2jpXb4e6oVCwafTHN5iphZamiSrXN6DLSv9WrWsG6HGCSvrLjJkk3GzLtqStbRUHhLdFR7c2VjVU1eLXQQ",
  "key10": "3mutwBKf88CNonPSZaZHRedQRiQJSgg2HRuA5EbjXhvbuGwyLC68DQdiFQ3vYHYy4nDbeyUVH3j2egvkYuqcjvvT",
  "key11": "65LDLHt5RTbx4a3B7YUNcUrX7qRhM2WTwaVmxWkbpa9KsdJx5VnzyszvqZwPYrLBx9w9YWLngLwtrzaYKhbUUSaQ",
  "key12": "3v8yytiSQdNnvAAGmmdMXRfTWSZy7su5gzsqdNULGzf1qf3Sfhie1LicjTWbeYYxdPEZVqfm1ZCUCgQkjQPy2kT4",
  "key13": "4x3F74To4B8ym194CGkoNPY7qNb7LFrx9bhPZ9bQcxGcLNLatJBGQHrzyu9qEGcCMRELeBjLNpFyKTrWXCude7dq",
  "key14": "4Ep1LXhYx7Et4H3vH3Knzm6kurbo4d2LG9VYevBhEYagSMs5Z7yg2fXzfwUgXqSXaWuGuwNsMsToKjHwQkXkMoyC",
  "key15": "3TfVnFeyDAep5sAsaSXLydNcYafgXwBG3FXYs3bzorh2XhXyEmVcWwM8tnS6tkGcu1HqhitkLMryGeavt9X6LgiW",
  "key16": "4WmxV1jkiU2qwnGmCsisRz5fBjreh4p8RZR7kkJqHEV2qdSKmqbLGThfAgPeigcku4TUuc5cJGejAtMwEyvZi9CU",
  "key17": "3CkM1W2rUQGPgKrWCcoLVikLqo2Rb91RpT7nNQurRoxCK6xZqpHY2hpyQ59hZWoBdgNokaUw9KPwD3fDpLMEj4Zh",
  "key18": "qLdwJDtuNV7nugfcNSQy1qH2JkhgbfvN71Ek6o74DzCgSe3gULxA7MoAGjqgDsT1Yuw6vcREJEJYNJwdDaf2N3N",
  "key19": "5KrKonjK1fuexSbBPV9aVieVNep8Sx8p9wgeZL2x2xEuPLNcCxunL5vaZE4bFE89oYwquXYC21PPdGAfpnaupbGr",
  "key20": "zYBxNFfbWzpt7xuQmpeptscePRNKNVRC2epvHTww687j7oECyz6Q9Xm91fUuRn1zqkPiUFnY5wpEVL5fVGbnJXy",
  "key21": "3jg4AZwNVJVLssHhfCmgwS6EBRLD9h6hQgffggYDnATrq3FX8DdfAWN13xdyoNqCoDerF59QfpxyuAHMKYURq4xT",
  "key22": "2uzteKuMYA11ybei1eCLrpcvKbUP9LZZhj7EY9PJPJnZu17XrCHd5aYd8F6oGxy1DADH5B31zhSVVxPChtPawC6U",
  "key23": "5R92vVyPWt9MjHpb85W3Q3RPB3D2sbvsfvNZDuHspFa2DCaqJ1W1cRa573jCJNx8rnt2DqxUbwcEA1t94w8gqRtX",
  "key24": "4cFtkfiRtxamh2xBtgYcFW1Hew8pGqvZYpTxCuXQPuKxRn4aZSecWJCtbhhEBw1MREnZJoMveNQ1Av5Xo8rwbgCY",
  "key25": "3297LmmdPndc6jcqkPkMaQqpC1fxfpBfQStszuqeTGTDTHs4ZyBFHpjRzttd4Ujb3AUW93e9LS2YGyHw9B4h5PFa",
  "key26": "3ommDh5pxTJiuHKrsKZdhfibeke82B2GhRWBnK5cQ6pQLvkH7QkdxAFL2soMCFWhufagk32mw6iPTnizP6gVn85r",
  "key27": "3fe52giC72YkJpmj1gedHtKtYgzcrjDPTKiqJNBymnXiUfSCSWywVCrXnXR2siMuKtng2hWU5bfy6rdR8Zd99WJs",
  "key28": "574SEnmsJuqtM8FnHM2agpWRPHmuGYsNQaV5pEK5yfegTHeHtjcCibPUHdKptbdRska3c1pFg1NNsmZNAk9JWkW9",
  "key29": "2qy14GGEcxTye61NdkCEPM6qdxrxTu5Y46k1A5U8NY4BvHKr7oAGMHmwik7D2pe1gTEx32z68Z4ieSZRN1Ho3PMX",
  "key30": "4eb7qLZR3osg6VMkHV9PKniwWR83Qch7ofGwpz6bz5tmNCKsksJJGkmUfxRYxpvgrLHubD8dNH8PwcrRa4Ki7xqv",
  "key31": "42oqjoaV5BJp8x4XXYv2JJU7B475w7CGdckag4buGwjhzBfrxY5KS7qwNWdkAvaesHuQczFLwuMjs8rz7MY7jrtB",
  "key32": "4CHr7kiBRLQ32a1E6GUwa6KKeD9h9kvDPxvvgbqHPq7DmTMb8v7Ahm66GzvqS2FUueyHtBV8PQaxQcLFbpkHwZCL",
  "key33": "5P3z3qoLCgcZS3LwuFgKzR2ou2gA97hoeWWeQTxfRfBghLa1CuZBXrRNmMM4GwZDUDWmLMe7zTM3ZHwo48ZnMyDy",
  "key34": "2pRcvyL537FWaFUDg637WxKP6cnDMFUsWxFNPGiwaFnwzCXtCsd8VHf8nWP4zdsw1c3YxeazJWZ9mfypc7x7e8RH",
  "key35": "3WjJ9FiNAkAH4hAzQcdbh1KsYBX2Z433iZU98YnBZd7jrJAn3YgGvx3YvqcEuyMLoNEPS59aTA861mmhYRp4iAmz",
  "key36": "35jYGU6ywhbNB99JyZN9jupDyMW4FqtXCcQnSwLKZKdXLypmD7KoTpRmoxp8eRSo6eapisgsEN2tjzvjPyD9rEm7",
  "key37": "4efo25zranfAskjWzH36f9GtW9NYk3waez5JUnZopDAx4xW8u15DtWqzmhq2NWW1bwUZbY1D7gZe4sKkjaMonxqx",
  "key38": "4f7h9WRrTDQn48iEHXRfhFdywbcoMqXFhCSZ6m7CZwztaT1k9erEaPbMP72BRhSpbuWX9LM4ynCndaTt5nwJ9v2n",
  "key39": "2qbeZjf5uSkWiGCPaoySwSnfo9vZoRS6QExyoTv6NrJPzPXmsSk9ui222Dk9FWPdeCD4aXLqBWKfeZnqC4fUNQpq",
  "key40": "2vL6mEofLqhqaj2sCQtaZeLeGcNx337ydUhNnpGFdpoPhnavvA5m8v5EDZs8469wb3vBiQbrhXJBPr14VQqeBZLN",
  "key41": "5GVGJNJiW5GtN181j4LTqE2nTgw5tSHehsK2MS9LiLozaRBWjuBTfDbRQYzMYzupTrLSrjXB5bvFmAKMfAeBWU1r",
  "key42": "4sY5ahdY6VsZa2TnsV3thAtMLSTP8nJK3C4XU7btqpzt3t9r9vpTNkFAK1EACdCaFKAucspwMsKDTunvzR3UGob3",
  "key43": "2FRaGddCyY4yV7Vkqtia5nBwbu1xd44FexXiLS3tV2rvSCKJ6ieEQZZBZBivXRXypLSo4oZ5hM1ac28n2YJKtMjG",
  "key44": "y6JnQR4pXpEY3iUqcV4Ah1CGCpg54Bopm34H7FDpsfBhr43rFRrByCcL5BdPjSW2VJNHkirEqUfw31Mk1D92L6t",
  "key45": "3qf4CoZvfH9VHWpppHtCnvgVEVFYfSdCzUqS4AyZG868BFFiGKkyVVLLjkw8HwJoqTYVEHPu8ZjGBeNXeMS2e3p4"
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
