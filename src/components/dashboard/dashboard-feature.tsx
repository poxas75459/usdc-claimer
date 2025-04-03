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
    "51yYgjU7ZTUaLJVYSNg2NDkqRQJ1eJh8MM9ys36Gd4ukZYeKHepupDPjGQA8Vm9c9EVKcR3piDt1okt4z61wYjg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEKQKP2JLCzQRoHuDqxZurrEg6yzwJGuNc6PEvp6fQALsNX95djEin2pVR4APbr8e4zzgJB6fYGzjhVXLgS833T",
  "key1": "4pC9h6Kbe82u1bNoYNs1DBWgt2FGewMNQzXU4zPDmGNGJ2Bh9CtJzkXJsEvTtqhjo6JJuQNoPr4umVvcFzEKR4m6",
  "key2": "3MBM2wZUJ2NXGio5BSwdyeiwiFVoVyUgxujid1Noc9nEYA7MEDtbktERMnm9qcmNryxKJwA6xCB1fB8LeeiTYPXZ",
  "key3": "NHXAbZBcaqrTEnKpyQtWK2asdUwpibnsNhSAuPv73hvsKtohNz8abf2GXgxvQW5N58bNuc4BEjAuJ8z89gwCt8r",
  "key4": "2AhHMUW6dTHfP8iY85eeiZ2wx9ndhLYNmkzZJ6QnCXMpxB6RH4UbVCMb6ufANtmQAGgDgEka4TaA6wJjY8dkRGfV",
  "key5": "EzH9VWKk5dm5Mmek7Yv2fPgJKTk9coMbaibnaCk87AgKHKpWKUJD1TqKBUYqHeSUcQZ1eYzwixfqNvrf4EHnUta",
  "key6": "4iT2zTuLvFPyZtiEgssNj1NbDsMKA7o815cmsSjGALCeEK62gpnfeDF6hwspzhGVKZBRywqbhkxkwXjvZAASFuwd",
  "key7": "2wzBmXGeJ5Vg6VrRR1oRygYzdwTc6xAiJdHM92WwsA5qvpMgNaasDJx38JTqmQCR9nfwAafzA7pe8yVV8FzgoZo4",
  "key8": "52jrXFzMFz5aVeDKbcs1izmXBovdcGyvQne2M9QDsNUwa9o3zDEpnF9s5XrLSw68UaZWrPrxe9sQrC8fMaGNaFeA",
  "key9": "2RSb5Asjckqii241mXDX1uuXdTgCeE3qiYb7ZT8aBvFjT7amKXPwpcLh1kspqaZG8xJroFynjxSgmvfg3GnJ7ZmD",
  "key10": "3zXLov1QxTyyYdYJhKddeAzCs88SM9g9CTmAvBUwouexGNBCY7NX5upaCEQqHJwd7chUpWsPxmZGspMs1PtVaXVj",
  "key11": "4jJAQeMDVdDMTTgbhNzWgywqz1xiPvNWzrwZy1BZWQwr5X9i7LuXjwBKjg84WD87ka85ZYbRcF3SoAbVfTDuDVr2",
  "key12": "je4JULtnKjnB3GWzraWYF1L21cLmBWFcjo6XriUzT9ue7rfozrpEAcurCwymN9C27FGmHVwRMg4pxiND8LYJfRM",
  "key13": "PgKVC4F8wCkDYStxN1agVHRojJDRVXdkzPLAjczYetS6F4jkfPr8tCfVqdof4zPPnSYtqzjVnPdvdkcdiKVWriK",
  "key14": "45vpZ5B1pvSzNBT6rtZkMH4dyz5s7nzXosW27ZnKimjfMjPmiL4rEQuE6qg96g3x83b64NH5oZWXWmLX7kaQ8wEh",
  "key15": "sztD7omHmz4DqkzJCdBFVFxNX3jR4tjobyALLMbUEBpgwz2kfV14tEyCvxhNtThuKtMZKM8PGkxTm247SzBAzNT",
  "key16": "2WozWuyDCdcLJaxQbADqJiSJcCCKWwkad8ZftUsu3yG571iuyxSD7dQZYHTro9v989LER4SZfUByHqme4Evak2XH",
  "key17": "28tzNjApwY64qBob7gYq6ReYtonVxLG22k2k1GxGjpEwF3sLJJFmMR9sUGcRkbqUQSbzFxg13RDA5j1Q5VyT13FB",
  "key18": "yBgHsCVMZ7aTX66LUZHFuUvNGgDTJJM8DimyebkHA2BZn9iEVxBNmBZ4Za1jFykzx1ADNseCe2crLVask8FptGn",
  "key19": "gmqHMV7A56ynTvG8Gf7aGJswM6XZHeZjt7ShNLXMs4xAr8hvqeECx9HdHkLYEudDzYgk4QobG8Pjze5JhmpEHwD",
  "key20": "22nKDYaQb95LVCz8S6V9UUCSRCYX8h4S1BZo4WzZcEQSLLK5Kewzv6gdbC8kxY2oT2xfSjrSii5Ln4h14TLfuHxb",
  "key21": "3rpTbqW21vus5tKtLQvmS5eJZeXRgey99311AmUkefU33oyLnfXEdYHBnH2A6SpVqymELV9qZb7f4BtWPmanAPkG",
  "key22": "2fZHV74Q5TEAkHbHYiobWtrwTTnWfQwzKddbhUfRumGuGirpoH7vtPBAqTymtxxiUCbtdWwpBRB7ExKScBX4jjk4",
  "key23": "4USrwpek6HeSXMccHQr3is88JHvVeHfo95ZnhjVmk3zSX6sdVyTaEtpbmCmYjgmvxP3DRBnz8HUCoLGQuKxs3vei",
  "key24": "3b5cuWeMxKHHqn5maN846tbiQZaX9qU38ougNmDD4CSAbqgv1m6o2BTyUiq6HED2vLAFfSfuY8vyH1xqpSPDva6",
  "key25": "5LaXo2YkY6x2j1acWSNYa6mbHqSgmpJ85nxLiX3k2MYY8oprZRm45kjGdt3nm1CD5of5bzgidmtvo1WnPu77E5ba",
  "key26": "3FU4974eWAmQkLTCKWuyu3ZsXhUpuY9fcHupZA54Hn1svjwcnPxoQgjBHS3a9YQUqRttpEe6upNLQA8fiEQGaeqf",
  "key27": "33xFav27hCvXMyC1YwDb3hkSrXCGS4gYpyMWBhkQLewXUsaPE76e1GwVzTtnGXQHbVnPvMuD9JEojR97oisrnE9Q",
  "key28": "3vMJVXBScY2WzhkMsUYzdKgozVytJfMtsYr9yHfAGndAXiyooDgj16JHxTFXHvfHxsrQY8E9Hmig95M5Tb7ByzNq",
  "key29": "2ZbX5PnfBASZcRr4DENPymxw3ybpKQg7T3q5YMUx29nSxbBZPf8ezEE4nSSZyipV4fo4Misu8LxpVwsRTgMdNhGC",
  "key30": "rT1PuJYwm9ADua6A5Py3ovJPhqZE4EbasMSw1k3rr4oM16rtrveaTLs74BxNjdMxmsBM44rRbPnx4u1rqswGzv2",
  "key31": "29fhrQtYFGoWBcogS9rqvViXHfe2ntvbxwmb5zWTKgvsmMX5ZfB1HYDM2bJxXdMqgXodZHkpD9TfuqBbmT149wmr",
  "key32": "3gnkjTnaXMq7Ft5WvyoQgVcY1iMM5T8xs8JxyFwK2vJdxtJ4Ye6N4UYoSGmDtH1ZJVgHs1zhJyFt2xeGfue4DVgg",
  "key33": "2L3dLxQoDr7Exo4m4FkKbKuDjph2P7RJCoqRde6VbwDJCSiTGMocQi9kSUg7MLZvRD9zWvwxjdw8fVQ4PoN1RYX3",
  "key34": "4rWvpJC9EUGjnjJCwdxYSS5kGmhGWdiyYsWwTNB1Ge9SVqGrkP9WStUY4k5inLinEp4X6mXwSY3HQogVtWKDZQqW",
  "key35": "5pint6wBjjkGwhUgWvXFqj7hMzhw2VyXDEbVAJPNonisyR1XrAk7TtqsqT1oWH7WXKRL2jbdpTSRYrTNBd6ecYWR",
  "key36": "4fi668fWDtubXaqEBfuqWfKwp3qcKmvR6LdoZU1Hbb1Sr4J5GDrpg4gjeZLHWFv2CZay7xVTweq8mEsjfZiLRxmo",
  "key37": "3CESBuoiSp5xvw4bgZ9Dt5EPAgPnAfA1afj2HPZGvcVm4K3VdqEiuJ7FC7vB9TnF4iNLCb9phyZhQeLRk7SM8Qta",
  "key38": "jhmAbgCABbzAwcFcURyfBcXgEEoSCNP2n2FDCSoTnzdz8AsFnsyfWNDrLrgyRRpZ1Jvr2kANDshYCtFig6bUMXv",
  "key39": "4WUQuGMDU8ENF2HSQV89PkH1qQud91XC81G7smeEZAxA9YhKFczF1dJnjnecHxqBxrYLivi2dLFbzdThh3b6tioc",
  "key40": "4j2kmBQAGMnGtXdWESTcQTEEq2ErCQsDRzhMJcPEcvwD4KPyJw2wYUQweCf7SeNqkP3gRjWakUgKo3mq2S5rnA8e",
  "key41": "43YoWquwjR3DQYtQ5B9DX36HoomW2mTwxvUQZRVZGascHrDACywRx1dHkzNECdjKuNMrLEwBLvprixwvZEAoWDHY",
  "key42": "2T15izbu4mwJPdmJUz8UnvcEQrEdXZ1DgqxBKLWgm7UJFD3Ukujve1CfvLk7ZbphoXFcu4GtHdzEjomtPtHPN87A",
  "key43": "24bU6nDQATVAMjzKXY82LcamtL6g2BAXryTyYSfQ1pg9hgmhRwyU3MLF3VBqUT8onaGoynYBvWtj6A1eJ4DbS7rY",
  "key44": "3f9XqxdaZUNmph7cJSZ5a7xRcqbQ8Peytds23No13499A7Bot3mrunovCujSeFHPevu2MRitBAnGZAJw6LmJyq4w",
  "key45": "4c2yX8uJwQQcWmdbvH3bDDVadikSKXyFV9g8NRqDRCirRntTJHj5f4pJAGBkDKFurZVn6W8SSWD2gt68JPYsGwo1",
  "key46": "4M9maJwEsP23djVs1ZcLsPP2degxz5Kg4BR4CA2sfxq2oxqv5oJ7NvLCn7RmSXN63GynaRkLBiSZ4TxnR1uE2ogS"
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
