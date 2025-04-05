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
    "2ND6NrrmoyDzgrmrWadMcoVXxNhLsmm77r77eY4Br32PdocxN18rwigwSajMMmuJfn1T6GUb759qSxVir6zWEtmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvvT6dTbvkUyZHaPkrnVkTxEfcvxnHjVgTVuxiioyYxU4XyM1VrBvRm86vyQ4QUaP1EgYdeKTrEqLEPm5MnA1zJ",
  "key1": "57ffyNJhraF8Dyda15DTyTtV3GPJ37TRASgDiG6kpjauMiPyj76u36SBPKMLMyhFwXjuXhQ4FW9g1eHw55YjSaeZ",
  "key2": "2txZBCGL3a4awMCC1FtByfbHz4hh36mNtus9SoDHCLi8DFAoKWStxQsspMSTUppsZQCQH6VZBVHHs9nHr77Pu9cu",
  "key3": "5QyTuArP4HThi2cPCrJcm7dnzwzHZbAcPtWm7W1ZSNceVMxFQgR3XdV8rMrL4snrtWtfvbf9bWzaomPuppy2sqsx",
  "key4": "2Z5WpSSKshJrhyv6GzZxoKZqLVM73GKHme2aVbViPFVDKCcwzgYXfmjwVeaPiikd29hjwnj9To3DvqEw3EVkpdgX",
  "key5": "2DDGuAxLKUDtKEFcewXRVx4vXdLHNGVa94XJpf3JvJTvWxR836M75EvFzLiMZ1CViHVJ37K6AAqWemAFpTCTFk2V",
  "key6": "66JreP4e9pQAU6Nt4B3G6Xbk1kk8ijCsUDTebv48VjZZPJvYymQMedznMU9gUWxp9TAKPiBfvFEdM5QFWU4eQj3z",
  "key7": "5ee1kd6nL9AwdmJBR55Y6JLnczjtwvsyPAWo5xLwyYf6bPNAmgFTxiSRKfMStMHun789UTpW3EDoW1qubXmoaipS",
  "key8": "2wnz2N76oU4inmocjHSSGHTPWJNSFytXbbzcGxTfUX9X1rygsfEvxqcBbV8pyq6jDHHaxbCdpiZCr3T4vtv3NkcM",
  "key9": "2JA9WrhKuceVxMs9eWNa2Ty1fEAjcJLJsQNKkrT6Mu99iskLVY8yFZUNxXsfy7JJ8fmRoSkqJ6AtJSZoSVbRofaC",
  "key10": "2QnE7WRF6sdVK2F4XjpsC7cm9uJNPCGumMyZZs9ZfcQb7ch9VixYqjnAGTtkHK8ucepBRk7iu2Rhnya2FwNUVFEj",
  "key11": "61i1MTc4PJQUUcZs6s12DvFTtsJtwgDP969SK9A3yhur5rJQXYRn1CCV8Zyv4KDPbjcD5fH9oJTLWy9CBHDPAGwr",
  "key12": "5YkUJgHioy36z1gWtFwXqb2PypHRZc74mJHBEbSufgS6aCqnbPGa4G6VmwPPbETttincf39K4wYtMrbsHU9Drrpo",
  "key13": "3MV1uieoDBuRCRoSRoD9q7KGBeP3XjfUP7aD4H9QKVDbJwPTBPi4XQ1iPFsbZtuAn5Kb4HWjxETyxCVzoEV9Wbjk",
  "key14": "4teGBRnsWZpuXhaA3v5VGV4hHF2S387KSbcZeRUrX2FQVzpLU4hiVYYuYm6JkmRu7RfLDKdU9wyNB4MYcQSiSgBc",
  "key15": "4q2TqEWN9iFCf4chLgzYRhDn4EKjYZQUQ1e1aubGgdeNdRX2t3PcmK2tK5cmzJXNumzkS5k5Xxqh2k5rKCni1anp",
  "key16": "5y53S4F5PXzg2WbUVKJ6SFGC8Jn4gMXHF4zxrsBB7ZLPEnYHHDNGV3JehihvUzreMpHwF51Gi4tNtCzeW4TNZep",
  "key17": "ugiy1fs8WqHBFx3gG1wZarRL9uJ9gnTzQzX6zcm3tszrCSqMCzrtNvpfyEuqsJLajsvX8pf3Fk8YX744HWs1REF",
  "key18": "5humW4EwjjjnNahHeA6vx2ECNRrXPN33qcCC7CFtQLqDeuZBiimedFiiakyf76ZiZxunxmf7W8ujpAedBmT9Dnpy",
  "key19": "62tBVn7DdySDcZT7EKyKea3LsMVub8XBQjtB1fBEDdSUCaXwJNoK2oaEjkHcQc5tXvuXprzfBitvbHUV8oB7NEXz",
  "key20": "4kaDCM5xFLtnhYoD7przxaCPaCAwSQDU9jaEQmK3wk6FycLp2qyu8hFPGmC22eUwcpkoEGhvGVoYhm5RfK7B6U4U",
  "key21": "5GrJqn4FfDxyx7hbpE1hqQYDfSBDFbqovHtk3iAkzQKG1J5rs1otWAjTroiCTGtwEi6m3YfxQ1g4geK6iX4syRp2",
  "key22": "3eANoZhqBgiGkZ6tF77Ctiy9cHT8m3mLnQw1MRKNidfySuYKgZVBtKkoohjqDAeZeLmSu5FzfufzTx2UavYSynA3",
  "key23": "3hCEACKpWorkPWAzkXfSCu6ZQBrLns3LBRpoEhrsZ8NGK2d9Q7UHQ7zdFLBBztoUGj7JuKdCp2TVMEJmYy4HFpqb",
  "key24": "4gphcwkXMBo4bZ5CTji7jeswdCKKyqMJMnTE8yoRz6yGCLpQTUoMvuoyvGQDMz8rPiCgogH3caUqL8D3ML1tUtFH",
  "key25": "Y8TY36HphWbcSAvhJR5QxHNB5tYzEn9Fc6CGVVGPycQSw86hFoSWMtcdTfFL6CNqxkZDVa1QTeMm7rRSCUyHpR8",
  "key26": "37iSYx2NfYQQBZM6DBQ5kHsw3EVJJ97pRqqKkRqNDv9nf1MCeb68DmDLUwKiWNXdmuJihPJhVtSyhhNLxJRVhyWn",
  "key27": "39mpeScJFZGxHmygZ5UAFPy1tCXJpRvH5A5cdGF2SutjAS8WtkSVz965wUnUYUoSD5iFyg6fLr5H4e73R7StrmZY",
  "key28": "2yMWV8Dg2pg2GrpdL3UB8RE7UhFuFub2oBCzVgJLi1KsDKHWSfnzPknn14nfBEtJqCk3TAvxGaTQd7hVPyfBMWK",
  "key29": "2ahHz9kaj82gB4Um1RoCq7z2bfbVRk3pUmQ9SXMcNqxZRq4izLkcpZs1WfzcLU5EhCqzd51GKB8wd6SW68Vi8QpM",
  "key30": "4s7EioD6whnBVkDcFTxemksCU1jFhdKCzLkg5WXp976hXdZ29AzS8DQsV76ofArkrvR1UbXMyZAU3nNC4zSTD7AP",
  "key31": "3z1jovKqg1q76X8xmhdPNQzruNBA3CLS9bGctMafx5x2gRRhoXaxDVyTD156Zvn9CQdiy8KoZpDN1kHgtbYYxiyV",
  "key32": "2rBacawVyPS3CuxfP7YJWNTVjV7J6oT37z3dQviqbBEo5wJtjWobFEXyEy1B7vQvWjmoXS77STwy6WugHRaAs2sy",
  "key33": "tAHKdsZugarQFQ93eXGS4Z1EdBa439GdVTbK6AgEpWjGTLVogEdQAgwvCHeTuV2toDYN9wyk83zqCMKk7J56Vw2",
  "key34": "3915ow8MzApC254KjnwkQUBnicvtXe1K51M2rn8hYDszS5o6KDf7XipVycRQSBduhLjeNN5MMddPAZdzoTkqAh9A"
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
