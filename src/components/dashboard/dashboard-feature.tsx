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
    "3oBNhEFsivy2miRrc2TyjPiTYF5jVeRV4TqX3kxVj9hyHWQBZVKqmxJfdGzCeiPmiVWwpDCEgpTuLLC1KGZro6Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WffwewtgeYwF3GKNZVD882gyfTzxXUiLdMDhPmrnQUceuBtyvw4YMh4z8YLmNxUPqbpiMvopeazoEanJ69a28HA",
  "key1": "3XX7Lw2caggZAZKwN4Py7NWUSGjwkPCQMLddyfnezq2ypkMkru69WJgWqjAKB4kyWNv5YynBxSq6vxhiyCtYL8oq",
  "key2": "2MRHvSgJR1MKLQhv4HFZKQbu3v3rFnASYARLqpiBxTWMt2eE3JR1pVFYTnQTA31QkqDRQ4cKKRt1M48qt3yp3vsH",
  "key3": "28BbKwZ6eCWsN9G5HmeHVYgVYDKwrFhXAB1GcnaAsg2BL2xfzRjmP2jtSoHHXkCkciN4EndP16Xy1hDwV45g8ZP9",
  "key4": "31Erd2BoyXTv8CrbQRbAmqP7EnSqvxgoEfi3tKptAvbCH9cpt9GHHaPGDMXhT8b3NqtCesRkd72Cw7KG9HFJ4bDr",
  "key5": "qpuFkxGDFwqTD2J51CCVwX9rmNxHdrE22x7vJvDeZCxvV6PkWoNUoYvJNA3QVncfcJNVXNq2tLZqth7z7whGMJX",
  "key6": "26uPpL3CsUhv97D5d6bB54ARMjCBGMcN4Az8gWQ6jb5xeQxrSmX9P8nK3XApRmcgUcNMMFRBDYw7EnUz6zC9qZQC",
  "key7": "Z3MT4g7AcHA62KLBJHghM76mmwWr24aXV3RWafJH8iMDXvmDeZTpcsmMgRWscr5TZAFfEhZfRxEHPwRDFD8Lxrm",
  "key8": "4pPD7XBitgJjb41jV6FmHmmAg9aH4eDpCTmGeZpsfunYQgDv6XWtqHZUcox8kBWYopH6rGSNLwepZ9FxnArAAsGG",
  "key9": "4WD3ZiBtcDHb2V7EW53REDs3Xh9F3yCNFGjAukxuFxRgXgMhULRbgdeBDqJVheNPVjw3z3FW74fa1wGA6kFymeAi",
  "key10": "3mqPjAjd5vMwWyZ947518qw9r6hJdsJpi2ZVgMFKaKbUAikm1JvGrZwp1cWvzZCbrkj9TADzYgE6qU1re9qXHGFH",
  "key11": "4ToK1FsdBZh6UWrRdNj24TRQrftCgEQgZK5d6dfMkdVZxkmGuReSvHKPqmXjEVy9hDfuxw9PnU47jRMkgDMY3PjY",
  "key12": "2QqjHZs3jAYsHYAmsc4EygR4CGj1rtbNdiF1LEwFqn7GyNS5jagxQDHQMqa7Rg2TStvrq5a2L7Lmi5S3ySC9b59r",
  "key13": "5kgQeWE2zoMdBj1TvzWtUy1Xqy5notD7Ln2Dr5PYNp8fcMWdyiedDXDA3nmMcyRhZN8ymcnttKiEY6JrcWmd61nQ",
  "key14": "4j14tryzwxKiDbqjMmFwKftpUjLahNaQofKb1S9nNHqTYGa95dv5NWBGTuc1eBkqEe17rY5Kjsq8o1bYwVUPd2hy",
  "key15": "DNtyRkPwWoQYY3rytmR5JHmjcGBwe2KyfG9Rf27PMJ6rDHNeJ4ruzmnJVLsnsbcTLCzYAA6vihyGghK9BuLH3xJ",
  "key16": "2q4nt1uL6DgPDqGWtXTtpHerzFGqVAcnEHdqvhVYJcjDNqCoNmHausXNKMzJy87ABH9gtFuJnMzYAV5kjHoT4Am9",
  "key17": "2Xgj7c79XRn9mXZRJBt771gPFakTYYTxGzWD8PxuH9KfGHjyiPYSHQJgokccTLMNY255dagbMAh9UooUuPg6G3Eu",
  "key18": "42PKr82GkoweYVivnAarmerP4QkgzDxJ4VFhrxTNzSFpJwJxwqRqWMKoZnDs3YaD83WAzo8oC8i9GXdMEsZYxtVm",
  "key19": "3TKFcU2YjLWDwGLyLVawN4CDLEoSzLSF2fmCmGbRVXvLas4GGjbJv6YxEqZzVHENc1F6tp2W7fCF9MNoh19CCaa8",
  "key20": "35rMwKEpxGDX9jUQqAwLdBKNDS9VyHX92pHFC1gmE5xJaDrHg2Xk2dsp6cKhh5AetX8qxoVfSsn78dLFbTYKkwHh",
  "key21": "b1oQ2MDN92MHQvVfEmVCQ5mxkMt7s3uhTjPZD1rNf2CTYcRWgJowFw63EW2umCHZWZuxTUwPaYPrU8Mq5cgAB7Q",
  "key22": "TwjMhJeUHxsiMx7cDpEkYVtDA2L42xZ4LNfAKqXFjcfTxy9fytG1dD3Pb9Nq2C85kVUz1ofG18wj3G84HUozfPt",
  "key23": "3n9RPhGEG9xRCQ9Rb1j6HYPiAnYbHkpDYyLsmGHPQ8mncQZi2ufQjmCdogqdSZ1qmnNMiFJ4juPRdY5gMRTDB58y",
  "key24": "5M7GpmUBNSkKitPJSB7houfcqtZVkV2TS7XEyi5jAxnSprAUq93oihgUxkaHvzbWUCsLydpksNWneDZGzaUodiRq",
  "key25": "3JcMWGSQEBKzbT6i59oRDV8oeqLNd1uN7kgh3UkwHXb5UpgNiLotGthLgZqVKueSB8r5Rss3FEJfk5Uxa7utZRYn",
  "key26": "3qRzCXNEjaPu5RREuthVV7mU7V5Xnf3op8tf81MQh4VhRedzmjsYhN9qKgTtrAdi6MwYPw4ht3MBnno4stSo6CAu",
  "key27": "6noDqEUVjaesD1EkLgprrqTTRzHiEo6VfnCePfp1pzHmGoGf5eVrLLVTt3RVYnontgE7gEcFK88JksdpZ43DeFA",
  "key28": "61i1dFJs7gAqaggDqqRpXYt5wnK6DkWV9sAhshKRjTNmJ2eXEwzqM8S6Cm8VZbqZ41k6cTGc8KQnDTEZvYjk2mC",
  "key29": "kdGYG4haX8fsvmPGXmBGJhd1BQJxjVrC7pokZvRdLrawsM7VggUkvdxGrt172FgbPB1e36VnKfWrBSzZo3jE1uE",
  "key30": "5TJmMYWdpeiM7oMKXTTb1as4YAptn63j8e8orvDpa9BRih1xZnphjoFLFwqXNZEE5sd5yBccGDt2NbucS6QAnw22",
  "key31": "3XQdSR5b9gGWwUpFZA33ArzNQVchfnVLjkaVNbgWbUwMRGgWVtQ1ABHFPXo6tViudpeMPhx7zrmYZ1rmotZRH4hH",
  "key32": "3bhuYQyiY8TTqP5Dgb79ombXsZ7SwF56BSMqTYaiZQi79DwxC711aY6BjLvhQ86T5breWUnTnrCs6dXctyWq8MEZ",
  "key33": "5fk2n2nzq4Y3WNA1ZNwLTPextrMcamruGrC7VrosWUX1vvoHj9XNvwwhPfAV6nrycoA8AZspWQrXCRjYiL5fqhnM",
  "key34": "KCC7Z3wcGrsTLbGPVMVEP5yvK6pt63A2bh24TNJivpeXfma7tfPcTUgpc6pbz6ihKCmgJbuMR9AtzfQPVsFeMSM"
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
