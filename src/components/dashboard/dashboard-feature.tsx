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
    "yqFuMZTXNuaz8Ek5imCj5ncvo6m915B9nZB7iMbAzfMfpBpHkvnf6hpELBQ6uHB3V2gcNojT98u2yfjGqxKD6Hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQjzQjLez74H6UWSocDDLyHt57kD6APeahCQV9GLvtonAP8WB8wMWA1S8niXoV6WAgSPTeiUne7BTeNBcTu1HFc",
  "key1": "5dCQDDmjEQwvX9tneNr7P5fEK5spsQ6RAchMwpkENbgQ3B6EveXKrdVr8DFocsT8qKTAzaZY6QV5ebofuGFn18bS",
  "key2": "3DGyzMEvxTPmZSEV7N8piD5aDxR7iDRWuesmH3Tbg7YT77xzHwMdzhHByjHo2WYN2iF86ADzV21Q2a8mhYNYRtsu",
  "key3": "2T16gGen1whgcaWuR6RqkCGbbg8uaGBaSACnvX9SKNKFfta3HPpjPL9V7HdsXegrsSkLWpeyLoNgKya3up12oYMa",
  "key4": "4bYX2YKoB8m39yLjGkroaRRfHc4cbTwY1cEWpVtFi4pFxfAaeTWZEY7eC7QJAMkRA7xiLaGjAXFbYwrZyvJ6XS1r",
  "key5": "5BmXw1PSCqGcWdxK5F4VnnqvihbVyMoUMg1VVyEgJzWZmtZFbn2VodY9wvh7txBzLgRXJwFpgXEdRvQJdK2PaVFo",
  "key6": "5UFrdtqr2mc9J9AXh4kMbPZJUHhmVHEgf9nnHdfHKx6MKzigaeuxhEfwUvhaWLMsYwEzsfRhLCEK67vNL2v58WPR",
  "key7": "4tvxz51pRiKqwWwmbuu5cgTmacDSrUzvbqZHhyt796fmaKBtDUXi6bo9KW2tjJA6MH3vWVLSr9Q7nFUDXwDgs27R",
  "key8": "55xF7DyPx9sgXNDXxrTwJx6rB2akxWiWWTRkV2gZ2uDLmGTUJ2fjM4sfmrjtiziwkK8zNwes7hwr5YRBrNZt2nGb",
  "key9": "31s8KqGyhza8vgsnqNamzJTbBLcPdhXq2THhzbu3hF4QbbPf4Ez1QHZ79yD5gVs6zYZaNfMABhpXSwbcBdGB3Y2o",
  "key10": "4WhHY8i38B2iZuaXfdXw4TcnDThf4kuTquEet1CidzdQswkKjzWepCFbDZPzn8hq18jAHJViHjRNTD4tMN7Kngcp",
  "key11": "5M8WiyfecZpnZqxY4xibbjtKawvwdFE26uZrXb4qLV57YcrDrdKwNyFFD6SWbzQc1Pcos6ZoDrC5P1wyEco5iwZ8",
  "key12": "48BSwRq4XiLdMBMQh1QjmDFjSw1GHe4sFfjc5siXXsjeDPJT6wAQqC1SoPTc5N9DXjuTt91r6kcJCqmwDRDsVikM",
  "key13": "5XHGxqRfX7WuEvYY9LnfNjrd2PAKff2cdYZrbnXxT6cCvVJR7Ske8sSN3aNtZbEjEX7YLw1mP14W4JqDTg1pNHUs",
  "key14": "4VQG72A1MDiN16GZvncKfNr1wM3KAHdQrkuZ32TqLh3z6qkkFuJdJ4fDG2CfqJsaXjSHCUAFho362NzuU1wyoG5w",
  "key15": "3BnMGxVGW3oU3T1oQYLxiGaXaswN3meuM1ooRm7FuYyqWBks5s7uV2jAAEpZdoLUmd1eUwLLwMt5SrUSUNQz3gGh",
  "key16": "EfMpu1WgvGU8eUMvi4i9khPeWB4y87chvGVU65ZUzSYeMCyFBSX22UeEsyUr9PaK8GwdYwLbEvc1n4QsYk86ouK",
  "key17": "ZFMAktiZ9DgXupwGZBPAtVoXkP4FacrLSqZY1pYhdjD2AjUdB7nReySxhSn76qt4mCf59vtJWrc6HWmQ8xocPce",
  "key18": "vJq21TXKKHmmrqJwAYFVXzW33meYVNJH8NQhyAxoyRwouFTXZyPKNfNAZm28Ace2WTHQisLiiAurXXXEDXiLyCS",
  "key19": "2pzGzwS2jQKJErYUo5oHWUaLtQz9M1o3usw573CWmSzmCYRm9c2ZUEa4qbzauN4intaSCqZ5PwACRvm4qv1YtAXv",
  "key20": "4f34pUeS4LE12YdUNVyQPLtWFvAUQz2CfqpF4p5jLPN681gMhAdYe4AAoVExyZFSB6Vbtz2gtVzD1vZt2ACirsez",
  "key21": "4Vs3yf1dd6vqwMhWTt1S7TQHMxTKWuBZuumxTDqaDdNuU8BCnCdpvj16tRK5ssUBLbgVaMHyKgfSJ1PW1Y1i3isP",
  "key22": "4E1MHGAkcyxaMKvxy7672pt5Wk4t7rHcBV3fcr4tfE4M6JMLyWk7ZdTmCYBaQq1wfmB9SjQhYHVzZRECgW4N6stK",
  "key23": "3D6zrUnqkDU8oQoocKuUNBc3RuPk4EWpAhMCv4K7KXs3fHQrZKWXRxauUx41mbRBt6goZv9jQwZrNLzHXa3Q8AWZ",
  "key24": "6EAwpQVUgK8GnvUk6uZTw1ZCjZLRZa3L2cfZ1fv9d2ffsvyhWsKBvPtyBxjsowUNDShxmyEGDRa2rKzJ1vDbz78",
  "key25": "2H2do34pdbKa9KEbVNYKyxdJqPN6JT5wr5vSGnDZGmK6AVCAr1fKAXnZSQLksddAn88PoJfyHpQXaDiUzkGUrSDP",
  "key26": "2dN5iMZhwhDiyHB3M42CFESHodf8daY8RoarXbAFcyW6A1PGcByyvkYMbbGvukMj7qqGYXrBQg9r6L9P6yxNZrDA",
  "key27": "31o7gqLyE7C5wtFiY3zFYdi28yUxZ5rkTxymUUxDCLQXUdKK8KjJYqoCt7RpBsoHyaFhV88h3RqjkEA4TszrqE2V",
  "key28": "pDy1GuWopHBr3G5NUCf2MwWc3xxgPgv9i2KuwdYHmUJqAYXrP1gM5cZX3x1gxYGXauNqe42XGhLfiiv62xae4FZ",
  "key29": "3KNbaLhxbrbTzrprTd4JerfZ3x8oJqzFkDXgKiqiBAopiqjkJVbi96zPDhhGKJebCKMUtb3wFzYXRA5uA53MckPM",
  "key30": "22QsCkg2vRy34AMqvSuhdaKYhy66hnAiYjgqiTyyYvfs3PfGzrL73Ch2eA38HrVNBog4SBoxP8oH6hBmtmgSZQVh",
  "key31": "Atv41vyricRtibFvM2KwwvULWz96hGnrXf5BBFJbsyuxZAyjABiFcEbUUcj6w1iBEY6bMNiQZ8n312hUBqGq1nY",
  "key32": "66tpXAKMTvcfnsEHAcdfg8Ym21m9sbWeANYdCVEjgfvmALECfSw3oEHzgsG9gcHiYQ5NWByUkhSWoF9uues9ruU8",
  "key33": "4w5CMy4FXzF9jhkuJdDJV5tkLWYdsyd1Gi3tKXgr2gvQrgJqt8weJ9UBzhcZjoL6d2ouJpX2U4WRj7kgwcN4W2aH",
  "key34": "2XSiHVEesrNfizbJ8wscW9ZjpSkNye96PZajtfHE9BvaVTJYNgU17ZgtmaXx3r89XDmhxW1fLj7jshDGPgepp5um",
  "key35": "3vJiXu5tJYA6MG213a8NUWQZ4CHkfF2mQmxqJWyHsQerNyd4e4h5h6mP5Xvf7hc1sZxzcAHJ4eekxRvtAVuZeHT5",
  "key36": "34Cd1ZY4W9BzrZ4aofX8t6dwC9o52E4nPBohAjVNBHxW8gVbdtwLUTXnydZXHAWQ4ovqh99gjxVH7srXFEqWu2c7",
  "key37": "5piFCV3t4Vweu2YNpMyC2ZJ3siVMBZQDHd8fudsPpqU8F2SCeHuA7D5MoSQUGya2BBHrMyKrZs2JoeBq6wP3NDBk",
  "key38": "4hT9mxaQJszHGvSmpJPrcNqJTEqYqGSWUsi6akQdbcTRv1crdsgoJ8teZqvmn2UDbhG9KhDPrAN4BzPj3UDf4FUa",
  "key39": "2bGU8cpRcoCpiVPHHVpMGFdm7PeR6GhgHokepb3SjuYXUG38sQx1szdhpgoufgeoyPjnPhPhwz5qPVT7Rmt8juYN",
  "key40": "iDVeC2NtVmhkSVftaBPpMuHzBthRAfqG1AuRF796YAkCLMovjYeifsbJWkBi7KMDgVyT1a6WZ7pFR3P1WBLSxti",
  "key41": "3TSXUKer2mdLLASD2cgHbEN11tP76NsArMbpVU8DnQ13KMGuw6Y5qKS8nomrsPxbEDnQWNZ2uc3vQazoKfLqZfhF",
  "key42": "3aAAjir44mm8HYdcvhTrLcq6x3epV9J3p5VRThJL76vDQDL95S7YXwUphfHYhmj8PEGDBTcyrkqWAaYBTGd3NqgU",
  "key43": "2BDG1hdaGneVePYnDyF4yd6FQJrk4NoBRDu76ki8XcMtenUetsgQBZMQnUbzASDdFrfgQKXWEvxbRFP9W6PJ7u1d",
  "key44": "3R3UX6h7pE1ntJ7F8rPxnhmnvHdNxat63iY8uVaYAJNrMiHCbC9Ma9vTdEK9PfPaGoj3f85KPkLzwomiALeVD61t",
  "key45": "6aWKpb6cwTpFet9W7BxkepumhDQ3hxnLJb6ETMhyFjbNBSjsM2vF93UD1CKugkxg3i7VsABgp35m2EDn8x5GHTZ"
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
