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
    "3xiECiC29Y56vvEHFWVRkxgbdzsMRoXrzcSP6dMVUH8PDGyKv64pbTLfHKGc7BTRWu7bsFmAv7XRyGi8yHQZd2oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNmv5yGnMxmFjJA5cfDVRMmWLugPmEKVZEFYcbMqgpQjcASHabKyqzShoNsLRCQzYxdDxNkRfVyr6SVCSuf6Fj8",
  "key1": "676YCZUq3Gt2NtLuTg1FF2fbkb1TAEpRYccpmeiQB2CHAFT7XYELE8pSjxRaFJHL7r1cCZ9tNMyGtmYtMRNb57Th",
  "key2": "4JYmKZiwDngN7HV1WpCMgCPm9YN9JZ5u8ggtq6eZTaux2QvGteSdNRHeuzGegRvtqk9YsLBv9vJNBgWQwv6cSqqd",
  "key3": "iMHcPfiUfgVMdiDRJaWqPXuDmoDZZBZLYE1Y237PCYLHgBJSQWDqrgFvotS1dWaRCCatttNZVJhATzxWMn8yxjx",
  "key4": "54qjpn5Fiq5T5j5amugxDWsGPt7wnKdNmwPvBemhNqj64MeAguaAkHNcbuQC69DVpF5hwqg65Jw8mTbdCUzjHxwT",
  "key5": "4YeXXsKBEZSTinHZDCAhywJNEN3G7mh7rvrs6Z52LjxJtdNwsRbmT8UVzkpM627N23PYXfadxDrE7ni6iVY3byk3",
  "key6": "5GwdvaNKKBw1UFZ9rvGCzCshapoM72f2cFs8y6wTBZeGLUvaWjPT38rDtQsG76Z77kLFa7cDjdmDXuTPBouDddgW",
  "key7": "4tsr7c1AdMPnR4C3SpJB8oPmvE8XrAD1DWqbijigq6zpeJg6NA6YS16rgT1W34BMtFK8MizD2v8L8DWcRN2MNk9X",
  "key8": "5VLGmmYXTaLTPo3pNWNR9kGS19ANqU3y1rzJttMXYJdQPdFY91vVgAQX2Dn1xQ9oD43T7dLhZRbaHzpZnMcKusmP",
  "key9": "CdjaL9wUgpPLSMBG8cGA9g23fS1v1gLSbWAPEjj2hnuJzsgCNYqgGbY3EZqcqk96T45FFoR4zRszofGtWKLLE4W",
  "key10": "2WnQTQcgYGmrbrNx65uWg5LT8Zmb4K7YBmnDqK691TUxTQCBgzrMsQEe1mqHqyQqR8wfdhKB3iTmZzyaX9ksffJC",
  "key11": "1rhvJkmNEFRZCa2WNiQF4B4QxmAhzrrqpnHpo7NYFyj3qUg863hNUhxhVnsKyg9iM6FBNLjCLx2iTQczjE76Adj",
  "key12": "8hx4pJP3LcZw8xJvEx3xS92P8chTa2cWnf8zYwoYaCc1rHrpBiFbod1bhhnvjGvcoJA1oV2JS36uWUaYRpHBMyN",
  "key13": "YR8UA9ugSx5Tc9TWvUpNRudrxfwAMktWFNwh8TXp3YGFxiyVydDG9mS8BELFqTxmmoLCsUwrAwekspaL3iJFKAd",
  "key14": "4dQTgzcJkNbfS2uMDExpKfc45iXJAEBpzCU3vM6xdsji8U3XGmCkNmWtYTcLA5LsDkp68TekEsY8nZ5ZVvBiZmpq",
  "key15": "2vtG9GCv8YxCdcVCqoTmeu743sCk3LWrtHmwEsQtG7g3WVyXWsRoxVZG6u1C1J3NGT4R5EUqc9Q9Y3JpYPPoebJW",
  "key16": "fARN2nBJijCNFFjPo22vgyLmjU8PDSAWmSSdXDuVXeXXM6yADPjFECVdqbMqWXsLW2Ynh1YxYvK3VpNWCGd5PjN",
  "key17": "2KRjk8FtRqjisGa5GtFU7tCeudztVM2THcUfcJRt6oyddVJLQRQdnw27WJLEccjE8ovBKmetUzhrPEDvFDRtSFqb",
  "key18": "5WerG2LzXRjifPkcwaNn9aPW63PsifctkKf7Bw8ussY9sBkGeo5Y9bx7wRcHBSx3D7f91hJ2BsB5yR6VW7MNdErz",
  "key19": "5gHEWGGZAjaPw8EZmDNTy43s95mTHkgEoiqh8aFh4ifVbpf4BFm62EWHD6io1yhoeUMVVQSYX84zVSYRohNYhRoy",
  "key20": "2UvJSg8iLyfyYpTdayuKi7CozH8uhxyPhAdfM8M1CWcZNfKCi2H2BbvvVsFaJ8NMCxfvZ2oti1WgZevkBhnWVx9",
  "key21": "7fB3oKEtFqCAmUuz42Qtp2fBVrWGiYkTSvfdgUzi84BLoQWx1KPhU8F7rX2AC4SKGRY8RLrzG3LSdfkN2DqN9rz",
  "key22": "3U6vppEdru11WcSEqNETVsftKXS5YCek3DtvY8NbcqHFk5qSh6ZkRyw9kB5TgM5DY3RdThA2vipginY9r5uMkSdL",
  "key23": "3ycVfanZyDTFVHxPEHc5q8a3E245EJxQP6bGSyGg8vSCaCEQhvcSvzTub9mkge1FgzwK6NEhHYxk1HKBAJ7ENWKd",
  "key24": "3CCP6R98fUikpFbgX19WkgJGNRKwRSnimkQhuAXNwJEQRTGd2qVw9pKow1KVW2mGro9VmPoJxhnPSUESGWxBePNf",
  "key25": "3e5xgSaG7rpwmsuDeGF7iqwQxV9Evi3qEc6xwApwzj5EeoPDaTysrn1cnbuPzGXDKub7zbYyfz6K5Eo7TkXVP9Rs",
  "key26": "2y3X6PCz9dUXu6bgFEqK6cFas4BrcgvypuZnegreacB6qCiqrbMt3tWP7B1bmQdsbZmzRw6JJatcoAZkD4MrLayU",
  "key27": "2FTo3MyqkWCJNStvabZBrsntQL3Dyxrjta4vS5JKbNRE5u7xmp5bYidhi4jDsE48qCeAkDoRc36h3taMDVmgkRr5",
  "key28": "3rX19yRXxoK9w924EFV3kYfdsohMGvyGthk1NiRKhuUyUMDRyHyHztxWGSosWff7ifcnA89bC3JssK4tnZT9tZAA",
  "key29": "56mxgd4kRRzoKLHk971xGyjW9eZsFVUVghTJciHMjzu8X2APrGDXPnkhppb1FehRVhwsXiS6DWntw3Vx3qdaHts4",
  "key30": "4M6Jqv2V1UH9fKt3saWs7a4vaULzjyKFmyNWc6rEPrgBjkDmJEXKViJt18BVYVSm9TQTve3Lf9BDU2CNKuLwnFqA",
  "key31": "3veD5ghigtQzzR9oUZ3uUw7thvGy1Q9NrTGnDQDY7XjHD9V1a45oWQBZccgNu6HScAvfY4dLz2NJdbix3zydsYWW",
  "key32": "4mzGz8cznAE91EFBJvbVC9Y5nUbeESnCb2W5L6mn529mKjfZoqwAUSMKhVs8W8Z69m2PTZxDdFThmieJR3QxRGGC"
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
