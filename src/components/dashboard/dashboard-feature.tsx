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
    "2AFhBw5Z1pvbfDA3qJuEMGcAviyT8GtxNzDui8CccLAVukCrCmZHAqvcgcABic1VcQUf3DKTJbskTAD7vrfaakUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gF8RvHxSvpUKeEh1TgZC9McJsvXT2TsDxUU7swWoJkU7QCfAXAu9K8HoSSgBZjiY2uAtn5LE1s8fDT6NLnpnuAg",
  "key1": "5DZFSPGNKVNmQVw7t83VfhierCqJgPUgfNZvALQmVgjNhNCu6DtWAWeDNAdTay8ntRzZyzTxH6Az1heVcWTDzrgH",
  "key2": "457yE2JH3gAeNrAcRURJoFCnxSvSmeVMPMTu5Z7jFpW9LoAmnzQTvGJNvxvGhwvwmoheubGDfWTZgEMTUAYA5rtA",
  "key3": "54GFPLaeZyFLueKjmXxTfcpjmpeQsCHdEmz7oEkFocL3PPDWeSfCJYkV3T5y6ow1ZK9gkM58brRXdxjRt8hMyUH7",
  "key4": "3PJ1J8guQcSo9nWpTSkADvDYf3ez861sTXiVxCPpoFHZBmU3tGqNqmM9m8uhZkRfUUu4bxUMJphv9QBz7da3kFAF",
  "key5": "4iXfgADKnDc41WvCqGnHfUt6kYQ52WUK3QyMQEy8eP5eoXtsNBrYnxBVsyJqKyXEeGaVQPi9Cgjc3ss6Yw6tsciW",
  "key6": "38ocRotXoUHhP9zSScE1AzN7iEpCYg86bcVX1NyA8rhBhoZqSK4ecXGy5HBeYpTp5nUcxtauwrqRYuxfd1iewY47",
  "key7": "4kwxNgKEvyDLSrNE3fYqfrqXacznrWVb7YXrqtMRLn1pP164VUphazvR1Y8ivcqjS2tTM8BRYTpQEALbPbZL6kAE",
  "key8": "3d4LFYCxsrK3WMCfbCSejGpekYLtWrDhfCCZosFZDXkki8Sam8Py3A7r9UP7PStAbRkoEwnmi5MaLpiegjpH2amm",
  "key9": "62Mg8EKV5rFjsJoZHzohvmd5rsx3nwvgNn1uskdhh1BMZ6jMkSpVCmXhenNxAEMXWUed1PKY5ZXRu3bEHJzrEUPm",
  "key10": "4DLGpqm2TGREA5pjcL83v5Y15dtNVjDyWk5thwg5PxcfyYJnSKkSaXzhVAxoFxzLVPYrmmGiBMXAiTrZ1k6sZ7zW",
  "key11": "KS359PS9re88weK9ojzUrwEADKgDHJugVjDTyEVzRFBiBnx7V1tPvZq7nneQqHv5rBSDLZe77WGd1TwBbboyGca",
  "key12": "4ZcNZFnd7jDhs66s9BTWxYSy43ZEXgsXPBuMcvU7AEF5qnAcSQpb4ZYrqg9PbRVdfy2gdxuiswntMEsP8FLjDs8h",
  "key13": "64zriBoaoB9gaRj7qX7GzN7ZB9Urnjeqv1Gdk1gbr4483cottnAEWRhoFwkg1uGMLuYWxFA74WQ9uGAnfezPEimX",
  "key14": "27TqjeZdM4AE9HiwHHgWMKEG3Fsx9WwS8gWySrpcAKs9pU9pd1dUGKURehVhNKZXZM4K4sN5PiivddWUNtAKbms8",
  "key15": "4FQpMdvw4ogGCi4KHyWWDe1jfdSfqz49Y7HMV6ZBRA8AKzSMhDfa6epmEDuLkH1LhNy4iT4K2tqHiLiGwBjtX12p",
  "key16": "4wYi93hy9VtAjwfErvwqnfjyN628BNHUGvzsoYBSh8JXofjQ8xpyhhJBR6LHu5LYh4qmTRdnaYJx8U5eD2QEAWoD",
  "key17": "56XJtCxXn9jaVbCaUsoq7azqwBUSWCnpKDtzS2jPJ32SwgBLxnnt9JfghPk3Buhnh73mbxCoJB11Y7QDiLmvJrbB",
  "key18": "HXJE5bLENRN4ig8VoGGTBRumSvd81SFD9zU7kZce22GZPkHNQstCnrzizeG1MGnTbGzknLiTjCyWH4YDyX2ziRs",
  "key19": "4ZkSVnnpFxrikcieVU9JtvTy4u9su9uenLKKAbDgZ8DM5EdZfxNu6QGDR5BNCeDyftU3sTbeqvzWEYwFv3hA1gTh",
  "key20": "5mDjJrdpqbC9ycc59SGWC768LtCRy4nzSTeoiV4BVw54hp3w3UU6paRVSP7vxK2cb9A9LmkKXpVCrRThw8RMtT1N",
  "key21": "2zGEgHts72SxeKuTUvdAi9Z1ZuqXHqGjrdeZhDqQCcLW6ihPYoedP2vYbLFVpQ1Js3H6bxWeUa9YWbDiaVETEL9s",
  "key22": "5kc37XdKYFweGT6EF7SQBBiAzfzow147tZtaARD95nN7Hvj7YyGaRzPbABHva6JAT8M93HmBJE1TUPt2fmAvtvk1",
  "key23": "2CvxDb2jWA3oKpZYsSrN7AWtChar38ZuqfDxuiqumku3zd5RBshCVvSJC6YVuUw7BSeX4ZbniBZVkzBqLXEorJLW",
  "key24": "rYMxPnJJt9z1o2eYPGostjN56yt2y4kD5MXm6euMppRFoaz8o3vpUYm4ENh2jUFLjNUowmoLfffe5fuCQyNiZKw"
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
