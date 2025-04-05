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
    "Kr8quensntTK5ZGgTc8v1E14mH3D81qkmwbtdiJz8DZ6BDidHLr7mPub97T9oLnmNtDmt57p6ovpbLuKFJbQkSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHsTnTSUZ7DvbGyocQ29Tn162DEiYEgXiUwE7c3zyeUNS2NQVWvXinTohoG67W452FuFuz6EL1ep8kfxTJ5PKgt",
  "key1": "4hNB6E7UNDt21tdQEULbnngrGii83fS87Lb6gg8nBu7jkYpoE2HA4UMYQotD8kfuxVe2AU43ATPK3Nt7P1KfLuSh",
  "key2": "5rh2JJmewUdVfPwFZuQikQz1KxCcY9VTqjgVKPP6M9cjuVryef8j1UudS9bA7Rh6ASAj3CQiBxcFptRj9V8qBUkE",
  "key3": "2Jn9ougB7AvPrUgEZ9pAxVTbYJefWwLqC728kRsFBgbexcGsDyQe1G8jPdGgmJgUHf6MysuA2TFvFV2uwouhjUfu",
  "key4": "2s655qrgDzZpzfYC8J4h4o4YGGNvwBgWC1mxmcBz2nEvbKV7pmztgXfmozYsc4bsqVgLuqe4QaiM26LrjHH6FmuB",
  "key5": "39tCvcTKE1uhoALNx8NQKcFbrYD7XujQhLKg2dfjVicxMm9Pb4um7AYVNXn3BtZTnbSvY34HfsAYzrtR4ocmSNuM",
  "key6": "2rEgNdUA9YLwoFKPBomaMDhXrV76zVLwhayF9jyLSfVAWFwWwHEJzCohhqFYZrQfgfqNhrcTVPJAFGT6EpZiR2VT",
  "key7": "4EUATZy6Q389SXGgAYCsbXzR4G6nH8NQ2TqLTJUScCP8aNarJpqhi8TnJrjFg67vz72BJxXjJLiJr6SEvh9n6Hpw",
  "key8": "5Q1vazz3mKjVT3Yap7F3KJ6R9qvzKjbCzKAV39124f9azE1DbfGLu4jSqDmZBWSe2wAFTVg4DDkGriYW49dtD42V",
  "key9": "4i4vC6sfqQKfuFXfyugmY4Y9G6JSD6BpVLrsAxwagAxsFR4jTP9StenwygfbmYgBcH41vnj1jMJupcUGqgKYGoZD",
  "key10": "5N85tRLNCz9oGi7zpD3B1rt8P8U7R4Q7pwqCmCp3QdYLFjZroipzzBdmQ1smMqMjbGxV397fruCcdB2MHpysi4aj",
  "key11": "2ic2he4x7VP29DfQHRG81zhtzNocyMe9zAud4vi69wdoghL8pgyDwLmrkdxwUvjNH1tPDfQATFqmALATF4XYvD38",
  "key12": "3Z7cbLD6HNjfJY9BbWfXAnnw7wNxNE53XhCY8dwvscCkZkEsAsM9zgJMnpsReNXAxLZ1BwqDTwFkpmusGK9F9vWV",
  "key13": "iGSvfAmaLd6MH1kSAihRRWdjaR197377rTQeWZ35bgUbfFYMviziaqv8TAHx6nm3EMuSUZBNbRn2mQEtZqip7i4",
  "key14": "5T7KmoB3t2aHbMqxGMeA6St4ejmuFFYfRMCy3vSTKbtSAvikBggYyEbriWiRyj12edS6irVNybfXCo8zuWAbXWY7",
  "key15": "5i968HwcdZTPUrnmN3NbmifcbogDJEW1kw2K2Vu4p2LtvsLCRGGGkEM7dcm9EXBMsjVue4oieFQYkmyVhpSXMh5y",
  "key16": "5wqbmWWjHAcdDcDKzbHd6iLsBJYg1dfppMrfRY9WVL6ozRq5UY9rdXDvynpXA46MM7XrNjuUxcX4mT6vKpTgfVcA",
  "key17": "3Y6gjDKDY1oVa3TgHJxsec9d1hDR9WgQrgTpCHRw1CYpe77qFRSzA6Ws3CraH256yGXzCMhwwHSanQ8Gqi797oVX",
  "key18": "2oVnXbABDeeBDCcX6HYoL7MJLQZxwxbWZ9s8E6CfGAEySQbQyKD1J39XWuyvXLdjpQwSrFRwuLGwQQk3cpyM8h44",
  "key19": "3kcHFZjyRXaRCPbE3asg8FzYJRZTKRy5f1Ctzr3ffHqFn9WNKtuYVcZSBiG7sMBzk5Ax5mBNTK6YiXo3n7uStuZ6",
  "key20": "5GHb1hsRy7QWuDE3ZvciNsiwQbPhFoVxovJUav2ynio8rGZtjy41qPQMwg2wYjSKBXrUzGqkHQ6vdv8VAtdg7nPz",
  "key21": "34hiN9GqccG6dFqcSqNNsamAdEy6kcy5CsCcMPAEdeexNxiUxy1tCeAArTtzPCcXa7vvu33QQJVffk62QwmiL8w3",
  "key22": "3nCEN2rQbiZRgtk6UEdPkjUZ5rLKCZEymet8YLxQVtyExMx2N6FGBzzkgMTJQ7t5pRaxJ9KbCiKkSkWMXRqfWyeX",
  "key23": "4Q2ELHduh3dH875LsqsfHZywVw1J94UcJKBWFhRpCVvnDPSuqUKtxFPiKiZ4JfbguPmTCwhtTUN4xEhtZCNa4Vgf",
  "key24": "4B25Yf8yEKPDTTTPpiaKuPo5hEBupUajzJZNhqgoARcp3LbA1GroLKgoGF9W4daHx2b6MEDSFUsb8TNvVThvNS2u",
  "key25": "3MnhPfYoW1cwaWEbHtug7MBoYDiujwGHcMbShTVtmqehBrv31iwHv91CwHjLXFZNm4qSY9j3eE28UrWDgSsryg4g",
  "key26": "3NuPBVsFbxE2c9PfD1Hy2sBUBv3H18qjND636qsBgyQiYuTeWFbCZEZuN4gAZq6yGWGX5y6Ga5ri6zPsFf8Wegz",
  "key27": "5MiUoKwLr3tNWUzJgGmLaRJqocvdchUPJLF5mAk6YFQuFtTGaw2HYp9X1AHkqApCXZP2RyH1FeWYFGSXgXsm2j57",
  "key28": "4jJVpNCyyYgJccMXH7sPuKqAiBWT2QsSUwX5jocvoAEnks82n8xia1iqpUA2z1HnZtKNFxGu5VYt6pyFeKWysng2",
  "key29": "5ruZEvxp3miW63akPbHaSrV71sRqv3D4ZHDaZ4ThjTts6h567rcqwaHDWi13WCbcB6S27xT7ngy3VAizR3G77xfi",
  "key30": "Wyn96RgPYKM86yD2kHcEGikTs4on4ALwardadN6mvQDczr5yod7TmfsGrZU8mfcYzeTZnVZx5YFNGrMTh5ECepZ",
  "key31": "oUB2XK6EPXvntT5176pUEQEm5LgGVmYf9BDohtTmDPnfK32Ep2qtz2hEDWBTBqMgHtbsH6q3y95qo6WhpmXBg9H",
  "key32": "3uopaqiwmQVXfLoqDhtB4Bu4PoSaro6nYE2REqQcV59XxRP2acKDvUo2xfd9Meufim6USgKMBbgCqKPcaqco9NZw"
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
