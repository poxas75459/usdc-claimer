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
    "34cedVLKYzQ5uVPRs17jFj1C5Dj2dKGFq9rgzHJmx8qMvbW9fitrQ3mwLTmWrTYP6aFPbDw22AGwRDsLsTEhaEhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jz7WvqVj7umJoshFrsKFcgF2HtkKuSm2krW9eJA5cWzhkoDoCSx4kVj2dwrX3m5A8KjGK8BdrWkBzFTdMBRbB5D",
  "key1": "3xqrHE9fFSowPsgg5pC4uExvpRstYgefHUm4RHPACWoWWYriu1f1L9EyTkvtQnj7K24Cno488PDcPvU3fXYYz7KN",
  "key2": "2QKrpC1imCYH3JHeVyP7BNtxe4hFCLs6JY1JPv7YifEzz62Hb5AyVyiaFMaRtgCsbr9kk9EamT9hNE3vx1cfE2Hy",
  "key3": "4j4YV2UTeNayiMWaPw7LomVYyDgoVUZyAgG1LFRQNdiBFRsxHBXvw41faHaypPMTCqqvDfta25RRQLhCeJnHbemK",
  "key4": "5LdfTY5d1Fd6EWf1CfwGfaRhhkqMQ7o6fsHLmfg8b14M7ki6uWuUVgbTX5TbUkGyTcNdSWsxxgiJRMaqfjFpee4a",
  "key5": "37qGcvAjb8cz8nocxJrt6GhPJvVqEsyoY2vanB5ZKCLJ3qX3gttKSWy3BY8SCKB6AtbxrqpadEYUpfAdJVJQP1kw",
  "key6": "5fwhYUgoqKEPjPMQ5pbfPGtPw4615wZGkL2PGrWHgnz8N1XBZTouzEyS8KSbQGmnGtPzpAXHxf8MLtqcC6LGRxKG",
  "key7": "3Bkbe5KnjgERf6VRSyju4DCvR9PweQ3Bjvjqeys5Ln4eTaN4RLukqJTvZ5rCdhXNUgzRB3oMWMUHwFefNNQdm9qi",
  "key8": "2RLfsEE2A4dt1rwKh8o7uhDL9eLFnJY1LWpzbrgp43CVAu45mt1J3RAbuo4tsYbbVXpEr2gnVcKkJMM2P5WVwvkb",
  "key9": "3NHE2ZxBQYMZoiwx5y4UAcdetaGwRYeTauujEoewFb8mhczQWr3KYGLFYmFR8a8rN4s2tB5P3Q49MWfxGGFTaHfQ",
  "key10": "5wNbxkasddpNNXZiSfVtmvcadBzzUfBGW4m2zHED3KASd3vyptPQzrErsSXF1Vq3poucVajVwzkaDZ6zvHPwqMuY",
  "key11": "2eFdxwGVumpwz9cp653P3AdTPG9N8NcLPeuLWTLVDs4uhSWjZphX5PcWD357Q3e2hBv7SqYAQVk36ddcCQSTG1qm",
  "key12": "5gJQteeCVj4acJ8wPYezPhCnzz22GrvkJ352FZhCGUH14iqL7jRgohk4P4VruW2rveDZFxizeyKKSXbWyLeB4aGE",
  "key13": "5nfUhoTazZku6u8pEhRHNULdPnFAUYTCkticyonrMMX3RyMJmYj3RzY5gT96w7pjNDUE3U3nZJm6Xwju4AUBzboN",
  "key14": "BqNaRNsrSVG4KkJpM77ZMrrtmSjLQE2GhZr2Vr7Vui7VDaMKEDW5UdQRa9v1yUY7KPUMbhEKQqYbR96RUbnShPh",
  "key15": "2yLQtrMZ8bUthPJsSZdU4qbhSDekS2Wb6DGxyhLWQSNTESZMcuvvm1fingMcPyduYzYoGLLZJN2ze3fgvxoSQp8P",
  "key16": "57af7T6QsGJro9wpqfNezHZzDH4sQAfEzVe7oVr4NrpZaR9J3Lvijd114vnTmDwZF3RWhFNf3161eKBn9ghiLxha",
  "key17": "3Q8BYUaJ4t1JHEPemd1m1NMbmrBg8B8VEKCfQLfyn8ZfSdk1J1nL4QNMN21S4mSKQcZBasdbDXsGBnSYV15bkzaN",
  "key18": "5Gy9E5ZkMzG9cGivZDjzZrVAywMABdifMrcnDUUSZvfvoDjrYhNqefLpPybXR5oKCautbuHDw6XVtn9axN71dN6H",
  "key19": "3L1wfYvpomkZis9D9mDWacCTeNE9ATtcj9XEMvde5HjxnVyNBCHbACzkWib7hCAp2SaGfydrACx7TRFCMa2WwLYE",
  "key20": "5WkGhW683n9LRr8m6fjmqLbfzTADWaRVFpA2fTcDi4FC2K2yw968nkP1D5VJKQ5ZQsiiEnBAASiyGNeaP9PXgh41",
  "key21": "2anXysL53Qf64LGxvWhCUmE73ffwVMPhNyHwgv8sg4URSbUTpht46FyZMuY3eLDLrJtwsgAT8kBW6uDCTj5cUy33",
  "key22": "2LrXa6bcEikSyYTeUKYqGsL7rwicUVxjffFFSGQAqURiDpzZo24mKLT5WMHYhbheH9u3jwvd4nbMiR1U2GtfLwzJ",
  "key23": "BNG4XUhrkZUBx1NNTSFZSntNM8HJshcY1VXT12goCfn1dmSTpMNDxXuX9V4SLiocZQfXmM7unos4VXCnE1tjHxt",
  "key24": "4aNiQ6LFVQKiPVP329BsqwpVXKdGTZiqDkFUSuhDQMUKGfe16AfQecU7Z1iAaG6cqSRsf9SqHpQStbNq5k8fkJ9L",
  "key25": "4n9eR8AMVHo2M9cgSf8f6hMNbEdcQFcTzubpKfx9XBcg3GSj4gKS659kaZjGW8JiAtTe5FusTr8TP7mA2JBKDJrg",
  "key26": "4XDTweQxv6geagMJMo8HEkp42BiLAGCEonwhxmsxXqsPMv9PHWubW7ADNujuVsA9gxY2f2kJZZpEg7kCDzQSgGGP",
  "key27": "5tUHeHPKe6Lp4FyFbpKpBSzx13qkVWi95Wp9rNSezAPLiQ4SP5y6kb6om9QXdfCwHR6HgJPXekPanHWDdunFwp9f",
  "key28": "2SaWazUQTJywzdVPwNcPtdh4GmRPQKyCjER8cXnK4A5dEeYMLcJVh2w81CuDyL5pRp9GcAQVk7tcNnfUqWLUkChm",
  "key29": "53zUbApUeFFTNQuDtH5pzgVousGnJEamkZ4MpGYqMVxd8FBVAKDcGNvkDpPETco2GHim5E6tLhY3qkDbkMsJpcsf",
  "key30": "CLJEHrsfKjSfbavJK7YFQED8YDQRSwfwGA3LvYSFg5ZhHq51PwCMXBbD3cu7dVgtBahqdZcFAq6ZFTrrtBzRYT9",
  "key31": "5A73ojVwUsoeWvtVSHZEU3nkCLmiobwqwEXEU6oNmYQ6QdkKYWs6b1rkdf8VQprGaBCoHGMtws1T137cEfBmfAQu",
  "key32": "tbGWuJMAbEtqqepTpTzf6RTT7kJp57QV8267huFqhw75PsfgykwKNviqS3e18iXuDLu3AmxjdpTasCSfXKAhcBs",
  "key33": "JqmD7kY9hUL1zAzN8joDbvt3rJTi3XkPSzEEQYXc9vvHBV7BEacPixekY9FH1wG5sh3gigXr6bFjXa2cxvptLBK",
  "key34": "RRtFoBuDaN7vRpuLgiRe3rtsqSHwLjF4WJyYANqDHxc8GiZtx47me4tVJivB69vLgRk7a1UMQeWZEwFfvtgbPke",
  "key35": "u5TfaUDLTECoXV3RcazpRWpjLkkEA3yK4mUrvwFGZd4pfDtAWSYKBgy2i2diCdBshKwMf8B3mNgcTjCdJVoFvp7",
  "key36": "2q6KMHTp1itvd36PuRt8S1Wf1JXTfBHawbcyXTN2N2dJ5gtq1EwQzCciQ7sZP4VSGVJqRZCRiLFMRmwWsdMZBQ4F",
  "key37": "yXsKHFCuxaKd9SK3a4gYp31f8ZHiKdJ8h23PvvtEMQuc6zpGQnDTdnvVqhA1PaDp36qVGvQQZagVCv4C69TczZ1",
  "key38": "5vusTh45SiCiC7LS4MjZ5n2rciQiGAYvJNamYngHJoeZqoJ2cHANKuG8f5ceNnkePsVwtbJY16awyqmkh4mrJyW2",
  "key39": "4WvToLDBKryo6fXzRDaWyejQsj3Rdp4xo85gkw7BRB7hU7S9i3mqhhcWx71R2BJ6GC1vnCQkf182jGuxfKBUjXkx",
  "key40": "3pR3i7CtPokL2ZAEJtJNCAud7Hz2cdHtup2QgpjR3Ecgh9y5RXTdLJitZnZjv5ruP6YBgNoezJtrimSkMsCzPeQF",
  "key41": "4oYrvdWAAgdcxPSivg65X38Kwz8QmZ8q9NcFHEPodxLEuFAKEJs3MxtQMqja3iCyTd7aht1mxMd8EZZk1GgDt8BQ",
  "key42": "24Y6UNt4BwV1zEneFHQkazHrdVhpFpuiaENy8sKppcV5qooaoh64ax1LB8ajZmTfW5e1yZ3WU7EdXMjfrYL1Lgcx",
  "key43": "qC8EAewqqFkqBvJx6d4WKkqyWQqBWPeytXoVssFb7rLuELMGvWkqwE8NRxNRd5aS5vDzFjpJBVTQbi8bz62FNfF",
  "key44": "4sGyXo3YTTH9kNvNuDic43BbHiBdS91hZ2Fsody8Amj63o4m7rNXZ1rcxg9aEu7kN118jo1AbF8dPWvGHXiFLy5J",
  "key45": "3a967Y9xEYFkDrrVofnG4LghtNarQ36XhcqnxKb4JqfVGz6yfsgE7jRt27F7Lu9yKujh2rnqabykTCLVfLEfTgub"
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
