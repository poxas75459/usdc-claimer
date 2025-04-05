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
    "u6joTPFqK8yFEV9MSeJL7bMNY9X2hCf4bpVLDsKmCFPyP2PJAgosNgUHLSuRRS4A6Q7nkXsrYU4igdXzokN2xC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JcRJTyaDqisWWe3aJnBC1wB9aJa6xVZPqTjnoK4cvYqJm8TXdr8n4W4S15WH8NhBp3DrcM2ziyDNZ5AVRN2Lu13",
  "key1": "5d41bV5ECm58RUiJj4KVR3tvzLXpWZHLNXFTsYs5PUSkQjb1d4ny7vC3TK3J1t93AeixPyCPvZdRr3xNGvgmVhiq",
  "key2": "2jCURzoqbgWXRXGtahx6cm7FvWXu3Lc6yoKLtFXUbC7urKzF7mAs6LGJAGd3izbEaygwNUWvc8zg88XfZF8RnQuL",
  "key3": "2gXX13K7N562xxCdEMjSQqRtEWig7MY4Htcd3v31KdyXckJRMnLsL5rW2Juxmig5FrzoS9koixhe1r6BjCXbPecn",
  "key4": "2mN3SUYekV6BhwL4Unf5S8sLUs8mHhokjnrdKFG629DH3S93tbfJhG5DYiCsaHL11C1gd5S71Z4tj8QiNWn1iRGL",
  "key5": "3WwD2YiKnoGmKoXVsHBWuofpH4XmxJTePABM4GmM5pgtvSQSC266ypRe8xnfQbCRSD8aJ85qZQkEtDzu7JHCit5r",
  "key6": "vtL9zBoSz9ZbvqFWTZ27rBhhAS2y35uxMxdn1zvzbSxZ5eEcsmcbVbE35YvfrowbiXS7rbeMBKRjXDkEEqWcSvE",
  "key7": "4gAKyJre32i2FyQh5DJnahhv2jx5WcHEU8cAzBacV86YJR1Cx3PJCeJgeex2szGwkfGVZDVj6CZfkZojhJgVzkbS",
  "key8": "5T5d636kXf9xLWmq1927tWHLSKRvUiphoiyUsLLbCznFfLnoeXWEFBfwVykT2Ytk32FyVrjgZCEdZBpc3joSKBtd",
  "key9": "47x2UBcBYAV1fhbgr7zXQscww6VFFR1xNWxp3y1SFJAuvmoytwk8jWpLbLBJmpVun7Kpap2UXAMj3WjWBGT17yUJ",
  "key10": "pvbuEnGmob5gQYY5cfRtAgFxav7waDo3Fb8cq7AbAWcVmjGmXKRKWBLLQkDx6i8AV3ED7gnBUVaZvwyrxGD2qYz",
  "key11": "nkTfXW3qk65id2aKtaxvaK1p8oQjWWqJbZKDiLnccJxb5nhki4gTasYF8wteiC3ScZzC3UpXerfvZMmpMPSkL46",
  "key12": "4WCxa19upMKro2CLMwDUT6r1jz8Rk838RCnXHe9VN4JpeXF2w4kxC693VbzxCf5nVPnAoSUyayH7UrovVU9Efbfe",
  "key13": "2gmm3eE5f3HmTVbCw1HF8AWwmoL1QjQJuyMwkfyFDLxkgmL1vckZ6HNfCJQQeQkXmkFaZRLVtrX9viNvyB5qHEiu",
  "key14": "2mofZy3ayrqNePyeMJhdzPzmom6cnYDJsNenQiAVCyZYzUnwHdeNbSbGV22bJS8F3FpHNM6S6CTzca8ADVNNBy3c",
  "key15": "5aKc3hMMh2JzZmyAYhCTo8TF9kcNBrZzv7AiB5hGEKkNUBDcT93RrVnTdAkV7WLtMdBYcLUf9kofbjth76K2VC3y",
  "key16": "3bjeTNsHw2p5CxtwKK6nqRiu4sTiFnZssbih3m6c1f3J2e8fXQWAUQv87fLL9kBBM2CAznUN86T67iBSnfLRRBgC",
  "key17": "rtML4homkwhjZ6un1kDvgfsrfG2AvyghtT6kmDZJBtojT7U9GVHg7kSQpGnyjzmF3bduLJ1XbQuzzVWEW3DUSaV",
  "key18": "4xpYNi1hhYJA6EbsL31bGvaqo8fkiiKn1uGNe5VGPCCi8waX9SwA31oKGbaJXjH5mAvzB8oXJYWNmaRBWsi7VpdC",
  "key19": "rTKmmtHXG4Z3ke53so5ETPAfFYVnSJVUdA1qbKDxcGdVF4uJoznrd4STTEjEkJfmJL3LKXiPFaGKBzp5GHpM8q6",
  "key20": "2bEcZ4qRJb4qYBftvqVSsbYWCGoXPKmvcScUps1qCvXJNVP1TPNBAmrv41PkdacSHFdtN84Gw6sb91WZJRgFznBv",
  "key21": "21DDp6DP2btbZ9f14WXLtocB8JA8xmXuPQNqTNjTHohSxfxufrD4mZAmPjuobiZNQEXbUGjYw8rrhtPSaRnDfuMW",
  "key22": "51LdAzJNaBXLMM62azZ48oV6YPfn9FkKroMimhaMhg2t6XJytkWzC8LefryKSww5t8yGyxaVdEeUPFFt25F8FHSe",
  "key23": "YLdvRXEEU2XtfXGAkZkBQYxMVbi2WqYoDq8Xb2ZYxePBS1N3BfuqyLzGRmME3cbrnDAiZCAoBsDbuTqEsE4s4yy",
  "key24": "gY3ETw2VC5vcF5aFhr1feVFYHsUfecLqajmGEgBqSRNcNG5QoUYUpRCWEHRDkLjQJV3oQ3bxgEonErjvZYvgojN",
  "key25": "4sWhTdFyhBfLtia4NygToNuvAqHcjz8AKkEidCuNpEDQHeFxM7FaRSYUxYaFsutfX9PLZnZr6vFbK7vtuCLB1emi",
  "key26": "4wRVgw4qgv1cCdPavsG7ZtbVhMfwut1aKGSaWQfX4kKQKMj9YfNfgHqLqcez2Jey71YG3gyPtnvqKMvens3nEMjV",
  "key27": "V5R5QXcuXMkzPH4de2EiqGaaqtW22gQ66YvabXQDPanieZCuy63mais96HWDsSHNWPtcPiQsJWT9dvCLaVcSku4",
  "key28": "4qz1GzkPhLxVXjHCufaoUPnK4XCMJ51uwK3bbgKGoiJ8mWDQkePwcTNUQxu6WhXKZ84uSd1NWetv1ynGH2q8pTTS",
  "key29": "ndAwL1UqDv1kJ9KoBSHRkgZ5n1Rqtf6dsMct9vivNksP7hRQwCEXP7oVJTRaPWsTgV1Sdsy8mwdxEGf5WFvtq3k"
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
