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
    "2QhcKST6sT7MYFY851wFYjmDdhMPNvcgLCc7xSLVXPZhyND8Vo1ft7A2bpLmimyJ6NuVY2AeBC74qfhK1kU3fCrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DE75UWWHUyz49oJm7YyMJ8mHchuDztCc1MkLknfjHQ63qsFumev8yJwzSM8nJvaGBz2DzipCJj6nvQ5NswDmbMZ",
  "key1": "4aKhqpjP8Qhe1hgQB7PgoMcdpQitbNSCJ9kxgYBYH2QPcMHn9vmmM51QJi8kTFLJLXfnMFs5h2qhj1CFiLkQN1Mm",
  "key2": "PZpaQk3EskYm9PogFfgVspta8mBCbHngKcg3LLUEFFEtHfqrJrV3AEzwWcaYvHCxte9WEssjur1vTJA2zpJRn7e",
  "key3": "64GykjXVKX3xnYx7aJEci4mEEnz9nJ5No34UxSez1fuuA4sMBqpxACN6HmA1ocph2tnGHrKaVYyePR75GTdEU6yb",
  "key4": "2FGeaiHeV4osE4cV43QBCvRnFUHPAd4FKq9ZGMrFprYrRcWpoYcn9uZpXQHTXysrSmvkTeExxh4RoT9wS2RpHPbo",
  "key5": "2fNBnfJ58gQW6rWSro5sYnzhgFC61h5fBWyE5i1ixEyy6gERYRsHb88Tm3WSQF1mcnqrzy8BKP3py7W5ToXTGHv9",
  "key6": "3aehgvJKVZCQZwXK5hs1axXqcGXa2ajgmMnWap3NWXt2EGq4dsfea195JGXE99HcmGHsXsZoMeGJTvTicjjVdaff",
  "key7": "wd8ptxfqBZukXKtzFYHeWVzMETb3j6EDfvDDdk9Xp9e1xvy16eL31iSUXzmboZn638cooPZ9dPJjaX8xHmoFUgM",
  "key8": "3dEdzAGg2wxJ5yRpYqXa2qZisRt5eNVLDuJ3q1CXkXTZGuu8htSSffYa9ERHy6i8p3AUo835TJepWqoYRnAbD3r4",
  "key9": "2jyR4DFoFEuqd57KxLQ3oJV9vxD3wYrDgktQWxymk4YjHHywd18AdgiHa2QhTaBAQkor2NzYs3zKPALNviuKTeiy",
  "key10": "28TYKFV8YPNfVdMyMVxSu6TqMEchbEfJVD9N5oKJ7WytAdppeK1JcjP8yjSJXvoRG8DZnXBWexTTdUvc7FAaKrNp",
  "key11": "23sus6kR17wDiGyGw647dkb24R7Wajtnf6B1KUUTykJZ9uHTdWvo8waU2GJZ9TK9te4diCvxDRMBhkZ6c9Nj7R2A",
  "key12": "sKWdjEENC3aMxtR8tUigySEzpzdC9knBfmi2J9bVXJRnY1CaLXHgVdFikwj8tiVeazruwQRBDxM8PtzBnq7sEey",
  "key13": "29JGpEVnjBRCYkAyMtq6ai4AXjVpdVLTGKG1CHSj8HhZuY5BVtnJhRB7AumdDqMEuenyKQydMXnpYJRWpJRJxmjN",
  "key14": "4o49bUFiaSoKpVd3AFrUSrACL86MtkrAUxjWbcPKdcVBWqqYBywvFL8KX2NKuR3c9CSqtUXG3ZWTtJVst6aKA1An",
  "key15": "wZLLF46fzrg4BX3ASwN6fbszNVYcEcbYqnyH419PfJD8hERt7VbWm85UsyDMM5TzFMs4va45RJL3UH5yZST5Jk3",
  "key16": "3J8RCa946weZbnkQjYtVtzoo35zj5ivssb3iDaEEJvjQeoBnsiZZ8vpYDBwgKiroeNFq4mpY6shCABAygFpwvVn1",
  "key17": "67KorEDozWVB87TqNQbPHqBBhDLAMrD23jSHEcCF5mFnJUioLJjPot8aBGK1JjfjzDehvobdRddc76pF64C93g3U",
  "key18": "YNv2FUG3aDLb2prGJcF3mMWNpAhDKV4Z2QJtcfQXtsGk4q4wr4Dq9TvNRR7wqX8nt1fiqCkJpKDxFpvhUmFDe9M",
  "key19": "4yXdGwCMb9Pggd3c4EkSLCLwgy5vgRFCddfEAcE19VXwNvZLBs2i68xxw3tYE3qXxbBDwy1S63FoewvU2eXtKuRn",
  "key20": "2jzRPzHf7wC1pa2p4SNYPGtu2PjQguVsWrjNV96qUZyZjStYKK7bPQRKg8ANqjnATMqVfzJ7CN9d1XZEzwJVAe85",
  "key21": "2kPnv2TQoaYh8nrjirkqWupnFM7kU8iUW4dBGMz6d9TRbU647bEMvCKm9rfjZFhPBBh8qAKh8kZZwDfMavFU8rzv",
  "key22": "aWitMHbsxPpxRt3MbopHUZmAGC1Am5DzK2VLia1K377P4SRHJdkS1b9uihcPbXLM82s6PmMBAJEsVjx5T8PCvko",
  "key23": "4bR2WF5vVnedkqA87q7UeVnxDxbBkGsPf3hNnyM2HoLFU1b4tcUj2hmGyaNC7ccs8PvywFDHghPorUNzmokUGxm7",
  "key24": "67RNZ2g1v9asNTPZGZdKwP2UK3Sr4JNDevJRcjHy3T95sphymxGBhpWndb3Wi9C4WCzS9Qx9aGMVQto3QNuhLuEP",
  "key25": "4uS9Lrn2REDAbRTmgs3gsB38LuuEwz2pFYcsAxEpL3NvWkRjH3NqCif7D8KDudyfdHPrE5WnJHY1rZE4UcX4RX3T",
  "key26": "5NzFFcnw1iwsWNV6Zxv8k6vwvgtPAg7hAYHcHSTikiUGhmkbhYEuZRuy32e8q1XUaygBkyCBNwXy7RHaftMBL4Re",
  "key27": "5F7U5ruod1CVUxLcMwMrutVEgfna85AMiJnELmQoEGmrFvPEFcLur1zGPyJwyMwN7ya7F631yHrcPfR2Kmxkimht",
  "key28": "34UWSo1DZQoaT2rjPvYDri4UU5sxV9y1mFRokSUsNUpiduKK7Ga4ZdLEqh2FwfNp4MbQfVbTF9i8x3cZrCdNRgNK",
  "key29": "2wHeGySeR6jhPSV86BSEvzaEwoSekYmTismzHFmxm7sGxYBNvsCCZ1Ji8dg4sVpb9hfPVddTZiznPEJyNStoJktX",
  "key30": "4ZMk3tUSyeGskGyHmMTUaVTn3Huz8xeLNMCrYpZXSFYZ6EjzhVWQkXAQzXrAmhB4sa8RGP1U8Yi1vir6AvMRYc7v",
  "key31": "218NvsAsftwwfwpAeQ9adXve8j4YrpMZWDtQtDPPooNnkTUBtNfJxhJroL64dPHp8hTLxQHWzzCuxrbFx86MfGY1",
  "key32": "MqiT45m8LsQ3hAWPDqJXZSPxPscK5QhiNDwVcqoFw8HXtZhZ7v6vZkvTgRm4fq5yPJbmRissj6yZMG5JFMGKxcG",
  "key33": "3GbAkJvP3fLzGNMutbXGS3QBSu8zxj6zc8Qpaiw3swojeH4UJiCmVJ2EqiqvwJJAd8fifgsfQVmLr3rJ48ajc7a2",
  "key34": "38f9N9Ca3n3MHtfSQhoHuxDcgBHJPi8KfVHU1RyGHNEYGzJZBXPbVCos2hiUfnNszz4GiHWzyzrbE5q7z3gcPpqz",
  "key35": "4k8Q6iKnKb1NQVbx3Z9qpJECaRGY3G3y8GeWYhjVwaQ5oMR5N8Wp7MTcEjwBYuqrtw8eWfEU4qz9k5f6csEi7baK",
  "key36": "2mhCHS1xADu2oKtPWZmDxAaYpGbi4f4GjceNkkweksYa9EyCK25aa112Y2KDDLJZe2fSaUGbMHvNaeNApX4Po5jt",
  "key37": "21yhQ6YP7Y1qsy1daWHTQb97HUdWtbs7hsaXrFvk7EZYKkmQXKALu7toiBfq7KJuT1PGCZo7DUicuNvnyg4jpGn3",
  "key38": "49hcVueYW97kYCTNdLHVtSPF2qrvfKiPX3Uijh45vo7s4QruU1bRHvt8dffwbt3F6ecUphALYD3VYrK1tzhjemE8",
  "key39": "2YhLUjUqZCRSqXDMqU9ocoPG4isP6uYACmivmvnfeErwJS1LostxxScVWdqAhnWiDe8W3KNxQMLSF85ojajXv8FX",
  "key40": "c7NtvKjZYuGAKm84fp6qUsZmX8aw2KV9mxnayGwfzAZdewTqYojotbx2krzzF7RF1dvKd6L4mQXXTdzEHMbCMWw",
  "key41": "4W7kuYwRdw5V3wWZPDbh72U8NxHT5SziGsaH4L9ovCqcmAVKgmPa49Zg8mXTsAShYZg23GJmrnwSMWuSUP97rsLX",
  "key42": "jzFWP1PQzL6VPcj3QRG8FqDQqRGR48sNd3Ux5RnNtBRZHvRDdwQyTPQU8W7qjF7RiZo9DXgrbquQpo67ZT48oUZ",
  "key43": "26h3UYs4DE3uv485cda7k3TbVgiyaX7oozgFb22A2vfWHZbEZGjETJPgqDSyJuUUv2VzUsiJpuRj6juSQq3jTLQU",
  "key44": "5i72s6FBgNbZu6rx7NnuKwhUfiUshWUTmBMNdxBHgdzdxCGveesJxjGmGUfM56ioSG3sY9Erqd42UrNHh8MtBTBg",
  "key45": "5dKtYohdiLFSn1BDtL54s9ZiEPDYf46p1bsmRTM6npxMUGMWRpx9nGi8V8XXPAdNfS67Lcg3CJEgvqu2MvvPGiHG",
  "key46": "3n9CUMXDRfxkSkCrHrQazoXYpCbsEpcLcKgreCZ8tSTcUZpWap7sMncTHazTWnAk3aZ9xjPL4P87jAnQnRQ2YcHV",
  "key47": "2UTK8yjaPUnrZ1YmB2mqxcj8yC8GJBvp74SAqWXgtDsNMKPgSTr89SgoWAcrsJJN7A9pSgmS7nGkpyfdGG5teyRp"
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
