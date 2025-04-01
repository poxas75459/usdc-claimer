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
    "2swufYuSiRmd4tT8rDkznrb6Mj8MtmY8x2Hzdss41HRSyYU1V7ZKvXpUxaBXh3vQujbQzN7RQwGgh7cku9zuPKkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSDDKLk9A6s1KRZgL5XP11pQe3vEj7UJVK4dXHubzDz8kz9myKSn796sacDR1jrHbf9XCG6wNedxnetmN1SiAG5",
  "key1": "5KWhjiD2XMUVosTXnz366dGtFAizAUp1hTwZ8Fhj5SJVXmKHo75ne7UNoRSVRrH8k3svFd7Zq1vBF2PwirRwCZ3A",
  "key2": "2a6pMm3avzLG2hCYLhjZzXRe32C1bQSuAw5P5f1C1DM7fV6bspRPac7bfQCERJC9Udq81kv7cfLvskWG4HK25Ztc",
  "key3": "KfVDx83uRPjP8eLY8FHc9bPWkvju8tk1eh17VhUonFxrbbpsBCsSeWPWsizsYddAcjXkE2wMZGfAeaTvp8YWmdt",
  "key4": "35Ga6AMZYioXiHLtR4eoHFHjwCMCqi7KR18pXbMjyzxcao8k1Bkh3tKM1dUpW3vyDHXKXhTctzxcnQ9bohpqVCAS",
  "key5": "S1FSUZSEKzfLUjntCPcR3GgqC84JGNowBkgSP95UBqTD5J5wbZE4RL6obatg9Yi79azKmxFBXtKHmm3ZqLb1Q9e",
  "key6": "3EwBRN9RhbDRYfi6xNF9NP6ymc8p3otdWtjW8HxmJBjX22bvCVCznXRu39kVeXgKuH7GHGYT13JFWtLBzenbZzDs",
  "key7": "4nc3PqCJUHfVrY62BGrUnFq5aYAMpzjWZKhmpoZ3NtThoyXHntPbMJR224TvbZJ6n8gdTna2ZEG9tkcRh8DR5xFv",
  "key8": "5oHjEXYMkEDxhrjRaVNMSaWqza2jAcsXPgPTDzGNHyYNdYNhHBBmbe3BDDhUhDsbmyjhoE8jqN92aBvzLZDwUcja",
  "key9": "2C5SYVkK2GdoKcgQ2LfNbSYBkBM4uzEdz1bDAdf1Df1sw4Z4kh4V688DrwMUsJYcTzWcBy3DqVEYmJQDig43i55J",
  "key10": "5RgXEbtA9iwes2y6BN5Y42w7tARu9qQRFdKKadVZSHXMpyge5vVoUrrtqANJsDhawgW3YJs9pHJxVn9nzK1zy3wB",
  "key11": "2nKFrujqCjLQvpmGS5MhXsXgRojm8anvHk99pkpfzmFzaPXUD7aQbQgJdgvhYu5n4K5y7G1SzGYZnhjwiXEzHEM6",
  "key12": "3h2kaRq7kQ1EipbJUHbyei7kmYUCuZ7AJyAzmRA2uENnKprsYvja7e4d36Y2qzdNq5QyDMiSDKCvJKpH26oUyDZm",
  "key13": "3FHrgnrRMG3gvMDew4G2Dyx48qzrdMpLuKqoj1TankhZo9ejoy3nz77fMQVaUnqK9fWv1GKY5Tsx6Ccg6LuYZFij",
  "key14": "EjuMZGJ4eSkuohS3EcJfrm7MfXHmBj7tSHC92BKNgoHTFXSwrkianB2fUBo9LygZV8EJasbK6kQoZivrZsf5UQF",
  "key15": "4z2ya7z8Wmh71GACcffEYnuafVNHtsnscR9zcGWfbyGbkGDH1ZwDd65kVeZF8VxtSaqvhYTE6GNfPohAAuYNCf1D",
  "key16": "G5hCfLB7mLvXkAYF5Ua76YgP8WCnNYLi5G8jvLxPCK4h1ZdkqoXXr68nkbfrtvMK2wNwmkqSoLCZLYAXFmWaP2f",
  "key17": "5ie1CRDAu7W49T2niEEHns5XrB1CTnsYrp3cygas9rba6nbXZRxqGtvcR83mLJ9oxDUup5La4GedXe2XfqNZVmrn",
  "key18": "34n6E8Z7Q1DioDVVZLnNroa2pbFggywt2e8MAr4pfajW1YN3qfmatEMtAPjBn3gRfjwKYfDt8Kxcdok8CCFE45fr",
  "key19": "HLcwhLSnfd8ygoSk2LGsEEssQDuWj1KmMdvQN8osiSSN6YUp2PNjjUzFJhBgp44aArc2eephxDUrfm4KUkbMYV3",
  "key20": "2Z84LptkuS8qLh9oyGeoSnJT7TemtcGPzSkt18xBr4K1zdec2spbfNTRjKxhxSLyRdr7kVhaJTBpHUAERMm5XGEa",
  "key21": "5TQ56ijASwks6J2Bh7htAzoPk8c69cnwSR1XUA5gim5Yt8hbbEq7LvGr2tdwM9v6JhDRhYAikvvTkukz6RX8w6S9",
  "key22": "2w5ZPYTie8vdS3c9W2RbkcpERw8EcALnvG53fDhs3fo5nmdzfttfGdrr6qZjAw7rVXXNAFCDUXXkLQ9XcN8b1RSB",
  "key23": "AE3BG9BKQUZqi1EAUuu5zQqXBpN9qkKRnhBQsPpvSBdV9LrJ3Ca4vfBXisNQHSEdJXR3waxVyt5rPnAqdFaCZj2",
  "key24": "5gJ34HY17jZ5ib5kEJg7tWQAq21GGLaCyHabbzDkst1GgAoLPnAU6aUQJFKYEhdsDEhAdPR8nxSfcTce1MqmtFL9",
  "key25": "4LBHmGZ94ohC8DEaAUGyZRDGVfbebtN4k1pioHFwTJfA7cHj3JVPD8iFu6r4kc8D77SsvMrvicEdbyV9omAfT3tp",
  "key26": "2zB7U7d9AkCndpGsKngveFRVYKg3GtpmGSyvG83o1qiaMPM9J2mWRWwvwjyqkaXmqhuYjDfMJjFGfJ5KrYBK6dqB",
  "key27": "5hn9T7PWMuKRD8YqdxnWNbnhx9kBnbZhBFTBPYPCMrg3bMMZQdYYPaxg86MpBpGa3K9TjLoMpXjXTGLSNRaThWx8"
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
