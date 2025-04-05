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
    "411P7Y4Tz1Nn6GLsri9UVXt7BWtguypc5qeLVNs2otJu6sGTgznwLp28Mwrt3QoePSHc2fUB1DxRjWFMqpVnqxu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGsta9zM5C5K5wbDUo3icMKZLN4zRq9pkYQt3BfUhdgihcSmZuDsy3QsXGM444VFKTXMBhjXeRanHEXBTsVYBx9",
  "key1": "3mU3cJrHGHQLLfn4MAsrLQMwcf7Tja6xstZFp3wRBadD3f6NajT78qLovyW4YRiJNubF48CcvGDwowoA5tpo88Fz",
  "key2": "qfYQsMaNcx2s5sH6nRpGy2Sz8JjDXrwpVrzpDt3vp9WgiutSPNXtgLvZegDjdVNtVE4wBNvKCiP24LWvkx5Gq4x",
  "key3": "3ThTgwhHEfbGNcvQmYLafbgxVnHccNkrisvYv5uMbu3ufUZUbR6PkuCJGDNBZLmXjNbbbaWVFJgryuBRfMqHVpts",
  "key4": "JvzG7o9aooAjUhBwUvFyJA5A5AkCvq1g8pYoqtRk7ttGqCKufNezheo6rHEjozRdZoK8UsJUcfgjvfwcPGcqxeE",
  "key5": "3qP7yL6zMPc16VJ8vmtcGvu9xXCYP8VFwLD1QmvkjQLYLuUbPrUqderWTb3nda8tPzFeNWLPYR8vvhHnvZe2YYm",
  "key6": "4QG1DQAhZoKMF7PvSUCxK9Gmwg21mUXztVJiXn4qFHntsz4qrX6t6UMsLR9iYo8j22VLt5uqn4PNKLt1XtkK76xk",
  "key7": "4mMAzADcHS4YS9Eguha6514CSzENdHqQVXbc8u1oZ1nVhfd1ULwonNSGuJpHMmSzXgrNo8gJXqzPyesuYi4wq64r",
  "key8": "2NVNqYH2UK3qxqEcbydt8gXUCY8aAuX9we6Qj6aTi3uRM229Qbgty9iqJv4YNbUhN3wCcZDFaLh5gbXNUmA4pmrh",
  "key9": "5rc7jFQqSv72EXW1MkvZdZcD7GBf7oNxATw5rCrzhyFejPS27o88xvjr6zFxUxGAWzgHwSREjEr14eMvpGUJKoyV",
  "key10": "4LcfW9NepaHoAsEAgMo84aiytCZL4zYmgzD4WcSDufzJYjGuhCWR6FEeWZk7XKCwE6WXMTeTHhUL4pfi9ejGB6FR",
  "key11": "4avQY79CgoPSJbh58PPhNYSMGJBoZXHdM5oHi4fMawtCQVMnbFebvZi3tQWjcZJYSM6y9fYfAXgys3BYoAvAmZQ",
  "key12": "5eYMooV37MAS8hDtDVi9KGsG5LVHJJN67mzHrDGiWZpdW5ktSnQK9qb3SkDfEJz8QFebhb7WzczZYaf1VmsYygpj",
  "key13": "3V1KrFd775JQpX1fytQgH6dqk3vs7MGnteGuYUDZgnAC2FYNBcYuTZ23QxR19ZWueFwqyLhhm1FtKsWmCyhg1uDh",
  "key14": "otEYgaeqaNkDTHtDmpFWdTgcY2epmZ1oqq1f3rYRbDmFBGkLbsCSFAHXEnYk3EuFGjgESx8zchnEKEVRSk6ubam",
  "key15": "65EGVDmDfHLP4q7G148orJNx27vVNVL6QhJknSSwCZ1WtNq8D7iagzPck8jM8hL7d45XUyCc9r8FAvG1vKBQrb4a",
  "key16": "3SV2Ecdwhv6kuFk9YXvf5CEdL4P36risBrgYWDFbgsy6FkJwQw88YofGwCVvAZLZY82QdQ1ui8mj2tFGagPaH9rn",
  "key17": "2yMfsNK12CjnLxvA5yDhcyY24sVZfuedGwzxyqTVbNcufstKWAZt67z9VZqJ6HsfT5jNSiZHQhf285UYaDAUygGr",
  "key18": "g3KqhYa2iVwwbnH8KtK6gJyY3pdHnxEEJjkK6WPzgvVJqSwDymyEVSRzFQDYFsKfJ8vv5TAo8gd3e59U2sCVqZ6",
  "key19": "5tDenymxyctkd3pgShAeAwCVSCSR6dzsEdtFX8do44gGa9uwScFR7XraiPvXeyyLd91rWXHiiQmNWaorqHF27Pn1",
  "key20": "49yV5BbYm7M9AoexyRPaBoACVGRYm9ebiszT1159YuVTnZtemws67FwMNbF8P2nPzoTqQEGfJ4XnsxZ9ne3UdeQj",
  "key21": "62tHuKfDtCB9XgMQx6dKdteZGY8JCBReH3eDbaLKUtFjSACXq2ukbjpZQGG7NHptx4nWZk8hQt13Uo3K2ztVCFs5",
  "key22": "5iMnd4yPt2tfc5mEwVjnxWkjX7pMuhJTGgcaZzQ4HzpCBxhsdUf2aaQ5aMEA6QtihXEqNXq8zWD4sUTBVjvJowAP",
  "key23": "mMrhga1vWwmKA96YCXNpNv1TgNvq3yHQLBJi9JNS1MxGE8iHYQx9H8B5gGG1nsJAAjM2ZEfQzWThFirdZkrqs1k",
  "key24": "273h7vWDZYhb1834ppZtM2tai3oZUkUfgfA2ixidPvPNWfq5vYggQVr4aUmUoNHWKQS7AE1xSWsdupVHPsgjQQQq",
  "key25": "4cHqV8SoNFddXf3D49qAgyPv9Ep8QRCHXdkHiFp3z9CRgenn3j3yYXY45ZBQmXQZWDiym2u6Wog9F2AfEK39XCe4",
  "key26": "3dp4pTxT7RDw1RYdNLHRv2aJejSP8ht7QSAaZuyxuQXBgo5sbgv4ScYrTUZQyCy6ztdHPHdwY2G8pT5yscxBXmaw",
  "key27": "5HU9ZsiKF5xZLSJA7KGgxkn7kJnmDKw3sgfiGHKHLxPm7GEjhtNiHXDpevMwW6AYxv2MYG6xQLAazV7X5fmAXuLy",
  "key28": "2MHECRiazEhQhQpqvAwcNcixXWUuKMbkmhrbw7pkqZHNrqbkMaFhNNUh38HNvZ6qvjs7tzkwUDQ89JL2c4fVB7rE",
  "key29": "5WsPJe8G7voos5oaNv19sqHhGxjdeKWALdUFroNeQoqnXF6kysqe4K2vAHKKNzYgzPp6PcrYZB4ggE79GSwn6yxQ",
  "key30": "3EwNMyK2xPryYk8TfseKJFH9Ha5ReGQM6eCKN7crT9jYmUXZYacUMQWu4tYp2ZxFijS2Zy1WsUVz1yosEzG4ESW8",
  "key31": "jrMwhVKEDRvxQwEUK84PvnEdRpmBCaiLxycN7QXdvxgdKhwcSPJwHmaDeH5wRj2dhYCRMDnHmkiaNUTHn7q5PY3",
  "key32": "3EEpUTUne3t3dpsojvP32C1hztVnySzYXxyMcJB1AL9LbeAX8DZAQCBwvRA2f4pxM41amkLsGNZj8Rc9sEmX3VCY",
  "key33": "3DxZb82DBie9jnXtqiQtePUdg2GZPFMjmto21pq8BNHUHor3QZZsgDBrbu5XHnnnegg6CHn1HY6k9ZUFTwVNdrE4",
  "key34": "39NWrzK93TYaehpy1D8WNNZWkFGAMarjF4CtEcR7bUx5jf4VnMdgRSHiCtmkQAve5KS7eVmASwVxQU9Mji1ma7xD",
  "key35": "5izi9ysWuLeEG888VMHE1EoZvJ1SnuR1vvKvzCdaQsWwrcEFTWq8KCVzSJwouX2AiRGZv4vrxPh58jtVdYgPj3iy",
  "key36": "3UjtzeXs45NjsCqmR3EZZUkBcwMhv8sHoR8i9wTQearCRXHJkVKTNe7PmsTXNEpZ9D9Bbxp5SmjwszxugxqbW2Z9",
  "key37": "2N6o9yXGm6sjk9gQSh3Q8N5qHekFdz6ebzhgS8PGNfi4vNcgSphJWQ4ZXXF6WdExBV61L1bX9kCeCBo9CDD2NCUq",
  "key38": "29xnYfPSbV8X82CbT7aP7SxFbytaUuMMbSVzEf1maTKr5H2yNZCK5mFyaoEtWqk8EK3qfqdLPP94rwYCZaT29oJ6",
  "key39": "2E6xDuS8stpSM5pUhxmMYD5ojwtspNzZjV7SQc2mWvXrbi7TWQ7Mzs92fHpFNv7LxFZitJMmZnK13X2JGJqV41CU",
  "key40": "5R246HigzJUJ6GEwpGp2DKEj9YPHL11WPTjpKv51FUfEuyDkxf3EU9aTmeBd15oEyyfYMvyvemsXNgCdMVFDzY5W",
  "key41": "65pSc7hDoNJPLc4G31GCGhuBLPt6Q2B4ZEvzWs8c59qEHhTkHYMAzGte7bf5E7UMxqwV1ZzqgYqfiWKhQMJQGMec",
  "key42": "3wPBntL5f19GcaRodaswXJ4EaN95HfRZhgT9R8XLyqYRLWgaF8sH7H2WtCBTAPzRDKimU9m1N9NHWarAcgN3i24Z"
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
