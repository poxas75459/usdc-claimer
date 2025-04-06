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
    "2o8uFydRYRv5H2dXqjuYMRdvdt8CEcfGequ9uPPWQpCx8fZeoyDpkE6GXXHJX8b6R8sbVrvNUqteMNgJoZsAfwM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BKzWomtAkMhQvJksgBwT3b4eE7Fj1R64TBpgZpmnXGDqTAnbNBKr9B86sSpr887TQe5ihYJjr2KVaCo1qhNUVFX",
  "key1": "TiY6nXwQEJn9oZzxXoWK2a2GsW1vcEzjRnyn8RxDJEuPa5PjftWgN3QAhnzid6fUkK4Y3aJdvPfcaRiAc9Z5FwX",
  "key2": "4uzAN6qgAgqgw6vH6wnud6JUpWzdmbDDFy2GLBku6Uh7UTb5DwNZMSrMu8tsCxF7FkzaaXGYM9HqpMj37PWyxGyg",
  "key3": "2fHKJCkE3AWVfBSexqboudgvpmW5rG3jHK9LcDrHFdyvRiguLsH2ER2KLe6MR2Mey1EohzWCnTo79HTwaXp2YgD9",
  "key4": "4vgd8sK98jK1jUXQkL7vwQjiDjoRfUurFthbAweqGxqTsTXkGfowfoHGbmbmBhvq8z8sx665Yh6jb54whAGZepo3",
  "key5": "335ab6Ns56gEPLT9YxBjwCyaU9HZRdbPW9VPYXbAFYrVTdQEq3U4XaUT2zx3DLMUP593daLqbnBmYs6AHGd2ZTAP",
  "key6": "3KrKofQswqrzh7XrCxkkyzQVzgNuBgd4AjWedpKhqwiH9tehZ4SnfppqZ7rzdPbyaSjNh7JoayVVXmNuJbGizR5z",
  "key7": "2Qq7aX1Sus6MQTfUPXr5GpVCNFwiHP1bN3dhPRVSf6LkbRYwhwpPjtwjrytjS4jtgV4bZd5MtbhdoHZH3qLgDsqP",
  "key8": "3SBANtJFs3erdWgeabqE6H1Ps4NnL18VHmRaj6v8bbVEbxkB3gpewHAPU5x2biKj9DnpMAm5VW24xZRWPYiu6ZNf",
  "key9": "3zq45PZcZEs23B6UC3YmT4UYA94KafAsK1k3dNMCEkoyZauvWJKSkvUBA2a4BeCZKritKakqZydqxXi5pnoSEJNH",
  "key10": "3M4u7Tggcif2QEvppWPsrGAug4HpFrTLgUY8xrKfQhRuqoSyDP4MdKqMBmLF584866opVXBXSogvxqvtsiMhjKit",
  "key11": "AaQxyMfnm2zzyJvNLWrhmp8sNKJ4GwjvKxYWxep13EdN6pqkCWQ2kbS6TYaxoFSkKy2F83ZshS6DmfA6HDNP4un",
  "key12": "toenusVAsXa1j7ztzkcKStZbhhjBgg3XmSzwsSUsE4EhDGCznZtyJSjogJVyUUyGLz5stEggXCei1aNWEFq4YpB",
  "key13": "2UuMhq1KP7TxnvcbZ36fxR5W6EBgPwYp7BsztaSyfJ9BzCtEghzSSGUKe9dWR6wqdeoLCanjYxW3MkU1iJ7R9CM7",
  "key14": "5TfxJYmAQhsMw2wL9t7ypVyFWyZWqsG1ULQwayJsW47WXpkz79ENPvtDVTc8iidg2T4eFEAMQBmbgaS576EadqFg",
  "key15": "4MDDXvr8HPwe2ogyH7gnYNaThxXLzFGLwv8PqsAxEnjxxhDXPQPcxn7GRL7KqQjCiYAQJFm532FtdcVnJb7HxBNh",
  "key16": "VEBWkaL4pLFAvnBqWDEnahrbPZkYGfNGPPvcMKte4m9XcE2fbqT83mDtDdUb7vNqoasKwmtLg22WmrpWUroXVeM",
  "key17": "5pbTm1Ga7UWtUPHAZrcULmWvwL4twgFZMytG97fBi3cepEYZUQeYvbQv6u9TDXVyAYeUfuHCDa9tkaf4QtHi3pQY",
  "key18": "4KevJ3iHppieVaWd3aW33xycqe2f5tidUfx7b2VjxdF86oi82Gv4DbLHrimHvD5aXPbBqRjfK1pL5DWNARAftxcr",
  "key19": "5eDdoBBHsxg5DA7Emsp151Wotjfu47d2mFaZdvoa23G1yo3oo4esfxCtvXh3RcVZDPSfw726DtLVykygtkNNdqQf",
  "key20": "2t1S745iqoJyLAwtokxkk3ybFrGqCimu4rjTA68MqKqz9kuxvA5bgh22gBj8BigPUg4KfpjGrtDs1GzUNEHuDmDM",
  "key21": "cSEzS6fi8AmzTSaZVjTcNgoCHYKyJmBNY8fnMLGTYVcGxSBJE13k3PPkfJZhXfGB7XG7T6ioSXo18kJt6G2ZFMV",
  "key22": "3BRCrvKTpCjKKYiGg7JUWzVXetifT3v78hu34aE2hMXzKn9D5YSizPJqcepJUQuCjSku34eKRshykG2yDou1uCBw",
  "key23": "3sx2PwJvVT3Rg58opJUwsBYxCDZi2iwMebTBDQieG8GBhbzhSxQtWgAx1AuuCUWy15uq7Qxqkr8muFZTXb2o3kUD",
  "key24": "3xHCWwAUN6cimW35sjJFvVGR1WURgpUtw3cKoj7suGJ4Bc9Q1C76bJPKJ2TvsNXT4BMauVtD9HS4CgdfbQEV3J7w"
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
