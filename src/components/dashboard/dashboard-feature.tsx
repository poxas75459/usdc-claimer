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
    "gnVrKC2USkdmLjTPmPs6Cfq7C9okKctmKAFK7LyEz6MKjUU1PtwGvsYwuEs4z4swBMckANZ9BkSitmCoarSB29D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MTcFfdJSqg3mt8tcsGtvn8iM2P23xG6zfYLDHpPD5gupX4RjJ12RFGDGDiqe3N7BWjUBCCLsesS1rmn4p6oHVmr",
  "key1": "3qwVgffyMhoKFRDwBPdY9xJ2vL2YNFhcZ4K3uWBWPPQeB8MberuR7wmDHdWkzrLvRBRz2Nx97WMFyy6y3pdJxiwk",
  "key2": "5VS98Rc4VeX1juDFTHapwY7QG6yzuqFQSiGbXGeQ2PV5ncbsT8Qcpv3wqB6w2rEQnxNMmPgd9kH9zK9BMnq7jpnG",
  "key3": "47fAHfHMW3kf6D2XGndHCqfFvtvDtvsX1JSptiTTZ7ZKKvMsxhryj73bvBYYjDzCLQwgSMKzUmMHQvPqQQrEFNbb",
  "key4": "28Vu71g1gFX9q9XEhctSzjs9QSMAcr5HTMvwf9daWTCrt9CNiMiD1NEafNaSNspWQCKvPs5G2vjn8ZB7UqbqpvQP",
  "key5": "3e3TkaPKcWk4UfZiQPYnzBQ2DfCrHFWkS7PqExuGHmMbgEUKpNbQcDxFtRzaujpRsBx97uNj9LEjGAoKWFHVKahA",
  "key6": "2s1h1Qo9nqR1xAGyQit6NsQbgVXGy7WEhDjYf3CoSFEscxahSas7BHu9SDaUNseeDEseCr12xCVmYod7cpibB79D",
  "key7": "TrKX8naKKyMr67G9AnYBtn8Maqtm7HHSPRWj3PPsN1dRwu289E8mPKv69RtynNZakaY8KpeVtyEj8uR3gD6HMFg",
  "key8": "2UeKz3CDBwby3oupa92azLCcwvaEoCTVSKF15VKNHLbWvkaiGMFg16LDUMZBZ4tGSBf3pp1ANRph8fmHFFyfkvmC",
  "key9": "2YVnKnP16sRdhcUTxKT72aqLDbubAaYGcTt6ksx8rwvQ1MEwNGURufe64bmrQe5At45qrX2sNr9EqHYXxruk3dkZ",
  "key10": "29CaE7ZHTKUgDKCLv2wXL2smpoaxphjoNkPFft1mhCydMb2f4iMygiEUPmvabjxw8fLbszBHPrKYhBMYF4SEWzpB",
  "key11": "4Coguu3xydJnsy6rqKwNFBxgowjKSd7Jb3XZjsP6ne5xzVwgNghAjk8W93UyWQTLbzkzFa2CG6FE8khnp4akuyga",
  "key12": "67SwQSnQChryVM7y27WAXXYkdtqTbXoguis537MU46AEoMwBmRsXtBRWruHubTVr9oqZTo6S9aFEeqywW2RJkef8",
  "key13": "4ceoV1EXiAxRRJZnw9bTA1FnedmevnWAkgDw2uD6fyDXCNz94zC7BDL8Bez7XGdpWjVvhfpzBDVmHDXSnojdrkEC",
  "key14": "5CLxHYveuwDX3eyDARY6HJpV8KVGwnYUUyCLii824FJUiKtNMed3NkEpReH29oGAWSdCZqHQMwqrF4XgXQoyeRFC",
  "key15": "3Kkj7vdJLi9Z6svthcc8Cv4Xc1VgSeuzXzGzXmgfucZAZQDakNKTH6bQAKAZe9BH1kKZY1xJsy1k3Ja3UDpSqX48",
  "key16": "3ii1fFc2SPFdMBtLvuqprrnS12VCcXGiWLp7CfV76yp5LDb9Wh8VzeMtsEDwb7UN6cRFuMM8tg9NHMkNgjkSsjY5",
  "key17": "2Gtok6WsENb2Xsrt4a7UvhHQMSHrVo5YRcai8wMPY1TFfyfqe5eSNqZa81MkHhamuL1St66vYhFX4zVVNXyXzQ8u",
  "key18": "5LE8jM3G6KssyMe3PtBgbZRDzNT5GKgENkhqrS3dHZWF29BjYNmGLAvhQb6QoTYQjFhaTjLL7aUeMexs8rndnbZW",
  "key19": "2eihkVYxVuw4zACJfAGAaA2LnjVevaiJtWBUNjJbLczapESQx17JFGXDaiTdZrK8TbGDQBhPTd3SfpnNxLg8u4kk",
  "key20": "3JCsoptEc2sfM2HLTw5MtjvsuWXQpa3MWBiw1A5pArYMPoSMAt7TrcuVkT9GHCGg3xHf8pBjP6F7PfzHaaHpf6iT",
  "key21": "5MskWCairxjsKgUqNDGJ17gpKjJx26cYQYP84CvSNbobwebND3LmTyU9sPXpiq7nkHFz1hEr5cooVu1vUCdmdtjs",
  "key22": "3D7NuVb2hH8uUnUssJDWDk2bSATQUZh5Zw8hYJ7tUJqisuVWrLWHfFXwNPe58YFiZV4Ftb3YUtYZ3AHRGS5MnDmq",
  "key23": "2To6MqUgpzQ57cM9LCxQ3wmcmWwvbLncr3TqotwGp2twHCYv6WwgUvuvxoQsN5yRiCTCPGx8k7be1r3UWkEXDBw5",
  "key24": "5bNo7c9QMDgxnErjFBLGMgbWqjm7T6Gak2mCMumnj3sMjBN6dv3LyUbEXxLzteZ7XztRJGfEF8uo5kEmZHCEYDM1",
  "key25": "j8gFhk5uMZo6bdAieybd4tkxPNGn2pAYQxBHpGRRTFJu1uk4uWzuoU8RYQ7EHrwZ6hEg2iA6b6NtFFQXuRA2Vyh",
  "key26": "4rCZYQmW9t4WiMs4R95mgWqfiGY6gR37TGZqhQnSZoSZtaAZA6Ja6DSSiX2WzoJXoXy68csR9Z35JnLZqBUH7PWv",
  "key27": "4RBUzNUU18G9QkzAZvCBkisaKQ9PKvshSGZ6zm7MUVP3aMgjLYM3nNuB1vQ6MwJ8y2jdotBWWWfH28n4D81SDYui",
  "key28": "4Q7q5gEmLTNWV7Yr7g3ZeWi7pmFecSn1CkeUJ8vucLLEnG2RvrugYxCTmQdcvS2guUbawBBLFDhgL1K9KHJ8uEkV",
  "key29": "62KrLh7YAMNSasz8x2A52WZ9ju4M5zWc7eLd8otwhH6BDmLchmkmrTFB9Q9Xn5Hyzbk9pVBRzbnjc11JBEF76CAV",
  "key30": "2cvH1s2YPHA9dvHDEBpDjWe6zxnaxn8RH8zk6Nnv98RoVgWchWKNpPxKXmJb48t9Ubpa4YRBoBT26BvUzpDujakP",
  "key31": "LGRgxF64RFGstL2ZhjpyViKvG9dQw4Mc8bPnWdigME1ps6imjACNNHA1UXVhPqPtk5aLAp1KioBJjGor8GQ8d2f",
  "key32": "48ZgDSYQUwU6To3hhGjBHybD9UjSfFcUt5Ljec5nS1t9tWcxjBpLd8xzgfwy9kroBHgMha1vpUeB6qLzpjdQRjGi",
  "key33": "57xHyoGnLudYqoEN5C5kHuPELjAFosTtunYUxwM4rwMr43WxdVekfzbgaEt7dNrXpi6BnW8Ebdjkbp67EbCWpMvL",
  "key34": "VVN4Dy8n6NfzQhVFKQbPKnSSVmGeMNkqxTPFz4amNbdfZEH8pXN2aEG8eiqqchRnBbP1zasg4efqQU3yRZLuvX9",
  "key35": "24h9JKvrqPPNBxfGDe86dPmkkMoCqCArcqqsLt8LPwPVaxrrsCdYnHMi1mDwJcAhW29X1mpoABN2XyfaC3z94Ljg",
  "key36": "3mHT4L4oRHib45jo7YxU8JhLvaH7dwX1Un13s8VDMhamcyoX3FGhtXa8yBczmmpLTpZkZsQUmsuHpz6vhidjuPz4",
  "key37": "2s3eq2HLqqnicPKb6wGUiSNqqyFuR8cEPoSFhK6fDwB84oEhyaQtVfZjywSFPcpdcjLNtAHFBrmG3NaHadHhtvkV",
  "key38": "2GpTnByTLARnhZT841k5kajqGZfEBj1ekaNTtGyEd2wahYFxCsPN4gTFkVDJp7xSvu2bnAfQaz46CPMyd2m9nqoi",
  "key39": "4tt4EaWXNsgXtrodM6tAtzfUKytPm9GWRwmCbJV1o2prLzX2W7ku14mCKaEDsjLKfffYc3BT1SjjmT6rG9Qm9Uyn",
  "key40": "3oDWyGsp7krJEdjb3yRPdZ4Xk7tkKNgxLexwGAGujvKNZqTV5pHHf7KkdrMPNpoEVgR95fRpeiDkZ7utCopb8n7J",
  "key41": "vNAMzmHsNtvnjBataT6VFy9fXbqVM2sQiSF1XFvAr9TpCvJaKdNxUWmYaTuhTXcKGCw1YzuXWh1duNo26kZ8jTC",
  "key42": "5i8YkWMP6zSJKxWbLjQsAeUyAdHNEL5YZPLKVXka7PU6zABZannaY8deyZiaxVcwisqqsqH4xqmVZGw8bPsYRjCV",
  "key43": "rsBwxUdT4cnv2MNTW4xRGtp4EHaSVEZspYUzKDiDi3KjTtxi7Sb11J21CpsvTNzQUoGWFDPPzQMJzePSG5nxBwi",
  "key44": "3jKmpeh286AFg3zTWyHfNe2E3CJiCDqNHt3KLioiij8zbEyjrWSffFictcMKwc6rAhjZnMCA8AXF2b2DT6Mha4nc",
  "key45": "2v3uQWZXqEGpmYDbigMNPv8fg9zWQ6MKdAKccwpsPKFAJfw7v1zLHQwZ3we8hZkWYPBxrzNuQ77aCW3avyd4ipxU",
  "key46": "3iB64vw2FTt8TAcyDngMwtfha7RKAhhimyAqMbXcoyhhu9m5prRwoBjyrSYqxxyfv8QJZYgZvDNPywaM8FHhbQdj",
  "key47": "Wz4eqSC6Md5DMKob6BprVs58fYnz11EH87ezvbDQY3pS14TTpB3XEviD3QAb5bcSjLK3aizSvcPGngppz2vFr4v",
  "key48": "4P1iD1iKBsYLwyWZyddqTahNXwKwNwbQzWqKHR6csRUPbBZDaZiRKMeoJGycF44s1M2j7HfCwivxSkZf7iQQMV3c",
  "key49": "3NhBkx53nUoksXZM2SWC6SMSmwBieEbGcwwF7tyr7NzyJ44J5mihyXcFcpADVTUQcmduqZomLqdDFRb2SHiLANcH"
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
