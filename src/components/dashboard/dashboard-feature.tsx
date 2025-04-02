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
    "ooQ7CRqnXDqyvBgmCW9zTzeeyaH7AS56p3fkZS49e9B4Qz43WdgtKsEP8iX7KZzXzajv474yroNnaacPa78bpgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4METWRnf4UxC74yzY5TA1f7Ym5uoe6c16htkWptt5rAvuCmopUG8FiLohSMkWZiJfSjbyCdDtRaSSmgBjBJ1Pv5y",
  "key1": "3ABw8sKJaHuP7x8vgtZB2dF4Fk13JbEGMAeA97d592rtzvqtXdAdjQTGYEBLF1MrPH4sHLt7WjR2E8evwYF9FHuZ",
  "key2": "3ujrESwUc59NkZiBZiCkHVdYGyLz84YwYZqeRHfi7MaPMLjANRoKSWedWyGFLTCw9bVx6wmJGwAtyRQcjAhkfkfE",
  "key3": "42H97NujuWB92nZqE87kndeXVMCnfWRGRt4ugh3fTzbyfuEKn4vmtnVqjBxAVfFddDAhWSsefeZMmjNV4bcVQvM4",
  "key4": "4av9ovwqiMPVud1YeGtkuT9M4EwQtoVP6WmMn91Y7jr9Bqez6EDaZNjLgV2rHcfF322NRPkWDaGwGRYSuDgEELdZ",
  "key5": "5YGrHtEAqfFyv9JKUY45zZcacZBukn126VqEc74Lu4i6SVB5yoi9YUGR3au7s4QiHHUUFTGQtnYdEN6prg4pMEbK",
  "key6": "5UgyV5f11d3cmEGxWYxx11kPrNDNqe7JG4u2NcqjDFKpAZsvAK6KqgVcgGvv9ruAWRcpvY517XSzU85ytHyybdYm",
  "key7": "2ZfB8QLf5e8A1nLTf92ncL1Lko2dzkN8yJWphaGcZe6FXH4ohKQ1Eh7x81S9SZQCmPePXJWxjCThD6usXwik8jHw",
  "key8": "L7wQjkanZeJsnYEMfbLHizTkgmLtASe9WyGm7eP47vewh31xKxRmjUoaTxaKSRPvnHLAZgD6D5ZoQs6WphGoKQP",
  "key9": "3WPN2h3sHDVLt2tEbkHsMzdTjLDHc8SLq6K73B1D9UwWGgZCLaRSRQ2VXz643iozQpvFkCEAHrLk68oB4KGEBRte",
  "key10": "3WnVs6cMdaDVpSQJGbwkPWReKCsPZbb1yhhNtX8CYwkNbZWjgo8tidF7nKUr79RHPpepoRD4dZfVSDnLVbzXShu",
  "key11": "2FM2K8fa5D5NSPaDryZ2xGm4445NRmTLC6SKD1CHxLTJYr6b4YGfpCgK22wXWURrDzAWy8Jmqos9kvtPmFsxGL2x",
  "key12": "2Bo26gebQw3nbH32BsXSzJxCr8DQm3FtndY29HNddPoeLxpegji6ZYsTKAEXUfs6TASprcPhJgo6Unax7PAZxwYZ",
  "key13": "4uFRimtMTNr6XHwGrQZ65e9FfWqxcUTuF6CejQZBL9qXei9dfrYUTEhMvXgtBzHpNnqDihR28RzAxtfdSwWTY1Rv",
  "key14": "2XiNtr3hRYZKdMMhDTp7kTDEmn5NBBBrqUQrjsWLeRnW22sCA3NAEcqWS3TQSEiuVUYrrfJneJr4KGqSRMMp1HHu",
  "key15": "3Y8Hq4uebX9PB5NsxfUw9xBgsaqCNcRAa7qDYwaA5qdhkJMNYQcidZKK6cbXLKadGafhXyPqCv4kGwyE5Ypynn6C",
  "key16": "3epdNzma7SAZRQv5n3JtpnbHdpYR9qV5MDhciJrXDLB4J4mkCJ4Gyq4Qd7Kk44AEmWLbvThRNoSMdDr8eNQ54wwH",
  "key17": "4uBKWt6PBUNVVPDdZrQjHJzDmEQjVPUcBQipEkDBkffdCNHYaapE1AunfUmn1wZZ94MoqiDvUBc1tHdfLKuCohWR",
  "key18": "3xgg3DHFZE153UCfHiHoknuWWUrfcrfcj6oZiBf3rD82cV6Zu6neqLYgwzGwmkDUhKwMcpDCEi947yWXiL5oJDTZ",
  "key19": "3UVSuVRQk4Pb387Eo1bPCcG3cSDbti58QXZhjEHVqgWjbv7vSDWXQFLm4vsGCmxju9AtoAdhEgprb2qgD5kXMtRD",
  "key20": "2DufmpFCTt2xT8ir9Ng9YkjCKq7ESZZkG2ELvj93VFcUX2gfQHRSSGeSGgZf5Wbjz6ouMhBiGGuYuSSLzji2giF7",
  "key21": "h76Yca9SVnmG3jpAeFz1tjPgHYTXKtMcbb2AtvRZx6mh1Ewm9R8EscfWQ7RfSh6sPyeUT6UF2WE7mzXh7KJZGQV",
  "key22": "51DfNivNNoJbq3aUyoMYSvNGrrhhRJzvZWF8dJoiGfg9dVAJL34XkRT8kTEzh2wjRuyGBjiFJJmtfJnCddhDmyuc",
  "key23": "5rYbfZZBiSVUq8LAvBQPwLTCSjANEobFSK5sKRc7ydVrctJjuYGAoAc6tLhZ7GVXCqnLMrYZamUKD2EAGJqeT22T",
  "key24": "1257xman1qJVMEYQABiYAFSknsGSQFNCRhmKaETu7SPTP6p8dbSMAKzGEvjRATk3MdthoC5bEhxvWz8aougEPGXs",
  "key25": "2FVMmLnpnhK7QkBe1aQKivhdUeBh7WkLpe67ZYGSXmQYUaq1Uj9Mot9nmaZVtp64oDC6T1SxjgHvdsaCHPee5Go3",
  "key26": "5XKXTzfbxGMmzUsjtekA1B6KxtTKZm2ry8EPkZAiEnJAX39G5nzPzKTgAoc5ZbMbz8JuS1T6c39Y5RjL8M2o6KJH",
  "key27": "iFp6eSZ6FSCntAix7WiVGtbvfBPFzgmz5dtqYCiFp7jM5ag38eVvXdhu1pKRDX4mg9jS1MbbJV2ndKEtwFKukHA",
  "key28": "rAYEmDWJMZBHmeaSpW3UyxESLFDHC4JaSF2tHyuF4FM1A5DZr75aHzRomXKxuN5pNPcP7f2L1R685hD3BRr5Fks",
  "key29": "AS55jUSVNeVKjBw5XU6frGLT2HgHxwW5paurdvxFLAPmMpjfvq722pimXM6WY7uQHZuosQdWP95RamUKpaSepUb",
  "key30": "oYGYBKH5cqrmYU69GcWYrEArobVypSE23PyaJog38GzcRRoYeaAFNFP2b7g8rWc8rvFGSYRjKq23uR1pWPz9WXc",
  "key31": "55yNkeoDnJRwDgcbm1JxpEEtxGq6bMub9HW2iBFDKNgEHQYHUELbQgLySqAPQ1GY7humXm5D32ZBxT5VCyaq9GJX",
  "key32": "Zccj9Evv4sZL76puYx6U8hM4VkkjkumyjCUcJbvcvbwBQn6FpS4gCsALQn7JwJPxD6sdtWycSsEMMAX4TNXBLr6",
  "key33": "5JugFM7TcALpiAnPrvvTuSUAgJqK8dTrrfzTdbVjfX2chfBSwnjBDHe1yAt113sFLPw5ndgZM5ASMUbcQXeo3tRH",
  "key34": "36j2VEHvY3NJci617auRMTYgjeHUqrgxxmvoBnuqDbRUR8u8kFvAPoV31UDK6ndofqbKoNo6pWmcqV8QfNUPSRyT",
  "key35": "2aPkgoCwmt1QeoM5S7AY9tN2udTUJfeo9BDzXzaFLvohuJ7tkkq4o1bE2e4vpPjETQYxwaHBZq5E2Y1HYk5H9w5H",
  "key36": "3rncJ4sYu81Y5gM1vPzdq6dYe394XPz3L7tuNULTXXcjHARPbNqRMEGYXPA4xqBKRRnPJzX8uHBuFoA96KmpGyjc",
  "key37": "WBETNhi3LyGht9QTjRUdJmkNc7HP2CoSkVL1Ucqtm5cgGrgUtDfcbdAJQh5b5UsaFFS7x1upiH3s1WRNuikcJyX",
  "key38": "49ytyHUTDMwLeW2SL1bKRjWfsCtjZavXiGPsMM1gajYSDHPUeykMLWEPrRdT9CLiMHRf1md51tz5dKUmUcp1QGWo",
  "key39": "4qVqiHseGxLSZrUzuf4CAje4VRKyKCWY1PiCo5ZK6xCwE3NETNhJaJSrmtW5VbFWNNev11Yk3JpkeVYKn4umyeb4",
  "key40": "4dTUpWY7nT8EspvxFMECbVS1pB6m9ZLLzE5TisMFvmjdMRXDcpA67x7CHLYnhi5pLH67zeU2X7JjmDsCJpZhNYyh",
  "key41": "5hwzcd9XkPyPkBMDnfhFB3HTKYfRdyQgx4PcPQkCZxqqUiY6BRKME18abk6c4BgFQFtqdNgdk5hzfE9fM5KXMpoV",
  "key42": "5XRDQQJdzyicVXgAtc4pSSUeHQfnnNk437jpD6GQzVnLv4TpiXTivdUe3mGJLC8x26m57URR2uNQZg4Qbs7rMoNx"
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
