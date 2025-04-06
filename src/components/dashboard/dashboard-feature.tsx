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
    "SN5jcB26W74gdq28m6o2NwYwKTGerhiFAMEtixQSttBF1a1Uv5tUHduQoU9nk61FCoaDRHRLfjEeoNr6At2RUEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66gRgJB6SWV3KAUHF4j3ZMUaN9gYLV9tkwQAdLgDXAKhaDtXsrwBoVLPm3KZBmAt265Ta1xAPMCYtKteYuswq5rt",
  "key1": "2CAEKvzwmdTMUYEaQG8KMpwx5mkYcVbreWwAuiLEVM872Xtx5m8d8A1N1VMfAWgXfHckbHWqRUW6KkfD99Muku1X",
  "key2": "DD9VeJrLy1hapVU5bcwqmcNrrxvbmqHPr29jYXZE1xGP13cGtk4AWDkGS9KFdopekogVahU4UEuRheXJHkbyxzZ",
  "key3": "2NKhkUvLW5HmE8Nz8L9BdnbcaTBEgtMypnxdwAk9yGrdQW16Nq6EdrzqKtXzMuD3eHu7fJ3woEks34DKAXgfSJZn",
  "key4": "3vEfLSqCAtUjv6Gc4W6iTVmwA3YcGB4vj2tet27kRrumtejCLSFfmGYzsPrvruxwACyvNbki7eyoDjPifCCAk9nK",
  "key5": "5CsmiyTnHn8bQ3Jwi5jTHmx75yHcZeYj5ZTXu1GBwtsFJ1aUFNGr5Cru6RjbEytSTmhA9vxkHma6yBouhx9FyQN5",
  "key6": "3Y8sPPaTF97t17mQFZNYhoFGWngnWRSuCiLNENmc8F82k9S2s7B6hftTkH7gTCo54Yzshg3k6C6mQ8jg7gcwbUPb",
  "key7": "mRnJZPGTUt2K43cvMazFYADeEgJZzQYeW5YRsmAjmugQxtMu2V1b2obFmJR5stkLUvhbTxJLxmWKxadDgDRS3Ve",
  "key8": "512w6kTRohrVKDjGK3xCarQEALeMERK2i8bBCLuQzuYir5Tfyg6arChJqzrqd2BZUjZZTPc1KhMRpeSuoAN97tHJ",
  "key9": "3vXwoLJYvCyiidb3eCTMneJsSGo7qwU3L7oTGupxChNCZpBtXierLgcgdQSPVzinscxTLLE8YfgcYs1Z5kL7zujp",
  "key10": "4GqiymuefuPBrsHvstasywuiTgTbQPp4TVHhFSu5HfuSXUqX2NgbgiyCmKGCMp8As7k7wPgzG5QmJXXyBZq693h8",
  "key11": "HABXzRWU4yrDMWkxcQAgeQLNfNe24fkhcxAAoCJNVnkRjVFGTybjCZmsoy9QuuW9bsSR4cbAUu28e6wE3nK2Yxw",
  "key12": "2C7ouYkjRvHTcd4WL3AacHCmVbbN82Q8ZuCdrheZAAbQPeLXZG5DqVEEg6wmGgzYKnXZVsyR8hBuoSatS3JKfGQc",
  "key13": "3Xed2Da8suJPBfCJ16z1edpXhC7ZuoJE8wpjGNCXSezzhGYGtft4Qpgfg8eNa6c3xQoHWV1XysjGBFSwCCB6FpMz",
  "key14": "4Jmcyk8Ef5UM3y4Q4D9jSR1bgxaDcd73XJTxetff9seQQf1dNnvysLBrwUrwaJiBuuNGCy7LNgHaam8AtMTgFzkU",
  "key15": "3HS8pM9tbqPZnVWmjknudkghCo3m8veewDFbVZZm37R1piwGwfKtd3k4ohdpSm4zdza4RP9nhB6ms4CPpbvV1pCK",
  "key16": "L9yCsRYvbVGstZUVZvE8NH7rkLcacPusgsa8Yzzo5yqXLMbDciCGYvCuf5LuB3BFzFRK1m5d119kKZV4ryjrFWY",
  "key17": "5BmGLJPduYCaPveyoKmKkg6W4g94Xd39aWtfkkVfon5Jj2QvUPWbf2AFsRam5WcFqNvnfzZhN5WiPUkaaV4xa8nS",
  "key18": "4kwHadA1wh27rXfaamvAhsA2M3r3DTKAHPoFFGdE7quP5X88Q1GWMGuTsz5AymMoRXFN2pYqq5f8JN4git2JxG5o",
  "key19": "3nzCGjWrTDBDfQaU6T2xaEDh5QtnwK8wnbzqJWoCNcopEcvGQNaSecKG9HBY5vhwZDJqTsXU75G9sGsHNRNQQVw",
  "key20": "28k7yYSaa3QAjezax2Pv3qC9RudRKQzkyRv6BGCwqkjd8LYeTH7Q5ZkpCUAqN2ZhhZF7TwwpsJzA2ooforyeWPbY",
  "key21": "37xcJACeZRGjg8BkFB67h31pycb5y2Z6CDULjEqxdDKqsPVMEbP2k3evZY5AZJFJJC7gmPa1B4BbdUs8J5yfTjLX",
  "key22": "4LdNyiGsPLZ7pgzTMRpMAMEtkaRXdNbjrbAbnfrq3FXzVY22KxKMxg3uVywZLKH7pxSXRgQT78XMo1KvgbtxpMCE",
  "key23": "5zzwg8AJKxDhE62gdbiBLaARcKKW3frN9mhhQ3PCnf8hWkStmo33hWf5bGaAFTZvEnjVRcQ1seyjAAtNts5gfsMP",
  "key24": "5hNQKB8AkX9gSudwyekB8kNJpDPQ1YGxCN6XGA8gHYPTstBEr1v7NFcR5gqKmabtp4Q3NzWzQVy1ab8YvC49QrHt",
  "key25": "TPQ1iCpjcFLBiwxnNx6JDCHr4uYcGCuRNdRHypfjYJh3o7nmsD6wCaodM3gu3V2NqzM9yvQKZ1mjm3DSUZc4GT6",
  "key26": "4Es8TsVgWCzy1GvT7aH14kNA1TW15TXXjjA6gyWPXbfccaknLtFNb96mHQ5YPQntgWHqXRPCbZyW3QtDbPTwXYRR"
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
