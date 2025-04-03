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
    "2F7d3393gp6fUEatgiddGt1AUiSukyRo8uJWGpZKf1Q5L7yP19m6VgfSiDxaJmodgjy93G5yEm5xaLTwN7Jfw5dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xo4g17o4mnvfNpHccHrRQEs7ZKJ2b5Kq4qJjexeo6DeaTSPht6v3PFdKwSJG5K1S1DRkSiQjWMo9siQsQSt8sKg",
  "key1": "4qnokqxyXFmh1cY3grJUbcXfTKDKF8tRbUmjDMPH7MeHLmSLkYikpx1Hzgo1KPHhCbdBHZTsJayCMCfVN3g1h5JM",
  "key2": "4j3vTYFvb8A6pFHUoa4cqUkhbCmt79GYn9YrySG1rzjCnGDEayCNpxEfoJ59RLc5o9QkmZPKuV3HHqtT3Crk47HD",
  "key3": "AqoVtdeWc2JQemcEN6ivSuV15sFcHeeLVS5nwp9b6zVNHNxfk4tZXBfj52kMXytkRRxnD3uPBxiqoC73MoZZUUu",
  "key4": "2WTnbLQCALHY8hJfhHEvef1hwXBNbjeWG87mufjwPwe6eTxyFkYSkwUvZZ19V6wiqQb6Ny2u8Co71Y16UfLW1eYM",
  "key5": "1Jy4edN7gesYy6CbsdLUpeYiHyUpLXJtWrYY61DhVPdtSk7Ac57xju6FTp9hyDQv4qgrsUaVjNBt5ZNToGGSCur",
  "key6": "gcDNh6xyRyPT5AVrTfSbn9LHiUWvErD1VYy5NTUzkyKhVZJKpDfhmFMu4Z8nNuAkJbz9DhrSsZz23EVHJGXXrh5",
  "key7": "3TsrkGxuu1VyEJvKyvSjcCu961i8f6Sav4GTmTk72kNjWsn1bMGTm7vQCbNgzkjty4jshCz6xyz4rBcFiTubHStw",
  "key8": "3Vysu4EXkARmesJGd1G6GFYbP6MUGdX5VjTXnx4eduvbuxqHvdppVTWrbXLoi8FZXwmboBw3aPURcroyY85bB3xa",
  "key9": "5txxWSiJvUkQjmRD59Wm1c8TjPYS427WDtrfUQpStMpa4Nn3MtzLo7FF5ho1Spssc7pVKzPvpiXuQc96eMvsV1ca",
  "key10": "34osgEZPcCTj2oLg7RhZPgqKtsVh3QyyVYYXUdTa26oLTgWcJkJuxS6hs8PsD6DDdRdy51mywWhNKDMjF5G7W1Md",
  "key11": "jEJQTpf8UNSmBVmE1SJYWanep1aMrGscpDP2RENMHrrcfxz9VQG3a4Vowa38qLWqtSeXVYVauPMLXb9NUuxaz6a",
  "key12": "38e9gEnogs9Se4zvUipiMNHw5QdH5vnkHDCDKX9sRopStknec8whypBk3gzEsACsMjEWxC15Jxt8kz5n3wtwX6br",
  "key13": "3S9ijb4wNH2cmSEFJRTD9rb4xwKkBfPSMpcUVFfjyCZueGK7iZH6RVbLJgaD6FyR9AnPs1dBL8KDG62G3LptpGam",
  "key14": "2rPRy7qVE1ZwHfN8fn3sUy2rZeUuzVVmcCdRfv8SHJiFrFHZ7MVrCgxAaVYNkZDwe6oVcefCE4cfaPMV9gdb31xg",
  "key15": "5HB1dwFBsAEUZWacQVYtaHjWtLzwAJ2DDye7tdfvyoUdiFF7TsCqbdUgpbWMUQwGcP2ZLAwCHZym5sppKFMDrTbQ",
  "key16": "4C1v5eh97LqKpWmSoETybDKTsWRoYg1M4redmepZiCfPxmqtYn1Ede7NbWRfCLpxjQtNbRfcf8fqgerK3P295NTG",
  "key17": "2crCrsEsweyKkfXT6pMWmvNzGhg5uatDB8BD4TTBLFsSuseBjBSRxrAMQqbU4WxJBg89hQLhL19JZxZykCFZdUkF",
  "key18": "25xyQpceuopwY89AzvrrW22xMEiBLuaewFikyT5SXcEhmVmu8U5mQCCWQD2u2yqjfpKyNK1AVTu2BFmpNzcWacrr",
  "key19": "5Hi2nutZA5BRshVCDf3CLponZp7iuzAmzjrE4KbQ1f1i6hWytFnawzbp3cHCZQb8TrBKXuHUrdEBaZKnbc3Gy9rc",
  "key20": "hCUr2isPjvV4i39B4Tar3hfr87g55wMTU6BE4dhYcr6jZGYF3JK7nHx95Kc7NRG3QvpYkiz2Dr2taXDkP2QLjVj",
  "key21": "36d8notfc5XJKxoLa4b9vaHzK3SNiAQ5ni4UucEW2Dre7nwAjvYG9wE8EPJL1eU3XmPFyDYqEEb7EfapvUQFPNYJ",
  "key22": "A924pSSR1B3krjAWbsQVxZ4HLiD9dsjE6Rheixdcc5R4sWpnhEJYKLDcPKne1vQGawDuVEMRv8QavovHdFEWqfF",
  "key23": "2oNt4offgEkDZHne38x9U3123WFVFsjLitmQAreLPqsrLuwUi7TputKNdBhAkghEkTH2J9RTAVH845EJzXwMGqMg",
  "key24": "5NkN1pqhDcPLotCvK4R6dHn4VxrNepHdCPxRMEnMKS1GZZ3wdhV1ZnCAiBSGSnoERS8M88GReBgTSbYD9UgFwTy6",
  "key25": "5uEcXgwGswyisWV5GEU8AppTztyh17bXJUB4QGMp4imDbGi1zQexDCm6CeCc74givYpxNnFvaQAeoJdaE9croPRv",
  "key26": "3qpEgFwKi33edFV1XmhAdVu4GfLxCB19fk2gJf7VVQZXsFdv2VGMNVLmKVV2VNh3FXmNhu2dG6eufEmhMUAvppW3",
  "key27": "35HCyYNnFiknmXJajU13Nfdqps2j97qXTVU4VstuxPhyqgWzmRLyPotPLJhk72BroVb6FbvmJbPw8pf1YfiPRZci",
  "key28": "bNDGEcZz65jgEnA3LGCmr3pTnxJ8EkjkQzJf8zgrbANPtRWWLybeLkGqQ6n41bg4j1N9pBfmZvB73b9JgYGTszf",
  "key29": "3rFrqtaY6rZmx613vxFidgkYY6rA8ZYBJgpx2qgJG3GXMhkvG8grYgCMXe37Ns1GAjk9my4csHDN9YnDghMyxX7R",
  "key30": "UBZxEeik4sGSjSwKDK2jQEtdLaVf4XJCGcgKG9Pcpe4vBH4pRbUJ7kYVCiKu9JZD9nqdfCVFbvJR2RoMxbuBeSR",
  "key31": "4Y6qJ1cwrNkNgC3E1k7St8V6kg6tjDnD87A7ra12rsXoDHb4JhPHpEvS93AH8hV3Gpnzqc3XKmAVbuGu258mm76x",
  "key32": "945mPFBc9nzYAr3nVBcvfe3HbiUk4wWi32vCzScdixiqX3Te631XgRtZQgm43VK9uRGA4fwRmzNH1bQXn24TjqA",
  "key33": "251LLNpNG3BHLy2VbvxryVxaeEGjqSCKuDhcwPsFSWyDonukTJGdHHrcLjpi4FiKwSGmXu36jutse8iYJKagaaoN",
  "key34": "2tPrHD1Md1bowkHMKxunW71XpRUwQEjgaNqEYZYSJrdKwconbciobv9UV8vrsCkBx1F4rZn1UPy8dqD13TMU2JDV",
  "key35": "JX1htDV5fspyqaHdQuuRezun3auphExVkRNpLE7UWowWE33YkodBQsh3HGijjQqA2gnwmQXgp6Hibovb1nMTE9z",
  "key36": "5ZHaZKtAqH6uPEXfcG2gpJVAzxNcfS4TckGSsMNcnAC5UvcZToJzxQZA4vUuj9Mvc4C6RoKoNTmqYQfc8o5BV1SD",
  "key37": "3EDAy8eZZDv91jzWZ7UncdsJ1wq9PaD492JkXcvkMy46rxt1ihMPZXz8WKVMVjzrRCFkNFV6VUmXYsyELuGuGnJV",
  "key38": "2oPmDTufoa4TRQpgukiW3o5AroHCiSv8X5EixJfuzih8z3raeHzxaPF4Y62k8VB2KuqHs2Moi2oniP5HqcuKXZvy",
  "key39": "21GGnfX3FaMAhcvnwempfEZxdqTgvzh93EhsWosx8HDtzaGr8SmKWYoCqrvU3SieeacaLpGThX4n3rDj2vfkB79p",
  "key40": "5pUJSypFfcdo9nXAq3dN7aTZJdt9z3cj2yNWz3dFaSFcEf7moYhZKap1eGaUNvVhTy5S9Jm4n3EscCM9RKyy1Xi3"
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
