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
    "5diZHmFaoiGb9kdP9ZLRg9ntYzVvtythQrgLFXDjZWiVNiJ1JxqN7yVKthN4dD2VKQk1RnjrfvoKDJY7M9CFaHSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLSuuDtnzECoCXCEy68Syj3z5wmGBoRRiigbHqyx77fULEvVt15Z5MWEyyw33nvPckwVKhF6Rphs58tF2vy3RHV",
  "key1": "3F2r3dQ3QtfKfAfy2R9rBgsLDbDAM5DdxydN4UHxo36yJ6ePoCWKkr8A8deQDVeLPu5nbdD2jTJzujCsYYZhC6RV",
  "key2": "4us1nVvsKv7WL52wmVT7Gw5RGoNwxvv7aku1ikEGpoPpCMwybSeWX1UXkT1dZby2igEft6EaxKoufbaZxyTKNiLt",
  "key3": "3u1uLvyU4GDmhrSNvbVLQQsRw2wV2hfc97t53TH61HB9mNEL1Qnnz5ymbAedhKMhBcXoAqRuB3goKVejarQ6e31i",
  "key4": "5jSFEb48hPHbgCH4NTYJbwgtEDVwE94LCZ7WnUibWTNBUsef9uNyVGw8e6YoQxJ9CpTJhGoGwmsNVX72bc8pfxd9",
  "key5": "5ZuWe1UDQRVGBGUqWhAm7ZNFfDbpmRLcWn3wzdJxRs3b8XZkaWcPzhQqCwKUSaQwBqyXK4BmHxEQZTbrVqCoYHZv",
  "key6": "3Mu6cUQvV45XZ55bGzbniJSU5XodnAsHmrAEA3rELjCWqoh5aBk62PgDetsgEopi6V8eQxw8MR3Br6LyHC1xHK3b",
  "key7": "5C11FquYx3XehX6QC5ybdXErMALL4RY132qJm9B39xFZuCjPE9aARxgik1FagNcai9bD7apqKsMPpRMFJgXkWTcY",
  "key8": "2wKYfUU15JmkpgQkus5fHYcfop3itSromaY8g9HZmfePe1n5BdtjtKd8aJFAsKaxtyBmUpwYzRiprxqRCRTnXuUU",
  "key9": "4jZT4rNySUb9FoeDLyXkLcdPqS9a2HFh5zEXeVQAUP48bKmwqNLXhz6L1um6LgYv2BhgTXAtk3sWF35QyFPiFZiU",
  "key10": "3S7L2AoBrSoQe2B1XWAT6hJYBcyi88HRqzoBzB8nHnfo9ex1KGZbJDDvCJH5ffqZEEaP47Ux8sSDmnSiJKJWEe3N",
  "key11": "4pfJeA3yhtRtdhDLMhvq1re19w95ugBjaFAGcss5fwpzqY4wtmKk8aBY8xkMghrS4TdMxNhURxG7ygenJmzw9iZR",
  "key12": "5whhc9nQpiSuk5UZcTVGUrbaw3VNorBpXe5Gbwjyy9PKewrm57PDzkniBtDGeNTmRMdXQ9rLc3NQrDd4y6RSB2zq",
  "key13": "2AtFTqKW83SDEPLNJjoH2ogLqUpjCYAEup91br9n5RWVvKZHqrUeQ8epvZAqsMQHD8CdWdJD3JoVBafxBWqwEy1u",
  "key14": "5Z7L9SYFpnVJ7bADoU4iarcuZoCfHABatqpcK9WcjznEJGiJUpzZNEZm3C7D2JLjUjwLmnkEo16NDEpaJB9C7Doz",
  "key15": "qdAXVgTojPJobgromWB2TCjS4xGgjijxZuX6Cd1zfQvpJ7BjDjYBMb2WZiZt6k8xhxqjG2SauGzKM8R5yXvPNK5",
  "key16": "4S7CAUU71HVuVYa6X2mzuhiewrSi223erQr3MHXvdSDYvzMzunWc1GnXVyXDqLBiq8j39UoCe6xtVAU9MqTvHQC9",
  "key17": "5FpMnCu5fFGWgzX1owxkmyqYT4JuuypWFC1tHHRHVQzr1HJPh1oAFYF9e4K2viwaFy5sb4KSEmfpKDL2miDXmyZT",
  "key18": "2JLeU4jp7hbNpoKD86s8Q65sinuLgT3NeNaSEKqBBjCjkJwSMe39G81uc6dHWZH5nKjGMnW8shTJFVPFdq3eF4Rh",
  "key19": "DqvvyH2RFbKkGDg79Szkiz2DDgFW1NBbDGKdRSoPSRJGUgnyvM28rUAxEh9yVTpCZR3EPgLiztnRJQYR6scfft6",
  "key20": "4SXLVEhkXQJE51aX4jUxT62ZvxckiSfzfg2tHpQgDAMUzd6cmwdwV9jRtsrokDudytRPjpcvTeUHGmcVgWEWiyBJ",
  "key21": "3FkikdjRdJMhDXVbgd2VxjwTGsNiwUVihQruCnZ7DzGUcPgXnXpmKEAs6iSmEWaVXNxH7DEyKSCGDpyCewdrYcw8",
  "key22": "5zceKnD8SPCLKKgipMgqxB1xLY3JCtW1WB3c4DU84FvTbLbynrHhK1yQKHxxngw2VZUmckfw64UarSM2PNmuwxgW",
  "key23": "3Y8Feth16hnuK8KpBpe2wV7wKkADomk6ehatjrpJMUCKJjyr5AZD3Dtgqx8mrcQTQin3wQ1RVHAsTauCoNk4Lr3K",
  "key24": "21Dom6XwfxXRC7rNPBsBgVKbAvQZ1k4WZCeTzjdK18mUT2ovSBc7Vq2cjJeGiF4aLvCwoaUYxZFsRb3WbUuyYfeQ"
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
