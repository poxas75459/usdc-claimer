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
    "G2v9h1svFqdxU1ByUKDtZrxT1kDaV9ELUzrtBnkUkqV7DiGfJPKKrD534iHqwpbCXCp6Pw8MwTew4QLU1AQUQai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CPSJC692KrdYvYMNEUuhsF8qq4FM4v3QA2YCszPZDjBxaCv8DZfRKvtzdqqu1PfgnRHCZqEqk8UayMY4ZqVYmXw",
  "key1": "PXnKVe9axsNrPcVwcqzEnYMSoBTM59bBBYeVc6bqYWoxTnhnwijNttwQu7EFsuzhLgewRLCVgr5Rw6vv8nvVmjo",
  "key2": "4gmFfNcfZE5KCSdkRsLAAcQumcwsTUTYzKczZ6LvPLdqfWyn2KCpCX2saxCdw6LugozyrnR6C8ewpex2KXPCHniM",
  "key3": "XFc9vA7GzNHg7Cst84y9kXDuRzBE2Df4VeEijzACC6QDh38MqGvnF3mWCYE9SHN4izyTbFxJNSqFY4sQpitJwoG",
  "key4": "3WWTUN4vK367M66pSxaJHRmsSEMpES5rPDA2BGqW9uiyWyAKXQ5bMN5gybT5LnmCpcpiEhkkNhWp4m8ZFW1RyNSG",
  "key5": "26R3pzS7czrpn4smUUpbRv7UZGThvhquRcd15Bqo2muSv8Lyt6MTxTqq1BjjVCLQKyyW9D8RpE2C6MiiF6bpu43S",
  "key6": "5WgE3n9g839bAJzSJfv6b4mSGmEwc8kANVxLAHSDNk5YccCDKMu274e4G8HhbyFcB18Gxp41jdVSinNbDynhz6v9",
  "key7": "5UN4igB28EN14GHUoSaodi3MvtSE5LKP87odTtmxgwrawoUAu6xQFLg2WKPQF2zmDjg9D77xMRrtymdzPXG2CsDo",
  "key8": "6TZqCbtTy5M6ju6397TAkbdqtTTMnwK85n8tCu1qEuSWvKmNX37H5d5vbzC5CdxLYRDncpfcqg3aoSnKZDdmakw",
  "key9": "4iruxyajtDjWrDCuX21KZiV478xC2Zc2cGW6BDserya4KZJPTgxx9iGaBWzrU2xzDRggJkHMpX8dmgbQo6wgd6F9",
  "key10": "4irb4jitW2jQuxJCS3jvWNXjcRHrHbiiH3v3XcKgkVcbA617W29BxktLndJZtCoZm3se2vF9ZVbVza8Us7LBS89C",
  "key11": "3jX2KSBqNhquqyc4sULKSSWB4f6A1qsqjU2xvBLVBsTRUDguQehVd3pyXwVb97ZoeAyLkqQAfifKzi25oz3DywRs",
  "key12": "2HLKyedczmnvfH5Hse8LtEEJfYwVKtn5E6Wzj5WkUDSL49q8KwpfKCVPTGf6s9MwKxPi3itgsdgUFhwciizyeC5u",
  "key13": "2BBKgBAsFBZ4Uh6LbWRQXth96Ku6xgkcNWw3DaJg5i8qWNHK3guho27SZgtCPkGGywi288bW5XasPJQJSnGKwA41",
  "key14": "eaVXMZ34J3YLY8w8KWPJSGitBrGFpZMJ4HS8eZe2ccFkyGLkMpaRhiWPj5oF1Edeh8cfLAARBfRVWpq63gjTNqm",
  "key15": "3Nsphfi2J1wpHtbgrGHCSwwbAv6V5prJm1pvTQ5ntG82p7rs7LFauGijKhGySNM52T3VmFVzvfx431qJ2mF8tXBr",
  "key16": "5T4AqWFDL7jCAbqMrJA53Mzk7MxpzKWqbZyB1NDzWrrB6Emw3tkTg1EQ86VfKW2yyYnsXyKHdKjAkQfuMySuU6eg",
  "key17": "2g5m76KQTEPwBN94WAjsnfMRAUbv9CW5fLxrXVoJoC4QUGgFm7ZEcwjZkwNKg4rJ7bqSG1q8DBEVauXYb2nE6muP",
  "key18": "2ogzZzEvsvtQ6HPmuzzoatVxWopBAYG2fesTAHT5ADWDfLwgJ4CfiwEd6Pd1ovhE5WpYCATBHVo8S4EdJSLapuuv",
  "key19": "GEgzjSdf3sAZBrEkin8tzvtWfkqTu2TNqEsL59Tf1xWPvFZdxBKbGax2i7T5HeKRaJQChvo35cNYBi7DZxVeZkc",
  "key20": "34uvc4Hx6dDE5j1Qxh8yG2n71Zv3UP4JPvUFJ8tog9zerQux9d7G4SRqp2x4Ch7yUydmFC1NySSBCG3nWMScfZfv",
  "key21": "4TrLBU28uq6g6NnEL9hVZfBPwNpWG9sUMvjot4zF4zg3AhXbGjFYCnUra9Lp57vdewQuDE4sHgQQzTBgfMh5fVfa",
  "key22": "Wc12FC5duqJHfpyxUTbG4wgsaKJbQQ1N9Lp54V2VdKheANpQ1du7w9M8gaqbdfxpguooV7vmQBhB3LdDGDY2biR",
  "key23": "4DdvrWx2yuLUrU8g44kVz1JE5e3gJT4k4DvMJSitXKY7MbAsz8yw3wtBRrz4dX7p16hwinrZgHyKiqBLyiYZDLUj",
  "key24": "5dxiUQ7zeD6fpFscuV9kSXTPfqYnLo5ckdq9fYNnYZw4GC318KNJTncgXYYWnPokDJyCum2qtrquorSWtT3Y4qXp",
  "key25": "2Kd5ZVM2TMuBqcTuGAdedFshJMUhmxFYueve3RtKmnq6kZAsTYo4NPbwa2rLa2x7PZWTKzFD2rvxjCepS7f6hF9s",
  "key26": "2NAckaiV8bng8GMpZxqbzmUmYRQjX5qhDTDritCeUX4W933Edaksw8C3XdAwtoZSCmRTKZbbjdpVCKGRjh4HiqHJ",
  "key27": "3bg8ChVAwsPuAP55qSp461cQmSP1NA2mV82nKBcWWeF4N4YTSF69eGbXzao1GFig534i9CbiKnAsC5CwCZpv1DS3",
  "key28": "5T2dmfNKWBWbwiGjZEXA7yiC9he9MMa4n3M9qDgHYBGeVxVAQctjVJfMpRMxPw7LAh7TcHqi9YEkG6cmraHsGfhk",
  "key29": "3sEHJALQNwqFvK9YThGDhcCR3qhBEeHVrBcSxYzKSggmKKhbVrJ7kgkR8PPTpRsiwmgtwjiW5jcJf5PWY1x6V1o",
  "key30": "2pT63mCPsTFFDNF4gsGKecv3CEt8q5aGi81VFoiG2LJNDMWfuYT57SGsEJ5r61FuCZFKh6JahA4vDjSFxHkV19dc",
  "key31": "5ztKx7kmmE58KRKK2MXEy1bzNAW4BFsgKpGvM9GqVjaic1gZSy7YmTtDc2iT2DYBemUZfYajd396NFPmSaVmM5Gz",
  "key32": "5wnjuY5nGAv4BCSbMiFsq88q4yFX4pjpoMg6FkMc9hmw1S5Myv6WeKG4pi7oZjThZ5B241AvTWGYHxXpw4DTv3js",
  "key33": "3SEG8FZuM27WYv3K47g2352Xt9J5AmTXufDs5stYaNs2mihuSxxFpDQkYHNEc2T6YNiZ1cciGU95NXK5UnS9SkCD",
  "key34": "4kBqtqfczAuT2DGptDFsTfN461jUadYtrhqjFyWNSCaybgMiymf3Z829CkNTmPhhfu1ayGyZcqufXuD9eZYFZA8B",
  "key35": "558XNhSLvzeBWQ2qji9FunczgWqfz71qK6iWK8utYtqFwz5BShzXFF3BB3Ne6vCTraKFKL389jdKncYecheY6e8P"
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
