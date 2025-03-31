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
    "GNQVpD4QNHp8atMAFu1d8dk1fYNeVm7tJwJ27xpaqfELz2VWrhjzm6M2Y9aYXjyHmz9d74CmzJZLazBRtrczoBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gC8X6tWjwNiqoCvmPgWi3DcwkdgFSh5UR7HVaHbb9ar3Lb5dYfUh1DVttN75PXLxjL6hEwXMGA1eh1zDGQtk23o",
  "key1": "2aN6TX3bi8JsvzJYzDyuj5i5kuRyZva9yJ3NkazhDozG3NgpacQGiYfqM15mdvsLQDZoKoREC3asQwFHJm2JyZsh",
  "key2": "2gdbpuAbmzrGAQQF7eM7tcGamfrqWNd9uwKWoM5wWpZxXrS4FE4hvUtKaVQRua1VRatzQeZn4GhSWg8V5NEp4M8S",
  "key3": "4MHky6EXgtd3K83KyXxRZwGL1x88H16SqAqSZe8tytkXsFQhM3NyfucBtwW3QAUVCQ2hjF4bTCJxmny2jo18A3pW",
  "key4": "5Gjug4V15LnEpewWbup6zz7NW6MKt2KAdVKvphZ98kTYRz9krPHw7s8tb7CKxVGA1Js5x32hHyLAL8LjoWHbzVCd",
  "key5": "4J7EBzd6qehyh4X2gagDPMjccJMC9zksvdcUsTSgzfWRrznVZ2Y3MjvtTXRSJ7RoARJM5zRShQ16DzhpRKGeP4ra",
  "key6": "4jyn6x4jHkGnQeDyDv9ebHuzPKCA53f41328sbBzQUBhFtx859gEtbBJRULZgRqJgz8kfvmzq2HoCxpHLe2SLuUi",
  "key7": "4hoYk99VuMm3JZzZDfdjtn8XtXhfbNEbbD2vXKzRsJuygURRARZsahgiyT2Z1t2WTpC9cApUgS4akZcVbe1AruZp",
  "key8": "5vHjcLsvANvVAHpZdD1Z2pKZypxhrAaBhMJPQoKZueFBVsoiiH98thArWztdiK198h1AdiHRrRRWJpG7GG94bAE4",
  "key9": "2reFYR6SHZRWEs69SiQ8sQ5w5i7cLmq8pn51dgLn7ob1AnbRgF7FgPYPGJGs6pxPBnLdJ7ii2ivfLjkdreChJDBh",
  "key10": "rN3tLQVrhoMiyb2kGMjDmpk4p4NxmZraCuk9GLV2anC7T7D7zUX8ZTeQYMYYPYBKVLtHAbew2vPR7FtexRJioKR",
  "key11": "YK9cnQdiAyShEWDs5hmiBLM9goEnE6f2Z93xiR1ArCsGcxbfhg6XHKn7CqEsj3zEiTr8e4tTVJmmZAqpqqRJZN8",
  "key12": "2AZuxq6QprbLbqDEY8V2c6itAjEeu7mAM4ArYqNgKFcSSu9C7vKMDkZedMzBRbTni6jEbCnaUmKaYsoTWV5aMrve",
  "key13": "2i7h3bFwomY5GtrH52aRkt32taVG1HTTQZRXsTNssnzvfheYibuvvMXxw9hL7CJKREt44MdZbusvkECvBJH6Y762",
  "key14": "3jPiMsJg4rt42TP2HzcVtHABqqZQFsQ7889pvuvDBjfu8Q3jESXUuhibiaVHa6hP6f2onPkg5ShbvS6KHGwD5JjU",
  "key15": "2TQ9479e6gG8i49MS1Y5v6Ak7EH9CtGhREPgAou9FpZrY3hS7YJFW7RdBRNX4f5qiisYozbu8kBm6P23JHfzG2Sy",
  "key16": "3YmCD8eZaenhLHqQ1kcZ2HLxCA5LDTJPHsVM59J5ubdrviypUEqU36Sqe4NwhEdoXFNMeHCbsgVLdRwazwdsCcoH",
  "key17": "NoJhCZ8U5om8s7oQ59qZa18v7b3zdwPWTgWRvszvgTHvqZaUwBHy9222vhCY63gKJBxFX8rDD5dD649wrJfc3JV",
  "key18": "5vXEXYiX1vZsCXbY67G4kDqERgiGSdW7ktEF3pgWiGP4pFe61Qz795perQgJFh1EL7d7Cp1rCT3cjZmm6BDeHscm",
  "key19": "3vBFy1LDR8pUGRddTMhgd4uAYZYgwL7QNuyaoh6Gg8PHySrrFT5E93vRMcUFoF2cGcg1ryufYa6NvC6VjZtRqBe",
  "key20": "GUYgAJ6Vpav28goyMJFFqN5bRxk6tKmb9cRUU63o35X3spN6bpHMCA5WpBY7a9pzQdTsZTmFWUxxyt7VZkPrmtN",
  "key21": "24g6ch3UaDVbaNEtXbVTmBxAPKcA2i2vFuk7khW8jNBWFMLWDHhvEq6gtBLwj7SDXCTUFVkZBoXBCaSZDzrKRnxu",
  "key22": "5GuqzxKXRJRYdypicGhhRqZpf6ZufRXcuFL4Sp5SPEqaFaxPsurmjtcEkNEgJfhQ1NLZ2JUvfC8C56SqPGkXD3B7",
  "key23": "5v3yGoaR7PMvvcbDXsrsM6V3UCHojAdGL5CULoQMecaVexvzEfSKKEMAU5ipB16ufJ8X56hKd6azUt47xzShEWKM",
  "key24": "5ynt8e3B9BgP5HvtL7mzcwRErxaRDy6tSN8t9KvCebJnQsGC5a1cpA1T8i3evAqA5MgkyX721qaGWEvqmHcj2jf5",
  "key25": "sHwGjY821M8U1eF5wRv3z1L2VxWoknkCeWDS4Z9uQ4NAC8P4PVpPPyyyaxdfMxjXX75oVHfYnNrJatakEV78zeW",
  "key26": "2pEsr7GZRSXFrfeVDQtWTWFu1RZSuTWULD7jhJrh8MYaBxLqU8wtM4wEA4GXrjLVYrsD2Au4CzUpJaXHnAWkWxXT",
  "key27": "3yHMEVJsUTfirFEHDzLjsnXxpFFwtJDqdJKeBBrD1tg6xByT3tfBHMETs7LGbSo1bbq1hGZFD9uX9sokE5GqRJi5",
  "key28": "4L1DMrGgzFEHErNNZKDbpoVAmeemvJcFDwKQmU5oGQfmLKUydkbD1LdW9NJWSbZCnSd24R97pvCcpP11NK1KtNWF"
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
