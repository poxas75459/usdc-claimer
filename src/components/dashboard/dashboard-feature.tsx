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
    "9fSEfF9qwVXSrFuHCGDXJedrcBmtr4Tn5sCH9v1wcuZRr2sTmRS4s325FU5oojv7qvDpnEHYKGRxKWyJ6ekzy6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47QXR2fk27mYwEk13o5NYgxv1AHY3NAtGndNQgtDdTJkUqSBMgUA2KqXRVtzD8x6D2g4VrKYtqDsLERkDC9AV3oq",
  "key1": "2b1uYxtxwxuPRBUzomzfwXiaRR1KkL1pSfp2QGTEBQ5CeLbXUU1x1MQDZDhrjN6DYp6kQmc82B3FuVU2KzQ9QPGV",
  "key2": "33Er7zzFaemWt6cMy1ELsnPmhZdk84kSo32xzXNe8Tc6RVpMwRBUCrkUTUmuyUQU1f2Eipmp24kZ3ZfgEjtAHyYK",
  "key3": "2WVatpBKM6uyBAtu5VNp5SWKMnvSDc6JWovR3uMHxydRDt8kqRYgCtzc3xEcexXCotctvv5tsKxotJvxTbUu7Es6",
  "key4": "2NAENAr9yV8eBSdfzt8wbbqesgBhfzXuQvdwxMajRmWRq6gthqpR33kuganJ9o65ftRJEBEH8chTyzBSUp4UhW4P",
  "key5": "4z6ZHuyi3SftzgziJaRwaM87VvxQTjU23gknGWJPTPsak2n6PpPbcrKBTqQ2G4FPfnfeq3ySpSdY8V3BKyKm59sU",
  "key6": "2qcBNQiQH9fGREiNDouj5hXVEaZXjHuscUnLqH18zkf972eGWAiSvwjrv1HoHbaTGWbfgRRnrgXt2frTYZBmVM8b",
  "key7": "3ve15FpA3E4Lyhcm85PEXWf9HB6BWYgThuPq3vJ6Sc6butndKPxqwNCS9YxXdwSS1tHnG17Rb3fjnE62WVQU5wsz",
  "key8": "2c7cLnMiBNQAZBctqDb9VyuecQkqwuisnLkH8medfahRS3kZjZmu12MiWBwoUR2c3E5vv5rxKrXwLK8xsXYwCNHM",
  "key9": "2m6gT7YyaqjqVFZDTR9q2zra5XXePdxaj2R19nNL7yv293eG1hPrtS2jYDwuPGZontP9e4AHQTGccJYZKzsRdjS2",
  "key10": "5HqL5Xt9wcxk2odFXUSqDigXrK91RnjMRwP3jdasRtqGru7rij3UEMh4EXqVYETEgGxBg2rALbo7rTHoKdBkSacf",
  "key11": "5GExouo8yH3DC2YzQsv4KsE43bCE3fnBMSje2wkmX7NrZSVYshUD5ieF4S2jcqWkiuAzLeZXzBTkw2Er6YPFLSCg",
  "key12": "5TeTJ7nu6DFqa21WQR5L7vyAKCgMZ7To7cLZe59RCXxG8jVnjfF4YmGbooJG9jZWPoA4ih5veCxczjwXedSx33Sz",
  "key13": "3ih5Asx6siA2cMttseMcDYCNFFTVWeVPUVwsWzwj4oWz4RL4DqnDnohurJ8bTUSed8usU33c5t13vrjZ7ga3knje",
  "key14": "3GczoMCYbfKinKxuT54FFAfNB7KWCDbn9QdEx3hVXso62f1CL4npm4cNBozynUsB7nA34gfdRcTtSEZ9DCivR4j2",
  "key15": "5KJKLcnY4YKRXdXNA2v89t8n1Rf5UbrhaLTpuq1mmcRiiitvaDzuUp4H3obabsatssLf21AjKZwvFzgFKczZ9fmn",
  "key16": "2xGBFYSDfUkx7E8JjvkHvNrg96Z31QGBPWV2Ud4VonXmwaVXV3bo9miRL9WJJ8bLbqpfPUfraq6JtmFNzQiReoTr",
  "key17": "2ncnhXe3ipfL5zErjf2ro33W23FPoK3V6Kst3XLKv1VBbcwqxp84ZAy6cAcEfw5NkcCeb4w5EmVf9VfhaqaFLngc",
  "key18": "4KdajthK2HUHNUcYV4auq4fNsyd94QDVzTFd6KohHUxmWWUmhzPiRwhSnXyj5JfPufRtVVXS8Mw7fbanPG4FiGbt",
  "key19": "2avMfpT3LsNhvFmpCob6HQymGB7Xx3dSR7MPmqULkBCJz8KuUZcYCFiocaAdBqBKuwWEGvBRchLcU5VBg7HF5DHD",
  "key20": "4qjsa3wapePHhtLAscfJTcZUBprjxb6vWBYEeZ9T9cMSpGSSt7Bgq1nGzqTtpVqbjYWoR1efQZppfsWogMP9krRg",
  "key21": "31zX9JFtK7GJXzCm9VjyRqzsiU8mf19Sa6bYabFBzYRyyoqZ8mzGP5wJxjqEvJ7bNx9Q8SUyGsbUfFiPPkWjmZCa",
  "key22": "4Fc5SeG1JcUUENMurJxz7TKtmjbKFYvszgoSHKMzgEy3aDf38ZTamZrptzzmPkpueErotQ3KsGj384LXL2cQFR7x",
  "key23": "2vdECkEjDaFubN5U7GtYmf5DkfRDV9B4VoyfUkKsodd3aJKzCASJqGEt5K1e9xTc2uphUSAwh4GFX6DzkCwZ3Nf3",
  "key24": "MhQoAVCLF8zgkGEvkpeHYc9bKTtHEk11Xe5bJG5tK2FmAbiYXfwr726WHdmzEA3ecjm23KFsUDkzxp1R65dCKMe",
  "key25": "4VGB22j7pchLMSS9mYijyAAGFvyjUrLLEJ2WWh5iKHeW4pqdLogTRiU2KLvAFLimUkVp3GhCtN49fVzg9B827RhF",
  "key26": "3P9FUxUM6xx3tUgyfeL4RxYCUhfbz2vExnEZpq3PKKnuKnJwwZsvcSrBMvLEM7U69fwhE1gU4wCP6XEEgX6cDi9m",
  "key27": "2w1F6XP8HzWGZx6LQ4fptMh89ZV2kkPh3Jrn7z2c1XeM7NfpJjtysHsnwZCe1P4SG4eWkrhTCNiXg8S5t6v8SeXp",
  "key28": "4jUBYV2xDKSghNtNH8BzqqwwLRypR3bryDPE19zYaqupqufD17ZabSUBNFbXWwR8gXH1AH4zCkrWnvdxzJyfYiTU",
  "key29": "5hzyi94Uoq58rXogp5oTSnLfYAJznhF41Epn9iZ2bobQ2qExpAmEEruoadoeGBvCDtmijFkUkhAu9s9D9bhYUv5y",
  "key30": "2tAgkYSh4uXPFafpfyXVnTgZv7LJLNjwohGH5etmNJBK6jKc2XTY4fmmqARyjRj3ej54VZ8AHKtpGeSfhc2E3Awf",
  "key31": "41n2NBUvgTiDSQiRqZceEKDDW4FiV5StdpNxitJiNRNZqR27SdCAkkM4kTUYsrwEgmx2KdvhMASyHSDdpMB36uic",
  "key32": "2NZZb6U9tyrzRzkJBnXVndu9CKrvkMseFoi3iaBZCNTeJf9aQBbZ5ERuvKoCepck6Tcbg19L3ccUtADvbeF9J2DL",
  "key33": "2gn9bbSJww3F5UhuBxjAmMXrRDkti8T3VpraeenPkRkSKrWdoXznXggz6QKfth1UPtWQTk4Ls6XyBV3fxM4bcQpc",
  "key34": "5UtbWMBU1c56kUVBwF8tM8BcxrbvLNL7Dt3RkLRR4su2H5aDEEVyJkFpttzi2fDyvFU5CvTbdZtpA2cMXnVhLTPC",
  "key35": "FzNLABvgfD4W4K53ekvso2Kyka6LxNEGuwA5KAYHoLnU1vtWeY1FiuZVTo2ijMUxYh8PBnAVwzhsVxjr4EgoW42",
  "key36": "AE2cGwqAgyLQ7RcitY1B4wYTXqPHKTjKQG13ynYRn5FZuD1R46Pgdj1Z5jNbdwVDvdyssjmqzkttSJpPZUq7SXT",
  "key37": "55p6KSKoQsaGa2Z11MprNDVFtRZSqcnkS9NSP6JWi7cbdwrw1sTFUBnZZstJp1LrGCnjBjW2iS8JhGgJPi17WQhs",
  "key38": "5ZeZFswMJnjGcZebR7rM4h7duUr3AbFHKWGTWJjHE6oSh2Y39Jn37cMApTFXRVmCRzB5xLeSkfQyzQ6suxQfYEwf",
  "key39": "4zWjioLdrCe8ZMRF2QZburmnU2CojfnjoHWmcc7aTmbXCWgHxoHbF2i3LWxHyoY8Pwf2RT1KfA3USP8h3nMdmdDA",
  "key40": "2Q6gqxq8PJj6sKR4mQDcZuHbjTTXJh2mSLqfn3fs6XDPcnFjcB5bf3Nvia2QueEaKBPcLEtVnR5D2ti1UeUjTofK",
  "key41": "4TXuTW6CMt6gEEThRy9yQFYqt7ps9uytZzJ7ZMcW5zaKrCoAt6U4P87kmCxD5NfjvgFUoy26f1Gv3ypXfebWn4Xm",
  "key42": "eBUyNozQjt5drebZCvvwT8fC7EfeZK4t4acM4BhWuC51ypg7YRjbDdmJ5pPz3cJwEMQw1R63toDEgbo4doyiCMj",
  "key43": "2jKi7ykrZgLj9us9dYNNm7PnwHbuHmuxd16kVYt3bTtrgRGRxHBi9LGQDY2EX5WArsoPunmVnnYzcixZQKLnqbWS",
  "key44": "5kycsP3myYZTaRiDs9L2BhTgycEaGxh2MPRzmYCa4ifJDHySAKMGJSfDDUWvK65bUCYkdLEPytyt1sSG7ERTGdju",
  "key45": "49fpvhY5Nkanr6R4jfThfRfke4Th1u6WiPhaBNMe4E5D63f5TWq3z6nXFTXFw4do2TdEEapvEhKZX3MUrfKiU56b",
  "key46": "3o6yY261d36AHYtZTXJ2aKtvBcqvTqmjssXshR565aqU3hn2oUDkh75DcxjWixF2kBS9iL9a3pduyShYVYx5XxVM",
  "key47": "3mSFdCoTTYoWBV5Kx4xHyANTvBFodVBhCEHJenaPdVEPoSWB9hKuyXuSfh6MhbyHvLMKcozraSJ5fqG9DeDqR6hn",
  "key48": "5Pxc6uAh7CWsYBj3EBd8CL2FkoudBzrBx5iKVLRBo56v1Wp1hXkmx4hTgjmYAqCwRBUi4zu6LDuE5KkdikrE7xmY"
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
