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
    "2SDn7ymZPKa47mr9GyUYjskFwoazyJiQJ6SBjs6DuuNSAamg3Yhsg4kqJdofp9fFiEpNHW3uVjyTrKdyBk9a8bxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Z1RxJuiM9uUR6v4S9KNfZHyWvKm1GSeGN3kzXc6FF3xQUvX31XcgWyk1uPFTfhsN7Rvev399yx5tN46KC99WCu",
  "key1": "3yn3HydkxvM6NSfCsPCBHhYAQKHXs9QdbNwUakNsbTNFrFgMYkYfPLSVBtFy81DicHsqirwNSpTsMTnb3EhhLNkE",
  "key2": "64WAUXXrZ9j8uVx22h6UJakZdwtLrVefePg1uMVB1MVjbfMXYY9hg4hRNymZoL8yqhEYcfSpmDXk9fe53LyTADDY",
  "key3": "oRy3qsbaEtKG3ftYTuHjqvxy2DhtU26JuzvcimD2nA62GTKMi7dvAB64JJySKyuzY4qbDnJbECd4M9pt65ahbPn",
  "key4": "5Rtv91mvD6GDHHxYdirvJhdK6ysK6AV1JnbDQe3z2fk8cbosUiBptdYpPQBztbv3fD9JqmGXxgiUNtFpAEvE5nHi",
  "key5": "2b2KgdQ8zbfZo97xy4PTXGsaXFvqfSW51fyEFXFKnc9URLaQjZThBihDhN3bt39QQg3gNVsJBVGDPm4YBTMFs78J",
  "key6": "33rmzZo5tgAk2cW6PpY29a8g4e9NdAHGXoGn96h5tGVvdWrxjZkjqA2HuA832Gu3ohPMtMTHgvPsEY3Ky8Cdihpv",
  "key7": "47JvGJtGd5XecdFneQokS6MeWpgYoNndWkSLYMTWaLWQ4vutEEo4HBGcA4ThrqCRNfBq6xdwAVikaasLhALbidtK",
  "key8": "3GReei24SCEcmUQ6rzcYMfS7doBdaumDQzXnPukGR157Kz1CdCAq4LofsgZX7P1mbpvNbaBRHmKYRgKYyyKBDW7f",
  "key9": "4S5GLhUStpeCcyu89e2BmAYV2B5hQkJJvUxfT655g3v6HFG5YRwghR88vWezz3pSocD8f7zDVGMHegV5Qy1F6gL4",
  "key10": "3TW1UpqDJvv5iSQ5PqTbGeNaUPrmnGPqmFJie7wufFHCY7GEU7m61nzK596TeHVmLVAvAcJaCZse1XRSu1nsFgoP",
  "key11": "2RbgZmv2zXfLF6du6RwEwmTFjgxaTHWwWXDwTW4FicLNQweDeV3YT5dnYpDWoshqDAobmGUQUG5M3ZTbe5AY9SUP",
  "key12": "2Exre2w5Sw5Dmxez3xmpgwQziBdcXY8s88F1egMkcAmHiWgDY1VHJrpo8Too5mfzwqpuaW4FJiqbE2BEkyZrsKWX",
  "key13": "2DxH9NhJ5d72AcyCwSAp16G5Y1VjEWg3iH9FntxG3CPHLGgHqH96kWRhMA9k4M4uQMtA6SKJKKR71BzffrknNJjL",
  "key14": "52W1DZtEwj7oXhWpQhtb5J44oJSTtY1aiCce3Bz5nHQv3QodwZJss7RExu2WJjeqT1UUAuP2PAZDJqqvxpKiPbiq",
  "key15": "5FnFNf8CQfxmj6sWygN6vybd3Fip5TgAy8tGmKtzXMzLYcHh18kSfh1fMKhptn8n8YaZDogcut9cP5RomTrSoTSR",
  "key16": "45vxncRNFbJiU47iLHDoQPEfxR4okgDh8b3fMRx3vMu9rS8jnJitj6nuzNeEAp8PDj187fjpvmivCKrpFwkXsXH6",
  "key17": "49g9cTqASKKo472iPgxEduboegzWKTmDMURFfDNRAgPaX9D1kT6C8CqjbqX28jFVa774Cm5WyvFpToCUHzX3g6PD",
  "key18": "5ko8jPNwwmommubHgQLGV5SGcxuYyzj3BnCs7r8xkAmRTaEWvG72Gdmed8P51mrZ9VYSRE6MGhKijo9F53J4Gt6R",
  "key19": "42CKwfsQ2RBz8HHHN9bFKyDcE45eosCfoHDAVrqwRegjeETLpjTJMscZcGm4VjXA7XuyTHjhkpJyRWFy5JahgbGS",
  "key20": "sjJQ2AD7uDhNkmxqAVAycvCmej2DL5dQ6H7KPeqs8dobKSbzw9beJJSSjMNjgLbMo1o9p6ctBZoCYBJsKFAKGN7",
  "key21": "5yHJzvnjtRCMUqtayNpfdrEjYaP8eUZKc31z4YFicyzRekS7Ls8CYXKXXi7rjajNMNcXbSuZuSb3LuHmQ9A682p5",
  "key22": "24UsGEiv6bmUkePqnQKuhGJwQegciMj4sbnp9eXwZW1eUzJpAqh1BaC2yiYo2oM2L4y64YZ3v4sRyRNAMCqAMVgz",
  "key23": "3vWvZ9vSJmqSxARZu6homoXauyxTcrFmpjEtMTjjJ8RFTzeXxuuMiQPMMQ4KZaMdeo5ZVEH2wJAoGmsZDy65P1Z4",
  "key24": "2MQaPc6Shn5t9ayixwsFRbWxT9H47JR3ziNwvujEMJYxskRHBbYjqWxMyZCTmSocu8SRBJsPA6upJL3CKrBmPDT3",
  "key25": "5UEjgPyUMhJms5AdPA71Xhwde1WSf6FjY6C2WWXD9UnpdAfDavzrj5pJSSpXmU63EUurYea41RGFThK9DPFPE1TY",
  "key26": "36nEhzYRaP729NpEZVwFy9d1ET7dKwJhbpfDzBgXL3ANCBeg7TdmDM9fRRTrNjsZRTK5m4Ah8DMw2oCumkhpxd1o",
  "key27": "5bqVkKPYJ6utGoU3pDwdf3rZA6jYuXKbEtuEqTSoT99nMPskRs51pPm3AUc9Ax4zE8En63ySxbtqQo94x6Qvp7BL",
  "key28": "4wEKX3D4PxrrGRcynFNCkt4ZhhfA7wQpt1Z9TfH9q4xvrxJF1Y7SBLyTuiMtQKjDkb2FZcjnDZunAhmQydkSsmnn"
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
