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
    "24GKpKrRNXB9HRDhbCv2HE4pvsAG3hSxCaCtQ1ye4TTNTisWTPJdEE7oE96ptoXHcKDoaiYrkFfDURHvMbaUGqcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPJZ3jWtk52fcaGyinaYfz7vBSCcEDtUkCBqq8LBgupH5aokZwxQ51WX1RMQbn1RnrS8P1qomhU8Tw7U8MtmFUt",
  "key1": "4VGRz3ojiw8LAbUfHBojjSgvhzHhF7L56zxXgsQUdvAwRGdwGanr2D3AdF6Bsv4brp8h3m8nG416zrPErkuQNbNx",
  "key2": "3sUq98JeUoAXjNdp5xuwehsY8hxwv1pqftfxr3Bd3YQgMsqayLqGSgVnGBdocRaS27d44ecYHWexCGFeN6FmaYgV",
  "key3": "2Ttm4i9qm5zKamkcry4QtBGFZKo2fbaTGLg4zMgb8ioNU5hCcM4Pi21M1akbfV2naeMRRkaUoBjV7Lo8zxvtWNbW",
  "key4": "3958Mg7FgkaY9DR3TnsVC2aaYbHY2QZzyQ1f47ppcWXan8rmw3T3wLcatjAvF7gjqBX2g4iesTv4Ta5qnX6GJNF1",
  "key5": "33DiyGMrqZne23prtCYSR7UJEwuHqicKVEScwTS8cowPUn5WwAyv9VASTZPboetNiNEhk7wbZA66sPdM9LSAoybW",
  "key6": "3owd17U6QZ3bt5gkebdARagc5JkGB5MNYETY5CEQJuD2hQxhQhzez3Mmjxm857FfzUQJqFjmukfzDvfASv9o1Uz8",
  "key7": "3dptefJDjGgEmuSeRythaVRxEZYpvVNaRmLT2PXV6cfW1pzwSs54Ycz7oe84tvFwXfj5SoehqpJAqXt3QD58pc6n",
  "key8": "2UgAXJjkLPsBa6Xx8eK5tv79JKXQDAfdVArMtC9hgG1wUs5md6dKSoKa5aYRD4FKgyWLH8X6oDgZ9iyAm6WNFg79",
  "key9": "4cALvSx9vFqSuTkuT2ZUyDy6NJKmAwsp4oSruMG36WJU1x4d18QxHCZofT9NwP1PKogwhihtrNwpLE9f67LE8jaX",
  "key10": "dCH3neijHCKVaziDeLTgqo3CCh5mmMtjGuc8qpnmfoZqA42WnDMRcgjSDqR3EMAx1U3kmJqXNZTbXiwBPA4Mbqu",
  "key11": "2mwDGTVx7n14boNgTWN3HQMvSAAYhNgrkFjUYpNnWUA2EJXBkPJyWWYyZEWUzXqs53BTLwZ5SPdZRkt819KTQnoX",
  "key12": "54UhEsoUNn3ZUQ8CcBXwK1FyZBraiAufPpYCx24249FFU9Dx1ok2tRVPGoKRxH9RvWQchGAAqpqPKyrfex7p27Eb",
  "key13": "E8BmWNp3W2Zb3iByyVUDqtqnLAXYSsh33jXDkhnrZq2YD3Z1Vsma1Uy7Wmw1UUfpf1vxpb76nMhWh59UxH5bhJy",
  "key14": "3uqpCGD2jiaWNZBsioomPHmKtxFx1TxDKE7Yz1D7VbfhPad65AgR9NWAoWoTRA9aBsm87uBvRKDc7GEThjxqpyq7",
  "key15": "3G8cetBaeJBPKXFeazAyQByc3HPZiSRaRGTX1VJgtWWSHdYxEpFqzVq2kyz68rDXctqK65EqQK4jsakoVsUcBqpG",
  "key16": "4zFeCKrdiGTDzTGk9tAZwxySY522nDXoFAXSD1HKEJuF5Mi7R8rgiHrn66cSMbXfFWpdbNpqBxeKzPpkfmBpSy63",
  "key17": "w57nRCSB6aDGg2ek23aDqwFFNLrpjM5or6JExSLu1MZFghd6Q2R4uC2iusvSRsXRFo82Uax1kGN8Tnri9Jjj8fs",
  "key18": "4oWmp82NeTDa61mmchDe3woMGd2fL6mD9nwuBjMFLUr4yk9F5DjXg68gNFHuki2j5kLwGfCqoUmerq5arqp9BDbf",
  "key19": "3rFDQiUoCCdRbAepmzmU8bG6AnWVKVDqVkmPP7WDxg1KwAX5bqTUqJ7kcy4F845J9W9yNkLo9JQzZnBUHkshYjcX",
  "key20": "Wkf6NFBTXU3FnUKYEvo7aDVgzJX8wdFb9M2jVZhmQ188pZhAYddk25uUnCA7WHRj191g4UmMkCgoYkEZtJRWPky",
  "key21": "66gT1Z6bzj4J7RZsMzjFyJtssLdLt8ggFpgAvxjPNhmUc4AnjZS7sQwMHBnX8eJD3jiPTau16zxgsHdWCRZJiD1h",
  "key22": "2f6E7QjH6KvtUJdDSZGyikc8xUSgJXDg2hvunHDqPTfdcDforqS67Vst7rcpgFPhguKsmfBu6fnt7K4n3pdHGX6N",
  "key23": "2PEFMb5Zu6Q3RJi2PRrep11rYh3wB1NEcJDB77sAMrxcJTMvrJe42YdvS5TeGFfjWUz91SL2EzzjNKUUX5eHrZDg",
  "key24": "65SMYUxRoS2PHMNotg73UqE8AwjanbhwznLLybDWkvrMuGA4SgvxSX49DY7auyaYZ4qhDC2Q3JsUQ6BJEsXTU5yF",
  "key25": "531Rr5baicE4WdwcHftiY8pdnNDPiqpx1YQcFwjcMheGgszxeMFCSpE3ZHenW5YGpMGGXquSuop2Eg5Qy6ndDLmP",
  "key26": "39ST3i9T1Wj1JBtVm9YFZznCS8jnLfuNf38g9BeVRKhttnpxwHY8yBePaJz8zpsBvnxaY1tbf3vQXiQ7sjT7iVaF",
  "key27": "559xsrm7CjhUUv83Jdgyo4CYGzngMJfD2Bm1gp6xZCDTKUAHz3dg6ySnFhmMnRV8sk6jU12w7Mdddvg34fHb3wwF",
  "key28": "2Mwf6awAeaPHoCzuqapPGxN2S1EXDFi7ktPj7PKDzUSgdBNtWsvrMso2NWSs5F3c8fYPT9gPQ7NG1DfiCFNd2k4N",
  "key29": "4YifAyPuHYtLuLX2Bm7tTGGaPXqvfsg6ZqUNRTy9PpxBy8zmmHuSGSZFZvmpHozW42CzB7ohZcqhLG14LCpQn6w8",
  "key30": "2572KjHJN2DyuEdNiHPaQ3qBLzUPRcBDAD9J64WEsQ7iwr3MUgKpS7WrHoZ8KdGFRDrX9nschoU4ymtqfU1kkck4",
  "key31": "D8QeCwQFKLg3SG6BLqvWhLosNzyJz2HYxnZPr7ExfnT36WjovE55oCPY2Sozs46yzNVYb5tfca4JGqqAAbs5HPt",
  "key32": "ZZPM8Ph8UgviNnjJArPgA6V9M7SqVZqX7NtkWpriK4XeSiyi7caGwaUGwqY9bmYFBydbn3dTykbgaNeBLE58tLc",
  "key33": "tnCYPeVeU2yJ584DWrD4jxNmCMDak4THnXhekvwpS5TwMjZ7HpsFf8BxahP71HAXcVvo3crg58ZkqUR8RdrxVHV",
  "key34": "273xJL7HL4pXWyhskbEcr36Tk4HxmitLsj89gYDqxZHpCTFL8ssEhPqcwqXpAKE9Q8tCUPdYT5dEqUhKcjHQ84a5",
  "key35": "3zJDTnfgXszEJojtcbwHceiYctR5ze9Uw7Q6M1CCb9fs8jVzXSxf9QFZkNLK4fcMjopkUQiLjiiSVyvuH8EBtEnW",
  "key36": "4KxkQEmuynW7t62zToXaZt1cznWkzJyA4W3rqGuexX94UftKg1Bxs8fEXFVjJXK5gJ8VcdKEHdev4SXhBWceD6UX",
  "key37": "39pQeB5JhGKg9FsSefXuDTf8Z2343WcCZYo19AH7kx4jHGjCoi5RJ8yqUrdPyS21w23CPCGZN3MbpRw4ZASvsTVC",
  "key38": "5UgsQo41CTBVgHSEvgJ6asPV8YasL1diCZwg6WyKrdQPr2Sb494KGuefDqW2xsiXWVgo7KiPs3AMtvrsxsvgw7uv",
  "key39": "1L965ZVoSsW6hvU3CNMy72yxBCM1T2m7KEcimfQE5WPMDcK5jqCSaKGCxKPYdyCp5Ww9PSDUvP8RerQG1t9VYVH",
  "key40": "K5qHWcFEKSqEWf4ZHa7gq4kd8gtCxfMeXjkrnSYzz8CbvfCGzmgEquUqE3eNpdjZKQHFHyac5bh3b1H6J8EFeTh",
  "key41": "4JDcGQqqacQ3pcWxggEhWV8pSfhVCji8wTJefRfS6REwhu8zd3p8ogfZ47J1ZxsVNFGbV4ACMHbt4p6jmWdUunKf"
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
