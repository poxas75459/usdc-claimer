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
    "xTghLUptXaZxYdiYBbCqQNFxKUCMoft24KFnJt5Lzq6fFAqf72vKzWRznuYofJMdtmZVaQisFLXjHQTXajujmtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DcTQnb9pQipuzFiT3SjaRXHJbXWjZ4tArK95bGjnCd1gvsLH2MPXqNCtCGwCfkvdc95rBi6KadvbCem9jFp4J24",
  "key1": "3uDXoeeYefQwb4JCfia3NaWQQdVwhQ4Sn1kdSKatdzMXu586QinMRsfX1xnjSwJxg24botfJN2kXgeakpEWhb577",
  "key2": "4WsxpahUqoAuaUF6PgHLKkZDs7k8BbeH485Tm6nLd2pxNXGupUtT8KCLf7ah2wGcSpPovTpVZfaozdxFmswoW9v3",
  "key3": "XLKNCHN3o8yRKkz9L1RNYDsGvQ34mxyEVFwCvDubkCktELxSyXbtwcxwzVjxMvQdavLoHwVraXzHfsVjQkQx9xk",
  "key4": "2RwKfPY7cuRBovAr6QLhiiUkuNWB6KQGrrHKgMxPax1f76RhNHLn7UjNZHNMuKzxwxGEaCjnegFhSiQKCweL2BEr",
  "key5": "27y63dNaK8QB24UG4C1FKxxLUCLiNBjFiA7n9DdWDdtUxUKjzoZUB8SxhQkE9sZxQ5snd3vjHjHTsoa35JzGhCjv",
  "key6": "2s9AwJ8KoT8u5YC71uYbjJKqtxr2FGuWxpqTsBFmxN3XMZ6Vf32zBYzAZPzUHGR7pFkReGQQMn36XfSEwnWLz9YZ",
  "key7": "3sk6dnZyUSV3dvkaSZi1UbcGew3u8MnDhq13v21BKjj5xweBEvG8nEcpPsobZDPaJ4YYZJbNsRd72rhahyKTYZ1t",
  "key8": "ifxDmeShYzZc4ciUvQRHY5hP2pKc1quTB54SGv1dAyzL4xVUWf7HSbsn95GMgjzuu64q43ug3i2Ez4w4eNwQggi",
  "key9": "2uyFSbDRSDja2LjavYQ3L9C6empYdo7CCRPNTq4WvULHhz2ZPqXkpRRq6PjfmXjZYzMNRGzxQCwcUxTgu86LMvw3",
  "key10": "4S7qFrfnkdoaib9t114j93oSoyT5V6jdVgZBen55KXGvQSmAyAXAMwJCVb1DfrmznZyLd5Hkp6Cx7RvSKJAVc7eZ",
  "key11": "agUJG3YeL48XnmTVP1SobrfxY4gw2KTXKqQ8RvwqNr8ybUVESPX68iQmeAEXziiww1o5oMDjzMh6MLQkAFqUDn4",
  "key12": "4t6hHUk7Ee9cwt7jfMdMM6dJzNHvndTfCweGYNZhmmRkQXfFruq75H4zpNxUY64N1KFb5SBsN5RMH4pVvrvdxPnB",
  "key13": "WPpgKCmtW1JXjqK87FDE4oxZGLFVs5AthdxbJMWQ64GLhhXwZXnxaAmo6RF57r6L5tBFgjEQLJN3Qd3UyMKCLvp",
  "key14": "MFaqEdVaieZxfHi6VzhQVZVJ8pAukjc8w9qmNyFJseFMJ5KDCdd8qZER7V1YqVwRDpeguf1yGk7YPzyDsUQUFij",
  "key15": "27j2C8PM5P2B62dauJZmBnbrv9DpWe9nhVYh9nz3WUSxChzfnadq2FpPFt6bhDEcWtUWJkGrA2zmXVjXbpamKbsy",
  "key16": "2WZvLnY128H7cHozAUzwCqwbBJse5fJyat1RW6f1U4KEhGBVxL1VrccCELrEVYfmed878n5oJEAqc4qcxNTuML7Z",
  "key17": "5gpKxVpm9dDz4W2YENt4R1Fphs654KPfGPs8SoQrxEL1oHXKBaW3Z2Yunp5cdgi5xqeCYtCgoBNwyXR1zZgYJrZK",
  "key18": "5DJF35hJ6sfoFGfGDYmq5GNJwKykXk73d72Zi1yadoRRyFsWKft9ZWpJxKPmPM5cY6zQUsKgDXstWCuAq9NBQunQ",
  "key19": "pfsou6RpEzWjFXaAqH7V7jCSeNV4Nfy1rrQTw9wCuG3ZwWRzzfi9AUyvwA5egR9mwU1DqxFL2CKHjpaZ3ShMx7Z",
  "key20": "3aLSrjpNSNoduH5yQP2T62R7L2a5uuZwQ3xJSTbK5mYZemnEc4Ju7d7LBDB1PTcfeTUrgL4ZDWBJSC4PJvCRtWnf",
  "key21": "4qumz4TekBxQ6knua96pnvha5Lt5ScodtYR32ypPfqESyjYt9qnUFyK6gK7RAExJq39b5cFv1ZjMsSXtkGFqhMjo",
  "key22": "8UFAQ3YeemStmTfkoQFBJS6TL6khSAW87iXBfWpZDiprprm2Huz5j6rwRceEVvNy8B6GnrnYzzUzaxN53T2T2ow",
  "key23": "3GUnHdPTSsqUvi6FyU36Em7HihYPraYwePAW79QQDt6H8oUYEJuHvcW1hqvr3Pi6qxt2Zq7m67rHnwZx4WYb1o5V",
  "key24": "4nJ7ZY65Y8zWGAwzQ5dmj99HFUeRidN64bo8RzHdaUJuAdrv4EdzK2Lw8jRK9pzq69pkAe5LVvzaLc99ercpkYHZ",
  "key25": "2Di6V4dKqjKyDv8184TTzuJyeb48UEhkPQ6q57hQkzMnsJXRT2rHyhpXooFa1vSqeurt7WpQyRz6XThADfyqgMCX",
  "key26": "2hi8ZmX8VFNbpUcSXUBLQmEyYv5NfAEVKQKD1wBwFu1xc8yFhQFEuoL9aykGfYvFRV2W7DEctBcptuAjuZwTwgSD",
  "key27": "49PuxxT4i1pZ5FCeoewNyaKoUbdE1Hv2p3N8AbeZ7Lo4erA5JRZjt9Y42fhgY2YAgwBhJo3JdNxoYJBdy1EiQL8a",
  "key28": "2j9wifeLmYsWLXK7CFXhpKQUKxvGSatv8AeUyJVevtUFt29xujgvVXjeHZGjG1v5nGa4Y5gHSA6rXxinkYMFip7a"
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
