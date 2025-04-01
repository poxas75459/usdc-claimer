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
    "4pT99zn4fSK52eoWv62zNkwxPqiYyQJxBsamnYWH3U2nuTHmMbiX3AXQgSK6Ydqfqqt2phFbfBHZaLGymnxcVJAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRZjcLZRzqMkiK3JhHLH3YbCswJWvkoYRKfebLtdcjtrVfS3HuEe9cxGpbi3bssC5YXmvPFxWxcXddD8CnuDo4b",
  "key1": "59sGBYRkMY6khJ3Cn4Fx4RUJm633nAcDNWQaCemGNQ7QC7QLJLt6Dj7uuKbFC5KQRzVyuPyejmGnicMLnVtz5eVJ",
  "key2": "4i9rMEdBfbVcQPFUCweANLa55Z6YYYHmP6fZnt9fPkLh6FfEcHNuYvbgJrmJbp35W4t1xPDdz6gU9AiEBNndfG8b",
  "key3": "4gY2Ubv1M6cB4cbYG9cs15EDo7pA8Q97fh5HZS9wCaEuMkpKf7bPw6AhnCbQHcUpJfhRDiBdbTC3sFa3K4MAd88v",
  "key4": "2vnmDTE7j8yC35dyTP6b3zCZYH4oyiqG9MbaUGUa5gtyz4GnkdgMwjoY2pf7ye6kPnsZccCuKaLsKY5ZwMu4DwHf",
  "key5": "4rVaShp4s89cpiWC1G7XnMoXU8aJADrRPrWJ59XZ2TiDuAB5g5EwSqpKQ87VRK4WHj7kyt3HiP2XUJNgfNECHqTJ",
  "key6": "3EjaCAyE5XN3H9G3AFbnfzkWC2ZuUBQdpNRr2FnvCfhJopD5AhjNAtS2EbvuayoAaegQw4g2Vz2zsv5hVZSQZBe7",
  "key7": "5s2iWaeFPPMzuget2tZbd4QXCtcGhEVDfYowxdX7Z7KjVuAzavx7skurGiqrtSWuKLYYnjwCq2gwprXXMnWELZLe",
  "key8": "SgtdB5s8KKq8UmqcoNbusjtUGaAFB9m4W7n5QFBjUMk9iCo7tH9f5AnkN6FR8FGcVT7SZZnyc72wsesYVyrT2YC",
  "key9": "3ATVf27t1ZDVsjGwYyrvshwJTWmUM9rxLSAJSGFjHmzmmKzpbwk39rKbK8mKvUQLLYR18ZkBxYCCkPSEpegK4uCp",
  "key10": "64r66ab7FXjkahMnRG6sNuwsL8kdfAVYs8YbjhBBGpLcjRR4rdWs4ULtXRZnUL8pZA1wp2BtHdtfyt8ytYvLGSfD",
  "key11": "3URDMKaFYxM1wpfHDTN2wHHFH3zcdR1XeX2sHmL4FR7nDkkpnoShrc3D4sXwtGSR8oGNfKB76QxuBEhR8vqrVxRt",
  "key12": "4JLjtcYmym3bnHXPfyBaVVAuK827Ksxe5KBXQtJF48tc1gBrVe37jtJqwxxg48AMsJ2EE8GtwgoyFjEiAbqh8cui",
  "key13": "5qHskp4XWr3Ntev1Cinn1Bmqoj1ADBw9JyE6ssW9eKS3hManUjdB5gpqMS9NMAATBzguqxnTj1spQZqHqhNgwXwN",
  "key14": "65z8NZXdkb8jS79oyCrBpsFnVHGkLqa5Tw5c3LMbSTf6UYdpJenGAvibJdebzVFwBSM67Ru1NbZBq4ZhWbtoEaLc",
  "key15": "65FTg8WfjQ21tTD7EyLMzKGAhdzfTNfEPf4e7fZKaz2dPZrj1qii9m1c9jhmeZSYsm6wcuwquVP8jDfqjKQVtjQh",
  "key16": "4Len78KTGQP7Ey1fa4HFfHD8p96q6vz71QkygRjxmQX1DqeEAcmZ2z6Rh524wbXxy92THF6QbwQ2dxQQSH26tkPo",
  "key17": "2HxcocETVcKq2Y1MUWYdSiYXkj7XAbn2vn7o4zG3TRxgpTmi6sh9sJo9TFh2RHBnsTfjhkxuCLvf4JjnWo2DXswY",
  "key18": "33nMFMDRpAa99nnyd3VCb3m2QdkoLKo7KhKorF6q7GxYcvae95mpq1HmB9HB3j5F14CUCvueTYHpr65G2RHfrvML",
  "key19": "4gTnyL4giWdpZu36guAG6iTdRRMRXJBRBCm4H9GRnT7wLnUfhX2ixiPZ46RGPPGco74kqkHL8eTSUFg8JE2FAYEh",
  "key20": "5LyjMVHVBSqsA6RTMwHdpzBQPVvsiKDq4VpYQJ1id5GkbUVeg3suProKXMog8c64dGNwdSsgJj4iFJiCn4czBwkX",
  "key21": "3sJKafxSspj1DErodEcdevwqwx7ag3rX6wRbenGoJDz8g1zL637kEYg4pEeYEWHkBHQd6peB5tEGcc1VmRFWwskB",
  "key22": "3Kg8bwEsKmwR2pLSRURcsXF9qJp2fD6Up6PQ2KZrvxQeqUy4HXMGVaNg4vc2kMKuYWLrQpEDPu35Lx1L4RKbQXw6",
  "key23": "Pfk771wwLpFgJLTWHjK42L5Xc5VbPE4TiY4biHJEzNtCktrq2U6AAeN2LhEAeBv8iB3eXohVJFzfG8xLH78dTR3",
  "key24": "4kefEcd88kgCr2CcLmqfsft1DBVkLfyohefZksDkjpk4tsRkt7dYa8xcsBpcbEYKYzVWMBggGzUfrFBejJWHrjgp",
  "key25": "3VFaF9t3cCTJ35kJj1nNNBjfvduCdQ4mnagHd9svtDiDsKxv7rnw2P5DB81K6QayjqicjdcNdbsSXqyKZEZGM3zL",
  "key26": "4TwPBu8SvhRGRP1ovGRr5B1Tj8882sBs7WsyjxWfLrKvV7oe3Fc1fwHrgavGVcjcfFc6JKfJLuSNFhRHrR2bJLPe",
  "key27": "4RSj8cpp99G2PXrQWF2rRN1RuGV2h3dCJB4rEPugB18WcHQNdsTQvXWm75r14C2Dw12BJAhoE2qVTLyjeJ2fzpLD",
  "key28": "4qthBstUTKEJW7Bpr7fZkD9DBLEZgBTSn3Gq5ZWZCc41ndTjYsToZeXjnGFMc8sfBGDXonHmBbWFcv78bg8eoing",
  "key29": "Bks5VQxajaREVetqXhyyH2quJqcvHj1oMp8sYb4R1TsdLa7471wSe5VTzmYkNbMMbaXqebA4Lh8KjF8MLRMeUDR",
  "key30": "frrPKimDDuaf4zBCBikUYwBumg7XdL498csVxhQ3sAFrxaiSbCBedB1eV2f2sBZjhswfm84njnXAHEepoBbWXNs",
  "key31": "34ZEo4CiVTpsNZhfN97zNV7H9eM96eJoBzX2P3Qj1ARJ7h9FchSDjQwqpH8zyYhdWafkeeMrDcwWLPGvwUxtktmq",
  "key32": "62ThfSNUeDk4imeR6Ch2CNedme2igrAWjPqo9cwbqwgdUbj8RcULHeiADKHohBnp3ARZPNuFRohQgkJTy9F1FVnB",
  "key33": "3YRpqbkEJ8aRoXLJ94TxvPY1GPJCrdPiktHRvQn4dFhrZxG2qoHp3iFNZhKwQHKoaLK8R3H8xCCmrcJj6vjiH52N",
  "key34": "37qEdnnTDLPPw3U1Z1i2oznVPojAKWabjXkXDxc1CfLuED4EHSGgAHp7mamCzsfq29rPtPrp9dNkdZ1wiL4MisMN",
  "key35": "4bVXQ5LD97RoVTYJT9DfTAcJhDV2RqUQUNKezok4ZHz473WM62REqByNyyUUzYygHr6BrGcS5NESwcoFSyVF8986",
  "key36": "25iPVG4WFSPCXN4f9ADX3Q6L1XQx13QvcqEBLecxGnY7YHfBWdiz3GtLTvB6BHspBxLa13Nvq7oE5Yv7M3UDbac9",
  "key37": "54Xse5yXg6rfbV8BvK8MyNWtfJWywEdzHaPQwtyP5QeaJN2nxJXDYbcnJLJvRsnEHQWZTSA3RUpQcfCZRApnPpyC",
  "key38": "7ntiAAmhFcFPcS7JSw4oSnEVNQjgqyQPqZ1tE7fgCcCntT5JQEpCvEx6g9Y6GQB6DhBzdFrUA2bgRjikUgV3h4n",
  "key39": "3G5GH5qoi9miinFdB5ZsyHwxHSWz77R4uNXQhcvjGjffFgePmZngwa6L9FCrNTHFwdU4LCTYzhU5G17jZH6zp9L8",
  "key40": "29TYt58qTqkhJAo4Pr7bkyEPYx7sRg7iKAdbyeFUBDTh7V9ZHczXMehs4k5NmPrXf7GgJ7uUeJEuQF1Ck6QU3YpW",
  "key41": "3HTZXbypr1hJ5mcodjgb8nicfFzEZq1mfGR6WHqamUFGGs3RUaMnEGtCT5XP1MNBkeJVpyjvSP2eQFGeRtTBjcYZ",
  "key42": "4iXZtVsdifAfU1TeFSCkATtMDvcVVeKhpWz48di3CaQpfzLsFt1stmRFpcpVSF3gx8bAsZnZGnkvop2dBSmuBpWF"
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
