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
    "5e6SGaUe6FC4JTKbdYXWSZjVdU2oYuzp8cHTnF52H5HHtp3bfDhY5Pjqw5d7JKmvEXXDmWtbB5PNeqbsK9nX39Tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nNgGfdVNi4kGrPcFBfpXa3y2bSWPJVzrPbT4Dg5cWWzsyrj6zAx7NknNiswA3z6xNNdy29BduxzCHpTJSQ6Y7iV",
  "key1": "4e6n3zxJiDZtZmryZ5sP3NF81nCaXCzrRzKZr6DJoviekmGeq42BGFZ4TjwRXuxfRmoZctmPx8JQD3vGqTkaXqni",
  "key2": "2bu3r4x8PaKj2onQmFLR2u4H7W5dCnAaFh3hxpxHMRMjm3RiaE1uPft9oxJCSgPhCxcYwk3APbgpN8tfpymm41Cx",
  "key3": "3nXzYpF1SMPS364n4odC6n3EwN19rLndHwqXFfnwQb8VfUpd6bmB5A8LFAzmrgXsNDn3LP8sKvFvcDQXuqtauVqt",
  "key4": "3Ntgh7VA2BbXsBhyKE1XVgGCNsdF2m8gGBvQJu4JQxiow9LmSyFa3fp1yGXpJN93Ga9iUCtyWJHHsAuq89vo6VGL",
  "key5": "63Gm37ZVVsCmqJCUKkoddL8z4PkVA2s3vb5w4VjZisLWWgXAeUfYMYjVaNf3tLbGRyEtJSHU1DdypToPq1Jzcraa",
  "key6": "xzCr77JGt5qEGNnHTLf8vtp8mYCVEMYrSF2HrJas9JttrzRrVLsCquVsTbVQg2zstok5mqHrPrq5wkGuH8NHPEX",
  "key7": "46Roo8VRFn5JHmgroJF95HEeiGYCFhrEkZX2NpmbJ4HbB3MwPnwHu56yCAYriTp4dc66j2hBd4FcJqssWJy3xHD1",
  "key8": "3iJstCGJT3KYCvn67iQeRnjK37FSH4jSRS8yx19qit7TJhWLSUK9sd7dWQTuvFXuGECcABvnhPPefn26rcYsnYir",
  "key9": "sC61PPY6j3FURT8n7KEmpKB6ZBW2c1c4wov5jNNZaf5MGChxqDAchxHhntc4C1Tq1TLqGxrUpATVwesgNDa7hSD",
  "key10": "oGVyZPV87arShxnXTTyvSzSKwuPtXNWnvTY22NszzBNSYR5y54b4QCuZVDrwFAHfQu7CzTk3XJonoJUwNBLPEp9",
  "key11": "3oTGb5rWCnmVeQwW3wNiL5ZDxoRBYoJhYLb1zmhRAkJKAMGAmLRZtwZdpt6v2b8Zs1p6Cs4TDDRZNWZfhuAar6zQ",
  "key12": "x3jvdZ9GYKMNp2XLxGymHNfnWuw1Yh1QjNPbTsUi7Bq6x6jfDNaiHG1Ed9r9PNyM1ycGKfMZEjStDHtdzA61gwB",
  "key13": "3dkeiFtvDLKNQ8PzbHYLCLmdPx2QU1NGi9aX9bMLVdTzHwvvvmVJAQh7kqKfdy6ssmZXNgPFYVZ7YfGqd5zot7w9",
  "key14": "GSBHkXynogpmD1MQQ5oBF5av6LQrwjPccmz4bW7PF8DnHFTY9umBJUhL8Ri6K5mg48hruLn7rJJzgpfznwaKDuB",
  "key15": "3mT4TP53x84stUg2jVRa5oy2vD4n8bPSan7A8HwMnVg3PbM5GxX4r8qGV6AWP6jce8hUe2KBVWtMyHHTJRdw5V1t",
  "key16": "39grEMaFcWqm45fca8HYcrN3o2temF4NgKBwSKfJX9jiCcK5k5Es7zRu8gRu72MaqctoMVSGnTBXu8qprBqV1grR",
  "key17": "45CtAr5FXakkgkTGBKgZTbLQ5DM4Yn3wDZoEgZD7KZoHYauNAyfJdA9umMJXzppf2cHki6qnreGwECxEg4RuUZxq",
  "key18": "2Hux2vbBwVTuQ7nqYpVyvjnW2Qe2895QmG6vJxSrHKvGQ24KyfX7Vp1fsV2q3xMDAfue9wm2bVwMdY5KBdEj5B3f",
  "key19": "4XbEMvb5SDeHtjEMu2M1pbsagc3vFkbr42yff8PmmRgjoVKHYqkBhp5SPazaXoxnbj7VK9vrZnKc2QUwGiEavT4S",
  "key20": "4voxxxXHgBHJXeVLC8AsipCc2HphWHPcJLKxNGTo4uX7puWUoc9UJoWiib4MZuARxsamzoD7PhHEws4cozPZ3RVy",
  "key21": "5ruUNaQR3v2hBAMhixz3Us8MYPfe11uHJ1LQYZJwYF9M1zoTzXgKWehEVjnmDT58ah79aad3nyb1mXh44u95JuJ6",
  "key22": "3tLGs41Pm36nPVgip4WdmZd8fR6Ygpm84x8cLreNY52j8dTg431rHQZBNsEwKvmKWoBadsuFThW4tpvn2W5oZwTS",
  "key23": "5ohX1dXxqaLR1496puDyf1YUhaQGkAo6r2TkmDsNPoG3rjGPXMb22DZxYKnNHaFRUgbjX4xBa7pEwcq9AGjxUYh6",
  "key24": "VCwZgMmxrRo2SYUzkANhVimmhnMRBoD4kRc349V9jKuZp2kCP6Ji3vd2WZTMjGL4J539ongqN3X8CQPvp8Kb8c6",
  "key25": "2NsDyejCxocZUxg9WCbdEZV3JiiHLVk9F8ZauCy2LhJWmC4pLm1pz8AxQi2Lb7vNQJjcYaPzyTS4K1N31RwUS8CE",
  "key26": "DXxkaw2ictrCFCFWKgAUS69rUuikNpEnuNriD7yjXmizQAgu8dydNnkrBjfoNJuD6a5KYjrXRUdin19sb2yuZ7f",
  "key27": "5WuGuFK3APrzKMTLWXWmRKU6Yk2yzaSUDVtvxkcgohD9L1jX3xkZPFsnwEDQ8pqgWrghfdqXn3sFWh9sykT2dVFC",
  "key28": "5Pw4dFUpjDRPiNsqSs9V12mT4J2QRJjWxCXahcuWQPjYKZdEFHzboosXdTKzbP3nKSswtZxeWxxKgSRWU2kh3EQo",
  "key29": "3trHpXpcJPszTB5bWC5cSpeEcGCbuSmnn8b1SjAvrqHUFFgg1qim19szvG6GwHjJP9jzrMfkhoNus3nuByDaNn8w",
  "key30": "3Snug2NiLUzjkgRFZT3gy7innguD8EcKQifBbcz2fHFJpsnd82ZXLRr6raqAfpj6MHB1AuPjpzyhgov2ga392Far",
  "key31": "3d6M58SK2dvtadksicGpJNinsVxsARRsx3Sc5qY8ntMJvhZp9seUEiTLjSs6LLjTwDvJ2vacm128cB88qGVXfiiQ",
  "key32": "55ysDnFFboBcTcaZRqLLcGrh8uVKPFixJtrew4AZujQHT4WMXuUtjqHSy6Gv7RjBDDvroFq6PXRb5SA2Mb9x7F1j",
  "key33": "5yZMQV6H6jM375h5Nc9a4pTehWzJGhj5emwTpcNVpCamrPEMGjs6CwdMP1GCnHV74qcYQwsLHvo1WGHuJxYQGCeb",
  "key34": "39wCPu9Bb6PVNJbSry3z2K5fC6Q8MisMtDZM3qcrZqJnwSVEvT9E6GWAr8nHUSrmmUdb4ssp9vExvA4iSH3jsr1K",
  "key35": "59iHHyYsRkFaXvqKg3Wnxf6eestkervZk267dcJYuQaUHdp8AXrxByq35ZtKS3TfggMnbtByjXFkkrQ1rCpCmVnK",
  "key36": "4GLqasFSqtPN43rpzgYAGZxv91mKTsurRWBJ2p3Xtwy9k9Pz4oErzA5iiMQyzhX4SqPCGxcuyBoRMjw23Cpfi5N4",
  "key37": "4GBA6VP21okM4AHLag4qr11phLFqvHNgQ6dzKJz8xN73keRkAuwJuU22XhmsFpWgsdkfdMSsRRuegs5CxvK1aoGi",
  "key38": "2wVuY8Z17zKQcuLNdw65CXQSZN6QPTtrmuRVmTJipnQG6Tt9W6t5d5eeSuJTbMohm9dUAHnxZGyjeoBvkdWFMYnL",
  "key39": "3EgueKiyGvXYjgZkxXzYhFhaj8vfxdCwcxDk3NhVF4wjTzSWEry8jKjXiFQ48zGg1z8nXDeMoPqrnR7DKevFPg8p",
  "key40": "5PFvVwreUFu25T1c9cgxk2KWHaxmYrM32azTM97Jgez6VdQXuZkGWE4uapcZkxkmomN83SnmyWAcWGqmcmvZM4X1",
  "key41": "5LAGAWDH1GnJPjntzVjMQF8arhEiRS2yj8uF6bE43ys1DTdQnLxYwA8CEy9btG4mYH1haqUbLcJVm5ttneDtDuUa",
  "key42": "24cp8mgLRNsvmSu2nY3P18uiCNe5WUnjAtTzxbVooA696eQznesCf3VAoVKCeidPC2BcBGVEFcAfXne9jLvdzyjn",
  "key43": "5VBdUry1movVSgn3pJNCBwA3dDWXjmK97WEj2ZcwWzJW9jzdtwhyuy5GnQtfszvpACYzzAyncbnbuCChPpPsRZN5",
  "key44": "3TbGnCF91G9wmptSokaBFHk5CBBTZJ8iTPL8jsym22nvV4WHaTdUyT1zprodC6iWCz5KYNRmzwoDYoEMPB7Dhm1h",
  "key45": "36JaJQkpwFwEmmSwx9neCh1gFUSmevdeGRmJzwuBKiWjN16C5JHKmEPxwAjJV7H5BfLnoznoQMUZoa24dCdGsARD",
  "key46": "5azVdHH4NYa9fv8VbxfBSFGmLwmKz6m5MSuXtbR5XJE1tVVBgwzEA3Qyj9KJe9cge6yyjaGFCME34Yx4E5WNcjwQ",
  "key47": "4ZpZEthuinXtsj7zwph7vpV4SH7BZ3EbmRTUgD8u95yWzsHrz927aBVh4Ss3wVUXDWEYznTyzwLz64MtQyeu4wi9"
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
