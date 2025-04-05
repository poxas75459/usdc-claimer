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
    "5ZCbbpoWtKxehyFXjhV17f48x5FDJNgW9RixmtsRVgjVYyJmNgPMPHeT7h5HAQW9QoSHHQhgmskwDvNvPn18wUuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNArbY4Kws61qYF8ryAvgRwfvntjJsqqTCyvFaZJFb5Y6SyPrZzABixcnaXoJQu7SsXw5SmWAdrg3yhSAosoZDY",
  "key1": "4rGGPT4QivDLioc5CwgyeYQMx1VG97w9M7hHrxc8s5NgGPZZzjHDfBFyPYrVK8bftnheCKwsdmQ3hzYruYoksrgm",
  "key2": "5SSCrL2UrRYF6VCEWH4sf7YkjW5DkkjCdFretLSoSGYWQkzA4Xji3uUVv9HLM88EhavX1Y8MQgVFBCUQwtA3gxNu",
  "key3": "57F1fzNyot1WqVMNqPVDhUWfmrTPZ8D3JvSU7YtProQvKwgwugjPRLYUr8AXPn4rNEbPfK32A5Hk1GgdjX7VmRkp",
  "key4": "4kJM5pTxTZqemWWsFYAkZowe8tw4KU8fjWfE9XpCi94xNm3sH63BpvJiCSdChRTr3cU7eu3W2x6vGLVLJFWky6E4",
  "key5": "47rGPhJk8KYHBg6Da1iF3jeefp46Pzv1xc6ezDLuyNy4vCUEceVtQvuw7nUDBH5RKPvTt4FSB8Qu1LHEnbjkJd7b",
  "key6": "5V4qQ2PRAgiTpht2rR28XXA3H5vCpUM6QMc5zq1a3v3bLC2SpY7JLsUowDTg23iEQiUj6rRC6Zo1muboJcFUB89R",
  "key7": "2ffokH7XLxRdCBoqtrZDigwqscix5KF8aYazfoiVubtTnPfv6GdsQsM1RrYQXkVq6xfNFWoZduhXb991YWSNRz2e",
  "key8": "3ZaGc3ZYjV2JDZftFcKCWyDuC49moQ5om2ewhC1hzs9ApZZt1FdoSoHkH3bfeAkKHPDLhqHB7VpWdMz5jfwHRbhe",
  "key9": "5WgTasxxrtSRe9q7CbiJ2AVegYPxanw7EQoAYSrG2SW65JPJqfuqDcKduPupBdxAD1sXBQQJkWNBxtsur3FWNMY3",
  "key10": "3y277EFkw2g7jrwTPV7Zqkzt6YK5b8LkpMysqrGb5dK74zpYHX67P9HdLoqjNbTcTWhrDU6NTkzUcbzKLsW8w9Y2",
  "key11": "3g7Y71t4hPWFkT6fPvJ2gnyjS39hrBQPF2nnLHjXd6kUHn4KSmp7ZsqeoTKdjaxpqCZBYWoXVMauAP1AxuFJT4gW",
  "key12": "xJdBrTXVz53koBWVEjgJJLakkSV2VW9PihmNABUinCACKwgPiZwNqywvxbdKuZxgeA5n5odsBKExpp2855P4MT4",
  "key13": "4ikGF82E1ff2Ayi4qfkS4XdpVuSa1LofdVsvw8LBB9HEha7Hv4nYH586xNfHRXDLJ2or6AGWAk2PfE21xnkzM3N9",
  "key14": "5w1LxhUEuJfa5zG71SgZd6eDkLNhU4J6BARN1DB3A1tt7jUMN79mNez3MaBQaULBHSgSTzeQzqdWxVih7kr1Xsdm",
  "key15": "4LjrRCxtH2RsJVJDC6ui6E19f6UfDQAx3SUc4i6MTRrdFovtSZNXoGPWkciJHN6CWGw24o4RBvNuamhgRVr5DU9H",
  "key16": "5TC7X3chzKi4UcmYK4qPn83gg5jgMEENCxXEKTxyk3P6pWgjXTwDyebnQcd7EMnUMXa5ZbmJkVM2fSzWmeES8JwY",
  "key17": "2UB2mqfAuiECx22dcyfU3WKg5tnWQEHg5W7ib9nEyrE76MXPQMQ7tGBEJKHjZf45uNdfeV74ThDPfxc6uYfJFHKb",
  "key18": "3Gb5HGRngmoij6RzDQLWax79f1HKjZrjzPR1vET8CqGLe7jwZav1RGmzwtMUE1PGYasZPtkgjsG7z7GE5Wk1nTcZ",
  "key19": "4cGuSvAR6XmwvhDNMNhHuTwU3vaGPfEbfoFpdpmCp6AJ4AWUoZ8uJphQegx6AcSLnJDcewtRWQmVyTgNtMBWH6MC",
  "key20": "3gB5n1jKLmknfvLVcZCePrZZABMFgnqDuhCZKqvMfDiJxB2CCutMmosyr9UrMqjvT6hCjFEqfGvaAqLdDz7AbaU6",
  "key21": "4TeuTbcrQkJHf7moXcLqrmisg4Z6pdeX5qav2d7hh6cRjH5LvDKGAAGske12yeaW3LWMiKBwDtwEQbiNzhU7a3mb",
  "key22": "5enpWPVeSBi7ENRyAgcMAZQxvHJzD29xxD6vdXTz81tzCNNogoyLrMBbR41Pu5tLcTxK6rXCqFsYJYpnf941VVGH",
  "key23": "433PsqHq3avQaKWo6e3mngYna1gqmPRscigFYzzCxkysnFr85oGJpczPoTg7evrYU1PfmDePWxgn4VJnHEZj3rW3",
  "key24": "43obBTptiSysdcrFrkbmaRL8kM2vdv8mBpLs2FNndwA3q9eXZ1YBKpMimhDFpLJzRssnHMujpzwrycgLHszKDmi1",
  "key25": "5Fea91ufijvLq5T36QG6HXZUccKbnToTHiHxGqtCubMmHwe9M1BszgNU11JTn2MmuzEHbcFoYL5FhQFh7nnEkbjF",
  "key26": "3dz2SjvzVc73wcRfxPt2U4ucowamS49XDmUudEpukoL34wJqV7ayGLsfiNR66wdsWZPQoQzFS6ChMGqYAkewiiEJ",
  "key27": "2cyVex8c4SSwrBmHJToCtqDGUFdZycJDeF3zi2u9VyVSDK52QoqbmcWoVcM4DKkizGaLv2BV4DQVbyqiRrd758ds"
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
