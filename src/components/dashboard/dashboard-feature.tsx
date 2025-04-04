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
    "24ADtGpq4gz4GMLEY2WDQGBuWZLhWTSVuZga1xmESLzwvURENPMQMKyxHKGPok7R55xxQw3GN5Gfqj5bJ6WsyCA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ebVNsUbp7Wp1AEqJpMdCV356cDHj9fTN6K4iqNFhUuHQSqYvJupAYKUFbNv6r5Bk7aX7goiDippwRKYiDL2eyP",
  "key1": "2Y5E5VmXB2bbKjsKdVbp8hoGE927GFGFRJRCKtwtJDVfJEQ7ovaeHGi91UL4QExP93EK8KffwpfaVs29XXNh4Sd1",
  "key2": "21g8XrgvasEszVkYddSXooSWTpAYgVVbsqq93xFwcvMJne6HJ621pw1abaQwXxKJ7qskErFLdr2ZyLQ68peQQJ7g",
  "key3": "5c5rTGSXGCnukgiR6s7Duic5J5jwNiQ5Vg4AcXSnhV2JHBLoMzwSKNzigGbKc8SwfabsKRdKgPPk7Ufjtzu7C7qh",
  "key4": "3cE6QV3P21PJPDTokHGbL7aS2N3NveGqaNwkrF1wo3uwJbpgY8hxt34xJASaYojfDU3jHhczkt7UKHUN6Z94mJp",
  "key5": "4ifbdVfsbNvSDiLLZNSY6L3EeUeaPBdDXo5K3HDLbzBf3coAXTeRaWB1jiighGX4Woe54TVHUdtiD2iY2RHJ9vET",
  "key6": "UJST4hkKjiSKtb3f1WfUwCx1optZitV67zmT4wFNzmSerGzbxh2GrweAf7poGjTNkJWTQjPzASBHn82DFtUMmYz",
  "key7": "BBejR61Dp8R6jQQN88pCLZbxvmVHcUfh4h6t231RVBd2DMYJbZMJxEchaeBs59d2Cw1zkdcdtUsfEgxRHJskNJF",
  "key8": "52RvqWR77dL59ARU79812XzC9yMsYfoqV9HH3JyAXgAbPR2Fi4dvRR2fskxhXKWnNAspNU5DYo4rWucXdpyrak8M",
  "key9": "2EWibHoFzRcDJd7B6rVviFEifFSLiaxGEFQjsLFvG8kAQUCGN6aovFApTusDsjz3WaMmjdj8Y1wL4tgQjnpPj3Mj",
  "key10": "2zpX3To6ny2cBr2D4HLrmG8hqojaTeVbCdzq3jYzA7yK8pjm44geUih1r3PpWhMLorxwVPkRKQAbGcbpMCzbiaVE",
  "key11": "5KcR1ZJWHnpgUr446Q9eKtMGYQpbmP41VdTnaPWECcYGDoYb5BJWDr2sBHBKr4CiUpToFsBziESbuFzLy5ngnezu",
  "key12": "74pXK7Bbcxt59ZHufRwMF2fD48neSM8XRB69vgyUdVuRFQMhTBUC2cGjSF1jdUyHqV319YTz88HAvFiEV9acqNS",
  "key13": "4XdhMH1TSB7sGRFTZXnAHpduPC77MenpKdiPcoAFF337VFt5yfRS18qhuGqyo1tE1LNFUybLGrHofZnKVMykzCsX",
  "key14": "4D9vEd3on15VKSY4mrHZtYPTCvYQM7givwXgoVWgJCHrxofhbE3mY6ZebTYM2uM6C6eXY8xnjJHN9AzvMusbEdoA",
  "key15": "58mv3AWS9xGP6PWncgTs6tMTSWWeJBuZ8RTFheeSm8w2MLTHCYPuBpGEdBYxx4MGox4dH9BbD2bpRUT4v68Mm57E",
  "key16": "3CdcSNAy42PcjWvM8ZXbP6hBHxBdPfVX8eAy437aDmDGaZQgUPjZ8FEKXDs81gWkdej62rNhNTTz4wVSx8komVsn",
  "key17": "2pFWmzv1VP8Wqf6vFiMVeAtZWQL8UqWH1NZeXkA5jNKRgbTKVqfAy6vcnChSGumGqFZzPLSPoD8Vx9SaRhPX1wnJ",
  "key18": "3V6Fqy2g7fZctwGqPeTNz24wmdqNoicgKS9v8zrN7xsTHmWW7a78okawxzuAiUqw2CuZdVxLDtA1aWXHk6cHehqS",
  "key19": "4C9y1GegyYuoZLacppa16kVMcj8vJFtkXdCJJxfavvSkY3vLLx46qKhWxwnh8eWYAN6A4y1gE2bJyU6tTe8o6M35",
  "key20": "Gh9JSQ4gjqxTewhutWjgwreVxRYn4Jqktrp5eCN8fhQWqtASkq6LNhrXSEZECxiCgjvCp2CCFE4ywSAuXQuXbjx",
  "key21": "CSdpDTqYPrLq8pZ2W5qmHVAgoLBydNTD3BG7A6AXCDg5WuynVKHf7nkTWSrSDopmxnATaztv94RujeQrgwvutYg",
  "key22": "TKsVYn9sssXGc6feMhY9tCQHXoajGf9wK9qtkrPYtXKf1Qucn2Gni6qDAobZADipTcdek7btTQvNUWAbvR9VYN9",
  "key23": "3ZhYkVXG1Mc1PH2Ab1E4ohDNgKX9rGpsoygTz4c8sCfsRcksuefkEiFm25ZZb3kKqFj7H9D5RfSqg2URckC37WCF",
  "key24": "4kisezSHuUAoNmniEKn2Yh3tgQXn2ZfZxsMw7KVZCQTxgviYP1KkGbRw532hWF9U9U8XQ6NqH9tefSez1hotjsdC"
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
