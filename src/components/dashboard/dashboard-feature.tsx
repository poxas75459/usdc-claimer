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
    "5rtcHeLCQoRLCTvJ2LBmPPiMEPtAetoBjR8ggCo5SwxkZxx7gg3jjacyX4nKiyXYRngCreHcgYAWzHGYJMYLYBA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7TzpTBUj6yzABqyJPSa5okJQnSZ6XibQxNUgh77UwzQEfvoRWpWrh1Ux1g56LcnDZ4wKWnpFyAmcrktKctHta8",
  "key1": "5BPyRuGnSxdu9M9LbWRxDsutVYCKFRHAFvUQHM1bNJQjmrkb1S2DEYtYxdxxqjW2JN4VGEjc8Uugvj5MWyH7FjeV",
  "key2": "3MGpztS4pkeqyqzQh91URG6KvuzXJLQSNTGFztrAaXh6PFj8LQyHbGeWMx9rpUkn2HzpG8uMdaUdxX6QJ6tbB7wS",
  "key3": "3aKXcrFURKEzMDJ4t9U49Q1wqmXEhubajqhw4gkFG73UreWrbmZhHkupF7uQgsiUh6rAHXDtP3HHoQBd1VQnSeNh",
  "key4": "wNbm88eg3cT9zBWHsvnS944ffSue4DzBHNk1NrD6mS6kasbbf4DL4uGdaacqW3DnZKetVX7pMgbs4QM2enc6ziB",
  "key5": "4Qr5GhC6bFkSvojoCzDqJkxsCnULZKxov2ZX53LrZAvS8mqZWK4118Z93MPoPCRrd8SymHgTu95iwuTT3kJQmnhp",
  "key6": "5VdFuGrMoRqwXCZDR2ddLWybzR9K7EmkG8vHvMj7fAwsdnFKXgwJ2a1oFzfH5K8vNwaWxsumYbku7W3ytH6ADkuP",
  "key7": "36a2GB25NPHBPZXWjmKEMK6ByoK7WqLqZ8r6sWicvbRbpXoKdxVVuLB8TkqAC67uErkZ5TjsfPzcJ3jYRbGixA92",
  "key8": "4DEZD5ir4xg5ojWMziz2YkpFTZAfdtEGHZ8LiT8qN2oQAvZnz81SmQtP33hbJVjSd1UUCw9AmirvgEjb9UbQ4U7d",
  "key9": "5D5ePW8E2nfJfdDpGsbzHYixoLBxHcbmL7dpGAkeNWHcSi4LURQnUc2qrgvLiqFc2J4PdbdjX2niJXtQkM5GLTv3",
  "key10": "2EaKaZuWhaXtXjXonDtxuWKcWYTJmSUBDmvB9RsKZhfLzPcMpRCQ82RjKvNGU34dR31fGjQA7ijwHTEYaucvw2KN",
  "key11": "2mVGZhfpcAbWmeZPugtod4Yhb3Zjec9BzpFt84m8pC55SNLpVD4goNMVDjkni6AADWCRGzxzQhj1vu3tuJbVdHn5",
  "key12": "3YXUaRANrQxBNcAMegUeY76wCzrAfyWkN6WLVimFVD4wjAHi3DK76rAaFyqtnaH3iu9VKTbidQCJiQo2Gx9PRMB1",
  "key13": "2YFPcdDFbp2sv5wvd7LPkFnGvCxpA5cX4VYr1esTUagaSwF1D3VmPtEeCLUR1BPZ8SXsftMrn3Ff6mDgSgoRbfUu",
  "key14": "4uFf2gD7qtXF6GLGP626Ayj8jsB9zJGoVkVLezofsSRXVpzsdbLczdghX38qomHi5NSXfMfJf9jAMurqfQwxgRsk",
  "key15": "5xqwgsSSyXAehgtMw5bTP4pEmT44y6w3FfLxMR4kAQ8kg4Rtk83UNJQnNbjGUKCK9KbRcHmzMKXNLXLdTmG5C4UP",
  "key16": "2gay3mJD853SnzvnUWv3Lj3rHdwDjFe7X5LWpCa7ZtQPpMMEc8s88eRjz2xicrD9q55Y9AQvXrf7tiVwXFE2iwoB",
  "key17": "2FnzMLNDnH5gAXe5MFbQBgx8KEwS18xHLB2jGTnPChKbJRvgGTfWZeCDqnNMqj5GQtdefwteMqBY6vDLiZgpvsfH",
  "key18": "4FnJFF6zLCrPDJ6zHkNf2XsQLHGqkJrKAAPkK1LVRp5GgMpu7x82qGshdRcvmocXHGWhxMXjuxocM6qhrm7hyv89",
  "key19": "428icRCoQ4ifuHMpyjG5qjv7TJzPAx5zYNqdieLawS4Vh79ZBPswVUcwr3JvxzPnxt8cG1yndnSY57PUnehRGnT3",
  "key20": "5Jk9hSDcbw6n73PCbkcactgXmuamqbTSd3BZ43cWk9UfzLYbdSZbvkmTragHuqHjzJm1oSWn5SBd4CSXDmF1jyVX",
  "key21": "mqEqoiYS2GJL2h6Lqfd786BTExamFdDtGemfksoJMB2UvjmjoSQnWyXv8Aeiz8A9w4uyJgSCQqXLa21nXDeFXSw",
  "key22": "2DQpJ22LUJVyedfbHoaYsCobaGwanabuhftQi6Geg8wgmGYnKgTape6Sxkvfea3aYVwJLn1g5uvosjcHwANa3AG3",
  "key23": "52mFJQfGXqrnbX3rnaYo2h14wridL9MG3BxPfmkDiDre3QR5dhwS2PtbnQ9iLzPrMMyDeLVDb4Ai9AzatP5D3gp6",
  "key24": "5YFEcWZZfy9n1B4rxkTS5CNkktnYwuZxK5v4edh77AW2v7utrgS21T4FFTnAsniGiK2wkuxtryp2ACn3W92dTAZ5",
  "key25": "ZzQL2zcH6eQMVpGBYbKU36jW7di4zioSH2EJToCKAJSM9wSJnz7VLcXq1wYz8mwenTDFnWC3zgiK9xGPYApswi9",
  "key26": "2Vw8MdcxAYHchNvVZPqd4891HQwD3kbtrt4WBqhGwyBgxKeAqDHAYqfJSmnX4FGiecyxJwVbMKUrFfKAyvxcQu81",
  "key27": "5QZBcyx3RKTYD9kr3uMzvKwfFcyeDXcwUK4fHQ6CjThHoXuMJUEgkRGTPfCPzWfRVr5zEncPnU9tNLcKBU15pGkd",
  "key28": "4yP48DTzBWau8FqjSKTTLH6p5CRmi3iK1xNpNLKUG5hP7vYXzMHfZaHdabYNmC1s7V9uwkJnC3gW3N94Wse8qbgP",
  "key29": "1MTh8n41CYmqdaJJGVCygLSQPTEEL5jHKriojKMBgkCoTSfwjoVP9qaW43HZ4ksdz4JHdteX1o2QUPkjZVt83Pj",
  "key30": "zrSdXxyGTWLwFbEp3NgqgxPYpWJpexbcwimSNriKbLf8xg739QtwSwcyz4ZhzkPVH6dt1xbdDVN5cTepvmPa6kw",
  "key31": "3cESGHCaQwPxBh9ZV6KWjZSLJYdvxuxLKr3ck6nPUxRkgzttykS7YKuAAMZPByGaZht3LF9KPvphKXsXyu9GhFrX",
  "key32": "VEFNp1fb2Xeb6TAXQML9gNTic6B5o37fCvefYH4stLb5UREm14Th3yGEmnaj61838nwKbFaJHZETQEnvZZf1HZb",
  "key33": "4wm25annP8JYjFXmC9U1waTC3Hb11xNYfQD6KK4G2px9DDBqo9L6GhbQncQg2kJ5Ejbg83eBzGxPocV2BiFkHKr7",
  "key34": "4iP7hYbpUKDcmsjoQMstfrD8z1aF5Q5RokySn7DMwguFFQ9LWbf5UX1wDyknHRFGuPN5wyyK5YBrpyNpouKgyTz2",
  "key35": "2nZ3riWjdymDHJggtnMfNTnvsMHNKtL71WPeXuD8cwNS7hGdNtHbZsShmcEMoTAarUfJ6Nt5RmLhXo4GeMg38GHX",
  "key36": "5XVgnWTkXWfTK2CKfGyM9xPQpYS3BZDJChZYdgf94WToUsxZvs4xysJh6pGEZhcvsbADXRJkGH4QdouGekhFmLn9",
  "key37": "3KEfrZ8Ph8NHYtBr5mWYrd4u72wpwJRydisSxJNi1tkk4Swbxdzn89uE2Fb4GE1bN3qhB8BwaD8URPok6wjn5bHD",
  "key38": "4tmNzjGGi3wEJ9VLFxW4Hr2y8tdjAGtkxqpL9DxFPXtXGrbBGL6W8sZvXih2gWpjkzqfTqZmKsG6hQcyAkmbaXPh",
  "key39": "3SiEMwQ5o2bsPRYieiNDfB2LXFWZPoXepKugkog172gGuPyidkKf8LDjULyFo4nkaqvQhgwQUZ7JWnWBetQESyDf",
  "key40": "5oSoptuHMGpi6DfxVtUjE7SxFdjTH8xdcBhk5pMx8RibmvTtAd32LpBk1uAN9jvwoNecwBFnXDHDpRo6ajzCSBY",
  "key41": "4adDRu9bgXLpxnxXpaSPqYdVQeicW4VkJPtCWtpn3RUKTJLrsHHkpY4xCoumPZihvGXuKXpz232AWzre57SpEYp6",
  "key42": "2E3JQeFEzKNGe4TDVtVkUCxXJgCDKZxzKJYau6iuc1KxSaHs38Z2XNznVz738KaAkd7bGFoQPkjPdkpoVvTZmD6L",
  "key43": "EoRNEznZdwHUBJRTvi6hTUzrsdFbrwCmaBQr4jiVYYBXckB5vjWHGrXYXiKKUu4aLZ9jvxfwPN4ocve8VEJkwUo",
  "key44": "5aho67giUDUDptsigv8xE5MnkFbs3pmTT4icSMyLoENTiRXzcL5JKY4PojmATjuJARqNPhSqbCFsr1YErLYPFrEK",
  "key45": "488hroH2is9hmvbFWUHW6GUigP9X1Xbgt8g3YL4Mjc38Q7JhdHLWpih3oC2YX3KGqM9RWUohi4QkTtJzgktDDj2h",
  "key46": "3nHR4Rticfss8yYCTowgzdwpvZBQJwEgKRbjCzKUB5mMeoc1uiNrHyVNVvGugABSDUzWYAhX2gTi6Juwo92ZExoe"
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
