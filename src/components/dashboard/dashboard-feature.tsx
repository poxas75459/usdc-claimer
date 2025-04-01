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
    "3nWKwuYyob9P59Qg9gBSLroCvJENZzpeTSKcMRNi7XR7eTdZxUL7ofvPZ6TCnVvAGqXHR3JN295WY3tMLPxmFyET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5maqFxdZQY1LaYEZf9aEtsA4BjogsKk4cn9D1nTFSvhmn2NNoVftctfVxAeDjZHSpaUr96GxbiGwaCCkjJ39iC",
  "key1": "j4oUvPakjb2iWernichVScvtnd237QKVjLSiYkrirtBqAR6DhjaeTyp2rt7WXzuX4Fk9tNsA2Q5GnsnmaYocgys",
  "key2": "4kNz1uQM5QLHx1qdoU9tV4E7D2rh5cNzc3KXrxMHNytY1n7javcqmRKtNcyJPfPFdw8qhZYFVZ3DS6qdj4nft1dS",
  "key3": "3Abi6smYScQMQzrhAa8j9SEFTYNFRnFCGJWrVVUPHNDn789itAYVdcNnz3TfNuxVXPRp6o7FHeGp21EdPExWJCRw",
  "key4": "54VT7yc9bEZ33WfpfdoRDd2qUcqhq3UcqpdGXUXf3kRF9zxixrjSsRpTUHzqBtoXhWWb1HBCV92U3r1xHNH7ACzG",
  "key5": "5iwe8xa5xSUB97rAok7Zx1mC29Vdvb441NwvZ6Wmpgy5962bAZno4xLEXw43Eqo49fSo2sNZZxJrnbSCipbNGLtb",
  "key6": "5hUZyAEbXfoRUyhtowvQPpkAAdrVXYzuPVtrvQRzzuFTxRypr4A6TW5XqBnNh4BvM92qFU59HhfNaMLt8azYaBPT",
  "key7": "3kZptgbbyjimX8XwDA3Y4weXoVCnyGPcb27K7NzMx7HWLMMscrGuCcT6sX32jbBsTM7MAijrCvfCxBMHumpkXKdS",
  "key8": "P57Sv7is4QwZgKH9wKYmn7RH1hwbkWTgKoFQvm5Y89qFxXNtSURp3zvC7TeKdKP4JTy5pqmvSHayn5y8JsLWmJf",
  "key9": "yGDyNq7bauuQDcvfLJyjGRVPu3o9LvahmcVkPEGA29z7NSshjE8nzuBiudPKviyggHrXPVGJVGYCnLPYaumvLQe",
  "key10": "33CspMZrKoVj8zddynVwVURJ1rZz24DqKrc68wqCubvhsxWEPn7zaEkS4tLP5Mit1cvoQirs1UDESgxfxPn22PzM",
  "key11": "oNRXwDjbtKU3CTLc9UCnntRaSqeXmnAjmct8oNmhuEmi7XEhV9XeiztJDCgSRcKpLTSBF42SiZedrj1KKNbDdcT",
  "key12": "2iZMULPVqXc4rZxi3s4xskJ1bfM5aF2m76MdfDRje65ptauhokrzjYTnUGYoS2wGLtD4cx1EfSi9cTjMDC3PUHb1",
  "key13": "2cYjbGkzeJo8Q45jPMDSaWp9aSLL8GT8U9nL1StSqiTVZvgLqBWAxR4TYR7wXQxokkvoP5YX5uT1EJR2GGsLPHbt",
  "key14": "4bKfDpc35wSjdCtxUTCPkNHYU3eUPDojY3LsikxdxYnYraM97fwdnu84exf3FpAaRxKyy69RU9yPVqDTLMUPgMA1",
  "key15": "3U4aNKGrGrs2pQQQPaNhciGZibe9neHLCBfyfzNMLhFnnmc3kMQ9q52QLAUHLheLnqGykMtpSy69p2esZ2VDegKA",
  "key16": "3wxXHP3a1B6TjuiU4pLfTekNaznbUDRUmc9xL4CJuXiJPcDJT79dhZGTiR2efCsWLmz7bfBJPHDuFixzBTZB6nd9",
  "key17": "2BCdt4vxqPoKdRTvf3Guy7cPkeaiadMz5pBnJqLoYAN1kEHFp5jtGv6e6NfjpTteA4E9146dXGPeiQjAim2GwPty",
  "key18": "4E5Bj3HFvgi79ni4vNGsnk4VPrk43wNZmQ2t3bNg5S2eZkjoY5s3jXp1sFhxKj68ZdNFSM4VMvKAbiLixJPnMrpL",
  "key19": "3qy66jFB3bF99thxJsnzthHGzq8SFkXp1yUPFr9hDhF6v8MtiFdpXkPdL2Wq7FE4iKrbtLvkqgvfDi1sLF6Acars",
  "key20": "WsYbaBzPnDZ6EE7rSfkfLoB16Um8yyyr3ZEH2cmDsCACCaHYLRcUGkkfwQ7D6ooKC9dUENiZwofdwhKmmopU6a4",
  "key21": "5zFvjpVEAC9beAGfUK12zier2Pxw5pb68fp3ma2netDcXG23jHUHAEN79GyyCWD8d8DmxXCttn3wfADeztkr1EUi",
  "key22": "4SAdxESWhU9t1WnR9rd1SL5pae93k6yMaq9j5edxsvdBFyuqG3JpWTb9gVzvtg9QuofvdCXGUgBjzgjYMyxqrrHr",
  "key23": "3oJiCv5tXXMefuKPqPEaT6F7RRmHqBjQ9L69fGBqB9vtRn5RzNNtT6oSyePKu98YZT1NU6dpzRtqPKYWtG52PDPj",
  "key24": "uFNhZypGJXcZRqu5ZyVxT6dT41P1i1pACgE7nxQe2H4bgQweB1pGJEhVY1u9pAfH6wLnriLYsMqLrboaACB2Cvq",
  "key25": "2GSLu6wSnF4Nc3S5FtJDL2A78FeuUhdsE9uMGpRVvud7LJPiETUa8tHDA2BowgowEmxzQ7dvKs5azMGJB4vKpXP5",
  "key26": "4VUJFoczdtCV1YwnC7CJ1aNagM5nqbFXx39gewrwwMoNWDyFYiSzyFCGTNSL7CRX4y3STXAFcZtS7p3Djj5TFH7j",
  "key27": "5SPcHyJTcSNr4DC9wBw6nk951YG4MFwRkEap7cwU9MgErfhipPyCgrtfiRQhsgRofiCFJmaLmeVUpYuhnpGgF9zM",
  "key28": "4BjrdZS4LR2vRj1bXVEi8GFCVe7WZN5omC67mfWfTMNh7s8jRj4ft3zbYpaREXKaBQgBCoQVn2JayzTgqZwiKBen",
  "key29": "RvCCQp4naJffzVYpqVdYw7UGwnT7mjXoApivKN7DvtDYMx5iZFXgP3MxHFvrtPXKdRtPiDdjNb1fMk2dswHEh59",
  "key30": "5SMzr5Jx2ceZ6gVXksaXaeth98gX83AriKKvhEoPWoiP5KyAuYaKMkPB6RiEzfpo39o1X8guzsMYxA67UdHmzk2",
  "key31": "4n1Aex3xD4C27vgCB24Woz1DsA43H1Kr42d2h8wJjXhwhhASs63KrhbsCrd9zb6vYFz2icSuDQURoRio2KMmCQcT",
  "key32": "5UteXo2bgFhMjeRSarKgBzLaGqYBQMnxg1yxLkZXRdoTLpHhzbqDT9QYCCs6nB5HjLzVhEb9dfZBw7VRzgt717rp",
  "key33": "5dtGYbYFH5D4H68ST19A5BcTBcwVwARSSpvkGU7rPjznUfsqrP3tzc3NbqMtbM3J6ADUfPzjrvBGj59o3sp8BTyS",
  "key34": "TmCtCSpnDNkES2JRd27yzvZu5kdQEvhqjR8qCnHdfPRsohwoFqvhELqZEBMV4s6KmbCTQ6W94CKREAjNLoJ1sxP",
  "key35": "5G2uf9oEnHDMfpnvYQasTJhVq9r3jEH3XBsK23riZeoHTzzKmDBVgkXvgXzRkbVWLe5k8QMJWKsaKxtQicSGCmnu",
  "key36": "4ZsZni25D1efgtfA61aJChzW5BuGXw3qG4iFfGN1SbeL4kVcfh346jWGB2rWtDj3unnafxh7HGHjBhKdFYCDAZGh",
  "key37": "3oRu4VMHbHfmmGrrcTRcJHMojFWrFjghEvT5FnSQZkLvhpyhmP7akED3b5DwS8via1sC5mn5qx7HdEWDCuqZML5f",
  "key38": "3XPvinFraUeHpDYF6cczq4SUFjFJrm9fzHhoGxaLiA66BsmbNAuHt84JPMAFBD6Ro6hXaHTac25GMkVz6oeKbQui",
  "key39": "5ABduhSXznVCXcSw3GdDWmNb4uhK3WNEwjVcRnLTdFYLMZoA4rSdzArp6NF1pgEFpvRFgMQ8iw6ydhHT5kjqH6uJ",
  "key40": "5yT4hwRKyS1DjKSGUfeeicCnvCQ66UBaazj4Nf4DVWz9VEKrLZVrKYDcnX3v6vxPCuqd7ngFokrWSJNNAvGYJNvt"
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
