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
    "2WMNEDKkKxbUmjWbEFZ1j9Bga63SdzR958pj1w5JiFFMNokwMvHxxxNtzmRrpnPzkE85iGobQa1qDMy7guzJSqcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZK8ayvvu3PEyktSawCYTT8QMP2gXWzBSrZA9HGFT3EZBUCuDctVCcxXg7RnbdiwrK5DA49j9sqYUGdf5NYE5rAt",
  "key1": "2e79ULNBZdTWhYxrjB2Yc6QqNWXxb6YzT6PQppGUaSdd4gDFpafSLetDRr8CoGKeFHoQeGbWARWRKtM2WuadAjLm",
  "key2": "4pZYkrjk2tCJ72K7oaAD3kCVE1azP6pYrKxWK7bZk2VnZgsXE3aMnJPid9EsDj5TUYq63SRTrygH6JreoKUDdMaw",
  "key3": "2F7UTkxgaP4Ly5D6ykNLisE2JsFvZi7yfKZT8ryjmq74rzRF5JzwPJLAZMxyNSPeqCY5Mv9eZpW1fF32rNFN19wc",
  "key4": "46z9oyCjvDvBf9odQRodmNkiV5Gm9diekBQYnva8ftqZp3fPhbJxsRz7fnpW6PVCGnasXKivaaeQgUiwoeE4xCc1",
  "key5": "Jvf5G76P2bEoVdxPsunwNxWzFs8LgYy5DsVro8XziZ34bAUzGJbdtneDBAA2DT3imfeuCiVFcBQT82nM2qF17FW",
  "key6": "3ttprE4eUboABsnqfUjVcttqYiW7ZUHgxJJ4wikXAi1f2dBE2Hpzn1tPvX3QbDuRdPyeieyq4uaQ4Ziaco539Ffq",
  "key7": "3uzzquNayM8i6qBm9LAXqgzEXQ6jZgbEPqT3K37YwXh6yBo6fjAMpMw4GB2NCoANTYPrioB2QnAj35dcL8ETZAo2",
  "key8": "59kLdk9vwJwv5rq5MAufD8z6sq3VcQ9qK1CG6JYfREstoWHV4LwvX4NAgFVWZR9HxE2kb4p9qNhpEqDMd697w8zZ",
  "key9": "5nWSwC5qaX8DZiZChMbk3YSAasNkXXVJ6RwRfJajCKyBQU1UpS61JKFGNLhFPUcsLWf2mDdpxFjn7bh3SRjQZhmj",
  "key10": "57EFobN2gohDCNBYcnP227QSCyfWBYadeuEU8BtWpEymVuSZ1BsA1Gr8gAmUbdPimsCxiqwUcFLyi9HVYYtDTSAf",
  "key11": "4TZQ9SWJfJ9mYPWNKhFUpfSBMrQysLF5FL4PjLgLb4fjXA6rp8BthLTGSu9ubSy3A7fi5b4BkDG5mbtqpqf9P94P",
  "key12": "3i7obpv4VUQzYTDQLpB7Bwa9sk7W6n6NrYrqZGU1GjA3t7MKovS5e7QfoNCAc4GC9TKAteiCAYR8o8Jx4j2vUh77",
  "key13": "5X7e2oMDdQ978ZoDWMshs6zEcpqmb45MXyqNLymPJrGdY3xmP9V9HsDstbdkqPdGJeo5T5RB4eozVfz4s2eW9fGK",
  "key14": "bcskNdCnUjJE97p9BWZZeoCVcpYiWUSaC4Q9knqRD6kqARyrHyvudouoQEAnDvc6LJwStYTJ2wEmogu2s48ZXJX",
  "key15": "5gqKUXySDeeEH4fusEy9QjX54pbcPYzygqgzSWrrucN3Kvk7omQ5hC44i1nzjgbFtz99iRWFhwCqfkzz8U1t1SGe",
  "key16": "389CAxgefdDPqjQCAkyJ3CGXAV25JiHDv31VTmkmsML9jFsAaUFxyvMEpDnHr5uUPnEZVKiChv7J1A6VieVL3Lgv",
  "key17": "25QfWpykbitcF4HLfMNoR8xiWESsnzxsShMhFNqPTZQb95d9sN1gqm9FFEXUp8si8hH7N98grHgebvNjXD6m9fBx",
  "key18": "3X6w7PGEh625R4gFKuKNF4ALABf7Z17jp5t7EMvM7mmnARjDDDXLKCQGTdTVU2jbHQQ1uL13A44XT46tKSC4Q4xM",
  "key19": "5xvDy124Ezs9KdAcDRfNYEyoPdPGxiY8v7z1k2dZDTRQkXwijn2Yfyr751J8zUC8e5C6psxhr79mauyZGuBBaKWJ",
  "key20": "5YSykhRCSzyi2pmXTqhXbzy9BNwFJu7JjbFmC5xtdgrRNTBvqBcsGrmxCmRH1PrYhwaLja2g5nrsDA9obJc1U74L",
  "key21": "2atFtg8FTZ4uyqsUMvNpXM6hkhpTGcv1jsmNF9FQPboymZXdL5BJkgqo3DQEfvfufT7BFsCX9uKxzgGhGFPPLZsZ",
  "key22": "51QyF7nrUnZBEuYZ1Zxc8pHBFrbK5zgCtUvAobHiHBd7Aq5v5PEgi9DVBHH3C3Frqhj5Fe6DEg28GdWiP2iX3dEG",
  "key23": "kjMi9dGYWeTy7EFet2c6T2hxGobnxWjLQuTAnJHt3sgXQCwh2riFdy7xsygV5FjXLA2rduqr3PZfZeWaPWmkL2M",
  "key24": "QqwsY8aAv9zProTXY7Nf4TCJbgVNyeQeJ2DVUqjpi2enRy9pdwLYNJtM1n2VKcHJ2Le5pwT2cJQ38UX9qSkbno6",
  "key25": "438f4fFH3qehd6HnxddDQMfBSxhfBnBMqAV5nDDevgbZWdJeBPWAsqaBYRrZKrUXzXksHGYCDpwZqfsX2fLXPJsJ",
  "key26": "63FbvKbcKEF2mT3om49ePEKXXvZCFS4G6eGaWAq86ZuwrJ3iikRxjHQiUsBLDGaBC9BvY1Msvec6GRihcDFvWLWS",
  "key27": "38c4VNNnTUT7NdUziMdMnpeDX7jtqZxuosFrffu44fN5rBZVm2sWEpVUjqYxM4DYfLELYQjHkuyUp5iikwRwHHJU",
  "key28": "TfticfMQY86nw2JnDp9LdMS6N3fnBYiVWKBhUpfBW4smw2HpaRLUutodWwyEg3wPhf9Bkgib4dxm9cJ2hoXfbcs",
  "key29": "4DvhSRCurUQHVDyvHKJJSqz1fwQgZieiB26iqHc2MzWX5H8dzhuqQwjuFmj6UKXS3esJzVDagdagAhH4X6q4CqqG",
  "key30": "5x6gMQufD7JAWoGZDmCTcjt3TPbFSV7P21uYg1Fp5uYSCRPkGaDxVvvZQ49jF2FM6ADc27MNBh8FyAB3MGaTr3Ud",
  "key31": "5ZoPLj5HoCQUty8vakN4cscgVUfUnC3KtQzZduS7iEfVCfHiJRBXXswM5PSQBpJwQpYsFEYhQ4gJAFrpJdfE85JW",
  "key32": "5yezPu9vpCw4HSVNSrdoiE2EJ2bwjXnZwawrekcvndwvN9arB7u2779RquqVhWQ6NiFcwCv2fMBATrZNUHsMWuPw",
  "key33": "3kGRx3Lnedqpn4dMPZvETbtLKYk3LhhZupaSpuwuschoS6XVW3qLxgYc9Cizd4m783cJioQqemmHaH6oTg4B983s",
  "key34": "5bruhpxSrG3ZNiQSwBSpR7erak7Lod5WFPXpwETzRJDKPgBNhBkJB22Z7Af1SKLon6GvfqzRk3kherJaa7n8qibE",
  "key35": "1GSjhYYEBjPkSZZQ7NussiivCLqKjvw3WkfpzhRnpNcR36mCV45FKNaJUSfNqw2GZGXdHfkskDkUbbviC919Bbx",
  "key36": "27fBw6d4rQZyUu21rvCeCgNKtQobRaqwT8RPzTuN4sNr26YwsJagqr8mfkjwPBUjUPRpHdHFEHDyiF6HDcT5yvgW",
  "key37": "5dUG8LaLwBwrLWP4cPPxK2AYKExmDhbD5mdMjXgYNCM86jUaRMfaGe2ovU1mvVVNy8FdRE2t7HDZd5ErfJiE6y4N"
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
