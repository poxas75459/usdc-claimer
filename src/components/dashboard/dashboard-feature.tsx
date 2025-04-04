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
    "5ZhfdhKHsR8g46j3vsrAAMbWUfJ1v3H9E1t1iKG2XHwdf5Zcr3D6vQK5DpBTouZR12wzUwcvxMRQW7WhSFWCsFSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nKHpW6CyZDm2EypsrRGq5fNxrX77W2CSpMuHmU7BM5QWrHNRgJfYGBG3gyQN6SYegXZKkiKzEEG3YmT9PmiMUHv",
  "key1": "38s2p74oZV2fZ7EabKxyNNgedkgVKuqPM9zPyjaxDA3Sb6o7wZfx3eF3BwzXrbXek7ALACva7oA7qQ5Qpvy6FpBD",
  "key2": "5MNUzkyKkkShqkb3ATQr8qRsxUZKs3YjSCmGpGqt8LVUyhmfXzZYMiCdtWzK6peHwZ3LVT7e3qyxwZu8Dc9cwH2P",
  "key3": "5qQd9hmK6xN5JCV97nt4Dh3LZNPaW2FNFV8L2HKuh82ZJpjusRSV8tKGJqynHxPQ9Fwdz8buf8iMLNugvc4W5eyg",
  "key4": "42oatqr127Bj5DFuybnwgYDQ24jL6hJHoXJrDTYmyzgwUShFqRJ2bzpDWbVigmn1jAbf3f5AxktYrFvUAyYny8TV",
  "key5": "4t3ApXcgfFAcxvsSUx3VtVY2EoKoA8tx8YmW9UKfKivsmxJzLD5oTv8aKVqg69t7hGG4GBVZYmVETw14azoTc5Bs",
  "key6": "5NiRiZ5fcyktGXCCGawTLdLMcgNcUNNxfN1q8EgWzun9v7vrjRHEZGgHc9SmWY8abAvQX7j9Aq7uoJ2mn1uy65N4",
  "key7": "5XTrfGbCMQhZYSLnCBFc5uQNCCe5WiSgJaQoHt4baKcYqy1xdB3vQtPLRprvvaLdWSA3toL8XyisLzwMquQQbUK1",
  "key8": "32kaXYbbsCwPWhy2ia8EuKC7ZL4Wxuo3WKbXhvbZ53TDXDdDfhr6fswrj6Xgyn8GomaKcTyYvAwaqDuLFuBzRstN",
  "key9": "443dVtRv1iTwnG4y7xT18ywB4qjkW5fZK3pL4NkNPsD13RKwdcBgwRgxNQh9b2SSTVk7uJhqLy7S1FHMakB22Byb",
  "key10": "4xdzkTqwzfQr9VZgbWAnHC8FzJvx9nDusvBiaWZmdb7EXeKZDArtCPvhwVWbwRHxTCjXJ1gzkoijVd4wDsyk9D2S",
  "key11": "58gMvufeafdD7MEwzrezZdbjVyzX39oUCGeVpSEpHtWqysWd1xQNbuE2gbUEjLhEJZtTq48LRQDfHYYDe4nTbnok",
  "key12": "2hndXL84AgwpDwyYzk7gafXMyDvP9LP3BaeK1tcbU8NKz4J6vPP7RbFPXs9BEdY9Pd7FV7E7JnMC5878KLDe3RX5",
  "key13": "3o4WeJtosTQjEC9tXxes64NPcCbuxDsCLjmqjJ25cWYJYL4g4ifhdounQPtCmqJkP35cfFXeqsj6tNARgVyMPpzW",
  "key14": "5X4oYY6iWaGEeXN1hiBLYmJFwMK4ASXjSb6KAkHEUpsiP66QsgJfZEATRtHDnGsTUhUfRN2oKYqv8dADfLob2yZ3",
  "key15": "5ykau6o4D6Tg9wjJrrhGRg5MwECZWMos4XNJnXDfqUTZgsUjTPxxYXMPDdBr6Jh7hmcn44tKuUB4SfBQP54njgSD",
  "key16": "5hGB4kwHoxW22LKmkkhnKBxi3HZhKN96htWzrLeRDARjY4B2vNLJuiwVoY9jMD64rkGkVHFCyDy2cMTyMBVLckGJ",
  "key17": "XGYB5sCaVFNRnBcEUmATwsqkQb66XuK3USapfWLZo5u1Cine1wwPkes9s12mbA4khWHq2EFu783tUb36n2DvtWh",
  "key18": "3DRRimsKUg6WEoYbfbLcKbpfSgTeAidWpCddRBotYpBB6aN8z4QSxjaDuLyZ1D5whSbJZ3sdYutuLwQhq5Dvp7sQ",
  "key19": "4uzqYzJrD8XCdXe3AC5FVES8Qto6fKo1fZgU4ZwSNzzdXyvPDqZd3mkBcdBntvmN2dwjPupo4KvWpdx53Qvm7VXU",
  "key20": "5ekcAzSQ63zoPQeUnYiTkWHvncgESAgooxpHgmvWrfZ2afBtGR9nx9pPUhA2F4u2cTbhwdCHM3QkTbH2GcijjJrM",
  "key21": "4XkDNTRNrDSatmniTWWctjtNj1cdmLgbdVAG78rigPqMQGFtyH5jzUpPFzjPhvbDMKvVBNQmMLuVafXDRDpFQbuE",
  "key22": "4UmWR5PRYU5KoCu5ptfNGGFmj4wRoHApX5oWeRNFfCGvf2HUp9C9rX68TpA9C7gcWCspge4R8dFhqMijigM43qdP",
  "key23": "3RKciNaThZypvn5jSGpfg7YYM19d6c3Ja68VCMYGBwAyXKTNxtaYAZ8SayYgyKAsEsmhJAmjo91p5YQzrrEtJVRh",
  "key24": "4yTwVdmCZN7ZM19NoMDz3Rwxq8HDjNDWoy39EPBpGXY8oGHkEY6e4vSDSwpe3Bqwz7usAx3NS2TEFKXDmtPkTNzH",
  "key25": "4xXDvu8rwk1vCBzv89MQHcVCaeVh1M4r163sjzmhfhvbh6tkqZqDabRjfaqkZPaGY4XcEDGCNNNGsfBuZyrV6v7r",
  "key26": "4WLfMB6cx9tHpcWHhW5be26V4kDJg8i8vAp9bYMiTFxqmXC67p7civzv8Q6tqmxZXPF7HDmxScBR2gRBD3jko4sd",
  "key27": "5TJ1zEPXT24jbJXmDbvHJjPGKg6MZLybSQX21QzWYphgZhWChReP6GdNw2puPFn4b2evgYqLD6fLzs5D6K4K8WdT",
  "key28": "4cCRABY9bo4d2VdfT2bGGsVpTVs8QoMmWTBJtsjp9yB6BPZcvciqqpMuMnX2sjfBkuqW7WrvJwChh9T5xBiH6bNn",
  "key29": "3hQya59LCbnTGksqxTbUAPBsbuXSmdgp6kW7nmLkvcpQiZGJzYRe6GRCyoden7TBwx7uXwFX82M9Ki4XwwwPyQuq",
  "key30": "22g1nPyERzZEY4amueanE6rgcTNYMsu4BLggfEtppTQKLWty4E5BS756qMxvQdSW64bD3SXn2CpcFzD4SpFpN2Rb",
  "key31": "2MaZryxvp7M12o2ME4kmBGC3NQ8pMYsAxjWbEhMfaFuSmFEYHvASXgjXdjsanDtMAfjKDTGhXc4SHTEnrAS1BwMW",
  "key32": "4bg8jqG9RMoiy4zQjeH5z99E5Lw9nbMWNdMRSRw5Ge5NPr8Q8Xia4gWVDvHNFx5zfEGjfcg5vChu36XgGFdESRy1",
  "key33": "NXCNrLxqqPDpZH773EKUgKGuEmAKr3vSWXgpqrC1j1h5BNJQi64qWQe9ZvSVzYeTEwJjcaju7EsMfjDZ4Fkij3F",
  "key34": "E5qTRAtE8aoCfsEcuMRcU4NErxFVm5EYQ72tzVJerkzKmcYF8Z9uxPi2Cw9eMTmozcSGd4jaXutHx59C4ywDmtm",
  "key35": "2Cj85YJiXeapur29q63Q7dSTwmbzsCnSMQDxKDJkavmA3Js9a848FyH8K31tadpzENSDuygNcFoCUEPDanLGkYD5"
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
