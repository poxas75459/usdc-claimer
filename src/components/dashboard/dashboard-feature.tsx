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
    "4wpTQXUit98dReRPtr79izjAkU3gzGGrFqhsaS1B4t4qKEP2NLx5vVdR24DqRqR8ZYyG4QNzuicfUvJ2zCjhJd3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kz2H2rso8gdLJZkSPJHiNNf4i61hnhLb4XmFrR7QLproeSFmQU7bJoEy7cmriwbyMu76fqU1BUPUU7v3egfufS",
  "key1": "5CEoZyaJQYdTkf6pXrhbDqs6sHPEAKwHqTA9tjE9aSdLzMEQEDxDaqCANtLbEG8aux2VfafuBSHg2CZJFfGJpDfo",
  "key2": "hEWKgdCG2VcVz56rUmRVWWrZNzwMJXAhfx4Zzs3NAyBF2BpUbNCBrvntuRQ6X4NUow8ABvx8b7pV4RDbPb8PqSR",
  "key3": "4TkvhQ5txVZCPo69rgwSorDdPxfMpdj8Rf64iaurG8VQwsriP6FEBm5ZNwzqQfe43QkPwmrwZ2yjSWvukPwBkSon",
  "key4": "4ZJJD6jsdQbargfdCakWA8iDV5hfZxXDzaf58bYpT7zUjctRWNJdV9sJURiBzVjshgHEtQzx5NeQ6WLn659ZgyaD",
  "key5": "5Bmj4uETBxpHHNdUb885eAHDEyTr3PUV4yD3u189z4fipdp9YchXZtDynULxDArN6ty5yjVRAgq1J4TaDXVugVd8",
  "key6": "uh31XP5zXSJbaTgD2vn4iuuNWaBio3zuz9DxpieCz2ejA2PXFUttLn3s5qQxhBgwEKiG93FPq35mE69KkKoG6YL",
  "key7": "2YYaHEgGUyBZjHz2LagKu77qVuM7Me8XRbcmLbfYxdk7AH9Y2BopQS5U4c9sraFp1p16eQtSDXMfJ4u6Zv64gDhL",
  "key8": "wURjH4scvbBi4txQNYczuSPpy3tfmQ19JZTjNXDx8KiShpouJgw3WGCCmbtboM81U4RFYkBv6EQRpG4e9APk7Qa",
  "key9": "2EzTsg3NYC6DC3tBGn9yn1zBEYeQeNtrQJ4tmPxb2jzxGfPyXPHXusMTZB7iVVjikHD8KLXwbqSo8PXqECchy1xo",
  "key10": "5beH4mkyNBzXDUYKP9uhWQhtWvBQSK9RuMqfkV94j7s5P96f3Qv3uLHxuhDueXdx65jzXLseJ2DdP4VHLb5m4oU8",
  "key11": "sjke8zbEgyMaeefWMokC1hGXYJ5KXva8KofmbNBrJHKqAsWf8gACuqT2Ywcc83UJVeZBZZMYxZKWAuw8A2h1XkT",
  "key12": "61cnH2PTgkmeXTkCXJB2dGaHoKHjLU7jTZP13HzGpC5xu9oVNMmDWyJeQdLjbZ1pmhixyN14rJATWdrzwfwoJE5q",
  "key13": "5GS1XynKLoo6oA2hmhJBtsBQGHEzucmnsd1EP1AJfY6ZMjNLuKHdNSnu6umy7ftL33tu7g6M8jZeuxs32UdCbm2w",
  "key14": "5KWMUue45mDxv5jPZ5EPNBmshmG67Ky7wgLMicsHCZ13HbKPWPSuLJu3Y87Kt9VJvu4MfERujrUqN2apx8ALJTUM",
  "key15": "4T4ExYvcxVCsHMn9QEsxnZruPPfcxsHMuq17aH3seketge8tnn2hSn7nuSVZHrUacdFxnTkmYveGP9q3u58o2Pyw",
  "key16": "2mCkNGNhkf2xL7CuRKNvJiE7XEeEu1kGzZpp9h9MsTEJRwdsDMh9sL4gse2UYmEvFJDEGQmyRd7jvGXjj2G4ssfz",
  "key17": "37PVtEMRw1ScRjfgTEVnmn6YLYbvVVGta79q7VFiFd62864kpsU1byChCDzTjmtSRENNLbJjsxBYNnavrxT1agc1",
  "key18": "3wF3LCAG8dEXYukygphRuPNacE425BckqALjNCz7ajZGxrZZ7UymtbUX8gEdKYGvnjTa6sjGnL2Bf6v11oznKLYo",
  "key19": "3KETFSTn3LBrD7do4xGVYCeGfQXifso1ZzJyKtXVZ3gX3c23RVrDYRzDi4CAkgeUMHEbj77nHxu1gSKWN1vuECUK",
  "key20": "7SdRHcdt63MwQwBHJZhkh9LrNQcD6JBEkPNUnikYsszGmCXVoZR96N5xeeVofmQQuhPiupHaM8BtHyY3LPfKeZs",
  "key21": "5q4JWymesJAaf8yT6AfoMgWdAcAiHsH25erbg2NYHR7nn72fJGesbiT2z6RnKQSFCBBiQ83Cs6RovTEkCgKgE7qQ",
  "key22": "2coAAVxLoSxXC5zmbyDVrFXieMMKJTcSdL9Y7brfxcPU9shqSYU6PxDMVWkREJkDb6DuX6p1LHf1mdxJPt24vKEA",
  "key23": "JYjqZdxfoHpfjtUCqKvCMG6K7oHuF3LADPjJRS6Gs5RBHcNfLPyEvQdYxcHTSj7BiDBPUJ7QWUAgcSCPpwJUPo3",
  "key24": "2cRcTrXapZkjucnRNVt6eBwehZY8SHp4DatoXGEnL6ErP5LhHJe1u5iZugUC6sm9KHfcu1DVxejq8LVtPSZYVkjj",
  "key25": "5fS8tLS3PtG6W3JivNLpyVKBXc6iXQgPrmtVwTSqUNwDd8xzVTBDVcsdMhH6oUEQuanXdPMQdYZiGrrGuD4TLG22",
  "key26": "2xeGh4E1WtRpuUL1BLNDt7DMzQ8QXozCyj121JJQuHMA5JvTxGfeat6jfpqY8vgK9w3ziRTjDhwtNm9GDXTxfTFZ",
  "key27": "bH955GSWVeVXuFr8LJL5yTUtGp3qKohWG1Dm9u3Z9mCo8R8VJfQqaJchPgAkUkRZocbeQi365huDPAenKr4P2PZ",
  "key28": "4yTCN5Lg7DqQLHXAaUifLegiPWvcB5FZKfqB13imEnXz5nyJiovkCCucEbih4Ci4CJomtWowejxn4RGvxt7bEWVg",
  "key29": "nPo4ahxEZttQN55vnzSoDfbxL6rTDYdfRedkzj7wiUpBU95hDcX4gEH8DqMbbEXQpkXTih3FzKu1LHRLG5rB5K5",
  "key30": "2rx3MZAkqUEPiczkmHhzuLa7RKMQiE1u3pLo2iXMm4vvg7bqmpbWWgrst2J19cMRskaQVVkf1742HRsMihggZaEt",
  "key31": "5dE6DLLdKJTLT7m3jwwKNoJdHenKpfGUrCTiPUzMBSCPEV1sg8zti5KcpPYgXXXgFmqkzLjPKhYZB9wJCVFVC23p",
  "key32": "a5GPpH9f1aEVtZKn11u8BxagCoapBGoxWwdrSTxUMJZUe8ZamF7zdTwQFQRBQq4mbgxJpW8eBNK55KCNjE7kyrR"
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
