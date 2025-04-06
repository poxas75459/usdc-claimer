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
    "4MWcUvsJRufqqanExYmViQzqgfRuY3HpoP5ryFgWAoT7XrPS1dZmq26F2FeEeMZ717gcS2QVkfG3NZ1Qeu1xwVVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LfsyLRpSuXx29RrLgYmSAFd1Lr9s1bZaGVaJF7FoXGycWLZQ2XSwXH3fKuTyYFMnhpPR43n9M7hcTqNe5Wb616T",
  "key1": "2mSMRW8CLs5mYSdE5net89zQDBpEjMH5izUqATgafXeCrDYmesnejJbgNejMBjaetT5cidQpi8B8hpPWSU5NvPRf",
  "key2": "4F6QFjefURdPzUyCGExaB9i6PxJPMCRoCcW5PPReqWsUsGMwgpoJxF5WfzcUjwKBwFtjCvbUCrYD9kxNe19yVUti",
  "key3": "qg7R55pEYLrVWpmYUHqMpu6cJP7fM3E9ZhYDa5pJgGkVyZGtxxhBjXB6RGJ3WqP2KetAHt2Rikf6LJBSwqBesJC",
  "key4": "dGZ9djK2vFtJ38wQb8Zpqn6KCrn6dwvdqGLYHeXUrVxtDtZXjsSwjfRh2LVL4FgTCDVtjHU9uHGFquTEhwwKaf1",
  "key5": "2nkFyakt5Bovd6Hh3fCFS9vP5g2xrMT7ftFZxk6DUyWSwuVTmU2g8uGJHVcHzeSCDErkbMjd3urYjrnuUFTPWwTd",
  "key6": "JU72VYBZLjAPfctZvCD22nEgxLuHAA1exXKLaK4FaJ1g2WiSkt3WiY28K3ph15CKyuGgxnFDSwshySANZB4Y25g",
  "key7": "3ouQmQUEFR4jnbJuwLRP15bMZYvPpSRPwrEbX55AoYybHTUoHGyY3E5iEvWu8ps8nFgiYVP52ZRFcVSXEDb8LBWF",
  "key8": "3cUP9dee8CiStT64j3LTzZ2Pia64ca8KcWto8wMXZcxUCyCRbDWcD4u1NFX13Y6E3Bt8kRJAhm6WqhqETGt22qt8",
  "key9": "37aKXy6XEaGWyjF53iv2PKby7Nx2jhNghDH1vq2ERjU8CksBETxf4PksvpnjdvXc88gNFpCdEwnJCqbuYVvuHx78",
  "key10": "5qKjTp3naPxspWCcz1EzgKmjgcPNQZ9SbP2uBNAXcATp9rjXof1fGoJpnySmuRKCE8TZVV5JV2Qgf4eLGcJXPPrj",
  "key11": "4LCgTFD1MzNBncsZGH4nz3sGLNCdJoJfpAe6YBoVUrCjonPkwGPwX56yGAN1nrYjQKmaoPRsL2s7zd9Ua61v4GAL",
  "key12": "5QfD3PvWvJLDMQrUUZy46fktiZWHZSbCTGdyEW7axXBtrMsz6eWe8oPctmsaQ8FVPVKyixuMvfr8pTqNZbScuESf",
  "key13": "iNhZbdGQ9m8x2eY5DTRUu36Yoc7g5GJYcHFFn4vzjix128W6Qs21LHqXkCnC5SBG4xW2YqBpysxNwc117tLnjeF",
  "key14": "3nFz2mgNfuL2vA5SowH8eC27Es79hngFqm5FLZqqeeC9Fi4sX9YaPsmMvYcWBTEJceYf46yFd7KHVHxBqmXoAX68",
  "key15": "3jy1Kn93VZsU5DvXbeAd4Kstgrm6miLtoVfLS8kdTVddXr8rNqDa2FEctgNxUUtaabQUrYUGmSFobNhzbDgJBaR6",
  "key16": "W6kq4LCMU2pL1pu9Yho8vveUmU8zogfr3x4xrsaX1LejyieqNhFCCfk5C1wvLu1U1yfTHdgJVQyxjob7SU9ynmW",
  "key17": "4piTbRskStNHttnERkvofA3wjgXFzJeco6S9J3ky6saibob8QaSj6tMofomrjGfjPXG2qoFv6EpZFEfBgTY4V82",
  "key18": "ZpNj7HFMEwCLxFzHMda39hrWAtQugoX2M1ye1ZnBNrUB3dxGLgb1wFF2VhMJ2VGwssbSpcRywdXVdtBNu1UDbHk",
  "key19": "HeC1azfcNZXS7MQnaQLrie3UH1kN48CRFCUs4E9TLMWWXmWp7ctR4N58J2p3QGzJ6TyJsoFki32nwDLAbXfr6gV",
  "key20": "5qtAcEsSwyTjXaPy6y3UnAQ2aRuJe9WEdn2zEs1LuAxHkfZmUyUocjywhusyYotJyHhje1M3VMzMGVWz2GVGToNv",
  "key21": "4GHpSTwN5bzyAyZ22K2sc2sEDMp423jHEwVX58yxaBdThYPFFMEP596PEFuhcpm9khUHMbcq9hmNspNXMyVQjDYy",
  "key22": "tyf9ic9ksa3Lrq4GHFWc8dcrmuGMcweP18GLDsB3dWJrXHfLrxQqo7ye47Fcy9EGf91q3zX2U8inTr2HMYAds4c",
  "key23": "45ags3HSwSFs6ytFCD7d6ALU6kiMBZ3zkENEjnKVpJ5ZFxcgjC5SwVsxkKAaCbNhdmJ1zNd16fZ8r2RsmXGcEQuW",
  "key24": "5B5y2vBttr5XrHGxcGCcGyXaKCxseD2A3Hb1pj7fKxVZDHARaCaYCA8c25BBrug9kVDWsLUVDoRB815WbpXVWcUk",
  "key25": "63XyQ36jpjJQNYCL7iteF6vcL1zaV6iYBJhGSaDb3HR4gUT4CWGvbSRvrGkXcvRwbbZAYYk8fAxVgpGEDCfku2uN",
  "key26": "5s8xm8atJ8WkW9fUkR6tXp8nM4dfuZb2DEWUnaNZGCGk9HZt9SWqnwpSg4EL3EAK8D8mbNTRKoLr24NhnCyCt3cY",
  "key27": "3r2t7JXjQxZJGGALLugDn6xCcitcd7LGzLeAGgNG24DGqzKrDqh62n7B14gdS5k7LMDRnJB6LyJ1kvdSsrGANwhF",
  "key28": "3QB7Vog6CGsxFmnocnQAeTvan5B9yzfrvUfcc9Lm7k8tsvr3BYEVEBBpHDci4A4VG7acrHDg3rF1Nr3kZ3tPxXAE",
  "key29": "3x24dXjsuAtBkeLWngxTCXvyKKqJzVsBxPRw3a2Rrn3PUKCB8KiMdi9UnjgyTRHDrqizMkQdGj5uLxpmqBZcZxkk",
  "key30": "RJsj1d69HFUu5FmPKdyEBGxvi32XBXk2XBdWP2Xu1mRMtcV1k81jtrT7rr472xL4adV8UpBYDv5NHb5fFfjfp2R",
  "key31": "5Sduoe3DbyXQeAkF6bUpkwSKSmPLxSTGoX92A695NTZqcZQUauPCuPGK37hmJ7dX7sckL7bnhFwLdECRvZyQgUce",
  "key32": "5B2ey7QtAZ2MyQY2DbNrFLWhvNhsyJETXf4JiXk4pc2UcvbcpPvxNHve9owseiR9Fx8BS1QoT12H7UwFzdWC2sVJ",
  "key33": "4WeHCnAYPwM7a6ihaHMgUdF5RZjgqAz1DB3gp6S5QB7ZnL1fwhQzyFtES6WA6WjzCpE8qxCHk1QbQRRmriewmnFA",
  "key34": "4hMs4APPmkR4mDxN9C8XoPkm6KExWDQVJUJ3wLPtWnfuardrpi97u5NUCuCMKL2ULJcVuRuWVesHzm3K1qhCrd7",
  "key35": "3YvmW4K3M44pBMD6TGR4qVfVvZ2c9L9sdTzBxJkXw8Hcb4YDTz9NggmQU96a3YcWf6qc5HcqVPQhhGvjk461cuEh",
  "key36": "5w1TfHtHoU36WaehGcwRkw7qAAuoh5x4mWPMdyCfL1kwVCXQsnD3WrQAtdCZajav4BqLJuXsHfMfv4U8QQMtaSjA",
  "key37": "2qBjFe1Jt8giRxrV18czMyC6PF3QrGguqAa6T6joXMi2hu1tGyemXjVpsYUTH8zbdnQTCFbN6NbxwuyhHKmZsDyW",
  "key38": "65s8nZJBMMnVCDZ78BRoQikfpnh8ia72AD6TJbMSSYygVeXwvbTZAkF2PeTTPUZhzL3sYQZeXmuPZSt3sWJ85BfD",
  "key39": "2uA2dmn6rAJb2CyfD86iZLFCeFADuRTpQ4xX599caXJzoBYXwKAznpJvARutBHD77cLg9kyu7Azdcz1xCbts2R7p",
  "key40": "5fvPXRRr4u9KirBgvDLkppra7gfkNcN96Nss4k6vJ9136WJepGTd1j9u4a4bqPzNvbFFdZGH2eYrTcMxNrtHRP1M",
  "key41": "2QT3oCTMw1x2nQAGhruT4tNxNiYtqjYR9yjCLwBFDaSUVc93rQLTuMcswzKinjrrpF8AnuheB7ocN8xmgARuCvNv"
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
