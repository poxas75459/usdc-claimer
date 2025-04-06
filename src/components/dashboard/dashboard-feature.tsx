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
    "3Vi3ZPomG3t1AmiHr92cR2VkHCjfdqoWfNFkPYPyVFDbpknua3aNiHDVZJj9m2LiZt4F43SXeJupHE1F6xP96C8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RSfb5Xv8vKnVMtzQfJyd5oz6kHrhTLcgHivPQQs2fzgBUAAKChzfLJNf75WHDB2naHr2wk5vgmeYAh91J6CMWee",
  "key1": "3frECbyzbyKyPLFbJ1SzfaMBQfSUWxmaANjrK2LZF64XVF5JkYwPd11i4ZEbEZwgta3DHAZzQcAFzumF1q4Qucmi",
  "key2": "5MFdFwoykppWn8fa7nFiXtGjjzv5tYTk4G6yVre5TGmQFSYAT6Zv2eXnTsaDq6BkYsi8dyrWNiX9mTwyoT7cvYrT",
  "key3": "3njbe72niWtT5ne2UVdS2F8x1PZ3dSgfAJ6GzbnwGhSGKhVD447nNVFE9DNw9xnqJjPKGCWgvVXibCr9vC8ytVWV",
  "key4": "2ECjUTKYAaSTaaziYrWBkusdbwnW2xe7chq32oBFwTcJvpMoEPPU9VC8JyByYwZac4XNQ4bkoBA4gptqcGRa44X",
  "key5": "3rnZ6vqcR1yu4F7ihHg3MLzNW9kwFUkftjLpN2ZzZM7KqnhFkJNFZ7tmgggpZVBqT7T24SNKEcnDkqn5GGqhn2cd",
  "key6": "Je3JYDSWx1DAFGV7MMEDkFiZ51M4ntC1bXJ63C9e7aSw9SNCjzaydMNGyETsL7CEDP5fLrxDMg4rsthoYQyLLFn",
  "key7": "4ggTjka6dua7MASLfb4VryMVxzXykQHkhmzxcZUjPAYeK2XLaunwXMusSSbBVCuPqTm3SjU2h1yUyMV1VTQ2giFs",
  "key8": "5khGeZsJzuCKJzH5FFR5zAS58g1CKNUTbLWDJmaxSFVxayQGoi46ntuYCwrGadH4mbf25M1RN6YtkbWv64u3yfrx",
  "key9": "kuTLAh6SQbdxohjmpAZEpSR6w6v4zYWmAR1b1FuAgvA4wLarmg3zBqBYYGgyNNtGmTMoWsz2Lmrcn8VWpBGRS2R",
  "key10": "3NyU2LoD9rGhr6GG9rse5rsjk7iuziS9bHtdgRPtMLuMkwXiMyE3gvDfZDYanmoRbsCPV5ojAZJXFNKLCW6webE2",
  "key11": "3qsutiFovKhdTuD457nK2F18zr7AELg28rP1Zk3upKZnU46XB9iENEyLUF2yoixgVMEp8MA6GUb7kLmqYgqpbqno",
  "key12": "vq77KYSMv9iQYdJW4LPJ5o3iGseE2tziWqDB3FrXfUYt8RfjQhsTxcWxx3ohjSeqacwjDZxjMKsGjXPaFfNGLP7",
  "key13": "2pGmQSsxV5kKrKbwF4AhGMBvdB3jSBcnWsuwuikZGaBVd4UuTXxQ4C8zwB5kVz3g7ufsRuHKJb84FHARBmzrHwfo",
  "key14": "tK3hztZoZYaED45m8cPpVcyj4G3s4H5Z3h4ERD7qSb5fr16LfrcmJPfaBymQoHFRcdVu93b2B4NFZASNLbNgTh8",
  "key15": "5jNsnz2HXMdCWjZGEJfnVcNGFiWdAy3cRDmmqR6Jo8H4sJC5EfZ3YWTLcGTVDghKKtkkUszDPK7chYoNr4wwT3Zv",
  "key16": "4Wb7u7guiK6YgaESwPxbzSvFQPDVetsifdxFhPcvHpvPaEg4L6vg8qGPKyPAWdUKNBufqFXZMzPirRLsHhqSwLww",
  "key17": "5bwcJKm2fJZigbRaJzaJEg7JjLTgP99m9eAiz7wYcxCYHAtB4u3DyXDNzpZ4NE4YdRdSzkGst7RuD8oTMHRPMoYe",
  "key18": "4PRK7bEBbh9JECMh9MwbXVBQ1d9u2aGtLPQwpRScDtnR9oKNajVH3e866mdvk7AC9ieY3AiUik3DCn7nHdf3DT2a",
  "key19": "5g1PoTPAHQFxCagX4XRrt2JfkxUyPNjuZFisngh4dxDejzERBtHPLW8MtL2b3ES6ULCNLUVTEsCrMDaWfvSS14Jp",
  "key20": "5RmC6ToxFm7M89viyaXzuk89gsPLrBg8nr7KQP6CE6cv9mkekznbWtFUeYcwCcfpUjoHoc4xwRagSD1ipi9VNjwj",
  "key21": "awvQgvbUzcvBkoer3L9mDmrcC5iQpFWevUpguwxs497r6czBfxsWm6LQ6W4VMRpe64XwAfzaHx2qVbDPZXCyoq4",
  "key22": "499iMXRJaiCwgYZJeQHArfMEbdhWXbuZYv5iNwaLcfPCtMcqxHnEwacRCDttqmerhdrpfTrGdnM3FLahehVmgz7k",
  "key23": "2RzJBjee8GBCfwio6kMEHZSEBZioiETSWLNPZV9DTnsE3Kwtx8pqzNsLP3m4em4NjZcjbQSUQHzgDKPRQu4bokFQ",
  "key24": "qXND8SEajjoKtWDQx1b7HBZn8SrMS2qvoVpdBfbTgcdVuqdtuXRbr1PKpATCmD2D28A8jQULF94CTJ2EAQmf8uz",
  "key25": "3N3vYgwMXeBjseDwy54GyBt1K1ds2LNWrhA86ACeRxQrP2V6KLuxLTiDJUkBv2JV5VkdvLAWLDzQWafyqb7tBG6H",
  "key26": "5SKNFEWxxd4qwM5kkc4mTDN2dnkK4nEisQVrJzPLsFACjoU19227VY3fck62enPiHGz6ojUi7zFRMfo3iUHWDm3E",
  "key27": "t9XC8AWrpagrU8skYTN5LK71Bpy4cxNtBqKej6KoEULYqZrhvfvn8PHUfupoArq3cWtUA8JsLqc4thTHPcevjXw",
  "key28": "2PeBhzaJLcRarddo4VxctuqtQzGY7QGYS9ALrdXi1Upo9jsuUdAYQ9Nii2wLPETeHh22i8DouqPitdHNiJeGfeW2"
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
