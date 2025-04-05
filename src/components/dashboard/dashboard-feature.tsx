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
    "5cJS3b43eVuPsD1nrXuFkGkg1aPGUzBMXZ57B4gihyfNCuwjNsdzHetM2CVeNQ6H6NNsGWXPU2Zks3hAgFMqwHsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QEAzd8bJnrE4VhQpuNC1bwbvWCWb3hbU13GCcx1Fwr3AtVTsfLaQpcJVibwSJw6yq7UqohXRgQbjWbN6aupaT8n",
  "key1": "58ecxdkvdLDey2QZRStYxZnzxMqq4UkST88tEALJG6aEEf4c3RVcejT1Q8mvwf1RAmTMmuGokPNoeg2Kg2592twt",
  "key2": "2FuBoAnL5diqtkwFPa7AffPaYBuneGCwrwnDSg5MUS3Jw9Amb6vnD4irgYevsCWtfsJqD2z6VXigGAs95DCYg91Y",
  "key3": "56UYsiLxMtcTCsfW99Y6oRyySxNBwwTPC5Nw9rEaHYD9e974unh8mAF4b5mxfiAAg6PqQaLmFQJxHKZBF3ScmBWJ",
  "key4": "FfFTANkthGexkkhxfkmk52PM99YPDLErzcwx12nSYFzusfXD3dj11BeoTVGB3dVts8pEETgePLR7opRGfHxApMx",
  "key5": "CtZgHjMY1bAe3eeekwV28rbuyC5ajEmoQ7CqwYuvFDn2DkC78d51Ju4W56Sm623KX8d24Y5jSh1it9k894Nj72W",
  "key6": "uFzYdWNRLDeMjUYoVsCq51sSuYLaaFj7yCKzfNpfE5ghofbGiJGeEuvArnwr1g5hXCVYE37GwqnSsdL9yDGdiQ9",
  "key7": "2UuasTaqoGpLFDfJsq85fDgW3LVdKy6Frez27pZuK77qgZgasU9PZWgBCN8jEf3Rgv6oSfsc2pZFuGi7tdvCBztf",
  "key8": "3wqZn3BnBVAjpoxF8kgT4aEiwDiHsM79X1pN5ojECxvyXMacfsd8tU5oNqk9PEnh65CyPHTYqeR5WP2mPtCiwcxL",
  "key9": "5KcD86W28BNfNYu1uXjyFEFUGrA18Qy4SosqzG4X3RUBdY93pbvVsH7zeLGG2HNpABnX859pbv678dAZ7bUUqZND",
  "key10": "2sXfoTdGCkPrVaBRQaKE9AJow8eKVK6jJJ2XhBzaRLpZShpMkJqaCUJgxtcnUhhHUKqAj5K3cYepH6S4xsNXs9nP",
  "key11": "4RfkVz4xAuEVoTJH6BZfoPN6eWUbkMwcaQw9vWEFZF58KuEMEtSi5acZtYJTj3fSvYy5sHY1eLc1TPrFon9fW43x",
  "key12": "33eSrxmuiarLWHpn7CWcPWKLnXhhFA3QHMdBaxgq9g2xJbguLRokYYgtTV15F2x6z2CMzDzu9zx6AzuG49pYwpSC",
  "key13": "5HjxmL4bizeE8f7Ei5REs1PXPfrt41Ut6fx1EuimPFPEFdmya7rsAwvdncXWVGsz2AEjQpwbZn2cD1jSvMmi1V1p",
  "key14": "4L2yWu33mKfLwcU5txJTz6YZZTn2WLavvf2PQox5vMC7v8R3g3qfox8o143EnakBCRRCWXmFe62wz7C6KDbttbeS",
  "key15": "5Pb8ir8YJftCuNN8T3HFLWGdn8tLT1FifxGYACMeEXTxF1wwExcz6mGSsE4xhrWE5dxU6Q2fUxqVhfKa8iwK4Fz2",
  "key16": "3GfDGqsXvnzm1KEiVafEGqgHz36iz6C439zwP15mmNjdUixb1AeUyAJcgoSe1h1m9B5CZHypoTnAPjZMfQZHAdYr",
  "key17": "PAHFApGETfuKZK79iMVcah9pCy7WA7pNAageunj7Wyq9YV89YDe8XWBrT6QY3PMqnuz7fqcFDwRZUnPsRzF9tyD",
  "key18": "3787okq3tsmG17LnpMVhbxZjNMBRhKgSWM5Y3wNVQ36ZYC2nLrk5nEupNo8p5UC3rHPG4wiAdpc8Kg6TWzWevWAc",
  "key19": "4y74QvacgqEdqC4pMzJrwbe7Pg62VzKzNt4B9G6En1Y29WJeLyT2kXbwVvdsM4fG77zpubT6i7hkNzouorfH7pCx",
  "key20": "Mbk1Q4884DNFprJP3Y4wc48s5U5dbHnPzq7diMPFuJTBRqsZhFC4nJA8Cy3qk1GyPt8rg8jqDot93Mqi8qariBf",
  "key21": "5RrjQZn3kaSV26osFMqxw8ic7C8EPrCKj8FUpb4f3zRw8eqNJ5S7w6TSu6MD7vLWqHCTa5sKFUu8b9LMxS1U4xZ9",
  "key22": "2vD96ofEpu1DQ97SyjCS7LPFYRxywkpsV19GFDhjME69XmxpRFAbQYLgZCnBfSktEthhZuNvQBy2v91TuMLZa5Ug",
  "key23": "56LAgb3BQK75m7pA8ooFw5NHygse694NvffrWhvuxnbbfLjEqFnvPa2kgDmC1PNe83DWXtwZu9rvY5iQVSthU6Q5",
  "key24": "2DGXAJfK3b3GQUHT4tNx9ef7VyVMnWBhMSCZJydq3YoW3Vtrw2SYGwBPPTAsZe9ZeEr8TwsEt65GBKiwKxinFXem",
  "key25": "4jA3QfTafe2JWiSc9NmeupyLJ5oqVk17GvDZMRQSuqafHuQ62qBeT9HVg4cp9oxGmfF4WJKTc7o2UoptNFmPbbrF",
  "key26": "2ZyUpaReh7XNTcGKJCuD2j1kLyPPCwtA4zDtjNgABugyZE1HNUGjRzLiVDWJhqtGvwEkBgesbp2J4wBM1q3yB47B",
  "key27": "5DHeSYb8iSU1xNSpSoXALsJKAwtFqyKDVAKyJM1C1kT7X2xU5didCDZ4HCyLymV1g3LzmniD8UoF4f5GmcJFjkpL",
  "key28": "5bexjS9aXkfSAK3kawAiWP4S5yzFNmzcxyTBFmJLucGZNFWnxZxUhHT3wLncYi69sYLbQdUZyXXzaF64eMNoHocx",
  "key29": "2TQ5GyRjSMsw4Y3yv8Fs2eyYnmsG75q73yyueJj7oVCsCQvzL14jXP6dStktg6AGi9NWk2aaCACfSq7mqvNKhX6S",
  "key30": "4E8QJxBYv4UtonmttkQ3MRYfSnXSXrLR2iuVRWAYiJywEbUhmKWJ995oYsNcU99SUfpWLQSbAhGUk3gXYwwvxpUj",
  "key31": "vRKYgc73WEZAr9X8cgcGovk6PSHnLH7z99BSfVW8x6Q2FEHhyw58SGStbt1vhyptPDz13euQJw9Y3xw2msEdzyq",
  "key32": "UFVCoTQz564pZXGsUxZA2M7YGX4P58UbYDXGy9ucKve464RjrTDCE76WLxrvxqP2gccAaxC5bji7tzLXKQEiYJ8"
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
