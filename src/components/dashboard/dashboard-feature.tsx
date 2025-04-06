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
    "eojMhLeUfNQ3hWqTdJyUZD1YEMjwrfu3yHbLqSWXJiCLe5BNJYTYiJcs5c4pt1EzFir5V3t8kk68YaZztiG9ywm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYc5wxSaz9p4W3k4Quacy6zqsTv8RdyocjbyYDxD35fACEmYzN9nFpRp5Kdh4kxjZuzex2pDTt173FeZViHaLfm",
  "key1": "3KGYnmStQpiPUX3gNfRrBFdRb1fa5JrVj2UoDjsoL2KrrzkPwU1PqH8wWG1dPek8kx4T5wm7vqV7m9ZqMiP84U6B",
  "key2": "5PHwVrsGW16tGzqkMds1gPDyDJQTFQ1uzDjVjfoUNDEedfPA13pBXvZ3UZPpKPQYfjdSLpADa6Jh3YVrk21dUfe",
  "key3": "5Cgu2CcuD7F3HFWDCMWkzdMrBWrWboqAiLtTSGkN7nauh2RuiaQ3usEQFSiZnzNDSwyHU9diQEfdT7xHciBbyYHK",
  "key4": "4Qb9MQuWnMKhpYX2oGRc5DpDNwvyzjRkr8nvXQ4FndafZk4rJn2VrxuPRvSgNFFfYSxgQoKrhtr7yxKzYxsHhZUs",
  "key5": "33FzJphLbj7QzgoNcq1K6QPnP9JrGfixxjszWdgtukdsbQ68Xmcf8YhZTewgwbPZYhVe73okVCxS7gxXABNUuzK6",
  "key6": "5d7rBYC31tJGBEx3tPnjgeacyRxjDrxwGbGDnmTGh6D3seyToXugWwjY3MhYUsqsaZJwAPHAz4xmKZAGvwZ2AxFf",
  "key7": "hEpvo92Dy4qUGrTLPvnU3JVxFAkHjku9epJBm2jc4yU7w7fJN8qwEtAWTVpY13DxeG4qrHaphEL7hkxi2WyGiHY",
  "key8": "5BEtexrxafK1W7Nd97MZvtbFp8xg9GKExoBh6oy2nzaDRRgd3gu4SjxNTLom95xd7i9ZNLJmdRA22baFHhuJu9vV",
  "key9": "A7LyiDK5VGtzgYGjcMHK3GqKwuD3tPTcMVBR9kieaj6aHvWtjwaD66uG53GnZi1P7v2HaqGnWK7pp4gS8btDWo5",
  "key10": "3Ej5bWbrzQjCv6nKcy3niFtko4nDiaXBhb9NJBhLtkcFzS3yYpmbVFr89xFNnwnBZtpETW2ufF87mmAovGzmcRNw",
  "key11": "3iXngGZeu6KUDx3puHogcu89FMgNWKu6PokfJSMuy24hcJPyA5ApfyfLGgpQGWXPgQNzGkgbCrFJaStZuKbEZpB7",
  "key12": "2axZqMSYd3Be9oEturDm8TSjCo7FoKVsfC4az5bUi1rpFK1qLxNPDG4TfyRDM7WgsKgPZpyTcFMj4pwbbbA94nYq",
  "key13": "2tYPcUTasyL592f55CYJe8Q6f24aLkbmZTgNzzoKmwxqbYXidNeCdAsGfNLPrveX3zKto6ATmhu3Cf8aAFkKRsCW",
  "key14": "27SLnLvH8hNWj7yF8mCbdVCYHHkZNoC8ncQ4As3LUTowzePVVtA442C2JWowArFckp6AXELGgmtG4Qi8JGUqtC73",
  "key15": "4Hn2WCyYtt7dgpuW9BjYiZMcESFo77fZkW2gekKBHFPRuUtDz5T9YiWQmPJUh9ZeP8YcBPhXqu6GFTbF7u8t1jS1",
  "key16": "4e6FZaaE9p7srKpDHeozgG3buG8F7uo9XKg71MjdLwivKrasqeHrsPyBg5dQbCtDRZY4XpjN9VRSgGNU1vcMiWi5",
  "key17": "51MHgN5KstUVLxZcXujEt2rsFtieCduiBtwuy7JiuvkHDnY89aN6bHjvyNrHvAvtkqNgazsoCDyqQRXHEzWavQZU",
  "key18": "2cEronv3FgNZ1ogmirgwW6dubJDNgJuVvXQXMFkJfJVcLyDxnZvFLbe55QAwZ16Swqb11VASvsXuzrnvr9yjcLTZ",
  "key19": "xvbMnKZWtKSjC2xPjY9YmwTbtjNsc1g3YxHWRHAxzHSdZidGhYLNs5F2C5eMejxzPG5QCBP2PtvJXsb24Fq2cxZ",
  "key20": "5sGEkSUkgh9K9xyu761Cu9HzQ4wCFwVmuBK2KatbvqE2PCEmdXUshDbKTAvSeMsWJiU7qco6mQJgxmoi5BqLjexh",
  "key21": "LFQ6Ao9hEfTDv8VMEEnX7swvyzYfYKecMzapZyBtNCbFyVZmUy1dZQQaRChFf2oFKWfozBixjqSryePCTNoh9K5",
  "key22": "X3NseHH2fW4e95qk8G8Ue93AqjAcLz7mubNSbokMtPZy2Airi4HmHcVZf4QuvPmNMM3Wr9wW2KxeR39MH9GxEUD",
  "key23": "4NMTTGUTqXnZZVKB6uPHMkttcBZMdobkcZSKQuPjBJGmuEN2vyfeSeWMbhLj4JL7RpeanwNSXYTFRHQTvMDrRArv",
  "key24": "41ipoqr28n1EocvKJL1biYgf24DuQgnzHmvpLEicjgR93aPCMStnZYjxWBnaanq51g9F6Ca6D3rA3G8hLS8BsqRF",
  "key25": "4MyU6bGTyc6SfhNkEXudYqohdUW1tpcqg4GhoFRR1yscH9ghXqhBdrma76Lx67B4Dp3vW2SegHmvzbpZCFaprcoV",
  "key26": "2vLbowTvxx5VvjexiY4tVWeU5PDCGYTvttEbWVPxQAbA9e3RcxTTjMNyE4gRtZAv13odfavuziEzAaC2F2wEDreZ",
  "key27": "V1xipQRFy2kR42xs8PH2141qUk9foPw8kg416FGU4x7hPBmesqqX17uEVhwiXSMK3LE3T3Y12PtcPAE46tarNAq",
  "key28": "27GTAYCCoVKkxHWXVoiPRUivzna4ngLtXBMhcwLewLuEX7e6aaYDEJUTYni5wA4wFXkCeSBxX1honwnBKy6iLwEe",
  "key29": "2z4g9yF2mQH8BhUoSPJcXeQgaNNbpFH1SXvZXoMYZvUPSZMMskrGcYLpDT1GqpmYRoFDg3DSTB4Nyhr5ZWtNkQ7w",
  "key30": "5B8sSSdmAzFHEU8hCexrDoqnTMzurJ38vU7Uvmxx2UnEvsymZvoxFd5CUBg2syQT8wc4gDGE7KZRM9WkJ4Dc89xr",
  "key31": "5mhaeMJN5xRpLFWqTSLVEhHnV451bEUVmqUtALXpPdcgCS5RC5nQu5AXEgfYCLdJjPd5GQcMiUppNqzUYR9EErff",
  "key32": "Z1mt2BmixusDnE31tJSj6jesDb7Nfo9PebnH7nyaLngyEUouxrQ7an8MNjD31ndnEJJbBaZkRzkxKybmh6NCtGH"
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
