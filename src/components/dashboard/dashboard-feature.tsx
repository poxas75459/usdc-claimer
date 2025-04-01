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
    "2zmDiq56gf981ZsVPmD5XALDmQ72u6y2Dn7NhZPmzV2YDPtFLiNcDyG3v5C2wuJt5WvGcBrHpUMiBNJGwJj7pWPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3JqjQVzvjpct4GdGcYEz4C7XxBVR3jV9NSEZZexXb6sgJoRwRFfVSRLoPeGoH8bGFhe2hNLav1SCNwTh9ZPXs9",
  "key1": "58b2Cx7aAFfhyjBbvf3nFDAXk5RQtFDKPHXSuoogc1UHUtyLjJeRxb5apdoyqaD7jkR9gBmKrDaTmzn7HDktFQjF",
  "key2": "8ruUEuK3XpniNznFUBFWPMXGEM2QFMutkS9YSEim1AmHNjc1Cu1Ya2Z8EUa658t4uMttX39w9iisMANiXd7uhd4",
  "key3": "5qJZGPeY1L4jMZNv2W9jHjJ5HbGJBMjKsSKJFENAoE7dCU8Mo5TpFrDabFLw3iQKfuUoaacSByLP4kPgbWry8xRE",
  "key4": "5YNkvF7mowfEsLM7W4yrVshxAuYTSstKP9pRJLisBHQv2NF1teGvHqKqixhcmZkUsfEMWwX5ndXvnJtCEPzXTH4N",
  "key5": "qX27aWuL9VwhEPzJak2YigebLZ29QhKWJx6KVgVLQ3UYSAhGJ7xenwpDK2W6nvuCrG2i1LGk7MjRNpRrQY5Lbuu",
  "key6": "2n4ttHqwAvtp5Fs1Cm3UWJFTjY6TTHR1SAmB8eVncDFFDMpEEq2SVHeoa83gbQkSsG5YDtYpoB2UvEog8JifYuPp",
  "key7": "Vq58hnKc5B7i2LbV4prUcA67RjPB72LGHSzyxbaBqXbgDJ2mdwfyvzKo27EMh1J6orZo4AXjCDJX9evaz2Frfuk",
  "key8": "5d1qdFC5cmfjhGEjvBTLvHmJdG124sNfR8p2LFBLaTHY5AN1cQ4dkvaL7rrAYu9EJXJyfn9fmXC8rTWPdhLFkafe",
  "key9": "4SsveND7KaHpRvaQ7rVKfJXvALoarGGTdvGqaiKTgdLwYn1UcrrX5dE3DjFMDZnXqZGN8hG9UqM7AP3EgBmUi5pv",
  "key10": "5GD5EMQnRa1yZ2UBF6s911SDT2CfC95PeQYt54NXtxZhQMh5Yk5pexKS3vfivy7eWezTYz9EmqPXPYPCMFcgb5Sm",
  "key11": "26YzbnBtfJcB56GyDiaZBk51kBvrtxZqam24fqphAZvUFKjGsHqWmZrAJLxxQxrUbKHukpKzKZ8bMWKugRuYDZxY",
  "key12": "DCKiuCFAPbigNPciLweNZZqkP32nHjoiLfJvCCSiXC2VqJYPntYxCc9zzw6FR15rrEDbEPYV3QwvdaYyYPm2KFi",
  "key13": "4LCcZEZTVGwpB2LCwAsSAtDqdWfdQwMKRkfRw3XsQBcGhEpfybGPx94cxxJe1GgZXdCxHhdFE5yykEk3bwFxkzLa",
  "key14": "5Sj8TtbBpyWFcWJGRupUBLeYyYMcucGCJ96ot7FdVE4yweXCpEp6UYHyacwNQVje5ad19Yuf4MUBa6RGirYjFJY9",
  "key15": "2eK6gT8BBc6yeky8vHLE92xZ3c5x2bW7D9Ay6fP1JLC3et22jqZvdraV5mz5XoxvmjJB4hKBVXdBD7C45pBcEi1Y",
  "key16": "62VR7X4xczcGRAiotLmYUh1CnzaFb2o9HnY1SrbW6T3LNi2AvicJJim3eaU8xLS14hP2FyFmQJjt98hoWN4Z6JdJ",
  "key17": "4Eub55RtTar5dGDAqyFC8BsxNtwTcVMgrezCdAtUorWVDEyVQk7MnV4z22bHYM1u2jtdDUZg8TUe53UhggfBBSeN",
  "key18": "3Rtd3DG1PgC9tKk8doUPvXrv4kxeBAyCs3Fs6w1GsXgbpS2mX6wL7LNHpSUuJRFCzNeVEjkQ4b5TPz7PYvKHkSvE",
  "key19": "tcX1RnHwBFT4KGK4VXgisHkpuHWFVqtWMKhpiNd4TA9kbg2YTPatigK6HWpiXtJf2VFEwxMbTdqLP1q8gBLqcbx",
  "key20": "5g2kPrDtau417iQ55anBkF6KfUC5qA3nAyVkpQ8kojo2Vk9QYNdJCDdP3BU2xPcbTnAk5MRX3WsgwUWKjW8YcZza",
  "key21": "3BHvbqLfoFusFw4A8R4kD7X2ymHD7B5NioL9ANBhw7VTUqQM5BHFUdcHyUUv7uKrdMbonpeH8zmtVAjAvHJidqRj",
  "key22": "39v1hWEx1Ez5y83XeTZm58diVLAzHuiSQHRTHLYvXRNx4DrX2i7Ef5jejTzQiFgRsX899ThJWMaLDtnDLjyc8xL7",
  "key23": "5Bc6h8GuH9EGfCvLhKjTVeTvfSoBMYEtxCcGN5QewPJeGdrntHxEkWCqMtij8foHbhhWumHc2BeLcEcKQfxMgudm",
  "key24": "2VSbtc9Wp327Ct8VybMyiqJeCvEpweMmkJeVCqiCvaC9zU7fmQmquy2H4gmHhPAArkUxVUDyxzXMdh5bEHKEES3S",
  "key25": "2ocztV1x7NZNqHYm5FXbG6tvDeTmSNFkrUjW3ctUb3KrbAj94DDzGsUggG3okjqSEYUozfgEz6oDyJ9xCkZbYP7A",
  "key26": "3oGmCCdL7y1RG8TFHrhmKBoNwuRtSrcb5WnKeE2SdLuqFn3Dh8fe5t7DjuLJuwVVJCq4BeJpbTxY8gXnJzqbehmG",
  "key27": "4XF2bnYdfnaGuWHewhNnULbvjDofd4NLefbXtUXcFeMFYo2QemS2vxqCsZzZZYJjZoYAZ2hGNJ6QkqNgMc3qGx92",
  "key28": "4Bzu4QeyHFJV8uyRUoV4JCnqbN5fKKZqvJQ54ePDdKTooH3Vcf3bxX6bTke6SSYKZ7MuMEaqdNN1xbABjFM3JXvn",
  "key29": "5WeSwEnbQ8K11BcrwimNpCsUd12Nux57ea4Sep8hZDYomWLGid2Yap5x6CnkpYfiM6eb2exepvBoWVprPVe62Mmv",
  "key30": "v7pNve9gW8g6oJCrEiEi7U1C8gfk6pus7GKHUb3dJYZDQvTXo5pTrZsDtd2tbiqXT2Fcn84V1guBKusjf3LZhnM",
  "key31": "4VZsNi5uy5wFKbGqTLg1VoSS2MBgvknGrV1zKpAaz2m8c5BDHFjy5QBwe9GX55zam7HFA7ejDGVeeWW9Txh5SDE4",
  "key32": "5pxgSREJD6R8r5xrWrAvEqhEY5frPXFMhy2KyKxt6J5odehQqNWtwCmoMWJAyDaHeXXPcmcTpS63Nr4kNNAUxxCW",
  "key33": "4J5yZB9kVvVrffsVS6iJSw6m8PpGAZNzdEn3XuzBxBcVeRfai8EpLif2nGEaP3zJ6WAtEu9KhkncYeR2z8iwBoMb",
  "key34": "4RpgwwMh4ZCeYN5svQ1vL4o3eSfE76o3kDmmuMLZGsytimQQMwSgnDXe8FxXXBeSGjXkfxjR5TgbSEJsi5KWNTj7",
  "key35": "5HQDbzGXk7QsbNWqnKYXUa7sSi9QLeZhgJEbUJV7T3xcUJ4Laj39HgUXfz6bgFNhikZxEAjo67PYz643xaRDa4zb",
  "key36": "2GAinqrJ3S7daotn17oLZD4RAzxsYK3kG8aoH8PxNg1DGkcQGM6t3Uhi8npGQ8KFgh8bcQQ1GyAqQhzKsgH8cXPC"
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
