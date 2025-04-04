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
    "55jLbUyyFfSVzwJd7SLGzdVDeojbQJvkT8YAK1B12B152PvW3yJWWR8a1qzqPZGcPX8w2nASJyGF6HKn74xDV2Wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxeCkezdte3SoKJ1gNrZqcENwrU6bwfP61qVKyBcwn4LfaRNCjSHTmQebcU1n4YsSBnRTQV25j5k1HesDBW3dYt",
  "key1": "idQMf9eau8mPEM41jMCwB5cVmUuZM1fqgeuqzr8jTbWnuPbS7v47eDbNcPQjQDV2JthWwhpxzKSngq7KK2sH9mV",
  "key2": "45vZdZkityi4SXgawb4H4kktsSSCdgeNYXLQsRWBam31Nd5jKAV2Re5fbNb2HKVDEnXU6Nr9PXPcuD9p7oB8scvc",
  "key3": "3xfYjAHjgGiNDBRSDJZf4UXX3AqPumjwF5XpjwZsjeLwv9VZmfbGbkCMun2aNGK2aA8akLeesT8jCoDHoTuUvaHW",
  "key4": "2pFQkDzswYwwWvfmAkVuMh22xgyf1rtTKZoYKG5hFvnVieuPjbQ8U891PgaoF3kQ7VK1ZJdU3bBJHMwAHYhTR4Le",
  "key5": "5F5v1VNocjkQ6cqGLofsqk8N8KNVKXA8k3H4do7z8dCvemi3f5RtrkeLW94xTm9zE937Jb3c7RJiA27K6SweTQMv",
  "key6": "3QMSXFAbo1jcbEi3tezrMc6geRGwYQhZPfxYvjfEVvqcc2Vd8HUL1nSyvpLAttUaYhtgASsSYXqV1uBQmv9R5FtK",
  "key7": "5PTjKxRDwfSgAEK7KCQiEKVYtNLJRNgK8GJidQA2rQ1u1519noUZiUTTitQrf9tnF7XoQcMqE6YBEgz92jdkJ8m5",
  "key8": "467XdA8dFRPKDy9bsKeLtC1BD62MiZFZaytdULgGMszSCVcW8mnEQKNdyMEyC76gxkDJFfcTg6ByDpaLKkvGMTra",
  "key9": "5GfSfTkCBdBZQbgCXJPGrswowiYyuBxrurgzAEju2NYze1Z4QpSwix1fsGsJJoaVAKgLbxphg2q1QfD2Va6KpcTj",
  "key10": "qSqGHZx5CXBCDPmQYpRWUMTkqQszWnqFh4Qo6CnYVVMm44G8bZx1fgaHSWyf4gsb37eaKbmPFcqDX7uB3a1GP9B",
  "key11": "41topEq6G7HKVNDb5DvPXqtePAJcQfLFa8JPTrVGoZbieNkQLSGh2wkuB7ih3TfgXEv2HXw5jRQSm3Eu9DCHKRG2",
  "key12": "2VEjCdQHhxmZoeqDzZNt7juugY67BoxEwRUfpZgLRi4ko1xPcirfcwTs2bf1STSaLhLb3SQzhYzPFkoEcxStLMwn",
  "key13": "gJigfmVZ8qti9q3HU2mbfmRcgiqcPJ4JxZi1EgWvW7UiGgnekP8DVbW16WyQpMbixwyJuJVMCdUdoByFNLs2P9y",
  "key14": "2RnVCdKcQvwdomgasHd4V6pcuVEph6km8rK32hLTx5qxSFw7Q3Spx7DovCEBCDPdFANHistK6r3ix2axoedH2JkU",
  "key15": "2yAz6rJgAoMgc7zkfQFVLVM8z5VSBnrCmSMnuQT6XWrM4qgemiXtLd3uCMtphLw9wzSFat8BGj5pAnE4e6MEWMxF",
  "key16": "2du3boSNiJdoB5EMYmXFFnWsBJ7fE3yzn1VKyK57jxTJWF4zTRh7c9u8jJ1d6ZA8g2TibWYQJfChurmSdDxPfjny",
  "key17": "4E8xXfah8wj8GTd9E4XMdD4hDEQ2bya8qhFRCvN4Nmnr513Kp1UjS91vHQ289HwnQ4xZWbNFCzc3oLKEhM7g6WTM",
  "key18": "zCEc9n8QBM7mhmgSGVUhWa6rtr5TyuKdmE9gufJLZtZAkxvR5qyrzhouYUs1MxhhcTb6tegcT8GqqGECd5X5osg",
  "key19": "4A5B9JMP7wHyWZqyfH3ZQku9J5DDzVjWPP1sfQ2NgdP7Cbv27GDZAnwiKEw6L5FrLstKRdebxwfJbrHxjcdv4VV1",
  "key20": "3kZooh65MMR8gvuevK52Ek6QW9ThWHoHe9bErr6rDeAxtr2q7mVdZKs9chxRPbmbtqkZiMEjquKMVv1KfsoEX5tC",
  "key21": "5A4A22hfy5WeUAzdbhDH7Q2XMTYiChPg2oGKjcUihnt2Jcyv6xQF4psyHMxMovrp2QqgjdYsvhU7pVqAdCdH2ktS",
  "key22": "52wd7f52v5f6qeVG2EVDctj2KRtch4xGjx4pdsHfdqm5Rijrnkm5HSKqhwi8GoxsG4e5E98BSNTCA7AC95CEGuJp",
  "key23": "2nk3TXZeB9UKG8kxbmaMw6Tq1p8DdTMss9XUKWmUs6kdRHG627eB7XkTp6rn97nV6bnaJpNXLaLuRsPUayQDZW1M",
  "key24": "5yZ1hZB9HLXiLUHTqg2aKyEg8HCHtZ9Sof3cd1vcgtNbgWohWRma8ctSk9qh8Vr4rscJczGy7EAvvDkPcH77eemb"
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
