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
    "5wyABu8tqy1AAFUi2ocNzZAJXnUcuJx3fZdviNix3NMr9Jubo1p15ZAzBik9XF6YYUyL9BV4DhnjjUVdKELK1Vzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eisujf8NHffefbEyEU2wTuSMUi6ckzNQEMUvsTJT9hNxNeCcmCWBz8ZK2AjPEahVt9aKSdq9BWviRNtBQcqCoZU",
  "key1": "33Jxb6CfeZmb3R5JP5a86t5LpfpWzvZVfCZtirXdDM4FvczftmscxvbFWzHsTj6VWe1m68M3J4e2qFpFZqApE2CX",
  "key2": "47njS6AhaVau6xg7kXvA8hJrfDj6c5JD4GDCdR8VPaPzXqG8RvCoqttETmQvkqAwwm2xXbgYyA3U9GiN23TmbQTi",
  "key3": "4JjjdRErZ28J8CVgL8XNq8wUAeFyDsooMZbQ7Uzpqxx8qRXNiTwhCsiCXZnPQuHDYkPXxLjM1ZpUjdGvr7G3TFRq",
  "key4": "uDfEHZmVqWNuguEYs4W4YFGis5BuEAdQwHmxLyXkVnEKis82Vy3VftTnHCYx321YjgZHkg696SLn85ppvZ2bup8",
  "key5": "4bY2QRtSqZZCtTtrch25fYMVLLa1fz3Dz6NenRqjyw614uc14GHBjw3p9WtK5uNoDHoXWxMZYJiM9jysJgDQkH3M",
  "key6": "2TQ2xEuLXzea7azbwXMiWcvvDkMdxHx56F6xfaheJcdWv1Js4qa64iEmNAjqd3jeBQKjY8CEi4UkTsgNgkUL1f9L",
  "key7": "4mNFcVos9PXYRUySReQy4r4eiTFqdR7vCWF7WQSTy68NWc79eQdWPfucRxwi443v5wwKzvzVnZsJ2G9F8R9c5cKT",
  "key8": "4AFK1cPXT9GxYwyKPnM6hr9a7KJTDoSJu2Nvtu64dimg5z8McKkKW6J5FtDXYSNahK9wazRUcq2cadVnj9fVM3rK",
  "key9": "4TepncRFGVsRooxprmJL8RvKXd87yhv8M8kwDYTqnCXF2zszkTW6owEqbQWUivopAWVbFqoxKvrTn3D9TZp2iEfo",
  "key10": "3xq7bthaGqqSCxkhZigSK4g3kEqNutyLUymgG2rWE2E4X7ycjFLTXAttJ6jKsYSR4VVN7QSmKYckwTX7itqsLKWr",
  "key11": "3L8XZKLeAxHssQXq2K3uqDDxFTNznp37PJDhiL1gjVLSL9gESkh2Gm8L6xtvkyohhFATPQqGX5qrPzk6dVEgDtca",
  "key12": "3Ep3cENGWZmhP5fioWr7BpKW7eZkoY9x6ewBDKEFRghr8TEENhmEqHfjdyeHAMUT74FQn3cga4BBm1kQE3zTw9LT",
  "key13": "4BAjZt8yweg9Ejpx9vCbyWmBBJnnyLaedBHbcXf3bytV5sAqMQmERgKxQWWLzcoWyxzmvmqqBQrACbcALgdPteLa",
  "key14": "4gNdyWTGW9oLxH3AcWpi2itH6qCXPsHa8F3zGueN1y7tXrCjjhDBCVBLCH2fHMVfpKbFPnowycGQSym11BgHXERS",
  "key15": "4GU7caKUnkKyJ6ZFdjFXxTXYqRyJgQuG9TL68kD8ESQmLwUadqg3kip1qnFeSgmDvvo8c5MspCGDU5CtJd8jzrQu",
  "key16": "3TD6CNQT5RrbzRFLR654vHzxnL2XSi8xppMYHpk3thztt8nas17Quur6DFAdbrML7Vq7tcMaeV7AxivnLPvcCDdD",
  "key17": "2mPraL5R2RUzUgGTc7A9iY5qVTzCqhfXbP2R9GckxcyZ5cojfwWFQ289R9U3x1BTaJJKPMQsTeuQLYmMEmZwckuV",
  "key18": "3eBHvWxey5gFRAQQXXBes27uDRxf58JZb9kyj9N1d1PYgCbLGFqjR6tPcFEPZg6cC4VDoei69dRd36P3Ay3q5Uis",
  "key19": "errDFYxngRgvKsXz53mhFh8YfwNLi9nCb7FNzBawph3iURo2kzzFbMBZCi236hRhHyXZaoHXRhXMdLiJ3T44WBW",
  "key20": "3HcpWYFvLpvqDu61v8Cy8BVbZe3rLdacSswEJvph7pyn5cbPnzu1RCP6NGBvReBKSXhBJJraLMVzNFLhy6rvu9G1",
  "key21": "22J5bZp7218TmKqcYd2VgWipM9HVX52G1NrxomktXnoPqAcS5cmWVqaxy2GFXCQ2sCuatWEnzigU9ocgwVYgbD42",
  "key22": "4DpyGghKpHcEtyTVVNZNi662FYc7wiyEaoKvEtrwNVWz7seSs1WMyAWKjaiLoBmorcjvnf6EBxucvXL8ppaaF8MG",
  "key23": "42ieJw9dSgCdovwBJTQyihKmkSkRxzoRLBGcNeK5oYk298w1oDqmM6bkyExyFrfzJQPNUmSwrJB88AJyNrwcytE2",
  "key24": "2oq9vx57cLoeJJvPM6KDQfHzbvE3yn5GcbjETdvW7n1mE9LNFi51EdjGFHL9eNTkxFmm3i4dG2qVBrnPrhbVs2V6",
  "key25": "WUcB8mPxmbunrwwREg8Gznsi675B779dSvdxpiyELxoCrFehgy1ySN6dUY7NT7BXua3R2qsxorAWMUz7u7B8spJ",
  "key26": "2KmTVd2QmsnVTProM9JeSSbB3KPF5e51VFCTGUZknMS6pEvoMmCyNN3PGwR98VcbBBJggqTShjRSAT7LRuewkG7o",
  "key27": "5djrUPXZzXQNZ3ELr6yaShP7E7RZAZ6BUENNBaVNKx475BVej6JMHFqLT6t1pFYbQMvCtQQwvHPgnF7eKEyynEzb",
  "key28": "tPpURaAQSrh2cZbt7BrUQj7qaaoiyekS3iYYGYQBn621XJWiEvzsAfkeo1pnin3UsGzMHWmbP67XpLzaeaTgix3",
  "key29": "3Fsg6xRuDwu41zAuiNwdNPpjowzjAfCs6szRe8rjPjsHkbFc5XSCkdxEBfwTFDKPooXpStGVTEbEnfbcXkmzD2gY",
  "key30": "2QuS5HajMDFUope6W45bbtQ313sUsTwYrMTQPaAwehcYfqFjemKf9urMRpvhzXs7ri1sJsezgg8FEwhycEU65yLo",
  "key31": "3QMnuCjgFmqZ52p4gUcjJGVJ4fSysu4EEKrqUxcfcMCGCJqj4phEjboPvkxVXQe2t4uhJ8hSBmBxZGdnEgiqwxud",
  "key32": "4yEY7mviadg1ty3Q8KWnA6EaovuB46cbagKmV6WSrsTCThCxBbQ1NDxukvPfdn33Dg88Fs2EKgACLjDAkHpULZL5",
  "key33": "3nfRQMb5ciHJSmSGrCe5jFrqWqpcFx9BPdrPV35qYaW1ASnUrxuncLrTZzDSzFphCCuHan92ZtJbfQvm4DcS37Lz",
  "key34": "5TXAiC257L2ge2mDuiQJo43t6Letqy8ndwzrxtRRcAT7gkft1yaRAwT58hKwHv4UL2nRNTNyYJqnAx94pZ3YPAEZ",
  "key35": "Z6ffVjX1EEAFw1FeCH25qRZtNHcscbz4PaBEE9vGi58aFqP1cuDKFZLjWvtrM9qaoznKpF7yqQbQeZvbTUTGN5z",
  "key36": "2PcSJkAz1Dw6WwYDJ5C6LseapJ69dPrm7TjSeVGMzSZtdBWnSeMf5i4zawJivHuFroMKGFkRjPRAyq6iayLXBA3i",
  "key37": "5kX9XUyaVVEB7kTqDfKkPTLj4LP9mbNncm48LXd4Ju63bdxSd7EousxceoXbhwASKXh2PNjHCEcC1VPCAtupiwwF",
  "key38": "3B1BzWwNak94z3j5p8qkfgPaqpD968Lief7UUTgcbPJoixcRZJta4nK1vZ6oevMJ2U3miWGpVhWjjgmivQrFR3gs",
  "key39": "3GAe7mcyVmjym96DfLYwPNCeLP3Q9bVcWioy29Et62aQkWAYdh11c9vBctkWs8SavmNLDP2Uo7NZWwPaLAYWrNMb"
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
