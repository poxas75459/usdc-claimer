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
    "41NsPyYTJKZiNaN41mjAsHvJPmXToCZ5RRB2B3DhrMhQJmgHQmdieGAAhS3coEBtDePNUAYHFaRefsUvzdGLUVFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtWAce8sGBrWGsuj7sUSVBVLkNSgcL2emBX1XU9tqSWDvrv7sK5HhnYkcFZ7QF4iMoie7ikxXxW5WrkiAjnYXeF",
  "key1": "3WLoEwEpRF9qanavCBp3MvqEiqYEVGKg96XuTHNuiC6ie6j3SjGWCYpe34r6xd7KijhVMYufH6pSc9PmqCNSsExf",
  "key2": "2pgiEGNAjhBQDM3A1C6GzKdoZVFJkQG2C6h1KnmekVt2TLzG6ySBWXnVmVK2wzRfAq4rWzKdCNsHDmEsaWvJhwcC",
  "key3": "5VHnqbecK6e182YSpaxD5gGsozg3nanZZpugJWZ55DfLmxHEnTVwr1VMhLD4kecupuch8oDmmTUo7CoVWAzBm773",
  "key4": "4rkqaUsY7YQeuNfKbTRRt1NmgRKmGXaM1Nu6TsJ34We973THDV35bxfuMrAp4FgLuFeAgd4uMFAnj6Sc4FCizUi9",
  "key5": "Mn8gVwgS2XNcSMwF8rLxePB4GxVk5TKR1vkojNu41ahj8kt341733yhSjpjWcHoM71GBz5xPUpC4n4ipxe5udmY",
  "key6": "4yyJLXm7UUFZG59tLvUm9vjUtd8qW5GxinximF8fHSMxFkxFCQjnqxwFJBJxuKFjbiSFkmUwYA5SCmxjTPamJ77w",
  "key7": "yMrjENcsi7yH2chcd5jPyyqsWQzy6u6G1nVKYNhX7ccnqSkS7JairzebsDy9n8WdTFRS4iDxQhdMnFTCirWAiQW",
  "key8": "5fwy4kYntF4KWR7N7Tu9BzMnLjn49t17LmPrdGLT8yCF6HV7GbRYXGYTkUCgKwFR7xhuELNWJCUoceDK7Q7XjPvE",
  "key9": "PF9TvpTWUmMwqafzNDu4bjxPZEqoeAQDoeCvkQ9FoyzgLLGBFvhRwduUgm1Xbzncxr7jvUVRP823fthcmq2stKt",
  "key10": "64jhDbg5U4Wr1ZykKezaTv6ZSVDPNmSrSgVy9EyYMHGxDkdCZvnCq11iDtpSteAo7ABdY2SvccQT6uGfhZ432KdK",
  "key11": "D5hMzeteXBVTkr5a9NS3SjMVRZSvHd4DcKrvNH74Pb41tYidJGKESueYdLoeuV85nyudY2dT8FysDXnoDSZ7Le9",
  "key12": "P4LTpZm7XfvrE34VoXbMakEsAa1khj4MUMkCmbfiCKVCxAwjwgwWHL1esEcXNKxSfF2zBkjeP5b1KTr6BXX6LHU",
  "key13": "2JVBMNSLMuHdzJB3hkYC5CkFHQpVsFcntj3A53CsnvNX1CDo5SJD16aua45gd9SbfzULXVQnAWejuXsMzGsjN5kX",
  "key14": "3tnibJ5xeapNsdeAhu8YYab24gjhJn5VJ2bvoRgdmhEHYRQWt3DFTpxeykoDHVkp45UR2jBYommPYhSXzHrZzXm9",
  "key15": "3BumhafWyaxgSTnV7qPhpVhQekESf3crUM2DUbqus3RdhXkV7HnpFRzJLqKWepdvXnPiuu4jyUp5LXcQUGKoW1p8",
  "key16": "5Hs17fhUb4eZFojZsWsHVhTKi45wNa6755u9gt8de8cxEwtygniKf8sEQDrhZDhyfj3SYsuwp55RoCNvEoHbWac8",
  "key17": "3Pqq6pM36ZJ2MSrjNzSJZ6KUNvWAxRnYubXXucLjG7DpvLS5bRwfxnByDUFxoQL7Gbb11zb17pR6Ao5u6ADfmhky",
  "key18": "4STMqm8JHQdE7hffTU8J387YgNbCJuzuFbr19eLh6fS3VGLHu1eJ18zJ2CeUaGcLoTsvkyXjCA6kEp4pS78vWSFb",
  "key19": "24WwGdzyfjBzYkPUWqfJvWNQT6LtHf6ZuzsK2fGYFVKi46aNRvwYGHcKQZ3gGv3FazckUh1xsi2sKK8EU9krBnVv",
  "key20": "2yRNggpGbUPGvDPWnW6gk57CQg9FtXMmUzBViJHWUks3rxdoEKrSE33TRUdwX5HXJA6Cd5BLrQMeu7gCfa4pfsdj",
  "key21": "3wcE8Ji6P8QJv5zvATKFKy8c54Airvn1TvzGGrxVmj9xAUW8JXPKCungpv49WY2DFkaMniK5zTpsTCMbk66waaCU",
  "key22": "3e8vDs4adqtyLe2mhwq1EAnxMVxwgYKk9coZ6CsPb6FXkg1WsZU328uZgfAbhNsBrFQyoUCtYQbi1apnaDF5pATx",
  "key23": "5P5F8Mi6AHqUT5eYWtS1XKHCDcgCcVwmB46qzmCdJnY1DPMgZ9n3rtSgTvQJC2vVHUwGsfazZV65nTe5xj3jJUeu",
  "key24": "5jdtC9gPjyjekwXr5xZNqLmrB5XPMGb5JMPAq5fMe3u7iKZs85nRoNUPpeVWQHuSDsm7eeXBfgXbKkLJyX8gNdXJ",
  "key25": "4PN8jpdbBHxSPwirHT2hxVCtcQ6Jy4SeVHCgQ1yubWhSuA6J6GZxQ7wVr58m2yW3vC5vcVkdAM45Rp4FjaTi6w4B",
  "key26": "2p7r8QAvfFuoapH6neuuHVrBsaRBtyUsFV13eDZoonFBeG8s23SCiWDjh53vj8hJ1GwEM8KMc5zFsXJQvu4XEqLx",
  "key27": "3Mg2hUb737fCNBz13hLorp3EQr93Vx3oaxRL3dgdXzusV4JmakoFYVaQg762RQSWw3Y33FagqNdcpTWCNeggAd2R",
  "key28": "yZL2CTz7QyGDGftJCeP4z7cCsoW8Hn54hch4yRXzT87wJ2zQTzdCJvKKctqD1isY9KJ27EP2FdTqcZNMTKhFpzY",
  "key29": "4MjxNVB5u4qXcHCk8oxXYAButFNBe4gRxCRky9RCMhL9io2PqUghyRN5SuduNNceNuCj9h7Wb7bbqds12nk6gXDJ",
  "key30": "2tSjvB6PtQf4tAtAHuaqqaa8n75EffTtLVKePUDmAPFex4wYFMPJhzPFgj2EdKrDTnomTJ5cjZxCWdqfzYEYLjje",
  "key31": "3S5nLhkd9mApPkUnc4BLt9U4z7Laufd7pgvzJAEdybtjP8KR8dPTGAHJQNWRkoo7mZ4CEsznVe3PH497xxckJWwp",
  "key32": "5ZqPS8tNcsHuB2Y3ks2dAiEKobBAT9ZDKdFkFDbxRLJQC5fYMGJH3VcyWe1sFgTtFMJYYxuTc2cqTWSsUEBGxfpL",
  "key33": "22Z3H2EWBAvDUUTnNAHpEpMM9j59LNLZENwxjqQoA2CPZyXKAXsic8rRGLXqTGgnwSrcVevxUh8gL7eFCsYxyXkX",
  "key34": "5KymctdmrgtZF3duTworYkfM2a397TgspRfw7Y2ztuzQNmTx2EGuJn25KwwiGK7LLZUPi7p8JNDKP4NkoND1oyRt",
  "key35": "4hSxEak2iddWkykyTj7ZiU6uj98vGKpctu6m5zxWuxYuQ5yF53CP9KRscUpA7bWdSZ4HrTokvDi7QHitD4YDYb7V",
  "key36": "55jKBtbuRoVBaGFC1LwKv4MUkK31Dg7CiDc2QUxVg9s8SF4zD49YQJxNYd9P6iSX7paBfmMFLMEcpGswhCgXKbpm",
  "key37": "5MYZepXPRvp8oJq5Z7zLQwZc3jwGmUbqpgsUYUyNnfFgtTuQB6ma4isiXceqFGJezJC3oVAUSvxW5FpAwR4edUNk",
  "key38": "2RLc5h1Sk535rsmtqQm9MNMgTPUVu6BaxPtSSEH3tovCxb6M5H4x3dzF3L38VnWxcNUj865qivtsMKWvTYhbEKDa",
  "key39": "3XibViVWs76mTzceWaWdEqiwadKjwcuVhqTKhmVv6UEGfhptAfR7evYZ8KxSENRfTrQYwwjBKF2XyJU3tbvz6ZNe",
  "key40": "4udKmSbcpoeFrPpuorzFveo16Go4rguaKLSm7YVvRRYW8YpWAgejDPxw3s4GdYGRuxjK3Y6vkk8xnBB3grgFQX5F",
  "key41": "58JEi3zav8iemyg3dTKxF5xp8GcL7jrJJvkzdeNRkgaMPcJbozkdPMyah9CMr5Zq5onvDkSjdveLnAwC8jetLf1u"
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
