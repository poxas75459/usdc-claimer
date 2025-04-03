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
    "58fbv2K3qLFNcd1MaKtqYYGahd5umXT9kGc8sfma37wD172Qw45nyz6hC3CyhzdJmaCpVhhWZm89W2KJxDKW2V3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XscL6xAuUhmozWYq4Wfp1GheuPsvRHrkWxmXTtkZvFnyDqrJrjQegC9QAZi7wFVJCckMQTrev7cRzm6kANTKKR4",
  "key1": "5JuT2XXa19MqXRC2ioHhfcXZfDoencKvHT5W7pkHBx9PcjboDsCyUeC2EZbXoEzQCW6pBYgrt4SwSirc8nhoMiCY",
  "key2": "v38bDsnMukRSWqHcS98SSqYKsif4L5BSV4vXGDjJwi1iUfChgp3KLSg4QJoyKzK2H5iv2xdgEp1kKfYmNjgeL3E",
  "key3": "2J3FMnh8LQrjb8dyR9bZjQHk5vAuevTF6Tc8azbL9aVRXRYaP4MUAwGM5c9KNQ723ePwNcGdJCyqohWTSpKBohZK",
  "key4": "3qkWVF81gC8WAUsr17AjDbsbWzQ9u7HwEXztFemjxyD8tcZyQRxmVYSqhfrP5oHSch2sWTnmbYqt4y5a5T5XbfcA",
  "key5": "4Pg7SFGfwHJoCVMwSrXPido4hc3XTzLiV2oAWtWujrpSADL4DcvytiYkQKPgHRYc3wcYFkfsBMMAkquxgMfBUDsR",
  "key6": "5nywfs1STjKBi9Wobv5b3LKXDz12SaRrFV5vxfA6oYFaJCdLRKBKvpA6ygF8DmSbZBBwi6icYgYcfHW3kXNq4BZ",
  "key7": "iZkxnHdr49MJXG74XtRgzgXqRfnbZcjuS2vPNsoQrHMani4tnmiWaB6nRdd8dCC9xwXNMP3ZbQFk6S2bpkVNbX9",
  "key8": "37bjESBiY2e4BpfTRz43u46HELpe5D8CTGg1Jda7m4UntPCNSVDd3XZ8WAgmdWLQrAYZz3Mgr2x6iuH5zMrGfnF4",
  "key9": "22ACwjScfJrW5YxD5GU4Pd1J8UQ6b3iWzsQYXkUtk8mbRuuEkDR1b3xduJG4Wo33TkpHMewf9uMo66u3ZZkPVYSL",
  "key10": "4gb1X78YRcUjz1o14RCuQUvszMRbhQfoj2KEJ9hGACUPnoKckK1ovw3Q7SCmHcGZPwkxST9RSpnehtexsH9AYDw4",
  "key11": "5fyHqRWA1HFBRTXcy8C3tWNMWovQjeh7AJKsRbNwY54PKtaHsNguj8ygyq5QLkeCtAt6Ei2GuUZQG5BuGxpMaW2V",
  "key12": "411FrjpYBPCJWJjrCYyAUveH3FJNcvEwAmaCVPqLanxv49A2S7Waun8qAsKpsnedTux4QAgGGMUJ8UzBUavBHQgK",
  "key13": "t7SowjggSz8oBua5P7jhGvRWPd3c9YsQctN4KVaG2CgPYS8mdjbRqw58ugJ1P4VPEwPcvSDAZzmKiPbo3PRgk2V",
  "key14": "5HXuKqjnJ9BtghUTEG9KqcLa92xT9EC17oT7wNaHu2QZ5Q9HJPbAN2RiPV9ornTo2PDZCqs795BeN2gxqgLG4Zr",
  "key15": "626P4B7g7zSw5bcc6EKcN7jnATSSSQMgqZms4eUTvUtfc763Y9QoUVLdviHBX7N2Fs9tHKREyDSbLr6LuwTvVedj",
  "key16": "5x7Jixi2hi13hJsaTgsYRKrC3D3viKM9Z144FXngqJXR5WhYW7AC68wQtDjXp3nmAyiJ7JTFtBrRhHvSfHBWGAdj",
  "key17": "4yux2ppyJ4EXURPMXuo61DNKajYb7DrjtczuzxUkTsTHpCYYNG2VMRfaMaRkaodcnWgm5FmfJ1V5TPz9jzU9ce68",
  "key18": "4xLioZVUNEPbD2WJbJFkotDKEdT39BABkHKjW7Qz9daX4QrgSyb7pkqys4fLqetzV85wGQyxaWJYoHeHtNzZ1NwE",
  "key19": "5NPmeLCtVjrFSJaYUffL81G9v5zvArMXeSy4VzcQhEjdqCLgXhKKVvhXq47Xg1y4KFrBqVzxk4YX3VbFDt4VH7m4",
  "key20": "2Vj8DeRiVHu5yS26XDM2twTXdfTMTWMwTf7yPGDXDUwzfi81R5Z5FfZtmj2sND9FbTTKvmx3K3UgiTaxZrv3pQvB",
  "key21": "5jiuJRzf95UUStQo5M5xtZwUE49XndpZnzxWxgwwFtuDHGDgk7uVSAfBcoKihdBefKKSfxssc3vV1HLJdkAXN2Q1",
  "key22": "4yvz7XHTkLX3hLhU5vpsmJtpPHLuGvuKhXWX9KzPgHhAvaQTEUM7wfHHTFRetU7fZqa6jKteXXsgvjhdJFdShJU1",
  "key23": "64vuwTvpykDwvz8vymxe6XhUTncaeCj4KYWaTpEjVZtDUX5JZZdXKRt41uhTrCo5iwQN6r6gQEXQQqYdRxE2wEbj",
  "key24": "4Rd21Q8ZL6ZvZ97XwhWdTQrYBVcy8KrhZQNXwC7UJJw9m7Do5UhHcBDQ9FCjVU4SokzagZQJf52oTtCeXRNvQK4n",
  "key25": "5JpwkXjYnCNNBR9eSNJUiKBtXaTnRgNZLzBMUmv8bkAdfhrBSTYH6dMTzwBc8WWb5HxRUdUpJfhBfXN4JsqYZxrU",
  "key26": "5K8Er8cLYqLzgBYH8yfLVDvenNF5qKfVSpb4vqNR6T9Zv5zgvKzDRM1n4oBvXrbgbi7j2vfLkGVbCaLroMEpWbAK",
  "key27": "sBqQdZHhAuaf3SaEiVJWn7fTApymAkTUaHbTzYTarMXFD6SJ6AH5fWcbVvcZ2dqyzJJz3YRepv5N4vMrT4VVfQg",
  "key28": "2sCn6iNq7kRPqq4rGMG8WPSyu1r6o6ynYnMij14oj1P7fhPCfPNmPLM4HdX6fTHs5pbs4q3MrtdyF8rnizt7PtKz",
  "key29": "3ZQsdLfbWSUjGco4Uj1btcubiektr6qw1yTaxXHXZDr8qj1W25HmTCowspyKZ1EGBAFfX4YPbLmjoaocRVBJJTmK",
  "key30": "2DGA9h9MB9dSGehLLuMUhmaBCNenzHDrqtrfGgxGqghisJ91H5r5V4KLHuTQoweFJGDtS2EgKPa3uCZewF6rwyhF",
  "key31": "4khxDVLAVg5q6eYQqxMADYiKNvoMEyTHXcxAs4MAaHgn6txqZV3Cct6gG7GxWmH5kD171bACZNY6FWadaiv5Dsgj",
  "key32": "3xevmMHYrTwqxh9eKuAiDo3tT8T2vXgojvX6bEcAnVSSbDgFFUncvPZEpCtqbLv7TMxYBFPG7teaRCggNgxfVDV5",
  "key33": "j1Z1xSc2N1P7oxckbr4qL4wStMye6NfU7o1jJPgh7Fm745Dpg7QVS5FZjcU9fDsAAKRaWC4x3FfNQbrg9L9KTrG",
  "key34": "2ETGmU99aAQSvRxeyGcdbfqWCujdj8zQjUVmHj5PE2KZd6BkKSF7HjG2MaNRxfw7htunhecXoZZmhoCtb5thPuFg",
  "key35": "PpvyH9RxUFT6mb6pXQwyqHvPfwj5NVzMTmwV7fuQcLzPGQNT4D8RpRudmQiaZ6BifRqzFfedVsiesuLpGKZRYeZ",
  "key36": "4humCKeRbpWUrU8d9NGQ5mwdLHHrhEorGu6bzT4ckRe5YxbDqMCAp8YxiagiVCT8NagJ1ETTJRqymwxaeAJwGhPa",
  "key37": "w6TniV6PELbWZZfPDpsX1A9hZnr7uxCu9La1rr8cbzwbBe4RMaP66pmSAuAy2qw5mDiqeECD9NUt5q1RaziHM7u",
  "key38": "5cZWTzxkN6Y7CpmivjBrP6Ng9Zc4haHLjMZS2pB7thT96P53CywPVQcJq7jCFai4o84zsLEGBrbejdcKVrKhL4XT",
  "key39": "64q5BEar3W8sgqXh81kje8XnpqN9gM6zG7aQvLi9PwBT3fYiaQVuah8ABvXrVdvSDX2soVBWVhfnHGLjkkHQgdii",
  "key40": "5AVbm5Vpd6UtgSr71q5rypc7C4Y8QgJxepFz4JqzDwMyMnAEWUBpyY5M8KxG6LSvdwvZ63UzAdUM1pKUw6QRtTFN",
  "key41": "5F7KHR6km2Ypkxcvd95gyLMYCRvH8bqhxVs6bZSC2HzKxQ25ebZaCfQZKLJZLa9rJbs7uwN4CTv5HF6NGKGhNN3P",
  "key42": "4HAAGwGWkD1rStetqRWY7mds7KbUBSkEntQaYzsuePhMH3oCguGHGmTxnQojFRi6DrUFXCVd6PHTVsFZvzkUXGm",
  "key43": "4Cq9tfnPhV94PiKE2KcvSSxZJiuZ8JZYE47KUGxyuVQDnoPeXv1Q4ZWnQfikY5HPfoDvVEDqx7j91qnH7TDKXhR8"
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
