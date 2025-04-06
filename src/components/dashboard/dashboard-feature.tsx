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
    "42gC5YM14uUDsDmacicUWXUf2EFE5H8zWQaAB4oLiw51pbcL6Ag86VEVsp5jwyHhNQBdHvSACAbUjfzKYdwFEkTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XSXD6xK18HvJ9WmW1WXjRr8VjFjQJ6vWG4rDWf6SYd4NFAK6Y2J4p6rqw93dSkuxpD3AuwUW3MC8L3CNP3UvpzR",
  "key1": "pVxh5nDK4a82QMnQAAtd1wPkGQE3ikQkSiAsLiLymEGK8qkNYpEzRfCMjimbkHEE6DFUwkebSqCVCQ4A49YtrG4",
  "key2": "2MnJHwSwm4mvqnKDS7aSR9QrAvXW2jGsY6PoqCuEJsW4vYApLgMpU9R9EgzcvTMmMXAHJgMrjgpRqqwKRbaU9HFJ",
  "key3": "676e64n1TNSG4A4bY6MehhJ4zViP6BfCwdhkiafi3uNLMrA2NchWoSkWwus2VssxfrpnMnGpvsvig3uSZZJfQS32",
  "key4": "qNVTHnoDuJckWiTQke8QJYhKiJd46adj4YtbpqwDzzTP13nVRcaHrpsj5nLnvzw6Ng47TJHCKBAowSqEeQWSCi4",
  "key5": "4dC4cKW56k3hMnCEJ7CRkACPswMeFsrY7WKL7c168iA38Y3gccmwF69bvNoAQZofAWmuDUwvFJTSaoMsNmJFwYwi",
  "key6": "3PTuYB5RJ1S1K7Ew3VGb2jGj2HtCmRXRx3cuw5zQj93Jz4JvwHYpiDxK4dBoj2a19w2RdJ58mAEHxvPMJbEPtCM2",
  "key7": "2exokPigXZicjtjS9aTr6yHL48ow1WMu9jmV7kZLZq2hsnCgqBWc4qWQxPtK1D45CvMZ2pnZRWMUDMQULwjYva4g",
  "key8": "4ddf2o4VTBjPQi8cHnQf9fvXnymQrxthq5wypjN8P8W1zG5j2HVsPYscbmhabQxGCVB5JQUrdpRjLXPxW2HAAmDj",
  "key9": "J9rofwkw3m7Ga2WJYTvWw6fM6XqLhSTZNnJmZ9cnueaj3eF9d6RLLTVgQbmE8bSPH6pkLQFPz3bRjudHcbP2aSf",
  "key10": "4oqb4X25dnfFhQKg9iJHu4by7TUwaa5nBFoxKThieQRyQyD12atLY5P2KYz75wJNLQqXGmtKKfBg1BDUqoJeHHi3",
  "key11": "33BWspEgo1pwpzPwWxck2JQ2pvZo7DkDdj6b3KbcP66vKdBsRhuKyFJLXySEYRfa7o28Ky38shz7kzEer24cJ7HZ",
  "key12": "8RA7hbvKgGK8qtxpGN1T1eeDjF2V5md4W3jUn4SpXGaikYW9GcVGtjpLryNE4SbwkP4qvj8gTeSr9uD1AxaicxQ",
  "key13": "4iAMUYvTfFwYPw6jnCbPoWEmS1JsEkSNYUi3UrpGcXFHiZcXXpmJfutRyYnj1xFAbbpFRfgZYLr5kgEyyAELT9uc",
  "key14": "25ryJ4XkELyPJ8MzMhYpwau4EQnATyrbQxZiVwEBMocj4xbbAmxZRxdkWL5zqNLPHr1z9Yzgyae6W6qtfwDLtdpZ",
  "key15": "4L8Nrgyjwv7jPTATqEkxh4iBoEhpLPpJpk65cA7QTUu3NXRxEGzLayDxbLB19wpDnKsSJzLuHut8MUkdapKeogdD",
  "key16": "3ee3iwLXLa7kkan3rnGHosMh4xfidTXzw3E1cmJMGdpvPDZ3QKErjivqv5dyKmeX35p9R4TnBMcrp5MvDr1CV6RQ",
  "key17": "3BjzYisCjPswnwaDeNm4hys92zWPxmFRFDqn6VNgHjmqJNnqXA1f5984VBX3wzFmKjPKPMqTa5kMnahNU1bzZpjb",
  "key18": "21KDefP7VAyfDaiQvhnpQURoP3wfJPnyWoYqV2BHKyisCvq1exQgvsHrz3dvYVZ97T7feyhzFfduVx9HDRFtGiTo",
  "key19": "3uynywu5CyKEzR1TxXzB1sAZNc7Lwen8jRbBfSDEbzdoUzL4pZE8q9qyjs5WheJmKorhiNUjzND1GywquvdkmAjp",
  "key20": "2y43AeoBb1pg5tCPpPxypq4jBu93ZrgHXhXAxckYwSdVozvmVSZ5UnFaxuGUqoqtghisMHZwwG9oV2QdSnPppEer",
  "key21": "4Jccm2s2aQXCvCRXsYEhfqpuS3nySB3h1u5UYs1EYiD7AyE4bsPvSuVLFs8LK5AMWxXBjSzpBQFM5VqE7t9iEzkj",
  "key22": "5zrsw8irZiZkJG3JN9ncwgDuj5hjdeg4LRHi22ZjKZbgmejGX2XwaLxUkwVHZZ4Cs2ik5fmqrrfs4ut3GPj2caMo",
  "key23": "57dLjAW3Pi2Hf3UoZQnak7ypnXb5irFRgDcFtZBDRCnHcK1q5hpJ9my1DUB4AuTzgMDM9dvPPsUwDtMaLQp18c12",
  "key24": "5xNyGrWTpoou9x4bKKraiCpJXE4SAgVyZWuQ622caw51Ro64XDVCM7nSEkfPAEh93q5EmEqkcfDjfGCEhEDGfdSS",
  "key25": "3asgRA9hwKWdzi4QBUhbQUiubvPtCgkJZLnEez8aQnwSHiA6ied4MqbDznmVn4qxrExjLnBHGCyUJMmKfohdcEFw",
  "key26": "oD7akej5YgmwTY9L7DJJmAEVyuPvU6WdyboFujUCaPAHnGxPzhAx5H6hepNv2DoQJhwUt15GQwJKozU8KVo8j8o",
  "key27": "4JTio1dxhcaomnx5zXFZaFxQMdA4V5bsxntxFqiWS4rNxJhKYpGFX27L6VrYLKzLosH1rCL8X8aBeQzT6VHhhD8w",
  "key28": "4znyFRv2ZD2FGsZFP7zxfa3VvtQLyQjm6b2TvYnXd1VJ5eugJxAXhcuHRzBb3SyKCT1HX3VmPy1Thv5zpfgYVCiN",
  "key29": "3xgc2HE5TwmSvPdTKDLafunW6ax91tsUncJdzyUPH7qGXMUUJpGGk24jPvu7gEVkUkQ9kBMLM5g2QhCMJSWLkVJn",
  "key30": "45zVojErRXQgmuUY7hksquaswsVKvtH1QcHLrQBfEcRhqZMrdGPzjDzQ2MtXym3iH6v3taPeJviR4dbuTTJ24nTo",
  "key31": "2J2T6CUuSW1wQSh2yo66VibzDkhfoJf67J9ebP1qMEuWbPwdp8uFkXSvksgKiC28M1AFdthF8BTwPXuzLTrx7RQM",
  "key32": "3JQxNW1RcCbvbLrYiANyND9Qy6cU8P22kvzdeBNBYv1GccPSSJu6NnXoZQz7rVgvVRt9hdQ9CQnf6oGzYcL5qzTT",
  "key33": "2LCA98A6x8HxZBgsQkepTaDkZ7Q2ixGroKu8FsQ4neQ8JLBndKcDPDY78zbBHZfWozR5twL2r8tMu8u5w3xQ8QTt",
  "key34": "1e1XBUhBKignCnam3LujH3ED3cAUUBXP3DCfgD2wT4dUXqxyUFnM2HuFsrNREa83QYYcdu4PBfXJZqwBWEmVQxD",
  "key35": "2Xpw5qf34KS7HSioVCjy6inZSko4XN8heuiZxWnsZcV7yug5TYsXjB8qbozLAYqXR9hGnPi8L1g1ZErQK1CstgLA",
  "key36": "3Z6F1sHhRP6QWF2epVimP84ZB8Lg8kioB19tiyTsreD7nCMzLLUWdrZGdsg9QjcSZxQeStLegMf9AwVkxJRE2Dqu",
  "key37": "5x6B3YpnYe1dqvF6pnebsVZRVq2CushvDHy2h15cxWCvUs8Us8UhudLBfQacQEKVg4G9VaJasM2y5vg3VjhGhSwU",
  "key38": "5PacsrLj44dJKAUzbPNxgYWVfvdL9c3XDF3j8XFqDneQEcaUac8Ei1My6DzWQueA2fEaX8jCuqmCZw1xtcn9FdBP",
  "key39": "66iGVwULMN7js4vKLJqib5vRP4MvUpU3rzjkpW47DQb2CDrZxRcz81gKwVZq2QsniNsY6H5uc4SbDkevVDpEr3rZ",
  "key40": "g2JtspijaMMGqueKn8TNRnMF8kLZePnu6CLzNjwwExYEFmfjsfbvTaQA89cp7UEa6wEn46AgrQJGp4hfFey3Jk3",
  "key41": "3UquFyoagC7wdhf2j29eH3iiauYWDWQ4wRBXE2FaHyPdnbmjHMcRUyqddXpT6MHJq1Bg1EZ9PLLCXxhuReYXApyx"
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
