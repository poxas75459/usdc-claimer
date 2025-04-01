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
    "5YpziVmyRdZjA5pYzXYs3ModUFMpDpfcoicZTF9nFg6WW6H3E1SbmDBYCW2nQiP3AXvVBaHa1JeZPiuDMByzNmyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "444dbr7YK6KksBigfxDXqRyYKhTiubRqKrx1aHLWQiTYWQL3TcxvPqPS4dh6cij25RdBvJ34WNSLJrx6dbDhJjZR",
  "key1": "GiZBpjFhyNpqiGSKp9iuk5ZroRT9BraJ2iwpUnXqCNx3SVBk5gdW5S6Cg9mBRU4ybsC6ysBzmVzcjy622Sfuk4D",
  "key2": "2xomyKdpr93QJdbxUr13yaVGW4oMhKu4wm5KsPDNneGaFRMped9hrWF7SBMsjHgrTmUszarjS1CjPK4YYX99Xbrv",
  "key3": "qKn3cYuWPcCP3bUEnghXDT52EyprrgYbroTQtMJhR6GkaCmbTDjdN8Ne6GAdor8WMpUxANncPca9HdbahrJWGJk",
  "key4": "2LMVXpLFfFNgx2pFmMp8KZExjPtRgNpq2LTLGW3kbwCB8poY6xHghpvNnj8YZbKcYqXgY4bFcAFXnBZHMJctzFt7",
  "key5": "pDHM3dRzDAMG1MpaeR6fRRktr18YrBCHVBEtU7iLPL7oUeKp6uUkdR1xsavqiWAKHpRR9yiWEDdQShsHjbdT33D",
  "key6": "29sn6VxYHP5Uzba5T9q8XUXtpAu4CoZA1HzXoouDebtkpAxnmwz1wCs1bsSwTgdfKdiEUYqHrrgwvs3qa6aEEMXy",
  "key7": "5Nkea75Rugb7Af1nEc91EnsrnFQUpTcb85pVHG7WQJ6K2bdtbKHXmkhDKZFjeu6auFqcdmk2nruntWgjtNpUdvr5",
  "key8": "5rFMUjbeTa8YrN9s4Q98DT6UDgtkjvTp2gQ929yRemDywpHkjDWuntETYKVqU1dvfeo2NwGE2S2vVmKy4w8hJ7XQ",
  "key9": "xfLTGkfGTn6JuY82WYe7AspGw6T8TUrqCkAPi5rs8D49tu7zHob389M69WLMTeFaZhcin4UETeeBg2hgaELZ57E",
  "key10": "v7DTRorb59hav16T6pQeuTNF4Pt2RAJikzRin68cXzAFHbYJ3sUtzVbDvk5rDXwNmPPmJ9nTNwwLfpWeZhBwoQa",
  "key11": "4C5JSXkw5hkgceh3P2nzR1CTPGMEeEgeF73gffVTb3QpJTaJpELyHjey3kyEKPSM9rCbqJ5bbs2MRUESwb8xmgLs",
  "key12": "2xzAfJr3uEfzHzc9ZugKRNFi3Ku76uinkS2TCrySSeZaptn85aitiso8koP3rnt6CjPPWxJ9x2nfSpMa92A9nhTj",
  "key13": "2vt7MSutdMkHvKGveVhkVdPAS4YnrBxstvSkCP3wbmM5g1HZgeWrPUwVGkcm8GCkNwAosneDBBMVFXnmX2AyPVCD",
  "key14": "3UgMaFAJhURyxVG8RiCri45BiFwWrcS31HBhJwYUGtJmGsevEHnmxRR3aUWgopisi4h4ydZJNoexqY5noZAYoNpY",
  "key15": "5uCvQ19V2E8xJqCt82y3yB7vHXnGnQLJqT5pjNaw44v91b5VSo5icwj6SV5rMftzBYy6nmawvdpifX2jUJ9gmhk",
  "key16": "4dYsgX7qmquJzWzjXz6bHGaeSBdz59XhUgkL2om5RL42Nxyes3Jp8ieUAvsh29jJoFGjioKj9SvPUPTiYV4aUVhr",
  "key17": "2Ah2FbLvGdDCzMUjwzhXsfjWVXZWL3FNcq2aaxKjLaNxen5j3WTwrDvYGp9otkQWtkJLkt6yYZVkFXEczdZShvV2",
  "key18": "57soDfg2zWB9wSQQjGgTCpSeer7uf6mWbWZaiyikHQ8GEWzDcxrXah9ZbtHPuqTdd3JgwdhybnsoNgyV5DWurzA2",
  "key19": "2Fn65qkQDzJRhTjcGrSyKQEBeaVDutBihi92msxPxq1heud1SQebRtAnDXUXgZ9LcuhFsS3AdZyLxPinA6RTYdyR",
  "key20": "5PESLPmga7Mgt8aSQFAYPdixssjWYEUuuUUfQhWjp7WoJ8QHCo3V3FzG1sSeHNujYcX9Boouk3reTkUVfagn397E",
  "key21": "kpTDaFdE18pQwpbZhhgmq6Eir4sVLxbb5vxw9ZgmSztuTYV38G7L8rcnKM37EW9jqKcpELzqeSRGdUUeMZXYq39",
  "key22": "5DXjpeXRogZywBP9QUMbakA7fiu86CZcK8Mdcp4GbCkmhkLDkt2i1B5QEKrefTSHpP3xdLu8fChWqxjN1arfYM12",
  "key23": "3R1iYT5qLGwSm7isqg5fMcyawNAdz6uctXBRsxbpYWvEPVe3XjLcfnpDFExMwg9Qzn7JmYwiTxA2PLBPuAqbVURs",
  "key24": "4ytxpUfDG5qreEQoyKjejFCYK8NxGki9ZrPNUiPVsUDVcpG94uPmvs5Gyug5rrMThVokMEWhP8btZAa7kGxj4xE7",
  "key25": "4koEnBMHBobZNvqRUhjrHJ9eCuoqTJQux8LNXEVMydwGWzCpsWW5oGnVLxp4a6fC8A7oEryWHkbgW71utFtFAWq5",
  "key26": "2MjHGBPWP5csf4DrjLY5Np2v2UDAvhr9DW1uYpXvL2FftkQK75dkKhs8HqiU3HUp2mRYWcGyhBYGhNsPvLNa4U79",
  "key27": "226KQSm3cHnmVH2boWtvMaxNrDgX48yfiXKMib43uirZBAKtvKw9dErvstGyYiGZHdGmRWudfMV1Q6gmkaJPsVLy",
  "key28": "2bPs78F3Z12EbTS3ewfFoi1AoNE2vhLWVKXgHoDDaTYZsiAfNNPYUyMbVSjjWaNg4GY5Et7m482dXp19gscvFzfD",
  "key29": "4q95Wtfgd12dzNvz2QMXW2QiM3Xmej3szcn83xRGvL7KnoU3dqNdfQTr6jo1CHCja8APq7Qxpf44EHgE7k5mrtgR",
  "key30": "3KQRR5vF8AFEjHoedjvH8HAPq8zNxGnkt9kRVywGVABv37mgVc8Hcn2axdwinMtB5jzint6PnUJSGrZpgStAms8e",
  "key31": "2tt2dhSnUSh5TZcKJVuyqhQBVMcymdJtuDTjmGmxkiDre1LRPsbvqmnU7YChcKuA6FTnevpT4BdAyHWoBmnqsHKv"
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
