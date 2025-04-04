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
    "w6iQB8iZPkM9ZTCxjirWqA4TLAZtih6w47A5M3asEnmumdSwj317nsv2FGi2Dki2Shj4Yrc3bnK3cf782xQjtAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5bfS2aGh6TaNBjBcAJpzdJTmy5fziTHFw1xoTA8MLZAXe9qKNErakfXru9PwLL7RByU2HrURJCwcySZ7qBzXLA",
  "key1": "5F8EYjvw5US55cCTYrD3dEPnGiisviR5bcgwdEHbGLYWGJcg86sLSb8q8JYzSwTUoriYMAZJ4qyFdvHsStEhtqJA",
  "key2": "4opDUogNdUx5XfpwMYyTMz2N48TwAnL1NU63FdGWM4Nhwk8tmngXMXu7PA5k8TcpUXPQnr1iqC2bDgigTfJjuiUD",
  "key3": "47dRL2ZjF59hqtnErt5urjwYkRyuKVALVmNubYung7xyHNLNcJvyaxunyCxjMs591Z76ecr9ar5Utqsq49CZGg3t",
  "key4": "4ubA44yXfoPGdb86PDak2kpi9izr94CoWHMXD2QQDACsvL9KAogB79hXQpmbKTBZdv8L4UrqF42Bd53AmSX5gMJn",
  "key5": "4KeFmb3Sxvu7TbF62dbPiwWKaUttF43g3Q279cJCs6TZjyjprysN277x178XZxxnJmkQHLTgQ72d8hVb5qzbgp6j",
  "key6": "4xSpXwS2dA7jPoz1wosHYmjMdAbK7xCSs4YDBb3MiYycFfy8UBUaCnG6NQgMewogX5KuP39zKY2YJpPfznCntnnF",
  "key7": "4SYqd8TB1fxMeSbFPAwmhG5HyNj4s7CTFWzZckRxUWzjRWfJAzsr2HMAWEY23CU3Zm5xjhutUAKkZVsvzJ6ssCFu",
  "key8": "UrWSYr2d5wZgDvtAybjAWHv3nezM8oAJQJAtNxDuarz5aqwwo8WGWkL1guztgPuBBRNDTjLz61Dxp3SNAsiKozC",
  "key9": "4A9bGzFvLzGFUcY9CVG39UPKmaGFuthAS8t65Eok3kdxXZVC9PmMNFc8e2s8eUKCpqmE9zDEKCwaEMSY4hZ6Cy25",
  "key10": "46murPfsZ1fe4YPXJiqNoePtBEceaoMtZWGGFCnwrZMATadukau3PpTX1CVq8PLH3jqtJQ67GtDVke9Wv2Qdgs75",
  "key11": "riLriLJ7SHBSYK3GCKpipnd4zQVp6TyiCPR9KHEzLkmMTkpAwfwYk9uzPB8SKN8xzfrFUVkzCr8oSRa8NWoF5Vi",
  "key12": "2Nj2ToJYi5VJMwqkMwxdr41MisF1ai8nSGm7vPd3taQzqbSsLUYeyKyb6K6y3czv4HHzzfbFHJBFHAqGsxqE76Uy",
  "key13": "2dLCEp37amP1vtrmBga7YfKuZNb88X9mgWXCVnKZirYjMRcvLsPcM8D5K1QqdAy8QGFWP5wFvkAVKpcb2RD8yBCT",
  "key14": "5Y8g9ujfqroJcqz7cS4sgPGcpH95bdGn7p9C4zUMnFJ6K1YqsjsYoETaA4DYLx44grt9351tUSno1qeDgc1aPXK9",
  "key15": "4imxs8pni1VLBtBudVNdtWhbsYW6BdzRSnhWAVcUC8bFQj3yi7bdmdMuU8nAQXnWxfC1ahsEwf8rXgA6vAmcDznr",
  "key16": "qHzSXeQf61oidmNLQfuCQFPBGveVVhprZ79BcWfM6Siqfz4CFTsXtcypJeWK6hXAw19JpdFNygmdiSUSGBCXA84",
  "key17": "gxYYYndeXTp4awnGbGywuoPjPCkFCSpzeMo3FeudeTkjRE2gpMf1WqUrUcEDWu9WzZbHLLkZAGvcitEcEAgrzwe",
  "key18": "26oM77cAbkj2Pt3xQrSVd2Y37eJeQGFeuo3aRLTEd3BQCL1LgQ5LZfsLpV3g9PqYPnfs5j4x7wD8Sxr1u1bBHZ6s",
  "key19": "3Dk8uNC2PbksdaNXi4kNuBwDkcWsvMQmoDHenJkwN6JurD7SECbVpr7fBeaMYNe6os8te1LebDQyS7xV8GLaEPjS",
  "key20": "6uhpD4eGTte8kfU5x6QypaJCAHXKAuadD4Ur9KXXyrPrQUMfXVueXJwTg2VFBYhHrYTyn7UAzasgBbxkgdpQT34",
  "key21": "4Wr1jVjPAGMyzooh4y1EDm8eU3tJevHKwSeUwicrhJzZAeK7hZ18HoorUEMpu6YgcS83jTB4UGF4HmdrdjjCnk8S",
  "key22": "4uyLpEwf3D7KxUaNWSP5LwQRX5RXzfQ9Z7vjdXpPrwML49ea2kHHrZHiRFNCuWB1WgMP5hR3jouSyZwpPxzvwxSm",
  "key23": "7WGJtngMoRRCrUyQZi6cc3npTm4vas4QE2djTQRdCxjoqxzom4mucxSRmUDGfrLo6n2X4R5sHF43pw6Q922E8hV",
  "key24": "4ZyAsn12AUyNfdqniPYzv4ymW2uYdyFyS8orFhdsa8nY9k8cucJEYTPWu2opBzN5zcqwJxki4aKHHug3Vev1qEYN"
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
