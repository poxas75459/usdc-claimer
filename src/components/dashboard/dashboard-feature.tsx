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
    "2Am1edShmcft9Sqa8Br4bmS9x7mk6XmvP3zMdfWXf4K8fC7xCT6xAv8GQ3Aq7MhnrrQfR8vPrqCsiVxjQQXAQssQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKkcL9prMxf7TnEcgXKMUDH24FywtTJVaKjbgJLCvkRvnt2ukbNxRKTqQ77ytcb4jg36Exu4gQckzJTEjUZBnKT",
  "key1": "MTpEJbY5oVMfGigNvNCEcPcGMBbEdBkXcDmEH8exgsg1VLKx87KhPrfx7pM4ebW9Yby6kdxrHCRye2bPTvgZedn",
  "key2": "4Kpxgu5J31UhhYZdmfgUsn8uLk3HbpqHTvQ9iUJsvcdwS1nSAz6HyEfycZmnR7zawEUkQAiwkpdHCFPqCYHxLQcw",
  "key3": "2Z3Efwt3og3DYfUYudUnJEcm68bTisS3RBzBN37Dcun9Wq1PWZN5CcgoHHg3iycV5SdXbmAbayfuX7VxRxAsCqUN",
  "key4": "2TPA8rqQsGmhVzEg5zLZFT12C1T8eQup42xKc3FmYvEyzAYGtHYZ6Qouzmdh8EKAvpZ4wbUZUUTddNtdHfjqui77",
  "key5": "NSDd5YFp72rm7djmaQCsgUrMSu47nBpS39tnX51G64ixJzm29xh9wstJueqqJna4p7EbSdDcUUqK9mL7NFBR9AD",
  "key6": "4TfrnjmRhoZZvD4cFVCenn4BihQCPvbCijSC3TaqxrsVNRLz8hqXruojJ5q7eXQSAdkBqFSayZhMSa1V9ZXg5soA",
  "key7": "4y8Z76SwiuXDJJLqVRc8VwPRdYpSER54g2supDLjfdCpfvcqvZNSDZQsCg9vTFUydf2m83yBTXMDn76BeiT94gYE",
  "key8": "Y2MyxcFyP2TTbkG8xa1yv2KtjDHWEvmGr5xVSWWx74UCnkDX8Kt5dTbXKLxNJpmh7enEQ31wAMu4mDGag9Xon9v",
  "key9": "3nxjMBT1edoCyCvE1E8WhhiEifKLUMitwmxGoiN6czATwA9oHGxsPfLgwXnyPVE8Rk27hyS1MGeNgFHtR27RQYx5",
  "key10": "3AeA2YFEq3VuoWWZzUGt5Zi9Sq1bxrHhvh5XuqKfrqUX9scJhKdA2LeNNFahBCQJeRApGfqN8K5aifq4bqdYBonP",
  "key11": "2cwFP4gsHctvAEvcQJAhr8rwZj9UpWYTnxop7y7EgbqFr3kaydDQVqNLy66e2jEprzdqyQDgGVUKXNSx9HCPrQta",
  "key12": "2UcZhyvgWZQunQGBE3PP5xWwGNViHQwzMDtxkmYP896gaqiWPFg9ERMW65GQ7cUmNa6iXqAKfGzzFv8gUi4wZiUa",
  "key13": "3P4NY6ZZgpVms7REYHU5sLjPHvY78WGUc12SKjc9GbGUa1gbnb5GXR3aoajRBCZxZ1H1MvowHu2rcAj5LtuLiLf7",
  "key14": "4kV5Mpzg9Gf24iaPqnfvvwuQTVNyc7bTyWxTqDnLhABgp5nZCzMRhvsjdzEVVTwJF7fsVDfUUVVzrYNaiVXt9pn7",
  "key15": "66Cays3Xrs3XydAkHAq9dLgTLnQuQt3dVvWdbeTR31nWv2VACTCQmu7e46fzmt1xALzafFw8H8i5sJk7bjwggY7E",
  "key16": "5Kgd8h7gk8EnGxH1NH2v5ShW2zpRH59SabL4RgqkhbiXx5nwu6Apsjv9n3k8NqyQb8QWHSjSYczx1p8M8Tb8Lzy3",
  "key17": "5MzsNrGrmkxXG9pLogh1o3Vj2uepR5NVzYTuD2C7fPNRWqMqBrNwV1jByFBCom1Gne8vnaMg4oJzKz3HhSWFUQBh",
  "key18": "4RXKcVzFiB2Chmdubm5eEpGLGhW9ATPiqYP2fSzgwawi1NB3xkayuG6ehEQZFJYmFu461gY47ipGhFV9qDj6cucF",
  "key19": "BXPmbrkK4cEd6hdoqBLtgwEoWds9R2UTX5xyK4VhhZ6jCKdJFFQgGxzY3vgyrgikh74ZSVsCR1EYKbC1atSvQJD",
  "key20": "ynXyzD2GnPem2JmASUVBwpj7sr487Rb7hvsCeQ4ehLMvyt3kV6h5ajVgF8w7dNSRnBKacDR9H447h5cfktCpbad",
  "key21": "2wZA6sA1UvJwwoyWtj1qPWV3TjtBWizj8geeawnVT8s4a43xJEQriy6oDkTy2qvACX5DxMDDNnDmebrt2T7VaJNK",
  "key22": "3NYsjJ8oCTtfw6fRMVbpXgu9cLzNhhmvVPtNYcbm9MLv63fyijpuEcs18AQBzNGuHa46raJHp3dqJPcfFh6P6u3p",
  "key23": "4w8XNXV568RzjeDdE7DM5wGuc3VMwdBTzxBTRb1Evr6mqVwuwtAMarWbCZaHLqz7jJeEgArDcX4t8gQXBGi3riTd",
  "key24": "PQRmrqEUG9GhaWQhE1VzLAebHb5DpkJAxx5wG8Qvrx3kSwy9zm69DbQpMY2eu3fV1iJd23aCM7T9Ht72AjN8yJe",
  "key25": "3vQo1rdtq52NazcVqpN9w7kdJnVueTanQrDkZcKE5HQBWAeNUYfzJPmHywtvAkNbziKMm76oyLQJUJc7fi8foFrC",
  "key26": "3hf1rQzCyjhLNDhLCHCbJUmvBFqN84z4n4bkWVAu7eHHSVYG2vkQpT4jiR2VnnCd6w8LFjukzkTcKk4KLALfEPyW",
  "key27": "GiW7Q8KGZ1MmnFgUVeFZw1QTZKG16gLah9RB1aqRwDF8jDTuJYvVBoXWMVA9ucSgE6ahrVaM8QHnmJcjzwSjPpW",
  "key28": "27CZZQet7WhPF7gZQ5q7wwL8W1HddzFTgcqyw4FegCygmPaKostC9ur7tmb6pG7KpsALuHbaUZ1iBodN6cqfzVzt",
  "key29": "3pUAudchkJppgTmbxyFXDF186Cf5SGX39Af3abb5TnX4aKACVWeFvxiJX58JcZqoVnNLbo5oy3x5gQ2vmksxK5YW",
  "key30": "25vSJfy9Xth6LsCymvfrXfUuC4fztuojD9nv2RUtfUBLfSWbPibfynLvc71mVp99g1Lpxnf3d2uvzgSnTtz3C6LN",
  "key31": "4d7XnMEKEsBAHhkEpMiZxxmHPZRK28AHKWydRNVeyb5gFSHRhQKL39gDp2auFZBHK6iqWfD2hJH97SnDfMqCPkfA",
  "key32": "Bp6rRUtwzFU8sa5HSWmmVDGovpqeugAJcrSPLBaj4Vum4tDgQ5QKXdqecQYEm7ah2LueabWrVdv7JfXMD51r3EF",
  "key33": "3emNzDxEoRDvsvKiLoA1z3RQvv9x8R7dLRjXpHUSpZALpULeqiZmeq1VuwX6snbPrJvY21dKdY61QotFBP1oL9Yg",
  "key34": "doSZUES1NFrpNkLqzWKs2scNhHqeU3vUEMPtwWy47iWyxSM5wMAhVC5vBV9XbpL2CUGbjDSnDq2dnABDfKvZ1Zn",
  "key35": "5cbpJfpTEo5EfaMUHcPUttxNaGJzQeLadgJ4KCzceweSoFQR3MvpXETzEFy4xhS7pzr3uhi6eSWdEiQQ7EjswZXh",
  "key36": "41ajJBfTi8dKcQfokg1HAu1TUXZwyREPpYCKThwZsJ369BnGgmbABTxyjFKpqGVSpYXdbDsUJXAdnxQwog93ZQd5"
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
