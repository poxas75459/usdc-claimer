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
    "vyZcA42AoCUZ28HN9fpCMZQS7HuQ9L7qMFoygQdg5vqnZzjgDFxR28HPztFkBZz4CKWBTrWJuKKtactioccZvYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QFH3HfmmY6NRAszbrUb6GjREaY1DD8LgH7en2sFqmuoooLjmNcZjc8DTRFEbB2JjmkQXEHdHqrKnawV8vkCuqBh",
  "key1": "3mkiUqRtL6xUoBpNJq5TNKQfMj7UBpCtWAPqgjin3pkJDAoSgVHV1if2T2uoirXXxb35L7KDFdTLERqhEnpBTYzR",
  "key2": "5sd4KpyFMuNRYrJEnsBTH9NWDoTtqCmxFehVHDrM9dV4ZgWzv29cdSWmhGDifd9VBubDsKnA3jwb5vu7kVeS16ih",
  "key3": "3SJ2ehnkV4YnBMdsVycsRjdWaGM1PsCjhtbTVmUUZ5YdxsG64gkwsbAhf5DRLJR3kZ7FtobAo49WKKTFwpSt7mdn",
  "key4": "kPBHwdH2jtJnZ2FN3er9EoKA455rKJy74v6L2zqf8QyYFWPVghPG5HpnLZGu1NYU1jpba6V9UpKvzQQ4xbs7YTY",
  "key5": "5aj9GJQL6eqSPrqfG1NrQU8hpiUQiHtanSVvtgbFAynDc9Mh8tcERqj7e7GnLvBxaZMnUbQDi3c56RfkuSVZSL3o",
  "key6": "3HPzUHFc2h46imswfj7gEWWu46CM8Ry1sdw8bKT5Ci87BfMsYVWfpeU1Mv837Pxf4Mm4v8YZRH8bX3dRiv9QazW3",
  "key7": "3MGR8qXEgYYnrqCSEThKsJxcRScjbhYofTX9bjR8c7ATxsXzQkHV4tucLnMcPEB3NUJfwM7KZ5EocwKpya9N8Yp4",
  "key8": "21JpnR5uYJzV76oC8PCWPM1aj9jRnUN3fVDVvTVqYxNfEdf7zq2CJg9f83MjmQPbmftztPHEDNrqi5XYP6dxQym6",
  "key9": "djUbiZu1RA1t65PAA2QQAzNBJ7jNeRNUQstRqLLKESqSvGWkNjmr7WFmbkPvEwL1AuygSegKRAKgxyNZqoymGDJ",
  "key10": "5Nhu1SjUDkRfJ9ncywx2ppwfbip9FeHVSCbw4EcpWf4zpH3xPsH8r2vsqKinnZxsmkpVwyh52k23etbCr5vuwv6a",
  "key11": "BAhVGnnD6aywhKFBF2ZX4xKbogkFXbk7iwJH5dsWhshhEviMQrpP6yeVQD7wtyEWAcQh6qFDK2kvCDb5Hutn5Sm",
  "key12": "3hrCLAA3Zub99mKX4r6HbxZwNVjtBvQABmRu9CY4AXJ53aPEDkYCWyAe8FdePMjqsSyoHsk2eX34Vu2EuFo3ZxCp",
  "key13": "2oikTLqkxD6HJHQVBtAxSwDa85dkfy6kjQbuivFdxAkqW1T4yRg4B7PiuwbZBPhsDkpEHciwknVJERNs2XWoSgCT",
  "key14": "5YypTnd6SED15P3nvCag4fDwe62vv6UXBxmfDiaaG1csT1KWMBHkwBUM88rWFxXdPL4SkhSgdG73xesLToYX4PpR",
  "key15": "3qiXNUWNmNbGpf7tEwQRzfLHeKexrfgfQ3eysMqLe9HP8GSAyXPb3QmUr3CewRXEJeG4YpcrxgFrayiyqSndzXAf",
  "key16": "5C7fsqvcuVm2ebXVkcmzVTCkhZSVSGRshVu4xN9ssWv6ftu9qGXNEr3rRqEKRDkca9QUgUhABFQCgVajULoKDksc",
  "key17": "3jBcQwepzgjVLSpNqhwVSUYz1bTU7brHNNhbAU1ugHc1S7M6CG6hdUTdBXpZZnedGLQuPimZMZg9Zj9oxoqJbv4L",
  "key18": "3zDNcEGH8B44VyZ64ePNFeaPpmLLGGsUBuLqy9QDdfJV4N23WAJ79kX1snqYuDykysaVZPc8xikpxpT8nhUcgZnC",
  "key19": "4AK4K4iXnLJZVsZAq7v2NbCscBqAAZGbu8pGhrwiyiUUiYQWnGRZLTxsuSvfxngBi3Fab2eEWUnBnfAb7hBb6Ad1",
  "key20": "8QZ8ULBXzH4Vtme5GrsBm6nzeTYbrA6VQMtpiBjP1WKcGSUC5zCr3beaUnFb5EKo8o2YM3Nf8y4VRduWNRFN2z9",
  "key21": "3UgUHgidob7WhcE93d5nSApKTGrzCEUsuDfqH257BZ3qyfrWeSpwb8sPb8k2GGHitbTB66TDAhzkfYCjmFdUHZc",
  "key22": "5Gh2NpBcvzTx114oDimo4rVBFBMjDPq1AHM6m44jpQFRuEgEY7Udn1BNzzSj8qYnsW9LV2jyMASuK9qo68TjEuSL",
  "key23": "2CeA2o4sXcQvUuyJA2ieHtdpLM9hSCqNNH3gfvpKFwQhQVwFmRHXXj9mCWwHbmLU1sp5cFt41USYiq4U1w9TVp6i",
  "key24": "4nZjZ6sMpXJqjuuuYS4M1ZtvsTcXqJZLK5cCqkQ9EQQSQFZth5RAoKniUSNdi7Dp2g18NqwdzhRAPZo1x5iQx5q6",
  "key25": "2X9M8Rw4a9YvzH7GGRAhKPXx8Nrx7vszi1EaKv65qBnR3ghcq3zjzHD61fZxjowHAGVjFLCQYzERnrWkQzDCTkPP",
  "key26": "578fkrDJHaTvqMCTPGPtj65nY89QKMs4QXLW7WGXjvbnqTDxoMhTzABywMQJqEw8zQ1M54kQ4N5Bda563VZ4Vmeo",
  "key27": "4TWxojVNyhhVxfkFBHAVDNKJSKwVYfBgwhjddBYyEMJx1tbN3QhrxQk1WmZtnixZYSM65h5zQTVKbuD4sNkZL8EZ",
  "key28": "3oDSekVu8jrGEwUgtnMK2moXv9UVSPrtY75NJrGkZJytQrXA9ASziLRhekHn2s9WbK8SDsbkcfrJiTYMYJfoVQd7",
  "key29": "33Y5w99uW1CftBkZhaL7AHgGm6yrnhnuJBmkVPJVu7kX7RWjpscKswY3TEceKDA67FKpvaJ3xKvN6H4NTvQHQeYX",
  "key30": "HS6SRm7xtJUFxFFJ5ewHmLXLPLYyKuefJ6CmtsZva9pTWQaekmN6bB56cs9WW4KWh1n3vApbjfkHwJLyS5MKkBV",
  "key31": "5S3PZHSGP6hzwSRSpAzihkJUSnLfSq8Ed3uwaHchhry3ANmZq67JoVH8kMx3oX4EB8XgwFwNafoGbG4vNnuVZzN2",
  "key32": "3UaZ1osemw68BE2h86qSijR7MA1kytpCNmJct8hurWGyfFcGmv3FuhZhaTC2cCbBiVsqNTEAMf8BN4KN3GkaQyKo",
  "key33": "5d2oBUFr863PxvgZT3rRZrSFtMj24qBdjVzDCaqfofLHbSFynR4PwWdoJ3FLGGhZTe91SkD21eDjX6CmVdpmK7fu",
  "key34": "4D1JHVLCymk83D93LYFL9j7HCVJEzuUU571vyTxWG32ULXvGQmhAjLLaQ3mDn9PKuYTY5jpv4WD7TKwhMtStcP7J",
  "key35": "3HCY8fPtcTMebcVn5FnqMkSRvT97EziX9REd7WGrH3RRfxFYFA1u6JMp53r9CQMvcbLoEMusxRDtJYS8M8L1dzXg",
  "key36": "yJDgsS4EiLXUyb34BuNYeFXujwg63q4KDCdPaXFHWdHiGMEnbuqkWCbPmzEMMmczVmBTi489EAvXFwcY4871eCR",
  "key37": "4nW1Zv6J3MBy6PEBFfKwQfw18EmJCXKpPS7gcQad1q1zGaWXDMTofP1YSTdeWwrVJp4WuGJQx2oh4NiesMXC9Txu",
  "key38": "5u2jhmdZivrQTZAcTKq7EVjGzdD72SDZXegVS2fpvK4LfKQ2mL68cLd1sMq5ayFBbQf79ezJoJvjyx51hL1ybE9P"
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
