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
    "gL5K8wN67p7jqcTTbc8QKVi8MRQpdfQR3wAXVynCD8TGQ6tdnxW1SRps3VpJP6k9XLEyvdqDqPJ3HQihWxiMooq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xeTy4irBimDmCsVJCdCxDCpFM16EXTFGgui9a1CX5jLWy8nrUYhJZG3fdGamnCzmyV8ZEVF1zUKeyMUD4z22avK",
  "key1": "5czXHi7Q43Ym9323Jb2A4G8QDJpPiqv53Jy4tcwgesL2apnxJ7vMuyNmGSjVPvyNRa7WyXZQCyu99yhMKLSRwQX5",
  "key2": "47wBD3eTZTECnYFTE6mB3nGwN5HfPvgT35WiiJnqjUTGgdq3gTmBycfKThtdv9fKf9pSCDoFX3YjMbDXTRr4JaoQ",
  "key3": "5qFEAPm6gZcTbxd2akq9ox6bydG7MDBNSCXUmT4qwuMaff2HKUuz9VmpzUwML7vMayyXtQh8xFQsW2DaYTX7TWC9",
  "key4": "2orDf6WQWbfFmMRCiVy68YX3CjM2rrNvnUBZkG8gAf9g6QPgMy77kRAuLZcviJyjVRdXXhjE871WfzF86amPzjSW",
  "key5": "ybDYAsdHUgkLHnBg9T6ikvKuj7DioTGB5LbnNud5XsMuBGFNp78xM9w97BG5Cw2uHduhjhh4tCmCf9i7GsFB5dE",
  "key6": "RvfkiHr3dj8hF3UTcg1UsazNsMPxD8aASgyCVqBoink2cQ8Q3noXivA7vpmqtaaKPKML8rZBVioT8rJ5Z4PawsN",
  "key7": "pEkTiB9P1RS2YMBvwW9NKfA7YAVVMtYHa3VFbyRbcGnXFsmCYJ8bss7fmoTuLjTupp3zsLoSocN1EXE1tkESJt1",
  "key8": "nM46gEC1hwE2jUhRhVjrUiAwRf6Dag24oiSL9nPm8vSwJYQvm9hipHqyiyo8ztLfGDxVzUqJRNZX4hd3ppqVybb",
  "key9": "3Suh9m5uQWbfWrqcRXCGmAYrLdbMy75YD84rF9swYwwGDLNGJHdZVTKWRgoiiTptT8kD9WBw8Mqda8QPuP9pPKxv",
  "key10": "3RaSCX1VgCz7jhmbx2DfF1WQJZ3SD4HNyAe39Sa9VMgcBXiiEHstHQyTEMYiJeffZpDEPiUrrCYKzJFdyKinJkkM",
  "key11": "JuQmyZEKJyFSCUs7LpoEFDKrX1Wje91SE5cwGXsQyUh3xqttCPQF13rWBtQWYtz24BSD1aCuANbUszneP4yRJEk",
  "key12": "2XrbzaLUJp81Ax38oMwNfnw2doqDoyVimjkS5GnjzamLqHrw3Xnpk8LLC28MbcVeKEJGrJRxxEobNUqzxnxv1HZf",
  "key13": "66fJ5nfvnfhhBMeaZYFT6RgR1b3a6tBJNgpr5SEzMYbv2LfKdu1TmhysPVkQHhxQ8KjJLoJejv3wAkH29DdUXNBB",
  "key14": "4YBAuYv4skR9DbEmtZMNRVM5yGurspUB3WSQ2PQwbepXxua5A78m95ERm3iPkJSFan8PVUiVbSm2mXqG5deqwqQG",
  "key15": "jcf19sPcaahRM9ssLWyjc6kmC8U2Uh2qJHAXCwDAwtDzzbeSmr9ygFCjgwEg8UoozE1q1ngVmS3d2be9uZDL3sY",
  "key16": "5v4YFBwe6LZZ3TPhKwP8fagwFd4jcghJSW1zzirVWUYNQdhb44axYrPsfQmErb41mELKfUNESxPm3QiVuoiQoWuc",
  "key17": "gmiaRZgJDirQ82JC8SN3jrkyKzzpBxT1ntNoqV5Bqcevsvj9VpUmHP6RrN3eRJv4VQyQfcGnw572EhbsxDaNaVz",
  "key18": "3rLRZqGaTnTYsJtsNaM4Cbozfgcg7tDe4c8MAUS2sZ96Rqd3u3QnPmp6HHhtAnGueonzDCNYEY7fEHwXgKAPuoB8",
  "key19": "LQN5XDr6nPWZ4SSHoZVKaqE8abgiH8tDqocghypVbkig6NBeiJBPrvCuF3GWTa9dc66q1ijJKPoP8hUNYRL6Aov",
  "key20": "5vtynggg5A7j4nunNn4nMA4bCvkCkkx1G2TcjBjnMRMTkEdsxfvMJa74NJ9cf3S943ARxHrFG7pKfTXrPzb1SrDw",
  "key21": "5JZtYxWT3JRYF1avQrTgA1DvKs62Xt7wAq2q4pfcneeakkvVisLGvkeMWXcwzLLMfQ4yQQNcDcbbYBeDViHSVDfH",
  "key22": "61QotF1fpj9Z7UGvhPMioaaEMxiwyRqSoL8EhiarMQBr2Jpc6uHverkcd7HUePUbCLut4iFRzYk578zQm7wRFq1V",
  "key23": "685rQ4fDvjpZTX5fBwymUC61pebusqR6oFBvxrM6Wzf1axBen7fVXhtRTsVN5yywAQMPx9ftAW5is8acUf7pEeq",
  "key24": "v7JZQLj2cAjPGw1FgPJtqedvLorjZmrZWPqRDYmXgW2hwmUM6GrwbeVDZh1uEFJHEmt8BaocGcUJed4ECRvJxNw",
  "key25": "3hoEWAsuA8h5xNJVnH8KE9dC3vKkyi3VnyYqAhxThfTKU22k2XRNpUwQRakmNLk3wXUBksCQgGUpkqvrnXFeRQRM",
  "key26": "5aWtYLjU6APBGDTxMZbfzZfCopTf9d1asVL657L9wSxtJtXc2DGuCc1jREa8UxkNrSb47PVMhK4pk7b4ez5Nd69A",
  "key27": "3XCJnN1mqDYsDd82WUMDBUEh4Nogmcx3z7Vp5XXHJHeRKPNJUvi72MZ8MTA4WQADHr4vbPMWpvYk9RCmjg2jmdiR",
  "key28": "5vE2AUekdtFHy6aRpMBRfueCEdFELHaHYTsUB2Raa448gxq1Yr23HSaamSTvrns7xF81xfNh2WoE5QqpwWUBZDCs",
  "key29": "5v1AfX2hUoQCXkZHp6DvU4Ab4GuPg76qibVJHH9ERc48jsGBa3BgnvNAZUkvmEDBHtsQcspmzRSUnFDm5D7dQusU",
  "key30": "2R9jWb33gqyZXbSfURHZHbBxniNCUYqnCZDcu1zBivR91VLPCDMJjrpf3WgHz1soexX8QtBit1m74f4wtFMohnpC"
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
