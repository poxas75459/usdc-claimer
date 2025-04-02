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
    "4i5BAknWVGmVJjhhJ5siEPQFUtvauNnMpNhKG1CQkt8Xyp7aRHuoan54MsdK8KqoE2kvCWeHiW7upw7fX8YgY88y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4dkjXHXU9Ly7kY3Dw6MaNPpjasH2rBy57o34jJ4V5hPzBJyXTSCGoZ5gKJjoQUDHyKSFMgQPpVnuMnPj5yek26",
  "key1": "2Cb2Ast4epipfHLK3j7JkEzmw5yWVe1jNgJf82MMUxHK3dKsCPvyKDoqX5KU9JsjEqFfduDf45bces7fqHE2N8JY",
  "key2": "4G2PjLbzcFZz5bYMr2UaWHNauQrRuviWwwnd7P71opBBZwC86FJ4HbKR3qfHS6yAHWeNFTGc327H7DEKU1qZkAba",
  "key3": "gFERmoxPnWJrSQsCVmF1D1EXDfmVFWEnFCf5koeVKeunM79d2U21D5kXYfUEDPf2FW2a2Vaf9Fd1ozcAinpayca",
  "key4": "4PbpsQeFWXhMpjJeeFyEGPYyhG6wEj6veP6vo7SSVCuNbatyTyZTK1y6u8t14coFiaXmjRHPXAKwrXQnXk4Lyc5Z",
  "key5": "W1CgC9UcXM9awWaCxQLhd4TwujCFCDRAzkUe9ucwA85kUsfPeSh91sDEz1jL5bwq5VRJRvffYsKpPJLUfSE6FyA",
  "key6": "5zZzZ4nHXxQZHv1dcmrcWiPQQoZtYtxwCCGDcCuptMnMj5DHA1hn23NcBvSxE6VVfPK5huSt97JL8fakTBa4C75N",
  "key7": "31sxizoZd9RxPULSfHzrWCmnXwUvFtWnQmW1eq7GQr3hB4qBEjsqr5Co12SV7LbLmG7cKZg9xTeDNAjYtxZDPddt",
  "key8": "2bDy9RFN7ccFNJ4DTFuXB1L6fmwwD4qZMGmbikN4CWYRZstFTAzy2y8FyMX5uBpDGuWxPGF6nsiEgssFvgU3n3c2",
  "key9": "5EBDZe1ipHdt1CSMcPCZDQN9MwCMuktuzFEcdvH5M5qWPCYCix4fMZcdPLw8mPv2VTd3Ue1nyrxo4pT2j8g8Maqh",
  "key10": "2dbhPuaZbTGrxQkxA8Lk1hZZ97TLbdzMt2twTWaDLMrBedc4EnBRAumscTEkHcYWPHNymXyPxnonrTWq6VCYbey9",
  "key11": "3iS2U49aT8RrohGm4LkKrtsVgf8jxFyKGcmv9tLuNp6TeGw34zbpg3UntZqpjnns4xB8iak1U3ZDPP243DMwsP59",
  "key12": "5csJDM83Adrgn8ggmmy6NdoZMsw1QxbTfF7ke4ffqmmeHy5i6RKVX2QXbjdjJgwsviP6dApxVcr1Anaxd2oUT2NV",
  "key13": "2JMQY8M8VmLfuVHZMUsEayRRYNDt911sbZbcai5Wf8uCynsHkZBWvJfAFBUomiE8T7xskWQ8GmYBs36prpUoR73j",
  "key14": "5a83Hv2eqjjBgc9jdf4WkZvXGYFM5eAkLLSfknAfpwSjbZBpBuWf4MkDtMMw1FuvQtzJWPipZ8JRmuvhxYJYtNH2",
  "key15": "4eBSnmLqUTFaHwyeuaSiPLMkpbZKXRaBdu62gCtwMLvdUicumvEVnscWLJXsdccXesbJwfcp8AYz1Gx3wS1RUyth",
  "key16": "4UykaxhXR5gSeqXHjH1Ng2BEzxuBntbStEZHvJMSM8omjoY3eecSHSoasggbjxXcpJfTtG3FvNgymk7BrXjFi3hQ",
  "key17": "3kvCn1JE2oHvWM9oWnLd1B4bjpfPi9PoPZACqGcWVyemZ4dZ5LGnvvEYeEUPNfLccRoNTKQVYLAZhZkWafibp7fQ",
  "key18": "63iCNagHrF6nL3NxYFxe19KPdZJA9iW62UdL2wUkqQ85CDqrted7SaG4i6Jd5Gk9iR81K5surmzZsRvP3Sidi5wc",
  "key19": "5m4VbMa8obFzcBJbJJFJ3iYexUrsguXKtj8QkqBiTFHZ2Ce4AD7E5cyPe8i4L5afw5bJew1D62SYjHjccpiTMveE",
  "key20": "2TurLfVUkAJVXDoJMrACBPsbSq4vmp7wuAZNUQ1wUsBk6nBiDpxa8DMtGhHyxFkz6N1ZTzm5u7RaW3Aze8K38zSM",
  "key21": "XjppYzyqnLw3eBqexD7a75nWYkL6mkKsaDeyiQV52Lfk373BeGm1y5TDY4ij9cDJAQ8L6MYRaiRfdu9rqYWQeRb",
  "key22": "2FJKqz2nHnEuwsdy8w4cqp8nCnT14ENYkXexQV2kTDE1DuHDFTGLKu4aM96pbBxyDvRGcgNxkTgXnK7nbm5dKVZX",
  "key23": "568dejEZVUHNLsbtUSAHo7zqytQwXeVSFNX4u1XodRSLP9PAb5DuYSs1wBkwkBkk11mC51eGUYpGK642ro3tbho9",
  "key24": "no6EHPxpptP8kAEZ2eiXxK9umjuUYzfrVdcKc2ETe3Lptrf3aDaYAsDvuFmHngq58RSqnkcjUSfRj5N7c951Vbh",
  "key25": "21jRnNbcM7ufS4SZwjVUpu74n5faksBQHFfVE9gujYrxZgqb8prNNVGgUtssWizk14dCJ2RnCkKopfCL126TTGQU",
  "key26": "3jxtZHAcpyB1MGphPQkoHTxuYPUcpgkZAWf9n7347mWzPi8vqNVRDWM8nAmULaFCVRsCxsmoSCJ7b4CLqzWimFyd",
  "key27": "4TZtuWbDUVvxSGGDTgCK6tuMmY3EMLvCTWmBFKpHH3ADSzNRnddB2JD1MzrdARJhSy1yFeo7PMtyui1xXM4Aggi5",
  "key28": "5De55x5wHyB5XEYtC7cN7oDwQcEMGyv8du5emaNCvYc85UC5GciY6MpQKwk9z1gf8V8LFjqtpNaErY62JhAzEF5C",
  "key29": "3itXZqpp9g7Pmt4D6BXyZXRXS9rNPktsiGznYVs82vUBdFnVgRosXp8nMQS7KU3NrvFVSV8zc1H3nQYtCtYwnLwJ",
  "key30": "89dt5bHrKRiSgHntiYHc5A1FxPrjuMFQsX7EwJe3XTT5KgQdWVU4BSUZHLg9HoyWAGu8gpjyiwBxBsuAVYCMzwH",
  "key31": "5jtrntKgoJ6d2woboNp9VQmTZxeNn1EwNPWUcfneHFCcG3V22AhybpTUHLb6HR1gADi1GQ7RzEpm8tpfFyENbDrc",
  "key32": "28ouPtHgFRvDf1Zgo9GsJ44NADXBmHvwmJXtXdeuoqCBBnDsMkfG46aB3joQvaSFc5NWuQArPJrH9fxUja1KCJin",
  "key33": "2KWLtjm4YbyzUq3PJdfVcihRBMdmvVtZey2UN97MBbRVGZsCP9baYTq1J9XEjSMrWo41PZvSdq5dBm3rRZxJX64K",
  "key34": "4S6yCz6FouUzLKeiTQRHsd7oNNbMWVwXzppSs36vHQEKimTM3hXXodgJwQhZbTmXgjtdNJAjHJNzs1mn3KT1EFHj",
  "key35": "4MgggNMyVRSEgtbKBpt9xsDqhp3Zfpk2UafkhMdDHBrqEMwhsDcwgdDLQjiKuwhw7TQ1gJoihJ4uEFCSWBxw79HE",
  "key36": "2uB4tkS8HpvLQKUFq11Js33NrxzvvFpvGoU4ouWxVbrCCgoEFpHRYA14deU9xF5cqyHRApem3nAQRtiFRs5oD9Hh",
  "key37": "22ej3JSg8fJ2kb3MSxThkPYrwvj9xeMjyErmLqq6BeWEL8uumzdQHATwPTLE1EQxVks7GH4iGV7Dun1CbVbZPi4t",
  "key38": "2D9xtS9j38Bhu1EKZ35eYAPRmzyj5Nd7eQGYueDjAdDt9rHBtUDRLcLrwfFNrAkb6swirtjPoyrJn6QmNnuWH7Hf",
  "key39": "5aRdnkJ1TTEw8ndqzP8PSswsjvbaSuzQ33ZSTkHFV58PCpij62xD3tw98EfygVozfKU4z7XK1sTLvGzBJTWxfKbd",
  "key40": "4FMto37TFAfcdjvJQ1LEWDjBWXhuGkxxHbjg5pR3fAoiEpX5MervWJJyFxkoAWRBqpbdnDAQtKeAD7dZ1NvQr5Ah"
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
