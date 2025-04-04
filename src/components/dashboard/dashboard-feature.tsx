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
    "3TTFkzZhkHdqDfLezfXfD3y7bNDTefXQPqfrssStTKpUMxarbgJ5FwEjM86Lp6Rg6wtvn81Fu18qKoyPNAx9LPzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZSbB7zJfHx1FaVRX4aK38xihyEG6yHrH6TnMHknNpaq7Y2Ls3EEjVHjJoDc5XBhQN1yeqPuygCQJcHaCVnfDFE",
  "key1": "5XXAr2Rkh6ZtTjGmbtKybapcmnBxCqoFim2gx8WbGwsv7UR8m67GfxEgj5MickBqu4bstbydd8KNuqDcPC8yqY7f",
  "key2": "3uW8vs7DFL9SMBLALzgUENZd4SKp1RTz7jc4NJpSUGu9PTmiCygH5YaMX1z4DzKukGGMj9rUf5uxMrxQeG9X1Tr3",
  "key3": "2HspxxQ5BcRFWLtZutj7UDU8X5BjdwwojGEeP69aJG9QhQo5t5j5T8NQwZyXDx4jrxTvWzsMawPZnkG9hBCh2M7Q",
  "key4": "64evoLM2GhU5G3k2X6eLx7kEjHtZz7TsAz9xejNwa2gkN2iAEBGuePC35AzjikpWTUxb4JjDCELmFkxG6EbyLLTA",
  "key5": "5RqDQE56fL9auxa3ViY2ybBHjpRmr3Vq1T6hMQCV5kCczz5nBNwnRqoGrPAu5tUwy8ZkCnrYRNBeQVMbZ1S9JrKE",
  "key6": "LBoFCffd2SWHb1mAfj3F3WoFwM23mqxXL1wCbU9T13VvvbfGFtkJBHHw8SG9buUCg1uGN1q415mE5STHpCHjLYL",
  "key7": "4bqSaxWvxCyLgyAryg88H1bCTuYoGFc5qcb1oZGYznCHoG5acAK939T2zZFMsmgmFba1xcBfzb2eSmxcKbqFqg38",
  "key8": "3cVtWf3BZxeDGFx7pJQFVrM7fQ7UQjNTGKsZ7MnXneUg5ee1n6pn4wZe2y5STiBS4aUatahB2TzGJpHUMYV1nLp8",
  "key9": "2TkDJsmn1A6A5xGu7TLLS62jqmbS2YuE2Et718g5zTiU5Daai8M8AiCFoKpBPhXT4AxrE4J74LoPQuE9Y5D4VGb",
  "key10": "3zZpgnLbtegqTgRJVNNpuagxkKwDfBLgtQnGUA2GpYsVVmNeJUXWHto2cnAbYpJA7E5ZZyg2nDw7Rv3PWZHem6C8",
  "key11": "QwfCbobwMSAerWmwu9qb6ZZDeqbvGTvvxqv5DfiZQcinttjE5g56j5Q9sWj19PLNLbqMdegrmD8KXUssr3a7M58",
  "key12": "4pK8Bw67fyDWAsEqvfV1LewSpwyTG47tfBTCGumE8uX1sPhBzQTSsbVgMNbRk7aEssWGZMQUst4qYMDJ8TL9RtHV",
  "key13": "3TqC4tjGmit1WrkpJoL7WhxTBmeY2fHdUc45A9RBb1QUC7keSZBaEgzm6yztWayYB4Wje6uT28vxGbd8UTteiVVG",
  "key14": "58iQ8Wbjea2Nhes3xWmFmtUJRwwDiHBisL2hCAdpTace6sQGpWq3DvpL21JqML5khEQ6KAPfJEKQFPt5rmqBuAZ6",
  "key15": "4yqGrsJ2ES8fQZuZfRidj6jX1DgojitJXqhxXr7hrXw341ztfvRS2AztYT9UqAXkR4KM1fQ1jhVk5E7VXqUuAEGi",
  "key16": "49QmZbFn5G14MMTDauHU7zqkrqLnAq6BrTHU2s4HMxJUbGP2yEowVMqNBpFDWB2EEJ9jPnAA6AhRnuRmAo7ydaa7",
  "key17": "3ufpBDja8Xaewi352BvEqV3YD9AYbmTG5GnSkNPFzKAKZtLxck7KX7Lyn7rgUEEN91vQNRT5mrZPcgtS3tEX8BiT",
  "key18": "5be7m2C9TwwdAbxuM29Bmdzar4X5of6Jx8fjnaJUciHLp876YX5LUPbZQZeFjMM8k2qmSGB1fEczYHVzSiUv1Crs",
  "key19": "2HDohu9QoRvufmidxxwUe4fQFBM39zRBHD1ey9fQnGR93WCyFmPEuminP97UXhkYYAV4pfUPAoTVoBBz86ZQb8Ke",
  "key20": "yyasY3ujWbqXHbxzLywt4rYM4Eqih7pS61PY2AKcrUgRifjtU5ZRErqrQz2MPKpwU83PBtGjzogGUttAb5v5kqr",
  "key21": "5mb1NiZPKFyCVXvcen3bKVoD8bifRn4WaB8YmaVwEz91R8UiXXPaDKvr9JSE42fJ9LibzhLUaK3AvM3EpMtMos3B",
  "key22": "2ykvTDt26cgbzqRUNJN9N7bX7zo3ZikiTaaAb6AaWaoPXXsCA2Uw6TvHhBkc4kSsnnWUN5a9wh65QWBN1qHD7cnq",
  "key23": "5HxT5mEbQ7kBjS3VW65GwWaWFQ4QYAzReS72T6gndEVbV788NqstZ486mDs5t3VTb3EYic8WSHw3D2GwVXMMfLrw",
  "key24": "364sYBEx77SN44S5heJax8wGsfJNWcRpdbzea7nwyRcei6wEijqixE8ytCeyW4kMfMZH1zeYFnTxd78vA5YGsKVo",
  "key25": "2GBRJez5yQTs7RoE2y4cMBiZhBCmAY1N7QDCzPYC3kseBVV7vrnr6bvMbXoaGwYfKcaQeyFJzyXdKwTcCrrBnarS",
  "key26": "3eGX6HpmBRcnZwLkS8RWPrx4zHF7Yo19sGaN4LP3QRUNXyNH9PzJXApjEpjQpPEeDBC5U8NBkLGE51r3kuYKwy5D",
  "key27": "2YF5VC2FKRHQ9vvc6FFZjgNDdTRvfdXE2KEVMQ7ca39jEAgAsdfZ4WjTMNRhKLgYzNQrCWEVormB7zdGmc8DDWE9",
  "key28": "fEmcmLEzQWbWNGzJ6AdgHAX3JKP8jG2CUWRi9aUxefFRGVeoG9VN58wH9pBbXN1dukDysaEAWQQkTNshjNyK5w7"
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
