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
    "5rLhyW8J8Ad3ws3oHJSa8yo3cXmnc15mtFJBAR8j9P74YGrVHfGiy2waH4tPnKa7F1S3LPRJWNp3L489bnDFGNJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDtrdHFy83JyaRKEZ97w9cdfhQPqZYanBvBfmeFSvwi3uiEwnXZEWRYBjds6iGfhidDEgMd8FtDHpyoi2u5ZFAp",
  "key1": "4fR95aLxNnDvqhcTP3hRJkUNu7VRaRQoif5HRm78MJfdJuCFrbmXMyJ5qi2iha4EwN9djstcwifb1KCG2amir5qG",
  "key2": "35hexJA4Juumy1zZeG8GfiV7WtMPb5QC2AQ4kHHZiaGC4HequUXHb8bYdo3KUnwexzj5CBdjLtWQDpAdjndi4TVn",
  "key3": "5fKTHbRgc5qpoAgeuGV3x4XS2dwhhML2bfmPePt9z71p9P8Jm166ntiEYZ48qXsSqEHKtKsBqtNGN81kmxc1Xv5a",
  "key4": "3WoxTaMY9zWkkyeBt5en9LogreKrY7wUHLMCcZVK5cZkQCg9HyU5dCbea7oGRjKw45Ww9oVVHRTJJ4G2VcaESAZz",
  "key5": "4QqPY4dhkQavVCB8nxHs15mgTcta2HM2ErdomL992cVG9EVtiJCAa82fGrY1C1WUa3TJwwPfoFBj1vjS85uPczjF",
  "key6": "2efxv9AvvgkDxVnGQ3KRskF5xsCrxHy9sddU2g6VjyGB1SkP12RD6E7E54ZHtzBq3fkVKFDrWXC4p4WwfrHdcjvh",
  "key7": "4wA5uADhwuMfHnzTgyvs3qFc2uuxNobmsU127BfgLtBX8vDd1DRqNNvkjHQyaSABD6CH1YkpfdeYTygBY1BoxZHn",
  "key8": "5pyVsJjib7iSSPSY96xQh3aTwot7wWCiYJNKxSXmsNPRESXxqcJrV2ciugYudkkCeQNrGrEc6qSUxfEXvwXTWdMW",
  "key9": "272jrzw6LHd4h744AFvHPvHkeAkyBAFbMtjY6HfYPy7zcgnLWtB93JXS4uZshk3zgqQJn2UbYWXa5xss3rPCk8Fb",
  "key10": "25aZwWnHv5xZPVfs8pVjCnkUycNuTmjRoRtmFFBiYAZpufceqCR3Sj8q2Rtna2Kk2WLLC4gv2N9KQ67n6hX2BDFh",
  "key11": "24eS2sjo7fYwByMAMejchHTHfUzjvknheMoP3PF2DovbtyAKBNPDMEiAtdWbQh6spZ4uCc88utJ6hoTRGyCEphQp",
  "key12": "3MhNie8zVB97mipv6i1Nr5RJThUoEwCnHTjYFHXiQDKKRdt5s4TQu1MsacvVTXKjimPaVazujZpoMz28gLBQN1Z",
  "key13": "428stNMHapJVh9AKoga2Ewk27UuwkY4c8FDuoMoN5JuYSzQLS9WsNHfJZUxPJeSmFb3VT5dhFwX68YFi2TDCQprt",
  "key14": "2oE6H4j42vbUj7x66sBTowhxrt4LWXWrjKEjMRyzcx2AH2XFBQJWKvbLm6bt2hMMNnDkYeYozqeezTEPTRsykUev",
  "key15": "y5RnxBoBGsbfqaGemCjZNp1BnNSqyJCM7VsumofvLFRAWZHWBz9WhjNB9xTQoeAw5GTAZ6TgLA31djAuQEUh4ze",
  "key16": "J7cvoN71TceFiRjePMryG24wKzBV598wYmxjQ7FewkFpKTg1Pow96gPwwt2zDEWZyYt6inHQsY6Lrm8unej5puJ",
  "key17": "3tUTxGCAkXWXfv4nzYUpKzEKapLCwj9CZoBnSmza68yyqffBkkhFVh2tE1r3P6D3nsvzWm4nXUZNW98nuUEERfiX",
  "key18": "3hTxX89C4TzRvudbU3XZBR4oTfYNBczLwioNgvtVW4uv6ypvMzaUGh3tdNnMJGVaKmEXDSsNTVvFipXfNvhAGUk7",
  "key19": "4BBh4J8mMbwfdwGiv3z4oPziMtDV4f3ktWba3rjAq9EK4GZ8uwcz7odfWPMm2zCGxuAvJYdjLCXMqT4rFATxErPp",
  "key20": "4SdreUXqa9EQMVBJXRGYqkmHkgYDgKVQufSoVAvK6YE1Ati2BMEZfi7cXBmDxC81YjcLkEscVat4EQmp9vCUjmvz",
  "key21": "3zwr89F1cryhn9cpZaDBPAVDPLAbt2zADBs6yM7dR4dsV6Hz5mDdKqa9ZyeFD6ajnX7v1yrM4fVh7SmHDL1VpfEt",
  "key22": "61z12mBvqkF2d5dTyzQzYQf5BiTNbHfQj7zJZMCqZLzt9WbSYweKCCBNQzf3vSs3vfq1ZBeqhuL5x6sWh93doB3C",
  "key23": "zaQXBWh139U8jG4erACLUr6pgJaPp8hrfMoA4Fv9Qj29GHtpAKshQw8E47Fg1nYF1U5iDaDFxNCH1PchxWP2ueJ",
  "key24": "2ydogAGp1FHwsrkQospVDDwbHufZTQLjuCeVtNBL9WGtCY2EkvabMf4oRofX6S6zfRSuhexWVgtei3EVbSupzLCe",
  "key25": "56eL9S7fjGKqmGPDBeHiWbVDFdkaquA3pgnTqGhGCbXdB5ishyruk9KnhsgMGBPNXq37VrqYW54G91QxAi98VuuS",
  "key26": "3NJpo8RXm8p8faDjji8HxLJtGxF6xLiWpBrVjtaQ4tg2VuJEiwi4nZ8jeRpJ9ou8NNjLciAMpjW1ZgYYN25PqJYk",
  "key27": "2fQpiwoQkoRkU49k1UkV9Mqt4BoCwG34WwQhb9uLaTUJC84HaFVWSAVj9nAeGr4EsLvCzyqYZ5wcNef3xqLQjLPt",
  "key28": "4fLZ58hweW8883PrAWWvKALQ5PUAPhHLbHpp1782a6pHadnf5Kyf94YaLvoo6yTAr7Qzp2MVBWAjJWPBRHfjRGkm",
  "key29": "3E3RcuJSMBXuAedLgEkjjLw2Ann5RSNgTZWsb6HnaDiPiFcpUK572APJctNAvPrXJvdULGuB4L9jbAdDk9cTpokL",
  "key30": "3b87nsYRdvg3LxjinQwx3UWVbkTj5NjdxJxrPFL5z9mTtTi1XzsYrKqApF6sZBhNjaZYdnqpKFh2tfXhUd6jd4DU",
  "key31": "2RNnDTos3kQQgddjfjbvgqLzWLPsLfyFMRQhgacRG8de5cUpDV6zzAQ25M7UZpcqafT1DbyG4YiuTRs7WvCCVSR1",
  "key32": "5omuK4jsmHVRM3d2ZKZQkAe4aMpBASrMG3rgajAMRmGDujZdwKdfnJpBVFgseHs2tdTqJHSi1xEWCZtLxfv9RNBP",
  "key33": "36N1F25uNPYBRqY55BgnEdFrnDuAyEUbXgLzY7NqYCPjSSXUpDy7Ev2UtvhwWQKfKxwuf3qcbfogeorVcpbCHBsH",
  "key34": "3s4c1U7ida4zcAE4Dyf9CJnVq6VdvuRGdcckdPyqoHtYs4DtkaB8UZRGPYwWuHzY5F748upBhDdhC7QdBeYfWgVb",
  "key35": "5Uy786xprNpxDxrarCQ9j231BNN4aBCZAgPyp1v9rwV3kMmEmkxavTiCiNEApVwCycTDdxoU7t6d44WvB8WhrohC",
  "key36": "2uN1aobzXxfDnqJMTbYjYxjJmuNGoHNnN77QaSEYCmqyPdVXcbJAfbzabyjm8ES2Pd6jmCsmCCYUocMBqcriudq5",
  "key37": "36cUpmHswC683N3bz9MRaZBG4KSU2yEciLjo5WN2qu7JECYvrVvAbAS92MhWFR8DAaTZVFS9H85sLdS2E32sTBie",
  "key38": "4RGAJ9fTwYG2vEpU6v3R8MexBm4vfUxxg9LE63gbfu2ZrwoK46kYdsedDQmnMP7MX3zMvFGmL21pK3TV9bzFC5ji",
  "key39": "2r2yaKRZyr7hwvtFmdPeLigipbPQ9gtSCixyuZs4x192wGoT3iVuvYVEv57rHWi9N6dbYsam5s5PyRurD2w9HThK"
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
