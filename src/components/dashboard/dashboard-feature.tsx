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
    "3NsxpuapyyCDmXQriH8Tdancqm72166RteuRsmi2XBvXhdQpzT32TcHcpikqaNEg2uT6Hb9L1t9ZEgohQRrgkK5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64r8KbKwqwAzaScPf2f8nLNP2AR2RnYvevtx16w1JrWvuXZK61RoEECRJjKEJ4HDhP7ew1WLnLTDdsFSZE3FXjoq",
  "key1": "2jpyeb6Fp7FLbJFB2QUURFV4YDPfH9GyfLBTY9nLR8bUa1UZLBeDgp43Ry1oxwuK5d4CMo7D7JYcgtwAY77DqEfM",
  "key2": "5yY3QWRQgJJYNcn7gJoMdLuQBogqG6v7PSXCgaBRo62Cpv1hU4GxNQiQqGoVHCo2oAijwBt4kXLRMdnviduqcDaB",
  "key3": "3k6FpKZLft2FTzfTHe4Nf95pe2f2ukm5J2mWLjCvH83J7f4tMmpMXMC2AZ2rUhDaK54KbhsECbxKDVyPUBFXoxXN",
  "key4": "25nRbYRXpKnjeMUtDQZ5pGg3ANswAihQNUaa9jpJvyuKQiq9E8o3umawU1NPvjXvpuP4qD1cmPXV3Mhdcb5DFSb8",
  "key5": "2grMjHMiQyghdvz8aXEb1qeZWpboTcD9ZfMXNiQf5mZytLGYk4u1yJenojLduSiwih11dtU4HgGvgJejVaZnhHvc",
  "key6": "4uSuxnZkkTkgUqZyo5eJeqDY8X5RFdCQa7fmdqeLeu2taTKU1MZ9oB5y4XQqhw2RCcifCAbTT29t3Hs65nzD5M8Y",
  "key7": "3hA8nYr7Lymh6UNkbmwjoRNy6mCeoFsuuXCKZv9v4G963Zd8gWzSPGvnwfDu8qruJYMbZBrrgT2iSn93podV2uSB",
  "key8": "4zQa3vYDZrwJBWErPRy1nd5o5mti2XjdSuRj9oxc2VEfY5pJLknz8HyeZxVw4hZ4gib8n4W2S5NjwiaUdQmHuEy1",
  "key9": "5ibRTCzdK4CLrQywGgYDpDwqsv7iXevkyK98oP68QJLXpb3StTNV9m1ghi6DGkEuuWGSn4h3g6ux2sAcufxm1iAJ",
  "key10": "4Wy1aAjvpUufmar7vDUhUJE1YJM9oSFpAAQqtHf9NyQxBjLbgXJZDELaKKk81WPP5N2Fezif6nYPdSpgHoozF7hQ",
  "key11": "46XGbP5xtUoy87HVMHZcEiiBqRgCeKvsJgdWBY4ikv59Myfav72ULdavZJUtdEQPVFQKF6QiEnU6MyyCpycJWScS",
  "key12": "4P8uQnH3XP9pCiPhNdph16zPjrwYDhGsPVApHKBX7kkX9CNnc18eDE5CrvRCTfGJK7n5H7e5R8KmreX3MBG2UfLy",
  "key13": "2h7k6iS7Qj5QTEqCyaDUy9o1RE9WDedou1y6CBfeXsdsjvGfhSnhKeGmf8jJ6t9sooiMRzZZseyCjniMDEUQtWdK",
  "key14": "WuP3EXtbEMiQB3QRYrhKYouTwDiSvvAngT5RWahDipz7iQwMUjppxbVCqieP44fvfDJzBv6iSRyeQChkBYKyXmn",
  "key15": "5TuiGo53k8jLEktkNmewsUfxA17zNzkUCGVpee5cxPEmaAnkHEFsAKr4a9Jn3pT68fAFHGM75pUteiGWz9EgfbvB",
  "key16": "8PKZYLiS9hBaGZP3vTKc1VGcfAknMEwAQqbGVEaHkpscSVtjs5Z9YpTBGZoYbV4zgpvyi8YVDcm5uiUsEXAVQ9x",
  "key17": "mAtCvmPXvbyL4cp3tSmRcdJvsRWsTXRph8RTeothogvFtNUx4woaZmDxvL8MVaWa1uuA7oefTUHxnatvxyTVDvx",
  "key18": "2qZ1SG6U4BznRxaJhqL5c2h6Uui2GZ2bsBnug344jpPY6DZGEMCMyJD2HQR2EEyKarxWVYeDBdWMmnLnqrkPsxkC",
  "key19": "5nAtuNDd1DMRB4kfzcumypowDGLfsc4rbodp4LjDG2nXtdv5okb49KSPWyor93MJrBBngx2JeVSdBMs1zQ3fYp18",
  "key20": "33duWmiEP9wa5vYdZEpxmR6YnxhfFfndQB2dp32724w8YBQwUpbMutKPTVF4WeXBTngPdfo1uZgbeMiWTD5MQRU5",
  "key21": "2U6Hx6nL7KiDjpsAbM3JSY7PU7HgZkiG6rEip3niAgSLXaBfLwpzwdamDiPFmc9zidhajANd9Dz7bZN63rFiWrDK",
  "key22": "4oCCbMou6pYSnRzd3nQV5YjEjtoyyiMsxeobkBywGRxgEno8iHpD1pJZPNc8fMFDyFKzjuqzhn9p7jXvDsyscynC",
  "key23": "22TbMzCLKxXpFzbt1E3gY6C3uKVKTrnnKe4qzkCPEa3sK4sfvHA4vCayRTnYEqaRdohf3uGbYoXvv8Qtsgrt5GVc",
  "key24": "3U2PKvhqG6X2YdZMb2LGDvdHgobb8PL7fxp7tUy4AxG5KyBt9sdCoxz5GevKQCf13aGKAPsC1KXCjEyQzCPt56Dw",
  "key25": "5N56363BcSBFkhiiv7NdhTni9JCBw96SBLGkayTjY6FQzQCjjUHZ8hKEkeVSSJqgyJbxTtv7DBcCRq2PAa6zbaet"
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
