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
    "5CCVPnyxWDqskUmTYLPeoPgaZYB36tKtxdcnsJZK1fu4o4p2JA4Waf8BNDUNXjHir7dWJskK42JP7GRFU1Yt9mHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44nUpTNEVDi3XZnJjaDF4GCNWChkrEj23oYj4xVq5sAq6Am7yKKf3hEUMoQWn6F39xdoR1g8FBDxG67RcWLjJuNJ",
  "key1": "23ugTw4RV6CK4gW8EE7CtTMmpphkqwvn12N8HsXsgmgRpWa65dMv8QRpwKgruPJpqVgsPSYxG49pT93R8gSAKERx",
  "key2": "387ZUCZUsrEbv8Uf2QRxHqzbXGbZnrjgxtWix9LGK85TV4fhSXUVz7b5xDyHZYpRMpxHob1sopAHbKaNU4F2zb1W",
  "key3": "5gQpvNi1YkjWr83dyL4a1bjML2ZXV4DtJMXnoEWsbehnX7LPuvjnqAUjEfT6ErBWH7WEVHWq1bUSaJW5CuQCLen1",
  "key4": "4ucWdSEbtj4kAEWPypcU6TPBdYcXZpMct42EVYUuhM2HCLm66gPvjjAsvkyc5fozazAASPxDGdHf59mDK62vqfMA",
  "key5": "HdT5cVDsUeGC7voynVmpTF8M2EJsxihUyHb4yvpxSbk92tHAHQQaAevzxSUcf9f1ZWioVb8CaSP7M7pw9Hwd2zC",
  "key6": "3gG8sW4TVKeWehz9tWDCkQP1wVTfkXkxPusQZ25NJFqxfxb7fbLnGmXtKr9HPCu8i93F5Lr77BtFNgdF6iYussYt",
  "key7": "2iDrjPR8eC5JChjygsX7kwizeHg7Wb2cgSNV7zpVt3BkLmqCBn11F9fomYhKMPpitDCQ5ksHcwwC6gfUztoXdAJd",
  "key8": "4VYy8fHrQShwz3BdoHjSou4rXvrThbzdZwq2Pp1BAsRrf4Qx8Wn7Vm2L4gjq5zCgCEMZrdjVM1Bfhzqhv9T89Sx4",
  "key9": "mLsyg3JbDmnhgMNAqxD2Mgme59hMX7s5odq93eNWnvvBZ1iyabHGuH8RcQhBYZ67tnKtvWBDHZ3bD5VeL6RG2PF",
  "key10": "4sZY8pxLGWdjFmLuouS2jaaorcUV6xHxMMxRg4mTuAXDd3pH6U2u5LeyjjbuicA6b19UtWDv7iqSdowkvzKnAdVd",
  "key11": "3R3mvFNUziX9pRCx8XFeiTM95Je6UDaWAwAFUsGaL9SpXArjvf1UmnXBswfTfMSSeAYaKP41z8oQSF4Q5H1sKAwD",
  "key12": "4zPnv4aLsHqx4zbJcoTxukfK6eMtWrahJcJYQgNvZytt94z9xD9a6VZ7QCroDHzD9s6D5utxtBv49Kz9SKtRU2WP",
  "key13": "52mVr7pws84zaoaccEhQyBreb5XJBNDywCADD2TWufSgSiSEdFPra4sNNYkgz6TkjCJEmrMcaLjF7wpUvP9J8sLv",
  "key14": "3oqPRyBtbw8QFL4mwyQVadMJ2hWU83SDhZJwh1iHSeqfUigUUmgc4HkAg1BpF2q6CGhuymJJh9BoU97QvEuVPEus",
  "key15": "2wvnqm6ourvKPYrDaAyQScChiuW84GpQ6GY4qyiXVnsjHguURAPr8Dnio4B1eYWfSfeJUUdpbexjfLvGdGH1RScY",
  "key16": "5KnD2oBTExTv1inYW71JoXx98rZEpcd74pc8RQQzUoiJWuiPrqrviJ4Et4tPhF26uwsTMmZrXmZXoNTCQdg1onh7",
  "key17": "frCisjBxPG4mcnawyWoBMyE9aBHBmSuNSHpWJsDLngXUNYdsWdZqXkpeeKA8y44RVC5fZvH4rcc2AYdjNTEBJhW",
  "key18": "3ER6NGqSe485rfmomj8XZAmf8KUYZ9JSR24Dhroct4AtRhY3Q28CuuGNjUCEeJCiUeYzbMtiuXH5hSN6kTB52fLR",
  "key19": "4UMMtLj1YmAEPyFcRpKU19X4T6m3aXWCknFd7LhUxZjSd9NfQNdTVZF2ocDCDYEYNjQQGpXL1dLoAXV92EvVLbBf",
  "key20": "3be5UPAMcVGM5Kfm6dKf2JnfTbWWM97Neb94LZ1FxDDmJPzHKPyWJjSFYWzyqVCU4q8YodfrpRPjow2i3eu6wu5f",
  "key21": "4oM58SGvXmC8dT8cJ24e4iEpMe7FjmjV7Y86tExJ73EU3Cn6kyAmZLtLZ5inB5yp148iuSUbXLBVMziEa72EJnfo",
  "key22": "4wGjBvcD9ZNYMWbBSE5DVe7Z8pfGpzvDWo4ZVGwrez7UjhFKMP3K8TabrwuEoh45CbckptS6FMHHjkThiQ4fnxZi",
  "key23": "3X5zTX697vvoqE3HJ5LxWg6ZEFKNbdAvCtSXxEdCZwFMBr8i9dQQWQfrFMLo63AWNpbQsoNsMp9Si1msNzmQowDQ",
  "key24": "4gHnagrXVChkzs4qZBsy9D6XJEGbZxB4RBPKC6Xf9tLhtrBmGknvZt4scU1XDAGmXyWCXZ5pSop4AUqqAqj5PLRJ",
  "key25": "FjraQ6XCmShLM4YPgWGU6SSmW7a7nQ7tiLdrzGaJaDukX2Ymg2JLa2JJD3Fq7ACxEXumMJ1WwZd8vQphdf1Qut7"
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
