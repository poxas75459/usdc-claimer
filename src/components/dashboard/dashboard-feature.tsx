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
    "4wBp4h2kSwFZwM1WLvqspKX44uHuLvWi39SM44zgMCie41KH3SLKdmPU1XxDiGRXiAfUGf5kWG3A9GninkuofGrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fiZXoSnCsfSYXbkJub6mGqzkWZQgWRQq5pd6GrQd4gfGt78u3bSr6L35H7STLSKPF2oTJQZPzeKKV9teLM9dmgV",
  "key1": "kzt1J7XsoVytZpQR5ouUTcvVYYJQzR2yBUwECMhCkGuSnUuive5CWRJJCZyBSQ5TJd4eUEmh2xEg5iS5t8pCRoD",
  "key2": "4QzSvkZBKw68U7Dyc1b7PXFPFK5MLMpa9EuALS4bjrHbTL36kEfvd9Ux7xtuHezspCjNmQymcpfHXqjY2f6ZewrG",
  "key3": "4HCyewcmRgbu7oSxhygNVyoEyVczXdQDVvs7ULDPaLQutmv4geri5Vkp5ixuwx6QcXSraxz3cDvNwy2RkzUWsyRv",
  "key4": "37xSNQDDuJtbCq76Fvp3EPpeFqB7p7ByMitpo1YbA8unRhBSAhy9GJ9jCKJhk8JwrjMEBKQZBfDUFawgtb7krPra",
  "key5": "5MyTvo7gPePG991jQnnNDFnf4f3ZP55wVdYde1fEo4Z2E3UyHDNe5rismK2L3PwK2qcizFinSoASbX5u1BRYd6Fy",
  "key6": "3irhFKfoAWL2uWfAaLA9AkE9wm1ndWxxQjZt1YAhsTrtWBwKQdnYW58fyFhv7pLhsVLKr5kyGcRzVurGo4hQabX6",
  "key7": "3S6aYxnJWDTbvkPCyWfXkwcRAyDnEmvVoShALwmhShxFQ6jNqDJPrAF95ypGzn56NgkKNB8nf5AktXv4CaAJJ9q5",
  "key8": "5uscftZmKyAymM8LaBFMADrzZD8nPxZCQkwwZE1rboeypNdXQR43B779aizRdvdZnTtKXvJp4gFe59WNayS2Bm2Q",
  "key9": "3wdULbFAgun2AkA6Dum7jJnZXHQvGKmCpkQvxyHBVA7ycE6C8dto6YrCEj8KaGNjbaLdd7rJmDG7X6ZKBFE8Y52k",
  "key10": "xkNMr8wr4BUSKcUA65XTZdoBFvibttLdmXwdpAgaiA53puavPCmokRWeW3bvrqZhj1Qmacauik3xV4vQLQFtw7c",
  "key11": "4MZ34YfKrTpDXVBEyEXPbaBJaGnZ93PDC2RzumEFZCwq6ia8Kyea9YCYeW4Dux3nayB4LAri5ggNAEPu7Nh73RG1",
  "key12": "3z2pz2V95AQ4iaooYBrTfkxxtDkhaKR5sPAyJKgwpnEyFQFovzJ1Vefy8Y4kFuAKHyRuEArUpNVSJHU5ccHJnKko",
  "key13": "3bWb2UbSNDHTyzcshSRjFxsQM4T68jUXJRVt5qAoJDypwZQGckF86e7mzo5vqSY1Zkm2M2R2icFKztpkKp3csWyi",
  "key14": "4DsYadm8SdtHxRkZMGdVNqZsvPZQ7WYWhUEZcUKEsnKpB4xKe5BmeRZvswSGDZrjmBJ3PzV9UgyschmsZYB9UJz8",
  "key15": "2EUGvMsLt9YCthFxpw1fCqcu3mqEa6wnWqSACU6TraZGDQW1KgUSM5daGbgiBxx8C6mPMjUYPRg4KR4bdNdFK1ri",
  "key16": "29Jj8jvy93Z3FoWGzrrysKQFknLL2yGr6fkEQBApgWzZV2CbEYnJhH5CDetWT9cMgXBv6NBs2xjhKn1qB8gttkkY",
  "key17": "59G4R2Kg9zpypxiPW7kms2vtPtgg4U1A4Y3yek9NYkFMK2FTRr9fkyRA1PtXVFmpMM3FKarXgmMVDEGPUK8bz9KT",
  "key18": "4YfnM4GmxhEXB9txS4y7PkabrtdfnMBLV23KHKh7dNSeswVpPFzGgJvPEs3tfJtCTX2DHyBxRUYMsXge2ycBMFKV",
  "key19": "5psyMf5m31Uf7PkoYwqc55vzRiL6dPV6rBLxy72bkHfHxncjffnJ8cAieL7B2PP2ZEk3o2caXp48peCoRNbNBJRE",
  "key20": "37G8Sgk3Db2M6YtY9HvfKkqMrL5YtFAkkXbURTCfQZqdzZkJdi52iZLQcgDmf927668wSz4MEQ2JktUPQr76EQLh",
  "key21": "63kuVpE994N3QVtathaSd4NAsWvzaEdegY38tvmHfPYm7vzLpzqUZCT8xM83WESCXojcERhYrPxNToEYBU96UiPw",
  "key22": "dG5mu3h8aL8RNmH8TfUyn4JBPSV7S7E3E5v8xPuA17YTNzK8EfvGngPjhYf6pVMUGJuzm5xzziFsBLeLkNx8kNq",
  "key23": "GdJVEcrnW2NG8NiLPPdkMxHuqvJkVGBY72pMDFyh8kD7GSipVgXYFhfAK15iZhaKm2Nx4J9aQ7dP42srPDG5E1w",
  "key24": "5bg389NEoYeMvDCsa26N4JQE4yUpzpzSTiTA43e3fe1YpHXJ916BWWykPxJAK1K8RiX4vf9UrZMYNVwH3kkoyuHH",
  "key25": "62VKzkpbpy3iasr3Mz4pUZpiHBxjB238oShf6sU1EKdcNUUSKRP7zeWERUAU3hGJ1iShxVC3ry5veWRtwJmHxsoN"
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
