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
    "5qzoZVzeJRywL6EMwPEX8tFyZCeiQZSkiyjxpaJCtVwr67CdyKtFPNJgEPpCnyPuSNJfiWrz7ryekHYUquJj6osf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ra2jb1MFJu9BCbupXNhJEe6oJdL1y5XHs9HeiNLEmfTF1B8XcjCLMUZhDDWivTEELSgxUuvqgyTqKpTLVAKkTbY",
  "key1": "4N8b7kwqur9guimWLmfZLYvHiMvfu3vWttNUo32hdXEQaqegH2Y1iVuGQ4VYRyXEK1mKKmhPbkQNtBcRKMm9FAgx",
  "key2": "5nFsvE3F4czqyvhiEMp8KZVFfp2oPdtuNYtfCUEAENHDxUNssQHgMYzvmmJK19gKjbzj166nbrDWpnkpbFiK2gd4",
  "key3": "3hQ2nkAGDmeBHmL5LxU2JNo2AcaNj28nS9xsUhz56oLn87aHtNiSoe1ym6HdkM7nQ5Rr3jz71A5sisS2PEmFeXz6",
  "key4": "4EBNu3TaRZszgoSvzNdZNG5BWSrT6bXXwmHxCBMmQyxtmCfq3Yg8i16o7vJatF2GoKXVUzgyxXRL4axtdRwXC7Jg",
  "key5": "NqHDcoPZwSkRX4VRXbWWjkN54mrrcvBAnULNuVEGpecu8TqVsBMp2r1oxpkTo2QCjrqyUCTXJsh3ffaFUFxBKnU",
  "key6": "LWdsJcjhcRQXbTigojMwRwq8ApZtCa2DG92iFoGziX6gpUH2S5F9osU3u94kTwzMg5x67rs3dn6V8SZViT4xH4o",
  "key7": "3UyksNVMB9eEFMLh7FdcF3KsC9kbzygPDxd3RDt6UkQnZJS9gyxr189vgq43QiG624pnamvc44oXRKjRw4GuxCug",
  "key8": "3we43QJrN4X3UC4ibppjXeC3wVQw1FBZQ9CrJQuoBWq3X7XZkdgdQRZagCU41tJga6YKfmyXoq4Q8w49EkfXrA2M",
  "key9": "5Bz685XmDknXnrEKMWiQntn4JFPud9EZTvhiBij31D3Wo8kdJ1dmAEoSDKmtTmGfMhkejdjzGAdmXxspwiywHEAF",
  "key10": "5Jay8j1tH9fihf7GaJYQs4rdkWEHs6hnsRCWM7K35SEwzLJojuUpM1ukBQN81TXYoyHPiwJrKWzyAeQ1sG97HZCB",
  "key11": "gewzKLszsyRdFtmzRgBLt8vHARD56hnho9fXMArta25sh15msgsHUCiZ2h5qNKkGtcZsJvw1VnWcY6RqxHCh2q8",
  "key12": "54demXw7yHDgTtDJuntkDF1879qzm7vhDKKxMFL5LGxcJJFmXKwZUPuxVohUF4aCEMfGRmw8bxP12mALVx7DSmMq",
  "key13": "EijKJZorkCVjSYHDY9weckF95KcJxXsP9GzArJT4LcxasaPRPK8ze1eVa7qBXyEcW3KwA2R2PrjDPi8e3CuJGUg",
  "key14": "38ejkMYw7Gjn8G2CwVLQaLhfRbAvw3B4yD2einU2ZTmPDFjPmVpbWx8ygeMPtqicrWHQYc5fdtic9fiegDN14sYm",
  "key15": "4vpN3kTNw1gnMTesgvjzNLceBf9zZVXcRZEvymbdBWG2PvsrcR7Ate3oxD2rtgjDQXfU876Azvwuc6u2PTyMbHta",
  "key16": "bmxuGSgjf9QUQf7gWC65dci5mt5CmDcNSWCum3bwzCxuDWMd6LLyAnmrrH3CifshnNAULYzaDzws4X92aRNxags",
  "key17": "o4ixHDTP5ZpTREabb8uG6NWPF7PnMt4wdMA9Ar9e7nQtpXb684RjKNxXTiUQucUcpXoim3Pxb5R2idiLLJZ9xAj",
  "key18": "5baqsUtKYt8u4vKLA4t1FNuGtoMhG2Lbx7r9Btr82Yvg3sYHLotmxKQYZ3Gv4y9KPFGCgbnM4P6H554hgR88vcri",
  "key19": "5qGj6sLgXDBten4dpgreaZHkVq574ubrs2HUsEC5oddm1zB6Vq6VBNXgZvJmuxbxvmpF7cqzqPZviXwzxZVvxhZa",
  "key20": "diSwotWBi3YeopkxzNXU9T26m5kbZXrXwPrfy2Cxs5si2CySEZ12fagGXBedNmmuherT4uEVx5uSKDU8RKvUseR",
  "key21": "4XfkFGgubqAEHap1xcEyJdm1KtzhaiSxT72927LJgoWiaRe5D5JUyPiYtBipd7c8Dhs92ZgofctP4UphTtApV3o6",
  "key22": "62sW1HPwfL8dzSpmqmhKiHPnAWXFPkq7fChkU6rhLoFDXDHT7DRpZJBokoMbXbrMJCuukFxJwxidf9eYnwfencFN",
  "key23": "5QosDqpvtftMzabuRWS7by9GEuvvX2f6WrnFj3qZGsPmsubufQBohyVV7tnWtnN1dZcX24S1eHRr8RAtRy9GmJUh",
  "key24": "2aebaXRiRPgXPDi4aM43GSK8dAFqwmLrE4xt6PxutWaVdHewcdGTdAAgqpN6TXh7W5ZxysbVrnYRapYAwYobasSP",
  "key25": "4w4NEfcEpn7NG7Groqn5DT2TfLu3MHy8yh7ketteKCpS5SmGHtRTDknRZ2uwamGSZngRhxjBfiMHSEMivhHDacaM",
  "key26": "5TnNDViM266NJ5AhuSpWoHYYEWtRLjfg3wP9zSQ2BYTpt7dCBT9zdox8m2xyafjWvSbtWSKPHbubreh4uiKhywbx",
  "key27": "5LKJpUUeJKhthWBcWNSZbV9YYcEjJXsyH2y8K3zrgQRDXnGaXG5Y8ZFLycTQejoynQNYfKsjVeJDuwL9RPMCFsg9",
  "key28": "2M3xtWwuHod8Lzpzb9d9E9HeKBGLobqMNno5i8ebGt79M1tGF8ULqV1yL3gGVAJdFXt29WwiJBeJejCLEUcAn5iV",
  "key29": "3eN96ZAqQxJrw9bDjwzKUvNeukPJHo2gyqW3VSeg8xbMFKdTkcuQYv8xrtcenUFD7h9dK1c4KDz3wrLm2cjaWrU4",
  "key30": "4cgVFesMxZppiVLzngxTN4suQtFgjDV1CJL4M55NptX4TkRecGUrMd8cAkWway2p7F86WTKjAbc4rhGu7i63oMQU",
  "key31": "fufC7nZBr7vx4GZeiRMedE6sikNK2nRcfEz7uqtRqxXm7gd55KSZWviw22QmLWxJF8EFAsGZFb27CjXuh4NHeSj"
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
