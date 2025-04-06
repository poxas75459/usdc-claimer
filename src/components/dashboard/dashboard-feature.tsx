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
    "PcWcAXcp9eA7F2mCFYwy5jfjZPYkY25PHffk7kJvLWdkecMZWt6VCQsBpsPWQktSxo2r3GMLc3vef5U8U3Tkyhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25aF6oXaD28gSu84DzPH3TgumUZyfiHCWx4ovtSxdL7dAmg7tFmSoN9GLScg5PZ3ocNZrzzDTLpjCAugMoqxUZWo",
  "key1": "4xUQBaR4XLaKs4XefFyz61mzZmFRhoCwK61cTLrmx9gPJGRhTDgoSSRyEwB5vGLXgsGACDj1CAkFVCYysUYsoUhu",
  "key2": "kJgBSAoPEvmfDL6iUAtwJZwgcA9tg7aB6PE4kBpKk2v4jqhwzBcaB1MS8PMaSm1CB1hzijctFp6W9DYw54RADcx",
  "key3": "236CrNKkx22bd1dNNQ5KNLuHuejAGScpNGNhyH7z3JrETMAB4RhUJ7N3vTyRzauCXiB3ZsXH8sMxDFadnEeFaQ6v",
  "key4": "5CHJtciFpVcqT4df7rWngiMQ7qVp9zxgA6674uUG1bmTzEcAoZtzVu5caX9sPvUm9uJtH78KMgecNGd3d51hhv1e",
  "key5": "59siuaWg8a1j39b6KTwKLczLfvpsuZUKaERR7qgV4z4cLkou2z4r7ZykLjfZXK5g1EBsiRoXGW9NFYnN3o9QcFNz",
  "key6": "3aanuorvtK35jbiNZG8MEhr2m7UczqC1hTTHw6cSKw4bEfT3EJnVvo5iC96QWZMKVievjwoD2KVdUqvSGx6BozV1",
  "key7": "3xdDLMouqF6wr6qUTLtyjnEhCwdrWAN3cVQcMoimdsQSSgih7trRu6tVVj1J8mYoJtgB3sM8GLSnkUYZAMRY1YB5",
  "key8": "2uQhjLqh6feptcWtUz92cL4unZtytT3oyeda41fDU3Avqatjn27u9HMc6Jp8PcWcma6YfLWot3nbJwEpKLWXRhXE",
  "key9": "2LFTan9XeKXmtdC5ZhCvprfdh6Ny9CWdtmwJ7KXtWE8viKcKx1pyaWrUmjfr5gN38dnJQgPeND867x1jWMvy2HUa",
  "key10": "7ta5dFiL4D7RHQxmtADZQnvNarc9E1HirHoUvE5suo3YYAQGjTgxKrt6ctpqaHAmqudkFLCasNFjrQfKEzDtnLe",
  "key11": "asFKEH69AHrACAHfDHY7RDW2QP3TAFVtPYhTUQ2zjWEP2GEzwQATLyrwWLgnWP1F3M2UmfhUFdwyKbYgR46yxe3",
  "key12": "BUTdqzUwfkuSmhiuUzEuGFMBqj6or8jcrbN8bCbjjNa1ZW3KqzbWVPUp38WpU1ZjmcqNBr4ZgRYAWbxNVasWFXN",
  "key13": "3EYgHAQfx6GK55jWCKfXtfatbbW6SBmbNaDiSmv3MwhKg2MuxB1K1hC1YkDXWqGyzoDm1FAZaN8FZwEdGigaghpn",
  "key14": "3qyzjzFAXzAWd15BdjKyeTpfWsMJEEbWNsLvJfnVJ5kWmYZyd6eoVBKJtkdJ164QPCWH4F7FshELsLbXEpBUpAxs",
  "key15": "4rG48E3LaPL6CLT9NX5XRuuKVmhNXFmNcVLVsHhmPdnYpvGaMngT6yzNXb4He6cB1NYF9EwMga35sgh35DiBoBx8",
  "key16": "4qtn9EJK3gMtsaUKgKEw8oArZjyTSuqdZT77zKe5ansqNhifC6jjHUo8HRRyFnNbPzDEriJ6UFueTnRcpQc7zMV9",
  "key17": "4N26ZSzrBpbdV1WAHNSihd5UBQZePvLgGM9sLEAJKHAU4Yc9y6Yej4GwLFVxD4AFq1GNrYYUjGULsMMmYupLW8Lw",
  "key18": "yBerDHgZW9mKjFXvtjfmeBd2pUVSJkjdMgQEtnTXU5AsqT8MFvdpgbE7WEE1itxXVaFbSLqz8aZs5wYAmJhwz1X",
  "key19": "3ViUoDarq2FdBZJKQM2f1wCeG2S8NEQYSCo5nuEKqvi7An4tVrGJgzVirv4NDmKnQa3Z9E2CoReKks4PWUzG6Wt9",
  "key20": "4MZjonuwR8miEsEGepXYtKd5uE2bgHmF3ATfD7fd1ytsAvvc3QnLCfsi1F6xqArNQH7jm3MeynZSU8Jaq6d79BFV",
  "key21": "5tFMLyKoUpUZ87CpHbtWc2Bv7AZu4CsuBooJdhhNagRK1ZC9dVuDbbrmXz68MLLUKfUHQZ4kd7eRVSyTNcD8uFMj",
  "key22": "28zsaWe2sS5eaaiFzarjPCpvgVjGS2Qs5nTx16gDeZfED4H9gbqcrg6b4SMEui2Nssbs3THNAftptBEgZBEVLwGZ",
  "key23": "2nDwWzVAQfueLjuagcd1mt8Cy3FL9CjtShuw7SCxTU4Cds9keMWsfuhx6GsVYaTyBNrTAcaV5AGoVbJFYsvBT4kR",
  "key24": "59R8NJhxhusysrQbztufhyUPTyFAmPkwQsspz1gErrwwmF38EKXzHh75qRH7ziHMFXJvf6Ki4JisJs4pt9tBKviu",
  "key25": "66K3HergVp43uovHpAVHZx3YLUM558uvtDCLrjQnw7wREGXmpNbCuc8evRxvFnG3CNM2TZVQYZyzasr8HmBLQ8hg",
  "key26": "3yHTYu5LBhNtm6QiLcu48MPKy8zyj3mMaQzbYFF7b2iqaGWt1vtHiMhTnPycjBRwNhUcZS2Zak2vSPZQMMNzpznB",
  "key27": "gr4882vwmuE89oLy774Kg99y28uGjWXPjkZMJvMYMX9nVEgyuu1d5nCuwUejVXn7667kkSMKRUUhfWrb5YgJmWe",
  "key28": "32796kdJhcfw3VucJaQLYWbhHa7JWfB3HDqD3Jyp8SgAFDHNypTZmZf1b9hxKsirgjR8n1QBSMdZrLxddXgqSzJ4",
  "key29": "4vn3Pn2btWJ1eKYiDTmTjTtA985WASxcYX7jyYcJMREe3gHAeuridxLwAwJYPoFyo3yFpqDfLeKaCpB8cTEdp8aw"
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
