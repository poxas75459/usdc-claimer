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
    "24Zwmy7Rr93ZCtg6LEgMKq4VhS8DPejyy1eomfLxy5NdPNwsYpyFaVPm4Qu18tLAsceUoT4VugdaxNBZVahENLbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upap4gDfifQcFqD9uWxDSid9Xs5qhai9sgHRPfz3Mhgj9jLtWGMouyNEKz1QLYE7CJKNoPxEgC5S2vda72c3P8R",
  "key1": "288MKdxN3EKnBq58N54VmWttP5ox6Niv8GgEDQnx51k7zAVvGTyzszSnAY2yvHnxLAhh8wuWg8fqv4yad9BAfPk4",
  "key2": "4g5LD6iPwdZFcse6Xb57FiH7ARbvHraftvh8pq9JHXWVaReHs6W8BgMX6UNvY7wvEmoCKi6fKo22HQSdS3Px6uDX",
  "key3": "2UNpdiuY87vYEKwnSRpZ5B65hJNuuWok2Jr1fD7SzKJadbSk9um7Ce68wSNeZaWqLLYH9uq3aWqvnXzCzUEa6uCa",
  "key4": "4EFW6V4n1CF65zJ8XgVvyjJC66QHrs42bAYvhBFYue3WWAR7Nc3zFkaWoGiej4EvJ7UgGMw3E2VLuLjAXncRXWLQ",
  "key5": "48x5X1jLHMh6gq5bJwimdDknnBR7Y4ioaLkHdsjjGMpd2f3LzGMkcaepMfoL2cJBdLp9WDyBL1P8Vzjn1Cgua6TC",
  "key6": "4w4CqetKro4XS2Dz1YPj8DQkzJZkQ7mP7PnjHtbmxY7jR9LjX9Qv5Ztoj3ey4FVe8cLDYkEoTrpajuYQ45fH9HZy",
  "key7": "39nuaiy4t4ShLmmCMvUdY7Q2NnU6jYfjRtw8gTCptJk4a1gf3WSg4GZ7rpdMxi3b3d7iiqeuf2EqDSgUVmVPZP1B",
  "key8": "3FkN4NCCmkU45kB8tR6P3Uz56WMqBFoV98fqoqT23eyRFtsS63sDbVnx8DrUn842mNeq7V6svL4B6rgLiQ8B4P3S",
  "key9": "4XgbcMCYyB8u4aYauqE2P497KdQ1KvNHnN47BiRJqT5uybNeoYKnX6JCmSVKD6h7iQDT4r7Km2whf2CEybYmNrq3",
  "key10": "JQz67dKAG75xWb8mU8vSvUBqXnxwpqeQdMuFTXsWp6FpPYu8o4eMmJV1qct13jLPjLjhjaWmFMcyp9FgVRrheQc",
  "key11": "5tL1uKLWvTGJydDbND9r54U2ySYV8XpgFWux3L1g12PsbF1vqjQQ5WZeE1pH2QvWHoiugWm2Lfkpopxrx9oxuJhq",
  "key12": "2KhvEfPLA1dPzyZat6zq7oe9CobcjUoyqytgx3yLe5QT7rmBCk3gyau8moGbnBfKnhdTHqXFFtwoPx4mmsdcD8oE",
  "key13": "4gH8EEJzbSPmvXp9M1kGxhVuFhXsRDf7x8Kn7r79X1ZHAp55ctqh2GspD9vBKgAuYcocmpBFuPH6cRuHEehe8Kjp",
  "key14": "mruphasX51CBHhZteq3fVoKGd47tkRHaK3Yv8aBUirmo5djzdZQ3eZ5FPXEPuEzC8DPcn4Th9EjQ7Tm5dsNXYtm",
  "key15": "5jcficGYBBiAVakRVfDd5sEsw7SvhmgxJfC4uT93GaPZKPmWFsdz7MtjZtM8iSTSMJBVhmknJzukjHDYRhY2iiTa",
  "key16": "56nErFnJfXLbS82cubPjfukSEEEjgEnVFgQjTDrT2mNMP7SyeSoBvkttucGSSK6qzsSCiECXVPzP6pATVSGo46sX",
  "key17": "3P85k9FNJ6pwpukpbxPpsX4dNeyD7rPcDJZgpwe1yNrTWaoFnz8cN3E9JssbKMgmFKLDPoPtYiyRzt3E9npV7MAW",
  "key18": "g52kvfjtds2a3Hrbaa88YipCeZ8peaDRcENaQ6Kyzk9P9HdRc2Ccx7u9Mer19ATjZz68bWcaTMCAnyxcvdT76iV",
  "key19": "4bnZSySoz3qV4Ebk26p4vaJULsA6AS5rCGk8yLUa1QoroYFjjGdbB1HsazQuDvoNaCUzbkRZ3Tvx4P5EnSZY2MBk",
  "key20": "4zNMHwuzo1HDphEN5HN9CAQGfGoVaVvhNgNQ7At9rU6ZCZ2vjrdPzrzgYP2cmHAJqX7TxbjYQQUf1EA6YG3PbjV3",
  "key21": "3sLjusGrPNYZqN5gQCoeZXnzhhbFmKnX3rVqAK9ULtmjjLZmcBNwF5UhzQkbKm6eodEZaqJeazx25UWaLFd4m9Lb",
  "key22": "44f7U5oHqYkDJhGY6rGSiAk9KWXa3EgNAkCs98gsommdkWxopvLCRBn2pTWds14H5C8XeRyGjW63e58She81kq9w",
  "key23": "3Jj8NayxaYA7LejRX7eZnRsRmvs6yt3e2th3THRgHfNF93crC6vhs1cLcJR9CeadRKKWCVta7f3APmcm45jwhkaD",
  "key24": "rbHWHfrRm8RnJhHRG6NxaPWJzxm3scnk1XumRwq5tVErmAxY7vFwwedRViZytX44TaiR5CJnDuDsNN6ucwr3tbP",
  "key25": "27KF8unHomT3qbipY3kP2jrAZDHrpYXcgHZMnGn1pimS5BELY5fDGNoBSkVJKYP5eUniQCWRanvbwg73jVN3nS9e",
  "key26": "4fqTT15JzveQeBN5tjsGbBqH2Nem358aReAiw8RoM5oXbX4Bvo75shXimoLs6Z6Uw8iMQiGkRGwmbGwmqUyPjrBz",
  "key27": "P7mSePZxuemux9GUuTCpfecaeC7XzjWRzjrT2aQzcMabA3YzULYCxeKzWKuZgDZbsoCTWrweQ5Z2HHQTDmi1g7z",
  "key28": "3WBwK5LGGxP5qhQaRgucfA4k2oJYav9BjuMoBACkvHsEyipk9UzfaYMdCnzaoyjLkuSy86ZDSsnY4MsjcgnmtuVh",
  "key29": "3vh3JFGrVjhQ4b9UxoTiRKYM5FePBF8Ed15mcwCAfZyi327hwrvBgFPgJGFw9oD16BFM4GXm6cR3P3MZZ424AngS",
  "key30": "26qbdNvVFPXh7Rp4pcJFWXHNgFet9kZQ3qTCAvK2gcMPxD3WohFv7aQvokuFXgrm5UFi3bL9YLZZiUU7Hhox1Aye"
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
