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
    "5Zt4Ec2HsLX52W9FashwbLujPrwfiWoaQxvQmJx1sz21eDLFhANTRfe5DxyT196TNski4uLFc5h68oepVD2msqrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xReG9t3KcTWdoXHVqj6XKDxAPeTg524JFWTZV9aDPHzuQkvrX3Zgw13KAZnetok2CwC7aS9coZTP5cN7QK8Ugug",
  "key1": "ukPiD6ZwwduhmHUwbJaYJU8MgLhfkxuNLwjRSvYbrwL5U4zVGNBTBqboYVY6vZYYP6z3P6wSwwMRXvqEvUpzduf",
  "key2": "4U4Wn8R6jg4oUze5HF6pPL1iszJ9XRaFA5CaBUVCe3LGaDkwTyFVXfzcLxdF5KvgiVseKe8z3Dmt5kk4XrqX8cs4",
  "key3": "3YMjrzXr8S6j89Xuk7inyk12aWf4xy8abDUGgswoy2ZnJy8wxaM8rLALUzX7NSzZa84qENZBT6sqsyDkcMVuUdWk",
  "key4": "4py4CgBDYnKtrX7skwGxWbbJkzcKXZLEy4FT2RHHFaSUn9badkqEfLHyUGYuq6B9Ghqef98JPFdigVCswKaKngWv",
  "key5": "3gCYV5MPKfGe1eJ4iQxudDL1bASyuHL1rk7yUWRXnLDZgGaJqqfuWTWCoENGHjfyB2HF6hF18s56uQA1NVTQwPsN",
  "key6": "33RV2QogkwgCfwwzChNwgMHufFYmjif1ACo1dfHPUJC8yEk6BxXkyE4s8QMYAXf1NyqmqyPJEfMHnmKu6Rd9DnxH",
  "key7": "5vrGDzYqNP6duEEPE8uD54KT72VfHsjR3Ni5r2UftqGz6cyMCqzprC8R3SDFY6BQmhQH7bYAcpLUHHN8ZtBoN6vc",
  "key8": "JeSf9yxmHKK4k1CBtfbJ3xvCejxiQRMxbXf43uiQJfjETrUs3zD3SD6qaLqtpXBPtH7m3tZHd6hWzMLetEC4ymd",
  "key9": "didnakTgrC7CFZWDGA6Yciaj57Y8hVirpKm77uanUTujs6cu1VNQ7W8gyGc2fZzBeExM256v7YBg5zCdYcGrUAx",
  "key10": "2NFrAvaYc3hFhRu232Gnuq6ZA8bnnsj26mHps6G2s1bfT7Xz6nedmUejmE98xr2mXuYwQRty8NxZNN5UuuiJuGJQ",
  "key11": "4Rs35tTV5x6exsDi52aE7UZKMguEyi5CCq1taSDoxZkGEaGKd1MKyCYEkoaGDxCB6ejGzS6hRFwS43E55WJ89pVx",
  "key12": "XMqpUsJPfDeLkQ69XCWhPWoKTqnCFrU2DMrBaxr3eYX6Q48UgYcmUThLXPpiHNa3Ztr7gLrpKnn1Qj7mAQh9Wpb",
  "key13": "62bCEtvpahHXYQtBq1pxFqe35XghuKNpbaik8dbHbrzQxe4eEt1miqr63wbet6mzLU82fxrxUbvC9qFgzoSiNJcZ",
  "key14": "66qpcJNrbadQfnRBzxjovYwNJ3bkHpp3PLtUABEg9GRzqr5njsPBeauLT1dVFAQyb9EdXoNFCuFduxP7YDCsaUMP",
  "key15": "5Hdy7oiLQCBsc5yHBvp5qZQmN62hycWuYFb9HFCwfw5J6S6fr7YbcJmGHEFZ88itS81n6Xmhm5nF3zaZwWnNSv46",
  "key16": "thubnJqU35FmxYToTUTeEUugRD9FjAR7xD1Rr5PA3wkPTTxBRhsnonen5VLB4RKqFWHE3db52L34nocnyTTqYej",
  "key17": "21PDU6aEao4PH2FF97DLdCzzswa8ivv7Lb3hW4SB3SEUd6o47TR6vtej3Z8Fu6kk8dYT8EBp97HEiHR827Fwb5KX",
  "key18": "5rreNUUnTaCs2A7ocJFQSMKfKZ3yLVJSxiqmwScncKPuSJPwqPn5JYuGn35QPn3SEi7PoV8wk56WQDERtjDcmrsp",
  "key19": "3LnurDEfPLd6TcUGFbXfvE2uCvxE69zjR9Ubz1uSKxJH3HKM5VxJA5mU75ZZ8pENq4WK4oiiiryUmLGBujgS3RWF",
  "key20": "22jy6xR8aMArvdsTtrz9Y49NsD7NUe4uu5ok1EZwQ5sNuEJToYNDszDbFwBMBVsBTuE7pb3z88dzX6JMMPwDfHJi",
  "key21": "3RVzbswToBEttcMSfEKPfPywcq2kx32VsyFQejkY3s8oR2yY9tgzPkwhgqkgzhRLVS5bbMYQhDZn1iESZKY4r3dY",
  "key22": "v1GofsKfZycBhNYDqZ1kb5TuuCHm4zft9xubJ8Yv1fwBN29CpbMXzdu6eizvWYBowfp6fg29NQdRSfoHsY5oJRt",
  "key23": "3KZCfDZcrTsaFFpGSqz6a3T8HqnonTADHxGuTYmXWgz2MgETUEpUVJh7X89BEF67LDpp7K7Pf6xFA8JFsgGHv78D",
  "key24": "4vjAXTJkDC69zfvxhyLnuc7tXapW8kj2HP2aAgF2EaVmM8FpmbNti7AmZb28LCNHYuo7ozG15poLv6Syi9kT6Suw",
  "key25": "4tmxTgyT99fvdPCPngadfUYvmSmMmUiTPqzTKCCqmbJ4DfHhTVHzVtEq9bUnzpZPXAcbgLFvVKjCY8xFmXMG7bDz",
  "key26": "3Ya3jBSYRgXxgo6HgkR6MeZb9Pxd2CPF1SXupdgC1Pi7zWoYGLUZrx12WmYuLu9DovjTTwWstfgdd64QMPN9mPQg",
  "key27": "4MbyYiZKZii9QJKyc2NgTftiRtHvMartRFXUhd9BAcLDC7s9bStFH8VMKZYMKpmbp6wva2mXX1Lgri61gP7MxQCm",
  "key28": "eukukB34rtqNQXXYbUfSRpg6qQUuFMv5bARAeg1zH6D6TfmoDEgxZMQgJtViAGn3fhEWCxo45Qsjw3LqNKxivBG",
  "key29": "McKB6p8RzmR9mVhvq2agHYiy3wVzdEouGHDVhtEj9F9AE1y6STrvRAAmxULRAaqpj6ogmoTmZaL7qQHAt3T3zpY",
  "key30": "4Xo6anPBWToqHzw3PHT7bH1Cj8RsKXGSBzCZ1KgHeMbU34mNXrq3PV7yw4NphtE37pKdL4FgC2SBkPcysRL7JaF8",
  "key31": "2h8kmccHVdSv2EaxU6q8UB7vx1z29GP3vt4sCZfwZi1UFabQGUb1anT7PtDpsRnaxmHutxKDn6vz3EyLMrvM4Lhq",
  "key32": "2KepEUBi5NmDoC865hWYsaUjbSDAEEgofdUA28WgKaThY82bxSiuxds6tGZ8VEmH3HJ9vLsL1T8kxyr8BN1qFvJq",
  "key33": "3bP8YGcM8pLRrAL9r91QG9uQz6iZspSkTUcmD8a5kfcbANcNfCNBC5vZgHYgJ9KGT9Xzq1qpbPJPQnxXEpvEVQsr",
  "key34": "yRiqmWFosNMD2ZFMKDsnu21uvSqMayX8BsCtTTiWEFdp6EH5n3qgFYRB9ZMTPJbzxR17QK6FYphvPuLDL3KTmHd",
  "key35": "5u2QdGJRpPFwTKnuNL2jjnZB1w2B7ZysXhKTc2PcC3aKfaPXTofp1YzHWkE2Pwin9Q3dVXtpFYPnazbZGND2rcMU",
  "key36": "3dwikqf9CnLz7fA7KefkjV7XhgVKJQdbNGkUXfo1HJ7M5UD94C68dn4mKVBP1CWhTskkA6kDyF6RNSgMWoPJeYTe"
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
