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
    "2cAYE5amMjSXPoHe87Gbrse27faEEXRAUsw4fnmiYYGseMA1dSRHV5CRt3QSiavCf8RuC9y86z9c6trFWZToKmt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xfoENiUPdgaDiZKpp4DchJaraj67rvXWeY73KzXxATqNFxd6f9MU9SCxfYrgXaiLJp3yF4vdcCBQwF8Shr8krmA",
  "key1": "3ohbvTDz9jmzqMSsDx2uwJ6cEcyAJBT4NWFKUeX3wSSNPaLMKxRHL2dhcyaUiRKruoiL8wuNrfp12eMTtAbjweBZ",
  "key2": "4mi8tm4tAbPPm97ac5wTQF1FP8QWf3E2SuDM36ERZ8SC485rPM1nciPoxDhnWZfVvXxJ1E2tBXjWEuPDeNqBi8ZB",
  "key3": "tmYr3NpQfBbFnUQZayoTdpjXahWCgxa8AnWKVPKaVkM32crbEPmiVTFuK8QqD9ksvLVGeHf8amReiPABb61J3n8",
  "key4": "22HyCNLt7xCms1MkDbh8q7GSsmwaTe8TqpzuTFecxWQcEY4VTNNXEe2FuXs5K85XmGqPskz3LDYsNjDe6Z8QH2vM",
  "key5": "2VWFejQhUBmnuqiYrgiopJdBbGTiJmPsnh2gud3gytkpKDMLaGoGgxDjc7VXNRFLy5Nu1Ljjv7x4kwTorcz1YyU4",
  "key6": "5vF7KJ4mdit1j1MWCmUKEWuSWXUAKGZuB1A4EUS4CRaf2iGqAKXHmBRB2BcXDi7NRehVMmEzfLVgR1KmziicGqdz",
  "key7": "2zinKrpehh5Mf8E9J2dkBNUwVCHEoiP7ueAkZfEo46aupZHAZR3gLWwfWQxsrFndLjQAp7JoYM6ygT1ymGtPbZq6",
  "key8": "23FgCRiKZLk8xGg3fxyXmyMQbFh9Rkd9NbYSL7QmQ4ycjAVwawTXqY3pKg7SjXppfRdxgErTRuWpkLBukXd22fME",
  "key9": "2AnzzE8cmthfSGmb2ekwVjngu97LLPbLtuRbmp8PtJ4XabyDpFkRWcWBYGbtxfCar8sDh9RakawkxA3nqJbkkJYB",
  "key10": "3ueDVwDYqXhbtEE9VrojRUsqychnmLevpUajzqX27Ffj2PGsQbvXNmEFyGbSNhHYP3sMvybikQueuvsDeHGoi1SQ",
  "key11": "2tHoUcB6bpMFwsv6NSiAUaVxSsq17GUtdKgQ8Ma9M3Lim7WE3Wia3TtgQKTuSdahqAdNpznmyBeZkguDMS4MnoBJ",
  "key12": "5mjgprAR68UCgGk3z1cme5aQy2cHRRy4BUXMg2Pc45wYZnq6YLa4DPnHdmNWDrc9yprccd4pkwWzdQmtWpSfgSZd",
  "key13": "3SrhK7BQFA5bFhnfxFxj33ukegad6Lb88HQWtQUJU6Jyj1wtK6JasSje3KjkQYaW1bQoVjKuTR4Hr6QPfcPpzaXJ",
  "key14": "5tz8t19UxwG7U7Pv1U1NPgAThA33DhRAZC6UDv6PPN61f8Uudd6KxqRUBkSAyjh2sX444YqoAFM7qzSbPRZeVJKS",
  "key15": "2xUsBiiDBXw5vKtNzEEH5FRvGAAAjW6e41aQY2aV1LW68m6u2tDjuxC6GUtmKbaYd4QdCYEQpHwVufFoxZy2Wjd1",
  "key16": "37RKHK7fTSzwrCzgM5NPEEhagtkQVq2osaKWRkLDbks1eVRAfjC8pNBHqi6AcBnBgdhzhdjy9KU82hHUCgwsRNNv",
  "key17": "3k8DhTCYtpHgo5Rnn22cEw2ALkGoWndZZvkNss1CQNjWu47XLKx9rAGbeFSMtXk6W265U8xAY9MW94jEWCVbqcmC",
  "key18": "29UoAzzqVq2c9duGSvyRTPUA2UVsRXib497ZkdCXfJqF68SW5P6PE1F8KXg9Poq3KqvY3GJLMQLaPMqFHjsmcMHx",
  "key19": "5yPz29v1tDNN3foNuLJJkLzEQ2aWUCNjpDkcm89mwdTyzwgL9P12BJDnwngyqHPAcy8ub863FqFRxnsiwsCne6M6",
  "key20": "4aVC6HCKpe9PaX3Xs2EfcGcDhXEoLvTF27UpZRy2G3GGERgsrgY3m9t7peq67uCwghDLdmRGYbscKfL5Gvf9FWaf",
  "key21": "2ZhN2AoxwHvWdvEzBtEJCbpXKAEjmTrN8amTcqyszVejPYbWeDPEd52twibZf7K6cPokd1zoPW7qkgL1DwDDz7Ah",
  "key22": "5Z1UVzUo8bowabdsAbUxUjoT5T4bi2wAdra2KHf9vowA6t2iPyZZzCGUf1Cy3Ppo3KL2A9bTU4n8MrohJ23ecZjn",
  "key23": "4YCVeCWZVwQjcffPnaxucRw8xfxzzjQngtdRXdHwatkwiDe1hQVzSnihLCtu6McGLeZvj8UovYucoh3BsmKWubqa",
  "key24": "A9nxEvEJGN2MFzsRCq8Hy7JCatNuWrkBvkEqQfL2G4PCFrT1iEL4oQGuxWw42sdP4QsHQ8Ujxhpf4vWx65qMwkm",
  "key25": "3eGiqpG4PD1Eav3HbWprH3AjMDz1g5XgAaeboMmCchuNmWcE2RovCLTPKpktBHJGaCrPVH95TAfEU53A6f1rWCvi",
  "key26": "5KMConKLJrega1PTdPubRv5yRUsjcdKyfF1q9UPjFAZC1ZQ9mneDr7rUYUvQdgBqAvRRfjofMfNP8dnUodKdKVrv",
  "key27": "5KvzjyPtxxoJ4tLpiF1svPPQX24bd9fjodXTnLyy58cAVuraHzv3shUmdtAPP8LZRZne211V5x2vGc6KTW6bXLBQ",
  "key28": "2AS5nJt8NGzEqhwNjhgueEBnPzJB1cW1d4WRkC2JJKj3aA6tzanpYunCSQmVgeiYrnbvx1vxUNuxkx3x3qAf8pqT",
  "key29": "2EZExSvQToHfzX9Q9if4zGpxULcADpARcfkJJofxQuMzkzuBeneW9MM6EkzhCyxoXLudMLmwtBsWbs7MWHMY7Dtd",
  "key30": "2bftCZfGvzCA7frK18j7ppDbRBXe6g3bBVWH6CseVqwR4ho1JsUVDiWJwsuqCYVPiYtQiiHGvP3aibEzpd6SrVFx",
  "key31": "465wBxfXcrsw3CHH6yJLTqwGFrV8bZkNm5EGXHxfusUCBerkvoujTNB7q7B1P5ngJz8TJJuXGXnCVmx4q9jMwKNP",
  "key32": "44nJdSQCqQ3Jt9sXHZ7nvtNEvJ1tv4reDhrcPzayC3QwfmFpFQZvH4R9Ed8Y865voFDAbHjUjrYZw5SFyaEDhAWi",
  "key33": "5W5UUmuAuNKSG8fgoUhd9c2UHZXMEbUoQKe2sRN6mLD8MUzeAXYKC7a1cjfCtkKrzqx2nqF53Fj9cyNZH1GM9in4",
  "key34": "kqnwWpg2PMUK5MYAXmH3QSMPaEnnW2yUy9P36hc81KzR7vWWMyYNv7Sp1HSWjEMf8RWWuMgfAemZ3ZimXZeSd7N",
  "key35": "2Q4mxxytzDm6VwMm6KxaBUa31fwJ1RyuUzthx75WcNe36eodJ5LAPDgK2ByZhMzX7ozpp5CF8zEQkPXn49YjPyrb",
  "key36": "4fr2pvinUTx6HXk3it7k1WSu3JpCSVPijykjf5MVVD1ZEYbeXyKhZqcWL4WjKru6rZ5ZKMQ5w2JeAcgRQ9trvywT",
  "key37": "DccWUMYBESciqw9o4M8KZCVQH2REAkk9WdGGLfmZ94UBD9tqVGdVnqZcxmubuP6pL5jzBBgAczVZ7Ep88c1gH4G",
  "key38": "5gnzYV7NxmRBUYqkGhg4iMoZgD9CPhf7eqw8mjaAsgDJX5WwAaQBZF9BWe58sMUY5ZdihVUieTDD9MpLq7i4RKDG",
  "key39": "2wD1xmJwYjQRBGDxDKCu1inQVcDtk2Que7nrj2KCBtncuhZKu3UHCBadndoWPpu1dLvazToDZAek1R17M3BQcK19",
  "key40": "4ffaRjG8XZssJF2Spw6saj6ebdGUPNPaUUHDheatuRoviGxtXnD8hvx7R4uouPQmpCY7KDoy7VMb7ndozpffgWQy",
  "key41": "48pHrFAkJGfwz6DVrRGsKpW6RjSyaLanvmiANsG1D6AfUuGzNbig3w5nAWCN1FwjNopA9diJ4KQe25mcTGsG7jEC",
  "key42": "Kr381VbTM6u7xmsK4HdH7qfL4qiAQP6eNTejf9KzgvbUrypgEszFUPZPKrbuukk42bwpNXjJTXbg9rTmW7tJt4f",
  "key43": "5Udaj8UtsArkrCLxHStjxkek6w3QNv7wC9ykM6uoLThEGWbVjg93AjCJbj3QFJCoR5zsyUfcUZxRiQ3mMTVA4rwA",
  "key44": "2bRem6JDCNymFRw9WNzXrxEGfhVVXY9kwjcrGijeJTtG6X2hhbRRqTMXAc6dU9nvBv2E2GzjCHD9QsHRWESDEgUB"
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
