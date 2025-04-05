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
    "5vKHpDWYrFxFWPYLMyCSRLsrbFcRmSAG6tb5DHn1jpDn6AUjadTPhyZdZPyYBsQocnp5n27jXpzRVfFCbnvW8CLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ULCDkQN7wc8vUxLFEDiLUwk29hGDzUvf92L4uKJGNv5JUXCZL9uUPaQSXbgyLntGU1UX4Kqz7ktACvr5ybkyYd9",
  "key1": "4YgYpEZeposx2dLkBdzLqSBAuSCbcx4BsASZtkZSHzFMcqJuqRdFwALDPLXdCcFDH5C4hdW2AZ8joTUMULKCsX6z",
  "key2": "4eWYfgAwiBgzPRitxujM4LhcxP18vVD2WwM2uKDA92MH1S3NanrDTFhZJHjVjnF3p4jqSe8saNeuw29AznsXFNvU",
  "key3": "2YtyXFbUMQUA24CHEbFn1Ta3L1NXGFHmR4QRsTakDgsvT7k5SbwFtJuq3ahYZrxk3zjc4dJUAwMC86Xv9vEMYJLu",
  "key4": "4Jf9dm7XZgt86XSy1NEBxLEMZkxXNG3cURQYHHfCyNjAHQYfcgnZ5pmN5CbqvmJ3rY9gyXD9jYb1APuxCNgezfRz",
  "key5": "3WXjK1XU7y1qCQPRfJHHj9c2GoafKx57XTpPkgak5eiJcyR7BRT5fAshgctFnFFbZbNd1UjEeryqcmuy4TpFyTjD",
  "key6": "2Wsqvc4KHeCsxTyaHGR4M4c4QbRt1a3DDnkxEujS3p2oZwKBPoGi8DSzxcKFbgEnKikjscbWT8VpHX2yJREtR3ZF",
  "key7": "4mzcw9rtEqUhMi4vM1E3FefnQvp172VJvsfLuQqtUDQrKZhtBvUdkm3yFFXqWPqQx83UaLDGUozJB3usL5jJaBj7",
  "key8": "5EQmxe29GR7bgLY3Vj6wVTmYt8gUSZZGiGJ2221pogPRGccNpGU9kLCU4QVc9FAwN4GA69jyWP93YmsCJvES9sJw",
  "key9": "2bTSGYyhPwo68mucmp7rNrDTKzd8QVtjKjALHeFWQULK21nkb63BzR7qcAeRsWHgWgVJg7V5rfJVeDypvf4aJ7J7",
  "key10": "uHGsfJsDu77gNFZzX3kFX2xzqSxRpxzQStsditKMNcmXVTq7cRUG4SwVXBwBmSFZTj3kkELpGGFs3QNwzkFDzde",
  "key11": "4bvQeVUaZtYPEcLnWUYGQ1tkwioqgMKCzyrj96CHQvKhx8EmUBRLbVVETRTUDcwMwTToRZ33A9EguWtF9XVS769y",
  "key12": "ZCPZY3N6Zx3K28Y6qPXG5CSXuj64EKh86y7AvR6x1F1TN99Qh8GFaRGEf7vmxFKUaXqFqbLPbCR2vGMwHDBJGWd",
  "key13": "5SH5wnMz3DdjYobtAc2XP283SWhzfNMJL5t7GgpaD7xE8aoRc6bvBBY8n622N5KtvPB9VhndWtkSy2rfk9Vvf49A",
  "key14": "QBtE9gfeA1wJGBHQdhxZr5ZZKQcrqXSV24rmFadjBbVWPoqoRJ4c54mW9rWA6QMqVmBFwWsHcU7c61xK2kfkWww",
  "key15": "2zALdFjGkyLDiMTGWRZZVwAS5C2rFPg4GFVNp8CFDYtPYVjMDeyhn8jt1sjwq66R1Efpe8rzFzp7JW8mdb2sdnLV",
  "key16": "59RgQzeNHKsJwXDe9ndf8USvWZ5PysxeXxdXrxZQAAVZmWQrSckmMa8Zcbb59H6fFDdMdxwiAfznhECGy9QgYrRQ",
  "key17": "5Gouj93ojy3BRMa1iMmRXYGu9xNeFEg9dMyJEWUcKcHRMqUV97uw4kCfjnbPbrpbJMBRirHcESxMSTyfDskq9dz",
  "key18": "41zm32ks5W9XjyGN8wda16q3PTsrjyu4216cVUNveba6UzVQvnXkUHbGX3rE1rrnx4rQT2Q1FAoij6TBg5taMFvm",
  "key19": "HYYcbMcKcjBNZpUCJzjXoaB2Ho6hdUXfiLZZTJxM7hNfmeq6KvdGyuZ9mLZTCKkJT1vT9StTDB23ZSHmNVU51Xi",
  "key20": "38sKycPbSks9rdiKiQva2GKzEeqao63f8Csu9SYqBzaxz335TawbyzHATkx7HGi1ifZexaLsGBcguJoHDbGS1bi",
  "key21": "gCuB6cyK3o9oeSfXd9p2PkfsW9VicsVkYF5jG4LYiX6VqDgZgzSDWLmw5jJ86ajKZsbUzTXScUGDgksJcYbVA3Q",
  "key22": "5F31AFerWG2RSNojhjYurCMdq8KTQQkGJAmiUB2BVnrh2KNQ1SzH1YYXeoBBvrG3YSKhu4oV7Jy5eLrnsDTPYfof",
  "key23": "55hqouVWADWxYX9P1XTGY9t1dRFievkPomd8UwrbAVdPHA3g7MiKHG4Yf8pjkV9g6WrAkebEinMNrBQLyvBL2vq6",
  "key24": "3u9aTXftHViGAsV3V25kXesBHhdFhW2rDYRPN81p5W9fqL2PqPutY4wVt6UNGgw27iTa7YYMYw1PkZeJUTP8NhQx",
  "key25": "48poxfSn5cjwZLbNetnxs4aqa8Xy2eiGfSR9qC7ptL13MoyHKkYr71eRocjBF5huWTjjx94vTDYdjBSmEHrkhj7F",
  "key26": "4aiz1HU5mP2gbgrYfXDuuaLpimT8TrJ1NfnUMxUSEFpfVEKJYdnu6kaJVaCztbgu18QCxPuRuJdFLqRTKAugqt58",
  "key27": "2w5XpDke2kfHr3sGxE73YSzB83ySCAph7zCQ4WZ158E8yZiQt8kJHhh63mnZQdFGAkYdp5Eq9mgWZxn5d5xsTqxp",
  "key28": "4zm5Kdrg7mx1cybstbD3xHWVh5CJZoA82FhSqR8krLecEgCFrR4ciQjUwPuVNKbhnrALHwunu61VHUNQGRb1274i",
  "key29": "MRUwXjkh963ZLcbrwuZthBDYjW8fAgtKZkFnQ9suGhJETv6syxbMn1nSfVabentfWqSqiunHU6mRuVgT488ttFQ",
  "key30": "3Ksj7FVvQTo25aUUSR2XpFcYmjpDEQg1pExmXKYhDKrRkA5wzDSdw6ZPt4VvdYbJrbbmYD1n3q7yaw3R2gR444Ta",
  "key31": "62gGGEDwrCEG7HwTjYZSeGcP8n2MqvGhZComtmdLKqJoWA3s2G1bUYQ4tWbtqyATEQxK2egMsURMbjUPcEspZenS",
  "key32": "4BpTs41b9mhnxgkf4nFqPbvrNGMa5WdPyApmSRdd5eg8WEtzXq72bdkmb645MTy26hMXwYHZhmBwS3HPqX2XXZtf",
  "key33": "fBfkZCcN9Bk7u1MBPWqrGdkzJWC3sUWmv3KaUHJw6sMAMzF1eJBhax4LG74xJLp1ZvNqWfTJNAMHyjwKg6H1UtF",
  "key34": "3Wxtxvh3Fo6u9AVzCHh5Hsd6akynPGG7uL1ngRWYDxip8vV2DLGAGug4TLvxDutdQrrAmNh6cxmRiEcqWLXUh82A",
  "key35": "4WCbxF4pNxGrw8ixwZDXKG2fHv2JZQp3nwQXzokSg8kEScuEk7dM2m65roYJsPPvcRPqFmZv7gEXd2UryUGTpkAn",
  "key36": "3QH8Pb6wqCgpQbRdvowyf1bWbmkGNYWWJRHg9di3fx8YP44DJQgu7USi45EXxakntTNZq9DdFXc5ySXUhF1yXVPh",
  "key37": "3i2evP9p9EwngA4ytEqC19GeXUfDWsfUDbQxNjo5XqgqhecVNAspgfv3h2bwX6SFNLaV4Ke2Kf8Y4FZR2qhV2ExA",
  "key38": "3anCiaaoqLrBLEpX5rCGriNNEGiTQzMet4C4ptjRfDs2XqVriMdEtXpT4HVvHdH6FFtJ2PxFFDbymwMDGTQ2BE9o",
  "key39": "65s9Cp9hEvsUnerWusqA4ivBAruaGkRzwg56c9XBFN7ZtDZCwLn91wG2czDZr858ifpemCcDqB9hVMGNP6JhZuGA",
  "key40": "3TzqHASH7B71JpPgqF9xxjY3QsAX6DEzHd2MZ3v3Xi6ebPpeRuakWPCBH9HcZSKKFFtM4XKuLEx1NatdozYATAuW",
  "key41": "3JsopDymfQHT91HzPadvebbGwZZEdSyHuhuHCrKj9ScQWmhYcmvq21NwufwgeKR7MvwUvFTgLgPXji347vnH1rp6",
  "key42": "5ztriLqkEV4DQfE2rHYFUuqV8r37zPN5ef1dxK5PanuiwUiwyiZpCUMa3c7NsGgUx2FPZUqhaeTffKT5KUBh7nbx",
  "key43": "2kp46d6QXesSbLybGP87nbZe82rhL65rNW5wA5MfqaFYViLw7xiCYHBSVciznXgdpXSgt77FrSyENG57KPzuEUjA",
  "key44": "UYBKmYmxLNFjY2z6vsYgN3WxT1vmKKDuF1qSgap41pvT6eo3kY8agPu76bBN1KARyUfxQ4pVHiSSULWnayqrYsu",
  "key45": "4N4iBvGFhPHjPLewtPp7eMBMRd9xteFAMSxgKVyfdminGoxZJ5x1VpHcvFPRqUXwdYgv6dcQzLm7t4N5v9t4N6eK",
  "key46": "P3o1oJUSKnpBYGmxLyMseWUQ9FV8cF4FL175jAfsT3UQh26L3BCJ1eNhgUb7LwovZSk5qcV76saDb4PbkjhqbSy"
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
