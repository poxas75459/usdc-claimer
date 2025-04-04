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
    "3fw2YCL2mnmWK4w6dMfg13XgdhfcmoQwoeRqJSrBiitgVK3JjAhF8ZQ9zmMFzjj7SKHJKJrEpgDAJeENQMC6byeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wsjWTD6xpwB4HejGs6a7xUZmhafNAkLoAqDgBfQnVvoFK18RDjRYqfAVWUV6Nq7qxLZ27d1G8gDvyQrLG58LKhm",
  "key1": "X7CK3X1p3dF5Hq5ravXWRzQGy9TymBphCiMPcf9MwPdbrUxYvZAZTWVK3tzcz8fVLn9HgvfbQTx3a1k7VrXyK49",
  "key2": "3KDwNPZKdjTofC39xSAw4krKpJtjaB3gku8M993u8uGTrKPHJbMV91LRzMXbjau6epZnrtkMJdh52oGxWZXBpAbL",
  "key3": "2s2RphmR6vY3x1H2eZmMo4sWEfe6rUqZhPmrGVWfoV4pg52tQ9G3bYmvDdLYEtE3NVieJZ1rDtUx5wMFWqVwV9xa",
  "key4": "5wZifSsnx2r3DiXYXZ5Ee4TpyXJqwnBy6o56rCtsVYDSGqb9Sm1CaJcLWwXXHp75aL9oYc3SLFd7UDxMv9nBR9fy",
  "key5": "4PFPrY5Waif4Z3GRsrNL3efudmuTdUYzya8cogHYKsERwi8csC4kxpCJWbh4N6dYGnFZvKZcMbqzzeGfzLcp3Ab5",
  "key6": "274ZN7J296FNzTkoGLLpCzdNNPoonBwAAsuxpXG7Jh2pT9SdZhy3vTQxDBbraSgGaArqjJ7GcCWZSZLRLkGBokW4",
  "key7": "rowd53j3xcTPuErkB7Q1hbJgRGN3Ygxv3npE2PGPKWPd9aHeAsXwpRYoB7d9us3q4ReSWqphZgRvLU25BgKzzkk",
  "key8": "f3UipbaDyKN4Cg6X8UbbGpSBhbqV5Ez6rKuq5usuLBw523vrtLjkg9vK62bR8AAoKQdhTJg38LD2mm8TCKgwrbV",
  "key9": "4trBhuw2fpFJAiWheVNz3ZdLvhsXtN3hVzwWad6Qx3RAG5VjSh7dPAPty3brFgk3LPtPdLJrmoE7AmHfDxKbtiTy",
  "key10": "5oRZpRvGYWPvTx8Uhyke5Gqtu5V6KCp6uGJuakFGuomkTRP9qWbz53FxYKtAy8yoyw2ZXZoBdDUt9HXeeuaMx1Mu",
  "key11": "L25XmskYmhGtC5XbLFiua9gHZtcQW17b1VWHefk87cJuP3SHebqaGdtQvYmBwfd5GQ6GZrFksijPmk1Dp7CrEAP",
  "key12": "1eAULMHGQPEXC59TGpydYM4zWV4avkkxpnnyHAVhTpP2sjCBsFXkPA67VXQDnWpxwXYs2j4oFqTnGzLdfKTPxDt",
  "key13": "25bjYRpYN6fZgUVezdrYEnTGL4pk7mhXJMHN2pf9jGDx4LuC5Qkea9tW6CryNXUErDbJ8XyssCeUyJWB533JCe9A",
  "key14": "5VunPwaYVaNBDbchEicmES3FyVVmmp9YqpW1APH6sfvuZwJqFZiCWXBKAWyABMc32zxfyQPA41LagaCH7ktjLUru",
  "key15": "4pvNEfpRX4FKooA7kddes4bUJJMjDKMkCM4d7Q98U7eB5MC7gcBFpUDwkD4exASdpFoxZRbG7KTATLT5ckA3boxS",
  "key16": "5zbpuRuSyL7R2QyakzjUpD168dNjQ8F6u1kiwDCpWnLdLkmJEmwKtHHMGKSkwnhvPQhWiLwmCaDZT2gzQBUCYqSo",
  "key17": "5W4x3HHH2chJGF9Zd6T7BpFdsN84zHrBKerQknTAYkeJPCZ1ZJkLuRcQbVbhkZsHrS86fRWie4Z9JsV1WbAMyckC",
  "key18": "5roBXjh7EbmM8PJSwtomgA8CMn8gkKg3ruLdCn9hFNMAAzwG4dqPiaiMRsSNDVcJ15DjEDo425LBtiPj5XMRRLU3",
  "key19": "5rqmEPfJrYHRNT6ffTxFpyEc9ChtNrN7EQsrPzdasfUn8tZX4aWoZxqLxkVpX1TN7ykBNR4ne9utWrR7aKTA9c5x",
  "key20": "3gkZnovYdma5W82qAwxgcmyte3HP8S1Hdw8E5gzFsoE1SKmCW3A4St2s98qj3LfVm2PPo9WCfBmjbuWWvm4EPHbo",
  "key21": "DsaYW6Sb82BUzfw6x7JQPeAuh7rFtcAmXv6sCRV4dt3YENhttEuVPREKKhgdT6fW1aomEJ7HXo7BhjA6Ld9zd39",
  "key22": "3NHezYQfScBc9C5ueZ2m9BK7ArBfoCbKxn6FyHCnGudPxLREhj2ACjZQMobGq93R9oia9mWB2Ve1G4LmoH1CEhNS",
  "key23": "iTWHngUeRQyrVXuoL5JojzFW9qoEUm5Eee6Sbmsh9MoDx4Vm6GAShdNwZD3PQXSWPzoD7onjCxYWd443kSzX8XS",
  "key24": "65HNFso7Aaw7Fz7GBY3stMJY8ynGXn7dsBaRs1gcVEoLuU8BqmA96PfG734AgoNErUH1GuVx5b4S2XY1Y1fcCw7H",
  "key25": "4N7BhMAPE1i72K2Z3EuzcxQBUbeY7kgpphNpBYf7weDWmJpuqktcCrMM8hUEfbWfNTsG7B7kWuvvdjK7LrhAiYQv",
  "key26": "3A9TDrcFTEURrYYoVwtbZEzJoNWy7C6rkkmpPGFACfBggtEdy8gqBwgaRCMPL588fm1uwJMNgqYNbL3VJHJZYrxe"
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
