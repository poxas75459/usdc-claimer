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
    "6mKE3W3DLfA9h5KTPEnxbesiqn6ctSbDaN51vgoXrhfzG1uoLYKEDeRTMUwqoXqR3P1ynCERUg2kr5vo7YtJH9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghv998Da2MbyJ479CnHoe2VbHJ79dYjr657heDM3zjC1BNWBCbQkkva49jVmNN5vGtkhipwmVhULNZCWadZghHR",
  "key1": "AboKWW66SKbfBKShegvKYToDYjSXoLDPut8GuGY5pVG625FwUDgQvutVPLGpatPewosA5WqeXtcDRZp4JjASatc",
  "key2": "3atUzzzZB4jaeNcbJ7Wkwf9tatuxXjJnggjS3pY469BwuJJxvpF2Mwn3gL3YQ2fRcxYFaefg9xsSU5ktQmmwdVz2",
  "key3": "3i1BAG3kzSRbePAprewzVqHyBuyaHwUD2x5D7xdQCZ4G7BvaBbB2cBXfcVpu8wJd7N3sHbq6AwyWmXh5yCJL1h5V",
  "key4": "5TnSsJkQmRfrpSwbsQqqtZEkEWfyKhdTb4fCMZVU2K19rcpoEvkhiGVgsiUVLbsRzoa1RY9cXpSuVv7vFDBsv1wN",
  "key5": "4ruczpvPRswjBT3cQscKejEFK9QFiVa3RBAF2HN73ZynuQs2aBiwnbaUwGjcuH6rwDmYdgXRDAbMQeYBQiCdtgHa",
  "key6": "2cyb4qozcMhyLYTAv8VVvjuMtkuYES41Ww84JVXsFcaABjVb5W7eLD5GksEwufntAVpxLrwwbYVZLqf7P5mq3AkZ",
  "key7": "5Kn9HbAEnpcCr1Y6kuwGL7RdmwBXtQjTxCT7EWKGjFZ7sLEiD31GKLD5QrBqfXqdogiHH1mTp5fknYJ7hwLBrUuH",
  "key8": "3pB52U6w3f8S5ufxMKmE2DtADZ3L8BtPBRL7ff36QTS9rrircdYcsj2GDkLeYCEz8DfgBduxAaxyb2xKLNyDfeHn",
  "key9": "4qZqfvFUSTjage6jcmwiZrJYtgSA4566ZZzACtdffAfQDnGztnRyUEnuZ9DBzxmQsbUv3VynqUzkuRTUWwfUjgRP",
  "key10": "2eFVtQcZsAoeRNbYGYVWxrN5r8Ycu84jfjRETUo6arHnxhknkTQiTcxdAUCJq5FAYig8moDkDh3pbAtZzUxSMWgf",
  "key11": "319tPNuBL3Uf6ucnpZzbQ5n4eyZ3aGEX71jiYYuE3ZUR6fmUWSCYJYxtwuXbqdqSmnB6viYDHtsUYvBhTHJhaMRV",
  "key12": "4ZUJb2vydUEruiFqFc5dy9JWRByYmE1eK5jdWeSM8o9rnyZ2cVauzAjYDmQDAmPvF4ZQqY8JARS1oLjV1L8caTyd",
  "key13": "2XTudR3rNemntRhbd119LJKuTqqQTkFnYMHaALHppibAT65RtfvjH1eqStzKTtACHNotECfjV7hQyG4F597E6vBf",
  "key14": "5rAZ2Hz8wbAUEKSVrcEovjzPfX5NWyFLep1GeBHqTCALNuUvCCBEUEGrVpVZ4AJ2PQXio3qm5QusGQLgKPaFLWZz",
  "key15": "4a6dxRP6wVC1oDJKYwZPvU5WbXbKC9MQs8yc8UB4H2zT5MCyhi13TyHGyG9TRKdDLo562po7LBK7NhFPfWsvZufY",
  "key16": "2iEd2MtXMZCDLBD9MphfuV5EnDwJC9g3oV4uwonkeYiS1qJjyg3tUdnHxkaCQ1XDtxWohRd71XP48r9YhAL5j4wt",
  "key17": "5LpVLX541MqE21SmVFEEEZQ4yrnTU5Ga6aHqfi61ejbPLZxd2teZidbX1H4XK55VKQLApVTvx5Bu5u7THjv4BeNc",
  "key18": "2kQDXQeWmtUQoRA4cben6RACYiCbrBYbWEJpEUgnFYwjfvoxBkr133XQ2ecsH37joscsA8NdHyWMkt6A8NxuEzWx",
  "key19": "ZUYU6XSJ8fp54v5ffmrKsUcmSDiGer35bdGNnfbAvDmMtE1qNTcmgi4J7uUeW3miYXgMn837umWq616LmPPvk5r",
  "key20": "4rBJSkysAveGVvBxYBvNbqvQYuyKdf7qcEuD9E21FHRiU4GL2dicevKV3GmfAcr9Y9ehTmpupPZ2fgTwyGLwxqcJ",
  "key21": "4M4nq17JiNfmFs9T35JkaKX5h4aPUxCYyiEskwD9JVAXbESkrfiofKMS6MEWgTQWQFkzQWratbuVCc9VKcTGZy6p",
  "key22": "4T1DH1VCeayZZBCmHUrn9NsJVr7hpG52EmCvP9hAfkNH4RcsLNmEWMv12pF28LjCHmWeM5eduTKE4n7HwK7wUVfm",
  "key23": "2Kcugfir8w3pJrUjGPsxQKUmdndeiNMkPgNT4uCcQBXYs2KhFNgaiM1PPio1rRbmnAtMEWVwHSUL3YgghDZMcA2n",
  "key24": "4daikUsMtzZPf4ztYngRMFNcYdGGbXyMQMVF38LmhqAJQeoph6UBJ1xLZ2ST2fHmXgoaJayWGoPNLhWEHYJAxjqi",
  "key25": "4gSShKuYaT6XCWReUrz8aGwW3gUks6sDxz436zUKYmtYoSRvkdgHUbcK1j5N7sp8rezQtB5AjZYQTSK1sMLnznoQ",
  "key26": "pjLkL6DZSemmLxHKd4G17HfaYTAJQKEhhphrBnmY6a8dj6EFrkXmpj7cZkT2Gm4FZiC8LF587oJ4KyUfqZgDaf3",
  "key27": "VTVyFUmLJhdYAHyMTpkTSymitSzJWA2xcPtiSzVzA9HdmJcGv9i6hxga9sTzTD22iYrrBGAumJgTr5KqYR98qbu",
  "key28": "2dNxBUQWLWZGdoUyv59mBGzgBgtFwpmxke5xdZx8bCrmn4e1vGK7TJtAU3uwnGYs9GRw19wDvWH8uqasnPdL3mhn",
  "key29": "3ZCQiuq3icH7kXoV6LS6U8zLkn8UXyNtWZWqAacsYmk232TtydufGeuHhHtBjTQWhp4op26huciiiMSm7aYqtiNV",
  "key30": "5zxpwLA5bSPwqiBdUe1fDgZjL4VQndJp33AUZCW64jSdYdGkYQ13nU2StMDrDbE2fLyn3JSdm7JPGLfTBCN79P4P"
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
