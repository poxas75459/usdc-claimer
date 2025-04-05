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
    "opEBcs1vBU7ZxETvLVEdrLrorXrwK7y2YHV8j2t1p6hwbK9SmpdxG86JhcWz48HAtBAZAGca7hynFvUv3vSkqu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f9JmgGnUtyXQQcxy4993gXqV3q3eqyESXdVcWsV6itYuyneA8AEC2zkwcyLcybsgnqXkMJpYtnd1Qfzn59vhQ4h",
  "key1": "4ugG6JnLTw3yQKbLTR2S43KC776NDC7712KzSQoDAs7zm8L9HArAgW6WGm7DWDmknXofHeVcXCn8v8dZcgFyZDqd",
  "key2": "4TG9U9iYuWibJjnuua7qEBCzUtbtg4HdyPgS9YmSkVJV4PotdP1ME4SjMzgA3ZVeaBArtmeE8FtMkSdUqfcakCuR",
  "key3": "2SJouwzYj55noHr5UzHEUMXK5dH9eLRQNpunmcog1GatfBKu3X3khWxuBYPD8AN2aV4jernFGRkinxoPAgoyS1dx",
  "key4": "PkqAWYxtqaFXVcgNq99wZbig5XShzcJMJhAdB24U21crE6BtZecNQ9b2eUFWDakYRTWGnTmgqPhkmKxg3saLME6",
  "key5": "5FbRLD4DqM5wg2pKMkeeUyApfSj5e1zop3QFYDjsctsfUiK2sBErCCCRWaVenZkFLAGrmbthVhpnjGxJ9s4AmX8b",
  "key6": "zkxzX3GkeohHhNVE9jBicZcJHrFvAv96ELdmSmAGoFCddGJLjBuSnDNE6jGggBuRyUnzKhfDHyfWHzWAwH9yDbJ",
  "key7": "9E5faBLUSWtEFNAYivTYaiPeUys6pcVqwbFzehWasw6rZhYR8pYDvqkhtTwr5mxuEWE6cfwiz744c7yJ5zvRBFY",
  "key8": "tjBdDBCTcipTVcBkvhChajYccnxc5QagyVtNDDR2phjxbKLzhn8MHeHLm23pqdwPYUwqkZbj93nCnXvMGaxpXMy",
  "key9": "hM2mesjkXSwYkPG7Hkd6Mjp7cE9VwBHeRyQGsKDXzsUhEn6immV9gtMyvn1yfe9Mn98iCxRscBoWXfaQUECia2z",
  "key10": "21kk7P34ttAjaTrfaCdSZ8UfxPY47PjEwaHYB2q8PBL16xZ5F6wutR9aT7h1zSguW7Ri4ccYu8ofZ1r59Np7d9jd",
  "key11": "5ncmiWWZ5pEqnxrPonVLz2WSkW4ghpmPbn7dxgurq6sYdkcmH8wCvwD8dnwCkrLGMFtX9d3HbrgEioX8ovMqAMGk",
  "key12": "5upv4m7G6bQQmBxFBzNRT7N7iStaVTVQxR9NxCckNKZzxsH2UijZ5Ln8zwLQvjfv5DGvhNNQCjsnGgND5rFEK7jb",
  "key13": "5mMjRikNW6gPUoa9ujG8azcdR3SZ1poHSV3Sn8QuaFFegn1osYsneQzFJD5Pt3gzDnwMfr7WHYrnWc1smGorGzCh",
  "key14": "2yjRPjbnSAQiw6snc1TghASeGJZPTv8oaCkJ2UD1pwetuBZpuzRBeTBpfjgDL6DUuYeaBYtpVXYUkWCy36WN8awK",
  "key15": "3CfSimUwApXd3Tci8NzUNaHHesGk53JJ9HgxkLUBsLEMeydALCg8WQxuJE2SpZHn6FFfS8M4Nbgv2fpMxwNW2jeX",
  "key16": "294pyzdvDNcCmqRqFWvJR7DwiQNXXiWnagk3gFZz7i8fbmnT8x6GgqAspxihWF1LP39Y6byHKPNQ1aB8KB6dKNTo",
  "key17": "2zwMdgeXVZDXgudzxud2GyPCsyU4tSmgrsUarW12DiRvTi5VRxz5HVvkC6sM4QKv27uMNpBRo9425TgKJVxX6uWq",
  "key18": "2bBNwHjeRrSQj8RJqpQCM2FHxwy4E6vGnZXEZP4JsNpKxtFy5EcRx1xDMq9ruF7Cd8XANSTbjF6jrXA13N1V3Gcw",
  "key19": "5K1WbNuoAgEvH8c61sVfnP4i5iAfEd75KUk3zScKJ8fJAzT6WvbRYkHLXnCxiDekLADTRxWKLNAyA8M2hPeCAALA",
  "key20": "3HdsEEqCd9U4Xm6v1DTUy9kqxXKhxJ2vqaNKbsUKnLymNRjKbCCAFt3pSBTxpBB6XF5sEcuUmGVhwPRrEj57ecLW",
  "key21": "Qenr2Ac36s4FGPohzsi1pPyaCmBuuXyYtYS5CKvBDpU7SaWTByYVSDiSPK8sV2wHyqZhxuBf6ufNjoMXRhAp7mt",
  "key22": "2njBiRjtPZuiaUXG5cNymnJrEmBRXmNXsnVoRLUuPeroYvikv21WM8Uv64ZJWXQnkCPMdChKRvo4tgHhGwXmfeNx",
  "key23": "65nMYf1f2ARUdcktjGHh4aNmYsJHh82z4CxGCVosVm3UN1Du27o4nM35FN2hD7FMAppkBaNVcJA2jMkDSMC5HGci",
  "key24": "3QoYRPRr7oR2KK3qdg3CrfCrtVEVkrRzctDv68mn9YoimCP1DsCBfjd7qXSg5cmGj2utNuKZqrSsTCx9Ms1KqiPL",
  "key25": "2kWZdTAjHFzWtEEQGmbvyvJ86Xo2SsWCJRMv76jAq2QDqoYMjnZNJj2X3UcU3fgYM4gZ6B5qujwRS8LHZFGzNfZw",
  "key26": "3KqALiuxSLW9pAN8K1RNg6GQL9LZbepvcssg1G4SN7GH3FSJWTH87UdiTwAb2jFE2zzZRwZXakZDu7tC8TyPNbRg",
  "key27": "4RtQVDQUiadWVPPk7Su92oPpDu16wtHXGvPkJASmEXuS5EJXu6MmTWdntQUvAwKG6VTumDxMhzzKfLysmP2RjuiB",
  "key28": "2vNK1gHLxUwqktU57fqfDCWYUia9qqgSLAMa2dPmhCmUBXZCG9sXPaavrejV6KNzjXjQrh9n6KvzB3Nm4ePLjS2d",
  "key29": "5XQacxfZfcr5fNoCNkZ7QFRzbGCxBk3PMsZ8yXe4qftQsYZJwep6dEkAVjyjGTZsZgVij2JbcvaCeHX3DJEvFUvB",
  "key30": "x3vNtk2tNWaFUgzhMtHGzP5Yhy9yHYiUc9Dzxy737MkQRYcQFbUKLmcsVtxEw9SEQBEpLE7nfBtw7SufZn8y6EC",
  "key31": "5oBKSzrRpajuso3YgRTjpaWNt5cim25t3qV6qBNummFEiCFmjK9zrznGABFTPRPbNcdU5NB2b2w5H6hpYrEVioBo",
  "key32": "3dED6P6YF4oUuH69wbNhkoA8LiDgaV388CVtG8RUKFK1Br9UCjKeRXdkgv4JUVQL4ojpThTquodKNxe7yaNase3W",
  "key33": "2pzShMo9VXSNDRxvizvp2UQzL4ERGDxrAArbdevaeaYmYS4NFYc75LuDYygonPRoVVPaNPpkcffp5DBpYfMpd9Jd",
  "key34": "4qPQyq8GsTmHh8qmQQYuQqbyhskpviHNWurSk9URVuiUzJwBk6sgTnN7f7iPw318HgQY5yFwFLyyPbsjkqXuJetu",
  "key35": "4zqpjqDiUdK5jx7fZuFpfEfZSzFdL44fnKA7BV7XtDHnJY6mhwN1HPDctCnNEYgeR8SSLB8egU48LQiVFPfJtX2L",
  "key36": "2z1AHyRobJ9NiWSbNw2VDy591989oukrd3pfsDXWzxVgCCfreis6aPZ54BSALjtsWvb8GoLsmpJhiJkLrQA8VvyA",
  "key37": "AxFfxZNdjjxyUTqdve7oKCU5dHS5TovDEoi1CGYGwYP4CKX3xF4V6fu6agN43v6sYgQGEKdb3bk5H7gFWR1TjaU",
  "key38": "5BBv3AAVStsgM6mMqx8khpijyvhKYMhnGQdoknAA7GpA4LrmeBYTHsrvAs3xZMjUVGR2V8Pp97ugEmhRAZJrjFbu"
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
