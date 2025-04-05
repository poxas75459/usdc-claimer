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
    "3Yy53KoP3Mb7p94MWKbAYLH1fGizbU8yGGPeUQTTQrMXC4vFap1YbxbAo8r8vbdt3eBDv4PFBQNQ7mmKieXRJVyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prXB7kKLPzXJRM8HzTh1uXCkNdQyCDYRWeDYPzbj6Piep8rKcxyhYnhsPDUXRNx3T3hth8KcAeUtWpTFgXkZgDf",
  "key1": "3HvB1LuxjPE8HeUTxSJu7DsSuwJydRAweDhESG7cbAC7yixQA5ffCAeFpv8e372ZdmpZV6tpepK2k8Lde46XCn9F",
  "key2": "2kSuaL1peqzUugmv5Zzh2SHqT83CsWRTUKu6SFs8Wo4Pex8JHJoFD6izVDXs425MCuxQxe2qLd5XrydrQxXw3gvc",
  "key3": "5cecMeENZRzuw41oLzyNHZmePqhrCxTSSM6z6Pvs3x884v7vBSnuYpnhfJmgJP1ETYyECx8DPAb7BfpDASudt3c3",
  "key4": "2Qt2j4S7266XqEVaNFJg45uZFxmXEGVcrqPE3FPVNUzXJZdGcvyWRL5mJTihYg3gQKrN38BnnHfNX4ptiahrqBem",
  "key5": "3UWUybhE7qDhBWnMZeBGDSoYYUeYtc6BGm1HrsRrDt7m4X1H4QVY3yNAFhLRHE8Z8cSxLmAwMDiZjKpETuGo8RgR",
  "key6": "3A9hrYS3HWUsLwHTD59Rw87kKgX2VJbfmcyUrK1BCK3u4hCcAXUiwNspiTTA9AaMRTUk2CLjpgDv68zJD4RHRqoy",
  "key7": "4kT8hevPbMTheYPTZGAPrWAsLHkk1snkqcuBbCrfzC4x56HEWS8AuNas25P7PyJ45eu5aAtYqNid9naQkbJZ6HYq",
  "key8": "3QeBY7GBV1stEx9GSzHQvfLH7P2odi5ZDzksXRCfseN7adY599xFonfqjWs5aJntk34xZrtDNzdQAHpFzdtXPe4X",
  "key9": "4PkDS18rvdqxSaWSoAQkspgwEo1KBonfJXoRDVHqpczEKzVQcuyDvYGMSC45AYzw6naN2uw5L7VZsNtP2UyQWicS",
  "key10": "63U2Ng5fv4AmnDDWsfFdY3qsYqg1P9NSv7jtrXvvm6XUpg9gHKS6i5CfZS3U9WcUQADPuNpgaaUsWRPunzdhrEX8",
  "key11": "KeK9kuZYXmqimNLt6dfTt5GSbh8YhG3m54oA1zxEKgxS9QAhUof2CSmKQbWS9xABix9gorQQfqjbaaQbV3FNgPt",
  "key12": "3JEJMtxaV4843e56cNtp79dJpapnkKdsMmqzxrxjXbF26QWQXfC9sGapFMPiHg749zKUYkQkRMzjnrEnva1cPivP",
  "key13": "4KeK25xftCx58XbNKyn334MjBzdAbUzwLdNkCY4CN9RPZQcV8u8vq3z1eyupuDKGdsAwSQ6BhSZbmakSabTYhCTG",
  "key14": "5qSUoZLJAFPAmeDNcshZkprebj8VmerCSaueWoUmihqvi3H18JHNLF7gAkgMapfqCWHS5KFPhErVBmrNbH5ki8fJ",
  "key15": "ELmXwPXBfdCyDdvdbmAA4xchtq4DX5RoaGde6j6u211SKJPtpuUd1hACB6GvfqkLRDeHckhrMYY1wPZESDwnK3K",
  "key16": "3VQD6zK6WFfFuaFBLyWSn4yWkguLW965rrMQ99zTx8EvY7D2bsaR1FZc3LAAMPRuvePbbH1LJBCL8oYEonNqE7tE",
  "key17": "QqPXxSeaXY4XkRXY6rYBV8vK4S5ZP25JGpfe3iHJv5uRU9i6iyNFTYRfyYUhfeVL4hLRJTKQvfxz9MGYHpPRsmF",
  "key18": "31CSFjzS59rbgDTKYZ3MAb3ngvn6MfMqgG7e1r8j1NP3Mb9MGP6bu7QAifGGvDRtPGHXErZrdwxDbjwAVWgNq7sF",
  "key19": "5eE8RNSJudeFzmvcTvRD9PoGdadZDqxw4BCRuUgS4J3ajLqkHL1hdHjqcYJoi5FqD69zH69ZAEhQRc6rt5GyeQa1",
  "key20": "22LVi7YAMVkDW6zNfDCRhH78bFWLD8uBnZvv9S9TdehZ7xQacKzruGgHEqXRWhqxw2KTWsb29BkdjXAUGxznrnhP",
  "key21": "2dvoxq2aKNXaCvgVyLNE71dqqz5tLZUwSdBMBShP3dLUW1PrZwXahgwSzaCUkhRSDaNf3xe763KhF3kG3iAr2Tu7",
  "key22": "4DLZVc9ZSmKbFdqUUGPhhQZGHsCJchjHEFNNrL5qYgysTBpsj3gxWMAapVQaQypT9nYxjTzzbRBchJuZVPKTSvXp",
  "key23": "4fSJ6V9wz4nfiEuZWCccnYQXY6nVKivMJj1oStkV7dTviWRMiynxWhqFEJsruTofsncmfg9ocfGs1XZHjBZpMFwd",
  "key24": "5SNxtK3BoFFx7qZrNahtK9vHWQmq1QRJ2dh9EyXJtYqqmpA3Fjf64bkRcu9eUSRt5unXTpUz5VCix567HM6GsGaM",
  "key25": "5SCCvvkJsQDHavjQCexBz7GL2Xoq1o5dJiYcM4Dd8jA1J9cvhFyCGLKjDnV5f9hwEv4zjhTaKMfHzDHKjd9w1ao7",
  "key26": "8FPCX3cfdoQrvXkMs5TPLUGiukmLwZsKYCT49g6o9XaPGowiX9EegDjM1LzE5QdeeDdzYdBqb4mR5AAqybrRJ5Q",
  "key27": "3mYh6tTiHtjWCQrbDFSNFtCgUpgy5N6xQvnvoqGm99ijSK7rXTowECF2m4gRoSL85iSj1ygJAMLL7P3F8D697etT",
  "key28": "33RY46sWhGYw31Ezv5BnU8BFMKwnSkUGNQp9axhyU9QuTc2tuyNa7NVvRoPxm3TLCA6ZfB6Ymc8oozqa22U2qViE",
  "key29": "4wFDi8W1vbUpvydGn4QwycUCCkujhx4kC2tsPhcDrMbCG3TJKHJzEYNXYaCLqMB1jYwwCV4RAtZi3eH4WS3eVr7u",
  "key30": "5wWEgsMjRzML5dUthhEWaPTpCnD562KcREYV47MhB2pfJn3iZUdQaXR42NC7tUM6GhUzidwfyxZ3va6wm9LaKwQg",
  "key31": "ERiMfVFtC6xXxfj3MjKboJdgDnrUe9EpgoYstgd8GVBeX9HoGFv7LX6Nu1u5fJjfoSTvrai4xicTsLc7Y5ci4Ua",
  "key32": "2UTKtmNHb29zbSbD9Wo1QqMx8DnHhU3rQ79gaGKjT9wQZ5hbxSR9RhwhpzftHF6yDJB6a1tR5DezbtKoxTdctRns",
  "key33": "txLzFDu6jGJP1Wy7tstsqn1C2iB7WEMkXas56rCNQ8e1djN1rdD8phSap5cVYDLcszuLnKNk5mLUfYQDsNjzJYE"
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
