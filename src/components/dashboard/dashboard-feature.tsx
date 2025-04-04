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
    "5Tge5Z78w6rok1Kq1moB6uX2dG2XoXL6Z933wqCy1qYuUfjBiwBHT3yLLe9Gv3D1bEi9q2NBnu9umi15wUDfHrtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J68pXGWRtViKMjrzmcj4Gsaa5xDDGj3SKkNevuUKVXPMryBs7CvfmoMBqeciogygWVLCttgiWChhGTZ4kmmxKHx",
  "key1": "2ZRtbKEHzqQxXn6CnjWzR4oHK5N2ehghN9E5DqPytph6DBkQmGuHtf9FCQwYGsLnXTwznrDG1Y63aYrPj6vbAAUS",
  "key2": "3ZSqWaR1Pjqgn4oF2KLkR6V1kbXKCzXaLa2WwDSUxC7cGVghVi7323wETbkAuQ6pCLLPajZG5Da9qitTUp9kAXEs",
  "key3": "5JqnSzWtNRzR651wnTDp9m7B83Tyn8ZsEdDuJ8N4DndvquSiS9XfpGs7MBm3WPcz5YHZAUufN6Fh4MBdcX4neq78",
  "key4": "2QgS4pVw4sM3k2GcdwsJFxFMwrVPzxwmi3exLqMPbVektazcBWDEtKbKTPinsN39QfxybRQ7ywXDYRpznH3mStjF",
  "key5": "3j774F488UfL79C8x2rp4c52co9PkoeBdwWYjtzW9YMRWoc8ftLfrjkS6Ugdxx91sB1wDYyHwSTw3ZBYHs9aGhoN",
  "key6": "3bLv3pJC213M2rATAni4VTqj3A96fyF3yVXvdaqqsavqPET3MKbyCBBVAiadNzjYm4NgeRhmQEPrei98iP2NHuXV",
  "key7": "3N2qeuiN822GbAGMj7N4E9oQoW8dBzHBM6UsUV252X3isaNPaykWpVtcTK7JPr26Wj7AWs9CA7UVTY5xpbzLNAdL",
  "key8": "nncCjdQ2pvKButg6q4RDJkNVCwYJmkK5szkWrVHmiqZbKkpS1J5q6bDc9H9FnTtvDarSbyapZeTG5YC56HsgyqL",
  "key9": "3153xqbp5oWiXNYUFooLUX6xV1bMKpPa2nBVunyxXJgNE9wccVu4vckecf6tKwSaaHhkWGaZsEYENwqYjj2djcec",
  "key10": "5uocCazewVSuvd5xL9ewhEbBuzqQCHuCvqDHdYkd7jBzs3bfectw6qv3tiSAYR5yNvCjFZxvWRKd1RTAcwwT8Pvg",
  "key11": "4JeXEvQQ2dvYpkM9BBWECjTmgq9jnGXDUehc7nr6CZHNFejtTgrUMt4nAvLHi4AHx8QgWXKBQJZjySdU3bLctJ4D",
  "key12": "3wUdZ5vhG3JaSftoGJCxkTLxCdX7PfCCfLk7ZU9iSiizqmdhkusVv62Wto1MamvJvqqGYxd7CvXdScxjBXzkCZdm",
  "key13": "vBrRxPLDmk5fjy5DmaD4dBgQny2ef8rJE4c77QiFEpg33TjY88ZFeJ4SuR7CGKzjk98oCgeCsm5cbmKcLJ34uor",
  "key14": "yrmw6xN4Ry5HjCSoFjEWYqd66FtHkp7VXFMrH8VkrBdxDXEPaCwFtdnfATLtcMu9ps5g8E4phccngp7zw3iuXrd",
  "key15": "4hE5mHyPjn81qnnjeNcKnHB5gLo3NDZWi6jkerBueJ1WM8DgSUsQPUV7JmV15npAss6pNvNjbf6F9zF9a6pWBYJB",
  "key16": "3KQK7CUFc1nF9GtJeMkJo6GNT9CEDD6MYBViRsU5trMrtanUVrRhxz8NufBTMyFuBzBoAYo74ccBM1hE3LpghAFi",
  "key17": "2KRqCytsdT96pHLVWvvz6rQHazoCZAVB1bfuWDj4iHhmFDVJ7dQTUfYLyTxWkQTzX6dttjpegEX4bULmcdZNhqaf",
  "key18": "3TphBmN3opiu9Bj81ToS72s5HUH1B16Bse3xrwhrw8njroDtNU1VruhSotHuheJu8ij16pQkZzo3ZQUgCingsQ8v",
  "key19": "5H3DBfu5pufhnKgkGbPDTmjWTRw55UtM5YCy6EoLma6XRYKgi4RHuDbUuw8kyY19XkGov6czHg7ovuzA5Fwxmczc",
  "key20": "5AnkF25thZZsJmmURcoPBYtpsATfXfs7q4jtHZ5WYad4onqLcXe7vbK8TZGMRK8JvgrEQvFMM4KpQE3hTVqYCP86",
  "key21": "id5L7qfdCFkWnp4ec1XZm6rao8s9N1K5Qyhq1APdVSjM9yRZzyK3brpXFkXCzBrY14bfwpUieWScN2PerpoGirm",
  "key22": "VvkC5jCGFWBYNmf5BkxdpY76fMbnxpd7HGrH2yHPKB7vhf4yRf8nGXtVnegeK4kCKi9nkw7JprfxhyXTzopvDRT",
  "key23": "66V46Zdvs8HFviWJ4uEtyCLJZCgGcTTBdLHPFkj8bVwTQKz6f3MCrZ3f34LQHaTSteGPFe8q5S9LqboxyDSg1o2P",
  "key24": "5EPoLES6Z7DQMShZQJrEqyD1QBq6MG4Z9RJhiRYzJ3gQD62xhTuHkcEDuvv22NsnPmdmquMue6tsJQAVxXJC6bTn",
  "key25": "2XHXoZkXKjmiauKEzeCd2qw1AEwwmVxv7DXqqo6idHpL9Xk9u8Ha1VtfvaDg6CfDkY6reM7vgTL3MtwuorwSofmm",
  "key26": "67nr7xZ5iq1QKre9B1xZXcRyBU1UfwFareshJRYbSjJ8jqzdTHKgQBt3HjohpMw79H3ZkE2hcKjxVL8ztgPDbbML",
  "key27": "384ir7aTjQY45JU9xdsKMX78Vv1Ae7Q3NmFYKBiJUzPCu9ZfR6cbGqjGPi3cS4Ms73Ryap9S7THkg3pxMMctjztR",
  "key28": "2ArpnyKvTnRq68uqW6R4YtXSdkyy3cdPmfve4dVebYW1zyWene6hrBRYAPwuBeSiNmksqJZBCbdDMApVoR5DiBbK",
  "key29": "5yckw9RQ2kdz8oyv7hSrMKi7wzPR3Wyjzq2yHepwxS7SQXeh5Z2q3o6Ac5T1MzHmE55sJpEoayHB9bgUvRAg6W4G",
  "key30": "2eU3Q4Xi1uA3EqhsUYRD4cFgYAtBX7GUtY6PcMkM69UBBfBuDNyodScVi6efE4rQyT1d3ReM85HVzhvit13qeQUX",
  "key31": "u4qXApaMJYzjZGNTjpZJDfZmrpBFhCpS4JCPnXUtFwhQRErTTZ8eTJFygKwdGJ42miUvGCrKUQv5pivgN1Rd9uf",
  "key32": "4g4JXTmkCaTumxUGAkjyAUBn4zs7ALnrRELQhJNbw1voickSuYpipfAg7xQgacDS6A2B4d5WHqYRLjPwewH46eZy",
  "key33": "3VvpWrTriNzEdaaecZcqUJLxSUDBGas4Yu2zUiosWsvymRdHfe1TnYJv8m3LWvEFXbKeyexRSxixtwAgm2vYyTAt",
  "key34": "5nCkxLYdXEhVg5ra7ywsRSdBade3mfGUvdTgd3Njd4YraXYPBnXk3j4YnHLQfo1prNfEhreZmLcZT47wNmCsBHTo",
  "key35": "EQNJFBSzobr7BixvBR4LJgqFhJYbz95YLq5PbhQWSH7TEVbj6qR9hNheLgP6hbSBTbTpyct29GsUjiqapsxewm8",
  "key36": "2Lf8mprg9ijqu9MbyCGdhMn9jok2vRK2xq7buwdccBxiTSTwXuoZAWsiDxJBnoUKK7MosXjyaoZbWGrDKgi9iDu9",
  "key37": "5yFF8AQS4dqD8fU3NUfiwKeyqjDt7LXeM1U5qz5e8sscHGPUDRMXKpj4AAadYAtWdL9f9zQkiELwdQ1kQ3bbVKMs",
  "key38": "3Lnq9q3UFcR6LbesRcLbBGn25A9hXDQthKkTm3weEd6pyajJQmt42uHvYBfTTp72ustJ5YXtAx11Yo7V6ZvvZe6a",
  "key39": "VCn5Jpz6apV3TM6kLAc46fUHsFVXVc54Q2hqvtk3nxZcQHdxdtjPboaNb8JBhMxEDVMHsbjTJXdKRAQVrAHP7rX",
  "key40": "65FzZKCM9r8T44pbSuXo23W3CMU8vdL9euCQyjBCfkREvus7QSCWt73ZgAKrLzgf3bTpvbcDYNsLb4cLchHvsqT2",
  "key41": "CHvwa9F8kHMP4Kn2iDU1hG5Hay4tLz8qHZf46XBMonGn4CZuAc3QN3h1HxbbKWs9N31PWBqVAD2B7NPBBHiYe2W",
  "key42": "5LYxBy5M8GP5GnGDMNjXDj8Z22yUTPnq4Q1KrqCvCU6P3AvYw7AE4NHMMoiX7ZvBD1BaDWiWvqYbLFzDLFrUy7Lq",
  "key43": "2ff8DREP5HEMUkDq9jGL9cTkay3KvRQCMjaqWukeMicR6ny8NbRunGpC8ZPGjojUAN9LWuijVwd8rTM5KZ4dU9AH",
  "key44": "2wmRpRip1LhezVEwkXej5DKsQJdMUzcA5ktM4ySo96oggXoQ3iyV2WgcGMDk9JkiQrMsBUomH2NKde3ZNUkgxLRS",
  "key45": "2brEC4kP4ppfvEZyzbEHDDxYHyoGbzVnsyD9qzEFNexRkEcrr963saGvWXjbQbXkSvXbzgeRDq8Mij5HdXjoRHQF",
  "key46": "2Mrjo5Nx7vAPuS6xXbGaEar68MgFEpVyQXXEJQVoC1rWUEeSXyKh9mnZk4s9kCex8oRY2wHQK13y6VbzA9auoDBJ"
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
