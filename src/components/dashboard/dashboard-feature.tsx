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
    "5V1Pz2QiG8E8ZB6c152UETXUDbDTxFuThhAnK9thApwEo9urnBN4YTu4WWBEeFb8WNcEz1cpuYdXymy88HkKvYgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1yu6jPxbqfsvsspwHhoG5jv3CqRLewYaxkFC6dqKQLwgyqirrcgW2eE6bzJkXoLLKSKjD1mm5EnrxgSyzW9SjeG",
  "key1": "579L4AWhy7UWwDCC2ML1sfPb1uRq1tvVsGe7xVTxJkeUSp3Y7hPQzYfYyKs7RvnNmsf9a1vvjLmp2QNvYVbCRsZh",
  "key2": "3yqFEStXZRpdHkQeAPzELk6tKpxkJXn25992HBtBFTvRg4EFwZ3Gsi5Jx4Zoc4ZJD3hyjcN948px24AfuwKJMZ32",
  "key3": "rdatCuoQ4ZRuJpdfSAErjbCbnqGLdfRAtPCw4PPyiBX99Z5gbgDK4xnPvppnQ5D1ddHoxeMub4LtXaiUcKay8vF",
  "key4": "3FqjW3ZBNqMuM2dibH7Qg9WhwRgRSGxUBVwoDr59WjxWd2GyiDJEvtq97pZQtWHmyB7kP3QaCsbtZVgYrfQC17Jh",
  "key5": "2G7fMkpo4uYFnX4k5JEHEVhGfo64Kytk14c7qMtwSTB7zgjoKpY6bD97jddYhzGbPUf17s3FZriLGwTmc58Lpk4T",
  "key6": "3weSa1seBjHxoKppjfMgPJpvtFL2NAWrNKu4BRiKhUHVTVUNBXYAYSESQ26s4GzF13xuPVVZJ7VNpBj8NuQsSLW5",
  "key7": "3c26XGQqwJ84X1DZsuLWwNagGj8yepdgAVqPAa2oCZ8hHmeJemFuGkCdKTU7aZLi8XJrrik9gDmpmizF56witVg3",
  "key8": "5aGjkXFG97yNM4ybD8u8RwiJLxtFAr5DMKFxLpYh47iMJxWrZMzMnBPAUXwHaWgi8HEjh5ZF2sVMu78jVKArCV5t",
  "key9": "cdTGtmpuQkwtVcSgAX4dfUSCYqRQTiKDJ97QDXBrUXKeiJxovcVT6vRgQXrxEPiLUnkrK3mkrrcNFa1tzpaNEuM",
  "key10": "3aqTrnTsSjaQBti42f9qmjJbQxx63CeqBNVz2rnDFdkJQbSuZ6YZb791xGfGD2weQcUzhBs96UDteuiQp8quqmy1",
  "key11": "26w6aYNVtQt7yco1T5biKGbT8ydnpJUCuHvcUnwMvsg8ZT5KYXH28qffQFXLeKahSjq49s1DPLL3XJYVeeMDUGDG",
  "key12": "2Lvz9Ms33QgDKz7UAzeyMHRA5o1RJaugUr24xpXdDW3pRJpzNM7r2WZ9Xq8S6hbfn9xARgcojTTEvvYdeaScMRWD",
  "key13": "2HJxpzTbBCq4DKK1WDMX1fs73f7Ck1UpXso4iAxu3FUG2WknCEwyyTA9TVeDeTRCujwrm3Y8wZFJetbL5evSRgam",
  "key14": "3ewjGgFbD48QWMjkyx2pA6tkZ86YUrkoGHbrtv7GsWUsLWjJ2jyDykfskXTUqxXEKHPfuBbWhw1k5j5EigFp6jiN",
  "key15": "29x5D3tayEjxwmBaseFjkkLRuvik6oiK1XgYtBrooM2sy6N66hc3EuiV6L58xe3t8qc2xkDqj2sgqvHyskTLkDR2",
  "key16": "4qEfutu8Pst6PCy3ELcwZ5gnNV9QbGbWcKFkcUtMQ5XJBcPBPR7KsKFJ85QDrTidVfJxK28KTbJxiuLRGxu8zsnt",
  "key17": "3vd597w4W28XkBmtZ1AGSusHr4Ss1cu6kreMtcDvmvozUjPkds38ZoWmm13p49yo68XjJCCZyy2VKwSRhzscvNRx",
  "key18": "3RKaEs1iNCCS2L2qoxWSorwozm3XJxBWzPKi1GyzjRwksQstihX5kgdeUSX2gWpqaipzsk5rBfQwENYNa76KLkw5",
  "key19": "44QoE5UHQinNgq1NgfwBbWPu6kyhqcMgwQHtbRGvC6KknfXgnSXeHLxGMcvLPactyM9TifFvb6H3FPrFKsmvoxzK",
  "key20": "3wBPGsKQxUDQxmWxH7BTUY1ncm2tTBba6mFV5vkbizDUhXEGr5NgAXnT5wdHW5yiRBq3JHAoBsvZq24fFBWZFzsU",
  "key21": "49ZCQmAdh2MBQsrG1ityPRh2PZNNdU47ZYjKDS7JC5woK9ygQZbPA9jh53PGVtCzh5ZrPaDCoJakPiV2H7Zfwr8x",
  "key22": "eAvK1Q4oQsEqr3yP3n2eQXZCA4Dsmj6X4qXStbj5ydRQVAbtyjvrXFzxhXhCtQs245PGpC6dF8or4daDCzL8hCR",
  "key23": "5qj5EG64BaEGPART9kZNWkBbFPZTmB8xTeX6Atu8MNsVQWnsMhnoCFpJekEzAdT2jfHupbKwaKTWmLqrxpGnVBGw",
  "key24": "3WdiPxRBMdRcSjcQfHzJT7wao9S8AjbQjujf3rJp2vMuMmj92LdRsCMuzA49qHQp4CuR9smLBXZueK7nx5DM8jCJ",
  "key25": "CCW5D4ncTHj86ZRZSc9kitsTik6RtoESpPKMcVAtuMj6To4HW67aUiMTQ5eg7tLgcfj9YbwNv3wUo1zLNpmJx2n",
  "key26": "3pGqbpxzN17L2W19Ta5u3MQH9i3Ww9VmfgG1Jp4GDaeiftBMojkSc1oU6k8xtkfB3yPX4oX6k2PA5Y4fnxECJ9JD"
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
