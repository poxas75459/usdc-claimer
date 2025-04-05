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
    "5sNZ7e23DZVRYeC9esk5yUfN6PC3L1YTFhjV3iUyX3LChF9kiiMGfsbBKxkBARRbFpjN49V9KPx48gyJdzXsfVsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxnfWLRqaqCes1iba3mnMBVXYunso9cjE3Ut76P1SqcsQ9iZxogVn2XJLFF6JeR48xS5YrhRe7Jn28mDH7WXxTJ",
  "key1": "5MFBZ1y2UkfuroNFnoe4dsitsmQbDCXCjKrD6UNRBHXeW4vhEgZd6cdxWmRndrVGpgKuL5wY7vESqTeYeLRtkJYQ",
  "key2": "QUgKJ7gyCKrgJSRYK5Q7VhxwkyMB4geBgdUJAsqUi3bHiWNru3NfBVyKQmatXPhfrW9pM7xq5xL5Eatxvv1itQL",
  "key3": "2f3akMCZVGGhfNDHzpymfM8xRJ7KASx8SY7qpLj1UP3AE16VfpoTEhDNWMbZi11A7kwKNpsokgJvDEBGmrg1kUbj",
  "key4": "5G9asgU1gXyE4RzjiQx8MNKaTX8rePR9DgMYrVcUPydTGmzoR7R7MN6FETSuFdHmi8YLdFGHifxjfNdcYoCLw5uG",
  "key5": "3iLZ7taZNrNxKAm9MeDAf3YGLqrvhwm4sFQmZNuotby1fNNdALq4Ha4JzUAciqWEo95YbPmJNmcbEy1tQNm9bDoZ",
  "key6": "HJ8EBbmxgCpFrZzPizqaVCiNN454D5GAtK2uNmNrXPiKqn4R83B97BXHFBfmu6WUA9As59ozUPJcWykSZfgh52Z",
  "key7": "e7GL2uhtwmkX8YLefJ1eKe9LBEC2qvQpLRubytZfwdxnp69fYkPwfrM7jtV5P8mrvTeLZeH5sbCptvYfACtRPc6",
  "key8": "4TL3kkhTQkTZsmeMXp8D7JjCuU7EqhYXcuWSvCfrdsGiUSjgaeNN1onUJHxTjzXbiPDe9r5m72TZ2NUVu5vyYC2m",
  "key9": "29woiXP1Ehg6xbFFYPaSpM3Ln3X7WGkhaLaGSaD8y5PzuAYpD7wJnNi19ye3nkGvvwxEmktcxiB3ZAHF4VUceoUP",
  "key10": "472NErW3vpBpdoXKhAkneWvUHKzxLRgU8CfpjvZnKmJd8bRCNSSDqSxaSPVhDWTRdNMBx17JM9mE6tyfUupr5XAg",
  "key11": "c25yJkxBq1e3qpA8Sp5LY7gPWtYBMSx1R6yv9xwCmkgFJQYZseFrR54DmUL1a4muCAdLkY3iDYW6FXwwxjegBzR",
  "key12": "92GprpqoT5B7DpwERH4Z3SdYo1psV9JP56M3R118webggDmFi2i9gKjdHqhiECMqEDU8gvEfEhafrjnPwV2nAXb",
  "key13": "3ttDFMhV31ZADYPeA48731m3CRzvwDLRF3FcGaP6xNaZsHyQP5fuhw7QwsBjaWMTivgovd8caJvenm95zraqg7Pw",
  "key14": "3p7C7VA1FxG57mTQWTRp3D466Yf4sRcEqYEHQzsQUfU2skpEuJb8MHfmb4Pqyaha5HSfwiWvfhL4Hbyq2k6ut6YD",
  "key15": "5jFdxC6xhZK4LeAj9rozskyi1PmhoabnLy2PCjSHSmTpZiGv8EtydRL62nSnbJaV57GoypmBKAEFjYNYNsuLivJG",
  "key16": "37iUmSKg8X3tcVxW462YMPj9xXYW5Fp1KXiXSS888p7AVweKbefqKLuFMVsfneomd7ELHB21WhxdneSK8HeL9at",
  "key17": "4csML3tpvjALDcqBGMCg7RQMUutSuxnqhbvH3BCVvCysyS88961sCt5HRFw85jK2g4Zwd622m5MSk4XSXKd2aUKp",
  "key18": "4W99RhqSQfHAJUApEd6t5ZPBjDg4btv71DhhHuLD6EEB5EJwUKMpMiP4PuoWxuFarGuZzJX2XWECbRF9LT5sYcTq",
  "key19": "3VubiXLySpKELSj2saXCppYLt5gWzvqxJmbTq7i7Cbxade7meTqx2gdRFj9MaCizcmCz3SbYyC43gcnjcttKj2j5",
  "key20": "3DkM9MyUUMkentDzQTLnro52Mfe9kyHzcayM7wadUyfs5ogVCKciuhxaXjWUFHiMzvsSZ9YHCabWCdkmQ3MiXzY5",
  "key21": "4jhFYqACb2QQzjxoyuua7nY3qztG1KhVmRDoQyFpgGx2NebkxRp2PiuuaJ63tGCtZNQ9nvSTDTP1uPCmE57H6T2u",
  "key22": "3boV4sDqjDvwD938FyPNvUrenrRM2apZKkS8ABzrsetzL9mhgZQbUA9YsL4wSkKoBsdVYBagct16hh8jWjBcTmbK",
  "key23": "4tNDLC9jhix4TZEm5yXvGMhNpzftr72PQ4AQCdJMCaPWsRQ87a3jweaEmMfFDicrmfv2DFRaCmfM4k4hXzVahHAB",
  "key24": "5UUUMkmzqZNeMfM5YeQuyD2uHGuAtufhDfbrDFCg7SbgTudqiYEwBCBmgjGuDVV8ZuJVs3Eb8t6TptyHFZUBN5LM",
  "key25": "4FTmNURMuBAkCgK9JRcpDoxuzBqkqBVoredENfBUgCVb4xkm72pagRjp2t8a1yPYKaXdqXUUrHKzndTMSLVy73o3",
  "key26": "3dqxA4gjo8ZKv147NdU35n9yyZDxHMX5GaTre3MxcCVMNadZnbe1DzNyB9CV4ecDCYyTcra5mQTNmc6fYw4pzwM6",
  "key27": "44LY4nahCDHY6VLw5gwBhSkgx9RbJT9iXfh33DoTpGXZkcPRQXKJPQrTbMMTwwoCYWadLM2upbJngf9KXL7hHcHA",
  "key28": "2HaueRtchW6QsJ8ZEstSkNPhdBo8DHjkDkEdenpQ8VZngK59TrfXMsqeY8crt5fJFGtvXtTzXPnw9tYwtsLQyoWZ"
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
