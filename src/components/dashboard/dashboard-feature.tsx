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
    "5Tr9nXiGD9zv76oAmNCiDxAYzz2rrvKvkg4gyFZSjJErQyKrYCfhdbNmtqNp2siVwcjRCZBqSVAA83mJiiRiT5Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPfw6GR5iMtBZWHLUy88yWzZHQJwF6Thv9mAdQKN39yTYKDxLu2WiGa4MZJkAJap32inKyVYFAzjUyhT3Ad8F7",
  "key1": "67cDnTNaJLxytdhYfQhjikoKmEBfwdyvfiWxiq8CpxXHM224gF8rWw9HF1TMdvktyMQzhy83X4J5CUhQgruMe7vE",
  "key2": "4LKzAcu3pPs5AJxL6fYGfKBMsq6pue4mNs34bMoVJsDt3wNgdijWryUKHrf1V6yYdkmRZNbEEVXMijfchD6jPAoo",
  "key3": "3H5ABfYFqzfGqa8EyvL8SCPmJFVeSd7LZF2599CT9E3Z8wg7QyG51cweZBTmSP5whMAMLAB9kVvtNaFJLWPqHbf3",
  "key4": "4RagMk5h6juvCX1EtTaChLnqy8G4S8nCvPPVmYeTeZWotzuanKkCuJfoC4DGrrN1ATehFwUDRXU9HMEqfpV9dfvW",
  "key5": "34b4R6Upo4MjCuniGww44ZA7AVAoQUmeRscjWYZeUZURirMCwudMq2kjej3fTLES3dJ2n1eNtF7AZN2wboisbcZL",
  "key6": "3LEtvrFvab1vBvnB3NtGz9fsfA3mfgC72N5EDLcczDTf8zxVWomujvqMZvoc81U3FKVrn45Jpq588royrCpCvMV8",
  "key7": "4L6yyMwL2aoNjy917WoMmQRQMDBCPN4EfsWgckBiypenx8VvAUuUWqaS1B31HJSKyiki4hKdJ2ox97qThmnqKNnt",
  "key8": "4nKktwJWhuwjPwxm8yV3jmUbJpgriXdFmuUcpjLHkUiDYL1d4p7qqsygnzB9TfUtLTonE64tpeXqvGPqfRMg3zXR",
  "key9": "qQCojGr7JPjDczQno7TAW5AXQBkQCbrWMKWGtwxVmY7HoxTkUyCv8suk6DDN6G8BCKN4DdQXLRJ2JMfqNVK4fc7",
  "key10": "2jquZaXcGMdPCKgC2yD2fpKEskucvvFBt6pLabkwEkrmfpKj1LPPaXnZqtWMAAVtbGyiWKfSVV2YVRhU5gxYQYzZ",
  "key11": "4kwpZe7wb7k1sAuk3YzMefj6Zgf9r9mN19XwxqBES2NgKZLCqn3TKQbZ62bMi6ZMjSB7KSZzRgxiuCYYtxq123YR",
  "key12": "58ZpHuYUbqcQssB2rULqvcMAztKQxEZkMhjnndYrWAHqXQ7mSFPNjndbnWaRmwAq4iPf4DJowR85fVPZhfvsNt2n",
  "key13": "5Lj9eJ9PTWAaRu8gDZhrscoKPwbuZqGq1FQfAePLbdLjM3TTvBFWywCGq3cmLBA4qx2UQM2wMAYbnduGgzf4V9LX",
  "key14": "4HPsrQcsGseQKjDRKiArXh7fvg7kFcgHJH8niiczzymA7zcp3Ek3D6kPzu21JA5NF6aaA5mFa2Mji6p6rcU7563m",
  "key15": "5e26c3BUZ1K7C4rc8wcvsbriuyJDTzcHBHhfHk2ATMpHtNwbZwM3RtWKXiQYeT7SF8ahxyGuZv7soJbeQANA3Pzg",
  "key16": "5hC2ddDA9K27ZgmJqjaoeUKtCo6Z63vk6h91ktm6u4VTx7nv3ZBX2HkFYxzJLUFzY6oV4dF1Tfsjc721A2USseK6",
  "key17": "exWqkFdbHK9aq5xioJWrSeabyBqXTVDuFAWyitMteVRweD3pxJU3QYKAQiPGWtQLy38hoscaC6MmkAQFPfWtabC",
  "key18": "4mZmfcHimtav5sJJnf3Gj29AfbGihW5717Q4TgDNcfG6cxxmwgomJvLTmSKodk2MNsTuemsFbfvZWFAtsM5cK9d3",
  "key19": "5ozVLm21JAxYsJjJaELbtbdg5ktTa2RhjByFTXbbk135LWtFqbX6eGjmyvPv3MWMtUe3fduKCz4bi3nYVRyxW7CU",
  "key20": "2yhFSKKrGawDdLFjFav4QVePVamJxbZk9HPZRAXM4mW8B8BoUvssCt81tY5cTb3SD9Kmp1ovgAiU4ApLRqAYZL2c",
  "key21": "3fDTiwuapUWj739LfhGHHiFmipCBt8C9cJx2zaRdNJd9nkJnsXGMV6YcpFeXAj9z12Vw4YwrxTqAcPY18FV4Aib1",
  "key22": "4P5itCTXtp5rL2sTxHqNbXQtvcxNqMrsoWYGFpCJw3R4UePR6tvdo9zz7fZsrd8XFx8qSgVd24UmEZ5dC9hNS1WD",
  "key23": "2ZZ85FFvfsXKyrW3iBWJs74U5Qe8SjEUZcwMSFsTNz4vQfxHfPrJj4vxdfyNFGdYztB4RQi4Rd8MTARrRdpBTkF2",
  "key24": "3PjivFoosevrjMA66mGsmVdZUxh1XGYZNcDoFxwbke9vqjVCGYP1Ab1zgmRab5BkRQHAVAGg34hZEC5jDYULnsph",
  "key25": "sPhc9xdcYx4GH3RTVK36EY4oU3P3v9ot76HuQ9eKRy9SDnRckDMamP4KXpExDJ8ZyrKamAEepG1Z98U2cpWE3VW",
  "key26": "2feLsBvDScKVd8tKiVNSmqpKwi9fX9Bca3zEcBuCcxFBaRRetyoTMQE8q5oMbJMdt9k7xuXWy1prmkpbBKNKLTJP",
  "key27": "4rKzkhZaciVKEvaeHsYHrobUs9d53n3mwZiVBGc4Ct9asepFiPH4mB6VbqdUUbc6SNVtvM7KHEcCruX1oxW9bwhU",
  "key28": "5PFKybnc9BkRoFzyecphqxERYjw4exN3yQXafU4p3ci9od8HqbTfDQUDoC3aeANX55GzDV4aMuJnwiFwX8z74qYr",
  "key29": "65KEstq6HsYbZobTHsE5zQGxkEn9jVHKLZ9nrepXhftpLUjfz4PaigDmrynMdUY5kWNkpBHKKquzRha45xYHof7i",
  "key30": "5wJSQdgeaNdJNeL1E29L6uMdcXRVgx74swb1ZtUbbeaVTEJjoUF3vbn5XJTbT3gYudX3Bsv9xqyahZdZJXUkxEn6",
  "key31": "4Z6kixRzETeDhcf7cB9msQHNXWomfPr7MZ9vD2SQofyzDxBSU6wJJhaVyUjyNZmtyTnWEee2WjBzoQrsujSHacd2",
  "key32": "s7Jm4kYMj9de5yck6nYHKFZjqzJNU7JMVYa9HeA7MdbSRfF7issV1JH195gdrgTvfx9tZ1awn1xUkm5yioGi9DP",
  "key33": "3QcnGEK9UrWnN3LvBPcX8FCWifZZRbA8NNa7dZaGmddEt8hfzFUEPBdUtmAJTTiYr4ivQwmSa5x9U2hifwvgcVui",
  "key34": "2ZKhN4LYVPSdGFhusaVAc6TgeuC5HKGkTmejzfyPM66vKcmXQAUprtXmPrNS8UnqJxv93UjpkHoXhGMbEwrGRE7p",
  "key35": "3K1WbMtfH1vUECBoAMiZz2sYRqA3DLuxn8DGasyqmUPiLLzBV4oh4noQEJj57JWcEvH4Ti3q5HMVh4x1uuoXZAgp",
  "key36": "5ujzyEjJPjaPjCHKAFhQsqcrvwHNXrn2QGaZBEobccLx9ATnRnR7UkMJD5RtMrJ1aUNeztw599C1KzefpLpUZZ1e"
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
