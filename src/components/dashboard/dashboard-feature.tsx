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
    "2D6gGYzrKHzuhEJuSRiznVwyVENnrodiTgVT2MYti2EmsciaBy7jmuLbb41JTkNk9FLXSbDsfe71PSjBMakSSJaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F54SkFburnqTYNihnY4XjSHY7Tm8RoaU12JD59zb2K9VV3ed6R8B765vAg6TgfixiJEJL6kiSuAdqYcBaj5bha6",
  "key1": "4YB6QrXe1KfgUUfahJtxPdTx339ToZd6iPwaH1nqH2aetRHgyhdqKBpKdmMbMx6j1jozqBFkucR4oyqpMvGyCn8H",
  "key2": "32ahkimAt4yUdZBqgcAVGHJq7k3ghEPDMCq9zLyzGngaRbrVhe9aKxNr1fGxJFRhY9BFmWucFDWBoUdF3HC8r7Ch",
  "key3": "3v993KUQKhYMgzWhP7Ksjs7sJhXmkDwQtDp9K1DQ6SRj8RcrbuphaijvmEM7pXatnf3JTzuX5YtDcwKt7oeAjHdT",
  "key4": "3makKrHrBJE3LV92M3ssW7xA3ki4rxWHJsh1zRspMrKbhPjYG6FVeeUhNuq1AsenfxThgwRejWbFKeh83uwzLUV3",
  "key5": "3r4LMht4G7afTWnDwHGJu9RVRfjzqyUS7vQaPn1JChZXa5R56LoUovfMFLnu7Ju2A7BXBfJhgCNd2WJS9N1nSgNR",
  "key6": "5zCoahPLZSNiR5SbkjtrucoehJnw7u9w47tfdPFEZYNRiVApt17vWXaWSEkwEcn2emiedRyrEksRNSYnbQTh1WqS",
  "key7": "2rsK6JbqhhwU4WV6cnuunnz6NwoXn2cU4fxJpdVgfBvujmR3nWgTkk5LDuFUt6KcTHoqGXZt99nRCkVU56sRdCgt",
  "key8": "5RnjLobbRzVS24QL6hhqMjTFfAgU7jzREMuv4XdELLQpQ6dW38Dj4p8iV5xGYYqKEzgjStMmue4AcKHkx5Fe24nw",
  "key9": "23qHzM2aVuKW7juCJCP8kM6fpjAPRqMAJccaPerxWwoKw1YLy7UPaEcH6nkiXbxt4BJdAJ5a2fKo6KFJnyaxmsvt",
  "key10": "37uEkzQZtLnbWKPW6ZrNwrbSwyz8k5SU82hykfNvUhMzJ1EKd243oPAuUYyZE5VnoFpVA49HASm9AFVM2qSUZq77",
  "key11": "37ytdbtUrPSkf33J29r6xLk4LftZ6QRWB9pfd89wod2797sqbVscjMQMTgY4wtqMPYY2QFho9RJasZHgSHPk6tBK",
  "key12": "2Fejt7kEU1NQyURZZXXBrid49gmz5oowdqSmvTEg25khrWpzjVb2VGWVBiw6JXjHuxHYX7jLvo1RuiiTY9nUwfKU",
  "key13": "5TMMoWnRAy8Gzr4DLV6CLZ8kPWLJb48JhwEjWJ9PnwpmLTPmnbLtMx1VsKs5fkutmxPQruMz3PQb4dT2pfBFTZkX",
  "key14": "3uJodYUjYsBn5wq9zNn1WV2xvEdzhixcybqnkbzdnNuV5D82AYoMn1TL9JLLsAMdcN1diQ7CHZWWn3jiDR6e6uy4",
  "key15": "3c4axD4qJ86oR8Nz5GQjADJ27GtyYwQxrrVp38x5DdLsFXLTyH2teASaXW62TCWLHfA1aBrCCTzjhUd4E93TYuAi",
  "key16": "3z4jaZw9LJMjeRMZ5S7uVH7qJdsn1UVQWXcCRgdFPjmnwYuF3gurvS7yWx3hz9AeRVvXQX65NmeuLqvdsgA5zYp1",
  "key17": "3ab64uNnxNzUAKiz1BZqCLBk993grfx43Xu21vKCohgsKAV37vFKQ6UNKD3vgn4g8en62EtcJxdu1JdK8fPd8a9f",
  "key18": "3dtNbnAb9FYbaPmCUvqqub3JRfMwhs8xPeSZfWXsJWGeoxM1jrB595Npr8t4CnR9jieZT93uQGi1H2nm5kn5V9K9",
  "key19": "66BZrpthoKGJL6r16dsHkpjT6ms8wy3R1o5qGn4WXnjLuVbZ6pD71M2VUdUKYt8oZK5LdF21Vprc4HdrvdsTWHAX",
  "key20": "3G2rgafAxr6WyRUseNqeEDFU4oTis37qur72bpZDFXXqFPBeVWvCJesywC4QmApwk11D3dUBqAoCABcvn1yaxSxx",
  "key21": "2C8Vbpc7jBySePofkU5bh83dBMJU7Tw75UEJhbQo8E42asoxgpJJru5Zm2sS5dD2HQxVWJwucSq511qjYES8sskR",
  "key22": "4zLeWx3qJES5GoEfMXqAXHvgVaGEx2LkKBzaezgpoEgcZ6heLaCKX3jfKCC6p3NKPzFW52NeLG7ery7C3GYTHU3F",
  "key23": "MB6EzL8iZ1xdxvwKSoRCw6bR3LpLGDjbmVipXZ83eYmQmf6hpd2smW4zCXdkcnN3WtnYiJR4q9PhxUEMxcaQ6Ve",
  "key24": "4DS9WtPa9dM38VLCGyR2c7CE3MDftRk7CfCHMNye7jPqLiuY3uD9MbByZQzXwGLNwjjVr2ebqbmbjeb1QtTJwkrR",
  "key25": "4Racx9NBRUJXNbHbu75q1ECD2cxTYAtXqwRbRN7wqN9SAwP3NMYECQ5r8vqFCEVvq82aovKC2C6RmXJJT6vWowoj",
  "key26": "2a8CLGBGWfGqV2X5UkMm3YjWBUHVNWL9JUqPXVSaHztgMWUMqRMJWcvJd97htS6ErsNCMyYNSCeWtiZAZBwQ5Yjx",
  "key27": "4R3K5t3DPMPTFBHgdK4vNYpTFaLkH6HzxezPirjbZzQWUxrJ6vEfWUX2B2tQuGXpPgohsPws3FFBb3uKTi9u99zt"
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
