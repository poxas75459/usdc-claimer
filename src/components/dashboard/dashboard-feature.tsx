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
    "2zjXFpebDo3tHb3wFuaddBCSgFS5jLCKLZBRi9Wv5piSqfC1j4Etg8uo8jbFLQQaaHAZaV94CqzntwspSXbyUFU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4pjsc6kqXoV77RSYqwtnjhkds19jbyi3RndVsAYKDRX1iSZ8KZxEqrtgdJK976WaiymAZQuvmZKroHNzBU4oJG",
  "key1": "GcV46uGF5oywvqN4h4gFr4hqYhSDp95XRnrRNYJbekomYB1WoPZje52jCXLwZdwYDYxqrVCZt1cTgJrU8LXP48y",
  "key2": "34qhvY8uiq2ejTgDpR2uAquAk1kdMBVHJ5dk54zj4Lut1WPwAbBer21pHK8fiiHDwPYdxqBHW5kzUNo3G32kcPPR",
  "key3": "2AchK3XJRDeX2ssGq2rLGPoPgGA6bz2Vu5iiXymjva5DqZjEDHUYprQf3e59AMC2UyQqkc1arsiUYxNebtRA3abQ",
  "key4": "4SzKDB7TJBPqoLRzHnADWnV62Bwdfy2ohsq7XQnyCHGdDjrhdexDXSaM7rNFXdTw3XgcjudhtsSphgbLX2dntGPk",
  "key5": "5necWEuwWv74HJUNZc3qD6EkZmGZ1BmdD5ivEdLpR7rKqd6BfUZEtGbhkPnXyRhC91GvWjbtSiBHywYd1yf2vSs3",
  "key6": "3zc9fZK3KVca1AdvHzm3wDRkiNVcFjEJyFrcP4k3dKyHF1MqqQi6J5tFy2XvBCAAkFQPCcPrCKBD5KgsafAmZ2Mp",
  "key7": "3Me5nsxooLp5D9LPpGqUWiaZCpM1tykBoLGxfWw11h11n2d6nQcAH55ioip1sH68BJen25dJQ4RqSCHYXhjSzUXJ",
  "key8": "5y2q6XEpCMuioAzbnmtZ2cqTN9YTVUfYFhQDSpwtRGuUGSjzUojahFLAFQ7xXSoXMPSuEtvsSmf4hK5h5wQbW4Yi",
  "key9": "3aEecAHozAvmVsWHLxkVzXsSDvY8EZctvvujYFc82whrhmcMJM1pNRzHUXTtsdbpA6s5fuzFVtiKmxTZ6eg9UNdP",
  "key10": "4oygDQRjsGBBnbEghtAhhVWtgFWguSgnB2eRWbZLUEcsbR8z6MMhEsyaTSxVAu5Hwv2Kh1oGPpmxtDGvUJ4jmgKN",
  "key11": "2DFKLnhEZsARyxtHadckmAa64QJGKC4A9xGJhQtDk2cSpUeJLtnDNPPbsarcyXKYwRThFDt89f7hyD1UT1E2GaSo",
  "key12": "2gSMj6XBTFEKsp323yq3PxpZy6YEdLPRGu7PpKC2rvk8HpCv7Z7eTHPnP4VE8BbTgyjM2k8etr8Y29QFCyZz3qtZ",
  "key13": "86BZnJGZGHxiHGBkGKwpfE1q52j3Y6Ddt3ksmMi1eLrqZ1uAiTvkLkuQiPBp2eLkfYhfZDdZ8D8EY6jSa69nPgs",
  "key14": "3GVsKAFnUPCetPfQtB17A64C7kRNbofX2tM87ZxVBzwcwNaYJep6jrDpdSBbVuocrPBbHTbG2iXKGbmAnLZd3hP5",
  "key15": "4cT5ATjp1L7aiFsa8smDqgfSJRY8qBNjkXcaHBfaY6L4hQTrwPBS2Er64bJs9W2R8iFyXNR32GyzfmPRYBJhX6kd",
  "key16": "r3DExU63dwUSL9mvSDzyVGibGmbmSdzydAGRp6sRBw5eTjDYfDVdrUtw181S1v6N3EahR9iZ1B1NShqSLi78CjB",
  "key17": "3Mkm48nCWz6neM27k15kXYgNQYrz1J5nmY9SZgfMHZG4NUFHcdWsttZELFjAWAAVvzrEuhSLdqzzit3HMgY1w3zW",
  "key18": "3s2JtA3TktWNd7DHKgTYK7UsAjfQkLSfjmMhdiHBqLapg4jNTnEtdFqVGpPXio9QcxcbFD5YEspmYEhN6QMaDTFE",
  "key19": "3STQh2nmzWqxhW3r76TJ9aHAME2dNtikx9M1HVZ2kiRVDK2ZFxECAYXDv7CgX6Q4dBgGeJdbdmwGiRbyZwGvKKat",
  "key20": "3ahBZKA1zMh5CY2McBnN95C7LvXU7JwYYHPQwTLN9zeRuBLkGbXCFTTiroVZA8rrppBRPhQofdshMrjhchnTLYvc",
  "key21": "LDBe282HigpXHsvxAjwhY27A1RxaS2ELpeRzZj9EmyGQd3tmdUH5dGX9R5ceHerZuk9ffN2ES57uvkKDRBMhWQ4",
  "key22": "3DBz1drk1wSw8fFR8KDG9AQuivNvNkyjyq7n8L2iPKEYKJeRSpMa3boh4U78kRBbXULWZWYNzPUboZbvqtR8qw5k",
  "key23": "zfQ8wV46L29ugFCJ3SzVXSBBTiMRbprg1CKxFvQArVRn2FcKzY8BKaUQxfthpUrRTPJdUuN6rm5i3jqwSH2B6GB",
  "key24": "4bvsemVNULcSyXg3XCxwZHrEZWvT7NPzMq7o2gFm7UbfWyKmCDnWVaKhVkJBbjYkxzqHi8KwoQUzE4uLhfxKZeK3",
  "key25": "2QgeEpxeoXFPHDDYcAvfghatDFm2XVdh268jLzat7cdqMgnW9HvgwP1ywUPPwUnXzghZo6w9Mf82uMUnxMvmxRuY",
  "key26": "3969neVJVfxuQyN88WE8cmXjE2PPRtyZVFJZsGbg61YXVPYuGs8aGd581CRv1LpJkrh7vLL84mteUbM3Tfre7HD8",
  "key27": "3YzsmTDHVMuMhbKbqBi1TaUTaXymRay4cyJvSxhY9YAmcyhZoqgXXXnwbt2A3sv52WFLMW2JFkEXK2nbH15ZeXQE",
  "key28": "CQRndJafnbpPvrv3LpSQZn2jEAQR2qwVn3vb5nC1cSFnkUY37NuHgw4B1YJ6qzEDZ8pJakZNmCpDYtXB2EBk1Xn",
  "key29": "yix4KvXrhKYzCHczKYeAqAQgSW5ejb6odhxpmWGLup4vMWBW9qBuz1Z7KuRsvhDJPzu7oRTsspXMa2q85qmRmf9",
  "key30": "3pXJH3fpxMEWc9o33iGsnUNUGaxmic1t67qbRj7d897Qb5L4iUoUkaVBaarUyVrPKeKJDLFprYJBq4LJqqSUBEwc"
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
