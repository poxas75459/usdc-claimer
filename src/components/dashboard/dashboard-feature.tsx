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
    "4TDLizaRdaqiUgv62VXV3bnQadU9ygevZh3HcfRzboWkrHXWpPfHdkGf4ZnQY7tUJWy2JSeXCXGeweemQNuSCrx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewXaZiNd975FxaHLZSHKhTZXVLyLk6HmCsqd3xq5z4K4fpdLzkeq9e2Wii7WoqrgshcsZwDCMScgGdTGTigZyWz",
  "key1": "rG3BUNKRzMjw5KdUFDzFPPKuMWDzYJkjoTaQUSeToAzXYF8JnCBjKDjyipihYgXtCDU4xBZCAXeVNW96SVED2A9",
  "key2": "DsthKoqhinxYJDprJ3R9L4EeTxKgEMQntfQyVEQuVKSXBn9QPfW9scH9MuzsjUZXaNxLBkYtY8fL5yLCu4Y5F15",
  "key3": "5dt3jKUHmvC8TVVTQKcuUQ6pTmaCasPcERrtNQrKeYLSF9fCdpi4Jf2LJdj7thDg57ZH5PBxvgtMKkuaw68Arn1R",
  "key4": "4BURRkLAJ3hwz3ZBLeDUupYUQUgWsunnUFQc4y2ZgASzUYMvnMiEyjW7baNux38icxmFj1N7PhXe8uhoZMa5A4ic",
  "key5": "eThV5gq1tmfjDBYijdeeCua8DVF3TNEeHASVqsdVTM5ymVTnvhNx3oBsYGBJkDyBHyo8xHVdEGcYdunfEtp45mr",
  "key6": "2xr8Qxd78F2TJtZEgxkJ8c5RTwmNx1Cr4iqk4qqfZDG3QcYGNJjio8nuVUFJNDZtM8YQmAhdV8e2EzFq6zwBK2N9",
  "key7": "3vcmwCNEBiXUoe4JKT6UagDaYx9UjUNmAy8S8obFZ7Yp3ypGs9qwBGdgCJW7pERmJtQjpQLYruKou1N2Ym5u5CGa",
  "key8": "gQe6gwjp2EWnoRnrFM4VJhKuNq1vY4YBu6wQZwhmr1z88W1Y9t55o4SxeN14DHWCRhaTLXAhqYYVKZh45wUSDYM",
  "key9": "29WXpQCTifjCm9XLfunSfyM7DUWSk72md27rVJszDRgYWSWdtTVDbzYPuoHUTJt7b11j4xdeSqWXisuPfJxfhz1Z",
  "key10": "5ZbHvRfVG7vZzGsiHJVv6wUmgDYK7dnZKRbUciDyeATizibk5DfQtQiw7cBAViGby9UP8t3tfEVte2eutkxujeJa",
  "key11": "2Fhw4b4JbRYpY3Qxg2eZJVNPsoY3rKHK2Q1gZ7awjvWwpfyiuj7WVtM5U4eBxf9bjAdG7Y4jpusa3JRdvzqcDiWR",
  "key12": "qZ1UfUJLdk6B7dBQqmnxs561GjdWCNXmNFJkaKEf5xjZXQazvf67GqLBNayxUfsmKiikwkqLKWhCjkhDSQ3Nkci",
  "key13": "adsBpzVZw3hX2q1v7fkjuKeZZAaYnpAG4jD2wihNfY91rZauksoykpkk35HdPzzLMjJ98Ww1i6fNweTYe98YixF",
  "key14": "4iCqU1PeMFHidTaHieQSUgF68VKKDWFNMjdFe5EufHACYpWTyv3wQ9HeUrv9QDfLGDzGgcz54cvNC68ziSSSGBcu",
  "key15": "43x6oKvPQkMG3rYARdBCesip4Qb1g7Sv7AaqHaPrLTTpnEBwe5stBBvpzzUQ5c3uaJsEVzXG7xY28mJo5R4JRDbu",
  "key16": "4P8ZYW7TUrXwt1mbgap9v6mawA5rTo6brW2f7GNUwCkgGBMWGhP7EdXRR8Udcrw6JR6oeZFmkmLVW7vMFyb8VWvi",
  "key17": "4FgB8EiyRRqtLbMyazQgxsVkG29UR2c6av54jNihTFog2zHCQJYbDdpA8sWJi2iMbphbL3AGazKen2qaCF8wCHwc",
  "key18": "32dHSNvHoDX1NuWbQdRRzbEDNRdZxgGtgV3nxG7ZmU41xqv3MmNFoKkd5rWoNWW6FXLi6DX6W3UaxwnDjBsCFZpV",
  "key19": "4WSa3SKpFumPveSL7gAKH7aJ6wHkUNVMjKsoH1YfsV3MZ1rCNWB6tmTqFTXU6LJfohePq2bvs2NN4bZgDheo7vwA",
  "key20": "34rSjvw5pjuuuTF3iDK1ra9qtacjFdCMDmDE2QCxx3yLiFEUyGJkKURmCUBE1NJF6Fcc17WcVxUXEg6xnwbCVjFh",
  "key21": "vqKRcmF1bJ4D26fJEUVNP2fuYLAV3btEmMndBHJP8BXpHYHe5NTXcaPb1mUxAgFDdP9ygygp9xxepE7TtdhawWm",
  "key22": "4ypH62kgY7TcsStNszW6czYynCazD9haV9SdjUNAtkDhcGToUWLiyhfj92KuXTA3fn8tAdGKYgHpybiz2ovRVMNF",
  "key23": "5FGt8mi1EBph4XxFBiGFJJsnkg6QgbHQWxwaCBrf3GYJCCLhhheFjcFGDZALM4PJJerVxkjW5qbREna14cCkRvD8",
  "key24": "5ZRxGZSUp3LMp9EASA93wkgBsmjS1Ag8CcMrPoLr9f1Wrm1Ys5oAWokjQD5nCq9G6hTP5SZxfUycYxVb4sYf9jDN",
  "key25": "56oJQPgyLq9HJoveFvMhtn1bZdP8ELcubJNFeRpsoSYk7jFi4FCXoMFbWoDfML5qwT1b6NVxRu1Yn2HTzttqHC28",
  "key26": "4aUHzVG9awowTvMpp5bpQoQ6z9TkHQgffrvHr8BiMBfN6dA4guQ68kqHUzh3G4XRnuxgkSsW8kWbfVoiX8eZYqaW",
  "key27": "25AmJfn7B6QVpgvVph1YifJuDB4kqjF8QT6Z3QKXXM1hR9ft181s6tXfWpjhzdmWzUQSsmvpffMAixHcqQsWSZcB",
  "key28": "527LW25vaz6hcv31RqjTofwpGAdCoHpzH4VNMdMrP75dGDf4iPUDvGF26EgPSGrsmuqZTh1PnDXFKRZPaZCzyjJA",
  "key29": "3XXBrMzSuyyuYYnWRn6mhTMhDuUXK6QFFrF1pa541KYTY9r4SjjaputLW9WuKFvm5sfB3qtY8ad4f9CVfNbjv1Lv",
  "key30": "2VZtJMNWsMPjXNjX7va7AGjM3unBxhNiQjDvEKrKrhwcvLCwKD3VyTXK1J5EYFkPHAqrQApuHupdu3BJZWCwAjtT",
  "key31": "2VJxsFUFukkqGCCuhYuTUAEZQuRAbNtme1bKuf44F6ux3rEacdHrQgDrYQfHBvqMSPT9f5a4bVMpBKvcy7M11Fda",
  "key32": "5JyN6q6Zzq1ej3VFz28gqutXq34NkBHeKhdxBY6XkYrBAzU74BL823vAfCAjCEKLyY2LrjsV9Rtuz53jCcj4UDfU",
  "key33": "4svx1ZmJS5zR53xie73HCZUg1EdW4xoPVvNkGn3sqptk17bKt682oxCrJ69SYWaaXt9y5oUWypoig9kycq6t61pj",
  "key34": "2oThW89XqESQK4eqDGznj8Xt7sTKFHR6Sfvwe8aMC9eJDshirySWUAJWEqVroeU3WMxMKsvkrt4BFQx6w4M6rfE3",
  "key35": "4F99P2v13R9VNg5fouyDpFtVa3LivcEmVaTfwitbdHiheGZvEFBNf87UoCd6vZFHJPcwQ3Fodg8W1sZ6nc4E4Qdh",
  "key36": "KoTGNpKDLDKHz5ogZdRFBUAQcJh4G5LrFpF7xXmSE5BUZj4nYaB12mBepwaoQzrAe2JuaD4vAp3j6RzksVGJjSB",
  "key37": "4v75gJUWTMEYaf1GgAF2aS7e2RLAGcHg3WsNvtN4BccH4LjH7qCrAXWyJgJggPP6s7YrtKEkGdip6NykCoRubJb9",
  "key38": "3pwNW7TiiLZGEVu3BGsvor8zaVkq9eMmfbZLz8h1uBG8mqZ3m3AdfsGUzmQxYnCSkn5Pirp5xneiYnZeN8daxkT7",
  "key39": "4gtA2aDhPFYXEcCdGVsE4zXg1fJMEjdbuESW97KjixCp7DY1NBxw4a7qbMCN5zSFCYpySuT1KJhschJL3co7Sijf",
  "key40": "3sv1GKD67Ttno1pugqWHRcWtBZCutZJr6d2xvLFehi1j5BUXpenzmjMHQcV3125skAPDpQgP3Lwb29iFJSqMxXg6",
  "key41": "UJGcCstsJx4R9AFQ7ZdUKrwF7qxcZ5Kv5a3tLLSGAE7K9doJ5CqVpj5ovR5RSYpG71Qye4MGUBts92pwVS27c2j",
  "key42": "5p7Qg5KTpLLyKLvBqDKWrDGoT7SjDou4HAm5E8Jp5eTqqKfc8pkQQki54sndLpU4bCoNhSXAdYuYPjRePzrai68z",
  "key43": "4rw38GAJ54wokeCgmFDy1RbTjo8GPGt5q7CfgdVD6d7SHgvju2CkNFEMEbnGBjJQRriJZi5yiEEMkFi5RKJxMwoX",
  "key44": "yKNNPT31q9N5vwjGU2sAJx31xKskbkDRCHV4iXWqTHGJvJnw9WhuwT9NRGBLCyQT1r1SB2oAhAuyn2XKGnJ9HCv",
  "key45": "5s48vZGkq8ePD8bMk882263XvG7Kcshy9LamPi1KZtvW9AgMoZN5ufxG6dkWsUfuk1BbmqUR2GiySMJxuTgrotLu"
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
