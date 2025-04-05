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
    "2HknC96eM4V1KDfsTjRMhbRv7d6pMXWbYKHg6p2dNTwoPxdHAvvB3HAZoNCthtMy74aPcPXBcu619XhRcR26Wrsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Usxei3xmmYqrEusxHrcN8mBezdVHCrhLqgCFDGEsYAbqXWGsyjyd28xfP9y8P1M9SPv5gFfgxBUUYfSaZSy7nJ6",
  "key1": "29tSFFHk7AH8MYAHkDXP8tK7v7pETPttuLbPho8YuWBPYPdHNooMA5DL1xT6Ags8gixKE3QHtw51zhr42HCemxo6",
  "key2": "2Jg9KiFEcG1WLc9P6vfVTdGdRvt73rvyMGPNnQMbs6Xm7dMEdyAPd1rDJsPLW6gWK44NMo9pkvFNQzAYa16QMyGH",
  "key3": "5PSbhwVX5WRcrVKm7pW6kX7PLquu45DxDgb7Hv8xz9cJsdZ4ntJpUKbTRfXLxyNXeJfV5CUTpGFPwa3rj5c82tk7",
  "key4": "5rJ6mChc1cufjZWddjxJJcN6rrMWtzsvvRtg6dATyY5EBxefHw9ZtpmrFWTHoppZKru1qh7Fhko14mmDVZo4owGZ",
  "key5": "2sFoRPBp4UzwmxxZLSVDrPDWi1UeNmqaNCudnVfwz2A82FttviyvqZgEK58G35kyD1dP3zx4edF7y3Tuj2aT2Nuu",
  "key6": "2f28V8eabs5V79oBr2Q5euLMD3MGHreHiDw23M47BzAoP3WN22mRGti85WgTPaKjyLqxJUPzEWYuupzXDFATAHNf",
  "key7": "2zm1m37593fDBP7rh2RsZRYTzKvLu1p29GpYbL8GjMYXfkpobnqaExQScT5Vbfyov2ViCyKFPsT2CrZEj7AxMu4Q",
  "key8": "5j8o1Gc248TzCv2xVEThyCxuP2Co9e7TDXavP8r4qP6kLLU4dUJz7hqfH3bPx3g2KjbjLg9soHCueVkwWCQtGUZ5",
  "key9": "2RXczcKf82psBmBukCep7h5eGWzKhmfuyGztKKWUfwMUxZqEJjrCCUAjxkNxYmE8bDafSVMNcodAsNdohP8dypVZ",
  "key10": "32dBnepKpvADszvYFidNLGNjP18Y3fyfLwNH1oUz32vTZjo2tjnxZek5WZTrQYKJKwTKaYEK2fuzkHNRAHvkRVtY",
  "key11": "3EUsQhMpHMMcVNaZgiN4AVuPQpR1uy9tdnBWgfjB82LLo8nZthkKBQv9FyArqcTVn7vyJ6farczKnsvRnqrX1HWs",
  "key12": "5PqwBKB29wySV64tCKaYThBP7owE1LSNwp8MDrgt4bpiS6fA7RopDmAiBQWYJncGTYogX17HVuDTUXdqCMtKj3Gx",
  "key13": "4hWsPnMc6ibmCU4kCgEr2NRBmrviEDn3NYbD5E3xNVsaLCkQWL2DEbfoVWE2GAGmrsNn1Cth3AkiAY1uSntrGnBv",
  "key14": "63HGAs18hUN1m7xNThxjjEK7KoQV8gUbowAB6R2TofNhAvpVjc77WjZVX1scHZtdSPz5FRGPExstyd43YjKgSJHT",
  "key15": "58pPFcvu88MKTnUQ5ThenoFpG46RpQXPiAh2EeBLowhrkM28btrw2Naw2o9sJEUeJCyD7jTNAnfPGDAotrNoE2xA",
  "key16": "2Ubw1p96fmmx92SGWrD4KsYLPjKQKo6f3fANjUAqictKbJBZvWMKJLcQKTR2VoBPhK8hVhw2xzpEbfA4HuKErWpR",
  "key17": "4JAFdZW6yrT2zLbiG85621K3Uy7qSRHKw1Z5JnzT76HYGTpdxyivtSAsd6mezukqtkTbHskaLypeT6cYe4rN1TvG",
  "key18": "27qEX2SzGCux1ipFqchw8GgqepfArQ5aQofr1TzCxiab6Twd4zKT9YPuk5hfxAntNexoo5JmdDWy6gedvNkTm9eu",
  "key19": "2SdWkiejAjNngtK7UCyVLtsk6N1WwrqFZGtAS2bswQmpoSMepz5AJMaTKGvcUJhPKuL8ceY7xyhNssVK8ttQj6EG",
  "key20": "5PQdLUMfazMMuSAbAzi3Jaebwvct82P9umh921dQUE6rrRZz27r8fU236ukzkjwdsGFYXbA5KxconLCCGec7XetF",
  "key21": "3FAYpVChAgrBs2LMsXepda5KJ7ZfqxKYazg6XmWgyAfQojh73DZCxfyamoTNnfyez9HAGc6HNg7g6S1YfQJGYive",
  "key22": "k3VFip8snA1xcQ73mtPMVZzEEZyxqMBpXqnmXY233hR6mC2R69vtvqHTR32NTkidnGvsVsdF5oMHu3ijb5SnaK8",
  "key23": "2m83NidvybvAvBHVeDVfnJq7rSgqjqX11HhvL3Bs9kd6usChzpZWAMe6Ke7yt2ho1TCSFPU3m7cbdndiQ7oLDS7p",
  "key24": "2tWDTtnFcMqPMRe8X3unaDiJvHxR33KmfCsYfCxqcR1VL354BqJazLLnrvdsfCDNpEHtGwbBQcoC4UXMbd8dVZbV",
  "key25": "5Ls9jQsmCYYn8Wt6jmA36SajCPZaFX2QAwQ6QcZ4VMAnWNNk15HcQQeZFAZhe1K3oTniz8PM4NfCktqfN4TmZTp8",
  "key26": "5q5zvxRzrhMSBjSuWuBsrcNCKNmFUxZ6WsDCAFnotsEKyS7hcXnLFSX4XzqgFfCNA1FXdFxiDTGBRmK7btYcoT5R",
  "key27": "3ZPkBr16zSWUgfoCRU9iMYs7z7pYjxbPtxPHp4YLmm8XDuGexw7Tmuq4sYxQSpyeSyURYLS8KAuUX87r6fEFxj9Q",
  "key28": "522HJ8byviLngJaEcqhkPZqnWmzdtCfr9f9JgJrjjQKBj4S2pUJgVCoy6ypUW97pw4fBrntExydx6eAmzzDwdTE2",
  "key29": "vdjykjzTkP3ZEHNoEN4gPtrgosBtAuswd2o6cieUCWtLtbeMSj3shhrWgb4AGa2cMEB4CH4ZXcN6JCF8qU7Ayoo",
  "key30": "3BfDXzfJh4Q1aATP7zDGeA62bfwkP152DyiSJXkor9byLLFWj7iwbEWMEBaDDYTMafE5hxHWxJmdcYRRhBg59jUp",
  "key31": "27XDs8est4xczyMgWYoXtg2dvQYJvXEPohxVQMaJGnBwvkvboZYSBi2RkBBEpNZkcaMm8u6K5hUmrPt9MKXPthAC",
  "key32": "2b9QzRE4mybPBBi399d4Cf97kiLjALPYeekH5AoDZ1WEtgB1G1ph5u8vARKNgacUSdJvRx1jUkGF6vkvhZUzz52L",
  "key33": "4Vti62Mj1WRR5YjJ7S6Ypz9XD8DPZLtFD8HoLSB3G8fNsupboMHuuyrv3Ta8J4zcTxWXgvvjmvzxkpHBbYxhUE4K",
  "key34": "2Myj9ZU7TV97n1FaBP74LQJwuRbYyynVqscx8Awsjbt7nDdGfSKUBuaw6Wv8vSj25ysKwH8wkSnRWGMwfZpsKPmB"
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
