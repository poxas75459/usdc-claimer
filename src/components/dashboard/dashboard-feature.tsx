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
    "5n3rVHY2ijGFX2L47Gt7PDgWJ5vjqHDHhhDUMySYJkvSGmBhC4VXvEu6uNCvjScdgCtbZ2zx2CUKH8Ufvwywn9pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftjkzrJTtnPmMEYS5absc2jGqFLQguiUTEKqyaMfhTyNGUMSyRyNHhjgc8ceMgtdSrNAKBdr84p2L6kKgD3uvES",
  "key1": "iwMHirTBcbuPQAVjzm4i12RsJpvHaFqymkvywT249wePiD4B9hMbouVXiTR2Xh2nJo5UqtZHTLGjS548VaCrZ3N",
  "key2": "5YG5Vx1E17pmByrKHBmT5W1gsHCvcojKfY2CLnm2p59bwNrn6R8XZ1tGixtBASijVccScwf8GFhS7Dbb9pBH4U52",
  "key3": "D3oZ3sK3F9wFETSQPzUS8xTAUWEPRYoWjAgwaKmMspxb8sb7F2CKfToDJD4Ny3Z7hQ6Ryb6kDu43y2KFSXQKFuR",
  "key4": "2pnnp3sUiCAWEkJTCb9gANQZVKznBgYxhRTiix3AMMeAQ7cw9GDmjn93AD36uxSGQsDBVra1rQURFvNwgNCiWAjg",
  "key5": "MJPL14jTbTo9tDDt7eQwcj3m8KnteuJ27W1U1bbbVmvLdHknzB2Aay947a97ioqrxfDBXFLsSWu2KMCoko1YZkF",
  "key6": "3vxWhPcpgqcgYVRrmBY9EyWhURZVxmGs6pZqykrFTs4EePtbwEFXHUkNytUP69WANR8zxCsVxQDpC2C8iZswFNr6",
  "key7": "4B7JkxNiL9sV4KFqVhKu5u68wA9chivmusY4uYf8cSzdYmreRPT8P31KLTtvWyDhbtEPc4rqcekvNfvcLMX15ior",
  "key8": "2WdsdS1stmESEZ6xoep5odeCoqEu6GKJgvUcMPZFX334DtysCR8bKfpSGvgbxFuUBQcJFWiDniA3cwKaUR7aBrfx",
  "key9": "psynssqASyszqJo1iyQXRSGh7Ubbj6v7L6v7bhiFHZX23m3625zV85xYMiQeiDSb1J5oZ3AwP9bkZ3uo7SPtaZx",
  "key10": "2AEhY2FkB8jjkBfggWdCdN17prEdXAyj69WQWnVNDZXkMhPHzsnYqhggkQ5G4zYgaC2ykRV716BctA31TqeMQczW",
  "key11": "45F8ofE7wLfh6kQGuSg3sp41PgEa99yXCQNhTCG4mC37otBWvUn6UN71sF8EDbWDMrsfqGYXj8D5dMFNmBFQvuMr",
  "key12": "3zmYX8sQC5Dp3Ph5B6Z4AYmV5vNrYLxEQLYz7iGrmZQiPaiBAWRxEG44jb6ZfcyVU5oJ6CiJaHH49GAapWpG8fWA",
  "key13": "9FUZKFLi6J12njQogFoqqRFPUr12oZ1Ah1gzpMVD7Yh45CUNG5E1PbsgCesnE4ouc7tey5SMmiPAJVFrwzFgvbi",
  "key14": "yFMkwpmb7RbKUFsy3xAt3p8KJqdAVbnsTm7XwRXeW649SMZPeJcrnQbx4K3J66Fzyg6Zwgsgk66VRaY1tN7x5ib",
  "key15": "2wgAxrG7JwHiGM22XtvQUaVquKxdAEAYcCGxafdNxRLAFZ8wAZmyhVnLEHAP7LfshhWMuLeBEDvBryojzECExu1q",
  "key16": "4P2fS2ornXfSr3om2QTep3nKZtQXdWyYibZU4ues8y7VQEbdxdai2FRdadq5wmB6AdAz3uhxGcGAxmdmVF4151E7",
  "key17": "2HuaTd6qpg7NuQEB6GTmkL9P6dQQ1aV6DfZCTCfKMp7ryFD18b4wnBssrhD9Qj3dx4L5dSYybRfxtvVpf9KZydjy",
  "key18": "2aTfEi8yp4gdRrTmjdP6XU6kkoX5iCEyXgT4YK3coKxQd9tPSTb7Sx5icPg1vWDkZiSvUcK4RvXoEbcm3jGWy3hX",
  "key19": "37gKDbLTAzuzjwwZiHLzsv2tptQUTp5CmTGhBPDJytmGS4j3Qc79CShk5bCJq2FtcD8B9AE7GeYVxffiUtyG6fBZ",
  "key20": "5TeLcYth6PMk69YuzbsXg1MCizs15JMZ7TuYr95L6rzLwXadKkeKvUBZy3ZGWUgQf7NLCCv5UYDRNhLpAmyTSQHU",
  "key21": "wHTt7TBtDfnJBR6ZLuuf4KXRiC1L33BiNe1PicvwGWik284XRt8CU4xM5VSsY1YWJrVpxB97A93C1vPHqktz3Ak",
  "key22": "26UcNB2ZMgso5NBAXaPVu7xzPvJ1hcpLnAqx8pnmFnxCavRmSc4kJnBwmWzxTeAsLN6mP3KbFQjCTn7AYzMrEoU6",
  "key23": "67f9bLkJWTSCA3nHNg6phSoew1ScDkviZoJ54bXcXzKu7ceaU8KvLMf3WWvzod5X6Wog4weYR671Xb2ELpA4fXhz",
  "key24": "SwdvnWjkyjsmH5iEfgYz7gqXFwvknubwBTgBkPdLmJRc1mHAURfRvncya9HvgFWxtTadXXxrZJS48bu546yh4eU",
  "key25": "2ZbFt8fLz4z8suKxkDZu7j4HDfWG34HBH2TXL2arJHAAVAXELE4nQJ4USKPLVVYMYUb3SX8MFeEuzumoAGq5dyBJ"
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
