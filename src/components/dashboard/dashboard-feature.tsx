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
    "4rd7G9qi1Gx8XdxNvAHmwzibKGRrfCR9B1G4BSDP41bH7hBXrMrAXABRdT8kSiYDepvumsFuGoUovwykD18n2GEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3noURQVa6aLXAT6WxPtT7sthFo4U4n5hPH6db78wVv57spMkzZJCYq7kAX99cQkykTFmjbhDAjqGQQgzxPoqNYAo",
  "key1": "KCDj57uercTg25rwJzPiTrYwRpqaTUbGoY311YTjoKgApZj1r8FSfPWKLq84mxny1X66CQxjRy2eMpqALgFNHuB",
  "key2": "ZXfQTvSb91joDtWArEj6tSiLTvUHEcoUEyYmTTfFg81DrU4HWoNgsBCNWDErXPGLVFrhrPWa26dDqWwTtZyCHqK",
  "key3": "59iefQizntB81deq48coCN5p3QqaYPnWsvPDjmg73gx6T69ZpeBMRkErfHixv7woHyDE9xM6XEns65iZPaRg8Wob",
  "key4": "4c9zb3wP4nJAr5cw7aSVMKTjam4MrBeT99ZCVpaCe6pu3y2oN9XepxZ3P49ioZMZz2qcjCheAZsDUPWzCXkaQzkF",
  "key5": "3KC4gXqiL179BzNptGmFvLados3v8jfmCe3YjjQj77PTARg37oQVUt5pWa3PWMGpAYM5N5ykPGNZ1FPmpj3NRSj6",
  "key6": "5ACXxpnrZpZoV3g8E4hd5gQKwYxmunhtZAT6HHEB1o6DQucayaS1taYxuTCN339qbPd9BAzqEwQu2PcZdtRBD4KM",
  "key7": "2ac9HZrpkeJvATeaarwd7FXBJHpm2iZFmhyAsAC4xFtWLQNniCakwaUureR1mhDLYRCKFp2CAtNYtHCyRASVWHtb",
  "key8": "4SQ5uEzhRv9YAZkiptJ3LWBJScJiX55HsX9i2qx8p42Qvdi4JRqCcHE8enbUCwjfcXGqPhMyAGJYb6NeZDEAZ92N",
  "key9": "5KTWUNeWhutCKF2J9dHABwJ132yK2JquBcnd4t66g1EqmPzwGBCWVNbwJKdagq4wcwBhJfDqbBuGLcCaikJmfg5R",
  "key10": "4qC3vc7AYnNGmDpj6ha2eVpBwLXPxPrc2URkRLWmDuosQLGCAG3gGTRRp7uAr1F6f7AkLRKZBscEoX4XTr6TttAp",
  "key11": "42FqcNVZSEUG1e7gBFhFr1CfgvoJTrYRk39KanvQ6yHAhR5bfH7XR5Zx9ZQ4v1ryqMRcogrdQdLWHKrbB5FTT6y8",
  "key12": "28fvSi1FXsvNxB52ZvPocaZ1zHiSxYNVgcDkD7NgEQ2du3ibRFHg7eX4irEaBFap6R9MdEJJ9rfvnREnyANqSfF2",
  "key13": "4D61WEo9L8YeHa4wpWBJV8q9AURe7VqmPnHgmKSDSwELH3amCM2MLCuGRLCHBxiWSZNFxT7HW7yEyEegwbXPK2qS",
  "key14": "3gXHXtCJvpZ9RomB76LXqtp2R8uvr5XFNDBpdRymgTfkMyBbxrmYXU7mtiC6VojmVTyEepBiCPDfjHn3JXnbUJFG",
  "key15": "3cGVEMzj2TH6B4Aw1VzPrF1Ky5ndm5wBiSgKFCmdS3GX4PhFbZg9FQR9bEFnkUVj9VU6xVZNQr7GuCV4TdoH4Ria",
  "key16": "5d4izd9PJB6k5WycPuCaLryMXnaC3htaDFHiFasCNoZXyRP6KfJ71MgGyhR9n7B2vPVjM6GWB2ZQpN5RYpP2nZTt",
  "key17": "3ZNT8anpyXpx91wr4gjZVmV3R53t1Tmjv7K8bHTL9GPgd72ooHcyubeAQfr759DS4kL22Ez5wPDp6UdwmkWedf1a",
  "key18": "2iXgKbG7UXmG5iEg61fHWWdHES7nZkguvWe2j1RosuvS2foEFpBFqcUgwyVgPGkqiJPve8mR8VRvZKWDs8hDWCZV",
  "key19": "4DLXmqF9fJhkUUZrbJn42VfraBgWFgTxPiZwAfiT7hsEj12B1SiizoXvqo7jfruwV8qcBRdsCu2oVM2pwiABLhJZ",
  "key20": "2UKSQNvnBXXuPLUjkb9HU79LQHfUFzSvi7B1Rb4NumC9jbMgHH1r4SSkTK3BHSPNVJXJTXZxVwTTg4YLrQbDwkep",
  "key21": "3UkLGXv4q3R73TbgSo9yMh5NHt6ALpvtopuX9wCrdqhmh4DCqqks4EWVTjXN69fFkMiABRi7q4JEPFRKyGjCvNgT",
  "key22": "vbyhHay9b8HAzKqZF2H3jRj5tPDn9ATxBcHVqNim7arhgGAjpgKeBmYPR6MpsRJeemRpHSDSYy2fQzQBvUeZkgT",
  "key23": "4UQUnyQZKs3jNVx73azMoUZ8AiRF5sEQLSKEU4aNrLKGDqvjVivVPP7MjCh2E3G9r8M1Cz52HEMJrpsSC3cCNiE7",
  "key24": "2amdQ7md3yYo3BBkFZZNogi6PDzmzVQKGkMgHeqoPo4ikfsedWh6yDZxSF8rEfVVSMwzY4LJNsWzmTnZxyHmo1Mf",
  "key25": "3kk6tg8znpFAA7tffU7Ecnu2dkw3EEAjyNWkGrD1nmXoRB7TSkLU9mkJrg1RYv7fpFqjN114acWKLKYG7dS8wvbS",
  "key26": "3mPNeze4m9vDvmjuGgkTkRsWz4qtPcMehNsBJRMBJq8EJLbJcVQV8YjWKVZXcJsGHpZoUPkhCw3e3wTcvJEW4m1G",
  "key27": "5bHE2dQatsN7Z9wQf3jtkC6SshHMZP8mJNbHhmDx9qosaUakbQtqGQobLWNHSdXbSVuLVLDfsBnrbBasjf11nwHj",
  "key28": "3N4uDiWWPNYBSmHKNV9LSV7CDV7GEr3HXAiVboNAXz2TN2eKiiryjUXpDtyDSz73yZvDNiisxcRDcR7YfA93uTuy",
  "key29": "3E66JCmLAyqiPztJtZxDYmRL3XaJxSgJ76WMF8o5oYAwRQ7jBHsiwoj25AEJUrhf78psQYYruyWq7A6WbHxh4EU3",
  "key30": "2YWC12D8e4NgRFhXy8CqSP4CKZe3VDRpvXGSVCiPJgiPG8TbEiXBTSmkJJGsN6tJid36MQ2MJ3en21FCqdk5HX6P",
  "key31": "559rXoayEEtwYZF6SsZZ95UML5eWpipGYTzF136z3f792XuWXCFBTcPsoUPkGKJhVHk4nqtXc5PCJZupT9vMsP41",
  "key32": "CXXPfy6a18eDLCdFfzq3TWKuuT3hdRxep7Cg9zCxoYRt4oeC3EhemUyvc4ZPnkN44QzayPyqVoNfYw8gR2cGayh",
  "key33": "2J5FkGdUTfCsK4MGquQDhsMQersZKBha5UX4QDE5FGukaZhPCURGs87aRByNRfNvvq3uz5se8KHvEahr1CVEsJNF",
  "key34": "3QNgLwvARfkhcKDe2YtpDPxAi7ZcfeFTao6Wyy3otecega33mStR1c8oScoFv4CFFMWrRsX2QHz7QZDeLx9gbvji",
  "key35": "3v11HeBc1VTctVN3heFzXLzxhPrDgjP9K4soGx7PDzUmW9gGkZ8sYfWcxEup9XpWD6KERWuo4uTxtLC4rKyoKSTa",
  "key36": "2UWwxqPZL3GQ7YXr5iiXXUmyKTRAUZssQUFkDRRXRTHGZvJ51KYdZnWY6pDJhWypfTfG8qSM8fqxYYHLV4s9eV9E",
  "key37": "5CVxaSLP6Q75kcX9AosV2tc1nL9ZeG8aSznicuxmaCB5ngb47BF9p8keXi1iR9jUciJtQ1jQFkocw5VgBUDdyavK",
  "key38": "5cFMjNkHUhGkKyiEzBduQHnx4nKjXsqMgM2ETDAM8hfJUwj777YFQLzKk5Zt6iS8NrrsZyycBCDHELCHRbhDaRJ8",
  "key39": "3tvJbwr7K4kZsKbHq1spdv1hhtk7UNtgxjrek7fGR1hwy28WP8rmfJtWujBZ8R8EVETq57U3DQBSn71RyGMFSRPv",
  "key40": "2KuKJFKTuR6RPfmgHJfSqwR4eS88DF5Yo2d9LK2hQq9cZYJvfLHg31aFFgArgf3nPasbiebM6XT7h9n9odgB9KcG",
  "key41": "5NKNMR3iGqHi5jW4nW1HwKWiA1Yui6ct9R3AQJqpNKVZrcvtH82BrnLSbAXdb1EZZUfStZ8XTFk5o14R3fWGWft7",
  "key42": "32c9VAmPHfLjYGvjbQu7q6ro7NFbs4i8NDBjFTH1wX3v7eLJBbk1NwY7fivcxkn6c7dCuANf1deGUpbQd4g3apph",
  "key43": "xHAu9jRWY7TRuSj6uqduoJ5DAfLz6ozWC64LDidRwPPNxQm7PjtVP7rUFdAhsuUSFE9XNYX5WTexdj9dDMR52Na",
  "key44": "2jB6jnT1yyNiNXizCzmm6CcD44C2FYz2i3QJk6wBpspCBh2eEbNf4Dn6C1uXaMmwBDxx35E9Njj5ez4s5qR1uZHL"
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
