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
    "wqUcai7xXPfysUCMGzuhZ5BUkVhs24MmDMybFwae6gwA8tPpuzTpJqz5jgK4CW5ns3EeADN7E8DEwNEXcuKNnwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FxLQTFwo6qCiUb8kVw4U8PoDhAPdXChgrFbUMvnEWLvpXKE85JSPUJwBg5qs988Zi7xST4pAPNQr4uKe8vG7o1",
  "key1": "5J2JVoUG3MeSG97ZpZKmKu4zoYmfxQTdska1DuBQvbFzMLzXdX5UXhxYigWdaqK3APocWwbahbYh16dsVf2iM5Ny",
  "key2": "58qjemr2BHWwVLfGXQkS9di4FqrD4iDQy1vixx3SothkqRiAzwWdATgYATtNy4U42oKvL5ywRAAwmwdZwA2aoB3i",
  "key3": "5tegxw6NpNmJZP8vg79meSfmrpPCU985sf178PLfBBZZo2x2eiWSJKCGARWJABUi7o7b7KA7jopy6hF9RjKjeniE",
  "key4": "hpf5zMbHySkakqYczkYGP5TQ1u7sJcYfXTosgNfkggUxBQo2MPfy9pakcTZRaY1GL3NuR5CN9zcvjhVCbDfHbpk",
  "key5": "3wPk9aRbC4Lc58VeQJihsh9KUCYomqKrYednVS5PMGiQmGMY2WpkBj8BJYmJPMkiiyqfgR1N4kHXaCpsQU2QLYym",
  "key6": "3C7ypxofQLizt7ZsquF5CruFEZkRPGTNwrXEZvTpQXKyFeDyAB62zqEPNKk7mK5Tpe9jK5VhoHW1f8edwBnmfAfn",
  "key7": "4hi1ueUWsNAgjpyiFuwN6NEzVj1vEUJSfNgcBgjrjdSJ7paYoqynAHPHSD3RjTwy7x722bk637HUJoH6fhGQ5Psw",
  "key8": "5yYaQfZ3cCuzm3tFK1Vjf4qBn3sXucvs2gMhGvhsCrx3KgAGsw2ku3kkgZKVRhoqLSCnD3Lv6xrRegQLXP15Hky",
  "key9": "4yrNoKUceAfDLBUJ1132pzFExnfLtCGZUQh1SaSh8p7RKWMrsUc81sjCFkUESnRXVfrT4GxemP34tBKaWN1vRGU",
  "key10": "g7LFechqjJcGnWE5mVMroZMFVBajeoQLFuEGEqb2oJwGURcF4m8TEh3hCcYXu9P6RZUaXZvv7NtaET2gbHw8kxZ",
  "key11": "3xtwz7ZKiSCn1m2odz5gwFnsqXchHYkTxP3x8VfEX8TcTAbWFJ4LKmc8vrn28x3ULcVs7KUiTgco6cG3Hhy7D4h7",
  "key12": "4C1DHktjignCfgF43xjhxKJk4QLRUZcyQmS4bub3q4S9fHtsLUeUD4qadtGwhukvLhRJaddvYw5gMmqDX3J2ZS7M",
  "key13": "5ojs2MVossJni2eRQvdQzbtoiETHRZL8BevXtw8ns7oYTFRdjKgd738sbDKhBKAyL2qL4HAQsCYwBHAT2JAMH4GD",
  "key14": "61FaZwtfH9NQaVCodnHyPZWaFfxXmt8dhJrM1KaHm3PkffLF8HouMq7E7FFk4iH4XT4KzkHrTGAVgSnYHC1D2XRV",
  "key15": "isBoK17PkaxYrp7g1vm1Dax7ZhKqGjM8GWUmVqepKHUHrzUFSu4reFfcLZLgs3Rf5oDAW8T1xPXT2uxCA4upGsU",
  "key16": "Ph4XF3wgc7UUXqtNsKxpjKP8bRDrJx6UC48Qi67NpEaSggP1nQJpef9YEfBHoqJr7VNtJb5GH3mEeJqciurwhbq",
  "key17": "WSU3FwvzNf96Mr24yQQ3HeBTJPDuDD9TUyGG1GaYkry1tfeU7Q23hbBFVhUFpgdFbrSCsA7u6wgzD5QbBEDq5g1",
  "key18": "4mYdcLeRPEu2nn5z1UPFzeJ7eVkA2YUTV9Bx8Stch4pCcLfQRfRmGJZ2YEfJv7wpmHDr7RkrQitdAHvrZCWtKPWa",
  "key19": "4eeY4NAge92KHdnUpAStRCZ3w2Zuduj4H5Q758DyRp5oZSQwHM8jP6mAMfLH2se94H7KmRpqGsyb7T6C6B7v9NaV",
  "key20": "g6fp1cCiEQGtqJJdCnkctjV8Ei7HFpg54yBeHwDhe28bnbh4hbwxm7YPUEqaZTDsE4oD4M3o36u83WVEA5TQYAL",
  "key21": "2WRccJ9q87BBa1N7aTCkBPaGNrbdNVQagDWzrTFm1aoVGmiXjRrM7TybHsJFNBp7ZDnXLX5BXfAoCaUk8VcQGVkq",
  "key22": "2pfDkey3PtNkeU6W1bofwEdxVLx2R8vWixLGEnvZ8tWJTHRPUynHMpSMF71FGQZt5j3bjRVVD5UrocLFQvwoNjvi",
  "key23": "4rzjygi9thyrioM3gNe2v7vgAKsSvaLgbWJxoTfwW7YuwksEfGTG1Jjc8dwvAGGciBkRssPuC6RAWbstjc9vkNah",
  "key24": "3jJtmeN1pYY5RNFNksrpRwFTMoDy5jNxJ8rEoGYEPxSViNqptsYEzrXFU6RD2pGR92z8yqgQ6mr82E3D2Y42eneV"
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
