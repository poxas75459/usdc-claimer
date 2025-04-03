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
    "FnmSNvDgtikPf69xXKBoatN3imoR15nAozVPk5g3NJLLnJrawFurg3DNuhLpvFr9zG4ojYA64BoEoZu3BebVTfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDgN2iK32ecmt5cxrtSFraxu3upkFKMqDWZ1okvueFeV25XFvVpWGpb4M1NvZBJb8ENL3ffhwefXgyuxuqTupZi",
  "key1": "q97NtLQN3ykWxMZbjHxoJL5e5ZhQxNfQWvbccACxRfBiuTCvRhPhTwKWjntfmW3j1RDkuHg7hqk1zKe95xDjQiF",
  "key2": "5SpUiGJkyhpnzy1GGmxvEMY1jk5vh7KsemBWeLDUKvJkfu6faje7TTsVEYobC3ts4pdpPiPAG8h3H3HrBjCaEFmT",
  "key3": "5246yAKyegeDsxDFgT6ZkzHH2y4U8jkdUQPPUTFqP7HaJjUrHkWGVjzzcpYfmFDE9QZevTCz5riwx17xLAoUYTy",
  "key4": "3UCpEEfgJSaTMGdD1EGNpD4RsFkr1N9XMUbkH1K8WxDdAxcUAhxSVfkDr7SZgrHKgKvvyApi9cc2bSvndhcREDob",
  "key5": "3aPEkapixzZaX27xRvGkEFYTiL2jpWzBqrz746K1XzPdv7vpM9Q7Atk4vPjpn9RSdW4DxDYjg8oSuTqwx7tYurt8",
  "key6": "57NoLC8nqdK241YCUTvhAy2jWhfX7J7VUVWSKAGUbNy56bcCctemKGrRPmsaUtCSQdQr4JtiQuLddAtTGatsPhz2",
  "key7": "jGMehK6oXPjsXwYDJDSeANsg93irXX99a2xDbEpZqFtWCTACS8pZQZVjLSbWtoUqT4UwyQfyrwzsaKiqLjGajh7",
  "key8": "2oVbaPwzvsc2m3JDWGhKbZWtacQkJ2DYPZo2id8TRZmTyt12AcUWoYReuk8JGWvXfLegYrxruByWB6cfjBKstRMD",
  "key9": "2UKv8DjWTvE7DrLi5qo7X2xmvASHgyLVwtRybnp3bCxndVvcKLAfM4aMZXfcGp1vdV1au9PFhvY7CeZ6WHCJcRJ8",
  "key10": "4cgfJn96KryzKTAGFvvx8M8zYC2wkxNT6NDXxLEodfymXEUmMpCZsPJyrhYjxpvmGHcBs6oTGmN2GA6LfbRgyBja",
  "key11": "3rCJZNUzkJNtiuPtGjX9GHGnUL4dQK4zS1e41ZJXHUHdSE6asP1iHApnrkx8aHuvs6pbM1DTKvbGYzBMjNqgpmyy",
  "key12": "4jiWj6ktoDcH3EpUnZAmK2knSmciopm11bykyUSJnoBXbRYfedrwM2V48GmmKeXS8FCcFUGuGjjFojMVhYNmVvXC",
  "key13": "5TwJumuNZ98nydJyjyeKKiW2UxQGLvVKh3tbN4fow27PpkDx5KSqESH5PF48PfGqXLi699rXkv2Fwk1EBNwGrpMo",
  "key14": "2mHRD6otq1JFsg9BbA5UStzYfvP3kqxxPk2USGXfEXkGz98pdVVXsE4rEijM9zhauwLkz2gbY9qWENjCfKXzWDiw",
  "key15": "xCNB2KMiuBeHWPY1wTzCbu4o3vvdQpA2GjmadeLkrpRu3Gjtsq92ZwHqDmSVybGs6qCALyFtnWavPiMVyvLQ6GN",
  "key16": "dGmAygu1g7omqeTEjqVY5GeWvgYU9zi4bP6vZULcNrNTUGD1PHdKamhYYTUgDVDtjPFSiCiJNoEg694VMSnenzn",
  "key17": "3L9n6fNZVDHQ6aKHTsKptDp2TT1mEsQTr7nbV7Y9YiKLMqnsy2dEKAdpQavMJbaPiFGkFXXnnAQUae8XWNFCnijN",
  "key18": "2hsrAaK1fgSdiHCTouqSUrhm1hpAmgHfG9ruhNoLU76XxCWzHrxyVyr65j4sUzmvqZJr4jZ9fc2iodN2gNpVL8jx",
  "key19": "2tUwjT5EoiRAqkK3GanvzoHiE9cAps6QkuriAFZb1Mc7CzekW75C1kLsSsx9dKY4YgRoeiwFAVaQVFyCC2Le6vgM",
  "key20": "5dn2hoN9HnrT4eYNHbSk2k9NfT3Muc5oA6FvNi7ztKuuQezztFgJVvr4fax9bJUgGYmhBu919KZYVw989Ye3NGhe",
  "key21": "zeAmBmWTtZrtto1212v7hNirWsMBHW1PaLDxw7i9LBR5ZTiv9GcLLW68wgmyQBTJPMYVHWj6K2Cpu4MbnvU4bzZ",
  "key22": "24mrSbUQnJStT9REA6J7dAh4yE5smbUTd9SUvZ8tyeSmLY5ZbZ5tyPBjs6oanWUshpso2iuH9X2LD5vBHXeLvewS",
  "key23": "2bSL7XQCzDCCLpiBEEh6hNTNBRWLcnvBNyDWyMpwBXsDCX3HvfvcXDELRhn2oLGWZabnynktSX1a9kuvDFB8pnDv",
  "key24": "3jVk7pu1YAk76TVbhL7kKF3VkQeggQgEaaZWS8gXK7PPBG9pdNLNKzBmtwZ9xToreut99YLzgzksW3Weqt3uV35C",
  "key25": "55fJ8BchKw6xeyobFKrA5FiA43KFmgJbLdqg6Udt9EHcfkpKPB9Saxwnsjo8GtJnvo7a31biz2Ktbh9fGoB4imaq",
  "key26": "3eeDfHtoqHQ7sWgWV2q7F6RCTw1xhYXJRgP5HA8qjNpvUmr7kR7VU1DBzim6T3XGX9Gcxb6uFaU7r6cdiauL2mgG",
  "key27": "nW3zf4m2r982kKxqAujqitM5Dp3EWnDi8VXpA2vCDYrW9G6ukKhwuzXNs88bJ4p9FZDMGjdcJ3zbHjc5LrfMzzz",
  "key28": "2w1fWkKPBWutcbQNFX2UhPu5eJarCMaADuyToDuejBRNovaK2nNGqB8odfJBbfbWv1aKsEVrQvKXSZqVNTgTwuPE",
  "key29": "4h8tZS82kxokn4GPY7cqUH4yhb7j7XmaWAmhcjYHbXBcDA9KeBwZErjoxghVrSqvTz5Zhdwneb7YZSpzc6gDYuTD",
  "key30": "4Pw9EBHkmW7G7iRqwDj6R5EvxCfMAJUNKdncd9piP6KKmY2tqqRRLQacLHkRRhRLFVQGdGzpC21HVcMYu1Jf6c5x",
  "key31": "dvGmSbipfi4WgbCjNgVxrEk7P2wUi7mdNEMxAEzFtaPGQCR5Kw3Z17ngG5Ymc3hqaqnJycq3aLofHyoYZSv8xF8",
  "key32": "41DNcosqsrPutUV4ZbMzq15i79tnLXNnzGyAEMahrzEckRxzidntcCbxLL9vopEgUHwJT7FZBpHf3n36Av82Yu4m",
  "key33": "6jrrMm1C5K4N28Vmxn2P7gS6SS5y4AiPzQgrDr8gZ7cXs2PZ2f689MpeMuGjJJ2PqJ7qa6zU85u43tkWtd9fVzK",
  "key34": "35wnhwJwrbwNN4zZZQ3f15UMx99p9YwKUQb3QjvQxjZyabpvwSrPDq36yd78qkYPEiGrg61yqYmBxP2kN3YCBxrW",
  "key35": "2eR2vJRMNPe7tPRATWyan8oMvCeBWiRYng7Gjrc79ENz8Q3XyhALd2NZuSH4iqbXekaHZ2UgjU53tAax5hZWayVL",
  "key36": "3craagdyVnXecZpAkCaCwEtKT4EAK8oitxRBYbQ6aV1vyVxQUWqfAJr6BC5ujEqLg7BE9PrDqb7SyQxeuug9fPG2",
  "key37": "38HWDSBCjoqHv27x6bnnmZpWxwYjPzbX4yVP5Z9SVG6F7pgMSYg1pSf1DYn5GZS8UtrFduU8mdn1UVe9XwcvRcCL",
  "key38": "3cyd2FYNWdfEFuPvhKvXXxBAzt475fyEhUzKjxF5BPkBoqVSLx7JTCSnRvzbcj11Fdi19YTdTwHdEJCNdLDGdaPh",
  "key39": "iLqR6TNmA2AwpFou1LNGRgcPxZUp39a5LCLy9wtH8iX8g2kwfCr5QhSxhbwrtFtRmsuTVA33AeahRZnUukh4qpK",
  "key40": "3UfreZHKasEtRAmB1dAijhUi6WJDWDWN3Tv5iRXmhymkXD1v8J616MGdRTAfjSKw7MBYA3mgpTHBy7hBzNV7FgAx",
  "key41": "4jgEvXpERvWxq2AQ2Na1FJVD5CRRhyVmJsQcnR6gZGRTbqsgLpW6prpRS9iGBr9v8GgmdsovmYKJre9LBNyeLX1w"
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
