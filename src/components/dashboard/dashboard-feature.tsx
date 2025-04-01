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
    "3ctA3f2gtcTuWvZExSE9MfBkgZZSBQiqDQAKdCxEvyHjEp3CY2i11gerTRmHHsQ6ZGvWTvU1ZcL5911PZsYA9ThY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a31NNWZWAZRKprdY3peZNqd3qRFiRa1cUurWTr1ALQQFRFjwKTVME8qANKYkHW4FBnDkFff14gcaMu7VGCTu4bN",
  "key1": "2qwsg7J3hHro1HmSVCDD3MsFzhryBGNYkb2LjwFY8iiFqaWTZgAh9vSffaAa7v3Usa8oqJz36bsujyTzx2u8MPeF",
  "key2": "5idqnT9CcG1KJCTfGZt4nweqbYWULv3YLJAQoC9UgBR9AYnTQHzRW2yo9ycKT96wzQtoy3xSe2iSfEMaGMTdTaNc",
  "key3": "3gHXnBs5uZQj6nn8YjTSs4RCnQgABdGkx15qBqXfXyLhuerhvnupffo7rvnw3Z8iaxeXRyn2X9f1cric7dESFKJ4",
  "key4": "2ZwL8w3VwnjoLMCCjP8MRoWawtemYSQV3BEDnRe7LEo3BHRjeG4vrjvnh5X8cJkMVqYE7qJuWvSC64fQFcPz6HmM",
  "key5": "3JVTgZgtFAMPK6vsSqyASqJSoVyr6TbCp2CYTLnyL8aPAasUDVrb2gxdREh85BkgindZNmQmEUPAZ3nrjNsmkhzj",
  "key6": "5JEnnvtTa51oVjCz7LRZuU7fK4YPwpATBtApLsGDug781W2HWqbiikTQcPb5yKxMppza6E4h32EY2nni3tjHqigQ",
  "key7": "5rNNYA4td6R9C1Ak6JrQQTsGUyfkAb5dV9sD8nAa1gVXUrZi89hBMubnb1swbDcmddKMiuzx2kWqmHTWpeYxujML",
  "key8": "2VZLNCHBNUKdtuhxPoQLX6Ctq1rR4ptvXhcSwdba4kPdq2dS7p7RzAS1XSVDCmd3vVRiUBFCnTLArjahQbwnWrB7",
  "key9": "HMnLBgKvZ2XuW5T5EGyv2bRzfxeYDppDEMw6GgA2ijZkRw5JLd7vdiMSjXfGEYQxajkBE3aJ4G2ucAzRL7SKMYm",
  "key10": "67JedPa86UwoQiNsCdFpBox4ZZk9smfKYaiSijAC29cLHEyUqG1W4gHL7kehuke94rvVDHPZmteHCciZFMqTPNyk",
  "key11": "4ZystGG2dcJuCoqQ8YWWBeL1eD5bejYYY3cX6m9S3g4jswheNZv3V9m6LSEZ8p7wQWafWA7WowFUm4eUxNepbTdv",
  "key12": "2wyhUmvuMwv7wprofWAD3nhEh6QFocBityubbr6QjLCcT5ci79UBCNjPhRn6GN5B655WZRwS9bDShywSGHsN3gXy",
  "key13": "42aihxJJAMscs6JQJgG4tD5VVwtYnPs3M9S24xUNbJ9VJhJYKWu639SPQ32BjNKtHLFR1xH5BTQZK9nZYSfUipKn",
  "key14": "22WQYtcqQcNikmdB8nV9bfm4mViPQiu6U1cFpqk6M9Qa2qxEHPZiecuQ7jUGYpf5cLk8qehiAJKf82yEioj6wXmV",
  "key15": "5WGVPe1AwjUKEg4NymkFGFoyHNy3YoxRGwvcfeutPzwGPJqRyM4adT92wChMo3G3S9SeNyFKXCJrg7fVNRCkQZkP",
  "key16": "2y1VvoP7woRCLttTaUogoA9HYe5xi4MHgh8T7SNDpuqrDMmEcK1LuBauddhzw7uAckHEouc79MSPaNky6ZYyeKnN",
  "key17": "49BvBRu4aRYdCp34Hk9NrJaUwuy8wPquDBPG1hqUorrA5FhTWxtUGA8VdQht3Uq5JCyY7zBdxuX35qRXYRj1dw21",
  "key18": "4CuWVXST3LANNRkSpFrGKNimS4wPMaR6D4NNRBfVXVA1YoJ3Rx16bk2c32A8J4NhuepKrY7W2b95ZtNuQ39rm1Z6",
  "key19": "5TXcneJxRX9XaRjwnkrev1qVPQwry1eGuTY2JZMDn7gbUf7FqGQXuHq7xrzfgw1R3sDxNr5YpGJxcrPEGDEj71sJ",
  "key20": "3dHf11EhMFrW7DcMJmfSWLzB2bo6cHP3MCzGnqrfgFCzYrcUPFrC28ayQ7c3GmPTXw9Gia1Q2aZ8qcWQFNhiEtNe",
  "key21": "56RiKuHgGqHwxoRD7wZriaG8aPLYTRE6Bh4nv27ssgSpyxMoH2q6wvQArDq6BBvzB7B7TfDRuNAP3KNKMkMx887y",
  "key22": "5Gv5oLxTie7SwJ7E6G84wuAzZjPm2gNEbC32GULA26dqj3MXbyLp87sk4kidTv86EDbg3HtFZMDMybDvcgErSkCC",
  "key23": "53eCLcMgJnykjECWz4WS2x2gSFkU1mnxHtaYiEVrYqztYoerAvKtLUBhKMEGYkD2cxMdoJfHv1MPNzw6aw6JjMbb",
  "key24": "5bTUMwuG69xr81uFCz86e1c2ztjM86y25SvfF33TerGXjyxZyYgFqyrmZTXFfGvzhsDYAQ7FvV76ypD3pEvQ8XTy",
  "key25": "5KECwFg2c776owfp7NwRNyJkEAEEBoF4AGw1KU3SEXA3M1HEmVK1tYErhCQBakcQJsBfmnhuyrtg3uwt9UczXAK3",
  "key26": "2VFEmUPS732GszmtCiVV19j42PFnkSTdPFwTNva9hKKKLd9MhKbDQySnSMgi7pd9VbSZiE1Qo4VN9D4yGGFiygUq",
  "key27": "3QSgurKWwJeqAkC36qW5gC1DkurvA7fr35g2TKTxPNBaPyZnpeyWZmd8Qh2p3ssD7hjFKfrPNc2CBCemU3FSym4k",
  "key28": "3rqKo4yW6xM2YjwxDJ8SUZTWU5sHtC7zsmhNjicyqZmQ2X3rDh4D9Mr9PotmfP8jhCqsZZ6KMRM2m6nQPMdxrMko",
  "key29": "5UTSvx8eGTnSMXdTv1FUAK3j1d1kmHiYDWSkkD4CxVdNpNiJ2MtTwUuuxT6yj1yQ72th9tV9JttJx4u9SRmdQBS5",
  "key30": "5C2m32honzTNmzEob6JPBBWJVhwKmC7asASyzu7KywcknPGDQXFHS1H4UczzT5BXoyVWygVArQfyEGMRYCCJhNf8",
  "key31": "2FUfhK9qjXCCkKWMtWoFrFLrJ2LXGNKZzbKnHucjwrpgNtPK6FcRcNvyWmUUPWn4AftsEMnMEZM4QLxmyYJ3mVH7",
  "key32": "3h6TfyoXKpUBoJoNtZsaNGGhou83R8dhQrTkiftNmQaKLQyWHNoGdSDT7Cq4Z4vwrtqNFM76LSFQoksLJ5tBF42m",
  "key33": "4X72QbHjNp1kQnWoK41bnQXUvcuH3y9n629xhDgV6yPiHKWXkobfguPgvy3dJYfvm9sKBkRvLyRm49p1aD8v1yz8",
  "key34": "33Dn1F3J6hsVz1NQLgW7p85ev4F5sCGHBYbi5vDRk1JCu2nkLZbs9tNdhwz86wBaAeE4KtbXc7vEEzGy9CCTX4Tr",
  "key35": "2ta2Wyw1NEK6WuBph8AtrbtjTxXijbNtseqj7yNETGm4ZHdYsfc72yQ9JerYbCnCgpjJjDkrEvBMmSBppCifQWEN",
  "key36": "3SgeyS4zVwD6sZuTFNyWjW6nX8M1WPc27hxKeM91TcbKQrEp8pQSNjNehJf3Cx1PbK4xxqWhwH2sJeFsVxTQDAcc"
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
