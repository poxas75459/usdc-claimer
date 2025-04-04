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
    "43CUX7K7KTRLyHudo4Pc9bAHkE9ZE11mPBan5A55KD6K79spBKtWeeHDTQ2pWB9As4tuRCS3nUhkbELdN3frizkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bdu1JPj7PiZ88i6Cce2hrR8XLLpvHyNU2bPGxQG8cv5pEhGkkzF2xRZnMGV6QXqPH8tMado9E6jrLRvW1DoiJFY",
  "key1": "66AcVXfAqrisT3SsdcUn49aqis5SRfbhVJqqvU7MqkpJKf84KmDoEEwAEzfUzXJY2rF7sQXjjHQK3sM5pbn4ELGR",
  "key2": "3LmLeA5Lajg77S2yJBt8K3qCX8iVYZo6SkpnrQE1guvE1Gx9rnibkT6ozhprNW8WweFFgQiQVM5iLchMA9Q69CHv",
  "key3": "2ovz45AGKCka1H1RUAFbzYMQSZz5o1ysK5rHuiKP8Tr6vqLb2t9nsbhJDkEJ82vhfGXrhaUaEKCKNdwZaefWpvgd",
  "key4": "4zWsjf8KAxUwNpHi9zo2WqPvqqAtzVJPe2Auvw8ELRbsmr37HzcyU9T3xXBgWHaWeHAGMfcmTZDg9Am7YWHqKqwA",
  "key5": "5JFcKUqQXyfRGaPWhWned35fdSffEwusWNEuTfkDk69kB1YWkUmuXoPEuYu682p494UkDwP4qkeMeBnog2KrL9xu",
  "key6": "N1XNb6QfCt1S5rowKDPV4i2gLX3NzowyKzWn4yJsqqeUerDoNaQpEKLdtnPt8HV45abjoWArnkChDj2AaYqC7W7",
  "key7": "62c8yd4p23fS1SLnReV3iVJEyRJNDFMLCdkxbPxiFiEDBd1q85Pnp3q5udBQL5kAmrJwJgi6vZupBCtodPUcTCzb",
  "key8": "537v717sHL3T51t43Kz4GLTsGDdQpv2TGxybMjNp14zngZZE6HXEZ97Vbhs6JXD4S1ijPzD6oK7UyRNUbtWWjL2j",
  "key9": "mWNXYXe9Gyo4rTULw2QesggaVMyicnXXT9ALbA7zp89Y7HiGD82MWCPHMmjd1LhSB9SUKDnB3evQgfKPoffa2H4",
  "key10": "33BS7K6SX8SwvvaFgwYVo6nnisK7HzPwyHn88xQiBp7TnXqFKDJPKMSJZCX1W3J9A9sDzxAnp6swBej1kFPrQAsL",
  "key11": "5RzZJkttSwrmvT6K5whGkNjpWjdCpBM86jtcTPHmebKem5fWdyYUEFX3fhDRbKkjTq4wpFeBpK7TXXHeLTiYJrb9",
  "key12": "5CZnqHLyCRshD2wcbapDoRN7M4ioyrYV1dKEAAtgJn7UYW2U4gMeWXzR5aZwiUZ362QMBpgHo8ukZXgzDEnSrvTK",
  "key13": "5XHbpS8ZT3xZF3xMRiBmktCsXbekmTZHX4u4byjNjC4K3SRRtmXDaTnEwFk1Seqb857ADsM6qQp9AvCV6nQUMKNM",
  "key14": "5wniZcvhsvVuqSs14Y9TxBvWui7qHzKMJaT6RfcxB1E2ppywU2m7YwYgxf59iZqgRvY5hDqZApigmZczpzvGPKPr",
  "key15": "3JYh8DnXnMsTyWHKcQQ78u1gYy9jvGNcgTJWNFprL1ycVWsSduCCwmTPQenmDYvT5q4KpREC33eChqk5xDFxStnT",
  "key16": "4XUxHHmZzJBepfx3VaftFMWjp1pCDXrAvjMn9MVNNBeCVvTesoLKnPiQt7tsq7GbD5Rb95PDVDA8AMVr2xss7Zq8",
  "key17": "3rA3guRFJJiQuM6F87WsjFBGL6aES4gpmZjMBt4LUQVLsy6XkZxW3K44kqRzwYfZ2KsXidQyPGDA6fmqJiCR7pFt",
  "key18": "2ZsWu9fo5K94ACmitmvP7WRps2suEL2EtsmoQvsiw8WSBumnmtDV178YaqAZDSRKZtzmYPZgPm5K5o6wUcs2cEus",
  "key19": "4YyrhnSaYJ1VDR3HNGxZRFmimpe2Qp9ZAwJ1skxV9QShZMwpT1eEbss4TgrfAuFczXZzBMPtFYHqdzPzESpLUED6",
  "key20": "2hsKEqA4S5GJ5kkAx6sdjQJAyAPgAhhMbw37D5K8xAFgg5aa8iNGcEDHGWBptGiFYfCG2MWJWxczeRLwo4oMBMPo",
  "key21": "2sXkzy6MErUurW9JDH8n7Qm7GjSS7pyNgqv1kGca7ZWeE1nNSSA1WrYn9pKA522RTU5b7QeMPg9tw5uV5rZMu5Da",
  "key22": "5suvcHR8Uu5je7Rigij4C1LzAFyABjWJutwExkEYkUQHbz4RRrhwLhDhUvjUnKFFNJuevq5LYL4hDuzuSTEQGVeE",
  "key23": "Ve4kUZKkqSfpQc5PFskjqKMv1o5woZXaTLYprfyzh1x1x5gHZ4duQCaeuwQrELs1X7td5t3wj5nVMKYw5yop8Gs",
  "key24": "49nZisNuY2krxQwwreyjo1LM3Ga6JLGMvhifYxAkYt98mtmyMY48YDsV9awdwom3K1SudoJsL7yGx1Cq9NpkyEtC"
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
