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
    "4197NNdEgVDvhxzQ7r77qcu8V3htoqCYRAqUFNMW1F6n5pZp89PURz2wVfoUKprvrw1EQ4eReT6y7iYCgvN74Sk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QENGv7f3XoRVzMnsQZqZQ79vFzaq7uKVDUkisLCKBdHez1BEkBZbJ6ABUS6TxCzqSFbE5N41UWKeZMjYuPX8wHg",
  "key1": "4GVSPZZ6JXZkYfA43s291TiKdR4CDpJ3WsoB3Mci85G5oGbGbcZLu29rJnYYPVABnF1WPdmWX1adHAGCSDTsDJ9z",
  "key2": "4jbmAeggzLv7s8eFCQBUzSAbEPhAShcKgau4NghqBASZ8JMxpMxCxXGhGijSLPMEGgp6Aq9idhmadk8XPWSjKb3N",
  "key3": "4X7wPiqAEqHwvQ437fSzBshvWYUTBLXqWJn4AzEcvrBwWkJxbD5CdMXwadPU3kM6bMmt7MFW6kA9N7H6jDogcFyB",
  "key4": "2Wrs84z7KCAxbb3YAedv1EmbgcMCQPxQLGCZuXpFe3eFNFmLVeVN2M8mUuCT7ddzoqidCcceExqM3mSZpimRMgTS",
  "key5": "qe8s57WyhEyGjDiUJES5B5wVHAB8t6VSRWw7s4xpPKAbEFJU15PYWsUZq1UX4gkxUir5Zr9pqwnmHq3Xb4o3KNb",
  "key6": "5VeN6Mx6TkyZVRe23aAQdH4tGog7W4xEViQyfpbhA39XDmTDzrBRRjbiPvCXVw3wSth7xxaMCmD8iQh92qMuRwZs",
  "key7": "5fjgndE7h7f2jA57ghtrXGKhNdTcbTAPeV4LN6vtdk4csTGz32dy1fk3S1paC18FHPQvagX6Yg8b6f9G9j2uyHhN",
  "key8": "59DYju4vHjdqH4EYEK52PubxWqWRM9JeWC86PJS8ttvxQMGCKGzzFGy2kcNzgLMWwagZCw1sBcA6Z1hWfTpNnQgB",
  "key9": "5JLt5pFmi6ZsKAZismo2KTW8432XR9VGVsmPhowbTA2VMFfp5ShPVPR1XvECRTWQWmPHxrsmJDfySBeFhqeudn65",
  "key10": "48NfVaKJBQfiqegXmoMg4nB4XMbqut4bvmcjkWKwqo1V78syFxbfrbdeSzLrANiv43g6bemFc4SirTcAtrR6j51k",
  "key11": "2idUbFr2VdrWCyNXGEQnyam55jeDCzMsVG8PDEJiSiGbbWzmPGuQsdyJjpwNipn78AWwXtK78g56bcbTRhHd5xgm",
  "key12": "Ws35joULe8JPtSXm3xrRtQnskUmdMCg9cHX2U5VeNkXsE5Vac6kj77Y6jNyS7ZJiAPwvLZU3uBN4Th7PpoLGB4K",
  "key13": "3ooe33fkPZyjdYHjNBixQ3aTxPWp9yGnhfs6fCtsyjEpE2Qo86Q1xVGuggdGpxeNZTEKtVmcmAjaVqHG768nVurE",
  "key14": "2TabH7QNQk9fvJRu6L4uXscyiDn8VkDbk2YaAVoKMaQgGDRo79ycJweyAbgJAscjAo73waBpwJ4ZMtVLNYFvezyz",
  "key15": "465xrbWC1L7wadS5M7LMeTMXF2aiHHKiGSXueVr2rmCeCzxQDixTujaJhQewrfjGioM6Qcct8sP3Q7GgYQFJ74A2",
  "key16": "4ysMva4mLwMWiBgWAmm4pb7VJDo32LEoUMqBF6mZ5fLMehpMuyP6Abo9HNUhZ1Rb2PNQuZxTzRTqLtbnPAoepa7n",
  "key17": "5MMdKR8MEr29RuNpxkjU4phb4jjDJTNRdx4dcp1N2BoQytpW2n3zrXYMVBn1uZ7o38ENCqKo9WwtekDjFX9incYt",
  "key18": "A27gTAapnWP7zqvL7nC1Yvr2Xk1pPk4eYZsdTeuHGycaH6brku3Chwm46LrWaEj526wDd73zG9vMK6gVhnHEpPP",
  "key19": "36GbRNJZfMCBHgPCHDXbRNsHozSg2QY51EW6TgSs9KhfwdNWfxCCnYEbALA2yhjwpELtSGFHgmptZWDAfYQ6zMCv",
  "key20": "2oszZnZKPWHM9NV2i8C3c2VmXdJdySB3CMFoCir4isWhPHjyWnu1oJQZsD8YgzJNAsMbpnWyKrpJCgeQLrp3SbUX",
  "key21": "yLayxqLwBjxVmtxd1kRyWzXygNk1vJfSajAgjvwr6QgpjRgafAPg9WS8uzTi62sSJEon5FtHpn9sTytKg5nSUsV",
  "key22": "3uyjNuHoDuzAprtktSwchKQRcbYytX1u2TA1VqHy3LTqAL6dJbxUuCC7t5WQPm7u8nQnxFNtXsuWKR16QckubzQy",
  "key23": "2izLViSKXG4SbYYz7uYzXy6ZXxUUosxE5MvgxoUFveavCxo31x632vK38YtAhBmJWX9tcy1pGWvJxmqph3Ca12Xv",
  "key24": "5UxV8S61opKWLKiiUJfjTSHGooRy7xRxduofECebhfcaVScHw8RGr7jYBRQeWL3p5fBSzwiREBygSkQurgNvEugQ",
  "key25": "3Wf4twXRjiYWH46fbtLbFXqgP2TLqsUTp1RSknJpxWhkjaFKjrwbuYoMsM8xjVZEmm1Ez6gvZ1vDXdWKqWoiHALQ",
  "key26": "Lzr7ZKtQLNmHRfvNRzzgLdVThmFz8ye9KTcSHzpbehUrKnq24Brk19hzSsCXqK5G9s7hzo39hzHStY7gVSeVUw8",
  "key27": "4izd98Qg3a6mSy2tX2k7TPAn6F2wdWpYJhjdr9ojnqyLExFJnrL9eopweZ3KwosBDsH4ZQeh2fxxkJ37jW66epFk",
  "key28": "3KRvhkLXNJuGGjAQxj6vheWr1KT3CKajkGkkMKMqBsYRn766Lxy5GKm4nKYbbbxrGc26VccuYj6cJBtSQeCVMfqZ",
  "key29": "ggSLGWRbAnwtb5K63HHYV3oUP1C5dj5qVu8FhUhcJJ8jB11nBmSZ42qmTwrSZXWkrLqTrV1LoZx9ntDxhEPY1gq"
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
