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
    "5MhhQ1NFd6FP8kzxN35HjAa297HiSFmjFq5GpYk4mXyXsuR8RReumZTcMTjpMqSYgE1VkLWCFecBajfv4W7EqGKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bp2HfMWx6NTkmxY4QqqaGw9hzEYm3RQNgpi1xtbnZdTdhMx9f9g34XGb1dhiahdTW7dJhFZmYJxWcuviRpyF1aR",
  "key1": "2G1TpwCRaxrChLvmB3YMDCLPhfj5tQRxhEzYCwni5koRvRdR5Sm1Dr4B7NWE8S3Z8H9Z3TRWpFDctVkT4LMPPmEv",
  "key2": "2P7SqP1saaScJxL2vrq33GoQFBvXSaEWxYLW5UH7nsac7XKRQqu4yxoqT1HzAQax5aJ5xG1LHVezLKPZjgoAmMCX",
  "key3": "2K5U7VJWiXyvnr69zwEGD6X6w1Qxy7xi9DggFTy3dMFCzYXJ8nCByHNeagSsdAb7GdSVhgEtQ3V8yJ5Hi5hTSSgC",
  "key4": "4BtZisVrSAPNogXb5J6DUQfMuibpv2v5Zmw5VLQseCQe6g6UJALFacuudb9ym8qznvmvGdZKeJPDFUEzxk6dZeqX",
  "key5": "3BaPQdW72V7u3mh8Xw9oC16DmmvW2MrCXSJtH4TMndpoXFAu6QZ38LRv5yLajQwAMwA9wCQ4qiNssVL9pLFdyZ1S",
  "key6": "2WYgKRdnrzkAGPBwEWRQZtu2jeVos1ffvSx5tDHD7dHvsrMZXCPbiqKMTZpcXTw9rS3DoLSTpJC1Y9da3o9RHjws",
  "key7": "2EYL8KJ2Z84rk6eddV46g5R4paReA8KApwWY99eiustnoi32vfjAtCtcfnjxSLpBm9Q1xaEimTy2Ns4F6h6gspBr",
  "key8": "4b5dFeVjLVHVyv6CW1qxNDT1mLyyhULyJefP1orkFnTRYwwEzhJpVVkqvFTATaHLiHtJVzKQaQeiCCdT7gbxPvjP",
  "key9": "KU9AuBa5DejRRShbJ6kj65yvwjhpJeKcnds5J7F2dFoR2L7cQYtWyVe36UV8D7JtsZ5P4puHJEJYuGgG7a4khwc",
  "key10": "4dm84XcgT4KVbrtCe9U16ismKMY7YTPvjgaWELQV39661t3px2TpHACGppt51XUPDWezpRwBzS9iSP3hjL4ynXfq",
  "key11": "5DLV7uVGQ2agetyeuXqZvYETEHtQiwRjNZTdqnFqufPk19DW9NtreCEZFaiSefrTtBhN7BLrTd1Ujp5ChdkX84iA",
  "key12": "v4dYpc2sR2tFshZcZiiHs8YND9tvLNTDJx3jzKWsmivN7WzwUP68WB98RD1S3Gd4ciG6dGdTwjbocXoqbwFfoHZ",
  "key13": "5JwPeH9PNRXYQk6mREB2MEhqEtNuFnUW513wNRbgUnBeiLeFQBLt8WeGNGzBBGNHgEAymJx1QCPwuRe8dL3U9Mbo",
  "key14": "5RMxwdLEGvhVdbFqAhkEpya7p52RxDvQgHdZgDP5D16W7KND7BuGWWQaSorcwCqEijRRnRuTbDGEzrDGqbeKQDgQ",
  "key15": "2Sc1fjftGGp2ppMDNzNWHSz937XsUVJcCahrdpMJzbwyG7hQWySXPMmo5edD3gZE5k8iXZHTxZuRq4jW5gDChfAK",
  "key16": "3rwkZqYexShYYS4Uf2BTh1wuWP6TVNBjpuTu3hXsJmpGQbpSpubWJohYErutoXEYnJW9x8LCTXqZLVUguMhMuReg",
  "key17": "H2P3ERT6hE6V6k4mfKngwcNqrMTNw9JcbTyCsHtp8JQecP4ykzTViFQefn5ckW3s5rC93yegai3scDepWANQLVN",
  "key18": "3jpWR5wsJv8kGmQcyRapK8HBue1YCBy1sMYoSRjF76db5qLmkFhY3Rr8nQJwVEYx8kdHrc1Xr4AeTaHybuR9UPj7",
  "key19": "cre6VkzroVx239BKDuEiULkoR6JmULkXVhgh78uwSdA7g5bC4FUWCPWkg7L41Sfy8uKbzzve4ZRpB1oUVCcTAmE",
  "key20": "5gMzHeFEUaApvQZEHEgjDRqVLUJzBa42NDeZ1oPAix5SHbFuc5FkGkAvTnYk4puYL2wELdQy5sFaeUsmsWb3NaC2",
  "key21": "4fCpU3PT4cr4KcAP839vKKmz8D5gnYm5E79CpBhhUvfgrvDq4Jm3nWFVdQWUv3CKV6RgJZk5wfDzmunEQPBJxcVu",
  "key22": "429goQ59W34c2qTQTs71dW1nuET15TEiYBM7kvp8J7B5mrwoGJ1GnmcDDNqF1c3m8gZZQ413JeykfEjc7efxRpKE",
  "key23": "5gxbJxy22Fj6L8umFywiFokxb86Gc714fMA924wk61CAm7kUSNeku2P6eFXUMF6D3XH5hmwEt1QfE84rQQP53Bkp",
  "key24": "U1RyptTMNEewaqXs34e4ebNrNrS1jDnU8YJ3fJfQGS8r7N4ou7zHMNnSW44uimzTiDsd1KbxdPTxvocJpri9DPb",
  "key25": "xZLCXH2ufJNtJ92hgqs4pSufL6enDftJG9sy5y6LFn6iNrxhE2MYfDZXjh2Y2fET39W1LResJLP5ipkyKa9VXTB",
  "key26": "T4tobUQE7Z9BW73hqxFXe2px5qrMsyaYLovv4w2MAx4bBgLmN9mJfMxW8hkboXBNAsXpiQqiLiWemjaP7Dtjo86",
  "key27": "rKAfusWjX4MkBqfPbNbpg9RmRdJ3XZ7uw1zQWd6hRoA9QfhDmDN1Bu2WLc1KdSJYRDy3d7PvGHB9C9nPGYMaSM7",
  "key28": "2hxCMYycJKyZ6zHbSa7Hqa6A7mcnt3u8nPmHDuLskRkkzijEWxMXdmquiQe4B2A56sk2SbBVnWoAxsPbRmWMNUiV",
  "key29": "5gDF3nMUGvA2mAquL8uq8GWM96ri4WB8UUuKZXghdTPLcdp7nfJFE4Qea95zxUy2fXcaVHMAeDUG34rUPL7RGX9R",
  "key30": "4XvqsiipPVDgouav1JDFS5ZzA25njuLqprCALjagZXopcgS2PrqBV27Y2guK1pWemrAZAvfnpXDEaZWKrZew7DLB",
  "key31": "sfRR6F6Z4aT9Pyk7fRXg9VGcBp1d5txfyKxErp7d6F9vqdeRMcLzj8T77VR8pX8nPFXYkdzMUiYZhh3Q4cBhXXK",
  "key32": "SKSX6AZJkh85aPmE4JfRpXhu6EszpCgSkozPXpc2BX5vw5zaGwfiXUncdUEimCw3XYr2wjMdWNuJbYiWDkSfPrW",
  "key33": "4NGsYeLGjHR28yPChmP6pEPadgvHW8cASX9E2oa9e7ZcdYXxypSUwJDW3y4GAem29ZmbN81VxXQsYAtz1P9gDXGm",
  "key34": "2yFiuiDKi8XqGpt9EqchJ1tBi4Jt9amZYTYMRuv6gaL5s52AXkKQ17LneSiE4GugVPA7zAHF1zWMNzBD3tiGsuri",
  "key35": "2mcN3crs6wjEJD3CGj7JgBbRDCnCN2sSf5Bn3iavsmusknbjJK3ArXG9EAMdnpxCYnDXAVtw1HgYmbVcjwq3h5iQ"
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
