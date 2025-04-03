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
    "352xAsTypio4xDoqFJbCJM8q5GTE51tfj9o3NxEWJi5dLkhxQKP4qAWVPRGXGFg1vQJGGBNJLcFCC2tyDTcMvJkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaUUaGHa6aUcZnaYVmxS8tVFJsTQHyGvJpMc6vwmJxZ9zxbHUBMJS5MiBaiaPv4FZFcE8H9VZK4ggN6RkBWvMLH",
  "key1": "61FjbNDXRSdiXCGoZdsb6H2ihzoRDY5a7S2kiagTnHhv3NagBE48EWqknu5qk8hinzqd4J6e6W1paokfEBJqqn8n",
  "key2": "2QA4hMTLEdFbi1dKbzowRPJzYYTBHRkJ1DUSqTmbDxJbMgum8rJtda6HEXqz1dyxK34UoqMWKp6AmPuTGG3EsS18",
  "key3": "2ynBLEYhKGChj44rxqw17HGUfiStagkoS7WqgmhLMG8RLy726xL2GpuTvofD2WgUjg3J3HnBZZrL4vMm4cXkLKeA",
  "key4": "5USHCBsFUiT5CWoY5XEvWcexiRHB54XvDmn2D1hHe2GEL6pDbhnio5z9CkfnbvuEJ22x7FLPuJH2rhrip4o6QJvs",
  "key5": "3wJzP5K2i9FmTbJTvWSAhqKA2ng4Hza8VMj8oDjHQvsQP2KmJnMnAbkEhtcmz5Kbqc1BLKATuHPcxr121a2puKzd",
  "key6": "2GdtAqNyFpsgKfMi3DH8rKdjc214fSqYvoQNEfAFZA36eRt2zPDTSzCE31Bi9CTjSELfUSb1ABVhtQ4m5WPxVeiP",
  "key7": "5Kw5j9QTfJX5qgFKGKk13rPrDDRNjzxjjM7F74sKTM8enDJpAyBZUcbjw9ubur2Bm9JjXkH9r1dFAQ2cQEPu1UjC",
  "key8": "ToUMWea95eprB9AFFgAdqFWNCrsw35GJu2Ve1DipUp8pVCvFYxqLnsZL7QjWDsBXDU2xPqWrZ6QfqcdsHXAMjXu",
  "key9": "5FGRk8uTuDtEXobkL8U7MD7vSkfxUT3NGDGq2ceozm6QG5gG57FfaDWVtTTxHz737PQiMFfxnh1nhR5z5Ns5YZuL",
  "key10": "4mmM5JpwQLSgkrK2Kt5xtxCe7kYmmwxvWKeNQyKPGifHQwcsDBBLkZttExNox19BAxNYv3TdFaW35DSgkWLhvbTQ",
  "key11": "23ZH51haMSzeYNg1atyJZezVrtzwXBoxWyPra5UDJWxVgVNMZpfn4fyp1dvU4U1PopcSo9a57ywfrx89U1T4atg1",
  "key12": "5qRe9hQTtuoZ42WwmfhoKQAetLH4UMA5yxBmDbcudgSTBTCb8fLQ88m4oCBsqWhGgwL1TFLUJRdNT6GmL1fP2j7d",
  "key13": "4QHjrdsCdWfTTLiyyg5r354vYSJaA95x3rFTRxmbxRbWrTvHc6gVyvXuUKd5vmZPXgeXjyJ7wQHakkcP3mCyP3DS",
  "key14": "2UJGeAVfgebG6SpWRBD6LGgZkBPxfdQ1VgEvFQfwcy1gg1iCnDbjWJAnV37zjyNb7ypmp6BnSwdG4HmthXeMgfMX",
  "key15": "2xm3EAqTbGqwGv2VKy9c21ZqV71t62kT3zUjgGH77VqxF7FgH2KvRBkmSnDK8AnYjvJzeopSSKHuCV8CZD1v3nC2",
  "key16": "4iDAr2UPWJUv5bcMY5pyg2yzMRgRPcQKdE3kR6zTVnp7Ko3JBybxFJntU23LuBGWa17vMMCPJWNaW5tidA16rY9i",
  "key17": "36TS8a8Dfp4j4w9sQT3Xc6HLgttTXuir4JpRQ8jf5cEMW8yHhkb5nwRqQVZ7eqRQQRfHwnSusdXMCEss2BUjrbwW",
  "key18": "4FMTXvQdWwrPVw2DmCkq6qn2nt5uAMYGiXrEx9XbebU5j1reZPGp1gtie3aKkDYDzyVUzZGQirgbiEj6X63C9Bkr",
  "key19": "4DD5k1FWqxnRGVBfUxxdDUfHxKtAasmBpdVwFhGcfeKxmBWJzrEYAA3UNciFV4Wvcr7jpNzqZxCdUHvEs44xuwNQ",
  "key20": "ogrsyfDpyXzjetbKkynfPniUGz95mxMRDWUtJ29bvMWSxWYP2mPmZtan2uTt7QjwE5SdWcHW7AyKM1hzUmPnR7V",
  "key21": "4papt3cTcfsVxmLURNZbpTH94i1vN4NM6qvGybNykuRcnJST699imfRjAsipRZvCPyP3VgG3jq4tgeig9S1778UC",
  "key22": "4qsgBkF6MgaAinGBb9B4DjovXt5gFt8BoVceARvkKQYTpp2WS6jJZdfqQvpvPVgZ9VFqFTdJRL7CNDrdjd5nffUc",
  "key23": "5pceeKPd2KWZ8BJpEFg1cYhouZ4ke2tEq5Y511iXXoD98Yhy9FTHj6HuUZrZRM7GgnTvzehvkxcMbwhjFagBS186",
  "key24": "2EPm4TwWqPLWFQhVJKMkKu5B8kBX2Nwug9snRjtQQ2iFUaCkv7Jvk9qxYNEDTTZBnUykWgJTemvocCzpJWwTKPju",
  "key25": "2dnH4JHBetXWnFHAn8D6aDViryHk1tZygtkwdP98oM4j8PjgrmMDzs71kdaafdqXYBTbaSFK3bPtCFVp4V6JECvN",
  "key26": "51u3sE9MRdfCv4e6vdJQhxeeD8tB1dCWB15bLtpx7kyQUvWg4tXBn8RTwipM2WHgPBmgyncdxjm7GMvKysJPgKLe",
  "key27": "3ZkUGDjJjzti2v3S2njuHqb7HHuS2FS23PYR6Jx456fC3cePn1Q4KS4Q8wwT532x3y1i1W4qJaN2vrXJ5fvbfaa6",
  "key28": "5SUWfWEGfyNGrTL8GbNHmF3RZYKMCDC4XPeSW4q5TutM6faavHHP7wT8qg5kjomvXMNb8tdmD6AksGnyVmpH3NTb",
  "key29": "3kDc9GdfWttqGrJ2v5o1j6nMLVYCmDGCBo44DbKj9Beucnb8GkfU7VTmGavPLMMoR4mhq4Xt8ju6q31yFebtV8kH",
  "key30": "P4eX4SBADnx3rSWH4oiBQPKPjKLq4tbWKeLd1TjFytLL3DkX2212C6huULwCPztDiw9SwHt3Pc7ipMhNXom9qhC",
  "key31": "2YFmUyw96Aw1ZFYrmaKjKgaAzEEYjZxo95xxPfjJkcrUMmDpqyjdV4fn3mUAyvEsmy4vbhb31VpRwLiUN8UjShzj",
  "key32": "3xFzwx48aQRbhorwARKMkcYyNgcSxkrZzCYaBTDcFB5FtpmndzzzN79U4efc65QqqgLPdCEBVJ1esZoxN3LqJ8pw",
  "key33": "3NbzEsSFAccJCzQCSKMkZpzNc7TWBY2hPyM4AydPy374G7bYyp88Wyx9h7Q38CpU4xhvaQ6UxzEzmGMkK73K5TG7",
  "key34": "Q2j2Ck88o8xJ4WNPAcojdLKHYQXTLJPXaofCT8SwTQJ2G2TcoJo9qao72aGa3mtgthbKdsa9VyaDTr4oS4j8qga",
  "key35": "5viXho9MfovjGYYdN86s865Av1ePcGmdvEFxr5o9pBoHMASiqkTJWdJY3Z7eBS3w35RnexmzLjvE2Ns6WS91xKVd",
  "key36": "2astUk9Ge8AH73aUVR6jaRguRyWsrZtKNMPYf65V6GMwT95wetXZcb4iAKkXPuBMQP4TTL3ajRABEvaiccMkdZqk",
  "key37": "2AntdjU6d9y5hiktRUuUucSMtJ16rMXgGtoCD5tqwN8v18pPxhZCKTJT7gf6fXai1aaD1VXZXgLs3T7bBFgTTDZq",
  "key38": "4Yq7SgKEze8ESBttUBjUSS2d8PmGtKP78EaQeCS61keVsuRSdgboDsAeAn43AvH5qve3aCBcR8Qc8SKeBRf4nKyw",
  "key39": "5mTjLuNNz2FiNeTdFf8NB5gyPcCDrLRCbvanRH4hcELSUvBzER8gUfRnVaKJB8WRGMKyf84dbkB1mT9HMsoX17hi",
  "key40": "5sLCb9jRPu9sUeZM7LH1EndiyAaifAqC13fKwZxHEeLccMVNaDEEy58cxfgX1P8UEhsSDdibX5HHgHbmdhGDYd5f",
  "key41": "8rTiZWURzNVyDznGhz6gQbJpzAQsP1TjEMRpChew8KMr3mZrRTUvJjdX4BBZMCz8UuHL7CT73qmEPbQ8xKAcr39",
  "key42": "8uA2trUWq76ap38oYzwpBfy9mjZRFokQRsQD9adE2bM3uVCvnB4yw4HNRPBsodqQXxZXvFmCb3UKW1CzmNVgoR7",
  "key43": "2QxG2LPV87hELac5GeJxs9SxeMVE6gP3mnenR4wbDBNmQHmNZAQHDjUkFmtibf5LrcCTgeiwUvw41HtGEquJsrSn",
  "key44": "2VFbQvScV9Xa7X1Pu1a19uuuTGhPqZuEuXPR9e7iU71um4rhJsPSPvC8iV2eVxkNysGQvUfZNmYraVt8M51yqPeB",
  "key45": "2X4P92m5zxemqaraoSgXasx1XMqa4EnHdMebWLKodMDYudbNBpRcYx2dSH6BnTVAuEzkMWYuPJBZkkmY5AJrHAv"
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
