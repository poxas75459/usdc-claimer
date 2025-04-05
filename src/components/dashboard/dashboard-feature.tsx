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
    "4TM5t3gSDBKHaRnzLcB8joeQkhQj5ioTp2bc8XoiGrT9tK86UPkz4AuMcT3U8CB7NYUnLf3LugAjw9uGYADUe3ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XoJoAomWNT1ZMh8j8GJVmrF2QV8cvi6d8Vv5BPKfMvjFJsKVadeybKyLqraDtgesk6XbkfWZzX4Q4VsDsotECRV",
  "key1": "2HMMRNYHVkZcetbJ98FTqyEFmsyeZH64rSU4HuWQrGFvJLGs7aaz7451vf6kowpmQ4HSLzgBktfDshCUEZS9iurt",
  "key2": "5VAivp1qpCEmNu3sWXDHe5F2hHKnvRuouYMD7f72h71gkzPhjmLHt9wbwKAdU6nMjqPELSBC982xmayxkZFGsjFX",
  "key3": "3YYueHMfLTEfsxoZXbxE4yyXWb3z43iSEuNMpSqQxGZsMZvQPMGbQNoDioQeXPg8D6Ybp11zaPDgV5XM9bFRhy7K",
  "key4": "5hQzsiPiEA681uNMzbzCYG29edktTibYjAb9jFWGbMcnF6btMByFAxMJwseYoWnpkRH7sRFVGHfdwFUQghwRiiUJ",
  "key5": "5BbJ6ziBge4MRjsVZWaec2e6B1xuPHihFE7gAhTJZxxpzFq2dHYMDD4rrruuRgeP4e9SbQjEAKTJUYUotS4P3nd",
  "key6": "5LmBoVLpDgYKWg2E8cpemzhEKqZ4u7gXK8GcfoWWrcyLP95UibmmLibXNcvmxmtVDAeW2LFNcyZvGpKnZui4NbSm",
  "key7": "63mAvMyyQacsojwKCqwnNnecsRGpu5EpwQkUrrDL4aKyF9Awsq3XU6aB79uj4zMDDBTPLFjkr7Mm8MM1cKuoWBbb",
  "key8": "JCL8dKe6xkJkKaAPSRgXBs9qdj3RiZ7AkuBZV4Bxvzknx3b5F6Cm5io5dXo2VyWGauVUTCReA5eQVaQrsZXFxJr",
  "key9": "pL9TRkMqJ7v1gSf4DJnmQhXr8TwPffQR9UjerBuJBmc8uYM7jGqZyZDU4xaNJNJv9inqTCF66DQjLAi7miDy5Fm",
  "key10": "4pS7ShgaVsWSFACT96f5YVCFwjHQx2F1yAFsQchrdmFfeV7EY8SRTSA23ypZtNhUv3Pd3VW8epH5tmFNZGqrnMDH",
  "key11": "42YvQkqs7a6ognyhy96MbGnKEcCzpmxBWBSi1TVTBWzw81yGZKEgPECB7LbCgx753SR815SroeHD3AHRTVgRN8H5",
  "key12": "5ML42XT16qpbQ1wDQD4DGcZxFv8keQYwJWJB78WDWyUqVwBaGvFf1LkGANex4KsUiB2hDaSuVkwpzDbhcJMH9LFt",
  "key13": "5irpVeDaxUvEgN2beoJNSGrtwta2mvCXPpnLawPgoT9omjSF6nc7H9DcExqFt1Zd98hVirMMYf8TLj4zUvucSLsp",
  "key14": "52jpC2KhWquY32kbuaEWBVKUdfrPFu24WgX8VMjwZVWpWFjqzppecS9bCUf62jr61bvtpBybaSQ9HYs3vmxDr3EZ",
  "key15": "5L1yhgRpm4AkP4LMpc3zqvEYBauVfK5j2jLu9p3fRiH55jFNYRtrp71sLtPhKpfyNU4mcRZ4KmL1kaJ1QamvDq7q",
  "key16": "p2AUdLCCwdzLQs8PruNdX5dCQm9vrEDsBYZnctEnmCee5uYzjsYP7aByhxsXUKtD1HH2Q4SCmLHXjXTWMvHmC94",
  "key17": "294pq9KhNSumaM73ewxgEEsQ2gfKJusBqMM5WKRvn78SaydBXmNxndeCdtWw8ZwMhUUPTbwCXdkaDnp5QYRh13jV",
  "key18": "47Bauu73Den4rf3ewTnLBaRw2wGgoX33Men5yzkmfhSdq2gXi4FSHJ58VqaXTWZ8QfSNQ3aiEdixVPAKVNVTg3fP",
  "key19": "RDAeNdf9L9h8SRghiwptBWxmerNr9xSKjmRHbuznEgau3bVwUpPMfyxeB8dVSPJZWJnunT1DpLECbWnuChU1EGB",
  "key20": "3WuWp8v5BKuhJZNX9FZEddmB8wrQPBywEDTFFip9vzvfP9QuD21pYp2dQdksrAqjnFZNF1peAcXNhY41bvpDfRdG",
  "key21": "3xkpkEDJoP9GpKTN8cg6VvMEy7AvtGAfACCXdsNUQ9GsuogL2XGwrvSy2SkuUjeyP14jKN2EVwYDdZaU2FxJuCxW",
  "key22": "a5oMFnwX7ufSRG9rVgF6xKtuWDnke6zvGr7aj7c9aNYjop2HQoc1i92baJULNmwzdaWDpNWkvCZC9R9t4ghEnmS",
  "key23": "aDEGZwc5EJWzzY85cHiqVJHdaNxtJdDZvKkVGqpTpFvxyZpPURBkn9iVgXjk4W4iu31RvMxPu7fwRTQ6XS1G3cR",
  "key24": "5mw8x2ZxyFPozEyqgLhxBxzEZBUte6mvGjT1srwwb2SAHKf9UPWin6UfLf8fwiFvYKpVZUmgLLSXjfH7SVjpyH98",
  "key25": "4PDqKfzbHJJZoeLgLkTuC9Veq1qVPTULuFgFzTjw5w41Aicixi5VAjk5ibktCEdjrfmDrXEeirqGKLL3SbndmPdJ",
  "key26": "MUXabYD9Q5r5mg4yZhXSaKxTyNQvvAM5mq2GDYx6YLtagT88zFCQChmnTxA8c6myyjageXKcAx77VeDoyMgPEYr"
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
