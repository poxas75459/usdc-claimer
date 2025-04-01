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
    "3zPC3wUn88DhDhUQsxAsbyL2gRBv4dTn5NG6HZnKurFSmmQyRLP8B6bAKW3SVHhF11Q1vrqJjzRTzRPYjTYW9E3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrnatdYy1PzRrLZo4xFkefcQyPc5ofNMgUD3B3yu76qQ8x4xJTU8fZNMFae9SRuuGvEw9gz3CpGYg1CYN5mb2xn",
  "key1": "4gYFtHSwH9a9TrNUiCj1RmVZKcYUMBiCZ45CwjmfyZYsv2hzNiUBZEzWyuyfUWdjit9p9rAyrRxWxjVvT2XzWkmB",
  "key2": "2vMGQFQ63CCDD4YFYDycHYJfBdYh5aWP2HtTeUJz9oJaakYykhgsPJwYQnDCCKn5AHVvsRCR1LPn9b2R75Jo7zEL",
  "key3": "SYva1Uy5WSArwjaeLbkRcp4xE1LQbSjvaFnuLVEvFD9TbciLgkXjLcTgjuRcTgZMbZsMMUfSDUuPKxWQgCqZHcG",
  "key4": "34Y9uhtX1XbHZxbjEeH8kfeAqzLMvBjNQcfeCHmHpYrERVC9od96yjJmoxzzNZMYkkVFCqg7BvTLD9Q6s61VLKu1",
  "key5": "V1NNoKGwRLd585Z6RBbsaZ1HFbjFS3AyVbfXxySKxo4sB3xq52eYyHD15ShKWKnJfYERN3HdePxduntGCTZAHRz",
  "key6": "3jy2NVuqKEFCowB2A9RA3eFYntNrz5dphXZwKcTAFGRZMWZRmKTohUAVqrw7QZPgHfCqne8L2pkYFfg2LUccNAuA",
  "key7": "5ubEiBQqa5HHye8YgRCfCo8jDPXrwWZmoPsdwEe9XUGk8vDn8ACGcH9BLnaxQkVhGefacrtyZCMKUVDjA9NvHJ63",
  "key8": "BtHyYy38UGtMMhqjyzq6KcfCNSCA31fECGhWPQnYk1HYUVmyPPTrLVzr7cvMuX1r9qGNbG6CuSW99FQH4Su1GX4",
  "key9": "2ZVZSx1tjAH1wz7kicfkkWUtydecpKZXCwfAM1o6SxKCcfteGUZG9DrQ85XNU3po3ivf5g7L9goWQubQdcGUcaiq",
  "key10": "2d4ATmkLju6Ps3bNLKAuK7QHZsTMsThXmVSDequU5f3FoDLbiGgniZBrD4CW9iw3bzHCvv1goVfHS5WRrSJTF6a3",
  "key11": "4rYmRLujCTq5HkifP3xhkKkz96DcEANoBZ17LnEpD4nsopEN3g2tZ24LbzCexdHEJczEJG3ALkEQqbVNaoReSk2z",
  "key12": "4mYeYLataTB2aHzqs8SeTKeFmFvAnxQLyrRaN8aLKCPATwxJ1DASGqyy5r3jAUWznxxhMPrMPoo2JuYpUA9eg7q8",
  "key13": "2GVFpyJkojzBAVqKfGEvNNPSgkULmTSykqYFiUAbE5RZChjKjjZYZwTss4ALwGfCswLEGK1ATJE8kLqzMaKG6hSa",
  "key14": "2ZhWaicE2BVEB7sfDZHmo7Ncw1R8iJG8iMJh5e3sYf2wZvMxZQLoVs9KyajKrHZTCdiF7EB7EeuMwmmQNDUhhGM8",
  "key15": "2F4Sg6WMQdRWnxZmmcZXnCpWwGVDESauxLgM8SRc4avXjtzsiEWwzbiypmHDPhicBGx3UgxfKhLzX6As1w8V2Q4Y",
  "key16": "46HDe96cLCoJ4cL1E18hBew9sDbK4Xoh765nZc9HrGVzcJmxX8tvHGMsRTSnihN6RBsRt8RDhduxs8bWzgwxeYYQ",
  "key17": "4XGz91n2yXAWBYoS8PMRUytnZSXP2LnJhMe791V7bb5yE69jTS1UU7BFAaTwRY9BBBfymtAuQBE8kPT8MMc5zUmN",
  "key18": "5ksFYaHxYY6qjxTJsSeyJZ3W7bqJbH6Keeru35cNSyPxMNedZXs4wrRg4M9P1yx22r1YjRvn6ouWb1RXg3baFw11",
  "key19": "3ktiGMGwEFUBjXcDTA74Ka5Uj8U2qifF92Jxv4ZRgMSPCqdZZkzSp6VJJkfX5ZPnSKBEZKxFTezzjv574TrUtZya",
  "key20": "4XkcYJDXXf9yMCh66XHwRtttjemLdH6B1fnYC6PgGvRbGArpjf2z7qCGgbVyXUBBSTLWhmTsDgpvkzuQ5Fjybj5q",
  "key21": "8FVurDm9gWRqT4gMK88gwLPdJW4p27Ce2jKTVc959Er4A4kWpMBQrU2VPAP3Q3mVvMEgh7gLWRFKZSne6yEmSJo",
  "key22": "2UeEyypCQitw5NPA8qn7NURzGq4BhHYRTnA2Ma9Pzfmxw6sfJS4SpDnW5segtVFNYsPq95KpychSm1us7GVnudNk",
  "key23": "5uCRqxpd3YYfyDDSg86FgcaER5jzEGoqYPjKh4PeXPfqhPbzQRDi47PtLtyxsWxKhap1d6JaJvfTUgVMvKnneEA2",
  "key24": "4QdkQQDfCVxWRiDMRchqhwHdBQDqUeVePWVKfnqvFy4EmuTCMvKwPbCtrg8Hr3wNEmCwcKeYv2bBiFuJqXKzmPv4",
  "key25": "2mtuonVeTbPVJt3CRQLRaUspQg2tTyii4Afr3TadRVUWkraqTcVxyePC7bvPFR7NL3Zjim4UEdGoMiwtMXmSTB85",
  "key26": "3RP31tip7qz4p9CxxjR2WEFSfCPUUyZqd6m792yoyxnHHZGN2Mt81NVCa3VvPWFaD2zTWhJaqWskoQ38fQWqsrrY",
  "key27": "2ipwK3TFPWNJvtuDRiV7wM4UEsCvTJgTBJJbwmaYzwePhY5JmKjW4HnUBiEzhXsLUyb43QAvKP5RNKSmLN83kUnc",
  "key28": "SKmTRFLuornKrku8cGp8BGK4mFwMBE1mmAe1ZBG7uKqKuxPnXMAqYnXhETcv8NdRmV7mynz5HWpCyjYv7r96CF4",
  "key29": "4fYJgwWMxm93H9c1TTiZaReD1PGz7cjsCffS7cztXNd9vHfR5JKJmUwDjciM6BDikXJo93drAtWFuBE5MbnbcGQC",
  "key30": "tEZ3WUTyM38DcL5yY9XS7TmggxkGaMBnL7y2XHb1JTduL7SZgp36AzU8aJwpMFvdEADjSc2Pv7Fg2TdrT5cSEqV",
  "key31": "4icmNz8H6NXGgVPVfJCxD4D2d2nT5yyjmaxWBpQe6Ujmo19DGLyw5c365Y46eEKSbeBuSvdaVSoC7VQGCfhgxS4w",
  "key32": "5yna5s72jcb3kTSpFhoWzcxLwqpKf14R4kYTVubt9rnswVbk8hxv6fLEMcBpbByux4qcZiw5KKpEsYA3rTtPaj5V"
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
