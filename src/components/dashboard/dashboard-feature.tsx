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
    "2HLjtqt9j1vriyvQL5WkDGE7dPk7TjTsHaxy18JZ9nAjhG3swKLfTLnf8evuKGPPET4icyMDSBE4FYyD8JCrngBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aKgo34UnhpAf99mbFwi2vTLxu63rrBDz5EpUASrSDJg9UGkqDAxraf4nTjM6qY5D34XRNEGT7d6c139igu5cP8i",
  "key1": "e5xw4Rb6dQ7m3BngCdaNQZpykMTPBMAJftk23HUrasTg2DvAt315Skr91oabjt5cJFsR8YFD9RXqmbqFfRbDmAn",
  "key2": "2FqsMAMQuvz6EZHZ8bKetBDckg6P9eCnDYtrNjDZrMM5Bww5UNkq9wfpNQwYqDoN4vx7yxc2eGTct5k4TppSz6UT",
  "key3": "3DC5gFpxywMNkjZb5pmTJvXB2LQRbajJasV8cgb4osnDdUEHDFzkE1gRCgji7MZfLEZTVA4DHLk5UjJxLgdUsKtu",
  "key4": "44aeyKvyoXfWeLKndfDgbxyn4m1pKtLW6t2j2waGF7KDNfjyfyQoRLRS3BKSrUfsesRWZRjB8ZD4D8QFEPEieRWt",
  "key5": "32GFP1tyNVf1r3iSXhJBvnhaf2n28nqkgAHfQbLaQwzEHs9AbcUoQSWYxDSXPJyaRFDCc7mPFs5yebPe6HoQpDm6",
  "key6": "jevsWojy9AoLub3EDPiyUX2xdf7BpfZJGHiFQ1VbuFRGugckyDpKBj6uoUyB7QNhURedpG3v61ppeoBMgzGgcpP",
  "key7": "316VrWvQZaLcuX56W1AtA1os1Yxh4p5cUpXuVf8UQK4dVGU6Hv6N4J1cKgqLhiSRTMzy8vg1UPDAytqLsLnV7wTV",
  "key8": "51rLShxTngBDhWmX1xMAXFHkcbHZLhgwNJfcxJbKsrhKwPXdVkQPxziBdsF9MBNmfdBc71sbyAkxsTkumKvW9VJ1",
  "key9": "3L3jSVnsxDRY26zZf4zg8WwhHyE3YrLir6Q87gvWFBns18eWFDMFZnKnCiZaJz4uXmn8e3NeczmXqBvjNrsaTfHE",
  "key10": "7Gh8Gdkf8tqaYHe4e8mUGxQ6V9ioLCnxSnfrBUeZmPPb3YfQ8vNEQEFCzJYLFJE3arUf6pFaJDEgDCqUwszJNPn",
  "key11": "4b453jZ7MNv4wmnBNa88wcTnFoSMaYbKp8c2Maq6Ldm1piQ8KAPJ9PXrwQhnPHpKtr5jMoprx3pw4AAuzZ5oFaFF",
  "key12": "36Z3Ae61ZMgSbLjpNPspYt4g4RMinN9JhFTdGnR6UANGoxKDZsHbQ4YZJCbkPv5Anp8qNiB7BrYwxVD8XgXRQwin",
  "key13": "2QM69DkEkrQ7DKFBNJDCtuAPJD47HSYm91tNyC9GpenEvDSKTsDumbUHL8ovEvWJQMsXRbz2BRG7hayoFDJLwz4N",
  "key14": "27513VdHa9FFueB7GkXE3wnPH7NHcJd8EgvEnTdSuvYRiAsh75QGn3w1HFt7yBZmGfyyYSwXmWP8tN4yrBpj17vq",
  "key15": "5b25SunZLUEvu647bTfJqQVt1XdbTsirV9v3vUP25PkbAdLJMWYrWoiaRosr3okmN4wxBE3Jq6jSRnfNLUgjsREQ",
  "key16": "4HZg5JtYhAo62fAUyz7BmQ3DnXKYoLsvzwtQ1sCQC8vFVrw4JTMHP3UHWK5KkVjBQLkmsAzTGDeThRH2t485Zidt",
  "key17": "5EanstJESFNcVEtyWxcC3DXjzFk4AkNwPZBeSi1AZMnM8Pfnjaz8CVqQojMSkhyrQjYP1oGymJKew1Zhvdi8Yrsn",
  "key18": "4pBj33NmoReij9n3vGwT2tFFVMqwC3RWk64ExSyMaZpJsR4oEZNAUUJAScyD8i8PRMfq4WsiH4cXRvdh455acSzi",
  "key19": "3Ltpb5fwqhT4YFt2ysD8t8LkACFK8CDmYHWTU3wdFxbxmu6DntpenXTLBoaFh1XjLUqY3TZSzF7yRFb3t2pdkxgz",
  "key20": "5Awy2pZLxNo2sSAucBAJh1ZpeLLsNC9sScdUR9Eo9HgiZ9WxFaZYnbe14UdMHLHbMEBpMCKengwmNgmTMwTzodM6",
  "key21": "3a7ugew9KNjdnd6G8DLRgnPYDT7FGopGUrxrHqvFaZqYFoM3TJaM9JbYuDcN5zSgL7SCrH4SVKCTLrnhS4satGmG",
  "key22": "2KMGkLyiseohcqQatZBCi3QT7FFpnYCfCoHarJfmfEM5KuuG16dAdSpDCmtGLanicWiM4q2mkZ54AojKcZbgLzGf",
  "key23": "5WoNNqh9vdpzZcXk7vywfGKMJVQDotvUn7cXS64TRCb5UPVTEeHHm21r5EFovKjEuLmnL31Z3fdjT9n3K56DAd7t",
  "key24": "5HepwSHSHRJnLTMKqP6BAUBvricUygF9CAcoQXqfHE9buHytHXNXk7aXUfw7QyoQfSXMXkkvvHs3uiJLtb4VQE24",
  "key25": "5XpTghoCPN6ezwxoGF4zzsAHR3eYynb3px4BwTXC9B4KrQ8XqcUH6Apu2oN9XoCWeC3ykbV4gedBactJ33AsfxTQ",
  "key26": "55t4jABJ3pDXToorZLcz7vNDA7vjcXe2Wtq9xYdk85BGzTExA3tVA32subCcSEeb8FD31yx79NNdbrkh2koPPamd",
  "key27": "24ZzqThmQRPfP9DN9fJoZ6bWRfvGbYAbGws1f6hNrfVuqTikCrytLayAFh2jg7orN8adjMvHFXBbRWKeteEzjW9o",
  "key28": "4g6GaDtY6Ak1WyJGP2T58V2JRKFbFnj1FvfYvAChi1ZbLHN1umQ426FutvmpqXhbrPAVCLJMPya6d9yKigpuJGQE",
  "key29": "4wuoKLjVQsv7QwXM9VHSYZW5aTpKuSL9Hc85ZFpuVmGFsYW94VgdJirpzWt2w3WPZskTCJfyeQKgFkGQPzHfwFfU",
  "key30": "58j2aWU6UeanGhcy9GR5LrAJRT4rPQ9rkrxgGR6Zz6fH89BDgkv2FfnuzqoxVu2Q4ZXXGNW9cNoHddWcj2cFmXPD",
  "key31": "YSMb7G3yJCJZCjSpmM3uK3C5tyr9akWQnnj9PkDSp1ek8hqk58L972zaMNKRWN5ZhHHcGqMNHp7EofHgQv5dnwX",
  "key32": "2o945ST4BQjY3vRP29GN6h9UU9RCmdt1Mi35dsL5QEAWmJ55E7eW8hhyMaY22qAvp7yzMT7QCmCYhYvyocoGDz1y",
  "key33": "5SEZML16PJrUEChjwPz3QShLcVAqB93XPTzMSa6y84C6run1UTsEheVXhZvstQr1amUbTiia4doXPQ5HFQuEb1Zq",
  "key34": "GsLX954gq6ySgMpSeRKki2NKNoH98hwqhsTmWK526rDUTexVBu1JbbTRDqoJqzSP5PEu6AxJ7p2Wb6gq1HhzXin",
  "key35": "34ArBpMhM4Nr2WdGxoeub4BQdb7PsRvRzPvtmgXvxFivs82dBsr1JrtEUNF9Hx4XQEywdnDKXevGiA7APy56PYen",
  "key36": "5Qh7s4MhjpKkjWYEduK9iCnziBEjLjLUQqYAEbrsKTLUzsUgTjSnicypATK55mbZNpQAfbgiCvY6VbNguS2Pj7VD",
  "key37": "Za6iuxgNU8kEL26Mos27Nw5aptuTWpnoUAwN6FiGLSBGuhvDTzFb2hL1ivoQVqw7tWVyosToCUsuZbnJ3hQ2svM",
  "key38": "7spHG6mxNWGwQXu5KkexcQgZfyGcXehZeJhvC6qbamGARGbisNgjgajwmEB7NTQKgDDqNXkk2X8DiBnDXULNfVa",
  "key39": "3jHn5HLBCAKdrjdcYkkkAM3VJDGtEMAwwA9Hp5nBs6MzJoos3CvwDwM3FmM1s8xUiqcX5yPAVfCm8tsUeA3i6TeG",
  "key40": "5EqLkgSgE9s7oSZzTM5QhSS6Np5jqYX7fQv8Cos9p19UHyRFpekPcNSePLAatfEJsDz3RwySRUX8VjB114vqx5Qp",
  "key41": "5Ju79BxHjSA7Ap7Nu36YnQXQEyc1YLWke5R1QdNdDrghw2o2S4by1SLMH75GfdhQ5F3MDypLQSqGFURAMWpaKh2U",
  "key42": "5NFzjAj7sGEZzSNc8XLuajZVJobShENFdLbERH2jVNXvSDU587NFZhLR1wRoMfNNGsjzRoQErM7C6XzSbXVoRNKk",
  "key43": "5HAUk7za3JzXM4MFN9aejEdpNixYu5w2UzgjJKrPQket4efnWTZTNfGb97Jtj9nSrS9LRLnFxm4huPWFUuFogimy",
  "key44": "sAvZc7Yme8rn7EaUtBxDNXr9KQzKHn4a9rDUzT1Ld8ChM5SPWzMnBNCZ5DuXTTjQcD5PzY5A5kG81oYF6CDYATt",
  "key45": "2cnKzgijpzzo2Y9Mb8wgBZJGTyWimsY4oPyHug2eypDY2xGyBzngMDGkWHJkruJm2mjNFJ2DjyYAU8DUkKnCKVq",
  "key46": "ygVzdL93nTVMNcWwz12W2DVzdJPxvMGKs8sfebdQPdNh7sKHsMfU3KHMQCDD2QwRQ85Pr69S2p7R42hpQu8Jke2",
  "key47": "49mzsDoPa3E4TJrxpZbSxduRLcht9PJ4YxnaEHCr6VW5DqgPGgumWVKgsZkNUcDceq4RfX23rBs7MucxwNrMJd26",
  "key48": "44dNRyW46NbJ4pVXRThmyPUtTahRcNxS8CXEyAQpwEqGLX9BjzxMGDGwJM6E3J1qhL67ZkHRAUZ5hVy3sf5u84uS",
  "key49": "2MxBsCaqTt24ZNmM7k9mH9sug6abxURpvMcBro2HActLrveaNmgkUFsEuabESoAwA4gCY2xXsvYWQiuzMqTSS3AA"
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
