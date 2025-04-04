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
    "26jB1MdPhbXbNV5A2ioJFrssSCaZVFsVeLo6hWdjhmUCY8b9eEBFWZpdawnNGeWjCV2MvEF59y671ZLBtfwdhwWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53qBEbG5BLUbKAeMAw42PErSQTPQAPzK5jWiKhBTc9uuqdBpCCz1nZ8TwJr6NYJ7ggT2wtafizUWabm7HpWdxX8V",
  "key1": "4xrofh2jVV7iW3u6JLUDL9yFfKgUJMr5i9rc3FqnphdJ3CAThfZypTsbf5f5iZYYyQFhp3np9XHSDqw29ZhdJB5V",
  "key2": "5YmmYeXruZpEUmRhcZ7cbCsqyJnR4Xr4jPA4hnvyQeCmfYKRiUTY3Y5emqAkEVJca1hSrptUW96vNLn4VQTEnmkw",
  "key3": "4cJepUhJxu26gPKUpri83wqXdnKRubkYefkthZ7KLFimHHUswGSgM6KAdY3UVd5p3VTU5Q6ZKqLULw2BKTEUK4K2",
  "key4": "4tB3Vso4tLTQ3G1D3KemjkHyALu29JhXC5r17Xw6vdUA5MoSmUk4AkBW31qSKL4HPKv6aZK2TZd4eFszWTPKkdem",
  "key5": "4jRz2vWmDdqjQfnJKyV7yQqTrZWssVPr6H6e8G435jEvtFurtfDGMm2i3FmjmSXkHyh4bHAKNDwBaNtJZcHKe6wU",
  "key6": "ZRM9s7rEbBjGpnvGFfRYtx3erfk5Lnbx5LciY9Dk4RNp8PNP5FjPR5shExvBPiiAvvRxv4CKDKDA5UH8rEQxpU9",
  "key7": "5uTBYfymj7VTDXo7raZ86Lo48LwEV8uFEoeC5dugRP5cM5ZyZhC1Z3op5sXJdiD6mCVN2wZUCvkaa7Dp5rtCzoVk",
  "key8": "4S7QWpKwFKzZCgx7r5kwrx9ZQZMeYTqfazKmCCD26EFK1c9RN67XYuMAH1WHEKweCYEcPTf4fNAmXD4WfGWMANrf",
  "key9": "BoNSBqzRs3pNixZKzj8w1LWwq662QwQBJTtxfdFUVo2ET2yau9HLFqEt2XmTJiMyiyLGEb6meJ3Wy11bFowDqKq",
  "key10": "5EhubLcgXepSrAapGtkKnu9kFUTF94Ko9DqqHSNjmd2DNmwbfm5UsYVatB9FDZxszAku9gwqmQQrjZVknNGf3PGD",
  "key11": "4FFmgtWyiuFX24idnUARdw9c77MLhdBPwq2YJHvU7EzpfVyge3EmpPfM4Kg7Z62JFCP66hFJcgSscoDYL7UmfUZF",
  "key12": "3frh3kcAGggB13vqCRUmUVd1FfFSQ7yHSjrqoL3eumAtkZ8uTg6yzpTpcFAowuQFiVP1GWNAv775JAo8rvW4TcNZ",
  "key13": "KJVPc1q4S1xbt51UPv3SLpnT3QgiEG5nWgRvbV3qqCrZAULVbj4WMUWt4wBeRyL28a2GFXoyGMLQyVkLRB4ULKv",
  "key14": "5e3T8p8mRAifvdfsevUouTjxeYxMmFWG64vb9BwQoCMbgDaS2VPygxkBopQEeUkLnzoGVTWBy6ifmKkUiJ4sxVoo",
  "key15": "xUudpJGcuomDrNSH5m12DBJDmsWYsK2RF8GGuj1nL3gLbj6HMuLqdimhZy24bDX1FEdgN1WLiZKWzaKCbae5sjC",
  "key16": "4eXbVeZhti1nP4f5Jwr7p8E9zbAmfmGXAynV2GN3JKJk98GbCtKJHAy3CFP4Kqnf61aMUEvn2zszQ82MpjCt5ASd",
  "key17": "5rARaj6bToNgr49Bn9wZ6MZXns9WLiXh85NVTtpjqivS6Hf2pSxFPYyTWPNKoBzFvXMupSMyZfGHfM9StKyCnZJC",
  "key18": "5aAQJQ53CF5AztGjrQnnRhUPdQFRRsPpU3n3w3jWtKJYmyonFML4cCFptBsK9zrKT3mvrfTRcQcXkzcVZcX2mwqP",
  "key19": "8FWRbEGkrvNen8KWjhbupJ2pUQinT7gjJ4UEZm1RdVLNad7NRn55TDxHTSJ4VmRg38ZLNhw9vUeCudb5vdHrtrv",
  "key20": "64mWUFbnT5jKZW5RawFGs6pTR4sfNBaCi4pfFrJXouf8TnD7d1zqpuhVUZCkJZVpmn6mQUoZY2x8RFpHfme7kYNd",
  "key21": "582NXEsZYWNYXGo56bLHTRjpw2quBmS3YFuPrV2Wu51jaXbeE8CKhZpMBM9CZ36K221YxuiSoquBwmNw2SF71b3Q",
  "key22": "46RhoJYjDDFAMu77fDhmrNFrJY8ghZAvGSNRRA6VDiL6cMDxMZHuCJqAXxkuCNRJCkx6tb84sfS3KwsD7iNRzJ2J",
  "key23": "DtJZyZBmjwMPWaar5tUQGFgAiXzin95t7xmtkNz6HgRSK6w1tELkpzkLHaPgv2M7jk7VwjdHgwP2yrwENxU4xU9",
  "key24": "5BrJeb4uURmDGNC8Z2uLz1dLXDgs7Y4r1dCB9NAqh3HGmnMmrPhrYLEqUtFL65XtPJhEDG1axkhTBvY6h9F6c3Fa",
  "key25": "3sc6fsv2LC83BjRA1NJ7PomcA6768M3wzJwzAcy15aAoQnnJQCNJ7KCY75uYN3y1tGoxn6dezNDwgBjzfnXNuAE9",
  "key26": "52pyaAMdw3bX4bRR5Asevnr4Hoxd893zp18okREBNRW6aLySAtxbaYLZKJfMHXU4sRfGscXAiECHjmqBucr974DY",
  "key27": "5NcME6qgwYKFjUbdyytHHErTj6wxW3uaicfXUMGn4icnJqazDfPZQvooqhAMjSJ27D8FaKHwbU2kGVCYtpgqMVH7"
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
