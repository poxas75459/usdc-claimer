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
    "4kfBGaqta1w4JTB9GiNkaVNrSdwMo22U9W2Eu32utpQo7xyKKxGJLmT3RsavMZ9JFvLoEQw1Yhrv6iPPLkrHKrSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ceeg2exfmWgVYss3pnWV7YVfrdmWom4huypPFJgTv4PB8dz48suPPiKzP56EYzWpEg6Y21mRsouh9dqxD3oWy9G",
  "key1": "3WkhdC5rSX87CUADZYtR8XPFRCsB8qKRdNZYMfcwmZzwDU7HWYSoo7BEuMm48HRh7czRFuSeVmPrQUAofcFsCZ53",
  "key2": "5X93ZYjSr3vLsHLjmAopHNtzw1rYzgWPBKnKzqs178vaa8UYo9iYmXpgZ7n3SwQoABM7qqzuKG5QkBkZCKMc5d8Y",
  "key3": "4uvkZxWoohL4B4jG1L1v6QVkii2xxbrTDgU998faBMwk98dkj1kCBJem4GCxtqFAHWRJVkY7gRY4xCL47YWoTZUq",
  "key4": "4k5Ad3khK3NngJiq2tux9KFx2VKhCtyx2Xk14XjD9keuNFb2CmqyQAmVp7DnxMNcKvvR3iJd1TjGnWr6QRGqGhPi",
  "key5": "BtaC2K7tLp9kGuvGBGJJsew5AtdCnpueF6ZRzVjjMuqN8ju2MCMQgCku7Tx8VioWTn3vE2Q9b2juK5atWfGGfEM",
  "key6": "kcM4yTkyeB8QQkPJFxE17qaessE1caucVUSp4uo5LmzJi5xj731Ljbu2H6TyoExbHE5dqc9NJUzag9TB6yEUWci",
  "key7": "2wRUmweaLmxWyfwPAvRgLLHnQyF9bAL9WtSzPfG5j2R2NREurLN7wt7w5XyKh85NwLC1vSMpanAMrEFDe2DVfxUu",
  "key8": "41k1RrC4HnDRHHUw8ReNKqWJaYHkiYXqjbTJj8N7sbFA8FLZYCH8cpNxKJUMEjuLjfuNuhhGoF43JksakG1rtixo",
  "key9": "7uFgVYxe2MkDAtf7LRtJDHjZTrni9HKrU6J8Ri1VixhJRApwAJQSuSAzhB5dwfjXo4uaEuvAXDZSsJPpiJd57KJ",
  "key10": "2h4hgHZ6UQ33xSyvAgEvVoNaoqSrUejDePCG9utg36BwGtLsXHe7piaQ6EjMRFKuciEEZNAoAQhyy8JVRdYuZZ9z",
  "key11": "zn7LpJuKGyJkfLvSoHitsTcp6T9esXbRXVjnKdrqRJ9vRwDz3DZz2T591mQ2o47ttCBUrauMgNP5aRwMkaosSiL",
  "key12": "4fMEm6e5rjJabwZE6TJbMum9vzAnJe9vysobMPHnVyUr65PDJchEdfjqUDB4MQgkEHVYtKYs52RX1cnpnTgGKzoG",
  "key13": "5e4AZQFA5jz7cQnTwxcXMtfPvegPLfDYGLvocecZTGQRfztaYF2GiXJswUmpQGBDCozHEv7nEhsDfJcNXAXMqgL1",
  "key14": "2S6XD6LqdLiFvjxTkhtsPPpQYXY5kGEBg7ebd2yU7KHDrVv6sE1ysHJeLsmDADg8U6dMpvx22ZxydaBqteSP5gba",
  "key15": "3YKbasqDMNJjpPSxbdp2Mgmu6fFXWEArCJMfCYNgv1hTSjuTPNThbmNmerM975hmjKKNYHAHV31RmZd1sVWBUJji",
  "key16": "4b63optxSF4UkyPRYah4inS8CghyNQKiWKNGhpiKFkEiHcmzKQg5dHtNgvnsdtgGGKagHdLrZeMLdUZo8dMg6e7V",
  "key17": "5arenzvLSw3sAZimbSCUszfsxUdfGtfxrkbXNF94sTEEEcaSqazauzDLi6FfG3xUzL7VRyFb9nqGtgtF9YNrP81s",
  "key18": "4P3JtHLKzCngyQbgzt6gkVHHLiDkEgs2Wm1MUba7DwjdcGWceBm5ZYTNVothd7LDZk5BArF1B6w9L1upR8x8eUs1",
  "key19": "2PEiGXub6AzJBpiatKW7eDnCrbyuxN4UmqBtLgkuetR3GGPuMzezNcBwusWogp6r3GBRLWJk4tQSMzLjFfqKQKcm",
  "key20": "2vCvzazHu5ghurPsCDD4qNAQmuqjWAeeXRWHf7UD536SRd1KV5eZfECB4wF7D7WELLZQadruwrpxe6BsJW7fHhs8",
  "key21": "yYFjMCyryaQqzQiFVo4kwY3e4SY3k1qg3yhst4mVdM5YC14MiLTCyTH6zzFPr4kVF77Rxmy1va6Y5pp6PGzdkY6",
  "key22": "oCzB5X6388eQp39rRezGunEm6cj3iheLQ7AhWDwDPd4izZ734UEyNRi7Dw1uJ7Pr94118KmTGe2fZwAxR9AMqja",
  "key23": "gyhKPG3FHr5fsquYaPY9uTFHfZbZoGexdqcHHb59oWYmh7zZuwRPMLALNgez6unNH4McLLK1fHANnyDkq4Df5JK",
  "key24": "5nob5JDLMotfGcKj69gvc3xjasoWp3wyCd4uHTyq2hRLWhjxxVuhBxyh3v1BFvXuSC8S5DBQnWA5G5CVR3SebSkQ",
  "key25": "2XfNT89SS1vJmqy7Q1CjKaJXuzecTCZ7jHPfrxQzKrTNndtf3asxPd5g8iiTZ5e1qzQBmSNQ4YaQa2tehdroFcZT",
  "key26": "5gMT7VTWN3j3NPVd3kF8zet2AWnccFRqVikxtGN6jqW31ey4nkbFeHggdobdPawSSqREG2v6mZeEThgB3QC2RhC2",
  "key27": "39A2nBLarnjdqzyjQx6yqXAraguY4WbahPexMtXLc1pfcBXZCtBD4L4vPiEbV9hFHhLQNaqLC9b3RWLPXYsbWfVE",
  "key28": "5Vtu44mmRqHgw5o1jzCLxFDurz5oSrNTiez1qQ7NCQSZY6nygymk5PfCQbBXSSJGMLoFsUmxv9BC3kaT2DtvhMhx"
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
