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
    "5XdidDh1Eprx2k9CzCdz97DeKyZMEW44g5xqfJoMp6XyWphuFXrFcpz3Hnsso8D2KhZS2DcjjdX94gyreMPnUABr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJeUUN145QzyAYFQJC2heGQQXwLV7oA19bdstgcwLdUtsUfvd44d1iBvcCu9MTGAgSissHiAQok1HeyiUaRuRjb",
  "key1": "H5jnBh6M6ZUs32tETkNigPHpDSK14Hg3TBZqXfkbzGfNhUK5Wpwj5tQ9w8rASNqmtvLeLp4ARzeAakyaHQqePni",
  "key2": "4eu4Cw71AUm7GJ9J4Bu9Lx1RteG6hup4fqUoGS7SnRnpzerpboPZAbd59oZhCxQrv4H6SD5Rvge8Xqn8CHNzfMYj",
  "key3": "pbvCjDSPcojZfk4bEkHFrsnwoE9cBjX2pcdSMvt3PTsavnKVmqV366LMqoN7Pi4Aog7zirMfn9QUfUYrB7kmASh",
  "key4": "5846feVPXPsPoiJK78zaDX8FXLpL5wBxG1v9DNVpanSHzAvyoAPJr8GcMXVLkDj2giHZD37ABC3hn3WerDyNa2og",
  "key5": "21v1HF5ywdhVLkswmZnvra2ewa3fomkHYT2kzuzA4aVG7s8JjR7aYbMcMJcbo87rjQ77DU166wfAhhHEKi3urb6c",
  "key6": "5D7GKGkMidYUUwHT4vDvezSYf83y4hWUryJt9gZirjGAQiMRTRi5LomsCPWrCKqsjx6PfyUutiZSVMDFBEn2bjU9",
  "key7": "5bFNx1WBYVUPLUxEirjUCM8eunkQZrvEheYowMaoAcgS8ZAL48cMfyT6ohMB2cfjWzxz788mvBLSTWS4cwUg8GCW",
  "key8": "5knVNiSERBPPitu3BM8ygscQqXuMaxKyT45A3qTpCe6EroQAdYn4oy69eMiPBwXfCENrRE8UXHUxcoFPxbKXns92",
  "key9": "3CAJhxeNEJejR65j3SbjjwurA5LWqf7S6H2kzBmZJrN9CWF3oiNDFibZ8GhPrQsYcZhSnTQ8xyKJNVKSzzo9avBD",
  "key10": "3cHAUFVBS9XV4ktzoDumXejfioqrdmKqwXdfAt6HMcZJ8aE4PYKfABpKQAbprsCx36kjJ3a2e9f3EnPbaEvX1tfY",
  "key11": "64toQizSr9nZj3fHAr9MX4HEMKX645hgY8m5MoNxFpgdBsMZroMde4kc1Ui6mgiJiTau1uEsEvwtfwzwTPvESzhm",
  "key12": "3K6xmq8ehQ7sUQ95tp53SCcSFfJRF5mjaYdYp1LwyEko5qMXu4tx8vxZeoAMwDzoPqYndcTgCssJKfczRSeUqrfR",
  "key13": "2zgL7Y8Uj3ZcqC2xUBbbR9QoYYhzfBbQcFb5Fp43QvrqE7B9mjtLLLcc8K2TqC1AkkRKpF5cSKPNS52xJEraKdSy",
  "key14": "5NLRUdxdxjt1EUUPowp1rx1FEBiEtSpakzwWMWqyEXMLkVw2CrffnTWkqfjEEAHt4rpW99Vp4SfJFmG4iVxrvijR",
  "key15": "33VWb2LcFUEQ1PwZzgM7FnfaSxQAgauTsbrs7taSkHBLGmi2EDg6patawborawguvYCm3VVNqFH3qPMXXFDFez2v",
  "key16": "5UUk7bXW7ChGNPNdRyV8omiHT6oNaiwkuWpd8hvBKHZ2Zaikbv4o9g9Hzg76jtk76f2WQw8BaxFfjejNkA5m73rg",
  "key17": "2L2qv1nYVkRvU7Ed3yxhRrP6ZXUombBHKn1dhtfiLmqPYCj6srPjqQUy4PCvHRsCW1EGrFLq3Ks9Q27uRQ1rraf4",
  "key18": "5CqoxY8gMJVArsoFGKDzLKUKgFrmwoYJuXrRunYTGkbvpzZjHYn6dAJrgLPpzhFLC3fG1JoMFfCLmgp3LeDzUbKc",
  "key19": "2bjRVP41be9KuoyDwkTLARY8m4QosXRR5SiQ6Sw847V2QX59bGRTdmCAxDun4TirCshrk99jRDR3dUDw1sKou2J7",
  "key20": "4vPerK4P7gh1qKq2GphSfKxDApYiPFhKgZw3ymPUYngVDZu727LcTka2UZkfcbt4huckXzRoYYwkqWRVKGhqGD4p",
  "key21": "LRoD78xaMewz9yvMdmKXYmCUkFvu9LxSx3SVTnUnpWYCopAb9dNKnEeiojDW1osKgi3PrCHaNvjnigYQToLBSYk",
  "key22": "5835hjZQmGrnFghW8YMWeQufiAxawZbw6xYHKHAQyRk4xuuKFHD11AYaeJvbQtUWtYqzsgsuEnTRzbCXRsbA3Vj2",
  "key23": "44aMGZ2MeyCgYarokbBphHcgeFHnRxKUkmJ8fE1qgD15pbyvMM4rszhPdne4zR941jyZHjjVAHVGzBoJQxtcJARe",
  "key24": "2vozVdvyxkoM4fyP2gc8QWxrUmQoqamyvGmtb4eKi4tZJ6SsM4HZBVyrzo3xoT1WZa8oExXhPTdbj8SGEMmEt7M9",
  "key25": "3PvointaeHMbeQNjExYc7D93kJB5iq5EZWz4Mp7J71emt3Hv57z14nSq22Wb78cJmdDHPA2NodHnJSr1VhnvG4kJ",
  "key26": "5SNKuQnBW8aJ6dDUd4oc8RpZPjwpehQfyKtSWxKCtkhAYDxrDBamuk4KguDShFGXR2JTmAcBF2D8RqLSC9S63mt7",
  "key27": "26zdqFHyUtjLyWtkkJwfg5Fergctiy75dAuF4kX2gdgoBMpLhXDnQ8XTV3VbwnFxfRGRHYeNivJbx3kGTVg661D9",
  "key28": "3Us6cFNE5ea4nvS65QWsLuPAXFJX6Echcx2s3ZYe2wB3jyfCDEKifyYLyJVsH9noM4J5yLZwczwrvswmQv82TzHt",
  "key29": "3eHLtH83TC4yaoYXUgEKjJmFD6JeQBCTHz8CXc4mZnHPJSfqQ12GauftPRyaCRwWJP8gC4hwfR72fxEDEHNM8VUQ",
  "key30": "46wKeQgT7SjoL7THaY6Be68SoWGNMEgr3p7Cxi8uMdECoVupkvonvLJEAnsYoaT5HaiC4SRuaSnQ3VfgVp1beoD",
  "key31": "uXUBqHgFYm5awyCUHHhi7xrm1nY1HGbXw8G48nk3XcLfcnRmNKt5Q7NeN15vajVsp5dofHZnafSbr2RLNXTR3Ha",
  "key32": "56WPJspeUW7P9VV77iSTKH3WUGqmyoWPvV1w3f7BBnYuM538147oxJ91zoCUn1GeULPie9J1ivGmtXpZnTknWwmM",
  "key33": "3PxqSmhCpeXyVimVeitLXxYGNCWa8ZoBzX5P4LeAc4NjE4cWP9HkeiqBgH5JAL6JNn96JFPsEN241HpDgkLYSxUW",
  "key34": "h9SoWiioQ7vYdnyUrBGpGqcXJ6co58AvVwfErAUHZbtZ5gyUGNPTC2Yh1wiWoqEV7HeqvcQR3mU2x1kU2ENg78b",
  "key35": "4RsZJuSZwoXo5v43hsEQYjtvo6fHGVSueMKae7TGXQDsvEv1S6dNkWDQTe3Aqo1pdznFSMVNvp3f4Wd3c4CkPtAg"
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
