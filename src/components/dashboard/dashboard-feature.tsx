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
    "3RyMg83BbjU1NhCAi6QefL6LwciPh9TnA5Baa6rwpDaiNAq4tAdUCBgbDSMDkuevT7HRiNQF9YVKAoycytPYuYn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXiqG5VUciPPHwJTRRaJf5LSTUyHqU9fC3TRg2mvP3voZsG2acBq62sP9mrAaAuYzXXzgjAxvaho1x8CfeqkuRy",
  "key1": "3tgjYjdEbk4o2wrCujo1rvwdNZVxL66h7WJzx4uRaKjaovzqng4Q4c45aSadbGjTcgKE4EtzPvpA9p5gQ21QQV7y",
  "key2": "5XcT4NoZ9K1kMXd913nKYbVLM5fiHyFj9bzH1gzQuJYAP3ZAgsUzXmWvKGap9xG4fzTuoq7ejpHjgEaszMrvwMyk",
  "key3": "tA92G92YE7w3zozdpzxhu1bmkouuqvXJSX3524u7XSmspGFtUQLkUtquPTQTAednbQJq3FhQiQf6LUn6QJvehD7",
  "key4": "Nizq1KBvvNnU36bPK3Ub2of8nGr1P3SW5Yk3waXgQDRJgdqmjBDqWTJkZcnECEhmAjZRhexeGuozjnf1qJpzypV",
  "key5": "npc6VjYWzCP7ebujErn1MGzojWqpPmsrRMeM3dM1yCXCXh5KSb4EywAgCtbj2tvCzLS9UCVLu394dYghQc4Fk6a",
  "key6": "42pg9kBvCbBF6qnwCuX9rQ7EJH3ct9Mg6Ei2CbCRodVcGEMiaqFjbLGpwdmrzj7ajRAr7q1GTuwqbUtBjpxy9yxj",
  "key7": "2tW8vtsMgYza8gq2h6tJH29opnBYUPpD4949g4Pep2jeuw7e8cUV7AfyToAe8gHRUhkjWo5gSWMK7RDGbp4wwrqX",
  "key8": "2Cs1UopV8WP6nGc5QRcdpr5AFvg7CjjqRgYBy7aT8fqNfYCMPfhooZYTa2GheeQsH9zNjyk28ZLEUHCzPMw4cuqW",
  "key9": "emF9uXQSTvAxp3FQ1pN4jbaCoqyz1gMFqnMANuevrUyo4goo4t3W2sCaDVKFGgnFFtrF6q9TmRPLEh6EMyFxF85",
  "key10": "3vCugsNqXNTdJP1naa7cYL2tyTV4kE64A7yp6VnWPh7nU6qJ5aBwBSdgad8dbRrj4kJZTPAG492PW4KaSFFGhND6",
  "key11": "k4e6p2T1wK7GgxSNxUozWyypeysnZDQ6ukN5VFCXPK9zqHPqPiLcb3sbVMszCpGGGNN63jPyUunxAn6n4mmL8LM",
  "key12": "2R9zJLnze7y9kELt3qCvi6LjTnSk4ok2EtrYdkCbTNoHJyDPwuzjXeB4ZBdo3QDSEZ9wnmM2xiMEG5LZbX6KZP8G",
  "key13": "2ikHr89M4kZRFQE9JgNRY8QWBWVbRZQkDcT58Uw6VHzTAkA6h1LQMGLu27iDZYCfigUMcicSfDXTSFmVbJnEdUwy",
  "key14": "2DErBpNTRNA4sEBt9CxrFzQKi2oyAXypRx6VT8AEewpuox8XinshuUKHqpgEEzhede9Y8W4zNTaoJeUZxHLTMHyz",
  "key15": "3BRDSHRGwPtrfWAsPrZiY2HRVRbNzotui9tzS5HcCEHE4Bsmvk8kQLRN7DAiEqZL9G1SAmSQBhyHKD3FkJ9foKj6",
  "key16": "2FEZ8tH1Xdx7t4xYty6rtKJcLA5NXNj6yVtJspSh7BHmTvCrFE1chChbAQVwRHUWaTkRKnvd9diShWa1b3uuvoKJ",
  "key17": "25gFMyVpFRorzdeHaAffh1BZrvRnjXyxWSPRLrzuGHgSCKEKPVb7hT4qKi9ztPBSmQqiYeTMyE7TthepWiTo6RCQ",
  "key18": "39Zs2m8Gtrn8PaGGrGMQFpLxvsr9kXN6LQmVyuEf1hQxoM4Nz3gXEF9swCgUhfVGgJS5ABi5hBT2WUK5mLGKZESA",
  "key19": "5pZNEhLZLFHVBJ6dCoLuDD72RdQJusjGWKKycfgigCwCaPsXvYLDkDhsY2aRUPiJmmtM9dwit4ee78geTXaWHkiS",
  "key20": "Wqm3J25eqtGcSqdWEuTFG3Uh1xx3tkpsNMzM36K56sud3qg1kR7Uh5FWEcqAR6V3AuV8t7Wwpcsdoaefvs2wwRK",
  "key21": "2gEXXJ5fV2sNyTm9LckopFRrUC1gKiw5pRCCuWFUKLu1pqkyiWGGonVuTL3j3JqfULUqYGvNQoxpurdPFzxBpUz1",
  "key22": "5rDxNB84tE9N4mTDyP3xFCj95uypMpNDxREwYQwGjpKD7eYtYKjTAsHAPCy5DGyR5j9bkcyMtUM45huPctNr4bit",
  "key23": "2VkxUAn3YyYMBbF4mf1YReLdGWDXqiNFrtZ6mZY9Y3Xqe7JRL9xBnXAN4CYYcrWSk7VonTungrAZNAKdKQ246soB",
  "key24": "4HDjJmEZ72TCUrv5grv5MKPHm68YVo6fF9xhGCPZFJNpMX1ZNdumzXM1ztapJNA2EAxLWYVew3eYLXxuLu9qqYE8",
  "key25": "4k5H1vdayE2nc9zHhqQamDZgsJ2cS5EcZsNgWWWMrTq1ZUKGWB2nyjSmYc2ap7zznEcECsfgdLtaqZvm6zp88yaH",
  "key26": "4Sz2mZNpfB7S4TcDT9KGz38HCWZUhbVKwGUqFpMNuaR1VPRaL2gkZsEoJGBW7VnKCVsAwdhSAiXVxmQVKD8RbiNL",
  "key27": "3FTtiRhSWJezkciY6fzmQM28oC69JPUbtLAkQXNv6jt72UTJ1t2M53mqqfDPwRh1n1jnuLvV1m8i1pWrA7x8mwkk",
  "key28": "52Bdt37U8nD1n9qpSK4SRSUDcuWCufkvjKduzCAEeKdBU3jqgJ9pjqtTRwHAMqCLDNM58cTSKrzVmkDRodGbS5oL",
  "key29": "SN7ZoYG6iYS5SkuXgWeWyXDdeoEuZdGHfcR6mk1pFvd8AnjRQ4waeXH38LZQh996s5rqn26w1KBtNwctKYrK4Y1"
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
