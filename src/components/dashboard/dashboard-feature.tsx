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
    "2PDFCiRLoHgZHq4WPa7HLBNaLfN1BdH1C8E1NuGbZNnTWixfKnNrA1gDqAJq4cXCPi642AD1LDwavZx89orGZL2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xn7FkEsXaTtB688dswgRb9V5Pp5z36ajhSCBmu1SQkUVARTT68HbhaF1BU4whQytMkXL7fVJr3N8GeHjj9Q34TS",
  "key1": "hsSBCBtbjEV5iRyYdunc7jMSY43YrYj63AWKw7ZsRRAByQSANYFE2DEBekhmYDs75MiamyuvFXmHVodi8XVvUH1",
  "key2": "5VKUYs6uSq4h4EqzTYwDX8YwSxdkY1BrXnQsDkVmhAu3XydKhNZRk9PRvLpp5zzKnhyUZXavL8anHp9gW2mRtBgC",
  "key3": "aCb91rUp9kYeybAT1yHpcAFUSsNFKGGQkhnE1ihrXpatAZ5k2o2GMoaDKfDSAQTYZV7DaSLP4hev3VDX293Bhnh",
  "key4": "V7tWV3BoHCNq8Xfm8E6Lq4r8iPdXxRjPt2L8T4kV94W1xrij2wK4xfkEL7QAQq7c9UJzBnhg9LPZcLgmTdB1zdN",
  "key5": "4qPDSNCdrPESSgWCPkPHuN9P8D4B9CMdGixbP8r4gAV2KNx5i82LWnZqvSLHzqp3GPki2qFbZkRRKArFUuhj1f8W",
  "key6": "rXuRohXig4yoxXARVyog723jEnFbB6PU3CvabhrseHhn6ts2vs9sZ2rBfu6nUvmKh7aVwSWknQgrJQ6N5pUUreA",
  "key7": "5Zv4diqijRPLySavuXDad9wNCeHEes5DVDHFezZGr1qJRXoynwQQRgmMt58RLCpdRysnmMSXj4GtetUSJxeuLEF3",
  "key8": "4kRC5yKJZQL35CqbPKWsYiKQNA5qGWmP8PEXdafJLRLphxRhNwHaHKFMydchUoT6GP9Vw6LmeeAv3AeUe2mRRyq1",
  "key9": "xzDoj17vArV6Sx96eV7DHExQ12E16E9reUBYC9jfGTALdk5PHvfCZkywHkNL8UGiMJQoXtesG5jsHEZDB42ssUi",
  "key10": "5RKpfkZR6D7YXqpeck9762pf2VF8fcMvSFCiNi2cNUx7LinXFW7EwqbFZGuFftSJyVAu1X8hq4UUGu9MiwDMRZ3G",
  "key11": "3oHTQThNVDCcakkxmHo1BbPotE5M1AiU1r5d8gxuN3TVNabPLocLju9XMBqKuq34CoJkLL4MAiidhQqa5MX7BKLg",
  "key12": "466rVyx1LpUaAruFZZaUaesquJqx6mWRNdF6qMxaxBMzhfe8TC89ydq8jcjgTaq5mWVXmWaqfs9mut5qp3AEfKWW",
  "key13": "neHV47tjU8debxtnUab2eoPyfFNWHUCViSUyp8BaCxWsZcja6xanobjDAY7kNzJNst5W2fgKuHgLAAyhTZU6Evm",
  "key14": "pYNTQcBYNtcwQFWgLnLDxuBeSsnfGfKh26u7ykcbsCZdga3rsncWC3VXSYSpzeTFyEBQuC9qzog6k9dc2uZ4Gzq",
  "key15": "4jsDrF8SAbK9zKzjLvfB5DSrrsmgihN4FJsopi97DjdUJx3mhTXBtfwjyV1xp3ZnZ2Yw2CvXmXXMk4seTxJZNQfi",
  "key16": "4DXFZRh4VYssXLTJ3c5ZXTRaruBjiBdTc1cQUzPWBLHEtDmmwJVapjWKDtTZEDny4aFpfso5ekmiPsLwbkmdqZCc",
  "key17": "4XXdk9YAFpwKHx8BnE3ey9iDiKKWZdG6Kj7E8GtPXe9u2HqPSQ1jegcRaSd5VzHJDdirnHrxdkXZhUcSfCnPMLTu",
  "key18": "xpQFHSPEyT1cTWQvUwNHiJaUkf8Vp8AM7M24tRRX79CxZgjGPWLDPitnpLerkotzMZuvYscCS5GixvxmUohhb68",
  "key19": "5apqkHfMMQJf6ro3kDvaRQrPKKFA35gzMbH1kMqTS7eoXtb6yB9zZSVHKjaWJmmq2TAtPDNMwHB1bXBd3C9efPJ9",
  "key20": "4CcMhs1GDR6btiBaF3gQCzKfLuqteTMDjUdQUo3wyRBbWEBt3YLZk7RsM1uNcxVSbrv9EVwNqJLKsSrqExNkCfUw",
  "key21": "3hmV221VPXbH5KWqyvo4jwVYWBWpAKTnPrXS9Cm3VBHY8iD6bsX6xSv5XMwhCnwapb3A9SuZZZD8Ja7UccUjhEFb",
  "key22": "4duHhDrUiFqPXnMFLsJPo2bkJ32Ehd1Mw5KJUdSUEcSERvFyswj7guT6XBXDM7CmvRVBwDqFp6Z8MRNMMwxbW7aT",
  "key23": "oi59cTnYNW53TeeYGjdWbtd1FKmxmDdqjt8eSP3rjuSj3BmptPNKtbGqFz8QRAnRSCih4pm4wSDiM6kouqVHaw9",
  "key24": "5nFm2ssCmMMss7gHLpXSWi6RB8hqFJWMcShH82KAYW8LYzZ3wropA3ZYvcMS6RsPojvfeMjUFVsmvDn9V1ib5grd",
  "key25": "2fvoTAZ83beti64Vb3rNTuzmWqSogBkmhUGkfQqhrTpMhrjuxVJEKVTLGqhenNC1VrSeV5URbLNcPjSALfe9kkkr",
  "key26": "3efkmz63oAeTtCf3sJYm3RJfmtzE576tmqH9Dvu8hvNBQeYsP5Kfgqq9nMXBknuJ9FqLGqbuL4wNAaiRvxcFqaeJ",
  "key27": "2knYFwEMXLyekde6tyA5fFi3hqnQeyRvmoXDw7y7Hp9hCueSVmZkV97uisNHYD5PtWhCsUWn3JF1QihbCnK9i7GZ",
  "key28": "3R6pyjVsufCZnY49yqYohnftTuQPzSGLeQamXGXrfPzjJQ9hmkHrCPsxbM81PBJjWu2YpTLSVttSnbMNocrmF6oo",
  "key29": "3hCTktfv76u4JU7qkCbAJdZKSjKiUqdnKvLwZ5dXSPiH1paGMGs25a1ALiJvcSAidt74X5c1JXvmczW32KGQinbD",
  "key30": "5JbJLcocuGUmNxNSET4MFhryX8RSgd5rVZLgcionAW5W2acow4mjWccnERgTgby2UKbWbU2jNp2Uwk9RsZkCoNH3",
  "key31": "3aBjra1hmeGuQTPBzBA9RmxUQsaX58echFVKyL5d4tRYVpZX6VVivZTqdtQdJXKY77xQLbqmZBRfSTpv3ce8aqPk",
  "key32": "iH6AwPzKyakrQ94pb4pJS5pogdZphn9GEjXYsP97cuhtkMhUCBCJZsMm77txXUs1GNri68Jo2891dvpQgy3bUgx",
  "key33": "LEqF5Sb9BhpLTjtvzFR3AkJa4MhpbYX6y9hAJRVEK6S4RnZqQeD3o7qPeYdoDEBFwLNb4mkSKbaPNAfrZtesPKp",
  "key34": "4Ntird7fiXgPvHFC2ZRq6SiEWa8XFtSQZcFY77rcPr1dEU7Dpfh4ookhTC6tx7SZYGXvBv2jgiY21NDF5QJaxq1F",
  "key35": "3XcpugrQXNu7TYRt11FVMdCxsUtJZqJFrtQ4tmoLcZ58faNLTKUEj1UEfXZXoevmmGjfqLxe9JxLgKTC19ba8jz7",
  "key36": "426ELny8HCFTBWHgjcFpKv58nQCFJNb5Wum4NL9voCBphuUpuph1hAdmrv2uNpKHw11UU3eTyF2b444WZrnXkdS7",
  "key37": "2w8yRem51nQm4u89CE1NFZ3hhnjCPRb7gQBCYmQ9s7XTMXFeQJEUvDKgRMqAjSUUwPDcpaH7L3VDdZjfetR46xjT",
  "key38": "33U2ssHhJ4qvFDsa7h5JxWEwB1WdPx8gbCKBVb5wq1rnSKY5NymUwrXPsch5aCFt1A9m1LG4tTkgk4VxVsEdf7DQ",
  "key39": "2K3PNExpVx9Gc3GV3eFf33q13xYy4gKnAXpuPBiqfWhZSDSt9K2pW32PnggJ8RNCPLt9J6B79k73NiTQYWSvjFZR",
  "key40": "3awUrTBGgHQcqLkoR4jbRzqrfcAaaC43r7nyktDW2jY45i9QinSRMRjBSRbyaYUAYecBQWPe23ofmduDf1BK4vaD",
  "key41": "yB94vpqM3ynJEjk7m1TciNB4dMRE3hYMGeqGyuK3nCaXrEUA1qnzzEbhkQXZR5Q74RuXYjJAAzVbJ3qKadFJnaK",
  "key42": "J7N3sQ5HjKZe7G4qcvq816rGjhEhaGXx6J3VvpKXzjvpg3X8HDXi5RCUKGkNyyPSboKcNdRNpbR75cUnxjCTozS",
  "key43": "4Rs2wUMZa98fmumnnqtyZMnadQiZ63cVX9W4XB55RxzVVCLM9h4GXiEk1pk7tKBJweedFuM9mvX9pE7QV2VHmkma",
  "key44": "xFFUskz5xP91kgK5AEzkBoSADTbVPncjLTzddoeEijHHVwKGFwhNN8YZaewhkPxtt6oWBGzvRymuASJjpeiAViH",
  "key45": "25tudmkpupNqrNjZuF8ELQ5QdgLCSP8q2D6N5gFk5utVTqVDxEiviqKBV2d8jqqsTA577MVn8bySAgsU5vuV6Cv7",
  "key46": "4oCa1KznZ2zQQgJApkFmf4CB9yQqNUEkwEzwHxyCXmbHkYD4RJaM99ADv7ssL4N6Tw4xxttmVmCrPF9rN4PpWdjm",
  "key47": "57gXPTnETXLoHfpLEFyQrvzEyfafgqkrpchEwJawexTtQ9wbaRdW3XtobBHHCg8F2Mo1Nuh43q4eZb9oKMLSdeh1",
  "key48": "5MBwHZCHeZjmww3TL3z6Kenfn1DDvZgX3jCMxfsvzU4REU8H1Hv7zpWqUotiqgv2Hibw2bzuhdA7RQ3hiAZTkCHH",
  "key49": "5gdVx4AB7qhYxzQHeV9GUE6sLDU1Y6BD55UmkcUTkMGsRUHaERHmA2jvhMGVyDLKgy6ZTFr1fNGDRqQfZEbiXN15"
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
