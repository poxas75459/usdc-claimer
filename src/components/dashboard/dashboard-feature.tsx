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
    "54L8EkY6M8VgMCkuw9BwKcpGCUL4vimLrSi5Y5aYGKKNcHtuvhNvWe3w6KP85h8TpJC57MQVj14ttTiVnZnn1hiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9ZXEsUVvWhjajuy1L7jWefLZdvqQXs4yuoQAo1QvjFfJXYP7jX9thKozxDZtqjt6mJbARn6XZCYg8iUvPBW7Q7",
  "key1": "2FLyo4gympg3WnT8oD76m8RuSW772uQ2zyk4j5UrHP4krd9tjpWTmWAxoryKktoZhmdVgL3woh8z2oPkX56ZxxDw",
  "key2": "2jnBvxd4dgXHSVnpiqFQWDxwTY5cyZbSFnbshVU4P5B7cpphbQgBZDYuKLGD2AvZQkG3WeaibHC3qZH1zZGWQFZy",
  "key3": "5BMBmTAvAoR3MJMyCgf9ggQgfMjXXS1EabQaD41egSnKEuBc4VC3FnuWfVZXpBevP8UcZNWJAfK3Egg1qFoQ5frY",
  "key4": "NWDQRQKzrBzGPFrnyQCzznmp3omEMatKvasL3RpbvVTwWfnyoqNbBVE8tjSCVDnVQ4ZJ29AuchBTkbKXE36dusi",
  "key5": "5nAnBgm7HjpGjxHT2oNDnQZvctWchHaDgE5xkJa15L8fNRS6NpXKPL54exE4SzMTK5tsZuaVBaeFr6onuPBR4YQn",
  "key6": "3FXyYSAY4KhMsfANusSx2H86mEibhcUC4oMx7qp86SjPF2SFbvZvvSXCh1bvZH6myjDhChNFGH1WQNis5oXbN8fW",
  "key7": "HcA1wZUQ3GaFf7HutPP55r5jL57vhJfHHNorao4yuS5o1xG3jN449Svq9SKWfyyVNWweCmXw7JkB98aSDR2zabA",
  "key8": "4hc8FSLmc2UXCeudwPqZJ7AfQWsWRydKwdXhqmQKpKKp4uGwjJ7m3HHUPN84NuQz1ic72paxmbXoAaEHAseEo1Jy",
  "key9": "42LFLJ7v9Ezdr2znDtQN2Uin9C9b1YFR7ebYCccMnrjF2511zeHmqMijvNaNC3BVxRKFgVkFTQSdXnGHKqetmZmX",
  "key10": "61J8GbKLr98drE2bipTTrhxVez3EjdkvxgUyb2YgNx9ogD7G2WdYimvvH1jy24wLe2UnTt2v95KSYjfJ5QrgPAgf",
  "key11": "3kcjRVWuxQhTZRq5hK5BUYqoRHSxoCEa6xR1j5XTbrqjYghzxaeeBxfU4FC3t3weGQ3N6PP6yH4bxT9id5Ykgsmp",
  "key12": "545qs9HtpGQJYY1xGx2kD4MfsyyYtqHMUyaBYySGnC63LKeBVpm4faDyUarNqZ5ZVqjdjg2xXkkaT1xoLgzUyyKV",
  "key13": "49T7g4VFB3G3iujPRk3oJZEUgjJA1S4cW7h9ZdFLk9wrgnrwn5zLPKg4eTt1UUNFvCe2StkF4BqW7SUwwswhLHb5",
  "key14": "4duzPv3HMQG9PJ2QnZvrPhkcjH7V8XcfDrhpTVnhRZ7jvb55hDD3BzrLSui5WR9CJ6X7GzWqEoRJeJYXfuxR5hAb",
  "key15": "3cWJ2sqDa7VLkLEPabCVVP9zG1xxq9w2pEf7wp3ZLiommdhUxGiVy7CApyRZX6qA6uRztgEovnTPEEU2YKYuu2eN",
  "key16": "5qbKsEdYP6GFRDFSu9skgdZPLtwUU3UftmFZuUMyRWzzLyj9NFB9RuisQVHQWJXedAuBpNvSEXUftKbc3V2mzbnP",
  "key17": "3SRv5w72aewWbeWH9Js1nFU2BoFvmAMhYCpzrx4TvtnjpUSZJHQPSomeM8wk21ca2FKjoUz3kiavkJRU4pkP9Jkh",
  "key18": "51QCzXKUbDBoHWieHYJfPZDS8RSKj6UFfEQjzhMcbEvA57TzomQLRKET9181ULfMbwtcEELHHsm5JBouNXUo7mh1",
  "key19": "4Nvah4Ldt2HM1mysW9ZAdxBe5XtmeB1MtZNcL8mKDit6AezWqxhPTR375jtdGrbDkrZzXSYrGsLSfru5riRMHWyk",
  "key20": "4qVyhWjb7TkmkTbCbjjjosyTV55KywBkqutd52DM8ANgXu5Kq5yE1xGkJMTQ7zfWPqTosHuWH3x4svyLvsqYj5L7",
  "key21": "39RuzSg94QF1crTkGaMmAzoza4EqijqbiTyAGYP3Ty4a5SzNqEzEkcvqcEstTBqs7MhQJurRYet3ouwjYz383gef",
  "key22": "2nt1rGn8duqXDqb3fUmeUjJiW8M5DAz2XeSAc61uazXPeNArgUXXDBDQ5CWzr4ofukzxGJfd1LovmmkoSxChz3jh",
  "key23": "3CWhpk2kZaJwfcpoYyJD85UfvyBVHVv94Kzm5en7q5vFAJwonS7s1njmTXmnccS7Y2DSPNv9LZx33QuA63SdY44Q",
  "key24": "2B1hgnP2oTGsGmgXrt9pbQPFcpfxvqgr39DEZ9paKouhmCQreVZmwMKQLeTUs4gE4s89PcKhNw6B6LQby8DWBrVq",
  "key25": "sirUYF9RtaabT5C7ymkeT3qg8FugTi3VeFBhULTK9DKkofD8BN1iy7NfAYqnTnuo1jaHCHo4AmDqZa3WjQFw6GW",
  "key26": "iCcsiZnBnP5GziE1EZJnEPUxRm8YxA8ueLwKoG4X5h2ErrAnzFsRmuU1y4LzQnDWKjaVwRtqt2s2DrgjoQEb8Ep",
  "key27": "26eVGv15oBj1Ut8e2Gqk2UMDhsXQ3Xw5nkjzULR7BneKNMTYAQ7tdb99XsnBk5rYGyqB8eLGp7LZFCvVqyYWDTKQ",
  "key28": "RjvcPvv6aB1ExJeCX592kPSUKMRawKzy7cJvk7XdNPMaijvKYDUtd8NTBaFv6DRpbiMNbNn9hfZUzXuTjVchDan",
  "key29": "4aBbmy9dZ61C9fLGeZGyBbyNbVzCQXspLpAX89ZHmPh2bthwNRohgwtZeGFTXFJFidmQjGQjwPCK8uMkU1cHigeg",
  "key30": "62tMT8NemNqaf8H2qJaYgKWTCmuBreuAVEjasPMrWZLQVLeFBi6F9gFsuBnq2N5NL8BvzbDX3Fz5uCQwtvgsvncN",
  "key31": "43zoLNJ6S9eHouQ987VvT2zBkqAQeW3hkCDqVpTFFuaJQH8VW4Enm3ijZcVD6Cy4PC9TvQ4nD5oPiXaAT35s4mKr",
  "key32": "oZTaJz7WVLE9JyQSHn29Sf8tw3YAjJU8HToXkwNJq6SK9bEDyXxjUoybEB6jDoSZYkYxqEU4y8u6v7CcYJgnpCA",
  "key33": "2oP3URroczJjzq9GQC6VtFnhPxRC9yjqrX16Cfqr61ufwCQFpL5eWpmGZmKo9YugfmUvTrR5t9yk7K5byVo8JWjZ",
  "key34": "rPQMhpMbQYzgroiByFdXyUEyG6AQXzrMt1Pc5b62YJNKfNiwY6UQJQEsoRToELET41ZVr4nRo6QfcVJPhh2KRjR",
  "key35": "34HypmmQLsH9FQQdAYoDbHoa7UWERzxiwybuFpoxuwHP4mShvV9rjVmYzwR4zH92PjXCWTDW9rpDpc1v7WCrDCBz",
  "key36": "4MnHgdjaha4C9eLynpMPWEtqzWCwmigupVjJzJobWPdGdWuKN1u8Zfe5aU7krhn4jG9bXPqhipdZWUPodBnjJF6e",
  "key37": "ryo7ZYJuR6PPsc7swyKudhi1pcwhWE4FVmkFx6nCjo9UtrWFieKYEdUREcAk1CQVR37iSjbKiroiWqcQWGvXSbc",
  "key38": "534tLiLHtUFS5LFTi1qAXCW7jVihi3jHwB7HuxdRJvK2KP75yxLMECqNu7b97oqRj9zv2gfccgTFuvRHgnKKqtpf"
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
