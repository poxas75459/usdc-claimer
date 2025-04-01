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
    "FS2uqxGL36Pm1fVsmUm9g621F1zeoyDzbCGeTMBvNrwSdaMTt8cbHWtS4hMbYDzDe8Js8QRMVc2Cf4wzpv9gGT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5huGoigTFeWr4zb4ELQJnYLiC4xdXxRQniknPtFJ8a13ZZAuuEpekM8VxEh4UMeBpTLnzF2Nqj62T6ymeha9xP9m",
  "key1": "41C1DCrnpQHV949DeUMpbX9eDKoq544acNhvGbkwZPDSmB8Xgn8qeACZ9U6dUk1HV3VE4FmbbnF5RC5pJhY5ywbA",
  "key2": "5w93PXmF3t5TGrzgi2dFrpQxYHthUEtNvFLxLeVE61jRNNpcChPbwYweVroSBpuTWvQPDsGj1iX7VqPrM69emsya",
  "key3": "4ZrT3aiyyMvzSvQtbp8NhrAxZ7AMaizjab52TKU4zM7zsYmZqkMNyHxxGQfhfGc8YnhYGKQTufWMhKS6xAmfoH16",
  "key4": "ew8BtgdrGWpoNpXCyB3whVnVbm5cyiTN1TkWaGXoV1HxBgMBRTH4UmSRZ9M5haCN2otYuBFVH1yGa5kREV61qoD",
  "key5": "48Sj2qZP8zXA7CZ7tf5qUJk8r45ppsfEAPBFTBUTAJZ13Ezmd5c7dPhpJSz48z6t43uCoVFu8YowyYhjHBXACRQK",
  "key6": "3YYaAgDx7HwbDDaioneGa9EuLuCarbnnL9e1R1sDN4CkmXg7j7kBN8PirLVT5tg4RrHkzsdcp5R78jMhybDm2aT8",
  "key7": "2a3NktSFYFDuFfuUEQNx6nhFk1hePJChNB4GHpXWcVcdbHtPmHvUfCxYULPALeN7yAfCx5XBr4g3NcXSBrqtDXbp",
  "key8": "4ebwVbPmzAGNX7z28eGwZdLmcD2F3v6meKuvtrSZfM4NetkpTNUC83HWRjQ43mQkybgrJ9XbWZYHnazAfwWmjhTp",
  "key9": "2ohTxkHWk7Da1qeHJdqbDtnVQRs6VVkj3mfr3XTT74qWbY1sAvPgD8wRf7XdNF5rGUcaUqk9pTgUQyWByzCe4FUW",
  "key10": "PZhDNBUymjPjncpPG9SnVhwFghsAZ3JeFXVzR3sQSPjCCFP4BTy9waJPcemHpcaR8Y8zcpiEN9RU53qTzKyKD23",
  "key11": "5fU6otu9VaBjZCRz8ZYyuj3XKvyKvvonPtBbYYmUyAB3xpnZnivbVvs3FSEyBr1RyuGQGW2LbCJ6xynYFrFBYG7n",
  "key12": "4wB7Ak19RpB8meEQbyHrtncPXdMmYVFh5sZ7z8YQDDLGYsA4sD6ttLt3hVzEqWQttkRjjoWUP5XtViPwx6nZHKxJ",
  "key13": "556cWnfZsRUyaTd5vVVN7jYZw4AGggVkPj3cqbWEd4EA1ab17Ghg9brKSHGrwuRHFiMkrGrdJoxRPKrqzcU1kHJP",
  "key14": "2pS1H4Si4VujemCP6dNvcXiv6zG6TjDAKSzwzbPmcvbUHUM5Ff7SVpqbGV5xqWDi8BbJ4k64ioBDRj7armyBr8ne",
  "key15": "24nfaAdEmw98NFtfYEcRmW2cr61zRyJbZby7m2GvUBPbHnDP3dGK5h6XmiWne9WZvuEjUSLSGtGbnbtpj3fLoy3m",
  "key16": "oC5uhBqNjDrC1y1eGvwhdHo6xuGPXpYu8M1NJpQgXrturX4aN4svW2NcrQdpix5RnPqjk2iEEGifjif1Ynoxj3V",
  "key17": "4Y2yS311EkVCRbMU5F3gGakn2Gw7nFHXLGM1UH4xDPbHa7Vqtas5Lrt96fQpCJeJmsnGp7vBzY2bKeBxMXQ4HXxu",
  "key18": "d9WU5LpqLY3qMydu64fmqwNnHhDMH2rZMLsvNSo4yFPfoyT2USbvGspKjjjqwGmBSRAPRRom65gnNpbxkQmwEhk",
  "key19": "5zXnQf6dCdvoPQ2C88a8wDhACxxSegsBJqpjGXBFWwdjDkLexWMk5SMqAfXSjb3CPDG3owGWp9CzhDgyKXSgSi7F",
  "key20": "3P9jSHNz24nwp3aP1SB1ZCvEsxsn6adqWVkhkTysnsTywpZBkNQ9Cp19zcpD7Lej1TKFMKSDFriPafeeB7sobWCt",
  "key21": "2b4sZi7sHsbPyMXzyMP48gk2duWhANVLj1iJBs6qr49GCmH7fMqhyBrwEchoKmknBjCq6sShLpYHvcRnv8GCK9aW",
  "key22": "3stybwA3fV38VAFVDpbWDTPcxckwzUAfwZz1guYbc4ZPjW9deYzVFyxEB14Lnv3a8bv5JkRuH5Z3zhpKf2n4V7VE",
  "key23": "qggqE5H1k2HNvqLnYaz3h171TeMNZW1y9c2ehnzEPZ55yjTMvTf1hN1AyVtfcbga1BXsQQTumrDcJmzX36dmVmh",
  "key24": "3XmVYxjDRqrnxGrHctGJfmrChrPKwoK3QVsGmUPaFQJ7u4XabDAeN9vLmqfU8k68zwSAAxmLgpXTMXt84uKx6P8T",
  "key25": "2GgAN8n6AhX64ubMZaRyE7NbqR3aqQC9jiV3K8CRBgpq4ruvQfcek6HHjz45cmxXJGdQaWhxVX6r1iWRsn7xaJdD",
  "key26": "jCGGBftGP3UWiWyyqGLSwriG46K4xM73N31Dc8E26rpDUncjoQjwSRwnQ6RnXttFALZEkLv4dfg3Y537YNFLH2t",
  "key27": "2sixDc1Nz171tx1zVN6Cz3kJ6gT7iyqLsjFcPh4gxMrpcYpwDhCHN4JwM2zXsZkj31aameb8aRvJTQ1Tv5M4R5tz"
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
