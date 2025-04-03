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
    "3L3NqXsyLFu5q3LHWhRCbhgobDzunygRvGeGQAybi1z3PRSCVmSVMFxPURhFDuzWuRt93UKEBDdZC1PmZ4jGJMd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zE2Hf9aU5veAifzECE8DVr8ohsEHT3qzG8MJd44dHkhmH7yxyBZWLTjv87e5iqAbDgLTKp7E2kzKoY8AZHWku2G",
  "key1": "4Mu5eoLML11GJxA2rPzB8nHr4bbdfjd7WGmGMP8uSzKwzfKdcB5TnE7fdDsAUMbftbReu4S5gG9NHne6wjVfFCMp",
  "key2": "2gCVeRbbkkzUv4YtA3AX87PWJ9FykkMCXMz1woTwVX6HEcWBREs3rBvyHAsHNWvUgJBZPPU7f8pmvBHoJ3tynGcC",
  "key3": "4Srp5ek2h9AVFUkn8wfwu7YXEzo3jTwAa8EBe5LhfZkkjsi5UWuQ8Debu4hvYc1oPskkh6seLwxkLe4ndmsFcfsv",
  "key4": "2h4z94kM1KrSW4Syf1ybsSAiyMuKrWEz1nTvbTBs6TmxW2powW5oscoQ2uD17oVKA7S1z5nLoh8P7yu97qzFWeFi",
  "key5": "4qxNGzPaLwfs59ebqsfVDBVvKqoZn8VEpf92nCr7n6pdkrfYDvKaEGihegqiqGCbQjFiDhrYTRkc8q1g7BKAQsDe",
  "key6": "5GX7aZMoXEoSGw6WX5Gitbtnzwa18xsqAscXubM4P1BbBFqNuWRiBFN3UbdhnA71Lz3ph3NieUv3BhaCnEZQf6Rj",
  "key7": "4jHYE56Ep41pfU6ZKH3TJ9gbmxZbDEbPCqYhwnpqKkfi76uwwC4HavjjfSBSjS97shXSJaEo98MrxJWKAWsKb4Vx",
  "key8": "3nmNFMMzNqPrHBDej3Vv5wL9gNvzEX3DmdYxw3ovgFpvwiUi9Vt6FtTp3z5uou13voxeNsVnW8gfH2hsfZFhuWck",
  "key9": "2irWxwNwaP1M4R2ypbG1ZFTSbuMJAGYnHK9wDRcMnZXYn9GdNYRH61JnkT3imZXf5z8XtecGVQiZ9MULjtmg74wb",
  "key10": "2HaqpS6rf8csGLm6VUEEb6HuhkpYWjNWWJK4J8G2TGrJBe1wp9JBVRumEeVpd9PCYDYi5hsFTf48KMRq6BZ4XQBG",
  "key11": "2ExyYWMmppPdSSRQSPwzzJdthQkYYkKbBUxMjK1zARrD8u4cwzAkKiNncLGcijdvec9EGVbBneqQwbuBVovu4MJJ",
  "key12": "2JT4xC3YFwWMt1wTt3hQejVjpkuiCsD59ZebPeXT8RsLUePuyhRuHcttYXBsBpBxaaH1bFFJZZa7mnY1ANEKXVgU",
  "key13": "4HwCxiiS3ko66R5hG5rxZCB9WFcfyiLSdjGrxFASWbWJRGMazh6iZxQNLbEUFsK2LRgeLyaHVvS2uQrVxYhsTbaG",
  "key14": "624Lxbadfc7wwkmm126KwFJpkmYPHjS6QTkvcPe6qjGffVuVUP86W8MXi1cUrfn8oNTDFUWFW1ht7f3krywwR1rm",
  "key15": "127DNoi8m5nE3xHRoxHkpnN1AzfivgnyUn9bwpbESYaTN7WTYon4wcbZ3JsjRHiJRYwEb598DMihjNq9FKnxGUxM",
  "key16": "4nLJbjZ2tvGpzjUMVqvNTEaFWnmAeh1DcA6QZsF69yXPCr6fb4RUbmfs6xybb9KUwtX2NbSDgWvXEqPUf4KA9TPQ",
  "key17": "3kSBB9sux463Ax9ERXkKVnZHy1u5b9z7NZxPPqeKieLapZPX8DNgbn5yHFfrw7ckugChAt4yCjcK6C2nWePwHiv6",
  "key18": "4gETZx8KKtxxH4Crp6S6wcgoAAQMtEWm3kpTtABre8ZUJMJW3Lr3mSA18EeQ3HfiEuVWuEczWJMNsKk26DqsoFkc",
  "key19": "4qZbkr7xJY8AVdwUxnDfRaijuSTFtBJY2KPjToWWt6Dtvxzxrvo1bci9uV46ZRiQGkTduMw76S8uKjUNVPaoHqSq",
  "key20": "nnZqN13hMiQuKRiSdA1koSZx9ah77N5xQVyuS1iJkKajAjLkW2XBz3PT8CcDAggYDtJmdUBtKxzhuXhq8d9NN9i",
  "key21": "4p3MUjbTBpofff1zbmiGaKavwabVyxmeGZYj6yMSeKYnNX1jaGfZqknPh3SYNayN6nE9uuFjr1i8k2ZyrFnMrZSe",
  "key22": "5LjyZ1bXHjxExq1pqS82kUwa2ixvWqvKoxw5fCPetG9dAsziWUgYR4ShTAC8ZU4jDQkFpTrkqxhro2HAyg5xsNVu",
  "key23": "bNHv1CPJrkCVH9jU6dGsyWCn1czhZu557A62QzpEaPTHm9kca3LacVebiGJTJ3RfNHc9Nh5ZCQnED9fBQgsRkiL",
  "key24": "3cTRorS4APfSUXupsbbpGFYwa38VejVR4PLC24faPTRBrwzYtih32K1BtmNX8cNz3AjFuj2xRpzLpkCnGenMnDtp",
  "key25": "3PiZCPHk3ozNWm1H5sEn1Zs98qvJioNdH5CSqDr8dThsgzPfeFF7vMkx6oQKrooDKE9a8KiNmfPSMzPPy18kjfnv",
  "key26": "YKgZ1k2HmHwH74r3BDBAVtEz7zow69NkFdMXg6ddF4MDnYbeoZWcs4kjBw3RwvyJ4CkQ1sVWAvHGHG37We5cLKg",
  "key27": "5PKjMv6nHwhECfJ4yJR98xfaQJMkKeNSe1YU1kJjH4vKioPShkTBw3shrECNPNpb5WcnWAuXptLDWvteCczVmsTg",
  "key28": "evAdBPJUHaLqAmZSASf6Ao5zGcTLYhXwjc3uYxvHjzYDxxktJyhV1dTZyaJWw7zXxjnE2t3qNxEiWcHk3TLJya3",
  "key29": "aJz9Bjgk6GEHMaRBv1PFRk4uMQzYesykhagPsCAYwSvgT51bmwthqFskwfHCKrRi3iH18Cr1nbcGz4Jdsv5TfWc",
  "key30": "2DHDSVgiXXZ9bxnMMmWU2emfbufaGxzcEsFY76FT9xb9pW43NiPcLv6PnRA5JoEJbkJ5phcfUZsWs5HApD5gDjuc",
  "key31": "2mbt3wA4eeEWrnMgg2qE3nH4Nuuwfn6fNawa6XLhx75azD7mGYVo6nGbNtvyhz75aJB92RMMhCB98JVrugyiaySQ",
  "key32": "39QALbxiRCzB8VsknkFBnPk7e8ZFP1MvBiuf2A4tXUzTqKoXWky5xQoMBWNZZ1Q8GnpRmPwbkGmG7CvSHVEqfB91",
  "key33": "2QVQzr2S64XZ8RLLdJjyBUZcEvkHKTsDvW9JDeoZQpBL9cceo7wWWbneX3qjHjRfYrjVNhFfm5dRE7uGsB6EGCtV",
  "key34": "65nkQhDLvhRgSYxFNvuvAwU9HwK3kQF7cguUQR15upUBbi1MuGUh1QdQuvcYPyiMPZY8RMEK4nN6ZPgNgFyvW15y",
  "key35": "FjEA15PBVdWoFLkGkhh2AggVT6EJqgx6L1B9pLUcg6nQMXAn9itZjeb8qLZyRMsPupCknVnrFP93WGPamqXNjBV",
  "key36": "4knMoT3soo9hgWhJTp81eufxizDJmhQkkaPn9DqCsQRxqzAW64w5Un7gGmbn9RLedth4ffvfesA6iYAGAXFEihTJ"
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
