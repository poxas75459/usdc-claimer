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
    "4rtZBVJDcGD14Rt8NLAxVHUNp4kr6agMuJKFaaeGxi4cVs7ZVMrC7ovwpQ3nmVHyphDWNfQiJ32CqqHYy5AZMzfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64k8WS7xvALzfgS4MrBihHtM9MA87NxYH8oUAEMhLHecepfbXQEMtAe5VTyYt1zUNcJSsb8C2ihqbv4fUv2m7L66",
  "key1": "3isLtkcrp8i1Qf3Etk4R3eFqQ8GCvoUEpyfango5Th8wDvKtcZxnXf9QfsEEJMMkuEiVAmpT6RXZJdtsqpiXFBr6",
  "key2": "5onQTsFBZnJL8QThiPcg5SQG7w3vFVzXhv8Zzx44TxaCQxDaz7iFCofVWDupCfiPMb8AAbsr1NnoDjq3HQLE6pon",
  "key3": "3m3tzMCM6B2rwjrXQgosM4mXAmWSrbPEYDcc16Pp1kRddTM9yCKTuzVncwUZa2HbLGkwDEPCh58dKcGkyLVQHWLF",
  "key4": "3PCQmgP7cDsVBXCJ6jPGZ6XfLP8rjZBD2EFYko2bbLM9BBTrTrNvzTr6eUqfkax71Nu7mhvuZS3v3iaWGtC7Zaho",
  "key5": "ABjECqyHr8ARnbZcryj1zd1hq9t7uxykExRaK1ATbx2mmqofnQAwqfHMXNWXTsGoeQfYgT87Y2BK7PvNvryKzj3",
  "key6": "5i2eHr4RTkamSbLbZt3jfWYXK92AYuAc8vynKzrxDM56vf9dqzMngtp9UnHrpb9HmfkxMgmtEDxBKWXDASgGCToq",
  "key7": "62X7MH7kTfXm15MuQLRDDZhnbAGkiVurSrW5ZCizVQgWdjHrj7qwXhTgZb8GusW2NB6ZE4sRMm8PjQDkPa7wZQdf",
  "key8": "3vRN3ir9dEUWqRqCrL6XYnce36hhJXZcUDiK8DCuDT4jKZKrSnMPBAVCwkkZ6R3XvtuefAsTUdGePmmhfNjHSa9b",
  "key9": "41ieC9b4o6badN2Y7QHBFWM2gixziTprcp1NFPKqhjGoxDJT6K4M13P6n1HTCiNnKCDLUYvJW7LofiMed36GVKWT",
  "key10": "2FyA3HWwUjqrY5vB4s26Jj1oPacSQTqk9eQ3VxmcGtcyzVmJMjcccAXVsmmX7YQ6dHTopYS3WgX4BLw5oWMLDLf7",
  "key11": "5VZWtvzC3AxnFKNV9avjrFsHVRneT41yVC6DZvU233LDFkxe7tFdUpmvwyWTjiWsHLbB7QjcNdBJX4Bc7k5niF5u",
  "key12": "hd6sHVSiymHG5s5Leh9bPPNEinwqJo432C7uQLHPb2hqwsr3jifhijMfSG7Y4d8wUnLbEo9sYx9fkB7isJpp7mb",
  "key13": "phyuub9Nx69ipi3dZzBiMwBvHFixWaWsX8GLpWFUBZBbRghqmvSipGasknpU63tsumPCg2636i3Za6rT8i2zTk9",
  "key14": "dtnu9v5JRjAEJmuhp7kcE64iQY2bxRHJTd6DTeDoYrnBd1Rb9WHviW4i7WW9uAxYkeeSrgu334adxRzWU4QYdDv",
  "key15": "3gxtMdomzHMrwmp2mqMNK6bFzgvEJ52eGxXjVftYNVYGnkNDEjMY6o8iNZUfEScq5doQE9rG39biJ4PGZyC4BSfD",
  "key16": "5ZNmMVHv6ZtFgrzDX5SBnT8JEoFTmQwZpE9nRwFABs6MmJrHEP9AQgPWbF24vBvDMgyTm82s4tqKKRGUtBSU1a25",
  "key17": "4D52ASuZa1JxoambciPn3ZNMXc28HvaCcjny42aMNHpEhki7cLXSMGGqP1FMMwc36CPfCwvKvEmFNGffReZsM4A6",
  "key18": "4ivLdFgBaNWsG3oZL243C6xhsLEi6ty58NxYbHoX1Ws1TGmeCgSRYDCRLeagci4FUon9K89FGTaUZ8h7zjn2fAoV",
  "key19": "5CayfpKs1Dpf5TRjZ9KSCWB4i5STQGGymLfxfJWTBQUEd3W7grc441AuDKRj6eK8xuC2WbAubwKvBJM8JwaeJBhs",
  "key20": "5Vrsnnb4tBiw9tkwLvo5tZyY3RFoBchdWzJaoVFttGdY2kZHrJqYWgSjL9rnkPt1CUAW7vFhawkkLZD6wVZvZkTt",
  "key21": "ZSDyzUe5y1aYfKPMFANKeU835Qyu7gfPXw8a2McXsaSCwoacfKbwJkJ5iBcLTTrd8qRmNbJDBLHKB5dd6mgw1tD",
  "key22": "4WeRaoSF9Uv7u6ayHtisYHfYf3PnRS4pKt6qK3dwiGdFH2NjowsvAQM2yyLTn5Mc7brUPsbFpheGbvEi6mHEBMrf",
  "key23": "59jrtRyjkupFQnqdEYAUQzxrxjoZSR8ia7grx8LgaDKxhWLU7cYAkcK1mXzJDpWKzLdKNNBwxjd1Awa2CuCSPdyN",
  "key24": "3TTCco9BEvRjECMgZmZHiMqtD69k75UQiSuEmjir37eyu5SdoJgAhrYo1xc2bKjnSj3C2YhPT1EpXccuuDFGMHdN",
  "key25": "hJKT4xq69Xn2woMDWLXdAGopK2f4WmLmZRBhqu4JBTuMmm32MTpJxiac8BEHrJ9Esjdx14q7MVypAwvur9kCtHm",
  "key26": "28JEvCU2kxwf6F3kyPgVU92uuXZqaA2saynxvJ2hUYWvBUWM6g4MSYhbnuFK4iaNnvPdt4E7sokWhcUiQAmKh5KT",
  "key27": "3ymqo4Ezmk7LkpfTCkR8Ajfx8mk6AL8CQeqiDZUZQb1D35TeCyNJY3B9QcxFSLSrwLWvpCpuDvQgYEHa5qAEaxDy",
  "key28": "5nc4RqnBu9NaHfrJF68L8sNmNfBzBrkJmUoHSWSwAPUXoKCWDdZhZ6nCcRjrekCFPDHsszYcoNF9R3i2herZqB6",
  "key29": "5Y19b4RygdNoVndpyaKfJi3W6K2zupt7T7xD4CNMCzc3Ajc5zUTsugM5YwfsW5iFFwNE3MQHR3DUJ1wbs5H3ai5A",
  "key30": "4Q85WHjRiLaTwaD2QuGtm4iuX1SzHfrgKmWbnmrwzNANax4wTEdNAJWuEm1uWJonp5ypi7wXe8rbzmAv7Kp5NxDq",
  "key31": "5KuLoEp6eXLXC1mLMd2D4Ctkm4Jz9AYvusmV9WY3pghj1LQiZ3t73qpPSLXs4dCaFzcLykqVPeiD3UJCFoVAooVo",
  "key32": "53TDSa4JiqsWbCTBtHn68pAud441UHKrNbdVgvp128yCwMFtayoCJD5vxP1Eym5hExMaE6BJBmkQMmrdnxT1durV",
  "key33": "4cSA4sAWc6fXcbitp5W9bMkugW4Usk4ycd5HSbPeBiCmeGrqso9v2ePZYpLx5sg6onRUQY7vd77eNuJB9DpyqKH5",
  "key34": "9dUxH3jFp3kXznM21tS8sWDrWutUjqBaA325rrbRrRkYWHq7AKyGN7LqpDMEnNR4i1B9hjQNszsrCfGodFxoEjm",
  "key35": "5D8wy8hJbhU34ad9eNCu1L9MpEKcvnoJNER8jWZMXHTqyYeZkqBQxJsZjdZeMBjLxVs36tnFiNydZBKvk9y8ykE3",
  "key36": "33kq13PPUfQF6D5CBeV1xnudiRq5xecuVAb2p4z3uUKQTcgVu9k5agsSMgvjaZcXRb6U5dqN7y2riT8F9JE9ef4s",
  "key37": "4PYGLtYE7j4ue6NUFRsd5qhqetfCy9TRh7mY1EuDYZX2AWy7sJhCbBcE2twn1Z2ceSAHjKTB9NLw42i9sCx8uAhC",
  "key38": "3TfzJDPuUB8TUYHayCvBNdEhoqrYyaEh1BZ5w4TZUNc2GfhcSakZ2MNYzqXx9Uzfcs3ohKDQZuWFSqUTqLPad7RX",
  "key39": "2f9ZrHG2GHEabzxUmDGg2H6fseZf9cJJJjZwwpKPuFzpGzT8xtixG4X3FvuYeeod24RUQd96DWGT9DocjWWL2QuQ",
  "key40": "ufMrwYy598sz2iYuAzrDB6asNtYhLiAyjKnEho2dWcTfex3vWvBy9HnHFJnnT3brxZT4VaJPekhuZ4QTAQ3Vqrd",
  "key41": "4oZZcZ3Z7XN3xNhJBfMj763RqioAGmoyFUVsAJ6WnQyX6iECiZzbbAmbVEviCt6xz8umcKVAGeC8HxY2W3JLZbQE",
  "key42": "5xXY1vpf4QBYu7ibtwg1jwYiVpfaY8u2of2Am6syPXDeX5JUCVrBFVkrMG4jCeejptoPzFYdJkgz54MSwrg5KUVD",
  "key43": "3eCPaPCKp3SwFPWUpXcvBY9i7J1XFeJTNyPGxv8ynybWkhcDRHwY8HBt4fhLK18xkUqPBZ4XMscAnQVRh4s6oiWb",
  "key44": "5Zre3WTB74Vk4A34DAmUvaCJXQbmoLVLaPZwcQz7jWaimMWjRhzvKndXWVLHCuh8eYMa6FXsWvWqwABHCBkoLixW",
  "key45": "5BpQaL1kKSBmexdzit33ZYGEJrD5VmbExwLDGAXxHhbbGPjMqTdFzBZC2kZpo5ei3YwWhDQbuTauzk9eDuEALE6"
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
