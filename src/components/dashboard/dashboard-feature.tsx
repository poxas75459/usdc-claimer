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
    "1En8aDZi4EbyZMM3ovNrvAArVCtvi7vNg5H7DdGCUZDkTDKtUeeDuERnFX9Wz5tfANCTgcRVHRYVmSp3Y8fFmfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FmV7Aj8tGsb49dPB3P2imhQKzUjXMiY8A6YLBiA7PQVF367N1ugKZX55eZRRnrjgaq8sucgiUwSohRYH6pMxBgi",
  "key1": "3sa7qa7rSmA3QJyb892LFnExKpC4SJfveXC628owu8hY3JsQi5FY3eN3YiFEHHkoQpetSvU4P7Vo7RNNL6rb13Xp",
  "key2": "5nM3R5hM2uotVCn77DHLanvNzm83KwRnJDYPEjreHRzU9ErpNJA48kbYDUPPt5bioS2EnsvEjBVvzbXU2GPrxHeQ",
  "key3": "4wj1AzJVYNn4ViZozv81PuL4PbJJF1CjYMKJxth7MmVoY4KYHE2BxXfkDHQm111QdASqNdC6j5RpnyjejuefVbNa",
  "key4": "3QfNPQqj6Hemi2P1svEDVu4eDtnzhSEE9267mSR5GSMvpVRXCPtvYiSipA18Kbd39hbE9386YqqQGkjdrnGS8Gxo",
  "key5": "GjPbtbimSviVxzjqNeNkkM1d616f5xged2dmMG81dkg2mTBmS1xc5SQCdqsvEWMRcrme94xC2vCZ8nxJZVST6gX",
  "key6": "5WZVwSeE8ELg5YEGi391u3FVFbv3jHT6E3jtYKMJy3qfVWRAv5cbwXBSx8N2Yu5jWNdefywCyN6c7vyJzjVcgQrz",
  "key7": "3NwCPBw1MGYFuU1W22PpwNHoZ9vW61eQKWk9n8HnDHcRUdzD86qr9V6SY8e4TWfN1W3ovSV5m8pywHhkHnz2JWQ1",
  "key8": "2P98Sq6pRMB2kzGwGe51c8Y7oCSw7bVHQLT6VjV2ZCota6VFcJxNYhPzWJvgJWPK6vgamHoJt3gnMpK737mMxijH",
  "key9": "KpVbRzZHo47jgidPoGcNeLiwWLoJjTcsqBotsNDhgyw4eERU4eC6aQ6C5mDG224ZF8aB47D3GZZqRpscZkRY17Z",
  "key10": "3F2gffqwHsFT9CTFZj9SrmM25WYFKZXcrZ5jhHsHzGopmBU9GJ3APqu43jXVtKHfgo6RZ6fsk1CmxKXjBMPEvyFu",
  "key11": "31X1rBQgbF7yNc5nPdEQNHREG55ThrBE7aye4HwurtqNmwCqsqqNg4vVCenERqay3LTjREckNZZRPyZVK2AdWmJP",
  "key12": "4agB65iAhFy3KU3UjjppJBYkcDz1qr8NgUdMZ2EoEwtFYaYXkGMdYwaiYw5oX5UDv2mSboGFuuNL3oBxvVVJeN4B",
  "key13": "5oWGngv5XZdPKvt45hQs9vArDYRriNT1Nc8r78xG13TQhgV5nfNQ1GknCZ4mqEGAjZM6CyHdMaXLHo8VrW5nQ2iL",
  "key14": "2vjG3JSYwbSVRpBt5iVBdz3SAhhbAF2sfbQ4exJWHwAZpo9jEaUdRkyojYiPmDDpFjnSDfpajvHjZpHW7kMH5VaB",
  "key15": "2MM8VZjaSUVJ6c37Vh8uPkXsaWUWavpSb1M9hjsQbtzJWZse5czdcrDMZ7Lj6sjUroY4757nNraf5h8qKiV5WXWM",
  "key16": "2r84DQ2m6vW4PjyDMScZnP3Wa3Bod4kndRG1SdzrKo3R5kX5ycu3hL2LMsLdmazfmG8Ya3qBzLsxX1RCBUkLa7oG",
  "key17": "46jSgQi1TXXN7t8LsyDwkRT5NZu2HnXUWEDm5p9fB7srXPqHUwYhyZK8UZ6HiTAmR8X1RtD1gvDPvvoeADZoi5hN",
  "key18": "2mdSVTi4CwFqG73wjt2CgKKA9jVpRiEgiNwA7QbCYgR7khZ1t6SmxNpFdvu4zVzaqv3ptAntYynEiYcUsKzZMyBa",
  "key19": "5nbwfba2EvwJsxX32TQhyM37ksmRi15CXhfo1yBRGzvn2CFjxk5W6CdUxbvQm8v4VWMviNmvhHhePtJkDoTVzJH5",
  "key20": "34ZibYzAX7wLBZLQqWumw8F5rxtQMKBm4AwGjH2wn3ND7HCvK4scJdtsCZu9iyGmRfBXH1HoC2em834s1q1fccHc",
  "key21": "4fh8FSQWCv8XUYQzF5p5EQ62F1NdPqL8AS8rv4Uzrx3Mw9aLH2yiByTJRLV57ESCQmSsnwY6ZRdrxT7ng1LzMhkD",
  "key22": "5UepvQMV2o5gfomWLqsFPr3zih9EqijrKYEuawMS7uJbBgM6X8qaGaFMoubQ4GCQkqRu6jM5dyuubU4zMD5GQ34t",
  "key23": "62HTK31VMRFvx9i4QyTgnVP9WGaqvYTqUAUi79Lk5rJN946t4vikWe8R95ZX8HHSisPAKPpvYXfDpCgimT9M6PoT",
  "key24": "4fVWQXw8YYGW7pUTzxxC682ADob8df23kx8xxgfW8157Q5BSYS2znuCZ31f5FXLKAKNC4m54hfRWXyvXSU8LgTMf",
  "key25": "4zwzBVhzMtcMXvXbFXDiH7aPM7sSxKRXgmD3Mz8yB3rH7XK3aGVxnYjUKWdjEEKBG4EDknXZ1xz4bbbabDDFYR9E",
  "key26": "4KL11m985mEfCo9AUzjsbkGGpLMLgNDkHLsSF646VwqjCw4F8b65kSgQLRRV9i1Ku1zSKk1dsBiyKfFh1Gyem5J3",
  "key27": "aCaoWefCNJZjtDbfv4NP15AjpH6Z1T3wfqFWDvXss5WneJ5SHD9rkgPeLkRc1qaU4Cor2Hzpbd3RnRhLev5AL33",
  "key28": "5XP1KAfJTd5LSsNxJKCPev1RE2qyRwxioLYqMvsWzQFZXYLNpyb6bvfjaUMMDLXY9by39bDLGk8gRVCrVNooUsri",
  "key29": "rLyzHdbXz8PLTdpxSfuNcJb7fcoscqSKFaZbSuPw1UbfBqHncP3TgxvtprGKK4gHSG5R9vuLSmgdZkusY75Qb7G",
  "key30": "2qZwaKfnYxgLS26McFpxdUNwFwhN7n9Aya4UjjMfPs8eBvAFhZRjrFDxHjKpX8GkAWqVGPDodYuA12qyfpprVi7n",
  "key31": "35nwkbnHDbjP8KzSGvJU1o9UK8hkvoXkW2o395tmqhbBU1UbiNgRNXuAEZ9krcyWxVnDjmafJLMJsLYzYwEtxZ88",
  "key32": "62xjHJnV2ujoDdxKRfivNWS2Rgxss5NJyqFQoJfXmVvWZv2nRE4noMCGoeqoiagvrsHkj8nq1zF6SSHjqBFmSEu",
  "key33": "33AnMijqHAy32LugpRSFFJNbNcQ9X6dS7nrsPDg2sZpXs9rfbqtFwLaC5142kDMBot2SW4p2aC8HuiA8fJsESWpY",
  "key34": "QKZNpPiGgDHA96o5adeB721jSefbuNP1iwTpVGX8a9TJmzL8jHERZ5eaVmPCEL2YJrrLzAQEvpPveQF2BpMwvt3",
  "key35": "4CLUxjrEw2AWwD72hRNerAUQazuv1td657mwCAY7exECaNPSzMggdy2W5BAXBJFZj8MfgGJa5aLCJPiwtk35fshX",
  "key36": "5zwyZB7wvfMbWVxsSAmCqpRC8LYz4ZKrw3HPStt9s8nChCKN44ffTNB2MSb9sdeLNBE3aQg82JznWEDcAZ4uVezy",
  "key37": "2pQKdJ72vWBQV97nVcasH7TdTaZQ5HCUax9BRfhMptxCZW17GLCLBnMT5vXQuhBjwKq9bNGizdTa6iUYNVGieuFL",
  "key38": "62iwNcZgjP6LZaFXHaz1y6VyqjfsLZchYAnWFhgJ1gFtj8zbqe2fvXbZDZMKNjfxb4Dc1f3Qzx6RaGrQt3wD1EyN",
  "key39": "3YihxJeunV3fbnzSLjDKZPmrf6Xf9dUzBovHAGNi7VmrbeuWYfFAnyAJC7nHJg1wfGGQRB2f7j3iry9xho9vecDW",
  "key40": "3eCNVjSKCmqkoQT5b4v5vgFJQwCdcjr2GzcWwSsFjvrBFYMGdA42qdhxHWFV6KxnfrzKGXmFtsHjWAQKsY18Ww27",
  "key41": "c6uCLRPSDXV953yQiW42WiweX5LcGtYqAhwKpKjk58EYWq5pN6Q6K238srWgVkZoxBubnkMAH5mVFH4ticjChPf",
  "key42": "4tac5vchSFjQGQVnCfZFG3qwjGWykjmvMHcsEGEbtGx1tAEVqGLV5XayLrGDyxSfwu9Cdw3CXhgVDCbMM5qPkwXn",
  "key43": "57kLr5AzEkFzjbcoE6WdswFH8nmXNmog3m1z6N64Mzs3J4vrtqkTRF3KnfutdFtoTXyUbZhUyyMwH6Cgh39URgtz",
  "key44": "2tYsiLGdZZVeCEScg1NBWzYkeghZQUGXNfkzpBNeUyMv9cHb3ePVN7uk79Z62YwykqsRR8Cpqv2pVS98vc7pGL5o",
  "key45": "4UJvXheBwtutGfw1LXS2NkewVwcRs9ZbwmBwLCGcWoCpmBvjKkCM2AbiHpRjh7shAtERNvD2UBejqVmxex1sWRqG",
  "key46": "4dMELbHMVEZQinooQ4dsipXdKgyrEqntEMzCgSGW17JoGZDRYijKNtkSMEy1Kjc9JwHXQgTQVPawZ6oFc6YajfDL",
  "key47": "5AvFrV6yoMtsmJrTTKSsQpdvHgEjNmvvEieqxmV2XvWsbBBjPvXfaZfogsUkhLsLvLsQ1jDtpAyJBMJzVpZzZEsk",
  "key48": "2N3z3BtmgnacTDSwTWtrrFWUPtY2qyvZFGz6uNgLJ2kZqN34yJhc7zmXrBGLyQKesQXV6BCiabW7H9smvMivnMHf",
  "key49": "3245Ti7YatY8ayNFaz1XCcewd6JYfi9SjEejGrutk72dsz4Kz5fFkehRBmjeTE9MCTs3QKCfhRunpFpj89U7rN1h"
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
