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
    "2XTq8pB8E89fkS4re3X9CpdAKPv2MU5KERt1GkUfVmXg3ShQiBPLCBZCuPyLQLg566piYRnT5BwoBDG4yinuGa9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCAkrpmRLcZynfewFGP1htDm9yWmPwQr4qTxDrxDEhvBbWtBmfu6fbybtTuX8qvjQw2e19HzUkKZhKPZbzmKccX",
  "key1": "5AzeJrtQ2qxemcFjCttbmmGsqdXKqnvAtjhbVa3hQ1g9gBgBnQfJHVfx5cnYA8JZdAyHya19yeLdLKWm5nkYZSRK",
  "key2": "2zK4sZjwraoBnQmZdJ6VsyLhcXTQ8mq5w9aKgMV2S4dTmFLrKZ5SyPFb8NzgzhdamYzft836P5oNTMaCjASxg3m",
  "key3": "4GXuGy1k4yNKTURkkce6QdQ4naWtBGstnikgZduPsLqJP26E67crJP15i7EndGPfPsNkooLZ7y415DrpkwegZ5vX",
  "key4": "5WmTTSL7igD89cGJFGwAkSb7QMWN1RYAw7C2qCxakPVSXF2bnUDfXrw2sK2xBsa6QnffkFJus9mbYKjekoPCRqUU",
  "key5": "2WC4eQ9jLUhMvswrCtf7NNUogh51Q6srfnG1dqj6Z9z2Zziqz6XtAtmB8aT2Ddf15b6vThJkcwTB8JhSixQvnMZf",
  "key6": "Pdvm9up9um6qsa7SNKDxsW5aLdbBzpvHxjSK22FP7tu7aarEVeFN2wWDZMB24E4zmSptFGbiiPPXcqPnoi5sHJY",
  "key7": "567rwMrWfuPf3phbxLrZeCRvYdThNGK7w4oF1LUvtiP9AiX2iJVjSmiPdxS6G75LJbEzauLWBnkCnPsuTc38F2K1",
  "key8": "39MHgrpxNeUpfrUJHFzNPmBaswDPKoA2trtUMsWHs9H5WMYgb9SBMCyw7h24mD9CHda13rVM3UMoDBqVdhTA8qHj",
  "key9": "xYNa6n77yY29jkATiNcFFhTNeYjv8iBEngX1fkA84wBjaTR7MTy5k1f2Cc8TqMV1JRkqBWbMRon1JUfYpoS7Vv1",
  "key10": "3Tsxffr8oiLbowSzikEq5xDdN5SE6r463eGPuXxSdpaN7Fzreb7s1XFju5z7XsgMm7CNm7bTvtDy5STRcB1LKSm2",
  "key11": "4Mts17CAHuqjX8ry4BRdSXXmon3KUV5duRcUNHpEEVtZcQTcGiuCyziUwK3zsh76mDDBoq5befTa7BfFSAiQfZ53",
  "key12": "2aBkz9EGkaQ45VbBkPgb1AajhHgzF1TjE22uUFyb5NFRii85kFiSLRcc6ipg3md4HrScvhctqDK4fwWx4Lt7CaYs",
  "key13": "2LLK1QKbD3sNe1P2uXLnbA5Qrijcxna1sQdK9dJKgc12aSqB5kEYcTDUn2SWojPkdPuqja941ubazcQes1TkRH8X",
  "key14": "ijaxpuxyNfyPuxEVQB6qrjm675ekNdU3KX9gjqYcpxhztdNwozWPdZu5kck8QTzDQtTdxxk3GKuimpbgtpSDj9P",
  "key15": "3Jk4ck6QRFefw7MTZjbZ31TxMM8UyWeWF41XdTmvoeodfo9L77nBbozDbChWYWhxr27jTYsf7gUoC38rhaSWT24K",
  "key16": "26KAjdge9t7aa7kbsKR86hw8o1Tye8spYodeFEtnN7Ynpqg13rvptUa48dqJZb77skCWjYQTYUWAuU12m4v13oQQ",
  "key17": "LQ2ZunvbgUhSPfaX9rWWnSHtG636p5G2SRDuZyrGcYfqkzNbzLAJmUCwd4DiNKyUUWmP7p4H37uN1tdbxArrM9x",
  "key18": "2FuepWwjHxygLWdHXC7chV32sdwzfVYF1EKkixMWCKAwB9QaWc3tEMJTFJWSo7LBp8Dv9TH2sMGekyuQJzLiob36",
  "key19": "2Bohm63zjToRn3mi9eC3ed7QarefLU6YnDh2RvDC6BaUEFEXUfPnmdiUqWwnsDMfwTDb6d9uBMfudPjiBpw33RGP",
  "key20": "3KLnrBzrGeHnduf3GJ8LZT7HiQ3Jq93vT3bNAk1EigK1RGUmwDTf8XpM4okGCtpitu83jYUdD8BHkDLprwxiDBi2",
  "key21": "3oMAo2vwSDPKjz8a2hSVCh9Sv73v3JXt5NiEcEHBwTEYzkxuQd5Q2g3aDEsd8SAkono89wzbmKas5vea7aRVUCNN",
  "key22": "4Bhgc8H2Fn2NbvK5UfXfjYP82wmj3p6vekSzWqgHFwGjQGt9ndmQcgkZUJj7z6Qse3kvBBAabGG5Pzv7iUhtRd8p",
  "key23": "3rtuAVPiyCmMKXD7vTqvf6xzaU2K1kDFAWXDyXYvEVXAxeUSMMVg7HkZTZDJmScooHXXDtVd66WrwkTiVXcfYaJ",
  "key24": "4RUHH5CCZS4KLowD5TsMpWXGBYECbnjzhe3SmZbqvuMBSPUnD4c2QEdGXjvJVzXUFj8T8djrAUU1orguuFE99tnn",
  "key25": "2pjcraCQyzUJkaTW9ihJet2jTQN1TbzNZgfyAe8hkwfxkXGuKEkyQrf6Qh6BWLfeBhschWsRodAfh8ctSuqyS2Kg",
  "key26": "7BCrpzgL8ZV6QZeofGbGFiteCzGcBe8RvwU3VJ9fH6BzfvXQhVfge6nvg26oAQnN28XsX1NGo86MFS1Xszn8boV"
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
