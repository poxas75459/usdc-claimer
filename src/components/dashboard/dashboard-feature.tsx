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
    "2oqmyK1qoGpQUuZcFjEGKxC29xPS6QGJASkE4KXHqkQGBjZGwcsH1rzhmJgqcXqCrGUpjyo54sDn8oG5k53E3LFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxX1Jh8rL4mzdQzhBh9GNb5BgMkkgp9bJcSMcURfQV2YyqowxjPt4t1ka9f4gCUF7HNL9AjpF54h2ckwp74oFjM",
  "key1": "tMMbP6E2yaSargHUcAt8yjxLXd75Qk2qm3YdnfjL4BHB92BN1Fp363NKdxNyzj1z8ejh9sH1bjtqL1tL4rSu8P6",
  "key2": "46Kc4wbGUg2yDC1fAQcD1MbREqhKLhxjQ68pyVR3CGeFeJJMiF2KMFkNckzRiYuJSEdu2p7icKbxxCFweuRYuP8n",
  "key3": "5kTevVtofm12JdNncZD9qr5UgHmJM9wNGFvE4oHcEJvyPUUmpQoovjJh3Qdy6Wd2saNjwUkm74w4tByw2xtAeg5M",
  "key4": "2g6cSjMSQvQ7fZwZDPmXm2NAmjaBqY2AWbtyvmeSdPtGDikTkBUbC9R6NgDZGFx4NcUgQBSZCKSjeka7mZX7pF5M",
  "key5": "5cNbPcuqjcrKzy7PrfPL2kfeRAxGz6ughtoFMj3L9EFTSrgh7sPb3VqHQmyDwsEBuoEsMwhvzQL1xemKx1HmetiU",
  "key6": "51mE66zLL3RfJe33sptANirF9KcKEj61es271JjRftJDvWthSVADw6ZXVWbtL3jvJnWPvSUs76MjWJJtgEht6Ca4",
  "key7": "5quEk1RgGSzDRkBBMCpQJh7wSNmJ7FpTn9FLLeYKMw3iYsqymJG6cqDBYFHD6xyxRzf4oyfsTBBDrrg2MYHTWKMK",
  "key8": "2mknHKMmScfX3uUzH2cFjFDmpEEuTt5L5PN7LkaeVyPenE5wK5YHYshBJ8QkhCg3E12Npv9EgVUPVnPYZ6eTrhys",
  "key9": "4rn3mx8yiewn5V1uLrUo5XsrWLjjJXhLcyXFpDWBeUNKgVbtgjZ1zgfZG3LkBtQWonYxWeMqkY5C8B3hSkLmgW9w",
  "key10": "3fLGX9KyP3wMf14mheGNtUqEUZnFmwVk8NBVd8LopRzz5qnamFuC4GvpQEHcX4bMCnmw7m4c4K5ejbjuX3uWeNBo",
  "key11": "ga5uH3G1vxeLpv5sEBmt1Qdutq6kqZExU93MG1MwUXeLTq9iSkyj7uSjD3nYvNgE61upscR2WnwtAk9pndXBR8m",
  "key12": "5Gu1rX5etQAXFRYyXb678JES84N8qFw3fD3NPYYpjyNyLsBTeRddE4aLdXtwjq2oNYmJbervxNi1tquodh9PeCLv",
  "key13": "3KWLdY2zx2WhKrQHmWomkRP834zpUX26tTR9r9p2FaJXzthNEpBDriRZbahHzw8dp5wcqyFxuMss5rGxCVzLGG7A",
  "key14": "4Wz25A1QPJmtQbpeFjbh2rk6iLPiz6P8gCypa4T5TBYGqYDuW3YFSvANtJuj927kesFjodLQqZVn9pfPRVzMCaaU",
  "key15": "4TdtNWpvoaywH9p4hTNbb324Wbb5twH7PvdKswXzbztrY7TGP9VsdEsWmZzpHd6adRYq9b2Vo7UChzuDGH85Ba6B",
  "key16": "teQxnaJG92hz8XPKNMgbCxAGewmwxCwZWz7AGr7wQ5gXQucdpiADYeeT37hk7kenSAjjQRQACvVhxHuRK2hd55p",
  "key17": "3hKbX1Ud79yZnWdc8MMYqTvDrrh3t7opWxa1QZyyYBCiy8uVN2D2cLUQMEmrMuk6H4zoxyTMFqDHs4rnTjmqqXvz",
  "key18": "eEi2Lde8StbdvzQxpvrWxo9ezMz6wQ3QgWxvWerfdP19g7HAt8Gwj1A3abWSwuwCg8aKgwFjMBfyZx1DJgnccUe",
  "key19": "5H2TFHZuxpuqr982Y3R6ePtZXRwUqTstzUA6Dmu9K4DKf2shyDWBrsj2J1uvGfWqjG1u63zcoHm3NozMmai9zRyr",
  "key20": "4zADTdV6qTwnvM55Z1ubGf9x5CeZkNDVU4AYSXJdoQqxDNEAHXXUEk8GeqZyf61Ao3sAExmdpaHmedgvYhgBzdx4",
  "key21": "gz479WCYKLqTtDAkgLiiRG254P4FcRj2E9gbv3FVL3Ygwh41sHQBixAFrrnZvUxjSZtdzM36BNZiEKQ829xdSrM",
  "key22": "4SVVk9VruLozgiMHBZYxQnJg5gSirvEigvuXLsNMgNmQirFUa9HnX4Vdg489BXyK9c2eMJESVN1WczhBYasW83Nx",
  "key23": "4kNhHwNhq5AeQNvYRH86AYQkLsxkucadsJSyPr2kvGt8WVBsrYnpPkpwg7HR8Yxb23Tysa5cDQkvXCiwhnUHEEaT",
  "key24": "5yNX5BFvaqDKudq6TcCTzXwQBrzDetwenZeZpRWd73uxoxxvCGqZeKJPSvAMXNvrwDcxQatYK3DBwaEg3bfkeyci",
  "key25": "2k1fDZmwaasnQP6mpk19u7FFdtNnn3zvVCi9FCMwv33ov7hrAzAgmJapZEk7WPsApiro3E2tjrQCgwSVJuaRxvRX",
  "key26": "3XUQyN1xbFKDrpcBnNLACSVGVkTmRzj9cWhMQjMBRdDV5tU7ofZm29fwgJ5WsbKRZVtcQHycvx1izTQNpb6wnUQH",
  "key27": "2X9S1cZfwJ3xXTSvc6Jx68xTVb5WoSh4h5Rp47cTVXKyCLZrWDxp4YbxvZ3phD5tcMj5xPu23Pf4TDshx7Arzt5W",
  "key28": "zSSadp8Fz6u4ctjgxDRRwkqtSAX1RhXuwe4B2i2qacdHnjeYTEih8QMRB75NpwwJhPhFbTfoAUsZ5vwSaj3b8tA",
  "key29": "3XbRXgLva8xeUZqHecLmQXNwyKs28YuWbrYwSc6UDCtFdyDePPSgeisfmbZgB4vbDRiQWM6eD6vwqweLVj5XHEKD",
  "key30": "5VEhNqZyySyeg96pw6C4bfKwaPfGKu4Mk3pX56Vx8VmY5N1Ai5V7iW42t2okyepqDcU5eQu9g38n4H2t1aXnKYqg",
  "key31": "PcvKPcqm81Fop2264gRnp2AQaUnVKdmtLog3rmwB7P6coW5pDeZy7PsKD2z8RP89QGJc9JLvchyLud9nx3cqGK6",
  "key32": "5heRSh25i7EhGbLQLc159xwUADBL3nhWFHT7XKJDDzkkDg98NXPom3Sh4N4o8e1MR9F5K68h2G4QgGxTQERW2Ba",
  "key33": "46VM1AeDpUciK7Udnv2bYe3S3XkyYHXkGcm51pdCtAWC5T6ty91zx7YrRLcDwWdD11mSVskyW5WfgWBHpkztFULP",
  "key34": "5BwKS931RzF5pEFFxUpuSmDRBov8TREdS2UHfBJZMWueDA1QMNQk5LkBM6DgXQG24G1u9w4z8bUKxkDa7UJV9a1S",
  "key35": "37Qt4KiEsCLLajXKFukJw5Now8Jwy9EL6S3cKZBuUzPEUnU86HqpobdEWd7ocJMhT4M4r1tKoB9GEYwqJiuDf7wk",
  "key36": "5eGjJFXU3Jduo1e9vEFCC9hWXCTL224NE2dzaKT1zuLEuQzPHZZmzszRzESf41Mx7LZo3nXswZKAohoMsrGPubbv",
  "key37": "5EH47fqf1C2MhmaW1fHQUnphNZzzHWEDxVzDgnNssDNq2z1arF2TjQCeVcu29Ssw3gwYEdX6C8d6BZbLj2bDfDuj",
  "key38": "J6n9XfLChb4ex3uJxLirVfhfMsqdvNBQdBLopxD7fGiP6BdDDuNDei5CoC6F7qjJ6ZF5iD3pZGiQXbxAHFJTAgm",
  "key39": "XZrDdZJ4j5CXirEVNo8fiGjdwfmHEaF9igpesRr9aq6Eqn2jpSVWNjAz8sf3AdAsScGKWnXiPBVSiuNktFmNFST",
  "key40": "2g8tZ5HicWYYZ1RvBHYSWYS3MGhAFc4Ar9m8kLGL22nL4k9gMxrXirAzivahQya1scsrudjwaWq5LPFnXvxAxpb3",
  "key41": "5wKeMjz7P2nPECa2bVV5nXp5ZiBk4FkdaMh9GXj9LKzqyokH4fmb1MXCUzm9GsLJN31tBhJPoFSJxMLB4ir4ubw9",
  "key42": "5f7mrxnJ76REmgXdQN2p9Tw46C2JzssxCdjYDKjX7jwQVYdRCFFPj8u4FR5C5YxfLRadxmqNFy3bB8hJyJqtS6Zc",
  "key43": "3K7y8JQ8h4B7v4K3nFQ2fGdviftuedJsbmn4wuQke6jiFowDoZB9i4GaBWLCcg6XYKW5iJ7oi94eu1iZU7Mt6nSg",
  "key44": "5DTYJi9o4kuYt12sGMq2XbgyV5v15bGfWYBDhd1maf3Bfm9VjPzndfcHJ2cv3fm2kA3DwiMcbaQgHL8WPvuwSfJB",
  "key45": "4VR8tvXxuhc7H9G5RWu8JuL9TwRXsGasaBazCuwAwshxhsifXccN1HjyX3rDjnyXghNMb9Lh3zFgbGiBra9VZ9PH",
  "key46": "2yYvHoqLBkDiUPzdDWBPia9YdciWj6h3dfDd1v2JQENheTPKMbLgxuohvdEknbWrutFp4bSk2cQjTb6T7G93SVGv"
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
