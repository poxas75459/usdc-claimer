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
    "26fHjhbh3oEUu3EcPrj4qKfsjuGXGQV86rXR9SkbLAXGbzbHzuSAKjPpv4LcLRDyD9VbrYPQffKQNymZ5L6dobee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aesM12Q9SiK6eBnzx8xPaFxSJdvGCowaL5BjLHtJa7or7ZmcXNMdDvGA5eHPbuzFVgSL9gDTHq3AzBiutUWCzrM",
  "key1": "e5gyxiAjXKPaTkLYeS1eQs8AdQEqU7TZgJfutzdGSX4ojQocFMLf4eV43oSc1jzq6BRP3ipoPfVJaBySfZFS2FJ",
  "key2": "4hTXDkQ27wfVRNaDvP9rmqWFmxXeoDS9mHzQUpLM7EyB3tm2dSSnwoWefsXhLMASf5UF4rrd78sv3EP2fCqDWyRF",
  "key3": "QQgLKUSRrh9h684Jtw26H18WuazEvJWZjEGnjqY1dGtKXDmHhtYTUcDPZLLznYJ4GxDSAvKP5XW9jhWRmosJgeo",
  "key4": "3Rjskw6Ap4VTWZYYCLtduawaVd4cBkxUwdves5VxHDWEmpi4oU9cMKNSyVrdzURxMy9R73fepRRFNnyLpPBiPJpR",
  "key5": "vgMmENri7wBy8cu6DSAfXW6VSMq6V8CVCBcGtsj2JoyiXDLiBFdZeZSZbGmhQyPzL5fj6ExHQYV46pM8WjANxmC",
  "key6": "2XVa7hqUTpNujrVq3XDEXg5eMuz4ANaaNVRTtKYhSPDBq4izyVvKBULh7MXUYwW1X2cJ5iyFvwSAeCU9mhg896vz",
  "key7": "3u1KBcrA8LEK35WsbnuKYf5mxrPpmvnWacr3R1paDbubqfMbdmxnc2JrQsD57wfJ4rGKQFjuVknM9sbcXpsDrCAK",
  "key8": "27uKSPvRM7Ypu38LFogDzW4cua1bbtYf3B9RSTFUK68gQNBNmaQkGhKhoUGM4vxGi4JgqFKqKRSi8bbhjTvfHBKX",
  "key9": "61GJPzxCiAUTqPfTRq6PRL77QnumJwZgZ49tZzrcYAA3Piv4u3kwwNWnjcxyKK9UE7o8WP3YKPy9rHzRmXJxDKhR",
  "key10": "RwciUF46zsYmhNQ4oFgdCphZK9jpARRwGCsAeJRHd2xBzb45JqtaEznUaMhyRVujmeX8A5oCbNeoPCVbRsQtZje",
  "key11": "3dj9RqMpgtSMwEAZgu7tbxcn9secFcLQ3cjuKbf1cMnpFkvHh4SvyLG9z4TyQwmHHSth2GE8dfwiW3CyDktaePLa",
  "key12": "5JpDG5FvjheZNRZ8UZg4GbYyZNeNWdjBMbgozsmDZSSyqfMB4sHU4YXkDqx1hHNpYaQkNhKYCY7G1QnxBGmLCaCU",
  "key13": "2LMUPL455thQuAHqXrAiHTPwSuXWADTbBtrnexgjQX7UcsLVRW6W3yNh2UxDdHU2LnqcFmjJqjtrk5G42f8tpaWn",
  "key14": "5igVeYDkjkr8JGa1FVVD4ZhESrs6HBe5XsUGhb8LgCu1gz4QvtPC8toWJKfq8qF25TApbqe3a8xAHKuTED9d8X1J",
  "key15": "zy77UG6acQSZL2j6AEQczUBRGfjVrK8AWxciKbBv2UpdFiWGNedq8DPRXnhR3dTfnQLHFD38tfJP4ZSihmeju2Q",
  "key16": "2RcGL3XhQumLeynA64dnKJowUWwgrUB4ym5A3C9KgtPSghPW6fGP2CtnZzdxPASC6YWHLJFssJjmg6AxmLQ9AF19",
  "key17": "Pdg4jWJus8XN9YEcsNNAZ3S14fNiXDXBdvwKZ9FCcLUsSikW9qWAZTU5YDchgcsqzE2TaB7iUZSEX7P7FaDzWRt",
  "key18": "2mygEToqWp7LFfAXnkh3gxjqELf169RNU79mxYgZSdW8sgPfbq9MKwprnwRQijBiPyKTHkXxzih17eKS2eRctLyD",
  "key19": "3wTfVDtRnnKAePupwDAwv3XKJuzM4fJo6dJ9DNatbSHwX1Wk9RVo2JYKTTXcfePQ1CtFdTXmRhYp3kEES1BR1MBq",
  "key20": "3NSs7ovREaSK6QgTuzbC2YaB6R6qEyfhkFZJFvrhEXydTfa55SEdBe3DY1Hw1YYqaXpxc7ihb5wDxrMepcpU2XiG",
  "key21": "Ntoq66sNytiwhsNvbX1xC4Xd9C7u8oLTAobgEyFhCfGmNEsbQ7qptRh4RqwQhRf86Z1e7eUxY1seFQat8T7nkgS",
  "key22": "4uxMnyFfEKupWJQQDPaE1R9A8j4aimr9vaAZS4rN6dW7zXeR5R3ox8Fgpf2QU75C2TgwoWWKcPVs47dQKovLKt3n",
  "key23": "cFbh7dMtPEbS3n844SShv2TnNdg98KrnY9yGXnqorD1NaygvnP9bQcaXn55JnAN1HK6hPW21cznkcaVyrZCPoYH",
  "key24": "5c4VzAPsn5wT3S9rJWBnU8b57StgpR8WQD8tvLLAgpZwKSVSbXTkPsBt6NtQ6EXvEXWBT1M4m4h2hFVjMapXTWhj",
  "key25": "4JZshRrwqVgXD2oTGhqrwZmEzTWuREK1jdhHfwVMzJoNAXQj77n1X88RnLbcJTDqE2KUeiQhoVbatYr4cPJdtxmc",
  "key26": "26mBiYVwFiEnBbiRoqQr1BpsnbZ9jo1GKUNnQCc64gUGexLD3rpmUNNVS8hiUuFwVs817Vb3vV6FbEnFcUzyKFvt",
  "key27": "66Q4ScDKG7rgFvQcHHRHq2K3QatVHKL1tzt2xbkuu9Y1mGXWDxgdQ5dT1FgKAYnToH3yuAYEnriL53KhQ8Hi1GzS",
  "key28": "4fYx3neQRLbrptfr3sqFBNYVgRud8FYqQnkdpN8fqg9BgGC4uVYmr9XQ1woSkbNq2AuKoC2X4k3uNJFAXmKa3qFW",
  "key29": "58u1pRmA85TLwtPMBNtqiZn7cZ5E5asAHzVSKuBKGNGi6YHiaN8t1jpppZANWhpEHBjHuYY2nAM2dPFZ8JMJvNAK",
  "key30": "4yyzZjxYAEVcDsoXceV62YDUwHeZ6XG6KuRyTFCTbS8ngsYRPZ8q3hyame3GzAQwFVa57uGXz85bLm5tTNfnwgos",
  "key31": "4m7nwuRLT3yLhmmqk39pGirRUnrNehHQqoUqPT5EUTa1CvtCYHF4iXistRFGSjXiJN3ifEjKE9YzV2mDtjGK3D5t",
  "key32": "PUEjtHFajBH74vFQJwsL9qQ7bp9TKPQgEWYNhRFudVwpzFPEchZ7V5t2e58d23ZFHuYunFzp3kfjfw9Ra6N11Sv",
  "key33": "4LjV9NEZN29BBLZ4KisNz64FC6GfAiF6GNSab2KDMC71Dpc3FN2i4pTG9zoAYswEERUM11pz14oJ9FB7cTkS9iBw",
  "key34": "2shUgRdUawevdse6K7FW4fypU7yGNdMzjcfkunJQXt6bKuvcVhAxWhUVQEb4EA8L7kk5J1rJ8C1fABKA2cc2Hg9V",
  "key35": "2oXTZKFzmvNXJsXQVk35p9kFJL2SMeNG8Lf43qiSyFEQEz7KukvGZTf8w2CykWqCTmo94RwaBiwee11ZGrjJkTvu",
  "key36": "ViHE91wjkJq8kP3Ny226e1hHLXgTmDDwiHo4uTuCSR5dc4a43PzeFP4gh3Vw8zHuLKjgKzmeDnSrvHkw3VeX3PQ",
  "key37": "3iFebXCzFaCHrTfGYtdDnYFawisWGzCtPFb93AD4Zxw24tXcgr3zh9AK7SXDvCF6ox35Uz7DU8XrLfEJmwApRTCC",
  "key38": "51niksjcSBtKkqPxE1u3piwcPUSTLTYkrWPwCwLGMHSVtjdSrch9VyRTLU3Ge7vhhyMKHKVfhc4owFM99UKF64sY"
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
