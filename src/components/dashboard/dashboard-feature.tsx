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
    "3snVPQKwQzT1thCe94rhJU7UnkfhNZRfCNpL9xZmwSVjYckHnwPfy6cwXhRTv5n1v96MdYeU8oZRg5swWR9gXA1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xKTKnMdyTEG7jjEF9pNdkbtPkgsJUQjKHvvDS7C5ghun8feJf98hcxxkBvpSRo9wGWt8vUq74bSSjgNtxA3PRuh",
  "key1": "9oqRjLU8T9N9aBeQHN2x5dVvT5XRQtkQrMSP1novGHoto4KGN57QnGUaqYVS6BYFRKycRoVeQFgmis4HDzFzjVc",
  "key2": "3ZvjKKiWpwNGiGtacfkpRzjnfqLHKfTxpjmZh344H3YWBL8PJFf2NRLrK8WexeSJkBr481nBcEK6xtr2AvnAKVGq",
  "key3": "3adtLKhXkmaKL9EVwVpjhzJCWZPwGuqcNJPFsJbmGDUw6vFuJCu2uhSNKXRzuNbBepNzsVFVhEw6fhjf6hf45fUk",
  "key4": "51kqieW3sC4vLfYDp2WR8frKPmUmmM9pHNDUMbL3khaPxHJuJW6MZ4qBJQ9JRiTJNZVCs1TTMCaA9rWtch5FR7ka",
  "key5": "5VHLuV9oVf4kZiKQWSAXmyWVYqKBthD79UAjMBThByFFkEi6o6qQuZiNv8i6pNaKqjEH1joUw1kpWhbfXqSYKh1r",
  "key6": "5W8KWXAzvj1JekZ3PXzFG4aH6t68GovxeFPxvYxguxLkZVafQzDxDxiFiZLdFtgiqBpXUhJPJzarvBcV63WsbUMZ",
  "key7": "2ypupnc8VgeCN8CKJKsHWuxY31y6U5nv9HNK9Qwyyq3pbhkZo5d1EMjHR4T15vmCzAVivEHKC3sUtPGWzFUNd3Ag",
  "key8": "5RCyuBHJAzoQFMU7c9MwxF1LvarpEKvH1SN1M1NQpiFuAzLAZ4htGtz1MFcJM3rWPrqFJrY3zkckS4EBM5EdNW4Z",
  "key9": "9kTznAi9ZMvm1xZHLiWiJbTizgAEfdhgApoLQ4Qv5dx7YrFu8RULsGrpzNRVy7udfaRcSWU76yk6SYkNsTMDmLw",
  "key10": "2dSAmgmmCnZTsgXnCqNeeSeKWKq8svacRfab1Ws8DXguLe9bMWoJXsnJ1Nd73BPi2L4vtsGocuiwPsRE39jsU7Lf",
  "key11": "4w4ch4kVeBKsRyxtvmiNhc9CRzeGUJfhzzSpDbYstd3Vqpgjn397ERThyqT4GFxR6azSiFZ63XeS7DSvrRmJZxYe",
  "key12": "5rj4hETHiTNUKG4EBy934sVFocNYGw6LE2KRTbqKAMcjHv1NejXim59nLa5ZzMYMieHMgDg2SVd2fg3ZPyXwVEGP",
  "key13": "2yxqm3743dtY4mhfvsQpVT2hm82eYLmEtForDy8LUH4mTRMxvHdBXwiqSHoRNCbrfgt8w6xGdfpRH6xRU1EKfnsY",
  "key14": "2nBDb8QDREuRqjBxzVCqbi16s1qasZp6iu4Cpnra9UH8Kuyptq35Q31SE64xCnKhVvQnmtvXSZ7MYmVJBCdPoV89",
  "key15": "7s7phEMXm6MwxmJBTmYmda4dzBGdLsgC1CtFnQxXJLn7QmpcoEBQ17NJ84sqRAc93gxsA1F4cPYXowkThHmvnD8",
  "key16": "vvwUEDm8i5nYiqLUic24tSQizdeBfCsZfHkvfugi9zEtAZSi7s2pyadJuPZTKRTJk1bZTRFcf9iFS83hAuYUrCd",
  "key17": "5UeSzZV63XJojEZHbKxS4HuAczSDn1vsXewK29PDWCQABJGsHYbazcRveL5MHNQk14k6wsqrzoebxUZRyhfhLvxJ",
  "key18": "5HbQTeZEnFf1uzMS1NeYu2gk6yMTM1tMqMeVoDyypJZLRFhbSN3uoAa1bzByR5DuckYXnavEJZZB5UWpPiHUrp9z",
  "key19": "3e5g2QQDZHhK96cPsRkcgMbMCDUc47s35VoqrS9cEqKzKsszECFkBR7gq5Up2k9hvbrzz5Z2d7nRt2DCa9FjSxbH",
  "key20": "41iaern2uw8kJTuFty9XeiXT3729muBEgAEpCw8sE1EGrCw8w76M5QXzWoWPnVNixhUPhqV25zyyoH1NXPzz4PQh",
  "key21": "3YzuLsFaeKbcznRVpPVGvwQapUcRYFF7QwssNgnN76mRnejZ7Db7kkDF3QHp55VQbvRZBi4B5qHecZtqWErvYAuT",
  "key22": "3XFKwY3wr8ha7H5CwW1N8ojSSXZDbqsCo2ddhui9E8oFAYcg3oWVtVVBGZCuVgLFyY5uqocmTGvESRYpwECdpCco",
  "key23": "5yqt8m7UoMW6jDeGov6buJc3TPvbum4xQKnNVSGpmfPqxqCumMxsEUsrL5qqW3Cs9hhriWuoCfjtEbaJQxjnLTNp",
  "key24": "fEEprpkHjMFyUyTTyiAi3daVUbqMiRZ8igzUcYLrZ72kbtcsbhDdAcFtEtbyYTwRWETRg7gtoNGfmWSAvzjUEwC",
  "key25": "2zQJnyXBfb2GESo8WXF7xMr5C85HciSwhVcCbAZddVu86N5siUgmrpi23VxwJ2o7XVERLFAHybLqDdJ18VE6L8xD",
  "key26": "4bWJw3D583c11dhKDc1Jr2GkrzbSi6sCpFhnExwi7cLNZWQjqUchNkjobTjdssLE42fSgmfxXUxpRadR1TqYPQ6P",
  "key27": "4yJazS3YZUfBVGqgijHxqLETv5XAJD5ENj3C4uBh9op4z1PPaxbpFH2HDzoEq6q4ai2MYABSj1diiyNHY9huMY6k",
  "key28": "5vu5eA484i7PsSzDtvfpGsqg8mjLZrRdfNNRs12t6mbyME8jdgLkoR9U2JJ57FAar1pjGeAVpJbT8Bgqcs9amxBS",
  "key29": "5S7MQq2ozw4qPvDEK28SaoCxq2WUDwoMLKzHXf76jwmi4EQ43342wDfqN2eiMpYbtR36kZjeEseoDhYqGknVUZyv",
  "key30": "k9m7Hz8Wut7jw5WrvoKyvurMm3gTyvS3ipagF59jdruUsk9H1hJ2hofmDFPEpEkrmWLqGHyqdvRzKZXhtFDPzbN",
  "key31": "4jwfsu9aD9HwsyGt2kaUkLwGhqvrqxaVwcFaqTJT955Ec5aU7ksEzxWMQ5JoQ1FW3KWxoX8sKguAWnC33vDPhRf2",
  "key32": "4RvZKnvvZMud6khEeiAEp3yquBKKoFe3DCvX9w8QG6QhkiJKkRujzhDZhsNN6Sg5SsC2jGdPvysVah2kx1eXNeLW",
  "key33": "2L4w7JyNKLdL9PoYnQC3sXhh9MCkefzWSJRqjdzTgWJG93AEGhG5CiYWNKQduFUD5sowotrMrfs7CZaUJHHNEhLG",
  "key34": "3m7vUAUcQZAz9Phx5ZnMVpfRvST2gDrXarJtf87XrEpiyM9pywghCNwzxFzBGekvwjwvJeutDfAtvWjJNEJjA1YK",
  "key35": "66aX3apS21UQZmyyewkuHBeKF141Y4gWoiCJk7qwmvZibQjSdRwZwBQTf2f6AhfMjYa1ty28ebk52hxxhQHCT96k",
  "key36": "3S3qmLy2aSDBrriZJGbuhktmTauGh9uHw5Mwn1VAxmiXGCjof2WR3H1haUX2kLrHcWbav2uvF2uxR7614ir3R5kd",
  "key37": "58DVYKNDigoXtn8UCZKaUfhhMJGjGkrANMk97kJDjhujXZjBhNqvHGRbi1NF4jb4MxswGXWUieGdwFz1Sm5Z5gVy",
  "key38": "593FanfuK9ZdSj6U8usAuvXpfZS11zNHZ5V5mH1XCZjhoPHs8ND5dTcrqsCEMa9CC59zAermF5HgPnZKWpf9Q6uy",
  "key39": "4bCgevpa2KbxhDuPtzcZ5cNznmkvUewHdgxDgvKdW1fNLb3ny7ZBmcB6xLVkjau8D3jv2Ut1yL96QpGgMXNMrjeS",
  "key40": "5ZkU79RY5YZdt38U36zZxHM2R9tzjRotxP9VqS8A7xZfjgFhcFEYDXLNM9kvSchnTzpTAKBHYxc7zgFTKssaft91",
  "key41": "3qANZ2LsstQrAKo9t57MoSxrEcKeCXfVt5z6oezB2vcKgvsFG8dtjJTyHRfq5bFFZ5MgDYnp5Wz4u8w3nLjGNH2t",
  "key42": "57F3jvgLjq62si243GkC63orxewzaYn2nAvCkoLHBVovqpp7GGyfiyn9amaHjWx3TGyuTJjc1E7Q7aZoGU3jZgkr",
  "key43": "3cJkwebp96KaL9rX6o4A9K5k2JMmaA8d6pPnb9KSFjLdYHc4kAHn5mxFNtjeJ7byFtgdKvUTYxrmmaqzCGSt4dA9",
  "key44": "MYChrujtUjc139onB3ogtpb79gjELF19BEvL4h2GvsaY5sJ8S7M9UWaoUMrA9VRoToACG3HsJarAecmSFd2yaMK"
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
