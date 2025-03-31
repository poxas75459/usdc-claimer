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
    "GENBaKRfN9yKf3ZZ3Npgv4p78Ndk65hKyX4XsHRHJF5VSwzrKKz2o5oAPcBjXWqcsAEzq2VGD4Dj2yn71hXuwRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bctnPScW6UepVNTcANaiTdbokb1J7sesDYttScu4A3kH16CK4LAMUbn41J87Ur1wCBcek7U9BUZPDqunEhEMjbx",
  "key1": "5MEYiHqtzmLdKu743Zg7rdsKuvBdvbfu4DbSuZRmpaXwtN6ngwZBjMt87JVQBFE6tyhRnxucLGdiRG4gcY1GDHfw",
  "key2": "5tbH9BKNgY8i6jVGW25dSZbtWxiu3xoiyAhbn8Y2pH8P1zA9zmr8sjuVwZgK3MH9eKNk4vQmL3AsFAoJxGEztS51",
  "key3": "3WX6P3Ux4Hz14TcfVQ1iNR9f4h5fptWfDLF1sXLbvap9uwdMuB7oCGiCjsJkUHRamqyt6kegCLWwTPemNu42F7co",
  "key4": "4anpcMhbozCm1nuTPVngY34v6wyDLmx8wdJG4AkXT99iBEzWGi4RaNTSMAUTVervZc5qfGmQQYq5Ge2UafjrtNwf",
  "key5": "axtdf1pD4LaDKmR5hF34JiswRP1a5mFpJtDmTFZLYYahtHk3arJ2iqaZnwzaLhh2GuwrMTe5pUcXUNCfh82fPnp",
  "key6": "4AjxyiW1ApdH9VrYSYqr3LnBmSAmDh3Pvj68nRqxMBSUn4jkZAKf68rjacp5qTMyVWfZFRMmkPLu7WQLQvG4uUqn",
  "key7": "2Li6HoyyzTwarFKu31j9qocs3PYqTkFRhX1YuiRCPhANUrFiUAZbUoPZG273LFZoiJBXQ3Su9LrpqgyfHknbgozw",
  "key8": "3AKVyPmBZ1izHHeHJCo4L4jKuxQYbksaRFbi65Pqic3yqfQjP4oHNJ64DCy1X3v9yPaUwxPjMRhu6YLGpHn2FARt",
  "key9": "2xjaNYgA7ahnD8jGApuhnNBuEyckNpnniPAZnWfXKXmcsyxzYKPTeHzKfurkLFugBZjfULYwtPLBh28jvqev4x4k",
  "key10": "2T8rHtTEZTvuKZ8tVe7WbKq65dtnanDiTdvDfPiuT67AyZUAzw5XiKoP4p5x88YzBuLpUMijdsj5GP6iKtb88MU7",
  "key11": "2FMkvkwDqe2pjypH3CgGAberkxhSxmbHHKbSSKHfW367KnqEpaMy5PoyFX3GiLNvkUCnnncVQ1gz6n3yL3YHXaSi",
  "key12": "4KioMisMn9Z5ZDg95GwoHe9xncunVgQ1RAFBRJ3xGQFFYsZbe6zKrSBDDkDA7GTjqd7L89i6zQ1KjxYobfkPfn2r",
  "key13": "4Gzj7RkBy3cQrDKERJAadMGgbhiPATubPjxmj9h81PjVf4BvXoDWfTtYFbTdKmUHfo9JhggJbSyUusFmc8VVC6sN",
  "key14": "33aMunn2trbnWo6ayXv6FktwKDs4fWaFnHSYgPq8exEd7SiFC8PLnXVq8Ajx36FaVK9TCVgZR5aQ2LzKKyA7owEE",
  "key15": "4cKJ5ts8XfvkY4WojMXocLqMya5SbW54Zv3XGGvm7NTJCtWX7ynekUdUW7E55hGLxLAFtVJmfUP9s67NKKsZhEdh",
  "key16": "2nNSckJTv779Zddda8AvwyvRwCdmitgYSEb7NwcqdmfCosbsZ14oxbVDTwgqvkMcXmcxHQeKRkQiVDxumFXEYi4u",
  "key17": "4FBZRREUoTDSf9HW5NtHywaDqmVgRBcQD1v8DboLqSPt8TSUn7oXsE1bUzuABeWi797GoXzoLoxWXgtHppzhS6oJ",
  "key18": "5MW2RVPC2T85mH3PTxCfBTTcHqm8xhwUDK5V9QUuKNbbqsAqHmz6Ygnf2ap72jqamfuPZP9gnTWM5oZ1dfDjXeHC",
  "key19": "xXMPuWg2K5NW3ncYmACQMr2CR3FaxwKgxsGTteH98AqS1vSfTmGnDU9RrAu2xP9BNBwX6SCqbSHEtjHf8S7dqi9",
  "key20": "5Lz1GbvtLpHuebQMtcrvfRZwNDHCdV2AbsGTeKyZvuBoBGtdkLmuT8tRbFqS3rDtszaSYMC2dM8JVG7kVggeb2wP",
  "key21": "2Cxchm4VjxnLjU19grx2MoEDjMyLR4WceyMz9jrJtcKzdJjUYU6PDRFmeTNxv1H224Rurrpgqfq9f7TAo7osgdYb",
  "key22": "4rQkfSG93tzWU2eQK8QbJoNEu8QcVH9zePjrjpQJ9dtwWaLfuf8wSSYc8EBi3mU1uNKcvR9JhvktzRWmRy6ZrMpy",
  "key23": "4VHNa8KHvPnry6enRTai87yT4AX8jfUZnj98QeDqTo8WQvLn12WRPne8UR5XEKYyRsTyYmUmENkRkG9jBzGtsEii",
  "key24": "5jkuvBPzD2ms4icPQweRat5dmamauJiMxUAiREJUAhyGYiaSn9Qod9dURBH3eBiWevi8a6p4n8xXgB9WuNjnL3MS",
  "key25": "tMhsMg5YrtUFUdWV1esnuM38rJakNUBwq3LJsm8WLCm1eB5CinVZK6bSb8GLzT3kmUqRY7Tv35wsWBDpbSB93sV",
  "key26": "4J1xVyrMorGJB7vzh4LkAYyMSg4SskFyti4LsaEez2VBVos4UBKSe9i2YdWbsLahuA3nopnPM4A4cmXZ4ndBQDCy",
  "key27": "2zrMpEvBZFNxfgTT15r1huBzUgCf8x7QXnt6dTCvw95u9ScXspNLhwKnorPaH8hQXaudnjERYiZbfe5yk3zy6LNA",
  "key28": "2d4aYNFGSaLdJjPKuVm58fTQfyebCqMnW4JxQrNJdbo6XNrUrzKASE17156QPR845TmUb5w3eQGYp4EgqCtZtMgV",
  "key29": "51HxXXwGCwJ5tNmdhNgT6UJvVBLyPdHF1euU6DoTdESfr3sFDkSNP3tDUop6qXUAbE7cRF4VPHWfSoyhyTssCoG2",
  "key30": "7PWijQEBUf6AYkAo64JVvixdYqSexum8EtzSNiifikMojKKkwHkALu3njaVbK7g8Y5LDe2TUb1goCU6Dd8TDdTp",
  "key31": "3MC9gpEHH3Y3AsX3Bi3gp5GoDPE3pRApYK4qzocjHoU8whtLgMxzBL99w936Mc7KMeKqUNRMNnhxJ7dii3fvZrsi",
  "key32": "5wFPkVBRszJrMR8AbTiZZP1CifAGaS8t6FbVNAiYy7mQKvDp9EvroR94DV6iLgkyPyfB3a54whr2xn1D1EhJBmgB",
  "key33": "5W6DRhicEk14xJAY8GQBVDN6meSTEu4du4ujXRAynyeKiHBBfTxw5wRbLbffffydQ12AGSeUT3B4aevms5c3Mpnk",
  "key34": "3A22uSH4xDKiZeudTtLcMywtqu2MFKAGcq2CX1m6Y92vy8bpisHpj4Hmd7kqL4Cu2EJGsdR4BSgP5AcXcYTKvmVE",
  "key35": "23ogpu5rMrzPeoUgQiALkWNw23caU3fgjncWCy4r27Qq8cdxLCUtMFN3nG79MzXCmmJXNRDDwbuWyuV6urvNDyhq",
  "key36": "3xxWbSKrcvExcP28ZoAJZWK7dkpfvVuVd3hwpPN5dEkqBeVFfujRqcnf3hZi9AabQ4awY4eXoRJ4My3yjyaXnpvp",
  "key37": "5SQ57yG5EwCtk4Qtr35esc5o2kdUxQgzgpBFbVwg9zaSkABY3kcu9NLqUdLxT5JkUHpx8CKkhT1A4vbfFrCfgqf7",
  "key38": "3Y82nijhjNmmjWvbn5YQ2cYsD5UtMoh3vxSjD6yYNEHevreWczgeaWXthGRqsSUHfAEEgN1ZjD36VEqhWTeew5w8",
  "key39": "2cWsgyYkJ99vNj99Vh28EtXYXnJtD6Sh23prA1KYY5ifMwFZgz4LwVmfa23vT2ZSrZqB5qhQ96cYMakyTQbJDfkK",
  "key40": "4R4EQUPR9DLqLp4Ens98ztm1tqLZZDdVDQVa8riuUDVSp9reMVbQGdoMFUvU28GkTBdsrNis779PSLhbcix1LAsz",
  "key41": "5D53GwzJJ4rzFN3yeh9GUjT2niMuWRz72X89KKJ2LwKZ3xgYKY48JjsCeb5XA2iKDtHpBEhFRBArvg2jWUjdiLKr"
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
