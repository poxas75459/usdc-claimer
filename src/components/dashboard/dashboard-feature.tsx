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
    "5Q46bkTDMmkznLE2o6b2ELimmz9o9E2Cb6KgSRhmRXC4j3aNDLPmTsi5vDj31WEGaWahGmTiWmhGFFcEDf1YHFA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egpVE37jf2knnqgcb3N8zrDvBnT6UuCqQ3bvzV8zNPUy9MMSzTCu1ANThp9GAcS5eaKmss7ZomgCkuPyWCpUK3F",
  "key1": "3hJjg8HwwTtaFqiFAQpjv3G4ZeioYEB2rTGM5MSFMtPegsYFtGtfbRT4BMWWyfmuqEE7c9kSjnDDEKbUUWJrbhvA",
  "key2": "4Sbn8tdc4LXDDJmz7vwLPB8GD2XTWBho4sAjw3UUy8wNWFyPmNmLsPu1L3AcbLCrNxDP1WDe4Aw5d5x7GaHNk82X",
  "key3": "3Q3CW3c4rGjYt2ug9W3gNzeJLHqVWYSX3HguX8yUdo4nmpTdnGfdmvkeSVG65mgSvv6pRuev8LLbmDd8Y2q3SVNF",
  "key4": "3mqHjy5A3tcKQsdWdCPtZ63K5quhbJw22VwSrkEpFm6GybnWrsRb3UDhYhqWVvmq95vEtdDvZ9AbdeU7vYx1zHzY",
  "key5": "45jJW4G1LWQEF8VyqAscSu7p4txbu2AXAhr4PfXpAorg1ifBUniVuQ56qDv83HkPgbxiYAnKxdSuzK55K4VvRRF8",
  "key6": "27RxQqew3WscTgZpjr3vsJTdNsQzSQwyTaGmTSuBkbLwqdnRPQmbeRuymoZ1wKbtyeNjTZbiBMH9xe8AyQuLpoLF",
  "key7": "2CYvgJP3bXT36Kipx1LL1XwVU29ieZ8VyHDFtkQbgvEdZRShY7QQsBs4SYq5wBuYKPSWymL1HUgNv6VHTj2JyEsi",
  "key8": "3CZBBYJ8NMxWaWwVtkqogd5kwRTwonmwS1wT3BjHC3uwjjEQcPCGfbRRM2uaiFeR241KjWzDGQNb8mtGhMZdCX1T",
  "key9": "4cbqJsJQKjH15xwJEFLQMGFAUTQvCSJroUnoACdaHE8dpPasow9SnsSBvSMCyuTgFBj8tgaM6Gw7EHQWAqeiDqhC",
  "key10": "YA5LZTeRqpeZfSAGoYn4rApqwkJU6woTTyEc5crJ3cZmvWaCVqLHEYDaXPPCD9ULnLfG1NZe4aygEWgS1vBaiAT",
  "key11": "47iGve2qYNPHhjaGmBPUbqKiJ3ufmLdAfwEurQvyMUy7sUkVFTFZGLBMzWyEX2TYCa1EW8X4EXzQ1Pj2XdMbFcTs",
  "key12": "61sGmGLySseXyYZY2AevnxnyEm7juWxR9KApszeRXLxeqmAyYhiDVh3HcyTKG6QAPJjyTPt1t2Re4bC2xFZgm9CQ",
  "key13": "9Ndvr8D12oDiFyxMCyRqfrQR57aLfhNV3otZCwt17mUhifFTcVuq9robfJMx3Ts5F3Q27hbbpiQBLNmP4LB8Dof",
  "key14": "T2LehJQs5RTp65tSG3Mn9mGF3d5TSgJosMVzRwwR18ukyCFBqBMGwSY9RxftC8iMFe8vpVLQWPiZgVtiSgLGpM3",
  "key15": "5ysGW6Ji5X9TgcPFHorq9RU55aP9NeJzvng55p1CZygCNUSR17t9EMdY7mEptPSgTMAR6a46kUevMaxbQXF4xhac",
  "key16": "2P9v4j2omnvttz8kMZE4gEQVSGgC4Qp1wzzb6cQhfJPvwZxRUQXrmGjGko5RQ4eTbdA4cNqx5PuLr8ZAFqHvVAeS",
  "key17": "3T3wzowAeLv9mQcFSe3YZNXPL4YnEgViCm2hen13BVysE5JSs3zkkQici3eewJZJyZ8pesnX8cV9ENrdMUJMtZ8t",
  "key18": "3C5rJJWaiCy8BeV5Sc5VVLTx4uQWrDSKvyfPbh67rHNg4gpkus12MxsHVJwNGMzZo3e7gYryMegMVRBpaYPzcyY",
  "key19": "2Qya6w8AXL1jaNXzKTvWBXbdUz8382EkxRA2tzzzqyjDao4W6VZqQxnGfMJeGGb2RpZeKNS2Mifa4CFGJ1nCTumg",
  "key20": "w1Qf9zAA9V6EhWiMvWXyWMx3Gwirr6iXNY8U7YGcGQz4LWVDKaqYoZf93akFGobomiCNZ9fGTAxWWp6VRmmxfFy",
  "key21": "2qx46fmGEwiUmTqBpM57dX7Mukm2nLB8ncQqaGJ42PMLucUcMeCuHGCzRAHMkgEnZ2hcHdiP2GWKTp4PVffhG1Hi",
  "key22": "4ZydxcXXURnqUCXNnWfUnUind72NhoT6LHQcwgo5uocJX14yUc4H3rcTNP9gozs6aR74QnDL91jFJ77ey1dtuMwf",
  "key23": "2Y34oHVUGD9a3grDSpGr4rfpfvXMswHiBRQiBiRY8MpyoSZLjdUwqoyyj8fbS8D7wcyDmLaSxAYuvN955s8pr8eu",
  "key24": "5Ff1QKLsexSwycDHVufW6W3PmxiRmWTUvqBFA7W7p1ck4mRbpbWYU8uvoXjDJyqR6ea7MKBrNZck1xBVMAtEDnm2",
  "key25": "4ZN9jGEhGCeAishMxXTdyizk7ohqoG3TFxgno1L4iKZ3kx9pa5wpLZkC6FpRS8gqVJayXrEXZY7j51FydGkQtEsm",
  "key26": "2Db47pf8fEs73Jtc9aF2FTQK9tbXAKJYXrb532ft7HSb8giBAoKEiEDEWS3CBs33WvjJnjztBFMyK5Lqp3qPmjJv",
  "key27": "5Qkhd5122emK2Fy6e3JC5kJKksyBXQuYWHL1HfjDM7r3HWwxcYgc2WDTxyFRsvtAmiysZpMHkj3LUoLXAMfLnhtq",
  "key28": "3BbFa6tkjzsgUoNkMnc8uRCGZ3mmAqnJrzPdH9jNwWQHAdbBEJMSnW5LGANGG1N9SkQFMuEC2rdtq8tprCiCMrLg"
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
