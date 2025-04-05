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
    "4CBABgc3k3KjZLq9Vy4oo8jvRDnoCgy4LTnGp1nvVTwUtV5zSKGKxD3JgKkauiiBPskp9PN5bUNq1JPmAtmHAzfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ma7UT9HpNBTz6FscRjk3VKhxu8yu8M94C9ZyLxTQTZpuwko3oQ4TJGwnc6v1w5Ate4Vq4nJS6UDErcqsco4pgVD",
  "key1": "48DGL7zUEyK4gJ3Cg5Hh3FztRjBBJKBn18XzS8JDpbaTM1aMxeHDjrtMd7ebJY3CSfxY25Mw43kGnbmoh4cbvtTi",
  "key2": "2R6dPJWQiZCorpZgf2iXAQK2zaVrTa29abWXoEnhDaLCZUhThuAERAHyoHZbMNcD1jk1e2n51NFx7zPGJLG8jnxz",
  "key3": "4AfuVEBpZRAbxuthodxyNYbCAbvdB8P22mB8UTSbhxRJV3T5VPmwRmjpmXcB4tXCkQjwgsE44F6CouP5n1sUXVLF",
  "key4": "3ses3izpPMRBN99wx7w8LaAdo352XTg3nUBCxe8nHuFJiV3ufXz5fuvRR5vYiD9mY1V45CQVL9F3vmRhLKK4bNWP",
  "key5": "5xy3QHaJJ5H9YzddGbcaMLWdHcZoSgD92qjy4xgW3AgXMf766LJyyv9veMLzarNPB6g3trzCTgfmfxJVmrFZyhaB",
  "key6": "5GLb6tMNUtrZCg5izTukGNQJbC6v8UKfg3qN34Jj8bmDtYNaV2rDu5r6tbJkSRynctGBgRnFoSoq8Uvck8Y8s5yB",
  "key7": "2JPwjZsdPmtUiGCFoSRXQR36tGK5kXBpav2dLBj5cwqKGBHopKguuBQtDfCTLoVFaix6XQkvV2ohKnTRi9WivHwK",
  "key8": "5YW2RkPqYJWdfQkxNt1i7jZwKYigw3d7b4RnmxhMekLPoQbgKemtERfnY6CmRWdy2UbMC3TPuh69ehGoxJo8DVTt",
  "key9": "2YToXepPK42by9m1fosLYbB5uUS14GKUYYDd3oUsGTHbSGV3yoX7mv39M4p5A9dbPaAtaDtJMSCPZiWJisZctLq8",
  "key10": "3d8MVVmLDerWFhA6w91Sqkhz7RHyB2zx2WhUucF3x5N4wDsGuAXhCZcSUX31sQuhH5GBLXASFBW8RBp3iMVLqvnn",
  "key11": "3qxF6X2Yaj7PgRaM9za88fHwj19s95Za6ZoCEAuYK2hVpinyjMYPwBGvJcNmoDUV6N644wv9FxV5VAFkpDr6YCHp",
  "key12": "9TkFRXEicJ7qBtcaDrqVFQw9pKKAgQM9NVvCDbh53t7ykLoKBjroMViHHECSMQovUQXmmadU3WhNLU1uiQWeoNH",
  "key13": "2ftsHBKce15ARxUVvpGrPzoYoy2iDfsiWvGqjobdPbnv8tuCDgpxU1dPELRqa1wDNSayFMiGzHFHSvKzBgRv4312",
  "key14": "2Fb3tRGqmegGbuveBCFw4mwe9yJw5AeeFs79K4gtgRyBRE6eTD8s5nbAT9MSdByvNHuASTBQ9QgDLyTVFC7KuZzx",
  "key15": "3bkvAttThwBBCVrfYZnYTTkgQ5bWdo46SgDTzeGgmCtZKX2EoGZmSANitxNayGobK7v9oqMbjXHZNn5ZfAmyHUMN",
  "key16": "5h9bdArja1aN2CrGUrV9m6beH6kfiH4WbgTupsjT5qNpdHkzAbvAoW2azBaTM1G4GCs4fgztjosPPiZFf16zienk",
  "key17": "7GEiAXSvRRDBhiw3NNzaSECZauKHJTrtKB5FgceKopH94d5f35WMcFw32gQT5t1gCpJmnygzHYqpQNgQoYDHX1E",
  "key18": "2EqYsu9uVbYFDcxKmfjKZnSNzZ8f6tzbZS5jzjoif6MAGoo6c8LoGrvGGQVmNDaTVQFtrQzBjP12HPKqZZUXmyQa",
  "key19": "2FcWTe9S5gWho51rCVV96y8He4HgE19PW7jLDD1kZGzsiMYQmyWgX3B8RVZxFLVRiyY2tQZihpSGZquu1sEi4Npz",
  "key20": "W3bz8EPhnBBJYcvRT4LRdA5HP48WYGaoWNEs41xNN4dRj5MqtLZnFr9fNRPUu9RiTVweokR9oQBc8q4eeJrvZa8",
  "key21": "43Wswdd5FWoVzsMYew9jVk6JrZvqFf12B5fxnWP1tsSV59zcG8PauMG8Vo7xywK72Wut2SDhYtz4oqrdgToTYEPV",
  "key22": "5eZ1Q4bao5cbedna6gWAYmaQ7YoxrzqwKZf8828WJwH4MZu3bucpd8mArTAckCoodkx1Hkvi3oCeMmKCMfmK8c6Y",
  "key23": "3zN3nTSfnyJcNnawD854w7usDw4xj6yGYVaspcZFfEK5Ck7xy7WXgY6Ga9f8frwiFj5xz9LorsKAJo1Nf3xVPYZx",
  "key24": "DBHZjL2ZN39TxKmt7RLrAnE1mb3HbPupwXr2T1hwNG5SeVr5o3wstDt94qpPzFQ1qEtBBJHXXd232mt45aove5w",
  "key25": "2QDyQegKFseEJQ9SntQ9xU5qCte3844YDFqq3s3YZX7ALH6rTHgHyXZkFv1yh3xzyyCwMajSpNf1Vg58tTcoPQCJ",
  "key26": "67gPpHtJdxc8WbZKd1dFYdwmHjsJnT3bXwqRcJQ7i4g7hjBf4sbQNNJuwYbrashiVVNPEHNGy5b3em5AwpJoY1cU",
  "key27": "22FUhU66djFbtx4jyBLAdMa84VThWKxoufpbWsaDJNeyt5QiicuK3pPc8k2xP3VwBRosnNdW6aVvwBVjkZAWBAZJ",
  "key28": "2yvWuzeg1Cu9puxxtEvJFQKhJovZZW2DanaaNu5ouWZ5U26YaVB7gNfxbKPjbHiJ43TCBxdvz1sSGcFFEnw6Ttn",
  "key29": "4Bz1nFQGdNsHuVzPUcwJNHX8JESRiDpbF7aCz7c2ygLh1AdWfE8k2ivhMkNdDxBLZPbSS9g8BWYdUwNF2tzDuxPz",
  "key30": "5ZM8gBos3on5LajeSHZRxAanu1PbNPfEmLXxfnHiwzz6GY7qDpmRwcwi6zbF1DdmsCW95RNyUfeJ1Ty6VFcx7j4z"
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
