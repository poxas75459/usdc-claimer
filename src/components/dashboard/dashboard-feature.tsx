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
    "22yVkexdfWvC9gKhk8RMW6LbmXNv1o1BxbrfcvHVdHe3ELas6FDukS15j2UL2qD6Qby6At8nRTfq39tzFPxz8bgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3R64kZLR9n9K8Yc1rNo2MyA4TPMtaM2eV5bhZaXCvSFx6BFDwPeRM7GBENumP2mJZDHRkZJrvJvQkKJopADdbc",
  "key1": "4xWL21XpopyaEDY7bt7Xvjw6TSCt5hvhnEjefhzwE22PBqncK2B79rZLQCxG3GEP9FKTECwS8E485W2e2t7h8nLF",
  "key2": "2aZPGksx3bW25Qnu4RQq7DHxbxFWYi4mqhJ7DzHGw3UePE1We4iL1qnjfC53hnvtjLqNAR8znW8f9y5aTXTbSiU6",
  "key3": "36GhrWu8pTCuaSBoCe1Bc42R6MRJcoD9kETvSHXrYEzziJV7skUcapno6siMZZ89h3VdTyaCKj1FqyGEVkdnhN5o",
  "key4": "62MB9mJRkS4n5okoQz563U48bU7ErVfvXYekuP1Mx1mxid5dCtzghhgAgVNbPHvzJ4EwVsFJPnNtEy191KhVWZ5f",
  "key5": "49JX7un6FEcY1qMPisTFBpLQ9w5k7qbAWkv2PtH2cAhVcVXv2DwumaFs1RTfky4rSwrc4dLkJ8W3jhq8hihmqx4c",
  "key6": "3aXTvcjwo9E3jCfeKZiL3iLgKJdpM8iPiARmu7M1zwohUxeZRe4vhsUX9ArAP5Z3pmDpBxLFJqAiU5jHhiJWKfZD",
  "key7": "3cXpYATKugy6C5vkXn9eSW9kEaEsXDrvcrRVedxxs4NmSNEdfgUXSQ1DzJCqdDFG5S8KQKtpYJRhp798WEuK75Um",
  "key8": "34VXF4VXLnuYsH6teUBMD3Z9Q3mnTXby1Dpe5E3k5tMxvLTeKdmYQZu5BrEE5N74YSVrWW1SuYkJStVbpT3QqfSd",
  "key9": "4kNupnhmjQa4xm4HbBJFWiU4xvQSPc28Av4ykCsqe1u6EunwuDeRDUge5XzcrbETJ9VJJLnwvavJNtSQpXHYrVDa",
  "key10": "4vHkdNKdvGvhAdHbfaS7qcPyRN3n4FEaUv1AEBpx6JG3N5DY5uidrvnERzRzjdYZCN6nehBsnhN1SRtMKayKpPoa",
  "key11": "3NDpAdRqQT4HAVHXTS4cCdSKQDEk9rxvEEBp35mU2HG6XTUzm1BwmKGQSeo5izeww15ygzMCGqm2dBEBXeqmpB2s",
  "key12": "33P3d3gPdPB31LAzcYtoysgPY4fm5BBxpZM8kFmLjvK1Wmm4SrXfNPi43eRepaM55hEBgmut1vReLeGx1CyXNAbt",
  "key13": "4euxr5Q4VCGNNEHTtth9LULAXywe2mNTwuAqEGRpjd2pPjW1VYajVhHKL3TFaZy5mL2Hnbt4mEpJHv3ek2SQ7ChA",
  "key14": "1oji9XBUJeMoC3f1FHvW3GrQr5QGDYCwfBbfvjcGpiiBjWfyWULKqPwG3yLWuwSTZDvtk6RXSeUQySjKu6XuhQg",
  "key15": "Crphqo2w19zttxF9AbXAnjUDmDB5PnPFCurtonCAPvzKV9g7uV72od9wwPaE7kqiSau2MvXvgB9pkjkG9ZEDMDQ",
  "key16": "4dSpJ6tjrS6i8QcK8syzdB4LRNGk7ZVNcR2gZqGdhCdssBeg43RJzg6x47sL1VKpkwn7qDdxU5GRebmJHFwrT1g7",
  "key17": "2R9vnC5mbDoSy22JZAdTdN4CgdBN8VFtci7mvmnZuX6ermkYWvzfbjY4Yo4n5WPPUtrgo1KzzwT11kAU9e43YXo",
  "key18": "3eAc9EqeE4WTa2KxM1oMZ1SSsmsAT7iYZVth2KwWfHMZ8NMdg3MqkokHLudUsr2CjHm21KSgPvNunm6UfQzEm9k5",
  "key19": "RSJZkrFwZfJ8mjLETrWZEJgRtEGwE8E9uNKD9N5WMEtufZ9SDa2DUFLXrwCisZ51JSF4pQZR95QwVHF5WuTM2wW",
  "key20": "1VcXq9DzoAursZ2Lmaf2Y12koktSJ1ths6x2H2YgYgvtY9SV9DgRun1efa5dtrQ5VBnRkRwfhAwUPr5uShCNvSr",
  "key21": "5MX1179EqJ5FKJLjbXSJrJ2e7mJzhAz2sF74GC4eUuf8oD8yYa5EKQMfmEJVLRyLEbcoEyGxJgttC9JMjSkaKwLs",
  "key22": "4ucKNNo6x7BgCB1PhjXJfyUKq2cpR4M3FdhQtQD1kkBRzAF5qUsxX9fXoKXiirNbjD8tmi3Ju726DLscCYCxFdw4",
  "key23": "5drUWbcQJQnWBhrpMT7krAK5PQUe4PitUKpEavXFxHT51h7nX53YsDNnD7pG2h4L8BzUZCSopQRxdAmbJWksBHvJ",
  "key24": "3eCHx4gXcw1oakS6EwMsCorvQYsF3sMeKNKpbjESCzakghhM36GicLaQhLf7WjSpemKAtnUtg9YvdBfAPyC3pYRG",
  "key25": "2t3PVmDiZk9ivXneByMyQnubcxynVorhNMfBhSpGncUfKDWpkG7zrLmEZg4cPsXbZhcyQpt4ZpzD9EdrwvoE16pL",
  "key26": "2TsjfjbTebuUHRsMK1H3c5MvLBbQfc3XHKKxjWLE3vF7W9oupLsk5Z7VnA9px7jsZReN584VJhjzaPAHYMuDcLwk",
  "key27": "rx55Ng3r7anuHM5esDeAHtGdPz19mji3YTme8jTriwHoYu73x1NWEdCPV7HGiMJkEnnML7FSrk6LC26TWph4eJy",
  "key28": "ipaaKN8uUdn3EtGD5dq3msktLqxN29f6yXJNGtWY5sqredtNvLZy8BHaK34gPPyrV6uy6VSogZ8YmuqA4x1Xamn",
  "key29": "56WgdtSN9azNTkYxSiYAQ7k4sdxBLPGRRyd62GN6fhE2XKNaMeXVK2ErreSBYC7k7EWtHW4eUU6Z1whVpPzYrK1j",
  "key30": "2Sd7JAFNEDwkjShFci4oTqAGrG6m8LhKEm2VGNZR6b3ubSPeDQ8JWPBE3wB2szqfZzpnMtsdMJ9MPkYJuQy1N1CB",
  "key31": "j8LovfmhtqkQo8Wh9pkE6BcNWppRhQbYo2P4vyJhNegDEfeXguPJ3RLNJ2juuLaZCHySd19SrhrZ2cjvydGLtbx",
  "key32": "3AJ3v5ecMmBKRirFckrjtwVEki4cwXcAqd78b88BCVEnKkGaShAM7pRWRcGPSqL8F8noQR2TH7pmnd7zg52E7Vzk",
  "key33": "4mizwEtQegWSHFBmEMfNgZNNVTxSEHaLpUJkDo9g97nYwHTKGnTi8Pz4J8n5BjyEqdmddNQ6swXsu6tBHpgAMxut"
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
