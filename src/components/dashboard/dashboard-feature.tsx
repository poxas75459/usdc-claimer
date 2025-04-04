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
    "5QRMpQh9hqhgsDYVRAUyrSTFnDvyNxenJiJWB72VeooqmPWG9BkTbN9vYC4A9tnMvZrsLo4tjgzChirnkB2aTYC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RAdpFr9PfyMiuRq6So6hsUazLb54EcGevkEu1Aia2Vkd7gT6sUSjYED8NoyyQWjZKk3arAxbeWFsEeXYFRjcFFu",
  "key1": "EHMxg7T31UMjEBYekpc467QtH54G9uYEEGw22QWzysGVgdMxkgaa1Vp9hUQAD3JBGhfSPHAcLd1fThryb3PDu9C",
  "key2": "7kbfuDpAtcCeHJMNp4t7PLb4KJW1XNoF4En3CgSaanrPU8Qv6yGcwrmywNKDECH7x9KmEaHRg1XpRXoWvc55B1F",
  "key3": "2MmteF7mqwqiEntecK4LwL3bJvUHfF3XyHeygX3i6wPymX5JNJ3zFAyDeQXbuRWmoqQ5kkGAtnNFFoBMx9ykUiwh",
  "key4": "21rvio6qFWMqgdpWczRqNump7g2N45TAL2SuioqTUeXygjLBhmNLFy8W6PqaMz7nuEtq9TWiJTmmShNgErc9T9G8",
  "key5": "5qojjQtAvBKUhENzJhpiMpBaZEcSLm5pwPBPFxkvC8Kuq6jd1EAMoMf7C7cCZSVERh5yqHxw4RDsWv3x2GdZmMSF",
  "key6": "QVHmqR5FJk3Xjfdq1CjPNE3qUMbmBdM16Lrj6wiWYNBYXBpegS9mQsRR5FAV2bfpUmhgMjkc6bdjAzoknjWdKEp",
  "key7": "g8ngdRULBCqbBZzrzQaStxWDpoygcsP9Erfg3jY2gF1U4rTFnzMHKZQ7o6NMJ5W9pK3dJB9WSvqdBhEX8aL571j",
  "key8": "4yUKsUW3sUsz26zpVT3Pe5rKpfXnU2A1PoJZPdX6W5pE46BDa7qVWrAHhZyHN4d7MqwYSsK5m16FR6F4qS3T99pu",
  "key9": "3ZZVq9QnstvFii31QHP8AWXS8bmP3MDg229Ft4216192Y45NaCQKYEgA1eBEqfnPF489eFtWUai85yJibrn4k16k",
  "key10": "4bKb4fGy4Lf3UikHxFGG2vCcjTs4NnJG8dfr4xVxCNfPTny7aLwqcTRYfam6fs8D8hjZXYznxksJJUhDyUcJ5wx",
  "key11": "2NpuME35qbVqvt2bVtXQzqzo8XHmzTyA6jGb4qBsJsxAtAHonPMnmyLzSCAhekzFs4HoNS6gQVNpjq2tJE9cruah",
  "key12": "5vcQseiboZnov4zhpgYb76ybDbErDKGC37CD3V9rLwhq3UH11HAotDE2Gy7Mp6vNJXbotEP9bPxMBcjfkFCZGYrw",
  "key13": "5KBr1PCiG3PXDoBHoGi8KUDU636bS8Jjj3A9ue5zKttJccswhtsEu3JeaeyezCq6fsTExrC9cKAjpEzhQNjRrqKU",
  "key14": "3qLCSNX8RFYzCBszfggRJJwENRDxMGNrYyoetdv2r5p4M9GcoZPqhv22TB5Z2Xg4DhW7NFhmaiYKDPLhwtzFh8wk",
  "key15": "5FrggV6SmGsLJKrj1gRForJjnJG7r6AWRzi5haveSgVuATGuoG6aomxBnuHEBBmHfpbDB1T3tsuMx4AZBaU61xUU",
  "key16": "3krgS7grVk7ziW1uZG57QzdeNUAC8kXW3XjAjsrxCUAbkZ3D7E8RHJfV42W76oSCDpQALYBDguoPcLf7WULMyEFe",
  "key17": "22hanVsXnGfX5HhF47bKNRXvL23wYnLofUCtY2GMiQHr8mmdamBhQQM4ecCi2ceHH6yJaECCPQtb54qfTra1ym9m",
  "key18": "4MvPaQBy49UGk8UHBhG3jtsp8RrUFTamhLTECLx6axEYVDvWBbGSZHcY7dtPRunkHxGwo6gTxVn8fDqteQu4kH5P",
  "key19": "5Q3GweasSafmrD2Ro2UVqE6CoKcYKS6Dg6vjYzCMJ6s6BQjNnfutwF9CoxaMBMRBMgvGzULjEK5GU43Eim9wxEy4",
  "key20": "XHpHHbRQc9hcuzsbtoz3svgvS5QHhU8kUF71pS1Aodch9eaMUwS8fA3acCJg2WaW9XtwGpuzpKxck62yZv7cEUJ",
  "key21": "2WoGjq4KRpC925THvu6nLrJHrKJjRb5bZ8gfYVzx5jh5XkiXTgAeRVhQhZBtrVzZfofCgMW5JfbnePG1PjE6EFTV",
  "key22": "5RpPpv2H4MZaQK1YGxLT4J9s7ccxnEFyYuZv3FiwCHvVhhD6e32Gy6Y2bhNCmMyNNM7hNv9Vi6x9rWD526T3mu5p",
  "key23": "Xh2VFo68tSdSqPkiWFcrDUwS7ezvNJZHpDkQ7Msb5F3KdeF9VH9JfAfYFa2Z6JXkCv5KnUHdkhtBC4EgujdpSjN",
  "key24": "27q3UTUcus2zGDThUxeBAADi1kqqtpeQ4LdoGPt29TzNdvRxcT5kkJHqQgK98AaciaseU1QuSLivk814jQB8oyYF",
  "key25": "48QmiJwbocHvhPX4iqSWhq8Hn6WffrCo7j7YcRXRE54X42Ekb8K7NuNNcpBoczB66caHN99vadWAhXJdB3gZfvBX",
  "key26": "ArRkjLHR5u23wD2X3xcQ5cwsEFgqqRVgNnNEWPbbXKLpj7w95RoY7cRar31j7ZmUjXg3eGCfm2auZQdG78Y1ULD",
  "key27": "4T8KjGfzVqf3dwwWB3eRj5bunLhmpktzYthyYyN8cpc1st2CrSzQsWWYpnoa2FJy5CfQRAKJUMExTji1mDJ6jkDk",
  "key28": "53twZ2Q3wLpB6Z2APYsjQKydbG4VXhg4V7Y6pViKjdxt5Jn4dKXebXCwHCFePwAZkjiWB1SjH9G9z8xVcCv9YPBs",
  "key29": "5zCMhe9sWJVqLaceVan7E3PfTPgX2QWSGryr76nSeSCuszwToVoHHVG55ghDngJ8ikxHgJjNXSPVmGg5Hg1cvPPh",
  "key30": "23C65zEu9LoCehidtw22WUa6BqkErv1pgMCUvLWGuxSynALHiqfQeKADZrE2aHi8GrqQ6KeyUZG6TR23zGj7wLRA"
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
