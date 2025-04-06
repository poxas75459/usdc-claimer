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
    "32h1Rn7AxrYhRDYp5ApLR31r6XBh9k9QZipY9RbayQxmyLGvbuhYta7LfXkX8EjnUS1V3jXDjbcUTNKrN7ZKcMJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8VLeY66s3sJdLwxThhyDs2xDp1gfzTDYpo9BcLXyiSmUEExQ256CCtqMsbw1v9zi9tQX5ata7PXsCoFqyQSFHMu",
  "key1": "2JmpqG1PhKXp24fgwMPLNP72WmGbJVzcnvJ4heFjwPFFdSyt5QzuA5L6KCpQ1kUDMiLnJpZt8wmYNypMLEAZ7nb6",
  "key2": "2qjdP1fSQamiE2zvgw9ELc9ysCXtfSjr9jtwfp7LxVhv93n48bSyEKouboKLqgufcLrRixsTZWWEZNEoswMtEFtn",
  "key3": "5q23RttU3JmfmXYcoMW4pPCXhPBUoF2Q1883UbauiGR8hjRTgquNWfZs6bLuQCddA9PTn745SAqoDWSg4XfPEfNV",
  "key4": "4jQc6HfrfskHGL2R44H3aiHuyh64rbBbft5HCdhpM3dZW2dJ2GEt6CieZjoUdXKpySjwgwckKBGyZyH9C9YRLixd",
  "key5": "4WjS77yVRWBULJhxqJ3Pmxmj9hJCr9mwD9kyXqP1BR9LysVKXUiBKyPqzF1Wfe6NRfDsr3ZzV3UVa8HSqQgfY5vC",
  "key6": "AYgh659KBzkKGSs4tVBJiujPGX4GCqHo5e8g8p3SBppaLzpN2YEaVunhhFWBFLQmSYc7a85TfVkLCzsL32gTVC6",
  "key7": "5PRnZ7FrNzyE5vGZ9uAXWP989ounwhqGaptwVeyzV53hh72YN1Wdg6wYdJeVBovZF99J353atdnkPvrLNwU2G9sJ",
  "key8": "2c1D9H5onN76F8qacF9yBtZB1skeCKTTd4GhfY5y2MYSXw3oJLa2FxoMTmaMP91ZPtr5HW5nUyV6gJLWpAYEkEYN",
  "key9": "esuLj9HyQ55E1rre4Xijx5xy8y567csu8KpUeRP3a3C64ru7mL7CoS4S4WzxMzXE9KJmhwosjmG5y4jrkUMvyVE",
  "key10": "5RGUJUhsehEGG6n7JRUDfshkZo7ognRjxG1SLWixe9bdhutupft8pUjXkYm2u7MopHkTxeHwBgaABJqGzegwi8ir",
  "key11": "2j951oacw2tAJQWACqgeEa6ehoUgQbBaeA7jnSpNY41Q56kU9i9xtyaDRJZoisi6vJJhAiYxTH4gjrdrCUK4XVmJ",
  "key12": "25QjzkJ6d8eCRheaptejMwuxiqFVYbZaRATVtzefm3rP5yDAJY8DLbXThU7hsb8rju9XpKEPRGsSyYM13VcxkahZ",
  "key13": "4MfRj6snkVYWSy6LvykVuAiUzJVYCqEBAhZkRVYMo8aGN22aPQCY8Zw5cpq4KqNb7JrLhKht3NPSVCUmkRMUobPZ",
  "key14": "fpou3kxZVJMYsFvWbakTyuK3MNxK7tSYSsMqua1Mb6ThgcVjno9M4x2aY62z3ac3rCEJ1kw35kWY8MBQH73eyKG",
  "key15": "PAUsbF3DUSuQTnnE4JeuJZirSK3Q36K5RPM8EoXZmK9h53StJBgwrNteGhNCtHwK5kGPdcntLdpstN5W2c4hock",
  "key16": "txmHGyFbShuwmmHxsEtncfXbF68rHkwhZP92N8rPDJrS1WVcK3Tc39DX8JU7DrnoCGiy3cnM6qGeeQUxfzcxJvx",
  "key17": "4gZod8RxnB3oxQJq1S8s2LP7GMbzmVbfzxCqCtjCGC5oXYgDF1aCkZbqvmXmjDYiuiT1V2Lhr6jSbBSCuBTfEX9h",
  "key18": "451pRCeYpmgvWAjh5tmnJFrWcxt352g2zD5ssnZncQf9fthakekcGgDqo1RGmbWUyTqRbJXNX5JNpz1yyEueUHSU",
  "key19": "56r8RW58r62rEg7aWJ9jXJx6cynpNWBAMRfXXD4P1HVGoFkrMjkc34yycHPsaWkNMZS18g2SeS1maNjUr3qMaJhV",
  "key20": "5HkG4xm9f5kZyq9vJSpyY1HtRv5ea2oWXPKRmmKNP8Unpuo6iYRzCLLDkioZRdxbQGQTxSaKwkYmBcwj8tnEy8xT",
  "key21": "qk36vUb2ZBqZnjP5FuynfnhNPYE3eEWwoGAui4ftT2KznZojZQjmm51B7jHavUSGVmAJAb1GVgCRoaYi31KFNiD",
  "key22": "53B3iXShMkESp676WSubfWKuF7Q4SsV8VuMVSSHwc99Dp1j4HYnLQoJKo1mr26zgUfS7fwdkBa4GrgH1QWqh8gHz",
  "key23": "2SNUwm9da1U5jcdL5cY9HdSLbcAZpNPvotGoxmY4g3K8fLyGH7Qoi3KW3P9f7n8JAWWBcRubAAC2wEL3TfJeNzsb",
  "key24": "3vDxhweStvHakiQYpsfQTDssxNMVD48U5NTzsGLjd9TU7uN4ESa7hU7Wb9hmzf2QnNULZDmPEGCXMPbdFmfihWic",
  "key25": "2p5Q2YANGKkkBpXm8cXYPiKteK8A3XpYgzsdo8DSod1ZNnh8UmoChDtVBSuAv3au7WEGSd54zTkHpFzexYSscQFK",
  "key26": "4eHD5TUrEnX6ShagdQc4mvNgYJf7xeB38EkAmtkuguBFQcUjsrcbrXSRqjfyHHSv3uVSiXDFoCGT6iTGh4zjE2yZ",
  "key27": "5B8e2ayiN7mGsPrEkx7pfQgBSBuTBoic2KRBnYrMAUYMHjuTVHVW1LU2PdtNabysWXkDZtf17hY3263WGWdEez2y",
  "key28": "gbvpYwAE6caq3EYzukrtZQg71qVcrhhPVRm6uuHMbVw6vnzdDa1iq3eMSt2FPn3NWfWHhZD2cgVtZanq89AECDG",
  "key29": "2VvcLPBbKyjk8XoKg1q3Z5sHpvWUuy6ESwHwSCSTwCb3GL2B8fTavJ7E9JUEjbwGfUB39ojCgUAM21kS4CDev1Q4",
  "key30": "EuVT4VEvxF2CiSZZj8bTuxDSD3XHMhTDcG6h8JaKHXWiL1jViGHr8t2WhFjky64u58j9SgK5Ww9ncMdTzTixEx7",
  "key31": "5ThoyLtCyE6ucsibWP3weJf4ajhy291Kx42eiUh9KayXP3ev7EgZNBs9HCr554aM33oTsQuiUCyF49xXxq2qRp8S",
  "key32": "2mGKCJfoPQSoQmPP2mQ5gmZEyhvVrEhqGFwhNrAS94Q7EhdQyKoR98dG93g43TNXoR3Kxpwr5aSUMavAhL66xSSS",
  "key33": "4UdUWsBh5BrPz76DPiwh3KsLeUAtxQExpAA6NGtfdGezTmHABJnFpGZ7sNB4AjnpmT8oEGexbg1obdnAptauJHgc",
  "key34": "5TxyPWVobYW9YuRT17hkgrJ9FZ2HNEx9BCM7DH6DBFs3rjNYJmY4qL9bJ2yFxgpBpzEDKv6V2mFCv3FEb3i7X7YH",
  "key35": "4kjcn8cj6YbUdiBP4iXmW9FgmV8qfLuovhhJwFR1SzohL9Tb4db29uTYcDSAE72MLKNZJtq8A9ZaVPdx3Zbscj4Y",
  "key36": "3tjRy5Wg2REPyGgx1mY3dJorMYHfSsFmnCQ3EdwKBPB9D2RkG7Gg6fgDwU8Fyf2B8ybbNoBr8f1dtJWj5u7MHYYX",
  "key37": "4zcvwMCwnH4gszb5dnvzLmMnxUaWThKeaockKJjvXVwSHs3CkwVsWiXyavKWq1sPeZgC9dgQnxsnEg3BCNy4vj4a"
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
