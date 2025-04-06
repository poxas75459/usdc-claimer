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
    "yVL9UtssSmJNDie3HX8dYEnoLP87GZ5Ar5noxNJHiyqCwfcaHog4qmeY8DeuuAhUuHUcj5517BynN7KvZzb1R7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N66tYBW1tBkthcRcYCDXg6QqDk3ZZyqMQobxGz4EDNqvziYRAACS9o6poyJSgDM53Ayd2frSoaSyEaoU9U8wT2K",
  "key1": "63jYuAcEc4the8hy2UaWFNwi2cJDWJMmS5ZGdpnn78yCbu2rsom7t33tgLsaP6G1stDhRqLnd99Z53CFSW5i71vy",
  "key2": "4Y4ZyxF4NaT9y3yinmGsT4wPCc7475vmU7LmtvYNmZw9acERUkYYZtVx7QRtohyqGhHafmwvL6L2zqiCi9b3uoWc",
  "key3": "279gfnULX3Np6jAuC9a8ZsEf2WJotHuzEf6scSZZZ42TdnrhftwgPXTxDVKMyg9reLZ1S4LrMZ1qLBZq2RRbEmYL",
  "key4": "ZB5ZVmdU3b6nPLmKTQ6U4RbTvXt7WQGGzNKQTgmPjJmCwdDK8suPKXitN4hjjYK21ku6PbBArswH3Rc48KZLDF8",
  "key5": "4pUL5ikv3niL8FZn7hZqarWdhJmFUKomosgNKPByP75Tzp6igxqq7AsFx15cVBiSgJ4LwBmiXUiRqbTDTWZsgMG9",
  "key6": "3LXH7enUvwMyXhKndK8SsrV4pFbsuoxgVeXfntEorw9oPvYsxdhJAzYnk61JvwUHyhVewR6NeEMsfrswKF9hqnCp",
  "key7": "56JvwAoxYRSungjSeKGCt79DCdQSPa5GXSZY3DnBHUokuFE9eDHG4xeeaHAxtc7bKFvTtkUzeJLVNf9dGGQcMJzN",
  "key8": "67KiB3WRPuYFk7WwRu6ZwD1oZwgEo71pMx6hBxNuFjypCsVQBWP48FtfX3MHuEB9b7EtWfJCjL7f9rxvoUaAhcts",
  "key9": "25JuUiYg7jh9zdSfnxvTkC1i2tNELCkczX8Z8p7k2rgH53iFi2PjZVpRwWz94Uh9ndn3fthWDGJZsnc3w4E4RaNU",
  "key10": "quezB1zyAdeFeZzHTuQh9jyjaLHMRjCjZ6G2xR3Ywmq9hNTs8RHVmBiiQtpmScGkXCrLF2eGYJHsQZL4uvLj1B3",
  "key11": "9fT9REdaj9zFMH8vg56wHnNmf8z1BPhbpamnXAsP44soEkew66v2jeTfDVxAAh65SGvtQRrbCg6pPgixp6gR8r1",
  "key12": "2bSMTPfkR7jVv4XEUq9c4i1qy7KC69Y6ooVQ2bXyHcDXFnnLqyhSky6CNenB4skz5dJwNJtTjqwAvyWT2E3y3NrQ",
  "key13": "5EQhi3oDb3xqncPbGy1HmqxboMve6N1nWpzdgmqtHKPG4mHsL9syR3ms9Rs4NS69GLnwNhkyKRayuEmedQNdAi5r",
  "key14": "47vvPzPRahajm91WGGKVeCEhR5dPox34AAvKAUuoRfBMX43Bs3bqq83nSkSR5ftTfosBpoq5eWqcUTU9sF2hyw84",
  "key15": "2LfAW1nnnLsCDLttWC3QaKxm7T97unshRqJ5Yn6tcoFs1QDpypUfzsSjk3tFznhTg6TJ7s79KzmneQZyQVRvBYmD",
  "key16": "5SkVRECf2FuxjSxM3YG48gnvL3ML3QyXxZgEiPbYwQdSXasxrf7aMXiKeYmgND7pzr8iyENKSQbS7KEzGeQXtqYK",
  "key17": "2yyh4Rp1kuGg61a6nzgUppy1vE1npiMo2WuN96aQzGYS2eG2vLkdXWuGRLD4JhCC1mfSvGRjgLEdb5N6GwBxpxiR",
  "key18": "57qnWS3SmG8bdTKcqmnEVPYDdd6xHT1cE1aY1dP77rDkVm8i1QvkLfycaQxgTBmM13fUHLn27h3qFk7ENvTbsGkJ",
  "key19": "3Ct2pB9tRXRphXAneYR4cUXhRwGQkSwziot7CRWihpRJzu7KfP2qSnEitu2hcwRFnfchnmz6tbENb3CF8RnezRDm",
  "key20": "5VarnWE3etxb1A49ZHyDEFKUWradAopCw1owyEyPUWto4UWRqbjEKsaqhxxdvnNuoj1P5LtWkpCugfx9dkkekcqL",
  "key21": "3uiXhzVcBXQ7kQ9P4sXDACUkbkoBeoKcB4d7ibFuUQnMkrQWEhMAagQJusGYzEYqZK1vdWWCETR9vYPUCNUnE9wt",
  "key22": "fGwfXCBFGmRbdZtvY7ti5f74gTtpznNfQYyd8Bt3zg2CoqAasWXbNbKTSB1qP7TA1QT1Pxsgqf2qHtK6AV6Aaz5",
  "key23": "4vVDBXe1DjeRGDeAiQ2AYQ1sjJvHVyjDah8gYywwnxPeJiPVfBgLPaR4QgXhDMDEn7wLrrXPbMmJFm6E77wsmJMx",
  "key24": "ziCW5cgQtFSzyQJqzvETLFKTuKFPkHegEDrSmC9tunTd9FmhAXjb1155JjJ4jPQD4xzeJpZyNFnV21YcncFQx9g",
  "key25": "637MjaR5Myi3f5SGp41DR63QGQhZHjTBoWjohuR2CLAHCyHUSJ1Vw8ancpk5d8vagQ6k5GXzqai7J6kaHNZpEkGY",
  "key26": "ZoutAAjbwAecq3eJkBALdz79psqnADkUEdHk5WghFDUKFNBR3H7jGcmrzWiqmEvTU6uFXuCv1fgeLnE5nghmoCd",
  "key27": "3e1ByZBPiVWyc7D7teERd9jNDhsZUCULshKfiX8Eim2XFF6tBNXkgMrGp1qmH41nRwhnwg5xj5XroH1DwVeMv5Hw",
  "key28": "5V3BUi45EcdCk98ChCi68LQvKLuiSFr7xea6ZE2rb5L7a4B5rDVYfzH2h2M35sioDgXzXZxrr8aXGiBq2VZU7QSM",
  "key29": "3xUd3YW43H2uKEZwWkyVFr1fthCZDdYqfnHNJkzZL3EkQEM8UmXp6MPKgS28zjnsrGnEYWF9PubGvbs638V7R3qt",
  "key30": "25ynprKgQY2FdrUw4i2mB42V7NTutagFR3EWJX14bCy74oyCM6yw6d3NKyZhkP937otEvJvVJVKDuUFH13pjLPXm",
  "key31": "3iPu4uZ1VNtTbQENcyMXLMRpx26TfBeHw6jxikTZhoyHCT8XiWNpapphVAnek1Y5PpfUXjd3A1c9CZUGN2Wfs98P",
  "key32": "3jqMqCwTwPERZh1iYoG3xkgyLnRwKG79iyK57CLR2KiCFqtvH6mmQePs6MtZmPpzDNLUgFJzpHP3hnXBzgHmi9H9",
  "key33": "3yVY637gHaUDJGaAPU1VNNwkrgxpE446MY5Zn7BCVXYD41TFPyGKLvPngZtb2UqtSziz23fSKTTkUkxseEm6sCae",
  "key34": "4wmyUWFoBJh4gSYs9rCCeGLr6PHV6YXQvpyjMa6uCXzMAiaWfe7gwpExLTM96CAomwAShcPjNG6SVyGenc426yJk",
  "key35": "34PtZB53jr8kfkAdhvwVKNRYD9VTW1pZQ71Zj9DuUmxtEZY8k4ZUPSdeUDdwVyJ75fdxWdNegrEHdmFenXPVAaqZ",
  "key36": "3HiviDcZJWJskHyv3a7da4yr6y3CjhSLReDWeKu9Y56QzzRySTaesRFp6eSutmR9zpjUh8apUijYLddijEG19SbK",
  "key37": "36GF7EGpuw7j2y7JL4JBHYpuZjazp7jtLvRSmP3V91VBSxVFF5LB6AKawwSXto4ovH5fYgxgfTKpRoRKYu9iByRo",
  "key38": "5vYPFa4RrST4hsMHMVY13DDN2jPyrDMMEFLeUsdQ2g6BmxCYBZ6LmCUkMqEaAiTcy8JNX6GeAdHvQvJEJQGzEB93",
  "key39": "RxM4VqyruWVxjEaTooPgZfoixerZ7sC2Yq1XwxGUqev1RsRmkPUWUPDovHjCv5Qqxsgx9mRP5ekJrrVrEz7BTVz",
  "key40": "2C7c7ZckpUjmpun8mVFJYnrBDU1LZTpQLUUB2FkWMUwihnU3kZfbV869fHG8TFY85c8oDJAbDCQjTLS5cgjCJ2VJ",
  "key41": "htCiUWjBB181Fm3Ef3L7K7T9dFXWUn9EBtQX3nY7T7qx7u3xmstsPopWrwMTxUMEP16d5RCSrR64brQ9RPYFbB7",
  "key42": "xpeeHHNxWPJyU3kMKHFGVJ3rZVifFkkrr5sP74Fv1TuLidobDzCb8Wa3jMT8zvNhDN1nTfWQFP7jXStGTrULvDi",
  "key43": "5QKUYBqkxRqsd2QQF76HDPwGr6ebCDmhgQAucpECUj9bzwq3VitapRrm1DP4Uoce17pwbP3R37TogKQaNu4pVeFS",
  "key44": "3UzN4L1x3gynCNai4G4KuJbET5hgwhXZSzPs3iDgBFH1Y1eqchCAokrvVyXSLHJFPDV7eam216bVDpNFk2gQqXMd",
  "key45": "Vs7KRQxZg4nANw1KzsjATnMLAWLTvm8To7TrB4oGPD78eNt8vfMe1v98aP8ZcLeg4b5VFagLGvGKNcLbv7oyH3Q",
  "key46": "3Mj5vHBLCTna1M2Y3s5FCzCGx1L4P2k63wubtyfR6yd3wHHU3JHvChBMvoq3Y6AXAGtj6Vgay8RWWahyxV265JFM",
  "key47": "4pf1D5nEZNqrE8ANqLpksSEN91PL2JGf3Vyeu3Yit1XgieHX5KwbsfYDhxPAgFVei84h1y9mtMMtFd7d8cZrqj2k",
  "key48": "wrpbJB89CvWaKQFoaz6usymHuU93JmHGepWRMAi2DyikxL1iWoiS4gmRyC9J8dZsr8dx3crVZjfZqn4gVbW9RE8"
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
