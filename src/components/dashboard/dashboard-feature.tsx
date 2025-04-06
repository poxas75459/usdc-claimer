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
    "zusn9jiWa3DG76ipYXowJYiQBMdN4APRWorp85coNRK2bPAffNRnbCspfxcYaw5hoMF7Y8gqqXevNccyukC7P9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdDdux7Vpwxb9tPHaFsqQmStAxCrFRAVHrr164FoR8U9ZbcaEracDCS8c8EYZ22LDdp2nYU9FfY46vqohWf4kbM",
  "key1": "mYWyFNUTJQJ1cqZBysewSH2T67s65X83PMHTNZmvG2KZ9st4fH9ougsnE7sM1BQZA1xnwN2HJZXodbNWwVxQThm",
  "key2": "W2sq6mxNPdNfsDgsiTaUNu8zm2q87cqoPtZs3LJhLtZi1vvDWw2b34yuiZWDxx9MFQ2eHeNLvwoXSTBmwRX3gv3",
  "key3": "5zQW3pY5WvXo3BHTA38XT5N8Jam26TMLP4LNvyQ4md5DwB6aX6hSu29mG2Z3LwGNUNB4nS9Xg5oY1h6PpmDza2pS",
  "key4": "4wcsYPRyow5rMZaHchApusKrqd7HUETT9zWA5dzKfa4KdWv6xHQnr4FgdF9wHKvybKnxT2bUxbjzDkR3EeQvNHcC",
  "key5": "5qbMFG37nFkWvV6hficMGW8mfngrbP9nmnirSQrACNVwQ37uswxe6UTJit6NN3tGwTZ3AStHgekyTnNhTvaX87Ei",
  "key6": "3hR1nAVqFBXdQevFHdCNnAhcSTaJHhrxndMwtp7omcjBKLHwJ1yfP448DacXJxkYngidZ5pHdeefWjApDm5p81rH",
  "key7": "ZTmabQRK1kWUGDAr3aonVcN7xJJwxg1JZ5wFHjQXeC8PLgFtwUVckyWJ8LstpZPwvzuDKqaCHgnPguHbZUh7x27",
  "key8": "mA38kBz7feAPssV22pTygX54YmDhRiqk79mYpKumYzZBLSGKPYSbVNyVHkXJKJtRgeMgBe3ZDkrQJ7dqpMQdbTS",
  "key9": "cya2QWqxSsgtQdxhPfeKXrPGgZPB4msb2yED8BojBFBBDxLDS5GLPkRGMyUmZjinfVWuLj7ZwXbZMFTNCs2XNfE",
  "key10": "4uatLvQPpaR88VyPi2sF6BKGSSMEvgJL5dsr8Z7dzrJQnge5QAncNJUsNWaCdntLTgT6Cw54Lr6pcJcGeQuUiUKU",
  "key11": "2nKuGUmujuk1DzLqeM1PMiejxTS3TNHbgurzhbgCYJHsbBoD5bYf622rZu5kqDTfjhNPRF6ZFFhsNXD3bSVLhdYX",
  "key12": "4ZVEJzyW9SahGYmTR7ukiG4K55zvySmq9hLTijoYXGY2pMmNzP6eUSu5EU8BtzYhGManuA7wkSo96TbrjcEuJuDz",
  "key13": "51iWmpRrVumW3YXv3wyZgah88t1ggjMEfyeNUSWLvdWiVveTcqsjspa3Xmin8UQHpZfutcA5MD18vy1k5PXscYhH",
  "key14": "619JajDRRJss7aPewfUnRbR5zNSCTjkht6DiCzGPyBibx9RXfzY2mmjd3sHrstqBkX6U9YiNXC8DXqjVHDfjSCWT",
  "key15": "2WRwcVgx2ghC9AeTap1T6DURYvfsnzHP9qYsGiH1wfrNLiUmCruE2Wm85ECQpDj3E9vQxaagHGKvdZdF2LiMYmtB",
  "key16": "3nNB3vt4rZFQgiyoYW4WkPXQimxZCgUpwxHda2qNz3rB3WWmvZsWNWFcTuj4N4brUJhHT5pspqw5zQQmNtKEN2UU",
  "key17": "S3Gr5TRSDniTjtYyD2EjPegVZxYBY7mPjLq9smzm89u5baTNHeGXoW1E6RRr6ZB5FLoftPQZE4Nbih8Dfz4qFAN",
  "key18": "2fkxoYELqAx2QGzefkDUKAMGqPMUeBkDCHtH8xeaN7bWeFmyngrojVGb2omSs2FMtdbgDRWGEd6skijWGeF7Rrth",
  "key19": "sC7TgJz64MRiZLXFTjFhFkSf79AGWMQy2UtrVCk1t5mqbTjCjFAadBfDQsyxVLR5Cs6pPyy1RvHWcv5JkLSniwo",
  "key20": "2SfaqNtd9hbpPbjxLw8wnvaHmdi4kgzEeqfQSvagDH8V9UMnQp9CQZQcUTBSsrdwdGEqWJHNACA93nARTTJvAS7W",
  "key21": "2r1Z2UFPmZP7RcUYesGHsoiUGYBT36yAR8wFUBM4nZrqjCMR2oTbDivVJhqeGFVPNEgtJfRq86TtvNBoihJBsCsN",
  "key22": "59BJfmhjVchf2wYZJNY6EmdsjvUtAiSCLwhNYP3Dhh5X8SdT99F6pm1t4goZac9VeYZhr74n1aSkT3KqimxiWyed",
  "key23": "2FuwM1b3k78kHAJrRVr7UsBZZTu8XosSCMtuZpRJRdicY4fyAEGMJmJ82oSH3g2SJGgEVhB3iyWQcxYB5LS6uvan",
  "key24": "4RLDRhBKNVZjyxFsApSc4TDc7T237iNYfwmWZxq1mt6gifCk1niWaRzEvZ58sfiZCMfN2rust7g6Lp1HuqUeyai7",
  "key25": "2DFdhj6iSuu7DB2phk6jNpErcvh2smuXixpJfxoaQJn6K1p2zxedtCKAmVB7bJRTLsv6NUPUUXyb8tuiKumrnHnP"
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
