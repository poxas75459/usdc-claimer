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
    "64NjTncTRQcMzRrMYZqRHQD5V7yQ9YEfB364bgn7JhujVuYP6NTrP5PVCywbJe2f7mBsuNeocU9TjgXqsdrP65bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tTx1EhTUPachzrBwYm1GPjKNZY3nno7bVLUtiVFmLe7KqefWWhpsFGzJbVauqJycbXcrGuW1PoKSF1XewCRtgtY",
  "key1": "tUAdE85G2ECV7ffaaXpTGmsCuDNcsHKCdd6bHXRqshgGwa6HkJWmEQNe7Q4UebDLV7f4NynKLnCpBLxpxuDvPtU",
  "key2": "3y33y9WRpBfi1eqCQ3z4xGvgbTVfEracYFsn6SnNRrbAh7Qdqdk6HvyiYKDtwRVRFikJtqKxw6TTuJdfYiJvdAUS",
  "key3": "5HQXA3M1QLjxDDzA2gUKANMmiuMXAH3SsnEeM9D5ruff7sSvS7uo8gVRzMBEcREVVhXHgWWsX961q9GTQ7VFj9ZC",
  "key4": "3rLjjeaehNfrG5o7rAvJbRg5QJAv91inPWGsijD5kk1y3xFtMo9D7gTpGg8XXDGt7DGgJMX5kMErxjNi4DCrh3uo",
  "key5": "36hcU1uydwTkcdyheFhmQ85EXKRvrP939JgDvThWEBqcfb5ZtwWKofxEwukKXddVk2Dw88HqXz5xMduyUB4qStoY",
  "key6": "2ySRwZxoVQGmvPu3KFhCbY54P5YVEAtRdWgjAarPRyc2QN4Gn38br4TFqsLNKEm46Ewdv5HEhddoSsL4hHAWBh5b",
  "key7": "8NvkjrkTtMQtRgnWGpZRj4XtYVaujkzH16vAgoNZhRdSoEyan4dvCcdtnYYsBfArccrpsJwDhtEeTJs1rueVkHj",
  "key8": "3Mh72DYEPBYd1UBLefzgASHD3Cgt5P3JwZjbT3bkKpPBYy68ecoadeRTesmEG8WhZ5GyEKzqA4bZ9nh5Z26Vgyvs",
  "key9": "4GC1jfToHioYnYKvRbpwMfWVix931PQ9F8bicgZkJdbxFPBYiLEVWeNKUzAGeKzS9UNU7KsPpaho9yGKUUjR7ZDF",
  "key10": "3hA7TcN55tafYBFtAaSBUuyX9fbVtwmbRjhYiChsV3uDcFE6wf8A1Hw1uhv6pthfVVcPbDbnKoMxwsH8amKor1fx",
  "key11": "ov6cUj3KszRhrkmCzgya6zDC8bWbdJPCcXsf6FrXPNqFeXwDy5BXScUoj29V3M2Tq5XJcHW3a7URUimSzY4PPaF",
  "key12": "2wfXoXcjbMhdxJ1TFiXcRuumnFp6fxN9EMAJj19FMvAizR2J6pEA6dKb9x8ktzAssyptPNunebzU1ZhqcNinuw2d",
  "key13": "2KsXf3NoyJgpC4NqbVyL72Yq9PPhn6HJPWmrrUPbRZNstTnBzG11UYo96JbKm4Z364WMLyvVgNAVZXP5TgjwWn3b",
  "key14": "4W8T8aoifpL5JGVUcp7hHNBiTnNFRBdeT56En7PFuGGAhzeNGn5MSQCxM722gwcSJRS29U5JGo4TLcjERrVzgiYb",
  "key15": "44JrXigWLRwYxGQ64CxD3LRHQ1NNVQrcqDL6EoHPrEtCX6JeHNtc5Yydk6oJXt1DmuaM7bafyRo3dGwti5PbXgSv",
  "key16": "4F1aYYt3hfLUE7i3Y3ismurKiEPU1dZKHLcHgH3Rm4y4pkKqax9JPVGK8PFK6MLjEQZ2H4mro3dE14qKMGfCb6TB",
  "key17": "3dwHQGRabmJVKQo28JPnV3ZxDpsnWyDQD5UptGqvhUa2v8eaj1kV7dmfJvLxBT8Y75pNx4ettX9hcbiiaqM5bArZ",
  "key18": "4CpXYUomPbYmK8ZxPYnuj1dKA2y83TfuBsfUfni1ssvLrrxouPfRpDjTdmGkmUY1jWJTud4PHCXPwXPgiXyKnqWK",
  "key19": "2bRgDZ6VWfV3EBgX1A3Dm598RRDcACc7R13kYbRHnYYpz8TVrUcTGuHjCjhEkL1SMFcteGQ2ekZ5thKjPPt2M5ZY",
  "key20": "4JcL14bSLebEt8m2mGAjgv8S7EeKmxy86KdGm8LdyfCzVvs1WGirhwrLpn1GH8JiVqwwCPE2FRzDoq3PYE1yBDNr",
  "key21": "3XX2C25iCeLf6aa5fNftpD4sgDjVRnJhzPYtySgZLCeyfrY1PhQHUmwzt4WWZUk232dtsrksWhTZnpwg8vPXq2VS",
  "key22": "2HvVQthRScaCPGFACofTmAHAgSmFqLs49m9eriPTKHsrvtSFR5G75yftSYLeC7NMgmubzkpZsyUtRxPgP5MnuW4b",
  "key23": "4pYCs4pqxkD2CABTCfrQ68ugemFv38uqPnSqKW2QgBse2anygemMEyAt83dgQ4Pbh6WDtYjug1MqZAskh37dSaQy",
  "key24": "4UxS8QRBC3NFE431tQf8pVAUkXKNoEja9EMejGewML8QsSsXgTQRBuhVUkHRcDuy1WMnbA5CryST8uTbHMpLZ88K",
  "key25": "5aTMCYNuHh8jvx8Chsx1yGszosDWfNzU8Fz2tdAqFZ8K3N3g6rXPahBnXcfP31nZfxTgaym7nMtxhvE2k5yLERpM",
  "key26": "3UY7TED5vHDTpiquWQy1a8xuRUAQwesj5U1cEjvo9gsxBKFQ11oS8fbXF8MhXQHLsg8MVdWjseT6nmAarENzrEUN",
  "key27": "35DfU1RMavX9s3HM6VXyqWHKx2FAMeX19WsZPMBJ3LPmKBBNshna7fhRAhQCXbKF7pk1LhkhKf5bwjTB1kt6Lc6W",
  "key28": "TCfnVdD4EnMFgvu2eJiE8ZXf7PtwM9QYtzBfunYSo9Td9XUmEkdwYgePVXJVAst91xWr8fo5Adgk5Ef7UXqgFT7",
  "key29": "57FwiMvjBkRqe39WfzpsXzQW7WHuY6q4u8kRHJVQN7AYJPyg2km2RTeJ2ZsFFbggmcx8BwZ4CN6FgDozZVoTTapU",
  "key30": "1uCYodFRZHwZHNYksVd6fS5eNRB5vmkyMoRC22i5BSDhNksTfeXT3NZGhWYS2cpqu5Hv8ihgAo5E7FE6vSZoFzL",
  "key31": "2RMmLBxPngsH6NeGgaq2F2AzPaG1DuVHbdEkAn5yjYL9vndPnAwx4HnBmKZhaxX7JoqtsACpnGfh9e13pf6uCUpD",
  "key32": "3YZgg6oJLpvo6LhbmoD7CAWNvvH1zcicPPwjXR8teaeyFikos7PTDK1rjnfAYLLSB5iyzNa1WXUgLH5rhhtNCJwD",
  "key33": "5646Ts6rSA4BAH6QMakNPJpTfy3UKTwAbksAR533NePD9z3j2Bko8KHbZrPjigA5cwu7Fgx4rm9kjZ9uXA2oaXC6",
  "key34": "3DqLXeth9FLiW48oraihnxnJDbAxz8kRmpKaFGm17v6ahczzftNRKD6YmH4Hc7JPrVXpWvQgCbYocZ3ZJ9MoJjsx"
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
