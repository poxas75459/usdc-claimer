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
    "2it3fMHgXSvH2zvxd9qxn1gjeCVyTp1tnY1E1QHzphU7C7StKpUDvF67myivx2AXpx6VnjHtfGqn9QHcWSKeUGx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBPuBQF6gUbyYx7z7JAGgaA5og7dhn5sswrRUkzdXqUfqpJ6eLyAr2FB7tQBDVnr87KrfeSYef6FW2GKWHZqq7m",
  "key1": "3gTdK6uWPfxNhUygzUMQhGBRymTf4fDuxf1s7MeNGnnh6dPLi4p5yBDMXkdhVGDea9GZhYFcB154AhdwTLqVrJYB",
  "key2": "LRjGjR1a1LEpa1c8Pe1HHMHQjkb4anARTfanKAXsDtFxqwiv5Vu16CkQgHAZXpTG9VrrK1DxGWgkAnMXZRwRMyW",
  "key3": "TNaLheQfUAsjeYtpe6dZnxqbYfnx2NCphWSi8DRQQLswoFWvwdnaiqwx3NJsNvG7FeyZ3pMjEsCarU5jG74QDEA",
  "key4": "KxUGQ7XS5hncEXcszoF55VgtutnNgBcxwafTVNfUnQ8s7MtCZZXD1fsycsMxUpqtej5HDL7Rdtbr9d2euh1xR2h",
  "key5": "2k82brsxhptyuizKzoDDH6w3DLneF6bWxQgJxVWyBNjt8s4uVavWCX4WsbK1cB3x1E9dQd31ycfDTtxoFAyPiTuJ",
  "key6": "5YWqmZkusmWBtUxS4tzo68SD5or7A2b66heLNJbEDByXMpuXdUmqB1Ydf9V4rAhZVvQB8LWYL3uryFNbEU3dTx7e",
  "key7": "2WR5xwXwyMeVt2F6YTn4t6Ye5fh5kSKsHUnGEQ3G5ZRY1yUwCccwKDH6cgj7VNivNAVV7ej9Xqoad24smHdij1Yz",
  "key8": "67H7utMfGKNjNhWhC9YsMFJcoyQUueR7MKmf2DfywrGd75BgCiD1BE3MJEmcB9gxZhmxcw4qoVX8QX6zRfvRx1Dq",
  "key9": "sobg7gTXbY2uHWVAM6FnNnscbsrjH9J1nwgw82ETuNzw2aMuVTBubqZyVDvCPqHVgBcsiTtxLAkn2aPD5zeXNKq",
  "key10": "4tf9ZV3P6ajirzUF1aS9DxiutDvZw5M47gT4RbZPWZBE3nN8WrEbJ5WJsh6oW6PRrY2yzAXAMPyEkH4rPPByqt5n",
  "key11": "2Hn1RYt9Uzb24Q713Q2pCXhv8VB8gp9a41zvt8CJjfawc9D354mKCfENs8XQvVBSduTvRFVAqd2vL4VVtyqf3ca9",
  "key12": "HkYe1rtGv2mjpAf22pR4ifr2KirvWhyGKSn1JXw5kL3knh13qrMRmNwHhRpr9t4yysCN6eeWmeTKiXG7jsC6bYD",
  "key13": "3YUhk33iUA1euZPNFyspFEjb3YTnRsJhqC4Wqqfqg95dmrjnpnkuzM9CXnQnqcF3NqSoV96UBfnzszHTAS81AFTV",
  "key14": "4NdmEKLXBt66nhWvxaYsMk3oGm8NQEZNPGVBDpYUXiVZiWBNCCZQw1R6vRcWnW43E5qwbJRi9s8QSa9N52Bn3MWn",
  "key15": "4LePcAmMxXsoGLPsijYQP5kLKxpYfiMRECiBQzvC8ohA5jCgY8aK8J7uAV9JrLMJDsJEEF5Mm6dLkPymi8Vjm6Wo",
  "key16": "2eeEn2bC7shcsztbZmYAPDLrmaryxWZ4yUoeiGW9HNwtzBA9ty3LTfdd3TUvwDhm55xPgJjtP3crcv7vCfj6WZ4x",
  "key17": "3CnwG1HZ1A4rBfFrFPT5gCoroYsqsyvYyctc8pnMLNFo1pfFvuyfDT19KR5R4CmqYFcXuzCE3nrq4j9ESmhU4ike",
  "key18": "2yxCHY359bGKkzaek5mbzb9X4R8tBBGpFixVTdDESdCfr9tMVwEMS28DvhuJMZYoe1Hc6dNLvcukYQahSp3FUmry",
  "key19": "AYLyyAuXGusG3xapnYL1RPrqbn4cL7e6tMxENGhsqhNcdLeLA52z7vCYaqnVXDN3DPuYzJk8sSywScca8fsRWVP",
  "key20": "41995jDQgS6AjUzsRR5v5ZNbLesNY92f6b3PbY9Q1yhBpthSb8Eugud36ubUhBR9L16nGbnrJvuPCibAEfdTQPQp",
  "key21": "vqTvKhPWLcDfhfvTvbxifAoWAhPrMrmmBZERNUcyDq9tPqiVJEa35UA2yhwYJ8JjjFZvug5HecodSyV2GPJZw7w",
  "key22": "2maZVK2RHRW8WGCETMQZB9x4BGv31AnKCNvWdXnGKpGMbd5BXcqUsBcZq69yybDJsXLXJD2WGQNwYiHttgE7RoU7",
  "key23": "5pcgRzXvhuKDRECVKc31P2bHVrQFZpL8SwjUUMTWLrHYUKVrpP9WTzGTmXdUoDHS4NBxLmRoAfst8sbA22TMArKG",
  "key24": "4QGopKtvz1jTC3xfmripe49f1Nwg6P2LuPo1uN3CcUarCtAe7Y88n5zwKVZieUSatiQ4gFLNRvNmA9vxc8q5Rn7o",
  "key25": "A7o7zhpUsXToU2oozTb1bNQNUWvecWrY9NentHWsM7aFpgZtqygh3pmhwpeWvpGDQRf8A7xudfBa7Ux3jFbg2Ey",
  "key26": "4ZLzsjie5NCCLjco6VAFQFPha6N7aqJs7r3uPaiZ9tm4gJaPjkk18GK6zGNx1fCZeCkD1h9nx2SR6expVqDL3xPW",
  "key27": "346nQaN5dwmFdCwuSfewgwfNwEUS2hZmZyPkbfCgxfTiZ3dchtCApDifBtxoaL5bH7THSswcddmncu7MkcHQjSgq",
  "key28": "u1cn2JH6ejuoPRCtJuiTRZugRsTmm1m6E5Fn37Ev3royw6R6kp6uAPV6kcC8qHhh2MzeF5XkHPadgvmq7tHqzgd",
  "key29": "4iwDgWhkqjT5fUqBP1HDLwSwUh5QLSwVH6CtUwpKyb5ohyVveGCcdwngYSh68775FjfkvW4CfqEzNJAHhWP3pBf7",
  "key30": "42f6eyhCqKWH45SCeX2bxZTcrPw9HkTa1pzyxCMPs3ZkG3a8NkBAmY8GE6VDCqupmdMChRkVeZLkMZQw2sT9Fqoc",
  "key31": "4nVZSQwwqaAX6m4SZa37J2JZiyML8u1j3UxvujRu15J9YzZ6t677BomPuNX4dGvwR2RhiAuQYgvmXB2B2C5FyNEc",
  "key32": "2Rx1GJtyaUC9ACneLSrZdbdSM4883usjVod2Z9sfxL1nRcFygWuNQXNJQK7cMAVXU5qCJqmxa1HKsc16hGwAbmKH",
  "key33": "4KSYopsbp4t3Cwc1kzrQCeVukx11SRYCHAeS15WVrbzhX6UvKXk11RDpCXzh28jjgyLr5DRoSgj8N2R8Hc2wCGsM",
  "key34": "4EyfPf9Z67U2j3MTW7zKwW5yhRSmXfR2fbanJjEdU8zvjBcYNorydPDDonoGvT1XzShGgnEc3nPPkjCx1NzRuFfd"
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
