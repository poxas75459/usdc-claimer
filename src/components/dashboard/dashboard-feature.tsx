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
    "8RmhQ8Shv9EKubwcvPtckSLJniJFrT8oEdPxPdRUet2h1UwHfrdLmU4xT29222jc3pNiNKLuXbK6248Qo22twPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zi6r3n1dJjTG3vn6ADLp5Vo5DLPgtZfnqAt6Lk6daMwmds4LgcZgxRreqibvgdsnpmucJj3mbHD4F7WTHHWMze1",
  "key1": "UqRhC51JyT39M3Q9aZnpxgS6Astb3h94gYwUcjGBXxpYCqnYYK9Yqf21n6Czv52WAGGw6TJMNJyKbARPpvSdHSi",
  "key2": "4XfsegDbXw82hE6Nrq1BcjgB9BTCGiKHSiWik4j9p8W5JyEDbFmVD6LfioCJR91XpEJr71LGArZuf1cgXR8RoPCR",
  "key3": "5UttBeEFeU47mKw6vbYUcJxKv4i9xUkFNVUxv2swC8DZNtfY2gDUDxisbe51QqcsU5rUWLsRfK17EbQx21xfVXdj",
  "key4": "2Z3iJKvPHj5eQ6ScLE8jRvanYA2RF1E9QFMH2V81BRHWeETjhSsfK5NPMsCdvtnM8fQsTMWkWeMaFtKRrUsc9n6Q",
  "key5": "65m4RmWouenshtfoixfe6XNGX5bBP3frrDNz6f7CaWYzs2fPzVXbXSXbTYAqtRhEVCfdiRe6vGr5PbyRSCJzU8Hb",
  "key6": "PLyRYSARNrgmPXJr9PQVi2xL6F2wjfHE14JbDeF7Macxf1TBUev7eHP6snANhqapsF8zRfs96o9Bo5REvmY7anL",
  "key7": "54F5jT8Ak9MkBy3PgJHAjdg3xxGekyUR1eAGXoXvhCZvnMvf6fuxX8LT2RUmPb9G4A44GuykTcCitnacG7DdG4rf",
  "key8": "3GxMnnY4xdnDuK7q4x9snYnqdqZGGCXA5BhRzuPDuoS775YLfrrECGFvA8GhM9Z32HmUxgYqeyx3JDebvXeWwECz",
  "key9": "4Kxj4BhUJg5yuSGtRaKxe5wVWv5v8pucFiLU1ZSbrMHzjELbxymdqza3V77o5j5UxRf3Sg5PMmkTsunQVAftWqrS",
  "key10": "5M97nyph9CLF7R35aDwuAgDv9NDUynuUtuQ28BwW1VbnJZWAhgmi3Fs3LxWTVvWvjJU61t656YRr9SWZRjkUczyM",
  "key11": "5cThJEngD3Nc2xsgTFGzLEDQxE24w2uVPQkBJzRDUaBbuzoZ9yPpTLrXYE16jtCHNadNBQVRKJfPa3ftN3W2Y9HT",
  "key12": "yQuznfuTprxL21Q6drbkyHzAmkvNru2md97TNCioximQLYFXpdkDX7UfngK6Gfz3foLb8gMrSyDPwG1KF4xMH6Q",
  "key13": "33dLY9o4zPFYFxzG7Asx8eN3iZwJkWXjE31gaw8WCiC8CHTZm8USJPpxjfw6rPcbRocuaR4sHuqHJQy4j6iwEcMB",
  "key14": "e7noSMm2XFVqkwJ924jBSGoxvbwAUQVx14sbmfA3K1pbwzjdWxKjbwGDFsWSxx3ozUeD9UTnB5GJB1QTrqEUvWf",
  "key15": "3XgMES95ugwj2qAs4Fm83ESyTiMxSY6Lh6HntBq3BpHTeyXELoHeFC719FixFXhr5kFT4kgwhCnj7dH3v42HJtpx",
  "key16": "d7PfiktWW1vbjiUUuF3mjA8LTiCiWfKmhcWGbT1wcxw5rgDV5BCyJcLLFMd18SaAtEF8uFg9fAvP3Zgo5dDZ3S5",
  "key17": "2fYxxBk6iN7jEsEXd9qomzcvToPFNYDdq8jPfe35P89RbqfWr8pvP1FcytUMY5HQUZWJtxwkneAY2NBNf78KUQvF",
  "key18": "ZpLyJjfNAwGNR71mMFWfpegj7jxh17BDCXDxdDX4ifsUhZwEXyhPGRX4iqqeRAoKQ4S2f5kjasu43jKrKuU4sCY",
  "key19": "53ACBcZvknEUmwLHUnN1vFWkYSzdajb7SKXjv4nbCMZzRsSLV4QE1DitdKxAtPbbBHSj55onkofvkwygVzt3wvhe",
  "key20": "4ZmqUqDNGdGrm2JKrwTcDYzPqC7C4JaWMSEcGFDN9uQApTgTEEc7kFSbnY1qGam6T74K8BpzwTw6EwWu8nWaoDBU",
  "key21": "3vSYVUQChjWtCcZ1y8MXBLKtPCsVTtceXoahKu2yvMGg6RerXGmZ1zC3Hrw3X3h6Ae1p4bR7tM8Sj3QnsYGFDNce",
  "key22": "65CmpSRLmhTQhMMSrvgyDgDsvWR4KkwUMEvEoqm4xuvMkBsHTfyEDfjdnXReRAWZWxgESMSiQ5W8rQ4pPUEeUXYi",
  "key23": "5DR4foprc5H1qWvRavxRNfi9m9GdPs9upf4toSjspcMtpnLeMnTtu6L7MZW3DytCpP48yikV98MFzatd7uRT1ZfD",
  "key24": "4epyaf1LX4bNVB6Mxwzu6S3uURnKbErhJTQNnQbsFsnhTVQ6rZA8WKso3Lv1XCQKyNp27Yv5EM3jfNyarTg4sEB6",
  "key25": "4kwpnxDNRmHkuuHShHHnSGLfDS4MpVKxwwxteJeD7pLriWQ3Nv7o74w8ZPPzUgcrsCTBNVJiXBoYKKn6j6Ks1FT6",
  "key26": "2zDg5TJdYX38WgC77sPYPLSwhZU6hrh7YmyJTguj84m1us7ny1RXXfwd9Kekhz2G2B9WoSEZGXZgxt1PXgNn8tBP",
  "key27": "3aYwLyGdseCUGs6xRhQ1gijH2dHzWsvBPHoDo5UhYm4z99LtC9DDxH9vy4S8ncmovXw2Rd7MjcjxXpHaGwCB8nEz",
  "key28": "5Jf6TVEQKNoHNULjhJPWxCkc3fnoddASAyKT2GWN6e8NMo2kGrPP5ZWFj2uG3WA1aomryizYQ4v4cmjsZdPLBQjW"
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
