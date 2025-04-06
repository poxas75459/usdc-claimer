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
    "2vepydupJJSrk9DyT7GTkGDiNeb7vonQyHgSEkdLyir5utfozdtHLeVfacNui4Dk2DJnRp7PygjDgArQhju8bMEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2exALi2MMSUGCfY7m8Zd9XmwLWyy7qJcrh5Yy92CKpwPChVoqUSrjtnBDmQupPa8GkJQaUGTrMkNzagXYnHkLy",
  "key1": "4PCdGcA98bXuW68w3K7UPrakUijj39JGSucKFnM7K8m5Q7NaJDoSEL8qcTNZmRRUtDaXQwQj44Y1bMfaX2mqK7Hp",
  "key2": "Vx5rPg956W7vNLq47RRAGhamN6r6vhgxJN7azmwgW8PaiavvQ6gyfzM7KZ6qhcC5YaTSruDDQRqRDMmQRAcxUrL",
  "key3": "4ibQDv3JcSFsg3S2DctufrYnGeaydK81DczJx9JkbFXrxDesn4qshHieFvzDNnRM7D2R8RkjuUqif3mj1A4rEjgS",
  "key4": "53pMrVUNGa3oDYC8pxNcGmF6DuqBEU5LdPBFkycDkRSm8sjm44oLyHWQWEEUSr6TsBU7hZrXb9qXyySo66G75exN",
  "key5": "Dvb6YJYDQvAsDPixm2DBomQdsjVKyCxwoWuRHKTddExoFb6b4Wtvswn9FtywCPe4h6d6tZBpXv4cukQZVuBeUsC",
  "key6": "2FhYfhzHmRfDmCYpZ6yNW6JjERjDR9E9aoZYsaWTbZoM8TsKNhb6GJ3wSkHAUqZvWnCM6ZcRD4ziePJbaUM1jgys",
  "key7": "5cCMA53TXp9r1rzexpYLAn2F2RbBgstgeMmqPtyscDkygEA5Gi7vPCWJ2Tx2W4ExcuD9zLJZ6imw97P4mkAuWiTe",
  "key8": "38Roi1bxwBtSDiEjhYZB6H1zN7wkVT89Qw9ahjADouXB55uM3SqEBKSX4ah5V2ZCY9UbaobdXEPM25fZsuSitSSW",
  "key9": "bfXWqvXhKp3Gp3xRfuN5o2TDJVWqYErDyGyognCmFsTHoDF9fohbsNnWbEgwxkRac1Ex8a7ME4w58e5Y2MZ13cR",
  "key10": "3Hfico83ZJE5uU8wMhbChhrf5euWwqmtfy6fRDonQTYiTpz29RYAmhExpP4UtunraBvUejEQzKfWXFQWwy41Quk",
  "key11": "4aPuvPmtEDBQmXGUGiyrniSuMUnTzVACGR63xYNnQPhncKiU7pbPB9fJ5kKARbJdgbwoiNRe9WDLUaqUehmibJXg",
  "key12": "4MC2AZ6gUbf5iCcCs9tHYmq4HNV8wDRiYqfLE94MuDCjCdRbaCSYKceQT6FnK3ocVnjk6n2iPERM7jdYteoC3HMf",
  "key13": "2C2G6oTqJrnmtf7z847s3obQ4zBKePEMz54wXPdrZAv7VeZYhxbTGMyNKBcHSUC8NZJfx6d4L7XCThMzvnUStpS8",
  "key14": "5XMRi3B2gzqmHPaQCQNNciX2vSM99TBtatKrJk6X3CDq1nAZHEQprmfcx2gu1YVmvHrzuADshEZstv8f36uzH8JN",
  "key15": "63hXSJPvTGq9DsQSbjGra6LQTYmRddvrrLL8FjAxfn2cEW9sGten7WaJffv85dAcXqzHBB5jwsn12Wiin5a1DuM2",
  "key16": "2tUrvBTKKaGCTDN2FmeWDJt8vrLtXyzjt3KfhDKh11XbtZUAiWdMAoYr3jtBvXasHwGcqCcm4Nzr1t3UhPhTBdiS",
  "key17": "2aWKLt71BdtgsMPZZ8cFKQZ85MLdCZdP19Rgw2vwmN8kYGeNamd9sYQPtmjUk3ZtoCn4cEhAWrk6wEokskdk335M",
  "key18": "4D7QtrDUjifLh5N4QmHz5qX8VsVZv9eaE8FLCHPw6mLUYpen6Chiwa8Hae5ptSBUPUAsELvNR7wZVt3HtpX2bazB",
  "key19": "5nULxbM8Z9x3qzLK5uFUnkiwU3RFDrE2jh3DpckusVoCVPyg95rMvSUJnE16t5tKYhWYYLkcGwkaHyPabH5RsNww",
  "key20": "453SEewBewc4uLrSUZHHEZYSkJQKhqjCV1pNrYcGRQu3j6QwMLdodGUi3iYBtCizchsRBbngSnHa813DzN2SL1UC",
  "key21": "2PeQ7daDJze8iiVg6ioqAfGd6o8qB5pJciBn7kMxfsLeT42nkzGRfYqMGAG9vwJH3dtrzct9prSPhVuYD8CnL4tc",
  "key22": "2pT5XGVeRbh52MdyD3mpE2u9ewjp2Pqrsoue3kzPaaEienm87oZhRu66mjQsy7diS3TwCjp4DK74dtCxNkEWpw6w",
  "key23": "5foSYH2C7pmiUcvFTdkC4b9YXZ64pjnY2qUERWBrpjUo88usLeUiECpSEEbkRZiS3hCn733YKw9ohkPDaqrYPGY7",
  "key24": "4gcCAJdzCob5ExezfvRDKAovy6XyXQ7niRH9ucxiW41vcE1ooWb41mKBveCHKVFu4xmM3roJRRShFJFtyracy2MA",
  "key25": "4B44GN3jhUXGeD3tiT3aSDNzrWq2Ypbj5YrCkyqBcWgjcoHtgZaKmw5N57FxQ2HkfCgD3nmprizKRg6F9nuAiddg"
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
