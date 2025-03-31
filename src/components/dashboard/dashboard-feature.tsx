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
    "5A7nzLo5FbjB5KDXCH9biZJ8rdVK1vcfWZ1gLPFhvZcVrqMLK33wKbhME23ot5bjRNAJABCX3smaadqjxvitX62S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qd9eCoyNvTAmAn6tfWLvC82N6XRjKimynadSxFWcoEUgvLJ967wQRYnr3CPayBqLd29EJfqg39Jj97gMp62QWRH",
  "key1": "29pR5d6dTiE7rY4ZxLkHNwC9rWM7ieVWWQESkgmNKk69ZXfdpagdD3qDHkvYgMVDsrEs2kzweypgaC36fDdsQVm6",
  "key2": "5Dw1SasVX4GUeG32mwooRzSLLrxb1573T8sK6fELZk25GE7tvxHVumKS8xceuU35imk8RJJq2QhVdvpuaZA4rA4R",
  "key3": "25gjEB3J9Rdnt5KtYuUnjtaJ7ENkMZboYEWb9tMVBbiNXHsPYbmy887yC44WGdGEPd2fpeBjgqtVwjr6Rmf4bhM1",
  "key4": "2coKwTvZYmgkDuAXsJq5v189YLwHKRXU6LhaudU46z13PRbngpgiw13qjocjNrYnZ36qeNuSeX2NLzmctmwGD4AE",
  "key5": "4tcW7dVjgw6cfbdLHAsq8rXAik5zFNFYdUpW15pSyFz4qj7vXceqwHi8Pkp61TSdYEnjxjH5TYXnqZ3vjyCU7bpb",
  "key6": "3Zrh6w3p3PLGHLELuPBYw937LxjkSsWwfHJskW39ikehQvkdL1s4wbmt6Nk8rZGrHz46jWiw9aAgQmnU6A8e5C2y",
  "key7": "2SWdF8T9MUEgAB61RkgoQx6Y92f13t36M5UNhdFfezfzvFvdiSXXJAxphxCdrFNhR3sPRRpTK7dJsCQyKxjhTGfL",
  "key8": "58eNjWfjNPfJLZaJhsXTJqsN9K5DREEEjeSSc8Zv13Z9hucqMcmfgvtZQvXQCM5PZhsnuA9D4hY7J7LfCuogpkzS",
  "key9": "MHzntzkfChddpGUiUqoESwc6CMerH56Y1CCG7YeuyQfcZqDKAftgoDuZAkU14H7Hp9kyM6hn4UtNqo3WuDGKfDx",
  "key10": "3C8a1rJS5y9KcPz3hjEMqYNTUWmyGx68J4L8YnDc9DJBDVaupFuMmnEWu6V2WoBGHvr9vYNKRF7212q2qNxGgLvW",
  "key11": "HvrLLXhz46uMJmobVRHjoHkc2DCYdjmrpgdQ45Q8YN2oXjF8APvmhTpx7VckHQVKiHTaKFkWviuxVqjgt7BvN8A",
  "key12": "5VqKGPBVasm8RWWAPTkk3HfD7QjDFseFLMvn5rj9Cn4GSPGFxEgDjhTNeUSonv9Gjii4JKZRp69T6faMyxQSyZmS",
  "key13": "5VyWgoKoxeaXV8EaKsCGKVccKjJw99eGxVV7oh8shTmaDPtL47FfRArz55cLndaFn6GF8zLnPVkcTSgmd31oW6C1",
  "key14": "2wseUzwMGjAukYQ3YiKCwgkEE7rTND1Ccjh4G6bUDTJKYrc59DEC75FbxFXs8RnwLqLTc7pc1XqFneZcccLgZYZf",
  "key15": "52XDccyqeJqZCeWYNjfzogYq3YKPN3XEnaV9b7GFTk3hkxv7zQhZ751uYgU9X5RHXcJG4cyEtwkQmsKPtd5S4YXK",
  "key16": "2QJciweAbd5vVwdNJGbjxwbqdLasnjdnUp2K9VLJAdMVr5Crczf1guCqZcWaNVejCTpPwZMNZKEZ5XUzi7nvryQ8",
  "key17": "32RfycdjMFczmXXVXDmddf1ZSW9Zmes4DsAZ9zb7CwVMzvBFtgoGB71XgCyDaBcnfk15RvWNmHjxPTTmxu2TUJ4H",
  "key18": "4tDtdNNYRZZrTvMkwdWowi4wL74XsZ1jgP68NAi2N52X2tx7ngxQUBg5LRHJQYCzcwwme5jLR45QHHQtiHBFBa7y",
  "key19": "BDMV1GFnTAeTrnwCVsGmEaw4ME62Zfc6q3vNGoo12jtLt7X1tjWMWuAC6q2zTPRS7h2tEC9ZJu2ntw2ZnzrYqpQ",
  "key20": "3xPwFgtK4ojaASC6YWu4YEQTH5rVC9facvusqW68c1RP4fW4UaUjFZuMYeKpwAbt3SCKqU5SgvkDRTTdUPUt7NiA",
  "key21": "68KEq8os1XUZTcRrJBvhcpEaYiA9itjGpBvwVXQQxUG1dvhWGq6NmPxEm3M3J2Wkn7odG92vENXpu93acJrNVaR",
  "key22": "5CDjhwSRRnK8DP8bTcGqFNAfJWvLVpBgqNd7Q36gk5ssJbWDdmVhVKzASrmjZqXF4EEc6ku56LKB6QJ8N25JGBvX",
  "key23": "3AABJbZoGGf7ac5RYoMPrQSkhWon2Lrh6RQNxA2etyCLx4DRKcTF4L5SL6ShGUXuui15SFMqLbu58xQXxt2xJfow",
  "key24": "2ahznCvqYam28KSZ2u3m3RgweCzwU4uuXZKph4YS4Z5k18hwxMDVq5rwyq758gX45fJaShM6Axs3JrK9zsaaJ1jq",
  "key25": "21xp5RXGsEaoofz9TVKBtZEGUzzyg6o7WCgMuexgeoTvXmEgwNXfhRjZwAv1HJj4QqJRQrV2YnRWHbPwYzNmTNnC",
  "key26": "4SfKhbSm11SWSvrZ5mw4WByuKvsK1JC8SVxQ7N3gZEaeG2ktJDy7UqBS66cfqpxtV4FTsPdJAf7EXviW5owrpKxS",
  "key27": "33m6CaJjrNXu7VDzAfQxykCmKeNg9w7T1cpZbppwpYnVa6jABxoX56g91XC1zoXs8wC2Xxqyp39TQdjdzizam3TK",
  "key28": "5nLvco48JK9LJr7SbQnrWRdTS4xpqwRJ7ybYBWWjX8Wfpfe25kDTA3K5goX6aPt1RnhzTNVqKv3w3z35yhjsPt7j",
  "key29": "LJuYt7b43Ad12UrCyaxDL9yNVQXAHDmctCagcCGrpQQsTvAHZj4k6apMsBkaAMxSArJCH8xqv7NPJZT2sRYBnZU",
  "key30": "4t9WY9EeTehmfTCrcCT9DK297gEttAB7rn6YaH1z6WtCJq184UZBwJPebRwuUqWru4KEAUebj9E8Qonfvd9hgd8r",
  "key31": "3GeaX5x3SC9djERit8ignxkEWfPviuCTLWNtHUTBBD4RxGTjbcP198hmbjuaqjGwsT2GATcQrLmzUVcquaFbtZm4",
  "key32": "QyMiH4vjPj6PvMVLHoiTqW11HtYLjrHTnWZqD9mCELXNkcTix1yG3WaAZnXM9RXtRhWQXMeukV39mLRG7ohSaiR",
  "key33": "3HpeLQb2rxMoLWvXFGd1BBMhd1f2usRjwXXBRCEFzec1FhbivRXFkuyZL3GtWdiWeURiDr5Nv7cyw5JksqPup7Q8",
  "key34": "27q73S1YiDNVWRnP8TUsDUaL9fMAAR4Temg3cuXXdksDDxXxKzaHexrY9e9fws4XumPsDzCGA16zJ8SgZBGa7oYF",
  "key35": "3rqrRayG31cr8Gz48mLmfmn6n8Gxo7TYfVnxKwgBPzoZq24vqfjb5xNq75shc8dc8aYowt67WLTee2S6YCq8xDuT",
  "key36": "4ED7gf9juRGcufmaJ58FSibHhAbz4nDcMzwkBSEdQ2H3ma2tWFLV8JA5NH4rTk33E26CTLE2pymtMnrUR2ir95im",
  "key37": "2BW3PiNbcFqBffXLRthcMU8jRa866b8e2iH9Cp5cqC8xWDg2BeDL8Vg2GMTmGZSQoxFEJawF92hfiL5SFx1okAKz",
  "key38": "2dZRmZwqbTdvZreJeYsv96kf9DXK3gErrFcat9WBQ3v8gzH2oWwTwGueJABhRLqPDAFRPZVdBWjZS37EK1qcvaNg",
  "key39": "2y9wAzdb9g1a564Gjv6mUgy54o5sh62smAxmpKFR5Pm13Z6akNJwb4Jto3EjXNXdcxbVHzsckNEfbutjsCaXCWKw",
  "key40": "4zftdNbv5n77NVqxPjXU49bWgGEKewKi7tM92nK8RQ1NPDH7Z3tFxvnWTSc6N9GqkPR3QPkqMokkrWRshiaZvcTU",
  "key41": "4PpTuMapSMy16VMLqGe2f8C4BVavDodYYcRa11ykuGzcnnV1b3NgS7f436X71XN5zXg55p2L88hhr1gKeTxUXDwC",
  "key42": "4dHqog17jF3MfnCTYiUyPrCNQWRjJnX92BBREGunN8GWDrEuFrYQ75DW8snZnGvDBu3oYdo4XfuUMi4Gtide9tR3",
  "key43": "55C9Y4ZCRqD1pErzaA6xTKtYBjdg6FYdzv1jWFnPfyHue4wHtGfn9eyiiyB3c7MCNPcjbaX3SdJrtXS9wJwxGnL5",
  "key44": "4Aw4bNjewsuubB3qo8kx9BjU21J1DChRwMYNhxPevY4JPV8tWyAUNfdeNdzUswJkqyQya261ppm52yGGF6Xms76t",
  "key45": "4vX1Mhzp8wmKHtkv6kkTzzMhT6Af9i5Wcakf1XcokcgxR8PS1UBdeVpzjtahdgTikXRVdzDEF6RXXvZD5fGWRYYe"
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
