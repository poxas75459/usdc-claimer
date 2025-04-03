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
    "2mXofeFRw5KtNZDRNjx7UxyDpVdbdS3vp1wU3yjWLNGaZWBypvzucHaMJwtkY8oVpDUrrZzaziEKgXD5aUXqfNhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTL1z13XPtUWMAqz6WPPeYBDdNsWfWJCgKYZ3dbdhDzoZ7n5B4bAac3a69QrznxSNPYnL1ayST7JD9UsFXLK1vo",
  "key1": "KzSgBHxgkWrnrAcEbdxisjCttQzgzjf8FTr6bw88Uh9W5g3JoGxoUVMbXt1ncjRGf4a8vCHpVQgT7m5V3qGXWmU",
  "key2": "cNSfaBuecH1ZXAopRECQKFSQjb11o4yYPw1RhxwCSGCLEiZYdfxL3ZXWeJDh2U5sYv9DHSK9xAb8BGSD9XuMumV",
  "key3": "49DhhUiBwNHWsojoswCdxGvD2dcwkwWQWeCzJncs7iRSt5JKzwKfnrSEWSd2nj1qCKYma2YWS1TM9BZeDRhWUfKr",
  "key4": "438y9aXymYkZTddKktLyhRwjFrCKghvpvyA2Hj7Bj4uz6qRSUgmWGDcgdrMeyfhE74uPDZVvkPkT2raF9TfPhDtz",
  "key5": "huUb8zmCprUgti7x8LK5BDoMQ3wAwEhUbucdVvvb84C1S89AidqgAQG9ZpdMKYY9Vjsrj2Uh3SsgKDeALeJE5rZ",
  "key6": "3nzhzzMYr1EuW6Nvgtaq5hDCMJXh1fJbSjXPQiFj5cTHLzb9iDDj85jrnJ6yCsasZcxNHYG6R7M6sYXcDyH7Xxh3",
  "key7": "2ojbUSXA3xN2hNTHvXpmrqqcbPohZ7pBAKTshHSCZMuufhoDqFWSJyUycS1pD6pkBtU229JN77PRKPkENyo1cyC",
  "key8": "EzPRjV37KCZ4EzHzQ6Hjdyni72FsUEciBwjpnqtXKnFYLoyaJLQs7FaWpXkkbkWzfB2gnSqQ8W4Yu1Td4mLZHht",
  "key9": "4ATuwi9fMVDdaprFaasA2RCPnz9Ry1G23dMDKC1vfHMSEdoZm3JkC8c5F9RE7ScQek3SwASFEmb3h69Qh7L7uSqZ",
  "key10": "tix1jVFrR4HrpLKkMRfxmZgnVPkwcw5RPBYgCuEJrAw1mdQzqFLgUbSYtAjn1tNScNFudniShZLXQLxrcbLhcsC",
  "key11": "2S4mFzTey3UYQnCdBVNUG12hPkoKme8B7Le2hXQv4rhTaHfoLrt3wjjuWpzYybbbKkaqwxy2H1JamLZCzMExqpXv",
  "key12": "4Yo39rNeLYoq62fLsKwaHRM1ELURKAu95ukdPwVb2HL4WyUBrhENywrM5CpEhiGXWgdyXxaXULStTCqzL3VT1swH",
  "key13": "3gwH6YcXaukBzUDjFR6eU5TxRVYxWUNNt2QHbbuv1KWjUn9PUAtrF74KkLDbm7S35BFNkTZ49MAGaQJ9aohb2pnK",
  "key14": "vMV6k6eqenbLSLwPdWL65SFcnZndZikirnXSaUf7eYvLuyTe9cXVZWE2FRtjK5XkB83sazFXN4YPwHuY8iP8bGX",
  "key15": "2WQ2dYBMd8YJWgqM2RW6sVJbi3vcbgvVtsCUZ1ePujYnDyeJcbb7gWNMNLwH55iUzmXEV4HZ1CRmKRS1ZYkQnVwr",
  "key16": "41V6sMULbLKotGPPQ1EfNW8ir2z28tJib6vAY7g5chyuCavFR4McgX1m7BSYUucJMDHtZ5WJZZRGJfivXiZx6pgg",
  "key17": "3KaAtn9k9mALCdnhe3urrqYqB2ZHHxxcz5CQ1eGzhVdFXwpU8dRJskH79WJcGgoTNYqWWvdwtHipQTdmRyTWwnyQ",
  "key18": "7JE9V5EqmDdvAqbkvdWy4ShfwHo2UUeDWdpZXD4xHaPwkhoUM7hME8UyYRRjw9wCNsxjp8mrSDziTcXTZVkw7PM",
  "key19": "avwxThdJ7GFPhfTSqYyFEiaZrvuuBKPkmY1Tc82RP3WPQCASRt2xc2BrUvwWHD1iPMtAjejgABiXroanohqrptJ",
  "key20": "2E5QzrJ2vUVrtkkTjm9DP4DsKjucqivSjfWQqSc3VxAEiXyd697o8D7nGNvKKrjKckXbVh9qQGNC3PmdidN5Qo4r",
  "key21": "3cyvoFPzoMFZWxueLrPMdqicVc39pknLG9MgXDR7FDwz2gHD24YuNe24KFwWNfeFpN1UYxX39MVXs6X7H8jQDomD",
  "key22": "5bUj8kNF1cHq4pGfewPgrLAdgx57rNwVyQKbX2A4UTby2Njwew2ZxcJrwtAGGCePYdniQWPNSjT9sUuMD2n4Kv9",
  "key23": "45Po31kQVmeceyXyWZ8fVkR5J4VijnLjCdxXdcLnbimPevU365XhW8FHGqKCcoqtcunspSQL9B5ZtxAisiSZyGyx",
  "key24": "2iTqQgetksSBDEc285ETTKGi5M8SUwK3UU8QfDRN7YKqXxUNpca1hnVQJCVdXt5swj7Hr9HKDNCkPDVAvU4LXMA8",
  "key25": "4fjeHLNQGn7jJveFaPH4HMcNiKKsyazJpmy7rdjtdT3eyWhjxLWS7Pcszj6MESivYmLzC734K5YtSTENnrQjhVfv",
  "key26": "3JmknvGAshuf3cEf68fVnWFTvuA1RnUneVJT9XsCV7QwMUbq9pDuh4ZbNAqmGLfMp8bXAcADmoXgcPtPTtpWQq4s",
  "key27": "3ff8KZUdwaK7b21b9dDKqFaFt4dTaLiGsQwZju2AvEx3VjoHjWLxFazSPYzwp2mxZqJaJYqmsjygjGxVxwis5EtW",
  "key28": "2fgJFj7boXJffmU6T91eBQYxYMwHpUappbeGRoBAXAwD9dZUqK6yJYJRztzR4MAeYcdA8WQ3qu6CsZEYDNGurJEE",
  "key29": "3ZuPCoKk32aSZRWsros2xf5aNG2ZPA9jeFYAmBCcQo8JvqTGEhnaQJzZ1jRMjjTTKr2QpRJUc2YrxmZoSSGog8nd",
  "key30": "2To2o43t2MF1GpsP5QZ3ZdRjSkFavs28Wdd741orxMAuxMsvHBiSRFDKVUStsNwkdULN4XNUCNJogRwUNMwrHRzj"
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
