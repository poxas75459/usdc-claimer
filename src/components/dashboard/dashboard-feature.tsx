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
    "5WTvw1usNPLh7sHMkjYjt8kLdLMrhj3oq9f7JjAUC6JhGUjyAmxnnkKau47ohmEjQLQ8MiodPfj8EKcdK6yfk8Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YwrXLnHfrKJvWCLBXeLjp2kqe5qhkvZwnv8w91c4RpYH8VR5YvCVRm5w1L2YhQzUX1Co425uPNqQhN7gpX3fn5b",
  "key1": "2KjiqugYfDyiMDv6fS6SiwVS6ZMjeUwR682fsrfTDdZ8i9ajeToPWUdtVtft84wEwuEdfqmm3YPbjJNuPwANK7Gp",
  "key2": "5oSQ1xcCGg3nswAT7UzFY9yBf4Mm3gp9JFqAqAVkQPZFrD238SKWqYBs1MkNPXpk73xUN5PgA9ff2PY4bbWaNpcK",
  "key3": "5xXMJhEmkXdGmBsmWzCitY5yr4ZJJpH5o2zv8am4FbFuRUQSLxNdNRdnjeQT3Rj6LYGcDUhhT9ws4isL3V1vZMyC",
  "key4": "3ZXQsxDY3Vkmdfx2TfTyZSq928SehGjnJSeyiLZ4p5VE7kCypiixtTudRcXKCqy15Bn3sKtYVo3NrfVHJnDV64sK",
  "key5": "2wHnTq8xntHmjhRKeNsjHzbEB4ZTsP1Tqdq74T8GSwbp6PsWdgEjUSdaF81zUPsNXpnKdgsBQ4KBaDPaGomk4yHc",
  "key6": "uux2E7xiQgUdEWA2qpYMuXJNAWeS5dFRvL1HbwTpsKWCqDmaUsCEJ6nhonghm3KG9B1uSX15byxx6LYQLCQvbTF",
  "key7": "3Hs7dCX6vHfv1cT4vGskexLZ2dhceNCcVqKmNizMvhuZJ8dMTCzfBovSyJvMYAa3fEQy68H5rFUkgNUdiEUfsw6m",
  "key8": "2iD29WSU4LyLPvhLXVtQwfsPg3KJ9SLKjqRWSz3zoJyCJ26v77RoAxGMMmdUnLTKPY6GdtahWgaZmrs5tSpbCjiV",
  "key9": "4sxeV5byLnpy9PqEs1atF7v3d7xt8sMXwjCGrPeSfVrJFDB7dF8D4DXk9oh8MBKVv2GbGQj65i1WNiS1d1zJJUiH",
  "key10": "4vG4Ab4KiKgieeTG5zJ8c9LyiNr4qQtaXNLykNM3eDS88NbniPfDY4LGWnnaS1Hr61ho9W3pJL3HiVHfuVpRWQVp",
  "key11": "57XLRALg5stc7dKMHt9dfXu22c7D1zuMWPDH7qAMQ7KzySZRDdNjzWQYC1yM2HHvtx4JbASBfVJALKL3Bpaqi2CJ",
  "key12": "3QFFfyv9mZAjVQ7b15FYXqzi5WpgpzY2ph4SLZwXNgQkWprsSr8Rto9tLV9TNc4wW25kFEwKqvecNfZTnj5PBf4f",
  "key13": "3WLP4nixNKNkkfXkb9zjf7EYs7BeanhsSwCKiacGAmDmhuXj4SmaELEAJCGco3zZqthm888XhPQxcqPCCxzumi1s",
  "key14": "2cqTEFbxkfuvHrF6noKoJxyDhN7ZJEDzWdTAo1EMwKimWzxLzGiFVBbknF2qXmLuHxZDDEB1aQSdSyiXyd7H257s",
  "key15": "3aZTzH5mSFiE8rkFswiETEPo3hTZBwsR1TcRzCMajjykT3gC4B5o9R4NVCEckQ6pBK4cio9AToNZ4fHfcs2nmtDs",
  "key16": "SVD971T9GZwe3Ds9kFrVK6DBKMbSAk37kYGxER3L2DM6xXcD3ksWseAUGRvkEPeXbB5SXaKDCV47JVGAEaoZnrE",
  "key17": "34dsB7qHpWPf8PTi8mkvMmUQTNrH7kuSYSQz3guDEpzdJxEoB6w2MzeWVajSq3Y9t38ubumkpToBnLNq8pkKuCL1",
  "key18": "383ds41Z2BgqTL9EJathJJAX72mrKau69dnJCZ9d597wHTJzbw67wNfS4r2cc3Rpd36WUuM9R7kjtyqGd9u11GRi",
  "key19": "5SeySZyMLZU4JzZUbp9Ci7fvDoN8VEWAKRrbiTrMWEjHqnE1QfABearNcvXbsmtxj65dvjaUbBMLfUTTMX2oonir",
  "key20": "LUiooyYismhrpPhpcKyHvp3b1Z9h9aXVXM68JWXD3NQcipwdbiaLaXnV4qvYpnFv5AQ3AnbJvABwtDByobKyVjB",
  "key21": "5KJU9JsKcDbLKCWK9obFi2pfhDDPTF3eGaF3qDQ1EH6437wiz7BJA8tZc1mXhdhEXEDyLjV1SHLj6rwpMi9zRs81",
  "key22": "HxCvZpiH7Hbn2X6KAMaeSd16TybzEH59jwkRm1sWcyZ5BnvQpyetzxdNbpyYU4bJRd5cdACGUKYxVJMvgiJDYAp",
  "key23": "jTRbD7Ks65VVgMht2CxPEp84WW5shvP9gMSsNpyGfkZqm2dahiZHzfY42dwapwPtFAnNdDHytKkXZbsaGvvWuS9",
  "key24": "1Dr5CKhZZK2mQC6yXvY4YKacH5C8F9iBuUdC1HZxu6mL5897ukuja61FZa9vFfi2p53BvLRp9ZtqQLrJrRC4TfK",
  "key25": "2d9FRDL9RJBfj9rKDHe8mQe2LYgW2Vas3q7Vxmcti621Adaq7M1c7EDcqNy5omWjLRomZ75xMvFJgfyGm3CcE2E1",
  "key26": "25gNSWpFKVVVUTvz9sGAYbjnUmH4fT7p9GpPiCoMia7j6Xqv1nK3Mbr5YAfv2WjMUFU47oUxWMaMvbz5Jb7NTEq1",
  "key27": "55LRCUHU5yaHxJWLXCmDhhjs3hAQSqtTgctBHZvupC5GyEWokbQDcuL16NQpr5GDPAPonMiQJqGfkw7TvoFtRQE5",
  "key28": "2GgVW5DmzJxLx1cPYFKbDAnPzd9PD4shz5krDqQAecaD9EQ1WLiXwiy2dwYBsYHVtwpD2DcN5cW1Eud9rYEm9eeh",
  "key29": "Hrh2XDm4brWFrztivdpy2guuxY3tMk3RLae9j4t2GmGbXHjUWBMad86SJnizLRdgBntDa1MuGvddHSHk2FepdxA",
  "key30": "3fqQaqHVoS1oFe9wuS4LzXfEqLWAw3LFz7oCJDtixX41796v1hpDxQDPL8iUP8cH8wznfy1qxwCmSsWMibeaiWRQ",
  "key31": "s7j3RAr3Y4nVENG8TJs5j8WPUhf5EbQDZrF616FiWXAtTQKXqSoL9XQGfGb7VP1peSKVcL73y893YCXsaMuPEsy",
  "key32": "AmEtE87Psgd5bMpDjrdLACnpdZtdeNtohk1ZLvPQBCtoiGiExPymyinCynxnqWYChtkENKSnk2ByuF8BRzm1mP9",
  "key33": "UUXqZ2oFR9s2cZ39Ms4arNrxVqyvWvtnp3eaejUTQzmVJXRW6X7wtmE53kLmQ3FEHRDVMvhvgNZpVu1gzQcS7Dd",
  "key34": "CQjLgSH6ybkc8KoRZPNaEc1sNFgHi68m2Aw9EgDfvBj3MdWirbCgqSp3BSnWnjbYQ5FWHwnQBPwS6QfWBHSY8P1",
  "key35": "4FuJMWzrnziAbJjhA9NQfyioE9B3F8nhoDMMG5bVGh6N2qnYwYYZS1G8yaMLU4ZHasCMrySBrEtQ3MDUjrpdAot4"
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
