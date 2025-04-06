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
    "2L2FynLCoPxYQyPinKhEwXmzEVywjhZzqTzTidBLwTKxxfrRKHmcNQhxWoxmAug6QqSppLKg99bGJUpjNYyb8xZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34v4BYdUPxFh1u3zEomAb8mXnZDtG9TMWeo5CuykW5XrqUYv6pFAR9GzDDKUXWgQDsoZMy11tT3qnEPWSf783DbF",
  "key1": "3XerDTxLqXDtz6XrZgRwS3DkPjcoMe54uj9wLA5jz42rE7gCyjZWKm6sx4t5xVsSDc1spychXspRts99bBUw86Px",
  "key2": "5dPr3aBVJMoKx9ShWLNzmgBsJyPxXUDvq3LqLTPipnwUWGFfwS6ArKRZQvkDw1cRHJeN6Mh5zaK97JpxLYFjKRVc",
  "key3": "24UdDx7PShZMwZJAq8ork2wgJX5AadDK1h3VeZ2fc7E6w1nKZdC8jupMwucat4Ad75RCj6JWbYRotJ726TyUhnMv",
  "key4": "5pmr81r9UgT7VpghwKT1Sxv32SyLuXuKPg9GEu6S9efpxLrFuxNAsdNrgMC75ieVMVuAxadUxF8L9NiWpkDbWm23",
  "key5": "47e8RQh2aEdZeLghJgHNyP5Go63WZRbHcoj9NfcGqvBZKz587AzzxBD1jqPvfKFbs2vn2v1ciLf4534txMVSqFAx",
  "key6": "4NnBoU7DUCx3bnEj2MdUsNmUaStZWvugfi1xepN4gRG5vohvkuA9STFUALVwraLuHZm9KADrmEhK67aHFggWFJb9",
  "key7": "3SFVrBbYwmT6Uh7ud1EQJeRu2JheUoLJAmUpaf4VpdJNPrNeGEUWUvLuSJWvuRz3hEGo1qvUdAHCtoANkV5MdrAU",
  "key8": "DH9NsE2SJiH3bCYARMF6TPqY5eCHzo4xDPh4rs2nLexj4d4vbKq4ks8smLWJwgNtkq864MQATNhRyw2ADGLBoRU",
  "key9": "2BzfeAd1312okVaAETCC37xRr17Hs21s7hyw1hq9MSBiJLrUFPc2mhHBkgdeafrZ8MMN8rzDAL8sYz5Ym3EVeiCy",
  "key10": "qzyqZaYPtepVLeLxcSVpMHUas88vjEnXUXY7pWnG5HJvCNkZeENby5G5EZbnM1soMpwWhz5ZfHG6uYa6sEcFvcq",
  "key11": "5AExPFHCa37ZwXWN4X9e75gkYV2YeLYniNVZYq3vSqdrvSy1ZFkmEyQAw5fKqztDK5BxfK9TfNq8pSh6JCZ19zmz",
  "key12": "3RfWK1Mh3K64PnPCckxueu7xHG9yHRKyJwe2qw9JVYsWkkis1R9MiPJ3xN2eD6v8M9U3JoAoib1X1xUrU8Rh8XUb",
  "key13": "BLUhsasy6rYeG6SHizGUb4Qr4fbhx6w8SUh1ygngjrPWMM2wvTqfyigg785vKvkERX7vvWhc13iBxNGgEzhUWfY",
  "key14": "wzVKh82wxzqByacNrx5D4KQ39c3QH1uqExAEmetmg2YgMihqFgwkG8MeJs9gNiNQFCrXQGE12zFBsyhCgqYBXrn",
  "key15": "3doz7whnGvVK4KWEJffiS4TKzZQA6qcLBg1F9PCDLJnTsyxvhFGF7RogUQMX3PQCCN7vHxAtwr4StbkGaXUCh9uJ",
  "key16": "5dvNdFE1Uz4GQffiJPUwhBX891BoPctNLFi44mmtXb8i5gsC6FExYoyCVXSmfy9UByVPS7wLwP2VNKVXadJWwbMe",
  "key17": "4xy9U992bYmnwYa2uH9Qcpz9CJdau4b3FppYUsVShkTaxh4XU2ur2tZKroyEgiqkVeAH1GeivTVf3UY9bvWH9SdB",
  "key18": "2iCrKvnB4DnikPJTupTfBuQD9zCyFy7FU24Dgw4NtBTAguGJjGJp6fmChkRxtFc7n6PL4cRC3P3Sk4WDvpmzTLL7",
  "key19": "25sXp2z4stiqq3FKuDyMCgozoiNvMquVvoYH3aBWn2obSyXKnbcNihekUqacoWMUxFqCtXXUHgCucpxSuBpsjZX8",
  "key20": "3BZS22fvykUPRLvVcUUfE79v3FGZRDERfHHgvymRFE6Gkai2aKcoWfiBeLJ4bPxMUbJEx9KTBAioxzd93jahBQVy",
  "key21": "4JdJ2iYaT6oynaQa39AhsccNBZEgqDxa3r2wjLB5HFbya4DJ5BQf5RhFBQZzXgTMJB22JSp7Agm1skzp59A2LdfJ",
  "key22": "35rcSj8D1gyHy6YGknewHnDpWxnwC22PanzKRTET6uctGAyReKQ14Q4hSjXKovoCf13q5qigiVdjwZnLNBEgFDtJ",
  "key23": "5tUycWK8jHU7NsiTbH6eYbohaPtBXnruEkZoP5C4AgRhThn6Mz6BbMPRLPMv1UwpFi9RcWxQH4L7UmMPJPMMU1kC",
  "key24": "U11Q6mL1GTisAn2EoBxm6CiM7xqEXoFiRrdiEvoDGySTJ6gwdnoPuARnSKniyF2jSF2j66K5i5CjYvbL8DqPCJm",
  "key25": "5LZqjTiAw1ZcRv9Mkk9WhXTnmjnZvjFRwCXrfWxow9BvPDjGUiydgwTf9JkL4YPnDE6XtceyvMEfVgMehNbxGu5L",
  "key26": "5EUzRePmkJzS9esLW4ZHuFvvXM7D7gViZbauh8oQbhe8yi84RL4MzyDCJfgWqpp9vFZePJ4ReMfhTWnyJVm4nVky",
  "key27": "5kCDrFmkro8h6ZpzDHq2k85VMd9sopTWLUApJemfvKEigm1bUXXaxxfbE6HDtjfwyWWXcD91ZgjsA5V4k4phuJ9j",
  "key28": "4UTgqQJVwYzNfRDtEAgLCsjBjMXSF6hzPfJzzeD3XAoBDzRnUYaepNbXyZhCoAxKhBd2LEtRDZpsLjj9WbjDCtGd",
  "key29": "3kfc7pmoLmxH5zUoH2xprWeaJzXaDsEz9mf7CZCCdYtyuTTajujP5U2nKfFAXJUyuFWK9H2qYMiMGBCJ6nFsm5vh",
  "key30": "5ry1Z4brKYQb46fzADDRRu9oHb9ErahoVfJd7zWTXm29uygF83vFVCPaHejCZNSwE8vYU7D6DE1ErHpMycKrxnSA",
  "key31": "5SEXQku2uvDEa1DaP56ZJGKUTyaJtazj98XdWsmY19qwx5eyvCPVnyNuXBiS8ab5Ww18MVdfFJg3PwxFkgEDAodZ",
  "key32": "4waAQj8U2fLDUrt7vi87vdeQnCq93sM8B8Q83esKUgB3iurHkZ27UQRWUbP3Tv2ToTLcV44KfMxwATvDoW6jSNFX",
  "key33": "3mTw9VjGXpaj8ssR83ravZEdw4fEzPADuc3pRG43NSAZjkJmY4N6pkdam6RUSgYsj6WJfYQofNVoobA5wJtXiAXr",
  "key34": "4UzK1ujc3mzwD3sV5HiWK5YPGfmUjKzaXXCEp5ZFZrJpk9oLtFFUSvF5z5YLBcAZY8bhHtu7VD4qhEN1sqHs21M8",
  "key35": "4n86htbPFGg5rKpjm9YWMDjbitGy7eTY5umfa6k2LeRhnVw9aAyuo6tmHPY2vSvuqK68ngy9N1JFEe6NT2Jp4MZi",
  "key36": "4r9ri92hwc1rPhw4WMQ2joT7hogoPpUzq9muoe9KUYYqVbmTumt5YRZ2fFPjir2VdyhW2emrAhgePJDW3pJfDJtB",
  "key37": "3HTALNYPk5pntjPmtZ9yfCfPS3Xkk4ArhzpCimG594zKVVwqPpucJunBHbUtXbvSrGasbL9dHvvSvUFivd5Zoi3V",
  "key38": "47Y1GGD6i5YrPhNvr1A9GeaUZAYTLdQZoje83evrjq8vobDTuN1FctcnYw4wM6d2gSAfiyivR3rkur6Jwxmj4nD7",
  "key39": "2pS7Mb5exrqG4UQBZxdr67DSqiMxVietM1iRFGFq5aekNDei32o8M3YDrUsceNhHU3YQjwxSEL4bkU8iRBjqoTZ5"
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
