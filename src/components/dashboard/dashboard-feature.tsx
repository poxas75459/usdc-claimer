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
    "YcXJGePf1C4JpYwZpwTWwgdn4EPCQMsAC1Ma7U673UCvD9D8vrKPHT1Nq3Awe1x5NCvD4kY2Q75VQnndW5LM4Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRWm7uhz2QRKkevdeQgW8mx57KmT89t7cjr5NaUqU69VzzCcVVCQzK4wXxmiNie3bh8qcRkrDgNhMX86cHqe8w7",
  "key1": "5W84BcnAnm4NnqjGgvGD4eiaK5KKnbN5NNPfXZUXfFXHYpGRtJcLFuyWX5Z7niTouUpJcGAURdEsAEwGceMWWbvG",
  "key2": "3XtC4uqj5xKBtcMvS92ip49qW75JtqpRVuWrgcduU8FRpNtMs66nJD77Sv4m7pXbCWJsnirNQwapR567uMf5YKR1",
  "key3": "t8yH2K2NkZotacT5wWSvFzgCfgErqGdkjySa7hJy1GcVMeb2KNQJhX6quvwQRSvrMTzJAm5k6VP8GGhrXHnFvzi",
  "key4": "3aJjggUSGFJTxyNKyPdyMZcn27xhkU1z1vNamsGrnHsZzmurTMo54z6igQoYHm9rovCoPsHXMXu58wkXPkge1P3q",
  "key5": "5onzurV9o3GzEDTbQnrsRKxmt7Tf2wVq1im7kQhdydwgb9mvhyD9TsedP9uMvwe1LDy6jKqF5DawrkYYHxaWHTC3",
  "key6": "5zbGzrQtCC1L1fYJ1Y3Gz9DXLdjWwNZqMv81q4oBuwwitpicsfR4teBgb21quN9adjecwM5WPBZpw1fWQKEXXrgj",
  "key7": "4Wp9e1zdsvSGJiaH4vLi8hrVFmKdMP18yYaWnTRZnLsY7AFECbKg4orU9EXJ1PfTbhA8Y1tgWFMNs84gLp96uGdo",
  "key8": "4dTWf6SvcujxNecnf6BLwSe6fmhfZrjHkseAPKiRqkSeeUf3hTVjR4LVJQ2u9RXs4nFYNkS8xerLLyHqHbXgns6L",
  "key9": "gsnzcDci65ZbusKcef6thsg7Ma5DkPayYFZNnFMQpXYDZGLM8mTWWHyVWGoBQx7G14TfGLP92f6aZ2W914xbbU2",
  "key10": "3EagCGXJ92GTc72i5QMu3AdiNSMwfdx2tYidCcReW21dXaqpqUgLzaCNFTwBKRKRi3dvqSpv6dgK2z6WWqwzodAv",
  "key11": "4T56W1L34udSDKkCEDSm6cF3ynNbVTS3wHmU26AmmyckGUAE9wGVLTquDFZtdNMBVrGw4WnFgbLtgHHsVF9obDCE",
  "key12": "5dJ96tEtXpB6c9fv9HB1Cw73y7u3rCnnZNnjt7SNRQ2z6zcGvF3nMRMfADsUCEco3YkwPrbbZ5Bip8hoYGYuThS9",
  "key13": "2FZnVMJDXkNUY5JYahrKBy2twfqgmmkzeBQHU7VMY6ziTQYcDUQF1JVeAX3KH2cXFj2JPy9HM1DqQqit1kdWxbiC",
  "key14": "29XVLD2TPXpB4zdYhKFEwhX54VcGqhYEBJZkfdbNruNAHZNM2fsode6Dcz5NUsVhBfuaQ5Y4uBx7vwyyJPhMJTvX",
  "key15": "3Z46ekvMLrds36pYsBxwCQVaoqCX3VrNfxH1PVSfWJ8M3Ucd15pFuBqMRcJfTeNoFrxbE3nMj99QigMzTZqYKryH",
  "key16": "2Zf7qSsgHt8tGbJ9DkskD6i2yS27WNDeFmWbdpPr3ja6Y38RWqHQXcnZ19W4KuYXKxrkyaBNPmuLy8Dy34KeH9TX",
  "key17": "4eyyf4nYwYyeAD11mhAry8UBbdJYjYbqobe8pmYb77fDzmUQKL5iyfq1Udm6KQuVFWBzTbUaYdhikxPbZPzanikh",
  "key18": "5pwbiFu5jQ7jFp6JVKJ3JtR9x5uionmjQ9pfwhBSNcKaVE5FUcRMq3prq6LpA8VMiP2TJhHLnL2xSUuyCF2PeKop",
  "key19": "2boa45SLp6UsK8KcNkqa3pbaMynnbm314QSXZPE4Daf5tkMf47yLzdvu27A9tWTKqJptKfgH5sHDmU5WHoHGmeQR",
  "key20": "3fcK5Fo2LVZ5Yg8S2C15qYEtfpLA81k64Ray9v68kCPLemWuv5vjrPqP5Q6ASSnqhedPpEGEuQiKW4LCa9oJRpkx",
  "key21": "5ouEjTT6jYmVc3A32KSj2P8fbnpzZVNNJYZZiwfxaFvaBADy8GeRCkfptd37qVWXZfh6XPbRHqNvvjiCM4aVUe1T",
  "key22": "36GuZ6i2NcdKd19wu9dJtKy7WA1NuCRsuYawSJaTpxqnbJnFKNkabhMM67xF5zmuduUHVYYLUgKCTFbJjVtnQwQU",
  "key23": "4q66f8fJTzFSr2arjbWmkCrHMyZPUxrfNrHFmrrpfXqxaYBGLuCAcmNwNsUg15BCP2V5JGLnkHPepF235eAkNsh",
  "key24": "4yhPRyRdrnjVh3mncS6AaphRVmofooeA9GuZEXZmFJejMdfM5tYWtVHz4Fgdw5CSuyG4wYac6bB8UeeZhMQdq6A6",
  "key25": "F9FibTsAHigy9fZ8LqkmPqzG69MLLbb4kr7Af7knNBh9HJY5kKdmVA2VnDokjhn84vLgChFgKSKP2fRy1ZAqcwZ",
  "key26": "66MoZmWaV7adwPfoYcgvWYgnSv99HvDqTXoqfUQYTyCZADgayG4PqNrGGHzxmzgTBpQq7Mm3K1r1gHHaAL3ykaPD",
  "key27": "3VEadjo6TYHh8AH9zPmEhZSAMQUTrv7UUJkLZTqLiUp1yxDfVdQHsUe1DSDypo3kwBNYJu3SbrLqZnuufjxh1UBg",
  "key28": "5hvuZZpX9tizrKmYwDCC4WEKDgzkMhPwRDRrSUBazRgJFh4fmaDdSdywo7FSspnFgyQ9k7ggNhgwnHT8exCUK6nA",
  "key29": "Dhhy7ZLRgJUmQdQqRpA118yVBf32KmYDH6kxuuR29o8roximy7yxjxP8FNeNbPCiKZsYYikyvN2D2qGTqpJWUoV",
  "key30": "PBNNhA3yV8vfPDeWEXpDGqJxbn4AxCMyQ7pUB6b8G3DMHVkgCAzq9hScSvMuXnJjmFh5347WXs8rDq9YmHjqygZ",
  "key31": "2NTAGJ26EoMgZETt63NuvJjW6ZpTEtweRAmf2J9nGYUGG7A2q5FRyvfHbvSn8DJe3s9vWmpGbdPuPwsJXE9hHYGh",
  "key32": "3cGobcAZDnprvQtxPEK5dgsYsTzKspB5UTEvWY8agbDhKLBoe3VsP2ffcY9uTPZcKcuA14fjxzA3tY3vzbecyiRc",
  "key33": "4HK24YGj4S3DX75EbFCHCFfHsBy75uK1WpaPUcx5vXdSDHretCBZueWBycPJJXkbN1BjK96BdGuYMLDycc8grkWW",
  "key34": "4qAdchwPzLaNCeNb5R2ELw2u5FRoL1WgotY6ngn9xgBZpfw9Kxt9EhcW5L9GKf24aKFsuTaAsgu2jqS96HeMV4LP",
  "key35": "5Vy9np9vipCBESNwjqr34zo3GVxmbuZ8NrjJN9CAHSMVfwPF2KApMCAKYfEvyVuQR4C2go8EEWk3ynX2L7g3HLM6",
  "key36": "3NuBwHyety9M87B7QdEbAGqZ7tipEeWiNA12oiWaBoQ7Wvf4npc4ZNoV6qUy6cU6RUAyVmdre1dw4CJQ3NCgT8ax",
  "key37": "63CU4D3HAZEfsvk8c6x9S4rwXYucwCuwymtmtoYeWRc7x4iz3hYTB7RHyLcZYMesBXtYiCe2iSEySDVha8MuauRG",
  "key38": "2t8MLoBy7aVNo2UP7g9Y8JPTGapFLAddF7oowpN8vh9urbhEVAreCFs6j7ivP8Xn4Aj5QWyG5S2khECiCenvJaU",
  "key39": "29QimAkbzqKR5Sa4MpbxYcrMK7Lchv4Y6HPhghNqSbQwbuJGN467Bi88CjQUBUejzdyF7cpWzPgzQ7td2VK9sF2j"
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
