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
    "4aFJuG1jBPvkcxqZE29vzjnvqExmZEh21hqeHcFnjaEbAXxJ83FAwc9kXBEkdSbR6NnEhtSEQZBZwuhGDh2udCbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K1y4WWCzqnyyo7VVQa9T7jRVqEBQ2QYLysY1issxnRXvxXPtk3m4htGjoNWuwAKpHwmXg1Y1LtdnJHi5J9KB7Zs",
  "key1": "5dA9KkGnHDfXfaQ8zBttCnmUmNs7d1d3cWneqtioAgqsgqovb6UuCESmRuWdTTExbyiapjEgVP6zM7ySQcYeYuYF",
  "key2": "4rwXpzaRm4hSap2WiLMJnmGg9kga8KgRhr3guJG31iGoaHU8WYZcTpYc1H3uHWdeJEQgETyb1e9HigSy57gMH7MU",
  "key3": "5Nss6bzz2Fi9hr3EXT6MEbeCW3EvzQfAq88Zskrm42s1Hx5JKDugtGCpszQFjtghfon2KuUGS66t1td4KcEAe1Vk",
  "key4": "2gpR569Mmrrwr8e637tUiqGrdAWjrxKvKtgt7pAvh4ukcyQFASpvNqBjvpW2HTzWpmQUs2HP2k944m5e6FDdDmMU",
  "key5": "5NbawhweT53vE1t9png34wFfn5LKcF1NwQvp5fbzpsj2r462Sx18GfuFfaS2DijPnBax75tYuByevFp333Z2VuWG",
  "key6": "5VkfeWjdfvjRVcbNe3ZKLTLyMQS3GXbeypfVAc7tV1xzaCUCYJCexDQNwAv9N2mF2DhEQUw3JrK2ChrUchK5uisD",
  "key7": "4rGg4y6RyQQHqAUpEmS9jJ91h3BVsu1SH8aY9WXcUsRWHUF3C9XYWjwTf1yEjpXnVNUZsXUjEWsQer8FvdULxpC2",
  "key8": "3gS13vZEZPhEaZwKAadS84NrTtCvpD3D1nGRZUzFQ5AJBy31oFYwojQXpaNSrdciYpBBoYREmVXWw918EcTNj1wL",
  "key9": "422FWUCexniCP8xpDpGYSXkeTyPgMucwmjD1TUC6F1GCArBgYYimQsDaBqHCePHFAdoui34AYpx8su2ZASVgHkWJ",
  "key10": "SCgmfg6Wn1UqYPJYdHCSGC9DDGTbvc3mXUbNhXLsQKoBauBfJSH5hEQviZ7PvNgHdQ5C2GERx2KEdDYKitnm64j",
  "key11": "3uUFk9tSAchJ8SK5UdGJZjxpbUfvbwATAgdDNPPwXtpsCPeQeZdcV7qUXNFHy5C142FicwabwhjzJfrRLJp7EjXC",
  "key12": "5JiTP8Q5FLZ4grDkEtNysoESRNzHmHTb8hpVweDSjCmdGV7diWadiMpqqUAPbduCGNqFhh3f6vgpGfhuRMrmr4rr",
  "key13": "2rsMsJYWuLH71z2ZcoQyRiHXi4D3XWKU1RZTpJcx19NDvMHhZSgj73W517iSmCCdJPPVFXR8mQXXBSfh9XhsTAS3",
  "key14": "LdRJ3VZEoEnb41XgQq31K7EecGLwww1X7DfS7BCiccyC3to9vh8x5kNm1Jha1TxRKsuFdTAzkVDp8J4o4QAEZ7B",
  "key15": "4tADEqGKZp9RHHcEZPx6f2DMfdyFHPe3FVGm22cdAou3844E3dpXyQpgoEZQWmSpqiZ5emHkdYdZ7c9n96ABkQqY",
  "key16": "2gwN8XC8evPXixGeVkokXGGHCj3QgxEx8HjhfLW22UKVFx7QNFSutcw2wv63d4ZwQDsQFJQbjacRuW86SigVT66V",
  "key17": "5p3FEYUeYWAfj4YdJ1J7UsS24XCHhWmQMrTCc3voHYVkSp1NHN9hhGF3qFXxtkH7cJ1izq2gHLXxCEYkEFyWPPob",
  "key18": "3WMdPnT1QLfRqx9JkcD6qDgeJVnUYpYgHdPnpZ2oVmFaVhL2ZHYt2nwpvdzTLfhqPvrS1JQFxbT3qj29uzANNNJm",
  "key19": "67SsfRib1Aad98DqjCH4dDs5Wk43ozdWaAeAb7Hfd8Uymbr8jhprw51RJNry2BcXxeD2Rcsib6pvY8zy31FUwzHh",
  "key20": "67AGoMrvix3MV5gWbZkLEtR2jwamj3Jea76Y6XwifBtYTARdNitrrWWYM4psu5TdwGrpDL6y3Gjusigzcewfsamk",
  "key21": "2JyhZzPcd6kM3QYZE2KNREyighuTDCxNrSdDxhbZSxQQuPTnboZwJZeAaq4eCc3tZ67bgLKiP72wpRUqmbUFhtBc",
  "key22": "3KKYWm7B889y7NP8XHrsVzRPYv6NkCg16C6mXoLtCHyBdDbabywXbprw2ycEpXKdbWG241xTtJy6UFnynnNWBj5q",
  "key23": "2Lom9MU6qMy8xmMP8QgdSihfwnkZVobDLUu8b5cfx5xm7kdBX9CWpsWQaTmiCW6wHyXMwjiEfvYXAoAEcjqq21Ea",
  "key24": "bs2cYhn6hfWwP58jNBycwYC8SsCr6Fb6iTGFcnhFHx439hTrdfpcmNWFwRjwXR4EPo9CMyPtyCC8nQ5GnDhSFnC",
  "key25": "fckDYtoMPwFbpXJy9Vnzw8BMfuPrhr3DNry4Aos3itu1FFwBdfHJiSQ1E2Me21n5rq9ge8rtWh5aWUwLLi6eeEL",
  "key26": "6Bh3NXmG8b1c3WQFoERs59DfQbh5kFqEFo2Wd9fYQ69BiqA6cYog3UnnMeogmRrjWNKoonHrZSuswtQifBY2WAM",
  "key27": "4vnSHH19xH6uCx2Q4W6233ikazh1Z71jpFFsS4Tb7rF7sw2fhCBMhHCXwCFzyntgLQutY5ysT4hd89FwsL3F39Em",
  "key28": "BGahjvaofdESb4f5sukzKbouUigrVXve1eTvDeaKQzkRtGQjzb5feLz8Bfyd2WMttYp1aQZEXAvu3VbNj89URru",
  "key29": "FuvGSaaieXDpC6if2N4hS6fbLKtLWQDGThTLwoZmu1QmdivawcTCZCWgafQVBw2vKvRDV1wzAWUdVsXvrESxHgL",
  "key30": "QZCV3FrUMJSLCkR44gKsG1q2hFSjyzBa6GHni5AU7LeaFkSUepEt9Xw2wZ25rVfu2hNM5Vuh9t6k989kE6CCHCb",
  "key31": "2wCQycq23ae51nJCs3Tv91VLrZtU1e1sGRMz7Hg9uN4bsWVrjtAfdz8WBp2dxUuoNRSonpNfeNPVeY9YnWKfdL2M",
  "key32": "51tFdDuQDoSzB7DSRfu5SukwyajhHAviStWaFNhEyXgZJAPgutnjSKudiUjSDKxGbcAs3qBdLYrvJqcZUdRpjviU",
  "key33": "4T1QrthtQb9zawVqReRyQF6ASYULLyFv18fGeZ4PhFd9G4RCXmrsKoM6qk9gX3QZ7mhAKYqBpoCQv3ZiMhdqU5av",
  "key34": "innA1vcHo1GZKjqyZQV2MJqzq3o4FUzNDGQzVa9MJ95oBKcCJqdpZkjQxKk1WsqRFzwhh88C2hmDkPhUq8UeLmH",
  "key35": "38DeaiYByEZDKD7iZEAsPrA7zNEn2H4nDxdZWBHDRYr1VyATs24d68JLBxvqvZgv3oVTgtTc3NSsbYJupb1TzP1e",
  "key36": "29LidLb4zco6My8Z81e8u4ZqqmMfeq8CgifZf8oPmArrdvF8DBd1CZZvWnmB5zXGX1AvmqsdcvzSJypyibiwNhfW",
  "key37": "53avGn8SaHGjtNzWxH5Cv1GXVXKkCi8GM5HUhvpvkHPC8bVDbe3PMvA4Rb2QW3HDSNK7V3JQSYDfzcWpu9vN4vL2",
  "key38": "3J4dPCpuVSgLeK5CowPdWnDrRyzmgnjmWQLU51zjiVLZbw4757Fah821TTUT9y9EKKxvZx5YFf5LVm2arB2us8YW",
  "key39": "4VvAfg17SL1zJon7sUdMJNtoYRiKFC3bmBawGiLSSJrcGvUY6RbF5Jv4Q8CPSegv7QqBkoANqe76Tf2GEb3XsxW3",
  "key40": "53z5yJTQ7pYWnec8mx6Hp9eoTMW6vVXU1iQZVSm8QgZTycB31Lice5f36eFgQoNjbfaCMKCV6JgW5N8MMt4WKLd5",
  "key41": "2Y9rD9CSijjsPv3CdmygYkNj5eMFoxR5NPtynrtZBWWh9zL521XbEkMwXp7e6y8nLc1NSfD3tTKFnD15hAGLcLAZ",
  "key42": "qz95N3GAXf86yktwZgj4VaiBAypEQRdL5Wp4BQcxZ7MYSVdufymjzdyFfMeEqTQ5A1jecjGGKBMBWVFABtiBF53",
  "key43": "4tUQx2ZMqq5o3GNpzAw6FUWHTqifuqAUJAaB7p9oFAhAFuJyHg8GibgVDraQggLvksrNi6ZTZRwEaqNaoebSyFGu",
  "key44": "se5AfGChnR2qHKzJpMwX3HTgBX2oj8Tba8bk9ENicKpHn73kJxyKyDcGz5XRZfUEfkUGAb5Lorg7h7utK57avkM",
  "key45": "5w1yxuYvKup4k7ntiEZrb85ABMKpVEezebuyZpuShDLzqpZFM5x4hLULQeye4xubxvLwDLmvKXVMTyRAvjVLwk9J"
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
