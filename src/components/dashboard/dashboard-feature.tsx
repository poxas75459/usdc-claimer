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
    "4reuBDy2pfwe3oxcELJkXGo3j4Ndwf4LR7vSD3y8mdEyrb7VtbJcUWrMstBNjjw4LNaEt1iNFLM4phvFpDipfmjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDcwPfL4VWQJFDXnCwXroyDwKUmEj9s8Aj6DjXYosrvoTyauepaVXTJ8yt8b1whoTRxJCywqQ9amTbLBepwSyFg",
  "key1": "58WWKi1Feu4GZySFeunzScph8HbQVWgxwjnZ92GmZUf8yHd7qxbUN1r3V3kfFwWMBP4TjXT4jS1osp62FwWaCMTV",
  "key2": "5Go4GX2UjBcuxJHQ4X73HDKbH34TH9gCUSHudy1d13iHcVLpNVCrQMLexpJ8Xz1JUyrzAjBQXat8JPmjGeJtEv6k",
  "key3": "3RCaz8YcBdwNMFbUzyN8g42Su8v7wkwcUp4rMocNbrSD25cXTxyJC7jzFfJJbTgdfjFsPLTUJ9uSNAUeY3ni36CA",
  "key4": "5QkCypQouYhsZEmPPUU3q2nryaNm9UZ131swK4LxYPAp7wHdMK9Nc3uxfgRJjMf8h9LoGgArbZJo2qMwLFfrskeX",
  "key5": "2QRwuwqnQfSMSwcsRDeZ37TbrC8VzQ7LqngJKG18js7fokpPfWVvEZtqgCW3JN5gk2dfKvKVa6ZiQhteCGD9miNi",
  "key6": "xm2UeG9AuaPoaCvHMgPB3mKfu3fmdvYt1Sxg37PRVAS2ek9okbSXEsaAnPrYANfyWhR5wCU7EcK63E7iUrU36nH",
  "key7": "5VncQKQBQzJbsh4o5qNEgbw4rTTBYHUvfgHD3gtJqjvzbeU9mH8WVAqddGPPYyKYeCf711gvNcdDtWM6FSdapyYx",
  "key8": "5vC8YSAB8BmCgNGY8MVZUrC8Uap54Gbsw658tvMpZnEUXCFjSnriYNTf6BdzPt4K5Y8mdFc2iqtWNvBBu5AmaoVQ",
  "key9": "3p9SWACURRtw5wnRBCouC17M6SyVJ77E3Xuj2mZUBadgHPsXct2Vz2VM4npXmTa7Y88j4xXcgAUbYUMXMKdKEPkC",
  "key10": "455bqpZK8zbY2Baf9n4nVqbdTor6rgeUxNWjUU8KXHFMYTtfAqdxf9GiNcRHNRuvyAJhtMfwx1YP9AbkmDEVXGsF",
  "key11": "56PNftmuz7y19jeUWRRLaPTHgGHSavzXBxvsxLJ7kjoJT95oEvCJaVd6nNsQ7k3tEtR4FH8htk3XEtbJLJcLtSeS",
  "key12": "HDEKJFNSi2R62tZCbLmg9iisHQLjS7NKoQwPMez8duTdSArYWc7NteG6hsNEmcicqbN2LjBCQbUdF4wKV61CeQa",
  "key13": "51muVkdiRYUnnjWwhYkMPpjfXuboNxA7R7cn9FLHYYTnUwFEB7q6dtnADZ1iPz3zupr3GKeLfxLMe5hbE2Hd2gJe",
  "key14": "43PU4j5u4aDo3vvjRd7yTT6fPa4VaDRMSvznQwQKcaDmrWzukaNvvHmNhrgJcQrbEeJMhKmG5ECFNBXbXqDLhvtL",
  "key15": "4bWrQ7WkXUVHfrdZH6rSrM1zYgwDprPUBXTUZyVYSGkZ5BPM143c5moy2iVo5Eh2Quu3Vb8oAx9JVUEijLJdi6Tz",
  "key16": "2YbNcEfYtjZZBQvphPkfS9Sxa2pSTL46QcfFvtS6ZP7tm2D4VSLwLGdho9MMqhFvyoWy5yCuDm4MA2zKbv8pipL4",
  "key17": "2nQ6gGkbHCyMbKTZKbfsxEpfbF1MkpgtXkDizXSCbhStbts9EVWqb285iohhmSEjmF5m59LAMx4jJkmrz8tzqVY9",
  "key18": "3pvV1JjzMdkQ7aDXgGt49pmcCJTNhrdGQLyL1KEYPNvERLL6Xmq9PT8S6UJct43hMMmLdUC2ygSEAhbijdusM9Q6",
  "key19": "5NUxzHqShf2Lo89Q8Cwa1MQkjZwdsTGf7Z6tYXDfmFH4qMPqka9tCBepevGYGKouDPXgXdZ53Exbr2WvnXRPnW56",
  "key20": "4AXJBJzxz6DRFtEkwU3y1N9NWfzb5t1imSPdCTif6iaiyUDqT64jUd4ctQM2AU5kSnxqEQqqT7qXgM8nTZrJ1CWu",
  "key21": "3Bqx1Jr5zt1Nd3PJMFpqs4r9MooSqEQYXhT3oMkCuymEYTfyX1GHPPwtmTjQkU8MgQLVL5RM1fRXc7s6Ryw6cdAf",
  "key22": "3cFebivwURwm8uvoNM6xhXXARW6RpHVcgHseqaCyX3GMfSpRua8KCkKTbs5DX5L54Mgw5K2wEyLGsh2ujSjRzHeH",
  "key23": "2eT6qEr5QFPYbp6ZnJVwXq3YKhFJgi8NpmksHYxrZuoesRNtWHseUjpQ2h1fdZPRismuZjJCD25tvfQYqJV1apCh",
  "key24": "3RvJXwYS8qDD85qih8qqgLMsKYXW37m2BdAMspEMPiFkuYMTgWf6oGvCGALzFStFPFvMQr81stNn9rwPm9voaVfb",
  "key25": "3CQsJJoEyQ1mPxLXssMhi1U6TxEGCmU5aQLainxdBGKV92SDJck5BoriZmo1ihu9cyp1y2e7LppJaDjNLVhUzMsN",
  "key26": "QM8ikigC6hLHMC2L3XS8x5xpwTwAjcobdox11BNHjT4i44J8yyFcxtE7ku4cFyWgJgrWtQmE8YN5RD3n78Sbb9a",
  "key27": "5PqkZ6P8KoAf3NJGgAkuA2z3JLZrQgf1vTk3nhHkN8sT26GhUkqx7BbJvXpag1X5pzaPz7Pae471EG4hh5WjTRtD",
  "key28": "3wb12jafncswoTQBByyP3qEbwU8tFoKw8XLiBzKs9KtVCuttgNCpv11xhmJQKvYz2ypNuceTrWabYGTZeVMDoNx5",
  "key29": "3rmZ8CdEMAHzKGRmuEBR794mxt1jKy87xg7xHRZYP7HaoUbCnPyJh9c1FtLcvopGBLCRcGYz6iV22KTR3wBLWnBP",
  "key30": "4JugaT9GAn5vETV1D8yjvAjSUitjKNz5Ugs3PU6Cxv33EVfpzp1DNRgemxy5jhKNbm64hjABisKrMhawEC18r4W",
  "key31": "2xWwY3SeHJggzCy94KuJ946NGwpjHHUbyfLa2S6hgzZqY1zLGYZds1YSqAakoRwhWneMxTaY6Wc88QL4jBdiskHw"
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
