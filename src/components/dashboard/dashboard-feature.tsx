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
    "53yvAvinWmheoD5AksXjXns2CYoczKeJApukZ4HfBAZMNSoWUuyNCS7Hmte4nVE129KBP6fqho9JFRHV1VikKq6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sUUu7Z6b9HRMGsxKFRMYBm59AG76kqsZwNMcA8PKgT3Y8Wwh9Hxpe5Gu5YdPsfRocV6LWv4hAfLAHStRgGbT1iC",
  "key1": "3vknJUgaRxSpi3cE4ns1b4kATdZrENodB9x3vuh8y368W5pKLMcaciBGRFJienCRjqed9nKeDosmjErjkRXMDZg",
  "key2": "5e7Q4uPV1JZxAhQ11tKTvn5cCrazq3V8MmSDXoGvdkzveknGjPbKmnrZHNLERbAuE675nVQZJbmjQtQZhstwxEMt",
  "key3": "W8vnMcZehdNTHaC8D5vYrUAF5F5GDTd3fEiskpSYkdyfCXgeb9fX83GpqbwpsmTLXjuYGs4K9cBKUUGXH3E6JFE",
  "key4": "4f7emvUJFzJq2KWRm7J9RqWQr6wSaTctvD161dqVj5ee42rRBAQn1tqbVC6Vn43bU7AszTn6QRD7eN376hdrzM21",
  "key5": "4VuyBC7w4kwv6dU64AWZJKkW8eJhvu6TAmPJ3z88j3n3CjnBKfdMzx7sfVNRVzw2SBYVhvSf6gHHPgnM3XNWnd2B",
  "key6": "33KaMx5WGrscJZQPGvCZg5vzyLYdstbUDftYwLmLPU3EcvYKEC1swLEgnj4RSELQbSQwtN6V6nFdmuuYicZdkwTJ",
  "key7": "2LeAWbfY6iKQ8c7BGAYn3Lq2sAJacr7ToZNVSYQYoqWwKqjvuE1htnSDAkwisYV8fUiEwYYg9wthLMSbNvT4o82y",
  "key8": "xWaLMSMeSn69yL2fiUBpPED3SEdZ6xLDXZDEXC9Q6un8raN9Hu9EoDoyzpRfVxCrCU1LAhkcvgKJ1rwSVyVMaLz",
  "key9": "2m5g6iwKeikXFvYuTBzVZNHfH2BEtAUvfTeKiCZqRTSE7ZbTWd8FGBaVLwrMgkvuodj9iFduptjs3pZ76fFhqFRb",
  "key10": "eCZjXdAeWzoY5ajyMJQx3xCZsLPgvUFqesNUvhbaNBAVWRQZ3wki6ZPozFtD1f8PoDkH4NZWcH8pxi6MuhG8AZh",
  "key11": "nm32ugE9z62ULnDkbzCJmg5isadYZYDfxJ3XKPXzyMakKHLTawcgPMURc2Wp7a4JLzUpLL6rtnV9ziPRnzjbrJN",
  "key12": "2EG4XswQYhxMw6RrCh3N8ngid67z5zbrcMA61xgh8XzccBnCsiSPEZYeEwM3Rw6DLTyQxcVrbM7m5JJQt6UttyWh",
  "key13": "677bhnG7TRQt6GXLHRC6ARrVAq1PjSaHo3sBrsWa2gXYDAM9Crq5zpGa4KVZbDLURw3iNSCp7TFeVLNc37D8gsX9",
  "key14": "3sptQBKpWUChuVppN1bu2v1EUkBApr5eGtpmyV3NKEx7j3BEESbT1YphYYddssy2y3GNMdfPadojosCWHNHSGbgV",
  "key15": "3iKCHPhVc9mo9M9cMnEprDsbWcMDSmbuHgyikc3HV3pSDjMS7dPM1DDMEZLSnrfmXdNu4rCfQyh1e3EHR9V75ndP",
  "key16": "613EhmeNbbYUeuJVr1dHPSyaSjP9SKd7ePYqZzyZRk98cAyZF4QtbuJMy36wVrYiygiU4Cg9XeddVe6F2dQzQyV9",
  "key17": "4jQAzfj63L8aT1p8ZNZ18DJfj5byLDJQvUYmvAECizYGc1ynnLkC8KxXZFRAoK3FrMkT6x6s3hMmKAakek3Uygjp",
  "key18": "5yVcs6e4Xxm5AYLzxABYdXp2wUdPryadMQZ6joYTBL6Ke5RoEk8PexojM3zdVaCLTkyBs5KkxJ2fGBRD2KfYCg3L",
  "key19": "3ZZNVTJn2hiDCoRU1oEkugoQoSXZyCANn71mP6nsyizdqRE3Hkr2ycd6j2thUvu18TqqGc35MajmbrMtpfqoyx1R",
  "key20": "4MhwZad92XJPEospBkUUV2W18CQTFNRzJ3xBSmgTyUKBX8kxEt8Ez3gUSorbFxQgxasfWXg5UgynYKSV4fdZayV8",
  "key21": "3R4YzynQmzmMSDAjzkWJY8MJqvyjXu21YAdntW57Y8HG2DyWUpCTkyua3MUwt3AVPTKp5SMvCLUkzZUVh9aRziC6",
  "key22": "2DZxQTaaMWz1gTMTyy14RVDLau1iVfry78LFgsQUjZLjNg7HwwNGrQ2rSuUjrayFw3LWbVcnuVyJEY5HUVxvTdXi",
  "key23": "3evYEuCTRStpVe8hoLWnewVWydSJ3b48KLoai3oQd758YNuRpFPrUN32PMLEBPBuLcoQtzXku3zfAvDVbfHpCZd9",
  "key24": "2asQF1QQB4kf5ajabTHjnvx8hMBiE9u65p2DdB5RjeyxPTBDAFMrggMVJp7Cfn4VnEQfTBJwX9sMxvXYKMg5m6MR",
  "key25": "39XVYEAVKF8mTU8qvdxUioixKv5gWaKc6Hwi28CVFZ7vfaj1hF3WKwFruJ5vesHkTqo5dzxzW8WM7jFe6aPWeQsc",
  "key26": "2boRAtL4N4qNSwNYB7BszWaY6r4wkdVq6wAnD5z6Akqa7hCCt9W6ttaFkkNFK5AtcfLwFQbmRiYD1A9AxcxapKC9",
  "key27": "5hfBBcmo14J5tbyGeNLodK5XhTQftfjQoEYN4fHBc6LAHAUSYmeNqXjMyPNyP3TqdJp1WeYixBXBdPdQLW6Y1C8z",
  "key28": "553qemSNj4Rxh1VJc6JhJzSeNPUEvhsWwgGJ8pqijw5FgkZnDJ7Ex2fkr1r6YCByz1H3ArcvUfBAPRc1DUJ9ZVHE",
  "key29": "4NwrDMJDe5KrAPjmSBRwTsXYUxaXas16Rcpnnyv64VPM92n7QBVQcVKhLuqzK58FH8kvniTrcN2x9wnPU8SKToRi",
  "key30": "4PG9SQjyvxwS8DyqY8wEu7kGDamtrEfj3ubkhdB5MmSGJ5Cye4K6GgqWyL2FDar2QdFvkJYsK9qLdgLacSig8dqB",
  "key31": "5frFTkfGJnvZWcf36v4AgX9DfJuaBWAgGfouq65VyqZGDY6uT2ZHinD9mTztTpD4Prp5cmAzmtxk99tgq8PqG596",
  "key32": "tdkWuKKCRYqDB3NP5Ezro56WcFaMagyQKU67m82q2dNBbzeiLwf3tWx5XbB9ms68YKhT4DxgqH5GTen9381DfJo",
  "key33": "5Pt7B43vxDTgaHLCgmSnxuWDuVQD3U2zXJURPTcC2WdhnTx5Ri2gm9HjfkTTfpsGoR4AgWB15TFPi4HTjpHpNBhZ",
  "key34": "4CRxaua9mFjTNE98j5kVoGg79KnXeaem8d34bPdmevUZAyakLjMJvcyjGYk3BRzGQaujjWx2t23TEQ9W6PSuy5Sz",
  "key35": "5Z24akiqk7Zrve5TKVB2XFeSpwTFK1VkBNLhfidbuhFk7n5yao61YEHS3nXSxYrQ1YK5HY1gHF5rCmtNbCpoXFem",
  "key36": "5k2SBY5ymSDtNKUCHdTogC77Pnky3kVbpU8f8HCY21imFJv9mG7PaW7RjxrpismmnY6dHXrDSiBDG2yv94GC9kFX",
  "key37": "DRND5jBkH6HvDkMrfMkeT13dtWv1QQ1ZJt3QFRGB9wxSuAWELA2ZiEiRdhZVBHW58jaqYXan1zADXhmW6L4BNc5",
  "key38": "GQkiRAdSWvVQXjtxUicvy7KHykijGBx39Us7REGaUXJFw68aFHQ7DsEMuWqkZ5e8yEBECLpHoVXyeimu7GDJVVM",
  "key39": "5c9kBmL2yKnPy7msSf4UQpres8euQLHfdL6F4V2arNsCNDfLxSLcYNo5uytv7WNLg11i3RTRJZERj7m3FxERZAee",
  "key40": "dQzobCUZX3xomsukVEqVct6vfnhr3BL9RYWxYwN4kz3AQE4iMUYfosxrT3tpfd8sgaaoPNmjSFGD9LytgeJvHt8",
  "key41": "25zd8fgZVRr1RGxAtPLb2ompCkDLpQkovHG7eu32JLMndLFmQTSTF61CgakfZc9peVYc4Awdgt1XiVXz7pHcqLgU",
  "key42": "5ggcsfeeXvVb5uRPxEMMttn4djTr8WCxTJGpPPnA63NTceaVZBMDoRMUpoCGL6iMbespsYKKL94uy8k6Hjd5xemQ",
  "key43": "odd3ZoZV7bKDZJydyU1bQJL6jpbCh4gX9LnXRHVBxPwa824QfrtShY8DhucyS4Ycm4mvE12A3bvKDaiyAPCtBec",
  "key44": "2gs3pQYyVEHNfo2dmiFa3mvZ5KbpD6JQb9e65fcKovtg1x1DbqxVB4nbvE6VXvP4WKo1ytmvGeQAxK9Bovh4dPts",
  "key45": "PFLs9umSzs8f5CxND8kp3EJqYxbW7VJRNNMUtW9JLJYX2VrK9EjPRMfM26gQszg2xsLYnfSuqZpquAa37iZFJgT",
  "key46": "5mRXCUdvRxCUqHwVh3N4Q6YdXa1CsKBeUEMrTNhWvitQABRm6eoSuU2s3eqY7Vi8EBiARBmoaXzUFnnx3Xjrj9Sz",
  "key47": "4ViZSkUhMC3jZprQeEsv5NintLc7vM4amU4TkgCFWXyzQQ3X5pTYYTtaW9pd918zCFb6wsVucZDQKFkbvaJ76hbz",
  "key48": "2DGM22nqfPCkYu4eNXvbfPRapPm191LSTAfNytUxWRbkEFuwUirF11L5SUDdYCC5H4akfmy7MVBr4gjBy1Gj1ARk",
  "key49": "4FqVV6vTPVL4FDAxLw42U4DqWGd2x8HtYJ7oFoyLQ8aQSqo3r8oJEqcduQu9b23grQt5eKoayaB5Zu2ruJofEauu"
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
