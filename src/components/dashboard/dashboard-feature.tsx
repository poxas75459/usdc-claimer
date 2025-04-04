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
    "4UDtKTEqUoT9nAxjMB6kAw3qYASVQdGj1zfyirfdo1Mup2eu7kxgpVbThLU6Td5pMiiUppXcJWBuwunvFejbvTjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VuANcBxd355fetb4AntpjRTkeiof8EyarQgkYhkqMaNy7NjN8GHJ4fnPuVcDuksxEUFMjzQ1LvJsEqCVhzbayfD",
  "key1": "3jhSHsuZ5zBHocvuBxypnhb1AB8ZzMMxDB9RvYzYKnLnNA8yfQjkGh1AM5SWu6tKcwWewPtC3GKxzpD4hpiC1Bxk",
  "key2": "4FGVEiufkmATBn6PAbcpX1ueTcojKvmiFWQFeFV95FtEuQaC3wJ1zjxZ7BVXqNP5wrqTMdHnqugsTNAqbPAdfJj1",
  "key3": "4xhLaxtgcpKUEnUFoYXEVvykoTq8j8kjEyvkaJHDDrgyXmLXgqULiizv35cobJnPhGyox5T136ETGWhgpr9GfxfB",
  "key4": "4X3qfKm2LJ9mVWpji3aA3yPs2Fyo122LC6B3PD4tVawBpm7YYmi6g1F7SH8yq3E2Se8B4DCU8ARsCdowDX37Mggy",
  "key5": "3oHRcKwkZuktVSzDCNtaMTgrntLZrh2uMdMpLq9HRwwCJjbSct2gnZnWHgkHa4FspUdJtcZqeQLkMUCZyHEusVSJ",
  "key6": "LmFe7sQvz7NNE4KTRR6bQ3KmwQfKF6y1JPgYSxt8B1QL5gnfRUEACgmDfFXz8UGBeGW5Ummuzrk4QZKmKbe5hB2",
  "key7": "FtsBXWjLXbRE1EjgAi2mXAsvUUDWeGRZw1Kw4P7DhYzVgswB5L7kE3Rc64MExUXtmiTeznAKCCG4e4zcosa3qt2",
  "key8": "2SbSBLh1TAQNG1cTvhjXQSTBM1GLomJPoNo2KQaJj2bCcxe1FMNgrDqHT1rTg2SV6zUJnkSRtdtzjFDAtxECRrKX",
  "key9": "2DYV6ErWswQuNoHNkp819Yq3j9nRb6sFLPoxVH8v74KDjHi1rkSvac85WEoobKrsQ6ffnTGxV15h7WgUPXWRwXmp",
  "key10": "59ykkkRX6U8KRSyZ1dX4HzbJNNaKcV89UZEhgKAG4rh4VSXxStEMfD5kGPc1WDWmmLYYGBgjWnhvQc2vkrWvcARL",
  "key11": "4rBVYuvpQ6W6JJUMMp3ofi1SL535LcoudKgap394pHUujpVG9G4WDRdtfwN1xP32Dh6m95bay7BSgHzuVx6jhPpi",
  "key12": "4H6N8jNPMqFKKvNT4H2cfDeA876zfE2dz7RXwAnp4nJ4K4YFsbPuDT6QcyHKBxcfnKumLy5XTdQmGfTGv7PAXuWz",
  "key13": "3hqtawk6vuZxuWbKic24WpJMcQPDGxFAEjXEpqgEwqJoMGJ9LDoR4Fd1kqeFWnRS1AhLhwF19NXkQKQoCMA1YUiF",
  "key14": "5zofkytHJLYN5EG2M59MPDxvVgSPkpMDiyBYmDnkoxkx7QvsgPuSps8KPEiH2zMgNtkeJWFbFkipz3wJxstRuyL2",
  "key15": "3q86hT84n8VjhgQi3PdSfteSGGUtM6GUzzH6dEWiSeuDb7EojEQQTskRkMkJc4ZNQ5ZfQf5ZDSDqF4YbjQJenodw",
  "key16": "61njp1HGuJryrAJgwfKmEXCs6dd3BpfpDtLqFcqQqaRwgkXXGUZTPbXWLdqcjjvncsavuKYcptEyWBGyuCuhMcnf",
  "key17": "4Ry87QvpMgSbJjfaSQMs9mh7duQcBwgnhNZheDzzkV4Yaj3Cz6zCjz9r3GzkyytrkJDUi18P6nFmJEGWEc5uDaKA",
  "key18": "5xYT9WWhqXUG8mucjpVqt44GsJonpBy1sKdhuWaV7NRtwWQZzfYfQkKBjnmzpfxm2wxyMKsHHy4kzzZKsNJH8bEz",
  "key19": "5duCqTM6zXszfCiP5HfW1M16bvq1bFoUjZsFgi1ZP9uYk6a41tFhsTuwPj9RiYdG1riWYa5fefpAyrSpfDomke5G",
  "key20": "2vJJvQ6SoCuR4buHyM93o9AnExSHobCGdvQFhtWwUftEA6RXsExYR3vr4zGVwma8TervCF6X4yM7XhRA5P1YSHKt",
  "key21": "47nETZMG4pSCZWKWVJbPyucojtcCrBJMk2NTc7cp9rmSaQs6Qa6maRK1TX4Poq6syqnhi82npBbPL4j88nCBkrPp",
  "key22": "4pvppbkkr2Hr7RWzZ6Bhr3PQbUMjCp3UP9Qjr1kn5oM87ED8WHYGART75cqmuA7e1ajk3you69zbSXMRa7o5Wsdz",
  "key23": "yBMH4dp6dTWAt8SK49pyD6MfWWjQHNsdM8qKNihaYGFXgXf8rgmYVtJwdirJtKJ4VjwACZQDjYV1jjiSpKRL8Yd",
  "key24": "4FEJAZ7V9YTw9jHLNYW9ssgr9Fq23U6x7heLRQVJY3VDEBFsxQTfxUNngm9ycHQZkhziSAhiJYDPzFnbMAXe6w3h",
  "key25": "5dGrdGCPK6rCzQpmzgsAmHpqtatnNF8kmRFPE9tL9PE1gwZntqCPb5KzN8GZUGvXTDE4mwd7dTDu6ncZvpYrcbXC",
  "key26": "5246uTuf76b7GDsHLNjy7xc1vRa9fTzeR5itnCFp8GiGvD3UkLKJZHemra8HzvGfcEH9XGMZ7Zej5X6fzcvimh5U",
  "key27": "PyjVDGCBxHcYj2yRJhBGUvjHnWcSXW5AF5VJGdKXYy5WBJRDXeDHXJetc1jeQXqP2tG2moFG6pw3Whsz5jtnF2f",
  "key28": "5KzjGkRSSTWh9JMxRgaWkPh5utBjBazVWHRudQhTrZCCditmL6UgMSv8VgM7UPMWC7cPARwAFSz7jT3FfxXDYhSz"
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
