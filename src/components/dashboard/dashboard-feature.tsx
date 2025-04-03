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
    "2PSrReHa9oyW1R5ZhDmCNduJL6nd9jvQkw978hG1SWkU6qjS5RRYxU2vbEgCzmnm576vUg1kgv1ELu9CRLNt8zoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4JFsgHgCsqcCMbkoz1rqLkRmHJrtDQ42hfTbQ8gEFqGuESX9ygARZYdP2oTHSrPEnfKpxM6jqWaMNNg8dK7du9",
  "key1": "4S7R83759ycJs3JebqJbCNNfkeDPm7RabDMWJLoGgAZCRzEoigAYstBNEBj5Y6urjmiBLs7oq683317z1mucbBJW",
  "key2": "2oFTX4CA8M2g1eMa6uTm3h8cxhTL1XKe9o6Did78HCj4xjQG1tHA2ULrbDtkstfK3hxwu4a2zptBLVUpHpFgCzfS",
  "key3": "5KEqso4p5hACFyy3VmSCxBGRRpmFofo9bpxEm1zGLjZGTDj8ebryQq7mP5WDa5pFPzsYG4nxfSQpDdc2B86x9sir",
  "key4": "2xuVBtgNdsD2tcjCbmYqHfrgTzSStHrXi59MZN5vu4y6x6zYxM585mTwaEXgkb12PezXp3aiH5pAB1siwAEJVbN3",
  "key5": "4SyDLKAs1m5S6uq85QF9SKx4QTZhJ21HZCD7hpr3SPsA5jkFDAzp9uGfi9CNHdpLxNhr2NAfALoS7GVKyK9jzLRL",
  "key6": "2bauGN4U7iU1CYL4JWqzj2WqNFMPCuQEK6vGBcwZvVHxQWitn9RnaJN8mB8B5H9nEGXtWfypGe9Eo6D6WDqSLhoU",
  "key7": "Y2p8TwBLH3j5Fd5vw9s38AU66zUHJ2h5ZNVPiuBJMsfYW6Y5RweA64GfqyjEzFcwZnhHTc4FS147hmg6Jk5bYFe",
  "key8": "25ezPHsqdKRgUE6Nb2YR83RYPdR124ZaPMu2HmnBPH7bSAbXZgagygP9Lhq9Qm6iZbbEMFAS37MVtHHfzVpuXQJp",
  "key9": "GxqxCmTiFCNfm5Mgznrqg7YPvVQcC1cXmgQkpkUnqiJQ5wZhbELH44yunDAi2KoV9wVEMKq6Hh47PkUoyBPnS7D",
  "key10": "4GGrCYkgvb7tNA23dW7oqr28wX2v9zuEh2ANFGZVH2wYTXTdmtuPJKXexd8YtXpgwHxTrZn32Cyr7FZe87kFbMUC",
  "key11": "2Z8exCmPDwhrEhUrUat12SuYnGPYDv9qBFLd7bGXWRsGfeZmrdaB5DPoX7CbfU13tGU6y3fSoWKYdiHaFMZjvPDT",
  "key12": "4LgZy5Y9guvsf6nE4esVYpxS72UwcVMYqbkvVGVXin5yBcAF92kVs3wjnytE27FpMa1rwgFVQsiNTRYS6o8zGhe6",
  "key13": "4YfDb4kKaMvRgG773fCXFkZmkid332JE2u35gbhgpSCcQEVCemM9V5CYnZaDLT4C3hn6NVtM7CAro21F6MAYBWDP",
  "key14": "4K8NwSZkne6jkpv6MHugxN6UcRUTqcAwXou51nnekjqit8Hkn91LZVsZxFtHrvQcLN21Y8cCv9NgjCZdffcGgxPh",
  "key15": "435d2A6FpgSh5u1yF6cJJyNMAVFGc7PyCWreEmi3WDPpDDfc5toquMZZHNjpyBYFopWpzjNWfZS3vz9z42S3Uwgx",
  "key16": "4dSqPMpcv4VMJFVLwNSpmAWhbwn93iELSrtihBYtEmXWecuKctsxK7pTm7UPvJSL3haDBiXJeb57Pnv2sWnijgRB",
  "key17": "5FAGi11BNtLwwSkn5pGHXVK6eN7JgiXYuzwobNyLhE5ev2zu8RYm1fpsWDwQGJ2NDLaAx4GemVLeiSLXXmfUMGp6",
  "key18": "TfXPx8KNPX8jQKALsWN3kYLjuFmj3GVSvcKuP4h7Adh4NorqfXdYZq9wnY91D8Nc2UdXgib39Z6ERHJrJS7zKwC",
  "key19": "5XHaxMmii5CLjcStPS6FKUa1gEwXmVqTP6PSzVPhUihmwDcrpY3X9Y11ot4WHHSdoFEzvRmRsT6v4WXdRTyAduhZ",
  "key20": "4XTkh5cHin7KvKhd6TuKgme7RoabDkznrahXJyRfQM1ww3VLV8p59z3KjSSAi4atsL92ytWN4z6ZezDTYj8HZpu3",
  "key21": "5U2FajUjZBCJwAkzdF1CxDz2dvUzd73MmRezjcCKam2be8jmF7NzmJ6pU3RMgwo8KbX1YLBRevGdFnUFVmDHVDqy",
  "key22": "2CJNjyek2RwC2DTuerUqJBHj9cWeVQPVo1B6xpWf3fp4huRDnHG62UrmA46BKZaP8tzVfoqtERMphmEZpRDWdHWh",
  "key23": "4YqH9LSx4ZJnu3Mzw8d87GeapL5n5T7q56BnRa9myC9frv5Sa9KTCa6exmmzgpu1Sk4fcMmdYxTFPxA226QNEWV1",
  "key24": "yVSos4SMRc7FJa2VFiSCVWRDxMrfRKrhbkeAwhCVoM94rDdi1obkp9VzA1kd5MnJHPr62Ybew4HbBUNZseFkBPb",
  "key25": "5NfGTwAwPqeAimRvQaWDHCA3qBVyvRwmLmizaf6RpNMBayXPng5vokHYxzBWMGtCsya9Av9CrJJfAHSwKX2R3GcZ",
  "key26": "3KPsetszNvMUFSecyXyHjhnSeu3R1t2VorF5FZDktme6N2EEv3Nxnst31GiA146uB5MPdujkVpTYsD2rNcVDCtNy",
  "key27": "2ADAqXpfeSet5fjHb9KXXujATTjWE79HKwepnjK2fkafhDdjEo2sa1NKvJMWmnXSLwR5TUQLmh72jzmc37WVKyL7"
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
