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
    "4aJJGekLr7nDKDzyfRirDfXFqeL7K4TT9RBgKoZB5S3KE2eqFcikHNUZjui539nnrMu1E5XiRFX7sf1VXDNrT33X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YqXdQtutnBpZv9jgWTywRT4sPEEy9e6AHah3Jrc2D1TjwhBnAAEmeED9Qyc5s2nreicmSbvmiKhmYYwwze2TDja",
  "key1": "4dr1wPvXjGPxskFBFweQcm9eQfSR6UxB1sWYAbcC8qm8gR6xJFSKuE9ewUVgxLdxMetARoaZd8rhXZQqiycQDJ8o",
  "key2": "5QMa1RBFuudkwKX6PT1MtGWeApvZJNT3Uiy2V1JGeNS98esoiokMxRgSZY9ehmNeRwhUvRSmUBBR1r8YqeLJ5AXU",
  "key3": "2AYZJ73Xc4XcoRdHu5zfdxq4yeHbboYanWtK1tn6bqS7U6JY2c2ZXkZaGbP5DaChuPFKLGMYgvLGqcxQC7hrK3Gw",
  "key4": "65e6YVoZYdvTaqhRi6r9scbY4CjP18NF9qv444JuAxP58iQVMuMekhN2Q94TN3fwzKpVg9SHgYt7oZ6PPTbU9aUE",
  "key5": "3ZKeVyguBAsMCxqFbFAFyxi3vJxCG9oN1TDdNd5Zzarc6Z7pSMXJYbZqEDfQs4Fs2mn6VrHrhVdDHYr3LQ2spAU8",
  "key6": "53BqB3URDQAmuh9XGAUezyhe2Hb3tBZQv56688Ewo16hCzEdGBkuHsaqgZfHr4ViNDBxCtqt2bKdMXXEssc7XFDs",
  "key7": "48sZmfJobJ1kraP1HuWwyZ2JbvjvpbPMF8ikxSpe1SVUP3F6d8Hk1982y3yfvazFiczVHFDc5conv5vfByvoBADp",
  "key8": "HdYnSyFQTsYAn5PYHRPMC1q3n9qNLheyADFssYqX7qvqdEXGrMip8nYQHRqW8F2efLThcXweVu1pA63viE8snQY",
  "key9": "3sfazpwe16KvG9byv8uqqHR4vDZu7mmzbiL6NTLTUyri2LxRYL3Bo4zd5hwnEyiUbXZxsJu1A3ck5aGJZVPSG9u3",
  "key10": "4tmRTujcvNfPFkNmWjgAnhRHvPfYp9SK1ekS8PJjWkZxAUeEJMscS56vTudiGFmGpxauhqm9WXsLsAKEzJLdSRNb",
  "key11": "5dxsv1FwZKDUPtrK2ZaX4kY4UVbwKocvgqQKiPrmd4T19iHJGCy85MwJmwzHV4Pz3Autk6RXMftFETLC17fHf3nw",
  "key12": "3ZHpreWfUtSiYoCDP7XaMjLNZPE9hVyAoA9VmwzUD6YxXhpkRSa5Dk274TcQDcn2BXHQ8rFYsehB7K7QdbGF3jc1",
  "key13": "4zjuq6L6yxZyC4Jka2d9d9ycXputNpaJPugbteRceWdVPxKyDU1VhV7yh1PQuPTBxJnSNL1Jri2JgP6uMmUgfQUB",
  "key14": "5UietSYvMV1yy5qAq8KcDjt5a1zx4qFQshpTFVoMKyb2uk7hh6ozrEaNLmLaT249Eusaohc2qFUidXNhoQZn947u",
  "key15": "3dLmwmWEyro42Ab9Y3MZjsQM2Cimh6wGCxxG1618Cvjkc2B1fDphQ52WmiWN2F9xqjsPjNtiTFAV7xQX7ZRyiNim",
  "key16": "3XiZHdgDEi8nvmLjhFACM2kuakDsWcHJ7AL9FXHYaKTJ1XFGUs3ZK2pjKQy31rnFF3xPen38d2ubaAPkqAZMnmpN",
  "key17": "3LdVtXeetPpJcUjoBjBDLPDogLX7FarpPjdw5NH4gGAU5ZvGJTrsgVqP4FYuv7WSTKHoUAQGu5uqu868eCSQXinb",
  "key18": "3CNsfmBN5M2mSpUn91Hv1udg46MiFcU4PpzoUqTyzVu5Ln7zKhqcrD1NTGiyKkDNmBfWB9KPs47ghRmNjS7BeEBq",
  "key19": "4bcZkLq7oAZuijXfLRbtQfx1xVHQAFgGEdA3RLiJpQbEmFoL4QGXMMfyJG4KmSXXVXnhsdRxh11VStwBXYarMLj5",
  "key20": "4ZnFNsvDdPcUBxDJorisGvBEteLNqrV6eHWoyo3xXpLC1FnbMvXB2DiyT49EArCF16q2y52XavTpDoRqn9FQhHwA",
  "key21": "3ntvYYzBYddL6rVPj36v3cfDpDLjZNDTguY3SRdRrUQwYzmRMb7JG3yQcHaKM1mZc3RXZUTXkRjEodCWt7PQ2RDF",
  "key22": "AMownMAbQpsBbykR5DDK5daAtBZ8EUGeFNEbPTmLiGzmaLTykWz3Lm8zosyDAha93526Bjcgd6Rr1MVheX2gMTC",
  "key23": "B7JJZYZaHUJ2vN2pSDPdvk1u5mmp2op28c3k55MNzvcZL68MwNnoWg9ui7HADwZRyj1NdLSnGoxEf19o4KAsT3y",
  "key24": "43EoVFc14G45ih3SAqUZ9AZfCwTKgFmRBc43A6xus9o2bnzGzj7rYCSK5TUfS6nQFfs6c87G1VQMoJQfytjuwBgb",
  "key25": "5rgvsgDRXxRLqsHHWtP1bFK6Gqz3k7UsRxphJHPeUW3CtYfsRB9JKNF4VGHp9TFiFTwhwUtjMGVo1HvQdHaj9ihR",
  "key26": "4grFUTjr8EzdF7qhP22Mp2PUyTfxGQ7LGRGRgwrUnry8d2JnzKShgJw9upBZUKLWTPXLSSEpAxgtvB6y2rw8LdKc",
  "key27": "4itQeG6DCUArsqgSeNuYGn8L4qcHVsopmrdpvcaQWvH11s8VCuMfNfSbCqxzTnQSdQsUdKNhidb83rovvXW66y1V",
  "key28": "pEEkL8Sy6qji5rDSsdLADttwD4pfoVi8hqRkCT2mx3ELEEgsV66zNtMy4ocgB7b9pxqokjeaHa4eWfJzmskW77Y",
  "key29": "36GrS1pmknjRBf2QCM2zwvUQmJy8TCKhCeTKpdCmNXs27maodfKevvSyTuy354SZTvaprs7TLPahshMzULMMnRHa",
  "key30": "5rXtREMitpJwcjd8kNrqde8Lf9w4EJMqUrSFH66utoEQZJC6tWoypbZcpG4rPa1xShw27HPC935pwCRLwESQgSnx",
  "key31": "22An7VWUaDA6cXupShx3rXsWGgn5drBkYRtrDqpf2ZuV5NwLSniho8ezym5n6J69icBS1b45ooWqS9CtKTmEs3y5",
  "key32": "21xFwrqUCYXpcHPhbzfSf5ppkFfY8KWrfoRZ7wP27FNJRsZy9GpP7cgyoG2DwTkYFUAaF85nJzNnuQAKatmHMpTy",
  "key33": "5SY3Dsi6bPYtVYqxEHXmYQVALiPJUrd8kgBMFaC3VYRnDYcAQBvGcoiwAeEybGt9uozQiy5x49TU9H6fgM3mLYLK",
  "key34": "M6CMYwpooFRf9bDko7NN9DWmyUSW4iFSDqwTnRPfZehSvM8mWdHLdagN9aG7jGAzv3e9hfrTBnEHex1YpszcNFe",
  "key35": "2sFARRhsp4bsPsQRT3cTF14KvUWo21aYAhPkovPzwDD5Kq4Za2kQ4oAmc7JfghoGURhjSVfLxP2RNsDw9QnxeC6g",
  "key36": "HzjWvb8Tg3W5HeHc8qYrsUjsgRxS1bDwdfyQtkVkmNY4pFP7S2VLfGi8K5AH3xTgNdQygVgjGsAk3r23jeCcmbA",
  "key37": "4TDamAeHWofBVEyumHshL8Fsy5AqCMHjVLiYmrMTeJemXRcch7GbqHXLgYYuCAFEShGNyiXwrjuGisztu81yvj7d",
  "key38": "5USorjJFpjD4e5BM1bBsahfjejqHLZoVNJTDNu5rF2FmndtEefr2wxzMkVgE5G1uL9eQFR8Y1iuWr3P29ywL2rj"
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
