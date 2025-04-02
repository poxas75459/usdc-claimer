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
    "364znDTay8kXgnBMTzH4e6gKXneaPAruHGBqszeTEYS8cqxn6xogotji6vd3NQcFTA7cW7g52kAytw6n7TttmmSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WMjnXK8hB2iZq2oDrDMXtiKNc2ERaum2Qtfvqk83n3h9JpUGrN3LBzK1cb41BQAPeDUDANCXVVbMgxQp9aagBk",
  "key1": "eV8Nr7iZHea1Bwnt7Z8wA9Gs7ejuF5XHUAc2W5wAP74KwqBPauedTc4TWLagJryh37mL3JXFXY3sLN3dhoSo8zK",
  "key2": "Mi3H2T8SaEpaSm1xXUsRGfHP6fHCnYPrGgyWa87jsxm1g6cK9ssEMAaLJmm2eKudoZy4JCQUg8JGtqKb6fGL1Y8",
  "key3": "uWshwK4rrd4hYj95HDt8qENGavRxUNBhmDaStZH5cnyUYP8vvt6yJQDGTRsTA4Ps9RpAmtLBFBVp4q4DhbhVCnB",
  "key4": "5D9iKbq1KLtSgDdgqFLcy2HyMorx1emsEMNaSnJ2pUDRACaumpgEF1qPC8EvPvaj6JKSe2U3geLcfKMjnUiitY56",
  "key5": "3MeLFL2iA2BFzD3Tow8C2yrQvUECPAKCfSgzMhSgWRQybYCF2LRBCLWTbpBZf82SNeGb7qghpvYuQPxEKzsDi2c4",
  "key6": "254MNSUVvvup2BpNxbefEFwde1bFxyeLgmCjRLYTWWAw7BAxNUpoqcj4zV9apdK6f7bv42dWKuUAb5ZPF9AU8roz",
  "key7": "4WmA66731aUqRBMLHatasqpXV48QzCdbHz8MF7BMeQs7GM99ra7Zuw9Sc1HryFkpDojdoK3U2rWedoWhBTGKQPmA",
  "key8": "5vr443wRb82sLWPzERwnzfLozHkcHJ7oJXmfvG1NjEp2ZzkvwjLkrWS5NFw2wCZy55zmgdJA3gMuXzCW88URR3ja",
  "key9": "DVKVbffRHjbsw9Vzz5vbPUURJRVTzQkc7eVNphShXXQjDrJvkEnTvHGGyFnbAcetnYewdbS8G3Nh2GuxbYekZFB",
  "key10": "2b3igsqGZctfzY9T4FtGG4d4EPimaJxsn6bKxXeTergdhkMzncd9GasALxULaUv1a7t2kh9aB1pmvsu7EUYaJWhv",
  "key11": "67UZsmF3nobyQEqmYwWhRcKKmBATuQAodo6my8KmRoZdZxAZWJ1ymyJEZL4Mtf4U5T8EDVaeXMRKLtraZpfqHyn6",
  "key12": "4w9ibdodo8kqJSpd1WYXM92zJtYmnWGiKdjDNK4hGBXUgS35MyyP4ADunKqWm6oHZAdec9fxcaUAdSCbrTHKKspv",
  "key13": "41c4c1A955K4NURPXZAQuQeooxGMgFJfV1dudK5C7UY1FGT9iop1oGTRgKhReihcDKV9Q3dMgdy9nLXWQs6WpBH3",
  "key14": "2XyeW3ieeyh38jK2BdUz2cGVfoGaeGyWZC65NwebdG3Ujdvcvp7Xf4aboLMms4duUfd3Rk9X6KBNjvCQAvcaC3MJ",
  "key15": "55TEhUYRmCKMrbEoriP8uYZxQz9yXqYqPN8jU853tMUCtdQg1bUz7jKKygQMEwdHwwe72EFDvNpmRJJ3wC2HcYh7",
  "key16": "5Px5P2uDsSCih6LfEHaxzhVTjHmihHv1eaXG6P11Ceba5nEncHp1vok45zgFxHGFNA3wDqBosnwHNoUeZaNzxQHW",
  "key17": "45Hq3zFZgGyjhWqRsgTGRHe5CCVVmAhZca37FxkW1a7NETetfoNB2LySibztpkDEgHHn2622ePz7ZjEW2oj5MnTG",
  "key18": "3pmBTFrd9WzbsEdrio6cymSkCZ9EnnHn2iQbKNGjrXfSbmmQaaUDNVexnmLTbi2qqMNdMXyg5u8hi527mG8XMEdQ",
  "key19": "4KcTnckSVc92xrFCTzjBwxk5qpFfooHNogPxRuU1Na4AQPURnUxprPm9WcJXBeJreKRYX2zqT4sd6BGu9magTg84",
  "key20": "2pu4wmtTKVEQJPdwr1Np29DR4chYBGHEf6PukNaaCUznWZvg3xHvsaSgjA1TtxzbfgEbTaiMaTm91dXiVxjoDEVd",
  "key21": "ZMB8SJBJwcb9KCaBe7hGRvgvrWrTmXRUywbLJeKbnPSRfwMeJ4xLyuyALLVJjmJomff6N9FECo1NfXFQpS7j7dQ",
  "key22": "38YhqruZpBBiR46mT7vtx5jv9gxvZKxgj2qLzVYHQZ7XPr879XaqCqNUmeFQtp1omMs67FogMKkjETtqTRJ79xKR",
  "key23": "2C3vdUCST6V4foxQdoaMbrTsmBfy4j1M9Siws5pARrUwyq6u6Bjd5UntX17t1wGGH57YGG1TMbDgF9ATDyHWpd1a",
  "key24": "dhRgk4XGMzvKcxJv4PTVathKiymd1CNanMXXpGyJKZL9jHSRjo5dp7uNyDRyFvU3n58shvWHyiNbRC6YKbMSTWt",
  "key25": "4QrFoLRxadswypAYerX4kX8yWKHLfn6dvcwkrJAQzDAp6a4mPbyu1LiEKnbt9c3iELCtXepA93UK5iuuiimxGyzA",
  "key26": "3Kd795Finpi7LePj1idXCUVYnKK9tswx2iHjezQtNvEuwWnK5eaGvhBJHLEDnzmaemheSRfhcptz9Cfm6SqYwbAg",
  "key27": "2xju9onHzYLjmNBLRCUiCGZfJiGw6sLfqsWPXLeqvnDSKm87etnxrPghZt36nprtuACmVxsSoauUrttnAjj4M1Dy",
  "key28": "33y3rHyrxuGwUYquHE5mpGWseXVyi1WjKyLmbvjQEjH7kemrRhzXBvcsE56pYEUJWDrKmsfGxeefeqvTB5oEcCh5",
  "key29": "2dqwf5DVqpvYtGcr7vcmQd3jbDAGchkwsfx3cTkDJBV4k6NaMRsoJaEWJNG8XaL12yoA4EJbeaGKk3fhuRMA4WtT",
  "key30": "3PfmQ6asjZesptdU4kjumxY6knRBoWXCKxbdEh1dCEvsCcV58Rh2BoBzw3cU8S5mk87sk7Gf6ETr7MWwvhMseo87",
  "key31": "4XgWyRChHupPaw6j4KjcG4TxHu23KQoBcP2RywCqo9UgKVdYDpy7WZqUqC8vkptJYtBbJS2mf3MZarh6REVTvNEg",
  "key32": "51PZTALd8DgwLfWM5TbzqwsUt29HQXDSegfVsdUhtJjmaYGFwoiJ3m92xcnhWk2r5TChbpv9NiPpVuMHtWbwqaW7",
  "key33": "gSa7cauRg8FGEpGNMF5NEbrVE35TypbjVCEbhuWGf5q3SRrEGhBFH947f9DE1V4gkNvw3X8WdQgBdviausvQA3M",
  "key34": "3pch4c3R3LLcQxtrMKgtyhhuvfk89PwUn7g6EuxpnWcd3Nfsjski9FxN7FaB4pEgs97H4HXynu4SZFsZYxDBEQta",
  "key35": "4mXrsy2ZRFbRr2xq4JwvUwSBTiwmxQuHZL4FSrMjw4Y7kdgt7e5HV2Zb3iU3mnKxW4SHmsiXunxGzJ51buKB48yD",
  "key36": "29Q71ZVjFrmsWS6GohdHoBZaEtnvde3sWhdWeW9RzZNAq5113Bx2GLEj5woG1oFW55XqZCHCKKCiQt4guGMxG6j3",
  "key37": "sq2gWPZUYDASyFXgwmjnuc3NUU2E3kZRs9QCn36XoudqKYG4rz4rTM6cMELoY5MP7MY8uNeWi9325nYG578fDF2",
  "key38": "5iYuS78Gi4Z1nRejD9Vk7jX45Y6WKTAnCq6dZZPU2wtqz2vjJ3wd5kitPgKzAVhTq4AGXcj36tkJ9ryt1XrMxBdP",
  "key39": "5NxjjEaRqvJk9pabXLAwJtsBMCjW4tVRwGurnr6ExMuUmJuJVZ7NsELgKyxGM47bTHoukop6yx9GBMEFytgb8ck",
  "key40": "2LLiokhu7ZqAGZ9u41TfbW6cuRzVgbv7pChnrG2EyoL9LwrxAKkmztYBtkoD6sTqYWqaL5RkehYkiJhC1akmbtnv",
  "key41": "5P4sYS5vmwXGU7YWgWtt9EDZy5PQBiMUC483ePz2EYCoeaqb925ZzaUCv4fvLpJxVrsgECSA8Tf4X1JsJTa5DwK3",
  "key42": "37oMkgfGaDzEagRBUW1Dd1Wn6dRG5JbmacejmTuQnuxjYJzXFHeEcihkA9KRLSjfat5g8jkv934Yy9jbR3nWFRzk",
  "key43": "3Fy4R3BT7PHUnMp37RUPJKTJSvnMJFRCg9DyFVq1E5Uow2WtuH1tMM41bMNiWdU3ycx8FufPqSN5Y5Rswxa9wazQ",
  "key44": "4tMrpz5Nj2Xdpvn4tHoV1TDj2HhPKzhsoZLApBhEgFbTH92kVg2kQs4SVEgaNeKrQtNKDEtTprU5gaFwfWfDXpfR",
  "key45": "RwrDSwm5e3qa3bWZSztMmPCSFnBxHJxL9n8hAi7DkYT7zoJVtzLweNsytYghMzfiBfSbJGrdBmSwwE9ADStRnJZ"
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
