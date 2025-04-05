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
    "4wmteuEek3Mr8WueHVdPZL5EJrFk8jV4QRPhsWSomhd3BgHRpVbwnoFyGMgZPtTa7gTc3GFZ1GPkrzXhvPtbBPMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWuuAfiPBgDx4kVJBgege8fEKMAJ4z5xGGUnq41YXEakyVGDXWnckpu21HnjMAJTy8ucifo9rehjasehTu45ttf",
  "key1": "22cmtjvRtzYzyyPmesqgJpKefiToKGL73BUW5T1ed6Rt379pWLbEJjBHnXQYCuBvNUkVCx7T8E48dwXJfoeDki23",
  "key2": "5HnmtxqQ832Kfkuj4nWqWBvVsv5urXSGiyDUHYmhrt7DahP224tddPbzARTi63mGrK7Lwk5GKZTDyjgEhRePHx3m",
  "key3": "5HS6FqqPR3qh6D18DTpAMV5RrgUfGE2WpcMoPEtELSawbFQguU5TnJC2PaTqc9AXDunYXmQo3BTyf1mgX2yXzBPV",
  "key4": "3rR64VFaM11J7QCYaujNUKxm5zRRkYtq1nreuLbPbKEu3VcMvtPFDgJvJL9a6AE6B81fSrBBcHQAV6nWigB4otKx",
  "key5": "2pRq1VcgkGV1sFcafyasnNVP4uFE6uq27dhzowQeAVUDiSuJkcB87P8EVQdnja3z13srycwt3yi4dgJ7gW2pZoEA",
  "key6": "2bFnDkUtnJKsZohCUDvdz9413RQ3yBkE55wfcoN9Jq3TKFA6eHkMC4ikUhL6fDtHAbjH9LpuQBsPXQ3xUr7MbvoM",
  "key7": "4NmhosH7GE26M6TgjXweKNV4CPkn2KwDAbEyD7nCgatPiGjMPqVVinqvULoG51EV8AUmXEWR8dfh12ShypRSb4WN",
  "key8": "4krWSSmZgJBKsatWtvgvHW3JmfPhhKdByrgQ2JkKhASAxHBKmxLGTrjSFuNV2gRffs1zuJLvr5jSc1j1E7839Gap",
  "key9": "5CRAEj4owUhXFHJPo1oSq5bVj967svNCQQfu2TbtqyNVimtXqfH1Dxnd9Gun4rLT3CcPRMwtCAaxmHxf2nrPerU9",
  "key10": "5YmStLqdyPUvUhf9TR5w54GDrATSoftCkEjAXNCNgZQP9gWzi87meek2co8hnHixDnowqCrHDDoTxbRzCAHWVMCz",
  "key11": "5HG5KugEjiiDnGLXDex4e78iSScDeghtBoPGxZ24WJzNDz7Ab76n3KHryt5P82hFZR82yL7xgUK6VzpZbp5mqQcP",
  "key12": "41Ca6ZqodxDydPCDhYpUu2KGCQhdmAusT6qUNaqYGQ6rTCn9YXuqq22dR4N5a4KLTKBbgZrXQ7yeSwMPPg5Cnhod",
  "key13": "3DuKyq67T5qLeG2eSZHZutd6x8sXaXTttrEWAvBkqXyE6ykKfp1XBgyAQSaoD74oabfAGKigwRJUsHbpci3RGoU9",
  "key14": "5AfDucHY8Qf4uEAyBT6w84BMzn6iqbo8FNuE2mQdxLZjpcaso477GH5DywXMX72DPZAETsHDbgJTzzmimQHUCZUR",
  "key15": "2xVkGgfp1Fixxk2Lv2z7xNNZ4igq3i6r28vwGrHPdud1V2z6qjRxVXCeLYDvJxrACY9cm6tPLWeHy1KwQr4KdU7s",
  "key16": "5zj1pSCdirEdVJCWqendBS2AH4Dk4Ha1otnLyK7mgTeBoNB751cqiYVwEktUAxCxKSEPR3MJMTn1i3VLxraAZWj4",
  "key17": "3Q3nGHAgZfBuZ4xCJKygsqeavW7Y2mLpLsYXXrbEz4Sq9fPxAfNS55fiwyVjb9LQuMLXsjaBtHiopfxDrBeL5dKg",
  "key18": "q9gPJ5iRWmrtJ1KoWJxmYhE5MWbPnAziz58RcJv8CrQtZfUb9jrgC9nwYwtdHA6zGF1s8r6KAypCH8H1NiX6LBQ",
  "key19": "59FJMQsCMHTpBgwPWE6pQWhEbJ7w429ASuHe4z9grHgnDU4jrLkcNJWhKAcoiUvdC4KejxojqsEDF8S1aNweYGJ7",
  "key20": "4pi1VV9J3TsYKjW2yPju2aTb7nYSz2TcBp9PjLA9pmm5V7pic1kQK5oXZn93ZF86TSphjh2dJ1H6DJoLYerqaFr7",
  "key21": "2LYcmS7P7u8HsfWaUTmZbxTEq5SQ5ciosmPLR5obkbFRk2wSyHLJhXC8utzJEuZA5BVAui1gG9K9imr5ALnXmZFB",
  "key22": "yoPeGLSeHzvqr97WyzJHeogv9D9zYJbVCfK2Rsf4oxU2afzNGHHatvgadHumwEHUaSPDbYr9MexD7UYmxQEcqd7",
  "key23": "3WJtPJfpvVAW78LCAevkjRx8M2wfRFv6ZAqo5HA3RLToTEfTes5qAVkAJMXnx4P5m578VCZCa2gZTmSLNtMoNCQq",
  "key24": "4FBPmyk19mbhMXwziB4LimpzTzttRNfs8HaPe4i75aBjZctwW7Tp4UCngtuTG2LGAunaS65sYMbXkq12UbC4C4oB"
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
