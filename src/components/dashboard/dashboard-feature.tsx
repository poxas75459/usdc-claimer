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
    "SLH4GFPKVvHhnFEcN8DgA5cXpfKPuucrMta99Ljc2eC1kjEPjPXxuectoRPiqnn45iXGJcyp8tfpoRRqdj3cwuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZyycz8Fgo47iT34NH986pgqzQxcQhfGzkPC7GKfeuhJyD9eQ8Fru7QA7B2ZBoMYpwdf5yaKj2X9kSxYg6Dz7dv",
  "key1": "2Be566GuCw1tHPV5Qno9Zv4PKj5DUqYcU45N6Zr83XEARoKFeMaAebK2bTXBtrLTWoDYjCefFj6zydbkws2Wo6aA",
  "key2": "3wCT56MvpUPwKLJKPHqR5VYdqKVkAE7XUjGpww3erGXCuhKoGSmSPUQZxYDi79fYrtrq2pjhjwF5sM7WsXWh8npq",
  "key3": "4MwLpb7QMWmQNDfgGCQ6NSfuw7aq1UqsEBjSac3c7ic9XaTN9usuL3JSMURn37t4uKQG6h2VLenC1zw9sjR6ynZv",
  "key4": "249VTQV9uzpk9GEkX8JfKn7TSEaGo5PGZzwXmF53ntSQXeHn3emgo81eZ9UJp8YvMLN65pBG6ArzoetEGpCJ8zUg",
  "key5": "4ra8L8prnqYoktoHew9hkerTBdoLCDpvnPHvLvgqTxmtcCbbLzBPxJzsg2cfMGU7G3TuDEL6mT241xGER7ijLBNL",
  "key6": "3burKD7Jc2v6n9RQjV1ib2Fu4YfwAAvqi7pyQpFuw3vLJzEjUzhMXsxf1PBqUG1NJwDhVLooSx1yYrR6iJ4eetGX",
  "key7": "2TfC7yhB91PEPuX5oe9JoR2NRK3vFh2gp34UTzXCVBEunPfpiHCtwaSRiAc9S5VtHoxsUzdfzmJNAffuwTqkUM64",
  "key8": "3vjTx1YmFXcgixMC1APQtYaR4FaoANYUsBYkWV4GvK9MChQU7ER3QhV2D7GtRQtgvYxPiUJ4LFsosjz8srmQCpmZ",
  "key9": "2LP4Xw7aaumTvd5oh3UWYqoFExfcXw6NyP7X7KCbsvwQLi661bw4S5Ay6biMD1A77Kkmpgm23MSzscmEsCMEH766",
  "key10": "32CSChR7HFQjC4ptyCsedNNED6UQRj96bnUW5pdPRb4efjeTECpSNjnvqfckJdYC5JAWdroLiWMZFqoayEwvX9Lb",
  "key11": "28MyuL8D83PyqwHhy8mufNmkym3u7CYrkFUQ9Xdj33XscrYiqZe1nt3Qj8N3bAhct69aDAXQNhgfzTpECQkEDozC",
  "key12": "3w4MYwhRWt5Df37kZzwsbBcXKntxJJRBPYiRMgXEqL4R4GTrxPb3GEFHKk78SXjypvp3tBtSp1TJK9uN8ysECMEC",
  "key13": "AiShWyjgegvVQSeNPS5c4bprxpsW9z3w5PLk6tnxUSKRKXo6Vj2Jye3oP3o3mb8HPjJdfsRdaq9GdLs9qDf2BrC",
  "key14": "24WzibXZ3ZrNadwUpSucGSKiGBVLtxXiBq8GR1rz8waxpNyh3kSVwYKAbGoM2a16Eep1qApamQAC15ftbnK6UvgU",
  "key15": "5cCDjkwFMTEQRxwtDEYYC6Rqvu75Q8e6HTgLKQNT5cZevxUU3DAew7NnyMHdNZx7kGeroWwnQAJHMiZvjmTmTyXP",
  "key16": "4YSs6PBWZhbesbv76EL3j9fJ38sZkCcD3AgQav16q7E1uW1Kx2tHe23GxeNW5Wau3dJAV2BHVfTLW7SRjQbUrkQV",
  "key17": "3sLsJv2ReXm4XGxF54Y1yz2kiRnBXbq4XCPbtHk1eAantfC9GvETdWWagqDBRPtX8ahMDLUS1p7Egb8JWBC7rVwE",
  "key18": "2SKHgJpBNXUPY9hufHcnNSA35zS1DMFWX38vuJj8KBZcKXhBx2iTXFAJGD1SES7MHFBv6gitt9QDBXF4c1aMmgQE",
  "key19": "3ag86wcjPJxwDgeYPzPGhbzdQo9TKuNSEpK49KPdX92Vg1FrLiaRNyTjekASjtem3rmtQvg4MjMd5tbWYKCDSEUE",
  "key20": "53EPixLnZztKz1X1Wr8sG2d28VwUmugAbzeQKMGEfKVjkayViCwUHDdwRB8oCFFok7ngtgRUK48SUsMxbSPmhm1i",
  "key21": "4ibEzTNk8anhTzqwn7oiG5m8ZFbAVPuU52pxSKacuUGMviWVdqa6FugHA95ou9MVfMN6xQsXHnBuxAtGqv3N7ZLk",
  "key22": "434cDJSoBEwmcsVTB7kpQ22X7xqgRPKUCaUpQEmpBkaHwJxqHdKZHWMbTTcK6d3t2uxFnqzwC2zAijkybpToC486",
  "key23": "3619K5npVFYhGQMn2i8q49HqtJyYcVkCKwHMcyGsKBw9RuVFEuUDWXt8WWBStj21fU6gofNo4tufaZNEUFf5oFJK",
  "key24": "MEkvCjQnxhPUgsjkrv1487p5NXqouDA5v2js6u3Y6p8mUmPqhXxc8CmsnQPuRmNNp8UgMFf9cLa6HJi79k6Lzth",
  "key25": "e7LHfJR2vUbRBdudmbHu97HRvzGG23qx94GEwGusvrESP49eFkWLuiQCQGdXNDUiFyf7FTf4cW2rSmm9eJcHLg2",
  "key26": "2HHNWW9LYTF8JEY51cgMn7QyNCiFBAuf2xAoXxdKdRcbh1Maekj3gj1yT3u66Etx6qauXsgoqV1tvEZq3Rk9PP3A",
  "key27": "2YfPVBvyGzhG6z8e3tcHkFaziYuZPHnDaHfgESfeB7v6vYsNRrjuKH4LhLSdPjkji6dBYqyRoNjLgVWhzu6Lf9TY",
  "key28": "4iK8BM33tK7dfK5TufEkcJAZEGYkQXGQVFSWV6kfs4x9NY1AT9nTquLPFuN83cHFWo5nMMR9EPq8NryF8rLVUTiR",
  "key29": "5MaLYzqZ1bHNpac5Jw7kPVhm2xfbbWGswK7MmzMiPkXNSStiqk736md2CXaPkrd13rTFJZuNyydME4ipoNLVwLuU",
  "key30": "9AWHL6gC69SftQnU8Hw6Dj7uHjkrHDfnooxcsoyJVmixKfZZqGCrqF19XKXaoiwakgFY6tT58Ln46E3R4XbnBW4",
  "key31": "5C8GLZBX3PBNkpevYdHsmcu6XR9LfQq89umV5bffr4sSVFUaZRaqzTYTzPYkmLcvYm7ZXkRvbBxn4SerP6TnvDSQ",
  "key32": "3LmJ9dGDK2LHrvHXz8Vu8SiTeYEQCW6uLLSfoxHvGqiQCD8do1XFDkid7NZMYPM7Mg69sZQfS9DhuijF8zWZ2pva",
  "key33": "5ZpuCgcen3HphbkdffJLonnVn17Uc5ZVdDgsEX7SThM2haCMrxcGdpHtHDc7UrYxUAgoFr6BXLpfRCKQikyuVNg7",
  "key34": "Xa9sWGYQf2F2UN5e3TbCe89Scp4VAFkKZkPx9Uno4QkbExJNVc3ex5gFstrLsNcm1ZUnHnXAzgmTxVGryk61VsZ",
  "key35": "4YKAnQAHCX5ZmeBZ3ugaqt5xoxRURq9MT52WQxjonodsEaSfg6Y9s3m4GDeKZJMFWWUgTfdwgoLJcA1WN2S9YmLZ",
  "key36": "2h6FUYjqCWL89A5bTZJgB26SLbv8AF1T1Us2SeHLtcFU1vGoVhdPz5h4wsox3kNE6eG7AqaXEMvLJwsCcEM47Ue2",
  "key37": "2s4bpphb53dYQVy3t2HuNV9XrXZr36QYuceiKBNtzr6TFAi49UdFij4u9CKpdtLKNuHAQSbha8awvdNytA5rqX79",
  "key38": "4vHj6ZYgLY5JRiAkfPnMBek8nfJzm2dkD5F4UnFtvm82FySPJgQYSqw2kYuk89Zz22vwKoCiSv2V3DCSKHLRDWXa",
  "key39": "ThEc99S5CyUML3spBfNcXK9j1Dop8mbcLPGdneC5MwCFd1ShrL85q3rMvGN7CtmYwC4nTqjoXx5QB9TKXmnpMvb",
  "key40": "3CgZQ5aN42LK8figktD6nTxDR2UaRuZSapqppxG1h5rP8piVXJv22zj72aT1Psd3N59Rys4jh4xFtSBp81eZGXnx",
  "key41": "3kF6Qy4JXdVYG9h3nJhpcx59pcVZjD8CfJFPvG6FbZZGTRyJKX31gNXx7FkVoNCczpqDDUP9qZjgzYjnxqsYG6Zj",
  "key42": "3pvJ35RQrj5gDZHimfjxr8mUT24ehdmtmaSNjYWcrYEoBM8imgh5c9NCjdCBXgb3RuQR216iMEJ5B6ikykBpJLHy",
  "key43": "5VEgYFZK4DEGNTZykjWwStDuCnwmXmvQh14Fkuwrqpj3yuWXue4WS8DTw77AwYwnoV869mXANbnmqkeHP8Cvk4b4"
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
