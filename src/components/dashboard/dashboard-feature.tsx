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
    "1g1v2XntMb23VhfJ4RNsj8L2QVDtbdZGz8DspvqtVknoZBKLTVHUSaj8mJw3MStP5RuoMTJW5EUNt7AJduQr5bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TDo3jntvYk8tYfZvoxVPBV9N53fnuTgxb6yRPiMyrPoBbWz1PbbjRnh6TbWXS49LTeVvM7DiPu5CELpYYWRzZwW",
  "key1": "2BdwrN9QJsuLMYziBJ7C7Wdtqv3T2kAgKBPJjPf8R34GPNN4gpSfjdi3YKnbSZirFqzecdTBNi8rxgjkU6DhYhGY",
  "key2": "56LAMDXZMrg5s3P9ZG6GarjyydzRCg7uEjNhtVMt6ivdJP8odf5MRRX2PGPSY54ULZbkcqMP4cNcywnDDhhTTW8A",
  "key3": "4APJhpw2Kxat6eVPChfZ7CUowb5FmCgnehHpDgnb5dwRDu2AaTGGvv18DSbK6boKbnms7yz9wSeFXhAerZZzEmxx",
  "key4": "3BKs3nPV2i61miL9iRZaZ49pMBR2qQbebhcEjWv7Zio8hymEughbGMRVdzT4M4UV4giErLT8KDr8Fg7gEX8e94X2",
  "key5": "5iKBtqaL2S1x9Uq9DXBPf26mtCEktWmfWYsXKGpFpCRssznXz59Ukm9n3Z2HtGgmxeFWCgKCP8X7i2qZejQTbJuK",
  "key6": "ZkaJdc8Dk89m7xt6J5Be9Lp4UMGyUpaoKoKPXTuUKyLrfcYZeqMheBHC2NUA73wRYYmb6h98GLaqfVwQb6bNWsg",
  "key7": "2KU8C6eLV54puMD3iAVukp6Gj7K6BFGj6woeJzPRReoLEJjK6fTRTa9jRHtdmRyCeJAATW1awjt8jq2wRQxuYLYL",
  "key8": "2ywLKsdQ8HEEgKZBjiV7Vh9pM2mHWiNiSNXAx5Fex9tCbgEhXjHfSMNezyjcXJVkUq51Pc2iQSDEJ6SJ6Qy7hbqs",
  "key9": "PovSZwh3QXJRa8rxHtawftScXMWjrvZ2yKsx7gMvmfvwupNomRxyu34P9qTdxQQPqS8E1CPgXBQkqq3b2BoqtJe",
  "key10": "4DPWAiDaoKrbbZ3V21qCa8jxzSf422wkAVi1cdGEWPs4ew7L6nNc1hVX2rHNAUoFdwV5W7Qfw52kgE8GHnb8EZfB",
  "key11": "65XDtNzfGtM47GXBUREpUQKDSyEsZN3NBAgR9geqvkNUKgqzdXXgSDMsvHpbj3sYh86DFRfpbkvJaqmd9fnHw4Jc",
  "key12": "42syn1rZMVEyY3VC41UMCyteHpt4yEsLWNc3qQQ7bHq7j4QDjbxqpGZsdoDChkfnFFKWSTPvHSbAoFuojsk5YDUs",
  "key13": "5sGgK4eVUi9hPxF4FP8GWsnLiQSaoabCZCh84SsjetBSJ8v9eR5xe9cHcZigiGafDPc2wQR1szhiHUE6d6MN5YLC",
  "key14": "3R1fyazgppc9XsDFskG6bvFW36TZmAKtknXohrpFxHCGtz6ZsUNboEz5ERmUBx99kKucxw3dfEVcKp7GMMz3aWEi",
  "key15": "2MRShAyTM5sFu32dfbaugD9js7piYnv48roJ6MFDbNVMWkLB9X5ehjuMfF7n1q3vzEnx5aKvTiHHMqBrwq1sKRaA",
  "key16": "5jRGSaFs1AwVAyJgcp46GNK3o3EdeUFXLe1VHXAwrroBu1Mj3j6WZ7vhD2CtLehFo9aBhSrRKMD15dC2qQFJY4xn",
  "key17": "5oe71xpqAajCwruHrJiHwaJ7fatYo8Yur2RcLMLgfQmmxZfwisTDrHPfVynaFBBMAyi7HAv6BFurE55tY5Pf785e",
  "key18": "3cme5X8P523RyQGDYRKDbo1fbXU7NwL55Xs9cPtokAS2xM6nPpbb29wbVurNhCc3RCXpxPPDhdNagRDH4Qar7cJC",
  "key19": "33DrjaEE5E1RYFG89yy7V27zFeYU7oRQHnVoWeHr4jWjx7S2sYXGLqtiJCkq3NXJz84jAjexi9bLzmuYxFpWzLve",
  "key20": "1us3bAkBaaGyU1FW3eHdEvovRRmgf8s4zqVqjRgrJ4ipdURNrQc3tjNyQWG5SGBTDjfEJxKrZTHECEriHySo3vn",
  "key21": "w9EwCxbt76zRnYQnZoxcxccNf9bcqtQ64aVFNQxXimmbqcjmw5ReQt2kzjtXRcdVWe9nGuEm4AcaBP8FBMPe8Sz",
  "key22": "svyNXxBBfgN2XSTyKZUSJuty8MkasaUsMeZ2SBARZSgRqAx95iy2wDDDibu1NYU1WbMNKzbzLi2jbaK7shEH1Vu",
  "key23": "3mL1AkajE7zCXgVfUaMVV5B3A514B9HSVRKvU7w4QBYSLJYETf57jHryobuA6iyFVpLxFphcut1K1uYTBoZN7vXp",
  "key24": "3FTVbxYjtv6zvwBEG3NUjKz2bM6PhWPvkhgGQJhAgMhrgbayE7rpXm4WEcT9Nnba1WTyTQPgTWumWgz7n8mZcp9C",
  "key25": "5X7ffV16fanbXvVWzpEzaVJakcJP2UrVPTSQyKoHXk8qtDacxJUHSpiAbWvd7aai5z3SjaJAEWMAYt5Zf48KxATk",
  "key26": "2MNzg11kLbZEPsJ5Mk8XngVFdd59ijdVrjMjedsqx2YCgAD9jnZz1tdwny49ut2i2KG174QivyfzQqBCy4MpH6y9",
  "key27": "4gepqr3CTcH71RMzEDKqXTqKEfLF1XS1wnAsEyGaQ4F71CCesncc9r2WbxYYNLMZQYBvcgGjqBVmtMdVmHN2eHqG",
  "key28": "K6sDJ7Bkpas769H5aeaxxVgXpv6XvSTYKvqQLwYtNyASLj3pz8ZXpBTpYwE1tY26LmrM9NMpwcP4ckrc1A6YxpZ",
  "key29": "3eWoFKWRKAit9xjyb5igvM4aJ62Pxf2aTeu481tXM1G1YNZ4XXb1bzqFGSeCJYASg6PdnS41rP1RK83DgY8UAZM5",
  "key30": "4R2SiJcLSMCxMSCnYWLbfQpx4vwQAhG6duNpYNr1HqweQQ92oxVvjLPT9sXCyb663N2THXS6C5bGj8HYHovwARUt",
  "key31": "2acxjDuP7dMfdT74pm11NusbaKEVr9ookrUgVkT5Js1YQKKKYq8YpsY7JM7bU9eqfWyWds5ujDFVnKsfRgfS7Nte",
  "key32": "n3ie2dvNKNB6ZHGJdSUBGeaFsdae8Z3MKXNo47qFrNn79N1xoB6eP9kXQHAuqwAEFBi7jtyMbPLGomKT2r14e84",
  "key33": "3uF9HkVrWV8L2G1ipuY6rDQQxJR7138qGd4Veu6CvAqjctszc1vTa6BvSGN8odRpzRjqqkzR6f4VCptHRyKTtoqM",
  "key34": "58fmAHrzucjCpbrmtoQEYvLkXNytefQ4ihqo8PZuTopuBbwjY7bTbh4BvKYp3SC6yaX5p1sfKAmHBbCTGCxgj9A3",
  "key35": "3VTPsdzGRgvyvtUJwbVuZnJkCQ1RCyFjpHF6Cu2kq2h2X9kVS2LiLBprspxiye9Di51sDxJyTaRY7YVNMEdAuWus",
  "key36": "63asUifgjqC2egGFnXgCMBrErWVHRcGAMMsZLo9Zec2R7dPL4gdHdMkA1VWKc8bNoGPxiCmikPfn3gujzUMx5pPB",
  "key37": "2C46hhUjzp1nZxGVL7NQNHz41FMq7HfXu8BaBGBVHHERAFT3MDxJCy6vvevZ32kAxGv24EJtcGAknQVgz8YMoHyS"
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
