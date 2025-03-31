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
    "78krd8Dfvi4LSUqktZg1gemaypHQAt1zgaFTUEeoqGLAKxJ8Ea8xRuM1v8L4kwyMD3Xcvf7YKXpxHJTWYibGuux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5taGz7orbWqaHDwqwaoyzAseJFJDwiGbVZjhN8ybFs3r9gqhMWSWkNKhUcMNCBGeYxYEaG6QpXcyD9GSjyH5Maus",
  "key1": "5J4MKGmjQ8QRafzgUkL9RnYELVpL4d8GubWgZhF5FzJ994E7eKmBQjGUgoDhAS7A9TYApT38tSSzkaXK4RNhZ5V",
  "key2": "4a3knaRcY476jti5ihC9UhCVvEr7fmQgREAtbsx6r3p1bqs5xQH5GHwYetV3ZBG7utoNLsd5fMNgptNXz6ZhDdD2",
  "key3": "b36yjwAVL37Hnv4UybCBmJuwzyg7cjRgN3voLVEv6TfFvdqesp6zYfpfK3Znwma5p8SsgmZMjmY22DBAJGHPsHX",
  "key4": "5iHWDVhwS6cqixAYg7U7my7X425ThBQVX1DbdweKGZg7MRSeu8UnpBSdbYCU1BdhfBUVW3HcrRAeWHLxQFJjCpj2",
  "key5": "64LRRaasycJUwac7HUsveF1HKin8dPvnQ91GuYuPzkeiDV7gtgKDUEJMdGTaUG7FiMuCxuTkabcyF5p3PDfCxci5",
  "key6": "4xpYAGGctar7kc9e9FyYMVsgABo238dXWY1qgFtWSFTSFRW6wtLsnzB8RQ4mNauuQeY4K5L8ewWDoGe5u6NutYe1",
  "key7": "5uG5B7KendeTaS2zk42L9UnJReZi7TKLh3xysVw8tcE9iePQCL8kQ4V2sZV2eaLPwDwbYKNbDQMKBt3LoE3gxVGK",
  "key8": "2YHCXQLgPcf8eZaWovWF71o1NVjkRZ1hz7YnxTmQYNGU579jEAHE7zp9qXy37W7E9oNkhTrmqZi5m8GPmT1VLpeU",
  "key9": "5bWXTGQUhmSHJ2AMQ3SDymcMyX4uNjQtQAeg8g6ebvBdE91jc65gswyGQT4xtFPaeDrN5XFEYcT1WZRTYhBJPMKW",
  "key10": "5Bb56z4VsCWmPJggGSytvnHDz4LjBoY1QwVyjPgiJHvRpaZH7kyq8WpBnfqRokZhq6cqtEmA3n748Krkd8sxQiDV",
  "key11": "iBwUJyqPKPMdYPVKQna8VwkULbYbyzFrDKuadc6UAnhcANEZzFUoW5NTQ7kpKWVD6VwKhKjT3S5NAk8aTHPJRWP",
  "key12": "6679KKUDeiVBaXdLCWqFsePnrYRjTkg5DTSNurkQVSJzayyNZ2MMJoMfbEkTCBknjt24wLVqBcxbKMkSaFWJTEqL",
  "key13": "53utFn23Kxbb9cqEr5yNCDAEr77BjbE46LVmXLip4v5ZSWqEiEjgRgvkNLt9aLozS1WcRYKyhcwP6NGyWvRRAGZp",
  "key14": "rKm1jBXGiHpN3NUsB1YWx7NMpkkYfGxTGtCcWS7Xs419XMZsskkfPk8XDdWsk2EYPhkrohQtgDSsJgZYwuk7b2i",
  "key15": "4z3BAbCd4p9v9pvzLb7sPaLWbPGrJKQry4rdkX6SB1Sx7vD5u3ZoqXHCHu1dgpGxAEiCRSrDfRumGmC4SxivJMHJ",
  "key16": "uAqgYRj9SeXdrsNnMvQr96xamE4NEdKyxoxZGcg9AqKA9PGshP24ouTJZ2ESmhpyfngiJwGHR3KNqWuXFCEEZKm",
  "key17": "3YLFEu5KyEz5xwhTJodSS5nsm1DsGZGDsm1LQp36ZAmgAR92ALEG53iUpGqZzBYw1wtfKw2Xp21GgPdM4kQAWwU",
  "key18": "3Mv7ekzVx6c71xkGRz4HAYkvDbkbTyv4YcSHgqN5zynWFVoxVj5ZkDD2mdcFZboUH21DVq5Dnpg5LL4s5tfnBxJM",
  "key19": "2ZXH1JzsZFNcDBWMukwCc8cWYzXUGBt1dqEGzQVVBu7yUfdyyFyqxUV3FJU75ZjAsHce6GKReHZ9wFSCzeqc6F6U",
  "key20": "4xsqrBzQ5aeDHCNT3HK4UXq4utnB1Np9PtuGTzMSCH8ikoCYHqakuBSrrN55ZUQkgyz492U48s6AJisEERKDczK6",
  "key21": "5y92px3YKuYkj7fArJzHxcomstonm1Gwj39xz7yaNHsSpmCcY6TEhS5TcBzkyUVPhGciHZReXEFWY5LXYTNQmfJg",
  "key22": "sMto2nN8BX8ek2Aqgi9EzRADp31h17VnwFxnWGF9qTETjVE8G4N9xWNWGa3JYLac3DpkP7FrXcZPvzcQTQQCcFU",
  "key23": "3y8gHvxQxN9H7RYXXicco4b8YcrKQJba7PibX44GyiYdDCsedVruEr7oFjLSq7c6FbRQmpw5zmzezVad5T7JaYmL",
  "key24": "29zbfg8ZuJqHCHYinCfHDoXkuD9K8tAwwMHmx4Pf2FT9Z2yxVww1Aehj2iQoxpoX92gbdE9tDTnRG3WaLbkcSKyd",
  "key25": "4oXu25dGbPUeeqS3W8E6GigAW6HTaaYMMJ3s8MRCJ3citN4bV8fefqr4YcXQxQeA7aiFHJm7xD8pw2hw5v5dMFC6",
  "key26": "2AHLCNW5g1expituHGKZUAqkxudTCsGJ16GdzFnxjZojCbMVGqZcgRQRENMMG1zjfVQn8kPRPuxaKmcBnJyD2fYj",
  "key27": "646fzJtY7hJpje7fBKJbRFPEdPG2iVDTFzGbRN1fKFmJMskDfh2dNrFW2hs9A7Nfc7RWjCp5RZfdtBswDee2n84T",
  "key28": "U5Z9aN7eKqAgRbjYVw2pKBUZW3qt6Ein2qm8kzWdSJqQZUp8h8YxW7V69iZXf9uvi3ZL9ARScQvmT3zzGtHkSyZ",
  "key29": "2wfAC4Fgj8YXuSFLs2XAYm5goaoW2iyhJ2BoAoKgsA5SZC4KEx6yxCKzBw55qKWnDcmXXukjnQcAYVTbSUx8XL7Z",
  "key30": "HNZwkvBQjFEZTguwzoqLNsuRdGo6h2ZYPs3aCu348QT35zEPjfii8CE9eNZ35tmZKdBgLRHgBU2sxTMqojvxeaw",
  "key31": "2E8EC9iVuurWV4z53wSXtN6AjtqZdQTywZf4phR44pUJmrpSMmM8xzWKk29JT65pj9t2DMr1CMfYkLycWTCajDe1"
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
