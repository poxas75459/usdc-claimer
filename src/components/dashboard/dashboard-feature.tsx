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
    "49MPPKXAB4dAwn6quaKMFKS3aakYdW3iQpMceaDAuqa5uVyaXwJczJC1LbB1Hjw5G5TDGFZMA7KvjEKNmAf9sM6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZtS29NMF7KsV7BkZ1HXWgQX1xc5aVGTiU4nSzArcHNRLzyEBuxWoSkBo8SXCL7qiQ7yH2UDG3R4rMJXqusCn16",
  "key1": "4XuMfKSigW1VSYnaKWSGpmc863SfGnnTJ1tpxuaphXerhgXhLgcSXmqsnAHQMqFM5SsGGAyVVEtifhov78HPMasq",
  "key2": "3Ch31mfZkLc5vM3qMSEoDWxHMFgbWsLN7yDMqFnVvVYX2sCvFBjPe9huYxgXxb4dGk7ScvwzqSQnCGzirBZ4dZ24",
  "key3": "496sNG8H7MYZHfkxXQrv9WDrMqgtVeu9fgJ98DX4Wh3uo6QJhRCk7uitZcjBuvK8FR9hX1ryp8EFoXMke4V9wFPT",
  "key4": "4dSFtFCBVj6BrFHyUBmgEGRXdvKbJw24X2DzzKR5sn93Fe378Npf5sBQqv7NxiBehWTeiLgeFk72urUAu8Mg9APy",
  "key5": "37836enRnqLb4HP3ph36ccpEK8xhqRtCfssyQxZxUwrfrZiz9bcEkv6rEvBknESEeqN4kFNXm77UFfDXvGC4STaJ",
  "key6": "5NSVfjQwh5y1qZBEm9xGikSKkbMtFKSgB2z1ZiMSpHcQdV1BmjNpRGAL9FgF4LZAb1gAvP12odXqHb1eU7rZetjq",
  "key7": "36XQpNCWyPNQDqkJRgnym6RZB279VwkFNBWztniYuPBfk6pXbzgMXbNVuQsYPKMASLnYPKdkiTjNvLWyY8cX4Vwn",
  "key8": "DEdwm1hd4giRkGPWh8NuJkmZcZs9p6tecoXJAWQmJjd9sFh6ze1kRh3RAZZSbV6zh523dBFP8DwxNayyUJGEaFL",
  "key9": "4Bi49rwM98hhG8XUfdgTsTbB7HdbfBfXqZkrCpG2A2K2cQAjSfE1btWZ7fTcmu3PGMB1TCNQors5akG3dagTNnwj",
  "key10": "3wRdA2LjwJsYijRQLcqKFr1uscjfnjfFH4biCdvmNfY8MKbYVrJbTvVGBoQScmiUczEBAWRhkr93tjdgGwqKiJ58",
  "key11": "2oESGa6Uj8DBEpyKC8X3U9Z7gSEWRJz5rMgZP3XHyPKgeZ1PiCzEm4x9snRUAEpaRfwCDmq9cP7gCwVj6sySMpx3",
  "key12": "4AkMEZ4nLwvFjJdWb71zLTiMfAQe7T2bf6DrwGTA73oDaKJhNB4EwZZhtdP3Q5Wz4Grk3qfUEdQqqvqaN2DMLPjk",
  "key13": "483frkzf9FJo8uXNgxsX7uDcT7VPHFnhewATAGrv6H6wUVQfbyMW4SmLv5rXLnmY4W7J14qhLxqjFih9dtijMyR3",
  "key14": "3aJasfYBhZ2CWMp2NBW8fTUdtUcec2msGkdG8EYuwRhLhvMPHbA6ayG9feK4Ew3EUPuMebBGqJ7q2U1Skv5KoqLV",
  "key15": "3H72i8hLyBVAB3eVyCkTA4rAMU3jxVaMm1jK9BKpg3HyJDbDJBByPGmiEyvoPP1xcuA89VNZRtjPn6TakQniUixg",
  "key16": "AekYKiZ383bW1kKg9n2p5zT2iimeTLyAgLm1zxfnrWDtb8TGWaCGwdvfgi9FCxfZD8RCUZsKcZoy7crhfioB3e6",
  "key17": "3Aey5WeEH7n2dEjCdYYGcucsjjMLmNp1qMSiVEvtSJfSjeTT1E45r7NQo7CpUYSSYeuNRYBGXmgmPjWr2aJtZy3V",
  "key18": "4YMt1nwHoFg159QtseazgcBLpfQvSjHUtUYFSWxr6tuyerB9jdSVLr3V1qMvwxJxip1pafS63zGYQfXp3sjij1yA",
  "key19": "3JKBHpAuiiZpczWSLvpvwd5drdqeZeLboJ7nrU867XmnPf8PEz3vRuzvbJsSocpaDxrFGNbEQ47obiADrSYmrS45",
  "key20": "2UiAJhyfDsdKFQo3yKmputCJuUFs2iX1zdSTySjZdsY5nysAxqMGES3dDrR3QJAXQ9g5S56urPHSt9d8u36sgffS",
  "key21": "m9aWYEAHAptomrwpFacBESsAJqoUmkuu5xbC9T3cUtDKu5vH89kG4XLQmUzsowmnLSe885tQMfQVM1vmqP3E1yB",
  "key22": "KjbWyKsr8GBSJU37LGrBYcH1kjDV2V57nsSPok92j1vQQetrhAMocn5ok4ArS99GyWnKWNQC6tCG4W3Fxs5MNNz",
  "key23": "3GHgUV8sbdv34Nm4A3wWfZrM7fJQkwZn1CH6UpLc4aeQNfH4QVufhYYfccBosphGLtGHmxsvZtiWvbug1KmB27vZ",
  "key24": "3e4BGzLSjpDQvVYLsVZtwXWKWrbB2yPxtSHBxvjNtA5YgAff7hXiizrxETRpfQLU2KN5jTDTErd29BzmRhh4SUXB",
  "key25": "4JdJYd4jLE6bG8saz8UYnCWwUM3RdDQWorSKycD2FggtXYVPZHNGqoLZUchYSrvDVvbSjUHgMytzc6eP7cFf55DJ",
  "key26": "5ySpwrccEmzP4epnMaZUuPbe4r7ocbCYaLMR8vJmvD41x23azzRZzCctvtYHo5jZdb6AY7po6xanuCi8PuZjtszV"
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
