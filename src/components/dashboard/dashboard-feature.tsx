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
    "64jd6fFDizJ7jx4QHEh5fkW6LDewuqYd8C5rXXkyrPXU6w5okoWju49yBnFTiXb8Btsdt8eEBPoJBM1F93iapsuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hWnHY6Zrx2NrcFfP5yyh3L2frdKKjsxDvazFUAnzA7FXXBX9gKoYfCnQhDHe7gsg5k9w94Bis5W7XcDnQebkP5X",
  "key1": "4QyzpjbrcUz4XkDa5sByyfUz6XgYzwN9tc3icnrWUs1xFccYVcZSvm7zGRSUGdsTULt9SVqj8wJ9QiihGGkJjrQJ",
  "key2": "4C36SeEdQLvXHAn1PHBdY3NkajNgFMiidHo3sxjxTN7Wp8bZ3p8SpfGG3f6Fq6XSuW87HQyMsDGN1m914z3uuXfM",
  "key3": "QvmGoAE4mysDsGYqhUdkYgimq63fDR17EA3X5LLC5p2NrkUFADPRvBCGTg37TBcyU2rHkQ4yjuPcRL7pxiCFUZT",
  "key4": "G9851WTQawx3BgHnWzj9Nnr3etfxDXQfaSBgKFQ8opKWDKsjJpTNhSiLs4gq7BnkEsw2XeUtCeF6N6R4WkGqBwX",
  "key5": "2FM7i6uuJeNqgVFUGyer1fWL5N177vMP8Bbztxr1CEDDv2caFnSDXdrjKnrcdtBD3g7ZW5oqjmJGm9XdgpxHBvp9",
  "key6": "5RT6jr1ewXR3VPiSZxHqgdfm6duesxYG2Uw6EPQjBDmZuQcHE88CkdKdTTkLQ9fwiZLNHk4p5eHZhtqUXRjLLJTQ",
  "key7": "2TVSXMi5whJSezp5ZUURDbAXfT89c9XaoufNjtH5a89nKBijFf8UWVBPk8y118yhN9jS7BrkqLePrr2reGGkpcZV",
  "key8": "3Ji6MB7MWERiwsL2TUwiRZeCuHQWG3dhqiRyVTKTvcAdarPD1a66VaGsBNXP9Y8FjckngoFkubZjmryfXp9shZxo",
  "key9": "3XQK9XJkCCgm3VscepKMmB6x541LrGEsVKmyKzqjojc8f9dwctNMcjvoYpGciiWjLJUWcnf4ek1UTrR4ajtiM29Q",
  "key10": "26wYWQz5xWSDqhHnaZ6ABmr19zXGiEa4J9XFEcHMhsdRAtFvsc1NKQFdGG18r4Ne2QE3wJk1U7UThVfDoFkVtBUT",
  "key11": "4TnacF3pq378Fnck2DGN5EBcWAmhAvkqk38TcMpNAVJxJVJfPj545VBMbj91XCgHvFZDL16o7zanu1LpSgW1aMdM",
  "key12": "2UW2kRiagBbLX8UvPDxBkQn3LPVaVoN7rEBkREdWaViTXLZ41hbwbZNQNu9B4S2bPPVD4xee2RKih2cRKNLGQ1mu",
  "key13": "Q24Jeqm7DDQYsqKfCHhTqcAQ8iD8mLKhpsud2DzqCpAXB5vujSAwqcU5iR3uESCvVxuM6xmJzh16DxmnBCv8gBF",
  "key14": "4zMbUMqB8vaDiPy1ESeYJb6C2fYsBWjY6guQHMuWLX9J97dxejwTRsvG6qWXYzjJ4SkeN5WNMnQBaiVYtwwS48zX",
  "key15": "51Z2Ra3cHx41mV97HR1NB2yHKAyPkvG64FZDQpsAhwyekDXy5kwgu6sqnMEqxwKFm9VoGzjNWFBuX3ZdJkJgCufB",
  "key16": "2mG1wS5iiKXuLFWdY6ED7bwST1gcDqrA5JoKdcZV1dZ15ahpma8XGRsjZJyEqtyqJPnkLoezu8AXqnrh4AbbceE2",
  "key17": "2bHQvcG2g5HiFF3ZGxiujRr4ZMjZMhJZpTe7gHRPv97MRpbKeWjKcedgTknX8iSxwy1BkQDyT4wPig2q8jW5adS5",
  "key18": "3zL9nPYS1ECwHKsbaQdhwx9jkXbo9gXcWGcR1eck2XMk3WvXEyyV4FXdvXmc3RRmYfG8kT3YxmdbZihFRdB78tAJ",
  "key19": "sPU17jMQggVqGk4Y8tCzCrQQxdaQqCZmmBEXrXR36yBikXf3eVTa6NCM9CVHnUWEvK2GuGHi2mRhuvaQXFRjCXj",
  "key20": "YY3aYrifC8g7LuHxodgFkTkpF4RRZ8amEfTbmXQhYSWwASpUho2ThswzUdwFvTVXuq3ktvaznJY3MqwtcwbzMX9",
  "key21": "2iXDFtpFRzrQ7mpidiikRHG7yBwAjYR9RhzK2idPk8FTJ2zAYi1uX2YrbUc5UKP958ZsnER4bxsYYm5xjqQEDgKH",
  "key22": "4crHzjLBk7zZPhHNmvAQDE1mfAWY1oLgkM2e2tkQKNmn7ZShBg7EyQeHFDJs4M6JaWppgmoJcxBvukXxFVmNSFR",
  "key23": "4PdLSH7pPWkGizqLDpAiKPrG2UhafS9nZXxMkF56ucdBfT8QLByX3mj5sW5BfUfjtkzRyqZa7j7jKCa8asTX9Vmk",
  "key24": "5u1oze5hp8qBTWUAoLiauA4j8KTNPsrgorFh59S7TALUmgQTM49BHPjAVmN7w9eM8jJKqrjDJN37AjyhYJUwEadK",
  "key25": "4qbC6PWiayizKsD1YjQ2Bs3N96dpnT4SbE1L8L1PVHjsTKBYW4zV5TmnVSdCvu5gsNFATEtHBSeB9uWekGjyihpe",
  "key26": "4UUQWwMs3JJBWfpquv3BfkKMSPhYpLYBUEz9xBH4XN1dYYmkGq6hGNfecQsLpxqFh4MtVA1wciVTtGterL9cyTDw",
  "key27": "UdvYGDoBp6aGcPVbVcvuVeveXvfEUNactjkae8YumUyWBfU8krSVq3v8i4FDjeDJG9mLQ98VgEW8mfuKNkGqy2D",
  "key28": "5FWbqTtYsN97jz2wtVHiBRXTKj7Wk7S5TpSSDGRtCVuHe8wNsoCk88fciCpz9cnmvUKbKTDVQLT4MpPqdBhZcQk6",
  "key29": "awiPRaUpPdzKnCFHqNkV217DgbxAdaXHQ7TgXkAGwe214w6WMF4AxQS1ycSzHki9YN1oRNrLKmGsFLfibeCTo8w",
  "key30": "3cbx8xA5w15Xws9kNhgAYs25itt6XJFPfQiYVmmSV3YPoBTpakQr82HJRTCW9FA5h26RpcC9pWgVGowD8ZfAYHRx",
  "key31": "55cH3LmHPR7Z2R2SoGjUWHxKn8nnJVST8PWxrJjbBbKDoWZABDxm6JaoKpR4R5eVr41jRfbmA2TSmyKG1yV7tcqW",
  "key32": "4Zqzssi2G6pFDddJfsi1DAZiHCTLbRbcKgdU5hiajb91GppVNp6EWCASBo4su9rNg95hBgKibpf8tXyjagSb1k7N",
  "key33": "NbbpTT4rb7A8G1rLdkUZ4DNeCnhR6XUV2T8yGPC29r9uyThH13Q3Nx1nsUaaGo4Nt3He5SBByGx5aKXf3Ry2bMs",
  "key34": "4rwVagPtEGGAqZLxUC4136xhnW9CLWoJwQHgP7c31gxCCxUBMNeoCykvS3u5u1gB64wEYCYLD5FRUhE5RfeEHZ6U",
  "key35": "4Qqg8z89C9uYGHeYbgaA4kAXHmb12Dfq8erNPyqxdaaBjCKsdBAwv7tvHeJ8ub72ft52zcqBv4m8K1o6kY3RZHBP",
  "key36": "ZVjAcypZbpeYsTmqGaH9w6Q9XFhvbX2VVYPLrREpWmgZXtQcS6xrc2VYKDLWnidcQnyK4oGJSsNSbHjFjSPG2EQ",
  "key37": "2MEbU9b4s9dzp1YVCnXVbXsdeN9sreMuQCGuVipTWYgJcEzJCw7vjYyALyAPT375w6NKo6ZcZDp4mCQNCgNjuK4e",
  "key38": "45aAaFXG352CkAXgkykh7vAdS5Nt2cTdyLwUbHREYAwAWu31QmDcHAwECF781GTQJnRWAvgAqz85KQErDx2EGBHw"
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
