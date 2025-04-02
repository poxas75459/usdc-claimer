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
    "e27vMRpDDPJxA6qXet7w8RuvYYGtGTTyJ1YHyuXuWtbDC8k9PSk4oDcGtHdmc7z198UJkE15heNWfNazWPbw56Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4boj97gGggJayTZmGpmDqHGCcWAqX3veCoTb14YfZbFhmkE1TaBsZJXX9cLFVxhGTGLa15y5yZhavpfjDjaEy1sF",
  "key1": "4dmD4e7UUwFYrEsTPiX7joUv7KByGaCQdh9QyJEjUEZw1vaceQw6T9n3dMXQEvAZfrRhUVNCAqJXCPwBgoTaFHxv",
  "key2": "5zTqXGDoKKHP4ewDvuZ3DDHBRQAt1BYJBr1gfUxEnZh4xQuCzzc9u8Dru2jgYL5pnuLaFFSkBbysQZxyv5uNLRrf",
  "key3": "59iGisCegDHGnJQBLn3hMov3HrbZmuVUT9rCe8ALu1wWKTjHa57PiyLuoAhQBLeixLLiQd67jq1xzSPUnFkeFEEX",
  "key4": "3dWCaqSoFwRpB4pBoeTYKkcfEZRibZTb9jyzafinVYWPzfSrMuJneenbQwC7TqTBi3sPwVRgXfsEh6G24Bu688wd",
  "key5": "2Zs5YUmraaedh2DaJaXTmxEEhbpZZQ1GJjbEuxkuPgi44SAve59dokft4V4sYBM4K3VSqcQrkbd13jhkYJyrzQVx",
  "key6": "5JXDZdroygHQqPuK86Na5BfxuzM153duDYAUBb48pFFWY1uziAgbqDcZNVC6gWySUYk48LK9SHWZdBwUKehVvuCB",
  "key7": "3d7cvvTK31BPz27fBiQooxs3i6F65DokWEPDp8ZtPFavGcYBovsbzouLVgn4BWDe3Lg9sQ4CxfARTEwHP22svebq",
  "key8": "4kSeTMvMJeZaUxuFsxmMzaCRCkLVQoakZo2jP8ciXQaMnwJQCBRrTiZLBQr99tqv9a3qrhqwYwfGYcuzbPAbsWn4",
  "key9": "dtRhZDJqz963kAmrmzXqd8WVXWKrSATCPc99XcBzeku2wPcM5VSotnuwsaCDiTY7T2S1cjSjnePCeAC9tAzZfjb",
  "key10": "4NMMmhCRQ5LwCCFougLkvuunidpr4Z3dnViUPbJg6qXvZamwShbwC4dQn8N1xAtqCqzrVTiZvDcTXyfqiB7cxsVn",
  "key11": "5vTEbVdjYbwJ4QWxirSTc5jStihSnJsjc5Dv73yth7tRYV84Cwq4kSRMexqtuDU7zSCTb9Mr4L2xKuUT1BGHmGHc",
  "key12": "4xLvzcmV2J4tPXDxaAH8n3i8GszHBP8LeaFvbxqmv1oiJdYD8irxogv8ZnFpErCR9nXk1JwtaDfVZQzms76CzAV6",
  "key13": "3TxMC2Buf1XL5X6GD4kYudThbCuiTgBWNDBhsSFnBF9gQ19iafVCK2DWkTMxergfHQAPqVfihUGLCiVn15UZNu9M",
  "key14": "3QPuSLCb4hRxoAWipseVDR4sf86sGQtYFF7wkJ8FL7y1myFoJdoFW2XxPxtAx6nkH4JPyMHX9ssfJVWrWGAJzTsJ",
  "key15": "28GoBrb2vw9TRQ8X6cUY1jd9aKtqp8wQ6wjuc4xZgPNiTdif2V5uEKMLFoAdSQ1r4prGwjSEewGUViH7Eac8bEdm",
  "key16": "2tTP1W3NL6wYSbyTw2To5y9u8zh9Y1zLrv3QKEQYdh37PopxTtPfLHSwNeS5m2V3WHA8mFU9yzGAnHQV4qxeyYGx",
  "key17": "44f2mjnv4E17b87QHGhH7k1jZb4epPpei3V4bK9hRWNsZWfpqR4JwJhh2rmiRtceViEJoRQRuy1XLdh4gfyxyquM",
  "key18": "4T5f6EQjyBRhCtAgSf9HBLeP4hR1FtLhZCqyBj8owA5d3oZfj2gy4BD7CGWuDHbyyCRKT8STi7PtvL6exZLF3ZSo",
  "key19": "41exKKWoX9DszAshBPFDEzJMQUgtUTvxPuRfc6oYjUPH8DR9YM12hbyK4qU3Tcad6GvMPm6MkSyi63AQBcX1nEH5",
  "key20": "49R7tEndjJaWrGhoEZEdVq8jHs9FAorsRenU44JMRu2Y9YSWkmD49fwsmr7WXHyAgrTSgsoBVdtWtVNqHdTCPKLd",
  "key21": "37NYV3ErZDHWfHkrqBTkNkuShJaGFW15uPK1SzbM74CxZUjaYnfoeHp1uxJqcggLqjNxEKvUM1F78RcWjkRYMUGe",
  "key22": "5h6HFegv5jBkTWDrZkADdp8Y8972UzbZ7nLxhXNFKXswLDyWqQ2sjCqF72zh98T5xUA6Ge4aL9Ny2fWMbsZiPy5p",
  "key23": "4WQWbhsKcLyvvZevBziL9wxTyLM1MYqi6HxDjKQAXtkaULpkof4F2RVXEP2teviWwpgDptc7Vv1u9se3ZdMu8Ba9",
  "key24": "5SNL1jQm343cZZj4q2S7FWX82rd1nWpLLyrRLTA8zVP2FPTgt623CrBc63q8nvQbLY6KXseRZhxayRWeyaSWGaMG",
  "key25": "5kUdxZNUXEByf9Bc3UM8fUxWAZHLue6qwQ8psD6Vr1EDdQxzTXum3p6WRN8kdtCu6PwdRSVUX8VHGN4cyRqX4WT6",
  "key26": "4m2hV9KyqrAnP8xCJbYiqSfdTZBunho4a7EjecUeGeYaCjfeZaMoLfoGuKmobbBNg9SVPVDCq2mKddRhEzmxBMoY",
  "key27": "2AyAycgFWDUYTjvzZuAN9V4C6n4hN1xaqu2prQqfQNQkEC3PDGDoasHWJYMJ2jjYFXMvYfbArXeNyjdqvSwZrab4",
  "key28": "E3PeF5SwXZ4PCBeBPTeK8bjpokmocCoYHTXfTX8YB8B16hkTU4dsvHZdT55rFfqV5V75EEnWUgJPjwRgSYwpwh3",
  "key29": "4kem98g5sQwLX5cz4E5iFYWdL8SPSUfWZm6iUT7voSzEdwKGFwiYcW5rAN2pAap35FuyJ6MmJSAoq17hn7dUGkjC",
  "key30": "5fTaMjK1R719TfJBw4AJCL9c9vB4q8s64KEmQaQ3GcBxWQFEiGpGgBVJk1GWwyeAzi2idPPQukbz296zm6Vdkw7A",
  "key31": "5ckEcDpiTbzTpxPoYPhaWx4sKSWhEjQ5LEZaYnUe9GdXoDGprg3Qk11dnqjppUWpNhGvdqSZn2uUM47CeuswXcBE",
  "key32": "2g1E75LsN5rVPjEM5f8nhM21q6H2DgErxosPoTdo4GrCxPMEJiWZHbi7roU24yzhaunQGWjkBn5bcwU4Bt2Yy8aN",
  "key33": "2WPGms8jYYby9gWTbCdHV5VXMDcTwnvrg2YfuWize89USKjfandiAQf35oSDA3KTJMUdYLVdh6YS4ZBkQrQCktsp",
  "key34": "kovkWRXdiXg7WabQfcFKQV8Uw4Y3SHqamQgkHkGnZezYg4MMp7bbtPW2JSj8mxCbCRVWmRbX9jN3Tg3vtT1ajyN",
  "key35": "2kFrXdUFqEXikEkE2UR9viaVjyeS1JVsqxcd24YfsDmBhamoDECWA33Zc8okyPMExYUdzVKxcqFbSrhubo5U7ZCY",
  "key36": "3Qoh9MgG61wDkQuzL3oQ6CajBkE6JbEt7xnSMsAfspGiYgLyTFKxjKhkujsXXnNwdoU3uPKnay523vLM8UFmjrqH"
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
