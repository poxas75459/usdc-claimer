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
    "2ZRB2utjfrYySD31iCTaVXFpd7KS46zpyxDtHTtzGzGWrqFMgG9t6abqNys16ggtHosSMkbFJdjwMVVVnRBttM5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593TSku4VvNTE675jw2BPc1ffuX3dvHznBY5JX81UHXDRs5pmkqw9YNapEL292nvKY39L28XpRvmQy2H4EEqUyfp",
  "key1": "63haRdRrN2AuUq31BZ9sHzRa9aMACxEgGpZKVvWKxrY1b6Bbf8avacZ7g2sH6KqJYLoRTucXcrtScDG5ctRmx9jb",
  "key2": "3S4WDQ3xAsQZsqWzYwMr8EhySPFXDfkKeMQ1qLRhkVnXu6VLuLjL8b8sFpXWLRDRthQZUrDhpqh3bDCGsGYYqM8j",
  "key3": "5zWZD8vwJB6UHr6puNGUQcjAP7KNoCA2ebwH8W5nYXcnVaLjfTvYa7oNU4T221TSaZyFeYj7p8xTMyKdxtF43dFR",
  "key4": "2bUuDgUKCqFWtiM4ugRm5LtKBgMVbA9tBCuDWJTKfw8GVuZEx1QCiBF9bUEJzu9KXAeWBS9Yx7zEWUhNz6nE1X8m",
  "key5": "2E7T3osBA2PNTQ31sjy4HTgWzSNckyAjgT8nfcJSNDVTdf7NCrvye7R5KysnNUKCNsupsLchXbFXmUBjBmshihf9",
  "key6": "56TMxY4B7RSqbGB9JH37mzkeEZRh6JguTL8kJyNzYW5kQvUNpts2vn4Hvn8vuoXuZBE6A3C6nk3nmDJquMPf5G84",
  "key7": "3yQaJoKQUjoDvbcnpzfnwGRVs1ad6xPdcFS1GsMgWq1jNuxfiEi7mne7mn3P1GaYjySSdr47hs5Y1ZFrUend631q",
  "key8": "2vscfXzjDeFmraQT3y9vZs6EcKnLWNyKNF8J6Rt353u1JzPv8iQJZMy4TJF8ERhFzmWwQim8o1cMmwY8NvoaeYiT",
  "key9": "62W4KMuMAv3rxrQgV7njJrA2PDEh6f66EZ34Jtjdt6Zoj8HTemqY2NrVbbXAvVSkMkhEMhKFpugKinaaj9ejXY9m",
  "key10": "gvGxUkjiCATfRYiT5me1qnwHayftqoyBY37NPSyre8Dc2YdqHcsMzHMVenP7iNJMxF98nhKxVaeRcr53xFgjVqZ",
  "key11": "jHpxKWnyxfAD2y5gcNz2FkskFCLUQpHePDXRRwH69q49FmSW9QGB8P5tvQB75A4uNPV9j7hL86yUEXuirLznj7S",
  "key12": "2FAAuSBg8Uq2L71qY8b1TZYeSePTX7AFgudF6fJxCQv2nmm6Byk36p1eRnsz1FydtyQdLzpZXDFELeAgEN56t7Eb",
  "key13": "4ciVgZEKzs2AKNMmCFBYahgx21rqLbusBeCFnRjVKtMF2hLXpqnjteRQCHN5s4XpFLTpKoUdfxZFaTD94CydB2T6",
  "key14": "3j96UM9KJpgLy8HSDm5Vfx5DZoVmY6RtFzqqUDERUkyDGVnip1yk1nmVXRCZF6sZB9Svdw9da76aJNLiGn68GSFT",
  "key15": "3Su8ywnbA2jifur1NQ87XrYVPJrieNHwkfpixJ7RwYDH2Vc3o7ZYghtsmyAuRrLqZXFewK5qYWwV5svWgRRSQ7Af",
  "key16": "3sq4AZBGGk1p9VkEe6o5nMHkCSRGYmgro8LKQdYDWsBFw2yPDJhvk4W2J5LHCg3qLFJHhcTrepKrVtSzDdA8JLjL",
  "key17": "5tUdrxDMKW26BgMQpdFR83iiULxT4tgSeT1WJcGgH6T2UXtfWE33jhNqZBGAPWV1Aef5BbPsBmoVKpumFMM4zQDo",
  "key18": "4QjHgoddhLdDvk1mnSUGsc9r5mbBP1ne8yvWzMsEhxgKXiSfUgNpeitaJYDjkjne1UBP5Uwd8xC6f4CFyJ2AELE9",
  "key19": "Me4XLfCrZiBYDYBAJtXQLQ5fnmXWbqVyqMUB5T4Hxb55Ku97qEmK76mb5Qhn7yP9AhGZvrjVRtFGP1hd4TkTzjb",
  "key20": "3J13QMu6gvUp5QvMJhjwVbPeC3MzAu7AihGpAD77yKbyyLgteoUMSYAjRtngEkNnGw1Nu7ondGyvga4wQ991ZAXa",
  "key21": "2bkuEU1bgEg2ss87qG1JbKrEhQB4gp9YdNfApBW4enZnRNRHhYR2dNF3vacLe4KWmc1jzQsFycU3D1tmapCZtRVp",
  "key22": "4HqsoAmAYdjedt8vmj8T4vyPpASXUFggdJS9RJKT7vudKPAedWjR2akWVZ4R9DQQr3PFvpkufhbaX2emE4zgiD3G",
  "key23": "4pXumfW4GqNwQbNLLkjDbTiSwFxv4dZ4E1czcFTGAAztu99qfJG5xtC5L9Xx13BNke9UA9KoRzcq6EL8qsMaW8BK",
  "key24": "3EEN7GUmTHTKnyk8QPsXdVDiqgUoktRkWAuWM8sfT4LCpnnagKYddCmhKKKv4BLnAEGS5JMhgAsfZcas4hF8XyTH",
  "key25": "4qoynJmjkCEdpXhuXBPdXdUt3RBsNAR6zLrfozHZKeVMKfhheYkecR8WQzwXokVXodjjUr2BfLUhNiV7hLhbrxaP",
  "key26": "3yvE3pg5gW4uM5Q7UPa2dF9smtRkM7Zdzc8yqr3WrX3FpBbNWBPt1a2dVZo1PnbWaf6rKbz9odHJq99QUGGuQy7V",
  "key27": "4kDiNzU69VAsno7qYEeu9MXDB7bm9sTEBg9Gp6w5Rpt7JSVWr7ERCkC3DCkmQhbVnuZ1YwwofqyEHH7Gjk4RiYey"
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
