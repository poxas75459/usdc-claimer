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
    "2awAPoKvXGrzrr7HADBiGKcpmA8U4B6wZeAijPKJW3zdji3GpyeDywyb5MPBHME9PvELWNCdTQ5LmAsirkESb7St"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqbrcdaD5Srr4cWB9neKp9HhLW7Y7PMAY7MNiuwf5oUT1JwoWhnvq8tJPHL9yE3qb3ucEniySg2sttxmLghdARp",
  "key1": "4hQDxohzfoidB59qmLNJ2WexewNdN4XyVj68mXV1LtFJECuakfCGboKyeUoCwsmAQahokHtMPPbHeejpvNZ2mMur",
  "key2": "424W22Jxm1ngSuniuScQgxKoheJDXSarG2Q4ushkRbCH1rARP3WAqUhiZiSk4BBUacoXUHCr9rNJsQPNi87ETcGi",
  "key3": "be2AUEojbty3wg9ZbEXzdETmib71fwz1LwKCtbS7v78qBPyPZwrhDbheUAeT4Ugtqor8E4k8BNqM6wkJfgSrExb",
  "key4": "3cicY5fF4NPoXy6Rumj12RAxDmZQCsMeaiX9TfYFKPt74u6UXq2oMKdYrGTPX7LWqXisLPu9FaDJJwUqsGF9hwYP",
  "key5": "XsHbByQ1cL1FXA75U4keu6f7ZG7sX1BFeJhpCCvFK5nKFAEfNdcsc7bita5hstU6vkuNgHsyQAxiyN7giiKJ1Av",
  "key6": "4mgxw3TuNvmTaSWwDZp57WpufACEaP6Ch8JxTx6wRCYM57UBiW4Z82aPWxatYqKz1Mb1B8LzsZN7oe7kxjoJYBA6",
  "key7": "5Qh5DwK4urkFguLgsHrH319K96CKgSws5FPnG288CVAcc78XHq1kMduMiAovVzo6qoXeZeSRikNNNYPo1kkSBn1i",
  "key8": "5A9SpAhzVfY7HjyEQfv5HhXirHDe1AD5pzkjgZxXKSsPZVee9XqJCf7zX87ixZX5f9n3RPeB233Nmh1FFDDA5c2z",
  "key9": "4zz5kvyPnpSBRg1jJv8Hm3FqTUZ9qJBacafWs9nF6Xb3nP6RW7KHvZGjDZwT3UX9ECzoSM5ymqj2GMwdpexdLaVz",
  "key10": "5PhqE7YD8x7im93NKKY3o6Nncyr7wTRVvVjCFbWmVCavmqbmyVHsTGnBh9RVMkgeT9SXFtnh82fQobtKdsXNG6PS",
  "key11": "S67oeUN92mnBwJdXCL8X2YEZgGFMExAywwKMpYkE7PBm4BjE7JHP2zXSKp4wqu9eG6RQ1QiKKHgUirk8mHGxpNz",
  "key12": "5TfvUXUzgyHYTt1FRrwKBrStwRrJJhQZsDUqyizkRCf8nwwpGUg4rxdtdx7a65i5DoZzUmSKbM2uc18VoAm2Ey63",
  "key13": "28brLLLDJi7XTbYuuqsYWyM6Zy62x4eVvFdB4vyQdgR3mBDRD6SPpf1sT6oUTK6Jk2AZXuXvWhGBcmukHxUZV365",
  "key14": "5m2mHdoBnWE5JJhHQQhZtxnwWk749jAptqJiBXLyJeuwS7dwgTzjjKq6NzsQJmei7RXEmdSPYM3qza3Y12fvEG7m",
  "key15": "5TC9n7JqPd5hVLNLmoJtVyzgLjsRvgTbwDokgiqj3Rk2U6VNBYtnM31TZfjtzvMhdQJ8WPu1m61EbxCNiCyWks4X",
  "key16": "5GSZD4aMXdjTA9ePnidjSdiCYz243fNM2U5NQpjffYytecYJQN7npq457s6stDeZ9Kr8xiHgiz2CZrBN9S6cvSQn",
  "key17": "66S9Vr3nuSs5bYkztmxLXYaKMeXhzkytfFTbr1Dbg555aKQ3Gt65R8GpE38cL8yEwsh7TSBEgupVrfxqYt6t8C8G",
  "key18": "2U1dFD6bmUwog2uoXB8omhn5oG4sE1duETTKD9Hw5Po8bAqRUpgXTBpv7ApgtqsK3rKzTbdwpr3kKMLi5v8ceg1R",
  "key19": "3oPHceD5z8K3TCwBAGP3ACDApGRZ8j2aKGGA1rTK4BkPC1XqETwZQehsUe2QmvgeJdJUq8GvT9mHWmmR869nzpxc",
  "key20": "q3jfv5ineSZyoki8LzhhqHcwkKgnBuRKnbdJymaYTPkFBoLfGQEJ7Fbf3GJr6H982W9HN4ME5iXtbC9Loy2ourS",
  "key21": "uew3gtuY4WXiuNp8EBQSRm4hxc2rjzSmFXyz4Ho4kRa6ZzDriQ1HVQBg8z8SHZHribVoFBaGJGm9PWSeHs6iwpS",
  "key22": "2hr5p1wNBam5u3zbBDmfJbYBAtd7RcqdvgaiPW7Lwmq9Azqo6Dg2AEKp8rXYVdnuGRRxR3VRKxFqd7vhPCn3KWVG",
  "key23": "3gjMJiaXm2ZNy4VKCrMvpbardWYme76X5guerWSPgj85V5rDtyNsMbYzsWJgHcMAx67trxqd7syUpKZyWdP4PrSH",
  "key24": "65aKAPuw3S8gBLaxxXtpnR69kYpEqry1FBmrMaxv4uACDUovmnVvs3XzMQbSGgADhBMohYRz3oBFQzccBPT1oFjD",
  "key25": "45cQTsF3GCMv1HLDpDcHP9r6Sp5pUmynVFReepJ5zixJy71ALJb5BjeJNd3TcnywQiSAihU1t8WVM9Lnbui4oedA",
  "key26": "4dPYhKK1maRA1cF9ziyFnKfWVcs4buh59rp17tSvpb5t6BF85n4smLdahZLXQd7odAn5FE3gQd9ERmAfTkttuBQ4",
  "key27": "4s74GzTvvReaUKxDSoDvFq626PoBkAJb2PB9fiHsUyaCSfeEhyjSiqvtisnayY86b9uogzUF1gQyPwpSy8cmBfDB",
  "key28": "4AJ5p3AbbMnr5UGfXKXWFcvUmPLMLgPj7Waxnyq7zjJVPPa6ZZJ4orhyrrVxQWU7U5LZ178oh9ff2ncbnBCW2X8a",
  "key29": "2joK1vHiFArmEGxP6nmp9KRPnkfT9duaLWB65SBgRAABVAB54eLm49qTuuHnxU9Q53ihTq7bNyL8i8TNyw6BcpeN",
  "key30": "3jssEJwoMDeeFHSmZrc8RdhnXaG3CSKxfYCKEVnjymFpy3NEJox3H5tjNDRE5Dgi8xB2FbKYeZDtdE8ssYUAxzVm",
  "key31": "3ATV2D9YXSCTRizHQCWVwXGbeoeZq6m8LPYgPU23rQpwHWNToCQoZGtHQ2s6QZrRpz2dtuaRtXWuAtMYxjQx9m1A",
  "key32": "3FU4kuFZiwVhg39mcgwxMdjJCU5GN5i7f46bvUx9GRV9xoNajU8RZH4RgH2NdAJuENKPqNpdiJh9xwzzhr6RVpZS",
  "key33": "EzPtrQoSRx1Dt69wRYURhUjKgRN22F4jDFyAcMwSoy2wzUWYVHzQaTzE3PWQBnDecq1gp5ZLmtehiGMKvP2U7rj",
  "key34": "2XfQRsi6h2WFL19yyWoqLTAMTCPzGiwcKVs6DAD5fbqfNJ9rBXsPbiGvGHFUoKeQgQ8e5GLxRiaBcsRKgB9fZuhQ",
  "key35": "8QzYh79q94EKNBc1Z3Q9WcwBrdA8Be5sB8rArx1TmA3M9wtZGYgk7uRxb4HP65YHpHrhDfMjR3jZm3htmNuwyrA",
  "key36": "3bqJ9NJ94xSuYix4YoR5GhW6a3WFTcyUE1i3cMWzVTP32wdsdDZXF38BioWshydP2LsVkpewhUpnvp1w9NLQYXRU",
  "key37": "5ETfmDeKsFHTcGGLHDSF4ok7PvMVPeVmohP5i6y3c9kRHG6d6ySdC9492DU7yrWe436PKDnKXCBWruk1kE4bkCyM",
  "key38": "54XPv4z3VMnpETnqpiE7URMitjjRaHZwrmedWhU3TUvnjqLDRQfTY4ejj51FJZ4t711GSajeUjNdUC6CRLRWpr2H",
  "key39": "2N7JqQmDzM4NgYz9QJj7ChCSAWYdgiLL2VrApHCb2vakLQJ6YUkRdjL1qZLgARGLnqkCw7S4yiXipaqDMB8zjDT1",
  "key40": "5TYUZfJweK5nnQQ7QUV6nX1s8FJVZNgVDVZHw9cVfCM1TaZbsJfuwKWPk24a3dhPfchaXoYHdkzrwWV53hQKuKKf",
  "key41": "4haycpYLZaPXitrMVrbyvs4YRB85BBXih8zHNSXLVGtgkBDh5soBVgg6xyUkwtiiKh3XcZhn6oVSAX31242CesKe"
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
