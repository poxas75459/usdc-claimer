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
    "4Ygfre5qWxQ51c8ZACmS6yKK4TNh28UbA3BdwxVDzM7cxNbbjT8bWM3gRNEejKfqDeyKT9LQnwMzpS99Tv41nhaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RshSxt854vgTanXQqB9dcRwJc6hCYtkkQsip4iXQcZ1ajz1bXS3Jf8Th3CTRX9v91jH2UBTSywJyPjQ9ew58hJ3",
  "key1": "5QxadTTXqH34RBDSAdtb7ddT2xHawrNDuHEV7FudXaqhjxi2ajiv9xjj1t4nnjVYxZVz7mvPA7LEwQGeKabyUu2C",
  "key2": "5NrnUgx2ZLfmYK5UAX7PEUTb6wWtTmMYPmrpongtDtpbu1vWTsothXo16kMjuJFVUSLDC2RM8kDpKoNpTkeuFQ1x",
  "key3": "4EM1G77WXsLm5EY7W23eDRwtXNS7y8oyxQxs9mvNnEnPfiZqr2c7txMMoL5zkRj7DeYbQCQcoqUNjAbSQYEUHh3E",
  "key4": "2NA8VNasaQ58qm7njn6NfLb4Qtdpr7yyBvd8jbiD8LwUMbvMtzXUF7G8pHfF2ZeLNQmKbxdykMTx3UDVT4JwFWYK",
  "key5": "2MpikvAEsB6YWaYdCHU6sCsawVCRV9vegCDgpSkeqveR8JA5MzvMC9kKpUoNEGGc1Le5XJfY6uKMzf4zyV8ZJH14",
  "key6": "5NdSynNB3vFMtKtD1cG1xpKAFRFk4TgiGUJjj67GHi4ZBTJVb86zwdHADWMJjWcG4fqc9vxAQsxBV5XJBPw1iRm",
  "key7": "sF7ZzEouAs8sWjoHZDzEvmv6JsoBRYjULK4SxPGzbWkuneFJaXazBMQGNM8VwFJGzwW43VNarjj8HSB3uvEeWWS",
  "key8": "3bmrbo1u7bxwYhWyqfgKtoxNwpzfGdDExvaCDuqjnsKUfN3xN2yv3z9Qo6kr7AhVkqCf36mRAskLoShqhynERaVX",
  "key9": "2cHzAym1NGGXiDdmXucSatEfLL4V5MNf98n2GKJrRUzmZSCjAzAR2KECvQqinj79LhnHDafHkP7CBXLBaAq6kk4p",
  "key10": "HpbHncEhcLwuCE7z2Ruu3vbtGagBgzApdfNvhByNx6WUWUGgxyNHuwWUQHWD8D624TWQuQhdZRyD8geW2okyXLU",
  "key11": "2fxZ1HzRRjyJoJcL8KHCGywVbNRReqPnkKJhywLt47GZw9aF26BiCt6aqmvkT8K97GJvfjsLxaBpAFEs7L28G35H",
  "key12": "5gEo9vZ6g4PomtstM5hwVtKiEHVN1FV4FZdcgCWEPKSNS5dQHYs2syWssTQ8yZu89HfGvBYBM8LtMwkZNTfug5A2",
  "key13": "QeHCUTEqbBfnriTzZWF78kvLyg27o2n5KXwtqAQKYkF1qg6EhUDFtjYV2F3pwRGm9FAwzjRy1agZHdabTNyT2i3",
  "key14": "3BZj4NfjbfXvn7giU8jQv2UAauT4BK25UPGQMUyq9tqmgNtRMau3ZZPjoWnyHcRvDVYB6Suv9hGbdNwrHwaB7qDi",
  "key15": "2mLs1zfSGnug9hmBMUA44zE8Mpd8qJCSpkWpyueSy4RngXTt1Wwkf9cnM414eNenTuUr8vTAn9CumvP2E5fRbmr3",
  "key16": "4MNWcsfRGzBSKviKER6PzneJEdR1bsvwdSFXdnaMztGf1B5KEAKFD7A5us94xHgXgDvNi69smoPsDtTBD11pg7uk",
  "key17": "2mbHWcuERGKvRzKZGFdXhp2GiUyUvHzdmatybhJLBMdAzAJR9gqwEGbVC6aVJhoxB4x7cr2ogsYT1y4e9aGDHA51",
  "key18": "LP5ouc5XWB6wKdWsm2LS2CELDVXMqiVg5jf7R2AqR1Mx4dy1dGozH4m5wUA6qFuVXaPupNxNoPuYr9fHfnG7q5d",
  "key19": "5Ks3qVLqQuNjzZFJMKyC5qQF4DNtp8AhmncmgVhEdyAkoqfVmRmHmvTr343F9hsqudbiwQkWpnitWfbXyowfrfJH",
  "key20": "2CJvkTpKRngkM2KSUgwhh4pDVivYirSS8EaMMoXaFg1GSDQLaT4QYFUyjLugcB14CSjUha4oUEh69SqXdVeUWCTM",
  "key21": "eeMygYjrC13wRRPLZUBLjSrfDNRZkJwzk9FbYy4jHMtAHB5rUS6p8Bi1SLbyzbgWF99439Hw9UcLKykEXhzjkFQ",
  "key22": "2NA9RQg52GU4rauFouPCtuoFiEFM7dyxxfUCuxAECELBm9i6Z6R1nXCfNJ89fyUNsqfEmnMsUW3YqtSZJb7ANLkj",
  "key23": "5n9WkdqCPoC3Hy2qVjoqna8bamR9jvdzMoxw4W3GAQ8xMbwaEJqPZrL6HW5WfLr92gm8SEzY7KLArXBEMLn2br4Q",
  "key24": "3VXsmicXhNW7QsBWZcNhnSjDqJcJK8d16RkdGdTAtrYKrgihpNCV9f3kZE4RJfVAyxTZepaapwSn28ezU8xjzxbE",
  "key25": "5MKTGrbKSd1grHSPyo2pCeoHA3ZnqK1DJd81UQ4nNbbiXAQxDgFagZW9Ss1oPttW7r4GesBD6hduggr9QdL3qzes",
  "key26": "54BBGtx1eEQ41vmxVZhbEDcPbZAWQD66oW1rRjxLWSQM2LAZEfV2srESLAKUQ6bz9bwk1s4rnNu9aPQxNPwMrmw",
  "key27": "np49PGUGYRS4pM8x4W9gdX2kDmaxekqKoQPUajZfwaHoN3i5jetr5oYop3RpanQwkcAwJ3xF7U41SwF35A4R4Jz",
  "key28": "4mGu4nUNuVGXPSNnMQqBmUSZZFJnuDmc8Dfs4A8ESfZY9r5YNgVsj6M1Lq4rxLFq9K8q634Hjoasb2dHBpLKKZGn",
  "key29": "5fjbaazM8VMrLo98D7u3XQdttgDitPePmYhYhUTWSTwdZkECm5FnWnFBDpo2X6MzJBowBZWyqwN7L5yujPqmfWsJ",
  "key30": "3sLi2z6r9eQgRSic12jEKmSuqBBGHSqf1LWNJPJetSrCe9VzZ3RdPxu7hmFCMwHT8o8jEAPyFYxgkhmFuGRM7oCz",
  "key31": "224fJ5Hba4Z29yroFWkSES5iStYmFatjyqGJ3MeABLRh3EGfLpL6yvr4kFmtXddHq1s2XWRoyDWBP9aNFDXMvp57",
  "key32": "2E78MEgJpRfUR6LPxBte98V73wuXwoS5eJQdRN5epyL2SgmY2YMoYyuv3jG6pHNBcmCDNafPUYkx9JDwHYL3kd2X",
  "key33": "3EZBR7cUZpPTQaoNUttBfBV1xPSqeEWBxCBeaF8V5VdTyEUoUqG8LGUXZhT4UTy84LtkAWqnZi8bVa7Vanniei9d"
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
