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
    "yzthacFXtQXSA4EhXrKQftGdntL6xwtAgZb8gjVFA5eT3dv3xv7k2aVDbQnitXDyjt4PjHUNVxKFjG3gLUqPYYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qAP1haTXm1hpaXZXHXdVwrunFWtNCyoeNSgHBA99qJjVc1bSnDPMzjC6JQEQ13HEn8oQ6YddHqc5KyKHTtrkQqq",
  "key1": "42vD1a1n6PhBo4xCuPGuyAMsfRN5DXMgDScSHy8237SG4GrKEMYT32v6QAqyNjiQnYC5XBd3Zv1Do98cnrQa1EY1",
  "key2": "4h7BNwqRBc9WMTBDWyTgeqKhnm5Wcjy2tWAk8M5wBQ6U7P6QUevJDkQao6ZUqdSV1qnkiGnAunHiz5whBio9QNJw",
  "key3": "3c4x5jUwyTNJEQAjK5UoS4AUFrbJVv7hFU36tybb2zyy223Yg4PsprPHcapPTFHBjAL7NJcK5PeAoAvjmEgzJbrc",
  "key4": "5Jsh7TaRYrUyVct5dpjRUQpGFYjrCUc4Xj4Bx1Z4MfG7oJWdT5Z9u5nyQHUKHcDModw1Vf9vgNrM3w9E5gXD38Ak",
  "key5": "43Gi2gKMEBHinBUTT9nM6Sj2sxhaFB4UdVnJWDo2sTWFXTczdXaSFhPWFkpNXZpLW7SeVGB6iZ6i8qck6eRrAxCX",
  "key6": "JfRpjUsF5tTFUthSqjM6A2usLFRv2dmKEgZnDo1VQbRQ3xd7qKKRpLocePKEU9J9ig6cDXQ6PZYns8Tx88aev9y",
  "key7": "M9JjkHSHVMWmj1RrCW4RpHXjLYRAPgxJVmLvARXJfFLsGaujuw3zoqZgHwPyKyHbvuJ2ZyXMEG2WcPEkmcovVFD",
  "key8": "4k28imZuqAADFdAp6FJGLbd6ThNcrUnrMfcF2JTYw1VotC3pSADwmvud6xVC8jyod7zVz5XBPJvpUyJEmevXcyuM",
  "key9": "4sTAhnkw5DYE2BwLbguHMKz7zXrvmn9BLymaMCeoDYRPnG3CPTFPo7WtdXw7gdSCX9peXK8bFWYKLGMHPBWBqypZ",
  "key10": "2rfCrBaUWiwRFbu7AKo2fRKQXBH8L1LCCkqgrD7ybD3WyUw7HTqbyntab9Si1GtevqaxZU8395yuRDBgeo57AZSR",
  "key11": "3CKrG9d2ssnEZ4vEHwH5PoCDmDPLWnHqZDp9dXQqsofCb6W3RivFndB62vSYCXKMQJ94ir2UNVtesZfGxyswtD7S",
  "key12": "39dhWS9Q24Qx35x9kceQd9o4RxEixXxUYMpYafJvaHpiGBPEjLEtNk16Jnh7UwP1MGwecB9k83rXzaSEPHdRXBYo",
  "key13": "4tqFhhvMw4ca1N5aTREET7gcMeiFiCNF94sSebRSRVr2maUpNNFe3wsuwyPwLK3aWq9bqVRkMBZGPMChjUCW9Et2",
  "key14": "5epBY1mtXy5AjvnMJJJvWo5C2vNTLihu2yU4MyAtT7vKnhjaLmBbpVsgHa3Zza9CJrpBZVgdY9BKRTR87ptg9i9b",
  "key15": "MPtyX1VBGdfiCPVTCeVytNJtnpzej8K4hcDM6zp4BGHik1mrjQSvncuHJ3wUdXZTZFSo6x7DHDGnRizfovppXra",
  "key16": "4d8E5Hw9VCiotNTztDoHA3nayt635MszAQRaEyMEU8ttrWAQr3QNZfdNq5yy5g1gbCd227vRtiQNqHTsdrEFXGTD",
  "key17": "2Gqm1gcDYvczCtwAeRBT25hFt7SMcFjfSL5iMcm87jBW7bch9hAFSTPZRB4rCWpLQisQqziK5cq4w4Kkqk2N76yj",
  "key18": "Y3af73FZHUWS6tfeyoeDNvixwWZVFDqmtKrp5VszhsXh18rUECpVCsbJh4GXkGjE9VdWdFhc81g2BbN4HEFoYf1",
  "key19": "2W8BnVjr9BxeSwFCjmEpLiSzjWfgw3Ran1CM6TDSFaQ6rWjFBUboLEQZkRz6ypU1PP3RfBmpYbhY6JLZBAhhoR8t",
  "key20": "2NbqCnkHUESavpuVhyYoQE62LCeSMSfP1RK6skGJp6V8JSdu6WxatCaV5E8jbfWCSrNCytehaRtyKKs4hNcwknCa",
  "key21": "3EVbjrS9SPdd24XtQajXs7g4fb7zHPCNDWZjqJHwHJ1QmbKAEGykqcCiDoXZhZeevGzWW5do5ekFnP5hkbqNgaHy",
  "key22": "5SbGjaVqBYm5ecbH82X2c3Que2cZQkARFvKm71RkiMU1eRRDKJb7LwHDBRXxiH8smsghwjdymDR5JmKGDU3PZrKt",
  "key23": "3XEMq4dyV7Uk45NemW2ohXZcQheG3kYFQyv26ntcrPKCm3PYS8XjR8Pi4nB9JM5PYq8obNyXLT7earLMXEW3VkCK",
  "key24": "GiHFZNDqCZ72PkfkYWAxXaWv31Wrqj8JVgUtvkGDeQ777vvVmYkHWNjKjgGo3Kx8tPRbDGejdM7KK1jXtmjHAcb",
  "key25": "35sNh32WaTvtDwYaXXXH5VcFgo8n3W9oDa1jVkjPhDWApJqgMbinCgJnqXe5UJcwATJLEWBUEk2VyY6sTtULgr8z",
  "key26": "3cvn1zN8s3AzmLZgtaDJLNn2ETQ4FRhDdVKCdmbF4oLPTwbDnF4ZAGbxegfyb2M6YHf9Nrqa1rNy33JVkNjjjGBb",
  "key27": "518uSW8P77k96EbmECn4om97VkcySwmiaGLXnS6eNBYv1RZbnVe4R4EqiCNiSdpBhvzTFykrCjT1R2voDfD6MT2U",
  "key28": "yTAma3bAxf39xD6knA8oAfA3pMi1E2mZHK9GjNbLDLsRmh7nfTXL8hEWSvu1NrYM1U1YAcmSfAs47pNXGdMyDBD",
  "key29": "4VMrNtXEfrNK1beu2EapweJnxrV55H6AHm6fcPwnd4qutrgKeXpEh4ZyKKbgFe3VrUPys94zrL1aYFPKYtiWT6ca",
  "key30": "2PMW9ZXuSjN1WX3PJSyCnwQ8TKgns7BY4U3aw8K99q7RTrmxLBBU8FEt1A4eSmcJXujHG9KvPx9FS7AeoAMofTjU",
  "key31": "oZR9XUSAnb95SCiHHPHevHpfMeZRLdbmbaSoDzJS7Wtn4NkYh7XNFHfvYv7Euoez8fwRk9ShUFrpmbbXTf5oSiw",
  "key32": "kV2qqZrFvzErp8Kkjo65GiEkqk21KSk14uPVnTCpPhphFnj8ZJLkvjGDYcgRFTuTMPQjXdXSnVx5ejmCyDfpyZn",
  "key33": "2FjRafjchjTgKmJtVMFYh6yPRoapLT2urfQmCwdvWmCK1SFZqioY4LC5Y5UfY7yHjaKGBYjVu11vyghva9ni8Nzk",
  "key34": "2QqAcusn6G9dDomy4PYh9fCuwHF3sV2reMnejeJa2PUpdyskEBTxjNtsxiex8mzHeAc2DhTYVsegCSKbTPTBmnbz",
  "key35": "3ubjZKLxeDNCEqxYwrHf4YQo43zutXXQNd2bFqQpt9ZW5jjqRQbxpdGjuCygTFTpU5K42z97Q56Bisb19TzNiaSh",
  "key36": "4XdwSacvdjQG8T3QNZjBh6PUAayDpp6EF6zzryp2EbqFoaHB8NuJfqERNY6u237S2TpTNZyNWxyT8WHEkuyiwAMm",
  "key37": "4sXnE5EkaMGHKWzby1zvDpyaDss86nRC9BQwt7z4E4zpDfco8SZ16YXgehZcbMp4CTR7grPCk5Q4ZH5oJiCPKnGE",
  "key38": "2Mck9hPkVChJKJQq2aPjPb1LebEDcdhWRGQeex3b8RFvDvsEraoRCbSEq4p3G73ze4H4YS9ZTmn2rqEKttAJEPNr",
  "key39": "psbP9EPymrammy6CpPVqeYwSMLPMHo5GZMwcQYQhW1KRZrWF7ehHpp428VY6ucrLbuLHABk2SDHtEcceJytD3NH",
  "key40": "57xCSDoEEtxWq7joDH9ojQMT8bX3M8ruCK5LPtG3iFJLze1oguZTYFJ4m7dUe7QFGa1DkRtUkyf6D7pXH17DKnjN",
  "key41": "3b2J2mUik9Dz9AewvYfiUGeJiqxMnvjMp5Ky81TwouYD9uHwGDKNt8MEFLvLCiXbDfvphMVdgH927GFfS8wwbcyG",
  "key42": "267EwZ4HM2pKrLUZeeN2u5PAiNaVRk5vqKNTwqm8fXX5vfbZ5RvQhdwwwaPX3YX8jP4SwzHN2JbJxAi6Aj1DcZko",
  "key43": "39qtV8Mj5Ab6fqargH3eXHH2QvNW9cKy8oV5WsJXHpx7p8rrXygq871VwubgtCoH9ht2vsJ556Mp3oGtcE5j1dnR",
  "key44": "45TtB1cUgsjmrqDUUMgEg8nZWYy655xmd9VjUH63XnFiwZPhWSqgtQxCtsFMpcy5LMbqWhKLYbKABN2VKMWHxjva",
  "key45": "4WiPs7GQv5HB9Yow2PYdN3kYf3rJiBM6vKssqqLGUbyYYuGPjVDytQugTzsCgV1drwN7CXsA596zmXKuhdqmyov4",
  "key46": "2tnvfASFTAcuhZTC5LafXB9FzLn37zSYPfQDc2iwzi9xe6325iZdcz4KEpPmoWsJav64dqLZ91UVXzAnxmJbx98Z",
  "key47": "4sS9P9rjjvVVsTS83hjqPfJWUKXXvDceAtyu6RvE9Fu4hty4AmQqWw4NouF9moGeB3sf73aENT1fcUFRXF2kbL6u"
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
