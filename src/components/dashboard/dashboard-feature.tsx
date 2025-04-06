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
    "3nEV6MMRpZmHicdiC3fGfs3cAT73ruFZkhhQAAaEDY9sBCcnF4taK3p1Fjtqom31KNzAwpSYapi46TSqG6Burcdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMTkkh9nAeieKT2DXgsHvdRfhsU6cnqxZLpFDSs6qums7WT7RMf63FgLPbK4t8axYm36BoFyFSreQCkeVskxKnD",
  "key1": "5C6KA4XqSuyf6bZW9YAp3KHKgEjU8UxkaKJSVACqaBnp58ZBUV66qxJtkEpsQPeoi5ae5Dki4z9GobVsbn32bcnr",
  "key2": "4wNQprzspSp76qq37GBgtHHwMSDp3XcFQSuJHuXgTjMNqQ872PsU7TrXWtJF3cGxcFZLY3TUkiKo9WieFXM9uWTe",
  "key3": "ymGpY6YNXbZmVutXU335KrBbxQBYwrp5tLgR8X8x5bPQg5c3EmPcDxenxNCtZzxupGonMmqrZigDoTsuPFJUvDM",
  "key4": "5zbKGt6Qe9AodHntNeVk9ThdeMwV8eJQVZyCiGjrJFDuwbM3K7bsdHsCymEHqQ1ukjL53V8UTcLe8dmCa3Di6aLx",
  "key5": "65Rbogfouo1HRCWcTj3SyP4bvB9CEbBUsHGboKEv7RHg28w2Dr5vbvhm4SFh3Ee4qqYbGrxiikYNeYjuGggZiSsJ",
  "key6": "3ETQbsGQsrg1NaMJvUEmsLRbwpry8Pb2afF2tJ3MkXER7V3NKD7QEHXXqdrV6S3S2PVDFtYSHpGox2TGmyADKJYE",
  "key7": "41RMEpVPhpDxgn2hXScbVsifgdZeqozrACjWxAJavZCreErYKAqESGKzsGy6CB25wQEoPERVavfGueLM2kP9ubTm",
  "key8": "5fz2UfKrxK2yJxEXJ3gTastjMRyM3CKsQNfu6hXM4KchLbaApVoApjnQTh8iF3H6dqwrQfm2eBxAJxvPMMsFcbMW",
  "key9": "2SUwS9rnqn8wQKiCS3EgQrR6nwUbsCgTUP1wfEqQquFa2q5XreABCoBRStPQr9sSbDR3EEWiMikkET1AcZDvsZ8z",
  "key10": "24iPJWuA5fT9QdpqCXLchwYEcG5ssd5CU8HWRewpFAeeXmJG6kPf8nujBGZ4sQ7Y2uNKL8rgbEMQGVTBYMN9Svsk",
  "key11": "3acbzTn26rZJqDY6eLYgnYbMbcCzpznzX5ptaRYb3zNPctZz5cpc1LyaytZZowtepPf7Co3cQb2CU6dxzdhKggg8",
  "key12": "MvmGm4MWtrkTKnbFu5QdEDNH3HBaFw5wz8sdaPBfh3nwMVd2eBqCmKa9CK9ifQG8yQPKiRYJ1MEYwVQGbu435FJ",
  "key13": "4Bi7jfHmQNpF8xp76mgynfv7LMUZicjoD8GJgBd8e4edHxgE9v5ftUfRi6vbFDCT974rNKhncZdTi83BRLGe6kwy",
  "key14": "4z9zT6J6Rz87s6AScjQy8dfDWcZjUMBmbtWdWXuVn6MuKrz3dQRjnh4vS1nEKNdRpccJyzVH22Y7cqC8FjdEAjvP",
  "key15": "4KTZqudPdzzkjvNp2gEWMJ4qAJJAqLGNusKkRgJZReSDoyKURjX5Y6Hiv8jR9s7cL6f2tembBYPUBjwXN6j3uBUE",
  "key16": "cj5JqCUdvJCQ8b2jjKuYshKvZ2qMVUYV8YAJDMoKAAJHAaJjrjXMreb2SsTAxMUgnJQieU3ZCfGKddbiLJDXtPP",
  "key17": "5oq6bgSdodf8vRGkPWDS2r9PNNkSAYkhBmLSEHeEhn4wDCUt6wp4QUYRHFFjNwPDmfmn97Qhp2bUoyJR1fAUaBR5",
  "key18": "gzUR5JLnXBu6h4sxH15mgnNoH68h3WMfo4nCyNo3xDzjX16zB2RUeqYScMCeMgMMXdiNdE4c31vHps24irz5qyQ",
  "key19": "4JvG5YhSCkkXm1amKYpWFrih7gsRjEkBz5Svrmda2gYyGGbuKx1iMHGz4mMVDdkp9q3mRGyC3g6FYM2dDvAnGFqj",
  "key20": "x2N2jdRApwQd6bCxiAUo27xzWWp4tMyQA2nvVJe32QfRWTm8cYNUtvTZbXhdzaSL54KStGQNCdykfztNUtnhorF",
  "key21": "2Q2Q6e2yuzQyS7fu8p2nEw4Etku5kQBt3fz9Y2D4ysnzgVj2rfJmrLUwzL6T2GUvEpE6efWpsz364LwdY3C4zULH",
  "key22": "2kcegHu3Qy4T2veWxo8dyfKopB8uzSDca1WHZ9CPg3hDSAQSYc6hH4wgpByBNN3jnLENTZsx7xAeA5Vr7uSvcyVf",
  "key23": "5oTzLoJRVdUUCMPSGT68iCyJVREkg9ZAp5g76QtoPQEHAXYVDpY1oruEFKpnP9j5Yb9hNkiUCHqzhWxNCK2PKQSn",
  "key24": "RCaVPnCjn5XAVZvx2hRxf6FWfoyzdaYUMf2BNQdHqJJRLP8aU1EnQ97hVE1yYJnGUAfgGeUq11odEqGpAszPyKK",
  "key25": "66xG16EXxNxMoUhqhKos2KhBZ8wJrejbETGHeX8Th4EbvJa6jjBs37pFeNrVSSYD2daZLwKwKPSiDYU1JkJtPFta"
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
