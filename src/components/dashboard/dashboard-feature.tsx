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
    "5BtC4PubxwcT34ZttotNVgKkzzjKD4nym7sfgGXRa2QrXsVqGaDzTdgdQkxmQTnkHxS76WRpeQSbuSf8W86ewsZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwAWVWCNtUnsvhAMKinSHZosXzCEVFSwvLdpF9gLwAehxVGVtw4t5CyGEU8jctKt3EPx7yUfY2im1JbRF86uuaY",
  "key1": "JQXhArA88goZSUhzvQRzZPCm2H56g5htJfSXHrM9kWuPL9YrWxnhGkYrP3ab9PrBREXDwt99bTmz4pqYnaAgXhS",
  "key2": "5FYLBG5YLbfqcAnc9G2UjM7ux4ha9WFqr9VmBjX6CB4bbXadEsGcjMMswsvbtjanvwx8hPDkcgbj32CPedP2EdmG",
  "key3": "2DwaTi26eyreJmzzsHsiEsx7zptw6kraLN7tq3ALAYvQ7w4kYtJU4wEjsjn2vqkK6agrTcj4aGHZxWg5o7MFU6Mf",
  "key4": "6u3rj8fxJpxESjVGf8Z1xE9Pf8KN2ZD5Mj4DAxDhtDeBRMWAcpUVxemrAK7wBWWu42sWJZ9Z2JJVyqZrUXwSNpw",
  "key5": "65h1EgfDwoZVL3uqwgcwEVfz9J1LXLAcBtQdASf5PFKQMHdKjkSPRVb2BjrMKGU1eL2G16Y6GZqP84ryQ7cjz6Ls",
  "key6": "63MB8gftjQLqSFfHJ2L1TpuKRfmFv14Hi8m2tfeDZJ6iLNCpxzXXMLJGoaQLjSuKweKEUpo9pjyvnwzgRmGdqFPe",
  "key7": "A6VGYGAoxoUQtYw9AfxGZNHzF5pLw3PxTVy29HMvMN1yAaZFKShxbSsuL8hG2PgpDiwVrYybzwuWfphn5MPMKBo",
  "key8": "4oGqYpbKhTPrFTwwwuj3WFFAa8o2vfSgQqWsDtxzcuFp5Abx6vYFUMPsTN57XQfe8WkHZysAU8CpgKatNL81jzKZ",
  "key9": "53CUhnwR5BgFxQhJqcBeYJDCMKMbQkvn967mBTu9CvS7m7q1mcRD6d9mMfQkW4KcAxd13sFoCxUUvx5fEjgtw2Ga",
  "key10": "5V3ru5krH8hH88QMeh3uJpSgNyLjGjhDdxZgqEr3ED3N4HoaL7KdXBgZKVpmiZb5ieh3ZNMxHA5jVeYWQuPkHdNW",
  "key11": "2kpZmMaxEEKquoiPiKxLz57MkJtjTyD7aVKRU1fCrpn3pYJsxjKRKfpG9xUp1ZULDCqWNAo58fbgP5xYEJ3NzJwZ",
  "key12": "5LD7aBgEjReXEaKgm7mshJh5Vy1UXeTeuMtdJ3jZRdxRvmUyZaw4kiSvu6EdnE15RkVgWCWqhWExvu5kwude478F",
  "key13": "2Njt5478MATGybaVVUjGz9aUcRZaap6z7Wzrk6txWAQKUdPqrPyVfw5gt5D7Ez8tuCRTiWKs2NYW6Xdzoo6aeC3",
  "key14": "4LP7ArvGJWdWFjWtGh9dZteJU7t1xwxnQJB4GygEn2cUvJ2mx2iAMh4oVUGySC8NfJLJwz2FgtPKY7W7tQcTQBzT",
  "key15": "3zLcShhKsgK2T4RxJ8TBJbCcwdWq78WAj4nJKZMaX8PJuGFCEtP8GfyKQPAUkTvW6URou1sqLaizTBeH8qMFLWya",
  "key16": "5JuUFDqbJg3Z3LRsp84peFjot6PbFHLsajG96UK9ePA5FenUaFKvnesoQGpaWtNhoVN3Yh5LwvLrkyvLS54nUDF6",
  "key17": "2FGbkTFNRr6u7znp7gLcXxby6NZ1ZdM8w6jAevJFZiUtc6jZi72my9rwAdYvMgkcNWvot1XweH5fRHF2egJUgx9q",
  "key18": "5fw7aXvFari9DYVWb4XdcEnKHS4oZxwWPVeM71qRsUBpzwii3nGSPHGdNbxNCswqnmHokpwGGDtZnowsk14cUfLT",
  "key19": "gtAkDb75UAwQAExEnmX69WaY9pBjXBcL5q8nSJn8RRtDJQjfH3WFQyR5jdjLwaT4N2mBoPFbbbDd7uzyJThEpYB",
  "key20": "2EnLRPZTZvLdV9cPngk6RKc16kG1KWL8yeebQPs8M5Nxw4k6V6hR2ziUcYnBwBMu3aayyhipTKj54KeHVNLH2n3A",
  "key21": "3Y6K3RAjRTDVG8XDHYEGSwVuQXkZdjVyk7YEagJ2LFxBfEdyXGdkcvRHD2ALgVtNySAxS7Qtg55yJk1tjEcwnjP1",
  "key22": "4DSCqEa7GdGNgv1yDaCdqL6qKGXQJLp2553ehVZTm78ew3R8fCnCyE4WW7XaAG69v7GXZ1cesUr3x8ERKgeSNATw",
  "key23": "3dJwKfiSjxvuh3aJo4new2HcCzMZZCZ33D6ULNWmvQSiMum2vmkeKQDhHLuUDUKkEXjsYGiBwa1PQ38jV66fPKT9",
  "key24": "4GTnCfaxtQv7EG45HeHedwzMirqHV9bs2xG77NgLtnEfaL9VBC5ibcSrkF54ahWrFumPUfcmoLPTpbiVbNT5o3Nd",
  "key25": "3zQPwiJDPVvvzStySyVP1fNRtYAMrYPJ7RMUzxjEBHNSRRDdvRUQP4pJU6rjzvXoEdn5fiDT5zBvZjW3A2BR3BjC",
  "key26": "4KM9gGKo7THB4HVEmVxxFN3AEo3XTqBaTxnTQuZiPNttf6VifNhP4JmVwxvndrvnYL6hN8AZYT2FeKsrQB67Kksx",
  "key27": "5xPz6xsvbG8SbcYGZe3AmgSzjmjcE6nLBjJoLZQuy3A6oW55TsJZ3uzBtZwvioGVAcbzCD3Rvk5ZBZtFEM4PZJRR",
  "key28": "3mbXDm4snji7eMDYDM1xwAfYn7H7braWLz8qKNSSLSGz4LqmUWjj3RWZ3kkav2yUL6fY1fBsWvXigaZFKYk2KDES",
  "key29": "491zhhhDNPTriteUrJmhAuzi5TFFJrc7r2vPQJMuBYxrJ7P5EF75wNLhAksh1okATM3rTpWyomeXZ9L17zyYDuZq",
  "key30": "3vWF1ihdwo78kmy2e9mNJb9KKxEY6iCcYxzyvox4cFHsknR1ZPopT5MoKu1orw65bDWQiVvqsRdobMw17Ej1enD2"
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
