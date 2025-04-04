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
    "5vkhUuyXMzzstUJP6UUuDF9TcbZtfxidpZMV7CsRyqJZtrynyCS5d21RG3Ap46T6APSDAS2UprMT9pwrF9BoyRkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZEX2gW4VdkGhHqiSEyFMSsj3Gx6zE8B8DSzSatgctYvkmSQxmeGKaUGD4uCWG2hLsSBecJWrNschMeJEE86CZax",
  "key1": "5xnQ3vkdAnoZaLpdseqD58CLGeHzD457KHXhm3VkhF7LrTpAtY2rv7JevvgBUkwniQPGdKoe6JP8E56SoXP6A7yf",
  "key2": "22gYTfQtHkH6KWY8R6k2Rr49ERXMak2kSrakAQv6goA4fVUjErhufhVvBx1uXqZDUBYX9QitC9BWGHXmFYjxmTBq",
  "key3": "rBange8HYVZuYHzJV4YMB3uAtYPs9AUc6Xo9uo4MnaaDyUm4wqbW4XFqjDQxjoe2ZXNULgcfnV5h1h2oaB7BKuc",
  "key4": "44WoBojzasFFncZhFbu2sN16kbRFhMZVvoKtRBKsgezgLxpyrm1fGeBYJhLnxqG6yckGjYpn6jD7EprnZfAoCUy3",
  "key5": "W1VbgstFhMdLEHZitHAPdoSNkcegTpAnUqD4smaJ2MpFYor2QnMochXbvBCv2kWNkcQ7FkpzxnpkiY1hFKaf8xr",
  "key6": "5BffSmKvPdACF3KXrtRt3HCn9RqQsH5jT6fDwU2zMpjfDoRgdtKn7CJntQ1ipghfcVvHDCMh1XyEnTEV2BDiggHb",
  "key7": "4W14MNVFFVgGT27ZgF69CPj5QC76bWZetZ9gTLirDH3vpLmCkaKpE8qNdmNGcUwauQ51VC9NHiXyyADFNZ5GnTPP",
  "key8": "2Xsn65wmwyzn3SAMLs822Yqd4ueXNrojH2jSUFiBjGCcUN4p9KUUDHWDhPRwk4VurteHK4N5Ngf8XsMQR8sdZ9nt",
  "key9": "4Rdsw4qacvePCK1Yso9WFhujwa4FKHx3dK417MVdaGYNqCENreQircfsv6fpeSvLckszCwm98wAdziYP9214gqJc",
  "key10": "fYc6DrnuWgqMT2N7uphAx7NkoWPsnmmkX3ob2GJEsr8JjQiXNN7sNsUBLJy2gjLPvdSShgoDGEEmnHBtzejkk43",
  "key11": "227uPCsPWvXvvxGQyhBn92oAR9ySiJW13rp2Vh4PZWZtcL4tfsHJETUFQ4BQJYXJvkziRE3YEaAmZD8F5vZoGvk9",
  "key12": "481y3ZK4UhHJ98Cxi7SdDCJSjHqX9h1b7e7dmxAR8ztMFLp8Kx9UrEmZZ49yUBZJtrBsLCk2FQRY9N47v1y4V37N",
  "key13": "4GEz7CvrVatoZDsv1RvoPNe8ixs3yxdSDgpwBvUeyNdX8V4RR6LRZcnJ8Soy91f3mBaqg8qqUmbXRURy8zbZnJAv",
  "key14": "kTW198nG62cvXsZ37hQvf1cqpZxDsj5hTMd1Xu2Yaz5N8wA3oejsp8vR93Dse72CdGswQSaKaRvbGNQJGZDmVJc",
  "key15": "5hLFAWBctAvptNq3PEoDh2ZfHYhSEjGauhhra1N4z8aj7AGdW2GrUUzNCm7zMMmRETurW2sk779vPoVadhSVBQKt",
  "key16": "fG7eWb6jjpoMBSsG9PT26r4rm5a3cg5H2NwEbf4gfkKEUUUuNaUHqa714xmdM1DPVwinPfr33XCpFx4SYZnZfMm",
  "key17": "wypvQwT6d9G8FHE7HScXqFry7gS6wFSpVVQRWWPbJox9QETiFAYkuP3syq2EJC6iyPmFECjTeSpSkDvRwjSKj68",
  "key18": "9dYu11ccYk9iJCRtZvdusgaQvnMiNPLJnSR8naGqWvYGF2UbE6ciK6ji2NVKtXueuUzEKVFfxKNhHaurVGPtrB4",
  "key19": "EvAaJioqm4KskkmUwS1Pr5a18hWGeQMgCzpQsoxQBNUDwNF3n3d3oThjbWVurGLDMwYtEBA1sFiMUsXPvUdwRHx",
  "key20": "544QW4B9j3QUEPPCn9LnukbXDXXvRi2VwDy3fWGWxK9SNPKenT9diTedKwXfhS4icGMKuAr4Q9DHajHwWRauohnE",
  "key21": "66XU9BKoSBv4MaFsRZye4Ef76qYNX9wf9LeGSmvj3cJo3MZnsJbKUwdWD9VFwFBzXBoYtpoKdoM8CnRZjxvm1wFz",
  "key22": "5VbRcdKRKxtGvgugFDcfViAiH8v98QPnj3bZWUyiKYs9rTyi17A1YagJ2ZsUGGTYCeiC4YrQoDub3LEzYsYimSK5",
  "key23": "3RyUYWjSHpKphgBzKQJ9Xcs5axuzEVgtcyCT1BZB8doSuq4hNPVNNawEXbSdUaxAsoq4D16UA42sem6hBN87zXVs",
  "key24": "DPkX9gdUxFrn67PLFr89xPrBCVQe7okgxvWCTuTFLC5dkdtZsn85YFcc2XJwQLis5M37UiaXJU9hDjktegAp8rK",
  "key25": "QeSLibBHT3W6JDUHH28CfQP8qRy3wvv3WKpwEe5X5md8aeN4nZFJZhWcZ4ATbz2QGCcmVbZ4dMttWYcovFKjSzB",
  "key26": "2N79BK6qNSAdCAYN84oNvT1yrUjc12cSuVyvgFEc1enE14VR8hycPKdhMD45pBim5RUm9FqpKUakwaKmo4PZRP4Z",
  "key27": "4RHgJ4J6NVAckTvG6zfRKPVhLNCqZHH4QAwSH996aNG2p18PtFxpTdr9RPVnrJnNnni1Mk59t3FaJZhPdnRQKwt3",
  "key28": "3WbvxTe66JUoicvHMa49hba1xAEXK8fmatSw4z62gEDDbCeB2BBtZzb3FbdkJZ7q2LEvs37AzrXHN4U63WsmFf5P",
  "key29": "32AykQbd9rsLPC5DGsyoMnUuorYZ6sFFGuKQNAuWx1uuAChCYpn5J4bNjJfPQeuHHHbQNgLmr2w2yZqavtuc1898",
  "key30": "bDcWk7wqgK1TnmX4pV7oXrmgiQwix1JVUmF2v9ZNkbMgeDsD1KrUvWRyL7ozdSYLGP2ZTeUSEBtHMmqYaxomwu8",
  "key31": "2Moty9nEKceUCNxydZEetzKjW6pb9T6ME9DCJAPLY6Uf4xkeTkKk1g9i12mEdaRfercCMwiFR8NA9g4NTrLZ8bDA",
  "key32": "3tUWyqWckYd2p3XaGMzK98qu2zXS7nMN8vejvrKUBfwnYRj2acpx9aDTCHFLHjqLr8vC8VtU9cZSG4GwgMKXRUc8",
  "key33": "5Xi2RHfcLhhdXioA6vnDKNqrb773Fki2NCMN37eZsJstrQd12VmZQqZmYNxfQWfCLXukjLNxZGCFtgsKaDFdPUpP",
  "key34": "3DDKmJVkthWxWGoNH4PnqRJnV8aTc3e8Dt6fAQKCQbjdkzPn1bLNMp9PyjhUpLoShYoNyjG7LCsiPjqPsLtoStV2",
  "key35": "24y4qKRfjWBbVw8NAnKwRtw3TUorr1W2KA63LWCRSBLy3YpvV52eLPd4QMFRWbxz5SMQK2Tgo5A67n2yBP7GfuvV",
  "key36": "QZ5JwWVpfchjWf9PyRZLoNzx6ymCVq8cdRiXxWX5hKuyxV2hi6RGzQa8zMzsaosa2vZfKKJBxg2v1hJ4PCuEZUx"
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
