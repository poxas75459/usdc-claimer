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
    "3Ei8yNYCqP91vxxNAVUzevkJAiEAppSe3ZU1y2dUX5DfUCfhkoe7BXfabwV6UBQvbbpuXE1ceAyY4t9j5cuzh5Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q286VgS1CKz7hmGDMWSeuV4PFnJFGL6iukzD6aNPVsrggEYdstGgNoiqEwgaSZKZGYugBHDk6e93ngtdJ5SACww",
  "key1": "UeTrCEtXynXAvVpYFVDfJfnQdAELHpQKUXhZZwaWkFqnMhurcW27KZBpuYmgBQrAH4YdoM8mZtTctmE6WDc1rSF",
  "key2": "2Jk5eCgXWWTWr7tujzCiqdf1fRzkcEJXYV7xCF4odZRju3nMAhTy93aha36BtfTKRKrzgHfQiPqyGRj9g5JeN4WR",
  "key3": "sF1CkNZkKj4uaKAbiQBecvPFMyafGJLnjvxzbzKVCXSK1R3HrfsfggZQj7p5w1FXQtEeHAQ4UkdrqddeAfbANwW",
  "key4": "57tF2vgVm2Z2wnYiE18s3VTCxvLtPfYyu3D1fe997buVE74fumDHnMUJoUYSKLRBjsCJinfmC1eRNCRpUVZtenTc",
  "key5": "P5B8oEf1J4GgmpwD5Gr8zCx1CGZFW8TbPFKfqq8hLMLYu5BNfWWgW8y9JJTXKuAE4qmE3Hgq8d3iNo8dEWQ61za",
  "key6": "2jHbrVCsbz1bGqfvxRqEnF6Q9vLLpsj1VsKAHDQq9fbGs4KYHgZjY1RiFYxfJWdpS84iHBJ4yDGSMvsZKDt8eWtc",
  "key7": "4TRBoQrDqRD2bWYn1rYxBVX4fSemjf3hxQnDc74dtYMJNPSVY6syMZpsqrJUnfvsHwasgPPL9Qj9jx5LVVkXstw5",
  "key8": "2dCCTq74486Pj8bWDNfoja4FriWRArn7Lx4HQe15VUaEG1m25yrY1fUggSwSDmFBNhtpYfgWEQguu1XCA8Qiouo5",
  "key9": "67T4SvjArs8dn6ZWbkDm2PSFaexdkkUtRAbHTjgd1EkBiiBgDPi3DKksuvqPd5hyvK3JibV12KeiVBaSZKxsXpvV",
  "key10": "526MoGGkzFKoTksniQJFP9HBEwtEksgAxa4pxfAqyPZUtxVH1VysrKu75Ao2jjoug9Rg1o7eXxSA9SXbbRrjAHfG",
  "key11": "4PAnsM51VMk9YRDjhhB2mbb3B1KVGb5GdMzTaktWcaVNFxi6ZQjg6ZG6KSF1wqCugZcuWVQXgYJaKvmqyEfPwgZ8",
  "key12": "4gPMPt3HG632BHBdjByBgpM6MFA5HkGYqHCUhXYqigyc73SRfFWhQcJYRaXDFBuxQVvjpwMEyasffGKmkBQaq761",
  "key13": "4rU41wJXE9JcKJ34qunaNXG9g4kcbrm7QaKDMwXBbS23SLAgSyD1LU6rwMppsiimv4a4JwxJnxcnmM56VNn7uhRN",
  "key14": "3GwurcgSTumZhgmXPSazab7abyuFCvRuG1SLyFVoVagBB8qJyoyVeGjUzhY7tkTMnhAmW6fCBY9WJq7jKB1riRvE",
  "key15": "2XBfEpAHNvrycVvqb199z1Hprv5GGZp9cbVgpGFihJR5XqMZ3gYzJHiwB8mLwssDhXggag1CCr29NDWCSw8Dm7Vi",
  "key16": "28nm5rLuocyV4PPaU81wMmoCQAY1nonLppRzKqUBve7Eh26ueTjpFsd1wjzi92VqBXk2NUa4wpQTHfvX8xNjBTjs",
  "key17": "5vSa9CWh1QfXhUpj3VcUX75vvP8X5Xz89tunYUFYNgbALckofoFmYgDXmhSUo2tHLaxxVifhXkFahVxamhdJMw5R",
  "key18": "5t3CCnqtpEdFm1dwoftxerF2T1WW1egU95bVt6gc1bTG1KQRmfft6D1joLPfxGpyC87jtPT8PiEqFgncfG6xN1xq",
  "key19": "3wnmhZ9oXywJfzi1Kohc16qkcZ3Werec8J1XcqpAGdASoTVAjvBnHqgYy92F1RhTLtzJEowvsPNM1ZEPWQaz7Drt",
  "key20": "5z2LsZ1EqG6s4ZiaWHJA9LGkbHBZfGPnHVoSK922J1ghwUa3UTwvyFXudAdZBjmcQ2BeZZqgtunKUiixKvai7Bup",
  "key21": "5wAQN91cCsBAjrqDAQHvqwcVNKYwZtHK16QLHds5yegHkHXi3YgJqLJoHYkieVHjsTTgTcapXPXGKg6YHqeZWefR",
  "key22": "29DWJp1Aew1JEGQrXbg4m2CwiWDqiRXrjrC1sw9gtNY7PDG8B7ZW4bk7sUq2uLJKSZLDczeUn66A58Sw4ZyLHT41",
  "key23": "555T6HpMjkFBKcrtZSg6CGTbRTgp3tSURmKNxtJprTbdqttb4zHdZLqp9MVwvCWVat23sdpLPMMbPVkrbtRSpJXU",
  "key24": "4y7ZdYdKXki2dzRcJHPMYrkV9DFHqHfz5W4XCAkXinVHVRwTbnAj75HKK5nti6x3PUBAXwBnW8zxG82q7gesvsZa",
  "key25": "3eMrGRe7sSeFpjov997bPQKJpMv7cQ2K1F4iegezXdYa55QUm7yRRfxPFL7cEHmbrZSBhLh1bHnD9voDZiyKGVnA",
  "key26": "4w3kXKE1rKHeM7UykSZYzsTeHyJtTCQpdXdWtfxwyJc9ixmdismbtWAunTJGe5fTA2NeRfPhKQhtWqsJYB7Pr4wk",
  "key27": "3HSWWmQrdXF2E4DDhsRhosnuvyo3NpbFc5MuvnH4Xpo7zfCjNiTiUNGKnvLpqR5dj7qDQssTeXQVoE9ovv1XYXvv",
  "key28": "5Nz7B4RH4E35QjEDgfSVNUMrCAqZFr1qK3DRGNS8RKWpdGGHNhV8JyrhSwKTgc4H2WvT6EdtkAWZewwyD81JWAMm",
  "key29": "4hDrLqbTmiUchjEKCHPF93WjUUesSnqSWgYfYhTPimbMFuBsVCDcCRrYyp2SDCPNV6tmvqQ9fzv6dpEpuiT82adQ",
  "key30": "3fQbANjUQ2kzn6SGRWCaHzPbN4r2HYgbtERYokDN6X5QqqMGcTP9ahC8UnqN9GecYtKr9Yunz3QbsRgtLzQDNsUx",
  "key31": "3jSwcYFBYCUxSTCtDEia2jeaRxyi4iq3kEuHvMnL8xWnieX27ySw5wexHbapm2wnfW3PnNtHVppraBGMKHACksTa",
  "key32": "4j6PDd7CRBYNBSAbfrYH7QXR3dh3oig557ySpCiQt3tUxt2casLihxZhCvDBoYKiJtmqDrLJg8Wmz9F8gKuQ7SDh",
  "key33": "5gR9ADJNtR3vgNn7oekFNm4eQnUeWHjknAnMKhSQVwU6xStNqhadXRU3QFU8jh3ekxZqNN4XedDt5ZNm6VK2DX8h",
  "key34": "38FawDRvkrAbnLbjHWUkofk4QBVvDZ2dvy3CAT3WekhhTJatsiaqhgxK9UMhZ1MHmfhv93aRosT9cKLuAKu7XwML",
  "key35": "3fY8dAgrKHt8sxGExore7kbf6dmpW66HfAcYXREK1SbibhPD39xQGxUYV8JHaQZvrKZh1SxL5UsnovHegkjopfXg",
  "key36": "2KTQAsSLmEw8sN8VCJs5N4GBDLTY8LEysBDi6RP39a6g3XeBH4NJ2MTe5R4k6S1xaw5d4gdG4HULwcMZ6wbWrTBn",
  "key37": "28HZciBega6jwzRa1Kc9m3PdCUoj4WigGAgfpgKagvHRBECZriBVkK6zz1tyfAfZGhJD4uYE16fDkCh7mpdiYgF1",
  "key38": "2CwKXVx943Z8Ta83s4VoDhveep2u8krgooVgRvCXYWKyibTMJJY8n8fkxCfh27ryev5mMStKSY2idE3SafGHjssJ",
  "key39": "5chyxAYKDMKRLL1UBd9Nw68LxYbUtNf56cygFiCSaCo77C1hthuUHKpu3SKXRkWbvs1SGjRJiVUJ72nNWQPcsn9K",
  "key40": "4e5oLxTyo16UUNnqaSggfumdhiExGP5ofGPcNjUF8ZJsQW55q5Xi8d7ivJQ9Df7yGYR9WjsVxiJFq8JyFx6et5AT"
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
