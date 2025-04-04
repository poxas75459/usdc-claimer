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
    "aswqpABFka9biPf79YDuFbmjLCpqirXhixeecXhxopsP4KYrThMzhpet4S71LWwcaPcWjaE2FVwAFvAsemVmGjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekrnSDVaB2grfhD3SyXszknnmsgkV7QKXitsVgQrLHSGnVFM2u4rszmjYdbCwQzHLDg9FQGHs3XnR47pdpXnGrN",
  "key1": "2pQwr29egj1RXoVNZgpGjUNF7PH5PkqLQ6eUPUD5Jxv61DMpPQ9dLXwG9cfskXAkPYT675Q9LRmBg1VQ3uCfgUCx",
  "key2": "5EGWSD24GuPZZEqhTnAGW9kutqqcZC6QF2MUih8iccMbFGYTdTtrLSnBxnCES3FGSXJhnsqWcdEgWh5TUrneDHA6",
  "key3": "37JMRoVxSfNU854d4VLpriwNDkRKWYxi1ZgAcWzRs2ccLkY61cR4RtknkMUgTzryNVFTfdTf9QGVDRTTbmucafCt",
  "key4": "2sEg7YganiUJNJsqAmXnnW36n4hT7yBZM3TVBzL8r7G7Emk6ebHoYKLkvrhLxYdK9Vt6GPKAYvhi6GN6obwv8oC8",
  "key5": "344RwwoTU9mdJhhsLNXwSWXTwvt5G1ya14K3GyAw1rnSZVmrRLGAXfePXEXpNS7PMXg3hzbTHS1e565Sab2NMGfp",
  "key6": "571EePzbyDjSp5V49sA6uNkTXr8b5ybKCQQzxJ8q8B2t6vSATiE519Q9tJdny1VcscTmYfVFjyWSv32YM5n7NaTN",
  "key7": "2wnLG2DtwakgadBr9Av1Ezk5yxq7g3BfqknQtZNCh8Cq8sYp8SV9kHyYTUipqvYj7A1Hu1TBBhxnT55JpPrYcQwK",
  "key8": "4FAVErg9VEAuZadxczk7Lom51VmSzQdYM7gSv5cNtga7MjxsAwZ86xztrZe3oMUctb73uqx5XH59sbNk3ya67SoR",
  "key9": "5AFNVM73hiDKNyiZPMSJcHiFWWxLxQUTrLktPuTBEPSLfUUQ8ZF8K5ZrjxJeTbFAQTtZQe6hisHYooQUG6xCqGhs",
  "key10": "3qTtnCsDTCyS8j57bwh2gCtz386Tt2JSiUTJSd72PxHTvMsZT3bZV8yZ32uras5eVxfjjP9r5GxqaLi7tW4LkbNF",
  "key11": "58gQehJVq6TkoLgUBuYQeL8RHK9ccmgPA6AhK34hWBHYJSzAm2HDrhhtEHw4YskSxY5PaGQzxrqW4BG6QRKKmeYT",
  "key12": "3CY1fu2194fMNykgUsYBkEPPtV1xhruo87JNtyib8HECcXMCTwz7Pou12q9t8UoowSbEmpf4BzuRE1mFXmZN2ZTs",
  "key13": "2xxnkXPixVt8h68i4hr9Ffg4C1PSL5oDL6MAArRMn2CoFzRCgytB2z1HxAGC2tj8G5MGXxdcKsuK1oaVTkgYF6wN",
  "key14": "2EcMoVioDoarmtgpuL14RcvVY8fsPhEMyfcXpsQauqxpRTWodwhVKC4hXyhjBYAZE7gfUjbht4pfrdSVMV8fGyiL",
  "key15": "3HKUW4xegn6DjHijENN9ZLMXkNoFh2APHLq23GPStrbn1G16yTJVFpDqiQGjkuARttExvo3BmzGezfQN7F5MBiaM",
  "key16": "4cx65qEfZKwc5mjEHyVQxgriL7kMs2YVXd2qGKf7CzE7vLHW73N3u6TT9fpHmxCqVaL7n5WmJKDnU3LZbitRdkpY",
  "key17": "4u1U5jz2ywFdaXr3SNqseteV9JdrzUUgqWQquTj89TTUaaJ1eQY5JtpiKxqStwdvfhBvDaGZq8AfDpHWetTaZcDK",
  "key18": "61PeGL8YBBJ5HB1RcCemvRuXiggZT7Q4yu2uXQS5JBFuixTTu4gkhT6H9VbvV7MvxDSqeG264aiUit6sTAQe6XgV",
  "key19": "4cXNuRiSVDX7jqSRsQtLEE8bSHnsFUBu2Nn3ASaaVBh64JeKRaiEPKcg88JZTDnQYuFmuGWvcM48ya1tkXaqt2KR",
  "key20": "3ZuHnNxLPqJAx3V1L8cJeaWErCVvAtZkyVZkjDTdYK7QAuFGLAcp9qf9aroKhaX6SfuWhd2z5x1cfB366rEux8dX",
  "key21": "SsE3QykNHMtUa3Vbe8hGNfJ26YgbpvAnykUQYJxENyyFGoDq9yFAs3nuP9xfaXBcGxW2twcrxSSwVCter3TUuc6",
  "key22": "3w3MzHEoUDTJNYKrdGtLwSHSi8cc6cQY4zy4GLtzWYSgK24YHGxFgmQqjdpoVqD6gRNVqsfF7p6ydoQq77CfcpQm",
  "key23": "35uYEYfqgYNVsUL5sfTP3schuhoEV66XjVQvKTVwYUMicgBXoGkwVqxy4EXmFcJSAiqvPTn8tjzk28vEiV3Xh2bm",
  "key24": "3uvmnscrsqaHLm8MTMTzTQeK6gn7LLbbg1iA4AMzD4bMQRzjRbvz1NNa25ofZh5y4bKycHxPWmWKwXPevPrPbXVR",
  "key25": "65K9P6kVHek2PnNEoqVj2mYx9ELgfUSvKPXhqxCkMuQmoQSgPTmXF3Bk9f42sNeRQY6t5yoP9rSpK4XwkEmRQ1ow",
  "key26": "5KLeLrfvEtS8rRPgm4iiujn9xsCuLvBxMbXE761f6GaSftFqrCMFPFnYfwWY1SXFimvaiEm7Nau6aSLrnUaw1SvW",
  "key27": "5Vg7ScRTbzjmku4VjdjDtDHY4dfLqUqAYpbWYF8oqoufZ8ciZzsW8d9qUjp5kD9E3Pc1MmL5ooFKTYxWBQEaT8TW",
  "key28": "2cNcjjPnU4VBxo2ZUYFRfKcg7ShommXCDKyTHKz9BbT2w7k3kFmE3tm5jw6scUpwz4XWdgmfWnMoqQxzGLRsHz2X",
  "key29": "Nm1hNbkoJ5GLMVbbnqdsfmkmfoCcSG2nUXtCYDdLJLJigJZqdzsMS2UY6LD1bSNHPfEAQXGEXNQvBKxaTPLsmNd",
  "key30": "3fvadTaaVxeiNiCB3JF3zg6FAVnbRqYYD9B4zzBEiu4ooWznFsHfQvpnh65gobUBR6xqrfH9o1DzQZFCgPaXjGGm",
  "key31": "2iUB1pAYnXHYVsK79wKWqfA23D8vPQmbogp9mW2LNkVxnQVyfpfdLgcr9VppENGaJ4U7C7iTjekeuox4WJo49aej",
  "key32": "46edJGL4eFruU3JvPEWJ6gdByYqhaq3qAmrq4QxZ6vetWGdpaA41wCHU22Kos2QMTPd5UeyM4eEo2KttaqhGqSmM"
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
