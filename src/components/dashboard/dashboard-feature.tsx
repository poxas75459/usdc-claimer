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
    "2HH6z7svfjgzZ3SiLuL6uymc1kezdADpdBpQnxKjd9YpDQDPQdN5J4uhRgBgpCGuPQhDvZz7HAVy2EYD9cHksdqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7aAKg3FjhiZn9ozyM84CLzP1X71ooTgy8eGwUD9X1EwCzz2rqdtGDzLtwEEMLwuEnXgDgqLUxcmdbVi8LXt47H",
  "key1": "3H332yaTyXTgffmfaKjiYqfjM4SLsX9D8rYPekzm9gHAdZ8uBPTYcXw6rC7AykT96657kcoKATrNRPA9T5KY9vym",
  "key2": "3ozYogpA7Bahgnv9LDJtbkGaEXTjSiPxKJtDHd2WCNEkgHdeBj52SiYhEeVtdLUAVYiSWAaJTk1ox6ARGT7uLk8k",
  "key3": "QrqNFFf2uitrsfRNU2MXhWfG8veue2SgsocGji5t1qqcwN8sEMaCYo19GeuQv4SZtPoPTCPfVxx5SSDLPRipdfJ",
  "key4": "2KfmkFzksLLqPXo75HuBZkVRTw3Aoy5UpjJpyCkNR87qdJEgf7CeztABHxHjHYizEtv8GcF6p2nPkfKvxDLLHXy9",
  "key5": "5qWKubrmjviU7dr9MTQfFi99aLQa6AsCXCgniBz9MrY1gVqLXpPW1FGZVxvaCQZ2xEEqWmjThVnq5CjWZxJxZPgR",
  "key6": "28dXKHKmb49Ki5As7LJe7qLHmQ4W61uGdTrJDEr8WqXuotRgYwHVaFzSvQH1qyz2QqHYejJ45T3kGLA4iWdZf26T",
  "key7": "53ka5Yj4AURqgBoNaokGfmBeTC2KrFFQVMdKSUvuhjThcgsgdwwrx7tUZX8Yu4SeSa5onMEaxVfpdgBRgSQYKPRS",
  "key8": "48kLypVSAnmEr5kpZV7HJUcVGHEfta6AuHEsh7E2yzxcC45N8fwkwyjTA7HBpKXFBqCcHsVvavWnrVJ4cmWwk7EJ",
  "key9": "5rNc1xCZ3Cyuo8wDDFCzaRjgwoUuVSRqUzP9ocP2Qn17NWXKmtnH7xkXzvNTRRH19kR6pEmpcFiLdJ1j9Z9imhJs",
  "key10": "3Yy2AjKG2nrd4DS4PDpQd4UZfq7hoK1WiJPegqwW62FN3dWf92CYNCeqry8cXAVhqCxYbaiBWa8dvXJEJ2wrZGQq",
  "key11": "353wzF25opyJ9Gtns5kFPPvpZSY7ZkChqXBH4q6oK1P1uFHLP4j7p6ipKXen7CaGhMH9kvd1DnKA63x9F4arNT3R",
  "key12": "2QYCcGjAVZXdqkYxZXRAf379xhvCZHJjGb3b3aK9DzSk1heqYrvp8ZnMdVRjiuRik1sicnKSKRQwucM7bDP7mvv2",
  "key13": "39wDCnaDVUkroSeHSNGPNak6sPYDUJtNfazNtejKmjmrpHQhQqzpNTwBZaRuEyK8EUBhx98Ybhpckd4cTfFunGeT",
  "key14": "XUvAc3Qeg1e2in3WDaPbHBQwkdYoeVUBi1TDYbbwzJ7WXxNwcKDkqXyumHFNuvNG26v9FoW7HdgYt4ZaPdKs4tn",
  "key15": "491rSynHBSP6mxuqn75tjTxSWmejoUDDuWTsipb7QY4NcApYi4f12FkWyJ6hNZV8csX3AEkqRpLG1WRyznLwYcE6",
  "key16": "2Vbe1uY2EGPKErfXfs1PsEF9YUqpk2pvMRQhkxwPkug9qQXo3SxmEJB5Lza2ACibmTcxkTt6PhqEaVyD118hgjck",
  "key17": "D5kqAquiTWrckmfho9Mo2WqR6QW19m4QxdyEDhSd8CteCwTXH4TDsgHqxv6bxbxHwFvNBWfbgCvL1j1wwDf7Cyw",
  "key18": "21rqWHWJW9T5MQAFaDeFw4MSaK3Jhg4prcZACPfrQTSkxQYE96ZsXC3ZQo9419zQUxWFtkvHrbhyZNVQFoYE3BAR",
  "key19": "2cbAcJBm7i7zexMX6hQxVTV7KakyTBqNYKZ6CDUQQScJFqVWpQred1vEduPtBtaKTTvTPhu5JaHSckH4cTYqzLCr",
  "key20": "VxCvanz2B1rEPEtWUYkr8WhY7giFBNNCkjVyN4gMX92vKYFrEo28CEvh7MQQQdWDvp9Dp3Jk7WSt91nEqMhYRHV",
  "key21": "636LTYuAG2SfoZvo9zdcnF4BSMjsoD6dQ3Pku7dvHc7NMV87pBYn1ES9j2zAit4LuwQQ1g7HZqfw8tAwgqU89ggL",
  "key22": "5QRpCbo7sVQs73qSzKGHCo13KXTb4QD5vFv1W6DSirDTxbk3fE99owGyugCCdAZBek8LstCMcHpggy47UDfz1kx7",
  "key23": "9Bg1pi1yRDuSi9i5KEyUA5QdBqGyjcFSgiaAggeuTxPA15W99GU27Adq8finEqFh9fKY6aJutwpshYcxtrEpaz7",
  "key24": "42RbpkCDfX5df1N9brVWZ2RXyKprHiEzn3D5n8hX4v9Q3VAPYg1yYPYDeKbmDQ86wZMt7ActJ3ioFQfLy8vBE9iw",
  "key25": "5sjkPtEkzZv5GbY5j3HpFHAzE6y1A6To5KEfBSjdUYaMeSogw6NK9Vhe7cZ6iTBhGAQEJRixc6dEFcc6wXsyLpce",
  "key26": "3gb8Cia7CQwRiVhB4ERhqYKhChB2TbNJiAjy6fDHZkXFt4yMQwFr7bvtfesbF8aTXtwB1Ks8sLzUMjevkPdi2pZi",
  "key27": "3zeTo1bZ5td825RkEosCmAejDG2PfCvYTqQiovfLznSg52yBKGAYDQ627fGKdxA3Yq2LqfUEb1k7T3CP8WY6ygVD",
  "key28": "2jF1xaRN5ZJ2qopyHA3eezJdhQXK3cs22oXd9eM4m3cDLapJW7KbbTWfGiVY1xZhEDDUfDk79qtqhfJEpJJzvCdq",
  "key29": "23TiL8XPc9n7snLx8biRZNvS4hxTtSW3n3JkqLCxRpKdbtnbnK9L1AtVpikPVr8CnLFds2fHUKK4HE9y4KWHVh6V",
  "key30": "4nNr5Ezh5nTUVooj9zo6FAYJvPi2HxJ2gpcM3k3g84vmmyA3t6pDZHPrqGVpThYz3YykUsPdYQHZkkd272aYoL3i"
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
