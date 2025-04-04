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
    "3Jq662WUjpnp6HiveFeey281gqYnLPwNrXicpcAf4KRcpDoEqSoqHPLx8oHs3JwzBrTuLeg8BXZVnCt23XDRp1GP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1HzUEUC9f6VAJ9oSi7LjYtAbRfzkYyqSrQf99V19Ygmeq5Zhsf7DbwU4i6Gr8D2t94G7kRxkAH4HuKvHwwnJJn",
  "key1": "4jB5eLLcbamYQuzYgCzPYgPhCCodee7oN1V8vbRLHpFJLfD7TKnFTzK8CrzdJ9h9YsPwGcy1qx6JMYsJ6mdQRkLG",
  "key2": "5Z3338XqdHXf4apnw1zmn1toxsP3EW9AcpBYe1VSfEsro4Xpf3Nc57PF27aKeGXMk26f6yAJybvxj7VutKzqf19U",
  "key3": "1nzRF9xhqJbfe9CMu7tqW9xnaKpBtsoqQMvCDvHjsVyqzJFRE7D3KTEk39ea4BASA634W3YtVMKaHv8qLpsGcGR",
  "key4": "5pPZCmqPbLaFYdGxJqDy9tWX8Bztp9PT42j3CubFWnPZpSs5T6QDQX8hQ1EA2WMx1spin7zByJ975SEcwCnVwrWL",
  "key5": "4i9ECGLb8c1kh4kM1bnSTDNVrEXLHRjh89bWDnewiVRZ8eW4G5muV12SbTTiajeB12CUszkyoNSWzRySuPJGe1Yz",
  "key6": "41SxjN2prYMcssjR75ScEGBPFr4RB68LFAAU5gLsd3Dc4iv7XXXT9co8fo1aYphLVAcqc6H34MTN5V7J2sGi2B6G",
  "key7": "Ma6ESry2p6EXiwD4E1MCMsJJtCaiH6iKHXv5ZTDU7g18yiowk5SNXJqcvxvzPCvhoNvMVbA6RhL6DkViDPf42B2",
  "key8": "4gts8Fqr1zHXFYX16TP6vhs77b8V9hZK6U8rYXcbzZQP15d6eEBMeAkBzrXD7Fk9cysL9cecWqAnGTaUPAoKYUuj",
  "key9": "5BJZ1RGQEbhSBZCY9WcXQc48y5um8ozxv8egUMqMYSFPGhsaETkaVQ3q29bpF8SKHBx9vT86S54CZSbBkEGUZhdc",
  "key10": "55YdzfjUYGptVqm9k2dW8w6w6F4Hk4TNkgtFQXcnmD63mz3jBApuKjC6F8CDuuaCxLJwpPjZMFUataKeqfWKFofY",
  "key11": "3uGNznuoMHyGUG6K26vrEoHpnCBEF1SbmZUNQLXuY5gg5pJKqmoXuWycNvSwAd3wCQmwkP4P4S6rhPMbXYuduXKC",
  "key12": "4EZG4FUzLbLnADWBrK3Q7MFpm6nZcKRPzZhHccbvguDLNwbVLdWdyGA2VguEmF9FsRGMuKZu7enfjAt1y385u95k",
  "key13": "3yCPEYFDM678o468RC8go53kmqY3VVmLAX7QvxmqemNf1jJxxDzjA8ot8RxDJLYucWGfRz1adatQ6m48xR7c9ceB",
  "key14": "2LHvYuNaFdGhBcL3g7A5abEE6YYtBRhHX7GdGuwsnv3aVTHXvJv7XCkXdJJZi1VSXAxax1WMHhM73XkTT8GNcmjU",
  "key15": "2Hr8VxhquX2W8EqPfxEgNGHViERfKJgiGkijfX33RcsyHcJB2SDqk6fd1Cu6Zn1TxAaeHQ794nWdwghbeEByPoBM",
  "key16": "4pZQR3Kmt8uACjEam92CX2vdF95UMPM3YLjKMnsfiPKnbUx6kxMSXxaz9NXQ8Re6eNk34P9Vk1G5CwKK7bdiNhoH",
  "key17": "4HK1RLS23J82modTav3x6EX7QgbPWDgA9B9AFnGD1mdgravoCGvwcsRyGx1cS7hwTC29mhjmewMpfrtezoB44AW2",
  "key18": "SQUGhw68yZ8e68VfNyiCgq8Zm9mtSygPJeSLXN2cFLsCdHjkX4DskQ18dXB2YMXGG6gU2VvcxGsebbXQs51r26r",
  "key19": "3f4sdNVqCbRj4uCrVHR1YGg2NDk8WrEGaRyz8XRg5vjSU4QJUuZRcYuRxQapQyEjmD1rqUM53ngiDe2sE62TyhZ5",
  "key20": "42GCXpzYc75Hofv3W7qFkhVCdBBCW13GVmJMZeAqHoLUVfav5M41cTowf9d61apc5DrbHBgVCYGTihKYB6bkLWvz",
  "key21": "4YkQuETeJvZFt9XStmv1gGwN5kRtuKgmHC2HDo3Tx9M412A1sDqjkxjXht1GtvfEjai4qJhvxzNuX6uB6M7rHCE7",
  "key22": "4PwS1axZ39VijxAaDHLoyBebpLZuLHg6fVbWwqgr15JRmxiui3jVsur9ANXdWNodMhRuSsjJnC3rR2spcjnNwqwD",
  "key23": "5xhD56mpGU8g2sXQSgGUU57RvDwngtsW3dTwGdcuH857YM7FNPNVwnZrR1sQLonUCJ7MZxbt8zeLqoZezzqvKh5C",
  "key24": "4v1BBZcEHfoYmyriFjRD9Lv4XPpFb7dSj6fDEJ5fowBU9fo6dGQ718ege6QMB5FFtrhPmGh3UHdNjFFxPesJtN1h",
  "key25": "AaEN9Vc7rMV6raos2ko5zFbvEbv6ZXtXPyQTEjyVUoHPHEx4aeVohfzhS5xUL7QbtNryT9kLbcQBv1td9323Wey",
  "key26": "3UhaL5k4hdkbmwovb9cDVFs8QZ58ruWp1abLm4G35KbmrXNBmXUfNZw6S6HicWHf34rvexaU2hr3MRaBtNL4KJua",
  "key27": "4tpA5m8abtjW6DiiCmVcAi4Ja3sdgqKbR92qXy4fvDhNugqXnr4VpLTT6GhhBZCEa89mCm5pq2N7fqpnc4FaDgGh",
  "key28": "5iLYTVzdZXNfNjFaj5VTQuExEzH2f7aNwQ5VbQDA5vUqb9vN1RMDVMGiBdw3UaYz3dQ12LQFsJNQMj4f4SgL5Pam",
  "key29": "4CmDk85U8eu8xx7nZsTGWcHamnCdD7Sk2fiCbNi4whf6gh7Y9oT3qvrkwJ2kcn4QgtRddbVJxZJrQe3ZKaaKJ5JA",
  "key30": "2CMfWL5pBgWeKLJt2LhvpqjwFedET9dXtTxAEjqTpJobQgHUGvd5nPCSpwiA4skqQCmaGbewM5cix44uz7Wd9RPb",
  "key31": "3iauYaHSVHLvfrLurjSfDYh2KMarDf5rTuJ2zyTTPYXtRHnkT5WcbgjcLrn6MN662rZWkBAtHH9SFYZffEGQHdX5",
  "key32": "2UxmmTwZRkjNiZjfPkQbcdMoeFu984pmCHgoSebBMMFpENuNjXku3s5F2UiB8fSMeBL6qRxqLBQC7Q2QRAYYocwT",
  "key33": "Ecbsx4csf5pN7xiKPDzAWXL3KcNP5hiPgNNw4i6RqPJbQNkL5WqT5Moy67bdVoVAtrh82AEAajtuCpbTqobVtTw",
  "key34": "2QrY411KHfs4YH8GRLCpnodPtkkY5cWzTqwrz2YWwQ8K5WyD45M7DBkQUrDvPRPLzbjeY2bDzTiaoffrb6Bi97RF",
  "key35": "3gBUaQKSsx5W1NpLbXMph5V6kzqzMxMG7D2NNa9LxiNpPAFZVVqbiEcvJUTNmv9qq6WJPjR42EwtrqYJDRzZuz3d"
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
