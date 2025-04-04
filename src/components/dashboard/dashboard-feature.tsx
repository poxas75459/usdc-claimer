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
    "35Uo4uFCQDVW5RD273fDy4xFrRuy2Hgm4TViWiBxAy42h8fBZpVqj6dGgNTLqCfAVjcMFpaA5Hb2EsVtv36dBTzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TGMg9gYqxXSqdEwRDGwt5HGhbc3Qv6XVY1ZX2SEYWuxA4NvFZWt4n2p6n9jfhwvADTRYvPRsmc3bphQMuufdSr",
  "key1": "3E5TEd4B4nt1XKAhfsXmrettMUqZSRxUn1su2UmP5Mr2usTP8WMntUevywX8dTcXVrhApPMdiA4NE4QZYXPGTmyP",
  "key2": "4ygPSf5GgUfaETtJqYhTa9xuWJb8KYAmHNPZGoi5Z8pKsVEVJAKp8bDcjNoTFzFXa7BHBYHtUE48rEBKLwM4pNdb",
  "key3": "z2kxni2ciXkCjpfZ9RtXxLHCcg46PkK3nPiuTUJvVUgvtTeq8FX6AVF9wNQX4RQDLcgSR61DfSJd2kVQBDDjKYX",
  "key4": "2mD7ey6VJFiEwbZyLgwHP4E87LgQPhhrvrDCjLdYzMxgkZsMeu5TN4vfReSs8JKpAxbN8HwYWyiDQ3rVZUEJ3qip",
  "key5": "57F53Wb7yYPGna2J2mnJ5M2RMz45sdY1pqwNh3oareYJ4bjph64iXR41KCiUFeq8giu8Q4Lis63fkV1vg4cKwm44",
  "key6": "4SWXjymnijFigoDp59aADoEK6fgNhfFYRnQqNBikvT6MMq5zkqPb7ePpPTyBwVFAmgSdxfYrE2gYUx25VMD2euXV",
  "key7": "C1txno2caosXz72TFmaFnxyAXdQaJYzAiNhGTbQ9hbtyBrKnbemvVVSxqnSap8BKBs1WwjzKvnuuze1Erdkz1TL",
  "key8": "4674C3J8FdDYeuDxmUQ74NjmQ7VtAhKz44mnuGXnEDYG5TGkvFWXWjbvFcYn6fw3AUp9r88pWGdMaR6HTrX9wapX",
  "key9": "gwSMwtSMibkrfKxJwb9WMhtPF2PudxESWLWDieYdDUsyCFVeeHbCxw5aiRZfR1mvhnU5okwYcYvFQnvKwWeJbzx",
  "key10": "RUHKpNDv6biqpEzpRhmbGRyHMiuUcuL3HDX7r9gGDL6N67JEkmJwtDnZqJwwJiaRVAopAYaEUnew68ng4HgeQaS",
  "key11": "3Upo527h6XQHzSMoWnPQsVYzFDTtBogT1dU22taLJgZFGE5Ywg5o6SW7pDrve9Maz43hCoMCdNhxXmysANNEZQKv",
  "key12": "3mDupPLCZXHpQDDP8KQq9DHRBsFwPAmRnvtPrn8YMCFayEatpyPba6BxZ2ethnHAeiqtT1XB9U93mJYM5JMEbUMu",
  "key13": "hXgS71UyLqfY4j8zQqMK8JaiJYZNDW1ZuzvQMTqLdMfYFSngMHPifCBMtAD5N5YTJVjaHwWoe7bU68wzcqcQDtq",
  "key14": "2vpCYKEwJj4ey4HeDaf44gNYoMHTJcmvo3RPy2ZAAYcLDDnPx3HA1pJkXMNsXwkmiDj7pAyEk2Gd6KeEVqcS125y",
  "key15": "2pMp2ZD65CGBKcGDoAgKvuvSAzzTCAUHroQ5T25DmDhQP1YZbagcpEUXuiZJSBTgq9BkTH7U1QKYKWur4kw6Xg4b",
  "key16": "349MpTJEJfNVQD4e4CRGJQ8HFjQJDuc2yyytVgCsXLwqvD4UjZicSqjDzGAdktrS7upzu21xJoyemvSbjyQEygh6",
  "key17": "3iAPFyFko2vMDc6Zonv4uw4VMeXWKGR69Fa6resWb3oCzfERz7i87FJX5xzseGcCJM8Y411nXEKcrLnKhsEKpaaD",
  "key18": "4KybkZfV2Hx9KV6hV9eUBxcrPooF4naza6No8uhJJh3MKPGrQSs2VHdBXHprTxvQxwEM4rY8RQbFgvDcDX8q8d9v",
  "key19": "5pcyL94o48S1x5sXM87a2KNXYJ5mb7Gqw7xu9asB5mjoezAVpuzRxdGoWSGHQnRgqZqv1y9cRaL8NtMZrPPcwSxn",
  "key20": "2bE7LgLzBva8iKGtkB1RvAX8BWfRvMS9ELHd85Ey83Le18hk317xUFGYbFJuPDxvcK1M1mn3RdUPV7fqHFFy6YK5",
  "key21": "yBqwSSPoKgXaknfKJNtaQzPjUu4xkNz1HtTt3tkbctHrF6MZCE1YR4r6TbBaUiJndcU4ZBKra32N4w2CCJ4hpzB",
  "key22": "2Xf457oGuTMLaZHNAF8xzmeBjk23iqVbtuJbTtNRo7Lc22SfdxP7rTmVnDgjUjdmivxpqsgBdFVSoFkBAbjpMRYz",
  "key23": "4V38mYWABQaztkg9dueFf4bnSHaa5GhrwS71D6m13qT4KBHrmv3j7fMhS37oPcYhoeHgmF5nCRshhE1WGA6yGUwC",
  "key24": "oB3hRpg5XEYj4ozta5tQTuHgBCe5xm7W2TuzvS49q3kmemKgeY6ZpAFSUsC1TQpd43ktEfFyi7PF6Wqx1kgzYfd",
  "key25": "4W6GD86Sf5KMJQ63Bix3WeuKrFXg8SDcgzJtFCrWzVQPFRwVHbJYgMBD3prAXu3wLLzVHmhq6bdr1SPLfmgStzTB",
  "key26": "8ndfJR1LKqU8z78bkM7cxecBX4a6F6BjKbNXMR11ZpxSgciPLBCj5J3B6ngvJ7HWqCPqU1AkY1B3aY9J2YFNx8N",
  "key27": "3SwwSYaVAb5YuTFCCTTeaC19Js5A4TSyKaWtbuxZWnGtwiMFUuwi1zrBxfGsCvGUZ1Ree6HM4CrDFhoMpQeJJmdN"
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
