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
    "5QCR39rjtSq7ub7dmCg2eNiTJt6heNjUpGQFt6o6xvivDR6hLvPnfPFDffLQ4ETdpCJkEgFAyRabymnR9TDKaUfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DsQhd9AU3VNgjNpgJF9phqvRZYBEWUhQyApAjms9jQrdXur3WhnLFmDbLnCwZeAbaXuM9zKJmSbbpkv6Bk7LrBv",
  "key1": "2sa8GxUFSFheTq8phrtDSNV1kwxvqfrPUjAYRYt8zYVCSnHHWicyGWAGcnMtW14jX6RS32YFzvcRp6GHFgW74UCf",
  "key2": "398iBhcJ7wGqkioBzqyRrgjdyYdM1RGhscyNMMob9DLw1mN2nySmExhVVNryXDzDpigQPPsxmoxPMxhUVR2zij4K",
  "key3": "3VKXPBq5fyYCzvrwxX2wnm5MJSt6pfwzD1drMmNsbZU8AC45rnZPc9m6ehjdQiURXCao4pfMVhGBrfXoZ8dhvrvi",
  "key4": "62zMTiHSM6wf4NFubgha8irN8XeqdaXYYYx7wozj7x11a7VRFa3TKqdpKWKU7RoqQQxzytaPf6nreccaca6pYsAH",
  "key5": "3XcuuLKkNKrCEFzQoV2bhHvGxVLDkHKFEq8v1nRCu7CQcsgZQUNE9fSZ4jzVbfnZuvEicTCTWxJZYU2PXqaUFXSt",
  "key6": "4fHZfCx4XUPJ76GY94uiBNJ5GLR9qrTjXjejHmAx6VpT9AnaAdLZtoen4Gdrtt2UYbQj3LfFHE3vLGreEJ9EiaU5",
  "key7": "3U4WWaQpoH9E69SG3tQGSKmDq9RbzPYLPq6eQm8nTFL8Da7gN4pfNgAALSHAf7BgLPpjjuCfeGkJPuRCA9zVa8rh",
  "key8": "5J7Cqd1u2iPyLBsLe4i8S5dfJycgPkJCh2SKTobfEjPxqF96zEzkJtmYSti5kzxf6zSNhDFBGjMCvKUkiax4bsxM",
  "key9": "52gofZw3U475HAVczkhYxFL7ZhUtF2XGenuecaV1bsVBfXqZijtc26Hab2wQSiueZzvWLaH42qaZB2stsJjJfyzZ",
  "key10": "4jnwi6UK2Peqmqyar5ZYbBbJd6ptk26GxF8MBbGfYyKRFHjQemaJQ98pNtKenyrFbinMwzBvVfoKpGkcev1N6B71",
  "key11": "5qQ734TiGixcArCTaGuSEuCaFUGvcUuxc5Pdm1LTf5M7uaqUbU7j32rh6h8YEaccpmJgFcqZmZh2QW6bRCcenqkS",
  "key12": "TpVaUEbGtifYf8ckc7X92CHAKLioRZFCpf4WnZWjHE11HFaFXLmjAyfMB487X8WPsD9mimEJHjftsBQ932tkYVC",
  "key13": "3usrX1iAexAHFjMrmHzgUr6jHJfjZBJTS5nLVXgqFvgr6whtoYJyzCSw7AcM3rjKrJbBZCWRq7BRUb7KsYc62c76",
  "key14": "45XMcaya1SQYgmE69kzc3mSS5VDAaCE8gpHrBJU5oRemUKMtbfDmZSaDgHKhAirSZAkKGcEMegCwiMrggw6PNR33",
  "key15": "5y4wLvoH55QmZ3cxaffGQM8xZNbfmdzGDS3P96bUVhAoyfatNUfvM1zbvLwWb49zpvQXg3XYAzUW8M3ta4aB5krx",
  "key16": "3LXpWmNZ1JARJ1uB7aR8RUP3QLTq9YuoVqBGZs1KkadH39ATPcxu9ZN7uXMjuYtr6NfiUt71RXV8tZcagpaMxqe2",
  "key17": "2H4USeTTjW7TxaoaxhtYt4QfCAAK5e2qxCETcxHdB8FdkUhnQryaoon8iVvFzWg6LfXL5McvsjUnhWXPcPuKUtys",
  "key18": "ZftaoT8zECrYqbcfbB9XZhvumVM369xdm9EUS7cCae4BJ2ZuWcaYBzAF7FzUbKmgb1X57GwMGSZY5dUX1d2741B",
  "key19": "vxiCXTZvL1a7dTedujJr5ANXkKzqiMh3xwkYZuTWDEvm288A2SMuSy4kzRjLYsqaugb2fP2JjzAVvamJsoMaHuy",
  "key20": "Fh3UFLfYnftKYS4WtAa5SKv2niEQ2BBTx6uMxf2F8rN5uhDY82jyqiNA8D8vsgaqT92H8R1pT7MQdVr7Kgr6acn",
  "key21": "XeqSmVoGr2YvPGHir7NqHXDnWpKDwNgffyqhhTx55zHcfFD9GvAL7wU6DgKJdBh2zfDLfLNMKmMpmcw1Eh9P8sN",
  "key22": "2q7RduTR7i7UERqjApR7WBEdMFrHjmGW6iEwGzYqsnPtTqLUitYvsFQocF1FfUKACmFtpB1dDQHKi5tBLD2iBWUd",
  "key23": "5zkDW7wyi87sSXjVhkL6MfYYAw7vtBgZSDLkAyMNc2uyqqmqS6pNaTiVRQgjMXrwiELzDKP4mMrfqRxYQ5vc47sA",
  "key24": "3vJsBPxuXcK2MFXpVQ73sDRRXrYFUT3z7ADrnU5GFN87MZ3mXBG79dGBNVRGu83gZpevDxtyyFj4Z954bqD8VXeL",
  "key25": "5XXVbMziY95vMZhdNK644rUPQTJdBRsDaPX3fZ3fSVKz5hs79wWkZbjEqFjaW2Y9NU5r1649667CwhGogiQPgDz1",
  "key26": "5S4DPchWL4LSHhAAqrRacxxVVcmsk8whb7U1cVN45MrjeLXnPwmepDfByV1SQxmAmPME6WTNY7cGrzTWRRMm92Qh",
  "key27": "ECu7WQLjFk2kFPLXAZzkvmfvDM7S6wMsA8XjdfpgVWBixrJ1WETpVBS9PUgTXSzwSrUTsXaBwXkAmj8Ynwwwxmw",
  "key28": "3xTdeecPDf1ymZNa2hd1DAuPNEevABzrkScC35gvE7QPeMPswtj7ViegE8u85fBswQA6Q5LCf2k4hiMykXZAsNZV",
  "key29": "3AssF2Uyao2gssRukDx5cFETDBJk2xzR3D6JNdYMzWytprBM8fXBVeD9zvxJ2qrjB9WK5Na3NSFVtS2MzaTC2kKz",
  "key30": "5wTzdb5V1ToLssRjerv2UD2M6BkGhUzyPz3HrBo4XL1dJLgMwXBLjKSj6fJdCj9aU5R43zdTdN5fwPiFLUVa7HKd",
  "key31": "5CYtzNgHr6KuTxdM3Tt69a1GWCA2MM3gEmz5NyvRFcuj41X2mFpRCqDurioqcLJaT9odNpFJc8kACY7x4jK6tj5D",
  "key32": "5f2x9z3mRPLxLg79TaDVK5FZ8tSX41qtT2N755S1dipjA4QanDNxGoFwtvD8fUgggHk8ozpq8Dh4vEYDvT3x1cEo",
  "key33": "2UPPAbJvbpL5N8bPQtepFe4X1gZvkMby3S3AWpGgz8uKb2R1Sv5MPGefEMkN1uzT1LmNxQiGtUEA18EHcU9uBTfV",
  "key34": "5BZpK6GcPK9KDuvKdPrV4M2QHpqLZEmGYwGsT3EgfFNy7MZ3amRj6Wz7kPimFQamjY6JHPzq5TymGubs13y5NTzG",
  "key35": "fCm4bPhzs6Qn8VQWUy4ZerB7qWL3pa82dTKqmYki3dpJCtTUBa8oseqbCZf8rZZBbfW3ynT2ZZWMCgmffy8koP3",
  "key36": "3PfyQ3QsyiPZenb1UtuauG4iW6WcbhKznmMJFt6ozM5cS7HGhysSVt3t4uWCtBR3BXByVgen9QWABFBGm1fdv85U",
  "key37": "5HyvbwyXU7nZfUab4fe5GJ9nsf8LvZHV9ByjvNNnskw4URjU7fgL3JMK1KavrFpfqSabRoy1hZf4NqPW3AmHPvWs",
  "key38": "3WiyRs11TVf9LkW2HDpDVoRRFvC7k4Lf5LeRSCh2MECVuCDk4zS2Zov288DGH5UE9RQ3uAK4sgPcemNexEGHsutH",
  "key39": "5rWshb6eEgeUPrTQASUv72C42vnBnUCD1UzQNGCWfksL9ym86n5jrNs2JfssoEBB6TYDKpTk7HPAXmuqncxTeG8N",
  "key40": "5xed1npzjiKbJydyjf2BLffKu1zCkcHzaCaUXVGQGtY8pKEijjiu2MhfpK4JK8Meu9r82WiPjSoQqGakm6WJy1br",
  "key41": "2w8puQRKQv93EZwVN8aniqn5KE1GXYiqSx2d4one5ckfDuv6CR8875diwEE1Qfscyu69HCD8BPkg5tmBQZ72NAQo",
  "key42": "5JLqtARCf37vVaBR3jrZTmJbNuu2AH9anN5scSRHvR6co3crGts4Zfc8k2hVwMbABuCRdsrWLrFZyZBHYDM6m9AT",
  "key43": "5gSCQcsEeD9XBF4EHqphqdzsRDNvz6yrzLwEapJmxKR2Zw3ax3gZn1oirRKtoai7nHgJCGzrevLRugAPwxoMLX7"
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
