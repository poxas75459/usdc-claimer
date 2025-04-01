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
    "4yW4NTgZA3e4pMvkG3xd3tMsWy5fMMGFTwCExLb7AtgyWwdAjYgcPggSHojwnqduzJNpfb5qynNyxUnbbipJi3KN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NkXnvkxLpkpy1XRYXGmUjuxJt7uBTSkPtEaMFTfVeE5T5ehm1Z1gKZFGSx1qVjNS3cRQxiRAwPvTX2JJh1dHwY3",
  "key1": "EVmLnqRAg4S2fG9nDhEY48H6RiVSRkfw5tXXiJvzrLxzP8rFxhecVjxEEXXRbRZ9iZ7QiNboF2d5E4zhkWHKand",
  "key2": "3JUCH8g5ZpoXpW9FohrN9c6Rz314fH3MqA6iqqxwLwArJnDp6kz9uvZBAXGynuNAg5FCsAWwN519HzBU3FMiRAKG",
  "key3": "5R6T916QvyEdXUjQXUsvHyvbbRW3zFy2yznikKoesDXvrRgiVxeBeiQdHFpZq83xghTTtWD8YFeL7kLGsRXdH1sW",
  "key4": "3g5UMBMoQHCLXguse8iP6rssct2NrpDSY6gXjhPpshmqrez3iCBAMEiNvuNh77nLT3rXghmQMxADqDr3xPcUTmFT",
  "key5": "3djVsp9ZroHuq1M1mmPFdFfDKqWjZzneqrWWwDSoMuY6PcnqVAxroR55qzgoobqM73cvv7DKUqg5fY4WJ9rAt6sW",
  "key6": "3U4iWXbvwwQoHNBymNDZX4j8BUA3AvrY15yjEHes9HRpbUSzFGAyjnoALY4ZCPpsrRJHv6kt1cYA4DvcGAATk2hV",
  "key7": "2BYKqfoGdufmEzdztfvVcVYN5EBLc6W3k5powpzXgMG5n2uuaRxQ78uf15GR9enqMXZuxNdpTLmBesABZctdgLe2",
  "key8": "FLybVowfggqteqzuaRuBqfBzG3NbhxNPxhgVQtjMqKjNuPVnj9khWRnWcE9JDFdh8bgtYoNUUn88p5EbXm3b1vz",
  "key9": "5ovBQwm1drKJgwFTXp3fbcp6eqpo5J3GoEydFHNvRUZPNe6NffjLRTcRbajB9z2QwJpSCqt31Y9a8fP2o1xqgkjL",
  "key10": "3oJSBhBvB9fVgFNrZtMkw7SFaiwnwAvESrWAsq6yAjUaHvNf8PzgtH4VUwXXeeLRbn3oc8b38ZDknYSGkB36usQ2",
  "key11": "4kWbKFRDQxndBQaBhQj4dVVgrgvjQn2ixfhKk9RD6CJwZDB7o5TMogTNbAkHspaULQbLRa6DDvx9zaFjZn5Zg5Nu",
  "key12": "4g1EN92uygeJx67KdKLJ4QKfcP4bQpWGjr9evEmQbHABhpJy71ERT4XpoAAkcy11sz28rWQxJZjGqwjFAnLx3WuB",
  "key13": "3G2cSgKhEkgDEDKLTxm34WPsPYVx8AJ9VNmP743f7uxrSRYuovAED7YSEE2qpEWvjYynmumkgraMF7GLv3d5sdaH",
  "key14": "pUKk78MWDMxTi6DJoEVTygwy7fKtH7MNZAXQ2n4gKvJfnHhAxVQ86NS3VnXq2js3Kcs4ay5hX1rLtQLi3Tr7dcU",
  "key15": "5qBEjFMewgs5kP1i5Wmu9AnBPwhY1nW78KheWhBZZK7SCZ8PVZ5nkKsKLhD9cvQ5HhigGmwku3s9a9g5Sy5QVvDM",
  "key16": "5KvuS1HLuG9HhDkzXU24MjreYMUgNcBrZ3ekrNiRZ7samRAAECopFKNgSNLCdcMGh8q6xnuTNvjcm37HRtDJ8nao",
  "key17": "5Pcu7e2WBySuuATYGzc7NtV4NDeWVQEpzeCsxWW8c7eE8WdqYYYKiD5cnf63LUtDePDidjf1GRiAfGyQd2JjVcZv",
  "key18": "2tY8Lj2hxhpD52xTu3UnwwBZKy57Gz498yCFnq1W5Y1DkJFww1aQnuFpuCzq9Fns6gocebizoC3YXfeSxdLDiWd7",
  "key19": "3u1gdBPN9RmqdJKdv5JuvMxXBDsqbFHDyiSAkHueiENfdg8L8ZXGoz58VTdMu6RfqtpErRjH27FY6E6DSRH8s8Th",
  "key20": "36TB55pUZtsHxEqSjaGki9ehvHn59vmkBHZw4puweEXcibymEzS5WJk4LDt2QJirFoKzvg3e1Dafxcw9LWUv9g33",
  "key21": "4yjtTWNQbtD4XiGwFkSxKM7zDaPBiv252fuA11mrLQtJ8Rv7n9zQSMuv2dFSSEGsYzH3oarjWKtSa12wZHNgksUM",
  "key22": "2hSkyfugi6uQKJejvoJYBVj77yYvJuYq4x6BUMJmTRkafdcNTTptXpsaq6qf8ggsprHbSnH89ZNA8KJT18h2Kr2c",
  "key23": "4RxXKpCEjw8pNyVfKRX8QcsVPk9NBqzFschdoxqwqiczCWPALMsTMggoxR4NWgj2ugUYSc1nxHMW3HvA8te9DBWb",
  "key24": "5NXhdTxmwkuw7HdLXaBnAGnDGrrYnfyZL7A4U6wwSJhjBFwyaDYcesVxsaxePFn9AcH3NAkW9rSfPCh3YZm96uit",
  "key25": "KzMDs4GvWSqfxVDUs9BFSEc8ViV37XnkexpDS7Uo16Tt49frZ2rZo87hqoz7SXTHPCe3vGJnH7vjR6sPRDYXbLo",
  "key26": "5hDWgPFMYr9cwpVkqytuUwPmokAAFKqnJJa34b9gavBgmB7wDgaUpbCGCCKLpN81vbBVSXtVUi6BJpH2mtkC2tLY",
  "key27": "2tx8PT8FCiXz1Fzqcng3wJUULc9CLYstuyD4CvyPBtQoAhEvda494EYGDBFc5GAhgVs4Egn39YQjoZQAnQdCXdzN"
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
