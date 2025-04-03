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
    "5RTHjHHzB4u7X5HepAbc5XQjYByWzmJWns3DZqKb7yk3hVKGUSFPT3xEGLd2WLb9VZ3oaZ7wn8fHniooEivuwzpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "waoHNW8bftCD6GTiHmiZrTaun6ByFvYioNrzvTbct5fnw7qucmAMA572jAJmP29V4es7tiXwo1LjchYJ1Y3eRww",
  "key1": "d9QfyfZTAze9NJmk8MyxbgWPD2YVJoEbHECMqafjr3Ue42owXyrs5XsWceotARa9b4NFgLLD84pCYH2AfLfPRT4",
  "key2": "3V6i2Yv9DXicaqRCZGpmScjQfUvhxNpwzwiPAC1Xd74dEytNfkg1PtZ5tT3ZDdYHsZeirFc5TMrXLZc227QJrLF8",
  "key3": "4P3BwvpvTHH2wBx91jdLGFt4HKo44EwZXxCiC7ptfiZXrwquQY2sxAxfPVPzA4XbHN5igYUA1ERf7XFN2RsuejxE",
  "key4": "26dHNDnwzidsxdytZYAPyvHC1uwmJuBfdNzoogsb4WWN9hMf5jpzL6riTfsiS7bwgsqw1HepS4SJ4rMEcox2Y6ft",
  "key5": "4iphLKNkVNtpGUpQxRrVLxzQrBFCCzGgFvaQGSaTzF4vxNrdmkpC54vRkddXTxkCfShbCfaavqKgJtgyCbNMMZ4o",
  "key6": "4viZzAHgCYm1CunREepgXbdD8K4D78SbYzH7QwNLwRmSjWuMU6YSkJFhp8sd2s95i566szNZUgB6ZBNfGunBxQen",
  "key7": "4WbZ44adAxQHAyzZDtVCyGKX5HYwfoLkkFQETY9Yn5fACwji2Vt39qSmk8Smw7kg2mk2zpY3CPKBbktze15yUivt",
  "key8": "4qa3FiyRqL1SwRd1fpk9Dppfz29i4eo1aDiKYJJby6978v4e2tfVXQZZQZ6yoBdeFmKeJXViWT2WeXnnXjajQXRL",
  "key9": "5L1YGQouu5MAVDBsb1fZZGQcVpHtCt2YkXxaGxJV2qHHBYZocpVSGjScjwnu3J8KAgWtcBkkRJ9tEtbFnzo2MkRU",
  "key10": "5bSKNv8ZxfdiLCCbw8AoFmmxp5MG3p53nYJjN1VjnhT3t8HBirakjFLdCiMQQDfdxiJwU8CauptQ56rsEw9PowKG",
  "key11": "56aYTLsLbSyrALWmyZ4Mw7izY3pc2SAb6YNzy5TN4E3xFo3HjoXGuK7HUYreRmryb3Lm8b2xCNiSSK83MKXsEj75",
  "key12": "5qVDFsiSPA5PKhsyRZrDFPi7LH6XmmGMAL9Gj1uD8cbqeX1dGEw9grPfZbdNt6v3zmZojaCXentJCN6BjT7k3WoP",
  "key13": "TQV29iZqiVdV2LwNtvSCBmoL7cGdh4xLhcroc2cTfiFKYZojQMowEiNP3mDaAfFLQwNvXCgqWJnGczSMN5oTewv",
  "key14": "3Ktkfqpd5KVPrNDx4VWBK3GEUfB2tRqkDxmAxaeVYQE719jrULpsjmvq2KTWugDZtjykf2F1NF3mbvCB6Wiwxf1T",
  "key15": "WpJjCJz8wfrqqa1w7KEoEEj9eGsyy6BH6GeYahfnBqAChQYgg2BXWgQdf2NnNqHLN7kD7dfeLNXf9G9LTj13XXW",
  "key16": "4d4Zph2MzLVPaEDTPZtb6xAQ9eJEeCpJKWc7qVGAiztioFLyNiQ3r1goXvs2ntBQMopswH5S2pSaooMgVBpQGRYe",
  "key17": "3Hy6cZySKJMwF2X76BcoBPGE3oJisNNFfzUx12TwM5PxABk9X8pbZwpqxQWxX16Up2Fk2fFdccCx53AiBPvkpAuw",
  "key18": "2PnV1wAQCos3jGi52Yhy77xMEJGxshmX4iH4mZmT17hjD5G1HpVdWxfgcC3eVR8gVgj1eYVesGYRjWihfjXEGLtp",
  "key19": "ZKGeXjcjhBMybFKnZbUjw9WHE5bC3tuf9dDBHdxCx16d5cq3X1BbWoyv75Rin5UJDs1iDA8Vqi53dgWVvPM3BBY",
  "key20": "2a2yBgR85z5orPXJimgApEQJoX2jjF5XyWGpnFmYyqAsF7G6UPCGLXLQBKGos8k9wTQcjJgJzwpQ4bydnDim42zE",
  "key21": "3b4CB8CZBWLq1f53WDmySPzgrad4pmH8NQCnZxXgiCEmgMndk1ZZHJK9gm2tnTLu1u4CSBP841gf59qutjH7BN5M",
  "key22": "5ewRwL6BGr7tEKYww2bSiM5uvyd8XQsKk8kM8v2stjfdDdDWKmuzy913EfaLJqfsEFSTNBeeQ4JKzEoCMSZUstSB",
  "key23": "3ADoZ9LmCMaJpJabkCASbKpYdjhf4d2Km2vTWCbjZxkwC1WpRttegLek9W2sUSFZY4ENEejuawCq5o5sJCHATfFV",
  "key24": "5n1BTpsEhPbTVxwftSEKBwDNNod2FJC9b8rhhU4vrQAjeWJzTBCuMqA5Sd1vYbDf4Py9aZhPs5AnBKbe7TBZY6oE",
  "key25": "2wM6WTTmaBmTHYUuHvBAsYMDnXv41vjaEncEyVfhRJqFxpmW8C8H2aWisBUTULfQAfVZrMyunnrmiFcaP7ULzMhR",
  "key26": "39YZTEHvs6ty84as7cS3MqurxaWWEd5Rk9hgeFFvJGMrFzGTRuobg4mCLp1ATbUxGPkt38zWd9o9szKqeYLznNBJ",
  "key27": "5G4BaB2uUX3dxpMbB12UeQABeyxjuao5PjaGYDag94mhbQ1cVZMZoKPRPQ5Cv38x8b7Ek74vfdvVng18AQHLBKau",
  "key28": "28M4eNhzMadot7ccbx5Qz1CCsQaJonwGo7RcHM6kCe45buKxa41u9jkxTEnVKPNPtnwATDvwAiMaJTFyXeaoNnic",
  "key29": "5xUs9Xe17YEmQbT4eRG85DmgumSpzahojAmG5pWmfsngns5DhawfMYUy2Zr9xoaLDFKcKQhttBLwsHAVDCBPUAE1",
  "key30": "4yPfmmK5GgvzqHQYSSf7XT6h5B9JGX6FahqaqEaWzKv6CZuBzoUiJVAHmoNnS9jLFVmSeFNbyad7eYWRc74HT4pi",
  "key31": "5bSCNgaJcXzBdL4k7Y2boo5HupKL8QdB9MQnLE9hvYESbrhTa1Y94syyFABMzBBGYPmmeL6oLe57U572LsMAfeBJ",
  "key32": "3Hj2UsgSDUKbuxueSJLr7RSYfKTwd3xQq58yfrrGqnV5Fqwtv5J3SGyZExKAyfXFyiYc7mJerwtrkRpJrX2QQnaC",
  "key33": "3PRj4GUujkjpGGa8PLiU952egLk7KvceX7CvqZSjPBWG7EgVqxpPSz2R15KxgQmKN2J2hLGC2vPRMLkEAcGe2eP6",
  "key34": "Vj1RBxZ6EWfpgG6vDuwYFdgb7UKsBcxofjuJTWGnA5aL61iranSDBVjT7zBxGezDQbyb4edX34jkTSe7BPDsq34",
  "key35": "3iXBoMAZHVCEFiGEbC3D5sYayWsazJTGNbZnfGAhwMhsA8TcNv8SKdnUNv4jRTwoRGx5cUc6vEPUWahC4qCDX5xY",
  "key36": "3z7w3dVd3Vje7ax5Ni92HvjsAyYmLTp2LYYyuJ5shz2pSgTcbhhhajNMxKfUpshQVaSZm9RsL1tJvDh8bDFMHmwG",
  "key37": "4n6NjksuP6sXdQVaQSGvtnZ69mnmVn2naMJSix2pGLFkBFDbakpTvDZZJDDV3hoXtBSjpPr4bNLjwunbnegzGxyn"
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
