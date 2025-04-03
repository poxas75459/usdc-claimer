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
    "3ZiLCUKi1TKpr3A45iPDWgU1SgJ4mdv3r6F1JC7UJXts5GrfHA6b6Q8fMYarTxRrdn8RvDfrXGVHUtucAeQBP2fJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDAxgXc51rnaemwcH6XAiGANgdqbXkwsAHdyvUM493Wxncjg3KGXcsFoiZyRBPZVoBtB5zK5Yr6wWz59vxWr3g",
  "key1": "4fiaX9A36J6Xy4btn7RYQBy5PjoLmmjoTkckhEPbcT75hQpymUqFonLJBv6VmRGh1S3Gp2uZ4vD5BMTRuNg8Cbyd",
  "key2": "5pRhVFDaTo9xzyikt73998LQbqTi5y6Px2F7gKqpNpEMSH41pNH7ijSF3BgSBmLDLR1QJCsSmMA2veMJNRTqbQVT",
  "key3": "9or3BADbYzShFsxRxWNeQ2YQRZbsitymcnULDPHRtaV81fNCy73TBWP1bQUfEmFjCD1yWJtY3h3HkAHLcLwVvyo",
  "key4": "3T4f3wrh4p6otnme5LHcUBR2MuksmEmD7QVqqLxJcpTm5HrEu5FypdXZxQvLZHgJE2Chhagy5xTZfzggzgQyBnuu",
  "key5": "fsaoGKV7tjRN8f79gwT2Sw5uU5VZEm6K3B9owEdSZ14pZmoeRy1s3GL9w5jaWU584yJFzpkL4GgXuuK2mCAeMxq",
  "key6": "3Hh3xbJfn8KuHkvux1pouWG9eQwSWMfXwKcjSCGPowm9rzQa6RcmaqxEdGTrBYxSzjDNwZArHBGpGoQYcaPDFrd1",
  "key7": "5TN7uQFcr4mEbwYFhrZ8aWtheD7VF6vCV9GQDob3aGBHFdPXKerp9AXX3QDcNf3rHbp8ooFa8jvwuty5yhFcJbNa",
  "key8": "58H4cHzu4N6bMYGbWDpYGiF6DXxdXH41DDzQnTYzEXTBhbMBuqewvtwiGPRP4hpZw9h9RJPRsYwqvBemVvfyFmkh",
  "key9": "ZGzCXyhRYPAqw5uxocWNdAhv69TFWsdhkna1Q8fJFEJDA9L297FvE1Ej1rBusUvLYx2FUqDKWsc1MM41VJQndux",
  "key10": "3skaQLJSNH7wwpxDydKwdK2rperYewJs2bEiX6uvRw3LJfxow5wmPUMwATHNWHpD43jdX9As9TRPuJbPeHz5EqGf",
  "key11": "44EseoYfgjt46f345M8YHR3Juv9nDLkQ1APyzk6QfGscQv35PtvK62cTbZ3qqb9J5oqDHRnEBjtaAzGzi8MKkJwQ",
  "key12": "4X2DDuUCRWKvFccp6JnsTCChEZNRSTmMmtD5Jtwg6T6N1wdzaLNNoPD1c79dZoLkjD2pZ3gZ6AZM9PLHxb54CZB5",
  "key13": "4Ev1ihciX5BBLdgXKtVq3im5YyoLjnLqL2Fehkdqoaxd7dqowYTB1Hau7z7rwgKHiCT4LK6M31fKD1wLw9Yqfhoe",
  "key14": "3D38XgWCecjdSgnccjDDRArDha7AHfEtQWcAWQtjUEmzJ9HoVkgHU2daTC4gPKSoAxmgEf5va8Zcx133xydAo5rH",
  "key15": "32u7W8gjM9sWv6vBPs2nco1oZA8XPnryw8y8vBVXpnJFnkg8fuv3LNxYLeNYfSWZLNCpCu6RTCLKLkCxn9mep22w",
  "key16": "5fbrhntpcdnL65diT3ac5phpW6j1vYU99n5JPYs7uyURFAcT8ACjyHaDpGvqhD7vxwYodWLtZnnWLzqA13ZcCZBu",
  "key17": "2aTUJC25m88Mhewky5vYK9nqHPQ91NfGUnWbe2rYv2AXBMLEEqr7sCb3r6XAk8P3E3JZgFp8chFzJ8YEuQeSRVXq",
  "key18": "5HbFoQ6Ze9QfZuxpADFCWbU1bPrTduaAMbseotoLBkcQikv9uHV4piFeBtvd4jSxFHtUsqVKQCzRdMZVbxaApsaP",
  "key19": "66xs9QfuVi1RziujPcWkjLSi6aDU2TKpDcZKhusKCBH3C4EGNgBbFZxBofw6UtVUDKy1BCBrBX4EdksFNWoQ9CJM",
  "key20": "fGRfbTUUaXRSAS2XPkvw7Tw5aguywkZaVVserCp2teZQRrsKuzTTzWZpA9nHUzCRhBfP8AaTxQ6Uf1BB33LrYz1",
  "key21": "pQ6Pbo5doaBM1CvCE7GrmVujikGaKVv8GocBwxDAS1bob2FyUvm3UHL5PcFeVm3J5CWGxk92MTMoKT9nszi6sN8",
  "key22": "41a32oyAt32149hrernbarykhes9mSiPBEZamuJ2Babo42YwWy28whhEjtNZKTPdZRmaEMj8z6PmjNDC3mBYyJP1",
  "key23": "3B6fWhMNog65eGs29tsVUzM1nGGyN8U6vBBqZEW4uxQgPWXJLhZKQfbeovd8be8JZWTVNQtuheuDLaN5ymjEeRzH",
  "key24": "4FiGTYk2VVQ6MyPDSbw2dP6nh8ZMgokwe9DhQxkhmZpKH9D9eM1kXE8gnewTo6rAV2kAEQk73rvhA2q4Tr968uyd",
  "key25": "2GMSR7PeokAnQn5husEx4xuv48Ur22hhuMnduZKRuLSfKdXeD7HF4xprz9aFivsBiTZFXL3saiL1eCNAwCjDqHyD",
  "key26": "536U7whhKbNvg9foefUva9DZZD13Pq8hPZ8gsXqRFvaqCxP7nPorihmayGLo5Argtz2z2co8wbcQusMQNrzmZqs7",
  "key27": "39PeHtbXvUaGfYAdkEFLUw6fTa98fV12TCnYgA3VciKnCf9mCdG4dsCqa3tmhypVqwiXLJJW3eTisCjC8oF3iFH2",
  "key28": "3zD4qbyRuXHAaBJF5ABZ5mDzhH3rBYwjuLAQgcMdovAkRCwxhDdPRDrL2AXMKMucDD76JPaQ7DyPVXR5eBHa3w7m",
  "key29": "5diPy77BfqRRYE2nzra5KamSuhxLLiBbUpymdiweEQevf9BV8hkkufvRGkrPnfFUxE6CX5ZaPGCSuJGbPZ2UmMLW",
  "key30": "4SrbfgsPrUnzFM5iiyLU1crjXCPaVvmm1eacezNFxQNQBHyPQNGZQmzUo69zbGF32cZbB93uZSUq1vZWoHbqQTgG",
  "key31": "5jjoVTLi3WML8dwW7GJeZAApxLDG8hF5jjoUHZDLtgXEQQEBmbDhEProVQjz446zFs3nvVVyz1pKBnfdELxQu7rD",
  "key32": "3174MqZfX7D7v6xNmCpGspJeEUnbk9wT4dLASghSW5tGHCWhS7v929hp44H1dqATcMyXpiJp8CRG64wjkPFbYCsu",
  "key33": "ktrNNx7fsNR2brhfHSiqecQS5vdwzabE5jY3P7AwcRrYxoZjad6UFXK7iekMxsBtN5yRpMFvxykiYTcdDyj7fok",
  "key34": "2xuqVGdTPxT22F926VrAehGcChvMGWTjADMZxjApabSfA8iNe5pge7V3wfJG8TFRns4AchQ9UHSs1bVtMisoruHe",
  "key35": "3hrN1rRcihdDUL1V4UeZPqHNt5sr2Qx3kTQaisJVs6hq8RkwMo7QSsTsSxJj4ZFf5sjkh2q95a4go8cJH7E5kRpq",
  "key36": "2Y3dfbbh4dHfVjpAC9RQym16eUHSPXQhfv3biVqdy3wYbZnaBS22gkC4Xd5B7LUqAifrkoFpekNzXJJ3BY1PLUpA",
  "key37": "29vaS8dHm16VhvvtqvUnJUyuQCXjgzzvxLKPL8XeL2SRgTk7Uz91uTeGF3cfnwsVZg2YCyPTk7uymqqAdbHphFRq",
  "key38": "59A5DdRs8JWDhMLM9Hm35HFw6vA2ZaHnnLgKhPC6g4Wry2w48ARC5sBKd2d9DerDMbHVaDYxYfJ8eHuZGAtZLzPN",
  "key39": "3rve1fR3BhqpxytFf2pMSapn69i7i5sqeEXgqwhjdJUtskRgjvZPemXYyumahB9i3rc3kWQohKswRDsrBVWhmiwr",
  "key40": "m5So92eXGtgzeq9MxcYh8QTCXfiUi1PvubLJihWk1pSPx84nerpfHmnvrVXRjwfjWpEv5WzoSQpmX1jmzrxJaeF",
  "key41": "9zS8VeDLYvXXuosPFRpBjvPZFUrryWzbYtXQ88q4HfKLXRz1YKZ8VwhXTJNdX8aWQuKSStAeBvz3KTjbFfi1G4S",
  "key42": "2RwBK5piEsahjQ9A3YzTxpNq5yGdaage18XvEoGpbw98A3ia27uskbjDNPfjxFsT5uEzHiD6jXqzMgT4toQKbK4"
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
