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
    "2CQHapxaKyWTEtXzCrAEa1PEAzHCrnspjFuiC1tL91gyoot4pu6CKgMrrEBGpToVqqMbkFQFd5q91ViYtqWVz3LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B55ouCSnGBRL4sHLDUNJFnCLvt2Q6Zb5zoGDDYjUYfkf2HukmsgH9dGRigsJihv5qhEsD3s2uiw7rQ1aUGZwqAG",
  "key1": "2PT8n5ZfQ9rZ6TYBNyTmVWVXEB5vkvs9MDR1AVmUFyv7nsvghTSfVL67H7LD32JAnix1xZScXNctuq6WxW8pU6hG",
  "key2": "2ErKbCp4pTAaQDeBdf6NrphjkjVm9zvid7Akpk7H9x8u5Carz7TKgMYNt9zR8z2rK2iuGwyaHQBiqXZYxqiKph7S",
  "key3": "2XjUSGv9XA5MB4DcZPc6n29vHwCLNeGXpqwibokPmk6rMYnwor1ytMuc7ykASaU2QQcwCtw1JpRhBUUZV1im6ery",
  "key4": "U5qifg32TmkvJsDum6FDEHw3aKcA7D4wwhNASAop82sVm2io3URs2tgYVq7gprCcECgDy8YxnuAxEoGwJgn3PKg",
  "key5": "3WE2z8uLAtmY78WXVr5VtyCsocbtUH9pHoKdG1d2QiQfb7wRUV34Re3ycLJLUAW8vSsh8ww1bCS3qVfUzgiXWdes",
  "key6": "T4YgrWrvCKG7qkv6nzF5EZ1ucPHWK5rSKcwLrw6yNGrFEEGpztebKwAtzk5pqa841PSSYjjv1kqbz6eRySymQ1n",
  "key7": "3NCM2ApBgdFHezBsR4vuK752jWcBNFZKczuEv6pv7NXXcFUJogsHEQ1gQnQaP3S81g7d3XKo5nKcKU8HgNdxHXcM",
  "key8": "3fZp3JuMCjSJfsAk8QkH8E55SrcRVx67k68Fr9PvfoDreEvrAT692fagNnLGWNPMsSUbHHNqoK2PZjoC4aGpCGDf",
  "key9": "gQC7E33DrShyPVxuToRw9w4j8wwX2ehXL1Yk8fV2HeWXY4hGRg6d3qzBwfjQovBmKSmYVr7GdRwSKx6yRUMyt9j",
  "key10": "3j9SD8182zAnjqJwDFsGq52WhKU814MxmGHNsGX4DrvowVLsFJUG8HJXEMdb43BFhRok8F9bLJAMczpUwfnzuNpo",
  "key11": "5BhzphqhLoaJbL9HMBG1dvA7bq7SZMat33jkrABGPgwW159aTZUkv74Fitp32b6HSSEpbahVD18YEWLu3kBc1yLx",
  "key12": "4ACUa2dFiqiykxt9ooB62RLRsbFLNkb4xe41m6FDznLK6vzcL5Ue9pwWyyLHwLvdLenH6mSQLQBonn1entHKRkaj",
  "key13": "39D1XhcG9TCD7k2e9hb6PKuFZ2Bk75zsizbvhhNBX2ikL2CofCfNnn16FRqTLgzi1aDu2pMshJFDhpgnK8FUVf8W",
  "key14": "55qeK3Yfef3Amu8uTn3PBtkbys7EasDXRRyvFQcj18H4KfTCqNvq6iVHF4vFMi5Gd6yXt1UGQfEUR8aga3BDZDVP",
  "key15": "2WhZGRqand5rHu8MvATjFQLAdB2bibeZXz8uw4ktBcwJ7GsEEiuFUdYS5SsjxKUoJRnmXthWV8zwgJftTd7kr4Qn",
  "key16": "3F4mXD2BYrJRkeTyWgCHo4sh4FuYy7J7UQGFzAfaxSg9acepeW3JEVFGHe3ocdrebnXEjiwXGrqoZpVJWAUJjnnU",
  "key17": "3XVdNkGedVm5aCEYoMBZ71PeRBdNVRwQTWXMWrGzCqGkqghcvbDypiS1hLrMMKNFbhiqKRxTEEYeCo11VRCvLDk5",
  "key18": "22yiduvQvJMAwtTa7gtonUYZGPKz116RqFRVDTWxndPmeQfyVeMNiGB8LT58Kr5KzAcZTk2HvJUwaHquBMmNHFrg",
  "key19": "42xpYr5LoWscsKyAY4dNpadMgqU4NXhCKUB33h8GC8gCd8fHyVw6NQ3q6GepqpwBkoMCuyG9FA5uq3XvfGHrhdyu",
  "key20": "2jY9MjW8Lom4peGsbTnzEjoSPf473VPUukkm48p4BBjoW7HWbML2qKMERu6Nvfv2J54TDGCuRY29dtwhyh5uL9qe",
  "key21": "3tJSuy2gBZtZhdzXqysQeMtvHZuvNKgdMtwsUkNpEoQTBC4TwQLS95nTwE6eLKrAJDHSqPXH3pkyYMDQP1DUqZR8",
  "key22": "nAsjDg4Kbxw7pJUjgPERhntm3CV9iQFw9SfpuQZAULm3yqD3dx6DbahhQxUQ51sCiFxUK1izj59cqCtYTMx2BPS",
  "key23": "2KBxteJnz1zy5abDyDiivp4JyqVxRbRw3b5u7t6LkZGg5XWBCLtcyFTisxxS2axGBdmC84XtCqPCHUrNTDoCidLx",
  "key24": "62odyXDwgSQ5MkTmHz5seZMD4GngPrPV4AA8L5racSpJzxCTvFm7zL984ouHnF4saySiWfsGY1p8tegUz1wReagw",
  "key25": "4iku2w9UWDpP3Ddv3sXuhouGZdLKnUz9DGjUYevWygBRUWJTwrE9VUXSTkB7BpLbxECKWPgzGcWWQZZsCcjxK8Cx",
  "key26": "7KBsigZW9WnKnJR4eYuuifU1upHzCAThJKPMkUSL865c86iTHKuswX3K4rvcq17HdPq3MTH21cCnKKCijoqLuGT"
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
