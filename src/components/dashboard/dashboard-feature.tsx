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
    "48baeSuio3UuqA2gcMAncsXR19FBUVjkYazufM7N6ZH1is9pDMAKEsUsiQWcyQXYoizSEsZuJxJcusNo7VpoTpnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMYaDP8RBwGaEqVsFm6rjbf6VyoaEwHJ8ceEpyMyuaNxRErEk6MwJ4KUJQGK8Kpx4am4ZF9BwE5Tu5qovdB8y7n",
  "key1": "4yv3XcbUZydJoFi6rSnWzrkdutfKoXyx9n88c57gvDhn3kn58kdWXDqgRKLpTSGCK9wMXKrqKopY2Qmwvf2s2evQ",
  "key2": "2QvoupHrZay3w8pwZJwDNezxT6GfCPPxPivsDRKaTe1XoRn6WrzkAkixdzDELbBgGmJ1UrHoCqckWGFDQmxKQXYA",
  "key3": "4kNGNgBiKnd3zHNfahetq1RJpVJgRyP1g64b6Ai1HEzi4hyUekoen6w2LuAPYe9rv93Xng61744XPVRTkKv2fHhh",
  "key4": "5CsyK5UzpvTrfT1Bw5dEuRhonDjhLes1SYy7Lor1n7NV8twTph2zUt6TG9Fwm8RZzNkV6NgvvXjTVHauN1AHhtu5",
  "key5": "3AY1YCqH8zwxt4CwhHpQCiRhgdfe59SLLWsw5w12eQSfA3pR9rBUHLkYzoVUgxNsXV3Ana9EmCEB3Le9CQ7ujmmg",
  "key6": "5KLKLx4LxvANA363Z6vwoy7QV5Qq2yPfiiqi6mxWehu24t3D8YY23hNzykaVQWtmqgzTSXEwVSTjMcoEvXHJhFoT",
  "key7": "gzPjcCRBk95i2HJCUqBPWhDet8QrJyfwoGhJ9uT4Qwsh1ETvoaXgYd6RSfrY2yppVzCRkMZ3dKkHToUc3AHZTtv",
  "key8": "22FhMLHx7UgnPevoVmSHvabZXs5DEeikoNz4PJgkseod1znA5onALykGXqjqo22ZUeUCPPGB95gkMYWJo52rihoY",
  "key9": "fffT72xgC42fEsUV9uiq1xoDf9Am4ZVHBUxQCa8R5x7GRWWNFxvUn1tuTPUKZMm7P6heH15qYsYBfpCbjb5XxwE",
  "key10": "4ka8EnH1DDDsNwvcGojkTAweiNqTDkE4gQHHfvre122cjkoH7fWko8wysrL88UoQrK2RY6BHpKuCS4ZF7oqvuQmy",
  "key11": "5KznpMwKabWafmA7eQZDtr7DgzCdHfLsy4tnkrWBYqW84BGLrWiA6a6SeFU9SgToCU5UdZK5W3QZE1KyrD9jHfzy",
  "key12": "3tyg3hb7RHYema14YLddiJk1cMA1ewyaB71S4XRuJJoL9658hLmamZwwsQpPHqQg2habbUXjeUqqPrGq7yh4YmcE",
  "key13": "5XSSL65Kpzqg7oMAKHaLp4dc5yTrypRTikDQPLT2JMUZRfrsDgbULabEGHnNme4oEVysTC1dapjUTUXZwNXRnuJv",
  "key14": "5FShvWoVZdXPXDB5xxd7TeDrBRsDBTukkL3Tx9RrmyVUwGRJNnnfhq35EjUXRpRzMgU9xE7gd1xGU9V9cVnoC9Pc",
  "key15": "2AKW9ydHWya7MtD5M32iBtmWKBDxm1QrvF5stzEVdekfGqyJEnAP1saDnxFzrv6UTiYMDCEvk7bHWQ4MWtfQQKhE",
  "key16": "58kha4qoz4pJ2LiaCMuL5KmUG7i45Hnt5CoP8TV5BhWE4RzPSvNu4utbfmp1jearZ7KqajcwPeQa6VQ1srkKMgKE",
  "key17": "3YpRTpHKG6KrpTraKMazY6j3ishyCHnxypRJ6Tk2h8LCiVcs9jYmH6YzuAqBRFE9rjVjqjSqYMaZxySonD95H1Xu",
  "key18": "57FiczbABZqPjcvPFYwm7SAQZF1wVR3AAVj9Ef9D7iKMKWeMEQa59hWbKywWmArhxZJ9DxGabmBa4ZCaqCC9Nj8P",
  "key19": "2crfrqKBwcFryBRRG9QhFvp4QMa8wU3DKWuuzqf8HuicBcDWJsiFqRh8Mf9qoDeMbPSWPG66dGPhqurJMyrvWav5",
  "key20": "233QENPFtuU1NYzKhtMW2j8uuCtKuzbiVywCPFELgRZXJXGrAf2AAjdNFoM7jnq1pnHnmExWV7R5iEMCiV1fKiSa",
  "key21": "48DXMASJ9WXmozXmLsEKKihfjCGXcLGJsFEJevuvNUBTwiCZLUiqkYZ9SLWJ8rHHDUBE5Re538azoTaZzj5h6KS",
  "key22": "4haZFrtfqkZA6BDen9X19yuh3kXYo7zV89XhR8CgrERxVknwRBM5TYNKeg49jBC4j7tCMFnhAG8uo8bGKviSuXad",
  "key23": "3Y3pPZKqgp4V65Jp89REpAfeS9t5pU5NMSgWWJmadM6L2udhDrzUsdzh1hnDcFLRf2KqBs1ChLTAcyaDwsKGsNwv",
  "key24": "65vdb5Ff3n18jgnCxc7V2BwRyKqmonXS4NP4dLDqBoY6D1svXzgys5K7nWZySUexcyHYGPsRryDUHbgfSatuzc1n",
  "key25": "5g8fH3coejKKbfsj6mMuJja95Sf3BDkdVuNZtmhuyAPawruFArBwuWdqBaqAK9gacqVQSbSqfz5HaSt3mTz5Kjq9",
  "key26": "3YqMxT5pogFxseVkUnQSzyEWRLZEWkdozSD4nVzadhnFWSEKB2yYXnMBM6v7j2P9pQw7NkWE7Pec5T6Prj2TxR9u",
  "key27": "4wj5Z4Lt9ko6MzJBRQ94dXYmnEhJ6WJfUTkwDMaWENeBer2HPMsAjeGarjXcTW24RcAF56yqXrrTcUunfzGwrzka",
  "key28": "2rGJjiHwF9kPKqWQvVAzsdPs4unxDe9UBU1ynUyprTtbbjb9P9RDEK6N9iyiBeoDeA71trCYBpnxxoGRVpxa3FnW",
  "key29": "37MfnwYFgSAJJoxzGVBDoxX1rkL7PMPV1TJ1sLVqgiYCkzYxJXiNbMK2xuXnfEzNXnvYo8U96xaJTLdPBYMgfSJT",
  "key30": "5QczB28pZFQP22YLaruD6cjFCE5MtnJbza7YDVqLK8vVxWJ9DkYb7NKSPfqXUpAWE5NafSTdSoCc27FzNSMi2KPg",
  "key31": "3NmZdvHyhXUoMsqD38g4XPGyvYJNo9U9qHHsyJHnFbqE123YsM8WHnYZU6zhBVT33GUMLAVcdzJ3CD3xvVDSx2t7",
  "key32": "3B7g4711MYZ4eAW8aiWg3subxThFkq4ucnScbqyVaVvjtMtP7WmvMr4S7uw7jCJu6tqLstnWGoWSVJ3odYVKmgnh",
  "key33": "3mJ9fmNcgBJx43y2n4GibPiECPTT94TfxrNXKuHs1ADKV62nbeWdGcRwbr5bKUpVwtcXjZ5mhdXTsPx1s6XQXp6R",
  "key34": "4RrRy62aYaGicopxUkBN8mGJXENKpdUS3sLqMRtrgmpzko3GrREU5pf429hsj1aPSmDm2B7VhsBS6jCMifNocYxo",
  "key35": "5dmHAiUh5NzsV3mj3d1SuGrV84C2c9o2CQMCeYyhWCK1di3NTYanjWR6wEC9uDHkyWbaWSDGwi1SAQjwdzKLERPj",
  "key36": "2DdY5gGcwyVTdQ8e1ejCpVhfRbCyNZbQg3trGxmW1mPkkVigfdruMkkKoG2AtQ6yimPcxVUJ3365ERgTisegKXpA",
  "key37": "5JLawr99Hx7X8s32aJCf7RMnAqGE1Ln3yK6w1MLRJk4Jq5RSn4P5Tzq5G6qkWj2y1b8TWyKWz8pvmkzTnyCGVFGn",
  "key38": "2pZdutKuVHxGDLXxgRmxC6Jkk7cjmoTmwCAfDy27TXvFxyyKMQE9NLNkT7P7sMaRBrH1rqVt46tawySm2pDEVv6k",
  "key39": "4FnAvfJuxmHni3mmGqMKyABAPN7Dx8ppkCu9Y8Anopnd8uLbCvS5Zt3N5d51GzgxGwUDsxV6pPkdPCe9LpAF9567",
  "key40": "4xKc5H98DKnKYm6pqjyng7VJhjidD7wukTonZAFv1PaZsvUh4iuhGerbwjaeMdEgpcUTMiFAZT4Fp6V6gpfEW63z",
  "key41": "29RimyX4VtZ99RjRHmaG4nFzqojgc6Y3YZG9UnYFNrxwm6zEPwmaYswwUPWS4DvRECm2AZBfpTCT6W4LmmJKaCkF"
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
