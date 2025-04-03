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
    "3jKLzBPknJJeqAz24KJs71tZQEpQjK1nwQig2ibt3zgdbqsdJC3ER2nDCPsFypLNetDEXaCrCsGsugeTDvaFfVic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N6CehUNk5EqUnLD9U3byBi9aHSAQMLWnmzcw8kgPp1VNdZ7L9JpJDkb3cW3hix5ne6xXFrKnBTPViGH8AyWz1Ug",
  "key1": "36pRn7c2G3RfP75w3hsoTqqfku9pPiSKQWo5sGJMMk2RvKHAxLPhxyc1cspiytK4XCwmyZ8hzbxoNVXrqCYn8QZQ",
  "key2": "hmEGZMTWmFtDhju7GC1PNgtKbpBqH9fmVg5AQCWyJCVG1McenBzqj5eKda8RsxUQDyZZRGHfyrZ8yxr3b1ByMXU",
  "key3": "52kq2R3TU7HAEM6VHQ9PqSeGere3hwzFBCPCSwusQutWmnvTteEi4NwWuLuREyLVsMHrKdT5kPdEKwGWW3hvbDkE",
  "key4": "49jJMSgxgXbWvevfJn3KcsKVyzCKALe2kDiULLKSjkWLcFXGb2CFXo1iXFp1wDvgn245VKtcN9A3bX8VDT79q2Z",
  "key5": "V9WLwj32ZvXPEbWWNpDkTs4GBh7Ak41qzF9SopbM9SLoAvtguVUJeNYdzSRbqncsWBywFknADWh5qi4Mhd9GqQJ",
  "key6": "2avj8mqC62cnhHZs2CnZuf7LkbL6v27HJ4VPBhC11VcLKN3CAUWQCq1aMy7RNotcZ5jLoRb7Km4Xvy2PfmjS5waP",
  "key7": "23YYg769g1SNwxLzvc3BWHwXKo2NHL5pw3uJdq6wB3vGFxBtwvNAxmxcXm4aprQEKuQ24w7SBamBmcLFJWu2SCqQ",
  "key8": "cPYT6ExoS3kR6hNu3V6AWwFi9reEqBiYPSyvd31WHfoTpmD4dixraYcF8ZoUnS7JALUk1ksYL87ioNmrNgXnZzf",
  "key9": "3TWX7KSF2DJQkF4qz83i6VgeywVpSZkrixVjL14tNXAfP3QUaKmetg82FvfwwcV4Z7u6kapJnYnAZucBxx7DVNJ3",
  "key10": "5QAkETcEoY4Ymg3XS8y2zkoSYbxfW1P6HLdpDg3fPJsB87fCNo2kJx9gp6wnyLSEzMDL5C4HYLdPJiq2isqHSEBA",
  "key11": "67KDnvEYWwmPskvHUtpe3ba3tTEM4ARxcsfuBZjgi2wrx95xaXqdCMbGq4war44ePibhSCVVxysojefr77bAwBWM",
  "key12": "2x5Nw81MrXmwGi8JM2R6Qqjx8FcMM1nbjSQ4S8H6umAcRWt9rbTE55qpBVMz4PGy6ciAHzDGKHrgubYpW4BWX9fk",
  "key13": "21CKb6tfNV9cgsJcFr64C3DZUkrUnSfnVdSyb4Ye2cGFuTrKYRsPaaFJBNkEV9UcMbhAQWL5XgMeceywxabxmocJ",
  "key14": "5sKwvikF3yGo89N1tm2qdsZiqGwJLxXxSbSEHr6rwPD2CU2eTj9ooPSBSUpU2XAnJe6LC2zWHCHwBWUv21X3CkvQ",
  "key15": "2VLNwrTUeaaFBrwmzxSpDTJ5sqrneZsCBFuF5JZqyUMBGYaVnMBP2DQgpHEpVd7HMHGt1EkhaV9QzW1WfSEnyoc9",
  "key16": "4TaZH5RWrc7pTi97C1kmusdqLfKWrHmHgE4LF1j17QtuBDW2yjL6nS9aVSPAftLLGQTYJkqkoK5eNq6ZH45hHVE",
  "key17": "353fFPrKDsQ8GRMJZ9xWCZKfMa5CvB1BmJ1XTGfyQfc2BjE5c98Xp55wzixcL6hmu4WHRde4s3NexSLce7DNMkJb",
  "key18": "6i3qqTYnTmP5i79u6WrQkwcNt4cVrj58kKuYzdKqg7kFJwNgdYJFhs6CstRJ4bMMekGEG71Qx9etyQbLRuVyrB2",
  "key19": "2TC4dVERxcZZkdYnHLsaCDcKzGC3dMvqWr4ZZZj6WftxZG9PnY3gaKu9Ao3CMJnBnktMq752E4LW7yopf6Nh3SVD",
  "key20": "5iUBN1XyydCmdLBtUf5UMJvxKGh1cQXgZ39q7hCi823xPCiq5zRAyLVYShpYcuRuNUQnhZVywuQo3V5RHSFL4tmd",
  "key21": "28ktLYobx7rZ43HtgHnqr58KFZ6fuFxsrCKpZdpzKBF72sCGiD6s58S7ruVfZaQxnMNeeep3tVefqy4Hj6GUujYU",
  "key22": "RUkvqGtjvomSLbNzVT9XL2y1Vq2Sd9TD1reXMyV37qwcAETK1KabjXMSvVht3SCe13u431PUkaGFvnzSVoWVaUr",
  "key23": "4dan1NgyWWBgj4t4vdWU1m8QZW4s8U32H3UGcQSBGxpQwKuZmYmaqptvTrYz1pmNepn3ar6u2cp1mCq6YmvDVnKw",
  "key24": "owLEdxJEXKyPfW7GtQ9wFY8B9Lx4gNL9TTsxZXN4zVDzsMj67zbRUMszgzLE19sdg4W6CTqDnn67iQ3abz4UBEg",
  "key25": "3SRTcZjMWnSsEwZuuTZvsF9TBmBVBzbdfqvt6e551dTzMRoYbor2yp7W5W2YaXgQqyZRK4ucFJqJQhLahZkZ3hov",
  "key26": "3sVXoKsDTiPVc4sFKEWQa68mrkSdTVgpsKkPbfWhmzFyYQdb7kmAcVkmXKA1GrXXBdQwRukz6eMhaDwLZ26D88NM",
  "key27": "4PUFDiR9Ucc617zYn8YspvE3m6UQrzCs7G1qUCbPDSparEwbvEScRkMCqM3icQ5d8Z8xuHDHKLPRXCQYYZrQeEnG",
  "key28": "4Hy36YRhmQ1EkkizFgmMdJD318bYf5RLmwhJxtw1H8miBfPz2QEKwdKJPATVBwURuM1PxuwuLidCU8MNMJh6n8Ey",
  "key29": "6717zSjNcjKAJYokHbbDBJSE1L9Fy68zvVAihtniasty2rzoahVorepQehneBkRut7vWuQME9dHMdsdPCjjntCrx",
  "key30": "2uYnWFCJ42X5defYSbpqAc9CTCu7kzFXPV19FAtEPRbh9XvB5GKSJu4fh5UPXCLnmbt2Df2hUWsgThdcKkDQhj7V",
  "key31": "3XTt19gAW4vqneL8fMsezWZjVUjZQPpxYj6qq4xca7XcUQRfC7B47VGTf9bZA5fbfpDkuMBrDoRN34saZSq3pnZT",
  "key32": "T96KqQ6zXGVwTLbEzP3ije64A97JsGhzDKveDWUQjEx562SRzQaiG9UNmodtw5KhBMDyCWqYt7xAghMiQVJpFUn",
  "key33": "3MdUt5eHRZTyFXPGqZw56TkaiYddCTXsxVsxWgd6mwkJeCAci7GBa9aVjDvhhSw6MVkwegzmv6yBLbRMcUAtJ5p7",
  "key34": "3bpSdNcZ97ZX6k7GyGJHuF8NqECXWVG82SKxhohTrKbUjJZZaxDfArfREG9LRjGeqjVG5dWmTEEjSnThjKVVGPwn",
  "key35": "2vwJEmi5P6fxcAqGsUABTqkGvrMJP86hcmT4fMTvSMetQjEzT9yaQS4KGKnbZKEYJvbu5Yxcv7AdAopTtsMV55aw",
  "key36": "3jbp28jh533qH4kwpMgQ6oZDxUnfwsjgysMf5kQcrCA2QS2eKvfN1Vkdj8WV9F46K5wX97PCPpQnmRkejok9H1h",
  "key37": "2hzMrSwEyydcew7HZFSWQHBRBNc6AXJuHAj2Wh3kAkZQUBFkyoFeBvMBAfR2RDbAvXJzinxiXbPUgMJCh2uPfyYZ",
  "key38": "3Krg9N6WaPApr7KT5KurgUfLk58jT1ysDYf9G8rXcH2UmdA3S5DEEoPqcBDPMdCJHEqrzLMqtVgHTwpaG1KY8AKd",
  "key39": "3AQHYQwxSbT8aDkFmV6foub7aN6vGhkfWTYHJDTwN2JTstA7UvMccUdYtjWzqzQzMqRPEPg6kEGTZTivrgwQTGvj",
  "key40": "5RFUPihpunirTwjoApxu1m9hMZA4j6djGF6n69pDmkNinsQUrwVA17adiZ6sjMzT2FGJUWwxRMfckTeFi199tmgR"
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
