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
    "RQH1eyRpZ5dU5ozD246GLzpoYhomgNGeR1szmT6vNcUog2xLNv87yxf59PvZ72yGDtvuZrMfDZG98J2nz9TkhpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3Qw4z4zbrwwAuhsAfei4WpaFEp4UT68YPT8RhFwuzAbgFw13hWyQqhAMd6AgwH2jr7GjQjAujxNnVqrLzbcqwA",
  "key1": "bWznMUVfV44tHknAqcANgDcYz3DR8gwfRbUEdVNgT84zx8fkk5oiXGzEjbQWwLtWpLnmntNirqvWGvHF9c1vhgJ",
  "key2": "21svnWFgr7pejjMDCa7zACXBzhvSs91fLDzHqT8qG6aB4HURKzF2mZeaic7Ux1SXCpAH8gkjW3GGyC1vGmFdfpq5",
  "key3": "arAi4q474j4SWeWUQdz3MiHR3hTzkMcLqsnyaWSnahnG4WCChhXYcLJ8dDqYfSVMMC8vFgeQX9Nk4ZyPQUesdEY",
  "key4": "2b5W9HAKrrnnJ68D6MUXWai9UnssXJkM8KA3p3YFm8FfaQ4FSeEWgoTxLNU1SAbAE4fmJQGmk2p9jccjWPS5iW8S",
  "key5": "2Bb6GckDxWHBv7QUiZ45YRttgbGYK1qXPn4r1JvNwtWZqw1BCDxF9spfh2Tp5y6onsXSc1UkQo4s1SH4S8oQFnWt",
  "key6": "2FPt6FCLQGbXCEoKkxdPEJCXFgcqouTZCrX4nwovZETrptqsFUfbjTuDZ32BgbNgFoh6oXHHDa6AmckSx57vs2VQ",
  "key7": "2VnZUzvVTnTijadHf2qpL6hhaVGY9ZYJr4BbTVqUs28NLfDmDWgupXZqf4XC1mnBcvt1GExkiFJkic7e6m7rUEkS",
  "key8": "3CcfiSXcVjaYgJke39TvtEogkoxKHsuTdG21z5tpgtqoFSn59zrJKDhsJ8Hk7wgm4aDsCMmRr4VVjc7b9Yq8EZZ9",
  "key9": "4BMDZf6bbaUm3AWB9QEufZTtnL3xfUgpG8XjSnQcaLJ2zWuxfbdFToVAMxmaV6KVLC1kJzLHRPgGAuVWVWn2hBJn",
  "key10": "23buefquhEauVY1Bxop2zyvuybnmbTHkt2EpYcJhDSeKAF3dhzJ5FhwMSUwR7KVmBvzHVEitkn3gvXNanZNnhRBj",
  "key11": "2PKDu1GpsSv3sJuawxbmGmJJJTn31oEFYxc571afW19QhsWoMAPPrWgbmvcfTVZnc3M72LpLFHCQ5hXKKheVNi5D",
  "key12": "3iFhNKctZSJJqvAsQ7koRReJ2t3wwRzDC6vRx7Pop1gAt6YtSSuwxCSajdEXdkSexjV7z7XEgpGYs59c7BRmwdHo",
  "key13": "58nn7mbMkHCk15e5mHXjUPwANAYiP9W3mjdsXuBUwrfaZLWqZhxxTBJcRk9LhkXCbjdeE6gc8RDxgSDuWCirotvb",
  "key14": "66wrcr9GZ59picsB4L5VvqWgFjwJh16v3MDskwqLfLkfa4gbSn2a27LXUeeQpfmTrcgTZdSVQjVfBMrjYquVJCWV",
  "key15": "2xNEU8JXmwBJG4y98xwgZYp4fgYrRTJ37dr3VoGWzhFBLQ3n1j3HMkPBESjP25mdAU1eHYk9kehpQtTDmbxW54Qb",
  "key16": "4RZVFecy15QxPqH4gd8G7cs3tkwotq9XU9c2DeLjbqNNQV5N3UiFNy27izAx5Gx88nNPXdftky1DXh8yLZTb93QW",
  "key17": "2vpEdBvK1yKTUibdcEf2u2fws7oG26Rj8CRVDQV6Y2mdWDsSXcvpct4cvzgD5tA3Tqv5YAtbivyqsrRNyKwmX28D",
  "key18": "3PRwRB14N7e3mwq9dnoMGqVT7Jy9mqAJ9Uthp33eVgCNjZQVmX7FVLsa8jjVcVFtEMCSewKAuBxfSx9xYyrBj6Ux",
  "key19": "5wU1Qp4jTH2bMEq1rGBhFwkALu5Tou7wJxXWWXZVcm1WjFSmXqvEHfnXpmLWhgJrWbj2KGBcNq2N8PqfXA3mhFUX",
  "key20": "4Co6pjbEXBs9H4zP9PgSys56wi26PpRRquXXvtVCwMF3P66KuMrgVjRwD2ksG2ooNpsCzkPR3JoCAnfnZhcyuFZC",
  "key21": "5BPeapHNi4bVT49G1Hm7mg5hLUf7h8Kr2Jd8MvirNs9nSo7g6CUHoBN18ohSn5iX4QwURxQr3wZwLBThg9ouwZMR",
  "key22": "4QArSrN1xJvvTbky13R8PbmVkuA2MC1svN5jwYSyhRUfVDVX6AVTrwNExcf3fYSj5wwXG5NbW3rH44w7RUQLc1At",
  "key23": "3tH1bj3N9y6QHDSyDk3MTvJSuBK1QZWPFQRosKkJNH66Czja8dHeVAD5JTfbF11X1FvHp7rdMkio6n2ReEWUyjqJ",
  "key24": "Dyt4s8KQaQoGnuN23jAJrLYpj13DrV1ENxkpFzHw8v5EL5AfZjX2mMjKLThWUYGpbhzydQ6BCZXrwTpDDEFf6BM",
  "key25": "EePkci1rBU1KiGc7WmFCqq6uzXcqbv4MzjBqMQvnZoRVH1vX5TLAxYyghWjh78cVdPvesSLeAnWbFxEAmPyFYYM",
  "key26": "3aZtHsywu6dxL4gLRxcXc3T6muia1uEPmKHprsASSq2tT1JfuRzy24yRHbRuyV5MFKQvcetmcpyHR28euNRrvMKd",
  "key27": "3XWNQcUFErjWxJoG65kbLf1N9A3tzRAZHjSeQSymz3xvCbHXRokNeBij7UNfp8zM1sLNCMc5eLW9Ne4sMe3rXWEY",
  "key28": "4MhKtSreRoBuCX2g9KsZX7HJd234jy9Wx9KSxdh38nvLNimcS7rw956qPVNi4Bi64iZ5Ya5Nt2M6WCSdmckofo1b",
  "key29": "2xefkmEapGoa3kdxKtv8nGt7xrfersmTg4kZcNQGFGEL81VuYFNM7QTYhd4L1rwAwPbSWH6NsYt1SiJWbRhpYa3L",
  "key30": "4FqcSE4KRGCC4UDdCZAq4Zsi2YXQPamWXfLuikZC8rVn7pSzbAhbfrZqbNnd52SdBFNunt9UR2RqLfHSm7fCo7om",
  "key31": "244ocVfTMfLc5YKcfPe7sCn7z2Y9hTofVTqXFigBPZRBZsNMHL7ZnGH6CNkyDcnwViurLbuaFgF8a34GaVHeaiuw",
  "key32": "3dkpWPgAyHc7JFADNWxKnnMjyLoPpnQKfwHJLyoiTygrq6zjuoQinSccyu7CQyUaoExA8m6GhNPheMo4CQEJJRjw",
  "key33": "TCHTowhLCrkLFT7DqVNhcyFDGrFixbEYGZyjk5MDfvzeaD3CM91ffdyYDHamL38bqZmuQvdRggDmXtktRhufVTK",
  "key34": "47FSTpxMi9hUp3DaTbXnD6YdKL2AzA18x7byrdYDaFkHRFEo5v1KWs8QDRrsTzD1oh4PxyUkiajoA4V1MVRTTvii",
  "key35": "6E6qH3B6AVVRXBpUejbYjE79kEj4SjqEzSfRKCT3eBZefKnMuM38FD5TvcJYaQJifSjSpth1bpWwHNfdkC67JWG",
  "key36": "3VWUF46YMuP2QZF6EwRkh5Hjyzd3yeB2DsvJmbWvaiW37AgTFUdmUFzXRaiwLrosb37nE1PMBJAP2MTYgBXL7kcu",
  "key37": "2zWLrqeQum3ov1Dtixx4NHbLkcJxzTX1bQMW4sEt9fJaY9Wco5Wcd12AbfdUiN4pd79GhZvd4r5wcJi5ASN5BdLQ"
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
