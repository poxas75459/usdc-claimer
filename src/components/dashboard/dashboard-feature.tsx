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
    "2ahL13skhe7i7KPKHQAyWa2Ty8bJDQcKDeMqsgAsNUELTrcBKCXnQeTU7Zis7b3mMRBs1paMubWvG8Emr6KmfesP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDMAEDFzn5Sbaw3s1qFzbY7NWQbYG9tqyTKKHWt5iKicWP75fEpJzHcJe8nWKCd6A3QGXosQbJwPb3g5EdBKX8k",
  "key1": "2re7KcoZviTupFvv4ZB1gHPbNBYmES4qgMyJ5W8QKUUS96U18dtqwo4AFKLFd6ZxwAwL6GkYJ9nXr6VCsbCsY5WG",
  "key2": "2zDLc2R7KV1jgvYiPrBRipAH888Mwv9QzXFNuwjGcJqgZJFL7ZVtnJid7hS3LXtftWr8cEgaMD5pbpKu3Aswpd5n",
  "key3": "24y6YEfT3w8x8iAAcFfXZXUQKDx6MUeC5f9FKFcfw7c8NDeocbdBhysGrdkRyiX7neKRMDrnH5kScFrjoeoECJfi",
  "key4": "EDZbhfsw54shKWzrrjXKkEUWh7mX7iFH4j1dzf3C3E2cJqGLntitamgctEX8BW1irM9FiJw1Fah2xaPe7Lbudzh",
  "key5": "4iUEQGTadXw6G6amyAUVdtHMHcp8Doncr4AKNm7Lq9nNujU3w4ZD4yD2UAmxVspdsSdnBBCy7jGLkjLwjMMndf6T",
  "key6": "DFBm4JdCeEQWLHv32RzzsuuqZPuXiiiJ6u3mvAVL1GBSkwmY9hUCsbDS5jooCJHd6VvvdrbQ9tfPmUXbFBtrXH8",
  "key7": "2qwLD6UsKXHoRZQi8skT8jg5TPPquPpTMyPRZTdXPoUjDg4wtjzte3Crwk9sv2HLAy2J25RSGeVnbGLzDzVEvxhA",
  "key8": "5S38cqHNNGPZ6cNHW1cNewhHRTjDDAufNAeRKgsbHQyv3ZNrJDt91PTpmDCBsYwg6CZPMbrojeGHgqV4h3fAVfDR",
  "key9": "37aLDK8m4DyA1xoj9BcHcQVye8kHWvbULycmbTrpuzoU9mSCyxD8nMkhBrMUqxYTsiYQe3TZFt8ZHniZRAJkzZM3",
  "key10": "f8KNBLPSZamUHb83FaWpbS6PXHm1ejHjfPbpBHGyGzXsVwy35kLxrF2qvAf5bFNdrwR4rK4LqWmrWgoZrdqcK64",
  "key11": "5nnqWFrT8L4h4F6z4EGG4RhrLEtc2a3iC74xMqaxwtgNqyGKcMH1YU6cLZzE5rxQ5EsCQu5dGssgThd2yYTvSbbG",
  "key12": "3THtw1ya7GZnPQYjapq6JhD3aad4VaQpjXLM1KUmKkzsonkz25QSJ2D5sLaqxif3UUZ4e5y7Vy2iJs4xcZDd6do1",
  "key13": "5hXtdTVBP9t2TJGFkRDo5vktfCCogdeGJkdRCS2itPiyoNG1z5Svr2U3rLijAWQ7L2ydxUYQfBEW4ERN75M9jX9U",
  "key14": "3EQisCrMVvtuEeMTYbjER5Dw7EGbBe9tcN1UEFLJB4b4Sbz52eVA3eUt6SPQprQNHfsha9ZhAcr1nx2DUYaoPRYd",
  "key15": "4zktLCHru8k2H4DJznk2JyrKF1jtwdv336ELWtasgUb6sUHo3TvSaDtMNt5c7vxA2fmkyPsXfNoUkyArsePDQpZh",
  "key16": "5pzD2wBWXF9PKEiKUffHxQokAcbcZWE3a1hmJsAZ8RBGfZk2yDuF6LAtAi948YRFURjoAL27p4y5kcMusg9nYzN6",
  "key17": "51Dmss9WZEunuGvLaeEyK3urEXi66jnDk2eMUUea3jGZ8BJVKpe4ssdDu1GbybetENNbvWNyw755C7GQuFPWiyyT",
  "key18": "4GuhXge3nVsCRVWiiUzcJL27Jap9FQX22xiDYgmdffrDuJtUeuMFyUYxn1saXunfgYWBarKDQnjGmdjtRdSpvKha",
  "key19": "23328G91pykiBsV37ijk9NJbHRjiU6o2BfKNdap2pyy7qqk24CatTijswHfC1xZJKbp2DKwuKGfDCKVqBiHwBVDv",
  "key20": "4XW86XH1FEc6T7mrUwWLT91fQGCoq8cphqAsjtUM6pLP3tRMmxGRk58PBiozxvgYGfzkkXQL3JM5dqm3CthjYMj6",
  "key21": "64ScyhEnxPbzTmQjTYD29C789FN7Gj8Cfest1wnQ3HuVWH78SnmqPufmZ83QvRcmny4gR8MrTpeSg3id4msp7ntT",
  "key22": "GVZvXHgjUCCAJ3Ar37PszzEXR9tiZocFe2wVd42mrzQKLyMSjF5Amo77PDMsYxjknVFNZieuCf8UwfcRQMNzx3E",
  "key23": "4BPAiuFLPwQnr5cf2XKhnupoGS8zEXA4q1r2HGzL2Co2TAChHFycpzuHBRLk9X8hBzPqVosu8bYXzqfxZDvwdbqR",
  "key24": "4QWDvxC2XymDvrrtvwJyWGTFTYu3i9LqJJZizp41VRedEf7hxKcmET5a1Hj7VmmtZvnRpybVLrvPWwqTENvPB19",
  "key25": "3m6R7Q8pJnEgmGu6xSXrtVZJR8A2o8nU5ZGFGR8at4G3yxiGVQhytfRYT8oGu4YMiX5sLgtNPSK9bAXBp6ZfKTFB",
  "key26": "2dTvHAyzPhEf5hTHphVviDoTQKF5sp9sjBRwzm5aGKetFjrfuQsJ9Ky7mH9Sp1zr8hia25xFbGqyUbbNhtpPD8Mq",
  "key27": "5KsALVRvZ9FbPbjWT72n9MaRNECdAotWmPPVrUcPPgWnqpLbhL32CcTofMeY3TUgzKj94Vo5CULtMFG4CmSrka3r",
  "key28": "4AtSaJuKFeR5uGTJTrx6TMgr4DijkAVyWdTRVT5sLBKejZudWWt3SJsrzUtfHumSB2A91qZcjiwtCAGTFqwttXdF",
  "key29": "2Bdg5zvCerQEM76gHFthn6Y3koMK14cv6YJ24fK7nteoh4tQuU9ZxyE2TYn6tonjXzTRbzYi3SWEkv7rSuR6kxR5"
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
