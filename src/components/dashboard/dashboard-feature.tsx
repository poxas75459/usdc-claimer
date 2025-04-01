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
    "27LS1vuvvDwMyrMpxyeTKfJkyJ5fzdtaTQdKpkqRLd2NY4M9qp3GfSsUKZT8B4P3agYX4zCJGqxRZoKJuqh1EcBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgnGYjbAnWaEPc8E5kiy12iSJQuUuEi636xDL2iB6yuKbjauVo5A649sVEbGpPEBwsCajfbj3y4wbiohx5FqBbT",
  "key1": "2spGhWPyr4Te7nzhKivLfrBK46fo4qsDEToYr9qWwZaFMqiMFmuYCchCv4aQdX3X937NbPzeCzDdmx9kXop7QJ4h",
  "key2": "Lvu4rgKRLT2nCstw3rPZMSJLBMBQtzxrvVRLknsVK1UX8XzUBHdbWvRFcBmhMHeiptJy9CxXQCv7B7gQEE6PeCY",
  "key3": "48jpXpvWAk9JasSUnK8YjgvBu3PAt6ujjYDzMgQe2Ph67qygSLmFFpv3PLZvk7kbCCAxoYVKyctAqWnjkppVKSZW",
  "key4": "4fic3Tk3qZpJAFQUheMqZyKFknpjkddbqWRSy5v5U5nWDr6qgrH6VqQAVwcy5WLs9EMKUm9q2XuYqjoHtrdtdyhm",
  "key5": "58wfVMMSD4BE6iwMagxXVYMaR2C6ELYojunzULsxkAKHwdnQ8bGt6zXxpg6ZshaWGfJJ7DysBm8f31WfFCDdCCvz",
  "key6": "3oG25TbX2KzRWrYJKFUcCfJFdu8pdnf8fNjbU9YfqRrYbeJmBYsgx1qjwA2gbpPLhXBh6Uc3kSSSzRRKoCBSXpAZ",
  "key7": "4HyxoNvVVsbD16Wg8Lx77nLnqTVekKrRDm6XWWGqCvT6eh4ZmiPQ3nqDezJ1wL1gzp7jWAWowtsAp6vyDH1UriJW",
  "key8": "3Duvef8Me9JeHbaZrsSNNHd6BDXyNaDjoVANWxVKVeSjVCPef9JayzdLZZr8oCCyQwMw1FtoVjMvbMnrAPXcUmnG",
  "key9": "34MNt2bcEk6TbcFETPucNTwXfpV4ixQqL5Pjw4NVKfag6MTYrTWttcuNDUb5TfQ5BKtuL2Jusv74ZaRy1KfpbUiB",
  "key10": "2DBew72nrUohoEHYyJ11B3xHNfb8FgAjRuqW4mVdRZgHfR5qoacEyNmwtHd8DSf86zs76Q9yuh78JjUV8G3AWBBK",
  "key11": "33yw85VTGnDbKAPJdcBrjHxUpspbe55MQPA1aBXyEbwoTm2BGxSy1KEPRBQVYGGoKoqWnw7HGpaEKiybZRHCJrR",
  "key12": "3WS8Qicqy5CwmdrZ2aaKgFPdnHrFsek2io9xZ4NNm5ucj5f6oS5qKS5AhcefG1Cwv7H9XrioBkcTufkRpv6dttjm",
  "key13": "6465B4Xfwoj8Z49dCRPnQykqsv9V9eVuGUBFkap5hQ62sgVuLtnDknt9zfD8gLHmpfhgFqwk5LkB2ifoHAZ85aSs",
  "key14": "2VTybGz7xhJ7cx5DTmMimNQqWbP7dWPoSAkZbsAjMeXxM3tSfdQVFAumRVkRPiie6gz9S333YgL52N1atkWqzdBu",
  "key15": "2ZYXtDV7U3eWFDPAPPmgK1yrzfTqGdsSfxU2jGF7JSQBw62XuEj9NaiwSo1vtFxXXMDGiBmmCDDHN91KMYkzpRkK",
  "key16": "25sURU6f2DzYcpV84Rn5FFAr1AGpbyPpmuzpAfSU54HqzvGgRL3uDtXgSi7tuTEASRQN7TtesaEowiQmGP6hLARN",
  "key17": "62yrKXt3mvSVweanwHivuJxLkcmm8qixyNb4NYpGnykKWuwi9b6okkRaNgRgok8GwnaaMndNtMrA8e3yeeG8QvUB",
  "key18": "2gLSf7gihyGb53iqrT8WPqzCx1rCQ43sGPDn8WXKw2B9iiLJrVQ4j8KntLYQ4WsyUtXpFC7uBAQZTbPjmPugtTeg",
  "key19": "2PXEtMs1sR6UKyRCYHs2di78XBtJsGaY8xq3FaV2MgAUJWsNq5RHezMAfuhMARVEcN5wnGmM7y6Uyn1icoPhzTKo",
  "key20": "3b6A9BbHoJqGhZQ379oKxjm26DMyqywF7VxWn8pWkttNQeTj8TA9c1EkuCfzenbSESHbU3fkyRCJMRvo1CYHtfCa",
  "key21": "3qCdY1AYjpFiou4RAEWpYYdX4oU4dKuRCrEgZdEDgj4Y7A4cHDWijr4TGRmyRFfdLWFQKzoD1pL8PK6L1pksHDfJ",
  "key22": "Y2auPZ4eS3DTtWVu44s7n3Udn6Q8pWWZuKejVDzAJ6cLyqrYB3SuL5Sca7xNd3GHPYysUqvdDnDgEJgidD3mnmq",
  "key23": "3pYESwqAjb81qUyAFvhvoXtohEDxg3dB5U8xdKQhYbnBTiankxSe4e3YGqY5sPVDSYtshpjUj6zHyx2N7neRmcZG",
  "key24": "2R8Dg13NqdkXcMq1PAD13bR1syXY8DZqFY3VMbY4MCJ4pXozwoRqngmbaMSF7NZfdbDL2vqGJdoEBJ5WYyg9xm1j",
  "key25": "5eRwmAUAwf88SnKAazeiMTT9tPKfkxEcmKYtxyj4oC3Va3W6RnuVNVrDm4yuSmkV5TSQiKPTxanZa8nkPCALsKgk"
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
