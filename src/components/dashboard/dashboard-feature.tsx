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
    "368j95ZJbReSptHhatJgd4BoMuZd8DEA9ExJ3WmvarVzi3iL933uEBaRvpyAb8zPnGpE5HNMFcDq3D2mRshHzebU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oZBFkpRpk8HUsgTPfK6wsnGT26hNt5WpeXkMCmKKj1ZnkRGdiTdKDvCsD5TJqyZUp6kfG5Ym1Z1iACam75ghb1",
  "key1": "aNe71vo9eMVt6fdvFtETVCLt8HvrUd11WLPC8TYJkYpZLmLkMF3FyP18AvBNgMKSoVb3t531xpR7HmcGfm4Nv5E",
  "key2": "2w8UpXq8tEWkqT7mhZp6DzFryPfo5ktWgurR9fB6KVEuWkMPgVwsBuf96s3nwKZgHzv67wRZHVCStvnUoSSq2XW7",
  "key3": "hVN3V67zv4CGiAr3g3bUNRFULEZ5aC5JfuQ9G558y6cfxePShPyrH5FDDbc8FkBdLFRMCafaTp8JxKvodxkMKwD",
  "key4": "5z4vyLy9VhfRJDxQKuPnTnbRcKxK7RZNXDmHrgC7n3SFkzky3Cf8vsYMYjLiRZWhSxAv8dQ7qDEDEQpJENEVSNEh",
  "key5": "2YbtTTqAo8sBajCFmMrwpc8X8MKsFMgMvt2z4PDtgjmJKtL7BWW2moVvmgGxaDgF8nuJmjUZenZxUJhrRqBwffXj",
  "key6": "3assFFLzJnZP7Ci3rXY9nAHA6kXNUiAMSPNz3p8ZWc6tCz3JRu76uPmhPrmiKVTdosEa3WcLqcnybLASKfm8pmbX",
  "key7": "3mL3jHhKxUbdcAc9gaeDfjdB3BmVGhneXL8Xmt4xrpAHRK358cDHrqEQSteDAKENVqoLAGfCCQ8XJKVT7nN7rrt5",
  "key8": "4mJ5oXvKXCJ2WpXpiKp9PW2oVPx1ZoBLQ92oeEw5zYcdPiEWFJXREaudduVVrBC77jfSFFBFRhfk97G3dNtX2RxW",
  "key9": "51ZsqPQiu4AAjiB7jyoUdYFwoZFhXbmWHTqB9P1DfDuoiASxjRoCoAS6EYtudkyh6jhN3yS1zdgNQNoTdkk8MJEF",
  "key10": "4kaQ13ie243p4tN6PGh4bXiTWQK9S7rogGBc2JFksWum1n9PvWWnC4fWsharvN5bnJa1qkhXV9kzaFaLgCwx1sdj",
  "key11": "5iDu7cpaowHXJGUVngGVepTVQESqqaDaNqoN17Rk9DmL98VZyBHCLvu9CCDa3hGyAEFz5W4ezfUV8Zqv7MfSc5Qd",
  "key12": "593GhfkVekVHpw9m6ug8nUoNYh1W9wJCqd4GYscyJh1rj3SSo741nuRuo8hootY5RFQLpHygPWYQF9H9g11kuynu",
  "key13": "3X9F7YP6fj5n4MKAh4h7HBxAwC8h8RY8va6TV2x1HbpYSc63WM41ByB5piyNYmXNNCYu51DYesgVPgzHfT2DGayT",
  "key14": "22TrPDPnyNWqoC46PAYgXmgvPFqzrcTKhNKW3Y3G73ATyT44BHPxBcw864WHzPdFSc86srJXAhebw9XfsWhb9RTX",
  "key15": "53mUC6fvFEd21bT1vQeyYyZAaDzvy9MFefXi85c6htppCwZtqDvgqVzNZfxzTJ8Gapum2P5zB9xsQdcQtToVMKNn",
  "key16": "vTFYCyTQahkf5Ew3UwkPo2BHqAT6sxZ87dfWw7EpqpqeSTn8TCqj7BF4eWQQqAA9VSbKXcat6TCMP6iEvNfFnFN",
  "key17": "5PNfaTWUvNZd8vDFXvGxbeyKMQM66LRJpFABVcru3ZP2UAuF4GXWhx1wcuA3KgomAeMBLTt4BzHGzeCA3ogVsFzQ",
  "key18": "3qMhzgwEFSZX1ANTtnDQz2CBeQqg9ELUTrGvD8UWaPWxrXpRUnZLM7N1RBE5PCSj3ihkQCwpdM3jpYa5kGbvUAHp",
  "key19": "T4W41qooaqpU4r7E7JyqugsNAvfGbMdQW93kMMTsuKvSmLaUy4bSN1Vt2rxiWB2jsow3wT2ocry3cicNyPkRZqD",
  "key20": "2Xv9KungHBiyCM39G72aKRTC14bHghBJ5ktgAmuMSYRtbXodtYee7JcopWj6Hi2MXBE66mnBqwBEVqfuGwwLDntD",
  "key21": "j5eJSsHX5HTtvwi1iwu4TNVKETkRwMPSWGWLYJwym7BNckHHd2dxCwWmEV7QM9YR4zPEo3WA17jCuf7TP2U9fro",
  "key22": "2YFdtND6VwjcGCChnvn3Sfm3psy6GrqJntddPGbW3tho2ZWZBTkkoKideVhyQ8kYTCDr9c3fgKsJNeEM8i3xTso6",
  "key23": "otsqUX3RJaoYXbgwkHLdMB14oC6wyUQbyVoYCfChdM2DqHUKAiCEJfse1EMTXkdhUcZA25hPJkkCWpmDtVhb2a2",
  "key24": "4tcRD1mfc8sJuDGACoLerk4BgU7u5PBSzhTUxMRXyr6q1ucLpnQ6MoVNmSiBnU1b7St4hoJESb84NkKvykzUSCRX",
  "key25": "3c1wiLAdsUy8MQ36aJmiFFzzrvGc3CD3N7jagLdtWdKz2NiNMNsUtkjLSsc7ePhkWcygfeUs16iPXPnKQ36z3VPx",
  "key26": "4fbwaVgLEyi9xHFYGmuqvPCos1RQQX4en4FbinASdNaAPAkKkmoyoNWcQCMmAAggPfknrg8pGXVUBBmYLMkaco3C",
  "key27": "52PgLWiSHuPgczfSJDVzVhaT9suEUixuyfxxEqhrSTMnxMuWMUUVetRUUAV6ZuSVNmSyMUtbU4jgBPSUFSXjvBXD",
  "key28": "MhCbnVouAAD17JAwCmDjLda4yztqFM4TJPUvaud28zk9qwsuy2QGfZk35W83QHToZXekM285G9DsV33H4fQvidR",
  "key29": "47NbqagTW24oHF9BJ1uehEZAtUfwZAkmU2hcFu5SfRqWqUsT26WaUiFwsHWHcGtw4sXN8n37EJahnrDWKYsp7mku",
  "key30": "4bik791GJDGb7HBGdwDFYGCzJT7oKb7d82W7VB4E6ESdXQFaib3GmRFfHXdfeNqy1EZbyBu19CyL9CMMt9JhhFJt",
  "key31": "d3mpKW5YaE9cbU8qcFncWVxuCNa4ssWDpm7jVYqu8fynaNF4dgqRwZsKCXSPsLytKrR6RNrm6J3jn3sciKctCL2",
  "key32": "gVu3M8DPKGvfsJeUUWCR5ExTFMvoKehaJYww4HnanhN3Db7sT2o3fj4T6mLsetkLcRfWyKEqTTvGz1vkm3R5fQE",
  "key33": "2ZhLt4EHzjzSpZ5AJgxVa4v4afoss8hrJqfi8vZoUvT4LcuZKiFhED4wLdJ7PYNm9KQugk1NXVHdheYHyQE2Jwxu",
  "key34": "2eKPzbmkkwtDDLKZH1SU6o7V1Yjq6eg69b9f6nnZMSJY8eSTsKeFQEodFmjLnPXZhCTonkzJAxygtJUcgxcYT9ze",
  "key35": "5sxv9TMYT56Dwcu3EumKeZmcETbjNLvAqMNFYsygan8MkVrcDk6U6xQmLHtwFnzp29QidD4YvTerKFyrJa7KdPQW",
  "key36": "tMidxyzyrd7AktDJnWmrpgUfbtV6YKTNyCwgh7GQUFENCznJfmJE4M7CQC5sjFjz4aFmPpbW6dweDYMM3p39dwX",
  "key37": "4JiQUiGtEcELCgtyorKXWGtVu8tsmcjT4vsq1V3gza7h96yCgev7XztL5tpbTyqnBzUFgVUFZyWYQaL7nYtfuTG2",
  "key38": "2VtieAEMpDUoNLERZpL9ULRKEs4ddmxuC15jq5ZupmL5XvgorbqVK7txjbLgnrRAw45sLXo8t8UnaVmeNvsaxMha"
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
