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
    "441Md38A7KmEiikowPZyyworeAtip4uVRwiXw6RoUycacVRw2AGoBcKfG3ig2YCz1oLyKkyd1efMBFZJpK1WD982"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X57icXCmrnECFT1Lhk7eUVrSyTddtXaL8UmJX2MPz7eMqeW9GrFw19RvgAUr7YcBjD9XazdbRayMJdqaG3qJy8W",
  "key1": "48fK218eAtnvy7xhQXqv8ka3WUtJ3CvYhgWzSqruinLPXgWBVqoCmsrZNGiLtWeLkzxxL2cHMYLHW9b8S1K5KQwj",
  "key2": "EKEDVs7SE7wYsEiio8pjSQvRUoktbPvuMJdSHGAobVYUiiQxazvHdQyoQebkfuuorR8fzCF6NEnUiGcJxxTMVGN",
  "key3": "41oox4ixFqTtVffBYE7tqpe5t7v6UZyzpGB95craTV7oh6D8AgqgF3FT5spBaDhW4HsrUX4DvcMof8oi3mcJVnNZ",
  "key4": "2HhaEw8e8He8r2xd9HY2iwkjscoQDehme7YftVeKrjXurUgdtdzadh7ECsjr5qrt9CqA4g7AaVWeW25jBrFGerXR",
  "key5": "G25E2nxpEcxs3agwZSqaCyQEv9xwSeidSFCmDXR2GFZPGt4qm5615L5PR5pm7ETteF2LvqEzFUfEuvw7yXj2HAR",
  "key6": "4pHrWpnatQt9aHAhBb1ZCL1ir6iKDEakPXUXo9voMZGjmvauMYfM5ZBi1u6ckuUa2wGdM9w54NsJryHyjeCvLKct",
  "key7": "63Nn1HAajxq8fZXsmASf6BUEK2Tu2PVBgPP34gMZSb87pwc2MbGinPb3Ysb3bahVzPd4HeEkt1n3xmwBX4Nx6BfD",
  "key8": "5yKm9SuSYEvsLzxZE4YLG9p9RvRqZoNZAiLcnG2uTuUDqD24K1A8yiYuNYpeZ4jczdfePStjSbDrEdyV9wNu1wRg",
  "key9": "5H7AQa6sYHnF3zY7FhBGqL7wxCkZCg7R2vbSZEjtxuMbdg3A9skgZeeRvAhdaHAvAHwmoZtc4MdDwo24eJM6cPk5",
  "key10": "NF9uY4u6ndGjuUPX79ompyrjNk66rafRQi968NKW3WeZZB8KhyKtcfRSHxgCJKkaCqDq1Cy8N134Wi8NoRU88iR",
  "key11": "2z8ExEVtvwJxiYLXgx5GN1qcQoHPLkE9bm74HyZ8DsmMwCW8J367v9sSWEByCBM8EjXdnXB3fAJgSXUGvB2VHWVN",
  "key12": "25pu1mTmrtB6eGnQuaX9mUXKf4HnqC7UKp4Hs1wf7P4wx66reM4EhLXudomwUJgxaPK9ZPxr4hJSsjkr5vnx37za",
  "key13": "5xcH9SC3mK5HnNEpAFjLMK2Md9jgwux1S1oBBNfrWSzYW2bYCRfUFEjr9C4sEL8CP775SbkLGR7uZcYycKPtsnTi",
  "key14": "5VxyvAB18vkHRhkXL6qEV7w8wC97EWPWPoZRAt6ZFh62WWAMxDaYBT4AcUn3LYkWDFCR2GHJW9t5FL4jC6x9oVjV",
  "key15": "4M5diVuFTWcydymD7kkd6N7JkE5BS3WfrTyDi2c8Lb1tEK5Yka5Xb7JX1231nXrUtBnwfFJfNfWQdYFLDzMBzLFx",
  "key16": "53SJuiRXKvhY6jxWhNZA3JGLxf3nbbw3msEzZXQRGybA4YuQ19fA6tnBEwfjoA8AGRRRovFmETM3apxfF3FTht3u",
  "key17": "XRTJgVXonNLJzrUURzEBTzSkY41kQwxbqZhF1f94WFh8XmGiHodFMD6rDX33ezp3V6WSXCfD7PGZCf8B6cEEyxn",
  "key18": "5toxP1BnXo8Sph3Rz5f8vG1FJkFxhKEr7aEqfsQaqbhJ2q4p3cSut498Tt5Lch3N4WADwzGXJe6EJbjsW7GTtNKK",
  "key19": "2dyP93YFrXrs5GfJZvmcZzCF3KL1Xa87L5p3pPD69TFEVRsPFBHVkivEwANR1GhADQ6o9SZsnnoVnMwj9gpwjJxe",
  "key20": "Fm4BrmqvfweKDQWWSZoAzJmnAWQVVzSqHbsFdBSDkcru2chw2tkJHntf5kpcVVM92bWDysWZ7NnwjbR6Dg98V4a",
  "key21": "4SgHULS6hSwjxSUov9pZVaHU5K8BU2qnDsSBZip6grxMmfgjPdKUHLuPALb2SygfiyajQ6ffFYzVctjUr9oZSb5B",
  "key22": "4SycA8rdxbRjDuDUqu3qxA2vfbmRnU4M24S6AVn7nAqdzHnkBNv2Ghzkce43Pay23um17V5CzjmMKcHMdhYx9LPJ",
  "key23": "4GgXihXEyyB5U2ucoXecazpLdTjNadYZ7AA3MHuc2GuSyZjWXR72dnLa9bxEroJGwkPvrwhXaff312LXA68C1p5L",
  "key24": "5PHY3Vsrb8CptCwEhz4gB3T27AQuVj5nMZwdjSEfcqvFLsgkXyzbt3nh964Nz9FnYizpfE8sNG2V5LYqvW7yoB4h",
  "key25": "4g7XESgyqkwEq3wXwsqcRJgj9P9w5rSqmuKYHN8c65AN2DPYjJhVwCeeYQbXJ59LaMAohrNhY58Ga86isEy3gPiW",
  "key26": "3bGXFHGzCWJmbgFGFeKFvQLMzN1joPckAiGaSkkD6qB1phWbi64ve1RJY7NVECLj2a2qFk3chsQQkqN4h3AueWPW",
  "key27": "5D7RsXAMrsjBsCJJhKb428NWUUPCLcNmyzK4MD4zUMfz1ymnFDgdAiWtC85XnMvzT1v42BVbHq1Ka7MxRu6xot6A",
  "key28": "3HL9B44JGXk3qp8MGG1LdCVa3tQBhFMhKFN9KtYnwjuE4gjTLd583zZQNnC9hF97m2YvrHFYev47v9mx8irFTuYR",
  "key29": "3yPx9DTkfkF6vtgCB2vsuoqi1ZRzSsSYuFVFPzMSkbrwb7693ZsDcEtY4g33WbpHZBKQkDq1VaWtHokgfNRu8aP2",
  "key30": "3rqJAPN8NaWPNnLE34ED476zza54k497HEN3ssSdxwdYPM4EzNJjP6yduSqb9UX42Nv46G59ieZLojCUtLGWGyL8",
  "key31": "5MWJtMA2HmRQV1YnT8KiC1faRCnBETPYpckEgvM3qg2K5U7WXtHKzjuNTxPZki3VcNKiqCBdVGAdmozCQp9MBVK5",
  "key32": "aPRRJHkEMSs1utz9niLaAJK3RrAg3bsKD1eDv7qpXH4idVcoRpYVxJCTyPYJR9WTSb9LnysNypPS3Q9EMLM8GWZ",
  "key33": "5tAyo5QapZc7e9TeuiLm4zWdzzvKSkUxHq15VEyEwMy9VT81oB22tFsxNtQzocVqKyyRkyboZPAhUYe96VGkPxLE",
  "key34": "311zmvrRz5Z5cLh83rCEmiccLtnjL3fuRvB1kaqEV6tedkL2acqR7vJwcnR8h2L9N7wBpVtjxP6Z6kLqBq4RXpWp",
  "key35": "5bPTr3Ymben2oqofSmQXFNzirFSyrUGHVVb67qN2V6CVf5GEUTpCGVn5qPTXzSddVMxfK85nACmznLcgbQgMxBrZ",
  "key36": "3t31DAd5tVeFvCMeThLS6G3a19quPyvKcif65MbVksnHbg9BsTqmpiLU6R6QhwHBvW8rGhHHvt8T1amH48WMSWJP",
  "key37": "3rfTNzcv1Ehr3nRx915sZ8rWBBv4mDPZiFKJSC8tUwdH19fWj3Dh1xMhho4DpE2hWPCUjg1y1Eey5be7Exzj816",
  "key38": "5HY9nKAbSRyi77c4CCYdU9Lgp6B2vi5US4k9amDmSKayyVuh1JdazmVNWBc1rkNpFbrG1xGJVJte4YBr9jaSYzJw",
  "key39": "3axWjg9NQKvongJ3fuHft9nDZovKRj3yjy8tnGdUDo3DNGFMEiWhutKDPd4ZSQQ2myqiK6XUaUdbfXxTpGhPJpAP",
  "key40": "5VpPS4xWAAXLpWZDXBeeLutCcm7k7Ntckf9rhLoChVfs1Mu5C8zXJUSQ83raKPdvf9kjxzdDUYrDoCW6cCNJVoiG"
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
