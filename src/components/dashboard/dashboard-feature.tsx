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
    "3GGt1rYWFwVABSotj5C7Zphh4u35NSkUiRtHhZsMfgpPPdy8ey4B6QFJ12qDTT9PZRVGykuUfoMok74kdwCjmGHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uxniP7AsqUf2wFJ9oJqRpyLDK7yq1Sfj7CnH9W14MpfaXBKqaxhU87xCKybJmmbXng1Y6HxRHBvrmm7682fiMHM",
  "key1": "453kWha6ZP293usPg9D6io8FNQvDCg1QKF8JfdNBxubLRWECyMvZR3WBFSRBvVCGCSK3Tn9t7braBReSwPPkRpdM",
  "key2": "wBtXeMKv4qJQgfDfWLm8o9mqmghQSHMWECqba7L8GPYYEAsLYho28XrmL8xgdJNoqeNHJQVb1jQHmCtAwJvMsgR",
  "key3": "5B8p6daQwkU9VKQQGhz4hEHMPQennrhCjtrWSnFXdUkYyFkzhanNLMZf6z7PUjoKnKDbK26ntQrtrpXHP8xpsTSt",
  "key4": "2Fqmti7HnVwdX2TQMPfT7WX1or1HKw6VpacLQap9DcHBkiWtHv6FGK8eSDCEeWwYgLL12BKB9d2PBzk2NoiHpRfK",
  "key5": "2gpzNaSoBVXTpxFTLGuxPBJ3pANuWcnWPSsZYTaHnKAfJFs9MKne4vAZPaqpATAmUoQGrPugZ1WPy2EQQQspdvZR",
  "key6": "4VQVowK1tVvwdpCReDLAtRotNYfWwDGkBGDEcf562rjisq8VRy5s9mVU2uwwPpLmNWoBsP7j4f9ywptD9FiqS583",
  "key7": "Huq8cmAvMrB7Ly6rkqtpFn2izbSGnFiqUEE2AD1YGgMemScFxgyyMdpdJDxyS9cpCAF7ffensv6zk8XntC7TVmv",
  "key8": "3pTVTBiXR71PQifnd7epY1tZwdw2pQSzgmfcaL5Uw9nBhdn89ZocYZ9xLkcLQRimzQZuXBQDu578SB57YKpSmKGY",
  "key9": "2278bEhGkCu7JLhR8KvnPNoC5WEMiZpHRnk9afTX428FsrKwqFFAwKo6BiezGJaaVZ3NxnK1ptGwYiMN7PwZ4Qhn",
  "key10": "vJjfb4Pb6xXDpsfyseAfK5wiceJaVHboDFSQ1eMpMgdk2qLC2EMGeetmYZG1T1k3KmfGG3wfGS3rCsVLjgn6sLq",
  "key11": "54bTctn9a6BUqe6hRWS64byEqT2Cj5G4p9vPhc6H1AN8KuPKCBTQzqvy7vjEKQPRp15A6UF4Yaoo2uW5mHazWJom",
  "key12": "Lse6tfm46QgKbK786nZEFad6acbiMUyWhkkZzhZx1KkrScxCwTPkJJi1K8Hr6nmStMB79A7uyVZE4pHRxaW2xz2",
  "key13": "3Nt3v3Td5vnuapYLEusDDpcp4TPgL2uDUUKQThx1eFXBar884QPm3kKvwMZzNYw2a7tY3pUQyE1j8uof1qYPcADT",
  "key14": "5u7ZMXc7HdWzWZ65EPbHDFb4KdcCkAse8E8A5SVugFmCbYgYN6yjnzoJbjGZtvF9oCrZdTwpYcj2PE6jU2MWF1Kw",
  "key15": "25Ss9BfGcr9az6sk6DE6xtNuBzZ9hFLiwLaLiEHnXBuzuPAZ6j8wVZhNZLc6CuLuEMvbAFcWsKhhzVYTKKv2gJao",
  "key16": "2ccUXQddcDnA6KMHuGTczvwFtKfrWM8t1uZX2V4RBugN44AdUvSZm6xD86vuTHKMXJUAyYqogw1xYUcBQLVisRP5",
  "key17": "3WhVk3ajbkeuxNc8nc4WSSCfsc5kvMbnoFUwMQ392htCY6CCLAJJRt1EuWQqL6vFABvHHCCbZcpiGzCim37Der6p",
  "key18": "3nTu2WoqazGW7fhRWRFuGbH841bb9JYnJkx3zckqXngEP8TTZS5Nx7BdayaNmR7id8e4DKKLX7E2HdQvjrRtK8wG",
  "key19": "4wkMAFnaU9oTWK7SNPmYhiRTRGyTjjR5oxsjupGjiuuDox6kUfDdyvCWhfeb23YyzXtPafmyGtvTRJ8qpQJReTt8",
  "key20": "wc1BuFRu2unyHtm91hwEmvSceXGMAi3rLyJhW8YYhN6dbbrcQGGkXXN6m9jqKi3jyXnA8RmFThyiNaDGhPvhkCe",
  "key21": "5WbR4fCavQ3VMZ1hU2ZAKJnYppdsb6gfxYCQ5QHGm1a5rLX3GFP3NQRnG9UcJqEESwEH76tRjJ6xEw3FWKS4Mgyy",
  "key22": "5YMAgKA2huK51DddHKWsJsHg6M6ocb4roe4jDLpDG2Jy3V3BR3mgibRQaPwLxQKsYoaG7J3bkL8KL49BKiz1JAE1",
  "key23": "4oKixrYVNVbPHs3w9Yyg1gaFribPhDpJBewZSRvah667YC7DLkUF3JsWd4MRqqSQ52dj68RhffKrdVQchmoo29Gk",
  "key24": "kzWywvughAmeujgc8WSRGY8w2v9FpvFPcrp1tS7RasTXXSZCWF4ZmpX39K4paA8sPmq4HtcgpeiCA9Skuj3WcAS",
  "key25": "5g41LUfNHnfwqvxPrx842CGT2QswiVkV5HyT99f8oLiBtZMjKaYbPoMVcYRfHi4Cc2tcEmDgADWmt94jg4YXmK17",
  "key26": "5dEmV5cscBgfYDmGnNkEfRb8pDG9PELFNGdwYA4KwF2K8ryNYnPEkrxCYw33Jrh5vyvk2TJzixk6LNLVPZKQjtfx"
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
