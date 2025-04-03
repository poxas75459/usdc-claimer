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
    "37MJtmRSQKFre711T3HrQeoYrL3N6UYg7j5L3tBZ3mmkiJ7iHoREpwQQXsWY1vyLAc6YYeF7DHLx8D2YxWZoqczu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32LjPBCrkZioaSoWutNE4ACcY1TiDB4dWLvngdV6MTPPgxgG1ujbjKmaWsJhXZ9ZWXwy2XbquTxzjdpzNXa6y7pQ",
  "key1": "5gGmYko2aGNLm1HCoMFHq1dYdfZ4zCLdMQ1kDA6tHwas7APd7naKrBbJRab59xSaHnjW3XaVZg6HrN5S1qjxqgmg",
  "key2": "5gq3gXzf7u4U1dYzis1XnUJLLkDaAAG2uqsxbsrsyNaAHX1KtUn6qqJmVupFzgTFbZVBkkwAWjrszfHcxrpLb9Dn",
  "key3": "GcYEof8wY3dDU4WXJwVZz1c5jbxwGyPsrdPutHKyK2S4qMzuxD84Q9Y7rbCQQkw4XSQ93JBTe6vG1UiZqC6R6q4",
  "key4": "5vH1d3gFErsoyCiwKmQRBe1VPDxy6DFfrFMBHA2eeDPPbJ9BVx3A9FsGMugvmFn3kLmkx9R74Y3C6MJmF55BXuHz",
  "key5": "4YGmJ17hZT17GfZvydQ6GAzNGmE61S6k7aarrJt1GjHbFixiTRmPAfn2a1621jmUyzR3Wxq7otiCLZadt1zei8oi",
  "key6": "4CKBhQKDJ5Gt2aWjhp28N4XvxGrpCBfauLniQ5WNLVszmaJTYD6Eg3csZ6Ym55w3vPP1c7MHnp6snS8gdY2Uj61b",
  "key7": "4YhXgsLGDx4CBv7inoEibUCNbXQe54v6FixF6NG3kvUjFkBqkm5r5yioP4n51BgdC7XcEAgSAnsXRs51dNCSpDzw",
  "key8": "5wo7VmSQyuzxzwpP3e95hggom4P3BZh85yvcBLr9prwqHSpMeKbRUSbaDhVqDqxKDFfoMZasCesikaoXomKG3ymK",
  "key9": "2xYKdUpU1fT4K3cauDzJL6oauWy9StyN3iG1oA8j34zZEULu73XzpFyrpmBPq3qM5ZrRgoPE3PtY5sY4MXAEf1sX",
  "key10": "4GEAos2eQncV6aBJD7C9awWmhhmVA2vLRfPew5AoBZrZgkLu8Bc9RKfPfL1u9ufzmtiFe7bKPMYLzscDJWpJNBes",
  "key11": "2gTq3MJGg56CgTqA8inbfzbfoL5GwsGKmVS9bhTgqW2x6gdVUiLCtXKjkVaeYzJDWaUAucxMYjPjHLF9KHpzXELx",
  "key12": "3hbrY9H1Cy6hoJKrG8ZSYGWZjxevcKWxbGTYsMTR1uvTQEiocmfhtXoS4vUPvFcmVx5gfuqYmeczDvwFmh8VWxwP",
  "key13": "53BisyQ5Wx6GWk3W33NeHmqfDpwye65SEEzUTqiJVdJXXPmsCzGgduZtd8jEujhXSbu77zt38T23ngzhnJwvAfjs",
  "key14": "3C1i89W3KtzPP25AVR7WMd6zTFPjkVTnJXQekVTfy11WYnLPxS1kLeUs7euLKj5SF8jo3q6nocvUMW6jnbKjovvC",
  "key15": "4mVeat842VZmkPtvZjXi95HS4hVGbQ6PniBhqAPnjHvw6ajt2LVPsY55e6eJkqSAFEA5DwqaLP97B49w2PUCLqJv",
  "key16": "3nrbEyoQBLimpGncwVFNWjV6AwEaaPkgG3udE9aGMeJy9LVhGne9PWo3UbNHffyD6md3u5t9wtb3pDU2qnMXu4Sr",
  "key17": "5JX45AxLoumRJBtZRRNg19vg91F2SvmXep6XKgAEMhf6au5yuRQHZ6Afgc1MduPHPcn9nTc1fUf15DLvsCPVVe7j",
  "key18": "2yYvMpEBJVCcoyXUPFUDcVq99wVGscEkRru4hMUN9uDbAMAgzjZCS3cRvd9pewoJTRj2qDBSqERd3qVVa53LVsfN",
  "key19": "39vxcFDYgjXU9QaqSkbtgCtP7Sp8xMfoS1Sdahs8QWoAdmkWk4r2ovhLqnzcHKfWMBdiBYmvkeUHeU9pg7BANCE9",
  "key20": "3RNkFdXMuMRVF2it981XeUnoEhWPcoWPpqFZqdWd4pgmqbPYCQtAryQkfhxLY3VXdW8cbgV5BMN38CHQTxbYJWVe",
  "key21": "pDbowzdKBz1rS4F4x5rUbbm7mRM4bxLqwkMVoN4dQtCGRs8xqyuZrUwuxSjgTz12ryDFbk583GgcQbnqCHF7LKH",
  "key22": "4gH7R9heht8j1d8iJmutwKh48pmpmqeCZPuCShkYTxKz6LMvRW9ULxN7Df3ZS6zVj7bAq9AgeMvaUSPkkBsobuT",
  "key23": "4qPpQVm4ZAJpGDoZCADT7PdtmNq8gVaRDc4Q6PouQU3Hkatfa31zGprtSZ2XoQ7tmdHXewchrWzzPVNLfdpju2ef",
  "key24": "4NjYrx7ta9KWVdLKZY9mELM7LHg4Rjzoqocfs1TyZwpnr4xddbACgh2cP4TWx2WRvizGm8uf7gwSviLhM6RNjnZu",
  "key25": "2dJBJCf9Q7Sz1NPaecxxoMHTfUDgJ4UNe4pEVzhxkKrLUcs3RtfcatJD4mC8v2YMBE93fnMaEdqqcBEFEzKD4L9z",
  "key26": "629cU9sBHmSt7da6CkKPij2MNfHBZka1k2UZMxCHvn6znsFVcMKeLGXSajQ7LibQmqq2Uog4JasXs2c3hsKVx9Dw",
  "key27": "41iPpyzLw8Sdz5HHzfN382MHd8BStuSF3GKi3isqw8HUzrSwdWoDAywH2YxbT1r5r6BAE5Y7aYMUzLv9YMKhePeT",
  "key28": "3wJhFJL6EG7Cf5j1FXvmPLnjcJn6jCr5Ao87kxcQNmUop3Wf3unPtekUXgC3NU9xqTGbyKyrWKnT3yApsrbXQfuN",
  "key29": "yvhV2zsWxwvZL7tDMxW1yWytpc2LeXsArRn7rKC4N9SsrfS2j4CYyJG9co6frNpE27opXDPWsd8Hjuay3o2AaeK"
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
