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
    "5MJBTK6oxwpCDnDATcXCxbZRraG9FgGeByYrmRQ7E31qkD5mwpMbc7C94dtm4D2Y44k1J2HhNW2CKD6gCMYFi3Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5662X8RXmo94mqBfayXRSjkf1CoZuZED9zbCG7zYrFotHGyt5ajZ4sxc82Qqcantx9nqFqUHJetyTd73Nsek5Liw",
  "key1": "415RB8xQkyfhW8a1c4JnDP5fK3FTeqDhsXvDY4ccgMtC6awvPxNwE3zoDvPKcnYDSZU6qqzLfQM6UDXfwiSADDcs",
  "key2": "2TVF6ArdiWitoDNnadaFVnsvHe5Jco6b2qnmt13TPJVqm7nmaZt8FqFdbRi9mgzmoJwA1L66yS67mgUcvjaX2QFP",
  "key3": "3Ve2RS5gCFK79NdpHTwZ8LWwiS3AQLA7AEhdVBDW2YoVKTNm7DYxUg8E9jwxjdZDLDZjNEEdq3DbXKvk1KdagpRU",
  "key4": "3DQoeTDo2fRcqWThSx99GGpSidFK2PiY7dszErEN2kqxrx9xt53khYShtZXB47YrxhUSVZv8Uo6vKwL7X38JLZop",
  "key5": "ch7TtSjG9aaWxnLTiEtYrYqyzhnvjwRhkxHZcgwZTby23BhUX2RrPAEXTy5wBNNDNHSctFNELS8DXtf2Cmsv4WL",
  "key6": "5dPBMDjXJ139QFv3DNSPdtRpxhzfKytHoCh7EHB4dWHwzNQUsFfkLkbQL4pFNUp9AhxwEHGeVrW68gQ6LQHhMku4",
  "key7": "4qoAf6VA7r4zzmF4w8ARrC1EsfUwyZihXp44K9GRe8uZqJMXUZutTfqHc43rA1dUjY5nxKdh241GSxoWhk2T6Do1",
  "key8": "5tgawp9vZ5FwMXuPqBPR5AT1uPsvHZK1ToRqCHDbs974GEMzUntUGtpzAFeFBKyHHKgAPdNqnxYk4h3mSPv7HFGt",
  "key9": "4Q5DAS7NgTVBQk1khwp2GeQLWFDUWXktAdC1e6NEYtoNyHzLZuxHTEUnSehV3fM3z1rjnoknoR9EcE81nDbx9j1H",
  "key10": "2iKofSXJrQm9V1CYTEVs1SSgNrGys5P4ScsPErPTYA82M1vGckUXJuW9KBHLWHb9fE2bbXk4T3dQJoWRqWDWFooW",
  "key11": "zXgzQ6vR7hMbBZJKAocQiju4bqd5sAru7ChGeCRoQYbFgZ5uGfmhTH7ytnXnAxDdc8sAVqMyRmoXcwV3vkHy7y1",
  "key12": "aJFqihxFuQKE8w2ns6Kdc4o7qcnmUPjMS7xdqAaqibQK2K3ATaXka7udyDtinBigp5FyykfHnWgreZwYN82ace3",
  "key13": "xDugCvA7xznePgb37AixHPpHKZfqHLDs2cuQc3ime5ZHTxe36Dorcc5PQnCgkXiLpAsjmGAxDqq97yBFB2yDhBt",
  "key14": "5G3wemHjZuk8L3HS61NJMBzfm5YLPMc3g9YhT62c9ib41sHmt4P31jWgamNeyi56mxrbRQUNuWbHGmpNqeMFUyzc",
  "key15": "8gzq1tEKEwQ1jkorCz5rhE87MpwnrmksgXBdrkokKKnhuBC12fRRt5LXnzrbLeRtqnibnUNogxXqpYJBXhVToH5",
  "key16": "3fftZKDUzxgTb99N5GXBhgZDXJyG5kR1YBwZawufSVpau7nSzTD6C9BhwJ5utvR8BiRrKTyswMwghSEtnJ66WeUv",
  "key17": "3FFVbqs9qC2bjpWDMhB9bH5Ldv9dED7fMYKzpHZGCzGMHAyvMhysRkS1rR2nF2xZY4mXMTg8stkKFq7GVQL9FLLj",
  "key18": "3RbKu9YBMHyGkJj32Yy3NL71rs3599KkPwYM3AtR6KaVYWwEpets4bAmfa7CqZdopnrSe8LJvSiUrWzMVnZmH31h",
  "key19": "5v6oZoqoiA2uE9Ud97pAeWhCTuezUauds5LsGkFvXtRt9nmKskjbmweQFU7gwWg3BtBgNNNFvSd7DYDRtCi2e2fj",
  "key20": "4tdQ9C9a2qmDvnekfWuaPLBs8ps4GCkAdygqk3Xh6e8YQt4rCCF7hJyhVqfascVGgMVnR6dcgbDiQudSFwX9bAsw",
  "key21": "5tKwtjmqvEdcE1EUVizjvyzkduMZpCifP4j25so73rSy4Ku9CCEA9EZB6krpxs32LJ5KNsSmyLvTkCfoUrgsb3z4",
  "key22": "4deTAzmbBnV1JyBVjqS1qn5tdSpcoqY4ekG1hBj6J97gbzL4NifqxF2JkYzwtnFtteQpmuKxK586v4vRuv3pCthY",
  "key23": "2KVtaXS47NbSmD7VYK5ofRyj1nAWpTiabA7KY2DLQxMDPYsBQfN5yeVTXm1TjuYqoVtNP16PZF7t9Lp8DW5wUzv3",
  "key24": "4rRb8b27LDqmwu9PsX2N7iZUogjJDLFzMz6XctDUJZx99t1h5tzHqtuvpiywhwMxq1qL1T7rgrevRLcc3sAX2oy3",
  "key25": "22nntc2b4GkTVVpvhff1Zwf2kvhHX7sSyz8sWNBP6eD1YmD1Vvg3HDfRGytRVSWnWUhaUXrKNG6taoj7yGKUpHnF",
  "key26": "4GcofczDiFRwHmYRzXMJWd4prokZ6YtnUufqVBC6UKo7Z8sa4UW6et7mQoRCigBavweLusKjky3uhuvtVFuDsSvs",
  "key27": "36koyMDhjagJ1GoF7p6ii5uyCLKuB1Mx71qAEViVK3R6EtRKqhUZdho3dZhGQmvPXUqdS9NFRnAnr5zTzLJCGCRQ",
  "key28": "2A59gyP6nexnHeknH37N3qsRX5N4413Wf8RL5wa5baEbK6oSEcK2uDxURnjPoH3ooMtM4iW7djr259LrUGRinZ1j",
  "key29": "3igdExAbe2k58s1buzfZsN8gq4BBXBCyvtQRPAXh4Q5Y8ubsfxoeQnFMZ9uoTxB1XKwKmn8YNCEK6Cv7GEtcEVaQ",
  "key30": "2cTsHUDSAwPgGSzshLUNS2BviFmHTr1s7vBgNSiyn8WmEmyBCyjQk8q7exQVzcAZEQyQ32CiZ3QncZLH7CbpkbmR",
  "key31": "DeT1NU52god2uPSA66UPmqJLbPxGYjH63ouPiEdPwSebNXBmXo7Nt9DueVWgmUWmfafA81KjCuxy9QGcGGHW4h3",
  "key32": "42h52YJFhf5uCjEoHbqG8anzuEwKTxAxmrpA2scugNWGxfXTk9eBnwmDojihxvGR4v3pFe5BonnbcuMdGovfyfrf",
  "key33": "58mXbsvNLZgvuCFZUXskMZ56HGBNtfhV2tcPGXpCSWB9QYfwzh8kt6rcorVHYwnS5cAJz5aTj4osonZiVK4ou7zM",
  "key34": "HUeETt7xd6wEQvc3SAfFYP8KZFUzYMcSC49QEi3YAisdpPgJaFQESLTbVanW8YpJcpT4cVEQta2P5MEhXjq3tKm",
  "key35": "5b3WV1ydhAcYhCSBRC3jbFcUDYL3wcpCD6qzgfuja4gXocEFn2UVmyebhYSVccpgJ9S6ebyfzLD7nxV1MJWt4NK9",
  "key36": "4rS5Y4B7Snq4hwMu3MdVxTS8EH1nh1efaPyeM6JMSGiqKJkEsbVgxqocsoy3o64qF9NtFmHfppUJKCRiZ6Ugia3G",
  "key37": "5Jm396GD9sMFSxyQXEwARV1VcmssJzAt68uhNYA18HzyzLkWffL9jDZ9sCbmHwLkbQTFtjHKEpssR27cBRgi8sF1",
  "key38": "3qSZZTqjUiUyZLz7k2hqCBDA8KQmTG5PXt4d8gDrKhcBSp2by1BadgQDAiMPiebCcL45EvRCTSmyzj1nFTiAwwNS",
  "key39": "4XRGQLi8RsEiA9kYCeeTWu2HcB5e1kRartMJX9GgiHjZftzTApuUfoEbQKByh6F7CViRPWVLiaBWdneL22Q6FXDL",
  "key40": "2a4X4Q5sALS3sPddioUCxprTbCEaUn7uxfurRQWsPokPtbkNmGFHsSrC8onJhegmYHsHkWUgkZYyCc5EeqJxkPju"
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
