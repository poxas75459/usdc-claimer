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
    "4k8h76MWVzPpG29xgDGvK3wC5WtU9jKJLWN4MF9TqKPVynxrxFaPUNZTCsY7nokZimMiqzsdnukHtP1U7QKAVogx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23H512PK3x9u5s37PRJD1dQPp7d8YjuB13J4CJdMze4hKxGpYTc1Jxk1BDaoXv9XwHuxCsbzmgW47BhZ8CqiWEq9",
  "key1": "2bRQKRFjnxbtmcQ7LvwexCjb1g6dMea3kwn7Kt4vVMNQoRVBuYGuRGvAZSvedk3sUS32RnW1onBWPvtFJLGEfgPV",
  "key2": "wSpfZjPxDVjuB8UwBWFbfu2733FFnawg2EgGRs5w1ivjk9CAbA4bkxds5WHZvyXYxgAsTxQ2osVahC6fAWH6u1X",
  "key3": "44AM2bYtQZ5PPdGSbL3Jnk1Zhxq7u9CWfqWcfe4ysoWciqxuUeDhKgePjJPEtZf69xr4uTVPsYJApt5akir1zKBh",
  "key4": "3RwPU6MDdaSuC9GNxWfY3Ct5CF8tULUjz1EzGSfjAw6KZh7nJM3FXTtYu8n3jV2zdSUcRhiiENbuexYveAjUuXRP",
  "key5": "2JwGMZtQvSKVvmZRgxFuVokdN9Cq49mxv3wh5z24uSscgdrtxqG4ojNq7rrCios87p1RHuUvjXzJbfUks63oWFXT",
  "key6": "5rjBAuxLM2axiF6he5uJbQDy4PvPAME8xwpEs2sC8x6o67YdLhFsLCEkgAZccaykj3fTncsEmCRUL4pWaKv3FH6M",
  "key7": "5mKu3x2jfgPEgvkpt4cdKgweSExeKWrS1bVVbLvUTNur6w7QGWEVsa6JDAaiJFPXdY7FRWwLAa8RKLk6Cv7KXDQx",
  "key8": "2s6td538nuTcvSSpx8mVFntFfEzNUZUknxLBZzTwfAUzWqyyd22xzxvDRKBjNh1SPnVQy6yMkjGaoUC6aBcDXBRr",
  "key9": "5QmL75Jeqar5XemTkzaqKwcfFoR62u2fPP4VtaS6btjhff1PLyW9xskcyS7Fyk1Ddi5o3eeFCHg2BTJiHESYtq8x",
  "key10": "2tsgc2W7X79AbBydCYzD9BmrTZfDqf8E6fUv3Hc2vRqKDVMNwSsNRhMEwRGC8XP3NaTc97RNA4odCL9CtvPZjNFM",
  "key11": "yknY1XkaXufD69cBXyqd9jceJ3ZkYDtDvV94yiRDVAz9Qd1vAAZr63cdz6FNpB4bzMPyP59nWS6xzTw6DRJp2fG",
  "key12": "28hm8fC3HSbAyMHP7oxgVCBcAdWRdi9r4ZEpAFjWbg9ze4JR7TiCJvyR9UnknALFGQp72HiHtYSYFrmrYRoUeh1u",
  "key13": "pS1Qw2qtbjghTXLAe29oKNXu4iA5bxYXV73DJb4t3Du7Ruwfv5KGDgMUYVKoJQVMHmiydgBd71kfKHuPANk6ARi",
  "key14": "363ZEMxh7Qq3TzBpRfb7vLuF7mnJAByuMYFj4qRvVy3qLSjpsWgrx8JUsUnoSkc3gMwN97UMB9cmPvncZaAmivbd",
  "key15": "4etmHzmezYKgMsLKpERdgRWtUtus2LLqS7pmL9pgdaK9pKtcg9JCUDRJvZReb6Vrr3vFXEqMVehBrWVMqercorRC",
  "key16": "EMuSdooiGy6oZsstJjqfsqKTDEFHtPaX78CnHVFPV72MSt9itQRV4KG2JwJMLam3iD7DW6mWsKQSwnzjRgzG5rm",
  "key17": "2PoDR41kKuZmRnmK2inP64wFSdxFTBmRgUjCxFP2495xoZsicrGrNVzTAE5GY547VQLL73kiN57e3GJVkWrpgCYA",
  "key18": "2rdLCDkR9SMRh8Kdx2chpFaoCLhNukQQneFf3aao83m1x1KfGetd3ZygXCmL8gSUnvpMkyFFPtxuww3PZkiRWoy9",
  "key19": "49vYynHPDeNjMAFBVMvMFrJm1HVQGkBGoahZe8BHGmv3EkiVcGBprtBSNNofwvTEncMT3sxKsKHi93tbMwTUvvuL",
  "key20": "5hoM3tbtrny83HnJti7nPX5ZWChRTGbairewAuWgXHjpPw6Kg93AYKr298jVCXnb6hyEnbtp1YF3qbpTeHgsX8Je",
  "key21": "4S85wMZdScCXhgySeeExggveSS8jDd9rE2kFHUVXvF9VmNJb1ZbEhjoEXGWHDq22MQAVcDJrsZeyzkr9X3MCbQq8",
  "key22": "51qZvMWCxqVbginJBqBmP4ehodPDrxX74bEuJLtVMoCLxr9G3ZTyePr5pmF7kn3AcoBmdKxyEsc7j9DQbMr2LSt9",
  "key23": "5gLzRUersxWYidHkjTBdNhVMzZQyem1W8g5mjhVyxz27T45JMFKMeW2PwAjkL7XFvdyv3BknkW8mPv81rNKRTNBj",
  "key24": "2PEsT8Mk48CNkzDwQMQekL7k2c3JHGbTgdc5jrTfxR84jk21kLpS8DvyTvdnCXiL7CXAJsTRgAnnHExcD7KZyJHe",
  "key25": "4KmcxbX7bvMXRiyDQveaFyBXbxquphLW3XpVG7gmm4rW13NBSiFoWsMJ5axT5v8DDgwKVWwt8HXGERG2ZuEPM77w",
  "key26": "5YfJuWYATHcQ537xQVqFMwfYQVV4KqQnUF5qMQ1aWXvmAtiYMshacaJiwfk1RT8v7kisGJMCTerqWMcR6na7gPrQ",
  "key27": "HxGmJUXEroNmZvEqaaF3VtxzfZRxM3HkZBxbazvtzi5PHeCbJrV7cEhKf8adxBU32T3DhS7YjssmZwq3a133rSB",
  "key28": "2KfhkLuAfWL6mvnXrrfE6SwgS7yFSNuztm7hhtyvonN6CWrS4yYRw332UAnWgfSxc6oYFD8dZVJ9UNeEemsmph8q",
  "key29": "5aGDk5oQyoC6gsL4pYurWD9XLfKpMwsm4J6HuUh1g7XfTvLoH6BSFsDTfi28kvHsmV2Dbokn84CnCGPoDdB1BF3F"
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
