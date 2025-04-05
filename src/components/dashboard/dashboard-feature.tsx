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
    "pc2KfzzgnPYzfE8ZhZPfnVkWKXf3CShKe6Y9anrsPmUGyCMYqX6dTytQvpZAdSNHQ9bGdKLjv4kTcUHdj8nLRvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KkLBLaoffUEobKuW3b81BB65zZHX6263FkjxzD94weuKBRmkkZF2Q9x3LcPYDS4C4G6nYTSSbZQJaMKP34JFo5",
  "key1": "2H1aZ88KjvRsdAS6atR7Ga2NWKaGLB5HqKTAF85j9NeCoYc4qGip7CpLa84yqWTQvfDTn3kKRKomHjiPYMnKvKkE",
  "key2": "Ntx5BRTPqUuasGo5xW12z7JbRpoGyZUBei2veQju8TqdEvUbJjb8nBmCahCT4b8nT1Dp1xtSJNY2FpH5c3TwcL1",
  "key3": "24xZDoeTnjyUQJ2wxzUrpBWB4CkXKEEa86nHYQXQBKhK5Mq51YJCTKuMSnNdigkaoDNDgB55aaQoX83WJ5nc9dqD",
  "key4": "571iED4sMY4CPyr54zdyJRrWZE1aXsyqWXcXCgHqJgV8zgjf8tZvCUhbfjzP6HpXrV6RmuCyrZEtafD3erd5BCM2",
  "key5": "GUnCxwZQ167qsbzUvXmGMGs5exdGsYA5fBX9AcPnQN1o2gj5GyqYrnJLmHW6jziLNnykU7HQZZXfxGosGassMd6",
  "key6": "5NjQEcvoYg1QWRy1YzNu3hc737eeBhgFeuGgFvVhbwkLAQSrmacgAaDbBiPWXWmgPqffmEG1qQHD4NXRFuYGdJMu",
  "key7": "4so8z4pChvTEyjrMBtEz7QVmS3czm9P4KST9uaSUB1Lag3d2TAhuHD4QA419Nc5odbwF1Tmt9twbYWk5ActeLvoA",
  "key8": "cXuGMprPQhACLxQTL6hZx5h98TqZUHoeKV2HCrgdBj7EEGA9TMAxDGDxmzcMT1XtFcTBa6BxZfjKWWMzFn8jnaa",
  "key9": "2awNGKqAyXak8DwiEhdvaNGfDA3y1SdWLpsXC4zo6XwMuhPQ166ZjedV8uoqvq2DdxUywRwxRYAF5t93TDhKpmtE",
  "key10": "BAZaZsrjb3zrmuzTA2vVzq23YmV4tu8jh7e71nJs1MsNzZtLKjYq2rtcyanuQPhk7oJqZ4Ab3edHDk5hx5AULa1",
  "key11": "3doVecotHgdX6EeuYdrwC9ZjKfW2pN8dbtYwGxu4pHYTLWL9gNXYcchspfdmmtaD2nYcsmafuLtXXfRpfAFXtKVo",
  "key12": "BsSDRbDuNHs3jZUFWdTevunU2HjzhWYNLP7sA8ZaPJXYzUL9TpXuvd3V3GT648G3KZGrXkBQDzQdYtgNfNzyqP7",
  "key13": "5XZGeJbE4VCHdDNP4MZfZrWS9VrWZZS9vPzna1bbpqfcq4Tgv56DZAFpEv8uj4YbhcGEfckWPYHHiB1ZLKMNYzWi",
  "key14": "3zkqA3afZcrDUG58qfko2diLfHVh1tr7v4Xi8eKxmxeJAm4jPG72V4yaX1fLdjuYxAFnzUR3C6NjW8ZRjDVdpahR",
  "key15": "3zwHnDtMquBnhvVEEDKmUg96EBdbYwDwW6ufJH3DzFAGt32GBBnj56mcUdYnNYAQGcWckff2x5He25VnKAs11mjA",
  "key16": "5FTVAXyHfwvaFUUeF5qtMQ7s9mYgmSBNRpQo8fqEZiJQz32BmfyaHmqQhSdv6BbAEwGjdT5sLaXVbmZLKpLMdG6p",
  "key17": "24cr9eFHxRnZX1hv6Ln5HKKZ171Cwc3WLnvVsDXWQeEauYbf5sPw2sGvcghLG1BSyBecBQo8vfQpQniuZaG8edNG",
  "key18": "SdtC2fwr1y24Tz5ZN1owTFY7ypFSdRnyiZVMpa3V5VbnztkJBV8Ybcw9xRvHC9NziDQ6PttbH1pTAwmLCCjp4bc",
  "key19": "3rD7N8e19hr7GDWgyFaMtqZofGiVZ3NW49cpoHdk1niRypr6Q831q5RgVSVwiBDjfBm1wHxQCksT4efP3iCQNzeT",
  "key20": "5zs8XVZTfX5KC1rCUFujtNYYDVdcHEw4CWQY6mDhgrbgUCoRMxxTmFbxSbm1k9spPVFGnprqk5oLqKi2NwQ1Zp7s",
  "key21": "5zhYmFB5wL6Q75eD9iakEkg4uSomxBgcz3tm3v4ZSxGu4D1zXyuTSAuuwwXKKieifYHZdzsYHumaqCahXxvS4a1g",
  "key22": "5RmfqLR8E9GxziN6CrKex5rTQLDuiahstaQxvBcEEotHyrBREGF1nP27bN53ZGCcE5m7nvtCcr7y9VshTMXeY4Rz",
  "key23": "5Ld6QxCskqTsfXgyHsmrD8NvmAJrfr8qch1m4tQADBNFRnMmmXheLvF2WvYQj8q46QaZShpZVTJeMcrdsGZfMe85",
  "key24": "4Yi45Gqa4fkj6HRKwC12wzE2HhYt62AS9XvCweDGVn8ZGYGEmzjm3Fzd7c9tVYxq2ZW44NdT5k9qLCEvuBJU8xTD",
  "key25": "5CMgRNCWjKBog2HWvmttiapDSmyQqetagMAZLHZbBoGZ1cJKato8KQYpAcYmunaYVwmYcFUT98h3wXWZgrJu4Bvc",
  "key26": "4yY6jkAPiVMFPkKPKBvsK6dc79wmZ9rt8DaZtaAj5iKkYieUg5XkzimAywfU7jPgxkpifb1qtoqWYHZqvobkqqqD",
  "key27": "4AMPkfmvoJtroa51kVyeDL8XazrUhdoTaGG8ohbAM8WwZJtdYzQ4tVKhtX2A3n5o6XjULR7Zqy92AE6yfjHibgz",
  "key28": "2GXpCuG7TLBC84RfPXpsbQ5BKF6Q3xhofKEJRsZWbDmibA7JbLDFibGdfY6uqy6jLZ7SJhVCywE7c9xwQxMb3S4f",
  "key29": "2M7gCtiQkx6gwyFsj5LUeshFD7CyBZEzQZETA9Sv93rQCabJ3Gz4Gr1ancm5DRUSw9MRf2NkKj5S5hiJrHH34NoZ",
  "key30": "52b8RFGPbmSSydFwjQQpjDHn32AP1ozmWVoyvcaw5kDv4QyVndAf2ckhxkKtdq8EY37xbEvSZnAS6UnUiSEBBptc",
  "key31": "49bJVoDRH9ZhXEB7jRS8uTZFgUAmbAEExWaKAQaaWybHMFBqTBqz6M8Lhd3R5c7rDhfwj6Qt3viVPJfj2UZx5AmV",
  "key32": "3AC2DsurdwPFdTTsYqoTyJxduVjd65BRQpKJE4wd5PPYe8qp7bd9wiEiWVSKegwf3yMKmFTJLYGEtDWbuPDGPNGW",
  "key33": "46T2JbvJg3hK9V7GTqmzHkSVq4iY8PCUTcMy3Q5kw3AV4HQWcSSndZxYZBruYUVr2p8uJRViCeFVJdVMudta52eq",
  "key34": "5Ab26zSeT8d49xCRmAKACdDT6kZhTKVRvUJG9Qckumi5kJYvxiF3pb6R6EVQMzUuuE1ZPjMrT8PkafBuQzcCHfg2",
  "key35": "3yommLTPQtGXB1Q26yMczAqUYydEqFpbmUNboUsHbQSZmvjHJDqhzu4yHNghxzXYhpnJyBnNoELM3TS6BdL8TzTW",
  "key36": "3JqsPLAQpzvjkqqJxJzX1Acr1yPk2T5QPnNjMoWfbvMch8N3yf9359uxv8HehXorotYtw9oqBgJusfg2Rqzd2Uq3",
  "key37": "5bDaSgb7LLMSNuVrpT2pB4CnA4X15NoZK89CnnGVvU82FitJGHRMH6EUge64dU7Vam3411jpigiDThJh56X6Zo4t",
  "key38": "4Qm5U5goVKZmzaU9fGjWFczMjSPaBdKPGyHCNRWXVbJoLTf1K7ZZzMNMrNxgkTw3vhct12HeZSRru6nMNrZawPfQ",
  "key39": "dnXug25WDCvk4o2k2f9iX76jTM9jB63wHspuB1wbZws7US3NQj6Y9sgiDGD2kp8Ue3aUjXYd947KLfPiqNDmK5j",
  "key40": "2xt6p1rt4FkC2S3w2uV9oDinFdvwgvwhKayUUDpBs4fXqRfKrz995yCxAQ371UWRpPLJq5YwMAdzSgXszQD2rubq",
  "key41": "67LK9Rcmeb2hrUq5DYk38AZiqh7MABN1obWgn4H3dw4RajSUDHELWL5BTLQ7x28KjUCvjycp7aU8n2YDyfXXM8cw",
  "key42": "4KckK84kVDPpmcxJgpYcXpHShnsqoqb6WaVM25Wpz3Ycch3LGkZp2e3g8iKLSXzDkMj8R1s5wjmfjPo8tzocfrQz",
  "key43": "2ziCLXXDrubihBkDbowkx6T4Pyp7L9V3kBWQvoBCDXmxBVPYbu7S5qEDttT9NyPXrRW5qvZXDgj9k9bkzdL19nk6",
  "key44": "uLhH2zm5ZVX2XvATushehuUfNQffixyhZX2NYLR2ePCfhAHWYzQdvdkD9CwVH47RHpNLQmBvzG5qoTJCcRZGCNv",
  "key45": "4CQarePTLzAsGKdfPGQzUPSoYfiBaC9V8NnSbEr1NqvbCaxbSFbkBp81PUVwvNkTgBqm1uA77kE9eudrxt9rVqHN",
  "key46": "2hSSy9pFYU5JhRXEgrjC4z8cyx1QYWs7iHXSj67BTBHxs9gxWgQpYAvVJ95qZ8BjZiCBFFdrt2edTFD64Gtt85vC",
  "key47": "mzUn5Ur9nxNgqANXjByVgCMwEG4w9ynpeoH4wk6fADwNjLtVbXn8vTAKMwnvenxuJef3WYKJPGzPg84wayfBdHo",
  "key48": "4zXJaW96wQbQspXxGgVvFwUj5CqySEgK1bBH5mjyraqST9w74Ks24HCMxNgB5jigszJMeVaF3CemRTstCDJseMhp",
  "key49": "5cjErLP43qbCSU2xPNATdchVkCp5mhRWUayNnsjreYv1AHYzPdBrfJYXT83mSHgmhh78gPP7xJMjZBu6TE9jciTP"
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
