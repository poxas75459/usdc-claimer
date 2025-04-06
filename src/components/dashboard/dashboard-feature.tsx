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
    "5sYx6mxJ5nf1vGXvzb9Xn2qdW5p3QrZxZg9ZXAzb1Y5vu8wvx3ikrs5JzMwFaNvZ2mcbBQUaSS2YVetGDZLHVtpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TxJUV2ZLVD4UoyK3mxKFNYxZAcbdeiDBsV8bnqUWAPUEQ6kmCWPNC39w5LkEwXzQmJA3uCdDM52iykwnBE273sS",
  "key1": "AHbmAkvjbdQUAbmWDA199qzm9Wu7Dv2GYoeQFBC6DSwUAszhRqAWxwC12EDMs3PMsn9WVr2hjcGkuQYBDmSU5Kg",
  "key2": "2PHu5ajNZkM78apFufkvwXykzzknzqW9kP3hz9ccYc26QHvaKCTCrAMhMhTYXBcwwoWLfBeb8pzdMMm5jWmhaW4c",
  "key3": "3ZZMdej7wsMBd7zMSsevfTqU2HPeKQ8ANtbQXp7zdT4CcEZq5t767EQUYKWY3DmBVscRNGb1gMvuo15vQTbhq4bP",
  "key4": "3mYQfP98tJs58aKh8YMR7nSkHTqD3ngLQob36jkixG9odJezpEZpsJ8ZsdCtRzzM6EnfWxTiuWyTeFzZsbA9nC5C",
  "key5": "4AiTrTvmGCs5KysxQJShxhADvvpKnPEMCjmeKz9ofaEfpNhtoPwkH6rvNhbj1P3i6dWedLVg4c7c1bDuEbNwA4id",
  "key6": "3TNUQL23k7Y5tVFwW7ewqLjDPhujJ3ioQatqzAsTWakzL466H9mY6csRFX3ikJsK5Qh9b8h4zjFtZbN7Mx6XZfKW",
  "key7": "4hKzJaAULJq8QJCfwc4mDyTRzZs6u8dzAhTGn371ojsUb7sVakwX4vvnjuKTjsK2kdVGWqjbDvfrR72izNxpccT",
  "key8": "2eTB3SGP2odWPgLDmoJpidjtPXDxbRMorfG1NT4whninvv2P9fyu1s7mUY2f5eyTAgsXCxdk9gVd9dmb8jTGw47b",
  "key9": "2BbFVRWCCBqu87SKcbYC7sPLDaJA6hWTRufJwmMsctNnXKqpbERs1fcg6GTDxed3oJ38cchhvKMnhrRdwykedJuT",
  "key10": "4XZQRmvRbws8mL8QQDhuDu6pCHPGYZXkddiDX2Wrz2ihsctoA6XJ87tXmvL3hKjjawcVis3tn4jB7cBBq5QC712c",
  "key11": "4Pg7o4shERPuHFFiA3uLVTumk1TCxnMgyk3fngs3gdZYAM6jQ4uX2jzcsGodpDH5T1LeYsduxae1syK6trSRp851",
  "key12": "27KEMEAT7kX17Dk8umLbuiydwNDutMJ9zk4oBhv4PZ9i6DE6necSrBmsaJ84Sj1iDoPudc49Eud5ESJWXiQEQVU8",
  "key13": "4daAF2kMp9KcUvHBf1xJ5FBb5C7WDqG54CGED4R7rArtJrAAhMFGSvNR3fN3hFR8HTcRSftBdxYcGW8is6dtw8h4",
  "key14": "2hzQwM9HzqKxyD25sKRCxrypYU9NpTmYWiKRJ6WUiFMdMYkLBNFsBCmw1rX3N8Fuxni3p8YKUGNsXRX4wMbkwsSU",
  "key15": "5aEyDN1kyVAwiwJ3dhirc8uGRJs5cGsA1HP98DMLVUDm8ex4bK75HZpEXE6f2eTrKJFXT1Wva5xs3sPrpxoBNh9f",
  "key16": "27M5yHLHQQZvME4zNXyBYh73WXa5vGZZP47cc6n5iifjQqeXQZRkG6LXeWnBH5HTG4EaCNH6HumbBEpWopBRgSjw",
  "key17": "BAMWDbVUYb8a3rYkei9nAAjXRr18xiZbtJeodnBZ72ptPJBvcc3xunsEnj1yxhtiPwLhMddhTqkKPynJjK9SDnt",
  "key18": "3ApoGE16xhLCJeb3U259LjLVQUpxFcm4WzMDX8ijX3BBkbbrT449xjL6pAfE5brpLKX5xm9JMc68oi4m6sMtYsYk",
  "key19": "2LDSY74c9SW6C1rn8pxeQffJSLmCqfwFwHnbLAc7rpYEDVF6deNAU1xrsBfLzGzzJi5AeWZk22xuUqQNFhEMQ7Md",
  "key20": "3gHhu9Vw49QKq56UWz23aniQrbuKQuBvBDkEHtHbjuT1yWJJWzYYTZsKF65VfJT9y6YL2mJN84aUZsmdk5BH7oxu",
  "key21": "TM6G6MNmCmZPFo3EYXcTQ4phkkpUQtRYqbbK323uqFFoQhfRvtiSwNPf5YV5aJegeaqna55cykeDyphDiXFkHGC",
  "key22": "EDsSjcoetUa3Z3EYrRU27HZr1TLJ2RiLZ59cBxWu1HnUFuTrqpH47RB5nHg54tgq4x6zDAo1EgwZnA28MiEAeCD",
  "key23": "3MjGXBXHCR7wfCu8vwHXZbaAeETEgBdfBE7jrdqqRBCHSaR2m6ZadVsK7P6hzbExReLjuUQeZr4gj5M4GkXSZqeV",
  "key24": "2oWbngVax5D7fqPyWNCRL24WXFQWDWCMnYEQifJ8gMneQycYdoEHLeewZbAgv5SyprWptGvQbBiGpWFJiY9MNJaJ",
  "key25": "41gLuKL6DpBB3peo6Mxm3j43usNedBKXNexX9KQDzu6BFYVsXdpJTz16fw86xxPJVBz6EtTKWmV2Sen6H66Nr1c8",
  "key26": "48UsjvWhK6ycpmfQM39KDZ1VHAA1PiNjhMWcQSp3TBku9aRjzDapWm42LNn29FnJjTe7qsi5HP8xsjE2k4eUj3no",
  "key27": "21JchxFe9NKHth8PCh8XM2EEtHjZADyMzNuBrWi9GTZpCadBhYpyaYQHVpaseE5FnM5C5keJo9N9wRYp12Vz5Wns",
  "key28": "Z8GH9vv5fo3mujVz4Y6CivPDEYquFtBybKX1Nby6u1v8oEVdQeK172eZDwrB8eCjoZarGy2annwbzHHuns48kiz",
  "key29": "63TT3wzFPaeM9CYKFFgXPeVefPMFMEfpEcvfrnXVTdahJDHuGHyNiefgqsMBs6A7co3n6a92skGtWSqomnqyUJvS",
  "key30": "4mapk3i4xidHi5mWyB52hxnDCXNWJBLw8wuEHJpphXiQmLsAjLFiT4M8665iiHUNEkPdr4DDBUuqcgUm4DnX4gbG",
  "key31": "GSWPGvWj7WZCSkBoHz9S1TyVKFA3FE2D4FcVk92xjavQ6HuPgTgrtKbJJhaJESUyaFS7WGs5fSYqJaDiSnWX3iY",
  "key32": "359iYKaFE7oVMd4zu6aHZ51rz26daTyFti1R85Vkiy8JPsQ3kHPf4CECS1YuyousrGxtYZmKUH2JkuSQUrwpB9TV",
  "key33": "4nQDCr1jhmFZ5BbFQTeSHK6xmMNjWzM4vBziQ3A3cn6ChkLdaVQvDKELs2Zw3LSVBMUaox4WMfe4XxToE9h59P5U",
  "key34": "5wb1M8gZqJfpZxz3ZKPTNeX7g2RSATC5od2CdZQ3FDfVshQZudVRa8RRcjGmu8XjJYxBA9SxvJuJAFFBgBM5PXcg"
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
