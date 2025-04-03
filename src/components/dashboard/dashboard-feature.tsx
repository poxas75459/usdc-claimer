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
    "4vdUJ9NPiTwddMBPKp2PMpXd6KJLp3k8FkZrUX14YMNe7dq9Db2e5sUp74AySkFT85rzTT9LmeNrL16gXb8qJFsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MftdxuFXBevQtUWXExorqDZv31fQUkXAakjk4y3qUZB9ca86PsLYzFPsSUur5pRoEZCEHuVm8k6MU96hx92Fom6",
  "key1": "jLAPGhEHra9qU62M3yknQtj1Baa7Xw3K9DhaxjWXfzmBte13sjyFZHskGFXiR3gb5vKgm3Di84wodTRBHpn2gvf",
  "key2": "46fMFSBB7qnrPviGiFNvCDzqFxzk6KLQivVuMaGYPVPqt8rGrVZeufp1hdKoG2U7XcE5iTCvNiNMAC6tB5aRpFQc",
  "key3": "3q1PTrRF4UHVLy2Bj7A7JKnYit3xcMYdCNnPjM3ayE9m6N8qveJYjGZffJRjJh8bpfXGR6pjSZVa8uivBDDtRXsm",
  "key4": "5arhXKF6Vt7pXaiTTu2YJTUhb4A2FoY4RBuVWMXg99oiAcjKpNNTxj9UXQ3Z94qHr1w5nyY64A73qhTEesrNggNo",
  "key5": "3E8baUFQbmVNkKEc4sAZcRW2ZumnJ5QN2Ztg52RzRn4KSZfEocLYjT2geKc8Z1HAm9dCgz7FtGAkjRoUKNXdEMMR",
  "key6": "2qun22GXuK9orPmoSUoewKrpJbkgzwKshMpVHBCK5XTN2LyxUrD6wCQWtdpRbHE3QXYnr7RAYZMkBM34rktRyV2A",
  "key7": "4GG9iSgmBV7vRchpuG2euqX26Xh8aAtRqu1shvbDn9Z5nQUdXRWGLGiTgwDfMBPqu8UnB8pNmjFiL98suWNij1xu",
  "key8": "3A7VCbkcVPtUpsp2PTTe3VQHZ9PBHodJk8oakGTRqYdrzH4XtzjTjF3cpKpr3yq2JWncNoWNwbwjn5E1sqxseaqw",
  "key9": "zJnutcu8pWS35FddHoEsqvBezFqE5MCUeZJuwRAVcbKohyPBPT8nTKVcpHHiDzSNT2if4nSPTThfTdxXqxN1kuh",
  "key10": "M4QA3yhLH3qfpXL5HRuupu4MwoxYbfre4cSiPZTePyBf23LgQmPkfYQfuU1dL3STtRiSkSSkUEJ7y9SgThhzNES",
  "key11": "57mtdoujH6TTwa2cRUaTi5xsAwWTaFFcqkvYrfALymq198th9Uq19RNsRijXnMbD8LGAotCTZQWDGsrAb68Zuvyz",
  "key12": "5axa531HRjRQjCrBpupAKWUXyXgrCdDwgQkaHFWU96WDMLeZ9rtLAYr7oJoPLWVnYCwjepNuZfyuk1nDDuWDLW81",
  "key13": "dRKbnQLWTMH3qprHdQjt5tM9eesmfVy5vGxGcXfmyzhDAzaEj5ECWu98GihNZwiBxbKgPcgrfFx1Z24uYT3r5CJ",
  "key14": "5qyALXJbUyUxKTp7fN2eFMC8CRdXasNPQsBGNV1M7xQWh4wQtPcjUeXJggXvn9jpymvKumPEHjrfTm63zzthpWyw",
  "key15": "55GzD7CZPbre77HQFTyvVn39N2DyePG1LDwHegVTWv6xZmm2xpSKio941BKKfi9Utyji1kHKSWPV4Atrf8bEuREr",
  "key16": "2xwjrRTqgX47j2KkUA9PkC9u54f4VJXofQ7XvSY6UpcbduaavjsgE9YW6fzhzRKS4bPJ4tdfPcMb7sQCPkGM1j99",
  "key17": "qcWfCCkDYubiCGGVW44Wje3sR42S5nSkWXATkcJz4iYVNjReDhsZnfNqbWSJxFrAEY4TuShEhav1jm1dVpopjWF",
  "key18": "HkLSHZnStTRfqpheJKFXJsg8Vo4dLvD7YkezREY4SphxYxMYAAeQHUZYqjHhkZtKofXQrcCYAESAH9aPYziPsJM",
  "key19": "jBmDmqUpRG7cRptPKuvULsGyjpKRBZKbPJGoCFWcz2ZHZeJNZZVR2BbkmBHc62i8NPK7hRYHd8TCowtAmfZm14v",
  "key20": "CgGdGEAfGz92GzfsU4v98oBtdMUdm9miwj3EnQ2ErzpyjjHzyy7PTJxjwyi3VvEPuzDGtNvc8uXcjRdd8yi8bSC",
  "key21": "6vUYPGec4bDhin496eGCnknrx2qsHaGpuj29h4ohmLwnUJwQVJvqK7jWUdQ9uLPqmiDPGB3hsEamppkjnSERTGd",
  "key22": "5ZLUT5m2c6GcW1wV7i2NTUKfWrg9fMhzfyLzgVktZ3cWu5XXMPbCsKShGUuKSpdfFnq3a87Lq7iij73TyeGVEYFk",
  "key23": "3LwvK5XkRfRSDV19HnpPJRkWsEHET7wTJJg4Mf3WvyWPM5SyVchmbXAzWaitFaGpFzwZrbPsyNG8xbV5bKmtc56g",
  "key24": "4ytqQcbt4TGtWAYiFCbT1icAvfL8yiYWcWbFnups8uap4NSncpw2hcmp2wGGK5uGq4p1sEkc1mkNiCYveFNs1ZLj",
  "key25": "5tCYX6fUKFkiDWFVJ4y8Lt9UHc86bZAW8imjctAJkkBESrZgmCqtSXQdQGq7i1PiWt4ET4JMFjdDGXQmCtPEj6i5",
  "key26": "4dhYmZ69GrdziQXkyjHSxLGVa39eFVKK4XTMjkNKJtqowYCCtUdsRXDG3GS9xdin6GqoJx9QmDybGgcAmG7FNitk",
  "key27": "5uHYqCJ6JWe77JGW31SXYuY6QMMDu6D8rmr227sFWTR6zf8cLAy5he9BaNrMETxsZ9V3xRKMAdHmmsnmn4GCdPzZ",
  "key28": "BLiT4aQMiGjvvfVTowU5xdsjHFBeHNsX2g73mAnzCxQTChXMTNA88S9AW5oSkK9cKG1Qbzk52MrpbYG2gUF2uvF",
  "key29": "4ZtgoXhuFwEWdu6ucSAnTkUXEs8qecWzMpdYqM4WB6pWXSgFW6jYLg9CZSuErL5B9eUeZQrkHzNfgrnU1XZWgLhN",
  "key30": "eTCy8nWSEyR7drkgikbtcCsUMDKGdhZ4puMHoHoKSvpgWMbGRx2mDxDChFiXPL6tUTGJmvDMi8KyUN3Dw3eZVEi",
  "key31": "214BPKRnwEz1m6oykEznztXJWueS2zZrDcVy6iXmuoPBLpsMuAVu8oVYT1euitYxbeTQpcXkRNrdVXr6MTynRKS2",
  "key32": "48zH8A3S9RrENjHk4ucxpRosEVNJveNMMYY4NeXGPg1ne1WdVjrFry3jCTAgpLZuKwbpNdCnmvdLTK6uTNnkayqT",
  "key33": "62WLmG9sRVs6pzJumn3WgnrmSfeDYfymzpZKxZBXpsvKa9Ak7DqeqprhaXeiYDezYA1aVajLpmVEbN81Y3uLLSsp",
  "key34": "42v5mVNGAvC8c3ZHQ4x2GQVQSe4uw1V99kHBzueFAsPGPSg8yz8tUvsVB3gYFYaAqcZvSFkL2UzVux1KiFJs2pqg",
  "key35": "3HyBUPHB9Z1LiyzfZdfgMgbWTYuKU9LuTWgJazzpz8NqB7AFMbLkr89b9zHuoo67Xv43i8Mjgw1kyNqcbqpDUkY6",
  "key36": "5cxaFuznXi39A9vPQrFRc1oezq86n7uBbUFfdwbUVmZ1VxbLyZ4tzW5ZGYTMZZSGu6MwkHYe8RgjhAW7jekc3gpK",
  "key37": "2wskQu9Y38fvUPHe3w44JN55MEFNU9xM88txLHiw5gXAcLSxXVj8EB2KNCLf5WZvNWdwSud8NhiqQtLr4fUHnhX7",
  "key38": "qgDmh4tfbDQasrFMDTvo9v15bLHeMjxY8y9TcZmwEyM1g7VoSxo3XPgPwBTnULUE4waL8nk3HacR95FtpevuPtW",
  "key39": "5LA611AnASqkUjM9cBFoMQsd228ogkHjjMrqRfE5XkHGFFhUjxBKwETaazU2xcrcJ7o8aWXrhPot4RJaQZRoW5Tw",
  "key40": "4PgtokNY4dRjKAdFuHVWtaMy3sBoErZZ7LK6tUxzmVNZZ5FPrqHHjMpijaKtgHFtjnguYVrnaTiKTNCuthMXdrzh",
  "key41": "39gXh7AnELkZ8gn7ebY7ZcTtmMyPHdB9TuCyDLfCoaDoFBDdKaFmCbbmjQZdtJyasG8tUicvmeZ1JAXpytobnqar",
  "key42": "7KexEyGzq3XmpitpN6nT9ptWMtXFNA3hSVyMK4miNyaUBMqocSGFEbD5Foyf4a1fxaGX75KvSwudzP2E9BunN3L",
  "key43": "26w39B4aSxA1ve18g2kEFnnikg9wPLBhGCaERmyNngQkPaq7VhoNFTCUBgmutmPjdwg2FMaGGDzELmTmwNRaXigs",
  "key44": "2zba9Lre5SjH212uxesaHBX894Ws2GqjqxnP5grhFKMjsnCPnCumBRgr3v9jyV7JGQnUovoRJ23fKJG8FR6T9qXh",
  "key45": "5RKYn9sheSyJHmBHZqwuUh6n82T9uNQ416Z3Kzwe68TAo2PQGGjRFiRBkrihuLAPEjo6sKp16imdmPm9q23PE8zf",
  "key46": "4SEzgQawdVyiX3ArMjvDwqZ6tevyLHcSz4yfTsnMG8x6FBBNziPSpmcjX8CpzguXZn3r9zBzC3LgG5a1YEWJHgEs",
  "key47": "2JvQEQi1HvtdVGEJgX3cBVu9VFBz5N8pVoXLEtfAqAFhftjvwXHrXhYnD8AevihFyzAcYCzG1bTBDxvyF6pPvWE8",
  "key48": "3xJYeUhGG9VaDzmEi3kY66gYd1fb4Vp24rk9DhGNQ42zAAnfNatRtdZaC1dy1VEg1aRRw2w83qGRaTL6a8Rb83B5",
  "key49": "kmsZbrdgCWNg9hkPyrWfg23gGHMdJVYDeyqKVkD5aZxESxKzL4BbP97zAMkzQRmTNikYFuZ7iwyrVtGtfjCE9nT"
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
