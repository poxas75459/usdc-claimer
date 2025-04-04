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
    "5gxzNHdKw5EoV4hXNfnTThqeS15aAW2hGFunfhv1VkVVw3ewb96ytc7KaWBCEcSeym6MLyhrCRKExNjmTChPDvj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWkKkF5uKWmMnPYipUJDRqVFX3L6LzanAhw6wrDLGuDPzVEc5DkzJP6PZ3GnChyVqvUegPVTVWQzNWgLU1ZsPVj",
  "key1": "3veNbSszueJVFvCpHLJKKywfNsx7GXFwgQcVhjxaBciL2W8jAjyWwiRr8SQaDenxM34S8NuVjib8N2VKBNZmqMbv",
  "key2": "2aXLM9Yj31VcBY6LQz2xounzCoGXxsmGpwumaJmLGWATiqQeASzEiQYCZSASYkwNXWr8XLoTqs1B2GYswAU1dbK",
  "key3": "2Pw8PsZbtR7xtoi6Yxv4wWLero3qqJ6h2uYsp4iCnbxGyqLsmxE4e47AHXMjd8ogfCdCDqvAN3dNp2Ee9gH87QjX",
  "key4": "mgqhoVRuTyB7tUmG7zD8KhUarX15Soi1c4PvQeALhm9cpBNrSPn2VpnVSRe2ggvzTx81aowMhS3bY2Zpeo8BZba",
  "key5": "4Lx6kS1W29G1rfQ2umYx6ugTUyodPbGWoteFAzFdr7fKeVgQKzBRBCPG6W7QWvjkDKeA27kRDHzudfbFLGbC9s1E",
  "key6": "2CwHLB6waiHJjZJNXaSMcAK2avLx5MjTWTCTJxAjrCNEWKP4F77Bw649KLgAuThqbLYqHBmZiX1xD4NzLnf8cQxr",
  "key7": "2wDQdBuuzKZvDtWwb2QR49MfyuV1Pbssnwt8tZ43m5one9j6vXhRDi9CcgTMFhm9UvMBdg1ansuNnqW6dc6F37VV",
  "key8": "3YwJqjDAFZdBrEXBKm6Dm2sxUiWuYiLdQEdHeiVFUPHZS2Hrs4Ps6VYFfPo7EMASzkVXPUwEV235PCmHJ6F8mfY2",
  "key9": "2KquNsQPLPsPm4tdAQKiLgWQiRdDBFB5xyQB6KecbHE4BtuGrmjtrW2xvfbn32PZg9qvKRifBAbEBNcRM6giYwW7",
  "key10": "5KwNX5SN96WWztesZ7NSbrxR2BmNNFrZaAw8j8fqXKvGtknktd1LDKWyQwnFZ95WVy6jq3GjGQyiZnvoKwQRzZJa",
  "key11": "4MecKvM9QKCcR3HNHbhoNZeYWxETFGG9hsySL3ZsMzZk6gKG17xaejQV6gehGscVjjPVxQyJA16bkfS4smU7s5aM",
  "key12": "dHgya9iDsMp2ZhVyxH3K1xpMNwpr5zvd8nsuMrnJA7xYgT5yucnF231bDKt5DWQbLiuFRj8jTaLH6d1Td4A9Vse",
  "key13": "2yb26pMWztydnPngWbrR1y1Nr1jRaKnDA2yt9X1qrLzSzEyCTm5KGz6h48L2KyBbEr9kbyZP9zJPaQhE4CDCpf1G",
  "key14": "3GWmrBwW8UBqLU2xW42TT28ZEh1H96CUvjCsCdTZvvF4b4VrrgWyAT7JKFNBsrHJgRiPhgw5bzwhkoz3q9JHCH41",
  "key15": "ZLJBfNRQW5DSX8Guo6vMJPS1zDsGt1SDrB2wvCv9gF63KRUX3y7Rot5PrL66mg3qFZc6aPRYrJ83smXysKbYZkB",
  "key16": "3eyKzWxvSpYSELDQqqoG2FFHcEUpKNtBZfT9X1BNWcesJt4nFXHhg3o39SXBS2jBwYmqe1YctsFrpPS3bmysi6mE",
  "key17": "48YzZ7DeLHgLcF7v9krXyTDNPzrhEUX3yp28Pa6YoBCpVjTmcVK7Ph7kfMizif4yg2Jg2UtJr3J9TH5jEFi8VEj9",
  "key18": "HMjs2CprKedsLNUjfdgnXMJTUCrVrP4XNPXg6xFGwYavH15GVKWn3hRB9AqSG4SRvve2A6hUCk5pFg4EnT7bCdV",
  "key19": "wXXxDHeB8C8X12B98FoqhCsPhdqXY37c1xuGajHUd5srqJopcZnrn9ReJ4jQ26cujnvbLLzjz78fdoiVssbz7Us",
  "key20": "5Ugs5kpXAdWaoDKf8n2Q3Fffo4cdKmE1ye8sHmrAuNo4iyM1zgBAGMwAQmoAEFSo4JE9CqUuKJgdNacRdbdRVeDm",
  "key21": "5wBCaTmCfZcQUxLFTVJjaTeUWwW8e6jD3DVrE3Jk4Nczoqw56LpzM6CAFzZsTjqkuyQaB5YnNDRCTW3WAGCjaFRt",
  "key22": "gUhGH2eebw2ahjh4zpMvbwhdZyH3PXk2jb5DMLHSwGS8Rx8vCsKsbHNBAVkZfdGGu6aVMj7BHSwCWm4gDj9fD2v",
  "key23": "38nFxr15WiyvqhnZaW4iAmw89Dz1DoboAGsAYRiSdsTj7eYkKftdBbX4BHrRntwEmyhd3GeiHqt9SnyD2vxjKx4i",
  "key24": "382Uka8BLJWrtWPLPr5ZknPT7CzUtF9yE4Fr9uZgDuwiWELG2hPbKq57Fd4uSi1tPX5NTQBWrdf9Wt5kxcAKZGRd",
  "key25": "48gxBEChQiokkFV1tdf1aQZ9EyK8WvfbLEXSTiPbPdmRszASARQ7cYR2VxEMqEYFP2hywhnnSi3cmUn8wBh5LEnb",
  "key26": "5MNeF9VHUzgRFTXHGNDvqDP5wJDruFqK2AhpSsNx9MMHmr7uxGWWi1u1FkqMYgJdTNnW23VUsToGu3gczbBF8orD",
  "key27": "4sUMhVHYY4QXHRfKphJZYdPKY56gPKi6M4BJujWnnwQsh3UmkAFxRiQTq2uwpGJkQonGzR58EcLvauwdMHPRjarc",
  "key28": "5MHNVjFJgH9pM2XhDH72SUixukqDjoKPRvjTcMRCMoUB2jind3ah57n4utvDdT2Zzd7JqD9SQdU6Z1cSubwLjJzv",
  "key29": "4uWQpYgogFuUsDrYbVuiSPs6RvUGjUq8aRU1HjWX6f9CwWX6oqfmwnQQDofT9SGdJQVcAn7CV78hpfQiTT4cVnct",
  "key30": "Eut2WULF3KcZsGqAoC7qfYBjueEUyekfoZkKj88XeHDKqmP8vQmu13Avzb2wZMrjhXkv9BP9whS4NJzUheHLAR3",
  "key31": "2iUeLSLEKi2Pz2TqRAWLCo4jnkqm1DGkMaHfUE2DBSmD2Z1TgebgDcbeWpjtzCa5zbMLjsL61BL2H6asvQskFbGz",
  "key32": "ktQs84McR5QbUeYLm84hY4AjscbjBiwRXpmvaxR8C9ZMoiib65Vwtor4vhXpsFUEDbPcUKRK1dFHUpTe4pM3w7c",
  "key33": "36M6EMM6MJxuP1K5Prh1KET46iKzEeauBRry7NeN5SXMAnjZmQcafwNWRoE1r4SdNJoCa3QeHw3Fv2shnzJTA1td",
  "key34": "4D8yAg2Lxg9XWbrAiMF653tS6DKaa2mgZtwbRHVMANxuL6by1gpfkV2BgpiTC49GHZnYWoppkqtAW6Djp36PDZsb",
  "key35": "5oXVazp7gs9CcsJhgcr8R4fHGcWForpok9rQsV4Kg3qWejZwEHMuHYdDuY5N65bgFV1aafcJXJxN3hcsTso4aEVP",
  "key36": "3GXsSFDjqBWNsZEc3AjqDec3BzF2RQbCZgKv3evPne28qqy14htA1djEG8radXoVkfnTEjTDJyBYrq11DirtgR6X",
  "key37": "yVG52JMKgu1RuGYcVq3DJ9WM4u4Ek6sw1b6xGTsBGepkPK4k7qbkzpide3pUrym8isCvcQc5D4puPtENL4unq5G",
  "key38": "2pozn4rBeuVxsUXVS2tkRkvccSVNSKLryfZHsWZujzp8KtsqyF2e6uVYg2JZzn6czVFyudGSAGnxWFyeNs8zTCsu",
  "key39": "5UYmhFFGTbmT5YrL9Vwj6rg9GusiA3DwrrW59dsQKVTYAa2mwVkpxGjFzfwzVe3DsDGaLpLFirkG2YVKXbC388G7"
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
