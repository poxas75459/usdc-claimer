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
    "5RAwh6kBuB1LYZ3csD5qLAPZGMSULuTm4UtYJWv1tU7CNTfQqyvNfC2QHihpCmJTuR9wHfd1CnFfRD4HmEKdcJjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qoFQFdhmuFoRUPWaeQN5aNV1jfFUyPDZSskJ372GC9Pa9v7dZK9R2APWQ7eTZKwTddLGoPHJoAAYf6N6RL6TvBL",
  "key1": "4Zbajg8V8pSpeusAmwSYczKj1k7LyTXg2ouGSmQQvoryd6tSb6BvkyCKHYegxSwwt2aUB3cDVNTdZaqLFiuE2g1p",
  "key2": "5zne6mHM6JcPPwDVBPb5pbkZ8NXYYcESpDrwwrvBLmK7EvKRGZkTdqAXBrEywGD4Uso17pL6tC6A1PQpvh8qmRkE",
  "key3": "3jDMzvCYTWAeSb65qg19YRbM7PEB53NSc6Q81m2JFpxMsoSXuJT163i5GgUSV1QbW8LhatFHiKMiQLMEAkyJD3Hu",
  "key4": "2MQ8uGwA6fG2ojQYHN6ynHt4n2KR3fhAV8qtLG1vxAMDfGnHWKXMiiir3qMbf6Be99Ze8RxHotEaUZkx5H9t3kPc",
  "key5": "3qmHqujfPBy2vHnpoP9GmcojYnywZEW9PqhR7s8bn5zq6K8nSrvhAqPVgZSusPFpzvtxFA2ufcmBAFJamce2dLrU",
  "key6": "2XdEviWGwcUJxiR61NPFzcX8HvUFQVVBHNfpTFGrk4gLCVKMc87sbykX6Ngpdy9ndnwsMjhy8HBKyQYfM2HLEAo7",
  "key7": "55kDjQZFueti51bRwqbuWedSj3jX1ZKcSwKtYT3fd7UbKfn4u2AERhNr6DRPwRC6yNFiEdpDuVM6sD18dfjo1dAp",
  "key8": "4dG7EvcrxbatdCemAcpqKjpPDJtqVz7Eci1i2v3LUgmBhGrtGMhXw73yUmNmxFUy5aZXZkP5iGi6Maqsc5Sn2kXM",
  "key9": "4ofsHo5L75wrpJ2m3DffWMfvD7n3wbjAoe6Mb1wvKfUgtpMtkoUNPS4Vx7ibqK2K9BiNpB5QRuRPQUqECzgQW25p",
  "key10": "25LiVrkTwPmgZ152kEfQMT6ZbtLfmGznpcEgLeq46CRuNRt9HPtbK6mrCLMTKVf2mXDZfF6mUNS8C19LdkZcm2JV",
  "key11": "3mygTSeEfnjnR3eYRFoPhyzJJXxm8SKZwzcs41q8Q4fKVJoyUzAAapd9eDHykWFan2uBviTUwdDk4Y9tMq2rpF5L",
  "key12": "3EUthwkNTTUXs56tU5EkwuEQhLwExnyq3MiNtzb3UGZUC8u36VYUT78uMPtbLmDdVN2Swh7HWTFc5RYW37xDPAev",
  "key13": "4KaqqeZNVSBqSkM1Fm81qvgmvFdDdUgg9m4RYdCrB4EV6371abv9eapCcoQh1S3AfEJ2oLeBhTwBQvAtvGdppw3o",
  "key14": "52HKfC91JtP3qQKcB6deaS1VNWPminrrmbdVcKFRHKncGA4ieG5Urwrsy2MNRHgdLsDPdpZXM4hoi8eaRD5YQLSD",
  "key15": "Shh4kBSSGyWzodzfyBDye9H5TZo3ugjth9dHH3Xos7rUC5FekKXuPXvbx9K3EiFxi1CyUfhcpU95e1QvtpfparY",
  "key16": "4qyxRLKGRAvBoGMr6zFB3Fq14eHgq15XXumb9fS7PBAH2Efg2YpKDT6oaxnrQmn6VQfnnVAfGXZhUE6nYvKsnqd8",
  "key17": "2RJLVHXMp1ug74gp6zQafxYLRiLdiVrpsZP3sPMKddgc3udLKvJbRGMiCb98vsneQiVxEaPhZwScKHd9aTVKb2hM",
  "key18": "5PncnHERR9SsQQyuE8zK2munLbgkYEyh6isgoP8Uedugi8WUFJa2AjwacKsMkDd8pktsQoRhPbyHdYVQboQ6y8pV",
  "key19": "5wRcQjb3W4hVy5rXiuRicGtBz6ymFqYatk7QuX3VzAPCfsDLF3P3hFJLJjgm1w2T7CnRtKRuFDNK3nw9swLWXkaU",
  "key20": "3R3iq3i4otiXE1RJSDuVfQJGsnFfBAMnjXwomeZA8ChkhLnU1GFYuzMYLR8j1Dk1fzAokTxehGeFpxLAE6jWzq8U",
  "key21": "2foTs85DADBkLycJoPv71ZJgc5o7nuWBLAyv9K5XoYG1TeTr6U1X7ox8zhSk6fLoPTWQX6pvAafi3cCCh9PsRzmX",
  "key22": "64xg6SNZUWpu12UJsdXLEM5F6TQxtGnaXzT4HRqUXvXp9Z1EZNwKfPAcJdTQNgEws8cCANf2PDEYciEXSmhUedwi",
  "key23": "2NHJ1gLfbnuSQCMoYa8yc9PwAv1DPS6i94cyVZWXxgjBcErHnFYabz6W3jZE1Yav2WFwhScsDQaAMYHXDXRPUj6Q",
  "key24": "46bpebfmHYNTCzB5RGi4QoU3pBPtzT7b2AUqdisH5kGbXMfYbxP5wLMgRMG8u3NksrXMPXPeRmx2DXLca54Drwz8",
  "key25": "2ooXhpVzjYwQonAoNmpLGhTbJDwUpftz74Kef9mRzE6oTvYqZovSM5U8oQ5AamU6A4NqzaNcgTZADQx8eTNcLrtG"
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
