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
    "5e9G3Kn941odNnRFsgLEvXDCnmdj7B4sCrdv7ZU1bksYuiwzskCPL9o4sgpgkT4oagw7McJq9ZgDVcyqZBhyZwSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUpANgQsvLtXMCZeqAQTv19Bgfxn6FykLzHPKwz9d6K65LbtNteeYdzfdUPbqaJSWQMvMa4hwmiedHBo1pE6EK6",
  "key1": "3wEynG62wFNHhvFSPRN2p1bzmeUWVVsiGqTnHGNBRKwueBpMt2edLFdm4GsASsrPYb84Yp1eTayHMaFri1r9C8wR",
  "key2": "5a3CFwCgbFT55rHfzZVju3CQxHvcydfZk57NKGg6RGdEcr9gMbf3zPGrwy5gQp5rQKbxfECb8auFf1Zz1vEJEbTr",
  "key3": "4tUDkvMVpwmGZpDfNcj2BvhewfDskoXioGKA95ccJJDHFNSADWPY9RJGWxMXNwJNPgzMEK1uTwyXdhv34b9BG7WV",
  "key4": "3QS9vH5kAZekVdsfphEkaL1crmgfymefE5NRBqb8ohUYChCMap3CnS9Rff9mkpw1SSc2BL9Na4nCoA2Pnnh6mY5w",
  "key5": "2doCqNhp24eAiat3RKtqphLZan5Uei4Eq3DHHevFdpAJ5a2MSa6nwSnEGQVUGpfxALY7SQazXasrNV3AGdjYKwGX",
  "key6": "cKwNmzFnvo7t3h2ubXGJ1G4QYgHAKDz9toeUAL1QDqpEHnePigH5wzefYFGqXGwnU2t297tyV6AuVzLhzJQ7mfz",
  "key7": "5ounBRxRxYyghcWuPXLbK47FEnfSb5GR6Z75zXJPHEXwDSZQZnncA3AtQDD9WiSQKmAXpHnDsdYa2MeHxTSHSeiB",
  "key8": "2a5rCJjmwU8r51obZ8EXWBDPTvF4fnxa533yBVMEvrsGkS4wCQ8eXT9YryWJFNqyHFZ6SfvcRLVet2JgDiJupv6C",
  "key9": "4EtD8x4XHpstZYcPv8n8y4PsC76kFyk8jursvfb6QHjXuYwmbbfETojJSHZpY1VxpppL1JmigBDyCYZUjzzo5qfv",
  "key10": "3drgBEB13Sr3ak7ZVs1WSGkhDM6iYieawQ591RzoruK1nDysKCFwXBkCU9b6Mie9RAiB9R45U5EdijCSsKfuRRP4",
  "key11": "5McCmdDSdkWybJ1Ad8g7cJbRBXQ5MvfKRhnkkeZNVKmRxFeibChHdeXcTusa1kkam4JTzHZriWh9kuBYQQGSaFwL",
  "key12": "3NN8okATMTTU1UKe8U5qiWjasPXvu7ETQhNneSXFwEAPNoeJ4kfcys2hJaZQnZviqc5sdVyVAdS2Ls9noKc3CnER",
  "key13": "5K7PuxxcjcdqRxaYr36bDEcqgvdkD22Xapmi2uPem4aNKpi9VXeDzhMUQMTe6k4ovPb6RQWHVnTamCTCsL52gXnD",
  "key14": "33rqyDzmf9szFETaXAMdRe2zdrF1e5u1piAnKM47TPnCSJ6V1Tppsq5dFP7ZgKbo6fxf5dc5wx2zFqPtcUQZY9a8",
  "key15": "vafmKZAjgx2YD49xK2e3WA6Bz7VaYKkWhWRY9jzo6m8a7swsfF9pYZfoDNmXb9xwuL47o8QwzM4NbTFPsd6rmBd",
  "key16": "5EaRw9dYSg12aPWK1r7E29bgunVGqceDvtBmAYogbCMogagP7MEyqYD1RoHhxjNoYFiVdAGUoTXXJs4LpVByLkES",
  "key17": "5LBengkp7mSJ29NQ5pBZE6KLQEfWq9booByoSZSqp8Lj4UGcQghv9Jvfrwc588cwiuMT1xxgpFYzNkxCBFYS7adX",
  "key18": "2MeyY9YFkYpLAAE1TK38ATrUEq5qaSEH89NdWwTpEgvyAaqXRdGTaxd78VS7gcRoPEcumYh21cmZ6wGLzESx29hT",
  "key19": "5NEGgfxk77a78rysHwcbytGuEAKrA51dn69jtcQzHBYM9jyVdNT5anFDLfArbd1jDmaY7wPa8tZtYwgQbkVSjLG9",
  "key20": "37so2G6jxx3TSZpJq4KNBophSfVZ2PrqK2zFsBPu3XhxYr66oE8fwibBSvmFN1MYSEEgNvq47EqAubzSckHTTj5N",
  "key21": "2Ca9UgN7rAa5eayubbknTxc4am9vD9XtvRvr1xy3wwXHXSsFTsaVbBrP95wG34iKdsVMKs1m8hRPyxpwbwVFxR5H",
  "key22": "21K6cbXeudXR75EzazPDQEqdcFkP64k2SCKWhmvVYCyqD33CPsLqDbcHYeoLNWfnLi6RtgFB9XDnh6cuVKhNC63g",
  "key23": "pr3FM83sPdQLTXrWyQ7zx4MxPFQJU8JEP5f8efCACEUHKE5vy4dWb8DA7Rjv9d8v37wsNahe8cMU1uvbvzTAjCN",
  "key24": "2J8u884Q6cta4Dxzk68A65ixdnZzWBPmBgk6tRtogsFzMwXV3euT7ekWCfJbNPq4o1tjvbYgqTWBAAgSLj1vWzni",
  "key25": "2AMUvxEuMzCHtDvvP8XVCA2XnCTGzRXpjoAhEQ3ajwNH8VttVqTJwNiNWPe7PoyvNkQ2xRcALAdbK5yqqs9JWgug",
  "key26": "BSLYC3X4TfPh7CHfcozPwqCtDJE7fmVV77aJyEUenK1YeV9PbYo2BkK8HUx3voM5Um5XuaXoi7up6EpWGCszBUf",
  "key27": "3QSDAPP7Hkw62DWjXva7ad3Lem11cFaTUFsMtv89xy3TMTnMc4BespXFEKk16FaTZG8TPisTh4YsfK1LpQ8qeJSr",
  "key28": "46GsUgxmV122YxC5sjN5sWzEU4Akm5imNAUHHnDJwZNYhfJT1bhmGnPc7sofPyaezquCchZzDDWw3PJQHfoycPRt",
  "key29": "435iRtBgtBMau2kHzyiHJa8zGsDafL13fgEnFmiYZJQan8MnvGiakKujVQCB85eTB3ARi5cUuACzRbebNS3MEMek",
  "key30": "BEAj4wnCKu3LK6jpySW1vZ3Ky6fpSocT3F4NpteH4HHcYw5EVJ5BoXJjV2RsbHnoCduVfy2TCGq1GprDg51qGjp",
  "key31": "2NP7eUsmdtviYN6Dxnspe4z16DBBmnRdiPxNDL46TDRSHbngNhp1wsaDrQVKcq6cMXC6BJ4Mu6gwuZZePPVopLfZ",
  "key32": "2fxQkrzP4hzBvj4z4JTJDRAGLzsjcdTaPiDj7HrGEiXesF2GAN6arPjhdusedSejQyHwkkNT9zVrVb5N8mqiG7C7",
  "key33": "53kBJAqEKPeJj2HyZHJHEP3nqnNRHUWJUKgYPCoxPKgGpa45mWFLBvD64VpfZGQ99TBPXMKytk1ZC3wrVyDwErqN",
  "key34": "4eM2ZQGrkctaX6QcfgEtNM1i3E8TTWgyJFBgi8rYsMEUwg9PxQfPazQKAzifRaqxDtZ7cP9ZLTvfDAF4JjCJV3N3",
  "key35": "4XuezSTDz8MB2i6V959wXTNz2cdsigZBVDV8QVBVhkLpARqFZotUKEMnvptUyYKP9NqTQcn83knUx5cpS62JHpng"
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
