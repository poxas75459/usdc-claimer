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
    "5WDUzJssU67ezfrgp8vbKLCqoQPbWQY4orkyRjhW5wnPTc6YV2X96sw1XTJTP6kHNkvG1vNGxwjA1GQV3Ng3L4ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DwuWRBt18Gn1jJgjfYpyL3ne55KUWqrp86dQLkNUjJuG5FcmAxCBe4X6SBGnQSBHRoCqLdiuPuLfWtBa952486r",
  "key1": "3rmn8SuBfNFdbqbLttddbqM15x27mLJ4B7jyGSBYHqhFbECXg7Z4EiFygVE361BVvyNk4gHF5PQzLjQQVD9Gyhe3",
  "key2": "3cR33spjhUMsPZ4PDpTsvWJmgYkERaY2Fbbhn1m48JLh2Pq9AvpUPTzGSWfmnAZBSf1EQBAMX9PckoMGH3TMBtv6",
  "key3": "3EfNjxFv8tCDEYhSBDeEDEDwuC8E5E6KMNBMh4dHZjMi1ESC4zk2v566FQT6pq8y6TB2SsseSzkEPk3R2w1BmKMi",
  "key4": "5jy5fticMFASNwSQ13k3buEQ7mLnm3xJXJSbF4Xp9kixLX4NDFW3JzaCJ5ZpW9j6MueX9fvyPKF3p2N2oJdhBqtk",
  "key5": "2NiMV74v3R7jJwfupy5SHNK5nxGKYKouJ8ebzQD17Dnz6SNGhUS64XZXpK8M8C9qqYkfGMZxDLfCEeCyJpJ5HNkJ",
  "key6": "81yX1dBDtFLNDKC8vQHJP33HRUTzp7BJSGjZTqQatw8YkJ9CrscEVkKXqAwCSzNjT8qv1M83wazjZwFDBaQwF5M",
  "key7": "3kwNoiqwLkTw9tVUE7tcMWYXGWHgdDjkxLG5nEi9BETGfw6rauDxzmCXismJAxZqkvTpfAmh3E4K1HrjrhoGV7NL",
  "key8": "27XGnuQvt4MJJczuSK2NfhqbLdczat4STDVfXzvHUHBQGGCCavwzza71yfQFoAF9qv8TV3kjZd9pyujjdqebpCix",
  "key9": "5AESjRYiXcKiQrMLHZD5YmkwEc3MXxXx3EWg2MsirssN3okxJYkds2A6so6K1Dx2UzoBa1Ub5dozFgTn1KM8XHVR",
  "key10": "5DngsPAKpg3rSiuvxr8w8Dg76NPF5T4y8xHw7gXyUSfh7jTh7Y5vkxRLS13FeRhAnUYU7PsguhRbvb83ABPz9SbR",
  "key11": "4CHXCvcWei4Dunm4LQ6ASQ4pj8QTHDZBD7migC7pdgug1QzHQacqPhFZhm9JyN3j7udkmusuPaL56LJoQo8payDr",
  "key12": "5tVd87X5D4Y2dPHAs6BkpC6tKbc5TdRxq5yVRAtPrHxw7Lcs7sdYSkBs1WCGtJTkPafu6zvDUau8giuu8P8Cmynk",
  "key13": "3yrXSsxKjBSS1BChYJgXroyaf1eoqySnUvKrw2Mu1mqh5svp8ijreWnHrDUR2gCvmvnmXt4Gism3vc9oqqmizYpP",
  "key14": "5eozg5Zemj4WqieUAiBmV13WVJSq4HxcyDUGmfuK8VBXvwUKpQsW4oq2tudpNjLjYGPRhMb48CWaXuDUnP1BzTpb",
  "key15": "BXJex4Wxd1AYJLHb6x16av2D63gKan8be861CVAdcGrSCgrsmxMZy9zXWpWzpFqWWGT9bfJ29GXYNMy4Bezq8cP",
  "key16": "3Ua8WqumCHtciRqMsp7TaP9ZtgbJySpsT7Fgjftxwz7tgf4JmDMmfmCbVHaSRV9aXoc3Pkxs7tzGbmc6deLzbGny",
  "key17": "3wqUps4poMjGPCjerUpzBUc74eVEdcJiFBpXVJePiQ1CDjXpgPKciYShEqXvMhhNwPbnxY2gxmVrM6HctPddfXbJ",
  "key18": "2dwfnKCtVgvKLhBdAg3usKq2854jEBUUXopirAhqeTGoxa8ZcrdP1yqwHWFej4uN8C5LRaBvGuA3chbWYa4Dk9CQ",
  "key19": "2zc371ZrZxvyJ7ZJXgY9oAQFxkX41BfCV6cbFKUrryPveaANKFD25ijUSrTUc4UpLDBC7ZmSqihfAEVJC3eCWEW6",
  "key20": "kJJJr2MXaf3qmrwgcmpxuM1PeSfe6RhoQDGoChQBruoHjTxaoZLyup48Zaka8eFtWTaDtSC98sxmxNan5m8Negr",
  "key21": "3RVxPGeHc7XdwgVFJuLMNPWifWPaBJwE2sZNYcRfZZFNFdnaPutf4urWCKwMeYCV8YzKJYW4P6LX93rBwrrp954p",
  "key22": "63mD1jUNCPq5E8EgQprvQELdquCngtPZrLXTc2CHak6VuNDK2Tm9cjXoBUEfdmtGkMnT8BihLLDPiV5SEgGK8M6f",
  "key23": "64v5k8jmd1K6Y5A8hhMAyiK4oTSNfvPfcfnLnc4swX4jp4DC4MiAgUNfPmcJMkKWWdqByJtHs7ESBwPG4vGdE5Cz",
  "key24": "4tgJad8255jkPLhKjyqHrXk1hctfcWHQdbgJuTkCXPAAuCBMuyoYCNPPNx2NbQR6vrqxSzJgQdrn4vjTn3jYHo7U"
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
