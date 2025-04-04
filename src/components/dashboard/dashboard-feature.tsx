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
    "53cZNv22m466cYyvzLKunmgeVThoccMngNXsFt4gzW3eTR8PRC66bb7J9PcJa9BmNbFdEzusEJiWyEdVyXTGmaG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FEsEVyTdTqffaTTFTCJU3qdtUW2qyH2v9xwsAeQhv623tMRZFYAeFtf3YKa9oBQLUNae7SZEKRJj4bUTbbcUn2C",
  "key1": "25U2soBm2gbAzQaedtgdZdUGLEtXggEiT3akvNsY2MH73eqnst5nZcLGfsJ8w6n2Krc4AQPejJZNqieSG6HCB4Tg",
  "key2": "nS13kkVU6jBsGjuHBLQoDzMb62t9KSBwvgjwAhMoC9gWo8dZWv4w3KoWbBaYEpCR9aHcJAdSRPpJqUmYytFHeZT",
  "key3": "64sJuJN47VbwvomyY3eY7AkAbzuyCfSNK16hhwKV9PfyTVizt1dohrnhrFo7kWavVaiiGfDVebb9fyGzehBXhWvB",
  "key4": "P3gdhTavVME4gyUtPrJZCUZJ6K7Y2Hzf4anKjq8jv8UarkR9mpyXa5XYK2dhMs2WJL2LkpyXN241UzLXdG8834D",
  "key5": "3NVhymT4NQGBAhDH67ZLQqLC5H1zbZvzaspFWRhe9DK2nnoJb2X14r4pezttxaa3FySVQ3uExryKU54uN6pt6bYf",
  "key6": "4Xcv8FvPpLGHZ5EHKrh3sKJbBse6C35HC1EPaftZwDeTB2fxbFHKS47GxvA8XU8wA1CJZBB5asUrGGKzVXwGnH1j",
  "key7": "4WaWgNDa7Y6zxambz2EcHsHXY7STYtw4AE7jEFophNrkpgjbmnCQ6tFqut9sAy1Pge1cgxuz5MM2QgEt9vfTyaQN",
  "key8": "4aefNThuxn28AJ7CwBB83yeDGivggtonXCxTqSAPTdmbbmtgJAr8gJWRSGpkUrMzN4o5dw3eMWdhPmLaP1waiSFW",
  "key9": "3sJDqxzZAGBcEUuXvPdvKefeUfpoRrCScTfFvNN4UxXSXhoWfN3WwUytBiK8dZLZTs8GazdjYVV3RzKoBbTQDkat",
  "key10": "4fwYhtydtdpKuP7fKX6znUwvL1MiyaN1AATgMjiijuNaw6SBnwnAuHCNNMSTX95ZySNUpBtNEPMeCi1krgiK5d4M",
  "key11": "4uF6NsRkjcwAQcXBGimxXgtNDjzKK8pPq9etNFiPgXSwoqy7E7fYRe1UAavzCDeht7WgkbvnSqUE6apvEyBaaBH1",
  "key12": "US6ykX2bbcczhbLWrzoasTG3Fk1bkSjB2eYB6oYqGi62XdregEcNfwgXN8949MrLVPDLLyLtnfDwMhPQEAE6LUZ",
  "key13": "3w7DVLRoTzjcuRJGv98fhL4afekfnx4fmnyneFPmbAsbhVmNqAyuFHRuqjfPZR5zEZwYbkAL2aKTeqGEDXiqQ1k4",
  "key14": "5ZjeoE5QnVdsGjZnPF49t4Lk4DiaVWjGzMK3Kc7Rs9m4HxCi1KfqEaoH7ha4zUCW2oRueh4zp3bf8CeGZARKxd48",
  "key15": "4hPs6L4rhHcCraTwP4oChG9rNdYbrQMCPS6cp6MCaThMMyYdhmbj4qz7cA53CEEXRVjjcYDsvELjGDTwtnJagJ3J",
  "key16": "2R5CENzDwFidZRmPjZv1FoAuBSmQqycy1ivT2iW5CjRJ7xB93yoeP4DgditnM3YAwFVC5Tfu2nuRNWC8vdGerus1",
  "key17": "47FUkxMR1BtGmYF4g3N7K9dzWjeAMFSPTjeZrkUiyFnWbX94MqMiSD5jBA6FGMXhLpCWs2piDgtTT4wPykMdUPHA",
  "key18": "3zpG9VTYRCXUgap13G1He3RoN916VTFjogndbJhYD4Z7LdaAGuGNQydetnrfdTcYCpXtiD8FZTupxarAKGMhvJuU",
  "key19": "5zeBBWjRUhjG5KThE8oGz8TKAXaDCrzVF2ScrA3qwmfqUY2GQsD4F67rjoCptUhfv6WsA9BF4o56TV36vu6zxeWg",
  "key20": "5uZw57pnT3Pg88ae3PXSvKePBkzKCXSPftDy14kPakduPueYFXyERAEDyFrpCpnV1VLG3SwMQodL4k6Gy4vma72D",
  "key21": "PG9tfxnnByWqeubcLBRGZUvxtGwbNTeLVboU7iKPSK7W8QnRwZgxncpADr9koX9jsn9ccPk1W79wW93FmMiMg4f",
  "key22": "4vUrXSkwQvZnUAtTFv1rXQ73nk1RNAaMb2FwhZVhfouJAEznYVxnsE88fGc3zQjNfAhCDtaXj3yooUpjgGFGzPTC",
  "key23": "53Swhsx4vrtimvydbXYEkc3GU9iYWpJ6s4StxpUSL95KpevQES9hs7eBXyBKE7kRiDT4rws4JKzkuvKsxmNDGVAs",
  "key24": "5xMYufX5M1Lvz8w8DarG4uP1Q8Ev4ddBcNFW98hQ2fGPoKwKmKankp8Pm8Zs2pfLarxrVdfK4XvpBCUYNkYTJ1Fh",
  "key25": "2nZuHDeLgTznwvqLTaMD9eKUwVzi9QLoMYZ9jvQZAe4CaRXdcFAiWLi8Fv8N5gcEMaTdnwxboAnRsaeD34v6bfvQ",
  "key26": "5hdaV2P6WVe6wCPsEPRzcXw5FyHFYquD4RoKFeSt4N81cugUh244VrEMwEXSywUeuTS2mX8LC1mSW1Dwbn16Z99L",
  "key27": "5hniy7d57poZrkbVyTGcBXDFDg2hqRtpVkBz8ZdhpfGxN58SaYxVQet1zn6aMyZ9HmkNqmYZm1U9LYybEyUbVQ65",
  "key28": "5Gs34TbZtUPyUJ2wEMtV86EcUgP3tiPmA2meuWj7EErp9XyTQ1pU8PT9SU1UzoRZ1CpecqxqS5uJGnce2LtC51Xd",
  "key29": "3m4abCxnfHx7dNo8ev1xHmMaRcqqy2AZdy2R4X7rcbsNhVte2THqxy9DVkW8FDSJUJtpwFSXY4928wNvsonJ5BWe",
  "key30": "5sz54hgg1MwnRhcoMLh7xZYDPids9QRhobgYhTfUK7VyBdHQ8Q5XAJ35zMzK2qPzpCZKdcN7ciVv2s2TeRdsNGf2",
  "key31": "3VAHisWKBWYhncBLxW6amke5U3XJCScs3JR5uGwGgGwpsWPsvfmo99JZbFHvFmChtCfZmmqDbjTdJrgrStR6rfnE",
  "key32": "3Sre7pGrYdAMU3yLhVyq7EQU4MMu3SNHdX3PS9xfsMJaKWcRxWiQfJYrUiPbiKyXh8tT4xpuyFjCV35ccFVLhF2C",
  "key33": "2ohajFbiV97Tud7R2oyvfmgoBav7XQ8yxhaPs6LfqRZaz1mCmQRtiZiB45WcrhymGh3Rcdzv8crg4YaBB6D5NCzo",
  "key34": "3vQg2zwa52NhC1qMucLmfpP35VfJizXyiLMXtMgpj4pYy9nSk9FpS9vLVsitBCJQbD4Q1BFdCLTWXgVEmUC7q29M",
  "key35": "2oProiLSmqp9Asm9pJPzdhyPs9xSDcdhSMBaoneXxhV274TsPd771Muoa1MhUnpKGHbq5BKP4GXKqxCU9M3hBnUg",
  "key36": "4dKrBiVE2ZkYRAqW5uVGM9BZhwosE4AT7TqzK4FHK54aKyeN5qKcHSicYwnmNXf8q76ooNV7PMQHVK1NFK1FmqJk",
  "key37": "2Hxu6S5VUQ1fDAseASdh9K1Aq1EQAJdNP6wPUnbDVyS6pqGQRPtcuCZWmMrfDxKhAqJ8KJnUCNBwibu1p5Yq9oJg",
  "key38": "UY5QPAvi1CVva4PhshSPLpLHEPLjNvumCKVPAfExLCXcCimkTo1pM3Fogie6r6sd83dWAVBdM8CehFS4GKuG5F8",
  "key39": "5PefzZLkH24mjK7CJqFLNLXGtBtrrJeYbdidhAeFy41Er8FNgF6zVcTreYW2nrdPFpwzo4LbVUiQRTxLDvAHgsm4",
  "key40": "LiKGYMfwfd92pNDQ9VA7tdqeHZrkqF6v6exEmQ9hbFKT6Dbe4g2FbsjEJMcS61xdHnw1ymywPXac5womXrVX7ub",
  "key41": "4i6uQjmVuiSUTK8kvQorzAwuht4eexYH4fdPWG564k6KsCxDxbLAuGb6PeVSsJugTAVhp5cq8jbkDvN3epJw4x4e",
  "key42": "5Es6AevzYuGSqaYLx5wNgTqXLKE7vjkiqxwtJmiNy7mTEEZrg3cjsnuXuNrJSPCh9W8bohP9wTijFjS276vH3vuD"
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
