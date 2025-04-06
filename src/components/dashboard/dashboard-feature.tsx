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
    "4fPKNso5umWymYnL8S4W4fnUrAP8XeFBJCQGPiHxaYUwoj1k6PQDTyXdEeBQcKvLQZkkBsfdXzMYnbbLBLgXdsVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HZqggcE3C9ZYRn5osE7wXWwLXBGV9pPcgRa9GJqjsfW5z4DdTgFDniVvHW5iERfvdpCa4rNQf8Dq4ecd8LjG3T",
  "key1": "4qhKyAY3TdZ9pdBjKv9PLomhyGTjbLKPnR9WEWZ56a2mLsDw4RXx78dQgGmDHpywKg8tCQ4V3KmuoY3y7oUPH4k9",
  "key2": "5fkXsEDyii56bxHXdGoRVmqxkhnhsNtyQd4hmkbHuhLWk9p9AaQZ2oA7BdfWLURXxmHtHvd48jfsXVEgJJ2mJNzk",
  "key3": "2pAPEoq7zRFNBedjoNzAF4VS8BPbW8e7cvb3aurFH8iqRSujQnuTb5vTsk9Xhfq1poFMJ1qepycetBQSeeyutNuz",
  "key4": "5FGpTrMtnFJLMgB24Qcvd6wTyVk75TxRFRn2NLjQBrNtCDFULCZyNWzpxr3BDnVFuDLxAptt2R6eGYJDCeGJPE1b",
  "key5": "frKGxxgVf9bJxE2VAXbRZaaFnT2JBC68CvqVfisNyzaCFTSvpjcwmUhpDhaXhKh82w5VVHs1sA4wNFsJXXbLBWN",
  "key6": "asnk1nYMfVg62BddGnYTajcJc4Ea9JWU13ujz9Ub2NS1w5oUcPz5t1EU6i2T93tJdbg9UjaZxzUBzMoepwpMnF3",
  "key7": "TsDpC5EsJQ8jVVKYwr9kuPg1VuBLYACJCf1AMWRSd452LU9k3e2YumDLxRr1CR85VMTHFBJjRod8v7GRATmJy1Y",
  "key8": "5rp2r7gT8zgppyU25SDSVYP2xoeRBfWZ3vpo6GUBHnt8sufnw7FdsT8UgAdMbk9fnCFwHUV99bhY5hgc5kX9giEg",
  "key9": "2rxpmJyotRbtw5ePd7j8xRbnA7eyG7EPbvUfmVtBXEwp2msyE9vBUGxKEAfD4Rma5RqeYuigdWfrfzWpNLoUTBEs",
  "key10": "AsoyFB52MmnA3WsHm57rh2VNQSG8cMwWf3xE1PBQiyNLp3Wwhi9FZBwuyeAAApmZZiMMNNhHWZWuunxpaXrH8Sa",
  "key11": "5EVy6g973A1GsFoyjbBCXoUPRqggGjtMHoa54m2cqveNo2V4NTMdJXCubigaMXk3TBw6PoCmzdBGkCiUWj6xTa9W",
  "key12": "4QLXsGDSNr2F1d2H26kM4Ye4429ittoeJWkm7MppgZTJTrMpn1qRzXQgYEuyDuQeq1csxDXHd9sa76pQF9gNH37m",
  "key13": "23NokrDiBnpdtGYCyoGewJomxxrPz6X8WkUuwtByjUD7btmqsoQ4qGmMgzT4dvRYibhtnpXr1354C4mws1CrCeqN",
  "key14": "4jmdo4NHg6HqtT9JEAY5Q2ELQU5kQMpUT9xMyYojrmt5t4t72H2XPLGKP6nE8dEU8nYddFBXkaSZ9G3Yqnuz2rVj",
  "key15": "2E77Ca1cDkzxQenvDoTb97LK5EBbaa4GNi6pzhrzyBa94m6Mui11ewS6ZNkzPUctu1QgnPWtA25eqTnbPVjaZeDG",
  "key16": "3tVyesP8vYw44kVefW7VpbcHB8oDewYPwe64vSYS7Rp1DQyBWQcxNzsLQAaLMFabfXP5KwqFGcGkeiJT2sva84fb",
  "key17": "5dJ5dqaa4JpTYHRktP3im1cfCZqmyuQK2ozLmztZsToMWGP54wnZokgBt3zdNDs4nwtyXbxphmniZP5eU1ffMcsM",
  "key18": "5DCS3rUR5Q8NxnsMjdTG1724KaQaCcWwh23Dv79LJT1YzX1hFJKVsEVc9Dr5SK8s6nNhv42uMkaoWvtNqHJQbstn",
  "key19": "4zZXVtzvB2o895TuRGcGoM7zzpp8qNefaV3WD795PYsFdAmV6op6ZZumHYh9R1AyVY2sD8Xg61G1SrX69fmDy15k",
  "key20": "41B3WwRPhZwH6FWPkcMMvAjQMursjhUvTj2aM1SqPfsNbT7UTwfiKNT7g1b4Yd8MwtawSuniZGn2cVh8bRJBaw5x",
  "key21": "NUHj6DCiaXTv9GhqVhZ3taCkALGMmjtTgo1gctf4oNXi1EmTu3N9mBWP5G7knMmV6RGHY3BguaRzUT5wK8DHPHX",
  "key22": "3okcbeZVMF1xwvcK2cSnL6mdQpMzEk662X3LB5c5m3EP2Lggky7uHb367G6jCAb5D5JD11JFpHNKwZnZqsCwrY1r",
  "key23": "2S1zB4ceTk3EJ95jhYRXfhasGbVQXA6YhL1gESmsm5jxjUxaC4SzZZZFDABoDdjdX9dwC6jwXei6bhHCW178cTyR",
  "key24": "2J3kkEEAECQH73pTu14Miq53hBq96tP1MrS6oRNtungsbYvgRXV3ccx4YRCFXAXbYNBAEo6UNgCp1kjuH6VqiZdm",
  "key25": "3AvoJBNTLvbgfyQs5CftCvEGTY7Fq2CdxX2HCs1ZNQyBUAYSmQvmitwgaxGG2fhHLWKdoGyhQ1oZMAaU9JytVtXS",
  "key26": "2LBnrniCPP87QLtaUG2eXWBN2Xx4at8MTCqhMMWUKHj4yfrDeknbqBBEBjLsNy7hozysCHRL5GF934TVT7maHatv",
  "key27": "51BBt61R7dqk5H7Je3x88jokpZrtcXLcJksNdgaDkwotmMtywHKonVmzJGchuwdbZxtkkdUjbd332rjZ2WVuLU63",
  "key28": "43jHDAxxJ34NsL37ujoFYxXv6uwjv1JCTbF7Df9EGRUAeyjm4cd1B5hBMFVJb2MFBEgKFV6Tu6WYkQgxswENGyD2",
  "key29": "4sSrMep3ciBPsEiHrEHkxKMzx9LaT9FtPa1Dg2Nh2VRrsqENw41MCwRGqRsYCJFjSHhiPtjckDpR2nJr9EWf4Ykb",
  "key30": "2rCrsEse6aPFn3Cejbag1XV7xasVJoXPVHdpxMBwxDvNsq8tbCjv9AJF4yMuoc1yWmxUTznnS9kHSBHpCgftwBRW",
  "key31": "wJU2M5Ny9XrEsCvQjVaWSxWbirgLL4fYaD7nJSRQuLvSLv6fZNeegJVe5rqwKVUQEq3GsS4ZmbtvDB6cdzFnp3u",
  "key32": "51Hya5t5nBEQminQHaL7JH24USd5fWMo3VMPGSP7r58SnQNuD3APrPUbYUb4XX6zHKdZFaLMBNyQvsskwjcZ1J6e",
  "key33": "W4p1J7B4F1et66eVwPcxwf2JbzAoeBG6oa8AKTM2n5pNHnXQepYcTiepc4mKTW3uv1pjXUNLZUsZ5AeJza2kVfC",
  "key34": "3CBeNLKJFc6BD15x2S5BLzT1cGdD4qvmGuTWJSWv6imR1iaAp5FehYFApY9zLQTnQCYPvAJaRGEqdtsBMNfbmtVg",
  "key35": "2jzjLqFNvBjVBzi2X4R78tcySWNUFfQSrZNShZXWMSaECx23yhpKQQ94cPjQGKWGcEnriT6EpuKaazAxNK8ymva6",
  "key36": "26gh8bKmxaFQzCJGbSn2Pi1P9CVyCws2fxFKuVRwmo3WvQC8HGYGH7BwnXtMXP2nyhxgsVCcyUEugyX2DH8ynzNJ",
  "key37": "WTPdyJkMbi2rDsqfTpDTXkwQWnT9QgbMFinhEtF9VMzr3YoUjig43ztJiGUV4tZA8v6moZwSTiC9GTtgpG9T929",
  "key38": "3aKxEcyCnkh9UY8EoK9j9AryBkBfqTmvKWkG6AYpUKBv65gXAuvSUjteAAazndk887jAKYwFMzv6g5ydRsgmzJBp",
  "key39": "zxcRXZoZSvTsKuyN86tDbaebQmmXHTCxPSYAkpuRq45hR9koSfh1myWm392LFAWaVguZUG1acWpwzQ4UxnoPBrX",
  "key40": "2Jmw4raB2DHq1fsxM6YJfR1HAfVx4ttAu7Zirebw2SkRgXWLWz76XVifAusU9PT9jwZnV1CNWgP5kDKxomTZCk3N",
  "key41": "3H8sJNiDXWJXPA4sRRHtzkdbZerwN2J7QdwfS4WQDsnrC9FYZpfqQkT8qyEMcVV1dFk3g27JqQCBzFas38WW5osb",
  "key42": "btR4BCChz1areY9cNB9DzYTA9Z8oTGg8MS9KthFj72eFcVFVG9LQQHM5FWUbj9fr5wf9X7V4brWre4Qy1YxkAaM",
  "key43": "34CpkaQFU6FyKfb9tDLVCxYhwg3WY5QbCTGcvkBkuukUoTFJehFWbXVR8t2phYyg58f1FkNDN5kBac4n39cKaWGP",
  "key44": "2d4XisUv3n5EBGMdsqmkNMnki9aWJ796JsGjNc8QBzkXeQnazsYs9AhEjWK9psaoRkZZ1F3vRcxwZ4RwGiufjSen",
  "key45": "5mtjTg4TSZ8ttzwPVoVHXNa5qrebxTs31iVofLL5F5ngwXfS8aWzK83Lg6f93dtLVEBtwgpxdK2KFUpDWDvZZjg4",
  "key46": "5xskSRSoeh3z66a67qBafni8mvyGyVTpkH5PgjL95MKSgo8fP3gGja4yhkSnWi7gd1M4tkiqwb5rV2TyxiSJMJtB",
  "key47": "4LnCnoYsKq2EZRQy9ZB1RWuGnefEjkX1ZMit4ude3DCXUqNADXE63ygqP2MYtzsTn5JKWz3nuiEp1Tpxh6th619u"
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
