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
    "5CwgYt62uUbyoLMujayts73MC5J6u2DKeRF6WK47iwsBV913fpDDktq74645doBJNYaitGJzVE8ojWbDiZNNg4yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aM89jKuA9aQJ8i65iP87Grn3GRBsi9oRRTGJDwuE86jPAcb1jcc4VgexFt2jykkPvPQnDUXE3SnTUT5cQRFUVeN",
  "key1": "ejtnKiALU2j5tBhp5gHDuCdVrgM6ffJi3qF3qXyTD41BoWzNuSufC37RfTfhuCQnUYt1r6xTiTu3LDAtmVyCb6z",
  "key2": "2QiraD2NYmSALPAtdTkTihwM3DG1VtHJ7uE1LP8KiCUKHZ8WcMrNUteenRX8Nextq8WMePFTnSCVNhRng9bJ9SVx",
  "key3": "664dZaqo1Vpux1Vyhve63ZsGmUGvMtQqzW9zisLseacpdc8BJvhQENSwHWmvnEWzm1Gt45qyC4cL8hHhBnkkz8rq",
  "key4": "4ZdTKSkhLw6ckxXuno7NkTa4fWj6wFt91vjNhcmzuQw6FSjJo1TRvALMeyzEgz4BRGwopg3wK9eLCHtjuJzb8bBz",
  "key5": "9wetNT1dgxBuiw9HZVvtk6VA9LfTvp55p8ZUwmbeW9jNjjaatQ69j3GcFWidrLi43KeAgL5MkcENpJHPFXNF7pe",
  "key6": "5PV21XthKZA62ekre2B1S6cxBisUph3J2bQFs5J2dqZ93Nve6c2eN4QMGLghieBrQYvQ4z9Ms4LGVBaw1xsZdsU1",
  "key7": "knZAUWwGgHY7EimQJKcWM6iL4Yuo4Cn8RrxLTMiyM4Sq4E8y8GGMPMVHkHoeDDN7fWs1wFfCmuNUUUwKVPCBDau",
  "key8": "477rcgHLjUvaNJEzSzj4acWUk3TkuEcJXSSBfufxbEfLMLgkhBggx48mXtRwnkRrcdRkT4i7x95oNk2bX7v9v2ur",
  "key9": "7MM5cQXuP6tcXUhV7BNtzF2a17HMzs6AgNd6ZYBFNp1712RWCDnPLNHbPZ8no979b5xPoxBiK9MCrrNAvF4WoP3",
  "key10": "2BUoLdrvVZwwWEPavteCXqqaYNzzaLUYhkUvDdkyRZrk4vwTqQNYhLGF2YVrS4aW55vxqVTPuGDwqHu8QGwtyDQC",
  "key11": "2suYbVNKe5MzTtxNmfzNWTfJ5whvVysN1eSZ9ha2yAdV1yKYFaQr1GPsTuvVJMnJbQgySYBU8nVePved78UAd5Ya",
  "key12": "2egce4f5THJBCNA8GbZJMQijvmeC1tU9Fuwtxyj8bgwqYBfJArMy1RF3QMTtGNZNkZ6jUtWLQCbfXCWnM7S2kQ2H",
  "key13": "5Es91XDnFa3qcycPs8ag8LiUvATtiDKs72C1NRQDVwaXDtC24xRJ8TDQJuDa9dnmZ8eUmjX77Gdmc9egZ6LJbSgA",
  "key14": "44zxcg2jgapev2WvgW4kbMj3AAygfGoSpPd6ciCF7S5LXqTok45gwBmLBHUXPibdBLeL9R8NDR8ZifsXVo2jZzwf",
  "key15": "5EP5J4xjYiLpkhHymJiqQkQoXse5MvmhP13XhHVWS8ZecjHfRARNvrgYZM6gJX4Hj7zK4kNpweW5HV98vNainDLS",
  "key16": "5oiF2FapYmsmjMr1HshTCSCURzrw8oY1qhiaWoRmxB5xFwGd7gKTx7BvsNemchrUj64Y7ziJb86LZQhLD3hY9UN3",
  "key17": "3qJ4zjPs7Q9FbmWc79eFNL5TAeLQ4FF6fsBhGovKomoqKDQpjLdvf4R6VZ8PpEiR5Y9UxyMEVKeHWDvBP3EBKBxi",
  "key18": "M6gsJS7A8h3NZoHGv4PeMo43SmBTtFayFBQ6PxcRCTspgMJUQh7bzjGm2tCetqxfRMhayGHwDRzrcFkGtcKbXsu",
  "key19": "fnuWy12xqB7WdyQLswAEHf1theMg38bZDAX6dmHFEsh9CE93rLiq7PPCCFGBhrPiix61TP8k3JV8p1kGAKYNHrP",
  "key20": "5yrRWLZtVAAmwEVxxFKENEwpQ1CqpVoDZ3g34b4Bxsay9avMYT8a2Eq4VuA2jeuUofdySkekBmvsYzNZeWW4g5Hz",
  "key21": "4aRufBoAQ4BcNrGUcGiTFpQV9xciBYGzs9tsz83T1eyCANxHcP15PXDnJqbcmj3VCodVWd866LCnn4SnKzawqCvE",
  "key22": "2dmZmpXU55EuLDQy46nWga5yaDMsvgVXP1ggBkZgdj3bkaMhHHZ6UPQKDLzTqv41o7sK4NM6HP6e9MYvPcyb5z8p",
  "key23": "39MzCNLbzE3E1ctLfFp1zMh1nkfoeLPZaEohVsAqSZfMgAtQDqrLBiWxZ9YEcWGp59Zu3yBqiTrZ8bRwrLF1jZxE",
  "key24": "28aRsXwSUnAgy1D5iGiCBRaTTWgWYsALcFMZW6wz3Yj4QzRhjQVTtPDkEF9SHWdDBTxwE8rEBsPbijx363Ledf3v",
  "key25": "2xfMp4M2QLXH38potM8zJECBHjtcLgYWhV5VYbch5w3M6aDw4uwPKh1No3GP9qNPw8ULi53dGYDiqFiMRLHB9wre",
  "key26": "613LGzkRwksVyrTVQLFLhHa1TtntmVKgp2sjMsVuZ2C5QfpYHmvmM36WcyJeRZQC2tJebEmeaCuPcAYdQvGmXUbL",
  "key27": "2s4Zaq1GUFkYfH5CUFQbaXqdmhYtZ7Vk4PPhNeM9ZssCNdqHQnZ2RXsLWHEqNCqEkBuVMQu1R7aCEw8D6EWkvxW8",
  "key28": "7u5hEYPNURZhfPdhDGnWkkEetv3qTAuEQcwpii4miTqaAMqbgAeJ5QfFAvDpy65VdGgfF6xWDEGeRggwSV3q5Mr",
  "key29": "4KNUFWfhgYhCDpVf8Whtgj2auh6b8zHVVmkGHCUxb8Jfi63kDe1mCHguPKWFMtaRG3dwHKsxq2tsNa6E8tL2aGTN",
  "key30": "4QRBnth936XoJNKeLTJuCmZuoLdCVnAnf7x9fnUaehRy5oWGkjNEGWCMNp98gCu4s9aanqEWBDyXB5Hgzf1UHznx",
  "key31": "2EXzqsQUASM718uPazX2HG4wpo8nApmQum5ymCcPsCKLkxRCySKtJUYNyrigqQ4zjGYdTrSJa5BjDFhDFoTf2bdF",
  "key32": "5dZTaRb28fD33EXH9AkEeVCEEwNh2uTS6TgK36r4kPWjZGsrkYXY1VkEzZFtYG5RRJ7Q2SbcLoxRcJEWf5eatbv7",
  "key33": "2FDvEXzy7nL7keKPEEm3apLdWkaYf12RFBnhq3n9qzMFufDvzUVPe8xuqCkeCHP2CdaMwx2xqtgD8bfqJYyzpoMq",
  "key34": "4azpLLzMM5BrEApa2Nzs9eZ8hLfueEbADY1g4BM62uC275q5f1Dfri7b6TH1i8H5Wenojs5PxEXaK4p3JPejfHeT",
  "key35": "2ojTjHMwLCG3dSmWzVoJ49bi7xg1U5D4uHpSZMbte8HNuqrttFTKxFSPRg4fHWzc5A1tvax3MRSKi79jSkt4qR5E",
  "key36": "55hK3mkF2sXCmcNgDwMcR13m86kdAgTSmgttsE1ehjm3dkGuscarqSFgdsaFJ64kj9zvRN9LyYib5PiUgW8AKWAX",
  "key37": "3YL4XMjvHvzQijjPZJeWrdsHnZtDdMGuiBBnstNakuPwuE8oEZ8RzxrqJqX1MRMThAYxy99mSt64hWihJKVxSa2p",
  "key38": "3a8ox8GXE9Zx4XQEcyURnC8WdekncEQuCgaXNDuk12g8Lqzi81oawW5D1F7XM4PRaVg6qPjQwn5rsqfav2BC9xbW",
  "key39": "3HsPvfoLLFgct9viVgQBJhAxUB7w2MzXWEMQj98L8joxw6aGBNcHvZEJvTr8oMJBKQzhwnhM8myPPWtU9RXNNMEN",
  "key40": "3bXhVPMrfrQ9AGJjvhY3amJfEjLvt54WCbKtVSxMNigEwU7mtxbPXz2SiwW1sBKRqXUrpoFTwgv43zPU8GSHgMxg",
  "key41": "4Sak2MUE4PVTNnitt8anvUNpi8xp3X7djrhAJCchsBYd7tgMJbzfkokJA4wWbyAxsx3dN6QH5YjJP2tcrrLAW8B2",
  "key42": "3ALRgWWgQ9CvmctU586FHGEzHNpshtqJCjBh6gdQMrzKuhywbNfaC2s4zoAgVPaYPPw4RcVnBt8jwbo96nAfbHEn",
  "key43": "3C9xdALWcBUpm3ErnU3EogT6abwSQW1MvbKQJnZ2t9iefhHjeCkRvuwY7txk2nXJACLTV2jjiLwkGw6pWpAwj5eC",
  "key44": "iEdN6a7UhRKJazyTjNMUTjEfbRjGVyt7q6VpMhFCwe3nQ4TYBhE1KrxkLQcptSLwHrAzd6gVyQ7bNiQJxW4driJ",
  "key45": "2SjfguQ7KSwNdCtGXcLobYafg8Ef5AtvK1qMLeesBpgBQgWKueGd7q1BLkKrhdRoi777ZyPZrNDZGxAKvzAXLaDR",
  "key46": "2gHxbzjvGtyVmEac9foueSEht3igXhG8HhpSDN54ANCvs56frgdcFrN5C8SnCcPDbyujzE8gL1329gguNLZZG6Zg",
  "key47": "5a3TbKaemSa3N9DCHVhLoB88R9cD52RL1apRutTZ2aaQKVGx7K5X4y8vv6PRQve5tfwkREwcKpgJjhrqpV8Vxvah",
  "key48": "59jhnkV1FGibkxxv3a2LEm8i5cGrFrNBMAGM8eadi5aFj7PueYCwY5HAzvpcNPu4drm6EAf8hDknXDrsbZxekXS"
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
