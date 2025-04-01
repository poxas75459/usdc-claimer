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
    "5WXqntFEoRyWSmYs7Wo6mQGTUXxSdZ12AJefi5dzXkhX4r2kA2LNuCWCAViK2LtRkGWvQoPpXuFadgbZbzFCuBcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35XWe8o1Qf7rEkJJVQWzxU1VE2g7xtyHWBQ5etQSpyKSCGUNiwTMsbCdRBm76yko5hEobw7Rrf5rv2nTZE4HSSyP",
  "key1": "62whXamfCdYWZnxTWFymW72RvUuyoWSbSBaS8UqoP2hURZWxxngMWMGuDgK5EDfnb6Tvp8MaYagLGWZKQ6xbnBNa",
  "key2": "5qTf3WiLWkDJmKuEutTWgMbJXegfy35S8qRduG7TM2LwJ8FXiU76douJTPzZKWHVbSJR1yNEFcQoYn2HBF1xz5qR",
  "key3": "4A6dhS52Xm3DqByMRBStQVYRpGnaBnzQVLriYTTRwKq84nNaz3xw5ZXyWKWNxsfxar7wY8UNm1nJQFAoz3xosZ1D",
  "key4": "5kakuYVCCGhcwkTnhNFScNMDXze7BpWLWYAx4rRvonP96aMUuUp3EXwknQV5khwu48P4aifqXHdH7fch9AtKzi1s",
  "key5": "KgqPW6HWZkN4D8cj4JZ83gFjfrRsipmeyAWD7mQsBh2UFXYGKcgyMVgo4o1AD9c3V7FX2yKxZAb3t5udLeqpwPD",
  "key6": "5AhRLpXv6dGrcANcbknHWJ9ED71spRCFfA9AWRBF3FVq1tCkaez9n8V78G34QcdfYrYkFzBLqUn7sy6bqSswop6A",
  "key7": "29fzn8wGN3hHDkrse7R91Yt7zrDJJYqH4uS9dopJZD4LUJwawUEwV8mcxFGZmrw9RMtctTSUpP2taTKNo9q5YUch",
  "key8": "5a28B1C7j2a6ZdRHBoTJWBS9ntHkKfcWDPMRTsGPBgmuCubVhU1ruJyGM2vg4P17SDZZfsnnqHpkE45WNTA9NPWu",
  "key9": "2mHqzLnNWSo17WB79UNvACGCB9CEsx39mazNrnDRgGotULeNNE9BQwms9TGgd7ZixRq3mfkGwQPZfp5gPMQWz9Gq",
  "key10": "43nrLc2znhxvXqakp4cFtt6fbQuhmEejm4gRGoUFaN4UW3JArseKBWccqzakPmx3tdXEs8V8k4oXH9oaDYo6FDuj",
  "key11": "5CUUWFifP1AZH5HUjYaiKD8rEn2AJF6d9LBFk1CFjjvQEVGyYWYyvrpzgmZTSRfF1NDCpS9ivabREzVnEWavsmZH",
  "key12": "4WKUb6ed8qw2JQq3dqxAsXPm9JEKxhAmA1BUxgiasWVCiCRVoEKM6JBnVtaRTvaJf9VR2Tkvf83tm3TnPd1AKeRW",
  "key13": "5PUn3mMNXhmZE7wqDNDHvfiXt5C2iTCCgyh68XcarVsVJgZfBDPFKjMjPxScXkKr8Pn27LQCKWXhZvbRjkEBodN3",
  "key14": "4MsaRUBmc26mswzfZ6iFR6LYmmgBmU7Eabi15PLAnKBiUDwCVvTDxE1DhH7HpshzrSkcf3UjDd7s3pmoUuH4N1Ag",
  "key15": "TskCXGBGE91dFyNx4SVfE5TrecKyG5ZNpvpRAHoH7EXNCrno5G8t1nePAPoD9BPudXYhidF2THZahjmbTFsXpM5",
  "key16": "2yuMy8XCj97SppBaKeQrUcKsENtP8XKor6yMh1Mgr357QnSXPM8hYkYLiFVaDPj5JiGeTw64TBh3G3FaqTnWdCfd",
  "key17": "dBM1TyYNhGwCzsFo6Y3gemZwDbBTEbqDGDpT2zPsuUkqkKBW7u2G46XrFeq4ATPvWi7KviiJzVuZUN1gh9sTy5U",
  "key18": "5UJSpG32sTG3bVGhfnW23WXh6SYcezbdBriTutH7RB1FD87hymvYGetrt5SbFPrVfH7hYYgJKoKzCdMSWLFTx4vQ",
  "key19": "3hNXSvVKo6KfjZGUzKSHsT46c2LMu95wDcvzxC42953FhNwJjfN5BtjxqpdW7v1qAnYxh6Dcx2NJQzEx7e9jDvFJ",
  "key20": "5cY4xi76cYeqTiFvqD9LKEBtAtpM4JGgtSJqmwD5jLpvrpjQtUodz1vSHRkLpfSPSk9TwxNc5n9XG2X3dssrmEa6",
  "key21": "3x4hgt3pc9zypD7XoV1Wysr5CjXsZjyqqNJTKPpN4PisjMhFpujpyFApTZszAJkkkQvmEwaVBoD4MnLibDQdrqbe",
  "key22": "2ZgHDsRuQ72Ze7TDWQdPVgm5hLeBdpzzdFhLvdUgzWRDTtzRdnugK6A2neGpgYkVxaw4Hbm8HvUWdjetqaMJjxfS",
  "key23": "3YvugiTnpR1KotWYWq64JD2Z6qfP7V6G3WXi9STz1nX2gpcXxPyg8qvDth9AuuCYfDpaM9ytoH3jtvY9LmJYpiHe",
  "key24": "pyf9ay9645Gc7T2GrSf3xMKzcLeBuXTKnn4CzXmAStCZendGE9wtfmdCKZzDLGYC1zAWn2dE6MapFevBy92EQpg",
  "key25": "5jcs5M9eVxwe7Fh8MuLayn4BtZBZHzQavEyAPkaKNNgnrwhwDfsKq2P4DtPBBSiaXHoVtMkZ37SL1J7hr2JohVHq",
  "key26": "3Zag9dLztHY7UTSiWUJTPnbNtXGsztLACqiqgp5rASp82MjaYLeT7fTSUECxAtsD5oYaf8yFUhrRmqqmBoASybDp",
  "key27": "46vtnnaHCy27EJM922TMp3ZJoCxfVZcdw3KKjWG4TV8WJJVZ1VjhbKL6H5GPM39H9491yyziV6X6KX2YmBomzD32"
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
