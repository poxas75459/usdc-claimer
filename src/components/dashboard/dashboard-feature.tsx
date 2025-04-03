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
    "kKQy4UcMSGX4KFRu9qcMMK7yvpJXtmLEoxuWD97rJJQAfeeWDL4UNPbqwSadUigF9VAGi9iU3iUqRy1kSHhxwqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ziCXscRa49FswmydK45srfG4RyJPpU2vGrGApqZqkZ72XTtTtPNX4h7BwHjtAm75CT9qsT8KySxkFgFzAup9Wb",
  "key1": "35YtDS6bX63Ja6VwXxn6A9ELRoiKZCyUrSuKBx1BAhRXBEbfe1AZAq3BmBVJws9d4CdUMEwH3wyJ9WHhD25JFc4h",
  "key2": "45Rf28SyfK8yvaNQXQumvwv163ZHcTeeP8LodykhDKSQamFMtVL5k2oAemPYg7x3Lg1Chg18Lv8QVbUhKAuXeDrA",
  "key3": "2D6a1N6oyVVG9jmFXyc14i6HBhQVXFg87QTKPEc4ZvKiCMza81YEzo566cnaiRTSSWxH4zp77QkDdwM6YTimgYkP",
  "key4": "2mXPbh9BD6dBYcASUNNScM3EYbSZPRyqwGLfZKbWqfibbADrP7FD7o3gHqYJbouroic9uotAaeo5vKPt9L6D777d",
  "key5": "5M5fYJkSugAxyDyYue7fn5h9PAo7fsKhhohAriZy88vVNMXKBCqCSKdjck4q3PezGTa11ANQquPcYH9oKJNSchGd",
  "key6": "3FdtTeJiX3D7GNmEYKZUoM3e6w9Bc6b6BmYkY6i7nrNdEHYqjeE4cWoAw9b35SSwfNRbApDrs27rsFXZDJwKiz9E",
  "key7": "2T6wHEUWSc6wrDrRPq3UJuz6pmNvAi8uehoTJR9orcwTGcVEvg4iM8vm1oKtBMrLMqaeAodsE7N3EqmQrdRjt9y5",
  "key8": "3tHUkHb6tBn5qgHAVLLRnh8THcTH5QjrFsEL6NMkjeHknst12E7bWKRKR1TmZTykayLf6obxcTVkWSH3wKD1GRNW",
  "key9": "Ez1gidoUyP4ExPRp9MwFUxLqHiqur3gKFCPeY33TApGotZt49fFcJq71aei4ZZnzGbrEs1WpMDVsogRzPA43Bcf",
  "key10": "2hyP5FWTxTQxWyJRnzKGDfMGQmWza1FFDWq7QFcXy6xGVyoPY2tpfjd7KVVZq1UV88PH3YZtFMLZoNSUyjZJLhrT",
  "key11": "2364QpRwzaSzs7tP281SgTtoKtaPoE8bdmgb4gi6tuKZsrkPSRX3BqXpaTZEmxYMuApSHMHXanK719AtiAtRXnYH",
  "key12": "2yvkKyz6DWSCcqGTRU67gVWc4bbPrXKzgSfT2aRh8huUPxd7SVmStTPZBxjeYoR8SstXugHpqkhoZXXiiHBQdNQq",
  "key13": "viFj8YETygFUrRaJ4Dg9GnKR24NoC7KLcERG3pAWuKBhAbcuEJwnydW5JhowL7b57WdQqBHwtEy2h9VTm4vGWDe",
  "key14": "6tZ9ULe348EVQ5jrbHjvJUUwHDKZaCV7jxRSpgUvAdRXa6gfWXiMnBezVPKfWPRCWwB1QXr96seNqBNWte2U2qU",
  "key15": "31qagGEkJjYCnfsKwCrpgeZmrT6bCSr9ABVpfgQCQJtEZH4VYPXrrYERt1MamTEXoAwDhcaBoEJa6PN34R6oxedr",
  "key16": "2WQkC3fBXQiJ6JdGa8b6mQjfGNHybe6jReaK2ryNGchKGn5BNK3MwuS7pwxWC2wGKArJytGdevMoViJx8xisL7BD",
  "key17": "5AfQAMFi4Mr1W8kLNXMRND2UVDiw9rJ36X3ic3YTKboSiCRtdgCbpEAbi1BAGSa98TRYKn6HP7RxEMasvBfFvv9f",
  "key18": "UZs7a8eY7nGS9bbG9EJCpWo2bmUajCBEce9Xdu6tNwjU98djLks5v75YhfUc9B5HfmcSnj7ZMk9KszAcd9NpXAr",
  "key19": "4gEdw2eZDbQJHq8nhySTSToBSMXix6cCwJnwHjr1HZ7qPLpJCQ99x5NqVoJEfKeKZ8y3ZWNt9HjWSAQz9AtwJk4G",
  "key20": "KthZ97ZnAM4tGbFweSZwVSNAdNhQMu7DPWAQ8eybkhY96AaXijetTj4QjZ5HySsC2DAWZxF5hbWTun4NRD1YKmn",
  "key21": "shCSjiK3jmKgVFnfv5fYazEVuQK3jYtVen5pvd21Gtwuy8einrYPVtahcMmMyRmQJ8fdhVQeZc83HpGF9CfmgXC",
  "key22": "2CidLVvUceokz52RGDTqVZd41esegrW1gD2QXao15sqCHS3AHVyzVpzSyb9nYfzxLPxpLXc69yerDJXyeoWDqfhz",
  "key23": "UaN5S7KDvZD5gyAXJ4Y9Kh3YFHBNZngFsWCT9V4QnpAXPdz1Bf3aXSiwCddJj39vEvhjYhwtpNSe1wBd3qKZ2ut",
  "key24": "54ECe2YLzVV7RAeBWmDwjRhQ2ovEgr6Q2dSjadQkGQgQrvmpqSzrFMFLE5X6SknxsQm3UZQK7JHqes9WGjq2v5Wn",
  "key25": "54DRxxdydkb7vkj5ZZLFcf1tMbQMFLwuMzghoCVtgbUPcWpuAbEiwxj5bne7SEi4zduchkmNmYYurKVtfjjGoANg",
  "key26": "BstPQcvn487wP6L5U6GJtDNuT6rW19t9kkZjYkZQjLKdPYoGhbkKUQnFG4d6tducHGrUTdkzeg7mJHmqEzVXATW"
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
