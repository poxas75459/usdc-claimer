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
    "35EdNXdU9ae18mcwE6iguP6EGP99ZZYSgqzGjKNYAnsKrxv7qvbtRAMtKzLiLpVANqm613PTzHhGHTS7kJvqnb2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDCeQUzJsF9JGYKZjPd4DHgvAMcNXTL9uPE75VtCDumggjZ7rJAVXnjuos7Cy6i2dhd3ZDzjnCGoM62ePbHZq6S",
  "key1": "21FGfP3R3pW6pqUtY4PSZT4GbDuxDeeJA9KCJTgqrgrTbK3BZg3awwAQ3vgNnEfWVLmDtjA3oaKckgHmTFym5uG1",
  "key2": "4BYp6XNPgvoMoCxsNen8ZzC4ELfu6LEjVYmbwAzRvPgF9xRp4o1Q1Whaxs4iv1RYyvq7mUdEScwm5hmKy2rhzHjV",
  "key3": "5pHqZohzE6ojbTtQsU4My8y5YCpzuH1oSHDwRUexwwKu3KhPVtAmR3tSP5zP2RTzcgnL3uE85RhVWtfXphJ6fdAe",
  "key4": "2zXiEX7ZfA52oKSqTzGNx3182zqdaLXshw2AnZDBmwe9UPNsH7bDiqQefSiEwDTB7mwuLq9CfDxYCsSKLBxSiP7x",
  "key5": "poqdAkuRkRpAHec22zuF9c5hCm2h4RSagvZL6DhZ2rKUKkrSNKKUFxKMHzcBUbG1tjbC5S7udNSwxZ5qZvrwVxG",
  "key6": "Eev713wb66VAPUttjWgMRXazZ5NeXbD4kS33xcz3sGQrQ4CBK3pAEjMxqBz8PoKVMqZLPiZt6KKvmSU8TQsDD69",
  "key7": "4ZFosK3Hkug37ghcevgSHMGJPmP6Fk7k28ohwiDYFL539D4vyhkfFdrEmLcZFuVqSdXrdZmzYb7cwDxnmdpCvKK7",
  "key8": "2xeQhFVuPE8T2DcjQSzp9L9gngAFg8yoMDBoazvq8XGqxFBr7RjP42tAzUuKRb3wEZduMwgaGQawbg1Du2KvSsge",
  "key9": "EEWjwVFSR7XNHHvbiFUmjy6mVossRyqjiQTtfNptV2KeN27zUPUcF9bHsn8PcDLhAjrTr8SWF1Vjbk3fMUYsCtB",
  "key10": "gsuJp7BCxjbuiVBtjnFoRACmic1LQKYoDgsK8Dbe6YVzFnk65H44JqRm6cCfYhHoiqCvV2EX72GdUvhAjqeQCyZ",
  "key11": "2z41H7HSpzseSsbhhxQ91AFbQWqZDjqp9X23ZvYYpUmLR4kRGqnCfgUZjznonZabxZ8XSLsDAFNs4z4gmEz9o8gq",
  "key12": "wnczDHqtC9GmkZ7v8ysdRRdJkngewtopUBwfARhsvXfw9RFztY6LN3ehgJsemFQzyUCRtjiHwoszy5oK9XPqWwM",
  "key13": "4dQsVjQga3JJiWGKq1vk7HWBGum5TX1ng3LkwvkNyeVu55ZVeEmARGiKjR4fVDbxHvstm1rRgdM73zU8VaQmDfo6",
  "key14": "2n96bQc1RvaoiV9QeySQ95oZGBcNQqvKXsqkmE7TAAiyP5nS4n6t8258nEURaqsaJKrrvmakmojzWPgLuavdsFFb",
  "key15": "3oiQB4EcgSdib1Q8bLSm8TWpQ4CsfkNyq8H8zygCy4VX47GEw36ss1nP1qbk1wvwLGvtwNgNFJF7bvvDijEuqJMP",
  "key16": "1yZ1BVjThrMbr1WZwKnMeXTQrdpon3dAiZv8kbopKDkgcxb6YEcLV4Qg2sjZs2sDfdscUGTRkCxD3nJznsoNu8z",
  "key17": "3r6f869V9EDSabYgTtPAX86ZvnYckQTAzVMzRhz7yeWH4YTBpKCXAPcpwBRmqy1V2oYgLTFfAbaU2JhZdjdh6V2d",
  "key18": "4pwEuC2TNGRBwpD9yzosrJeXDECLAvPnTbcFFuQBnV4QkK3YrX4vaWsvcY1cSsG6wvzRe6d29p6gstGPLqSN6yyb",
  "key19": "319JkH4dVY6cFedqBeQd2uJtY2GAZndRv7xigQzAQ8kL935XxcWqH5W7KXmSqcennuDs5DgkH4TdXUgfU6z3fNKT",
  "key20": "4xhDXsMdEMjysb2LgrE7DmeHnyViPBmuiavyfucxVWTUzghnuqaKdonDQDgdLnriRR1m3sGTNZ1VRcFc33P9iLPc",
  "key21": "2Mp8R1bxaqNXamkY98xPENDBDS7j6tchnL2THaqH9GPpKmoeMtxZNm3HXJDzrUicrX4Ee7PNS3aHtK28PxxpLZZK",
  "key22": "5uDxAYxUa4DjAdFSsxnNha39yk9FvyPf6QhMrNCUdn6QA9BAJmRFu37ECyfDu2tvN1khtiSw1XzHgJnbsbTbPSTA",
  "key23": "61JrPWXTtD9JtAX3umbakbDdqTFuGWcn75C9j1nxam1uWtHHafqHe7ceNgwdJsgjhgsBRsnoMa5z7DnxFcdjEAGs",
  "key24": "2SEvSY2bQmV2qyWpmH7SwHSgm1AiNstcA3TZ7GfbMN24D3QzmBiWh2AJ2Qkok2v481xj8qCVGnp7USAASfpxu8Ew",
  "key25": "2HRfPdnWQe4wWWg8cV4D9vftajY46neQvTuntoAkorh28fSsXGtQ2iuHMv94SrLGo3Cisr97m8bmoPhyoMuKFAwT",
  "key26": "5z54rqydevzsiJvSWKQ6WsGEfXAeLHDWLs2oCgbuJgVAWkww9Zj9stuzgHMyYZAhpeLuJz3KD6KRB5cxkboCv5iM",
  "key27": "5nqqQC8SFfSHQieqxfEBofFH3HFn1LCDPWucwr5zhsNvjtNtju1ymciLH8J9RbL4AqiZ4oFvMDoo876dzRjxee9E",
  "key28": "3ARjF7gQuobXA99S6uwmk9ouqwohHityoprJfKnh3JcSymkW7KgoqfUrtp2cTv7PbiAJnzXDAQWfXix9KZwsZK7M",
  "key29": "5GZwFQjG9kDySbAjEJVrZvWAaVN7UZTtUGgUgCbvgnWiLnvvdzEYp5gvZtFtPnNiL3iS6BHYpVx3kWU37i2vBit9",
  "key30": "61aUdaZJz9tvZQyw6JoUkdijdCzEs98fjJXnFwQgum4r5aXTrMmDEpTumTcWYKEEmdseynsLugvk8c4NnDyJPGB3",
  "key31": "7kW7eUaJqjrWdmBjvvnWJTDys3nz3HpBCNWhFj5Rt2SNjU6ZqVrHwYVXpoTkZ2SHw1UG44TVoFUAkyZh19AqC9a",
  "key32": "5ajEJMP28hfsc9yTZFFhwGyq1tNZQp6CFhWrYpu24PfAmqd8gqgF38RCT7iYn7aWchTaASkcHRFDdXuLSxsgSrb2",
  "key33": "WT3p3Kj4CU34CHRiSHHCposx4EPLpn8oi49LdEPHV5oqtDFMSfB9dVfaZAk7UmKjmDJMHFCUX2L1csRuUPCvkBL"
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
