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
    "URMGH1EqaLD4Z4puYcr8KqNojrY4zzp3VpqU6Ks3gmMNrfYFMVDyxo3N2fVcBZK63t7GR7JNQUQWmfkG9aPEMBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xn65ePNPaLxjEZNWmPU6kw6NGZq1weq5wZB12GkVzZxw9qtN2YVwhUYrWQPYrdNWfoZn6mLgtSmwyDKJt8ThiV6",
  "key1": "4pvaXabqTFXu2d2WqKDNSNpDCKSKJX7zYrWW3gR3K2ChgJZaurJmQDFubYQSCfgqZjFFfw85xKvXVs4oEMrk4hV2",
  "key2": "3aWsTMuyJnyQTnxZcVYGDcc8CYP6pvZPK3ZGiMPV5xTe62rHnLhsQgftLMednX72wiaPGFf4x5B9GwCT7Lf5jGet",
  "key3": "3dMte6z43WnSv8qsBfhNqaVJo3kUkHQkYEbTxwWLm9zRNsUwz8mtWHb8vyrHY5GVDFPkUxjkn5CHcB7oiwbEPJZK",
  "key4": "5CeyUmpJBCVnXx44zYghck1wJSVGjjRzMkMPLpcox5LKCgGnf7UZyDskz9n6scFfezz6c4WAWNmmp49hnywgwrcR",
  "key5": "7xqjsy2XDJSY7kxbrVco1vbg7URAaqiYiEJioFMhmuzy85mkw4FWFPVzcooJmqz7Lg6HyT5DwHdtYX6k1z7JGtS",
  "key6": "2m9xka8fubHb5Z5CVJV3d6Q9HgDJK7WAjSaB3zVw8yd7K9tDyKbPYirZwr5eXeeDsoQ4gVa4hfHdLrY1AfDZyYmg",
  "key7": "61V2H6W8isf6hapZ48Bne9afcbWWZSgw1xtAL9QKKq5CEhBACR2fs2RUCHKonnhZaU9uaKDdhkopqRKfAUu9w1do",
  "key8": "2thTUv4kWbyzxXD8YRqeGQXtbFxtfXCMbVUksiGpaF2pkZFBGgqkadCgJSD3bFjAp2j6HtvQgTYSXuJkZ3yLK1LW",
  "key9": "5dUgkGoB3ZnrUFpxfxzPBky8eCeqapzqjvETJ2rsjdH9i9VFBtGZnytkog6KP3v9aQRKBdb9bUnw1eZVHer21x9Y",
  "key10": "mjbKBjH9Ya62ygXSFVPwrwDVVaoQUKYvEBsPxRALxbFwrAgZjeLN6AUH64vZ2sZevwtc3SjP5MLXAmzWHKXr7iP",
  "key11": "5KG3vmz9jKEajz7KfWVHEKxCjhNn9Q88vwW9sHGuudYMnAR2k3RCyqnwbHpBvPyB8bVLvNDg2zw3E4etmYanG5PH",
  "key12": "4JVriKyQwJ4kACbnvZavAJcEJKvdC4p3w7NJ7vdZbdCHnyyaGNaDkVhLANKnSD3H4cMBXQi6XRSFP9E6p8UNWytS",
  "key13": "3KiabzHg8JrAJfDWMWnJTfhqkK4B8ZvFxunc878rfqCuuwBZHmYGVg8hu1sHpWAQoxrTYFdupg8k9L87gzgDAXRg",
  "key14": "37dwz6VqQyC32qpbvZLFTvPHYXp5VPGzfoNyfzd4y7cstuZ7iuktkbrKexP8RYhbA7HsHjuQgXXQ9R82sGnqkUeN",
  "key15": "3FUSSn6z4p2mi4PkAauePEdERCjZapFZianJZub4JuN1abykBKSZKSgtNAmmRyZWsd17toftjuH8geVuH6RdpZh2",
  "key16": "3q7jaZ3xCBkijsnEU9Eabqmsx7aE2LMPR8nJV29hK9eVgcZg9zQpj7EpFGJfqQd3dECR2mnJq5WE5cYEet4i2eKh",
  "key17": "2fS8FwzfJgb58TLfLwnRKW99NNTsyRskjETHzH51zKVmnU7hez7UDCJnfBPaELpW7oKNbhcTV3YgLBHWRUu51HdZ",
  "key18": "3yiRSki69Vd4yLvn9VovRmjPejYKYpv1x9AJtEQUpJ6SXnv7LmrrtvvV3fqwj8sqegy9Yu7DBgc1gNa3YcDm5cx1",
  "key19": "4FzRgmhCW5LssApdDSGgnCrBdBERH9E3b3r7CqnC39XrpzvpDZLYYVhkkbQHnHXvGSqe5wBCoiTs7P2Pk16c4xQb",
  "key20": "vaB1iNuGHyrogBfCSRGdMX3CjxMeVvx1SdgQzTZYT8QULsmi1QzT7ExEYKP5qN46pLq5QKXZFC5VNxigTd5AdSD",
  "key21": "5MQnt8bDRSmoqqn4UFtCwscJCLy6ffCoks2KaxRckBBQtKdiqP2HMS4A5G2b8oeQqMLWMAyseh1Xu8TvwLeKd4GT",
  "key22": "jcE2thpQdywANJ5Sci5UhHKmdxKh3VkpQDzb9Dbb22PXHareJ7ADaegdhHQoexoUyF9D4XgCu415PJjfgeazvCW",
  "key23": "4CADYBuEHvfYcm7Frq7pz4eD6tNfoaKmz4U6Gt637WcNYxSt3S31N1UCuLCWz2db1uW28mouqcRHMMQmhjs8S4dR",
  "key24": "mAkrYnkmq4BLCLeep4H8ohfneby9yYQmkmjevHWH7byQjMUyy6ytBrMh5zdJGrHdiWJpue4yKtC4keU4GgWuwtH"
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
