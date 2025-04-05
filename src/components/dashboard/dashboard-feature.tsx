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
    "4VNFgvYBBcakXUCrF1pHvSQhcw1UvZaFXxRxTBkcivXAWzCaX9TRd7grryjFqFgmyyREYg5zn4K6fDrJBGhcTUz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEdQgXNDeA9Q6b19fvZcsJ9bsj2yHzjfQ6WNcgXRAq6mHz1MfQjT77gFKvC9nMxRnzn3v2JdqKzHnNySSnkhkTx",
  "key1": "5c9UvRLzwzHuN8Bv26T8zK39m4mFTa7qNWppqZqJuU8QM2b7GT5vtTEQQFkXoozwaQH6afM4dFzhWdEiV9DVQeNn",
  "key2": "syj7cpr1FF5nQwtXrs2VNJ2uKNVjUpD9NAy5uFaUSjPCNdWAHLecZVVaEYfGmUzVfZazhcVWDMJo5UC4vV9MKSe",
  "key3": "52BasvAyDTdGad4GzBZiGCS31ezcr7Pmif7aUaC51BTbzGh49U9CfxsjPkQVv2D4decc4oqvrGVsGouZQ93p4tAn",
  "key4": "5jcjGU5cw98yVVLYD2wZnoEKEMM2E14SGSoiCZ81nhSKeg7x7cWraUWpKwz5V5VHiysJijtLXF9WmkfoPQG71CzA",
  "key5": "3aDSGWaiBaBkL7TE23yV5JCitogfeSjPKQg6F91nvPhVJWs4fv2HxbVpVsYmq2XLLwpSRgb2YJFM9WrFQ1NSp65Y",
  "key6": "3XspwqQV4TPCxjNJUmzf3RJ5AYGZhKxyn2ceepKfYkPhDiU8LNBmJE8WTEhMtNMcm71eFKTsxpYRdLRjSvVUXbar",
  "key7": "31nsdoRc2ZMacWgCmGwD9Ctvte7huAQ3s2HQXjanUpgYVdGXUchAF5QLxtsUiL1LdM22KRYGzD7MdWXVB7KyJ3cJ",
  "key8": "5RDoGWG9S2JhRmmBJWJRQGEgt8ej9gNsRn5FJg3x1ouLd6N4mZZmGDQvb7rn9omfZcvPCkEtxsUKDCkp52ELkqbC",
  "key9": "5bkB1nf14WGhDcbu1PnerbQfQvsRsVd7xuyfLUZzzrPjz7shwDSt6pDHyWYgdwRZhqrWAG1589tQbxZkPczjfS3W",
  "key10": "37wNEcEEYa5K2xniiPwNKocVGLaGwwu3Lnnu3snMjo3PJd7iGc2sh9Er6GyZViNp5CBkGHbe7EwHEdhrE2onmyUk",
  "key11": "5nBkxVk4KEPoA8BN44DTQVt7ek2EDGnKJRrWHPotZE54DRtGjHhu4NF9W5WuFQypKmQUrDNWygi5FcJ38w2urapF",
  "key12": "3nweZJaZnEdw4iKeBdyL6DatuxRKy4o87viUCe4pPwc2yub49SY55J1qXteB97LgTFDZp6rx4qhgRp1h7HCwV8x6",
  "key13": "T13vdQ3vW4n6Tv6GvYmysqY87unZ9X5M45qEZK9kSzYsMbiAP8xTDoNuQyfDvi28vZUkmEctFRBBhPDLL3GxD8h",
  "key14": "2QPL93aLN1rMz7JGGGfFEt5nPKXcq4mF3sVaaKPdCdpCfzDc5xRZtSK9ttSY1EC7R3y4VMa1Dj9DXvDRdE5S5qFx",
  "key15": "4csudW3PrByBeUC6EzLH36U4Fbdf8FSjU8sEMXSczeVaaMGY7CTBgKiXGLyfwAFvNyAGUziqY2FjUMZnrgto9S1",
  "key16": "2cPbX4w7t6tNGo3mro51KderbY92VG48tYPg9XTAQWP9wCB9qTQtt7ySZ97QLhFPPXCVHNRxYd2NYG2DUTPPYW6W",
  "key17": "4tFErCXau4MgXRv16z6raCLXnWjTP1oxwRP1o2wpXQiszF5RZEc1S7xLdu4ZX2pSagi9u3fd3Lpz8qJuL5hxDMnC",
  "key18": "3kgXSvAv343NDB1JZrXB6RrgJz9weH3C9FPZnh2nXrkKYg58G5Ng5a1BBY3trqqMtC35ePWucPnU2qhLctv5vucN",
  "key19": "PMHrHAWLNVDh9k7DXNYc82FwK8YXgmGUDPaTqrD3nUCLog3WKmWsM22hUfbErL8pQfhnT1Dzhs1h3bsMdjno9Tx",
  "key20": "566YyPdZWnB7rhezKPoEkuZo7eHNgwKmBJ32hZG5fCesgrk6nePeaAEST1YjUm5jDyFVaHduCJhknxQfVgkMwPvi",
  "key21": "4sJc5B2GNZG1M1FVoc2v86Pwh6xcVCez5eYMweWuD8KsitY2DAwQ4cWE5Cemt6KiUsZRHsFJ7JyhWLadfmBrLWHx",
  "key22": "4aTAELjoSrBS4gDkrruNYApjLNUNA1Qbw7ZKijVxgvfz21bKzzBrTirSCS7HSgz51ZGb8qkW5wDwNkjdw8Qopk2C",
  "key23": "42ioDiRHdgmHgNxyCNgYb9HfJpceewteD1bEBhKD7DXgNhYVAAZKJGkZfQdBp2WbfyaEEPdXStFJouB2rsfVFdrL",
  "key24": "5txW8pBEn9cjoCw7wMPvnnzsFyuVbormmNDQzwQ9dAxtQ4F4zG1YjEbGoqvsnBcp3azbJsWH5pWscdCqBhfuZMwo",
  "key25": "4HU3GaBJDFasQybUJSrqutZTtiLmNupSSVBygT3iGADsUkhuGydwvdcwGT2UncAdkQgeJoZB7i1HCBmu9aqCXPwj",
  "key26": "3vddPmEFJ25bK41DMLNhaZaJnFgMTJ7pWss78KUuaYDZU6QvWw9GfWvAVHkyptN2Te3W8SVXgXyg1WAd23Bw2LsQ",
  "key27": "4Dvoq8srYVhLiQCFspJcwzZZ9T7ex3GU6DyH1Ba8tYmPQWfshsiB8AtYnVWMrk6Fdk2TZxssJ2h1JHxEfCYcS6Eu",
  "key28": "3oGoVZtnFfQQfAMZQvj3P8Chu3vK2mcHrNC4N8u662rE9UrXdpHnSKUV4RHZ9ihh7KzYYsgDbiLud2KhQytjN8XV"
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
