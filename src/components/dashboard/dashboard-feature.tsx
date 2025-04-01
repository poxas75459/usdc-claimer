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
    "5YitH5Wenmd7sU9HdhDUmsmybcjyF6JKCBziiUPr1zCtovA6LvLSQdh6ZU3TzoXaHefuiNmkY7eWSJ1VgHMGsHvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFtAzxGTv5gkhqzHP3NE5RrFkFJZo3WUDSpMBnB8P5vRYUjUwngJhYZkLe73hwLiW5mkfXM4UcqJ9Dhuu7pBYM9",
  "key1": "2f3DBrnsGWFzmoEkStD26gaNnHpwNpt1eNf2eDjdSKxNcjZKqiEgQ3BwUJDGxESawQxfxjC1rui8i3bHAbNvfuun",
  "key2": "5uCnkxXPzUYi58beCa1kufCWrPoLajSgBLn71HwTgYVgazPz43MYgQsPNhifziUdeta6htMnfATiNvDGSPiuXSYY",
  "key3": "2PuHDkk1RkBe4TJzCftw63DWppx1DuSFMrZNuCHo51qYpyao4UPVWzpJNkbWfc7YkeCAKFp4ViVkCY8MYFqQxUp6",
  "key4": "51eaUNtcdVQPdh58RwGtfyoHwTP7csRDbMwnU3iFBNv45DWP8616pTwUoK2emGyjGqyfoSnqAaFwyujXQ1tvWqgb",
  "key5": "3T3yySTRjmxTJXrkDoU8xPbi7xHScgRdT6cVjo9h7m6fGTvCCyGDiNGVsURWqkZWbF6oieaikFHcuoJXJjCim9EN",
  "key6": "2yivzgf1FsP3cmvmVR23WvxsFpHK1MheH6TEmVXXtTTLZLhswqAXPQtqeLVcCdY3fyGPdn26MQzL3nYGj7m2qx1Q",
  "key7": "ReEeT4enL6jm14sKB9Up6JSZ4CT8CGW19cNgUDjVEknhqkjwn19gdxP47kvBCY1XkL3UNGuucXExTU5FTQvzxvK",
  "key8": "332qy1RjrTvBZzkHXoqWy1zJX89yJsEjRRAvZSHERM6vN8n7UKwDjFTiRQ7aUyKVBWDX6rUn9JhUMq82XnLQUq8Z",
  "key9": "3YiKpo4gdEbUpMhFJ59C42jWt5uBt5sgTbFr9jvmhK6n6DYPvvAAMU6vVA513497URJoEX2565dd58HsbgYyi523",
  "key10": "5WKScaJ52HNm1jJTk1BZ7Psbxu9vhAL2TdHjcNcZhko3Li1iFVrM3jdBD8UgBUq2i28qnJ1z2MGLHyGfqb5ScH8W",
  "key11": "vCZZq8gUPEAuEhNFHpcAjBe8LXLDA2AB95gVSuPT7ngf5KXDrHfND1HhesfkoTzuRbWNocgJqaWrpAtKjAt7GQC",
  "key12": "2kAHHpcDoa99vbMLTbtTyuojYitVKDxvyoNw1QPrJVnWbkE9RDY5bQwhatqqB1v4PPTJ7xReb21scXk4DzZoYcoS",
  "key13": "4tgCsbPHQLYfAwobaDZoJ81qrH7WgxvhHBk5i8hSC7iqS7JkgJYS62sgadTJ9BfBhhXdHYPUZeh5sGvuJd4gBP4G",
  "key14": "3WBL9zdk3mVnF4oUDaannAYdRJXp6wsNgJYiq3aE3mQjZS9sYVGdu9qRnWBL2zL4Pr878mG14sMMktUeHhV3d9Uh",
  "key15": "Zx9fpFEwpet7JFvjhVTr5UDM54tFYGePu4Jz7yiXQNT6jAvgmcXHrQWbUNTZS2WDv89faT2ZKCd9UmJfvQxXFLJ",
  "key16": "46cU9ZXwHxM9Vwo4cwjx1aDUeCZkztvRNW88MPbRwfzmUezVGMa4hyAbZ7vWR2u54r5TLUar79iA3d8NJG4Jdh6",
  "key17": "2rbjTSY46tKxkXZKZGWNS2Tm1nyXmbCaDXzwuYhqBEgmrg1rJ3cRmM1E2YhMX864ZHe4o9GAnuT3tWKqbV7xdevL",
  "key18": "3Kx3me8dqAdj2XSL4yVP53FhrrwX7LgMttakuDTEyEC8YsMqPQEH4H6Vv9mK7EAhZwzK9eZXXwCbTtfs5DnaDEWt",
  "key19": "5ZQ181yFGBgqc3hYJCM1p9CmHui2ZjkLobfyCG1S7f8nfKJYTsmSxJkZg3CDqcxVNgLuSxH8yJvpYrgfJ3TNxdkH",
  "key20": "3LJgj1VAu2H3pkCnzD438vpnjW7Yo9aaUchGVVMJRxNKFTc4KQ8TWh1L9SQZdxgxv7DipQ1EwKLx25zBzw1FyS8G",
  "key21": "3dJTfa23U4V7B8nmZY7KdwnNPHkZsmbER9zYjyayVNPyHUHp2ow2XSsV4wCHy8eMktUzMqdHRzjioTTx3uhtoCQ7",
  "key22": "5QbbR2UpNBKtQ9xtLqoMvronFtstr1DWu12vLG3M1GmXnNYrjv8vYSbKBX7VRGdeW8heQxtTFb1gaNph6Rq5oSct",
  "key23": "4uqaBfbRjUzF2dU2dkq1wTNsQw58ijCEbRYTsBCsQofGxZBt3s7XeDTnwmMHXCa3Gt2vBPuELPJysXeDbVezJrEf",
  "key24": "sarjRRinwzk4FjJeceJZr8EBwAcwaxTddmauqiytGnW7RL3utTQUSVkZT7xXwnAjodxoA7UJGBFdzKFW6Kh7ESL",
  "key25": "2ZAwJ27D3u1BjHVAs6Nxb9jFhTtSoz2LeaBmCeTaecuG7g6AEUmLYqM3LGYf6co5fFSDpX2Y8L9fqf4Ju9sLWqgi",
  "key26": "5UZ5eeDYCC7XXtZjZhvGA27ec4F4ThxQvEaRF11C3d5sc28Yg5Z156j6B26EtjiQ5FGZxwA6dpowgzrFauXRAQNf",
  "key27": "5q8Ef7xq4vJxizNUiRkzK5wBFpn8iKbak78Jpxi3oos7eKSVMwddy61ZcnXW947JdsAWmRWU92fpsUA81weKQsVN"
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
