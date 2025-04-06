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
    "67R1RjWKzDuhj8r2ubWpzEK8Cnxwgdkb3sni4Sre73xYAP7LwYAT5u4pcW4J6sFGNm2edYUgGwmunpCHCfWxiUFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Dyf9g3G9t7ixqELwjFHPDBbkULjz1A34asAbrVC7rAsthJGXJEieBBuYamKUmvjRDiZ7DmvPqZRHZUKVXTAo7y",
  "key1": "p8qJYdjCGKo5QPB4XyPCruTesDSjiDbtRCJv5edMRm6h1EmUsggU427iVc6i8PVum4GomCmdEWZvxwuxF8PVfHK",
  "key2": "5h5yB97ggokSFtVVYkfXKv7Td9WvaVqJu7rmEjUweGDmkWB59V32Wx5FbZpQAX67HjgSpmBCWR6buqAVzjrHKMLt",
  "key3": "5cn4tanMwsa96iHN1774j5EXncnPgSLXtnBCdoZ7W7H8yfVw4teh79kL4pFubCEtn1mEtEcKKcNdLzpbPMdNSHhw",
  "key4": "5SZQMwQKbjwLRXzVUMViY9Pfoui2aahCcC63oGkVz8HEJciPXEVPXoTLLUJSXYQkCXodzbktb9jZXoLJUQhij4tT",
  "key5": "3AHQ4qsbGdD15BviKm5CmNBM9Sd36m9tvTdSgX9ViNfUr7qhG4bpEqDz6QM2mMtdeRDnnJY6hZVhPPNj5b7kNW4B",
  "key6": "62M2TexDCZQBHeTHpW8KxaaEuYCuPrvzzqNACBmfhjCDR8JfhDG5S99uYb1nQn5geefJATA6pjGHjmgEkfBMZJQ5",
  "key7": "24bozJbB7mnTQ5852ZMFGcVsnqEBe8nGd34ExU4NxD1WHDQHnTZhXaGsddSAKSRqmEHrNwdiGGWECD1d3nuqY3x6",
  "key8": "4QbKa7ZugnuCZZzL4FwBnLYwDx4s4ox8k9D6c7hH4RxUW16uCKHuweVPhXE4YSsae8eYPPkLowswL6bMHTeXk2f8",
  "key9": "4TdBrQ81A6mqtiXsEjKJcHz3cFQvgZfXbNUJvvyhvv1yT2Y6Z5PjH2f86Hy7u41kQfe1i2oDGy5bRgBwR3A33sVh",
  "key10": "3Ce9FzNaEpEbrQFu3EXchMgHAEsQb52i3SALzTiYiibjEGbPBm7wMWKd7mboGmNbyFQ4YVZqUqy8xJdFRNNCC2KZ",
  "key11": "2RtSarvsuK4pRFfSuaLkRnX4fFtfcm1dDtAsMGY1kGMtAqWMbnm5X7HdVY1gojhpCqCdYR9hB2qCcWfmyriX7veM",
  "key12": "29Rkx16QnWntRZTYWebaCgwueH1Ytst665MWiy43rugBUmQyWjGFJufPo4vrXQy6yR4Z7PtmpYNFbBfT4pMj51tE",
  "key13": "338obQLUAPk4Z86RTm7R6Nf1F3QL1j1cFtBL1AtjhkHYETSExkeAFcDSuB4oRGpi5wcDJyB59jmcFrJuxhDJzUTP",
  "key14": "ttHqkALi9irrCA2CUPg39DcfPMDzy7dad3RvNbzVZm5gAsYABhq4LJTYzpFGKV2TLJvHSQf2vtCVCjPhYn3cvuV",
  "key15": "2RRtVNmB8rXNL6jPCNFdBMGCAsLG7DFme3HNghESyzLujfG2PunFj6sic5yYUSLa1jsR32G1A2aR86t8RJzY3Ktg",
  "key16": "2hTCB2gLgiR1mSW94mJa4DhLmrVACRDwaRv5BXqGqoo2c87S2xNFqHQco6mAfi8PhvAdaYjwd2uaMKXHhhbC8GPH",
  "key17": "3v6CPjaPDaB4CPRmsedeTdqbzJfop2AnbrZZcfACoNdmeynZ8AK8qVynZCPSF9c6GoZmKRgNMwackntpRNRXb8p",
  "key18": "66aEVB7oU2owTakX8vHUSvUqZi1MvKbNpRYe9bKGSDWL6JCW2s4fSfU1hTUVoWvoRYG2Cxq9G7ABPHbe3xRoMM27",
  "key19": "PPR8mbTcyRS8YEj3yhrkvaDUPAS2NMnDYBK5dP6ZSk5CvgLEUR5GbavCRV6eRFCwjq1rJkzzPX9SUB4EZLBW8CR",
  "key20": "3pZuGa1raGb9egLtikb8tnmM2wQwonBarfmi718EMnzAnREd37KYA5Z3Q8WzEYE1mCkURFMH3T46TSnW9Fv3N4vS",
  "key21": "4ug41Hqz3g1fht6zU7cJnqXVpBR2r5Cib7BLjBLd6qGrSXKWKggfzr1WBYPNSLgEGza12fDn3ZjD14PwJZodooH9",
  "key22": "3SVv1hpGgvx7u1UTu81m6LrvJwB6rDr1dQoZfsNXuP4SFBFM3WStPXDffWCntR4sH3AxtZ6EL2Eah9vkUdQ4AkPR",
  "key23": "Bh4vG43wfQBM6H7vHK61RPUtpCPGz3RguMVz9ju9BtEb7eELFJs4AT7Gve9naeu1jDjKgZbsGnhCfksW11K7SGj",
  "key24": "2h9VnYdh5dbQjQLd36PhEiVMkVnDGe4sW28NPsXuY6DvBFEPwf86P2dNByBH62RAd9FcjUyZa6usehNYaDzgA2dF",
  "key25": "b4Dnvk9zE16nPm7xnQw8EK9WwUzEZfjPiTHifJkZvf76kF5pe4XtTTQf2sQ3YWwUHqqi5pB4jnRGBq3Lf8y5oJY"
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
