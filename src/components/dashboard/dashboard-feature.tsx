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
    "87WnTbra4CohprVUHqqQuBd32qLeGNFuk27LCWNLRAN5hoMcYyPywxAAYsWtSPzKdcb6AKJEW5n1nPrDBFTwwer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKfiZvdozKWYBu59fW1Dq5TuTpWA9JHvWcidwuAq8tBijprd4Pf84jUayLrmCu1e9WyujJcSQyDVfYhwJxFyrNC",
  "key1": "2ZjMb2HMq2RiqLX4urw8Su9tC3h1DLuU8fsCsQkHhzfjCaB8sZtCkmSq5JsbcwFcKKEgeYBSwMsqB4CD6nFkjFTo",
  "key2": "2BFNUuewCyyyuqkqjMYbKoe8KUiyYeQooyeaPSHxN97jh5RG2XEeHzRriXPxkMPh85KB3wnYU4hDCMBYnm6cUNKX",
  "key3": "5ThcNiEe2DJYCGiyhnWzHAfUBAPrTnS2gAKFJpnJfkZNqxw6fWu3MA8Shm2YPVMkBQZP55qJMWtfo9knANme1HLZ",
  "key4": "4fUvXZR1EaE9yfmJ9iJfCxSzmjWroD5JsAakNYWyV6uL3WEqysY3oifwmKrxKcutACkywtfscieMQHXcLhdmexqN",
  "key5": "2uAMothQF8nuHEjNDYHZ6kJeteRmbWZsep9FJcEW5tdzF44BKBDXYfQP7iz4pnm6M8Qryeu8cQsAKaLBMdFVCpsF",
  "key6": "57aAtCtLCSP6C1Hji4aucKmEsfY4UZgrRfPcNw6BsxQ1KaGjgjXzaAezdYCTDc6WqRdaN8C3AuKu3i4AR5WCSLHk",
  "key7": "2CoD1NHu5DKtvQki4c6Wgb8yFd7nNVM7N4pdBzMzctyvAdMQ2j9QNhYjDmYHv8z5XGakANASvTy1ZEGKUr9fbUV1",
  "key8": "2JzBvXrwqUuy9VGRpNiMkhKp66ttiPTWaoR15Uc47JDiVJFDJ7XkvijQAvVNgkxiHdhT3XVG3caWPTDvJKEsymX4",
  "key9": "64f3KHVgbwumk5oB62FoMYFmtuza5Wi8vZnwphJHe3EvT1NMUGWorvM5NnywdeG2uhBP2ZnXDnpsuevDg5cdqBD4",
  "key10": "5JLZY8S8AxWPUw6sbimrLypyF5VaGtvS3n6yF28d46jeMktPHXAeGmZbgaVnmHAbQavYHkwgnYGuNMggaj7G8dmN",
  "key11": "2fSYemPRXxwRsh5q7YjSPa1b2y6dJAJT3VnC1cUVPeCFtCPk3mdUv4as8hVUUftQfCFw7TMsbqpYV57JPWRemx9f",
  "key12": "2QuCYpY1tkAmWtXRShSgNLf2fif187bc9QCwz2itQcetzjph61JfBMApkpNeDxc8HWrgR3Uht2c1GJ7fyvCGnvJ2",
  "key13": "5tH5HeG5wfXLcLzBh7JNYeU5qVNFz6pwpB6qpTFGUGzADTpKtJ5V35shxLEZLKgnMnLwo67ZUdboQYefKEZz4zNT",
  "key14": "532atNGqg79HmmLqaspYNMAWSmMD3v1rPPRhoZ4aFA2gGcgkL3rfyTgVf66A1h18NeXWKEWsZsLUYxYbBfm2o1xh",
  "key15": "24cnPBcM3fXWfTqKKsPo3NYdqYwRExGtKE6CNzNXV1kscy2FP9TbFsMtbLCoR6FfD7RajSCaTSu6MRdeLABbS9aj",
  "key16": "4JP37z4wQPbjs2gqvBCesrVkPiJd1N6Er95vKeiixjftiGAwStW6tmUdJcuqb3A2kChGjUfBuM2DwgjJkExJJ95Q",
  "key17": "4pwmDcPUvtctcTPUD6UsaskyX2JnkuKs5zV9nh8ED5oX4Eabsvs96JE5neiozZmzYzNLss1ZJmM9thDErQV4TNQS",
  "key18": "4aypPXLNZ26ss5NtPVMRvUWdx46UjnNgnTbEGCAMxPxa6FFkzTDAXThiQgtdaCAMhfGbgLmzQGoE3jmpJ8HzfBvW",
  "key19": "4UDcXAgmKd9JKqfnH7hKwJg9wh1qhEyqoMS47F6rz2QgCu2MVVfXgS5javy9m3YJRNfj5aogzQZd516FRqPoUasV",
  "key20": "5ZSFgpcdYSX17QMryNgDkaeT3cJJw9NpTuEMmgfJJrKeDhdDm2xwRotoyVuXQA2QpPgqDdYEMKTFmBD6jsVVBeMp",
  "key21": "4LK7Bu7MMR88YsZ9pN5DNoFaLwAxX6tmKtzckJQTD2fSewwSx6PBHjwNpkGngpRJszX4BHPGprgQVToAMszHYVEW",
  "key22": "1vgcWvaVTQzNvSc4pbSyF87XMEkcX6JDLPUAELW16ijULdPnY6GMgU96GNQxcSonyiJvcSA2Qqe5easmXgMicz8",
  "key23": "2JynqLRJ3mDi2wqH5fMai1uoVzfzPFopbQ8D5trxwsnnm5fdwZgvxjbYAAPSETE1tE3PnH24Ti2UADjS6MNecxvC",
  "key24": "3cUCZEWVAie6MVWazjYyX5fHo4Xy4T3HWMD5YR3KQ2hXyzHfdNHYuUVfZ67r6VPBhzQCaCK2WmcX2mwSjSMqA1KQ",
  "key25": "64Mk9T11U85w9BykkyEy8m34U1E1gM9hKWLVSWtMvTgcrsReq2v21b1kXHM5NMjF8Yp2f9cKZtZy5jjKFriiwnCE",
  "key26": "4BkfnuQbth4mMtuJJ1b6cViVx1NndE2y56PnJXgBBsS1FHdnjpPnFr1L8zhvukerGAYRTU7YCUhjNUn6qoxTU2cF",
  "key27": "2kBwFYuYKHnCfTuw9uttXyaDqKNS3695MRr14KF5Y4srdwiWfVEkVJDB54w4yGjB7U3GJYhb9V9JCftGCXKM5trn",
  "key28": "2Bgi7u7BQv4LY985L491ovd7Ynoea2zm4KGGb9BgzFFJLo6WaBnaCsEZV9BgmQqB8DRiFJgre2thnBYgavX2qQn",
  "key29": "3AypxDLdV4kSmBCoqXhk3F1MMZkptU87v3aP9uss5sdNdy7NkVEtLNexWnVNdXxDoE9QhRtt4qL9PE2BHvsVbqAF",
  "key30": "3VkjX9qS2STw6nKrLRYJ1xQRiENEG5rcc1QaPg327YFqna9dRhQsMTVaPaGA6BpRAdpCkFkMrt9HA96UBxmtFXk6"
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
