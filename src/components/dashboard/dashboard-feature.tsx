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
    "2y1g1ysz8nPyBvJHpsChDLGAWLhsSzDi2rSJdC51pSAzKzdGPu6hVuEfzzt2dzAuNCSCtBLKp1NQW3V6UojEtv3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vdg8HwHnEvtVckhLpdiNCsVQwiqFs6xjmkEiLjEqbfGYV3CbvCaE53eGMbRAzbEHCoabx2HvvHigPVfevZW4hmZ",
  "key1": "61R4mjJFhaMLL4gUDH6YhYjy1gUuvFeMdjY2BBbkACmRYJZ28HfE3PAEy8q39AJgAYzP3XB6Az9aV5ffDnFr2K6G",
  "key2": "31g1qEmY4W4QKucruEnX8NUh3cWtbympJyjrwt7SUm5crkKvsSxJBHahsw9LotXaruBL5vNc5GVWXdaDB1EY1fwX",
  "key3": "2aGbpHvxBQhZsWiCQzRSpXaGsFYMzrgYAv4o91AiknRuaHkdKf6HaAN2EwiDMuunE7aHc5s5BEqa4iCLSUZz1Tz5",
  "key4": "4g6LvqDKsaybYYzjXHsDSaarX9mdVvv17JjWbsGrE6BcroF3kJGeHXHEuJ5a5w6YTw1gVPyVzHZndWu9B53Fbzhc",
  "key5": "2Z2Po4KaSLUYhb8FXDBWW2Eq1X4HhrQZYBFaeQrJouakng4orKveXd1Epu19j6EFky4ZP1TepbxpwgKEiJjKBm5G",
  "key6": "5BRgMX53WPg5fdemRAH34aovMEnCaMBnQB5GCYJDnBQZPBeBVRQkPhzLEeyNTDbxwgp7jt8StrMej18Veq8o4TmW",
  "key7": "4CpVtSNAPUDnEWaUgFcesBPbzdVm8FGQdFDiiyWRfJgc9WceF37XjJb5vtZa1U4Gqie3P1CcGid8mf3qSrkFZFaL",
  "key8": "74P4u8Bx3HTsVmCG6tbjABNKX9w685cRQwCozpeZJw98JogANC2nt1eny7JjQCpbJbK45R2nuRKd2QgAWzr4UCY",
  "key9": "5ZdCAR8n9HzY7PSbHTc8bJT7Tn88UerS6GCn1BHeTtw9mZ3n4S9wQhBvnwkCoN8UHmfkBFDTSLvqwnZUoAPsJ4Qf",
  "key10": "23f6gcNsMSPr5BmGS9iewzYVGztdSJfFi4wLGCdPEmnHxMzYDdNUXRDPCVWPwdRKi8gyb1xptK4zaJQSyWM3yDJS",
  "key11": "8fJUMxaUCo3Gcq2cw87pyvmN71D3PixEXixuQiKq56PtCMXRFM3hfxmw4kgwrnwRpmU87g9ecETXddRGih2xukG",
  "key12": "3hgmUZG6AAiUgrFJG1diR7yV1jeUV7iNzS5Pf6SBALwHUSUHQmWJYPnbDGeKc5yh3CV6Ao9TAYSFCVbRAaH6Jzzf",
  "key13": "2cAtQgjgPt2zJGeUHX5V3zvQXpDVM7DjpWiaPRmtrDBjuLM8ARat6wfHDvmKrsAnsH9VnmDqXVWssHa3Pjgqm4jD",
  "key14": "WgndiUnPjieMLk7PbnZFzxNiQavtqErjfWzcDi58DHGDViA7PagnjkjKGmNEmSs6f15zbt4M5TwvNtfDZrqPSJ7",
  "key15": "3X4aWi5oxwVjHq72aw6SKx2JkJtX5UTeVCLjssAXhzQopTNWBEBivM9mr9mXgpUjWRKw8MgBA5ytpdEoAAbmMaL7",
  "key16": "4ugdiTeY5B16n8NBKJ18ZPrAbM7e5NwxHKxWKruLWCpMyynzeXMrZM7QgPVsf22Wp9MvEDDj6pNr94XMzkmh9Zut",
  "key17": "4GZeS2Je5dUzMA3AmQ8334NM52X99J7DCnjwiJ9CpeMiwL2hAWDcFh4cV2eJ2oHhjGNTp5Yp9tofPSdGsJmhhLEQ",
  "key18": "3zyYHpYTB9Wno4DH2QPSpYZ3zA77A5YxszTqZ6W5ekXcZ5xrtPHSa6Jjj2M4Nt2Bjoq3PnsDNteYEiVGqmGbPLVm",
  "key19": "FVQBrRJoA5QRpmFnBwty5pcBSGwMyD4u1a29PLbGhy6eCt2Qppkcyh3kMdLk3pQKu2KT2pFFEdHyT1JQGb84d2Q",
  "key20": "4ETUA1CeecRqzjAvwRJoHd8ixUujizoun4JFREXxLLWBRzoUhULvd5nAXFzWu1ay3qnp36TzkHSjdXndyyCUARHh",
  "key21": "4ucwB81LX7m73whdfpEF3YF9fHpdBGYrsGsvjUwewzy35fNwb9QxJ8RcHjjL7VjympaxQmpoqEoqXYyFbPqaX6Yy",
  "key22": "2rr3yQYoRobNTyDVL6JVQXs6bJZEwxrmjM4Ss5B2u7P4LBhRdRTJHdw7CyufbHqvKVC9onabUXtBCeRK8kXiwzUQ",
  "key23": "3y2nnR3dyw7aTrrQMbU4JRJfT8MnyWP1JyCS8h9EeFNRg25UMz2QvTp4TRnk8ya17ywZYShFbbSiYys96BdohMum",
  "key24": "3HZSj1nYA2CjVqzJk5YsNUQYH8ufU3H2ztrWW4T7wSzcAs7R1uVh1TA7TPntk3kXZNAqRYf7zjzXSZgYiFFeJpus",
  "key25": "3trs9uuiXMcAvgx1mo8aKbKabuDyRV17E4d7D3x6Ct7bAwp2X5uCSj2G4Dq8y2GCZRZHaQM227Acn762SR8s4FVg",
  "key26": "5J3kPF7kdCzi11SPHTgYJ8Ckw51e7LuV3tJMmC7HGQnkusc5DDQhBfo2mzR6a6wKW8QHHFPFZf2bEgNrEAiJHrUf",
  "key27": "Kt7N86wLXFLb5MJdkdywbCpmP2FXvb2vx8ZNN8pBPxrXPtt6qAea8stgJWHPzmkShBe1cXWhdWEsojWrrvTnXJZ",
  "key28": "4CZybqvYtTjY7WEPKiUFdxHPHotvT77vvQpryg7xVf8oYQvLZayrCoExvZ63xMm7uTDeV21Wmm9uXRzBUG28uC9Z",
  "key29": "35fBJfNNWtMmqyW837gmbfTByEdpvGwMTwkua9ECwgaxbc1k1mrj8bdxHsn9fSK2biDcKKBLHBNFXfxpcdB2hPzX",
  "key30": "SaMWgmzHWXu43Z4pDhLJUfaWXjJHqcEyfnaPycTsNyTFiPrKAhshWX5ZvymQLh8km9FPmrYJrDfAZwhRrD3mMpn",
  "key31": "3m8pmUCbMXqe8zWXATycQKVmyJCG8dUpyigFKMozWXNpGvbpumLVjqpokPr8hwpbCnRzWKsbFNXShYsNstLku2Xe"
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
