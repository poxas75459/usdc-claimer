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
    "3bXxZrCiAdxpo7QZZKSL4uPde8vsHvewnGz7KMiGgXKCAqmgiFDQ2quqkCoCq1MeZWfNpHxAZ72Ksyq9vor1MeXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3USC3PoggoqR8BTSRWY5LRHcv6JPXaNKTeovgUicVho9MxxmeYPCPbhuNT8GjGbZdpfQ6dPfrVsCMfaVtt3Yz885",
  "key1": "3dPEy1CBdpUsueo83rZCBtrk2fCTrSytaRRRR3uLa5SWP1UqqAckFMPbkB4qYdTw86XyXvw6yGu8fYN6xt2QQTHb",
  "key2": "275dTgXnUJvEAHpj17WKBxsc5hKysJrR2nvM1cxzvpKMLLTQA7CF4SpGwA9ANXVjxmMyxriEu1JvbB8HJ35ohwEm",
  "key3": "2ikqfHGXiCBJgUws9NWSdb1kjQNQ7MDRK3nTzXbkzDL14vScQWvyz5r1ytrnRtmzERM7GBiacHb4PGdFqHSceoKo",
  "key4": "386TU3GLu3KYrss1RVLMwiGaQwCsKP3ZzED5BRGerNPqXxZcmCuAv4F6zTuKv8DW9T9Q19KC6ZR2tGd48t2pHXU8",
  "key5": "3xnkTC9uydjFVkEVKrF6VDcw671QVMBjvrjo7bHPcYeACifW8kv4nfY6TBipPSk3iqWufuNd6VuWyMJ7XDXqFHog",
  "key6": "5gJYxo2mA6u74vBCnwenUPNhGhh4Yzovro6AhEKoS9y1W5nUB3KsSLg2tgQgps81w3VnuWjrXC1N9t7Sph42jHMi",
  "key7": "5oeWorhsfmchcbH5MG28kmtv3c4HvqTmwfTpDHeTzuUiD6dY2udbaNziTBdUujer2YyZEHKjjuAsEBGN2nPxNm8B",
  "key8": "2god1F7rZ34seHUX47np3BCJVGUFFQxaSVuZUocGbbcg7R162XfWuy9kpuA1XekxE6suDRrhjcjUEmdmNDxXDHL5",
  "key9": "5zBnYy7rBQrrTLZFd5zRBACWJwkmbsFitoSipiVhPq272jfFp4L8fzPiWhbxP4YgmH45WV8Ytix1nMNNG3aQKAtQ",
  "key10": "2jojb8ozFJajsLYrsUkWMjrh7qYL7R4wzVFaPrzJ6M8H7HCJy4DaK5VRDC2yYSGZBV4ybd2TwFuNgA4VDhULJoao",
  "key11": "3AXCcXvM6xWgmZwjKwedFyXYkifzujbu9QWun7DWtS2xCSocPhKFqUxVttwSgZhBbMjv7qKWqUq3tiW1CvCApLRs",
  "key12": "5sjiMe26txwFeoiAjJJ4Xd7vwikBuqzvEvZBdhdEn4puhHoPu5tPTx2DiJQXsKKvE4vUkmUMG3SFKhVskW7WrL1t",
  "key13": "3NfMA1bgzwfRKguB9FJgPzVP3jwMjEgcpPFGd3qf9oXjG8MYrSP1Zdi2g5GQ2gSqeuU7hVVXjgsndy796zax9MAx",
  "key14": "2dnqxbiwkV1R2KR3e69ojtfbEvS6FaLPD3pCL5riB7GKHTYvgVBhewf2CdRG5SXSEQSVkNWvr6paT1d6zL5C6PB7",
  "key15": "2t2tgihaHHZUv8kMLQAw3cQMKQyWfMSCzDVoc2AFZXHw4PC8qVDdZ9wFJZXNrV8P4Wwb2Gwae6v95nXifMZvD9wq",
  "key16": "2JmNeCNJJPMbGAQz6BLFbHhsZnkB5qrMuMs6RgGtvB1VJKB7TbLvNpaLuSHveKJ6qvq4gJViy1Fh1dk1mLPoaVua",
  "key17": "4vBACAJDcJJHUeyyAQFbcC2mZQA9XnjeBiQraEhH1VETf89RQ1mcx3nv4tbYFC7fTxXkGxqiKFaBKsEcjWgrcsEo",
  "key18": "21mwEepjyB9WoktayVUQdswXZQE2p6NBFyZT6LKrwGrh9zLEFmRT8JLiqgf4wc21HMUiqk39aAb46zcHRvFsYH6H",
  "key19": "g8ydkJbS9Xw78frGeugHJsjXb4YD2D4wM4czgrSq3b6XeCCPUrWudHZVUjsGCQT5tMntWorUV4kv98PkAfPhmoS",
  "key20": "4scCVrNijJzeSim85m9kMrSk7zDCkv2ZV1GWvxcJhcQ6f1P6cSpmpTvSgPeFMty5PqvXEkGQTLrvSkRXUsqDixH3",
  "key21": "4YWY2ed62x3gGKoHK1YK3mwYXJdMp7JRLr5zxtxmpf3cACXRJRupLKcEyPoDXm9AgJgpdidTwnNsj49ziNkfWRp2",
  "key22": "5ECiCdhLo15BhUqDwr6Zr1FZGDfn8rbEzXE8sqZJ5VyzqPMVmGUsqAtf8mikNyHjU4e6LuCnDKyH9oJpdd4asch8",
  "key23": "5M9WJ5sWoJbwZVHrZimnVM38aJynFZixDZVu6YQ8tzQ4dk87DcQCiwKkZHYHRu5uPhvig23AUA4CBGWUkGBcZvAJ",
  "key24": "58Z9ZsosqCnaihdrMFfTBNheedsvL7CXHpVsW7kgnY6ANrqnTW2URHqMiCjUG7f3otPdWx6mdmKS5AQgjj4v2mpE",
  "key25": "3xubuVVNwyRV6LuoWAc9eDCdweWbJuChqJJVgyamSQfkSGE3tgcYgUKSfkAK6VNiHDyqgSeSM6xQJX4h6onexca8",
  "key26": "4CPMfFp8uZBuAtbu5bfU3AwrgubF6mZoX8kBaNdAJqsSNRRkmrmvM1pbm2HvvdngtU5cffRPLuaXNZQpivQrWWpY",
  "key27": "rNgbDAJDU5kogQP9muU2qe8MSbPshicAn3tKc9eH1vNWAwB7pNoRnStWD793UtT8DJauMfGGyczEzo6D5HqWEaZ",
  "key28": "64DaVkrG6dYJb8zYJocufcUGqaL8iPygnNWdQniXqtaq8v9HcUH7PqXsmy5bJrazW9ZmSAGzm2ugPQbHFVfjLoEz",
  "key29": "5q9FXXVfYkxFqzkiPVsiC9FPThVmHeGdzNmNdAMgEaJ4kCskbsLLCaurvcJyci9TbMmHH4UkksysYJCHVbVmCAyg",
  "key30": "4Abyjfgb8jdhQawKVGuxTjhjaWWhqGag3pPS5q1u8Smo95fASYkao2bka6tdmEr8x9y9FcKZHaUA9A8P2Zbwmk2q",
  "key31": "2TUSs9awV8FrM6VpvH2h4fo9tLAg2995eY3iG8RatoUYj6vWPj2jCKUFUjZQz7x5JvHejyEiExnrR8jcvZWyw9oV",
  "key32": "3jfZfXom4vfV13LcVTR3Hguse6NdACJKoPB5CXCzrH8TEavwDkwnWxEmTmLnszsPVFUY3NR8mxBjhSx8Rs4Jq6nV",
  "key33": "WZjDZh1xQSjMsb2PA8CHTcowwQcxxZ17xSKrinX1N4gnRMB4pxfw7bRPfEpANjpcgbnfQxjXPHx5Sx9TYL1vXVo",
  "key34": "5AS9vFZnesjiK8GXn7ZXvYF2svmC282Bazb7qgX7r1ougE7nvPUPFmprPmhFFqibRkdHxxzQUC8DL8B47p7HmwWu",
  "key35": "2F8L4fafDrjdxsV3g6Rn7Fy8HBhRuz1ZvzLngpLZnoz3aenQhtHXrivmJbVV3bkfamhqdBDxuEGMCoMC8pVx7tYa",
  "key36": "6raWGRQfsjCKjstAZSuAjbCFpzbyUQYTLcjftwjXs28Ra5PCCYThAcQJR8LDrLtCNnMt9WhUQuXRRFcpndgGJky",
  "key37": "673nse8dUxxHhe6d9HT7E76YRWdQonoBE1bvBdiSeqKSRQzapnudfrb9dTzHBJTi4bNVd8Sbq1QXABAxeGRLjgMs",
  "key38": "2ZDYUNpSj6dURvi7wSjZasrXkQNg5fJGuRFXJo3cEYEr3eD1krSD7rTUbDnRrYMaxRXqbWrJ6LqD3xpqcdqTLWqX",
  "key39": "5aDGmABZEvYPbk8h8a3MjcD2KgCPrgWpwkY7qNffA25og5oPguEGPkYHUH6JLZupG5LrFMpMsazvxwVuXDFDxWkq",
  "key40": "A88dAAf5vUoSLkRakag1BjdNGc9nMDG6i27h5s1Q4gYroNfg2atZG1tQn7e9iQEQNjS6Pjm4uydLJwbuXRKNnYx"
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
