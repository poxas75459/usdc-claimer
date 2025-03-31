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
    "215mt9uMfJDmgJw8xLrVRCWVKweNgYY423ujuijh9Cin4LhgVqCPWwYJhpdwQjTYLRQeS9mKGZBDLTk9zdJ2dNoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FdLUmHgEkbvVuWsYzrJJxx1ESFuoa4AvTL6GH9SjrwEoGq9Bgu7xdmdkiQ59dGYAUQtF1ktrAXX8muiyiV8S1eQ",
  "key1": "4xpv7cpqZmLcE9RZLuxaEsyEBxjJ76AWwmT18sYQnKhBkmUSXBooyHtgMAGa3RDn7JMVSXW61qgcwkwS93hSnqmR",
  "key2": "3FRMeQjZddSZXrtf1atckZNgHfGcqL2CvgkYEHH42YURtbTCKKuYEEv8KtH9vyp1pNZPDyRxeH8zKjbvdL5FpiR1",
  "key3": "5EdRUeZYs6Rz36aS9MzEyqxr4xfo5mEnrb7cJGJ3jrxcZCFSFMWVMatctneDNXfxZqZqwfiTjwdXW8xCBq8R4pwu",
  "key4": "5ho9T1g7bct7crCDFgQhVZe6ZyV4MUzeLSPLmc2EiipBQzWVnWmmSXmMKEVGeJoA88iZHYwWqr96o91q3wyXsLrG",
  "key5": "LFFrvw3feMLku9vRAPJv4DX2ZNdZhABPimAuzhYV3JnnJVu4V6Pvt87UVV11FA6xumxZ1AcVQgr8f2twsrCEcv2",
  "key6": "aBtapp2DiEWGVvN9um5XhZtcqCj84G8Y64vhtG244buTMhaGxarkWgQuBpho2AEpSGw7FppwY7UwF7KrFYnQyxV",
  "key7": "2DAdLMkj2A83QiRiEtC2AWiB7vAXYJPfh7r9iJS3PAyo8FqeheGXgTHPXB3kjE6AYrnomxXjNsGwSzkPPqwbxewe",
  "key8": "4vcmsxU5CkZBqff9dJWVFSdJK8UTQw72AENA2X4aG9p1BLLu7UP5xbn54xbFzFEdTyZoyD6kAiUT8BvaPBcmCWo8",
  "key9": "H8x7wZFuQPkhLizc8YyoQuj566BYaxmE2U6EsNVCHb5ka6p2XmqbaUZnCjfMWpzZyHWReTnfsQnDJmpnqrZGT6e",
  "key10": "3M9UUxXujnQFWeWR1tGXaRKN9bxaDrSaQg8HYN5LguZ1PVHNFDF1XVUq34jcXW5gGpax8VBCJTDMgsXd63wt8ZKz",
  "key11": "2zHrqmBQZhYZCnr4vCm2EKT5xZjdVEGjsMcGTWgz4s72hotFtVSv2bEc6udpCQ1VPoPtEb7124VLMy6GNKTAuBhx",
  "key12": "5RJKZGaJEsC9zonDR8Dd7T9XJegB8G1VQ5BFmNApjRazZJv1kZ6wgq7QZexYb3oQf6AVS2DskmuQFxnGVa5M4BRi",
  "key13": "4TDb27BZ4CEwSN1ih42UhJA3nJc1x9pBmAKMNjXoJUgaDTQMPY729CXFDY9T6ouRW7iknYj6988aD5UNVDNmYGvY",
  "key14": "2RXEnqtGnHmnpAeNqzUGWSxWKxGr8wKATU39twKRCdr6qXmnbiKvUsQ66ot2C9jkDMCU1nfPa5SC9CPZ1MstqVAp",
  "key15": "2pamb68EgUmgt6Yz85ocD8Vshfv3kVdKS4RgZri1tC8q3DPCsBq6XDPyWE41xCdmuYWfLig9Agzx2RJ4gr6qZSJE",
  "key16": "2GBexvhhfyzbYr5CT3ki91rv4vmXgpod5mPLHoUhqu7KbMrKt82qAA9mZHqbCtV3oxdM5E3UgE1gGeDCRHE4HLgr",
  "key17": "RDQDa6YuodurVEmT8YwNdYwFx9eNsvRFJfXFnBj9oPxZrDKR4kaAcUoM4nfEWcKfKBAcGMWNzCLTqVQKGygZMgC",
  "key18": "2DK5wxcaMw9PsHAYRK5xh5jMZvcv7ELYW62o6gTDN7xoREk9oMycrWnMj6Wz5CyHgkCzTWjPSbXmBgNfh65GQ3kQ",
  "key19": "63F7GSUfETfVRr3CA5YvPJLa8pZymmLsjuN3QsjbSuVewdxm5UYmDwQeJPmVi2fM1YwRQbo8JEfUZrHyuRXNJfud",
  "key20": "5mUNTySMinQYAVSKNrwXz3pahHXH2YV8qDRYPCMT9zmFU3dkXUYuVMdKbyENW7iigwUgidUdirSw5eGE6g5NYnUz",
  "key21": "5DbgCGo3DAhvrtGag9RyaT6wNm8gfxcVwvZiE7k7vPNMC32Eo24pW8efXJAL8Nd43UvYH8ZDqr4WcqhRXvcQMu6o",
  "key22": "2pjbUVMeAdEFkXzaB342Q5qK98LutSTZomxi4pch2RATD9woVhTPLRG3dBtegCHwKEWpnrYGrCEM2AruxeAKnggq",
  "key23": "5tyR3dj58rHizTyLvJcmkQzpnzpPUja4BrGcik9TEg7fjAFVoLXVQQZQ8UK3CNTkoRyTWTUv7KrTHK37XgT1QarP",
  "key24": "5dyndrsmtadnQjFyUgTHN2jvt4A2F7Nt5FbsqUj9iFnRgmJXYHhhvyerSCv2jvKk7hbtSZd1dubZD3mmM1NjczjC",
  "key25": "46yPLZq24qpRXRLVTa6PEcgn6neDVtMeLiHmnJLnqqsD45dnuZN7KAWP9rnoE4vTY86yLyixcq1PDsSiMWpehitr",
  "key26": "5n74U6SygHMCCqT79w3Cph3shPzaufkmDCXvUMzMQRB6Qe4QLkBBP1o2NHyhBgWNELMLmNfsX7xC3uxLWEhsY3dp",
  "key27": "2aKj1EcrGhv4FA16M2kFm7U9siBBBtYqjs6WQmydPiNy49E63kvxJtFoCiVEi4WN1q2fdLCLUAMVgmBjjaxBtuAo",
  "key28": "5tphNbjsLednDYoPdYxaKq5egTSkmGtdidNaJWTUpBUyk6EmFA7jP2cwadpqPj2WfdoU1xefVpA5SBQzwx6UK8pT",
  "key29": "3iguQdDAw4QdQVUuZu51N5fmoY9ofyccAe3rZXxrNRMp4fe9zQxJhWNhVxnFNPVKSrETjYCswC73gTd8bniX1k3b",
  "key30": "122nXg8VHLf927QNxqnvLQJx5LEPsfwY6Pu8HxWZP8tHovtyEPXpbLZ9w7AzzsbcxSgSfkLihZLRgCFMDTzjtf6",
  "key31": "5v4RcPgQcStaYA4eP43CsdeAwEFiDuPra4tZaVAQJkapehVVaD96kkHSfrUfgwZxBBxjTjyA4dmxQ3JqrVVAHETB",
  "key32": "XKSDq5g9pm9mz1aa4n35vLbUTqKb4AFXcp7xbvp3u8m3waKwRyBxPMxEKuJ5v54hRD6Pc5WcMpFMi69A3G3RUCn",
  "key33": "4GkwjwFtiigrHwLBTMPJmoH5TiNzy2pVfg4eLpGTJV6F3xyhvoPnCPFDb34ZRo4qepQjLW9eAEz5TcviChS5jDKC",
  "key34": "5ipWBGZ4wbXoPsLweSuAWqQ1BU4Ajk8NiZUU9bBc7EzaB91MuRiztPy1JUXrfrXc3AfRtBkSxH9xKioCG9WyrqkS",
  "key35": "3bFLTGuVk1qv63XKQ9V87Jk4oDKgXSCQAeS57Q2d6nJmmV7PUJyaMh5pocj784UWBsUjT6YKPmKWHVyeRTh34M6W",
  "key36": "3nirDqaEz6GSBoJiF1ZxzQ4DTUTyjLb7fwV9pqg4zc2B7416kvL8tr6R3A42TorFXYncjX2PYJZNDqiNgVxHbpB5",
  "key37": "WbzTWbhtCFs8AguhLRH2P5m8KXME4hKR9X94SemV1hoRvGtyvTxeEvFps1DZfuPS7qREJo6LozX7KMSB9gLdNes",
  "key38": "XrozBQ2UZRqZT35eSa1yytFBfi56TivjggHFZcZ9p6d52RGTzXDE8Z94zsqLjcCQwnTWbKMfjKkmcK8eUhhvoge",
  "key39": "2KYUPUfjpQ1ZgSqAtZsn47wWePSugnPkJGYwYr7AycM9iEsHtdqxPrjiS2XRGi4FUTVQWBQzGSe3sk69WrPMS8PR",
  "key40": "5yNKaSj9shcQsnkEvGEqZ3Sb9Fbh51E4Th3ACmqc4YDiSxs56TmEY3RtLUaeNnA1wzC867zmSgX8j5mrYs9MJ9ZD"
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
