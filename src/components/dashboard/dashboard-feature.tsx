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
    "o3MQzirZ2Rs1NXMNcpNATG1V6wuxNXBm6P51xeFWRM5iYANZywoAdzSq9eoGcZ6tZ483vtBnNTtqFJBfgvNkBts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJShmKUdgoGjq7XmB4nKeWofA6L7ueet4ezCgb25hyYquAkNWTVkXAATVSXX6Ts6BChxb3QWMkTd74NTyXAenHP",
  "key1": "4SbU1s4RivUauZQErKWYrd7ob3dKCJTzsRUbvDc9K8Yuk4ubFbhfQUVesHwWYEUaxxUqwYPRPkwcBQHSJdubEs9d",
  "key2": "UeEj2u4nuBzYc6KD9vQbqe1AisGXyzUXRcH9ny1qwjNESQaUXvDYKotqAEhUM5DgdmcqmSD1gkzPKrYys8UyTJK",
  "key3": "2eVobYx2MT6kDC8NzJAwwUaiR7V6U5yVhm2XEnQrotEvUaoSg7w56zK2Gb3cHDBpjRetUgfVcc4r4w5gJp3GUURK",
  "key4": "4CpVBikGfLDJyd6hj86QWwcLAD7rhT8xMZP4VZtmcAevhcDEQ7PHNjSeAcpTzKTMJtakGa6LqNb79udLMcXig1fH",
  "key5": "3Qyy86v8hRgysNDwmZ2p9GP8PyTjfde8aELVMeLwjj6dxPgkkQLYfqUemiQssBnF7jwMaKypvEnhMKGPAk89mVTV",
  "key6": "2ehQaM5XE6Xp5MrYihJETnvym7LgZKUhQSmtq7V3MExH5QEm96iEFvdQi6rWDDz7UQeSh78QhEkmCDFKG4M4r2R",
  "key7": "2G5JjrukD6EBmWwfxYa6UmLKnVEnG1Z2iHiSuKnaYLW2KwGENREpz3FPwHdybmEa82J2MhrDR3Su3JLUNqsTQNUv",
  "key8": "5jwnarUHz7V4UhKHf9C2MjJSVVNX9UcEuwFdcsp5xaRy6LHnNhSde5Nh3KFArwsGBj1W1843gPBXp5n4YtJMHpeP",
  "key9": "3NAVqyoZUJiXALMQMAjRU4ygVA5GL2XTcWYfKHY6gGUxrhqtyWmGFJk2YjwGm8XxH5WhinHyCUw3xW9DzfAxsAHu",
  "key10": "2jCYkFjZPyFkCZ9GDvjJz6wfxPESobYcLSAHoTGrc4wQuYMUVZVca44TzKmUhyHhQrZtjNSuJxWwg8Aef6sDVCnB",
  "key11": "22sTRqxtFA4Sm3NrGWUyAtsmyMGDHn2q9KQyqDj4uNPvhrkXNrZHz1zyn7gQDg1mjz2tA3dT3r46K7Bbtk4SJN9P",
  "key12": "5shdFiTJpog225zpbhDhqmENx4uXkk8L2JhZf4TGTqTR7mRK25n2q9m2vpSn27iqE2VnCXkQgZtwHPcrYYo5BGpy",
  "key13": "Hm1avbwaon9X1AZwowZq1GfZcAbzV3j8quGhYDb6obnVbAicbEp6x9QjmLZN8ptvxxu3gDm1PYRXAE6gVUNaxpR",
  "key14": "3saM9dEKySBYoFjE7ERvWTdeJRaZ6SuHj2X2AHkT7QAvM2KwXWGmRiMv5abUPCNnRUwNpaLuUAU4wofioRi2JZqE",
  "key15": "54PrYBcBZBUDRLcAAgSpJnU6NeQekXFpagsmiFMXqiFZ9Q7JDTwMQnjSUxn2P5BcZUZddYjyJMVSwjYKdVkHZrsf",
  "key16": "feTwWGkrg7pit1KfWM5Ks7YmUCDCWivexYm8zEXNYeW2qhfxiqw9NCWzj5F7WbeDj58iYrqd8WcwtuwdHU1j4UG",
  "key17": "35daAAWo4RykjPeGk8sqxUfgR5LqRNs77sfnHJoJyMPQhoyXqNxp9BaK95ampzsvP9eWBtsZte2Kp1Kw4BGtYKpB",
  "key18": "22Y9pmub2TCxKWZ6wagXpWWMCkaW9X66RG2PzpFphNHuu56eWwVUE47hufbP2ha9L9G7H2371p7PNxGhhWs8uqTN",
  "key19": "xYK3NcRQhJrZwMCvnoSR4Zqxgyo9QnjWoio9bM1zpAZrNritz1weZM8iqpinHSS62zjWUR7EzJrMFH4E4NRKdzz",
  "key20": "3uX69pQ1AsXq3MgKdNJYfSq5H7ecx8djw7kUBNJzFqCzZQXE72fQraVLQJJmZVNiqxxsDjz14Gp1LB4EVoz4VdjR",
  "key21": "xAy8NaYVD3uWs5LnVjZLKvBnfe2f21HbZGRRMP52p71vM1EeysYdRPzQWnEfYAYk3noS1eTapEBJAVNMMtCo7Ga",
  "key22": "4v7NWakJvAn3EeTnGruB29KkWQqimvnEBdZswBoHPMNKgzDWCP8Yrahbgnzy6mAqoSoS8sp8Myq9uM9rcXBSFqrR",
  "key23": "3ZmMq8YoaWzgeGUbZWfZ59npqvVKF1ZyHLgJ7ZBtcjxeBUyJsCGEzxQ9mgQ67qQjR92Vvr9TRk28FxgkSJVJt4XA",
  "key24": "5yYraj3jAS3WdbV1GtNs2wcvv7kV9Dif3E7UEQgtoBYWMqjBx8edA45yxGMbP4td8pA66HqodbqGzjhwA3yrwVEa",
  "key25": "2ZbhZjEwgAnsePPbWg6tVt6BUXP81RaixegAAvHJETNoLvx98cq5JWjAoprP58a8G6winnU6Z3WpbAWPNUiNMRFw",
  "key26": "KY2cquXMHpcDi4BeKY5MHcSrxf3Nr9V4Yy7UxyRciqCY3YGkErxADSZjpL6hCvYJcmf63VyPcr64PxiiXbNiQvV"
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
