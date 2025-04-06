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
    "2oxZtVZmWDqZAGEzoEyexCj9EBBfPJXBNrPcQY36tdpjX8ir9SnESwMMnZRX3LzfUA9m1HHF5rLtdCVQqrtqWyxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3iRDBrcfYCaTcm5bV35DZA1jSCPT1aPpxedCXz3z1U2wSE5jS6cwvDthFrVn81TNHQuKjFSoJqzHr89eqCAxsD",
  "key1": "3o9zpJ6H7ds8Q4JJMfnRGnkikh8To3uGhfphjxtTp2TzFY85ghozchjMXk6GSVc9fq3aCUoqs4Loe4p1jssxZa34",
  "key2": "5Ndxv2HRddKNLkuKtCZngKNCGQaT52HNQUGU2PXSykv9RjStiN3zbULC72U6rx7gdYqHjgdqAbXc4BrTroHXUPgH",
  "key3": "4zqwzWPsSCMicbxsbmUdBHfRFrwiR3vXLYde48GgZJn9YbwVpr6JYy6FoLgVgvgLTr1ehunoJW4Cdyvad4KTaLFn",
  "key4": "33wTGwYYWHrndMHgfXxN76X1QJZyj2PDPvtg8c6NfHgaUdM7Ez6X4VtPH9gJyz5p4nLrfPhmyMPnoX1WwuLoLVt4",
  "key5": "3JWoEmmrJN8jg7xp95p4a4maSe3sTFTH5Chb5WN1vwzDAtotvRkUqfsMGQYtQ2y3YK1K8an4x9f9tbq2GQjUQFSE",
  "key6": "RmkaTiAna8b31YPo95yuoZWsZgM67tbd9upB8Mo3LjfiXReNrhy3EoNUCvDJTQS7QHQLZhPU1owwRkKNeiGdUxV",
  "key7": "39GwN3GFt4VNiEeXWzcjwQEHEhfKZhp348z9AHmZaNjjX2uUAx2MpuxajuVptrGbp98qYSL6MLzZEvwjLNCZWbQb",
  "key8": "5DCvnxzKuYC1kMVRjXTiCptaVLTsy16V7excXzy6f1p91RwraiujBDLpRqVjCk9Ls8xRzxxyxzfiusCUsBnsKVis",
  "key9": "5giASkf1XXUfksMMiEyEjqiKuGKWC17Ks9pPmp1pvavtJ4GgsEb3uDw7BbXpd8CMkGBLDkR1Lg9GiEM2n8kUiuEr",
  "key10": "4j36sMHLc1EhD2MBqnP1cArd8JbCpNJaXBj9QLDdVyVyhF7JF5ksPpKhU7Mg8ppFrGUQytiJRzcp4xAQoUfPTFtt",
  "key11": "62zKYy2urNTA8ojFHja7QaueGcgDvQr5ZnqqGwLt8Q38rU2hdchCTBTS1WcXoGQMurDj4JZsPkh2ETeEtQwNR14o",
  "key12": "WyqxMVZHqVNk1jjAn4nu7gzGytqV3zLFS7Ypd4ZnnW22nPW1QSP2HXzow7wmKiBUo2wyiAM8zhvapuUrA9SBDpg",
  "key13": "3X9tSVkuWVYWRYMmwoH8HtG1MwG4bkawNn3YrfpX7xLqCRX5GhJfi1Jzm3cDst7ovjHHYgc9gyso7grJrFJgCxJb",
  "key14": "3rkFbMLkvqT2Re57qurjsiJcegJCdT5L1jF12FH9Hn8h4QtiaXnAxER4gFRiWP12mnRKsfd7L3XCwsZ9zvc5zbMV",
  "key15": "2VPPnyfjDQo1USmpPNgVzQzYpzkdc7QY2TMphHkr2uBRXu1fj61Q2VX5K1VXhV698fNjsWoRsdDWEMkPBBiFCurE",
  "key16": "3o8ZFWKkU8aKmaPGJCZJp6TmDcD5iTzwDMTZ6Lk8kt4k9yYhdcbVKp8dA4W7YJafYgyDDvcYbnzsynXTVcaP9z1h",
  "key17": "3ahptUHBNCxScieHb36RhXuxnUfEjVCk6jyqExwyLGJoybHy8XXuhp4pyRicEJimDe6zVNcqZyaDz3LC8EtTy7kU",
  "key18": "QSiTAPsS9ByFGYms2fsNWd3LYFzSSjdt5BoExefwAbobc2LHLN2g1UBcAjKiUTcziH1QohZeK8EKUpHv2c9XMqx",
  "key19": "26ZDFvT4FyW9SLTBNuYLMxawbGCdFf2pxgDurDUJz8yPRWZBtLaci3VD9zef9RX7Jf2ptzkfUbF23RiUu7VsjWeN",
  "key20": "bwRqjPYqgHJZGeKQtzrfXYqciZVoDcc7XDpQ7Uo221X5Bv6Pu9s4dHKgFgzbnpHPPQS2MixQyMHm9ZTpaVYms6u",
  "key21": "3wgZYKJZxu2Sbgppu2yeMfgMgybjdiaCjfYkpv93qVyShwL8Pt5nWrBe4TtKgX2zb2zKt1s2gGGm63QQX9UAWFUt",
  "key22": "63LktV4crnbAX4BPfec3SfY9xY143n5bNG6sLzWq9bMWLsk9fiWozhRhjhQyN24iNHS5JEsohsifizqzHvfe7MCV",
  "key23": "5bFTEuNqNpViS7xiFEY6GhRSE9GDdWEdR9N3c3X1HQiQ9yaqNY6Wqfz6hK7CCjUxACn1xFPSWMc95P6RytqscwZn",
  "key24": "4CE8UbCL9wyz4r2LvmR7Ric3VApeaGj4LgM7TLqbAXepNXjpWGJD2cXehwvMDctqgPsFhEc31Xn98CnJiNDoKc56",
  "key25": "2bNofJ5XFdCKEGuctENvvdFJwxH1kaVxoqsDMnQN2BipvncAR1D89zbFUVwGqTziB9iL344PDbcTQhPhqyTiUTe3",
  "key26": "5Svs4qaJKkVEEAtWEkutYskvdaebU664nkTUUWPECSCzmr7cnU5F7VM96h2BwBADvAUbfHYaTKujNt9rCen9uRU9",
  "key27": "kW1RYod1cnSGza63jwcmwP8YeD997hwDEHTZw372mSJcwCTQdD9ws38KY1MgMirFRey9LAmfucZ6fXNHaxacge8",
  "key28": "2KJ3Aeh9U1jR6synGV1Kc6QZqJ35Een4D2KrzSLdrqQjda6iSaVcRQMaD9bC2uQxRiM2hVbBQcWtHykata3J5gYk",
  "key29": "4RUAY1ySgWCHYvhKrNrFCJAJUYP1rnUj4T8vWQJ1Si4ETZmQbK5PSoewj94jyPaWLD1abU4nQkGuqdXMqbJczJTT",
  "key30": "4xFFQ3yV5A5fZRUdgqn3nw9JqXFh7dR3AjTYZsrWjCgeP5Ujf41HJi6Vi9YH8G3BN5VwgukfueinhoBz7xU7kkvH",
  "key31": "28xLizvoS1f6xYbpU5xByTkopdxp8PYfszV7hDw4fiViS5xM9kxoBkb7uffhAsm7L4SeGt5NXWdSevXCp5NLGz3J",
  "key32": "4bL3XxyJVmdmc57h3CNskuQdpTrc9nzJazFDahtaFzREe8fXb222GeavtdzNzsFEgDV9eLcsMrgvrQH2CMXotwDw",
  "key33": "2ZNhuiDKkQeyz1smzjmf9XGHhrVHnDit7VS9QHiRFJM7YfjQV117L1wNFNVi2Fu8ycbqHFjbRJaUYN1jar6BxHqL",
  "key34": "5QUipwDA31fxRwWnCPJx61cMG6KXUqFDL2QigLBR3rojPw2vLwcNxNYjvQDx6XhnanyoMHutDt3Wjmi1s55vEYRS",
  "key35": "JQfeX7TC3ociZGaTr1mr7pikvbV9YVqiNpYqgRTKNV9MN2fsdgBixWePaVvGXNtukyF6XozuyepF3yuatSQfFHu",
  "key36": "RLQfkD5S5jWXeLx6naUhe83gCJhSoZcpZ8Lb8o4g5gGGSsFQinJAU58WrU23yhhPLmFEKCkgBPS1nGVX8DBsBTa",
  "key37": "47HRXMDG4W7Nf4mwZmEveZTrveTNZNfyQkgRqT9d24P2KMc5VSLwmrkAQmXnBkXDteyvCtzrCyUMRUMpwC22ayAb",
  "key38": "2pjcphsFxg7vuYcdvjLSmyZ3ick4G3T6nKdHk2evkmMxGkVgYVV62f9XJ54dn3BjD6dP2VH4hcpakhnFYYFzgcJD",
  "key39": "2n77kGaHWVFfMeD3sSjH3QW2pJ73NVUkd5aP6evcVYeTvvU51kMPbsc85d1scDj37RBLvbqYE8HtR8WQCM4oU8t6",
  "key40": "2YyYMtBAL7GLzR5yeiL9tz7nvtYV5myeV7VfVxALbKbzSBvRqgdXaZHdZyWRruKSaNzKFG3wk3tou4FtHfGNpCe3",
  "key41": "5bRpK5rxAMcCdwBuBSX7wecwfzEhZe9tPUbYLF7Ka2rTJVkr9EGAGFxotwV6yDWZkHXCxEJcHhDbBQRwJiV2ssvS"
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
