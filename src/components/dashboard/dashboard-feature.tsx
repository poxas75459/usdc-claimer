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
    "5pZhpGmmwXRw24owUUoWaGvC9a1TLKRcByGBR48ERY8DLpWDTENHgFhmy6bLxH1wrL1VdrZxB9hieVRY9yNXs9c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44h2SnNo9zS3gg14Sn8h54exWuSn9kyrjZ8qqV7C4JxPJ4xspMuaQ4poqBdUXkSgMPiuS74mi7fin9JBpn23yRbZ",
  "key1": "mzyJFDxEgfv1xZHoFVjJ8rQkNn7YReChJ1AbzDo9Ut3i1C7qY7qVUToSeFB3zGdWKq3VJe6zZVqosL32Zwhya4h",
  "key2": "5Fx4ucar1NCAGNpR7MYTgp3XUdK7gDTNitjsJH9jE718g7AjMB8m3QQLVpNzgYwiiax6Yzt2aqVhr2qeUSrgoajz",
  "key3": "Gpbxr8qvb85Eyc456F97RdjkG7bit58oAogwYiBwc85GLTFobVQTSboxytDyTRziSqrsfDhMfsMUmL1m9LQKAeE",
  "key4": "wnoi2Ua4JkDK1xEZzStkn5ebKjKNP4yJDR5LvyDwLcDc8zNZcXzebffnAcYz6fEmEDYnmzRgpUDY35JguBZeHEQ",
  "key5": "rAEQihWj5hukY82P3cwAYH9bsriUJDjU5v5z3dGAYwJjfz9qzxQZoXJcq4k8aSZK3BoezWr5M7sHhvFVqgsBewH",
  "key6": "at9x2vb7vXz2ohYQ54aekRQq3dJAVAGYbSGegBKZJwAG8BCWz3np5U8Wi88wm6XcFEGFkEfkEkpZ1SjJCp45YUL",
  "key7": "3wKonFXn8mSbpVJFF1yLpyrdCFkra5kBGXEE9SzahPQunaStiFwibTjJwFPZFWCz1vGato3wKAjBNx5siKz1n32c",
  "key8": "3yLagzMwYSarTK6c1biepAYJqKeNneEQKFreoGx4i9emBq2E5Lntz5PKo9f9DjYYXHeBvqsTD8mg2h2XFwAoRaLY",
  "key9": "34hoMXRfrNvuoBnrCFFYfaDvZ5ED7LWsEaCit7tsPHrymzetqwxev5WYhvtENLfr8sCBUgeM5hJhtkY8mnHQgRRa",
  "key10": "389dkKpbvb223pdT9aXZFxonhq5ghdLAPo9E4KCqR4Th7prK8WgqeNDRG5RTJ2QbnVyZrgqG6wqhSfLGZDW5dPmk",
  "key11": "5FHEBoLvcbQySaCYizzhweiJBPye6CYMQKj1EVjLgdMrpQK8VtHJ4nMF3h7mZ69G6F6A7cwWSxmwFLzYFshj4UZz",
  "key12": "5KTQ6Uq44JwtE43WHHYtuxhHmqTkDTSXkyusYRz85fStVyDs5q761k2shkajeqMPFBB1ojFHM5zXxLAVuvBqvFgj",
  "key13": "5LpkmeKeXsiBMsBXTqwgyNp3W7xRGWy9nZMhPRc6zdDPoLmKnoHKrs4M97NUsgRYmF6qF4Z35KThbwvErfGG63M2",
  "key14": "xfzbaMCEoU5zjHM14UBcFqoZ8j6r6yW2cUjDSemnubdMxv2Bot8CQ2CGw9iCDYHQi9WMAidn62d4GkVLN5EwdUq",
  "key15": "5GN6CVcQuHPAU4tCRCTVhTqVNf5PMtZa4fnEQiLkg3nGMBafeeL26WU4iDuJQ4L15RUwgTZ5hZmq47xjmjGCFQjd",
  "key16": "4ZaY6oBvFXS2BsGeMJskQwMuCQErrd4BAQAbQMGTGDykTFKVPK5VZ1UZtQx7Q7yzeLxAYku8WMX9c144D5XZbh4t",
  "key17": "64qnNtK6XDgDJEnwwKGEMrPcG46sFi3v4FsaKGCMR3deQhgvhjiVNog82mCnRjmej8kGPC93pAwwHmx3nuU3x7DD",
  "key18": "5nx8jKo2miTahzhSF6MJfHMfVcTHVu3TTEmPLmLixEHNALAg93gXYYy5Wpunp62PaKhV5nNbhs1r6JHcQf4mu3YN",
  "key19": "2u1SnsG5n2dFPAg7E1oDKNiHyqa4KJYyVqRMMFzYzHp4DziEQahi8yrmKYfbFBpcVGSUgK7bRmDbm1jV3aUuq2M5",
  "key20": "4yKB6THjPTcckLb1FxEcXDEBvHdbmzHApb1xMgv6G1znHMPH64zKRrPcZ38rW29z67Tu69h1BMnEHLfWim3R35uP",
  "key21": "4huaBxH1zp7tVnAdu3j1NiEKVnyDYCKxRwNcwBzDjEfG76tAafNijnU62YgQ9ridm1UkRbnctYf1U6i9pymC4XTQ",
  "key22": "BmtEK8Ks6UqSJvjxGnFyH96th7GPhaKNDmpodVWzT9C3NmyoWNRoEs67mhQn9mCdRCD3Q37VtU9GQofVu37tXYo",
  "key23": "5A44zgYe4wBcLBCazyhHyFgyPCxgEDp9AYzPp34TFurEYqqa5esmfSceK8VA5Trvyt52zpoJ1VVXAjhrvTa4Np6M",
  "key24": "2dGQFJo3VnMkXKFxBWp7ZShXFVN9wkhxcAQc3gp5oqdzy2nvPoK8RuaJB5BW9Z96oYmA437c3iiufQBbibEUR5en",
  "key25": "4CiWXxsBKwc2dHRky4WAAnXuZujw2VoEEYgwGgLtxCf4XTZUUb5Y6YUopY2iF5twULQUmBMLGqpKBextBSQf822g"
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
