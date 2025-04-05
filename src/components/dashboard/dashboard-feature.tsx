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
    "4oSnLz3AVfUki6b1jKGZ2xmLopKEXgVmvJ71QnFxGi2H39YNwjQbVEzsgmBneVjDVLUcyW6UhkyiHj4VCgtsxAAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMEdbVm71dHEf2JcTkqkpL15YMByoswZHYRR5NTnPnZdfF21mtosvMfxfWdhiuVASzMQknXtgYrZkt9nnqWgL1X",
  "key1": "vSKWW8W3i7q65wYvxDmyaNsKXUWXL7he9asXYJGFzc3qgmZoC4Z1xmxVSPxxzfQokaLbu68ybjn6Vm9CQjjxT5A",
  "key2": "5T4QjqVSUPKH3VaAc11qaTc42zSznarRBBh3JsWRBtayQNQkkhsLTyhJzKdoDxijawFRbZmUDF2kGo4ouQPd4GRc",
  "key3": "zmX5yAdBQjhjbYxJxd9n4AY8NhJwsjNfGGKLSvtGYi5ZYmNWM4WE5sUw3J1HNjcAczDtdU3s4U8Nxh79KFygx5r",
  "key4": "5dK9xubiRv41hsD9FehCtrouXgphE5kRMijEpuwCpRDjJg5RcfKdtXgi4BYBRsH7czrttrWqQAfvR1zCKrK6Jbnx",
  "key5": "265KnzKcVVxcuFdB9SFLaUW4gjiW6eaYEsMWGEhESvjjuNuyL2QidViqTYjcX9NDusWTpSQZWTyMxLRHVHE1npqA",
  "key6": "zYoDDsZb3JyYXGGxToXqZ6JZxr3Ubi5saTjVXkAN8GM7Mvnp2V8EmsqZmo9r2F8uPnCvc2XFEobPWs6J4RF68Zq",
  "key7": "3s7TwQHXT3ws2g2z43onE2dVgUas8LDZwJBqToA9a3wymCAaLjgg8c6HY5UWBiDRnNraBajnKqkCLS46KHDF9Tk4",
  "key8": "5EVMFM6jkUKepETaTAckmgYNW5bFSYqmCaMaActdKTDeWbFsYWYzYHQvw8xswedmCMLRMW6V9DG8gDLUELYVyjdD",
  "key9": "5GEkyrsL4M2aWu3b3rC2XpPzKWM4Tby4dStupLfGkBrR8RzqbGU6fSQgaJqpcGZHPqCi5GHEvnyWRGowF3HyL29U",
  "key10": "5iTXArUg8bHuzhxmrCobv9yKJfN8xrXxsroUGEzo5JtzFFhRLgwSuYFp8CXBghNZSrmQfdVD4UKBZfXLkAxvcWn9",
  "key11": "3pms4Rdeyhxb7RCJaYFbUyHFhu67eS8LGev9jDnSWcaAYtrkfz7MVZy64WDCJLjv9w6wdnKx1vxPdYwY7ZaBayrq",
  "key12": "5F8dbsEpfhVnoSG3XPhgWkK7xCYFCbcfCwqxekDFzrkmYq8uB4MAe4epb1RBUUbyxC5W1QAwKwAdEwDk5EX6N6zk",
  "key13": "pEQWLEWt2pBhB6NYnxUqBTGF3TzmBYhiiyi4dy7c2QaddqfLtyXqPYxPqXkuX8f1h6cJUqGjgygXgPyhKgFtuqV",
  "key14": "2NXQ41dNZ9QaRU2Q1qp1uhX2Af4npwoUEuDDEUAaoKPQtjr2mdr7w1Lpib6wmu9B7S41DUUyXMsg8BKw8jGBt245",
  "key15": "5yvUzp2ddYyq9hBPzgfCYcrH1XiJ5BMVegMUvQiXdxn5Mt8mpW42tAC2ru6j8S948HFehGYAdxyHngHCvub3a6LS",
  "key16": "2KUobi8GVPHivzazbUYGTDJ8J7UoxfUcdopxHPVWSPLaVeBvUG87m4PBqGo3iUxNwjfVBLnhpN4JsvXS7nZtroJy",
  "key17": "4Aow1crPFs2wfVvkTZUCSpmCjsg2ANPQWyeQr3uPs5fhEyJZS3JJWd6m6oi2B4Nkhg9cmSyAAc2yFC5jTNtgsu2F",
  "key18": "2XmLsFnVAYu5UvZffTykxTEwAma3Dgs6Sc4hiNTjLQs3V1PMxozY5Yk2d4NnpdENeZvruPDbM3g1KsZiRTKbemEa",
  "key19": "2FfCZ8mTbmpjzCc8oC4WCMrLq4ovr68smKwUt92o53fr4xkSkPHNti5tK4Ap5MoQfGGLhZCHm2p8Ef6RvTmqKsDg",
  "key20": "4vxbYbizV2wqtAyvZ86UCmgrgxowAWehCSzkZSCiFzC4v3n5k8KFAWm9u5BjkSY1JzEKndmjHcqQccoS8jpoFD9z",
  "key21": "2R3fbTDkoRaDNFxqwH3XhdbpeF6TrBgowikoCMknqCk1kx2yJiYd8hWU9U8EPRr4KVE4jzJ9CysPAVGPghYkfVKv",
  "key22": "2rjKaEixCe6zJZ18SDQ32LqftrEQrdDcyYGLdnsDkmfzoRmCgmEDay3DuGH3zdvGYxSJUpzhyooH7SEiMyWn4oaa",
  "key23": "3o4WTXgjfrRRCMxHzcPGnUwMzwJXYtRCWUp4wfo8P178ygMxzpPK4VykMKBbAnqsbRdwwQ6NKx6w2FkV3h8bseWK",
  "key24": "5mZp29cgka9X7a1kKgiwxu4V7dVWKZajpt5zTrXNxcL8nK8MWgsGkwPvB3XC8JQynyUqSqNEgGihSkZD1fGjJSAY",
  "key25": "4Fp4HcD4HbAzoeyssrjarYYGJUHyVbfVMt55gbwdJr1DnbnLso6Ns1DKxgHzVWH1nSqn3aMBxHeL3dBNgeJmRY7H",
  "key26": "4X3ibLjcM8QwZjbqUn1jd1JCDbsgezWr2s5uDyjgBL1iE4C4TrqaHMiMPgUt4tuvVfQVGGjVaPnc7kG2NTTYBnzW",
  "key27": "45A6prXwSBT9tzG47ni9e1N1GzezoYo7DiG34hgfHg3Ex6gKnmYsbKENwDhwwitr3yCWtZN5Rp7EPotqXoeZfQmq",
  "key28": "582aV4PN5x7GBZYQNUQ7zazDT84zidBpqu2TjLxEEwneGMSE4JQXAFvwB4MN6gbxPQX67zmwGsJ4YNsuULMRFCGM",
  "key29": "3DWhGkYWKcN4bgz1VQ2sUnE5kaGx3UqmswzSWen9jK9cGVaxPQKZK5tw9tHQLwfDL2ur5zQcF8VUvWnPqgC9u6cv",
  "key30": "2E5gjygmUjPeYWYKcX1c5da7SvemW7fAnGtDmQPBmXtpgfVmjNzYDsN1kF2PJWvxbE5wgPsX2rcsK7YFVbfes27w",
  "key31": "5Qkymep38P9godKNGmThX2bmqRj7aaUk47UCGAHc5V3hSVQg3NVLZWsetwT6MAggDfWWekUhWh129k5h3WK8GRWC",
  "key32": "49jKEg4NZAPvDqKvHHapz6p9umVEfp3if9jjdpAXEJSpTMkZZwpYUJA4Bh9SvdN3HX5PyXrfqU4tiXhsXFz6XNNj",
  "key33": "44CoCdmPicnJuuzczstcxjnpEbyPPXDDPA3BreY2uPGDrhq2ZEsoafFoa15ZeqjJh2nrgtYxLQfRoKuBWmot6Tm",
  "key34": "3RQjwHTjKBeCaAmQmMj3Ygv7eUuhXRhLhgrPqGnWwt1b5fFqhyisaio9CqnYrBRMs4dE3iBLdxQDV24HteKy675E",
  "key35": "4bZ9R2CrLu3jHd5VeFUBs12oEzDJmvZVDkknMtTUfv3TQapGABWHTbYDZYidrwauLEEjz9PpHSDAtY6o5oM1ojvT",
  "key36": "3J8vtDfkWMRi2iE5xtYU1KQvbC8XqXYgLix7HWsvcLdmoZS557G2Z4eyuEC6kYNwxHQJ3AZJyKYokSvVopSTdLeu",
  "key37": "41a2LHiBRj82UqDbsf4ffimvAuECQMBLgqr7Wc2syF5Yued1F5NqwH3b5qFDj7ZsfbJ8bBsbYghzZb3oqJeCahce",
  "key38": "2S1s4KNYR1x2fDscqheufMguYpZFwiswZUi5dE92LmqCNq3YZcaioBtjoicJANHY3vJxcK4M9FGrsEaSZ9dSVbXs",
  "key39": "4yuksfzMJF12LtwGzjqZfBwmzMysrRJq24gJsgAYJ1eNTuZ1GAawUCNbtjrBx5YH1cw1xBd6CgFvdatTivDNyGv1",
  "key40": "4QmZV3bwxhDfKxJ2UmpDhDtnxfo7AeLr55GZNcm9xh8B75zmud1LVuXou87LSFtCBTQ7umnwTiWuXsADUUBM81tC"
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
