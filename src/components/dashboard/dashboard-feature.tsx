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
    "3zUnjmwbcLDsuoDbgEv1EoXs6EsHPC7iyEdKe1GtcLGitF2gsA57Nt6z72RVSDeQsDBKjXMqzo7dxzXWzrpZfcBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yWjF6SfzhrXQZmiuxSx9Sb8d6mndUqDWF2iMeyWnkRSadZKVrq13MSUDEDefudERS3L4Kvw6VYVej4vMPmNY2P",
  "key1": "2FYK6vy9ctakLZvjepHcWmh87SA6qdJ9MRxCrcaw4kgEzX9bDynJyjLEjXSRufXWFwBm85udnW75W16fnM7CfUQM",
  "key2": "3mcagw7w5fzn4qHsBv4XwPBb9tA2ervTgdSaFKARrh6TCv1rRFQ5ahSbmLjtduAo57u4Mvc1zjcxv4XFVAChbVAC",
  "key3": "5p7bo8TLR3tyacRBGG1QTYQCsuVTgSySd9Pjo3eiJUbp75DdL1touUUTa7pQxpg2ncwmEu7ztt25ZaxNZrR61GoW",
  "key4": "3bYy4Fx15rGwreXvWDQVzG6ZD3Z5xBXGyH6VsjNQh2BtoxZbGvmVCupmXuk46WmNkyzTK9Yitg3s3gvKCkRcCPA3",
  "key5": "5qtVpg4acqc5ANBekKkYxJPnjmrDRCVhFujDJ3VADswMGaLiVqgQtjXRtpMuH8kkbUDECQJW5ZnVeVSf5QjhKh4o",
  "key6": "31Q7Qmhat3MMUHCZk6qvYVnL3zaie7YiuLLWvyfo16QMFq4HDmHKjhAFAo3pYBjpBbtyTpknquFoS7xUrA58SAd9",
  "key7": "4wuP6waTUGtfvZoas8oSHgmF4F3UarLxHifAPFWojogY6r8bZWfA8jRCvQRtZM4xjqNMqbmUSR6B5JtP1VvdiWtY",
  "key8": "Qs5Gr163m9eNrY2FLKCnWKzPFvgsKSvQFgLTYPCs8s7Lsqw8EA1Pkg1fZhbKhUiv3Y1jizR32oFB4LgxafBbgQX",
  "key9": "4VJwt536ENt5gJddJCS7kXknH5zs2JKWo8uyHV16MWwdS1bTqyMMorkLunV18AfQ7TEP2hhhxeAaLLY6Nw9acyHY",
  "key10": "4ccNsutbnzn3SvcepyYUrBwMeRRLCcDhYK3v3Uf74krVqW73d8M3XpTu2bbFtBEkiJ3obmNHpzgKcwkkRxWRGJCP",
  "key11": "5hy5mp5CSc6UEWpWGu4d5iZaP342S6qshu26iUfuwDUjcxSFa87Ad2rcMj1iTKteodY3d9SgPZANuedfCUi84JtM",
  "key12": "3AraaiN4dECrrwE1K86v61Rwm9V5hEcHTZiU2N99o7TAz5XgnHxTLp5uYZvpCcknqPoZUZy85MUVphbYFHUpQiA1",
  "key13": "4xLjrQTZt7VkTJ8nm1iyU3NRftQzxcjfgssJDJ8LvnRx2Q2odfVufvFuee2AjKw9hxdHKRUvVaAD4ATWW3tQCKTZ",
  "key14": "49Vb3DGMjnaaRK12j35FhBJexaYeMSkyXykjT7pmdM3ft3PYoNkPPNUU8uMPERsDejgqXRHtk4Fvtxtvk9i5xw71",
  "key15": "5p8hpX8qzsn9dCAMMDe3otZyNzwkbLeDCevRyGVe2SJ7w5K2bXkPGALtKLFPDDNvxZMy1pBnjJjjR2JjBweXPScZ",
  "key16": "4ayUXmdREwDa4QTAESHPqaz9yBhGQvDAnvYfkGjrLBbdKZAji7BgFaRngDPWpAGfwzTfLD7VMHSKsu7exF5ndEvq",
  "key17": "5tkKyxqQpbbzgviwaqyHNhU6hmpT6Cpykgfmum9rvRyY5kijYHFXyB2oc3cYidVBPM4k9KeJ176qyVDC6XFE8zw1",
  "key18": "5gnrHr3ucCs2z9WhYY3VWUf7C4pwXapjnkrSDa7fqmEyDQTepKHMyvCfdxBJJveFCvDCEe9aUMcopm2vczMT4Dvy",
  "key19": "AHUdsJrSGq8FGMPBC1BhCNFb3F7cA8XnzMJGYhBQvX1N5wMdnQ6ArAzrjiTQ9FgGFLhzJe1AD2AGTcrUKs8wA5V",
  "key20": "55mNUV9a1JHicn5nxHZZMPwcg7QqBYgFboJ55s33hQHVaxsiVgwFeEbkb4h4E5HGtGRTR4DyzPmcEjeij9Kz5hC4",
  "key21": "36rM7P3kgEZxc4V6DrcxcHxA11Nvm5jEJffXR5Z1Uah4TpptvQSio4L6ghWN39aHyUfjW4U7phcTqFbDf3GZBA1V",
  "key22": "4GyX5knzuoLLuFht1PDo2ZyiqVziWopBDyB619hXwC4j3vt2Be6R31W2Q81BFwdGBb1CHyFUwNXAuJuo1HjWeY9z",
  "key23": "48TbhiHhUqSnGvuDWL1j1bjKcQsXD39Hb5KQx23cj7MGFdrWxecuPus9wi4XmEhGwm5Ym1wY3Zqe9ZktZqYkjwLd",
  "key24": "58eKqDQh3i8ArF1u36iVxMKrzkxn9Us2pWX5GphcSTi3LnnTjSV9Ld94TURxCDYiQZnHrfPi1Qr5nCcYc8wcpuL",
  "key25": "4Rc6UbyA9hKh1ShYmJaHFo4tUyDFz2tGLEXA2ZJdouqReZBQqgCy3uS84NHXftZLd2KnnQxFkKacs92zhi4nEw4G",
  "key26": "5z6rWges83miPzqADGkdLExxJHtdknLpTTK3L3JgcYvE6Mm46jR5dhZFq74QCBRpFLRuW765WHhiTTYiqoB7Dbbp",
  "key27": "3tKA3mV6dQCJVm4zdCwa2fdN3tmazGzoYUMTcZ53Mcg32qJJJrT6CYXpmiecuditsdaxCGsSfjpA4WQGxBRFUQdU",
  "key28": "3TWr9pr9m3JhsevV3NnwaiaaiijTbtBK7iZDuudrVaX1N9ERFVKJ3P6oUt2Uwixfc5PXjdUVna4a3saxJZTso8zG",
  "key29": "5m4pqr8MtAtk8vK1AnF78o9Df8ftHEF33xpGQrtu8iDXi6iQskE1qiusRUfraVjuk17do99e2AoW1c9cq3pUkDd7",
  "key30": "m4s5fcwfe4EbZYqFcRNgc9hdWsKN9uNrdmSj1tiVzQkyMvnPKKhsFWovoyMuXkGX3hdRuxT68ZTEq9bgNm4p6n5",
  "key31": "5TrRaVgSubTe4wJzva1RN1TLevL8kNNLAwDo1h3YLuiVAjw9AxzRb8TXmYM7vWc8eguvnPqx2pnjwgZz2SDLpsAZ",
  "key32": "2AH8B6NFxooftTKH5NGXWViw3uooCHhAWAU4uCFdk61dpSF8XmqKutKecqFUBUCUTCX9FBCitoeSjhjQdsU72kDa",
  "key33": "dBz5gBaWCJGBv1bu5S5ATzV29hWu5fG3Bbp6oJpkJVwsgoMNriueim5JDbyesPWD3JSaADfcSVYBb1Sxad511aV",
  "key34": "42pMeEnz5cryr1gxyK7GUnwVDZXgKeQzCoRiKSpmqzsEBTZjHvSJVWNoh1cXVgRHzEdg9vdeurHRtuZmGELEZWou"
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
