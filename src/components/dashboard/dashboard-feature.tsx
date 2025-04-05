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
    "2ggJ1oAwaNjFuevtC3DbWf1NZvRxvvvHYnd1X6LE5XVZpqYnCetZDcG3nySJyyj2SLVaytpnJB12f5LJM15JACNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3T3SizrEkay9NT3BvioEY2hSEKxhWdbjNmoEsEWSwYvABSaZmKrAWN3uGiU8XfvUdPrscdtYxaxZFJYRj7iCwp",
  "key1": "52CmYcyXsQH8GZiEFv3ZJDcqiy2xBe9q9wi3xwsK9WCPdiJHiKvQMKXWftyHbaYuvZX23hgoaJmVdUWrvN85jH9N",
  "key2": "5yFaAZvbfkRJKv5DYsrHe6qEdk5z6z3hxoX58MrFUJRnF2a1JrzMiRCuPEykPGHguePGk82xTHj6Qn2DQz8HdUeY",
  "key3": "28nK2dU39unD4RmTmaz5VWUKZASFJevBtXSRcujfno46NrN81nkrvnmmw2PfdKgLovjRXoYbhsG7XbajBmbF2vAe",
  "key4": "499gHeGocFneK1go4n2ocisApDXc43JPzYpQ8WVsc817saJejUnqD6gUfGFp4aFtYZhZzcyNDGCq1ZM6SG9Ph3JM",
  "key5": "3oJekeFheU9B8j1BKUMCY3o6KVEpQKr8cxN9bhvhpB6hyqB21cR1Rzm1kDBCQXwxZ6vQhsTeNmMnMN1KFZB52eVH",
  "key6": "5BkgPDvqpuM5xb2kcJmo4EPhJw7Sajqhq3mWqef1bYpVeALdGu8nmf2nVvUNC8gHWEYhjVrRuiZoyU345ocaRoit",
  "key7": "3kAiNJm51XipP88Zj97ftM1Cw5wTzW3qMGPStjkACj2W7Vt4GEs6bxzLgwkixcTiUFUt28BkSzNmaQt6Ywxnj27D",
  "key8": "57AvwdcrQRJ3958R7NsbqSbAMGFVNWnh3iLQENAZRPmMEwTCC71bkiGiCKHwzmnrpKprkchzbFD9eqZNgdXidFno",
  "key9": "2wmjAKicKmAAqzKN5nPu1i2EdvnrBKTcnnEroPcthJ4mb2zNyFX5eD6b8VpCY9Sbvi9ZrhiUgVpYaJKgS23JZhft",
  "key10": "2LQ2S6voAweRXnnf2vwMxWK7CtMKdUGfGbGYVTjtZCmpqvcNHZuJe253nWjeHMTR9tvtWiNX36hufDFuHTkAKmh3",
  "key11": "3mdJx1uUzu9xAPgcCF9VAvtUxxiBNYhrTP1rYvCwTNekhisFSKG1QSroBmeBKP3g1dSVWo741qhus5JzhJiq1m7P",
  "key12": "2ZSj25ZCyYaXRaFkZhEykgmTgAAAwA3m2VmjpqmEv6H4nKu6GpDSPyVAPosDquKi2sekcYuM1X6Qs8dvZypz3uwV",
  "key13": "Y94WBGNreDZVsRdwurGdiA1fnenZ31hf29kWyAoZTAWEZ2gNGb9FYxonLTLNQ8ipfV3uSCT6JBkZzMyx2C3dzu3",
  "key14": "26AcsvkECaDX6MLYwiKvvdAv4QMenbbHqjgPJipFVavV9w8ypwWW3hX2ZoeVzJ9PyKPbWr9zCamjNWeLfXPkJwWu",
  "key15": "53jycbAxEL3MF6xpS6M4P2ABtiiLqMkUEdNXizTvDZbxogewVWWF4JvYmJWXb1TsnKoWgNMbnANCqxDsxxNFSH8A",
  "key16": "3MGUjEJUWW8LT4VSGqSm9NRhQqG8NXnMiMyXQAZmHfUS5xPme2kSEP1PJT8HWzh9A5AbnXdS2wbEr4DvD19xTbtV",
  "key17": "5hD28vM62VVjK5SVSREo6TcqH8gUrwEZuCtUcePYqsNdQgtEWqhcnc97vy52RmmH4A17Pedi6oh4z6N3Eix1PcLu",
  "key18": "3xU3ycYyvGNRrxmmkTvHZ3c1RXPFX7fjqBBwQpWa7SnzJzRNwmSPgkitnkQnxXerCpdPCMUP7CcVAN7cVD4af7x3",
  "key19": "UGVfk2g8sxx7fm4wgJdhPFT3WM4EfoDXGEJsi5Bw7d6mNK5qQP4zZCpGtJUZRgXXKkttcU2BVPfNwnhS685RsSF",
  "key20": "3rCeYywDDauxRMKQNAji8E4st76dMPR993MiJ4UX5Lab8EHFhnCFg1yCorFZSkdK7L6HqRxK6DuRaZtwXEsi9XaW",
  "key21": "2x7xPnMb9Bt38UB7WykLUBd2v88MNbgmPEwNo5L9RKVKEnC3vv8S6zSpJArzKo9CZ9dx356BF7q9jbJ9iZKkAeor",
  "key22": "XDS5A4e4uvvFK1XnFf4v4CxRiqfeCAEYsZbiEhoirMP1RTHZMG19tAcSGPJBdPzDLqgQECDN3WkFVWn415WdHNt",
  "key23": "67XMK5ZxVAuYFuB6thS3ho1iHpPa4kt8C7h5S8EuJWEeSrLzKzX5Y4DxbCXPsmZneAcmiCVscg7qJBjnPo4vKBJE",
  "key24": "6WJc7rNfdWfgnTeQKjsUzmvy2fQYznKWgCN8mjHJFbd3TWmyjH5jprMusUDWMsd3XQmnwDKVqx3hT5i3e3MBwvL",
  "key25": "3TTNHKGCuCAufs5ZySDw9cHqQphJci1e2ayKvxNGhWT1thtZvC3BNzpsoTh67kj4F8ddjCc5fnHkbkQDmCq6HQL8",
  "key26": "3gSt75XtiSqFij1epSwSQRdXG6BQQLVhegFABLmUf2gJNPX7tXoutvSJVbCcuAiyq6X3Bz3BsmHkwA3BSNXdQdwv",
  "key27": "4QddXYsbktgbvieg63ApENSA45STHA5XF5sv47y9KPnNhQL2WhygywtEbJ4fPHe5Gtu3Q8jqq5JFydoRwFeHJbkT",
  "key28": "2L2S3USm8eHTGBhBwFRBF2w14rf9oU6u4KvjXjVjprEWs99NhR9t3SxSzgoDmSGhFan9MbppZYEodQkTDkwUqssq",
  "key29": "5BuZ1yf1QFFrRmzJB5L8BrNvFTVqBVDcQNzcJWPXZofYPpWZyspmroevS33tNtGD5qLgC22hNdpcSE1hhz3mUksm",
  "key30": "N5W19nkDD5nweQm7KesgE8nZgRAuG6BMSkAQd7a1rXk6qKmjtNytWHQQGXdWvBmkYbE5fAQoRAzddYWgN3pEfgv",
  "key31": "4rPzqNi2K7sFRYF35nAcJgQKS15rJi1NveNEipsqD9uqDozHwMkwUqZgL3NL2DLJsEJ1kBaKrznbAPDb2S5ux7EZ",
  "key32": "4z4Mm2YGajSur5f3F41gRRAS4nvbof9SpT3HBtdKTFTMAdA21sGWuoaz7mQU8zdLiHehHmTP1abbcSLsd3A3L2tN",
  "key33": "5j96wjnz1NHRiXyQkMid1nVaGtq5MkL1EncV8GR8QnDzCVX7kG3CCbLEH9vum7YV7fMkvdJZ9Vb2sXHFLcYFZj3X",
  "key34": "5zHCScHrCMeDTLnnrg6S2aksB8r1WbsFig6omJdFb11JUdgVpqJPvPsFbLcnf4cZUAjavkGW1vEaqwr4z7LJUkpi",
  "key35": "a4LrcV2yxM1AXShkri6mhA6hd2YtvfifZsFhfUnvCRc2cHKucoKTecpn1U7dURkSFtk8dpPtAaSdCb6VacAPVPy",
  "key36": "2kyq9wnaCbKzcoxwTRR5V4yEY49xaPQ5UTUmWENsMESsW5rmvpL5WmMCoVA5kxhKmrgcSX4dp4SJeihDV1uJXMYY",
  "key37": "2pW7y7iZK9cTXswPQKJvYbiDHF8GoosKp9mhHWasYBJERJLnhWYzJYd2jJdEZC1htioeXKcZeRdKqSFjdvcJSxhE",
  "key38": "qkeLZKXBiVgA9eQntgsU5hQR12HHUUi7cM8wxTywrMV8Eq5cgYLjxGqhf2WiQkdQEtHREYwi6jnUTPYc9Cskvi4",
  "key39": "4mUdP53GHADZm1KPZQstWhwiK9oUG5TFfCSG9AQrjywiH5gq5aUbvksEqA31Y9rq9Rjwzq5WEc9LRQTBKauv7Hx9",
  "key40": "2QD8XiabVgjDaaf9KnngL3jQk9TopQ6YYtWFMXMEW36ArS3zMs6qwnR7KvfzdA5dFrSa2oK6dsFZY1VzRtsXNoar"
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
