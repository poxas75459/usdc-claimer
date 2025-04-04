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
    "4qMmEg4tUZAuWhL3ao42x41q177m8bDXqww536QsedUj8wGSHZ8fPy2MqeFCAQ72bmwSmMBJRMPku7HXwZF1cViY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUDjgUsNTtX7bx9yn9Qk4CijpE1cfpcSLUTZTUgcG3i2maDFUNJQLp17HGw2n2pMnshdJw1A6f5N1D3miNZAHua",
  "key1": "3zfREi8ghaWAd8vndBuZSBRZH4BgotDQnPQQiVDgm8KM7vmLsXMuezBgbZxDi9CR9kY3ubRm5W6fM5JNWbETBFPp",
  "key2": "C2QB2Rw4XnhDX9gzf1xQ7VJjdKY8h7HJrsmaoo2qevn1mRrRcYTwJCPVrCHRKDciLseCCkKLmaJabgxdHSVJ4Qf",
  "key3": "QyDcThrhJStsJoMvz1s9bCk2kCxKEj5bC8jLBea5XMBWPRJgPm4CBrkouVxWxxwTkPM7VorjaipKaoxopqdDxu9",
  "key4": "3HHKe9wNojVbsjX8siqnRLqhaod9Lm66qcycXAZJidphKZAyzs2DFGdzhcf7tjGYL2YvzNnkUmSj6Kd93d7Cidns",
  "key5": "5ziVj1ffFFFo5fFuGGNEPcTMdT3ioo9J2fM3XaZ7gfcTH7db3G4SfiYoJuRM6ReLqs4yMwh9uNtVvvjdgzSBFHF1",
  "key6": "55tcvBL21SbMKi1JX1mp9chen43dHTRt5LppYHYRZ3Qq8MoFhRwA6ZfCzBGVsGZWypC3WqA3xEJQVsG9Rvg9cCw4",
  "key7": "3LVnfm3Z7XVjN8mRwUbSaH8MbkafNECuiNRRjCAbZ9ww4RhCYXtQPqWcaUY1wPD45dxEA47nckhtt6saF4qqetaX",
  "key8": "2dLeyFACDmyAAZZXiVnJ7GgMFmhbCpjHbXnYqemgphBsdLxaiyMhemS56Z9QYpzNprhq4Jmw8cXCMCPPajH19bu6",
  "key9": "3fxz5tEXtgmtJex9Na1vhe4k7q3DjHCx7YfhZrEvDbCDEi3PMvKdPVDtMG7UBcLcg6PK7YFXWALjKKMBmrR2zkf9",
  "key10": "457UcK3i5iaZhhNFNaFY6EFvuGn1e1gf6FjbFA6Jqpv44VoKXYScR6ZmG7rck2jhNQhC54kxWsZJzhAmPYeDyNL8",
  "key11": "4cY6sWD6tEqibqwe36hVUpY7bVpaBjUveRCSEVuyTwUVCcuodw1CJuzCJY3Ut439tzEFy5YZnXQAFNZaf6S2oyGd",
  "key12": "5rSdxRA1ADNuUCtBViA1Cq9Y6HYzu3U26rurqY7Gto4L4JWcHUypHmzwdK4GkcvrkneecFsitHxVLCSLKGbhi7Vw",
  "key13": "2kkSg25k36AdikUqMTtPcMVjNKWpR6yMw6G3HkXv73vC1n74uPkAkFnndWTnSqFYY3AhNYNQH6UrVTpzYXJYuGu2",
  "key14": "NXspDeMakBFab5jrEeQKU3c4VHaJxM9rwkukZcEpFbemUS437LHC2FU5RQkdNJL35JLWrzxuJo7XkRC6StBFVCT",
  "key15": "42dqFF8zqauXZUSzDYCHkdnaJiVg9TToJshk7ruZfxW4HxxPjnQW98SbTFRFeSCXTwVicpqKx46mAYhNfQiLwp2w",
  "key16": "4GhXjeGqnJxiNPLovm4hbTcTXz2SFTY93w9LQsuCyvzd9n8hByhyUox3d6A2FkYz7KNjNh32WHAD7yU39V2SETdc",
  "key17": "5NQuo7xnoZpoCNHeXZsom5ZZWtomSA44s92UTiMjTntkov9kUCmomDT56AW55Qiu1gSefQqRVN6gFn7YZS5XNy1i",
  "key18": "5MUA6JJmKGBe3K4oGskzXivkx6Zz1rHphdHci1tuF7hLFdTi52AiCVisNGrpFU3dVznNWNDTCyZQ1FwhCq1N6TP3",
  "key19": "4TBiYrsL5QLYWreXcSfRZN2VpPb36BeKhbo5HKoQ2vY7WHXRMzDxmRVzYQj1BePa3whe3AZVQ8nEheZSs1j6mY6i",
  "key20": "5GeM8mUEVr2w9LeZMe5AkVguhcM6QBn4x7dfshpi4kMfAYVKCMgtUVrnbeth3Q7Eq7zT8Wq1aEjVV3GPngQXGUJD",
  "key21": "Xq9K27MdFvunKvSgRG5zaSsk9K2U8wWTtBGED5DjEUJZ5ivEyuXqku3uCNDzZPpMiukBPnF9rPr1L7zq5zZaBKt",
  "key22": "54SoAweHkPBXHqeZc7RZuh3PMvjG6SAiS9nzQs7WJT2wtJoNCiUGn2bDAfJy9Cj1eMMFB5bXpEjZpCW7eGujRMrh",
  "key23": "3139DvimmumRLLNu2yjEkCta71SQp1sNb9zwvrKegEA1yMy9aTYn5Nx1Qm1SF2bZk1AGvXkfCApQQt8XZzkfBnfW",
  "key24": "2j2aywvwtREb7AKmisx84EnT742iDc7aTDFF14DibjhnWnu6HBjKVMxoM3WSn2GcL6rJF5BBtt75k7dfWMdWa5pf",
  "key25": "4xv8AqdpKvMjutKLoFRbBpP2AD3Pn7ELdUAZoWNDRj7zK2jiVCbQzmrLtvv7f5KvKmP5AFCGFjR1xQnYA2KN1sBY",
  "key26": "28uv163zDVwCXywfjmBBeHHquqZsbqYbgCJANEouaoMP7urt2PzG6HzMzLoSEVTCLhf6SJLM2ab3AqFVuEotPN4C",
  "key27": "aKSKW5djU5d8VdxArGJk9WMfov5U7jdj4r53su434gJcVRoiTEykXeisjkydGqKhGrgwtuLWcaEuSqn3q2GkcTk"
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
