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
    "4xwGNSzftYhP78NSQY9PKsSV85suKmXj4wQK8ajM19rrcnQQQQdTg9Rb7hr3XTLwLnqUB2CJ44PVt2uihGJ4zV8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQzCGZnTSW5DaL9pucjsTPcTJkjiU6CtfnjL7sxcPNvt1gdS4GG8jogVSHeCkeprqhNhfeCozygbAYbRC4sQCy2",
  "key1": "4aTos67otgUfaBdrAsCS7eVyHn93AZd9DEsFBGd5oXxVrP4Eck1nKsc7hMXPPVoP6HT3k1VgCZLzYNrz8X5Zp3EQ",
  "key2": "4Yt6ev6EYBWPmSVfuAD3rQHhtYmm2FvTFg5UtGjBPQQbzYWAfhL5BoSJE4NcAUSJcMbcxPAyzKuNVxo2wK2gutov",
  "key3": "pS1UQkhGU5F3GWesBZUagHtuKCSqk7s5wmXQeTZjKALixRhvpr6H2M7JNHPLFKHvux5T3VH3KLgSLwQ5ZHtGM4p",
  "key4": "4FVm3tWKFCa8dMBAweyvrHgxz5sf1hUCF7tJPburPbxBgQkkAR6ixxiEXsm9GvPZVmyLT5MWC42W8PrEYz59u1RA",
  "key5": "2wS1AnMQ7tNKigMdVMFtQX7ngsAWj2L3GkDk1Lt5ksCREdHpqdduUH8kr5SbuyjKpkWSbEq72pDfHeXoiBDy3jos",
  "key6": "4Sf7x97MZjnKQCJSNC2q42d7TwsjCjMz5PqasYJKkMFabFukWirpp5ZaEhj3Pjm1tank5Jz2eL7guTnqwNe3Fo4F",
  "key7": "3NfbdTbiDMd1eMWH9V2tAgJKqV84DFDVmWRU3HYUFi4YBGWAhqqD6j8f1YQLG8oyAEQocbYkfg5pbmUGWhpz8keQ",
  "key8": "514v7CrBwiLzVUUtZgMRP7Kuz3ifP3d9wGEX1LkuVjuW6oo8rwdteuFRnW3rMakmTKZzLc2b7ctxEGrociTAwH5q",
  "key9": "QBBFW9tHViM1Cw1hhStneEYLf3AHBm5x54pz2TL62zGxgGxcFMRNSqBYdS7VuiZRVDve6jZu6JJjt6oYZKSBunw",
  "key10": "4UmfxqUL7PLYEnmkp9snxDjCbUAWzzzfxbRFD65hUzrr6BmRfFj89DLhsjnV1HySeQJnVDDECCH7PySfghY5iy5N",
  "key11": "5q3KiUAwM3hBWvbi67cYzgqs7q1ph9moF9nvcsoux6urfrRjzkUusMx4VccE6kfAD3sLCJCpTpavb6pAscDgx4RZ",
  "key12": "4SC5Vct1oomFF1FRwqxouw81VutvWZMRxzRPGZTS8H82vD2J7EXBzbX795kCEmjDUKz41DsiH8LbC3qCuqdoyNVg",
  "key13": "4VU3YpGoveHRhi4Q6jP4FFngiKh7TY8LHbCpzPMmzFKh72oDhEctpQ9QGuBuo6mSQvNuwT2AyFQkh9d6rcXFjTNu",
  "key14": "2FtZd5G3Nw9nAGjEmjtzWPhHY53ET95AHpy3rmsd5F42pQNbxkVVhwx3oA5EfC36ToJtptQ7gj9eyQDcHQW1boZB",
  "key15": "nz87LsSRRDGhX8CfXbEd7FJfLKsJr1P5ADdMpJdzqNiYAnR5KjL89jsZar47sxw3HmaeudxuDYYBmQWykGSHQNy",
  "key16": "3wtSkQ498W1XpVmhJw1itj9eBEYsgsWZeFEqWsUAwAaqw57ahk9Aj1PcvjWgBkuUmsLAoNd2ThP4jqfN9c8w6CKp",
  "key17": "sKnG4Y5eWy6ZWxPfcBpziAqvdqzgqFVw3yJLjSG8wyQjjyrXkErmgcMZoYZjjJXvZhqPno9VKgCSyhan9RmcBoZ",
  "key18": "29GFgqipZxDpUSZzz64cWmJ52Lx86PY7Q7dt3EG4JbHSZtoif21dBPjidLJUmLgMNfhcjodx1CepwQcd3oCyoG8q",
  "key19": "2Stpw4NsWNUzrWSYrKLCgJtWtJ1iDBMYHu5gX3TfUEhXxsLnuQpDPKaEss8Yv1Pnts2ENhoo1e5re7qVED9bXHvx",
  "key20": "5u9DPCUFPTrtM4FdFBoPFS2m5hje3eEhUvEjpgViZnVyWUoSiWbeAa75xPSc8b5dG5dN3xJ68AU9RRJ1Hnh5x8ZT",
  "key21": "5EgRjqpcVFJGyGdA3oECgMvnknNda1oMEYdg4Rbqs2NRJCg2EQuJpyNLg8CRXhpYkwL6Us8eZswwaAhdEoAe8MK5",
  "key22": "4hLGFDSLe4QF1rgrggf8FbfsqR7e9LHUjg3HJceB2u4d7XfK2xLZPDCaC7jPYAJyeZ24xmVZ5C8jX6FFPUWDcLCB",
  "key23": "3oNEJKwQ9jNNrBXKtBoGn1gE7HmCvBKTGGhLtRH773PGKvXyTUFrCU7yxDhbh7VCUFSEzd94oy1zPiARTEH3rEe9",
  "key24": "4UCHNVgkEKPnFT32osxfXv3imuE49uh2rM2tJ7KxFdAm4TYQhZHGqPGNr42eaRxZE4P1WZBYLrS3gzUBTmQ7cutd",
  "key25": "LjK1VpTkRuwVPds6wDUf2AoHZzuQGs3uwNCbgynBCQRAD8GNXY5ZR4m4HaaoHqTurZGdFwrg5aVng6SCuDr98Xa",
  "key26": "3pdZnGLtMr1wKE5e7Gt7qoxigfesUEDs77mEkY1PByrJNZb9Mkd5RvtcXydqaqDxWjMdDBatrxHwBAZ4JzEh6YPE",
  "key27": "2cDH3AkVBfxRcGGymPe6tTtMzRFqZMP6jnB6kAWcr9FxsBwzoYByB24vSr3YiTJTWWVoevsPWp7dqf1vEfgJunoD",
  "key28": "4mB6Xw1aZ5h41SMCFiCXEdnC1NPivPPgByb4LSNJ8N5fE8KWFCc8oPEa6MviYT5M6gfDa3nBEjU3HT3aqSwBQgdo",
  "key29": "ZKxFqhYcJ8QLkRX2uSQ5K2Srim7zyjb5SsnZrdnNQ1t6nuUWGADdnfuHBgYfqxHFAXjvhyLnaXjS9WB5eBTkGUp",
  "key30": "3xuhH7F1WN4TcWS2fUQVXbmHVfyEX4ZVpTC1EgBB53EBybLvKVrjEt6PK5XiA56zvnSDqra55aVUG1RicFE2oRD1"
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
