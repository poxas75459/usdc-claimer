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
    "3iXUVrXptVxQHoB59QjfdsPPGgkgZiuPQhpCm9qwCiPSrYdZFf9TvdTsKVdomL22xM6yNiR9ce8ed25JNP8yzeDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNXaMXpbyqa96Nbx9ThgcW9ZzouTx2euidrobsLnqMJUQZhVNtXGkLt4sXmxVFG1xEiq3Q39utu4E1arr3bBHLA",
  "key1": "5QoXD4mAYjK3PYBZDPvWXFosWdq7sz2v2z2YYQtYaPsns6FegAq6fe26CXeH14LZE2LLKGx5R3rPX3rsZ47P3ckR",
  "key2": "3kVBfi7bnozNBuHziMvXfipRaG3UEUqi4JeUnhEospyMqteDjfjG3zMYyRtkRRzz3i1nYdhVMUmNoiiWMQJnhwjK",
  "key3": "5Ba7n1rRxjgKPCueUEToWqcZcTrEictQPGeHB91qkKDfbQnB2ucLVFW3TjMNiN1b9MdYJP5TQEQGh4uHvBtdp5kv",
  "key4": "57vmGX4mSBTXsv5QZv2ABXKy2Wz9fwTjWDHku9zGXjstFtie3wVkAKnMwd9kcnSRtwysnJEecsz9unJJawQxgcyf",
  "key5": "2tQfd6yqpKKu4neEobCmauUpGN5U7oTUNqFRabTw242ou4UFXdEeJELUTPvuEdP2gjUov8H4ns1t3My11tDB3W4d",
  "key6": "33ocLxmw5yZ26rjviXm7GJgBeNsp4g8QkSff853JfFp8hRMt2DhWvzU8K7kcQG9Y7W1LFecJA9fNj7ejQJ3nYJzX",
  "key7": "3zxLa1S3H5TZ6XCgLtpDuE6xj8JbLehbxx54zCtMtKXCP6Wab7q73iyDdPumVEdsAhEVZL9kGto3BxvyW3x9HTDg",
  "key8": "21AaVs7CG1QTpNPJi7LWXUeQFEacFi7GEmLeE9rEZ1Y1qrEVuaVX1mKRgXWR45Jqa8mfSXAFBW7fMGRTj26DXJ9w",
  "key9": "5oyUyhrsSjPDFGG65Esb5W6sqZdap7aiVfsTicbRXETqX9TtdYzcCtGJ7XRSUFw2S1RaexsNCuAFDuC8Ns1umrVS",
  "key10": "5nbF1UJxJVDTNH2LNRQDcY4e2hcsgpntvV2TMS8N7HAz5tVDPVrcCCbHwwtPVcahRcCdZtcDbdbtSjiZsjtfB6k3",
  "key11": "4FyRtbkoYFfE2ecZ6asP7t4ag9TsjwWddNURDjP2dsfxL56KM66Wq26XyAPA5fzuUTXthXQURcQ5HHYMsxVwSgr8",
  "key12": "3qozr61pxZSGHC1jNkett1J3oZfSgaYqLbgvrgDi8VeVwiw7xfapNoGBRXDwoAXN4X7PVJR7mVqdSzATYNVXyoe8",
  "key13": "2TpmEvjpXyXE1pNk7tTnvGTvZ3u6aC4LjhgVp4yxZqcYdTfmDhtx5rcJGYf26qwZ3Ds7cGdr7Da7onu1JrX6rSqi",
  "key14": "6RjaYut17Qugy4b2JWdcGL6BKWoXSpUBMwqvtquEQSiXharwdVjNHAMXWEmTugHEr943YQACPp2TDF5aV8yu96T",
  "key15": "pXiZumvS7AUBW27662o3yfGJ8JMvnbAHAStgjMqrhjXFQCdVTrmWQv7hXPXb79c8oowSmVCVtPKS9FC39xmi7uj",
  "key16": "5T9jdNpP3DM97BNAbBwu8uFkkyVKZDG8zoxBuh8CBS1s8iEbTYFSaUKXxhgHrtTUmdn1c16U6KeJ9Gc7aQQRWnab",
  "key17": "4Mr5RLLEZp2GgqgRvFcyj3JMDmJs4bM7QzpfSybtqudCvBe4j8MN4upXtWaKUJdqmjNgr4FvPbWcL9TdteFndoqF",
  "key18": "4Rt93hwbYeFki1XEb3pJMSQnw7G6dDyBHBZGHvyjCQ5Z4RPKk9PADBD3KUC2RPSyyapJv4EjDmCcC4Chik4vbVbj",
  "key19": "SuTHrSKj37DKSKPoG5E2JJ4xKpn8ttYco5c68QaAQsmyGpqreb8GzaFSVyWhgaS4u8888KtjpA4K1o2LWTPZhW8",
  "key20": "3yToRek57SMCUUAvkxDNJVXhspu9PULie2tXFHYfmcBizb4tyy2Bw4amNyxnbFnkUeWZDzmD8sVAZhiohhtZA1hD",
  "key21": "3qZP2FA89rGES62JjZbGT5kruSkyncpdivkHdAaT7Ld5kXx3bvt6bc2DeH9kP92nGfPk3BRJWbtQCkitRRGrrPZ8",
  "key22": "2aC92PeotESRxkTVr2auQX5tu13hFU6EyeosA91hXMGBfW5VDeEQvCrDxkAMC8ZtUzYtkKzug92JTrxdrKUL1LGx",
  "key23": "5sbcRhtSpB6wShbLh2MHJCixNJi8dCTrFYfj2WGoV6KCTBDyeQeXMfHSaR1sqo9kBEQcGz7GYojRr1zwUxTgUFgb",
  "key24": "4TzpDc9SZFK1wPG6HDg7crPtxz1VsF6RUVnB59jfwpoVKrcCCt8SMPhdSMixbbtkvDvxRtMsKPjBdDeKwbvezE7T",
  "key25": "48bwb9CBGRGuoxa8Xh8WMZTs6GTXeoQ8Pnyrjd4j2Z15hXKuKjJDsqMMAJKnujUrPP3RrW6GuiT4NJjNAK3e2iw7",
  "key26": "22QiXS5WH5NQf5G4Ma8T99brpBPnuKj8szpxe4CeuBNnYEqYjVqe3Wm1QB8zDLPiKmPTZ1vJHWjTP3xJE9hnkPc7",
  "key27": "4EbCuWpNGLMTovtg84DCDnoTdcA4f1Tyhngy5XeYH1gSSubYBYiRfERorEfkisMrWqnsY4ZRKTN2dcATKf2ueHeS",
  "key28": "5W77L3Av29bfayifoAYh8ZDguSo8kwb9tdxZMeVckLF2nZukcaEFEwWdmD3CDthwYySf17qKZNkxGsz4WBPYkh8",
  "key29": "5XdePmhdU1c2ztWHqXAdQSaGYBu3CM61XNEHT6kLSYA3AoJmeXC8mtshvTEJL4aPBu28zfzXptenK6ehWAetJSrU",
  "key30": "L8kvHZ86bRRwtJJ26Y87TdieT5UZYHgwQGteaPmyA8E2U1DTXXyd7r1m7QdTLXw6guNtqDdMDsAsQWCnW3wSPbu",
  "key31": "2imdYcgZughKuGKmcvfgri844jdm35GgUmnxSLZjMtUncRmyDmo7q6rgRExgi6GBdYzsdtNkwqgSsmdKxjY9KBir",
  "key32": "HWYTC1Wi19nEEqtsb7ML7AoW7qXnpKZHLxLFginSo3BLK8Yg9NPWCrauyN47TskmbnAV8RHPcwEDD6Jpa5PEJTt",
  "key33": "4nEMnGzCidJXAnz4g3nu2DUMDUyQbMC3XhRoJYc6T91WFwQcXkAwB79niRiXgHHZcfRE6bFHR1XvxxUKQsfBt62n",
  "key34": "384nVYwEHRhEVZhgXPAbq2tTqRyMHHbCPVThyHcxnxCvXo4JWcEJJHnq1NHGQqxsmECC4ZkhMJJvpBbmFjdL7WJR"
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
