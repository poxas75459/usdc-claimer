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
    "mrdKm6QH77kN8tHeELBfDGX2fxhYymSuN3HdoueQAvKhbUyLL46YmWiCAZ1hfHsZYo7epyq1XKE4ArHpSUy4scz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgnnJtnXbkswHJYgwCcEAnBCSTpRZNKaLPXqDAEeXT3MNFiTR3YVB29Vu2Hm2nBvF36jDxyFFF2YGBmecxeUzeg",
  "key1": "2EbuBSzmfkHCGCyQTwha45ybVtnJXvM2bUxeynceEMMsauL6eCznfiQb7LnSenRainxMj67rnfL7W73S5mNFeiS2",
  "key2": "3ji6D99aDnJ9EPfYC6QsQSwDsS5PLy2yVMm99R31xqoLQRQjag5FudBfa1oKLuZj1suhVU2w6DsqX98bgpYGypj",
  "key3": "4amcRaYm5LT6rs9oSbZQpZu4Z4CEteXsFxMg3pHSecmCTBkUEHj9cfCzYXcufMPmjK3ekYkQ3wRgniLmjW3wbgVW",
  "key4": "2KSBAC1DWuJ1EVRwzYUxbu1r5A1VdWd2UF1jqbygtd7hq7mv4uyyMtAgFUPf2nejvUaesxdyJUkce45DS5LYZ5A4",
  "key5": "2jFXR9ecABGQ3F8NDXpdJZcbyoH8p3Je4GkQg5Gj5VuSEUbBbJ9yGGPBRw9D9f1pz3us54UHK9LNCwahzGt1uQ71",
  "key6": "iA5nAqVv285xE8w9TZ2THXGZrQrQfng56CpHhz58jSxDMxMXeEaKjsyozR2pkpseueusjpoVTFypVxnkZ3s116U",
  "key7": "2HZ1XbipxJ2DDQL4ZXGkcEUvDdyrh1NQmViCRcFktT5RnDRZz8UrALtv4nFvaTVVX2iaBKYN8NHpMsjAzikwfFWG",
  "key8": "5YwFzSYcDqWbXGAtNHEyvxPpPK7fZGhDjZ1CJUf6VPocSj6FaNxHmHgrwyo5ZtFei99Uw3PnXkAPBTgjWurMuMgJ",
  "key9": "2Ym5FCn33B2kU3YRUr1jsN1AMQQAJwD9sa71sXh7kNqM4zrQWSBs5vRqK3EQofNUMSNVvSGBbHU56X4tbPtQUZq",
  "key10": "5nEYXbU77fUey1MjVssbzavkivFLqDMDQRMK2s2JM6jFQLXkoUgzJ8tMU8ofgYhtXtqD6o27ywLThWoYBET9vnzN",
  "key11": "8bQ525mDHg1zxQ7LVWjK8Pwb1uuk6s7j2M8ihqrCwSbRbeS8SGvzphdRgfcS3x3xGiXisBHSkmt3NUsFxnmFng7",
  "key12": "2cNErDFXRZ8VM5QmsZkkc2VWGSU7RDmFQHmxpntFZirK2ASk8HSvdGnHTbCUfXjq9Tb9qpdt7rgKWeZydJ9iQjDj",
  "key13": "3k3iMNTvat5NB6FF89PaGDU6SSMfk34LspsN6772FJkDJ4UCmyPXQKewPejPBRpWSvTeVsKJwfGfKcSNhyukv2yK",
  "key14": "5cydSoU9gKQr2BuwkXGD28Hs3sb1iBr4BkopRXHpisbnodyQgZN2snn5Sm67fdc64kHcEZsQUWQWKGvsHoFRjpW6",
  "key15": "CGjaNvmeeLcSe7zRwPjfbkrNE3wxE6MwgcN9DZc3icKYsdEvXHZiQsRKXNCWu5wCmtZr3HykZwukwNuRrtf5DaL",
  "key16": "3SjUJrc82dut6RKeGiXEap25ge4xxZ77uFWHfexNgu9y2jMsFkt97vTxn5qgPFeXR5EX2acAn2VjnpfcZgQqfYxJ",
  "key17": "3ogGt8uwEBNPrZ87LABRNkoBrb3Ep33mKSAEN3LtomxZhzYuMHNZYvmPyqpqWX34kYvNyYonRsJv57o38nKuuuVv",
  "key18": "3QYtG6995GvdqzY1eDrh2vofBTSqqAJmjzxJEbseBNSymCEDoJGMSPdPiwrfNgoJPnmF3amNbsxcwKJ4UCRVwBZX",
  "key19": "3r2SF1Goi9thX15W8M3TD5xekqknpeQQ5QP3Qf6Q68nQBqJfPGkr9nk7FhMana9sYJMhnbpe1nUVxhRpqhbyEUBB",
  "key20": "3qBJgwFwP7d8tevvr6z98aPdqAC6uMnMKfgX6EsQrWvUYGWDhyNR91Epvz5mhK8nKymvg8o1AuKz3y9qnDPwN3JZ",
  "key21": "5aUVoDQa6jU4b7hoEFqsWo1DLWHdj96JW7GYuGa1hnhe2BWzejoyhDgSFSt7W5B4XzbxiWaHV7LLgHXDJ8qr7UCn",
  "key22": "3BLTvJJ2pMGFETJp9LCwHuwrRawKFr3k558VADpnu8bChavJ61y2Cjq5oi2AbQfRUMx1ukaToRyxWqFpdPp5hVda",
  "key23": "3DvtTYXJ9ZFcChh3ibiEF6skatnTQnhqjXJWL1j6VzhYStMgS96C5tarwdyKJkpNVpeNnY8LbcZL4p2TFPaiKrie",
  "key24": "pTeVEFaZDRd3pXgxwLBLMWML1P9VmAtwGhAiX3zPzTedHoq8TRksCCVywHoiWUgEgbnRMVxk342vaJQX4dreRdu",
  "key25": "4MFVUkrHUHrYfsFF5i8SxL1UkojSpHEHH9nWoQrxFS65JAtFdbzrP1Xdgk4tfDXKzRHogU4MXC7MFhww7os88Lo1",
  "key26": "2jhH6ohHSehtfX3W3vDvYKW1S8XQ2amsMDjn9cij5sEEvfckfkDqC5MDSy4Xc4xYgL9JWbNb4VT65nRXVw8S3Qxc",
  "key27": "38rUmtXzT7wgWpxJ5JJcMhrWDEpknpYqcZTMiQ6gaKgEqCZTXM3w4iR5VD38d2fgwETe5RUToqCPtFwzZdkrXkbN",
  "key28": "2oTJ9e1gZP9zvx4FtwJ4umBj3fQvLi3H2Pwi7UnnKU24pEm6ohEDUDDNLeTjAFK177QhgLg7yH8PmPU787Gz6ZXq",
  "key29": "4z8bjnEgiiqLmp35BNjYX3H8jXajSn6ubB1venYJ4eCF4CzZeSX4uY6E7tnrYE3zMBzgUXgwtzvVUAtiqzMAQKhw",
  "key30": "3UBbYAk73Y4NygRUN2kcwRReZRWsJjztTcn1ZSCKrUtuCAWQStwzTNmkusWiyLWZDfCqbX9SGSEtmsmvNXkq7P32",
  "key31": "4GC2QEBVYivHC7rJRCfjjMuQQoLS6b9T5Nxd9ohpyT8NXuazKAExgAP16JNFc1UMMs4wLoAgr7SnYV98M8JBCtJh",
  "key32": "3n5SnpZEvJ3x5ZVP7kdgz5APeVPzUsvbAVAxjiSyjnfhDTXgQpEX8Hb9DS5WATZ9e7fKiCfAYUN51a1JBTgffXXp",
  "key33": "4buoeR2sPxGrLRzkFs6B3T5CGyhdZGxtWPrMGcNCuETXJZPhLLiE1PHc2x3gasdCxZK6qA5uQpdwdhCxsr5YGZdJ",
  "key34": "5xytzLnsDEapApi8ZFeaHgpk9VfUctvfmvLwQCeakm44YBGXP9Qu1aWK3yr3DK3PboVBMbDMpf1ZbgtpifWbTt8L",
  "key35": "5aqaY752WBHVRCbRXbtJGSEoKowYtYR2USmjUAxHHhpUGyzd11xocmDLpc8Mai8KrPzktRu7i3wAgytQYYAtKrnU",
  "key36": "5jrfUJVMiuE6XRytwoiBEnmW7AWD83oZuYrssbXgZixnjeBE2KLpjGNhTMXMBZmJ6JHPSb8uUPSBks9h2bb1HYzA"
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
