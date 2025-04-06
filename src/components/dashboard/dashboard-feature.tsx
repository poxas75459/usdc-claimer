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
    "4rt8AYXY37tVn2q1s6kn9nkibgDJTFEFuesmejk1SLJ8nh3ypJBNDYXVcSe1titmNq7QHXCcfHj14dMzmgdGAwvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gLQETvRs9ZDNbwNjfGs9UQ6H5p5k34X1skooj5SxPEesRPPVKsRNUPQJcFNQAJ2dBtVfwUnLenW5UhuHcuHDYqS",
  "key1": "2wXZEqxv9h862pLph48wmW5YPVrp87pLMDq64WZbYVFEfthcSV4rbPfkGQDaFS96UV6ZABqsRvvzyLGHUB4EAsXB",
  "key2": "5TGUsNAGZC2URzHJgiuDug634Zou97icXxoiCvo6Gyq213fYB66GcZ3B1QAb8GB2KP5wZanHUvYKS911H7qsaKUi",
  "key3": "gBSijxSdMA3xZVNwRmECJEV49fjc19zQVWQJSENzma6V2swPHyWJyFCN3U9AD5Jc4hg5rof9n3K5D9scjkh6QoB",
  "key4": "3zHTdBbpnTLpXZADDmtTXJBe2916ETQrWdPym4z4LDHfbuaian1QAiDJyY5FRiqJosQiT5vhZfL2bzSFttj24uiN",
  "key5": "5daFLE3nNXDTjzo5xmqz84BF8Sbk8C4HvzWt8g6Yeknqi76BoYugpZo6tXHgit3qXBbnHEnvRUhByfdfLpH75tU7",
  "key6": "2bqqDF25qD1stvsskUD1nuheTJfpZXT8av2WSSURgtSnx9VYgQBQJHdPsc3rDSjt16pD8XpekFMJLzddGYYCp7MS",
  "key7": "Hu6T3ioFNGzh1i1VQzewDSuoq5YCKwUi75CZws9oSBaxnDjXWvVoXNKxKZUhVH8UzQzGkvoSpu67QRYx5b6ihpD",
  "key8": "3bnvnrv46vGukbYz6HraPAqWuPSP4CFfy6papkBRteyPkyPuZPQVyPjCxUUuC8qK3dq4ZTnijy1VKSRXDbxZFTmj",
  "key9": "onYBjdD4PFWEm5mHSLw11Xdjty5rkpUGuvnr5P1nkwpA7rQwH7Uc523WNeB6daTAqAkiKA9VPNZQbWFrM4zsxnA",
  "key10": "gaACJjKBhcRNoviA232tXaoa9uQw56crVEewWzTLYMcoJzQYGBNVpCmDy61U5hkZj77bfgAXpWtrcPTtAZroYoT",
  "key11": "obGPsTytDxr5pVTGqf9STZbcTY58mKMHH9ueSUKUt8eCvqmdrM9Ydk4jJXemCniszEoTrNjA5tNWhW115tNp5d2",
  "key12": "3igsJznjaK1RowKncdUrXcn5ddFbSBWtGKk36aajreNhxoU7rHLtC4h924QniiLZHqvbfViyKjQ1Lva84Ytx9GAu",
  "key13": "3TN644gsnvwQTQnkrAZymV7VkoFh2bo8XmZGHhAQ9FSMJ4B5kHBXrVs8RgbCqZthqWvSrfsGgznkp4Y2sHfQQZTh",
  "key14": "2rjwywvWi66H7UBfutKVuQhU8Gm89HzJHsacC4xhuVZ9YPz7UQMfvpX7cAwLhdUKSKpT58Wo581JbYHpMtZbZugj",
  "key15": "EN9qCThFVZidJYsMAf4h4AXSXg3dP6kc2QVSzJ51UBFA9vNTu4hVPm1AGwDFhFDnfvsxTaMuU3fcm4VwtxHzVNu",
  "key16": "3icKS8AFXH9Jb8gqrQJUYxAbMj6wTyeJpjssfcZRvNzBWtM9AujSm1mjQHunLxN2UK7M5JbpbdpYT56SpJFqyq9W",
  "key17": "4n3QSFtc6jFRcCAeVmewDH65J8UM4c5Asx5NYQ19UnJE1hmBduR6xb1Ru31pUUncgHpW2XRAtKvdqWZNPdJm29Dc",
  "key18": "59iLkC6gJQpfhXzU84BQNJLUvg56akA9xjKTQdhSwYH2AycQ63nMEmqxEqmzFrRCjXLSWNoPxk5DRJPFwYrKZyrk",
  "key19": "kQSEhnSnwKVbXh7muLi1jABYimW72SWCPQmJWB8XcMk9HWT5VhobXxFVcCHwtjgSS9KktAYv85sPTeako4W3dmN",
  "key20": "2Y8McyNgUx6pDj2vCXiHXxhkPYF34rYjdsMWvKzP8LaTxRXrWY35hvEtD94mSLnhmDGRzQP1XEsqeEgpxWfQVTxe",
  "key21": "53cbvi3VbuXtiHjrtgttj9pK7C66LSwoGKVKCg9HaKWZkH48qbQ6cpFXPFkSiyy6EyF6wiUXBN6sGfqiYp82hTNm",
  "key22": "2AUfs4B9ScHp71LuxVNV9tGB5SrAS3f6zn11cr8obxLLdBehhSqJXUzY7DW4E8LV3EoPjPCCkUVE6Kv7Gv3R2q3G",
  "key23": "3MVv7tfzB2N89Ko693ecBz13hzPqaSVDVWKnyh6FDi248F29ZyDStHJcH5HiDqnfZRYEFZV1jLHH1y6MoNB2ZTyv",
  "key24": "43Gmy5bv17UF65QnH7ZqSq3i2zpNPZL7pzKkQoNuWzVwoWMg9AbFmqchmYuaEnvbsdB59rUKy7qLYBhddLfXQZX8",
  "key25": "4rcgxGF6nyEr7HkbFyBDdQQTKBCAE79K3WeHCm6or6HMso6s5haBXkNVMQRAiK4c7KEgaP7qkFZitdT3YKNgJ5x2",
  "key26": "66yg3keYLBG56HwtbQ1Wa6ZBVRQPHraNn9xExu43eW2w938e2yDE1DkgoyB8Q1ERjYDfcEQ3tgpKBhiPAHAsbVwa",
  "key27": "5anUtQExaw9Ed292Do3X3gpJQxMwZHCH5aznfQU4tXGYXHFSVzzv6dNrKH8qebqUnaEkjaLhi5EZuGqfFidBCp4B"
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
