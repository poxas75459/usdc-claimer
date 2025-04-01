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
    "5pAhG6wB11sNbaUGg7AnYU8RrQwUDVn18gw2eCxADNCzJUTRK9yw19WKXviW4anLi2qh84pFXaCgKkgaNF6r3m5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bo6Da63MtVwVJgBCC8JRKBRqy2pdysGmhPwPoCDGXf9SUW9hBz8bXRosQ3Kc15XaDHgUJp9WhygyY5mAENF4Et8",
  "key1": "2MwzJdk191znfxnxeZsNhDLfo5Z4Q7HVZToPj49WAwknbVubVVTqMiPxicnTG7kVMvEa45VvJh5jNijnFxwniq33",
  "key2": "5WW8DasPH99pqVgVJzdDAnZUP5KvJEfYwFA4jeekzopGrBfg4iJBVbHiUAYckYnp5JprMHyShMgpBDBhENzTiQYC",
  "key3": "SEZQna5cqyVqDh3hA3gZ1JJh886j1ioa8tHPQFJWRz87ub8uEDcazn5ez8GwRfxMcJkdL9DcWUUpfdRGVyD8UYz",
  "key4": "2MULhTqEXeFFBTxFMQVMaPynhDN29Dxo1QSzMqTiAsWzJgNDudu7suRywYbZHpjFaGojNq2kr1ARFhsqznVb7CmF",
  "key5": "3fxS6LDfT7dMXuYrvve8eY4vjz8XZ7JoDZEGcHUQhdA1fz5jhJ4fhoznidwFVYFx4xCxsCWgfe2Yc43TRJphfsCe",
  "key6": "5JUpA9jwReSnVkxv46f7mhhFYmQtqqsVijqtafZPTQYcYdK9WtBeCNSm23EYGXtk6kJcJn67XNEKFg34MW3BnZXW",
  "key7": "2iMFNH9gfmh47dhzYTigHyxLLzTeUfXovb4XnnE9Ukz6X9JSoCoJg15UFWNtjhvZCm9STpwUNiLwerSJJtF6ciyn",
  "key8": "61QeVqrmZexkVPeHtt5SbMJFzLbNoQTHRGjPsBRKGhLCCqgwpj6CevR1kratcNgUTYwPgbdxgBoVRQVJVtYiqXWF",
  "key9": "qFCCVEoCJy6fje4A6VdZQR2x7nXDLrEZuBpyxupRJ87VW1h2JNXwr6JjaAfYVNVM2RSCwcqmtEejfmi63oqyFfG",
  "key10": "4dy4zytk5AxYGYDwNfQhX5ScYnCRc8KafjNPo3QkZyY6UNgDsmyMzSiiNmxKfcsPPnzUHHopQJuWLSTKXeQEk6Et",
  "key11": "5ARATZFEnUCpHzsZejPJebDkqxgxcwn2L1C6e9yWexZBqSPYfkLaVaEiRAUaMcWZNvx6LqGVpEfi4MvavH4nigHP",
  "key12": "3DuuCgKcPsmzzHFaGrYcyvimUpFr377EF5HfviqpAVrA3qH4LLBrgT9kTqi9jvuVRaJSpS71A1GfUERxaHKYMvSc",
  "key13": "5iaGr8gLLWdGhbZ5fUMAxyqZidtoARHg46bbjY66h7WBhBe5jDbboKDW3NZhGKs6QtQHMCJqUr4asq4P2QM4ZQU5",
  "key14": "4XKtHeLkJRBQyp3kN6PCNTWUMu4F88m4a7YJbMUVdZXHpZVPvVGE5mGcfHut9H3WZH9tjvcjEV9QKC4LiqjBGuAB",
  "key15": "2LVdGr3iaRH4oKJsuSSXJXFrKK6Xz7m3YbrXdv1HeVSyvRSWf4YK4YddbR8Leb4a7yig2UYzN6gXr614EWtBsJDS",
  "key16": "2dW3D7MZqSnkC2AJmbm4LVLKSmUNKfYJ9s7yKKN93iCRGfXu3kwsGYUEzRS481EWV3vkAyL6Bf2zo8YYJD76XJpz",
  "key17": "3kSUeuwfiuBb5J9CewanG6ZB4aG4c7BFcsBjNge3V2PEfCgwh6MvPttwsBfrwtdVhZFJsJhuKnDGMJap2t4U567q",
  "key18": "eiampYdiy5ceUwJKmt4QvXshmxyb4kop3jM7j4cYrSo5QBxJ4NaQGYFdzbcHdMwL8NmSAYMZcNkohvFwJhJGs5b",
  "key19": "4yvGqs2agDTazXL7TuJ15G7SBUEjF7XRfgBWqzaug5eSXyLfMKyAyV2GpZfrNTpjMfuKX1wxPcZnk6nwSUxv3wFM",
  "key20": "1aUT2CLyCPKB2x95J16wSkVD3zYsprwFfBVKVax1oPr9zzFZhKv8M2VtTPCDBDzXsGL9sknLmFRRSUH3aPBHHKv",
  "key21": "3imyZRSj4FqKknQTUM7cAriAAngC2P2dFP4KkGezfkSX2zHqZ3J1pbFCuCnUs8DFymiK8FWUXvghPUSSTSnPMuhc",
  "key22": "51Qng4DseFXWbdFYBaf5JSznfkF4eTrWYyRVDcydC8AS1Jk3hPUdssysPTYnJy4L4k4CD5GZFwcfVoKvuEx3P873",
  "key23": "5pX2cxgZXzuwbbnHKUW1SFBKy1ndy8dxLgJpNXst2JJrBbhjB4zNwKGbdRgD6JauDeAFWPvchbVodJzjUcMw7vp7",
  "key24": "qFw1UfijLMbKr9No6KzxTNWKtrXXwpKLLM44TmmyP28ijexf8hSybqd3ME1XnuSkWEzauvrtWpB8W4NvL4gZCsW",
  "key25": "2wazcjpGP44EY2GPFS2aGPjPM9D8XSjTPc9JsmVxy146o3XR7gW53q5vENNea2Jc8oSWBcjCteRrQ9X8wcRtZw4U",
  "key26": "42izse2HS2wSusAsWL43cMx9HYGUUwXNAakAfWyLC4kBzWnRYNFrrvFoYYdKdCQpQNLaNpL1QSoE1TUTmBDq8jpV",
  "key27": "379DfNFAhphcBpTYv7YbBWsdowaPN7ZNKnQ6ArCxgU6u65j6Q1ofWDDdyr2SP5VYF2ik511qi99txrQ3t6bcCm22",
  "key28": "rDsFrPAiL7xhAT5hoZzHH3yWYWNWKtnVearzzJK9UUQsettC653n8ksytAizk5QCpnkiazFQoed5Cx3C7avHEk3",
  "key29": "62PhHKuNtQty32FwFhycx2HhPfnwnGq63GThe6bnVwkFiyiEPXF8GM3yo72f7jhNfCRKNxGoxe99YVQeTkmBYVFC"
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
