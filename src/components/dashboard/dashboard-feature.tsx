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
    "2kz64G7ao1b6Tji8i7GVn4xUQmHhGHwQJZX3RbX4Rc1z9i6iG4UvTeAQht6PDZebubWJdJ6Lqi4vvoRgBKkUGmBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQcHHvCpAY6TzgrtuFLmegtoGP29q8CwsBwihERd3nw3Ju7fmtczX9HWVtC8gP6vAUT2GM2D2eVhQ1z3CZCWKm4",
  "key1": "3L4iy9M3KG2LDeisV1i1rxgX5F4Kd4YcUAQij8sQ26rC58nJwUm9JDLqctSnfU4dx3zWmtcLRVPXwPF7CcM9v9z1",
  "key2": "37jwCksqQHrrsmVzWxTjE2eBExVuzYHTN1ZrRn3bSg28pWrbVT2LJZFHyjSdtWPhmFpyWF1TdmdEZXnuYjWExpLF",
  "key3": "3EwxGiVKkDUwcgvqFP8LqztgGHVudEY6xf19tXxAemAtjPrPKdm5XrxiLfnS3eMFy1r7hDwi4igssPkwB2sBrma5",
  "key4": "dM5aZr6MuJBtRYkEU8dWphUsYf6qUa6SCK1UvpLJFMACJy8XR88bMq34DkvRxbtbT3VGbcT2d7Ls8HJDoKwwjBF",
  "key5": "mYhj8UW73YHCPJAM8fDc9AVMB5ihjYXeoPWiqVfrkbjvjqLfahJxCEWTE4idYMDNDqa34BTcpXH48h9wjBatVSe",
  "key6": "2FyGdLM1WCCzeWeQ2KYT2zwwVWakhEEVaKYZ8eHzdnYekkLb4Zz7vgC2JLEf9H3kD23U2YLkU6uiT74oBkB3r7Vh",
  "key7": "M5hYgzowuVh2k8K46koYxuGK4Am28NmZXh5sCWmhSHMbZcmenVGgJb1AKemSqqFrFwmaruYKdfvRgJHk6dGyJDu",
  "key8": "64Z9MwD3uhxBYjuL1Mcw3SGms3VKNft9yMFNb9WV3CzKZMcnWBysB2iMmRdF6sSqv1p77EWhKC9H4sP1G8D5CyW8",
  "key9": "33PoWdUK5JTZpheXTBMmMetQWjxTB4NBHKRp4SZbbEKDXGxhPupg3SXYCTA7Vob8HF7ALReozM4DgFg4VxpK52Gg",
  "key10": "4HnUeZWew8iaB5QFeR1wJKjKS7SvNXPx2tSUgMQPR3SL8dceLbzsw3AYBAtBTfEy44rNuv6fEeDv6dNwdWJcEBot",
  "key11": "5fduaxs3KY76XQd9qczkzHhkKMuQyKZyrGWQHSffufSLopSJrXVRgwy2zc3yraqZsHYxCwyyD65DCuq2A1hn3YC2",
  "key12": "EboEMN3t7FEc82vxVwqs5pHkMRkHmQQpPLG1hZCkRiBqFRCeAEAaT2k7T3NNUXX5tTVfNJDJxNLVtDyV2ZrKQr4",
  "key13": "brNpXJfbwb2eeStPkDGdTJJQh1FJ4VWKzDgi2ugD216Hjf8NvcQXt4BEXHEnP3b718YAVDJxJjtYXkbdxp538gZ",
  "key14": "5MjT8r2h9zsDTsLxsqdPa7JRdGw5KGgJ1LT7gVw2MFMwauCruVi27Vz1xzSmw2D9ESgqyT5ciWecPYxyJkETzPXM",
  "key15": "3joNbMWyuEt7uhnAbnRPMRMpsJkRVdpPBYp3AEGj4jFfcsKxQXhs3Zcz4uD3acvMGuR7uKGs6zFRE1soYjkjy6Pi",
  "key16": "49n2mt7YB7betz5e4yuJ3t37wxt29D7jee2rFc3DHThBmVLDSGyfcpTDcYoM6WkbQH6LFnMMZeMPfNMNJ8WY4UaE",
  "key17": "2JDinn3VQET9DJpKH2jX9UDTbmZgPiysUBWmHp3Wo5P1TVoe7JHa27Pov1dPZBD7Ut5h6jYL4nMwUbo1HYZJHikt",
  "key18": "4FtUQvE6vkCeg3bc1KsM25JDj1ssituWsWypENS1ZNvZm7DXehZQgakJsg422dn24EZygVZoroY561ANTt34DPMc",
  "key19": "5nE18L3ZACgL5YTZRzg2ChK2PfngZf7kZz7g6JrjQKmJhFJu9n3BYdZHfy5x5rS2Un3q5xtLmTihjzcdionh4Rmq",
  "key20": "5LuJsSo57iKDJec6rqaJGdQsyFZGFCQPQL22VhMKyvzbScfTJtNL7djmtyPuD4oCN8BCzxPFaMZnSDQz5Wjst87m",
  "key21": "4qT7GtATz6v4KB4PbFpTox5HxRPUvaMbDUziibsoLthvV3CF6gkwindHh8c3tUVW1DCa1yafsnMM1jqZMgDpZKmU",
  "key22": "5daZas845ZSQFLobohEtwVyBZK6MKND11FZ5N5iS5j2TRpgPc7oSrDrCzGtp4t4Ft6o2hAUrBf4JEL34JaBGP2gu",
  "key23": "1vUgQkYmRccgviE4idJEg2gFr1PKomv3LQrVsJZExW7uQfVGWCirTeWsYBLiMxKF2B49RCL4zq9i2bbmpNKf265",
  "key24": "75WbnxqGhRY2nb7Mcjwny37uauJfPq57622WCze7QkKt39ugeiCwXmTb4DCyYPFCtaGqe5Q9oMQh6jcc6DgBuJt",
  "key25": "5JwUQDS51G5eNKU67kWHs4nb9tkiAVuuAg7g1H5LzvXdvyJiEMkW4bArX3ddHsHxcDcnBG8Rhdhyu7KiBisgQpMM",
  "key26": "q9oR8Mw7dzBEDdFHnPceRDqzMXyG5fUWvz7678dqoRsHGtzvKAzoa12QeisxVXUqomdkLcnHuCrWppQkLJXRxSk",
  "key27": "5ZYH91BqB2EoNUx8aeNQGEELseJSq38G6tbU4qGvpmw587n8b8is17usW764grp9dvaWbG1up3L2Sf4qAsq8aeba",
  "key28": "74Sv9EynX36F4GzQqSeVT8BpGpj9f21ELKK5HzZTJj1ZtvErMjYVix34uSEhqst6JTHw4QjvdbTTK4kHoD6SojA",
  "key29": "5aimV2fMWBpuXMgG39DjB1QjqVvKT8WeaXYs6zK6r4v6cve8dBieirFJLuw4FXuAeszrLLSUQBAWcZfBLXqKnh7X",
  "key30": "24VYX1r63yYu1FCUJZm3pJgvPCyDyK5NdYgrSBR2B2fc7D4VkY3VKVAPkdmbjW2A7koyQoTiUtsuzdyrPiZU3S4Q",
  "key31": "nww8N9k9CqRwDNvfhgwhnyDY95V7gU325rMN86hMyUcR1Xtyw7S4zauZ7vND8wie54FhGNhauQogVYdQEDb2B5K",
  "key32": "4dPpfKJbiQvFpLE3GixqA3xkbCVSvJiQeR41WKtmxLCmdH9pGe2qs4DEceDYWzEk87ZsTQmuDrebywaXhENhnwPG",
  "key33": "4bQdNsbketfZW3DPN1AmuRCtHakjTGDnTrwBxoWLandxgfJ3hUeX3qwRqPVpzXxoCjMiGh6eLXCnMcKbJHVmVvDt",
  "key34": "kdR18ovvEiwqaV4vmTQGTKjaXAqE7B7wdy1W282u3xNP8YomZ6oWvuymE2K1ncSMJWPiiNzCYXuUixHnua91TLv"
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
