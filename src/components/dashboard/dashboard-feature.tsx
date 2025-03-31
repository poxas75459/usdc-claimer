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
    "4z5uMN5ATnVBLAoegXVMMj8CUDHNTpv3qbG8sksHpXhpHLM4eFTDV51mybSzU14kwZmzSp8FnPmQJzyddANm5eFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HpeSWavWywiNTXMkthyeQGHpTNyyphdRbeM5s51i7wDZXHm6oBQrtu4zDpqzEwM6AR7XxnDHRLHtFdC7qoNf72",
  "key1": "5qtSV9HH9UMekN4gQSNEus5YAkUmpGMtYK3c7usbFNkQvRAqHW71qh55B1WznNcFM5QKixguvzEcCQDxR8B8oX9B",
  "key2": "4DdiTjRoKZryv23BRK97M5b8dSja8ochvtXXsWWBtWCCviUEaSSJ4d3zWqniyqtQnxvctfCn7aRzeyFS5dH2jSGM",
  "key3": "5P1bcWCAGrSauh7iuFYMuh1QpnTLPicJzL5Ks43ATWb1MSRGQaRpZema3tZDq6yNCRgimpzzN9svqqVG3EcGe97N",
  "key4": "62zKDEkeYy8tWZSyNfz59yD1mfi8WrbBGYBt1knWQWX614HAc1Yf8kxtZfdURG3o5HHfJDa23kjFwWKpFcRKMjyh",
  "key5": "5gYFd1UJtJu9nSGZCHR1jmyB73ZEM6WyQGv9VxbEhBREo11mWgbbkwGnVRqb4AukeAYbCC4Tto8V9E5fBsBPBXRj",
  "key6": "N1QuRo52ubNwTrvBQN7wDDJXcg4mYsUqGXcZ8jqgiAF4BHx9EPyaj2KhbwZAd8nFaH34bC3v2SuNxf2WriHq18P",
  "key7": "4mcjqnFto2P7wH3yDj8rFc1jLNMGNcUCGAWHWwPprUsc9ht1nyu1gAiF9FQ7yXBD4gT24dFtpAFEkgycjRETbFqd",
  "key8": "4AobF2ekpUkjpKJTDMNGEvwaJTdFX8uoKXN3XG4e5KqTQa1Y6MmgNbSnHZUcra8oaP1fG9XqR14wQsskkF9a8FDb",
  "key9": "P7VCJ1GByW699aHPfDq3yJWhGqPL26MnAy6mkAg69uDHNUmYoswLQwd8J4MHj2EFV87AUeKk3QPPPEeDtnMFLud",
  "key10": "49SfXHMnyXUfx2RY6TKbkP2cwVe96BppJH2BR5iHQSTB1YRbvqPMBcd7k6Q1Lvn7BPi2x4xuTna4f4tXdUvdVSwN",
  "key11": "5AMVqvY8hgDaEdtDxPNhuJbLt8sVzpp9JfhSN2meUpH9XRmibMQyV9bodCwAmdESb1T3aRVETFYjGwpkFzvyhSpV",
  "key12": "2CEEyAb1NjBNSpXqbiawQcQwAXRFE7CmNzED1ictJJrwv67vYp4o86guLfnzt6YQ69m4ZfECozk4mYEFM6DRZqdq",
  "key13": "3Qo7iD7t6MkhZceu2MooKbQB1k8kLnYciaW9ioHVQaXotG4Z2NWvhTjtUz4hSbHXiqkyns3ZpWcQNe7CtXycWb3V",
  "key14": "32XZjDEZnqTCA84y62ftZFQJXKBSYyKaEkAfnJjcJhSGVMzfsTwMKB8AkiXc31e7TtjsLkg7RPygnijHvrmkQwK2",
  "key15": "579tgHSenwhMSqA1qoPCzE9DuN5hGCUULV8mTKw6MVr5yXkGSVAaXvEud7Noqtepi9rA2gyQcgLxjWaW9zSeYmpd",
  "key16": "2CqDTnWT8i794921Xvf1f8abWX13WmGPxM9fkrv9EiJAx3j7dZHSuy8QoWGJYv7f25gBJ4JSydB8LSj6PW3kqjcG",
  "key17": "hAFrjqJ3Bkuq3zU3b4bzqJsXQ57xcSyNTLcZFVRkTw158figzbDU1fok2a8AyAgU6cgUCWcSDZHo5W5ZNWqkgSR",
  "key18": "5GWd5vmo2mzSXUDvKeZxy2YPQPVSXxD4dyygHFtgN3AowryCUsBnFzpUbHyt7fTsSnjKvJfW3G9DGLfZwkquXD5y",
  "key19": "52P4rWzSutWgn4iJHyC5zU6K8bRuQ9NcMHrPiEpkRWybLChtURtdxuZgVrX4BZRGUucjZmf4JgzQiBZVoc2MzkR9",
  "key20": "2FFcDPuJXVXrALdMLinKJJkYNeX5wfs6fxpiB3QSuqpSWx2gMbGWaCemtdEWbhrMbCo26w6h33njgLKSVyVNUVCa",
  "key21": "4xxXGgLG8EXgE5oNeboXcZBrEW7n2dnohNKCbhLPBwRnjGiN3Ro7Bm7Zk9iG4z2JNZb4q1XkpsoxuoVswLfijGjA",
  "key22": "37oqkL9P9CGA3ThTyQcFZWjdGC5ragMXjUaEF6SYEjqNpFMMbxUzRFB8VPJaSxkpAobqeV4LLFG1ygYcjfC2sCr5",
  "key23": "5PwD1ETfUeSnPMAUN5jhQKh9Y8veuWEkqLZHaJnLxwA8T1dgecSHXvebQpPmdvL86kVq8kwbLz5Ct5bML77LBQRZ",
  "key24": "eX2ukUZ5TJkBCkqp13tUd2ZPxNACza4y21GbhqRQNBG14N1oG4DaFDfcfucmQR2QzkfKme2p44AyK9CUTDBmFnd",
  "key25": "3NJErzx6dWP3BrxxNwwsYsj3ir2BtzvodwVKB3q3pwGuL6wDrkdhmpH9JF9DFhAUAfk8UWVmgr7TSjaAno6g45Mr"
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
