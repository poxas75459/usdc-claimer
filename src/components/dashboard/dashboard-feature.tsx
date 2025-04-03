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
    "2HiqnsKTCu2ZVrDCnrw5KUWVFyoJL4gk8An5up5oan4PcjSV6g7hStst6PzgVcWhHBK4z2jfPXkQZpWrqCA1sftn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGQRkoyuMN7tffe3ykULTvPTMBbT6jGkpKH3JquFE1QxG55V5WTfV6pv6B4KgpixaPe7pW21Xpbu2HAxRHtynwU",
  "key1": "3oEonDJnRqFiaQnonKAuF5BRwfK4GLREt18Vugff21qVgN3qumLkfZMdonRBr9r3QKDaG1PbdL4HppVQuW9CwZS4",
  "key2": "4roCnJ3eZpAgHpn1G5ruk8er3qPSKKoDsFYVubG74QHmcpCdwaxEa3xQqCey5GNBmwuGZmHc5XueENK2DM98aPJf",
  "key3": "65279FYt6rCuRRzjoWc9Y1GKvX49D4vsCpuzqUB5MXdB7BjRUNsToDd21kR5KzmvUVXvSMVH5kYEyaQr5B6bdjCc",
  "key4": "3MeiX7btenqcBfu3okGZP1SEa6GDTuuv3KMkE17EYVcAPWaX2QrqFZmPJa4CGNkVY5QR1qZU4eH3HpaRUbXS7SA2",
  "key5": "5k4JZqezYQix4LJw2BPtZunEwaPoK7EFGKhsPW8uuPhyDbjxsmTDi3PTxokprcuB3EUAks6FU57yA7Xbhgshjbgg",
  "key6": "3FQcXirh7ZcoARL5bNrFDKKHCxqmaefWiUyYSHfV9MTfHacBKJpZgVWDRa7xdnRtBTWLQ1XxjEQ1CNdNT6wjKPZS",
  "key7": "sqSimgbaADkQJwUHnNwpAFCTeyGqqkHoqyLAJRwjio6Mnv3BDb6Fgx7fuVQ696VigMCwSF8f37Zvnrqe1ySQx6e",
  "key8": "4QfHiKj2JPKQnR4e4vs3qfze4oFw5RMJ1Zxj3BMidVucudmKQDR1P1xXM5Suf9nbpZcY4ccZc6jizHXcbrJnqQaC",
  "key9": "5hU3MoESdMcAYqig7qenndnVKDoHfe61nqg4zXidwxvywFqkLimQWrgPsNsic89eRe6QdQcucoBdJFhBkHTVkjuB",
  "key10": "2EsV4fSXL9SEZnQ8zvYdYWhmUfB8c1JeZQYochajs43pry1h5a133cSiRGRaYACeAP4Y5Cib9hsdVqdvG3EZ5LqV",
  "key11": "5BQCXU7PS7CzCZ31L4ZDgfEAHxgpY3c55DVG9pWwm91cMqdMeKzEcgmky2uHfq7uNyGgKG8rWzt1cFWe14zqJEvf",
  "key12": "5xzR16H3vGkW3UJajzX87jd7cYaAH1CW4zaewk4suHHAk7LU6pwtTaSezb6zcVDbKNyrhDCxpv5T5UYxmav9qAq1",
  "key13": "3m71W3SNVaMp2dLV9iUb2ieMS32UwUeATRE5Areyun9WjBpXFybmMqYwFHhTVAvJKvnxUp3zrLtFo51SvLt1DCkr",
  "key14": "w35ygY2nM4amiNPnfyzugCLympc4SY6K7eGDnneAMrRgaSYCX3UoPsp7Y6BGqkKyk6i3gC8q68qQ8Quzv3wkfd2",
  "key15": "5MAz2bMA1gYkpCKRg274xxFEdntvnEfD864DSBkEnFbAgNqpDpDtgvfcY55KQt1kAf7gYjVsk8XAkFnoxXmSZYxY",
  "key16": "4z9Uy7rvrqQUFBVBWdtTm5sva1RbN1MQLjVgCDXBFLEMGyucD5RLCj7MVepCwh8B2PakGDHSVBwp9Boh7esFR3a4",
  "key17": "2cjowcydXbiFPCoQG2bqawCcqBDs2oZnrNsUGhLaSavagC9GMoufj4bD6bF6b4JgDTpqbEPzBc5hfnvRUpb8BRJS",
  "key18": "xVfDHLPhwBFwgiuDKVYjYV5GKk5nxo95Lr2QjBSfQuadmQa2rG7aMZVWiJCyGLYJerxZxgq4Er7WV59oTFA8kms",
  "key19": "24fit6pc3mFpHu4LsHfT1894DvkVkaYanbSbm8GEkX5g4vx2JhpvjGKrbFgUit9GNFp6T3YzK3nFS6eZ48iegHjh",
  "key20": "2TqH6UHDyQCKC8dBPjPNhKGC4GMUXZ9R5J139ajRbMUbd6DGAFn1HGah9u1sXwAx3c79a29AtiNMehWZ8mZ87idi",
  "key21": "SEExMfD63pkDUXZzwqfuTVey7X4F55NJcWuV1BwfxQNnAPw8hRtZJCDEqFJKjcWp2WrPdvTTtKxqzB36YDcP7uH",
  "key22": "S98QGnZ5sxZammta3LgpcVLszAj5wBsDo7qmjVykSSpHdb75cn4gcW9reeNRqq9baHiPD2deqX8muvoFDTzyn6R",
  "key23": "2Vy6GwL3mbuyRWHwRLKmiVeAUtaGwqyn6HXiZckdfWnmP3V6oSN6XsDkeUqdL7GkYJa68xERRuCkHsKmRTcoRH2L",
  "key24": "Y1NQJp2cVDGHSxbcx5UojWgFcPRBUYaF77qq2zP61gyLbjxk3azBgeguwGi4ViUe8s7k1VGprd8pADKWZZf5wTp",
  "key25": "2YSsRTia1UgrCa1Rrzy54TwHcvpfi7VucRmmkE9XvUWRYjVzjjoSzMqAVu9m21ghubNezD3yJfxnDZRsuW88wo1R",
  "key26": "2A7TNo9QjaMujnp1pVfP6GjZUVsS6psnwZV2finsiPK2WwnP1viTvofNBNUxTtarTCMBXBMHvBX6CLkBgyNcZJB4",
  "key27": "28U2Wh14uYUcQ4XsaCVtPbxkGLXPxMCuAGRAWS656eLc2PYjkFgc1aNVfjt16rCRP1YgzhjNhqoXioc1s6wazrcM"
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
