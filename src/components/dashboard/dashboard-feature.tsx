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
    "5uWy1bFQRScp61JuPHeXrUHN44NBAqPDVEQeLDfUNsEds2pj8Fw5N4Z5vEugtyRx3C2WBCKAe5rLUiCTC2iTbPKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RhPQopXJzDUWwaf3ZmH6Ze1MiMfn1bpzcBopFRMPS3ZbQTLinSG3bqeuA6RU6X9e2n5r2K3ZUjxs3xWWnKXme2k",
  "key1": "5bZh7h1tf51X6rpWS9Z9dBs5enXSX86dzzjLpk4s6Jn9RE8yNuMpChmtLGBrJ3Vop32LJqucLvM4xN6YZgrLBfcm",
  "key2": "diLMK2TwuJkfDV441DuCCiy1B9Wtj5od9MW8xnqEUceYSUbQkfJbvzXPLqp2JRVQ4fVgCAsgonRJc8YgG3DJ9WL",
  "key3": "3ufU7NtAEdF4m3DhUUX15Gr4ZgYQ4hCNWs1UwtDyeSUUWdgrXZ7rmyVFaNUDmBxuDT4XdeWTkhE7MKU2miKxLXJP",
  "key4": "4aCxiMKLLuYARhJovKe96wntCZgQcF8ZeJVuZ6nQaCFb2SrDUkEcrkvwpTUWG2v6FKu6BqvewpaA6qbz4VHYaqgx",
  "key5": "5p3o5YUB1yJNuoApkUZAmwGCNzJkVxUqBxrfv98i3ZcvaCmw9gat1GhrtF5NWxFFhv8ACCbW4JqYyeU5BCk2Lo89",
  "key6": "2atK2aSVEVGpfyhi8QwNfrLmA2HnGV4SWXc39daUWXXYXgesFyyXCaMxydH819KV4RhhTQfSNHUBadEHdMJxqUMt",
  "key7": "3HzGuSPQTciT124sf5B7nPHRRk6Wq8qPPtQfYqv2fz5uq8Tw8jJvmZrWZ4TuTqXKkBoQ1LwguxpfzhjJLYFuhvNu",
  "key8": "3feGzY8gJAWDTykcjkSF9W3pyLJqEJW7cM7pUphSv58N9ogrME8HqG7mzF2tuHhvuU8vokzVMCftiRpp8bdMtKY7",
  "key9": "2nJMwKwK1r6jp3o3kopDUtk8Jrrs4bgbvHEMLy3gz7nDCUTTBSTqWNRJ1Ns7twgfiCzDZo4keebhm5bUNYa3w838",
  "key10": "1Xp4Ljtf9utGVuE8kXNocR7wJPiYeBFvby8w2T8wH7gfaTyaLctNiJZHrM7U2cKBV4tLVCpbqMMufy25m1QYUJc",
  "key11": "3MUUD3WKaQeKTsfnkWL2JdzD2A2vz61mYwyqhY98qMdprLN14dGHXwBmvpzcqEammp5sj62mcGeKYh46PPyRVpKG",
  "key12": "3boK3ZeLunCxU6U6QNBpotSJtnAb8mfqp3Gv2yRxNyAFJWRFy8XibnxQibaZz59LHN4ssa1W8Wtvq7CrbBpZWeA1",
  "key13": "4M2esVGQyEJiGZZRixMqm2u8ReG1fjzFi3D4zXiN7ucbF2Ax2gwBm9wFKmsyMRABt5VXP1U5srEXn8aUg9ZQ9DL6",
  "key14": "4EHKrWzeMYRNV5i4DSiG4WPHeuzcHigngWzaSJ5kPGPQyTyn9FCxuJXiookFZYPJx1J4eP5aA8WhmzWQizCe1eRP",
  "key15": "5Pv5U9VgA2k9vNkKTrM3pakPCTfpsmExCNwMyshPMqZre2wmmyBNJHENuXd6XZEBJRAcVFXJrWxX4xRAMJKmd3n9",
  "key16": "248KeGySvgvKXLbMMrCheYbk3cFLKmz1EHNouF5ML8DzsLL8XdsaDeuMxjX1nJE9YpMXgfEAEjuBsgH6a1aZyNJ4",
  "key17": "51f4bUQzTokMwdzAzTYErcp1zXXtaScxQzYVspjmmyMRu1GuSW72uqPZY2J4GbFu3WM286aYAdfaCjBuudQhVgJJ",
  "key18": "3shKYdABhYsHhXJYKzFNHxAJ82SbzstWtxRQhq4kLPR45F6sm318hoZtmumporYcJiej4dyuw1qPgWPo2bsGuViT",
  "key19": "2cmr4pogdR2qHtHuZXD1D4PZYHCr6QLReaN2sUgDjAtpBgbHqxsnBNWuucqFkLc31a7NboLwSXJBnf3FcejdSWXc",
  "key20": "5GKs7tq88WhknXXHNwhFJbkSFB2jwRcjMLDBqXFsaor6xSviFLyonMHJjAjSZYGJGqopdMpmKPuR7WGRPcKn1swj",
  "key21": "4muvLunhAsnW72rpgQuJFH8tBDwdr9B8edFoy9gmtMjV6TYULCvwPqoFrYz6oreZePDVdkfBawWKuKGwztixQGcy",
  "key22": "3ZyASpphubp6ioerAxRkoBmXPVzGDKZ1c6TewF19a4DxzPag6RMHBAsGSoUc8HMQAHtMFk6RpF4BaUamer3aJXXG",
  "key23": "5u3BSEAeqqyj1JvUL3mYdE19qwjdBcuAgf2r8Jy7kP4RHMx176FfF8VgPsoXwSvw9cG9HeKoL6J6aHcYg36gyVkf",
  "key24": "2L8y49HrxU37DxwLbTcyuMX7r2PRPvCpGgodWBVr6fGdrxAJY87edQdzm4t6EeX55n3rZ2crHG11y2h7Yp2VV8bb",
  "key25": "yDRMZUmFKTyYWKoQFJvnqqHw67QGHDoi2KRGS75bWME6FUm5Dz1SthH3oXfHWekZYuZuCv59ZNaSJmGwbuKog2B",
  "key26": "2c6bWYCkjiVKtKpttNqbPKYPDJDuzTRWffRgRo3eJjXjANid5LynjYkPjHP4w9yW3QubZjR3Gv4Xpj312F5X5Te3",
  "key27": "3jZtMz6z7134HMU85G3nuzsiknJemcyDjuy1fTquEV6TmHfG2Er9Yqi6GhkVvJGsS61Q9abXrrq117DWJfhLeMrr",
  "key28": "3HUCHoeKjMTY5asZGtAoVa4LoWPN7ZDez5XAR3LHkvQFAqXNemcNRRXJCozfGMtVj4ymFtVC8xLMbgaKxvVryUv2",
  "key29": "2JJR1rLL38Do4v4gZ6hKWduj5zFcAu6HtWkwxQQ7JgqjkXC8nC8vVa9wVfzQbmXd1xwDHHhZ1BAMQ4Mh7XrsAR9q",
  "key30": "59HPLrogZ5jccrjRNHYnZzUtcWDeSUgpRjkTA1QatS2MrXBPTcKSBBD5kESbVwMgMbU1EAzJCQqa4is26pZtvkke",
  "key31": "3ToUfmWq7WFJ9CQ1DP3vNpCHpFSPn65TGof6dbRL1FBrfuN3vuYrEgRKEvL6QXe7YNachujGxnuBu6ESmKogZkJi",
  "key32": "12dfVB4JdCSGBMTPFqq96FgxNVAfym4XzSjgnaHE9NMaychoapaRPpCVD273rwuvnahXhq6c7hXujCBiH7zXDrm",
  "key33": "2HuX9PZBbVnz2ugopA7hEUpufs2nLev7kpwx89JTMqb4eTgvryVX2Usc4fHUR3RePJdx9nK7cigxoaVjCt1Q3R8N",
  "key34": "31QCRUU7zZ3KzZxt9cpkWwHFhENvcJ745aAhVzMXqgDzrPjpuQqbmorHsFFGWtN11KK1wbwjs8iSLgQ7kobkQLjB",
  "key35": "4bDXKfpWo8j59inseV2oYdMSHaYSHFzWj9wipBBErpRvf81zofeUYrEjvJM2mAaJUUMWqoM2MUckZUHbzKhFnTLY",
  "key36": "2LKnfyp8RKynf9n5a8287PQha88GcwuipgVRpzP97H8yVJnd3RWuhjqdtj9RwLPCfmM3bTBRM1e2SW7dsdSnDX6R",
  "key37": "4LARkjLFcyZ1zKNU7fBd514NVM8V5RgzdhPaYuCYzynJ5KyCJP3wNxYn1XSQtokWSY1cSh2GyVRBx47ZWSkoRAno",
  "key38": "3v7gv3zs5ZhFGVsj2CqCPqRYVuwov81SKLpEbPwEu6hjU25xfnqsBhcTDZLJWq9ekUT64hWFQXT8DoAyvc5WaoQK",
  "key39": "QKSpWSNasKsjwiqYMQVurmFe37i1LcZWYZ57Di6FT4vpRh93UtAuDbdtymHy8vDgNx2wEFx1eDY4NVjRxydtJLb",
  "key40": "4a2cNoKvRcuW5kcqmjnriKHwtCnWA7E5z2n67rhX927CzCAU6PkiQzQ91H6DtFmTWnMooD4pxWy6nkxoaaBvTALD",
  "key41": "5UpypJyaNPchGXYCHSgDWWcL3gxB6xKNfFDkbhFatEBFmTvB18QPsdUri3AVUynHjzcqjjUhx6vKFyLrtPmHdiNX",
  "key42": "2Uwzfk84DBsEwQz8g6RU4ujyAG2V4qnSoVyT3vVqKZXByfMhchxXBZncLwb8khsWNN6MrARrUCdehDV2v7pVGGki",
  "key43": "3HoiL4gwuJDwxq4MHgtW5cfR4cG41RYZwLbgvCt1AxVnmzKYZ1vdnPm4EgAdo3wZLoLETEsrzbXEjwuKQSRK3Lat",
  "key44": "621ZxsauoKtwRe6785o1KVzbCzdM6ntgmKwgFyob3faY6GtWyo8zmuPBB5qk4XN4hELXbUECTbyaWGm9oeKj7HL1",
  "key45": "5WaawqPNtNJHiVDBfN6vvT26DtHx8sg8AAgqzJ7vpYEDAtTxrpsyfVKTFzorYaWStmNSQ7KDgRfr4tzQVtk867UR",
  "key46": "62WmtCRRgq12NYPNXhaewPoCpJyXLkF5UqqgbtM8YMQXUeKhxuEZfLZkRvUaUUwg91WHNHaWMtkWWerZpZSe4gtY",
  "key47": "2EH2eR3kHa6kauqXrcVGWwg6nexUuBeaVw4uEadwr4tmnmzGKrEuhNF2nwKw9fpayTiviucUS1ABKX7Th3siRWVb"
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
