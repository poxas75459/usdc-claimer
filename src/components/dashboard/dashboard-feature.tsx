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
    "35QGv28YXbFUj5PfjnBkWJAPYUo99VPkrzEnzkgKAUXBd8q1X11qL5mbM1TdjFTcUCzSyj54TAK3zrLrEpwWzMvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCj97sYtnB36XRvkrauZ5DgsTm5qTGywgU9TSmDPmrNpPZBQRUPn5hkooDV7crYJXrNvUJLqNC1pwnBGmam5YVL",
  "key1": "3SYypDrvp9NqwGr6p6sQb1c4htm72YmVQnKD5KWZYxyuS2Z247o9ts4JyzJTqvNtPw9xSCzVf3d1ugwA2C9EbNyD",
  "key2": "5pJrmi31pXt7ctgWKKJMswRU6zEt1kGQZC69ejNcTPrBSuuZXW4EScPzWfZ7C9pJaGHB6iZasLZKCKpU5mmVVrYq",
  "key3": "2MdE9oxKv6ky6uXWpnNYgFtseJrVULLNnMCpmAcq7nRFXWWaYmRGHe1oBUYbLEacbWZxtiD6a7z4D4Zcx57QKot8",
  "key4": "52hVv91U3QrpBWaMUu2z9Pj2txw2sfeDgiGQJ3VCPAGvovSJSDeGgAHxom4iShZDHej2VahEWC4kDGEmGkJYbpMW",
  "key5": "NdvAor4NTHY1SzYzEkViZaVJGGmnPemnvkEsaNmWNGXRSDhwZj226cxKDUwG5QHgr8TYJ8X2zpZp8rY6dqtouz7",
  "key6": "BeuDkco8f99RfFGXW7x5PTeKKEbyXdRyQVQFgKVSZXMUVpt536dM2SVHca9XKRmn27FsNMrBwrZa1NLziGcRvB8",
  "key7": "4gXfjrvqhax1k4bvducnmSrntWZUZrT9W6VRNhxTBRT29oFGbtzGboyf7JrVyyBcyUPuvaG348r2KTaPCFJ53adu",
  "key8": "5byVSk3i7vfqeb5utzLVLh8Zqzk9vymXRxsUYRdFvYDPiXY8SKjjfhERESwxpehw2JoxdQ1WinB4ZE4a56VofVtV",
  "key9": "354V9W2qZxRQ8UovET7M9yN3LJuNM37kGqhmBSW4quHBFqc4MkasFvpYN3XfJaXXHJDRC3DMPR6KWrU8mfHedUdX",
  "key10": "3rqF4vXJ9vSreDKcLvm5BdwgmvQTZ2qTBZVyG3F92NKv3xxwds11Qp54big6mieNhocJyq3KUq9d3ULuR7YN73EA",
  "key11": "3ofAXVLP9TAFT1NzbomBuGUndcKJZK24ZyXS1PgZGCZpJKsmhBsXuG82NhVFHW9h13EqCBb5qTczcAW5CgETGiRk",
  "key12": "KNDpFD4yyRBDa2SzmxCCQZctrGnndprDyQEcK4bJVx35amCiZRunxxBen2dDB1stHvYaqwMJceYL2Q4wzqyWBh1",
  "key13": "FQhaRK7NXnvTLWZFUovojmKYM7mL728L4BLScq1TTpZp6Bq2c3aAnLiP7pr8sk2Th19xf6fTjg1QMKSvC9asooi",
  "key14": "57VJpuSG2NeuMNKz2NQQQzHRiuuyo6MnmZWMf3KTPqWCytYtZgQ5vUKA8Vtz2i9D4tGvGX8BxjGVgqwkiWU5JNwV",
  "key15": "AwMNzBfHp5jus6NFyXmRmivkNvYjd2dvYRCikC98RyGaCnzCzsYUG5iUH5Y6MGdt24qRx4VvdRsTjh3TRwJM31R",
  "key16": "2rLb7Y4bKQEXaaGijkx3hE87ZEJhrLrxmzCQmUn4cDnQqywe9PZ43WELMT659DSZ42ZB81mUCvr3Ryw3kVWVdfTC",
  "key17": "49M9kvkNYnpAp1zEL6ktfFtDQ2pMrRwvve1Mbd2FaStL8g2qxQfnK3pBSSxFn8JCHjieQEDW1gYj9TT6bb2P7mp3",
  "key18": "4FzGwmBeYKR5PEC7QXEPWpBHs5AGgEVYoXZjAnsZw5JJYnYJDKvp3S2FnEBTcUgUYQGXSNEuT1iCwFCR48rMA7vt",
  "key19": "2jDK7jWG7wTJEg5ZAsNxbCcgBVtFt3ykuYskgTqh7Y987Tm1hPDkSMd2m3LGAzDTPjgLfTAATZQizVp2fEGCwCWq",
  "key20": "3s1rnmmGLBT45T8dJoWnJCrzm74uU8L4DRnfUaF7ci8uNjmDBBmtRgncsxDySzANfvUzsGD6qmBfubQabGzWdNyf",
  "key21": "5Yo4C9oEVsSp3gXuKbfuwE5jGHncDe2BYLx7emE6vJCd1YzveqiP3wWp6ug5wChrX4mRuaJwLFMSTXeKvvQABo5i",
  "key22": "5Kfz5sTEsRAodUM4Q5SpJM5KcKAYiofQa11Xjh49K7Ze5sDKx5gdnDHuUf3oWHk77Gd1411PFcJgGkYiGzggBPAL",
  "key23": "2qunSMYR3gXSJ6tqwUT1HgiLJmS4P4oESCnDkKDPiWtf65vgvyAWLpnxp8JgLys4M45bzQXYbRbNK4WPRWGFmTsz",
  "key24": "5vgPntdH2D9a5dJYvoT4dbSLTTfnpSWJAH3xYqWkPdHyhdPkowpmTSxDjPb8uuUEWs5i1GoSB9oVgSfWjz9xFj5t",
  "key25": "339AEeR695dAbYm6nCd19LhjAP92mZuRHSPnyo5REPL3RHEZXhEnrxQnwyrzuUj86DGP5jyiswLLTW7RfgfhCkSK",
  "key26": "2K1Pm2uHfwK3X4d1RtEtt93spW1dcmZ8vJbzLhWQGDwiUxPyHEGgcTaR8YLZL9sFTPUcw7k2evzvRwpdkN5aHGoP",
  "key27": "2epqyqt6BrbsHB3gMN7Ya3mzT1PEMNCHDTRYFtgh361R1yK7zXcpCQgwUeMPptaMkhovvBN6jRnsxyS1BRtNqHiK",
  "key28": "53idUkJPvk7fVFN4uwD2BKPJtTGfRBQsMhauBYBJRSMfNVXV2mXKsz8WKVoM7V9FFuK44qVGsF9EHC3QgQcKxdqB",
  "key29": "isDt44Tgk2ckp8seDZQS6YiMbFv5m2bzz7EBVNPGDD2y2233kcZZXRwnnNkPAN8A1syWMBBQ5Q6pHmHcpEoqccd",
  "key30": "4ycYhtd8fTa7VK4pixg8BByyN1pSeCX613wx7feWVpuTUYDkRt6SmSqe4FutPkAfAuq54qnya9jHPcRLb1LrzPA8",
  "key31": "5ayNWPotdTHUmsb1Ffjm1r1d56GpQLs2iaBs8oZXzVp49rwBCn9Jnu21DAiqxf9WNdCsMqWCGS5cjeAGv51SDCab",
  "key32": "2UbQsGm64vmqp3Rqjh7ZiF6wa7oY4v1Sze3FRT6fnL4CsC9LMaauKLWTzoEV1Ehr962u1YN1as1PshPusbzj64xy",
  "key33": "5sLyEH2hhsbTY4gpzncx8UfcpPg3Unhj2ebUvEePcfn31rti8UWimV7fL2nNW3DT2Bgziw4SxJvfwgd1MCASvYXz",
  "key34": "4YkyHbWAigeh4EG8jsyRh9t7PE5c76YSgSBxyYkYDFVr3zyHhrhDn1MqhZXnzjcwwG1e8S7Ei1EfiK4X9N1aooSw",
  "key35": "4WqyKQaDLAdvfuL2utz5VTrg6prRw4Kttxx2Gdqshi9zzKvf4kUSuLvDt1AohCveuvXkV68hkYEuDAUcLnpbdLk8"
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
