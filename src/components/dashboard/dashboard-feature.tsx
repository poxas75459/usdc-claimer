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
    "4nQBsjbdtMGED1GbcvG4B1eManPG1saGADqriu6PvKMkdSaa1NNa7QFY2zNN68GGbMJFLL9dxPD2ZuQ8uMqKyztU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzbB6CXYg3aVJgGw5GyQ6RtNYX8cTJ3y6TE98gCRiHsdfs5h5XZes9FTinvyUZ6PRJ9a2co1tAWMuQ4iNgNK8Z4",
  "key1": "4cLKvg34fkahiMSz6XyME6LF4bHeJFzqfzA2a5m58L3XohXNtnuCT9aXcukeQjZAZhdRj7MxCitYHJArBGpN2snv",
  "key2": "G4stZTqw4DQMKbmG5RcbLzsd2VHsySSKorG7BJ4c1nbUN3j8yZrZ1ZU2mMKbtbaXS2qbczJEAYe4jfQjcxFAMyV",
  "key3": "5DURqjXBHEYrU7sdW8BzDwtD4Y9BAqdX7bT6boXcgCewUps8QERRoC7jpgyN7Ljn43NRmBp4AwzQ2SX9Hp5XbFYi",
  "key4": "5oaV3hGB7tpZeBQ1LSBcTR22UtYNUR52HY6aT2SCq9X9ZXMtnsjJvetYUtENHg47NHVdP7pYJZ7yxFLpqn4D8X3k",
  "key5": "6LYp8Rojqcut8ywwZLBfdLfAwUqy2VzVzTZnXkG2H8BYq7Sjgi69TnLgqByJU3G7kfvbhojjYJfBu2PkimpDFDK",
  "key6": "33V5ifTihBEgCYbxoBGTAamURJxuS6XRQffcw9jzKNCd9Ce4vaBkNT2Qk9CcPn3BrPybPba1d3pWZYMBUrdYXmEu",
  "key7": "WiNHvL9h5bVAiqof78VCPMepKwzaWNBvWqGKGX6QD1U7xGkN78vRntbFsSW9516eTPq7A1T5JCRiA92zdXbhcDJ",
  "key8": "2xFWYBxMV4Rk2CX5kUfHekUzW6N5ag9C7Akbzrc592ZX54bSQhcuVrkwVCcYJD15TJicHDcHXhwjr8poZuB8bry2",
  "key9": "43ddjZ328WwVjawYwJxXSi6FXNmbDZ7mixU9yYZ1zSAFJhV2biZSS25jJ51mFYhdF1rbo5gxYogeictLBW5hySPw",
  "key10": "46Kk8r2ovv7tEqvSkzDtHzvrvBcaHSNRMvZGcXotSJQkJNXtZTYQ91U8R5BMZ4PAvZYeipUrXGdKre5qU8RRtJZ8",
  "key11": "cnAwXJjYHXLmCXK36k7gxkXRMzJDdnHEKPyFAt35tCxaTJ3xEz2pZq1XMKCBnumg6y4PRvB9VkBLAjZE6y5Ju4L",
  "key12": "4bvfgdymCm4ddE185yRY8E8qf225F8YQhuVasn6rJadPu5Xbv9THYvWAzq2AFszqzPHxePRJzu2owxXpY9gC1zYX",
  "key13": "DjZXqZfcis2Z1knxouBGy2ivTU1aYkokXM7kthoq3g1qqtK4BDgX9Q6ZeiefosCfq8uvAo6Kv37jXyaEbb6XL9t",
  "key14": "y1LYB1memhqRaRGSUXo2oWhFtKGxUQmnDLGs8i1FVQmQFqXxrjAx8H8L86qfffUhZaebeQFNMiAGGSfNy5P2aRH",
  "key15": "iFXVLnBmpVhUij2CQX3QFP5Lpn73ohbjGtTiPiUuUy41NgfJM89zm9MMEN6wp8Vfev5XP8JzGTotumanYdLbjfq",
  "key16": "4uDvEHbbaFSqSm1qR3Nbx1HTp8WWYGMLyszxBVW5iJJzZ9TRvuKvnvCfxyQVSZ8gadintnxm4RS5urkC4vksrfbA",
  "key17": "GZ9ugSDNvQ6PWxt5LCvhgWZxSgWRLUbvYfdkaiEsbsDZS831AHa5wTN4Mspxhxnu5PhS1a7nW1jyK5Bj8CPp2sf",
  "key18": "44n3bwXrqhDTNsvB21mMeDwr4ZYufWWTRq6LTM5qxWY5QJfyttpVqfVqkrf5LgPbwWVXRyZUi3WGGLZtDqU21tXb",
  "key19": "sYGcf4cqPF9nqwbofdrNAeyyz8NQYyrhadrdAdGxLvgLQzPwit5AoPU2vKiAxxG4u8xNKZK6Ho7cvrsWw3uCJkg",
  "key20": "gagzNGZ4qNUJ7K4FDujY4mjWbUGyqhvFDtPEQsqTBvfWQ3cYLEUMHw8RTQXfSKp7jsSeVBBeZJmnpFQA1y6EUP5",
  "key21": "2R8dqNbKvBvK35gm9L4SvZYGX2MNWkyWQRMAAGpo81KtZwgeajgMA2diJL5JqXj4XqUGij8ep24H769yWgfhR3Tk",
  "key22": "4JwNzSUEF4X7BxMi6r6DBoR9ZEfNybGwvqMoQZYANpPvzzwDWrvpN8L37LEUZXtFZQ5cDrCMZiS2VCKL76RNbEcX",
  "key23": "4c7HLzAxbcVSJQQWM8RRjjAakTs4vUWMvDAZded51EJeLLHRhNGm5FuowDeMFozEFpMpNjzJAD3K2BzbpYeQPPB4",
  "key24": "2A5v2wxNUAQrAKE8MuDDwLKaqn8codYh8rCTCZPz1RVFd956SccLMieijNUYWECvx6rp5jvc1iT7nrGAuR8hqK1G",
  "key25": "4fJHqbiybkAw8rcn7rjifb4bBHUWynyXoG1UAjRXNWPLAvHGSDUD1dBe6Eu2h5y69DDQcqmZFSyyoiBL6hpAN3en",
  "key26": "2n3xG3G4ufHeFkydXCwRqHqW3UPmoRMuGLyRt8iCqZMPbmXMnRxJwcRt6dgaMQbx7xRSWRyjspVDGD4DYkGTK881",
  "key27": "5FBoEyoe8pzuCNGSimyRHLi3dsr5uiPGuHg2jLPKgM9Rh1umtvQMzmogC3XeyqFjHcTKJrq6MDjqeAi1z9acRjkA",
  "key28": "2QxVhtqEwUTdWPDJjFWdYQzapEcFB5fWs5a3GheXjUEkwbCxX4z3hkHbPPf2L4KxyNMvJnXyy2fXw12R7FJUf9Jb",
  "key29": "3tdTxFZXX8ykcEFJ2PqvQYoUZH7ZydZAQP3JopkzqNgqoq3eEovX3MMdDdMndQAGi54aNHdikcPBGLzoA1FScBZ6",
  "key30": "4CiMYQNAEATfCSfu3YR9hes9SCmdHSdQeWyyRh3fZJ1pHzjDYPc127DEdoQcXkex7q4sBjj8DSeV5gz5pv8B2HGx",
  "key31": "2nyb2VQ7rz3r6nkrS9GcoY5vyoLWrPZo3Nr1ZRsRZUkCkEtduAjo7of7bCFSxmCKbfMhBLDCFbVSNXMdkamAKg79",
  "key32": "63DHSyFXkHktJhUN5fK1F295uLH8M4UYbix2CCfioFHXq1Cwy94f7Kjs3Px4tW1oRJ1G6Cfw8QRdSTashYV13mWk",
  "key33": "3sjVwTDtUV82nsXoUB2LCRVGdDRoRbwkxmtzsnFzeRi44r9PomHXwDqVNEVKhoF5b8v5oJfYddijRMtBTxEGgifK",
  "key34": "5VsZjXJQ2qKNSmo3cphDN32jJP5K3ixesmxdLZBBeyKgFTxtBFJSwfYpGp5E3KprnzG1RCaBAiK1EuFK6sgAQzQX",
  "key35": "5FSoUxSzqHtfpubXstmewD7wTrfR2fmv7PXPkgS45SSXxKHN9Rj5tAyg7sFoaWyaN4kVJ2Ue2KtcfAzr46zPYc1C",
  "key36": "4uQbdvFsxtdoKi2ZdMYkEChdRhKWAJ1PanXbd8RQyKw92RHpK2VJ4cD1sCqMr3JSGgNadF2PBSR9ch9MuJXQTNsP",
  "key37": "2fbBbujveVjtQQwKT8nWzpXpF538mMjLU5NkodQ6KEK3wUEYdTRp1TBQk6peyTobk9c1UkBaddDEL21YXHnPpRK3",
  "key38": "28iw8fQJaYyRioqrpaMtLhdEsKKTqnwBybSzeCgJmKeKBZcj6MmeekKX9xw3H8J4w3ALT4yXu9feGB1dR3PpvqPm",
  "key39": "2s8WPtadz9wgCzDR7QUFVRgSeH9t4fBgs3e66YGFch3vfqKg3hFNNBWmsw4qLwy1GbxKR35JnencRPgnc4eZunfA",
  "key40": "WnfgsfrkQGNN8A7EdTXFKMo8gHxLBWF1MQq444xLvgLSBiyHLienU6f3t4C6sxGzJGa2vvmt92rSTiFHGenKCUh",
  "key41": "3hnaw9YJpQ3hC6bJ6uPc3BnBmaJyuYXfxPxP5Fp9VYknhdLCsJFSwokdARoZQHv9u9boY9jLzo3t8EvRrYSAZzgK",
  "key42": "26QFkfHGzDVRujKJXuoyJCmYMWmg1HPwHfmKqZmvDLD4PaUnGai1fLsTMERFu1Fgrxh59Qjx7C8QSRskqCCKTuZX",
  "key43": "32MLC75DVZHEcJ6SaG4GkQn1gUvSiuJhhALQbUfHnwy9LBYzwLk3urFjRc55MrVFgdyC1gHwCGXNS9JsEHmc79bk",
  "key44": "3WetMjQhBbgKs1DrQSEYYGHWpM68ugxghogLmnE6RENeRoLLVpF82BycbBrPsXHSykod5s2nnR7Wyd7gqDKZmRSE",
  "key45": "9hkGhdbnpMUzqDU44E3xfG8t34hX8jjiU9RWbD1eiYR9vPekdJG1BLkopKg5HLWgeRqGN5ow6xYa5pEhtXYPnYh",
  "key46": "5kPD5NuJ74VqSVivzSyuMCTVXTtnwZqz9ZJV3UJWpvK7MjcFcgWjdFRHhCEojrw7nerz7GXhmRCwp9FmUBYLouSa",
  "key47": "3PPXV1nEfPbxpVF2wDM6DXzSWTKcE1YezXmWmMiMuq65tg7mQLaA3B1iLELUnEEMaFBmDVitjwMPWMF8GsvTmXe",
  "key48": "5xdkYiwhKg55kDNRXF6X5vJcAr3fAsfRnNrMZSDnKb24vSVuSXjXvzcRyAM8SWoYvEBS2QKRMPTJFuo7GT1BHFnE",
  "key49": "4E4v1MaXQr1n3jfkCMP6FnTZt7pRgRo9jffL6AUVCrPS39oKrg3pVe95S6vkHXTkBzQVDYBLWnx8zutE1qFZPgBV"
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
