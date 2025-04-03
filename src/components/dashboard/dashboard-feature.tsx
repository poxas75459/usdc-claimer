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
    "5M48b9fA8qj8GGsqmZmisKqM3Fii7CCMigvskznNPkmqkFd3uBFN4gUg2agn8W4kTgt1gcznf6WwNXPM35SJ5Tr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbWHf8zAigRZtyL5MWuqSSHPLeJxhPXPwgrKVVh3fg3TzBumvDxsHcSagzSwXMJbjf8cDuxbDv2uKU2oQPh6BmA",
  "key1": "UptmSAE3MX4NKv7Th9MXaeK1Ax1g6e3HeRz85Kx6j128ctHYQHQuERU2nz3fPT9uQtM6iWnUbjrZocXKCTS7LQ1",
  "key2": "5rKb25Ed8gttJqqrbN8YHZYd2Z149sBZ54AqnGtnArMrRzdkBHjDbisewWSQakXMdBZWDVfSVeo8JghLXEK6YXJx",
  "key3": "eA8Rna36nNr7UpCb1m9of5Wbi8thy8XUbyzPQ91rND1DQFeM9aSDaBfs6EvbUf4gut3yZdpJDYtxuHgQhwgMq8W",
  "key4": "49b7uwFxiJxHX7AFt2TEYrp1CCUPMjgJ43aqqc77QqrNjLUX4K7MgRK8v4UUWsbQobQdx7owzQANT2h8DVv1eJ6Y",
  "key5": "YeTGQZ34hUtrH24yE2WdLtQc11fe9HmnMjviVwSSxXzcpZDtoWe5VcGE98XztJwhpqamEyTKdTuML9XcnUHmgEP",
  "key6": "4v7DckCbvsuzqHLenwiFqubzsKye9bF2fc8VZYRtUj1n7wockFdMW6ussBdVxkTQjJCFTFDcSPA63VJvJ8YhFSsJ",
  "key7": "geWP7RZPAwEWM1Hv9z4qT66zCdLNmXq2qMccDDizgmwgDotpwbhFRJmrJbBxPbKJo2CCQFEu55LruuLGGgY3rVA",
  "key8": "5HH4pAwbAgKfrXAXeZDN8c2mmrNM5QGUqQiwVkJ5fikW9zVzjQby97V2pPVf5eTsKkDCQEZerHpXqtCdxZtT5hFm",
  "key9": "w7DfwKAeFhw5W1AQabDmna33JPmKxvrrva6i97FwbW3i1UCxAvNa2prhMovhR3tKbdJFrBmfzKF9WNnbXcmo26n",
  "key10": "4ZGJuEGnnrHdhWwCsqmheiBKzoCkiU8EsXDNgHRK6KvoLoeARiVtVAFqyvJMhpYik6s8LfNkJmUzPYVwi1D652iM",
  "key11": "5hmSbonLR7kQbWSka8Cu9x3q7ErjZYbid4C94kmTpLRuJcd9T7gcu8rf2erenmeYqiV5ZFymxJyTbt3t59wjZbr7",
  "key12": "4EkByPN2LxFAnARPAQrYMPtPbn7rWEzTorFjSJZ2GnDDzVehEKoWZLu75HH6s8kiEYbku2mwrwkXLYHX9PjvTPfH",
  "key13": "AfkvXau4w5eYz5M5mEFG4Mo3osjcZ4EdtKdqB2cMLyRXVLPEXQUrSHW5GNwKp9b1AhaQK5GGRNAD1375iqhm9Fx",
  "key14": "26Ac4PjSzJaAgoT36fSk7f7Y7ZezpYE1vUSmyCkBU7j5ZgsXVP5zezZumShmFxRNfPTKYsf5zbb6kQihuJFJ2UUp",
  "key15": "4gX6FuDS1wdVGYXcbq2oP5YvrnTtfx1VHrd5i4c2S1REBsbr4eReoPNNGGsDaMHwG4PT4h6bncRs3SkeAqfkt8vg",
  "key16": "23bhaU4cRp6fRk5kf6cQmuF4r2AC5E2TXXszdB297pC88ebdccQaHnzgDXuk5CsayZaoAjAeuxyHsN2bLECRJH8x",
  "key17": "8Ws5ED1T4Ya4o4xsuzD9zuHSEYyJh7CGC2ew6WwWUaUoCMS3QRbWMrcexEHctr217EZHoK9gEbVMSR9tShVvcEs",
  "key18": "35o9YvWPsbGitWob79hATBWLfvHtrhuMNy2vkvBptAxGzek3373o6jQJFPuCtTzgLmASdjEfskmz5G9F1UE8Jxzm",
  "key19": "2ezKdtVHmmbS9FyTXJ1YYDNBecRWFSQSUZMrwhH7cTzTN89T32TtgpqLjMHh9GGCMWtdSSoKEbNxetSTnM2JrGcV",
  "key20": "2EK4v6jzSjjo1UXSQCqjc8qBv2UdgoFfpKZpz8SesEFY6d44kDLeEuNL18NbS3eGp3mXtNAVbk6giLzKBRYe1yB7",
  "key21": "2XSsJEAedc9U4EGgAm2BbL8KatfxZEMsBQ5P2S4S752XDYRWzempqsxiQ8fXVmLQobCLmxYfHY7wQxd5QCZqKGGb",
  "key22": "5WEnmZ3NgTpDSg8AZFVNEvpAQwrbj8opWHUrbfY82GsN8RieBtew64Mc69RB8y3V6TFaKWeEC6gz2N6gtYb3WAyn",
  "key23": "2bySpbpnSmjgbYhNA7jA6vNy3Pw6dfCWpwjFmQkadH3CapdL6DctXLSJpPN8hmXqJwXRVxrPw2m1vFQETXAhxVoP",
  "key24": "3N2sEiNBdChzNioHKC3fMW9cDTBB4yLRsUNVEcTF8KsYJhfc5JLAUKtQB3jZNySPUnEnfFt54xevYZYDfe9DNXRf",
  "key25": "5A7hSAWZHdYngunG34VfhJkV3mpiBNDRz1C3FPQGxaspeAHv4VYCmSDnUrN7CH2KHbpy7KDv7Ph7hfF5QpTehzjs",
  "key26": "2bVnFdGsRkj8ikaHda8ukfkksE8wqvf5S9JhCEJbxeDLv8n9f3mgvaHjuYTPnTPJBzLp9mAhvZbauJkca9E5HFSq",
  "key27": "456mJAxosQgxDn5WRWhpyx6djSBHGmRYsFi29HrUfCcYJMg9WTimmnPJxT7rZodvF4AAdBitxuBF45D7b2gkGZJf",
  "key28": "gCzKEZopkTntBHEHpw5j8EhJ5P5XeyApASkZLLsxvnsPzZjP7iQpMMtg5ChTrwnjAt3k71yATxq1dbT5m2zxPGH",
  "key29": "5uhPBDjwZLxqrqbsPNpkXB8LtpW5gmYHkK9pLViAEwaHXfoHVaS5gwNQu9gvM1kiNN5cSp1t1v1hpCEXL3xTwjpX",
  "key30": "HLXV6wzypLWCyQPfMWMoGKaF4AzEwxoByAzbfNaxVvgSMhtjjsArqDkLRLoq4py7KnTRkGoFrQdcz7GJ14TJVGq",
  "key31": "543jRmASV3DsGoCrWwXTVHyFNTnQSZyLjyCakDKDjqvEdkQCg81XwQtxTnDBCnLeoPnusKXa3iZxqs92BwWfnkk5",
  "key32": "5ga1T8e9sb1GhcqfZdM2Jkc2AURia1DGgdejP7euTGmbjDYhLJEaCf6fT5d1MvLGs9X3GodCcp9EoYz5FfB2EMMh",
  "key33": "4LcCzb6S23ybszPVPtfVDP4KhUCXb9Y5wDsEc33SMbwayQs3cEMhfpmMAXN5q6YQyzi7b4bTroDWK8gNnJU6xbWy",
  "key34": "DeKAda2bLVAYkLuvyMzd5bVP23AWYwmkjicHFKxk5eRf8SzfbmrWdehctiV5itYDYVVQ4Xa3s9SvJaxNSL1KFjb",
  "key35": "3Me81XruokpYpeAoZHAgBQURVnXgrFVxixk1xqQH9Vs61kpD2ca17xJM9zUUn1C7X2Wg3QpRSzrFsVsBSAnhbcR"
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
