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
    "3JkaxD1aZJhR95bo2go7Pg9g2Lm63wopBpn7hME7KyYqd8CJyWC8G2Q74aTTeCoJoaaumsMDfceetpr3ZjethMrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4goqEomkkKaen6rRsJJgfK6ArCsobWUSrxNUUUEG7W3L1TDNqjeRKgPygkME6d73sKMYp23i2HxhHSejDSeX8Zyp",
  "key1": "54Yst1b8Nrj3muxGRLEvBEt3kiaGGJX17tsM8WRRpHSrPdXjL2SZds4nLm8sgEZcKZnzLvnxHHGJj2Pc64jzE6iu",
  "key2": "5ExbukWT7MqXxeRGxVeL1hy7xYEEfstSHBNaWeq6SzdjdZ5UVUAwUSTYMFE7xKxJba8977oV9U6pogJ5iWQ8cwRw",
  "key3": "449Z8mxSX7Zpxi3m9GqorHYyVNzjRvofJ4MTYsZydKL6PuvStKXduLHtJHdS7kShuKm9uiM76rnrvWuQn1U3gVB",
  "key4": "5qegS3RXozu34CRpWXoHnPzFyESD8QGNGkwBSEfe95F64oGvDBZrhgC7LD4T4CHyNmaDvvDfnjgecd4U49taUQGQ",
  "key5": "2XkKFv7fcmsYgYynJa4u7TUhmT6hRZyBLje5eJFQFjL4U2rHDv5eudLqibDL1sRe94mDGpP4AzYv2iB3zQkKEBmd",
  "key6": "gpTFw2PoRtZ14Ke7SeiBdyPpMeaULjWgEynR6rNHeQqM1otUihXSdcn1VMMCVJAioa4qeVaBDicphi5Zy45my9H",
  "key7": "2LTr5EkRJ2DsGE4zbjUtobq4mHibhjfLEcEX9hSLuVcwcnhS6btKoHECRB9kqmbSUhhGCYeTGjgT2vZRFxTvq8eb",
  "key8": "5ieYTkiW9XZZFWhMbi46CSeHamSvWhiYJ6oFwYAyYwmto9gvFCMdhsd2ez1bwQNCrg2tn24iyp9hhchhoVQqiZRk",
  "key9": "46EQucLZ6ELjvZDogws8FhsJBtoWWNW28LPXpGWuWYgpNyREzZixKDjEvqZh2fui7jHXr59r8e9Srn3HBhiyoPv1",
  "key10": "5iUB1eFDbtQgfG9FdZTuuE9NHBLwzUUgpJf8Fy83TTFLNXsAjW78fRjqJVt5mhqTuSSF3nepdzaoVkyt4Fbadrt1",
  "key11": "5bdPDENWk5PZTiFvRUHo7GLRP9zecEjmALvDt2Lck31PxbCFezaXBYKHYpqmcSUBtkFv89vuoN7rZF488iyL7HkX",
  "key12": "24X9Dn5SCFpztqyCJ3R3Lj3EiNahLxT3zfhZQEsXoABdS2Hfkg4hs9Ah2gyPNKWUXwKRRmDkvXsgJi4ztirXQkS9",
  "key13": "kP4p85Vk9o7Ab4874iK1hm3fszui2c1ivveikLLvi3Gx16Gmz2hyLwGziWAAdAnQ14XENG2GVG7tzGghLXSJt1B",
  "key14": "Z1pj92CE3mW2EWg5opUn1Z6ApAwTsmHr5hbDe1Lei58WkbtAWwb97JmStoZYuJWgou9to5GVGZFFFfnHbsH5Ewq",
  "key15": "4hiFjJzgowJ8b9tLgqmSuRNNcrhH6ML6EPzovuhSQhrXMAF5gmxGwjsYgbvUS6ndfjPLQer1HP8J4ex4zb1PQySm",
  "key16": "2tAUsVAWDfUWDAuwrRkgqEUyZsEkYZRsYMA1jbSk3JCwDSC8mQ4ZtSRQAEMyffNjCZZo7NdR5HVcCRMQQNydh3CN",
  "key17": "XDpsbrngDZtqQgM4yHURuyN3smaAnA6XvFiTuSxp5fretU5k8anJPdt3ZfTisPfUrZ3fcdsD9JG7gdJQHnFxZc3",
  "key18": "3q8jZ4rkGKA9e4Jh7fsacrd4Ci8WP3rFZHNBQb14ssmCGmSh8iDHyr6BAVSiahdE8q5vUfjfd4btF1fNdzPp5hbm",
  "key19": "5YdUU2evuY5ukEmAYPR5ZcMPhCaEV9dAxpPALUuexPJ8RyEetYedhDgahowki1Y9hWyuo2uKkn1HrNddX8TFfk1X",
  "key20": "2sQ9449JZRdiwwEyeea3d6EZEWq6edCYCvfCENHJbkQreUtcPsEaPzBJ7BCKkgRQ217HBhu4od4u8bSdnqY2YyGE",
  "key21": "248U9RDTWnT4dCuRfkB5Z1o3f78dyamVGTYecWdVbuxxRnudcms1WJbQZ8kLGpVJT13qKpqeypyjuL62Ce8radSy",
  "key22": "5bTVxH4K4XUPmzYpg7nF8Ku9WMe7eDioSB64zRuzxWDMhmP4VmpFfP4byUcfFGPfZmTaiYYGbBekCkkjsqrKXa6S",
  "key23": "39ZA3vjBMtBGdVXRUrV39q8Y4JuguaTerqq9WX5eGeGEz7EJPVf8LTTjGu5abXJzu1jwrAXP12t5JSWRQp1Er1sA",
  "key24": "3m1tYasQR69gPeKtqUkMPtFzhBwgZNMCnu7nA4n19gdXcSY9QXp7BeoWMarjLLzsgC25vGZJ3nRxV2bTpgKxsP4b",
  "key25": "49hVCYAXFeHQnV2ar8JkMjAzpZ4cJpCH1DNEyePBmHcDd7r1M6XkBzex7LqHgwtGqv38E1NVGC19n5U3idK1x6KE",
  "key26": "2itYNDrS8XYKkmjeKMTG8qsGzV4rNnJFKhQhzWg36zuHe7dM7SjQBNPvwrjxgRKSu6GSrpsTkmmP4afyymyKDdFz"
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
