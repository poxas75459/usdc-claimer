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
    "4tAJXBJzDKrmTP9oZJeEeCr3B8xd7bSva5PgeNdGMr2WRj6kgjZLEk4U3579LMRUJtPB181tfFLwvADvSAaqcpYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7BFycqYkQDcQevJRx8ixQ4VV6BicZwnYdDdnLxoixEq5iPHUUE7rvcrcUuUtjE94bhYuo5gUFwQxqyS5HsYEQE",
  "key1": "29BVwL4FdPQ3nDoexD8wWPfPYkSwZu9v1V5VRTDGwHC2pTvoKw5Em75bCo4qxQD1qVg7SP2edKxA8JeXCN25acrs",
  "key2": "3RoPAoyj7z1Yeo9vjZ56PqSZ9XvwkFFM8W2wiwJwibAmmiosTy84BxaEL7r7bzDTU9LKbSMUvF3zdyRRekCFrw27",
  "key3": "4fLDtvgSiuubag1CmgYRk7F2z4Y9BtEG9NfvLBbUgnBRiTKFWRvD6WRLv5sncBp9NQjCtDtMUSHtsEMTcb4gcAYA",
  "key4": "25sMCT5MdnQbaiYqYJyVgetKTEG5ooVHat38zJS5cJ2dgHrXbWAPxJS9F7jh3Xg4ajK2XgqUM9HLSZdmp8BoY2PS",
  "key5": "RWbZehv4NxY7GebMnYAuE5wFPGvLE3rYhacddPtEi6c1Qnqn4ou4cdUHk4NYY6vevjzZW24sF21KUMsSEZugGCP",
  "key6": "2DgjSGtWNwhgpGo1mrtrhVqDXWTp8PddcULkwnqzwXbogfjzPr96BDAo1K812WoUygbaryq8sZ8nDZSfCbbNAZmk",
  "key7": "3agotdbCYoZZ5EdreXqxru8t1wimVuJGXxtX2iBumfGkz3C2F3cMpb6UN4v9W4r3VmqbUWLYJS8RoBXF5HvWRqzt",
  "key8": "4cssS2NPZaAjeA7atNugEGE3hLWDLJ5YHUaTnggPYr7pziKFxYLmfiJBfe2uQzwhPUsH6bMGVH7qhikowz8MuVdj",
  "key9": "tNNDUsS4nkY2wwZtw6HTbrULLrYTBKpJxarJ9u1tyisr7RAg9JeqRNarnG7fazGJfZiprzdXBq4YemRJ7Q8k2eT",
  "key10": "3cQQJ7r9LvW7bfEGiP3ucu9LG6MygsJPJX6NUosnLb1wHWSqoSng9LbZymJvvdshQqGXwGhmApKK4JQFDfdJDm47",
  "key11": "44wWxsr2WFY2EMQFXuREWCSF4p8rYGDVjQ3e1UfzK6F3VTVDkUb7s2DSMJGutZK3Hf63YqnAuKpGdHFeZVbniBTG",
  "key12": "2GTNujdyzyopcEJxRzz3a4CzEySK6RfVyvjKh8jdCX1TV8r7EiaGuvxSA3SNefJ3Z1A6wsgGogCcnHypPjWNfsis",
  "key13": "4vWZQfxgkv6ZVWaUQo3Jv1g5J9357im5FyZj5CnJk5NxUyCAru1Uv9MvFtcZj58pTNnppm7hWSxmEyMUTaT8wu6X",
  "key14": "4Ud5whq5Sg29zTDCGKH2xnT4bjUjKEKi6nC8WtmUej2Aj7xsRgghxauLkU6SppovpUdP2E4KEMfxK6AQTxZcwjCi",
  "key15": "3DycerQroDSyFS6zVLQRm77eaGz4GYMavmKheSEJtsRjk3ZzGqVnPN8dWd5oN1ycCvKdWhDiSqNxWJDoJgtY4oDV",
  "key16": "3PMFK3cwqfSgKAnVytrU3t7UXWHZK4UMYaphbhxymW3aVxGWMfKytinbzsRk661B2dvd6gEYDnVmo2V6gNHKp8kp",
  "key17": "5n8ShBDoeA97NcygnRfMjW3u3z8dXwruXeWN2UcuaGkBa1ivSw8C5tMd76qzPFKqaXT6cChMJWpzLkni2fdFK8Qx",
  "key18": "2KfpYcTjpeqjqTRAqerXY4H29dy5sMvkEaFxix29dstafuEbnV5854uB2VqbJKXSibyaqWz4FKkjLUwLhzGfsqQy",
  "key19": "vs2Lz4m3rHCB2xzZbnaWmpX9Mrb3Za4XpSAjPPjds29FqYV3w4juwrukGGxusu59JLp2VBQDML7kTAMLNXw7cbc",
  "key20": "2kaz7AX5ZXpKQmK1BqpzuHUGTDuFiPvBvgpLw5GxpJssHovPs7hZMfsNaHG8N3FnUgmsdghw8y21vUfy7scmFxDV",
  "key21": "5o11EBW4vBWabvbnriJ6iLVrA322JEw1TgaXoRKiHC18YH3vE8UwXnUmaeo2cW6kJc2hA2Mku2i9ar2HaTubQBD9",
  "key22": "3z13N11gP5rqAEg7bmfdBqtwyP5zTLuNpVzu8GoUZ5gv1wB7ezBVPnJLepKZYeoE8u6DY5tEdCvgNUJMW925GM68",
  "key23": "2wxpCc56HwaeBz9gKg8SUNe8hzysgTFjdQ6DhM3wc6EBsdmMp6d9HxELr7pLCz2D7NRRStt7AHrMhDqpBdR8jA8J",
  "key24": "3GgsSGXpWpdhZvZFu1xfSCCKLrRpfo57vpyET46XaUvpWucehrx87MtPcrq1k5HbV2N8YSBgwhVeuxwP6kPa8MFD",
  "key25": "m8GvxytmZDCZaDSA2qKPsGrzpDtvH7cAdXTHaa16ySddsVJR36FiB42rNXqHntNYBcWTzyBq6eWPdcRpP1oZxDB",
  "key26": "2F4sLNAWGCLdV2nC2dL5WMTaCNSah6wAgdjeowCm2mk5VHUfXieE4hMYHbswyuS6QbrdNp68nonSTixbdJSQLjer",
  "key27": "2jezwwZfrELH3AmVR4wvrPfKvH2dJ3Ty6LmtiCPjPrcNghiRkQRSVDnCJqxgzdaejpfxrUqPXzdhRJaMzM9tyZs6",
  "key28": "5tS5wc3ZJYfg4JpLC5GQia2GeBqwADnuN9zpjdPLzNQLoM4SZq6Y7uqjGutqUhNLZJTVsUa49tfWqhHxzWyzfkjf",
  "key29": "392sBP3nwkUVJYALtiC5Jbibah91NJ3zapuGQqx6t41gg7U7iRYMr41fSsnm4Au8Nh1jdJHmh4FEXVSQ4hHZ4cZX",
  "key30": "39B5H3uMfUD4W12irdsEAEBb4xmAFGraJBYPCnrRKYsgNW1VLaQbMRnJC3qEqRY7rnA5MEthjj4hvzfeiWBcd142",
  "key31": "57xnoZrSfRcfjV1wroNuP7e23XQ6pBsioE9hbY5BYWXBRgqXMaK7ynoTsFtC2iG5QYNsMJCwhZ8B9yRP4SxiqgD9",
  "key32": "nsqc4PTsGrKztjbvvGdEAbeP4o6WmsxZgYwpz2Y8dAFdezB7wvVdBWfhoThT9JjPWiyYXe3ZxjX9s6CQwWfrpKi",
  "key33": "5iZt2A7NPbpx9jgMPejrhG6GXXFyTRwRx23w5KijudEFCvwqNePkVvY3WnWdbRFXqK6GJn5i5ZcNPPpqR2rwRbNc",
  "key34": "65uQ62YuM6pAsPopggkFRikzTnGkvYJfkZpqqUu6YBkSCrMKAbk1fn6CGXnP8t3EEYsoPLi735zeDF1uuzYChd65",
  "key35": "4upSX1wE9bbwG8NuB1twoDzaW2FfAx2jSeM5T4ywkRdUtVGp3x7kpkdPKVhFj7rbQYQCB1YVyTxa9u8JvTH5mnF",
  "key36": "4JSRRnczw58aqVxg3azzP7SzpxFHNjY2B98fqqC88vnDTm6F7jW4stE7VPJP8ybjpGfGz9BBRh7wdYEHWXMXURhv",
  "key37": "2cuoQwhPqDNe6JSaeTSCwkuxcm8UGXptd5zWuN7XbtG8xiqGihDZ983NNwjppdLR1HwL6MySkWpg2SiATprJW1Fx"
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
