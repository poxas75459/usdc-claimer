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
    "wcScmXRhuYALahBeWadYxfDbXPkchLXK63py8gxxADA1qL5uDi75BsSfycrpnUc1kSGmczAtZcWN3fbvJ7FMDpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NP8Fqzve7Pgvzp4ge3teWiVpqTcvapTH3Hm417ZYc28LurV8iswX9SHWQsWFMVHWSLU3ENSgCj8g3nNMuW3zPTi",
  "key1": "3xhq5ddRfMfD2FFfiV3ydhdjH5TX7QHp8CZANr3agCTDeLxHDTPGkGsZVe1UXSUNFVcKNG7C1L3aT4nqtsTwGCmZ",
  "key2": "63LGabkGxLbdbNaYix79Ttxvg431V916BWQcMUWadrXub5a244x4AxLpeqEUh8uQN71BXeVpYKuaB3iR26Exzp3x",
  "key3": "2Ykxe6XGngxwt2nGvCCehT3KwtXcqpqxygpSjCxwgZo9YSQbfEpq2WJvJZMMY2fBwDKkyps3T4GAA5zEFufUopgH",
  "key4": "42QXk7FSKV6r9DmqK8Ut5xPcD1rhYU4gtWvwpJZdu1QZbsq9JzwAWZsqhkCwKHA1WfCCHnsfJFkTt9AsRccyrmxH",
  "key5": "4snCWA9ToPN2UaWL3wspxDPZGoHZQ3LdKHzGQWFgz5LAT74QsgsuoanfdHte7q4m613A9RRy7RiGPh2cZaUJBhJE",
  "key6": "3MftQrsKtKr4B3AYo25nAP4nmfcvJiUrjXnAMycwrexaSZd2eezhkzhzWTJUEYjEiVGa4NDTrLudxmvJXH6R2hUh",
  "key7": "5ytJXm9wFSwzTSQVq9LVY2quz2Dw8NsMx7GLRk1QkSBMTHiYEG33P7uSaaJgCPFDcAbRR94awJwiX8rTa4wGY8eL",
  "key8": "3DHuet237kfmJbNiPKsSJJC8KifC6ZGVHfdWEC93d1bWrpYfMYM6XG6ArFKy4XUVLhVHHvCaYAgcbeBPzjAdccSh",
  "key9": "4y2ZF2cr62PxHYmquPQycPawvcqYnao2kJ4HiagaAnWqgD1AbNrm71csRvbbkoFJ3Xa4htxmQ3psKPSTAvuvYgnd",
  "key10": "2CQ2kMJvutYixFM4fNupgVuicyeo5fbWreUyxTmG7X6Ga9jriAHbYEbyq2YuAmebfegioSC53cHTPtiLXc6Ujd4Q",
  "key11": "2Hfja1VNNGMSErEUdMKDq4LHGKQaHPJP12a8J9eZFRUBEZGTnz4itmqkGTZAHsb74SB2MAoFo4qaH3DSsReSnhgr",
  "key12": "2d8Mb4siHCc2LrosRGuwk5Ltxvmy3WcjzssgRjXccFRVD2BxKaWPgSmWqyFrtCp8RwF4U1yZomyziAxQy8gZLHsW",
  "key13": "3PgmeuNnZbPSRsGjBsqeXhvmqBnuVg9cqrnkqd38KUACUm73EtaW8UCmaYxrjEBRKmMfzafPxEFAxxA8exXXE2Lt",
  "key14": "bY2y4dbEVS9fSmUWaHVHzWNtb5YB7Y7TKNCtyMR7n1KQVuYGHjxJmd7X5WRvNPmhPRyJuiJr5khBeLWUbTbsyis",
  "key15": "2nX5WErtuktjF9G7GkUSEceebH1Lr7r85GVnmJEDqHMZbyNYStex798YzHs4sPDuSbMNWZPXh4AQZZcwsMon6Rxe",
  "key16": "LuLTZ15Qb9mr6LBu6uKNpnZt88EWCBPXRiZqyFzNzqgEv1NssRYkwTcewN1pJiSNgYMkLdzzbaGE2ZLPhvUqYZw",
  "key17": "3ij6Y3rgLJkA9pu3L2SBBnFPiHcT4rwtr9cKbqXf49Gr37xXM6N1ehK4NZfL2Fvbs5DyqHY1e1WpGiMBroHnNo9A",
  "key18": "5VoqZLpuJwHrxctqdTHvRXc4uUjmTbCMtXG5zjtpdcvAiHKSu4BvhjabVuw6uNZheqXcmsgF9TsWC6vkYXpKSZgd",
  "key19": "4PHkW8dQ6TKoshzWaWxyUuh6f6BYf24CaPzfq7Sksx1utpozZXBQefGzzVgvbS5BXogTfmGUtQ7mJ29FxFVDv4UN",
  "key20": "4c8MNqxLikEuHnHp28DgwWd3CR8ya1yCMUVZchS2ki8hmcacYkA6LoVdSiLfkkTGphFSg3ATUjgwnqVTVmA5A3gv",
  "key21": "38MmhYtfcnDi2bz3dyh1Cy1yDNmu6DaKTrQeczAiZgU83Spb2aSwfH4ZR5z1cGJbrmC1ougx6G24FdzMdHUBAtvS",
  "key22": "YMDZECHpp3ioBEk6ZWDXiSrw8qLvnmMimmr113q6as2zQhGwA16TADz631mTLiFzcxeACdBCBLnnGo4eCnM6xSr",
  "key23": "2skLakFiwJD78bo5dV7NWsMzv5eVT6UQbow6G9eu4aFZUhBukxDwGuLNKxXLaMFFNwteud1G2ZSV83HEXcqJxwQA",
  "key24": "5Z2p1vyZJF2fDZxogcAfyNBbM6vQfR8XbzxvDHpNjaPtQw5iw6sFEEJWXRmWgQSWcFDeddRw6G8q4cFZdmYS6PyD",
  "key25": "jco4XRmywLNocrjfCaBYhNzQv3ckA6HZMd9XcNfhP3CueKePhGMb9SVZa8phKm82G4wwnW9teGaABraZEq1AgiZ",
  "key26": "41KhXzRbJW7tFJpd6xzqQ7B8BtH9U4ApsZdUZ3D1B9XsCgvTrSqNKS8PVriXdFn9oxihYieUczJqJHte6diAE2LT",
  "key27": "5Bscu3rvxS4Hv6k84wsm49b6BGkeyx4uc4ViQp6yjoHAmFoUQa5iwWckdiz2Ywyxef6pLGKnyFF1DyQw2NCGK3yz",
  "key28": "ovyio7m4ni77xqcL7YJKoG8pnDdF87C2bLTAhNNzE9p8Q7Z5LjPVTzsuRhZPAFy6PpLz63KTgmuzxFZ25EAMcTJ",
  "key29": "2CSQAS4SuNeU6t1Go5DzbkUy88GCgtKpfQzmCAoDeYC73FfxpqBfqRXuXM9W5o59MF8vyCL3ktcumyRme4ETzuf8",
  "key30": "bVKAgPNwQbNCJUzZ2qF3s17gxzcEqwwTv2CFDfvserZcnLnnxJDTqaNZ7XNxaE4EWuQvs2dKcYEXySTjWUoqTUb",
  "key31": "8SXqKjdthfCtpCPyAP73CndJu1iqxsaB2GvfThnqb4oRAMDisGtzdPRToPwDiAFxTXYHkBxT3gYLym7tBPyGpd6",
  "key32": "4F9KkihhzBhij4zKogSd86VXHTAB6Q4RKu1SZM3sZ7iQhijK8ue1F6NGnYmS7Y9CRVPUeZ9A4jgU4Cp67CUrBcZG"
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
