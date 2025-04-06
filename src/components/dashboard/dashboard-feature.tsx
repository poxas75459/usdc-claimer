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
    "56Dtp7cHAZYwUVzcqXv8jbyuMLQwMvKDP5N3iYuBCyuHXFC8LhaptFDy9Hi52Qw3fVHWFPqufXY9S65DK2N7rE7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrDar8v2RvUhTJ6GeW5nRVcuEsEtqHZ8WHkVasdCkPLaQggEbKyDHM3d4C4smZ39nv1j1SiRAst7ptk8YXQoGdf",
  "key1": "7Ept9Mfj5Spgat2w4Yy835WHKfkxLk3c6byxECF3wZdr4cZ8nguj9S5vb9qEhN6catTibAnmkZ3B5a7FrMoz1ji",
  "key2": "3wUVEpgq7k1hMe1nCRFsDdwVLppQsuzFwip5qW5pGiiZbxKMWh5CHQWvUCXT676VejcFqkQyyQV6gyZDavdLitjf",
  "key3": "44ncxfGVZoht7vG43k2ZK5LNTkWeNNSCx5VFuARvaJPK5p98BqnvA93kT8DqrSgPUuFvycigep5N3d77cpBMiRNg",
  "key4": "jwC2GHPmmSwSiCZhJ8rNrUBhzHBuigTtFXzvxTEThUuMu82zFxLw788MSKzwNLj513ApP9wVQUHdRb7cneY9br5",
  "key5": "48mMQYZ8PG3W7HkPPABcFkmDsSzpBBmXh5ghe3BfiHQWaeSMw2HGyRgghSxBfDqrsxqQsycuS3J1cvXLKtvDvEuv",
  "key6": "3xZBVS7gv82CoMsrAjawesXmPpzEjhnwoUBCWpnMnriRPTE76SoRaDvKk4aU97V6yYV1j42Affcs1gAuPgTbB8wi",
  "key7": "4teqszLgPGM8FZUFGsebSCkZnzpvs8M9M3WJpwubsCgP1rKg1C9DYY9VNtkq9oyY6SvCtVWsMtxr2dcmXCFcex38",
  "key8": "2DJoCT5jngLyhe4Gd2mb11W6tnv8rXbP927zffLBuvg4Wo5gCJRhLTaDnDxTsng5c2rHC1VB1qnqqNYJ5iqbWpAB",
  "key9": "2jf4nLpeVnXgEf71FXq87fum9JufPdJJiG2xV7GDAjzNgWQr8WsnHM4ot58RGnJZ7v5WzvskX8JhmEkSsTY26PX4",
  "key10": "3EUi5zVQnh4F5djZ4SEH2sMd8nN35YFatMEJdUjrPH1tKvXU4mqad7hLsFXixGfYQcyWzfFvSxhVXGZArTkx5H4T",
  "key11": "3ADX2KfbzRVWo4C4VXbpDm7GSpDieMfRxtfdkfHM7gsMdp3eGL9sb7jdt9VqQB5xve1UCHxPfroqJ5fzvUKafJv5",
  "key12": "3mVcXYqrSR8xFU9wxHA8ggwQmMhwcVCThhRHnsRk7EyPawWxPBg9kW7mrXZYHXMNW7ofMenwBCoeRs594obKk6eD",
  "key13": "2nqL95EaSvA2aP7WMUyRvbWdzFfrrq3qzijEaxTyvDifwyXeH2xaTveHQv9zCDxw68CvW9PDktUt1aZBrNVy4QZ6",
  "key14": "3DAzD2ihrH6V8nLEKuWtS1dpmpCns3LSVwu1Q6WbX7MyHxErGH8UePUwYJqT82pqj4LxkUuPXhbzyCr2scm7uYTD",
  "key15": "5peHrzGJQjsor4PeZ7rS78D69rTuBeDqXoPfcxvMc3NYfYKYy3noorN5KcZqCH1J4JzUSUTavVvrVgpRbXspLm7p",
  "key16": "8M9QXBJg8EdegkKfU6H9nCTAmt4GPHTyyLM1g3AvYWqbQ7sCFy5ERgJmKE4esQ79ZUsatUtwbguT1RFMKuf8EC2",
  "key17": "5gSVcoyaqbk143NBsQvkfTJZi62Sh8ArRRAadngYaAN7dXcCtw4tdPHjzQsi3RdNNUU9HmfNrukXNYtYFzFYTnLW",
  "key18": "5x3BrQBZRgAz4cNqHLrMMURANDG4XV6uTW5LRQKecZL9DvGTXCkPUu6pFA14oMD15MB5hJuCuh4vS9gS4jR1bscU",
  "key19": "3CU3RUjZSBGnu3i6ru2UmTDum51wswq4h4kHEFbRR4uRfHTKtwZUaG9an8P9Scmbe43h5tLzGds3QgWLTVMcvYEw",
  "key20": "4PmwLsBgz9ZR8pwLf8CQHfMoBFHWFuG9BazEjtWEL6h6oSgawkyqFfchQdbqnPbMHwMdtRyXgtFCLP73nYrspLRw",
  "key21": "3nwjEWxtKqwA9aTy8NhpRaep7PEKE9o1L1wndwLx1Kbj3vHYH3zNdS9kFqyhLS4cb7zRRYS23BQHAiS8GNkUdEZL",
  "key22": "3uSCJq6kqE2GLLe6dBAcQujvbuY556TY4EbmUVRAWE6eTSazv7bFoVQYFsruQemhjmC1jxpSbR6ne5iNLkgDwQep",
  "key23": "5bdxaCa3K1omq7JGj511dugH6sEJfmSBGF4oN4NRdq1uBYtuCSPZpXFouid5x4MRVPzZyzXa7ZGs94JJerMRkw67",
  "key24": "21jF2rn1ECKF3MS1fMwFHryUNNkiKsSmULmb1Jv2ymyMayafzpsoxjPhH3zpe23QzW5FtXdpZw7Ehkcp8wikcnhe",
  "key25": "5rw6VH8r8it8CT8wKqxjAn8v2q4DEMXF1qrqhri8UWs5M5iYMchSnQMmVvN8SVGogjhLfzSSpgbVv9F8yJ3nP8J6",
  "key26": "PFW1JHXrkJ4V3AYw4EyGeb56NuB8yHQXSS3PKVs6KQXMrwWgfiV4No5NjAfoS3qeRbcDxfUGWUPqriDTpc6EsAJ",
  "key27": "5K6a2XaMNVoFRwPN5aNigTJBpYKY84V7VK9Us6P7QfYtvUsJ1WJDJLobSFeZ1qU7Grj2CZWoLbbpjWGmFgpnKSXK",
  "key28": "3odMmJhcJLkWq9ryU7NCjMSZwS121ykA2mR2stNeTR8MoRNHncouEC3PEvF7wHvK9A5QL9CrhFY8T66HUz6weNJf",
  "key29": "4Sxz4f1QjvKTSFEyH8WCpcVELv8HayM9B6D15cWNkwU4kkKLhHqvs1We6XVyFLWEvhd64ArxsxEY6jjedjsQeETK",
  "key30": "iy3xk6GSA9dtataQtmGjgaunzZKyAgYEh23QqM1wVhitmEjCvn64sFW6YqgBkeJXNv3AhnhKa9hJxwRS8imReAb",
  "key31": "5c6UVc1ZBoznCUcAWwMejsJ2hKShx1HwM4eeGoWwuNDqRziZ141XnfHFL8BXrzVErcLJxiaG1jECXv1vRfa76t8s",
  "key32": "4qvx4bi67azCdeizjrSAeN5muActXwPrht8d9rVZhUJBX6HwBeGNTQPcijMw1u1WTTPsniUtqYz1f9byppMWjcAf",
  "key33": "4MzQNGi17Gi5BXm5zju3XyD8yv6opVfJJQvcgyr6PcFL3keaCEtjpkuTUyxy8zBHPixNbu95K35ohmqsnPDNUsY9",
  "key34": "3VtwhmkdFrGdX9EpJVxiU8VtvTSmiw6ADeFHdLgtjscTBoqeqjRP87nrZSuCYAHXSwfEvdmcHztrxMDp4Vf26y16",
  "key35": "5ZRBxzMm2SyBTGSJodfa9qe7WP8TxoDTrudXZrLYji6RhSs6bYmBznFjKJCakX8VnfJuCE9QHtoe8PXJQFxDzXEv",
  "key36": "fEyUzfUvC4Vps1wtotT9GKZaoN5nBcFvHcwsWwrHUJJ7BVWtVufLHYL57RQppdCCyAFZ1Tkbyprzhjsh81j7FRd",
  "key37": "4XysAyiCFFdLdejLNxkDH8AWLqU73UZ3XpBYptGUQSg4dzLkgwuLf1NKwhKH1LcoKezfQ2CtbA8HXeaUGfhLBSVF",
  "key38": "2DLf6KHzHJ1yL7gLjpa6EEuprC2dVxVFo7AHAV4PopQRSsoxwqwVCrGzg1fqknC4drJSVdnXPa6ot6fkK6Vsgwgv",
  "key39": "251ejDFugz4vxVTwPnEsB4Us9LDwfr2aN2UYjjyR8uVXiAmDW54avas1B18JeYYgqdk4GANjJeTeubGjjaCLiaQK",
  "key40": "5tBRfvm5sNzRcF8gQvcyQfvVysqi17XG7pfvR8X3oF3asEPat2wK3Pu8mM5Ai6ebLSfL7nc5DVB8Ei8W7wY4qKWH",
  "key41": "3iqFbWKdufvnCX5PSHRd7Um8yaSByzYbseCA3LutPYPTrRWZp1K4knK3FPda5mkMt8Tq1KkQSzatDJzJemL5cgsM",
  "key42": "2Utq3W4ev64d1NvXcY8TdaA9gRYvxWbHyuihcbkKeeSExKRGC3KabNEMqRTxeDWd5KBotXBMMFAwXMEkAnZkEQgk",
  "key43": "4hHo8MCeTzqBcMczfkvL6nWMXGvB4t6Q6YGA1FzyN4w2KPWcStPwUkewu7pWd2ZFEz8DoQRrjYEHMnV1BKfEAyZX",
  "key44": "63tHdxgB3L4Y4mdEMTKC2tsaA8MKhYYqQdmzZ5JhbNJgAuCdJCzWFR9ForhFxydxwtPq5UQXUoWBhDSchK9y9Rv3",
  "key45": "5Lz5fXjqtGDYehiA23yEaemoAJQkgg5JJT1SFMyEyMATh2zzyiyMS1A7sQswuhjWZ8bt7vPBVBwEHgiJ5X48c3wD"
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
