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
    "fCru5Pye5EtU8edLfLNwc9DXYbeGbXgVAEGjyrAUzPvifJjDJyxcdxpVm7naiLLWQT51FqwFZ7sz9Jrc2GYzWxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xNcfZAPTPXuW6L5fjueuwjZTrcyF7vkgPk87aU6bB5pPpnaJ7epAafGKPencMDL25srkEXxoebJvZG2qeStGShV",
  "key1": "29rzJCBL7B1amh5i5F7kCgM7XB5cQsXCv75TY971eSzFv2UB12GPJL6hN8HRYfr6uUzuDrPzBaUSPbJDAuGvTTxn",
  "key2": "3jQ4GGfYcXLrN4TU8sZDjyctHhEvC3JA4Q7cUW8wH2hEEZPgsHTnNLUHxdFFkBMhue3hT852QmtvgK5u1TUrvwm8",
  "key3": "2c5CntunuotG3QPWvLWHJXEgMmw1ftf6uRNDemmdLERGUJbJDE6piuBsLRxXx6ovrSLkpAXMe67bf56u52qQ5Uf4",
  "key4": "2AyWZbK46f6yaAE3osPgyyAnnv62MKmFZoy5sWDinerpXgJDe46zk9fNgVAhwkbSXgLnFBiaLRA8DEKWBctTqQra",
  "key5": "3p7GPjxyrx5yFmRNfecArnnGZKCYujwFJ1XZryXaVPVzRqefzrnkHVXoofu43EUUYx86aRVS1CRVK8ohzjXZxBpV",
  "key6": "35ZLhiaEagqxSp16W3bX6SCoRfcYxa8jENi6u9dmAouUSq74E4tYGPnePmoT2ouSqyKCG1gFCev45LomWCB2jbi6",
  "key7": "APTyLQSuaCpe9TqmdxCX9gMj5xX2L4p4Zb5KsvzkrVeJBc6hU3xSBpiRyZDRVDswDViqVJmHLnvU1hJLEjSWbX7",
  "key8": "DaDCarkqWnbmN1B1FJbpYPw4L2dqiRRBEMA9FsKf8vSioWtkSDyy7Q6zc9GxjQggN3nPRLPf2tuL7bMAZGzLF4U",
  "key9": "389WjAXLrD2YqB1ZhvbJW3GKKcKSVhheRWCSw48wxQtEZYQKfT8wmu2CDYvMY1Ti9BeGqdtDn12YPmkWcajk2pWn",
  "key10": "3jBBApq6iTWp32nKR35jey8gxoEYfa9qnM9WkULDETgPbtLX9YAAi6zbNiJTqzwK1USi4CvXkKkTPnXBJYT1qhKo",
  "key11": "5HtafPPq5uSiMfcUpFAyW1SJfwujAodJA1WNeMLvxaTtMrcCxtGS7mMdXegbbEKzWJsQC1FysRRUZQ4U6JPZXfhJ",
  "key12": "2pyd4P7LPHKyDXGYG7gWtHSSiAhzYTuo7fdgqDsJAFiahgZZK6ZoegMdDLoUcNtjoX1SWuK2kPPHgHSBmSMW4SQ8",
  "key13": "UH6q26sxBGEDQf8Nr4pmMkkCHv8YxpuaRnpH9TvZei5Yhws7fW5rYaFFfiGrKvQBacDAzqgNQDyNdoAEFYDgoRa",
  "key14": "3g7e2y3PVSmsG4JycHVXp3PNikF9YequPEMjWS4WaqHnCbPcUYmhH4Tu7K8zmj6Ly42Lu6dgQZiZQeM8tzvA1vBJ",
  "key15": "2ZbiznCzJztubTSFirqZXD5tH6DbBerMCswGkHD9vfb3FwnRQiDeVuXFUhEhHd5nq6kgViFeeZNfbxt3EMEFsHNP",
  "key16": "4A29dfnZKAP69d13YPF5Ek1U2DiQkmNnm4An7mVCZ9LCBnBmujwXJEmKdWFkSzui78WfDz9Rx2jofJ8R6ULGvEUt",
  "key17": "2YWEHJp2qJ97hGNXqMew23PeDCP5BdhCPLYUc2G8T1QTbRmuod1KeiYJqGZJyHCKdf82iahFujmvEfFqVhUy3KPe",
  "key18": "5CFZ9Y4xsVbg7LKcMbeqLX26UYRDEmAi6K73eCExTU4XBSweSig9ofFHycvjFguGsXVwRPu1u5XgZsa6PnS1vrD9",
  "key19": "5ffE5miEFS2DeE9SoP3QANZ17Gmw5tW2EhFHvfvizdw9RzomvWGp5tjSEEPUGREUCvYUDiB8HWQRM1hqNJ7dccNh",
  "key20": "5cY8aAYkuidELKuV6NeprMZvgyvqhTdoZLVhcw6kzSFWaUp5LVVxLsVn4S7MCGUipoLixb45TERamy7BUH8yndH7",
  "key21": "42YEMmZBqK3dbUiCt1ACPy4okZ1ppAkaR43XqU22spjAG6yMmUJ2xwYVouVPWyL2bTZFpXH5UxveVbLgQyw6o8KC",
  "key22": "3U4QVD4MnkP1j7V2x29y2CraftJrigGgBMVftMvdCGysPM4PuKMdCi29DBSfKdKF6Zq6JacT8L7YcdngAD4awgap",
  "key23": "2ZyFSqmH2sp2cwfbuwxHgbmtkbiBGtbLNVChmoWpzpeh2uNBY1fUTBzjJB41CPSmYA3z49NJRGPUG2DwhAh691aR",
  "key24": "JozMrTezZJj3Y19PAsGEg2haFnRy5ML8gr7Xpd1enEjBmRanyPRwiNL2E5y1bmM5q9NRu2vXs2FZ1uvWSmkEuU6",
  "key25": "gpCjtttf3ADeV2L6tiBMDJzEzBsZR9F7zdx9S4AHFJsKaGtYbnNtVdWM1fJxezUgXdWEHK5dnHwf2e6aFqu4w7J",
  "key26": "WZhdL1ctaJDCbSdfR8yGu2TK9sNr1HUHoE95Bs2PVfDvLNFcJTr7nA2miuoGgAK9GcCsuM533bsjhQ116h89WAX",
  "key27": "4sZBuDUK6hjxZTU2zHpRVeMa8eDLjpLMJdLZv6kUcjVg62BRNY7RuDxd9PjdYMeiWU6uLbKfnnU9GSnyo8TaQdwf",
  "key28": "5h4qfTDFPRmbaFbgYZR717NbZFfh7frDicNdnwQoHeXMPsdJnYYvgvRPVpxqL9HjzuZfZeV5fBJcsYz5wjAwyqSQ",
  "key29": "5ip5qQpECBYrYVw9qzDLdPnaAt7a8Rr5ipuunEW49sy25WA1nLcWRYGf3eDbQtCh3jaAV5XQExQruDXryDpn1aPn",
  "key30": "U4tRR93XSEFjVFucqpHTwiSjZF4EdoW78RKb6mHhBEqetdbsdMkFJfEMwCrgiUz88uJUVtPk9iMaQrXMpoKiCVK",
  "key31": "64SjG2DWQxmSYeCnrdrVW4heiD11vAaUqpv48QmD9mz2P9AEKeJpYqWjx73PDiJ2LAymnynZhe4GKMPY6tou4qti",
  "key32": "2Xp8D3pmbvD52t3AX8gnGUMfPzcQeASuVjeXTwk3CnU4Nhsbz3bHKG8aLWZvBNukQ6iT4pQ4xrDMcBG4LXRWwFJa",
  "key33": "5Ewx4LmVnERpVmNNa95kiQsn8GMQVVJWvpQNovzz9S92o6v6VbRsHYP1a9KHsvBpnZn21znroseVjuBsB3FACxyT",
  "key34": "5owSpGANwB97pbiSdSsjsn3MXZSghPUd5sRjszqnVGYi9qicPBtLdJzhTGixYWSE1vTCiNWb453kYANbdbUscdfJ"
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
