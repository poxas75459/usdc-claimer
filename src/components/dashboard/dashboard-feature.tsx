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
    "5s9ouMmiAtWsbggqQAfACLkcVkjGtPiLYpkokipNC3Ux3kpzogjpAyK2z4vjMPaqBA4A1CPH8xtCZABVzfSJZgis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jTnVUL7xFdhio83HDKwk3qY8ySoWmVRd5MLN4DoKXLM2Mv7Gxx72sgGYUWtARj2rTfeRPiSzb4635D8eHJZ3kC",
  "key1": "2mv6owdXe1PScfLjzg294M5RDy7uGTbpY3NZDCZhRqWhztuZBDoHfrogn86nr6o53aPssWj4X6QTM3kTmoJrYmHS",
  "key2": "3mcSCWR7tvKMPSopFp8Eik7L9dcuMzsdY8ze52jiDn6pHt5jsR9ZdRbg6gE16jkJV7QLzyn43dsqHZ8ZwajzkBWr",
  "key3": "httZ1mrnA9enh4UymJNDGWR6x1H8CFbhqEF2PHNqDzBsZvRwdKXbu7k27jddB3wboyj4m8z9fuNPgPH2XAdRzmo",
  "key4": "4pZC59x1n6hMakTWdD8WPSqaVmaDEivJWszHW1MjXcDZeaQPWc513JtkYEnAcExw7VMNDHXWDKyQwHXSAubtGwh2",
  "key5": "4tvAaFJWzSxTgpfSNahem7fqsA4NsrS2Drz3j6MutJr69wnZ9m3s1FffmuBFqB8f1ACQpD4jsT5XJbSF1tHQCVdB",
  "key6": "5eKiW7wXKEPbkfErgdLfnArRrhFoUdQeE5NyYMTYwjQMJFkFrAyDtBEw1X16nqD9bsTZKt59djXJeJXrpSdXR2ND",
  "key7": "2vwgQtdi5HW9AawAcnpp7nv48YyqMxW2sML2oCwxsoCT8gjrGWpW6avxHyLihYowhW9MsdH5pi5ddaViYdo97Zod",
  "key8": "5QVcCZ9FGd6hSS72gb4CtzVHH5i3BVNnnN76uwzDxXrWhS3EhGPicuiRHfJGWfWViPRxv6Ff5cNdEyMYWppvmSV6",
  "key9": "2rrTs6LvznxGW3poAiFip2cTdeXrjgQqLNbQUY3geMxYoV4pmgbJGs2Yvv6ZEW8Z2kDrGz9pRb9MYXGNsS8R9SF1",
  "key10": "5YQBeVeGkabF1b1k2RmRgMKRkH4nKNBGHoHkh7Her8uUSWxtA1f4BNS7zftaCtuCVcZ3mpqSiBk7rpAPp9xw1h2K",
  "key11": "VZgQ7Dx5rNbhACKybyHwpWaohj3ZrozsUBvptEziXT2bGAzTV7qDGvK4z1UR61FcLt6UCYvrWhyVS1mYg7ByD4z",
  "key12": "2oLZ3oxhRSQQ4pEYACm59ddo9KKrdfCqw22CPFcaAKvv4eqYjK2ZtvCLqrnNrHaj3ttWqK7ZKKvXHL9BYrxxFczA",
  "key13": "5YTwwqttwouxtJxJG75aPjSiZCbXuYMkZwippazgN11BUNur2zRVbbtmcQiKB7Kiye5PKSpbxrdAsYToaYx8hQJV",
  "key14": "5EnaEQq3sNFYvVpAj26x2JJoaiv9qbsH1DdBauxQGc5qAp7EUN9hY1NReNjnXGdhos9nra2HKbpcsQ7h9hFMfXxB",
  "key15": "e1VgYvi4RGFTC9cQ1EK1HYUK1KD1rPA5NuZKK7CMrwLqNMbcFsqm9AqGkD5WvHJmKBwUZ7DMmFHYPSjmyrktjqK",
  "key16": "5Bxdo4rx5dZQNo5xsSke1vCPYXtnUpKsxvfoWJ5nkwcFNpmMEcWFxjS5GerHPSHRKfgTz1DsyH2acKTNynkuUgXA",
  "key17": "5NGvHBMxea6LtfAreBdsBQHuSGof5meBDsUt4s5s6Kn5qKXFUJEchLig3JGrtfXQWN6t1QiY16mrYKed36k9A8AL",
  "key18": "4nHUS66sTFa3CTcYAm1LdBsWaGA2fEJmTMq56bo9mte9ZYEgGqyaAKLN1e3uk65sbFqWpah5PArDHbzULmyPdkk2",
  "key19": "wYGU2mCG9h2urkt6ZTsqN3pDAx7QAuto2uj5F7TPGpEpeAKPboczsAxs38bsVtCvqdHUTn2Y6HV2kwZhBu457s5",
  "key20": "4tu79EPsrbyus5Yecq2GrNtUbmGsg9Gczr1QEAdGEZ5Lnh8Z1xUFKrzKKsaRUfx47hGUxVhCLZFppP5UbZ1Rzacy",
  "key21": "5mQC1MXsHBiCxHp68gyonufMQkdQ2G7oCmo4GA29M1eRkCHufnVdmyZCSuUos9rJ4UWEfLFwSXWbpdSrJjD4DAbe",
  "key22": "2sfmSfKVsxDUyUcRbJEFsD27dV5p4rkrXRLMVq2S6vPRRbfpvoEXPsVHZuhRhTTjapHUD189C4Ss7QRvvYhCYGUa",
  "key23": "kk9f5dZWkohdHqXHxJashtdLtThNp8BToc7fhVTvnro19seNyqo2XdvuQtCvYZX8vuXhmDgYqwGbeg41abunzKp",
  "key24": "4My19HzS8xVWRduUTNY3ZRWTrGjtsninDbyxe9FovyEUV5Zw2XabVWKg38nCJdmZ4whsGLqnB53FFpTKD1WTViuD"
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
