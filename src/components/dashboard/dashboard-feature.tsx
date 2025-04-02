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
    "4LArwbMtZTLxuy1rrRgreWHVU9JKgx4azgKpdCMbBapkxZLakHJ8s4aHNSYje4UgbFy5Mk68b88hXG3bpGknKrRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VF8dotNrQy4ABwutoxE4e1sYf3AsseR8DUvZKcr6Nf3PysmTAjYRJjPD8NpgSA11uFxLw1fzBtou8W1Kiuhfkdr",
  "key1": "4Vr2uYhsTAnhGnhMhcz1ehRBCrprMmMJariXfLgWh7u9kPBPRgFdaFyPb8sZ186aowJbTYJSubxJajz5FiwcxYv7",
  "key2": "4rRw571VJ5s2tcA9zoE4TfW9V21KZd7jcU7mXsfYY1hKV5yxxN91JoQDRkqU2n4nQw1vA9tNYUDWLCR5uk3u5Un7",
  "key3": "46FGwq5YVcKAwTkpHBLL4Zg22crH5pE6zybzqujeWfgcB6jYgyk36xF4Y4Xc1ZsWHJyLjEoTwqsywALHNFz14sT6",
  "key4": "2e8GnqVcXFSxtYj13PWz4ARK1BJbcDruRw4Q2NkJrGqY3PsMXGdgR3BzQ9CZT4oJHFMhWKUo4oEWoVntEkXqomCJ",
  "key5": "3npaTjaPacbDfgWtDWh56LL9HRojTgrFRv4Z3x9i8Hgu6Psq82gAr1y5LPqjYxiyRSbCJUwirpbR37zkmeXPrQMg",
  "key6": "4Nr8AKL2MiD46zFoqanrP4xtzyxsPUiZF8xcTHYaB3jiCz1B5qJuZohZNAmX82KE2FTUEfZDW7RvDtrUoSWnVy9y",
  "key7": "ntSXrVbUUUHMh5CShX5ugSbLc4AsZx8AVXJjUA3CzpDo7496jGnwcwptTJ9ZaJsXgbZRZf8RKXsNBdo7RdKp3XK",
  "key8": "2AvsMRcXdMLC7C3duFo26o1kJYNZitbwDGr9b5LQf4rVSj25tkFyMANLkNEKPih9WSxLjzW4zxM3skuA7AUY6K4T",
  "key9": "u3quFc9Z8ghPwwVikfWmJP4cZYBnMZKEMSwo2E7UUAVemrsoZJzLsdWqYykeG7iFGKCS3ebqpZkjy1qnmSowCFN",
  "key10": "2KecFJg5yUM2VPcTcJMsWcV6p72Q8iXndESpuMjj3qmTL4MuBjdRiQQzdtCVHyR732ZnV3GLXXeU1DmXZRY23jMK",
  "key11": "3kc2JFmjgdSfP5TzJkeFbri62eCphdkiJyp1jHCodHv29HpficiZT4BJiNVbEqZzyeMUSkycNHzxZsvKPkHHbTYq",
  "key12": "3Etnqrchdo9c1ne25gvmWyAEGwAaxLqKsCojL1Y21d1Am2dexL37BGDaiHNN3rkUbScg1bUgsp65JxAJHDwpzKnx",
  "key13": "55UXDUUy4sgJzpqXGcJjZ1Nc2qJtsAayb7eGzShLFPXv17qHzaQzF6o28uKLJAALcnHyhKRzBg1PbpHrVxvpNZe",
  "key14": "3yTgLcSYTxDuDH1WJJWLtX2dX8fbrBMeiwgGyMyNTT1AdYv9oxZSwyUGT4JKUQScbcMqwR1rfzoqRBkAFnNVA3Li",
  "key15": "4h2eGWB5uE4jk6hQMFypttRruCPGVQvL4hHtKTT7YxgyHFMA8R98EMfy2cU6xdZ1QCkgy93y2ipSxtSJK3dt8F33",
  "key16": "7rzhDsVfS4AQ2DX75SvH7sKY1Kagf2rrpLwyEqrbn44XBZpCEKogyjWyPipzthcDScLQGJokwrYYYCssFwsajoc",
  "key17": "4H1HSXR2PawJdCbQnBMzDnXf554qZHFHJ1se6KejiHQsVyxzhrJJLa3q6qULnRkcziktmY4CCALaLFyN6n6Mk85d",
  "key18": "53zpPXvD83UarfGT7j4KzBwYPLbkSJJTVNA4efEpy68ry3dYWQqWKcv2yLPzP1TCSdiy77tR5Ens2gG6QV8NKT58",
  "key19": "4F4CkaFcUKvpK973L4JYL9GMraaYidFABkE12yWiuNZTHjBPhZAozgoygPfDurqaQePW93fTi2iaToFoL4o6juyG",
  "key20": "4aectPUnWAVm71aevvgPX3mKd5kGBFvFnnAbcapM3dbpiKGoABfRRXh6f3EA6s7vfAYEtKmkPTQgUj7M6bg2bCWF",
  "key21": "3YHMYinGBJxjkfckNfqLg6LtzsZPAHB2717rzivFESzLDuPs8u8a3Y2URoV5f8bBDPwYGAc7DiY54WKpznbxAx5Y",
  "key22": "4hvzpCn58zqQn5ak7fdedxtHmE9ggEbyHRRaw3TX4JooFE5jcsq4WYZH1EtY9g6HGSrYTXT2RjKgDNgBz4Wksmfu",
  "key23": "27r8eHQ1M2ur5xMoHTwLC64u2zUXrPBVxwBCMsjJQN6tYyGuz1srMZNRtNAja2XhHUDVMZCQUFHtryUVWskE6Dcu",
  "key24": "3jKezTXreLccGqmLXsVEXgad3hSdXZs4DK2CKjhkhXYG7GFWQD5JnQv7Sq13d7KUvN5mxW3KhNEAwCvZs7qj24Pc",
  "key25": "4wrMHGX928soDW1RnA79jb4kNwes6XqWtp82KkxhYXZeKkbGcTxKj4TjLcrb7hqaGZLyyGAsTD8s7ypfiix3aSeD",
  "key26": "5U68y5pWmu9MMSZ6jF8XsMPrGfwSTJB3S3HvLcDUx45xhrVp5YJ5MH73dyGAQY6QxCAyQEox1fS71qgpZix5SHeR",
  "key27": "4ig3fvgj4LGgJPGXFxASnRduHMVR2ehx7qg8LqPNCgUNGLuSQAfxgpUi5KqS6DwxEYhkRdKoEgSYwz7551fomChV",
  "key28": "2pzNhMNqoXLi5fHZznLgFBxmHs4MQs5TE1P1NFmozxWKwiGW3X36m9JCdVUXEGRJq99nQ76dVcszu4GAeMkB7uBi",
  "key29": "2NF3dvPESUDvVXdudGj62TTER8cQ5K2zHRiNKcD7oBnLLfZ3vr3wmSj8TsMaW2Q4dqAELqUz19VgWkRRzvo1EWSh",
  "key30": "2yjFfV4aUc3YxCwkQQJenvqNDfiqMkLz9ijMJjy8HirwbUjD8VQDq4vC3tebX7s2kPLqWkViT67taEUQ7d61kCn1",
  "key31": "38WC5iKJkDqYRmrtBW3aGvtZVaHWgbYVGNwEQAiqwqdqjZwziCqeGQcYiyQJ9yr71GafETxhLG7QKzFBKdj5GtMu",
  "key32": "3fPZNhYarJBx6zqB3munwPUg9n1hpAN5egKPmX16QEygPXa25qnKfK2V6uRvg6ixvfiQKstdYdnuZvpd1EQUg4Gt",
  "key33": "eeeSBTzvxWsbgu11oQqgYkipyvi6GKo6AhNjEK1YHd1Gy3JgWKYap67YRNmZs4du22geyiWUGwssm6AVDunHU2x"
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
