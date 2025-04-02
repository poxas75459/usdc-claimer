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
    "4mHUnNcWYRD6zsrpupX47JnqiTtoDtC27GxtBvZiR1fRBCrpBG6b929WmqfhmxDBW3oABTJmptcqTvgCrYaosqGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBB1ox17gUoHrWdhFmXS5EQRa2myU8VhY6ZM6utDjcmKjFYV1YxfKCg3Gemmgs9wCQV5SDcrYfp69atg65fzKxu",
  "key1": "4Hi8Ai5XTS6YuyEZZUgz2DAqwV6K1euv3TjrGCdmAcYhwLdyUhkushXzmQfJ4ehcwBoVoFgnMXbAdM9GGFmzADTQ",
  "key2": "4U9WfwxJdLryXdiB69gXs9UZuup6Xwgxo97w2zuZpP8AcGXwpPtkhuYEHgWyBv56tb5b56ENmHRLoEojJL2Z8kpU",
  "key3": "4QBE8PmfNFdKkM4o1AcFpCJJT8nxKtJQ5U8cw7S5fkuugY9pwQ9f5EP9yTbmiT3Kzmh6TUd6Anb555envnTkyTq8",
  "key4": "2fdK4F1Rk8ZJDdXAhxfsuVBJSd5MMAeJ22mF3cEzNrfASpAyN9bj34MwEA5qNLtKuWrChmDGTsCUDHa8brYT3YS2",
  "key5": "5nye7oGMrTuVRbMnGFNXSC2whDVZ4au1kuC9a4prJrh2kaJKB9ELzxD2ZoMKMwpdBVodTn8zQoy3rfv19uE8Etpy",
  "key6": "2h1v2NMXCUGins3r9eyz7LUF5ggk5sKHm5R6cnWbuLq9V3fDnD53obEA691bn7cfXTpRvHmvoDz2vFaEBQSeu9Ng",
  "key7": "5iuRMN4DR5PYdCLcb54VibupQMs82EQ48ephf1qYzX7Ns1eE2sc6bSZEPkJN9GKA8snEvGkYdE53NfcEbL3g8XsY",
  "key8": "38g7AvM2uAs2v5HnDwcx4y2wv2DyfBvCukcfLnogbZeuQYSkfYf5MSjnvxKnxUmC2penew7eeL3q2XKQcdsztkvD",
  "key9": "4Zw8PMcfByxVKvjtNfVXwqnJLpGYgGWo4MwmD7UUWN6m8KLcosqauJd7cd7dnm1yJKqMfoK7P32AHbrde9Pk818q",
  "key10": "2UTXGHYHmwka56HrTHyJJfN1ubuy89yLQQcrVFvhM3jMgum6Pdu4LeQo9tPimeZVnF7fHfjMrYKaP3kd6ud5X3K3",
  "key11": "5aU53LVKTMxH134kBGhUepF6mDoENzdtw5nDAQxtGebtH6jbZ2YgmBetGNGu3h4JBeTTLp9go3HDEAm2y15LutsJ",
  "key12": "4Sp9GLYPQgYJ2VYgavrxT4Y6bXEU6U15cXWGux9629TpdWQvq6rgKUzE3LT4e8jXkZZ5HmkEbanQmrnzHThc8E1M",
  "key13": "66d1FR4qCVszENoBMjRWymMy3W464RYxqNAowrWSCpXVWGAGDqgHVuZrcodEng6x1ohktvBSryXhfGMVdY7Yensk",
  "key14": "64c7LPFNyjyVit2gL1LcRZhdpU5BTFLztMEbYbDjgcoR1keUoCsimi6JC53KSMXvofh8xFREo1Sp9rSYp9N1jxz3",
  "key15": "pNoG81w3mmhH7Nf2zwVr4c3ch1jvQjnyoQCigaUG9LCQDhn6np5jhCa6peK7LmsvTiXWwyy83VSmnLwa3Kd5kWA",
  "key16": "3t3yysJANgpBYhXc2opVT59gbjh1YBekMyhjxAzo3U86F3oTqKgqUEZNs63zXwqqHaA6M18a6eMAMc6LEChj44Dq",
  "key17": "49PemSduZAhQ4N9G33sBbWUsEPWRL5kM39LU4YYgfzoJDWb7u16weSgjP4Ha987FvbeokTERsuJ5Kf3FnjMig3Hw",
  "key18": "65zvVVnorWWc6vUf1qpY6FibCFSxLBYCQbsK732uYQt5G3BsdmWa7ahqz8kta65hmzkKfwWtJ5G8iuitGFxDPzG1",
  "key19": "3WdhE6N8jGssc4vdNNubZz9GKCNDi9FbtkkiVBeCC2i1UUShXMP39G4fkzZ1yRxdskiAg2A1T697rBZGVXdC227n",
  "key20": "5vcZCCLvnczXDv6eakpP6g2ZixkXHw5GUGuERokGN9ikyApmQdi1jghsuVAD5gC9ym7H4UyEvHVEwwUy7A4ngxMa",
  "key21": "5q3PuVwRmemGM4u2cCuH5fvmRwMydj5HyMdCWfAE8QBJtAt7zw1kNcfC2qVg1gbquPPUQUKergRpNhX6YVkGNdnD",
  "key22": "L1eJbanXdmQX3PgFHeYg3bTCDUYA2DgAAwy9noVeGGpkZ66wE7z9ce51GVM7xTmFzqP1dqovtDxE7h6PQX6ccY3",
  "key23": "5Y94P6XeSb3HQUvBGrbHMh8nJ42yHUsFtjL8ebZ63gNWJ1L84MYF2couc3QmBjnMcrNHfJNNxeCQqD1Ab9kAjXXm",
  "key24": "h9xuf2hx253557QqgAWeuqa9XsLMGa5mYcaN6RDngxz8YWZMqKPHzE9YGEUPyLLh8LWJG1ZdzDhKk1R5UBuRvKw",
  "key25": "3f7Tbo4PDpJneQL8YvAjTx2scywJvJZkHHsa5AuCB7Ezszt7ad1oczsf3S9gCrFruygFaVpwzXPqMiqscrbKV52F",
  "key26": "3Jx6dpE8p2vMY2THK9qmaeCGPWXfNt26nvpoLGmcawcqQoVWysfBP5v5ku1XUr69TcqUegZN9eKQaoyg3NepgYA5",
  "key27": "4Tvye2FUashZ9kxexfw4J42JXi4Z8U7uCTiWixMc8GS1eJ8m4zEep7wYi8XFFLLFPg41JbpeHnCagFNfpNiGz6oA",
  "key28": "4Dn1qK19FS9uTXKQ7MWMuC3KvJYooH6sXgZbhxPgTTvrGU85H2S3KXpk7L1nCmPtFjb1ofGaZWcVPgyXD3A4bC6A",
  "key29": "5R7uNTXuRv39MrLk52xZ4tyM4rLGETRxaGJorgCt61h4sdBxbpDX3ai6JPjq2hC6VTqfiMdMWxJYt3gkhRgUBtn2",
  "key30": "5dRPZv4tMW8pkH8TNeT9KFt2mMqL9e6KxhGxpkMSJFBhnVpNqMPpP1zdr1bwPDgYS3txL37jbzB9WY4ytG5XyvWx",
  "key31": "2zbAJdqpS6TjGV6D3GGVtEjduYNmsRPwUCzw7fHcVHYydzUQ3mSLP1xfCRicXRX3incqGe6QuhGRAvZotL6KQB7u",
  "key32": "5qw9qe27HBde2eTBv3bXf48dZzhA3mduPzeXLUtNf243TFAZ4zJPir6JtDLYcBEcg7tH2GiLqDRdE1M58VedfmSo",
  "key33": "tkoteo2xwxUyeXwUp6SiGWwJ6dphJ99iFd7XdLxmcKESbdQ7Un2diJ1ELCCfG8aZSuqwATwooVYzcvwAtJdY6ns",
  "key34": "5nNwREHiNBrMwjHDWRXG3ap2qqhUyLTAhrqZKzDgWq1n5cVQriGz63XrLQrVzbqWAauGQpvDsPxooNg9HMNPqk77",
  "key35": "3RnBh9YyapjD71uMoNddWrtzv78Ns9TGMRNGxvSzMKHNrpd2pHC3JKWdazz56YQjK5b9jQJB2fRS24MrWSDT3u6R",
  "key36": "4gFdSZaYJrAfjKHCtyk7brkxgEb34WzGmDMsdK1JHJyhouWKfzAy9VX1aSeCoibraPXawri6JHwkjNzont652v94",
  "key37": "5afSLFwjkk4znjJAjoj2epv5zRSNZUFsSknHjduWjbb7ojvRUbErvWhvMB3pB6DvQjkgRr2AeSx1f8rNugGwznij",
  "key38": "5ac5tAmoHwnnmuiHwUnGurawrSQXDjg5xTHZRnf5AhyEEbWdmiyJimVK6h2RmTbY96rUeY84MKuz61PmAdSCe6w5",
  "key39": "3bxDdnqYzQXraF6KySCUSYG9HjdNacrMHdiEheww381WxHqctrUc95YppaVsH8UuP3Zf3CfSkqfvHXt2H3XQja3w",
  "key40": "YrXM2zXTUpTjR84Gko5y1hpQakk1eymDX7WiJ6GgLXm2fE13N8D4hbFxjur2XLR8zhu74ixBFKPHRLQcw973GjK",
  "key41": "47epQBnTNR8jLsh2igS8prbo4wLoevQfACmRc193FFbmYfcCSXuuJgwnU85mVkhC7jGM1Ykute2rqZQKLgxMHwJM",
  "key42": "5LsJVmuqnQh9WpRjwz28L3J5YWCaRgaY1YEWqhv8rDnsovu6ZwK6nvJU4FrCqRDYCxYf9gYBAiiZz53vrbSw7sBr",
  "key43": "38orDx1HKtEAPRBAvK2EKvxzX2DqpJBGUL1L8La9Cq3EDMwLWW5krYtiBAkG6Uxxoio3LJNy8pmG8ih3PNNnXMQx",
  "key44": "LuvB9yA1gUBCridzA654JwcqrotjW3bJNkePcx2WudHCFSL5VV7Z2c1oLzTjcmiTPPR9rBLYPHnjwNSogFUaG89",
  "key45": "5fcQLv1qzHqEu9vyQjCBGoApxy7CPB26q32qJXAgaZ7W9gmgHW839ABtAuLvtbW1V56deTjw6ZdvaHzxKWgMqn7s",
  "key46": "4FxJWtVYxr3cPFqUo4Yp4UAKRBETkf2VNGVV331TeR1yqm8YrDPJiVKd3v931Qw5mKVAhoFWVp29U6S12qhFLKEe",
  "key47": "GZ6up24QMkBnikAjg1WfwgCQjbf58PnPhUTgcBW67kWoP4j9U77j27Ahi4yoX6rf6EruWEQhwRRjDjkUKbdjnFa",
  "key48": "6YQRkSe84YixCfpvu6ZW6ds8wF6irTv2RWJ8TiFftJkYJouk49pR4pUdepqmqyu1WNCKEVa7eAhn7MQqMaaoq17"
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
