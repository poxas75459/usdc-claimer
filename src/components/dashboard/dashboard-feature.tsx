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
    "4EdCxWibpvQ61uZD3fCEDkJ8xjnsrkBNPfNxs2VP5YkMSvM5SLT4A6i6yT7Sh1Mzm6QN8w3vPBBHHWrRzm3Fgwkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5uQCe7UJfrXtkhG2oJ6eRpwqGueapjUbm8hweARSXacyYCeNeint6LS5oav7b7PGTYykpWpWumehGLFrUsFg8R",
  "key1": "3ACQ2fQ5hxjmQrRAUnrd7YWu4DH1G85WJYHvGnSV29vCUzKss27sq1mN5E7q2vgAqiENqs6keKyEpa9mt8SzZmtW",
  "key2": "PoUX2D4wXRDLisbZ5Ms6VXenZfvU9PntGWiTz2TzDvJZ4c4ABT1MovMvWr59AuSzLQdDdKrv4AfqsEhYC7iHZpW",
  "key3": "4RYo7HAP6cKR6By5ThF11iaAyWPjpYgyn8UBvZULVWYKX2WNkHaPA6tu1bVxoYfYFg7NwKhHThM1JTSSz2BtGxgs",
  "key4": "XTHxracjDaAAsQG88QU9rTaHewNAGwjpGX2MaGVBnqvacEpxJynsx7QneB5awTVjTPjhz7ZjYTHVow61LuUC4m9",
  "key5": "5LppkqhAXSVB7hq4sExBAufc9qSEVgAzj31s9LsSmsbexeNDEZ9dtb8q7aiaYZkCYrepx3R3drHoiLE8zX7p38xH",
  "key6": "3hmupYYyKUCqyTwxMELRgcKYVBmyMd99iNiq1epgMhmof7A6tufoEKMGVMKMbiuJWrZSNs79JZdJ3bpLug8uSQjv",
  "key7": "4CwYdjxqX7WYzqRHzhLryMwqRDrsVti3hMNg5bHXkTcYtrdX9V1r3VqxGFhYH6HSXGq62pEtRGsKdJzwUcT1KL75",
  "key8": "5mCgx7UQzADw6BBivUsWRsMcwxZENvL52pP1tfu9YKUoNDHRCptih93viT6d9UZTJos7wEzBfQiyyHmQKYNmm1nY",
  "key9": "5qTnzuGdSVujTV8vMp9vVYvqtTLgcrJnap1CUXKoNwGGUbAmSE48qH3x7A69475L2DUXi1DyC15QvUJ48Jo2m8nW",
  "key10": "24VefCqwUDegowEDNzgivE7uuemgF1DqwgRkPamCTA2pBaRqMTi386ycFUbGzuekjG8r7kTuHUTn5ZxUmA6B4WG1",
  "key11": "F9eMmbwRMsoDCkawipAu2j3LprMFNvMNfzHBPN7T7FGmZq6EkqdrkggJJxCScUPN78JKPqNrmjM9fFfb3bsCazH",
  "key12": "5XFLH4i5SwGRoZ3r1gBNKSpAWGF8t4Cg6NBLTnJo313D6PgNAZQ2zaD3dHMeuXNJoe4UnmHPz5pqZEbvg9KW4mMQ",
  "key13": "3sirnkMafquisEg54eTfHtVy69KWeXDjqngFnSrVqVvNYA3dw16Yn7uX9NirwWfX44YpFfiPMYdB9vGdUWCRcoHR",
  "key14": "5Dyz4S5srNfaZTq1MHzSJjdZRhnuXvU7pk45sxCwo9PFnfQLCaR14Jv8JAHq5tjxWi7CuLdecZtdezZpEWFUCfju",
  "key15": "5cSq4jTeNY9UJNy3N9JWYF9z5bnJyi2AfuiiB8SNr8PagNa2upenci1LGrGsp3Gogoe7KbdFXiBdRXfms9nCTDkB",
  "key16": "aYwWsmZDQX2geFnjfRYdLNvjFY2RRuDY53UFB1ZC3yiRt4AxTt4YALB3vspez6J7NXUkviLkLCgj27JYXU7BkeG",
  "key17": "5BFy3HPMVN7nA3mtZaPajiXCmnbfGhetri6Hg9ZpDGKa7DqH4JuXHztr46oBBemZW3ShH9S7Yj6Sm1WiR1hv6bwM",
  "key18": "5x1qAepqryXPEadFojJn6apNc6AaGV6qgprGDuNPTKQarxpekZXiv4D228u7En356pM2canFNcBYdJyi5BfNhU6F",
  "key19": "3ghBUhcnP2Kd3erD8duWqxTc63aDPWH8itXZj3BBq3myc2PhFCnyp7btvshW4FhFLwzrJKqo9fhDgLqsaGe5ABbS",
  "key20": "4WkCqDzbzynhauNDsELrfXuXfHHbMP9pBUcQnG2s5e7eYhsnRaDVAPwsWGbh8NYaCaBukn3ejYuQP4ZEvfgqnnkm",
  "key21": "Tg87tuXuswbc6QLdNTJmUxYB6YaJTc16hTZHK9XFy5Z7FT8dcxwnh3aEphnccJWhj8nCaL4D8K4mLwBaHKtCNyL",
  "key22": "3QJy8soBRWvwJYeQUsmeGiVt8twUJJp95SwB1d8UYXpAu58WBGXySjVpwaf5E6HkJJ8BuURoXWYu5Cp8oDsh67FR",
  "key23": "4WfCGMdAAWCmkL41wSuMbmcUHGumufyYjEvdCc8C2heXRFhd9gLADuH6tTmMFMgf9zyiXdCmqm74hQiidoC9Wksn",
  "key24": "4uLJg317UU1a4Wwjn38wk3ZJ4UM7QUc3jRHtEnprH8o6d1FLaztRwXtM1sQ8Vx1dUDBF5QJc6ArnsP7sDiYM1cmh",
  "key25": "5fshxygjy21rmVJrSdHJ2Z69gUBDTVozgdUUGtrSzFi76C8KJ5YyPhceBhJPeRHVGMKcJ8Y8CBGtRV3QWFobAgQM",
  "key26": "3Qu7sAswc5ChSuz2e3meDSdxnu663iUvrgHTJpLsvr6DkJ4R72rcYJCC9BR2n32E89aMsYUrS5jMz3Jx89GB48tB",
  "key27": "2UZnwTFnce8ymbSxvdvww69DfKrb1b42fs4jmvjMsMhkxQ8SsQwBPZmWPKokU9UxtWMhd1hQ7Dx6ai1WDek9tEBK",
  "key28": "29f8h4NdxhFisiT19DuYX1GAu56hTfKDbSQuon8SkcogeM8UPeZUB3krvSYbnaAe1kvFy8FUT4DYzEPUyVXrRhpP",
  "key29": "3gCp9bGxKS4RR519CuwKXP4DgyE7SGrkoGf6dbVAy65PmsVkCeZDhmHmdi9BxExKeuY5ULSf85cwrZUSzAddQZ3S",
  "key30": "4EcRup9f6raxbJCoCkEMtm7jPD179MDZYYP8t29U4dNPoM9ZKE4yQi75m6CawENA9KHaWvaZUbLkiqSf7Liff78G",
  "key31": "rqaHFJdX98zbfsnSDBuSuKVYWe8U76E5ZEuLKCSzXf9E2xpWGvjdSGd39XRaqJ3fhCpCQmx7jrBYd13cbPsLQXZ",
  "key32": "2ep86xaY8EtQ1fQR3AyVUUHLGEcLA9m4WNnfVx4xJfiurTVP4BjCjf9TpYZAKpedNaZWbXjk17kgXeojZyRkKjNw",
  "key33": "2VDmqGZHxzg3ivzFYsE7LPNJ8aVezXaosQhVDFxrxUkiViVeCfSGE5Zw7QLcoXR3BVn5gFnge9VfPATHhDfK68Fd",
  "key34": "2vKcddQmr7z9jWW7z9xspGp8piw317H1E3bHKHCYgVmpvGtz565Z7ZDnph4WSXNYvFWhRPkPT4wTvw1wgUqfEpzr",
  "key35": "4m8UJcevMtk31niBSGshtkSJGYWEWcY1rPazLA2ZibGaEn7stYcXEyByRuV1xtm3z1P62eVdKciMgPdrdQzFWHiy",
  "key36": "3c3X53s4PT7G6GCu8YUNGjhVjSr8agpLsdnsFGCMtd5zTp7a5YyDvH97fou4zPJiogbxbPphJP7ymVs2HBisQGoc",
  "key37": "2mys3jCYcH4GwzXgqPL37UaGHWJTWVREJpM5QwHAGGyJ6Thc9rLzWNGDDGjti8xKbnraE6Gmw4HMejYT6zEyGb3F",
  "key38": "2VRgMhtkWTXgPmqD4hvJdZn9WzKtuXL2iDikPeBDSGFph63UxNzRoFhh5xN2m7qSvXtbEg8ZbV1aM2B4a3AMi2Vv"
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
