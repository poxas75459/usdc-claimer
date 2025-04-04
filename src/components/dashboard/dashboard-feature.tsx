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
    "5dwm7xZZobKxbKYT1gbh2JY2VroSBCemDHS51ZY4Hnsi7SXSyDk5mL3GNbnr1uC7AsUUXuZNrnACfLwGYKKCp1EN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whnNKpjb9KhZxx7KU1RkSWrmCvq77ajqopkaE37HSkQeBeYrrMRcAvsiXqir42Bi39xR18fHXnGgWNhKMjiFcrJ",
  "key1": "5tzjjVUhx3UQ4RuFLQkjkc26kr1EG7Su3K55A6oMeZdrE4V474xC2psQkgiQpUm1CD66Sun4rTEBYSvBtEK6avCY",
  "key2": "mmNdbxXeMAdMsPRSuswzStTacveUJh1p7Z7u88kF9Zv2isQBmKjkywiFDsxVT9jwAeZ2JFSVHt64hwWwpCvu8sk",
  "key3": "4fivC9T577Mk1CGfbmfiqamTrtHBhjZA53kqRAo7LQk9CFuMGEVrZUi1Mp2QSAUedU6qHpgjME3XWP74R6JLtAnT",
  "key4": "4U1fSuzrJDQrLoewWjgJPJesF4tLvNGgGWSWFR86A5idvSK9HcSq53Cydmq6wwtGrKpo7EjGCW7yNeZrdZ7CGrhG",
  "key5": "57KAnBTTGwCLnYfLV3DTDWyvYNhWryyTE86mhebKYowdrbY2SqsyiA87dEfWReBN8CyxYG1Hu3szti3H96KEaU9r",
  "key6": "Kf9ZkWm35XZ6mZdfb3q8KxaM8XFYX1yCekzwaKyuCnPcp53EFmJW7DFXfXxpRwouFabhzPKU3TV3L1aPLggkcuU",
  "key7": "58BJtHZbcpgs895pA9RMYS9cWKLTJnTQyduxs1mXXjLaXkNByk9Q2m2iYY7Qk81qN5VL4FPAXnDxMgczGxvtNx5p",
  "key8": "cmbRVbtjALSe8BUypibjDMBk8WRrbTzV9Z1BQa692YpkqzXi6ecAKNkf3jvPjq5TznX6EEiK8Ud3fRYssgidUSc",
  "key9": "WdUwoZoPBcbPwhGWtUncW6AeaBifW92uMx6Mck1KtQkv1hZp6q6Tir9riVrds5DKXP33jPum4E2XL3qJbJ3kDoY",
  "key10": "3Y4t4F7oFKVDvUfJ3YtwvX5rdSnmHjEChqeaP6uF6rYGjRhamSpGqtzT3ymAVDMfPAq1DbisX5u9SULp7P7UFDpD",
  "key11": "5fFYeMfq1bLfPvwAykLADq7uqkJa4VcWpV724rcoet1HrRZGJX6LxjSCZs7gSFbCquMgwywgePQAyTUgsHt6j7HK",
  "key12": "3ioAb7aWW11LAbnUm6e76C8D9vmb9iiF3oaavgQZqMB4xeemP6ksAoB8k1vHnVVVprc5AxFWr1svNZNccKEZiys5",
  "key13": "oRr7HfcPFUBZR1kTzb53qoUrJQJqKKzx6jwiHBCgzTud2ieeWLuVuARicEbx2Xy54p9bkZ8fwKAfLbQ9bqZm5Vj",
  "key14": "4vMyKk3GtWLfdYArnyiJQdSRRP2QJxX39teVoEB58tZKET5PcfgULEkLr72DFFqVorCm8ifTtdJ4xF3mEBm2aTo2",
  "key15": "4Avv6MN2uMr1Q5RqUPgQ5nhGD4peWuY51x7kfkP9gZSt7RFrEuzbEGqbqvsZZYpktx2ncMPe5MVcTJFBVbGzzbMa",
  "key16": "2WKU2hhtzRvbf3ByZDrQuDwkqsqYAByFDfV5nxWstGw5gADNiQLGpgsW6dJoKt4yWbrCTP1EBwqzfhSL4nHLMkwv",
  "key17": "WBqmNuEdTuytNxj92yA8GRhZuPsFhQzpckf1qcFuRqNoZRJrZejEDfjEax4kyHMJRsCgZoeB8oGUa3MNo732eSj",
  "key18": "LFFBYKjs8wc2j91orKgnivng7UACRE4QNgYDgQFq69XqCFrNYpezKdNbyM4nskPZ1KFVkQJdE5EqYLQJ4YCGNPJ",
  "key19": "3dEFwZ8D34mAn5pZ4H24ctV4MqPj3VGSVpYCLk77JsQfBSkNCztiEhRd4KkZTDj9qArDHDzYWRoSKttXJYgZBrLR",
  "key20": "6RiuGEzggnQvmLxPgFFAEnDTKBkSWjixNvDMMQmgU9f4GSLiomGW1hdrM5PAvpH2HD7HLjrKEASYzfLaR851TbM",
  "key21": "5NZsrzDfpphS7nVJv8CnGY2hEkKVhKPZLCTrUa53g74aJGyV4vF5xpfFEWZdQtUFxA6yUJrA6WGkezkCaJa7LHUF",
  "key22": "ST9XbKJckAukhEsAz6cQ7RtnzP4FKUrm2amF5gAUztJ5tKVcrqVjKRKgTiLrDPbDG5cDqcEBoQ6gHdbRgp3gPxt",
  "key23": "45DmAKd78xZL4Mv6g9MY2GZMApax19T6rYYSkrqpyCrTbBfYTTAbmXsWVim9KZPeMbF4HKG6o4RveUemNHaAHVwD",
  "key24": "JFSnoM7Cd8SRQrC9jeqovvPtuHrrn414cdYjJoSExDWKtwJFN8Bo6AF2ASbM5GQdyrsEYudUN3uo8Xq6pen6BWr",
  "key25": "3n9VnFSGiqcsgeEeHGqyNhRhta8VuCCFP4H3ohCzKSMaiTemMEJEy35wSJQWMuUJjFBk7w1emokW7txzqgWkgQcm",
  "key26": "hb9mrtAv5qkTKxTSLSKcr7Vdr5nKbf4KfY6jVWGvF1e5amQBTLLKWHjQNwCeecvpPhUFkHzZmCe5E5c7eWqFB6T",
  "key27": "5NcifEo5GBm6AVAokKiLseNW2o8grLNpSSkLcFoyCvuVY84WxX1mfNsvFRAEXZb3joZTYPeEpjDjP8nxf9qNUBBX",
  "key28": "36og1njy26HJ3mZYE4T1L7otZZFWHYpJoB3ow1kK63HisHJYnqN7yYDqM7nbrzozv831UEmC4vatBpUzCiLQosu6",
  "key29": "iTc8ioU2U3dVppqoUGQbxVsUAFWzunCgbkmruPgYrpLGW65VbNnFcGV6m5LBDoDxvA8TddoSPy5DQtUC4TdVKs6",
  "key30": "39YdJ8VZnxqrTwhW6nH7URz3FrCS8avRNWCRWHfdeZVkq4Qz1HA1NGkquvwA7jp86gv3YpnNN6dY7xADfQkp9S7E",
  "key31": "2UDUVUmVxx7zoQsnLaHUYkpRWjDLbu2hHMxaCjDXLT3pnxk5iaxhAifohwyT9nT3ntEhRhuZsPnF5GHvMqqYQMuU",
  "key32": "3USyFtcnFqkKjDd9tcr3QoFatHDQjgVstmEeDc9AxRbBREyieWAYJcMg8eQMn7vJfcbSDR7aDgbTBw3rvVgNB8c3",
  "key33": "4r9vvLUGGGa3WtD1BWqWLg5SDbYDpu9eZvUNvZRxkA9ztnHMy4NFuu6EHPj4ddsDLtGMohYwLCW1sduYiZNPQGFQ",
  "key34": "kJuJC4EmkRCk6etpv5wpig9PhcbM5RnRVg7cJaPv3vSDAgHHp9P4SkkeA6g2LdgYPsHqXvvxGVaUxBjEdYusEVZ",
  "key35": "5dUaPjS394GXSjtHjQ2Cr3yJWBAXwJ3n5mnGLaZd5ezg2RETPTZ2Ry4wQd9ygtujuRYiysNTUFQQD6hoGEUHJFcY",
  "key36": "4q4ERFhznxoTv5sVtHcFjCZQqePQgTDfWGxmhAXAtMwzaKcmcemGxU4H22WoD9JjyC546nbznEqTx9gNB9zRPfQ2",
  "key37": "CJzJ8Yok3nXEqJiHa9ZrcAWZLF2NvoomroVMkUQLjFP5GSHogqFALrVcaVPPgpKwwe2qm2UW2Eoinixkghmvd7N",
  "key38": "URqwTLck1q9NRsawXC5Dk5AEsSEmmhrjThhzJ2ESKwc35eyKsuAPiDPo616uF1aTJwY6LDquzXe763B5g9jFDka",
  "key39": "2CpJcJTEMQB7inyB2oKymw4bT3mGiEt9wHjapwhG85CQsuT595NuTUjn3Jh6EcEEPQ57uvJcfYed2TQYwe2Wxivd",
  "key40": "3C4wKZfffWXp5oFPBEar23PeAfheWh4KpNdNou7KE8aGUbvig8nUgZFkksnz63beVujLFgtY9AF8Rvas9MJeXfBt",
  "key41": "4oXJFdCmgUQUGPv84gEKBUYYnYUsuyPsPcGmjMXbW9J3CqABTH3c9tzzQfqxxiSWjDanN6WCFKqq8HeQM2MiK9v5",
  "key42": "5r1injKW7j9QhbWeFp4tMPwZwj98ph6AZnfwT2ae4nHf4DHJN7hPifDKPCxUNWcNLnsyw8GN9DmXuqCuXBWzdgwG",
  "key43": "3ftePAvEkxUR3xsmKRvx3DLSSuunGUm36puR7UnwKFrKHVtbwrhyHj87baSyeRyaa3YcF2ZdUUCzT7EPjBSD1Zco"
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
