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
    "ctxCtg9mGfANyNWhR1RTFZEW8XTaPXfPve5123R78ZugvUngo2G9BzeXPDdgrjUDGb3sDLT4eiA7gPSnogmr5aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhT3iytH8cbo8F3ZmAqqfzgK4pP6zZFpDrcK4asaw3RPXdGnDgsKwEWieJZseAeVoa7hrA3xdF43rsoEngCwpdL",
  "key1": "5tcD4XBmiivPLqQ8WoAUQprujoUgPmeT6aiR45hsYniSpv2nj74HqxPHj3BZ3zjr83NrPV38hoL5wFFBaU9u9cuc",
  "key2": "2x7bQ5UdzWTbAoGTWWSRhZUH4pQGdREeYnXMC3Ghs5JnBd1WZw9uztaw1x5EPVw9JQpR5iXVy7bFodkG7y8FgpyE",
  "key3": "4Zt7v46SQwpVbehZiZCkBM3tYh1QmziPdLbnKDnsGYgBDzFrDisZGGdjkXMK7kpQcKqhqRGrHBhsRJ2RyqKLZNUs",
  "key4": "5eYFBKM7rXjycHhqEdj4sJspXUex4S3ZiHNoW8JkgRcUrsHD6TEj1ra8tXA8YLEQJMoSJZQPuAJYHKTEM6PwsWMY",
  "key5": "27ebjr8kpznxtNnfwh5w5dpw9rtvBejTnpdZYLcv7jWciJeRLeB7t8QKurthGwwcpYj5NzuFBpSUGUogmAzVcJPy",
  "key6": "FmTV41BSWsqMeZh6nRYKWBTSbonbX7ijtEmkw8MyvQP78KBDgxnodT32TQgw6BZtDrwt19cGLmiedjNKvJ5G5Uh",
  "key7": "4tzWT5rf5HhcP9eGgbnSAb44JHgX7MNGosn2P3yum2vmHZhkbesM7WgDXFTVjzTKshebLok4Y3HdbsfqTMjppPfg",
  "key8": "5nHAsXWgjzVNMptVJ5eZGL5caiSVbv6cGUPWzQQWEbD73hiyfsnr6BrgoGfjdWmGGei3nR3jvaKKNi8ZSVWPR1aL",
  "key9": "Mpbz4uCkdbQFYBTD44Qb8WV9Q7QYkrceNy7unvwr3iTL9LL9DyvyNtnrUz7Bf8gca1jEdZQpQ8JUv1f3FeWLC7Y",
  "key10": "5UWfVri2yE6AqyUP5zqQbaXjNvrdcdc13FeR9LJM8TFov6NdMH6dFgXNqW6cW6b3H2VMyUnyYPKo2m4Hk7duAvCR",
  "key11": "53EFhWmYVUfiTzFSQPBktoZqqDakBwr5G6TcofPEYhcW1M3oMREEXEFp5yS17opM3S6k3DnBXXKLiexQAysprgYV",
  "key12": "39SYaGeFBHwcNFVTtNg3RjqtdswZ5UhT5Tua3FzLs1Vykhw1NBuQ3ZaJ8sHKjboCj9ggvBHNeLpp9AzAmqxVSXQB",
  "key13": "2h8rrV4AxtF7vVpLU8hHNjiX4hEQy9WyoqqCb31YC1498S9zChJ8rzcLYQ5PsLSuFTmBxSDUQxu4MqFTqMkgaJzU",
  "key14": "21Vvqtz1EJ4JAxtzMewCTzjeTtinsTs58eCKAYvmaR5yPu2vdsQMLgJ3v4NbqkSHQBAdtzPWEnq2p9KGBeHjkgWY",
  "key15": "jD3TWNPDREFRPSdvymRbE6KmgntVZNtHHuwYiBKtPj6ZMH1Ac2tkksWvene3PLjhrduBWRaJ4Gei8NrSPN6YEMk",
  "key16": "3rZuw6oyuUEucdJTFUUGW7A4FVYsKQCSdbFKx7JptDcWcfVujF3r11D9RBj54qt6poRL3TZ48hKgxfpX2PHn4B5H",
  "key17": "peCmgqfCpFMsJbxX9hAFz4kKJA88bduYbvRBHYSWVKrCyzxWEjSLQsfxdNPE2zqbJKVraYVNCXgRhMimBYiaAHg",
  "key18": "WLhwVauLym9M1EzciK4k8ewyutzs6kPAHD7bm48ThrQWzbUK5ECRCnnBEPCGK5YJ8bQVN42PMZMGdq7qR9PsJWD",
  "key19": "4yuyJk2xQpawgR2pEYrB8B9SdkYVo4HQ1DnkqixwzWTnRqy1M1rqkDh7yYNEDv2UrV4VfapPFyR3at918P8am7PM",
  "key20": "2LDSiaLJh9Nm7vSY4GoKfdtDEpuMNg5be83xiubncJp8dWZJ6d38NL9yvnPtT5wsoMhH3ZMsvZAM9QTeCPtUf4HC",
  "key21": "A42HnpDrZfPUBN53joMCjza8p9HtubrM8CXSM3KzY6LNkAzxqH12vPhrdEmovxuxepbTwJJH4T3fBe1EbjVpTZ5",
  "key22": "25GrYoDcN2UMp6VTVg1YeW9TvtERwBYi3bRaqT44BJPeeN7UnU3uuYocgzTNYHVj5paLKRS2zUHyZSJ5BBntfnU1",
  "key23": "5fad6GnTDvu1PHXa9qB7edEp7t4AzeAKsytKXnrGQsr5scr7x4h28c5uazFW9rMHx8E744gt4kbuaXV821qehAm9",
  "key24": "5xL61WuxxJWudrsd8bwsJQAKUP33kmqyLhzZKEQVrpmt6icUm9AnP7hGGWobwUrfTccFmKofaYdepfNH7z8u8r4G",
  "key25": "2B5Hycp141tZx7NKZJ6NgNA3UtfvVK1ab9wUxdso5vvDD5YPw3e7qPHEi8cHrXg2m4bPu64Y5Zo577EaTkwtPzGr",
  "key26": "2RWr6dtTdd2u6AG3fHnNZyYMnvGeo2GeftPa8rGJQcfhtUwdvPAmMLbvTRysLNbc9eJBi788pjrCCLcHQRvk34nj",
  "key27": "2VTDRv34HaZPo7xJjZunPtvjxy91t6AECU78rbr1gKXZu4Eg36ZFp7UfXDHMSkBDatdXj5k9wMiknfzGDCf9CzAe",
  "key28": "2kTLAqwAhFFtneBDrVA887UjeUFpXQNADtvz84WfXRNmGGABhbsPbVQcTyZXJEvXFCmDwLcTZX4RuL48VHk8tLj5",
  "key29": "3Q1FN1hfp4aXDWt6We4dCVow54JBumMtjvRJpw7YtNs8dhhRD9XkJBNuTAetSTaDP9MNwbiietZJ54DzWo4gr3v4",
  "key30": "2qhoZrf1C1pPGWZaxzCMNQg16JddMnfkEfQbgYTrkJuT1XJkY1c1YLiRxc9h4QGLfcAEWBfopdwxBi59BmSEULdM",
  "key31": "4xjihYNbx7zcPpv2LhQ6WKHNFpuReBe5AKRkVgwdfzaMJMw99LjfBFwzakYteuMLJeVz492KDmPh55fqAXBZ67j8",
  "key32": "2nBexEaucWiXrSvSij1EinrY1UT9bVVakNjn524xY4tt5YMuTWcjiotseZDWvxxXrFxiugF9SqCxX6pcrLHDKnnS",
  "key33": "2aKf84krnLuji5LQnD5k7BdkDYScvEhhh5bFtDPxWf2tfoLk6vRnwts89h4EUwB5AcGvVBNxuHSGezHw1GZcmaUa",
  "key34": "A5QgYUBYvdcDsd75R2DhRWeHGdn8ZJjmj12nuVgEwE3HyjkzKUeMb5vYFNpnSkQyiLkph9vQjjXhvX7UWKT5j6b",
  "key35": "5B36UiVEuquQUTyPfGpNZtFXxgCrqLeBkbYNbuGfPpoVWxS2UCqKipP9bNi2RKE99aUCV122znXinKe89XWFaVQd",
  "key36": "4iCExqbNwPkCvfzFquebBki5bGAkA5YubXBodSTpfrUFDmyCw6SU5aHAWy8Kr6aBpZiPL333MYo6XP5kabTdZhZD",
  "key37": "WQfRDqPPUoK5Koq7biCMLLKsAwCNWLKFzzr4haSu9cogBz2LT9DVPens9mKSj4Wy9Yg3UDEkHcTRpwCF8JWCvKE",
  "key38": "5afHq4LroFsVadLn58SDMxYLkWpWf2nWicjcpQCYNWTfG3kMe9rtqGmmDMmZs1mzf3meY52hbPCgmG1C1T8Vxskf",
  "key39": "39KTzyaiuQvwn1bP2vpQfy5qxXPMM7P8U9X5GE3SH16K1CcARnFnJNa3b4RwBMcTuezZt6SDu9ZMq2YaeV3qM5nq",
  "key40": "dFxxJzu6mhr4QQedFodMguNN3Kj6qr3FYjySjUb162TSfKMTuB6ekH4aUgQpEQ7237rmXowNhQaQcBQCiofDYyz",
  "key41": "44bdq5rthezVHQCyG4Y7ecowJMyiQZD5qcZYccECwr4i1ArmEqGyZHrKGUwdfsRFu79QYMTswPxCsAfEJZ8eqRhA",
  "key42": "ZXCxh4JfzSzf83a1za55qTcGCmJ9HdEEg65XtbjKeUuvxXVQucg1PsPC2JdNfNGPK4X2NWSdgxgDssF7ocCoUjj",
  "key43": "yjmsK2DARFaK9jM5wwvsbYTYvtcjUBjgk9bmg5eXN7Nh8TZssjvuEAnmez9i7Wg9c37KdDRj4PcjeEWy9LVpRme",
  "key44": "2LnE9VsjrhsfALKNvSYKCrznmgGFk6rMPg8VggjQ69XNFmefnuHDFjvpDWDkreki4PgMi4ZgZaFMJsCatrKDKbV2",
  "key45": "3jsYf1Y9zD54U4B5uuL4BFZnpWVCBembJ6cnFE72vE1kbK8HRTmbg3Q61xbbaezRhM8p9vS8n1B4u2qyQbBvjSDX",
  "key46": "VxLQUnf9DHN75xXQ6numzAuZUqGBpK4GDksSrRPhgiNoxiLAQ7tHZnBgW4nEBzHMaxv3tGogcK6ZhrYzEd97grt"
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
