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
    "5fgvkX2cJMewvFCEvvRBxqB1WP9SEvRRu7mM48nCd3ajmHFYuUnUtQihFp3JEEmDnUPjB3mz3Tkn4Bv4G8CBRg4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKt3AYYrEoQxRb5MjLnD8yox1Mgkqw7TMuWK7xacRBaMWKXdf1YNsXdDUZ3CHonsAnn4RGM2fSVuWDwPT2CPBGQ",
  "key1": "UWQ3HfW5me1XifKZFfGkQXpFfCeJHKme7sSaZRGs72viCDRMSLPNrZcobPefdtNoY2NgHA5tmJk1Y2i9E9PNapn",
  "key2": "5U4k6crqz6UTjBZw2jZ7vZ3qbmosvi92XQAEPSgYK8JrTGcJJ2Xp9DywYKkogd4MgN6ZeRMUJUyToZdJwSdnDQR",
  "key3": "2JPoAPm7XqaFWBNqbGp4RA2gU2vAfvUMt2V43KG9XTa7QRrP5wLkU6Zq4p1kmrjKCkY9hNcgMFH5tvbSymogt9fX",
  "key4": "5acwyhhPaU7Us79hHBM7kefenrSCmCUqfkjNSkJxUMUWsqrrtnPkZSh2j6AoL7U4xgdm4nSKtxLLXC8wrQfFLMES",
  "key5": "2TpjCx5vWoXb3eoFevGrwTjj27KAbCs1SZgudxnpQuDYgL84a4yKHza5E8XTzUHGTKpQYEh77wXJ2uYctazZ5Xxc",
  "key6": "3FP9LZSdLTX8MY4CdidAFmc7nMcaVCjanNW5YPexhrwQXejbW2eu8sNi7FxjY9LsRU3d8nzb8UGzKHuXeGyVDtpr",
  "key7": "5Bkm3aWgMjBVyu53gWZF1fgrUB4a1JjoTZ5pHzQG3PZ4UKKEnDqiKw9DnA9ZVct5ztiHPC2spkydCTMGoUmjRNGX",
  "key8": "qupBAfty87dfHETp3FVRav7EuRmRbevKGrm794huXVa2nrBoMswEVP3Pq4UkjPJXj8Fp5QZiBPfakM3RHp3AgxE",
  "key9": "4DjPYSu1dog1jp2nYsYsuDNE4jtpV3iCRAYSBHNmv114vmKzMWNrE9ZSJG6zQXb61Jw558tmQgEqkmkQwZv8P5fQ",
  "key10": "2d5BW3vK2KiRWES7GvM7KX9ianZ1iB8tVHb69M7b17zqoEdfYWM8oZnzUEEx4vQxDJDAtCfsmhK3EWCusGwFBST1",
  "key11": "WJJ1TUS5UkkUwsQJJDKBxfzyKtv8tEqufBYna6QPiJ5uzPhLoniv2v21Fn5MH1SjBKvTJroe9qg1xAskR8mPzG2",
  "key12": "64iThC9SEFVk9q9JbBUxQ6R6amMAF2YE346hq4VWzyHR9L8M6GcNR8PqKm5swCELddsYNSNGWEgXPLB7PPgXZWhB",
  "key13": "DnofUnJHxB8Lh9ffa1tmnZFgisBHDAAfGumuoae6F9q3H3R6vM5QGsqdr16t2ByZEktgDMP1TB1NzNdHPbMwfC3",
  "key14": "3DyTmAgHVPb4nETX6acbB91emEwYLmbwJeDSxyCCP6J4ETr6nc8fgqQSLKvcDXT1JFTorch46YVxyVFkDqguJ4zA",
  "key15": "2K8aGvMSngmvWh4BM37m87F9USA359owBeLKHPbcB33CC8Z5eXSDJjv5mqDgeNSMG43kJvJ9qyVp57EYD9LUDywV",
  "key16": "57bnbvEHcgXPkgzVvpsjd9YVo5CxAru4ZBPT9eNmCzEyqzNQpUFqGLaDfFNEyZ1gm9nhaSAkB46JguSGkvARyo1",
  "key17": "6nBvRJvPXmKRP5BQHEzwX2Ew7CHLtiXskTDv5vwRC7AdDQQKjhiejuLxgmwS9jigX2ApbZGjyYnKM9XHPX7aXGi",
  "key18": "2vGEQRErSAz7ym9DRMuwuTV9X5H9Y7fv8RT38QEf7BQDqntZHrP4GFDjb9g4XJfH7SfwMj5Q4ZLiAYrWoC8PjaYh",
  "key19": "58D72mi34CLJvfmaiLvN67CjUPGzeepakvCfwqZSecX2cPMAR6JMnR3BuKt199CjH6CmJNnmVQMCuteYj5kG4GPT",
  "key20": "2uSgyPrU5TPT43LaJnMsMwxSKXQ4GJgKKa7brQdfetFoJehJX4rKgVUe2Dog1SGGEVEUEq5MtoaTy6orAW9D1898",
  "key21": "2dSmqdQsNMDtK4N8S3NYrQsFswKDZVoC4K812Aq1JESfpmRjLSkvPKjRdmr32cTccbPzKgkRPPVJikj7pt6Rkmpo",
  "key22": "5fSwF8BvSoGmigjLZV9cXnXFEQgicXwaxmpwekjTZYLdDeHGuNmcyFyqFXFqymeobiTvVe6msYQRifsVKcpF1JsV",
  "key23": "3oCd9rg423wkJEuSTpVKsL3XZYvohatprSpFNFr57dyuUi7HzqjSWestyCMyNR9xn1magyhcAwhwuWcNm64U1WJj",
  "key24": "677XUsv4GQmSRX1YCn4iRSyev2ML3yB59nuL3WYrKbMpkBPsDLwZLHtSjfcVeAgcQHDvPrqhq1kTXHYjDQ2hvPZx",
  "key25": "uUhf9vfEZhoviWETjvyC3sfaNBJNJnJQBiqAhL4vHwP6XSXE8imovcJirNUCinsHVi7miM77oEQCXCiXemeeYXx",
  "key26": "31zXYWJAj9bxaF9XHJFaB8fPFNPiAoWDSaop2u5DMfRdE6f3fmKy6TMVhw3DGpGmRutmiWMAAoYANCGEbQwNHvQi"
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
