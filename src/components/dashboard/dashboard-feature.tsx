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
    "5tgDHh7Uh92fAABWL6sayLYJ3QwGK99xyyNcyMbk3p5aYWVLaKxJVPViYcW7Xh7VmwtNSHymStvorjkoT5psyaH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3dYkbT2eLR7UaHmoS6DatuPVsTA1VtdRS8PzfUJWRUVL73j9X9DUwEztNbNEMq1i2yJXNioacpU7QZ9Q59Gq7Q",
  "key1": "2zNDP4CktZEFH6EJdCkur97bmK4h2tjUtQDmiQeYbyaT9Ymo8mryFAJQZs1Y4dWDJtYGjamrnpwhMz5j3W3BNPnc",
  "key2": "5R2cC19voJ7VheBudycp9H464cVNjFq8EzTmnSXjn6JCLVUWfC6W4Nj8iZdKrui78Jzr4ST8E4EmC1UaNLFDFWpa",
  "key3": "4TmfoFH3BmKsm9HWf9tMS66ijQU2ZhDXSSoWBxaJrLHCamrwe3bYTBnp4AFsQxAZX6dpiDEnwZ8WdM3CVZpyHfpG",
  "key4": "5D88wKLzRFEXoBf1H7LLC52QjzddBUyt3JovGpDpx5WY5qAZPgDAkMqMkd1HePzLmYwQb6BkLF4BpanD9kJn26Qs",
  "key5": "3qZX9PCCRxpSGZhJSrxuZrS5ykw7CmsCLdsVizCZqvkhRjjFzR13A2qMPpmR49rPQadh5yqZiY5pVR7RPs2fGVyw",
  "key6": "62kuXUE9t3H8Lpsa2PJX9qKjj1ctgvfzozTe4i2rAcNeutyXAWMGXzp1tmJrXpLdo7zijFQrRHzxMMT853aZZMco",
  "key7": "2o1H2v6aLHX39BgbJJfSp6C1Uy9jdwvkpSCECCgtTvU6PPcJMvhLg3sLKadgFrZHBp8Haq2FKH2fS7XPgCiXMC9",
  "key8": "NfoWLfb79NKSfj362MKd9pjkgi4PKX7vLMHCkLum7QuuXx21Sv74XBwiDTSwyfywCVNBC6S35icpFbAXtUQ94Cp",
  "key9": "4V3HTH6mvm93TMTZfoHsobYBk6i7YTYQme4xzUk7Cq2PaYQFHsULgPLdnhYQfDu6tfAVAoJi4mwZcCwxcGipQkhQ",
  "key10": "3PJK16qU814iaqaz2pR4Zv7qok2KyqC4e2kfXFtmSnyi986sfQmD5BS8Aff8buLMzGoy64XzifRubRs3xfPYQswZ",
  "key11": "4GmXywBXcXicwjH1R3sDrwFMqKdykKmeoqTTDTeAoWqJCPUZ9rMtki86ZU7wYJC1kpofBicRodb93SdRBhkjCibM",
  "key12": "3yt9PR6cVv5xMnH8ndRYKSVBDw8on2iYqwtrE5tCW3MBeadfgUjVbS3g1t3cPzaCUywfVqmSitNzwcp2bFi5Lfkd",
  "key13": "2YXaddhzyAV8L3kE4hKM2XGM2ALaG2kFoQJ6R3JY4NBMygjjeSfHeGPfbnEBfFJiRRHeCWiZKfPQQANwijVsKCQh",
  "key14": "2vNkwFZ6pH3XMGtua11iKgsew44RhdiQFJbqgBX4wTHHvYAXQrAuLSrNSi8KD7yAStP5DxcunXJtmhz8QY81rx6o",
  "key15": "YbLhGs2VqZu5kpT5ZM7sBF5Eia5WRGLUmCmehHFjnqVLsMoL83xzFJFxN8QVTynwHXfh7JMYoNR8gAJw7APraVn",
  "key16": "123Wx3fDsDkx9Fzg9n1ionxDrS1Eg2Lg7kSES7yeoyRETvdwaLchF9tiNLdDSet9xx1xQ3uHDaXtZ3tH8gcK8QaT",
  "key17": "gYu35Qakcetw9d2MZJ7QVcoLhuvPAcLAFSYJ84rrLN11ws5aKwagQoAJiBmkK3wPNyrMpNUbTEGMQ65EGFqemfA",
  "key18": "3uLhoh7MK5xXatU4JDmiPVZACCtEUBifZtT9mR5jTVqcs3kFEpAmvFUK9uSc3gTxj7BBYnkaQNBLYSXMp1H9TZrT",
  "key19": "3FnwRjCJ4TxpD7XcJU9bqu67eaoeMgjSy9MdFEdPWQoMB9QASkSud9k57fV4ULn3gzf9QUemhhq3EbezLXKebJaq",
  "key20": "5hsC3PboL9Ve2Gi1nNPBtJ5hRBA3H7C9qnNfTyK5afZ25F427gdnueyr8Vp2qp75m7MyY92eywzxkrQ4W3c7cTSD",
  "key21": "2vivVVpy83pNWK5cTM8pVpJmB9kf7XwPkRiqfQZkiCeAk24vr49uRNADu3JEdQ9dAvAvyemXdUFgGvxSMzXBtaFi",
  "key22": "5Jk7TAXaXZrnVsTPxzv8u1Y63mMNFr5senYZNvwpRf6rHxKFCZggQxKpJu6p27KG7h4YFRcVunkfUPpxBYCbahwd",
  "key23": "5FPqD6VTBy1u5k1L2U4NRY13JVcJBa8ybc3Kx8GtpbVxmqRL79FnSMrAivTaaQzS2jtRx1CEeh3nzSR2qs7GShTn",
  "key24": "4U9yzczR2FLYf6ZLeXiEmAPio27cXcNNpYNCZ5pHbfuGe96qNYU1LpZWvdxhBBLaz3FPmAh11k5EqiAycCZ1mZDc",
  "key25": "2atfUXBfXVZ4HMYYc6CSAhSTQgdZfW1Cembswq8uYD1QxvY6k2qnoU7B8pBUNr9dSUnT68GLNyARUnTzLfbDhKX1",
  "key26": "52hkHoGkAobg5G1hCaEAttvapq8iAbdD3rXCHC2AKVn1gLfoPhyRNpZtDjVeN35CZMzCH8YsZfAz8gAvT4vc9i99",
  "key27": "5xaLSjvNf5VVFJb8Ly3931LPJA8ykmyqEew59j9Aw9tgQFXTZvQUdphhL9681LuD3pQDDJHojBDbEBH1L6wtDP3h",
  "key28": "3FCVsdKx2Wnjvvt7LSeX9hZvLmcwpLpDWFTNPYCCQ3GRYKZemV8s2fxnh1oRsBaAmMmQWE4Q4v4hyGpSbvBTo5tJ"
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
