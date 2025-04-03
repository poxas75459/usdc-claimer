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
    "df21N2rYrCCu7nfkdqWRLuoyFnCGmJe9rfVqyBEq9axu9smxWjtYqAPwD8xnX9mwybQ9sfnF5iw2g5o99g6NJqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRmBG9xXV9YyXCSLpF549CoBPojes1eN5EcNd8Hjx4suPaQj1zTUdsUWszGKgPtGecGs3DQTXXWvpMTxqZP3Ee1",
  "key1": "5g3HhDtAFsd2LaceP5XP6j6TNxJ5biVLxppS4Gqtpgvur5DMcM4Vb4SvUt2zhWEMej8UFPSB4WJADfUbciiYd4B3",
  "key2": "5g2V23ntaNz1dyC9D823bLvocbuQySJ11iK6u1s4nzMSpHVobvcPVDK1bHAz44jYNxejCmQNMhiJ4PGBtWdRuJTP",
  "key3": "29sBim3JkHktkFP2e954PZbn7U62sHah142hBbngwN3N1xbhF7QTQvrQsh5eRDFv5uojb8AN4jeGRqFPHcrGRdGm",
  "key4": "244tLz1crgmASLAtQFrDh42KbYm1oWKjnZFezXUfCwAtrEr8iCe5RX4ZemYnwGRJVa7cDMvSrQdhk4HUJNYLpTrc",
  "key5": "52my8dk15TCnWTCaVqKSFMiG6uojXshsgraPNViycjtD1Y3tiFFeYPPJwdikw7134Lzi2yUoSxdYREFVTQ2sbLrk",
  "key6": "5WrLGjMMBDPyhQWR4VHUkkTMsQ9m4ZtbcMVmhVBiQXSYL3rgkpuGvva5pSFieLdbiMgFh9QuV3zbWr9mqSWQUSbq",
  "key7": "64cdpHAEnGyRBiP4JgHm922TW5EWAGhkCeWSJhAuk1vmZNKQUhHS4pEnC2xoVWYEbMTpLrn5gXCLJEC5jekAfDHE",
  "key8": "kx1Y9TtLnzC3FUAWYp4E584faU8CBG7DeWvbyB5QwmzPbjfrV3szihaxR1xmzdDMCVkpCozYxx5W7RiTvmrqEgs",
  "key9": "2tWX5Sr5KUe1jKmJ3XcrSJPZKYBzgBtpjj7oBYCDPhAjQfZgUDoFmcERCdXqr9rjPuH5TCeRhRzFsWyEnZu5o61Z",
  "key10": "5s1p4zNqAG8suziCWYXyTFcR5CuRfhyPdEwDNxPi4GRnUbVEwKpt9qvjjmY1eUMN5EQznQKVCN9BcdhyF8stpLYw",
  "key11": "31oVrT2h79LSs1VQk6TtF78t9YhegeYyrCHgqJ4Lbd3CrgTR4KacpBDo1AznShE7szu3HQfMHQws7DMvBq7e25cB",
  "key12": "4BYyGhS3ueDhNHPfCz2bLFhrPYmc5GCEijwiGHRWKVa7j76EpSEXECz8dk4fgtQmAWQgJwjtsUtuZ5jNeFUVTF2S",
  "key13": "TF6Faudo9NbkLy618Dfnna136yvRymqRKbnH1jK3PyjCzz91NKnKHLt3dmvPC6iDSn6S8WZn1iXGsK3Hkw544uY",
  "key14": "67TpuG3cmrkDTtYz1ht5zdVANpqAKbLjAzrozcXoXztHKsJ29dKKQxaybmEWnmBEEznCeAaZetFYKMMw7JAWMVxt",
  "key15": "4HbyDCkeWQ4pXvKQQfybBnLrxiMGXtitFrsWagW9aPX3ytkiPA92rNrzH5JyrffzABUuNoUqtpWPi4hgSaHvR1z5",
  "key16": "5LdpP6K6T8caf54iuAHcBRcMgnedx1NQ8Nnt4TkjHXvmHwK4VAupJVcYENbdL2QKt95Gz9rzyr6xcff7c9mBuHuj",
  "key17": "5C8AX7JY1UbBNQboamkGW3AXSaTNdXqWzVeDbK6DAwo3b1Zj3hmQnpVCtx6C9WG7euNVx5bR8HUa4BoWXAVkM4v3",
  "key18": "4hHF8aoy9f1rdyudS3aNE2aRWweJ12ir73aNxwADbpMPTJL3FY6f1EYKBTrxNW4nmdPZrymYNk4hzNrdoBXVsSvB",
  "key19": "2vkQTZE8TsFH2DTkr3VfLbtJhuJwf7dM8P8nE55DsXSoqfnYgDxXYTT7QaAPoxNrPevRuBpvat3K3SbStxJwikZU",
  "key20": "4vy7wvawdxmYWsw5runXokGSUNenYmsig8g1DvV7eP2owG9wykNWqUJaGi8kmGKPEDSrcbEThr7xCGmzoF1PokMz",
  "key21": "2ZPpAv7hBLLfqFjTQyxE3JWbAqx8FphFyu17GFXVmFTrdyUa4ZDwp753MtyDuGtVvp7c4e4qAuy8m4xghABM3rLq",
  "key22": "8vgCxdcFsQAZTBkSNpJbiUzdLTqUoK31hG1HHjw3fAD54yPXp46qCNrbgX3biZAodpMmi6MndR4o7guqMU4VE7F",
  "key23": "3GGZsvEQ64XAEsDzNoykuDm593XdzPJFWeogNHBZzrxAAxKBg9mgQhLkNe9ygtUi6bnMrobVbwq3S3VZ89SW8CwV",
  "key24": "4JwWLmJpimxVUmi1kvFkaZRetNUSbwypgtiXo1A3EaEhc3CZSPTA1jpRs53PnYQbM6bzX2jDzPF3cvkkTxyH5ZXv",
  "key25": "5SYKoLMjHMmfjcvVFyviEuDpSZYbsCdc2iq46Tww3cJnjkpEr193PsAxq9RvAWbnper9pBNhP9LASnnxgWvktJu6",
  "key26": "a4efaN7Whjm9nfVdtvcRtfEPFMhP22Eivyqf1tfqTT3H5iQvtkE3xoctcmzP7HSrUqtCHZiQPvcRkdmPQhcaTf6",
  "key27": "4KGbRXGf8tgWxHk3d2pXebAMbWHiwZYBqwnVrf49Tp2fYLAhaDjgp8EW7awM4frD1iBVbbdKXLWV3ygd5S4p8xPw",
  "key28": "3VRQsS77r6CsJxruY26k89Nc1USXkr1r7WXXcFpvUqBavi7kEToMU4Eq7FgvssrtTQTfcBrKWMjxH6Uq127ZtQEC"
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
