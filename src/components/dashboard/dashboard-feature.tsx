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
    "4jEVWBRogDxfGsxPVbYfZnRJq3JmavG4Si64tXrLaEagUSH1rNc193wRGxSg58pLQLLaa8Pp4bc9DYcKFV8wVAw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQTMdREchig1sMyzedSLZ9PU7thQ2CW9K9HaUZW3EhMoEVFbkX7155Ant2eMajisiVFu6my9D6auCFzGSkHo6Sf",
  "key1": "5mghfsiQirz4DDfKb1qbU7bLpGo1au1VGi61zx7FAtAbrVGughNwumNUtyCsnqPKVHEFpKiHTVzXmQoc23doKmVV",
  "key2": "4Fd17i7z1QPJBuFUDSzA8wXZyxo9UkkaPFJTsgbKNdpLuLfuKHBb3Qbcayu1krj1ijRg3zCekkPbsrz9ga3vNiG9",
  "key3": "5n2fuPqG53SDDMjdWcg1CVNGwq7Q3TaFPQ7YmTxK6L93FZXvKZ7Ez1t9Fotcwy5mybYBZ8dNcrVPrHjtZyRKrGmt",
  "key4": "3AZvo3r2d5bCxhNxkBnwnPnDPqy7d5VvBDuUVsYup2mNHPhcmKABEKHdVnTf3Uom25hWoa5Evit6hLWNZ4P2SZjW",
  "key5": "29MRnXqVyRLajx2k338uFmeVc9YgNE2sHmRfuKgRZs9eMJYK89xHKXRBHroU4Uf3esJPWh9uJmojM4Ru82y5bDkf",
  "key6": "2vN4YbzkesgLKDzdeJ2j5KoZYiiho1c1VY9XvsD6ojibt9LggcHwxMB8mshVGAscSuLD1rxG8VeXRXaH2qeXHoi8",
  "key7": "WjmcScPoNTmZAML3Yv6CawFkNiJmoXNEFaC1xf1i9TQEQh6cDq2WV2uos8BgfAghiUQnc9DCch3jLCediX4hUrz",
  "key8": "3PvtwZtdZ9WFBsoKrE9yNbNhfFsiUVU9LNqtYis29ybBN7PLzdm5zcAkFD67sJz3HNf6EEa3q4zqg8GmYPZ8xHAo",
  "key9": "xoLBk7mhN4B6WBVM2eADU2Urj1QY81Fw3NwVCeDd3aykEd7gvuJzbPrt9Cg3NvsTvt8hxUUkFEDpeuwfyLbhzZ4",
  "key10": "79eFxZNhv5pUe6a3QjPUW1Weov64VsStWmWyFKqcdKmXzsJiPQii52g2Lx22cLUJbpV6RWvNcL3d2L24LqczyF1",
  "key11": "KEDRSMhJiSyNyZRfZ6zkL3sLaWLdMYJdSNeju1CZmT851AwP8MmYNXyKJgqKVCcD6xY4SYNGz3L2fUHFB9yvzVG",
  "key12": "59rucoezQhjGNNnraJ8qVU7XQ7w2y1v3MNrL9gVMTCKnREAmYTUy7kbVTZoCcRZdrbX33kBg5vq8Yx6oGLtay5Um",
  "key13": "4WqTcwaY6htFTG9myXG5toaRJLPi5T1s17GoPjQQJbrdJfZ3zShrHANRhDmDhz3Wa5qn5iBJ2iZayoAHnmP7N23W",
  "key14": "5Uf4TiB3TYAyK2wz7aU5WeY3i1LgbepgpBNN7qs2E2Brs7jzhL18fSBFQH49BHWTAEUntc6DfV62UbeeaSTaR9C3",
  "key15": "3163whbdAkS1UCgMoxjFPgHVTtmxg6Rz2JfpwCwQmataJ1oyK9bKYmRM29DCeLk8zdt2unB9AeGmYedi9C531VZb",
  "key16": "2JB7jvR3HLt5FkdXkFVCiX4REoYzwkJAgxz1LWy3sKCbEGskHGaPZDBuGJwRnotVeedu4PAssV86bL32d5gTxuAU",
  "key17": "3xEuLv62uG8FDuKSQjaCp75P7MMmv8ELodqSZNbb4zDMoaysbQkerBnMtyjhvBwLcN3ixC5oS9KefF7D8HsVgZRp",
  "key18": "bVFJHmtmJ7m6f6dtGxrNWV3Ue8WE75Jpk1GWdbjCAW7MrUnp9uwzvh6hrbdRSML59oqYiMuQ5SDdUpLumSGxCxt",
  "key19": "2LMjwDr81P12u2Wdhiobt7dk1KUEh6ETrRrimGUnvZjWG3WMiS63iC1pfdDQVR1UfyNqomKyGrJFJtXMXx292eA7",
  "key20": "4AjRGHa4byGd13YPrz7w888xP2dn1BTp2EPmZFpTmCZE3SD93LWLwwPXcSAtrTADeKz4sJ4yTjMKMDKXfNYxLsLd",
  "key21": "4ELnKd75x4JxNJxXZQETtGNhZa5n8uMEec2xj72fsKeJxRv41tMD3uWY9hXRV5rog7pwnvr8u6ozxpQ1tPU69ZSL",
  "key22": "5nFyupJv6GHJvMNa8fUZb5H7GnJi8GqxUaRjjb29RTCNKuEDvSoZ7DumGaHM5tpFB2m4dAeJbF2AtEaDW2dGv1Wm",
  "key23": "3SGCuYXFHMTGmVVsFAqJjRoTVD2o7fU6oHk5JxvsRkL8TrWujLrhizXHzqamMfvyjHxQG7XzyUsNeZoRp8DehGLD",
  "key24": "4iHy8EabYZXRTrKb3d4PpwrTqyqskKR3CBkYo8nKrgvo719L5uzGJBRYaq3xkDbgSa9hqUxfng6u1vhP9RyhdpP3",
  "key25": "5RdaWuTjs9P1ARfgCfWc8RdbEBA7LBJR42q9Se3VRRUuFkuFqU2NrqjZL5qfbecfVcTjVjFjsAuwNQsPwfFUWTaf",
  "key26": "5ygXgzRcfTzCHNxjZnidoTDuEBy3AdH1bg5yAHSLS5jfqj5HZTp7CMywFch5UAn41f9uNDUvxd4vD27CDTCTDe2W"
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
