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
    "594sDy4bsAfVCkNKnRqLiivDXGkFd5fLK1wfVLptt4dzXtBaFyhHk6VtnE8tukDZsLRFPgTsM5ne4oqM1sWYBtK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUpGEhKLrK6kxDf5AX6RHucu6V1WkMFsJ8pjwtTPrHraNeDcVgX7g5ij5rGiDrcDAubN7KDVqDw7Q7pLU9tQMFq",
  "key1": "63HfrNG32W8pNuTPjNmgLEJVfkXJn86Kyf6o8cTEpwLnsYiGWJNS6r6T6WseHiWieEm6GgGr1oEPNcbkiV2TZvmX",
  "key2": "4JGcwsfCGv7CFxaoDTDKb1TYqifFgXW49FKttpq6ttQpxjwwFTkghs4SjFAUWPRpnUwbGknocpejdCJyxPCCjXjw",
  "key3": "JLWAu52FcvFYAe6H5jNtimHcNdtUmRwBMXLBURLAGs59PNJDfsrRGK5PKpY4mhaJRKAHUTrPTMCZCzckF2eP6P5",
  "key4": "51vkNFXg83wEZm78w4hLtu4JPq8WhtRSSTkn8MVuMNq8bGSLQRBJ1HknVahLVAiyPEpTSnVWxzNfeL5pxMM89MYF",
  "key5": "gjfGnqpxuMWA7F45jxRp8q4FAt5wYaJTkzC92gnodMigc3BbBSPYk5u1SbJsfY41RTr9QseAV9oq56kTe98B85M",
  "key6": "5AjVgiS2pqtPSQvtfyMACBFVbZMQq2LnXVo1tG8m4sbvN1m9xXQjqC3zhqoKczi4CbiHvaJCg27FUZgUjk1RPTtq",
  "key7": "cWKYErPgnjuQbe2nX6bGnXuRzLThHb9ZouRWN9A4rP34FUTYedMnqvMq55NFJndXgbADuLKPbHR4B37fYYFxmCV",
  "key8": "366nkgFEoezaHizhQeZuZUgXh7aiv3pi4RBR82TtiNtfMdyMzh7Kts3A7gaAcjQMhyY6G5La8U5vEoah37yxURkY",
  "key9": "S2QgbvR2LgbSVQEZtunNwMDxprSfshQJi8vf43WVDr7Z8ma6JbcTaRzR7AZjhcobWXp14uHxeH4ni1pHConqRU9",
  "key10": "wDwHsjNZNwdaYeaHRYYo2d2343Eb7M1amGLDBreVaxqftNMnxKgjq235gx27LZgHKbJU9AatLPsz3mfAztCmcay",
  "key11": "3wEEYHnu7yLwiq6KH2yXrT9J9cb1mtMVtdJ6fCjxSonmGG2ZZ8CKs9NQZoSNEp1uxtpUySfffghSrBZPjv4oF8pm",
  "key12": "5Q2pEuXh1z8bN8ZJat1kAmBExV6r85TXXpCK2P2RuJAd96phYJCxH8vQSn9r7pT8cuXmQ3KR4rBwAdKmMziSbfA9",
  "key13": "Nu6BMnVPScH2GtHFzWW519j7kVSr33XB68e6GLW7w2v12Nxh2qTmzkh3fub8NAnGBXGtmxYk8FV9zmgqhwAEtUQ",
  "key14": "4edFsUkw46DPhwdJtQpMC2vzPsw2JRKE1pjSR1fMkdRBj9Fb8mLhFKWJWdj9BiJLWmMq1viS6gptfMKGrZf5MMAX",
  "key15": "5TYf3KtFyJDhMBnq3EDRUAz4cKj27zt56UHXFWgN4jBKJ5HtSFXoZTJAxnmPeUft9s8cdaC1sd1DUJ8ZnufFcMwc",
  "key16": "63eRsRcrTRfM4ViZxGkcR5EptYUpjt79QrCXFUvY1piPFZwZW3AvtUBp5pdfijUPLKsBiNMRGXwhXqzEBruEtqGq",
  "key17": "2Z6dX6hTtZ5NranJWsbDMdLdPbTD16qQTU1ieZQ6WcQydvZubp9AQUxK2ebGipZegZ9R1W2VRsbmQWTSsTBVF5mh",
  "key18": "2uddHwRvH2i9ozRu2EHXgKaw5m6Tj4R4hnSz9opYcLXV97VeFBhs6pMhYTEC8xp1iNWLhdmu8yKqFriMrScGXCrK",
  "key19": "5TrudnYgAc8S36k1SE31kWRD1WguqkyobJSeBURHf9uw3GWFkeEAtgUrU62EYeGSp8uP6QTDfNLsoXFDDDymqY1K",
  "key20": "BVb5sTAtWmZbunPkcpJvuYn63asMqr2Gcc6PwfX7eZtDJR1mAC9Y9q3psJDHafEFprhnbPr65JtN4bGUoYhymq9",
  "key21": "4Ta1LeSAEzSy7sqzRdMjABHxgjkL6Z3cX2CQ8LeFXXdr65yutBAXmBo2M3TWNjr59oFcp893KzNgou7zkDNpSfdk",
  "key22": "5FGyLKJntCdwzwjWX5ZRaBQyHHZayg4gLRJ56dPxx3TC7tSEPJnz11h72wyySiPXur3tpixwUjDXNYGr35kdgZ9E",
  "key23": "5Srec3my9rHd9WjnotZ4Nuh7icpTVTvVTUnLJHXokQDLsPaFiJwPXFkCCoFd9r7b7nbFLsKt8QfULu4fgPAo68C8",
  "key24": "4HF4wT9Z4t86a81S56PsoejB1UwdWvZmH6sDxgSf4AFJcoJgwhmfwCGwGt3w4zgPr6r9Yz8ds4oMkyAD96Mbj6gV",
  "key25": "3uwoNe2pN67MgtjR3PcBY2LfZhzGtb1VtFBYPKumyJAhBcmK2APxh9x67sFGDeLvWys1x8jYwZkP6Tadaf16BuxX",
  "key26": "uzPhYUn5JViMdRfdaqNk3oekiar7SuEh6dQnkvY8wXZYjbmhPD1nrmgXn8UypwMJqqLKKwTceZn5PkYTKFcTtQF",
  "key27": "3Bscv2xsibGybpSdyTtP7VLqS6KytdEyHbMp4MfErVwYcM2CEUDK6FBsDnYKkfUswxPGZ1YuZ4yWtygHvZcqDsSM",
  "key28": "5UVaw8KASy3ku9YGK1G29tZr9fK4EoR4XHqYvqY7F7ExZVVPiFD3RSiaXJKSEbABhTTpRm5LmyeeLw1CPvB7wjKq",
  "key29": "4jE3cwYd8x37uMK3EUKFsWonQfKRwyudwGAAUuXqjQATEB3it7AcGB48SHV54TuPLjcqqh2hyjzHMFzUqNvYQ1nX",
  "key30": "2HM4Lr2VS5QinKsjAvuZbU7o1UBNdpymXTeR7VhDP7NHwmqSTVe5By2WDum1sf5FjDWZPxwRHD7od69KM3JoQL88",
  "key31": "3UfcocDeKEcgqUQiix9CnQep7Rwhv57EDBVtkSFUbPngdSF3YF7gQLt2EvgConpepPGfUie4uQZaaRXygQrGs6yg",
  "key32": "3JVPpBdCQ9NriQ46CVQxKTcwQ885MTRs8JHCS3CFSBC7H25DiLNkW3Qfse4efDUohzwFqSwLfNgKncUjPhmE5QCe",
  "key33": "5UXw85Hwr8EZZ3fptB7TTwDCLYD3Av5EpVgnRYdm1iDuguMZ3rnioaQ5Npnnpz4PRms1h5wabzL7QpCwTrE3ZhM1",
  "key34": "51MbaCKCLgcyFFSDq6xxkHySMVC782CWHVwY5J71rTAn48wNdKLwaQmEb1VeEe4d1fTgx5vpsLdE5wr23b1ZZ2Ke",
  "key35": "3BAfyNe2y8utYj1WRwAKr92hUTFo8uMVrYmDti7vHw5k2kDtevSZv5QmVLYccZPga6jtkZZZ4to3qvj5VzFfzRFR",
  "key36": "4JH2D8dy7D8HMveMfkh5uc6ibxBiZwphNRne4maxTosKJx3UKeMwzSvjWVczv2TtPUvv1BoevVL6KW4ehr3bgFvF",
  "key37": "4ehwALvbiF3qC4pEiBiiPMj4ztnNNHFfGRAuBzP2YLeEa8mnztMXy8RtASeUHzCAZ8eD1N7wrD8yWvtMo5QzBsP4",
  "key38": "4X6jqqydTacnAKi3XeWqaZ1KvuaTauUh2jjYBwG7hXAugi9tfk5eiWeqoXvPrECLjZM8FgUwJ69hdwr7WurewAJU",
  "key39": "4QMs3KG2aFmvFKaip3KTfJ7GiacwvQJB1RTPqdpMESm3txgxewGQMvA9UJ2ahF4DcegGJ1gcCLHRTcHvSFitrcM",
  "key40": "4ZC8ywZVQjqa5tXoggh2gb3pSigcwkwUuGWMX5BfKPsDtSzZvfbzcZTfWUUHJSfgW8DRi1UXVS9eR89rqyaVS1Hf",
  "key41": "4ADTGcuAhwm1Z1mm1F3DsmFmxdirqWAaTiQWCnbuecVmzBZWsLzVGBPD8PY6sTrbcVwHPjmPruy7muFQyG8zTEiP",
  "key42": "2hbrc2wD4hRMMVCqpUCBuhGvqE4KGHWst5t56jiHFzHsrn29S1MxrhEdrWEhVA2cuJ1MFLaKskvm3CQi8AqkF8tG",
  "key43": "5vPxAgAEBMXgr76SX1QSVdwhTQsGZe1spzCfE8BUh2p6W2hM3UTV2WbjvUywDKjp2oCYPqfMtKUtMD46z4jgSGWd",
  "key44": "FrXcYAaDriGBHizarWwgMm5ddxkDXPrQtLD1VxymYNnXGRdfH4PASWuJh3h1RXzxhYt98guvakuzykDyKqbALH9",
  "key45": "4VzdXKw8BhpTeRMe2SeidMLfAGxRmdakG2oWZokTopMS14friJV3Npf1zJcgwigXLQVhgjR6jaCxEZDnQwWpRoyd",
  "key46": "Mk5i6Qndj6ZTAjjqqGgWoDg8AyPSTYoCz3D7UE1XbPps755g4WX3UPvE1jDwd5ENnJG2pxV6szMEAANfE2FHEnp",
  "key47": "ishnusGKc5NTC9XwAmiDCEi7r9hEK6E4uYHHQLNhaSDDBGybsHenCtznZA3AstdotHFaG2eMNt2JkUWAc4a3CUz"
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
