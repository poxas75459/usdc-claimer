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
    "5SoQsqjfFviFqQFL5aq1iVuNwBgFmzV2Aq4mPrb4NTt9LLpdUtNQKstoRZffFQyByVfHftXduPFL8bWFSKqti2nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5btGRXoRJkF9K9xqYaeuvueN1MqojdeE8im58FfmbkodY4bS7oVfydRMwHmWYDBjgP7QVpZsWHQDoHAJDGSZp9pi",
  "key1": "AVjPDjCkhSMRNfK35qistuWW8zyszJsjBQidAA6HieowMK1EPGpBMC5sJt3RmEaAzLgxWqizdUEwfrYZVC4fp3L",
  "key2": "4ZVRiCN2Q1GQN4REDWXdEjeNyEkq3aKhDVtzczYavTpidgg5mpwTNW2LKhJgauEYjE14sTKANKtS4vfuXicJrbxB",
  "key3": "4UMTNPEDReAYUMcbCShN19DGnmx5idi5DiLF7mPKkpsqaoA6uGAKqFBQmd117tzQ5r13iZgjQxMNY6cJFNCxmL84",
  "key4": "5PMcEDKh4iWAGQ7enuroFX7WwQpi3Hqq7noeTTa3UgtjgnTiaUzR8jS5LAsoJsm4NhJwbraQ9cSGyA3oyWMSTCVc",
  "key5": "56TvXKyA5sywVxEk4QeCEWdU1HpvMChjQEdQA1SfnED9X8keXi75bZtDYxPtFMRYWHrTsJksZKcFmpQiEDUaMsSK",
  "key6": "5m6QhV5uRre4MSWRmZTJfkYtca1dLAmMYF6jxvVoNZcJUthYfXQfqUePQmxVvzq1QddqUmeHZxisue4K1pyvGDei",
  "key7": "4xbhhK8dRirmzdxur5qmADL5s8jew4kqjdWoBEm6EKGmDqRtxfjvHaHRF1wTBjZbujVMorGwfJWuxvp8XHVgFFPd",
  "key8": "4x3u7ohWAWtnMmytmMRUKqAEQHKPdHWzoC5GroQ1Cr5E5SWMyXt924cVfU4oHMq3SkV4TBPsNBBvN45gqnc5mq3c",
  "key9": "3anGnqdeY21kRQYzcm1rfnPwuhVd6Pzu375hsTDa5WfqVNujpznDUxPZRnN7kPZJF5U2Z4gh3vKgbPzqFeCDDCrZ",
  "key10": "4iWCoC37mwnEa8fqNJ3LpJ9asnDmkZERGeJyqyqCdQ5aej7WAASCuWk6NfaRHPkDmwdymD9He9wd8Msp2BgrJ9Yc",
  "key11": "5SBiebMmdNj4gbdQ48XXHrUXoGSFE4uitwKEfhsHYD8JprRvjKxnxtWe6SbaY9Ae5YMaSVLiusxxR5aj1qfjKrFb",
  "key12": "21Z344BG9zrWBu1Rw24AD87jTD5gf8FX4CtCTaKHd1xJgK9DeESKojATTYatuKZyXfZGkF2SeNo7vbRBcHgGcyuU",
  "key13": "km5KPwYfgSiahKs1NB9ofm8cPM11LdWAmNffwYd1xkifMA1vcfi7kK7K3w3WnBPTBRpLAYccp4R2tX5Xw6xRRw8",
  "key14": "5iJSXEDrhw99fEAHsxBA1igUDq2vpLej46hLQ6qtB7FmmFighpoAM8TNWkSVt6BSESgTdmbLQR4yiS4L62CLQcCB",
  "key15": "5xSVRTk5pHHdyHj9rAWHu6usVAZxHCxiNuTJFruqkNjQvs7QMiSNaa8vxDSgkMAtkvM6wVvmaLYqpDzQAKRSVbi8",
  "key16": "46i7p2HfKBc8pUPPMdfeWpowZ4N7et1Jx3RjE2u8TJwgB9oS35AWfy54JE4tPS6eGYcbZESqJ6irAkZ1Rc4CC7bM",
  "key17": "617AEKuAgpce2CjKJuWkPQemvVeyBEaCWLhKyT7i7xw3YgDDwCjdKPK1rXYtP9x6S4rMxsrmCHQWU88FSjV9cctY",
  "key18": "KRBaMVeJx9HkHoirW7sFrV2VRkJy214Mnhpt3My5CCBRc1L4vP6mFx5RFzvGdg26RQvH4S8DrwQ8NL95WarX8RY",
  "key19": "5ZQBkcQKkVXP1bc4HkF3ALYDwAJLKE2VAnEeQgh58EWjoQuA68BuxVtve5ywYqx2FqxfH2pwNDhCgN7kYrfh2m5v",
  "key20": "4cxBRBgmaoC9xYLoiwnSXEbkChnaNKUszAp7LuhuDB4cxNGqVBqH8QQUHMdQj3ADynWJzeFPU6uoi66PmVcbwLy9",
  "key21": "2ghunYTu896AipmTcEnXP6WkHekxtmfP3hJ3HHbcYKvfKWvhuWjqTSRfbbGVLcJZdLBjaMENjkeVfL4WhnueYpEb",
  "key22": "4JMYdcvFsYpkup6WvKgV9ssKwKrhBz6hiPDgVVkddzgp4uMA7tUHTPLiWanh6iL3uNVzBCk3FPaaWesJ71Hfvy8x",
  "key23": "58Ver9W9u4rSrbs9CmUDtzKQYLjAgzgjN1A7fQ29NYQQLmtT7WnvcbyjaznuCoYXhq8wqcnjdqFQQkbqNf5SmoBL",
  "key24": "4aLmLGyKbthNeT9tHXjWe3t4gyCUJ4zCqt9BzMK5TZqpM1jF5QyNivxTdYLRxiCDeRHWJQPN9PN5B1vvfy9admYy",
  "key25": "2mL24tGvD1BoAnehYfLqsbtsnGDyGertS36SX3RfH6tcRaJVX3DvjayRKS1LoYVbNRiMivYRQengQbHW9VMFS8V5",
  "key26": "26vJhQBdorMdMsZg1GscJ7cUTFzLyuUYdPt4oJXgd6eSSNcCdqHM3fiNEwyMUe9bUB1ZmdLYp9hw6WfpJd91njME",
  "key27": "2md4htFDuG2DgJx33KQwrcwkMkUCgbf8eJcghm8rLwRaiL7mmGWYQXzXjsYfXmL4TKeP2CYMMUcE4ZV6mNtbbzHF",
  "key28": "PTnq8AuiWfiLDqAuuwfiquSvxz8SR3GKBZztETdmiHpQAB1z5fNLXws4fA3HaRej3cBa2kwta2crGgwvxNFfHpS"
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
