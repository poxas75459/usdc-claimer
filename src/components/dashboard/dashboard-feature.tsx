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
    "59yR2DhjM3ZJKyNGAPL7Aw3FxcEbHDpXCiysJZuYKzstHNCFY3ZXGUyfwgiqwMXYpazEUAPHG5Zm8NBhrBTPhC6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JHScQyUhNPAHi6KX48Q9PHVTWv6V9e7rfWD8v9aBaqrGu82nxSAkVCizfZ3d13VmtBCa8mz2F2kn891Nv8CzaLW",
  "key1": "3L2FuXuSdpBkwsdcbcu7vdPGS3oqcsq75KwS7VwnXsdxHBqgoiL9Q9vGr4yYUazABc88MAxiePj67fKk1cUEL2PP",
  "key2": "3Sn1fzBgEi1Bn9W4wypHA5HjyVu7EnLfMD5Tt6nTaaeiPwL1hztws14EYR8oEQ5aUvWeKFUvMtWTcCg9Fy5bcVKm",
  "key3": "2YziW5K8wiTgYFL8SGK7KZXGstNSwT71oNN4esrsSEk6c3mJJbceYWxkrZwnxrUKks8wpbnApQ3hwwxi3U13ugos",
  "key4": "5QAvoxfHaqmivann5PLz92vQKSXCRZExM12E9b76NqPDtsp4XyGD7844LhVvKHxSmV4pH1WmHXKmECAXEQTEQXSM",
  "key5": "5swZZZ6mMeq8bHUxmTGBzDeTskDSAuUReR8KuZgciCCb12tYUVbhSkaFFXB8LvjLKqbgazBbcxaNvodvvXur9vso",
  "key6": "P6BQdLKP7bPQT7hKFeHoVEgyU5kB5prKBD6x9VT7gjQDfg7WZXCR1CpLwqhwjyB7UcPpXGrUom7EvMT2LzKamJe",
  "key7": "51cF3vD76ZGpsmFgoSiScjCW9mNzgS1TJ8oNon7nLDaiAvrubXzrMvS7Jco4gBLsZSAAgWAXw9G9Lwaktd4EEAcC",
  "key8": "AextAovzJBHsC7gAHKUVW1Uy6v5hjwPj5bw66eiT6K64xW2oULnaBpHjUUtngHi2ZuU3JqfekyYeYTc9QybXeoL",
  "key9": "LHFgEgEwccyBakfBmyWhpVxbeUbK84W2PMNKjPmtT3WiHsE8zteAeTHRFZSkRYEk1MLWQ5A36zzWA8VsBtysyDF",
  "key10": "4euXFBxs28QKCnSyji4ie3Uanjj8QbBiZ77LKSzGwytEoV1t5ZsMLh8X2gDvgZRk1HFNRt6AB9NBXmHvdzJhWisR",
  "key11": "R2h58iYmvDoVEn4X3s2ubvGgYDZckFvBLoii4BphEiQdkgiPWfsv1BipiPWyNNB7TXjYuZxmLjdE2BCnnQSXgzR",
  "key12": "4PNngtRGEJVXLPcnkKSn3UTbufZApL5ths6Q2irgnHhN3Y6TofxC9Wp48nJWHzfTag45FptrgrwiGoyUqXhivGCT",
  "key13": "4qjLW19qEc915oLQPAgTKJzaXvET845tXFM4kBvitxwWYcMeA9fEP5SHSGYuJQDKEVvNMBJuXweHksa2A6U2pndS",
  "key14": "3SfRZczoA825hH9rxXojjVcY2RgEpogWARW5skZmUodmzqZkTkjHrv9Bx5CgFtFjuJs4GKgWspTQh7q6R8ibq9wW",
  "key15": "2bhtsez2rhCo751FVPeMihTRBo8D91ucAfG8GJ4RHgV6Kr45DXwTNHWBY8gXrhnGdzQS78wRHfik8Xu1yoWxqp24",
  "key16": "5J8UvTvPsrJdRPZZpisQDKP9ZkYFcHhXT1UF1MQqUp1Rd72xLDLZjgREjrU1uoEbAXnMvYJHtPe74Q9XwgY5GEsn",
  "key17": "2aCFns5cpjoR3Kwv7XcsDH4uP25cU1Pg5xhte3HGF11i2mUPtNu9TDaq64PyDGH1X3ztEd6Vd6VJVnCu3hfTeD36",
  "key18": "5dQwFiKYE3ooyKGCB3QE1Y6YpeFgYpyjwfEUr8tHCp6z4pvfN9oyRSyqUngZo7t9RqDNzzJywpYbEPbEjBbfTMKj",
  "key19": "3itNmXNBZpcpboMwYjkX4386Wzj299rHEgwZM9CMPhQf2FRB1ZhYav95UJ69bavQfu2Fio9ArE6B2scnmaCrsxHG",
  "key20": "5aLiUBAsJBth6KrgjRcx8w75wzLfnNyYZvc5xirE4AHD45dEDQkPUmo88cmceHCfVYEbngrbLPh1Cs9Z95KxuJEb",
  "key21": "i3azicbcCS98KLBsPwU3pjg1ChYMprsjx9Waky1UoT2mfi827gR8fCGN2ezbdfcNK3nDxXcnSJ8f51rgdnh6PAh",
  "key22": "5N1jkY2m8yTj4xFDFMe9aAAggGWMkzcxpqR55vXFSGX19azjpWC1ognZwJVLkeGRZSWnXmSk8gUMvkFn3ov39Y4v",
  "key23": "4q7DqZmb3tW2ohR1eqhVqfsbcuJ97MQiAZioaJZMgxhotLgGyyxLHW6ootXWL18AAT2wW3qbQQ8Y8qDaBTJ7sN78",
  "key24": "5h8iWR1YAetbKEipqamKNsfMvpDvSe24v35G7gatvkwCY1iznuQUVjFMvmZdcohuyiQhCZtA6mQWCBPfHRFA7pvt",
  "key25": "5AMNCkQAdrFuJXBUJbbK6JVuy3haHccKjKQL77zur9nxQAxK1rG46wa1EYnQx2bgRQh8HYYQW4ScoE1MT73eYzqQ",
  "key26": "2pMKxKPBBhSfR9kFqYhP8c1fprnfQVyPRtEDssydPP3U4PMA43XwJAxQQG5w9sEwjLpokrNx6cnBnF1mcTQ9RFhC"
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
