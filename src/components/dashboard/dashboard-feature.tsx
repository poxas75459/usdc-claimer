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
    "y3HE5kqeUAJRbeezE3cRqbY2LyoRNS2bKE3XCD4kwPgbWUdaL5t7Hc4GpjrSe3Jnbwc2XhXvcu8JQ3wjCkSei8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yyn5n3oYzLoFYhGdqDZwJ7rWAHSDLNKewS1noh4nmbcS1dFBgoWJnvBZHgP4mNq5kjZgN1wWfEAEwhC5uhXBbu1",
  "key1": "5CRSpqSFKtJs1m9T6EhN1i4GSBmJfDbFugyT1khNtArpfpXRWcMrRZaX7xxkDKV8VT6VikXM8jwEzKJjsawrwsC",
  "key2": "2urcRKyyiYTQcWTgbLGgtEiX1XN8Dm5uA6XtZvfoNhxQ7nBMUpjgJGMcv2Xz6kPrpb3TscCkXi1zvxdRxJDDFD1F",
  "key3": "3f2jGrsVyKa7cDFKT1zyQGQ5ALd3LuJDpgfffpHaeVNqVTy15nu8a13xFsNCVb5XcdPuwk1SqjqEtNMQJHMpkPqB",
  "key4": "3di5Cj488R6iKrFqs5AhhFeqjhvFVGRzkFNRfamrX1tFywTS7VgyAd4srcb5FV7DctzXVdNwHu1gP34Y7jBrtUNq",
  "key5": "ovRFCudXaxoBebQ9hfrVemxnv8SFxz6uP4KyWnP1nhLT3ngrY82MnCKb37f4HKweKCGjkU9Jcc2U5Sfjanpe8K9",
  "key6": "3L8XQRoVkt4MwUp6ezLDqiesdPM5v5GqearbtvpehBcAFeNKu9KAxwQDn1V7hRtbYobPvGQ7HRdAh24QdVJjuJE3",
  "key7": "X7FoxS2CL5nD1Ns5QoXC1pBcew27WJ5E3rjV9Ksm8xnVDJR4KM4XrPE3nxDoxk4tL5BmyThKNjETFPGntHCzhEJ",
  "key8": "2NW4x38E1nUYTn7o2judpd5pHeNp2F94mqTaRMMxfF6rvsj5cMFUVze1cYJ6Sk8JVQz2fp5DM6QUutdE56Ff179M",
  "key9": "2pNHtvtuu2DSiREmXjJEtiW3LyoJqQxzaY4qqgX25BixfNADeFUewwWqxCmF6ihdWGxfVqzoXLoCjuU9hoDiUbL5",
  "key10": "x2s8eJfpZ8dJnrRBhszTD8fR5CdWH3uHh8PVdyeowwf2GTY332opAZfL8b9aYw4swcbqvmyM4TBVcTisditCmWj",
  "key11": "4vvE5tCvxgpTX9EZxwdHdfyTpD1rJ2D3uow3gifGkfHh9ygoBDHZsKUCx9eUgX6cCB8dMtvAvmJVnvdStESHTX7s",
  "key12": "ik7WVZEiKPrS8F1vGK48x9xVPTWqRc5oCPV37guV863JZ6Q1vESVAMwuN6yAjy36NyVJ5XeA9989bSh4J5SqHBE",
  "key13": "4ZG6zCTekDSXSdPSmJUS1ZhiTi2YCwi3mZwPz8wkZm4fZ6r7hGBCCNPeqitpGW1JQRLozyQm2XL5n6VEFMJgmVB9",
  "key14": "5FPtwiaVy48pLhZYqNXBc9XRngoTUxxgrZGF7mGRGyn7QuWtzT9eLyiUbiuTV2GMXqAigpiGZVx3fdJhtRjDBcbh",
  "key15": "hWnfsfrGo9JHtrTuJHBDAJM7M29J8Dzj2NiAHFT879Vvn6qdL9i2mkduQ6rGLy5bd3Z6Jn7jxqFrKoan6gi4EG4",
  "key16": "4f3QzJLTgUV69XJRhU2e6MXNstudZztGmvFGSAY44QUTjob7bHWfiCJnFSEMrzTkkE8s3qynhuCkQyHjyPa31evU",
  "key17": "3VYyLA6TcqidLT8Ar7rhcksbZREpJPW7cNU7ocWuLUEp5C2FQVr2cLYEMxVXaHxMahFWHLMxwiG96K5zaJp7V1ig",
  "key18": "3ojw6v2drZoatAWfP25cokiYGvgcYR2Y4odrsWhMYuU2TZgvtuwn3Cc6HRFT4xBuUqE8xiMTy296F2JehHedcqtg",
  "key19": "5rEC2q9KFUt2H9MFnd9htDK6RVjTte49tpRGcnwxcmXEank7kqU85HJtZcCVYDMfxuukax2iRV671e11Y86PJq78",
  "key20": "5vS98gw6T9xkqmFRpnxBrphxZJNn27QK82fDdLy8YznGkcpvkr5h62R8GvezNujGzbGL1nLdq48yLV7XNCphmHV3",
  "key21": "yMbVtyuWWme3RTJtxsyA7M63S9Te6dTvehA5yuvkCpaqojJh2D3W1ZCwC6Ta3fmr5Cgi1huojZpXS2X4STnSuX8",
  "key22": "2E8d51pzzScKq1sia3uA8H16dzmfmJFFXcsKKmRvkGZbWHpoU9WNdBQtQnwyJDhoYRktknvZrM47XZSymjBj9ssb",
  "key23": "2nNTv86veZqHCaxqRR7Tq35MF7qyhcfHXkgUJniia8oRcqykA6YBPes3MgmWaMJnR3J98ehcHDcALVR6GWTMYdKL",
  "key24": "LpbW79uYehxPWtUW4pKyxqbQoCStCoCzTCShgknUW7wz7kKhszZyXh8b7xKCFfzS9gcsx3krQmyCzxJcvZ14anG",
  "key25": "2z1J27MBREJ4zRdidf4CmweufYqUZ3AjCVbQt5HwL9sM3vp8D6SXAjKXD6FvLq1wvw96ZQEDxqWevjZZwouU1pk5",
  "key26": "4oLSMRDzN7m8hPTQotcSj2LEUjJjZMeVWCx5U9cv12Ps6fkyCdu6foagTvtvjTxxrxXDQap89yRxPd5aVaz458Kk",
  "key27": "5yBy9MfMeBPTHmeNQf42BLf7wbBFgqb8V8jzfeuBWC1EzJXbeCwz1psLwucEthFGRzuRD1gzvk3TKPoYkUYUuhMp",
  "key28": "3xgXjicBHYuTxt3ECmRiwYrbkV1CVSA98qEN6HtS6SmW6aRZSipxaPu5ui4quDz2Jf7aiemQGbGnTFGepXXF6CZq",
  "key29": "38BKbHGDzjeQaMeXS9Ebij8ik2d7U2iNRuBDAeW36XbpBtAEcjvM7VhgSxf9jWKw1Sc6F1mBQMCSgdvgrvdZFSUZ",
  "key30": "3EEQYSycHNHJHyfB6b58kvRZKi5CcNYrhAwiYiPir1nvHjtBAnEpzQbEKZKuzJ3eqiv3VqMt9283RbAKc4P1aUGp",
  "key31": "5GVVvwf2uLKYP4Fprjne8wvehn9ZjaPVHyiqhey1PgorAwAxZ4ku6urPZZ18jrDJXzWhM6Gx56Lyur5b2oKwjP4Q",
  "key32": "2GwHBs6JCnwbwvawzaozHgVB1XDuFH7KvSWaGE2k7Dgdj7FeDnMeXrfHXqM3u4kHwqh3PSZvtPTjSpWNrwRFzErt",
  "key33": "4qNfEv5dnsM91kKuhFU1JkbKwApX9fy6idjo9dgg6LmH5qL8eoWt5qEqFoyPhgarhJf8ZJrBWPVnYE3uooQSUYuL",
  "key34": "5bzQVEPgBcd4opxZmdMVChUSbXDtm5JrTZyjQPEfkWFTDwJLyAcVbuYKWQXoZpnXY64F7w38BNrHWWJHHZYHxvSw",
  "key35": "93c5g3jwx9RqfeVu7MCM3bxauo5bgKupBax9TabDNd7HGCs88Vi4B9NS2wJtAuxSKoq7V9A7TpxSKqck2ZxdzbW",
  "key36": "4vjVPpGSJF6QMDRj4wLGUbrq4mqUWAxNCmyT4Y2MUecsX5bz4SoMo2EEdLYDZhGK4LcRKYgDuTNKJEmiPpumfUjb"
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
