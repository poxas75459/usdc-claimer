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
    "4HE5Unn4tkX1cmjn7wYhemj566fvVryTN2JivD2M9sk5KArB7KH63GuNkMr56YVwXNdBgZgbsXWeLmRTP52cmL17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPSKVhv7Kb4N9vFmK6HFt9ez8EKFvFy68X6NPTt1K14Ud4qy51z8uRHkZ44oSPjdupyUbtvp2xcixmGq9d2hWfX",
  "key1": "2P8rn3xPmYxjRyjVfhYqUpJq4WLkicaJFnCcJcamNkuWPNP5x5L9HLmWNFu9U9D3YwbS3MYJ2W7waEvDYUao6iNU",
  "key2": "3tU582n9vV2mp7FohEBJJWjaz8vwx7TUdWUJ41Xv9CoaqBjoSASMczunzvS15NB4gHXp6zLHtyg56NCmsvuottxH",
  "key3": "2mQMg7JTirHMvEDn9oNQNwabnGPPLF5JBTXXZW86Ntnby8ZjkdSuKd3gRtVMJaDNKxTp2Emr9Zv5Zf6EyJFWv2PQ",
  "key4": "5ZGRJnqWQXEvuHdXrCBXcTTfFZ8c9QfhV8cMHh3hRA4K5i7n8FhdVZhjnazRS7TvzVx6yqm2xhdpSp8UqHGxjcjN",
  "key5": "JPbtePdTAYLRujEJTq5hKcGSZutXy97jMaN7PZJT3Y8YkXENwmM5bVkeT2vyG6NNbQ4ky8XjFiro9t3arh376uK",
  "key6": "2mAaoUR7BWCZbLmkLwY4vuLfqmkVdvwNWk4LiicY4AvXn3HWfuz5VjiLpacsy3JLZLSmGiJRdErZQF55VKkYrSqp",
  "key7": "ZSSZpmN5G4bGLk5EAtYmZXWmm1j8Qt6TCdKboKezPYEzSG27DpKnrcTvmiNHE3GS2CZvobuAubx6CifqsE5cywF",
  "key8": "2FLXNsrrXMY8wczEPzKXdyB2o4XbxnKxwn7aAfha5QGWRpb6m6kdd1APpHjKygtDG397jSoFbgdjfevKz1AMEw75",
  "key9": "5yFxi5maviyXjV1PLDsATZiLBALgtxRCbsh2dYvrtzannptbP6RgaWyxnd9zDWsa4Tf4eKFwccLre1CuxXmLpZZU",
  "key10": "xRXVieaeZ15LADwjMmTSBdYjZGTjJe3qqKpaRyw1xChRjQA2A1CKYNZzESB1hRbzQGQsqpkKQGiAs92PgpSCAnG",
  "key11": "3aAiPukuwuM5gEjdyMNzgMQxAPNTWqPSPEX63mKmUwazB5SCV1LhE6rtFigFycoVc95WY8LUqk1oNR8G9XY5RSJY",
  "key12": "ERoxmi6mS7gAYqNg9Ns9CfotbDGwJ7n5gDHPYcXrCBBGg4ugnD6iX2EP1RaeoARiLH5d17QJWSY5ZrDdzXy3bHk",
  "key13": "3wQ9atztR6rapPAiVLaiz1MHmCiqsk7pZaVJSUD2HzW1UVWFFgrnjaqcNR51T2rMkkBJyFJAKM1LeLomNU6SkZcg",
  "key14": "4DNk2uGGSMTJoLj4Cat3sjnKDjiZZn5PEBgRaTtVCxe5qyWpWG9yNyrfWFWkXueZYPyBwYQrRXNCukv3wn7sNZY2",
  "key15": "4U2VnQMDss89J2iWnX1CRiFKE9MsXhecq1AtnZXdA4F67QbAU7KMVKg42GGWRti36fsqN2794neJmiCM5d2PdoSS",
  "key16": "4mZeSuGHuPXizze7oJz9GiC4XKr6zRc8CAchJ6FMakr5tDtdxTv84EJoiq6bvkkP6beyzUwSxgHWnWeqaiVb3Bsi",
  "key17": "5V5PBkRJRv1HQbcj6p4ZV2vPbmmZJePGh3uMPBMAxMbg7hRq7dop96S1Vohc3CsALdNFRUdCY4ejjrKvmkZeDj4Z",
  "key18": "3McxdVKhjCwdREBvgMc5zjPHXzcz1AKiyZMGHGbZw46zdCRURuqzfVUDRTmUkhXAKiEheLAKJEnybkrhyQiWbqXh",
  "key19": "4hiho19xgkTCApjrGQmQnAjNzQqt1EAomTHKDBT26cN518EbE198W4PH1zcr8M7SmJzY2Wir5EkNVtk6b2PDGA4o",
  "key20": "54ZxgDrsLtM3mPBGmP88GZ5CkyiP4zHxjw7kuSLSFfvMfsHdqiwweUyVbPsTzRxemufknjSsH7bsUHfXLMvMsYky",
  "key21": "5nbqyaR9Z2uM8L67HU31c6WrPXsA13EMuZDbeNJCTsdGpHuX1pHEh6fXdws4AYiukdwdHK1GiEZhrTYCW2kvJP2r",
  "key22": "4GsFBo54Y368tFaMRDDzKwuR2WTJMZtV6euACyRP3marbstYxiUAvW67S6HTFvqn2K7D2AupPpfjvMi8HaBxBBz9",
  "key23": "Kmnf6RrQWufxj29kjtbNBvgnYw3MaYjBin5s6CUN5HSqFNoWuVyuztc2B1E4Ng52smZ265rn9szdHwySLMUcvWG",
  "key24": "UPEX5CVrrap8FvcUbv6AXpvz2uJJjRiDpeZ6pGV7iwCdoeVAZoet8xjjFGYEZVXUmrH7Ky9S2UhSrSULrbhQ4EY",
  "key25": "3uXjzkkCf74LBb5SPYPqr9QyrFUmuauPaZD6ZXHLECc6YweFo5nP1SDy5Rp1rLqk8PTocEkVrwWzrLdjmsXrsY16",
  "key26": "59eRvWGyfLHFQL587S1RNJDJnVzLPrw3kVfctMBsvyF44hRWmfUqFvxc1kXy8xnk7xQ3rTNF2Jf1chope1HcE9nt",
  "key27": "3j7Zb2cDNUYDL67KU9VRvQ1GyHdKCEvP1ZXLQCQxugaG93odEWuXnCWNDmXvoxL69X2ociRQq7ixeVPVFUhwLByj",
  "key28": "33foQ5B8YBXA26nq33xfGMK7fQvyxrSCHf5MsaJwtMpw9kr6GLsKfYgcrc59sqZ98BdYjv7dGF5tCRXsXTg6KRXf",
  "key29": "24YtEFLxiwAspW6bppRiuW3spj33NZEMdPpdTzSfKpWtYRKk5Zpd6MATb69NniC1St5SR7jRTw4yiqGPhpaCDN75",
  "key30": "5r9DhRw4ofimTJBfN12FVBX7NVQNrVbZN9KBN7K8J7jiWHmTgR7ndpFe6XDYGKcVPUbLwwGa7Ai7hRgLLrAUuzKW",
  "key31": "3FiEmVG6nNhJrjohnnZhoMNMmWdspiBAXwiDD3ZSGbELnB7A4gQnqEyR3ggp15dUBFect9HW6Gs3zSFMesC2YdPY",
  "key32": "46QwpUk14dkQdUY79rcm8CW7K7cDCJvcSiu3Ai8e1Y6VRGZGmvT2RQwnggRhdaAfNfUSHgNMzigtEZQ5pH1TkCY",
  "key33": "3ZZNtw8WgzRGuKXKq6cAicburg62KJH59htjnZ67mdxfAH28CpJTCVMTfZfdmWx8wXfk1ibQzEoqxG7AujHcHSvG",
  "key34": "cCFAtFBKoPVMpj3yai5ddgu8358WJBJJCirByGXMkkzafxJqHaNJZRKoebU2aLYU6KwsuFgbjPYQRfSSatRgLiA",
  "key35": "3X4yeBdvrgCYYdCWWrjhNWtmeyegBmHY7ft48qsu51TYcacvrLHj3chtwDVE4Z9yiLV1re2YXAaNVMm6KZYdGS33",
  "key36": "3kh9HZ2KgjVyt1Ciw2CMmY8x2TgJqAieQQiDuQjiS3YRq1roGTyN1yZANBnWYK91WeBfFmHBmf67YRZVmtgpaAkN",
  "key37": "5mkK8sAvnRkZsYvgmL3NuM93E7G2LGxSc9q6ACQRgXYUSVMhqSjZvmMKbaFBqEUNEtAFxUwyQxfz6d5CCW7jpUT",
  "key38": "29MeaNULmJVFFurcGfEPDRp9RYzz8joUoVNvJtqWp3VokZKoRoBFxMqVZQtCFhft7AKTgQEWbr2az39Dv9JwNdpZ",
  "key39": "5wfnG18JqKFQ2NxfLYFKAdDFG6mUS2cEQAECaKgw1vDWsRNW11wSsJ4URko6irnVLEemc4QNvQ6DMwnECgu25YCm",
  "key40": "bnbvLvbYA2ix2VEDtqS5qPLMpjZNAKxcGU6rugopApJVi9Wqv7owDGNgnQjYz3nBZPF9sD77a4hVCewrzrgiZ3P",
  "key41": "42bSzfqwVbwHWn571iTe2XkNtKcSpebaArvZ14nFWU9vQWnSA3KQtbjWVKg1tDV5Z24jDxsZaPoDCAHRGnbMepPy"
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
