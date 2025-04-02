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
    "38RgcokfCvxHPLMwjMqR4vLyyDnKc1Z4T2Ctdnm1CRayNrf5TExQbzT75Db1Un9edGfMnLBqW3n3W4LdVB4bxSL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TLXV8xNYZDSbkyk3bhY4yc5BWJGivedGrMiLV2quMLTSmBwkw4a2ZYnFYzKznjVwzfEh3qHCg7HDX7xfwW73JYt",
  "key1": "3koMEoLAENTcJSXNZiyWNLawJND4WHQtrzFfhdJf26S8etThabBJvBYkezcfmYtaeX2Bsd1mQiN2smYHEJWvZWxX",
  "key2": "2iAqQyFFLwtRkTxjamMxdQuvywTSLXhzeFVZRxuKhrE1FvMuM7Ex9eJJ7s9nKrzqW8JpsdLHQoajFMNqYAdqbrtd",
  "key3": "5uftmRQGczyhWhMtdacEh4skutCSs47BapWvbXFdJ5Vj9AJpAzNfMXCt83mi3a41BvAqtFY8nAT399QHtmQRmJwc",
  "key4": "3ndQknizanS6hpBwDrGNZXshqUGsngwUDwsVaaYvyDZ3nYpmwnPDSQw9yW6EckLFST8EHjXFYXEBd9681fDQXCEr",
  "key5": "3ksW74C7HyUn78omN12zRA2ZVcQ2axCYTeoow2YoabaiyND8w2GLFRYozauKWB99R4nnSHvP6CwNCJ9Y6Y8ymjSe",
  "key6": "4usM1MFpCnGHjrkrLnY5wkDL5yXQn1yTXjBmiJ6FNyRDWEe8iAXDmoJh1U82U1QzabyXr2VGEUdhwLigEp3TipZq",
  "key7": "5xYAGyCGcAN4dD8Ady7V2a6pNUbTasssUJAUvTjXZspYb5xn1anZDEnxA57AfEuo66JYnR8AT9vHSXVvu1Z9ynxE",
  "key8": "2DjFURudNZp1bgU9hGoQxPtEsW8rwbLCGLe59ikswQiDBCgohyq42jxYSj5Z6RY8eTWK4SKq4GuGGbP4bAo8JP7p",
  "key9": "3VuBADZUSrfuyxLGszTzxx649tePzg8gyU2y7k1dhuu2N62gqhuscenEFfZgXDs7FudJfsfbGwH1eizVfeTPHGvJ",
  "key10": "3fboTDvTATsXuToFhEY4JiFNGuEBxn3ZoQQe3MHnirWnS3Kq2xCuuRmX5AAhcQzoCZnHDG9f6pqYnivtx2xhVDqJ",
  "key11": "5596xVHr2pgm2U6RJDb5PCbcoSAFjW7ph2R6k3KmoiW2KM2ycgAy5S6Jcwm5cePaZpmEp6wrmj52N5S3jUT3ymJ9",
  "key12": "4xntfKc7tRXCXRqo36617DyK7oXpMo4G5BnehRcF2fcipRkWWWX6BvfMr6XXySJGvkzgB56BXmGRJzscPHYyZBPj",
  "key13": "5zpeuPCnBNmXvjwZ6Zgo59tqGYYc5G2GusYqfJP7S3PJB7rXJHXTEYeSnHwh1HdmLSZKn4U8KFGne8BRBcU5571s",
  "key14": "4NqbNFENU2kVhp5V7b9XrQra71CF9fhMp4QMPxEoiC52qpCgKDqwkMxSbwSFemVHttNY282WzezwUZUySF9x4Npg",
  "key15": "3MjyuDMwhSEm51ZT7xaQc6WqfnVFcEHFEaCa9W1fVYYLJkXixK3KdsEFmaDYiKnwVHHMHVzpPYJB9aVX9Yp2fShx",
  "key16": "53hX91XQbnNJRc5YtdHcw4sRhK2mTr1PvQcTGK9vFTMENttBKttwPhbYhfeGZJvBJyGkD2jEgJRxhxeWbBaxB6ER",
  "key17": "4RG1XBNTqzyGuSVPke4pTyrKzggFKrsjWxkYJK5z5NFEy3E4LnPsrxhQtez8U1CQAdG9rDqCK2xV6J1fe7J7hYHZ",
  "key18": "2FCsmoQfrdp3VnLYec8TtzWYhiux8J943DaVkCcF5ZMsXr6Z7DcoigeYNJvkKqXGBx4sWxt75BVNzmU3u1Lakzaw",
  "key19": "4YSS6cJTPd6neA1YFpJnm9cDsAbXywVCuHM2yXJEfhQnD4R478csnkxwcQUEPAAggCyaabDFbZfHGgWcoHQjPZVP",
  "key20": "26LyWhP76m9umxP3riJWoWFyPTTKKVHjWTBBxgqF91yVr8wz85Ayv59UewvTKnKCkSGJUPC1sWg723x5FSgm9apC",
  "key21": "2fR8vF6kFqCDhGTkiWvHrDfzwsCzEb8SuRcqfaKicCPZV7jpBUH1JGh5ioBpWR7wYgHFsba4akN9TeUgZy4S3CNL",
  "key22": "3pqmMq8Sr7c3wdpQ7bUitt5Ez6Xoh7zBxTBPViE81RedGYgnSruvndiiA1aAd2gKoTzPeGJPXms9cCuoEx9sjiYG",
  "key23": "3PuhD85A5dKdiaxDKt7K3jGbDXttJKKFJ7SYwray6XGwb2Uek4DTnUgXsdB5qpXicmGWNSoxKbdjm2P85qAMGzVA",
  "key24": "5MpbXRX6ZaSNAoVPqQp1mis5aMvKeDSfgLy22ggJx5PGDtYdr6zLq2kyEXmKJFP3Q4AXdH7FcEFYvmPoJP3aLce3",
  "key25": "Z7MZzbjLFSMbU7maTLNKVVvvxq61hJfqmKFsdt3WEM8cNAz7TfZRqpe4aKLD2iVwd2MH1miYKVgDbhKe5VSne3b",
  "key26": "4tvTxNi7vj1mninf7A7kbQCW4CQ9TT1BaJdzVsm93QcY9M9NYNAFnY2tUrr8w6Ns7Cz8utrhER5EkxYfcyZyPwYn",
  "key27": "65NvUisPeLFDy2oYLuXVqcUSBwt6uyVj8aAyYNf8wms7w4iFqYsPMwRK6ZnTKGF4TmKRiHL6bVkspZWvWZx6UEpw",
  "key28": "3HihUjWKxfgtFwLMnFY2dPug6HyueLk8mgDpa45kWiq4gbqcHU1KtbMGksJaTLJkCL8s3Hfyj6c9Acs8hU5ptrmv",
  "key29": "3efDc1iq4CxjQ9EWxE6NYw3U7KGhY4yFJcX5NZZxmbV93JptJnqhhabwqjyq4XPTxAVNVDeb88AnpWr3LV53Sdg8",
  "key30": "2PiaW5Kiyqq1mbHfHFUgER763zoXuPGJp6PemuHLgwNRZwvWHu1u6rfVJxMLQvUuPVzTcSFCCxDXGwieTSD3Ey4L",
  "key31": "5wuMW89yHSUN4ojyFNFqC9gTjcxVJenzQS2cjdvT2AxYAD2sB67JNsapgkEPN6DS6VcTQvfw6CnTeTvHyz5ZhzdA",
  "key32": "5niWbzqrR57LNfPqVsn6Hvv837LotGM8hC5sYo2b4svuxoH2A9AAr7mzwqVtHtwGkwijdchkkvgLRjoGk1MXZDWp",
  "key33": "35TDjs3ufwA4rcpfx2jEd5rPJgNGLvrCWAxW3g4EQdiD44ZfQxUPSESq6NgxqbkgB1QEsRoLsoouodcBbKCUnuQu"
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
