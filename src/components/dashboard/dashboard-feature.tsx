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
    "5odTtBJpj6iHbGeXf9eU6USS1VVrfzPkf749n8QUYcMSAZnQ8YJDPkE9tkk6qmSJxfx9iiFWrbyXwdHPVcM5EanP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29NcVygLb3Gnuuy6FwzRxgWds547BcASpeNniq4KaVWHP1W2qpS5kKsN56HR3Kv3z19Xqv29veLt3aNvvAZXqMQf",
  "key1": "3v5s4AGPHEN7URGaLzNpzooNBgwaLDEDSFjQouuDFpw6Yi3Yaay8NtRg5xaMMGh2Ln86ppMB2xGnGJKmkgiTQMqL",
  "key2": "H8Q36sUCX5dYeFo9t9DMdCtjMcz6BiFvGeNrEyG3nxMiAWFFN3p6is1v6GqYUUo8PJ91EMXHXc8xd6X8visC3bF",
  "key3": "3xNwjy4JJURTxjUrTb1xBW3eCTKYUqUhGgq8whqu1TvpZc84jPveE6gbUr1DRz8hxTgF9wWB64vwNtzJTgygaLwX",
  "key4": "2Cb8Nx5HrQvBcT4v4ez9BGFfgPpUe1F5BeGgKa5yDdrKNGVaARy9MFYdgeLwdLk5tyfrkqpPenr1cicM7oNs28CC",
  "key5": "44NxSJbDkvSitLmZg3wWUArY1ZSN7kVCp7XQhJHHFRMvKifhKBxpPkH4CuvJ92N1Qrudyqy8KpWB1ddn4SuMqCJ5",
  "key6": "2EqBZd71PN7mx3TuVSYnm7HugExKLZVUKtSmtKLpQ7ozz3FfJAFYPD8TvRnyeU9niwgMFFUS6sHVRwoNxpufk4Cu",
  "key7": "LNXpoktNWjcqd4Aw5Rx8gKcvGApSh5TqCxC4LXrmvy4sGfr9HQpHEorpxpsqZqZ54CwTZ9k5dUUvx1WykxjTSXp",
  "key8": "DA7WuBRkv6tRC7Dwnc2X3AXweAWTr5QqC8pawgpJZrpRsevJusu4YhC3sCgg5EnYnb6EViWVS3mW66XhcFYc1pd",
  "key9": "2Mn6sqRPBLUJk2PY7wMui3jgJSMkoayNaEQwphA4K3HQkCnTLyBGECESPJ95mpLzXAa2xsfVsNVW2CR3m3FwSZjE",
  "key10": "2zGrMY3ebFLbgeDKdvWDYW59BxbCx9L1GPen9WvhFETVNu9mDQLgp4dFqaLL3d4YGjRQRwXigcoU8cDQwj32UUu3",
  "key11": "64ogGwMixN9t5SCcu1eMpLQK7eVR8SdQPY4ijX2Lhi68VHAvQnyRTYXW1GgQ75DSERVeht7pDn5JPUvpeDpf2tvi",
  "key12": "2P7Duo39eCqJpTUMWLe7DaMe8x1ct8F3Unu7AG3Bd8PAvWopVvMrNw9gGcyRf6MH4FcJfY9AtF5YVApLSZV5Sbvc",
  "key13": "38pdM6YcqACoYwz9LS7H5fqu5ozotb4p9kJuwL31ztkVLQG1oxABkJYudDL9GnLRjeGJLdsyXdUtFLjJmBRj1mmD",
  "key14": "4A1uRnUtZ2J7V5AsdsHEfpy2b1WYho1grFvLXN6R15rHsE5NRd81csjaCYguYc6X9RP3KUJArYRJMZf1aqCCiEaB",
  "key15": "2YoFRUWo9PkTf27ZKwbaFeazU6xBSuTU48Y5ZjsXRA7jzZpWRdVqTbUYaWPshwVGBLVX6YG1c8rouywqRG4ut434",
  "key16": "3DcNWYbsQArJLogEjjAnHPD5tf5Lbnri53C9xY79SUdBXS25rE9UKckfTDuuyC4EQYMHdygZkhwTyjDjTHttMNo",
  "key17": "5ytK3PyGMuLxFL4ZzgZFYx2Mp6gUvNw9u4Mgx4pksQB2E2ibr8hyXHTxbiTuZ2x1pJpV9hHMCkUFPX7EEevFJJTk",
  "key18": "5xR5ruvkKMLi6tH9rYFcH4RNp7uZvENLkqA27y98tgx1LiS8pL97gfucvRiwd1A3tSrKLu8CRpKANquQdUv17p78",
  "key19": "3Lbmqk5a37A1jq5VpEU1MUcyJ17iDik8hfRxjza3LpVPPQCmDqdmwgh5QHZ1kaGAcsXtC27i1iCZtv8vzu2nyPKP",
  "key20": "5PXjMncycki1A5qvu33K1JAiPUKMyMHQ1bm5SkxRHUSj57NsF4okKA7EuruN7iGRg2WAfbYXC7fgzhv2pTBu3ndf",
  "key21": "4DWFWsHpzvLU3NHDDEGtgzcdtg29AhpjWuydp1j7GgF1B431iVHbT6eVWZe56crfRMaM1bh1pDPx3udmz3wJoF6i",
  "key22": "bZHnfvs2kDugss97bSwyaArHHrN1cbNcD5ECJShE2MQXHoW7tfLpaB5bCJJwMH23RR6JKbjHWnQeik3nUtfUAwN",
  "key23": "z6SeXNx3WCR9HEHgDs5ttibPdNWwcYYHA8mmS4Zfim23CTH6LHTiFSZbB6s1t6bi8L5WHdKRGaWdiJZzdM5KuLy",
  "key24": "5zNo1nmjgNLcU6NJPumjRSN9rVsp5mC3ZevYXyPJJibRXoRsRkju7yxBUaqKQPySatCuwGerprDNwz2ZyJrYnCRR",
  "key25": "3ePVy4F91tNYEB5q1RmpZZmWhyzcBHJ5wNeato93KwRRSrSG8hNhek82wHyE4X5EreC3pvBqPBafSiAAYHdQgrEZ",
  "key26": "58b5WQyPnL4ycMbGQjj7JGaduXqfun1Zvzx5o7RasQqanEU8RiN5tHjEhUGjTpTPGpJt1geECBtkPotwp8Q56rdz",
  "key27": "4dLcDG1KTjPRmH2vaMh52HhvqKK5JZ2jEvwqsd8666RTFV4FybeJCT4ypJH2DPmedhp6xg3CcJjL5SBntLGcag8",
  "key28": "38WTFvbSmpGw1651VAZVQb1pTYUHcvV9xpNuFCCHxF7fFnpR3ADrzUxQKcfMAYJPHXkcRtcXkDPHtjEF6UqMpFrt",
  "key29": "3k87Ubg1sw6ShUJMAdpFWvFNLreMC2AiyW6o5PUGjkCUG3nere4VE64qoND8BqzJpnRe3GCVpHrmffVKxodR7aik",
  "key30": "5M5Lh5aBicTg6wxcMeCKMWehxcbTUFZZmpkb7AioccEoLe4HdJKtXPsXqGc22r7vjEg3YGk9mnuw18x2EEqkpTEv",
  "key31": "25rK3LpfCvnFakd1yrZp2n6hVMwBPz6tt6g63hGeVSJuaARNXJWaT3BHaVuPdGjDPS5NbTj8M3Au5YvTaVdRFie2",
  "key32": "28E2T4p7GcxtPbnUWwdv5PfpQiU5rdKQyVMo8tH2xewybzDSB4xspwRTJMA2wAAiu4Qp98zEXUoZppmSx9TvxTnX",
  "key33": "4YvdxwDgEDaw17jWopJ1pranydS5tDQNioawVpuB9SsAraLLtZGThFz8TDTfbYgb7pAhGae3kQ3kkFb48EShZXsJ",
  "key34": "48mCXKnAopXJiVj2sWh3fiXk67mZnQkTwsKpvoeh6UJxr4eZS2vK7fjZe2p92pWxM8fsgdK8mfmqdkgSrzcdiwf1",
  "key35": "4y78wD8CWHw4Q4xVaGqV1GWiAjaFV2RDFBY3unZS7p2yepPBJSyNz154gg5NDXfBVFcNchVr7LNxNmdGAQNu9BpY",
  "key36": "5VX7LyYwecirnM96sqMb8ttktgKzD9TAH5JpxDW1ErzHMBbczWRP1nPufHi6oUrLWVvFexpF5fZbrg9ZJKtzqEzf",
  "key37": "2sn2JwsKfg56Y5D6STNU9UR9Aze29okvprqV6RkJZdf7t1WsH1D3C9ayaZP78waVMUNQ1JtRf6RVy3LGzRTHH6SL",
  "key38": "5BByGH7B1fL63ofniXFJH3BkWB7qZWuxLwZ5UyBihXSNCqfQfKThzGSG6mSSXDDj4v35tHCop2jB35dsijybnVRZ",
  "key39": "66zsed3gVfXZzKKE2yKvefNnDHR6fTCzZWdg8uEn22oxjwvspraixigZTMKaQ9pNLj1Sg8iF6ZkNPX3ijunhEAQd",
  "key40": "61x6iwqkTPXgGgYPEHwSqZSnkaXk877BvBLRoBZuKkZ6tH8JzyRRF3sVANPGGn4aynMUhnmhfUAnUqkDKBr4VzEs",
  "key41": "3sC1VrxBfUWRJor9rFDUHqZEyMHTiHCV6dnNBtuupc3DC6WCLnecMSgiPutjy9yA8scySN6N3vHBAN4kNvKiJw8L",
  "key42": "5e6w1q8GqUABXbsDUWBRA2JqVkyuU8ExH4YY4xYWiUz8xJrZL2m2VQeFXvU9WRxAAody35TFK9i1Ty75i9h8RhT5",
  "key43": "EXmZGLF6tTQveASihKSdqCKhafuoiSDbgRq5DqpTYDunQh291xeaWs1cYaEaNNKxsQQy837hnRti2ebRCMehuab",
  "key44": "3DQ6qtSzqqL227TVyxk5GpKGp5fsT65Wpijc33aAP3WtWsgG5Jfm9eN3zhBwvqFdti8bF2TE2Jvkhj6WJGhze92",
  "key45": "51n7WgeyH6A7jNgfGn5xrqSZPDV3xSr1mZFd6BHekRMhxBWqqq7F96oBVY8WzWVwiHBEtpVAszutczyYba4xjbfF"
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
