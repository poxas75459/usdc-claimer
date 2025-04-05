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
    "Mhfnb7EPeQz5kq9FVDFaEwtpfctJhywMxm7mJx8suH9dAE2mdct9zvjoy4cU4UC9K6DBDSe7JtZCPoQcjcwuyFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhkFkS5VWGPHHwpd4oowzgLSRkF4M8MsVjkcyzi5Bwbx3T3rMPMRxDZuaMth3faFmoe755zR5wdXmoktVPPtJRx",
  "key1": "4imdFMC7bKAUSU8Nyguy88vhypYxijFmdWH5amZ4HTotZBbosRk19NF1VNhd9CXLxWevbzQgc5ZpDqKNm6kLo4dZ",
  "key2": "32NhdUmwvGuxLDiR1qnBY7z9zbaSATHVCSSwRg6ifepqSPSfBLf1dtbEU9YhRD5YwpUYdRMvgYLGk68A9PKiU9qG",
  "key3": "4ZJko1dfM7jZMNAAjtxRSy1hKR9pr1bP2eDE7PnZ1wEUi9MxrNNG923XDW9Gz1wBo6sqQkcF1qgbet1Dcc2j5wxe",
  "key4": "5maiaTRnxNuB8ZBFUWwaeEDV4kb2hMpPRAivQx6vECgXVtKDwQpmYAhAZPjSRaZrM9vZEFNwmDeNCuP15oY3GGPZ",
  "key5": "2aJrLqV3WMb8xMn8VaphdXYnameE1dmufTyMkr5gg3zX7jDkebFjqos8BJkJLkRDo418GzzwXDbor4ASjitHk25u",
  "key6": "B2YWGpPRTDhphGGhXbekPW4FLwAxYiRkf53WVyHSDVWpZVAMzaeKT5KSUHM1nieaMeywd2PVevp9nr6fuF75VPU",
  "key7": "BLSouBFjt6yWduzNL3Zx2zoypxuSNAnVwSmT1PVjSTeAbNZxbScfh5RZAMNRGr5Ykxk8FgdjNXZDKYYC65Pajs9",
  "key8": "4mBCsuNmnDjXv1ijhKjP4Sg6VqfYKjQnZMivUhRRvUnGLtd6FV2DV1GpgrQbTbiJB3yv2EqUMdd1sPufv6iPi8w1",
  "key9": "6F9XiHUQULjwdfCzNQRt3fXSAeaVcHtWQTDkFE9t2YWAwrPGaTUw1gB7USaFV6pgdDs6eZ6wtQxDAnGAN46Q6jS",
  "key10": "3iHMXvwCbceKHsRjFc68264UJddo14iqeKNZiSmU4m8qSRq2xGPHssFTCTdLw867sNfKjitza7gLo2MEPxaAxxjc",
  "key11": "67FEReAozCakWuEXQZd2TfjPsKJgmWgtgskcBzqxSBTHiAvEV6ThevQrNwKAUbSEfeizdrpiZjWfzZCJBhT5ZKpr",
  "key12": "e5Eu6wJ7hQuRVgmkk7v8iae1dSpb1vWXtQ8nDU9CkSv99U7WT1Cn4fS6ZMoEnRp23Zkn4TgrhVCxtxhntm2TSTP",
  "key13": "4QFp642YELUzWxjMktCwFkzWRutefdK6T3cy4XVk9E7gCpXyRqHBZrPGVyoi2F519Kr764kd6CLZGGLTG2NzbjcY",
  "key14": "4gryfUc8EgBrGPrv4Z6mnGK8bree6AwZPRF1xAUgkXMTVh7CUo7an2bQWfECytTkzQZmbkk9eiNfuMTBs4syq4u2",
  "key15": "3CfwNhUgLpXq75HYyRTj5FbKgMLTPmnX7jQx8HzzL48WFZsmezo7vWccA1ngzQvz4Yo6zTqeW1mfF9fa3XRiW94q",
  "key16": "vNVuirD48WJWGsCPE8cEHAPpDNUXuKps4BPwNpbM3BF2VJfYkAEeKRoTXCixmgEt3DDNZr8LKWeEGH1tV4SDRL1",
  "key17": "5xfUJSCzwiFia3jfdHyWc5Vttf1cKEMyuor2hY9kKx7rSGJapHERuuUhoAMW3A3pnV5dv5LcMQRHJSfDvaEpBBij",
  "key18": "4xpv4e7vQ7uj8trgiwEbyMkJkmWds34DqZ8395ECensXC483WL252FygR2BYrPE1cG741HN2wJYjuVKgSzYgVVz3",
  "key19": "5Di9szjPGfGzynUsP42a6WbTeGMnpikTsYJcYJhc8KUExhiUhbQxrSQwWrYNnv8EpWkcwVibk7dLDtXL4zgBrHz4",
  "key20": "5MLWirzXodzhxs2PHqhdZ5ySKeDGnJ36yTAjEDuDdsRNc8eoh4XbNXUrmXJZnvdoroSN8UQHtphHtdK5gVCv8wrU",
  "key21": "4VzXQ4FZhVxdhbXKCsNnatmuBfkrpeGJs8E12YC64m86bR2Eb6MQ7RattGR2homvLtW95B73j1egeVpT1gKuaeuP",
  "key22": "5p7Wij2ek2BqU16sEZDf2DkFK7zYdEqffXT5JFVLwGkiohyvjK3inzFHjdFjkepgw9Js2CQTg9P5uwpKKaErZMgG",
  "key23": "2dnZcsUPyQ3xUaQ2cw48JTL3jgYrQBnzNDF5rmFiJJr3syBYiZNqwfMXSSqUxHLY89iUBsmXo4TvM2osx29Y9tFy",
  "key24": "599HGCQS4Yd7LXtHRpDihQQi4GiqgkFXhK5zZADuvxnPjEVsMDUkoHriKHkbqwEq7iq7cnoLpLwgaGUiiWbgLkQR",
  "key25": "67cNNCMbuHXjAnaqwq5HekB7VpjdBuaHKwXevXPC1WiegXSQkcFfWuBoNKbRqx4YgtMyN6QA1KFjiM73x1VpA3gN",
  "key26": "36Zz1PMAEpnixz6vuXEdmeSXLfjFcV99BiUvyoHnDonc1mPeiH1KJPwCHqxG3pA1vKmn8TLuwy97NEYDKMG3PfZW",
  "key27": "5ReC7HkYBaRWvuqvvvTx9zE67J5eRrJTQDWKnq7Xu5Dh8oXAk4RiohGsTiuRJnQzCkDDvNotpGSUqaZyohne8weo",
  "key28": "ATu7p4PTHpPnehrAHXAFsYvoQbZJRh7sq7fg2JEX9nivrZwRT6oFa8dMXafsjaPqd87846RtuyT9LH3Ai4J4zaG"
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
