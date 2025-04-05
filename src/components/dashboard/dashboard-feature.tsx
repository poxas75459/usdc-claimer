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
    "3pKCwVmyBmkYhHnCR6uJhV8G1Q4WiNtgcNmznzYFSXgJ1MmMtZVbW1b8pUHE3MNVgG7YX1AdHQ61tsLzEEdNkPs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JVUsZL6soyB3kZHBtRM8pDXvfkFzAtBqvo7hzZweMKTJorKz1EZCUAsAQ6sjVyJdmQ4FvbyzbFdwmgsAm4CvNJ",
  "key1": "5P6yrn7iBxC6LmscKAbW2kS4sHTRpGWuPhyDxyEmtMF5ySGSTnreqx1TwTf8X86vSkDdE3dzgMA9s57torUBDCDQ",
  "key2": "3x5nnYdqjpdnp5pQrcnNnv5Q4wQQifrPvNif8C5yBGjx2z9y2izNPLydpYbCWR5bqKgkhGarEAbx6eHwrEBeZRXE",
  "key3": "3y5wYZYTfq3uYnEEjLKJ6EZdeeMK6MHyF4WNfhunPPp8tz9oMeVtcqq4naxaStm6CWmP599CetAcL9twuQ7bnuqY",
  "key4": "3qa75Kg1dRdfgz3SVsbuWBBqGZhcN2o3T7DEP6XZ8T3c2SRikA49FnVFD5TJTCYhSX4P3KeYKwQUxG8gxcU4bSdH",
  "key5": "2FXhKPJ4w4CNyRWU8EV6cw3trtmrAL84cdg3bMbQt2iooUQtZAwKGDUk6QauzcdNFyczDaWuTr8LdF45n4wzUCL3",
  "key6": "5UaP8ENtzFxSk16WyQMXnFVUXoAR4jvypnTBUwmgU1eUqHZP9b1XFmrAraQQp4A5rrbsftV1gAEmRfrjXKfhjcJS",
  "key7": "4fhwPZJDvc2yVmuh1jnNSPS4QDLpH5v7FVBwMxXdYmJrqLzGEW52b2Z7GrjKXeAv31KMgdASQVQvPk96s5fVBmPr",
  "key8": "Rs4FUhfcZxDn8GpDwvWZqB8ohANzcSG839b6i2PdCs2N5NXeLFKrgYVbkUwsJe2wAHcuhRmBV59gsE2zXg5quwX",
  "key9": "3MTijiTCtGJTBYUA8KA7n9P7fumE68QkqRb9tTsx5KbFfAr3AqRTTj9pB1t5FgMSpwR7ymEgr5J7MvXsWNmmS3yJ",
  "key10": "4waMgujNzLXzUeUeba11kaeTnk2kBo2S2hZRCQvnNesS1JPiwvUNZztzn2adRMY52BxLUp2ALyUnZ8Sp2HTNaa1H",
  "key11": "5fd8FffkZwwngTDBvrwGdMLSJuczJxuwdBWWDota7qUfHMJqdVpSWhFPuaPqNmUZSSsbHMDw8bzi22JEm7cWR18i",
  "key12": "2J64d22yyLDwTPMLU4yznTuudHwGuwJQU9S4jRuwsjEMBnZeCKdHryNUJrqtkv5rpVWe73XBxX7CracofNT7MYK1",
  "key13": "3YFtEHQto7yfsqBWZ6Try5AQDoVUjZSeq5Wdk8Ti6E6GqVBFkQ7wVwSQqbpvXNzW3d5uFpYAdb2zDyJQpdUaDAKV",
  "key14": "4BaptkZub5Ym7EmCeScw4NuyrUzJTtak9fZP6iSTeCBV4GVy82ccNbJPqM37DnpKK8kdeLnojAdAeKkZkRtPgiSk",
  "key15": "5nJ3W1CrjCdLw3hQaYpntVST8Z8czD3jwU5iuexv9H8joqKnnK3QbQiCVrLFLAkxtSd1pzYNc9oTaQcnWC7JMPPC",
  "key16": "36mbEYT2YEjR3pm5Ze4QVkFjb7zcSdGwbHLbL6TcZdBiwfE6mmFTWuTzBkMn44qR5F2ms1eYotx2cBkifV75CUnV",
  "key17": "4433jqehyUcQXRPpugdjejDcvy47X6adhK4Cvcbcj3QoFPzu8GyRWWdzwYeX81pH4F9JHuWcKxR1aHBGC12UH71M",
  "key18": "42HUKrBAizhHBSDYeSB8WD2GSgsPhie3g7e4C3dqWQHp5yGBNnA6fR3W42gwfkeBgxUZUNTgur93wrnRJybSdVWv",
  "key19": "62KZZNw5gwCxfFvWyyAfpCx46rptigvCPYa9vQbas7SVHofwo7NsH5XCv4JFdCN1pUuxY11XwFaXEKfFnryUVBxQ",
  "key20": "4U5mSeKq2Q8V86d34jwFaYJ95AntMJhjjsXuaFx9mvj3TBzvsUgDggnq1gKTJGdBvniQtyh5XJjWUtLpNUizaTWV",
  "key21": "2SGTK7p73N5xtzaZefjyTAZCj7ykn7kazT5BgZXWGu2o382R6KuBmV7VZouhr1okynuVRqofviUBTRwcHoP2xx8R",
  "key22": "5wzmtBKB2xUis56Vojkr9GeYhU9YcC7S9aEWQHbj7gi2HUM4B6yyYVGbSm8uAdsfdEK2dyrv5PtLnFKR3BNthXhL",
  "key23": "3otmLwh9oYoAiWXCPsvjJpXvQXUGiADrThTt9VVqw8of3PejvMxYtyxAss6MRHGrxxLckstuPH7Aqg4WZtv8DQU4",
  "key24": "3VDXcYeEnmSq6VdPyuAoJ2i8YHNEbJmE7AUo5jt1x8n7Cx8kL9GSDN93GwbaLh3cPvD9fpqjK4rNAD4FH6yxBoMm",
  "key25": "3s9dApF6BdWu7kBHkhaiA667QLLDJZawYfcddFS4D4TUG5Cjan4pmQaU6ZkxGU1iEWCpzBL4URTA56doXX6VPG8r",
  "key26": "4Yx7kX3V2vGjbZTwZunu4aUE64K992YPgRV4amsGJBSMPv9YfKzyf2veRRVT6FWCh4nbDN96EkYLaZjcCKMzeh28",
  "key27": "49frdpwLYqf1NKHQ4bNc7dbLDQnaJoftWM64YtXKjh4Ao24Dz1XfyL2f854U7HExnKZaiT7hZJg3JhGtnbsuoCNG"
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
