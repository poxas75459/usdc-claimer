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
    "25XJiCyTUQtWhFrVma8N6YHVgxbY1SZKCwaSVxGapZRpaccD5Th2Ch1xYEveeJNN4c8HKBBgzidE6Fc6tRVZQgzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQgujsmN9nBed52ffZA8VokvVjq9g31qdWnuLLqgdKiQcAy6LHuDQfL2HrPFDHAdQfy6neeq8dN4rCi6S28gz4B",
  "key1": "2bGDu3mjDMrfFQfcDYGCkG3adHUb2iAuE8fXRBXeaBFCncfyPJUEX6qewmEe7Mz5oH3EhzVdhDPia7EcKuq6uxkj",
  "key2": "GWR7DZi4Pddz4abqy2oFWKCyY5YDX1rB4TDaCHCVWQncpV237PF1cGz6rTFWXqERVgvQ3eVhmnehmT8WGgfutAi",
  "key3": "G6xnNTKQfN3nZb7LYuvy9E6JdPQvCcLsbNSgzz7HXZVDNgJkMM11rdVW7xDV2ZMR7fcRcta4jLXacXe9btvY4LC",
  "key4": "2k6ptgaQ5gnVo5G6jHfbyjnGG2xfd7RcoA5xg2kBaWr5xyQ99zrqUK2kEQXDCL2LP7cZgTJeaNKDLAnDt4SM9fzC",
  "key5": "4foe7sT7KgxDqd3P93AqE4m82mJcPidrUDw2SCHLMC7UGDrpFY83kd6JdGifuDYG8Q5MPkYXuXxffB43ooPphpuy",
  "key6": "5is71yhHAsF1fu1ZxrhXULm8dvoEcHE6zV4sEpne64AnPstuR5jyjWzRhhJmGhT9sD389Zi4G2oVh59RbFRTZqqY",
  "key7": "5o9zWLTw8XAYEbnXFWxssWHcbzer2reoibZLEgGXH42eQkpQqQJ5eHptxojhntaCV1ETvvGGsCS5mtNHG5DW7ci8",
  "key8": "3JPaWUZNjzSEUxLcPesAk9GSZixCVE9V7vEX1shfBMzfAzVMwLr49J7onK5gyxUg7mhpBjZVyFVAyyMkHe6JzGgf",
  "key9": "5pnmuCiDYNygibUCBonojmhRLtuQpwU6nQqSXZADBQZze8iy9wbTDmgNmvYF8bqSS2LLbPFf2RVNKvDsCPySX7Sz",
  "key10": "TGQK1GAkdBA9tX49peRWRX6NFPot2wjMdLdgKSncjsyaGMAVMJHu3wQnFBEsTBzrdFJ5m8MbKeoQPqcyCH1CkGm",
  "key11": "5e4ZyWWFgTEtiUn1hVyvWf2WALbW3TgZJkHemGHphGXiVCqZtp43XxRQ1zbVDrVBTGVbaNZPiVu61XAJa1NYkPo3",
  "key12": "5Ftt7TsdmE8FqMrR1UFUJKfBwhVD48wnKCpsQZeT3fwwJRgecqCa96SuNstuYZ4p91m9bHFCfzQKshd59c8zXanL",
  "key13": "4ia18QtHeWGbudd8pyyTAkLqTQcqMrHW6bok9FgPCMTdRcYZ8hAy2qSvZA7qt5TcwxuHjqt2o7uT156DzBJRDYE",
  "key14": "3QQYgQjQWFiF7HoqoddqKEoXkkjXRtnbj2s17vZrE21VytpvTtqP2sUzD3a9No33fHEuZi8rZWGTPrewtUG554pd",
  "key15": "22DGbAKtzaJrnmQARhrZBkVtD1LtMZcs4iDCuwJP6kSWMcxQQrRzvf6QRAiGjGjLiLseqYvV4WB275y3BmpnG6Yd",
  "key16": "5YZJJzXxqQRyLf6jMxerVu38Y1B31HXrfnfhAerymL4FFxcKzf72EqJjLgsyAMZoaNF7KCPGuyjAKNWmwjhkD5EH",
  "key17": "4nHsh6MmqaSeG7qn57d4bwy6KXHq2txaDwi7WvFazeUwn368MdxEQ1reAyZXL1FMjYyWj43PcJwf4T9XMF3MJKYr",
  "key18": "4fpiNHSaycyXgxnLS4kLzNyvDiAwhRhBZkHY2rHFgVV9A2YckySyfUiqfk29SiEzqrNXDR7yRB5fWm3Lv9QDK7hy",
  "key19": "2V7JYAJiTHu9m7qd63n6CjChAcFmk2Jfr2QEABbUAV5Ma4hUVBzzRG482nAPY3epHoLL7ozkCfEnUoP1Bh9DnzF4",
  "key20": "3M7SS9qgQphrq6XeKLyaxksf7z6QHZHYobV84PQKpBLNdWSS6fEmS6zn1dhBU9htc11SN1jgKxsAG6XTi1UdNBZD",
  "key21": "5Q6Cjho2meLeyPX4t6RZ2LgQ46VKLvHaCiV7pymgahsravMETeCcJkzNuyMDgzbJbiL6NszHtiB1Mff2FCbL9ZZ9",
  "key22": "4U3KCA3yCyCGucgJF6VLNCkjcWtkqMniXGbam7qqFJjhdEMGcLN2tiYWQoW4uvwDYnHgSmbqtkEwsLYJZBwiW3Ri",
  "key23": "5q8wZs4QGexxzm6SSqFPKFcUotb6Ca6TnY7KeRNCzKNSvWqZaKMJmyeVtPfCtmEDVQCHcqpj5niWidmhhu1W2rqT",
  "key24": "5fnzZXeWUJAjnhhB1ah7XawyV2pLPvp7CW1RiRJWmm2o3t29VSUBaxdfBaZh4teTJooKL3DtaFA1YYkiq63yuRK7",
  "key25": "NBuPbDELj56c3aM59KnDABryBFLoWGXgmeGzma75jL63NwMD3SW6upy3RhXGfsg6wag2UyTRhUtWy51Nt9a5AHY",
  "key26": "2nepDPfbQneWeoLgEUXGyNyS7E7Za7C7nh7H7KumWSPLmZETD5atxrUtpTvgczrRDkh3zZW5SXZtn1FNf7R5E7jE",
  "key27": "2ZiaYNLPjJbm2zDJW1wk1wvdQPSvmmWM5qpg8Hmm6AR1xBfG18Rc3VbGjwqkmT8uAswpC4sow8QmVf8SuUaNnd35",
  "key28": "625giX2D5EGoDK7Ug3wduUZmqTRBLfhqCfYoTuJEJ8bzQuRHLbTKQNNzt3mp7HhGZuwajYDhVKM4jMvw63Nk5PJd",
  "key29": "5rzBuw8nTNRRgzeY7vY95qNjkULCrZTXacQzqhMNVV3VQoAV5a2nmtVU5jQycbdsbxXjLE3jw1gjkfPLCLtHgUev",
  "key30": "4jduyrCAC9CPbxpXieAUX8Ru5bSmEPxtA2JeWoSxbZhHcY5KDDoB13u5VQZehc67TmR4x1ad8CG5nH9iAq7DuR94",
  "key31": "2FJcuEy6Y19BYcU7dFjQotxN1ATJVchxqc9j1u7wmuznfUe5sF2zDtm5TbhqiUDZ1ik5NvVhMXubNyXEgLauePWu",
  "key32": "5nVvEQGD5GPR3KHkiJS5K2PLLJaxrk9j9veTmUDBPsJ61RUyzFyZ6UQqGUUSYzeV3aFSd4Cvt8gfG5SxM2sy1C32",
  "key33": "3YvsZHEpKmjdSQme19PqvUSNRaaEcfnJfwiXF8XYukQzMKTVniiRzL4EPrKWExTk6G5gfAfbi8FXuHxGjuMnM7tv",
  "key34": "4LWKiHy2nT4sxcYYUjx2dxVWuQKWuppk64FHE1pVhyoARYoJwy2QTPMNacwPL5ceXSKfZWWYRfJJ155xAqiyqbD8",
  "key35": "43fmU27T6eHQEKDWCFqUPYyDziRc3x8zgQbS612rRWs5L6hG7Dh5ctQ6C5XMriNanKLjTco25YYEmvWukSjWZx5M",
  "key36": "4efzKXhV2J812w6NJyNwfw82BAway7eRYbs9aFuzqfDiugKzid4RmeTffmf4sjYUkktptD4w6khJe6KP875tpon",
  "key37": "2NaC3xihjEGb1YVEH157JsNL6ZHeFv2AUenWymUhT3V2N7qNJgy7MMLtg6uLB43SvtZLGFo4HERBdCq5m4hHasd4",
  "key38": "3R3o51njdHjkoDSPpvhgVmQp58DMmWbAjjxBWBh3XGsHcp2iZuee5ocpycRUfBfVdTe6Az5K8uBvtXzTv1vG2JmK",
  "key39": "2qBeji3eEc1MKxrgg4r6aCuyR2TbbNNZj96pZQFoLaSJUzBQY6tL4CGFqcWezzc1MKu3yQWSgtFQedMfMxZQbA5b",
  "key40": "4N7mqHcPfAGBBorwa6rTChqoQGzPsBjK1vequmMbtjAxiKcEAoCETiihQfTmmFd34m6KxRbdNmGqTkzGY32C54xb",
  "key41": "2ueytVaaoDhNrRgfm6FvWbMRTXY21MYMTkPeBapjmbSWuWSe6e54NEF8mmRGctstUJ1czkRWQDrSEYWrPsQL4KKj",
  "key42": "QMuLf6urn5opd9yv6YCYYjnKAM4qhoa9zLCv4CRmT8hCSzPgas1zQ1bhivrCH6AfAgvRULtvQdBvFUPLoqBJTVV",
  "key43": "5bthygqKEVijSoWYpMDCYAZc4ZJhhxoYEKn6uWL7Hmq4wDS22ppXpeLm3GuZtAmuDR76cJQ859NzbNP3oBD3537c",
  "key44": "2CoanWcRzbiK9oEVCnifzHmD7hYH5N2fYEvEoNjTuqecYnjqQ8zkUYa4yNS2j4mXMQwNRMLPj5trLTJfnZUSWREW",
  "key45": "oP4iK3Syeut5WAfj2crD7r7DaGiJunKMedrmvCSM5ajRgcXx1B9Vw6GJ9bEE4JMwiWCenfTjj9eAyX64XhBKevL",
  "key46": "5CBcrgyDrdBqhRtX5pwPsD9C5rmPPCGUH8bCsCKPggqy15iwn5Nr7UztJN1atx6EcthUzfMTdLytM4W47HNiquXg",
  "key47": "CsiLRqzKetVoCkM6ABELPMx8o8WEnLWwEZGTSC5QWLGkx985wsYsGEso5EQwfUfj2SLxVAkzkbRT5VHR1d1badN",
  "key48": "3Q3SZuQfo8NWrNDkLbaEWUCMmaB9q8rUZXrc7XAzhxeVs6dwTKDBagHTy9YwKeKRWMU8gxdU2sJ9yLb2VmiVDVzy"
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
