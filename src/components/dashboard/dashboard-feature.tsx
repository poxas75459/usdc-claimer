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
    "2sjy55eFCGJe4tjnx98CZYeTUoSL8bxTV1Ttaz54udqukQ849ib6EKyzDWSbZ1yK7get829TpQqdewXzD748agR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s6pAG7i82z5UZnPMnox9odzYemc4cbfLQHp2fUyAqPezXPy88sd83oQqD4Qzz51FUzFxngpmiMcmKCTicewT7Jt",
  "key1": "4Wh8PEbhY4vJfPePz4cn12AYCbmMVJaspAaezTS2PgR9dbAxQo96idvWbeaXDhcUU9yoZcWn8mYxFvxX3GMAV5Ri",
  "key2": "5FZgxpLb8V4FV2wTjVSzjPM7oRDhUFi8E1seo6u9qaqcZ2EpbdEh5jxe7CuVwGR46L6qZHwunszwFAR16DX9XMcH",
  "key3": "4krFGn25AB38EeSm2o1ojV2TAXmfRv7Y1VdCzAmNYub8DRX45aSSMupJCZeu2TfGZFoRFM9csEL4rTG9d8xZiJhz",
  "key4": "37wJU7QJ5FxJqGAExjBJVo4W6PaMgSm9pHDHRZQynXPU7KmYEXR49Z8qKszwN9HptMqF2NwSopJrLVKQNvqCj7zu",
  "key5": "4huTRXmSZn6pp9rokL9DK3JohVNqTabRthH8ynnsg2s2JtYtAC8HbXVqqAv9xDXfJP5EWNShWdrARhRiz7gm4v4R",
  "key6": "2GDLWvnHyGnvD5SoDPMeCrgk2NyQUonF6UhV7pTN7XdayXD6fUgVbNqQn1CzRsBbSDt8p1ssufTmk5VRihqrShrr",
  "key7": "5y4xWeC8R8k1AgafnjCeLxraXMW61EVqA1UMhVxgmPkPn7QHf9F3QBZdbhJJT9JgBViBnFTSMvtKeiMX2tDrnnj4",
  "key8": "5N7PEKv5Ubfnr4q6xZtDawRmp3SpuQ1R4e4Lz7Tco3tBb335zs2rvog73HySZjYc4xGgeTxXuvYD5SEGwu59xu3q",
  "key9": "2ogg4zjgpzsV9XcbtdCpsqFUjVu7G8uffny4bt9z5FinL8VC9KhTZU6PU4A5ZJm1RumWBGJTHNdqiHCb4nTMkW76",
  "key10": "4jT6r5NR3VZYrgLhQGUhJaEZgzf6jNKVQcgcRmkfg1UFZFg1zQ95ypTmZnnFd1aA7sCMh68Tv9wbwXThATFtYMoU",
  "key11": "3Tm79F62RzPSMayisrdLExtZuwTQ9hmZot3uJ7ndDHNZyh3c5NbD9C6tVz328Yyge1m8CJSYaMDpfmFuJJwEjjYY",
  "key12": "4zKCQkMiG4XNf4cxYbFQnkNRkiTZrRcV9Q8eB6SKxiVbo2uRZ8f4hGfgBUzcMT6YnuW5MDULwFDtbGA4D6L6PrxJ",
  "key13": "4HxAL7zEkRuq52ZH4gJnj1wbTd4aPUSDc75HAxA1kSeBBGq4qfS8LgZGpXNjJyTRh5sgtrLsL9YidaRH9AYGtQ9T",
  "key14": "3s1xCVpD3G9op27FTcJbY9ezoD1vvHFC1sYu9HE3SryvWwSbHVr74FbbnF3Xr6MgBcTUFiGxfoYjAXHF7VXt4Nrg",
  "key15": "5Zd6gyHCoQyR7mhiG3TNXDq2X4bz9JkWPybtr96v2iv41L3pgrtSQ2Aw6ov5UcSgdnyr35QRH3RzXkp81bnPjKYV",
  "key16": "3qwTQHCUdDUWvWg45mFsur4BwvFp9rhwBdycrr2giAmyaLaUehiuwHpnTBXKq7evXvu6H1725o7qJGWAAZm43fSE",
  "key17": "2ow2WD5iyNzbZn1aazzgZW49ERy4QkX6AL63g4HmNtNqk9XCPcs4jH6mXekaS6fZs9LYdULx9KBfgdANfGfqbpFR",
  "key18": "2GogKrZxLiWswLeEynad5rJuVD57f6g1ks6F4yFTZK9j994CfnnTdKBGiNVzBJFz5RbrkWo4FpQ5TdhYyg49Q8ZE",
  "key19": "45HmQ9vd7K9jhF3oRgaKBcmfrdyFpGcppNk7oBUPALZ5eXDuEFVDcP9XQruBT9a47xY7ah69kPEJaDmEHJdP17G2",
  "key20": "58YUBCYY8ZnHEse3eSBPrzqPE5GccnqZGYoMzKUSCaRoccERyyrdyhtAs27EqXySvS1ET1MGQCxFRDSCxxqYD7vY",
  "key21": "ZCK7PeyQ8rCp99NXkGGed3PCQvAmHyWUibckiNjqPy8mA8g36Bh3o2Vuqoch4MQpqtmzdvBBy6D5aMZfn2VGp5V",
  "key22": "2A9bjf2mvY8wLg5rAofRGeaAwbyxHFdbwW31eMVMUjHDMjFrmPRdjGWrnLNc72rcpa8xEGJ1L5K77kByH1dbSNnM",
  "key23": "4K3s9Lkw4tzge8y9zxWiSe9UdJzjGrq5Gq6PZypZQTExMV8SSEwJ5GYjLkTPfonBRoXw6jftZ8vg9FSsWnvYqvQN",
  "key24": "3e6zuxiU3bbmEuTij9yEUTYGprbbeVDB4qffKeFamC3dHK3LxcEun2BWtT6yCYEzRAkAC9zEqN6VGSGndn1tFVnF",
  "key25": "33wgbNjZPxJzuQcS2qJoi9zmzMN6AWsTRjLn9Q4UzbeSHoTmmmRgvvxBZ6VaJ6AUGAjtxvbKQWEYg6NdftWrC4rL",
  "key26": "TbdteKu1KkuSpYNZQxzRMQwAUugyyuCyoGn4LMWL1eAYj76RrjJyvLib6wG7bJ6NKtDSZAqBzSdMYWi5R1wGWNv",
  "key27": "4T6ZTNZRG5epEqHK1GaXaMJaxd7MNdrQEAn8PXnxVShXSuuptrjjvUigDmTjSzXavUYN4NgNLjEBXqq6DQqD3iZR",
  "key28": "57mmPNKNNjbs48YAzvuNJVBYjVDBKUkYE8mpvU8DZAdCiCwAJiwrvQYE9CeA3NK39JufbberwZcomS6s2M3kWJYX",
  "key29": "2a8cYSXmTC9fcvTYdGrz5XnY9xRBui8i8eM1VySXDYSYFSvG5RJD7a7C6WJcVS4EBCAG8CGb3xELxH1DYKGDNxFt"
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
