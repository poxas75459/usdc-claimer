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
    "3WcqsWgEq74vR8f2Pez577uM2jyEa3ZPnEMZZk71LcEu8qUWNmLGBqGDZs4w7mKtXQ5SjqgR5ECgkCSFskHXbhAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gesm79cqvbfRSSGqiTCVa7s1pkKCFvoqsBGUKffPLcBNfTr4V9Ly76sv2iL3kJkN2WbcuFPZnERT9rxj8BXh5k6",
  "key1": "2z9wZruXdv45SdtiBrEXaTzKg9LAKZ6ST184Mx96UbphvdQSFdpeihcfzUD4eyuzkwM7uo3irmT2WxJMjFrqwfkK",
  "key2": "3grDWjTysh9iiYuRenevK1mQvnvsdpFd1zzTYnex1mnFmcS7BcPcttpLQiz1UVbY5sS26euxJbpkF6o1NLMRRKZC",
  "key3": "4G1eAwcJ8eSpB8uF6o6iSx3Sgg5NQmVswcEToC7GbyunaMGGpnkx1rhugJyDBw1edTnN61E83iUEGTzuu6g7pZyp",
  "key4": "4qKcy8M5xV9ieB6Me28XSoXmCaMv63AajxJMZP3mCTLjB9rEjLw8XBGAEYh37oTpLdkq76abiRXRA6LLVJpHxPPX",
  "key5": "5YWZ95rui44Qet4im8UajE1uXNDBn7arLwwWtDNus7KiH6SJA2YC1kNS1gnJBpBrom7gvvdKfki61A1CFfB5YPeR",
  "key6": "3TQPd54SAph9KP5Jj9nMHrsidhxcMtdx8V6qY93H7efFFVf8P9XjJs7GTbiqkeoV6si6xTQgsTfrYpmc6J7KqzVo",
  "key7": "2XX3PQM8uBZWbp7uddP4RLgir19Zgk7vfqXp7LzFAMJDUqch4vdHNmwNN5bW2xdN4snNcXE4kVsQ6fj5eBLfnmCe",
  "key8": "52CtB9CXSHazFyKgc33GBg7M5r3XjJPgtR6C6oUHe2yeyDRLSCHnRnJXPKJPryh1hFLaA4SXKqd69AUp6nXYrEkc",
  "key9": "4HhbBn6CDut3sw69x1FXBMnC5QZuBpSjM1Y5fnwJhYZ3aM4GzvxyHYuqsYrhQwVNVkUavnp7uJV3PK6QG2tHxZVN",
  "key10": "xgi82Ayf8ULCwx8UnbQvn8X2bpipKBVAZUVoLjXJuRRdgMCwc7cNkVic6H6iSyfb82zQmAm1g3DFS9rsisncvDD",
  "key11": "49ib72htoHVLJKcspdbPA985itahCe6YZVzvPmrHHKV4g59zjUrTXGLrTtrByC14hTr3pURvHtCWtysh7s5o7czq",
  "key12": "485sqvajkkFPhRz1o9QnBNt2yk4VX9zbLoA31ioAhRFAHYZZ2Pf5Gjr8hJfmDGiH3EY39JHw87po18ZstWpvZtpY",
  "key13": "41expmv8yEYvMNEoTTF33TcRQxPcgE84fz8Ancwu22PYb4TGybSpzZiUTaH9FktGtDJ8sA892UsGhTRz1y9k8nVK",
  "key14": "2zgmVQEoN5XxxYyZAwvpQsbZ81Z4Cm7N3VW7BgcM2e4GBJ6SpYcXfSiPh9U47L2bNNFcJ6TpBgZ1KrvMgrvZDrdJ",
  "key15": "3MRjX2MxDYHShtppWFkeh1ujRpKNjuYFFFUXSPMJDodAtm3vJ4QhXoB4Cihz4zLdg2o8WWcumoksXMm3cFaUT6zw",
  "key16": "4aCtZDyXN8RySr3TEpZNPiUm9zPPqMJZxuMQ4SoHnPVkDUJ6stQ9hbyZtxu7Ar9UJEGvHPe1i2FvZy6ZckJJa1P8",
  "key17": "58tVJpQ9dgm9bjDJBiKQsVsnBLNh1HQzdiJcov1ATjnKuLCqtYLv1uJVgDLs72DyspxoB8i8cKpsem9B9QPQ2mLE",
  "key18": "252suMkvnBy4czMJzPgu2xv1EfLgeGJRkPWSptRw82FU2otp7WBY4Ni8RsvT8gViBkdAqb1mPvyRcpLLSD73p7RT",
  "key19": "3Pc8VCpUR7QatWRHPkt9FuLwZ5qn4pkXbfHPgMT84F34mtxSqkcpAncwftTQ9f5fGqEPdWncfPSyeBGJZuJWxPHn",
  "key20": "4AZP18Gn6eb4an4tX6Dn8ff41ipHWe7PmX9LueYwfzpz5Jxr7GRTNLvBwJJJT8SsWeqFNKdqExWt8fWkqvcHtHRX",
  "key21": "3qNJzzaaujhCVaSFN1AfSyCBGQGy4hobJhn1P2RWybYFcAW3td7ie6nAFygri4PzqtRY6QDQfRenrpcjWzKJQDVM",
  "key22": "2PBiogRL748kxkNjpp593gM6cy9qMDjknokU3SSJoEtXFP2MYGvd1hczEGGd51FuYmwnmBvnxMS4MJJyJSV5F9GL",
  "key23": "41ehhywanhCBBuaEjS4fSx7bxptcYywiidUhqj2g9uZmNdE661ZoY3RbsLNKNHMwp1BbFj6uEgnTZ9tfSzCqdTvK",
  "key24": "5nkJpcFqW278HXvcPFhtHuEVnregq69jYSQmTTaupQXM61PXE6ocEhya6H6X1HXbok2KKLbFosD2xzuQQbB7NZEW",
  "key25": "5NpzwzkuQ1XMxDE5QbwEePUjoofPnB4FpCtMSHUrJA3s6uiLuKqY8aed5mnyKoko7AfSGx9Y58nurZuD2K7iDBxC",
  "key26": "2Hgmd6r7uWZfL158ip8irKkz5iB79SioYP8qMQRxdyWfyfitKBcdFaky93mey41ygYAhHWvLrJMdHetEPQBxghKE",
  "key27": "21vAjwHNh7weG6hAaiHZ25VMqP9rLLQ2VJki6pHSAvAeq4kwcapyXJtDWHgwLMKAeBWJyMqhpEigKy7xtmB678N2",
  "key28": "4FWJ1HV8nEaZeNRKn8LU5x2BqpUceW6JsCw6p5qrMsXHDPTGDRZrWkKpasZaZ5B92kYzNqnVHY96Pq5fVmrgUDyJ",
  "key29": "5MW5dJUDtBsMRGjg4vk4xTDJGL8ZWauNzLe5tdPT7rSjtwjSD8m4XQvUFwg7tNGcj39W7HZSaJ1KJpTGHEworL5o",
  "key30": "4GmKsKbuLWJJXaobM4To4urUn1AiPPK2rfhj9gYFEtYF2F3sBzYfRuuMM9ogjtiEbTbfoBs8f31KVXcBQ9QbcR6F",
  "key31": "2qKKGM76GFwZoqFLa2ZNDEafhk2uvYaMMCZjg4ZeTVn7KNrbBJY6rNp8kzMiAP266GM5ZBo5eJVVDmRGcN1eCPVv",
  "key32": "3Scg8DZLuXWuiM3bCGWzPKzuToAALS2ejUQrDS6eWeT54Qgc5p7LLLeqnTVvgs4pCnDM56icq1yS1BS7LHwWSRej",
  "key33": "64kVnRGkJfyxABD6JWaHuSomLjqnYcroStxD13iEtNgvYr8p8ME7ZwZsemRJCu3Uq2xzodqPS1TJ6ETeMAoTacrZ",
  "key34": "5BP6XTtaskCJqLbr74wfP2cKoaLTqfTfpMGSDv19kpVVbxfpDZ7B7JKfMKmoR3pNYNPjZLDHxFicZjzNNWJKv1vt",
  "key35": "4SyU1pozHrxVZSSCAmEZAEe1GZ8TJqZJQ29N6SS1oyDWmsj5rUqAiKFD9RKfyyDbgA2jmmhhwyzTMc7eePx1VwmP",
  "key36": "iHAwGf1A5uLiHHKetNDUmeNBjbTUK95MGK5k8zo14HRC61rTyDBnc5C5n6m1aK7eYU1J7xqSG9JZU1TMEfKsFBR",
  "key37": "3Lm8Yz8NTPfDxPqqa1XtkP8FxumcopNTNXovv3JPun6Rmu3J2P1yMu3biFMT8sXpgpvbm9uZbkutcKD9gQ1zaPDD",
  "key38": "2jqqkLwErAMNunHpKFUvox6wrYsZpD8Fyofo9K1yMQ4TxtvDVaS478HSSQmMzurH46nKTdYYcCJxvxzWiZfbZ51y",
  "key39": "5R35Rx2CSTKuSZ52buaKwhdz2RDFnbkjswS1Jdqn6qi34RqKNSyzZZvRd7ri8XXTwUK5BWk81ebuyhALBbUiehzG"
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
