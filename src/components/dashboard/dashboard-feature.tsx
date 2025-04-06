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
    "4a9QVrCwiD1je3CEwBBJX34sSvEdBcGiBEnzTzkKskqGZEGsMnSndZsZpMum8BC9WwHQVbftj7xy4yQo5HLfmpnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9VK5G5xz4dyuyoTx5BohWTaatAjHjVavYGrQAftheY3ic4HRVmpMJGQjeYzGwjqQNsNjqURxg1DCLErESyDtXdh",
  "key1": "29jaUmXRNymkSeQjf2ZRGBRkADz48yWtJZ6HGndWXXfQLC8hWMS3pmS22ittDSHhug6YMJjXqfLkdDJ9cJaFuTMz",
  "key2": "5QnTh7SzWd28eAso28eLnqSe5n2XMJ8UzvHPVzGyeozazzmsjzmbDfSy59QWLdj6hF7u1ZaMtX4nL6FcLifBQpuP",
  "key3": "gY1Ys7fuEK33wXveWuZYY8s7MX88nataKi6euoswRq9aArhfktmfdHw5dsVAKGPyYAwryzmYisg6jXSQ1vgPkuu",
  "key4": "4LkojposTzUo8NYpCSm83MJyMDT5TWxyDxjK7j88XpsGWJ7jtkugTo9SxxQPrkjQnLHHHWdqNhLv8g7CJNSXw8LK",
  "key5": "44G6xrtssQ5uJtB2yQbgRKmv7cxDin4GtQzknkWU6kaJvduudYbAFFgRX7q18TZmjbmrhmCm7WexLGzv81SSy55v",
  "key6": "5SmwaC91VZDKjz8NmyqqNdZ6F69n6e7EbjVcrRsSW2o5Wu8Wd48dGiSQYEySe6tvfDhFxEw6g7M9DRi6mBoqThfh",
  "key7": "3GJGKRpyEcEM4KoHwYm2CifjaHhrthB3JhVrrCuWaHcfd35zt4fzGE9vUX6RzPoPL8a4m1YzikoyX7T1MoQGTVmV",
  "key8": "9qrUhtHjshyxjU9mnbKkCRVVpDC68dEUGboi1griewzWzoFCNFKMhuD7pF6o8tkftbMWn9G8nSXoJzUfZARU4UL",
  "key9": "2S8Sa3BGDzvwbQsPBUVoQGnxsQh26aMBHGded5TEiQq6Cjx13nU1GkNFivG96Y5kmbX9RisRtv66zdPStJnEAwrg",
  "key10": "4hwrDUbKX3XkSA52HEuK3V1zKFmystABD4W5Con2sNf7utJmnvKoYcq8SDDrh2CywcpgpJBBGursVpnhQ8zf6Uq6",
  "key11": "32cXpccEEinK6D4G5GkNbXif7QHB2XtzbPNi43kEN19jgS5NyaLa7JRTb8mEoMUv9bpPMYGz7cSshj2dcPEkqjVf",
  "key12": "4cuziDzpBfAS5sB1bZHC2UnY41aN3xCKhWT415NjaJHRbmumgwU7ZQqLeYc4hsfNoxJ4BnM71iHR28yKNQub6frt",
  "key13": "2yfXZSU2nRE6FWAc53L5tydHGnngDYCxcZcNRoRxbfSpwsK8z4BjXFgF1aiQeSy1SjAibx9nvrVBn6Vq676Uy6mZ",
  "key14": "4Md9dxGxQr4ZkW2XMHNs1V3dHSFPwRE6beJhB121rGSbWFyvVvB3qEsVe8TTD1FeZVmQadNw2z1v4U2Tx1q5r45K",
  "key15": "4zcbdwqVPKSaG6swrRHphaADSdrCjFUzkResW3hCtoeyQLL6VY41YRfCoSS8bFTqNGwwzCpSZhRtq4rHVquBVPDB",
  "key16": "3wR9rvKoBkdz9hYqLTXRjU7cpNQibPnixZ6JfDRE6h6t2QdaN3WAe49D3SThF3RNa3mviS5uMYxc7x54oAKb3vRM",
  "key17": "5XFoLsZqjkNYeSjGhtL4NaBUfdpDrYXL3h2A4z5iN9NAfJjUvtFvQQNGqtMyXQ6GExGg2QfDU5xN3nu81jX15WRD",
  "key18": "5fMeCcMmXKgT2TnNrzX85gfAtDXEzUD3iQdXT9aHhehHeQoCxPn4iWmdhkoHHsbCMTvwiAXMrAb2hod3GXNPg1Rp",
  "key19": "48fGXH6Mo6y4toiQ55w1QEt1WrHBauJvCzZdBXvu2pK6k6qN8bYjnWAuoAEPV8CAvTVoGWMeAMV7QguYpjtWhTCS",
  "key20": "5KMDWezN6RDUebPusRQsPyzjyFdxicU1ymbDKgXF65R15pnzzwX1xPCanuBBGHUdsggN785chysneCusw45VdCat",
  "key21": "5WBj45dgkbozkRzxuddZjbAbkL88G6Wi4K4CCzTHXajuVC9r6BL4HzE9UUR8P1TLM3ymBmguiC1Ve7Cn3gyRBQ2T",
  "key22": "bV21dVpCGJVD4ufp9ewXk2MbWMCCo4wWZwCTN6Mb1WwhogdP6yfQrztzP3krRBBS6hhCSR7gey56VwwS93Mz4Kr",
  "key23": "2d6d74FBYTbNKDrtohNpK2qEuLaUTdHzr9NUViXBHoh2hYXrEgB3uUy2owFuYMxxUKvE3RbKP6G5WwwHny4xiGEu",
  "key24": "2dHPt8Nj5rWd2nZL1LC87wjZSRDxhbETNtKYGUGkoPh1bF5NRu3JQ2KCBHZq2HCszACgGFFoGZeUGTFEvS9fxYvv",
  "key25": "2qd7rMPyU5v3dy1hApUCLmG45UXZdUnZ116xgqheS1STDH3C49Z3gFWZkwMLBsGA6ZvjeqXE9ZitJD4KKQV1YqMi",
  "key26": "3n8sgYxoucq3eh8QYBb9CitaaUtp6NjCrLeWEc5UUGWSyiMvVJaGUQyW3fES2ZcmqEijRg1f4mTc4ZwUYhMwqgdL",
  "key27": "qq4E9AfF7tYVtbvpkU1Wtqxgkrr3s4LxFUSEW9C7MDbTTpLK6X78PYZWmR9Gb8oWHwCpgvEKGqfrnpr3M3Fhycy",
  "key28": "3VEvpSLQT7LePcZzrhP8Ac47o2H8ZcwgbLVizu8pz26NXCehsijAat5Ff5D7cfFiUmf8PEZnpuTT5FqjqRGHurYg",
  "key29": "4cTRkXFByUNdv6451W87s5dYxbuuTKSEju1vw5VXSXfJxjdJw53wzC73iKQqKczwLirDNN7hgBesHMAecuXiv5i9",
  "key30": "43NQPqzsYVGieuhgz2gZF2EzPdF3gesyDMh4HqkeXzGnwkKuRSLCs1TdSacrUMJWEuD4Vr4kSEER7FogiGYdRjbq"
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
