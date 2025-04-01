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
    "2PJov9YXtveoMC2VC1LW3Qnc8J9Z6E9XTdUmDuBqYTN9sJwMb1iB1kFb8UYsp4Xn9hG8V4jWf9mm3m2mdbJDMs3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gy3sdQnroZAzWQVuj2k8BvBn35zsgcsFJY94rMcJ2n3f5aVq22Vh5ge1DucMRdKiTQWWNMVyre7qsqNomiHmPuQ",
  "key1": "4QKQftzoEhTYXYz2MG685XQ5wp2zgCofWm9oEe9QSNesdHibE3a3VGTiHpbbPTocqaEB2uRNehGvtiS6eQw2ivAY",
  "key2": "pB9VVZdbqZYohdFdcAELqpaC24LRJHzgSeks47Y4jaoLVQj4YMxCfVioSLN3m4QoaJ4xdcZVpL9VMMGGgc31ETa",
  "key3": "2xRpUG4hCcndcJdXJUQQ8atYv2Et1RTzBCb72ZxMcm5wWgPqRTxHeNAUKszMrNLRMZBPMUV7vkyTApxcw3xYKqUa",
  "key4": "3TxwQ5493kELF6QsHpidjyeoBTGYLXw43pJBSXUMo6F9DkjTfWUrNofrwLB6mmiGpPbbYd4BnyokC8tDhP5s9GXE",
  "key5": "2L4umm4qvzSeoNi7VTm2SYmyTtpFTjLxHDqzQXVfmo6nPx118MxdMMkWhuBxmjut11H9X4cwYFeFTeaAKCHAWjxz",
  "key6": "2vceKa4q2qTwriU419c51mRkgNxvuvcPSjpMMtfGqiJtcWUYDYEyLdgAiRowBsoCcwRR9W3eqN7XRXbiddVxG5Em",
  "key7": "5sKCdifrXstdior8xVFD8eP1Xrfu74PdrotTDkXf4zHDDAoFjSWaULPYspjdiRSQfTiTMYrhpqsgzvVRcmT5yHgj",
  "key8": "2gM9x2SCAyyoWniKvLuf9Dfz8Xa8hyzEqWjiJKaQ46qnYUjeaSf7KaH1YhAair5UsFAhXoxJz6yLLoKwNvYDW16J",
  "key9": "Em7KeWUkaBLLtTCw9iT8cruXPnS7wQx7TpV55zmp3dhXm8KmbrpPz51AzJfi96n5xnBDXfJH7BHS4g5Gv59josP",
  "key10": "5Fo1Xa1LSrum6EEjExgiYpWQyKccgSvuNgrG4ESKRim1pnR5X5izcXDm1MkKiFsUqp5vA1dxooShsEiKVgToVuaR",
  "key11": "2qJ2BgXuAeggRDxfMfiDrtHTNctJ3ybsEK7FwLp6UV6jRyAYTGFzbHy2uULUAeTrjdVych8yniBD4H7qw6iRgCfn",
  "key12": "rg1h9HwgUtfzH8AP5BcJBPCgmy4tobGQ8TPCWoCucfKEWxorqKaqufEFoMA3goHcfyLZSpAsBQXkuBfB5U1Kato",
  "key13": "5QQD4T2CrQunLnrmsPtRqdGbdevfBB9naA47A93N5Dj6PmmPKJJiT5gKKjky6KQtxQBqNEF5XiyDnma8VxwWu2ar",
  "key14": "5TWFxGQrbE6nsoAnhTrkerrxEwkx6d9jaErz18HWNVsZ9asuRAJBfujFu1cZM2ZXiPUHfyE85tQrr4a6ojk41vr1",
  "key15": "2ZyXzSGT2BBJgjhz6APz4yBnwAwy92uCWZy28NACuh4xQo8KL54HS7GPgZeLFxGTjVqm6Exk5WNBZqy7EPrk4mSe",
  "key16": "5thGZ7T7ZTVVGG7yEhWG84cSZKP9qyDKmysgszs5EpkKeLp3TnZ7NuArtykDwdS4oLrkB6u5ccjWPF9Wie2xwmnJ",
  "key17": "5B8kdnGdjagfhQk4YGsfrZyDBgX9QD9c36TW69C6ejejj42dMD38Zr2bqs7qPRJEtFRi6Rpfd1uBvpJwS9zhqYLr",
  "key18": "2nCRVAf9Rn2XL5c7tFNa7HEYUHK8noczp7i7bB9iR6vJysYtKQ2YpLBRVpmKzVkkBTuTiw8rVY9bZ1hCxniNnLdL",
  "key19": "PNYgRUhz2DTf8YS8UteZwd8nxtCLgMF9YdNms5DHNDyjiDFsSP4mZ3MuYMUya5Y6HjqE2EyD67x7NTDjz97rphJ",
  "key20": "66xt748qd5YLKVYbPyx7pr3Ah19614VSduSsCmBeYPMSzkP6CP6dLubiVZmJVuqtqbfZN1epxuQKWPs7Q5F1uDrP",
  "key21": "mcL6SGC6D4cAiV9JhmderF5CmDxrPN1ALPxwjHYjbnEJW3RHNpywZzyJFohw2XdV7w2xexBzV86tpuZTdkF58ZC",
  "key22": "37P6AXiBbFCdZnbfq6R941m2nxf8EJJvCYZDVdNrwAJpweDyafhQzPR74XicoURuk7RRY1Trm2Q4APr7Fh47dejg",
  "key23": "5jARLSSuYPErw8tPqyDun35DhzoAxxdxmsp6AThLgL3qjUiTv4buTMSw7bxtTHu6WFGoPKrLKHrS4j4eMmuWqQDV",
  "key24": "esRTi6wZGPddoDm8Qjwj6BARTy7Zbh3qnQKx4hCPqVzXyghSz4uUua3PXnZrxogtsdAnf9brP8GUi9FhF9ki3a8",
  "key25": "5xRorDcTWske1PHN9PXr99zLswzsKDECC7hf1kEnQkjoqC4NXHsMoj46R2EbWoQAJi2YiJbKWZa1BvaiXTKSM4JL",
  "key26": "2Bs3RFCFfxaFVf4e5gTZYWWmz6pwPRxHvZvQG3dMou2CnAAYvMMXuiHvqEGzqXNAuovB4fycfatATK7rWB94WiNH",
  "key27": "3Uyn9AETqqhMVahNx7GjNrBvAHTH6M6r9pxw95hSP32jAgmNCEtZfC3cQycNV9bMivMKUXjJhEd6og93KfFxAhD1",
  "key28": "2A43zV7jDtSVNo9NesAsC11713cfaj7wguwZG4XHguVmJaN6yP5ejE1em47ANQEZRsXQdVkw3At8YGpDhshVtg1t",
  "key29": "3DTcEQNUGUPotpp7tLfwZoYMkxshdxhXHbYWMj8m8bCcDsdt3ChGFR636SGA3dAo535za35AvH1qhzKUnX3KKaVZ",
  "key30": "3sLkwL6cHpidaY6BnRjwReM3QVxAycMDKPbXjMmejTi6mfSG2MajF8SBTGWASSGWBkNZTXSAVWYXeGxPMAnR6Pk7"
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
