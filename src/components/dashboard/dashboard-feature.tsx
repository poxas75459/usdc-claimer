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
    "f9Pm2NFsAjakb2Kq1p3Bjg9cnuaT4G5x9c4SGsBLxyT7T9Y8bUc95NJZD3ADrDrKbPPvrVxt3cUKWezyQHNLmwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NDVX7ndKhXCn852JTVvKBwL1XYFgt94KE362HXjo8G5K5w83m9CqYDHEVtXBvykdnZcoQGA628Rxm4KJ6CduTp",
  "key1": "2gQ8YMznm6cBXgNHA41gthhUuPrsXuDVhXC3QN4mMcFtn9LdsRhSrNvYns51VAHgv8HJS2CXhkjPPy7U8X3txAts",
  "key2": "64sWxSgx4tKxaJsG8RHEGPANkoAVfFjumWZni11H6w5pohhvCNS2183NH2Q9U6f8p77oSzR1figpuiJeQ3fqdyh6",
  "key3": "2hBYtovKibAAMWSP4USLGWEqLtPgWN3g7vJvC2jZnsdVWC7Dr5unnMMN8Muve62Mcr9NQe8PupjBJ8wD8zpL8k2H",
  "key4": "4Sxkwtf8BuS3ogugSYNc9Gd7ienET2YhCJv7xJk6317RKWWNR7HakT54VY7u3mfkH1esurCGAX2TxkTWbReuJtDT",
  "key5": "5Zv6wY5pEb7sE3A3wVVJk8w6pXkaKbhHg36EhihrbK9DQeqpN6eU6fnFMiXUHXtgsgPbcDHFi2ykkH299BFqB5g2",
  "key6": "5L5EN794ynD8dBzP3pP4mgh7QGhTnsFcTfPRrbDQUCtUu4Up4ibozhFaXxVAcwiZsomjar5t8BUjCwTG1LfBJG95",
  "key7": "38oHrf84uHUhj2FzCEPbtty7CahWNqVzucEdEmSwDrUrcn6ZJQpv8yJX5Mqj4FceJENdKzP4yG5twooTVVLKJCBm",
  "key8": "32Scz8hvLtQkNPFq2nhFEjtjQ29MzLqRx8Ztav5qSPy347ADuhEFu8sxYh3pqc5nCmF5ezNiJ2TMmQozUoLwAFoJ",
  "key9": "2Vg4LLWiHZqv7VraP8eSuBHjSynrTYDe1bsXZ7VmYcNq2wz2tTwJnpcqEBUG9jwphHHutFsKkCLxjuQc9VaKUiZ8",
  "key10": "5CyCs7K9CctPSfPJaFWtqFWTfZg2EciybtXrGcXRGmfncLpYkokBpcGU4aQnF8a3zZcPqV5tCaHD2dvqWGSPeUFc",
  "key11": "3hV1frrAdggGnEAGLdDQtuzpCYjBGj5p185GkiFXJGmY3owNySAkCSYpdDEHqaivqLHQ556EsDXy9DFsxv3GHZ5c",
  "key12": "3j4PvH3866Rs2ughSQHir3WZEiPbQ8QA9K8wSDaMhfDPwwB8ZpGwrCHCAaS4ktachsa7XGFBh3dW9sXvxRnVnV7j",
  "key13": "61d5NzaazMTSUrjEut6oD7b4X481QYLU9vSRE6LqD7W2ULvoyCeDQGFe2iFm4ayGirz28AfdGziee8qEbgs91UsU",
  "key14": "2hJafQn37APZpwpXgcjT5rhW1T2Yz622nCdoYkq3TmFhNCn8fBmm6wQjYWTvCcKBubjhNnqBBNHAsF5yupGq8R7p",
  "key15": "4o4pXiGvFv63e5RzknhuWFSMS5b1ekhehqk6JnQt1oysV3GHviHuLV2VSofUzKftC19sq1zbYVGF52QhEtrMvTLf",
  "key16": "ZFpWJDCiuzrTdFW65LCiNsdmXL4geEcfXcLqRinEu3Vft419AVMciKUUsL2hSC2H9LFP2WTp5ZhgTA1VovcJdVa",
  "key17": "bYeXZK8AXzChGz6Hjvz4yHBnFp992KGeQrArtaeqfSETyG1syiPVYDAT3z2merSmxbcaoF46iVkt46QmY8GRQEd",
  "key18": "4KJdSr6gcD3UHDqQmGcCTy9JyVeiFRFzqqr7sEkGUnD3F9FGKb4HkUUjvwySrYCdcV7nFQqqPLMRYRaGrTERCTWR",
  "key19": "5pbxDUyDRc1GFBSFVTf9ZdTYaJMBnhAfPrvFqYx2r3Tz3z4LCk1kBqkb8jSJhYHMeRvwEtRbdugAgqprF6G4gRm3",
  "key20": "361fTUNbjWG8cG1wi1TbLK9wzCGSRjfgNvFMusHsUwwmRHHbgpsutdibLsRP7N3HjkUunS8QaD5roZcquk8UqGyq",
  "key21": "2FpXKWxj3kTxCkTM3qWvVawLGqpncsULmJEmjaUQqWRpfBZvdypLZJAVxoEQH2StGETPctC42tFRuD1KBpjjMwHT",
  "key22": "2aaJmz3qFc4gsujog4w5XcAUWCVcZTUy6XvTgBo4MT8QACu8wuf23fBNCmEine6ZUzRuEJA4aSoAjb3RaEkjdEeA",
  "key23": "4bcHAnDy2mej4PKZC1rKKsvXnqPEqVvAdj8gCRvWPF33ATpnYP7bj8HgCMc8YAedBcWZuVCtJMKibxEnVZc8L5hb",
  "key24": "4PDV1ML2t55EHp3k3PqVV28VMjfGkRBWEcAtk3jvCWUuwAJV3YYw8xtWb8TKshWGNtz9DKBp1KUqAN8go9BaNxnA",
  "key25": "22qDGtVHT9UqwVCm8jkaZSW2Fd6n3qyHScGgjCY9UYxb95mfeCdGVnuVmEuVpfkqydZ3mWrktesvgV1SYNpmfgJf",
  "key26": "4L2KZsFXg1QkmwGwi4equc3WqDx1b9R5haY7bmmwFQEWTa7z7KQer5MafaMBFzdcAyNtbWS7JTeWjA73uKagd87o",
  "key27": "3FBsg6qSyAVvTtfPG8bU8kFktSnnH5GwDDX8sDSXgDVqbHkQuvqMWqRtXfNDPY4nZQGt6FiRYaMcEbdvrvrmWxCE",
  "key28": "5ihQkj3BRRhxKLey6m7pXARsCbWboDDYNXjynpKUcT3dpS3uP9wKzVG8SEQiqGPyemfbgAbtprQ2n5Gzpcca5yCf",
  "key29": "4udbT5NcdLjnf1E6ny92nZ2a2j3g4tDskcM1wQkDmDsT2emaHN8ToXQSBjYsoB6HZVXdC5hUm3RTJs9juypnqeCf",
  "key30": "5SP11R1NPMdhGFpefUGLUyHNWSHC2rCQsmRMte72ZDAwC4b7VcivJsS7aPAcbgvzv73KXhsxRgW7giCR9EdU2VmB",
  "key31": "53T6HspQ96ofQfADwLDCT6ZUDQHAmfbcyEHesCpZAZ9GtonQ56b5DwPxJvKWcEj4m8AdkYmfsz2NdsghAZM3rF5C",
  "key32": "4GSYsbLLCBN3zBrxkhAUHEWB7SKSSujvWuJtrz1PfABM8FB1pgLRy2VhPW38ibirYvpxrkHJogDvPMaUCo5XEfC9",
  "key33": "4Fuwaupv21yAPCTzDEcamXoakd5eS9Etfe5oJBAqHmgoxQyYRRukq2qzCB6eYG5Z7ndbhMGbBcz78iGRqDViNwg4",
  "key34": "3HR25395XeYCCsKLRPYSiUQfoTvqJLFtizZTgByMX7THb8Y25CCX6fm6t6TabmyyMtMVEZA7CRbMSt9wbySMWgfZ",
  "key35": "4uf3oPM9MkQq6KEcHi8Epvu7xrKs3oGFxEenw69S3zgxmLD73HhqUB2HfY8yQnXkZooYSeMXu5efE8GQyR6S4iNi",
  "key36": "2KMDsjq2puxVmSrRT3KnsER5AJrSxUpA9VpMoNUfprJhaMfJVDBSgcQJCEHTbM4piZFeJicRM8bVQyPaEaxFxf4W",
  "key37": "x3abYWqpPAgJUtvwjsGUrekaKXkW8qYQTGtdkwcqYcWN1pbmf1YQwos9DUyEarwaop86Zg6xRBPKLVpu2BDYRRE",
  "key38": "42ZqJqFQNwRhAUT1Z58PQh1a98Vt7hgZUrATPTzNVM9i32FwaSAST6UEswiU2SetEzaSp3ZezMMqiXf21o2tmj2h",
  "key39": "LNHA6cEePURDFwuoKjvuVR3NTEkGGZN3twP3aL2N14AWTssGi9EZqKL4mTKjwL3fa89kQ6ry3q5egPogob2VQbP",
  "key40": "5grHDUbEdznLxBhdF8QVBtZJpSYRtUutp4jhqyDg7pM3VuhteLURm9HohUKk2q6zzH2STxnss8heTkAeQsAU2cr5",
  "key41": "51FAAYqmDeguoDVCwSCgioZUPTdzYMvvJyMwBf2bDQDQbL3r71SsuY55dbdWn42YhA6H7u6k2NRrzNcDD17mjkhV",
  "key42": "31ShKX6Mtvs7odtjD2sQsNbifrFzUxT8z16bt5CT7D9LZ8GkiaYaY29g168qZkj5TNgmvCko7BYmusW2WJFtmhTJ",
  "key43": "LsMp25pjgxE5EZL7gxtd5YPGSoGsyZzEXMqHEcq3d45qZ3YeVKDEJeuDudaHbGmLzEHAeVwy66xr7v47j3ABnU2",
  "key44": "3saToGTYqgDc7mGbxvnscFzYUHRk7B9kTaSoTALbNHMv7sWytN5ihNCctQ4caRrcDQfAuziNfZcU7F6JZszZWJK7",
  "key45": "MLi9JXHAbKzzTrcccrj23fakTeFfn3pMxiuzW3TmDKRXMmUt9wV4y9uMgqF2A49DTitp6RnBicsBT4UuyNKAjLZ"
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
