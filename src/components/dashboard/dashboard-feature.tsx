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
    "342GpBn4G4CBVXMyCS9h6nzCDHA3TJ3x2VTF7GtPNA48rzsWA5Djcc7ZJf3HBtoaHE5r7bq9yT5RXGJwiCubZYaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qK29yPyeY7JcpfNv4GAcaADAAhXcREeiT2NYYtuWw88CoPD3cb1AVzn1AMY4Yjc865eSANRmvCAiLF1LKAqnNgc",
  "key1": "4cagW6Yu9wsTHKrY6kpi5ZM9QBCbkrGUJdaPTdc8y9KP5KYA8Y6NFjiYXKdaMNEvGdvn6KhJzBGXXG2NdSCDua8N",
  "key2": "3FNV3dX2VpsS7jzDztxc2sJ3fjoLG3t3opv9qnKR94ySjbCPUanYyRy26k7Li5ZCr2o3gsCdNc8Y1h3TzSsCXQkH",
  "key3": "DRf1y2ysPDsBYjN65WEqsgSzW5M1CARXKuGYS45B3Y9NpctMVgiyECJibCxjrfM9MEnwSrHSZ3w5ArLxhcE5FoC",
  "key4": "3vGmp6vgw9XC5ypUzx4soJM16fUGCBBuR1EvHKRRwdeeeXSyaoN4nPLzkB9BWYcD2ha1AQBBcWbDVx37JopF6TP6",
  "key5": "4Q3Niw6FAFaN6igSFxk1VCevMs4RX16tFC2y5Rifta9g46GrHw2bmcGa2fhcp1i7FuzcJST6hDoMsAsm7DQU936i",
  "key6": "79SvXkuBVCGVnoHTgFx9z1oApM5pns4SnWJGEBvitHq2CesFWhWHfGXJW5KKj7zw22Ub2agfyPyTpNiaBgUy2Ey",
  "key7": "5MGnDfdbauL8q2T2SMZKkCNnDd8ymTN7VRyTJvuhTQrcsFGPdf15ayjGPiNJRKczSpTj95GTVn7QckUEwrU5meMQ",
  "key8": "3QHn4uBB6fLndUy8qJiVFMNUQFgyYXz4GBsJX7ceTtdJ91VLhPXaQd2FGQyC8mnSBiLg5Xf6xMezeeBzqrxKArnw",
  "key9": "32jrAmQJUTFDzLkQuvptP6xr9PBh5weSHJgDTeyEjxv8dxJGs1vwTB3nYyin9hNERG242yjfYP3DsBmpV9UHdLwU",
  "key10": "4BfLac6r7jjcYJoCMWe43F8r1g37eWXtWaNLKuS94QCnD2dfHqxpKPA5szNnD3c2y6QC6q9KDTVvR89upp6SgvRE",
  "key11": "4tUk1VKittPHdyYDBfH4jgsXd7CA7DLwC2GcU6Q7HdUQLvZ8QRqpSZ4hEAawmXhsGz7MVaBqyHE6HohvZLmXDRqU",
  "key12": "4nFPnv7WDShAqRDe6PhcMx79Ftx2Yuf3h65heLU8oy3XA9jrqDRveqTH7niaLDDdFm9K44786wnjGSDepESVfVKw",
  "key13": "5Yg9QniP8r1zocSfh7x2i4gGarKHLnZYv5Yz2tbHfCD5inRUjJuZWRsq9PbvUPiEMMwEeUJd18cNDKRjWxHBuEUr",
  "key14": "4sPvuYm3W31ewsn8RhvGE7hgwZ5PyCYDoN22gLwH6oSBLbtd8WbAkqD1wM13GmwtoxUEUgkg6Z5D1icnKFVS33mu",
  "key15": "2kQLharzVaafmJC1YTQJqivxpKdkVWytd6zLix6MY2KHY4z26fQ3kS3svfudV6w7Qqcwh7z1QFddCBRRKGg2wyXR",
  "key16": "4WzY5GHYxbDznxNSmSKVYkNt731hRosH5RbdjpgdezrDf8Myzaf1nWhaaRafJ2KUWiQv8iGPBdFHGzeBdkChuB8p",
  "key17": "3nD5QyHpsWccJAGB1zEDFpLQVriJFqnZTMxKSLHUskpdySiQQVzPsyFRjReRBthnrNJEek3vMrK3kjfadiTDhMse",
  "key18": "o7Vn4xi9dRXpGYyJdmdNyLomLFXyTgTyadvCL7Puwk2Uu6BRYk7kLrpXCmtitGn36bCsL9wVMX2J9MC4Y1DgM7s",
  "key19": "4go9hVwgVgNhF1HUg1NeZuMmYHn3SqTyaYMrkqSb6RyorAVsxMXxmyTTe1ntvbXc5gPoyigC8YSJF1ec4S95yPp1",
  "key20": "5QryqrQC6gpA7NH4wwLnWjU5HbEjrFwvv2LmXM8otc517CZ9LkLvNrLM6jnNmoMczzQ61rFTr1tjdZrMrtnmwzRn",
  "key21": "41t26h1XFqmyuJkBZhdF32rcgTV5Ro83QGxaDjEtJhV47haEnnmNEAaLi28iMDPY66aaHVVEPkZb2ixXi6iykKfF",
  "key22": "5BUrUBU3hTfyfyuP93dLf7QHq52inMtrxoMM4v4rrPcuyNJa9cpHc5GZt5oC8wYwh1DuP7ERNqTC5UXcv9w9uBdK",
  "key23": "4AqZS6RSMfSdpahqCPvvhLmjCKp1BTNorLfmSMg71YKQDQTPMKryfiAYMBJzcSWKnUsUgKY2ThX9s7eQzd9HXHfm",
  "key24": "3qrZhUHPLUnFjuRTztSJ4hi21UXyCpZHvtp1rR1tM5HvVsifUMQXTmookWvjdHALeCYnor1XPkSAVnHqWeYcAcuB",
  "key25": "5UaA8HRjVK8T5GPbmWuLuES2aqr6dSG4uVCgVk1rqvkc74rjFwfzhPUjPPMt6yWUUs81Dpy2L8CwjWjrC2U9TxU9",
  "key26": "3mQpP61wT8nWUHFaDsBQ1YxzQhktw5ZaMAk6DtbEmAybn9v31xk2DcyjppNFL2dg26cNNJKJ65wyLdUCstZHBibz",
  "key27": "rw7DdzA2dfYMKU3DLeESHrUhhqxv3UYVMvTv3kBK9wEas55o982x5KSDs89CZfvo21DXqZkJ9q5rSFkmEJnkA45",
  "key28": "4gWmFf1vsh5HB79K5RUwnuxgCAap4Wjbmn1uhmkArvabwHnFnTtrdaPR4ezfy1jmPWCYUNK5W1UBSZq4jkFXcKAw",
  "key29": "efqussop9AyW46g4QB3S1Y6Php9qmr99F5joDxZsrz4jR7Zq7RBRWdyJBa2SesT6mJoLRnWB3hK82KBXg25BMAJ",
  "key30": "2mMajNUjnSJ2iCYB8gGkmmYMDk5QLd3bdxzCPCgSnBZFbzVvaz58FTzrC2rFnT3TgidvihyxdFtwjpnBqZxJTRBD",
  "key31": "3KJoVtg2KqrJcofujMGjQyShBcRwkZzo5YEiPqs6i6CK633PXStExNc7gACFSwLEfdHvU9XaaBUHvESFejw98Ujm",
  "key32": "2eUSGA3w6X8zeTywzKbZknvmspYQa8EpdHPTS4AX9nm7xxP2N6jzqkTQi8BnAvTNDNfzmB31YWaKjheReiKNWySx",
  "key33": "3iqZWvYuUHx7LZmJ2gUkDDtdfoe5sdXZy2y8JZ1Xj68wTz3hZ9gFWeSsrgSisFbMqx6U3MhQH96VCpTpe3y67CyE",
  "key34": "66Yo3CdrJtGrUWLufZiAevCtQzEx629F8KhSBV4GBdGGAXzASj2jEm9Pgx4DxBduTu4Mg2NYGVxZyfPEspV6xCQc",
  "key35": "4jjDKnJMZxBUXZCv1yAArcqEdEKrCawCqSqRzbXsj38FjY3pYyE925cjxtQnB2uXq7W43yceQrqHUxgNxyjmKn8S"
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
