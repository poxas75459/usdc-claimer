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
    "2rdFwjTZgbKjv6vCdMoXdcd1UrC7qgFvPgYcXCMaJc3Cz8VTF66mjT7iPVzi3yMCxCZpDBPFexC19hDAo7atA2Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tLHBCAmcYKenhJ5fUv5BU3RdAmevq9SGapzyMpy85cPj32BoYCcrMjTHUPhRREMSiJA4u1RU6dkT3ra5u7NCJEw",
  "key1": "523VU8rzktcwAahFYvLfx7zENXqMiR5bXt4bR8NDf6f8nb9gQacJhFCyz1Rv1GXTYN6CKY49ZMSX1CZm9dJ9wohw",
  "key2": "3rXoqH5AqvWhZn65YEt8wjh8DXhFvokshZeXpApoSD9mfEKQCBYzX55pFfXNBkNCh7eRSBHC3Mqi27wbpNN9r6Nx",
  "key3": "3H18xjcuEogiRkx8Quqje1wRVx2vZquMSmDFTLudk7ixp4wfRqRSVhDRpSdjcJB84GAavw79bvpMSoeBA5xh7suA",
  "key4": "5EHpevUqWMg6uhqEJKqecUATejhKsC4mHdTGAd4U4ge6CwUcSZPdPkkWzidsSeYsU2eGY8aTkhtw8jXTzZiu5Q1X",
  "key5": "4sgthmKBGbVGjq7ozbp3iAKn5jUgXFCYmLybwBXFmHBPvR6nvu8TqdmCWbMP783f4XsnmtA6Ct6rqpoKje2DekJu",
  "key6": "262y1CT6PqfdrBYnGQuhqqNtZwUhVAKWndqrtAeh5aB41NF1b4cxEH3oCoWjtQTPAg5EAbgzauByfYW4r2qYHZRb",
  "key7": "58C9hoHSBFfioQWven1w9HaUGB2tsXCB54WBYGVzNPGEy7Fi7y4UytA3644hPfrYxrfvEpdUeTx6AZLTu9bMpakD",
  "key8": "5wfbaEFzDmyiVt4bd5UmRzrmSEKKABwJDLcocu31rYm8xRq2Yv8vJDpmizQZdiQPDvbTvx4pRT2r38sXsJcSP7mm",
  "key9": "57B32YjgLCp3UFq52EMkkqoktMFkgDRga7RBWQoLXVwunGMZTEoD8sEHMNdeanHDqcXtQbuvVXTmPMi6FTj8jbvW",
  "key10": "57ykdcCS5hW8eWVCC4WwXpY7LuL3pKAKJcnTzoJu6kUbBZc7a3UMeXc8roBwDp3D3QkUKowiS5oVn6nAb3R7rbK7",
  "key11": "5jPENwhaRV9pUQVHRvenNkHHPDawvZ33oSqxvnd6J6gPBQSjk2s1zkwZ6pL13CwegmVvbFFrd89uysiz5B1Cx1fA",
  "key12": "4bMkvjyjYesQbfBBh44VjMqgCk5rSiNBWTTeHY2FaC9YfbZJPXYtvervcKydHcGJbAw7yLFqNHsLBhw8udQSxVwZ",
  "key13": "558RFWf35z1rkjN3cPg91U4cvG6nfTjwSXHV8zJz6z2P8CbmKUE9mgxZJB6U3vzhmLNfBfyCntzsrZic85Yy97iy",
  "key14": "jDhLfViciM565k1fgvZMmscrabvyfX8BFPx83RFw6UUvxjCrp6YHXBLrNSnSvVHFXtedP8Xw1D2B2QZ8eYPE6Xk",
  "key15": "3i2MoDgLbNQDqwHix1bLqcKZrMt6R2kzwjNcQrPsHFw3uka1fraGV24rk5RXMweVzXpZhTwh8zFCEmYChQniRXd6",
  "key16": "4c6fR2rYzHNQpynJdQNR9ojU7Eg1JcJCnMcnnyZ94hYKooUNFxTrsGDuUKSefWP9LDVRLWJXN9KCDC7FR5YPmodU",
  "key17": "qce833TfLNgoebvhGFGiaXNPdW72ncTHb6gETCTJjk3t2DaJ68iv6Kh9AoAV35zWkn2TYFFEwMrD6v6RGK2saco",
  "key18": "2we6L6tWFu18VeM19qD43eyW8jd8F9HzxBJXdKwNAgFD1F2fjMWfWZqVdE466hW18wfTRvum2Cq2UGTiKFHShz6H",
  "key19": "8EmTn3tBYprfWKSB1CFbVjBAHifDeqSEupMw6zXmVFQmX2uPe5dZbyFWq9ihWGaawGZW1j15msQPKNW8mbPYCE7",
  "key20": "2QMz2KoBPpayqdX1VBjh2vap7h6pLoQa3kUXfytQ91k4NPGydxrv9fnMmg57bBANSMGRm6PD35RFbzAs5WhdEsCW",
  "key21": "3Y2TsLpQbfU1jxZRUjvQ49WgMQr87MYE6S65DQsCxLGPsTGzeDSSQcVNVi6sctUrGXsPGjWiTzothWKYESYYFHFX",
  "key22": "5m87ujFPFgiJ8kAuCmMBGUvxVqo2AyDrYPQCEM73NSGdEdNESe9LuEnz8e31MxUygiiYcQVrLTHrhiHF9Rtjqicf",
  "key23": "2ykF82AZaTSj6TAh4dKgWbZSrmsHoMjEsABbexAZrfHEN571YUCWxnk4n7qKts3dvYHuUctmBmPTSttcurCVEpJK",
  "key24": "3HwStKvPSZYTc2vnjKZukwpratgV2PFBkYLaM9czpYnkNYo482NkX76jtsVpVPYaWidKfRJKeH5VBiirG6NAycYk",
  "key25": "V8PtmgkCQoXkkxMZ5wTCF9a41dNZaJr5cvHoTATecmJRFv7RAtHtGKAMjH2aXijR1iWEvLfMSkXrzuZn5nejT5y",
  "key26": "4viTyVsc3gNmfwh6EPL1DWVesb54bVQRBmbGLpksJBnNGZ5jHWMsEU2ucqb3yBsedxxmhFPb6mBA1TULLVw4W541"
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
