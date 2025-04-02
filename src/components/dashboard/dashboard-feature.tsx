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
    "dmvk2j5Befci4ia5vcshduCm1f6ji2bWbrkw5kGivC8wnuY13UaM46Ab9NS6xCxS7BnDZj2M5jGFHg33u8Y8DJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aWm7dJaKLGHuQai1is2qEG62voWZ2nU26dPpSpQZqzEAQw5ppdoSBYXWEsDyYZEsEkrt7PdGqBmtE9DbUTE81Ur",
  "key1": "3AbqskV6s6uJDJt9yzM71nQF3BFTDwXSjxetyWXAsjyf5kccWW7oPVDDx4iHbsfoqX4w4HpQ9AM8r4aaVF1B7Djk",
  "key2": "3Bjz8mRuGtzHbB9nPCMSk38cAB4tRydFfk5sEDsjTd8kPWTnbA6iLQSy99pmc3tCD16LqXg7BeZFmW61A7v8ru2g",
  "key3": "3k2exgjyCCFDEpTcBGyzykANgTvLshd76CCw88NpvspChoMNkVzx6dfbWsiXkwpXAzdXgqwHeNxUFFgvMeqZBMUE",
  "key4": "g42mYUCn9PZDAg6MpX6qaFhGyuFqkhVw5RwZpYyTevVwrsbmTAHAxPNm7N8FBh8isvJeJBE9cUGFhxcsqwrdfBz",
  "key5": "zfSXWrHMqoNx9e2419qDdTXxjTHej7DPFhdGcZrhyR8e1jauYY75cQR2jrvDWj1oQ8y7cFojv8x8LV9gwjwffn3",
  "key6": "CHJigSAY1p47XjHLNGQeb9jhqfoKaqnhmLuEAgmxfBFhjnx263pykDVH7JwZjiq21ajVvXf41Z2rStJoJ1KVAUD",
  "key7": "35bYkKmtePBd8nTVvRBu1T9GH5LGuTeSdsMpWRi2jMQKnXNfq5FN6YxvXYZ8q3D3jgisRvG4mqfRbLuq41MdY5TR",
  "key8": "2f9uborEtgLgMGtC8yWeyoAQQgEhhT9iAFQkbBdVM56w4dtCLr1tBBMGmkfEeqVsVk3SckASADmFzv2zyLZ5f3B3",
  "key9": "3jx7vrjQuXt6qR12tBCNwnLPjgQbdkuotb4sYf9zJefzvA69z5kRiVQh68WcJ9fLCSvR6KPhJdaFsfatQEaNsQev",
  "key10": "4PfED7pgHCmeEdtZF8ksVKjuLRyW2QLirk2EgJBsrwA3NzQUQUjKQhtnz8836Cpo6eunczQeraXwyPMQZXVwAXuy",
  "key11": "2SJFkj795sRRfQDvhHAXzWqUKxfPmW7Q2ezVRWyPTDU7SYbK1iQjZU9FNqTPJQH4cjnVTntZPSFJs1zNvhk6SWb8",
  "key12": "g26UQGAPzvWwuEBVmSVCVJ2t4gQXa5xg7CywQkRLwBsVQuQbi6h8WUrwA6Frb5H3soTBJYTzK4wCTJ4CeMs4Ex1",
  "key13": "2GuddTviDo7aXXPDZFKsJ24uBn599ia8mnNjuBLeP38gXdfnCU5Asg7eNfWbyGbR91DMEfd5sj1q8tmUVt5kGws6",
  "key14": "5RCtbo8bJ9YXLVoJGVVVprMUF9L5AgZTqXXCU9886iTkDQ3oGEjM3vhnoygXfhjFdTfx1kpBQqGVoiK7SGNPq8M7",
  "key15": "3Tyv8NiPFdX7qo3h2BL6YSqQqftLGZip3D2y3UhS5SAKRGLf4UQ7yLDUS2Y6CZ1gdFCS9kyGhNs1QqS5X2A9B7Sh",
  "key16": "5SG6rcDY4BiBwgntCidWpKfp2dFgRqMxPXLQHvN9Kaj5adoeRnRbrqnrxUbvUFyaJsRpj2wHfonNFRFqrzACVaF9",
  "key17": "62bfr8H4RiVXWuh786i7nQiBQib6VbS58T1am4QmC6Dea8TCmHgWt19gB8pFSRicL4e8dhUnMPAws84sB3R7rcBA",
  "key18": "2f6NvJ46k8iv8qyeyvetCpoKVSPzqShvah9fxbr1dKNCAqDWE9RdfctvqMkZKwko4mUKPct23oLb839vTmfTXGgM",
  "key19": "41N7iKJbWwQ2KBf3QZbMKYy6soptEjJW72go83YNX4gjFZgsKJoJ97aL7aaLPSQkhtt4RbB1xe8fyJv8wAJDDa1A",
  "key20": "RJiUXHraTgMwHFxh1WoKeEjruSXLJxi7xnJDQd2JYayQf8LdoCF3jXwExy9kgca3C85B91MjAXNsrQvGWBvmiF9",
  "key21": "uL3gWbVb69uXBSNj58BmuPU2RGkbwnQXy4TQdkcWVUReM1AuYA3HAy4PRfSSd5Hqg3WFmzikMGY4z3UkP1cezQ9",
  "key22": "5yqiYSwscikB5KnbxAgRAhdimjyTanBEk7YGWSUAbphgL3RTSSFWeTY9dLeFc4Mj2FqnZM4mmk6wgzG8hrB9CKyR",
  "key23": "5Az6anmtowBFuSv9ZnpRxqB9VnhGKcn17JKi9rN4EmSkkPqa5o7u63TMWXiXPNaTzWq1RpHX5kGGVnsxhc8hjZrX",
  "key24": "4KKcgHuHq9jdzjVaEfVmhddxPtPFRpf58mghd5Pk4YbRrhxPbfJ3nGZNC1KomoKHoMpsnf9g8CLqAdn7r96GgVrd",
  "key25": "2mdp55KCTuY9QdwdisRduRySLCWr3FpgGJDjwWGoKe1z46TsXvbiapPjd1C2nLCQsTzNiSDF2N2sRMhD6ShvCgwY",
  "key26": "xEBNb4uDB6Levsd6LhTrLm5qHQ7ivCEuCMUyf7NfZ3D4bAaYjXMG3hJHD8sG19ARqyufCEiXctTecmLgEWhtDe3",
  "key27": "5XmKb526xX9bSyt4YiM3fHUMH7hmUFQFEp4cWxrea9i1ZQR2wgqpj63VJg9HcAKZAZ613cLNv8shwoYSmxFjjXDa",
  "key28": "3dWAiwwgjufdMqxWSa6Gbag3kpxJi13KununD9LQdeCPix8DgxPuxHpZTHpe9VGoXTQrP4Sc8mYz2Y3aM2mReCZT",
  "key29": "2zGNtmdHR3o1RUfiWrsZJeqb5toudiAa6rhe2Zcdgoq4yBabufCTEUjPTtY3FEHuACzfNbVdCvoxcnL2P8Shwfcp",
  "key30": "yBBa3aAcNqRKx16BPeYqdE4GKhAcNWEcCfDBQD7fbysTfssECqYosy6pLQ7ZW6PieA2HoSsuyCdc7L5q1n7V4r7",
  "key31": "3gGAn3vQz6aGGirmT4yg64R2gHjQpia5aqpAmuZ1AbLRoJZYERupHScmqcEXnLJhqFkpiBV8KLPDFBNTaKiPYJWf",
  "key32": "4HB2TadbSy9Gk3Qe1waRkU6t1vXJDJw4ERNFC8oq6GLW2geQfZqsqSmJT3gkm6rjxAfEt5aZ4rVv9twUpdf6RvSh",
  "key33": "65VAsZsBFPPMAyKoMFqAX4Rb6VNKcwzNvPsaRNYWRhy2jCwwuGveVTZbthMueX1UG46gDNkZCwqszz7ubJb1wvgx",
  "key34": "4pauHEUch4MspFHeU2vZtARRBihKcqXLutJqFeVhZWs3TDgmL524AAaC7ceDYFFUyVwUmPK9a4DeKTziPtrAkWDn",
  "key35": "spYQcCD4XRs3WJtQnvVSNRKnZf1f77jYdK2eggg6hcehkYBt9oikSxPjeYDna1AkbJeRLVFh2KCKJhMqfyWGRLR",
  "key36": "L2tnM66oa2Ppbu285c58i7aRtcXzsiUZsggUmvJhFonM2nkB3DWCgtPEYipkvLfWBEC7GZUDuK21H5DS8Rf7L7h",
  "key37": "4P8e3sHLKJDRiRKn3LSera62iQhEQ3RbGphxh1BnBUGhwNsFmBF5XsoLmREboF7FcLP7eqEP3HPRurMmH2xckZA1",
  "key38": "51RyiwfvRiLGvScuBU3vJJq7HeyVtTebQ4UUQKJDFM9brMjzNYLHjSzZrmVZPUCFjhSzSZ46jwicqfiYBTTTEjZi",
  "key39": "mtbr4Xvq52Sw2RLR6eGoJqEfZ6WqGAGnJrXgnordAV54zVqPRjTmTjR4qEDxUXnpTotDKv87MCPh5u6ttsctu1g",
  "key40": "4waMdhTLgnB7f2iebZbq3dGKHJAhpkuj61fRR9Y2yhbAhzuxDVSoP9vx9S7LoRvpSrH9rUyZcFR1VgfYDiwSvoGf",
  "key41": "5NqwUsGP4jG5Sd6JSbFJ38wYxyESLUKp3FjDyffJpYjeZ3B2VNYWo7xrEezJBkAw5TmBmuQCEhF9MmwNsTijjW7X"
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
