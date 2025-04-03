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
    "5uyH8KcvbehcuAJ7vu43mpwdLFSFQr8FyDgQZ2vVPKEA9Cc23u9zRhWZWpUrmsY2dZUXEJfFRe5Vdfe8UMPpzbtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FqGCJG75wE7Suv1bix2oQ4yyD5a6Ka2ugK16hGEeeXAbDBiX6F1K7cw5mx4MnqRzZfMHdEJNR63buV24hMZe8ZR",
  "key1": "2JdjAA2pQHwxYrAFetvwYqQrCzmZvkJU9WJbeW6CdNBRdB4nZxTkAFyeKSDeCxJHYTQ36btKgwYzyGFEx9R1cSsv",
  "key2": "4gmkPs282j1SWqHG8NF8A6A2CXVtKnQUwCR9raxueq81qLJnwXBbF5W3MdRmAgzLP4TaqXsMuDLRpSVxQFya2YeB",
  "key3": "4wKijUUYdhL84Xo9uiNy8AzqHX7amBNPr2p2s4Qz3Vz9VoZHkv5859Cex1CDqu4DPs2QV2bPzpF6hZkCoLTkVdXU",
  "key4": "aoaH7mayDZRkG6fph6MHoJeAU6D4ysuf4XbQszVJXxPoEqz8k76b3vYkxDhfmd7NDRd2f4KRVABtr8hPGwTBoaa",
  "key5": "ugTB6eAfYmuZoqdTDCCAapi7KBnTd7h98j6CYEDs7NJHqCQjoNR8yqnLDhTmKWB77oykJz1DZ9VKz3VxVM1SASV",
  "key6": "4bcMTijYD6wTq6u3DZ2ASZnm8K6cj2ScJHezTxaSYjQfLJ6db2bGAWhxk1GpfUkbQUQnRAKw48bdiqYGr846aHDd",
  "key7": "wjkHs8YgTDXtvACspb3i1cg7xgVa6ARC3rhzSRKC7t5bbtwQRAv5Zd5NUrpL3okFPW8Bb8QpiR1H1wQJq1pbPy5",
  "key8": "36oCWVjmEKcJ31my7KPo9P6L9ZZaKBZmmPQZ8quZqTPeTt6zCk82miRZPyBVU3ExUgLi7mjK65Ronxzvujr84bSv",
  "key9": "3Q7TjxeTW3KSuWQ4fc7EMSwRqYGgxdRXc2h1WtjHiFmyyCAADVM1LbZEndi3jxKDxYa7SXGbD1emfEaCLaZ6EJ9N",
  "key10": "4wd83xnQaHYPdML4MkfgaTa7brRHhopStnRjDktyEekskDCJXaUVDVLkV5fbSdC1kzNZKVRg1LKZajMTGTidrdWv",
  "key11": "2ESyEu6FUw7ScdwfkERyqe5iremZCybCLvSJtDNMUMQiH4U2DYu3Q7rCdEktLmWtxfUAPFcJwLVZCF8xzc4dDJtk",
  "key12": "3r4k7YeLCAJiz1mDZ7gEGEoofweMe9VThJXisC2oSioVboDxugU3sLeHmoMPD1sj6mms2xwjk7aWtb92YbzoQCEC",
  "key13": "3EW1mxTnbJ8jsRxXSMR1xUiQjfdZTDvx7DtuYpai4xW9grSESLoFGsoXEuY6xkcofYENntAAAssZJ5iSQeEzbJcm",
  "key14": "5tgBB1hdSDhHbQ65AETQVfS7jj8Bc5to6fbvN5F9keXrd4r25BPR6N9sAatHAtbYtdkyfy9QWrEHM48b9euTYiux",
  "key15": "4H9zBC6m1nzHzd63gNcZBfSmj1Qyhp2aoX6MGzqmrR3kDCcthHnpatE2jWzKByoL56SA66p7zVcXnniBHP2ANheZ",
  "key16": "21VTVFABLdxBqyWeCzVqem7bbaBjd29xQNBt5u47pJ1BrSSy1ZQBzs6RCyvJ5kJPqNmg4aVKcKD56e5Edmgfoe2S",
  "key17": "2M2dEdFsamr1sF2dBtWX7xiSANXnSedPiEZRDNYYFm7BSAr1CDGkHGdeHp1aZ7aCTTyJ5UZ6mHZ7WgYwproHMpVa",
  "key18": "ppeDFQ1e52XaqN89Sarhe6x5Qjbm5YdBKMGXqAgRki25UrSKvAg1hdzmtDHFc4MM9gGgH6A4rAf9LWCfeRdfKrh",
  "key19": "2aF48jJMdJDoPy5BFJtTyTUawzd3nn9z6Nqvs1qoGpE7ZttsNg9cRc3wsmPwVV9gWVKnMQYRfvgRXrH1Hfwooqbr",
  "key20": "4NFKELpi4NxjoNoPxnfArNxGm8NWfqvRyyZA3VYVxeuNka48qT67kAh4fwqFgr2565r82K5KKiWCMBEmvpwytMVM",
  "key21": "xeRgyDLYumQTMdb6d4W674nausye81giiGkpGxSWgRjAFEQHMRDPUUSv4EjYXrEpbeg4MZbALQpok1VDL6NnxgD",
  "key22": "aPYLejGoyCJb4RzcjsXsnwrxStmB3949aE7NUDpy4RuP8DVYeQTyspuVmPGURQnaPTQePKTEkwQSk6xmj39rMgg",
  "key23": "ht5JxFBecKP9vFKn8dGSV5iEK3pNGgC2h4VfabMkYc6NDYdSzQLv7TbbeSBakPdLy5zsjuspZ1v9vr3vZMeTWNv",
  "key24": "4pDf3gJsfiheghMERr9ARhAH836gtRZiYwtDE2ifyoyjep7GkPdsym38jfQe66PuVyRaZTqcMvTkt4pxer6TGGtB",
  "key25": "2vncok2CwRPkyzjSkawE3WdYy6iLGAyLhVex8SxtGoDR71Te5UELQxHWpHyTwYG9sWf3BVUco7BwMoNMS6yYmJ5B",
  "key26": "3eRKZsY7rFExot3o2KFhybBuoE5GYGNi3ahvJqGLP9eZwYhAE4JEcszE8L3KH1PcyTr1a9TF3HFhVin4k4USYB3m",
  "key27": "1ondKt3ETRbdQkBorv9GBz2mmUd2mk3GL2ZtXnArac4df9abF2GF4vUf4WY47TeH7aNCsCpWx4qvVysoqXHqndb",
  "key28": "4qhZZ4cHNiEMTupmWFhziYW8kHbWGXGwinRA5oSC1UXeGQ3vXzT2e5ui2nF625oP45aGsERgUZkFMpcYVZciK21e",
  "key29": "b6UfAE58hkg4JjZ6nviLcbbo11KMhkWSee56uwfm1j3GPeitLzUnHVL8AfVMnnPuw3U1XvVxLmmsxWFcXbthicc",
  "key30": "59af5vBmvMYNYjBkCa2CqMmLTTnVt6jiGj3BcN6V4rbdDNohwy31eWoEereN2Un8pSD2evzKnZDtPgfEn6TkWWyt",
  "key31": "RvtSuH6jtEPNHR24Lne7cfyvxGfz7hcigoCixWVGeuCz5MTud8j35xaGmY3pmX8EXvKhZHFMoY2jWFRjrXK5rJb",
  "key32": "4yqDMskhWuuSTmkEo6ovnVB9rWAMi5J5ti5SjqVUT6XPL7kUtYFVmNsU4bdgqyfgvCntHUBjFCKScK3V4mUfj9pD",
  "key33": "35Yuy7XingVy5VDX9ktGTX5kDJ5Se9jGgdxbXkRUrDT3dZYgskvxXMNX6PuKJmVkPMAcKdmyZtwtT9VCjaxwsW4r",
  "key34": "UYWa1qvuBaEfEQmzSWHNF8AoCWsSsEWBa6hEPXdqVxS9Keux5zVnRbyw6pjgV6ZXmZrc4LogNZyp1fBccNDB7pz",
  "key35": "3Q5KNbNeTmzq9uaXVaJvYTH2piDP9BmLGu6w52ouU5YFPWtqcWPTaLHxvSEaHsd5PrxxakXa1tdjcHvZ3eY6GrPk",
  "key36": "5tahn5dkreXX725ZQfoFH6CZU2GabKrQPDyEVW4ohdbZTBALbd1X2V9C9e7orkUgkw3VrmuxeQTycsw37Eqf59SM",
  "key37": "3xxYfGNqUwxaig7vp6NKuUsbzNjD4ae5NyA1jCYxP4TSTT62G8Wk5jE3C5zx5uuUnA8KVzUaZWMTHy2tKgNdyZaA",
  "key38": "2DKgzw3g71GwwLrKBw8bGKAridPApocqCkhtCftGSjp4XS4JnTZEPhgd2EMHuD3wPWvHgvperQzCCa8r2FHrprrQ",
  "key39": "45maW2xBaBPyAm83WnrgkzjcwGDYYibFUeka9ThK5Ju3EmzfVnTe83DKDLVrWTiZV8JoirNukekVzGcWKVopAQH",
  "key40": "Y2YDtLq7DsfDKjHGEuUeRYDwtsGJmmguADnnwPQHpfQUVyXXYoK6uF4di3sUfNQHtpjQ9iurAuE65TfQBFuvVck",
  "key41": "5gKKNv99NH7Gseejo9ZnrDZWSo3UvFw37tiutZPCV9dfNmUNG2j7aiDxsM3wyuYbNoYC8aBduAVSnACMeJMj7pCz",
  "key42": "3JayoxHhTAwTcUkVwh74KJjFUvFMZCKsQ87xLuY9kqGUgEBYApSSp5WgpFPSAJ7YAVxLrAHtdME7DRyTdYCaZFQ3",
  "key43": "4539AiC45CTspvACxmU3jC3MxFuunuALgLYe6Swg9kFvLrejFB1pf7cSNsogR8PLKXguBhmVdkRx3SDvNcCVH3jL",
  "key44": "5CUsCU2VFh5nbTBsxz8mWLQisW7GDkxLFyVWHcAC9t6JazhtDchnWphoT4J6o6a5d5tQhMkHCJyeFwwUiwdMeLxQ",
  "key45": "kw6Qbe4Hmo1igvHnExMneQnQaCSLeoLs631wQ8cNeskgrzpKuoko944z85RDKPeSATTSwjGCEhxQmqMRADaczw5",
  "key46": "5Eg1YsC6vfmqXc1EWAD7zbh4QygSz5Gs63PRonvCGrVueVt5S3tGqvcy8a8dDuTwJgZ1JvWc8UU7qNc3C9Thjjgj",
  "key47": "uzgihSifVU7kqvtANj5vKkGphSfaV7q6xjaHDhbmmhwAKHR2GwCokyiEJ2r4XrPNNF48EtZo9vz2ZAzAbB7MQ2s",
  "key48": "29jY4BGkg1k2GXfJf6kyifLrqT4nEGp8oDnuuPSXCNsnK68fjcC58qbAJU8btuKuq3GL1d6SZBRFkChFrQyszBd7",
  "key49": "43f6FUGgPix5AX96sqhFkLJgwTgh21kMZKdMmVKo1kRJvUDPkcwLMBMHX6pfxA7Tu3GpMEPiuvwjEHQGE52EqXFX"
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
