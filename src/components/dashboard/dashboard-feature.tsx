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
    "5sksorTzfVi8YEiBKEyCpQkBEVZU7yQnR5yoxwpeZwoQbuakPWhiinDt841XREKq6FP5NbhDfrbKXrF1am8HKxVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CVCi2yArVA1qrDoR6wFs25kABnNU85t8DKeHUAmnHTCN7fsogGMMTPKVBbiqfoaTa6arLxQNA93Dabsojegb84e",
  "key1": "3YgYzN7DnKdyiaSxf9SXokHVtyXnwafNcoAYfpCg7L3u1M4nNVr8HUHsbRvzDdUNoL8X1fHheSrzZGexrbAnSwzc",
  "key2": "2NoTJMqfeSp8ECoBaBJibCSDS3ypQ5QuBZ4VYmfGDJ1L5HRTcd1VNHGuAfGUfy2YP8xCNz34VvYyk36HM6jBgNBw",
  "key3": "2ew8hPdFcb2Nxo7Am4mpd1H7mVLERLcfQXawoUR8N1HvaedZV96EFpghNVXN3zUnmAqjXhmVHfFiv6owf7kVSubG",
  "key4": "5vcd91oQUdeYZedzs9MY46io6q157NHvMLhwzLNRoNW3jkZLr1YReWMCr4CE4WPoUCMNXyCDgNRx28x2WrM99VdT",
  "key5": "5c8fV6keSRyo6H9fHfK4MLxLTogNNBXQECehZ18oPYeSgejK8jwR2PzkN6My7rvmK7ih6GQ1Mw3PgbPU76V4whoK",
  "key6": "3CcVJZuFKigrHfQTxw9LsQ7EZDEpAe2tS9TnhvqAwMq25UqJFTdPgvHTtrneS7ZWKZcqW6iBSkQLSwSUgVuNCmWS",
  "key7": "Swgx4iaf6W5EqEDjRNyDUTME2rTJLXMFthTcmsarzbL5wiE9qrki7gPx2pjGDW5mzeCEYtezu9NnS2SfcXhY849",
  "key8": "B5QdzSzZbne7iqXBjd1FS5TsJTFz6Y8THmWNzjWsBVRPoiiPTqEo7qSV9mwpyDFgkXMhenyGb4KPVt5fddrQ1Rw",
  "key9": "2WQPB477WSTum6K6Q5BgtLBE3pV8ejwZB83nguKQwcAhwsn3yTVEWKzEWWUctXmxPUkRmVvskdaQPT3qvqi7PJ17",
  "key10": "dZqZLCQ9CdAYYmwoagma69cB8eY6zJdbJqnNzqWUX17MNezmav4xnjBjUa1J86iavN5uCP1YhkeUPgGV5qkh45L",
  "key11": "53MDTtKqViNVRjV4BRSoBrgmkp8Y2HYf3LMY7baYahV3RD2iwaKrpWrNPd7NekcDFiug1uDhjdKvcE29ZeZ639Y7",
  "key12": "3TUMaCMHMMtXmJXizLeXppfKid32B31YhJFd3PsmywZp6Rg24oXnfJF8yYiaCDTFcT2Me7QqtXWpUTxT9h6QJmKW",
  "key13": "3wtMRf3rfTUFYnu4Pzd3Wp5iF1xvGLKxaFFzzwZJM7WwB9d5zDKq8MrQfRuz8VtSVCjZ2n5fpmsrD99CmfQMD6z9",
  "key14": "4BbwCjmNUoTobp6rU4aEvEwtC4KjUNuohAHzz7dDhgaHLPN62WHXZfP8MnB3gRWwF4haK2r8TnMn3EvLE3T47yr4",
  "key15": "4BpsiRNSk3mEnmvxSdqEczDzwMUADi2HqzbLEb4VmwdHrnTrCkR64R8U24X5n4a2Hova71EHx4zGgoudntN9m6XD",
  "key16": "29xsipYu4GL8u32ZAwPgTUvvDhb1fVEXHtfj3K9hah7H9e4bEbdxQbJ814WhCjeStwpax4y2Sr2S71d152wNr5A6",
  "key17": "5VH15khbC2Pjgwv74nYBjichs8ouzbYZfjXjjoUpXoBNVeCtDgEyFPaNxKMmQgRUxTQEdE6b62RVdPjanzWVb6qM",
  "key18": "4msXe2kiXCB2PwrowFo93n4EUTEvJpx1tF3uAwZfyYWYP82rmavYi73RLPBeuWUHE3capSB4ELv72QjiZchkoVxP",
  "key19": "5HVqxvaHyJtngyvutxPX6cNQK4SLmvCm1e1oLPwvRSG6ZiapWa2i977KdpUsRyF2tN8aQCsw7pz75A1GZDFaUYy7",
  "key20": "2DuJoRwT85EMoTyBS4aFdjcUm1JAUGEw7ioerPiTx84PvunsjxZEAwb4JWcrSANBtHWmQDAyoieHsNXKUsS95egF",
  "key21": "5b5NQjuyUeu5S36prtiD2oqRLrbvShiGFwLrjs1DXQKXmhxVZvU3keNvVvW3XHUUiyxHwrAtnN3WEsk4Mn7VZuPR",
  "key22": "4SP4n8u5FyCoCY8fyh9W5J1qMBWpP6bHJzVXQowCDHEQqpbUuN2u6cJijpDjAVPCHydbTeXRw3G4FMXRET1GgaxY",
  "key23": "499ovwsdTQ3QZPz7UMQvLvCWu3ibjALWSLZEf3gNPBfHi6RcsGmxGC9KCAFtWpkREwSHNCg7fKEaLv2BVq6Rig15",
  "key24": "3v6ZvbmMYcYEsLfpTsQS67pvAYo4jxNomc4KTpmpuL9UCZ6GGaM9tELXRLAmc44GKuWi3VTtVUWexYwGMaHuP9hA",
  "key25": "2HLG6TA72Tsti6TZnp34AaURiRxYsnFNdBXSXQbVdFhpaVmXvMjvVfwUZZMW6m4dMN6jRyqRNf5h9C8JAtfK6Ktg",
  "key26": "3EFVYgd4LAevDtAvCRcaCZ5RRQmwTSc2Pn6tMAsUhnNmpVgFppHfngRgToHLs5KM89TgXdsDbPBQL5TRTtrzDDy7",
  "key27": "2n9xRS2zGSwNX5T3tWj4kJ3X7b4NYEJvBecgfsX4VLYuTaukzDp9NpzN9vi7QWj1uPzPG7BhtZ34FjmzQpgBvKaA",
  "key28": "67r8hYP1snR5DGgdeiwcpuN3yz5T9vCVpAGNXKMEkzCoqbi4QLRKPSjieFXLD28QZPpi62JfVQE2UHV7pdPFJfmW",
  "key29": "4CgFLu5d4iZRFCf7XL5kC7LUSARqFMGv1H9UgYX9VpQjnvZHDkK71yYWK8ALvAsmkxyTM5fGoCaEFbze113Lvy2b"
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
