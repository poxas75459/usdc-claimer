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
    "49ZEpwkQR7wi4niLQPuMmoW1TpqEmVn6tmEEUoytZYYnEBwy7hsRLrDmyUBW68EULQWQUwXeqfRt6CZULVWLoFhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3foB5VQPTbisisxBQqENxSpdW9Qcs2pv4vUoUvvxTWFitqeD23bVTprYH2Wf8aGzKwtJ6ttX4yq6Fxa8bA7qAJwq",
  "key1": "5ExoweEhDhekGcUjBrbxLBGfMLKbqfvu6D7BhW7Y6pH6AX6b9XwnHf6jzFwpxmRhnJzRs12xN5vRbDQNEmy2reKu",
  "key2": "5y7Ghz6M8ZvKhT2U9tt3YiTrfA9ABRR1EvR3oZkpSKBTySVSNSotcLwFxbvjqDdKtcn4NbtoxW54rf9hgBreFsJg",
  "key3": "4oRbUEB37eRtoqBwPGTja752d5SBf944oRgBUWw168cuGE9HtpaV4GHMzLcn4xME17vxSWyZh7vqoifmpZxBdKA3",
  "key4": "3C6TYntsbwGNW9yR3CMJjb8DENvCMmGSsq4pWoNDyUq6P9QF9BqAyxAx3L95YfbV3UL3es5sVMgyeeDK89WNQzVW",
  "key5": "2S6uSKAJGzyDvbTpoXSudBSY4cFjsiqWfGEugjHFQM1SjS1omdoFTiN8hPXuUdTwnYRsoFZ8kcsa7ykFT6r1ZiTF",
  "key6": "drjxCutzSx3xU8p8LnXbY4jrEnXL9m6HJH3KGHFSBkJ9yw5x5dG4nrqesibFz9SU2DwJBigJShBUtRbxohQmF42",
  "key7": "2jz3gZ9nawDL8oqhHBHijiu4L3MYy1d3ntj1eJCZLUTag9jujov6dc8HbsWCuA7KQTTqFBUqeEqebcftgeUTwzJf",
  "key8": "46tgDFW89DKvKxz4VRPAbvqS4FEHBN1KU2CkhX12opuL2Yyvic3qR5D9cx7fUPUiosQQWGNdiPRdrQLnFo3n3JMn",
  "key9": "4AoZkCbmj3iNJZrJTXYidZpDCje976tSiVFFsAGFWUaf71NyNyMZeWHCeV1egsmJ7x3jf3LbPKHLy9carYgaGnw",
  "key10": "a9nAjhhPnuqbfG8Dn4i1c5qoZtM9Ma2AALYRVXh2JEDKzTaYkrvNGJZRrZXNKBwbntLuJRpzTrJ9SWfH6gaiDa9",
  "key11": "5YUkSh7wn1b2DQqrWAxozeUJTB7qD2eCZvVBR9ahUq6LbFq4vJeqN43mMzom6qviNpmLCchuDYSCnY3wv6Mb8hVZ",
  "key12": "3pVxMUks6vFup5Nna6dU1qvs6PBR8WWzKfn543x1gXsFpAHnyvoymdMXWwbRvmjJFeJG7n5C7ZYHySd5kzA8K346",
  "key13": "3eXo9uRBs1xcyuqngu1MogbvGDMgeHiaTBLF9gEfnJRoSAvkJtVLssitPktgd75P4Z4gR2g3EVrRWdv7e2i3ATNM",
  "key14": "BubDCrsyeq578GPRTGaU8qCoCSG3vUYnJBjGQoRrwG5o7gRWkLfGVFthwNLF6CxKVioZisuSNavWP3mCFuXUHur",
  "key15": "446sc2wNBsRNkabayhWznVaa778S1Z3ZchWqcP8MKF7oeXaNjZ9vm5CyMpM4n2ofJAi4v9yXcNnoKBShukSzyZDG",
  "key16": "4XQHMNLdDnPkhWd13PmgoedFfXE71BQ9re7T9i6oGur2sytqYUwr78iStZZWCHnJeHX6AgmfDzYkn9MbK97oKgEt",
  "key17": "5NquYVMXn12n3PaNqk4fdoi4ZXh6jeFG35APARzrjD9jFhRWiA6CJgEP4ywCg4a5DM8XKvrkvF12U7jNMxZHYrH2",
  "key18": "48eDk67yugq6K3xNudMXFJy3nqKPqhQtPTcQWJbfFbQuRdwKtkjPgLbG5o4oLLxd8BfobJLXxUuVu4zaDj8p2gaW",
  "key19": "3oapBx9kCK5DxoSoPPD7mWqgWVvSGszPmiGstXajViNkyCs6jKienNjN96dN9UXgRXxxfdhma5dkoZz9KsGAxsuS",
  "key20": "37JeJMdmYUaNFycrpEqeDYUpcpYGPX5xFULna5AsJvZkoavtdZfhjQLqwqahG9AU7Ypwkz5B6GK1bWS1gfmDB2mt",
  "key21": "YNobPE4VBWTaFYb6pegUb89WXdSJvjgn1vnggERsiKLWhNX54kTeLedfmrDUaE54CQXTHHKvtNxhCBsYgFWMNtW",
  "key22": "CA5eiF2K2PMTMZa6pryeqz3X3oyQuFcX3G9pq2ik9k65SaWTPGNAwGX8YyRc18xU3e7ijzRvkcSSbTisN3B2Dxb",
  "key23": "58dB66o94q2ryHoTdHGjxauVMFE9dKMAL5y4tT94pgU5gyTx9NzzK2mHCNXANWRUn5ZgXQ8uLmAD5AhpV1qob8sW",
  "key24": "b3HHWQvczeg8kyCRQomqBNLZr7HVCPi1KsCmjGfN88ndB5cQTBkaduiXmFyZtT6McumiKnxUrR4EeXhiSHTvXH9",
  "key25": "4WDk5nSrnghD1mnAAgyKBg8DyyyzfVYALSCJyUCcDNAjEaodGbSXLLStZBSfk3TJUMJFXu3yX686ykZiG55N2qYu",
  "key26": "4riNzzCj8MtbvuxuVJGqs89rUHnAmtavwNT4chQ2EuTdbHqRxpdxCmZKwstpSgRK7eGMvbYGxha4ebK5ufr6dhf8",
  "key27": "63fauYBRfxysgXhQUr1QN1Vg7ENaUTNe9xxXx7NXx4P2MCAdxPgHJv5n1CwDnBxnkiejucRyBa5WCTy6osTt3NJe",
  "key28": "4TwEoDr995q8tWjUdtHmTHHdCzXEZZE9L62CNwn32hHgX3VwPsrrVam7AmRdrYdvSPeWHhGUmExeTYF6yPnpxAqx",
  "key29": "TVmSmw8dVPnqBosBC5hP961tnNS9X6qiMjWZJFLeUkcLfwSqb55nFcRU27ST7DCgdndyC4ttUtYwLm6JEYotn2o",
  "key30": "3YZuuTZuXYtmEQBSP9aqphmC7ZxsfFSRnY7pcoXu2yqDfU35dPkiEMGYR9eMkfgSLKqoYviKcFr7k7nqd1XDrzd4",
  "key31": "3Mye93LDdW1QjaGbWzdafvwzHhdAsK7UzY8oJdf72c15UFvCN4Uik6V2HGMoznQuLjb9JdRzDYdvMZBRk9t4MJdN",
  "key32": "2PSVMcF816sEohp7hNjfyBXA5oTNiRJs4vUguZB2sGiczcQTSRiNTfJZqPYeA6MNZzMNc3dHQhQpuKE9QNNAik5"
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
