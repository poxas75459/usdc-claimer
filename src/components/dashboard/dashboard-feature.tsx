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
    "4HqEUz1JcD5oyyPJXcD1jgN7uwy8wi7JzuVvpQ9T98144VFddc6MG2AZ38pXQfyrfKc92Fw7aSC1V1NjQWXCuLNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpsxWsgfNjCiQzuHzU89y4xtfPdcf3j7n7v7iLfS4fS88UEKmza5R2Xk9hxC1ttV5KrufS1JVkzompUJt77M9cj",
  "key1": "MrodWCFCyeTZSq4YtMWR1Z4ZbxQ2hVnitVUhvXa34CNs6uES8FTxTGexeaer3bnewK5CHSXrnKx9C7atgx1a6Pd",
  "key2": "2b54eqx4Wp8QUZi7w7TjhpRcLQqXqkLyoJcS5MRM39dZuA2kpAVGThmSsfqRrWkKRr9MpG4FwkVZ8fqYLKZuhGof",
  "key3": "2QKudvM14g7DTkHh2AdXZw5ENqXgwbicxEx1MN8VNKav13UCRDmZserG1LhnWRLkkUJBaKZJnLfzyS8g7MhKAbyR",
  "key4": "5vbL52rkEuPR1iTCvX792HZCZt4k2M6z5wCRUkC2fceEAXeffvRZiTUDXBmNSSZpkj77XeM72cYWPMwQJmNRFjed",
  "key5": "oDZTc7mWRrBKDu7dL7Jq3KTHyDU2BCtyEK5avTrwmAowm3PJqXe7BWsJQMfhqnJTBYLcrtnpdzKAccErLaXbFTg",
  "key6": "2dQbrQf7cxLLeT8Ps94CUqgTXGD7PSuyxoMBUxXYvpCPpb2Hz4vKPGjZjeWoQNewhzFB77WwB7gPpbBwcTRFnkqF",
  "key7": "4CnefQVbWTWnogg5WCstAkGsameg3Wi1bVkzHCKgasVMnYjGwSh8uNFfgWJegvw8WSUnjhwMpuAaQx9KVTm14fUe",
  "key8": "5mb4VLSMeLZhW8kZ8TGQDCkyiJ5MoNyduDorD7idohPKR6Wn2dbcc8ydWSv66XyrbAMJ55KVXqrGR8oCHfYaKTJL",
  "key9": "4cS2cWR9ud6inYTpeMJ6iTeXEiV5Qg8GoEBm5wfTfCebr2WRe3UMiURQnL8YZwar1qn4UCNhQT8Vi4VqvgQukF4g",
  "key10": "2uLgdJNUQW6je3si497ZtUKnLHHSGr6wJRFMuEwmBbruwrTfud6SeaSXcSVnrx4SVhUZm7P7u5GnfJJRHoRXoxuW",
  "key11": "2L7xVim3t1hiHP1gSkQ2564SrSL37cnHiSgta4nTS8KvkEovLvRV2DK484ZVLTpnY5KMh1uH6QFfXFw6SSUz5HwD",
  "key12": "2FiTP24JQecwJXGQ8bBpjsvrvPcCRYq5j4ZzdXUFZKBUb8hVjauT4ZZq3XzyC2e5u5hx5oH26W9HdJEDg2M7Rb8a",
  "key13": "2pX4Vd6BVarYWab3a8A3KnsnTC2bN7SiuQdYKfmkvbdet6hTZ4jp79f6uGHi8sYgpGjwLhxtCpyzX2aeomUiQ5q9",
  "key14": "2aSzvbHoXCfwJoQ7f7Y3DL9z6FqGjszkMTQJH8q2SMKCXoENEnitxVeWRVofwQnzXiW86tkabsmTqeQLNE9nLhyG",
  "key15": "2thqK7UKbFkeVgEkR2engmcLv2M8U9L1fyvAkD1AzEZ5VdaE8pGzbVoKypJpeMMRpse3mJnR22TLp12nBfcuvssR",
  "key16": "4FeWbuMGHKpmZVuYG3G6SG2xQwe7SG5vvBubpubJPUXMfLHpCLrGjm3Y5fi5LjJgKaUp2RE6bNtbZSCCubVD6YnW",
  "key17": "jutPDGnXD2NE7fdvhyLg5hkHV4yeQLvfZcYVjwNhAifTn8SP1S38ZGXC3iqYDm3BuE5bdvgsc79PbQSvWLZ6S6r",
  "key18": "2hLqbwrJrT44zjNWxj94AwtswqBFfTW3nfyZohKWzhvs4JAasHc7txL19azFpJYjr82oVTAVxneJAX5khumNbsMx",
  "key19": "gE15iiyowisCcSRW6y8TwvnnGNX4YZz3A4gNdmn7dsofxsTraFA5bhPj5Geym3DJvy1M8C4xatbtcMgnpUBnDKK",
  "key20": "QTnnjGquKwVjUSzkoQ3svo7qvAVEAkrf7WiWPNhFj6jJLqijTXx3gR3wLqEbN1A7J5AJNAwB7pHGUnAZLnUomwc",
  "key21": "2uzBAdSmdTKuqYCDSPALyojZqPbqGYSZkw9d1VcKm2wepuh4wavmYB1ut5phxwsH5zaejysyoxd4xdMic41KC9Ld",
  "key22": "vppo17ZSJXJDN53ZrqsY9nvq1rq4y8Q15PivgQdRh3gUJmSsKMGiqvDsVbUTx1515VPcw5xKqaFTujCepJHAFgW",
  "key23": "28phFP5o84uKWUNgwho5Tr6ees3CJHxwhL5jHSghfbwpJjKU7bNtM1RkcxZfvMVwFswqCCdaNic1JBU8CjMiSRv6",
  "key24": "3jeaLxWTEoGKKtFywtKSph4itydF2aF6CwWYEvNqyG74aAqfrCreuSBWFUG9pydwB2GUkEivjcDfbyuHMhPULvty",
  "key25": "3qfyeJdqJvTJbEqujV8cZRAJX3jEggTEkM7ff85ueYUAaT6pDmRfs3Wpx1fkQLzc9sKkJPZf97MeSxyiozX7PLfQ",
  "key26": "5LCwSkpCF6UFQ7nceKpG2QbaRDbqB6NppJg44FcKecEVZ16exPS83mDAan6Cxq8YX37NrhvtBt9FKqNmvx8nBUa6"
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
