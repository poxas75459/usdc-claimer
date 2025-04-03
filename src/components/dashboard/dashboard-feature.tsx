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
    "4B518DXwX1tpSkWp33mVpyfaxJrTYNuMfM4u4YrMXr3jh2dpwECE82hdCrsUtLChKQyK5rh4DfQ1Hasf5D6Qv4nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8tEoaY1pMsbyLi8rPoapTcew9QNq3GgBX8gFY5z4mHSEnjpxXo4ZNDCbHFM7LEh8oJhPRYRZJqnsMewHGKfV5J",
  "key1": "3zYP883eAoLsxe976k2hRzWcdWqYiKaYF6n84NLnYw9dS8671RoASjTCv4e9EAfDfmiDbahGnMz6bKNXnu9A2cPz",
  "key2": "5P64zp7WD4kQ4ZFseGHmPU22ZzUcqrK4nqqMqNCqEgyGpr4fAL5VexKUGjp57eBRHiDYivxP4YiuFEizekjei83Y",
  "key3": "zVm6ipC3bW4kmLYrdGb9wsZNrdEof4snkKCjMJi6MtZJUTexyPrW5P4DxDpK3q65nVY3yPbPorZ4Djz6p44Udrg",
  "key4": "4jxgq2Si43WtVuVcFpHm1hv2PKpEszr6PMGSNpfovFfoz2TSwKfTRk1jhPZ3EERr6BrDu92k3h1e6wARzSsueeCi",
  "key5": "266rZ9goJHVy4RKV1DMx7rDUrCnbQB9QUEP4Xs6ymdtwNyWSK2azbuVJnaFxNSv1RhDqph5ijWxfXxYzKHyduXxf",
  "key6": "2mDcLioE8XnpehvnhMPDNFuKS3kQG6BMfPRdyUkKF9TwjWSmHierDgL8nQogdHmPMptg5gUFySkuqGDr4zgpYhxp",
  "key7": "5PxyGE4mCPsar33LJWE3ifakqNeJn6v1FDSkbQqYgaGpyvq5fCfiporw2wmyh3XGiNaeDfiyuyLUXdQj5ZVfMRFq",
  "key8": "5Xn9SdzvsxbFaT1J5jc2j9EwRavqp7TXE6c2NRf63b4nk6ze9qNSXD61WmabS7whFH4ifBmXqWJHCN2TxSsbQwr4",
  "key9": "5ehWBJNn7ucbNWnPSNQTZoHFkapn5sB8s53eyHhBs14ws4ZqwfkLZAbR4hm5yxEbJhS5dHn3TpwucWVWMqMcNzTg",
  "key10": "3Kh5BSkw2389j2vGHKgAHb2FHzfc4GNY3FAySj7fuyXvsm3wfPHAnyo7avoouQDS6SdJe38kuNVpLmFPfRb8ZxA2",
  "key11": "2V5KSGLNQhhyXLV9HkhjaUV4aA7CNYUKShJMdQGLdfqmcNwpgbLp8Yq2bBmJogJphZHXeXtiV7BSd8T6Vfm1GTdW",
  "key12": "5tDW3zPPCXSrE3yjSpGc23DZ9h6AhXbaGjBSmZD73Q1KKLwvBNPqA7aD4y5txpvfVBjCZqs4y4RaXJkwURcvUGa8",
  "key13": "5ErZheZgw1DtjoW9tSbh9qtsr7mrLhauPWVH7JEHvHn1yWzsikLngUnwqFDB5MuNjKmUe19nMqBqGQUq3MnEL3sm",
  "key14": "4dF75gCTXRJkLwDNzomPqMBBDuwmVK3Zov1p7FWNUVBrami9YHKGvVeR1phg1QXKeJDFeS3hfDq83WjguKPh7SQ2",
  "key15": "6Y7wTqLtJMapXed92eWGWsBiuLDzSwGaGgMtjkPMMNreddxJv3HfFog6mSdBMfsMQdWB3RZwmfiCSnBGuPCxwfu",
  "key16": "4uLMbzpR9mt7oYwGrrPu5qZap9pYbVd8zwVe2Hxji8SwxqKF7wHqXgXAeCA14LABMqWtDtVFnPQPtwgUZ3wHrZNM",
  "key17": "2wZVNr7NTgz9aexfFWuRnp3dMLhpzPrRYqVAE2Q8FR9s3H5ks4n6NHjRQg1vPrdbKzAt5ogJo7kTVSXzDYZjEwu4",
  "key18": "3g5QzcmVibVrCgJeERng5od221oESmVvZTJHd1Ly4s6h3ffpx2sRLUU5QKshZfJ7dA2xrda16TFiq8A4oBzx46Gd",
  "key19": "2y9sTQpKc8dN6FrCe3sAtjFSGQ5WR8kXGnSWRU72KHsGW2UeyWj9Tqo2fmcE1s35AqHNzZWqS6tGz4HviaK4a6wa",
  "key20": "54au4mR5zLWMgRs91U4TdCQuz8x8ePvpRHRHEPrkTPDngjtuSZfoAbNHmYgmdMP2pK9iuGgFHCLMT3h65iGHmig6",
  "key21": "3xa82gCT3HDCBMkE8S3qiNnNiwDpMaa9fijexNkzUbTch8MdQEuJFUVYxRcZdyTrBMWggwBUv8CESyaV1Zxg7K7d",
  "key22": "4xDfLqu4CTGAQ3YpLZdQACtYsaLDexhWraycTs62ArmZxdcY6srN1PC4rbYhA6dePW1XwKNcQg6bfyTnEbzBnTHp",
  "key23": "43v2cAj1tWeTttMHsqmtLigXqsuascnZBEGMwvsL3THbXYtSTusCz8D2PQg8cqQtpSHC4Bim1F3n1ZPGeEZuJHKZ",
  "key24": "4mHCidqrt2pvR1rUciQB65FzteK9X1rGAmMUhkjBJ224edo4jtDp9VmdioxvgBxBGd5yQxCKCyf2ocG2jcT2jgH6",
  "key25": "2m8ADPpEQZCYevJHitMc6e9Av5ByVwWE4U6GemaN7JExZUr4g1TVFxUQgVLkyQBSVxjYCEkVAM8fPudTCRRShz52",
  "key26": "3dNBxUkUrmtojJAZxqf5ZGa7Ny34mmkx6Rzd5fUFhjY39HPXCE2rfiLo3i3Jzzvq4hCpkfTjSZQczmDGFeLvPbY5",
  "key27": "4dA9wa2DAb8AAMMiyFDKpcK7zNsv6SyiCq7BaDZn2tuPg4YiaSmwNr23WGnaTQxRMAXuQyrQYfE3GRdRzbyBqKpB",
  "key28": "FN1SY9XQ4nHdP9hau2bLVobn69Gn3zd8pgoH26GAaniYLQ2Qghd7GqHAwnb3cKvZHaZEBbHVpSim34hjaMFbY71",
  "key29": "5WU5XYM7iyazZjJ5Xm6XrxXc6UsJF9ypo12aFgtoaWCWHCXaMN2Q1ECborkT6Yt6r6cwU2GC12eiX3LJ55k44AnF",
  "key30": "4cQXC6qgfRksqErUuyAEskHz4B4qm8QDAaL4PJALeZ9UtN1gGnmGrvwf8zorco1YqHZFpt7GmukqQawvMmNunPtY",
  "key31": "VXFceNa2aBZp23J8U6JzN7KwUrX769bFnCHLRUiW6xEcsj8M8KeZLitU7Sj2zaZaT6ehcnbfsZKvZQ1s3zGYCnQ",
  "key32": "2md6K9qNmpEcdqgEaiDzmUU9hDqoN6udKuHncPm5ujrJ8xSQ7oZSE7x19gw8kP5EgiY7BCxQg2s4MKuvaCKeTQPg",
  "key33": "2CTAXnNdpFbswdcmTkQXxLEN2ijnHJpX9gtAEKinka6xHVeq4euH8bnzFdg9TaQKbJfaBNerWvAprDFu9wB4AggU",
  "key34": "65Fs7Wf2GrDiLvfArRYL2PeTXe9HoNDMpSsMWdhJS53pMpVsqEg8yWBzuNv9Khszs2zWTBowEDDbxxtW5Wcvh7Lw",
  "key35": "65NLwqnQdDrmsCFh8mqxPMZujQqs44UjTFCUU2qYiwMGvcvZNfh5jbFdeuLC1AsZi7fFrj3S51wzQzMX9bDNsePs",
  "key36": "21p3ryP2LqDo8oBwNYv3ZzrLpCQnHHpHDDx3qib7mu91iXb39Rwct6t7SLZ6EEoLvqk5USjCyoRvtKBqGTQ7Ju3a",
  "key37": "3n35bHN8aUkkEaAH2xzDHMJLfijsY4srRzmXr3Ao9jzAPWL19G2UBZ32egT4ie1jPFV1oPipAQWuhWwFJj8LxYef",
  "key38": "5d6WckENM5D8uZ4D3pqEAafY7XTNAEdbnmB8Ajg5mFwniyoaJGy79CFM41ii3yD4CK4hvzfgap5HwLEjZ4tRAqTu",
  "key39": "5CXfY9QniKAb3DihCKX63nDfvzZC4aQBq6j4Wu153APU7ijhrRL6zysmRMFpfG6LBxCMa1cq7QMbQaMFpuugr7Fq",
  "key40": "2ZutFbiWQcvx4fvUxBnLtPsu7padZGQt6EjG1SoEEwyPAp2rcCSbfHXLojHGFo9wysfN5Shm8qzpHT7ZrXMpwHGM",
  "key41": "3T8cSMkX4VpxyWCDnGs8jQjmFPRhwDfqnszPbo6wmEJ7UtcSzAThfQNm8hVE8sDpDMoVmfq2QWiyZdwnX9QmgcT5",
  "key42": "2xHAg2nVm9BDjkyCCtizwTVxn4WZiBukQdrYyFc3jxb821bVg6pGnXmcGDTzjxbdsQW1wca6hL8k5iRYz1pA5VsR",
  "key43": "3EnFZAM4RFhjq2UwTqfG8zyyzRgJSYpuKVWZzfXdwgSKv3SpyCik7NRXBfmoQSDeR3jh4kp19yTZP4kzNtkEWH5u",
  "key44": "2BEMq8S6wz4zbiaDBbbykuJvi5X4crTFQFUogrJ3CgzPDh5uZ2AZSMWjuFEPYW4bocEKa6wDdmFcgGn3Ubi12fdf",
  "key45": "3UgYvaGm1kZ2zqbMT4hoMSumqp2xVAeTnY7FBz3jC2f9g48o9Vfh4HVkNBvCHKXKaJJe4kWh3npVyDgZjQ66vDhG",
  "key46": "38twaSS8b4LWrQcu6QN9f69qpcJC7v4jzN75qMyvYGzTn2M2aNbubN5UMeGoPgmotWkKHdUk6h39MgjcAS46mJQM",
  "key47": "3eCF9tNAxFfq1VSFfsCqSMWTfbAsSuH6kZyAcfN5tA2UE7SXGHwCHhT469aHLbZpGenguKSiczHgZmc5kE8GYarT",
  "key48": "2nZ74cDAAFW61KUhSbJKumRxqXTa3SZVAxqQkuYQkiPPH8nTf7SBWFwAXuFFK54s3vN6dbPNuUjse2recicNapcG"
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
