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
    "TRgPwq11R1r1wUYYEGYXS2cWRsyx35UVcGozxFgZTcajdshaToKeDyiwXtcwNxSVnp8CkdSRf14AAETm7hwy72V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4vXwQLPhjdYpnELVYuRHczofgUS1QxCx48qAuYxQcr6sLTaKjGb1wgv5EUjKSf7Hg1K5ERAmjSi5g3cK5zYZ1K",
  "key1": "55TJvUrvaLj44z6ehyEU8Xfrw9z6D9wLxZ5ekjS8FuYS154Ck41KJu5gLV3aFHbisCXjTLL2kzsLABsGqyecbU4V",
  "key2": "vH7cHsCA9ySLTMVgCBbaD1hX3DbBNwhetaaGCho6Fukde3CMkbEjZxLoZqKf3UpkyEAkRkhwxcgxyZV456duLF5",
  "key3": "2fa6tqHG3ePggFT3xpDy9uHmNM9hNWdMDsCVvPKyzdEK8YvFuFEuqeoUKwPAsboSay14FcVKmKWg53rS5YPtFHvm",
  "key4": "49LbgMrKYwsWCmXdwfraH7yhASEyfFXr5SRzYBUHMUKHPeqqpUAHAMx6X8nqGNZoJZjYWhGAMnox2taPbhJtCD4A",
  "key5": "2QNdGVzgRSQSskvU7z6fzXgsRaGcNLVNdL1hU6WqSAGAy2wP8uSBJYKFgcBhQ4kTN6HRDG9UfMGMNirYwhvrnHfk",
  "key6": "3uVzfnbD6D8SLrtoW4QQBAtLFEFz8zrzzwyyeBvP2erbCbDDmEWaXKYw9LdKDthZjUVHzxtGxgyNYHnLd4iasCcK",
  "key7": "puSWm3uyAmfVag4enXKMNKorstSC7VTpCyomkGcfNh9rNhCnL8Bz8raUgtUbWpgcRuTL6TTCswB2vtSGPrPuhmG",
  "key8": "3b5k9apqJU2A7Z7mb2T8x1yFiqDa554kkMwKWDyng2JZ1ErRQmKwzKw66PHwp18DVrGUjyD1tfrKxEot6q6j6GWU",
  "key9": "213a7exHnHMQBQfQd291u1cr4csDoBRNneHBZ1rL1k142ZdqPytSabvn69hjtoYjk3yjC5nUjtA9o1kKeFuqf2xt",
  "key10": "4BVeZC4pievz56Ci9A6NfwZiUWZNCHj62vKbkvEcp67GRdr2iX9Ur9GqxHfBN1dVBK9kAv6TNcj2NbnQxQwwZoSA",
  "key11": "4LuBXmyJa11Frr53kfdaryhDcBUh6fUbJM2KzctUT4zhDiTk3KdCWK7MpFTTqcbnwFMxy2HK7P6qQk6dmxWW3fBQ",
  "key12": "5uZxXtTdLog2uVYPNufMMmYoAgbkvrcDKFtV1g8tNy2sLbEM8GWEsVjgiExzUjZTb3FjvoqRV1sFPSRYu1nVmUDd",
  "key13": "4KT9dUNkGHxRfCxgMXx34g3tuqk1fHfsWf5dJEh9DtiXSyH9FyuDGMqyDpAHHgaqggVbp7Rw7r2GKL9iFcAHMPUC",
  "key14": "3HHfs2SeymHjxeRa6ksKhvpFHoVFKFDzudxkehYNGbxF2yehTgxSL9hL6Mj1UJH9Yo3tCmXSb6yTwWaP1wzrH9jv",
  "key15": "2sG7gu3141c2vVqdSrKLt4sbN647MHX1ZHcGNZkqk14zkzinLhTfLQxQ8FEugvW7PGnVccLwHBB2UUtwSR3fUDfo",
  "key16": "3X3V8ShcdFSfZaW838ohEBxK3VWZKUAUF4vNjSRpMHtC5Z3RpJQPqv96nCj3cf1pn3E4Kj6Bf5QU17uqrx6dBcuT",
  "key17": "34q5z8KYed24cih38pjV4exuCta4xVEXY3czpHspncSLuusfCWv78tYmNud7YBwKcLdDKRvGJ6U1kNbHKSTfb4SN",
  "key18": "2QvbZ19HDhhpBNBvoKQPEwYVo2g2X4VXGaVRdCRAD6Y3kdCosLJvZMRrEdHoKSPFadWgta1U7tWLFUDDPuJBV5uJ",
  "key19": "iHp8ewuCbdP9DH2PJHuDovVy3fYcCsB3oxwDjKgkXns3AdtHGWaZzsL3kVG2Tp96CDYPSR2urVbFHi8MJsBzGXa",
  "key20": "51vF5ydP5Zo7RpqisoaxcoukmqQEJKuDtVujAi1EWvDYGTsp5xCiRf6219K3wsd3wotNZQ4g4k1CEJAqQ5MZL7YJ",
  "key21": "5Z9N3DCrNpQ4m1dJt92FnCTbvnzXJtvXfcvyBVhHVsCWmZxV4nmnC9EZMg3JmxofZ5DsCL6LXXcFkXsn1EoYs9Vw",
  "key22": "2VoYvsP1poqHyhQsWdx6qPBP7u72FL7a2XCZerHP9oGfvkBQYKkcVSY58qo4bfWHyXo7U5AzA5282jRHGUq7m2bP",
  "key23": "63WaqfxeJZkxyGUtusd9QR5vxDR53HfYih6KxPRwLxQTRXDXKLtjGaAPsApVrvde2kRf5wsWCVxGyJEP9jQ2SFSP",
  "key24": "3PaDkXspzow4GCKFxP9tFasfVN8PCoCmfV8Rq1rXPK9MR2tsQ3rdEUMW3ZZ4YdDJusRnPnsFD8TCHZerkoMgNUGj",
  "key25": "3nvJtkAjypqrAcprtPFwxAZwKVaM519xUdLd3Ve2DGTXdxuPV3A57LYUu2F7KfsXYyqzRYLV2JJZsJjmYc8HbPwQ",
  "key26": "aiqS1wXwtoU9kEsKoaFGR25BvpavvJwtYGFVMJuxzBhEN4rmAMvkX2RFn3DiK84Tx2efEX38Uhi54VBtZSwpotC",
  "key27": "5rYsjuW4n9VYsmcUN5wwDUKK16TL7eYknjV4DRgn7uaV3K79SfabwnZ6RMhWnHzM4fHdGRiFVFE3E3SVNR2YfvTW",
  "key28": "5pEDT6rWgwJt7F2gMfPaBruQTRJj6ph42vBou2wRAqo8B3e8uB1AAarqvxfywUCP1qWDTdR2RiJJC72rQN8Fzze9",
  "key29": "V7wg1jTi6zv1oLtALBY1SYzR1648HwonL8gZw21zfT2Fi9DZZgzztQvt11ohA6bGNT2HRLdHF7L915GHZktVJmN",
  "key30": "3mAMAsFDrf2584FtJzowH4TxgCpKQ2XZVv4M8pP9ZC41bCFtfJm17PQ3znahxnCdWDGHyEAQduhtZYkWS7sjAXjn",
  "key31": "4wE6ewUSK9d7pPqrgtCMifr93wcPqiMsqKJwwqKRoz85rUZrcVdV6RikiAnnhqKpXkQeDt9roN6me7PqWExxnSyD",
  "key32": "buUV6grN5oEbN1PXTjmMW4vsoo3JvNQqajxUxPxXkUAbbJSFzbxrJPedrNqbh9REQVCiRF9fcgZz8aJtJBqBGHz",
  "key33": "4JnaVf6WS3o6hBq41269e2woXgNXygbycHM8i85vSAUrz1jV5wG9P4by1mzWuChehMitNtrjaRswje1YnK2zuaKY",
  "key34": "UbG5PGBJrNYXd6Raioy5HFs6wjHyio34LmecRv4ExNmAHLZzwYX7qA688Wh4peggYxK4fY2ccecEgvxCeR6vDFx",
  "key35": "23ykM6Q6YGMmtVideA2WV2chqJgpFyz1hXJ2obcqpnZDFd5RZhuTQrZ6ZY9Ci3hkDoRRGEZAMNyEkuzjMLyEwY3e",
  "key36": "3jAKPyXBCsVUgKGEQDUXkTShqao7qzgMGMGYZm6oHfhpL2gxNGWBYabEmxQNzSDj5s5cAJVRoTMSmdRm4AkAbwEj",
  "key37": "25NJPLNDmkfSjiU2GAHxyjmRyt6aLR6TEgR89wNxWYNPAM71Vg48e2kXM3bvpAyYU6WD5A9pRSxBfvXUPHESs9ox",
  "key38": "46s54AWP5bdGzoNXCKWd9fzpgXwkUinjDXTRrJCJ824acpPV5gUeU5eNqr4kQ3Er5umjdNC5oHjmbTqx9fKw9qQS",
  "key39": "4rE3Nwja9mKVbiFoaHafmwiZbLxER2XqQSePKvnSnx6hJx6QsgFxHm2XmqS4gpjTyLi5rezPXEkN32KbPbKEz9jy",
  "key40": "5RWdQ8JwHQt26UcJWqrbxSn1P1PDkHopJ4c7UveBY3RzK4fnLN1aaQaEng385ZtAZM9wWBNCaQMMfgo7c82HFmmq",
  "key41": "5mXeXed8VpH6Bjk3Jjotg3k7b4c5SdWEuDSdyCrn7ByYcPBTubXKP6CVCrbTRTqyGZxsHL9tshrHjENgKP2XHXAb",
  "key42": "5bFbgdrmvZ74G2XrhnrmREyAyPmAFQk4YmMjFq6LhQgUwMCNt1fbygwfVarbTXRyhhvXM9VeiCYs9vsNTkb2PFUE",
  "key43": "2sDNWyiAsno9SVVAsfJ8YrnS1vxKA5y9bWiP6vfHCY8pWFuX56QUPZVCekhD3oMCw98DA9WfvPnNrxbio3XgadvM",
  "key44": "2Ky1cWw4KDAfEztG1NXWT7m6UCVXLbyZj9RQWzSotTKnL7yTCJYK4gTi37dCSTqwAeq8r6cHAW4hmuZgptYFhB1Z"
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
