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
    "3uTC12o6cAfYcbGwuHFLMpksRAQV16MwVoRL2Kjkky2vZ4fngtCPkt1aefCzGyFteTBRGd2RTWERqD6M96xnNHZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LewNRrJkFoyhzEueGvJ6khYKTUisKrwFDB46Eync1ex6Fy8GxQj8LMiMftAXEYjwpDmoEeYWaVM2QKJ18Vc1gYX",
  "key1": "2X82Sf8amhuz1kmAgXTopzFHAuMvKnjj6uBi9vtm3uef1fMP5AXy3NxTzVovBgwq4P638UnxwGyDrjwr7n18Q2Va",
  "key2": "29gCCP67n5c8NWc9n26rZeXymGWzdnM3JRdFEQ1AZ4jf8kTuY9Bj7yzLKd4LrghstDrP38wM9Bh2ytsXP3jhkGbC",
  "key3": "5DZKiimg7fW5azuGAn4tAhHGruuG3qZxg6WfrQVSA6meTGXBYscvF4HnN643639Kn5KoZZeWJZnMcaJ8kpKb9G8B",
  "key4": "3C2tmKywPrpKeTwrygQCHhEBtXxWh9kfQ9JW32BfVqnz5zovUabwJTnZURfNipDExM1ShnrLwovQ8neBPCEFywa2",
  "key5": "3ye6bhn9MHEH8zYMJzZ4MRrDJKmEfhXCLJYiqpXssDicVa6jZy7tBCzooR2im6UmG2dccw6qgLYW5vh4C4U4656Z",
  "key6": "5zWaiveYKfPssrCjS4sRSXfYaQgp7gKkbo3A7idt5pE5jbBTGKNvBBcjEzSRQuNFK8mrsn9cWJesVpi8RYHUqnSK",
  "key7": "LN3BmUcHseyEuAtco2b8HgzJjrnL8L2Fwpkkcp1f1cEuhyYoDzN3NaRK1S92jEpJergKPXKGCwAq3QswAgXmAhm",
  "key8": "39WPhcVgbRVkvu9hbrK4zRCK3iSHzzbvtnQNq6bgJoPrFXdJJMJsktpGos6559TmUbChXSvGDCA2nABP5yAZBDSB",
  "key9": "4iare4DtfhK1TGmqgLFh84NnCtMgguoUDLFqMSs6PCuTHpsGra5CHLPatSwuSFkaiRCSdXarMjup2i2ckEpF76jg",
  "key10": "2kp9LeamuYbeci7EZ3jbuSM9tDHqKouGds8b9eoAB2C5j3zFZEERR2Fip6fpMAmC1xm4XeAHSAKgX7BGmF5uxrMe",
  "key11": "riycJD67Pfq5dfPjawj7tMXCbtpJDbbR9maRRzkR92QLvEaHjK1YMVCGBu8Drhnv6AsKdQoknvPmKivUcahhyAj",
  "key12": "49ECRhy4E8Tz5sVezG6bCVDT6qV1f9Zh1bs3SZyiNEJdbcsZM59QYNz5xHXPR6wvU6UMHGCQcav1jfdeQrZJGpwk",
  "key13": "62qUYsNqjb2dfgc9HHitWDWFAE1E1fXwW6LTqvR13GNUC548YJPQfE1XCp1yFN3N54AknBoCusBgBMVV9tB9XGvo",
  "key14": "54scA2xsSpGnj8YQLVYmCJtMuU5wCZjwf2YYjbQcqyZgUaGuXR7cEoyNaAvGaLBM2CJFBAa74VzQ8HmUsa3T1LdR",
  "key15": "4KnTNXnf9jwt12uYZDPNQjzam4p4tCuzp9eD8cBhYepM7Xy7jnkphbaw3BTjQKXWsymn9LnPvK62JiGyBvDMedG2",
  "key16": "2o3QHd5QfzstMw4A8TenTY8BwWbjL4jupdZjU3GgG8GPXsKGS8rmwVsp5op8DLkFazvNT1PrSjCG9yn9WjjjNX2Y",
  "key17": "SiZBiNNTttF32WkKtSToTowJKpBsgihPgSbmn1rerghoBGS2cxZetRhZvf152yPrWfVCcpbmbmUPuMfSgMtaYrn",
  "key18": "n3tDjkLbocZxXJkPRy175hDcS1JsXo7G7ny8M13EkE9LKWba4yMYm4RRFYsdpYzqtFFW2MenKMW6fwvueAdimj6",
  "key19": "55doZwx3cXCmM3JmxSN1cZwB1kzGL1GBDF9D4KpcTUwaJfeUteerooFT9NoMWGSy4MM8iFBb3ycjRAjajmUFRSzF",
  "key20": "5AVuZPdJkAw53LfZ9ZsYnvQLrjvZSyX9FWAYR3MjH1ZdoymTop3h7V1AmiZyWCoFFasS2Uwr647wust3Bm8oNAVd",
  "key21": "3cqRVWfwY3qnU34dQJwmQiqN6JhBFsvwPdRXXWMhiQ3eRpMA4EN1oT2aACYeTynqySMX2XjeXZy9Qvs3Np45oqt",
  "key22": "t3iqNqfDwrCcybYBwDZGUmcffCU3qywFN2xHDdEAnkGUpnzLQnoWVM5yn8mX1ZBWsNbWfr6a7WJ6XDvg5Y6CQte",
  "key23": "4q9RkrG2nvBZvD49CuoVrGgA5QQmXCscEeVwq1M1KSut81wxD1KVFUnwW7dfuko4vToTXHn9y3yAC5sMKt7GQbbj",
  "key24": "3HCmgnoJJ3jYtBzeF4nmKdDUfmAxVUQHNyKRR5XeXKd23eeAVossZF5wWm5xxdjedDWQL4wmQdyp1y3LKXrPmus1",
  "key25": "5TjedbjUjfcLpK6o3c3zFMLi58m7NfbLFCptpvdssW7X1m9TtRcinsoZgyt56rUGPrj1mRTxiarLjrSs6QmLDLQ2"
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
