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
    "4EKeignQmUSa6X6pVYXMsptHYbgP31nFXHXLG74M6uaRXc9t4PEVVXBxNgQtwvCJCsS4yVhfvu4xX6JKyEtBmqD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8mXXU355renwmMTYwoAFTNXzAZnmLb7N4rXGG4EaYZWkXubW9mumHoyhVibzWwKnddUnNAT41xkXZGV9va5XjT",
  "key1": "xLz23Yx7EisiPs2ipYPxxHEPt1uqp3k3Y6Ry9Eoqjh5FxALCMGWarHntdvmBhYyZgriVMMGZKfrxZQhf5WSwWri",
  "key2": "57tJViYY83GA3wyi4hhybHbPX8KzaomqyEue3XoKWdXCcM9B1SNxd9GhhQYxeNxqs3oRtTzm5wQDCKhMAouVmHgh",
  "key3": "3aMKknXdqQoXJkxkwTpGZeQnrRFKMVa95i5cyJ1Jh66ypKJAathjFiX6KCTwAfo5P4tVss8D5DCmy53J4PDk5a11",
  "key4": "5oMFUSujdXV9bRpD1bYM83GQA7wxhbiDHschcW34X6md6HET15JMS8jXP22RpRWSSBJNLUjWoYfCsyNEo8oQgiCS",
  "key5": "itWbDSsJqYpTucT2zxs82CbtDtK9aenfaiK2UbzWJErgUB9QYxGxSZVPRTFuWiYLdAGF1sx3CrQSpiFixxP6enM",
  "key6": "5ynESEth228kV9WQEtLhBDMxgbvvpEy1VjVAgAjCwutL8T6RqkKW3j3gz7EAYfpmG4mMyGSCAJL7ejyNSGw3rq6y",
  "key7": "3cEJCbUeLJSqfPC8EgukN3EZrM1mfRzcvSnEcVKGLfrCJNpd6grH1kJwSszL3geSoSdDTcmXj7airqW2nJg2wYdH",
  "key8": "4Y2eTRhGLACtBrbDMYxDxSDLgjnVPk8C3wiVP7NdWuoToTaSBC3vh2QeXUqDHtbdt1sDiH2wy3iWgfiXoCqqFux9",
  "key9": "3t9hmTmJMFrbEsVtZB3eKbNCio5rTWaknYWND24vpFsCyy658hFyNtamb6FTHCqfsXUKoPfZBtcEUW1FyVqu8N5",
  "key10": "3brcEkNpakuEE926nXaqiNDpFrEwVx49DRMakC1McBZJUGUj44NzhaSevT5MzGLJ1jzdnrG2UymAWLJAngmvx4X2",
  "key11": "2GWHVaSMapm2HntdhQMNXHBFgo1tFBgqdBsS44YJcGBpLQKMEXkFx3h85rdZNcdLXM9n8fKTghZgHGjAi9V82MiJ",
  "key12": "4fCz75HkVH4cPV821yXVTwvRcxqEzpehjaCws2fbVZqJMw8MNKTbiUY51KhxySuf8usBVCP1vJZnN5PVVR2Nphe8",
  "key13": "3APRhEGmNsK691zwd2RMthNpVHZZfwDbigezKkb6ftQ6rWcTAnCXU1JWX2NAXigtWBHvFKf4KSnBySHsuhpWxPUE",
  "key14": "H8na24e6JWoDnG2tF1z7k99zcwhf1ansXxwo2rHGxqEHNhZterw2Fring8QDQHvuD6DERykWW2r3EkvEHWxqWQ2",
  "key15": "3k5dnyf5C1y6BjsRgWLLUBPPUNJ13UmiDBiorPdUcsgJsjvTjS8mcDm681fSyjvdQ3CvsaFE2j3P9KB8byXQqkoq",
  "key16": "3NG8U7nYgQCD6P4NTuwSm9sApgN9PCH3aK4qXV2xm2H1bHHR2EXLgDoJsJJQo75JtxR4XBWUSFQ9RgKDqBZvWvDR",
  "key17": "aSwswenz1467aWHPAfpVpR8BfkdM45LYZyeiZKfdrjZ5Z6EydSKTL5hUu5WeNcSAu99qvPwvEenU4FjnKyrqxBs",
  "key18": "3z6ZUkH72Es2z4zSJRrMZDPTQpaTTc9sQ4HkAE7PGHtabr3P4hLMna3ET5AYYgaMJjJRmfXLqYz7f9PNjyNkCRRJ",
  "key19": "51iGw2jUDwMZQpmMGrLvo8vtcFU5Faskm1c9xr7jyLunqzW2jc7pGPAnQca1jjGkPNQPzHJx2LTKzCLECo81efZJ",
  "key20": "5DJLTHJDkvtSJ8T7CA2BJjyzk62ToMwvyhWLt3JbDVg9AYkDM4uVVAJrug5uxvRw6GkcU4zHwnZZ4TFK6osqP3mm",
  "key21": "44S5mK3yC287L3g5Ax2aQ3H7Wy6ttdqndTtuXtJV9ZPynZTxKaqeihERLMRbJZSfWyKdxT3BkSvasXCdKtfjoxpF",
  "key22": "i2Wcqs8ddCU1JUwkDJLfUTNcrAbbL41mr8HGP6mjC22HefePdDT9Ff8mFkex1NfD8dfZvVR4WnSLypPri2LBfaj",
  "key23": "2wyDa4z651wvPUt3x1ZF7WbwcmkiZLfGmDYxzAjYHLYcmaH3yHiA8hQZjBJhpMbhudDimGFLLNwXJfCNgoFv5zCF",
  "key24": "WPXx4wDgzk2hwxgJPbHVgWQTJtcuCmYTZmRm9uSmdRmKPiCuVUFJLgfQVF8uMgBh5Qho42uMhs5GjCeKPyU5gFP",
  "key25": "32DFu9x8r7J3okNb2zJZCodvfBdYq6ih4JyoxMQMtQfAvVuVGsA4yJBSryLZaM5Up8RcFD5oxfLMQckTq3vm1gyB",
  "key26": "5hChcssPPZnrnfJuUbvizPu2CZJdDpxUcMouBrzEKuFnYAyk1UN6UXq3YE2vUWYrodtu6r4rZptAWVwnThm3gikc",
  "key27": "3nuY1W2fRMpg8V144vJPcsdogk4XFrp5fahXdXQq4tvHuZAfEJtc26D9uuo1WBQrXTYDwDqZinXUXZgLYkZ9u8Wt",
  "key28": "677FvPsYSrdL5cWBKiL92hxqKsghEmWR1mtxf1PtL1U1pjwq2oXjRAY5ksjzu2bQRramk4jpK63LVXKsmyCaezoS",
  "key29": "3dRQQJc1MGDGdD2mRBj5RtStYPWsPqUMc72ojpi7WEEuLAbb2wVaDcmn81QtBjcNygJLzSJ6LknnHUzxzJKWaSen",
  "key30": "37EbAMpyXsYswqZXtKdACiKHakQjTD93QDCCP53ZpRe4NFSFLJBEKee7xQpoD1wLYiyzKYHuBNDTmjx5K76Ca4Jj",
  "key31": "4BsjxsNQye9dR3uYcwCRq7SQLURoMh4bLtomPRgEhmCsfQU1uSbYTvFmUpRfKUpdgUVSQLwjyatRyZEB1rmzdwaZ",
  "key32": "8KK4a9n5z88uY53UQggztGCdPtreEqdN7Jbz43MZK3Gs9NDs5f1AoWAuKVYzcADTeZrNsyg2VATyn181YmyriCQ",
  "key33": "2H22CbJrKYdxwKDryH8BDAcpxUGWXLGfAkJxmD9y2Hf9DqYzM9ZncwQ2J6ToEuSG5qUJ6b7xFYvRHVbtghttsUXn",
  "key34": "55pojjy8rbK8DUdCEizk1ekqznd4rdrFMj6iEDgL2wbjkCqzNTd3sPspfEsXZQe33tpZLABASpZH9UREbqQe98EJ",
  "key35": "4rJmE8ro7krbuS63V9ZvJbCNsuGp4eB6WK5vDnYzGvaEM8D2X55YdiAk4TgGFaqeMCCNZS4NsQv5ywMJdeUn5eWt",
  "key36": "5SAeNuZ2J8MigsCDXk497NJkT3DtwUsudhVjUsJg4akFzPdQn3YvnVwWJgSxTj6Q7RAFTLjit95xiD93WS8q2pRr",
  "key37": "2HEVhCuRviUc5o4wiEXx8bpW8XuAneiYtrqiUZFdCkB5M9t2u815NHBdQKTpvUhgXL6wt6785nciL6uwphU19mN5",
  "key38": "4WVUqjf5jscQJvENrWhjjdbB4QCinomfYkoMRGS5YA74J68KLGsSMhLZ6TteonC5x6T1Ww9gA1c4NL7RvecBogwW",
  "key39": "4jQSXh5dRVNUrZKh2w5jGX8xx2cvpkJ2N9tRqjW7kWtjXtoWkg67C1V1K78sYzN25j5LzZcbzs83kDCBwX1JMmmW",
  "key40": "3vvnEnf9gUPZDz8hukLZdnHtKic318TPbdJSd4MKesP2vHfuSsRwZ5kiQKWBV1KYmv2eSH2RbQ1cpZYg6UN2uV7X",
  "key41": "5cQGQaoGh3e3xYuJL62man8hNFwc9HwTbFr5c61YBAjptTjuqMFwSPT7v7wfwyHwQ2CUwAy1hvN2ogHL3qaKjjGX"
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
