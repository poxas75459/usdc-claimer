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
    "2UDCamoMcgRUBEipM6LdERkT9mngR2RNqxequEWM1armV7kB9DzQtKdKXRvwLvx7amZPgiKLwDGd9kRquNvMH72Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoP31KFrHKngjcinip7A8Ey9hQ2MLQT9Q9Vp29fV33WYHx5t3q43gSZkntLcBfsVbXM3wF9UMp3YXjYp45f7sxH",
  "key1": "2qqNz6qCBPPW7YhWPJhCjtiboimcCZ3hAZPKDJpCHC8svvWQanHZQw8VrpaD1eWQXvZ7nqo4TD8wmVCpBurDvepn",
  "key2": "FozSXxzisB3pA7RvKyhAggEXJt8bDSCNWgSrKYyuSvQX3gbUt7Wnv2CRcC8BZ7ediWhXWZxBzuRaHX1bX9vWnaz",
  "key3": "4WQ5pYTExriTtQYZe2mfJyzGVjTDinDVrUpVQtxBPGARvdv1Pfv8nU6A5cHM2qBXtRFyof5v1ipUshc8YaQq1afD",
  "key4": "318sVZU5KggRykGVVxr5gXWNh73eFUPpaMzvra9iWHAF5pqGfsW8Pd9xekLKvL4faptdvEmXEjjCryj3nmXErSAz",
  "key5": "2wF3Kqi91hmF9C7Muxxq3H2wPoX85dmBQMzjwu9vHWTAR1sE73ManfbkrsZmGCDXEJELXHCkDyCc9gAEmWsZozoJ",
  "key6": "2hDAutCzDiZdBKybLPd5or3uwHJnuC7BxUpT4CrPDovLMD68B3smEHBni9GSjhV23yKpnnUHsF7xd3AVD2cLBcTD",
  "key7": "UcpsFmVvJ3j9mbTZDDZEH2z28D7RhtLHfsCD9BJZHRab9z6z8Hbgo3tREkkLVHfvvKCDdoMpBkcLB71YsZkwxSG",
  "key8": "2mXJ7DcCQGoqojmUVrxXeQYbpy2saGDcNLTJ7uPqfGZZ8yAYnmXiq18JdRnk7ABnArRqLK6Kg9uaEtZSDEP5UBVk",
  "key9": "5nmH7oW6beyXwzgqPateykzLTTh8tQvB2iMbH9oJDPsEQM4isoyPHpMCtVyRcVPzLdCL2BxssiQufYMJHJXVCh7A",
  "key10": "3p4VMNjX67AqiG2ft2fpGUr3hCWAqdNNWWWbqfzG7zenek2bagrR8zYrLebMpH2TSmiuqK1e4gBRNrhZN8ifCGgq",
  "key11": "2bsZ8AW2N4zCLADB7kwtcRsvCaWqBsgTxX5p47uCnXuVayQBFJfx4PtmA2AEzzmAk1TbHH668hg81wrBY6Pn3Hqg",
  "key12": "2yspegYZWDqQT5GVkkkWQ5mvXF2SboxUkv8dNQ8QM78RA6ydUr4wdQHeC8npY9chEA4cBfYVWVWogG9r4m6s2m8c",
  "key13": "xCXyRR8cUjCL7MgW4zQ8kcoF7gRqp1C9jZqmajeELxvWTKW2qoGgwvADeZe6et7FxuegdVp4A75UKhMGQZXk4zT",
  "key14": "4DeA35SQPa3SU4S3h8LsC5U3gZmfSYF1q5tUyHt1FSPmq4LGmEev2DahgWrPB9w88aqGcuWrC3gUS9dCZwimYHM8",
  "key15": "5L1173mFiFsAnceWmsWcg7Y8SCaDhxhRm17qNB26aZ35JM8K9AyP1MAN4trJPwgtdrnGuBbjr8URnQa77Ac8tqdj",
  "key16": "rsTdGmbTSzwracNuDLQRcbKNbDfKHU191QnYW7yxgzEb2wUE5Yh8K9RSDPZD4Qwu8ECWK6F9yVdJfF7eKcMCku2",
  "key17": "4yEApz6GHESyho7nJ5f9JMoE2RBbbHt25xFbBNYtBc8mqu158D3gzSmeqp6kDEzAAR7aBt6vKv1dkHdh6B3NJY3W",
  "key18": "4ZwC8GWbbDE67q4H7NkQirpa4e8LtoHKKrxNRK7QyMCDUw5avXR7nSZw35h5SpMfGLAnkSR1teThHcSppSXREyNc",
  "key19": "293jZjtp1KLLxoy9JAMvSHXyBCbEwCAfWuZVE3iEbaDrfbSmm4hektemGFub8dxgKH6cNVRP2a1QW9WWYgjLbrrm",
  "key20": "3jbqQgUBRb6cXyoocsex2UazNwfvXLvtDKeeruHkVD6TLjpPShiAi843YxURgjNt1yWVGgLYoFWZu6imhvs4XdEx",
  "key21": "5U3fU8cH65neUJnwd76yxzQQaff1KeCiSfkUqJQ51m9q82z68NPkte8TFFAxMKBqTsVgkZ1W9DjhPZivFv2JKEqA",
  "key22": "4N2HdBtvcqHTKBcPWKG4Bw6sAudEMQ8TVozVNXxgDDdtQN8JVvjnTxQqdZqoApmCLbursSgtnSQFQy4ARv8c3NcJ",
  "key23": "3FkuopPYCMqRgTunyt5z7fZNUXqWZs84wdkVcmAWby7akceHiT5osGpJGGKvBU1hcNdV2ycQA39BHXR6vYBj2mA6",
  "key24": "2Jn4769S2ap5Cu4FJE7tnLZsWcKeT9L4vvB8h7zPFejogVh5ERfTNhuivSnt1rZ7xDWXKeZBwvfW4wVZzkgphcyw",
  "key25": "2i29Soh1BwRQBXKfXRALmojUL5E1cqJfj6Lkot2gVX6GrksBgZNLyXknnAcNJsR3ZWNS1TDNxM1Xyg9WxBK6ujBV",
  "key26": "VxHi8HLfb5AKT45to4jD7yeiKMsEosjNn8LA8ffMxdpG5HZ2DKVUyLboktFgmtaYspJpDodM7wFa75xBaqMifAv",
  "key27": "4PkcrhhCGPugtQaWNpUvFTGXB7rXyKQxzykGXZjTUDJ2iKHgF8mU9fCFN7eFEoHAmb1xDP98V6dh2dy67Agj5WYA",
  "key28": "2drMAGoD4czmij2nDeuRqKJjMzuB5tcKfEHN1CrGcPsYqCgo2nnGhk3cXU8BLp2zi92ip3GisKr3yHVx9P1cszUS",
  "key29": "2W3UGhMM7o8SncDhhQNnS9hd2eXZM7eMyXe7NEa9rX4h2xUZyQ3cchUn8C7UhoY3QGYTvQjF1MZNsHZ1qQuJEaGf",
  "key30": "2V9oup1XFFbTiDSWQvfdMMYy2nuBWJtdcYCBxppX4k9vVB4A7R5hnmdPgfube5WSVtSY6UqxBsL9H5DHamQN1LDr",
  "key31": "4jgsNzfFKNJPkb5vCbvAJ8JpviqFVwr46acWiiiPGGrDZgv3GkaZhFWYGEgcVx5xWo6TCxZRuTgDErvHPzFoZrAQ",
  "key32": "2j9y98cJuP82dTYme43PDcyJja6btDqmfXLwBxnRQcxA6rgJad8szC2JJxgbkq7rJi4C1yHYzKqMjfxBjKNDtAMB",
  "key33": "4fLmHrNEJ8nfHvSNjua5mCBspPa6bTJrcwpgTYkXgwQuiVpiYC3Df97fE6JmS7e38JmAuRELCfz3Cs4VjuimpNhy",
  "key34": "4Xjy5vc3LRVhv86vQKemwu58FXQ5W8UPuZUan8eHVB8VoGjXq7iPGfNCgkHXQXYAH2hPGMM3MJs9h7pBBaZdgi24",
  "key35": "51aV5wroqZK1bbSWd9xR5gtmxPju7C9jqzY8hgJjLR7FCrU8dSL45Z5urgEe5bUaDvZSTREjo7zHjXBVtbXT7Jv3"
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
