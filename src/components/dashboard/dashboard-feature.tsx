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
    "3x4xbnjMp926bL6aynkTGCR814uzVBDrgJ7femmHzEeihF1rmDykAa4adfj4e8mpZ11JNjh5w9ybddhZw6XgmBDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwAntYjS5uvpwAonRN87RJ83vDzxj3a9gYGxecQLkE8rUP5iT5sX7gT3hp46J4wCy6dLoYDZQLs1qvXtMdcm2Wr",
  "key1": "5R3CHpTFt5U2bR6TLpYFhYicJZy1wu3r513k1RPcHv1PRPTJ47q9V9zTYVi8f9R6AJK6wV6Xd5YbyqVQyp9CM1eC",
  "key2": "ETHRnuQmBuUFPgpAkkyjVzuTB2XdTu4c8zztCKV4qzvEbF4UoScoSGjtuDqRmT4AEEUH5zd94yCpDLrwnfFUwFy",
  "key3": "2jqjyKaTePLarnwqNfdhwpw8SJGZDR32cGmfeQMM13DLft43Dz2BHTgTRTRk17or42Fgp7t9xPuyh8jz9qLeVNS2",
  "key4": "4L6iiFztFRtp38g9X2pJeFZw3W2mrffzBNHoZE2pbM5zDu3i65pDAqXP7jvF6Din8UoNpC4jBcYcyPCKgQZmKmd9",
  "key5": "AWHcuUCLJjpXKQVU9jSQyVURVz5wnExeuwmb1pktuwgueZ9w9xz75w8ev5uybmyqodCpR1qNokiU68TUr9Gci9n",
  "key6": "PSYtXdPz6x1ESd27ueYoUZM1oEs2qHDQqA3e65xF8zsv5GMsqkjPDMsXgJLYqhfKRPq2k1s7sU8RkXqGWVgEhyT",
  "key7": "4LowrTQ5127zXLuyGjkuudW7MR1L5QYUYE28kiuSnUvb7ek3WMh9LpboqY6nm3zXG9fkGT6gny2UnAN3tAXeaP4z",
  "key8": "5ukp54P4Dso76NhbdVtFNd8FB2nRBDonnNn9HZ3X8ZonaWkRLfWMNBWQiB84jKafkPzwCRLHuHuSKPhciAZgUqji",
  "key9": "4eFP7urvUsBdWRxRsuzoA2CkBscR8s2i1nk2L6g4B4muPvz6aNFodd6nfCWcg3peJAmGDoLj88krRS7rmB4DjnPL",
  "key10": "4yi3SJ1J59Jg1zT6A62pv8ptRVHBczpb5Pn9qBkq1ptBna48FFHNyXJLQPWoEGiXganjRZxshkegWMFNoDA49xtt",
  "key11": "5XKN2mN53FsmYGMhwHXzAL2dSMmECJL3HQRsVr5mHTzx12sGVsBDjJ9d45e8dDhqXQT5UXUr1nV6imXSThgrPfuB",
  "key12": "2JW6bcKCYq7bu4Ggb9TeiUDqp3KKiEMUZZP3tMYyMzcV56iT7NZf6iR5i38h1CTwA4SRLAgyr4KmXXRmdgbau4rb",
  "key13": "333FtDqSijuafbVXqEHTZxfWMDsLxmhXVgXxM14Cn42SuSMt8i1SuUoshXc9RprSBPcF8JAWDy7BFpUy3rXx5b8u",
  "key14": "4oHNsA1ZN8oTEgqR1i2V7YtKgY9nk74BUrEZWmJF6FXYhwQvJsSCkk2syqeGrXa5pqmo6G9g9NRgjUs11caFDzsa",
  "key15": "HRZebvKjktbs8wzP7yjJtkZcjq84yasuRAyJzZD7drB8CbRGdXzhDufwHWXoZJWQnXrNhYqJ2AwAfSX7sSX9xTZ",
  "key16": "dpnnuPfQbhaGrVuMTxAU7PSfQpKKj1iCmWDA1Se3W5etyeKYA9UcAWxHyR6po4y78kh1pR1kzQUtEK7frbkEGiE",
  "key17": "CaVQAJirHgig7JNuQmdVDwYj9EcoyxeYnFLjJBhvXrN4pyFJsa4RwPzHL1Zc9V8MKo141XbSuYQoMTuYpjgVE2N",
  "key18": "4DNRnjYNKTMZ2mr4j6c7Pbjm9Y8DR4up6nmwiRBFebN3g88SfCvGULJw9ahySaeh2eG8Bn1br5zn9CP16E5brLNQ",
  "key19": "3u4dCwcTuQu1QVSLyg8UeoYxM2K9fFbXdAT9z4MVrDqzGdEaDuAQB6v2G9KuXumQXvVcZJ8PyPo1W7LW6fhBZdp1",
  "key20": "47maCJRPmyfBQgmbseSThJJKPznsJqLmyURz8hPaztnJ8kyPkiUhaxTUHPJe2WXNa82nYhoXyDi9Wrs3YcuTb2UE",
  "key21": "2iAq6tjvgZaSPXtfsg4jWQN2sYcbJnDZfFAuogtSNgcxHAoJaJng954KngfsPJzzsJG2oY2NpcNnuRdQMXDwG2Bv",
  "key22": "kYB8keHUif5R8FdmeMuXTFfzpTuBkA3s55TkoXV7C3u6c8cix2K9zNzKuroZYo32Cb9g9WieAAR5W3AR42Zxorj",
  "key23": "2qfGsfA8Havd4rJWk35K8N97VQuw85mh5H21nG8ooDvk9RRvcaYG55qGk1ipEiqhuU56QMKitrcns32Tn2zjHnwD",
  "key24": "3Y27397CZDFxRiMK1QRJMjcZ6Fb2YASoyEkgDFd211P32DeQPZvjHTrNhdyS9Pc4BmAy9a5hykpzQWoCF6zFMQ1r",
  "key25": "2Upwh5UFnX3nP2Yff2axEbGdMeJmPxJ9Y2MZBhQ19wYtmmw6M2V8u9W3HCM2jmnGnECLAXhwEMv9QMhVNQ7Y6a2E",
  "key26": "5TKyaZgJnMfN9YdkBHiXGZ7ydLKzyjtHVTmje7kgSVnvR8LmFKQEKAU7xkoGYzDdEVCEDJ37MBnqBA6UBeLXmmvP",
  "key27": "DLehqiyRdnkoQ7RdU4Mu6ZbUZqe3TFg6anTUxvVwU53vsnArSr2zQVL1qQV8JX56dPtihqfyajNfX6M1ort2n8Y",
  "key28": "3dmZf21ZNhfTP8wreDx1rcLvQsBDYjbQtF4FT9LJaCCLxHChoH3AuysaDzgCzhGWWaGByZJ4FP3EpxH1UKJmGP9q",
  "key29": "5zcTKP9MkAr6rTbSEEEGgK8dbgvUmwjtpBjSqhp177eLTvwCWUcYZHFW1TikZ8e7e4VjcjgRqHyYpZNRWsfsQdnz",
  "key30": "WSTrpdZ4Gfx7ui7yXjp7wXaQoCjXBRn7dPD9D31unurAXn1kzKpsvqPvfWMiLS2A4m3ra8wPQSJi7uZEjjM9KCG",
  "key31": "4pbm5kibpkpBfrRtyKKuoLsV4Gd2rBgb2afyEZ94UJKXZuR6yyGyxjb7tjVbT5wTGrpNEGeyaAVrUdv2diuieRzU"
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
