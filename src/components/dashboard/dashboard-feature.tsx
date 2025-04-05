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
    "yDegBswU8rnmjWo661wdAJmLSoCcoq4WY26CPZ7LphD7eZUjXMSFMcNe171FdgN92x67TKegfRZgiSLi2XgbeiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VrSQ4LvrvfzsRVymqbBd6vfkdfWv6jyHHcReNrSkseCtN8Aup5gUFAVpnbs35uSZd6tvqZ1AxeZDbxfzfFXqMhK",
  "key1": "2EMTUdCLoeuGWJtpTPigCx8aBczGBCtJT5PVow66RuCAHY1N6581k7TRtTNraFNvhmC8GNp5EGfgjFsRSTnxKnVJ",
  "key2": "4hfTL4ED5eGUva77vi2saRyA36HFaf4ciPK4rgTgpZVyEMv9JBwPMU2VSU1zMY2gxKHg2KEwWHfvoqv9NtqDfsYm",
  "key3": "4ZtVR2ZMFJQJP9NtgkuktshLQyS43JSe6eCeB87tTitLnRVfR6qj6wzKgek3uurHR5of3DKcUc9moYvYYD3bcfoQ",
  "key4": "2PpLaQ4AnRbpA5Fcz6MHTGJEgc9qKrcT3DXj4mmQZ4YABoLooHpaKGX3r8S6bydmr4vavMvKg2Lc2jH7CdyRZJeb",
  "key5": "3BadLK1Hsa9MrfExCSggAKkSfq6BCYF5CtpJTABoxy6JQR5DrpNvQ83pxkqnqAXvRzN6ry4pVYDK8be5gc8sKCm3",
  "key6": "3FEBZbBeRB9cc8gYbKRPXVoZ2FGnhgQNnJXHmgu1Nu7dFFLRikBd71B2Fj9vvh8ovqk3CMKgCB53ST23YRrJQU4P",
  "key7": "t6F68evPfa2ohoHKTiP7fLY4dhXkbAdxZ5QwsHs8t8C8mfF57gmUpwUGve6baWmwnfMSRGR4k6tJeRxEfqZbFFR",
  "key8": "53L7QR5PRCv5Ck8LVsqXdtXiA8dXR2sg3kxvuTsCrJVDYdCGX77z9XCi5bULqs1gtBDvQitY5hNUxJLLyg8Zb8z5",
  "key9": "2Sicv1ojNTpPGXsVaeueSohiXJUsJh8QFBh63saFZpkW2p7ijdPvVRidgGo9DHNSF6NbBmyZUSoAmwjtJhScD1un",
  "key10": "Q3j1r6AJWJud21x2PNXT5EjLK3qNBM34VLZH6r4ivHWSzK2eg9MnJJ59nZqYnLXmTaR4GrCiwUQGGUJqCPwgEXf",
  "key11": "in2S5y8qHNM9ZuxNLYdmkUGkquj7yFxgipZpr1FNwTmAsdVZjQAnRMqKbMn3n39ZKjXrqKv1oYSJUYCRqwpR9Ey",
  "key12": "3PrbsQoDi1jhEZbDZx3G9pxUg2tnZhzLRcW5wrqUEhaQL8DC9QWC2JQLdY8nfP5d26sabKFBkMQC7TZBhvDkxtCX",
  "key13": "25RUeiESb3q7cNdvnDHoX9AveZ3vRCjSmtKnibvBNNzJKZC6g1mLk6zuVknAo1NdCx8caZmKP48vy3vK62Yqgbpr",
  "key14": "5svhiYioXXaFJsTDy8Fa5Tdy1LTasLomAKc4JBqiWs36QvQwoHkLBBQeGp5F3VBW8MLBrdtmZU9G33S4fn8tpT3c",
  "key15": "4VttoEt4Tt3ndyzrfAAHFRiaxzQuvSjPdvg8NUodPgDePV1NTgRFqV9caKHoYJggEKTsfJEk1DaRzfCAfNoWRAFb",
  "key16": "4CAwsofwAYK21TZc49twttzLRN2hwvRm7HQosSdg63sRfCUKj63hom2ptcwpkzBtsWZ4CuE5yVVLDEzhpdbFK4iN",
  "key17": "3346meKTmB19xjhxDQs1s4shWYJkGTnFoyroXxdJiL8tRdmXVQu37MX3ixcUSMcZ63qVwmNR1GSKTmjavBznNoLE",
  "key18": "58Wror7EWMZSXQHvSE2mtN6SRSUNkyHdznpqGXz6s3V68LKiF4V4ntEYn5U95tKRzZcqh3eCsFNtvu2TAmZpQiks",
  "key19": "5dZa4qJDNuZbEvgPxr6KG3E2T9xYu393Z9nCnPxjRFTt4MhgBXDH8xs8Af8P4eoocdfMcz9GBrnA2CuwfjpGs2Mh",
  "key20": "5YGAMhr4Go2u5Mb2LqdCGZibb3afBGbCoJQz8a2tfF2QMdEC9qQLWL9CJaEJeWkTa71HSEP1CTzbCjwT8iRAyxb1",
  "key21": "RUdCCsJ18tdMaQD3VeDZDQtrsdCdxDF5iD1HhzS1dnkzkTUE5BCJaGws5suDZjrSpYyFnrZ6mDRE31WxfWJZZwV",
  "key22": "5cC8uWJzQq1Kiqbs7H9nHQpFbYAMz6q4GzRJk12t9Loun8PByosk88EPm8aPdggV1BTNo6ncqeKsZjDe9y4D7C9C",
  "key23": "5UVckp4T5vWD7ucHzJ4iJsCAEBjynyFMLsBPemWw9m2rs6hB2tQDfJFJxH8N7Cha4TXpS41KHf9C5o1UqYGkcjpj",
  "key24": "1pvGZtM3zQcwx1bUid1ayDEMTSkuqjUCcCdSka3kiShL9XVeff2dT8Z3dSN9CJ5inWWcXiKoEVXximWNCSWH7yC"
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
