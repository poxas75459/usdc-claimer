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
    "BETVzfJkGevE23khN1Pon5DFdLw9KNd515GY7n7cmBbSNsoC4PAjbCoeuxjia3V3UnLRccn1m5jewqMM3nnPWgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wsEAyHkQc5EjPfpdjUAtUdoehN4hDAUCobWFbNteuMiqquUramhHtfvyTYwF6HwrPhQrNQ6bn1SXz1ozmXbYGqc",
  "key1": "2eJZkqEG42hf83sDAW1BHgSCRFkEaA9qVmgaB9iA3YoWMeNkAptji1nqXbvbNdcV99dgu2JAJxctAGQUSmAeFRuK",
  "key2": "59Tzt1w64q8z8ArhRbwSEGJ8HLBV98VUP1riLhN8ynk7PzBC1Gyg8WcZuevNFRaWdJfktxNWQB9X6cFeRZXikqMU",
  "key3": "2cD7zfRFepnqrWKjcMjj3qVHBde27LgZRd3avS7jNMbMqYkJc1A2TK9XfNuWBVfb8kFEiAD4VcTJq1Lt1tzGbUpT",
  "key4": "5Eo7HHqiF5J46pFG3yNQ1YPeSN7KkKDk6sLB4t8HBoWTFiazYFvzCVszZHLiUAYYJsD93ZyTyJTNwW5kY3e1wYdA",
  "key5": "35dBZujZCJCTh7ifyKsuirhpPCx5rJajnsw8V5ZtVmzBpbZF2ciunJx7At6AR83B4YhW1KEN9yDQFtChn2s1PZfb",
  "key6": "51LZhe2Va7cLcPJh3m3jgzxrcrzrJ7j7nZUEBFWPNzBaJCtLDiPRxeifupFhk5KauBEwfAiVq3g8NiUsLVuKsJJ7",
  "key7": "2cNhX9md9vTF6aQrCb31VFZxS51eXiJtnhkrbE6RdhkHpKfnxb6CUUsthdB39y2tpqvhHJ5u8G14wGKqV31bCMx7",
  "key8": "TNiGXr9g63d5sDWcLpFf7o3ei8EA6oksazZSEG9ESzyZqe483kLts9W2tatHWnF9eo3PnaaADdkBEG8NbvQ1YXh",
  "key9": "4rTtDZmaWN8Pc9hj9E4hKnnPmgH99iMsH91t3qRDHk2fZazmrjGFk4bfcTRGhwxgKqZZZp1i4RcggrfMana9sL7q",
  "key10": "3QpiY5zWMHJYPLxCYHDf4sx2Kag7d5d4ZG4hRuhZMTHJeCdHB7gpi9s9ZXWbVZCQN8UspP4QfZ89inkV1UeoNSQD",
  "key11": "3JVgCPnsPuTpXTnnQBW5ifmaGzo5J99aBD2ww7y4QQBXeLbi1ac7Gcs6dBQLmtWXi4KFzoRwGz5N2A8bDdbxmn3s",
  "key12": "3fJ2868QwfhGyfcuCN4QJwrACKUCg4LuQhLqJqUdpRkPCgQxnCXtzvdNTK2j6gVDq4ezAXPorFLicQuLpn3Voyhj",
  "key13": "o17aBUG8vDKeoKcpoEqoqsJb6xyrMovhRCaABBVEiEdSs3itfBwkFPGk5v12zGjcoM4ce5fG1qpRHRUCUT4C2fS",
  "key14": "5KBcBmr9Lp9rcmJhdBowVR3mdzB3RxbFy4sXY9Sg52UhkNf5WzZ7VCcrCxSsHW8zJ8oPAP2dLYu2v7pm38zm5yFT",
  "key15": "Kw2V3p8Drgzpv2XDs9TmRRj4osJkBuPzsdDvGrbxtjNQSHpTcK9R3jrStmXgvGybsgE2hWZr5JHyDPcbUaEkSCC",
  "key16": "2mr73ZLE924m4K5z4f1wjYoCq5BuCbYb7Mt1BmKk6Pdopyy7excAa2pHp7RbRg8616xfeaCinD1aTRBo5ktfvL8r",
  "key17": "2wxCrahbnzRyQiU3nqAhaLri9PabfK7mobBVm5Dv88f9wwXvbDwMLGaUtcQ4NuD6K49QW5R7wpg27hrLhAnUAoKP",
  "key18": "fqk9fuXHBRUmz58K186c6ukvodtaMcpEUxZpcuYKRsAZAxFct3HvtbBtWtZbsR7N46UUN2Ujr1XhHuAw7ruFsQ1",
  "key19": "5kmJBaUGhszN54wXBQGyicFNXWTRKy3P774eyCWyyEEgi7KFLs44i76m25s38T2ZNTujD6znbpvXHp6CAG4wkWKC",
  "key20": "3BTZGxJtMQdcFSFKPFua4NPPjmBM7iFwsQ6wmgVQZfGjf2P1KrkhRB55a4yjfs2f3MEZxkazj967hDTAvrSQPTdt",
  "key21": "3y8gVqJqBFjUm5Troqbj3YBT4V6iGp5yQQJfGFgqkMB2wuBB6JF3H3mV2ZXijnhzG1fgvHzAtPDyEeCZ58JBGHQG",
  "key22": "4PPUEu59Rb2tQa6tLuuFHGZwLKsrKZ8nmRE4cTPqVBu5yHvGzwoqQRbvKUPhx6UtaeboWQ2LjjdwpZNS9i4nT38W",
  "key23": "3dLc1ooB31cxvr5mt5an7JXQbMu9bBSrPrh2WQjSAm2cACeJmi8wacjUkomnS8EQQ71nfqFnFFiw5zapeZcvCvJj",
  "key24": "3n1qfingL6ee8JgLtb8N6Y4wbFpvDTgHHkaC6uRUS88coMYy16ejPQu6Nb69AE71ana1qptkpNe35NSAT2grCfaY",
  "key25": "TzBxQMpAiLogJyfSkByi4HoXA8hYrjzGxPeyekvk8YY5veBrnKcJLos9KYgi9T51uy2QK4ifA5xEMMJdas8hrn7",
  "key26": "23RMWK8QQYdXEn6SSENtHgAXZyYwnguBGsuFyZShDibFLrLe2kKY6RT2pnhyJ3Wccmq74mo4rf96oxG86XVVReAJ"
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
