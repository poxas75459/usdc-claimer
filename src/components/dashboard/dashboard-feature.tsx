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
    "25tmp5kXgDgGqFnqpP7pyoUR4ESU4agqqXyw4qKRFCRk1qxrdFUWZVcz3fnYFMSZGk7erE9KaG9Jup5uGPKeeKjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECJXizvoRvVzPWwpxh2QbQogwAohruhYSThKMnLNawwiPkN3PxNEcNE67Xb1o6CXPCBcX5Lj7uFipbx1EFnSqVj",
  "key1": "3YETin7i6NaFtjB7XMhSfvyeHrDdun9c4unFwQB3iUULzrpcK1btzRzHvjxLxnJSJ3rQ6Yv68sjRDvP7KqVvLWqm",
  "key2": "2ED71GavwUPY9Rm3DUsjrHNVta6t2oNZ3gXpucVf7dvD4V1gFeir91gZmmM5kMGetLzVMW7MtuPaEjzmwWtL97JK",
  "key3": "54kLo7wF3V8XKj9x9oQxQdSkr9ttS6hbbzuEnXL7m7AdLvTvM6MzzS1VSWP88gybyjWz5zvf9mQBkJ1Gy5L19jXN",
  "key4": "3kdLAGHxY9PF2PytHUzwDRrKTDmykPnBTCq52hua3hXbVGrV6v6MhMbe4zeyfn12MtL5JmU1gkFJBdcwaZp9zPn5",
  "key5": "2hhsbCaPizPAyi1Dg7SNt7AGVeFk8sdfykEK84PWfzpCsiCvNQLx5wJceKtq2Yq9FoosUmH5zSwnhQ2ZiKwcQfkx",
  "key6": "3YQKMJSjjAVMwCDzPXdSkuxw8YTt6pMTCyXzAw6wjWMTtGGnXb21AhTfcrG6Suf9sFATYgbkifC3J2pLymnf1dbm",
  "key7": "3wGaQ6LjjP5cqfos7k2U8iVLBGxfZtBQWCAmjZKUTYagbH4heCozSm9oUoafHTmZSUQQzc3YVf5mEoWN2fideYsp",
  "key8": "4KCXfm76LLQZcgwdvHdcnrtZXn4MNUX4icZjWoR7qQ4uSZX2Yxy5YWcsEiy535oNZhGv2NDjuz7e4Y4wLjCXY2H6",
  "key9": "R9Qip4G793AxiEJMMzygvazqGEWNj6MBCAiXR2f83p7qznKFnuRVTEJasNuzrDTSHSx6SVkcnkzg18kH7HrCvJ6",
  "key10": "29PXAG8nYFiWeDbxzZ1uhMAWEJW3g2saGE641wYCNGWSC6KGF6QtWPmsYYaVBmLJRCDDtH4Xey3ywtnghF5N9dPF",
  "key11": "34e6VTrSRL4bBSkLzLEdc4bscAUDXjiJ77gJBTaWsKF4CbVmBAwKCe1fRYVsgeNbz4B3tJ8ebD5fy1dZgpmak1FM",
  "key12": "554VHSFkN4AXcXVHLbERZFdexzMdcRn6FvZPiK2p97KGNtnFJGrLd3yQuhR9yZ9DeL9QfGiBVNJKVtrT7k3HqKeG",
  "key13": "3arjHRAmoejFdJMUMaL5b1RbduZX3bN7S3mj95yVuCWkzB9RzYeaincbXFPmfWkJhe1MyYrxVBM8F2HsYCtx3Tgd",
  "key14": "7EkEvuw6e6hXksCy3yV9FJddNyvxsVEU5YRKUZ8o3SJRyfnJwsBwh11hekS7iEvtZBrrENSdBKpq9nBDdpdv3qA",
  "key15": "4i9xTD3Ns8EBh1aQpLCB84PHhdrjCuroGTfgrWdbZH54Xvot3bMrcsvCSnNDrMMqxJXScb5ptcsbZbeocR31GQXf",
  "key16": "GiRM27fPURuAscqgx4hgjzqooPD8CKrdaThskLUKmUqHkbJkCjKp59zUBCokQu1ezbvmGaMyEiKMVetsouCenSV",
  "key17": "Kky3wKKCYkmBVf9mx5DprkTWbXgKHtaFYcgydK2ifvTBwPBHNxG9HYpcery8zDnPRUsYHyYePcka1aGrf5R9fDD",
  "key18": "21rB99sF7jUoWJmf3xmNMPvgMWzGyW3E6KKAGVGy1AkKSmnnzWFG4rQV5Nmxpoo75a9sX4xs4TDoJMU9V8aeUCVH",
  "key19": "5rDsnSZw6AFGWXgfFAXFm82iiAJhP71kTQ4n1cX6D4RksZHEa4fSbipgpLh2wmZT94VLzn31W86KPfGPk9wpbhaT",
  "key20": "4JCPg8SW3pP5mewBqziXrbRgFtCFzpCxEH5WDETZN9DbaaLCrm9pBejhTt5i4THWuck26Ef6PMeBPv3PuYhJNPgm",
  "key21": "BKHSn5ow6V1rhbaivcAiJqeQMAdFNxS1Mt6GoCCSLtT61GhC44ah536Pubjp7QPXGMQtF6PjDNr5dBHkr9yVD8D",
  "key22": "yBvZ6JXRgkjMWzz2w2SMx5UW7m6HZDRhWdg8zGEdxD5iZNFYgnkrpSNQWbfLazFFyiNYQLbJFeEXUrQJjUCUGrd",
  "key23": "4KfeRvViFYotbEMxyotJxZKbdsSCHuiUGHiDgpkHxDdhHtNuLDTpiKpUwLy9qEn9Ca4mQnNtv8g47K2UNAPocGk3",
  "key24": "iXBcibTgPbbq4YojwdS4Wp67hAcdahJ8kt5SijsuyKSf56gEszaWSkZJehfZeosCLmmchYtLdM9rxLeDT4xV88Q",
  "key25": "o9Z82Ka1ZdToN3KxtCcnJS5hsRpNcb41RPyNpaPLTjLWmLwzzDsftwe5NE9pqD8jVGekYqAsM5Ly8p465PiK11f",
  "key26": "5ktjujSg5C6FRUQhsZPPs5YmuHEWXi9CKaMTHUSnxLaRHoY6JVqA4vhHZp7C86mUH4WDxBzyRYTdj9D538uq4CDx",
  "key27": "2w6T788nhS4gEvs4X6Zz3LW3GtxPesbQstEjSJXi89yePDKtCidoVeMBhpyeEoyw2onamuPhC1nukfPrWMAp4hGs",
  "key28": "3WcbM8uTebxa3RQsYhpbKJEAPXHKzEq4kz2qCtXxxQuSqxQCs29Admpm24ZnWZd6744Kev9xKEUE6saBY1kK1QYV",
  "key29": "atpvsa6xUnKFEtEwwfrgfd3wUzF3uDPqWo7nw7p71DLdbCyduBg2puf4TvujpPxR7jGXcKTcgNxddtpC28Jk1eL",
  "key30": "4kk9ruXc1pqUqER6uBhSMNceQgw549TR8DiHCGUzNyA7ymSfk5KcqPhu5i1Pmw6HtQozcXHjqJY6uFfwstmXZbqi",
  "key31": "4jeXc2FoSTMNHhAfhf3kVrvcyaLbGxp4PiRYkJK4PPj6x34i6X4uW7ViUvUC53A3stYbnWNLqowRUrK3AeNiYYxP",
  "key32": "4igewZtmapWaZKTtj9NgGZBGxr9pq33TtBdi5pyNYAmEutbhRF35bJaqQtxTvgMen646AnWYKGmgGXWaDdF7PEES"
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
