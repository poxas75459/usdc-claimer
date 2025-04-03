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
    "dP99SqkQGGwMxCbsGk3b7HveV5dnQDBmpADpAowimDJnCnDcooQSgpHJTuHf8imJ6MhXmHMXwfAWbAiQLVWbZA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXvRTBwykHUcH96EKLnZJY8e2FSefe7CCVNN44qVHNtkSre6y9kRVufvdKFREDRtrhJAohbweSm79bHnUmH7Pr6",
  "key1": "2pJ1NkWi3EpSSUq29e2Kkk6JsRbaPKtcXtdZQGBf72fwj9S7hBxFpBiMiFTDSHHFHXD3ztJxXRm4iNwTWosEokVA",
  "key2": "4nKU9JZSvciFXc9cAwxX6LNc1wKtWWPMngCj2FC7onJHpnkGcV7eRFBRfN4UMX9oXshnJfUZMptEMX2EsMTeAKQ4",
  "key3": "7BqmYzugZDoLpMwdifBR5pkab9qb58dHd4Q88fxFvTqqSE8FqZgpn9Qr8RA5NMBvuKgPwqvwp6jVQYotmEQkrrb",
  "key4": "3H2KcbmSToJPJLtPh2KpoXtDryjDiGsYKfGiCHFiGzeym1c9GmgsPwQzKQ5x1L2uKeBjNhByuug19Prw4jBDVFMq",
  "key5": "uMj3JNnwBtq18KM3ZUTdDgrz5C2SomQKA2X7BFREixKatZer7HfFpL5GBz4PEjV4eRCZs4h4dRUgbZLLw3QshRy",
  "key6": "4UviWwqAm5TiWxSAbLh9AVcEsSevS9yBdTHN6sy4W3JWqVdSqzmbxqnAJ2PbAdCGC9RAsepKWKAJEsLL1y1W25bG",
  "key7": "43RVzma2subRZc6Ekx54nnQQYFuCQS2zKMqqbJRwbwZTAaW6rx51R6QvAn3qCqowNYfuCPwSW3HTfmkowXoNHL5J",
  "key8": "3e3ZqM3HbrdawzKyLL4F4n1a4Ku9yf2wD4FZzeamMMeUegArpYdxZgZQS3gvRb87Ltq6nnizt2CVpAq4pGVP2nvR",
  "key9": "2eLpPzUqnLuX8fAtdUQkTuyNECh5W7SqrhWMa7zfipWVVecH7sNeUYdCFt9Gw9J5BaJziopLw1n18UZmkvMgsogq",
  "key10": "4wtDxtCqB3dqigGkDhwGoFoDt7RPDYTekvg2so4JaDAorDRhPwDxMikoh2q3RDDYXW1zCiMDXCySa89WywwvyQp7",
  "key11": "FeUPTFct8CacYqjK4wA1n23qvpfbTZhTNQCfpQDSjQpSFgy6hHSjeDN9Ch15rJShn5kKTDrKqTEYMz1KoNevFqw",
  "key12": "25VMafhxaXdRSYWZe9Z1mQYpK1WdY6yurDDUVXa2FhMMfuJKH2c621GEhJPaqwnkUrq8tVjef6m6LPG26zaAp8sU",
  "key13": "35JUzkzQ6aaUKsv1wzfFsJjNxYADrDP5aFqxNsgGvQqfjnyyz531KPBhSemYx6YEeGYUw6TwXutjbTQC4dt9hv9c",
  "key14": "4PQV3AZA5S74Dd9b8iv7FnHnbZDw6r2e5iJQW42RFt6KboCpgHNKT3Gn83jbopKUF5LHpyiKDxA9Nh3aLQ7Y4hJ9",
  "key15": "38sqNyZ632vqE3EtUZNjheuQuWfsbbUi6KG1rrpk3MZgqgqEJMeMAKcQ9inZYKEk9z4JiBXLMHaQACQjqH3hmw59",
  "key16": "2hmyanC1mepwi6bJKfqXfZXpFZnAm9uL369PNFNzUVKyhG6yDgTLKnq8rw1P9x1FFFQSDkrfjN1cZXdGbnDHCTRT",
  "key17": "56LtCDibrMuSKhMGiXdq91EFfEvu993DZB6LTDqHzZ5BBAbAQx2Hytnv6fYSGbXJeJnwgv3CMzL1RaV7R1rDbr7L",
  "key18": "MJyvTR2RGWXBHZCvaqW2oL6FrNQmchjVGYJJh9K5cHi7k6jW567dk2shdCvYJZXWtVqhu8vG6rREqACff8kWsKE",
  "key19": "35iEvSCqK9qcDt5r8UPon2kyiKAJ8Xm9bn573geutus41TS5aU4PDE33oxM8QobeqASAaHy7JsAev9bw5BFHd48o",
  "key20": "2JyfbzZuD6CXNQas2Xv27awtz7nkqNb53wqQjiiXgXCrpxmxJSmiKVXt2FfbJKmizKvdpyVMLh9BX24eDFAmGFqZ",
  "key21": "2hAucMpXCe8f5Xe69QRgLUqENBK34MvcqeqaeALPMMYjZQbze3tTjupYBoSNnFnGywLCEWFNp8BXYpakgPU74TXE",
  "key22": "3ZNkwJ3Lb2omGGA9er6VLensyCmKKJnc1MuKZoiDqrHZ5iYWf9LYB82oi2jq7Q62Lfi11hFfi6tm2GTrNtrTak7Z",
  "key23": "4gH98gDTFqkreSsE2TicoZE3NhdEDrYAQ7jRG6WgJuhQMRMEds4NFLcAnrxxTguKRRSfzEK3qFd9MLjbmbdzBhye",
  "key24": "z2Ch1VMVJtdm6TbaPrSRVp9Ba3P5aSL1e4ktWakvtMVkHrqBvRWwWvMM4AnNT2nu1nccrVTY8avEA2vGDbCQsTy",
  "key25": "3jpTHNAEyeEfHKs3BRpzRUJnvz548bkrR5Q9qXAbaEG8e5Gaf9m8iPH8uMfoqFtKHUhH8jsGFDeH1CVGWwkycgKn",
  "key26": "QuEKtMPiKdoAFYfX3v2LauqzzxZGaoyhkKcdwgb4RhqMTZ7p3kcbtJnuenJEsQ53HLccyiBYus4QCzDXmASctu7",
  "key27": "2WC6dzxvGyuawgy8xMb72WgtgQwcAdfcqWKMQCkHtNeQEBiA7bNLaoJeLYyx3hMXDpXquNBrN9Wkk52Tyg2XCYmx",
  "key28": "cqC95i2P9ZfqR4tiwg9bAvtG6cSKEp6tAVHEtod19augP5gMcJZHgKmk36cvmZpVvjRkSghDoYSZn3p9qqUXHuD",
  "key29": "3kM29hELScDPeDb9kAKeyMNQj3YodZGPwkSwrces3E5VVukwRakj3sazb84ZTRdbPpwyGJmjg29hYN48SBWzGjTB",
  "key30": "5zVKXZ9VnuUAY4CcwrAB1mx4Vc5e6pzuu5PxUREn7fUHMkCbfa6XyXUHzfj82aBW9LfAKjJ6U7Fd959RpLi2FWcb",
  "key31": "2p4D8vLdtT6exHDG1rbh7Wgwn5qvyeLHZqmrANWRtEsrgVuDodwLF4rwMzgWmUAwcPkB9bDYh94LMMserpqz5QBk",
  "key32": "4Vvw4nqMfQZbJCSvcewHzYGGzmRDpbcPyUmftkzPVcvKhXkFtMkbXw1uetxf3BMX2e2a9VtJuF8TBPkvpppskYUB",
  "key33": "2rQs7m4ZWbs7jGWKmNX9rYyLy7ERiavBs3USSkzRYdTu5f64vcCMyTBrtYMLoJW9UjEkUR3GSfZQxUAgYdu8eSxm",
  "key34": "55TyC3HnG6EEr3vycUSyaeGurJRcZbsYB5H5bB6SbcXU46Dum6FBho8XXpueEv2EJgh8Pk5DNWq3EEpMo3E7CLk2",
  "key35": "3TKK7TqUEuVmiDpXc6Z4k1VYpDPja1aDJQLk2NHQXEY56F2swCKxVghrNeVp3n1du3H1ByeZm3zhTKPzPmJvBYrw",
  "key36": "2EMG5sNbrhaeiZH5vPZ3gRs5sYKZtm3zyoqtVrJAmWdAwJwZ7VwgdtXaHWZLuFncugLvMT6KLV35GwweeEokDTGf",
  "key37": "2iVHhHSFMzBAFVdnDfxrzwK4hnpcnbNMhNtJ3VgbTszMZ1bKM1o2TuJgP14ZQcpHGKjxqvnH4ptX2NmHX884TTNQ",
  "key38": "4vAjx4URWbWzjcuv9V4thz6tpQL8K19anKWJcdeExZb3iNFw7Q4qqA39Kjt2PaxVGhszUJyx1jQ88zm1sp3mVnk2",
  "key39": "5CuZ9hypJFJ6gwPJcdrRwcVz61VouNxBo1b7mC7eGvqnx528JEzB8NdAJNPU5x6pft3FibiamLFieGm4h7oaQHqA",
  "key40": "4axRQLLiGiPtQybEFBK29ZJJnxTuTwV4GLdpbRceDMW2iRVKFy6QRSmvRdx9a21ou377Z3uWRK147ih439Gaq6Um",
  "key41": "5654gb3PNBxhGXgMGJfuQJ4EaBBcbttRw4w7PAx1VkhnuewEWeMccMLJDMH5uKHjRNYj5SML9eET6xZxWyyyHXge",
  "key42": "4Tktngi7JxvU2CFuomhHnJch2EifMts2tfLttpiviR68PnSpHw4soMocnFE8axaK8N5hYmGAyA6xcF9VUrh5AexX",
  "key43": "2MBdj9TZ3agofW2P3LH3GYnjbntj51fG3aZsusWMZG1KxRC29DWvG9dJzasVy1NDS4yAv7hQWraPQY7Gd5YoqB5y",
  "key44": "5eNXpVPYEqj21HnsqVtCHe1Bc7wVFY7aVdmJF9fn99NMyfCRUshA7NtPMnMkdRn941ZN9DdMLZDEXhc2hP9Eawao",
  "key45": "aJL12S6kfifC2z8C5pZK6CQVsnBnb4SwcAHqarjbEwsRwJSLb9i68TFJ5Rvy6Ks5nzWNU1MydzrD8JFynaLaqa9"
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
