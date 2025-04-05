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
    "7bvB3GvBkE3jryxthaPeJwChintTm6oPiHvrrSRhgsMFWaz92Traokv888PE4SzgT5xpaHBRifpi4rdpked2pWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtdsVDkVNJD77YHXBUr2RFuyaAZU19H6wuEQZbvSn3NNWxqEJMs3sRqegUom1hxx97D4A3u5SurvdGaz28cA128",
  "key1": "5ciBdngfBCKpbKt8Rp1mJztS73r14tR8MURyZqF4mVCWVPr4MFncrmk19LAdox2PBSVsVHTPSz9tQ5em79zCDrxN",
  "key2": "2ZGKtcVtmudNX54hZKZHQeWEUtcnsnCZ2NYZRXkVr5qKN6KBnvSExpcNNtjzGgJbUL5MzeMWaLL1Uuy6Wu7sjHiC",
  "key3": "c4x2gBbSYTAm5SpWE5NVV6ah6G1spyg4AjMj4XQDhWzbHvmmcivHfWZ6q1ExPyvLGBYhSGNMiEMpYPveLpCTggS",
  "key4": "5KpNs8xoqyHwQPWGhg4qXEy3qm26JFD6HiGWVfJhLAZwMLjmUyVuNkHA1bRxKLcCiyvirA4EAGzKfPvzGY7mH94b",
  "key5": "5u9crNXJXVEmGN9ZcFZgrhBwosACJ7S46vBRQBaAq983JprzH6dRiaqheeK4nX8DpEuuACsqvYBkH7ipMH1YJ1FA",
  "key6": "2hdspcdeEbFcZe1dxbWux9BWerEemig45uCUPxxGGYnmZKsYFokbMHTv5VSgAU2dbmNPJYbyGsYDTMwmDkTYhWpi",
  "key7": "2XveUCYasqhJjVo6jyGnccbkpHwRfTzar3pQzbZDuX27pwdvLqzZVDSXqBhb1SWqYsQH5ckRfVXGewSjoQmrf34R",
  "key8": "xABy9DwQxsi2NpMTza2srEHcqzfgz89jqRfYkQbSU9zEsQ64qJtmfBLn2oyDz5foHb3frW4BtRCXMrqHL2ht5A9",
  "key9": "PY6HezWbYL3vKtH3BgerosheAoVwF4dCk2DK5g32nWoYn9cbdzF52H1tSwzEquwXYUSwtYFtTfmDCP2Dgm66Fou",
  "key10": "5CNXr7DsVeGSmD24W9kwVjw59vJqYotCPRa3sWgjmKi5FYvi21HHDpB1MgDcJEcLeG9Cc33wUt3T37zpegBXyEfY",
  "key11": "j3ht6ubkawodExJTGvgZ1hCMSQU14tRcondwAHQnRck5CbzMQjA5jx8Y87V7PjR67iQMpbLPn9g2rhC38kPQaZt",
  "key12": "3ABX5bXa3sXWd6wjMjhfvCLdn4Xf9JQXz4hZ3U5AnkUcc9EuKmSggf4xX19yP82QwqkUEd3XDgB5a2rMr9id4jFT",
  "key13": "5RMLEQqphusaCkkeve3hwv3etGyzEog2DL9sCaGemaBQWzT4beqmfFe9ppx2Pfw16WpcXK5WJxQWBw8M3T7YEXTC",
  "key14": "2ZfDNttooCG2RPjcgk73YjQmvxkr53oQJXUZXKq2unS7D8CxRsukTgVu26ZoZYirYw4uGJNNpXXDSxSuZu2PemsA",
  "key15": "2jp1VvWfUWyRNxHoZZEgFsuHxqc4thyq15U7ncN3Zz566bdRfhTPeKMACFVY6co9prYQhtqY1djBL8DWzRcy4ELQ",
  "key16": "4di5EJiD6QdYETPVZ1tnWbgnDi65MFN3a3iSrk727oQKytyWK4KcxkvwLjKj81bHP4s3y8jogbQb4DBJ5AaFsBak",
  "key17": "xUp6L5tRE7ozT4FGM6jEzbCHSpTs3fqQUV142NK5hCHRNrQbm87zrw7RC2p1FzThvHh7PRHQbAzUT6qYF2RHusY",
  "key18": "3URFSVr2Bz4uw3444y7UENu4va9vQSkRUmVpR39xdwsEUeQXkJKaJJ4sJAMiXgZnNpjtHvgGJvooamVtgQFCRUjt",
  "key19": "5KdQp6NhdYtqXWp2P7EvU29omBPTJkNxESjsGFKogUP65uD31vGHQxNsYAXFgTooiDAs3KcmYadpefWiABYjyWeP",
  "key20": "3qPY6iAYgArFsfJh6d7wpNr5FaVXJkrRyhtixkBW2ibPxhNwXCpgh5fFAYTX6aQNWjCbhUd9fpjpryuQpwNWEm3C",
  "key21": "VvvxSSWm3dM4Hn7k3ivssmPYnb8YHAEo2KFyBLR49MGmy9oda66SiFKiBU8jHN3nTWHNRMCXxMuBAs7TMh5arGS",
  "key22": "3EUiPPFeXHTw7ReZQkRRMxLL9CZZLN79PnNkEs7qPhVUSfKGAsVzZ7eX79arxw1ej2DCvm931nisiVSwWyj3QjDb",
  "key23": "hbidR1u5vmbbqRALpAr3NEZXRJy9DhWMK6ZCLWacJCBC4TtqVDvXrweyjVpE24FHLKPGYsZJyvGc6UqBc8NV3ZN",
  "key24": "5WAF7adNVMY6ipUxErhAsEd6TNAG2CPgBnTL8JThkdbYDkYrxKSGpVdn5nBpEUKo7ni1GwCGwiYqTPXwD6kgbhQ6",
  "key25": "5nZhtmddpg3EL1j8sxQZ4rSyLPine76CYn9RsjWGjzrQvbjaxBBEvTUnWq3kKdY2fpHwCQEoiUeL4m9Uuy73K4jA",
  "key26": "5e5ZyWpjxrUsBAdkn2GR29ww7xduKgE3LtQxcPG9Yiiz8qZYtWis6qSgjgW1edo7gn2fTQwvT3KeEX3uPjEoqRDi",
  "key27": "36B4RSwGy9umkia2PrkTnhZh32JTFpHcQrnovakPpXfqfCPtcZSsKETVTNvmo3N11QEb99ErviWonWwXPAFbdUsU",
  "key28": "sm4RrrhQck9oV7Sa3ph81cBHPyiu4sMiA6ZCS5D5mkkzUNV81VcpemQ3pEBu5thfPyRGiQKRNBz7t3b2QGh2gok",
  "key29": "5HvAMeTss6XqQda1kdBXT2iU3VwskdsZQYrKzSkdpGqxybrqVRZUcWkdmV9dCPHLQPk1pG4XyfkXAV9bo7aRNae1",
  "key30": "T2yB78eiBq4fvseeuWY8hfD7Kjd5roTSyszyhaKX8ezPdx9HDA8q9Tgm5DXnQuCURDsFCfwUifNtXeoPewqNRsm"
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
