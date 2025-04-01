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
    "5hXtWEYz8vPQ9FxyEbD49vTDYUfuGa7qxKpTbYyx1osFeshka7dY1xUBw8mUpqt2g8sHoxa5eLb5GgaZNT4sYGeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JaazYJ4czuX5TLfTdLATa8R4hhDKx9tjtdkNMNzwuniurR3Fvw5LpESLp3LVH1Cf6wpKu4Wu6aC1t2Gb6ta46Nd",
  "key1": "377tHGJUPP6TkVmcUGNLF5nfhdaoCmYqqo452YNARh4h18Nmy8Caev38pqmCF4K1msVriWuCctHnTipsC7hA8qar",
  "key2": "5eMh7VgMQ21kt4of7xBHCJXuu4xKs7cVbVFGfPBSQ7e3ntCxBwctH2aEGwf2jgxzQLb6GWMvBbBehA7XPqFT7ztA",
  "key3": "2DxzjnVktmnf6pGVv3shVNshZLnqKKToEuMesWM6jRdKEW2mmbS9t7gw7RViwyxeYFnV87DV4W4XEm7PkpLkXJPd",
  "key4": "3kfhMHdnJSfd1zKP7LPaMEcmMYMr2RWZiPtprwN8GhmqN5E42HMDL53bYMwLWK9G7oNBkLhCfwCwQavJajLYnv6j",
  "key5": "3aX2SxCM5mdBdH33XQeoXQHTSUPGA1a98qK8ScLoDcdh3mWWY6rBX37APYU3K7FHZeWmHy6kBbA8odvfDfKhB4gu",
  "key6": "3JHt6YVoPc6UN89RiVEA5yZC4VfqLqE1WXce1FsBdf2qAJcytc6Px5vnJxRmc4v6zhca7hU46GLwrxbv81Q2iZ9N",
  "key7": "3nTdZUfHiXXQ448nV5odKikYib2x5LeQETQb67HLW21MKt8xUCJ3r1LngPBTR3gGeaTut3za6J69NZnBfojpFFHG",
  "key8": "WxEvnx4wKdWeecUsNt8FVHCu4dzu2uT535YQvEfKC3qpu2xh21n5Ki8ntNEPyTzYuYqQLqBB9HcByetRYJKvHyU",
  "key9": "2E9s89vAmnLmvr1QARHztnuZF2LdRkMGPiG6ioBvT3MzoeNdeant1Gqv7Hub2TKfUZszTfiQs2Vc3KnL2Z72hFAD",
  "key10": "4CudgxAJ1EkrRbexGPspVFfHpbRCQqV3V4f56iFL2RXBAM1b1dbqZj4sQqp5u3tPNdk26Fo8yjQoB7uyev9aRB2X",
  "key11": "3VKZ6CJy9JpWhF3XrirfLB18QWAkZqVoqaVQpGETgUpKnGsPe2338DqvLmF49QcN6TeYeBZF7cyUdtgvF6ps3TGZ",
  "key12": "2uUdRiWHuvCYKvR5BGL7VfhySkzeRcrJuwUZYM1UP9qYcwDJJpYVZu7FNXj1J8Mfqr5BboDucrRGf9h3moCxzUzW",
  "key13": "3ZEiRD32xA8pW1dEn1kvZbkeEoLk1AZqfeSdi2bcDKFkD2kZdQQTwUDoKBsNrjH4vDZdcR6kpzLvwYNUV7ySh96t",
  "key14": "3Y8PYSSYaPQLTJJnAsRC8JDogsv6E9HQ5nqnZJ39qRsoXu34mEXZAD97ds8NoiYAgh4tLDmPYZyeYfHwE1RHw2XP",
  "key15": "3Po9Nn1fppydwqk2uJoPpyug2MSVbiVJq157QcjiN9wtaCc6jSwE5UbEdXkFFDM37DTycW6G7ai2yhNoLsqfZHnd",
  "key16": "2sLEwsCnSSgrXtQVbW8P5S3qrSR6cyX37aVbLACix2eWSsbJtTU5K9y6t6GWrNtphVimTBDNS4hgqbRfHHNyCDRr",
  "key17": "Mzccx6LPTjzATYLVVAMPzZYvC8DfXCPSgkX8r3zJh2XrLm3xME9D9bxfNemZb1cRysgGUG18siEPi6zsZQdgiM9",
  "key18": "HvtV5Zxz5yHGHp8wSVoVBpGEHcozbtYoSgwuofxK8raBXMcE3xQuuvrEsBZWSSYeNMyokwFpzN5A59hkdR9xXwV",
  "key19": "2XdiE9ugcnerJQJxLTasasj5uwo1cYJZv92sUZanHAyz6KPFm5g1BsA4z8c6QD8PnQKHdhkjeaYjdHHYCFPtnm5M",
  "key20": "54Y3qHiZWTyeg2GpZ3TZYqJ3Fq26jhp7oQfTC1fU9jUu4opvUMbKhGoUAFUS6YFamUMjwGLoi3AUZouwJTD31hVL",
  "key21": "8KK2kEkTC1RXK8b7zR8eUGHDqdGGMsBJcocysYuVCTThDBi91U9B7VLum3HoHb2A3ekSZ6PBhFB7ubiqakncMfh",
  "key22": "4tisbQbPG5d9Yy1eBXxFREsVLnp22UhaFj6yPFKX7ESSrZnzev9b1c1VCungT58M2YgxC9sJGNxUNhx6FWnhf53j",
  "key23": "5kzFGTr8iXEW3YHHAoWC4pwv3aovDE8HxfSASyRsg4kSwpAfRKpzQi4G6LjhoEiixKKoDmuHfYGZsHv3K2A5WGyZ",
  "key24": "5T8V58xgWdRLqE2hikh9HnWJeWZKHtzbjcmCAs7APFrbmzauvhfovQ2WzHPHFBqHk1vqXmSKQH2shfm3mA7RzPtB",
  "key25": "3vqDq9VSJWdwuvBAMAxse6KrEND5yWvxQmrV8qvW9vKjA4PhvavojNwqjQRn7EMqsmVVkJRXycQ1Mi4iUN8j2Hqn",
  "key26": "3TYGYuHpzKHJyitxTL7EbTe8BRFkeC1eJwkRCuYBHY66JQNyXQXJCLfVpQtfvYMd6yGMHCCPEABL86vHK53rXed1",
  "key27": "4iaJiQbjeHE1iKkjCLowq9f4TzX712zuZuAXiCzzkV5ghMLfFad565fDXE6ZW6oJH6ttkLUFFQcH2dh1c5r4ak57",
  "key28": "UoM2KERTp3g7vM9AebbVgxgzj8ddPcHEZ5kP2QRbJvppFJarLDwkZHFBbGNSZdQxyVaKRsW1Cmohiz6Sj4mCgvJ",
  "key29": "67hANDrZaSmDRL3odgp8ZVUyxNHPRU2Je6FErTYHTGGpqxfKvcxrLBeRFmrgNYN1zpScr9brgUjHggDNn132QS8N",
  "key30": "5vXZWbSLTJRikfNg2AN7Lh4fi7uTWURFidjj4qc1JPtKfmNNaQZazDQ7oAxyeczeSyRMjHxAzuS7bNS7w5XnpM51",
  "key31": "2QhTkUE8yNmywNCCm88hi418FNUfuuyp879AG9TufKd1zsUAHwQLz8a9hFTYYgZ8Zo5PF9AfgWykdYbLgkWe8gLP",
  "key32": "5GyL5rk1k4KS7kyAeYQshCsm5bgMJdUay4bKenu6Y7Bc6RN6pPeJDQeo7x6vUQtEaVbHSxYjE7DXUbeV7RCZv2ah",
  "key33": "53UN1yBzbP5iZ8JTKErUTn4m22wdPv1cvCzocjJ2cf7acPbX3KLvGiHsVUwQ2mq6v5ZxapTyjcADUHyWcxFo1iDb",
  "key34": "BDyp1PmBvQQuiMUmPRsaQzBSpswq3tHe5MRRkS4LgmKnkKo535uwbi2yDg9anrcZKvzrK3gAeztwaHK8cCVaMjy",
  "key35": "F1Nx6emb4vH4EXWweDN5PTEf2ciaB51TyNQQ21sYJFx6Y6LMU6ysKUv31MNktSEfCEnQmRBMRidYYn6Gm5L2rBz",
  "key36": "4rtYcBLW9Y3mC1G5SBWnAMPATws5pLVosbc5cztbm23HsStFYoBksiAWNbdsuRzXvQQ5A3jgh97RTXQwvxw8FmuJ",
  "key37": "5q7BFkB233kxZ28p6ZDtsDJuHDoA7TBQkRej8YnNhbUMu4SgWzSEYcxqptnHidaZGzsDsGiZqQExrb1vwshqFTxu"
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
