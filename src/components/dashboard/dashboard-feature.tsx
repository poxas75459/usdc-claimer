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
    "4hmJiE4MJxWfdjgmnnhAobvUJzsCbSCC74DKNdQ6Pffj8uxBs1CupgSJWaCyby8ybXM9AQxBZ4RTXCYZVhvnVoVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B62npsYTfvt9Nuyx3X7m7mxaX3UEMND41jFw7MN52MV41vyH4KLmtw1hghKxCUFExS7AhukWXKjoYPYjs36KXka",
  "key1": "57pMLEKbyThTePpSAieXFE5WcoGG8bxJ6p3j4pJjWMaEwz2pBhfF84oBpTxEBXHs7FzpWdAGEm6L3zp6Mrqowj9b",
  "key2": "4eaonkqQoSftqNgTUQt7jPGRZwQFdHB16uh4Z2UyijsfYWp5Lk2SwJePHo8MssEPWUP6n6eTweKobNATCXGwFjTC",
  "key3": "5ZGjEGNTG22TesjQKqC3dd3UcTCdhXUBAA1duUXX2Q7MNGKCVXQuyGVSDnoaoymKtJVJAvFCYBTZCt5ZqLxnzeWu",
  "key4": "59XmDQGrWJgsdwu8EsvVrYkro2LwXoUw5W56TUwcHnJ9cqNzY3DM1xUeMUkprtJtmYZY9urTXrPh1QwkAHuJMfaF",
  "key5": "3qGPs9SoViX4KkV4LDUMYr7J22CT3b85VieGaGMQF164Qw8Ct3AkRiCRSoxi6Jp7GqEYxWu9nXQYuRg9AVUSUjGa",
  "key6": "4wRvpZ9MrqCSQKNZCqYPpC3Dvspyjp9miP5ArtEdAaKs1haANnzdWfqDZ3oh2MUYkJFuJ2hyDRXhtSKyN5QXVQtP",
  "key7": "4DQAScYwa9cThMhjLVQPggYQ2XCUw774EcadGnfTdGjv8M823nJ6XKU1gD8rgRoxjoC1TXStvTs1T3p13tpcUf67",
  "key8": "aEsmfvVFzkRukVPQxE5KiAhP17faWx9sW46QMfzBpb5czJ7GvQ2BorPHPN932TuNpTFDS5TyJBHAU5UehNWJ68m",
  "key9": "2Auyurj7nqzzAUJdMpMqZEFvSvRqpydPwN2NihCLon3xz3rx7oD9UxvRjsSXnuMeJBc61975FYB2cSY1Pg8jUcyE",
  "key10": "4CxzgxZdK3f23avwosuND4uELyxYURha8Mk1nfVjd72TFrX1cN5JLdm1QDrMrkbgTDK1mR3sAtVehaPWFAiqotQS",
  "key11": "t3NkxLiT5fN1deDDD2N6x3oapWkwTSQzDNwdGGSo24XjF7J8GXaLrePYjLxhRWARpcXvRRAsdNzNXAAH1WHEEmb",
  "key12": "24Hi2HFrbbVb7mGAE6vyWsq5VD9Fjcm5cHCYQngKFL6Tv3AdCnHTH5BbaVBapwoECTLbgaUCjfmgFpyVy2hRHhkR",
  "key13": "5S1dTwQGxFrWa59gt3T1izerfYC6f3KPzZakgAzGv6e1f6DekDCCeWjr81UxnKePMttBwpp9m6Xf9EMYPS2M7sV9",
  "key14": "2Z6to8Xxer8JeAbrMYR9gnLai4jRvouFY7Rcso7EkNTA6rM74auLSeQkvrKcxezxXnZXwwuSWDKuJYqLaZoGmSKx",
  "key15": "3TMR96JErCJYWuGBZZgLFU3t35c2KqmPw5SBsPYGhcbLtRgi3ueUPinfxqfkii6LtqEPKj9EhpTR21cWbryEdWC",
  "key16": "dWC5PS2NoawSteMEcLk3KF9GwefM3aYP4U39kXGvVNPmfz2VHoQcHK8jUXfHvGGTmoGh8BLZShad4CskDrBmxCk",
  "key17": "4PayqssRkZjgqdcJNAvEPdX9YuLxH4d2A6XuhreSYmQ44sjd472T1PJ3w9tk4T5nd4w1CSvWLpkuas9GFNPVMUz4",
  "key18": "3QAARi36RvbDGdUB2x9yThdmstr2jQxHsnArxd66J9ruyFosSBY2ak2Ndf4W2nTyRaFkTYWQDAQoNM4jW5qQjdkh",
  "key19": "5k2zNvSqcM6wbe4oVFq6okJXrsnYRbQ7Mt1WPPngKtwJV4wgKU9cmw3c5mT9F9e1kV6rC7vLnCzafKUv47aZc3PL",
  "key20": "2hehzUaki7HRUM47d3SkCtRaLM1j7siW8ErdSrgfXFsY1YmckiSkG7R3z3XVUJZ6RbS2AhsHgXFfkBy4zcyfjeR7",
  "key21": "3Ed5WGFkwszbGXNiRdPCvBt8qpJvtcnmMsw59PBetsrkzvuxy2GXVRkVxDgi8fBUFnDEwtepn2BSZvJpTMbeEShX",
  "key22": "4k7gyZA8h9Xrn3ZBjWrkftBAMNaeapbBFt3TTERoaeSFtifiJPSi2BGhdB3raqHCfeGxwhqXTxGuUGRqF28LpERj",
  "key23": "269ih4AqquuEkVjK6upnawSEB27npGR7kBtnDzNZYQEjTc44hfEgoAUSX12gLk4wRphGLAPXDmy5zhmDnmLuEMk4",
  "key24": "2pUmnYxRi1wnfNojPtrjFVoxCCqiV4Q5bAmkDmtCg85ivV8otb2FrzqtaZP6zFPBfg5uCZmVLhPFwoMzEjQwAafz",
  "key25": "63VPeUYh8psbQgP9UMqoDs4b4ZtnvtqJSHCeJzL739w5Yz2iJtW22iWX8wPiQcpXsQHGmsoyEEGV7sU6xEfzk6gC",
  "key26": "5AjmVNYPBNV9s81A32ZaZfZ6dYLJhPY2mjFJBnA6xN9hxZ5Bfm9kRcEjXmWtpmw6DrKEJah2o9mQBtWQFoUw62vp",
  "key27": "3ZCquS6Giz4YVqBnZm9D8sA19wNNXvG1Dg8DtSJpEtjN9rKXvYQUqsePURo8SYE673yud1sRYKvCCHGcESEr8kUB",
  "key28": "AMbrWoTv5Kaf4qujdjG5Xpj1zxD55kLNbDQafDGyoni3YaHmS5UGNehpRwPg2W7PeCKUrQCQ4T9oMRhnvJyxXB2",
  "key29": "4LsokJAnSvqVkYz8pNmvnuVPq23qJsQ3JkaTxKb2amKp7wC8x3bzqgWzN9KPRfoCWvn6SZwWLZM6is6wcuk9jwyx",
  "key30": "4eC2LTLD4gPCm5uDfwSjU4HbNLxshkCGBfJKWzFt6qvK8tB5N4BpvjiBtctWHWQNyMq8iYGXVQD9fS8iFJTcy2A4",
  "key31": "5Pd52nkGo29CNYpcZdH4rqophJHmsotKwXS3TVx9GED44L82ELeBJJMmgnBBPUaZfnpWDWJVQZ78d95qhobpGJGz"
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
