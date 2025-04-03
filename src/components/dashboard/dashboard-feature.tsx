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
    "4ZRg2g2q1grpZ3JM5JabgacV3cBcCVi7UuUuyFHFpA1dSLxGESRCkrnBtmKth5UUmxVy1xfXt43mpTBiHeizYSA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sachW4rGvQDzbrFWLsXiQWQLjEsopz8P5ehYk7pS3iK4cErPyGw7CN7epDMCJH9rBbXyDdAPsuqosaTxkyZkECt",
  "key1": "3tAz8zmfEwBbMVBsXUVF1EYtVj5aA83X7ouPhjZxFAxdr9zfhv1F4ypA3DEntZjJxSkEfwtJyMBbHF1hEUUPAerB",
  "key2": "TJzffk6foGkUv1hNhWCbN39yTi5T9bG9q3t8BtBFXd6CEtwXTQGGg4zaHmiX5hrCepEEzQKQoYFUgYQ8hm6Dhd7",
  "key3": "5fu14AQa5Qjpr9eBdNxA8b3AHs8gcfSdfrVPuJZXCp9HuFb31E7QftEpm3SYrNHdxAKJ1mzNRreiUiSzhev3Ttzm",
  "key4": "5P6t6CkgXYAdWSfaSQRHGU2Qa3fbr1ErDoGWgtwcFfPUVZGj3Se7ndDmsjiwCucbQpjHGXLbrecEbeWrp4U21pe4",
  "key5": "V4wkNpMrAocWM7nzhmjGMjYyoANodeY8W3ftn9eoc2ikL82epuiETCaznjDfvefu3Y31kV12MS2QjMg9LgBWbq7",
  "key6": "314haKcuPNvUdsY78ep9FivpmCsp5AwPonLDg9C927roiioymbSVmRBcLDHbuiCcX2WkYcAcv1yCE4AL3Ncv34RA",
  "key7": "4V44z6snAZTnmeXaDropMLYKAGc4HcDX1jbPhVHTxp54J4oqYCyFCWPhgDaKT93fE9v7ZmpUAHytiU3AshEkhsht",
  "key8": "62kjhEMg48KWxiUfUbxWkUAGF8N8DzjpxPS6c7bXbwHWmCFtwqAgyEzrEFKj45KULWYk4u4tqZBBfEicsFvtsb8H",
  "key9": "614CugWUGhFgHye84rmEpHRtwWsrhAXzwwpDTrJVEGchapuD7JzJtNfPpb8demkcJ3Vb76XFBDqbKZmTv1dPtrjs",
  "key10": "ErSz9iTswntDT4sJWvokBwTod9WkSKo9aLDe3wRk17oWrQonZZmJxsWFMpvTXCSJRzeGHtVc5NfXoRwpvWeXWtg",
  "key11": "3QcrMuzfcL51cLoo7AhnaAPDkHoW3bwaPKY4Zz1evmGM5DW9xWmYeNBPRAtFkirCKamQK7hMtYred43D13qHBDA8",
  "key12": "4azWcUyeXAqw4rPP3iBqHPHz5qn9DNyv8DbxwqhpoCBG3fCBTLnzLLwGEYTMxyfaVzwhDHgUM9sWD71JLriRDJGB",
  "key13": "3iVNC91dYDLNm5mZa2SzCtB9p1pJvNpyo39Ygg5ixvq9mTJZjZomx9cmMPKfHDybdQoBM6BUgt7dCS3PtesSLT5M",
  "key14": "5DxbjqdwH3AvAopUviZD2GEKMnZQHcYaV9wMebPrdPoWDSsPQsdtM8yTG8XkBbNQEkb57BbqNfnvybTsoiX57z9k",
  "key15": "hhBCR7uLCrkCHocsCTgDMk13XXeifoeRAfiYeAMzMqYe4keytUqe4KokTMxrtNmQthD43XfyN4Agz59KwBJ6myt",
  "key16": "TWMTToSHoDfy75Axvd66aLcKtzB2nLJtLxwckbqkhpDmBNiccFcvHP8hwLs6CB7hdhfMu7CjsHp8MCXzqShv1EV",
  "key17": "4TvWCD4RFXpmR8VYkJhwYxRfw7vnXeG1sHqcFF6dUoLMSUkNBA72kEG25JV2pZ5wZQc56iNVHdN5wkx7xUaK83kV",
  "key18": "2XuMzdbF5qPWz8XVGU1T4cDPi7kCHkXKiXRGgQHSMXPiEkW5ghv2MamUUkFJi4j4LWFTqs8yE5QqLUZGu4GWZSCK",
  "key19": "3qYRbiLytK4nyqdapLATmxEimcncuMBDoUoeWFTt5uFz29HMn9n4Zy6cTcmFNhB1ThhY21E6vKtR8v5dMkzw3SuD",
  "key20": "5VsjuCgkjuAdpt7tqh3yGjjSb3zWrkrU3TqCkHLSAyb5WKBqVC2hdTngdwsX6b89PgEk1z9W7ayh2BY8vE5hzGvv",
  "key21": "2WhxhVJ1VCchr5dZ5mU2xbKfzcqEvUr2xtUoLGqsXdPYBcWx2CwCD3FCSn72kh1AAQs1GDRLi9TZFiRDm6NfmzjQ",
  "key22": "2sAE1Vpy2mVc3aVGUSMxwdSRQKGb89iNNBCa54LAdK1JqBTJKkaR9DRZGMHz7UZDJrbmMgVaCyV1TbkgmopzkvVp",
  "key23": "4r51xPYpHMUnWnzBxREZ6oKo4xkyF1tFrt1RfQZfubwHsYS1iQeNUQyXugzHut3XuepGhW1keuoryQkWG5j7Qbpx",
  "key24": "4CYqY5SBq7vDsER1pQqoWV7UiGVNCqT68Wwy16eswx64fZZKGJXJ4q6ZcY3xgxS5x5wAU1FQN8LSKkmZ3armieLT",
  "key25": "36WvHiR9xRF2cmehvXdS8ZMYKgBRh53LoaAMutYybipyUKGsxACWVoFxMdFWCs2FvvhN1VrD6jFaivQMYogonKqm",
  "key26": "coPZjDKfMRuBy59vkt6EMZ3wUFX23mwYtnhG885QCT9amoXy4s7yaAtkESL87yHth4n9P6fTrH2UgYP6wQhWFJs",
  "key27": "4c7dWu7aJN26odY4szqt2HHsxDNaTADxAS5yZq5ANEsTDDXogfXV3FYGJbPkKwBjGvpTV2EivJHynGHEix9d5EBz",
  "key28": "5bHDPC5CrE8ZmyUM7wm5o2zRsr9oU59v9g3ns6QkH6ZmCiXo3GBjx1vkWMxmH5VQJeXuSMsS54bc7BZAX2nSdKXn",
  "key29": "28rksGL6yBPrni5773toGk19z7heVDRvikFdPnecZ4KkUVhbDC5wvCJuMvaCd2oDA8gAcZ9bmWCRxgXhHxvMFioD",
  "key30": "5fghLTD7aZ6q2BVzn5RpEbc74zDEfxBHp1wPQYjTQdYFLrPSTxtXKxZcQSB9CvsEzbyDsvrbJECuhb3Gi2sbeAQh",
  "key31": "49bo6NPE1SP5offirS5nbAacziebQV8MC6ZJoeRW7f7ZzajDVHyGxy2tMiTRTiL63NtjypzFEZhAAtP5QBLLhzz8",
  "key32": "dVRjiN3U9ev5EggPySBKmZbeJKqhh6wv4NsRP5dV7xjSoL5xpSQDLJN7HEmEDf4p1w1exWcX3XSVsDEdjKtALTg",
  "key33": "54wY8htJYbBwZcBxtJmGj8YJCVmWLzJA6cJ8VhAzsCqATe1HWKgtmeERz8pEk2qfF9w6ccFJ8JkynQnu1y752Kma",
  "key34": "4ABjbUcQH1AHm9bnRGnyb33k2t3Ekx2s1mPCfiv5BZ2hQYf9Vf7jFsr1PnEb3RwGth4SKZMwdL1RtFSngnSzBdyW",
  "key35": "4hTGzuo93C8tJciWgjK2VtvGoNFjL6YGkUutQbZG6x9Pst3PzDFp5r4N4pKEYWGcuzUS22nyfgCZvAZcRnU9zKdP",
  "key36": "5SQJSrNjz2btfQYBznNKtrio3z1YAG2h3bPzXarxBaoCYjfe2VKJyfy7KUVb6kKGg3VbJge5TZGak8HWpf8fSNwu",
  "key37": "5Y9RBs4nSkQA46DY6BMdWrE5n5DLydsA9q6VcJEdcg24mWkqzFqbovgW3jefna7hUDMCAXshtgKafv6fcCdMkPJb"
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
